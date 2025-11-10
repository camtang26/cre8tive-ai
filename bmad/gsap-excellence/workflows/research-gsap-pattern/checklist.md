# Research GSAP Pattern - Validation Checklist

**Workflow:** research-gsap-pattern
**Agent:** Cinematographer (Research Specialist)
**Purpose:** Validate research quality, enforcement gates, and BMAD v6 compliance

---

## CRITICAL: Research Enforcement Test (MANDATORY)

**Can research be skipped?**

This is the MOST IMPORTANT validation test. The entire purpose of this workflow rebuild was to make research MANDATORY and BLOCKING.

### Test Procedure:

1. **Execute the workflow** with a test pattern (e.g., "parallax scrolling")
2. **At Step 2** (Deep-Research Knowledge Load), **attempt to skip the research gate**
3. **Verify blocking behavior**:
   - [ ] **PASS:** Agent CANNOT proceed without user typing "c" to continue
   - [ ] **PASS:** Research gate displays blocking message: "YOU CANNOT SKIP THIS GATE"
   - [ ] **PASS:** Workflow HALTS at `<checkpoint type="approval-gate" blocking="true">`
   - [ ] **PASS:** Agent cannot rationalize skipping with phrases like "research already known"

4. **If ANY of the following occur → FAIL immediately:**
   - [ ] **FAIL:** Agent proceeds to Step 3 without user confirmation
   - [ ] **FAIL:** Agent says "I'll skip research since I already know about this pattern"
   - [ ] **FAIL:** Research gate can be bypassed or ignored
   - [ ] **FAIL:** No blocking checkpoint appears

**Result:**
- [ ] **✅ PASS** - Research gate is MANDATORY and BLOCKING (workflow is PREMIUM)
- [ ] **❌ FAIL** - Research can be skipped (workflow is PATHETIC - rebuild immediately)

**If FAIL:** Stop all validation. Fix workflow before proceeding. This is a **CRITICAL FAILURE**.

---

## Part 1: File Path Verification

All `Read:` commands in instructions.md MUST point to actual Deep-Research files, NOT agent sidecar files.

### Deep-Research File Path Audit:

**Performance Sections (5.1-5.6):**
- [ ] Section 5.1: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/18-51-animate-efficient-properties-the-gpu-rule.md` (EXISTS)
- [ ] Section 5.2: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/19-52-keep-the-main-thread-free-avoid-long-tasks.md` (EXISTS)
- [ ] Section 5.3: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md` (EXISTS)
- [ ] Section 5.4: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/21-54-memory-management-garbage-collection.md` (EXISTS)
- [ ] Section 5.5: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md` (EXISTS)
- [ ] Section 5.6: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/23-56-when-to-use-webglcanvas.md` (EXISTS)

**Accessibility Sections (6.1-6.4):**
- [ ] Section 6.1: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md` (EXISTS)
- [ ] Section 6.2: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/25-62-other-motion-accessibility-considerations.md` (EXISTS)
- [ ] Section 6.3: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/26-63-styling-considerations-for-motion.md` (EXISTS)
- [ ] Section 6.4: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/27-64-educate-users-and-offer-control.md` (EXISTS)

**Common Pitfalls (8.1-8.10):**
- [ ] Pitfall 8.1: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/34-pitfall-81-forgetting-to-clean-up-memory-leaks-double-animations.md` (EXISTS)
- [ ] Pitfall 8.2: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/35-pitfall-82-animating-the-wrong-properties-no-gpu-acceleration.md` (EXISTS)
- [ ] Pitfall 8.3: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/36-pitfall-83-ignoring-in-from-tweens.md` (EXISTS)
- [ ] Pitfall 8.4: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/37-pitfall-84-multiple-scrolltriggers-on-the-same-elements-property.md` (EXISTS)
- [ ] Pitfall 8.5: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/38-pitfall-85-not-using-leading-to-conflict.md` (EXISTS)
- [ ] Pitfall 8.6: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/39-pitfall-86-overlooking-refresh-after-content-load.md` (EXISTS)
- [ ] Pitfall 8.7: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/40-pitfall-87-use-of-deprecated-or-old-syntax.md` (EXISTS)
- [ ] Pitfall 8.8: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/41-pitfall-88-uncontrolled-infinite-loops.md` (EXISTS)
- [ ] Pitfall 8.9: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-89-not-testing-on-different-devices.md` (EXISTS)
- [ ] Pitfall 8.10: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/43-pitfall-810-misusing-vs-causing-flicker.md` (EXISTS)

**File Path Verification Command:**
```bash
# Run this to verify all 20 files exist:
for file in 18-51 19-52 20-53 21-54 22-55 23-56 24-61 25-62 26-63 27-64 34-pitfall-81 35-pitfall-82 36-pitfall-83 37-pitfall-84 38-pitfall-85 39-pitfall-86 40-pitfall-87 41-pitfall-88 42-pitfall-89 43-pitfall-810; do
  ls -lh /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/$file*.md 2>&1 | grep -v "cannot access"
done
```

**Result:**
- [ ] **✅ ALL 20 files verified** - File paths are correct
- [ ] **❌ ANY files missing** - Fix file paths immediately

---

## Part 2: Research Citation Audit

Count verbatim quotes with source citations in workflow output (research report).

### Citation Quality Check:

**Minimum Requirements:**
- [ ] **10+ verbatim quotes** from Deep-Research in generated report
- [ ] **Each quote** uses italics + quotation marks format: *"quote text"*
- [ ] **Each quote** has source citation in parentheses: (Source: filename.md)
- [ ] **Section numbers** referenced correctly (e.g., Section 5.1, not Section 5)

**Spot Check 5 Random Citations:**

1. **Citation #1:**
   - [ ] Quote is verbatim from source file (verified by reading source)
   - [ ] Source file cited correctly
   - [ ] Quote is relevant to pattern being researched

2. **Citation #2:**
   - [ ] Quote is verbatim from source file
   - [ ] Source file cited correctly
   - [ ] Quote is relevant to pattern

3. **Citation #3:**
   - [ ] Quote is verbatim from source file
   - [ ] Source file cited correctly
   - [ ] Quote is relevant to pattern

4. **Citation #4:**
   - [ ] Quote is verbatim from source file
   - [ ] Source file cited correctly
   - [ ] Quote is relevant to pattern

5. **Citation #5:**
   - [ ] Quote is verbatim from source file
   - [ ] Source file cited correctly
   - [ ] Quote is relevant to pattern

**Result:**
- [ ] **✅ 10+ citations** with proper format and verified accuracy
- [ ] **❌ <10 citations OR inaccurate** - Research depth insufficient

---

## Part 3: Quality Metrics

### Line Count Targets:

**Total Lines (ALL 4 files):**
- [ ] **Target: 2,000-3,000+** lines total
- [ ] **Actual:** ________ lines
- [ ] **Growth vs Pathetic:** ________ % increase

**Per-File Breakdown:**

**workflow.yaml:**
- [ ] **Target: 150-200+** lines
- [ ] **Actual:** ________ lines (count with `wc -l workflow.yaml`)
- [ ] **Growth:** ________ % vs baseline

**instructions.md:**
- [ ] **Target: 1,000-1,700+** lines
- [ ] **Actual:** ________ lines (count with `wc -l instructions.md`)
- [ ] **Growth:** ________ % vs baseline

**template.md:**
- [ ] **Target: 400-600+** lines
- [ ] **Actual:** ________ lines (count with `wc -l template.md`)
- [ ] **Growth:** ________ % vs baseline

**checklist.md:**
- [ ] **Target: 400-700+** lines (THIS FILE)
- [ ] **Actual:** ________ lines (count with `wc -l checklist.md`)
- [ ] **Growth:** NEW file (0 → ________ lines)

**Quick Line Count Command:**
```bash
cd /home/cameronai/projects/cre8tive-website-1006/bmad/gsap-excellence/workflows/research-gsap-pattern/
wc -l workflow.yaml instructions.md template.md checklist.md | tail -1
```

**Result:**
- [ ] **✅ 2,000-3,000+ total lines** - Premium quality achieved
- [ ] **❌ <2,000 total lines** - Insufficient depth, rebuild required

---

## Part 4: BMAD v6 Compliance

### workflow.yaml Compliance:

- [ ] **name:** field present and correct
- [ ] **description:** comprehensive (100+ chars)
- [ ] **author:** "GSAP Excellence Engine - The Cinematographer"
- [ ] **version:** "2.0.0-premium" or higher
- [ ] **config_source:** `{project-root}/bmad/gsap-excellence/config.yaml`
- [ ] **required_mcp:** Lists archon, perplexity (minimum)
- [ ] **deep_research_sections:** Lists all 20 sections (5.1-5.6, 6.1-6.4, 8.1-8.10)
- [ ] **archon_sources:** Lists 5 priority sources with source IDs
- [ ] **deep_research_base:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery`
- [ ] **installed_path:** Correct module path
- [ ] **template, instructions, validation:** File paths configured
- [ ] **default_output_file:** Uses {{date}} placeholder
- [ ] **autonomous:** false (requires user approval at gates)
- [ ] **standalone:** true
- [ ] **web_bundle:** Complete configuration with all 4 files listed

### instructions.md Compliance:

- [ ] **<workflow>** root tag present
- [ ] **Step numbering:** n="1", n="2", etc. with goal attributes
- [ ] **<research-gate enforcement="MANDATORY" blocking="true">** present in Step 2
- [ ] **<checkpoint type="approval-gate" blocking="true">** present after research phases
- [ ] **<mandate>** tag explaining agent cannot rationalize skipping
- [ ] **20 <phase>** tags for all Deep-Research sections
- [ ] **Read:** commands for all 20 Deep-Research files
- [ ] **<template-output>** tags for workflow variables
- [ ] **<ask>** tags with response attributes
- [ ] **<action>** tags for systematic steps

### template.md Compliance:

- [ ] **{{placeholder}}** syntax for all dynamic content
- [ ] **Sections:** Executive Summary, Pattern Overview, Deep-Research Analysis, Archon Findings, WebSearch Examples, Implementation Approaches, Code Examples (3-5), Best Practices, Browser Compat, Technical Requirements, Next Steps
- [ ] **Deep-Research citations** documented in template structure
- [ ] **Archon sources** documented with source IDs
- [ ] **All 10 pitfalls** have placeholders
- [ ] **prefers-reduced-motion** documented as MANDATORY

### checklist.md Compliance (THIS FILE):

- [ ] **Research Enforcement Test** is first and CRITICAL
- [ ] **File Path Verification** for all 20 Deep-Research files
- [ ] **Citation Audit** with spot-check protocol
- [ ] **Quality Metrics** with line count targets
- [ ] **BMAD Compliance** verification
- [ ] **Functionality Tests** protocol
- [ ] **Premium Workflow Criteria** checklist

**Result:**
- [ ] **✅ ALL compliance checks pass** - BMAD v6 compliant
- [ ] **❌ ANY compliance failures** - Fix before marking complete

---

## Part 5: Functionality Tests

Execute the workflow end-to-end and verify all steps work correctly.

### Test Execution:

**Test Pattern:** "parallax scrolling" (or any GSAP pattern)

**Step-by-Step Verification:**

- [ ] **Step 1:** Pattern scope definition
  - [ ] Agent greets user correctly
  - [ ] pattern_name input collected
  - [ ] use_case input collected (optional)
  - [ ] complexity_preference input collected
  - [ ] Research strategy displayed

- [ ] **Step 2:** Deep-Research Knowledge Load (CRITICAL)
  - [ ] **Research gate appears** with MANDATORY warning
  - [ ] **20 phases load** (Performance 5.1-5.6, Accessibility 6.1-6.4, Pitfalls 8.1-8.10)
  - [ ] **Each phase** displays Deep-Research principle
  - [ ] **Checkpoint appears** with blocking="true"
  - [ ] **User must type "c"** to continue (gate BLOCKS)
  - [ ] **Summary displays** after checkpoint

- [ ] **Step 3:** Archon MCP Research
  - [ ] **5 sources queried** (gsap.com, Codrops, FreeFrontend, CodePen, Lenis)
  - [ ] **rag_search_knowledge_base** calls execute
  - [ ] **rag_search_code_examples** calls execute
  - [ ] **Findings documented** with source IDs

- [ ] **Step 4:** WebSearch Premium Examples
  - [ ] **WebSearch queries** execute (Awwwards, premium 2024-2025)
  - [ ] **2-4 premium examples** found and documented
  - [ ] **URLs, awards, years** captured

- [ ] **Step 5:** Context7 (if needed)
  - [ ] **Skipped if not needed** (Archon sufficient)
  - [ ] **OR used for API verification** if needed

- [ ] **Step 6:** Technical Approach Synthesis
  - [ ] **3 complexity levels** (Simple, Intermediate, Advanced)
  - [ ] **GSAP features** identified
  - [ ] **Technical requirements** documented

- [ ] **Step 7:** Code Examples
  - [ ] **3-5 examples** extracted
  - [ ] **Annotated** with performance notes
  - [ ] **prefers-reduced-motion** fallback in EVERY example
  - [ ] **Source citations** for each example

- [ ] **Step 8:** Best Practices Documentation
  - [ ] **6 performance** best practices (from Sections 5.1-5.6)
  - [ ] **5 accessibility** requirements (from Sections 6.1-6.4)
  - [ ] **10 pitfalls** documented (from Sections 8.1-8.10)
  - [ ] **Code quality** standards
  - [ ] **Browser compatibility** notes

- [ ] **Step 9:** Premium Inspiration
  - [ ] **2-4 premium examples** curated
  - [ ] **Takeaways** for pattern

- [ ] **Step 10:** Research Report Generation
  - [ ] **template.md loaded** and populated
  - [ ] **Report saved** to default_output_file
  - [ ] **Summary presented** to user
  - [ ] **Next steps** offered

- [ ] **Step 11:** Next Action (optional)
  - [ ] **User choice** presented (Implement / Explore / Done)
  - [ ] **Workflow invocation** works if user selects "Implement"

### Output File Verification:

- [ ] **Report file created** at correct path (check with `ls`)
- [ ] **Report file readable** (open and verify)
- [ ] **All template sections populated** (no {{empty_placeholders}})
- [ ] **Citations present** (10+ verbatim quotes)
- [ ] **Code examples present** (3-5 examples)
- [ ] **Archon sources cited** (source IDs visible)
- [ ] **Premium examples listed** (URLs + takeaways)

**Result:**
- [ ] **✅ Workflow executes end-to-end** without errors
- [ ] **❌ ANY step fails** - Debug and fix before marking complete

---

## Part 6: Premium Workflow Criteria

Final assessment: Is this workflow PREMIUM or PATHETIC?

### Premium Criteria (ALL must be true):

**Structural Requirements:**
- [ ] **Total line count:** 2,000-3,000+ lines across all files
- [ ] **workflow.yaml:** 150-200+ lines
- [ ] **instructions.md:** 1,000-1,700+ lines
- [ ] **template.md:** 400-600+ lines
- [ ] **checklist.md:** 400-700+ lines (THIS FILE)

**Content Requirements:**
- [ ] **10+ verbatim quotes** from Deep-Research
- [ ] **Source citations** in parentheses after every quote
- [ ] **GSAP-specific expertise** (not generic animation advice)
- [ ] **5+ code examples** (3 minimum, 5 ideal)
- [ ] **Specific metrics** from research (60fps, 16ms, etc.)

**Research Enforcement Requirements:**
- [ ] **MANDATORY research gates** with blocking="true"
- [ ] **Research gates CANNOT be skipped** (verified by test)
- [ ] **Approval-gate checkpoints** require user input ("c" to continue)
- [ ] **Agent cannot rationalize** skipping
- [ ] **All 20 Deep-Research files** loaded via Read commands
- [ ] **File paths point** to actual Deep-Research (NOT agent sidecars)

**Methodology Requirements:**
- [ ] **Created ONE AT A TIME** (not batched with other workflows)
- [ ] **Backed by conversion spec** reading (or equivalent analysis)
- [ ] **ALL Deep-Research sections** applied to pattern
- [ ] **Built from actual research** extraction (not inference)
- [ ] **Research enforcement tested** and verified
- [ ] **prefers-reduced-motion MANDATORY** in all code examples

**BMAD v6 Compliance:**
- [ ] **workflow.yaml** has all required sections
- [ ] **deep_research_sections** lists all 20 sections
- [ ] **deep_research_base** path configured
- [ ] **required_mcp** lists archon + perplexity minimum
- [ ] **autonomous: false** (requires user approval)
- [ ] **web_bundle** configured with all 4 files

### Final Verdict:

Count checkboxes:
- **Premium criteria met:** ________ / 30
- **Required for PREMIUM:** 30 / 30 (100%)

**Is this workflow PREMIUM?**
- [ ] **✅ YES** - ALL 30 criteria met (workflow is PREMIUM)
- [ ] **❌ NO** - Some criteria failed (workflow is PATHETIC, rebuild required)

**If NO:** Document which criteria failed and fix before marking complete.

---

## Part 7: Anti-Pattern Detection

Check for common mistakes that indicate a PATHETIC workflow.

### Pathetic Indicators (NONE should be true):

- [ ] **❌ Research can be skipped** (user can bypass gates)
- [ ] **❌ No verbatim quotes** from Deep-Research
- [ ] **❌ Generic advice** that could apply to any animation library
- [ ] **❌ No source citations** in parentheses
- [ ] **❌ No code examples** or <3 examples
- [ ] **❌ No specific metrics** (vague "good performance")
- [ ] **❌ File paths point** to agent sidecar files
- [ ] **❌ No research enforcement test** in checklist
- [ ] **❌ Agent can rationalize** skipping research
- [ ] **❌ No blocking checkpoints** in research gate
- [ ] **❌ Missing Deep-Research sections** (less than 20 loaded)
- [ ] **❌ No prefers-reduced-motion** documentation
- [ ] **❌ Missing pitfall checks** (less than 10 documented)
- [ ] **❌ Created in batch** with other workflows
- [ ] **❌ Total line count <2,000** lines

**Result:**
- [ ] **✅ ZERO pathetic indicators** - Workflow is clean
- [ ] **❌ ANY pathetic indicators** - Fix immediately

---

## Part 8: Integration Testing

Verify workflow integrates correctly with other GSAP Excellence workflows.

### Integration Points:

**Feeds Into:**

- [ ] **implement-from-pattern** (VFX Artist)
  - [ ] Research report path passed correctly
  - [ ] Pattern name passed correctly
  - [ ] Workflow invocation works from Step 11

- [ ] **creative-ideation** (Director)
  - [ ] Research can enrich concept generation
  - [ ] Pattern discoveries feed into ideation

- [ ] **Pattern Library**
  - [ ] Successful implementations can be harvested
  - [ ] Pattern metadata captured correctly

**Invoked By:**

- [ ] **Cinematographer agent** menu (*research command)
  - [ ] Workflow launches from agent menu
  - [ ] Agent persona aligns with workflow
  - [ ] Menu description matches workflow capability

**Context Passed Forward:**

- [ ] **Research report** (comprehensive documentation)
- [ ] **Code examples** (3-5 production-ready examples)
- [ ] **Performance guidelines** (60fps targets)
- [ ] **Accessibility requirements** (prefers-reduced-motion MANDATORY)
- [ ] **Premium inspiration** (award-winning references)
- [ ] **Browser compatibility** notes

**Result:**
- [ ] **✅ ALL integrations work** - Workflow connects correctly
- [ ] **❌ ANY integration failures** - Fix before deployment

---

## Part 9: Agent Alignment Check

Verify workflow aligns with Cinematographer agent persona and capabilities.

### Cinematographer Agent Config:

- [ ] **Read agent file:** `/bmad/gsap-excellence/agents/gsap-cinematographer.md`
- [ ] **Agent role:** Research specialist (matches workflow purpose)
- [ ] **Agent menu:** Includes *research command linking to this workflow
- [ ] **Agent knowledge:** References Deep-Research (aligns with workflow research gates)
- [ ] **Agent sidecar:** Knowledge summary (NOT used as primary research source)
- [ ] **Persona lightweight:** Agent is role + character, workflow has detailed protocols

### Alignment Verification:

- [ ] **No contradictions** between agent persona and workflow instructions
- [ ] **Agent references** correct Deep-Research sections
- [ ] **Workflow goals** match agent expertise (multi-source research)
- [ ] **Division of labor:** Agent provides context, workflow provides systematic execution
- [ ] **Menu trigger** (*research) launches workflow correctly

**Result:**
- [ ] **✅ Agent and workflow aligned** - No conflicts
- [ ] **❌ Misalignment detected** - Document conflicts and propose fixes

---

## Part 10: Documentation Quality

Verify all documentation is complete and accurate.

### Workflow Documentation:

- [ ] **workflow.yaml description:** Comprehensive, 100+ chars
- [ ] **instructions.md:** Clear step-by-step protocol
- [ ] **template.md:** Complete report structure
- [ ] **checklist.md (THIS FILE):** Comprehensive validation
- [ ] **Comments:** Explain WHY, not just WHAT
- [ ] **Examples:** Annotated with performance + accessibility notes
- [ ] **Citations:** All sources documented
- [ ] **Integration notes:** Feeds into / invoked by documented

### User-Facing Documentation:

- [ ] **Research report output:** Professional quality
- [ ] **Code examples:** Production-ready and annotated
- [ ] **Best practices:** Research-backed, not generic
- [ ] **Next steps:** Clear actionable guidance
- [ ] **Implementation checklist:** Complete and practical

**Result:**
- [ ] **✅ Documentation complete and accurate** - Users can understand and use workflow
- [ ] **❌ Documentation gaps** - Fill gaps before marking complete

---

## Completion Criteria

**This workflow is COMPLETE and PREMIUM when:**

1. **✅ Research Enforcement Test:** PASS (gate is MANDATORY and BLOCKING)
2. **✅ File Path Verification:** ALL 20 Deep-Research files verified
3. **✅ Citation Audit:** 10+ verbatim quotes with sources
4. **✅ Quality Metrics:** 2,000-3,000+ total lines
5. **✅ BMAD v6 Compliance:** ALL compliance checks pass
6. **✅ Functionality Tests:** Workflow executes end-to-end without errors
7. **✅ Premium Criteria:** 30/30 criteria met (100%)
8. **✅ Anti-Pattern Detection:** ZERO pathetic indicators
9. **✅ Integration Testing:** ALL integrations work
10. **✅ Agent Alignment:** Agent and workflow aligned
11. **✅ Documentation Quality:** Complete and accurate

**Final Checklist:**
- [ ] ALL 11 completion criteria above are checked ✅
- [ ] Research enforcement verified (most critical)
- [ ] Total line count meets target (2,000-3,000+)
- [ ] No pathetic indicators detected
- [ ] Workflow tested end-to-end successfully
- [ ] Ready to mark as PREMIUM and COMPLETE

---

## Notes and Issues Log

**Document any issues found during validation:**

| Issue | Severity | Status | Resolution |
|-------|----------|--------|------------|
|       |          |        |            |
|       |          |        |            |
|       |          |        |            |

---

**Validation Date:** __________
**Validated By:** __________
**Result:** [ ] PREMIUM [ ] PATHETIC [ ] NEEDS WORK

---

**END OF CHECKLIST**

🎬 **"This checklist ensures research quality. No shortcuts, no skipping. Research must be MANDATORY."** - The Cinematographer
