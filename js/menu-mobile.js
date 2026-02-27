function abrirMenu() {
  document.getElementById('menuMobile').classList.add('aberto');
  document.body.style.overflow = 'hidden';
}

function fecharMenu() {
  document.getElementById('menuMobile').classList.remove('aberto');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fecharMenu();
});

window.abrirMenu  = abrirMenu;
window.fecharMenu = fecharMenu;

export { abrirMenu, fecharMenu };