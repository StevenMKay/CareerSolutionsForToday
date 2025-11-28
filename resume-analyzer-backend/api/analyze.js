// Advanced resume analyzer backend with ATS diagnostics and keyword enrichment
const ALLOWED_ORIGINS = new Set([
  'https://www.careersolutionsfortoday.com',
  'https://careersolutionsfortoday.com',
  'https://stevenmkay.github.io',
  'http://localhost:5500',
  'http://127.0.0.1:5500'
]);

const CRITICAL_KEYWORD_STOP_WORDS = new Set([
  'the','and','for','with','your','you','our','are','this','that','from','have','has','will','their','they',
  'job','description','role','responsibilities','requirements','skills','ability','work','team','per','such',
  'experience','strong','must','should','about','into','within','across','while','including','more',
  'than','who','what','where','when','which','why','how','via','using','use','can','able','need','needed',
  'preferred','plus','bonus','an','a','of','in','to','by','as','on','at','is','be','it','or','new','end'
]);

const CRITICAL_GENERIC_TERMS = new Set([
  'benefits','benefit','compensation','salary','salaries','insurance','medical','dental','vision','pto',
  'vacation','holidays','401k','retirement','paid','payment','hourly','hours','company','companies',
  'organization','organizations','corporate','corporation','enterprise','enterprises','department',
  'departments','business','businesses','employer','employers','culture','mission','values','people'
]);

const CRITICAL_SHORT_TOKENS = new Set(['ai','ml','hr','ui','ux','qa','sql','sap','api','aws','erp','crm','etl','bi','ads','pm','devops']);

const BULLET_GLYPH_SOURCE = '•●◦▪▫‣·‧○◉◎▸▹►✦✧➤➔➣➥➧➨➩➪➫➬➭➮➯➱➲➳➵➸➼➽➾';
const createBulletRegex = (flags = 'g') => new RegExp(`[${BULLET_GLYPH_SOURCE}]`, flags);

// -----------------------------------------------------------
// STAR story example library for fallback generation
// -----------------------------------------------------------
const STAR_TEMPLATE_LIBRARY = [
  "Led a multi-region CRM migration (Situation) by mapping 40+ workflows (Task), partnering with sales ops to retrain 300 reps (Action), and lifted pipeline visibility by 22% (Result).",
  "Inherited a stalled product launch (Situation), aligned design/engineering on a 60-day go-live plan (Task), ran twice-weekly risk reviews (Action), and shipped on schedule with 1.5x adoption (Result).",
  "Faced rising support backlogs (Situation), analyzed ticket data to find automation gaps (Task), implemented triage bots and refreshed macros (Action), cutting response time 35% (Result).",
  "Was asked to expand a healthcare pilot nationally (Situation), built a phased rollout and compliance checklist (Task), coordinated 12 market leads (Action), delivering launch six weeks early (Result).",
  "Noticed onboarding churn at 18% (Situation), built a cross-functional tiger team (Task), redesigned training journeys (Action), and reduced churn to 8% in two quarters (Result)."
];

const CRITICAL_KEYWORD_LIBRARY = [
  { phrase: 'Program management', hints: ['program manager', 'program management', 'manage programs'], patterns: [/management of programs?/i] },
  { phrase: 'Project management', hints: ['project management', 'project manager'], patterns: [/management of projects?/i] },
  { phrase: 'Cross-functional leadership', hints: ['cross functional', 'cross-functional', 'matrixed teams'], patterns: [/lead(?:ing|ership) cross[- ]functional/i] },
  { phrase: 'Process improvement', hints: ['process improvement', 'process optimize', 'lean', 'six sigma'], patterns: [/improvement of processes?/i] },
  { phrase: 'Operational excellence', hints: ['operational excellence', 'operational efficiency'], patterns: [/operations? excellence/i] },
  { phrase: 'Data-driven decision making', hints: ['data driven', 'data-driven', 'data informed'], patterns: [/decisions? driven by data/i] },
  { phrase: 'Success metrics & KPIs', hints: ['kpi', 'success metrics', 'performance indicators'] },
  { phrase: 'Resource planning', hints: ['resource planning', 'resource allocation'], patterns: [/allocation of resources?/i] },
  { phrase: 'Strategic initiatives', hints: ['strategic initiative', 'strategic programs', 'strategic roadmap'] },
  { phrase: 'End-to-end program delivery', hints: ['end to end', 'end-to-end'], patterns: [/delivery of programs? end to end/i] },
  { phrase: 'Healthcare operations', hints: ['healthcare operations', 'care delivery', 'clinical operations'] },
  { phrase: 'Clinical programs & pathways', hints: ['clinical program', 'care pathway', 'clinical pathways'] },
  { phrase: 'Stakeholder management', hints: ['stakeholder management', 'stakeholder alignment', 'stakeholder engagement'], patterns: [/management of stakeholders?/i, /stakeholder (?:relationships?|coordination)/i] },
  { phrase: 'Continuous improvement', hints: ['continuous improvement', 'kaizen'] },
  { phrase: 'Population health', hints: ['population health', 'at-risk populations'] },
  { phrase: 'Change management', hints: ['change management', 'organizational change'] },
  { phrase: 'Risk management', hints: ['risk management', 'mitigate risk'], patterns: [/management of risks?/i] },
  { phrase: 'Regulatory compliance', hints: ['regulatory compliance', 'regulatory standards', 'compliance controls'] },
  { phrase: 'Customer / patient experience', hints: ['customer experience', 'patient experience'], patterns: [/experience of (?:patients|customers)/i] },
  { phrase: 'Executive reporting & communications', hints: ['executive reporting', 'executive updates', 'senior leadership updates'] },
  { phrase: 'Budget ownership', hints: ['budget ownership', 'budget management'], patterns: [/management of budgets?/i] },
  { phrase: 'Vendor management', hints: ['vendor management', 'partner management', 'third-party management'] },
  { phrase: 'Automation & tooling', hints: ['automation', 'tooling strategy', 'workflow automation'] },
  { phrase: 'Roadmap planning', hints: ['roadmap planning', 'roadmap management'] }
];

const KEYWORD_SYNONYM_PATTERNS = [
  { regex: /management of stakeholders?/i, phrase: 'Stakeholder management' },
  { regex: /stakeholder (?:engagement|relationships?|coordination|buy[- ]in)/i, phrase: 'Stakeholder management' },
  { regex: /management of risks?/i, phrase: 'Risk management' },
  { regex: /management of change/i, phrase: 'Change management' },
  { regex: /management of vendors?/i, phrase: 'Vendor management' },
  { regex: /management of budgets?/i, phrase: 'Budget ownership' },
  { regex: /management of partnerships?/i, phrase: 'Partner management' },
  { regex: /care pathways?/i, phrase: 'Clinical programs & pathways' },
  { regex: /population health/i, phrase: 'Population health' },
  { regex: /patient experience/i, phrase: 'Customer / patient experience' },
  { regex: /customer experience/i, phrase: 'Customer / patient experience' },
  { regex: /regulatory (?:compliance|readiness)/i, phrase: 'Regulatory compliance' },
  { regex: /operational readiness/i, phrase: 'Operational readiness' },
  { regex: /governance (?:forums?|models?)/i, phrase: 'Governance & controls' }
];

const DEFAULT_CRITICAL_KEYWORDS = [
  'Program management',
  'Project management',
  'Cross-functional leadership',
  'Process improvement',
  'Operational excellence',
  'Operational readiness',
  'Data-driven decision making',
  'Success metrics & KPIs',
  'Stakeholder management',
  'Strategic initiatives',
  'End-to-end program delivery',
  'Resource planning',
  'Continuous improvement',
  'Risk management',
  'Change management',
  'Regulatory compliance',
  'Customer / patient experience',
  'Executive reporting & communications',
  'Population health',
  'Vendor management',
  'Budget ownership',
  'Partner management',
  'Governance & controls'
];

export default async function handler(req, res) {
  try {
    applyCors(req, res);
  } catch (err) {
    console.error('CORS configuration error:', err);
    res.status(500).json({ error: 'Server configuration error' });
    return;
  }

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { resumeText, jobDescription, hydrateOnly = false } = req.body || {};
    const safeResume = typeof resumeText === 'string' ? resumeText : '';
    const safeJob = typeof jobDescription === 'string' ? jobDescription : '';
    const {
      text: hydratedJobDescription,
      source: jobDescriptionSource,
      fetchedFrom: jobDescriptionUrl,
      error: jobDescriptionError
    } = await hydrateJobDescription(safeJob);

    const normalizedResume = normalizeResumeContent(safeResume);
    const normalizedJobDescription = normalizeResumeContent(hydratedJobDescription || '');
    const hasResolvedJob = normalizedJobDescription && normalizedJobDescription.trim().length > 20;

    if (hydrateOnly) {
      res.status(200).json({
        success: Boolean(hasResolvedJob || !jobDescriptionError),
        jobMatched: hasResolvedJob,
        jobDescriptionResolved: normalizedJobDescription,
        jobDescriptionSource,
        jobDescriptionUrl,
        jobDescriptionError,
        structureSignals: null,
        fallbackUsed: false,
        fallbackReason: null
      });
      return;
    }

    if (!safeResume || safeResume.trim().length < 50) {
      res.status(400).json({ error: 'Resume text is required and must be at least 50 characters' });
      return;
    }

    const resumeStructure = deriveResumeStructureSignals(normalizedResume);

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      res.status(500).json({ error: 'Server configuration error' });
      return;
    }

    const prompt = hasResolvedJob
      ? createJobMatchingPrompt(normalizedResume, normalizedJobDescription)
      : createStandardPrompt(normalizedResume);

    const { analysis, fallbackUsed, fallbackReason } = await generateAnalysis(
      prompt,
      normalizedResume,
      normalizedJobDescription,
      OPENAI_API_KEY
    );

    const normalized = validateAndFixAnalysis(analysis, normalizedResume, normalizedJobDescription);
    const completenessAdjusted = enforceResumeCompleteness(normalized, normalizedResume, resumeStructure);
    const validated = applyPositiveSignalBoost(completenessAdjusted, normalizedResume, resumeStructure);

    const atsSignals = createAtsSignals(normalizedResume, normalizedJobDescription, resumeStructure);
    validated.atsSignals = atsSignals;
    validated.atsWarnings = buildAtsWarnings(atsSignals);
    validated.structureSignals = resumeStructure;

    const atsInsightCard = generateAtsInsightCard(atsSignals);
    if (atsInsightCard) {
      if (!Array.isArray(validated.extraInsights)) {
        validated.extraInsights = [];
      }
      const existingIndex = validated.extraInsights.findIndex(card => card.title === 'ATS Diagnostics');
      if (existingIndex >= 0) {
        validated.extraInsights[existingIndex] = atsInsightCard;
      } else {
        validated.extraInsights.push(atsInsightCard);
      }
    }

    const structureInsightCard = generateStructureInsightCard(resumeStructure);
    if (structureInsightCard) {
      if (!Array.isArray(validated.extraInsights)) {
        validated.extraInsights = [];
      }
      const structureIndex = validated.extraInsights.findIndex(card => card.title === 'Structure & Timeline');
      if (structureIndex >= 0) {
        validated.extraInsights[structureIndex] = structureInsightCard;
      } else {
        validated.extraInsights.push(structureInsightCard);
      }
    }

    ensureCompanyInsights(validated, normalizedResume, normalizedJobDescription);

    validated.storyBuilder = createStoryBuilderPayload(validated, normalizedResume, normalizedJobDescription);

    res.status(200).json({
      success: true,
      analysis: validated,
      timestamp: new Date().toISOString(),
      jobMatched: hasResolvedJob,
      jobDescriptionResolved: normalizedJobDescription,
      jobDescriptionSource,
      jobDescriptionUrl,
      jobDescriptionError,
      structureSignals: resumeStructure,
      fallbackUsed,
      fallbackReason
    });
  } catch (error) {
    console.error('Resume analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze resume', message: error.message });
  }
}

function applyCors(req, res) {
  const origin = req.headers.origin;
  if (origin && (ALLOWED_ORIGINS.has(origin) || process.env.ALLOW_ALL_ORIGINS === 'true')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.careersolutionsfortoday.com');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
}

async function generateAnalysis(prompt, resumeText, jobDescription, apiKey) {
  const requestBody = {
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a professional resume analyzer. Respond with valid JSON only—no commentary.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.2,
    max_tokens: 4000,
    response_format: { type: 'json_object' }
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorData = await safeJson(response);
    throw new Error(`OpenAI API Error: ${errorData?.error?.message || response.statusText || 'Unknown error'}`);
  }

  const data = await response.json();
  const aiResponse = data.choices?.[0]?.message?.content || '';

  let analysis;
  let fallbackUsed = false;
  let fallbackReason = null;

  try {
    analysis = JSON.parse(aiResponse);
  } catch (parseError) {
    try {
      analysis = JSON.parse(extractJsonFromResponse(aiResponse));
    } catch (extractError) {
      fallbackUsed = true;
      fallbackReason = 'json_parse_failed';
      analysis = createFallbackAnalysis(resumeText, Boolean(jobDescription), jobDescription);
    }
  }

  if (!analysis || typeof analysis !== 'object') {
    fallbackUsed = true;
    fallbackReason = fallbackReason || 'invalid_analysis_structure';
    analysis = createFallbackAnalysis(resumeText, Boolean(jobDescription), jobDescription);
  }

  return { analysis, fallbackUsed, fallbackReason };
}

function safeJson(response) {
  return response.json().catch(() => null);
}

function extractJsonFromResponse(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('No JSON object found');
  }
  return text.slice(start, end + 1);
}

function createFallbackAnalysis(resumeText, hasJobDescription, jobDescription = '') {
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const safeText = typeof resumeText === 'string' ? resumeText : '';
  const normalizedResume = normalizeResumeContent(safeText);
  const resumeSource = normalizedResume || safeText;
  const safeJobText = typeof jobDescription === 'string' ? jobDescription : '';
  const normalizedJobText = normalizeResumeContent(safeJobText);
  const jobSource = normalizedJobText || safeJobText;
  const wordCount = resumeSource.trim().split(/\s+/).filter(Boolean).length;
  const bulletCount = countBulletSymbols(resumeSource);
  const metricMatches = (resumeSource.match(/\b\d{1,3}(?:[,\.]\d{3})*(?:%|\+|x)?/gi) || []).length;
  const hasEmail = /@/.test(resumeSource);
  const hasPhone = /\b\d{3}[-.\s]*\d{3}[-.\s]*\d{4}\b/.test(resumeSource);
  const linksInResume = (resumeSource.match(/https?:\/\/\S+/gi) || []).length;

  const coverageScore = clamp((wordCount / 400) * 20, 0, 20);
  const metricsScore = clamp(metricMatches * 2.5, 0, 20);
  const structureScore = clamp(bulletCount * 2, 0, 20);
  const alignmentScore = hasJobDescription
    ? clamp(compareJobKeywords(jobSource, resumeSource) * 100, 0, 20)
    : clamp((linksInResume > 0 ? 6 : 0) + metricsScore * 0.3, 0, 20);
  const overallScore = clamp(55 + coverageScore + metricsScore + structureScore + alignmentScore, 55, 93);

  const categories = [
    makeFallbackCategory('Contact Information', hasEmail && hasPhone ? 'good' : 'warning', hasEmail && hasPhone ? 88 : 71, hasEmail && hasPhone ? 'Header contains email and phone.' : 'Contact block missing either email or phone.', [
      hasEmail ? 'Make sure the email is placed near the name.' : 'Add a professional email address near the header.',
      hasPhone ? 'Keep the phone number near the header so recruiters can contact you quickly.' : 'Add a reachable phone number; recruiters expect both email and phone.'
    ].filter(Boolean)),
    makeFallbackCategory('Professional Summary', overallScore > 80 ? 'good' : 'warning', clamp(overallScore + 2, 60, 92), 'Summary detected. Ensure it highlights scale, scope, and impact.', ['Add 1-2 quantified wins in the first 3 lines.', 'Mention domain expertise or tools tied to your most recent roles.']),
    makeFallbackCategory('Work Experience', overallScore > 82 ? 'good' : 'warning', clamp(overallScore - 3, 58, 90), 'Experience section detected. Use bullet verbs plus metrics.', ['Keep bullet length under 40 words.', 'Lead with action verb + measurable outcome.']),
    makeFallbackCategory('Skills Section', 'warning', 74, 'Skills are present—surface the tools you rely on most so scanners see them instantly.', [
      'Lead with the tools and platforms you use most often (SQL, Python, SharePoint, AI initiatives).',
      hasJobDescription ? 'Mirror the job posting keywords.' : 'Highlight the tools, platforms, and leadership strengths that fit your target roles.'
    ]),
    makeFallbackCategory('Education', 'warning', 72, 'Education present—ensure graduation years are current.', ['Add certifications or licenses relevant to the target job.']),
  ];

  if (hasJobDescription) {
    categories.push(
      makeFallbackCategory(
        'Job Match & Keywords',
        'warning',
        70,
        'Ensure the resume echoes critical phrases from the job description and stays ATS-safe.',
        [
          'Spell out acronyms once (e.g., Key Performance Indicators (KPIs)).',
          'Repeat the job’s must-have tools or leadership themes in both summary and bullets.'
        ]
      )
    );
  } else {
    categories.push(
      makeFallbackCategory(
        'Keyword Optimization',
        'warning',
        72,
        'Prioritize high-value skills and technologies so the resume scans well even without a specific job posting.',
        [
          'Cluster related skills and move the most marketable ones to the top of the list.',
          'Use universally recognized role titles and ATS-friendly phrasing (no graphics or tables).' 
        ]
      )
    );
  }

  const extraInsights = [
    {
      title: 'Resume Completeness',
      status: overallScore > 80 ? 'good' : 'warning',
      details: hasEmail && hasPhone ? 'Contact basics detected. Continue reinforcing measurable outcomes.' : 'Add a complete contact block with phone + professional email.',
      tips: ['Keep total length near 650-750 words for mid-senior roles.', 'Use consistent bullet symbols and tense.']
    }
  ];

  const fallbackAnalysis = {
    overallScore,
    categories,
    companyInsights: [],
    extraInsights,
    criticalKeywords: generateCriticalKeywords(jobSource, resumeSource).slice(0, 15)
  };

  fallbackAnalysis.storyBuilder = buildStoryBuilderFallback(fallbackAnalysis, resumeText, jobDescription);
  return fallbackAnalysis;
}

function makeFallbackCategory(name, status, score, feedback, suggestions) {
  return { name, status, score, feedback, suggestions };
}

function compareJobKeywords(jobText, resumeText) {
  const jobTokens = (jobText.toLowerCase().match(/[a-z]{4,}/g) || []).filter(token => !CRITICAL_KEYWORD_STOP_WORDS.has(token));
  const resumeTokens = new Set(resumeText.toLowerCase().match(/[a-z]{4,}/g) || []);
  if (!jobTokens.length) {
    return 0;
  }
  const uniqueJob = Array.from(new Set(jobTokens));
  let overlap = 0;
  uniqueJob.forEach(token => {
    if (resumeTokens.has(token)) {
      overlap += 1;
    }
  });
  return overlap / uniqueJob.length;
}

function validateAndFixAnalysis(analysis, resumeText, jobDescription) {
  if (!analysis || typeof analysis !== 'object') {
    return createFallbackAnalysis(resumeText, Boolean(jobDescription), jobDescription);
  }

  const fixes = [];
  const hasJobDescription = Boolean(jobDescription && jobDescription.trim());

  if (typeof analysis.overallScore !== 'number') {
    analysis.overallScore = 78;
    fixes.push('overallScore missing; defaulted to 78.');
  }

  if (!Array.isArray(analysis.categories)) {
    analysis.categories = [];
    fixes.push('categories missing; defaulted to empty array.');
  }

  if (!analysis.categories.length) {
    analysis.categories = createFallbackAnalysis(resumeText, Boolean(jobDescription), jobDescription).categories;
    fixes.push('categories empty; fallback categories applied.');
  } else {
    analysis.categories = analysis.categories.map(category => {
      if (!category || typeof category !== 'object') {
        return makeFallbackCategory('General', 'warning', 72, 'Category data missing.', ['Ensure JSON matches schema.']);
      }

      const safeScore = clampNumber(category.score, 0, 100, 72);
      const status = deriveStatusFromScore(safeScore);
      const suggestions = Array.isArray(category.suggestions)
        ? category.suggestions.filter(item => typeof item === 'string' && item.trim().length)
        : [];

      const originalName = category.name || 'General';
      const cleanedName = !hasJobDescription && /job|role|match|alignment/i.test(originalName)
        ? 'Keyword Optimization'
        : originalName;

      let cleanedFeedback = (category.feedback || '').trim();
      let cleanedExplanation = (category.scoreExplanation || '').trim() || cleanedFeedback;
      let cleanedSuggestions = suggestions.slice();

      if (!hasJobDescription) {
        cleanedFeedback = removeJobSpecificLanguage(cleanedFeedback);
        cleanedExplanation = removeJobSpecificLanguage(cleanedExplanation);
        cleanedSuggestions = cleanedSuggestions.filter(s => !containsJobSpecificLanguage(s));
      }

      cleanedFeedback = neutralizePrestigeBias(cleanedFeedback);
      cleanedExplanation = neutralizePrestigeBias(cleanedExplanation);
      cleanedSuggestions = cleanedSuggestions.map(text => enhanceSuggestionSpecificity(neutralizePrestigeBias(text))).filter(Boolean);

      if (!cleanedFeedback) {
        cleanedFeedback = generalFeedbackFallback(cleanedName);
      }
      if (!cleanedExplanation) {
        cleanedExplanation = cleanedFeedback;
      }
      if (!cleanedSuggestions.length) {
        cleanedSuggestions = [generalSuggestionFallback(cleanedName)];
      }

      return {
        name: cleanedName,
        status,
        score: safeScore,
        scoreExplanation: cleanedExplanation,
        feedback: cleanedFeedback,
        suggestions: cleanedSuggestions
      };
    });
  }

  if (!Array.isArray(analysis.extraInsights)) {
    analysis.extraInsights = [];
    fixes.push('extraInsights invalid; defaulted to empty array.');
  } else {
    analysis.extraInsights = analysis.extraInsights
      .filter(item => typeof item === 'object' && ((item.title || '').trim().length || (item.details || '').trim().length))
      .map(item => {
        const tips = Array.isArray(item.tips) ? item.tips.filter(tip => typeof tip === 'string' && tip.trim().length) : [];
        let cleanedTips = tips;
        let cleanedDetails = neutralizePrestigeBias((item.details || '').trim());

        if (!hasJobDescription) {
          cleanedDetails = removeJobSpecificLanguage(cleanedDetails);
          cleanedTips = tips.filter(tip => !containsJobSpecificLanguage(tip));
        }

        if (!cleanedDetails) {
          cleanedDetails = 'Focus on clarity, measurable impact, and ATS-friendly formatting.';
        }
        cleanedTips = cleanedTips.map(tip => enhanceSuggestionSpecificity(neutralizePrestigeBias(tip))).filter(Boolean);
        if (!cleanedTips.length) {
          cleanedTips = ['Lead with quantifiable wins and keep formatting simple (no tables or graphics).'];
        }

        return {
          title: (item.title || 'Insight').trim(),
          status: ['good', 'warning', 'critical'].includes(item.status) ? item.status : 'warning',
          details: cleanedDetails,
          tips: cleanedTips
        };
      });
  }

  if (!Array.isArray(analysis.companyInsights)) {
    analysis.companyInsights = [];
    fixes.push('companyInsights invalid; defaulted to empty array.');
  }

  analysis.criticalKeywords = sanitizeCriticalKeywords(analysis.criticalKeywords, jobDescription, resumeText);
  analysis.storyBuilder = createStoryBuilderPayload(analysis, resumeText, jobDescription);

  if (fixes.length) {
    console.log('Analysis validation fixes applied:', fixes);
  }

  return analysis;
}

function clampNumber(value, min, max, fallback = min) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, value));
}

function deriveStatusFromScore(score) {
  if (score >= 85) return 'good';
  if (score >= 70) return 'warning';
  return 'critical';
}

const JOB_DESCRIPTION_PATTERNS = [
  /job description/i,
  /job posting/i,
  /this role/i,
  /the role/i,
  /role requirements?/i,
  /hiring manager/i,
  /position requirements?/i,
  /align with the role/i
];

function containsJobSpecificLanguage(text = '') {
  if (!text) {
    return false;
  }
  return JOB_DESCRIPTION_PATTERNS.some(pattern => pattern.test(text));
}

function removeJobSpecificLanguage(text = '') {
  if (!text) {
    return '';
  }
  if (!containsJobSpecificLanguage(text)) {
    return text;
  }
  let cleaned = text;
  JOB_DESCRIPTION_PATTERNS.forEach(pattern => {
    cleaned = cleaned.replace(pattern, 'target opportunities');
  });
  return cleaned.trim();
}

  // ===============================================================
  //  INTERVIEW STORY BUILDER — AI + fallback support
  // ===============================================================
  function createStoryBuilderPayload(analysis, resumeText, jobDescription) {
    const fallback = buildStoryBuilderFallback(analysis, resumeText, jobDescription);
    return sanitizeStoryBuilder(analysis?.storyBuilder, fallback);
  }

  function sanitizeStoryBuilder(raw, fallback) {
    const base = fallback || buildStoryBuilderFallback({}, "", "");
    if (!raw || typeof raw !== "object") {
      return base;
    }

    const normalizeStrings = (entries, limit) => {
      if (!Array.isArray(entries)) return [];
      return entries
        .map(entry => {
          if (typeof entry === "string") return entry.trim();
          if (entry && typeof entry === "object") {
            const parts = [entry.title, entry.story, entry.summary, entry.scenario, entry.situation, entry.action, entry.result]
              .map(part => (typeof part === "string" ? part.trim() : ""))
              .filter(Boolean);
            return parts.join(" — ").trim();
          }
          return "";
        })
        .filter(Boolean)
        .slice(0, limit);
    };

    const starStories = normalizeStrings(raw.starStories, 4).filter(isMeaningfulStarStory);
    const strengths = normalizeStrings(raw.tailoredStrengths, 10);
    const leadership = normalizeStrings(raw.leadershipStories, 3);
    const normalizedTellMe = typeof raw.tellMeIntro === "string" ? raw.tellMeIntro.trim() : "";
    const normalizedPitch = typeof raw.elevatorPitch === "string" ? raw.elevatorPitch.trim() : "";

    const weaknessObj = raw.weaknessMitigation && typeof raw.weaknessMitigation === "object"
      ? {
          weakness: typeof raw.weaknessMitigation.weakness === "string" ? raw.weaknessMitigation.weakness.trim() : "",
          mitigation: typeof raw.weaknessMitigation.mitigation === "string" ? raw.weaknessMitigation.mitigation.trim() : ""
        }
      : { weakness: "", mitigation: "" };

    return {
      starStories: starStories.length ? starStories : base.starStories,
      tellMeIntro: normalizedTellMe || base.tellMeIntro,
      tailoredStrengths: strengths.length ? strengths : base.tailoredStrengths,
      leadershipStories: leadership.length ? leadership : base.leadershipStories,
      weaknessMitigation: (weaknessObj.weakness || weaknessObj.mitigation)
        ? weaknessObj
        : base.weaknessMitigation,
      elevatorPitch: normalizedPitch || base.elevatorPitch
    };
  }

  function isMeaningfulStarStory(entry = "") {
    if (!entry || typeof entry !== "string") {
      return false;
    }
    const text = entry.toLowerCase();
    const hasQuestionLabel = /question\s*[:|-]/i.test(entry) || /tell me about/i.test(entry);
    if (!hasQuestionLabel) {
      return false;
    }
    const contactSignal = /(contact info|contact information|email address|phone number|linkedin profile|resume header)/i;
    const formattingSignal = /(resume (?:format|layout|template)|skills section|bullet length|header contains)/i;
    return !contactSignal.test(text) && !formattingSignal.test(text);
  }

  function buildStoryBuilderFallback(analysis = {}, resumeText = "", jobDescription = "") {
    const resumeStarStories = buildResumeDrivenStarStories(resumeText, jobDescription);
    const starStories = resumeStarStories.length ? resumeStarStories : deriveStarStories(analysis);
    const strengths = deriveStrengths(analysis);
    const leadershipStories = deriveLeadershipStories(resumeText, analysis);
    const weaknessMitigation = deriveWeaknessMitigation(analysis);

    const defaultStarStories = starStories.length ? starStories : STAR_TEMPLATE_LIBRARY.slice(0, 3);

    return {
      starStories: defaultStarStories,
      tellMeIntro: deriveTellMeIntro(analysis, resumeText, jobDescription),
      tailoredStrengths: strengths.length ? strengths : ["Program leadership", "Stakeholder alignment", "Metric-driven decisions"],
      leadershipStories: leadershipStories.length ? leadershipStories : ["Explain how you aligned cross-functional partners to deliver a measurable win."],
      weaknessMitigation,
      elevatorPitch: deriveElevatorPitch(analysis, strengths, jobDescription)
    };
  }

  function buildResumeDrivenStarStories(resumeText = "", jobDescription = "") {
    const achievements = extractResumeAchievements(resumeText).slice(0, 6);
    if (!achievements.length) {
      return [];
    }
    const jobThemes = deriveJobThemes(jobDescription);
    return achievements
      .map((achievement, index) => createStarStoryFromAchievement(
        achievement,
        jobThemes[index % Math.max(1, jobThemes.length)] || null
      ))
      .filter(Boolean)
      .slice(0, 4);
  }

  function deriveJobThemes(jobDescription = "") {
    if (!jobDescription) {
      return [];
    }
    const themes = [];
    const THEME_PATTERNS = [
      { regex: /(revenue|sales|growth|commercial)/i, label: "revenue impact" },
      { regex: /(customer|client|member|patient)/i, label: "customer experience" },
      { regex: /(automation|digital|ai|ml|machine learning|workflow)/i, label: "automation initiatives" },
      { regex: /(risk|compliance|control|audit)/i, label: "risk mitigation" },
      { regex: /(launch|implementation|rollout|deployment)/i, label: "program launches" },
      { regex: /(training|enablement|coaching)/i, label: "talent enablement" },
      { regex: /(analytics|insights|data|reporting|kpi)/i, label: "data-driven decisions" }
    ];
    THEME_PATTERNS.forEach(({ regex, label }) => {
      if (regex.test(jobDescription) && !themes.includes(label)) {
        themes.push(label);
      }
    });
    return themes;
  }

  function extractResumeAchievements(resumeText = "") {
    if (!resumeText) {
      return [];
    }
    const achievements = [];
    const bulletPattern = new RegExp(
      `^(?:[-*${escapeForRegex(BULLET_GLYPH_SOURCE)}]|\\d+\.)\\s*(.+)`
    );
    const lines = resumeText.split(/\r?\n/);
    let currentRole = "";

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) {
        return;
      }
      if (!bulletPattern.test(trimmed) && looksLikeRoleHeading(trimmed)) {
        currentRole = trimmed;
        return;
      }
      const match = trimmed.match(bulletPattern);
      if (match) {
        const text = match[1].replace(/\s+/g, " ").trim();
        if (text.length >= 40 && text.length <= 260) {
          achievements.push({ role: currentRole, text });
        }
      }
    });

    return achievements;
  }

  function escapeForRegex(text = "") {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function looksLikeRoleHeading(line = "") {
    if (!line || /^[-*]/.test(line)) {
      return false;
    }
    if (line.length > 140) {
      return false;
    }
    if (/[|]/.test(line) && /\d{4}/.test(line)) {
      return true;
    }
    return /(vice president|director|manager|lead|leader|consultant|analyst|engineer|specialist|head|principal)/i.test(line);
  }

  function createStarStoryFromAchievement(achievement, jobTheme = null) {
    if (!achievement || !achievement.text) {
      return "";
    }
    const normalized = achievement.text.replace(/\s+/g, " ").trim();
    if (!normalized) {
      return "";
    }

    const { action, result } = splitActionAndResult(normalized);
    const taskClause = extractTaskClause(normalized);
    const situation = buildSituationSentence(achievement.role, taskClause || action);
    const task = taskClause
      ? `I needed to ${taskClause}.`
      : "I owned this initiative end-to-end.";
    const actionSentence = action
      ? `I ${ensureLowercaseStart(action)}.`
      : "I coordinated stakeholders and executed the plan.";
    const resultSentence = result
      ? toSentenceCase(stripResultTrigger(result))
      : inferResultFromLine(normalized);
    const question = buildQuestionFromAction(action || normalized, jobTheme, achievement.role);
    const sampleAnswer = buildSampleAnswer({ situation, task, action: actionSentence, result: resultSentence });

    return `Question: ${question} || Situation: ${situation} || Task: ${task} || Action: ${actionSentence} || Result: ${resultSentence} || Sample Answer: ${sampleAnswer}`;
  }

  const RESULT_TRIGGER_REGEX = /(resulted in|resulting in|leading to|led to|which led to|driving|drove|generated|creating|producing|delivering|delivered|achieving|achieved|boosting|increasing|reducing|improving|improved)/i;

  function splitActionAndResult(line = "") {
    const match = RESULT_TRIGGER_REGEX.exec(line);
    if (!match) {
      return { action: line, result: "" };
    }
    const action = line.slice(0, match.index).replace(/[;,]\s*$/, "").trim();
    const result = line.slice(match.index).trim();
    return { action, result };
  }

  function stripResultTrigger(text = "") {
    if (!text) {
      return "";
    }
    return text.replace(RESULT_TRIGGER_REGEX, "").trim();
  }

  function extractTaskClause(line = "") {
    const match = line.match(/\bto\s+([a-z0-9 ,.%$-]+?)(?:[;,\.]|$)/i);
    if (!match) {
      return "";
    }
    return match[1].trim().replace(/^(the|a|an)\s+/i, "").trim();
  }

  function buildSituationSentence(role = "", context = "") {
    const base = role ? `While working as ${role},` : "In this role,";
    const contextHint = context ? ensureLowercaseStart(context) : "a critical business gap";
    return `${base} I recognized ${contextHint}.`;
  }

  function ensureLowercaseStart(text = "") {
    if (!text) {
      return "";
    }
    const trimmed = text.replace(/[.]+$/, "").trim();
    if (!trimmed) {
      return "";
    }
    return trimmed.charAt(0).toLowerCase() === trimmed.charAt(0)
      ? trimmed
      : trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
  }

  function inferResultFromLine(line = "") {
    const metricMatch = line.match(/(\$?\d[\d,]*(?:\.\d+)?\s*(?:%|mm|million|bn|billion|k)?)/i);
    if (metricMatch) {
      return `Delivered ${metricMatch[0]} impact and measurable performance gains.`;
    }
    return "Delivered measurable improvements tied to KPIs.";
  }

  function buildQuestionFromAction(actionText = "", jobTheme = null, role = "") {
    const cleaned = (actionText || "").replace(/^I\s+/i, "").replace(/\.$/, "").trim();
    const roleContext = role ? ` in your ${role} role` : "";
    const themeContext = jobTheme ? ` focused on ${jobTheme}` : "";
    if (!cleaned) {
      return `Tell me about a time you drove measurable change${themeContext || roleContext}.`;
    }
    const verbMatch = cleaned.match(/^[a-z]+/i);
    const verb = verbMatch ? verbMatch[0].toLowerCase() : "led";
    const remainder = cleaned.slice(verbMatch ? verbMatch[0].length : 0).trim() || "a critical initiative";
    const baseQuestion = `Tell me about a time you ${verb} ${remainder}${roleContext}${themeContext}`.replace(/\s+/g, " ").trim();
    return baseQuestion.endsWith("?") ? baseQuestion : `${baseQuestion}?`;
  }

  function buildSampleAnswer(parts = {}) {
    const segments = [];
    if (parts.situation) {
      segments.push(parts.situation);
    }
    if (parts.task) {
      segments.push(parts.task);
    }
    if (parts.action) {
      segments.push(parts.action.replace(/^I\s+/i, "I "));
    }
    if (parts.result) {
      segments.push(parts.result.startsWith("Delivered") ? parts.result : `As a result, ${parts.result}`);
    }
    return segments.join(" ");
  }

  function toSentenceCase(text = "") {
    if (!text) {
      return "";
    }
    const trimmed = text.replace(/^[,;\s]+/, "").trim();
    if (!trimmed) {
      return "";
    }
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }

  function deriveStarStories(analysis) {
    const categories = Array.isArray(analysis?.categories) ? analysis.categories.slice(0, 4) : [];
    return categories
      .map(category => {
        if (!category) return "";
        const name = (category.name || "Impact Story").trim();
        const situation = (category.feedback || "Outline the situation and scope.").trim();
        const suggestionA = Array.isArray(category.suggestions) && category.suggestions[0]
          ? category.suggestions[0]
          : "Highlight the action you drove.";
        const suggestionR = Array.isArray(category.suggestions) && category.suggestions[1]
          ? category.suggestions[1]
          : "Close with quantified outcomes.";
        return `${name}: Situation — ${situation}; Action — ${suggestionA}; Result — ${suggestionR}`;
      })
      .filter(Boolean);
  }

  function deriveTellMeIntro(analysis, resumeText = "", jobDescription = "") {
    const keywords = Array.isArray(analysis?.criticalKeywords) ? analysis.criticalKeywords.slice(0, 2) : [];
    const roleMatch = resumeText.match(/\b(Director|Manager|Lead|Leader|Analyst|Consultant|Engineer|Specialist)\b/i);
    const role = roleMatch ? roleMatch[0].toLowerCase() : "program leader";
    const highlight = analysis?.extraInsights?.find(ins => ins?.status === "good")?.details
      || (jobDescription ? jobDescription.slice(0, 140) : "Blend strategy and execution to deliver measurable improvements.");
    const metrics = Number(analysis?.atsSignals?.metricDensity) || 0;
    const metricsPhrase = metrics >= 4 ? ` with ${metrics} measurable wins referenced` : "";
    const keywordPhrase = keywords.length ? keywords.join(" + ") : "cross-functional excellence";
    return `I'm a ${role} who specializes in ${keywordPhrase}${metricsPhrase}. ${highlight}`;
  }

  function deriveStrengths(analysis) {
    const pool = new Set();
    (analysis?.criticalKeywords || []).forEach(keyword => {
      if (keyword) pool.add(keyword);
    });
    (analysis?.highlightKeywords || []).forEach(keyword => {
      if (keyword) pool.add(keyword);
    });
    (analysis?.extraInsights || []).forEach(insight => {
      if (insight?.title) pool.add(insight.title);
    });
    (analysis?.categories || []).forEach(category => {
      if (category?.status === "good" && category?.name) {
        pool.add(`${category.name} Strength`);
      }
    });
    return Array.from(pool).filter(Boolean).slice(0, 10);
  }

  function deriveLeadershipStories(resumeText = "", analysis) {
    const leadershipRegex = /\b(led|managed|mentored|directed|oversaw|spearheaded|coached|orchestrated|partnered)\b/i;
    const lines = (resumeText || "")
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => leadershipRegex.test(line) && line.length > 20 && line.length < 220);

    if (lines.length) {
      return lines.slice(0, 3);
    }

    return (analysis?.categories || [])
      .filter(category => /lead|stakeholder|team/i.test(category?.name || "") && category?.feedback)
      .map(category => category.feedback)
      .slice(0, 2);
  }

  function deriveWeaknessMitigation(analysis) {
    const warning = (analysis?.atsWarnings && analysis.atsWarnings[0])
      || (analysis?.extraInsights || []).find(ins => ins && (ins.status === "warning" || ins.status === "critical"))?.details
      || "Interviewers may test how you scale your impact.";

    const mitigation = (analysis?.extraInsights || [])
      .find(ins => ins && (ins.status === "warning" || ins.status === "critical") && Array.isArray(ins.tips) && ins.tips.length > 0)?.tips?.[0]
      || "Explain the playbook you're running to close the gap and the metric you plan to improve next.";

    return { weakness: warning, mitigation };
  }

  function deriveElevatorPitch(analysis, strengths = [], jobDescription = "") {
    const focusArea = strengths.length ? strengths.slice(0, 3).join(", ") : "program leadership, analytics, and stakeholder alignment";
    const company = extractCompanyFromJobDescription(jobDescription);
    const highlight = analysis?.extraInsights?.[0]?.details || "deliver measurable improvements end-to-end.";
    const score = Number(analysis?.overallScore) || 75;
    return `I blend ${focusArea} to keep initiatives on track. This resume currently scores ${score}/100, and I'm targeting ${company} so we can ${highlight}`;
  }

  function extractCompanyFromJobDescription(jobDescription = "") {
    if (!jobDescription) {
      return "your team";
    }
    const atMatch = jobDescription.match(/at\s+([A-Z][\w&-]+)/i);
    if (atMatch) {
      return atMatch[1];
    }
    const properMatch = jobDescription.match(/\b([A-Z][A-Za-z0-9&-]{2,})\b/);
    return properMatch ? properMatch[1] : "your team";
  }

  const INDUSTRY_PATTERNS = [
    { regex: /healthcare|patient|clinical|hospital|provider/i, label: 'healthcare transformation' },
    { regex: /fintech|payments?|banking|credit|loan|financial/i, label: 'financial services modernization' },
    { regex: /supply chain|logistics|warehouse|fulfillment/i, label: 'supply chain optimization' },
    { regex: /saas|cloud|platform|api|devops|software/i, label: 'cloud/SaaS platform scale' },
    { regex: /manufacturing|factory|plant|production/i, label: 'advanced manufacturing automation' },
    { regex: /retail|ecommerce|merchandising/i, label: 'digital retail experience' },
    { regex: /energy|utilities|sustainability|carbon/i, label: 'energy & sustainability initiatives' }
  ];

  function ensureCompanyInsights(analysis, resumeText = "", jobDescription = "") {
    if (!analysis || typeof analysis !== 'object') {
      return analysis;
    }

    if (!Array.isArray(analysis.companyInsights)) {
      analysis.companyInsights = [];
    }

    analysis.companyInsights = analysis.companyInsights
      .map(entry => normalizeCompanyInsight(entry))
      .filter(Boolean)
      .slice(0, 3);

    if (analysis.companyInsights.length === 0) {
      const fallbackInsight = buildCompanyInsightFallback(analysis, resumeText, jobDescription);
      if (fallbackInsight) {
        analysis.companyInsights.push(fallbackInsight);
      }
    }

    return analysis;
  }

  function normalizeCompanyInsight(entry) {
    if (!entry) {
      return null;
    }
    if (typeof entry === 'string') {
      return {
        source: 'resume',
        insight: entry.trim(),
        action: '',
        link: ''
      };
    }

    if (typeof entry !== 'object') {
      return null;
    }

    const insight = (entry.insight || entry.summary || entry.details || '').trim();
    const action = (entry.action || entry.recommendation || '').trim();
    const link = (entry.link || entry.url || '').trim();
    const source = (entry.source || 'resume').trim();

    if (!insight && !action) {
      return null;
    }

    return { source, insight, action, link };
  }

  function buildCompanyInsightFallback(analysis, resumeText = "", jobDescription = "") {
    const company = extractCompanyFromJobDescription(jobDescription);
    const industry = inferIndustryFocus(jobDescription, resumeText);
    const candidateFocus = (analysis?.criticalKeywords || []).slice(0, 2).join(', ') || 'program leadership & metrics';
    const source = jobDescription ? 'job description + resume' : 'resume';

    const insight = `${company} is prioritizing ${industry}.`;
    const action = `Emphasize ${candidateFocus} when outlining how you'll accelerate ${industry} roadmaps.`;

    return { source, insight, action, link: '' };
  }

  function inferIndustryFocus(jobDescription = "", resumeText = "") {
    const haystack = `${jobDescription}\n${resumeText}`;
    const match = INDUSTRY_PATTERNS.find(pattern => pattern.regex.test(haystack));
    return match ? match.label : 'customer experience & operational excellence';
  }

function generalSuggestionFallback(categoryName = '') {
  const key = categoryName.toLowerCase();
  if (key.includes('skill')) {
    return 'List your most in-demand tools first and keep the section tight for quick scans.';
  }
  if (key.includes('experience')) {
    return 'Lead each bullet with an action verb and quantify the impact whenever possible.';
  }
  if (key.includes('summary')) {
    return 'Highlight 1-2 marquee achievements and core specialties in the opening lines.';
  }
  if (key.includes('keyword')) {
    return 'Mirror the terminology recruiters use broadly (cloud, analytics, leadership) without overstuffing.';
  }
  return 'Emphasize measurable wins and keep formatting easy to scan.';
}

function generalFeedbackFallback(categoryName = '') {
  const key = categoryName.toLowerCase();
  if (key.includes('skill')) {
    return 'Skills are present; prioritize the ones that demonstrate depth and recent usage.';
  }
  if (key.includes('experience')) {
    return 'Experience section is strong—ensure each role includes scope, scale, and results.';
  }
  if (key.includes('summary')) {
    return 'Summary sets the tone; keep it concise and packed with high-impact metrics.';
  }
  if (key.includes('keyword')) {
    return 'Optimize phrasing for ATS by using standard titles and spelling out acronyms once.';
  }
  return 'Keep the section concise, metric-driven, and easy for recruiters to scan quickly.';
}

function neutralizePrestigeBias(text = '') {
  if (!text) {
    return '';
  }
  let cleaned = text;
  cleaned = cleaned.replace(/lacks? (?:a )?prestig(?:e|ious) (?:degree|education)/gi, 'Lean into measurable achievements, certifications, and leadership scope to prove readiness.');
  cleaned = cleaned.replace(/no (?:ivy[- ]league|top[- ]tier) degree/gi, 'Highlight continuing education, executive programs, or credentials tied to the role.');
  return cleaned.trim();
}

function enhanceSuggestionSpecificity(text = '') {
  if (!text) {
    return '';
  }
  let updated = text.trim();
  const analyticsToolPattern = /(add|list|highlight)[^\.]{0,80}(tools|software)[^\.]{0,80}(data|analytics)/i;
  if (analyticsToolPattern.test(updated)) {
    updated = `${updated.replace(/\.*$/, '')}. Examples: Tableau, Power BI, SQL, Python, Snowflake, Looker.`;
  }
  return updated;
}

function sanitizeCriticalKeywords(keywords, jobSource, resumeSource) {
  let list = Array.isArray(keywords) ? keywords : [];
  list = list
    .map(item => typeof item === 'string' ? item.trim() : '')
    .filter(item => item.length > 0);

  if (list.length < 5) {
    const supplements = generateCriticalKeywords(jobSource, resumeSource);
    supplements.forEach(keyword => {
      if (list.length < 15 && !list.includes(keyword)) {
        list.push(keyword);
      }
    });
  }

  return list.slice(0, 15);
}

function generateCriticalKeywords(jobDescription = '', resumeText = '') {
  const source = `${jobDescription || ''}\n${resumeText || ''}`;
  const lowerSource = source.toLowerCase();
  const keywords = [];

  const addKeyword = phrase => {
    const canonical = canonicalizeKeywordPhrase(phrase);
    if (canonical && !keywords.includes(canonical)) {
      keywords.push(canonical);
    }
  };

  CRITICAL_KEYWORD_LIBRARY.forEach(entry => {
    const hintMatch = (entry.hints || []).some(hint => lowerSource.includes(hint.toLowerCase()));
    const patternMatch = (entry.patterns || []).some(pattern => pattern.test(source));
    if (hintMatch || patternMatch) {
      addKeyword(entry.phrase);
    }
  });

  KEYWORD_SYNONYM_PATTERNS.forEach(mapping => {
    if (mapping.regex.test(source)) {
      addKeyword(mapping.phrase);
    }
  });

  extractKeyPhrasesFromText(jobDescription || resumeText, 25).forEach(addKeyword);
  DEFAULT_CRITICAL_KEYWORDS.forEach(addKeyword);

  return keywords.slice(0, 20);
}

function extractKeyPhrasesFromText(text = '', limit = 15) {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const tokens = text.toLowerCase().match(/\b[a-z0-9+]{2,}\b/g);
  if (!tokens) {
    return [];
  }

  const processed = tokens.map(token => ({
    token,
    keep: shouldKeepCriticalToken(token)
  }));

  const counts = {};
  const addPhrase = phraseTokens => {
    const phrase = phraseTokens.join(' ');
    counts[phrase] = (counts[phrase] || 0) + 1;
  };

  for (let i = 0; i < processed.length - 1; i++) {
    const first = processed[i];
    const second = processed[i + 1];
    if (first.keep && second.keep) {
      addPhrase([first.token, second.token]);
    }
    if (i < processed.length - 2) {
      const third = processed[i + 2];
      if (first.keep && second.keep && third.keep) {
        addPhrase([first.token, second.token, third.token]);
      }
    }
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)
    .map(([phrase]) => canonicalizeKeywordPhrase(phrase))
    .filter(Boolean)
    .slice(0, limit);
}

function shouldKeepCriticalToken(token) {
  if (!token) {
    return false;
  }
  if (CRITICAL_KEYWORD_STOP_WORDS.has(token) || CRITICAL_GENERIC_TERMS.has(token)) {
    return false;
  }
  if (CRITICAL_SHORT_TOKENS.has(token)) {
    return true;
  }
  return token.length >= 4;
}

function canonicalizeKeywordPhrase(raw = '') {
  if (!raw) {
    return '';
  }
  const trimmed = raw.trim();
  if (!trimmed) {
    return '';
  }
  for (const mapping of KEYWORD_SYNONYM_PATTERNS) {
    if (mapping.regex.test(trimmed)) {
      return mapping.phrase;
    }
  }
  return toTitleCase(trimmed.replace(/\s+/g, ' '));
}

function toTitleCase(text = '') {
  return text.toLowerCase().replace(/\b([a-z])/g, (_, char) => char.toUpperCase());
}

function escapeRegex(value = '') {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function countBulletSymbols(text = '') {
  if (!text || typeof text !== 'string') {
    return 0;
  }

  const normalized = normalizeBulletGlyphs(text);
  const lineStartPattern = /(?:^|[\r\n\u2028\u2029])\s*(?:[-–—*•●◦▪▫‣·‧○◉◎▸▹►✦✧]|\d+\.|[a-zA-Z]\))/g;
  const bulletCharPattern = createBulletRegex('g');

  const lineMatches = normalized.match(lineStartPattern) || [];
  const inlineMatches = normalized.match(bulletCharPattern) || [];
  const explicitCount = lineMatches.length || inlineMatches.length || 0;

  if (explicitCount >= 4) {
    return explicitCount;
  }

  const implicitCount = estimateImplicitBulletCount(normalized);
  return implicitCount || explicitCount;
}

function normalizeBulletGlyphs(text) {
  if (!text) {
    return '';
  }

  return text
    .replace(/â€¢|Ã¢â‚¬Â¢|Â·|·|∙|⋅|●|◦|▪|▫|▪️|▫️|||▪︎|‣|•|\u2022|\u25cf|\u25cb|\u25a0|\u25aa|\u25ab|\u2219|\uf0b7|➤|➔|➣|➥|➧|➨|➩|➪|➫|➬|➭|➮|➯|➱|➲|➳|➵|➸|➼|➽|➾|▶|►|▸|▹/gi, '•')
    .replace(/â€“|â€”|–|—|−/g, '-')
    .replace(/•\s*(?=[A-Za-z])/g, '• ');
}

function estimateImplicitBulletCount(text = '') {
  if (!text) {
    return 0;
  }

  const lines = text.split(/(?:\r?\n|\u2028|\u2029)/).map(line => line.trim()).filter(Boolean);
  if (!lines.length) {
    return 0;
  }

  const actionVerbPattern = /^(grew|improved|increased|reduced|led|managed|oversaw|designed|built|launched|developed|implemented|optimized|delivered|drove|owned|created|introduced|executed|achieved|coordinated|partnered|spearheaded|streamlined|built|directed|orchestrated|transformed|modernized|enhanced|boosted)/i;
  let implicitCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.length > 220) {
      continue;
    }

    const looksLikeBullet =
      actionVerbPattern.test(line) ||
      /[0-9%$+]/.test(line) ||
      line.split(/\s+/).length <= 14;

    if (!looksLikeBullet) {
      continue;
    }

    const prevLine = lines[i - 1] || '';
    const separatedFromParagraph = !prevLine || prevLine.length > 220 || /[:.;!?]$/.test(prevLine);

    if (separatedFromParagraph) {
      implicitCount += 1;
    }
  }

  return implicitCount >= 4 ? implicitCount : 0;
}

function enforceResumeCompleteness(analysis, resumeText = '', structureSignals = null) {
  const text = typeof resumeText === 'string' ? resumeText : '';
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const hasEmail = /@/.test(text);
  const hasPhone = /\b\d{3}[-.\s]*\d{3}[-.\s]*\d{4}\b/.test(text);
  const hasSections = structureSignals
    ? ['summary', 'experience', 'skills', 'education'].some(section =>
        structureSignals.headings?.some(heading => heading.toLowerCase().includes(section))
      )
    : /(experience|summary|education|skills)/i.test(text);
  const bulletCount = structureSignals?.bulletLines ?? countBulletSymbols(text);

  let penalty = 0;
  const tips = [];

  if (wordCount < 150) {
    penalty += 30;
    tips.push('Expand the resume beyond a short paragraph—target at least 400 words.');
  } else if (wordCount < 250) {
    penalty += 20;
    tips.push('Add more depth; hiring teams expect multi-section resumes.');
  }

  if (!hasEmail || !hasPhone) {
    penalty += 8;
    tips.push('Include both an email address and phone number in the header.');
  }

  if (!hasSections) {
    penalty += 10;
    tips.push('Add clear headings such as Summary, Experience, Skills, and Education.');
  }

  if (bulletCount < 3) {
    penalty += 7;
    tips.push('Use bullet points to describe achievements—paragraphs alone are hard to scan.');
  }

  if (!penalty) {
    return analysis;
  }

  if (!Array.isArray(analysis.extraInsights)) {
    analysis.extraInsights = [];
  }

  analysis.extraInsights.unshift({
    title: 'Resume Completeness',
    status: penalty >= 25 ? 'critical' : 'warning',
    details: 'Detected missing fundamentals (length, contact info, standard sections, or bullet formatting).',
    tips: tips.length ? tips : ['Add standard resume sections and contact details before running another analysis.']
  });

  return analysis;
}

function applyPositiveSignalBoost(analysis, resumeText = '', structureSignals = null) {
  if (!analysis || typeof analysis !== 'object') {
    return analysis;
  }

  const signals = detectPositiveSignals(resumeText);
  const structureHighlights = [];
  if (structureSignals?.bulletLines >= 10) {
    structureHighlights.push('High number of concise bullets detected.');
  }
  if (structureSignals?.timelineEntries >= 3) {
    structureHighlights.push('Career timeline consistently documented.');
  }

  const { boost, highlights } = calculatePositiveBoost(signals);
  const mergedHighlights = [...highlights, ...structureHighlights].filter(Boolean);
  if (!boost) {
    return analysis;
  }

  const baseScore = typeof analysis.overallScore === 'number' ? analysis.overallScore : 75;
  analysis.overallScore = Math.min(100, baseScore + boost);

  if (!Array.isArray(analysis.extraInsights)) {
    analysis.extraInsights = [];
  }

  const executiveInsight = buildExecutiveStrengthInsight(signals, boost, mergedHighlights);
  if (executiveInsight) {
    const existingIndex = analysis.extraInsights.findIndex(item => item && item.title === executiveInsight.title);
    if (existingIndex >= 0) {
      analysis.extraInsights[existingIndex] = executiveInsight;
    } else {
      analysis.extraInsights.push(executiveInsight);
    }
  }

  return analysis;
}

function detectPositiveSignals(resumeText = '') {
  const text = typeof resumeText === 'string' ? resumeText : '';
  const metricsRegex = /\b\$?\d{1,3}(?:[,\.\d]{0,6})?(?:%|\+|x| million|bn|m)?\b/gi;
  const leadershipRegex = /\b(led|lead|leading|oversaw|managed|supervised|directed|orchestrated|spearheaded)\b/gi;
  const executiveRegex = /\b(vice president|vp|executive director|chief|c[- ]level|head of|senior director)\b/gi;
  const innovationRegex = /\b(ai|machine learning|ml|automation|analytics platform|data strategy|digital transformation)\b/gi;

  return {
    metricsCount: (text.match(metricsRegex) || []).length,
    leadershipMentions: (text.match(leadershipRegex) || []).length,
    executiveMentions: (text.match(executiveRegex) || []).length,
    innovationMentions: (text.match(innovationRegex) || []).length
  };
}

function calculatePositiveBoost(signals) {
  if (!signals) {
    return { boost: 0, highlights: [] };
  }

  let boost = 0;
  const highlights = [];

  if (signals.metricsCount >= 10) {
    boost += 4;
    highlights.push('Heavy quantification throughout the resume.');
  } else if (signals.metricsCount >= 5) {
    boost += 2;
    highlights.push('Consistent use of metrics.');
  }

  if (signals.leadershipMentions >= 6) {
    boost += 3;
    highlights.push('Multiple leadership verbs detected.');
  } else if (signals.leadershipMentions >= 3) {
    boost += 1;
    highlights.push('Clear leadership language present.');
  }

  if (signals.executiveMentions >= 3) {
    boost += 2;
    highlights.push('Executive-level titles called out.');
  } else if (signals.executiveMentions >= 1) {
    boost += 1;
    highlights.push('Senior scope highlighted.');
  }

  if (signals.innovationMentions >= 4) {
    boost += 2;
    highlights.push('Innovation/AI initiatives emphasized.');
  } else if (signals.innovationMentions >= 2) {
    boost += 1;
    highlights.push('Digital transformation themes identified.');
  }

  return {
    boost: Math.min(10, boost),
    highlights
  };
}

function buildExecutiveStrengthInsight(signals, boost, highlights = []) {
  if (!boost) {
    return null;
  }

  const detailParts = [];
  if (signals.metricsCount) detailParts.push(`${signals.metricsCount} quantified wins`);
  if (signals.leadershipMentions) detailParts.push(`${signals.leadershipMentions} leadership cues`);
  if (signals.innovationMentions) detailParts.push(`${signals.innovationMentions} innovation mentions`);

  const details = detailParts.length
    ? `Detected ${detailParts.join(', ')}. Score boosted +${boost} to reflect executive impact.`
    : `Score boosted +${boost} to reflect strong executive signaling.`;

  const tips = highlights.length ? highlights : ['Keep spotlighting measurable outcomes, timelines, and strategic initiatives.'];

  return {
    title: 'Executive Strengths',
    status: 'good',
    details,
    tips
  };
}

function createStandardPrompt(resumeText) {
  return `You are an executive resume analyst creating JSON output only. Provide recruiter-ready guidance, quantified examples, and interview prep material that ties directly to the resume. When well-known employers or industries are referenced, add context pulled from publicly available knowledge (no hallucinated facts). If information is missing, infer sensible, clearly labeled best guesses using the resume cues.

Resume Text:
"""
${resumeText}
"""

Return JSON with these keys:
- overallScore: number 0-100
- categories: array of objects { name, status, score, feedback, suggestions[] } summarizing summary/experience/skills/etc
- companyInsights: 1-3 entries that combine public intel about the company(s) cited in the resume with specific actions the candidate can take; each entry must include fields { source: "resume"|"jobDescription"|"public knowledge", insight, action, link }
- extraInsights: array of themed cards { title, status, details, tips[] }
- criticalKeywords: 15 phrases that show the most ATS-relevant language to mirror
- storyBuilder: object used for interview practice

storyBuilder requirements:
- Before generating any storyBuilder content, mine the resume for actual employers, job titles, business units, systems, KPIs, budgets, customer segments, and quantified impacts. Use those concrete facts verbatim; never talk about contact information, resume formatting, or generic skills in this section.
1. starStories: always return four entries based strictly on resume achievements that map to real responsibilities (process improvement, lending strategy, automation, training, customer impact, risk, change management, etc.). Each question must read like an interviewer prompt for the candidate’s target role and cite the relevant domain (e.g., "How did you automate credit decisioning for the Small Business Lending team at XYZ?"). Every entry must include: (a) a unique behavioral question tied to a resume role or program; (b) Situation with two concise sentences naming the employer/team and business context with KPIs or constraints; (c) Task describing the ownership statement in first person; (d) Action listing two to three bold steps with action verbs and tools used; (e) Result with quantified or clearly stated impact tied to resume metrics; (f) Sample Answer containing a four-to-five sentence first-person STAR response that could be spoken verbatim. Use the exact format "Question: ... || Situation: ... || Task: ... || Action: ... || Result: ... || Sample Answer: ..." and vary question stems so none of the four are identical.
2. tellMeIntro: 1-2 sentences summarizing persona + impact + domains.
3. tailoredStrengths: up to 10 bullet phrases, each rooted in resume evidence.
4. leadershipStories: up to 3 anecdotes highlighting teams led, scope, and tangible results.
5. weaknessMitigation: object { weakness, mitigation } offering a candid gap plus concrete remediation plan.
6. elevatorPitch: 60-90 second script referencing hard numbers and future value.

Make every section specific to the resume text, with no placeholder language. JSON only—no markdown, no commentary.`;
}

function createJobMatchingPrompt(resumeText, jobDescription) {
  return `You are analyzing a resume against the provided job description. Produce JSON only using the same schema (overallScore, categories, companyInsights, extraInsights, criticalKeywords, storyBuilder). Explicitly align every section to the role requirements, highlighting keyword gaps, ATS considerations, and interviewer talking points.

CompanyInsights instructions:
- Provide 2-3 entries.
- Each entry must cite verifiable public intel about the hiring company or industry (mission, product launches, risk posture, customer profile, recent news) AND tie it to how this candidate can help.
- Include an action step and, when possible, a reputable link.
- Maintain { source, insight, action, link } structure.

StoryBuilder instructions:
- First, identify the resume achievements, employers, teams, and metrics that line up with the job description’s responsibilities, KPIs, tool stacks, and stakeholder groups. Use those exact data points in every storyBuilder field; no contact-info or formatting talk.
- starStories must contain four question/answer entries derived from resume achievements that map directly to the job requirements. For each entry craft a unique interviewer-style question that explicitly references a responsibility, KPI, or deliverable from the job description (for example, “How did you lead the separation services rollout for the Global HR Ops team?”). Use the exact format "Question: ... || Situation: ... || Task: ... || Action: ... || Result: ... || Sample Answer: ...". Fill Situation/Task/Action/Result with concrete resume evidence (titles, teams, systems, budgets, tools, KPIs) and mention the job requirement you are addressing. Ensure the Sample Answer is a cohesive four-to-five sentence first-person STAR narrative that can be spoken verbatim. Prioritize scenarios that mirror the job description themes, do not fabricate facts, and never generate STAR stories about contact info, skills lists, or formatting feedback.
- TellMeIntro, tailoredStrengths, leadershipStories, weaknessMitigation, and elevatorPitch follow the same requirements as in the standard prompt but should reference both the resume proof points and the job description priorities.

Resume Text:
"""
${resumeText}
"""

Job Description:
"""
${jobDescription}
"""`;
}

function createAtsSignals(resumeText, jobDescription, structureSignals = null) {
  const rawResume = typeof resumeText === 'string' ? resumeText : '';
  const rawJob = typeof jobDescription === 'string' ? jobDescription : '';
  const safeResume = rawResume.toLowerCase();
  const safeJob = rawJob.toLowerCase();
  const hasJobDescription = rawJob.trim().length > 0;
  const signals = {
    tablesDetected: /<table|\btable\b/i.test(resumeText),
    imagesDetected: /<img|\.(png|jpg|jpeg|gif)\b/i.test(resumeText),
    columnsDetected: /column/i.test(resumeText),
    pdfIndicators: /adobe|acrobat|pdf/i.test(resumeText),
    keywordOverlap: hasJobDescription ? compareJobKeywords(safeJob, safeResume) : 0,
    metricsCount: (rawResume.match(/\b\d{1,3}(?:[,\.]\d{3})*(?:%|\+|x)?/gi) || []).length,
    bulletSymbols: countBulletSymbols(rawResume),
    uppercaseSections: (rawResume.match(/\n[A-Z\s]{6,}\n/g) || []).length,
    hasJobDescription,
    structure: structureSignals || deriveResumeStructureSignals(rawResume)
  };
  return signals;
}

function buildAtsWarnings(signals) {
  const warnings = [];
  if (signals.tablesDetected) warnings.push('Tables detected—ATS may skip table content.');
  if (signals.imagesDetected) warnings.push('Images/logos offer no text for ATS. Replace with plain text.');
  if (signals.columnsDetected) warnings.push('Multi-column layouts can scramble reading order.');
  if (signals.hasJobDescription && signals.keywordOverlap < 0.3) {
    warnings.push('Fewer than 30% of job keywords echoed in resume.');
  }
  if (signals.metricsCount < 3) warnings.push('Add more quantified achievements (numbers or KPIs).');
  if (signals.bulletSymbols < 4) warnings.push('Use bullet points for scannability (4+ recommended).');
  if (signals.structure) {
    if (signals.structure.missingCoreSections?.length) {
      warnings.push(`Add clear headings for ${signals.structure.missingCoreSections.join(', ')}.`);
    }
    if ((signals.structure.timelineEntries || 0) < 2 && (signals.structure.standaloneYears || 0) < 2) {
      warnings.push('List date ranges (e.g., 2019–2024) beside each role to show career continuity.');
    }
    if ((signals.structure.denseParagraphs || 0) >= 3 && (signals.structure.bulletLines || 0) < 5) {
      warnings.push('Break dense paragraphs into shorter bullet points for readability.');
    }
  }
  return warnings;
}

function generateAtsInsightCard(signals) {
  if (!signals) {
    return null;
  }

  const hasJob = Boolean(signals.hasJobDescription);
  const detailParts = [];
  if (hasJob) {
    detailParts.push(`Keyword overlap ${(signals.keywordOverlap * 100).toFixed(0)}%`);
  }
  detailParts.push(`metrics ${signals.metricsCount}`);
  detailParts.push(`bullets ${signals.bulletSymbols}`);
  if (signals.structure?.headings?.length) {
    detailParts.push(`sections ${signals.structure.headings.length}`);
  }

  let status;
  if (hasJob) {
    status = signals.keywordOverlap >= 0.45 ? 'good' : signals.keywordOverlap >= 0.25 ? 'warning' : 'critical';
  } else if (signals.metricsCount >= 3 && signals.bulletSymbols >= 4) {
    status = 'good';
  } else if (signals.metricsCount >= 2 || signals.bulletSymbols >= 2) {
    status = 'warning';
  } else {
    status = 'critical';
  }

  return {
    title: 'ATS Diagnostics',
    status,
    details: detailParts.join(', '),
    tips: buildAtsWarnings(signals)
  };
}

async function hydrateJobDescription(rawInput = '') {
  const trimmed = (rawInput || '').trim();
  if (!trimmed) {
    return { text: '', source: 'none', fetchedFrom: null, error: null };
  }

  if (!isProbablyUrl(trimmed)) {
    return { text: trimmed, source: 'manual', fetchedFrom: null, error: null };
  }

  const { primaryUrl, fallbackUrl } = resolveLinkedInJobUrls(trimmed);

  try {
    const html = await fetchJobPostingSource(primaryUrl);
    if (!html) {
      return { text: '', source: 'url', fetchedFrom: primaryUrl, error: 'Job page returned no content.' };
    }
    const extracted = extractLinkedInJobDescription(html);
    if (extracted) {
      return { text: extracted, source: 'linkedin', fetchedFrom: primaryUrl, error: null };
    }

    if (fallbackUrl) {
      const fallbackHtml = await fetchJobPostingSource(fallbackUrl);
      if (fallbackHtml) {
        const fallbackExtracted = extractLinkedInJobDescription(fallbackHtml);
        if (fallbackExtracted) {
          return { text: fallbackExtracted, source: 'linkedin', fetchedFrom: fallbackUrl, error: null };
        }
      }
    }
    return { text: '', source: 'url', fetchedFrom: primaryUrl, error: 'Unable to extract description from job page.' };
  } catch (error) {
    console.warn('Job description hydration failed:', error);
    return {
      text: '',
      source: 'url',
      fetchedFrom: fallbackUrl || primaryUrl,
      error: error?.message || 'Failed to fetch job description.'
    };
  }
}

function isProbablyUrl(value = '') {
  if (!value) {
    return false;
  }
  return /^https?:\/\//i.test(value.trim());
}

function resolveLinkedInJobUrls(rawUrl = '') {
  const trimmed = (rawUrl || '').trim();
  const defaults = { primaryUrl: trimmed, fallbackUrl: null };
  if (!trimmed) {
    return defaults;
  }

  let parsed;
  try {
    parsed = new URL(trimmed);
  } catch (error) {
    return defaults;
  }

  const hostname = parsed.hostname?.toLowerCase() || '';
  const isLinkedIn = hostname.includes('linkedin.com');
  if (!isLinkedIn) {
    return defaults;
  }

  const extractJobId = () => {
    if (parsed.searchParams.has('currentJobId')) {
      return parsed.searchParams.get('currentJobId');
    }
    if (parsed.searchParams.has('jobId')) {
      return parsed.searchParams.get('jobId');
    }
    if (parsed.searchParams.has('jobIdList')) {
      return (parsed.searchParams.get('jobIdList') || '').split(',')[0];
    }
    return null;
  };

  const pathname = parsed.pathname || '';
  const jobId = extractJobId();

  if (pathname.includes('/jobs/collections/') && jobId) {
    const canonicalJobUrl = `https://www.linkedin.com/jobs/view/${jobId}`;
    return { primaryUrl: canonicalJobUrl, fallbackUrl: trimmed };
  }

  if (pathname.startsWith('/jobs/search/') && jobId) {
    const canonicalJobUrl = `https://www.linkedin.com/jobs/view/${jobId}`;
    return { primaryUrl: canonicalJobUrl, fallbackUrl: trimmed };
  }

  if (pathname.startsWith('/jobs/view/') && !pathname.endsWith('/')) {
    return { primaryUrl: `${parsed.origin}${pathname}/`, fallbackUrl: trimmed };
  }

  return defaults;
}

async function fetchJobPostingSource(jobUrl) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(jobUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`Job page responded with status ${response.status}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function extractLinkedInJobDescription(html = '') {
  if (!html) {
    return '';
  }

  const markupMatch = html.match(/<div[^>]+class="show-more-less-html__markup[^>]*>([\s\S]*?)<\/div>/i);
  if (markupMatch) {
    const cleaned = cleanLinkedInMarkup(markupMatch[1]);
    if (cleaned.length > 40) {
      return cleaned;
    }
  }

  const fallbackMarkupPatterns = [
    /<div[^>]+data-test="job-description-text"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]+data-test="job-description__text"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]+class="decorated-job-posting__details"[^>]*>([\s\S]*?)<\/div>/i
  ];
  for (const pattern of fallbackMarkupPatterns) {
    const match = html.match(pattern);
    if (match) {
      const cleaned = cleanLinkedInMarkup(match[1]);
      if (cleaned.length > 40) {
        return cleaned;
      }
    }
  }

  const ldJsonMatches = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const match of ldJsonMatches) {
    const description = extractDescriptionFromJsonString(match[1]);
    if (description) {
      return description;
    }
  }

  const nextDataMatch = html.match(/<script type="application\/json" id="__NEXT_DATA__">([\s\S]*?)<\/script>/);
  if (nextDataMatch) {
    const description = extractDescriptionFromJsonString(nextDataMatch[1]);
    if (description) {
      return description;
    }
  }

  const decoratedMatches = [...html.matchAll(/<code[^>]+id="decoratedJobPostingModule[^"]*"[^>]*>([\s\S]*?)<\/code>/gi)];
  for (const match of decoratedMatches) {
    const decoded = decodeHtmlEntities(match[1]);
    const description = extractDescriptionFromJsonString(decoded);
    if (description) {
      return description;
    }
  }

  const inlineJsonMatch = html.match(/"sectionDescription"\s*:\s*\{\s*"text"\s*:\s*"([\s\S]*?)"\s*\}/i);
  if (inlineJsonMatch) {
    const text = decodeHtmlEntities(inlineJsonMatch[1]).replace(/\\n/g, ' ').replace(/\\t/g, ' ');
    const cleaned = stripHtmlTags(text).trim();
    if (cleaned.length > 80) {
      return cleaned;
    }
  }

  return '';
}

function cleanLinkedInMarkup(markup = '') {
  if (!markup) {
    return '';
  }
  const withoutHidden = markup.replace(/<span class="visually-hidden">[\s\S]*?<\/span>/gi, '');
  return decodeHtmlEntities(stripHtmlTags(withoutHidden)).trim();
}

function extractDescriptionFromJson(payload, depth = 0) {
  if (!payload || depth > 6) {
    return '';
  }

  if (typeof payload === 'string') {
    const cleaned = decodeHtmlEntities(stripHtmlTags(payload));
    if (cleaned.length > 120) {
      return cleaned;
    }
    return '';
  }

  if (Array.isArray(payload)) {
    for (const item of payload) {
      const found = extractDescriptionFromJson(item, depth + 1);
      if (found) {
        return found;
      }
    }
    return '';
  }

  if (typeof payload === 'object') {
    if (typeof payload.description === 'string' && payload.description.trim().length > 80) {
      return decodeHtmlEntities(stripHtmlTags(payload.description));
    }
    if (typeof payload.body === 'string' && payload.body.trim().length > 80) {
      return decodeHtmlEntities(stripHtmlTags(payload.body));
    }
    for (const key of Object.keys(payload)) {
      const found = extractDescriptionFromJson(payload[key], depth + 1);
      if (found) {
        return found;
      }
    }
  }

  return '';
}

function stripHtmlTags(html = '') {
  return html.replace(/<[^>]+>/g, ' ');
}

function decodeHtmlEntities(text = '') {
  if (!text) {
    return '';
  }
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#xA;/gi, '\n')
    .replace(/&#x0A;/gi, '\n')
    .replace(/&#10;/gi, '\n')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractDescriptionFromJsonString(raw = '') {
  if (!raw) {
    return '';
  }
  const parsed = parseJsonSafe(raw);
  if (!parsed) {
    return '';
  }
  return extractDescriptionFromJson(parsed);
}

function parseJsonSafe(raw = '') {
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    try {
      return JSON.parse(raw.replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
    } catch (innerError) {
      return null;
    }
  }
}

const CORE_RESUME_SECTIONS = ['Summary', 'Experience', 'Skills', 'Education'];
const SECTION_PATTERNS = [
  { label: 'Summary', regex: /^(?:professional\s+)?summary\b/i },
  { label: 'Experience', regex: /^(?:work|professional)?\s*experience\b/i },
  { label: 'Skills', regex: /^skills\b|^technical skills\b|^core competencies\b/i },
  { label: 'Education', regex: /^education\b|^academics\b/i },
  { label: 'Certifications', regex: /^certifications?\b|^licenses?\b/i },
  { label: 'Projects', regex: /^projects?\b|^case studies\b/i },
  { label: 'Leadership', regex: /^leadership\b|^management highlights\b/i },
  { label: 'Awards', regex: /^awards?\b|^recognition\b/i },
  { label: 'Volunteer', regex: /^volunteer\b|^community\b/i }
];
const INLINE_HEADING_SYNONYMS = {
  Summary: ['SUMMARY', 'SUMMARY STATEMENT', 'PROFESSIONAL SUMMARY', 'EXECUTIVE SUMMARY', 'PROFILE', 'OVERVIEW'],
  Experience: ['EXPERIENCE', 'WORK EXPERIENCE', 'PROFESSIONAL EXPERIENCE', 'CAREER EXPERIENCE', 'EMPLOYMENT HISTORY'],
  Skills: ['SKILLS', 'TECHNICAL SKILLS', 'CORE COMPETENCIES', 'AREAS OF EXPERTISE', 'KEY SKILLS', 'SKILLS & TOOLS'],
  Education: ['EDUCATION', 'ACADEMICS', 'ACADEMIC HISTORY', 'TRAINING & EDUCATION', 'TRAINING AND EDUCATION', 'EDUCATION & CERTIFICATIONS']
};
const MONTH_REGEX = '(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)';

function normalizeResumeContent(text = '') {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let normalized = text
    .replace(/\u00A0/g, ' ')
    .replace(/\u200B/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[\t]+/g, ' ')
    .replace(/\s+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n');

  normalized = normalized.replace(/ {2,}/g, ' ').trim();
  return normalizeBulletGlyphs(normalized);
}

function deriveResumeStructureSignals(text = '') {
  if (!text) {
    return {
      headings: [],
      missingCoreSections: [...CORE_RESUME_SECTIONS],
      bulletLines: 0,
      actionBulletLines: 0,
      timelineEntries: 0,
      standaloneYears: 0,
      denseParagraphs: 0
    };
  }

  const normalized = normalizeResumeContent(text);
  const bulletInjectionRegex = createBulletRegex('g');
  const bulletPrimed = normalized.replace(bulletInjectionRegex, match => `\n${match}`);
  const structureFriendly = bulletPrimed
    .replace(/\s{2,}(?=[A-Z0-9(])/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();

  const lines = structureFriendly.split(/\n+/).map(line => line.trim()).filter(Boolean);
  const headingsSet = new Set();
  lines.forEach(line => {
    SECTION_PATTERNS.forEach(pattern => {
      if (pattern.regex.test(line)) {
        headingsSet.add(pattern.label);
      }
    });
  });

  if (headingsSet.size < CORE_RESUME_SECTIONS.length) {
    const uppercaseText = structureFriendly.toUpperCase();
    Object.entries(INLINE_HEADING_SYNONYMS).forEach(([label, synonyms]) => {
      if (headingsSet.has(label)) {
        return;
      }
      const found = synonyms.some(keyword => {
        const pattern = new RegExp(`(?:^|[\n\r\s\-\|:/])${escapeRegex(keyword)}(?:$|[\n\r\s\-\|:/])`, 'i');
        return pattern.test(uppercaseText);
      });
      if (found) {
        headingsSet.add(label);
      }
    });
  }

  const bulletLinePattern = new RegExp(`^[-–—*${BULLET_GLYPH_SOURCE}]`);
  const bulletLinesFromStarts = lines.filter(line => bulletLinePattern.test(line)).length;
  const actionVerbPattern = /^(grew|improved|increased|reduced|led|managed|oversaw|designed|built|launched|developed|implemented|optimized|delivered|drove|owned|created|introduced|executed|achieved|coordinated|partnered|spearheaded|streamlined|directed|orchestrated|transformed|modernized|enhanced|boosted)/i;
  const actionBulletLinesFromStarts = lines.filter(line => {
    const sanitized = line.replace(/^[-–—*•●◦▪▫‣·‧○◉◎▸▹►✦✧➤➔➣➥➧➨➩➪➫➬➭➮➯➱➲➳➵➸➼➽➾\d\.\)\s]*/, '');
    return actionVerbPattern.test(sanitized);
  }).length;

  const inlineBulletSplitter = createBulletRegex('g');
  const inlineBulletSegments = structureFriendly.split(inlineBulletSplitter).slice(1).map(segment => segment.trim()).filter(Boolean);
  const inlineBulletCount = inlineBulletSegments.length;
  const inlineActionBulletCount = inlineBulletSegments.filter(segment => actionVerbPattern.test(segment)).length;

  const bulletLines = Math.max(bulletLinesFromStarts, inlineBulletCount);
  const actionBulletLines = Math.max(actionBulletLinesFromStarts, inlineActionBulletCount);

  const monthRangePattern = new RegExp(`\b${MONTH_REGEX}\.?(?:\s+|\s*,\s*)?(?:19|20)?\d{2}\s*(?:-|–|—|to)\s*(?:present|current|${MONTH_REGEX}\.?(?:\s+|\s*,\s*)?(?:19|20)?\d{2})`, 'gi');
  const yearRangePattern = /\b(?:19|20)\d{2}\s*(?:-|–|—|to)\s*(?:present|current|(?:19|20)\d{2})\b/gi;
  const timelineEntries = (normalized.match(monthRangePattern) || []).length + (normalized.match(yearRangePattern) || []).length;
  const standaloneYears = (normalized.match(/\b(?:19|20)\d{2}\b/g) || []).length;
  const denseParagraphs = lines.filter(line => line.length > 220).length;

  const missingCoreSections = CORE_RESUME_SECTIONS.filter(section => !headingsSet.has(section));

  return {
    headings: Array.from(headingsSet),
    missingCoreSections,
    bulletLines,
    actionBulletLines,
    timelineEntries,
    standaloneYears,
    denseParagraphs
  };
}

function generateStructureInsightCard(structureSignals) {
  if (!structureSignals) {
    return null;
  }

  const detailParts = [];
  detailParts.push(`${structureSignals.headings?.length || 0} section headings detected`);
  detailParts.push(`${structureSignals.bulletLines || 0} bullet-style lines`);
  const timelineCount = structureSignals.timelineEntries || structureSignals.standaloneYears || 0;
  detailParts.push(`${timelineCount} timeline references`);

  let status = 'good';
  if ((structureSignals.missingCoreSections?.length || 0) >= 2) {
    status = 'critical';
  } else if ((structureSignals.missingCoreSections?.length || 0) === 1) {
    status = 'warning';
  }

  const tips = [];
  if (structureSignals.missingCoreSections?.length) {
    tips.push(`Add clearly labeled ${structureSignals.missingCoreSections.join(', ')} section${structureSignals.missingCoreSections.length > 1 ? 's' : ''}.`);
  }
  if ((structureSignals.timelineEntries || 0) < 2 && (structureSignals.standaloneYears || 0) < 2) {
    tips.push('Include explicit date ranges (e.g., 2019–2024) for each role.');
  }
  if ((structureSignals.bulletLines || 0) < 6 && (structureSignals.denseParagraphs || 0) > 0) {
    tips.push('Break dense paragraphs into concise bullet points to highlight wins.');
  }
  if (!tips.length) {
    tips.push('Structure looks solid—keep consistent headings, bullets, and timelines.');
  }

  return {
    title: 'Structure & Timeline',
    status,
    details: detailParts.join(', '),
    tips
  };
}
