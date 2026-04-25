import { CONFIG, apiPost } from './api.js';
import { renderPreview } from './render.js';
import { exportResumePdf, exportPlanPdf, exportCvPdf, exportCombinedPdf } from './export.js';
import { runDiagnostics } from './diagnostics.js';
import { initFirebase, getCurrentUser } from './storage.js';

window.RB_DEBUG = false;

const STATE = {
  workspace: {
    profile: {},
    activeVersionId: null,
    versions: {}
  }
};

function newVersionId() {
  return 'v_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function buildEmptyVersion(id, name = 'Untitled Resume') {
  const now = new Date().toISOString();
  return {
    id,
    name,
    createdAt: now,
    updatedAt: now,
    applicationStatus: 'not_applied',
    targetRole: {
      title: '',
      company: '',
      description: '',
      planContext: '',
      planType: 'combined'
    },
    resumeDraft: {
      experience: [],
      skills: [],
      education: [],
      certifications: [],
      achievements: [],
      leadership: []
    },
    resume: {
      experience: [],
      skills: [],
      education: [],
      certifications: [],
      achievements: [],
      leadership: []
    },
    plan: {},
    cvDraft: {},
    cv: {},
    analysis: {},
    exportSettings: {
      templateId: 'modern',
      accentColor: '#005EB8',
      previewFormat: 'web',
      previewContent: 'combined',
      fontScale: 1,
      spacing: 'comfortable'
    },
    publish: {
      isPublished: false,
      publicId: '',
      publicUrl: '',
      publishedAt: '',
      includeResume: true,
      includePlan: true,
      includeCV: true
    },
    extractedRaw: null
  };
}

export function getWorkspace() {
  return STATE.workspace;
}

export function getActiveVersion() {
  const w = getWorkspace();
  if (!w.activeVersionId || !w.versions[w.activeVersionId]) {
    const id = newVersionId();
    w.versions[id] = buildEmptyVersion(id);
    w.activeVersionId = id;
  }
  return w.versions[w.activeVersionId];
}

export function createVersion(name) {
  const w = getWorkspace();
  const id = newVersionId();
  w.versions[id] = buildEmptyVersion(id, name || 'Untitled Resume');
  w.activeVersionId = id;
  return w.versions[id];
}

export function switchVersion(id) {
  const w = getWorkspace();
  if (w.versions[id]) {
    w.activeVersionId = id;
    return w.versions[id];
  }
  return null;
}

export function duplicateVersion(id) {
  const w = getWorkspace();
  const src = w.versions[id];
  if (!src) return null;
  const newId = newVersionId();
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = newId;
  copy.name = (src.name || 'Untitled Resume') + ' (copy)';
  copy.createdAt = new Date().toISOString();
  copy.updatedAt = copy.createdAt;
  copy.publish = {
    isPublished: false,
    publicId: '',
    publicUrl: '',
    publishedAt: '',
    includeResume: true,
    includePlan: true,
    includeCV: true
  };
  w.versions[newId] = copy;
  w.activeVersionId = newId;
  return copy;
}

export function deleteVersion(id) {
  const w = getWorkspace();
  if (!w.versions[id]) return false;
  delete w.versions[id];
  if (w.activeVersionId === id) {
    const remaining = Object.keys(w.versions);
    w.activeVersionId = remaining[0] || null;
  }
  return true;
}

export function renameVersion(id, name) {
  const w = getWorkspace();
  if (!w.versions[id]) return false;
  w.versions[id].name = name;
  w.versions[id].updatedAt = new Date().toISOString();
  return true;
}

export function markDirty() {
  const v = getActiveVersion();
  v.updatedAt = new Date().toISOString();
}

export function isAppWebView() {
  return document.documentElement.classList.contains('in-app') ||
    /CareerResumeBuilder/i.test(navigator.userAgent || '') ||
    !!window.ReactNativeWebView;
}

export function isMobile() {
  return window.innerWidth <= 768;
}

export function isLowPowerMode() {
  return isAppWebView() || isMobile() || document.hidden;
}

export function goToStep(step) {
  const target = String(step);
  document.querySelectorAll('.step').forEach((s) => {
    const isTarget = s.id === `step-${target}`;
    s.classList.toggle('hidden', !isTarget);
  });
  document.querySelectorAll('.step-nav__btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.step === target);
  });
}

function applyLowPowerClass() {
  if (isLowPowerMode()) {
    document.body.classList.add('low-power-mode');
  }
}

function wireBoot() {
  applyLowPowerClass();

  document.querySelectorAll('.step-nav__btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const n = Number(e.currentTarget.dataset.step);
      if (n) goToStep(n);
    });
  });

  const myResumesBtn = document.getElementById('btn-my-resumes');
  if (myResumesBtn) {
    myResumesBtn.addEventListener('click', () => {
      console.info('My Resumes — Phase 4');
    });
  }

  goToStep(1);

  try {
    renderPreview();
  } catch (e) {
    console.error('Initial preview failed:', e);
  }

  initFirebase();

  window.ResumeBuilderDebug = {
    getState: () => STATE,
    getActiveVersion,
    runDiagnostics,
    config: CONFIG
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', wireBoot);
} else {
  wireBoot();
}

export {
  STATE,
  CONFIG,
  apiPost,
  renderPreview,
  exportResumePdf,
  exportPlanPdf,
  exportCvPdf,
  exportCombinedPdf,
  getCurrentUser
};
