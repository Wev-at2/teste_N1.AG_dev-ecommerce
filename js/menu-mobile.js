// function abrirMenu() {
//   document.getElementById('menuMobile').classList.add('aberto');
//   document.body.style.overflow = 'hidden';
// }

// function fecharMenu() {
//   document.getElementById('menuMobile').classList.remove('aberto');
//   document.body.style.overflow = '';
// }

// document.addEventListener('keydown', function(e) {
//   if (e.key === 'Escape') fecharMenu();
// });

// window.abrirMenu  = abrirMenu;
// window.fecharMenu = fecharMenu;

// export { abrirMenu, fecharMenu };
function abrirMenu() {
  document.getElementById('menuMobile').classList.add('aberto');
  document.body.style.overflow = 'hidden';
}

function fecharMenu() {
  document.getElementById('menuMobile').classList.remove('aberto');
  document.body.style.overflow = '';
}

// acordeon mobile
function toggleAcordeon(btn) {
  var sub = btn.nextElementSibling;
  var isAberto = sub.classList.contains('aberto');

  // fecha todos antes de abrir o clicado
  document.querySelectorAll('.wc-menu-mobile__sub').forEach(function(s) {
    s.classList.remove('aberto');
  });
  document.querySelectorAll('.wc-menu-mobile__accordion').forEach(function(b) {
    b.classList.remove('ativo');
  });

  if (!isAberto) {
    sub.classList.add('aberto');
    btn.classList.add('ativo');
  }
}

// fecha dropdown desktop ao clicar fora
document.addEventListener('click', function(e) {
  if (!e.target.closest('.wc-header__dropdown')) {
    document.querySelectorAll('.wc-header__dropdown').forEach(function(d) {
      d.classList.remove('aberto');
    });
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fecharMenu();
    document.querySelectorAll('.wc-header__dropdown').forEach(function(d) {
      d.classList.remove('aberto');
    });
  }
});

window.abrirMenu      = abrirMenu;
window.fecharMenu     = fecharMenu;
window.toggleAcordeon = toggleAcordeon;