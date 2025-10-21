# Focus Anchors

- Branch: `GSAP-segmentation`
- **Mission:** Finish the segmented `/briefing-engine` timeline with responsive desktop tiering so every viewport (1024 px–3440 px) feels intentional, animations stay premium, and progress affordances remain crystal clear.
- Palette invariant: dark indigo/cyan/fuchsia + holographic highlights; preserve cinematographer aesthetic while tuning layouts.
- Adaptive performance stack (Story 1.14) stays enabled via `performance-adapter`, `adaptive-config`, `useAdaptivePerformance`.
- Build still passes (`npm run build`); lint blocked by repo unicorn config + legacy `any` in perf tests (logged for future cleanup).
 
# AI Product Charter — Copy Clarity Audit (2025-10-14 Codex Session 2)
- **Problem:** Briefing Engine & Studios copy reads like generic AI hype; stakeholders flag trust gaps and misaligned messaging.
- **Target User:** B2B marketing leaders, creative directors, and agency owners evaluating high-stakes AI production partners.
- **Success Signal:** Web copy that benchmarks against top-tier AI studios, survives stakeholder review without “AI slop” concerns, and anchors trust with proof (outcome metrics, process clarity, evidence-backed claims).

# Commands

```bash
npm run dev        # Dev server (http://localhost:8080) – ask user to restart if down
npm run build      # Production build (tsc + vite)
npm run lint       # ESLint (fails due to unicorn + legacy any)
npm run test       # Vitest (not yet wired for briefing timeline)
npm run preview    # Preview production build on http://localhost:4173
```

# Collaboration Note — 2025-10-14 (Codex Session 2)
- Running two parallel Codex sessions: this terminal is **Codex Session 2**. Codex Session 1 is reviewing MCP screenshots.
- Please preserve each session’s entries; Session 1 should avoid editing `Codex Session 2` notes and vice versa.
- When updating PLAN/\_MEMO/REPORT, Codex Session 2 will sign entries accordingly so we can track provenance.

# Collaboration Update — 2025-10-14 (Codex Session 2)
- Third parallel agent (**Codex Session 3**) now active; maintain signed entries across all three sessions so provenance stays clear.
- Session 2 to continue screenshot validation while Session 1 handles analysis and Session 3 pursues copy/strategy tracks (per PLAN.md footer).

# AI Product Charter — Timeline Smoothness Fix (2025-10-15 Codex Session 2)
- **Problem:** Briefing timeline scroll experience stutters because Lenis isn’t synchronized with GSAP, timelines overlap aggressively, and refresh logic fights ScrollTrigger.
- **Target User:** Visitors experiencing the AI Briefing Engine walkthrough on desktop/laptop (1024–3440 px viewports) and stakeholders judging polish.
- **Success Signal:** Continuous 60 fps scroll with no perceptible hitching across sections, verified via Chrome performance traces and MCP viewport sweeps after fixes land.

# AI Product Charter — USP Copy Deep-Dive (2025-10-20 Codex Session 2)
- **Problem:** USP-driven messaging across Cre8tive AI surfaces is inconsistent because prior transcript insights on differentiators are scattered, making it hard to align future copy work with validated strengths.
- **Target User:** Cre8tive AI marketing stakeholders and content designers needing a consolidated knowledge base of messaging pillars and proof points.
- **Success Signal:** Exhaustive log of sessions focused on copy differentiation plus a master reference document that teams can rely on without rereading raw transcripts.

# AI Product Charter — Briefing Engine Recovery (2025-10-15 Codex Session 2)
- **Problem:** `src/pages/BriefingEngine.tsx` was force-reverted to an older animation stack, disconnecting the new segmented timeline and causing build-time import failures.
- **Target User:** Cre8tive AI marketing stakeholders and developers relying on the current segmented Briefing Engine experience.
- **Success Signal:** Page reinstates the segmented timeline orchestration without missing imports, dev server rebuilds cleanly, and stakeholders regain today’s timeline flow.

# Research Notes — GSAP Debug Report (2025-10-15 Codex Session 2)
- Read `docs/gsap-debug-report-2025-10-15.md`; captures seven root causes (Lenis integration, refresh listener, overlap aggressiveness, will-change overuse, missing invalidateOnRefresh, conditional force3D, refreshPriority gaps) plus validation checklist.
- Key implementation directives: wire Lenis to gsap ticker, delete custom refresh listener, add `invalidateOnRefresh`, rebalance motion overlaps ≤0.4s, clear `will-change` via `clearProps`, standardize `force3D: true`, assign descending `refreshPriority`.
- Post-fix validation must include performance trace, resize checks, GPU paint flashing, and cross-browser smoke.
# Segmented Timeline Snapshot (2025-10-14)

- **Components:** `BriefingTimeline.tsx` orchestrates five stacked sections – `HeroBriefSection`, `NeuralSynthesisSection`, `StyleSelectionSection`, `StoryboardAssemblySection`, `StudiosHandoffSection`.
- **Affordances:** Sticky instruction pill (“STEP · TITLE”), keyboard/tap advance (“Next” → “Restart”), right-edge progress rail (`timeline-progress-*` utilities), analytics events `timeline_stage_view`, `timeline_manual_advance`, `timeline_restart` via `useAnalytics`.
- **Reduced Motion:** `useScrollTriggerAnimation` passes `{ prefersReducedMotion }`; sections tag `data-motion` and swap animated DOM (`data-motion-hide`) for static alternatives (`data-motion-show`). ScrollTriggers still fire to log analytics / maintain progression.
- **Docs:** SPEC, ARCHITECTURE, PLAN, QA gates, performance brief, retrospectives, story contexts, and source tree updated to reference `BriefingTimeline`; legacy `BriefToStoryboardAnimation.tsx` kept only for historical context.
- **Status:** Build ✅; initial Chrome DevTools MCP validation (desktop sweep) captured. Outstanding polish + responsive workstreams below.

# Outstanding Tasks

1. **Desktop Responsive Implementation (IN REVIEW)**
   - [x] Add GSAP `matchMedia` tiers (laptop 1024–1439, desktop 1440–1919, large desktop 1920–2559, ultra-wide ≥2560) across all sections with tier-specific duration/stagger configs.
   - [x] Convert ScrollTrigger `start`/`end` to functions + set `invalidateOnRefresh: true`; add debounced orientation refresh in `useScrollTriggerAnimation`.
   - [x] Introduce fluid typography/spacing (CSS `clamp()` tokens, viewport padding) and responsive max-widths so 1707 px no longer feels oversized and ≥2560 px fills space gracefully.
   - [x] Reposition instruction pill & progress affordances using safe-area, plus add mobile/compact rail variant per research.
   - [x] Simplify 3D transforms on smaller tiers (Storyboards/Styles/Handoff) and gate velocity boosts to desktop tiers while keeping ParticleCore calm on compact tiers.
2. **Validation & QA**
   - ✅ Chrome DevTools MCP desktop sweep (1366, 1707, 1920, 2560, 3440) captured — screenshots at `/tmp/chrome-devtools-mcp-*/screenshot.png`. Next: add Lighthouse + performance trace + analytics event validation.
   - Cross-browser smoke (Chrome/Firefox/Safari/Edge) noting any animation drift.
3. **Analytics Verification**
   - Confirm `timeline_stage_view`, `timeline_manual_advance`, `timeline_restart` push correct payloads post-responsiveness (pending).
4. **Lint/Test Debt**
   - Repo-level unicorn config + legacy `any` remain; plan follow-up once responsive mission ships.
5. **Documentation Follow-up**
   - Update docs & REPORT after responsive tiers/validation complete.
6. **Copy Overhaul (Codex Session 1)**
   - Phases 1–3 complete (hero/meta, stage metadata, process-flow copy, timeline intro, mid/final CTAs, audience benefits, FAQ). Phase 4 validation pending.
   - Next: Phase 4 QA (Chrome MCP viewport sweep, Lighthouse, analytics events, documentation updates) per `docs/BRIEFING-ENGINE-COPY-IMPLEMENTATION-PLAN.md`.
7. **Copy Clarity Audit (Codex Session 2)**
   - Audit Briefing Engine & Studios messaging against stakeholder feedback + marketing research.
   - Surface evidence-backed copy direction updates; emphasize “storyboard to video” narrative and multi-duration specs.
   - Stakeholder flags: step labels must stay consistent (Step 01–05), remove redundant "Choose your creative look" block, highlight multi-duration/spec creation, ensure CTA reads “storyboard to video”, trim wordy Step 03 copy, keep runway copy concise.
8. **ParticleCore Research Deep Dive (Codex Session 2)**
   - Inventory `ParticleCore.tsx` architecture, adaptive config touchpoints, pooling strategy, sizing lifecycle, and ticker integration.
   - Digest performance reports (Story 1.14, GSAP runtime validation) to quantify layout thrash, GC pressure, and adaptive tier behaviour.
   - Execute external research (Archon MCP, Context7 GSAP/canvas docs, web) for 2024–2025 best practices on high-density canvas particles + smooth-scroll integrations; archive findings and log remediation ideas for forced reflow fix.
9. **ParticleCore Density Experiment (Codex Session 2)**
   - Increase adaptive particle counts (high/medium tiers) and tune spawn cadence to test richer visuals without regressing performance.
   - Rebuild + capture quick manual check; queue full perf trace if counts ship.

# Research Notes — 2025-10-14 AM
- Re-read core docs (README, SPEC, ARCHITECTURE, CONTRIBUTING) and GSAP audit bundle; `TASK.md` recreated to track current workstreams.
- Responsive backlog validated against `gsap-research-responsive-scroll-storytelling-2025-10-14.md`; priority items: matchMedia timing tiers, function-based ScrollTrigger start/end, safe-area aware progress affordances, mobile rail variant, and fluid typography.
- Performance validation report (runtime + audit) flagged ParticleCore forced reflow (811 ms) and missing GPU hints in Styles/Handoff — schedule fix alongside responsive sweep so regressions handled together.
- 2025-10-14 Codex Session 2: Pulled `ISXjl_7Yc0g` YouTube campaign transcript (four-step journey, "Stop dreaming. Start building." CTA) to align copy voice.
- Gartner (2025-09-03) notes 53% of consumers distrust AI-generated search results; need explicit proof + human oversight in messaging.
- Yext (2025-02) identifies AI Pragmatists vs Skeptics; plan copy to reassure skeptics with transparency + human support.
- TrustRadius (2025-09) reports 95% of B2B buyers view vendor copy as overly promotional; prioritize case studies, peer proof.
- Guardian (2025-08) warns about AI "workslop" fatigue; differentiate with grounded language and expert ownership.
- Hackstone (2024-11) stresses pairing AI automation with human creative leadership and measurable outcomes.
- Competitor scan: 351 Studio leans on ROI/budget-friendly AI video messaging—need to outrun by emphasizing enterprise rigor + Studio craftsmanship.

# Historical Log

- **2025-10-13:** Identified ScrollTrigger pinning dead zones; planned segmentation.
- **2025-10-14 13:30 NZDT:** Segmented timeline + sections implemented; doc suite refreshed; analytics wired.
- **2025-10-14 14:10 NZDT:** Instruction rail announces active step (`aria-live`); progress rail accessible; “Next” button transitions to “Restart” on final stage.
- **2025-10-14 14:55 NZDT:** Reduced-motion fallbacks deployed via `data-motion`, static imagery/text, and CSS overrides; build validated.
- **2025-10-14 16:20 NZDT:** Memoized section animation registries via `useCallback` to stop ScrollTrigger replays when active stage state updates; verified production build.
- **2025-10-14 15:40 NZDT:** Introduced `ReducedMotionIllustration` SVG set and upgraded all reduced-motion cards with bespoke layouts, bullet summaries, and consistent focus styles.
- **2025-10-14 16:45 NZDT:** Landed GSAP audit Priority 1 refinements (will-change lifecycle, `force3D`, `refreshPriority`) across Hero, Neural Synthesis, and Storyboard sections; rebuild passes.
- **2025-10-14 17:05 NZDT:** Applied Priority 2 motion polish—hero and neural timelines now use richer easing/duration hierarchy, style grid gains subtle back-out cascade, storyboard stagger slowed to 0.18 s for cinematic reveal.
- **2025-10-14 17:18 NZDT:** Centralised stage timing constants in `motion-config.ts`; sections now reference shared config for durations/easing to streamline future tuning.
- **2025-10-14 17:25 NZDT:** Neural synthesis stage now reacts to scroll velocity—`onUpdate` maps ScrollTrigger velocity into a clamped boost layered atop the base intensity timeline, keeping reduced-motion users on static paths.
- **2025-10-14 17:30 NZDT:** ParticleCore switched to a GSAP ticker + ResizeObserver (no per-frame layout reads); Styles/Handoff sections now share the will-change/force3D lifecycle so all five segments are GPU primed.
- **2025-10-15 09:40 NZDT:** Desktop MCP sweep completed (1366→3440 widths); logged oversized mid-tier typography, ultra-wide guttering, missing matchMedia tiers, and progress affordance gaps. Ready to implement responsive roadmap.
- **2025-10-15 12:55 NZDT:** Rolled in responsive GSAP tiers, function-driven ScrollTriggers, fluid typography/spacing, and safe-area progress affordances; ready for viewport revalidation + perf trace.
- **2025-10-15 13:20 NZDT:** Refined compact-tier animations (reduced 3D, velocity gating) and standardized timeline containers/typography tokens. Phase 4 validation + analytics verification next.
- **2025-10-15 11:20 NZDT:** Revalidated resizing code (`motion-config`, `useScrollTriggerAnimation`, ParticleCore) + ran new MCP viewport sweep post updates; build succeeds (`npm run build`). Pending: analytics payload check + Lighthouse.
- **2025-10-15 14:45 NZDT – Codex Session 1:** Coordination note — two Codex CLI sessions active; each must sign MEMO/PLAN updates with their session tag and leave one another's entries untouched.
- **2025-10-15 14:52 NZDT – Codex Session 1:** Kicked off T8 Content Simplification — remove redundant "Choose Your Creative Style" section beneath the timeline to avoid duplicated messaging.
- **2025-10-15 15:00 NZDT – Codex Session 1:** Removed VisualStylesGallery block from `src/pages/BriefingEngine.tsx`; production build (`npm run build`) passes. Awaiting Session 2 validation updates before further copy changes.
- **2025-10-15 15:20 NZDT – Codex Session 1:** Ingested `docs/BRIEFING-ENGINE-COPY-IMPLEMENTATION-PLAN.md`; queued Phases 1–4 in PLAN (T9–T12) covering hero/meta rewrite, timeline intro + stage copy updates, CTA/benefit refresh, FAQ build, and QA/perf validation.
- **2025-10-15 15:48 NZDT – Codex Session 1:** Landed Phase 1 copy updates (hero messaging, proof bar, meta tags, stage metadata, process-flow wording), swept touched copy for "our Studio" language, and revalidated with `npm run build`.
- **2025-10-15 15:55 NZDT – Codex Session 1:** Simplified hero to headline + subhead + stats (removed descriptive paragraph per direction) and re-ran `npm run build`.
- **2025-10-15 16:05 NZDT – Codex Session 1:** Removed hero stats badges and timeline instruction pill per feedback; adjusted hero GSAP to match and revalidated with `npm run build`.
- **2025-10-15 16:15 NZDT – Codex Session 1:** Beginning Copy Overhaul Phase 2 (timeline intro, CTA/benefit refresh, final CTA). Coordinating with Session 2 to avoid overlap.
- **2025-10-15 16:32 NZDT – Codex Session 1:** Completed Phase 2 copy updates (timeline intro section, MidPage CTA, audience benefits, final CTA) and validated with `npm run build`.
- **2025-10-15 16:50 NZDT – Codex Session 1:** Added FAQ section (`BriefingFAQ.tsx`) with 10 curated Q&As, mounted after Audience Benefits, and confirmed build success.
- **2025-10-15 17:05 NZDT – Codex Session 1:** Reviewed validation screenshots (1024–3440 widths) + existing tiered utilities; researching container-query & GSAP matchMedia strategies for desktop resizing. Next: draft implementation plan that keeps timeline content within safe max widths, harmonizes hero typography, and stabilizes progress rail across odd viewports.
- **2025-10-15 17:22 NZDT – Codex Session 1:** Shipped desktop layout refinements: tightened `.timeline-section-container` width clamps + `container-type`, restructured Audience Benefits & Workflow Transformation around the shared shell, and added dynamic ScrollTrigger progress offset via `ResizeObserver`. `npm run build` ✅. Pending: MCP viewport re-run + documentation/analytics checks (Phase 4).
- **2025-10-15 09:10 PDT – Codex Session 2:** Initiated copy clarity audit; charter logged; plan to unify stakeholder feedback, Gemini transcript insights, and current-market research before recommending revisions.
- **2025-10-15 09:55 PDT – Codex Session 2:** Collected YouTube campaign transcript, stakeholder copy notes, and 2025 trust research (Gartner, Yext, TrustRadius, Guardian, Hackstone) to ground upcoming recommendations.

## Codex Session 3 – Copy Refresh Plan (2025-10-15 11:05 PDT)
- Align hero + intro messaging around tangible deliverables (sample storyboard, Studio partnership) instead of metrics. Shift subhead to highlight guaranteed process and human oversight.
- Rewrite `stageMetadata` + `BriefingProcessFlow` copy to incorporate stakeholder directives: consistent Step labels, remove “nine styles” count, call out multi-duration specs, reinforce storyboard-to-video narrative.
- Add trust modules: proof strip with artifacts, client testimonial slot, named creative leads, compliance/stack badges; avoid numeric claims until data available.
- Prepare artifact links (storybook PDF, platform spec matrix) and coordinate Studios page tone shift (“AI acceleration + director-led production”).
- Plan for follow-up insertion of real metrics once validated; reserve placeholder language so future updates are seamless.
- Hero research guardrails (2025-10-15): stick to 3–7 word headline, 8–18 word subhead, actionable CTA verb; echo campaign message “imagination is the only barrier” and hybrid AI + Studio positioning.

### 2025-10-15 11:45 PDT – Codex Session 3 Progress
- Refreshed hero and journey copy with dual CTAs plus proof content (subsequently streamlined per 12:25 update).
- Updated timeline metadata, process flow, style section, and benefits copy to remove “nine styles” language, add multi-duration/spec messaging, and emphasise storyboard-to-video narrative.
- Simplified story engine terminology (Neural section → Story Engine) for clarity.
- Ran `npm run build` ✅ (passes; vendor bundle 790kb/900kb budget).

### 2025-10-15 12:25 PDT – Codex Session 3 Update
- Simplified hero per premium SaaS research: headline now “From Brief to Native Video,” 16-word subhead, dual CTAs only; removed badge row and immediate trust block to reduce visual load.
- Planning to reintroduce trust proof lower on page once layout strategy confirmed with Sessions 1/2.

### 2025-10-15 13:05 PDT – Codex Session 3 Update
- Rolled copy refinements across mid-page CTA, workflow comparison, audience benefits, final CTA, and FAQ—removed unverified metrics, reinforced hybrid AI + Studio positioning, and clarified deliverables.
- `WorkflowTransformation.tsx` now contrasts agency vs Briefing Engine without numeric promises and highlights value props focused on process clarity.
- FAQ rewritten to focus on guided intake, production-ready outputs, agency scalability, and Studio support without quoting unsourced stats.
- `npm run build` ✅ (vendor bundle 749kb / 900kb).
- Updated Briefing Runway description to describe the unified workflow instead of interaction hints.

### 2025-10-15 13:45 PDT – Codex Session 3 Update
- Converted runway stage cards to minimalist signal chips (headline + status trio) so the dossier column owns detailed copy.
- Replaced the “Connected Pipeline” badge with a left-aligned ribbon visual that highlights the current step using the carousel state.
- `npm run build` ✅ after layout changes (vendor bundle 749kb / 900kb).

### 2025-10-15 14:20 PDT – Codex Session 3 Update
- Iterated on runway design: cards now show icon + single status tag (Option 2), pipeline ribbon pushed lower for breathing room, and section padding expanded (`py-32`/`md:py-36`).
- Adjusted floating call button offsets so it sits directly above the ElevenLabs widget.
- `npm run build` ✅ (vendor bundle 749kb / 900kb).

### 2025-10-15 14:30 PDT – Codex Session 3 Task
- Perform copy critique pass for the entire Briefing Timeline (stage cards + dossier content) to tighten language and remove wordiness.

### 2025-10-15 12:50 PDT – Codex Session 3 Research Notes
- Benchmarked premium hero patterns (DesignContra SaaS analysis, Pioneer UI examples, Omniconvert optimization, Nudge’s 2025 best practices) to keep layout lean and outcome-led.citeturn0search0turn0search1turn0search2turn0search6
- Reviewed 3D hero animation case studies (Weston Mossman R3F hero, Michal Załobny transitions) and performance guidance on lazy-loading Three.js experiences.citeturn0search3turn0search4turn0search5
- Direction: build interactive “Storyboard Orbit” scene—floating storyboard tiles flow into a central video prism, with subtle parallax tracked to pointer and autoplay timeline loop (intended for hero side visual).

### 2025-10-15 13:30 PDT – Codex Session 3 Prototype Log
- Added `OrbitHeroPreview` component (React Three Fiber + Drei) rendering orbiting storyboard cards around a luminous video prism with pointer parallax and sparkles; reduced-motion fallback supplies static storyboard grid.
- Added `OrbitHeroPreview` component (React Three Fiber + Drei) rendering orbiting storyboard cards around a luminous video prism with pointer parallax; reduced-motion fallback supplies static storyboard grid.
- Created `/hero-preview` route (lazy-loaded) for stakeholder review and kept chunking under budget by isolating new 3D stack into `hero-visual` manual chunk. Build passes (`npm run build`).
- Dependencies: `@react-three/fiber@8.15.12`, `@react-three/drei@9.56.13`, `three@0.152.2`; manual chunk update prevents vendor overage.
- Added client-mount gate to the preview so Canvas instantiates after hydration, addressing R3F strict-mode warnings.
- Updated Helmet CSP to allow `worker-src 'self' blob:` (future-proofing WebGL helpers) and removed Drei sparkles to keep the prototype stable without background workers.

### 2025-10-15 14:20 PDT – Codex Session 3 Retrospective
- Orbit hero prototype removed per stakeholder decision; deleted preview component/route, uninstalled R3F dependencies, restored CSP + bundler to pre-prototype configuration. Returning focus to copy changes.

— Codex Session 3

— Codex Session 3

### 2025-10-15 15:40 PDT – GSAP Smoothness Fix (Codex Session 2)
- Integrated Lenis ↔︎ ScrollTrigger sync (`useLenis`, gsap ticker bridge, lag smoothing reset) in `src/pages/BriefingEngine.tsx` and removed the bespoke resize refresh listener from `useScrollTriggerAnimation`.
- Standardised section timelines: added descending `refreshPriority`, ensured `invalidateOnRefresh`, enforced `force3D: true`, and swapped will-change handling to `requestAnimationFrame` + `clearProps` callbacks across Hero/Neural/Styles/Storyboard/Handoff.
- Reduced negative overlaps in `motion-config.ts` (≤0.4 s) to keep sequences readable during rapid scroll/reverse interactions.
- `npm run build` ✅ (11.45 s; vendor bundle 790 kb / 900 kb budget).

— Codex Session 2

### 2025-10-15 16:32 PDT – Timeline Visibility Investigation (Codex Session 2)
- Research recap: Archon/context7 runs surfaced no direct fixes; web search confirmed ScrollTrigger’s `lazy` default keeps “from” states dormant until the trigger fires, which leaves multi-element grids visible unless `lazy: false` or explicit pre-set values are applied.citeturn5open0
- Diagnosis: timeline sections mark bulk elements with `data-motion-hide`, but in full-motion mode those nodes render fully visible until ScrollTrigger activates. Multi-element grids (Storyboard frames 1,3,4) therefore flash before the first tween adjusts opacity.
- Action: Pre-set `autoAlpha: 0` on each section’s animated elements and force eager rendering by adding `lazy: false` to timeline ScrollTriggers. Rebuilt (`npm run build`) to confirm no regressions; browser validation next.
- Hero polish: tied the stage instruction pill and campaign/platform detail badges into the Hero timeline sequence so they stay hidden until the GSAP entrance plays.
- Validation: Chrome DevTools MCP shows storyboard frame cards now reporting `{ opacity: \"0\", visibility: \"hidden\" }` prior to triggering; timeline sweeps pending full screenshot batch but initial gating confirmed.

### 2025-10-15 17:45 PDT – Copy Clarity Benchmarks (Codex Session 3)
- Pulled 2024–2025 SaaS/B2B onboarding copy research: Smashing Magazine’s microcopy checklist stresses one idea per element and front-loaded value, matching our brevity targets for timeline captions.citeturn5view0
- Toptal’s UX microcopy analysis reiterates Nielsen Norman Group data—concise, scannable copy boosts usability by 124%—so every stage description needs a single outcome statement.citeturn6view0
- Chameleon’s 2025 benchmarks show 72% completion for three-step tours vs 16% for seven-step flows, reinforcing our plan to keep each GSAP frame to one action and proof point.citeturn10view0
- TechRadar’s coverage of the July 9 2024 Gartner survey (64% of customers prefer human support) underlines why we must emphasise our hybrid “AI + Studios” model in copy.citeturn8view0
- Guidejar’s 2025 onboarding best practices push teams to deliver time-to-first-value immediately; use that lens to rephrase stage outcomes around the first tangible win.citeturn11view0

— Codex Session 3

### 2025-10-15 18:05 PDT – Step 01 Copy Refresh (Codex Session 3)
- Replaced hero headline/subhead with outcome-first framing (“Lock Your Brief in Minutes”) and tightened supporting sentence so visitors grasp the immediate win without reading supporting tiles. Implemented in `src/components/briefing/sections/HeroBriefSection.tsx`.
- Converted hero proof chips to artifact/spec/platform evidence and rewrote intake tiles to emphasise time-to-first-value, synced visibility, delivery scope, and human oversight (`section-data.ts`).
- Updated stage metadata description to a single, scannable sentence reinforcing “seven cues” guidance.
- `npm run build`

— Codex Session 3

— Codex Session 2

### 2025-10-15 16:20 PDT – ScrollTrigger Re-trigger Bug Research (Codex Session 2)
- Archon RAG pull (gsap forum threads) reiterates common pitfall of creating multiple ScrollTriggers per element and highlights advice to test animation without ScrollTrigger first (gsap.com forum thread 44892).
- Perplexity reasoning (2025 guidance) surfaced interaction notes: Lenis sub-pixel interpolation can flutter around start/end; `once: true` only affects animation timeline, not additional triggers; matchMedia re-evaluation during scroll can recreate triggers.
- Context7 GSAP docs reviewed to confirm `onEnter`, `onToggle`, `preventOverlaps`, and hook for `ScrollTrigger.config` plus callbacks usage.
- Web search surfaced Sept 2025 discussion about `ignoreMobileResize` and ScrollTrigger refresh behaviour; additional articles on `refreshPriority`, fast scroll handling, and toggleActions clarifications.
- Hypothesis forming: dual triggers (animation + analytics) with identical start/end plus Lenis-driven velocity likely recreating or retriggering timelines; need to audit matchMedia cleanup, state refs, and whether analytics trigger should be merged.

### 2025-10-15 17:05 PDT – ScrollTrigger Re-trigger Fix (Codex Session 2)
- Root cause confirmed: stage callbacks came from `BriefingTimeline` state, and every stage enter/leave re-render rebuilt `onStageEnter`/`onStageLeave`. Section hooks depended on those callbacks, so `useScrollTriggerAnimation` tore down and re-created ScrollTriggers mid-scroll; `once: true` reset and timelines replayed.
- Applied `useRef` + `useEffect` in all five timeline sections so GSAP timelines reference stable `onStageEnter`/`onStageLeave` handlers, keeping `runAnimation` memoized on `stage.id` only.
- Memoized analytics helpers in `useAnalytics` (`useCallback` + `useMemo`) for stable `trackEvent`/`trackPageView`, preventing needless prop churn.
- Rebuilt bundles (`npm run build`) to verify TypeScript + Vite clean; vendor chunk 749 kb / 900 kb budget ✅.

### 2025-10-15 17:45 PDT – Timeline Step Labels & Visual Style Overlay (Codex Session 2)
- Introduced shared `StepLabel` component (`src/components/briefing/StepLabel.tsx`) and replaced bespoke markup in all five sections so STEP badges now share stacked typography with heavier tracking; bumped sizes for improved legibility while keeping hero instructions adjacent.
- Refreshed Stage 03 visual style cards with a darker gradient wash, subtle backdrop blur, and brighter `Visual Style` typography + stronger drop shadow so the overlay reads clearly without obscuring imagery.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Validation sweep still pending the MCP screenshot pass.

### 2025-10-15 18:55 PDT – Visual Direction Layout Pass (Codex Session 2)
- Extended `StepLabel` with a large variant and applied it to the Visual Direction stage, scaling the STEP identifier and nudging the block toward center with additional padding.
- Tightened the description block (360 px max width, smaller font) so copy wraps into shorter lines per stakeholder example.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Pausing rollout to other stages until this layout is approved.

### 2025-10-15 19:25 PDT – Typography Alignment Sprint (Codex Session 2)
- Current emphasis: lock in premium typography across all timeline stages before propagation. Stage 03 acting as pattern source.
- Added micro accent beneath “Direction”, elevated supporting descriptor (“Signature looks snap into place”), and keeping STEP stack anchored left while adjusting scale/gap.
- Next: once Stage 03 locks, cascade the layout to remaining stages and capture viewport validation.

### 2025-10-15 20:05 PDT – Stage 03 Descriptor Spacing (Codex Session 2)
- Tweaked the Visual Direction header so the STEP stack nudges 24 px left (negative margin) while the descriptor shifts right via auto margins, widening the breathing room between columns without drifting the spine off grid.
- After review the italic read too casual, so we pivoted to a lighter-weight uppercase treatment (slightly smaller, softer tracking, 75% opacity) that keeps the premium tone without overpowering the STEP block.
- Updated PLAN S1 notes to capture the spacing + typography refinements before propagating to the other stages.

### 2025-10-15 20:25 PDT – Stage 04/05 Template Propagation (Codex Session 2)
- Mirrored the Stage 03 header template into Storyboard Assembly and Studios Handoff: both now use `StepLabel` `size="lg"` with the negative left margin, widened flex gap, and the same uppercase descriptor styling on the right.
- Trimmed legacy heading/body copy in those sections so the primary descriptor carries the message (“Scene decks lock into multi-duration cuts” / “Production bundle hands off to studios in days”), keeping the timeline typography consistent.
- Preserved animation hooks by retaining `data-storyboard-copy` / `data-handoff-copy`, and wired the descriptor paragraphs to the section `aria-labelledby` ids for accessibility continuity.

### 2025-10-15 20:40 PDT – Descriptor Removal Directive (Codex Session 2)
- Updated the template so Stage 03, 04, and 05 headings now show the STEP lockup only; supporting descriptions live in the body content below per new guidance.
- Extended `StepLabel` to accept an `id` prop so each section can continue wiring `aria-labelledby` without relying on separate paragraph elements.
- Studios Handoff keeps the CTA in the header but aligns it to the right of the STEP column; Storyboard + Styles headers now collapse to the single spine block for a cleaner, cinematic read.

### 2025-10-16 09:45 PDT – Stage 05 Dossier Balance (Codex Session 2)
- Relocated the stats grid and delivery ribbon into the left dossier column (using grid order classes to preserve mobile sequencing), which levels the column heights and shortens the overall mockup footprint without squeezing the storyboard imagery.
- Ran `npm run build` to confirm the layout change compiles cleanly (vendor 749 kb / 900 kb, unchanged).

### 2025-10-15 20:55 PDT – Stage 02 Alignment (Codex Session 2)
- Enlarged the Story Engine STEP stack (`size="lg"`) and slotted it into the shared header template with the AI core indicator, pulling the column closer to the particle core via reduced section gaps and a slight negative top offset on the grid.
- The left column now inherits the same negative margin pattern (`md:-ml-6`) so the STEP spine lines up with later frames, but the particle core still sits immediately beneath for the “close to the effect” read.
- PLAN S2 now reflects that stages 02–05 share the STEP-only header; Hero remains to be migrated after sign-off.

### 2025-10-15 21:10 PDT – Visual Style Overlay Revisit (Codex Session 2)
- Removed the broad gradient wash over each style card and replaced it with compact badges behind the “Visual Style” label + style name so the imagery stays vibrant.
- Added a subtle pulse dot and shadowed capsules to keep text legible without muting the card art; hover accent remains but now only lifts colour rather than overlaying opacity.
- No animation hooks touched (the cards still carry `data-style-card` etc.); PLAN unchanged, but this note documents the alternative readability approach stakeholders asked for.

### 2025-10-15 21:18 PDT – Overlay Rollback (Codex Session 2)
- Per review screenshot, reverted to a single style-name pill and removed the extra “Visual Style” tag so the card art owns the frame again.
- Capsule sits at ~55% black with a heavier drop shadow to keep the name legible without pulling tonal weight from the imagery.

### 2025-10-15 21:25 PDT – Style Label Restore (Codex Session 2)
- Pulled the pill background entirely so the style name returns to the original treatment: bold uppercase with a heavy drop shadow, no additional backdrop.
- Hover accent and motion remain untouched; imagery is now fully unobstructed while the text stays readable via shadow only.

### 2025-10-15 21:28 PDT – Style Label Shadow Tweak (Codex Session 2)
- Softened the drop shadow to a tighter 16px/32px spread at 65% opacity—gives enough contrast without the earlier smoky halo.

### 2025-10-15 21:32 PDT – Style Label Shadow Boost (Codex Session 2)
- Bumped the shadow to 22px/48px at 85% opacity so the white label reads over brighter renders; imagery still unobstructed.

### 2025-10-15 21:36 PDT – Style Label Contrast Pass (Codex Session 2)
- Nudged the label colour toward a cool neon gray (`#f2f4ff`) and deepened the shadow to 24px/60px at 88% opacity so even the high-key Documentary frame stays readable.

### 2025-10-15 21:42 PDT – Style Label TextShadow (Codex Session 2)
- Swapped Tailwind drop-shadow for explicit textShadow (0 4px 16px + 0 0 8px, ~90% opacity) and slightly warmer neon tint. Should finally cut through the bright Documentary card without adding overlays.

### 2025-10-14 16:05 PDT – Briefing Engine Audit (Codex Session 2)
- Read SPEC, ARCHITECTURE, PLAN, REPORT, MCP playbook, and TASK to refresh scope: focus stays on timeline responsive polish + validation (T6 still open).
- Page stack recap: `ReactLenis` + ScrollTrigger sync in `src/pages/BriefingEngine.tsx`, five-section timeline orchestrated via `BriefingTimeline`, adaptive motion tables in `sections/motion-config.ts`, and reduced-motion SVG fallbacks.
- Noted debug artefacts for cleanup: hero `console.log` noise and manual `window.location.href` CTAs in `src/pages/BriefingEngine.tsx:50-124,191-199`, plus direct DOM querying in `AudienceBenefits` toggle logic.
- Flagged unused state/computed values in `BriefingTimeline` (`progressOffset`, `activeStageMeta`, `nextStageMeta`, `cn` import) that can be pruned once progress rail returns.
- Next focus after analysis: finish T6 validation sweep (Chrome DevTools MCP viewport passes, performance trace, analytics payload check) before further refactors.

### 2025-10-15 18:05 PDT – Storyboard Restoration (Codex Session 2)
- Reinstated the original storyboard card gallery and GSAP animation in Stage 04 after stakeholder clarification (Frame 2 stays textual, Frame 4 returns to multi-card layout).
- Restored `storyboardFrames` data and gallery ScrollTrigger logic; reduced-motion fallback returns to the original descriptive list.
- `npm run build` ✅ (vendor bundle 749 kb / 900 kb).

— Codex Session 2


### 2025-10-15 18:20 PDT – Scene Deck Removal (Codex Session 2)
- Removed the animated scene deck grid from Stage 02 so only the neural synopses and Story Engine core remain (per updated direction).
- Cleared SceneCards import, refs, and GSAP steps; reduced-motion summary now relies on the synopsis fallback alone.
- `npm run build` ✅ (vendor bundle 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 20:10 PDT – Stage 05 Audit Kickoff (Codex Session 2)
- Re-read `docs/gsap-debug-report-2025-10-15.md` and the Stage 05 entries in `motion-config.ts` to confirm current timing: background 0.6–0.94 s, copy overlap −0.25, mockup overlap −0.2 across tiers; scroll offsets reuse the default 0.75→0.45 window.
- Walked through `StudiosHandoffSection.tsx` structure: animated trio = `[data-stage-background]` radial wash, `data-handoff-copy` grid (StepLabel, body, CTA), and `mockupRef` image block; reduced-motion path swaps in `ReducedMotionIllustration` card.
- Verified hidden states now preset via `gsap.set(..., { autoAlpha: 0 })` with `lazy: false`, so backgrounds/copy/mockup start invisible; `data-motion-hide/show` handles motion vs static assets correctly.
- Noted ScrollTrigger configuration uses `once: true`, `refreshPriority: 1`, and separate tracking trigger for stage analytics; matchMedia pathways cover base (≤1023 px) and desktop tiers via `resolveMotionTier`.
- Next: map any UX/motion gaps (e.g., stagger opportunities, CTA emphasis, mockup scale on laptop tier) before recommending adjustments and sync with Sessions 1 & 3.

— Codex Session 2

### 2025-10-15 20:25 PDT – Frame 05 Mockup Ideation (Codex Session 2)
- Pulled asset list from `Briefing Engine Assets/Storyboard Mockup` (Frame1–Frame6 + current `SB-Mockup.webp`) to prep remix concepts using Stage 04 imagery.
- Brainstorm brief: replace single flat PDF render with multi-page storyboard booklet that showcases 3–4 frames per spread with succinct scene notes, production specs, and Cre8tive Studios branding to signal polish.
- Early directions: (1) cinematic dossier spread with hero frame callout, (2) tri-fold deck preview showing contact sheet + metadata sidebar, (3) tablet-in-hand mockup with sticky-note annotations. Need to evaluate alignment with timeline aesthetic and animation constraints before committing.

— Codex Session 2

### 2025-10-15 20:45 PDT – Mockup Style Research (Codex Session 2)
- **Archon MCP:** GSAP Showcase (Sept 2025 highlights such as Blinkpath, Won J. You) leans heavily on cinematic case-study spreads with layered hero imagery and accent glows—ideal precedent for a premium dossier treatment on Stage 05. *(archon search: “luxury case study deck 2025”)* 
- **Context7:** TailwindCSS box-shadow utilities support colored/opacity-controlled shadows (`shadow-indigo-500/50`, `inset-shadow-sm`), giving us native tools to render holographic edges and inset highlights around the dossier frame. *(context7 `/tailwindlabs/tailwindcss.com`, topic “box shadow”)* 
- **Web scan:** 2025 pitch-deck trend posts stress minimalist layouts with ample negative space and high-contrast typography (Visible.vc) while luxury storytelling decks emphasise ultra-polished spreads and metadata ribbons to reinforce deliverable credibility (FasterCapital; Doksly). Captured palette + layout cues for storyboards.
- Decision: pursue the **Cinematic Dossier Spread**—best aligns with showcase inspiration, matches current premium deck trends, and lets us spotlight Stage 04 frames inside a refined PDF spread with hero callouts and delivery metadata.

### 2025-10-15 21:00 PDT – Stage 05 Execution Strategy (Codex Session 2)
- Constraint: no time for external design tooling (Figma/Photoshop). Need a code-first solution that still feels premium.
- Proposal: build an inline “dual-page dossier” component directly in React/Tailwind:
  - Use existing Frame1–Frame4 assets arranged via CSS grid within a frosted-glass container that fakes a spread (left/right panels with subtle rotation + shadow) and overlay metadata ribbons using Tailwind colored shadows.
  - Add micro typography (serif scene titles, condensed specs) rendered as text so copy stays editable; apply `backdrop-blur`, `shadow-[color/opacity]`, and border gradients for the holographic accents.
  - Animate with current ScrollTrigger timeline (fade/translate); optional secondary tween for metadata ribbon can be layered later without extra assets.

### 2025-10-15 22:05 PDT – Briefing Engine Recovery (Codex Session 2)
- Reconstructed `src/pages/BriefingEngine.tsx` to drop the legacy `BriefToStoryboardAnimation`, wire in the segmented `BriefingTimeline`, add the new briefing intro, and surface the FAQ block so the page matches current architecture.
- Updated helmet meta copy per copy-refresh brief and removed hero console logs flagged during the prior audit.
- `npm run build` ✅ (vendor 749 kb / 900 kb) confirming the restored page structure compiles cleanly.

### 2025-10-15 22:30 PDT – Timeline Padding Pass (Codex Session 2)
- Added `px-6 sm:px-10 lg:px-16 xl:px-20` horizontal padding to all timeline section wrappers so the content no longer hugs viewport edges (`HeroBriefSection`, `NeuralSynthesisSection`, `StyleSelectionSection`, `StoryboardAssemblySection`, `StudiosHandoffSection`).
- Build verified (`npm run build`) to ensure the updates compile cleanly; next validation run should capture the improved gutters in viewport sweeps.

### 2025-10-15 22:45 PDT – Visual Styles Section Removal (Codex Session 2)
- Removed the `VisualStylesGallery` block from `src/pages/BriefingEngine.tsx` so the page flows directly from the timeline into Process Flow without the “Choose Your Creative Style” grid.
- Build passes (`npm run build`); confirm during next QA sweep that the section no longer appears.

### 2025-10-15 23:05 PDT – Hero + Padding Refresh (Codex Session 2)
- Boosted horizontal padding across the timeline section wrappers (`HeroBriefSection`, `NeuralSynthesisSection`, `StyleSelectionSection`, `StoryboardAssemblySection`, `StudiosHandoffSection`) and `AudienceBenefits` to better match widescreen screenshots.
- Updated the hero copy/layout to the “From Brief to Native Video” variant with left-aligned content, refreshed CTA pair (“Start Your Brief” + “Book a Studio Call”), and gradient heading per stakeholder screenshot (`src/pages/BriefingEngine.tsx`).
- `npm run build` ✅ after adjustments.

### 2025-10-15 23:40 PDT – Stage 01 Expansion & Hero Visual (Codex Session 2)
- Reworked Stage 01 layout with expanded grid spacing, richer tiles, an “Includes” callout, and an elevated storyboard card so the vertical real estate feels intentional (`HeroBriefSection.tsx`).
- Added the `HeroOrbitVisual` animation beside the hero copy—a gradient dossier preview with orbiting cards powered by Framer Motion—to deliver a premium companion visual on large screens (`HeroOrbitVisual.tsx`, `BriefingEngine.tsx`).
- `npm run build` ✅ post-update.

### 2025-10-15 23:48 PDT – Hero Headline Reflow (Codex Session 2)
- Adjusted the hero headline container so “From Brief to Native Video” clamps faster on desktop, keeping the copy within three lines while staying centered alongside the new orbit visual (`src/pages/BriefingEngine.tsx`).
- Ran Prettier on touched files for consistency and re-verified build (`npm run build` ✅).
- Outcome: retains premium feel, entirely code/config-driven, easy to iterate alongside Stage 04 visuals.

— Codex Session 2

### 2025-10-15 21:40 PDT – Stage 05 Cinematic Dossier Implemented (Codex Session 2)
- Replaced the flat PDF mockup with a code-driven dual-page dossier: left panel stacks Scenes 01–03 with imagery, synopses, and spec chips; right panel spotlights Scene 04 with hero overlay, stats block, and Studio ribbon.
- Leveraged Tailwind colored shadows + backdrop blur for holographic edges, kept metadata live text, and introduced contextual labels (“Live Sync”, “Storyboard PDF · Ready for Handoff”).
- Maintained GSAP setup (container still referenced via `mockupRef`), so hidden states + once-only timeline continue to function without selector changes.
- Updated reduced-motion copy to mirror the new deliverable emphasis.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 22:05 PDT – Stage 05 Polish Pass (Codex Session 2)
- Tuned scene descriptions to match actual frames (arrival gate, concierge greeting, sunset lounge) and refined the hero summary to emphasize turn-key handoff.
- Elevated dossier styling: richer glass treatment for the scene stack, higher-contrast chips, larger spacing, and a gradient ribbon so the spread reads like a premium agency deck.
- Softened the vertical “Final storyboard export” marker, warmed Live Sync/ribbon accents, and balanced contrast across both panels.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 22:30 PDT – Stage 05 Wide Layout Pass (Codex Session 2)
- Expanded `.timeline-section-container` width clamps so the dossier stretches further on desktop/ultra-wide tiers; reduced vertical gaps to tighten the scroll.
- Converted the scene stack into a responsive grid (two-up layout on large screens with last card spanning) and adjusted column weights (52/48) to reclaim horizontal real estate.
- Rebuilt `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 23:00 PDT – Stage 05 Storyboard-Focused Layout (Codex Session 2)
- Reoriented scene cards so imagery dominates: 16:9 canvases with overlay captions, metadata chips tucked into a single footer line, and hover elevation for premium feel.
- Hero column now aligns via 16:9 canvas + horizontal stats grid to trim vertical height while keeping the handoff ribbon intact.
- Build ✅ (`npm run build`, vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 23:30 PDT – Stage 05 Reversion (Codex Session 2)
- Rolled back to the cinematic dossier layout (three stacked scenes + hero column) after width experiments caused vertical sprawl.
- Restored original container widths and GSAP config; rebuilt the section with the corrected scene copy from earlier pass.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-15 23:55 PDT – Stage 05 Refined Dossier Restore (Codex Session 2)
- Brought back the premium dossier layout (three scene cards + hero column) with updated copy so we can compare directly against the original mockup.
- Confirmed container widths match the responsive plan and rebuilt (`npm run build` ✅, vendor 749 kb / 900 kb).

— Codex Session 2

### 2025-10-16 00:20 PDT – Stage 05 Dossier Spread Pass (Codex Session 2)
- Shifted the dossier upward toward the STEP heading and rebuilt the layout as a connected two-page spread (two hero scenes left, hero storyboard + supporting scene right) with a central spine.
- Imagery now dominates each page (16:9 canvases), metadata chips sit beneath, and stats/CTA remain on the right without vertical imbalance.
- `npm run build` ✅ (vendor 749 kb / 900 kb).

— Codex Session 2

— Codex Session 2

### 2025-10-15 21:30 PDT – ParticleCore Research Deep Dive (Codex Session 2)
- **Architecture recap:** `ParticleCore.tsx` keeps a single GSAP ticker loop with pooled particles, adaptive quality refs, and a ResizeObserver-fed `measure()` that syncs canvas backing resolution to CSS size. Active state/intensity rely on refs to avoid tearing down animation when props change.
- **Pain points:** Current `measure()` writes `canvas.width/height` inside ResizeObserver, triggering recursive `needsResize` flags; during initial mount ScrollTrigger and Lenis kicks cause ~811 ms layout thrash (matches perf report). Also `drawParticles()` performs costly gradient/shadow work even when blur/shadow disabled because properties persist between iterations.
- **Internal docs:** Story 1.14 + runtime validation tie forced reflow to `getBoundingClientRect()` reads in `measure()` and call stacks showing `_getComputedProperty2`; recommended batching reads or caching via ResizeObserver before render.
- **External research:** Chrome Performance Insights (2025-10-08) reiterates batching layout reads and leveraging ResizeObserver/device-pixel boxes for canvas sizing; MDN highlights `devicePixelContentBoxSize` for HiDPI-safe measurements; Lenis README confirms our GSAP ticker integration pattern is current best practice and stresses disabling lag smoothing to avoid scroll desync.
- **Remediation ideas:** Cache ResizeObserver `devicePixelContentBoxSize` into ref and only resize when dimensions actually change; decouple `measure()` from ticker by updating cached dims in observer callback; guard `drawParticles()` to skip blur/shadow property churn when disabled; consider dynamic particle spawn cap tied to measured area to keep density consistent.

### 2025-10-15 22:05 PDT – ParticleCore Density Pass (Codex Session 2)
- Raised adaptive counts to 220 (high tier) / 120 (medium tier) via `adaptive-config.ts`; bumped baseline intensity curve in `NeuralSynthesisSection` to 0.82 and tightened spawn interval (`ParticleCore.tsx`), so hero core feels fuller immediately.
- `npm run build` ✅ (vendor 749 kb / 900 kb). No perf trace yet—schedule quick scroll smoke plus Chrome MCP capture to ensure the extra particles stay within frame budget.

### 2025-10-15 22:20 PDT – ParticleCore Density Pass v2 (Codex Session 2)
- Further boosted tiers (high = 320, medium = 180) and lifted baseline intensity to 0.9; spawn cadence now bottoms at 4 frames so the core stays saturated without waiting through long gaps.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Schedule viewport sweep + perf trace to document the heavier particle load.

### 2025-10-15 22:45 PDT – ParticleCore Spawn Overhaul (Codex Session 2)
- Added prime burst to pre-populate ~35% of the pool, widened spawn offsets, and introduced force flag so initialization ignores active state.
- Spawn interval now scales with intensity (down to 1 frame) and spawns batches tied to configured particle counts; cap at 32 per tick to stay sane even if config jumps to 10k.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Need to run scroll smoke + perf trace with the new emitter behaviour before shipping.

### 2025-10-15 23:05 PDT – ParticleCore Revert (Codex Session 2)
- Rolled back the mega-burst experiment: lifetimes returned to baseline, spawn offsets trimmed, prime fill capped at 40%, and batch sizes back to 32 max so performance recovers while still benefiting from earlier spawn overhaul.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Ready to re-test visuals/perf at the earlier 320/180 tier settings.

### 2025-10-15 23:55 PDT – ParticleCore Incremental Boost (Codex Session 2)
- Reapplied the lighter custom emitter: GSAP ticker loop, 60–120 frame lifetimes, size range ~2.2–5.4px, 45% prime fill, and spawn batches up to 48 with brighter gradients; `adaptive-config` high/medium tiers restored to 10 000 / 7 500 counts per earlier request.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Ready for perf/visual sanity check in browser.

### 2025-10-15 23:42 PDT – ParticleCore Glow Shell (Codex Session 2)
- Added layered CSS aura around the canvas (two radial gradients + holographic ring) with new `animate-glow-pulse` utilities, so the core reads larger without touching particle counts.
- `npm run build` ✅ (vendor 749 kb / 900 kb). Next: capture viewport screenshot to confirm visual impact + perf unchanged.

# AI Product Charter — Hero Section Reinvention Research (2025-10-15 Codex Session 2)
- **Problem:** Current homepage hero lacks the distinctive premium SaaS storytelling, layered proof, and cinematic polish needed to convert enterprise decision makers exploring cre8tive.ai.
- **Target User:** B2B marketing leaders, CMOs, and innovation heads evaluating high-end AI platforms who expect world-class craft comparable to leading premium SaaS brands.
- **Success Signal:** A research-backed hero strategy and pattern library that, when implemented, delivers memorable messaging, elevated visuals, and benchmarks favorably against top-tier SaaS experiences in stakeholder reviews.

### 2025-10-15 10:45 PDT – Archon MCP Sweep (Codex Session 2)
- Ran Archon queries (`"premium SaaS hero design"`, `"hero section best practices SaaS"`, `"landing page hero messaging framework"`); current RAG corpus surfaced generic dev resource listings with no actionable hero insights. Logging gap and proceeding with Context7 + web research to source fresh premium SaaS hero patterns.

### 2025-10-15 10:52 PDT – Context7 ShaderGradient Review (Codex Session 2)
- Pulled `/ruucm/shadergradient` docs for modern gradient canvases; snippets focus on React integration but confirm availability of lightweight stateless component and URL-configurable presets that can deliver animated gradient backdrops without heavy custom GLSL. Noted as candidate for hero background wow-effect when balancing reliability/perf.

### 2025-10-15 11:20 PDT – Premium SaaS Hero Research Synthesis (Codex Session 2)
- Copy formula emerging from 2024–2025 teardown articles (SparkReach, BeamLocal, Instant analysis of 1,000 Shopify homepages): lead with a 5–9 word outcome headline, follow with one-sentence proof/qualifier, immediately pair a primary CTA and optional secondary link, and surface trust (logos, metrics) within the fold.
- Layout norms: keep CTA stack top-right/center on desktop with headline left-aligned; hero height ~75% viewport to preserve scroll cue; support text limited to 1–2 lines to maintain scannability; embed social proof chips or mini-metric bar under CTA.
- Messaging emphasis: answer "what it is" + "who it's for" + "why it wins" above the fold; frameworks like PAS/AIDCA recommended to sharpen urgency without hype.
- Visual direction: top-performing SaaS brands either spotlight polished product UI mockups or run premium lifestyle photography with consistent color grading; majority pair visuals with gentle parallax/micro-motion (hover shifts, subtle scroll parallax) rather than heavy 3D scenes.
- Background treatments: 2025 trend coverage highlights high-contrast gradients, layered blurs/glows, softly animated geometric fields, or shader-driven plasma backgrounds—paired with glassmorphism cards or frosted panels to keep copy legible while delivering "wow" without instability.
- Validation signals: 45% of high-performing heroes lean on a single dominant CTA, while 73% highlight product imagery; social proof (logos/case metrics) increases conversion when clustered near CTA.

# Next Steps — Hero Redesign
- Draft wireframe + asset list aligned with 12-col layout (S1).
- Prototype animated background layers (ShaderGradient or custom CSS/Canvas) with prefers-reduced-motion fallback (S2).
- Build copy/CTA cluster component with trust strip placement (S3).
- Assemble visual narrative column with product montage + parallax interactions (S4).
- Refresh nav + integrate agent widget treatment (S5).
- Schedule validation suite (MCP sweeps, perf trace, docs updates) post-implementation (S6).

### 2025-10-15 12:40 PDT – Hero Implementation Pass (Codex Session 2)
- Replaced legacy video-driven hero with unified responsive component (no more Desktop/Mobile split) featuring animated gradient surface, halo/noise layers, and prefers-reduced-motion fallbacks.
- Built left-column copy cluster: outcome headline, proof sentence, CTA pair, and trust chip grid powered by lucide icons; CTAs link to `/briefing-engine` and `/contact`.
- Crafted hero showcase column: campaign workspace card, staged workflow tiles, delivery metrics, plus floating producer/timeline cards with controlled motion.
- Cleaned dead components (`DesktopHero`, `MobileHero`, `VideoBackground`, `HeroContentBold`), added utility classes for background/motion, and re-ran `npm run build` (✅).
- Outstanding: nav glass upgrade + agent widget alignment (S5) and validation suite/documentation updates (S6).

### 2025-10-15 21:55 PDT – Hero STEP + Headline Alignment (Codex Session 2)
- Reworked the Stage 01 header so the STEP spine (large variant) sits directly beside “Lock Your Brief In Minutes”; removed the “Briefing Engine · AI Intake” label and switched the headline to uppercase, high-tracking type to mirror the Step aesthetic.
- Subheadline now indents to the STEP column width and shares the same ref for animation sequencing; StepLabel handles empty labels without drawing the accent bar.

### 2025-10-15 22:05 PDT – Hero Header Refinement (Codex Session 2)
- Softened the hero headline (font-semibold, tighter tracking) and tightened vertical gaps so the header occupies less viewport height.
- Shifted the entire lockup left (StepLabel `md:-ml-12`, container padding reduced) so the STEP spine sits closer to the viewport edge while the line remains legible.

### 2025-10-15 22:12 PDT – Hero Header Revert (Codex Session 2)
- Restored the hero heading to its original timeline style (bold tracking-tight type) while leaving the StepLabel in place with no secondary copy; subheadline alignment returns to the earlier 240px offset.

### 2025-10-15 22:25 PDT – Hero Step Reposition (Codex Session 2)
- Centered the STEP spine within the hero header (`align="center"`, `forceAccent`) so the glowing bar reappears even without a label, while the headline/subheadline shift left.
- Header now uses a split layout (copy on the left, STEP column centered via translate) so the Step badge feels prominent without crowding the headline.

### 2025-10-15 22:40 PDT – Hero Headline Typeface Sync (Codex Session 2)
- Hero headline now uses the same `text-5xl md:text-6xl font-black tracking-tight` style as “The Briefing Runway,” while the STEP badge retains the original typography (scaled up + glow only).
### 2025-10-15 23:58 PDT – Business DNA Revival (Codex Session 2)
- Ported the legacy Business DNA data set into Stage 01: campaign name, brand, audience, launch window, plus new platform cards for YouTube/TikTok so the section reflects the original inputs.
- Refreshed the accompanying copy blocks and dossier card to highlight how intake data flows into Studio-ready deliverables.
### 2025-10-16 00:05 PDT – Stage 01 Layout Polish (Codex Session 2)
- Removed the legacy bullet list, tightened the right-hand dossier card, and retitled it “Platforms, Formats, Durations” so the frame matches the annotated mock.
- Realigned platform cards and production metadata to sit higher in the container and align vertically with the form entries.
- `npm run build` ✅

### 2025-10-20 07:45 PDT – USP Copy Archive (Codex Session 2)
- Skimmed 7 Claude sessions focused solely on copy/differentiator brainstorming (`f398d40c`, `3e069655`, `0a4a0fa0`, `681b84c7`, `f41ee74e`, `2de6d693`, `84dff2c5`) and logged them in `docs/copy/cre8tive-usp-copy-compendium.md`.
- Summarized canonical USPs (speed + control, hybrid craft, multi-platform, EI pipeline), page-specific copy systems, guardrails, and reference docs so future messaging work stays aligned.
- Outstanding: validate metrics before public use per evidence audit; capture hero screenshots after typography tweaks.

### 2025-10-20 08:05 PDT – Source Catalog (Codex Session 2)
- Added "Quantitative Evidence Source Catalog" to the compendium with approved industry publications (Lemonlight, Tavus, HeyGen), internal analytics pointers, and a lightweight approval workflow so new stats stay defensible.
- Next: archive each cited report under `docs/insights/external/<slug>/` with summary + license info, and wire analytics exports for time-reduction/first-draft stats.
