import './countdown.js';
import './hero-carousel.js';
import './newsletter.js';
import './menu-mobile.js';
import { renderProducts } from './showcase.js';

// showcase
renderProducts('grid1');

// carrinho
var cartTotal = 0;

function mostrarAviso() {
    var aviso = document.getElementById('aviso');
    aviso.classList.add('visivel');
    setTimeout(function () {
        aviso.classList.remove('visivel');
    }, 2600);
}

function addToCart(btn) {
    cartTotal++;

    var badge = document.getElementById('cartCount');
    badge.textContent = cartTotal;
    badge.classList.remove('bump');
    badge.offsetWidth;
    badge.classList.add('bump');

    btn.classList.add('adicionado');
    btn.disabled = true;
    btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 8L6.5 12.5L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    Adicionado
  `;

    mostrarAviso();

    setTimeout(function () {
        btn.classList.remove('adicionado');
        btn.disabled = false;
        btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 1.5H3.2L4 5M4 5L5.5 11H12.5L14 5H4Z" stroke="white" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="6.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
        <circle cx="11.5" cy="13.5" r="1.2" stroke="white" stroke-width="1.1"/>
      </svg>
      Adicionar
    `;
    }, 1600);
}

window.addToCart = addToCart;