export function renderPreview() {
  const el = document.getElementById('preview-mount');
  if (el) {
    el.innerHTML = '<div class="card">Preview will render here</div>';
  }
}
