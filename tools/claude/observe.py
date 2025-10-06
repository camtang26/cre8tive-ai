#!/usr/bin/env python3
"""Generate observability report for Claude guardrails."""
from __future__ import annotations

import argparse
import json
import os
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Tuple

from plan_state import PlanState  # type: ignore

ROOT = Path(__file__).resolve().parents[2]


def iso(ts: str) -> datetime:
    return datetime.fromisoformat(ts.replace("Z", "+00:00"))


def load_events(event_file: Path, limit: int = 50) -> List[dict]:
    if not event_file.exists():
        return []
    events = []
    with event_file.open() as fh:
        for line in fh:
            if not line.strip():
                continue
            events.append(json.loads(line))
    return events[-limit:]


def load_metrics(metrics_file: Path, limit: int = 200) -> List[dict]:
    if not metrics_file.exists():
        return []
    entries = []
    with metrics_file.open() as fh:
        for line in fh:
            if not line.strip():
                continue
            entries.append(json.loads(line))
    return entries[-limit:]


def capsule_last_sync(capsule_log: Path) -> str:
    if not capsule_log.exists():
        return "(no capsule-sync log)"
    lines = [ln for ln in capsule_log.read_text().splitlines() if 'Capsule sync start' in ln]
    if not lines:
        return "(no sync entries)"
    return lines[-1][1:20]


def capsule_preview(capsule_file: Path, limit: int = 8) -> str:
    if not capsule_file.exists():
        return "(capsule missing)"
    return "\n".join(capsule_file.read_text().splitlines()[:limit])


def plan_summary() -> Tuple[str, List[str]]:
    try:
        state = PlanState.load()
    except SystemExit:
        return "PLAN_STATE missing", []
    current = state.current()
    pending = [f"{step.step_id}: {step.title}" for step in state.steps if step.status != "done"]
    status = current.step_id if current else "All steps done"
    return status, pending


def metrics_summary(entries: List[dict]) -> str:
    if not entries:
        return "(no guarded_shell metrics)"
    total = len(entries)
    failures = sum(1 for e in entries if e.get("exit") not in (0, '0'))
    counts = Counter(e.get("command", "").split()[0] for e in entries)
    top = ", ".join(f"{cmd}:{cnt}" for cmd, cnt in counts.most_common(5))
    return f"commands={total}, failures={failures}, top={top}"


def events_summary(events: List[dict]) -> str:
    if not events:
        return "(no events yet)"
    counts = Counter(ev.get("event") for ev in events)
    return ", ".join(f"{k}:{v}" for k, v in counts.most_common())


def timeline(events: List[dict]) -> str:
    lines = []
    for ev in events[-15:]:
        lines.append(f"{ev['timestamp']} | {ev['event']} | {ev['source']} | {ev['details']}")
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description="Claude observability report")
    parser.add_argument("--project-root", default=str(ROOT))
    parser.add_argument("--detail", action="store_true", help="show latest replay path")
    args = parser.parse_args()

    project_root = Path(args.project_root).resolve()
    os.chdir(project_root)

    events = load_events(project_root / "logs/claude/events.jsonl")
    metrics = load_metrics(project_root / "logs/claude/metrics.jsonl")
    plan_current, plan_pending = plan_summary()

    replay_line = ""
    if args.detail:
        replay_dir = project_root / "logs/claude/replays" / project_root.name
        if replay_dir.exists():
            latest = sorted(replay_dir.glob("session-*.json"))
            replay_info = str(latest[-1]) if latest else "(no replay export)"
        else:
            replay_info = "(no replays yet)"
        replay_line = f"Latest replay: {replay_info}\n"

    report = f"""
════════════════ OBSERVABILITY REPORT ════════════════
Project root: {project_root}
Timestamp: {datetime.now(timezone.utc).isoformat()}
{replay_line}
PLAN
- Active step: {plan_current}
- Pending: {'; '.join(plan_pending) if plan_pending else 'None'}

METRICS
- Guarded shell: {metrics_summary(metrics)}
- Last capsule sync: {capsule_last_sync(project_root / "logs/claude/capsule-sync.log")}

EVENT COUNTS
- {events_summary(events)}

RECENT EVENTS
{timeline(events)}

CAPSULE PREVIEW
{capsule_preview(project_root / "docs/context/capsule.md")}
═══════════════════════════════════════════════════════
"""
    print(report)


if __name__ == "__main__":
    main()
