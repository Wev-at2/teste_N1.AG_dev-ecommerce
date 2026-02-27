let heroIdx = 0;
let heroTimer = setInterval(function () { moverHero(1); }, 5000);

function irParaSlide(idx) {
    heroIdx = idx;
    document.getElementById('heroTrack').style.transform = 'translateX(-' + (idx * 33.333) + '%)';

    document.querySelectorAll('.wc-hero__ponto').forEach(function (p, i) {
        p.classList.toggle('ativo', i === idx);
    });
}

function moverHero(dir) {
    irParaSlide((heroIdx + dir + 3) % 3);
    clearInterval(heroTimer);
    heroTimer = setInterval(function () { moverHero(1); }, 5000);
}

window.irParaSlide = irParaSlide;
window.moverHero = moverHero;

export { irParaSlide, moverHero };