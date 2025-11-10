# validate-complete Workflow - Validation Checklist

**Workflow:** validate-complete
**Version:** 2.0.0-premium
**Agent:** Tech Director (GSAP Excellence Engine)
**Purpose:** Comprehensive quality validation for the validate-complete workflow

---

## Purpose

This checklist validates that the validate-complete workflow meets all PREMIUM quality standards:
- Research enforcement gates CANNOT be skipped (CRITICAL)
- All file paths point to actual Deep-Research files (not agent sidecars)
- Research citations are present with verbatim quotes
- Quality metrics meet premium thresholds (2,000-3,000+ lines)
- Workflow functions correctly without errors
- BMAD v6 compliance verified

---

## 1. RESEARCH ENFORCEMENT TEST (CRITICAL)

**This is the MOST IMPORTANT validation.** The entire value of this workflow depends on MANDATORY research being enforced.

### 1.1: Research Gate Structure Verification

**Check workflow files for MANDATORY research gates:**

- [ ] **instructions.md contains `<critical>` tag with MANDATORY research checkpoint**
  - Location: Step 2 in instructions.md
  - Must contain: `<critical>🚨 MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP</critical>`
  - Must state: "This research gate is **BLOCKING**"

- [ ] **Research gate has approval checkpoint with user input requirement**
  - Must contain: `<ask response="research_validated">` tag
  - Must require user to type 'continue' explicitly
  - Must have goto loop if user types 'redo'
  - Format: `<check if="research_validated != 'continue'"><goto step="2">...</goto></check>`

- [ ] **Research gate includes ALL three research phases**
  - Phase 1: Deep-Research Validation Standards (REQUIRED)
  - Phase 2: Archon MCP Knowledge Base Queries (REQUIRED)
  - Phase 3: 2025 Web Evidence (Best Practices)

### 1.2: Blocking Behavior Test

**Verify the research gate actually blocks progression:**

**TEST:** Can the agent skip the research gate?

- [ ] **NO** - Research gate blocks progression (✅ PASS)
  - Agent MUST complete research before proceeding to Step 3
  - User MUST type 'continue' at checkpoint
  - Agent CANNOT rationalize skipping research
  - Workflow contains goto loop that returns to Step 2 if validation != 'continue'

- [ ] **YES** - Research is optional/skippable (❌ FAIL - FIX IMMEDIATELY)
  - **THIS MUST NOT HAPPEN**
  - If research can be skipped, the entire workflow value is lost
  - MANDATORY: Fix instructions.md to enforce blocking behavior

### 1.3: Research Content Verification

**Verify research phase actually loads Deep-Research content:**

- [ ] **Deep-Research Section 5.5 (60fps Optimization) is loaded**
  - File path in instructions.md: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md`
  - Contains verbatim quote with frame budget framework
  - Source citation present: (Source: 22-55-optimize-animations-for-60fps.md)

- [ ] **Deep-Research Section 6.1 (prefers-reduced-motion) is loaded**
  - File path in instructions.md: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md`
  - Contains MANDATORY accessibility requirement quote
  - Source citation present: (Source: 24-61-respecting-prefers-reduced-motion.md)

- [ ] **Deep-Research Pitfall 8.9 (Cross-Device Testing) is loaded**
  - File path in instructions.md: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-89-not-testing-on-different-devices.md`
  - Contains cross-device testing warning quote
  - Source citation present: (Source: 42-pitfall-89-not-testing-on-different-devices.md)

- [ ] **Archon MCP queries are specified**
  - Query 1: 60fps validation standards (source_id: b9f6b322298feb21)
  - Query 2: Chrome DevTools profiling techniques (source_id: 06ecb8dc74a38966)
  - Query 3: Console error pattern recognition (source_id: b9f6b322298feb21)

- [ ] **2025 Web Evidence is documented**
  - Chrome DevTools best practices (2025-04-03 UTC)
  - Web Almanac 2024 GSAP benchmarks
  - Latest performance standards

### 1.4: Research Enforcement Verdict

**Based on checks above, determine research enforcement status:**

- [ ] ✅ **PASS** - Research gate is MANDATORY and BLOCKING
  - Cannot be skipped
  - User input required ('continue')
  - Goto loop enforces completion
  - All research phases present

- [ ] ❌ **FAIL** - Research gate can be skipped or bypassed
  - **CRITICAL FAILURE**
  - Workflow is NOT PREMIUM
  - Fix instructions.md immediately
  - Re-run this checklist after fix

---

## 2. FILE PATH VERIFICATION

**Verify ALL file paths point to actual Deep-Research files (NOT agent sidecars):**

### 2.1: Deep-Research File Paths

**Check instructions.md for correct Deep-Research file paths:**

- [ ] **Section 5.5 path is correct**
  - Expected: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md`
  - NOT: `{project-root}/bmad/gsap-excellence/agents/gsap-tech-director/research-knowledge.md`
  - Verify file exists: `ls docs/Deep-Research/GSAP-Animation-Mastery/22-55-*.md`

- [ ] **Section 6.1 path is correct**
  - Expected: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md`
  - NOT: Agent sidecar reference
  - Verify file exists: `ls docs/Deep-Research/GSAP-Animation-Mastery/24-61-*.md`

- [ ] **Pitfall 8.9 path is correct**
  - Expected: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-89-not-testing-on-different-devices.md`
  - NOT: Agent sidecar reference
  - Verify file exists: `ls docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-*.md`

### 2.2: workflow.yaml Configuration Paths

**Verify workflow.yaml deep_research_base path:**

- [ ] **deep_research_base is configured**
  - Expected: `deep_research_base: '{project-root}/docs/Deep-Research/GSAP-Animation-Mastery'`
  - Points to actual Deep-Research directory
  - NOT pointing to agent sidecar directory

- [ ] **deep_research_sections are listed**
  - Contains: '5.5' (60fps Optimization)
  - Contains: '6.1' (prefers-reduced-motion)
  - Contains: '8.9' (Cross-device testing pitfall)

### 2.3: File Path Verdict

- [ ] ✅ **PASS** - All paths point to actual Deep-Research files
- [ ] ❌ **FAIL** - Some paths point to agent sidecars (fix required)

---

## 3. RESEARCH CITATION AUDIT

**Verify research citations with verbatim quotes and sources:**

### 3.1: Verbatim Quote Count

**Count verbatim quotes in instructions.md:**

- [ ] **Minimum 5+ verbatim quotes present** (REQUIRED for PREMIUM)
  - Format: *"quote text here"* (italics with quotation marks)
  - Each quote followed by source citation in parentheses
  - Expected count: 5-10+ quotes

**Actual count:** ___ quotes found

**Quote verification commands:**
```bash
# Count quotes with italics and quotation marks
rg '^\*"' instructions.md | wc -l

# Count source citations
rg 'Source: ' instructions.md | wc -l
```

### 3.2: Source Citation Verification

**Verify each quote has source citation:**

- [ ] **Frame budget framework quote** (Deep-Research 5.5)
  - Quote present: *"To achieve ~16ms per frame budget..."*
  - Source: (Source: 22-55-optimize-animations-for-60fps.md)

- [ ] **prefers-reduced-motion MANDATORY quote** (Deep-Research 6.1)
  - Quote present: *"Some users have a setting... We **must** honor this"*
  - Source: (Source: 24-61-respecting-prefers-reduced-motion.md)

- [ ] **Testing protocol quote** (Deep-Research 6.1)
  - Quote present: *"Manually toggle your OS setting..."*
  - Source: (Source: 24-61-respecting-prefers-reduced-motion.md)

- [ ] **Cross-device issue quote** (Pitfall 8.9)
  - Quote present: *"The animation might be fine on desktop but terrible on mobile..."*
  - Source: (Source: 42-pitfall-89-not-testing-on-different-devices.md)

- [ ] **Additional quotes present** (5+ total minimum)
  - All use *italics* with "quotation marks"
  - All have source citations in (parentheses)

### 3.3: Research Citation Verdict

- [ ] ✅ **PASS** - 5+ verbatim quotes with source citations
- [ ] ❌ **FAIL** - <5 quotes or missing citations (add more)

---

## 4. QUALITY METRICS

**Verify workflow meets premium quality thresholds:**

### 4.1: Line Count Targets

**Premium Quality Standard: 2,000-3,000+ total lines**

**Count lines in each file:**

```bash
wc -l workflow.yaml instructions.md template.md checklist.md
```

- [ ] **workflow.yaml: 150-200+ lines**
  - Actual: ___ lines
  - Target: 150-200 lines
  - Status: ✅ PASS / ❌ FAIL

- [ ] **instructions.md: 1,000-1,700+ lines**
  - Actual: ___ lines
  - Target: 1,000-1,700 lines
  - Status: ✅ PASS / ❌ FAIL

- [ ] **template.md: 400-600+ lines**
  - Actual: ___ lines
  - Target: 400-600 lines
  - Status: ✅ PASS / ❌ FAIL

- [ ] **checklist.md: 400-700+ lines**
  - Actual: ___ lines
  - Target: 400-700 lines
  - Status: ✅ PASS / ❌ FAIL

- [ ] **TOTAL: 2,000-3,000+ lines**
  - Actual: ___ lines total
  - Target: 2,000-3,000+ lines
  - Status: ✅ PASS / ❌ FAIL

### 4.2: Content Density

**Verify content is research-backed (not generic):**

- [ ] **GSAP-specific expertise** (not generic animation advice)
  - References gsap.matchMedia()
  - References ScrollTrigger
  - References autoAlpha property
  - References GSAP-specific patterns

- [ ] **Specific metrics and thresholds**
  - Frame budget: ~16ms (8ms + 4ms + 4ms)
  - FPS targets: 60fps (high/mid), 30fps (low)
  - CPU throttling: 4x, 6x, optional 20x
  - Memory growth: <5MB acceptable

- [ ] **Code examples present**
  - prefers-reduced-motion implementation (gsap.matchMedia)
  - Memory check script (performance.memory)
  - Chrome DevTools MCP usage examples

### 4.3: Growth Percentage Calculation

**Calculate growth from pathetic to premium:**

**Pathetic baseline (before rebuild):**
- workflow.yaml: ~28 lines
- instructions.md: ~693 lines
- template.md: ~299 lines
- checklist.md: 0 lines (didn't exist)
- **Total: ~1,020 lines**

**Premium target (after rebuild):**
- workflow.yaml: 175+ lines
- instructions.md: 1,088+ lines
- template.md: 575+ lines
- checklist.md: 400-700 lines
- **Total: 2,238-2,538+ lines**

**Growth: +1,218-1,518 lines (+119-149% growth)**

- [ ] **Growth ≥100%** (doubled in size minimum)
  - Actual growth: ___%
  - Status: ✅ PASS / ❌ FAIL

### 4.4: Quality Metrics Verdict

- [ ] ✅ **PASS** - All quality metrics meet premium thresholds
- [ ] ❌ **FAIL** - Some metrics below threshold (expand content)

---

## 5. FUNCTIONALITY TESTS

**Verify workflow executes without errors:**

### 5.1: Workflow Execution Test

**Execute workflow from start to finish:**

- [ ] **Workflow loads successfully**
  - workflow.yaml parsed without errors
  - instructions.md loads
  - template.md loads
  - No YAML syntax errors

- [ ] **Step 1 executes** (Context Gathering)
  - Asks for page_url
  - Asks for animation_description
  - Asks for target_devices
  - Asks for test_conditions
  - template-output tag works

- [ ] **Step 2 executes** (Research Gate - MANDATORY)
  - Research gate triggers
  - All research phases display
  - Approval checkpoint works
  - User must type 'continue'
  - Goto loop works if user types 'redo'

- [ ] **Step 3 executes** (Performance Validation)
  - Chrome DevTools MCP instructions present
  - Performance profiling steps clear
  - CPU throttling protocol defined
  - Memory leak detection included

- [ ] **Step 4 executes** (Visual Validation)
  - Screenshot capture instructions present
  - Desktop viewport protocol defined
  - Mobile viewport protocol defined (conditional)

- [ ] **Step 5 executes** (Console Validation)
  - list_console_messages usage present
  - Zero-tolerance policy stated

- [ ] **Step 6 executes** (Accessibility & Code Quality)
  - prefers-reduced-motion check present
  - Keyboard accessibility check present (conditional)
  - Code quality assessment defined

- [ ] **Step 7 executes** (Generate Report)
  - Overall status calculation logic present
  - Executive summary generation defined
  - Template variable compilation complete
  - Final report save instructions present

### 5.2: Template Variable Coverage

**Verify all placeholders in template.md have instructions to populate them:**

- [ ] **Metadata variables covered**
  - date, user_name, animation_description, page_url, target_devices

- [ ] **Performance variables covered**
  - high_end_fps, high_end_min_fps, high_end_paint_time, high_end_js_time
  - mid_range_fps, mid_range_min_fps, mid_range_paint_time
  - low_end_fps, low_end_min_fps
  - memory_initial, memory_after_cycles, memory_growth

- [ ] **Status variables covered**
  - overall_status, critical_issues_count, warnings_count, passed_checks_count
  - high_end_status, mid_range_status, low_end_status, memory_status
  - desktop_visual_status, mobile_visual_status
  - console_status, accessibility_status

- [ ] **Screenshot variables covered**
  - screenshot_desktop_before, screenshot_desktop_mid, screenshot_desktop_after
  - screenshot_mobile_before, screenshot_mobile_mid, screenshot_mobile_after

- [ ] **Console variables covered**
  - console_errors_count, console_warnings_count
  - console_errors_list, console_warnings_list

- [ ] **Accessibility variables covered**
  - prefers_reduced_motion_support
  - keyboard_navigation, focus_visible, keyboard_controls

- [ ] **Code quality variables covered**
  - cleanup_status, error_handling_status, browser_compatibility_status

### 5.3: Output File Generation

**Verify output file is generated correctly:**

- [ ] **default_output_file configured**
  - Path: `{output_folder}/validation-report-{timestamp}.md`
  - Uses template.md structure
  - All placeholders replaced

### 5.4: Functionality Verdict

- [ ] ✅ **PASS** - Workflow executes without errors
- [ ] ❌ **FAIL** - Execution errors detected (fix required)

---

## 6. BMAD V6 COMPLIANCE

**Verify workflow follows BMAD v6 conventions:**

### 6.1: workflow.yaml Compliance

**Verify required sections present:**

- [ ] **Metadata section**
  - name, description, author, version, complexity
  - config_source, module_root
  - user_name, communication_language, output_folder
  - date, timestamp (system-generated)

- [ ] **Required MCP servers listed**
  - chrome_devtools (CRITICAL for this workflow)
  - archon (Knowledge base)

- [ ] **Deep-Research configuration**
  - deep_research_sections (5.5, 6.1, 8.9)
  - deep_research_base path
  - archon_sources (priority source IDs)

- [ ] **File paths configured**
  - installed_path
  - template, instructions, validation
  - default_output_file

- [ ] **Inputs/outputs defined**
  - inputs: page_url, animation_description, target_devices, test_conditions
  - outputs: performance_metrics, visual_validation, console_validation, etc.

- [ ] **Success criteria listed**
  - 60fps on high/mid-range
  - 30fps on low-end
  - Zero console errors/warnings
  - prefers-reduced-motion present
  - No memory leaks

- [ ] **Performance standards defined**
  - FPS targets by device profile
  - Frame budget timing standards
  - Console requirements
  - Memory growth thresholds

- [ ] **Web bundle configuration**
  - name, description, path
  - web_bundle_files list (all 4 files)

### 6.2: instructions.md Compliance

**Verify BMAD XML tag usage:**

- [ ] **Required critical tags present**
  - `<critical>` tags at top (workflow engine, workflow.yaml loaded)
  - `<critical>` tag for MANDATORY research checkpoint

- [ ] **Workflow structure correct**
  - `<workflow>` wrapper tag
  - `<step n="X" goal="...">` for each step
  - Steps numbered sequentially (1, 2, 3, 4, 5, 6, 7)

- [ ] **XML tags used correctly**
  - `<action>` for instructions
  - `<ask response="variable">` for user input
  - `<check if="condition">` for conditionals
  - `<template-output>` for checkpoint saves
  - `<goto step="X">` for flow control

- [ ] **Variable resolution**
  - {user_name} references config
  - {communication_language} references config
  - {page_url} from user input
  - {{placeholder}} format for template variables

### 6.3: template.md Compliance

**Verify template structure:**

- [ ] **Uses {{placeholder}} syntax for variables**
  - {{date}}, {{user_name}}, {{animation_description}}
  - {{overall_status}}, {{high_end_fps}}, etc.

- [ ] **Conditional logic for optional sections**
  - {{#if console_errors_count}} ... {{/if}}
  - {{#if mobile_testing_required}} ... {{/if}}
  - {{#each}} loops for lists

- [ ] **Markdown formatting**
  - Headers, tables, lists
  - Code blocks for examples
  - Bold/italic emphasis

### 6.4: checklist.md Compliance

**Verify checklist structure:**

- [ ] **Research Enforcement Test present** (CRITICAL section)
- [ ] **File Path Verification section**
- [ ] **Research Citation Audit section**
- [ ] **Quality Metrics section**
- [ ] **Functionality Tests section**
- [ ] **BMAD V6 Compliance section** (this section)

### 6.5: BMAD V6 Compliance Verdict

- [ ] ✅ **PASS** - Full BMAD v6 compliance
- [ ] ❌ **FAIL** - Compliance issues detected (fix required)

---

## 7. PREMIUM WORKFLOW CERTIFICATION

**Final premium quality determination:**

### 7.1: Premium Criteria Checklist

**All criteria MUST be met for PREMIUM certification:**

- [ ] ✅ **Research enforcement: BLOCKING** (cannot be skipped)
- [ ] ✅ **File paths: All point to Deep-Research** (no agent sidecars)
- [ ] ✅ **Research citations: 5+ verbatim quotes** with sources
- [ ] ✅ **Quality metrics: 2,000-3,000+ total lines**
- [ ] ✅ **Functionality: Workflow executes without errors**
- [ ] ✅ **BMAD v6: Full compliance**
- [ ] ✅ **Content: Research-backed** (GSAP-specific, not generic)
- [ ] ✅ **Growth: 100%+ increase** from pathetic baseline

### 7.2: Premium Certification Decision

**Based on all checks above:**

- [ ] **🟢 PREMIUM CERTIFIED**
  - ALL premium criteria met
  - Research enforcement is MANDATORY and BLOCKING
  - Quality metrics exceed thresholds
  - Content is research-backed
  - Workflow is production-ready

- [ ] **🟡 PREMIUM WITH MINOR ISSUES**
  - Most criteria met
  - Some minor improvements needed
  - Research enforcement works
  - Quality acceptable but could be enhanced

- [ ] **🔴 NOT PREMIUM**
  - Critical criteria not met
  - Research enforcement FAILED (can be skipped)
  - Quality metrics below thresholds
  - Requires rebuild before certification

---

## 8. POST-CERTIFICATION ACTIONS

**If PREMIUM CERTIFIED:**

1. ✅ **Update master plan progress tracker**
   - Mark validate-complete as COMPLETE
   - Update progress: 4/19 workflows complete (optimize-performance, refine-timing, debug-animation, validate-complete)
   - Document metrics: 2,XXX lines, +XXX% growth

2. ✅ **Commit changes**
   ```bash
   git add bmad/gsap-excellence/workflows/validate-complete/
   git commit -m "rebuild: validate-complete - pathetic → PREMIUM (+XXX%)"
   ```

3. ✅ **Document lessons learned**
   - Ultra-rigorous methodology works
   - Research Validation Gate (Step 4) catches issues early
   - Token investment worth it for quality

**If NOT PREMIUM:**

1. ❌ **Identify failure reasons**
   - Review failed checklist items
   - Prioritize research enforcement issues first

2. ❌ **Fix critical issues**
   - Address research gate blocking
   - Fix file paths
   - Add missing quotes/citations
   - Expand content to meet quality metrics

3. ❌ **Re-run this checklist**
   - Repeat until PREMIUM certification achieved

---

## VALIDATION COMPLETE

**Checklist Completed By:** _______________
**Date:** _______________
**Final Certification:** 🟢 PREMIUM / 🟡 MINOR ISSUES / 🔴 NOT PREMIUM

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________
_______________________________________________________________________________

---

**End of Checklist**
