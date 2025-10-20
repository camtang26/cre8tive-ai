# 2025-10-09 – Briefing Process Flow Update

## Summary
- Trimmed the connected-pipeline module to a concise badge beneath the stack controls, keeping the ladder copy while removing redundant body text.
- Reverted the stacked workflow cards to their prior sizing and depth so the section matches the earlier approved layout, per user request.
- Shifted and enlarged the workflow-intelligence header so the intro message lands lower in the viewport with more visual weight.
- Synced `_MEMO` and `PLAN` to reflect the rollback and current pause on further layout experiments.

## Verification
- `npm run build`

## Risks
- None beyond the outstanding responsive sweep already noted; layout matches the previously accepted version.

## Follow-ups
- Await further direction before attempting new sizing/layout adjustments.
# 2025-10-09 – Story 3.1 Particle System Refresh

## Summary
- Restored production particle counts (5K/2K/1K) with optional `VITE_PARTICLE_COUNT_SCALE` to allow local downscaling without violating ACs.
- Implemented a staged entrance burst using render buffers, power4 easing, and per-particle delays; fallbacks keep prefers-reduced-motion on static gradient.
- Added spatial-hash neighbour lookup (100 px cells) and progressive particle ramp so the hero reaches full density within ~3 s instead of blocking the main thread.
- Fixed `MouseInteraction` listener teardown and added vitest coverage for device helpers, entrance easing maths, and listener lifecycle.
- Introduced Vitest + Playwright scaffolding; Playwright still fails in headless Chromium due to software WebGL fallback, but logs now show ~1 s initialization and GPU stall warnings for further investigation.

## Verification
- `npm run lint` *(fails: repo missing unicorn plugin definitions, logged for follow-up)*
- `npm run test`
- `npm run build`
- `npm run test:e2e` *(fails: hero selector wait still times out under software WebGL; see `test-results/briefing-engine-AI-Briefin-5b016-izes-without-console-errors-chromium/`)*

## Risks
- ESLint still fails globally due to missing `unicorn/prefer-module` and `unicorn/prefer-node-protocol` rules in legacy installer template—needs repo-wide config fix.
- Manual browser/perf/accessibility matrices remain outstanding; fps performance with 5K particles unverified.
- Software-rendered environments (Playwright, low-power GPUs) continue to emit WebGL fallback warnings and may need bespoke fallbacks.

## Follow-ups
- Coordinate lint configuration update (install/disable offending unicorn rules).
- Schedule manual performance + accessibility validation to close remaining Story 3.1 tasks.
- Investigate WebGL fallback handling and resolve the lingering `createRoot` reuse warning surfaced in Playwright runs.

# 2025-10-15 – Timeline Smoothness Remediation (Codex Session 2)

## Summary
- Synced Lenis with GSAP ScrollTrigger by bridging `useLenis` to the gsap ticker, wiring `ScrollTrigger.update`, and restoring lag smoothing so smooth scroll no longer fights animation timing.
- Removed the bespoke resize debounce from `useScrollTriggerAnimation` and pushed responsive context via `gsap.matchMedia`, relying on GSAP’s own refresh lifecycle.
- Normalized all five timeline sections: added `refreshPriority`, `invalidateOnRefresh`, `force3D: true`, and requestAnimationFrame-backed will-change guards, plus trimmed motion overlaps in `motion-config.ts` to ≤0.4 s for cleaner sequencing.

## Verification
- `npm run build`

## Risks
- Full validation sweep still pending (Chrome DevTools MCP screenshots, performance trace, cross-browser smoke). Animation regressions could surface without that evidence.

## Follow-ups
- Execute T12-S6 checklist: rerun viewport sweeps at 1707/1920/2560 widths, capture performance trace, and document findings for Sessions 1/3.

# 2025-10-15 – ScrollTrigger Re-trigger Fix (Codex Session 2)

## Summary
- Stopped GSAP section hooks from rebuilding on every stage enter/leave by storing `onStageEnter`/`onStageLeave` via refs inside each timeline section; `runAnimation` now memoizes on `stage.id` so ScrollTriggers persist after the first pass.
- Memoized analytics helpers in `useAnalytics` to keep `trackEvent`/`trackPageView` stable, avoiding needless prop churn into the sections.
- Verified smooth scroll build with `npm run build` (vendor 749 kb / 900 kb budget).

## Verification
- `npm run build`

## Risks
- Still need the outstanding validation sweep (Chrome DevTools MCP viewport captures, performance trace, analytics payload verification).

## Follow-ups
- Complete PLAN T14 A5 validation steps once QA tooling is available; capture evidence and update this report accordingly.

# 2025-10-15 – Timeline Step Label Refresh (Codex Session 2)

## Summary
- Added a reusable `StepLabel` component so each briefing timeline section shares the same stacked STEP typography with scaled lettering, keeping hero instructions aligned with the stage identifier.
- Enhanced Stage 03 visual style cards with a deeper gradient wash, backdrop blur, and brighter “Visual Style” text plus stronger drop shadow so overlays remain legible on bright renders.
- `npm run build`

# 2025-10-15 – Homepage Hero Reinvention (Codex Session 2)

## Summary
- Replaced the legacy video-first hero with a unified responsive section featuring an animated gradient backdrop, outcome-driven copy cluster, trust chip grid, and cinematic campaign showcase column.
- Introduced floating producer/format cards and prefers-reduced-motion safe Framer Motion choreography to deliver the “rememberable” premium SaaS moment without sacrificing performance.
- Removed deprecated hero files (`DesktopHero`, `MobileHero`, `HeroContentBold`, `VideoBackground`) and added utility classes for gradient/halo/noise layers and scroll cues.

## Verification
- `npm run build`

## Risks
- Navigation glass treatment and EleventLabs widget integration still outstanding (PLAN S5); needs follow-up before mark-as-done.

## Follow-ups
- Complete validation suite (Chrome DevTools MCP sweeps, Lighthouse/perf trace) and update SPEC/ARCHITECTURE once hero polish is approved.

## Verification
- `npm run build`

## Risks
- None observed; pending MCP viewport sweep to sign off the visual changes.

## Follow-ups
- Capture validation screenshots and update PLAN T14 when QA resumes.
# 2025-10-15 – Briefing Engine Recovery (Codex Session 2)

## Summary
- Restored `src/pages/BriefingEngine.tsx` to the segmented timeline stack: added the new briefing intro, rendered `BriefingTimeline`, and surfaced the FAQ block so the page matches current section architecture.
- Updated Helmet metadata to the latest copy, removed debug logging, and kept existing hero styling intact.

## Verification
- `npm run build`

## Risks
- Need MCP viewport sweeps and analytics spot checks to confirm the restored layout behaves identically across tiers.

## Follow-ups
- Coordinate with validation workflow (PLAN T12/T14) to capture screenshots and confirm ScrollTrigger events fire post-restoration.
# 2025-10-15 – Stage 01 Layout & Hero Visual (Codex Session 2)

## Summary
- Expanded the Stage 01 (Enter Your Brief) layout with larger gutters, richer tiles, and a premium storyboard card so the vertical space feels balanced and polished (`HeroBriefSection.tsx`).
- Introduced the `HeroOrbitVisual` component to occupy the hero’s right column with a floating dossier animation that complements the updated copy (`HeroOrbitVisual.tsx`, `src/pages/BriefingEngine.tsx`).

## Verification
- `npm run build`

## Risks
- Need to capture new viewport screenshots to ensure the expanded spacing and hero animation render as expected across tiers, and confirm prefers-reduced-motion fallback is acceptable.

## Follow-ups
- Run Chrome DevTools MCP sweep for hero + Stage 01, adjust animation intensity if stakeholders prefer subtler motion.

# 2025-10-20 – USP Copy Compendium (Codex Session 2)

## Summary
- Audited Claude transcripts dedicated to messaging/USP development, isolating seven sessions that focused exclusively on copy differentiation.
- Logged those sessions with timestamps and outputs in `docs/copy/cre8tive-usp-copy-compendium.md`, capturing core value pillars, page-specific copy systems, CTA/proof patterns, and guardrails.
- Documented dependencies on validated research (`phase2-strategies`, `COPY_IMPLEMENTATION_GUIDE.md`, evidence audits) to streamline future copy iterations.

## Verification
- Manual review of transcript set; no code changes to build/test.

## Risks
- Several cited metrics still need analytics confirmation per evidence-validation workflow; using them externally before validation could undermine credibility.

## Follow-ups
- Coordinate with analytics/compliance to sign off on stats and security badge claims before publishing updated copy.
- Capture new hero screenshots post-typography adjustments once design polish lands.

# 2025-10-20 – Metric Source Catalog (Codex Session 2)

## Summary
- Extended `docs/copy/cre8tive-usp-copy-compendium.md` with a quantitative evidence catalog outlining approved industry reports, internal datasets, and the validation workflow for future claims.
- Documented storage expectations (archive external PDFs under `docs/insights/external/`, link analytics dashboards) so copywriters can trace every figure to a verifiable source.

## Verification
- Documentation-only change; no build/test impact.

## Risks
- Citation list includes placeholders that still need ingestion (e.g., tavus/lemonlight PDFs). Ensure licensing and access before quoting.

## Follow-ups
- Populate each source entry with actual files and summaries; align with analytics team to schedule quarterly metric audits.
