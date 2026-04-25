export function renderPreview() {
  const el = document.getElementById('preview-mount');
  if (el) {
    el.innerHTML =
      '<div class="preview-card">' +
        '<p class="preview-card__placeholder">Your tailored resume will render here.</p>' +
      '</div>';
  }
}
