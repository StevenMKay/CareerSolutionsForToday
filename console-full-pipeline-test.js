/* =====================================================================
   FULL PIPELINE TEST — single fixture, every AI/data endpoint
   ---------------------------------------------------------------------
   HOW TO USE:
   1. Sign in to the resume builder (resumebuilder.html).
   2. Open DevTools console.
   3. Paste this entire file and press Enter.
   4. It AUTO-RUNS the full pipeline against ONE varied fixture and
      shows a floating panel with per-step SENT / RECEIVED JSON,
      timing, status, and quick-copy buttons.

   What it exercises (in order, dependencies passed forward):
     1.  /api/ping                          (server reachability)
     2.  /api/builder/check-subscription    (auth + plan)
     3.  /api/builder/parse-resume          (paste-text path)
     4.  /api/builder/import-linkedin-job   (skipped unless LINKEDIN_URL set)
     5.  /api/builder/research-role         (role research)
     6.  /api/builder/optimize              (resume + JD analysis, scoring)
     7.  /api/builder/generate-cv           (cover letter)
     8.  /api/builder/generate              (90-day role plan)
     9.  /api/builder/interview-prep-refresh
     10. /api/builder/analyze-resume        (best-effort, if route exists)
     11. /api/builder/tailor-to-jd          (best-effort, if route exists)
     12. /api/builder/rescore               (best-effort, if route exists)

   Overrides (set BEFORE pasting):
     window.__PIPE_AUTORUN  = false        // skip auto-run
     window.__PIPE_FIXTURE  = {…}          // your own resume_data + JD
     window.__PIPE_LINKEDIN = 'https://www.linkedin.com/jobs/view/....'
     window.__PIPE_SKIP     = ['interview-prep-refresh','generate']
     window.__PIPE_ONLY     = ['research-role','optimize']

   Manual run anytime:
     await runFullPipelineTest()
     await runFullPipelineTest({ only: ['optimize'] })

   Result object: window.__pipelineTestResults
   STATE IS NOT MUTATED. Nothing is saved to Firestore.
   ===================================================================== */
(function () {
  if (typeof API_BASE === 'undefined' || typeof BUILDER_API_BASE === 'undefined') {
    console.error('[PIPE] Run this on resumebuilder.html — API_BASE/BUILDER_API_BASE missing.');
    return;
  }

  // ---- Default fixture --------------------------------------------------
  var DEFAULT_FIXTURE = {
    label: 'Senior PM — SaaS Analytics',
    resume_data: {
      name: 'Alex Kim',
      current_title: 'Senior Product Manager',
      email: 'alex.kim@example.com',
      phone: '(206) 555-0188',
      address: 'Seattle, WA',
      linkedin: 'linkedin.com/in/alexkim',
      summary: 'Senior PM with 9 years building B2B SaaS analytics. Owned $40M ARR product line, led 3 PM pod, and drove 28% YoY net retention.',
      skills: ['Product Strategy','Roadmapping','SQL','A/B Testing','Mixpanel','Amplitude','Figma','Stakeholder Management','Pricing','Jira','OKRs','Discovery'],
      experience: [
        { title:'Senior Product Manager', company:'Lumen Analytics', location:'Seattle, WA', dates:'2022 — Present',
          role_summary:'Own analytics dashboard suite; lead 3 PMs and 12 engineers.',
          bullets:[
            'Launched embedded analytics SDK adopted by 240 customers in 9 months, +$6.4M ARR.',
            'Re-priced platform tier; expansion revenue +28% YoY without churn impact.',
            'Built quarterly discovery cadence (30+ customer interviews/qtr) feeding roadmap.',
            'Drove dashboard load time from 4.1s → 0.9s via partnership with platform team.'
          ]
        },
        { title:'Product Manager', company:'Northwind Data', location:'Seattle, WA', dates:'2018 — 2022',
          bullets:[
            'Shipped self-serve onboarding; activation +41% in first 60 days post-launch.',
            'Led migration to event-based pricing; ACV +$12k average.',
            'Authored North-Star metric framework adopted across 4 product squads.'
          ]
        }
      ],
      education: [
        { degree:'BS, Computer Science', school:'University of Washington', year:'2016' }
      ],
      certifications: [
        { name:'Pragmatic Institute PMC-III', issuer:'Pragmatic', year:'2021' }
      ],
      achievements: ['Product of the Year — SaaStr 2024 (finalist)']
    },
    job_title: 'Principal Product Manager, Data Platform',
    company: 'Helix Cloud',
    job_description:
      'Helix Cloud seeks a Principal PM to own our Data Platform line of business (~$80M ARR). ' +
      'You will lead 4 PMs, drive multi-quarter roadmap, partner closely with eng/design/GTM, and ' +
      'be accountable for adoption, NRR, and margin. Must have B2B SaaS, analytics or data-platform ' +
      'experience, comfort with SQL and experimentation, executive communication, and a track record ' +
      'of pricing/packaging changes that drove expansion. Bonus: embedded analytics, usage-based ' +
      'pricing, hiring/coaching senior PMs.'
  };

  // ---- Tiny helpers -----------------------------------------------------
  function ts() { return new Date().toISOString().slice(11, 23); }
  function clone(v) { try { return JSON.parse(JSON.stringify(v)); } catch (_) { return v; } }
  function head(s, n) { s = String(s == null ? '' : s); n = n || 600; return s.length <= n ? s : s.slice(0, n) + '…(' + (s.length - n) + ' more)'; }
  function safeParse(t) { try { return JSON.parse(t); } catch (_) { return null; } }
  async function readBody(res) {
    var raw = '';
    try { raw = await res.text(); } catch (_) {}
    var json = raw ? safeParse(raw) : null;
    return { raw: raw, json: json };
  }
  async function authHeaders() {
    try {
      if (typeof getAuthHeaders === 'function') {
        var h = await getAuthHeaders({ 'Content-Type': 'application/json' });
        if (!h['Content-Type']) h['Content-Type'] = 'application/json';
        return h;
      }
    } catch (_) {}
    return { 'Content-Type': 'application/json' };
  }
  function authedUser() {
    try {
      var u = (window.auth && window.auth.currentUser) || null;
      if (!u) return null;
      return { uid: u.uid || null, email: u.email || null };
    } catch (_) { return null; }
  }

  // ---- Floating panel ---------------------------------------------------
  function ensurePanel() {
    var p = document.getElementById('__pipe_panel__');
    if (p) return p;
    p = document.createElement('div');
    p.id = '__pipe_panel__';
    p.style.cssText = [
      'position:fixed','right:16px','bottom:16px','width:560px','max-height:78vh',
      'background:#0b1220','color:#e6edf7','border:1px solid #243049',
      'border-radius:10px','box-shadow:0 12px 40px rgba(0,0,0,.45)',
      'font:12px/1.4 ui-monospace,Menlo,Consolas,monospace','z-index:2147483646',
      'display:flex','flex-direction:column','overflow:hidden'
    ].join(';');
    p.innerHTML =
      '<div style="display:flex;gap:6px;align-items:center;padding:8px 10px;background:#111a2e;border-bottom:1px solid #243049">' +
        '<strong style="flex:1">Full Pipeline Test</strong>' +
        '<button id="__pipe_run">Run</button>' +
        '<button id="__pipe_expand">Expand all</button>' +
        '<button id="__pipe_collapse">Collapse all</button>' +
        '<button id="__pipe_copy">Copy JSON</button>' +
        '<button id="__pipe_dl">Download</button>' +
        '<button id="__pipe_close">×</button>' +
      '</div>' +
      '<div id="__pipe_status" style="padding:6px 10px;background:#0e1730;border-bottom:1px solid #243049;color:#9fb3d6"></div>' +
      '<div id="__pipe_body" style="overflow:auto;padding:8px 10px;flex:1"></div>';
    document.body.appendChild(p);
    p.querySelectorAll('button').forEach(function (b) {
      b.style.cssText = 'background:#1d2945;color:#e6edf7;border:1px solid #2c3a5c;border-radius:6px;padding:3px 8px;cursor:pointer;font:inherit';
    });
    p.querySelector('#__pipe_close').onclick = function () { p.remove(); };
    p.querySelector('#__pipe_run').onclick = function () { runFullPipelineTest(); };
    p.querySelector('#__pipe_expand').onclick = function () {
      p.querySelectorAll('details').forEach(function (d) { d.open = true; });
    };
    p.querySelector('#__pipe_collapse').onclick = function () {
      p.querySelectorAll('details').forEach(function (d) { d.open = false; });
    };
    p.querySelector('#__pipe_copy').onclick = function () {
      var data = window.__pipelineTestResults || {};
      navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(function () {
        setStatus('Copied bundle to clipboard.');
      });
    };
    p.querySelector('#__pipe_dl').onclick = function () {
      var data = window.__pipelineTestResults || {};
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'pipeline-test-' + Date.now() + '.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 800);
    };
    return p;
  }
  function setStatus(msg) {
    var el = document.getElementById('__pipe_status');
    if (el) el.textContent = '[' + ts() + '] ' + msg;
    try { console.log('[PIPE]', msg); } catch (_) {}
  }
  function renderStep(step) {
    var body = document.getElementById('__pipe_body');
    if (!body) return;
    var color = step.ok ? '#34d399' : (step.skipped ? '#94a3b8' : '#f87171');
    var dur = (step.ms != null) ? (step.ms + 'ms') : '—';
    var status = step.skipped ? 'SKIPPED' : (step.ok ? ('OK ' + (step.status || 200)) : ('FAIL ' + (step.status || '')));
    var det = document.createElement('details');
    det.style.cssText = 'border:1px solid #1f2a44;border-radius:6px;margin:6px 0;background:#0d1730';
    det.innerHTML =
      '<summary style="padding:6px 8px;cursor:pointer;display:flex;gap:8px;align-items:center">' +
        '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + color + '"></span>' +
        '<strong style="flex:1">' + step.name + '</strong>' +
        '<span style="color:#9fb3d6">' + dur + '</span>' +
        '<span style="color:' + color + '">' + status + '</span>' +
      '</summary>' +
      '<div style="padding:8px 10px;border-top:1px solid #1f2a44">' +
        (step.note ? '<div style="color:#fcd34d;margin-bottom:6px">' + step.note + '</div>' : '') +
        '<div style="color:#9fb3d6;margin-bottom:4px">URL</div>' +
        '<pre style="background:#0a1226;padding:6px;border-radius:4px;white-space:pre-wrap;margin:0 0 8px">' +
          (step.url || '—') +
        '</pre>' +
        '<div style="color:#9fb3d6;margin-bottom:4px">SENT (' + (step.sentSize || 0) + ' bytes)</div>' +
        '<pre style="background:#0a1226;padding:6px;border-radius:4px;white-space:pre-wrap;max-height:240px;overflow:auto;margin:0 0 8px">' +
          (step.sentPretty || '—') +
        '</pre>' +
        '<div style="color:#9fb3d6;margin-bottom:4px">RECEIVED (' + (step.receivedSize || 0) + ' bytes)</div>' +
        '<pre style="background:#0a1226;padding:6px;border-radius:4px;white-space:pre-wrap;max-height:320px;overflow:auto;margin:0">' +
          (step.receivedPretty || '—') +
        '</pre>' +
      '</div>';
    body.appendChild(det);
  }
  function clearBody() { var b = document.getElementById('__pipe_body'); if (b) b.innerHTML = ''; }

  // ---- Step runner ------------------------------------------------------
  async function runStep(name, fn, opts) {
    opts = opts || {};
    var step = { name: name, ok: false, skipped: false, ms: null, url: opts.url || '', sent: opts.sent || null };
    var t0 = performance.now();
    try {
      var out = await fn();
      step.ok = !!(out && out.ok);
      step.status = out && out.status;
      step.received = out && out.body && out.body.json ? out.body.json : (out && out.body && out.body.raw) || null;
      step.url = out && out.url || step.url;
      step.sent = (out && out.sent) || step.sent;
      step.note = out && out.note;
      if (out && out.skipped) { step.skipped = true; step.ok = false; }
    } catch (err) {
      step.ok = false;
      step.error = String(err && err.message || err);
      step.received = step.received || step.error;
    } finally {
      step.ms = Math.round(performance.now() - t0);
      try { step.sentPretty = step.sent != null ? JSON.stringify(step.sent, null, 2) : ''; } catch (_) { step.sentPretty = String(step.sent); }
      try { step.receivedPretty = step.received != null ? JSON.stringify(step.received, null, 2) : ''; } catch (_) { step.receivedPretty = String(step.received); }
      step.sentSize = step.sentPretty ? step.sentPretty.length : 0;
      step.receivedSize = step.receivedPretty ? step.receivedPretty.length : 0;
      renderStep(step);
    }
    return step;
  }

  // ---- Step implementations --------------------------------------------
  async function stepPing() {
    var url = API_BASE + '/ping';
    var res = await fetch(url, { method: 'GET' });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: null, body: body };
  }

  async function stepCheckSubscription() {
    // Subscription state is read from Firestore (builderSubscriptions/{email}
    // and users/{uid}.subscription), NOT from a backend route. Mirror that.
    var u = authedUser();
    var url = 'firestore://builderSubscriptions+users';
    var sent = { uid: (u && u.uid) || null, email: (u && u.email) || null };
    if (!u || !u.email) {
      return { ok: false, skipped: true, status: 0, url: url, sent: sent,
               body: { json: { skipped: 'Not signed in.' } }, note: 'Sign in to check subscription state.' };
    }
    var out = { uid: u.uid, email: u.email };
    try {
      if (window.db && db.collection) {
        var subSnap = null, userSnap = null;
        try { subSnap  = await db.collection('builderSubscriptions').doc(u.email).get(); } catch (e1) { out.subErr = String(e1 && e1.message || e1); }
        try { userSnap = await db.collection('users').doc(u.uid).get(); }                catch (e2) { out.userErr = String(e2 && e2.message || e2); }
        out.builderSubscriptions = (subSnap && subSnap.exists) ? subSnap.data() : null;
        out.userDoc = (userSnap && userSnap.exists) ? userSnap.data() : null;
      } else {
        out.error = 'window.db not available.';
      }
    } catch (err) {
      out.error = String(err && err.message || err);
    }
    // Surface the resolved access flags the app actually uses at runtime.
    out.runtimeFlags = {
      isAuthed:               !!(window.auth && window.auth.currentUser),
      hasActiveSubscription:  !!window.hasActiveSubscription,
      hasPriorSubscription:   !!window.hadPriorSubscription,
      canUsePremium:          (typeof window.canUsePremium === 'function') ? !!window.canUsePremium() : null,
      planLabel:              window.activePlanLabel || null
    };
    return { ok: !out.error, status: 200, url: url, sent: sent, body: { json: out } };
  }

  async function stepParseResume(fx) {
    var url = BUILDER_API_BASE + '/builder/parse-resume';
    var lines = [];
    lines.push(fx.resume_data.name);
    lines.push(fx.resume_data.current_title);
    lines.push([fx.resume_data.email, fx.resume_data.phone, fx.resume_data.address].filter(Boolean).join(' | '));
    lines.push(''); lines.push('SUMMARY'); lines.push(fx.resume_data.summary);
    lines.push(''); lines.push('SKILLS'); lines.push((fx.resume_data.skills || []).join(', '));
    lines.push(''); lines.push('EXPERIENCE');
    (fx.resume_data.experience || []).forEach(function (e) {
      lines.push(e.title + ' — ' + e.company + ' (' + e.dates + ')');
      if (e.role_summary) lines.push(e.role_summary);
      (e.bullets || []).forEach(function (b) { lines.push('• ' + b); });
      lines.push('');
    });
    lines.push('EDUCATION');
    (fx.resume_data.education || []).forEach(function (ed) { lines.push(ed.degree + ', ' + ed.school + ' (' + ed.year + ')'); });
    var resumeText = lines.join('\n');
    var sent = { resume_text: resumeText, source: 'pipeline-test' };
    var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: sent, body: body };
  }

  async function stepImportLinkedIn() {
    var jobUrl = window.__PIPE_LINKEDIN || '';
    if (!jobUrl) {
      return { ok: false, skipped: true, status: 0, url: BUILDER_API_BASE + '/builder/import-linkedin-job',
               sent: null, body: { json: { skipped: 'set window.__PIPE_LINKEDIN to test' } }, note: 'No LinkedIn URL provided.' };
    }
    var url = BUILDER_API_BASE + '/builder/import-linkedin-job';
    var sent = { url: jobUrl };
    var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: sent, body: body };
  }

  async function stepResearchRole(fx) {
    var url = BUILDER_API_BASE + '/builder/research-role';
    var sent = {
      job_title: fx.job_title,
      company: fx.company,
      job_description: fx.job_description,
      plan_context: '',
      source: 'pipeline-test',
      reason: 'manual-pipeline'
    };
    var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: sent, body: body };
  }

  async function stepOptimize(fx, roleResearch) {
    var url = BUILDER_API_BASE + '/builder/optimize';
    var sent = {
      resume_data: fx.resume_data,
      coverLetter: null,
      rolePlan: null,
      targetRole: { job_title: fx.job_title, company: fx.company, job_description: fx.job_description, plan_context: '' },
      roleResearch: roleResearch || null,
      selectedDocs: { resume: true, coverLetter: false, rolePlan: false },
      additionalDetails: '',
      activeVersionId: '',
      baselineScore: null,
      optimizeMode: 'balanced'
    };
    var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: sent, body: body };
  }

  async function stepGenerateCV(fx, roleResearch) {
    var url = BUILDER_API_BASE + '/builder/generate-cv';
    var sent = {
      profile: fx.resume_data,
      resume_data: fx.resume_data,
      targetRole: { job_title: fx.job_title, company: fx.company, job_description: fx.job_description },
      job_description: fx.job_description,
      role_research: roleResearch || null,
      auth_user: authedUser()
    };
    var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: sent, body: body };
  }

  async function stepGeneratePlan(fx, roleResearch) {
    var url = BUILDER_API_BASE + '/builder/generate';
    var sent = {
      resume_data: fx.resume_data,
      role_context: roleResearch || { job_title: fx.job_title, company: fx.company, job_description: fx.job_description },
      targetRole: { job_title: fx.job_title, company: fx.company, job_description: fx.job_description },
      job_description: fx.job_description,
      plan_context: '',
      plan_type: '90-day',
      sections: ['summary','phases','kpis','risks','first30','30to60','60to90'],
      requireDetailedPlan: true
    };
    var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: sent, body: body };
  }

  async function stepInterviewPrep(fx, roleResearch, optimization) {
    var url = BUILDER_API_BASE + '/builder/interview-prep-refresh';
    var sent = {
      resume_data: fx.resume_data,
      targetRole: { job_title: fx.job_title, company: fx.company, job_description: fx.job_description },
      role_research: roleResearch || null,
      optimization: optimization || null
    };
    var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
    var body = await readBody(res);
    return { ok: res.ok, status: res.status, url: url, sent: sent, body: body };
  }

  async function stepBestEffort(path, sent) {
    var url = BUILDER_API_BASE + path;
    try {
      var res = await fetch(url, { method: 'POST', headers: await authHeaders(), body: JSON.stringify(sent) });
      var body = await readBody(res);
      var note = (res.status === 404) ? 'Endpoint not present on this backend.' : null;
      return { ok: res.ok, status: res.status, url: url, sent: sent, body: body, note: note };
    } catch (err) {
      return { ok: false, status: 0, url: url, sent: sent, body: { json: { error: String(err) } }, note: 'Network error.' };
    }
  }

  // ---- Orchestrator -----------------------------------------------------
  async function runFullPipelineTest(opts) {
    opts = opts || {};
    var fx = (opts.fixture) || (window.__PIPE_FIXTURE) || DEFAULT_FIXTURE;
    var skip = new Set([].concat(opts.skip || [], window.__PIPE_SKIP || []));
    var only = (opts.only || window.__PIPE_ONLY || null);
    var onlySet = only ? new Set(only) : null;
    function shouldRun(name) {
      if (skip.has(name)) return false;
      if (onlySet && !onlySet.has(name)) return false;
      return true;
    }

    ensurePanel();
    clearBody();
    setStatus('Running… fixture: ' + (fx.label || 'custom'));

    var bundle = { startedAt: new Date().toISOString(), fixture: clone(fx), steps: {} };
    var roleResearch = null, optimization = null, parseResult = null;

    try {
      if (shouldRun('ping'))                bundle.steps.ping                = await runStep('1. ping', stepPing);
      if (shouldRun('check-subscription'))  bundle.steps.checkSubscription   = await runStep('2. check-subscription', stepCheckSubscription);
      if (shouldRun('parse-resume')) {
        bundle.steps.parseResume = await runStep('3. parse-resume', function () { return stepParseResume(fx); });
        parseResult = bundle.steps.parseResume.received;
      }
      if (shouldRun('import-linkedin-job')) bundle.steps.importLinkedIn      = await runStep('4. import-linkedin-job', stepImportLinkedIn);
      if (shouldRun('research-role')) {
        bundle.steps.researchRole = await runStep('5. research-role', function () { return stepResearchRole(fx); });
        var rr = bundle.steps.researchRole.received;
        roleResearch = (rr && (rr.role_research || rr.research || rr)) || null;
      }
      if (shouldRun('optimize')) {
        bundle.steps.optimize = await runStep('6. optimize', function () { return stepOptimize(fx, roleResearch); });
        var op = bundle.steps.optimize.received;
        optimization = (op && (op.optimization || op)) || null;
      }
      if (shouldRun('generate-cv'))         bundle.steps.generateCv          = await runStep('7. generate-cv', function () { return stepGenerateCV(fx, roleResearch); });
      if (shouldRun('generate'))            bundle.steps.generatePlan        = await runStep('8. generate (90-day plan)', function () { return stepGeneratePlan(fx, roleResearch); });
      if (shouldRun('interview-prep-refresh'))
        bundle.steps.interviewPrep = await runStep('9. interview-prep-refresh', function () { return stepInterviewPrep(fx, roleResearch, optimization); });
      if (shouldRun('analyze-resume'))      bundle.steps.analyzeResume       = await runStep('10. analyze-resume (best-effort)',
        function () { return stepBestEffort('/builder/analyze-resume', { resume_data: fx.resume_data, job_description: fx.job_description }); });
      if (shouldRun('tailor-to-jd'))        bundle.steps.tailorToJd          = await runStep('11. tailor-to-jd (best-effort)',
        function () { return stepBestEffort('/builder/tailor-to-jd', { resume_data: fx.resume_data, job_description: fx.job_description, targetRole: { job_title: fx.job_title, company: fx.company } }); });
      if (shouldRun('rescore'))             bundle.steps.rescore             = await runStep('12. rescore (best-effort)',
        function () { return stepBestEffort('/builder/rescore', { resume_data: fx.resume_data, job_description: fx.job_description }); });
    } catch (err) {
      console.error('[PIPE] orchestrator failure', err);
      setStatus('Aborted: ' + (err && err.message || err));
    }

    bundle.finishedAt = new Date().toISOString();
    bundle.summary = (function () {
      var s = { passed: 0, failed: 0, skipped: 0, totalMs: 0 };
      Object.keys(bundle.steps).forEach(function (k) {
        var st = bundle.steps[k];
        if (st.skipped) s.skipped++;
        else if (st.ok) s.passed++;
        else s.failed++;
        s.totalMs += (st.ms || 0);
      });
      return s;
    })();

    window.__pipelineTestResults = bundle;
    setStatus('Done — ' + bundle.summary.passed + ' passed, ' + bundle.summary.failed + ' failed, '
      + bundle.summary.skipped + ' skipped, ' + bundle.summary.totalMs + 'ms total. '
      + 'See window.__pipelineTestResults');
    try { console.log('[PIPE] result:', bundle); } catch (_) {}
    return bundle;
  }

  // ---- Expose + auto-run ------------------------------------------------
  window.runFullPipelineTest = runFullPipelineTest;
  window.__pipelineFixture = DEFAULT_FIXTURE;

  if (window.__PIPE_AUTORUN !== false) {
    setTimeout(function () { try { runFullPipelineTest(); } catch (e) { console.error(e); } }, 50);
  } else {
    ensurePanel();
    setStatus('Auto-run disabled. Call runFullPipelineTest() to start.');
  }
})();
