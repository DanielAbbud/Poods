// ========================
// CONFIG BÁSICA
// ========================
const WHATSAPP_NUMBER = "5599991365365"; // Coloque o número do WhatsApp aqui no formato internacional (55DDDNÚMERO)

// Se o front e o back estiverem na mesma origem (ex: http://localhost:3000)
// pode deixar API_BASE vazio. Se hospedar em outro domínio, coloca aqui.
const API_BASE = "";

// Senha do modo administrador (a mesma do backend/server.js)
const ADMIN_PASSWORD = "poods2025";

const PRODUCTS = [
  {
    id: 1,
    name: "SEX ADDICT 28K",
    price: 49.9,
    image: "assets/products/product_1.png",
    category: "Clássicos",
    description: "O pood tradicional que todo mundo ama.",
    flavors: ["Morango", "Chocolate", "Baunilha"],
    stock: 10,
  },
  {
    id: 2,
    name: "ELFBAR BC GOLD 10K",
    price: 79.9,
    image: "assets/products/product_2.png",
    category: "Premium",
    description: "Ingredientes selecionados e acabamento premium.",
    flavors: ["Doce de leite", "Nutella"],
    stock: 0,
  },
  {
    id: 3,
    name: "ELFBAR GH 23K",
    price: 29.9,
    image: "assets/products/product_3.png",
    category: "Mini",
    description: "Perfeito para lembranças e kits.",
    flavors: ["Uva", "Menta", "Coco"],
    stock: 0,
  },
  {
    id: 4,
    name: "ELF BAR TE 30K",
    price: 119.9,
    image: "assets/products/product_4.png",
    category: "Maxi",
    description: "Versão em tamanho grande para presentear.",
    flavors: ["Chocolate branco", "Caramelo"],
    stock: 0,
  },
  {
    id: 5,
    name: "LF BAR TE 30K BLACK GOLD",
    price: 99.9,
    image: "assets/products/product_5.png",
    category: "Edição Especial",
    description: "Edição limitada com toques especiais.",
    flavors: ["Frutas vermelhas", "Café"],
    stock: 0,
  },
  {
    id: 6,
    name: "WAKA 42K",
    price: 59.9,
    image: "assets/products/product_6.png",
    category: "Saudáveis",
    description: "Opção com foco em equilíbrio e bem-estar.",
    flavors: ["Açaí", "Chá verde"],
    stock: 0,
  },
  {
    id: 7,
    name: "WAKA 38K",
    price: 89.9,
    image: "assets/products/product_7.png",
    category: "Clássicos",
    description: "Sabor intenso e duradouro.",
    flavors: ["Manga", "Maracujá"],
    stock: 0,
  },
  {
    id: 8,
    name: "WAKA 25K",
    price: 129.9,
    image: "assets/products/product_8.png",
    category: "Premium",
    description: "Luxo e sofisticação em cada detalhe.",
    flavors: ["Champanhe", "Baunilha gourmet"],
    stock: 0,
  },
  {
    id: 9,
    name: "LOST MARY 5K",
    price: 39.9,
    image: "assets/products/product_9.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"],
    stock: 0,
  },
  {
    id: 10,
    name: "LOST MARY MO 10K",
    price: 69.9,
    image: "assets/products/product_10.png",
    category: "Maxi",
    description: "Maior autonomia para aproveitar mais.",
    flavors: ["Coco tropical", "Frutas cítricas"],
    stock: 0,
  },
  {
    id: 11,
    name: "LOST ANGEL 20k",
    price: 149.9,
    image: "assets/products/product_11.png",
    category: "Edição Especial",
    description: "Edição de luxo com design exclusivo.",
    flavors: ["Caramelo salgado", "Chocolate amargo"],
    stock: 0,
  },
  {
    id: 12,
    name: "LOST MARY 30k",
    price: 199.9,
    image: "assets/products/product_12.png",
    category: "Saudáveis",
    description: "Alta performance com ingredientes naturais.",
    flavors: ["Chá de hibisco", "Frutas vermelhas"],
    stock: 0,
  },
  {
    id: 13,
    name: "OXBAR 9.5K",
    price: 249.9,
    image: "assets/products/product_13.png",
    category: "Clássicos",
    description: "O clássico repaginado para os amantes de pood.",
    flavors: ["Uva", "Menta"],
    stock: 0,
  },
  {
    id: 14,
    name: "OXBAR 10K",
    price: 299.9,
    image: "assets/products/product_14.png",
    category: "Premium",
    description: "Experiência premium com sabores intensos.",
    flavors: ["Café expresso", "Chocolate belga"],
    stock: 0,
  },
  {
    id: 15,
    name: "OXBAR 25K",
    price: 349.9,
    image: "assets/products/product_15.png",
    category: "Edição Especial",
    description: "Edição limitada para colecionadores.",
    flavors: ["Champanhe rosé", "Baunilha bourbon"],
    stock: 0,
  },
  {
    id: 16,
    name: "OXBAR 30K",
    price: 399.9,
    image: "assets/products/product_16.png",
    category: "Luxo",
    description: "O ápice do luxo em pood, para ocasiões especiais.",
    flavors: ["Ouro comestível", "Trufa negra"],
    stock: 0,
  },
  {
    id: 17,
    name: "NIKBAR 40K",
    price: 159.9,
    image: "assets/products/product_17.png",
    category: "Clássicos",
    description: "O rei dos poods com sabor inigualável.",
    flavors: ["Morango silvestre", "Chocolate ao leite"],
    stock: 0,
  },
  {
    id: 18,
    name: "NIKBAR 30K",
    price: 189.9,
    image: "assets/products/product_18.png",
    category: "Premium",
    description: "Para quem busca o melhor em cada detalhe.",
    flavors: ["Frutas tropicais", "Caramelo amanteigado"],
    stock: 0,
  },
  {
    id: 19,
    name: "NIKBAR 10K",
    price: 219.9,
    image: "assets/products/product_19.png",
    category: "Edição Especial",
    description: "Edição especial com design sofisticado.",
    flavors: ["Café mocha", "Baunilha francesa"],
    stock: 0,
  },
  {
    id: 20,
    name: "BLACK SHEEP 30K",
    price: 249.9,
    image: "assets/products/product_20.png",
    category: "Luxo",
    description:
      "O máximo em luxo e sabor para os paladares mais exigentes.",
    flavors: ["Ouro rosa comestível", "Trufa branca"],
    stock: 0,
  },
  {
    id: 21,
    name: "BLACK SHEEP 20K",
    price: 89.9,
    image: "assets/products/product_21.png",
    category: "Clássicos",
    description: "Sabor clássico com qualidade garantida.",
    flavors: ["Limão", "Menta"],
    stock: 0,
  },
  {
    id: 22,
    name: "RAB BEATS 10K",
    price: 129.9,
    image: "assets/products/product_22.png",
    category: "Premium",
    description: "Experiência premium para os amantes de pood.",
    flavors: ["Chocolate meio amargo", "Café expresso"],
    stock: 0,
  },
  {
    id: 23,
    name: "IGNITE V300",
    price: 159.9,
    image: "assets/products/product_23.png",
    category: "Edição Especial",
    description: "Edição limitada com design exclusivo.",
    flavors: ["Champanhe", "Baunilha gourmet"],
    stock: 0,
  },
  {
    id: 24,
    name: "IGNITE V150 PRO",
    price: 199.9,
    image: "assets/products/product_24.png",
    category: "Luxo",
    description: "O ápice do luxo em pood, para ocasiões especiais.",
    flavors: ["Ouro comestível", "Trufa negra"],
    stock: 0,
  },
  {
    id: 25,
    name: "Blvk 45k",
    price: 249.9,
    image: "assets/products/product_25.png",
    category: "Clássicos",
    description: "O clássico repaginado para os amantes de pood.",
    flavors: ["Uva", "Menta"],
    stock: 0,
  },
  {
    id: 26,
    name: "Ignite v155 New edition",
    price: 299.9,
    image: "assets/products/product_26.png",
    category: "Premium",
    description: "Experiência premium com sabores intensos.",
    flavors: ["Café expresso", "Chocolate belga"],
    stock: 0,
  },
  {
    id: 27,
    name: "Elfbar king 40k",
    price: 349.9,
    image: "assets/products/product_27.png",
    category: "Edição Especial",
    description: "Edição limitada para colecionadores.",
    flavors: ["Champanhe rosé", "Baunilha bourbon"],
    stock: 0,
  },
  {
    id: 28,
    name: "Ignite Ice 400k",
    price: 399.9,
    image: "assets/products/product_28.png",
    category: "Luxo",
    description: "O ápice do luxo em pood, para ocasiões especiais.",
    flavors: ["Ouro comestível", "Trufa negra"],
    stock: 0,
  },
  {
    id: 29,
    name: "Ignite mix v400",
    price: 59.9,
    image: "assets/products/product_29.png",
    category: "Mini",
    description: "Perfeito para lembranças e kits.",
    flavors: ["Uva", "Menta", "Coco"],
    stock: 0,
  },
  {
    id: 30,
    name: "Ignite v250",
    price: 79.9,
    image: "assets/products/product_30.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"],
    stock: 0,
  },
  {
    id: 31,
    name: "Ignite v80",
    price: 99.9,
    image: "assets/products/product_31.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"],
    stock: 0,
  },
  {
    id: 32,
    name: "Lost Mary mo20k",
    price: 119.9,
    image: "assets/products/product_32.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"],
    stock: 0,
  },
];

// ========================
// HELPERS
// ========================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const money = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// ========================
// ESTOQUE VIA BACK-END
// ========================
let stockCache = {};

async function fetchStock() {
  try {
    const res = await fetch(`${API_BASE}/api/stock`);
    if (!res.ok) throw new Error("Erro ao buscar estoque.");
    stockCache = await res.json();
  } catch (err) {
    console.error(err);
    showToast("Não foi possível carregar o estoque.");
    stockCache = {};
  }
}

// se o back não tiver o produto, considera 0
function getStock(id) {
  const value = stockCache[id];
  return typeof value === "number" ? value : 0;
}

// estoque base configurado no array PRODUCTS (usado no reset ADM)
function getBaseStock(id) {
  const p = PRODUCTS.find((p) => p.id === id);
  return p && typeof p.stock === "number" ? p.stock : 0;
}

async function registrarVendaNoServidor(id, qty, extra = {}) {
  const res = await fetch(`${API_BASE}/api/stock/sell`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: String(id),
      qty,
      ...extra, // payment, flavor, address, unitPrice, total, productName
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Erro ao registrar venda.");
  }
  return data; // { ok, stock, saleId, saleCode }
}


async function reporProdutoServidor(id, qty) {
  const res = await fetch(`${API_BASE}/api/stock/replenish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: String(id), qty, password: ADMIN_PASSWORD }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Erro ao repor estoque.");
  }
  return data;
}

async function setEstoqueServidor(id, qty) {
  const res = await fetch(`${API_BASE}/api/stock/set`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: String(id), qty, password: ADMIN_PASSWORD }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Erro ao atualizar estoque.");
  }
  return data;
}

async function resetProdutoServidor(id) {
  const base = getBaseStock(id);
  return setEstoqueServidor(id, base);
}

// ========================
// TEMA / ELEMENTOS BÁSICOS
// ========================
const themeToggle = $("#themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  root.classList.add("light");
}
themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem(
    "theme",
    root.classList.contains("light") ? "light" : "dark"
  );
});

$("#year").textContent = new Date().getFullYear();

const grid = $("#grid");
const categoryFilter = $("#categoryFilter");
const sortSelect = $("#sortSelect");
const searchInput = $("#searchInput");

// ========================
// TOAST
// ========================
const toast = $("#toast");
const toastText = $("#toastText");
let toastTimeout;

function showToast(msg) {
  if (!toast || !toastText) return;
  toastText.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2500);
}

// ========================
// MODAL ADMIN
// ========================
const adminModal = $("#adminModal");
const adminPasswordInput = $("#adminPasswordInput");
const adminConfirmBtn = $("#adminConfirmBtn");
const adminCancelBtn = $("#adminCancelBtn");

let adminModalMode = "enter"; // "enter" ou "exit"
let isAdmin = localStorage.getItem("isAdmin") === "1";

function openAdminModal(mode) {
  if (!adminModal) return;
  adminModalMode = mode;

  const titleEl = adminModal.querySelector("h2");
  const descEl = adminModal.querySelector("p");

  if (mode === "enter") {
    if (titleEl) titleEl.textContent = "Modo administrador";
    if (descEl)
      descEl.textContent =
        "Digite a senha para acessar as opções de estoque.";

    if (adminPasswordInput) {
      adminPasswordInput.classList.remove("hidden");
      adminPasswordInput.value = "";
      setTimeout(() => adminPasswordInput.focus(), 50);
    }
    if (adminConfirmBtn) adminConfirmBtn.textContent = "Entrar";
  } else {
    if (titleEl) titleEl.textContent = "Sair do modo administrador";
    if (descEl)
      descEl.textContent = "Deseja realmente desativar o modo administrador?";

    if (adminPasswordInput) {
      adminPasswordInput.classList.add("hidden");
      adminPasswordInput.value = "";
    }
    if (adminConfirmBtn) adminConfirmBtn.textContent = "Desativar";
  }

  adminModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeAdminModal() {
  if (!adminModal) return;
  adminModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

if (adminCancelBtn) {
  adminCancelBtn.addEventListener("click", () => {
    closeAdminModal();
  });
}

if (adminConfirmBtn) {
  adminConfirmBtn.addEventListener("click", () => {
    if (adminModalMode === "enter") {
      const pwd = (adminPasswordInput?.value || "").trim();
      if (pwd !== ADMIN_PASSWORD) {
        showToast("Senha incorreta.");
        if (adminPasswordInput) {
          adminPasswordInput.value = "";
          adminPasswordInput.focus();
        }
        return;
      }
      isAdmin = true;
      localStorage.setItem("isAdmin", "1");
      closeAdminModal();
      document.body.classList.add("admin-mode");
      render();
      showToast("Modo administrador ativado.");
    } else {
      // sair
      isAdmin = false;
      localStorage.removeItem("isAdmin");
      closeAdminModal();
      document.body.classList.remove("admin-mode");
      render();
      showToast("Modo administrador desativado.");
    }
  });
}

// ========================
// CATEGORIAS / FILTRO
// ========================
function mountCategories(list) {
  const cats = ["", ...new Set(list.map((p) => p.category).filter(Boolean))];
  categoryFilter.innerHTML = cats
    .map(
      (c) =>
        `<option value="${c}">${c || "Todas as categorias"}</option>`
    )
    .join("");
}

function filteredProducts() {
  const term = (searchInput.value || "").toLowerCase();
  const cat = categoryFilter.value;
  let items = PRODUCTS.filter(
    (p) =>
      (!cat || p.category === cat) &&
      (!term ||
        p.name.toLowerCase().includes(term) ||
        (p.description || "").toLowerCase().includes(term))
  );
  const sort = sortSelect.value;
  if (sort === "price_asc") items.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") items.sort((a, b) => b.price - a.price);
  if (sort === "name_asc")
    items.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  return items;
}

// ========================
// RENDERIZAÇÃO
// ========================
function render() {
  const items = filteredProducts();
  grid.innerHTML = items
    .map((p) => {
      const stock = getStock(p.id);
      const isOut = stock <= 0;

      return `
    <article class="card ${isOut ? "out-of-stock" : ""}" data-id="${p.id}">
      <div class="thumb" aria-label="${p.name}">
      <img src="${p.image}" alt="${p.name}">
      ${p.category ? `<span class="badge">${p.category}</span>` : ""}
      </div>
      <div class="content">
        <h3 class="title">${p.name}</h3>
        <p class="price">${money(p.price)}</p>
        ${p.description ? `<p class="desc">${p.description}</p>` : ""}

        <p class="stock ${isOut ? "stock-out" : ""}">
          ${isOut ? "Esgotado" : `Estoque: ${stock}`}
        </p>

        ${Array.isArray(p.flavors) && p.flavors.length
          ? `
          <div class="variant">
            <label for="flavor-${p.id}">Sabor</label>
            <select id="flavor-${p.id}" class="flavor">
              ${p.flavors
            .map((f) => `<option value="${f}">${f}</option>`)
            .join("")}
            </select>
          </div>
        `
          : ""
        }

        <div class="payrow">
          <label for="pay-${p.id}" style="font-size:12px;color:var(--muted)">Pagamento</label>
          <select id="pay-${p.id}" class="paymethod">
            <option value="Pix">Pix</option>
            <option value="Cartão">Cartão</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </div>

        <div style="margin-top:8px">
          <label for="addr-${p.id}" style="font-size:12px;color:var(--muted)">Endereço / Observações</label>
          <input id="addr-${p.id}" class="address" type="text"
                 placeholder="Rua, número, bairro / Obs. (opcional)" />
        </div>
      </div>

      <div class="controls">
        <input class="qty" type="number" min="1" value="1" aria-label="Quantidade"
               ${isOut ? "disabled" : ""} max="${stock > 0 ? stock : 1}" />
        <button class="buy" ${isOut ? "disabled" : ""}>
          <span>${isOut ? "Sem estoque" : "Comprar no WhatsApp"}</span>
        </button>
      </div>

      <!-- Painel ADM (só aparece em admin-mode) -->
      <div class="admin-panel">
        <div class="admin-row">
          <input class="admin-qty" type="number" min="1" value="1" />
          <button type="button" class="admin-add-btn">+ Repor estoque</button>
          <button type="button" class="admin-reset-btn">Zerar vendas</button>
        </div>
        <small class="admin-hint">Modo ADM: use para repor estoque deste produto.</small>
      </div>

      <small class="note">Ao clicar em comprar, você será redirecionado ao WhatsApp com o pedido preenchido.</small>
    </article>
  `;
    })
    .join("");

  if (isAdmin) {
    document.body.classList.add("admin-mode");
  } else {
    document.body.classList.remove("admin-mode");
  }
}

// ========================
// EVENTOS
// ========================
function attachEvents() {
  grid.addEventListener("click", async (e) => {
    // ADM: repor estoque
    const adminAddBtn = e.target.closest(".admin-add-btn");
    if (adminAddBtn) {
      if (!isAdmin) return;
      const card = adminAddBtn.closest(".card");
      const id = Number(card.dataset.id);
      const qtyInput = card.querySelector(".admin-qty");
      const qtd = Math.max(1, Number(qtyInput.value) || 1);

      try {
        await reporProdutoServidor(id, qtd);
        await fetchStock();
        render();
        showToast(`Estoque reposto em +${qtd} unidade(s).`);
      } catch (err) {
        showToast(err.message);
      }
      return;
    }

    // ADM: reset estoque para valor base
    const adminResetBtn = e.target.closest(".admin-reset-btn");
    if (adminResetBtn) {
      if (!isAdmin) return;
      const card = adminResetBtn.closest(".card");
      const id = Number(card.dataset.id);

      try {
        await resetProdutoServidor(id);
        await fetchStock();
        render();
        showToast("Estoque deste produto foi resetado para o valor base.");
      } catch (err) {
        showToast(err.message);
      }
      return;
    }

    // COMPRA NORMAL
    const btn = e.target.closest(".buy");
    if (!btn) return;

    const card = e.target.closest(".card");
    const id = Number(card.dataset.id);
    const product = PRODUCTS.find((p) => p.id === id);

    const stockAtual = getStock(id);
    if (stockAtual <= 0) {
      showToast("Este produto está esgotado no momento.");
      render();
      return;
    }

    const qtyInput = card.querySelector(".qty");
    const qty = Math.max(1, Number(qtyInput.value) || 1);

    if (qty > stockAtual) {
      showToast(`Quantidade indisponível. Estoque atual: ${stockAtual}`);
      qtyInput.value = stockAtual;
      return;
    }

    const flavorSel = card.querySelector(".flavor");
    const flavor = flavorSel ? flavorSel.value : null;

    const paySel = card.querySelector(".paymethod");
    const payment = paySel ? paySel.value : "Não informado";

    const addrInput = card.querySelector(".address");
    const address = addrInput ? (addrInput.value || "").trim() : "";

    const unitPrice = product.price;
    const total = unitPrice * qty;

    try {
      // 1) Registra venda no servidor (grava na tabela sales e atualiza estoque)
      const result = await registrarVendaNoServidor(id, qty, {
        payment,
        flavor,
        address,
        unitPrice,
        total,
        productName: product.name,
      });

      await fetchStock();
      render();

      const saleCode =
        result.saleCode ||
        (result.saleId
          ? `PD-${String(result.saleId).padStart(6, "0")}`
          : null);

      // 2) Monta mensagem do WhatsApp com o mesmo código do banco
      const linhas = [
        "🧾 *Pedido pelo site*",
        saleCode ? `🔖 *Código do pedido:* ${saleCode}` : null,
        "----------------------------",
        `📦 *Produto:* ${product.name}`,
        flavor ? `🍓 *Sabor:* ${flavor}` : null,
        `💰 *Preço unitário:* ${money(unitPrice)}`,
        `🔢 *Quantidade:* ${qty}`,
        `💵 *Total:* ${money(total)}`,
        `💳 *Forma de pagamento:* ${payment}`,
        address ? `📍 *Endereço/Obs.:* ${address}` : null,
        "",
        "_Enviado automaticamente pelo site._",
      ].filter(Boolean);

      const msg = encodeURIComponent(linhas.join("\n"));

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
      const waDeepLink = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${msg}`;

      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const isAndroid = /Android/i.test(ua);
      const isIOS = /iPhone|iPad|iPod/i.test(ua);
      const isMobile = isAndroid || isIOS;

      if (isMobile) {
        const finalUrl = isIOS ? waDeepLink : waUrl;
        window.location.href = finalUrl;
      } else {
        window.open(waUrl, "_blank");
      }
    } catch (err) {
      showToast(err.message);
    }
  });

  [searchInput, categoryFilter, sortSelect].forEach((el) => {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });
}

// Clique secreto no header pra entrar/sair do modo ADM
function initSecretAdminTrigger() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let clicks = 0;
  let lastClick = 0;
  const MAX_DELAY = 2000; // 2s pra completar os 5 cliques

  header.addEventListener("click", () => {
    const now = Date.now();
    if (now - lastClick > MAX_DELAY) {
      clicks = 0;
    }
    lastClick = now;
    clicks++;

    if (clicks >= 5) {
      clicks = 0;
      if (!isAdmin) {
        openAdminModal("enter");
      } else {
        openAdminModal("exit");
      }
    }
  });
}

// ========================
// INICIALIZAÇÃO
// ========================
async function init() {
  await fetchStock();
  mountCategories(PRODUCTS);
  render();
  attachEvents();
  initSecretAdminTrigger();
}

init();
