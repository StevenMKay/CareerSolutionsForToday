# ImpactHub Backend Contract

**Status:** Frontend (`ImpactHub.html`) is complete and calls a Railway-hosted `/impact/analyze` route. That route **must be added to the existing Railway backend** at `https://projectbackend-production-aa38.up.railway.app`. Until it exists, the frontend detects 404 / 501 / network-unreachable and offers a clearly labeled **Demonstration Analysis** (deterministic mock) instead. All other errors (400 / 401 / 403 / 409 / 5xx after retry) surface to the user unmodified.

The backend must reuse the **same Firebase Admin SDK, token validation middleware, and OpenAI client** that the Resume Builder routes already use. Do not create a second Firebase project. Do not create a second provider account.

---

## 1. Route

```
POST /api/impact/analyze
```

**Namespace note:** Must be under `/api/impact/*`. Do **not** reuse `/api/builder/*` routes — those have resume-specific prompts and response schemas that will silently corrupt impact analyses.

## 2. Authentication

- Require an `Authorization: Bearer <FirebaseIdToken>` header.
- Validate with `firebase-admin` (`admin.auth().verifyIdToken(token)`).
- Reject with `401 { error: 'unauthorized', message: '...' }` on missing / expired / invalid token.
- Extract `uid` and `email` from the decoded token.

## 3. Tenant Authorization

- Read `tenantId` from the request body.
- Look up the caller's tenant membership (same lookup PMSite uses — likely `users/{uid}.tenants[]` or `tenants/{tenantId}/members/{uid}`).
- Reject with `403 { error: 'forbidden', message: 'not a member of this tenant' }` if caller is not a member.
- **Never** allow cross-tenant reads or writes.
- **Reject** `tenantId === 'demo'` unless the caller is explicitly whitelisted for demo access — production tenants must never be written under `demo`.

## 4. Rate Limiting & Abuse Prevention

- Per-user, per-tenant sliding window: recommend 20 requests per hour, 200 per day.
- Reject with `429 { error: 'rate_limited', retryAfter: <seconds> }`.
- Log all requests with `{ requestId, uid, tenantId, analysisType, timestamp, latencyMs, tokenIn, tokenOut, cost }`.

## 5. Request Contract

```json
{
  "analysisType": "full",
  "tenantId": "acme-demo",
  "project": {
    "id": "PRJ-1007",
    "title": "Digital Dispute Platform Replacement",
    "description": "...",
    "businessObjective": "...",
    "itemType": "project",
    "status": "assessment",
    "priority": "high",
    "ownerId": "u_...",
    "impactLeadId": "u_...",
    "sponsorId": "u_...",
    "primaryDepartmentId": "d_...",
    "startDate": "2026-08-01",
    "targetDate": "2027-02-15",
    "systems": ["sys_dispute", "sys_notice"],
    "departments": ["Operations", "Compliance"],
    "businessProcesses": ["Dispute Intake", "Customer Notice"],
    "dataDomains": ["Customer PII", "Transaction History"],
    "vendors": ["v_verify"],
    "customerJourneys": ["Dispute Filing"],
    "policies": ["p_notice"],
    "regulations": ["reg_ecoa"],
    "controls": ["ctl_notice_approval"],
    "assessmentAnswers": { "customerFacing": true, "thirdParty": true }
  },
  "portfolioContext": [
    {
      "id": "PRJ-1002",
      "title": "Customer Communications Modernization",
      "description": "...",
      "status": "in_progress",
      "startDate": "2026-06-01",
      "targetDate": "2027-03-30",
      "systems": ["sys_notice"],
      "departments": ["Operations", "Marketing"],
      "businessProcesses": ["Customer Notice"],
      "dataDomains": ["Customer PII"],
      "vendors": [],
      "regulations": ["reg_ecoa"],
      "controls": ["ctl_notice_approval"]
    }
  ],
  "knowledgeContext": {
    "departments": [{ "id": "d_...", "name": "Compliance" }],
    "systems": [{ "id": "sys_...", "name": "...", "criticality": "high" }],
    "processes": [],
    "vendors": [],
    "policies": [],
    "regulatoryObligations": [
      { "id": "reg_ecoa", "title": "...", "category": "customer_communications", "jurisdiction": "US" }
    ],
    "controls": [],
    "routingRules": [
      { "trigger": "customer_facing", "departments": ["Compliance", "Legal", "Operations"] }
    ]
  },
  "options": {
    "includeIntakeSuggestions": true,
    "includeCrossProjectAnalysis": true,
    "includeRegulatoryScreening": true,
    "includeControlRecommendations": true,
    "includeNotificationRouting": true,
    "includeFollowUpQuestions": true
  }
}
```

**Validation:**
- `analysisType` must be one of `intake | crossImpact | regulatoryControls | routing | readiness | full`.
- `tenantId` and `project.id` are required.
- `portfolioContext` and `knowledgeContext` MUST be pre-filtered by the frontend to records relevant to the project. The backend may further trim but must not fetch the whole tenant database.
- Reject payloads > 512 KB with `413`.

## 6. Response Contract

Return HTTP `200` with:

```json
{
  "success": true,
  "requestId": "req_01H...",
  "analysisSource": "live_ai",
  "analysis": {
    "executiveSummary": "Plain-language summary (2–4 sentences, no HTML).",
    "impactScore": 82,
    "confidence": 0.87,
    "assessmentCompleteness": 68,
    "classification": {
      "changeType": "Technology replacement",
      "customerFacing": true,
      "thirdPartyInvolved": true,
      "dataMigration": true,
      "policyChange": false,
      "regulatoryReviewRecommended": true
    },
    "intakeSuggestions": [
      {
        "field": "systems",
        "suggestedValue": "Customer Dispute Platform",
        "reason": "The description references replacement of the existing dispute platform.",
        "confidence": 0.91,
        "status": "unconfirmed"
      }
    ],
    "relatedProjects": [
      {
        "projectId": "PRJ-1002",
        "title": "Customer Communications Modernization",
        "relationshipType": "shared_customer_journey",
        "impactDirection": "mutual",
        "impactLevel": "high",
        "confidence": 0.88,
        "reasons": ["Both projects modify the dispute customer journey", "Testing periods overlap"],
        "sharedAttributes": ["Customer notices", "Dispute workflow", "Operations"],
        "recommendedActions": ["Coordinate user acceptance testing", "Confirm ownership of customer communication changes"],
        "status": "unconfirmed"
      }
    ],
    "impacts": {
      "departments": [],
      "systems": [],
      "businessProcesses": [],
      "customerJourneys": [],
      "dataDomains": [],
      "vendors": [],
      "resources": [],
      "implementationWindows": []
    },
    "regulatoryConcerns": [
      {
        "title": "Potential customer-notice review",
        "category": "customer_communications",
        "whyFlagged": "The project changes customer notice timing and delivery.",
        "supportingProjectFacts": ["Description mentions revised notices"],
        "sourceIds": ["reg_ecoa"],
        "confidence": 0.79,
        "recommendedReviewDepartment": "Compliance",
        "status": "awaiting_human_review"
      }
    ],
    "controlRecommendations": [
      {
        "title": "Pre-release notice approval",
        "description": "Require documented approval of revised customer notices before production deployment.",
        "controlType": "preventive",
        "recommendedOwnerDepartment": "Operations",
        "reviewDepartment": "Compliance",
        "evidenceRequired": ["Approved notice template", "Approval record", "Testing evidence"],
        "confidence": 0.84,
        "status": "recommended"
      }
    ],
    "routingRecommendations": [
      {
        "department": "Information Security",
        "reason": "Authentication and protected customer data may be affected.",
        "priority": "high",
        "acknowledgementRequired": true,
        "suggestedDueDays": 5
      }
    ],
    "followUpQuestions": [
      {
        "question": "Will historical customer dispute data be migrated?",
        "reason": "Data migration affects retention, privacy, reconciliation, and testing requirements.",
        "priority": "high",
        "domain": "data"
      }
    ],
    "resourcesUsed": []
  }
}
```

**Rules:**
- `analysisSource` MUST be `"live_ai"` from this route. The frontend labels every displayed result. Never claim `live_ai` for anything that isn't a real model call.
- All string fields must be plain text. Do NOT return HTML. The frontend escapes everything, but returning HTML wastes tokens and is misleading.
- All arrays MUST be present (may be empty). Missing arrays cause frontend normalization to fill them with `[]`, but explicit is better.
- `confidence` values are `0.0`–`1.0`.
- `impactScore` and `assessmentCompleteness` are integers `0`–`100`.

## 7. Error Contract

All errors return a JSON body:

```json
{
  "success": false,
  "error": "validation_error | unauthorized | forbidden | rate_limited | conflict | provider_error | internal_error",
  "message": "Human-readable one-liner.",
  "requestId": "req_...",
  "stage": "auth | validate | context_build | model_call | normalize",
  "retryable": false,
  "details": { "field": "project.id", "code": "required" }
}
```

- `400` — validation errors. **Never retried by frontend.**
- `401` — auth failures. **Never retried.**
- `403` — tenant/role failures. **Never retried.**
- `409` — conflict (e.g., duplicate requestId). **Never retried.**
- `413` — payload too large. **Never retried.**
- `429` — rate limit. Frontend surfaces immediately.
- `502 / 503 / 504` — transient gateway/provider errors. Frontend retries with backoffs `[1500ms, 4000ms]`. After exhaustion, frontend offers a manual "Use Demonstration Analysis" button — never silently falls back.
- `404` — route not deployed. Frontend offers Demonstration Analysis with a clear banner.
- `501` — feature not implemented. Same behavior as 404.

## 8. Environment Variables (Server)

Set in Railway project settings — never commit to source:

```
FIREBASE_ADMIN_PROJECT_ID=<same as web SDK projectId>
FIREBASE_ADMIN_CLIENT_EMAIL=<service account>
FIREBASE_ADMIN_PRIVATE_KEY=<service account key, newlines escaped>
OPENAI_API_KEY=<sk-...>
OPENAI_MODEL=gpt-4o-mini  # or gpt-4o for higher-fidelity analyses
IMPACT_MAX_PORTFOLIO_ITEMS=40
IMPACT_MAX_PROMPT_CHARS=48000
IMPACT_REQUEST_TIMEOUT_MS=45000
```

**Never** ship any of these to the browser. `ImpactHub.html` contains zero provider secrets.

## 9. Provider Prompt Guidance

- System prompt should state: "You are an enterprise change-impact analyst. Return strictly the JSON schema described. Never invent regulations, control IDs, or department names not present in `knowledgeContext`. If a suggestion is speculative, lower its confidence."
- Force JSON mode where the provider supports it (`response_format: { type: 'json_object' }`).
- Cap tokens to a sensible limit (e.g., 4000 output tokens) so gateway timeouts are less likely.
- Post-model validation: run a schema validator (Zod / Joi) before returning. On schema failure, retry once with a "You returned invalid JSON, please correct" message. On second failure, return `500 { error: 'provider_error', stage: 'normalize', retryable: false }`.

## 10. Firestore Indexes (Frontend Needs)

Once the frontend is used with real data, these composite indexes will be required:

```
tenants/{tenantId}/projects
  - (status ASC, targetDate ASC)
  - (itemType ASC, updatedAt DESC)
  - (ownerId ASC, updatedAt DESC)

tenants/{tenantId}/impactFindings
  - (projectId ASC, status ASC, severity DESC)
  - (createdByType ASC, status ASC, createdAt DESC)

tenants/{tenantId}/projectRelationships
  - (projectId ASC, status ASC, confidence DESC)

tenants/{tenantId}/notifications
  - (recipientDepartment ASC, status ASC, dueDate ASC)
  - (projectId ASC, createdAt DESC)

tenants/{tenantId}/auditEvents
  - (projectId ASC, timestamp DESC)
```

Create these lazily as the console prompts, or provision them ahead via `firestore.indexes.json`.

## 11. Future Routes (Not Required for v1)

Frontend adapters are structured so these can be added later with the same auth/retry pattern:

```
POST /api/impact/analyze-document       // ingest RFC / policy PDF, extract impact signals
POST /api/impact/match-projects         // cross-portfolio matching at scale
POST /api/impact/generate-report        // executive PDF/PPT export
POST /api/impact/notification-routing   // rules-engine-only routing (no model call)
```

Each must use the same auth middleware and error contract.

---

**Bottom line for the backend engineer:** Add one route (`POST /api/impact/analyze`) that (1) validates the Firebase token, (2) confirms tenant membership, (3) calls the OpenAI client with the request payload as context, (4) validates the returned JSON against the schema in §6, (5) returns it. Reuse the existing Resume Builder middleware for auth, rate limiting, and error handling.
