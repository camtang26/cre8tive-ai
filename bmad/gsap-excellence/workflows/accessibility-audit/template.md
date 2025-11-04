# Accessibility Audit Report (Deep-Research 6.1-6.4)

**Date:** {{date}}
**Workflow:** accessibility-audit
**Audit Target:** {{audit_target}}
**Audit Mode:** {{audit_mode}}

---

## Executive Summary

**WCAG Compliance:** {{wcag_compliance_status}}

**Overall Status:** {{overall_accessibility_status}}

**Quick Results:**
- Section 6.1 (prefers-reduced-motion): {{section_6_1_status}}
- Section 6.2 (keyboard/focus/screen readers): {{section_6_2_status}}
- Section 6.3 (color contrast/readability): {{section_6_3_status}}
- Section 6.4 (user control): {{section_6_4_status}}

---

## 1. Section 6.1: prefers-reduced-motion (CRITICAL - MANDATORY)

**Status:** {{section_6_1_status}}

**Validation:**
- [{{section_6_1_check_1}}] Checks `window.matchMedia('(prefers-reduced-motion: reduce)').matches`
- [{{section_6_1_check_2}}] Provides fallback (instant OR subtle fade)
- [{{section_6_1_check_3}}] No complex animations when reduced motion enabled
- [{{section_6_1_check_4}}] WCAG 2.3.3 Level AAA compliant

**Verdict:** {{section_6_1_verdict}}

{{section_6_1_violations_if_any}}

**SEVERITY:** {{section_6_1_severity}}

---

## 2. Section 6.2: Other Accessibility Considerations

**Status:** {{section_6_2_status}}

**Validation:**
- [{{section_6_2_check_1}}] No seizure-inducing flashing (>3 flashes/sec)
- [{{section_6_2_check_2}}] Keyboard navigation works during animation
- [{{section_6_2_check_3}}] Focus states remain visible
- [{{section_6_2_check_4}}] Screen reader compatible (no ARIA warnings)

**Verdict:** {{section_6_2_verdict}}

{{section_6_2_violations_if_any}}

**SEVERITY:** {{section_6_2_severity}}

---

## 3. Section 6.3: Accessible Styling

**Status:** {{section_6_3_status}}

**Validation:**
- [{{section_6_3_check_1}}] Color contrast ≥4.5:1 (WCAG AA)
- [{{section_6_3_check_2}}] Text readable during all animation states
- [{{section_6_3_check_3}}] Critical UI immediately accessible (no delayed reveals)

**Verdict:** {{section_6_3_verdict}}

{{section_6_3_violations_if_any}}

**SEVERITY:** {{section_6_3_severity}}

---

## 4. Section 6.4: User Control

**Status:** {{section_6_4_status}}

**Validation:**
- [{{section_6_4_check_1}}] Pause/play controls (if animation >5 seconds)
- [{{section_6_4_check_2}}] Skip button (if intro animation)
- [{{section_6_4_check_3}}] Respects OS-level motion preferences

**Verdict:** {{section_6_4_verdict}}

{{section_6_4_violations_if_any}}

**SEVERITY:** {{section_6_4_severity}}

---

## WCAG Compliance Summary

{{wcag_compliance_summary_table}}

---

## Accessibility Recommendations

### 🔴 CRITICAL (Blockers - MUST FIX)

{{critical_recommendations}}

### ⚠️ MEDIUM (Warnings - Should Fix)

{{medium_recommendations}}

### 💡 LOW (Enhancements - Consider)

{{low_recommendations}}

---

## Next Steps

1. {{next_step_1}}
2. {{next_step_2}}
3. {{next_step_3}}
4. Re-run `accessibility-audit` workflow to confirm compliance

---

## Compliance Checklist

**Deep-Research 6.1-6.4 Compliance:**

- [{{section_6_1_checkbox}}] **Section 6.1:** prefers-reduced-motion (CRITICAL - MANDATORY)
- [{{section_6_2_checkbox}}] **Section 6.2:** Keyboard, focus, screen readers
- [{{section_6_3_checkbox}}] **Section 6.3:** Color contrast, readability (WCAG AA)
- [{{section_6_4_checkbox}}] **Section 6.4:** User controls (pause/skip)

**Production Readiness:**

- [{{production_ready_checkbox}}] WCAG 2.1 Level AA Compliant
- [{{section_6_1_blocker}}] Section 6.1 PASS (BLOCKING - cannot ship without)

---

**Report Generated:** {{date}}
**Report Location:** {{default_output_file}}

---

**🔧 Accessibility audit complete. {{compliance_message}}**
