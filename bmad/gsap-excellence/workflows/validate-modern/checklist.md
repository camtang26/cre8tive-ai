# validate-modern Workflow - Validation Checklist
**Research-Backed Quality Assurance**

**Workflow:** validate-modern v2.0.0-premium
**Purpose:** Ensure premium workflow meets all research enforcement and quality standards
**Validation Framework:** Deep-Research Sections 2.1, 2.3, 2.5

---

## CRITICAL: Research Enforcement Test (MUST PASS)

**Purpose:** Verify that research cannot be skipped and gates are truly MANDATORY

**Test Protocol:**

### Test 1: Research Gate is BLOCKING

**Expected Behavior:**
- ✅ Step 1 contains `<critical>🚨 MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP 🚨</critical>`
- ✅ Research gate requires reading 3 Deep-Research files (Sections 2.1, 2.3, 2.5)
- ✅ Checkpoint includes `<ask>` tag requiring user input "Continue"
- ✅ Agent CANNOT rationalize skipping - user input REQUIRED

**Verification Steps:**

- [ ] **Check instructions.md Step 1** contains blocking research gate
  - File: `{installed_path}/instructions.md`
  - Search for: `MANDATORY RESEARCH CHECKPOINT`
  - Expected: Found in Step 1

- [ ] **Verify Read commands** point to actual Deep-Research files
  - Section 2.1: `{deep_research_base}/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
  - Section 2.3: `{deep_research_base}/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`
  - Section 2.5: `{deep_research_base}/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
  - Expected: ALL files exist and paths are correct

- [ ] **Verify checkpoint approval gate** is present
  - Search for: `<ask>🔬 Research gate loaded. Type "Continue" to proceed`
  - Expected: Requires explicit user continuation
  - Expected: `<critical>User MUST type "Continue" - agent cannot rationalize skipping this checkpoint</critical>`

**PASS Criteria:**
- ✅ Research gate is MANDATORY (explicitly marked as blocking)
- ✅ All 3 Deep-Research sections must be read
- ✅ User input required to proceed (cannot skip)
- ✅ Agent instructions forbid rationalizing skip

**FAIL Criteria:**
- ❌ Research gate can be skipped
- ❌ Research loading is optional
- ❌ No explicit user continuation required
- ❌ Agent can proceed without loading research

**If FAILED:** Workflow is PATHETIC - must rebuild instructions.md Step 1

---

### Test 2: Research Gates Are NOT Bypassable

**Test Scenario:** Attempt to skip research loading

**Expected Behavior:**
- ❌ Agent cannot proceed to Step 2 without completing Step 1
- ❌ Agent cannot rationalize "I'll load research later"
- ❌ Agent cannot infer what research "should say" without reading files

**Verification Steps:**

- [ ] **Check Step 1 has explicit warning**
  - Search for: "The pathetic validate-modern workflow had ZERO research backing"
  - Expected: Context explains WHY research is mandatory

- [ ] **Check Step 2 requires Step 1 completion**
  - Step 2 should reference validation frameworks from Step 1
  - Step 2 should use research insights from loaded sections

- [ ] **Verify template-output** saves research confirmation
  - Search for: `<template-output>research_loaded_confirmation`
  - Expected: Step 1 outputs confirmation that research was loaded

**PASS Criteria:**
- ✅ Clear explanation of why research is mandatory
- ✅ Step 2 depends on Step 1 completion
- ✅ Research confirmation is recorded

**FAIL Criteria:**
- ❌ No explanation for research requirement
- ❌ Steps are independent (can skip Step 1)
- ❌ No confirmation of research loading

---

## File Path Verification

**Purpose:** Ensure all Deep-Research file paths are correct and files exist

### Deep-Research File Paths

**Base Path:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/`

**Required Files:**

- [ ] **Section 2.1: Core GSAP Concepts**
  - Path: `05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
  - Full Path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
  - Verify exists: `ls {deep_research_base}/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
  - Expected: File exists ✅

- [ ] **Section 2.3: Plugin Ecosystem**
  - Path: `07-23-the-2024-gsap-plugin-ecosystem-all-free.md`
  - Full Path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`
  - Verify exists: `ls {deep_research_base}/07-23-the-2024-gsap-plugin-ecosystem-all-free.md`
  - Expected: File exists ✅

- [ ] **Section 2.5: Integration Patterns**
  - Path: `09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
  - Full Path: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
  - Verify exists: `ls {deep_research_base}/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
  - Expected: File exists ✅

### Workflow File Paths

- [ ] **workflow.yaml** references deep_research_base correctly
  - Expected: `deep_research_base: '{project-root}/docs/Deep-Research/GSAP-Animation-Mastery'`

- [ ] **workflow.yaml** lists all deep_research_sections
  - Expected: Sections '2.1', '2.3', '2.5' listed

- [ ] **instructions.md** uses {deep_research_base} variable
  - Expected: ALL Read commands use `{deep_research_base}/` prefix

**PASS Criteria:**
- ✅ All 3 Deep-Research files exist at correct paths
- ✅ workflow.yaml deep_research_base configured correctly
- ✅ All Read commands point to actual files (not meta-files or sidecars)

**FAIL Criteria:**
- ❌ Any Deep-Research file path is wrong
- ❌ Read commands point to agent sidecar files
- ❌ Files don't exist at specified paths

---

## Research Citation Audit

**Purpose:** Verify workflow includes verbatim quotes from Deep-Research with source citations

### Citation Quality Standards

**Minimum Requirements:**
- ✅ 10+ verbatim quotes throughout instructions.md
- ✅ Each quote uses italics + quotation marks: *"quote text here"*
- ✅ Each quote includes source citation: (Source: Section X.X) or (Section X.X)
- ✅ Quotes are ACTUALLY from the Deep-Research files (not hallucinated)

### Citation Inventory

**From Section 2.1 (Core GSAP Concepts):**

- [ ] Quote: *"GSAP uses gsap.to(), gsap.from(), or gsap.fromTo() methods to produce tweens"*
  - Expected Location: instructions.md Step 1, Phase 1.1
  - Source Citation: (Source: Section 2.1) or (Section 2.1)

- [ ] Quote: *"A timeline (gsap.timeline()) is essentially a container for multiple tweens, allowing sequencing and synchronization"*
  - Expected Location: instructions.md Step 1, Phase 1.1
  - Source Citation: (Source: Section 2.1)

- [ ] Quote: *".to() animates from the current value to the specified end value. .from() animates from the specified value to the current value"*
  - Expected Location: instructions.md Step 1, Phase 1.1
  - Source Citation: (Source: Section 2.1)

- [ ] Quote: *"Be mindful of their behavior (see common mistakes in Part 8 about .from() caching and immediateRender)"*
  - Expected Location: instructions.md Step 1, Phase 1.1
  - Source Citation: (Source: Section 2.1)

- [ ] Quote: *"Staggering is animating multiple targets with a slight offset in start times"*
  - Expected Location: instructions.md Step 1, Phase 1.1
  - Source Citation: (Source: Section 2.1)

- [ ] Quote: *"from:'center' makes the stagger originate from the center of the element array (so elements in the middle start first, radiating outward)"*
  - Expected Location: instructions.md Step 1, Phase 1.1
  - Source Citation: (Source: Section 2.1)

**From Section 2.3 (Plugin Ecosystem):**

- [ ] Quote: *"A major development: as of late 2023/2024, GSAP and all its official plugins are free for everyone (no club membership needed)"*
  - Expected Location: instructions.md Step 1, Phase 1.2
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"This is a windfall for AI coding models -- it means you can confidently use capabilities like ScrollTrigger and SplitText in your outputs without worrying about licensing"*
  - Expected Location: instructions.md Step 1, Phase 1.2
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"ScrollTrigger internally handles attaching scroll listeners, optimizing updates, etc."*
  - Expected Location: instructions.md Step 1, Phase 1.2
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"Scrubbing & Timelines: Perhaps the most powerful use is tying a GSAP timeline's progress to scroll position"*
  - Expected Location: instructions.md Step 1, Phase 1.2
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"A newer plugin (also free now) that provides smooth scrolling effect (a.k.a locomotive-style scroll easing) without external libraries"*
  - Expected Location: instructions.md Step 1, Phase 1.2 and Step 5
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"With effects:true, you can add attributes like data-speed='0.5' on elements to create automatic parallax"*
  - Expected Location: instructions.md Step 1, Phase 1.2
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"This plugin splits text into lines, words, and/or characters as individual elements, enabling advanced typography animations"*
  - Expected Location: instructions.md Step 1, Phase 1.2 and Step 5
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"With GSAP 3.13+, SplitText even supports automatic masking of overflowing text"*
  - Expected Location: instructions.md Step 1, Phase 1.2
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"Allows morphing one SVG shape into another. This is useful for icon transitions or creative effects"*
  - Expected Location: instructions.md Step 1, Phase 1.2 and Step 5
  - Source Citation: (Source: Section 2.3)

- [ ] Quote: *"Lets you animate objects along an SVG path. For creative uses like an element following a curved path"*
  - Expected Location: instructions.md Step 1, Phase 1.2 and Step 5
  - Source Citation: (Source: Section 2.3)

**From Section 2.5 (Integration Patterns):**

- [ ] Quote: *"We use gsap.context() which is a powerful utility introduced in GSAP 3.11 for React integration"*
  - Expected Location: instructions.md Step 1, Phase 1.3
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"By wrapping animations in gsap.context(() => {...}, ref), GSAP will scope selectors and create a context tied to that component"*
  - Expected Location: instructions.md Step 1, Phase 1.3
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"On cleanup (ctx.revert()), it will automatically kill any ScrollTriggers, revert any inline styles added, and cleanup animations"*
  - Expected Location: instructions.md Step 1, Phase 1.3
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"Modern build tools often use a process called tree shaking to remove unused code"*
  - Expected Location: instructions.md Step 1, Phase 1.3 and Step 4
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"To prevent this, you must explicitly register the plugin(s) using gsap.registerPlugin"*
  - Expected Location: instructions.md Step 1, Phase 1.3 and Step 4
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"Next.js does server-side rendering of React, where window and document don't exist"*
  - Expected Location: instructions.md Step 1, Phase 1.3
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"To avoid errors like 'ReferenceError: document is not defined,' you must ensure GSAP code only runs on the client"*
  - Expected Location: instructions.md Step 1, Phase 1.3
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"GSAP 3.13 introduced an official React hook to streamline this. It essentially wraps the context pattern"*
  - Expected Location: instructions.md Step 1, Phase 1.3
  - Source Citation: (Source: Section 2.5)

- [ ] Quote: *"useGSAP behaves like useLayoutEffect by default (which runs earlier than regular useEffect, preventing Flash of Unstyled Content)"*
  - Expected Location: instructions.md Step 1, Phase 1.3
  - Source Citation: (Source: Section 2.5)

**Total Citations Count:** 24+ verbatim quotes

**PASS Criteria:**
- ✅ 10+ verbatim quotes present
- ✅ All quotes use correct format: *"quote"* (Source: Section X.X)
- ✅ Quotes span all 3 Deep-Research sections
- ✅ Quotes are accurate (match actual source files)

**FAIL Criteria:**
- ❌ <10 verbatim quotes
- ❌ Quotes lack source citations
- ❌ Quotes are hallucinated (don't appear in source files)
- ❌ Quotes lack proper formatting

---

## Quality Metrics

**Purpose:** Verify workflow meets premium quality standards (NOT pathetic)

### Pathetic vs Premium Comparison

**Pathetic Baseline (v1.0.0):**
- workflow.yaml: 102 lines
- instructions.md: 515 lines
- template.md: 116 lines
- checklist.md: 0 lines (MISSING)
- **Total: 733 lines**

**Premium Target (v2.0.0):**
- workflow.yaml: 150-200+ lines
- instructions.md: 1,000-1,700+ lines
- template.md: 400-600+ lines
- checklist.md: 400-700+ lines (NEW)
- **Total: 2,000-3,000+ lines**

### Actual Metrics (v2.0.0-premium)

- [ ] **workflow.yaml line count**
  - Command: `wc -l {installed_path}/workflow.yaml`
  - Actual: _______ lines
  - Target: 150-200+ lines
  - Growth: _______% from baseline (102 lines)
  - Status: [ ] PASS / [ ] FAIL

- [ ] **instructions.md line count**
  - Command: `wc -l {installed_path}/instructions.md`
  - Actual: _______ lines
  - Target: 1,000-1,700+ lines
  - Growth: _______% from baseline (515 lines)
  - Status: [ ] PASS / [ ] FAIL

- [ ] **template.md line count**
  - Command: `wc -l {installed_path}/template.md`
  - Actual: _______ lines
  - Target: 400-600+ lines
  - Growth: _______% from baseline (116 lines)
  - Status: [ ] PASS / [ ] FAIL

- [ ] **checklist.md line count**
  - Command: `wc -l {installed_path}/checklist.md`
  - Actual: _______ lines
  - Target: 400-700+ lines
  - Growth: NEW (was 0 lines)
  - Status: [ ] PASS / [ ] FAIL

- [ ] **TOTAL line count**
  - Command: `wc -l {installed_path}/*.{yaml,md} | tail -n 1`
  - Actual: _______ lines
  - Target: 2,000-3,000+ lines
  - Growth: _______% from baseline (733 lines)
  - **Minimum Growth Required:** +200% (1,466+ lines)
  - Status: [ ] PASS / [ ] FAIL

### Research Density Metrics

- [ ] **Verbatim quotes per 100 lines (instructions.md)**
  - Formula: (quote_count / instruction_lines) * 100
  - Minimum: 1+ quote per 100 lines
  - Actual: _______ quotes per 100 lines
  - Status: [ ] PASS / [ ] FAIL

- [ ] **Deep-Research sections referenced (workflow.yaml)**
  - Expected: Sections '2.1', '2.3', '2.5' listed in deep_research_sections
  - Actual: _______
  - Status: [ ] PASS / [ ] FAIL

- [ ] **Research citations in template.md**
  - Expected: 10+ citations throughout report
  - Actual: _______
  - Status: [ ] PASS / [ ] FAIL

**PASS Criteria:**
- ✅ Total lines ≥2,000 (+200% growth minimum)
- ✅ Each file meets target ranges
- ✅ Research density ≥1 quote per 100 lines
- ✅ All 3 Deep-Research sections referenced

**FAIL Criteria:**
- ❌ Total lines <2,000
- ❌ Any file below target range
- ❌ Research density <1 quote per 100 lines
- ❌ Missing Deep-Research sections

---

## Functionality Tests

**Purpose:** Verify workflow executes correctly without errors

### Execution Test

- [ ] **Workflow loads without errors**
  - Test: Load workflow.yaml in BMAD workflow engine
  - Expected: No YAML parsing errors
  - Expected: All variables resolve correctly

- [ ] **Instructions.md is valid XML**
  - Test: Parse instructions.md XML structure
  - Expected: All `<step>`, `<action>`, `<check>`, `<ask>` tags are properly closed
  - Expected: No XML syntax errors

- [ ] **Template.md uses valid placeholders**
  - Test: Scan for {{placeholder}} syntax
  - Expected: All placeholders match variables defined in workflow.yaml
  - Common placeholders:
    - {{date}}, {{codebase_root}}, {{gsap_version}}
    - {{deprecated_count}}, {{premium_opportunities_count}}
    - {{version_compliance_status}}, {{overall_compliance_status}}

### Integration Test

- [ ] **workflow.yaml references correct files**
  - template: `{installed_path}/template.md` ✅
  - instructions: `{installed_path}/instructions.md` ✅
  - validation: `{installed_path}/checklist.md` ✅

- [ ] **Archon MCP configuration present**
  - Required MCP: archon
  - Tools: rag_search_knowledge_base, rag_search_code_examples
  - Purpose defined

- [ ] **Output file path configured**
  - Expected: `{output_folder}/gsap-compliance-report-{{date}}.md`
  - Variables resolve correctly

**PASS Criteria:**
- ✅ Workflow loads without errors
- ✅ All XML is valid
- ✅ All placeholders are defined
- ✅ File references are correct

**FAIL Criteria:**
- ❌ YAML parsing errors
- ❌ XML syntax errors
- ❌ Undefined placeholders
- ❌ Broken file references

---

## BMAD v6 Compliance

**Purpose:** Ensure workflow follows BMAD v6 standards and conventions

### workflow.yaml Compliance

- [ ] **Required fields present**
  - name: "validate-modern" ✅
  - description: (detailed) ✅
  - author: "GSAP Excellence Engine - Tech Director" ✅
  - version: "2.0.0-premium" ✅
  - standalone: true ✅
  - config_source: "{project-root}/bmad/gsap-excellence/config.yaml" ✅

- [ ] **Deep-Research integration**
  - deep_research_base: (configured) ✅
  - deep_research_sections: (list of sections) ✅
  - archon_sources: (list of priority sources) ✅

- [ ] **MCP server configuration**
  - required_mcp: [archon] ✅
  - mcp_servers.archon.tools: (list) ✅
  - mcp_servers.archon.purpose: (description) ✅

- [ ] **File paths**
  - installed_path: "{module_root}/workflows/validate-modern" ✅
  - template: "{installed_path}/template.md" ✅
  - instructions: "{installed_path}/instructions.md" ✅
  - validation: "{installed_path}/checklist.md" ✅
  - default_output_file: (with {{date}}) ✅

- [ ] **Execution mode**
  - autonomous: false (research gates require user input) ✅
  - research_enforcement: "MANDATORY" ✅

### instructions.md Compliance

- [ ] **BMAD execution engine references**
  - `<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>` ✅
  - `<critical>You MUST have already loaded: workflow.yaml</critical>` ✅

- [ ] **Proper XML structure**
  - `<workflow>` wrapper ✅
  - `<step n="X" goal="...">` for each step ✅
  - `<action>`, `<ask>`, `<check>`, `<critical>` tags ✅
  - `<template-output>` tags for checkpoint saves ✅

- [ ] **Variable usage**
  - {communication_language} ✅
  - {user_name} ✅
  - {deep_research_base} ✅
  - {codebase_root} ✅
  - All variables resolve to workflow.yaml or config.yaml

### template.md Compliance

- [ ] **Placeholder syntax**
  - Uses {{variable}} syntax consistently ✅
  - All placeholders match workflow.yaml outputs ✅

- [ ] **Research citations included**
  - Deep-Research Framework Analysis section ✅
  - Research citations throughout ✅
  - Source attributions for all insights ✅

### checklist.md Compliance

- [ ] **Research Enforcement Test section** ✅
- [ ] **File Path Verification section** ✅
- [ ] **Research Citation Audit section** ✅
- [ ] **Quality Metrics section** ✅
- [ ] **Functionality Tests section** ✅
- [ ] **BMAD v6 Compliance section** ✅

**PASS Criteria:**
- ✅ All required fields present
- ✅ Proper BMAD v6 structure
- ✅ Correct variable usage
- ✅ All 4 files present and configured

**FAIL Criteria:**
- ❌ Missing required fields
- ❌ Incorrect structure
- ❌ Broken variable references
- ❌ Missing files

---

## Final Verdict

**Overall Workflow Classification:**

### Premium Workflow Criteria (ALL must be true)

- [ ] ✅ Total lines: 2,000-3,000+ (+200-300% growth)
- [ ] ✅ Research Enforcement: MANDATORY gates that CANNOT be skipped
- [ ] ✅ Deep-Research Backing: 10+ verbatim quotes with citations
- [ ] ✅ File Paths: ALL point to actual Deep-Research files (not meta-files)
- [ ] ✅ Functionality: Workflow executes without errors
- [ ] ✅ BMAD v6 Compliance: All standards met
- [ ] ✅ All 4 files present: workflow.yaml, instructions.md, template.md, checklist.md

**If ALL criteria above are TRUE:**
**VERDICT: ✅ PREMIUM WORKFLOW - Production Ready**

**If ANY criteria above is FALSE:**
**VERDICT: 🔴 PATHETIC WORKFLOW - Rebuild Required**

---

## Rebuild Instructions (If Failed)

**If workflow fails this checklist:**

1. **Identify failed section(s)** from checkboxes above
2. **Determine root cause:**
   - Missing research gates? → Rebuild instructions.md Step 1
   - Low line count? → Add more research-backed content
   - Missing citations? → Extract more verbatim quotes from Deep-Research
   - Wrong file paths? → Update to actual Deep-Research paths
3. **Fix issues systematically** (one section at a time)
4. **Re-run this checklist** until ALL criteria pass

**Target State:**
- Research-backed premium workflow
- 2,000-3,000+ lines total
- MANDATORY research enforcement
- Zero pathetic content

---

**Checklist Version:** 1.0.0
**Last Updated:** 2025-11-09
**Validation Framework:** Deep-Research Sections 2.1, 2.3, 2.5
