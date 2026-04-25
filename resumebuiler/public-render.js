const params = new URLSearchParams(window.location.search);
const _publicId = params.get('id');

const mount = document.getElementById('public-preview');
if (mount) {
  mount.textContent = 'Public preview will render here in Phase 9.';
}
