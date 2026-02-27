var alvo = new Date(Date.now() + (2 * 86400 + 14 * 3600 + 32 * 60) * 1000);

function atualizarCountdown() {
    var diff = Math.max(0, alvo - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    document.getElementById('cdDias').textContent = String(d).padStart(2, '0');
    document.getElementById('cdHoras').textContent = String(h).padStart(2, '0');
    document.getElementById('cdMin').textContent = String(m).padStart(2, '0');
    document.getElementById('cdSeg').textContent = String(s).padStart(2, '0');
}

atualizarCountdown();
setInterval(atualizarCountdown, 1000);