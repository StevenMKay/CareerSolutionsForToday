/* =====================================================================
   UI PREVIEW HARNESS — paste-and-go console tool for visually previewing
   the post-purchase / promotional UI states without going through a real
   Google Play / Stripe purchase.
   ---------------------------------------------------------------------
   HOW TO USE
     1. Sign in to resumebuilder.html (any account; the harness is also
        wired into the Owner Testing menu for kay.m.steven@gmail.com on
        phone view).
     2. Open DevTools console — OR — tap account avatar → Owner Testing →
        "Preview UI States".
     3. Paste this whole file (or let the menu loader do it) → Enter.
     4. A floating launcher appears with one button per preview:
          - Payment Success modal (Subscription / Lifetime copy)
          - Paywall sheet (real showPaywall())
          - Toasts (success / info / error)
        Each button triggers the *real* UI function the app uses in
        production, so the visual is identical to what users will see.

   MANUAL OVERRIDES (set BEFORE pasting)
     window.__UI_PREVIEW_AUTORUN  = false  // skip auto-show launcher
     window.__UI_PREVIEW_DARK     = true   // dark launcher card

   MANUAL CALLS (anytime)
     RBPreview.paySuccess('subscription' | 'lifetime')
     RBPreview.paywall()
     RBPreview.toast('success' | 'info' | 'error')
     RBPreview.closeAll()
     RBPreview.hide()           // hide launcher
     RBPreview.show()           // re-show launcher

   STATE: nothing is mutated server-side. Entitlements are NOT changed.
   ===================================================================== */
(function () {
  'use strict';

  if (window.__RB_UI_PREVIEW_LOADED) {
    try { console.info('[ui-preview] already loaded — re-showing launcher'); } catch (_) {}
    if (window.RBPreview && typeof window.RBPreview.show === 'function') window.RBPreview.show();
    return;
  }
  window.__RB_UI_PREVIEW_LOADED = true;

  // ---- Dependency probes ------------------------------------------------
  // We rely on functions defined inside resumebuilder.html. If any are
  // missing the harness still loads but the matching button is disabled.
  function hasFn(name) { return typeof window[name] === 'function'; }

  // ---- Preview triggers -------------------------------------------------
  // Payment-success modal — preset copies that mirror the real
  // post-purchase strings used by the IAP / Stripe finalize paths.
  var SUCCESS_COPY = {
    subscription: {
      title:    'Thank you!',
      subtitle: 'Your monthly Resume Portfolio subscription is now active.'
    },
    lifetime: {
      title:    'Thank you!',
      subtitle: 'Lifetime access unlocked. Welcome aboard.'
    }
  };
  function paySuccess(kind) {
    if (!hasFn('showAppPurchaseSuccess')) {
      _toast('showAppPurchaseSuccess not available on this page', 'error');
      return;
    }
    var copy = SUCCESS_COPY[kind] || SUCCESS_COPY.subscription;
    // dismissMs:0 keeps it on screen until the user taps Continue, so
    // you get unlimited time to inspect the layout / animation.
    try { window.showAppPurchaseSuccess({ title: copy.title, subtitle: copy.subtitle, dismissMs: 0 }); }
    catch (e) { console.error('[ui-preview] success modal threw:', e); }
  }

  function paywall() {
    if (!hasFn('showPaywall')) {
      _toast('showPaywall not available on this page', 'error');
      return;
    }
    try { window.showPaywall(); }
    catch (e) { console.error('[ui-preview] paywall threw:', e); }
  }

  function toastDemo(kind) { _toast('Preview toast — ' + (kind || 'info'), kind || 'info'); }

  function _toast(msg, kind) {
    if (hasFn('showToast')) { try { window.showToast(msg, kind); return; } catch (_) {} }
    try { console.log('[ui-preview]', kind || 'info', '-', msg); } catch (_) {}
  }

  function closeAll() {
    [
      'app-purchase-success-overlay'
    ].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.parentNode) {
        try { el.parentNode.removeChild(el); } catch (_) {}
      }
    });
    try {
      // Best-effort paywall close — the real impl uses .hidden on its sheet.
      var pw = document.getElementById('paywall-modal') || document.getElementById('paywall-sheet');
      if (pw) pw.classList.add('hidden');
    } catch (_) {}
    _toast('Closed all preview overlays', 'info');
  }

  // ---- Floating launcher ------------------------------------------------
  var LAUNCHER_ID = 'rb-ui-preview-launcher';
  var DARK = (window.__UI_PREVIEW_DARK !== false);

  function _ensureStyles() {
    if (document.getElementById('rb-ui-preview-styles')) return;
    var st = document.createElement('style');
    st.id = 'rb-ui-preview-styles';
    st.textContent =
      '#' + LAUNCHER_ID + '{position:fixed;right:12px;bottom:12px;z-index:9999;width:min(320px,calc(100vw - 24px));' +
        'border-radius:14px;padding:10px 12px 12px;font:600 12px/1.3 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;' +
        'box-shadow:0 18px 50px rgba(0,0,0,.45);border:1px solid rgba(148,163,184,.35);' +
        'background:' + (DARK ? '#0F172A' : '#fff') + ';color:' + (DARK ? '#F8FAFC' : '#0F172A') + ';}' +
      '#' + LAUNCHER_ID + '.collapsed{padding:6px 10px;}' +
      '#' + LAUNCHER_ID + ' header{display:flex;align-items:center;gap:6px;margin-bottom:8px;}' +
      '#' + LAUNCHER_ID + ' header strong{flex:1;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:' + (DARK ? '#FCD34D' : '#B45309') + ';}' +
      '#' + LAUNCHER_ID + ' header button{background:transparent;border:0;color:inherit;cursor:pointer;font-size:14px;padding:2px 6px;border-radius:6px;}' +
      '#' + LAUNCHER_ID + ' header button:hover{background:rgba(148,163,184,.18);}' +
      '#' + LAUNCHER_ID + ' .rb-grp{display:flex;flex-direction:column;gap:4px;margin-bottom:8px;}' +
      '#' + LAUNCHER_ID + ' .rb-grp h4{margin:0 0 2px;font-size:10px;letter-spacing:.07em;text-transform:uppercase;color:' + (DARK ? '#94A3B8' : '#475569') + ';}' +
      '#' + LAUNCHER_ID + ' .rb-row{display:flex;flex-wrap:wrap;gap:4px;}' +
      '#' + LAUNCHER_ID + ' button.rb-btn{flex:1 1 auto;background:' + (DARK ? '#1E293B' : '#F1F5F9') + ';color:inherit;border:1px solid rgba(148,163,184,.3);' +
        'border-radius:8px;padding:7px 9px;font:600 11px/1.2 inherit;cursor:pointer;transition:transform .12s ease,background .12s ease;}' +
      '#' + LAUNCHER_ID + ' button.rb-btn:hover{background:' + (DARK ? '#334155' : '#E2E8F0') + ';}' +
      '#' + LAUNCHER_ID + ' button.rb-btn:active{transform:scale(.97);}' +
      '#' + LAUNCHER_ID + ' button.rb-btn[disabled]{opacity:.4;cursor:not-allowed;}' +
      '#' + LAUNCHER_ID + ' .rb-close{background:#DC2626 !important;color:#fff !important;border-color:#B91C1C !important;}';
    document.head.appendChild(st);
  }

  function _btn(label, fn, disabled) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'rb-btn';
    b.textContent = label;
    if (disabled) b.disabled = true;
    b.addEventListener('click', function () { try { fn(); } catch (e) { console.error(e); } });
    return b;
  }

  function _group(title, rows) {
    var g = document.createElement('div');
    g.className = 'rb-grp';
    var h = document.createElement('h4');
    h.textContent = title;
    g.appendChild(h);
    rows.forEach(function (row) {
      var wrap = document.createElement('div');
      wrap.className = 'rb-row';
      row.forEach(function (b) { wrap.appendChild(b); });
      g.appendChild(wrap);
    });
    return g;
  }

  function showLauncher() {
    _ensureStyles();
    var existing = document.getElementById(LAUNCHER_ID);
    if (existing) { existing.classList.remove('collapsed'); existing.style.display = ''; return; }

    var el = document.createElement('div');
    el.id = LAUNCHER_ID;
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'UI preview harness');

    // Header — title + collapse + close
    var hdr = document.createElement('header');
    var title = document.createElement('strong');
    title.textContent = 'UI Preview';
    var collapseBtn = document.createElement('button');
    collapseBtn.type = 'button';
    collapseBtn.title = 'Collapse';
    collapseBtn.textContent = '–';
    collapseBtn.addEventListener('click', function () {
      el.classList.toggle('collapsed');
      Array.prototype.forEach.call(el.querySelectorAll('.rb-grp'), function (g) {
        g.style.display = el.classList.contains('collapsed') ? 'none' : '';
      });
    });
    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.title = 'Hide launcher';
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', hideLauncher);
    hdr.appendChild(title);
    hdr.appendChild(collapseBtn);
    hdr.appendChild(closeBtn);
    el.appendChild(hdr);

    // Payment Success
    el.appendChild(_group('Payment success', [[
      _btn('Subscription', function () { paySuccess('subscription'); }, !hasFn('showAppPurchaseSuccess')),
      _btn('Lifetime',     function () { paySuccess('lifetime');     }, !hasFn('showAppPurchaseSuccess'))
    ]]));

    // Paywall + toasts
    el.appendChild(_group('Other UI', [[
      _btn('Paywall',   paywall,   !hasFn('showPaywall')),
      _btn('Toast OK',  function () { toastDemo('success'); }),
      _btn('Toast Err', function () { toastDemo('error');   })
    ]]));

    // Close-everything button
    var grpClose = document.createElement('div');
    grpClose.className = 'rb-grp';
    var rowC = document.createElement('div');
    rowC.className = 'rb-row';
    var close = _btn('Close all preview overlays', closeAll);
    close.classList.add('rb-close');
    rowC.appendChild(close);
    grpClose.appendChild(rowC);
    el.appendChild(grpClose);

    document.body.appendChild(el);
  }

  function hideLauncher() {
    var el = document.getElementById(LAUNCHER_ID);
    if (el) el.style.display = 'none';
  }

  // ---- Public API -------------------------------------------------------
  window.RBPreview = {
    paySuccess:   paySuccess,
    paywall:      paywall,
    toast:        toastDemo,
    closeAll:     closeAll,
    show:         showLauncher,
    hide:         hideLauncher
  };

  if (window.__UI_PREVIEW_AUTORUN !== false) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showLauncher, { once: true });
    } else {
      showLauncher();
    }
  }

  try { console.info('[ui-preview] ready — RBPreview.* | launcher visible'); } catch (_) {}
})();
