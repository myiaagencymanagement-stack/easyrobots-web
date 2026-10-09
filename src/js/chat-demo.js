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
   - Cada tarjeta tiene su propia sesion, nueva en cada carga de la pagina:
     las tres de ecommerce son tres conversaciones distintas.
   - El agente espera unos segundos por si llegan varios mensajes seguidos. Si
     se mandan dos, la primera peticion vuelve vacia y la segunda trae las
     respuestas de las dos: por eso se cuenta lo pendiente y no se da por
     fallida una respuesta vacia.
   - Tope de mensajes por sesion: cada mensaje cuesta una llamada al modelo.

   GUIADO (05/10). El agente de las demos web escribe marcas que aqui se
   pintan y no se ven como texto:
     [[botones: a | b]]       -> botones de respuesta rapida
     [[ficha:REF101]]         -> tarjeta con foto (catalogo FICHAS, abajo)
     [[comercial: a | b | c]] -> la tarjeta pasa al WhatsApp del comercial
   Y data-frases="a|b|c" en la tarjeta pone los primeros botones.

   Sin dependencias. Si falta algo en la tarjeta, la deja como estaba. */
(function () {
  'use strict';

  var WEBHOOK = 'https://mysmartagents-n8n.qclzrh.easypanel.host/webhook/easyrobots-web';
  var SITIO = 'easyrobots-ai.cloud';
  var TOPE_MENSAJES = 25;
  var TOPE_LETRAS = 500;
  var ESPERA_MAX_MS = 60000;

  // Las fotos son las de las propias landings. Los datos, los del prompt (81).
  var FICHAS = {
    REF101:  { img: '/assets/boceto-piso-chat.webp', t: 'Piso en Chamber\u00ed \u00b7 REF 101',
               l: '3 hab. \u00b7 2 ba\u00f1os \u00b7 95 m\u00b2 \u00b7 4.\u00aa con ascensor', p: '545.000 \u20ac',
               b: 'Quiero verlo', e: 'Quiero ver el piso de Chamber\u00ed (REF 101)' },
    REF102:  { img: '/assets/hero-wa-piso.webp', t: '\u00c1tico en Arganzuela \u00b7 REF 102',
               l: '2 hab. \u00b7 78 m\u00b2 \u00b7 terraza de 25 m\u00b2 \u00b7 garaje', p: '389.000 \u20ac',
               b: 'Quiero verlo', e: 'Quiero ver el \u00e1tico de Arganzuela (REF 102)' },
    COROLLA: { img: '/assets/conce-ventas.webp', t: 'Toyota Corolla Hybrid 2022',
               l: '38.000 km \u00b7 autom\u00e1tico \u00b7 h\u00edbrido', p: '22.900 \u20ac',
               b: 'Quiero probarlo', e: 'Quiero probar el Corolla Hybrid' },
    TROC:    { img: '/assets/conce-hace.webp', t: 'Volkswagen T-Roc 2023',
               l: '15.000 km \u00b7 autom\u00e1tico', p: '27.900 \u20ac',
               b: 'Quiero probarlo', e: 'Quiero probar el T-Roc' }
  };
  var COMERCIAL = {
    'demo-inmobiliaria':  'Laura \u00b7 Comercial',
    'demo-concesionario': 'Javier \u00b7 Comercial'
  };

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

    var fila = null;  // la fila de botones que este a la vista
    if (d.frases) botones(d.frases.split('|'));

    function mandar(desdeBoton) {
      var texto = String(desdeBoton || input.value).trim();
      quitarBotones();
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
      // consent.js lo mide como probar_demo (solo si hay consentimiento)
      document.dispatchEvent(new CustomEvent('er:demo-usada', { detail: { sitio: sitio } }));
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
      var opciones = null, paraComercial = null;
      mensajes.forEach(function (m, i) {
        var t = String(m);
        var fichas = [];
        t = t.replace(/\[\[\s*botones\s*:([^\]]*)\]\]/gi, function (_, x) { opciones = x.split('|'); return ''; });
        t = t.replace(/\[\[\s*ficha\s*:\s*([A-Za-z0-9_-]+)\s*\]\]/gi, function (_, x) { fichas.push(x.replace(/[^A-Za-z0-9]/g, '').toUpperCase()); return ''; });
        t = t.replace(/\[\[\s*comercial\s*:([^\]]*)\]\]/gi, function (_, x) { paraComercial = x.split('|'); return ''; });
        t = t.replace(/\n{3,}/g, '\n\n').trim();
        p = p.then(function () {
          return new Promise(function (ok) {
            setTimeout(function () {
              if (t) burbuja(claseOut, t);
              fichas.forEach(ficha);
              ok();
            }, i === 0 ? 0 : 700);
          });
        });
      });
      return p.then(function () {
        if (opciones) botones(opciones);
        if (paraComercial) setTimeout(function () { alComercial(paraComercial); }, 1200);
      });
    }

    function botones(lista) {
      quitarBotones();
      lista = lista.map(function (x) { return String(x).trim(); }).filter(Boolean).slice(0, 3);
      if (!lista.length) return;
      fila = document.createElement('div');
      fila.className = 'cd-botones';
      lista.forEach(function (x) {
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = x;
        b.addEventListener('click', function (e) { e.stopPropagation(); mandar(x); });
        fila.appendChild(b);
      });
      chat.appendChild(fila);
      chat.scrollTop = chat.scrollHeight;
    }
    function quitarBotones() { if (fila && fila.parentNode) fila.parentNode.removeChild(fila); fila = null; }

    function ficha(clave) {
      var f = FICHAS[clave];
      if (!f) return;
      var c = document.createElement('div');
      c.className = 'cd-ficha';
      c.innerHTML = '<img alt="" loading="lazy"><div><b></b><span></span><u></u><button type="button"></button></div>';
      c.querySelector('img').src = f.img;
      c.querySelector('b').textContent = f.t;
      c.querySelector('span').textContent = f.l;
      c.querySelector('u').textContent = f.p;
      var b = c.querySelector('button');
      b.textContent = f.b;
      b.addEventListener('click', function (e) { e.stopPropagation(); mandar(f.e); });
      chat.insertBefore(c, escribiendo && escribiendo.parentNode === chat ? escribiendo : null);
      chat.scrollTop = chat.scrollHeight;
    }

    // La tarjeta "pasa" al WhatsApp del comercial: lo que le llega, ya
    // cualificado. Los datos son los que el agente recogio en la charla.
    function alComercial(lineas) {
      if (getComputedStyle(card).position === 'static') card.style.position = 'relative';
      var v = document.createElement('div');
      v.className = 'cd-comercial';
      v.innerHTML = '<div class="cd-c-cab"><span class="cd-c-av"></span><div><b></b><i>WhatsApp del equipo</i></div></div>' +
        '<div class="cd-c-cuerpo"><div class="cd-c-msg"><strong>Nuevo lead</strong><ul></ul><em></em></div></div>' +
        '<button type="button" class="cd-c-volver">Volver a la conversaci\u00f3n</button>';
      var nombre = COMERCIAL[sitio] || 'Equipo comercial';
      v.querySelector('.cd-c-cab b').textContent = nombre;
      v.querySelector('.cd-c-av').textContent = nombre.charAt(0);
      var ul = v.querySelector('ul');
      lineas.map(function (x) { return String(x).trim(); }).filter(Boolean).forEach(function (x) {
        var li = document.createElement('li');
        var k = x.indexOf(':');
        if (k > 0) {
          var bb = document.createElement('b');
          bb.textContent = x.slice(0, k + 1) + ' ';
          li.appendChild(bb);
          li.appendChild(document.createTextNode(x.slice(k + 1).trim()));
        } else li.textContent = x;
        ul.appendChild(li);
      });
      v.querySelector('em').textContent = 'Le ha llegado solo, sin que nadie del equipo escriba nada. ' + hora();
      v.querySelector('.cd-c-volver').addEventListener('click', function (e) {
        e.stopPropagation();
        v.classList.remove('on');
        setTimeout(function () { if (v.parentNode) v.parentNode.removeChild(v); }, 400);
      });
      card.appendChild(v);
      requestAnimationFrame(function () { requestAnimationFrame(function () { v.classList.add('on'); }); });
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

  // Una sesion por tarjeta y POR CARGA DE PAGINA (05/10). Antes se guardaba en
  // el navegador y al refrescar la base seguia viendo a la misma persona, con
  // su cita de la prueba anterior ("ya tienes cita"), mientras la pantalla
  // salia vacia. En una demo cada visita tiene que empezar de cero.
  function sesionDe() {
    return 'web-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
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
      '.cd-botones{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}' +
      '.cd-botones button{border:1.5px solid #006FFE;background:#fff;color:#006FFE;border-radius:999px;padding:6px 12px;font:600 13px/1.2 inherit;cursor:pointer}' +
      '.cd-botones button:hover{background:#006FFE;color:#fff}' +
      '.cd-ficha{display:flex;gap:10px;align-items:stretch;background:#fff;border:1px solid #E3E9F2;border-radius:12px;overflow:hidden;max-width:96%}' +
      '.cd-ficha img{width:96px;object-fit:cover;flex:0 0 auto;background:#EEF2F7}' +
      '.cd-ficha div{padding:8px 10px 10px 0;display:flex;flex-direction:column;gap:2px;min-width:0}' +
      '.cd-ficha b{font-size:14px}.cd-ficha span{font-size:12.5px;color:#5B6675}' +
      '.cd-ficha u{text-decoration:none;font-weight:700;font-size:15px}' +
      '.cd-ficha button{align-self:flex-start;margin-top:4px;border:0;background:#006FFE;color:#fff;border-radius:8px;padding:5px 10px;font:600 12.5px/1.2 inherit;cursor:pointer}' +
      '.cd-comercial{position:absolute;inset:0;z-index:5;display:flex;flex-direction:column;background:#ECE5DD;transform:translateX(100%);transition:transform .45s ease}' +
      '.cd-comercial.on{transform:none}' +
      '.cd-c-cab{display:flex;align-items:center;gap:10px;padding:12px 14px;background:#075E54;color:#fff}' +
      '.cd-c-cab b{display:block;font-size:15px}.cd-c-cab i{font-style:normal;font-size:12px;opacity:.8}' +
      '.cd-c-av{width:32px;height:32px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;font-weight:700}' +
      '.cd-c-cuerpo{flex:1 1 auto;overflow-y:auto;padding:14px}' +
      '.cd-c-msg{background:#fff;border-radius:10px;padding:10px 12px;font-size:13.5px;line-height:1.45;box-shadow:0 1px 1px rgba(0,0,0,.08)}' +
      '.cd-c-msg strong{display:block;color:#075E54;margin-bottom:4px}' +
      '.cd-c-msg ul{margin:0;padding-left:16px}.cd-c-msg li{margin:2px 0}' +
      '.cd-c-msg em{display:block;margin-top:8px;font-size:12px;color:#5B6675}' +
      '.cd-c-volver{margin:0 14px 14px;border:0;background:#075E54;color:#fff;border-radius:999px;padding:9px;font:600 13px/1.2 inherit;cursor:pointer}' +
      '@media (prefers-reduced-motion:reduce){.cd-puntos span{animation:none}.cd-comercial{transition:none}}';
    document.head.appendChild(s);
  }
})();
