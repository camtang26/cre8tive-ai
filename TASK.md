# Task Board — Cre8tive AI Briefing Engine

**Last Updated:** 2025-11-03
**Owner:** Codex (GSAP-segmentation branch)

## In Progress
- **S3-03: Studios Portfolio Section** — Craft the “Judge Yourself” six-video gallery with premium frames, hover metadata, and GSAP-ready `data-motion` hooks; includes research capsule, PLAN/MEMO updates, build, and viewport QA (Codex Session B, started 2025-11-03).
- **S3-05: Studios Production Stack Section** — “Complete Production. One Partner.” stack visualization delivered (copy-only layers, platform rail, GSAP hooks). Pending: Chrome DevTools viewport sweeps + GSAP handoff notes before marking complete (Codex Session B, 2025-11-03).
- **S3-06: Studios Workflow Flex Section** — Implemented “Start Anywhere. Finish Strong.” workflow with BriefingEngine video embed and caption-only timeline; awaiting viewport QA + GSAP notes ahead of closure (Codex Session B, 2025-11-03).
- **S3-07: Studios Standards Filter Section** — Build “This Isn’t for Everyone” qualification block with copy-only messaging, premium depth, and GSAP-ready wrappers; includes strict post-implementation copy audit (Codex Session B, started 2025-11-03).
- **S3-08: Studios Platform Demo Section** — “Six Formats. One Production.” tri-format showcase implemented (copy deck text only, aspect frames, `platform-demo-*` hooks). Outstanding: viewport QA + GSAP notes before closure (Codex Session B, 2025-11-03).
- **DOC1: Codex Documentation Realignment** — Sync `.codex/_MEMO.md`, `.codex/PLAN.md`, `.codex/REPORT.md`, and `TASK.md` with the November 3 documentation canon so future work references the latest architecture/roadmap.
- **P01: Codex Video Placeholder Prototypes** — Research 2025 glassmorphism/GSAP best practices and implement Codex-authored Minimal, Premium Glass, and Bold Cinematic video placeholder components + demo for Epic 2/3 comparison. *(Complete – awaiting Cameron selection)*
- **P02: Codex Color Palette Prototypes** — Research 2025 luxury + enterprise color trends and deliver Codex palette options (Studios & Conversational AI) alongside Claude’s originals in `/color-palette-demo` for Sprint 1 foundation lock.
- **P03: Hero Video Prototypes** — Produce premium hero sections (Studios + Conversational AI) with video backgrounds, gradient overlays, multi-phase animations, and reduced-motion fallbacks per 2025 research. *(Completed 2025-11-03 — review via `/hero-prototype-demo`.)*
- *Legacy animation/copy tasks remain paused until DOC1 concludes:*
  - **T17: Briefing Engine Page Recovery** — Reinstate segmented timeline orchestration in `src/pages/BriefingEngine.tsx` after accidental rollback, ensuring build passes without missing imports.
  - **H1: Homepage Hero Redesign** — Implement premium SaaS-inspired hero with outcome-first copy cluster, trust strip, cinematic product visuals, and animated gradient background. (Ref: `.codex/PLAN.md` Hero Redesign Execution Plan)
  - **T5: Desktop Responsive Optimization** — Implement GSAP `matchMedia` tiers, function-based ScrollTrigger `start`/`end` with `invalidateOnRefresh`, fluid typography/spacing, safe-area-aware instruction pill, mobile progress rail, and simplified small-tier transforms across briefing timeline sections. (Ref: `.codex/PLAN.md`, `.codex/_MEMO.md`)
  - **T14: ScrollTrigger Re-trigger Investigation** — Diagnose Lenis + ScrollTrigger replay bug on timeline sections, stabilize handlers so animations fire only once per downward pass, and validate fix. (Ref: `.codex/PLAN.md`)

## Completed
- **T1–T4: Segmented Timeline Foundation** — Established five-section timeline architecture, extracted section components, wired orchestrator + analytics, deployed reduced-motion fallbacks, and refreshed documentation for the new briefing experience. (Completed 2025-10-14)

## Discovered During Work / Backlog
- **ParticleCore Forced Reflow Fix** — Refactor canvas sizing to remove 811 ms layout thrash; re-validate via Chrome performance trace post-change. (Ref: `docs/gsap-runtime-performance-validation-2025-10-14.md`)
- **Styles/Handoff GPU Hint Sweep** — Add dynamic `will-change` lifecycle + `force3D` hints to align with performance audit recommendations. (Ref: `docs/gsap-runtime-performance-validation-2025-10-14.md`)
- **Analytics & QA Validation Loop** — Capture refreshed MCP viewport sweep, analytics payload checks, and Lighthouse runs after responsive tiers land. (Ref: `.codex/PLAN.md` T6)
- **Lint/Test Debt Resolution** — Address repo unicorn config gaps and legacy `any` usage once responsive work is merged. (Ref: `.codex/_MEMO.md` Outstanding Tasks)
- **Hero Video KPI Follow-up** — Re-run Lighthouse and user analytics after the lazy-load upgrade to ensure manual activation rates stay healthy and performance metrics improve as expected. (Ref: `.codex/_MEMO.md` Opportunities #6)
