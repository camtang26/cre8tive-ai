# Documentation Realignment Plan — 2025-11-03

**Goal:** Sync `.codex` knowledge artifacts with the November 3, 2025 documentation suite (bmm-index + linked guides) so future sessions bootstrap from the latest canon without re-reading 200+ pages.

**Steps**
- ✅ **S1 – Documentation Intake:** Walk through `docs/bmm-index.md` and every linked core doc (Current Architecture, Development Guide, Component Catalog, Freshness Report, key tech specs, story summaries) to capture factual deltas vs. existing `.codex` guidance. *(Completed 2025-11-03)*
- ✅ **S2 – Knowledge Synthesis:** Update `.codex/_MEMO.md` focus anchors, decisions, and opportunities with insights from the November 3 scan (tech stack changes, implementation status, research troves). *(Completed 2025-11-03)*
- ✅ **S3 – Plan Refresh:** Rewrite `.codex/PLAN.md` sections so retired initiatives are archived, new plan reflects documentation realignment, and cross-reference obligations (MCP usage, validation rituals) from the fresh docs. *(Completed 2025-11-03)*
- ✅ **S4 – Report Update:** Expand `.codex/REPORT.md` with status notes capturing the doc realignment work, outstanding validation loops, and recommendations surfaced in the new doc set. *(Completed 2025-11-03)*
- ✅ **S5 – Opportunity & Follow-up Logging:** Record newly discovered opportunities, debt, and validation needs in `_MEMO` and `TASK.md` (if scope warrants) to keep backlog truthful. *(Completed 2025-11-03)*

**Impact Set:** `docs/*.md` (bmm-index canon), `.codex/_MEMO.md`, `.codex/PLAN.md`, `.codex/REPORT.md`, `TASK.md` (if changes), `AGENTS.md` (if protocol updates required).

# Codex Video Placeholder Prototype Plan — 2025-11-03

**Goal:** Produce Codex-authored counterparts to the three existing video placeholder prototypes so Cameron can compare quality and select a foundation for Epics 2 & 3.

**Steps**
- 🔄 **S1 – Research Refresh:** Confirm 2025 guidance via Archon RAG (glassmorphism/accessibility), Context7 GSAP React docs, and live web search; log insights in `_MEMO`. *(In Progress 2025-11-03)*
- ⏳ **S2 – Principle Synthesis:** Translate research into concrete design/implementation guardrails (contrast, blur fallbacks, GSAP scoping) and document in `_MEMO` plus this plan.
- ⏳ **S3 – Implementation:** Build Codex variants of Minimal, Premium Glass, and Bold Cinematic placeholders under `src/components/video-placeholders/`, ensuring parity in API and demo coverage (side-by-side comparison page).
- ⏳ **S4 – Validation & Handoff:** Run `npm run build`, exercise demo page, capture key differences vs Claude versions, and update `_MEMO`, `REPORT`, and `TASK` with outcomes/next steps.

**Impact Set:** `src/components/video-placeholders/`, `src/pages/VideoPlaceholderDemo.tsx`, supporting hooks/utilities, `.codex/_MEMO.md`, `.codex/REPORT.md`, `TASK.md` (status update).

# Hero Video Prototype Plan — 2025-11-03

**Goal:** Deliver premium hero prototypes for Studios and Conversational AI with background video, dark gradients, and GSAP choreography, ready for stakeholder comparison.

**Steps**
- ✅ **S1 – Strategy & References:** Lock narrative, layout, and motion directives (copy structure, CTA cluster, metric pills, overlay layering) drawing from 2025 research. *(Completed 2025-11-03)*
- ✅ **S2 – Implementation:** Build `StudiosHeroPrototype` & `ConversationalHeroPrototype` components with video loaders, overlay gradients, `useGSAP` animations, and reduced-motion fallbacks; expose via demo route. *(Completed 2025-11-03)*
- ✅ **S3 – Documentation & Validation:** Record prototype specs in `docs/prototypes/hero-video-prototypes-2025-11-03.md`, update `_MEMO`/`REPORT`, adjust `TASK.md`, and verify `npm run build`. *(Completed 2025-11-03)*

**Impact Set:** `src/components/hero-prototypes/*`, `src/pages/HeroPrototypeDemo.tsx`, `App.tsx`, video assets/placeholders, `.codex/_MEMO.md`, `.codex/PLAN.md`, `.codex/REPORT.md`, `docs/prototypes/hero-video-prototypes-2025-11-03.md`, `TASK.md`.

# Studios Hero Prototypes — 2025-11-03

**Goal:** Build five ultra-premium hero concepts for the Studios page using the locked Film Noir gradient (codex-studios-a), glassmorphism system, and existing Vimeo video (1051821551).

**Steps**
- ✅ S1 – Scaffold components: five variants under `src/pages/prototypes/studios-hero/` + shared tokens.
- ✅ S2 – Implement visuals: spotlight/vignette, animated mesh + parallax, monitor frame + UI panels, liquid gold overlays, depth cards.
- ✅ S3 – Access & Route: add `/studios-hero-prototypes-codex` page to navigate between variants.
- ✅ S4 – Motion & A11y: GSAP reveals with reduced-motion guard; maintain WCAG AA contrast + focus-visible.
- ⏳ S5 – Validation: run MCP viewport screenshots and Lighthouse pass; wire CTA analytics.

**Impact Set:** `src/pages/prototypes/studios-hero/*`, `src/pages/StudiosHeroPrototypes.tsx`, `src/App.tsx`, `.codex/_MEMO.md`.

# Studios Premium Hero — 2025-11-03

**Goal:** Ship a single, top‑tier hero concept that feels award‑level and production‑ready.

**Approach:** “Golden Gobo” — video‑first stage with a gold spotlight/gobo that subtly tracks pointer and scroll, minimal asymmetric glass card, decisive CTA.

**Steps**
- ✅ Research (Archon/Context7/Web) for 2025 patterns, a11y, and GSAP React cleanup.
- ✅ Implement `StudioHero_PremiumGoldenGobo` with CSS‑driven beams, GSAP entrances, reduced‑motion fallback.
- ✅ Add route `/studios-hero-premium-codex` for isolated review.
- ⏳ Validate visuals via Chrome‑DevTools MCP screenshots; Lighthouse pass; analytics wiring.

**Impact Set:** `src/pages/prototypes/studios-hero/StudioHero_PremiumGoldenGobo.tsx`, `src/pages/StudiosHeroPremium.tsx`, `src/App.tsx`, `.codex/_MEMO.md`, `.codex/REPORT.md`.

# Archived Plans — Paused as of 2025-11-03

The following plans represent earlier initiatives kept for historical context. Re-activate only after confirming alignment with the November 3 documentation canon and current priorities.

## Copy USP Transcript Synthesis Plan — 2025-10-20

**Goal:** Catalogue Claude session transcripts focused on Cre8tive AI copy differentiation and consolidate all USP-oriented messaging guidance into a single reference.

**Steps**
- **S1 – Transcript Scan:** Locate every Claude session log, skim for copy/USP brainstorming focus, and flag qualifying session IDs.
- **S2 – Insight Extraction:** Pull the detailed copy insights, positioning statements, supporting references, and stakeholder directives from the flagged sessions.
- **S3 – Compendium Build:** Assemble a comprehensive copy reference document citing each session, include linked resources, and summarize opportunities/follow-ups; update `_MEMO`/`REPORT` with outcomes.

**Impact Set:** `CLAUDE*.md`, `claude-mode/` transcripts, `.codex/_MEMO.md`, `.codex/REPORT.md`, new copy reference document under `.codex/` (TBD).

## Briefing Engine Recovery Plan — 2025-10-15

**Goal:** Restore `src/pages/BriefingEngine.tsx` to the segmented timeline architecture so the page renders today’s five-stage flow instead of the legacy pinned animation.

**Steps**
- **S1 – Inventory & Source Check:** Confirm latest segmented components (timeline + sections) remain intact and capture any gaps that need re-importing.
- **S2 – Page Reconstruction:** Rebuild `BriefingEngine.tsx` to import `BriefingTimeline`, render the new intro/flow structure, and drop references to `BriefToStoryboardAnimation`.
- **S3 – Verification:** Run `npm run build` (or `npm run dev` spot check) to ensure imports resolve; update `_MEMO`/`REPORT` with outcome.

**Impact Set:** `src/pages/BriefingEngine.tsx`, `src/components/briefing/BriefingTimeline.tsx`, section components, `docs` references if structure shifts.

## Hero Section Research Plan — 2025-10-15

**Goal:** Build a contemporary blueprint for the homepage hero that mirrors premium SaaS leaders—covering copy voice, layout structure, CTA placement, trust framing, and resilient background effects.

**Why now:** Stakeholders want a hero refresh that signals "premium" today; competitive teardown data (SparkReach 2025, BeamLocal 2024, Instant 2025 Shopify review) shows brands winning with succinct outcomes-first headlines, single CTA focus, and cinematic-yet-performant backgrounds. Capturing these patterns before design ensures implementation is grounded in current best practice.

## Research Steps
- **R1 – Landscape Scan:** Archon MCP (✅ no relevant hits; recorded gap) + live web articles detailing 2024–2025 SaaS hero benchmarks to anchor copy/layout decisions.
- **R2 – Motion/Background Options:** Context7 ShaderGradient doc confirms a stable animated gradient path we can reuse without heavy GLSL, aligning with wow-factor requirement.
- **R3 – Synthesis:** Distill copy formula (headline ≤9 words + proof sentence + CTA), trust placement, imagery strategy, and recommended background treatments into actionable guidelines for design/implementation.

## Immediate Outputs
1. Hero copy framework outlining headline, subhead, CTA archetypes, and trust-placement rules informed by current premium SaaS examples.
2. Layout grid guidance (headline alignment, CTA cluster positioning, fold height, social proof positioning).
3. Background/motion recommendation shortlist (animated gradient shell vs. parallax UI mockups) with reliability considerations.
4. Update SPEC/ARCHITECTURE once implementation direction chosen.

## Hero Redesign Execution Plan — 2025-10-15

**Vision Snapshot:** Elevate the homepage hero into a cinematic, outcome-first stage that pairs enterprise-grade messaging with tangible platform visuals, immediate proof, and reliable wow-factor motion. Success = stakeholder approval + measurable lift in engagement (scroll depth, CTA clicks) once live.

**Steps**
- **S1 – Wireframe & Asset Strategy:** Map 12-col desktop / stacked mobile layout, define required assets (platform montage, storyboard chips, trust logos), and align copy blocks with research framework.
- **S2 – Background & Motion Foundation:** Implement animated gradient shell + vignette/halo layers with prefers-reduced-motion fallbacks; validate performance in isolation.
- **S3 – Copy Cluster & CTA Module:** Build left-column content component (headline, proof sentence, CTA pair, trust strip) with responsive typography and interactive states.
- **S4 – Visual Narrative Stack:** Construct right-column hero visualization (device frame video, storyboard chips, metric badges) with Framer Motion/GSAP parallax and hover micro-interactions.
- **S5 – Navigation & Peripheral Harmonization:** Upgrade nav styling to match glass aesthetic; integrate chat/agent widget into hero design without visual conflict.
- **S6 – QA & Documentation:** Run MCP viewport sweeps (1707/1920/2560), Lighthouse + performance trace, contrast checks, update SPEC/ARCHITECTURE/README, and log in REPORT.

**Impact Set:** `src/components/Hero.tsx`, `src/components/desktop/DesktopHero.tsx`, `src/components/hero/*`, nav components, global styles (`src/styles/utilities.css`), asset pipeline (video/imagery in `public/` or `src/assets/`).

**Validation:** `npm run build`, targeted UI smoke (manual), Chrome DevTools MCP evidence, analytics check for CTA events after hooking into existing tracking.

## Briefing Timeline Segmentation Plan — 2025-10-14

**Goal:** Deliver the segmented timeline with responsive GSAP tiers so 1024–3440 px desktops feel balanced, animations adapt per viewport, and affordances remain obvious even on scaled displays.

**Branch:** `GSAP-segmentation`  
**Dependencies:** `useScrollTriggerAnimation`, `useAnalytics`, adaptive performance utilities, Tailwind utilities via `src/styles/utilities.css`  
**Build:** `npm run build` ✅ (vendor 790 kb / 900 kb)  
**Lint:** Still blocked by repo unicorn rule gaps + legacy `any` usage (unchanged)

## Deliverables
1. `BriefingTimeline.tsx` orchestrator with keyboard/tap advance and analytics hooks
2. Section components: `HeroBriefSection`, `NeuralSynthesisSection`, `StyleSelectionSection`, `StoryboardAssemblySection`, `StudiosHandoffSection`
3. Reduced-motion fallbacks (static imagery/text) using `data-motion` toggles
4. Progress rail + instruction pill styling (utility classes)
5. Documentation updates across SPEC, ARCHITECTURE, PLAN, QA, retrospectives, story contexts
6. Validation artifacts (Chrome MCP snapshot, pending cross-browser trace)

## Task Breakdown

### T1 – Blueprint (COMPLETE)
- Define 5-section stack, scroll cadence, affordances, analytics events.

### T2 – Component Decomposition (COMPLETE)
- Extract stage markup from legacy timeline into dedicated section components.
- Introduce `section-data.ts` for shared assets/metadata.

### T3 – Orchestrator Build (COMPLETE)
- Implement `BriefingTimeline` with instruction pill, keyboard/tap advance, progress rail, analytics.
- Wire `useAnalytics` events (`timeline_stage_view`, `timeline_manual_advance`, `timeline_restart`).

### T4 – Transition Cleanup (COMPLETE)
- Remove `BriefToStoryboardAnimation.tsx`, update imports, refresh architecture/docs.
- Update `useScrollTriggerAnimation` to provide motion context.

### T5 – Desktop Responsive Optimization (IN REVIEW)
- [x] Implement GSAP `matchMedia` tiers (laptop 1024–1439, desktop 1440–1919, large desktop 1920–2559, ultra-wide ≥2560) across all sections with tier-specific timing/stagger configs.
- [x] Replace string ScrollTrigger `start`/`end` with function-based values + `invalidateOnRefresh: true`.
- [x] Add debounced orientation/resize refresh logic in `useScrollTriggerAnimation`.
- [x] Introduce fluid typography/spacing and responsive max-width clamps per tier.
- [x] Rework progress/instruction affordances for small desktops & mobile fallback (horizontal dots/counter) with safe-area offsets.
- [x] Simplify 3D transforms & ParticleCore behaviour on smaller tiers while preserving desktop polish.

### T6 – Validation (PENDING)
- [ ] Re-run Chrome DevTools MCP viewport sweep (1366→3440) with screenshots + metric notes.
- [ ] Chrome Performance trace + Lighthouse post-responsiveness; confirm LCP <2.0 s and no forced reflows.
- [ ] Cross-browser smoke (Chrome/Firefox/Safari/Edge).
- [ ] Verify analytics payloads (`timeline_stage_view`, `timeline_manual_advance`, `timeline_restart`).
- [ ] Optional: Vitest coverage for stage visibility/reduced-motion logic.

### T12 – Timeline Smoothness Fix (IN PROGRESS — Codex Session 2)
- **S1** Collect baseline: review `docs/gsap-debug-report-2025-10-15.md`, audit `BriefingEngine`, `useScrollTriggerAnimation`, and section motion configs for listed anti-patterns. ✅
- **S2** Implement Lenis ⇄ GSAP integration in `src/pages/BriefingEngine.tsx`, removing desync and ensuring cleanup. ✅
- **S3** Simplify `useScrollTriggerAnimation` by deleting custom refresh listener and relying on GSAP defaults. ✅
- **S4** Update all section timelines: add `invalidateOnRefresh`, assign coordinated `refreshPriority`, standardize `force3D: true`, and clear `will-change` using `clearProps`. ✅
- **S5** Rebalance motion overlaps in `motion-config.ts` (cap at 0.3–0.4 s) and adjust related stagger timings if needed. ✅
- **S6** Run validation checklist: `npm run build`, targeted section unit smoke if available, Chrome DevTools performance trace, MCP viewport sweeps (1707/1920/2560), document outcomes for handoff. ⏳

### T14 – ScrollTrigger Re-trigger Bug Analysis (NEW 2025-10-15 Codex Session 2)
- **A1** Review existing implementation (timeline sections, `useScrollTriggerAnimation`, motion configs) to spot multiple trigger registrations or lifecycle issues.
- **A2** Run external research (Archon MCP, Context7 GSAP docs, Perplexity reasoning, web search) on preventing ScrollTrigger replays with Lenis and matchMedia.
- **A3** Instrument or log ScrollTrigger instances to confirm creation counts and lifecycle; identify root cause of multi-fire behaviour.
- **A4** Implement targeted fix (timeline configuration, context cleanup, or ScrollTrigger options) once root cause confirmed.
- **A5** Validate by reproducing scroll wiggle scenario, ensuring each section animates only on first downward pass while stage tracking remains functional; document results in `_MEMO` and REPORT.

### T15 – Briefing Timeline Typography Polish (2025-10-15 Codex Session 2)
- **S1** Finalise Stage 03 (Visual Direction) typographic hierarchy: STEP spine anchored left, accent treatment for “Direction”, descriptor removed (per new directive), spacing held for consistency.
- **S2** Propagate approved pattern to remaining stages (Hero, Neural, Storyboard, Studios) with consistent spacing/scaling and no top descriptors. *(Stage 01–05 now aligned; hero uses STEP stack + headline lockup.)*
- **S3** Balance Stage 05 dossier columns by shifting stats/ribbon to the left page so the mockup height tightens without shrinking storyboard imagery. ✅ *(2025-10-16 Codex Session 2)*
- **S4** Run visual QA pass (MCP screenshots) to confirm alignment across viewport tiers; note outcomes in `_MEMO` and REPORT.

### T7 – Documentation & Handoff (PARTIAL)
- [x] SPEC/ARCHITECTURE/PLAN updated.
- [x] QA gates + performance brief reference segmented timeline.
- [x] Retrospectives/story contexts annotated for historical clarity.
- [ ] Final handoff report after responsive validation.

### T8 – Content Simplification (Codex Session 1)
- [x] Remove the "Choose Your Creative Style" showcase beneath the timeline so the segmented storyboard flow owns style selection messaging.

### T9 – Copy Overhaul Phase 1 (Codex Session 1)
- [x] Rewrite hero headline, subhead, body copy, and stats bar to communicate "10-minute storyboard → Studio video" positioning with proof points.
- [x] Update `<Helmet>` meta title/description with new messaging (10-minute storyboard, Studio follow-through, 60% approval).
- [x] Refresh `stageMetadata` entries in `section-data.ts` with customer-focused descriptions (intelligent forms, production-ready outputs, multi-duration specs, honest handoff timeline) and ensure "our Studio" terminology.
- [x] Sweep for legacy "Studios" phrasing in copy sections touched this phase and convert to "our Studio" unless referring to brand name.
- [x] Trim confusing line from `BriefingProcessFlow` (“Open the dossier…”) per stakeholder feedback.

### T10 – Copy Overhaul Phase 2 (Codex Session 1)
- [x] Insert new timeline intro section before `BriefingTimeline` clarifying storyboard vs. video timelines with visual 10 min → weeks treatment.
- [x] Update `MidPageCTA`, `AudienceBenefits`, and benefit card copy to highlight end-to-end platform value, multi-duration specs, and Studio-quality outputs.
- [x] Revise final CTA block to reinforce "From brief to video" narrative and align CTA label.

### T11 – Copy Overhaul Phase 3 (Codex Session 1)
- [x] Build `BriefingFAQ.tsx` with the 10 curated Q&A entries covering differentiation, timelines, expertise, deliverables, independence, research, styles, agency scale, industry handling, and free trial.
- [x] Mount FAQ component after `AudienceBenefits` (before final CTAs), ensuring styling and animation align with briefing aesthetic.
- [x] Verify accordion behaviour, reduced motion, and keyboard accessibility.

### T12 – Copy Overhaul Phase 4 (Codex Session 1)
- [ ] Conduct copy proofing + tone consistency review for new sections.
- [ ] Run Chrome DevTools MCP desktop sweep (coordinate with Session 2) to confirm layout integrity after copy changes.
- [ ] Validate analytics CTAs still trigger correct events post-copy adjustments.
- [ ] Execute `npm run build` and sanity-check CLS/perf metrics.
- [ ] Document outcomes and updated messaging in `.codex/_MEMO.md`, `.codex/REPORT.md`, and `docs/desktop-responsive-validation-2025-10-14.md`.

### T13 – Desktop Layout Refinement (Codex Session 1)
- [x] Analyze validation screenshots (1024–3440 widths) to pinpoint overflow/spacing issues (hero heading scale, progress rail drift, section paddings).
- [x] Design container-query + clamp strategy to tighten hero/timeline widths without breaking ultra-wide tiers; ensure GSAP timelines recompute on resize via `matchMedia` + `invalidateOnRefresh`.
- [x] Prototype CSS utilities (container max-widths, `@container` wrappers) and responsive typography tokens; coordinate with Session 2 before rollout.
- [ ] Implement adjustments, rerun MCP viewport sweep, and capture before/after notes.

### T16 – Stage 05 Animation Audit (2025-10-15 Codex Session 2)
- [x] **S1** Re-read `docs/gsap-debug-report-2025-10-15.md` plus `motion-config.ts` handoff tier settings to confirm intended timings and viewport tiers.
- [x] **S2** Deep-dive `src/components/briefing/sections/StudiosHandoffSection.tsx`; map animated elements, ScrollTrigger lifecycle, and reduced-motion fallbacks.
- [x] **S3** Cross-check matchMedia tiers, hidden-state presets, stagger overlaps, CTA handling, and asset selection against design intent; log discrepancies and hypotheses.
- [x] **S4** Outline remediation options (without implementing code yet) and capture open questions / dependencies for Sessions 1 & 3 in `_MEMO`.
- [x] **S5** Build the code-driven “cinematic dossier” mockup using Tailwind/React (no external design tools), arranging Stage 04 frames with metadata ribbons and premium typography.
- [x] **S6** Ensure GSAP timelines still stage the new markup cleanly (hidden states, will-change, responsive tiers) and adjust selectors only if necessary.
- [ ] **S7** Verify reduced-motion fallback remains descriptive and that CTA/metadata stay accessible across tiers; document outcomes in `_MEMO`.

Status: **In Progress — Codex Session 2**

## Additional Workstreams (Future)
- Address repo lint debt (`unicorn` rules, `@ts-ignore`, `any` in performance tests).
- Evaluate bundling improvements/GSAP code splitting after segmentation.
- Explore analytics dashboard or Mixpanel events for timeline engagement.

## Quick Reference
- Animated experience: http://localhost:8080/briefing-engine
- Reduced-motion test: `prefers-reduced-motion` media emulation in Chrome DevTools
- Key files: `src/components/briefing/BriefingTimeline.tsx`, `src/components/briefing/sections/*`, `src/hooks/useScrollTriggerAnimation.ts`, `src/styles/utilities.css`

## Copy Clarity Audit Plan — 2025-10-14

**Goal:** Elevate Briefing Engine & Studios copy so it signals premium expertise, derisks “AI slop” perceptions, and aligns with stakeholder direction (“storyboard to video”, multi-duration specs, proof-backed claims).

**Why Now (2025-10-14):** Stakeholder review surfaced tone issues; Gemini transcript analysis highlighted value props but weak evidence; we need fresh 2025 benchmarks to keep messaging credible today.

**Scope:** Briefing Engine page (primary), Studios page positioning (secondary notes), supporting assets (YouTube campaign transcript, stakeholder feedback, COPY guide).

**Tools:**
- Archon MCP (RAG) — capture internal competitive intelligence / best-practice notes.
- Web research — gather 2025 references for trust-building AI studio copy.
- YouTube Transcript MCP — fetch latest campaign script for language alignment.

## Steps
- **S1 Internal Baseline:** Re-read `docs/COPY_IMPLEMENTATION_GUIDE.md`, Gemini transcript insights, and current Briefing Engine copy components.
- **S2 Stakeholder & Campaign Inputs:** Pull latest campaign transcript (`ISXjl_7Yc0g`) and map stakeholder copy notes to sections.
- **S3 External Benchmarking:** Run Archon + web research for high-trust AI production messaging (proof, process, differentiation) and log sources.
- **S4 Critical Review:** Evaluate each Briefing Engine section vs. findings, flag overstatement vs. evidence gaps, identify tonal or structure issues.
- **S5 Copy Direction:** Brainstorm actionable shifts (headlines, proof points, structure) for Briefing Engine, plus Studios copy opportunities.

**Impact Set:** `src/pages/BriefingEngine.tsx`, `src/components/briefing/*`, `docs/COPY_IMPLEMENTATION_GUIDE.md`, marketing transcripts, stakeholder feedback log.

**Output Artifacts:**
- Copy critique & opportunity matrix (to share in chat + log in `_MEMO`).
- Updated research citations appended to `_MEMO` and future REPORT entry.
- Recommendation shortlist for Studios page follow-on work.

## Execution Roadmap — Codex Session 3 (2025-10-15 11:05 PDT)
1. **Hero & Narrative Update** – Draft 3–7 word headline + 8–18 word subhead centred on “imagination is the only barrier,” highlight hybrid AI + Studio; add deliverable proof strip (sample storyboard, platform spec matrix) and dual actionable CTAs. *(In progress – hero updated, artifact links pending once assets ready.)*
2. **Stage Copy Realignment** – Edit `stageMetadata`, section headings, and Briefing Runway summaries to remove “nine styles” language, add multi-duration/spec messaging, and ensure “storyboard to video” phrasing appears in every step. *(Completed in current pass.)*
3. **Trust Layer Additions** – Outline modules for testimonials, named creative leads, compliance/stack badges, and artifact downloads; identify existing assets or placeholders for content team. *(Queued; awaiting layout direction.)*
4. **CTA & Benefit Consistency** – Sweep CTAs, MidPage CTA, AudienceBenefits to keep “storyboard to video” promise and symmetrical messaging for agencies/brands without numerical claims. *(Completed in current pass.)*
5. **Studios Page Alignment** – Prepare brief for Studios copy refresh (human-led + measurable outcomes) so parallel session can apply shared tone. *(To do – coordinate with Sessions 1/2.)*

### Hero Animation Prototype – Codex Session 3 (2025-10-15)
S6–S8 **Deprecated** – Orbit hero exploration cancelled per stakeholder direction (2025-10-15). Focus returns to copy/layout deliverables only.

— Codex Session 3

### T18 – ParticleCore Research Deep Dive (Codex Session 2 — 2025-10-15)
- **S1 Code Recon:** Map `ParticleCore.tsx` architecture, dependencies (`performance-adapter`, `adaptive-config`), runtime lifecycle (ResizeObserver, gsap ticker, pooling), and adaptive tier touchpoints.
- **S2 Runtime Diagnostics:** Re-read performance artifacts (`docs/gsap-runtime-performance-validation-2025-10-14.md`, Story 1.14, performance audits) focusing on particle layout thrash, GC pressure, and adaptive logging gaps.
- **S3 External Research:** Use Archon MCP, Context7 GSAP/canvas docs, and web search to capture 2024–2025 guidance on high-performance Canvas particle systems, ResizeObserver sizing, and smooth-scroll ticker integration; archive sources under `/.codex/external/`.
- **S4 Knowledge Synthesis:** Log distilled insights and remediation ideas in `/.codex/_MEMO.md` (Decisions, Next Steps) and flag follow-up tasks (layout thrash fix, spawn throttling, measurement strategy) in Outstanding Tasks.

### T20 – ParticleCore Glow Shell (Codex Session 2 — 2025-10-15)
- **S1** Add holographic pulse utility (keyframes + class) to `src/styles/utilities.css`.
- **S2** Layer static + pulsing gradient divs around the ParticleCore canvas to amplify perceived scale without raising particle count.
- **S3** Rebuild (`npm run build`) and queue manual scroll smoke to verify visuals & performance.

### T19 – Timeline Copy Critique (Codex Session 3 — 2025-10-15)
- **S1 Inventory Current Copy:** Capture verbatim text for all five GSAP timeline stages (labels, hero details, dossier cards, metadata panels). ✅
- **S2 Benchmark Research:** Pull ≥5 2024–2025 references on SaaS/B2B storytelling clarity, proof mechanics, and AI trust signals; document rationale in `_MEMO.md`. ✅
- **S3 Critique & Direction:** Deliver structured critique with research-backed recommendations on brevity, proof layers, hybrid AI + human positioning, and multi-duration messaging; tag implementation follow-ups separately. ✅ (presented to user)
- **S4 Implement Step 01 revisions:** Apply outcome-first copy and proof chip updates to the hero stage, then rebuild for verification. ✅
- **Next:** Scope Step 02–05 implementations; align with Sessions 1/2 before committing layout tweaks.

— Codex Session 3
## USP Copy Transcript Harvest — 2025-10-20

**Goal:** Identify every Claude session that concentrated on copywriting tied to Cre8tive AI’s USP/differentiator messaging and consolidate the insights into a single reference artifact.

**Steps**
- [x] **S1 – Candidate Scan:** Use `rg` / lightweight parsing across `.claude/projects/-home-cameronai-projects-cre8tive-website-1006/*.jsonl` to surface sessions mentioning copy strategy, USP language, differentiators, or messaging brainstorms.
- [x] **S2 – Session Verification:** Skim each candidate transcript end-to-end; confirm the focus is copy differentiation (exclude purely technical/animation work), capture session ID, date, participants, and key copy decisions.
- [x] **S3 – Master Reference Build:** Compile verified findings into a new document (`docs/copy/cre8tive-usp-copy-compendium.md`) structured by USP theme, including cited session IDs, quotes, and linked reference artifacts.
- [x] **S4 – Documentation Pass:** Update this plan and `/.codex/_MEMO.md` with summary + next steps; ensure session ID list is ready for stakeholder use.

**Impact Set:** `.claude/projects/-home-cameronai-projects-cre8tive-website-1006/*.jsonl`, `docs/copy/cre8tive-usp-copy-compendium.md` (new), `.codex/_MEMO.md`, `.codex/REPORT.md` (post-results).
