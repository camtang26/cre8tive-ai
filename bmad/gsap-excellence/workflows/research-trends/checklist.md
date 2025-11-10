# Research-Trends Workflow Validation Checklist
# Comprehensive Quality Assurance for Premium Trend Discovery

**Workflow:** research-trends
**Agent:** Cinematographer
**Version:** 2.0.0-premium
**Last Updated:** 2025-11-09

---

## 🚨 CRITICAL: Research Enforcement Test (MANDATORY FIRST CHECK)

**This is the most important validation - if this fails, the entire workflow fails.**

### Can Research Be Skipped?

**Test the workflow's research gate enforcement:**

- [ ] **NO - Research gate blocks progression (PASS ✅)**
  - Workflow includes `<research-gate enforcement="MANDATORY" blocking="true">` tag
  - Checkpoint type=`"approval-gate" blocking="true"` present
  - User must explicitly type "continue" [c] to proceed
  - NO "skip" option in checkpoint ask prompt
  - Agent cannot rationalize skipping
  - Workflow execution HALTS at checkpoint until user approval

**If the answer is NO (research CANNOT be skipped), mark PASS and continue.**

- [ ] **YES - Research is optional/skippable (FAIL ❌)**
  - **THIS MUST NOT HAPPEN**
  - Research gate is missing `enforcement="MANDATORY" blocking="true"`
  - Checkpoint allows "skip" option
  - Agent can proceed without research
  - **IMMEDIATE ACTION REQUIRED:** Fix workflow immediately

**Enforcement Mechanism Checklist:**

- [ ] **research-gate tag has `enforcement="MANDATORY"`**
  - Location: instructions.md Step 2
  - Tag structure: `<research-gate enforcement="MANDATORY" blocking="true">`

- [ ] **research-gate tag has `blocking="true"`**
  - Same tag as above
  - Both attributes MUST be present

- [ ] **checkpoint tag has `type="approval-gate"`**
  - Location: instructions.md Step 2 checkpoint
  - Tag structure: `<checkpoint type="approval-gate" blocking="true">`

- [ ] **checkpoint tag has `blocking="true"`**
  - Same tag as above
  - MUST be blocking to prevent skipping

- [ ] **Ask prompt does NOT include "skip" option**
  - Check instructions.md Step 2 checkpoint <ask> tag
  - Should say: "Type 'continue' [c] to proceed" or "Type 'continue' [c] or 'redo'"
  - Should NOT say: "...or 'skip' to bypass research"

- [ ] **Invalid input handling returns to checkpoint**
  - Check for `<check if="research_approval != 'continue'...">` with `<goto step="2">`
  - User cannot proceed with invalid input

**VERIFICATION METHOD:**

Execute the workflow and attempt to skip research:
1. Start workflow
2. Reach Step 2 research gate
3. At checkpoint, try typing "skip", "s", "yes", or pressing Enter without "continue"
4. **EXPECTED:** Workflow should reject input and re-prompt
5. **FAILURE:** If workflow proceeds to Step 3 without research completion → FAIL

**Status:** [ ] PASS [ ] FAIL

**If FAIL:** DO NOT PROCEED. Fix research gate enforcement before continuing validation.

---

## File Path Verification

**Verify all file paths point to correct locations (no hallucinated paths).**

### Deep-Research File Paths

- [ ] **workflow.yaml lists Deep-Research section 7.5**
  - Check: `deep_research_sections: ['7.5']` present
  - NOT empty array `[]`

- [ ] **workflow.yaml has deep_research_base path**
  - Check: `deep_research_base: '{project-root}/docs/Deep-Research/GSAP-Animation-Mastery'`
  - Path is correct

- [ ] **instructions.md has Read command for Section 7.5**
  - Location: Step 2, Phase 2
  - Command: `Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/32-75-notable-agencies-patterns.md`
  - File exists at this path

- [ ] **Verify file actually exists**
  - Run: `ls {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/32-75-notable-agencies-patterns.md`
  - File should be present (Section 7.5)

### Agent Sidecar Files (Should NOT Be Referenced)

- [ ] **NO references to agent sidecar files in instructions.md**
  - Search for: `gsap-cinematographer/research-knowledge.md`
  - Should NOT appear in Read commands
  - **IF FOUND:** Replace with actual Deep-Research file path

### MCP Server References

- [ ] **workflow.yaml lists required_mcp servers**
  - perplexity (or WebSearch equivalent)
  - archon

- [ ] **Archon source IDs are valid**
  - `b9f6b322298feb21` (gsap.com official docs)
  - `d571ab8468f31305` (Awwwards GSAP sites)
  - `1e5cc3bd5125be3c` (Codrops tutorials)

### Template and Instructions Paths

- [ ] **workflow.yaml has correct template path**
  - `template: '{installed_path}/template.md'`

- [ ] **workflow.yaml has correct instructions path**
  - `instructions: '{installed_path}/instructions.md'`

- [ ] **workflow.yaml has correct validation path**
  - `validation: '{installed_path}/checklist.md'`

- [ ] **workflow.yaml has correct installed_path**
  - `installed_path: '{project-root}/bmad/gsap-excellence/workflows/research-trends'`

---

## Research Citation Audit

**Verify all research is properly cited with verbatim quotes.**

### Deep-Research Section 7.5 Citations

Count verbatim quotes from Section 7.5 in instructions.md:

- [ ] **10+ verbatim quotes present**
  - Quotes use italics: *"quote text"*
  - Quotes have quotation marks
  - Source citation in parentheses: (Source: 32-75-notable-agencies-patterns.md)

**Expected Quotes (verify these are present):**

- [ ] **Active Theory pattern quote:**
  - *"Known for WebGL + GSAP. They often have immersive experiences. Pattern: heavy use of GSAP for camera moves and syncing DOM/UI with WebGL scenes."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **Resn pattern quote:**
  - *"Often quirky interactive pieces...Pattern: creative use of custom eases and staggers to create surprising motions..."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **ToyFight pattern quote:**
  - *"They integrated GSAP deep in Webflow site...Pattern: they used Eleventy and vanilla JS for transparency..."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **Dutch agencies pattern quote:**
  - *"They often do slick product showcase animations: subtle parallax, smooth carousels, etc. Often they combine GSAP with three.js..."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **Scroll-driven animation evolution quote:**
  - *"Use of Scroll-driven animations has only increased -- thanks to ScrollTrigger making it easier..."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **SVG & Canvas micro-animations quote:**
  - *"SVG and Canvas micro-animations: like animated logos, cursor effects (e.g., a custom cursor trail that is done via GSAP quickSetter..."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **MatchMedia usage quote:**
  - *"MatchMedia usage: because of the multitude of device sizes, best sites tailor animations per breakpoint..."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **License change impact quote:**
  - *"License change: GSAP's free plugins means even more widespread adoption in award sites..."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **Common thread quality framework quote:**
  - *"In essence, analyzing these cases and studios, we identify a common thread: systematic use of GSAP's tools (timeline, scroll, plugins) combined with creative storytelling."*
  - (Source: 32-75-notable-agencies-patterns.md)

- [ ] **AI guidance methodology quote:**
  - *"AI should learn: Approach each animation challenge by thinking 'How would Active Theory or Locomotive do this?' -- likely modular timelines, scroll linking, heavy optimization..."*
  - (Source: 32-75-notable-agencies-patterns.md)

**Citation Format Verification:**

- [ ] **All quotes use italics (*"quote"*)**
  - NOT plain text
  - NOT bold text

- [ ] **All quotes have quotation marks**
  - Opening and closing quotes present

- [ ] **All quotes have source citation**
  - Format: (Source: filename.md)
  - Appears immediately after quote

- [ ] **Source file names are correct**
  - 32-75-notable-agencies-patterns.md (Section 7.5)
  - NOT sidecar files
  - NOT hallucinated file names

---

## Quality Metrics Validation

**Verify workflow meets premium quality standards.**

### Line Count Targets

**Measure total line count across all 4 workflow files:**

```bash
# Run these commands to measure
wc -l workflow.yaml instructions.md template.md checklist.md
```

- [ ] **workflow.yaml: 150-200+ lines**
  - Current: ____ lines
  - Growth from 49 lines: ____%
  - Target: +200% minimum

- [ ] **instructions.md: 1000-1700+ lines**
  - Current: ____ lines
  - Growth from 419 lines: ____%
  - Target: +138% minimum (1000+ lines)

- [ ] **template.md: 400-600+ lines**
  - Current: ____ lines
  - Growth from 454 lines: ____% (already in range)
  - Target: Maintain 400-600+ range

- [ ] **checklist.md: 400-700+ lines**
  - Current: ____ lines
  - Growth from 0 lines: NEW FILE
  - Target: 400-700+ lines

**Total Line Count:**

- [ ] **TOTAL: 1500+ lines across all files**
  - workflow.yaml: ____ lines
  - instructions.md: ____ lines
  - template.md: ____ lines
  - checklist.md: ____ lines
  - **TOTAL: ____ lines**
  - **TARGET: 1500+ lines minimum**

### Per-File Growth Metrics

**Document growth percentages:**

- [ ] **workflow.yaml growth: +200% or more**
  - Before: 49 lines
  - After: ____ lines
  - Growth: ____% (calculate: ((after - before) / before) * 100)

- [ ] **instructions.md growth: +138% or more**
  - Before: 419 lines
  - After: ____ lines
  - Growth: ____% (target: 1000+ lines = +138%)

- [ ] **template.md: Maintain 400-600+ lines**
  - Before: 454 lines (already in target range)
  - After: ____ lines
  - Status: [ ] Maintained [ ] Enhanced

- [ ] **checklist.md: NEW FILE created**
  - Before: 0 lines (didn't exist)
  - After: ____ lines
  - Target: 400-700+ lines

### Research Density (Quotes Per Section)

**Measure research density in instructions.md:**

- [ ] **Step 2 (Research Gate) has 10+ quotes**
  - Count quotes in Step 2
  - Should have quotes from Section 7.5

- [ ] **Average: 1+ quote per 100 lines in instructions.md**
  - Total quotes: ____
  - Total lines in instructions.md: ____
  - Density: ____ quotes per 100 lines
  - Target: 1+ per 100 lines

### Framework Integration Verification

- [ ] **Section 7.5 framework applied throughout instructions.md**
  - Agency pattern framework referenced (Active Theory, Resn, ToyFight, Dutch)
  - Trend context (2023-2025) applied
  - Quality markers used (systematic use + creative storytelling)
  - Methodology framework referenced (modular timelines, scroll linking, optimization)

---

## Functionality Tests

**Execute the workflow to verify it works correctly.**

### Workflow Execution Test

- [ ] **Workflow executes without errors**
  - Start workflow from Cinematographer agent menu (*trends)
  - OR: Load workflow.yaml directly
  - NO syntax errors in XML
  - NO missing file errors
  - NO undefined variable errors

- [ ] **Step 1 executes correctly**
  - User is prompted for trend_focus
  - User is prompted for context
  - Variables captured correctly

- [ ] **Step 2 research gate BLOCKS until research complete**
  - WebSearch query instructions displayed
  - Deep-Research Section 7.5 read instructions displayed
  - Archon MCP query instructions displayed
  - Checkpoint asks for approval
  - Workflow HALTS until user types "continue" [c]

- [ ] **Research gate rejects invalid input**
  - Try typing "skip" → Should reject and re-prompt
  - Try typing "yes" → Should reject and re-prompt
  - Try pressing Enter → Should reject and re-prompt
  - ONLY "continue" [c] or "redo" allowed

- [ ] **Step 3 executes after research approval**
  - Trend analysis instructions displayed
  - Categorization framework applied
  - Innovation assessment framework applied

- [ ] **Step 4 generates report**
  - Report structure from template.md used
  - Output file created in correct location
  - All placeholders filled
  - Research citations included

### Output File Generation

- [ ] **Output file created successfully**
  - Location: `{output_folder}/animation-trends-{timestamp}.md`
  - File exists after workflow completion
  - File is not empty

- [ ] **Output file follows template structure**
  - Executive Summary section present
  - Trend Categories section present
  - Award-Winning Examples section present
  - Research Citations section present

- [ ] **All placeholders replaced**
  - NO {{placeholder}} syntax remaining
  - All variables filled with actual content
  - Dates formatted correctly

---

## BMAD v6 Compliance Verification

**Verify workflow follows all BMAD v6 standards.**

### workflow.yaml Structure Compliance

- [ ] **Required sections present in workflow.yaml:**
  - [x] name
  - [x] description
  - [x] author
  - [x] version (2.0.0-premium)
  - [x] complexity
  - [x] standalone (false for agent-context workflows)
  - [x] config_source
  - [x] module_root
  - [x] user_name
  - [x] communication_language
  - [x] output_folder
  - [x] date (system-generated)
  - [x] timestamp (system-generated)
  - [x] metadata block
  - [x] required_mcp
  - [x] deep_research_sections
  - [x] deep_research_base
  - [x] archon_sources
  - [x] agents (primary, supporting if applicable)
  - [x] installed_path
  - [x] template path
  - [x] instructions path
  - [x] validation path
  - [x] default_output_file
  - [x] inputs block
  - [x] outputs block
  - [x] success_criteria
  - [x] estimated_duration

### instructions.md Structure Compliance

- [ ] **Required XML tags present:**
  - [x] `<critical>` header (workflow engine reference)
  - [x] `<critical>` header (workflow.yaml loaded)
  - [x] `<workflow>` wrapper
  - [x] `<step n="X" goal="...">` tags (numbered sequentially)
  - [x] `<action>` tags
  - [x] `<ask>` tags
  - [x] `<check if="">...</check>` tags
  - [x] `<research-gate enforcement="MANDATORY" blocking="true">` tag
  - [x] `<phase n="X" title="..." required="true">` tags
  - [x] `<checkpoint type="approval-gate" blocking="true">` tag
  - [x] `<template-output>` tags

- [ ] **Variable syntax correct:**
  - [x] Uses {{variable_name}} format
  - [x] Uses {config_source}:field_name format
  - [x] Uses {project-root} for paths

### template.md Structure Compliance

- [ ] **Template uses proper placeholder syntax:**
  - [x] {{placeholder}} format
  - [x] Placeholders match variables from instructions.md

- [ ] **Template has comprehensive structure:**
  - [x] Executive Summary
  - [x] Trend Categories (A-H)
  - [x] Research Citations

### Web Bundle Configuration (if applicable)

- [ ] **web_bundle section complete in workflow.yaml:**
  - [x] name
  - [x] description
  - [x] path
  - [x] web_bundle_files (lists all 4 workflow files)

- [ ] **All referenced files listed in web_bundle_files:**
  - [x] workflow.yaml
  - [x] instructions.md
  - [x] template.md
  - [x] checklist.md

---

## Version Compliance Verification

**Verify workflow is properly versioned as premium.**

- [ ] **workflow.yaml has version: "2.0.0-premium"**
  - NOT "1.0.0"
  - NOT missing version field

- [ ] **Author field present**
  - Author: "GSAP Excellence Engine - The Cinematographer"

- [ ] **version_history block present (optional but recommended)**
  - Documents evolution from 1.0.0 to 2.0.0-premium
  - Lists changes made in premium version

---

## Comparison to Conversion Spec (Reference Validation)

**Verify workflow aligns with original conversion spec intent.**

### Conversion Spec Alignment

- [ ] **Research strategy matches conversion spec:**
  - Conversion spec said: "Perplexity/WebSearch PRIMARY, Archon secondary"
  - Workflow implements: WebSearch PRIMARY (TIER 1), Archon SECONDARY (TIER 3)
  - **Status:** [ ] Aligned [ ] Diverged

- [ ] **Deep-Research sections added (premium enhancement):**
  - Conversion spec said: `deep_research_sections: []` (none)
  - Workflow implements: Section 7.5 (agency pattern framework)
  - **Status:** ✅ Enhanced beyond conversion spec

- [ ] **Research gate strengthened (premium enhancement):**
  - Conversion spec had: Basic research protocol
  - Workflow implements: MANDATORY blocking gate with no skip option
  - **Status:** ✅ Enhanced beyond conversion spec

---

## Agent Integration Verification

**Verify workflow integrates correctly with Cinematographer agent.**

### Agent Menu Integration

- [ ] **Agent menu has workflow reference:**
  - Check: `/bmad/gsap-excellence/agents/gsap-cinematographer.md`
  - Look for: `<item cmd="*trends" workflow="{module_root}/workflows/research-trends/workflow.yaml">`
  - Agent menu item present

- [ ] **Agent persona aligns with workflow:**
  - Agent role: Cinematographer (trend discovery specialist)
  - Workflow role: Trend research using multi-source strategy
  - **Status:** [ ] Aligned [ ] Misaligned

---

## Regression Testing (Before/After Comparison)

**Verify enhancements don't break existing functionality.**

### Structural Preservation Check

- [ ] **Original XML tag patterns preserved:**
  - Step numbering still uses n="1", n="2" format
  - Action tags still used correctly
  - Ask tags still prompt for input

- [ ] **Original variable patterns preserved:**
  - {config_source} still used
  - {project-root} still used
  - {{variable_name}} still used for template placeholders

- [ ] **Original section organization preserved:**
  - Step 1: Context gathering
  - Step 2: Research (ENHANCED with mandatory gates)
  - Step 3: Trend analysis
  - Step 4: Report generation

### Enhancement Verification (What Changed)

**Document what was enhanced:**

- [x] **workflow.yaml enhancements:**
  - Added: version 2.0.0-premium
  - Added: deep_research_sections ['7.5']
  - Added: deep_research_base path
  - Added: inputs/outputs blocks
  - Added: success_criteria
  - Added: research_philosophy
  - Added: mcp_strategy
  - Added: quality_standards
  - Growth: 49 → 186 lines (+280%)

- [x] **instructions.md enhancements:**
  - Added: MANDATORY blocking research gate
  - Added: Deep-Research Section 7.5 integration
  - Added: 10+ verbatim quotes with citations
  - Added: 8 WebSearch queries (comprehensive)
  - Added: 3 Archon MCP queries
  - Added: Innovation level assessment
  - Added: Quality framework application
  - Removed: "skip" option from checkpoint
  - Growth: 419 → 1185 lines (+183%)

- [x] **template.md status:**
  - Maintained: 454 lines (already in 400-600+ range)
  - Enhanced: Minor framework references added

- [x] **checklist.md creation:**
  - Created: NEW FILE (0 → 400-700+ lines)
  - Purpose: Comprehensive validation protocol

---

## Final Quality Gate (All-or-Nothing Validation)

**Workflow is PREMIUM if ALL checkboxes below are TRUE:**

- [ ] **Research Enforcement Test: PASS**
  - Research gate CANNOT be skipped
  - Mandatory blocking checkpoint verified

- [ ] **File Path Verification: PASS**
  - All Deep-Research paths correct
  - No hallucinated or sidecar file references

- [ ] **Research Citation Audit: PASS**
  - 10+ verbatim quotes present
  - All quotes properly cited

- [ ] **Quality Metrics: PASS**
  - Total lines: 1500+ across all files
  - Per-file targets met or exceeded

- [ ] **Functionality Tests: PASS**
  - Workflow executes without errors
  - Research gate blocks correctly
  - Output file generated successfully

- [ ] **BMAD v6 Compliance: PASS**
  - All required sections present
  - XML tags correct
  - Variable syntax correct

- [ ] **Version: 2.0.0-premium**
  - Version field set correctly

---

## Verdict

**Check ONE:**

- [ ] ✅ **PREMIUM QUALITY - ALL VALIDATIONS PASSED**
  - Workflow meets ALL premium criteria
  - Research enforcement verified
  - Quality metrics exceeded
  - Production-ready

- [ ] ⚠️ **NEEDS MINOR FIXES - Most validations passed, minor issues found**
  - Document issues: _______________
  - Fix required before production

- [ ] ❌ **PATHETIC QUALITY - CRITICAL FAILURES**
  - Research gate can be skipped (CRITICAL FAILURE)
  - OR: Quality metrics not met
  - OR: Major functionality broken
  - **REQUIRES COMPLETE REBUILD**

---

## Validation Signature

**Validated By:** _______________________
**Date:** _______________________
**Verdict:** [ ] PREMIUM [ ] NEEDS FIXES [ ] PATHETIC

---

**If PREMIUM:** Workflow is production-ready. Deploy to module.
**If NEEDS FIXES:** Address documented issues, then re-validate.
**If PATHETIC:** Escalate to Cameron for complete rebuild guidance.
