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
      el: '#hero-section', mouseControls: true, touchControls: true, gyroControls: false,
      color: 0x0077cc, backgroundColor: 0x020b18,
      points: 10.0, maxDistance: 26.0, spacing: 20.0, showDots: true,
    },
    light: {
      el: '#hero-section', mouseControls: true, touchControls: true, gyroControls: false,
      color: 0x1a77cc, backgroundColor: 0xe8f1fc,
      points: 13.0, maxDistance: 20.0, spacing: 17.0, showDots: true,
    },
  };

  function reinitVanta(theme) {
    if (typeof VANTA === 'undefined' || !VANTA.NET) return;
    if (!document.getElementById('hero-section'))    return;
    if (window.__vantaEffect) {
      try { window.__vantaEffect.destroy(); } catch (e) {}
      window.__vantaEffect = null;
    }
    try { window.__vantaEffect = VANTA.NET(VANTA_CFG[theme] || VANTA_CFG.dark); } catch (e) {}
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
