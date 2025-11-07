# Accessibility Audit Workflow Instructions
# Validate WCAG compliance using Deep-Research 6.1-6.4

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/accessibility-audit/workflow.yaml</critical>
<critical>This workflow validates Deep-Research Sections 6.1-6.4 ONLY (accessibility focus)</critical>

<workflow>

<!-- ============================================================ -->
<!-- STEP 1: TECH DIRECTOR - AUDIT INITIALIZATION -->
<!-- ============================================================ -->

<step n="1" goal="Tech Director: Initialize Accessibility Audit">
<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Tech Director greets {user_name} and prepares to audit animation accessibility using Deep-Research 6.1-6.4</action>

**🔧 "{user_name}, initiating accessibility audit using Deep-Research frameworks..."**

<ask response="page_url">Page URL for live testing? (optional - can do code review instead)</ask>

<check if="page_url_provided">
**🔧 "Live testing mode: Using Chrome DevTools MCP for accessibility validation"**

**Testing Method:** Live page testing with Chrome DevTools MCP
**Page URL:** {{page_url}}
**Tools:** evaluate_script, take_screenshot, list_console_messages

</check>

<check if="no_page_url">
**🔧 "Code review mode: Analyzing animation code for accessibility compliance"**

<ask response="animation_code_location">Animation code file(s) to review?</ask>

**Testing Method:** Code review (static analysis)
**Code Files:** {{animation_code_files}}
**Tools:** File reading, pattern matching

</check>

<template-output>audit_mode, audit_target</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 2: SECTION 6.1 - prefers-reduced-motion (CRITICAL MANDATORY) -->
<!-- ============================================================ -->

<step n="2" goal="Tech Director: Validate Section 6.1 - prefers-reduced-motion (MANDATORY)">
<action>Tech Director validates prefers-reduced-motion fallback implementation</action>

**🔧 "Validating Section 6.1: prefers-reduced-motion (CRITICAL - CANNOT SHIP WITHOUT)..."**

<critical>Section 6.1 is BLOCKING - animations CANNOT be shipped without prefers-reduced-motion fallback</critical>

<check if="live_testing_mode">
**Live Testing: Emulating prefers-reduced-motion**

<action>Use Chrome DevTools MCP to test prefers-reduced-motion:</action>

**1. Check if prefers-reduced-motion is detected:**
```javascript
evaluate_script({
  function: `() => window.matchMedia('(prefers-reduced-motion: reduce)').matches`
})
```

**2. Emulate prefers-reduced-motion:**
```javascript
evaluate_script({
  function: `() => {
    // Emulate prefers-reduced-motion: reduce
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return {
      matches: true,
      detected: mediaQuery.matches
    };
  }`
})
```

**3. Trigger animation with reduced motion enabled:**
<action>Navigate to {{page_url}} with reduced motion preference</action>
<action>Take screenshot before animation</action>
<action>Trigger animation</action>
<action>Take screenshot after</action>

**Expected Behavior:**
- Animation should be instant transition OR subtle fade
- NO complex animations (transforms, staggers, ScrollTrigger)
- Immediate final state OR simple opacity fade

**Validation:**
- [ ] Page checks `window.matchMedia('(prefers-reduced-motion: reduce)').matches`?
- [ ] Animation disabled OR simplified when reduced motion enabled?
- [ ] Fallback provides instant transitions OR subtle fades only?
- [ ] No jarring or complex animations?

</check>

<check if="code_review_mode">
**Code Review: Checking for prefers-reduced-motion implementation**

<action>Search animation code for prefers-reduced-motion handling:</action>

**Pattern to Find:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Instant transition OR subtle fade
  gsap.set(element, { opacity: 1, y: 0 });
} else {
  // Full animation
  gsap.to(element, { opacity: 1, y: 0, duration: 1 });
}
```

**Search for:**
1. `matchMedia` + `prefers-reduced-motion`
2. Conditional logic based on `prefersReducedMotion`
3. Alternative code path (instant transitions OR simple fades)

**Validation:**
- [ ] Code checks `prefers-reduced-motion` media query?
- [ ] Conditional logic branches on reduced motion?
- [ ] Fallback uses `gsap.set()` OR simple `opacity` fade only?
- [ ] NO complex animations in fallback (no transforms, staggers, ScrollTrigger)?

</check>

**Section 6.1 Verdict:**

<check if="section_6_1_pass">
**✅ SECTION 6.1: PASS**

- ✅ prefers-reduced-motion checked
- ✅ Fallback implemented (instant OR subtle fade)
- ✅ No complex animations when reduced motion enabled
- ✅ WCAG 2.1 Level AAA compliant

**Status:** MANDATORY REQUIREMENT MET

</check>

<check if="section_6_1_fail">
**🔴 SECTION 6.1: FAIL - BLOCKING ISSUE**

{{section_6_1_violations}}

**SEVERITY:** CRITICAL (CANNOT SHIP)

**Fix Required:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Instant transition (no animation)
  gsap.set(element, { opacity: 1, y: 0 });
} else {
  // Full animation
  gsap.to(element, { opacity: 1, y: 0, duration: 1 });
}
```

**Status:** MANDATORY REQUIREMENT NOT MET - BLOCKING

</check>

<template-output>section_6_1_verdict, section_6_1_violations_if_any</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 3: SECTION 6.2 - Other Accessibility Considerations -->
<!-- ============================================================ -->

<step n="3" goal="Tech Director: Validate Section 6.2 - Other Considerations">
<action>Tech Director validates keyboard navigation, focus, screen readers</action>

**🔧 "Validating Section 6.2: Keyboard Navigation, Focus, Screen Readers..."**

**Section 6.2 Validation (Deep-Research):**

**1. No Seizure-Inducing Flashing:**
- [ ] NO flashing >3 times per second?
- [ ] NO rapid color changes?
- [ ] Compliant with WCAG 2.3.1 (Three Flashes)?

**2. Keyboard Navigation:**
<check if="live_testing_mode">
<action>Test keyboard navigation during animation:</action>
- Tab through interactive elements
- Verify focus visible during animations
- Check if animations interfere with keyboard nav

**Validation:**
- [ ] Tab key works during animation?
- [ ] Focus remains visible (not hidden by transforms)?
- [ ] Keyboard shortcuts not blocked?
</check>

<check if="code_review_mode">
<action>Review code for keyboard nav considerations:</action>
- Check if animations modify `pointer-events` (can block interaction)
- Check if `z-index` changes could hide focus
- Check if transforms could move focus off-screen

**Validation:**
- [ ] No `pointer-events: none` during critical interactions?
- [ ] z-index managed properly (focus not hidden)?
- [ ] Transforms don't move focused elements off-screen?
</check>

**3. Focus State Visibility:**
- [ ] Focus outlines remain visible during animations?
- [ ] No `outline: none` without custom focus styles?
- [ ] Focus indicators not obscured by animated elements?

**4. Screen Reader Compatibility:**
<check if="live_testing_mode">
<action>Check console for accessibility warnings:</action>
```
list_console_messages({ filter: "warning" })
```

**Look for:**
- ARIA warnings
- Missing alt text warnings
- Accessibility violations

**Validation:**
- [ ] NO screen reader warnings in console?
- [ ] State changes announced (if applicable)?
- [ ] ARIA attributes not broken by animations?
</check>

**Section 6.2 Verdict:**

<check if="section_6_2_pass">
**✅ SECTION 6.2: PASS**

- ✅ No seizure-inducing flashing
- ✅ Keyboard navigation works
- ✅ Focus states visible
- ✅ Screen reader compatible

</check>

<check if="section_6_2_issues">
**⚠️ SECTION 6.2: ISSUES DETECTED**

{{section_6_2_violations}}

**SEVERITY:** MEDIUM (should fix before production)

</check>

<template-output>section_6_2_verdict, section_6_2_violations_if_any</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 4: SECTION 6.3 - Accessible Styling -->
<!-- ============================================================ -->

<step n="4" goal="Tech Director: Validate Section 6.3 - Accessible Styling">
<action>Tech Director validates color contrast and readability during animations</action>

**🔧 "Validating Section 6.3: Color Contrast and Readability..."**

**Section 6.3 Validation (Deep-Research):**

**1. Color Contrast (WCAG AA 4.5:1 minimum):**

<check if="live_testing_mode">
<action>Take screenshots at different animation states:</action>
- Before animation starts
- Mid-animation
- After animation completes

<action>Visual inspection for color contrast:</action>
- Text vs background (all states)
- Interactive elements vs background
- During transition states

**Validation:**
- [ ] Text contrast ≥4.5:1 (WCAG AA) during ALL animation states?
- [ ] Interactive element contrast ≥3:1 (WCAG AA)?
- [ ] No brief moments of low contrast during transitions?

**Manual Check:** Use browser DevTools or contrast checker on screenshots

</check>

<check if="code_review_mode">
<action>Review code for color/opacity transitions:</action>

**Look for:**
- Opacity animations on text (can reduce contrast)
- Color transitions (can pass through low-contrast states)
- Background color changes affecting text readability

**Validation:**
- [ ] Text opacity never drops below readable levels?
- [ ] Color transitions maintain contrast throughout?
- [ ] Background animations don't obscure text?

</check>

**2. Text Readability:**
- [ ] Text remains readable during all animation states?
- [ ] Font size not animated below minimum (16px body text)?
- [ ] Letter spacing/line height changes maintain readability?

**3. Critical UI Not Animated During Loading:**
- [ ] Essential navigation/buttons not animated on page load?
- [ ] Critical content accessible immediately (no delayed reveals)?
- [ ] Loading animations don't block user interaction?

**Section 6.3 Verdict:**

<check if="section_6_3_pass">
**✅ SECTION 6.3: PASS**

- ✅ Color contrast maintained (WCAG AA 4.5:1)
- ✅ Text readable during all states
- ✅ Critical UI immediately accessible

</check>

<check if="section_6_3_issues">
**⚠️ SECTION 6.3: ISSUES DETECTED**

{{section_6_3_violations}}

**SEVERITY:** MEDIUM (WCAG AA compliance at risk)

</check>

<template-output>section_6_3_verdict, section_6_3_violations_if_any</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 5: SECTION 6.4 - User Control -->
<!-- ============================================================ -->

<step n="5" goal="Tech Director: Validate Section 6.4 - User Control">
<action>Tech Director validates user controls for long animations</action>

**🔧 "Validating Section 6.4: User Control Over Animations..."**

**Section 6.4 Validation (Deep-Research):**

**1. Pause/Play Controls for Long Animations (>5 seconds):**

<check if="animation_duration > 5_seconds">
**Long Animation Detected (>5 seconds)**

**Required:** Pause/play controls for WCAG 2.2.2

<action>Check for pause/play implementation:</action>
- [ ] Pause button provided?
- [ ] Play button provided?
- [ ] Keyboard shortcut (e.g., spacebar) to pause/play?
- [ ] Clear visual indication of paused state?

**Validation:**
- [ ] Controls accessible before animation starts?
- [ ] Controls remain accessible during animation?
- [ ] Pause immediately stops animation (not just slows)?
- [ ] Play resumes from paused state?

</check>

<check if="animation_duration <= 5_seconds">
**Short Animation (<5 seconds)**

**Optional:** Pause controls not required by WCAG for <5s animations

**Status:** No pause/play controls needed

</check>

**2. Skip Intro Animations:**
- [ ] Users can skip lengthy intro animations?
- [ ] "Skip" button visible and accessible?
- [ ] Skip keyboard shortcut available (e.g., ESC)?

**3. Respects OS-Level Motion Preferences:**
- [ ] Already validated in Section 6.1 (prefers-reduced-motion)

**Section 6.4 Verdict:**

<check if="section_6_4_pass">
**✅ SECTION 6.4: PASS**

- ✅ Pause/play controls (if animation >5s)
- ✅ Skip button (if intro animation)
- ✅ Respects OS motion preferences

</check>

<check if="section_6_4_issues">
**⚠️ SECTION 6.4: ISSUES DETECTED**

{{section_6_4_violations}}

**SEVERITY:** MEDIUM (WCAG 2.2.2 compliance)

</check>

<template-output>section_6_4_verdict, section_6_4_violations_if_any</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 6: GENERATE ACCESSIBILITY REPORT -->
<!-- ============================================================ -->

<step n="6" goal="Tech Director: Generate Accessibility Report">
<action>Tech Director compiles comprehensive accessibility report using Deep-Research 6.1-6.4</action>

**🔧 "Generating accessibility report..."**

**ACCESSIBILITY AUDIT REPORT (Deep-Research 6.1-6.4)**

**1. Section 6.1: prefers-reduced-motion (CRITICAL - MANDATORY)**
- **Status:** {{section_6_1_status}}
- **Verdict:** {{section_6_1_verdict}}
- **Violations:** {{section_6_1_violations}}
- **Severity:** {{section_6_1_severity}}

**2. Section 6.2: Other Considerations**
- **Status:** {{section_6_2_status}}
- **Verdict:** {{section_6_2_verdict}}
- **Violations:** {{section_6_2_violations}}
- **Severity:** {{section_6_2_severity}}

**3. Section 6.3: Accessible Styling**
- **Status:** {{section_6_3_status}}
- **Verdict:** {{section_6_3_verdict}}
- **Violations:** {{section_6_3_violations}}
- **Severity:** {{section_6_3_severity}}

**4. Section 6.4: User Control**
- **Status:** {{section_6_4_status}}
- **Verdict:** {{section_6_4_verdict}}
- **Violations:** {{section_6_4_violations}}
- **Severity:** {{section_6_4_severity}}

**OVERALL WCAG COMPLIANCE:**

<check if="fully_compliant">
**✅ WCAG AA COMPLIANT**

- ✅ Section 6.1: PASS (prefers-reduced-motion MANDATORY)
- ✅ Section 6.2: PASS (keyboard, focus, screen readers)
- ✅ Section 6.3: PASS (color contrast, readability)
- ✅ Section 6.4: PASS (user control)

**Compliance Level:** WCAG 2.1 Level AA
**Status:** READY FOR PRODUCTION

</check>

<check if="has_violations">
**🔴 WCAG COMPLIANCE ISSUES**

**CRITICAL Violations (Blockers):**
{{critical_violations_list}}

**MEDIUM Violations (Warnings):**
{{medium_violations_list}}

**Compliance Status:** NOT WCAG AA COMPLIANT

**Action Required:** Fix CRITICAL violations before production

</check>

<action>Save accessibility report to file</action>

**Report saved to:** {{default_output_file}}

<template-output>accessibility_report_complete</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 7: PROVIDE RECOMMENDATIONS -->
<!-- ============================================================ -->

<step n="7" goal="Tech Director: Provide Accessibility Recommendations">
<action>Tech Director provides prioritized recommendations to achieve WCAG compliance</action>

**🔧 "Generating accessibility recommendations..."**

**ACCESSIBILITY RECOMMENDATIONS (Prioritized)**

**🔴 CRITICAL (Blockers - MUST FIX):**

<check if="section_6_1_fail">
1. **Implement prefers-reduced-motion Fallback (Section 6.1)**
   - **Violation:** {{section_6_1_violation_detail}}
   - **Fix:**
   ```javascript
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

   if (prefersReducedMotion) {
     gsap.set(element, { opacity: 1, y: 0 }); // Instant
   } else {
     gsap.to(element, { opacity: 1, y: 0, duration: 1 }); // Animated
   }
   ```
   - **Impact:** CANNOT ship without this (WCAG 2.1 Level AAA)
</check>

**⚠️ MEDIUM (Warnings - Should Fix):**

{{medium_severity_recommendations}}

**💡 LOW (Enhancements - Consider):**

{{low_severity_recommendations}}

**Next Steps:**

1. **Address CRITICAL violations first** (Section 6.1 is BLOCKING)
2. **Fix MEDIUM violations** (WCAG AA compliance)
3. **Consider LOW enhancements** (improve accessibility beyond minimum)
4. **Re-run accessibility-audit workflow** to confirm compliance

<ask>Accessibility audit complete. Review report? [done]</ask>

<template-output>accessibility_recommendations, next_steps</template-output>
</step>

</workflow>

## Deep-Research Accessibility Standards (6.1-6.4)

**Section 6.1: prefers-reduced-motion (CRITICAL)**
- MANDATORY - CANNOT ship without this
- Check: `window.matchMedia('(prefers-reduced-motion: reduce)').matches`
- Fallback: Instant transitions OR subtle fades ONLY
- WCAG: 2.3.3 Animation from Interactions (Level AAA)

**Section 6.2: Other Considerations**
- No seizure-inducing flashing (>3 flashes/sec)
- Keyboard navigation works
- Focus states visible
- Screen readers compatible
- WCAG: 2.1.1, 2.3.1, 2.4.7

**Section 6.3: Accessible Styling**
- Color contrast ≥4.5:1 (WCAG AA)
- Text readable during all states
- Critical UI immediately accessible
- WCAG: 1.4.3, 1.4.6

**Section 6.4: User Control**
- Pause/play for animations >5 seconds
- Skip buttons for intro animations
- Respects OS motion preferences
- WCAG: 2.2.2

## Success Metrics

**Accessibility Audit Success:**
- ✅ All 4 Deep-Research sections validated (6.1-6.4)
- ✅ Section 6.1 compliance confirmed (MANDATORY)
- ✅ WCAG AA compliance verified
- ✅ Accessibility report generated
- ✅ Prioritized recommendations provided
- ✅ Ready for production (if compliant)
