/**
 * background.js
 * Genera el patrón decorativo de fondo con autobuses y torres de Londres
 * en una cuadrícula escalonada (tipo ladrillo).
 * Autora: Lorena Palomino | DAM
 */

(function () {
    const busSVG = `<svg viewBox="0 0 50 38" width="54" height="41" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="46" height="28" rx="4" fill="#E63946"/>
        <rect x="4" y="4" width="10" height="9" rx="1" fill="#ADE8F4"/>
        <rect x="17" y="4" width="10" height="9" rx="1" fill="#ADE8F4"/>
        <rect x="30" y="4" width="10" height="9" rx="1" fill="#ADE8F4"/>
        <rect x="4" y="16" width="10" height="8" rx="1" fill="#ADE8F4"/>
        <rect x="17" y="16" width="10" height="8" rx="1" fill="#ADE8F4"/>
        <rect x="30" y="16" width="14" height="7" rx="1" fill="#C0392B"/>
        <circle cx="12" cy="33" r="5" fill="#2C3E50"/>
        <circle cx="38" cy="33" r="5" fill="#2C3E50"/>
        <circle cx="12" cy="33" r="2" fill="#95A5A6"/>
        <circle cx="38" cy="33" r="2" fill="#95A5A6"/>
    </svg>`;

    const towerSVG = `<svg viewBox="0 0 28 72" width="28" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="9" y="28" width="10" height="38" rx="1" fill="#B5C9D5"/>
        <rect x="10" y="33" width="8" height="2.5" fill="#9ABBC6"/>
        <rect x="10" y="40" width="8" height="2.5" fill="#9ABBC6"/>
        <rect x="10" y="47" width="8" height="2.5" fill="#9ABBC6"/>
        <rect x="10" y="54" width="8" height="2.5" fill="#9ABBC6"/>
        <rect x="6" y="18" width="16" height="13" rx="1" fill="#8FA5B5"/>
        <circle cx="14" cy="24" r="5.5" fill="#FFFDE7" stroke="#7A8F9E" stroke-width="1.5"/>
        <line x1="14" y1="24" x2="14" y2="19.5" stroke="#444" stroke-width="1.2"/>
        <line x1="14" y1="24" x2="18" y2="24" stroke="#444" stroke-width="1.2"/>
        <rect x="8" y="10" width="12" height="10" rx="1" fill="#7A8F9E"/>
        <polygon points="14,1 6,10 22,10" fill="#5A7080"/>
    </svg>`;

    const container = document.getElementById('bg-pattern');
    if (!container) return;

    const W = window.innerWidth;
    const H = Math.max(window.innerHeight, document.body.scrollHeight, 1000);

    const tileW = 110;       // separación horizontal entre iconos
    const rowH  = 130;       // separación vertical entre filas
    const shift = tileW / 2; // desplazamiento de filas impares (patrón ladrillo)

    for (let row = 0, y = 10; y < H + rowH; row++, y += rowH) {
        const isEven = row % 2 === 0;
        const startX = isEven ? 0 : shift;
        const svg    = isEven ? busSVG : towerSVG;

        for (let x = startX - tileW; x < W + tileW; x += tileW) {
            const el = document.createElement('div');
            el.style.cssText = `position:absolute;left:${x}px;top:${y}px;opacity:0.28;pointer-events:none;line-height:0;`;
            el.innerHTML = svg;
            container.appendChild(el);
        }
    }
})();
