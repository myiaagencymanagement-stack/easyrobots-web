/* EasyRobots - consentimiento de cookies (paginas de prueba)
   Regla: NADA de Google Analytics, Meta Pixel, Retell ni Vimeo
   hasta que la persona pulse "Aceptar". Rechazar = no se carga nada.  */

(function () {
  'use strict';

  var GA_ID = 'G-X0YM75HY0S';
  var KEY = 'er_consent';            // 'granted' | 'denied'
  var banner, loaded = false;

  // --- 1. Consent Mode v2: por defecto TODO denegado, antes de cargar nada ---
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  });

  // --- 2. Carga real de scripts, solo tras aceptar ---
  function loadTracking() {
    if (loaded) return;
    loaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted'
    });

    // Aqui va el pixel de Meta cuando lo tengas. Ejemplo:
    // !function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    // fbq('init','TU_PIXEL_ID'); fbq('track','PageView');

    // Avisa al resto de la pagina (video, widget de voz, etc.)
    document.dispatchEvent(new CustomEvent('er:consent-granted'));
  }

  // --- 3. Banner ---
  function decide(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (banner) banner.classList.remove('show');
    if (value === 'granted') loadTracking();
  }

  document.addEventListener('DOMContentLoaded', function () {
    banner = document.getElementById('cookie-banner');
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}

    if (saved === 'granted') { loadTracking(); return; }
    if (saved === 'denied') { return; }

    if (banner) {
      banner.classList.add('show');
      banner.querySelector('[data-ck="accept"]').addEventListener('click', function () { decide('granted'); });
      banner.querySelector('[data-ck="reject"]').addEventListener('click', function () { decide('denied'); });
    }
  });

  // Para poder reabrir la eleccion desde el pie de pagina (derecho a retirar el consentimiento)
  window.erResetConsent = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    location.reload();
  };

  // Evento de conversion, solo si hay consentimiento
  window.erTrack = function (name, params) {
    if (loaded) gtag('event', name, params || {});
  };
})();
