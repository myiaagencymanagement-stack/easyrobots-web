/* EasyRobots - consentimiento, medicion y calendario (todas las paginas vivas)

   Regla: NADA de Google Analytics ni Meta Pixel hasta que la persona pulse
   "Aceptar". Rechazar = no se carga nada y no se manda nada a Meta, ni desde
   la web ni desde n8n (la reserva lleva metadata[consent] y n8n la respeta).

   Que se mide (mismo nombre en GA4 / Meta):
     page_view            / PageView      cada pagina
     ver_landing          / ViewContent   pagina de nicho, con su nicho
     abrir_calendario     / Contact       clic en cualquier [data-cal] o [data-reserva]
     probar_demo          / ProbarDemo    primer mensaje en un chat de demo
     cita_agendada        / Schedule      reserva confirmada en Cal.com (evento clave)
   Todos llevan el parametro "nicho". La reserva lleva como event_id el uid de
   Cal.com, y n8n manda el mismo uid a la API de Conversiones: Meta deduplica. */

(function () {
  'use strict';

  var GA_ID = 'G-X0YM75HY0S';
  var PIXEL_ID = '1511070997454573';
  var CAL_LINK = 'ai-business-tmzcjy/30min';
  var KEY = 'er_consent';            // 'granted' | 'denied'
  var loaded = false, banner = null;

  // El nicho sale de <html data-nicho> o, si no lo hay, de la carpeta de la URL.
  function nicho() {
    var d = document.documentElement.getAttribute('data-nicho');
    if (d) return d;
    var p = location.pathname.split('/').filter(Boolean)[0] || 'home';
    return p.replace(/\.html$/, '');
  }

  // --- 1. Consent Mode v2: por defecto TODO denegado, antes de cargar nada ---
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: 'denied', functionality_storage: 'denied',
    personalization_storage: 'denied', security_storage: 'granted',
    wait_for_update: 500
  });

  // --- 2. Carga real de GA y del pixel, solo tras aceptar ---
  function loadTracking() {
    if (loaded) return;
    loaded = true;
    var n = nicho();

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('consent', 'update', {
      ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted',
      analytics_storage: 'granted', functionality_storage: 'granted',
      personalization_storage: 'granted'
    });
    gtag('js', new Date());
    gtag('config', GA_ID, { nicho: n });

    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');

    if (n !== 'home' && n !== 'privacy' && n !== 'gracias') {
      track('ver_landing', 'ViewContent', { content_name: n, content_category: n });
    }
    document.dispatchEvent(new CustomEvent('er:consent-granted'));
  }

  // Un evento, a GA y a Meta a la vez. Sin consentimiento no sale nada.
  // metaName en minuscula y sin estandar de Meta = evento personalizado.
  var STANDARD = { PageView: 1, ViewContent: 1, Contact: 1, Schedule: 1, Lead: 1 };
  function track(gaName, metaName, params, eventId) {
    if (!loaded) return;
    var p = params || {};
    p.nicho = p.nicho || nicho();
    gtag('event', gaName, p);
    if (window.fbq && metaName) {
      var opt = eventId ? { eventID: eventId } : undefined;
      fbq(STANDARD[metaName] ? 'track' : 'trackCustom', metaName, p, opt);
    }
  }
  window.erTrack = track;

  // --- 3. Banner (se inyecta solo; la pagina no tiene que traer HTML) ---
  function pintarBanner() {
    var css = document.createElement('style');
    css.textContent =
      '#er-ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;' +
      'background:#0E1522;color:#E6EBF2;border:1px solid rgba(255,255,255,.09);border-radius:14px;' +
      'box-shadow:0 18px 50px rgba(0,0,0,.45);padding:18px 20px;font:400 14px/1.5 "Plus Jakarta Sans",system-ui,sans-serif;' +
      'display:none}#er-ck.show{display:block}#er-ck p{margin:0 0 14px}#er-ck a{color:#7FB2FF}' +
      '#er-ck .b{display:flex;gap:10px;flex-wrap:wrap}#er-ck button{flex:1 1 140px;cursor:pointer;border-radius:10px;' +
      'padding:10px 14px;font:600 14px "Plus Jakarta Sans",system-ui,sans-serif;border:1px solid rgba(255,255,255,.16);' +
      'background:transparent;color:#E6EBF2}#er-ck button[data-ck=accept]{background:#fff;color:#0B1220;border-color:#fff}';
    document.head.appendChild(css);
    banner = document.createElement('div');
    banner.id = 'er-ck';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookies');
    banner.innerHTML =
      '<p>Usamos cookies de Google Analytics y Meta para saber qu&eacute; anuncios y p&aacute;ginas funcionan. ' +
      'Solo se activan si aceptas. <a href="/privacy.html#cookies">M&aacute;s informaci&oacute;n</a></p>' +
      '<div class="b"><button type="button" data-ck="reject">Rechazar</button>' +
      '<button type="button" data-ck="accept">Aceptar</button></div>';
    document.body.appendChild(banner);
    banner.querySelector('[data-ck="accept"]').addEventListener('click', function () { decide('granted'); });
    banner.querySelector('[data-ck="reject"]').addEventListener('click', function () { decide('denied'); });
    banner.classList.add('show');
  }

  function decide(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (banner) banner.classList.remove('show');
    if (value === 'granted') loadTracking();
  }

  function iniciar() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === 'granted') loadTracking();
    else if (saved !== 'denied') pintarBanner();

    // Clic en cualquier boton de reservar
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-cal],[data-reserva]');
      if (b) track('abrir_calendario', 'Contact', { origen: (b.textContent || '').trim().slice(0, 40) });
    }, true);
    // Primer mensaje en un chat de demo (lo avisa chat-demo.js)
    document.addEventListener('er:demo-usada', function (e) {
      track('probar_demo', 'ProbarDemo', { sitio: e.detail && e.detail.sitio });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();

  // Derecho a retirar el consentimiento (enlace "Cookies" del pie o de privacy.html)
  window.erResetConsent = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    location.reload();
  };

  // --- 4. Calendario de Cal.com ---
  // Se monta al abrir el modal, no en la carga: sin clic no hay ninguna llamada a
  // Cal.com. Va con su script oficial porque es el que avisa de la reserva hecha.
  function cookie(n) {
    var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)');
    return m ? decodeURIComponent(m[1]) : '';
  }
  window.erCalendario = function (slot) {
    if (!slot || slot.getAttribute('data-montado')) return;
    slot.setAttribute('data-montado', '1');
    slot.id = slot.id || 'er-cal-slot';

    // Lo que viaja a la reserva y luego lee n8n: nicho, UTM y, solo con
    // consentimiento, los identificadores de Meta para la API de Conversiones.
    var cfg = { layout: 'month_view', 'metadata[nicho]': nicho() };
    var q = new URLSearchParams(location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
      if (q.get(k)) cfg[k] = q.get(k);
    });
    if (loaded) {
      cfg['metadata[consent]'] = '1';
      if (cookie('_fbp')) cfg['metadata[fbp]'] = cookie('_fbp');
      var fbc = cookie('_fbc') || (q.get('fbclid') ? 'fb.1.' + Date.now() + '.' + q.get('fbclid') : '');
      if (fbc) cfg['metadata[fbc]'] = fbc;
      cfg['metadata[url]'] = location.href.split('#')[0].slice(0, 400);
      // Meta exige el navegador en los eventos "website" de la API de Conversiones
      cfg['metadata[ua]'] = navigator.userAgent.slice(0, 300);
    }

    /* Snippet oficial de Cal.com (embed.js) */
    /* eslint-disable */
    (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    /* eslint-enable */
    Cal('init', 'er', { origin: 'https://cal.com' });
    Cal.ns.er('inline', { elementOrSelector: '#' + slot.id, calLink: CAL_LINK, config: cfg });
    Cal.ns.er('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    Cal.ns.er('on', {
      action: 'bookingSuccessfulV2',
      callback: function (e) {
        var d = (e && e.detail && e.detail.data) || {};
        track('cita_agendada', 'Schedule', { value: 0, currency: 'EUR' }, d.uid);
      }
    });
  };
})();
