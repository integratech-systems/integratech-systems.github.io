/**
 * IntegraTech Systems — Theme Manager
 * Handles dark/light toggle, Vanta lifecycle, localStorage persistence.
 * FOUC prevention: <script>(function(){var t=localStorage.getItem('it_theme')||'dark';document.documentElement.setAttribute('data-theme',t);}());</script>
 * must be inline in <head> before this file loads.
 */
(function () {
  var STORAGE_KEY = 'it_theme';
  var DEFAULT     = 'dark';

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || DEFAULT;
  }

  function applyTheme(theme, animate) {
    var html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // ── Vanta lifecycle ──────────────────────────────────────
    if (theme === 'light') {
      // Destroy Vanta when switching to light (canvas is hidden by CSS anyway)
      if (window.__vantaEffect) {
        try { window.__vantaEffect.destroy(); } catch (e) {}
        window.__vantaEffect = null;
      }
    } else {
      // Reinit Vanta when switching back to dark (if Three.js + VANTA are loaded)
      if (!window.__vantaEffect
          && typeof VANTA !== 'undefined'
          && VANTA.NET
          && document.getElementById('hero-section')) {
        try {
          window.__vantaEffect = VANTA.NET({
            el:               '#hero-section',
            mouseControls:    true,
            touchControls:    true,
            gyroControls:     false,
            color:            0x0066ff,
            backgroundColor:  0x020b18,
            points:           12,
            maxDistance:      22,
            spacing:          18,
            showDots:         true,
          });
        } catch (e) { /* VANTA unavailable on this page */ }
      }
    }
  }

  // ── Init on DOMContentLoaded ───────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    // Apply saved theme (data-theme already set in head inline script,
    // this call handles Vanta state on page load)
    var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT;
    // Only need Vanta logic, no CSS change — already set by inline script
    if (saved === 'light' && window.__vantaEffect) {
      try { window.__vantaEffect.destroy(); } catch (e) {}
      window.__vantaEffect = null;
    }

    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });

    // Keyboard accessibility
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Expose for programmatic use
  window.__setTheme = applyTheme;
}());
