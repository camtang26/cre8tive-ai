# GSAP Workflow Status System

Universal entry point for GSAP Excellence - answers "what should I do now?" for any agent.

## Overview

The workflow status system provides:

- **Progress tracking** - 29 workflows across 5 agents with category-based organization
- **Smart routing** - Suggests next workflow based on category priority
- **Multi-mode service** - Callable by other workflows for validation and data extraction
- **Simple status file** - Key-value pairs for instant grepping

## Architecture

### Core Components

```
workflow-status/
├── workflow.yaml              # Main configuration (57 lines)
├── instructions.md            # Multi-mode service (387 lines)
├── template.md                # Status file format (28 lines)
└── README.md                  # This file (150+ lines)
```

### Adapted from BMM Core

This workflow is adapted from BMM core's pristine workflow-status implementation:
- Reference: `bmad/bmm/workflows/workflow-status/`
- Preserves multi-mode service architecture
- Adapted for GSAP's 29 workflows and category-based progression

## How It Works

### For GSAP Module Users

1. Any agent runs `/gsap-[agent]:*status`
2. System reads `gsap-workflow-status.md`
3. Shows current progress and suggests next workflow
4. Offers actions:
   - Continue current workflow
   - Start recommended next workflow
   - View by category (A/B/C)
   - View by agent
   - View completed workflows

### For Workflow Developers

Other workflows can call this as a service:

```xml
<invoke-workflow path="{module_root}/workflows/workflow-status/workflow.yaml"
                mode="validate"
                calling_workflow="analyze-animation">
  <!-- Returns: should_proceed, warning, suggestion -->
</invoke-workflow>
```

## Status File Format

Simple key-value pairs in `gsap-workflow-status.md`:

```markdown
# GSAP Workflow Status

## Current State

CURRENT_WORKFLOW: debug-animation
CURRENT_AGENT: Editor
LAST_COMPLETED: refine-timing
WORKFLOWS_COMPLETE: 21/29
COMPLETED_LIST: create-scroll-animation, creative-ideation, debug-animation, ...

## Category Progress

CATEGORY_A_COMPLETE: 0/1
CATEGORY_B_COMPLETE: 0/2
CATEGORY_C_COMPLETE: 0/5

## Next Suggested

NEXT_SUGGESTED: analyze-animation
NEXT_CATEGORY: Category A (version bump only)
NEXT_AGENT: Editor
NEXT_COMPLEXITY: Quick audit - check gates, bump version

---

_Last Updated: 2025-11-09_
```

Any agent can instantly grep what they need:
- `grep 'NEXT_SUGGESTED:' gsap-workflow-status.md`
- `grep 'WORKFLOWS_COMPLETE:' gsap-workflow-status.md`
- `grep 'CATEGORY_A_COMPLETE:' gsap-workflow-status.md`

## Multi-Mode Service Architecture

### Mode: interactive (default)

Steps 1-4 - Normal status check flow:
1. Check for status file (create if missing)
2. Parse status file
3. Display progress and options
4. Handle user selection

**Usage:**
```
Any agent: /gsap-director:*status
```

### Mode: validate

Step 10 - Check if calling workflow should proceed:
- Returns `should_proceed`, `warning`, `suggestion`
- Checks if workflow already complete
- Validates prerequisites (if any)

**Usage:**
```xml
<invoke-workflow path="{module_root}/workflows/workflow-status/workflow.yaml"
                mode="validate"
                calling_workflow="analyze-animation" />
```

### Mode: data

Step 20 - Extract specific information:
- `data_request="progress"` - Get completion counts
- `data_request="next"` - Get next suggested workflow
- `data_request="current"` - Get current workflow
- `data_request="all"` - Get everything

**Usage:**
```xml
<invoke-workflow path="{module_root}/workflows/workflow-status/workflow.yaml"
                mode="data"
                data_request="progress" />
```

### Mode: init-check

Step 30 - Simple existence check:
- Returns `status_exists` (true/false)
- Fast check for other workflows

**Usage:**
```xml
<invoke-workflow path="{module_root}/workflows/workflow-status/workflow.yaml"
                mode="init-check" />
```

### Mode: update

Step 40 - Centralized status file updates:

**Action: complete_workflow**
```xml
<invoke-workflow path="{module_root}/workflows/workflow-status/workflow.yaml"
                mode="update"
                action="complete_workflow"
                workflow_name="analyze-animation"
                agent_name="Editor" />
```
- Adds workflow to COMPLETED_LIST
- Increments counts (WORKFLOWS_COMPLETE, category counts)
- Determines next suggested workflow
- Returns next workflow info

**Action: set_current_workflow**
```xml
<invoke-workflow path="{module_root}/workflows/workflow-status/workflow.yaml"
                mode="update"
                action="set_current_workflow"
                workflow_name="debug-animation"
                agent_name="Editor" />
```
- Sets CURRENT_WORKFLOW and CURRENT_AGENT
- Used when starting a new workflow

## GSAP-Specific Categories

**Category A: Version Bump Only (1 workflow)**
- Substantial content (1000+ lines)
- Has Deep-Research + Archon
- Just needs mandatory gate verification and version bump to 2.0.0-premium

**Category B: Need Enhancement (2 workflows)**
- Has research infrastructure
- Needs expansion to 1500+ lines and mandatory gates

**Category C: Need Full Rebuild (5 workflows)**
- Pathetic quality (<500 lines OR no research infrastructure)
- Requires complete rebuild from scratch

## Progress Tracking

**Current Status (as of 2025-11-09):**
- ✅ 21/29 Complete (72%)
- 📋 Category A: 0/1 complete
- 🔨 Category B: 0/2 complete
- 🔥 Category C: 0/5 complete

**Completion Goal:** 29/29 workflows at premium quality (2.0.0-premium)

## Integration

### Agent Integration

All 5 agents have `*status` command in their menus:

- Director: `/gsap-director:*status`
- Cinematographer: `/gsap-cinematographer:*status`
- Tech Director: `/gsap-tech-director:*status`
- VFX Artist: `/gsap-vfx:*status`
- Editor: `/gsap-editor:*status`

### Workflow Integration

Workflows can call this for validation:

```xml
<!-- Before starting work, check if already complete -->
<step n="1" goal="Validate prerequisites">
  <invoke-workflow path="{module_root}/workflows/workflow-status/workflow.yaml"
                  mode="validate"
                  calling_workflow="{{workflow_name}}">
    <!-- Returns: should_proceed, warning, suggestion -->
  </invoke-workflow>

  <check if="should_proceed == false">
    <output>{{warning}}</output>
    <output>{{suggestion}}</output>
    <action>Exit workflow</action>
  </check>
</step>
```

## Philosophy

**Adapted from BMM's "Less Structure, More Intelligence":**

Instead of complex if/else logic:
- Trust the LLM to analyze and infer
- Use natural language for corrections
- Keep status file simple and greppable
- Let intelligence emerge from the model

**Result:** A workflow system that feels like talking to a smart assistant, not filling out a form.

## Benefits

✅ **Smart Routing** - Category-based prioritization (A → B → C)
✅ **Progress Visibility** - Always know where you are (21/29 complete)
✅ **Multi-Mode Service** - Callable by other workflows
✅ **Simple Status File** - Key-value pairs, instantly greppable
✅ **Universal Entry Point** - All agents use same system
✅ **Fast Parsing** - grep instead of complex logic
✅ **GSAP-Specific** - Optimized for 29 workflows across 5 agents

## Future Enhancements

- Visual progress bars in terminal
- Workflow dependency checking
- Time estimates per workflow
- Agent workload balancing

---

**This workflow is the front door to GSAP Excellence. Start here to know what to do next.**
