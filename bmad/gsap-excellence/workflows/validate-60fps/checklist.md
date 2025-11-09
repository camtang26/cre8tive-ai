# Validate 60fps Workflow - Quality Checklist
# Research Enforcement & Production Readiness Validation

## Research Enforcement Test (CRITICAL - MOST IMPORTANT)

**Can research be skipped?**

- [ ] **NO** - Research gate blocks progression (PASS)
  - Workflow includes MANDATORY research-gate in Step 2
  - `<checkpoint type="approval-gate" blocking="true">` present
  - User must explicitly continue with "Continue [c]"
  - Agent CANNOT rationalize skipping this gate
  - Systematic diagnosis requires Deep-Research 5.5 + 5.3 + Archon queries
  - **This is CRITICAL:** Without research enforcement, workflow generates generic "make it faster" advice instead of surgical research-backed fixes

- [ ] **YES** - Research is optional/skippable (FAIL - fix workflow immediately)
  - No research gate present in instructions.md
  - No blocking checkpoint requiring user input
  - Agent can proceed to validation execution without research
  - **THIS MUST NOT HAPPEN** - invalidates entire workflow purpose

**Research Enforcement Status:** [PASS / **CRITICAL FAIL**]

---

## File Path Verification

### Deep-Research File Paths

- [ ] **All Read commands point to actual Deep-Research files**
  - [ ] Section 5.5 path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md`
  - [ ] Section 5.3 path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md`
  - [ ] NO references to agent sidecar files (`gsap-tech-director/research-knowledge.md`)
  - [ ] All paths verified with `ls` or file existence check

- [ ] **deep_research_base configured in workflow.yaml**
  - Path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery`
  - Used for all Deep-Research file references

**File Path Status:** [PASS / FAIL]

---

## Research Citation Audit

### Verbatim Quotes from Deep-Research

- [ ] **Section 5.5 quotes present (minimum 3+)**
  - [ ] Frame budget quote: *"To achieve ~16ms per frame budget: Often less than 8ms of scripting, <4ms style/layout, <4ms paint per frame yields ~16ms total."*
  - [ ] autoAlpha quote: *"Use autoAlpha: This GSAP property animates opacity and toggles visibility to hidden when opacity hits 0... prevents the browser from painting the element at 0 opacity..."*
  - [ ] ScrollTrigger scrub quote: *"set scrub: 0.1 instead of true to ease updates"*
  - [ ] Canvas quote: *"One canvas with 100 particles is often cheaper than 100 DOM elements moving."*
  - [ ] All quotes include source citation: (Source: 22-55-optimize-animations-for-60fps.md)

- [ ] **Section 5.3 quotes present (minimum 3+)**
  - [ ] Performance profiling quote: *"Performance profile: Look for spikes. If Scripting is high, it's likely too many operations in JS... If Rendering/Painting is high, maybe large DOM repaints..."*
  - [ ] will-change cleanup quote: *"Remove will-change once done... onComplete: () => element.style.willChange = 'auto' to remove hint after using it."*
  - [ ] Image decode quote: *"Large images being loaded can cause jank... Use decode() on images before animating if possible..."*
  - [ ] Third-party interference quote: *"Sometimes other scripts (like a DOM library or analytics) might hog the main thread intermittently."*
  - [ ] All quotes include source citation: (Source: 20-53-debugging-jank.md)

- [ ] **Quote formatting correct**
  - Italics + quotation marks: *"quote text"*
  - Source file in parentheses after quote
  - No generic "Section X says..." without actual verbatim quote

**Verbatim Quote Count:** _____ (Target: 8+ minimum, 10-15+ excellent)

**Research Citation Status:** [PASS / FAIL]

---

## Framework Extraction Verification

### Deep-Research 5.5 Frameworks

- [ ] **Frame Budget Framework extracted**
  - <8ms scripting + <4ms style/layout + <4ms paint = ~16ms total
  - Used as validation rubric for all tests
  - Documented in instructions.md AND template.md

- [ ] **autoAlpha Optimization framework**
  - When to use: opacity animations
  - Why: Prevents painting invisible elements
  - Code example: `gsap.to(el, { autoAlpha: 0 })` vs `{ opacity: 0 }`

- [ ] **ScrollTrigger Scrub Optimization**
  - Pattern: `scrub: 0.1` instead of `scrub: true`
  - Impact: Reduces scroll jank

- [ ] **Canvas Threshold framework**
  - >100 elements → Consider canvas
  - >200 elements → Canvas strongly recommended
  - >1000 elements → Canvas MANDATORY

- [ ] **Layer Trick (Hide Background Content)**
  - Pattern: `display: none` on obscured content during full-screen animations
  - Restore: `display: block` on complete

### Deep-Research 5.3 Frameworks

- [ ] **Performance Profiling Diagnostic Framework extracted**
  - Scripting high (>8ms) → Too many JS operations, heavy onUpdate callbacks
  - Rendering high (>4ms) → Layout-trigger properties, large repaints
  - Painting high (>4ms) → Big images, blur filters, shadows
  - Long tasks (>50ms) → Forced reflows, synchronous work
  - Table format documented in instructions.md

- [ ] **will-change Cleanup Pattern**
  - Pattern: `onComplete: () => element.style.willChange = 'auto'`
  - Why: Prevents GPU memory bloat
  - Code example provided

- [ ] **Image Decode Pattern**
  - Pattern: `await img.decode()` before animation
  - Why: Prevents 50-200ms jank spikes
  - Code example provided

- [ ] **Third-Party Script Detection**
  - Method: Disable scripts one-by-one, re-test
  - Common culprits listed (Analytics, Tag managers, Chat widgets, A/B testing)

**Framework Extraction Status:** [PASS / FAIL]

---

## Quality Metrics

### Line Count Growth

**Pathetic Workflow (Before Rebuild):**
- workflow.yaml: 79 lines
- instructions.md: 379 lines
- template.md: 289 lines
- checklist.md: 0 lines (MISSING)
- **Total: 747 lines**

**Premium Workflow (After Rebuild):**
- workflow.yaml: _____ lines (Target: 150-200+)
- instructions.md: _____ lines (Target: 1,000-1,700+)
- template.md: _____ lines (Target: 400-600+)
- checklist.md: _____ lines (Target: 400-700+, NEW file)
- **Total: _____ lines** (Target: 2,000-3,000+)

**Growth Metrics:**
- workflow.yaml growth: _____ % (Target: +150-200%)
- instructions.md growth: _____ % (Target: +1,500-2,000%)
- template.md growth: _____ % (Target: +900-1,200%)
- checklist.md: NEW FILE (0 → 400-700+)
- **Total growth: _____ %** (Target: +267-400%)

**Quality Metric Status:** [PASS / FAIL]

- [ ] **PASS:** Total ≥ 2,000 lines (minimum premium standard)
- [ ] **EXCELLENT:** Total ≥ 2,500 lines
- [ ] **EXCEPTIONAL:** Total ≥ 3,000 lines (like optimize-performance's 2,909)

---

## Research Density Analysis

### Verbatim Quotes per 100 Lines

**instructions.md Research Density:**
- Total lines: _____
- Verbatim quotes: _____
- Density: _____ quotes per 100 lines

**Target Density:** ≥1 quote per 100 lines (good), ≥1.5 quotes per 100 lines (excellent)

**Research Density Status:** [PASS / FAIL]

---

## MANDATORY Research Components

### Deep-Research Sections (REQUIRED)

- [ ] **Section 5.5 - Optimize Animations for 60fps**
  - [ ] Read command present in instructions.md
  - [ ] Complete file path (not sidecar reference)
  - [ ] Framework extracted (frame budget, autoAlpha, scrub, canvas)
  - [ ] Verbatim quotes present (3+ minimum)
  - [ ] Applied in validation protocol (frame budget used as rubric)

- [ ] **Section 5.3 - Debugging Jank**
  - [ ] Read command present in instructions.md
  - [ ] Complete file path (not sidecar reference)
  - [ ] Diagnostic framework extracted (Scripting/Rendering/Painting)
  - [ ] Verbatim quotes present (3+ minimum)
  - [ ] Applied in optimization recommendations

**Deep-Research Sections Status:** [PASS / FAIL]

### Archon MCP Queries (REQUIRED)

- [ ] **Query 1: 60fps Validation Standards**
  - Search: "60fps validation performance frame budget standards"
  - Purpose documented: Understand practical 60fps standards
  - Present in instructions.md research gate

- [ ] **Query 2: Chrome DevTools Performance Profiling**
  - Search: "Chrome DevTools performance profiling GSAP FPS measurement"
  - Purpose documented: Learn profiling best practices
  - Present in instructions.md research gate

- [ ] **Query 3: Device Tier Performance Targets**
  - Search: "device tier performance targets normal mid-range low-end"
  - Purpose documented: Understand acceptable performance by tier
  - Present in instructions.md research gate

- [ ] **Query 4: Validation Code Examples**
  - Search: "GSAP performance validation testing patterns"
  - Purpose documented: See real-world patterns
  - Present in instructions.md research gate

**Archon Queries Status:** [PASS / FAIL]

**Total Research Sources:** _____ (Target: 8+ minimum)
- Deep-Research: 2 sections
- Archon: 4+ queries
- Chrome DevTools MCP: 6 tools

---

## Workflow Functionality Tests

### Execution Tests

- [ ] **Workflow executes without errors**
  - Can load workflow.yaml successfully
  - Instructions.md XML tags parse correctly
  - Template.md placeholders valid
  - No syntax errors in any file

- [ ] **Research gate blocks progression**
  - Step 2 contains MANDATORY research gate
  - `<checkpoint type="approval-gate" blocking="true">` tag present
  - User input REQUIRED to proceed ("Continue [c]")
  - Agent CANNOT rationalize skipping
  - Tested: Attempting to skip gate → BLOCKED

- [ ] **Template variables complete**
  - All {{variables}} defined in instructions.md
  - Template.md uses ALL variables
  - No missing placeholders in template
  - `<template-output>` tags present in instructions.md steps

- [ ] **Output file generated correctly**
  - default_output_file configured in workflow.yaml
  - Path pattern: `{output_folder}/60fps-validation-report-{{date}}.md`
  - File created when workflow completes
  - All template variables populated (no empty {{placeholders}})

**Functionality Status:** [PASS / FAIL]

---

## BMAD v6 Compliance

### workflow.yaml Compliance

- [ ] **All required BMAD v6 sections present**
  - [ ] name, description, author, version
  - [ ] config_source, module_root, user_name, communication_language, output_folder
  - [ ] deep_research_base (NEW - required for research-backed workflows)
  - [ ] deep_research_sections (NEW - lists all sections: 5.5, 5.3)
  - [ ] archon_sources (NEW - priority source IDs)
  - [ ] required_mcp (archon, chrome_devtools)
  - [ ] mcp_servers (detailed configuration)
  - [ ] agents (primary: gsap-tech-director)
  - [ ] installed_path, template, instructions, validation
  - [ ] web_bundle (portability configuration)
  - [ ] default_output_file
  - [ ] inputs, outputs (detailed specifications)
  - [ ] benchmarks (performance standards)
  - [ ] success_criteria
  - [ ] autonomous: false (research gates require user approval)
  - [ ] standalone: true

- [ ] **deep_research_sections enumerated**
  - Lists: "5.5", "5.3"
  - Includes descriptions (frame budget, debugging jank)

- [ ] **archon_sources listed**
  - Priority source IDs documented
  - Purpose noted (validation standards, performance patterns)

- [ ] **required_mcp configured**
  - archon (GSAP knowledge base)
  - chrome_devtools (performance profiling, CPU throttling)

**BMAD v6 Compliance Status:** [PASS / FAIL]

### instructions.md Compliance

- [ ] **XML tag usage correct**
  - `<workflow>` wrapper
  - `<step n="X" goal="...">` format
  - `<action>`, `<ask response="">`, `<check if="">`, `<template-output>` tags
  - `<critical>`, `<research-gate>`, `<checkpoint>` tags
  - All tags properly closed (no unclosed tags)

- [ ] **Step numbering sequential**
  - Steps numbered 1-11 (no gaps)
  - Each step has goal attribute
  - Logical flow (Setup → Research → Validation → Report → Recommendations)

- [ ] **Research gate structure correct**
  - `<critical>MANDATORY RESEARCH CHECKPOINT - BLOCKING - CANNOT SKIP</critical>`
  - `<checkpoint type="approval-gate" blocking="true">`
  - User input required: `<ask>Type "Continue [c]"</ask>`
  - Agent cannot rationalize skipping

**instructions.md Compliance Status:** [PASS / FAIL]

### template.md Compliance

- [ ] **Markdown structure valid**
  - Proper heading hierarchy (# → ## → ###)
  - Tables formatted correctly
  - Code blocks have language tags
  - No broken markdown syntax

- [ ] **Placeholder syntax consistent**
  - All variables use {{variable}} format
  - Conditional syntax correct: `{{#if_passed}}...{{/if_passed}}`
  - No invalid placeholder patterns

- [ ] **Sections comprehensive**
  - Executive Summary
  - Validation Context
  - Test Results (1x/4x/6x CPU)
  - Visual Validation
  - Console Validation
  - Memory Leak Assessment
  - Optimization Recommendations
  - Compliance Determination
  - Next Actions
  - Research Citations
  - Appendix

**template.md Compliance Status:** [PASS / FAIL]

---

## Content Quality Validation

### Generic vs Research-Backed Content

- [ ] **NO generic advice** (CRITICAL)
  - ❌ Avoid: "Use transform instead of layout properties" (without research citation)
  - ❌ Avoid: "Optimize performance" (vague, not actionable)
  - ❌ Avoid: "Make it faster" (generic)
  - ✅ INSTEAD: Cite Deep-Research 5.5 frame budget, provide before/after code

- [ ] **ALL optimization strategies research-backed**
  - Frame budget framework → Deep-Research 5.5 (verbatim quote)
  - Diagnostic framework → Deep-Research 5.3 (verbatim quote)
  - autoAlpha usage → Deep-Research 5.5 (verbatim quote)
  - will-change cleanup → Deep-Research 5.3 (verbatim quote)
  - Image decode → Deep-Research 5.3 (verbatim quote)
  - Canvas threshold → Deep-Research 5.5 (verbatim quote)
  - ScrollTrigger scrub → Deep-Research 5.5 (verbatim quote)

- [ ] **Before/after code examples present**
  - Minimum 5+ examples in instructions.md Step 10
  - Transform instead of layout properties
  - autoAlpha instead of opacity
  - Precompute before onUpdate
  - quickTo for frequent updates
  - ScrollTrigger scrub optimization
  - will-change cleanup pattern
  - Image decode pattern
  - Canvas migration pattern

**Content Quality Status:** [PASS / FAIL]

---

## Success Criteria Validation

### Minimum Requirements (MUST HAVE)

- [ ] ✅ **Research enforcement present** - MANDATORY gates block progression until research complete
- [ ] ✅ **Deep-Research sections consulted** - Sections 5.5 + 5.3 with complete file paths
- [ ] ✅ **Archon queries specified** - 4+ queries documented in research gate
- [ ] ✅ **Verbatim quotes present** - 8+ quotes with source citations
- [ ] ✅ **Frameworks extracted** - Frame budget + diagnostic framework documented
- [ ] ✅ **Code examples provided** - 5+ before/after examples
- [ ] ✅ **3-tier CPU throttle protocol** - 1x/4x/6x testing with pass/fail criteria
- [ ] ✅ **MANDATORY 4x CPU test** - Blocking test identified, cannot skip
- [ ] ✅ **Frame budget compliance** - <8ms scripting + <4ms style/layout + <4ms paint
- [ ] ✅ **Total lines ≥ 2,000** - Minimum premium standard achieved

**All Minimum Requirements Met:** [YES / NO]

### Quality Indicators (SHOULD HAVE)

- [ ] ✅ **Total lines ≥ 2,500** - Excellent premium standard
- [ ] ✅ **Verbatim quotes ≥ 10** - High research density
- [ ] ✅ **Before/after examples ≥ 8** - Comprehensive code guidance
- [ ] ✅ **Archon queries ≥ 4** - Multiple research sources
- [ ] ✅ **Research checkpoint user-tested** - Verified blocking works
- [ ] ✅ **Template variables complete** - No empty placeholders
- [ ] ✅ **Checklist.md ≥ 500 lines** - Comprehensive validation

**Quality Indicators Met:** _____ / 7

### Excellence Indicators (NICE TO HAVE)

- [ ] ✅ **Total lines ≥ 3,000** - Exceptional (like optimize-performance)
- [ ] ✅ **Verbatim quotes ≥ 15** - Very high research density
- [ ] ✅ **Before/after examples ≥ 10** - Exhaustive code guidance
- [ ] ✅ **Memory leak detection** - Step 8 present with heap profiling
- [ ] ✅ **Visual validation** - Screenshot capture protocol (Step 6)
- [ ] ✅ **Console validation** - Error detection protocol (Step 7)
- [ ] ✅ **Research citations section** - Complete documentation of all sources

**Excellence Indicators Met:** _____ / 7

---

## Comparison to Pathetic Workflow

### What Was Pathetic (Before Rebuild)

- [ ] **Total <1,000 lines** - 747 lines total (PATHETIC)
- [ ] **No MANDATORY research gates** - Research could be skipped
- [ ] **Generic optimization advice** - Not research-backed
- [ ] **No verbatim quotes** - No actual Deep-Research content
- [ ] **No systematic frameworks** - Just generic checklists
- [ ] **No checklist.md file** - Missing validation protocol
- [ ] **Missing deep_research_sections in workflow.yaml**
- [ ] **Missing deep_research_base path**
- [ ] **No research enforcement testing**

### What Is Premium (After Rebuild)

- [ ] **Total ≥ 2,000 lines** - Research-backed, comprehensive
- [ ] **MANDATORY research gates** - BLOCKING, cannot skip
- [ ] **Research-backed optimization** - Deep-Research 5.5 + 5.3 frameworks
- [ ] **8+ verbatim quotes** - Actual expertise from knowledge base
- [ ] **Systematic frameworks extracted** - Frame budget + diagnostic framework
- [ ] **checklist.md present** - 400-700+ lines validation protocol
- [ ] **deep_research_sections enumerated** - 5.5, 5.3
- [ ] **deep_research_base configured** - Proper path to Deep-Research
- [ ] **Research enforcement tested** - Verified blocking works

**Premium Transformation:** [ACHIEVED / NOT ACHIEVED]

---

## Validation Summary

**Checklist Completion Date:** {{date}}
**Validated By:** [Agent/Human name]

### Critical Tests

| Test | Status | Notes |
|------|--------|-------|
| **Research Enforcement** | [PASS / FAIL] | Can research be skipped? NO = PASS |
| **File Paths** | [PASS / FAIL] | All point to Deep-Research (not sidecars) |
| **Verbatim Quotes** | [PASS / FAIL] | 8+ quotes with citations |
| **Frameworks Extracted** | [PASS / FAIL] | Frame budget + diagnostic framework |
| **Line Count** | [PASS / FAIL] | ≥2,000 lines total |
| **BMAD v6 Compliance** | [PASS / FAIL] | All required sections present |

### Overall Result

**Research Enforcement:** [PASS / **CRITICAL FAIL**]
- **PASS:** Research gate MANDATORY, blocking, cannot skip → Workflow is PREMIUM
- **CRITICAL FAIL:** Research gate missing or skippable → Workflow is PATHETIC (rebuild required)

**Content Quality:** [PASS / FAIL]
- **PASS:** Research-backed frameworks, verbatim quotes, before/after examples → Premium content
- **FAIL:** Generic advice, no citations, vague recommendations → Pathetic content

**Line Count Quality:** [PASS / FAIL]
- **PASS:** ≥2,000 lines → Premium standard achieved
- **FAIL:** <2,000 lines → Did not meet minimum growth target

**Overall Workflow Quality:** [PREMIUM / PATHETIC]

**Notes:**
[Any issues found, improvements needed, or exceptional quality observed]

---

## Next Steps After Validation

### If PREMIUM (All Tests Pass)

1. ✅ **Mark workflow as PREMIUM in master plan**
2. ✅ **Update progress tracker** (5/19 complete → 6/19 complete)
3. ✅ **Commit changes to git**
   ```bash
   git add bmad/gsap-excellence/workflows/validate-60fps/
   git commit -m "rebuild: validate-60fps workflow (pathetic → premium, +XXX%)"
   ```
4. ✅ **Move to next workflow** (ONE AT A TIME, never batch)

### If PATHETIC (Any Critical Test Fails)

1. ❌ **HALT workflow deployment**
2. 🔧 **Fix identified issues:**
   - Add missing research gates
   - Correct file paths to Deep-Research
   - Add verbatim quotes with citations
   - Extract frameworks from Deep-Research
   - Increase line count (add more research-backed content)
3. 🔄 **Re-run this checklist after fixes**
4. ❌ **DO NOT mark as complete until ALL critical tests PASS**

---

**This checklist ensures systematic 60fps validation using research-backed frame budget standards (Deep-Research 5.5, 5.3) with MANDATORY research enforcement. Every optimization must be research-backed with citations, not trial-and-error.**

**The most critical test is Research Enforcement. Without MANDATORY blocking research gates, this workflow is WORTHLESS (generates generic advice). With proper research gates, it delivers surgical fixes backed by 2.2M+ word Deep-Research knowledge base.**
