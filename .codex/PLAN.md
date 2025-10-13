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
