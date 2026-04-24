# Issues Audit Log

Running ledger of user-reported issues, diagnosis, and fixes. Append new
entries at the top. Status values: `Open`, `In Progress`, `Fixed (code)`,
`Fixed (ops)`, `Wont Fix`.

---

## ISS-012 — Covered by ISS-009 (no separate "Download PDF" button inside preview)
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** User said the Document Live Preview showed a "Download PDF" option. Investigation: only two `Download PDF` strings exist in `resumebuilder.html` — the standalone PDF export tile on step 5 (removed in ISS-009) and the PDF button inside the PPTX template modal (working as intended). No PDF button is rendered inside the preview containers. ISS-009's removal of the standalone PDF tile resolves the reported visual.

---

## ISS-011 — Live Preview blank after Optimize ("click Generate Plan")
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** After clicking "Optimize for this Role", the Web + Document Live Preview still showed the empty-state placeholder "click Generate Plan to render". The Generate Plan button was removed long ago — placeholder copy was stale — and more importantly the preview stayed empty even though the resume had been optimized.
- **Root cause:**
  1. `setPreviewMode()` (`resumebuilder.html` L9496) re-renders only when `STATE.generated && Object.keys(STATE.generated).length`. `optimizeForJob()` mutates `STATE.resumeData` but never populates `STATE.generated`, so the guard failed and the containers stayed empty → CSS `:empty::before` placeholder showed.
  2. The Export-step preview container `#preview-container-export` was not targeted by the post-optimize render call at all.
  3. Empty-state CSS hardcoded "click Generate Plan" which no longer exists in the UI.
- **Code fixes (`resumebuilder.html`):**
  - `optimizeForJob()` now synthesizes a minimal `STATE.generated = { hero, experience, skills, education, certifications, achievements }` from `STATE.resumeData` when no generated plan exists, so downstream renderers (including `setPreviewMode` and `setShowPhoto` guards) have content to work with.
  - Explicit second `renderPreview(STATE.generated, 'preview-container-export')` call so the Export-step Live Preview populates alongside the main Build & Style preview.
  - Empty-state CSS placeholder text changed from "click Generate Plan to render/populate" → "click \"Optimize for This Role\" to render/populate" in both `.pv-mode-doc:empty::before` and `.pv-mode-web:empty::before`.
- **Files changed:** `resumebuilder.html` only.
- **Verification:** Optimize a resume → both the Build & Style live preview and the Export-step live preview should render immediately, no placeholder. Delete the resume data → placeholder should now show the updated "Optimize for This Role" copy.

---

## ISS-010 — Firestore 400 Bad Request on savePlan (Write + Listen channel failures)
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** Console log showed two back-to-back `POST https://firestore.googleapis.com/.../Firestore/Write/channel 400 (Bad Request)` errors followed by Listen/channel webchannel teardown. Stack traced to `savePlan @ resumebuilder.html:6636` (`updateDoc`) cascading into `populateVersionSelect @ resumebuilder.html:4128` (the following `get()`).
- **Root cause:** The `planData` object passed to `db.collection('plans').doc(id).update(...)` contained fields that Firestore rejects — most commonly `undefined` values nested deep in `analysisData`, `interviewPrep`, `optimizationSession`, or `generated` (Firestore rejects any `undefined`, throwing 400). Prior code only JSON-roundtripped `optimizationSession` at the tail of `optimizeForJob`, leaving the rest of the payload un-sanitized.
- **Code fixes (`resumebuilder.html`):**
  - Added `sanitizeForFirestore(value)` helper: deep-clones plain objects/arrays, strips `undefined`, converts `NaN`/`Infinity` → `null`, and preserves non-plain objects (Firestore `FieldValue` sentinels, Timestamps, Dates). Includes a depth guard (30 levels) to prevent runaway recursion.
  - `savePlan` now wraps the full `planData` object with `sanitizeForFirestore` before calling `.update()` or `.add()`. The `createdAt` sentinel is re-added after sanitizing so the server timestamp still fires on first save.
  - `populateVersionSelect` already had a `try/catch` so Listen-channel failures no longer cascade to unhandled rejections.
- **Files changed:** `resumebuilder.html` only.
- **Verification:** Save a plan in a fresh session — Firestore Network tab should show 200 OK on Write/channel. Saves that previously 400'd because of nested `undefined` inside `analysisData.interview_prep` or similar should now succeed.

---

## ISS-009 — Export surface consolidation: remove standalone PDF tile; add Word (DOCX) modal with PDF option
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** User asked to "remove the separate export PDF button on Export step and place it in the modal during powerpoint export (already there) and add a word export modal with the PDF option... the PDF download style needs to match whatever powerpoint or word export chosen". The standalone PDF tile duplicated functionality already inside the PowerPoint template modal, and the Word tile went straight to download with no style/color confirmation or paired PDF option.
- **Code fixes (`resumebuilder.html`):**
  - **Removed** the standalone `runExport('pdf')` export tile from the Export step (step 5) tile grid.
  - **Rewired** the Word tile `onclick` from `runExport('docx')` → `openDocxTemplateModal()`.
  - **Added** `#docx-template-modal` markup mirroring the PPTX modal structure: Word Classic template summary, accent-color swatch picker, hex input + reset, Cancel / Download PDF / Export Word action row. PDF button styled with Word blue (`#2B579A`).
  - **Added** JS functions: `openDocxTemplateModal()`, `closeDocxTemplateModal()`, `confirmDocxTemplateAndExport()` (runs `runExport('docx')`), `confirmDocxTemplateAndExportPdf()` (sets `STATE.previewFormat='docx'` + `STATE.exportTemplate='word-classic'` before `runExport('pdf')` so `exportPDF()` renders Letter 8.5×11 with the Word-classic template), `renderDocxColorSwatches()`, `setDocxAccent()`, `onDocxColorHexInput()`, `resetDocxColor()`. The color picker writes to `STATE.color` (shared design color), keeping the data model minimal.
  - PDF style match: `exportPDF()` already branches on `STATE.previewFormat === 'docx'` to choose paper size (Letter vs Slide) and template (`classic-serif` vs selected PPTX) — the new modal simply ensures `previewFormat` is set before invoking, so a PDF triggered from the Word modal renders like a Word document and a PDF from the PowerPoint modal renders like a PowerPoint slide.
- **Files changed:** `resumebuilder.html` only.
- **Verification:**
  1. Step 5 Export tiles — PDF tile should be gone; Word tile opens the new DOCX modal.
  2. DOCX modal → Download PDF → resulting PDF is Letter 8.5×11 with classic Word styling.
  3. PowerPoint modal → Download PDF → resulting PDF is slide-shaped (7.5×10) with the selected PPTX template (pre-existing behavior preserved).

---

## ISS-008 — Export checkmark not visible after download
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** User reported the green "Downloaded!" checkmark still wasn't appearing after exports. Previous timing fix (ISS-005) held the flash for 1800ms but users still missed it.
- **Root cause (hypothesized, instrumented for verification):**
  - Progress overlay `#rb-export-progress-modal` at `z-index: 10060`, success modal `#rb-export-success` at `z-index: 10046`. After the flash hold (1800ms) the progress overlay hid, then 150ms later the success panel opened — creating a 150ms blank window during which no check was visible. Users who blinked or focused the download dialog missed it entirely.
  - Success panel's own check icon was a small 24px `check-circle-2` inside a 44px tile — easy to overlook as decorative chrome rather than a confirmation indicator.
- **Code fixes (`resumebuilder.html`):**
  - **Success modal z-index raised** `10046 → 10070` so it now sits ABOVE the progress overlay. The panel can be shown partway through the flash hold and remains visible after the progress overlay hides.
  - **Timing overlap**: `SUCCESS_PANEL_DELAY` reduced from `1950ms` (150ms after flash ends) → `900ms` (halfway through the 1800ms flash). Users now see a continuous checkmark: the flash paints the progress overlay's green ring for ~1s, then the success panel pops on top with its own prominent check while the underlying progress overlay continues/fades.
  - **Success panel check enlarged**: 24px icon inside 44px rectangular tile replaced with a 38px `check` icon inside a 72px circular gradient ring (matches the progress overlay's success-ring styling) with the same pop animation. Centered at the top of the panel instead of tucked into a left-aligned header strip.
  - **Debug logs** `console.debug('[export] flash painted, hold=1800ms')` and `console.debug('[export] success panel opened')` so future reports can verify which step fired.
- **Files changed:** `resumebuilder.html` only.
- **Verification:**
  1. Export any format. Expect: progress overlay with spinning ring → green check ring flash → large green check-circle success panel appears on top while flash is still visible → progress overlay fades, success panel remains until dismissed.
  2. DevTools console shows both debug lines.
  3. If check is still invisible, console output narrows down whether `flashExportDownloaded` ran at all.

---

## ISS-007 — Optimize gate modal ignores Target Role; shows wrong message when resume is ready but role is missing
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** User said the AI Optimize icon shows "Add or generate your resume details in About Me, then come back and this button turns purple" even when About Me is fully populated. The real blocker in that scenario is a missing Target Role, not missing resume content. The gate always routed the user to About Me (step 1) regardless.
- **Root cause:** `hasReadyResumeData()` in the Phase VI state machine only checked resume content (name + experience/education/summary). It did not check Target Role. `onWbOptimizeQuick()` had a single gate path: when not ready, show `#rb-optimize-gate-modal` whose copy was hardcoded to the "add resume" scenario, and whose CTA always jumped to About Me.
- **Code fixes (`resumebuilder.html`):**
  - **Added** `hasTargetRole()` — returns true when either `STATE.jobTitle` / `#job-title` OR `STATE.jobDescription` / `#job-desc` has non-empty content (same check `optimizeForJob()` uses internally).
  - **Updated** `refreshOptimizeQuickState()` so the workspace AI Optimize quick button is "ready" (purple) only when BOTH resume and target role are present. Label differentiates the two missing cases for screen readers / tooltip.
  - **Rewrote** `onWbOptimizeQuick()`: when resume missing → show gate variant `resume` (original copy, routes to About Me). When resume present but role missing → show gate variant `role` (new copy "Your resume is ready. Add a Job Title…", routes to Target Role step 3).
  - **Made gate modal content dynamic**: added IDs `rb-opt-gate-sub`, `rb-opt-gate-body`, `rb-opt-gate-cta-label` so `showOptimizeGate(variant)` can mutate title, subtitle, body, and CTA label. New CTA handler `handleOptimizeGateCta()` routes to the correct step based on which condition is still missing at click time.
  - **Extended** the `input` listener that triggers state refresh to include `job-title`, `job-desc`, `job-company` so typing a target role instantly updates button readiness.
- **Files changed:** `resumebuilder.html` only.
- **Verification:**
  1. Fresh state — click AI Optimize quick button → "Add your resume first" modal, routes to About Me.
  2. Resume loaded, no Target Role — click button → "Add a target role" modal, routes to Target Role (step 3), job-title focused.
  3. Resume + Target Role → button is purple; clicking skips the modal and jumps to Optimize step.

---

## ISS-006 — Extracted data never reaches the manual-entry form (achievements/experience/volunteer/certs silently dropped)
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** User said: "the extract section of 'extracted resume data' shows …Achievements 2 found, but then it didn't load the achievements." The preview panel counted items correctly, but the Experience / Education / Certifications / Achievements / Volunteering form rows below it stayed empty. Gave the impression that ISS-004's prompt improvements hadn't helped.
- **Root causes:**
  1. **`parseResume()` in `resumebuilder.html` never called `populateManualEntryFromState()`.** After a successful extract it stored `STATE.resumeData`, auto-filled only the contact fields, and rendered the read-only preview — then stopped. `populateManualEntryFromState()` (the function that actually writes into the Experience/Education/Cert/Achievement/Volunteer rows) was only invoked on the plan-load path. So the data existed in state and in the preview but was never pushed into the editable form DOM.
  2. **Achievement schema mismatch.** Server returns `{ title, year, description }`. Client wrote `.manual-ach-context` from `obj.context` only. Title populated; body always blank.
  3. **Volunteer schema mismatch.** Server returns `volunteer_experience`. Client read `rd.volunteering` only. Volunteer section always empty, regardless of what the resume contained.
- **Code fixes (`resumebuilder.html`):**
  - **`parseResume()`:** call `populateManualEntryFromState()` (try/catch) immediately after `STATE.resumeExtractedAt = now`, before `collapseResumeUpload`. This is the single line that fixes the "achievements didn't load" symptom.
  - **`populateManualEntryFromState()` — achievements:** `.manual-ach-context` now reads `obj.context || obj.description` so server-returned `description` text actually lands in the body field.
  - **`populateManualEntryFromState()` — volunteer:** prefer `rd.volunteer_experience` (server schema), fall back to `rd.volunteering` for backward compat with any older cached state.
  - **Diagnostic log #1 — `[extract] Server returned resume_data`:** `console.groupCollapsed` + `console.table` of per-field counts (experience / skills / education / certifications / achievements / leadership / volunteer / projects / languages) and sample arrays for achievements, certifications, experience, volunteer_experience, leadership_engagement. Fires immediately after the fetch response is parsed.
  - **Diagnostic log #2 — `[extract] Fields populated from resume_data`:** `console.groupCollapsed` + `console.table` of actual DOM row counts (`#manual-experience-list > *`, etc.) and contact/summary/skills field values. Fires at the end of `populateManualEntryFromState`.
  - Together the two logs make any future mismatch (server returns N, form shows 0) instantly visible in DevTools.
- **Files changed:** `resumebuilder.html` only.
- **Verification:**
  1. Extract a resume that has achievements. DevTools console shows two collapsed groups. Group 1 counts should equal Group 2 row counts for each list.
  2. Achievements section should now show both title AND context body text.
  3. Volunteer section should populate when the resume has volunteer history.
  4. No HTML/JS errors on the edited file (`get_errors`: clean).
- **Why ISS-004 looked broken:** ISS-004 fixed the server prompt so it returns more data, but ISS-006 showed that data was never reaching the form. Both fixes are needed together — ISS-004 improves what the server extracts, ISS-006 ensures the form actually receives it.

---

## ISS-004 — Extraction under-populates non-experience sections (achievements, leadership, volunteer, projects, certifications)
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** A paid user's extract returned skills populated but achievements / leadership / volunteer / projects / certifications mostly blank, even though the source resume had those sections.
- **Root cause:** The `parse-resume` system prompt was heavily focused on experience-bullet extraction (multi-page "CRITICAL INSTRUCTIONS" + "BULLET ASSIGNMENT STRATEGY"). Non-experience sections got one schema line each and no extraction guidance, so the model treated them as optional. The ISS-003 retry only fired when `experience` was empty, which missed the more common case of "experience full, everything else thin".
- **Code fixes (`projectbackend/server.js` → `/api/builder/parse-resume`):**
  - **Prompt:** appended a SECTION DETECTION block that lists common heading synonyms (Selected Accomplishments, Awards, Honors, Board Memberships, Community Involvement, Licenses, Publications, Speaking Engagements, etc.) and routes each to its best schema field, plus extraction rules (don't invent, don't drop labeled content, don't duplicate across fields) and a 5-question VERIFICATION PASS the model must run before returning JSON.
  - **Retry:** replaced the narrow "vision returned empty experience" check with a completeness check over `{experience, education, skills, certifications, achievements}`. If raw text > 500 chars AND ≥3 of those 5 fields are empty (or JSON was unparseable), retry once with a text-only call. The retry result is only accepted if it is strictly more complete than the original.
  - **Diagnostic log:** every successful parse now logs `[parse-resume] Parsed fields: experience=N, education=N, skills=N, certifications=N, achievements=N, leadership=N, volunteer=N, projects=N` so we can track under-extraction patterns over time without waiting for a user complaint. Retry trigger logs `[parse-resume] Low completeness parse detected. Empty fields: …` and `[parse-resume] Retry accepted/did not improve completeness`.
- **Explicitly NOT done (yet):**
  - No second dedicated extraction call for achievements/certs/projects. Will revisit only if A+B fail to move the needle in testing.
  - No schema changes. No endpoint changes. No frontend changes.
- **Files changed:** `projectbackend/server.js` only.
- **Verification:**
  1. Re-upload a resume with a "Selected Accomplishments" or "Community Involvement" section → achievements / leadership arrays should populate. Server log shows the parsed-fields line with non-zero counts.
  2. Upload a resume that previously returned thin results → server log should show `Low completeness parse detected` followed by `Retry accepted` and a better field breakdown.
  3. Upload a short note (<500 chars) → no retry fires (raw-length guard).
- **Protection against the "only skills populated" failure mode:** before ISS-004, the retry only fired on empty experience — a resume with full experience + empty everything-else would pass through as-is. Now the retry fires on ≥3 empty core fields, which directly catches that pattern.

---

## ISS-003 — Extract hangs silently for new trial users; paid user got only "skills" populated
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptoms:**
  1. New trial customer: toast showed "Extracting resume…" for 5+ minutes with no completion and no error; DevTools console had only benign `pdf.worker` warnings.
  2. Paid account retry: the resume loaded but only the Skills section was populated — all other sections blank.
- **Root causes:**
  1. `parseResume()` in `resumebuilder.html` had **no timeout and no AbortController** on the `fetch()` to `/api/builder/parse-resume`. If OpenAI / the upstream proxy stalled (common with multi-page PDF vision calls at `detail: 'high'`), the promise never resolved and the toast stayed up forever.
  2. The backend's vision path (`callOpenAIWithImages` with `gpt-4o` + `detail: 'high'` + `max_tokens: 16000`) sometimes returns **truncated or mostly-empty JSON**. `extractJSON` parsed what it got (just a skills array + empty/missing fields), which rendered as "skills populated, nothing else". There was no retry.
  3. The tiny toast gave no visual indication of progress, so users couldn't tell if the app was working or dead.
- **Code fixes:**
  - **Frontend (`resumebuilder.html`):**
    - Added premium progress modal `showExtractProgress` / `extractAdvanceStep` / `hideExtractProgress` modeled on `showOptimizeProgress` (blue/cyan/green gradient, 4 animated steps: Preparing document → Reading layout and text → Identifying sections and roles → Structuring your resume data, with Cancel button).
    - Added `AbortController` + 120-second hard timeout around the `fetch`. If OpenAI stalls, the request aborts cleanly and the user sees "Extraction timed out. Please try a smaller file or paste the text instead."
    - `finally` block now clears the timeout and tears down the modal so the UI never gets stuck.
    - `cancelExtract()` aborts the in-flight request and restores the button.
  - **Backend (`projectbackend/server.js` → `/api/builder/parse-resume`):**
    - After the vision call, if `extractJSON` fails OR the returned object has an empty `experience` array while the raw resume text is clearly non-empty (>200 chars), retry once with a **text-only** `callOpenAI` call and use that result.
    - Logs a warning when the fallback fires so we can track how often vision is misbehaving.
- **Files changed:**
  - `resumebuilder.html` — new progress modal functions (~100 lines); `parseResume()` body wired to use modal + AbortController + finally.
  - `projectbackend/server.js` — `/api/builder/parse-resume` vision-fallback logic.
- **Verification:**
  1. Upload a multi-page PDF as a new trial user → progress modal shows, steps advance, extract completes OR errors with a clear message within 120 s.
  2. If OpenAI returns an empty vision response, server log shows `vision result unusable, retrying text-only` and the client still gets a full populated resume.
  3. Click Cancel during extract → spinner tears down, button resets, no hang.
- **Future work (not done):**
  - Consider streaming status updates from the backend (SSE) so the step indicator tracks real progress, not just UI guesses.
  - Consider shrinking `renderPdfToImages` scale from 1.5 → 1.25 for faster vision calls on large files.

---

## ISS-002 — Free-trial users see OpenAI billing error on resume import
- **Date:** 2026-04-24
- **Status:** Fixed (code) — requires operator action to fully unblock
- **Reported symptom:** New customer trying to import a resume saw
  "Your account is not active, please check your billing details on our
  website." They assumed it meant their own subscription was broken.
- **Root cause:** That string is **not** from our billing system — it is
  the raw error message returned by the OpenAI Chat Completions API when
  the OpenAI account powering the backend has a billing / quota / key
  problem. The backend `callOpenAI` helper was re-throwing
  `err.error.message` verbatim, so OpenAI's message surfaced on the
  client.
- **Why it confused users:** `checkBuilderQuota` in
  `projectbackend/server.js` already allows free-trial users (3 AI uses),
  so our paywall is not the blocker. The failure happens one layer down,
  in the upstream OpenAI call.
- **Code fix:** Added `sanitizeOpenAIError(rawMessage, status)` helper in
  `projectbackend/server.js` (just above `callOpenAI`). It detects
  billing/quota/key patterns, logs the real OpenAI message server-side
  for operators, and returns a neutral user-facing message:
  "AI service is temporarily unavailable on our end. No charge was made
  — please try again in a few minutes. If it persists, contact support."
  For HTTP 429 it returns a "briefly overloaded" variant. Both
  `callOpenAI` and `callOpenAIWithImages` now throw through the
  sanitizer.
- **⚠️ Operator action required (not code):** Log into
  <https://platform.openai.com> → Billing and (a) add / restore a
  payment method or (b) top up credits, then verify `OPENAI_API_KEY`.
  Until that is done, real AI imports will still fail — they will just
  fail gracefully with the neutral message instead of the scary OpenAI
  one.
- **Files changed:**
  - `projectbackend/server.js` — new helper + updated throws in
    `callOpenAI` and `callOpenAIWithImages`.
- **Verification:**
  1. Reproduce with a deliberately-bad `OPENAI_API_KEY` → user sees the
     neutral message, server log shows the real OpenAI string.
  2. Once billing is restored on platform.openai.com, import succeeds.

---

## ISS-001 — Remove "LinkedIn Profile" as a resume import option
- **Date:** 2026-04-24
- **Status:** Fixed (code)
- **Reported symptom:** "LinkedIn Profile" import card in the About Me
  step should not be offered (LinkedIn blocks automated scraping and the
  manual-paste path was unreliable / confusing).
- **Code fix:**
  - Deleted the `<button data-opt="linkedin">` card from the import
    picker in `resumebuilder.html` (About Me → Choose Resume Import
    Source).
  - Deleted the associated `<div id="import-panel-linkedin">` expandable
    panel (paste-area, info text, Import Profile button).
  - Changed the grid wrapper from `md:grid-cols-4` to `md:grid-cols-3`
    so the remaining 3 cards (Upload, Paste, Photo) fill the row evenly.
  - Left the dead `importFromLinkedInText()` JS function in place —
    harmless, not referenced by any surviving DOM, zero-risk to leave.
- **Not touched (intentionally):**
  - LinkedIn **Job Posting** import (Tailor-to-JD flow) — separate
    feature, still works.
  - `vmImportLinkedIn()` helper and `/api/builder/import-linkedin-job`
    endpoint — used by the JD flow, untouched.
- **Files changed:**
  - `resumebuilder.html` — card removed, panel removed, grid class
    updated.
- **Verification:**
  1. Open builder → About Me → Choose Resume Import Source shows **3**
     cards: Upload Resume / Paste Resume / Add Photo.
  2. On ≤640px the cards stack into 2 columns cleanly (grid-cols-2).
  3. Tailor-to-JD LinkedIn job-posting import still works.
