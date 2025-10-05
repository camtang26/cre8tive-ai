#!/usr/bin/env python3
"""Generate project capsule markdown from codex planning artifacts."""

from __future__ import annotations

import argparse
import datetime as dt
import re
from pathlib import Path
from typing import Dict, List, Optional


SECTION_PATTERN = re.compile(r"^# +(?P<title>.+)$")
BULLET_PATTERN = re.compile(r"^[-*] +")


def parse_sections(text: str) -> Dict[str, List[str]]:
    sections: Dict[str, List[str]] = {}
    current: Optional[str] = None
    for line in text.splitlines():
        match = SECTION_PATTERN.match(line.strip())
        if match:
            current = match.group("title").strip()
            sections.setdefault(current, [])
        elif current is not None:
            sections[current].append(line.rstrip())
    return sections


def extract_bullets(lines: List[str], limit: int = 5) -> str:
    bullets = [ln.strip() for ln in lines if BULLET_PATTERN.match(ln)]
    return "\n".join(bullets[:limit]) if bullets else "- (none documented)"


def read_text(path: Path) -> str:
    if not path.exists():
        return ""
    return path.read_text(encoding="utf-8")


def pick_plan_step(plan_path: Path, memo_sections: Dict[str, List[str]]) -> str:
    if (next_steps := memo_sections.get("Next Steps")):
        for line in next_steps:
            if BULLET_PATTERN.match(line):
                return line.strip("- *")
    text = read_text(plan_path)
    if text:
        for line in text.splitlines():
            if line.strip().startswith("S") and ":" in line:
                return line.strip()
    return "Review PLAN.md for current step"


def compute_recent_decisions(sections: Dict[str, List[str]], limit: int = 3) -> str:
    if (decisions := sections.get("Decisions")):
        bullets = [ln.strip() for ln in decisions if BULLET_PATTERN.match(ln)]
        if bullets:
            return "\n".join(bullets[:limit])
    return "- (no decisions recorded)"


def render_template(template_path: Path, mapping: Dict[str, str]) -> str:
    template = read_text(template_path)
    def replace(match: re.Match[str]) -> str:
        key = match.group(1)
        return mapping.get(key, f"{{{{{key}}}}}")
    return re.sub(r"{{\s*([^}]+)\s*}}", replace, template)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Claude project capsule")
    parser.add_argument("--project-root", required=True, help="Path to project root")
    parser.add_argument("--project-name", help="Override project name")
    parser.add_argument("--template", default="~/.claude/templates/capsule-template.md")
    parser.add_argument("--output", default="docs/context/capsule.md")
    args = parser.parse_args()

    project_root = Path(args.project_root).expanduser().resolve()
    memo_path = project_root / "codex/_MEMO.md"
    plan_path = project_root / "codex/PLAN.md"
    report_path = project_root / "codex/REPORT.md"

    memo_sections = parse_sections(read_text(memo_path))

    project_name = (
        args.project_name
        or project_root.name.replace("-", " ").title()
    )

    charter = memo_sections.get("AI Product Charter (2025-10-04)") or memo_sections.get("AI Product Charter") or []
    mission_line = "".join(charter) if charter else "Refer to AI Product Charter in _MEMO.md"

    mapping = {
        "project_name": project_name,
        "mission_statement": mission_line.strip() or "Refer to AI Product Charter",
        "tech_stack": "See README.md",
        "plan_step": pick_plan_step(plan_path, memo_sections),
        "dod_delta": "No overrides" if "Definition of Done" not in memo_sections else "See _MEMO.md",
        "dev_commands": "npm run dev" if (project_root / "package.json").exists() else "Refer to README",
        "test_commands": "npm run test -- --watch=false (ensure added)",
        "quality_commands": "npm run lint && npm run build",
        "deploy_notes": "See README/Deployment section",
        "risk_notes": extract_bullets(memo_sections.get("Open Questions", []), limit=5),
        "spec_path": "SPEC.md",
        "architecture_path": "ARCHITECTURE.md",
        "readme_path": "README.md",
        "report_path": "codex/REPORT.md",
        "recent_decisions": compute_recent_decisions(memo_sections),
        "next_experiments": extract_bullets(memo_sections.get("Next Steps", []), limit=5),
    }

    template_path = Path(args.template).expanduser()
    output_path = (project_root / args.output).resolve()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output = render_template(template_path, mapping)
    header = f"<!-- Generated {dt.datetime.utcnow().isoformat()}Z -->\n"
    output_path.write_text(header + output + "\n", encoding="utf-8")
    print(f"Capsule written to {output_path}")


if __name__ == "__main__":
    main()
