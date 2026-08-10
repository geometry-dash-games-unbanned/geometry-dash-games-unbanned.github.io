/**
 * inject-components.js
 * Synchronously injects shared components (nav, footer)
 * into placeholder divs — no async fetch delay.
 */

(function() {
  var navHTML = '<!-- Shared Navigation -->\n<nav class="navbar navbar-expand-lg navbar-dark top-nav" id="mainNav">\n  <a class="navbar-brand js-scroll-trigger" href="/">\n    <img src="' + (window.location.pathname.includes('/play/') ? '../' : '') + 'images/home-icon.webp" width="160" height="80" class="topVAZ-logo" alt="logo">\n  </a>\n  <ul class="navbar-nav d-none d-lg-flex ms-auto mb-2 mb-lg-0">\n    <li class="nav-item"><a class="nav-link" href="/play/geometry-dash.html">Classic</a></li>\n    <li class="nav-item"><a class="nav-link" href="/play/geometry-dash-lite.html">Lite</a></li>\n    <li class="nav-item"><a class="nav-link" href="/play/geometry-dash-meltdown.html">Meltdown</a></li>\n    <li class="nav-item"><a class="nav-link" href="/play/geometry-dash-subzero.html">Subzero</a></li>\n    <li class="nav-item"><a class="nav-link" href="/play/geometry-dash-world.html">World</a></li>\n    <li class="nav-item"><a class="nav-link" href="/play/geometry-dash-scratch.html">Scratch</a></li>\n  </ul>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="navbar-collapse collapse" id="nav-menu"></div>\n</nav>';

  var footerHTML = '<!-- Shared Footer -->\n<div class="footer-copyright py-4">\n  <div class="container">\n    <div>\n      <span class="dsb-panel">\n        <a href="/term.html">Terms</a> - <a href="/dmca.html">DMCA</a> - <a href="/policy.html">Privacy</a>\n      </span>\n    </div>\n    <div class="more-games-section" style="margin-top: 10px; font-size: 14px;">\n      <span class="dsb-panel">\n        <a href="/play/1v1-lol.html">1v1 LOL</a> -\n        <a href="/play/2048.html">2048</a> -\n        <a href="/play/adventure-drivers.html">Adventure Drivers</a> -\n        <a href="/play/agario.html">Agario</a> -\n        <a href="/play/among-us.html">Among Us</a> -\n        <a href="/play/basket-battle.html">Basket Battle</a> -\n        <a href="/play/basketball-stars.html">Basketball Stars</a> -\n        <a href="/play/block-blast.html">Block Blast</a> -\n        <a href="/play/blumgi-rocket.html">Blumgi Rocket</a> -\n        <a href="/play/car-rush.html">Car Rush</a>\n      </span>\n    </div>\n  </div>\n</div>';

  function inject(selector, html) {
    var el = document.querySelector(selector);
    if (el) { el.innerHTML = html; }
  }

  if (!window.__navInjected) {
    inject('#shared-nav', navHTML);
    window.__navInjected = true;
  }
  inject('#shared-footer', footerHTML);
})();
