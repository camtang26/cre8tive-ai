#!/usr/bin/env python3
"""Summarize guarded shell metrics for trend analysis."""

from __future__ import annotations

import argparse
import json
from collections import Counter, defaultdict
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Summarize Claude metrics")
    parser.add_argument("--metrics", default="logs/claude/metrics.jsonl")
    args = parser.parse_args()

    path = Path(args.metrics)
    if not path.exists():
        print("No metrics file found.")
        return

    total = 0
    failures = 0
    commands = Counter()
    exits = Counter()
    with path.open() as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            total += 1
            record = json.loads(line)
            cmd = record.get("command", "")
            commands[cmd.split()[0] if cmd else ""] += 1
            exit_code = record.get("exit", 0)
            exits[exit_code] += 1
            if exit_code != 0:
                failures += 1
    print(f"Total guarded commands: {total}")
    print(f"Failures: {failures}")
    print("Top commands:")
    for cmd, count in commands.most_common(10):
        if not cmd:
            continue
        print(f"  {cmd}: {count}")
    print("Exit code distribution:")
    for code, count in sorted(exits.items()):
        print(f"  {code}: {count}")


if __name__ == "__main__":
    main()
