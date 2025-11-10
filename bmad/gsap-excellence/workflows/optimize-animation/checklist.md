# optimize-animation Workflow - Validation Checklist

**Workflow:** optimize-animation (Editor - Animation FEEL Optimization)
**Version:** 2.0.0-premium
**Agent:** Editor
**Purpose:** Validate systematic animation polish protocol and research enforcement

---

## 🚨 CRITICAL: Research Enforcement Test

**Can research be skipped?**

- [ ] **NO** - Research gate blocks progression (PASS ✅)
  - Workflow includes `<research-gate enforcement="MANDATORY" blocking="true">` tag
  - Checkpoint `type="approval-gate" blocking="true"`
  - User must explicitly continue with "Continue [c]"
  - Agent cannot rationalize skipping
  - Step 2 BLOCKS access to Step 3 without completing research

- [ ] **YES** - Research is optional/skippable (FAIL ❌ - fix workflow immediately)
  - **THIS MUST NOT HAPPEN**
  - If research CAN be skipped → workflow implementation FAILED
  - Return to instructions.md and enforce gates properly

**Research Gate Requirements:**

✅ **MUST Have (Non-Negotiable):**
1. `<research-gate enforcement="MANDATORY" blocking="true">` opening tag
2. Phase 1: Deep-Research Section 2.1 (Easing) - REQUIRED read
3. Phase 2: Deep-Research Section 2.2 (Timing) - REQUIRED read
4. Phase 3: Archon MCP queries (3 required queries)
5. Phase 4: User's animation analysis against frameworks
6. `<checkpoint type="approval-gate" blocking="true">` closing gate
7. User input REQUIRED ("Continue [c]") to proceed

**Test Protocol:**

1. Execute optimize-animation workflow
2. Provide animation code (Step 1)
3. **Attempt to skip Step 2 (Research Gate)**
4. Expected: System MUST prevent proceeding to Step 3
5. Expected: Warning message about MANDATORY research
6. Expected: User input required before continuing

**If research gate can be bypassed:** Implementation FAILED. Fix immediately.

---

## File Path Verification

**All `Read:` commands must point to ACTUAL Deep-Research files (NOT agent sidecars):**

### Deep-Research Section 2.1 (Easing)

- [ ] **File Path:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`
- [ ] **Verified:** File exists at this path
- [ ] **Content:** Easing Personality Framework present
- [ ] **NOT pointing to:** Agent sidecar file (e.g., `gsap-editor/research-knowledge.md`)

**Verify:**
```bash
ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md
```

### Deep-Research Section 2.2 (Timing)

- [ ] **File Path:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md`
- [ ] **Verified:** File exists at this path
- [ ] **Content:** Timeline choreography patterns present
- [ ] **NOT pointing to:** Agent sidecar file

**Verify:**
```bash
ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md
```

### No Agent Sidecar References

- [ ] **Confirmed:** NO references to `/bmad/gsap-excellence/agents/gsap-editor/` in instructions.md
- [ ] **Confirmed:** ALL Read commands point to `/docs/Deep-Research/GSAP-Animation-Mastery/`

**If any Read commands point to agent sidecars:** Workflow is reading SUMMARY files instead of actual research. FIX immediately.

---

## Research Citation Audit

**Verbatim quotes from Deep-Research must be present in instructions.md:**

### Section 2.1 Citations (Easing)

- [ ] **Quote 1:** *"Use easing deliberately to convey weight and style... premium sites rarely stick to default; they tailor easing per animation."*
  - Source: `(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)` ✅

- [ ] **Quote 2:** *"Use `power4.out` or `expo.out` for a dramatic, fast-to-slow entrance."*
  - Source cited ✅

- [ ] **Quote 3:** *"Use `power2.inOut` for gentle, smooth transitions."*
  - Source cited ✅

- [ ] **Quote 4:** *"Use `bounce.out` or `elastic.out` for playful, bouncy elements (e.g. cartoonish UI)."*
  - Source cited ✅

- [ ] **Quote 5:** *"For world-class polish, customizing easing is common... use a CustomEase curve to match a very specific motion feel (like mimicking physics)."*
  - Source cited ✅

- [ ] **Quote 6:** *"Stagger object also supports `amount` (total duration of stagger), and even `repeat` or `yoyo` for looping staggers."*
  - Source cited ✅

### Section 2.2 Citations (Timing)

- [ ] **Quote 1:** *"Understanding and leveraging these timeline techniques enables the creation of complex animation choreography that is time-accurate and maintainable."*
  - Source: `(Source: 06-22-mastering-gsap-timeline-techniques.md)` ✅

- [ ] **Quote 2:** *"This relative scheduling (using `"<"` or `"+="` notations) makes complex overlapping sequences easier to read and adjust."*
  - Source cited ✅

- [ ] **Quote 3:** *"You can treat a timeline as a tween by adding it to another timeline... This modular approach means each sub-timeline can be developed and tested separately."*
  - Source cited ✅

- [ ] **Quote 4:** *"When looping, consider using the `repeatRefresh:true` on tweens if you want them to pick new random values on each loop."*
  - Source cited ✅

**Citation Format Verification:**

- [ ] All quotes use italics: `*"quote text"*`
- [ ] Source file in parentheses after quote: `(Source: filename.md)`
- [ ] NO quotes without source citations
- [ ] NO inferred insights claiming to be quotes

**Minimum Quote Count:** 10+ verbatim quotes (Target: 15-20+)

---

## Quality Metrics

### Line Count Verification

**Total Lines Across All Files:**

- [ ] **workflow.yaml:** 130+ lines (was 83) - Target: 130-150 lines
- [ ] **instructions.md:** 750+ lines (was 173) - Target: 700-1000 lines
- [ ] **template.md:** 750+ lines (was 174) - Target: 600-800 lines
- [ ] **checklist.md:** 400+ lines (NEW) - Target: 400-600 lines

**Total:** 2,030+ lines (was 427 pathetic lines)

**Growth:** +1,603 lines (+375% minimum)

**Target:** 2,000-2,500+ lines total

### Per-File Growth

- [ ] **workflow.yaml:** +57% growth (83 → 132 lines)
- [ ] **instructions.md:** +336% growth (173 → 755 lines)
- [ ] **template.md:** +343% growth (174 → 770 lines)
- [ ] **checklist.md:** NEW file (0 → 400+ lines)

**All files meet premium standards?** YES ✅ / NO ❌

### Research Density

**Verbatim Quotes Per 100 Lines (instructions.md):**

- Minimum: 1.5 quotes per 100 lines
- Premium: 2+ quotes per 100 lines
- Target for 755-line instructions.md: 15+ quotes

**Count verbatim quotes in instructions.md:**
- [ ] Quote count: ______ (Target: 15+)
- [ ] Research density: ______ per 100 lines (Target: 2+)

### Code Examples

**Before/After Code Examples in instructions.md + template.md:**

- [ ] Easing refinement examples: 3+ pairs
- [ ] Duration optimization examples: 2+ pairs
- [ ] Sequencing pattern examples: 2+ pairs
- [ ] Stagger optimization examples: 2+ pairs
- [ ] Motion quality examples: 2+ pairs

**Total before/after pairs:** 11+ (Target: 15+)

---

## Functionality Tests

### Workflow Execution Test

- [ ] **Activate workflow:** Run `/bmad:gsap-excellence:workflows:optimize-animation` (via Editor agent)
- [ ] **Step 1 loads:** Animation context gathering (`<ask>` tags work)
- [ ] **Step 2 blocks:** Research gate prevents skipping to Step 3
- [ ] **User input required:** "Continue [c]" needed at approval checkpoint
- [ ] **Step 3+ execute:** Easing analysis proceeds after research gate passed
- [ ] **Template generates:** Output file created with populated placeholders
- [ ] **No errors:** Workflow completes without XML parsing errors

### Research Gate Blocking Test (CRITICAL)

**Test Scenario:** Attempt to bypass research

1. Start workflow
2. Provide animation code (Step 1)
3. **Try to skip to Step 3 without completing research**

**Expected Behavior:**
- [ ] System prevents proceeding
- [ ] Warning: "Research gate is MANDATORY"
- [ ] User input REQUIRED before Step 3
- [ ] Agent cannot rationalize or skip

**If agent bypasses research gate:** FAIL - workflow broken!

### Archon MCP Query Execution

**3 Required Queries:**

- [ ] **Query 1:** `rag_search_knowledge_base("GSAP easing curves CustomEase selection", source_id="b9f6b322298feb21", match_count=8)`
- [ ] **Query 2:** `rag_search_code_examples("GSAP timeline timing overlap stagger", match_count=8)`
- [ ] **Query 3:** `rag_search_knowledge_base("animation personality motion feel refinement", match_count=8)`

**Verification:**
- [ ] All 3 queries execute during Step 2 research phase
- [ ] Results documented in research findings
- [ ] KB citations included in final report

### Output File Generation

- [ ] **Default path:** `{output_folder}/gsap-animation-polish-report-{timestamp}.md`
- [ ] **File created:** Output file exists after workflow completion
- [ ] **Placeholders filled:** No `{{unfilled}}` placeholders in output
- [ ] **Structure complete:** All sections from template.md present
- [ ] **Research citations:** Deep-Research quotes included in output

---

## BMAD v6 Compliance

### workflow.yaml Structure

- [ ] **name:** Present (optimize-animation)
- [ ] **description:** Present (mentions easing/timing/FEEL optimization)
- [ ] **version:** 2.0.0-premium
- [ ] **config_source:** `{project-root}/bmad/gsap-excellence/config.yaml`
- [ ] **required_mcp:** archon, context7 listed
- [ ] **deep_research_sections:** 2.1, 2.2 listed
- [ ] **deep_research_base:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery`
- [ ] **archon_sources:** Priority sources listed (b9f6b322298feb21, etc.)
- [ ] **installed_path:** Correct path
- [ ] **template:** Points to template.md
- [ ] **instructions:** Points to instructions.md
- [ ] **validation:** Points to checklist.md
- [ ] **default_output_file:** Dynamic path with {timestamp}
- [ ] **standalone:** false (Editor only)

### instructions.md Structure

- [ ] **Critical tags:** `<critical>` tags for workflow.xml and workflow.yaml loading
- [ ] **Action tag:** `<action>` for communication language
- [ ] **Ask tags:** 5+ `<ask>` tags for gathering animation context
- [ ] **Research gate:** `<research-gate enforcement="MANDATORY" blocking="true">`
- [ ] **Checkpoint:** `<checkpoint type="approval-gate" blocking="true">`
- [ ] **Template-output tags:** Present for variable extraction
- [ ] **Step numbering:** Clear step structure (Step 1-7)
- [ ] **Code examples:** Fenced code blocks with javascript syntax

### template.md Structure

- [ ] **Handlebars syntax:** `{{placeholders}}` used throughout
- [ ] **Conditionals:** `{{#if}}` blocks for optional sections
- [ ] **Loops:** `{{#each}}` for arrays (animations, recommendations)
- [ ] **Research citations:** Verbatim quotes from Deep-Research
- [ ] **Before/after examples:** Code comparison blocks
- [ ] **Priority sections:** HIGH/MEDIUM/LOW recommendations

---

## Animation FEEL Focus Verification

**This workflow optimizes FEEL (artistic), NOT performance (technical).**

### Critical Distinction Enforcement

- [ ] **workflow.yaml description:** Mentions "FEEL optimization" NOT "performance optimization"
- [ ] **instructions.md intro:** Clear distinction table (optimize-animation vs optimize-performance)
- [ ] **Focus areas verified:**
  - ✅ Easing refinement (personality matching)
  - ✅ Timing polish (duration, sequencing)
  - ✅ Stagger optimization (intervals, origin)
  - ✅ Motion quality (natural movement, overshoot, bounce)
  - ❌ NOT GPU optimization
  - ❌ NOT 60fps validation
  - ❌ NOT memory leak detection

### Deep-Research Sections Correct

- [ ] **Uses Sections 2.1-2.2** (Easing & Timing) ✅
- [ ] **NOT using Sections 5.1-5.6** (Performance) ✅

**If workflow uses Section 5.X:** WRONG FOCUS - this is optimize-performance territory!

### Easing Personality Framework Present

- [ ] **Dramatic:** power4.out, expo.out (impactful, bold)
- [ ] **Gentle:** power2.inOut, power1.out (elegant, refined)
- [ ] **Playful:** bounce.out, elastic.out (energetic, whimsical)
- [ ] **Precise:** linear, none (mechanical, controlled)
- [ ] **Custom:** CustomEase (world-class polish)

**Framework applied in:**
- [ ] instructions.md (research gate extraction)
- [ ] template.md (easing recommendations section)
- [ ] workflow.yaml (easing_personality metadata)

### Timing Refinement Patterns Present

- [ ] **Sequential:** Default timeline behavior (step-by-step)
- [ ] **Simultaneous:** Position parameter `"<"` (coordinated)
- [ ] **Overlapping:** `"-=0.5"` (cascading effects)
- [ ] **Gapped:** `"+=1"` (breathing room)

**Patterns applied in:**
- [ ] instructions.md (Section 2.2 extraction)
- [ ] template.md (sequencing analysis section)
- [ ] workflow.yaml (timing_patterns metadata)

---

## Agent Alignment Verification

**Correct Agent:** Editor (NOT Tech Director)

- [ ] **workflow.yaml metadata.agent:** "editor" ✅
- [ ] **instructions.md header:** "Agent: Editor (The Editor)" ✅
- [ ] **standalone:** false (Editor context required) ✅

**NOT Tech Director:**
- [ ] Workflow does NOT claim agent is Tech Director
- [ ] Focus is ARTISTIC (easing/timing) not TECHNICAL (60fps/GPU)

---

## Version & Metadata Compliance

### Version 2.0.0-premium

- [ ] **workflow.yaml version:** "2.0.0-premium"
- [ ] **instructions.md version:** "2.0.0-premium"
- [ ] **Created date:** 2025-11-09
- [ ] **Last updated:** 2025-11-09

### Metadata Complete

- [ ] **priority:** P2 (medium-high)
- [ ] **complexity:** medium-high
- [ ] **research_intensity:** high
- [ ] **estimated_duration:** 20-30 minutes
- [ ] **output_type:** animation-polish-report
- [ ] **focus:** artistic-refinement

---

## Web Bundle Configuration

- [ ] **web_bundle.name:** optimize-animation
- [ ] **web_bundle.path:** bmad/gsap-excellence/workflows/optimize-animation
- [ ] **web_bundle_files:** All 4 files listed
  - [ ] workflow.yaml
  - [ ] instructions.md
  - [ ] template.md
  - [ ] checklist.md

---

## Premium Quality Indicators

### Structural Indicators (ALL must be TRUE)

- [ ] Total line count >2,000 across all files
- [ ] instructions.md >700 lines
- [ ] checklist.md exists (not missing)
- [ ] workflow.yaml has deep_research_sections
- [ ] workflow.yaml has required_mcp

### Content Indicators (ALL must be TRUE)

- [ ] 10+ verbatim quotes from Deep-Research
- [ ] GSAP-specific expertise (not generic animation advice)
- [ ] Source citations in parentheses after quotes
- [ ] 5+ before/after code examples
- [ ] Specific easing/timing guidance (not vague)

### Research Enforcement Indicators (ALL must be TRUE)

- [ ] MANDATORY research gates present
- [ ] Research gates CANNOT be skipped
- [ ] Approval-gate checkpoints require user input
- [ ] Agent cannot rationalize skipping
- [ ] File paths point to actual Deep-Research (not sidecars)

### Methodology Indicators (ALL must be TRUE)

- [ ] Created ONE AT A TIME (not batched)
- [ ] Backed by Deep-Research reading (Sections 2.1-2.2)
- [ ] ALL Deep-Research sections read in full
- [ ] Built from actual research extraction (not inference)
- [ ] Research enforcement tested and verified

**Verdict:** If ALL checkboxes above are TRUE → Workflow is PREMIUM ✅

**If ANY checkbox is FALSE:** Workflow is still pathetic and requires fixes ❌

---

## Final Validation Summary

### Critical Requirements (MUST ALL PASS)

1. **Research Enforcement:** MANDATORY gates BLOCK progression ✅ / ❌
2. **File Paths:** ALL point to Deep-Research files (NOT sidecars) ✅ / ❌
3. **Citations:** 10+ verbatim quotes with source citations ✅ / ❌
4. **Line Count:** 2,000+ lines total ✅ / ❌
5. **Agent:** Editor (NOT Tech Director) ✅ / ❌
6. **Focus:** FEEL optimization (NOT performance) ✅ / ❌
7. **Sections:** Uses 2.1-2.2 (NOT 5.1-5.6) ✅ / ❌
8. **Version:** 2.0.0-premium ✅ / ❌

**ALL 8 requirements PASS?** YES ✅ / NO ❌

### Workflow Status

**If ALL 8 critical requirements PASS:**
- ✅ Workflow is PREMIUM and production-ready
- ✅ Meets BMAD v6 compliance standards
- ✅ Research enforcement verified
- ✅ Quality standards met
- ✅ Ready for use

**If ANY requirement FAILS:**
- ❌ Workflow is NOT ready
- ❌ Return to failed section and fix
- ❌ Re-validate after fixes
- ❌ Do NOT use until all requirements PASS

---

## Improvement Opportunities

**Even if workflow passes, consider these enhancements:**

- [ ] Add more code examples (target: 20+ before/after pairs)
- [ ] Expand Easing Personality Framework with more personality types
- [ ] Include more Deep-Research quotes (target: 20-30+)
- [ ] Add CustomEase gallery with pre-made curves
- [ ] Create timing pattern library with visual diagrams
- [ ] Expand stagger origin patterns (more than 5 options)
- [ ] Add brand personality matching matrix
- [ ] Include animation feel assessment rubric

---

**Validation Complete** ✅

**Workflow Quality:** PREMIUM (if all critical requirements pass)

**Next Steps:**
1. Use this checklist EVERY time workflow is updated
2. Re-validate after any changes to instructions.md or workflow.yaml
3. Ensure research enforcement ALWAYS works (test regularly)
4. Track quality metrics over time (line count, quote count)
5. Continuously improve based on usage feedback
