/**
 * IntegraTech Systems — Theme Manager
 * Vanta initializes synchronously in index.html inline IIFE (both themes).
 * This file only handles the toggle button click + Vanta reinit on switch.
 */
(function () {
  var STORAGE_KEY = 'it_theme';
  var DEFAULT     = 'dark';

  var VANTA_CFG = {
    dark: {
      el: '#vanta-bg', mouseControls: true, touchControls: true, gyroControls: false,
      color: 0x0088ee, backgroundColor: 0x020b18,
      points: 12.0, maxDistance: 28.0, spacing: 18.0, showDots: true,
    },
    light: {
      el: '#vanta-bg', mouseControls: true, touchControls: true, gyroControls: false,
      color: 0x1a88dd, backgroundColor: 0xe8f1fc,
      points: 14.0, maxDistance: 22.0, spacing: 16.0, showDots: true,
    },
  };

  function reinitVanta(theme) {
    if (typeof VANTA === 'undefined' || !VANTA.NET) return;
    if (!document.getElementById('vanta-bg')) return;
    if (window.__vantaEffect) {
      try { window.__vantaEffect.destroy(); } catch (e) {}
      window.__vantaEffect = null;
    }
    try {
      window.__vantaEffect = VANTA.NET(VANTA_CFG[theme] || VANTA_CFG.dark);
      // Remove solid bg — let gradient from #page-bg show through
      (function _clearBg() {
        var eff = window.__vantaEffect;
        if (eff && eff.renderer) { eff.renderer.setClearColor(0x000000, 0); }
        else { setTimeout(_clearBg, 80); }
      })();
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
