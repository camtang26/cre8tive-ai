---
description: Inspect the current PLAN before Codex selects work
---
Run this to remind yourself what remains:
```bash
python tools/guardrail/plan_state.py info
```
Focus on steps marked `pending`. Choose the next step that fits and record the decision using `/prompts:start-step`.
