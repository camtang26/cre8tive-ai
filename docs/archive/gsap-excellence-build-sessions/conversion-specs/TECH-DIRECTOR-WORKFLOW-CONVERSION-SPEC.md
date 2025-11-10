# Tech Director - Workflow Conversion Specifications

**Agent:** Tech Director (`gsap-tech-director`)
**Date:** 2025-11-06
**Status:** FINAL AGENT SPEC - Ready for Implementation
**Agent File:** `/bmad/gsap-excellence/agents/gsap-tech-director.md` (1,743 lines)

---

## EXECUTIVE SUMMARY

### Conversion Impact

**Agent File Reduction:**
- **Before:** 1,743 lines total (167 lines inline actions)
- **After:** ~1,582 lines total (6 lines workflow references)
- **Savings:** 161 lines (9.2% reduction)

**Workflows Created:** 3 P1 workflows (all high-priority)
1. `validate-complete/` - Comprehensive validation suite (Chrome DevTools MCP)
2. `optimize-animation/` - KB-powered optimization (Deep-Research 5.1-5.6)
3. `ship-ready-check/` - Production readiness checklist (Deep-Research 6.1-6.3)

**Special Features:**
- **Most extensive Chrome DevTools MCP integration** of any agent
- Performance optimization framework (Deep-Research 5.1-5.6)
- Production readiness standards (Deep-Research 6.1-6.3)
- Multi-device validation (CPU/network throttling)

### Token Efficiency Analysis

**Scenario 1: Activate Tech Director agent, browse menu only**
- Before: 1,743 lines (includes 167 lines inline actions)
- After: 1,582 lines (167 removed, 6 added for workflow references)
- **Savings:** 161 lines (9.2% reduction) ← **PRIMARY WIN**

**Scenario 2: Use validation workflow**
- Before: 1,743 lines (agent with inline validation - 46 lines)
- After: 1,582 lines (agent) + ~1,400 lines (validation workflow) = 2,982 lines
- **Cost:** +1,239 lines
- **Value:** 46-line checklist → comprehensive validation workflow with:
  - MANDATORY Chrome DevTools MCP validation
  - Deep-Research validation frameworks (5.5, 5.6, 6.1-6.3)
  - Structured validation report template
  - 60fps compliance verification
  - Accessibility compliance gates

**Philosophy:** For production validation and optimization (P1), comprehensive KB-backed quality gates > token savings.

---

## CONVERSION SUMMARY TABLE

| # | Inline Action | Lines | Location | Priority | Decision | Reason |
|---|--------------|-------|----------|----------|----------|--------|
| 1 | `*validate` | 46 | 1368-1413 | P1 | **CONVERT** | Complex 5-part validation, Chrome DevTools MCP, needs research gates |
| 2 | `*fps` | 26 | 1414-1439 | P3 | KEEP INLINE | Simple profiling instructions, no research needed |
| 3 | `*screenshot` | 26 | 1440-1465 | P3 | KEEP INLINE | Simple capture instructions, no research needed |
| 4 | `*console` | 19 | 1466-1484 | P3 | KEEP INLINE | Simple console check, no research needed |
| 5 | `*optimize` | 71 | 1485-1555 | P1 | **CONVERT** | Deep-Research 5.1-5.6, Archon queries, complex optimization protocol |
| 6 | `*cross-browser` | 43 | 1556-1598 | P3 | KEEP INLINE | Static browser testing checklist, no research needed |
| 7 | `*ship-ready` | 50 | 1599-1648 | P1 | **CONVERT** | Comprehensive 6-part production checklist, Deep-Research 6.1-6.3 |
| 8 | `*benchmarks` | 35 | 1649-1683 | P3 | KEEP INLINE | Static reference standards, no research needed |

**Summary:**
- **Convert:** 3 workflows (167 lines → 6 lines references) = 161 lines saved
- **Keep Inline:** 5 workflows (149 lines remain) = Simple tools, no research
- **Total Impact:** 9.2% agent file reduction

---

## WORKFLOW 1: *validate → validate-complete/

### Current State (Extraction)

**Location:** Lines 1368-1413 in `/bmad/gsap-excellence/agents/gsap-tech-director.md`

**Complete Inline Action:**

```xml
    <item cmd="*validate" action="inline">Run complete validation (performance + visual + console + accessibility)

🔧 **Complete Validation Suite**

I'll run a comprehensive validation of your animation.

**Prerequisites:**
- Chrome DevTools MCP must be available
- Animation must be running in a browser
- Provide page URL or local dev server

**Validation Checklist:**

**Performance:**
- [ ] FPS profiling (target: 60fps)
- [ ] Paint time analysis (<16ms)
- [ ] JS execution time
- [ ] Memory usage check
- [ ] CPU throttle test (4x)
- [ ] Network throttle test (Slow 3G)

**Visual:**
- [ ] Screenshot capture
- [ ] Visual regression comparison
- [ ] Cross-viewport testing
- [ ] No visual glitches

**Console:**
- [ ] Zero errors required
- [ ] Zero GSAP warnings
- [ ] Clean console output

**Accessibility:**
- [ ] prefers-reduced-motion fallback
- [ ] Keyboard accessibility (if interactive)
- [ ] Focus management
- [ ] No seizure-inducing flashing

**Code Quality:**
- [ ] Cleanup implemented
- [ ] No memory leaks
- [ ] Proper error handling
- [ ] Browser compatibility

*"Let's run the quality gates..."*
    </item>
```

**Analysis:**
- **Lines:** 46 (substantial checklist)
- **Complexity:** HIGH - 5-part validation suite
- **Chrome DevTools:** EXTENSIVE - Screenshots, console, performance profiling
- **Deep-Research:** Sections 5.5 (60fps), 5.6 (testing), 6.1-6.3 (accessibility, production)
- **Research Intensity:** HIGH - Validation patterns, performance gates, accessibility standards
- **Conversion Justification:** Complex multi-part validation needs structured workflow + research enforcement

---

### Target Workflow Structure

**Workflow Name:** `validate-complete`
**Directory:** `{module_root}/workflows/validate-complete/`
**Type:** Validation workflow with Chrome DevTools MCP integration
**Standalone:** Yes (can be called directly)

**Files to Create:**
1. `workflow.yaml` - Workflow configuration with Chrome DevTools MCP
2. `instructions.md` - 6-step validation process with MANDATORY research + Chrome DevTools gates
3. `template.md` - Structured validation report template

**Workflow Steps:**
1. **Gather Context** - URL, animation details, target devices
2. **Research Gate (MANDATORY)** - Validation standards from KB + Deep-Research
3. **Performance Validation** - Chrome DevTools FPS profiling, CPU/network throttling
4. **Visual Validation** - Screenshots, cross-viewport testing
5. **Console Validation** - Error-free console check
6. **Accessibility & Code Quality** - prefers-reduced-motion, cleanup validation
7. **Generate Report** - Structured validation report with pass/fail gates

---

### Complete workflow.yaml

```yaml
# validate-complete Workflow - GSAP Excellence Engine
# Comprehensive validation suite: performance + visual + console + accessibility
# Agent: Tech Director (lead validator)
# Complexity: High (Chrome DevTools MCP + multi-part validation)

name: validate-complete
description: "Run comprehensive GSAP animation validation: 60fps compliance, visual verification, console checks, accessibility gates using Chrome DevTools MCP"
author: "GSAP Excellence Engine"
version: "1.0.0-alpha"
complexity: "high"

config_source: "{project-root}/bmad/gsap-excellence/config.yaml"
module_root: "{project-root}/bmad/gsap-excellence"
user_name: "{config_source}:user_name"
communication_language: "{config_source}:communication_language"
output_folder: "{config_source}:output_folder"
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from Tech Director agent menu)

# MCP integration (EXTENSIVE - most of any workflow)
mcp_servers:
  chrome_devtools:
    tools:
      - "take_screenshot"
      - "list_console_messages"
      - "evaluate_script"
      - "emulate_cpu"
      - "emulate_network"
      - "performance_start_trace"
      - "performance_stop_trace"
    purpose: "Performance profiling, visual validation, console error detection, CPU/network throttling"

  archon:
    tools: ["rag_search_knowledge_base", "rag_search_code_examples"]
    purpose: "Validation best practices, 60fps standards, accessibility patterns"

  context7:
    tools: ["get-library-docs"]
    purpose: "Latest GSAP validation APIs"

# Multi-agent coordination
agents:
  tech_director: "gsap-tech-director"  # Lead validator
  editor: "gsap-editor"  # Code quality validation support

installed_path: "{module_root}/workflows/validate-complete"
template: "{installed_path}/template.md"
instructions: "{installed_path}/instructions.md"
validation: false

default_output_file: "{output_folder}/gsap-validation-report-{{date}}.md"

# Inputs
inputs:
  page_url:
    description: "Dev server URL or live page URL for testing"
    required: true

  animation_description:
    description: "What animation is being validated?"
    required: true

  target_devices:
    description: "Target devices (desktop, mobile, both)"
    required: true
    default: "both"

  test_conditions:
    description: "Test conditions (normal, throttled, both)"
    required: false
    default: "both"

# Outputs
outputs:
  validation_report:
    format: "Structured validation report with 5 validation gates"

  performance_metrics:
    format: "FPS, paint time, JS execution time, memory usage"

  visual_validation:
    format: "Screenshots with pass/fail assessment"

  console_validation:
    format: "Console errors/warnings with severity"

  accessibility_validation:
    format: "prefers-reduced-motion, keyboard nav, focus management"

# Success criteria
success_criteria:
  - "60fps achieved on target devices (normal + 4x throttle)"
  - "Paint time <16ms per frame"
  - "Zero console errors"
  - "Zero GSAP warnings"
  - "prefers-reduced-motion fallback present"
  - "Visual validation passed"
  - "No memory leaks detected"

# Performance standards (GSAP Excellence)
performance_standards:
  fps:
    high_end: 60  # No throttling
    mid_range: 60  # 4x CPU throttle
    low_end: 30   # 6x CPU throttle (minimum)

  timing:
    paint_time_max: 16  # ms per frame (60fps budget)
    js_execution_max: 5  # ms per frame

  console:
    errors: 0  # REQUIRED
    warnings: 0  # REQUIRED

# Deep-Research sections
deep_research_sections:
  - "5.5"  # 60fps Optimization
  - "5.6"  # Testing & Validation
  - "6.1"  # Browser Compatibility
  - "6.2"  # Accessibility
  - "6.3"  # Production Readiness

estimated_duration: "20-30 minutes"
```

---

### Complete instructions.md

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/validate-complete/workflow.yaml</critical>

# validate-complete Workflow Instructions

<workflow>

<step n="1" goal="Gather Validation Context">
<ask response="page_url">What's the dev server URL or live page URL for testing?</ask>
<ask response="animation_description">What animation are we validating?</ask>
<ask response="target_devices">Target devices? (desktop, mobile, or both)</ask>
<ask response="test_conditions">Test conditions? (normal, throttled, or both)</ask>

<template-output>page_url, animation_description, target_devices, test_conditions</template-output>
</step>

<step n="2" goal="Research Gate (MANDATORY) - Validation Standards">

<critical>MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP</critical>

This research gate is **BLOCKING**. You MUST complete ALL research before proceeding to Step 3.

### PRIMARY RESEARCH: Archon MCP (GSAP Knowledge Base)

**Query 1: 60fps Validation Standards (REQUIRED)**
```
rag_search_knowledge_base("60fps validation performance standards", match_count=5)
```
**Purpose:** Understand what 60fps means in practice (frame time budgets, throttling tests)

**Query 2: Performance Profiling Techniques (REQUIRED)**
```
rag_search_knowledge_base("GSAP performance profiling Chrome DevTools", match_count=5)
```
**Purpose:** Learn how to properly profile GSAP animations (what to measure, how to interpret)

**Query 3: Accessibility Validation (REQUIRED)**
```
rag_search_knowledge_base("prefers-reduced-motion validation testing", match_count=5)
```
**Purpose:** Understand accessibility gates (prefers-reduced-motion, keyboard nav, focus)

**Query 4: Console Error Patterns (REQUIRED)**
```
rag_search_knowledge_base("GSAP console errors warnings common issues", match_count=5)
```
**Purpose:** Know what errors/warnings mean, how to interpret them

**Query 5: Validation Code Examples (OPTIONAL but RECOMMENDED)**
```
rag_search_code_examples("Chrome DevTools performance validation", match_count=3)
```
**Purpose:** See examples of validation code patterns

### SECONDARY RESEARCH: Deep-Research Frameworks (REQUIRED)

**Section 5.5: 60fps Optimization** (REQUIRED)
- What are the 60fps standards?
- Paint time budgets (<16ms per frame)
- JS execution budgets (<5ms per frame)
- What's acceptable performance on throttled devices?

**Section 5.6: Testing & Validation** (REQUIRED)
- What testing methodologies exist?
- How to validate across devices?
- CPU throttling test protocols (4x, 6x)
- Network throttling relevance

**Section 6.1: Browser Compatibility** (REQUIRED)
- Which browsers must pass validation?
- Known browser quirks (Safari, iOS)
- Fallback validation

**Section 6.2: Accessibility** (REQUIRED)
- prefers-reduced-motion (MANDATORY)
- Keyboard navigation validation
- Focus management validation
- Seizure risk assessment (no rapid flashing)

**Section 6.3: Production Readiness** (REQUIRED)
- What makes an animation production-ready?
- Code quality gates (cleanup, error handling)
- Memory leak detection
- Browser compatibility standards

### TERTIARY RESEARCH: Context7 MCP (OPTIONAL)

**If GSAP version-specific validation needed:**
```
resolve-library-id("gsap")
get-library-docs("/greensock/gsap", topic="performance testing")
```
**Purpose:** Latest GSAP validation APIs, testing methods

### FALLBACK: Web Search (If KB insufficient)

**Only if Archon + Deep-Research don't provide answers:**
```
WebSearch("Chrome DevTools GSAP performance profiling 2025")
WebSearch("Web Vitals animation validation standards")
```

<research-validation>
Before proceeding, verify you have:
- ✅ Understood 60fps standards (frame time budgets)
- ✅ Learned performance profiling techniques
- ✅ Reviewed accessibility validation gates
- ✅ Studied console error patterns
- ✅ Read Deep-Research Sections 5.5, 5.6, 6.1-6.3
- ✅ Identified validation best practices from KB

If any checkbox unchecked → HALT and complete research.
</research-validation>

<template-output>research_summary, validation_standards_from_kb</template-output>
</step>

<step n="3" goal="Performance Validation (Chrome DevTools MCP)">

<critical>Chrome DevTools MCP REQUIRED for this step</critical>

### 3.1: Navigate to Page
<action>Use Chrome DevTools MCP: navigate_page(page_url)</action>
<action>Wait for animation to be ready</action>

### 3.2: FPS Profiling - Normal Conditions
<action>Use Chrome DevTools MCP: performance_start_trace(reload=true, autoStop=false)</action>
<action>Let animation run for 5-10 seconds</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

**Analyze Results:**
- Average FPS (target: 60fps)
- Minimum FPS (should not drop below 55fps)
- Paint time per frame (target: <16ms)
- JS execution time per frame (target: <5ms)

### 3.3: CPU Throttling Test (4x Slowdown - Mid-Range Devices)
<action>Use Chrome DevTools MCP: emulate_cpu(throttlingRate=4)</action>
<action>Reload page and re-run animation</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=true, autoStop=false)</action>
<action>Let animation run for 5-10 seconds</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

**Analyze Results:**
- Average FPS (target: 60fps even with 4x throttle)
- If FPS drops below 60fps → PERFORMANCE ISSUE (optimization needed)

### 3.4: CPU Throttling Test (6x Slowdown - Low-End Devices)
<action>Use Chrome DevTools MCP: emulate_cpu(throttlingRate=6)</action>
<action>Reload page and re-run animation</action>
<action>Use Chrome DevTools MCP: performance_start_trace(reload=true, autoStop=false)</action>
<action>Let animation run for 5-10 seconds</action>
<action>Use Chrome DevTools MCP: performance_stop_trace()</action>

**Analyze Results:**
- Average FPS (minimum acceptable: 30fps)
- If FPS drops below 30fps → CRITICAL PERFORMANCE ISSUE

### 3.5: Network Throttling Test (Optional - If Animation Loads Assets)
<check if="animation_loads_assets">
<action>Use Chrome DevTools MCP: emulate_network(throttlingOption="Slow 3G")</action>
<action>Reload page and observe loading behavior</action>
<action>Reset: emulate_network(throttlingOption="No emulation")</action>
</check>

### 3.6: Memory Leak Check
<action>Run animation multiple times (5+ cycles)</action>
<action>Use Chrome DevTools MCP: evaluate_script to check memory usage:
```javascript
() => {
  return {
    usedJSHeapSize: performance.memory.usedJSHeapSize,
    totalJSHeapSize: performance.memory.totalJSHeapSize,
    jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
  };
}
```
</action>

**Check:** Memory should NOT continuously grow across animation cycles.

<template-output>performance_metrics, fps_results, throttling_results, memory_check</template-output>
</step>

<step n="4" goal="Visual Validation (Screenshots)">

<action>Use Chrome DevTools MCP: take_screenshot() before animation starts</action>
<action>Trigger animation</action>
<action>Use Chrome DevTools MCP: take_screenshot() mid-animation (key frame)</action>
<action>Use Chrome DevTools MCP: take_screenshot() after animation completes</action>

**Visual Checks:**
- No visual glitches
- Animation renders correctly
- No layout shifts
- Responsive behavior (if applicable)

<check if="mobile_testing_required">
<action>Use Chrome DevTools MCP: resize_page(width=375, height=667) for mobile viewport</action>
<action>Take screenshots at mobile size</action>
<action>Verify responsive animation behavior</action>
</check>

<template-output>visual_validation_screenshots, visual_issues_detected</template-output>
</step>

<step n="5" goal="Console Validation (Error-Free Check)">

<action>Use Chrome DevTools MCP: list_console_messages(types=["error", "warn"])</action>

**Validation Gates:**
- ✅ **PASS:** Zero JavaScript errors
- ✅ **PASS:** Zero GSAP warnings
- ⚠️ **WARNING:** Other warnings (review case-by-case)
- ❌ **FAIL:** Any JavaScript errors or GSAP warnings

<check if="errors_detected">
<action>For each error: Use Chrome DevTools MCP: get_console_message(msgid) to get full details</action>
<action>Document error, severity, and recommended fix</action>
</check>

<template-output>console_validation_results, errors_list, warnings_list</template-output>
</step>

<step n="6" goal="Accessibility & Code Quality Validation">

### 6.1: prefers-reduced-motion Check (MANDATORY)
<action>Use Chrome DevTools MCP: evaluate_script to check for prefers-reduced-motion support:
```javascript
() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return {
    supported: true,
    currentValue: mediaQuery.matches,
    listenerAttached: !!window.gsap?.config?.prefersReducedMotion
  };
}
```
</action>

**Gate:** Animation MUST respect prefers-reduced-motion (GSAP 3.13+: autoDetect or manual handling)

### 6.2: Keyboard Accessibility (If Interactive)
<check if="animation_is_interactive">
<action>Test keyboard navigation (Tab, Enter, Escape)</action>
<action>Verify focus states are visible</action>
<action>Verify animation can be paused/dismissed via keyboard</action>
</check>

### 6.3: Code Quality (From Research)
**Based on KB research and Deep-Research Section 6.3:**
- ✅ Cleanup implemented? (kill() on unmount, ScrollTrigger cleanup)
- ✅ Error handling present?
- ✅ No memory leaks? (verified in Step 3.6)
- ✅ Browser compatibility? (Chrome, Firefox, Safari tested)

<template-output>accessibility_validation, keyboard_nav_results, code_quality_assessment</template-output>
</step>

<step n="7" goal="Generate Validation Report">
<action>Compile all validation results using template.md</action>
<action>Save to: {{default_output_file}}</action>

**Report Structure:**
1. **Executive Summary** - Overall pass/fail status, critical issues
2. **Performance Validation** - FPS metrics, throttling results, memory check
3. **Visual Validation** - Screenshots, visual issues
4. **Console Validation** - Error-free status, warnings
5. **Accessibility Validation** - prefers-reduced-motion, keyboard nav
6. **Code Quality Assessment** - Cleanup, error handling, browser compatibility
7. **Final Verdict** - 🟢 PASS / 🟡 PASS WITH WARNINGS / 🔴 FAIL
8. **Action Items** - Required fixes before production (if any)

<template-output>final_validation_report</template-output>
</step>

</workflow>
```

---

### Complete template.md

```markdown
# GSAP Animation Validation Report

**Generated:** {{date}}
**Validator:** {{user_name}}
**Animation:** {{animation_description}}
**Page URL:** {{page_url}}

---

## EXECUTIVE SUMMARY

**Overall Status:** {{overall_status}}
<!-- 🟢 PASS / 🟡 PASS WITH WARNINGS / 🔴 FAIL -->

**Critical Issues:** {{critical_issues_count}}
**Warnings:** {{warnings_count}}
**Recommendations:** {{recommendations_count}}

**Quick Summary:**
{{executive_summary_text}}

---

## 1. PERFORMANCE VALIDATION

### 1.1 FPS Profiling

**Target Devices:** {{target_devices}}

#### Normal Conditions (No Throttling)
- **Average FPS:** {{fps_normal_avg}} (Target: 60fps)
- **Minimum FPS:** {{fps_normal_min}} (Should not drop below 55fps)
- **Status:** {{fps_normal_status}}

#### Mid-Range Devices (4x CPU Throttle)
- **Average FPS:** {{fps_4x_avg}} (Target: 60fps)
- **Minimum FPS:** {{fps_4x_min}}
- **Status:** {{fps_4x_status}}

#### Low-End Devices (6x CPU Throttle)
- **Average FPS:** {{fps_6x_avg}} (Minimum: 30fps)
- **Minimum FPS:** {{fps_6x_min}}
- **Status:** {{fps_6x_status}}

### 1.2 Frame Timing

- **Paint Time (avg):** {{paint_time_avg}}ms (Target: <16ms)
- **JS Execution (avg):** {{js_execution_avg}}ms (Target: <5ms)
- **Status:** {{frame_timing_status}}

### 1.3 Memory Check

- **Initial Memory:** {{memory_initial}}MB
- **After 5 Cycles:** {{memory_after_cycles}}MB
- **Growth Rate:** {{memory_growth_rate}}%
- **Memory Leak Detected:** {{memory_leak_detected}}
- **Status:** {{memory_status}}

**Performance Verdict:** {{performance_verdict}}

---

## 2. VISUAL VALIDATION

### 2.1 Screenshots

**Before Animation:**
{{screenshot_before_path}}

**Mid-Animation (Key Frame):**
{{screenshot_mid_path}}

**After Animation:**
{{screenshot_after_path}}

### 2.2 Visual Issues Detected

{{visual_issues_list}}

**Visual Verdict:** {{visual_verdict}}

---

## 3. CONSOLE VALIDATION

### 3.1 Error Analysis

**Total Errors:** {{errors_count}} (Required: 0)
**Total Warnings:** {{warnings_count}} (Required: 0)

{{errors_detailed_list}}

### 3.2 Console Status

- ✅ / ❌ **Zero JavaScript Errors:** {{zero_errors}}
- ✅ / ❌ **Zero GSAP Warnings:** {{zero_gsap_warnings}}
- ✅ / ⚠️ **Other Warnings:** {{other_warnings}}

**Console Verdict:** {{console_verdict}}

---

## 4. ACCESSIBILITY VALIDATION

### 4.1 prefers-reduced-motion (MANDATORY)

- **Supported:** {{prefers_reduced_motion_supported}}
- **Fallback Implemented:** {{prefers_reduced_motion_fallback}}
- **Status:** {{prefers_reduced_motion_status}}

### 4.2 Keyboard Accessibility

<check if="animation_is_interactive">
- **Tab Navigation:** {{keyboard_tab_navigation}}
- **Focus States Visible:** {{keyboard_focus_visible}}
- **Pause/Dismiss via Keyboard:** {{keyboard_pause_dismiss}}
- **Status:** {{keyboard_accessibility_status}}
</check>

### 4.3 Seizure Risk Assessment

- **Rapid Flashing Detected:** {{rapid_flashing_detected}}
- **Status:** {{seizure_risk_status}}

**Accessibility Verdict:** {{accessibility_verdict}}

---

## 5. CODE QUALITY ASSESSMENT

### 5.1 Cleanup Implementation

- **Animations Killed on Unmount:** {{cleanup_animations_killed}}
- **ScrollTriggers Cleaned Up:** {{cleanup_scrolltriggers}}
- **Event Listeners Removed:** {{cleanup_event_listeners}}
- **Status:** {{cleanup_status}}

### 5.2 Error Handling

- **Try-Catch Blocks Present:** {{error_handling_present}}
- **Graceful Degradation:** {{graceful_degradation}}
- **Status:** {{error_handling_status}}

### 5.3 Browser Compatibility

- **Chrome:** {{browser_chrome}}
- **Firefox:** {{browser_firefox}}
- **Safari:** {{browser_safari}}
- **Mobile:** {{browser_mobile}}
- **Status:** {{browser_compatibility_status}}

**Code Quality Verdict:** {{code_quality_verdict}}

---

## 6. RESEARCH CITATIONS

**Knowledge Base References:**
{{kb_citations_list}}

**Deep-Research Sections Applied:**
- Section 5.5: 60fps Optimization
- Section 5.6: Testing & Validation
- Section 6.1: Browser Compatibility
- Section 6.2: Accessibility
- Section 6.3: Production Readiness

---

## 7. FINAL VERDICT

**Status:** {{final_verdict}}

### ✅ PASS Criteria Met:
{{pass_criteria_met_list}}

### ❌ FAIL Criteria Not Met:
{{fail_criteria_not_met_list}}

### ⚠️ Warnings:
{{warnings_list}}

---

## 8. ACTION ITEMS

### 🔴 CRITICAL (Must Fix Before Production):
{{critical_action_items}}

### 🟡 RECOMMENDED (Should Address Soon):
{{recommended_action_items}}

### 🟢 NICE-TO-HAVE (Future Improvements):
{{nice_to_have_action_items}}

---

**Validation Complete:** {{date}}
**Next Steps:** {{next_steps}}

---

*Generated by GSAP Excellence Engine - validate-complete workflow*
*Research-backed validation using Archon KB + Deep-Research Frameworks 5.5, 5.6, 6.1-6.3*
```

---

### Agent Menu Update

**BEFORE (Current - Inline Action):**
```xml
    <item cmd="*validate" action="inline">Run complete validation (performance + visual + console + accessibility)

🔧 **Complete Validation Suite**

I'll run a comprehensive validation of your animation.

**Prerequisites:**
- Chrome DevTools MCP must be available
- Animation must be running in a browser
- Provide page URL or local dev server

**Validation Checklist:**

**Performance:**
- [ ] FPS profiling (target: 60fps)
- [ ] Paint time analysis (<16ms)
- [ ] JS execution time
- [ ] Memory usage check
- [ ] CPU throttle test (4x)
- [ ] Network throttle test (Slow 3G)

**Visual:**
- [ ] Screenshot capture
- [ ] Visual regression comparison
- [ ] Cross-viewport testing
- [ ] No visual glitches

**Console:**
- [ ] Zero errors required
- [ ] Zero GSAP warnings
- [ ] Clean console output

**Accessibility:**
- [ ] prefers-reduced-motion fallback
- [ ] Keyboard accessibility (if interactive)
- [ ] Focus management
- [ ] No seizure-inducing flashing

**Code Quality:**
- [ ] Cleanup implemented
- [ ] No memory leaks
- [ ] Proper error handling
- [ ] Browser compatibility

*"Let's run the quality gates..."*
    </item>
```

**AFTER (Workflow Reference):**
```xml
    <item cmd="*validate" workflow="{module_root}/workflows/validate-complete/workflow.yaml">
      Run comprehensive GSAP animation validation: 60fps compliance, visual verification, console checks, accessibility gates using Chrome DevTools MCP
    </item>
```

**Line Savings:** 46 lines → 2 lines = **44 lines saved**

---

### Testing Protocol

#### Test Scenario 1: Basic Validation (Chrome DevTools Available)
**Input:**
- Page URL: `http://localhost:8080/animations/hero`
- Animation: "Hero section entrance animation"
- Target devices: "both" (desktop + mobile)
- Test conditions: "both" (normal + throttled)

**Expected Output:**
1. Research gate triggers (Archon queries for validation standards)
2. Chrome DevTools MCP navigates to page
3. Performance profiling under normal, 4x, 6x CPU throttle
4. Screenshots captured (before, mid, after)
5. Console checked (errors/warnings)
6. Accessibility validation (prefers-reduced-motion)
7. Structured validation report generated with pass/fail verdict

**Success Criteria:**
- ✅ Research gate CANNOT be skipped
- ✅ All 5 validation sections complete (Performance, Visual, Console, Accessibility, Code Quality)
- ✅ Chrome DevTools MCP tools used correctly
- ✅ Report includes KB citations
- ✅ Final verdict is clear (PASS/PASS WITH WARNINGS/FAIL)

#### Test Scenario 2: Research Enforcement Test (CRITICAL)
**Input:**
- Attempt to skip Step 2 (Research Gate)
- Try to proceed directly to Step 3 (Performance Validation)

**Expected Behavior:**
- ❌ Workflow HALTS at Step 2
- ❌ Error message: "MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP"
- ❌ Cannot proceed to Step 3 until research complete

**Success Criteria:**
- ✅ Research gate is BLOCKING (cannot skip)
- ✅ Workflow enforces research completion before validation

#### Test Scenario 3: Validation Failure Detection
**Input:**
- Animation with console errors (intentional)
- FPS drops below 30fps on 6x throttle
- Missing prefers-reduced-motion fallback

**Expected Output:**
1. Console validation FAILS (errors detected)
2. Performance validation FAILS (FPS below minimum)
3. Accessibility validation FAILS (no prefers-reduced-motion)
4. Final verdict: 🔴 FAIL
5. Action items list critical fixes required

**Success Criteria:**
- ✅ Workflow correctly identifies failures
- ✅ Report clearly shows FAIL verdict
- ✅ Action items prioritized (critical fixes listed)

#### Test Scenario 4: Chrome DevTools MCP Integration Test
**Input:**
- Test all Chrome DevTools MCP tools used in workflow
- Verify CPU throttling works correctly
- Verify screenshots captured successfully

**Expected Behavior:**
- ✅ navigate_page() loads page correctly
- ✅ performance_start_trace() / performance_stop_trace() work
- ✅ emulate_cpu() throttles correctly (4x, 6x)
- ✅ take_screenshot() captures images
- ✅ list_console_messages() retrieves errors/warnings
- ✅ evaluate_script() runs custom validation checks

**Success Criteria:**
- ✅ All Chrome DevTools MCP tools function correctly
- ✅ Error handling for missing Chrome DevTools MCP

#### Test Scenario 5: Token Efficiency Verification
**Input:**
- Activate Tech Director agent WITHOUT calling validate workflow

**Expected Behavior:**
- Agent loads with validation workflow reference (2 lines)
- Validation workflow NOT loaded yet (saves ~1,400 lines)

**Success Criteria:**
- ✅ Agent activation without workflow = 9.2% token savings
- ✅ Workflow loads ONLY when called

---

## WORKFLOW 2: *optimize → optimize-animation/

### Current State (Extraction)

**Location:** Lines 1485-1555 in `/bmad/gsap-excellence/agents/gsap-tech-director.md`

**Complete Inline Action:**

```xml
    <item cmd="*optimize" action="inline">KB-powered optimization recommendations using Deep-Research

🔧 **Optimization Recommendations (KB-Powered)**

I'll analyze your animation and provide targeted optimizations backed by Deep-Research performance frameworks.

**Please provide:**
1. Animation code or profiling results
2. Current FPS (if known)
3. Target devices (desktop, mobile, both)
4. Symptoms (jank, slow, memory issues, etc.)

**My Optimization Protocol:**

<!-- Step 1: Apply Deep-Research Performance Frameworks -->
<action>Reference ALL Performance Sections (5.1-5.6):
  - Section 5.1: GPU Rule → Are you animating transform/opacity only?
  - Section 5.2: Main Thread → Is animation taking <16ms per frame?
  - Section 5.3: Debugging Jank → Identify bottlenecks
  - Section 5.4: Memory Management → Check for leaks
  - Section 5.5: 60fps Optimization → Meet performance targets
  - Section 5.6: WebGL/Canvas → Consider alternative approaches?
</action>

<!-- Step 2: Query Archon for Optimization Patterns -->
<action>Search Archon for proven optimization techniques:
  - rag_search_knowledge_base("60fps optimization techniques")
  - rag_search_knowledge_base("GPU acceleration [issue_type]")
  - rag_search_knowledge_base("layout thrashing prevention")
  - rag_search_code_examples("performance optimization patterns")
  - Find KB examples of optimized implementations
</action>

<!-- Step 3: Cross-Reference Accessibility -->
<action>Ensure optimizations maintain accessibility (Sections 6.1-6.4):
  - Section 6.1: prefers-reduced-motion still supported?
  - Section 6.2: Keyboard navigation still works?
  - Optimization shouldn't break accessibility!
</action>

<!-- Step 4: WebSearch for Latest Techniques (if needed) -->
<action>If bleeding-edge optimization needed:
  - WebSearch("GSAP performance optimization 2025")
  - WebSearch("Web Vitals animation optimization")
  - Find 2024-2025 specific techniques
</action>

**Optimization Output:**
- 🎯 Specific issues identified (with Deep-Research citations)
- ⚡ Performance gains expected (FPS improvement estimates)
- 🛠️ Code changes recommended (with examples)
- 📊 Benchmark targets (60fps, <16ms paint, <5ms JS)
- ✅ Validation steps (how to verify improvements)
- ♿ Accessibility preserved (confirms prefers-reduced-motion works)

**Common Optimizations (from Deep-Research 5.1-5.5):**
- ✅ GPU acceleration (transform, opacity only) - Section 5.1
- ✅ will-change property (use sparingly!) - Section 5.5
- ✅ Avoid layout thrashing - Section 5.2
- ✅ RAF throttling for complex calculations - Section 5.2
- ✅ Simplify if dropping frames - Section 5.5

*"Let me optimize this using proven performance frameworks..."*

**Performance Budget:**
- Paint time: <16ms per frame (60fps)
- JS execution: <5ms per frame
- Bundle size: <100KB (GSAP + plugins)

*"Measure, then optimize."*
    </item>
```

**Analysis:**
- **Lines:** 71 (substantial optimization protocol)
- **Complexity:** VERY HIGH - Systematic 6-part performance framework
- **Deep-Research:** Explicit sections 5.1-5.6 (complete performance framework)
- **Archon Queries:** Multiple targeted searches (60fps, GPU, layout thrashing)
- **WebSearch:** Fallback for bleeding-edge techniques
- **Research Intensity:** VERY HIGH - Most research-heavy workflow
- **Conversion Justification:** Explicit research protocol requires structured workflow with MANDATORY gates

---

### Target Workflow Structure

**Workflow Name:** `optimize-animation`
**Directory:** `{module_root}/workflows/optimize-animation/`
**Type:** Optimization workflow with Deep-Research 5.1-5.6 framework
**Standalone:** Yes (can be called directly)

**Files to Create:**
1. `workflow.yaml` - Workflow configuration with Deep-Research 5.1-5.6 metadata
2. `instructions.md` - 7-step optimization process with MANDATORY research (6-part framework)
3. `template.md` - Structured optimization report template

**Workflow Steps:**
1. **Gather Context** - Animation code, current FPS, symptoms
2. **Research Gate (MANDATORY)** - Deep-Research 5.1-5.6 framework + Archon queries
3. **Performance Analysis** - Apply 6-part framework to identify bottlenecks
4. **Optimization Recommendations** - Targeted fixes with KB citations
5. **Accessibility Preservation Check** - Ensure optimizations don't break accessibility
6. **Generate Report** - Structured optimization report with before/after estimates

---

### Complete workflow.yaml

```yaml
# optimize-animation Workflow - GSAP Excellence Engine
# KB-powered optimization recommendations using Deep-Research 5.1-5.6 framework
# Agent: Tech Director (lead optimizer)
# Complexity: Very High (most research-intensive workflow)

name: optimize-animation
description: "Analyze GSAP animations and provide targeted optimizations backed by Deep-Research performance frameworks (5.1-5.6): GPU Rule, Main Thread, Jank Debugging, Memory, 60fps, WebGL"
author: "GSAP Excellence Engine"
version: "1.0.0-alpha"
complexity: "very-high"

config_source: "{project-root}/bmad/gsap-excellence/config.yaml"
module_root: "{project-root}/bmad/gsap-excellence"
user_name: "{config_source}:user_name"
communication_language: "{config_source}:communication_language"
output_folder: "{config_source}:output_folder"
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from Tech Director agent menu)

# MCP integration
mcp_servers:
  archon:
    tools: ["rag_search_knowledge_base", "rag_search_code_examples"]
    purpose: "Optimization patterns, 60fps techniques, GPU acceleration, layout thrashing prevention"

  context7:
    tools: ["get-library-docs"]
    purpose: "Latest GSAP performance APIs"

# Multi-agent coordination
agents:
  tech_director: "gsap-tech-director"  # Lead optimizer
  editor: "gsap-editor"  # Code analysis support

installed_path: "{module_root}/workflows/optimize-animation"
template: "{installed_path}/template.md"
instructions: "{installed_path}/instructions.md"
validation: false

default_output_file: "{output_folder}/gsap-optimization-report-{{date}}.md"

# Inputs
inputs:
  animation_code:
    description: "Animation code to optimize (or profiling results)"
    required: true

  current_fps:
    description: "Current FPS performance (if known)"
    required: false

  target_devices:
    description: "Target devices (desktop, mobile, both)"
    required: true
    default: "both"

  symptoms:
    description: "Performance symptoms (jank, slow, memory issues, etc.)"
    required: true

# Outputs
outputs:
  optimization_report:
    format: "Structured optimization report with 6-part framework analysis"

  bottleneck_analysis:
    format: "Identified performance bottlenecks with Deep-Research citations"

  optimization_recommendations:
    format: "Targeted code changes with KB examples"

  performance_estimates:
    format: "Expected FPS improvements, timing improvements"

  accessibility_check:
    format: "Confirmation that optimizations preserve accessibility"

# Success criteria
success_criteria:
  - "All 6 Deep-Research framework sections applied (5.1-5.6)"
  - "Archon KB queries completed for optimization patterns"
  - "Specific bottlenecks identified with citations"
  - "Code recommendations provided with examples"
  - "Accessibility preserved (prefers-reduced-motion still works)"
  - "Performance improvement estimates provided"

# Performance framework (Deep-Research 5.1-5.6)
performance_framework:
  section_5_1:
    name: "GPU Rule"
    focus: "Transform/opacity only for 60fps"

  section_5_2:
    name: "Main Thread"
    focus: "Animation <16ms per frame, JS <5ms"

  section_5_3:
    name: "Debugging Jank"
    focus: "Identify bottlenecks (layout thrashing, expensive properties)"

  section_5_4:
    name: "Memory Management"
    focus: "Memory leaks, cleanup patterns"

  section_5_5:
    name: "60fps Optimization"
    focus: "will-change, simplification, RAF throttling"

  section_5_6:
    name: "WebGL/Canvas"
    focus: "Alternative approaches for complex animations"

# Deep-Research sections
deep_research_sections:
  - "5.1"  # GPU Rule
  - "5.2"  # Main Thread
  - "5.3"  # Debugging Jank
  - "5.4"  # Memory Management
  - "5.5"  # 60fps Optimization
  - "5.6"  # WebGL/Canvas Alternatives
  - "6.1"  # Browser Compatibility (for optimization compatibility)
  - "6.2"  # Accessibility (preserve during optimization)

# Performance benchmarks
performance_benchmarks:
  fps:
    target: 60
    minimum: 30  # Low-end devices

  timing:
    paint_time_max: 16  # ms per frame
    js_execution_max: 5  # ms per frame

  bundle_size:
    gsap_core: 50  # KB gzipped
    with_scrolltrigger: 75  # KB gzipped
    full_plugins: 100  # KB gzipped (max)

estimated_duration: "20-30 minutes"
```

---

### Complete instructions.md

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/optimize-animation/workflow.yaml</critical>

# optimize-animation Workflow Instructions

<workflow>

<step n="1" goal="Gather Optimization Context">
<ask response="animation_code">Provide the animation code to optimize (or profiling results)</ask>
<ask response="current_fps">What's the current FPS? (if known)</ask>
<ask response="target_devices">Target devices? (desktop, mobile, or both)</ask>
<ask response="symptoms">What performance symptoms are you seeing? (jank, slow, memory issues, etc.)</ask>

<template-output>animation_code, current_fps, target_devices, symptoms</template-output>
</step>

<step n="2" goal="Research Gate (MANDATORY) - Performance Optimization Framework">

<critical>MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP</critical>

This research gate is **BLOCKING**. You MUST complete ALL research before proceeding to Step 3.

This is the **MOST RESEARCH-INTENSIVE WORKFLOW** in GSAP Excellence. The 6-part Deep-Research framework (5.1-5.6) is MANDATORY.

### PRIMARY RESEARCH: Deep-Research Framework 5.1-5.6 (ALL REQUIRED)

**Section 5.1: GPU Rule (REQUIRED)**
- **What is the GPU rule?** (Transform/opacity only for 60fps)
- **Why does GPU acceleration matter?**
- **What properties trigger GPU acceleration?**
- **What properties force CPU rendering?**
- **How to verify GPU acceleration is active?**

**Purpose:** Understand which properties can be animated at 60fps without jank.

**Section 5.2: Main Thread (REQUIRED)**
- **What is the main thread budget?** (<16ms per frame for 60fps)
- **JS execution budget?** (<5ms per frame)
- **What causes main thread blocking?**
- **Layout thrashing patterns?**
- **How to measure main thread time?**

**Purpose:** Understand frame time budgets and main thread constraints.

**Section 5.3: Debugging Jank (REQUIRED)**
- **What causes jank?** (Dropped frames, layout thrashing, expensive properties)
- **How to identify jank sources?** (Chrome DevTools profiling)
- **Common jank patterns in GSAP?**
- **How to fix jank systematically?**

**Purpose:** Learn systematic jank debugging methodology.

**Section 5.4: Memory Management (REQUIRED)**
- **What causes memory leaks in GSAP?** (Animations not killed, ScrollTriggers not cleaned)
- **How to detect memory leaks?** (Chrome DevTools memory profiler)
- **Cleanup patterns?** (kill(), ScrollTrigger.getAll().forEach(st => st.kill()))
- **Memory optimization techniques?**

**Purpose:** Understand memory leak prevention and cleanup patterns.

**Section 5.5: 60fps Optimization (REQUIRED)**
- **will-change property:** When to use, when to avoid, how to use sparingly
- **Simplification strategies:** Reduce complexity when dropping frames
- **RAF throttling:** For complex calculations outside animation loop
- **Optimization checklist:** Systematic 60fps optimization steps

**Purpose:** Learn advanced optimization techniques for 60fps.

**Section 5.6: WebGL/Canvas Alternatives (REQUIRED)**
- **When to use WebGL?** (Hundreds of elements, complex effects)
- **When to use Canvas?** (Particle systems, complex shapes)
- **When to stick with GSAP DOM?** (Most cases)
- **Performance trade-offs?**

**Purpose:** Understand when to consider alternative rendering approaches.

### SECONDARY RESEARCH: Archon MCP (ALL REQUIRED)

**Query 1: 60fps Optimization Techniques (REQUIRED)**
```
rag_search_knowledge_base("60fps optimization techniques GSAP", match_count=5)
```
**Purpose:** Find proven optimization patterns from KB

**Query 2: GPU Acceleration for Symptoms (REQUIRED)**
```
rag_search_knowledge_base("GPU acceleration [symptoms]", match_count=5)
```
**Purpose:** Targeted solutions for specific performance issues

**Query 3: Layout Thrashing Prevention (REQUIRED)**
```
rag_search_knowledge_base("layout thrashing prevention GSAP", match_count=5)
```
**Purpose:** Avoid common layout thrashing patterns

**Query 4: will-change Best Practices (REQUIRED)**
```
rag_search_knowledge_base("will-change property optimization", match_count=5)
```
**Purpose:** Learn when/how to use will-change correctly

**Query 5: Optimization Code Examples (REQUIRED)**
```
rag_search_code_examples("performance optimization patterns", match_count=3)
```
**Purpose:** See real-world optimized animation code

**Query 6: Memory Leak Prevention (REQUIRED)**
```
rag_search_knowledge_base("memory leak prevention GSAP cleanup", match_count=5)
```
**Purpose:** Learn comprehensive cleanup patterns

### TERTIARY RESEARCH: Accessibility Cross-Check (REQUIRED)

**Deep-Research Section 6.1: Browser Compatibility**
- Will optimizations break browser compatibility?
- Safari-specific considerations?
- Mobile browser performance?

**Deep-Research Section 6.2: Accessibility**
- **CRITICAL:** Does prefers-reduced-motion still work after optimization?
- Keyboard navigation still functional?
- Focus management preserved?

**Purpose:** Ensure optimizations don't break accessibility or compatibility.

### FALLBACK RESEARCH: WebSearch (If Needed)

**Only if Archon + Deep-Research insufficient for bleeding-edge techniques:**
```
WebSearch("GSAP performance optimization 2025")
WebSearch("Web Vitals animation optimization latest")
WebSearch("Chrome DevTools animation profiling advanced")
```

**Purpose:** Find 2024-2025 specific optimization techniques not yet in KB.

<research-validation>
Before proceeding, verify you have:
- ✅ Read ALL Deep-Research Sections 5.1-5.6 (6-part framework)
- ✅ Understood GPU Rule (Section 5.1)
- ✅ Understood Main Thread budgets (Section 5.2)
- ✅ Learned jank debugging methodology (Section 5.3)
- ✅ Reviewed memory management (Section 5.4)
- ✅ Studied 60fps optimization techniques (Section 5.5)
- ✅ Considered WebGL/Canvas alternatives (Section 5.6)
- ✅ Completed ALL 6 Archon queries
- ✅ Cross-checked accessibility preservation (6.1, 6.2)

If any checkbox unchecked → HALT and complete research.

**This is the most comprehensive research gate in GSAP Excellence.**
</research-validation>

<template-output>research_summary, performance_framework_from_deep_research, optimization_patterns_from_kb</template-output>
</step>

<step n="3" goal="Apply Performance Framework Analysis">

<critical>Apply ALL 6 sections of Deep-Research framework 5.1-5.6</critical>

### 3.1: GPU Rule Analysis (Section 5.1)
<action>Analyze animation code for GPU-friendly properties:</action>

**Check:**
- ✅ Using transform (x, y, scale, rotate, skew) → GPU-accelerated ✓
- ✅ Using opacity → GPU-accelerated ✓
- ❌ Using width/height/top/left → CPU-bound, causes jank ✗
- ❌ Using margin/padding → CPU-bound, causes layout ✗

**Identify Issues:**
- List properties that are NOT GPU-accelerated
- Calculate percentage of GPU-friendly properties

<template-output>gpu_rule_analysis, non_gpu_properties</template-output>

### 3.2: Main Thread Budget Analysis (Section 5.2)
<action>Analyze main thread usage:</action>

**Check:**
- Frame time budget: <16ms per frame (60fps)
- JS execution budget: <5ms per frame
- Layout thrashing: Forcing layout recalculation in loops?
- Expensive calculations: Should be throttled with RAF?

**Identify Issues:**
- Main thread blocking operations
- Layout thrashing patterns (read → write → read in loops)

<template-output>main_thread_analysis, layout_thrashing_issues</template-output>

### 3.3: Jank Debugging (Section 5.3)
<action>Identify jank sources using Deep-Research 5.3 methodology:</action>

**Common Jank Patterns:**
- Animating layout properties (width, height, top, left, margin)
- Too many elements animating simultaneously
- Complex SVG paths
- Synchronous DOM queries during animation
- Missing will-change hints (when appropriate)

**Identify Issues:**
- Specific jank causes in provided code
- Estimated impact on FPS

<template-output>jank_analysis, jank_sources</template-output>

### 3.4: Memory Management (Section 5.4)
<action>Check for memory issues:</action>

**Check:**
- Animations killed on unmount?
- ScrollTriggers cleaned up?
- Event listeners removed?
- References cleared?

**Identify Issues:**
- Memory leak risks
- Missing cleanup patterns

<template-output>memory_analysis, memory_leak_risks</template-output>

### 3.5: 60fps Optimization (Section 5.5)
<action>Apply 60fps optimization techniques:</action>

**Techniques to Consider:**
- will-change property (use sparingly! Remove after animation)
- Simplification (reduce complexity if dropping frames)
- RAF throttling (for complex calculations)
- Stagger reduction (if too many elements)

**Identify Opportunities:**
- Where will-change would help
- Where simplification is needed
- Where RAF throttling applies

<template-output>optimization_opportunities, will_change_recommendations</template-output>

### 3.6: WebGL/Canvas Alternatives (Section 5.6)
<action>Determine if alternative rendering needed:</action>

**Check:**
- Animating 100+ elements? → Consider WebGL
- Complex particle systems? → Consider Canvas
- Simple DOM animations? → Stick with GSAP DOM (most cases)

**Recommendation:**
- Should this animation use WebGL/Canvas?
- Or is GSAP DOM optimization sufficient?

<template-output>rendering_approach_recommendation</template-output>

</step>

<step n="4" goal="Generate Optimization Recommendations">

<action>Compile targeted optimization recommendations with KB citations</action>

**For Each Issue Identified:**
1. **Issue Description** (with Deep-Research section reference)
2. **Root Cause** (why it's slow)
3. **Recommended Fix** (with code example from KB)
4. **Expected Impact** (FPS improvement estimate)
5. **Implementation Steps** (how to apply fix)

**Prioritization:**
- 🔴 **HIGH Priority:** Major jank, non-GPU properties, memory leaks
- 🟡 **MEDIUM Priority:** Optimization opportunities, will-change usage
- 🟢 **LOW Priority:** Nice-to-have improvements, bundle size

<template-output>optimization_recommendations_with_kb_citations</template-output>
</step>

<step n="5" goal="Accessibility Preservation Check">

<critical>Ensure optimizations don't break accessibility</critical>

**Check:**
- ✅ prefers-reduced-motion still respected after optimizations?
- ✅ Keyboard navigation still works (if interactive)?
- ✅ Focus management preserved?
- ✅ No new accessibility issues introduced?

**If optimizations affect accessibility:**
- Document how to preserve accessibility
- Provide accessible fallback code

<template-output>accessibility_preservation_check</template-output>
</step>

<step n="6" goal="Generate Optimization Report">
<action>Compile all analysis and recommendations using template.md</action>
<action>Save to: {{default_output_file}}</action>

**Report Structure:**
1. **Executive Summary** - Current performance, optimization potential
2. **Performance Framework Analysis** - All 6 sections (5.1-5.6)
3. **Bottleneck Identification** - Specific issues with citations
4. **Optimization Recommendations** - Prioritized fixes with code examples
5. **Expected Performance Gains** - FPS improvement estimates
6. **Accessibility Preservation** - Confirmation accessibility maintained
7. **Implementation Checklist** - Step-by-step fix application
8. **Validation Steps** - How to verify improvements

<template-output>final_optimization_report</template-output>
</step>

</workflow>
```

---

### Complete template.md

```markdown
# GSAP Animation Optimization Report

**Generated:** {{date}}
**Optimizer:** {{user_name}}
**Animation:** {{animation_description}}
**Current FPS:** {{current_fps}}
**Target Devices:** {{target_devices}}

---

## EXECUTIVE SUMMARY

**Current Performance:** {{current_performance_summary}}
**Optimization Potential:** {{optimization_potential}}
**Expected FPS Gain:** {{expected_fps_gain}}

**Quick Summary:**
{{executive_summary_text}}

---

## 1. PERFORMANCE FRAMEWORK ANALYSIS (Deep-Research 5.1-5.6)

### 1.1 GPU Rule (Section 5.1)

**GPU-Accelerated Properties:**
{{gpu_accelerated_properties_list}}

**CPU-Bound Properties (ISSUES):**
{{cpu_bound_properties_list}}

**Analysis:**
{{gpu_rule_analysis_text}}

**Verdict:** {{gpu_rule_verdict}}

---

### 1.2 Main Thread Budget (Section 5.2)

**Current Frame Time:** {{current_frame_time}}ms (Budget: <16ms)
**Current JS Execution:** {{current_js_execution}}ms (Budget: <5ms)

**Main Thread Issues:**
{{main_thread_issues_list}}

**Layout Thrashing Detected:**
{{layout_thrashing_patterns}}

**Verdict:** {{main_thread_verdict}}

---

### 1.3 Jank Debugging (Section 5.3)

**Jank Sources Identified:**
{{jank_sources_list}}

**Impact Estimate:**
{{jank_impact_estimate}}

**Verdict:** {{jank_verdict}}

---

### 1.4 Memory Management (Section 5.4)

**Memory Leak Risks:**
{{memory_leak_risks_list}}

**Cleanup Issues:**
{{cleanup_issues_list}}

**Verdict:** {{memory_verdict}}

---

### 1.5 60fps Optimization (Section 5.5)

**will-change Opportunities:**
{{will_change_opportunities_list}}

**Simplification Opportunities:**
{{simplification_opportunities_list}}

**RAF Throttling Opportunities:**
{{raf_throttling_opportunities_list}}

**Verdict:** {{optimization_opportunities_verdict}}

---

### 1.6 WebGL/Canvas Alternatives (Section 5.6)

**Rendering Approach Recommendation:**
{{rendering_approach_recommendation}}

**Rationale:**
{{rendering_rationale}}

**Verdict:** {{rendering_approach_verdict}}

---

## 2. BOTTLENECK IDENTIFICATION

### Critical Performance Issues (HIGH Priority)

{{critical_bottlenecks_list}}

### Optimization Opportunities (MEDIUM Priority)

{{medium_bottlenecks_list}}

### Minor Improvements (LOW Priority)

{{low_bottlenecks_list}}

---

## 3. OPTIMIZATION RECOMMENDATIONS

### 🔴 HIGH PRIORITY (Fix Immediately)

{{high_priority_recommendations}}

**Example Fix 1:**
```javascript
// BEFORE (CPU-bound, causes jank)
{{before_code_1}}

// AFTER (GPU-accelerated, smooth 60fps)
{{after_code_1}}
```

**Expected Impact:** {{expected_impact_1}}

---

### 🟡 MEDIUM PRIORITY (Optimize Soon)

{{medium_priority_recommendations}}

**Example Fix 2:**
```javascript
// BEFORE
{{before_code_2}}

// AFTER (optimized)
{{after_code_2}}
```

**Expected Impact:** {{expected_impact_2}}

---

### 🟢 LOW PRIORITY (Nice-to-Have)

{{low_priority_recommendations}}

---

## 4. EXPECTED PERFORMANCE GAINS

**Current FPS:**
- Normal: {{current_fps_normal}}
- 4x Throttle: {{current_fps_4x}}
- 6x Throttle: {{current_fps_6x}}

**Expected FPS (After Optimization):**
- Normal: {{expected_fps_normal}} (+{{fps_gain_normal}} fps)
- 4x Throttle: {{expected_fps_4x}} (+{{fps_gain_4x}} fps)
- 6x Throttle: {{expected_fps_6x}} (+{{fps_gain_6x}} fps)

**Frame Time Improvement:**
- Current: {{current_frame_time}}ms
- Expected: {{expected_frame_time}}ms (-{{frame_time_reduction}}ms)

**JS Execution Improvement:**
- Current: {{current_js_execution}}ms
- Expected: {{expected_js_execution}}ms (-{{js_reduction}}ms)

---

## 5. ACCESSIBILITY PRESERVATION

**prefers-reduced-motion Status:**
{{prefers_reduced_motion_status}}

**Keyboard Navigation Status:**
{{keyboard_nav_status}}

**Focus Management Status:**
{{focus_management_status}}

**Verdict:** {{accessibility_preservation_verdict}}

✅ Optimizations preserve accessibility
OR
⚠️ Additional accessibility work needed (details below)

{{accessibility_notes}}

---

## 6. IMPLEMENTATION CHECKLIST

### Phase 1: GPU Optimization (HIGH Priority)
- [ ] {{gpu_optimization_task_1}}
- [ ] {{gpu_optimization_task_2}}
- [ ] {{gpu_optimization_task_3}}

### Phase 2: Main Thread Optimization (HIGH Priority)
- [ ] {{main_thread_optimization_task_1}}
- [ ] {{main_thread_optimization_task_2}}

### Phase 3: Advanced Optimization (MEDIUM Priority)
- [ ] {{advanced_optimization_task_1}}
- [ ] {{advanced_optimization_task_2}}

### Phase 4: Cleanup & Memory (MEDIUM Priority)
- [ ] {{cleanup_task_1}}
- [ ] {{cleanup_task_2}}

### Phase 5: Validation (REQUIRED)
- [ ] Run Chrome DevTools performance profiling
- [ ] Verify 60fps on normal + 4x throttle
- [ ] Check console (zero errors)
- [ ] Test prefers-reduced-motion fallback
- [ ] Mobile device testing

---

## 7. VALIDATION STEPS

**After implementing optimizations:**

1. **Performance Profiling (Chrome DevTools)**
   - Measure FPS under normal, 4x, 6x throttle
   - Verify frame time <16ms
   - Verify JS execution <5ms

2. **Visual Verification**
   - Animation renders correctly
   - No visual glitches introduced

3. **Console Check**
   - Zero errors
   - Zero GSAP warnings

4. **Accessibility Check**
   - prefers-reduced-motion still works
   - Keyboard navigation still works (if applicable)

5. **Cross-Browser Testing**
   - Chrome, Firefox, Safari
   - Mobile browsers (iOS, Android)

---

## 8. RESEARCH CITATIONS

**Knowledge Base References:**
{{kb_citations_list}}

**Deep-Research Sections Applied:**
- Section 5.1: GPU Rule
- Section 5.2: Main Thread Budget
- Section 5.3: Debugging Jank
- Section 5.4: Memory Management
- Section 5.5: 60fps Optimization
- Section 5.6: WebGL/Canvas Alternatives
- Section 6.1: Browser Compatibility
- Section 6.2: Accessibility Preservation

---

## 9. PERFORMANCE BENCHMARKS

**GSAP Excellence Standards:**
- **FPS Target:** 60fps (normal + 4x throttle)
- **Paint Time:** <16ms per frame
- **JS Execution:** <5ms per frame
- **Console Errors:** 0 (required)
- **Memory Leaks:** 0 (required)

**Your Animation:**
- **Current:** {{current_benchmark_summary}}
- **After Optimization:** {{expected_benchmark_summary}}
- **Meets Standards:** {{meets_standards}}

---

## 10. NEXT STEPS

1. {{next_step_1}}
2. {{next_step_2}}
3. {{next_step_3}}

**Estimated Implementation Time:** {{estimated_implementation_time}}

---

*Generated by GSAP Excellence Engine - optimize-animation workflow*
*Research-backed optimization using Deep-Research Frameworks 5.1-5.6 + Archon KB*
```

---

### Agent Menu Update

**BEFORE (Current - Inline Action):**
```xml
    <item cmd="*optimize" action="inline">KB-powered optimization recommendations using Deep-Research
<!-- 71 lines of optimization protocol -->
    </item>
```

**AFTER (Workflow Reference):**
```xml
    <item cmd="*optimize" workflow="{module_root}/workflows/optimize-animation/workflow.yaml">
      Analyze GSAP animations and provide targeted optimizations backed by Deep-Research performance frameworks (5.1-5.6)
    </item>
```

**Line Savings:** 71 lines → 2 lines = **69 lines saved**

---

### Testing Protocol

#### Test Scenario 1: Complete Optimization Analysis
**Input:**
- Animation code with layout properties (width, height)
- Current FPS: 45fps
- Symptoms: "Jank during animation, choppy on mobile"

**Expected Output:**
1. Research gate triggers (ALL 6 Deep-Research sections + 6 Archon queries)
2. GPU Rule analysis identifies layout properties issue
3. Main Thread analysis identifies layout thrashing
4. Recommendations include transform property replacements
5. Expected FPS gain estimates provided
6. Code examples with KB citations
7. Accessibility preservation confirmed

**Success Criteria:**
- ✅ All 6 Deep-Research sections applied (5.1-5.6)
- ✅ All 6 Archon queries completed
- ✅ Specific bottlenecks identified with citations
- ✅ Code recommendations with before/after examples
- ✅ FPS improvement estimates provided
- ✅ Accessibility preserved

#### Test Scenario 2: Research Enforcement Test (CRITICAL)
**Input:**
- Attempt to skip Step 2 (Research Gate)
- Try to proceed directly to Step 3 (Performance Analysis)

**Expected Behavior:**
- ❌ Workflow HALTS at Step 2
- ❌ Error message: "MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP"
- ❌ Cannot proceed until ALL 6 Deep-Research sections reviewed

**Success Criteria:**
- ✅ Research gate is BLOCKING (cannot skip)
- ✅ Most comprehensive research gate in GSAP Excellence

#### Test Scenario 3: Accessibility Preservation Test
**Input:**
- Animation code that needs GPU optimization
- Has prefers-reduced-motion fallback

**Expected Output:**
1. GPU optimization recommendations provided
2. Accessibility preservation check confirms prefers-reduced-motion maintained
3. Report includes accessibility status section

**Success Criteria:**
- ✅ Optimization doesn't break accessibility
- ✅ prefers-reduced-motion explicitly checked
- ✅ Accessibility section in report

---

## WORKFLOW 3: *ship-ready → ship-ready-check/

### Current State (Extraction)

**Location:** Lines 1599-1648 in `/bmad/gsap-excellence/agents/gsap-tech-director.md`

**Complete Inline Action:**

```xml
    <item cmd="*ship-ready" action="inline">Final production readiness check

🔧 **Production Readiness Check**

**GREEN LIGHT CRITERIA:**

**Performance: ✓**
- [ ] 60fps achieved on target devices
- [ ] Paint time <16ms
- [ ] JS execution optimized
- [ ] Memory leaks prevented

**Visual: ✓**
- [ ] Animation renders correctly
- [ ] No visual glitches
- [ ] Cross-viewport tested
- [ ] Responsive behavior validated

**Code Quality: ✓**
- [ ] Zero console errors
- [ ] Zero GSAP warnings
- [ ] Cleanup implemented
- [ ] Error handling present
- [ ] Code reviewed

**Compatibility: ✓**
- [ ] Chrome tested
- [ ] Firefox tested
- [ ] Safari tested
- [ ] Mobile tested
- [ ] Fallbacks work

**Accessibility: ✓**
- [ ] prefers-reduced-motion supported
- [ ] Keyboard accessible (if interactive)
- [ ] Focus management proper
- [ ] No seizure risk

**Documentation: ✓**
- [ ] Implementation notes complete
- [ ] Performance metrics documented
- [ ] Known issues documented
- [ ] Maintenance guide provided

**VERDICT:**
All boxes checked? → 🟢 **GREEN LIGHT FOR PRODUCTION**
Issues remain? → 🔴 **NOT SHIP-READY** (with specific blockers)

*"It's not done until it ships well."*
    </item>
```

**Analysis:**
- **Lines:** 50 (comprehensive 6-part checklist)
- **Complexity:** HIGH - Multi-part production gate
- **Deep-Research:** Sections 6.1-6.3 (production readiness, accessibility, cross-browser)
- **Research Intensity:** MEDIUM - Production best practices, cross-browser patterns
- **Conversion Justification:** Comprehensive production gate needs research-backed validation standards

---

### Target Workflow Structure

**Workflow Name:** `ship-ready-check`
**Directory:** `{module_root}/workflows/ship-ready-check/`
**Type:** Production readiness workflow
**Standalone:** Yes (can be called directly)

**Files to Create:**
1. `workflow.yaml` - Workflow configuration with production standards
2. `instructions.md` - 8-step production readiness process with research gates
3. `template.md` - Production readiness report template (GREEN LIGHT / RED LIGHT)

**Workflow Steps:**
1. **Gather Context** - Animation details, deployment target
2. **Research Gate (MANDATORY)** - Production standards from KB + Deep-Research 6.1-6.3
3. **Performance Gate** - 60fps compliance
4. **Visual Gate** - Correct rendering, no glitches
5. **Code Quality Gate** - Zero errors, cleanup, code review
6. **Compatibility Gate** - Cross-browser testing
7. **Accessibility Gate** - prefers-reduced-motion, keyboard nav
8. **Documentation Gate** - Implementation notes, maintenance guide
9. **Generate Verdict** - GREEN LIGHT or RED LIGHT with blockers

---

### Complete workflow.yaml

```yaml
# ship-ready-check Workflow - GSAP Excellence Engine
# Final production readiness check - 6-part validation gate
# Agent: Tech Director (production gatekeeper)
# Complexity: High (comprehensive 6-part gate)

name: ship-ready-check
description: "Final production readiness check: Performance ✓ Visual ✓ Code Quality ✓ Compatibility ✓ Accessibility ✓ Documentation ✓"
author: "GSAP Excellence Engine"
version: "1.0.0-alpha"
complexity: "high"

config_source: "{project-root}/bmad/gsap-excellence/config.yaml"
module_root: "{project-root}/bmad/gsap-excellence"
user_name: "{config_source}:user_name"
communication_language: "{config_source}:communication_language"
output_folder: "{config_source}:output_folder"
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from Tech Director agent menu)

# MCP integration
mcp_servers:
  archon:
    tools: ["rag_search_knowledge_base"]
    purpose: "Production readiness standards, cross-browser patterns, deployment best practices"

# Multi-agent coordination
agents:
  tech_director: "gsap-tech-director"  # Production gatekeeper

installed_path: "{module_root}/workflows/ship-ready-check"
template: "{installed_path}/template.md"
instructions: "{installed_path}/instructions.md"
validation: false

default_output_file: "{output_folder}/gsap-production-readiness-{{date}}.md"

# Inputs
inputs:
  animation_description:
    description: "What animation is being shipped?"
    required: true

  deployment_target:
    description: "Where is this being deployed? (production, staging, client review)"
    required: true

  validation_report_path:
    description: "Path to validation report (from validate-complete workflow)"
    required: false

  optimization_report_path:
    description: "Path to optimization report (from optimize-animation workflow)"
    required: false

# Outputs
outputs:
  production_readiness_report:
    format: "GREEN LIGHT or RED LIGHT verdict with 6-part gate checklist"

  blocker_list:
    format: "Critical issues preventing production deployment (if RED LIGHT)"

  deployment_checklist:
    format: "Final pre-deployment checklist"

# Success criteria (GREEN LIGHT requirements)
success_criteria:
  performance:
    - "60fps on target devices"
    - "Paint time <16ms"
    - "No memory leaks"

  visual:
    - "Renders correctly"
    - "No visual glitches"
    - "Responsive behavior"

  code_quality:
    - "Zero console errors"
    - "Zero GSAP warnings"
    - "Cleanup implemented"

  compatibility:
    - "Chrome tested"
    - "Firefox tested"
    - "Safari tested"
    - "Mobile tested"

  accessibility:
    - "prefers-reduced-motion supported"
    - "Keyboard accessible (if interactive)"
    - "No seizure risk"

  documentation:
    - "Implementation notes complete"
    - "Performance metrics documented"
    - "Maintenance guide provided"

# Production standards
production_standards:
  performance:
    fps_min: 60
    paint_time_max: 16  # ms
    js_execution_max: 5  # ms
    errors: 0
    warnings: 0

  browsers:
    required: ["Chrome", "Firefox", "Safari"]
    mobile: ["iOS Safari", "Chrome Android"]

  accessibility:
    prefers_reduced_motion: "MANDATORY"
    keyboard_nav: "REQUIRED if interactive"
    focus_management: "REQUIRED if interactive"

# Deep-Research sections
deep_research_sections:
  - "6.1"  # Browser Compatibility
  - "6.2"  # Accessibility
  - "6.3"  # Production Readiness

estimated_duration: "15-20 minutes"
```

---

### Complete instructions.md

```markdown
<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/ship-ready-check/workflow.yaml</critical>

# ship-ready-check Workflow Instructions

<workflow>

<step n="1" goal="Gather Production Context">
<ask response="animation_description">What animation is being shipped?</ask>
<ask response="deployment_target">Where is this being deployed? (production, staging, client review)</ask>
<ask response="validation_report_path">Path to validation report (if available)?</ask>
<ask response="optimization_report_path">Path to optimization report (if available)?</ask>

<template-output>animation_description, deployment_target, validation_report_path, optimization_report_path</template-output>
</step>

<step n="2" goal="Research Gate (MANDATORY) - Production Standards">

<critical>MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP</critical>

This research gate is **BLOCKING**. You MUST complete ALL research before proceeding to production gates.

### PRIMARY RESEARCH: Archon MCP (REQUIRED)

**Query 1: Production Readiness Standards (REQUIRED)**
```
rag_search_knowledge_base("production readiness checklist GSAP", match_count=5)
```
**Purpose:** Understand what makes animations production-ready

**Query 2: Cross-Browser Testing Patterns (REQUIRED)**
```
rag_search_knowledge_base("cross-browser testing GSAP compatibility", match_count=5)
```
**Purpose:** Learn browser testing requirements and known quirks

**Query 3: Deployment Best Practices (REQUIRED)**
```
rag_search_knowledge_base("GSAP deployment production best practices", match_count=5)
```
**Purpose:** Understand deployment considerations and gotchas

**Query 4: Accessibility Gates (REQUIRED)**
```
rag_search_knowledge_base("accessibility production requirements prefers-reduced-motion", match_count=5)
```
**Purpose:** Confirm accessibility requirements for production

### SECONDARY RESEARCH: Deep-Research Frameworks (REQUIRED)

**Section 6.1: Browser Compatibility (REQUIRED)**
- Which browsers must be tested?
- Known browser quirks (Safari, iOS)
- Fallback requirements
- Polyfill needs

**Section 6.2: Accessibility (REQUIRED)**
- **prefers-reduced-motion:** MANDATORY for production
- Keyboard navigation requirements
- Focus management requirements
- Seizure risk assessment (no rapid flashing)

**Section 6.3: Production Readiness (REQUIRED)**
- Performance standards (60fps, <16ms paint)
- Code quality gates (zero errors, cleanup)
- Documentation requirements
- Maintenance considerations

<research-validation>
Before proceeding, verify you have:
- ✅ Understood production readiness standards
- ✅ Learned cross-browser testing requirements
- ✅ Reviewed deployment best practices
- ✅ Confirmed accessibility gates
- ✅ Read Deep-Research Sections 6.1-6.3

If any checkbox unchecked → HALT and complete research.
</research-validation>

<template-output>research_summary, production_standards_from_kb</template-output>
</step>

<step n="3" goal="Performance Gate ✓">

**Check:**
- ✅ 60fps achieved on target devices?
- ✅ Paint time <16ms per frame?
- ✅ JS execution optimized (<5ms)?
- ✅ Memory leaks prevented?

<check if="validation_report_available">
<action>Review validation report for performance metrics</action>
</check>

<check if="validation_report_not_available">
<action>Run quick performance check or recommend running validate-complete workflow first</action>
</check>

**Gate Status:**
- 🟢 **PASS:** All performance criteria met
- 🔴 **FAIL:** Performance issues detected (BLOCKER)

<template-output>performance_gate_status, performance_issues</template-output>
</step>

<step n="4" goal="Visual Gate ✓">

**Check:**
- ✅ Animation renders correctly?
- ✅ No visual glitches?
- ✅ Cross-viewport tested?
- ✅ Responsive behavior validated?

<check if="validation_report_available">
<action>Review validation report for visual validation results</action>
</check>

**Gate Status:**
- 🟢 **PASS:** Visual validation complete
- 🔴 **FAIL:** Visual issues detected (BLOCKER)

<template-output>visual_gate_status, visual_issues</template-output>
</step>

<step n="5" goal="Code Quality Gate ✓">

**Check:**
- ✅ Zero console errors?
- ✅ Zero GSAP warnings?
- ✅ Cleanup implemented (kill() on unmount)?
- ✅ Error handling present?
- ✅ Code reviewed?

<check if="validation_report_available">
<action>Review validation report for console validation results</action>
</check>

**Gate Status:**
- 🟢 **PASS:** Code quality gates met
- 🔴 **FAIL:** Code quality issues (BLOCKER)

<template-output>code_quality_gate_status, code_quality_issues</template-output>
</step>

<step n="6" goal="Compatibility Gate ✓">

**Check:**
- ✅ Chrome tested?
- ✅ Firefox tested?
- ✅ Safari tested?
- ✅ Mobile tested (iOS Safari, Chrome Android)?
- ✅ Fallbacks work (if applicable)?

**Gate Status:**
- 🟢 **PASS:** All target browsers tested
- 🟡 **WARNING:** Some browsers not tested (minor)
- 🔴 **FAIL:** Critical browser failures (BLOCKER)

<template-output>compatibility_gate_status, browser_test_results</template-output>
</step>

<step n="7" goal="Accessibility Gate ✓">

**Check:**
- ✅ **prefers-reduced-motion supported? (MANDATORY)**
- ✅ Keyboard accessible (if interactive)?
- ✅ Focus management proper (if interactive)?
- ✅ No seizure risk (no rapid flashing)?

<check if="validation_report_available">
<action>Review validation report for accessibility validation results</action>
</check>

**Gate Status:**
- 🟢 **PASS:** Accessibility requirements met
- 🔴 **FAIL:** Accessibility issues (BLOCKER)

**CRITICAL:** prefers-reduced-motion is MANDATORY for production in GSAP Excellence.

<template-output>accessibility_gate_status, accessibility_issues</template-output>
</step>

<step n="8" goal="Documentation Gate ✓">

**Check:**
- ✅ Implementation notes complete?
- ✅ Performance metrics documented?
- ✅ Known issues documented?
- ✅ Maintenance guide provided (how to update, debug)?

**Gate Status:**
- 🟢 **PASS:** Documentation complete
- 🟡 **WARNING:** Some documentation missing (minor)
- 🔴 **FAIL:** Critical documentation missing (BLOCKER)

<template-output>documentation_gate_status, documentation_issues</template-output>
</step>

<step n="9" goal="Generate Production Readiness Verdict">
<action>Compile all gate results using template.md</action>
<action>Save to: {{default_output_file}}</action>

**Verdict Logic:**
- **🟢 GREEN LIGHT:** All 6 gates PASS → Ready for production
- **🟡 YELLOW LIGHT:** Minor warnings, no blockers → Ready with caveats
- **🔴 RED LIGHT:** Any gate FAILS → NOT ready for production (list blockers)

**Report Structure:**
1. **Executive Summary** - GREEN LIGHT or RED LIGHT with reason
2. **6-Part Gate Results** - Performance, Visual, Code Quality, Compatibility, Accessibility, Documentation
3. **Blocker List** - Critical issues preventing production (if RED LIGHT)
4. **Warning List** - Minor issues (if YELLOW LIGHT)
5. **Pre-Deployment Checklist** - Final steps before shipping
6. **Post-Deployment Monitoring** - What to monitor after launch

<template-output>final_production_readiness_verdict</template-output>
</step>

</workflow>
```

---

### Complete template.md

```markdown
# GSAP Animation Production Readiness Report

**Generated:** {{date}}
**Gatekeeper:** {{user_name}}
**Animation:** {{animation_description}}
**Deployment Target:** {{deployment_target}}

---

## EXECUTIVE SUMMARY

**VERDICT:** {{verdict}}

<!-- 🟢 GREEN LIGHT FOR PRODUCTION -->
<!-- 🟡 YELLOW LIGHT (Ready with caveats) -->
<!-- 🔴 RED LIGHT (NOT READY - Blockers detected) -->

**Summary:**
{{verdict_summary_text}}

---

## PRODUCTION GATE RESULTS

### 1. Performance Gate ✓

**Status:** {{performance_gate_status}}

- ✅ / ❌ **60fps on target devices:** {{performance_60fps}}
- ✅ / ❌ **Paint time <16ms:** {{performance_paint_time}}
- ✅ / ❌ **JS execution optimized:** {{performance_js_execution}}
- ✅ / ❌ **Memory leaks prevented:** {{performance_memory}}

**Issues:**
{{performance_issues_list}}

---

### 2. Visual Gate ✓

**Status:** {{visual_gate_status}}

- ✅ / ❌ **Animation renders correctly:** {{visual_renders_correctly}}
- ✅ / ❌ **No visual glitches:** {{visual_no_glitches}}
- ✅ / ❌ **Cross-viewport tested:** {{visual_cross_viewport}}
- ✅ / ❌ **Responsive behavior:** {{visual_responsive}}

**Issues:**
{{visual_issues_list}}

---

### 3. Code Quality Gate ✓

**Status:** {{code_quality_gate_status}}

- ✅ / ❌ **Zero console errors:** {{code_quality_zero_errors}}
- ✅ / ❌ **Zero GSAP warnings:** {{code_quality_zero_warnings}}
- ✅ / ❌ **Cleanup implemented:** {{code_quality_cleanup}}
- ✅ / ❌ **Error handling present:** {{code_quality_error_handling}}
- ✅ / ❌ **Code reviewed:** {{code_quality_reviewed}}

**Issues:**
{{code_quality_issues_list}}

---

### 4. Compatibility Gate ✓

**Status:** {{compatibility_gate_status}}

**Browser Testing:**
- ✅ / ❌ **Chrome:** {{browser_chrome}}
- ✅ / ❌ **Firefox:** {{browser_firefox}}
- ✅ / ❌ **Safari:** {{browser_safari}}
- ✅ / ❌ **iOS Safari:** {{browser_ios}}
- ✅ / ❌ **Chrome Android:** {{browser_android}}

**Fallbacks:**
- ✅ / ❌ **Fallbacks work:** {{fallbacks_work}}

**Issues:**
{{compatibility_issues_list}}

---

### 5. Accessibility Gate ✓

**Status:** {{accessibility_gate_status}}

- ✅ / ❌ **prefers-reduced-motion (MANDATORY):** {{accessibility_prefers_reduced_motion}}
- ✅ / ❌ **Keyboard accessible:** {{accessibility_keyboard}}
- ✅ / ❌ **Focus management:** {{accessibility_focus}}
- ✅ / ❌ **No seizure risk:** {{accessibility_seizure_risk}}

**Issues:**
{{accessibility_issues_list}}

---

### 6. Documentation Gate ✓

**Status:** {{documentation_gate_status}}

- ✅ / ❌ **Implementation notes:** {{documentation_implementation_notes}}
- ✅ / ❌ **Performance metrics:** {{documentation_performance_metrics}}
- ✅ / ❌ **Known issues:** {{documentation_known_issues}}
- ✅ / ❌ **Maintenance guide:** {{documentation_maintenance_guide}}

**Issues:**
{{documentation_issues_list}}

---

## FINAL VERDICT DETAILS

<check if="verdict == green_light">

### 🟢 GREEN LIGHT FOR PRODUCTION

**All 6 gates passed:**
- ✅ Performance Gate
- ✅ Visual Gate
- ✅ Code Quality Gate
- ✅ Compatibility Gate
- ✅ Accessibility Gate
- ✅ Documentation Gate

**This animation is ready for production deployment.**

</check>

<check if="verdict == yellow_light">

### 🟡 YELLOW LIGHT (Ready with Caveats)

**Passed gates:**
{{passed_gates_list}}

**Gates with warnings:**
{{gates_with_warnings_list}}

**Caveats:**
{{caveats_list}}

**This animation can be deployed, but address warnings soon.**

</check>

<check if="verdict == red_light">

### 🔴 RED LIGHT (NOT READY FOR PRODUCTION)

**Failed gates:**
{{failed_gates_list}}

**Blockers (MUST FIX before production):**
{{blockers_list}}

**This animation is NOT ready for production until blockers resolved.**

</check>

---

## BLOCKERS (If RED LIGHT)

<check if="verdict == red_light">

### 🔴 CRITICAL BLOCKERS

{{critical_blockers_detailed_list}}

**Required Actions:**
1. {{blocker_action_1}}
2. {{blocker_action_2}}
3. {{blocker_action_3}}

**Estimated Fix Time:** {{estimated_fix_time}}

</check>

---

## WARNINGS (If YELLOW LIGHT)

<check if="verdict == yellow_light">

### ⚠️ WARNINGS

{{warnings_detailed_list}}

**Recommended Actions:**
1. {{warning_action_1}}
2. {{warning_action_2}}

**Priority:** {{warning_priority}}

</check>

---

## PRE-DEPLOYMENT CHECKLIST

### Final Steps Before Shipping

- [ ] All 6 gates confirmed PASS
- [ ] Performance validation complete (60fps verified)
- [ ] Cross-browser testing complete (Chrome, Firefox, Safari, mobile)
- [ ] Accessibility validation complete (prefers-reduced-motion verified)
- [ ] Code review complete (team sign-off)
- [ ] Documentation complete (implementation notes, maintenance guide)
- [ ] Backup/rollback plan ready (in case of issues)
- [ ] Monitoring setup (track performance post-deploy)
- [ ] Stakeholder sign-off (PM, designer, etc.)

---

## POST-DEPLOYMENT MONITORING

### What to Monitor After Launch

**Performance Metrics:**
- FPS on real user devices (RUM data)
- Paint time averages
- Memory usage patterns
- Console error rates (should be 0%)

**User Experience:**
- Visual glitches reported
- Accessibility complaints (prefers-reduced-motion issues)
- Cross-browser issues reported
- Mobile performance feedback

**Monitoring Tools:**
- Chrome DevTools (Performance tab)
- Real User Monitoring (RUM)
- Error tracking (Sentry, etc.)
- Analytics (bounce rate, engagement)

**Rollback Criteria:**
- FPS drops below 30fps for >10% of users
- Console error rate >1%
- Accessibility violations reported
- Critical visual glitches affecting UX

---

## RESEARCH CITATIONS

**Knowledge Base References:**
{{kb_citations_list}}

**Deep-Research Sections Applied:**
- Section 6.1: Browser Compatibility
- Section 6.2: Accessibility
- Section 6.3: Production Readiness

---

## APPENDIX: GATE STANDARDS

### Performance Gate Standards
- 60fps on target devices (normal + 4x CPU throttle)
- Paint time <16ms per frame
- JS execution <5ms per frame
- Memory growth <10% after 10 animation cycles

### Visual Gate Standards
- No visual glitches
- Correct rendering across viewports
- Responsive behavior validated
- Visual regression tests passed

### Code Quality Gate Standards
- Zero JavaScript errors
- Zero GSAP warnings
- Cleanup implemented (kill(), ScrollTrigger cleanup)
- Error handling for edge cases
- Code reviewed by team

### Compatibility Gate Standards
- Chrome (latest) - REQUIRED
- Firefox (latest) - REQUIRED
- Safari (latest + iOS) - REQUIRED
- Chrome Android - REQUIRED
- Fallbacks for unsupported features

### Accessibility Gate Standards
- **prefers-reduced-motion** - MANDATORY
- Keyboard navigation (if interactive) - REQUIRED
- Focus management (if interactive) - REQUIRED
- No seizure risk (no rapid flashing <3Hz) - REQUIRED

### Documentation Gate Standards
- Implementation notes (how it works)
- Performance metrics (FPS, timing)
- Known issues (browser quirks, limitations)
- Maintenance guide (how to update, debug)

---

**Production Readiness Check Complete:** {{date}}
**Next Steps:** {{next_steps}}

---

*Generated by GSAP Excellence Engine - ship-ready-check workflow*
*Research-backed production gates using Archon KB + Deep-Research Frameworks 6.1-6.3*
```

---

### Agent Menu Update

**BEFORE (Current - Inline Action):**
```xml
    <item cmd="*ship-ready" action="inline">Final production readiness check
<!-- 50 lines of production checklist -->
    </item>
```

**AFTER (Workflow Reference):**
```xml
    <item cmd="*ship-ready" workflow="{module_root}/workflows/ship-ready-check/workflow.yaml">
      Final production readiness check: Performance ✓ Visual ✓ Code Quality ✓ Compatibility ✓ Accessibility ✓ Documentation ✓
    </item>
```

**Line Savings:** 50 lines → 2 lines = **48 lines saved**

---

### Testing Protocol

#### Test Scenario 1: GREEN LIGHT Production Gate
**Input:**
- Animation validated (60fps, zero errors)
- All browsers tested (Chrome, Firefox, Safari, mobile)
- Accessibility confirmed (prefers-reduced-motion)
- Documentation complete

**Expected Output:**
1. Research gate triggers (production standards from KB)
2. All 6 gates PASS
3. Verdict: 🟢 GREEN LIGHT FOR PRODUCTION
4. Pre-deployment checklist provided
5. Post-deployment monitoring guide provided

**Success Criteria:**
- ✅ All 6 gates evaluated
- ✅ GREEN LIGHT verdict clear
- ✅ Report includes KB citations
- ✅ Deployment checklist actionable

#### Test Scenario 2: RED LIGHT Blocker Detection
**Input:**
- Animation has console errors (fails Code Quality gate)
- Missing prefers-reduced-motion (fails Accessibility gate)
- FPS below 30fps on throttle (fails Performance gate)

**Expected Output:**
1. 3 gates FAIL (Performance, Code Quality, Accessibility)
2. Verdict: 🔴 RED LIGHT (NOT READY)
3. Blocker list with specific issues
4. Required actions to fix blockers
5. Estimated fix time

**Success Criteria:**
- ✅ Workflow identifies all blockers
- ✅ RED LIGHT verdict with clear reasons
- ✅ Actionable blocker resolution steps

#### Test Scenario 3: YELLOW LIGHT Warning Detection
**Input:**
- Animation passes all critical gates
- Minor warnings (some documentation missing, one browser not tested)

**Expected Output:**
1. Most gates PASS
2. 1-2 gates have warnings (not blockers)
3. Verdict: 🟡 YELLOW LIGHT (Ready with caveats)
4. Warning list with recommendations
5. Can deploy but should address warnings

**Success Criteria:**
- ✅ Differentiates warnings from blockers
- ✅ YELLOW LIGHT verdict appropriate
- ✅ Recommendations prioritized

#### Test Scenario 4: Research Enforcement Test (CRITICAL)
**Input:**
- Attempt to skip Step 2 (Research Gate)
- Try to proceed directly to Step 3 (Performance Gate)

**Expected Behavior:**
- ❌ Workflow HALTS at Step 2
- ❌ Error message: "MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP"
- ❌ Cannot proceed until production standards researched

**Success Criteria:**
- ✅ Research gate is BLOCKING (cannot skip)
- ✅ Production standards must be understood before gates

---

## TECH DIRECTOR - COMPLETE CONVERSION SUMMARY

### Total Conversion Impact

**Agent File Reduction:**
- **Before:** 1,743 lines total (167 lines inline actions for 3 workflows)
- **After:** ~1,582 lines total (6 lines workflow references)
- **Savings:** 161 lines (9.2% reduction)

**Workflows Created:** 3 (all P1 - high priority)
1. `validate-complete/` - Comprehensive validation suite (46 lines → ~1,400 workflow lines)
2. `optimize-animation/` - KB-powered optimization (71 lines → ~1,800 workflow lines)
3. `ship-ready-check/` - Production readiness gate (50 lines → ~1,200 workflow lines)

**Workflows Kept Inline:** 5 (149 lines remain)
- `*fps`, `*screenshot`, `*console`, `*cross-browser`, `*benchmarks` - Simple tools, no research needed

**Special Features:**
- **Most extensive Chrome DevTools MCP integration** (validate-complete)
- **Most research-intensive workflow** (optimize-animation with Deep-Research 5.1-5.6)
- **Production gatekeeper** (ship-ready-check with 6-part validation)

---

### Implementation Checklist

#### Phase 1: Create Workflow Directories (5 minutes)
```bash
mkdir -p /bmad/gsap-excellence/workflows/validate-complete
mkdir -p /bmad/gsap-excellence/workflows/optimize-animation
mkdir -p /bmad/gsap-excellence/workflows/ship-ready-check
```

#### Phase 2: Create Workflow Files (1.5-2 hours)

**validate-complete/** (~40 minutes)
1. Copy `workflow.yaml` from this spec (lines TBD) → `validate-complete/workflow.yaml`
2. Copy `instructions.md` from this spec (lines TBD) → `validate-complete/instructions.md`
3. Copy `template.md` from this spec (lines TBD) → `validate-complete/template.md`

**optimize-animation/** (~45 minutes)
1. Copy `workflow.yaml` from this spec → `optimize-animation/workflow.yaml`
2. Copy `instructions.md` from this spec → `optimize-animation/instructions.md`
3. Copy `template.md` from this spec → `optimize-animation/template.md`

**ship-ready-check/** (~30 minutes)
1. Copy `workflow.yaml` from this spec → `ship-ready-check/workflow.yaml`
2. Copy `instructions.md` from this spec → `ship-ready-check/instructions.md`
3. Copy `template.md` from this spec → `ship-ready-check/template.md`

#### Phase 3: Update Tech Director Agent File (20 minutes)

**Remove inline actions:**
- Lines 1368-1413: `*validate` (46 lines)
- Lines 1485-1555: `*optimize` (71 lines)
- Lines 1599-1648: `*ship-ready` (50 lines)

**Add workflow references:**
```xml
    <item cmd="*validate" workflow="{module_root}/workflows/validate-complete/workflow.yaml">
      Run comprehensive GSAP animation validation: 60fps compliance, visual verification, console checks, accessibility gates using Chrome DevTools MCP
    </item>

    <item cmd="*fps" action="inline">Quick FPS check with Chrome DevTools
    <!-- Keep existing 26-line inline action -->
    </item>

    <item cmd="*screenshot" action="inline">Capture animation screenshots for visual validation
    <!-- Keep existing 26-line inline action -->
    </item>

    <item cmd="*console" action="inline">Check console for errors and warnings
    <!-- Keep existing 19-line inline action -->
    </item>

    <item cmd="*optimize" workflow="{module_root}/workflows/optimize-animation/workflow.yaml">
      Analyze GSAP animations and provide targeted optimizations backed by Deep-Research performance frameworks (5.1-5.6)
    </item>

    <item cmd="*cross-browser" action="inline">Cross-browser compatibility testing checklist
    <!-- Keep existing 43-line inline action -->
    </item>

    <item cmd="*ship-ready" workflow="{module_root}/workflows/ship-ready-check/workflow.yaml">
      Final production readiness check: Performance ✓ Visual ✓ Code Quality ✓ Compatibility ✓ Accessibility ✓ Documentation ✓
    </item>

    <item cmd="*benchmarks" action="inline">Performance benchmarks and baselines
    <!-- Keep existing 35-line inline action -->
    </item>
```

#### Phase 4: Testing (45-60 minutes)

**Test Each Workflow:**
1. **validate-complete** (20 minutes)
   - Test with Chrome DevTools MCP integration
   - Verify all 5 validation gates work
   - Test CPU/network throttling
   - Verify research gate enforcement

2. **optimize-animation** (25 minutes)
   - Test with animation code needing optimization
   - Verify all 6 Deep-Research sections applied (5.1-5.6)
   - Verify all 6 Archon queries executed
   - Verify research gate enforcement (MOST COMPREHENSIVE)

3. **ship-ready-check** (15 minutes)
   - Test GREEN LIGHT scenario
   - Test RED LIGHT scenario (with blockers)
   - Test YELLOW LIGHT scenario (with warnings)
   - Verify research gate enforcement

**Test Token Efficiency:**
- Activate Tech Director agent WITHOUT calling workflows
- Verify 161 lines saved (9.2% reduction)

#### Phase 5: Research Enforcement Validation (30 minutes)

**CRITICAL: Verify research gates are MANDATORY**
1. For each workflow, attempt to skip Step 2 (Research Gate)
2. Verify workflow HALTS with error message
3. Verify cannot proceed until research complete
4. Test:
   - validate-complete: Cannot skip validation standards research
   - optimize-animation: Cannot skip Deep-Research 5.1-5.6 framework
   - ship-ready-check: Cannot skip production standards research

**If research can be skipped:** Implementation FAILED - Research gate not enforced

---

### Success Metrics

#### Token Efficiency
- ✅ Agent activation without workflows: 9.2% token savings (161 lines)
- ✅ Workflows load ONLY when called
- ⚠️ Individual workflow use costs MORE tokens (detail expansion 16-25x)
- ✅ Value: Comprehensive research-backed validation/optimization > token savings

#### Research Enforcement
- ✅ All 3 workflows have MANDATORY research gates
- ✅ validate-complete: Validation standards + accessibility
- ✅ optimize-animation: Deep-Research 5.1-5.6 framework (MOST COMPREHENSIVE)
- ✅ ship-ready-check: Production standards + deployment best practices
- ✅ Research gates are BLOCKING (cannot skip)

#### Quality Assurance
- ✅ All workflows copy-paste ready (no thinking during implementation)
- ✅ All workflows include structured templates
- ✅ All workflows include comprehensive testing protocols
- ✅ All workflows include KB citations
- ✅ Chrome DevTools MCP integration documented (validate-complete)

---

### Next Steps (After Implementation)

**ALL 5 AGENT SPECS COMPLETE!** 🎉

**Project Status:**
- ✅ Director (2 workflows) - COMPLETE
- ✅ Cinematographer (4 workflows) - COMPLETE
- ✅ VFX (5 workflows) - COMPLETE
- ✅ Editor (1 workflow) - COMPLETE
- ✅ Tech Director (3 workflows) - **COMPLETE (THIS SPEC)**

**Total:**
- **15 P1/P2 workflows specified** (100%)
- **5 agent specs created** (100%)
- **~11,000+ lines of specifications** (copy-paste ready)

**Implementation Phase:**
- Create all 15 workflow directories
- Copy-paste workflow files from specs
- Update all 5 agent files
- Test all workflows
- **CRITICAL:** Validate research enforcement (MANDATORY gates)
- Measure token efficiency gains

**Estimated Implementation Time:** 8-14 hours

---

## FINAL NOTES

### What's Special About Tech Director

**1. Most Extensive Chrome DevTools MCP Integration**
- validate-complete uses 7 Chrome DevTools tools
- Performance profiling, CPU/network throttling, screenshots, console checks
- Most complex MCP integration workflow in GSAP Excellence

**2. Most Research-Intensive Workflow**
- optimize-animation requires ALL 6 Deep-Research sections (5.1-5.6)
- 6 Archon queries (most of any workflow)
- Cross-references accessibility (6.1, 6.2)
- WebSearch fallback for bleeding-edge techniques

**3. Production Gatekeeper**
- ship-ready-check is the final quality gate before production
- 6-part validation (Performance, Visual, Code Quality, Compatibility, Accessibility, Documentation)
- GREEN LIGHT / YELLOW LIGHT / RED LIGHT verdicts
- Blocker identification and resolution guidance

### Critical Success Factors

**1. Chrome DevTools MCP Testing**
- validate-complete REQUIRES Chrome DevTools MCP
- Test all 7 tools work correctly
- Handle cases where Chrome DevTools unavailable

**2. Deep-Research Framework Enforcement**
- optimize-animation MUST enforce ALL 6 sections (5.1-5.6)
- Cannot skip any section
- Most comprehensive research gate in GSAP Excellence

**3. Production Gate Rigor**
- ship-ready-check verdicts must be reliable
- GREEN LIGHT means truly production-ready
- RED LIGHT means blockers MUST be fixed
- No false positives/negatives

### Pattern Validated (5th Agent)

**Tech Director spec completes the pattern validation across all 5 agents:**
1. Director (2 workflows) - Pattern established
2. Cinematographer (4 workflows) - Pattern validated
3. VFX (5 workflows) - Pattern scales (most workflows)
4. Editor (1 workflow) - Pattern adapts (proactive vs reactive)
5. Tech Director (3 workflows) - **Pattern proven (MCP integration, production gates)**

**Key Elements Consistent:**
- Executive summary with token efficiency analysis
- Conversion summary table (all inline actions analyzed)
- Complete workflow extractions with line numbers
- Copy-paste ready workflow.yaml, instructions.md, template.md
- Agent menu before/after updates
- Comprehensive testing protocols
- Research enforcement validation (CRITICAL)

---

**TECH DIRECTOR SPEC STATUS:** ✅ COMPLETE

**PROJECT STATUS:** 🎉 **ALL 5 AGENT SPECS COMPLETE - READY FOR IMPLEMENTATION**

---

*Tech Director Workflow Conversion Specification - FINAL AGENT SPEC*
*Generated: 2025-11-06*
*GSAP Excellence Engine - Workflow Conversion Project*
*Next: Implementation Phase (8-14 hours)*
