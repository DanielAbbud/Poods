// backend/server.js
// -------------------------
// API de estoque usando SQLite
// -------------------------

const express = require("express");
const cors = require("cors");
const path = require("path");
const Database = require("better-sqlite3");

const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = "poods2025"; // mesma senha que você usa no front

// =====================
// CONFIG EXPRESS
// =====================
const app = express();

app.use(cors());
app.use(express.json());

// Servir o front da pasta /public
app.use(express.static(path.join(__dirname, "..", "public")));

// =====================
// CONFIG SQLITE
// =====================

const db = new Database(path.join(__dirname, "estoque.sqlite"));

// modo WAL ajuda a não corromper o arquivo em quedas de energia
db.pragma("journal_mode = WAL");

// Tabela de estoque
db.exec(`
  CREATE TABLE IF NOT EXISTS stocks (
    product_id INTEGER PRIMARY KEY,
    stock      INTEGER NOT NULL
  );
`);

// Tabela de estoque
db.exec(`
  CREATE TABLE IF NOT EXISTS stocks (
    product_id INTEGER PRIMARY KEY,
    stock      INTEGER NOT NULL
  );
`);

// 🔹 NOVA TABELA DE VENDAS
db.exec(`
  CREATE TABLE IF NOT EXISTS sales (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id   INTEGER NOT NULL,
    product_name TEXT,
    qty          INTEGER NOT NULL,
    unit_price   REAL,
    total        REAL,
    sale_code    TEXT,
    payment      TEXT,
    flavor       TEXT,
    address      TEXT,
    created_at   TEXT NOT NULL DEFAULT (datetime('now','localtime'))
  );
`);


// Statements preparados
const stmtGetAll = db.prepare("SELECT product_id, stock FROM stocks");
const stmtGetOne = db.prepare("SELECT stock FROM stocks WHERE product_id = ?");
const stmtUpsert = db.prepare(
    "INSERT OR REPLACE INTO stocks (product_id, stock) VALUES (?, ?)"
);

// Vendas
const stmtInsertSale = db.prepare(`
  INSERT INTO sales
    (product_id, product_name, qty, unit_price, total, sale_code, payment, flavor, address)
  VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const stmtUpdateSaleCode = db.prepare(
    "UPDATE sales SET sale_code = ? WHERE id = ?"
);

// Helpers de estoque
function getStockFromDb(productId) {
    const row = stmtGetOne.get(productId);
    return row ? row.stock : 0;
}

const txSetStock = db.transaction((productId, newStock) => {
    if (!Number.isInteger(newStock) || newStock < 0) {
        throw new Error("Estoque inválido.");
    }
    stmtUpsert.run(productId, newStock);
    return newStock;
});

const txAddStock = db.transaction((productId, delta) => {
    const current = getStockFromDb(productId);
    const next = current + delta;

    if (next < 0) {
        throw new Error("Estoque insuficiente.");
    }

    stmtUpsert.run(productId, next);
    return next;
});

// =====================
// ROTAS DE ESTOQUE
// =====================

// GET /api/stock  -> retorna um map { "1": 10, "2": 0, ... }
app.get("/api/stock", (req, res) => {
    try {
        const rows = stmtGetAll.all();
        const map = {};

        for (const row of rows) {
            map[row.product_id] = row.stock;
        }

        return res.json(map);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro ao buscar estoque." });
    }
});

// POST /api/stock/sell  { id, qty, payment, flavor, address, unitPrice, total, productName }
app.post("/api/stock/sell", (req, res) => {
    try {
        const {
            id,
            qty,
            payment,
            flavor,
            address,
            unitPrice,
            total,
            productName,
        } = req.body;

        const productId = parseInt(id, 10);
        const numQty = Number(qty);

        if (!Number.isInteger(productId) || productId <= 0) {
            return res.status(400).json({ error: "ID inválido." });
        }
        if (!Number.isFinite(numQty) || numQty <= 0) {
            return res.status(400).json({ error: "Quantidade inválida." });
        }

        // 1) Atualiza estoque
        const newStock = txAddStock(productId, -numQty);

        // 2) Grava venda
        const info = stmtInsertSale.run(
            productId,
            productName || null,
            numQty,
            unitPrice ?? null,
            total ?? null,
            null, // sale_code será preenchido logo abaixo
            payment || null,
            flavor || null,
            address || null
        );

        const saleId = info.lastInsertRowid;
        const saleCode = `PD-${String(saleId).padStart(6, "0")}`;

        // Atualiza o código na linha recém inserida
        stmtUpdateSaleCode.run(saleCode, saleId);

        return res.json({
            ok: true,
            stock: newStock,
            saleId,
            saleCode,
        });
    } catch (err) {
        console.error(err);
        return res
            .status(400)
            .json({ error: err.message || "Erro ao registrar venda." });
    }
});

// POST /api/stock/replenish  { id, qty, password }
app.post("/api/stock/replenish", (req, res) => {
    try {
        const { id, qty, password } = req.body;

        if (password !== ADMIN_PASSWORD) {
            return res.status(403).json({ error: "Senha inválida." });
        }

        const productId = parseInt(id, 10);
        const numQty = Number(qty);

        if (!Number.isInteger(productId) || productId <= 0) {
            return res.status(400).json({ error: "ID inválido." });
        }
        if (!Number.isFinite(numQty) || numQty <= 0) {
            return res.status(400).json({ error: "Quantidade inválida." });
        }

        const newStock = txAddStock(productId, numQty);
        return res.json({ ok: true, stock: newStock });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message || "Erro ao repor estoque." });
    }
});

// POST /api/stock/set  { id, qty, password }
app.post("/api/stock/set", (req, res) => {
    try {
        const { id, qty, password } = req.body;

        if (password !== ADMIN_PASSWORD) {
            return res.status(403).json({ error: "Senha inválida." });
        }

        const productId = parseInt(id, 10);
        const numQty = Number(qty);

        if (!Number.isInteger(productId) || productId <= 0) {
            return res.status(400).json({ error: "ID inválido." });
        }
        if (!Number.isFinite(numQty) || numQty < 0) {
            return res.status(400).json({ error: "Quantidade inválida." });
        }

        const newStock = txSetStock(productId, numQty);
        return res.json({ ok: true, stock: newStock });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message || "Erro ao atualizar estoque." });
    }
});

// =====================
// SUBIR SERVIDOR
// =====================
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
