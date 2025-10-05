---
description: Note current PLAN step before Codex begins work
argument_hint: "[optional-step-id]"
---
Use this template any time Codex is about to pick up a task.

1. Check the active step:
```bash
python tools/guardrail/plan_state.py info
```
2. If a specific step is obvious, claim it in `_MEMO.md` using the snippet below (replace `S?` and summary):
```
- 2025-10-05 HH:MM NZDT — Codex starting S? (brief summary)
```
3. Optionally add a note to `codex/HANDOFF.md` so Claude knows Codex is working:
```
2025-10-05 HH:MM NZDT — Codex working on S?
```
Run this prompt whenever Codex begins a new step so shared docs stay in sync.
