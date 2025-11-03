# Task Board — Cre8tive AI Briefing Engine

**Last Updated:** 2025-11-03
**Owner:** Codex (GSAP-segmentation branch)

## In Progress
- **DOC1: Codex Documentation Realignment** — Sync `.codex/_MEMO.md`, `.codex/PLAN.md`, `.codex/REPORT.md`, and `TASK.md` with the November 3 documentation canon so future work references the latest architecture/roadmap.
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
