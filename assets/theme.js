/**
 * IntegraTech Systems — Theme Manager
 * Dark / Light toggle with Vanta mesh in both themes (different palettes).
 * FOUC prevention: inline in <head> → sets data-theme before first paint.
 */
(function () {
  var STORAGE_KEY = 'it_theme';
  var DEFAULT     = 'dark';

  /* ── Vanta configs per theme ────────────────────────────────────────────── */
  var VANTA_CFG = {
    dark: {
      el:              '#hero-section',
      mouseControls:   true,
      touchControls:   true,
      gyroControls:    false,
      color:           0x0077cc,
      backgroundColor: 0x020b18,
      points:          10.0,
      maxDistance:     26.0,
      spacing:         20.0,
      showDots:        true,
    },
    light: {
      el:              '#hero-section',
      mouseControls:   true,
      touchControls:   true,
      gyroControls:    false,
      color:           0x2288dd,   /* medium blue — visible on light bg */
      backgroundColor: 0xe8f1fc,  /* matches --bg light hero */
      points:          13.0,
      maxDistance:     20.0,
      spacing:         17.0,
      showDots:        true,
    },
  };

  /* ── Vanta lifecycle ────────────────────────────────────────────────────── */
  function initVanta(theme) {
    if (typeof VANTA === 'undefined' || !VANTA.NET) return;
    if (!document.getElementById('hero-section'))    return;

    // Destroy existing instance
    if (window.__vantaEffect) {
      try { window.__vantaEffect.destroy(); } catch (e) {}
      window.__vantaEffect = null;
    }

    try {
      window.__vantaEffect = VANTA.NET(VANTA_CFG[theme] || VANTA_CFG.dark);
    } catch (e) { /* VANTA unavailable on this page */ }
  }

  /* ── Apply theme ────────────────────────────────────────────────────────── */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    initVanta(theme);
  }

  /* ── Init on DOMContentLoaded ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT;

    // Vanta on page load: the inline script in index.html already inited dark Vanta.
    // Only need to reinit if saved theme is light (to apply light palette).
    if (saved === 'light') {
      initVanta('light');
    }

    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var next = (document.documentElement.getAttribute('data-theme') || DEFAULT) === 'dark'
               ? 'light' : 'dark';
      applyTheme(next);
    });

    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  });

  // Programmatic API
  window.__setTheme = applyTheme;
}());
