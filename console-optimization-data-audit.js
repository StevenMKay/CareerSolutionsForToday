/* =====================================================================
   OPTIMIZATION DATA AUDIT — automated, paste-and-go console harness
   ---------------------------------------------------------------------
   PURPOSE
   For each varied resume + job description, this harness:
     - Calls  POST /api/builder/optimize  once per `optimizeMode`
       (default: balanced + ats + executive, so we get cross-mode
        comparison data within the only AI endpoint that exists today).
   Then CROSS-CHECKS the responses for each fixture and flags any
   inconsistencies so you can confirm the data makes sense:
     - baselineScore stability across modes (drift > 8 = WARN)
     - projectedScore is never lower than baseline by design
     - tier calibration (weak should score lower than strong)
     - banned/buzzword phrases in summaryRewrite + bullet rewrites
     - fabricated metrics on metric-free fixtures (placeholder rule)
     - career-gap bullets not rewritten as continuous employment
     - empty / null / trivially short rewrites
     - missing required output fields (matchScore, suggestions, …)
     - first-person leaks in summaryRewrite

   USAGE
     1. Sign in on resumebuilder.html
     2. Open DevTools console
     3. Paste this entire file → Enter
        (auto-runs; set window.__OPT_AUDIT_AUTORUN = false BEFORE pasting
         to skip auto-run)

   MANUAL OVERRIDES
     await runOptAudit()                                  // all fixtures × default modes
     await runOptAudit({ n: 4 })                          // first 4 fixtures
     await runOptAudit({ only: [1,3,7] })                 // 1-indexed selection
     await runOptAudit({ modes: ['balanced'] })           // 1 call/fixture (fast)
     await runOptAudit({ modes: ['balanced','ats','executive','concise'] })
     await runOptAudit({ delayMs: 1200 })                 // throttle

   OUTPUT
     - Floating HUD: per-fixture row with full RECEIVED JSON per mode
     - Each row: SENT · scores per mode · AUDIT FLAGS
     - Full bundle on  window.__optAuditResults
     - Auto-copies JSON bundle to clipboard when done
   STATE NOT mutated. Nothing saved to Firestore.
   ===================================================================== */
(function(){
  'use strict';

  if (typeof API_BASE === 'undefined') {
    console.error('[OPT-AUDIT] Run this on resumebuilder.html — API_BASE not defined.');
    return;
  }

  // ============================================================
  // FIXTURES — varied quality bands so we can audit calibration.
  // Each fixture carries a `_tier` we use during cross-checking:
  //   weak  : expect baseline score < 65, big lift OK, lots of edits
  //   mid   : expect 65–80, moderate edits
  //   strong: expect >= 80, minimal rewrites, small delta
  //   gap   : career-gap; bullets must NOT be fabricated as employed
  //   noMetrics: bullets contain no numbers; fabricated metrics = FAIL
  //   buzzword : over-buzzword summary; expect rewrite + banned-phrase removal
  // ============================================================
  const FIXTURES = [
    {
      label: 'Weak: recent grad, vague intern bullets',
      _tier: 'weak',
      resume_data: {
        name: 'Ava Carter', current_title: 'Recent Graduate',
        email: 'ava.c@example.com', phone: '(773) 555-0191',
        address: 'Chicago, IL', linkedin: 'linkedin.com/in/avacarter',
        summary: 'Recent finance graduate looking to leverage my analytical skills in a full-time role.',
        skills: ['Excel','PowerPoint','Bloomberg','Financial Modeling','Accounting','Python'],
        experience: [
          { title:'Finance Intern', company:'Harbor Capital', location:'Chicago, IL', dates:'Summer 2025',
            bullets:['Helped team with financial analysis.','Worked on Excel models.','Assisted with presentations.'] }
        ],
        education:[{ degree:'BS, Finance', school:'University of Illinois', year:'2025' }],
        certifications:[], achievements:[]
      },
      job_description: 'Financial Analyst, Corporate Finance. 0-2 yrs. Excel modeling, variance analysis, board decks. Python a plus.',
      job_title: 'Financial Analyst', company: 'Sentry Industries'
    },
    {
      label: 'Mid: data analyst pivoting to data science',
      _tier: 'mid',
      resume_data: {
        name: 'Priya Shah', current_title: 'Data Analyst',
        email: 'priya.shah@example.com', phone: '(646) 555-0119',
        address: 'Brooklyn, NY', linkedin: 'linkedin.com/in/priyashah',
        summary: 'Data analyst with 2 years of experience building dashboards for a retail marketing team. Currently completing a part-time MS in Data Science.',
        skills: ['SQL','Python','Pandas','Tableau','Excel','A/B Testing','dbt','Looker','Git','Statistics'],
        experience: [
          { title:'Data Analyst', company:'Brightly Retail', location:'New York, NY', dates:'2023 — Present',
            bullets:[
              'Built 14 Tableau dashboards used by 60+ stakeholders across merchandising.',
              'Automated weekly pricing report in dbt — reduced analyst effort by 8 hrs/wk.',
              'Ran 11 A/B tests on email campaigns, lifting CTR 18% YoY.'
            ]},
        ],
        education:[{ degree:'MS, Data Science (in progress)', school:'NYU', year:'2026' },
                   { degree:'BA, Economics', school:'Rutgers University', year:'2023' }],
        certifications:[{ name:'Google Data Analytics', issuer:'Coursera', year:'2023' }],
        achievements:[]
      },
      job_description: 'Junior Data Scientist — 1-3 yrs experience. Build ML models for customer churn. Python + SQL required. scikit-learn, feature engineering, stakeholder storytelling. MS in progress OK.',
      job_title: 'Junior Data Scientist', company: 'Lumen Analytics'
    },
    {
      label: 'Strong: Sr Backend Eng, distributed systems',
      _tier: 'strong',
      resume_data: {
        name: 'Marcus T. Williams', current_title: 'Senior Software Engineer',
        email: 'marcus.t.williams@example.com', phone: '(512) 555-0177',
        address: 'Austin, TX', linkedin: 'linkedin.com/in/marcustwilliams',
        summary: 'Senior backend engineer specializing in distributed systems. 8 years of experience scaling Go and Java services to millions of requests per second.',
        skills: ['Go','Java','Kubernetes','gRPC','Kafka','PostgreSQL','Redis','AWS','Terraform','Observability'],
        experience: [
          { title:'Senior Software Engineer', company:'StreamForge', location:'Austin, TX', dates:'2022 — Present',
            bullets:[
              'Re-architected hot path in Go, cutting p99 latency from 140ms to 28ms.',
              'Led migration from RabbitMQ to Kafka across 22 services with zero downtime.',
              'Mentored 4 engineers; 2 promoted to senior within 18 months.'
            ]},
          { title:'Software Engineer', company:'Nimbus Cloud', location:'Austin, TX', dates:'2019 — 2022',
            bullets:[
              'Owned billing service processing $180M ARR.',
              'Introduced SLO-based alerting reducing pager volume 55%.'
            ]},
        ],
        education:[{ degree:'BS, Computer Science', school:'University of Texas at Austin', year:'2017' }],
        certifications:[{ name:'AWS Solutions Architect Associate', issuer:'AWS', year:'2021' }],
        achievements:['Patent: distributed rate-limiting algorithm']
      },
      job_description: 'Staff Backend Engineer. Lead architecture for high-throughput payment processing platform. Strong Go required. Experience with Kafka, Kubernetes, gRPC. Must have led zero-downtime migrations.',
      job_title: 'Staff Backend Engineer', company: 'Orbit Payments'
    },
    {
      label: 'Strong (C-suite): CTO, public company',
      _tier: 'strong',
      resume_data: {
        name: 'Dr. Rachel Steinberg', current_title: 'Chief Technology Officer',
        email: 'r.steinberg@example.com', phone: '(415) 555-0144',
        address: 'Palo Alto, CA', linkedin: 'linkedin.com/in/rachelsteinberg',
        summary: 'Chief Technology Officer with 18+ years scaling engineering orgs from 30 to 600+ engineers across three venture-backed B2B SaaS companies. Two successful IPOs.',
        skills:['Engineering Leadership','Platform Architecture','M&A Due Diligence','Board Communication','Cloud Economics','SOC2','GTM Alignment','Technical Hiring','IPO Readiness','Org Design'],
        experience:[
          { title:'Chief Technology Officer', company:'Axiom Cloud', location:'Palo Alto, CA', dates:'2021 — Present',
            bullets:[
              'Scaled engineering from 140 to 620 across 5 continents while holding OpEx growth to 1.4x revenue growth.',
              'Led platform re-architecture reducing cloud spend $28M/yr while improving p99 latency 43%.',
              'Drove S-1 technology section and led 14 investor meetings during IPO roadshow.'
            ]},
          { title:'VP Engineering', company:'Conduit Systems', location:'San Francisco, CA', dates:'2015 — 2021',
            bullets:[
              'Built engineering org from 30 to 240 through IPO (NYSE: CDUT, 2020).',
              'Owned SOC2 Type II and ISO 27001 programs — zero findings in 4 consecutive audits.'
            ]}
        ],
        education:[{ degree:'PhD, Computer Science', school:'Stanford', year:'2007' }],
        certifications:[], achievements:['Forbes CIO Next 2024']
      },
      job_description: 'Chief Technology Officer at Series D infra-software company ($120M ARR). Must have IPO or public-company CTO experience. Board-level communication required.',
      job_title: 'Chief Technology Officer', company: 'Stratos Networks'
    },
    {
      label: 'Pivot: nurse → clinical informatics',
      _tier: 'mid',
      resume_data: {
        name: 'Elena Ruiz, RN', current_title: 'Registered Nurse',
        email: 'elena.ruiz.rn@example.com', phone: '(602) 555-0166',
        address: 'Phoenix, AZ', linkedin: 'linkedin.com/in/elenaruiz-rn',
        summary: 'Registered nurse with 7 years of ICU experience and 2 years embedded in an Epic optimization workgroup.',
        skills: ['Epic','Clinical Workflows','HL7','Nursing Documentation','Order Sets','Training','Change Management','Critical Care','Data Validation','Stakeholder Engagement'],
        experience: [
          { title:'Clinical Epic Super User', company:'Desert Valley Health', location:'Phoenix, AZ', dates:'2022 — Present',
            bullets:[
              'Led nursing-side testing for 4 quarterly Epic upgrades; zero rollback events.',
              'Authored 12 order sets reducing medication reconciliation time by 22%.',
              'Trained 180+ nursing staff on MyChart bedside workflows.'
            ]},
          { title:'ICU Staff Nurse', company:'Desert Valley Health', location:'Phoenix, AZ', dates:'2017 — Present',
            bullets:[
              'Preceptor to 9 new graduate nurses.',
              'Co-led sepsis protocol revision cutting time-to-antibiotics by 14 minutes.'
            ]},
        ],
        education:[{ degree:'BSN', school:'Arizona State University', year:'2017' }],
        certifications:[{ name:'CCRN', issuer:'AACN', year:'2020' }],
        achievements:['Daisy Award 2022']
      },
      job_description: 'Clinical Informatics Specialist — bridge IT and nursing. Epic certified or eligible. Build order sets, workflow design, training. RN required.',
      job_title: 'Clinical Informatics Specialist', company: 'Sonoran Health System'
    },
    {
      label: 'Career-gap: 3-year caregiving break',
      _tier: 'gap',
      resume_data: {
        name:'Monica Delgado', current_title:'Project Manager (returning)',
        email:'m.delgado@example.com', phone:'(408) 555-0119',
        address:'San Jose, CA', linkedin:'linkedin.com/in/monicadelgado',
        summary:'Project manager returning to the workforce after a 3-year caregiving leave. Previously led enterprise software rollouts for Fortune 500 clients.',
        skills:['Project Management','PMP','Agile','Vendor Management','Stakeholder Communication','Jira','Risk Management','Smartsheet','Change Management','Budget Management'],
        experience:[
          { title:'Career Break — Family Caregiver', company:'', location:'San Jose, CA', dates:'2022 — 2025',
            bullets:['Provided full-time caregiving for immediate family member.','Completed PMP renewal and 2 online certs in Agile and Smartsheet.'] },
          { title:'Senior Project Manager', company:'Cornerstone Consulting', location:'San Jose, CA', dates:'2017 — 2022',
            bullets:[
              'Delivered 9 enterprise ERP rollouts on time and within budget (avg $2.1M).',
              'Managed 4 vendor relationships totaling $6M/yr.'
            ]}
        ],
        education:[{ degree:'BS, Industrial Engineering', school:'San Jose State', year:'2012' }],
        certifications:[{ name:'PMP', issuer:'PMI', year:'2015 (renewed 2024)' }], achievements:[]
      },
      job_description:'Senior Technical Program Manager. Lead enterprise software implementations. PMP required. Returnship candidates welcome.',
      job_title:'Senior Technical Program Manager', company:'Meridian Systems'
    },
    {
      label: 'No-metrics resume (placeholder rule)',
      _tier: 'noMetrics',
      resume_data: {
        name:'Priyanka Das', current_title:'Marketing Manager',
        email:'p.das@example.com', phone:'(312) 555-0130',
        address:'Chicago, IL', linkedin:'linkedin.com/in/priyankadas',
        summary:'Marketing manager with experience at mid-sized B2B technology companies. Strong in content, demand generation, and partner marketing.',
        skills:['Content Marketing','Demand Generation','HubSpot','Partner Marketing','SEO','Email Marketing','Analytics','Copywriting','Event Marketing','CRM'],
        experience:[
          { title:'Marketing Manager', company:'Beacon Software', location:'Chicago, IL', dates:'2022 — Present',
            bullets:[
              'Led partner marketing program with strategic technology partners.',
              'Ran quarterly webinars and drove lead generation.',
              'Managed content calendar across blog, email, and social.'
            ]},
          { title:'Marketing Specialist', company:'Beacon Software', location:'Chicago, IL', dates:'2019 — 2022',
            bullets:['Supported field events and trade shows.'] }
        ],
        education:[{ degree:'BA, Communications', school:'University of Illinois at Chicago', year:'2019' }],
        certifications:[{ name:'HubSpot Inbound', issuer:'HubSpot', year:'2021' }], achievements:[]
      },
      job_description:'Senior Partner Marketing Manager at a B2B SaaS firm. Lead co-marketing programs with strategic partners. Strong measurable program ownership.',
      job_title:'Senior Partner Marketing Manager', company:'Outrigger Analytics'
    },
    {
      label: 'Buzzword resume (banned-phrase rule)',
      _tier: 'buzzword',
      resume_data: {
        name:'Jamie Stone', current_title:'Senior Manager',
        email:'j.stone@example.com', phone:'(404) 555-0100',
        address:'Atlanta, GA', linkedin:'linkedin.com/in/jamiestone',
        summary:'I am a dynamic, results-driven visionary leader with a proven track record of driving transformation. Passionate about building high-performing teams, I am seeking to leverage my dynamic leadership style in a role where I can make a lasting impact and continue growing as a strategic partner to the business, aiming to deliver best-in-class outcomes across the enterprise.',
        skills:['Leadership','Strategy','Execution','Innovation','Collaboration','Results','Vision','Driving Change','Communication','Excellence'],
        experience:[
          { title:'Senior Manager', company:'Apex Solutions', location:'Atlanta, GA', dates:'2021 — Present',
            bullets:[
              'Responsible for driving results across the organization.',
              'Helped lead a team of professionals.',
              'Worked on various strategic initiatives.',
              'Assisted with cross-functional collaboration.'
            ]},
          { title:'Manager', company:'Apex Solutions', location:'Atlanta, GA', dates:'2017 — 2021',
            bullets:['Duties included overseeing team.','Involved in projects.'] }
        ],
        education:[{ degree:'BA, Business', school:'Georgia State University', year:'2015' }],
        certifications:[], achievements:[]
      },
      job_description:'Director, Operational Excellence at a mid-market SaaS company. Lead continuous-improvement programs. Must own measurable outcomes and cross-functional influence.',
      job_title:'Director, Operational Excellence', company:'Lyric Software'
    },
    {
      label: 'Mid: military → civilian PM (translation)',
      _tier: 'mid',
      resume_data: {
        name:'Capt. Isaiah Brooks (US Army, ret.)', current_title:'Logistics Operations Officer',
        email:'i.brooks@example.com', phone:'(910) 555-0178',
        address:'Raleigh, NC', linkedin:'linkedin.com/in/isaiahbrooks',
        summary:'US Army Captain with 8 years leading logistics operations for battalion-level commands. Seeking to apply leadership and operational planning to a civilian product management role.',
        skills:['Operations Planning','Team Leadership','Logistics','Risk Management','Stakeholder Management','Agile (self-study)','Jira (self-study)','Budget Management','Training','Cross-Functional Coordination'],
        experience:[
          { title:'Logistics Operations Officer (Captain)', company:'US Army', location:'Fort Liberty, NC', dates:'2020 — 2025',
            bullets:[
              'Directed operations planning for 620-person battalion across 3 installations.',
              'Managed $14M annual equipment budget with zero audit findings.',
              'Led 4 joint-force exercises involving 5 NATO partners.'
            ]},
          { title:'Platoon Leader (Lieutenant)', company:'US Army', location:'Fort Stewart, GA', dates:'2017 — 2020',
            bullets:['Led 32 soldiers across 2 combat deployments.','Received Army Commendation Medal.']}
        ],
        education:[{ degree:'BS, Mechanical Engineering', school:'US Military Academy (West Point)', year:'2017' }],
        certifications:[{ name:'PMP', issuer:'PMI', year:'2024' }],
        achievements:['Bronze Star Medal']
      },
      job_description:'Associate Product Manager at a B2B supply-chain software startup. Military veteran program. Must learn fast. Agile exposure a plus. PMP helpful.',
      job_title:'Associate Product Manager', company:'Loadbearer Technologies'
    },
    {
      label: 'Strong metrics: Enterprise SaaS AE',
      _tier: 'strong',
      resume_data: {
        name:'Derek Maldonado', current_title:'Enterprise Account Executive',
        email:'derek.m@example.com', phone:'(469) 555-0147',
        address:'Dallas, TX', linkedin:'linkedin.com/in/derekmaldonado',
        summary:'Enterprise AE with 7 years selling B2B SaaS to F500 accounts. Consistent 120%+ attainment.',
        skills:['Enterprise Sales','MEDDPICC','Salesforce','Outreach','Complex Negotiations','Executive Engagement','Solution Selling','Forecasting','Account Planning','Territory Management'],
        experience:[
          { title:'Enterprise Account Executive', company:'Apex CRM', location:'Dallas, TX', dates:'2022 — Present',
            bullets:[
              'Closed $4.2M ACV in 2024 (142% of quota) across 8 F500 logos.',
              'Negotiated $1.8M expansion — largest deal in company history.',
              'Reduced avg sales cycle from 167 days to 112 via MEDDPICC adoption.'
            ]},
          { title:'Mid-Market AE', company:'Apex CRM', location:'Dallas, TX', dates:'2019 — 2022',
            bullets:['128% attainment 3 years running.','Promoted to Enterprise 6 months early.']}
        ],
        education:[{ degree:'BBA, Business', school:'Texas A&M', year:'2018' }],
        certifications:[{ name:'MEDDPICC Certified', issuer:'Force Management', year:'2023' }],
        achievements:["President's Club 2023, 2024"]
      },
      job_description:'Strategic AE, F500 territory. $2M+ quota. 5+ yrs closing 6-7 figure deals. MEDDPICC required.',
      job_title:'Strategic Account Executive', company:'Summit Analytics'
    },
  ];

  // ============================================================
  // BANNED / BUZZWORD vocabulary used during cross-checks.
  // Aligned with optimize prompt's banned-phrase guidance.
  // ============================================================
  const BANNED_PHRASES = [
    'results-driven','results driven','dynamic','synergy','synergies',
    'go-getter','team player','self-starter','best-in-class','best in class',
    'world-class','world class','rockstar','ninja','guru',
    'proven track record','passionate about','responsible for','duties included',
    'helped','involved in','various','etc.','seeking to leverage'
  ];

  // ---------- helpers ----------
  function _esc(s){ return String(s==null?'':s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function _norm(s){ return String(s||'').toLowerCase(); }
  function _hasNum(s){ return /\d/.test(String(s||'')); }
  function _hasPlaceholder(s){ return /\[(x|n|\$|#|%|number|amount|metric)[^\]]{0,20}\]/i.test(String(s||'')) || /\[\s*\d*\s*[%xX#]?\s*\]/.test(String(s||'')); }
  function _wc(s){ return String(s||'').trim().split(/\s+/).filter(Boolean).length; }

  async function _getIdToken(){
    const u = firebase.auth().currentUser;
    if (!u) throw new Error('Not signed in — open resumebuilder.html and log in first.');
    return u.getIdToken();
  }

  // Posts to /api/builder/optimize with the EXACT shape the backend expects:
  //   { resume_data, targetRole:{ job_title, company, job_description }, optimizeMode }
  async function _postOptimize(fx, mode, idToken){
    const t0 = performance.now();
    const body = {
      resume_data: fx.resume_data,
      targetRole: {
        job_title: fx.job_title,
        company: fx.company,
        job_description: fx.job_description
      },
      selectedDocs: { resume: true, coverLetter: false, rolePlan: false },
      optimizeMode: mode || 'balanced'
    };
    let status = null, data = null, err = null;
    try {
      const r = await fetch(API_BASE + '/builder/optimize', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer ' + idToken },
        body: JSON.stringify(body)
      });
      status = r.status;
      const t = await r.text();
      try { data = JSON.parse(t); } catch(_) { data = { _raw: t }; }
      if (!r.ok) err = 'HTTP ' + status + (data && data.error ? ' — ' + data.error : '');
    } catch(e){ err = e && e.message || String(e); }
    return { mode, sent: body, status, received: data, error: err, elapsed_ms: Math.round(performance.now()-t0) };
  }

  // Pulls the normalized optimization block out of a backend response.
  // Backend returns: { success:true, optimization:{...} }
  function _opt(resp){
    if (!resp || !resp.received) return {};
    const r = resp.received;
    if (r.optimization && typeof r.optimization === 'object') return r.optimization;
    return r; // fallback if shape ever flattens
  }

  // Source text helpers for the fabrication / weak-evidence audit. Anything that
  // appears in the fixture's resume/JD/role/company is REAL and must NOT be flagged.
  function flattenSourceText(fx) {
    fx = fx || {};
    return JSON.stringify({
      resume_data: fx.resume_data,
      job_description: fx.job_description,
      job_title: fx.job_title,
      company: fx.company
    }).toLowerCase();
  }
  function hasEmptyEvidence(q) {
    return !(q && Array.isArray(q.resume_evidence) && q.resume_evidence.filter(Boolean).length);
  }
  function answerBlob(q) {
    if (!q || typeof q !== 'object') return '';
    return JSON.stringify({
      question: q.question,
      answer: q.answer,
      structured_answer: q.structured_answer,
      why_likely: q.why_likely
    }).toLowerCase();
  }

  // ============================================================
  // CROSS-CHECK: turns one fixture's per-mode responses into a
  // structured audit (PASS / WARN / FAIL flags + scoreboard).
  // ============================================================
  function audit(fx, runs){
    const flags = [];
    const add = (severity, area, msg, info) => flags.push({ severity, area, msg, info: info || null });

    // Per-mode summary
    const perMode = runs.map(run => {
      const opt = _opt(run);
      const baseline  = pickNum(opt.baselineScore);
      const projected = pickNum(opt.projectedScore, opt.matchScore && opt.matchScore.score);
      const delta     = pickNum(opt.scoreDelta, (baseline!=null && projected!=null ? projected - baseline : null));
      const sugg      = (opt.suggestions && opt.suggestions.resume) || {};
      const bullets   = Array.isArray(sugg.experienceBulletRewrites) ? sugg.experienceBulletRewrites : [];
      const summaryRewrite = String(sugg.summaryRewrite || '');
      return {
        mode: run.mode,
        status: run.status,
        error: run.error,
        baseline, projected, delta,
        bullet_rewrites: bullets.length,
        skills_add: (sugg.skillsToAdd||[]).length,
        skills_remove: (sugg.skillsToRemove||[]).length,
        role_summary_rewrites: (sugg.roleSummaryRewrites||[]).length,
        recruiterFirstImpression: (opt.resumeInsights && opt.resumeInsights.recruiterFirstImpression) || '',
        scoreLabel: (opt.matchScore && opt.matchScore.label) || ''
      };
    });

    // ---- HTTP / shape per mode ----
    runs.forEach(r => { if (r.error) add('FAIL','optimize/'+r.mode,'HTTP error', r.error); });

    // Reference run = first successful one (default balanced).
    const refRun = runs.find(r => !r.error) || runs[0];
    const ref = _opt(refRun);
    const refSugg = (ref.suggestions && ref.suggestions.resume) || {};
    const refBullets = Array.isArray(refSugg.experienceBulletRewrites) ? refSugg.experienceBulletRewrites : [];
    const refInsights = ref.resumeInsights || {};
    const refBaseline = pickNum(ref.baselineScore);
    const refProjected = pickNum(ref.projectedScore, ref.matchScore && ref.matchScore.score);
    const refDelta = pickNum(ref.scoreDelta, (refBaseline!=null && refProjected!=null ? refProjected - refBaseline : null));

    // ---- Required output fields ----
    if (refBaseline == null)  add('FAIL','optimize','missing baselineScore');
    if (refProjected == null) add('FAIL','optimize','missing projectedScore');
    if (!ref.matchScore || typeof ref.matchScore !== 'object') add('WARN','optimize','missing matchScore object');
    if (!ref.matchScore || !ref.matchScore.breakdown) add('WARN','optimize','missing matchScore.breakdown');
    if (!ref.suggestions || !ref.suggestions.resume) add('FAIL','optimize','missing suggestions.resume');
    if (!refInsights || !Object.keys(refInsights).length) add('WARN','optimize','resumeInsights empty');
    if (!refInsights.recruiterFirstImpression) add('WARN','optimize','no recruiterFirstImpression');
    if (!Array.isArray(refInsights.priorityGaps) || !refInsights.priorityGaps.length) add('WARN','optimize','priorityGaps empty');

    // ---- Cross-mode score stability ----
    const baselines = perMode.map(m => m.baseline).filter(v => typeof v === 'number');
    if (baselines.length >= 2) {
      const lo = Math.min.apply(null, baselines), hi = Math.max.apply(null, baselines);
      const drift = hi - lo;
      if (drift > 8) add('FAIL','parity','baselineScore drifts > 8 across modes', lo + '..' + hi);
      else if (drift > 5) add('WARN','parity','baselineScore drifts > 5 across modes', lo + '..' + hi);
      else add('PASS','parity','baselineScore stable across modes', lo + '..' + hi);
    }

    // ---- Tier-specific calibration ----
    if (refBaseline != null) {
      if (fx._tier === 'weak'    && refBaseline >= 70) add('WARN','calibration','weak resume scored unexpectedly high', String(refBaseline));
      if (fx._tier === 'strong'  && refBaseline <  72) add('WARN','calibration','strong resume scored unexpectedly low', String(refBaseline));
      if (fx._tier === 'noMetrics' && refBaseline >= 80) add('WARN','calibration','metric-free resume scored very high', String(refBaseline));
    }
    if (refDelta != null) {
      if (refDelta < 0) add('FAIL','calibration','projectedScore decreased vs baseline', String(refDelta));
      if (fx._tier === 'strong' && refDelta > 22) add('WARN','calibration','strong resume saw oversized lift', '+' + refDelta);
      if (fx._tier === 'weak'   && refDelta < 3)  add('WARN','calibration','weak resume saw negligible lift', String(refDelta));
    }

    // ---- Edits / suggestions ----
    const totalBullets = (fx.resume_data.experience||[]).reduce((s,e)=>s+((e.bullets||[]).length),0) || 1;
    const editPct = Math.round((refBullets.length / totalBullets) * 100);
    if (fx._tier === 'strong' && editPct > 70) add('WARN','edits','>70% of bullets rewritten on a strong resume', editPct + '%');
    if (fx._tier === 'weak'   && refBullets.length === 0) add('WARN','edits','no bullet rewrites suggested for a weak resume');

    // Validate each bullet rewrite shape
    const orphanedBullets = refBullets.filter(b => {
      const role = (fx.resume_data.experience || [])[Number(b.roleIndex)];
      if (!role) return true;
      const bs = role.bullets || [];
      return Number(b.bulletIndex) >= bs.length;
    });
    if (orphanedBullets.length) add('FAIL','quality','bullet rewrites point to nonexistent role/bullet index', orphanedBullets.length + ' of ' + refBullets.length);

    // ---- Banned-phrase enforcement on summary + bullet rewrites ----
    const summaryRewrite = String(refSugg.summaryRewrite || '');
    const bulletText = refBullets.map(b => String(b.suggested || '')).join('\n');
    const allRewriteText = (summaryRewrite + '\n' + bulletText).toLowerCase();
    const banHits = BANNED_PHRASES.filter(p => allRewriteText.includes(p.toLowerCase()));
    if (banHits.length){
      if (fx._tier === 'buzzword') add('WARN','banned','buzzword fixture: phrase still appears after rewrite', banHits.join(', '));
      else add('FAIL','banned','banned phrase appeared in rewrite output', banHits.join(', '));
    } else add('PASS','banned','no banned phrases in rewrite output');

    // ---- Fabricated metrics on no-metrics fixture ----
    if (fx._tier === 'noMetrics' && refBullets.length) {
      const newText = bulletText;
      const hasHardNumbers = /\b\d{2,}\b|\b\d+%\b|\$\d/.test(newText);
      const hasPlaceholders = /\[(x|n|\$|#|%|metric|number|amount)[^\]]{0,30}\]/i.test(newText) || /\[\s*[xX#%\$]\s*\]/.test(newText);
      // safeToApply MUST be false on suggestions that introduce placeholders
      const placeholderUnsafe = refBullets.filter(b => /\[[^\]]+\]/.test(String(b.suggested||'')) && b.safeToApply === false).length;
      if (hasHardNumbers && !hasPlaceholders) add('FAIL','fabrication','metric-free resume got hard numbers without placeholder brackets');
      else if (hasPlaceholders) {
        add('PASS','fabrication','placeholder brackets used as expected', placeholderUnsafe + ' marked safeToApply:false');
        if (placeholderUnsafe === 0) add('WARN','fabrication','placeholders present but no rewrite marked safeToApply:false');
      }
      else add('WARN','fabrication','no placeholders and no numbers — bullets may not quantify impact');
    }

    // ---- Career gap: bullets at the gap role must not invent employment ----
    if (fx._tier === 'gap') {
      const gapRoleIdx = (fx.resume_data.experience||[]).findIndex(e => /caregiv|career break|leave/i.test((e.title||'')+' '+(e.company||'')));
      const gapRewrites = refBullets.filter(b => Number(b.roleIndex) === gapRoleIdx).map(b => String(b.suggested||''));
      const fabricated = gapRewrites.some(t => /\b(managed team|led project|delivered|launched|owned the|drove revenue|closed \$)/i.test(t));
      if (fabricated) add('FAIL','fabrication','career-break bullets rewritten as if employed');
      else if (gapRewrites.length) add('PASS','fabrication','career-break bullets handled appropriately', gapRewrites.length + ' rewrites scanned');
    }

    // ---- Empty / trivially short rewrites ----
    const emptyRewrites = refBullets.filter(b => {
      const v = String(b.suggested || '');
      return !v || /^\s*(tbd|n\/a|\.\.\.)\s*$/i.test(v) || _wc(v) < 4;
    });
    if (emptyRewrites.length) add('FAIL','quality','rewrites are empty or trivially short', emptyRewrites.length + ' / ' + refBullets.length);

    // Each bullet rewrite should have a reason per backend prompt
    const noReason = refBullets.filter(b => !String(b.reason||'').trim()).length;
    if (noReason) add('WARN','quality','bullet rewrites missing reason text', noReason + ' / ' + refBullets.length);

    // ---- Summary integrity ----
    if (summaryRewrite) {
      if (_wc(summaryRewrite) < 18) add('WARN','summary','summaryRewrite is very short', _wc(summaryRewrite) + ' words');
      if (/\bI am\b|\bI'm\b|\bmy\b/i.test(summaryRewrite)) add('WARN','summary','summaryRewrite uses first person');
    } else if (fx._tier !== 'strong') {
      add('WARN','summary','no summaryRewrite returned for a non-strong resume');
    }

    // ---- scoreGate sanity ----
    if (ref.scoreGate && ref.scoreGate.status) {
      if (refDelta != null && refDelta > 0 && ref.scoreGate.status === 'rejected') add('FAIL','scoreGate','positive delta but scoreGate=rejected');
      if (refDelta != null && refDelta < 0 && ref.scoreGate.status === 'improves') add('FAIL','scoreGate','negative delta but scoreGate=improves');
    }

    // ---- Interview prep audit ----
    auditInterviewPrep(ref, add, fx);

    // Roll-up
    const counts = { PASS:0, WARN:0, FAIL:0 };
    flags.forEach(f => counts[f.severity]++);
    return {
      tier: fx._tier,
      ref_mode: refRun && refRun.mode,
      baseline: refBaseline,
      projected: refProjected,
      delta: refDelta,
      score_label: (ref.matchScore && ref.matchScore.label) || null,
      breakdown: (ref.matchScore && ref.matchScore.breakdown) || null,
      bullets_rewritten: refBullets.length,
      bullets_total: totalBullets,
      edit_pct: editPct,
      summary_rewrite_words: _wc(summaryRewrite),
      skills_add: (refSugg.skillsToAdd||[]).length,
      skills_remove: (refSugg.skillsToRemove||[]).length,
      per_mode: perMode,
      counts,
      flags
    };
  }

  function auditInterviewPrep(opt, add, fx) {
    const prep = (opt && opt.interview_prep) || null;
    if (!prep || typeof prep !== 'object') {
      add('FAIL','interview_prep','interview_prep block missing from optimization');
      return;
    }
    const buckets = {
      likely_questions:            { min: 5, label: 'likely_questions' },
      high_risk_questions:         { min: 3, label: 'high_risk_questions' },
      high_impact_questions:       { min: 3, label: 'high_impact_questions' },
      behavioral_questions:        { min: 3, label: 'behavioral_questions' },
      technical_or_role_questions: { min: 3, label: 'technical_or_role_questions' },
      questions_to_ask_employer:   { min: 3, label: 'questions_to_ask_employer' }
    };
    const allQuestionItems = [];
    Object.keys(buckets).forEach(function (key) {
      const cfg = buckets[key];
      const arr = Array.isArray(prep[key]) ? prep[key] : [];
      if (arr.length === 0) {
        add('FAIL','interview_prep', cfg.label + ' is empty');
      } else if (arr.length < cfg.min) {
        add('WARN','interview_prep', cfg.label + ' below minimum (' + arr.length + ' < ' + cfg.min + ')');
      } else {
        add('PASS','interview_prep', cfg.label + ' has ' + arr.length + ' items');
      }
      if (key !== 'questions_to_ask_employer') allQuestionItems.push.apply(allQuestionItems, arr);
    });

    // Personalization summary
    const ps = (prep.personalization_summary && typeof prep.personalization_summary === 'object') ? prep.personalization_summary : {};
    if (!ps.candidate_profile) add('WARN','interview_prep','personalization_summary.candidate_profile empty');
    if (!Array.isArray(ps.main_interview_risks) || !ps.main_interview_risks.length) add('WARN','interview_prep','personalization_summary.main_interview_risks empty');
    if (!Array.isArray(ps.strongest_talking_points) || !ps.strongest_talking_points.length) add('WARN','interview_prep','personalization_summary.strongest_talking_points empty');

    // Per-question quality
    let missingQuestionText = 0, missingEvidence = 0, missingJDSignal = 0, missingAnswer = 0, badType = 0;
    const ALLOWED_TYPES = ['behavioral','technical','strategic','role-specific','culture-fit','leadership'];
    const ALLOWED_LEVELS = ['high','medium','low'];

    // Source text from the fixture (resume + JD + role/company) — anything appearing here
    // is real and must NOT be flagged as fabrication.
    const sourceBlob = flattenSourceText(fx);
    let weakEvidenceHardClaims = 0;

    allQuestionItems.forEach(function (q) {
      if (!q || typeof q !== 'object') return;
      if (!String(q.question || '').trim()) missingQuestionText++;
      const t = String(q.type || '').toLowerCase();
      if (t && ALLOWED_TYPES.indexOf(t) === -1) badType++;
      if (q.importance && ALLOWED_LEVELS.indexOf(String(q.importance).toLowerCase()) === -1) badType++;
      if (q.risk_level && ALLOWED_LEVELS.indexOf(String(q.risk_level).toLowerCase()) === -1) badType++;
      const evid = Array.isArray(q.resume_evidence) ? q.resume_evidence.filter(Boolean) : [];
      const jds  = Array.isArray(q.job_description_signal) ? q.job_description_signal.filter(Boolean) : [];
      if (!evid.length) missingEvidence++;
      if (!jds.length) missingJDSignal++;

      const fmt = String(q.answer_format || '').toUpperCase();
      const ans = q.answer || {};
      const sa  = q.structured_answer || {};
      const hasStar = !!(ans.situation || ans.task || (Array.isArray(ans.action) && ans.action.length) || ans.result);
      const hasStructured = !!(sa.opening || (Array.isArray(sa.key_points) && sa.key_points.length) || sa.closing);
      if (fmt === 'STAR' && !hasStar) missingAnswer++;
      else if (fmt && fmt !== 'STAR' && !hasStructured) missingAnswer++;
      else if (!fmt && !hasStar && !hasStructured) missingAnswer++;

      // Hard-claim heuristic: first-person hard claim verbs OR "<verb> $X / X%"
      // in the answer guidance, paired with empty resume_evidence.
      const blob = answerBlob(q);
      const hardClaim =
        /\b(i|my|we)\s+(led|managed|delivered|launched|owned|drove|increased|reduced|improved|saved|generated|closed|built|created|implemented)\b/i.test(blob) ||
        /\b(reduced|increased|improved|saved|generated|closed)\s+\$?\d/i.test(blob);
      if (hasEmptyEvidence(q) && hardClaim) weakEvidenceHardClaims++;
    });

    const total = allQuestionItems.length || 1;
    if (missingQuestionText) add('FAIL','interview_prep', missingQuestionText + ' question(s) missing question text');
    if (badType)             add('WARN','interview_prep', badType + ' question(s) have invalid type/importance/risk values');
    if (missingEvidence > total * 0.5) add('WARN','interview_prep','>50% of questions have empty resume_evidence (' + missingEvidence + '/' + total + ')');
    if (missingJDSignal > total * 0.5) add('WARN','interview_prep','>50% of questions have empty job_description_signal (' + missingJDSignal + '/' + total + ')');
    if (missingAnswer > total * 0.3) add('WARN','interview_prep','>30% of questions have no usable answer guidance (' + missingAnswer + '/' + total + ')');
    if (weakEvidenceHardClaims) {
      add('WARN','interview_prep', weakEvidenceHardClaims + ' question(s) contain hard-claim answer guidance with empty resume_evidence');
    }

    // Employer questions: must be string OR object with .question
    const emp = Array.isArray(prep.questions_to_ask_employer) ? prep.questions_to_ask_employer : [];
    let empBadShape = 0;
    emp.forEach(function (e) {
      if (typeof e === 'string') { if (!e.trim()) empBadShape++; return; }
      if (e && typeof e === 'object') {
        if (!String(e.question || e.text || e.prompt || '').trim()) empBadShape++;
        return;
      }
      empBadShape++;
    });
    if (empBadShape) add('WARN','interview_prep', empBadShape + ' questions_to_ask_employer entries have invalid shape');
  }

  function pickNum(){
    for (const v of arguments){
      const n = Number(v);
      if (Number.isFinite(n)) return n;
    }
    return null;
  }

  // ============================================================
  // RUNNER
  // ============================================================
  async function _runFixture(fx, idx, total, idToken, modes){
    const out = { index: idx+1, label: fx.label, tier: fx._tier,
                  job_title: fx.job_title, company: fx.company,
                  job_description: fx.job_description,
                  modes: modes.slice(),
                  runs: [], audit: null };

    console.groupCollapsed('%c[OPT-AUDIT] ' + (idx+1) + '/' + total + ' — ' + fx.label, 'color:#2563EB;font-weight:bold');
    for (let m = 0; m < modes.length; m++){
      const mode = modes[m];
      _hudUpsertRow(fx, idx, total, out, 'mode ' + mode + '…');
      const run = await _postOptimize(fx, mode, idToken);
      out.runs.push(run);
      console.log('optimize ['+mode+']:', run.status, run.error || '', run.received);
      _hudUpsertRow(fx, idx, total, out, 'mode ' + mode + ' ' + (run.error?'ERR':'OK'));
      if (m < modes.length-1) await new Promise(r=>setTimeout(r, 400));
    }
    out.audit = audit(fx, out.runs);
    console.log('AUDIT:', out.audit);
    console.groupEnd();
    _hudUpsertRow(fx, idx, total, out, 'done');
    return out;
  }

  async function runOptAudit(opts){
    opts = opts || {};
    const delay = typeof opts.delayMs === 'number' ? opts.delayMs : 700;
    const ALLOWED = ['balanced','ats','executive','concise'];
    const modes = (Array.isArray(opts.modes) && opts.modes.length)
      ? opts.modes.filter(m => ALLOWED.indexOf(String(m).toLowerCase()) >= 0).map(m => String(m).toLowerCase())
      : ['balanced','ats','executive'];
    const all = FIXTURES.slice();
    const only = Array.isArray(opts.only) ? opts.only.map(i => i-1) : null;
    const list = only ? all.filter((_,i)=>only.includes(i)) : all.slice(0, opts.n || all.length);
    const total = list.length;

    _ensureHUD();
    _hudSetStatus('Authenticating…');
    _hudSetProgress(0, total);
    list.forEach((fx,i) => _hudUpsertRow(fx, i, total, null, 'queued'));

    let idToken;
    try { idToken = await _getIdToken(); }
    catch(e){ _hudSetStatus('AUTH FAILED — ' + e.message); throw e; }

    console.log('%c[OPT-AUDIT] Starting — ' + total + ' fixtures × ' + modes.length + ' modes (' + modes.join(', ') + ')', 'color:#059669;font-weight:bold;font-size:13px');
    const results = [];
    for (let i = 0; i < list.length; i++) {
      _hudSetStatus('Running ' + (i+1) + ' / ' + total + ' — ' + list[i].label);
      const r = await _runFixture(list[i], i, total, idToken, modes);
      results.push(r);
      _hudSetProgress(i+1, total);
      if (i < list.length-1) await new Promise(res => setTimeout(res, delay));
    }

    const totals = results.reduce((acc,r)=>{
      const c = (r.audit && r.audit.counts) || { PASS:0, WARN:0, FAIL:0 };
      acc.PASS += c.PASS; acc.WARN += c.WARN; acc.FAIL += c.FAIL; return acc;
    }, { PASS:0, WARN:0, FAIL:0 });

    const bundle = {
      meta: {
        kind: 'optimization-data-audit',
        run_at: new Date().toISOString(),
        api_base: API_BASE,
        user_email: (firebase.auth().currentUser||{}).email || null,
        fixture_count: results.length,
        modes: modes,
        totals
      },
      results
    };
    window.__optAuditResults = bundle;
    _hudSetStatus('Done — PASS ' + totals.PASS + ' · WARN ' + totals.WARN + ' · FAIL ' + totals.FAIL);
    console.log('%c[OPT-AUDIT] DONE', 'color:#059669;font-weight:bold;font-size:13px');
    console.table(results.map(r => ({
      '#': r.index, tier: r.tier, label: r.label,
      baseline:  r.audit && r.audit.baseline,
      projected: r.audit && r.audit.projected,
      delta:     r.audit && r.audit.delta,
      label_:    r.audit && r.audit.score_label,
      edits:     r.audit && (r.audit.bullets_rewritten + '/' + r.audit.bullets_total),
      PASS: r.audit && r.audit.counts.PASS,
      WARN: r.audit && r.audit.counts.WARN,
      FAIL: r.audit && r.audit.counts.FAIL
    })));
    try {
      await navigator.clipboard.writeText(JSON.stringify(bundle, null, 2));
      console.log('%c[OPT-AUDIT] Bundle copied to clipboard.', 'color:#059669');
    } catch(_) { console.warn('[OPT-AUDIT] clipboard copy failed; use HUD Copy button.'); }
    return bundle;
  }

  // ============================================================
  // FLOATING HUD
  // ============================================================
  const HUD_ID = 'opt-audit-hud';
  function _ensureHUD(){
    if (document.getElementById(HUD_ID)) return;
    const el = document.createElement('div');
    el.id = HUD_ID;
    el.innerHTML =
      '<style>' +
        '#'+HUD_ID+'{position:fixed;top:12px;right:12px;width:480px;max-height:calc(100vh - 24px);background:#0F172A;color:#E2E8F0;border-radius:14px;box-shadow:0 25px 80px rgba(0,0,0,0.45);font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;z-index:2147483647;display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,0.08)}' +
        '#'+HUD_ID+' header{padding:10px 14px;display:flex;align-items:center;gap:8px;background:linear-gradient(135deg,#1E293B,#0F172A);border-bottom:1px solid rgba(255,255,255,0.08)}' +
        '#'+HUD_ID+' h4{margin:0;font-size:13px;font-weight:800;flex:1}' +
        '#'+HUD_ID+' button.hud-btn{background:#334155;color:#F8FAFC;border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:4px 8px;font-size:11px;cursor:pointer;font-family:inherit;font-weight:600}' +
        '#'+HUD_ID+' button.hud-btn:hover{background:#475569}' +
        '#'+HUD_ID+' button.hud-btn.primary{background:#2563EB;border-color:#2563EB}' +
        '#'+HUD_ID+' .hud-progress{height:4px;background:#1E293B;overflow:hidden}' +
        '#'+HUD_ID+' .hud-bar{height:100%;background:linear-gradient(90deg,#06B6D4,#22D3EE);transition:width .25s ease}' +
        '#'+HUD_ID+' .hud-toolbar{display:flex;gap:6px;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.05);flex-wrap:wrap;background:#0B1220}' +
        '#'+HUD_ID+' .hud-status{padding:6px 12px;font-size:11px;color:#94A3B8;background:#0B1220;border-bottom:1px solid rgba(255,255,255,0.05)}' +
        '#'+HUD_ID+' .hud-list{overflow-y:auto;flex:1;padding:6px 10px 10px}' +
        '#'+HUD_ID+' details.hud-row{background:#1E293B;border:1px solid rgba(255,255,255,0.05);border-radius:8px;margin:6px 0;overflow:hidden}' +
        '#'+HUD_ID+' details.hud-row summary{cursor:pointer;padding:8px 10px;list-style:none;display:flex;align-items:center;gap:8px;font-size:11px}' +
        '#'+HUD_ID+' details.hud-row summary::-webkit-details-marker{display:none}' +
        '#'+HUD_ID+' .hud-badge{padding:2px 6px;border-radius:4px;font-weight:700;font-size:10px;background:#334155;min-width:22px;text-align:center}' +
        '#'+HUD_ID+' .hud-badge.ok{background:#065F46;color:#D1FAE5}' +
        '#'+HUD_ID+' .hud-badge.err{background:#7F1D1D;color:#FECACA}' +
        '#'+HUD_ID+' .hud-badge.run{background:#1E3A8A;color:#DBEAFE}' +
        '#'+HUD_ID+' .hud-badge.warn{background:#78350F;color:#FDE68A}' +
        '#'+HUD_ID+' .hud-title{flex:1;font-weight:700;color:#F8FAFC;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
        '#'+HUD_ID+' .hud-meta{color:#94A3B8;font-family:ui-monospace,monospace;font-size:10px}' +
        '#'+HUD_ID+' .hud-body{padding:0 10px 10px;border-top:1px solid rgba(255,255,255,0.05)}' +
        '#'+HUD_ID+' .hud-flag{display:flex;gap:6px;align-items:flex-start;padding:3px 0;font-size:11px;border-bottom:1px dashed rgba(255,255,255,0.06)}' +
        '#'+HUD_ID+' .hud-flag .sev{font-weight:800;min-width:38px;font-size:10px;text-align:center;padding:1px 4px;border-radius:3px}' +
        '#'+HUD_ID+' .hud-flag .sev.PASS{background:#065F46;color:#D1FAE5}' +
        '#'+HUD_ID+' .hud-flag .sev.WARN{background:#78350F;color:#FDE68A}' +
        '#'+HUD_ID+' .hud-flag .sev.FAIL{background:#7F1D1D;color:#FECACA}' +
        '#'+HUD_ID+' .hud-flag .area{color:#94A3B8;min-width:60px;font-family:ui-monospace,monospace}' +
        '#'+HUD_ID+' h5{margin:8px 0 4px;font-size:10.5px;color:#94A3B8;text-transform:uppercase;letter-spacing:.06em}' +
        '#'+HUD_ID+' pre{background:#0B1220;border:1px solid rgba(255,255,255,0.05);border-radius:6px;padding:8px;font-size:10.5px;color:#CBD5E1;overflow:auto;max-height:240px;margin:0 0 6px;white-space:pre-wrap;word-break:break-word}' +
      '</style>' +
      '<header>' +
        '<h4>🔬 Optimization Data Audit</h4>' +
        '<button class="hud-btn" data-act="min">_</button>' +
        '<button class="hud-btn" data-act="close">✕</button>' +
      '</header>' +
      '<div class="hud-progress"><div class="hud-bar" style="width:0%"></div></div>' +
      '<div class="hud-status">Initializing…</div>' +
      '<div class="hud-toolbar">' +
        '<button class="hud-btn" data-act="expand">Expand All</button>' +
        '<button class="hud-btn" data-act="collapse">Collapse All</button>' +
        '<button class="hud-btn primary" data-act="copy-all">Copy JSON</button>' +
        '<button class="hud-btn" data-act="copy-summary">Copy Summary</button>' +
        '<button class="hud-btn" data-act="download">Download</button>' +
      '</div>' +
      '<div class="hud-list"></div>';
    document.body.appendChild(el);

    el.addEventListener('click', (e) => {
      const t = e.target.closest('button.hud-btn'); if (!t) return;
      const act = t.getAttribute('data-act');
      const list = el.querySelector('.hud-list');
      if (act === 'close') return el.remove();
      if (act === 'min')   {
        const body = el.querySelector('.hud-list'), tb = el.querySelector('.hud-toolbar'), st = el.querySelector('.hud-status');
        const on = body.style.display !== 'none';
        body.style.display = on?'none':''; tb.style.display = on?'none':''; st.style.display = on?'none':''; return;
      }
      if (act === 'expand')   { list.querySelectorAll('details.hud-row').forEach(d=>d.open=true); return; }
      if (act === 'collapse') { list.querySelectorAll('details.hud-row').forEach(d=>d.open=false); return; }
      if (act === 'copy-all') {
        const b = window.__optAuditResults; if (!b) return;
        navigator.clipboard.writeText(JSON.stringify(b,null,2)).then(()=>{ t.textContent='Copied ✓'; setTimeout(()=>t.textContent='Copy JSON',1500); });
        return;
      }
      if (act === 'copy-summary') {
        const b = window.__optAuditResults; if (!b) return;
        const rows = ['#\ttier\tlabel\tbaseline\tprojected\tdelta\tedits\tPASS\tWARN\tFAIL'];
        b.results.forEach(r => {
          const a = r.audit || {};
          rows.push([r.index, r.tier, r.label, a.baseline, a.projected, a.delta,
                     (a.bullets_rewritten + '/' + a.bullets_total),
                     a.counts && a.counts.PASS, a.counts && a.counts.WARN, a.counts && a.counts.FAIL].join('\t'));
        });
        navigator.clipboard.writeText(rows.join('\n')).then(()=>{ t.textContent='Copied ✓'; setTimeout(()=>t.textContent='Copy Summary',1500); });
        return;
      }
      if (act === 'download') {
        const b = window.__optAuditResults; if (!b) return;
        const blob = new Blob([JSON.stringify(b,null,2)], { type:'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href=url; a.download='opt-audit-' + new Date().toISOString().replace(/[:.]/g,'-') + '.json';
        document.body.appendChild(a); a.click(); setTimeout(()=>{ a.remove(); URL.revokeObjectURL(url); }, 500);
      }
    });
  }
  function _hudSetStatus(s){ const el=document.getElementById(HUD_ID); if (!el) return; const e=el.querySelector('.hud-status'); if (e) e.textContent=s; }
  function _hudSetProgress(d,t){ const el=document.getElementById(HUD_ID); if (!el) return; const b=el.querySelector('.hud-bar'); if (b) b.style.width=Math.round((d/Math.max(1,t))*100)+'%'; }
  function _hudUpsertRow(fx, idx, total, entry, phase){
    const el = document.getElementById(HUD_ID); if (!el) return;
    const list = el.querySelector('.hud-list');
    const id = HUD_ID + '-r-' + idx;
    let row = document.getElementById(id);
    if (!row) { row = document.createElement('details'); row.id=id; row.className='hud-row'; list.appendChild(row); }

    const audit = entry && entry.audit;
    const counts = audit && audit.counts;
    let badgeCls = 'run', badgeTxt = (idx+1);
    if (counts) {
      if (counts.FAIL > 0) { badgeCls='err'; badgeTxt = '✕'+counts.FAIL; }
      else if (counts.WARN > 0) { badgeCls='warn'; badgeTxt = '!'+counts.WARN; }
      else { badgeCls='ok'; badgeTxt = '✓'; }
    }
    const meta = [];
    if (audit) {
      if (audit.baseline != null && audit.projected != null) meta.push(audit.baseline+'→'+audit.projected+' ('+(audit.delta>0?'+':'')+audit.delta+')');
      if (audit.score_label) meta.push(audit.score_label);
      meta.push(audit.bullets_rewritten + '/' + audit.bullets_total + ' edits');
    } else if (phase) meta.push(phase);

    const flagsHTML = (audit && audit.flags || []).map(f =>
      '<div class="hud-flag"><span class="sev '+f.severity+'">'+f.severity+'</span>' +
      '<span class="area">'+_esc(f.area)+'</span>' +
      '<span>'+_esc(f.msg)+(f.info?(' — <em style="color:#94A3B8">'+_esc(f.info)+'</em>'):'')+'</span></div>'
    ).join('');

    const summaryHTML =
      '<summary>' +
        '<span class="hud-badge '+badgeCls+'">'+_esc(badgeTxt)+'</span>' +
        '<span class="hud-title">#'+(idx+1)+' · ['+_esc(fx._tier||'-')+'] '+_esc(fx.label)+'</span>' +
        '<span class="hud-meta">'+_esc(meta.join(' · '))+'</span>' +
      '</summary>';

    const perModeHTML = (entry && entry.runs) ? entry.runs.map(run => {
      const opt = (run.received && run.received.optimization) || {};
      const head = '['+run.mode+'] ' + (run.error ? ('ERR: '+run.error) : ('base '+ (opt.baselineScore!=null?opt.baselineScore:'?') +' → proj '+ (opt.projectedScore!=null?opt.projectedScore:'?') +' (Δ'+ (opt.scoreDelta!=null?opt.scoreDelta:'?') +')')) + '  ·  ' + (run.elapsed_ms||0) + 'ms';
      return '<h5>'+_esc(head)+'</h5><pre>'+_esc(JSON.stringify(run.received, null, 2))+'</pre>';
    }).join('') : '';

    const sentHTML = entry && entry.runs && entry.runs[0] ?
      '<h5>SENT payload (mode='+_esc(entry.runs[0].mode)+')</h5><pre>'+_esc(JSON.stringify(entry.runs[0].sent, null, 2))+'</pre>' : '';

    const bodyHTML = entry ?
      '<div class="hud-body">' +
        '<div style="font-size:11px;color:#FBBF24;padding:4px 0">target: '+_esc(fx.job_title)+' @ '+_esc(fx.company)+'</div>' +
        (flagsHTML ? '<h5>Audit flags</h5>'+flagsHTML : '') +
        perModeHTML +
        sentHTML +
      '</div>'
      : '<div class="hud-body"><div style="padding:4px 0;color:#FBBF24">'+_esc(phase||'queued')+'…</div></div>';

    row.innerHTML = summaryHTML + bodyHTML;
  }

  // expose + auto-run
  window.runOptAudit = runOptAudit;
  window.__optAuditFixtures = FIXTURES;
  console.log('%c[OPT-AUDIT] Loaded ' + FIXTURES.length + ' fixtures.', 'color:#2563EB;font-weight:bold');
  console.log('Manual: await runOptAudit()  ·  await runOptAudit({ n: 3 })  ·  await runOptAudit({ only: [1,5] })  ·  await runOptAudit({ modes: [\'balanced\'] })');
  if (window.__OPT_AUDIT_AUTORUN !== false) {
    setTimeout(() => {
      runOptAudit().catch(e => console.error('[OPT-AUDIT] auto-run failed:', e));
    }, 50);
  }
})();
