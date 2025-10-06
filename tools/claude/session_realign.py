#!/usr/bin/env python3
"""Produce a concise session realignment summary from capsule + plan state."""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path
from textwrap import dedent
from typing import List


def read_lines(path: Path, limit: int) -> List[str]:
    if not path.exists():
        return []
    return [ln.rstrip() for ln in path.read_text(encoding="utf-8").splitlines()[:limit]]


def current_step(state_path: Path) -> str:
    if not state_path.exists():
        return "(PLAN_STATE missing)"
    data = json.loads(state_path.read_text(encoding="utf-8"))
    for step in data.get("steps", []):
        if step.get("status") != "done":
            return f"{step.get('step_id')}: {step.get('title')}"
    return "All steps complete"


def main() -> None:
    parser = argparse.ArgumentParser(description="Summarize current project context")
    parser.add_argument("--project-root", default=".")
    parser.add_argument("--project-name")
    parser.add_argument("--capsule", default="docs/context/capsule.md")
    parser.add_argument("--memo", default="codex/_MEMO.md")
    parser.add_argument("--state", default="codex/PLAN_STATE.json")
    args = parser.parse_args()

    root = Path(args.project_root).resolve()
    project_name = args.project_name or root.name.replace("-", " ").title()

    # Refresh capsule quietly
    generate = root / "tools/claude/generate_capsule.py"
    if generate.exists():
        subprocess.run([
            sys.executable,
            str(generate),
            "--project-root",
            str(root),
            "--project-name",
            project_name,
        ], check=False, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    capsule_preview = "\n".join(read_lines(root / args.capsule, 20))
    focus = []
    memo_path = root / args.memo
    if memo_path.exists():
        for line in memo_path.read_text(encoding="utf-8").splitlines():
            if line.startswith("- ") and len(focus) < 3:
                focus.append(line)
            if len(focus) >= 3:
                break
    summary = dedent(
        f"""
        # Session Realignment
        - Project: {project_name}
        - Active Step: {current_step(root / args.state)}
        - Focus anchors: {' | '.join(focus) if focus else '(none cached)'}

        ## Capsule Preview
        {capsule_preview}
        ## Action Required
        - Restate these constraints aloud before continuing.
        - Confirm the active step matches PLAN.md (next: /implement-guarded).
        - If misaligned, pause and run /plan-guarded to refresh the plan.
        """
    ).strip()
    print(summary)


if __name__ == "__main__":
    main()
