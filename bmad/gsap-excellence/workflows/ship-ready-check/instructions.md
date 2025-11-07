<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/ship-ready-check/workflow.yaml</critical>

# ship-ready-check - Production Readiness Workflow

**Agent:** Tech Director
**Workflow:** ship-ready-check
**Purpose:** Production readiness checklist for GSAP animations

---

## Overview

Comprehensive 6-part production readiness checklist validated against Deep-Research Sections 6.1-6.3 and 2024-2025 deployment standards.

**When to Use:**
- ✅ Before deploying animations to production
- ✅ Final sign-off gate
- ✅ Client deliverable approval

**Success Criteria:** All 6 categories PASS

---

## Step 1: Context Gathering

<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Tech Director greets {user_name} and prepares production readiness assessment</action>

**"{user_name}, let's verify your animation is ready for production deployment. I'll check all 6 critical categories."**

<ask name="animation_description">
**Animation Description**
What animation is being shipped?
</ask>

<ask name="deployment_target">
**Deployment Target**
Where is this being deployed?
- Staging
- Production
- Client deliverable
</ask>

<ask name="page_url">
**Page URL (Optional)**
Provide the URL where the animation is running (for automated testing):
- Development server URL (e.g., http://localhost:3000)
- Staging URL
- Or type 'manual' to skip automated tests
</ask>

<template-output>animation_description, deployment_target, page_url</template-output>

---

## Step 2: Research Gate (MANDATORY)

<action>🚨 MANDATORY KNOWLEDGE CHECKPOINT - You MUST review the following frameworks before proceeding</action>
<action>This step is BLOCKING - you cannot proceed to Step 3 without confirming review completion</action>

### Deep-Research Frameworks

#### Section 6.1: Browser Compatibility
**Extract:** Which browsers must be tested, known quirks, fallback strategies

#### Section 6.2: Accessibility
**Extract:** prefers-reduced-motion (MANDATORY), keyboard nav, focus management

#### Section 6.3: Production Readiness
**Extract:** What makes an animation production-ready

### Latest 2024-2025 Standards (WebSearch)

**Browser Compatibility (2025):**
- GSAP works in every major browser
- Handles cross-browser inconsistencies automatically
- ES modules (NPM) + UMD files (/dist/) for compatibility
- Framework agnostic (React, Vue, Next.js, etc.)

**Production Best Practices (2025):**
- Centralize GSAP loading (load once to prevent bugs across route changes)
- gsap.registerPlugin() for all plugins
- Use gsap.context() for proper cleanup
- Viewport changes: revert and re-apply animations properly

**Key:** GSAP is now 100% FREE (all plugins) thanks to Webflow support

<action>Present confirmation prompt to {user_name}</action>

<ask response="knowledge_review_complete">
🚨 KNOWLEDGE REVIEW CHECKPOINT

Confirm you have reviewed:
- ✅ Deep-Research Section 6.1: Browser Compatibility
- ✅ Deep-Research Section 6.2: Accessibility
- ✅ Deep-Research Section 6.3: Production Readiness
- ✅ 2024-2025 deployment standards above

Type 'continue' to proceed to production checklist, or 'review' to re-read:
</ask>

<check if="knowledge_review_complete != 'continue'">
  <action>User requested review - displaying frameworks again</action>
  <goto step="2">Returning to knowledge review...</goto>
</check>

<action>✅ Knowledge review confirmed. Proceeding to 6-Part Production Checklist...</action>

---

## Step 3: Execute 6-Part Production Checklist

<action>Execute comprehensive production readiness validation across 6 critical categories</action>

---

### Category 1: Performance

<action>**Category 1 of 6: Performance Validation**</action>

<ask response="performance_validation_results">
**Performance Checklist** - Validate the following criteria:

1. **60fps on target devices:** Does animation maintain 60fps?
2. **Paint time <16ms:** Are paint operations under 16ms per frame?
3. **JS execution <5ms:** Is JavaScript execution under 5ms per frame?
4. **No memory leaks:** Does animation cleanup properly (no memory growth)?

Provide results for each check:
- Format: "1: ✅ PASS - Maintains 60fps | 2: ❌ FAIL - Paint time 20ms | 3: ✅ PASS | 4: ✅ PASS"
- Or type detailed findings with notes
</ask>

<action>Parse performance validation results</action>
<action>Extract check results:
- fps_check: ✅ or ❌
- paint_time_check: ✅ or ❌
- js_execution_check: ✅ or ❌
- memory_check: ✅ or ❌
</action>

<action>Determine performance_status:
- All ✅ → "✅ PASS"
- Any ❌ → "❌ FAIL"
</action>

<action>Generate performance_notes with findings and recommendations</action>

---

### Category 2: Visual Quality

<action>**Category 2 of 6: Visual Quality Validation**</action>

<ask response="visual_validation_results">
**Visual Quality Checklist** - Validate the following criteria:

1. **No visual glitches:** No layout shifts, flickering, clipping, or visual artifacts?
2. **Responsive behavior:** Works correctly at different viewport sizes (mobile, tablet, desktop)?
3. **Cross-browser tested:** Tested in Chrome, Firefox, and Safari?

Provide results for each check:
- Format: "1: ✅ PASS | 2: ✅ PASS | 3: ⚠️ PARTIAL - Only tested Chrome"
- Include any visual issues found
</ask>

<action>Parse visual validation results</action>
<action>Extract check results:
- glitches_check: ✅ or ❌
- responsive_check: ✅ or ❌
- cross_browser_check: ✅ or ❌
</action>

<action>Determine visual_status:
- All ✅ → "✅ PASS"
- Any ❌ → "❌ FAIL"
</action>

<action>Generate visual_notes with findings</action>

---

### Category 3: Console Health

<action>**Category 3 of 6: Console Health Validation**</action>

<ask response="console_validation_results">
**Console Health Checklist** - Validate the following criteria:

1. **Zero errors:** No console errors when animation runs?
2. **Zero warnings:** No console warnings related to animation?
3. **Clean console output:** No unexpected logs or debug messages?

Provide results for each check:
- Format: "1: ✅ PASS | 2: ❌ FAIL - 2 warnings about deprecated API | 3: ✅ PASS"
- Include any console messages found
</ask>

<action>Parse console validation results</action>
<action>Extract check results:
- errors_check: ✅ or ❌
- warnings_check: ✅ or ❌
- console_clean_check: ✅ or ❌
</action>

<action>Determine console_status:
- All ✅ → "✅ PASS"
- Any ❌ → "❌ FAIL"
</action>

<action>Generate console_notes with findings</action>

---

### Category 4: Accessibility

<action>**Category 4 of 6: Accessibility Validation**</action>

<ask response="accessibility_validation_results">
**Accessibility Checklist** - Validate the following criteria:

1. **prefers-reduced-motion fallback (MANDATORY):** Does animation respect prefers-reduced-motion media query?
2. **Keyboard navigation:** If interactive, can it be controlled via keyboard?
3. **Focus management:** Is focus properly managed during animation?
4. **No seizure risks:** No rapid flashing or strobing (< 3 flashes per second)?

Provide results for each check:
- Format: "1: ✅ PASS - Implemented with fallback | 2: N/A - Not interactive | 3: ✅ PASS | 4: ✅ PASS"
- Note: Check 1 is MANDATORY for production
</ask>

<action>Parse accessibility validation results</action>
<action>Extract check results:
- reduced_motion_check: ✅ or ❌
- keyboard_check: ✅ or ❌ or N/A
- focus_check: ✅ or ❌ or N/A
- seizure_check: ✅ or ❌
</action>

<action>Determine accessibility_status:
- All ✅ (or N/A) AND reduced_motion_check = ✅ → "✅ PASS"
- reduced_motion_check = ❌ → "❌ FAIL" (MANDATORY)
- Any other ❌ → "❌ FAIL"
</action>

<action>Generate accessibility_notes with findings and WCAG compliance notes</action>

---

### Category 5: Code Quality

<action>**Category 5 of 6: Code Quality Validation**</action>

<ask response="code_quality_validation_results">
**Code Quality Checklist** - Validate the following criteria:

1. **Cleanup implemented:** Does animation cleanup on unmount (gsap.context() or kill())?
2. **Error handling:** Are errors caught and handled gracefully?
3. **Documentation:** Is animation code documented with comments?

Provide results for each check:
- Format: "1: ✅ PASS - Uses gsap.context() | 2: ✅ PASS | 3: ⚠️ PARTIAL - Minimal comments"
- Include code quality notes
</ask>

<action>Parse code quality validation results</action>
<action>Extract check results:
- cleanup_check: ✅ or ❌
- error_handling_check: ✅ or ❌
- documentation_check: ✅ or ❌
</action>

<action>Determine code_quality_status:
- All ✅ → "✅ PASS"
- Any ❌ → "❌ FAIL"
</action>

<action>Generate code_quality_notes with findings</action>

---

### Category 6: Browser Compatibility

<action>**Category 6 of 6: Browser Compatibility Validation**</action>

<ask response="browser_validation_results">
**Browser Compatibility Checklist** - Validate the following criteria:

1. **Chrome/Edge tested:** Animation tested in Chrome or Edge?
2. **Firefox tested:** Animation tested in Firefox?
3. **Safari tested:** Animation tested in Safari (desktop or iOS)?
4. **Mobile browsers tested:** Animation tested on mobile devices?

Provide results for each check:
- Format: "1: ✅ PASS - Tested Chrome 121 | 2: ✅ PASS | 3: ⚠️ NOT TESTED | 4: ✅ PASS - iPhone Safari"
- Note: GSAP handles cross-browser compatibility automatically (2025 standard)
</ask>

<action>Parse browser validation results</action>
<action>Extract check results:
- chrome_check: ✅ or ❌
- firefox_check: ✅ or ❌
- safari_check: ✅ or ❌
- mobile_check: ✅ or ❌
</action>

<action>Determine browser_status:
- 3+ ✅ → "✅ PASS" (tested in majority of browsers)
- 2 ✅ → "⚠️ PARTIAL" (needs more testing)
- < 2 ✅ → "❌ FAIL" (insufficient testing)
</action>

<action>Generate browser_notes with test coverage summary</action>

---

<action>**All 6 categories validated. Proceeding to verdict calculation...**</action>

---

## Step 4: Calculate Final Verdict and Generate Report

<action>Calculate final deployment status based on 6-category results</action>

<action>Determine verdict logic:
- **APPROVED:** All 6 categories = PASS → Ready for production
- **BLOCKED:** Any category = FAIL → Must fix before deployment
- **CONDITIONAL:** All categories = PASS but with minor warnings → Can deploy with caveats
</action>

<action>Calculate summary metrics:
- categories_passed: Count of PASS statuses (0-6)
- critical_blockers_count: Count of FAIL statuses
- warnings_count: Count of warnings within PASS categories
</action>

<action>Determine final verdict: {{final_verdict}}</action>

<action>Generate deployment_recommendation_section based on verdict:</action>

<check if="final_verdict == 'APPROVED'">
  <action>Create deployment_recommendation_section for APPROVED status:
  "### ✅ APPROVED FOR PRODUCTION

All 6 categories PASS. Animation is production-ready.

**Deployment Clearance:** **GRANTED**

**Next Steps:**
1. Deploy to production
2. Monitor performance in real-world
3. Gather user feedback"
  </action>

  <action>Set deployment_status to "✅ APPROVED FOR PRODUCTION"</action>
  <action>Set recommendation to "DEPLOY - All checks passed"</action>
</check>

<check if="final_verdict == 'BLOCKED'">
  <action>Create deployment_recommendation_section for BLOCKED status:
  "### ❌ BLOCKED - Cannot Deploy

**Critical Blockers:** {{critical_blockers_count}}

{{blocker_list}}

**Action Required:**
1. Fix all critical blockers
2. Re-run ship-ready-check workflow
3. Achieve APPROVED status"
  </action>

  <action>Set deployment_status to "❌ BLOCKED - Cannot Deploy"</action>
  <action>Set recommendation to "DO NOT DEPLOY - Fix blockers first"</action>
</check>

<check if="final_verdict == 'CONDITIONAL'">
  <action>Create deployment_recommendation_section for CONDITIONAL status:
  "### ⚠️ CONDITIONAL APPROVAL

**Minor Issues:** {{minor_issues_count}}

{{minor_issues_list}}

**Deployment Decision:** Can deploy, but recommend fixing minor issues for optimal quality."
  </action>

  <action>Set deployment_status to "⚠️ CONDITIONAL APPROVAL"</action>
  <action>Set recommendation to "CAN DEPLOY - Consider fixing minor issues"</action>
</check>

<action>Generate final production readiness report using template.md</action>

<template-output>
date, animation_description, deployment_target, deployment_status,
categories_passed, critical_blockers_count, warnings_count, recommendation,
performance_status, fps_check, paint_time_check, js_execution_check, memory_check, performance_notes,
visual_status, glitches_check, responsive_check, cross_browser_check, visual_notes,
console_status, errors_check, warnings_check, console_clean_check, console_notes,
accessibility_status, reduced_motion_check, keyboard_check, focus_check, seizure_check, accessibility_notes,
code_quality_status, cleanup_check, error_handling_check, documentation_check, code_quality_notes,
browser_status, chrome_check, firefox_check, safari_check, mobile_check, browser_notes,
deployment_recommendation_section, final_verdict, blocker_list, minor_issues_list, minor_issues_count,
final_status
</template-output>

---

## Success Criteria

- ✅ All 6 categories analyzed
- ✅ Each category has PASS/FAIL status
- ✅ Final verdict calculated (APPROVED/BLOCKED/CONDITIONAL)
- ✅ Production readiness report generated with deployment recommendation

---

**Workflow Complete** ✨
