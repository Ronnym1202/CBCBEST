/*!
 * CBC Best — Cookie Consent Banner
 * Author: Ronny Mwenda (Ronny Best)
 * Site: https://cbcbest.netlify.app
 * Compliant with: Kenya Data Protection Act 2019 · GDPR · Google AdSense Policies
 */

(function () {
  'use strict';

  /* ── CONFIG ── */
  var STORAGE_KEY  = 'cbcbest_cookie_consent';
  var CONSENT_VER  = '1.0'; // bump this if your policy changes to re-prompt users
  var ADSENSE_ID   = 'pub-3509173858076202';

  /* ── CSS ── */
  var css = `
    #cbc-cookie-banner *,
    #cbc-cookie-banner *::before,
    #cbc-cookie-banner *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    #cbc-cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99999;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      font-size: 15px;
      line-height: 1.5;

      /* Slide-up animation */
      transform: translateY(100%);
      opacity: 0;
      transition: transform 0.45s cubic-bezier(0.34, 1.26, 0.64, 1),
                  opacity 0.35s ease;
    }

    #cbc-cookie-banner.cbc-visible {
      transform: translateY(0);
      opacity: 1;
    }

    #cbc-cookie-banner.cbc-hiding {
      transform: translateY(110%);
      opacity: 0;
      transition: transform 0.35s cubic-bezier(0.55, 0, 1, 0.45),
                  opacity 0.28s ease;
    }

    /* Backdrop blur strip behind the banner */
    #cbc-cookie-backdrop {
      position: fixed;
      inset: 0;
      z-index: 99998;
      background: rgba(11, 31, 46, 0.45);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      opacity: 0;
      transition: opacity 0.35s ease;
      pointer-events: none;
    }
    #cbc-cookie-backdrop.cbc-visible {
      opacity: 1;
      pointer-events: auto;
    }

    #cbc-cookie-inner {
      background: #0B1F2E;
      border-top: 2px solid rgba(201, 160, 61, 0.35);
      box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.35);
      padding: 0;
    }

    /* Gold accent bar at the very top */
    #cbc-cookie-inner::before {
      content: '';
      display: block;
      height: 3px;
      background: linear-gradient(90deg, #C9A03D 0%, #e6b94a 50%, #C9A03D 100%);
    }

    #cbc-cookie-content {
      max-width: 1240px;
      margin: 0 auto;
      padding: 20px 28px;
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    /* 🍪 icon column */
    #cbc-cookie-icon {
      flex-shrink: 0;
      width: 46px;
      height: 46px;
      background: rgba(201, 160, 61, 0.12);
      border: 1px solid rgba(201, 160, 61, 0.3);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      line-height: 1;
    }

    /* Text column */
    #cbc-cookie-text {
      flex: 1;
      min-width: 240px;
    }

    #cbc-cookie-text strong {
      display: block;
      color: #FFFFFF;
      font-size: 0.95rem;
      font-weight: 700;
      margin-bottom: 4px;
      letter-spacing: -0.1px;
    }

    #cbc-cookie-text p {
      color: rgba(255, 228, 196, 0.72);
      font-size: 0.82rem;
      line-height: 1.6;
    }

    #cbc-cookie-text a {
      color: #C9A03D;
      text-decoration: underline;
      text-decoration-color: rgba(201, 160, 61, 0.4);
      text-underline-offset: 3px;
      font-weight: 600;
      transition: color 0.18s, text-decoration-color 0.18s;
    }
    #cbc-cookie-text a:hover {
      color: #e6b94a;
      text-decoration-color: rgba(230, 185, 74, 0.7);
    }

    /* Buttons column */
    #cbc-cookie-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      flex-wrap: wrap;
    }

    .cbc-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-family: inherit;
      font-size: 0.83rem;
      font-weight: 700;
      border: none;
      border-radius: 40px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
      letter-spacing: 0.1px;
      text-decoration: none;
    }

    /* Accept — primary gold */
    #cbc-btn-accept {
      background: #C9A03D;
      color: #0B1F2E;
      padding: 10px 22px;
      box-shadow: 0 4px 14px rgba(201, 160, 61, 0.28);
    }
    #cbc-btn-accept:hover {
      background: #e6b94a;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(201, 160, 61, 0.4);
    }
    #cbc-btn-accept:active {
      transform: translateY(0);
    }

    /* Reject — ghost */
    #cbc-btn-reject {
      background: transparent;
      color: rgba(255, 228, 196, 0.65);
      padding: 9px 18px;
      border: 1.5px solid rgba(255, 228, 196, 0.2);
    }
    #cbc-btn-reject:hover {
      border-color: rgba(255, 228, 196, 0.45);
      color: rgba(255, 228, 196, 0.9);
      transform: translateY(-1px);
    }

    /* Manage / preferences — text link style */
    #cbc-btn-manage {
      background: transparent;
      color: rgba(201, 160, 61, 0.75);
      padding: 9px 14px;
      font-size: 0.78rem;
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: transparent;
    }
    #cbc-btn-manage:hover {
      color: #C9A03D;
      text-decoration-color: rgba(201, 160, 61, 0.4);
    }

    /* ── PREFERENCES PANEL ── */
    #cbc-prefs-panel {
      display: none;
      background: #132c40;
      border-top: 1px solid rgba(201, 160, 61, 0.15);
    }

    #cbc-prefs-panel.cbc-open {
      display: block;
    }

    #cbc-prefs-inner {
      max-width: 1240px;
      margin: 0 auto;
      padding: 20px 28px 24px;
    }

    #cbc-prefs-inner h4 {
      color: #FFFFFF;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 14px;
      letter-spacing: 0.2px;
    }

    .cbc-pref-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .cbc-pref-row:last-of-type {
      border-bottom: none;
    }

    .cbc-pref-info strong {
      display: block;
      color: rgba(255, 228, 196, 0.9);
      font-size: 0.82rem;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .cbc-pref-info span {
      font-size: 0.75rem;
      color: rgba(255, 228, 196, 0.45);
      line-height: 1.5;
    }

    /* Toggle switch */
    .cbc-toggle {
      position: relative;
      flex-shrink: 0;
      width: 42px;
      height: 24px;
      margin-top: 2px;
    }
    .cbc-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    .cbc-toggle-track {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 40px;
      cursor: pointer;
      transition: background 0.25s;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .cbc-toggle input:checked + .cbc-toggle-track {
      background: #C9A03D;
      border-color: #C9A03D;
    }
    .cbc-toggle input:disabled + .cbc-toggle-track {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .cbc-toggle-track::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      background: #FFFFFF;
      border-radius: 50%;
      transition: transform 0.25s cubic-bezier(0.34, 1.26, 0.64, 1);
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    }
    .cbc-toggle input:checked + .cbc-toggle-track::after {
      transform: translateX(18px);
    }

    #cbc-prefs-save {
      margin-top: 16px;
      background: #C9A03D;
      color: #0B1F2E;
      padding: 9px 24px;
      font-size: 0.82rem;
    }
    #cbc-prefs-save:hover {
      background: #e6b94a;
      transform: translateY(-1px);
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      #cbc-cookie-content {
        padding: 16px 18px;
        gap: 14px;
        flex-direction: column;
        align-items: flex-start;
      }
      #cbc-cookie-actions {
        width: 100%;
        justify-content: flex-start;
      }
      #cbc-cookie-icon {
        display: none;
      }
      #cbc-prefs-inner {
        padding: 16px 18px 20px;
      }
    }

    @media (max-width: 420px) {
      #cbc-btn-accept,
      #cbc-btn-reject {
        flex: 1;
        text-align: center;
      }
    }
  `;

  /* ── HTML ── */
  var html = `
    <div id="cbc-cookie-backdrop"></div>

    <div id="cbc-cookie-banner" role="dialog" aria-modal="false"
         aria-label="Cookie consent" aria-live="polite">
      <div id="cbc-cookie-inner">

        <!-- Main notice row -->
        <div id="cbc-cookie-content">
          <div id="cbc-cookie-icon" aria-hidden="true">🍪</div>

          <div id="cbc-cookie-text">
            <strong>CBC Best uses cookies</strong>
            <p>
              We use essential cookies to keep the site working, and optional analytics &amp;
              advertising cookies (Google AdSense) to support free access to this resource.
              By clicking <em>Accept All</em> you consent to all cookies.
              Read our <a href="/privacy-policy.html">Privacy Policy</a> for full details.
            </p>
          </div>

          <div id="cbc-cookie-actions">
            <button class="cbc-btn" id="cbc-btn-accept">✓ Accept All</button>
            <button class="cbc-btn" id="cbc-btn-reject">Essential Only</button>
            <button class="cbc-btn" id="cbc-btn-manage">Manage preferences</button>
          </div>
        </div>

        <!-- Preferences panel (hidden by default) -->
        <div id="cbc-prefs-panel" role="region" aria-label="Cookie preferences">
          <div id="cbc-prefs-inner">
            <h4>🔧 Manage Cookie Preferences</h4>

            <!-- Essential (always on) -->
            <div class="cbc-pref-row">
              <div class="cbc-pref-info">
                <strong>Essential cookies</strong>
                <span>
                  Required for the site to function — navigation, PWA caching, forum preferences.
                  Cannot be disabled.
                </span>
              </div>
              <label class="cbc-toggle" aria-label="Essential cookies — always enabled">
                <input type="checkbox" id="pref-essential" checked disabled>
                <div class="cbc-toggle-track"></div>
              </label>
            </div>

            <!-- Analytics -->
            <div class="cbc-pref-row">
              <div class="cbc-pref-info">
                <strong>Analytics cookies</strong>
                <span>
                  Anonymised data about pages visited and time on site — helps improve CBC Best content.
                  No personally identifiable information is collected.
                </span>
              </div>
              <label class="cbc-toggle" aria-label="Analytics cookies">
                <input type="checkbox" id="pref-analytics">
                <div class="cbc-toggle-track"></div>
              </label>
            </div>

            <!-- Advertising -->
            <div class="cbc-pref-row">
              <div class="cbc-pref-info">
                <strong>Advertising cookies (Google AdSense)</strong>
                <span>
                  Google AdSense may show personalised ads based on your browsing. Revenue supports
                  free access to CBC Best. Governed by
                  <a href="https://policies.google.com/privacy" target="_blank"
                     rel="noopener noreferrer" style="color:#C9A03D;">Google's Privacy Policy</a>.
                </span>
              </div>
              <label class="cbc-toggle" aria-label="Advertising cookies">
                <input type="checkbox" id="pref-advertising">
                <div class="cbc-toggle-track"></div>
              </label>
            </div>

            <button class="cbc-btn" id="cbc-prefs-save">Save my preferences</button>
          </div>
        </div>

      </div>
    </div>
  `;
  
  /* ═══════════════════════════════════════════════
     LOGIC
  ═══════════════════════════════════════════════ */

  /* Read saved consent from localStorage */
  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      /* Re-prompt if version changed */
      if (data.version !== CONSENT_VER) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  /* Save consent to localStorage */
  function saveConsent(prefs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version:     CONSENT_VER,
        timestamp:   new Date().toISOString(),
        essential:   true,           // always true
        analytics:   !!prefs.analytics,
        advertising: !!prefs.advertising
      }));
    } catch (e) { /* storage blocked — fail silently */ }
  }

  /* Enable/disable AdSense based on advertising consent */
  function applyAnalyticsConsent(allowed) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: allowed ? 'granted' : 'denied'
      });
    }
  }

  function applyAdSenseConsent(allowed) {
    /* Google's consent mode — sets adPersonalization */
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage:              allowed ? 'granted' : 'denied',
        ad_personalization:      allowed ? 'granted' : 'denied',
        analytics_storage:       'denied',
        functionality_storage:   'granted',
        personalization_storage: allowed ? 'granted' : 'denied',
        security_storage:        'granted'
      });
    }

    /* Also set the adsbygoogle data-consent attribute if the script is present */
    var adScript = document.querySelector(
      'script[src*="pagead2.googlesyndication.com"]'
    );
    if (adScript) {
      /* Non-personalised ads fallback when user declines advertising cookies */
      if (!allowed) {
        (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
      }
    }
  }

  /* ── SHOW / HIDE BANNER ── */
  function showBanner() {
    var banner   = document.getElementById('cbc-cookie-banner');
    var backdrop = document.getElementById('cbc-cookie-backdrop');
    if (!banner) return;

    /* Small delay so the page renders first, then banner slides up */
    setTimeout(function () {
      banner.classList.add('cbc-visible');
      backdrop.classList.add('cbc-visible');
    }, 600);
  }

  function hideBanner() {
    var banner   = document.getElementById('cbc-cookie-banner');
    var backdrop = document.getElementById('cbc-cookie-backdrop');
    if (!banner) return;

    banner.classList.remove('cbc-visible');
    banner.classList.add('cbc-hiding');
    backdrop.classList.remove('cbc-visible');

    /* Remove from DOM after animation completes */
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
      if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    }, 400);
  }

  /* ── INJECT CSS ── */
  function injectStyles() {
    if (document.getElementById('cbc-cookie-styles')) return;
    var style = document.createElement('style');
    style.id = 'cbc-cookie-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ── INJECT HTML ── */
  function injectHTML() {
    if (document.getElementById('cbc-cookie-banner')) return;
    var div = document.createElement('div');
    div.innerHTML = html.trim();
    while (div.firstChild) {
      document.body.appendChild(div.firstChild);
    }
  }

  /* ── WIRE UP BUTTONS ── */
  function bindEvents() {
    /* Accept All */
    var btnAccept = document.getElementById('cbc-btn-accept');
    if (btnAccept) {
      btnAccept.addEventListener('click', function () {
        saveConsent({ analytics: true, advertising: true });
        applyAdSenseConsent(true);
        hideBanner();
      });
    }

    /* Essential Only (Reject) */
    var btnReject = document.getElementById('cbc-btn-reject');
    if (btnReject) {
      btnReject.addEventListener('click', function () {
        saveConsent({ analytics: false, advertising: false });
        applyAdSenseConsent(false);
        hideBanner();
      });
    }

    /* Manage Preferences toggle */
    var btnManage = document.getElementById('cbc-btn-manage');
    var prefsPanel = document.getElementById('cbc-prefs-panel');
    if (btnManage && prefsPanel) {
      btnManage.addEventListener('click', function () {
        var isOpen = prefsPanel.classList.toggle('cbc-open');
        btnManage.textContent = isOpen ? 'Hide preferences' : 'Manage preferences';
        btnManage.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
    /* Save Preferences */
    var btnSave = document.getElementById('cbc-prefs-save');
    if (btnSave) {
      btnSave.addEventListener('click', function () {
        var analyticsChecked   = document.getElementById('pref-analytics');
        var advertisingChecked = document.getElementById('pref-advertising');
        var prefs = {
          analytics:   analyticsChecked   ? analyticsChecked.checked   : false,
          advertising: advertisingChecked ? advertisingChecked.checked : false
        };
        saveConsent(prefs);
        applyAdSenseConsent(prefs.advertising);
        applyAnalyticsConsent(prefs.analytics);
        hideBanner();
      });
    }
  }
  /* ── INIT ── */
  function init() {
    var existing = getConsent();

    if (existing) {
      /* User already consented — apply their saved preferences silently */
      applyAdSenseConsent(existing.advertising);
      applyAnalyticsConsent(existing.analytics);
      return; /* No banner needed */
    }
    /* First visit or version changed — show the banner */
    injectStyles();
    injectHTML();
    bindEvents();
    showBanner();
  }
  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();