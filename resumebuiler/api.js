export const CONFIG = {
  API_BASE:
    window.RESUME_API_BASE ||
    localStorage.getItem('resume_api_base') ||
    'https://projectbackend-production-aa38.up.railway.app/api'
};

export async function apiPost(path, body, options = {}) {
  if (window.RB_DEBUG) console.log('[API]', path);

  const url = CONFIG.API_BASE.replace(/\/+$/, '') + path;
  const headers = { ...(options.headers || {}) };
  let payload = body;

  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
  if (!isFormData) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    payload = body == null ? undefined : JSON.stringify(body);
  }

  if (options.idToken) {
    headers['Authorization'] = `Bearer ${options.idToken}`;
  }

  const res = await fetch(url, {
    method: options.method || 'POST',
    headers,
    body: payload
  });

  if (!res.ok) {
    let errCode;
    let errMessage = `Request failed (${res.status})`;
    try {
      const data = await res.clone().json();
      if (data && typeof data === 'object') {
        errCode = data.code;
        if (data.error) errMessage = data.error;
      }
    } catch (_) {
      // not JSON; keep default message
    }
    const err = new Error(errMessage);
    err.status = res.status;
    err.code = errCode;
    throw err;
  }

  if (options.responseType === 'blob') return res.blob();
  return res.json();
}

export async function extractResume(file) {
  const fd = new FormData();
  fd.append('file', file);
  return apiPost('/builder/parse-resume', fd);
}

export async function optimizeResume(payload) {
  return apiPost('/builder/optimize', payload);
}

export async function generatePlan(payload) {
  return apiPost('/builder/generate', payload);
}

// TODO: replace with /builder/generate-cv when backend ships it
export async function generateCV({ profile = {}, targetRole = {}, resume = {} } = {}) {
  return {
    heading: `Cover Letter - ${targetRole.title || 'Target Role'}`,
    opening: 'Dear Hiring Team,',
    body: [
      `I am excited to apply for ${targetRole.title || 'this opportunity'}.`,
      `I bring experience in ${(resume?.skills || []).slice(0, 5).join(', ') || 'key professional areas'}.`,
      `I am confident I can contribute value quickly.`
    ],
    closing: 'Thank you for your time and consideration.'
  };
}

export async function exportServerPdf(payload) {
  return apiPost('/builder/export/pdf-server', payload, { responseType: 'blob' });
}

// TODO: replace with backend /publish + Firestore when available
export async function publishVersion(payload) {
  const publicId = 'pub_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const record = {
    publicId,
    publicUrl: `${location.origin}/resumebuiler/public.html?id=${publicId}`,
    publishedAt: new Date().toISOString(),
    payload
  };
  try {
    const all = JSON.parse(localStorage.getItem('publishedVersions') || '{}');
    all[publicId] = record;
    localStorage.setItem('publishedVersions', JSON.stringify(all));
  } catch (_) {}
  return record;
}
