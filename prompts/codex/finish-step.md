---
description: Record Codex completion notes for a step
argument_hint: "<step-id>"
---
When Codex wraps up a PLAN step, perform these actions:

1. Update `_MEMO.md` Decisions with a bullet such as:
```
- 2025-10-05 HH:MM NZDT — Codex completed S? (what changed, tests run, manual checks)
```
2. Run the PLAN_STATE helper to move the step forward:
```bash
python tools/guardrail/plan_state.py done <step-id>
```
3. Add a short hand-off note for Claude in `codex/HANDOFF.md`, for example:
```
2025-10-05 HH:MM NZDT — Codex: S? ready for Claude validation (focus areas to review)
```
4. Ping Claude (or leave a chat note) asking them to `/session-realign` and `/confirm-step <step-id>` when ready.

This prompt keeps shared artifacts aligned without touching the Claude guardrails.
