# 2025-11-03 – Studios Workflow Flex Section (Codex Session B)

## Summary
- Created `StudiosWorkflowSection` featuring the “Start Anywhere. Finish Strong.” copy cluster, embedded BriefingEngine YouTube workflow video, and three workflow steps that reuse caption phrasing exactly as provided.
- Applied premium glassmorphism frame consistent with locked foundation (gradient border, blur, noise) while wiring `data-motion="workflow-*"` hooks for GSAP.
- Integrated the section into `src/pages/Studios.tsx` after the production stack module; copy audit confirms no additional text outside the deck.

## Verification
- `npm run build`

## Risks
- Needs DevTools MCP viewport captures (1707×898, 1920×1080) to validate spacing around the video embed and timeline rail.
- YouTube embed relies on external content; confirm final hosting/branding before launch.

## Follow-ups
- Capture viewport results, adjust spacing if needed, and log GSAP animation intentions in `_MEMO`/`REPORT` once motion brief is ready.
- Confirm whether the workflow video requires a modal transcript or additional accessibility hooks.

# 2025-11-03 – Studios Portfolio Section (Codex Session B)

## Summary
- Implemented `StudiosPortfolioSection` (`src/components/studios/StudiosPortfolioSection.tsx`) delivering the “Judge Yourself” six-card gallery with gradient media frames, hover metadata trays, and GSAP-ready hooks (`data-motion="portfolio*"`).
- Integrated section into `src/pages/Studios.tsx` behind `FadeIn`, keeping legacy modules in place until the broader rebuild replaces them.
- Reserved cinematic hover overlays (`ArrowUpRight`, `Play` badges) and focus-visible treatments so motion team can add scale/tilt timelines without reworking markup.

## Verification
- `npm run build`

## Risks
- Poster assets are still gradient placeholders; real footage/thumbs needed before launch to avoid repetition.
- Chrome DevTools MCP viewport captures (1707×898, 1920×1080) still pending; spacing tweaks may be required once captured.

## Follow-ups
- Capture viewport screenshots via MCP tooling, note spacing observations in `_MEMO`, and feed adjustments into PLAN before moving to Section 4.
- Align with Session A on shared ambient particle layer so hero → challenge → portfolio transition reads cohesive.

# 2025-11-03 – Hero Video Prototypes (Codex Session 2)

## Summary
- Implemented premium hero experiences for Studios and Conversational AI using dark-gradient video backgrounds, multi-layer overlays, and GSAP entrance timelines.
- Added reusable components `StudiosHeroPrototype` and `ConversationalHeroPrototype` (`src/components/hero-prototypes/*`) featuring autoplay-gated video (IntersectionObserver + reduced-motion fallback), CTA pairs, metrics rows, and interactive micro-interactions (tilt and reactive spotlight).
- Created `/hero-prototype-demo` (`src/pages/HeroPrototypeDemo.tsx`) for comparison and documented execution in `docs/prototypes/hero-video-prototypes-2025-11-03.md`.
- `npm run build` passes with vendor bundle at 749 kb / 900 kb.

## Verification
- `npm run build`

## Risks
- Currently using placeholder stock footage; final cinematic loops will be required for production.
- Pointer-based interactions rely on modern pointer events—verify touch devices degrade gracefully.

## Follow-ups
- Swap in final brand-approved video loops (≤10 s, ≤10 MB) and optimize encoding (H.265/VP9).
- Hook hero CTAs into analytics once event schema is confirmed.
- Capture MCP viewport screenshots (1707×898 & 1920×1080) for stakeholder approval.

# 2025-11-03 – Studios Hero Prototypes (Codex)

## Summary
- Implemented five radically different Studios hero explorations, all using the Film Noir gradient and premium glass system with the existing Vimeo video (1051821551):
  1) Cinematic Spotlight — spotlight beam + vignette, offset glass card, metric chips.
  2) Motion Canvas — animated gradient mesh as kinetic layer, parallax, magnetic CTA.
  3) Studio Reel — monitor frame with scanlines and faux editing UI panels.
  4) Liquid Gold Flow — flowing gold overlays via layered gradients, asymmetric composition.
  5) Immersive Portal — depth-stacked glass cards that reveal forward on scroll.
- Added shared tokens in `StudioHeroShared.tsx` and a demo page at `/studios-hero-prototypes-codex`.

## Verification
- `npm run build` ✅ (vendor ~749kb/900kb).

## Risks
- Motion layers are intentionally subtle; confirm balance on calibrated displays.
- Mobile behavior is basic for the demo; production variants may need tighter typography scale and video poster fallbacks.

## Follow-ups
- Wire analytics for primary/secondary CTAs.
- Capture MCP viewport screenshots at 1707×898 and 1920×1080 for each variant.
- Swap in final brand video loops if different from 1051821551.

# 2025-11-03 – Documentation Canon Realignment (Codex Session 2)

## Summary
- Reviewed the November 3, 2025 documentation suite (`docs/bmm-index.md`, Current Architecture, Development Guide, Component Catalog, Documentation Freshness Report, Epic tech specs) to establish the new canonical understanding of the project.
- Updated `.codex/_MEMO.md` with refreshed focus anchors, decisions, opportunities backlog, research notes, and historical log entries reflecting the new documentation baseline.
- Reorganized `.codex/PLAN.md` so the documentation realignment plan leads, and all prior feature/copy plans are clearly archived as paused until reactivation.

## Verification
- Manual documentation audit; no code executed. (References captured in `_MEMO` research notes.)

## Risks
- UI has not been revalidated since pausing animation work; a quick MCP/Lighthouse sweep remains outstanding after documentation updates.
- Legacy plan sections may still contain actionable items—need explicit stakeholder confirmation before reactivating to avoid misalignment with the new canon.

## Follow-ups
- Update `TASK.md` to reflect which backlog items remain active vs. paused once documentation sync is signed off.
- Run a light validation loop (Chrome DevTools MCP + Lighthouse) to ensure current production experience matches documented expectations.
- Decide which archived plans (responsive optimization, copy overhaul) to revive next and log the decision in PLAN/REPORT when ready.

# 2025-11-03 – Codex Video Placeholder Prototypes (Codex Session 2)

## Summary
- Captured 2025 guidance on glassmorphism, accessibility, and React + GSAP integration (Archon NN/g article, Context7 `@gsap/react` docs, Nov 2025 web trends) to ground a Codex-built prototype set matching Epic 2/3 needs.
- Implemented Codex variants for Minimal, Premium Glass, and Bold Cinematic placeholders (`src/components/video-placeholders/codex/*`) with `useGSAP`-scoped ScrollTrigger, persistent play affordances, solid fallbacks for browsers without `backdrop-filter`, reduced-motion awareness, and pointer-driven cinematic spotlight.
- Updated `/src/pages/VideoPlaceholderDemo.tsx` to show Claude Code vs Codex implementations side-by-side for each option, highlighting stylistic/technical differences while reusing shared props and hooks.
- Verified build health via `npm run build` (vendor bundle 749 kb / 900 kb cap) to confirm new components integrate cleanly with existing stack.

## Verification
- `npm run build`

## Risks
- Demo comparison page still relies on `alert` for interactions; ensure this is swapped for non-blocking telemetry before productionizing.
- Pointer spotlight uses modern pointer events; older assistive technology fallback relies on consistent keyboard focus styling—monitor during accessibility review.

## Follow-ups
- Capture Chrome DevTools MCP screenshots showcasing both prototype sets at 1707×898 and 1920×1080 to document visual parity.
- Align with Cameron on chosen foundation (Claude vs Codex variant per option) before promoting into Epic 2/3 story breakdown.

# 2025-11-03 – Codex Color Palette Prototypes (Codex Session 2)

## Summary
- Conducted November 2025 research sweep (luxury/interior trend boards, AI/SaaS color guides) and translated findings into four Codex palette options each for Studios and Conversational AI.
- Added data modules (`src/data/palettes/{claude,codex}.ts`) plus reusable `PaletteCard` component and comparison page (`/color-palette-demo`) so Cameron can review Claude vs Codex palettes side-by-side.
- Authored `docs/prototypes/codex-color-palettes-2025.md` summarizing the new palettes with research citations and implementation pointers.
- Validated build after additions (`npm run build`) — vendor bundle remains 749 kb (≤900 kb budget).

## Verification
- `npm run build`

## Risks
- Palette demo uses research reference labels rather than direct citations inside UI; ensure final documentation captures exact sources when locking foundation.
- Accessibility depends on the recorded color pairings; any palette edits must re-run contrast checks before adoption.

## Follow-ups
- Await Cameron’s selection of one Studios palette + one Conversational AI palette to lock in `foundation-locked.md`.
- Once locked, push palette tokens into hero prototypes (Sprint 2) and update Tailwind config / theme utilities if needed.

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
# 2025-11-03 – Studios Standards Filter Section (Codex Session B)

## Summary
- Implemented `StudiosStandardsSection` using the exact copy deck headline and paragraphs to act as the qualification gate.
- Wrapped messaging in a premium glass shell with cyan/gold ambient lighting and `data-motion="standards-*"` hooks so GSAP can choreograph entrances later.
- Inserted the section after the workflow block on the Studios page; no extra text or badges were added beyond the approved copy.

## Verification
- `npm run build`

## Risks
- Needs viewport screenshot pass (1707×898, 1920×1080) to confirm breathing room around the enlarged frame.

## Follow-ups
- Document intended motion cues (fade/scale) for the GSAP team once viewport QA completes.
# 2025-11-03 – Studios Platform Demo Section (Codex Session B)

## Summary
- Implemented `StudiosPlatformDemoSection` to present the “Six Formats. One Production.” copy with three aspect-specific media frames that hint at YouTube, Instagram, and TikTok deliverables without adding visible text beyond the copy deck.
- Each frame uses gradient placeholders, glass depth, and `data-motion="platform-demo-*"` hooks so GSAP can choreograph platform reveals later; platform names are sr-only for accessibility compliance.
- Integrated directly after the standards gate on the Studios page.
- Implemented a horizontal depth carousel: the 16:9 frame stays centered in front while the other formats sit offset behind it; clicking any card rotates the order so the selected format moves into the lead. Mobile retains the stacked presentation.

## Verification
- `npm run build`

## Risks
- Requires MCP viewport capture to confirm spacing and ensure the taller 9:16 frame doesn’t compress adjacent copy on narrow breakpoints.

## Follow-ups
- Document intended animation sequencing (stagger order, parallax ideas) in `_MEMO`/GSAP brief after viewport QA.

# 2025-11-18 – Studios & Conversational Stabilization

## Summary
- Replaced the SplitText-based hero intro with a lightweight GSAP timeline so the Studios hero text is visible even when React double-mounts; added a best-effort autoplay retry for the hero Mux video, removed Lenis, and dropped the magnetic CTA pointer math.
- Simplified Conversational’s "Where Conversational AI Excels" grid by removing tilt effects and using a single `ScrollTrigger.batch` reveal; background load is reduced by opting both pages into `PageLayout variant="custom"` so we no longer stack multiple gradient/noise layers.
- Portfolio animations now run once without permanent `will-change`, keeping GPU memory lower after scroll.

## Verification
- `npm run build`

## Risks
- Without Lenis, GSAP scrolling hooks rely on native scroll; verify ScrollTrigger refreshes still align with design expectations across devices.

## Follow-ups
- Re-run Chrome DevTools MCP traces once deployed to confirm hero LCP drops and scroll smoothness improves.
