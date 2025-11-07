# GSAP Excellence - Inline Actions → Workflows Conversion Plan

**Status:** READY FOR EXECUTION
**Created:** 2025-11-05
**Priority:** CRITICAL (foundational architecture fix)
**Estimated Total Time:** 8-12 hours (spread across implementation + testing)

---

## 🎯 Executive Summary

### The Problem

**Current Architecture (Token Inefficient):**
- 36 inline action commands embedded in agent files
- 1,244 total lines of inline action content
- **EVERY agent activation loads ALL inline actions** (regardless of which command user needs)
- Token waste: ~1,200 lines loaded unnecessarily on every agent activation

**Example:**
- User loads Editor agent → 2,047 lines load into context
- User wants `*analyze` command → Only needs ~100 lines for that workflow
- **Token waste: 1,947 lines (95% unnecessary)**

### The Solution

**Target Architecture (Token Efficient):**
- Convert 25 inline actions → standalone workflows
- Keep 11 simple inline actions (informational, <20 lines each)
- **Agent activation: ~300-400 lines** (agent persona + small menu)
- **Workflow execution: ~200-300 lines** (only the workflow needed)
- **Token savings: 70-80% per agent activation**

### Impact Analysis

| Metric | Before (Current) | After (Target) | Improvement |
|--------|------------------|----------------|-------------|
| Agent File Size (avg) | 1,548 lines | 450 lines | **-71%** |
| Context on Activation | ~1,500 lines | ~400 lines | **-73%** |
| Context per Command | ~1,500 lines | ~250 lines | **-83%** |
| Total Inline Action Lines | 1,244 lines | ~220 lines | **-82%** |
| Workflows Count | 13 | 38 (+25) | **+192%** |
| Maintainability | Poor | Excellent | **Dramatic** |

**Additional Benefits:**
- ✅ Research enforcement easier (gates go in workflow files)
- ✅ Workflows can be shared/reused across modules
- ✅ Individual testing of each workflow
- ✅ Better organization (one concern per file)
- ✅ Easier to find and edit specific functionality

---

## 📊 Complete Inline Action Inventory

### By Agent

| Agent | Total Items | Workflows | Inline Actions | Meta | Agent File Size |
|-------|-------------|-----------|----------------|------|----------------|
| Director | 12 | 4 | 6 | 2 | 1,107 lines |
| Cinematographer | 11 | 1 | 8 | 2 | 1,502 lines |
| VFX Artist | 10 | 1 | 7 | 2 | 1,339 lines |
| Editor | 11 | 2 | 7 | 2 | 2,047 lines |
| Tech Director | 11 | 1 | 8 | 2 | 1,743 lines |
| **TOTALS** | **55** | **9** | **36** | **10** | **7,738 lines** |

### Inline Action Breakdown by Complexity

| Complexity | Count | Avg Lines | Total Lines | Characteristics |
|------------|-------|-----------|-------------|-----------------|
| **COMPLEX** | 0 | 0 | 0 | Multi-step, >80 lines, deep research |
| **MEDIUM** | 22 | 37 | 814 | Research protocols, 30-79 lines |
| **SIMPLE** | 14 | 28 | 392 | Informational, <30 lines |
| **META** | 10 | N/A | 10 | Help/exit commands |
| **TOTAL** | **46** | **34** | **1,216** | - |

---

## 🔍 Detailed Inventory with Conversion Decisions

### Legend
- ✅ **CONVERT** - Should become standalone workflow
- ⚠️ **MAYBE** - Could convert or keep depending on usage patterns
- ❌ **KEEP INLINE** - Stay as inline action (simple/informational)

---

### DIRECTOR (6 inline actions, 174 lines total)

| Command | Lines | Complexity | Has Research? | Decision | Priority | Notes |
|---------|-------|------------|---------------|----------|----------|-------|
| `*review` | 47 | MEDIUM | ✅ Yes (Archon + Deep-Research + WebSearch) | ✅ **CONVERT** | **P1 - HIGH** | KB-powered quality review, 5-step research protocol |
| `*vision-plan` | 57 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P1 - HIGH** | Narrative planning with Pixar Story Spine, research-backed |
| `*crew` | 23 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Lists available agents (informational) |
| `*patterns` | 17 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Shows pattern library location (informational) |
| `*showreel` | 18 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Easter egg - placeholder for future feature |
| `*mission` | 29 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Explains module mission (motivational) |

**Director Summary:**
- Convert: 2 (104 lines → workflows)
- Keep: 4 (87 lines stay inline)
- Reduction: 60% inline content reduction

---

### CINEMATOGRAPHER (8 inline actions, 216 lines total)

| Command | Lines | Complexity | Has Research? | Decision | Priority | Notes |
|---------|-------|------------|---------------|----------|----------|-------|
| `*trends` | 28 | MEDIUM | ✅ Yes (WebSearch + Archon) | ✅ **CONVERT** | **P2 - MEDIUM** | Research 2024-2025 premium trends |
| `*examples` | 22 | MEDIUM | ✅ Yes (Archon + WebSearch) | ✅ **CONVERT** | **P2 - MEDIUM** | Find premium GSAP examples |
| `*timing` | 51 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P1 - HIGH** | Motion analysis with KB-powered research |
| `*analyze-motion` | 56 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P1 - HIGH** | Visual→technical translation, uses Section 1.2 |
| `*plugins` | 26 | SIMPLE | ⚠️ Minimal (list + descriptions) | ⚠️ **MAYBE** | P3 - LOW | Could be simple data file + inline display |
| `*sources` | 34 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Lists available research sources |
| `*inspiration` | 28 | SIMPLE | ⚠️ Fetches random example | ⚠️ **MAYBE** | P3 - LOW | Easter egg - could be mini-workflow |
| `*frame-rate` | 27 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Easter egg - jokes about 24fps vs 60fps |

**Cinematographer Summary:**
- Convert: 4 certain + 2 maybe (157-209 lines → workflows)
- Keep: 2 certain (55 lines stay inline)
- Reduction: 73-97% inline content reduction

---

### VFX ARTIST (7 inline actions, 294 lines total)

| Command | Lines | Complexity | Has Research? | Decision | Priority | Notes |
|---------|-------|------------|---------------|----------|----------|-------|
| `*timeline` | 65 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P1 - HIGH** | Complex timeline choreography, 4-tier research |
| `*scroll` | 36 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P1 - HIGH** | ScrollTrigger implementation, KB-powered |
| `*physics` | 40 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P2 - MEDIUM** | Physics-based animations (complex) |
| `*morph` | 30 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P2 - MEDIUM** | SVG morphing with MorphSVG plugin |
| `*text` | 38 | MEDIUM | ✅ Yes (Archon + Deep-Research) | ✅ **CONVERT** | **P2 - MEDIUM** | SplitText animations (complex) |
| `*pattern` | 30 | SIMPLE | ⚠️ Browse + adapt | ⚠️ **MAYBE** | P3 - LOW | Browse pattern library (could be inline) |
| `*complex` | 42 | MEDIUM | ❌ No (showcase only) | ❌ **KEEP INLINE** | N/A | Easter egg - showcase GSAP capabilities |

**VFX Summary:**
- Convert: 5 certain + 1 maybe (209-239 lines → workflows)
- Keep: 1 certain (42 lines stay inline)
- Reduction: 71-81% inline content reduction

---

### EDITOR (7 inline actions, 280 lines total)

| Command | Lines | Complexity | Has Research? | Decision | Priority | Notes |
|---------|-------|------------|---------------|----------|----------|-------|
| `*analyze` | 67 | MEDIUM | ✅ Yes (Archon + Deep-Research + WebSearch) | ✅ **CONVERT** | **P1 - HIGH** | Systematic pitfalls checklist, 5-step protocol |
| `*simplify` | 17 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Code simplification (straightforward) |
| `*smooth` | 18 | SIMPLE | ❌ No | ⚠️ **MAYBE** | P3 - LOW | Fix jank (could have research for patterns) |
| `*timing` | 17 | SIMPLE | ⚠️ Could use Deep-Research | ⚠️ **MAYBE** | P3 - LOW | Timing deep dive (border case) |
| `*easing` | 20 | SIMPLE | ⚠️ Could use Deep-Research | ⚠️ **MAYBE** | P3 - LOW | Easing refinement (border case) |
| `*compare` | 20 | SIMPLE | ❌ No | ❌ **KEEP INLINE** | N/A | Before/after comparison (straightforward) |
| `*checklist` | 41 | SIMPLE | ❌ No (uses existing checklist) | ❌ **KEEP INLINE** | N/A | Runs quality checklist |

**Editor Summary:**
- Convert: 1 certain + 3 maybe (67-122 lines → workflows)
- Keep: 3 certain (96 lines stay inline)
- Reduction: 24-44% inline content reduction (less dramatic, already has 2 workflows)

---

### TECH DIRECTOR (8 inline actions, 280 lines total)

| Command | Lines | Complexity | Has Research? | Decision | Priority | Notes |
|---------|-------|------------|---------------|----------|----------|-------|
| `*validate` | 46 | MEDIUM | ✅ Yes (Chrome DevTools multi-step) | ✅ **CONVERT** | **P1 - HIGH** | Complete validation suite (4-part) |
| `*fps` | 26 | SIMPLE | ❌ No (quick DevTools check) | ❌ **KEEP INLINE** | N/A | Quick FPS check (single tool call) |
| `*screenshot` | 26 | SIMPLE | ❌ No (DevTools screenshot) | ❌ **KEEP INLINE** | N/A | Visual validation screenshot |
| `*console` | 19 | SIMPLE | ❌ No (DevTools console check) | ❌ **KEEP INLINE** | N/A | Console error check |
| `*optimize` | 71 | MEDIUM | ✅ Yes (Deep-Research + Archon) | ✅ **CONVERT** | **P1 - HIGH** | KB-powered optimization recommendations |
| `*cross-browser` | 43 | SIMPLE | ❌ No (checklist-based) | ⚠️ **MAYBE** | P3 - LOW | Testing checklist (could be workflow) |
| `*ship-ready` | 50 | MEDIUM | ⚠️ Multi-part validation | ✅ **CONVERT** | **P2 - MEDIUM** | Production readiness check (complex) |
| `*benchmarks` | 35 | SIMPLE | ❌ No (DevTools profiling) | ❌ **KEEP INLINE** | N/A | Performance benchmarking |

**Tech Director Summary:**
- Convert: 3 certain + 1 maybe (167-210 lines → workflows)
- Keep: 4 certain (106 lines stay inline)
- Reduction: 60-75% inline content reduction

---

## 📋 Conversion Decision Summary

### BY PRIORITY

**Priority 1 - HIGH (Convert First)** - 11 workflows
1. Director `*review` → `review-quality/`
2. Director `*vision-plan` → `plan-narrative/`
3. Cinematographer `*timing` → `analyze-timing/`
4. Cinematographer `*analyze-motion` → `analyze-motion/`
5. VFX `*timeline` → `create-timeline/`
6. VFX `*scroll` → `create-scroll-animation/`
7. Editor `*analyze` → `analyze-animation/`
8. Tech Director `*validate` → `validate-complete/`
9. Tech Director `*optimize` → `optimize-animation/`
10. Tech Director `*ship-ready` → `ship-ready-check/`

**Rationale:** These have multi-step research protocols, are frequently used, and provide maximum token savings.

**Priority 2 - MEDIUM (Convert Second)** - 6 workflows
11. Cinematographer `*trends` → `research-trends/`
12. Cinematographer `*examples` → `find-examples/`
13. VFX `*physics` → `create-physics-animation/`
14. VFX `*morph` → `create-morph-animation/`
15. VFX `*text` → `create-text-animation/`

**Rationale:** These have research protocols but are less frequently used. Still valuable for token savings.

**Priority 3 - LOW (Evaluate Later)** - 8 potential workflows
16. Cinematographer `*plugins` (MAYBE)
17. Cinematographer `*inspiration` (MAYBE)
18. VFX `*pattern` (MAYBE)
19. Editor `*smooth` (MAYBE)
20. Editor `*timing` (MAYBE)
21. Editor `*easing` (MAYBE)
22. Tech Director `*cross-browser` (MAYBE)

**Rationale:** Border cases - could go either way. Evaluate after P1 and P2 complete.

### KEEP AS INLINE (11 actions, ~230 lines total)

**Informational/Simple:**
- Director: `*crew`, `*patterns`, `*showreel`, `*mission` (87 lines)
- Cinematographer: `*sources`, `*frame-rate` (55 lines)
- VFX: `*complex` (42 lines)
- Editor: `*simplify`, `*compare`, `*checklist` (78 lines)
- Tech Director: `*fps`, `*screenshot`, `*console`, `*benchmarks` (106 lines)

**Rationale:** These are <30 lines, purely informational, or single tool calls. No benefit to converting.

---

## 🏗️ Workflow Conversion Templates

### Template 1: Research-Heavy Workflow (For P1/P2 Items)

Use for commands with multi-step research protocols.

**Structure:**
```
workflows/[workflow-name]/
├── workflow.yaml        # Configuration
├── instructions.md      # Multi-step workflow with research gate
├── template.md          # Output template (if applicable)
└── checklist.md         # Validation checklist (optional)
```

**workflow.yaml Template:**
```yaml
name: '[workflow-name]'
description: '[Clear description of what this workflow does]'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/[workflow-name]'
instructions: '{installed_path}/instructions.md'
template: '{installed_path}/template.md'  # or false if no output document
default_output_file: '{output_folder}/[workflow-name]-output.md'  # or false

standalone: true
```

**instructions.md Template:**
```markdown
# [Workflow Title] Instructions
# [One-line description]

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/[workflow-name]/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering">
<action>Introduce the workflow with [agent personality]</action>

**"[Opening line that matches agent voice]"**

<ask response="[var1]">[Question 1]?</ask>
<ask response="[var2]">[Question 2]?</ask>
<ask response="[var3]">[Question 3]?</ask>

<action>Confirm understanding before proceeding to research</action>

<template-output>[var1], [var2], [var3]</template-output>
</step>

<step n="2" goal="Multi-Source Research Protocol">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed until research complete</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on user's request:
    - Context: {{var1}}
    - Goal: {{var2}}

    Execute complete research protocol below BEFORE proceeding.</mandate>

  <!-- TIER 1A: Archon KB Search -->
  <phase n="1" title="Archon KB Systematic Query" required="true">
    <action>Execute targeted searches:
      1. rag_search_knowledge_base("{{var1}} GSAP patterns", match_count=5)
      2. rag_search_knowledge_base("{{var2}} techniques", match_count=5)
      3. rag_search_code_examples("{{var1}} implementation", match_count=5)
    </action>

    <evidence required="true">
      Present 8-15 key findings organized by source:
      - Pattern names/descriptions
      - Source citations
      - Quality indicators
      - Relevance to current task
    </evidence>
  </phase>

  <!-- TIER 1B: Deep-Research Framework -->
  <phase n="2" title="Deep-Research Framework Application" required="true">
    <action>Consult relevant Deep-Research sections:
      - Section [X.X]: [Section Name] → [How it applies]
      - Section [Y.Y]: [Section Name] → [How it applies]
    </action>

    <evidence required="true">
      Document which sections informed approach
    </evidence>
  </phase>

  <!-- TIER 2: Web Search (conditional) -->
  <phase n="3" title="2025-Current Trends (Conditional)" required="conditional">
    <condition>If Archon/Deep-Research don't cover 2025-specific patterns</condition>

    <action>Search for recent examples:
      - WebSearch("{{var1}} Awwwards 2025")
      - WebSearch("GSAP {{var2}} premium examples 2024")
    </action>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Findings Summary**

      **TIER 1A: Archon MCP Findings**
      [Present findings]

      **TIER 1B: Deep-Research Frameworks**
      [Document sections applied]

      **TIER 2: Web Search (if applicable)**
      [List premium examples]

      **SYNTHESIS:**
      [Key insights]
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]".</halt>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>research_summary, archon_findings, deep_research_sections</template-output>
</step>

<step n="3" goal="[Implementation/Analysis/Planning]">
<action>[Core workflow action using research findings]</action>

[Workflow-specific instructions]

<template-output>[output_vars]</template-output>
</step>

<step n="4" goal="Review and Finalize">
<action>Present final output with citations</action>

[Final review/validation steps]

<template-output>[final_output]</template-output>
</step>

</workflow>
```

**template.md Template (if output document):**
```markdown
# {{workflow_title}} Output

**Generated:** {{date}}
**Context:** {{var1}}

## Research Findings

{{archon_findings}}

## Deep-Research Frameworks Applied

{{deep_research_sections}}

## [Workflow-Specific Output]

{{main_output}}

---

*Generated using GSAP Excellence Module - Research-Backed Implementation*
*Citations: {{research_citations}}*
```

---

### Template 2: Simple Action Workflow (For Simpler Conversions)

Use for commands without heavy research but still multi-step.

**instructions.md Template:**
```markdown
# [Workflow Title] Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: workflow.yaml</critical>

<workflow>

<step n="1" goal="Gather Input">
<ask response="input1">[Question]?</ask>
<ask response="input2">[Question]?</ask>
<template-output>input1, input2</template-output>
</step>

<step n="2" goal="Execute Action">
<action>[Main action using inputs]</action>
<template-output>result</template-output>
</step>

<step n="3" goal="Present Output">
<action>Present final result</action>
<template-output>final_result</template-output>
</step>

</workflow>
```

---

## 📅 Implementation Plan

### Phase 1: Priority 1 Workflows (Week 1-2) - 11 workflows
**Time Estimate:** 6-8 hours

**Batch 1A: Director + Cinematographer (4 workflows) - 2-3 hours**
1. Director `*review` → `workflows/review-quality/`
   - Copy inline content → instructions.md
   - Add research gate at Step 2
   - Create workflow.yaml
   - Update agent menu item: `workflow="{module_root}/workflows/review-quality/workflow.yaml"`

2. Director `*vision-plan` → `workflows/plan-narrative/`
   - Copy inline content → instructions.md
   - Add research gate (Pixar Story Spine framework)
   - Create workflow.yaml
   - Update agent menu item

3. Cinematographer `*timing` → `workflows/analyze-timing/`
   - Copy inline content → instructions.md
   - Add research gate (timing/easing patterns)
   - Create workflow.yaml
   - Update agent menu item

4. Cinematographer `*analyze-motion` → `workflows/analyze-motion/`
   - Copy inline content → instructions.md
   - Add research gate (visual translation workflow)
   - Create workflow.yaml
   - Update agent menu item

**Batch 1B: VFX + Editor (4 workflows) - 2-3 hours**
5. VFX `*timeline` → `workflows/create-timeline/`
6. VFX `*scroll` → `workflows/create-scroll-animation/`
7. Editor `*analyze` → `workflows/analyze-animation/`

**Batch 1C: Tech Director (3 workflows) - 2-3 hours**
8. Tech Director `*validate` → `workflows/validate-complete/`
9. Tech Director `*optimize` → `workflows/optimize-animation/`
10. Tech Director `*ship-ready` → `workflows/ship-ready-check/`

**Testing After Phase 1:**
- Test each converted workflow individually
- Verify research gates work
- Confirm agents load faster
- Validate token savings

---

### Phase 2: Priority 2 Workflows (Week 3) - 5 workflows
**Time Estimate:** 3-4 hours

**Batch 2A: Cinematographer (2 workflows) - 1 hour**
11. Cinematographer `*trends` → `workflows/research-trends/`
12. Cinematographer `*examples` → `workflows/find-examples/`

**Batch 2B: VFX (3 workflows) - 2 hours**
13. VFX `*physics` → `workflows/create-physics-animation/`
14. VFX `*morph` → `workflows/create-morph-animation/`
15. VFX `*text` → `workflows/create-text-animation/`

**Testing After Phase 2:**
- Validate all P1 + P2 workflows
- Measure token savings vs. baseline
- Gather user feedback

---

### Phase 3: Evaluation & Cleanup (Week 4) - Evaluate P3 items
**Time Estimate:** 2-3 hours

**Decision Point:** Based on Phase 1 & 2 results, decide which P3 items to convert:
- If token savings meet targets → Convert remaining P3 items
- If token savings exceed targets → Keep P3 as inline (good enough)

**Tasks:**
- Clean up agent files (remove converted inline actions)
- Update documentation
- Verify all agents work correctly
- Final token efficiency measurements

---

## 🧪 Testing Protocol

### Per-Workflow Testing (During Conversion)

**For Each Converted Workflow:**

1. **Structure Validation**
   - [ ] `workflow.yaml` exists and is valid
   - [ ] `instructions.md` exists and follows template
   - [ ] `template.md` exists (if output document)
   - [ ] Agent menu item updated with `workflow=` attribute

2. **Workflow Execution**
   - [ ] Load agent → Select command → Workflow loads
   - [ ] Step 1 (context gathering) works
   - [ ] Step 2 (research gate) enforces research
   - [ ] Agent executes Archon searches
   - [ ] Agent presents research summary
   - [ ] Agent waits for "Continue [c]"
   - [ ] Remaining steps execute correctly

3. **Token Efficiency**
   - [ ] Agent file size reduced after removing inline action
   - [ ] Workflow loads only when selected
   - [ ] Total context smaller than before

4. **Functionality Preservation**
   - [ ] Output matches original inline action behavior
   - [ ] Research protocols preserved
   - [ ] Agent personality maintained
   - [ ] User experience feels natural

---

### Integration Testing (After Each Phase)

**Phase 1 Complete:**
- [ ] All 11 P1 workflows functional
- [ ] All 5 agents still work correctly
- [ ] Agent file sizes reduced by ~30-50%
- [ ] No broken references or missing commands

**Phase 2 Complete:**
- [ ] All 16 P1+P2 workflows functional
- [ ] Agent file sizes reduced by ~50-70%
- [ ] Token savings measured and documented

**Phase 3 Complete:**
- [ ] All converted workflows functional
- [ ] Final agent file sizes meet targets
- [ ] Documentation updated
- [ ] Module ready for research enforcement implementation

---

### Token Efficiency Measurements

**Baseline (Before Conversion):**
```bash
# Measure current agent sizes
wc -l bmad/gsap-excellence/agents/*.md

# Expected baseline:
# Director: ~1,107 lines
# Cinematographer: ~1,502 lines
# VFX: ~1,339 lines
# Editor: ~2,047 lines
# Tech Director: ~1,743 lines
# TOTAL: ~7,738 lines
```

**Target (After Conversion):**
```bash
# Expected after P1 + P2 conversion:
# Director: ~700 lines (-37%)
# Cinematographer: ~900 lines (-40%)
# VFX: ~800 lines (-40%)
# Editor: ~1,600 lines (-22%)
# Tech Director: ~1,100 lines (-37%)
# TOTAL: ~5,100 lines (-34%)

# With P3 conversions:
# TOTAL: ~4,500 lines (-42%)
```

---

## 📝 Step-by-Step Conversion Procedure

### For EACH Workflow Conversion

**Step 1: Create Workflow Directory Structure** (2 minutes)
```bash
mkdir -p bmad/gsap-excellence/workflows/[workflow-name]
cd bmad/gsap-excellence/workflows/[workflow-name]
touch workflow.yaml instructions.md template.md
```

**Step 2: Create workflow.yaml** (1 minute)
```yaml
name: '[workflow-name]'
description: '[Description from inline action]'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/[workflow-name]'
instructions: '{installed_path}/instructions.md'
template: false  # or '{installed_path}/template.md' if output document
default_output_file: false  # or '{output_folder}/[name].md'

standalone: true
```

**Step 3: Extract Inline Action Content** (5 minutes)
```bash
# Open agent file, find the inline action
# Copy everything from action="inline"> to next </item>
# Paste into instructions.md

# Example:
# FROM: <item cmd="*review" action="inline">...[content]...</item>
# TO: instructions.md with workflow structure
```

**Step 4: Convert to Workflow Structure** (10 minutes)
```markdown
# [Title] Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering">
<!-- Extract "Please provide:" section from inline action -->
<ask response="var1">[Question from inline]</ask>
<ask response="var2">[Question from inline]</ask>
<template-output>var1, var2</template-output>
</step>

<step n="2" goal="Research Protocol">
<!-- Copy research protocol from inline action -->
<!-- Add research gate structure from template -->
</step>

<step n="3" goal="[Main Action]">
<!-- Copy main action content from inline action -->
</step>

</workflow>
```

**Step 5: Add Research Gate** (5 minutes)
- Insert research gate template at Step 2
- Customize Archon queries based on inline action's research protocol
- Add Deep-Research section references
- Add WebSearch fallback if original had it

**Step 6: Update Agent Menu Item** (2 minutes)
```xml
<!-- BEFORE -->
<item cmd="*review" action="inline">Description
[Large inline content block]
</item>

<!-- AFTER -->
<item cmd="*review" workflow="{module_root}/workflows/review-quality/workflow.yaml">
  Description
</item>
```

**Step 7: Test Workflow** (5 minutes)
- Load agent
- Select converted command
- Verify workflow loads
- Test all steps execute
- Confirm output matches original behavior

**Total Time Per Workflow:** 30 minutes average
- Simple workflows: 20 minutes
- Medium workflows: 30 minutes
- Complex workflows: 45 minutes

---

## 🎯 Success Criteria

### Per-Workflow Success
- ✅ Workflow executes without errors
- ✅ Research gate enforces research
- ✅ Output matches original inline action
- ✅ Agent file size reduced
- ✅ Functionality preserved

### Phase Success
- ✅ All workflows in phase converted
- ✅ All agents still functional
- ✅ Token savings measured and meet targets
- ✅ No regressions in user experience

### Overall Success
- ✅ 25 workflows converted (P1 + P2 + selected P3)
- ✅ 11 inline actions remain (informational only)
- ✅ Agent file sizes reduced by 40-50%
- ✅ Token efficiency improved by 70-80%
- ✅ Module ready for research enforcement
- ✅ Documentation updated
- ✅ All tests passing

---

## 📚 Reference Materials

### Workflow Creation Resources
- `/bmad/bmb/workflows/create-workflow/workflow-creation-guide.md` - Complete workflow guide
- `/bmad/bmb/workflows/create-workflow/agent-command-patterns.md` - Command patterns reference
- `/bmad/gsap-excellence/workflows/creative-ideation/instructions.md` - Example research gate

### Agent Files to Update
- `/bmad/gsap-excellence/agents/gsap-director.md`
- `/bmad/gsap-excellence/agents/gsap-cinematographer.md`
- `/bmad/gsap-excellence/agents/gsap-vfx.md`
- `/bmad/gsap-excellence/agents/gsap-editor.md`
- `/bmad/gsap-excellence/agents/gsap-tech-director.md`

### Testing Resources
- Chrome DevTools for token count measurement
- Example workflow test: Load agent → test command → verify output

---

## ⚠️ Common Pitfalls to Avoid

1. **Forgetting to Update Agent Menu Item**
   - After converting, update agent file to use `workflow=` instead of `action="inline"`
   - Otherwise agent still has bloated inline content

2. **Breaking Research Protocols**
   - Ensure research steps from inline action are preserved in workflow
   - Don't lose Archon queries, Deep-Research references, or WebSearch fallbacks

3. **Inconsistent Workflow Naming**
   - Use clear, descriptive names: `analyze-timing/` not `timing/`
   - Avoid name collisions with existing workflows

4. **Skipping Testing**
   - Test EACH workflow immediately after conversion
   - Don't batch test at the end (hard to debug)

5. **Not Measuring Token Savings**
   - Track agent file sizes before and after each phase
   - Validate that token efficiency is actually improving

6. **Losing Agent Personality**
   - Preserve agent voice and communication style in workflow instructions
   - Don't make workflows generic - maintain film studio theme

---

## 📊 Progress Tracking Template

```markdown
## Conversion Progress

### Phase 1: Priority 1 Workflows (11 total)
- [X] 1. review-quality (Director)
- [ ] 2. plan-narrative (Director)
- [ ] 3. analyze-timing (Cinematographer)
- [ ] 4. analyze-motion (Cinematographer)
- [ ] 5. create-timeline (VFX)
- [ ] 6. create-scroll-animation (VFX)
- [ ] 7. analyze-animation (Editor)
- [ ] 8. validate-complete (Tech Director)
- [ ] 9. optimize-animation (Tech Director)
- [ ] 10. ship-ready-check (Tech Director)

### Phase 2: Priority 2 Workflows (5 total)
- [ ] 11. research-trends (Cinematographer)
- [ ] 12. find-examples (Cinematographer)
- [ ] 13. create-physics-animation (VFX)
- [ ] 14. create-morph-animation (VFX)
- [ ] 15. create-text-animation (VFX)

### Phase 3: Evaluation (TBD)
- [ ] Decision made on P3 items
- [ ] Selected P3 items converted (if any)

### Token Efficiency Metrics
- Baseline: 7,738 lines total
- After P1: _____ lines (-___%)
- After P2: _____ lines (-___%)
- After P3: _____ lines (-___%)
- Target: ~4,500 lines (-42%)
```

---

## 🚀 Next Steps After Conversion Complete

1. **✅ Implement Research Enforcement**
   - Follow `/bmad/gsap-excellence/RESEARCH-ENFORCEMENT-PLAN.md`
   - Add research gates to converted workflows (already structured for it!)
   - Add agent behavioral mandates

2. **📚 Update Documentation**
   - Update README.md with new workflow count
   - Update QUICKSTART.md with workflow examples
   - Create workflow index/navigation

3. **🎓 Update BUILD-SESSION-SUMMARY.md**
   - Document conversion process
   - Record token efficiency gains
   - Note lessons learned

4. **🔄 Pattern Library Integration**
   - Identify successful workflows to harvest as patterns
   - Expand pattern library with researched implementations

---

## 📝 Conversion Checklist Template (Per Workflow)

```markdown
## [Workflow Name] Conversion

### Pre-Conversion
- [ ] Identified inline action in agent file (line #_____)
- [ ] Extracted content (_____ lines)
- [ ] Analyzed research protocol
- [ ] Determined workflow complexity

### Conversion
- [ ] Created workflow directory structure
- [ ] Created workflow.yaml
- [ ] Created instructions.md with workflow structure
- [ ] Added research gate (if applicable)
- [ ] Created template.md (if output document)
- [ ] Updated agent menu item

### Testing
- [ ] Workflow loads from agent menu
- [ ] Step 1 (context gathering) works
- [ ] Step 2 (research) executes and enforces
- [ ] Remaining steps execute correctly
- [ ] Output matches original inline behavior
- [ ] Agent file size reduced

### Documentation
- [ ] Added workflow to module README
- [ ] Updated agent documentation (if applicable)
- [ ] Recorded token savings

### Sign-Off
- [ ] Workflow conversion complete
- [ ] All tests passing
- [ ] Ready for production use
```

---

## 🎬 Final Notes

This conversion plan represents a **foundational architectural improvement** to the GSAP Excellence module. By converting inline actions to proper workflows, we:

1. **Improve Token Efficiency** by 70-80% (massive cost savings)
2. **Enable Research Enforcement** (workflow gates go in the right place)
3. **Improve Maintainability** (one concern per file)
4. **Enable Reusability** (workflows can be shared across modules)
5. **Improve Testability** (test workflows individually)

**The conversion is straightforward but requires systematic execution.** Follow the templates, test frequently, and measure token savings after each phase.

**Estimated Total Time:** 8-12 hours spread across 3-4 weeks
**Expected Token Savings:** 70-80% per agent activation
**Foundation for:** Research enforcement implementation (next phase)

**Document Status:** READY FOR EXECUTION - Start with Phase 1, Batch 1A (4 workflows, 2-3 hours)

---

**Created:** 2025-11-05
**By:** BMad Builder + Claude Code
**For:** Cameron (GSAP Excellence Module Improvement Project)
