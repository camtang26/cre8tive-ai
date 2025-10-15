# MCP Playbook (Cre8tive Website)

## Archon MCP — RAG Research (MANDATORY)
- **Use case**: Fetch curated knowledge (GSAP, Lenis, Tailwind, accessibility, marketing patterns, prior decisions) before starting ANY task that touches those domains.
- **Workflow**
  1. Launch the Archon MCP (see `.claude/mcp-configs/archon-mcp.toml`).
  2. Run baseline queries: project name, tech/topic (e.g., `archon.search "cre8tive website gradients"`).
  3. Capture key findings, URLs, and applied insights in `/codex/_MEMO.md` (Decisions + Next Steps) and `/codex/PLAN.md` (context + rationale).
  4. If results are stale or missing, note the gap in `_MEMO` and flag in PLAN before proceeding.
- **Outcome**: Every significant decision references fresh RAG evidence to keep work aligned with the latest best practices.

## Chrome DevTools MCP — Visual Validation
- **Use case**: Validate gradients, animations, responsiveness, console errors, accessibility, screenshots.
- **Workflow**
  1. Launch per `.claude/mcp-configs/chrome-devtools-mcp-README.md` and follow the SessionStart hook instructions.
  2. For each UX change, record steps: navigate, interact, capture screenshot/snapshot, collect console/network/performance logs.
  3. Attach findings (image path / log summary) in PLAN step notes and `/codex/REPORT.md`.
  4. Re-run after addressing issues to confirm fixes.
- **Outcome**: Concrete evidence that visual/UI work matches expectations on real pages, not just computed styles.

> **Reminder:** Always consult this playbook before starting implementation. Hooks will check that you leverage the appropriate MCP, but the responsibility for thorough research and validation sits with you.
