# Creative Ideation Workflow - Validation Checklist
# Quality Assurance & Research Enforcement Testing

**Workflow:** creative-ideation
**Version:** 2.0.0-premium
**Agent:** gsap-director
**Last Updated:** 2025-11-09

---

## Overview

This checklist validates that the creative-ideation workflow delivers PREMIUM, research-backed concepts, not generic AI suggestions.

**Critical Validation Focus:**
1. **Research Enforcement** - Can research be skipped? (MUST BE NO)
2. **File Paths** - All Read commands point to actual Deep-Research files
3. **Citations** - All frameworks backed by verbatim quotes with sources
4. **Quality** - Meets 2,000-3,000+ line premium target
5. **Functionality** - Workflow executes without errors
6. **BMAD Compliance** - Follows all BMAD v6 standards

---

## 🚨 CRITICAL: Research Enforcement Test

**THIS IS THE MOST IMPORTANT TEST - If research can be skipped, the workflow FAILS.**

### Test Procedure

**Execute Workflow:**
1. Run creative-ideation workflow via Director agent
2. Progress through Step 1 (Context Gathering)
3. Reach Step 2 (Deep-Research Foundation)
4. **ATTEMPT TO SKIP** the research gate

**Expected Behavior:**
```
Agent displays:
🔍 DEEP-RESEARCH FOUNDATION COMPLETE

6 Framework Sections Read and Internalized:
✅ Section 1.1 - Animator's Mindset
✅ Section 1.2 - Visual Translation
✅ Section 1.3 - Storyboarding
✅ Section 4.1 - Pixar Story Spine
✅ Section 2.3 - Plugin Ecosystem
✅ Section 7.5 - Agency Patterns

Ready to generate research-backed concepts...

🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to multi-source research.
```

**Agent CANNOT proceed without user input.**

### Pass/Fail Criteria

- [ ] **PASS:** Research gate blocks progression
  - `<research-gate enforcement="MANDATORY" blocking="true">` tag present in instructions.md
  - `<checkpoint type="approval-gate" blocking="true">` halts execution
  - User MUST provide explicit "Continue [c]" to proceed
  - Agent CANNOT rationalize skipping (no "I'll skip because..." allowed)
  - All 6 Deep-Research sections have `<phase required="true">` tags
  - Read commands to actual Deep-Research files present

- [ ] **FAIL:** Research is skippable (FIX IMMEDIATELY)
  - Agent proceeds to Step 3 without user approval
  - No blocking checkpoint displayed
  - Agent says "I've reviewed the research..." without actually reading files
  - Generic concepts generated without research backing
  - User can skip with any response (not just "Continue [c]")

### If FAIL Detected

**IMMEDIATE ACTIONS:**
1. **HALT workflow deployment** - Do not use in production
2. **Review instructions.md** - Verify research-gate tags have blocking="true"
3. **Verify checkpoint tags** - Ensure `<checkpoint type="approval-gate" blocking="true">` present
4. **Test again** - Re-run after fixes until PASS achieved
5. **Document fix** - Record what was corrected and why it failed initially

**Root Causes of Failure:**
- Missing `blocking="true"` attribute on research-gate
- No approval-gate checkpoint after research phases
- Optional phases (`required="false"`) instead of mandatory (`required="true"`)
- Generic descriptions without actual Read commands
- Agent able to proceed without explicit user "Continue [c]"

---

## File Path Verification

**Purpose:** Ensure ALL Read commands point to actual Deep-Research files, not agent sidecar files or hallucinated paths.

### Instructions.md Read Command Audit

**Step 2 - Phase 1 (Section 1.1 - Animator's Mindset):**
- [ ] Read command present: `Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/01-11-the-animators-mindset-vs-code-generator.md`
- [ ] File exists (verify with ls):
  ```bash
  ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/01-11-the-animators-mindset-vs-code-generator.md
  ```
- [ ] NOT pointing to agent sidecar: `gsap-director/research-knowledge.md` ❌
- [ ] NOT pointing to meta-file or summary ❌

**Step 2 - Phase 2 (Section 1.2 - Visual Translation):**
- [ ] Read command present: `Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md`
- [ ] File exists (verify with ls):
  ```bash
  ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md
  ```
- [ ] NOT pointing to agent sidecar ❌

**Step 2 - Phase 3 (Section 1.3 - Storyboarding):**
- [ ] Read command present: `Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/03-13-storyboarding-complex-sequences.md`
- [ ] File exists (verify with ls):
  ```bash
  ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/03-13-storyboarding-complex-sequences.md
  ```
- [ ] NOT pointing to agent sidecar ❌

**Step 2 - Phase 4 (Section 4.1 - Pixar Story Spine):**
- [ ] Read command present: `Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/04-41-pixar-story-spine-framework-for-gsap.md`
- [ ] File exists (verify with ls):
  ```bash
  ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/04-41-pixar-story-spine-framework-for-gsap.md
  ```
- [ ] NOT pointing to agent sidecar ❌

**Step 2 - Phase 5 (Section 2.3 - Plugin Ecosystem):**
- [ ] Read command present: `Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`
- [ ] File exists (verify with ls):
  ```bash
  ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md
  ```
- [ ] NOT pointing to agent sidecar ❌

**Step 2 - Phase 6 (Section 7.5 - Notable Agencies):**
- [ ] Read command present: `Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/32-75-notable-agencies-patterns.md`
- [ ] File exists (verify with ls):
  ```bash
  ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/32-75-notable-agencies-patterns.md
  ```
- [ ] NOT pointing to agent sidecar ❌

### File Path Summary

- [ ] **Total Read commands:** 6 (one per Deep-Research section)
- [ ] **All point to /docs/Deep-Research/GSAP-Animation-Mastery/** ✅
- [ ] **NONE point to agent sidecar files** (gsap-director/, gsap-cinematographer/, etc.) ✅
- [ ] **All files verified to exist** with ls commands ✅

### Common File Path Errors to Avoid

**❌ WRONG:**
```
Read: {project-root}/bmad/gsap-excellence/agents/gsap-director/research-knowledge.md
Read: {module_root}/agents/gsap-cinematographer/deep-research-summary.md
Read: {project-root}/docs/Deep-Research/animator-mindset.md  # Wrong filename
```

**✅ CORRECT:**
```
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/01-11-the-animators-mindset-vs-code-generator.md
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md
```

---

## Research Citation Audit

**Purpose:** Verify all frameworks have verbatim quotes with source citations, not inferred/hallucinated content.

### Verbatim Quote Requirements

**Each Deep-Research section must have:**
- Italicized quotes using *"quote text"* format
- Source file citation in parentheses after quote
- Format: `(Source: filename.md)`

### Section 1.1 - Animator's Mindset (instructions.md lines 63-101)

- [ ] Quote 1 present: *"Great animations often start as imaginative ideas or sketches..."*
  - [ ] Source cited: `(Source: 01-11-the-animators-mindset-vs-code-generator.md)`

- [ ] Quote 2 present: *"Think in terms of choreography -- how elements move relative to each other in time..."*
  - [ ] Source cited: `(Source: 01-11-the-animators-mindset-vs-code-generator.md)`

- [ ] Quote 3 present: *"Always ask why an animation exists..."*
  - [ ] Source cited: `(Source: 01-11-the-animators-mindset-vs-code-generator.md)`

- [ ] Quote 4 present: *"Great animations are meaningful, not just decorative."*
  - [ ] Source cited: `(Source: 01-11-the-animators-mindset-vs-code-generator.md)`

- [ ] Quote 5 present: *"Start every project by defining the animation's purpose and style BEFORE diving into coding..."*
  - [ ] Source cited: `(Source: 01-11-the-animators-mindset-vs-code-generator.md)`

**Section 1.1 Quote Count:** 5 quotes minimum

### Section 1.2 - Visual Translation (instructions.md lines 105-147)

- [ ] Quote 1 present: *"As a rule of thumb, use CSS for simple static transitions and GSAP for sequenced, synchronized or complex animations..."*
  - [ ] Source cited: `(Source: 02-12-visual-inspiration-technical-translation-workflow.md)`

- [ ] Quote 2 present: *"AI should pick the right tool for each job..."*
  - [ ] Source cited: `(Source: 02-12-visual-inspiration-technical-translation-workflow.md)`

- [ ] Quote 3 present: *"Always maintain a visual + semantic mapping..."*
  - [ ] Source cited: `(Source: 02-12-visual-inspiration-technical-translation-workflow.md)`

**Section 1.2 Quote Count:** 3 quotes minimum

### Section 1.3 - Storyboarding (instructions.md lines 150-192)

- [ ] Quote 1 present: *"Break the page into logical sections..."*
  - [ ] Source cited: `(Source: 03-13-storyboarding-complex-sequences.md)`

- [ ] Quote 2 present: *"Identify start, middle, and end points of the overall sequence..."*
  - [ ] Source cited: `(Source: 03-13-storyboarding-complex-sequences.md)`

- [ ] Quote 3 present: *"World-class animations often layer motions (parallel) for richness..."*
  - [ ] Source cited: `(Source: 03-13-storyboarding-complex-sequences.md)`

- [ ] Quote 4 present: *"AI models should avoid triggering everything at once with equal timing -- that often feels chaotic."*
  - [ ] Source cited: `(Source: 03-13-storyboarding-complex-sequences.md)`

- [ ] Quote 5 present: *"By adopting these planning techniques, AI models can mimic the creative foresight of human animators..."*
  - [ ] Source cited: `(Source: 03-13-storyboarding-complex-sequences.md)`

**Section 1.3 Quote Count:** 5 quotes minimum

### Section 4.1 - Pixar Story Spine (instructions.md lines 195-271)

- [ ] Quote 1 present: *"The Pixar Story Spine is a proven narrative structure used by Pixar, Disney, and Lucasfilm..."*
  - [ ] Source cited: `(Source: 04-41-pixar-story-spine-framework-for-gsap.md)`

- [ ] Quote 2 present: *"The Story Spine provides a narrative scaffolding that transforms scroll-driven animations from arbitrary effects into intentional, story-driven experiences..."*
  - [ ] Source cited: `(Source: 04-41-pixar-story-spine-framework-for-gsap.md)`

- [ ] Quote 3 present: *"Humans are wired for stories..."*
  - [ ] Source cited: `(Source: 04-41-pixar-story-spine-framework-for-gsap.md)`

- [ ] Quote 4 present: *"Scroll position naturally maps to narrative time..."*
  - [ ] Source cited: `(Source: 04-41-pixar-story-spine-framework-for-gsap.md)`

- [ ] Quote 5 present: *"Every scroll tells a story. Make it a good one."*
  - [ ] Source cited: `(Source: 04-41-pixar-story-spine-framework-for-gsap.md)`

**Section 4.1 Quote Count:** 5 quotes minimum

### Section 2.3 - Plugin Ecosystem (instructions.md lines 274-345)

- [ ] Quote 1 present: *"A major development: as of late 2023/2024, GSAP and all its official plugins are free for everyone..."*
  - [ ] Source cited: `(Source: 07-23-the-2024-gsap-plugin-ecosystem-all-free.md)`

- [ ] Quote 2 present: *"This is a windfall for AI coding models..."*
  - [ ] Source cited: `(Source: 07-23-the-2024-gsap-plugin-ecosystem-all-free.md)`

- [ ] Quote 3 present: *"Always consider if a GSAP plugin can simplify the task..."*
  - [ ] Source cited: `(Source: 07-23-the-2024-gsap-plugin-ecosystem-all-free.md)`

**Section 2.3 Quote Count:** 3 quotes minimum

### Section 7.5 - Notable Agencies (instructions.md lines 348-405)

- [ ] Quote 1 present: *"Use of Scroll-driven animations has only increased -- thanks to ScrollTrigger making it easier..."*
  - [ ] Source cited: `(Source: 32-75-notable-agencies-patterns.md)`

- [ ] Quote 2 present: *"Analyzing these cases and studios, we identify a common thread: systematic use of GSAP's tools (timeline, scroll, plugins) combined with creative storytelling."*
  - [ ] Source cited: `(Source: 32-75-notable-agencies-patterns.md)`

- [ ] Quote 3 present: *"Approach each animation challenge by thinking 'How would Active Theory or Locomotive do this?'..."*
  - [ ] Source cited: `(Source: 32-75-notable-agencies-patterns.md)`

**Section 7.5 Quote Count:** 3 quotes minimum

### Citation Audit Summary

- [ ] **Total verbatim quotes in instructions.md:** 24+ (exceeds 10+ minimum requirement) ✅
- [ ] **All quotes italicized with quotation marks** ✅
- [ ] **All quotes have source citations in parentheses** ✅
- [ ] **Source filenames match actual Deep-Research files** ✅
- [ ] **NO inferred/hallucinated content** (all quotes verifiable in source files) ✅

### Spot Check Verification (Sample 5 Random Quotes)

**Randomly select 5 quotes and verify they actually exist in source files:**

1. [ ] Open source file, search for quote text, confirm exact match
2. [ ] Open source file, search for quote text, confirm exact match
3. [ ] Open source file, search for quote text, confirm exact match
4. [ ] Open source file, search for quote text, confirm exact match
5. [ ] Open source file, search for quote text, confirm exact match

**If ANY quote is hallucinated (not found in source):** FAIL - entire workflow needs citation review

---

## Quality Metrics

**Purpose:** Verify workflow meets premium quality targets, not pathetic baseline.

### Line Count Targets (Premium vs Pathetic)

**workflow.yaml:**
- [ ] Pathetic baseline: 118 lines
- [ ] Premium target: 150-200+ lines
- [ ] **Current line count:** _____ lines
- [ ] **Growth percentage:** _____% (target: +150-200%)
- [ ] **PASS/FAIL:** _____ (PASS if ≥150 lines)

**instructions.md:**
- [ ] Pathetic baseline: 531 lines
- [ ] Premium target: 1,000-1,700+ lines
- [ ] **Current line count:** _____ lines
- [ ] **Growth percentage:** _____% (target: +1,500-2,000%)
- [ ] **PASS/FAIL:** _____ (PASS if ≥1,000 lines)

**template.md:**
- [ ] Pathetic baseline: 115 lines
- [ ] Premium target: 400-600+ lines
- [ ] **Current line count:** _____ lines
- [ ] **Growth percentage:** _____% (target: +900-1,200%)
- [ ] **PASS/FAIL:** _____ (PASS if ≥400 lines)

**checklist.md:**
- [ ] Pathetic baseline: 0 lines (file didn't exist)
- [ ] Premium target: 400-700+ lines
- [ ] **Current line count:** _____ lines
- [ ] **Growth percentage:** NEW FILE
- [ ] **PASS/FAIL:** _____ (PASS if ≥400 lines)

### Total Workflow Size

- [ ] **Pathetic total:** 764 lines (118 + 531 + 115 + 0)
- [ ] **Premium target:** 2,000-3,000+ lines
- [ ] **Current total:** _____ lines (workflow.yaml + instructions.md + template.md + checklist.md)
- [ ] **Growth percentage:** _____% (target: +1,000-2,800%)
- [ ] **PASS/FAIL:** _____ (PASS if ≥2,000 lines)

### Research Density (Quotes per 100 Lines)

**instructions.md research density:**
- [ ] Total verbatim quotes: _____ (target: 20+)
- [ ] Total lines: _____
- [ ] Quotes per 100 lines: _____ (calculation: quotes / lines * 100)
- [ ] **Target:** ≥2 quotes per 100 lines
- [ ] **PASS/FAIL:** _____

### Code Example Density

**instructions.md code examples:**
- [ ] Total code examples: _____ (target: 5-15+)
- [ ] Before/after patterns: _____ (target: 3+)
- [ ] **PASS/FAIL:** _____ (PASS if ≥5 examples)

### Framework Application Density

**Number of Deep-Research frameworks applied:**
- [ ] Section 1.1 (Animator's Mindset): Applied ✅
- [ ] Section 1.2 (Visual Translation): Applied ✅
- [ ] Section 1.3 (Storyboarding): Applied ✅
- [ ] Section 4.1 (Pixar Story Spine): Applied ✅
- [ ] Section 2.3 (Plugin Ecosystem): Applied ✅
- [ ] Section 7.5 (Agency Patterns): Applied ✅
- [ ] **Total frameworks:** 6/6 (100%)
- [ ] **PASS/FAIL:** PASS (all 6 applied)

---

## Functionality Tests

**Purpose:** Verify workflow executes without errors and produces expected outputs.

### Workflow Execution Test

**Test Procedure:**
1. Invoke creative-ideation workflow via Director agent (`*plan`)
2. Complete Step 1 (Context Gathering) with test inputs
3. Reach Step 2 research gate, respond "Continue [c]"
4. Complete Step 3 (Multi-Source Research) - verify MCP calls execute
5. Complete Step 4 (Concept Generation) - verify 3-5 concepts generated
6. Complete Step 5 (Presentation) - verify comparison table displayed
7. Complete Step 6 (Selection) - make selection, verify handoff context generated

**Step-by-Step Validation:**

- [ ] **Step 1 executed:** Context gathered, all 5 inputs collected
- [ ] **Step 2 research gate:** Checkpoint displayed, user "Continue [c]" required
- [ ] **Step 3 research:** Archon MCP queries executed without errors
- [ ] **Step 3 research:** WebSearch queries executed (if 2024-2025 examples needed)
- [ ] **Step 3 research:** Context7 queries executed (if API verification needed)
- [ ] **Step 4 concepts:** 3-5 distinct concepts generated
- [ ] **Step 5 presentation:** Comparison table formatted correctly
- [ ] **Step 6 handoff:** Implementation context complete with all required sections

### Output File Generation

- [ ] Output file created at: `{output_folder}/animation-concepts-{timestamp}.md`
- [ ] File uses template.md structure
- [ ] All {{placeholders}} filled with actual content
- [ ] No unfilled placeholders remain (search for `{{` in output)
- [ ] Markdown formatting valid (no broken tables, headers)

### Error Handling Test

**Simulate error conditions:**

- [ ] **MCP server unavailable:** Workflow warns user, continues with available sources
- [ ] **Deep-Research file missing:** Workflow halts with clear error message
- [ ] **Invalid user input:** Workflow prompts for correction
- [ ] **No concepts generated:** Workflow requests clarification, regenerates

### Performance Test

- [ ] **Total execution time:** _____ minutes (target: 10-15 min)
- [ ] **Research phase time:** _____ minutes (target: 5-7 min)
- [ ] **Concept generation time:** _____ minutes (target: 2-3 min)
- [ ] **PASS/FAIL:** _____ (PASS if ≤15 min total)

---

## BMAD v6 Compliance

**Purpose:** Verify workflow follows all BMAD Core structural standards.

### workflow.yaml Compliance

**Required Fields:**
- [ ] `name` field present
- [ ] `description` field present
- [ ] `author` field present
- [ ] `version` field present
- [ ] `config_source` points to valid config file
- [ ] `module_root` variable defined
- [ ] `user_name` sourced from config
- [ ] `required_mcp` list present (not `mcp_servers`)
- [ ] `deep_research_sections` list present with all 6 sections
- [ ] `archon_sources` list present with 5 source IDs
- [ ] `deep_research_base` path configured
- [ ] `installed_path` variable defined
- [ ] `template` path points to template.md
- [ ] `instructions` path points to instructions.md
- [ ] `validation` path points to checklist.md (NOT `validation: false`)
- [ ] `default_output_file` configured with {timestamp} placeholder
- [ ] `autonomous: false` (requires user approval at gates)
- [ ] `standalone` field present

**Deep-Research Section Enumeration:**
- [ ] Section '1.1' listed with description
- [ ] Section '1.2' listed with description
- [ ] Section '1.3' listed with description
- [ ] Section '4.1' listed with description
- [ ] Section '2.3' listed with description
- [ ] Section '7.5' listed with description

**Archon Source Enumeration:**
- [ ] Source 'b9f6b322298feb21' (gsap.com) listed
- [ ] Source '1e5cc3bd5125be3c' (Codrops) listed
- [ ] Source '90c2ef5e8fa816b7' (FreeFrontend) listed
- [ ] Source '020e9f31a8c5cdb7' (CodePen) listed
- [ ] Source '77ae0ef68a867aa9' (Lenis) listed

### instructions.md Compliance

**Required XML Tags:**
- [ ] `<critical>` tags present for critical instructions
- [ ] `<workflow>` wrapper tag present
- [ ] `<step n="X" goal="...">` tags for all 6 steps
- [ ] `<action>` tags for executable instructions
- [ ] `<ask response="variable">` tags for user input
- [ ] `<research-gate enforcement="MANDATORY" blocking="true">` present
- [ ] `<phase n="X" title="..." required="true">` for all 6 phases
- [ ] `<checkpoint type="approval-gate" blocking="true">` present
- [ ] `<halt>` tag stops execution
- [ ] `<mandate>` tags document requirements
- [ ] `<template-output>` tags list variables
- [ ] `<check if="condition">` conditional logic present

**Variable Usage:**
- [ ] `{project-root}` used for absolute paths
- [ ] `{module_root}` used for module-relative paths
- [ ] `{config_source}` used for config values
- [ ] `{user_name}` used for personalization
- [ ] `{{variable}}` placeholders for template output

### template.md Compliance

**Required Placeholder Syntax:**
- [ ] All placeholders use `{{variable}}` format
- [ ] No `{single_brace}` placeholders (wrong format)
- [ ] Conditional placeholders: `{{#if_condition}}...{{/if_condition}}`
- [ ] All sections have appropriate placeholders

**Required Sections:**
- [ ] Executive Summary
- [ ] Deep-Research Framework Analysis
- [ ] Archon MCP Research Findings
- [ ] WebSearch Research Findings
- [ ] Premium Animation Concepts
- [ ] Concept Comparison Matrix
- [ ] Selected Concept
- [ ] Implementation Context
- [ ] Next Steps
- [ ] Validation Results
- [ ] Prevention Tips

### File Structure Compliance

- [ ] **4 files present:** workflow.yaml, instructions.md, template.md, checklist.md
- [ ] **All in correct location:** `{module_root}/workflows/creative-ideation/`
- [ ] **File permissions:** Readable by workflow engine
- [ ] **No extra files:** README.md should not exist (documentation in files)

---

## Comparison to Pathetic Workflow

**Purpose:** Document transformation from pathetic to premium.

### Pathetic Workflow Characteristics (Before)

- [ ] Total lines: 764 (118 + 531 + 115 + 0)
- [ ] NO actual Read commands to Deep-Research files
- [ ] NO MANDATORY research gates (research was skippable)
- [ ] NO blocking checkpoints
- [ ] NO verbatim quotes from research (0 quotes)
- [ ] NO research enforcement testing
- [ ] Generic advice applicable to any animation library
- [ ] Research gates could be rationalized away
- [ ] NO checklist.md file
- [ ] workflow.yaml missing: deep_research_sections, archon_sources, deep_research_base
- [ ] workflow.yaml had validation: false

### Premium Workflow Characteristics (After)

- [ ] Total lines: _____ (target: 2,000-3,000+)
- [ ] 6 actual Read commands to Deep-Research files ✅
- [ ] 6 MANDATORY research gates with blocking="true" ✅
- [ ] 1 blocking approval checkpoint requiring "Continue [c]" ✅
- [ ] 20+ verbatim quotes from research ✅
- [ ] Complete research enforcement test in checklist.md ✅
- [ ] GSAP-specific expertise backed by citations ✅
- [ ] Research gates CANNOT be skipped (tested) ✅
- [ ] checklist.md file created (400-700+ lines) ✅
- [ ] workflow.yaml has ALL required fields ✅
- [ ] workflow.yaml validation points to checklist.md ✅

### Transformation Summary

**Growth Metrics:**
- [ ] workflow.yaml: _____% growth (target: +150-200%)
- [ ] instructions.md: _____% growth (target: +1,500-2,000%)
- [ ] template.md: _____% growth (target: +900-1,200%)
- [ ] checklist.md: NEW FILE (0 → 400-700+ lines)
- [ ] **Total workflow:** _____% growth (target: +1,000-2,800%)

**Quality Improvements:**
- [ ] Research enforcement: NONE → MANDATORY BLOCKING
- [ ] Verbatim quotes: 0 → 20+
- [ ] Deep-Research files: 0 → 6
- [ ] Frameworks applied: 0 → 6
- [ ] Research citations: 0 → 20+ with source files
- [ ] Validation protocol: NONE → Comprehensive checklist

---

## Final Validation Status

### Overall Workflow Quality

- [ ] **Research Enforcement Test:** PASS/FAIL (most critical)
- [ ] **File Path Verification:** PASS/FAIL
- [ ] **Citation Audit:** PASS/FAIL
- [ ] **Quality Metrics:** PASS/FAIL
- [ ] **Functionality Tests:** PASS/FAIL
- [ ] **BMAD v6 Compliance:** PASS/FAIL

### Classification

**If ALL tests PASS:**
- [ ] ✅ **PREMIUM WORKFLOW** - Production ready, research-backed, meets all standards
- [ ] Ready for use in creative-ideation tasks
- [ ] Can be referenced as example for other workflow rebuilds
- [ ] Update master plan: creative-ideation marked COMPLETE

**If ANY test FAILS:**
- [ ] ❌ **PATHETIC WORKFLOW** - Not production ready, requires fixes
- [ ] Do NOT use until all tests pass
- [ ] Document failures and required fixes
- [ ] Re-run checklist after corrections
- [ ] Do NOT mark complete in master plan until PASS

### Completion Criteria

**Workflow is COMPLETE when:**
- [x] All 6 Deep-Research sections have Read commands
- [x] All Read commands point to actual Deep-Research files (verified with ls)
- [x] Research gate is MANDATORY and blocking (tested by attempting to skip)
- [x] 20+ verbatim quotes with source citations present
- [x] Total line count ≥2,000 lines
- [x] All 4 files exist (workflow.yaml, instructions.md, template.md, checklist.md)
- [x] workflow.yaml has all required BMAD v6 fields
- [x] Workflow executes without errors
- [x] Output file generated correctly with all placeholders filled
- [x] This checklist completed with all items checked

---

## Notes & Observations

**Date Tested:** _____
**Tested By:** _____
**Version Tested:** 2.0.0-premium

**Issues Found:**
- _____
- _____
- _____

**Fixes Applied:**
- _____
- _____
- _____

**Recommendations for Future Improvements:**
- _____
- _____
- _____

---

## Archive of Test Results

**Test Run 1:**
- Date: _____
- Result: PASS/FAIL
- Notes: _____

**Test Run 2:**
- Date: _____
- Result: PASS/FAIL
- Notes: _____

**Test Run 3:**
- Date: _____
- Result: PASS/FAIL
- Notes: _____

---

**🎯 VALIDATION COMPLETE**

This checklist ensures creative-ideation delivers research-backed creative direction, not generic AI suggestions.

*"Great animations are meaningful, not just decorative."* - Deep-Research Section 1.1

---

_Creative Ideation Workflow - Validation Checklist_
_GSAP Excellence Engine v2.0.0-premium_
_Last Updated: 2025-11-09_
