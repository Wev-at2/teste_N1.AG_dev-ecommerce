
/* ─── DATA ─── */
const PRODUCTS = [
  {
    id: 1,
    name: 'TV de tubo para games retro',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  },
  {
    id: 2,
    name: 'Zeldinha da massa para os nintendistas',
    img: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400&q=80',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  },
  {
    id: 3,
    name: 'Controller Wireless DualSense X2u7445547...',
    img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  },
  {
    id: 4,
    name: 'Gaming Mouse RGB Pro',
    img: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
    price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
  }
];

/* ─── STARS ─── */
function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => {
    const filled = i < rating;
    return `<svg class="star" width="14" height="14" viewBox="0 0 16 16" fill="${filled ? '#F5AB00' : 'rgba(245,171,0,.3)'}" aria-hidden="true">
      <path d="M8 1.5L9.85 5.8L14.5 6.35L11.25 9.5L12.1 14.15L8 11.85L3.9 14.15L4.75 9.5L1.5 6.35L6.15 5.8L8 1.5Z"
        stroke="#F5AB00" stroke-width="1.1"/>
    </svg>`;
  }).join('');
}

/* ─── RENDER PRODUCTS ─── */
function renderProducts(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card__img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" width="230" height="230">
        <span class="badge-discount">${p.discount}</span>
      </div>
      <div class="product-card__body">
        <span class="badge-promo">Promoção N1</span>
        <div class="product-card__info">
          <h3 class="product-card__name">${p.name}</h3>
          <div class="product-card__rating" aria-label="Avaliação: ${p.rating} de 5 estrelas">
            <div class="stars">${renderStars(p.rating)}</div>
            <span class="product-card__reviews">(${p.reviews})</span>
          </div>
          <div class="product-card__pricing">
            <span class="product-card__price">${p.price}</span>
            <span class="product-card__price-old">${p.oldPrice}</span>
          </div>
        </div>
        <button class="btn-add" onclick="addToCart(this, ${p.id})" aria-label="Adicionar ${p.name} ao carrinho">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M1 1.5H3.2L4 5M4 5L5.5 11H12.5L14 5H4Z" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
            <circle cx="11.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
          </svg>
          Adicionar
        </button>
      </div>
    </article>
  `).join('');
}

export { renderProducts };