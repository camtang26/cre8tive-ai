#!/usr/bin/env python3
"""Append structured events to logs/claude/events.jsonl."""
from __future__ import annotations

import argparse
import json
import os
from datetime import datetime, timezone
from pathlib import Path

LOG_DIR = Path("logs/claude")
LOG_FILE = LOG_DIR / "events.jsonl"


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def main() -> None:
    parser = argparse.ArgumentParser(description="Log Claude guard events")
    parser.add_argument("--event", required=True)
    parser.add_argument("--source", required=True)
    parser.add_argument("--details", default="")
    parser.add_argument("--data", default="{}")
    parser.add_argument("--project", default=os.getcwd())
    args = parser.parse_args()

    LOG_DIR.mkdir(parents=True, exist_ok=True)
    try:
        payload = json.loads(args.data)
    except json.JSONDecodeError:
        payload = {"raw": args.data}

    entry = {
        "timestamp": utc_now(),
        "event": args.event,
        "source": args.source,
        "details": args.details,
        "project": args.project,
        "data": payload,
    }
    with LOG_FILE.open("a", encoding="utf-8") as fh:
        fh.write(json.dumps(entry) + "\n")
    print(json.dumps(entry))


if __name__ == "__main__":
    main()
