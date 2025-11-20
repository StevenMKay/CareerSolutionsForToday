(function(){
  var controls = [];
  var portalUrl = 'excel-members-service.html';
  var upsellUrl = 'products.html';
  var modalRefs = null;
  var escHandlerAttached = false;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  function hasEntitlement(memberships, code) {
    if (!Array.isArray(memberships)) return false;
    return memberships.some(function(entry){
      return entry && entry.entitlement === code && entry.status === 'active';
    });
  }

  function ensureModal() {
    if (modalRefs || !document.body) return modalRefs;
    var overlay = document.createElement('div');
    overlay.className = 'member-modal-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = [
      '<div class="member-modal" role="dialog" aria-modal="true" aria-labelledby="memberModalTitle">',
      '  <button type="button" class="member-modal-close" aria-label="Close dialog">×</button>',
      '  <h3 id="memberModalTitle">Excel Member Access</h3>',
      '  <p class="member-modal-status" data-role="status">Sign in with Google to unlock the upload portal.</p>',
      '  <div class="member-modal-actions">',
      '    <button type="button" class="member-modal-button primary" data-role="signin">Sign in with Google</button>',
      '    <button type="button" class="member-modal-button secondary" data-role="portal">Open Member Portal</button>',
      '    <button type="button" class="member-modal-button secondary" data-role="options">View Access Options</button>',
      '    <button type="button" class="member-modal-button ghost" data-role="signout">Sign out</button>',
      '  </div>',
      '  <p class="member-modal-note" data-role="note">After you sign in, purchase access for the Excel upload service to send your workbook securely.</p>',
      '</div>'
    ].join('');
    document.body.appendChild(overlay);

    var closeBtn = overlay.querySelector('.member-modal-close');
    var statusNode = overlay.querySelector('[data-role="status"]');
    var noteNode = overlay.querySelector('[data-role="note"]');
    var signInBtn = overlay.querySelector('[data-role="signin"]');
    var signOutBtn = overlay.querySelector('[data-role="signout"]');
    var portalBtn = overlay.querySelector('[data-role="portal"]');
    var optionsBtn = overlay.querySelector('[data-role="options"]');

    function hideOnBackdrop(evt) {
      if (evt.target === overlay) {
        closeModal();
      }
    }

    function escHandler(evt) {
      if (evt.key === 'Escape') {
        closeModal();
      }
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', hideOnBackdrop);

    signInBtn.addEventListener('click', function(){
      if (window.csftAuth && typeof window.csftAuth.signInWithGoogle === 'function') {
        window.csftAuth.signInWithGoogle();
      } else {
        window.location.href = upsellUrl;
      }
    });

    signOutBtn.addEventListener('click', function(){
      if (window.csftAuth && typeof window.csftAuth.signOut === 'function') {
        window.csftAuth.signOut();
      }
      closeModal();
    });

    portalBtn.addEventListener('click', function(){
      window.location.href = portalUrl;
    });

    optionsBtn.addEventListener('click', function(){
      window.location.href = upsellUrl;
    });

    modalRefs = {
      overlay: overlay,
      status: statusNode,
      note: noteNode,
      signIn: signInBtn,
      signOut: signOutBtn,
      portal: portalBtn,
      options: optionsBtn,
      escHandler: escHandler
    };

    if (!escHandlerAttached) {
      document.addEventListener('keydown', escHandler);
      escHandlerAttached = true;
    }

    if (!window.csftMemberModal) {
      window.csftMemberModal = {
        open: openModal,
        close: closeModal
      };
    }

    return modalRefs;
  }

  function openModal() {
    var refs = ensureModal();
    if (!refs) return;
    refs.overlay.classList.add('is-visible');
    refs.overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('member-modal-open');
  }

  function closeModal() {
    if (!modalRefs) return;
    modalRefs.overlay.classList.remove('is-visible');
    modalRefs.overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('member-modal-open');
  }

  function updateModal(detail) {
    var refs = ensureModal();
    if (!refs) return;
    var user = detail && detail.user;
    var memberships = (detail && detail.memberships) || [];
    var hasExcel = hasEntitlement(memberships, 'excel_upload');

    if (!user) {
      refs.status.textContent = 'Sign in with Google to access the Excel upload portal and member tools.';
      refs.note.textContent = 'Need access? Purchase the $0.99 verification inside Products after you sign in.';
      refs.signIn.hidden = false;
      refs.options.hidden = false;
      refs.portal.hidden = true;
      refs.signOut.hidden = true;
    } else if (hasExcel) {
      refs.status.textContent = 'You are signed in with active access. Continue to the secure upload portal when you are ready.';
      refs.note.textContent = 'Need help with your workbook? The portal includes upload instructions and support.';
      refs.signIn.hidden = true;
      refs.options.hidden = true;
      refs.portal.hidden = false;
      refs.signOut.hidden = false;
    } else {
      refs.status.textContent = 'You are signed in, but no Excel upload membership was found yet.';
      refs.note.textContent = 'Complete the $0.99 verification on the Products page, then return here to resend your file.';
      refs.signIn.hidden = true;
      refs.options.hidden = false;
      refs.portal.hidden = true;
      refs.signOut.hidden = false;
    }
  }

  function attachControls(list) {
    if (!list || list.querySelector('.nav-member-control')) return;
    var li = document.createElement('li');
    li.className = 'nav-member-control';

    var primary = document.createElement('button');
    primary.type = 'button';
    primary.className = 'nav-member-button';
    primary.textContent = 'Member Login';
    primary.dataset.action = 'login';

    var secondary = document.createElement('button');
    secondary.type = 'button';
    secondary.className = 'nav-signout-button';
    secondary.textContent = 'Sign out';
    secondary.hidden = true;

    primary.addEventListener('click', function(){
      var action = primary.dataset.action || 'login';
      if (action === 'portal') {
        window.location.href = portalUrl;
        return;
      }
      openModal();
    });

    secondary.addEventListener('click', function(){
      if (window.csftAuth && typeof window.csftAuth.signOut === 'function') {
        window.csftAuth.signOut();
      } else {
        window.location.href = upsellUrl;
      }
    });

    li.appendChild(primary);
    li.appendChild(secondary);
    list.appendChild(li);
    li.hidden = true; // keep control in DOM but hidden from UI
    controls.push({ primary: primary, secondary: secondary });
  }

  function update(detail) {
    var user = detail && detail.user;
    var memberships = (detail && detail.memberships) || [];
    var hasExcel = hasEntitlement(memberships, 'excel_upload');

    controls.forEach(function(ctrl){
      if (!user) {
        ctrl.primary.textContent = 'Member Login';
        ctrl.primary.dataset.action = 'login';
        ctrl.secondary.hidden = true;
      } else if (hasExcel) {
        ctrl.primary.textContent = 'Member Portal';
        ctrl.primary.dataset.action = 'portal';
        ctrl.secondary.hidden = false;
      } else {
        ctrl.primary.textContent = 'Access Options';
        ctrl.primary.dataset.action = 'upsell';
        ctrl.secondary.hidden = false;
      }
    });

    updateModal(detail || {});
  }

  function setupAuthListeners() {
    window.addEventListener('csft-auth-change', function(evt){
      update(evt.detail || {});
    });
    if (window.csftAuth && typeof window.csftAuth.onChange === 'function') {
      window.csftAuth.onChange(update);
    }
    if (window.csftAuth && typeof window.csftAuth.getState === 'function') {
      update(window.csftAuth.getState());
    }
  }

  function wireModalTriggers() {
    var triggers = document.querySelectorAll('[data-member-modal-trigger]');
    triggers.forEach(function(node){
      if (node.dataset.memberModalBound === 'true') return;
      node.dataset.memberModalBound = 'true';
      node.addEventListener('click', function(evt){
        evt.preventDefault();
        openModal();
      });
    });
  }

  ready(function(){
    var lists = document.querySelectorAll('.nav-links');
    lists.forEach(attachControls);
    setupAuthListeners();
    ensureModal();
    wireModalTriggers();
  });
})();
