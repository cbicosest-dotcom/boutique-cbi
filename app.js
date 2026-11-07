// CONFIGURATION : remplace ce numéro par ton WhatsApp au format international sans + ni espaces.
const WHATSAPP_NUMBER = "237672143561";
const CART_KEY = "cbi_cart_v1";
const money = n => new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const grid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

const categories = [...new Set(PRODUCTS.map(p => p.category))].sort((a,b)=>a.localeCompare(b,"fr"));
categories.forEach(c => { const o=document.createElement("option"); o.value=c; o.textContent=c; categoryFilter.appendChild(o); });

function renderProducts(){
  const q=searchInput.value.trim().toLocaleLowerCase("fr");
  const cat=categoryFilter.value;
  const list=PRODUCTS.filter(p=>(cat==="Toutes"||p.category===cat) && (p.name.toLocaleLowerCase("fr").includes(q)||p.category.toLocaleLowerCase("fr").includes(q)));
  document.getElementById("resultCount").textContent=list.length+" produit(s)";
  grid.innerHTML="";
  if(!list.length){grid.innerHTML='<div class="no-results">Aucun produit ne correspond à votre recherche.</div>';return;}
  list.forEach(p=>{
    const card=document.createElement("article"); card.className="product-card";
    card.innerHTML=`<div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-category">${p.category}</div><h3>${p.name}</h3><div class="product-actions"><span class="price">Prix sur demande</span><button class="add-btn" data-id="${p.id}">Ajouter +</button></div>`;
    grid.appendChild(card);
  });
}
function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart));renderCart();}
function addToCart(id){const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});saveCart();openCart();}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);saveCart();}
function removeItem(id){cart=cart.filter(x=>x.id!==id);saveCart();}
function renderCart(){
  document.getElementById("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
  const target=document.getElementById("cartItems");
  if(!cart.length){target.innerHTML='<p class="empty-cart">Votre panier est vide pour le moment.</p>';document.getElementById("checkout").disabled=true;return;}
  document.getElementById("checkout").disabled=false;
  target.innerHTML=cart.map(x=>{const p=PRODUCTS.find(p=>p.id===x.id);return `<div class="cart-row"><img src="${p.image}" alt=""><div><b>${p.name}</b><small>${p.category}</small><div class="qty"><button data-action="minus" data-id="${p.id}">−</button><span>${x.qty}</span><button data-action="plus" data-id="${p.id}">+</button></div></div><button class="remove" data-action="remove" data-id="${p.id}">Retirer</button></div>`;}).join("");
}
function openCart(){document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show");document.getElementById("cartPanel").setAttribute("aria-hidden","false");}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.remove("show");document.getElementById("cartPanel").setAttribute("aria-hidden","true");}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(b)addToCart(Number(b.dataset.id));});
document.getElementById("cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-action]");if(!b)return;const id=Number(b.dataset.id);if(b.dataset.action==="plus")changeQty(id,1);if(b.dataset.action==="minus")changeQty(id,-1);if(b.dataset.action==="remove")removeItem(id);});
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
document.getElementById("overlay").addEventListener("click",closeCart);
document.getElementById("checkout").addEventListener("click",()=>{
  if(!cart.length)return;
  const lines=cart.map(x=>{const p=PRODUCTS.find(p=>p.id===x.id);return `• ${p.name} — quantité : ${x.qty}`;});
  const msg="Bonjour CBI, je souhaite commander les produits suivants :\n\n"+lines.join("\n")+"\n\nMerci de me communiquer les prix, la disponibilité et les modalités de livraison.";
  window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),"_blank");
});
searchInput.addEventListener("input",renderProducts);
categoryFilter.addEventListener("change",renderProducts);
document.getElementById("aboutWhatsApp").href="https://wa.me/"+WHATSAPP_NUMBER;
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();