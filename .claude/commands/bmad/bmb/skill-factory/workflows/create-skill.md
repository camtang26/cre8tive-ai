---
description: "Universal Skill Creation Workflow - Create production-ready Claude Skills with TDD methodology. Supports Type 1 (procedural/discipline) and Type 2 (domain expertise with KB). Includes interactive type assessment, automated research with pattern saturation recognition, ruthless distillation, multi-model testing, and official Anthropic compliance. Outputs skills <500 lines."
version: "2.0.0"
---

# Create Claude Skill (Universal Workflow)

This is a BMad workflow execution command. When invoked, it will:

1. Load and execute the `create-skill` workflow from `bmad/bmb/skill-factory/workflows/create-skill/workflow.yaml`
2. Follow the complete 14-step TDD workflow for skill creation
3. Support both Type 1 and Type 2 skill creation with appropriate research and testing

## What This Workflow Creates

**Type 1 Skills** (Procedural/Discipline):
- Process enforcement (TDD, systematic debugging, code review)
- Everything fits in SKILL.md (<500 lines)
- Tested via pressure scenarios
- No external research needed

**Type 2 Skills** (Domain Expertise):
- Domain knowledge + reference material
- SKILL.md + KB files (20-40k tokens total)
- Tested via real implementations
- Includes automated research with saturation recognition

## Usage

This command can be invoked via:
- BMad Builder menu: `*create-skill`
- Direct slash command: `/bmad/bmb/skill-factory/workflows/create-skill`

The workflow will guide you through interactive type assessment and all creation steps.
