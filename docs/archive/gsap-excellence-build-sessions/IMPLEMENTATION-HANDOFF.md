# GSAP Excellence Module - IMPLEMENTATION HANDOFF

**Date:** 2025-11-06
**Phase:** IMPLEMENTATION PHASE (Specification Phase Complete)
**Status:** Ready to implement 15 workflows across 5 agents
**Estimated Time:** 8-14 hours
**Critical Success Factor:** MANDATORY research enforcement validation

---

## 🎯 EXECUTIVE SUMMARY

### What You're Implementing

You are implementing 15 standalone GSAP workflows across 5 agents (Director, Cinematographer, VFX, Editor, Tech Director). All specifications are **100% complete and copy-paste ready**.

### Why This Matters

**The Problem:**
- GSAP Excellence module currently has 36 inline actions (1,244 lines)
- All inline actions load when agent activates (70-80% token waste)
- Research is optional/skippable (quality issues)
- No systematic KB usage

**The Solution:**
- Convert 15 P1/P2 workflows to standalone workflows
- **MANDATORY research gates** (blocking checkpoints - CANNOT SKIP)
- Workflows load ONLY when called (10.4% token savings)
- Systematic Archon KB + Deep-Research framework integration

**The Implementation:**
- Create 15 workflow directories
- Copy-paste 45 workflow files from specifications (workflow.yaml, instructions.md, template.md)
- Update 5 agent files (remove inline actions, add workflow references)
- **CRITICAL:** Validate research enforcement (if skippable = FAILED)

### Current Status

**Specification Phase:** ✅ 100% COMPLETE
- 5 agent specs created (~13,500 lines)
- 15 workflows specified (copy-paste ready)
- Pattern validated across all 5 agents
- Research gates integrated into all workflows

**Implementation Phase:** ⏳ READY TO BEGIN (this session)

---

## 📋 PROJECT CONTEXT (CRITICAL UNDERSTANDING)

### The Core Problem

**Token Waste (70-80%):**
```
Current: Agent loads ALL inline actions on activation
├─ Director: 174 lines inline (even if you only use 1 workflow)
├─ Cinematographer: 216 lines inline
├─ VFX: 294 lines inline
├─ Editor: 280 lines inline
└─ Tech Director: 280 lines inline
Total: 1,244 lines loaded every time, regardless of usage
```

**Research is Optional (Quality Issues):**
```
Current: Inline actions suggest research but don't enforce it
Result: Users skip research → low-quality outputs without KB backing
```

### The Solution Architecture

**Standalone Workflows (Load Only When Called):**
```
New: Agent loads ONLY when workflow called
├─ Agent activation: Load agent file only (10.4% smaller)
└─ Workflow call: Load specific workflow (only when needed)
Result: 803 lines saved on agent activation
```

**MANDATORY Research Gates (Quality Assurance):**
```
New: Research Gate is BLOCKING checkpoint in every workflow
├─ Step 1: Gather context
├─ Step 2: Research Gate (MANDATORY - CANNOT SKIP)
│   ├─ Archon KB queries (PRIMARY)
│   ├─ Deep-Research framework sections (SECONDARY)
│   └─ WebSearch fallback (TERTIARY)
└─ Step 3+: Implementation (ONLY after research complete)
Result: 100% research compliance, KB-backed outputs
```

### The Trade-Off (Acceptable)

**Token Cost Increases for Individual Workflow Use:**
- Inline action: ~50 lines
- Standalone workflow: ~800-1,800 lines (16-25x expansion)
- **Why acceptable:** Research enforcement + structured outputs + KB citations = higher quality

**Philosophy:** For P1/P2 workflows, research quality > token efficiency

---

## 📂 COMPLETE FILE INVENTORY

### Existing Files (DO NOT MODIFY)

**Agent Source Files:**
```
/bmad/gsap-excellence/agents/gsap-director.md (1,107 lines)
/bmad/gsap-excellence/agents/gsap-cinematographer.md (1,502 lines)
/bmad/gsap-excellence/agents/gsap-vfx.md (1,339 lines)
/bmad/gsap-excellence/agents/gsap-editor.md (2,047 lines)
/bmad/gsap-excellence/agents/gsap-tech-director.md (1,743 lines)
```

**Specification Documents (YOUR REFERENCE):**
```
/bmad/gsap-excellence/conversion-specs/DIRECTOR-WORKFLOW-CONVERSION-SPEC.md (1,256 lines)
/bmad/gsap-excellence/conversion-specs/CINEMATOGRAPHER-WORKFLOW-CONVERSION-SPEC.md (3,960 lines)
/bmad/gsap-excellence/conversion-specs/VFX-WORKFLOW-CONVERSION-SPEC.md (2,789 lines)
/bmad/gsap-excellence/conversion-specs/EDITOR-WORKFLOW-CONVERSION-SPEC.md (1,727 lines)
/bmad/gsap-excellence/conversion-specs/TECH-DIRECTOR-WORKFLOW-CONVERSION-SPEC.md (~2,500 lines)
```

**Session Context (FOR BACKGROUND):**
```
/bmad/gsap-excellence/SESSION-HANDOFF-2025-11-06-FINAL.md (comprehensive project summary)
/bmad/gsap-excellence/WORKFLOW-CONVERSION-PLAN.md (master plan)
```

### Files You Will Create (45 total)

**Workflow Directories (15):**
```
/bmad/gsap-excellence/workflows/review-quality/
/bmad/gsap-excellence/workflows/plan-narrative/
/bmad/gsap-excellence/workflows/analyze-timing/
/bmad/gsap-excellence/workflows/analyze-motion/
/bmad/gsap-excellence/workflows/research-trends/
/bmad/gsap-excellence/workflows/find-examples/
/bmad/gsap-excellence/workflows/create-timeline/
/bmad/gsap-excellence/workflows/create-scroll-animation/
/bmad/gsap-excellence/workflows/create-physics-animation/
/bmad/gsap-excellence/workflows/create-morph-animation/
/bmad/gsap-excellence/workflows/create-text-animation/
/bmad/gsap-excellence/workflows/analyze-animation/
/bmad/gsap-excellence/workflows/validate-complete/
/bmad/gsap-excellence/workflows/optimize-animation/
/bmad/gsap-excellence/workflows/ship-ready-check/
```

**Workflow Files (45 total):**
```
Each workflow directory contains 3 files:
├─ workflow.yaml (configuration)
├─ instructions.md (step-by-step workflow with MANDATORY research gates)
└─ template.md (output document structure, if applicable)

Some workflows don't need template.md (e.g., VFX workflows generate code directly)
Estimated: ~40-42 files (some workflows have no template.md)
```

### Files You Will Modify (5)

**Agent Files (Remove inline, add workflow references):**
```
/bmad/gsap-excellence/agents/gsap-director.md
/bmad/gsap-excellence/agents/gsap-cinematographer.md
/bmad/gsap-excellence/agents/gsap-vfx.md
/bmad/gsap-excellence/agents/gsap-editor.md
/bmad/gsap-excellence/agents/gsap-tech-director.md
```

---

## 🚀 IMPLEMENTATION PLAN (STEP-BY-STEP)

### Overview of Phases

**Phase 1:** Create workflow directories (10 minutes)
**Phase 2:** Implement Director workflows (45 minutes)
**Phase 3:** Implement Cinematographer workflows (1.5 hours)
**Phase 4:** Implement VFX workflows (2 hours)
**Phase 5:** Implement Editor workflow (30 minutes)
**Phase 6:** Implement Tech Director workflows (1.5 hours)
**Phase 7:** Update all agent files (1-2 hours)
**Phase 8:** Testing (2-4 hours)
**Phase 9:** Research enforcement validation (1-2 hours) **CRITICAL**

**Total: 8-14 hours**

---

### PHASE 1: Create Workflow Directories (10 minutes)

**Commands:**
```bash
cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/

# Director (2)
mkdir -p review-quality plan-narrative

# Cinematographer (4)
mkdir -p analyze-timing analyze-motion research-trends find-examples

# VFX (5)
mkdir -p create-timeline create-scroll-animation create-physics-animation create-morph-animation create-text-animation

# Editor (1)
mkdir -p analyze-animation

# Tech Director (3)
mkdir -p validate-complete optimize-animation ship-ready-check

# Verify all directories created
ls -la
```

**Verification:**
```bash
# Should see 15 directories
ls -d */ | wc -l
# Expected output: 15
```

---

### PHASE 2: Implement Director Workflows (45 minutes)

#### Workflow 1: review-quality (20 minutes)

**Step 1: Read the spec to find the files**
```bash
# Open this file and locate the "review-quality" workflow section
nano /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/conversion-specs/DIRECTOR-WORKFLOW-CONVERSION-SPEC.md
```

**Step 2: Create workflow.yaml**
```bash
nano /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/review-quality/workflow.yaml
```
- Copy the **COMPLETE** workflow.yaml from Director spec (search for "### Complete workflow.yaml" under review-quality section)
- Paste into file
- Save (Ctrl+X, Y, Enter)

**Step 3: Create instructions.md**
```bash
nano /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/review-quality/instructions.md
```
- Copy the **COMPLETE** instructions.md from Director spec (search for "### Complete instructions.md" under review-quality section)
- Paste into file
- **VERIFY:** Look for `<critical>MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP</critical>` in Step 2
- Save

**Step 4: Create template.md**
```bash
nano /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/review-quality/template.md
```
- Copy the **COMPLETE** template.md from Director spec (search for "### Complete template.md" under review-quality section)
- Paste into file
- Save

**Step 5: Verify files created**
```bash
ls -la /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/review-quality/
# Should see: workflow.yaml, instructions.md, template.md
```

#### Workflow 2: plan-narrative (25 minutes)

**Repeat same process as review-quality:**
1. Open Director spec
2. Find "plan-narrative" section
3. Copy workflow.yaml → `/workflows/plan-narrative/workflow.yaml`
4. Copy instructions.md → `/workflows/plan-narrative/instructions.md`
5. Copy template.md → `/workflows/plan-narrative/template.md`
6. Verify files created

**Director Phase Complete Checklist:**
- [ ] review-quality/ has 3 files (workflow.yaml, instructions.md, template.md)
- [ ] plan-narrative/ has 3 files (workflow.yaml, instructions.md, template.md)
- [ ] Both instructions.md have MANDATORY research gates in Step 2

---

### PHASE 3: Implement Cinematographer Workflows (1.5 hours)

**Spec File:** `/bmad/gsap-excellence/conversion-specs/CINEMATOGRAPHER-WORKFLOW-CONVERSION-SPEC.md`

#### Workflow 1: analyze-timing (20 minutes)

**Process:**
1. Open Cinematographer spec
2. Find "analyze-timing" workflow section
3. Create `/workflows/analyze-timing/workflow.yaml` (copy from spec)
4. Create `/workflows/analyze-timing/instructions.md` (copy from spec)
5. Create `/workflows/analyze-timing/template.md` (copy from spec)

**Critical Check:**
- instructions.md Step 2 must have MANDATORY research gate
- Deep-Research Section 1.1 (Timing Principles) must be referenced

#### Workflow 2: analyze-motion (20 minutes)

**Process:**
1. Find "analyze-motion" in Cinematographer spec
2. Create `/workflows/analyze-motion/workflow.yaml`
3. Create `/workflows/analyze-motion/instructions.md`
4. Create `/workflows/analyze-motion/template.md`

**Critical Check:**
- Deep-Research Section 1.2 (Visual Inspiration Translation) must be referenced
- 5-step translation framework must be in instructions.md

#### Workflow 3: research-trends (25 minutes)

**Process:**
1. Find "research-trends" in Cinematographer spec
2. Create `/workflows/research-trends/workflow.yaml`
3. Create `/workflows/research-trends/instructions.md`
4. Create `/workflows/research-trends/template.md`

**Critical Check:**
- WebSearch is PRIMARY research (not Archon) for this workflow
- 2024-2025 trend focus must be explicit

#### Workflow 4: find-examples (25 minutes)

**Process:**
1. Find "find-examples" in Cinematographer spec
2. Create `/workflows/find-examples/workflow.yaml`
3. Create `/workflows/find-examples/instructions.md`
4. Create `/workflows/find-examples/template.md`

**Critical Check:**
- Archon + WebSearch combined research protocol
- CodePen/Awwwards pattern analysis

**Cinematographer Phase Complete Checklist:**
- [ ] analyze-timing/ has 3 files
- [ ] analyze-motion/ has 3 files
- [ ] research-trends/ has 3 files
- [ ] find-examples/ has 3 files
- [ ] All 4 workflows have MANDATORY research gates

---

### PHASE 4: Implement VFX Workflows (2 hours)

**Spec File:** `/bmad/gsap-excellence/conversion-specs/VFX-WORKFLOW-CONVERSION-SPEC.md`

**IMPORTANT NOTE:** VFX workflows generate code directly, so some may NOT need template.md. Check each workflow spec section.

#### Workflow 1: create-timeline (30 minutes)

**Process:**
1. Open VFX spec
2. Find "create-timeline" workflow section
3. Create `/workflows/create-timeline/workflow.yaml`
4. Create `/workflows/create-timeline/instructions.md`
5. **Check spec:** Does this workflow have template.md? (It might not - VFX generates code)

**Critical Check:**
- Deep-Research Sections 2.2, 2.3, 3.1, 3.7 must be referenced
- Framework integration (React/Next.js/Vue) must be included
- MANDATORY research gate in Step 2

#### Workflow 2: create-scroll-animation (25 minutes)

**Process:**
1. Find "create-scroll-animation" in VFX spec
2. Create `/workflows/create-scroll-animation/workflow.yaml`
3. Create `/workflows/create-scroll-animation/instructions.md`
4. Check if template.md needed (probably not)

**Critical Check:**
- Deep-Research Sections 3.2, 3.3 (Scroll Reveals, Parallax)
- 5 effect types: reveal, parallax, scrub, pin, horizontal

#### Workflow 3: create-physics-animation (20 minutes)

**Process:**
1. Find "create-physics-animation" in VFX spec
2. Create `/workflows/create-physics-animation/workflow.yaml`
3. Create `/workflows/create-physics-animation/instructions.md`

**Critical Check:**
- InertiaPlugin FREE in GSAP 3.13+ (must be documented)
- 4 physics types: spring, inertia, gravity, custom

#### Workflow 4: create-morph-animation (20 minutes)

**Process:**
1. Find "create-morph-animation" in VFX spec
2. Create `/workflows/create-morph-animation/workflow.yaml`
3. Create `/workflows/create-morph-animation/instructions.md`

**Critical Check:**
- **MorphSVG plugin FREE in GSAP 3.13+** (emphasize this)
- Link to GSAP 3.13 release notes

#### Workflow 5: create-text-animation (25 minutes)

**Process:**
1. Find "create-text-animation" in VFX spec
2. Create `/workflows/create-text-animation/workflow.yaml`
3. Create `/workflows/create-text-animation/instructions.md`

**Critical Check:**
- **SplitText plugin FREE in GSAP 3.13+** (emphasize this)
- 4 animation types: chars, words, lines, advanced

**VFX Phase Complete Checklist:**
- [ ] create-timeline/ has workflow.yaml + instructions.md (+ template.md if spec has it)
- [ ] create-scroll-animation/ has workflow.yaml + instructions.md
- [ ] create-physics-animation/ has workflow.yaml + instructions.md
- [ ] create-morph-animation/ has workflow.yaml + instructions.md
- [ ] create-text-animation/ has workflow.yaml + instructions.md
- [ ] All 5 workflows have MANDATORY research gates
- [ ] Premium plugins FREE messaging present (MorphSVG, SplitText, InertiaPlugin)

---

### PHASE 5: Implement Editor Workflow (30 minutes)

**Spec File:** `/bmad/gsap-excellence/conversion-specs/EDITOR-WORKFLOW-CONVERSION-SPEC.md`

#### Workflow 1: analyze-animation (30 minutes)

**Process:**
1. Open Editor spec
2. Find "analyze-animation" workflow section
3. Create `/workflows/analyze-animation/workflow.yaml`
4. Create `/workflows/analyze-animation/instructions.md`
5. Create `/workflows/analyze-animation/template.md`

**Critical Check:**
- **10-point pitfalls framework** (Deep-Research Sections 8.1-8.10)
- Each pitfall has dedicated Archon query
- Severity ratings: HIGH/MEDIUM/LOW
- This is **PROACTIVE** code review (NOT reactive debugging like debug-animation)

**Editor Phase Complete Checklist:**
- [ ] analyze-animation/ has 3 files (workflow.yaml, instructions.md, template.md)
- [ ] 10-point framework present in instructions.md (all sections 8.1-8.10)
- [ ] MANDATORY research gate enforces ALL 10 pitfalls analysis
- [ ] Proactive vs reactive distinction clear

---

### PHASE 6: Implement Tech Director Workflows (1.5 hours)

**Spec File:** `/bmad/gsap-excellence/conversion-specs/TECH-DIRECTOR-WORKFLOW-CONVERSION-SPEC.md`

#### Workflow 1: validate-complete (40 minutes)

**Process:**
1. Open Tech Director spec
2. Find "validate-complete" workflow section
3. Create `/workflows/validate-complete/workflow.yaml`
4. Create `/workflows/validate-complete/instructions.md`
5. Create `/workflows/validate-complete/template.md`

**Critical Check:**
- **Most extensive Chrome DevTools MCP integration** (7 tools)
- Chrome DevTools tools documented in workflow.yaml:
  - take_screenshot, list_console_messages, evaluate_script
  - emulate_cpu, emulate_network
  - performance_start_trace, performance_stop_trace
- 5-part validation: Performance, Visual, Console, Accessibility, Code Quality
- Deep-Research: 5.5, 5.6, 6.1-6.3

#### Workflow 2: optimize-animation (45 minutes)

**Process:**
1. Find "optimize-animation" in Tech Director spec
2. Create `/workflows/optimize-animation/workflow.yaml`
3. Create `/workflows/optimize-animation/instructions.md`
4. Create `/workflows/optimize-animation/template.md`

**Critical Check:**
- **Most research-intensive workflow in GSAP Excellence**
- **ALL 6 Deep-Research sections REQUIRED** (5.1-5.6):
  - 5.1: GPU Rule
  - 5.2: Main Thread Budget
  - 5.3: Debugging Jank
  - 5.4: Memory Management
  - 5.5: 60fps Optimization
  - 5.6: WebGL/Canvas Alternatives
- 6 Archon queries (most of any workflow)
- Accessibility preservation cross-check (6.1, 6.2)

#### Workflow 3: ship-ready-check (30 minutes)

**Process:**
1. Find "ship-ready-check" in Tech Director spec
2. Create `/workflows/ship-ready-check/workflow.yaml`
3. Create `/workflows/ship-ready-check/instructions.md`
4. Create `/workflows/ship-ready-check/template.md`

**Critical Check:**
- 6-part production gate structure
- GREEN LIGHT / YELLOW LIGHT / RED LIGHT verdicts
- Blocker identification with required fixes
- Deep-Research: 6.1-6.3 (Browser Compatibility, Accessibility, Production Readiness)

**Tech Director Phase Complete Checklist:**
- [ ] validate-complete/ has 3 files
- [ ] optimize-animation/ has 3 files
- [ ] ship-ready-check/ has 3 files
- [ ] validate-complete has Chrome DevTools MCP tools documented
- [ ] optimize-animation has ALL 6 Deep-Research sections (5.1-5.6)
- [ ] ship-ready-check has GREEN/YELLOW/RED verdict logic
- [ ] All 3 workflows have MANDATORY research gates

---

### PHASE 7: Update All Agent Files (1-2 hours)

**CRITICAL:** You are removing inline actions and adding workflow references. Be VERY careful with line numbers and XML structure.

#### Agent 1: Director (20 minutes)

**File:** `/bmad/gsap-excellence/agents/gsap-director.md`

**Step 1: Backup the file**
```bash
cp /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/gsap-director.md \
   /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/gsap-director.md.backup
```

**Step 2: Open Director spec to find exact line numbers**
```bash
nano /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/conversion-specs/DIRECTOR-WORKFLOW-CONVERSION-SPEC.md
```

Look for the "Agent Menu Update" section for each workflow. It shows:
- BEFORE (current inline action with line numbers)
- AFTER (workflow reference)

**Step 3: Edit the agent file**
```bash
nano /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/gsap-director.md
```

**For review-quality workflow:**
1. Find the inline action (search for `cmd="*review-quality"`)
2. Delete the ENTIRE inline action (from `<item cmd="*review-quality" action="inline">` to `</item>`)
3. Replace with workflow reference from spec:
```xml
    <item cmd="*review-quality" workflow="{module_root}/workflows/review-quality/workflow.yaml">
      Comprehensive animation review using research-backed quality frameworks
    </item>
```

**For plan-narrative workflow:**
1. Find the inline action (search for `cmd="*plan-narrative"`)
2. Delete the ENTIRE inline action
3. Replace with workflow reference from spec

**Step 4: Verify changes**
```bash
# Count lines before and after
wc -l /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/gsap-director.md.backup
wc -l /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/gsap-director.md
# Should see ~170 fewer lines in new file
```

#### Agent 2: Cinematographer (25 minutes)

**Same process as Director:**
1. Backup file
2. Open Cinematographer spec to find line numbers
3. Remove 4 inline actions (analyze-timing, analyze-motion, research-trends, find-examples)
4. Add 4 workflow references
5. Verify ~208 fewer lines

#### Agent 3: VFX (25 minutes)

**Same process:**
1. Backup file
2. Open VFX spec to find line numbers
3. Remove 5 inline actions (timeline, scroll, physics, morph, text)
4. Add 5 workflow references
5. Verify ~199 fewer lines

#### Agent 4: Editor (20 minutes)

**IMPORTANT:** Editor has 7 inline actions but only 1 converts.

**Process:**
1. Backup file
2. Open Editor spec to find line numbers
3. Remove ONLY `*analyze` inline action (lines 1792-1858, 67 lines)
4. Add workflow reference for `*analyze`
5. **KEEP the other 6 inline actions** (*simplify, *smooth, *timing, *easing, *compare, *checklist)
6. Verify ~65 fewer lines (not 280)

#### Agent 5: Tech Director (20 minutes)

**IMPORTANT:** Tech Director has 8 inline actions but only 3 convert.

**Process:**
1. Backup file
2. Open Tech Director spec to find line numbers
3. Remove 3 inline actions: `*validate`, `*optimize`, `*ship-ready`
4. Add 3 workflow references
5. **KEEP the other 5 inline actions** (*fps, *screenshot, *console, *cross-browser, *benchmarks)
6. Verify ~161 fewer lines (not 280)

**Agent Update Phase Complete Checklist:**
- [ ] All 5 agent files backed up (.backup extension)
- [ ] Director: 2 inline actions removed, 2 workflow references added (~170 lines saved)
- [ ] Cinematographer: 4 inline actions removed, 4 workflow references added (~208 lines saved)
- [ ] VFX: 5 inline actions removed, 5 workflow references added (~199 lines saved)
- [ ] Editor: 1 inline action removed, 1 workflow reference added, 6 kept inline (~65 lines saved)
- [ ] Tech Director: 3 inline actions removed, 3 workflow references added, 5 kept inline (~161 lines saved)
- [ ] Total lines saved: ~803 lines (10.4% reduction)
- [ ] All agent files still have valid XML structure

---

### PHASE 8: Testing (2-4 hours)

**IMPORTANT:** This is basic functionality testing. Research enforcement validation is Phase 9 (separate and CRITICAL).

#### Test Strategy

For each workflow, test:
1. Workflow activation (does it load?)
2. Context gathering (Step 1 works?)
3. Research gate triggers (Step 2 appears?)
4. Basic workflow completion

**DO NOT test research enforcement yet** - that's Phase 9.

#### Test Plan by Agent

**Director (30 minutes):**
```bash
# Test review-quality
# Activate Director agent
# Call /review-quality (or equivalent menu item *review-quality)
# Verify:
# - Workflow loads
# - Asks for animation code
# - Shows research gate (Step 2)
# - Can proceed through workflow

# Repeat for plan-narrative
```

**Cinematographer (40 minutes):**
- Test analyze-timing (10 min)
- Test analyze-motion (10 min)
- Test research-trends (10 min)
- Test find-examples (10 min)

**VFX (50 minutes):**
- Test create-timeline (10 min)
- Test create-scroll-animation (10 min)
- Test create-physics-animation (10 min)
- Test create-morph-animation (10 min)
- Test create-text-animation (10 min)

**Editor (15 minutes):**
- Test analyze-animation (15 min)
- Verify 10-point framework appears

**Tech Director (45 minutes):**
- Test validate-complete (20 min)
  - Verify Chrome DevTools MCP tools documented
  - Test without Chrome DevTools MCP (should handle gracefully)
- Test optimize-animation (15 min)
  - Verify all 6 Deep-Research sections mentioned
- Test ship-ready-check (10 min)
  - Verify 6-part gate structure

**Basic Testing Phase Complete Checklist:**
- [ ] All 15 workflows load successfully
- [ ] All workflows show Step 1 (context gathering)
- [ ] All workflows show Step 2 (research gate)
- [ ] No XML parsing errors
- [ ] No file not found errors
- [ ] Agent files still load correctly

---

### PHASE 9: Research Enforcement Validation (1-2 hours) **CRITICAL**

**THIS IS THE MOST IMPORTANT PHASE.** If research can be skipped, the entire implementation has FAILED.

#### Why This Matters

The ENTIRE POINT of this project is to make research MANDATORY. If users can skip research gates, we've accomplished nothing.

#### Test Protocol (MUST DO FOR EVERY WORKFLOW)

**For EACH of the 15 workflows:**

**Test 1: Attempt to Skip Research Gate**
```
1. Activate workflow
2. Complete Step 1 (context gathering)
3. When Step 2 (Research Gate) appears, try to skip it
4. Attempt to proceed directly to Step 3

Expected Behavior: WORKFLOW HALTS
Expected Message: "MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP"
Expected Result: CANNOT proceed to Step 3 until research complete

If workflow allows skipping: IMPLEMENTATION FAILED
```

**Test 2: Verify Research Gate Content**
```
1. Enter Step 2 (Research Gate)
2. Verify ALL required elements present:
   - Archon queries listed (with rag_search_knowledge_base())
   - Deep-Research sections listed
   - WebSearch fallback (if applicable)
   - Research validation checklist

Expected: All research components present
If missing: Workflow spec not copied correctly
```

**Test 3: Complete Research, Verify Continuation**
```
1. Complete Step 2 (execute all research)
2. Mark research complete
3. Attempt to proceed to Step 3

Expected Behavior: Workflow allows continuation
If blocked: Research gate too strict (should allow after completion)
```

#### Validation Matrix (Complete This)

| Workflow | Skip Test | Content Test | Complete Test | Status |
|----------|-----------|--------------|---------------|--------|
| review-quality | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| plan-narrative | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| analyze-timing | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| analyze-motion | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| research-trends | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| find-examples | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| create-timeline | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| create-scroll-animation | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| create-physics-animation | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| create-morph-animation | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| create-text-animation | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| analyze-animation | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| validate-complete | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| optimize-animation | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |
| ship-ready-check | ☐ BLOCKS | ☐ COMPLETE | ☐ ALLOWS | ☐ PASS/FAIL |

**ALL 15 MUST PASS** (Skip Test = BLOCKS, Content Test = COMPLETE, Complete Test = ALLOWS)

**If ANY workflow fails:** Implementation FAILED - Go back to that workflow's instructions.md and fix research gate

#### Special Cases to Test

**optimize-animation (Tech Director):**
- MUST enforce ALL 6 Deep-Research sections (5.1-5.6)
- Cannot skip any section
- This is the most comprehensive research gate - MUST be bulletproof

**analyze-animation (Editor):**
- MUST enforce all 10 pitfalls (8.1-8.10)
- Each pitfall must have dedicated Archon query
- Cannot skip any pitfall

**Research Enforcement Phase Complete Checklist:**
- [ ] All 15 workflows tested for skip attempts
- [ ] All 15 workflows BLOCK skip attempts (if not: FAILED)
- [ ] All 15 workflows have complete research gate content
- [ ] All 15 workflows allow continuation after research complete
- [ ] Validation matrix 100% complete
- [ ] optimize-animation enforces ALL 6 sections (5.1-5.6)
- [ ] analyze-animation enforces all 10 pitfalls (8.1-8.10)

---

## 🚨 CRITICAL WARNINGS

### 1. Research Enforcement is NON-NEGOTIABLE

**If research can be skipped in ANY workflow, the ENTIRE implementation has FAILED.**

This is not hyperbole. The entire project exists to enforce research. Without enforcement, we've accomplished nothing except moving code around.

### 2. Don't Skip the Research Enforcement Phase

You might be tempted to skip Phase 9 because "I copied everything correctly, it should work."

**DON'T.** Test every single workflow. This is where implementation mistakes are caught.

### 3. Line Numbers May Shift

When you remove inline actions from agent files, line numbers shift. Use search (Ctrl+W in nano) to find commands by name (`cmd="*workflow-name"`), not by line number.

### 4. XML Structure is Fragile

One missing `</item>` tag breaks the entire agent. After editing, verify:
```bash
# Check for balanced XML tags
grep -o '<item' /path/to/agent.md | wc -l
grep -o '</item>' /path/to/agent.md | wc -l
# These two numbers should match
```

### 5. Template.md May Not Exist

Some VFX workflows generate code directly and don't need template.md. Check the spec before creating. If spec doesn't have template.md section, don't create it.

### 6. Backup Everything Before Editing

**ALWAYS backup agent files before editing.** You're removing 65-208 lines per agent. Mistakes happen.

```bash
# Backup all agent files
cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/
for file in *.md; do
  cp "$file" "$file.backup"
done
```

### 7. Chrome DevTools MCP is Required for validate-complete

The validate-complete workflow (Tech Director) requires Chrome DevTools MCP. If it's not available, the workflow should handle gracefully, but it won't provide full validation.

### 8. Don't Modify Specs During Implementation

The spec documents are your source of truth. Don't edit them. Copy from them.

### 9. Premium Plugins Are FREE in GSAP 3.13+

Make sure VFX workflows (morph, text, physics) emphasize that premium plugins (MorphSVG, SplitText, InertiaPlugin) are FREE in GSAP 3.13+. Users often think they're paid-only.

### 10. Token Efficiency Will Seem Worse

When you use a workflow, token usage will INCREASE (16-25x expansion). This is acceptable and expected. The win is on agent activation without workflows.

---

## ✅ SUCCESS CRITERIA

### Phase-by-Phase Success Criteria

**Phase 1 Success:**
- [ ] 15 directories created in /workflows/
- [ ] No errors during directory creation

**Phase 2 Success:**
- [ ] Director: 2 workflows, 6 files total
- [ ] All files have content (not empty)
- [ ] Both workflows have MANDATORY research gates

**Phase 3 Success:**
- [ ] Cinematographer: 4 workflows, 12 files total
- [ ] All files have content
- [ ] All 4 workflows have MANDATORY research gates

**Phase 4 Success:**
- [ ] VFX: 5 workflows, ~13-15 files (some may not have template.md)
- [ ] All files have content
- [ ] All 5 workflows have MANDATORY research gates
- [ ] Premium plugins FREE messaging present

**Phase 5 Success:**
- [ ] Editor: 1 workflow, 3 files
- [ ] 10-point framework present (8.1-8.10)
- [ ] MANDATORY research gate enforces all 10 pitfalls

**Phase 6 Success:**
- [ ] Tech Director: 3 workflows, 9 files
- [ ] validate-complete: Chrome DevTools MCP documented
- [ ] optimize-animation: ALL 6 Deep-Research sections (5.1-5.6)
- [ ] ship-ready-check: GREEN/YELLOW/RED verdicts

**Phase 7 Success:**
- [ ] All 5 agent files backed up
- [ ] All 5 agent files edited correctly
- [ ] Total ~803 lines removed
- [ ] All agent files have valid XML
- [ ] Workflow references added correctly

**Phase 8 Success:**
- [ ] All 15 workflows load successfully
- [ ] No XML parsing errors
- [ ] All workflows show research gates
- [ ] Basic functionality works

**Phase 9 Success (MOST CRITICAL):**
- [ ] All 15 workflows BLOCK skip attempts
- [ ] All 15 workflows have complete research content
- [ ] All 15 workflows allow continuation after research
- [ ] Validation matrix 100% complete

### Overall Project Success Criteria

**Implementation Phase Complete When:**
- ✅ All 15 workflows implemented (45 files created)
- ✅ All 5 agent files updated (~803 lines removed)
- ✅ All workflows tested (basic functionality)
- ✅ **ALL 15 WORKFLOWS ENFORCE RESEARCH** (cannot skip)
- ✅ Token efficiency measured (10.4% savings on agent activation)
- ✅ No XML parsing errors
- ✅ No file not found errors
- ✅ Chrome DevTools MCP integration working (validate-complete)
- ✅ Deep-Research frameworks applied (optimize-animation 5.1-5.6)

---

## 🔄 ROLLBACK PLAN (IF IMPLEMENTATION FAILS)

### If Research Enforcement Fails

**Problem:** Users can skip research gates

**Rollback:**
1. Don't rollback yet
2. Fix the specific workflow's instructions.md
3. Add explicit blocking logic to Step 2
4. Re-test that workflow only
5. Continue with other workflows

### If Agent Files Break

**Problem:** XML parsing errors after editing agent files

**Rollback:**
```bash
# Restore from backup
cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/
cp gsap-director.md.backup gsap-director.md
cp gsap-cinematographer.md.backup gsap-cinematographer.md
cp gsap-vfx.md.backup gsap-vfx.md
cp gsap-editor.md.backup gsap-editor.md
cp gsap-tech-director.md.backup gsap-tech-director.md
```

**Then:**
1. Re-edit the broken agent file more carefully
2. Verify XML balance after each edit
3. Test immediately after editing

### If Workflows Don't Load

**Problem:** "File not found" errors when calling workflows

**Diagnosis:**
```bash
# Check workflow.yaml exists and paths are correct
cat /path/to/workflow/workflow.yaml | grep "installed_path"
# Verify the path matches actual directory
```

**Fix:**
1. Check workflow.yaml paths (installed_path, template, instructions)
2. Ensure all paths use {module_root} correctly
3. Verify files exist at specified paths

### Complete Rollback (Nuclear Option)

**Only if everything is broken:**
```bash
# Restore all agent files
cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/agents/
cp gsap-director.md.backup gsap-director.md
cp gsap-cinematographer.md.backup gsap-cinematographer.md
cp gsap-vfx.md.backup gsap-vfx.md
cp gsap-editor.md.backup gsap-editor.md
cp gsap-tech-director.md.backup gsap-tech-director.md

# Delete all workflow directories
cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/
rm -rf */

# Start over from Phase 1
```

---

## 📊 PROGRESS TRACKING

### Implementation Checklist

**Phase 1: Directories (10 min)**
- [ ] 15 directories created
- [ ] Verification passed

**Phase 2: Director (45 min)**
- [ ] review-quality workflow (3 files)
- [ ] plan-narrative workflow (3 files)

**Phase 3: Cinematographer (1.5 hrs)**
- [ ] analyze-timing workflow (3 files)
- [ ] analyze-motion workflow (3 files)
- [ ] research-trends workflow (3 files)
- [ ] find-examples workflow (3 files)

**Phase 4: VFX (2 hrs)**
- [ ] create-timeline workflow (2-3 files)
- [ ] create-scroll-animation workflow (2-3 files)
- [ ] create-physics-animation workflow (2-3 files)
- [ ] create-morph-animation workflow (2-3 files)
- [ ] create-text-animation workflow (2-3 files)

**Phase 5: Editor (30 min)**
- [ ] analyze-animation workflow (3 files)

**Phase 6: Tech Director (1.5 hrs)**
- [ ] validate-complete workflow (3 files)
- [ ] optimize-animation workflow (3 files)
- [ ] ship-ready-check workflow (3 files)

**Phase 7: Agent Updates (1-2 hrs)**
- [ ] Director agent updated
- [ ] Cinematographer agent updated
- [ ] VFX agent updated
- [ ] Editor agent updated
- [ ] Tech Director agent updated

**Phase 8: Testing (2-4 hrs)**
- [ ] All workflows load
- [ ] Basic functionality tested
- [ ] No errors

**Phase 9: Research Enforcement (1-2 hrs) CRITICAL**
- [ ] All 15 workflows tested for skip attempts
- [ ] Validation matrix 100% complete
- [ ] ALL workflows BLOCK skip attempts

### Time Tracking

**Estimated Total:** 8-14 hours
**Actual Time:** ___ hours

**Started:** ___________
**Completed:** ___________

---

## 📖 QUICK REFERENCE

### File Paths (Copy These)

**Spec Files:**
```
/bmad/gsap-excellence/conversion-specs/DIRECTOR-WORKFLOW-CONVERSION-SPEC.md
/bmad/gsap-excellence/conversion-specs/CINEMATOGRAPHER-WORKFLOW-CONVERSION-SPEC.md
/bmad/gsap-excellence/conversion-specs/VFX-WORKFLOW-CONVERSION-SPEC.md
/bmad/gsap-excellence/conversion-specs/EDITOR-WORKFLOW-CONVERSION-SPEC.md
/bmad/gsap-excellence/conversion-specs/TECH-DIRECTOR-WORKFLOW-CONVERSION-SPEC.md
```

**Agent Files:**
```
/bmad/gsap-excellence/agents/gsap-director.md
/bmad/gsap-excellence/agents/gsap-cinematographer.md
/bmad/gsap-excellence/agents/gsap-vfx.md
/bmad/gsap-excellence/agents/gsap-editor.md
/bmad/gsap-excellence/agents/gsap-tech-director.md
```

**Workflow Base:**
```
/bmad/gsap-excellence/workflows/
```

### Common Commands

**Create directory:**
```bash
mkdir -p /bmad/gsap-excellence/workflows/workflow-name/
```

**Create file:**
```bash
nano /bmad/gsap-excellence/workflows/workflow-name/workflow.yaml
```

**Backup agent file:**
```bash
cp /bmad/gsap-excellence/agents/gsap-agent.md /bmad/gsap-excellence/agents/gsap-agent.md.backup
```

**Verify XML balance:**
```bash
grep -o '<item' /bmad/gsap-excellence/agents/gsap-agent.md | wc -l
grep -o '</item>' /bmad/gsap-excellence/agents/gsap-agent.md | wc -l
```

**Count lines:**
```bash
wc -l /bmad/gsap-excellence/agents/gsap-agent.md
```

### Workflow Counts

- Director: 2 workflows
- Cinematographer: 4 workflows
- VFX: 5 workflows
- Editor: 1 workflow
- Tech Director: 3 workflows
- **Total: 15 workflows**

### Expected Line Reductions

- Director: ~170 lines
- Cinematographer: ~208 lines
- VFX: ~199 lines
- Editor: ~65 lines
- Tech Director: ~161 lines
- **Total: ~803 lines (10.4%)**

---

## 🎯 FINAL NOTES

### Remember the Goal

**Primary Goal:** Make research MANDATORY (cannot skip)
**Secondary Goal:** Token efficiency (10.4% savings on agent activation)
**Tertiary Goal:** Structured workflows with templates

**If research can be skipped, NOTHING ELSE MATTERS.**

### The Pattern

Every workflow follows this pattern:
1. Step 1: Gather context
2. **Step 2: Research Gate (MANDATORY - BLOCKING)**
3. Step 3+: Implementation
4. Final Step: Generate output

Step 2 is CRITICAL. If it's not blocking, fix it.

### When to Ask for Help

**Ask for help if:**
- Research enforcement testing fails (Phase 9)
- XML parsing errors persist after rollback
- File paths are wrong and you can't figure out why
- Agent files break and backup doesn't fix it

**Don't ask for help if:**
- You haven't finished copying files (finish first)
- You haven't tested yet (test first)
- You skipped the backup step (that's on you - use backup)

### Success Looks Like

**When implementation is complete:**
- 15 workflow directories exist with files
- 5 agent files are ~10% smaller
- All workflows load successfully
- **ALL 15 workflows BLOCK skip attempts** ← MOST IMPORTANT
- Token savings measured on agent activation
- No errors anywhere

**Then:** You can celebrate. The project is complete.

---

## ✅ READY TO BEGIN

**You have everything you need:**
- ✅ Complete file inventory
- ✅ Step-by-step implementation plan
- ✅ All 5 spec documents (copy-paste source)
- ✅ Testing protocols
- ✅ Research enforcement validation plan
- ✅ Rollback procedures
- ✅ Critical warnings
- ✅ Success criteria

**Estimated time:** 8-14 hours

**Most critical phase:** Phase 9 (Research Enforcement Validation)

**Start with:** Phase 1 (Create directories - 10 minutes)

---

**GOOD LUCK! 🚀**

**Remember: Research enforcement is NON-NEGOTIABLE. Test every single workflow.**

---

*GSAP Excellence Module - Implementation Handoff*
*Generated: 2025-11-06*
*Specification Phase: COMPLETE ✅*
*Implementation Phase: READY TO BEGIN ⏳*
