# validate-complete Workflow

**Module:** GSAP Excellence Engine
**Agent:** Tech Director (lead validator)
**Type:** Document Workflow (validation report generator)

---

## Overview

Comprehensive GSAP animation validation workflow that uses Chrome DevTools MCP to validate animations against production-ready standards. Ensures 60fps performance, visual quality, console health, and WCAG 2.1 accessibility compliance before deployment.

**When to Use:**
- ✅ Before deploying animations to production
- ✅ After optimization changes (validate improvements)
- ✅ For code review gates
- ✅ Client deliverable quality assurance

---

## Workflow Metadata

**Priority:** P1 (Production-Critical)
**Complexity:** High
**Research Intensity:** High
**Estimated Duration:** 20-30 minutes
**Output Type:** Validation Report (Markdown)

---

## Technical Specifications

### Required MCP Servers

1. **chrome-devtools** (PRIMARY)
   - Performance profiling (FPS, paint time, JS execution)
   - Visual validation (screenshots)
   - Console message inspection
   - Memory leak detection
   - CPU/network throttling emulation

2. **archon**
   - Validation best practices from GSAP knowledge base
   - 60fps performance standards
   - Optimization technique research

3. **context7** (fallback)
   - Latest GSAP validation APIs
   - Framework-specific cleanup patterns

---

### Deep-Research Sections Referenced

The workflow integrates findings from these Deep-Research sections:

- **Section 5.5:** 60fps Optimization (PRIMARY)
  - File: `22-55-optimize-animations-for-60fps.md`
  - Standards: Frame time budgets, throttling protocols, paint/JS execution limits

- **Section 5.3:** Debugging Jank
  - File: `20-53-debugging-jank.md`
  - Techniques: Layout thrashing detection, GPU acceleration verification, will-change optimization

- **Section 6.2:** Accessibility
  - File: `24-61-respecting-prefers-reduced-motion.md`
  - Requirements: prefers-reduced-motion implementation, fallback strategies, user control

---

## Performance Standards (2024-2025 Validated)

### FPS Targets

| Device Tier | CPU Throttle | Target FPS | Minimum FPS | Status         |
|-------------|--------------|------------|-------------|----------------|
| High-End    | None (1x)    | 60fps      | 55fps       | PASS if ≥60fps |
| Mid-Range   | 4x           | 60fps      | 60fps       | PASS if ≥60fps |
| Low-End     | 6x           | 30fps      | 30fps       | PASS if ≥30fps |

**Note:** GSAP achieves consistent 60fps even under high DOM load per Web Almanac 2024. If FPS <60fps on 4x throttle, optimization needed.

### Frame Budget (60fps = 16.67ms per frame)

- **Paint Time:** <16ms per frame (target)
- **JS Execution:** <5ms per frame (target)
- **Total Frame Budget:** 16.67ms (1000ms / 60fps)

**Breach Impact:** Exceeding 16ms compromises fluid 60fps rendering.

### Console Health

- **Errors:** 0 (ZERO TOLERANCE)
- **Warnings:** 0 (ZERO TOLERANCE)

All console errors and GSAP warnings must be fixed before passing validation.

### Memory Standards

- **Growth per Cycle:** 0MB (no sustained growth)
- **Acceptable Growth:** <5MB across 5 animation cycles
- **Warning Threshold:** 5-10MB growth
- **Failure Threshold:** >10MB growth (memory leak)

---

## Chrome DevTools MCP Tools Used

This workflow makes extensive use of Chrome DevTools MCP (most comprehensive usage of any GSAP Excellence workflow):

### Navigation & Setup
- `navigate_page` - Navigate to page under test
- `resize_page` - Mobile viewport emulation (375x667)

### Performance Profiling
- `performance_start_trace` - Begin FPS profiling
- `performance_stop_trace` - End profiling and analyze results
- `emulate_cpu` - CPU throttling (4x, 6x rates)
- `emulate_network` - Network throttling (optional)

### Visual Validation
- `take_screenshot` - Capture before/during/after animation states

### Console & Debugging
- `list_console_messages` - Error/warning detection
- `evaluate_script` - Memory heap inspection, custom validation

---

## Validation Sources (2024-2025)

### Web Search Evidence

- **Chrome DevTools Performance (2025)**
  - FPS meter enablement in Performance panel
  - CPU throttling protocols (4x mid-range, 6x low-end)
  - Incognito/Guest mode for clean measurements
  - Non-compositing animation detection (red triangles)

- **Web Almanac 2024**
  - GSAP achieves consistent 60fps under high DOM load
  - Hardware acceleration offloads transform/opacity to GPU
  - Timeline batching reduces performance overhead

- **Viget 2024: Animation Performance 101**
  - DevTools profiling techniques
  - Frame budget awareness
  - Paint/layout thrashing identification

- **AugustInfotech 2024**
  - requestAnimationFrame validation
  - Animation packing (groups duplicate animations)
  - Frame budget: Complex transitions raise paint times from 5ms → 30ms

### Archon Knowledge Base

- **GSAP Forums**
  - Performance measurement best practices
  - Optimization techniques from community
  - Real-world benchmarking approaches

- **Chrome DevTools Integration**
  - Animation pane usage for GSAP
  - Timeline analysis for jank detection

### GSAP Core Features

- **requestAnimationFrame** (default)
  - Automatically syncs with display refresh rate
  - No manual RAF management needed

- **Hardware Acceleration**
  - `transform` and `opacity` properties offload to GPU
  - Reduces main thread workload

- **Animation Packing**
  - Groups duplicate animations
  - Minimizes browser reflows

- **Timeline Batching**
  - Groups timeline updates
  - Reduces performance overhead

---

## Success Criteria

Animation passes validation when ALL criteria are met:

- ✅ **60fps on high-end devices** (no CPU throttle)
- ✅ **60fps on mid-range devices** (4x CPU throttle)
- ✅ **30fps minimum on low-end devices** (6x CPU throttle)
- ✅ **Paint time <16ms per frame**
- ✅ **JS execution <5ms per frame**
- ✅ **Zero console errors**
- ✅ **Zero console warnings**
- ✅ **No memory leaks detected** (<5MB growth across cycles)
- ✅ **prefers-reduced-motion fallback present** (WCAG 2.1 MANDATORY)
- ✅ **Visual validation passed** (no glitches, layout shifts, or rendering issues)

**PASS Status:** All criteria met
**CONDITIONAL PASS:** Minor non-critical issues only (console warnings, acceptable memory growth)
**FAIL Status:** Any critical criterion failed (FPS, errors, accessibility)

---

## Workflow Structure

### Step 1: Context Gathering
- Collect page URL, animation description, target devices
- Set test conditions (normal vs throttled)

### Step 2: Conduct Validation Research (MANDATORY)
- Read Deep-Research Sections 5.5, 5.3, 6.2
- Summarize latest 2024-2025 validation standards
- Execute 3 Archon MCP queries (60fps standards, DevTools profiling, console patterns)
- Document research findings before proceeding

### Step 3: Performance Validation
- Navigate to page using Chrome DevTools MCP
- Profile high-end performance (no throttle)
- Profile mid-range performance (4x CPU throttle)
- Profile low-end performance (6x CPU throttle)
- Check memory leaks across animation cycles

### Step 4: Visual Validation
- Desktop viewport screenshots (1920x1080)
- Mobile viewport screenshots (375x667, if applicable)
- Check for glitches, layout shifts, positioning issues

### Step 5: Console Validation
- List console messages via Chrome DevTools MCP
- Count errors (zero tolerance)
- Count warnings (zero tolerance)

### Step 6: Accessibility & Code Quality
- Validate prefers-reduced-motion implementation (MANDATORY)
- Verify cleanup code exists (useGSAP, ScrollTrigger.kill(), etc.)

### Step 7: Generate Executive Summary
- Compile all validation results
- Calculate overall status (PASS/CONDITIONAL PASS/FAIL)
- Generate executive summary with recommendations
- Output validation report to {output_folder}

---

## Output

**File:** `{output_folder}/gsap-validation-report-{timestamp}.md`

**Template Variables:** 60 variables mapped across 7 template-output sections

**Report Sections:**
1. Executive Summary (status, critical issues, performance summary)
2. Performance Validation (high/mid/low-end FPS, memory)
3. Visual Validation (desktop/mobile screenshots)
4. Console Validation (errors/warnings)
5. Accessibility & Code Quality (prefers-reduced-motion, cleanup)
6. Validation Sources (Deep-Research, web evidence, Archon citations)
7. Recommendations (critical issues, improvements, optimization tips)

---

## Integration Notes

**Standalone:** No (requires Tech Director agent context)
**Module:** gsap-excellence
**Invoked By:** Tech Director agent during animation review gates
**Dependencies:** Chrome DevTools MCP (required), Archon MCP (required), Context7 MCP (fallback)

---

## Performance Notes

**Instructions:** 694 lines (comprehensive validation protocol)
**Template:** 300 lines (structured Handlebars report)
**Config Compliance:** 100% (all standard variables present)
**Template Mapping:** 100% (60/60 variables mapped)
**Web Bundle:** Complete (instructions, template, config)

---

## Changelog

### 2025-11-07 - YAML Cleanup
- **Removed:** 7 bloat fields (33% reduction) - metadata, required_mcp, deep_research_sections, performance_standards, chrome_devtools_tools, validation_sources, success_criteria
- **Created:** This README.md to document workflow specification
- **Result:** workflow.yaml reduced from 108 lines → 28 lines (74% reduction)
- **Impact:** 40-50% token savings when loading workflow config, improved maintainability

---

**Validation Standards Updated:** 2025-11-07
**Last Audit:** 2025-11-07 (PASS with cleanup recommendation)
