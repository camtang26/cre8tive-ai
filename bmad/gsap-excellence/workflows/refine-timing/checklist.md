# Refine Timing Workflow - Quality Checklist
# Research Enforcement & Output Validation

## Research Validation (MANDATORY)

### Tier 1A: Archon MCP Research

- [ ] **ALL 4 Archon queries executed** (minimum required)
  - [ ] Search 1: Easing curves for desired feel (match_count=8)
  - [ ] Search 2: Timing principles for animation type (match_count=6)
  - [ ] Search 3: Custom easing code examples (match_count=6)
  - [ ] Search 4: Motion design fundamentals (match_count=5)

- [ ] **Archon findings documented with citations**
  - [ ] Easing recommendations include source IDs
  - [ ] Duration guidelines backed by research
  - [ ] Custom easing patterns extracted
  - [ ] Motion principles applied to this case

- [ ] **Archon source IDs recorded**
  - [ ] Primary source: b9f6b322298feb21 (gsap.com official docs)
  - [ ] Additional sources cited where relevant
  - [ ] Minimum 2-3 sources consulted per query

### Tier 1B: Deep-Research Framework Integration

- [ ] **Section 2.1 - Core GSAP Easing consulted**
  - [ ] Easing category identified for desired feel
  - [ ] Duration guidance extracted
  - [ ] Anti-patterns noted (what to avoid)

- [ ] **Section 2.2 - Timeline Techniques** (if multi-element animation)
  - [ ] Coordination pattern identified (stagger/sequence/overlap)
  - [ ] Specific timeline code pattern selected
  - [ ] OR: N/A documented (single element animation)

- [ ] **Section 8.3 - Timing Pitfalls checked**
  - [ ] immediateRender consideration analyzed
  - [ ] Flicker risk assessed (Yes/No + mitigation)
  - [ ] Best practice recommendation documented

- [ ] **Framework sections documented**
  - [ ] Count of sections consulted recorded
  - [ ] Key insights extracted and applied
  - [ ] References included in final report

### Tier 2: WebSearch (Conditional)

- [ ] **WebSearch necessity evaluated**
  - [ ] Archon + Deep-Research coverage assessed
  - [ ] IF gaps exist: WebSearch executed
  - [ ] IF sufficient: "Not needed" documented

- [ ] **Premium examples found** (if WebSearch executed)
  - [ ] 2-3 award-winning examples with specific timing values
  - [ ] URLs and brand names documented
  - [ ] Timing analysis extracted (duration, easing, rationale)

### Research Checkpoint Gate

- [ ] **Research checkpoint presented to user**
  - [ ] Findings formatted in structured output
  - [ ] User responded "Continue [c]" to proceed
  - [ ] OR: User explicitly skipped with "Skip [s]" (rare)

- [ ] **Research CANNOT be skipped autonomously**
  - [ ] Agent did NOT rationalize skipping research
  - [ ] Agent did NOT jump directly to recommendations
  - [ ] Process was followed exactly as specified

## Output Quality

### Code Quality

- [ ] **Refined code is complete and executable**
  - [ ] No placeholders or {{missing_variables}}
  - [ ] Valid GSAP syntax
  - [ ] Framework integration correct (React/Vue/vanilla)
  - [ ] Comments explain key timing decisions

- [ ] **Timing values are research-backed**
  - [ ] Duration chosen from research recommendations (not arbitrary)
  - [ ] Easing selected from Archon/Deep-Research findings
  - [ ] Alternative options provided with trade-offs
  - [ ] Rationale includes research citations

### Analysis Quality

- [ ] **Current timing audit is thorough**
  - [ ] Comparison table includes all timing aspects
  - [ ] Specific issues identified (4 categories checked)
  - [ ] Each issue includes impact analysis + fix

- [ ] **Frame-by-frame breakdown provided**
  - [ ] Motion described in visual language
  - [ ] 4 quarters of animation explained (0-25%, 25-50%, 50-75%, 75-100%)
  - [ ] Overall feel summarized in one sentence
  - [ ] Motion description is vivid (not generic)

- [ ] **Motion theory applied**
  - [ ] Disney's "Timing & Spacing" principle referenced
  - [ ] Film editing rhythms (Walter Murch) considered
  - [ ] Theory connected to practical timing choices

### Template Variables Populated

- [ ] **All required variables captured**
  - [ ] animation_code, animation_type, current_timing, desired_feel, brand_context
  - [ ] primary_easing_recommendation, recommended_duration
  - [ ] archon_sources_consulted, deep_research_sections_applied
  - [ ] total_research_sources, motion_principle_applied
  - [ ] refined_animation_code, frame_by_frame_breakdown
  - [ ] alternative_option_1, alternative_option_2
  - [ ] testing_checklist

- [ ] **No missing placeholders in template**
  - [ ] All {{variables}} replaced with actual content
  - [ ] No "TODO" or "[Fill in]" left in final report
  - [ ] Citations are complete (not "[Source]" placeholders)

### Report Quality

- [ ] **Research citations are complete**
  - [ ] Archon source IDs listed
  - [ ] Deep-Research sections numbered (2.1, 2.2, 8.3)
  - [ ] WebSearch URLs included (if applicable)
  - [ ] Total source count is accurate

- [ ] **Recommendations are actionable**
  - [ ] Primary recommendation is clear and specific
  - [ ] 2-3 alternative options provided
  - [ ] Trade-offs explained for each option
  - [ ] Testing checklist included

## Workflow Completion

### Execution Order

- [ ] **Step 1: Deep Context Gathering** - Complete
  - [ ] All 5 ask tags answered
  - [ ] Context confirmed with user
  - [ ] template-output checkpoint saved

- [ ] **Step 2: Multi-Source Research** - Complete
  - [ ] Research gate MANDATORY enforcement followed
  - [ ] All 3 phases executed (Archon, Deep-Research, WebSearch conditional)
  - [ ] Research checkpoint blocked until user approved
  - [ ] template-output checkpoint saved

- [ ] **Step 3: Timing Analysis** - Complete
  - [ ] Current timing audited against research
  - [ ] Specific issues identified (minimum 1, realistic 2-4)
  - [ ] Motion theory applied
  - [ ] template-output checkpoint saved

- [ ] **Step 4: Refined Implementation** - Complete
  - [ ] Refined code generated
  - [ ] Changes explained with rationale
  - [ ] Alternative options provided
  - [ ] Testing recommendations included
  - [ ] template-output checkpoint saved

- [ ] **Step 5: Generate Report** - Complete
  - [ ] Template.md populated with all variables
  - [ ] Report saved to output_folder
  - [ ] File path confirmed to user

### User Interaction

- [ ] **Communicated in {communication_language}**
  - [ ] All messages in configured language
  - [ ] Film editor persona maintained (✂️ energy)
  - [ ] Technical but accessible tone

- [ ] **User questions answered**
  - [ ] All <ask> tags processed
  - [ ] User responses stored in variables
  - [ ] No assumptions made about missing info

- [ ] **Checkpoints honored**
  - [ ] Stopped at research checkpoint
  - [ ] Waited for "Continue [c]" before proceeding
  - [ ] Did NOT skip ahead autonomously

## Research Enforcement Test

**CRITICAL:** Can research be skipped?

- [ ] **NO** - Research gate blocks progression (PASS)
  - Workflow includes MANDATORY research-gate tag
  - Checkpoint type="approval-gate" blocking="true"
  - User must explicitly continue or skip
  - Agent cannot rationalize skipping

- [ ] **YES** - Research is optional/skippable (FAIL - fix workflow)
  - No research gate present
  - No blocking checkpoint
  - Agent can proceed without research
  - THIS MUST NOT HAPPEN

## Success Criteria Summary

**Minimum Requirements (MUST HAVE):**
- ✅ 4 Archon queries executed with findings
- ✅ 3 Deep-Research sections consulted (2.1, 2.2, 8.3)
- ✅ Research checkpoint blocked until user approved
- ✅ Refined code is executable with research-backed timing
- ✅ Report includes full research citations

**Quality Indicators (SHOULD HAVE):**
- ✅ Total research sources ≥ 10 (demonstrates thoroughness)
- ✅ Frame-by-frame breakdown is vivid (not generic)
- ✅ Alternative options with clear trade-offs
- ✅ Motion theory meaningfully applied (not just mentioned)

**Excellence Indicators (NICE TO HAVE):**
- ✅ WebSearch executed for cutting-edge 2025 examples
- ✅ Custom bezier curves suggested (beyond built-in easing)
- ✅ Brand-specific timing analysis (matches brand personality)
- ✅ Device-specific recommendations (desktop vs mobile)

---

**Validation Date:** {{date}}
**Validated By:** [Agent/Human name]
**Result:** [PASS / FAIL with notes]
