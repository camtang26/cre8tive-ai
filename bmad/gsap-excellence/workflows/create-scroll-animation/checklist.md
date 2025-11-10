# create-scroll-animation Workflow - Validation Checklist

## Purpose

This checklist validates that the create-scroll-animation workflow:
1. **Enforces MANDATORY research** (cannot be skipped or rationalized away)
2. **Produces research-backed ScrollTrigger code** (not generic trial-and-error)
3. **Follows BMAD v6 conventions** (proper structure, file paths, configs)
4. **Achieves premium quality standards** (2,000-3,000+ lines total, verbatim quotes, systematic protocols)

Run this checklist BEFORE marking workflow as production-ready.

---

## SECTION 1: Research Enforcement Test (CRITICAL)

**PURPOSE:** Verify research gates BLOCK progression (cannot be skipped).

### Can Research Be Skipped?

**Test Protocol:**
1. Execute workflow from Step 0
2. Reach Step 1 research gates
3. Attempt to continue WITHOUT loading Deep-Research sections
4. Agent should BLOCK until user types "Continue [c]"

**Expected Behavior:**
- [ ] **Phase 1 gate (Section 3.2) BLOCKS** - Agent cannot proceed without user typing "c" or "Continue"
- [ ] **Phase 2 gate (Section 3.3) BLOCKS** - User input REQUIRED to continue
- [ ] **Phase 3 gate (Section 2.5) BLOCKS** - User input REQUIRED to continue
- [ ] **Phase 4 gate (Section 3.7) BLOCKS** - User input REQUIRED to continue
- [ ] **Agent cannot rationalize skipping** - No "this is simple, I'll skip research" behavior
- [ ] **All 4 phases required** - Cannot skip any Deep-Research section

**Verification Commands:**
```xml
<research-gate enforcement="MANDATORY" blocking="true">
  <checkpoint type="approval-gate" blocking="true">
    <mandate>User MUST explicitly type "c" or "Continue"</mandate>
  </checkpoint>
</research-gate>
```

**PASS CRITERIA:**
- ✅ All 4 research gates block progression
- ✅ User input explicitly required at each checkpoint
- ✅ Agent cannot proceed without "Continue [c]" input
- ✅ No rationalization or skipping possible

**FAIL CRITERIA:**
- ❌ Research can be skipped or bypassed
- ❌ Agent proceeds without user confirmation
- ❌ Gates are "optional" or "suggested"
- ❌ Agent rationalizes "I know this already"

**IF THIS TEST FAILS:** Workflow is PATHETIC and must be rebuilt with proper blocking gates.

---

## SECTION 2: File Path Verification

**PURPOSE:** Ensure all Read commands point to actual Deep-Research files (not agent sidecar files).

### Deep-Research File Paths Audit

**Verify Each Section Points to Correct File:**

- [ ] **Section 3.2 path:** `{deep_research_base}/12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md`
  - File exists: `ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md`
  - NOT pointing to: `gsap-vfx/research-knowledge.md` or any agent sidecar

- [ ] **Section 3.3 path:** `{deep_research_base}/13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md`
  - File exists: `ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md`
  - NOT pointing to: `gsap-vfx/research-knowledge.md`

- [ ] **Section 2.5 path:** `{deep_research_base}/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
  - File exists: `ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
  - NOT pointing to: agent sidecar files

- [ ] **Section 3.7 path:** `{deep_research_base}/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`
  - File exists: `ls /home/cameronai/projects/cre8tive-website-1006/docs/Deep-Research/GSAP-Animation-Mastery/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`
  - NOT pointing to: agent sidecar files

**Automated Check:**
```bash
# Search for any agent sidecar references (should return 0 results)
rg "gsap-vfx/research" bmad/gsap-excellence/workflows/create-scroll-animation/instructions.md
# Expected: No matches found

# Verify all paths start with {deep_research_base}/
rg "Read:.*{deep_research_base}" bmad/gsap-excellence/workflows/create-scroll-animation/instructions.md
# Expected: 4 matches (one per Deep-Research section)
```

**PASS CRITERIA:**
- ✅ All 4 file paths verified to exist
- ✅ All paths point to `/docs/Deep-Research/GSAP-Animation-Mastery/`
- ✅ Zero references to agent sidecar files
- ✅ `{deep_research_base}` variable used correctly

**FAIL CRITERIA:**
- ❌ Any path points to agent sidecar file
- ❌ Any file does not exist
- ❌ Paths use hardcoded strings instead of `{deep_research_base}`

---

## SECTION 3: Research Citation Audit

**PURPOSE:** Verify workflow uses actual research (verbatim quotes with source citations).

### Verbatim Quote Count & Citation Format

**Count Quotes in instructions.md:**

- [ ] **Section 3.2 quotes:** Minimum 5 verbatim quotes
  - Example: *"when top of section hits 80% down from top of viewport"*
  - Citation format: `(Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)`

- [ ] **Section 3.3 quotes:** Minimum 5 verbatim quotes
  - Example: *"Pin the section during the animation"*
  - Citation format: `(Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)`

- [ ] **Section 2.5 quotes:** Minimum 5 verbatim quotes
  - Example: *"Using gsap.context() ensures cleanup on unmount"*
  - Citation format: `(Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)`

- [ ] **Section 3.7 quotes:** Minimum 3 verbatim quotes
  - Example: *"Kill all ScrollTriggers to remove pinning/effects"*
  - Citation format: `(Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)`

**Total Quote Target:** 18+ verbatim quotes across all sections

**Citation Format Validation:**
- [ ] All quotes use italics with quotation marks: `*"quote text"*`
- [ ] All quotes followed by source citation in parentheses
- [ ] Source citation includes actual filename (not just "Section X.Y")

### Spot Check Verification (Random Sample)

**Select 5 random quotes and verify they exist in source files:**

1. **Quote:** *"when top of section hits 80% down from top of viewport"*
   - **Source File:** 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md
   - **Verification:** `rg "when top of section hits 80%" docs/Deep-Research/GSAP-Animation-Mastery/12-32-*.md`
   - **Result:** [ ] FOUND / [ ] NOT FOUND

2. **Quote:** *"Pin the section during the animation"*
   - **Source File:** 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md
   - **Verification:** `rg "Pin the section during" docs/Deep-Research/GSAP-Animation-Mastery/13-33-*.md`
   - **Result:** [ ] FOUND / [ ] NOT FOUND

3. **Quote:** *"Using gsap.context\(\) ensures cleanup on unmount"*
   - **Source File:** 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md
   - **Verification:** `rg "Using gsap.context.*ensures cleanup" docs/Deep-Research/GSAP-Animation-Mastery/09-25-*.md`
   - **Result:** [ ] FOUND / [ ] NOT FOUND

4. **Quote:** *"scrub: 1 - smooth scrubbing, 1 second delay"*
   - **Source File:** 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md
   - **Verification:** `rg "scrub: 1.*smooth scrubbing" docs/Deep-Research/GSAP-Animation-Mastery/13-33-*.md`
   - **Result:** [ ] FOUND / [ ] NOT FOUND

5. **Quote:** *"Kill all ScrollTriggers to remove pinning"*
   - **Source File:** 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md
   - **Verification:** `rg "Kill all ScrollTriggers" docs/Deep-Research/GSAP-Animation-Mastery/17-37-*.md`
   - **Result:** [ ] FOUND / [ ] NOT FOUND

**PASS CRITERIA:**
- ✅ 18+ total verbatim quotes across all sections
- ✅ All quotes use italics with quotation marks
- ✅ All quotes have source citations with filenames
- ✅ Spot check: 5/5 quotes verified in source files

**FAIL CRITERIA:**
- ❌ Fewer than 18 total quotes
- ❌ Quotes without source citations
- ❌ Spot check: Any quote not found in source file (HALLUCINATED)
- ❌ Generic advice without research backing

---

## SECTION 4: Framework & Code Example Audit

**PURPOSE:** Verify workflow includes systematic frameworks and before/after code examples.

### Frameworks from Deep-Research

**Verify Each Section's Frameworks Are Included:**

- [ ] **Section 3.2 Frameworks:**
  - [ ] Trigger point strategy (`start: "top 80%"` explained)
  - [ ] toggleActions pattern (`"play none none reverse"` breakdown)
  - [ ] Stagger pattern for multiple elements
  - [ ] `once: true` single-play option
  - [ ] React context pattern with cleanup

- [ ] **Section 3.3 Frameworks:**
  - [ ] Pin configuration with `pin: true` + `anticipatePin: 1`
  - [ ] Scrub configuration (`scrub: 1` for smooth delay)
  - [ ] End distance calculation (`end: "+=200%"`)
  - [ ] Timeline with pinning pattern
  - [ ] Parallax movement (`y: '10%'` viewport-relative)

- [ ] **Section 2.5 Frameworks:**
  - [ ] gsap.context() cleanup pattern
  - [ ] useGSAP() modern hook pattern
  - [ ] SSR safety checks (`typeof window !== "undefined"`)
  - [ ] Next.js `"use client"` directive
  - [ ] Strict mode handling

- [ ] **Section 3.7 Frameworks:**
  - [ ] Kill all triggers pattern (`ScrollTrigger.getAll().forEach(...)`)
  - [ ] Page transition cleanup
  - [ ] Scroll position reset (`window.scrollTo(0, 0)`)
  - [ ] React component cleanup with ctx.revert()

### Code Examples Count

**Verify Sufficient Code Examples:**

- [ ] **Vanilla JS examples:** Minimum 3 complete examples
- [ ] **React examples:** Minimum 3 complete examples (gsap.context + useGSAP)
- [ ] **Next.js SSR examples:** Minimum 1 example with safety checks
- [ ] **Before/After comparisons:** Minimum 2 pairs showing improvements

**Code Example Quality:**
- [ ] All code examples are complete (not snippets)
- [ ] All code examples have research citations in comments
- [ ] Code examples show actual ScrollTrigger configurations
- [ ] Examples cover different effect types (reveal, pin, parallax)

**PASS CRITERIA:**
- ✅ All frameworks from 4 Deep-Research sections included
- ✅ 7+ complete code examples (vanilla + React + Next.js)
- ✅ 2+ before/after comparison pairs
- ✅ Code examples have research citations

**FAIL CRITERIA:**
- ❌ Missing frameworks from any Deep-Research section
- ❌ Fewer than 7 code examples
- ❌ Code examples lack research citations
- ❌ Generic code without Deep-Research backing

---

## SECTION 5: Quality Metrics

**PURPOSE:** Verify workflow meets premium quality standards (2,000-3,000+ lines total).

### Line Count Per File

**Measure Each File:**

```bash
# workflow.yaml
wc -l bmad/gsap-excellence/workflows/create-scroll-animation/workflow.yaml
# Target: 150-200+ lines

# instructions.md
wc -l bmad/gsap-excellence/workflows/create-scroll-animation/instructions.md
# Target: 1,000-1,700+ lines

# checklist.md (this file)
wc -l bmad/gsap-excellence/workflows/create-scroll-animation/checklist.md
# Target: 400-700+ lines

# Total
wc -l bmad/gsap-excellence/workflows/create-scroll-animation/*.{yaml,md}
# Target: 2,000-3,000+ lines
```

**Results:**

- [ ] **workflow.yaml:** ______ lines (Target: 150-200+)
- [ ] **instructions.md:** ______ lines (Target: 1,000-1,700+)
- [ ] **checklist.md:** ______ lines (Target: 400-700+)
- [ ] **TOTAL:** ______ lines (Target: 2,000-3,000+)

**Growth Calculation:**

**Baseline (Pathetic Workflow):**
- workflow.yaml: 76 lines
- instructions.md: 566 lines
- template.md: 0 lines (null)
- checklist.md: 0 lines (didn't exist)
- **Total: 642 lines**

**Premium Workflow:**
- workflow.yaml: _____ lines
- instructions.md: _____ lines
- template.md: N/A (code workflow, no template)
- checklist.md: _____ lines
- **Total: _____ lines**

**Growth Percentage:** (Premium - Pathetic) / Pathetic × 100 = _____%

**Target Growth:** +200% minimum (642 → 1,926+ lines)

### Research Density

**Calculate Quotes Per 100 Lines:**

- Total verbatim quotes: ______ (Target: 18+)
- instructions.md lines: ______
- **Research Density:** (Quotes / Lines) × 100 = ______ quotes per 100 lines

**Target Density:** ≥ 1.5 quotes per 100 lines in instructions.md

### Content Quality Indicators

- [ ] **No generic advice** - All guidance backed by specific Deep-Research sections
- [ ] **No inferred content** - All frameworks extracted from actual research
- [ ] **Systematic protocols** - Step-by-step procedures (not just "configure ScrollTrigger")
- [ ] **Specific metrics** - Actual numbers (`start: "top 80%"`, `scrub: 1`, etc.)

**PASS CRITERIA:**
- ✅ Total ≥ 2,000 lines (workflow.yaml + instructions.md + checklist.md)
- ✅ workflow.yaml ≥ 150 lines
- ✅ instructions.md ≥ 1,000 lines
- ✅ checklist.md ≥ 400 lines
- ✅ Growth ≥ +200% from pathetic baseline
- ✅ Research density ≥ 1.5 quotes per 100 lines

**FAIL CRITERIA:**
- ❌ Total < 2,000 lines (pathetic quality)
- ❌ Any file below minimum target
- ❌ Growth < +200%
- ❌ Research density < 1.0 quotes per 100 lines

---

## SECTION 6: Functionality Tests

**PURPOSE:** Verify workflow executes correctly and produces valid ScrollTrigger code.

### Workflow Execution Test

**Test Protocol:**
1. Execute workflow from Step 0
2. Progress through all steps
3. Complete all research gates
4. Generate ScrollTrigger implementation

**Expected Behavior:**

- [ ] **Step 0:** Prerequisites confirmed without errors
- [ ] **Step 1:** Context gathering completes (effect type, elements, triggers, framework)
- [ ] **Research Gates:** All 4 phases block and require user input
- [ ] **Step 2:** Pattern selection based on effect type (reveal/pin/parallax/scrub/horizontal)
- [ ] **Step 3:** ScrollTrigger configuration generated with research-backed settings
- [ ] **Step 4:** Implementation code generated (framework-specific)
- [ ] **Step 5:** Testing checklist provided
- [ ] **Step 6:** Final deliverable package complete

### Generated Code Validation

**Verify Generated Code Includes:**

- [ ] **GSAP imports:** `import gsap from 'gsap'`
- [ ] **ScrollTrigger import:** `import { ScrollTrigger } from 'gsap/ScrollTrigger'`
- [ ] **Plugin registration:** `gsap.registerPlugin(ScrollTrigger)`
- [ ] **ScrollTrigger config:** `scrollTrigger: { trigger, start, ... }`
- [ ] **Research citations in comments:** Sources from Deep-Research sections
- [ ] **Framework cleanup (if React):** `ctx.revert()` or useGSAP auto-cleanup
- [ ] **SSR safety (if Next.js):** `"use client"` or `typeof window` check

### Pattern-Specific Validation

**IF effect_type === 'reveal':**
- [ ] Code uses Section 3.2 pattern (scroll-based reveals)
- [ ] Includes `toggleActions` configuration
- [ ] Has `stagger` if multiple elements
- [ ] Trigger point: `start: "top 80%"` or similar

**IF effect_type === 'pin' OR 'scrub':**
- [ ] Code uses Section 3.3 pattern (pinning & parallax)
- [ ] Includes `pin: true` and `scrub` config
- [ ] Has `anticipatePin: 1`
- [ ] Timeline created with pinned ScrollTrigger
- [ ] End distance specified (`end: "+=200%"` or calculated)

**IF framework === 'react' OR 'nextjs':**
- [ ] Code uses Section 2.5 patterns (React integration)
- [ ] Has `gsap.context()` or `useGSAP()` wrapper
- [ ] Cleanup function returns `ctx.revert()`
- [ ] SSR checks present (if Next.js)

**PASS CRITERIA:**
- ✅ Workflow executes without errors
- ✅ All steps complete in order
- ✅ Generated code is syntactically valid
- ✅ Pattern selection matches effect type
- ✅ Framework integration correct
- ✅ Research citations present in code

**FAIL CRITERIA:**
- ❌ Workflow errors or skips steps
- ❌ Generated code has syntax errors
- ❌ Wrong pattern for effect type
- ❌ Missing cleanup (React)
- ❌ No research citations in code

---

## SECTION 7: BMAD v6 Compliance

**PURPOSE:** Ensure workflow follows all BMAD structural conventions.

### workflow.yaml Compliance

**Required Sections Present:**

- [ ] `name:` - Workflow identifier
- [ ] `description:` - Clear purpose statement
- [ ] `author:` - "GSAP Excellence Engine - The VFX Specialist"
- [ ] `version:` - "2.0.0-premium"
- [ ] `config_source:` - `"{project-root}/bmad/gsap-excellence/config.yaml"`
- [ ] `module_root:` - `"{project-root}/bmad/gsap-excellence"`
- [ ] `user_name:` - `"{config_source}:user_name"`
- [ ] `communication_language:` - `"{config_source}:communication_language"`
- [ ] `output_folder:` - `"{config_source}:output_folder"`
- [ ] `required_mcp:` - Lists archon, context7
- [ ] `deep_research_sections:` - Lists '3.2', '3.3', '2.5', '3.7'
- [ ] `archon_sources:` - Lists priority source IDs
- [ ] `deep_research_base:` - Points to Deep-Research directory
- [ ] `installed_path:` - Correct module path
- [ ] `instructions:` - Points to instructions.md
- [ ] `validation:` - Points to checklist.md
- [ ] `standalone:` - Set to `false` (agent-context-dependent)
- [ ] `web_bundle:` - Includes all 4 Deep-Research files

### Variable Resolution

**Test Variable Paths:**

```bash
# Verify config_source resolves
cat bmad/gsap-excellence/config.yaml | head -5

# Verify deep_research_base exists
ls docs/Deep-Research/GSAP-Animation-Mastery/

# Verify installed_path exists
ls bmad/gsap-excellence/workflows/create-scroll-animation/
```

- [ ] `{project-root}` resolves to actual project root
- [ ] `{config_source}` resolves to config file
- [ ] `{deep_research_base}` resolves to Deep-Research directory
- [ ] `{installed_path}` resolves to workflow directory
- [ ] `{user_name}` can be extracted from config
- [ ] `{communication_language}` can be extracted from config
- [ ] `{output_folder}` can be extracted from config

### instructions.md Compliance

**Required Elements:**

- [ ] `<critical>` tag with workflow execution engine reference
- [ ] `<workflow>` wrapper around all steps
- [ ] Step numbering: `<step n="0">`, `<step n="1">`, etc.
- [ ] `goal` attribute on all steps
- [ ] `<action>` tags for instructions
- [ ] `<ask>` tags for user input
- [ ] `<research-gate>` with `enforcement="MANDATORY"` and `blocking="true"`
- [ ] `<checkpoint>` tags with `type="approval-gate"` and `blocking="true"`
- [ ] `<mandate>` tags explaining blocking behavior
- [ ] Read commands use `{deep_research_base}` variable

### File Structure

**Verify File Organization:**

```bash
ls -la bmad/gsap-excellence/workflows/create-scroll-animation/

# Expected files:
# - workflow.yaml
# - instructions.md
# - checklist.md (this file)
# - (no template.md - code workflow)
```

- [ ] workflow.yaml exists
- [ ] instructions.md exists
- [ ] checklist.md exists
- [ ] No template.md (code workflow, template: null)
- [ ] No extraneous files

**PASS CRITERIA:**
- ✅ workflow.yaml has all required sections
- ✅ All variables resolve correctly
- ✅ instructions.md has proper XML structure
- ✅ File structure matches BMAD v6 conventions
- ✅ web_bundle lists all Deep-Research dependencies

**FAIL CRITERIA:**
- ❌ Missing required sections in workflow.yaml
- ❌ Variables don't resolve
- ❌ instructions.md missing required XML tags
- ❌ Extraneous or missing files

---

## SECTION 8: ScrollTrigger-Specific Validation

**PURPOSE:** Validate ScrollTrigger expertise and patterns.

### ScrollTrigger Pattern Coverage

**Verify All Effect Types Covered:**

- [ ] **reveal** - Scroll-based reveals (Section 3.2)
- [ ] **pin** - Pinning sections (Section 3.3)
- [ ] **scrub** - Scroll-tied animations (Section 3.3)
- [ ] **parallax** - Multi-layer depth (Sections 3.2 + 3.3)
- [ ] **horizontal** - Horizontal scroll (mentioned)

### ScrollTrigger Configuration Options

**Verify All Key Options Documented:**

- [ ] `trigger` - Element/selector specification
- [ ] `start` - Start position (`"top 80%"`, `"top top"`, etc.)
- [ ] `end` - End position (`"+=200%"`, `"bottom top"`, etc.)
- [ ] `toggleActions` - Four-part string explained
- [ ] `scrub` - Boolean or number (smooth delay)
- [ ] `pin` - Boolean for pinning
- [ ] `anticipatePin` - Number to prevent jump
- [ ] `markers` - Boolean for debugging
- [ ] `once` - Boolean for single-play
- [ ] `onEnter` / `onLeave` - Callbacks
- [ ] `invalidateOnRefresh` - Resize handling

### Framework Integration Patterns

**Verify All Frameworks Covered:**

- [ ] **Vanilla JS** - Direct ScrollTrigger.create()
- [ ] **React (useEffect)** - gsap.context() pattern
- [ ] **React (useGSAP)** - Modern hook pattern
- [ ] **Next.js** - SSR safety with `"use client"`
- [ ] **Vue** - onMounted/onUnmounted mention

### Cleanup Patterns

**Verify Cleanup Thoroughly Documented:**

- [ ] React: `ctx.revert()` in return function
- [ ] React: useGSAP auto-cleanup
- [ ] Page transitions: `ScrollTrigger.getAll().forEach(t => t.kill())`
- [ ] Scroll reset: `window.scrollTo(0, 0)`
- [ ] SSR: Only run GSAP on client

**PASS CRITERIA:**
- ✅ All 5 effect types covered
- ✅ All 11+ key ScrollTrigger options documented
- ✅ All 5 framework patterns included
- ✅ Cleanup patterns for all contexts

**FAIL CRITERIA:**
- ❌ Missing any effect type
- ❌ Key ScrollTrigger options undocumented
- ❌ Framework integration incomplete
- ❌ Cleanup patterns missing

---

## SECTION 9: Testing & Validation Checklist Quality

**PURPOSE:** Ensure workflow provides comprehensive testing guidance.

### Testing Checklist Completeness

**Verify Testing Checklist Includes:**

- [ ] **Trigger position validation** - Markers, slow scroll test
- [ ] **toggleActions behavior** - Forward/backward scroll test
- [ ] **Pin behavior** - Pin/unpin without jump (if applicable)
- [ ] **Scrub smoothness** - Lag test, reversibility (if applicable)
- [ ] **60fps performance** - Frame rate validation
- [ ] **Cleanup validation** - Unmount test, lingering triggers check
- [ ] **Mobile responsiveness** - Touch scroll, viewport differences
- [ ] **Async content** - Layout shift, ScrollTrigger.refresh()
- [ ] **SSR validation** - No SSR errors (Next.js)
- [ ] **Production checklist** - Markers off, console.logs removed

**Manual Testing Steps Provided:**

- [ ] Enable markers step
- [ ] Slow scroll test procedure
- [ ] Reverse scroll test procedure
- [ ] Fast scroll test procedure
- [ ] Resize test procedure
- [ ] Navigation test (SPA)
- [ ] Mobile device test procedure

**PASS CRITERIA:**
- ✅ 10+ testing categories covered
- ✅ 7+ manual testing procedures provided
- ✅ Clear expected behavior descriptions
- ✅ Production cleanup checklist included

**FAIL CRITERIA:**
- ❌ Fewer than 8 testing categories
- ❌ Vague testing instructions
- ❌ No mobile testing guidance
- ❌ Missing production checklist

---

## SECTION 10: Final Quality Assessment

**PURPOSE:** Overall workflow quality determination.

### Premium Workflow Checklist

**ALL of the following MUST be true:**

- [ ] **Research Enforcement:** All 4 research gates block progression (Section 1)
- [ ] **File Paths:** All paths point to actual Deep-Research files (Section 2)
- [ ] **Research Citations:** 18+ verbatim quotes with source citations (Section 3)
- [ ] **Frameworks:** All frameworks from 4 Deep-Research sections included (Section 4)
- [ ] **Quality Metrics:** Total ≥ 2,000 lines, growth ≥ +200% (Section 5)
- [ ] **Functionality:** Workflow executes and generates valid code (Section 6)
- [ ] **BMAD v6:** Full compliance with structural conventions (Section 7)
- [ ] **ScrollTrigger:** All patterns and options covered (Section 8)
- [ ] **Testing:** Comprehensive testing checklist provided (Section 9)

### Pathetic Workflow Indicators

**IF ANY of the following are true, workflow is PATHETIC:**

- [ ] Research can be skipped or bypassed
- [ ] File paths point to agent sidecar files
- [ ] Fewer than 18 verbatim quotes
- [ ] Total lines < 2,000
- [ ] Growth < +200%
- [ ] Missing frameworks from any Deep-Research section
- [ ] Generated code lacks research citations
- [ ] No cleanup patterns (React/framework)
- [ ] Testing checklist < 8 categories

### Final Verdict

**Based on above checklist:**

- [ ] **PREMIUM** - All premium criteria met, zero pathetic indicators
- [ ] **NEEDS WORK** - Some premium criteria met, but has pathetic indicators
- [ ] **PATHETIC** - Multiple premium criteria failed, requires complete rebuild

**If PREMIUM:**
- Mark workflow as production-ready
- Update progress tracker in master plan
- Commit changes with growth percentage

**If NEEDS WORK or PATHETIC:**
- Document specific failures
- Rebuild failed sections
- Re-run this checklist
- DO NOT mark as production-ready

---

## SECTION 11: Post-Validation Actions

**If workflow PASSES all sections above:**

### Commit Workflow

```bash
# Replace pathetic files with premium versions
mv bmad/gsap-excellence/workflows/create-scroll-animation/workflow.yaml.new bmad/gsap-excellence/workflows/create-scroll-animation/workflow.yaml
mv bmad/gsap-excellence/workflows/create-scroll-animation/instructions.md.new bmad/gsap-excellence/workflows/create-scroll-animation/instructions.md
mv bmad/gsap-excellence/workflows/create-scroll-animation/checklist.md.new bmad/gsap-excellence/workflows/create-scroll-animation/checklist.md

# Stage changes
git add bmad/gsap-excellence/workflows/create-scroll-animation/

# Commit with growth metrics
git commit -m "rebuild: create-scroll-animation - pathetic → premium (+X%)"
```

### Update Master Plan Progress

Update `bmad/gsap-excellence/WORKFLOW-REBUILD-MASTER-PLAN.md`:

```markdown
**Completed Workflows (X/19):**
- ✅ `create-scroll-animation` (VFX Artist) - Complete rebuild: 642 → X,XXX lines (+X%)
```

### Update Progress Tracking

```markdown
### By Agent (VERIFIED)

| Agent | Total Workflows | Complete | Remaining | % Complete |
|-------|----------------|----------|-----------|------------|
| **VFX Artist** | 3+ | 1 (create-scroll-animation) | 2+ | ~33% |
```

---

## Summary

This checklist validates that create-scroll-animation workflow:

✅ **Enforces research** - Cannot skip 4 Deep-Research sections
✅ **Uses actual expertise** - 18+ verbatim quotes from research
✅ **Follows BMAD v6** - Proper structure, variables, conventions
✅ **Achieves premium quality** - 2,000+ lines, +200% growth
✅ **Covers all patterns** - reveal, pin, parallax, scrub, horizontal
✅ **Framework integration** - React, Next.js, Vue, Vanilla
✅ **Comprehensive testing** - 10+ test categories, 7+ manual procedures

**Only mark as PREMIUM if ALL sections pass.**
