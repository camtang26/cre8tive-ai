# implement-from-pattern Workflow Validation Checklist

**Workflow:** implement-from-pattern
**Version:** 2.0.0-premium
**Last Updated:** 2025-11-09
**Owner:** GSAP Excellence Engine - Multi-Agent Team

This checklist validates that the **implement-from-pattern** workflow meets premium quality standards and research enforcement requirements.

---

## 🚨 CRITICAL: Research Enforcement Test

**Purpose:** Verify that research gates CANNOT be skipped (prevents hallucination and ensures research-backed implementation)

### Can Research Be Skipped?

- [ ] **NO** - Research gates block progression (PASS) ✅
  - Workflow includes MANDATORY `<research-gate enforcement="MANDATORY" blocking="true">` tags
  - Checkpoint has `type="approval-gate" blocking="true"`
  - User must explicitly continue with "c" or "continue"
  - Agent CANNOT proceed without user input
  - Agent CANNOT rationalize skipping research

- [ ] **YES** - Research is optional/skippable (FAIL - fix workflow immediately) ❌
  - **THIS MUST NOT HAPPEN**
  - If research can be skipped, workflow is PATHETIC, not PREMIUM
  - Return to instructions.md and add MANDATORY blocking gates

### Research Gates Present?

**Gate 1: Pattern Analysis (Step 2)**
- [ ] `<research-gate enforcement="MANDATORY" blocking="true">` present
- [ ] Pattern loading phase marked `required="true"`
- [ ] Pattern feature analysis phase marked `required="true"`
- [ ] Approval checkpoint with `blocking="true"`
- [ ] User must provide "c" to continue
- [ ] Cinematographer cannot skip pattern analysis

**Gate 2: Framework Integration Research (Step 3)**
- [ ] `<research-gate enforcement="MANDATORY" blocking="true">` present
- [ ] Deep-Research Section 2.5 read command present
- [ ] Framework integration phase marked `required="true"`
- [ ] Approval checkpoint with `blocking="true"`
- [ ] User must provide "c" to continue
- [ ] Cinematographer cannot skip framework research

**Gate 3: Cleanup/Lifecycle Research (Step 4)**
- [ ] `<research-gate enforcement="MANDATORY" blocking="true">` present
- [ ] Deep-Research Section 3.7 read command present
- [ ] Cleanup protocol phase marked `required="true"`
- [ ] Approval checkpoint with `blocking="true"`
- [ ] User must provide "c" to continue
- [ ] Cinematographer cannot skip cleanup research

**Verdict:**
- [ ] ✅ PASS - All 3 research gates are MANDATORY and blocking
- [ ] ❌ FAIL - One or more gates can be skipped (FIX IMMEDIATELY)

---

## File Path Verification

**Purpose:** Ensure all Read commands point to actual Deep-Research files (not agent sidecar files)

### Deep-Research File Paths

**Section 2.5 - Framework Integration:**
- [ ] Read command present: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md`
- [ ] File exists (verify with ls)
- [ ] Path is correct (no typos)
- [ ] NOT pointing to agent sidecar file (gsap-cinematographer/research-knowledge.md)

**Section 3.7 - Cleanup/Lifecycle:**
- [ ] Read command present: `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`
- [ ] File exists (verify with ls)
- [ ] Path is correct (no typos)
- [ ] NOT pointing to agent sidecar file

### No Agent Sidecar References

- [ ] grep for "gsap-cinematographer/" in instructions.md returns 0 results
- [ ] grep for "gsap-vfx/" in instructions.md returns 0 results
- [ ] grep for "gsap-tech-director/" in instructions.md returns 0 results
- [ ] grep for "research-knowledge.md" in instructions.md returns 0 results
- [ ] ALL research references point to `/docs/Deep-Research/GSAP-Animation-Mastery/`

**Verdict:**
- [ ] ✅ PASS - All paths point to actual Deep-Research files
- [ ] ❌ FAIL - Some paths point to agent sidecars or wrong files

---

## Research Citation Audit

**Purpose:** Verify all frameworks/protocols have verbatim quotes from Deep-Research (not inferred or hallucinated)

### Verbatim Quote Count

**Target:** 10+ verbatim quotes with source citations

**Count verbatim quotes in instructions.md:**
- [ ] Quote 1: gsap.context() description (Section 2.5) ✓
- [ ] Quote 2: Cleanup requirement (Section 2.5) ✓
- [ ] Quote 3: useGSAP() hook description (Section 2.5) ✓
- [ ] Quote 4: Next.js SSR considerations (Section 2.5) ✓
- [ ] Quote 5: Strict mode handling (Section 2.5) ✓
- [ ] Quote 6: Vue 3 integration pattern (Section 2.5) ✓
- [ ] Quote 7: ScrollTrigger cleanup (Section 3.7) ✓
- [ ] Quote 8: Context revert pattern (Section 3.7) ✓
- [ ] Quote 9: Component cleanup (Section 3.7) ✓
- [ ] Quote 10: Reinitialization pattern (Section 3.7) ✓
- [ ] Additional quotes: {{count_additional}}

**Total Verbatim Quotes:** {{total_quote_count}}

**Quote Format Validation:**
- [ ] All quotes use italics with quotation marks: *"quote text"*
- [ ] All quotes have source citation in parentheses: (Source: filename.md)
- [ ] Source file names match actual Deep-Research files
- [ ] No inferred or paraphrased "quotes" without actual source text

### Framework Protocols

**React/Next.js Framework Integration (Section 2.5):**
- [ ] gsap.context() pattern documented with quote
- [ ] useGSAP() hook documented with quote
- [ ] SSR handling documented with quote
- [ ] Strict mode handling documented with quote
- [ ] Cleanup requirement documented with quote

**Vue Framework Integration (Section 2.5):**
- [ ] Vue 3 Composition API pattern documented with quote
- [ ] onMounted/onUnmounted lifecycle documented
- [ ] gsap.context() usage in Vue documented

**Cleanup Protocols (Section 3.7):**
- [ ] ScrollTrigger.getAll().forEach() pattern documented with quote
- [ ] Context revert pattern documented with quote
- [ ] Cleanup checklist documented from research

**Verdict:**
- [ ] ✅ PASS - 10+ verbatim quotes, all properly cited
- [ ] ❌ FAIL - Fewer than 10 quotes or quotes lack proper citations

---

## Quality Metrics

**Purpose:** Verify workflow meets premium size targets (2,000-3,000+ lines total)

### File Line Counts

**Measure actual line counts:**

```bash
wc -l workflow.yaml instructions.md template.md checklist.md
```

**workflow.yaml:**
- Current lines: {{workflow_yaml_lines}}
- Pathetic baseline: 122 lines
- Premium target: 150-200+ lines
- Growth: {{workflow_growth}}%
- [ ] ✅ PASS - Meets or exceeds target
- [ ] ❌ FAIL - Below target

**instructions.md:**
- Current lines: {{instructions_md_lines}}
- Pathetic baseline: 419 lines
- Premium target: 1,000-1,700+ lines
- Growth: {{instructions_growth}}%
- [ ] ✅ PASS - Meets or exceeds target
- [ ] ❌ FAIL - Below target

**template.md:**
- Current lines: {{template_md_lines}}
- Pathetic baseline: 304 lines
- Premium target: 400-600+ lines
- Growth: {{template_growth}}%
- [ ] ✅ PASS - Meets or exceeds target
- [ ] ❌ FAIL - Below target

**checklist.md:**
- Current lines: {{checklist_md_lines}}
- Pathetic baseline: 0 lines (MISSING)
- Premium target: 400-700+ lines
- Growth: NEW file
- [ ] ✅ PASS - Meets or exceeds target
- [ ] ❌ FAIL - Below target

**Total Line Count:**
- Total: {{total_lines}}
- Premium target: 2,000-3,000+ lines
- [ ] ✅ PASS - Within target range
- [ ] ❌ FAIL - Below 2,000 lines

### Growth Metrics

**Overall Growth:**
- Pathetic total: 845 lines (workflow.yaml + instructions.md + template.md, no checklist)
- Premium total: {{premium_total}} lines
- Growth: {{overall_growth}}% (+{{lines_added}} lines)

**Target:** +1,500-2,500% growth (150-250% increase)
- [ ] ✅ Exceeded target growth
- [ ] ✅ Met target growth
- [ ] ⚠️ Below target but above 2,000 lines total
- [ ] ❌ Failed to reach minimum 2,000 lines

**Research Density:**
- Verbatim quotes per 100 lines: {{research_density}}
- Target: 1+ quotes per 100 lines (10 quotes / 1,000 lines = 1.0)
- [ ] ✅ PASS - Meets or exceeds research density
- [ ] ❌ FAIL - Below research density target

**Verdict:**
- [ ] ✅ PASS - All files meet premium targets
- [ ] ⚠️ PARTIAL - Most files meet targets, minor gaps
- [ ] ❌ FAIL - Multiple files below targets

---

## Functionality Tests

**Purpose:** Verify workflow executes without errors

### Workflow Execution Test

**Execute workflow from start to finish:**

1. [ ] Workflow loads successfully (no YAML parsing errors)
2. [ ] Step 1 (Director requirements gathering) executes
3. [ ] Step 2 (Pattern Analysis Gate) blocks until user continues
4. [ ] Step 3 (Framework Integration Gate) blocks until user continues
5. [ ] Step 4 (Cleanup Protocol Gate) blocks until user continues
6. [ ] Step 5 (VFX Artist implementation) executes
7. [ ] Step 6 (Integration guide) executes
8. [ ] Step 7 (Tech Director validation - optional) executes if available
9. [ ] Step 8 (Director presentation) executes
10. [ ] Step 9 (Pattern library addition - optional) executes if requested

**Template Output Execution:**
- [ ] template-output tags save content to file
- [ ] User approval checkpoints function correctly
- [ ] Placeholders ({{variable}}) resolve correctly
- [ ] Output file generated at default_output_file path

**Error Handling:**
- [ ] No uncaught exceptions during execution
- [ ] Conditional checks work correctly (<check if="...">)
- [ ] invoke-workflow tags function (if pattern_source == 'describe')
- [ ] All XML tags properly closed

**Variable Resolution:**
- [ ] {config_source} resolves correctly
- [ ] {project-root} resolves correctly
- [ ] {module_root} resolves correctly
- [ ] {pattern_library} resolves correctly
- [ ] {{date}} and {{timestamp}} generate correctly

**Verdict:**
- [ ] ✅ PASS - Workflow executes without errors
- [ ] ⚠️ PARTIAL - Minor issues but workflow completes
- [ ] ❌ FAIL - Workflow fails to execute or has major errors

---

## BMAD v6 Compliance

**Purpose:** Verify workflow follows all BMAD structural conventions

### workflow.yaml Compliance

**Required Sections Present:**
- [ ] name
- [ ] description
- [ ] author
- [ ] version
- [ ] complexity
- [ ] standalone
- [ ] config_source
- [ ] required_mcp
- [ ] deep_research_sections (CRITICAL for research-backed workflows)
- [ ] archon_sources (CRITICAL for pattern-backed workflows)
- [ ] deep_research_base
- [ ] installed_path
- [ ] template
- [ ] instructions
- [ ] validation
- [ ] default_output_file
- [ ] inputs
- [ ] outputs
- [ ] success_criteria
- [ ] web_bundle

**Deep-Research Integration:**
- [ ] deep_research_sections lists all sections used (2.5, 3.7)
- [ ] deep_research_base path configured correctly
- [ ] Section descriptions provided with each section number

**Archon MCP Integration:**
- [ ] archon_sources lists priority source IDs
- [ ] Source IDs have descriptions (what each source provides)

**Multi-Agent Coordination:**
- [ ] agents section defines all 4 agents (director, cinematographer, vfx_artist, tech_director)
- [ ] Each agent has name, role, responsibilities defined

**Verdict:**
- [ ] ✅ PASS - All BMAD v6 fields present and correct
- [ ] ⚠️ PARTIAL - Most fields present, minor gaps
- [ ] ❌ FAIL - Missing critical fields

### instructions.md Compliance

**Required Elements:**
- [ ] `<critical>` tags for workflow.xml reference and workflow.yaml load requirement
- [ ] `<workflow>` wrapper tag
- [ ] `<step n="X" goal="...">` tags with sequential numbering
- [ ] `<action>` tags for execution instructions
- [ ] `<ask response="...">` tags for user input
- [ ] `<check if="...">` tags for conditional logic
- [ ] `<template-output>` tags for file saves
- [ ] `<research-gate>` tags with enforcement="MANDATORY"
- [ ] `<checkpoint>` tags with blocking="true"
- [ ] `<mandate>` tags for critical requirements

**XML Tag Compliance:**
- [ ] All opening tags have matching closing tags
- [ ] Conditional blocks use <check>...</check> (not inline if without closing)
- [ ] No invalid or unsupported tags used

**Verdict:**
- [ ] ✅ PASS - All BMAD XML conventions followed
- [ ] ⚠️ PARTIAL - Most conventions followed, minor issues
- [ ] ❌ FAIL - Major XML structure issues

### template.md Compliance

**Required Elements:**
- [ ] Uses {{placeholder}} syntax for variables
- [ ] Includes research citations section
- [ ] Includes implementation team section
- [ ] Properly formatted markdown (headings, code blocks, lists)

**Conditional Content:**
- [ ] `<check if="...">` tags for framework-specific sections
- [ ] Conditional blocks properly closed

**Verdict:**
- [ ] ✅ PASS - Template follows BMAD conventions
- [ ] ❌ FAIL - Template structure issues

---

## Pattern Adaptation Validation

**Purpose:** Verify workflow properly handles pattern adaptation (not just pattern creation)

### Pattern Source Handling

**All 4 Pattern Sources Supported:**
- [ ] library - Pattern from 60+ pattern library
- [ ] research - From research-gsap-pattern workflow output
- [ ] url - From URL/CodePen/example
- [ ] describe - Invokes research-gsap-pattern first

**Pattern Source Logic:**
- [ ] Conditional branches for each source type
- [ ] Library: Reads .pattern.yaml file from {pattern_library}/
- [ ] Research: Reads research report markdown file
- [ ] URL: Uses Archon MCP to analyze and find similar patterns
- [ ] Describe: Invokes research-gsap-pattern workflow before proceeding

**Pattern Analysis:**
- [ ] GSAP features identified (tween methods, timeline usage, easing, stagger)
- [ ] Plugin requirements identified (ScrollTrigger, SplitText, etc.)
- [ ] Complexity assessment performed (Low/Medium/High)
- [ ] Adaptation requirements identified (selector changes, timing, framework considerations)

**Verdict:**
- [ ] ✅ PASS - All pattern sources handled correctly
- [ ] ⚠️ PARTIAL - Most sources handled, minor gaps
- [ ] ❌ FAIL - Pattern source handling incomplete

---

## Framework Integration Validation

**Purpose:** Verify workflow properly adapts patterns to different frameworks using Deep-Research Section 2.5

### Supported Frameworks

**All 5 Frameworks Supported:**
- [ ] vanilla - Pure JavaScript
- [ ] react - React functional components
- [ ] nextjs - Next.js with SSR considerations
- [ ] vue - Vue 3 Composition API
- [ ] svelte - Svelte framework

### Framework-Specific Protocols (Section 2.5)

**React Framework:**
- [ ] useEffect() or useGSAP() hook pattern documented
- [ ] useRef() pattern for element targeting
- [ ] gsap.context() pattern with ctx.revert() cleanup
- [ ] Strict mode handling (React 18 double-invocation)
- [ ] Quotes from Section 2.5 for React patterns

**Next.js Framework:**
- [ ] All React patterns above
- [ ] "use client" directive for client-side components
- [ ] SSR handling (typeof window checks, useEffect execution)
- [ ] Plugin registration in client-side only
- [ ] Quotes from Section 2.5 for Next.js SSR

**Vue Framework:**
- [ ] onMounted() / onUnmounted() lifecycle hooks
- [ ] ref() pattern for element targeting
- [ ] gsap.context() optional usage
- [ ] ctx.revert() cleanup on unmount
- [ ] Quotes from Section 2.5 for Vue patterns

**Vanilla Framework:**
- [ ] Direct element selection (querySelector)
- [ ] Manual cleanup on route change (SPA consideration)
- [ ] ScrollTrigger.getAll().forEach(t => t.kill()) pattern
- [ ] No framework lifecycle management needed

**Framework Integration Code Generation:**
- [ ] Setup code adapted to framework
- [ ] Imports adapted to framework
- [ ] Lifecycle hooks adapted to framework
- [ ] Cleanup adapted to framework

**Verdict:**
- [ ] ✅ PASS - All frameworks properly supported with Section 2.5 protocols
- [ ] ⚠️ PARTIAL - Most frameworks supported, minor gaps
- [ ] ❌ FAIL - Framework integration incomplete or not research-backed

---

## Cleanup Protocol Validation

**Purpose:** Verify workflow enforces proper cleanup using Deep-Research Section 3.7

### Cleanup Research Gate (Step 4)

**Research Gate Present:**
- [ ] Step 4 has `<research-gate enforcement="MANDATORY" blocking="true">`
- [ ] Deep-Research Section 3.7 read command present
- [ ] ScrollTrigger cleanup protocol extracted from research
- [ ] Context revert pattern extracted from research
- [ ] Approval checkpoint blocks until user continues

### Cleanup Protocols Applied

**ScrollTrigger Cleanup:**
- [ ] ScrollTrigger.getAll().forEach(trig => trig.kill()) pattern documented
- [ ] Quote from Section 3.7 about killing ScrollTriggers
- [ ] Pinned elements unpinned
- [ ] DOM returned to normal before cleanup

**Context Revert Cleanup:**
- [ ] ctx.revert() documented for framework cleanup
- [ ] Quote from Section 3.7 about context revert
- [ ] Kills all tweens/timelines
- [ ] Reverts inline styles
- [ ] Kills ScrollTriggers
- [ ] Removes event listeners

**Cleanup Checklist (from Section 3.7):**
- [ ] Kill all ScrollTriggers
- [ ] Kill all tweens/timelines
- [ ] Revert inline styles
- [ ] Remove event listeners
- [ ] Unpin pinned elements
- [ ] Clear stored references

**Framework-Specific Cleanup:**
- [ ] React: return () => ctx.revert() in useEffect
- [ ] Next.js: Same as React + SSR considerations
- [ ] Vue: onUnmounted(() => ctx.revert())
- [ ] Vanilla: Manual cleanup function on route change

**Verdict:**
- [ ] ✅ PASS - Cleanup protocols complete and research-backed
- [ ] ⚠️ PARTIAL - Most cleanup covered, minor gaps
- [ ] ❌ FAIL - Cleanup incomplete or not research-backed

---

## Multi-Agent Coordination Validation

**Purpose:** Verify workflow properly coordinates 4 agents with clear handoffs

### Agent Roles

**Director (Orchestrator):**
- [ ] Step 1: Gathers requirements (pattern_source, target_context, framework, customizations)
- [ ] Step 8: Presents final implementation
- [ ] Step 9: Facilitates pattern library addition (optional)
- [ ] Clear role: Orchestration and user communication

**Cinematographer (Pattern Analyst):**
- [ ] Step 2: Pattern Analysis Gate (MANDATORY)
- [ ] Step 3: Framework Integration Research Gate (MANDATORY - Section 2.5)
- [ ] Step 4: Cleanup Protocol Research Gate (MANDATORY - Section 3.7)
- [ ] Clear role: Research and analysis

**VFX Artist (Implementation Specialist):**
- [ ] Step 5: Adapts pattern to target context
- [ ] Step 6: Creates integration guide
- [ ] Applies all research protocols from Cinematographer
- [ ] Clear role: Implementation and code generation

**Tech Director (Validator - Phase 2 Optional):**
- [ ] Step 7: Quick validation via Chrome DevTools (optional)
- [ ] Visual validation, console check, performance estimate
- [ ] Clear role: Quality validation

### Agent Handoffs

**Director → Cinematographer:**
- [ ] Passes: pattern_source, pattern_identifier, target_context, framework, customizations
- [ ] Receives: pattern_details, adaptation_strategy, framework_protocols, cleanup_strategy

**Cinematographer → VFX Artist:**
- [ ] Passes: All research findings, protocols, cleanup strategy
- [ ] Receives: Complete implementation code, integration guide

**VFX Artist → Tech Director:**
- [ ] Passes: Implementation code, target context
- [ ] Receives: Validation results, optimization suggestions

**Tech Director → Director:**
- [ ] Passes: Validation results
- [ ] Receives: Final presentation to user

**Verdict:**
- [ ] ✅ PASS - All agents have clear roles and handoffs
- [ ] ⚠️ PARTIAL - Most coordination clear, minor ambiguity
- [ ] ❌ FAIL - Agent coordination unclear or broken

---

## Final Validation Summary

### Critical Requirements (MUST PASS)

- [ ] Research Enforcement Test: PASS (all 3 gates MANDATORY and blocking)
- [ ] File Path Verification: PASS (all paths point to Deep-Research)
- [ ] Research Citation Audit: PASS (10+ verbatim quotes with citations)

**If ANY critical requirement fails, workflow is NOT premium. Fix immediately.**

### Quality Requirements (SHOULD PASS)

- [ ] Quality Metrics: PASS (2,000-3,000+ lines total)
- [ ] Functionality Tests: PASS (workflow executes without errors)
- [ ] BMAD v6 Compliance: PASS (all conventions followed)
- [ ] Pattern Adaptation: PASS (all 4 sources handled)
- [ ] Framework Integration: PASS (all 5 frameworks with Section 2.5 protocols)
- [ ] Cleanup Protocols: PASS (Section 3.7 protocols enforced)
- [ ] Multi-Agent Coordination: PASS (clear roles and handoffs)

### Overall Workflow Classification

**PREMIUM Workflow (ALL critical + MOST quality requirements pass):**
- [ ] ✅ PREMIUM - Ready for production use
  - 3/3 critical requirements: PASS
  - 6+/7 quality requirements: PASS
  - Research-backed, systematic, validated

**ACCEPTABLE Workflow (ALL critical + SOME quality requirements pass):**
- [ ] ⚠️ ACCEPTABLE - Functional but needs polish
  - 3/3 critical requirements: PASS
  - 4-5/7 quality requirements: PASS
  - Research-backed but some quality gaps

**PATHETIC Workflow (ANY critical requirement fails):**
- [ ] ❌ PATHETIC - Not production-ready
  - <3/3 critical requirements: FAIL
  - Research can be skipped OR no research backing OR wrong file paths
  - MUST be rebuilt using correct methodology

---

## Rebuild Recommendation

**If workflow is classified as PATHETIC or ACCEPTABLE:**

### Issues Identified

List ALL issues found during validation:

1. {{issue_1}}
2. {{issue_2}}
3. {{issue_3}}

### Fixes Required

For EACH issue, specify the fix:

1. {{fix_1}}
2. {{fix_2}}
3. {{fix_3}}

### Rebuild Steps

If major rebuild needed:

1. [ ] Re-read VFX conversion spec (if one exists for this workflow)
2. [ ] Re-identify Deep-Research sections
3. [ ] Re-read ALL Deep-Research sections
4. [ ] Rebuild workflow.yaml with proper research integration
5. [ ] Rebuild instructions.md with MANDATORY blocking gates
6. [ ] Rebuild template.md with research citations
7. [ ] Rebuild checklist.md with validation criteria
8. [ ] Re-test research enforcement
9. [ ] Re-verify quality metrics
10. [ ] Re-classify workflow

---

## Post-Validation Actions

**After validation complete:**

1. [ ] Update master plan with workflow status
2. [ ] Mark workflow as PREMIUM (or PATHETIC if failed)
3. [ ] Document lessons learned
4. [ ] Commit changes with proper message format:
   - Example: `rebuild: implement-from-pattern - pathetic → premium (+214%)`
5. [ ] Update progress tracker in master plan

---

## Notes

**Validation Date:** {{validation_date}}
**Validated By:** {{validator_name}}
**Workflow Status:** {{final_status}} (PREMIUM / ACCEPTABLE / PATHETIC)

**Key Insights:**
{{validation_insights}}

**Recommendations:**
{{validation_recommendations}}

---

_This checklist ensures the implement-from-pattern workflow meets GSAP Excellence premium standards._
_Research enforcement is CRITICAL - never skip validation of MANDATORY blocking gates._
