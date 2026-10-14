/* Blog de EasyRobots (2026-10-14). Comun al indice y a todos los articulos:
   - el calendario de Cal.com en un modal que se monta al abrir (como en la
     home: hasta que alguien pulsa no hay ninguna llamada a Cal.com);
   - los filtros por sector del indice.
   Los articulos no llevan JavaScript propio: asi el HTML que genera n8n es
   solo texto y no puede romper nada. */
(function () {
  var modal = document.createElement('div');
  modal.className = 'er-modal'; modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = '<div class="er-modal-box" role="dialog" aria-modal="true" aria-label="Agendar una llamada">' +
    '<button class="er-modal-x" type="button" aria-label="Cerrar">&#10005;</button>' +
    '<h3>Elige un hueco y lo vemos contigo</h3><p>15 minutos. Sin presentaci&oacute;n comercial.</p>' +
    '<div class="er-cal-slot"></div></div>';
  document.body.appendChild(modal);
  var slot = modal.querySelector('.er-cal-slot');

  function abrir(e) {
    if (e) e.preventDefault();
    if (window.erCalendario) window.erCalendario(slot);
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function cerrar() {
    modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-cal]').forEach(function (b) { b.addEventListener('click', abrir); });
  modal.querySelector('.er-modal-x').addEventListener('click', cerrar);
  modal.addEventListener('click', function (e) { if (e.target === modal) cerrar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

  // Filtros del indice: cada tarjeta lleva data-sector="clinicas inmobiliarias ...".
  var filtros = document.querySelectorAll('.bl-filtros button');
  if (!filtros.length) return;
  filtros.forEach(function (b) {
    b.addEventListener('click', function () {
      var s = b.getAttribute('data-filtro');
      filtros.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      document.querySelectorAll('.bl-rej .bl-tar').forEach(function (t) {
        t.hidden = s !== 'todos' && (' ' + t.getAttribute('data-sector') + ' ').indexOf(' ' + s + ' ') < 0;
      });
    });
  });
})();
