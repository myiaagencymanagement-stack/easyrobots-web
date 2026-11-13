/* dudas.js - el asistente de dudas de la web (13/11/2026).

   Icono flotante abajo a la derecha en todas las paginas. Al abrirlo, un chat
   que contesta SOLO dudas sobre lo que hay en la web (precios, que incluye,
   plazos, garantias, como funciona la contratacion). No sabe nada de como
   esta hecho el sistema por dentro.

   Va por el mismo camino que los chats de las landings (chat-demo.js): el
   webhook easyrobots-web del AGENTE MULTICANAL, cuenta easyrobots, con la
   personalidad "dudas" (SQL 295 del CRM). La base aplica el tope por visitante.

   Uso: <script src="/js/dudas.js" defer></script> antes de </body>.
   Opcional en la etiqueta: data-saludo="..." para cambiar el primer mensaje.

   - Sin cookies: la sesion y el hilo viven en sessionStorage (se cierran con
     la pestana). Al cambiar de pagina, el hilo sigue y se le dice al agente en
     que pagina esta la persona.
   - Marcas del agente: [[botones: a | b | c]] se pintan como botones de
     respuesta rapida. Cualquier otra marca [[...]] se quita.
   - Tope: 20 mensajes por sesion y 400 letras por mensaje. */
(function () {
  'use strict';
  if (window.__erDudas) return;
  window.__erDudas = true;

  var WEBHOOK = 'https://mysmartagents-n8n.qclzrh.easypanel.host/webhook/easyrobots-web';
  var SITIO = 'easyrobots-ai.cloud';
  var PERSONALIDAD = 'dudas';
  var TOPE_MENSAJES = 20;
  var TOPE_LETRAS = 400;
  var ESPERA_MAX_MS = 60000;

  // Nombre de cada web/pagina (13/11, Anais): el chat se presenta con el de la pagina en la que esta.
  var NOMBRES = [[/reactivador/, 'Reactivador Flash'], [/agente-10/, 'Agente 10 Preguntas'], [/agente-secretaria|presupuestos/, 'Agente Secretaria'],
    [/aura-business/, 'AURA Business'], [/aura-setter/, 'AURA Setter'], [/clinicas|estetica|dental/, 'EasyRobots Clínicas'],
    [/inmobiliaria/, 'EasyRobots Inmobiliarias'], [/concesionario/, 'EasyRobots Concesionarios'], [/ecommerce/, 'EasyRobots Ecommerce'],
    [/coaching/, 'EasyRobots Coaching'], [/guias/, 'Guías EasyRobots'], [/blog/, 'Blog EasyRobots'], [/condiciones/, 'Condiciones EasyRobots']];
  var NOMBRE = 'EasyRobots';
  for (var ni = 0; ni < NOMBRES.length; ni++) if (NOMBRES[ni][0].test(location.pathname)) { NOMBRE = NOMBRES[ni][1]; break; }
  var script = document.currentScript;
  if (script && script.getAttribute('data-nombre')) NOMBRE = script.getAttribute('data-nombre');
  var SALUDO = (script && script.getAttribute('data-saludo')) ||
    'Hola, soy el asistente de ' + NOMBRE + '. Pregúntame lo que quieras sobre esta página: precios, qué incluye, plazos o garantías.';

  // --- estado en sessionStorage (sin cookies) ---
  function leer(k, d) { try { var v = sessionStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function guardar(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var sesion = leer('er-dudas-sesion', null);
  if (!sesion) {
    sesion = 'web-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    guardar('er-dudas-sesion', sesion);
  }
  var hilo = leer('er-dudas-hilo', []);          // [{de:'yo'|'bot', t:'...'}]
  var enviados = leer('er-dudas-enviados', 0);
  var paginaDicha = leer('er-dudas-pagina', '');
  var abierto = leer('er-dudas-abierto', false);

  // --- estilos ---
  var css = '' +
    '.erd-btn{position:fixed;right:20px;bottom:20px;z-index:8000;width:58px;height:58px;border-radius:50%;border:0;cursor:pointer;background:#1E6FF2;color:#fff;box-shadow:0 10px 30px rgba(30,111,242,.35);display:flex;align-items:center;justify-content:center;transition:transform .15s}' +
    '.erd-btn:hover{transform:scale(1.06)}.erd-btn svg{width:28px;height:28px}' +
    '.erd-btn .erd-x{display:none}.erd-btn.erd-on .erd-x{display:block}.erd-btn.erd-on .erd-ico{display:none}' +
    '.erd-tip{position:fixed;right:88px;bottom:30px;z-index:8000;background:#0A0F18;color:#fff;font:600 13px/1.2 "Plus Jakarta Sans",system-ui,sans-serif;padding:9px 12px;border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,.25);opacity:0;transform:translateX(6px);transition:all .25s;pointer-events:none}' +
    '.erd-tip.erd-ver{opacity:1;transform:none}' +
    '.erd-panel{position:fixed;right:20px;bottom:92px;z-index:8000;width:370px;max-width:calc(100vw - 40px);height:min(600px,calc(100vh - 120px));display:none;flex-direction:column;background:#fff;color:#0A0F18;border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35);font-family:"Plus Jakarta Sans",-apple-system,system-ui,sans-serif;font-size:15px;line-height:1.45}' +
    '.erd-panel.erd-on{display:flex}' +
    '.erd-cab{background:#0A0F18;color:#fff;padding:14px 16px;display:flex;align-items:center;gap:12px}' +
    '.erd-cab .erd-av{width:38px;height:38px;border-radius:50%;background:#1E6FF2;display:flex;align-items:center;justify-content:center;flex:none}.erd-cab .erd-av svg{width:22px;height:22px}' +
    '.erd-cab b{display:block;font-size:15px}.erd-cab small{display:block;color:#A3ADBB;font-size:12px;margin-top:2px}.erd-cab small a{color:#A3ADBB}' +
    '.erd-cab .erd-cerrar{margin-left:auto;background:none;border:0;color:#A3ADBB;font-size:22px;cursor:pointer;line-height:1;padding:4px}' +
    '.erd-msgs{flex:1;overflow-y:auto;padding:16px 14px;background:#F2F5F9;display:flex;flex-direction:column;gap:8px}' +
    '.erd-m{max-width:86%;padding:10px 13px;border-radius:14px;white-space:pre-wrap;word-wrap:break-word}' +
    '.erd-bot{align-self:flex-start;background:#fff;border:1px solid #E3E8EF;border-bottom-left-radius:4px}' +
    '.erd-yo{align-self:flex-end;background:#1E6FF2;color:#fff;border-bottom-right-radius:4px}' +
    '.erd-m a{color:inherit;text-decoration:underline}' +
    '.erd-botones{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:92%}' +
    '.erd-botones button{background:#fff;border:1.5px solid #1E6FF2;color:#1E6FF2;border-radius:999px;padding:7px 12px;font:600 13px "Plus Jakarta Sans",system-ui,sans-serif;cursor:pointer}' +
    '.erd-botones button:hover{background:#1E6FF2;color:#fff}' +
    '.erd-esc{align-self:flex-start;background:#fff;border:1px solid #E3E8EF;border-radius:14px;padding:10px 14px;display:none;gap:4px}.erd-esc.erd-ver{display:flex}' +
    '.erd-esc i{width:7px;height:7px;border-radius:50%;background:#8B95A3;animation:erdp 1s infinite}.erd-esc i:nth-child(2){animation-delay:.15s}.erd-esc i:nth-child(3){animation-delay:.3s}' +
    '@keyframes erdp{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}' +
    '.erd-pie{display:flex;gap:8px;padding:10px;border-top:1px solid #E3E8EF;background:#fff}' +
    '.erd-pie input{flex:1;border:1.5px solid #E3E8EF;border-radius:12px;padding:11px 12px;font:15px "Plus Jakarta Sans",system-ui,sans-serif;outline:none;min-width:0}' +
    '.erd-pie input:focus{border-color:#1E6FF2}' +
    '.erd-pie button{width:44px;border:0;border-radius:12px;background:#1E6FF2;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none}.erd-pie button:disabled{opacity:.5;cursor:default}.erd-pie button svg{width:20px;height:20px}' +
    '.erd-nota{font-size:11px;color:#8B95A3;text-align:center;padding:0 10px 8px;background:#fff}' +
    '@media (max-width:520px){.erd-panel{right:0;bottom:0;width:100vw;max-width:100vw;height:100dvh;border-radius:0}.erd-btn.erd-on{display:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // --- DOM ---
  var ICONO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.2-4.2A8 8 0 1 1 21 12z"/><path d="M8.5 10.5h7M8.5 13.5h4.5"/></svg>';
  var btn = document.createElement('button');
  btn.className = 'erd-btn'; btn.type = 'button'; btn.setAttribute('aria-label', 'Abrir el asistente de dudas');
  btn.innerHTML = '<span class="erd-ico">' + ICONO + '</span><span class="erd-x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></span>';
  var tip = document.createElement('div'); tip.className = 'erd-tip'; tip.textContent = '¿Tienes alguna duda?';

  var panel = document.createElement('div');
  panel.className = 'erd-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Asistente de dudas de EasyRobots');
  panel.innerHTML =
    '<div class="erd-cab"><div class="erd-av">' + ICONO + '</div><div><b>Asistente de ' + NOMBRE + '</b>' +
    '<small>Te responde una IA · solo dudas sobre esta web · <a href="/privacy.html" target="_blank" rel="noopener">Privacidad</a></small></div>' +
    '<button class="erd-cerrar" type="button" aria-label="Cerrar">×</button></div>' +
    '<div class="erd-msgs"></div>' +
    '<div class="erd-pie"><input type="text" maxlength="' + TOPE_LETRAS + '" placeholder="Escribe tu duda…" aria-label="Tu duda">' +
    '<button type="button" aria-label="Enviar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l16-8-6 16-2.5-6.5L4 12z"/></svg></button></div>' +
    '<div class="erd-nota">Para lo que no sepa, lo mejor es la auditoría gratuita o info@easyrobots-ai.cloud</div>';

  document.body.appendChild(btn); document.body.appendChild(tip); document.body.appendChild(panel);
  var msgs = panel.querySelector('.erd-msgs');
  var input = panel.querySelector('input');
  var enviar = panel.querySelector('.erd-pie button');
  var esc = document.createElement('div'); esc.className = 'erd-esc'; esc.innerHTML = '<i></i><i></i><i></i>';
  var fila = null, pendientes = 0;

  function abajo() { msgs.scrollTop = msgs.scrollHeight; }
  function enlazar(t) {
    // texto plano -> html seguro, con enlaces pinchables
    var s = String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    s = s.replace(/(https?:\/\/[^\s)]+)/g, function (u) { return '<a href="' + u + '" target="_blank" rel="noopener">' + u + '</a>'; });
    s = s.replace(/([a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,})/gi, '<a href="mailto:$1">$1</a>');
    return s;
  }
  function burbuja(de, t, sinGuardar) {
    var d = document.createElement('div');
    d.className = 'erd-m ' + (de === 'yo' ? 'erd-yo' : 'erd-bot');
    d.innerHTML = enlazar(t);
    if (msgs.contains(esc)) msgs.insertBefore(d, esc); else msgs.appendChild(d);
    if (!sinGuardar) { hilo.push({ de: de, t: t }); guardar('er-dudas-hilo', hilo); }
    abajo();
  }
  function quitarBotones() { if (fila) { fila.remove(); fila = null; } }
  function botones(lista) {
    quitarBotones();
    lista = lista.map(function (x) { return String(x).trim(); }).filter(Boolean).slice(0, 4);
    if (!lista.length) return;
    fila = document.createElement('div'); fila.className = 'erd-botones';
    lista.forEach(function (x) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = x;
      b.addEventListener('click', function () { mandar(x); });
      fila.appendChild(b);
    });
    msgs.appendChild(fila); abajo();
  }
  function escribiendo(si) { esc.classList.toggle('erd-ver', !!si); if (si) { msgs.appendChild(esc); abajo(); } }

  function botonesIniciales() {
    var p = location.pathname;
    if (/reactivador|agente-10|agente-secretaria|aura-/.test(p)) return ['¿Qué incluye?', '¿Cuánto cuesta?', '¿Hay permanencia?', '¿Cómo se contrata?'];
    return ['¿Qué hacéis exactamente?', '¿Cuánto cuesta?', '¿Cómo empiezo?'];
  }

  function pintarHilo() {
    msgs.innerHTML = '';
    if (!hilo.length) burbuja('bot', SALUDO, true);
    else hilo.forEach(function (m) { burbuja(m.de, m.t, true); });
    if (!hilo.length || hilo[hilo.length - 1].de === 'bot') botones(!hilo.length ? botonesIniciales() : []);
  }

  function mandar(texto) {
    texto = String(texto || '').trim().slice(0, TOPE_LETRAS);
    if (!texto || pendientes > 0) return;
    if (enviados >= TOPE_MENSAJES) {
      burbuja('bot', 'Hemos llegado al límite de esta conversación. Si quieres seguir, escríbenos a info@easyrobots-ai.cloud o reserva la auditoría gratuita.', true);
      return;
    }
    quitarBotones();
    burbuja('yo', texto);
    input.value = '';
    enviados++; guardar('er-dudas-enviados', enviados);

    // El agente sabe en que pagina esta la persona (solo cuando cambia de pagina)
    var pag = location.pathname;
    var textoAgente = texto;
    if (pag !== paginaDicha) {
      textoAgente = '[La persona está en la página ' + pag + ' de la web] ' + texto;
      paginaDicha = pag; guardar('er-dudas-pagina', pag);
    }
    pendientes++; enviar.disabled = true; escribiendo(true);
    var ctrl = window.AbortController ? new AbortController() : null;
    var reloj = setTimeout(function () { if (ctrl) ctrl.abort(); }, ESPERA_MAX_MS);
    fetch(WEBHOOK, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sitio: SITIO, sesion: sesion, texto: textoAgente, personalidad: PERSONALIDAD, nombre: 'Visitante web · ' + NOMBRE }),
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (cuerpo) {
        var datos = null; try { datos = cuerpo ? JSON.parse(cuerpo) : null; } catch (e) {}
        var lista = (datos && datos.mensajes) || [];
        var opciones = null;
        lista.forEach(function (m) {
          var t = String(m);
          t = t.replace(/\[\[\s*botones\s*:([^\]]*)\]\]/gi, function (_, x) { opciones = x.split('|'); return ''; });
          t = t.replace(/\[\[[^\]]*\]\]/g, '').replace(/\n{3,}/g, '\n\n').trim();
          if (t) burbuja('bot', t);
        });
        if (opciones) botones(opciones);
      })
      .catch(function () {
        burbuja('bot', 'Ahora mismo no he podido contestar. Prueba otra vez en un momento o escríbenos a info@easyrobots-ai.cloud.', true);
      })
      .then(function () { clearTimeout(reloj); pendientes--; enviar.disabled = false; escribiendo(false); input.focus(); });
  }

  function abrir(si) {
    abierto = !!si; guardar('er-dudas-abierto', abierto);
    panel.classList.toggle('erd-on', abierto); btn.classList.toggle('erd-on', abierto);
    btn.setAttribute('aria-label', abierto ? 'Cerrar el asistente de dudas' : 'Abrir el asistente de dudas');
    tip.classList.remove('erd-ver');
    if (abierto) { pintarHilo(); setTimeout(function () { input.focus(); }, 50); }
  }
  btn.addEventListener('click', function () { abrir(!abierto); });
  panel.querySelector('.erd-cerrar').addEventListener('click', function () { abrir(false); });
  enviar.addEventListener('click', function () { mandar(input.value); });
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); mandar(input.value); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && abierto) abrir(false); });

  if (abierto) abrir(true);
  else if (!hilo.length) {
    // Una invitacion discreta, una sola vez por sesion
    if (!leer('er-dudas-tip', false)) {
      setTimeout(function () { tip.classList.add('erd-ver'); guardar('er-dudas-tip', true); setTimeout(function () { tip.classList.remove('erd-ver'); }, 6000); }, 9000);
    }
  }
})();
