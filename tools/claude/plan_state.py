#!/usr/bin/env python3
"""Manage PLAN.md execution state for Claude automation."""
from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Optional

PLAN_PATH = Path("codex/PLAN.md")
STATE_PATH = Path("codex/PLAN_STATE.json")
STEP_PATTERN = re.compile(r"^\s*-\s*(S[0-9]+(?:\.[a-z])?)\s+(.*)$", re.IGNORECASE)


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


@dataclass
class Step:
    step_id: str
    title: str
    status: str = "pending"  # pending|in_progress|done
    notes: str = ""

    @classmethod
    def from_line(cls, line: str) -> Optional["Step"]:
        match = STEP_PATTERN.match(line)
        if not match:
            return None
        step_id = match.group(1).upper()
        title = match.group(2).strip()
        return cls(step_id=step_id, title=title)


@dataclass
class PlanState:
    plan_file: str
    steps: List[Step] = field(default_factory=list)
    updated: str = field(default_factory=utc_now)

    def to_dict(self) -> dict:
        return {
            "plan_file": self.plan_file,
            "steps": [step.__dict__ for step in self.steps],
            "updated": self.updated,
        }

    @classmethod
    def from_dict(cls, data: dict) -> "PlanState":
        steps = [Step(**step) for step in data.get("steps", [])]
        state = cls(plan_file=data.get("plan_file", "codex/PLAN.md"), steps=steps)
        state.updated = data.get("updated", utc_now())
        return state

    def save(self) -> None:
        self.updated = utc_now()
        STATE_PATH.write_text(json.dumps(self.to_dict(), indent=2) + "\n", encoding="utf-8")

    @classmethod
    def load(cls) -> "PlanState":
        if not STATE_PATH.exists():
            raise SystemExit("PLAN_STATE.json not initialized. Run init first.")
        data = json.loads(STATE_PATH.read_text(encoding="utf-8"))
        return cls.from_dict(data)

    def current(self) -> Optional[Step]:
        for step in self.steps:
            if step.status != "done":
                return step
        return None

    def set_status(self, step_id: str, status: str) -> None:
        for step in self.steps:
            if step.step_id == step_id.upper():
                step.status = status
                return
        raise SystemExit(f"Step {step_id} not found")

    def ensure_in_progress(self, step_id: str) -> None:
        target = None
        for step in self.steps:
            if step.step_id == step_id.upper():
                target = step
            elif step.status == "in_progress":
                step.status = "pending"
        if target is None:
            raise SystemExit(f"Step {step_id} not found")
        target.status = "in_progress"


def parse_plan() -> PlanState:
    if not PLAN_PATH.exists():
        raise SystemExit("codex/PLAN.md is missing")
    steps: List[Step] = []
    for line in PLAN_PATH.read_text(encoding="utf-8").splitlines():
        step = Step.from_line(line)
        if step:
            steps.append(step)
    if not steps:
        raise SystemExit("No steps detected in PLAN.md. Ensure steps are listed as '- S1 ...'")
    return PlanState(plan_file=str(PLAN_PATH), steps=steps)


def cmd_init(_: argparse.Namespace) -> None:
    state = parse_plan()
    state.save()
    print(json.dumps(state.to_dict(), indent=2))


def cmd_current(_: argparse.Namespace) -> None:
    state = PlanState.load()
    current = state.current()
    if not current:
        print("")
        return
    print(current.step_id)


def cmd_info(_: argparse.Namespace) -> None:
    state = PlanState.load()
    print(json.dumps(state.to_dict(), indent=2))


def cmd_set(args: argparse.Namespace) -> None:
    state = PlanState.load()
    state.ensure_in_progress(args.step_id)
    state.save()
    print(args.step_id.upper())


def cmd_done(args: argparse.Namespace) -> None:
    state = PlanState.load()
    state.set_status(args.step_id, "done")
    state.save()
    print(args.step_id.upper())


def cmd_reset(_: argparse.Namespace) -> None:
    state = parse_plan()
    state.save()
    print("reset")


def main() -> None:
    parser = argparse.ArgumentParser(description="Manage PLAN execution state")
    sub = parser.add_subparsers(dest="command", required=True)

    sub.add_parser("init")
    sub.add_parser("current")
    sub.add_parser("info")
    set_cmd = sub.add_parser("set")
    set_cmd.add_argument("step_id")
    done_cmd = sub.add_parser("done")
    done_cmd.add_argument("step_id")
    sub.add_parser("reset")

    args = parser.parse_args()
    commands = {
        "init": cmd_init,
        "current": cmd_current,
        "info": cmd_info,
        "set": cmd_set,
        "done": cmd_done,
        "reset": cmd_reset,
    }
    commands[args.command](args)


if __name__ == "__main__":
    main()
