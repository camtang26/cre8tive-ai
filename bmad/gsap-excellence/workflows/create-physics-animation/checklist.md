# Physics Animation Workflow - Validation Checklist

**Workflow:** create-physics-animation
**Version:** 2.0.0-premium
**Agent:** GSAP Excellence - VFX Artist

---

## 🚨 RESEARCH ENFORCEMENT TEST (CRITICAL)

**This test verifies that research gates CANNOT be skipped.**

###Can research be skipped?

- [ ] **NO - Research gate blocks progression** (✅ PASS)
  - Workflow includes `<research-gate enforcement="MANDATORY" blocking="true">`
  - Checkpoint includes `type="approval-gate" blocking="true"`
  - User must explicitly continue with "Continue [c]"
  - Agent cannot rationalize skipping
  - 6 research phases MUST be completed (5 Deep-Research + 1 Archon MCP)

- [ ] **YES - Research is optional/skippable** (❌ FAIL - fix workflow immediately)
  - **THIS MUST NOT HAPPEN**
  - If this is true, the workflow is NOT premium
  - Return to instructions.md and add MANDATORY gates

**Verification Steps:**

1. **Execute the workflow** from Step 1
2. **Proceed to Step 2** (MANDATORY RESEARCH PHASE)
3. **Attempt to skip Phase 1** without reading Deep-Research Section 2.1
   - Does the workflow let you proceed? (Should be NO)
   - Is there a blocking checkpoint? (Should be YES)
4. **Attempt to skip the approval gate** without typing "Continue [c]"
   - Does the workflow auto-proceed? (Should be NO)
   - Is user input required? (Should be YES)
5. **Result:** If research can be skipped at ANY point → FAIL

**Expected Behavior:**
- ❌ Cannot proceed past Step 2 without completing ALL 6 research phases
- ❌ Cannot skip individual phases
- ❌ Cannot skip approval gate checkpoint
- ✅ User MUST type "Continue [c]" to proceed to Step 3

**Test Status:** [ ] PASS / [ ] FAIL

---

## FILE PATH VERIFICATION

**Verify all Read commands point to actual Deep-Research files (not agent sidecars).**

### Deep-Research File Paths in instructions.md

**Phase 1 - Section 2.1:**
- [ ] File path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
- [ ] Verify file exists: `ls {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
- [ ] NOT pointing to agent sidecar (e.g., `gsap-vfx/research-knowledge.md`)

**Phase 2 - Section 2.3:**
- [ ] File path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`
- [ ] Verify file exists: `ls {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`
- [ ] NOT pointing to agent sidecar

**Phase 3 - Section 2.6:**
- [ ] File path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/10-26-additional-advanced-techniques.md`
- [ ] Verify file exists: `ls {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/10-26-additional-advanced-techniques.md`
- [ ] NOT pointing to agent sidecar

**Phase 4 - Section 5.2:**
- [ ] File path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/19-52-keep-the-main-thread-free-avoid-long-tasks.md`
- [ ] Verify file exists: `ls {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/19-52-keep-the-main-thread-free-avoid-long-tasks.md`
- [ ] NOT pointing to agent sidecar

**Phase 5 - Section 5.5:**
- [ ] File path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md`
- [ ] Verify file exists: `ls {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md`
- [ ] NOT pointing to agent sidecar

**workflow.yaml deep_research_base:**
- [ ] Path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery`
- [ ] Verify directory exists: `ls {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/`

**Test Status:** [ ] PASS / [ ] FAIL

---

## RESEARCH CITATION AUDIT

**Verify all frameworks/code examples cite research sources with verbatim quotes.**

### Verbatim Quotes from Deep-Research

**Section 2.1 Quotes (instructions.md):**
- [ ] Quote 1: *"Elastic and bounce eases (`'bounce.out'`, `'elastic.inOut'`) create springy effects."*
  - Source citation: (Source: Section 2.1)
  - Format: Italics with quotation marks
- [ ] Quote 2: *"Use `bounce.out` or `elastic.out` for playful, bouncy elements (e.g. cartoonish UI)."*
  - Source citation: (Source: Section 2.1)
- [ ] Quote 3: *"Back eases (`'back(1.7).out'`) overshoot a bit then settle."*
  - Source citation: (Source: Section 2.1)
- [ ] Quote 4: *"Use easing deliberately to convey weight and style"*
  - Source citation: (Source: Section 2.1)
- [ ] Quote 5: *"GSAP uses a **ticker** (built on `requestAnimationFrame`) to update values every frame; by default it attempts 60fps."*
  - Source citation: (Source: Section 2.1)

**Section 2.3 Quotes (instructions.md):**
- [ ] Quote 1: *"as of late 2023/2024, **GSAP and all its official plugins are free for everyone** (no club membership needed)"*
  - Source citation: (Source: Section 2.3)
- [ ] Quote 2: *"**Draggable** (make elements draggable, often used with throwProps for flick/scrolling UI), **Inertia (ThrowProps)** for momentum physics"*
  - Source citation: (Source: Section 2.3)
- [ ] Quote 3: *"All the above plugins are now part of the free GSAP bundle"*
  - Source citation: (Source: Section 2.3)
- [ ] Quote 4: *"**Physics2D/PhysicsProps** for playful physical motions (gravity, bouncing simulation)"*
  - Source citation: (Source: Section 2.3)

**Section 2.6 Quotes (instructions.md):**
- [ ] Quote 1: *"GSAP can animate anything numeric. This means if you have a Three.js scene, you can tween object positions, camera positions, even material properties with GSAP."*
  - Source citation: (Source: Section 2.6)
- [ ] Quote 2: *"For canvas, you might tween some variables that your `requestAnimationFrame` draw loop uses (like coordinates or an angle)."*
  - Source citation: (Source: Section 2.6)
- [ ] Quote 3: *"GSAP's fast and doesn't conflict with other rAF loops if coordinated properly."*
  - Source citation: (Source: Section 2.6)

**Section 5.2 Quotes (instructions.md):**
- [ ] Quote 1: *"If you have an onUpdate callback on a tween that does something expensive (like traversing DOM or heavy math), that could kill performance."*
  - Source citation: (Source: Section 5.2)
- [ ] Quote 2: *"For complex physics, consider GSAP's physics plugins instead of writing in onUpdate."*
  - Source citation: (Source: Section 5.2)
- [ ] Quote 3: *"If you do create your own loop (rare because GSAP covers most needs), always sync with rAF. E.g., don't set `setInterval(fn, 16)` for an animation loop; use `gsap.ticker` or `requestAnimationFrame`"*
  - Source citation: (Source: Section 5.2)

**Section 5.5 Quotes (instructions.md):**
- [ ] Quote 1: *"To achieve ~16ms per frame budget: - Often less than 8ms of scripting, <4ms style/layout, <4ms paint per frame yields ~16ms total."*
  - Source citation: (Source: Section 5.5)
- [ ] Quote 2: *"Use `autoAlpha`: This GSAP property animates opacity and toggles visibility to `hidden` when opacity hits 0."*
  - Source citation: (Source: Section 5.5)

**Total Verbatim Quotes Required:** 18+
**Actual Verbatim Quotes Found:** [ ]
**Citation Format Correct:** [ ] YES / [ ] NO

**Test Status:** [ ] PASS / [ ] FAIL

---

## QUALITY METRICS

**Verify workflow meets premium quality standards (2,000-3,000+ total lines).**

### File Line Counts

**workflow.yaml:**
- [ ] Current line count: ________
- [ ] Target: 150-200+ lines
- [ ] Growth from pathetic version (53 lines): _______%
- [ ] Status: [ ] PASS (≥150 lines) / [ ] FAIL (<150 lines)

**instructions.md:**
- [ ] Current line count: ________
- [ ] Target: 1,000-1,700+ lines
- [ ] Growth from pathetic version (265 lines): _______%
- [ ] Status: [ ] PASS (≥1,000 lines) / [ ] FAIL (<1,000 lines)

**template.md:**
- [ ] Current line count: ________
- [ ] Target: 400-600+ lines
- [ ] Growth from pathetic version (0 lines - didn't exist): N/A
- [ ] Status: [ ] PASS (≥400 lines) / [ ] FAIL (<400 lines)

**checklist.md (this file):**
- [ ] Current line count: ________
- [ ] Target: 400-700+ lines
- [ ] Growth from pathetic version (0 lines - didn't exist): N/A
- [ ] Status: [ ] PASS (≥400 lines) / [ ] FAIL (<400 lines)

**TOTAL LINES:**
- [ ] Total: ________ lines
- [ ] Target: 2,000-3,000+ lines
- [ ] Growth from pathetic version (316 lines): _______%
- [ ] Status: [ ] PASS (≥2,000 lines) / [ ] FAIL (<2,000 lines)

### Quality Metrics Verification

**workflow.yaml Quality:**
- [ ] Has 5 deep_research_sections listed (2.1, 2.3, 2.6, 5.2, 5.5)
- [ ] Has archon_sources listed (3 sources minimum)
- [ ] Has physics_types classification
- [ ] Has plugin_status documentation (InertiaPlugin FREE)
- [ ] Has comprehensive inputs/outputs sections
- [ ] Has success_criteria listed
- [ ] Has web_bundle configuration

**instructions.md Quality:**
- [ ] Has 6 research phases (5 Deep-Research + 1 Archon MCP)
- [ ] Each phase has Read commands with actual file paths
- [ ] Each phase has "Extract and Apply" sections
- [ ] Has approval gate checkpoint (blocking="true")
- [ ] Has 4 physics implementation patterns (spring, drag-throw, gravity, custom ticker)
- [ ] Has parameter tuning guides
- [ ] Has framework integration section (React/Next.js)
- [ ] Has troubleshooting section
- [ ] Has success criteria

**template.md Quality:**
- [ ] Has Executive Summary section
- [ ] Has Deep-Research Framework Analysis (5 sections)
- [ ] Has Archon MCP Research Findings (5 queries)
- [ ] Has Implementation Details section
- [ ] Has Validation Results (6 subsections)
- [ ] Has Prevention Tips (5 pitfalls + 4 recommendations)
- [ ] Has placeholders for all variable content ({{variable}})

**checklist.md Quality:**
- [ ] Has Research Enforcement Test (CRITICAL)
- [ ] Has File Path Verification
- [ ] Has Research Citation Audit
- [ ] Has Quality Metrics
- [ ] Has Functionality Tests
- [ ] Has BMAD v6 Compliance check

**Test Status:** [ ] PASS / [ ] FAIL

---

## FUNCTIONALITY TESTS

**Verify workflow executes without errors and produces expected output.**

### Workflow Execution Test

1. **Load workflow.yaml:**
   - [ ] Execute: `cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/create-physics-animation/`
   - [ ] Verify workflow.yaml loads without errors
   - [ ] Verify all config variables resolve

2. **Execute Step 1 (Context Gathering):**
   - [ ] Step executes without errors
   - [ ] All `<ask>` prompts display correctly
   - [ ] User input captured

3. **Execute Step 2 (Research Phase):**
   - [ ] Research gate displays
   - [ ] All 6 phases listed
   - [ ] Read commands point to correct files
   - [ ] Checkpoint blocks progression

4. **Test Approval Gate:**
   - [ ] Attempt to proceed without "Continue [c]" input
   - [ ] Verify workflow DOES NOT auto-proceed
   - [ ] Provide "Continue [c]" input
   - [ ] Verify workflow proceeds to Step 3

5. **Execute Step 3 (Implementation):**
   - [ ] Physics patterns display correctly
   - [ ] Code examples formatted properly
   - [ ] Parameter guides displayed

6. **Execute Step 4 (Output Generation):**
   - [ ] template-output tag triggers file generation
   - [ ] Output file created at correct path
   - [ ] All {{placeholders}} replaced with values

7. **Execute Step 5 (Validation):**
   - [ ] Success criteria checklist displays
   - [ ] All checklist items present

**Test Status:** [ ] PASS / [ ] FAIL

---

### Output File Generation Test

**Verify output file is generated correctly.**

- [ ] Output file path: `{output_folder}/physics-animation-implementation-{timestamp}.md`
- [ ] File exists: `ls {output_folder}/physics-animation-implementation-*.md`
- [ ] File content matches template.md structure
- [ ] All {{placeholders}} replaced with actual values
- [ ] No unreplaced {{variables}} remain
- [ ] File contains research citations
- [ ] File contains code examples

**Test Status:** [ ] PASS / [ ] FAIL

---

### Research Gate Blocking Test (CRITICAL)

**This is the MOST IMPORTANT test. Research gates MUST block progression.**

**Test Procedure:**

1. **Start workflow execution**
2. **Complete Step 1 (Context Gathering)**
3. **Reach Step 2 (Research Phase)**
4. **Attempt to skip Phase 1:**
   - Do NOT read Section 2.1
   - Do NOT document findings
   - Attempt to proceed to Phase 2
   - **Expected:** Workflow should NOT allow progression
5. **Attempt to skip approval gate:**
   - Complete some (but not all) research phases
   - Reach approval gate checkpoint
   - Do NOT type "Continue [c]"
   - Attempt to proceed to Step 3
   - **Expected:** Workflow should HALT and require user input
6. **Verify agent cannot rationalize skipping:**
   - Agent should display blocking message
   - Agent should require explicit "Continue [c]" input
   - Agent should NOT auto-generate "Continue [c]" on user's behalf

**Test Results:**

- [ ] Phase skipping blocked? [ ] YES (PASS) / [ ] NO (FAIL)
- [ ] Approval gate blocks progression? [ ] YES (PASS) / [ ] NO (FAIL)
- [ ] Agent cannot rationalize skipping? [ ] YES (PASS) / [ ] NO (FAIL)

**CRITICAL:** If ANY of the above is FAIL, the workflow is NOT premium. Return to instructions.md and fix gates.

**Test Status:** [ ] PASS / [ ] FAIL

---

## BMAD v6 COMPLIANCE

**Verify workflow follows all BMAD Core standards.**

### workflow.yaml Compliance

**Required Sections:**
- [ ] `name` field present
- [ ] `description` field present
- [ ] `author` field present
- [ ] `version` field present (2.0.0-premium)
- [ ] `config_source` field present
- [ ] `user_name` field present
- [ ] `communication_language` field present
- [ ] `output_folder` field present
- [ ] `date` field present (system-generated)
- [ ] `timestamp` field present (system-generated)

**Metadata Section:**
- [ ] `metadata` section present
- [ ] `agent` field: "gsap-vfx"
- [ ] `priority` field present
- [ ] `research_intensity` field present
- [ ] `estimated_duration` field present

**MCP Configuration:**
- [ ] `required_mcp` section present
- [ ] `archon` listed
- [ ] `context7` listed (optional but recommended)

**Deep-Research Configuration:**
- [ ] `deep_research_sections` list present
- [ ] All 5 sections listed (2.1, 2.3, 2.6, 5.2, 5.5)
- [ ] `deep_research_base` path configured

**Archon Configuration:**
- [ ] `archon_sources` list present
- [ ] At least 3 sources listed
- [ ] `b9f6b322298feb21` (gsap.com) included

**File Paths:**
- [ ] `installed_path` configured
- [ ] `template` path configured
- [ ] `instructions` path configured
- [ ] `validation` path configured (this file)
- [ ] `default_output_file` configured with {{timestamp}} placeholder

**Inputs/Outputs:**
- [ ] `inputs` section defined
- [ ] `outputs` section defined

**Success Criteria:**
- [ ] `success_criteria` list present
- [ ] At least 5 criteria listed

**Web Bundle:**
- [ ] `web_bundle` section present
- [ ] All 4 files listed in `web_bundle_files`

**Test Status:** [ ] PASS / [ ] FAIL

---

### instructions.md Compliance

**Required Headers:**
- [ ] `<critical>` tag references workflow execution engine
- [ ] `<critical>` tag references workflow.yaml

**Workflow Structure:**
- [ ] `<workflow>` wrapper tag present
- [ ] `<step n="X">` tags used (numbered sequentially)
- [ ] Each step has `goal` attribute

**Research Gate Structure:**
- [ ] `<research-gate enforcement="MANDATORY" blocking="true">` present
- [ ] `<phase n="X">` tags for each research phase (6 total)
- [ ] Each phase has `title` attribute
- [ ] Each phase has `required="true"` attribute
- [ ] `<checkpoint type="approval-gate" blocking="true">` present

**Variable Syntax:**
- [ ] Uses `{project-root}` for project root path
- [ ] Uses `{config_source}` for config variables
- [ ] Uses `{{variable}}` for template variables

**Test Status:** [ ] PASS / [ ] FAIL

---

### template.md Compliance

**Variable Placeholders:**
- [ ] Uses `{{variable}}` syntax
- [ ] All placeholders documented
- [ ] No hardcoded values that should be variables

**Structure:**
- [ ] Has clear section headings
- [ ] Uses markdown formatting
- [ ] Includes code blocks with syntax highlighting

**Test Status:** [ ] PASS / [ ] FAIL

---

## PERFORMANCE VALIDATION

**Verify workflow provides performance-optimized implementations.**

### Frame Budget Analysis

**60fps Target (16ms per frame):**
- [ ] Instructions mention 16ms frame budget
- [ ] Instructions cite Section 5.5 frame budget quote
- [ ] Custom physics examples include <8ms scripting target
- [ ] Template includes frame budget breakdown section

### gsap.ticker Usage

**Verify RAF synchronization (Section 5.2):**
- [ ] Custom physics examples use `gsap.ticker.add()`
- [ ] NO examples use `setInterval` or `setTimeout` for animation loops
- [ ] Instructions cite Section 5.2 RAF sync quote
- [ ] Cleanup examples show `gsap.ticker.remove()`

### autoAlpha Optimization

**Verify autoAlpha usage (Section 5.5):**
- [ ] Instructions mention autoAlpha performance benefit
- [ ] Instructions cite Section 5.5 autoAlpha quote
- [ ] Code examples use `autoAlpha` instead of `opacity` where appropriate

**Test Status:** [ ] PASS / [ ] FAIL

---

## INERTIA PLUGIN FREE STATUS VERIFICATION

**Verify InertiaPlugin FREE status is properly documented.**

### Documentation Requirements

**workflow.yaml:**
- [ ] `plugin_status` section present
- [ ] `name: 'InertiaPlugin'` documented
- [ ] `availability: 'FREE in GSAP 3.13+'` documented
- [ ] `reference` URL included (https://gsap.com/blog/gsap-3-13-0-release)
- [ ] `previous_status` documented

**instructions.md:**
- [ ] InertiaPlugin FREE status mentioned in overview
- [ ] Section 2.3 research phase includes FREE status discovery
- [ ] Research quotes cite FREE status
- [ ] Pattern B (drag-and-throw) emphasizes FREE status
- [ ] Code comments include FREE status reference

**template.md:**
- [ ] Section 2.3 analysis includes InertiaPlugin FREE status
- [ ] Impact statement documented ("accessible to everyone")
- [ ] Reference URL included

**Critical Messaging:**
- [ ] "InertiaPlugin is FREE in GSAP 3.13+" appears at least 3 times
- [ ] Previous pricing context provided ($99+/year Club GreenSock)
- [ ] Impact on accessibility emphasized

**Test Status:** [ ] PASS / [ ] FAIL

---

## ARCHON MCP INTEGRATION VALIDATION

**Verify Archon MCP research is properly integrated.**

### Query Requirements

**Phase 6 (Archon MCP Research):**
- [ ] Query 1: General physics patterns (required)
- [ ] Query 2: Easing visualizer patterns (required)
- [ ] Query 3: Draggable + Inertia patterns (conditional on physics type)
- [ ] Query 4: Custom physics ticker (conditional on physics type)
- [ ] Query 5: Motion.dev spring physics (conditional on physics type)

**Query Structure:**
- [ ] Each query has clear purpose statement
- [ ] Each query specifies source_id
- [ ] Each query specifies match_count
- [ ] Each query has "Document" section (what to extract)

**Archon Sources (workflow.yaml):**
- [ ] b9f6b322298feb21 (gsap.com official docs)
- [ ] 6a6860cfc96e173b (GSAP cheat sheet)
- [ ] 80a3ee12854455ca (motion.dev tutorials)

**Test Status:** [ ] PASS / [ ] FAIL

---

## CROSS-BROWSER TESTING CHECKLIST

**Verify implementations work across all target browsers.**

### Desktop Browsers

**Chrome:**
- [ ] Physics animations render correctly
- [ ] 60fps sustained
- [ ] Draggable interactions work (if applicable)
- [ ] Console: No errors
- [ ] DevTools Performance: <16ms frame time

**Firefox:**
- [ ] Physics animations render correctly
- [ ] 60fps sustained
- [ ] Draggable interactions work (if applicable)
- [ ] Console: No errors
- [ ] Performance tools: Acceptable frame rate

**Safari:**
- [ ] Physics animations render correctly
- [ ] 60fps sustained
- [ ] Draggable interactions work (if applicable)
- [ ] Console: No errors
- [ ] Timeline: Acceptable performance

### Mobile Testing

**Mobile Chrome (Android):**
- [ ] Touch events work for drag interactions
- [ ] Animations smooth on mid-range device
- [ ] No jank or stuttering
- [ ] Battery usage acceptable

**Mobile Safari (iOS):**
- [ ] Touch events work for drag interactions
- [ ] Animations smooth on mid-range device
- [ ] No jank or stuttering
- [ ] Battery usage acceptable

**Test Status:** [ ] PASS / [ ] FAIL

---

## FRAMEWORK INTEGRATION VALIDATION

**Verify framework-specific implementations follow best practices.**

### React/Next.js Integration

**useGSAP Hook:**
- [ ] Examples use `useGSAP` hook from `@gsap/react`
- [ ] `useGSAP` hook returns cleanup function
- [ ] Cleanup function removes ticker callbacks
- [ ] `scope` parameter used correctly

**Plugin Registration:**
- [ ] Plugins registered outside component (performance)
- [ ] `gsap.registerPlugin()` called before use
- [ ] No re-registration on every render

**Memory Leaks Prevention:**
- [ ] Ticker callbacks removed in cleanup
- [ ] Draggable instances killed in cleanup
- [ ] No orphaned event listeners

**Test Status:** [ ] PASS / [ ] FAIL

---

## ACCESSIBILITY CONSIDERATIONS

**Verify implementations consider accessibility requirements.**

### prefers-reduced-motion

**Recommendations:**
- [ ] Template includes "Future Considerations" section
- [ ] `prefers-reduced-motion` support mentioned
- [ ] Simplified physics suggested for motion-sensitive users

### Keyboard Navigation

**Drag Interactions:**
- [ ] Template mentions keyboard navigation for drag interactions
- [ ] Recommendations for accessibility improvements included

**Test Status:** [ ] PASS / [ ] FAIL

---

## FINAL VALIDATION SUMMARY

### Critical Checks (MUST ALL PASS)

- [ ] **Research Enforcement Test:** PASS (research gates block progression)
- [ ] **File Path Verification:** PASS (all paths point to Deep-Research files)
- [ ] **Quality Metrics:** PASS (2,000+ total lines)
- [ ] **Research Citation Audit:** PASS (18+ verbatim quotes with citations)
- [ ] **Functionality Tests:** PASS (workflow executes without errors)
- [ ] **BMAD v6 Compliance:** PASS (all required sections present)

### High Priority Checks (SHOULD PASS)

- [ ] **Performance Validation:** PASS (60fps guidance, gsap.ticker, autoAlpha)
- [ ] **InertiaPlugin FREE Status:** PASS (documented in 3+ locations)
- [ ] **Archon MCP Integration:** PASS (5 queries structured correctly)
- [ ] **Cross-Browser Testing:** PASS (Chrome, Firefox, Safari, mobile)

### Nice-to-Have Checks

- [ ] **Framework Integration:** PASS (React/Next.js best practices)
- [ ] **Accessibility:** PASS (future considerations documented)

---

## OVERALL WORKFLOW STATUS

**Pathetic → Premium Transformation:**

| Metric | Before | After | Growth |
|--------|--------|-------|--------|
| workflow.yaml | 53 lines | _____ lines | _____% |
| instructions.md | 265 lines | _____ lines | _____% |
| template.md | 0 lines | _____ lines | N/A |
| checklist.md | 0 lines | _____ lines | N/A |
| **TOTAL** | **316 lines** | **_____ lines** | **_____%** |

**Target:** 2,000-3,000+ lines (premium)

**Verdict:**
- [ ] ✅ PREMIUM WORKFLOW (all critical checks pass, 2,000+ lines)
- [ ] ❌ PATHETIC WORKFLOW (any critical check fails OR <2,000 lines)

**Status:** [ ] READY FOR PRODUCTION / [ ] NEEDS FIXES

---

## REMEDIATION CHECKLIST

**If any tests FAIL, use this checklist to fix issues:**

### Research Enforcement Failure

- [ ] Add `<research-gate enforcement="MANDATORY" blocking="true">` wrapper
- [ ] Add `<checkpoint type="approval-gate" blocking="true">` at end
- [ ] Add explicit user input requirement: "Continue [c]"
- [ ] Add agent mandate: "Cannot rationalize skipping"

### File Path Errors

- [ ] Replace agent sidecar references with Deep-Research file paths
- [ ] Verify all paths with `ls` command
- [ ] Update workflow.yaml `deep_research_base` if incorrect

### Missing Citations

- [ ] Add verbatim quotes from Deep-Research (use italics + quotation marks)
- [ ] Add source citations in parentheses: (Source: Section X.Y)
- [ ] Verify quote accuracy by re-reading source file

### Quality Metrics Below Target

- [ ] Expand research phases (add more detail to "Extract and Apply")
- [ ] Add more code examples with before/after patterns
- [ ] Expand parameter tuning guides
- [ ] Add more troubleshooting scenarios
- [ ] Expand template placeholders documentation

### Functionality Errors

- [ ] Fix XML tag syntax errors
- [ ] Fix unclosed tags
- [ ] Fix variable resolution issues
- [ ] Test workflow execution end-to-end

### BMAD Compliance Issues

- [ ] Add missing workflow.yaml sections
- [ ] Fix file path configurations
- [ ] Add missing metadata fields
- [ ] Update version to 2.0.0-premium

---

**Checklist Version:** 1.0.0
**Last Updated:** 2025-11-09
**Validation Protocol:** GSAP Excellence Engine - Physics Animation Workflow
