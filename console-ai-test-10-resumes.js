/* =====================================================================
   AI OPTIMIZATION TEST HARNESS — 30 varied resumes, 1 user
   ---------------------------------------------------------------------
   HOW TO USE:
   1. Sign in to the resume builder as the test user.
   2. Open DevTools console on resumebuilder.html.
   3. Paste this entire file and press Enter.
   4. It AUTO-RUNS all 30 fixtures and shows a floating panel with:
        - live progress
        - Expand All / Collapse All
        - per-resume full SENT + RECEIVED JSON
        - Copy full bundle to clipboard
        - Copy summary table
        - Download JSON

      Override with:
        await runAITestBatch()              // all 30
        await runAITestBatch({ n: 5 })      // first 5
        await runAITestBatch({ only: [2,5,11] })
        window.__AI_TEST_AUTORUN = false    // set BEFORE paste to skip auto-run

   5. Full log object is on window.__aiTestResults.

   SITE-WIDE BATCH (separate, opt-in, 12 endpoints):
        await runSiteTestBatch()
        await runSiteTestBatch({ only: ['analyze','tailor','generate-90d'] })
   Exercises: /api/ping, /api/builder/check-subscription, plan-count,
   analyze-resume, enhance-resume, optimize, tailor-to-jd, rescore,
   interview-prep-refresh, research-role, career-path, generate.
   Result on window.__siteTestResults.

   Variety coverage: seniority (intern → C-suite), 20+ industries,
   strong/mid/weak resumes, career-gap, pivoter, over-buzzwordy, metric-free,
   first-person-summary — all designed to stress-test the optimize prompt.
   Nothing is saved to Firestore. STATE is NOT mutated.
   ===================================================================== */
(function(){
  if (typeof API_BASE === 'undefined') {
    console.error('[AI-TEST] Run this on resumebuilder.html — API_BASE is not defined.');
    return;
  }

  // ---------- 10 resume fixtures (varied: roles, industries, seniority, styles) ----------
  const FIXTURES = [
    {
      label: 'VP Credit Risk (Financial Services, senior)',
      resume_data: {
        name: 'Jordan A. Mercer', current_title: 'Vice President, Credit Risk',
        email: 'jordan.mercer@example.com', phone: '(415) 555-0142',
        address: 'San Francisco, CA', linkedin: 'linkedin.com/in/jordanmercer',
        summary: 'Credit risk leader with 12+ years in global banking. Built scorecards managing $4B exposure across commercial and consumer portfolios.',
        skills: ['Credit Risk Modeling','SAS','Python','SQL','Basel III','CCAR','Portfolio Management','Stress Testing','Tableau','Stakeholder Engagement'],
        experience: [
          { title:'Vice President, Credit Risk', company:'Meridian Bank', location:'San Francisco, CA', dates:'2020 — Present',
            role_summary:'Lead 14-person risk analytics team covering $4B commercial loan book.',
            bullets:[
              'Rebuilt PD/LGD models reducing capital charge by $22M annually.',
              'Delivered CCAR submission 3 weeks ahead of schedule for 2 consecutive cycles.',
              'Implemented Python-based challenger models cutting model refresh cycle from 90 to 21 days.',
              'Partnered with Treasury to re-price $900M portfolio yielding +32bps NIM improvement.'
            ]},
          { title:'Senior Credit Risk Analyst', company:'Pacific Trust', location:'San Francisco, CA', dates:'2016 — 2020',
            bullets:[
              'Developed IFRS9 staging criteria adopted across 6 loan products.',
              'Automated monthly portfolio monitoring pack — 40 hours/mo saved.',
              'Presented quarterly risk reviews to Board Risk Committee.'
            ]},
        ],
        education:[{ degree:'MBA, Finance', school:'UC Berkeley Haas', year:'2016' },
                   { degree:'BS, Economics', school:'UCLA', year:'2012' }],
        certifications:[{ name:'FRM', issuer:'GARP', year:'2018' },{ name:'CFA Level II', issuer:'CFA Institute', year:'2017' }],
        achievements:['Promoted twice in 4 years','Keynote speaker, RMA Risk Conference 2024'],
      },
      job_description: 'Senior Vice President, Enterprise Credit Risk at a top-20 US bank. Must own model governance, CCAR/DFAST, and lead 20+ analysts. Python and SAS required. Strong executive communication; board-level presentations. Basel IV readiness a plus.',
      job_title: 'SVP, Enterprise Credit Risk', company: 'Horizon National Bank'
    },
    {
      label: 'Junior Data Analyst pivoting to Data Science',
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
          { title:'Analytics Intern', company:'NYU Stern Data Lab', location:'New York, NY', dates:'Summer 2022',
            bullets:['Cleaned 3M-row customer dataset for professor-led study.'] }
        ],
        education:[{ degree:'MS, Data Science (in progress)', school:'NYU', year:'2026' },
                   { degree:'BA, Economics', school:'Rutgers University', year:'2023' }],
        certifications:[{ name:'Google Data Analytics', issuer:'Coursera', year:'2023' }],
        achievements:['Dean\'s List 3 semesters'],
      },
      job_description: 'Junior Data Scientist — 1-3 yrs experience. Build ML models for customer churn. Python + SQL required. scikit-learn, feature engineering, stakeholder storytelling. MS in progress OK. Experimentation background a plus.',
      job_title: 'Junior Data Scientist', company: 'Lumen Analytics'
    },
    {
      label: 'Senior Software Engineer (backend, distributed systems)',
      resume_data: {
        name: 'Marcus T. Williams', current_title: 'Senior Software Engineer',
        email: 'marcus.t.williams@example.com', phone: '(512) 555-0177',
        address: 'Austin, TX', linkedin: 'linkedin.com/in/marcustwilliams',
        summary: 'Senior backend engineer specializing in distributed systems. 8 years of experience scaling Go and Java services to millions of requests per second.',
        skills: ['Go','Java','Kubernetes','gRPC','Kafka','PostgreSQL','Redis','AWS','Terraform','Observability'],
        experience: [
          { title:'Senior Software Engineer', company:'StreamForge', location:'Austin, TX', dates:'2022 — Present',
            role_summary:'Tech lead for the ingestion platform handling 2M events/sec.',
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
          { title:'Software Engineer', company:'PayRoute', location:'Austin, TX', dates:'2017 — 2019',
            bullets:['Built PCI-compliant token vault used by 3 downstream teams.'] }
        ],
        education:[{ degree:'BS, Computer Science', school:'University of Texas at Austin', year:'2017' }],
        certifications:[{ name:'AWS Solutions Architect Associate', issuer:'AWS', year:'2021' }],
        achievements:['Patent: distributed rate-limiting algorithm (US #11,xxx,xxx)'],
      },
      job_description: 'Staff Backend Engineer. Lead architecture for high-throughput payment processing platform. Strong Go required. Experience with Kafka, Kubernetes, gRPC. Must have led zero-downtime migrations. Mentorship expected. Startup pace.',
      job_title: 'Staff Backend Engineer', company: 'Orbit Payments'
    },
    {
      label: 'Registered Nurse pivoting to Clinical Informatics',
      resume_data: {
        name: 'Elena Ruiz, RN', current_title: 'Registered Nurse',
        email: 'elena.ruiz.rn@example.com', phone: '(602) 555-0166',
        address: 'Phoenix, AZ', linkedin: 'linkedin.com/in/elenaruiz-rn',
        summary: 'Registered nurse with 7 years of ICU experience and 2 years embedded in an Epic optimization workgroup. Seeking a clinical informatics role.',
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
        certifications:[{ name:'CCRN', issuer:'AACN', year:'2020' },{ name:'Epic Clinical Documentation Proficiency', issuer:'Epic', year:'2023' }],
        achievements:['Daisy Award 2022'],
      },
      job_description: 'Clinical Informatics Specialist — bridge IT and nursing. Epic certified or eligible. Build order sets, workflow design, training. RN required. Project management experience valued.',
      job_title: 'Clinical Informatics Specialist', company: 'Sonoran Health System'
    },
    {
      label: 'Product Manager (SaaS, mid-level)',
      resume_data: {
        name: 'Chris Nguyen', current_title: 'Product Manager',
        email: 'chris.nguyen@example.com', phone: '(206) 555-0133',
        address: 'Seattle, WA', linkedin: 'linkedin.com/in/chrisnguyen-pm',
        summary: 'B2B SaaS product manager with 5 years shipping collaboration tooling to 40k+ paying seats.',
        skills: ['Roadmapping','User Research','SQL','A/B Testing','Jira','Figma','OKRs','Pricing','Stakeholder Management','Go-to-Market'],
        experience: [
          { title:'Product Manager', company:'Coalesce Software', location:'Seattle, WA', dates:'2022 — Present',
            bullets:[
              'Owned pricing & packaging revamp — +$6.4M ARR in first 2 quarters post-launch.',
              'Shipped integrations with Slack, Teams, Zoom — attach rate 41% on new accounts.',
              'Ran 14 customer discovery interviews; informed 2026 roadmap themes.'
            ]},
          { title:'Associate Product Manager', company:'Coalesce Software', location:'Seattle, WA', dates:'2020 — 2022',
            bullets:['Ran onboarding experiments lifting activation 11pp.'] }
        ],
        education:[{ degree:'BA, Cognitive Science', school:'University of Washington', year:'2020' }],
        certifications:[],
        achievements:['Coalesce MVP Award 2024'],
      },
      job_description: 'Senior Product Manager, Monetization. Own pricing, packaging, and paywall experiments for PLG SaaS. Strong SQL. Growth or monetization experience required.',
      job_title: 'Senior Product Manager, Monetization', company: 'Relay Workspace'
    },
    {
      label: 'Marketing Director (consumer brand)',
      resume_data: {
        name: 'Sophia Bennett', current_title: 'Marketing Director',
        email: 'sophia.bennett@example.com', phone: '(312) 555-0155',
        address: 'Chicago, IL', linkedin: 'linkedin.com/in/sophiabennett',
        summary: 'Marketing leader driving full-funnel growth for DTC consumer brands. 11 years scaling paid + organic channels across beauty and wellness.',
        skills: ['Brand Strategy','Paid Social','SEO','Influencer','Lifecycle','Creative Direction','Shopify','Klaviyo','Team Leadership','Budget Management'],
        experience: [
          { title:'Marketing Director', company:'GlowLabs Beauty', location:'Chicago, IL', dates:'2021 — Present',
            role_summary:'Lead 9-person marketing org; own $14M annual budget.',
            bullets:[
              'Grew DTC revenue from $22M to $58M in 3 years.',
              'Relaunched brand identity; unaided awareness +12pp in core demo.',
              'Negotiated influencer contracts yielding 4.3x blended ROAS.'
            ]},
          { title:'Senior Growth Marketing Manager', company:'ClearSkin', location:'Chicago, IL', dates:'2018 — 2021',
            bullets:['Built paid social program from $0 to $4M annual spend at 3.1x ROAS.'] }
        ],
        education:[{ degree:'BBA, Marketing', school:'Indiana University Kelley', year:'2013' }],
        certifications:[{ name:'Google Ads', issuer:'Google', year:'2019' }],
        achievements:['AdAge 40 Under 40 — 2024'],
      },
      job_description: 'VP of Marketing at a Series C wellness brand. Own P&L across paid + organic. Must have scaled DTC brand past $50M. Strong leadership. Retail expansion a plus.',
      job_title: 'VP of Marketing', company: 'Ember Wellness'
    },
    {
      label: 'High school teacher pivoting to EdTech Customer Success',
      resume_data: {
        name: 'David Okafor', current_title: 'High School Math Teacher',
        email: 'd.okafor@example.com', phone: '(404) 555-0188',
        address: 'Atlanta, GA', linkedin: 'linkedin.com/in/davidokafor',
        summary: 'Math teacher with 6 years of classroom experience and 2 years piloting adaptive learning platforms district-wide. Pivoting to EdTech customer success.',
        skills: ['Training','Stakeholder Management','Curriculum Design','Data Analysis','Adaptive Learning','Google Classroom','Presentation','Project Management','Change Management','Relationship Building'],
        experience: [
          { title:'Math Teacher & EdTech Pilot Lead', company:'Fulton County Schools', location:'Atlanta, GA', dates:'2019 — Present',
            bullets:[
              'Led district pilot of IXL across 14 schools — usage ↑ 3.2× in year one.',
              'Trained 120 teachers on data-informed instruction with adaptive tools.',
              'Presented pilot outcomes to school board; secured $320k renewal.'
            ]}
        ],
        education:[{ degree:'MEd, Mathematics Education', school:'Georgia State University', year:'2019' },
                   { degree:'BS, Mathematics', school:'Morehouse College', year:'2017' }],
        certifications:[{ name:'Google Certified Educator Level 2', issuer:'Google', year:'2021' }],
        achievements:['Fulton County Teacher of the Year Nominee 2023'],
      },
      job_description: 'EdTech Customer Success Manager — support K-12 district deployments. Former educator strongly preferred. Strong communication. Travel up to 25%.',
      job_title: 'Customer Success Manager, K-12', company: 'BrightPath Learning'
    },
    {
      label: 'Mechanical Engineer (manufacturing, mid-level)',
      resume_data: {
        name: 'Hannah Koenig', current_title: 'Mechanical Engineer',
        email: 'hannah.koenig@example.com', phone: '(734) 555-0124',
        address: 'Ann Arbor, MI', linkedin: 'linkedin.com/in/hannahkoenig',
        summary: 'Mechanical engineer with 6 years in automotive manufacturing — tooling design, GD&T, and continuous improvement on high-volume lines.',
        skills: ['SolidWorks','GD&T','Six Sigma','Lean','Root Cause Analysis','FMEA','CNC','DFM','Project Management','Cross-Functional Collaboration'],
        experience: [
          { title:'Mechanical Engineer II', company:'LakeShore Automotive', location:'Ann Arbor, MI', dates:'2021 — Present',
            bullets:[
              'Redesigned fixture reducing cycle time 14% on 3 SKUs.',
              'Led root-cause investigation resolving $480k/yr recurring scrap issue.',
              'Managed capex project for new CNC cell ($1.2M, on-time & on-budget).'
            ]},
          { title:'Mechanical Engineer I', company:'LakeShore Automotive', location:'Ann Arbor, MI', dates:'2019 — 2021',
            bullets:['Supported launch of 2 new product lines.'] }
        ],
        education:[{ degree:'BSE, Mechanical Engineering', school:'University of Michigan', year:'2019' }],
        certifications:[{ name:'Six Sigma Green Belt', issuer:'ASQ', year:'2022' }],
        achievements:['3 cost-savings awards totaling $1.1M'],
      },
      job_description: 'Senior Manufacturing Engineer, EV battery pack assembly. 5+ years. SolidWorks, GD&T, Lean. EV experience a plus but not required.',
      job_title: 'Senior Manufacturing Engineer', company: 'Voltaire Motors'
    },
    {
      label: 'UX Designer (junior, agency background)',
      resume_data: {
        name: 'Tomás Álvarez', current_title: 'UX Designer',
        email: 'tomas.alvarez@example.com', phone: '(305) 555-0102',
        address: 'Miami, FL', linkedin: 'linkedin.com/in/tomasalvarez-ux',
        summary: 'UX designer with 3 years of agency experience across fintech, hospitality, and healthcare clients.',
        skills: ['Figma','User Research','Prototyping','Design Systems','Accessibility','Usability Testing','Sketch','Jira','Storytelling','Workshop Facilitation'],
        experience: [
          { title:'UX Designer', company:'Canopy Studio', location:'Miami, FL', dates:'2023 — Present',
            bullets:[
              'Redesigned mobile app for a regional bank; task success ↑ 38% in usability testing.',
              'Built 90-component design system adopted by 3 client teams.',
              'Facilitated 11 discovery workshops with enterprise stakeholders.'
            ]},
          { title:'Junior UX Designer', company:'Canopy Studio', location:'Miami, FL', dates:'2022 — 2023',
            bullets:['Shipped 6 client projects end-to-end.'] }
        ],
        education:[{ degree:'BFA, Graphic Design', school:'University of Miami', year:'2022' }],
        certifications:[{ name:'Nielsen Norman UX Certified', issuer:'NN/g', year:'2024' }],
        achievements:[],
      },
      job_description: 'Product Designer (mid) for a fintech startup. Figma, design systems, accessibility. Agency-to-product transition welcome. Portfolio required.',
      job_title: 'Product Designer', company: 'Pinecone Finance'
    },
    {
      label: 'Operations Manager (logistics, late-career)',
      resume_data: {
        name: 'Robert J. Callahan', current_title: 'Operations Manager',
        email: 'rj.callahan@example.com', phone: '(216) 555-0171',
        address: 'Cleveland, OH', linkedin: 'linkedin.com/in/robertcallahan',
        summary: 'Operations manager with 22 years in 3PL and regional distribution. Ran DCs up to 450k sq ft and teams up to 220.',
        skills: ['Warehouse Management','WMS','Lean','Safety','P&L Management','Labor Planning','Vendor Management','KPI Reporting','Continuous Improvement','Team Leadership'],
        experience: [
          { title:'Operations Manager', company:'Midwest Distribution Co.', location:'Cleveland, OH', dates:'2016 — Present',
            role_summary:'Run 450k sq ft regional DC with 220 associates and $38M opex.',
            bullets:[
              'Cut OT hours 28% YoY while holding SLA at 99.2%.',
              'Drove OSHA recordable rate to 0.8 — best in region 3 years running.',
              'Led WMS migration (Manhattan → Blue Yonder) with 0 shipping delays.'
            ]},
          { title:'Assistant Operations Manager', company:'Midwest Distribution Co.', location:'Cleveland, OH', dates:'2010 — 2016',
            bullets:['Promoted from shift supervisor after 3 years.'] },
          { title:'Shift Supervisor', company:'Ohio Freight Services', location:'Cleveland, OH', dates:'2003 — 2010',
            bullets:['Supervised 40 associates across 2 shifts.'] }
        ],
        education:[{ degree:'BS, Business Administration', school:'Cleveland State University', year:'2003' }],
        certifications:[{ name:'Lean Six Sigma Black Belt', issuer:'ASQ', year:'2018' }],
        achievements:['President\'s Award 2022 for regional throughput leadership'],
      },
      job_description: 'Director of Operations — multi-site 3PL network. Lead 2 DCs totaling 900k sq ft. Strong WMS, safety track record, and P&L ownership. 10+ years required.',
      job_title: 'Director of Operations', company: 'Great Lakes Logistics'
    },

    // ============================================================
    // 20 ADDITIONAL FIXTURES (11–30) — mixed seniority / score bands
    // Tagged with _intent to signal what behavior we expect the
    // optimize prompt to show on each one.
    // ============================================================

    // 11 — Entry-level, zero experience. Expect score <60 and meaningful
    //      bullet improvements (rule: weak resume → stronger rewrites OK).
    {
      label: 'Recent grad, no full-time experience (Finance)',
      _intent: 'weak resume • score <60 • stronger rewrites expected',
      resume_data: {
        name: 'Ava Carter', current_title: 'Recent Graduate',
        email: 'ava.c@example.com', phone: '(773) 555-0191',
        address: 'Chicago, IL', linkedin: 'linkedin.com/in/avacarter',
        summary: 'Recent finance graduate looking to leverage my analytical skills in a full-time role.',
        skills:['Excel','PowerPoint','Bloomberg','Financial Modeling','Accounting','Python'],
        experience:[
          { title:'Finance Intern', company:'Harbor Capital', location:'Chicago, IL', dates:'Summer 2025',
            bullets:['Helped team with financial analysis.','Worked on Excel models.','Assisted with presentations.'] }
        ],
        education:[{ degree:'BS, Finance', school:'University of Illinois', year:'2025' }],
        certifications:[], achievements:[]
      },
      job_description:'Financial Analyst, Corporate Finance. 0-2 yrs. Excel modeling, variance analysis, board decks. Python a plus.',
      job_title:'Financial Analyst', company:'Sentry Industries'
    },

    // 12 — C-suite, very strong resume. Expect score >=85 and minimal changes
    //      per IMPACT SCALING rule.
    {
      label: 'Chief Technology Officer (late-career, very strong)',
      _intent: 'strong resume • score >=85 • minimal changes expected',
      resume_data: {
        name: 'Dr. Rachel Steinberg', current_title: 'Chief Technology Officer',
        email: 'r.steinberg@example.com', phone: '(415) 555-0144',
        address: 'Palo Alto, CA', linkedin: 'linkedin.com/in/rachelsteinberg',
        summary: 'Chief Technology Officer with 18+ years scaling engineering orgs from 30 to 600+ engineers across three venture-backed B2B SaaS companies. Two successful IPOs. Specializes in platform re-architecture and technical due diligence.',
        skills:['Engineering Leadership','Platform Architecture','M&A Due Diligence','Board Communication','Cloud Economics','SOC2','GTM Alignment','Technical Hiring','IPO Readiness','Org Design'],
        experience:[
          { title:'Chief Technology Officer', company:'Axiom Cloud', location:'Palo Alto, CA', dates:'2021 — Present',
            role_summary:'Own technology for $480M ARR public company.',
            bullets:[
              'Scaled engineering from 140 to 620 across 5 continents while holding OpEx growth to 1.4x revenue growth.',
              'Led platform re-architecture reducing cloud spend $28M/yr while improving p99 latency 43%.',
              'Drove S-1 technology section and led 14 investor meetings during IPO roadshow (priced above range).'
            ]},
          { title:'VP Engineering', company:'Conduit Systems', location:'San Francisco, CA', dates:'2015 — 2021',
            bullets:[
              'Built engineering org from 30 to 240 through IPO (NYSE: CDUT, 2020).',
              'Owned SOC2 Type II and ISO 27001 programs — zero findings in 4 consecutive audits.'
            ]}
        ],
        education:[{ degree:'PhD, Computer Science', school:'Stanford', year:'2007' },{ degree:'BS, EECS', school:'MIT', year:'2002' }],
        certifications:[], achievements:['Forbes CIO Next 2024','Board Director, TechFoundation.org']
      },
      job_description:'Chief Technology Officer at Series D infra-software company ($120M ARR, 280 employees). Must have IPO or public-company CTO experience. Board-level communication required.',
      job_title:'Chief Technology Officer', company:'Stratos Networks'
    },

    // 13 — Career gap (3 yrs caregiving). Tests that gap bullets aren't
    //      rewritten to fake continuous employment.
    {
      label: 'Returning professional (3-year caregiving gap)',
      _intent: 'mid resume • career-gap sensitivity',
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

    // 14 — Military transitioning to civilian PM.
    {
      label: 'Military Captain transitioning to civilian Product Manager',
      _intent: 'mid resume • translation-heavy • keyword alignment test',
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
        certifications:[{ name:'PMP', issuer:'PMI', year:'2024' }], achievements:['Bronze Star Medal','Meritorious Service Medal']
      },
      job_description:'Associate Product Manager at a B2B supply-chain software startup. Military veteran program. Must learn fast. Agile exposure a plus. PMP helpful.',
      job_title:'Associate Product Manager', company:'Loadbearer Technologies'
    },

    // 15 — Freelancer (long contract career, no "title" ladder).
    {
      label: 'Long-time freelance designer (8 yrs 1099)',
      _intent: 'mid resume • narrative-heavy • no ladder progression',
      resume_data: {
        name:'Yuki Tanaka', current_title:'Freelance Brand Designer',
        email:'yuki.tanaka@example.com', phone:'(718) 555-0166',
        address:'Brooklyn, NY', linkedin:'linkedin.com/in/yukitanaka-design',
        summary:'Freelance brand and digital designer with 8 years of experience working with DTC startups, Shopify brands, and small agencies. Passionate about typography and building distinctive identity systems.',
        skills:['Brand Identity','Typography','Figma','Shopify','Webflow','Adobe CC','Art Direction','Motion Graphics','Client Presentations','Print Production'],
        experience:[
          { title:'Freelance Brand Designer (1099)', company:'Self-Employed', location:'Remote', dates:'2018 — Present',
            bullets:[
              'Delivered 40+ brand identity projects for DTC and consumer tech clients (Series Seed–B).',
              'Built recurring retainer relationships with 6 Shopify brands averaging $4.5k MRR each.',
              'Guest lectured at Parsons on brand systems (2 semesters).'
            ]}
        ],
        education:[{ degree:'BFA, Communication Design', school:'Parsons School of Design', year:'2017' }],
        certifications:[], achievements:['AIGA 50 — 2023']
      },
      job_description:'Senior Brand Designer at a Series B consumer fintech. Lead identity work, design system ownership. Must have DTC or consumer tech portfolio. In-house experience not required.',
      job_title:'Senior Brand Designer', company:'Wren Financial'
    },

    // 16 — PhD pivoting academia → industry. Tests translation of academic achievements.
    {
      label: 'Chemistry PhD pivoting to Biotech industry scientist',
      _intent: 'mid resume • translate academia → industry',
      resume_data: {
        name:'Dr. Amelia Winters', current_title:'Postdoctoral Researcher',
        email:'a.winters@example.com', phone:'(617) 555-0118',
        address:'Cambridge, MA', linkedin:'linkedin.com/in/ameliawinters',
        summary:'Organic chemistry postdoc with 5 years at top-tier academic labs. Published author. Seeking to transition into industry biotech R&D.',
        skills:['Organic Synthesis','HPLC','Mass Spectrometry','Molecular Biology','Experimental Design','Scientific Writing','Python (Pandas)','Mentoring','Grant Writing','Cross-Functional Collaboration'],
        experience:[
          { title:'Postdoctoral Researcher', company:'Harvard University — Liu Lab', location:'Cambridge, MA', dates:'2022 — Present',
            bullets:[
              'Designed 14-step total synthesis of novel natural-product analog; work published in JACS (2024).',
              'Mentored 3 graduate students and 2 undergrads on synthetic strategy.',
              'Secured $240k NIH F32 fellowship funding.'
            ]},
          { title:'Graduate Researcher', company:'UC Berkeley', location:'Berkeley, CA', dates:'2017 — 2022',
            bullets:['Authored 7 peer-reviewed publications (2 first-author).','Presented at 6 national conferences.']}
        ],
        education:[{ degree:'PhD, Organic Chemistry', school:'UC Berkeley', year:'2022' },{ degree:'BS, Chemistry', school:'Williams College', year:'2017' }],
        certifications:[], achievements:['NIH F32 Fellow','ACS Young Investigator 2023']
      },
      job_description:'Senior Scientist I, Medicinal Chemistry. Series C biotech. Synthesis experience required. Industry preferred but strong academic candidates considered.',
      job_title:'Senior Scientist I', company:'Aurora Therapeutics'
    },

    // 17 — Enterprise SaaS AE. Strong metrics.
    {
      label: 'Enterprise SaaS Account Executive (mid-level)',
      _intent: 'strong metrics • mid-tier resume',
      resume_data: {
        name:'Derek Maldonado', current_title:'Enterprise Account Executive',
        email:'derek.m@example.com', phone:'(469) 555-0147',
        address:'Dallas, TX', linkedin:'linkedin.com/in/derekmaldonado',
        summary:'Enterprise AE with 7 years selling B2B SaaS to F500 accounts. Consistent 120%+ attainment. Closed largest deal in company history in 2024.',
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
        certifications:[{ name:'MEDDPICC Certified', issuer:'Force Management', year:'2023' }], achievements:['President\'s Club 2023, 2024']
      },
      job_description:'Strategic AE, F500 territory. $2M+ quota. 5+ yrs closing 6-7 figure deals. MEDDPICC required.',
      job_title:'Strategic Account Executive', company:'Summit Analytics'
    },

    // 18 — Senior Accountant / Controller track.
    {
      label: 'Senior Accountant / Controller track (CPA)',
      _intent: 'mid-strong resume • domain keyword test',
      resume_data: {
        name:'Linda Park, CPA', current_title:'Senior Accountant',
        email:'l.park@example.com', phone:'(415) 555-0145',
        address:'San Francisco, CA', linkedin:'linkedin.com/in/lindapark-cpa',
        summary:'Senior accountant with 9 years of Big 4 audit and SaaS accounting experience. CPA. Led ASC 606 implementation at two high-growth companies.',
        skills:['US GAAP','ASC 606','NetSuite','Audit','SOX','Financial Reporting','Month-End Close','Revenue Recognition','Workiva','Team Leadership'],
        experience:[
          { title:'Senior Accountant', company:'Cascade Software', location:'San Francisco, CA', dates:'2022 — Present',
            bullets:[
              'Owned month-end close (reduced from 12 days to 6).',
              'Led ASC 606 implementation covering $80M ARR across 4 revenue streams.',
              'Coordinated Big 4 audit with zero material findings 2 years running.'
            ]},
          { title:'Audit Senior', company:'KPMG', location:'San Francisco, CA', dates:'2016 — 2022',
            bullets:['Led audit engagements for 6 SaaS clients ($50M–$400M ARR).'] }
        ],
        education:[{ degree:'BS, Accounting', school:'UC Santa Barbara', year:'2016' }],
        certifications:[{ name:'CPA (California)', issuer:'AICPA', year:'2018' }], achievements:[]
      },
      job_description:'Controller — Series C SaaS, $120M ARR. Own monthly close, ASC 606, audit. CPA required. Public company experience a plus.',
      job_title:'Controller', company:'Veritas Growth'
    },

    // 19 — HR Business Partner to Head of People.
    {
      label: 'HR Business Partner → Head of People',
      _intent: 'mid resume • leadership narrative shift',
      resume_data: {
        name:'Jasmine Okonkwo', current_title:'HR Business Partner',
        email:'j.okonkwo@example.com', phone:'(202) 555-0163',
        address:'Washington, DC', linkedin:'linkedin.com/in/jasmineokonkwo',
        summary:'HR business partner with 10 years supporting tech and professional services firms. Experience across performance management, L&D, and DEI.',
        skills:['Employee Relations','Performance Management','Workday','Total Rewards','DEI','Coaching','Talent Development','Compensation Planning','Change Management','Stakeholder Management'],
        experience:[
          { title:'HR Business Partner', company:'Beacon Consulting', location:'Washington, DC', dates:'2021 — Present',
            bullets:[
              'Supports 340-person technology consulting practice including 22 partners.',
              'Led performance calibration for 4 review cycles.',
              'Redesigned onboarding reducing time-to-productivity 26%.'
            ]},
          { title:'Senior HR Generalist', company:'Beacon Consulting', location:'Washington, DC', dates:'2017 — 2021',
            bullets:['Managed open enrollment for 800 employees across 3 regions.'] }
        ],
        education:[{ degree:'MS, Industrial-Organizational Psychology', school:'Columbia', year:'2015' }],
        certifications:[{ name:'SHRM-SCP', issuer:'SHRM', year:'2022' }], achievements:[]
      },
      job_description:'Head of People at a 180-person Series B fintech. First people leader. Must build from scratch: comp, L&D, performance, DEI. People-leader experience required.',
      job_title:'Head of People', company:'Ledger Frontier'
    },

    // 20 — Corporate attorney → in-house counsel.
    {
      label: 'Corporate attorney → In-house counsel',
      _intent: 'strong resume • lateral move • keyword-sensitive',
      resume_data: {
        name:'Eliot Schwartz, Esq.', current_title:'Senior Associate, Corporate',
        email:'e.schwartz@example.com', phone:'(212) 555-0129',
        address:'New York, NY', linkedin:'linkedin.com/in/eliotschwartz',
        summary:'Senior corporate associate at AmLaw 50 firm with 6 years of M&A and venture financing experience. Representing strategic acquirers and high-growth technology companies.',
        skills:['M&A','Venture Financing','Corporate Governance','SEC Reporting','SaaS Agreements','Negotiation','Due Diligence','Drafting','Capital Markets','Client Counseling'],
        experience:[
          { title:'Senior Associate, Corporate', company:'Whitford & Stern LLP', location:'New York, NY', dates:'2022 — Present',
            bullets:[
              'Lead associate on 11 M&A transactions totaling $4.6B deal value.',
              'Drafted and negotiated 30+ venture financing docs for Series A–D rounds.',
              'Mentored 5 junior associates; 3 received firm-wide performance awards.'
            ]},
          { title:'Corporate Associate', company:'Whitford & Stern LLP', location:'New York, NY', dates:'2019 — 2022',
            bullets:['Supported partner team on IPO of a public fintech (NYSE).'] }
        ],
        education:[{ degree:'JD', school:'NYU School of Law', year:'2019' },{ degree:'BA, Political Science', school:'Brown University', year:'2016' }],
        certifications:[{ name:'Admitted NY Bar', issuer:'NYS Bar', year:'2019' }], achievements:['Law Review Editor']
      },
      job_description:'Senior Counsel, Corporate & Commercial at a $1B+ ARR public SaaS company. 5+ yrs M&A. In-house a plus. Must own commercial contracts and M&A support.',
      job_title:'Senior Counsel, Corporate & Commercial', company:'Cascade Cloud (NASDAQ: CASC)'
    },

    // 21 — Executive Chef → food startup ops. Unusual pivot.
    {
      label: 'Executive Chef pivoting to food-startup operations',
      _intent: 'weak–mid resume • unusual pivot • heavy translation',
      resume_data: {
        name:'Mateo Rivas', current_title:'Executive Chef',
        email:'mateo.rivas@example.com', phone:'(718) 555-0153',
        address:'Brooklyn, NY', linkedin:'linkedin.com/in/mateorivas',
        summary:'Executive Chef with 12 years running high-volume restaurants. Looking to bring operational discipline to a fast-growing food startup.',
        skills:['Kitchen Operations','Team Leadership','Vendor Negotiation','Inventory Management','Food Safety','Menu Design','P&L Management','Hiring & Training','Scheduling','Customer Experience'],
        experience:[
          { title:'Executive Chef', company:'Copper Table NYC', location:'Brooklyn, NY', dates:'2019 — Present',
            bullets:[
              'Ran kitchen with 22 staff and $6M annual revenue.',
              'Cut food cost from 34% to 28% without menu-price changes.',
              'Opened 2 pop-ups in LA and Miami generating $420k incremental revenue.'
            ]},
          { title:'Sous Chef', company:'Harbor House', location:'New York, NY', dates:'2015 — 2019',
            bullets:['Managed lunch service for 140 covers.'] }
        ],
        education:[{ degree:'AOS, Culinary Arts', school:'Culinary Institute of America', year:'2013' }],
        certifications:[{ name:'ServSafe Manager', issuer:'NRA', year:'2020' }], achievements:['NY Times 2 Stars review — Copper Table']
      },
      job_description:'Head of Operations — Series A ghost-kitchen startup. Need someone who has run high-volume food operations. P&L ownership required. Tech-forward mindset.',
      job_title:'Head of Operations', company:'Prep & Post'
    },

    // 22 — Cybersecurity SOC analyst going senior.
    {
      label: 'Cybersecurity SOC Analyst → Senior',
      _intent: 'mid resume • technical vocabulary test',
      resume_data: {
        name:'Pooja Reddy', current_title:'SOC Analyst II',
        email:'pooja.r@example.com', phone:'(678) 555-0164',
        address:'Atlanta, GA', linkedin:'linkedin.com/in/poojareddy',
        summary:'SOC analyst with 4 years in a 24/7 SOC at a Fortune 500 financial services firm. Experienced in incident response, threat hunting, and SIEM tuning.',
        skills:['SIEM (Splunk)','EDR (CrowdStrike)','Threat Hunting','Incident Response','MITRE ATT&CK','Python','PowerShell','SOAR','Vulnerability Management','TCP/IP'],
        experience:[
          { title:'SOC Analyst II', company:'Citadel Financial', location:'Atlanta, GA', dates:'2023 — Present',
            bullets:[
              'Reduced mean time to detect from 28 min to 9 min through Splunk detection tuning.',
              'Authored 14 new SOAR playbooks covering 60% of tier-1 alerts.',
              'Led containment of 3 Sev-1 incidents with zero confirmed data exfiltration.'
            ]},
          { title:'SOC Analyst I', company:'Citadel Financial', location:'Atlanta, GA', dates:'2021 — 2023',
            bullets:['Triaged 120+ alerts/shift during on-call rotations.'] }
        ],
        education:[{ degree:'BS, Cybersecurity', school:'Georgia Tech', year:'2021' }],
        certifications:[{ name:'CompTIA Security+', issuer:'CompTIA', year:'2021' },{ name:'GCIH', issuer:'GIAC', year:'2024' }], achievements:[]
      },
      job_description:'Senior SOC Analyst / Threat Hunter. 4+ yrs SOC. Splunk, EDR, threat hunting with MITRE. GCIH or GCFA preferred.',
      job_title:'Senior SOC Analyst', company:'NorthWind Bank'
    },

    // 23 — DevOps / SRE.
    {
      label: 'DevOps / SRE (mid-level)',
      _intent: 'strong technical metrics • mid resume',
      resume_data: {
        name:'Brandon Liu', current_title:'Site Reliability Engineer',
        email:'b.liu@example.com', phone:'(503) 555-0188',
        address:'Portland, OR', linkedin:'linkedin.com/in/brandonliu-sre',
        summary:'Site reliability engineer with 5 years operating production Kubernetes environments at scale. Strong focus on SLO-driven reliability and platform cost efficiency.',
        skills:['Kubernetes','Terraform','AWS','Prometheus','Grafana','Go','Python','CI/CD','Istio','On-Call Leadership'],
        experience:[
          { title:'Site Reliability Engineer', company:'Fernwood Platforms', location:'Portland, OR', dates:'2022 — Present',
            bullets:[
              'Reduced infra spend $1.1M/yr by migrating 220 workloads to spot + Karpenter.',
              'Improved SLO adherence 94%↙99.3% via platform-wide error-budget policy.',
              'Led blameless post-mortems for 9 Sev-1 incidents.'
            ]},
          { title:'Cloud Engineer', company:'Fernwood Platforms', location:'Portland, OR', dates:'2020 — 2022',
            bullets:['Owned Terraform modules used by 14 teams.'] }
        ],
        education:[{ degree:'BS, Computer Science', school:'Oregon State', year:'2020' }],
        certifications:[{ name:'CKA', issuer:'CNCF', year:'2023' }], achievements:[]
      },
      job_description:'Senior SRE. 5+ yrs running Kubernetes in prod. Go required. SLO experience. On-call leadership.',
      job_title:'Senior Site Reliability Engineer', company:'Lattice Platforms'
    },

    // 24 — Data Engineer.
    {
      label: 'Data Engineer (Snowflake/Airflow)',
      _intent: 'strong resume • strong metrics',
      resume_data: {
        name:'Siobhan Reilly', current_title:'Data Engineer',
        email:'siobhan.r@example.com', phone:'(617) 555-0130',
        address:'Boston, MA', linkedin:'linkedin.com/in/siobhanreilly',
        summary:'Data engineer with 6 years of experience building batch and streaming pipelines powering analytics and ML across mid-sized SaaS companies.',
        skills:['Snowflake','Airflow','dbt','Python','Kafka','Spark','Terraform','AWS','SQL','Data Modeling'],
        experience:[
          { title:'Data Engineer', company:'Threadline', location:'Boston, MA', dates:'2022 — Present',
            bullets:[
              'Built 180 dbt models powering the company\'s analytics foundation used by 9 teams.',
              'Migrated ingestion from Fivetran to custom Airflow jobs saving $340k/yr.',
              'Partnered with ML to ship real-time feature pipelines cutting training freshness from 24h to 15min.'
            ]},
          { title:'Analytics Engineer', company:'Threadline', location:'Boston, MA', dates:'2020 — 2022',
            bullets:['Owned the revenue mart consumed by finance weekly.'] }
        ],
        education:[{ degree:'BS, Applied Mathematics', school:'Boston University', year:'2020' }],
        certifications:[{ name:'SnowPro Core', issuer:'Snowflake', year:'2023' }], achievements:[]
      },
      job_description:'Senior Data Engineer. 5+ yrs production pipelines. Snowflake + dbt + Airflow required. Kafka or streaming a plus.',
      job_title:'Senior Data Engineer', company:'Harbor Metrics'
    },

    // 25 — Equity research associate → buy-side.
    {
      label: 'Sell-side Equity Research Associate → Buy-side',
      _intent: 'strong resume • prestige keyword test',
      resume_data: {
        name:'Wei Chen', current_title:'Equity Research Associate',
        email:'w.chen@example.com', phone:'(212) 555-0199',
        address:'New York, NY', linkedin:'linkedin.com/in/weichen-finance',
        summary:'Sell-side equity research associate covering internet and software with 3 years at a tier-1 investment bank. Published author on 14 initiation reports.',
        skills:['Financial Modeling','Valuation','Bloomberg','FactSet','Excel','SQL','Python','Industry Research','Client Presentations','Writing'],
        experience:[
          { title:'Equity Research Associate', company:'Morgan Beacon', location:'New York, NY', dates:'2022 — Present',
            bullets:[
              'Co-authored 22 company notes and 3 thematic reports on internet & software sector.',
              'Built a 14-company bottom-up comp framework used by the senior analyst.',
              'Interacted with 80+ institutional investors across earnings cycles.'
            ]},
          { title:'Summer Analyst, Equity Research', company:'Morgan Beacon', location:'New York, NY', dates:'Summer 2021',
            bullets:['Returned with full-time offer.'] }
        ],
        education:[{ degree:'BS, Finance', school:'NYU Stern', year:'2022' }],
        certifications:[{ name:'CFA Level II Candidate', issuer:'CFA Institute', year:'2024' }], achievements:['Dean\'s List']
      },
      job_description:'Junior Investment Analyst at long-only hedge fund covering TMT. Sell-side-to-buy-side transition welcome. 2-4 yrs. CFA in progress.',
      job_title:'Junior Investment Analyst', company:'Kestrel Capital'
    },

    // 26 — Civil engineer PE.
    {
      label: 'Civil Engineer, PE (infrastructure)',
      _intent: 'mid-strong resume • domain-heavy',
      resume_data: {
        name:'Rafael Moreira, PE', current_title:'Civil Engineer',
        email:'r.moreira@example.com', phone:'(713) 555-0142',
        address:'Houston, TX', linkedin:'linkedin.com/in/rafaelmoreira-pe',
        summary:'Licensed Professional Engineer with 9 years of transportation infrastructure experience. Served as engineer of record on 6 state-DOT roadway projects.',
        skills:['AutoCAD Civil 3D','MicroStation','AASHTO','Hydrology','Drainage Design','Stormwater','TxDOT Standards','Project Management','Construction Oversight','Public Meetings'],
        experience:[
          { title:'Civil Engineer', company:'Greenline Engineering', location:'Houston, TX', dates:'2020 — Present',
            bullets:[
              'Engineer of record on 6 TxDOT projects totaling $180M construction cost.',
              'Led drainage design for 4-mile urban arterial with zero flood complaints post-construction.',
              'Presented at 9 public meetings representing firm to community stakeholders.'
            ]},
          { title:'Staff Engineer', company:'Greenline Engineering', location:'Houston, TX', dates:'2016 — 2020',
            bullets:['Supported 12 municipal and private projects.'] }
        ],
        education:[{ degree:'BS, Civil Engineering', school:'Texas A&M', year:'2016' }],
        certifications:[{ name:'PE (Texas)', issuer:'TBPE', year:'2020' }], achievements:[]
      },
      job_description:'Senior Transportation Engineer, PE required. Lead roadway projects for TxDOT and municipal clients. 8+ yrs. Business-development mindset.',
      job_title:'Senior Transportation Engineer', company:'Meridian Civil Group'
    },

    // 27 — Pharmacist → pharma industry.
    {
      label: 'Retail pharmacist pivoting to pharma industry (MSL track)',
      _intent: 'mid resume • pivot • translation-heavy',
      resume_data: {
        name:'Dr. Kevin Nash, PharmD', current_title:'Staff Pharmacist',
        email:'k.nash@example.com', phone:'(612) 555-0155',
        address:'Minneapolis, MN', linkedin:'linkedin.com/in/kevinnash-pharmd',
        summary:'Doctor of Pharmacy with 6 years of retail pharmacy experience and 2 years coordinating immunization campaigns for a regional health system. Passionate about clinical education.',
        skills:['Clinical Pharmacy','Immunizations','Medication Therapy Management','Patient Counseling','Drug Information','Clinical Research','Teaching','Healthcare Compliance','Epic','Presentations'],
        experience:[
          { title:'Staff Pharmacist', company:'NorthStar Pharmacy', location:'Minneapolis, MN', dates:'2019 — Present',
            bullets:[
              'Counseled 80+ patients/day on medication management.',
              'Coordinated 6 county-level vaccination campaigns administering 22k+ doses.',
              'Served as preceptor to 4 PharmD students during APPE rotations.'
            ]}
        ],
        education:[{ degree:'PharmD', school:'University of Minnesota', year:'2019' }],
        certifications:[{ name:'Board Certified Pharmacotherapy Specialist (BCPS)', issuer:'BPS', year:'2022' }], achievements:[]
      },
      job_description:'Medical Science Liaison, Immunology. PharmD, PhD, or MD required. Industry experience preferred but strong clinical candidates with teaching background considered. Travel 40%.',
      job_title:'Medical Science Liaison, Immunology', company:'Sentinel Biologics'
    },

    // 28 — Nonprofit program manager → foundation.
    {
      label: 'Nonprofit program manager → foundation program officer',
      _intent: 'mid resume • sector-specific terminology',
      resume_data: {
        name:'Grace Oyelaran', current_title:'Program Manager',
        email:'g.oyelaran@example.com', phone:'(410) 555-0177',
        address:'Baltimore, MD', linkedin:'linkedin.com/in/graceoyelaran',
        summary:'Nonprofit program manager with 7 years designing and evaluating youth-workforce programs. Passionate about evidence-based practice and community voice.',
        skills:['Program Design','Grant Management','Evaluation','Logic Models','Partnership Building','Public Speaking','Budget Management','Policy Advocacy','Data Storytelling','Salesforce NPSP'],
        experience:[
          { title:'Program Manager', company:'BMore Futures', location:'Baltimore, MD', dates:'2020 — Present',
            bullets:[
              'Managed $3.2M portfolio of youth workforce programs across 6 Baltimore neighborhoods.',
              'Led evaluation partnership with Johns Hopkins; published 2 reports.',
              'Secured $1.4M in multi-year funding from 4 foundations.'
            ]},
          { title:'Program Associate', company:'BMore Futures', location:'Baltimore, MD', dates:'2018 — 2020',
            bullets:['Supported rollout of workforce pilot to 220 youth.'] }
        ],
        education:[{ degree:'MPA', school:'Johns Hopkins University', year:'2018' }],
        certifications:[], achievements:['2023 Baltimore Community Foundation Emerging Leader']
      },
      job_description:'Program Officer, Youth & Workforce at a regional foundation. Grant-making experience preferred. Program design and evaluation required.',
      job_title:'Program Officer, Youth & Workforce', company:'Charm City Foundation'
    },

    // 29 — Weak / over-buzzword resume (tests banned-phrase enforcement).
    {
      label: 'OVER-BUZZWORD-ED resume (tests banned-phrase handling)',
      _intent: 'TEST CASE • expect summary rewrite + banned phrases caught',
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

    // 30 — Metric-free resume (tests placeholder bracket-tokens behavior).
    {
      label: 'Zero-metrics resume (tests placeholder bracket tokens)',
      _intent: 'TEST CASE • expect [X%] / [N] placeholders • NO fabricated numbers',
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
  ];

  async function _getIdToken() {
    try {
      const u = firebase.auth().currentUser;
      if (!u) throw new Error('Not signed in');
      return await u.getIdToken();
    } catch(e) {
      console.error('[AI-TEST] Auth failed:', e.message);
      throw e;
    }
  }

  async function _optimizeOne(fx, idx, idToken) {
    const payload = {
      resume_data: fx.resume_data,
      job_description: fx.job_description,
      job_title: fx.job_title,
      company: fx.company
    };
    const t0 = performance.now();
    const entry = {
      index: idx + 1,
      label: fx.label,
      endpoint: 'POST ' + API_BASE + '/builder/optimize',
      sent: payload,
      received: null,
      status: null,
      elapsed_ms: null,
      error: null
    };
    console.groupCollapsed('%c[AI-TEST] ' + (idx+1) + '/' + FIXTURES.length + ' — ' + fx.label, 'color:#2563EB;font-weight:bold');
    console.log('SENT payload:', payload);
    try {
      const resp = await fetch(API_BASE + '/builder/optimize', {
        method: 'POST',
        headers: { 'Content-Type':'application/json', 'Authorization':'Bearer ' + idToken },
        body: JSON.stringify(payload)
      });
      entry.status = resp.status;
      const text = await resp.text();
      let data;
      try { data = JSON.parse(text); } catch(_) { data = { _raw: text }; }
      entry.received = data;
      entry.elapsed_ms = Math.round(performance.now() - t0);
      if (!resp.ok) {
        entry.error = 'HTTP ' + resp.status;
        console.error('RECEIVED (error):', data);
      } else {
        console.log('RECEIVED:', data);
      }
      console.log('elapsed_ms:', entry.elapsed_ms);
    } catch(e) {
      entry.error = e.message;
      entry.elapsed_ms = Math.round(performance.now() - t0);
      console.error('EXCEPTION:', e);
    }
    console.groupEnd();
    return entry;
  }

  async function runAITestBatch(opts) {
    opts = opts || {};
    const n = opts.n || FIXTURES.length;
    const only = Array.isArray(opts.only) ? opts.only.map(i => i - 1) : null;
    const toRun = only ? FIXTURES.filter((_,i) => only.includes(i)).map((fx,k) => [fx, only[k]]) : FIXTURES.slice(0, n).map((fx,i) => [fx, i]);
    const total = toRun.length;

    // Spin up the floating HUD and seed placeholder rows so the reviewer
    // can see scope up-front. Rows update in place as each fixture returns.
    try { _ensureHUD(total); _hudSetStatus('Authenticating…'); _hudSetProgress(0, total); toRun.forEach(([fx, i]) => _hudUpsertRow(fx, i, total, null)); } catch(_) {}

    const idToken = await _getIdToken();
    console.log('%c[AI-TEST] Starting batch — ' + total + ' resumes', 'color:#059669;font-weight:bold;font-size:13px');
    try { _hudSetStatus('Running 1 / ' + total + '…'); } catch(_) {}
    const results = [];
    for (let k = 0; k < toRun.length; k++) {
      const [fx, origIdx] = toRun[k];
      try { _hudSetStatus('Running ' + (k+1) + ' / ' + total + ' — ' + fx.label); } catch(_) {}
      const entry = await _optimizeOne(fx, origIdx, idToken);
      results.push(entry);
      try { _hudUpsertRow(fx, origIdx, total, entry); _hudSetProgress(k+1, total); } catch(_) {}
      // small delay so backend / rate limiter is happy
      if (k < toRun.length - 1) await new Promise(r => setTimeout(r, 700));
    }
    const bundle = {
      meta: {
        test_run_at: new Date().toISOString(),
        api_base: API_BASE,
        user_email: (firebase.auth().currentUser||{}).email || null,
        resume_count: results.length
      },
      results
    };
    window.__aiTestResults = bundle;
    const json = JSON.stringify(bundle, null, 2);
    const okCount = results.filter(r => r.status >= 200 && r.status < 300 && !r.error).length;
    console.log('%c[AI-TEST] DONE. Full bundle on window.__aiTestResults', 'color:#059669;font-weight:bold;font-size:13px');
    console.log('Summary:', results.map(r => ({ '#': r.index, label: r.label, status: r.status, error: r.error, ms: r.elapsed_ms })));
    try { _hudSetStatus('Done — ' + okCount + ' / ' + total + ' OK · ' + json.length.toLocaleString() + ' chars'); } catch(_) {}
    // Try clipboard copy
    try {
      await navigator.clipboard.writeText(json);
      console.log('%c[AI-TEST] JSON (' + json.length.toLocaleString() + ' chars) copied to clipboard — paste into ChatGPT.', 'color:#059669');
    } catch(e) {
      console.warn('[AI-TEST] Clipboard copy failed. Click "Copy JSON" in the HUD, or run: copy(JSON.stringify(__aiTestResults, null, 2))');
    }
    return bundle;
  }

  // ============================================================
  // SITE-WIDE TEST BATCH — exercises every major builder endpoint
  // ------------------------------------------------------------
  // Uses a single reference fixture (FIXTURES[4] — the PM resume,
  // clean data with real metrics) to hit each endpoint with a
  // realistic payload. Good for a smoke-test of the whole backend
  // surface after any server change, not just /optimize.
  //
  // Run manually:  await runSiteTestBatch()
  //                await runSiteTestBatch({ only: ['analyze','tailor'] })
  // ============================================================
  const SITE_REF = FIXTURES[4] || FIXTURES[0]; // Product Manager fixture
  function _siteTests() {
    const ref = SITE_REF;
    const rd  = ref.resume_data;
    const jd  = ref.job_description;
    const jt  = ref.job_title;
    const co  = ref.company;
    const userEmail = (firebase.auth().currentUser||{}).email || '';

    // Shape of each test:
    //   { key, label, method, path, auth: bool, body?, skip?, note? }
    return [
      // --- Public / auth-optional ---
      { key:'ping',            label:'Health check',                       method:'GET',  path:'/api/ping',                                            auth:false },
      { key:'check-sub',       label:'Subscription status (current user)', method:'GET',  path:'/api/builder/check-subscription?email=' + encodeURIComponent(userEmail), auth:false, skip: !userEmail },
      { key:'plan-count',      label:'Plan count',                         method:'GET',  path:'/api/builder/plan-count',                              auth:true },

      // --- Core AI endpoints (authed, quota-counted) ---
      { key:'analyze',         label:'Analyze Resume (hiring-manager v2)', method:'POST', path:'/api/builder/analyze-resume',       auth:true,
        body:{ resume_data: rd, job_description: jd, job_title: jt, company: co } },

      { key:'enhance',         label:'Enhance Resume (diff JSON)',         method:'POST', path:'/api/builder/enhance-resume',       auth:true,
        body:{ experience: rd.experience, skills: rd.skills, summary: rd.summary, job_description: jd, job_title: jt } },

      { key:'optimize',        label:'Optimize (accept/reject pipeline)',  method:'POST', path:'/api/builder/optimize',             auth:true,
        body:{ resume_data: rd, job_description: jd, job_title: jt, company: co } },

      { key:'tailor',          label:'Tailor to JD (keyword mapping)',     method:'POST', path:'/api/builder/tailor-to-jd',         auth:true,
        body:{ resume_data: rd, job_description: jd, job_title: jt, company: co } },

      { key:'rescore',         label:'Rescore (delta after accept)',       method:'POST', path:'/api/builder/rescore',              auth:true,
        body:{ resume_data: rd, job_description: jd, job_title: jt,
               prior_analysis: { overall_score: 72, resume_match_score: 70, score_breakdown: [] },
               accepted_changes: [{ type:'bullet', experience_index:0, bullet_index:0, improved:'Stronger rewrite' }] } },

      { key:'interview-prep',  label:'Interview Prep (refresh)',           method:'POST', path:'/api/builder/interview-prep-refresh', auth:true,
        body:{ resume_data: rd, job_description: jd, job_title: jt, company: co } },

      { key:'research-role',   label:'Research Role',                      method:'POST', path:'/api/builder/research-role',        auth:true,
        body:{ job_title: jt, company: co, job_description: jd } },

      { key:'career-path',     label:'Career Path (roadmap)',              method:'POST', path:'/api/builder/career-path',          auth:true,
        body:{ current_role: rd.current_title, target_role: jt, target_company: co,
               skills: rd.skills, experience: rd.experience, education: rd.education } },

      { key:'generate-90d',    label:'Generate 90-day Plan (full gen)',    method:'POST', path:'/api/builder/generate',             auth:true,
        body:{ resume_data: rd, role_context:{ target_title: jt, company: co }, plan_type:'90-day',
               sections:['plan','summary','experience','skills','kpis'], job_description: jd },
        note:'Large payload — ~30s. Counts as 1 AI use.' },
    ];
  }

  async function _runOneSiteTest(test, idToken) {
    const t0 = performance.now();
    const url = API_BASE + test.path;
    const headers = { 'Content-Type': 'application/json' };
    if (test.auth && idToken) headers['Authorization'] = 'Bearer ' + idToken;
    const init = { method: test.method, headers };
    if (test.method !== 'GET' && test.body) init.body = JSON.stringify(test.body);
    const entry = { key: test.key, label: test.label, endpoint: test.method + ' ' + test.path, sent: test.body || null, status: null, received: null, error: null, elapsed_ms: 0, note: test.note || null };
    try {
      const res = await fetch(url, init);
      entry.status = res.status;
      const ct = res.headers.get('content-type') || '';
      entry.received = ct.includes('application/json') ? await res.json() : await res.text();
    } catch (e) {
      entry.error = e && e.message ? e.message : String(e);
    }
    entry.elapsed_ms = Math.round(performance.now() - t0);
    return entry;
  }

  async function runSiteTestBatch(opts) {
    opts = opts || {};
    const tests = _siteTests().filter(t => !t.skip);
    const filtered = Array.isArray(opts.only) ? tests.filter(t => opts.only.includes(t.key)) : tests;
    const total = filtered.length;

    // Render HUD — use pseudo-fixtures so _hudUpsertRow works cleanly.
    try {
      _ensureHUD(total);
      _hudSetStatus('Site tests: authenticating…');
      _hudSetProgress(0, total);
      // Clear the existing list so site tests don't mix with AI batch rows.
      const list = document.querySelector('#' + HUD_ID + ' .hud-list');
      if (list) list.innerHTML = '';
      filtered.forEach((t, i) => _hudUpsertRow({ label: '[site] ' + t.label, _intent: t.note || t.endpoint }, i, total, null));
    } catch(_) {}

    let idToken = null;
    try { idToken = await _getIdToken(); } catch(e) { console.warn('[SITE-TEST] could not get ID token — authed tests will fail:', e.message); }

    console.log('%c[SITE-TEST] Starting — ' + total + ' endpoints', 'color:#7C3AED;font-weight:bold;font-size:13px');
    const results = [];
    for (let i = 0; i < filtered.length; i++) {
      const t = filtered[i];
      try { _hudSetStatus('Site tests: ' + (i+1) + ' / ' + total + ' — ' + t.label); } catch(_) {}
      console.groupCollapsed('%c[SITE-TEST ' + (i+1) + '/' + total + '] ' + t.label, 'color:#7C3AED;font-weight:bold');
      console.log('endpoint:', t.method, t.path);
      const entry = await _runOneSiteTest(t, idToken);
      entry.index = i + 1;
      results.push(entry);
      console.log('status:', entry.status, 'ms:', entry.elapsed_ms);
      if (entry.error) console.error('error:', entry.error); else console.log('received:', entry.received);
      console.groupEnd();
      try { _hudUpsertRow({ label: '[site] ' + t.label, _intent: t.note || t.endpoint }, i, total, entry); _hudSetProgress(i+1, total); } catch(_) {}
      if (i < filtered.length - 1) await new Promise(r => setTimeout(r, 500));
    }

    const bundle = {
      meta: {
        test_run_at: new Date().toISOString(),
        api_base: API_BASE,
        user_email: (firebase.auth().currentUser||{}).email || null,
        kind: 'site-wide',
        endpoint_count: results.length
      },
      results
    };
    window.__siteTestResults = bundle;
    const okCount = results.filter(r => r.status >= 200 && r.status < 300 && !r.error).length;
    console.log('%c[SITE-TEST] DONE. ' + okCount + '/' + total + ' OK. Bundle on window.__siteTestResults', 'color:#7C3AED;font-weight:bold;font-size:13px');
    try { _hudSetStatus('Site tests done — ' + okCount + ' / ' + total + ' OK'); } catch(_) {}
    try { await navigator.clipboard.writeText(JSON.stringify(bundle, null, 2)); } catch(_) {}
    return bundle;
  }

  // ============================================================
  // Floating HUD — progress + expand-all + copy-to-clipboard
  // ============================================================
  // A fixed-position panel injected into resumebuilder.html while tests
  // run. Shows live progress, then renders one collapsible row per
  // fixture with the full SENT payload + RECEIVED response. Gives the
  // reviewer fast affordances: Expand All, Copy JSON (full bundle), Copy
  // summary table, Download JSON.
  const HUD_ID = 'ai-test-hud';
  function _esc(s){ return String(s==null?'':s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function _ensureHUD(total){
    let el = document.getElementById(HUD_ID);
    if (el) return el;
    el = document.createElement('div');
    el.id = HUD_ID;
    el.innerHTML =
      '<style>' +
        '#' + HUD_ID + '{position:fixed;top:12px;right:12px;width:440px;max-height:calc(100vh - 24px);background:#0F172A;color:#E2E8F0;border-radius:14px;box-shadow:0 25px 80px rgba(0,0,0,0.45);font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:12px;z-index:2147483647;display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,0.08)}' +
        '#' + HUD_ID + ' header{padding:10px 14px;display:flex;align-items:center;gap:8px;background:linear-gradient(135deg,#1E293B,#0F172A);border-bottom:1px solid rgba(255,255,255,0.08)}' +
        '#' + HUD_ID + ' h4{margin:0;font-size:13px;font-weight:800;flex:1}' +
        '#' + HUD_ID + ' button.hud-btn{background:#334155;color:#F8FAFC;border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:4px 8px;font-size:11px;cursor:pointer;font-family:inherit;font-weight:600}' +
        '#' + HUD_ID + ' button.hud-btn:hover{background:#475569}' +
        '#' + HUD_ID + ' button.hud-btn.primary{background:#2563EB;border-color:#2563EB}' +
        '#' + HUD_ID + ' button.hud-btn.primary:hover{background:#1D4ED8}' +
        '#' + HUD_ID + ' .hud-progress{height:4px;background:#1E293B;overflow:hidden}' +
        '#' + HUD_ID + ' .hud-bar{height:100%;background:linear-gradient(90deg,#06B6D4,#22D3EE);transition:width .25s ease}' +
        '#' + HUD_ID + ' .hud-toolbar{display:flex;gap:6px;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.05);flex-wrap:wrap;background:#0B1220}' +
        '#' + HUD_ID + ' .hud-status{padding:6px 12px;font-size:11px;color:#94A3B8;background:#0B1220;border-bottom:1px solid rgba(255,255,255,0.05)}' +
        '#' + HUD_ID + ' .hud-list{overflow-y:auto;flex:1;padding:6px 10px 10px}' +
        '#' + HUD_ID + ' details.hud-row{background:#1E293B;border:1px solid rgba(255,255,255,0.05);border-radius:8px;margin:6px 0;overflow:hidden}' +
        '#' + HUD_ID + ' details.hud-row summary{cursor:pointer;padding:8px 10px;list-style:none;display:flex;align-items:center;gap:8px;font-size:11px}' +
        '#' + HUD_ID + ' details.hud-row summary::-webkit-details-marker{display:none}' +
        '#' + HUD_ID + ' details.hud-row .hud-badge{padding:2px 6px;border-radius:4px;font-weight:700;font-size:10px;background:#334155;color:#E2E8F0;min-width:22px;text-align:center}' +
        '#' + HUD_ID + ' details.hud-row .hud-badge.ok{background:#065F46;color:#D1FAE5}' +
        '#' + HUD_ID + ' details.hud-row .hud-badge.err{background:#7F1D1D;color:#FECACA}' +
        '#' + HUD_ID + ' details.hud-row .hud-badge.run{background:#1E3A8A;color:#DBEAFE}' +
        '#' + HUD_ID + ' details.hud-row .hud-title{flex:1;font-weight:700;color:#F8FAFC;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
        '#' + HUD_ID + ' details.hud-row .hud-meta{color:#94A3B8;font-family:ui-monospace,monospace;font-size:10px}' +
        '#' + HUD_ID + ' details.hud-row .hud-body{padding:0 10px 10px;border-top:1px solid rgba(255,255,255,0.05)}' +
        '#' + HUD_ID + ' details.hud-row .hud-intent{color:#FBBF24;font-size:10.5px;padding:6px 0 4px}' +
        '#' + HUD_ID + ' details.hud-row .hud-kv{display:grid;grid-template-columns:max-content 1fr;gap:4px 10px;font-size:11px;padding:6px 0;border-bottom:1px dashed rgba(255,255,255,0.06);margin-bottom:8px}' +
        '#' + HUD_ID + ' details.hud-row .hud-kv dt{color:#94A3B8;font-weight:600}' +
        '#' + HUD_ID + ' details.hud-row .hud-kv dd{margin:0;color:#F1F5F9}' +
        '#' + HUD_ID + ' details.hud-row pre{background:#0B1220;border:1px solid rgba(255,255,255,0.05);border-radius:6px;padding:8px;font-size:10.5px;color:#CBD5E1;overflow:auto;max-height:260px;margin:0 0 6px;white-space:pre-wrap;word-break:break-word}' +
        '#' + HUD_ID + ' details.hud-row h5{margin:6px 0 4px;font-size:10.5px;color:#94A3B8;text-transform:uppercase;letter-spacing:.06em}' +
        '#' + HUD_ID + ' details.hud-row .hud-copy{margin-top:4px;display:flex;gap:6px}' +
      '</style>' +
      '<header>' +
        '<h4>🧪 AI Optimize Test Harness</h4>' +
        '<button class="hud-btn" data-act="min" title="Collapse panel">_</button>' +
        '<button class="hud-btn" data-act="close" title="Close">✕</button>' +
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

    // Toolbar handlers (event delegation keeps the HUD self-contained).
    el.addEventListener('click', (e) => {
      const t = e.target.closest('button.hud-btn'); if (!t) return;
      const act = t.getAttribute('data-act');
      const list = el.querySelector('.hud-list');
      if (act === 'close') { el.remove(); return; }
      if (act === 'min')   { const body = el.querySelector('.hud-list'); const tb = el.querySelector('.hud-toolbar'); const st = el.querySelector('.hud-status'); const on = body.style.display !== 'none'; body.style.display = on?'none':''; tb.style.display = on?'none':''; st.style.display = on?'none':''; return; }
      if (act === 'expand')   { list.querySelectorAll('details.hud-row').forEach(d => d.open = true); return; }
      if (act === 'collapse') { list.querySelectorAll('details.hud-row').forEach(d => d.open = false); return; }
      if (act === 'copy-all') {
        const bundle = window.__aiTestResults; if (!bundle){ return; }
        const json = JSON.stringify(bundle, null, 2);
        navigator.clipboard.writeText(json).then(() => { t.textContent = 'Copied ✓'; setTimeout(() => t.textContent = 'Copy JSON', 1500); })
          .catch(() => { t.textContent = 'Failed'; setTimeout(() => t.textContent = 'Copy JSON', 1500); });
        return;
      }
      if (act === 'copy-summary') {
        const bundle = window.__aiTestResults; if (!bundle){ return; }
        const rows = ['#\tlabel\tstatus\tscore_before\tscore_after\tdelta\tms\terror'];
        bundle.results.forEach(r => {
          const rv = r.received || {};
          rows.push([r.index, r.label, r.status||'', rv.original_score==null?'':rv.original_score, rv.improved_score==null?'':rv.improved_score, rv.delta==null?'':rv.delta, r.elapsed_ms==null?'':r.elapsed_ms, r.error||''].join('\t'));
        });
        const tsv = rows.join('\n');
        navigator.clipboard.writeText(tsv).then(() => { t.textContent = 'Copied ✓'; setTimeout(() => t.textContent = 'Copy Summary', 1500); });
        return;
      }
      if (act === 'download') {
        const bundle = window.__aiTestResults; if (!bundle){ return; }
        const blob = new Blob([JSON.stringify(bundle, null, 2)], { type:'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = 'ai-test-bundle-' + new Date().toISOString().replace(/[:.]/g,'-') + '.json';
        document.body.appendChild(a); a.click(); setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 500);
        return;
      }
    });
    return el;
  }

  function _hudSetStatus(text){
    const el = document.getElementById(HUD_ID); if (!el) return;
    const s = el.querySelector('.hud-status'); if (s) s.textContent = text;
  }
  function _hudSetProgress(done, total){
    const el = document.getElementById(HUD_ID); if (!el) return;
    const bar = el.querySelector('.hud-bar'); if (bar) bar.style.width = Math.round((done/Math.max(1,total))*100) + '%';
  }
  function _hudUpsertRow(fx, idx, total, entry){
    const el = document.getElementById(HUD_ID); if (!el) return;
    const list = el.querySelector('.hud-list');
    const rowId = HUD_ID + '-row-' + idx;
    let row = document.getElementById(rowId);
    const status = entry && entry.status;
    const err = entry && entry.error;
    const rv = (entry && entry.received) || null;
    const bscore = rv && typeof rv.original_score === 'number' ? rv.original_score : null;
    const ascore = rv && typeof rv.improved_score === 'number' ? rv.improved_score : null;
    const delta  = rv && typeof rv.delta === 'number' ? rv.delta : (bscore!=null && ascore!=null ? ascore - bscore : null);
    const decision = rv && rv.decision;
    const changes  = rv && Array.isArray(rv.candidate_changes) ? rv.candidate_changes.length : (rv && Array.isArray(rv.accepted_changes) ? rv.accepted_changes.length : 0);
    const kept     = rv && rv.summary_stats && typeof rv.summary_stats.changes_kept === 'number' ? rv.summary_stats.changes_kept : (rv && Array.isArray(rv.accepted_changes) ? rv.accepted_changes.length : null);
    const badgeCls = err ? 'err' : (status >= 200 && status < 300 ? 'ok' : 'run');
    const badgeTxt = err ? '✕' : (status ? String(status) : (idx+1));
    const metaBits = [];
    if (bscore!=null && ascore!=null) metaBits.push(bscore + '→' + ascore + ' (' + (delta>0?'+':'') + (delta==null?'?':delta) + ')');
    if (decision) metaBits.push(decision);
    if (kept!=null && changes) metaBits.push('kept ' + kept + '/' + changes);
    if (entry && entry.elapsed_ms != null) metaBits.push(entry.elapsed_ms + 'ms');
    const strategist = rv && rv.strategist_note ? rv.strategist_note : '';
    const firstImpression = rv && rv.recruiter_first_impression ? rv.recruiter_first_impression : '';

    const summaryHTML =
      '<summary>' +
        '<span class="hud-badge ' + badgeCls + '">' + _esc(badgeTxt) + '</span>' +
        '<span class="hud-title">#' + (idx+1) + ' · ' + _esc(fx.label) + '</span>' +
        '<span class="hud-meta">' + _esc(metaBits.join(' · ')) + '</span>' +
      '</summary>';
    const bodyHTML = entry ?
      '<div class="hud-body">' +
        (fx._intent ? '<div class="hud-intent">intent: ' + _esc(fx._intent) + '</div>' : '') +
        '<dl class="hud-kv">' +
          '<dt>target</dt><dd>' + _esc(fx.job_title) + ' @ ' + _esc(fx.company) + '</dd>' +
          (firstImpression ? '<dt>recruiter</dt><dd>' + _esc(firstImpression) + '</dd>' : '') +
          (strategist ? '<dt>strategist</dt><dd>' + _esc(strategist) + '</dd>' : '') +
          (err ? '<dt>error</dt><dd style="color:#FCA5A5">' + _esc(err) + '</dd>' : '') +
        '</dl>' +
        '<h5>SENT</h5>' +
        '<pre>' + _esc(JSON.stringify(entry.sent, null, 2)) + '</pre>' +
        '<h5>RECEIVED</h5>' +
        '<pre>' + _esc(JSON.stringify(entry.received, null, 2)) + '</pre>' +
        '<div class="hud-copy">' +
          '<button class="hud-btn" data-act="copy-row" data-row="' + idx + '">Copy this row JSON</button>' +
        '</div>' +
      '</div>' : '<div class="hud-body"><div class="hud-intent">Running…</div></div>';

    if (!row) {
      row = document.createElement('details');
      row.id = rowId; row.className = 'hud-row';
      list.appendChild(row);
    }
    row.innerHTML = summaryHTML + bodyHTML;
  }

  // Copy single row JSON (event delegation on list, bound once via the HUD).
  document.addEventListener('click', (e) => {
    const t = e.target.closest('button[data-act="copy-row"]'); if (!t) return;
    const rowIdx = parseInt(t.getAttribute('data-row'), 10);
    const bundle = window.__aiTestResults; if (!bundle) return;
    const row = bundle.results.find(r => r.index === rowIdx + 1);
    if (!row) return;
    navigator.clipboard.writeText(JSON.stringify(row, null, 2)).then(() => {
      t.textContent = 'Copied ✓'; setTimeout(() => t.textContent = 'Copy this row JSON', 1500);
    });
  });

  // Expose helpers
  window.runAITestBatch = runAITestBatch;
  window.runSiteTestBatch = runSiteTestBatch;
  window.__aiTestFixtures = FIXTURES;
  console.log('%c[AI-TEST] Loaded ' + FIXTURES.length + ' fixtures.', 'color:#2563EB;font-weight:bold');
  console.log('Manual: await runAITestBatch()   or   await runAITestBatch({ n: 5 })   or   await runAITestBatch({ only: [2,5,11] })');
  console.log('%c[SITE-TEST] Also available: await runSiteTestBatch()   — exercises every major builder endpoint (ping, check-sub, plan-count, analyze, enhance, optimize, tailor, rescore, interview-prep, research-role, career-path, generate).', 'color:#7C3AED');

  // ------------------------------------------------------------
  // AUTO-RUN: kicks off the full batch automatically on paste.
  // Set `window.__AI_TEST_AUTORUN = false` BEFORE pasting to skip.
  // ------------------------------------------------------------
  if (window.__AI_TEST_AUTORUN !== false) {
    // defer one tick so the console.log above renders first
    setTimeout(() => {
      runAITestBatch().catch(e => console.error('[AI-TEST] auto-run failed:', e));
    }, 50);
  }
})();


/* =====================================================================
   RESUME BUILDER — BROWSER-CONSOLE REGRESSION HARNESS
   ---------------------------------------------------------------------
   Safe, read-only smoke + regression checks for resumebuilder.html.

   HOW TO RUN (paste this whole file into DevTools console, then):
       await runRBRegressionTest({ mode: "desktop" });
       await runRBRegressionTest({ mode: "mobile"  });
       await runRBRegressionTest({ mode: "app"     });
   Shortcuts:
       runRBDesktopTest();  runRBMobileTest();  runRBAppTest();  runRBQuickTest();
   Optional AI smoke (uses runAITestBatch from console-ai-test-10-resumes.js):
       await runRBRegressionTest({ mode: "desktop", ai: true, aiCount: 1 });

   OUTPUT
   - Console report grouped into ✅ PASS / ⚠️ WARN / ❌ FAIL
   - Returns { passed, warnings, failed, results, errors, elapsed, mode }
   - Stored on window.__rbRegressionResults
   - Helpers on   window.__rbRegressionHelpers

   STATUS MEANINGS
   - ✅ PASS  invariant held
   - ⚠️ WARN  optional/missing feature or minor layout deviation
   - ❌ FAIL  real regression (missing global, broken onclick, overflow...)

   Does NOT mutate STATE, click destructive buttons, write to Firestore,
   or run the 30-fixture AI batch unless ai:true is passed.
   ===================================================================== */
(function(){
  'use strict';

  // ---------- safe DOM helpers (never throw) ----------
  const $  = (sel, root = document) => { try { return root.querySelector(sel); }       catch(_) { return null; } };
  const $$ = (sel, root = document) => { try { return Array.from(root.querySelectorAll(sel)); } catch(_) { return []; } };
  const visible = (el) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return false;
    const cs = getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0';
  };
  const textOf = (el) => (el && (el.innerText || el.textContent) || '').trim();
  const byTextButton = (needle) => {
    const n = String(needle || '').toLowerCase();
    return $$('button,a').find(b => textOf(b).toLowerCase().includes(n)) || null;
  };

  // ---------- scoped error capture (restored after run) ----------
  function installErrorCapture(bucket){
    const onErr = (e) => { try { bucket.push({ kind: 'error', msg: (e && (e.message || String(e))) || 'unknown', at: Date.now() }); } catch(_){} };
    const onRej = (e) => { try { bucket.push({ kind: 'unhandledrejection', msg: (e && e.reason && (e.reason.message || e.reason)) || 'unknown', at: Date.now() }); } catch(_){} };
    window.addEventListener('error', onErr);
    window.addEventListener('unhandledrejection', onRej);
    return () => {
      window.removeEventListener('error', onErr);
      window.removeEventListener('unhandledrejection', onRej);
    };
  }

  // ---------- reporter ----------
  function makeReport(){
    const results = [];
    const push = (status, name, info) => { results.push({ status, name, info: info || '' }); };
    return {
      results,
      pass: (n, i) => push('PASS', n, i),
      warn: (n, i) => push('WARN', n, i),
      fail: (n, i) => push('FAIL', n, i),
      wrap(name, fn){
        try {
          const r = fn();
          if (r && typeof r.then === 'function') return r.catch(e => push('FAIL', name, 'threw: ' + (e && e.message || e)));
        } catch(e){ push('FAIL', name, 'threw: ' + (e && e.message || e)); }
      },
    };
  }

  // ======== 1. APP BOOT ===================================================
  function testAppBoot(rep){
    rep.wrap('globals: STATE exists', () => {
      (typeof window.STATE === 'object' && window.STATE) ? rep.pass('globals: STATE exists') : rep.fail('globals: STATE exists', 'window.STATE missing');
    });
    rep.wrap('globals: API_BASE exists', () => {
      (typeof window.API_BASE === 'string' && window.API_BASE.length) ? rep.pass('globals: API_BASE exists', window.API_BASE) : rep.fail('globals: API_BASE exists');
    });
    rep.wrap('auth: current user detectable', () => {
      const u = window.currentUser || (window.firebase && firebase.auth && firebase.auth().currentUser) || null;
      u ? rep.pass('auth: current user detectable', u.email || u.uid || 'signed-in') : rep.warn('auth: current user detectable', 'no signed-in user (OK if logged-out test)');
    });
    rep.wrap('runtime: runExport hooked', () => {
      typeof window.runExport === 'function' ? rep.pass('runtime: runExport hooked') : rep.fail('runtime: runExport hooked');
    });
    rep.wrap('runtime: showToast exists', () => {
      typeof window.showToast === 'function' ? rep.pass('runtime: showToast exists') : rep.warn('runtime: showToast exists', 'optional');
    });
  }

  // ======== 2. CORE DOM SECTIONS ==========================================
  function testCoreDom(rep){
    const checks = [
      ['section: About Me',              '#step-about-me, #about-me, [data-step="about-me"]'],
      ['section: Import (in About Me)',  '#import-section, #step-import, [data-sub="about-import"], [data-testid^="import-"]'],
      ['section: Additional Details',    '#additional-resume-details, #additional-details, [data-sub="additional-details"]'],
      ['section: Target Role / Job',     '#step-target-role, #target-role, #job-title, [data-step="target-role"]'],
      ['section: Optimize',              '#step-optimize, #optimize-section, [data-step="optimize"]'],
      ['section: Preview',               '#preview-container, #preview-container-b, #preview-container-export'],
      ['section: Export',                '#step-export, [data-step="export"]'],
      ['section: Workspace bar',         '#workspace-bar, .workspace-bar, [data-testid="workspace-bar"]'],
    ];
    for (const [name, sel] of checks){
      rep.wrap(name, () => {
        const el = $(sel);
        if (!el) return rep.fail(name, 'not found: ' + sel);
        if (!visible(el)) return rep.warn(name, 'present but not visible');
        rep.pass(name);
      });
    }
  }

  // ======== 3. ABOUT ME + IMPORT (combined) ===============================
  function testAboutImport(rep){
    rep.wrap('import: accordion toggles', () => {
      const acc = $('[data-sub="about-import"], #import-section, .sub-acc[data-sub*="import"]');
      if (!acc) return rep.warn('import: accordion toggles', 'no import accordion found');
      const header = acc.querySelector('.sub-acc-header, button.accordion-toggle, summary') || acc;
      const before = acc.classList.contains('open');
      try { header.click(); } catch(_){}
      try { header.click(); } catch(_){}
      const after = acc.classList.contains('open');
      (before === after) ? rep.pass('import: accordion toggles') : rep.warn('import: accordion toggles', 'state differed after double-toggle');
    });
    rep.wrap('import: upload + paste controls', () => {
      const upload = $('input[type="file"][accept*="pdf"], input[type="file"][data-testid*="upload"]');
      const paste  = $('#resume-text, textarea[data-testid*="paste"], textarea[placeholder*="paste" i]');
      const linkedin = byTextButton('linkedin') || $('[data-testid*="linkedin"]');
      (upload && paste) ? rep.pass('import: upload + paste controls', linkedin ? 'linkedin present' : 'linkedin not present (OK if removed)') : rep.fail('import: upload + paste controls', `upload=${!!upload} paste=${!!paste}`);
    });
    rep.wrap('about: manual fields exist', () => {
      const n = [$('#manual-full-name, #basic-name'), $('#manual-current-title, #basic-title'), $('#manual-summary, #basic-summary')].filter(Boolean).length;
      (n >= 2) ? rep.pass('about: manual fields exist', `${n}/3`) : rep.fail('about: manual fields exist', `only ${n}/3`);
    });
    rep.wrap('about: no legacy duplicate import step', () => {
      const legacyVisible = $$('#step-import, [data-step="import"]').filter(visible);
      const combined = $$('[data-sub="about-import"]').filter(visible);
      (legacyVisible.length === 0 || combined.length > 0) ? rep.pass('about: no legacy duplicate import step') : rep.warn('about: no legacy duplicate import step', 'legacy step still visible');
    });
  }

  // ======== 4. COLLAPSIBLES ===============================================
  function testCollapsibles(rep){
    rep.wrap('collapsible: Additional Details', () => {
      const det = $('#additional-resume-details, #additional-details, [data-sub="additional-details"]');
      if (!det) return rep.warn('collapsible: Additional Details', 'not found');
      const header = det.querySelector('.sub-acc-header, summary, button') || det;
      try { header.click(); } catch(_){}
      try { header.click(); } catch(_){}
      rep.pass('collapsible: Additional Details', 'double-click did not throw');
    });
    rep.wrap('collapsible: an active section remains reachable', () => {
      const open = $$('.sub-acc.open, section:not(.hidden), details[open]').filter(visible);
      open.length ? rep.pass('collapsible: an active section remains reachable', `${open.length} open`) : rep.warn('collapsible: an active section remains reachable', 'nothing obviously open');
    });
  }

  // ======== 5. WORKSPACE BAR ==============================================
  function testWorkspaceBar(rep, mode){
    const wb = $('#workspace-bar, .workspace-bar, [data-testid="workspace-bar"]');
    if (!wb){ rep.fail('workspace-bar: present'); return; }
    rep.pass('workspace-bar: present');
    const save     = wb.querySelector('[data-testid*="save"], button[title*="save" i]')     || byTextButton('save');
    const publish  = wb.querySelector('[data-testid*="publish"], [onclick*="publishAndShare" i]') || byTextButton('publish');
    const optimize = wb.querySelector('[data-testid*="optimize"], [onclick*="optimize" i]') || byTextButton('optimize');
    save     ? rep.pass('workspace-bar: save button')    : rep.warn('workspace-bar: save button', 'not found');
    publish  ? rep.pass('workspace-bar: publish button') : rep.warn('workspace-bar: publish button', 'not found');
    optimize ? rep.pass('workspace-bar: optimize link')  : rep.warn('workspace-bar: optimize link', 'not found');
    rep.wrap('workspace-bar: no awkward wrap', () => {
      const h = wb.getBoundingClientRect().height;
      const limit = (mode === 'desktop') ? 120 : 160;
      (h <= limit) ? rep.pass('workspace-bar: no awkward wrap', `h=${h.toFixed(0)}px`) : rep.warn('workspace-bar: no awkward wrap', `h=${h.toFixed(0)}px`);
    });
    rep.wrap('workspace-bar: tap targets >=28px', () => {
      const btns = $$('button,a', wb);
      const tiny = btns.filter(b => { const r = b.getBoundingClientRect(); return r.width && r.height && (r.width < 28 || r.height < 28); });
      (tiny.length === 0) ? rep.pass('workspace-bar: tap targets >=28px', `${btns.length} btns`) : rep.warn('workspace-bar: tap targets >=28px', `${tiny.length}/${btns.length} too small`);
    });
  }

  // ======== 6. WALKTHROUGH ================================================
  function testWalkthrough(rep){
    const wt = window.walkthrough || window.WALKTHROUGH || window.__walkthrough || null;
    if (!wt){ rep.warn('walkthrough: object exists', 'not found — skipping'); return; }
    rep.pass('walkthrough: object exists');
    const steps = Array.isArray(wt.steps) ? wt.steps : (Array.isArray(wt) ? wt : []);
    if (!steps.length){ rep.warn('walkthrough: steps array', 'empty'); return; }
    rep.pass('walkthrough: steps array', `${steps.length} steps`);
    steps.forEach((s, i) => {
      const sel = s && (s.target || s.selector || s.el || '');
      if (!sel){ rep.warn(`walkthrough: step ${i+1} has target`, 'no selector'); return; }
      const el = (typeof sel === 'string') ? $(sel) : (sel instanceof Element ? sel : null);
      if (!el){ rep.fail(`walkthrough: step ${i+1} target resolves`, 'not found: ' + sel); return; }
      rep.pass(`walkthrough: step ${i+1} target resolves`);
      if (i === 3){
        const id = (el.id || '').toLowerCase();
        const txt = textOf(el).toLowerCase();
        (id.includes('optimize') || txt.includes('optimize')) ? rep.pass('walkthrough: step 4 → optimize target') : rep.warn('walkthrough: step 4 → optimize target', 'does not look like optimize');
      }
    });
  }

  // ======== 7. ROLE RESEARCH ==============================================
  function testRoleResearch(rep){
    const title   = $('#job-title, [name="jobTitle"]');
    const company = $('#job-company, [name="company"]');
    const jd      = $('#job-description, [name="jobDescription"], textarea[placeholder*="description" i]');
    const n = [title, company, jd].filter(Boolean).length;
    (n >= 2) ? rep.pass('role: title/company/jd fields', `${n}/3`) : rep.fail('role: title/company/jd fields', `only ${n}/3`);
    const chip = $('#role-research-status, [data-testid="role-research-chip"], .role-research-chip');
    chip ? rep.pass('role: research status chip') : rep.warn('role: research status chip', 'not found');
    const trg = byTextButton('research role') || $('[onclick*="researchRole" i]');
    trg ? rep.pass('role: manual trigger') : rep.warn('role: manual trigger', 'not found');
    (typeof window.importFromLinkedIn === 'function' || typeof window.linkedInImport === 'function')
      ? rep.pass('role: linkedin import hook')
      : rep.warn('role: linkedin import hook', 'no linkedin import function exposed (OK if removed)');
  }

  // ======== 8. OPTIMIZE READINESS =========================================
  function testOptimizeReadiness(rep){
    const b = $('[data-testid*="optimize"], button[onclick*="optimize" i]') || byTextButton('optimize');
    b ? rep.pass('optimize: button exists') : rep.fail('optimize: button exists');
    (typeof window.openOptimizeBeforeAfter === 'function')
      ? rep.pass('optimize: before/after fn exists')
      : rep.fail('optimize: before/after fn exists');
    const c = $('#optimize-result, #optimize-output, [data-testid="optimize-result"]');
    c ? rep.pass('optimize: result container exists') : rep.warn('optimize: result container exists', 'not found');
  }

  // ======== 9. BEFORE/AFTER UI (mocked session) ===========================
  function testBeforeAfterUI(rep){
    if (typeof window.openOptimizeBeforeAfter !== 'function'){ rep.warn('b/a: render mock', 'openOptimizeBeforeAfter not available'); return; }
    const mock = {
      beforeScore: 62, afterScore: 81,
      improvements: [
        { section: 'Summary', before: 'Hard worker with many skills.', after: 'Senior operations leader with 8 yrs scaling SaaS teams to $20M ARR.', why_it_matters: 'Adds metric and seniority.' }
      ]
    };
    try {
      window.openOptimizeBeforeAfter(mock);
      const modal = $('#rb-ba-modal');
      if (!modal){ rep.fail('b/a: render mock', 'modal did not appear'); return; }
      rep.pass('b/a: render mock');
      const hdr = textOf(modal);
      /resume improvements/i.test(hdr) ? rep.pass('b/a: header present') : rep.warn('b/a: header present');
      /match score/i.test(hdr) ? rep.pass('b/a: match score line') : rep.warn('b/a: match score line');
      const cards = modal.querySelectorAll('details, .rb-ba-card');
      cards.length ? rep.pass('b/a: before/after cards', String(cards.length)) : rep.warn('b/a: before/after cards');
      /why it matters|adds metric/i.test(hdr) ? rep.pass('b/a: why_it_matters rendered') : rep.warn('b/a: why_it_matters rendered');
      (document.documentElement.scrollWidth > window.innerWidth + 1)
        ? rep.warn('b/a: no horizontal overflow', 'overflow detected')
        : rep.pass('b/a: no horizontal overflow');
    } catch(e){
      rep.fail('b/a: render mock', 'threw: ' + (e && e.message || e));
    } finally {
      try { const m = $('#rb-ba-modal'); if (m) m.remove(); } catch(_){}
    }
  }

  // ======== 10. EXPORT SURFACE ============================================
  function testExportSurface(rep, mode){
    const step = $('#step-export');
    if (!step){ rep.fail('export: step present'); return; }
    rep.pass('export: step present');
    const tiles = $$('button.export-tile, .export-tile', step);
    const want = [
      ['pptx',     t => /powerpoint|pptx/i.test(t)],
      ['docx',     t => /word|docx/i.test(t)],
      ['html',     t => /\bhtml\b/i.test(t)],
      ['email',    t => /email/i.test(t)],
      ['publish',  t => /publish/i.test(t)],
      ['versions', t => /version/i.test(t)],
    ];
    for (const [key, test] of want){
      const found = tiles.find(tl => test(textOf(tl)));
      found ? rep.pass(`export: ${key} tile`) : rep.warn(`export: ${key} tile`, 'not found');
    }
    if (mode === 'mobile' || mode === 'app'){
      const tall = tiles.filter(t => t.getBoundingClientRect().height > 120);
      tall.length === 0 ? rep.pass('export: cards not excessively tall') : rep.warn('export: cards not excessively tall', `${tall.length} >120px`);
    }
    (document.documentElement.scrollWidth > window.innerWidth + 1)
      ? rep.warn('export: no horizontal overflow', `scrollW=${document.documentElement.scrollWidth} vw=${window.innerWidth}`)
      : rep.pass('export: no horizontal overflow');
    // Critical: every tile's onclick must point to a defined function.
    // Catches regressions like "publishPlan is not defined".
    rep.wrap('export: tile onclicks resolve', () => {
      const broken = [];
      for (const t of tiles){
        const oc = t.getAttribute('onclick') || '';
        const m = oc.match(/([a-zA-Z_$][\w$]*)\s*\(/);
        if (!m) continue;
        if (typeof window[m[1]] !== 'function') broken.push(m[1]);
      }
      broken.length === 0 ? rep.pass('export: tile onclicks resolve')
                          : rep.fail('export: tile onclicks resolve', 'undefined: ' + broken.join(', '));
    });
  }

  // ======== 11. EXPORT MODEL ==============================================
  function testExportModel(rep){
    if (typeof window.buildFinalExportModel !== 'function'){ rep.fail('model: buildFinalExportModel exists'); return; }
    rep.pass('model: buildFinalExportModel exists');
    try {
      const m = window.buildFinalExportModel();
      if (!m || typeof m !== 'object'){ rep.fail('model: returns object'); return; }
      rep.pass('model: returns object');
      (m.summary == null || String(m.summary).length <= 450)
        ? rep.pass('model: summary length guard', `len=${(m.summary||'').length}`)
        : rep.warn('model: summary length guard', `len=${m.summary.length}`);
      Array.isArray(m.sections) ? rep.pass('model: sections array') : rep.warn('model: sections array', 'missing');
      (m.template || m.style || m.accent || m.color) ? rep.pass('model: template/accent/source') : rep.warn('model: template/accent/source', 'none found');
    } catch(e){
      rep.fail('model: returns object', 'threw: ' + (e && e.message || e));
    }
  }

  // ======== 12. AI HARNESS PRESENCE (no auto-run) =========================
  function testAIHarnessPresence(rep){
    typeof window.runAITestBatch === 'function'
      ? rep.pass('ai: runAITestBatch available')
      : rep.warn('ai: runAITestBatch available', 'not loaded — paste console-ai-test-10-resumes.js first if you want it');
  }
  async function maybeRunAISmoke(rep, opts){
    if (!opts.ai) return;
    if (typeof window.runAITestBatch !== 'function'){ rep.warn('ai: smoke run', 'runAITestBatch not loaded'); return; }
    const n = Math.max(1, Math.min(3, opts.aiCount || 1));
    try { await window.runAITestBatch({ n }); rep.pass('ai: smoke run', `n=${n}`); }
    catch(e){ rep.fail('ai: smoke run', 'threw: ' + (e && e.message || e)); }
  }

  // ======== 13. RESPONSIVE / OVERFLOW =====================================
  function testResponsive(rep, mode){
    const vw = window.innerWidth, vh = window.innerHeight;
    rep.pass('responsive: viewport', `${vw}x${vh} mode=${mode}`);
    (document.documentElement.scrollWidth > vw + 1)
      ? rep.fail('responsive: no horizontal overflow', `scrollW=${document.documentElement.scrollWidth}`)
      : rep.pass('responsive: no horizontal overflow');
    if (mode === 'mobile' || mode === 'app'){
      (vw > 900)
        ? rep.warn('responsive: narrow viewport', `vw=${vw} — enable DevTools device toolbar (≤480px) for a real mobile run`)
        : rep.pass('responsive: narrow viewport', `vw=${vw}`);
    }
  }

  // ======== ORCHESTRATOR ==================================================
  async function runRBRegressionTest(opts){
    opts = Object.assign({ mode: 'desktop', destructive: false, ai: false, aiCount: 1, quick: false }, opts || {});
    if (opts.destructive) console.warn('[rb-regression] destructive flag ignored — harness is read-only');
    const rep = makeReport();
    const errs = [];
    const uninstall = installErrorCapture(errs);
    const t0 = performance.now();

    console.groupCollapsed('%c[rb-regression] ' + opts.mode + (opts.quick ? ' (quick)' : ''), 'color:#0A2F6B;font-weight:700');
    try {
      testAppBoot(rep);
      testCoreDom(rep);
      testAboutImport(rep);
      testCollapsibles(rep);
      testWorkspaceBar(rep, opts.mode);
      if (!opts.quick) testWalkthrough(rep);
      if (!opts.quick) testRoleResearch(rep);
      testOptimizeReadiness(rep);
      if (!opts.quick) testBeforeAfterUI(rep);
      testExportSurface(rep, opts.mode);
      testExportModel(rep);
      if (!opts.quick) testAIHarnessPresence(rep);
      testResponsive(rep, opts.mode);
      await maybeRunAISmoke(rep, opts);
    } finally {
      uninstall();
      console.groupEnd();
    }

    if (errs.length){
      rep.warn('runtime: errors captured during test', errs.slice(0,5).map(e => e.msg).join(' | ') + (errs.length > 5 ? ' …' : ''));
    }

    const passed   = rep.results.filter(r => r.status === 'PASS').length;
    const warnings = rep.results.filter(r => r.status === 'WARN').length;
    const failed   = rep.results.filter(r => r.status === 'FAIL').length;
    const elapsed  = ((performance.now() - t0)/1000).toFixed(2);
    const summary  = { passed, warnings, failed, elapsed, mode: opts.mode, results: rep.results, errors: errs };
    window.__rbRegressionResults = summary;

    const banner = `[rb-regression] ${opts.mode} done in ${elapsed}s  ✅ ${passed}  ⚠️ ${warnings}  ❌ ${failed}`;
    console.log('%c' + banner, 'font-weight:800;color:' + (failed ? '#B91C1C' : warnings ? '#B45309' : '#047857'));
    console.groupCollapsed('✅ PASS (' + passed + ')');
    rep.results.filter(r => r.status === 'PASS').forEach(r => console.log('✔', r.name, r.info ? '— ' + r.info : ''));
    console.groupEnd();
    console.groupCollapsed('⚠️ WARN (' + warnings + ')');
    rep.results.filter(r => r.status === 'WARN').forEach(r => console.warn('⚠', r.name, r.info ? '— ' + r.info : ''));
    console.groupEnd();
    console.groupCollapsed('❌ FAIL (' + failed + ')');
    rep.results.filter(r => r.status === 'FAIL').forEach(r => console.error('✖', r.name, r.info ? '— ' + r.info : ''));
    console.groupEnd();

    return summary;
  }

  // ---------- shortcuts ----------
  const runRBDesktopTest = () => runRBRegressionTest({ mode: 'desktop' });
  const runRBMobileTest  = () => runRBRegressionTest({ mode: 'mobile'  });
  const runRBAppTest     = () => runRBRegressionTest({ mode: 'app'     });
  const runRBQuickTest   = () => runRBRegressionTest({ mode: 'desktop', quick: true });

  // ---------- publish globals ----------
  window.runRBRegressionTest = runRBRegressionTest;
  window.runRBDesktopTest    = runRBDesktopTest;
  window.runRBMobileTest     = runRBMobileTest;
  window.runRBAppTest        = runRBAppTest;
  window.runRBQuickTest      = runRBQuickTest;
  window.__rbRegressionHelpers = { $, $$, visible, textOf, byTextButton, makeReport, installErrorCapture };

  // =====================================================================
  // TEST DATA SEEDING — loads a realistic fixture into STATE so tests
  // can actually exercise preview/export/optimize with real content.
  // Snapshots STATE before; returns a handle with a restore() method.
  // =====================================================================
  function _pickFixture(){
    const fx = Array.isArray(window.__aiTestFixtures) ? window.__aiTestFixtures : [];
    return fx[4] || fx[0] || null;
  }
  function _fallbackFixture(){
    return {
      label: 'Fallback seed (no __aiTestFixtures found)',
      resume_data: {
        name: 'Jordan Avery', current_title: 'Senior Product Manager',
        email: 'jordan.avery@example.com', phone: '(415) 555-0199',
        address: 'San Francisco, CA', linkedin: 'linkedin.com/in/jordanavery',
        summary: 'Senior product manager with 8+ years shipping B2B SaaS platforms used by 40k+ users. Partners with engineering, design, and GTM to drive measurable business outcomes.',
        skills: ['Product Strategy','Roadmapping','SQL','A/B Testing','Jira','Figma','Analytics','Stakeholder Management','User Research','Go-to-market'],
        experience: [
          { title:'Senior Product Manager', company:'Beacon Cloud', location:'San Francisco, CA', dates:'2022 — Present',
            bullets:[
              'Launched partner-integration platform adopted by 18 partners in first 9 months, generating $4.2M ARR.',
              'Led cross-functional team of 12 through discovery-to-launch on self-serve onboarding, lifting activation 34%.',
              'Owned quarterly OKRs across 3 squads; shipped 27 releases with zero P0 incidents.'
            ]},
          { title:'Product Manager', company:'Lyric Software', location:'Atlanta, GA', dates:'2019 — 2022',
            bullets:[
              'Drove migration of 12k customers to new billing engine, reducing churn 11%.',
              'Introduced weekly discovery cadence; reduced backlog waste 28%.'
            ]}
        ],
        education: [{ degree:'BS, Computer Science', school:'Georgia Tech', year:'2016' }],
        certifications: [{ name:'Pragmatic Product Management', issuer:'Pragmatic Institute', year:'2021' }],
        achievements: [{ title:'Top Product Launch 2023', description:'Recognized company-wide for partner-integration launch.' }],
        volunteer_experience: [{ role:'Mentor', organization:'TechBridge ATL', dates:'2020 — Present' }],
        leadership_engagement: [], projects: [], languages: []
      },
      job_description: 'Principal Product Manager, Platform at a B2B SaaS firm. Drive platform strategy, partner integrations, and measurable business outcomes. Strong cross-functional leadership required.',
      job_title: 'Principal Product Manager, Platform',
      company: 'Outrigger Analytics'
    };
  }
  function seedTestData(opts){
    opts = opts || {};
    if (!window.STATE || typeof window.STATE !== 'object'){
      console.warn('[seed] window.STATE missing — nothing to seed');
      return { restored: false, fixtureLabel: null, restore(){} };
    }
    const fx = opts.fixture || _pickFixture() || _fallbackFixture();

    // Snapshot STATE keys + form-field values so we can restore cleanly.
    const keys = ['resumeData','rawResumeText','resumeFileName','resumeExtractedAt','jobTitle','jobCompany','jobDescription','targetRole'];
    const snapshot = {};
    for (const k of keys) snapshot[k] = window.STATE[k];
    const formFields = [
      '#manual-full-name','#basic-name','#manual-current-title','#basic-title',
      '#manual-summary','#basic-summary','#manual-email','#basic-email','#manual-phone','#basic-phone',
      '#manual-address','#basic-address','#manual-linkedin','#basic-linkedin',
      '#job-title','#job-company','#job-description','#resume-text'
    ];
    const fieldSnap = {};
    for (const sel of formFields){ const el = $(sel); if (el) fieldSnap[sel] = el.value; }

    // Write fixture into STATE.
    const rd = fx.resume_data || {};
    window.STATE.resumeData = rd;
    window.STATE.rawResumeText = (typeof fx.raw_text === 'string' && fx.raw_text)
      || [rd.name, rd.current_title, rd.summary].filter(Boolean).join('\n\n');
    window.STATE.resumeFileName = fx.label || 'test-seed.txt';
    window.STATE.resumeExtractedAt = Date.now();
    window.STATE.jobTitle       = fx.job_title       || window.STATE.jobTitle;
    window.STATE.jobCompany     = fx.company         || window.STATE.jobCompany;
    window.STATE.jobDescription = fx.job_description || window.STATE.jobDescription;
    window.STATE.targetRole     = fx.job_title       || window.STATE.targetRole;

    // Write visible form fields so DOM-based tests see real values.
    const setVal = (sel, v) => {
      const el = $(sel); if (!el || v == null) return;
      el.value = v;
      el.dispatchEvent(new Event('input', { bubbles:true }));
      el.dispatchEvent(new Event('change', { bubbles:true }));
    };
    setVal('#manual-full-name', rd.name);         setVal('#basic-name', rd.name);
    setVal('#manual-current-title', rd.current_title); setVal('#basic-title', rd.current_title);
    setVal('#manual-summary', rd.summary);        setVal('#basic-summary', rd.summary);
    setVal('#manual-email', rd.email);            setVal('#basic-email', rd.email);
    setVal('#manual-phone', rd.phone);            setVal('#basic-phone', rd.phone);
    setVal('#manual-address', rd.address);        setVal('#basic-address', rd.address);
    setVal('#manual-linkedin', rd.linkedin);      setVal('#basic-linkedin', rd.linkedin);
    setVal('#job-title', fx.job_title);
    setVal('#job-company', fx.company);
    setVal('#job-description', fx.job_description);

    // Ask the app to populate its dynamic row lists if available.
    try { if (typeof window.populateManualEntryFromState === 'function') window.populateManualEntryFromState(); }
    catch(e){ console.warn('[seed] populateManualEntryFromState failed:', e); }

    console.log('%c[seed] STATE seeded with fixture: ' + (fx.label || 'unnamed'), 'color:#047857;font-weight:700');

    return {
      restored: false,
      fixtureLabel: fx.label || null,
      restore(){
        if (this.restored) return;
        for (const k of keys) window.STATE[k] = snapshot[k];
        for (const sel of formFields){
          const el = $(sel); if (!el || !(sel in fieldSnap)) continue;
          el.value = fieldSnap[sel] || '';
          el.dispatchEvent(new Event('input', { bubbles:true }));
          el.dispatchEvent(new Event('change', { bubbles:true }));
        }
        try { if (typeof window.populateManualEntryFromState === 'function') window.populateManualEntryFromState(); } catch(_) {}
        this.restored = true;
        console.log('%c[seed] STATE restored from snapshot', 'color:#6B7280');
      }
    };
  }
  window.seedTestData = seedTestData;

  // =====================================================================
  // MASTER RUNNER — runs everything in one command
  //   await runAllTests();                          // seed + desktop+mobile+app, copies JSON to clipboard
  //   await runAllTests({ ai: true, aiCount: 2 });  // + AI smoke inside each regression run
  //   await runAllTests({ skipAIBatch: false });    // + full 30-resume AI batch
  //   await runAllTests({ seed: false });           // skip auto-seed (test empty state)
  //   await runAllTests({ keep: true });            // leave seeded data in STATE after tests
  //   await runAllTests({ copyJson: false });       // skip clipboard copy
  // =====================================================================
  async function runAllTests(opts){
    opts = Object.assign({
      ai: false,
      aiCount: 1,
      skipAIBatch: true,
      seed: true,
      keep: false,
      copyJson: true,
    }, opts || {});

    const t0 = performance.now();
    const out = { seed: null, desktop: null, mobile: null, app: null, aiBatch: null };

    console.log('%c[run-all] starting full regression sweep…', 'color:#0A2F6B;font-weight:800;font-size:13px');

    // Seed STATE so tests exercise real content.
    let seedHandle = null;
    if (opts.seed){
      try {
        seedHandle = seedTestData();
        out.seed = { seeded: true, fixture: seedHandle.fixtureLabel };
      } catch(e){
        console.warn('[run-all] seedTestData failed:', e);
        out.seed = { seeded: false, error: String(e && e.message || e) };
      }
    } else {
      out.seed = { seeded: false, reason: 'seed:false' };
    }

    console.log('%c[run-all] 1/3 desktop', 'color:#0A2F6B;font-weight:700');
    out.desktop = await runRBRegressionTest({ mode: 'desktop', ai: opts.ai, aiCount: opts.aiCount });

    console.log('%c[run-all] 2/3 mobile',  'color:#0A2F6B;font-weight:700');
    out.mobile  = await runRBRegressionTest({ mode: 'mobile',  ai: opts.ai, aiCount: opts.aiCount });

    console.log('%c[run-all] 3/3 app',     'color:#0A2F6B;font-weight:700');
    out.app     = await runRBRegressionTest({ mode: 'app',     ai: opts.ai, aiCount: opts.aiCount });

    if (!opts.skipAIBatch && typeof window.runAITestBatch === 'function'){
      console.log('%c[run-all] + AI 30-resume batch', 'color:#0A2F6B;font-weight:700');
      try { out.aiBatch = await window.runAITestBatch(); }
      catch(e){ console.error('[run-all] AI batch failed:', e); out.aiBatch = { error: String(e && e.message || e) }; }
    }

    // Restore STATE unless asked to keep it.
    if (seedHandle && !opts.keep){
      try { seedHandle.restore(); } catch(e){ console.warn('[run-all] restore failed:', e); }
    }

    const totals = ['desktop','mobile','app'].reduce((acc, k) => {
      const r = out[k]; if (!r) return acc;
      acc.passed   += r.passed;
      acc.warnings += r.warnings;
      acc.failed   += r.failed;
      return acc;
    }, { passed: 0, warnings: 0, failed: 0 });

    const elapsed = ((performance.now() - t0)/1000).toFixed(2);
    const banner = `[run-all] done in ${elapsed}s  ✅ ${totals.passed}  ⚠️ ${totals.warnings}  ❌ ${totals.failed}`;
    console.log('%c' + banner, 'font-weight:800;font-size:14px;color:' + (totals.failed ? '#B91C1C' : totals.warnings ? '#B45309' : '#047857'));

    console.groupCollapsed('[run-all] per-mode summary');
    console.table({
      desktop: { passed: out.desktop?.passed, warn: out.desktop?.warnings, fail: out.desktop?.failed, secs: out.desktop?.elapsed },
      mobile:  { passed: out.mobile?.passed,  warn: out.mobile?.warnings,  fail: out.mobile?.failed,  secs: out.mobile?.elapsed  },
      app:     { passed: out.app?.passed,     warn: out.app?.warnings,     fail: out.app?.failed,     secs: out.app?.elapsed     },
    });
    console.groupEnd();

    const summary = {
      totals, elapsed,
      seeded: out.seed,
      modes: { desktop: out.desktop, mobile: out.mobile, app: out.app },
      aiBatch: out.aiBatch || null,
      generated_at: new Date().toISOString(),
      href: (typeof location !== 'undefined') ? location.href : null,
      user_agent: (typeof navigator !== 'undefined') ? navigator.userAgent : null,
    };
    window.__rbAllTestResults = summary;

    // Copy full combined JSON to clipboard (opt out with copyJson:false).
    if (opts.copyJson){
      try {
        const json = JSON.stringify(summary, null, 2);
        await navigator.clipboard.writeText(json);
        console.log('%c[run-all] JSON (' + json.length.toLocaleString() + ' chars) copied to clipboard', 'color:#047857;font-weight:700');
      } catch(e){
        console.warn('[run-all] clipboard copy failed. Run:  copy(JSON.stringify(__rbAllTestResults, null, 2))');
      }
    }

    // Auto-download a .json file (opt out with download:false).
    if (opts.download !== false){
      try { downloadTestResults(summary); }
      catch(e){ console.warn('[run-all] auto-download failed:', e); }
    }

    return summary;
  }
  window.runAllTests = runAllTests;

  // =====================================================================
  // EXPORT HELPERS — save the combined JSON as a file
  //   downloadTestResults()           // saves window.__rbAllTestResults
  //   downloadTestResults(myBundle)   // saves whatever you pass
  //   downloadAllTestData()           // saves regression + AI batch together
  // =====================================================================
  function downloadTestResults(bundle){
    const data = bundle || window.__rbAllTestResults;
    if (!data){ console.warn('[download] nothing to save. Run  await runAllTests()  first.'); return null; }
    const ts = new Date().toISOString().replace(/[:.]/g,'-');
    const name = 'rb-test-results-' + ts + '.json';
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name; a.style.display = 'none';
    document.body.appendChild(a); a.click();
    setTimeout(() => { try { document.body.removeChild(a); URL.revokeObjectURL(url); } catch(_){} }, 500);
    console.log('%c[download] saved ' + name + ' (' + json.length.toLocaleString() + ' chars)', 'color:#047857;font-weight:700');
    return name;
  }
  function downloadAllTestData(){
    const combined = {
      regression: window.__rbAllTestResults || null,
      aiBatch:    window.__aiTestResults    || null,
      generated_at: new Date().toISOString(),
      href: (typeof location !== 'undefined') ? location.href : null,
    };
    if (!combined.regression && !combined.aiBatch){
      console.warn('[download] no data yet. Run  await runAllTests()  and/or  await runAITestBatch()  first.');
      return null;
    }
    return downloadTestResults(combined);
  }
  window.downloadTestResults = downloadTestResults;
  window.downloadAllTestData = downloadAllTestData;

  console.log('%c[rb-regression] loaded. One command:  await runAllTests()   — auto-downloads rb-test-results-*.json', 'color:#0A2F6B;font-weight:600');
  console.log('%c[rb-regression] Also available:  downloadTestResults()  |  downloadAllTestData()  (regression + AI batch)', 'color:#0A2F6B');
})();
