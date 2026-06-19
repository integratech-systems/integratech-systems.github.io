/**
 * IntegraTech Systems — Theme Manager
 * Owns the single fixed Vanta background on every page + theme switching.
 */
(function () {
  var STORAGE_KEY = 'it_theme';
  var DEFAULT     = 'dark';

  var VANTA_CFG = {
    dark: {
      el: '#vanta-bg',
      mouseControls: true, touchControls: true, gyroControls: false,
      color: 0x0055aa, backgroundColor: 0x010c1a,
      points: 10.0, maxDistance: 26.0, spacing: 21.0,
      showDots: true, minHeight: 200.0, minWidth: 200.0, scale: 1.0, scaleMobile: 1.0,
    },
    light: {
      el: '#vanta-bg',
      mouseControls: true, touchControls: true, gyroControls: false,
      color: 0x4a90c4, backgroundColor: 0xeef4fc,
      points: 10.0, maxDistance: 22.0, spacing: 22.0,
      showDots: true, minHeight: 200.0, minWidth: 200.0, scale: 1.0, scaleMobile: 1.0,
    },
  };


  var interactionsBound = false;

  function bindGlobalVantaInteractions() {
    if (interactionsBound) return;
    interactionsBound = true;

    function syncPointer(clientX, clientY) {
      var eff = window.__vantaEffect;
      if (!eff) return;
      eff.mouseX = eff.rcMouseX = clientX;
      eff.mouseY = eff.rcMouseY = clientY;
      if (typeof eff.onMouseMove === 'function') {
        try { eff.onMouseMove(clientX, clientY); } catch (e) {}
      }
    }

    document.addEventListener('pointermove', function (e) {
      syncPointer(e.clientX, e.clientY);
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches[0]) syncPointer(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    document.addEventListener('pointerdown', function (e) {
      syncPointer(e.clientX, e.clientY);
      var bg = document.getElementById('vanta-bg');
      if (!bg) return;
      bg.classList.remove('vanta-pulse');
      void bg.offsetWidth;
      bg.classList.add('vanta-pulse');
    }, { passive: true });
  }

  function reinitVanta(theme) {
    if (typeof VANTA === 'undefined' || !VANTA.NET) return;
    if (!document.getElementById('vanta-bg')) return;
    if (window.__vantaEffect) {
      try { window.__vantaEffect.destroy(); } catch (e) {}
      window.__vantaEffect = null;
    }
    try {
      window.__vantaEffect = VANTA.NET(VANTA_CFG[theme] || VANTA_CFG.dark);
      bindGlobalVantaInteractions();
    } catch (e) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    reinitVanta(theme);
  }

  // Wire up toggle button (runs immediately — scripts are at end of body, DOM ready)
  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = (document.documentElement.getAttribute('data-theme') || DEFAULT) === 'dark'
               ? 'light' : 'dark';
      applyTheme(next);
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  }

  reinitVanta(document.documentElement.getAttribute('data-theme') || DEFAULT);
  window.__setTheme = applyTheme;
}());

/* ── Mobile hamburger menu ──────────────────────────── */
(function () {
  var hamburger = document.getElementById('nav-hamburger');
  var nav       = document.querySelector('.site-nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.classList.toggle('is-open', open);
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('is-open');
    }
  });

  // Close on nav link click (for same-page navigation)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('is-open');
    });
  });
}());
