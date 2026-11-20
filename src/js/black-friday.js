/* Black Friday 2026 (Anais, 2026-11-20): aviso flotante abajo a la izquierda con las plazas
   que quedan y la cuenta atras hasta el 1/12 a las 23:59. Abajo a la izquierda porque abajo a
   la derecha esta el asistente de dudas (dudas.js).

   PLAZAS: solo se venden 10 en total entre los tres productos de Black Friday (Reactivador
   Flash, Agente 10 Preguntas y Agente Secretaria). El numero tiene que ser REAL: cada venta,
   sumar 1 a VENDIDAS y publicar. Una escasez inventada es practica comercial desleal (UE).
   Este archivo es la unica fuente: rellena tambien cualquier [data-bf-plazas] de la pagina.

   Se carga con <script src="/js/black-friday.js" defer></script> en /black-friday/ y en las
   tres landings. Al terminar la promo se oculta solo; despues, quitar la linea de cada pagina. */
(function () {
  var FIN = new Date('2026-12-01T23:59:59+01:00').getTime();
  var TOTAL = 10;
  var VENDIDAS = 0;

  var quedan = Math.max(0, TOTAL - VENDIDAS);
  var textoPlazas = quedan === 0 ? 'Plazas agotadas' : 'Quedan ' + quedan + (quedan === 1 ? ' plaza' : ' plazas');
  document.querySelectorAll('[data-bf-plazas]').forEach(function (el) { el.textContent = textoPlazas; });

  if (Date.now() >= FIN) return;
  try { if (sessionStorage.getItem('er-bf-cerrado') === '1') return; } catch (e) {}

  var css = document.createElement('style');
  css.textContent =
    '.bfz{position:fixed;left:20px;bottom:20px;z-index:7900;display:flex;align-items:center;gap:14px;max-width:calc(100vw - 110px);padding:12px 40px 12px 16px;background:#0F1020;color:#fff;border:1px solid #22D3EE;border-radius:14px;box-shadow:0 12px 34px rgba(0,0,0,.35);font:500 14px/1.3 Inter,system-ui,sans-serif;animation:bfz-in .5s ease both}' +
    '@keyframes bfz-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}' +
    '.bfz-pulso{flex:none;width:10px;height:10px;border-radius:50%;background:#22D3EE;box-shadow:0 0 0 0 rgba(34,211,238,.6);animation:bfz-p 1.8s infinite}' +
    '@keyframes bfz-p{70%{box-shadow:0 0 0 9px rgba(34,211,238,0)}100%{box-shadow:0 0 0 0 rgba(34,211,238,0)}}' +
    '.bfz-tx{display:flex;flex-direction:column;gap:3px;min-width:0}' +
    '.bfz-tag{font-size:11px;font-weight:800;letter-spacing:.12em;color:#22D3EE}' +
    '.bfz-pl{font-size:16px;font-weight:800}' +
    '.bfz-t{font-size:13px;color:#B7BDD6;font-variant-numeric:tabular-nums}' +
    '.bfz-x{position:absolute;top:6px;right:8px;width:26px;height:26px;border:0;background:none;color:#B7BDD6;font-size:18px;line-height:1;cursor:pointer}' +
    '.bfz-x:hover{color:#fff}' +
    '@media (max-width:520px){.bfz{left:12px;bottom:14px;padding:10px 34px 10px 12px;gap:10px}.bfz-pl{font-size:15px}}' +
    '@media (prefers-reduced-motion:reduce){.bfz,.bfz-pulso{animation:none}}';
  document.head.appendChild(css);

  var caja = document.createElement('div');
  caja.className = 'bfz';
  caja.setAttribute('role', 'status');
  caja.innerHTML =
    '<span class="bfz-pulso" aria-hidden="true"></span>' +
    '<div class="bfz-tx"><span class="bfz-tag">BLACK FRIDAY · PLAZAS LIMITADAS</span>' +
    '<span class="bfz-pl">' + textoPlazas + (quedan > 0 ? ' de ' + TOTAL : '') + '</span>' +
    '<span class="bfz-t">Termina en <b class="bfz-r">--</b></span></div>' +
    '<button class="bfz-x" type="button" aria-label="Cerrar aviso">&#10005;</button>';
  document.body.appendChild(caja);

  caja.querySelector('.bfz-x').addEventListener('click', function () {
    caja.remove();
    try { sessionStorage.setItem('er-bf-cerrado', '1'); } catch (e) {}
  });

  var reloj = caja.querySelector('.bfz-r');
  function dos(n) { return (n < 10 ? '0' : '') + n; }
  function pintar() {
    var r = Math.floor((FIN - Date.now()) / 1000);
    if (r <= 0) { caja.remove(); clearInterval(t); return; }
    var d = Math.floor(r / 86400);
    reloj.textContent = (d ? d + 'd ' : '') + dos(Math.floor(r % 86400 / 3600)) + 'h ' + dos(Math.floor(r % 3600 / 60)) + 'm ' + dos(r % 60) + 's';
  }
  var t = setInterval(pintar, 1000);
  pintar();
})();
