#!/usr/bin/env python3
"""Return success if chrome-devtools MCP is configured for the project."""
from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

CONFIG_PATH = Path.home() / ".claude.json"


def has_devtools(project: str) -> bool:
    try:
        with CONFIG_PATH.open() as fh:
            config = json.load(fh)
    except (FileNotFoundError, json.JSONDecodeError):
        return False
    project_cfg = config.get("projects", {}).get(project, {})
    servers = project_cfg.get("mcpServers", {})
    return "chrome-devtools" in servers


def main() -> None:
    parser = argparse.ArgumentParser(description="Check chrome-devtools MCP availability")
    parser.add_argument("--project", default=os.getcwd())
    args = parser.parse_args()

    if has_devtools(args.project):
        sys.exit(0)
    sys.exit(1)


if __name__ == "__main__":
    main()
