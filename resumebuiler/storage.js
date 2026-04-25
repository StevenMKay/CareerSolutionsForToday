const _logged = new Set();

function logOnce(name) {
  if (_logged.has(name)) return;
  _logged.add(name);
  console.info(`[storage] ${name} — not wired in Phase 1`);
}

export function initFirebase() {
  logOnce('initFirebase');
  return null;
}

export function signInWithGoogle() {
  logOnce('signInWithGoogle');
  return Promise.reject(new Error('Not wired'));
}

export function getCurrentUser() {
  logOnce('getCurrentUser');
  return null;
}

export function saveVersion(_version) {
  logOnce('saveVersion');
  return Promise.resolve(null);
}

export function loadVersions() {
  logOnce('loadVersions');
  return Promise.resolve([]);
}

export function loadVersion(_id) {
  logOnce('loadVersion');
  return Promise.resolve(null);
}

export function deleteVersion(_id) {
  logOnce('deleteVersion');
  return Promise.resolve(null);
}
