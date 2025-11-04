
const WHATSAPP_NUMBER = "5599991365365";

const PRODUCTS = [
  {
    id: 1,
    name: "SEX ADDICT 28K",
    price: 49.90,
    image: "assets/products/product_1.png",
    category: "Clássicos",
    description: "O pood tradicional que todo mundo ama.",
    flavors: ["Morango", "Chocolate", "Baunilha"]
  },
  {
    id: 2,
    name: "ELFBAR BC GOLD 10K",
    price: 79.90,
    image: "assets/products/product_2.png",
    category: "Premium",
    description: "Ingredientes selecionados e acabamento premium.",
    flavors: ["Doce de leite", "Nutella"]
  },
  {
    id: 3,
    name: "ELFBAR GH 23K",
    price: 29.90,
    image: "assets/products/product_3.png",
    category: "Mini",
    description: "Perfeito para lembranças e kits.",
    flavors: ["Uva", "Menta", "Coco"]
  },
  {
    id: 4,
    name: "ELF BAR TE 30K",
    price: 119.90,
    image: "assets/products/product_4.png",
    category: "Maxi",
    description: "Versão em tamanho grande para presentear.",
    flavors: ["Chocolate branco", "Caramelo"]
  },
  {
    id: 5,
    name: "LF BAR TE 30K BLACK GOLD",
    price: 99.90,
    image: "assets/products/product_5.png",
    category: "Edição Especial",
    description: "Edição limitada com toques especiais.",
    flavors: ["Frutas vermelhas", "Café"]
  },
  {
    id: 6,
    name: "WAKA 42K",
    price: 59.90,
    image: "assets/products/product_6.png",
    category: "Saudáveis",
    description: "Opção com foco em equilíbrio e bem-estar.",
    flavors: ["Açaí", "Chá verde"]
  },
  {
    id: 7,
    name: "WAKA 38K",
    price: 89.90,
    image: "assets/products/product_7.png",
    category: "Clássicos",
    description: "Sabor intenso e duradouro.",
    flavors: ["Manga", "Maracujá"]
  },
  {
    id: 8,
    name: "WAKA 25K",
    price: 129.90,
    image: "assets/products/product_8.png",
    category: "Premium",
    description: "Luxo e sofisticação em cada detalhe.",
    flavors: ["Champanhe", "Baunilha gourmet"]
  },
  {
    id: 9,
    name: "LOST MARY 5K",
    price: 39.90,
    image: "assets/products/product_9.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"]
  },
  {
    id: 10,
    name: "LOST MARY MO 10K",
    price: 69.90,
    image: "assets/products/product_10.png",
    category: "Maxi",
    description: "Maior autonomia para aproveitar mais.",
    flavors: ["Coco tropical", "Frutas cítricas"]
  },
  {
    id: 11,
    name: "LOST ANGEL 20k",
    price: 149.90,
    image: "assets/products/product_11.png",
    category: "Edição Especial",
    description: "Edição de luxo com design exclusivo.",
    flavors: ["Caramelo salgado", "Chocolate amargo"]
  },
  {
    id: 12,
    name: "LOST MARY 30k",
    price: 199.90,
    image: "assets/products/product_12.png",
    category: "Saudáveis",
    description: "Alta performance com ingredientes naturais.",
    flavors: ["Chá de hibisco", "Frutas vermelhas"]
  },
  {
    id: 13,
    name: "OXBAR 9.5K",
    price: 249.90,
    image: "assets/products/product_13.png",
    category: "Clássicos",
    description: "O clássico repaginado para os amantes de pood.",
    flavors: ["Uva", "Menta"]
  },
  {
    id: 14,
    name: "OXBAR 10K",
    price: 299.90,
    image: "assets/products/product_14.png",
    category: "Premium",
    description: "Experiência premium com sabores intensos.",
    flavors: ["Café expresso", "Chocolate belga"]
  },
  {
    id: 15,
    name: "OXBAR 25K",
    price: 349.90,
    image: "assets/products/product_15.png",
    category: "Edição Especial",
    description: "Edição limitada para colecionadores.",
    flavors: ["Champanhe rosé", "Baunilha bourbon"]
  },
  {
    id: 16,
    name: "OXBAR 30K",
    price: 399.90,
    image: "assets/products/product_16.png",
    category: "Luxo",
    description: "O ápice do luxo em pood, para ocasiões especiais.",
    flavors: ["Ouro comestível", "Trufa negra"]
  },
  {
    id: 17,
    name: "NIKBAR 40K",
    price: 159.90,
    image: "assets/products/product_17.png",
    category: "Clássicos",
    description: "O rei dos poods com sabor inigualável.",
    flavors: ["Morango silvestre", "Chocolate ao leite"]
  },
  {
    id: 18,
    name: "NIKBAR 30K",
    price: 189.90,
    image: "assets/products/product_18.png",
    category: "Premium",
    description: "Para quem busca o melhor em cada detalhe.",
    flavors: ["Frutas tropicais", "Caramelo amanteigado"]
  },
  {
    id: 19,
    name: "NIKBAR 10K",
    price: 219.90,
    image: "assets/products/product_19.png",
    category: "Edição Especial",
    description: "Edição especial com design sofisticado.",
    flavors: ["Café mocha", "Baunilha francesa"]
  },
  {
    id: 20,
    name: "BLACK SHEEP 30K",
    price: 249.90,
    image: "assets/products/product_20.png",
    category: "Luxo",
    description: "O máximo em luxo e sabor para os paladares mais exigentes.",
    flavors: ["Ouro rosa comestível", "Trufa branca"]
  },
  {
    id: 21,
    name: "BLACK SHEEP 20K",
    price: 89.90,
    image: "assets/products/product_21.png",
    category: "Clássicos",
    description: "Sabor clássico com qualidade garantida.",
    flavors: ["Limão", "Menta"]
  },
  {
    id: 22,
    name: "RAB BEATS 10K",
    price: 129.90,
    image: "assets/products/product_22.png",
    category: "Premium",
    description: "Experiência premium para os amantes de pood.",
    flavors: ["Chocolate meio amargo", "Café expresso"]
  },
  {
    id: 23,
    name: "IGNITE V300",
    price: 159.90,
    image: "assets/products/product_23.png",
    category: "Edição Especial",
    description: "Edição limitada com design exclusivo.",
    flavors: ["Champanhe", "Baunilha gourmet"]
  },
  {
    id: 24,
    name: "IGNITE V150 PRO",
    price: 199.90,
    image: "assets/products/product_24.png",
    category: "Luxo",
    description: "O ápice do luxo em pood, para ocasiões especiais.",
    flavors: ["Ouro comestível", "Trufa negra"]
  },
  {
    id: 25,
    name: "Blvk 45k",
    price: 249.90,
    image: "assets/products/product_25.png",
    category: "Clássicos",
    description: "O clássico repaginado para os amantes de pood.",
    flavors: ["Uva", "Menta"]
  },
  {
    id: 26,
    name: "Ignite v155 New edition",
    price: 299.90,
    image: "assets/products/product_26.png",
    category: "Premium",
    description: "Experiência premium com sabores intensos.",
    flavors: ["Café expresso", "Chocolate belga"]
  },
  {
    id: 27,
    name: "Elfbar king 40k",
    price: 349.90,
    image: "assets/products/product_27.png",
    category: "Edição Especial",
    description: "Edição limitada para colecionadores.",
    flavors: ["Champanhe rosé", "Baunilha bourbon"]
  },
  {
    id: 28,
    name: "Ignite Ice 400k",
    price: 399.90,
    image: "assets/products/product_28.png",
    category: "Luxo",
    description: "O ápice do luxo em pood, para ocasiões especiais.",
    flavors: ["Ouro comestível", "Trufa negra"]
  },
  {
    id: 29,
    name: "Ignite mix v400",
    price: 59.90,
    image: "assets/products/product_29.png",
    category: "Mini",
    description: "Perfeito para lembranças e kits.",
    flavors: ["Uva", "Menta", "Coco"]
  },
  {
    id: 30,
    name: "Ignite v250",
    price: 79.90,
    image: "assets/products/product_30.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"]
  },
  {
    id: 31,
    name: "Ignite v80",
    price: 99.90,
    image: "assets/products/product_31.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"]
  },
  {
    id: 32,
    name: "Lost Mary mo20k",
    price: 119.90,
    image: "assets/products/product_32.png",
    category: "Mini",
    description: "Compacto e prático para qualquer ocasião.",
    flavors: ["Limão siciliano", "Hortelã"]
  }

];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const money = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const enc = encodeURIComponent;

const themeToggle = $("#themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") { root.classList.add("light"); }
themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
});

$("#year").textContent = new Date().getFullYear();

const grid = $("#grid");
const categoryFilter = $("#categoryFilter");
const sortSelect = $("#sortSelect");
const searchInput = $("#searchInput");

function mountCategories(list) {
  const cats = ["", ...new Set(list.map(p => p.category).filter(Boolean))];
  categoryFilter.innerHTML = cats.map(c => `<option value="${c}">${c || "Todas as categorias"}</option>`).join("");
}

function filteredProducts() {
  const term = (searchInput.value || "").toLowerCase();
  const cat = categoryFilter.value;
  let items = PRODUCTS.filter(p =>
    (!cat || p.category === cat) &&
    (!term || p.name.toLowerCase().includes(term) || (p.description || "").toLowerCase().includes(term))
  );
  const sort = sortSelect.value;
  if (sort === "price_asc") items.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") items.sort((a, b) => b.price - a.price);
  if (sort === "name_asc") items.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  return items;
}

function render() {
  const items = filteredProducts();
  grid.innerHTML = items.map(p => `
    <article class="card" data-id="${p.id}">
      <a class="thumb" href="javascript:void(0)" aria-label="${p.name}">
        <img src="${p.image}" alt="${p.name}">
        ${p.category ? `<span class="badge">${p.category}</span>` : ""}
      </a>
      <div class="content">
        <h3 class="title">${p.name}</h3>
        <p class="price">${money(p.price)}</p>
        ${p.description ? `<p class="desc">${p.description}</p>` : ""}

        ${Array.isArray(p.flavors) && p.flavors.length ? `
          <div class="variant">
            <label for="flavor-${p.id}">Sabor</label>
            <select id="flavor-${p.id}" class="flavor">
              ${p.flavors.map(f => `<option value="${f}">${f}</option>`).join("")}
            </select>
          </div>
        ` : ""}

        <div class="payrow">
          <label for="pay-${p.id}" style="font-size:12px;color:var(--muted)">Pagamento</label>
          <select id="pay-${p.id}" class="paymethod">
            <option value="Pix">Pix</option>
            <option value="Cartão">Cartão</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Transferência">Transferência</option>
          </select>
        </div>

        <div style="margin-top:8px">
          <label for="addr-${p.id}" style="font-size:12px;color:var(--muted)">Endereço / Observações</label>
          <input id="addr-${p.id}" class="address" type="text" placeholder="Rua, número, bairro / Obs. (opcional)" />
        </div>

      </div>

      <div class="controls">
        <input class="qty" type="number" min="1" value="1" aria-label="Quantidade" />
        <button class="buy"><span>Comprar no WhatsApp</span></button>
      </div>
      <small class="note">Ao clicar em comprar, você será redirecionado ao WhatsApp com o pedido preenchido.</small>
    </article>
  `).join("");
}


function attachEvents() {
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".buy");
    if (!btn) return;
    const card = e.target.closest(".card");
    const id = Number(card.dataset.id);
    const product = PRODUCTS.find(p => p.id === id);

    // quantidade
    const qtyInput = card.querySelector(".qty");
    const qty = Math.max(1, Number(qtyInput.value) || 1);

    // sabor (opcional)
    const flavorSel = card.querySelector(".flavor");
    const flavor = flavorSel ? flavorSel.value : null;

    // forma de pagamento
    const paySel = card.querySelector(".paymethod");
    const payment = paySel ? paySel.value : "Não informado";

    // endereço/observações
    const addrInput = card.querySelector(".address");
    const address = addrInput ? (addrInput.value || "").trim() : "";

    // monta linhas de mensagem
    const linhas = [
      "🧾 *Pedido pelo site*",
      "----------------------------",
      `📦 *Produto:* ${product.name}`,
      flavor ? `🍓 *Sabor:* ${flavor}` : null,
      `💰 *Preço unitário:* ${money(product.price)}`,
      `🔢 *Quantidade:* ${qty}`,
      `💵 *Total:* ${money(product.price * qty)}`,
      `💳 *Forma de pagamento:* ${payment}`,
      address ? `📍 *Endereço/Obs.:* ${address}` : null,
      "",
      "_Enviado automaticamente pelo site._"
    ].filter(Boolean);

    // AQUI ESTÁ A MÁGICA — encodeURIComponent garante as quebras certinhas
    const msg = encodeURIComponent(linhas.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank");
  });


  [searchInput, categoryFilter, sortSelect].forEach(el => {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });
}


mountCategories(PRODUCTS);
render();
attachEvents();
