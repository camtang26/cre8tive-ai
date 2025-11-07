# Workflow Audit Report

**Workflow:** create-simple-skill
**Audit Date:** 2025-10-21
**Auditor:** Audit Workflow (BMAD v6)
**Workflow Type:** Document Workflow (template: true)

---

## Executive Summary

**Overall Status:** ⚠️ NEEDS IMPROVEMENT

- Critical Issues: **3**
- Important Issues: **7**
- Cleanup Recommendations: **6**

**Priority:** Address critical config block issues immediately. Workflow is functional but missing key v6 standards.

---

## 1. Standard Config Block Validation

### ❌ CRITICAL: Missing Required Config Variables

**Current Config Block:**
```yaml
config_source: "{project-root}/bmad/bmb/skill-factory/config.yaml"
user_name: "{config_source}:user_name"
communication_language: "{config_source}:communication_language"
```

**Missing Variables:**
- ❌ `output_folder: "{config_source}:output_folder"` - **CRITICAL**
- ❌ `date: system-generated` - **CRITICAL**

**Status:** ❌ CRITICAL - Incomplete standard config block

**Impact:**
- Workflow cannot properly save outputs to user-configured folder
- No system date awareness for versioning/timestamps
- Non-compliant with BMAD v6 standards

**Recommendation:**
Add missing config variables immediately after line 11 in workflow.yaml:

```yaml
# Critical variables - loaded from module config
config_source: "{project-root}/bmad/bmb/skill-factory/config.yaml"
output_folder: "{config_source}:output_folder"
user_name: "{config_source}:user_name"
communication_language: "{config_source}:communication_language"
date: system-generated
```

---

## 2. YAML/Instruction/Template Alignment

### Variable Usage Analysis

**Total YAML Fields:** 23 top-level fields + 11 nested fields = **34 fields**
**Used in Instructions:** **14 fields** (41%)
**Unused (Bloat):** **20 fields** (59%)

### ⚠️ UNUSED YAML FIELDS (BLOAT)

**Top-Level Unused Fields:**
1. `installed_path` - Defined but NEVER referenced in instructions.md
2. `templates_path` - Defined but NEVER referenced in instructions.md
3. `reference_path` - Defined but NEVER referenced in instructions.md
4. `default_skill_output` - Defined but NEVER referenced in instructions.md
5. `output_file` - Defined but NEVER referenced in instructions.md

**Nested Object Bloat:**
6. `advanced_options` - Entire object unused (4 sub-fields):
   - `auto_optimize_description`
   - `generate_examples_from_domain`
   - `validate_uniqueness`
   - `suggest_related_skills`

**Note:** `workflow_variables` object appears to be documentation only (not runtime variables), so not counted as bloat.

### ✅ PROPERLY USED YAML FIELDS

**Well-Referenced Variables:**
- `{communication_language}` - Line 6 of instructions
- `{user_name}` - Line 23 of instructions
- `{description_optimization_guide}` - Line 12 of instructions
- `{token_budgets_guide}` - Line 13 of instructions
- `{best_practices_guide}` - Line 14 of instructions
- `{skill_template}` - Line 531 of instructions
- `{min_examples_count}` - Lines 481, 500, 569 of instructions
- `{target_description_chars}` - Line 440 of instructions
- `{max_description_chars}` - Line 441 of instructions
- `{min_quality_score}` - Line 589, 659 of instructions
- `{validation_checklist}` - Line 562 of instructions
- `{workflows_path}` - Lines 637, 641, 645 of instructions
- `{mcp_integration.use_archon_for_research}` - Line 66 of instructions
- `{mcp_integration.use_context7_for_examples}` - Line 67, 505 of instructions

### ⚠️ HARDCODED VALUES THAT SHOULD BE VARIABLES

**Instructions Line 470-489:** Hardcoded path references
```markdown
<ask>Where should I save this skill?
1. Project skills: {project_skills_path}  <-- Variable not defined in YAML!
2. Personal Claude Code skills: {claude_code_skills_path}  <-- Variable not defined in YAML!
3. Custom location: Specify path
[Default: 1]
</ask>
```

**Issue:** Instructions reference `{project_skills_path}` and `{claude_code_skills_path}` but these are NOT defined in workflow.yaml.

**Recommendation:** Add these to yaml config block or remove from instructions.

**Bloat Percentage:** 59% (20/34 fields unused)

**Status:** ⚠️ IMPORTANT - High bloat percentage

---

## 3. Config Variable Usage

### Communication Language ✅ GOOD
- Line 6: `<critical>Communicate in {communication_language} throughout the skill creation process</critical>`
- **Status:** ✅ Proper usage

### User Name ✅ GOOD
- Line 23: `<action>Engage {user_name} in natural discovery conversation...`
- Line 467: Summary display personalization expected
- **Status:** ✅ Proper usage

### Output Folder ❌ CRITICAL
- **Status:** ❌ Variable NOT DEFINED in YAML
- Instructions don't use `{output_folder}` for file writes
- Line 486-489: Uses unclear `{project_skills_path}` instead
- **Impact:** Output location ambiguous, non-standard

### Date ❌ CRITICAL
- **Status:** ❌ Variable NOT DEFINED in YAML
- No date awareness in workflow
- **Impact:** Cannot version outputs, no timestamp metadata

**Status:** ❌ CRITICAL - Missing critical config variables

---

## 4. Web Bundle Validation

### ❌ CRITICAL: No Web Bundle Configuration

**Status:** ❌ **NO WEB_BUNDLE SECTION EXISTS**

**Impact:**
- Workflow CANNOT be distributed via web
- No file manifest for packaging
- No dependency tracking for invoked workflows
- Non-compliant with BMAD v6 web distribution standards

### Required Web Bundle Structure (Missing Entirely)

The workflow should include:

```yaml
# Web bundle configuration (for distribution)
web_bundle:
  name: "create-simple-skill"
  description: "Create production-ready single-file Claude Skills"
  author: "Skill Factory"
  instructions: "bmad/bmb/skill-factory/workflows/create-simple-skill/instructions.md"
  validation: "bmad/bmb/skill-factory/workflows/create-simple-skill/checklist.md"
  template: true

  web_bundle_files:
    - "bmad/bmb/skill-factory/workflows/create-simple-skill/instructions.md"
    - "bmad/bmb/skill-factory/workflows/create-simple-skill/checklist.md"
    # Add all referenced guide files
    # Add all template files
    # Add any invoked workflows
```

### 🔍 Workflow Dependencies Detected

**Invoked Workflows Found in Instructions:**
- Line 637: `{workflows_path}/pressure-test-skill/workflow.yaml`
- Line 641: `{workflows_path}/create-multi-file-skill/workflow.yaml`
- Line 645: `{workflows_path}/package-skill/workflow.yaml`

**CRITICAL:** These workflows are invoked but NOT listed in web_bundle (because web_bundle doesn't exist!).

**Missing `existing_workflows` Field:**
When workflows are invoked, a web_bundle MUST include `existing_workflows` mapping:

```yaml
  existing_workflows:
    - workflows_path: "bmad/bmb/skill-factory/workflows"
```

This is **CRITICAL** for web distribution.

### 📁 File References Detected

**Referenced but Not Bundled:**
1. `{description_optimization_guide}` - File path from config, should be in web_bundle
2. `{token_budgets_guide}` - File path from config, should be in web_bundle
3. `{best_practices_guide}` - File path from config, should be in web_bundle
4. `{skill_template}` - File path from config, should be in web_bundle
5. `/knowledge-base/` directory - Line 359-377 reference KB storage
6. Research agent: `{project-root}/bmad/bmm/agents/bmm-knowledge-base-researcher.md` - Line 83
7. Research skill: `{project-root}/.claude/skills/reference-material-research/SKILL.md` - Line 84

**Status:** ⚠️ CRITICAL - Cannot distribute workflow without web_bundle

---

## 5. Bloat Detection

### Bloat Summary

**Total YAML Fields:** 34
**Used Fields:** 14
**Unused Fields:** 20
**Bloat Percentage:** **59%**

### Detailed Bloat Items

#### UNUSED YAML FIELDS (Delete or Use)

1. **`installed_path`** (line 14 of workflow.yaml)
   - **Severity:** CLEANUP
   - **Recommendation:** Delete if truly unused, OR use it to build other paths

2. **`templates_path`** (line 16)
   - **Severity:** CLEANUP
   - **Recommendation:** Delete if unused, OR replace hardcoded template references with `{templates_path}/...`

3. **`reference_path`** (line 17)
   - **Severity:** CLEANUP
   - **Recommendation:** Delete entirely (no usage found)

4. **`default_skill_output`** (line 35)
   - **Severity:** IMPORTANT
   - **Recommendation:** This should probably be used! Output path logic seems broken without it.

5. **`output_file`** (line 36)
   - **Severity:** IMPORTANT
   - **Recommendation:** Should be used for saving SKILL.md, but instructions use ad-hoc path at line 603

6. **`advanced_options` object** (lines 67-72) - ALL 4 SUB-FIELDS UNUSED
   - `auto_optimize_description: true` - Not referenced
   - `generate_examples_from_domain: true` - Not referenced
   - `validate_uniqueness: true` - Not referenced
   - `suggest_related_skills: true` - Not referenced
   - **Severity:** BLOAT
   - **Recommendation:** Delete entire `advanced_options` block OR implement features

#### HARDCODED VALUES (Should Be Variables)

7. **Line 470-489 of instructions** - Hardcoded path references
   - Uses `{project_skills_path}` - **NOT DEFINED IN YAML**
   - Uses `{claude_code_skills_path}` - **NOT DEFINED IN YAML**
   - **Recommendation:** Add these variables to yaml OR remove from instructions

8. **Line 603 of instructions** - Hardcoded save path logic
   ```markdown
   <action>Save SKILL.md to: {{skill_output_path}}/{{skill_name}}/SKILL.md</action>
   ```
   - Should use `{output_file}` from yaml (which is defined but unused!)
   - **Recommendation:** Use yaml variable for consistency

#### REDUNDANT CONFIGURATION

9. **Duplicate path definitions** - Config indirection unnecessary
   - Lines 14-17 define paths that just pull from config
   - Could be simplified or eliminated
   - **Recommendation:** Consider if this indirection adds value

**Cleanup Potential:** High - removing 20 unused fields would reduce yaml by ~35 lines

---

## 6. Runtime Sync Validation

### Three-Way Sync Check

**Source Files:**
- `/home/cameronai/projects/cre8tive-website-1006/bmad/bmb/skill-factory/workflows/create-simple-skill/`

**Project Runtime:**
- Expected: `.claude/commands/bmad/bmb/skill-factory/workflows/create-simple-skill.md`

**User Runtime:**
- Expected: `~/.claude/commands/bmad/bmb/skill-factory/workflows/create-simple-skill.md`

### 🔍 Sync Status

**Checking file existence...**

| Location | Path | Exists? |
|----------|------|---------|
| Source | bmad/bmb/skill-factory/workflows/create-simple-skill/ | ✅ YES |
| Project Runtime | .claude/commands/bmad/bmb/skill-factory/workflows/create-simple-skill.md | ❓ UNKNOWN |
| User Runtime | ~/.claude/commands/bmad/bmb/skill-factory/workflows/create-simple-skill.md | ❓ UNKNOWN |

**Note:** Runtime sync validation requires file system checks. This audit report flags potential issues but cannot perform SHA256 hashing without executing filesystem commands.

**Status:** ⚠️ INCOMPLETE - Manual verification needed

**Recommendation:**
Run these commands to check sync:

```bash
# Check if runtime files exist
ls -lh .claude/commands/bmad/bmb/skill-factory/workflows/create-simple-skill.md 2>/dev/null || echo "Project runtime: MISSING"
ls -lh ~/.claude/commands/bmad/bmb/skill-factory/workflows/create-simple-skill.md 2>/dev/null || echo "User runtime: MISSING"

# Compare hashes if files exist
sha256sum bmad/bmb/skill-factory/workflows/create-simple-skill/workflow.yaml
sha256sum .claude/commands/bmad/bmb/skill-factory/workflows/create-simple-skill.md
```

---

## 7. Template Variable Mapping

### Analysis: Not a Classic Document Workflow

**Workflow Type:** `template: true` but does NOT use template.md interpolation

**Finding:** This workflow generates output (SKILL.md files) but doesn't use the classic template.md + {{variable}} substitution pattern.

Instead, it uses:
- `<template-output>` tags in instructions (11 occurrences)
- Dynamic content generation
- No template.md file needed

### ✅ Template-Output Tags Found (11)

All `<template-output>` tags properly used:

1. Line 37: `<template-output>domain_discovery</template-output>`
2. Line 86: `<template-output>research_findings</template-output>`
3. Line 401: `<template-output>deep_research_complete</template-output>`
4. Line 461: `<template-output>optimized_description</template-output>`
5. Line 494: `<template-output>skill_structure_plan</template-output>`
6. Line 527: `<template-output>skill_examples</template-output>`
7. Line 558: `<template-output>complete_skill_markdown</template-output>`
8. Line 598: `<template-output>quality_report</template-output>`

**Status:** ✅ GOOD - Template output strategy is clear and consistent

**Note:** No traditional template.md mapping needed for this workflow type.

---

## Recommendations

### Critical (Fix Immediately) 🔴

1. **Add Missing Standard Config Variables**
   ```yaml
   output_folder: "{config_source}:output_folder"
   date: system-generated
   ```

2. **Create Web Bundle Configuration**
   - Add complete web_bundle section
   - List all file dependencies
   - Map invoked workflows with existing_workflows field

3. **Fix Output Folder Logic**
   - Use `{output_folder}` from config
   - Define `{project_skills_path}` and `{claude_code_skills_path}` OR remove references

### Important (Address Soon) ⚠️

4. **Remove Bloat (59% unused fields)**
   - Delete unused paths: `installed_path`, `templates_path`, `reference_path`
   - Delete or implement `advanced_options` features
   - Use `output_file` variable or delete it
   - Use `default_skill_output` variable or delete it

5. **Fix Undefined Variable References**
   - Add `project_skills_path` to yaml
   - Add `claude_code_skills_path` to yaml
   - OR remove these from instructions line 470-489

6. **Add File References to Web Bundle**
   - Guide files (description_optimization_guide, token_budgets_guide, best_practices_guide)
   - Template file (skill_template)
   - Invoked workflows (pressure-test-skill, create-multi-file-skill, package-skill)
   - Research agent and skill references

7. **Verify Runtime Sync**
   - Check if .claude/commands versions exist
   - Compare source vs runtime file hashes
   - Remove stale user-level overrides if found

### Cleanup (Nice to Have) 🧹

8. **Simplify Config Indirection**
   - Evaluate if pulling all paths from config adds value
   - Consider flattening some variable definitions

9. **Document Variable Usage**
   - Add comments explaining which variables are used where
   - Flag intentionally unused variables (if any exist for future use)

10. **Add Web Bundle Validation**
    - Ensure all referenced files exist
    - Validate bmad/-relative paths
    - Test workflow distribution process

---

## Validation Checklist

Use this checklist to verify fixes:

- [ ] All standard config variables present and correct (output_folder, date)
- [ ] No unused yaml fields (59% bloat removed)
- [ ] Config variables used appropriately in instructions
- [ ] Web bundle includes all dependencies
- [ ] Undefined variable references fixed ({project_skills_path}, {claude_code_skills_path})
- [ ] File structure follows v6 conventions
- [ ] Runtime files synced with source
- [ ] Bloat percentage reduced below 20%

---

## Next Steps

1. **Immediate Actions:**
   - Add output_folder and date to config block
   - Create web_bundle section with file manifest
   - Fix undefined variable references in instructions

2. **Short-Term Actions:**
   - Remove 20 unused yaml fields (bloat cleanup)
   - Test workflow after fixes
   - Verify web bundle packages correctly

3. **Long-Term Actions:**
   - Re-run audit after fixes to verify improvements
   - Consider standardizing path variable patterns across all skill-factory workflows
   - Document intentional design decisions (if bloat is actually future-proofing)

4. **Validation:**
   - Re-audit after fixes (target: <3 issues total)
   - Test web bundle distribution
   - Verify runtime sync across all locations

---

## Audit Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Critical Issues | 3 | ⚠️ Needs Work |
| Important Issues | 7 | ⚠️ Needs Work |
| Cleanup Items | 6 | 🧹 Optional |
| Bloat Percentage | 59% | ⚠️ High |
| Config Compliance | 60% (3/5 vars) | ❌ Incomplete |
| Web Bundle | Missing | ❌ Critical |
| Template Mapping | N/A (non-classic) | ✅ Good |
| Runtime Sync | Unknown | ⚠️ Needs Check |

**Overall Grade:** **C+ (Functional but Non-Compliant)**

- Workflow is functional and produces good output
- Missing critical v6 compliance features (web_bundle, config standards)
- High bloat suggests rushed development or incomplete cleanup
- Needs polish before distribution

---

**Audit Complete** - Generated by audit-workflow v1.0
**Next Workflow:** kb-integration (2/3)
