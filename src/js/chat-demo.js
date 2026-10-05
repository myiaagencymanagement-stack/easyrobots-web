/* chat-demo.js - convierte una tarjeta de conversacion en un chat de verdad
   con el agente de EasyRobots (webhook easyrobots-web del AGENTE MULTICANAL).

   Uso en la pagina: a la tarjeta se le pone

     <div class="dm-card" data-chat-demo data-personalidad="ecommerce" data-caso="2">

   y al final de la pagina <script src="/js/chat-demo.js" defer></script>.

   Por defecto busca la estructura de las tarjetas de ecommerce (.dm-chat,
   .dm-pie .campo, .dm-pie .env, burbujas .dm-in / .dm-out). Si otra landing
   usa otras clases, se cambian con data-*:
     data-sel-chat, data-sel-campo, data-sel-enviar, data-clase-in, data-clase-out

   data-sitio dice a QUE NEGOCIO DE DEMO va el chat (demo-dental,
   demo-ecommerce...). Cada uno es una cuenta aparte en la base, con su agenda y
   su CRM. Sin data-sitio va a la cuenta easyrobots.

   Lo que hace:
   - El chat de ejemplo se queda tal cual hasta que la persona escribe. Al
     mandar el primer mensaje se vacia y empieza la conversacion real.
   - Cada tarjeta tiene su propia sesion (personalidad + caso), asi que las
     tres de ecommerce son tres conversaciones distintas.
   - El agente espera unos segundos por si llegan varios mensajes seguidos. Si
     se mandan dos, la primera peticion vuelve vacia y la segunda trae las
     respuestas de las dos: por eso se cuenta lo pendiente y no se da por
     fallida una respuesta vacia.
   - Tope de mensajes por sesion: cada mensaje cuesta una llamada al modelo.

   Sin dependencias. Si falta algo en la tarjeta, la deja como estaba. */
(function () {
  'use strict';

  var WEBHOOK = 'https://mysmartagents-n8n.qclzrh.easypanel.host/webhook/easyrobots-web';
  var SITIO = 'easyrobots-ai.cloud';
  var TOPE_MENSAJES = 25;
  var TOPE_LETRAS = 500;
  var ESPERA_MAX_MS = 60000;

  var tarjetas = document.querySelectorAll('[data-chat-demo]');
  if (!tarjetas.length) return;

  ponerEstilos();
  for (var i = 0; i < tarjetas.length; i++) montar(tarjetas[i]);

  function montar(card) {
    var d = card.dataset;
    var chat = card.querySelector(d.selChat || '.dm-chat');
    var campo = card.querySelector(d.selCampo || '.dm-pie .campo');
    var enviar = card.querySelector(d.selEnviar || '.dm-pie .env');
    if (!chat || !campo || !enviar) return;

    var claseIn = d.claseIn || 'dm-in';
    var claseOut = d.claseOut || 'dm-out';
    var personalidad = d.personalidad || '';
    var sitio = d.sitio || SITIO;
    var sesion = sesionDe(sitio + '-' + personalidad, d.caso || '');
    var enviados = 0;
    var pendientes = 0;
    var empezado = false;
    var escribiendo = null;

    // El span de "Escribe un mensaje..." pasa a ser un input de verdad,
    // con las mismas clases para que no cambie de aspecto.
    var input = document.createElement('input');
    input.type = 'text';
    input.className = campo.className + ' cd-input';
    input.placeholder = (campo.textContent || 'Escribe un mensaje').trim();
    input.maxLength = TOPE_LETRAS;
    input.setAttribute('aria-label', 'Escribe un mensaje');
    input.autocomplete = 'off';
    campo.parentNode.replaceChild(input, campo);

    var boton = document.createElement('button');
    boton.type = 'button';
    boton.className = enviar.className + ' cd-enviar';
    boton.innerHTML = enviar.innerHTML;
    boton.setAttribute('aria-label', 'Enviar');
    enviar.parentNode.replaceChild(boton, enviar);

    // Que pinchar en la caja de texto no dispare el "seleccionar tarjeta"
    // de la landing mas de lo necesario.
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); mandar(); }
    });
    boton.addEventListener('click', function (e) { e.stopPropagation(); mandar(); });

    function mandar() {
      var texto = input.value.trim();
      if (!texto) return;
      if (enviados >= TOPE_MENSAJES) {
        burbuja(claseOut, 'Hasta aqui la demostracion. Si quieres verlo con los datos de tu negocio, reserva una llamada y lo montamos.');
        input.value = '';
        return;
      }
      if (!empezado) empezar();
      enviados++;
      input.value = '';
      burbuja(claseIn, texto);
      pedir(texto);
    }

    function empezar() {
      empezado = true;
      // Se congela el alto para que la tarjeta no crezca con la conversacion.
      var alto = chat.offsetHeight;
      chat.innerHTML = '';
      chat.classList.add('cd-vivo');
      if (alto > 0) chat.style.height = alto + 'px';
    }

    function pedir(texto) {
      pendientes++;
      mostrarEscribiendo(true);
      var ctrl = window.AbortController ? new AbortController() : null;
      var reloj = setTimeout(function () { if (ctrl) ctrl.abort(); }, ESPERA_MAX_MS);

      fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sitio: sitio, sesion: sesion, texto: texto, personalidad: personalidad }),
        signal: ctrl ? ctrl.signal : undefined
      })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.text();
        })
        .then(function (cuerpo) {
          var datos = null;
          try { datos = cuerpo ? JSON.parse(cuerpo) : null; } catch (e) { datos = null; }
          var mensajes = (datos && datos.mensajes) || [];
          return soltar(mensajes);
        })
        .catch(function () {
          burbuja(claseOut, 'Ahora mismo no he podido contestar. Prueba otra vez en un momento.');
        })
        .then(function () {
          clearTimeout(reloj);
          pendientes--;
          mostrarEscribiendo(pendientes > 0);
        });
    }

    // Los mensajes salen de uno en uno, con una pausa corta, como en WhatsApp.
    function soltar(mensajes) {
      var p = Promise.resolve();
      mensajes.forEach(function (m, i) {
        p = p.then(function () {
          return new Promise(function (ok) {
            setTimeout(function () { burbuja(claseOut, String(m)); ok(); }, i === 0 ? 0 : 700);
          });
        });
      });
      return p;
    }

    function burbuja(clase, texto) {
      var b = document.createElement('div');
      b.className = clase;
      b.textContent = texto;
      var h = document.createElement('i');
      h.className = 'hh';
      h.textContent = hora();
      b.appendChild(h);
      chat.insertBefore(b, escribiendo && escribiendo.parentNode === chat ? escribiendo : null);
      chat.scrollTop = chat.scrollHeight;
    }

    function mostrarEscribiendo(si) {
      if (si && !escribiendo) {
        escribiendo = document.createElement('div');
        escribiendo.className = claseOut + ' cd-puntos';
        escribiendo.setAttribute('aria-label', 'Escribiendo');
        escribiendo.innerHTML = '<span></span><span></span><span></span>';
      }
      if (si && escribiendo.parentNode !== chat) chat.appendChild(escribiendo);
      if (!si && escribiendo && escribiendo.parentNode) escribiendo.parentNode.removeChild(escribiendo);
      chat.scrollTop = chat.scrollHeight;
    }
  }

  // Una sesion por tarjeta y por navegador. Si el almacenamiento no esta
  // disponible (modo privado), vale una sesion de esta visita.
  function sesionDe(personalidad, caso) {
    var clave = 'er-chat-' + personalidad + '-' + caso;
    var id = null;
    try { id = window.localStorage.getItem(clave); } catch (e) { id = null; }
    if (!id) {
      id = 'web-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
      try { window.localStorage.setItem(clave, id); } catch (e) { /* sin memoria, da igual */ }
    }
    return id;
  }

  function hora() {
    var d = new Date();
    return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  }

  function ponerEstilos() {
    if (document.getElementById('cd-estilos')) return;
    var s = document.createElement('style');
    s.id = 'cd-estilos';
    s.textContent =
      '.cd-input{border:0;outline:0;font:inherit;width:100%;min-width:0}' +
      '.cd-input:focus{box-shadow:inset 0 0 0 2px rgba(0,111,254,.35)}' +
      '.cd-enviar{border:0;padding:0;cursor:pointer}' +
      '.cd-vivo{overflow-y:auto;scrollbar-width:thin}' +
      '.cd-vivo>*{flex:0 0 auto}' +
      '.cd-vivo .hh{display:block;text-align:right;font-style:normal;font-size:11px;opacity:.55;margin-top:2px}' +
      '.cd-puntos{display:flex;gap:4px;align-items:center;padding:10px 12px}' +
      '.cd-puntos span{width:6px;height:6px;border-radius:50%;background:currentColor;opacity:.35;animation:cd-p 1.2s infinite}' +
      '.cd-puntos span:nth-child(2){animation-delay:.2s}.cd-puntos span:nth-child(3){animation-delay:.4s}' +
      '@keyframes cd-p{0%,80%,100%{opacity:.25}40%{opacity:.8}}' +
      '@media (prefers-reduced-motion:reduce){.cd-puntos span{animation:none}}';
    document.head.appendChild(s);
  }
})();
