# Claude Code Reliability Blueprint (Max x20)

## Purpose
Create a dependable operating system for Claude Sonnet 4.5 inside Claude Code CLI while running with `--dangerously-bypass-permissions`. The goal is to match Codex CLI discipline—tests, docs, self-review—without throttling Claude’s creative throughput.

## Failure Modes Observed
- **Test & validation gaps:** Claude skips lint/tests or assumes success, leading to silent regressions.
- **Protocol drift:** Long sessions erode memory of SPEC/PLAN/_MEMO procedures; Claude reverts to ad-hoc behavior.
- **Context collapse:** Auto-compaction drops critical project details, causing rework and duplicated docs.
- **Shortcut bias:** When blocked, Claude takes risky shortcuts instead of surfacing blockers.
- **Doc sprawl:** Generates new docs unnecessarily yet forgets to update canonical ones.

## Guardrail Stack

### 1. Pre-Flight Gate (SessionStart)
- Extend `session-start.sh` to:
  - Run `~/.claude/hooks/assumption-killer.sh` to reset mindset.
  - Emit a condensed "context capsule" (see §3) extracted from `/codex/_MEMO.md`.
  - Detect active PLAN step and export `PLAN_STEP` env var for custom commands.
- Add a second hook that refuses automation until the AI Product Charter exists (checks `_MEMO.md` with `rg "AI Product Charter"`).

### 2. Spec-Driven Launch Command
- Slash commands implemented under `~/.claude/commands/plan-guarded.md`, `implement-guarded.md`, `validate-guarded.md`, `capsule-sync.md`, and `session-realign.md`.
- `plan-guarded` refreshes capsule + _MEMO and enforces small, time-bounded steps (auto-indexed into PLAN_STATE).
- `implement-guarded` auto-selects the next pending step when no argument is provided, runs lint/tests before & after edits via `guarded_shell`, and marks completion in PLAN_STATE.
- `validate-guarded` reuses the DoD template and appends reports to `codex/REPORT.md`.
- `capsule-sync` generates the context snapshot and announces changes in chat.
- `session-realign` replays capsule + PLAN state summaries on demand.

### 2a. PLAN Execution State
- `tools/claude/plan_state.py` indexes PLAN.md into `codex/PLAN_STATE.json` (created via `plan-guarded`).
- `/implement-guarded` defaults to the next pending step by calling `plan_state.py current`; `plan_state.py done <step>` auto-advances.
- `session_realign.py` and hooks reuse PLAN_STATE to remind Claude of the active task after compaction.

### 3. Context Capsules
- Capsule template stored- Capsule sync automation scheduled hourly via cron (`tools/claude/cron_capsule_sync.sh`). Logs stored under `logs/claude/capsule-sync.log` for monitoring.
 at `~/.claude/templates/capsule-template.md` and generated via `tools/claude/generate_capsule.py`.
- Capsules live in `docs/context/capsule.md` per project; `/capsule-sync` keeps them <1.5k tokens with Focus Anchors, PLAN step, risks, and next experiments.
- `inject-capsule-reminder.py` injects the capsule preview after startup, resume, and compaction events.
- Maintain capsule history by archiving previous versions if required.

### 4. Guarded Implementation Loop
- Slash command instructs Claude to rely on `guarded_shell` (installed at `~/.local/bin/guarded_shell`).
- Wrapper logs pre/post git status, diff stats, exit code, and appends JSON entries to `logs/claude/metrics.jsonl`.
- `session-realign-context.py` injects realignment summaries on session start/resume/compaction, instructing Claude to restate constraints before continuing.
- Failing commands abort the workflow until the issue is resolved and reported.

### 5. Danger Bypass Compensating Controls
- `guarded_shell` is the mandated wrapper; instructions in CLAUDE.md and slash commands require it.
- Session hooks remind Claude to acknowledge capsule + DoD before executing any guard command.
- Settings (`~/.claude/settings.json`) trigger `inject-capsule-reminder.py` on startup/resume/compact so guardrails persist after compaction.

### 6. Validation Ritual
- Enhance `/validate` to:
  - Require explicit acknowledgment of DoD checklist before marking ready.
  - Append validation report to `/codex/REPORT.md` automatically.
  - Update `_MEMO.md` Next Steps to "Request human review".

### 7. Telemetry & Drift Monitoring
- Guarded shell appends metrics to `logs/claude/metrics.jsonl`; `tools/claude/summarize_metrics.py` aggregates trends.
- Session logs live under `logs/claude/sessions/`, capturing command history and git diff summaries.
- Compare adherence metrics with Codex sessions weekly to tune prompts and automation thresholds.

## Implementation Roadmap
1. **Refactor prompts:** Split global CLAUDE.md into modular includes (persona, workflow, guardrails) to reduce token footprint before installing new hooks.
2. **Build command templates:** Author YAML front-matter slash commands (`plan-guarded.md`, `implement-guarded.md`, `capsule-sync.md`) and test locally.
3. **Update hooks:** Modify `session-start.sh`, add `post-shell` guard script, install compaction reinjection hook.
4. **Telemetry setup:** Create `tools/claude/guard.sh` and logging directory; ensure permissions.
5. **Pilot & iterate:** Run controlled sessions, log failures, adjust thresholds (e.g., allowed diff size) before full adoption.

## Success Metrics
- ≥95% Claude sessions run lint + tests automatically.
- <5% tasks require human rework due to skipped validation.
- ≤1 duplicate doc per project after 2-week adoption.
- Claude self-reports blockers instead of bypassing in ≥90% logged incidents.

## Next Experiments
- Evaluate MCP-based validators (Playwright smoke tests) to offload manual verification.
- Explore lightweight plan visualizer fed from PLAN.md to remind Claude of step sequence.
- Integrate Archon tasks so Claude can’t proceed until status transitions (todo → in_progress → review).

---
Maintain this blueprint alongside Codex docs; update as hooks or Anthropic SDK capabilities evolve.
