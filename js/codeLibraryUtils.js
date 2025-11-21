function copyCode(elementId) {
  let textToCopy = '';
  const element = document.getElementById(elementId);
  
  if (elementId.includes('html-')) {
    textToCopy = element.value;
    showCopyMessage('HTML copied to clipboard!');
  } else if (elementId.includes('css-')) {
    textToCopy = element.value;
    showCopyMessage('CSS copied to clipboard!');
  } else if (elementId.includes('js-')) {
    textToCopy = element.value;
    showCopyMessage('JavaScript copied to clipboard!');
  } else if (elementId.includes('both-')) {
    const htmlId = elementId.replace('both-', 'html-');
    const cssId = elementId.replace('both-', 'css-');
    const htmlElement = document.getElementById(htmlId);
    const cssElement = document.getElementById(cssId);
    
    if (htmlElement && cssElement) {
      textToCopy = `HTML:\n${htmlElement.value}\n\nCSS:\n${cssElement.value}`;
      showCopyMessage('Both HTML and CSS copied to clipboard!');
    }
  } else if (elementId.includes('all-')) {
    const htmlId = elementId.replace('all-', 'html-');
    const cssId = elementId.replace('all-', 'css-');
    const jsId = elementId.replace('all-', 'js-');
    const htmlElement = document.getElementById(htmlId);
    const cssElement = document.getElementById(cssId);
    const jsElement = document.getElementById(jsId);
    
    if (htmlElement && cssElement && jsElement) {
      textToCopy = `HTML:\n${htmlElement.value}\n\nCSS:\n${cssElement.value}\n\nJavaScript:\n${jsElement.value}`;
      showCopyMessage('All code (HTML, CSS, JavaScript) copied to clipboard!');
    }
  }
  
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).catch(err => {
      console.error('Failed to copy code: ', err);
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  }
}

function showCopyMessage(message) {
  const existingMessage = document.querySelector('.copy-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'copy-message';
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    z-index: 9999;
    font-family: 'Segoe UI', sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  `;
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    if (messageDiv) {
      messageDiv.remove();
    }
  }, 3000);
}

function updatePreview() {
  const cssCards = document.querySelectorAll('.css-interactive-card');

  cssCards.forEach(card => {
    const htmlEditor = card.querySelector('.html-editor');
    const cssEditor  = card.querySelector('.css-editor');
    const jsEditor   = card.querySelector('.js-editor');
    const preview    = card.querySelector('.css-live-preview');
    const styleTag   = card.querySelector('style');

    if (!preview) return;

    if (htmlEditor) preview.innerHTML = htmlEditor.value || '';
    if (styleTag && cssEditor) styleTag.textContent = cssEditor.value || '';

    preview.querySelectorAll('script[data-live-runner]').forEach(s => s.remove());

    if (jsEditor && jsEditor.value && jsEditor.value.trim()) {
      const runner = document.createElement('script');
      runner.type = 'text/javascript';
      runner.dataset.liveRunner = 'true';

      const code = [
        '(function(){',
        '  try {',
        '    var root = document.currentScript && document.currentScript.closest(".css-live-preview");',
        jsEditor.value,
        '  } catch (e) { console.error("Live preview JS error:", e); }',
        '})();',
        '//# sourceURL=live-preview-' + (card.id || 'card') + '.js'
      ].join('\n');

      runner.textContent = code;
      preview.appendChild(runner);
    }
  });
}

function disableEditorCorrections(element) {
  if (!element || element.dataset.correctionsDisabled === 'true') return;
  element.setAttribute('spellcheck', 'false');
  element.setAttribute('autocorrect', 'off');
  element.setAttribute('autocapitalize', 'off');
  element.setAttribute('autocomplete', 'off');
  element.dataset.correctionsDisabled = 'true';
}

function applyEditorPreferences() {
  const selector = '.code-editor, .html-editor, .css-editor, .js-editor, .html-code-editor';
  document.querySelectorAll(selector).forEach(disableEditorCorrections);
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    updatePreview();
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1 && node.querySelector && node.querySelector('.card-container-3d')) {
              setTimeout(function() {
                updatePreview();
              }, 100);
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }, 1000);

  applyEditorPreferences();
  const correctionsObserver = new MutationObserver(applyEditorPreferences);
  correctionsObserver.observe(document.body, { childList: true, subtree: true });
});

function updateHtmlPreview(uniqueId) {
  const htmlEditor = document.getElementById(`html-${uniqueId}`);
  const preview = document.getElementById(`preview-${uniqueId}`);
  
  if (htmlEditor && preview) {
    preview.innerHTML = htmlEditor.value;
  }
}

function renderContentItem(item) {
  const itemId = item.title.replace(/\s+/g, '-').toLowerCase();
  
  return `
    <div class="content-item" id="${itemId}">
      <h3>${item.title}</h3>
    </div>
  `;
}
