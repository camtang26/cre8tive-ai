# Validate Modern Workflow Instructions
# Ensure GSAP 3.13+ compliance across codebase

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/validate-modern/workflow.yaml</critical>
<critical>This is a READ-ONLY validation workflow - NO CODE CHANGES made</critical>

<workflow>

<!-- ============================================================ -->
<!-- STEP 1: TECH DIRECTOR - SCAN INITIALIZATION -->
<!-- ============================================================ -->

<step n="1" goal="Tech Director: Initialize Compliance Scan">
<action>Tech Director prepares to scan codebase for GSAP 3.13+ compliance</action>

**🔧 "Initiating GSAP compliance scan..."**

<ask response="codebase_root">Codebase root directory to scan? [default: current project root]</ask>

**Scan Configuration:**
- **Root Directory:** {{codebase_root}}
- **File Extensions:** .js, .jsx, .ts, .tsx
- **Excluded Directories:** node_modules, dist, build, .next

<action>Confirm scan parameters</action>

**🔧 "Starting compliance scan with these parameters..."**

<template-output>scan_configuration</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 2: CHECK GSAP VERSION (PACKAGE.JSON) -->
<!-- ============================================================ -->

<step n="2" goal="Tech Director: Validate GSAP Version">
<action>Tech Director checks GSAP version in package.json</action>

**🔧 "Checking GSAP version in package.json..."**

<action>Read package.json file(s):</action>
- Check `{codebase_root}/package.json`
- Check workspaces if monorepo (apps/*/package.json, packages/*/package.json)

**Search for:**
```json
{
  "dependencies": {
    "gsap": "^X.X.X"
  }
}
```

**Version Validation:**

<check if="version >= 3.13.0">
**✅ GSAP VERSION COMPLIANT**

- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** ✅ PASS
- **Premium Plugins:** ALL FREE (ScrollSmoother, MorphSVG, SplitText, DrawSVG, MotionPath)

</check>

<check if="version < 3.13.0 AND version >= 3.0.0">
**⚠️ GSAP VERSION OUTDATED (3.x but pre-3.13)**

- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** ⚠️ UPGRADE NEEDED
- **Impact:** Missing premium plugins (they're FREE in 3.13+!)
- **Recommendation:** Upgrade to 3.13.0+ to unlock FREE premium plugins

**Upgrade Command:**
```bash
npm install gsap@latest
# or
yarn upgrade gsap@latest
```

</check>

<check if="version < 3.0.0">
**🔴 GSAP VERSION CRITICAL - GSAP 2.x DETECTED**

- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** 🔴 MAJOR UPGRADE REQUIRED
- **Impact:** Using deprecated GSAP 2.x API (TweenMax, TweenLite, TimelineMax)
- **Recommendation:** IMMEDIATE upgrade to 3.13.0+ required

**Major Breaking Changes (2.x → 3.x):**
- TweenMax/TweenLite → gsap
- TimelineMax/TimelineLite → gsap.timeline()
- Different plugin registration
- Different ScrollTrigger API

**Migration Guide:** https://gsap.com/docs/v3/GSAP3/Migrating/

**Upgrade Command:**
```bash
npm install gsap@latest
# or
yarn upgrade gsap@latest
```

</check>

<template-output>gsap_version, version_compliance_status, upgrade_priority</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 3: SCAN FOR DEPRECATED SYNTAX (GSAP 2.x) -->
<!-- ============================================================ -->

<step n="3" goal="Tech Director: Scan for Deprecated Syntax">
<action>Tech Director scans codebase for GSAP 2.x deprecated syntax</action>

**🔧 "Scanning for deprecated GSAP 2.x syntax..."**

<critical>Use Glob and Grep tools to search codebase - NOT bash find/grep</critical>

**Deprecated Patterns to Search (GSAP 2.x → GSAP 3.x):**

**1. TweenMax (deprecated)**
<action>Search for TweenMax usage:</action>
```
grep "TweenMax" {codebase_root} --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"
```

**Expected:** 0 instances (use `gsap.to/from/fromTo` in 3.x)

**2. TweenLite (deprecated)**
<action>Search for TweenLite usage:</action>
```
grep "TweenLite" {codebase_root}
```

**Expected:** 0 instances (use `gsap.to/from/fromTo` in 3.x)

**3. TimelineMax/TimelineLite (deprecated)**
<action>Search for Timeline deprecated classes:</action>
```
grep "TimelineMax\|TimelineLite" {codebase_root}
```

**Expected:** 0 instances (use `gsap.timeline()` in 3.x)

**4. Old Import Syntax (GSAP 2.x)**
<action>Search for old import patterns:</action>
```
grep "import.*TweenMax\|import.*TweenLite\|import.*TimelineMax" {codebase_root}
```

**Expected:** 0 instances

**5. CSSPlugin (removed in 3.x)**
<action>Search for CSSPlugin references:</action>
```
grep "CSSPlugin" {codebase_root}
```

**Expected:** 0 instances (CSSPlugin automatic in 3.x)

**Deprecated Syntax Report:**

<check if="deprecated_instances_found">
**🔴 DEPRECATED SYNTAX DETECTED**

**Total Instances:** {{deprecated_count}}

**Breakdown:**
- TweenMax: {{tweenmax_count}} instances
- TweenLite: {{tweenlite_count}} instances
- TimelineMax/TimelineLite: {{timeline_count}} instances
- Old imports: {{old_import_count}} instances
- CSSPlugin: {{cssplugin_count}} instances

**File Locations (with line numbers):**
{{deprecated_instances_list}}

**SEVERITY:** HIGH (blocks GSAP 3.13+ compliance)

**Recommendation:** Migrate all instances to GSAP 3.x syntax before using module

</check>

<check if="no_deprecated_instances">
**✅ NO DEPRECATED SYNTAX DETECTED**

- **TweenMax:** 0 instances ✅
- **TweenLite:** 0 instances ✅
- **TimelineMax/TimelineLite:** 0 instances ✅
- **Old imports:** 0 instances ✅
- **CSSPlugin:** 0 instances ✅

**Status:** ✅ PASS - Modern GSAP 3.x syntax

</check>

<template-output>deprecated_syntax_report, deprecated_instances_list, deprecated_count</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 4: IDENTIFY PREMIUM PLUGIN OPPORTUNITIES -->
<!-- ============================================================ -->

<step n="4" goal="Tech Director: Identify Premium Plugin Opportunities">
<action>Tech Director analyzes code for premium plugin upgrade opportunities</action>

**🔧 "Analyzing code for premium plugin opportunities (ALL FREE in 3.13+!)..."**

<critical>🎉 ALL premium plugins are FREE in GSAP 3.13+ - recommend liberally!</critical>

**Premium Plugins (Now FREE):**

**1. ScrollSmoother Opportunities**
<action>Search for scroll smoothing implementations:</action>
```
grep -i "smooth.*scroll\|locomotive.*scroll\|lenis" {codebase_root}
```

**If found:** Recommend replacing custom smooth scroll with ScrollSmoother (was $99/year, now FREE!)

**2. MorphSVG Opportunities**
<action>Search for SVG morphing/transformations:</action>
```
grep -i "svg.*morph\|path.*animate" {codebase_root}
```

**If found:** Recommend MorphSVG for smooth SVG morphing (was premium, now FREE!)

**3. SplitText Opportunities**
<action>Search for text splitting/animation:</action>
```
grep -i "split.*text\|text.*split\|char.*animate" {codebase_root}
```

**If found:** Recommend SplitText for advanced text reveals (was premium, now FREE!)

**4. DrawSVG Opportunities**
<action>Search for SVG line drawing:</action>
```
grep -i "stroke.*dashoffset\|svg.*draw" {codebase_root}
```

**If found:** Recommend DrawSVG for elegant SVG line animations (was premium, now FREE!)

**5. MotionPath Opportunities**
<action>Search for path following animations:</action>
```
grep -i "follow.*path\|motion.*path" {codebase_root}
```

**If found:** Recommend MotionPath for complex path animations (was premium, now FREE!)

**Premium Plugin Opportunities Report:**

**ScrollSmoother:** {{scrollsmoother_opportunities_count}} opportunities
**MorphSVG:** {{morphsvg_opportunities_count}} opportunities
**SplitText:** {{splittext_opportunities_count}} opportunities
**DrawSVG:** {{drawsvg_opportunities_count}} opportunities
**MotionPath:** {{motionpath_opportunities_count}} opportunities

**Total Opportunities:** {{total_premium_opportunities}}

<check if="premium_opportunities_found">
**🎉 PREMIUM PLUGIN UPGRADE OPPORTUNITIES**

**These plugins are NOW FREE in GSAP 3.13+!**

{{premium_opportunities_list}}

**Recommendation:** Consider upgrading these implementations to use premium plugins (no cost!)

**Cost Savings:** Previously $99/year per plugin - now FREE!

</check>

<template-output>premium_opportunities_report, premium_opportunities_list</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 5: VALIDATE PLUGIN REGISTRATION -->
<!-- ============================================================ -->

<step n="5" goal="Tech Director: Validate Plugin Registration">
<action>Tech Director checks if GSAP plugins are properly registered</action>

**🔧 "Validating GSAP plugin registration..."**

<action>Search for plugin imports and registration:</action>

**Common Plugins:**
```javascript
// CORRECT (GSAP 3.x)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
```

**Search Patterns:**
1. **ScrollTrigger:**
   - Import: `import.*ScrollTrigger`
   - Registration: `registerPlugin.*ScrollTrigger`

2. **SplitText:**
   - Import: `import.*SplitText`
   - Registration: `registerPlugin.*SplitText`

3. **Other Plugins:**
   - Search for: `registerPlugin` calls
   - List all plugins being registered

**Plugin Registration Report:**

**Plugins Imported:** {{imported_plugins_list}}
**Plugins Registered:** {{registered_plugins_list}}

<check if="missing_registration">
**⚠️ PLUGINS IMPORTED BUT NOT REGISTERED**

{{unregistered_plugins_list}}

**SEVERITY:** MEDIUM (plugins won't work without registration)

**Fix:**
```javascript
gsap.registerPlugin({{unregistered_plugins}});
```

</check>

<check if="all_registered">
**✅ ALL IMPORTED PLUGINS PROPERLY REGISTERED**

{{registered_plugins_list}}

</check>

<template-output>plugin_registration_report, unregistered_plugins_list</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 6: GENERATE COMPLIANCE REPORT -->
<!-- ============================================================ -->

<step n="6" goal="Tech Director: Generate Compliance Report">
<action>Tech Director compiles comprehensive compliance report</action>

**🔧 "Generating comprehensive GSAP compliance report..."**

**GSAP 3.13+ COMPLIANCE REPORT**

**1. VERSION COMPLIANCE:**
- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** {{version_compliance_status}}
- **Priority:** {{version_upgrade_priority}}

**2. DEPRECATED SYNTAX:**
- **Total Instances:** {{deprecated_count}}
- **Status:** {{deprecated_syntax_status}}
- **Severity:** {{deprecated_severity}}
- **Locations:** {{deprecated_instances_list}}

**3. PREMIUM PLUGIN OPPORTUNITIES:**
- **Total Opportunities:** {{premium_opportunities_count}}
- **Status:** {{premium_opportunities_status}}
- **Details:** {{premium_opportunities_list}}

**4. PLUGIN REGISTRATION:**
- **Imported Plugins:** {{imported_plugins_count}}
- **Registered Plugins:** {{registered_plugins_count}}
- **Status:** {{plugin_registration_status}}
- **Issues:** {{unregistered_plugins_list}}

**5. OVERALL COMPLIANCE:**

<check if="fully_compliant">
**✅ GSAP 3.13+ FULLY COMPLIANT**

- ✅ Version: 3.13.0+
- ✅ No deprecated syntax
- ✅ Plugins properly registered
- ✅ Ready for GSAP Excellence Engine

**Status:** PASS

</check>

<check if="has_issues">
**🔴 COMPLIANCE ISSUES DETECTED**

**Blockers (HIGH Priority - Must Fix):**
{{high_priority_issues}}

**Warnings (MEDIUM Priority - Should Fix):**
{{medium_priority_issues}}

**Recommendations (LOW Priority - Consider):**
{{low_priority_issues}}

**Status:** FAIL

</check>

<action>Save compliance report to file</action>

**Report saved to:** {{default_output_file}}

<template-output>compliance_report_complete</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 7: PROVIDE UPGRADE RECOMMENDATIONS -->
<!-- ============================================================ -->

<step n="7" goal="Tech Director: Provide Upgrade Recommendations">
<action>Tech Director provides prioritized upgrade recommendations</action>

**🔧 "Generating upgrade recommendations..."**

**UPGRADE RECOMMENDATIONS (Prioritized)**

**🔴 HIGH PRIORITY (Blockers):**

<check if="version < 3.13.0">
1. **Upgrade GSAP to 3.13.0+**
   - **Current:** {{gsap_version}}
   - **Target:** ≥3.13.0
   - **Command:** `npm install gsap@latest`
   - **Impact:** Unlocks FREE premium plugins ($99/year savings per plugin!)
</check>

<check if="deprecated_count > 0">
2. **Migrate Deprecated Syntax**
   - **Total Instances:** {{deprecated_count}}
   - **Files Affected:** {{deprecated_files_count}}
   - **Migration Guide:** https://gsap.com/docs/v3/GSAP3/Migrating/
   - **Impact:** Required for GSAP 3.x compatibility
</check>

**⚠️ MEDIUM PRIORITY (Warnings):**

<check if="unregistered_plugins_count > 0">
3. **Register Imported Plugins**
   - **Unregistered Plugins:** {{unregistered_plugins_list}}
   - **Fix:** Add `gsap.registerPlugin({{plugins}})`
   - **Impact:** Plugins won't work without registration
</check>

**💡 LOW PRIORITY (Recommendations):**

<check if="premium_opportunities_count > 0">
4. **Consider Premium Plugin Upgrades (ALL FREE!)**
   - **ScrollSmoother:** {{scrollsmoother_opportunities_count}} opportunities (was $99/year → FREE!)
   - **MorphSVG:** {{morphsvg_opportunities_count}} opportunities (was premium → FREE!)
   - **SplitText:** {{splittext_opportunities_count}} opportunities (was premium → FREE!)
   - **DrawSVG:** {{drawsvg_opportunities_count}} opportunities (was premium → FREE!)
   - **MotionPath:** {{motionpath_opportunities_count}} opportunities (was premium → FREE!)
   - **Impact:** Better animations with premium features (no cost!)
</check>

**Next Steps:**

1. **Address HIGH priority items first** (version upgrade, deprecated syntax)
2. **Fix MEDIUM priority warnings** (plugin registration)
3. **Consider LOW priority recommendations** (premium plugin upgrades)
4. **Re-run validate-modern workflow** to confirm compliance

<ask>Compliance scan complete. Review report? [done]</ask>

<template-output>upgrade_recommendations, next_steps</template-output>
</step>

</workflow>

## Validation Standards

**Compliance Criteria:**

**Version Compliance:**
- ✅ GSAP ≥3.13.0 (premium plugins FREE!)
- ⚠️ GSAP 3.0-3.12 (upgrade recommended)
- 🔴 GSAP <3.0 (major upgrade required)

**Syntax Compliance:**
- ✅ GSAP 3.x syntax (gsap.to, gsap.timeline())
- 🔴 GSAP 2.x syntax (TweenMax, TweenLite, TimelineMax)

**Plugin Compliance:**
- ✅ All imported plugins registered
- ⚠️ Some plugins unregistered
- 🔴 Missing required plugins

## Success Metrics

**Validation Success:**
- ✅ Complete codebase scan performed
- ✅ GSAP version identified
- ✅ All deprecated syntax found (with file:line locations)
- ✅ Premium plugin opportunities identified
- ✅ Plugin registration validated
- ✅ Comprehensive compliance report generated
- ✅ Prioritized upgrade recommendations provided

**Note:** This workflow is READ-ONLY - NO CODE CHANGES made automatically
