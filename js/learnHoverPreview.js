(function() {
  const preview = document.getElementById('learnHoverPreview');
  const results = document.getElementById('learnResults');
  if (!preview || !results) return;

  const imgEl = document.getElementById('learnPreviewImage');
  const titleEl = document.getElementById('learnPreviewTitle');
  const descEl = document.getElementById('learnPreviewDesc');
  const primaryLinkEl = document.getElementById('learnPreviewPrimary');
  const secondaryLinkEl = document.getElementById('learnPreviewSecondary');
  const closeBtn = preview.querySelector('.learn-preview-close');
  const touchMatcher = window.matchMedia('(hover: none)');

  let hideTimer = null;
  let currentCard = null;

  function resolveDataset(card, key) {
    return card && card.dataset ? card.dataset[key] || '' : '';
  }

  function showPreview(card) {
    if (!card) return;
    clearTimeout(hideTimer);
    currentCard = card;

    const image = resolveDataset(card, 'previewImage');
    const title = resolveDataset(card, 'previewTitle');
    const desc = resolveDataset(card, 'previewDesc');
    const link = resolveDataset(card, 'previewLink') || '#';
    const label = resolveDataset(card, 'previewLinkLabel') || 'Open Resource';
    const secondaryLink = resolveDataset(card, 'previewLinkSecondary');
    const secondaryLabel = resolveDataset(card, 'previewLinkSecondaryLabel') || 'Related Link';

    if (imgEl) {
      imgEl.src = image || '';
      imgEl.alt = title ? `${title} preview` : 'Resource preview';
    }
    if (titleEl) {
      titleEl.textContent = title || '';
    }
    if (descEl) {
      descEl.textContent = desc || '';
    }
    if (primaryLinkEl) {
      primaryLinkEl.href = link || '#';
      primaryLinkEl.textContent = label;
      primaryLinkEl.style.display = link ? 'inline-flex' : 'none';
    }

    if (secondaryLinkEl) {
      if (secondaryLink) {
        secondaryLinkEl.href = secondaryLink;
        secondaryLinkEl.textContent = secondaryLabel || 'Related Link';
        secondaryLinkEl.style.display = 'inline-flex';
      } else {
        secondaryLinkEl.href = '#';
        secondaryLinkEl.style.display = 'none';
      }
    }

    preview.classList.add('is-visible');
    preview.setAttribute('aria-hidden', 'false');
  }

  function hidePreview(delay = 0) {
    clearTimeout(hideTimer);
    const handler = function() {
      preview.classList.remove('is-visible');
      preview.setAttribute('aria-hidden', 'true');
      currentCard = null;
    };
    if (delay) {
      hideTimer = setTimeout(handler, delay);
    } else {
      handler();
    }
  }

  function isAnchorClick(event) {
    return !!event.target.closest('a');
  }

  results.addEventListener('mouseover', event => {
    if (touchMatcher.matches) return;
    const card = event.target.closest('[data-preview-image]');
    if (!card || !results.contains(card)) return;
    if (card === currentCard && preview.classList.contains('is-visible')) return;
    showPreview(card);
  });

  results.addEventListener('mouseout', event => {
    if (touchMatcher.matches) return;
    const card = event.target.closest('[data-preview-image]');
    if (!card) return;
    if (event.relatedTarget && card.contains(event.relatedTarget)) {
      return;
    }
    hidePreview(200);
  });

  results.addEventListener('click', event => {
    if (!touchMatcher.matches) return;
    if (isAnchorClick(event)) return;
    const card = event.target.closest('[data-preview-image]');
    if (!card) return;
    event.preventDefault();
    if (preview.classList.contains('is-visible') && card === currentCard) {
      hidePreview();
    } else {
      showPreview(card);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => hidePreview());
  }

  preview.addEventListener('mouseenter', () => {
    if (!touchMatcher.matches) {
      clearTimeout(hideTimer);
    }
  });

  preview.addEventListener('mouseleave', () => {
    if (!touchMatcher.matches) {
      hidePreview(200);
    }
  });

  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      hidePreview();
    }
  });

  if (typeof touchMatcher.addEventListener === 'function') {
    touchMatcher.addEventListener('change', () => hidePreview());
  } else if (typeof touchMatcher.addListener === 'function') {
    touchMatcher.addListener(() => hidePreview());
  }
})();
