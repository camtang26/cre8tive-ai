#!/usr/bin/env python3
"""Mark a PLAN step as completed (adds ✅ before the step id)."""
from __future__ import annotations

import argparse
from pathlib import Path

PLAN_RELATIVE = Path("codex/PLAN.md")


def mark_step(plan_path: Path, step_id: str) -> bool:
    if not plan_path.exists():
        return False
    target = step_id.upper()
    lines = plan_path.read_text(encoding="utf-8").splitlines()
    updated = False
    for idx, line in enumerate(lines):
        stripped = line.lstrip()
        prefix_len = len(line) - len(stripped)
        if stripped.startswith(f"- {target}") and "✅" not in stripped:
            lines[idx] = line[:prefix_len] + stripped.replace(f"- {target}", f"- ✅ {target}", 1)
            updated = True
            break
    if updated:
        plan_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return updated


def main() -> None:
    parser = argparse.ArgumentParser(description="Mark PLAN step complete")
    parser.add_argument("step_id", help="Step identifier (e.g., S2)")
    parser.add_argument("--project-root", default=".")
    args = parser.parse_args()

    plan_path = Path(args.project_root).resolve() / PLAN_RELATIVE
    if not mark_step(plan_path, args.step_id):
        raise SystemExit("Step not found or already marked complete")


if __name__ == "__main__":
    main()
