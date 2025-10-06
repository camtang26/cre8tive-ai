#!/bin/bash
set -euo pipefail

LOG_DIR="/home/cameronai/projects/codex-enhancements/logs/claude"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/capsule-sync.log"
TIMESTAMP=$(date -u +%Y-%m-%dT%H:%M:%SZ)

declare -A PROJECTS=(
  ["/home/cameronai/projects/codex-enhancements"]="Codex Enhancements"
  ["/home/cameronai/projects/cre8tive-website"]="Cre8tive Website"
)

{
  /usr/bin/python3 /home/cameronai/projects/codex-enhancements/tools/claude/log_event.py --event capsule_sync_cron --source cron --details "start" --project "$PWD" >/dev/null 2>&1
  echo "[${TIMESTAMP}] Capsule sync start"
  for project in "${!PROJECTS[@]}"; do
    name="${PROJECTS[$project]}"
    if [ -d "$project" ]; then
      echo "→ Regenerating capsule for $name ($project)"
      /usr/bin/python3 /home/cameronai/projects/codex-enhancements/tools/claude/generate_capsule.py \
        --project-root "$project" \
        --project-name "$name"
    else
      echo "⚠️  Project directory missing: $project"
    fi
  done
  /usr/bin/python3 /home/cameronai/projects/codex-enhancements/tools/claude/log_event.py --event capsule_sync_cron --source cron --details "end" --project "$PWD" >/dev/null 2>&1
  echo "[${TIMESTAMP}] Capsule sync end"
  echo ""
} >> "$LOG_FILE" 2>&1
