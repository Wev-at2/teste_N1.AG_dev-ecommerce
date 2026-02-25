'use strict';

/* ─── DATA ─── */
const PRODUCTS = [
    {
        id: 1,
        name: 'TV de tubo para games retro',
        img: '../assets/images/Image-tv-tubo-para-games-retro.png',
        price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
    },
    {
        id: 2,
        name: 'Zeldinha da massa para os nintendistas',
        img: '../assets/images/image-zeldinha-da-massa-para-os-nintendistas.png',
        price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
    },
    {
        id: 3,
        name: 'Controller Wireless DualSense X2u7445547...',
        img: '../assets/images/Image-Controller-Wireless-DualSense.png',
        price: 'R$ 89,99', oldPrice: 'R$ 129,99', discount: '-30%', rating: 4, reviews: 892
    },
    {
        id: 4,
        name: 'Gaming Mouse RGB Pro',
        img: '../assets/images/image-Gaming-Mouse-RGB-Pro.png',
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

renderProducts('grid1');
renderProducts('grid2');

/* ─── CART ─── */
let cartTotal = 0;

function addToCart(btn, id) {
    cartTotal++;
    const badge = document.getElementById('cartCount');
    badge.textContent = cartTotal;
    badge.classList.remove('bump');
    void badge.offsetWidth; // reflow to restart animation
    badge.classList.add('bump');

    btn.classList.add('added');
    btn.disabled = true;
    btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8L6.5 12.5L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    Adicionado
  `;
    showToast();

    setTimeout(() => {
        btn.classList.remove('added');
        btn.disabled = false;
        btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M1 1.5H3.2L4 5M4 5L5.5 11H12.5L14 5H4Z" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="6.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
        <circle cx="11.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
      </svg>
      Adicionar
    `;
    }, 1600);
}

/* ─── TOAST ─── */
let toastTimer = null;
function showToast() {
    const t = document.getElementById('toast');
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ─── HERO CAROUSEL ─── */
let heroIdx = 0;
let heroTimer = null;

function heroGoTo(idx) {
    heroIdx = idx;
    document.getElementById('heroTrack').style.transform = `translateX(-${idx * 33.333}%)`;
    document.querySelectorAll('.hero__dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
        d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
}

function heroMove(dir) {
    heroGoTo((heroIdx + dir + 3) % 3);
    clearInterval(heroTimer);
    heroTimer = setInterval(() => heroMove(1), 5000);
}

heroTimer = setInterval(() => heroMove(1), 5000);

/* ─── NEWSLETTER VALIDATION ─── */
document.getElementById('nlForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('nlEmail');
    const msg = document.getElementById('nlMsg');
    const val = input.value.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!val) {
        setNlMsg(input, msg, 'error', 'Insira seu e-mail para continuar.');
        input.focus();
        return;
    }
    if (!emailRx.test(val)) {
        setNlMsg(input, msg, 'error', 'E-mail inválido. Verifique e tente novamente.');
        input.focus();
        return;
    }

    setNlMsg(input, msg, 'success', 'Inscrição realizada! Obrigado por se cadastrar.');
    input.value = '';
});

document.getElementById('nlEmail').addEventListener('input', function () {
    const msg = document.getElementById('nlMsg');
    this.classList.remove('error');
    if (msg.classList.contains('error')) msg.textContent = '';
});

function setNlMsg(input, msg, type, text) {
    msg.className = 'footer__nl-msg ' + type;
    msg.textContent = text;
    input.classList.toggle('error', type === 'error');
}

/* ─── COUNTDOWN ─── */
// Target: 2 days, 14 hours, 32 minutes from now
const TARGET = new Date(Date.now() + (2 * 86400 + 14 * 3600 + 32 * 60) * 1000);

function pad(n) { return String(n).padStart(2, '0'); }

function tickCountdown() {
    const diff = Math.max(0, TARGET - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cdDays').textContent = pad(d);
    document.getElementById('cdHours').textContent = pad(h);
    document.getElementById('cdMins').textContent = pad(m);
    document.getElementById('cdSecs').textContent = pad(s);
}

tickCountdown();
setInterval(tickCountdown, 1000);

/* ─── MOBILE NAV ─── */
function openMobileNav() {
    document.getElementById('mobileNav').classList.add('open');
    document.body.style.overflow = 'hidden';
    document.querySelector('.header__hamburger').setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('.header__hamburger').setAttribute('aria-expanded', 'false');
}

// Close on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
});