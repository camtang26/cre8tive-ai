# Briefing Engine Doc Realignment — 2025-10-13

**Goal:** Sync core project docs with the latest BMAD stories, technical decisions, and performance findings for the `/briefing-engine` experience, and surface the performance optimization backlog as the primary engineering objective before resuming implementation work.

**Impact Set:** `README.md`, `SPEC.md`, `ARCHITECTURE.md`, `CONTRIBUTING.md`, `docs/MCPs.md`, `.codex/_MEMO.md`, `.codex/REPORT.md`, `docs/technical-decisions.md`, `docs/PLAN.md` (evaluate for deprecation), performance audit artefacts.

**Commands:** `rg`, `fd`, `git status`, `npm run build` (spot-check after doc updates if required for reproducibility).

## Steps
- **S1 (DONE)** — Prime on BMAD source-of-truth artefacts (stories 1.7, 1.11, 1.14, tech director performance audit, adaptive performance modules) and catalogue gaps versus existing core docs.
- **S2 (PENDING)** — Map doc drift: outline required updates per file (new sections, removals, audit findings) and capture in `_MEMO` + this plan.
- **S3 (PENDING)** — Update core docs with current product narrative (adaptive performance stack, accessibility decision AD-003 nuance, outstanding CLS blockers, Lenis/GSAP integration status).
- **S4 (PENDING)** — Refresh supporting docs (`docs/MCPs.md`, `.codex/REPORT.md`) to reflect mandated MCP usage + recent audits; codify the optimization backlog (CLS, ScrollTrigger/Lenis tuning, asset sizing, adaptive stack validation).
- **S5 (PENDING)** — Review updated docs with performance checklist, ensure references to BMAD stories/contexts are linked, and summarize open risks + prioritized optimization tasks for development handoff.

---

# Briefing Timeline Segmentation — 2025-10-14

**Goal:** Replace the monolithic pinned ScrollTrigger timeline with segmented sections that auto-play high-impact animations on entry, preserving cinematic quality while eliminating dead zones and improving clarity for older decision-makers.

**Impact Set:** `src/components/briefing/BriefToStoryboardAnimation.tsx`, new section components under `src/components/briefing/sections/`, `src/pages/BriefingEngine.tsx`, timeline analytics hooks, adaptive performance utilities, `styles/base.css` (utility classes), documentation (`ARCHITECTURE.md`, `SPEC.md`, `.codex/_MEMO.md`, `.codex/REPORT.md`).

**Key References:** GSAP section-based ScrollTrigger patternsciteturn0search0, Codrops staged scrollytelling choreographyciteturn0search5, scroll UX guidance for older adults (clear navigation, step-focused storytelling).citeturn1search0turn1search1turn1search3

## Steps
- **T1 — Experience Blueprint (IN PROGRESS):** Define 5 stacked sections (Hero Intake, Neural Synthesis, Style Selection, Storyboard Assembly, Studios Handoff) with target scroll distance (~400–500 px per beat), per-section animation timelines, and progress affordances (instruction badge, side progress indicator).
- **T2 — Component Decomposition:** Extract existing markup into reusable stage components (`HeroBriefStage`, `NeuralSynthesisStage`, etc.), isolating timeline-specific refs/logic to each module; introduce a `SectionTimeline` wrapper (hooks: `useScrollTriggerAnimation`, `usePrefersReducedMotion`) to auto-play on enter and reset on exit.
- **T3 — Orchestrator Build:** Implement new `BriefingTimeline` composer that renders sections in order, injects scroll instruction UI, registers analytics events (`timeline_stage_view`, `timeline_secondary_control`), and wires optional keyboard/click-to-advance controls.
- **T4 — Transition Cleanup:** Remove master pinned timeline, delete unused refs/state, rebase adaptive performance hooks to per-section timelines, and ensure Lenis integration remains smooth (no manual polling).
- **T5 — Visual Polish & Accessibility:** Add progress rail, stage badges, and CTA prompts; align typography/spacing to maintain premium aesthetic; implement reduced-motion fallbacks (fade/static images) and keyboard focus management.
- **T6 — Validation:** Run `npm run build`, targeted vitest suites (add new tests for stage visibility states), manual cross-browser checks, and capture Chrome performance trace to confirm CLS improvements and interaction smoothness.
- **T7 — Documentation & Handoff:** Update architecture, spec, and report docs with segmented timeline rationale, research citations, and future enhancements (snap-to-section, analytics dashboard).
