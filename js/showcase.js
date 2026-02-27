const PRODUCTS = [
  {
    id: 1,
    name: 'TV de tubo para games retro',
    img: './assets/images/Image-tv-tubo-para-games-retro.png',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  },
  {
    id: 2,
    name: 'Zeldinha da massa para os nintendistas',
    img: './assets/images/image-zeldinha-da-massa-para-os-nintendistas.png',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  },
  {
    id: 3,
    name: 'Controller Wireless DualSense X2u7445547...',
    img: './assets/images/Image-Controller-Wireless-DualSense.png',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  },
  {
    id: 4,
    name: 'Gaming Mouse RGB Pro',
    img: './assets/images/image-Gaming-Mouse-RGB-Pro.png',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  }
];

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => {
    var filled = i < rating;
    return `<svg width="14" height="14" viewBox="0 0 16 16" fill="${filled ? '#F5AB00' : 'rgba(245,171,0,.3)'}">
      <path d="M8 1.5L9.85 5.8L14.5 6.35L11.25 9.5L12.1 14.15L8 11.85L3.9 14.15L4.75 9.5L1.5 6.35L6.15 5.8L8 1.5Z" stroke="#F5AB00" stroke-width="1.1"/>
    </svg>`;
  }).join('');
}

export function renderProducts(gridId) {
  var grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(function(p) {
    return `
      <article class="wc-card" data-id="${p.id}">
        <div class="wc-card__foto">
          <img src="${p.img}" alt="${p.name}" loading="lazy" width="230" height="230">
          <span class="badge-desconto">${p.discount}</span>
        </div>
        <div class="wc-card__corpo">
          <span class="badge-promo">Promoção N1</span>
          <div class="wc-card__info">
            <h3 class="wc-card__nome">${p.name}</h3>
            <div class="wc-card__avaliacao">
              <div class="stars">${renderStars(p.rating)}</div>
              <span>(${p.reviews})</span>
            </div>
            <div class="wc-card__preco">
              <span class="preco">${p.price}</span>
              <span class="preco-antigo">${p.oldPrice}</span>
            </div>
          </div>
          <button class="btn-add" onclick="addToCart(this)">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1.5H3.2L4 5M4 5L5.5 11H12.5L14 5H4Z" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="6.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
              <circle cx="11.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
            </svg>
            Adicionar
          </button>
        </div>
      </article>
    `;
  }).join('');
}