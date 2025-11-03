# GSAP 3.13+ Compliance Report

**Date:** {{date}}
**Workflow:** validate-modern
**Codebase:** {{codebase_root}}

---

## Executive Summary

**Overall Compliance:** {{overall_compliance_status}}

**Quick Stats:**
- GSAP Version: {{gsap_version}} (Required: ≥3.13.0)
- Deprecated Syntax Instances: {{deprecated_count}}
- Premium Plugin Opportunities: {{premium_opportunities_count}}
- Plugin Registration Issues: {{unregistered_plugins_count}}

---

## 1. Version Compliance

**Status:** {{version_compliance_status}}

- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Compliance:** {{version_pass_fail}}

{{version_details}}

---

## 2. Deprecated Syntax Analysis

**Status:** {{deprecated_syntax_status}}

**Total Deprecated Instances:** {{deprecated_count}}

**Breakdown:**
- TweenMax: {{tweenmax_count}} instances
- TweenLite: {{tweenlite_count}} instances
- TimelineMax/TimelineLite: {{timeline_count}} instances
- Old Imports: {{old_import_count}} instances
- CSSPlugin: {{cssplugin_count}} instances

{{deprecated_instances_list}}

---

## 3. Premium Plugin Opportunities (ALL FREE in 3.13+!)

**Total Opportunities:** {{premium_opportunities_count}}

**Breakdown:**
- **ScrollSmoother:** {{scrollsmoother_opportunities}} (was $99/year → FREE!)
- **MorphSVG:** {{morphsvg_opportunities}} (was premium → FREE!)
- **SplitText:** {{splittext_opportunities}} (was premium → FREE!)
- **DrawSVG:** {{drawsvg_opportunities}} (was premium → FREE!)
- **MotionPath:** {{motionpath_opportunities}} (was premium → FREE!)

{{premium_opportunities_list}}

**Potential Cost Savings:** ${{total_savings_if_paid}}/year (all FREE in 3.13+!)

---

## 4. Plugin Registration

**Imported Plugins:** {{imported_plugins_list}}

**Registered Plugins:** {{registered_plugins_list}}

**Unregistered Plugins:** {{unregistered_plugins_list}}

**Status:** {{plugin_registration_status}}

---

## 5. Upgrade Recommendations

### 🔴 HIGH PRIORITY (Blockers)

{{high_priority_recommendations}}

### ⚠️ MEDIUM PRIORITY (Warnings)

{{medium_priority_recommendations}}

### 💡 LOW PRIORITY (Recommendations)

{{low_priority_recommendations}}

---

## Next Steps

1. {{next_step_1}}
2. {{next_step_2}}
3. {{next_step_3}}
4. Re-run `validate-modern` workflow to confirm compliance

---

## Compliance Summary

{{compliance_summary_table}}

---

**Report Generated:** {{date}}
**Report Location:** {{default_output_file}}

---

**🔧 Scan complete. Review recommendations above to achieve GSAP 3.13+ compliance.**
