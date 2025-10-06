#!/usr/bin/env python3
"""Revert a PLAN step from completed state (✅) back to pending."""
from __future__ import annotations

import argparse
import re
from pathlib import Path

PLAN_PATH = Path("codex/PLAN.md")


def reset_step(plan_path: Path, step_id: str) -> bool:
    if not plan_path.exists():
        return False
    original = plan_path.read_text(encoding="utf-8")
    pattern = re.compile(rf"- \u2705 ({re.escape(step_id)}\b)")
    new_text, count = pattern.subn(r"- \1", original)
    if count:
        plan_path.write_text(new_text, encoding="utf-8")
        return True
    return False


def main() -> None:
    parser = argparse.ArgumentParser(description="Reset PLAN step status")
    parser.add_argument("step_id", help="Step identifier (e.g., S2)")
    parser.add_argument("--project-root", default=".")
    args = parser.parse_args()

    plan_path = Path(args.project_root).resolve() / PLAN_PATH
    success = reset_step(plan_path, args.step_id.upper())
    if not success:
        raise SystemExit("Step not found or not marked complete")


if __name__ == "__main__":
    main()
