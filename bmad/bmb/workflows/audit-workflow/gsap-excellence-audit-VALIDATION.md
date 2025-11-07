# GSAP Excellence Module - VALIDATION Stack Audit Report
## Complete Systematic Analysis (Deep Audit - All 9 Workflows)

**Generated:** 2025-11-07
**Stack:** VALIDATION
**Workflows Audited:** 9
**Auditor:** BMad Builder (audit-workflow v1.0.0)
**BMAD Version:** v6.0.0-alpha.0
**Audit Depth:** COMPLETE (all 7 validation steps per workflow)

---

## Executive Summary

**Overall Stack Health:** 🚨 **CRITICAL - MULTIPLE BLOCKING ISSUES**

### Critical Statistics

**Portability:** 0/9 workflows have web_bundle (🚨 0% portable)
**Execution:** 4/9 workflows use non-standard tags (🚨 44% broken execution)
**Reports:** 3/9 workflows have broken template mapping (🚨 33% broken reports)
**Internationalization:** 0/9 workflows use communication_language (⚠️ 0% i18n support)
**Architecture:** 6/9 workflows mix logic in templates (⚠️ 67% architectural violations)
**Maturity:** 2/9 workflows are non-functional (🚨 22% not implemented)

### Top 5 Critical Findings

1. **🚨 ZERO Web Bundle Coverage** - Entire stack NOT portable (cannot be installed, shared, or distributed)
2. **🚨 Non-Standard Workflow Tags (4 workflows)** - Tags will be IGNORED by workflow.xml execution engine
3. **🚨 Template Variable Mapping Failures (3 workflows)** - Reports will have 20-50+ empty placeholders
4. **🚨 2 Non-Functional Workflows** - ship-ready-check and validate-complete cannot execute as designed
5. **⚠️ Extreme Template Logic Complexity** - research-trends has 16 iteration blocks + 139 variables (maintenance nightmare)

### Workflow Maturity Distribution

**Tier 1 - Production Ready (3/9 - 33%):**
- validate-modern ⚠️ (has template mapping issues but functional)
- validate-60fps ⚠️ (has template logic issues but functional)
- review-quality ⚠️ (has non-standard tags but best architecture)

**Tier 2 - Functional with Issues (4/9 - 44%):**
- setup-gsap-project (template logic mixing)
- research-gsap-pattern (variable naming mismatch)
- accessibility-audit (partial implementation)
- research-trends (extreme template complexity)

**Tier 3 - Non-Functional (2/9 - 22%):**
- validate-complete 🚨 (0 template-output tags, non-standard tags)
- ship-ready-check 🚨 (workflow skeleton only, not implemented)

### Recommended Action

**IMMEDIATE HALT:** Do not use Tier 3 workflows (broken)
**MAJOR REFACTORING REQUIRED:** 40-60 hours estimated
**PRIORITY:** Fix web_bundle (P0), non-standard tags (P0), template mapping (P0)

---

## Audit Methodology

### 7-Step Validation Process (Applied to Each Workflow)

**STEP 1:** Environment Setup - Load workflow.yaml, instructions.md, template.md
**STEP 2:** Standard Config Block Validation - Verify required BMAD variables present
**STEP 3:** YAML/Instruction/Template Alignment - Count and map all variables
**STEP 4:** Config Variable Usage Audit - Check communication_language, user_name usage
**STEP 5:** Web Bundle Validation - Verify portability configuration exists
**STEP 6:** Bloat Detection - Calculate functional vs documentation field ratio
**STEP 7:** Template Variable Mapping - Verify every template variable has source

---

## Individual Workflow Audits (Complete Analysis)

---

### 1. setup-gsap-project

**Workflow Type:** Document (setup guide)
**Agent:** Tech Director
**Lines:** workflow.yaml: 96 | instructions.md: 215 | template.md: 368

#### STEP 2: Standard Config Block ✅ PASS

```yaml
config_source: "{project-root}/bmad/gsap-excellence/config.yaml"
user_name: "{config_source}:user_name"
communication_language: "{config_source}:communication_language"
output_folder: "{config_source}:output_folder"
date: system-generated
```

All required variables present. Extra variable: `module_root` (used for path construction - acceptable).

#### STEP 3: YAML/Instruction/Template Alignment ⚠️ PARTIAL

**YAML Input Variables (5):**
1. ✅ `project_name` - used in template (lines 11, 15, 22, etc.)
2. ✅ `project_type` - used in template + conditionals
3. ✅ `bundler` - used in template + conditionals
4. ✅ `typescript` - used in template + conditionals
5. ✅ `plugins_needed` - used in template + conditionals

**Template-Output Tags in Instructions:** 12 locations
**Template Variables Count:** 40+ variables

**Issue Found:** Template contains XML conditional logic that should be in instructions:

```markdown
<check if="plugins_needed != 'none'">
```bash
{{plugin_install_commands}}
```
</check>
```

**Why This Is Wrong:** Templates should be PURE MARKDOWN with `{{variable}}` placeholders. Conditional logic belongs in instructions.md which generates complete markdown and passes it to template.

**Impact:** Logic scattered between instructions and template, harder to maintain.

#### STEP 4: Config Variable Usage ❌ FAIL

**communication_language:**
- ❌ NOT USED in instructions
- ❌ No language-aware patterns
- Config variable loaded but completely ignored

**user_name:**
- ❌ NOT USED in instructions dialogue
- ✅ Present in template metadata only (line 5)
- No personalization of agent communication

**Example of what's missing:**
```xml
<action>Tech Director communicates in {communication_language} while greeting {user_name}</action>
```

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

**Status:** NO `web_bundle` section found

**Impact:**
- ❌ Cannot be installed via web_bundle
- ❌ Cannot be shared with other projects
- ❌ Cannot be distributed remotely
- ❌ No dependency tracking

**Required Fix:**
```yaml
web_bundle:
  - "{installed_path}/instructions.md"
  - "{installed_path}/template.md"
  - "{config_source}"  # module config
```

#### STEP 6: Bloat Detection ✅ MINIMAL

**YAML Analysis:**
- Total config fields: ~15
- Functional fields: ~15
- Documentation fields: ~0
- **Bloat percentage: 0%** (excellent)

This workflow has minimal yaml overhead - all fields serve execution purposes.

#### STEP 7: Template Variable Mapping ⚠️ ARCHITECTURAL ISSUE

**Template Logic Examples:**

Lines 30-41 (template.md):
```markdown
<check if="plugins_needed != 'none'">
# Premium Plugins
{{plugin_install_commands}}
{{plugin_notes}}
</check>
```

Lines 87-98:
```markdown
<check if="typescript == 'yes'">
## TypeScript Setup
{{typescript_setup}}
</check>
```

**Problem:** XML conditional tags in template violate separation of concerns.

**Should Be:**
- Instructions: Generate complete markdown based on conditions
- Template: Pure markdown with simple `{{variable}}` placeholders

#### Summary: setup-gsap-project

**Issues Found:** 4

**CRITICAL (1):**
1. ❌ No web_bundle section - NOT portable

**IMPORTANT (1):**
2. ⚠️ No communication_language usage - ignores i18n config

**ARCHITECTURAL (1):**
3. ⚠️ Template contains XML conditional logic - should be pure markdown

**CLEANUP (1):**
4. ⚠️ No user_name personalization in dialogue

**Status:** ⚠️ TIER 2 - Functional but needs architectural cleanup

---

### 2. validate-complete

**Workflow Type:** Document (comprehensive validation report)
**Agent:** Tech Director
**Lines:** workflow.yaml: 101 | instructions.md: 446 | template.md: 147

#### STEP 2: Standard Config Block ✅ PASS

Extra variable: `timestamp` (used in output filename - acceptable)

#### STEP 3: YAML/Instruction/Template Alignment ❌ CRITICAL FAIL

**Template-Output Tags in Instructions:** 0 (ZERO!)

**Template Variables Expected:** 50+

**Complete List of Template Variables:**
```
{{date}}, {{animation_description}}, {{page_url}}, {{target_devices}},
{{overall_status}}, {{critical_issues_count}}, {{warnings_count}},
{{passed_checks_count}}, {{high_end_fps}}, {{high_end_status}},
{{mid_range_fps}}, {{mid_range_status}}, {{low_end_fps}},
{{low_end_status}}, {{executive_summary}}, {{performance_summary}},
{{accessibility_compliance}}, {{console_health}}, {{visual_quality}},
... [40+ more variables]
```

**Template-Output Tags in Instructions:** ZERO

**Impact:** Template will render with 50+ empty placeholders - report completely broken.

**Why This Happened:** Workflow focuses on MCP tool calls (Chrome DevTools testing) but never populates template variables via `<template-output>` tags.

**Example of Missing Pattern:**

Instructions say:
```xml
<action>Analyze FPS results and calculate metrics</action>
```

Should be:
```xml
<action>Analyze FPS results and calculate metrics</action>
<template-output>
high_end_fps, high_end_min_fps, high_end_status, high_end_analysis,
mid_range_fps, mid_range_min_fps, mid_range_status, mid_range_analysis,
low_end_fps, low_end_min_fps, low_end_status, low_end_analysis
</template-output>
```

#### STEP 4: Config Variable Usage + Non-Standard Tags ❌ CRITICAL FAIL

**Non-Standard Workflow Tags Used:**

Line 50: `<research-gate enforcement="MANDATORY" blocking="true">`
Line 73: `<checkpoint type="approval-gate" blocking="true">`
Line 74: `<halt>🚨 STOP...</halt>`

**Supported Tags (from workflow.xml):**
- `<action>` ✅
- `<ask>` ✅
- `<check>` ✅
- `<goto>` ✅
- `<invoke-workflow>` ✅
- `<invoke-task>` ✅
- `<template-output>` ✅
- `<elicit-required>` ✅

**Impact:** The workflow.xml execution engine will **COMPLETELY IGNORE** these tags. Research gates and checkpoints will be skipped, allowing workflow to proceed without validation.

**communication_language:** ❌ NOT USED
**user_name:** ❌ NOT USED

**Ask Tag Inconsistency:**

Line 34: `<ask name="variable">` (non-standard attribute)
Other workflows use: `<ask response="variable">` (standard)

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section - workflow NOT portable

#### STEP 6: Bloat Detection ⚠️ 17%

**Bloat Analysis:**

1. `validation: '{installed_path}/checklist.md'` (line 9)
   - File does NOT exist
   - Path unused
   - **BLOAT** - remove

2. `metadata` block (lines 22-28)
   - Not consumed by workflow execution
   - **BORDERLINE BLOAT** - documentation value only

3. `required_mcp` (lines 31-34)
   - Documentation only
   - **BORDERLINE BLOAT**

4. `deep_research_sections` (lines 37-40)
   - Documentation only
   - **BORDERLINE BLOAT**

**Bloat Metrics:**
- Total yaml fields: ~30
- Functional fields: ~15
- Documentation fields: ~10
- Unused/broken fields: ~5
- **Bloat percentage: ~17%**

#### STEP 7: Template Variable Mapping ❌ CRITICAL FAIL

**Template expects:** 50+ granular variables
**Instructions provide:** 0 variables (no template-output tags)

**Template contains Handlebars logic:**

Lines 102-115 (template.md):
```handlebars
{{#if mobile_testing_required}}
### Mobile Device Testing
...
{{/if}}
```

**Problems:**
1. Template has conditional logic (architectural violation)
2. Zero template-output tags means all variables will be empty
3. Report generation will produce broken document

#### Summary: validate-complete

**Issues Found:** 9

**CRITICAL (3):**
1. ❌ Non-standard workflow tags - will be ignored by execution engine
2. ❌ ZERO template-output tags - report will be completely broken (50+ empty variables)
3. ❌ No web_bundle - NOT portable

**IMPORTANT (2):**
4. ⚠️ Inconsistent ask tag attribute (name= vs response=)
5. ⚠️ No communication_language usage

**BLOAT (2):**
6. ⚠️ Unused validation path references non-existent file
7. ⚠️ 17% bloat (metadata/docs not consumed)

**ARCHITECTURAL (1):**
8. ⚠️ Template contains Handlebars conditional logic

**CLEANUP (1):**
9. ⚠️ No user_name personalization

**Status:** 🚨 TIER 3 - NON-FUNCTIONAL (cannot generate reports, tags ignored)

---

### 3. research-gsap-pattern

**Workflow Type:** Document (comprehensive pattern research report)
**Agent:** Cinematographer
**Lines:** workflow.yaml: 98 | instructions.md: 460 | template.md: 368

#### STEP 2: Standard Config Block ✅ PASS

All required variables present.

#### STEP 3: YAML/Instruction/Template Alignment ⚠️ VARIABLE NAMING MISMATCH

**YAML Input Variables (3):**
1. ✅ `pattern_name` - used throughout
2. ✅ `use_case` - used in template
3. ✅ `complexity_preference` - used in template

**Template-Output Tags:** 11 locations (steps 1, 2, 3, 4, 5, 6, 7, 8)

**Template Variables Expected:** 80+

**Critical Mapping Issue:**

**Instructions output (Step 3):**
```xml
<template-output>technical_overview, implementation_approaches, variations, requirements</template-output>
```

**Template expects:**
```markdown
{{gsap_version_minimum}}
{{required_plugins}}
{{browser_support_summary}}
{{bundle_size_impact}}
{{basic_code_example}}
{{intermediate_code_example}}
{{advanced_code_example}}
{{basic_performance}}
{{intermediate_performance}}
{{advanced_performance}}
... [70+ more granular variables]
```

**Gap Analysis:**

Instructions use AGGREGATE names ("technical_overview")
Template expects GRANULAR variables ("gsap_version_minimum", "required_plugins", etc.)

**Question:** How does "technical_overview" expand into 20+ specific variables?

**Impact:** Template may have missing content if mapping not clear to AI executing workflow.

#### STEP 4: Config Variable Usage ❌ FAIL

**communication_language:** ❌ NOT USED
**user_name:** ❌ NOT USED (only in template metadata)

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section

#### STEP 6: Bloat Detection ⚠️ 68%

**YAML Documentation Fields (not consumed by execution):**

Lines 50-64: `inputs` block - documentation only
Lines 66-76: `outputs` block - documentation only
Lines 21-34: `mcp_servers` block - documentation only
Lines 37-38: `agents` block - documentation only
Lines 79-85: `success_criteria` - documentation only
Lines 87-90: `feeds_into` - documentation only
Lines 93-98: `estimated_duration/phases` - documentation only

**Bloat Metrics:**
- Total yaml fields: ~25
- Functional fields: ~8
- Documentation fields: ~17
- **Bloat percentage: ~68%**

**Philosophical Question:** Is this bloat or valuable documentation?

**Arguments FOR keeping:**
- Helps humans understand workflow purpose
- Documents MCP dependencies
- Explains success criteria

**Arguments AGAINST:**
- 68% of yaml not used by execution
- Could be comments instead
- Inflates file size

#### STEP 7: Template Variable Mapping ⚠️ UNCLEAR

**Template Structure Analysis:**

Template expects detailed breakdowns:
- Section: "Implementation Approaches"
  - Approach 1: Basic (10+ variables)
  - Approach 2: Intermediate (10+ variables)
  - Approach 3: Advanced (10+ variables)
- Section: "Code Examples"
  - Example 1 (10+ variables)
  - Example 2 (10+ variables)
  - Example 3 (10+ variables)
- Section: "Best Practices"
  - Performance (6 variables)
  - Code Quality (4 variables)
  - Accessibility (4 variables)

**Total:** 80+ granular variables

**Instructions Provide:** ~20 aggregate variable names

**Mapping Clarity:** ⚠️ UNCLEAR - AI must infer how aggregates map to granular template structure

#### Summary: research-gsap-pattern

**Issues Found:** 5

**CRITICAL (1):**
1. ❌ No web_bundle - NOT portable

**IMPORTANT (2):**
2. ⚠️ No communication_language usage
3. ⚠️ Template variable naming mismatch (aggregate vs granular - 80+ vars vs 20 outputs)

**CLEANUP (2):**
4. ⚠️ No user_name personalization
5. ⚠️ High documentation-to-functional ratio (68%)

**Status:** ⚠️ TIER 2 - Functional but variable mapping unclear

---

### 4. accessibility-audit

**Workflow Type:** Document (WCAG compliance report)
**Agent:** Tech Director
**Lines:** workflow.yaml: 96 | instructions.md: 572 | template.md: 147

#### STEP 2: Standard Config Block ✅ PASS

All required variables present.

#### STEP 3: YAML/Instruction/Template Alignment ⚠️ PARTIAL

**YAML Input Variables (2):**
1. ✅ `page_url` - optional, used in instructions
2. ⚠️ `animation_code` - documented but CODE REVIEW MODE incomplete

**Template-Output Tags:** 6 locations

**Template Variables Expected:** 40+

**Implementation Completeness Issue:**

Instructions have two modes:
1. **LIVE TESTING MODE** (page_url provided) - ✅ FULLY IMPLEMENTED
2. **CODE REVIEW MODE** (animation_code provided) - ⚠️ PARTIALLY IMPLEMENTED

CODE REVIEW MODE instructions (lines 100-129):
```xml
<check if="code_review_mode">
**Code Review: Checking for prefers-reduced-motion implementation**

<action>Search animation code for prefers-reduced-motion handling:</action>

**Pattern to Find:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

**Search for:**
1. `matchMedia` + `prefers-reduced-motion`
2. Conditional logic based on `prefersReducedMotion`
...
</check>
```

**Problem:** Instructions say what to search for but don't actually implement the search or validation logic. LIVE TESTING mode uses actual MCP calls, CODE REVIEW mode is conceptual only.

#### STEP 4: Config Variable Usage ❌ FAIL

**communication_language:** ❌ NOT USED
**user_name:** ❌ NOT USED
**Hardcoded emoji:** "🔧" prefix throughout (should respect communication style)

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section

#### STEP 6: Bloat Detection ⚠️ 68%

Similar documentation bloat pattern as research-gsap-pattern.

**Bloat Metrics:**
- Documentation fields: ~68% of yaml

#### STEP 7: Template Variable Mapping ⚠️ GRANULAR VS AGGREGATE MISMATCH

**Template Expects (Section 6.1):**

```markdown
**Validation:**
- [{{section_6_1_check_1}}] Checks window.matchMedia...
- [{{section_6_1_check_2}}] Provides fallback...
- [{{section_6_1_check_3}}] No complex animations...
- [{{section_6_1_check_4}}] WCAG compliant
```

**Instructions Provide (Step 2):**

```xml
<template-output>section_6_1_verdict, section_6_1_violations_if_any</template-output>
```

**Gap:** Template expects 4 checkbox variables + verdict + violations (6 variables)
Instructions provide 2 aggregate variables

**Same pattern for sections 6.2, 6.3, 6.4**

**Impact:** Checkboxes will be empty, only verdict text will populate.

#### Summary: accessibility-audit

**Issues Found:** 6

**CRITICAL (1):**
1. ❌ No web_bundle - NOT portable

**IMPORTANT (3):**
2. ⚠️ No communication_language usage
3. ⚠️ Template variable naming mismatch (granular checkboxes vs aggregate verdict)
4. ⚠️ CODE REVIEW MODE incomplete implementation

**CLEANUP (2):**
5. ⚠️ No user_name personalization
6. ⚠️ Hardcoded emoji prefix "🔧"

**BLOAT (1):**
7. ⚠️ 68% documentation fields

**Status:** ⚠️ TIER 2 - Functional for LIVE TESTING, partial for CODE REVIEW

---

### 5. validate-modern

**Workflow Type:** Document (GSAP 3.13+ compliance report)
**Agent:** Tech Director
**Lines:** workflow.yaml: 95 | instructions.md: 513 | template.md: 116

#### STEP 2: Standard Config Block ✅ PASS

All required variables present.

#### STEP 3: YAML/Instruction/Template Alignment ❌ SIGNIFICANT GAPS

**YAML Input Variables (3):**
1. ✅ `codebase_root` - used in instructions
2. ⚠️ `file_extensions` - documented default but instructions hardcode "*.js, *.jsx, *.ts, *.tsx"
3. ⚠️ `exclude_directories` - documented default but instructions hardcode "node_modules, dist, build, .next"

**Template-Output Tags:** 7 locations

**Template Variables Expected:** 36

**COMPLETE VARIABLE MAPPING ANALYSIS:**

**STEP 1:** scan_configuration
- Template needs: `{{codebase_root}}`
- Instructions output: `scan_configuration`
- Status: ⚠️ UNCLEAR if codebase_root included

**STEP 2:** Version Check
- Template needs: `{{gsap_version}}`, `{{version_compliance_status}}`, `{{version_pass_fail}}`, `{{version_details}}`
- Instructions output: `gsap_version, version_compliance_status, upgrade_priority`
- Status: ⚠️ PARTIAL - missing `version_pass_fail`, `version_details`. Has `upgrade_priority` (not in template)

**STEP 3:** Deprecated Syntax
- Template needs: `{{deprecated_count}}`, `{{tweenmax_count}}`, `{{tweenlite_count}}`, `{{timeline_count}}`, `{{old_import_count}}`, `{{cssplugin_count}}`, `{{deprecated_syntax_status}}`, `{{deprecated_instances_list}}`
- Instructions output: `deprecated_syntax_report, deprecated_instances_list, deprecated_count`
- Status: 🚨 **CRITICAL** - missing 5 granular counts (tweenmax_count, tweenlite_count, timeline_count, old_import_count, cssplugin_count) + status

**STEP 4:** Premium Plugins
- Template needs: `{{premium_opportunities_count}}`, `{{scrollsmoother_opportunities}}`, `{{morphsvg_opportunities}}`, `{{splittext_opportunities}}`, `{{drawsvg_opportunities}}`, `{{motionpath_opportunities}}`, `{{premium_opportunities_list}}`, `{{total_savings_if_paid}}`
- Instructions output: `premium_opportunities_report, premium_opportunities_list`
- Status: 🚨 **CRITICAL** - missing 6 granular counts + savings calculation

**STEP 5:** Plugin Registration
- Template needs: `{{imported_plugins_list}}`, `{{registered_plugins_list}}`, `{{unregistered_plugins_list}}`, `{{plugin_registration_status}}`
- Instructions output: `plugin_registration_report, unregistered_plugins_list`
- Status: 🚨 **CRITICAL** - missing `imported_plugins_list`, `registered_plugins_list`, `plugin_registration_status`

**STEP 6:** Compliance Report
- Template needs: `{{overall_compliance_status}}`, `{{compliance_summary_table}}`, `{{high/medium/low_priority_recommendations}}`
- Instructions output: `compliance_report_complete`
- Status: ⚠️ UNCLEAR - assumes all packaged

**STEP 7:** Recommendations
- Template needs: `{{next_step_1}}`, `{{next_step_2}}`, `{{next_step_3}}`
- Instructions output: `upgrade_recommendations, next_steps`
- Status: ⚠️ UNCLEAR - assumes next_steps contains numbered steps

**Summary of Gaps:**
- 36 template variables expected
- ~15 template-output variables provided
- **15-20 variables MISSING or UNCLEAR**
- Template will have MANY empty placeholders

**Evidence from Template (lines 39-45):**

```markdown
**Breakdown:**
- TweenMax: {{tweenmax_count}} instances
- TweenLite: {{tweenlite_count}} instances
- TimelineMax/TimelineLite: {{timeline_count}} instances
- Old Imports: {{old_import_count}} instances
- CSSPlugin: {{cssplugin_count}} instances
```

**Evidence from Instructions (line 203):**

```xml
<template-output>deprecated_syntax_report, deprecated_instances_list, deprecated_count</template-output>
```

**Gap:** 5 granular count variables not provided.

#### STEP 4: Config Variable Usage ❌ FAIL

**communication_language:** ❌ NOT USED
**user_name:** ❌ NOT USED

**Input Variables Not Used:**
- `file_extensions` - documented in yaml but instructions hardcode patterns
- `exclude_directories` - documented in yaml but instructions hardcode patterns

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section

#### STEP 6: Bloat Detection ⚠️ 60%

**Documentation Fields:**
- mcp_servers: {} (line 21)
- agents (lines 23-25)
- inputs (lines 37-51) - not used by instructions
- outputs (lines 53-72)
- success_criteria (lines 74-81)
- feeds_into (lines 83-86)
- phases (lines 89-94)

**Bloat percentage: ~60%**

#### STEP 7: Template Variable Mapping 🚨 CRITICAL FAIL

**15-20 missing template variables** will result in empty placeholders throughout report.

**Specific Examples:**

Template line 40: `- TweenMax: {{tweenmax_count}} instances`
→ Will render as: `- TweenMax: instances` (empty)

Template line 55: `- **ScrollSmoother:** {{scrollsmoother_opportunities}} (was $99/year → FREE!)`
→ Will render as: `- **ScrollSmoother:** (was $99/year → FREE!)` (empty)

#### Summary: validate-modern

**Issues Found:** 7

**CRITICAL (2):**
1. ❌ No web_bundle - NOT portable
2. 🚨 **15-20 missing template variables** - report will have many empty placeholders

**IMPORTANT (2):**
3. ⚠️ No communication_language usage
4. ⚠️ Template expects granular variables, instructions provide aggregates

**CLEANUP (2):**
5. ⚠️ No user_name personalization
6. ⚠️ Documented input variables not used (hardcoded instead)

**BLOAT (1):**
7. ⚠️ 60% documentation fields

**Status:** ⚠️ TIER 1 (functional) but ❌ with SIGNIFICANT template mapping issues

---

### 6. ship-ready-check

**Workflow Type:** Document (production readiness checklist)
**Agent:** Tech Director
**Lines:** workflow.yaml: 74 | instructions.md: 166 | template.md: 164

#### STEP 2: Standard Config Block ✅ PASS

All required variables present.

#### STEP 3: YAML/Instruction/Template Alignment 🚨 SKELETON ONLY

**Critical Finding:** This is NOT an executable workflow - it's a SPECIFICATION DOCUMENT

**Evidence:**

**Line Count Comparison:**
- ship-ready-check: 166 lines
- validate-complete: 446 lines (comparable workflow)
- validate-60fps: 372 lines (comparable workflow)
- **ship-ready-check is 37% the size of comparable workflows**

**Workflow Tag Analysis:**

```bash
grep -c "<action>" instructions.md → 0
grep -c "<template-output>" instructions.md → 0
grep -c "<ask>" instructions.md → 2 (only in Step 1)
```

**Step 3 Analysis (lines 81-145 - MAIN WORKFLOW LOGIC):**

```markdown
## Step 3: 6-Part Production Checklist

### Category 1: Performance ✅ / ❌

- [ ] 60fps on target devices
- [ ] Paint time <16ms
- [ ] JS execution <5ms
- [ ] No memory leaks

**Status:** {{performance_status}}

---

### Category 2: Visual Quality ✅ / ❌

- [ ] No visual glitches
- [ ] Responsive behavior
- [ ] Cross-browser tested

**Status:** {{visual_status}}

---

[... continues with markdown checkboxes only ...]
```

**Analysis:** This is just markdown checkboxes + variable placeholders. NO workflow execution tags.

**Step 4 Analysis (lines 146-155):**

```markdown
## Step 4: Generate Ship-Ready Report

Use template.md to generate final production readiness report.

**Report Status:**
- **APPROVED:** All 6 categories PASS - ready for production
- **BLOCKED:** Any category FAIL - must fix before deployment
- **CONDITIONAL:** Minor issues - can deploy with caveats
```

**Analysis:** Instructions say "use template.md" but provide NO implementation of how to populate it.

**What's Missing:**

1. NO `<action>` tags for executing checks
2. NO `<template-output>` tags for populating variables
3. NO MCP tool calls (even though yaml says chrome-devtools optional)
4. NO validation logic
5. NO conditional branches based on results

**What This Is:**

A **DESIGN SPECIFICATION** showing:
- What checks should be performed (6 categories)
- What the report should contain
- What the workflow structure should be

**What This Is NOT:**

An **EXECUTABLE WORKFLOW** that:
- Actually performs the checks
- Populates template variables
- Generates the report

#### STEP 4: Config Variable Usage + Non-Standard Tags ❌ FAIL

**Non-Standard Tags:**

Line 44: `<research-gate enforcement="MANDATORY" blocking="true">`
Line 73: `<checkpoint type="approval-gate" blocking="true">`
Line 74: `<halt>🚨 STOP...</halt>`

These will be IGNORED by workflow.xml.

**communication_language:** ❌ NOT USED
**user_name:** ❌ NOT USED

**Ask Tag Inconsistency:**

Line 27: `<ask name="animation_description">` (non-standard)
Should be: `<ask response="animation_description">`

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section

#### STEP 6: Bloat Detection ⚠️ 70%

**YAML Analysis:**

Lines 41-73: `readiness_categories` block (extensive documentation)
Lines 22-28: `metadata` block
Lines 30-32: `required_mcp` block
Lines 35-38: `deep_research_sections`

**Bloat percentage: ~70%**

#### STEP 7: Template Variable Mapping ❌ CRITICAL FAIL

**Template Variables Expected:** 50+

**Template-Output Tags Provided:** 0 (ZERO)

**Impact:** Workflow cannot populate template - report generation will fail completely.

#### Summary: ship-ready-check

**Issues Found:** 9

**CRITICAL (4):**
1. 🚨 **Workflow is SPECIFICATION only** - not executable (NO action tags, NO template-output tags, NO implementation)
2. ❌ Non-standard workflow tags will be ignored
3. ❌ ZERO template-output tags for 50+ template variables
4. ❌ No web_bundle - NOT portable

**IMPORTANT (3):**
5. ⚠️ Inconsistent ask tag attribute
6. ⚠️ No communication_language usage
7. ⚠️ Instructions 63% smaller than comparable workflows

**BLOAT (1):**
8. ⚠️ 70% documentation fields

**ARCHITECTURAL (1):**
9. ⚠️ Template contains Handlebars logic

**Status:** 🚨 TIER 3 - NON-FUNCTIONAL (specification document, not executable workflow)

---

### 7. validate-60fps

**Workflow Type:** Document (performance validation report)
**Agent:** Tech Director
**Lines:** workflow.yaml: 72 | instructions.md: 372 | template.md: 289

#### STEP 2: Standard Config Block ✅ PASS

All required variables present.

#### STEP 3: YAML/Instruction/Template Alignment ✅ GOOD

**YAML Input Variables (3):**
1. ✅ `page_url` - required, used throughout
2. ✅ `animation_selectors` - required, used throughout
3. ✅ `test_duration_seconds` - optional, default provided, used

**Template-Output Tags:** 9 locations (well distributed across steps)

**Template Variables Expected:** 48

**Variable Mapping Quality:** ✅ GOOD - instructions provide most variables needed

**Examples:**

Step 3:
```xml
<template-output>test_1x_fps_average, test_1x_fps_min, test_1x_result</template-output>
```

Template uses:
```markdown
- **Average FPS:** {{test_1x_fps_average}}
- **Minimum FPS:** {{test_1x_fps_min}}
- **Status:** {{test_1x_result}}
```

Mapping: ✅ Direct 1:1 correspondence

#### STEP 4: Config Variable Usage ❌ FAIL

**communication_language:** ❌ NOT USED
**user_name:** ❌ NOT USED

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section

#### STEP 6: Bloat Detection ⚠️ 65%

**Documentation Fields:**
- benchmarks (lines 64-71) - reference values (acceptable)
- estimated_duration (line 62)
- Other metadata

**Bloat percentage: ~65%**

#### STEP 7: Template Variable Mapping ⚠️ HANDLEBARS LOGIC

**Handlebars Conditional Blocks Found:** 7 instances

Lines 15-21 (template.md):
```handlebars
{{#if_passed}}
✅ **PRODUCTION READY** - Animation meets 60fps performance requirements
{{/if_passed}}

{{#if_failed}}
❌ **BLOCKING ISSUE** - Animation NOT production-ready (failed mandatory 4x CPU test)
{{/if_failed}}
```

Lines 76-78:
```handlebars
{{#if test_4x_failed}}
⚠️ **BLOCKING ISSUE:** Animation failed mandatory mid-range device test...
{{/if}}
```

Lines 146-208 (entire section):
```handlebars
{{#if_failed}}

### Critical Optimizations Required
...
[~50 lines of content]
...
{{/if_failed}}
```

Lines 210-223:
```handlebars
{{#if_passed}}

### Performance Summary
...
{{/if_passed}}
```

Lines 229-239 and 241-254: More conditional blocks for next actions

**Total Handlebars Logic:** 7 conditional blocks controlling ~100+ lines of content

**Architectural Problem:** Template should be pure markdown. All conditional logic should be in instructions, which generate complete markdown and pass to template.

**Current Pattern (WRONG):**
```
Instructions → Generate partial data → Template decides what to show
```

**Should Be:**
```
Instructions → Decide what to show + generate complete markdown → Template inserts
```

#### Summary: validate-60fps

**Issues Found:** 5

**CRITICAL (1):**
1. ❌ No web_bundle - NOT portable

**IMPORTANT (1):**
2. ⚠️ No communication_language usage

**ARCHITECTURAL (1):**
3. ⚠️ Template contains 7 Handlebars conditional blocks (logic should be in instructions)

**CLEANUP (1):**
4. ⚠️ No user_name personalization

**BLOAT (1):**
5. ⚠️ 65% documentation fields

**Status:** ⚠️ TIER 1 - Functionally GOOD, but architectural issues with template logic

---

### 8. research-trends

**Workflow Type:** Document (2024-2025 trends research report)
**Agent:** Cinematographer
**Lines:** workflow.yaml: 42 | instructions.md: 398 | template.md: 454

#### STEP 2: Standard Config Block ✅ PASS

All required variables present. Extra: `timestamp` (used in output filename - acceptable)

#### STEP 3: YAML/Instruction/Template Alignment ⚠️ EXTREME COMPLEXITY

**YAML Input Variables:** Minimal (trend_focus, context - both optional)

**Template-Output Tags:** 3 locations (sparse for complexity level)

**Template Variables Expected:** 139 unique variables

**Handlebars Iteration Blocks:** 16 (HIGHEST IN STACK)

**Complete Iteration Analysis:**

Lines 52-74: `{{#each_scroll_trend}}...{{/each_scroll_trend}}`
Lines 80-100: `{{#each_text_trend}}...{{/each_text_trend}}`
Lines 106-126: `{{#each_3d_trend}}...{{/each_3d_trend}}`
Lines 132-149: `{{#each_micro_trend}}...{{/each_micro_trend}}`
Lines 155-168: `{{#each_transition_trend}}...{{/each_transition_trend}}`
Lines 174-187: `{{#each_physics_trend}}...{{/each_physics_trend}}`
Lines 193-206: `{{#each_svg_trend}}...{{/each_svg_trend}}`
Lines 212-222: `{{#each_performance_trend}}...{{/each_performance_trend}}`
Lines 333-335: `{{#each_innovative_trend}}...{{/each_innovative_trend}}`
Lines 338-340: `{{#each_refined_trend}}...{{/each_refined_trend}}`
Lines 343-345: `{{#each_rehashed_trend}}...{{/each_rehashed_trend}}`
Lines 348-350: `{{#each_standard_pattern}}...{{/each_standard_pattern}}`
Lines 357-362: `{{#each_adopt_now}}...{{/each_adopt_now}}`
Lines 365-370: `{{#each_watch}}...{{/each_watch}}`
Lines 373-377: `{{#each_avoid}}...{{/each_avoid}}`
Lines 380-385: `{{#each_experimental}}...{{/each_experimental}}`

**Example Block (lines 52-74):**

```handlebars
{{#each_scroll_trend}}
#### {{trend_name}}
- **Description:** {{what_it_is}}
- **Adoption:** {{widespread_growing_emerging_niche_declining}}
- **Innovation:** {{truly_innovative_refined_rehashed_standard}}
- **Practicality:** {{production_ready_experimental}}
- **Browser Support:** {{modern_universal}}
- **Performance:** {{lightweight_moderate_heavy}}
- **Examples:**
  - [{{example_1_name}}]({{example_1_url}}) - {{example_1_agency}}
  - [{{example_2_name}}]({{example_2_url}}) - {{example_2_agency}}

**Technical Approach:**
```javascript
{{code_snippet_or_approach}}
```

**Why It's Trending:**
{{why_trending}}

**When to Use:**
{{use_cases}}
{{/each_scroll_trend}}
```

**Architectural Analysis:**

This template expects:
1. **Arrays of objects** (scroll_trends[], text_trends[], etc.)
2. **Iteration over arrays** (for each item in array)
3. **Nested variable access** (trend.name, trend.adoption, etc.)
4. **Code block injection** (JavaScript snippets)

This is **APPLICATION-LEVEL LOGIC** in the **PRESENTATION LAYER**.

**Template Language Capabilities Required:**
- Array iteration
- Object property access
- Nested variable scoping
- Code block handling

**Questions:**
1. Does workflow.xml's template engine support Handlebars {{#each}}?
2. How do instructions pass array data structures?
3. How is nested object access resolved?

**If Handlebars NOT supported:** Template will render all `{{#each}}` blocks as literal text - broken report.

#### STEP 4: Config Variable Usage + Non-Standard Tags ❌ FAIL

**Non-Standard Tags:**

Line 50: `<research-gate enforcement="MANDATORY" blocking="true">`
Line 192: `<checkpoint type="approval-gate" blocking="true">`
Line 222: `<halt>🚨 STOP...</halt>`

**communication_language:** Present in yaml but ❌ NOT USED in instructions
**user_name:** Present in yaml but ❌ NOT USED in dialogue (line 222 references but doesn't use variable)

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section

#### STEP 6: Bloat Detection ⚠️ 60%

**Documentation Fields:**
- metadata (lines 22-28)
- required_mcp (lines 31-33)
- deep_research_sections: [] (line 36)
- archon_sources (lines 39-41)

**Bloat percentage: ~60%**

#### STEP 7: Template Variable Mapping 🚨 ARCHITECTURAL NIGHTMARE

**139 template variables** organized in **16 iteration structures**

**Instructions Provide (Step 2, line 232-242):**

```xml
<template-output>
websearch_trends_discovered,
websearch_awwwards_winners,
websearch_scroll_innovations,
websearch_industry_standards,
archon_established_patterns,
archon_pattern_evolution,
new_vs_established_analysis,
trend_synthesis,
research_citations
</template-output>
```

**Gap Analysis:**

Instructions provide 9 aggregate variable names.
Template expects 139 specific variables organized in 16 arrays.

**How does `websearch_scroll_innovations` expand to:**
```
scroll_trends = [
  {
    trend_name: "...",
    what_it_is: "...",
    adoption: "...",
    innovation: "...",
    practicality: "...",
    browser_support: "...",
    performance: "...",
    example_1_name: "...",
    example_1_url: "...",
    example_1_agency: "...",
    example_2_name: "...",
    example_2_url: "...",
    example_2_agency: "...",
    code_snippet_or_approach: "...",
    why_trending: "...",
    use_cases: "..."
  },
  ... // repeat for each scroll trend
]
```

**Question:** Does workflow.xml support passing structured data (arrays of objects)?

#### Summary: research-trends

**Issues Found:** 7

**CRITICAL (2):**
1. ❌ No web_bundle - NOT portable
2. ❌ Non-standard workflow tags will be ignored

**ARCHITECTURAL (2):**
3. 🚨 **16 Handlebars iteration blocks** - EXTREME template logic complexity (HIGHEST IN STACK)
4. 🚨 **139 template variables** - requires structured data passing (arrays of objects)

**IMPORTANT (1):**
5. ⚠️ No communication_language usage in instructions

**CLEANUP (1):**
6. ⚠️ No user_name personalization in greeting

**BLOAT (1):**
7. ⚠️ 60% documentation fields

**Status:** ⚠️ TIER 2 - Functional IF workflow.xml supports Handlebars iteration, otherwise BROKEN

**Critical Question:** Does workflow.xml's template engine support `{{#each}}` syntax and structured data?

---

### 9. review-quality

**Workflow Type:** Document (animation quality assessment)
**Agent:** Director
**Lines:** workflow.yaml: 16 | instructions.md: 324 | template.md: 118

#### STEP 2: Standard Config Block ✅ PASS

Minimal yaml - cleanest in stack (only 16 lines!)

#### STEP 3: YAML/Instruction/Template Alignment ✅ BEST IN STACK

**YAML Variables:** Minimal (only required config)

**Template-Output Tags:** 4 locations (appropriate for complexity)

**Template Variables Expected:** 27

**Handlebars Logic Check:** ❌ NONE FOUND

Template is **PURE MARKDOWN** with simple `{{variable}}` placeholders:

```markdown
**Date:** {{date}}
**Animation Type:** {{animation_type}}

**Overall Quality Tier:** {{quality_tier_current}}

**Key Strengths:**
{{executive_summary_strengths}}

**Key Opportunities:**
{{executive_summary_opportunities}}
```

**This is the CORRECT architectural pattern** - template has NO logic, just placeholder variables.

#### STEP 4: Config Variable Usage + Non-Standard Tags ⚠️ PARTIAL

**Non-Standard Tags:**

Line 34: `<research-gate enforcement="MANDATORY" blocking="true">`
Line 171: `<checkpoint type="approval-gate" blocking="true">`
Line 193: `<halt>🚨 STOP...</halt>`

These will be ignored by workflow.xml.

**communication_language:** ❌ NOT USED
**user_name:** Referenced in halt message (line 193) but not used as variable:

```xml
<halt>🚨 STOP. Wait for {user_name} to respond...</halt>
```

This is correct usage! (Uses variable syntax)

**CORRECTION:** user_name IS used (in halt message). Only communication_language missing.

#### STEP 5: Web Bundle Validation ❌ CRITICAL FAIL

NO `web_bundle` section

#### STEP 6: Bloat Detection ✅ MINIMAL

**YAML Analysis:**

Only 16 lines total - shortest yaml in stack!

No documentation bloat - just required config.

**Bloat percentage: 0%**

#### STEP 7: Template Variable Mapping ⚠️ MINOR NAMING ISSUES

**Template Variables (27):**

Listed in template order:
1. date ✅
2. animation_type ✅
3. animation_description ✅
4. current_implementation ✅
5. specific_concerns ✅
6. quality_tier_current ✅
7. executive_summary_strengths ⚠️
8. executive_summary_opportunities ⚠️
9. wow_factor_assessment ✅
10. archon_premium_patterns_summary ⚠️
11. ambition_level_assessment ✅
12. vision_match_assessment ✅
13. ai_detection_assessment ✅
14. ai_detection_red_flags ⚠️
15. ai_detection_green_flags ⚠️
16. kb_benchmark_assessment ✅
17. archon_tier1_patterns ⚠️
18. archon_premium_patterns ✅
19. deep_research_assessment ✅
20. websearch_2025_examples ✅
21. improvement_recommendations_high ⚠️
22. improvement_recommendations_medium ⚠️
23. improvement_recommendations_low ⚠️
24. code_examples ✅
25. research_citations_archon ⚠️
26. research_citations_deep_research ⚠️
27. research_citations_websearch ⚠️

**Template-Output Analysis:**

Step 1:
```xml
<template-output>animation_description, current_implementation, animation_type, specific_concerns</template-output>
```
Maps to variables: 1-5 ✅

Step 2:
```xml
<template-output>
archon_premium_patterns,
deep_research_assessment,
websearch_2025_examples,
quality_tier_current,
gap_analysis,
research_citations
</template-output>
```

**Gap:** Template expects granular citations:
- research_citations_archon
- research_citations_deep_research
- research_citations_websearch

Instructions provide aggregate:
- research_citations

**Assumption:** `research_citations` should expand to 3 separate citation lists. Unclear if this happens automatically.

Step 3:
```xml
<template-output>
wow_factor_assessment,
ambition_level_assessment,
vision_match_assessment,
ai_detection_assessment,
kb_benchmark_assessment
</template-output>
```

**Gap:** Template expects granular ai_detection details:
- ai_detection_red_flags
- ai_detection_green_flags

Instructions provide aggregate:
- ai_detection_assessment

**Similar gap:**
- archon_premium_patterns vs archon_premium_patterns_summary
- archon_premium_patterns vs archon_tier1_patterns

Step 4:
```xml
<template-output>
executive_summary,
criteria_assessments,
improvement_recommendations,
code_examples,
final_citations
</template-output>
```

**Gap:** Template expects granular recommendations:
- improvement_recommendations_high
- improvement_recommendations_medium
- improvement_recommendations_low

Instructions provide aggregate:
- improvement_recommendations

**Summary:** ~7 aggregate-to-granular naming mismatches. Minor compared to other workflows.

#### Summary: review-quality

**Issues Found:** 4

**CRITICAL (2):**
1. ❌ Non-standard workflow tags will be ignored
2. ❌ No web_bundle - NOT portable

**IMPORTANT (1):**
3. ⚠️ No communication_language usage

**CLARITY (1):**
4. ⚠️ 7 aggregate-to-granular variable naming mismatches (minor)

**ARCHITECTURAL:** ✅ BEST IN STACK - pure markdown template, NO Handlebars logic!

**Status:** ⚠️ TIER 1 - Functionally GOOD, cleanest architecture, model for others to follow

---

## Stack-Wide Architectural Analysis

### Critical Pattern 1: Web Bundle Absence (9/9 workflows = 100%)

**Impact Assessment:**

**What Web Bundle Does:**
- Enables remote installation: `bmad install <url>/workflow`
- Packages all dependencies: instructions, template, checklist, config
- Enables version control: workflows can be updated centrally
- Enables distribution: workflows can be shared across projects

**Current State:**
- 0/9 workflows have web_bundle configuration
- Stack is LOCAL ONLY
- Cannot be:
  - Installed in other projects
  - Shared with other users
  - Updated centrally
  - Dependency-tracked

**Required Fix (per workflow):**

```yaml
web_bundle:
  - "{installed_path}/instructions.md"
  - "{installed_path}/template.md"
  - "{installed_path}/checklist.md"  # if exists
  - "{config_source}"  # module config
```

**Effort:** 15 minutes per workflow
**Total:** 2.25 hours for all 9 workflows

**Priority:** 🚨 P0 - BLOCKING deployment

---

### Critical Pattern 2: Non-Standard Workflow Tags (4/9 workflows = 44%)

**Affected Workflows:**
1. validate-complete
2. ship-ready-check
3. research-trends
4. review-quality

**Non-Standard Tags Used:**

`<research-gate enforcement="MANDATORY" blocking="true">` - 4 instances
`<checkpoint type="approval-gate" blocking="true">` - 4 instances
`<halt>🚨 STOP...</halt>` - 4 instances

**Supported Tags (from workflow.xml specification):**

```xml
<action> - Execute an action
<ask> - Prompt user for input
<check if="condition"> - Conditional execution
<goto step="n"> - Jump to step
<invoke-workflow> - Call another workflow
<invoke-task> - Call a task
<template-output> - Populate template variables
<elicit-required> - Require user input
```

**Why This Is Critical:**

The workflow.xml execution engine will **SKIP** any tags it doesn't recognize. This means:

1. Research gates will be IGNORED - workflow proceeds without research
2. Checkpoints will be IGNORED - workflow doesn't wait for approval
3. Halt commands will be IGNORED - workflow continues automatically

**Evidence from workflow.xml:**

The engine parses known tags only. Unknown tags are treated as comments.

**Example Impact (research-trends):**

```xml
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>You MUST execute complete research protocol...</mandate>
  <!-- 150 lines of research instructions -->
</research-gate>
```

**What happens:** Entire research-gate block is skipped, workflow jumps to next recognized tag.

**Required Refactoring Pattern:**

**BEFORE (non-standard):**
```xml
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Research required</mandate>
  <!-- research steps -->
  <checkpoint type="approval-gate" blocking="true">
    <halt>STOP. Wait for approval.</halt>
  </checkpoint>
</research-gate>
```

**AFTER (standard tags only):**
```xml
<action>Explain that research is mandatory before proceeding</action>

<action>Execute research step 1: ...</action>
<action>Execute research step 2: ...</action>
<action>Execute research step 3: ...</action>

<ask response="research_complete">Research complete. Review findings above. Type 'continue' to proceed or 'redo' to research again.</ask>

<check if="research_complete != 'continue'">
  <goto step="2"/> <!-- Back to research -->
</check>

<action>Proceeding with workflow...</action>
```

**Effort:** 3-5 hours per workflow
**Total:** 12-20 hours for 4 workflows

**Priority:** 🚨 P0 - BLOCKING correct execution

---

### Critical Pattern 3: Template Variable Mapping Failures (3/9 workflows = 33%)

**Severity Breakdown:**

**CRITICAL (2 workflows):**
- validate-complete: 0 template-output tags for 50+ variables (0% populated)
- ship-ready-check: 0 template-output tags for 50+ variables (0% populated)

**SIGNIFICANT (1 workflow):**
- validate-modern: 15-20 missing variables (40-50% missing)

**Impact Examples:**

**validate-modern template (lines 39-45):**
```markdown
**Breakdown:**
- TweenMax: {{tweenmax_count}} instances
- TweenLite: {{tweenlite_count}} instances
- TimelineMax/TimelineLite: {{timeline_count}} instances
- Old Imports: {{old_import_count}} instances
- CSSPlugin: {{cssplugin_count}} instances
```

**Will render as:**
```markdown
**Breakdown:**
- TweenMax: instances
- TweenLite: instances
- TimelineMax/TimelineLite: instances
- Old Imports: instances
- CSSPlugin: instances
```

**Root Cause:**

Instructions use aggregate variable names:
```xml
<template-output>deprecated_syntax_report, deprecated_instances_list, deprecated_count</template-output>
```

Template expects granular variables:
```markdown
{{tweenmax_count}}, {{tweenlite_count}}, {{timeline_count}}, {{old_import_count}}, {{cssplugin_count}}
```

**Required Fix Pattern:**

**Option A: Explicit Granular Output**
```xml
<action>Analyze deprecated syntax results</action>
<template-output>
tweenmax_count,
tweenlite_count,
timeline_count,
old_import_count,
cssplugin_count,
deprecated_syntax_status,
deprecated_instances_list,
deprecated_count
</template-output>
```

**Option B: Aggregate Template Variables**

Change template to use aggregates:
```markdown
**Deprecated Syntax Report:**
{{deprecated_syntax_report}}
```

And instructions generate complete markdown:
```xml
<action>
Generate deprecated_syntax_report as complete markdown:
"**Breakdown:**
- TweenMax: 5 instances
- TweenLite: 3 instances
- TimelineMax/TimelineLite: 2 instances
..."
</action>
<template-output>deprecated_syntax_report</template-output>
```

**Recommended:** Option A (explicit granular) - gives template more control over formatting.

**Effort:** 4-8 hours per workflow
**Total:** 12-24 hours for 3 workflows

**Priority:** 🚨 P0 - BLOCKING report generation

---

### Important Pattern 4: Communication Language Unused (9/9 workflows = 100%)

**Current State:**

All workflows load `{communication_language}` from config but NEVER use it.

**Example from config.yaml:**
```yaml
communication_language: "English"
```

**What's Missing:**

Instructions should adapt agent dialogue based on language setting:

```xml
<action>Tech Director greets user in {communication_language}</action>
```

Or at minimum:
```xml
<action>Communicate in {communication_language} throughout this workflow</action>
```

**Why This Matters:**

Users may set `communication_language: "Spanish"` expecting Spanish output, but get English anyway because workflows ignore the setting.

**Required Fix:**

Add language directive to Step 1 of each workflow:

```xml
<step n="1" goal="...">
<action>Communicate in {communication_language} for all agent dialogue and generated content</action>
...
</step>
```

**Effort:** 10 minutes per workflow
**Total:** 1.5 hours for all 9 workflows

**Priority:** ⚠️ P1 - IMPORTANT (internationalization)

---

### Important Pattern 5: Template Logic Mixing (6/9 workflows = 67%)

**Affected Workflows & Severity:**

**EXTREME:**
- research-trends: 16 Handlebars iteration blocks (`{{#each}}`)

**SIGNIFICANT:**
- validate-60fps: 7 Handlebars conditional blocks (`{{#if}}`)
- validate-complete: 3 Handlebars conditional blocks
- ship-ready-check: 3 Handlebars conditional blocks

**MODERATE:**
- setup-gsap-project: XML conditional tags (`<check if="...">`)
- accessibility-audit: Variable naming implies conditionals

**NOT AFFECTED (BEST PRACTICES):**
- review-quality ✅ - pure markdown template
- validate-modern ✅ - pure markdown template
- research-gsap-pattern ✅ - pure markdown template

**Architectural Violation:**

**Separation of Concerns Principle:**
- **Instructions.md:** Workflow logic, conditionals, data generation
- **Template.md:** Presentation layer, pure markdown with `{{variable}}` placeholders

**Current Pattern (WRONG):**
```
Instructions → Generate data → Template → Decide what to show
```

**Should Be:**
```
Instructions → Decide what to show + generate complete content → Template → Insert content
```

**Example from validate-60fps (WRONG):**

Template (lines 146-208):
```handlebars
{{#if_failed}}

### Critical Optimizations Required

Based on test failures, apply these optimizations:

{{optimization_recommendations}}

### Common Performance Fixes

**If Scripting Time High (>8ms/frame):**
```javascript
// ❌ WRONG - Heavy computation
...
```

... [50+ lines of optimization advice]

{{/if_failed}}
```

**Should Be:**

Template (simple):
```markdown
{{test_results_section}}
{{optimization_section}}
{{next_actions_section}}
```

Instructions (generates complete sections):
```xml
<action>Generate test_results_section based on pass/fail status</action>

<check if="test_failed">
  <action>Generate optimization_section with:
    - Critical optimizations required header
    - Specific recommendations based on failure type
    - Common performance fixes
    - Code examples (before/after)
    - All 50+ lines of optimization advice
  </action>
</check>

<check if="test_passed">
  <action>Generate optimization_section with:
    - Performance summary header
    - Confirmation of passing all tests
    - No action needed message
  </action>
</check>

<template-output>test_results_section, optimization_section, next_actions_section</template-output>
```

**Why This Matters:**

1. **Maintainability:** Logic scattered between instructions and template is hard to track
2. **Testability:** Can't test template logic in isolation
3. **Clarity:** Template should be readable by non-programmers
4. **Separation:** Clean architectural boundaries

**Special Case: research-trends**

This workflow has **16 iteration blocks** expecting arrays of objects:

```handlebars
{{#each_scroll_trend}}
  #### {{trend_name}}
  - **Description:** {{what_it_is}}
  ...
{{/each_scroll_trend}}
```

**Questions:**
1. Does workflow.xml support Handlebars `{{#each}}` syntax?
2. Can template-output pass structured data (arrays)?
3. How are nested variables resolved?

**If NOT supported:** Template will render `{{#each_scroll_trend}}` as literal text - broken report.

**Refactoring Effort:**
- Simple conditionals (setup-gsap-project): 2 hours
- Multiple conditionals (validate-60fps): 4 hours
- Extreme iteration (research-trends): 8-12 hours

**Total:** 18-30 hours for all 6 workflows

**Priority:** ⚠️ P1 - IMPORTANT (architectural health, maintainability)

---

### Cleanup Pattern 6: User Name Personalization (9/9 workflows)

**Current State:**

Most workflows load `{user_name}` but don't use it in agent dialogue.

**Exception:** review-quality uses it correctly:
```xml
<halt>🚨 STOP. Wait for {user_name} to respond...</halt>
```

**Expected Usage:**

```xml
<action>Tech Director greets {user_name}: "Ready to validate your GSAP code!"</action>
```

Or:
```xml
<action>Cinematographer addresses {user_name} with research findings</action>
```

**Impact:** Minor - personalization opportunity missed, but not blocking.

**Effort:** 5-10 minutes per workflow
**Total:** 45-90 minutes for all 9 workflows

**Priority:** ⚠️ P2 - CLEANUP (nice-to-have)

---

### Cleanup Pattern 7: YAML Documentation Bloat (9/9 workflows)

**Average Bloat:** 60-68% of yaml fields are documentation-only

**Examples:**

```yaml
metadata:
  agent: 'tech-director'
  priority: 'P1'
  complexity: 'medium'
  # ... not consumed by workflow.xml

required_mcp:
  - archon
  - chrome-devtools
  # ... not consumed by workflow.xml

success_criteria:
  - "Criterion 1"
  - "Criterion 2"
  # ... not consumed by workflow.xml

feeds_into:
  - "Other workflow 1"
  - "Other workflow 2"
  # ... not consumed by workflow.xml
```

**Philosophical Question:**

Is this "bloat" or valuable documentation?

**Arguments FOR Keeping:**
- Helps humans understand workflow purpose and context
- Documents dependencies clearly
- Explains success criteria
- Shows workflow relationships

**Arguments AGAINST:**
- 60-70% of yaml not used by execution engine
- Could be in markdown comments instead
- Inflates file size
- Not enforced or validated

**Recommendation:**

Keep documentation fields IF they serve a clear purpose:
- `required_mcp` → Useful for dependency checking (could be validated)
- `success_criteria` → Useful for testing/validation
- `feeds_into` → Useful for workflow graph visualization
- `metadata` → Useful for filtering/categorization

**But consider:**
- Adding validation that enforces these fields
- Using them for automated dependency checking
- Generating workflow documentation from them

**Current Assessment:** Acceptable documentation overhead (not critical to fix)

**Priority:** ⚠️ P3 - INFORMATIONAL (team decision needed)

---

## Workflow Maturity Tiers (Detailed)

### Tier 1: Production Ready (3 workflows)

**Characteristics:**
- Functional core workflow logic
- Most template variables mapped
- May have architectural issues but executable

**1. validate-modern ⚠️**
- **Strengths:** Good workflow structure, functional scans
- **Issues:** 15-20 missing template variables (40% gap)
- **Usable?** Yes, but reports will have gaps
- **Fix Priority:** P1 (significant but not blocking)

**2. validate-60fps ⚠️**
- **Strengths:** Excellent MCP integration, well-structured tests
- **Issues:** 7 Handlebars conditional blocks (architectural)
- **Usable?** Yes, fully functional
- **Fix Priority:** P1 (architectural cleanup)

**3. review-quality ✅**
- **Strengths:** BEST architecture - pure markdown template, clean structure
- **Issues:** Non-standard tags (will be skipped)
- **Usable?** Yes, with workarounds
- **Fix Priority:** P0 (refactor tags) then EXCELLENT

---

### Tier 2: Functional with Issues (4 workflows)

**Characteristics:**
- Core functionality works
- Has significant issues affecting quality
- Requires fixes before production use

**4. setup-gsap-project ⚠️**
- **Issues:** Template logic mixing (XML conditionals)
- **Usable?** Yes, but maintenance difficult
- **Fix Priority:** P1 (architectural)

**5. research-gsap-pattern ⚠️**
- **Issues:** Variable naming mismatch (aggregate vs granular)
- **Usable?** Yes, if AI infers mappings correctly
- **Fix Priority:** P1 (clarity)

**6. accessibility-audit ⚠️**
- **Issues:** CODE REVIEW MODE incomplete, variable mismatch
- **Usable?** Yes for LIVE TESTING, partial for CODE REVIEW
- **Fix Priority:** P1 (complete implementation)

**7. research-trends ⚠️**
- **Issues:** EXTREME template complexity (16 iteration blocks, 139 vars), non-standard tags
- **Usable?** IF workflow.xml supports Handlebars iteration, otherwise broken
- **Fix Priority:** P0 (verify compatibility) or P1 (major refactor)

---

### Tier 3: Non-Functional (2 workflows)

**Characteristics:**
- Cannot execute as designed
- Requires complete implementation or major fixes
- Do NOT use until fixed

**8. validate-complete 🚨**
- **Issues:** 0 template-output tags (0% populated), non-standard tags
- **Usable?** NO - reports will be completely broken
- **Fix Priority:** P0 (blocking)
- **Effort:** 8-12 hours to fix

**9. ship-ready-check 🚨**
- **Issues:** Workflow SPECIFICATION only (no implementation)
- **Usable?** NO - not executable, just a design doc
- **Fix Priority:** P0 (blocking) - needs complete implementation
- **Effort:** 16-24 hours to implement from spec

---

## Remediation Roadmap

### Phase 1: CRITICAL Fixes (Blocking Issues)

**Priority:** P0 - Must be fixed before ANY workflow usage

#### 1.1: Add Web Bundle to ALL 9 Workflows

**Workflows:** All 9
**Effort:** 15 minutes × 9 = 2.25 hours

**Template:**
```yaml
web_bundle:
  - "{installed_path}/instructions.md"
  - "{installed_path}/template.md"
  - "{installed_path}/checklist.md"  # if exists
  - "{config_source}"
```

**Impact:** Enables portability, installation, distribution

---

#### 1.2: Refactor Non-Standard Tags (4 workflows)

**Workflows:** validate-complete, ship-ready-check, research-trends, review-quality
**Effort:** 3-5 hours × 4 = 12-20 hours

**Pattern:**

Replace:
```xml
<research-gate>...</research-gate>
<checkpoint>...</checkpoint>
<halt>...</halt>
```

With:
```xml
<action>Explain research is mandatory</action>
<action>Execute research steps</action>
<ask response="continue">Review findings. Type 'continue' to proceed.</ask>
```

**Impact:** Workflows execute correctly per design

---

#### 1.3: Fix Template Mapping (3 workflows)

**Workflows:** validate-complete, ship-ready-check, validate-modern
**Effort:** 4-8 hours × 3 = 12-24 hours

**Approach:**
1. List all template variables
2. Add `<template-output>` tags for each variable group
3. Test report generation
4. Verify no empty placeholders

**Impact:** Reports generate correctly with complete data

---

#### 1.4: Implement ship-ready-check Workflow

**Workflows:** ship-ready-check (currently just spec)
**Effort:** 16-24 hours

**Scope:**
- Add all workflow execution tags (`<action>`, `<template-output>`)
- Implement 6-category checklist validation
- Add conditional logic for APPROVED/BLOCKED/CONDITIONAL
- Integrate Chrome DevTools MCP (optional testing)
- Generate complete report

**Impact:** Workflow becomes functional

---

#### 1.5: Verify research-trends Compatibility

**Workflows:** research-trends
**Effort:** 2-4 hours investigation + 8-16 hours refactoring if incompatible

**Questions to Answer:**
1. Does workflow.xml support Handlebars `{{#each}}`?
2. Can template-output pass arrays of objects?
3. How are nested variables resolved?

**If Compatible:** Minimal fixes needed
**If Incompatible:** Major refactor required (16 iteration blocks → markdown generation in instructions)

---

**Phase 1 Total:** 52-88 hours (6.5-11 business days)

---

### Phase 2: IMPORTANT Fixes (Quality & Maintainability)

**Priority:** P1 - Should be fixed for production quality

#### 2.1: Add Communication Language Support (9 workflows)

**Effort:** 10 minutes × 9 = 1.5 hours

**Pattern:**
```xml
<step n="1">
<action>Communicate in {communication_language} throughout workflow</action>
...
</step>
```

---

#### 2.2: Refactor Template Logic (6 workflows)

**Workflows:** setup-gsap-project, validate-complete, ship-ready-check, validate-60fps, research-trends, accessibility-audit
**Effort:** 2-12 hours per workflow = 18-30 hours total

**Approach:**
1. Move ALL conditional logic to instructions
2. Generate complete markdown sections in instructions
3. Pass complete sections to template via `<template-output>`
4. Template becomes pure `{{variable}}` placeholders

**Impact:** Clean architecture, easier maintenance

---

#### 2.3: Fix Variable Naming Mismatches (3 workflows)

**Workflows:** research-gsap-pattern, accessibility-audit, review-quality
**Effort:** 2-4 hours per workflow = 6-12 hours total

**Approach:**
- Document aggregate-to-granular mappings
- OR refactor to explicit granular variables
- Ensure template expectations match instruction outputs

---

#### 2.4: Complete accessibility-audit CODE REVIEW MODE

**Workflows:** accessibility-audit
**Effort:** 4-6 hours

**Scope:**
- Implement actual code search logic (not just conceptual)
- Add pattern matching for prefers-reduced-motion
- Add validation for keyboard nav, focus, screen readers
- Ensure CODE REVIEW produces same quality reports as LIVE TESTING

---

**Phase 2 Total:** 30-50 hours (4-6 business days)

---

### Phase 3: CLEANUP (Polish & Optimization)

**Priority:** P2-P3 - Nice-to-have improvements

#### 3.1: Add User Name Personalization (9 workflows)

**Effort:** 5-10 minutes × 9 = 45-90 minutes

---

#### 3.2: Review YAML Documentation Philosophy

**Effort:** 2-3 hour team discussion

**Decision Needed:**
- Keep documentation fields? → Add validation/enforcement
- Remove documentation fields? → Move to markdown comments
- Hybrid approach? → Keep essential fields, remove extras

---

#### 3.3: Create Workflow Testing Protocol

**Effort:** 8-12 hours

**Scope:**
- Define test cases for each workflow
- Create validation checklist
- Document expected inputs/outputs
- Set up regression testing

---

**Phase 3 Total:** 10-16 hours (1-2 business days)

---

## Total Refactoring Effort Estimate

| Phase | Priority | Scope | Hours | Days |
|-------|----------|-------|-------|------|
| Phase 1 | P0 CRITICAL | Web bundle, non-standard tags, template mapping, ship-ready-check implementation | 52-88 | 6.5-11 |
| Phase 2 | P1 IMPORTANT | Communication language, template logic refactor, variable naming, CODE REVIEW MODE | 30-50 | 4-6 |
| Phase 3 | P2-P3 CLEANUP | User personalization, yaml philosophy, testing protocol | 10-16 | 1-2 |
| **TOTAL** | | | **92-154 hours** | **11.5-19 days** |

**Note:** Assumes single developer, full-time focus. With parallel work or part-time: 3-4 weeks calendar time.

---

## Success Metrics

### BEFORE Refactoring (Current State)

| Metric | Score | Status |
|--------|-------|--------|
| Web Bundle Coverage | 0/9 (0%) | 🚨 CRITICAL |
| Execution Correctness | 5/9 (56%) | 🚨 CRITICAL |
| Report Generation | 6/9 (67%) | 🚨 CRITICAL |
| Internationalization | 0/9 (0%) | ⚠️ IMPORTANT |
| Architectural Health | 3/9 (33%) | ⚠️ IMPORTANT |
| Functional Workflows | 7/9 (78%) | ⚠️ TIER 2 |
| Production Ready | 0/9 (0%) | 🚨 NOT READY |

### AFTER Phase 1 (Critical Fixes)

| Metric | Target | Status |
|--------|--------|--------|
| Web Bundle Coverage | 9/9 (100%) | ✅ FIXED |
| Execution Correctness | 9/9 (100%) | ✅ FIXED |
| Report Generation | 9/9 (100%) | ✅ FIXED |
| Functional Workflows | 9/9 (100%) | ✅ FIXED |
| Production Ready | 9/9 (100%) | ✅ MINIMAL VIABLE |

### AFTER Phase 2 (Important Fixes)

| Metric | Target | Status |
|--------|--------|--------|
| Internationalization | 9/9 (100%) | ✅ FIXED |
| Architectural Health | 9/9 (100%) | ✅ FIXED |
| Code Quality | HIGH | ✅ PRODUCTION GRADE |

### AFTER Phase 3 (Cleanup)

| Metric | Target | Status |
|--------|--------|--------|
| Personalization | 9/9 (100%) | ✅ FIXED |
| Documentation Clarity | HIGH | ✅ CLEAR |
| Testing Coverage | COMPREHENSIVE | ✅ TESTED |
| Overall Quality | EXCELLENT | ✅ WORLD-CLASS |

---

## Recommendations

### Immediate Actions (Next 48 Hours)

1. **🚨 HALT USAGE of Tier 3 Workflows**
   - validate-complete
   - ship-ready-check
   - These are BROKEN and will produce broken outputs

2. **⚠️ USE WITH CAUTION: Tier 2 Workflows**
   - May work but have issues
   - Verify outputs carefully
   - Expect gaps in reports

3. **✅ SAFE TO USE: Tier 1 Workflows**
   - validate-modern (expect some empty fields)
   - validate-60fps (fully functional)
   - review-quality (best architecture)

4. **START Phase 1 Refactoring**
   - Begin with web_bundle (quick win)
   - Then tackle non-standard tags (high impact)

---

### Short-Term (Next 2 Weeks)

5. **Complete Phase 1**
   - Fix all CRITICAL blocking issues
   - Get stack to minimal viable state

6. **Begin Phase 2**
   - Add internationalization support
   - Start template logic refactoring

7. **Document Workflow Usage**
   - Create user guide
   - Document known issues and workarounds

---

### Long-Term (Next Sprint)

8. **Complete Phase 2 & 3**
   - Achieve production-grade quality
   - Polish and optimize

9. **Create Workflow Testing Suite**
   - Prevent regressions
   - Ensure quality

10. **Consider Workflow.xml Enhancements**
    - Add support for structured data passing?
    - Add support for Handlebars iteration?
    - These would simplify some workflows

---

## Architectural Lessons Learned

### What Went Well ✅

**1. review-quality Architecture**
- Pure markdown template (NO logic)
- Clean separation of concerns
- Minimal yaml (16 lines!)
- **This is the MODEL others should follow**

**2. validate-60fps Functionality**
- Excellent MCP integration
- Well-structured testing protocol
- Clear pass/fail criteria
- Strong execution logic

**3. research-gsap-pattern Ambition**
- Comprehensive research approach
- Well-documented sections
- Strong knowledge synthesis

---

### What Needs Improvement ⚠️

**1. Template Logic Mixing**
- 6/9 workflows violate separation of concerns
- Handlebars/XML logic in templates
- Makes maintenance difficult

**2. Variable Naming Consistency**
- Aggregate vs granular confusion
- Template expectations unclear
- Need explicit mapping documentation

**3. Non-Standard Tag Usage**
- 4/9 workflows use unsupported tags
- Tags will be silently ignored
- Workflows won't execute as designed

**4. Web Bundle Neglect**
- 0/9 workflows are portable
- Stack is local-only
- Cannot be distributed

---

### Architectural Principles (Going Forward)

**Principle 1: Template Purity**
```
Templates = Pure markdown + {{variable}} placeholders ONLY
Logic = Instructions.md ONLY
```

**Principle 2: Explicit Variable Mapping**
```
Every template variable MUST have explicit <template-output>
No aggregates unless clearly documented
Prefer granular variables for template control
```

**Principle 3: Standard Tags Only**
```
Use ONLY tags supported by workflow.xml
Document unsupported tags → Request workflow.xml enhancements
Never assume tags will work without verification
```

**Principle 4: Portability First**
```
ALL workflows MUST have web_bundle
Workflows MUST be installable remotely
Dependencies MUST be explicit
```

**Principle 5: Internationalization**
```
ALL workflows MUST respect {communication_language}
ALL workflows SHOULD use {user_name} appropriately
Config variables MUST be honored
```

---

## Conclusion

### Current State Summary

The VALIDATION stack has **significant architectural and implementation issues** preventing production deployment:

**CRITICAL Issues (Blocking):**
- 0% portable (no web_bundle)
- 44% broken execution (non-standard tags)
- 33% broken reports (template mapping failures)
- 22% non-functional (not implemented)

**Stack Quality:** 🚨 **NOT PRODUCTION READY**

---

### Required Action

**MAJOR REFACTORING REQUIRED**

**Estimated Effort:** 92-154 hours (11.5-19 business days)

**Phases:**
1. **CRITICAL Fixes** (52-88 hours) → Minimal viable
2. **IMPORTANT Fixes** (30-50 hours) → Production grade
3. **CLEANUP** (10-16 hours) → Excellent quality

---

### After Refactoring

**Stack will be:**
- ✅ 100% portable (web_bundle)
- ✅ 100% executable (standard tags)
- ✅ 100% functional (complete implementations)
- ✅ 100% i18n-ready (language support)
- ✅ Clean architecture (pure templates)
- ✅ Production ready (fully tested)

---

### Recommended Priorities

**Week 1-2:** Phase 1 (CRITICAL)
**Week 3:** Phase 2 (IMPORTANT)
**Week 4:** Phase 3 (CLEANUP) + Testing

**After 4 weeks:** World-class workflow stack ready for distribution.

---

## Appendix: Detailed Evidence

### Evidence 1: validate-modern Missing Variables

**File:** `/bmad/gsap-excellence/workflows/validate-modern/template.md` (lines 39-45)

```markdown
**Breakdown:**
- TweenMax: {{tweenmax_count}} instances
- TweenLite: {{tweenlite_count}} instances
- TimelineMax/TimelineLite: {{timeline_count}} instances
- Old Imports: {{old_import_count}} instances
- CSSPlugin: {{cssplugin_count}} instances
```

**File:** `/bmad/gsap-excellence/workflows/validate-modern/instructions.md` (line 203)

```xml
<template-output>deprecated_syntax_report, deprecated_instances_list, deprecated_count</template-output>
```

**Gap:** 5 granular count variables expected, not provided.

---

### Evidence 2: ship-ready-check Workflow Skeleton

**File:** `/bmad/gsap-excellence/workflows/ship-ready-check/instructions.md`

**Line count:** 166 lines

**Comparable workflows:**
- validate-complete: 446 lines
- validate-60fps: 372 lines

**Workflow tag analysis:**
```bash
$ grep "<action>" instructions.md | wc -l
0

$ grep "<template-output>" instructions.md | wc -l
0
```

**Step 3 (lines 81-145) contains only:**
- Markdown checkboxes
- Variable placeholders
- No execution logic

**Conclusion:** Specification document, not executable workflow.

---

### Evidence 3: research-trends Extreme Complexity

**File:** `/bmad/gsap-excellence/workflows/research-trends/template.md`

**Handlebars iteration blocks:** 16

**Lines affected:** ~300 of 454 lines (66%)

**Example (lines 52-74):**
```handlebars
{{#each_scroll_trend}}
#### {{trend_name}}
- **Description:** {{what_it_is}}
- **Adoption:** {{widespread_growing_emerging_niche_declining}}
...
{{/each_scroll_trend}}
```

**Template variables:** 139 unique

**Critical question:** Does workflow.xml support `{{#each}}` syntax?

---

### Evidence 4: Non-Standard Tags

**File:** `/bmad/gsap-excellence/workflows/validate-complete/instructions.md` (line 50)

```xml
<research-gate enforcement="MANDATORY" blocking="true">
```

**File:** `/bmad/core/tasks/workflow.xml` (supported tags)

```xml
<action>, <ask>, <check>, <goto>, <invoke-workflow>, <invoke-task>, <template-output>, <elicit-required>
```

**Gap:** `<research-gate>` NOT in supported tags list → Will be ignored.

---

## Final Status

**Audit Complete:** ✅
**Report Generated:** 2025-11-07
**Workflows Audited:** 9/9
**Issues Documented:** 54 total
**Evidence Provided:** Complete
**Recommendations:** Actionable

**Next Review:** After Phase 1 refactoring complete (estimate: 2 weeks)

---

**Report End**

*Generated by BMad Builder - audit-workflow v1.0.0*
*Audit Depth: COMPLETE (all 7 validation steps per workflow)*
*Evidence: COMPREHENSIVE (code samples, line numbers, gap analysis)*
*Recommendations: ACTIONABLE (effort estimates, priorities, patterns)*
