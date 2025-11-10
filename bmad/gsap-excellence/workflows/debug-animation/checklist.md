# Debug Animation Workflow - Quality Checklist
# Systematic Debugging Validation with 10-Point Pitfalls Framework

## Systematic Diagnosis Validation (MANDATORY)

### Step 1: Debug Information Gathering

- [ ] **ALL 6 context questions answered**
  - [ ] Animation code (complete, not snippets)
  - [ ] Symptom description (specific, detailed)
  - [ ] Expected behavior (clear specification)
  - [ ] Framework context (version, environment)
  - [ ] Mobile testing status (Yes/No/Unknown)
  - [ ] Page URL (if available for Chrome DevTools)

- [ ] **Context is complete and detailed**
  - [ ] Code includes lifecycle/cleanup context
  - [ ] Symptoms are specific (not vague "doesn't work")
  - [ ] Framework version specified
  - [ ] No critical information missing

### Step 2: Chrome DevTools Analysis (if applicable)

- [ ] **Chrome DevTools integration executed** (if page_url provided)
  - [ ] Screenshot taken (visual state captured)
  - [ ] Console messages checked (errors listed)
  - [ ] Network requests analyzed (GSAP loading verified)
  - [ ] Performance data captured (if jank reported)

- [ ] **OR: Chrome DevTools skipped with justification**
  - [ ] No page_url provided
  - [ ] "N/A - no URL" documented
  - [ ] Code-only analysis approach noted

### Step 3: 10-Point Pitfalls Framework Analysis

- [ ] **ALL 10 pitfalls systematically analyzed**
  - [ ] 8.1 Cleanup/Memory Leaks (HIGH)
  - [ ] 8.2 Wrong Properties (HIGH)
  - [ ] 8.3 immediateRender (MEDIUM)
  - [ ] 8.4 Multiple ScrollTriggers (MEDIUM)
  - [ ] 8.5 Missing overwrite (MEDIUM)
  - [ ] 8.6 Missing refresh() (MEDIUM)
  - [ ] 8.7 Deprecated Syntax (LOW)
  - [ ] 8.8 Infinite Loops (LOW)
  - [ ] 8.9 Mobile Issues (HIGH)
  - [ ] 8.10 from() vs fromTo() (MEDIUM)

- [ ] **Symptom-to-Pitfall mapping documented**
  - [ ] Each pitfall rated: LIKELY / POSSIBLE / UNLIKELY
  - [ ] Rationale provided for each rating
  - [ ] Primary suspect identified with reasoning
  - [ ] Secondary suspects listed (1-2 backups)

- [ ] **Mapping is systematic (not random guessing)**
  - [ ] Symptoms correlated to pitfall characteristics
  - [ ] Severity ratings from framework used
  - [ ] Code analysis supports pitfall identification
  - [ ] Not just "jumping to conclusions"

## Research Validation (MANDATORY)

### Archon MCP Debugging Research

- [ ] **Pitfall-specific Archon query executed**
  - [ ] Conditional query based on primary suspect
  - [ ] IF 8.1: "GSAP cleanup memory leak kill"
  - [ ] IF 8.2: "GSAP performance layout thrashing transform"
  - [ ] IF 8.3: "immediateRender false from animation"
  - [ ] IF 8.4: "ScrollTrigger conflicts multiple triggers"
  - [ ] IF 8.5: "GSAP overwrite mode animation conflicts"
  - [ ] IF 8.6: "ScrollTrigger refresh layout changes"
  - [ ] IF 8.7: "GSAP 3 migration TweenMax deprecated"
  - [ ] IF 8.8: "GSAP repeat infinite cleanup"
  - [ ] IF 8.9: "GSAP mobile iOS Safari issues"
  - [ ] IF 8.10: "GSAP fromTo animation patterns"

- [ ] **General debugging query executed**
  - [ ] "GSAP debugging techniques troubleshooting" query run
  - [ ] Source: b9f6b322298feb21 (gsap.com official)
  - [ ] Match count: 6+

- [ ] **Archon findings documented with citations**
  - [ ] Debugging patterns extracted
  - [ ] Common fixes listed
  - [ ] Code examples captured
  - [ ] Source IDs recorded
  - [ ] Minimum 2-3 Archon sources consulted

### Deep-Research Pitfall Framework

- [ ] **Sidecar knowledge consulted**
  - [ ] File: pitfalls-knowledge.md loaded
  - [ ] Section for primary suspect read
  - [ ] 59k knowledge base accessed

- [ ] **Pitfall section analysis complete**
  - [ ] Description: What this pitfall is
  - [ ] Detection: How to identify it
  - [ ] Fix Strategy: Research-backed solution
  - [ ] Prevention: Best practices extracted

- [ ] **Applied to specific case**
  - [ ] Why pitfall matches symptoms explained
  - [ ] Framework-specific fix considerations noted
  - [ ] SSR/SSG/lifecycle implications identified

### Research Checkpoint Gate

- [ ] **Research checkpoint presented to user**
  - [ ] Diagnosis summary structured
  - [ ] Archon patterns presented
  - [ ] Deep-Research fix strategy outlined
  - [ ] User responded "Continue [c]" to proceed
  - [ ] OR: User explicitly skipped with "Skip [s]"

- [ ] **Research CANNOT be skipped autonomously**
  - [ ] Agent did NOT rationalize skipping
  - [ ] Agent did NOT jump to fix without research
  - [ ] Systematic diagnosis followed

## Fix Implementation Quality

### Code Quality

- [ ] **Fixed code is complete and executable**
  - [ ] No placeholders or {{missing_variables}}
  - [ ] Valid GSAP syntax
  - [ ] Framework integration correct
  - [ ] Lifecycle/cleanup implemented

- [ ] **Fix is research-backed (not trial-and-error)**
  - [ ] Each change references Archon/Deep-Research
  - [ ] Rationale includes research citations
  - [ ] Not generic "try this" advice
  - [ ] Specific to identified pitfall

- [ ] **Framework-specific considerations addressed**
  - [ ] React/Next.js/Vue patterns followed
  - [ ] useGSAP hook properly used (if React)
  - [ ] SSR considerations handled
  - [ ] Cleanup lifecycle correct

### Fix Explanation Quality

- [ ] **3 key changes documented**
  - [ ] Change 1: Description + Why + Source + Impact
  - [ ] Change 2: Description + Why + Source + Impact
  - [ ] Change 3: Description + Why + Source + Impact

- [ ] **Root cause analysis is thorough**
  - [ ] "What happened" step-by-step
  - [ ] "Why it happened" from research
  - [ ] "Impact" explains symptoms
  - [ ] Technical depth (not surface-level)

- [ ] **Before/after comparison clear**
  - [ ] Code diff visible
  - [ ] Symptom resolution explained
  - [ ] Console error clearing noted
  - [ ] Performance improvement quantified

## Output Quality

### Template Variables Populated

- [ ] **All required variables captured**
  - [ ] animation_code, issues_description, expected_behavior
  - [ ] framework_context, mobile_tested, page_url
  - [ ] pitfall_identified, primary_suspect_pitfall, secondary_suspects
  - [ ] archon_debugging_patterns, deep_research_fix_strategy
  - [ ] console_errors, chrome_devtools_findings
  - [ ] fixed_animation_code, fix_change_1, fix_change_2, fix_change_3
  - [ ] prevention_tips, best_practices, testing_strategy
  - [ ] total_research_sources

- [ ] **No missing placeholders in template**
  - [ ] All {{variables}} replaced with content
  - [ ] No "TODO" or "[Fill in]" in report
  - [ ] Citations complete (not "[Source]")

### Debug Report Quality

- [ ] **10-point pitfalls table complete**
  - [ ] All 10 pitfalls rated
  - [ ] Likelihood justified
  - [ ] Notes include analysis
  - [ ] Not just "UNLIKELY" for all

- [ ] **Research citations are complete**
  - [ ] Archon source IDs listed
  - [ ] Deep-Research section number cited
  - [ ] Chrome DevTools tools documented
  - [ ] Total source count accurate

- [ ] **Prevention tips are actionable**
  - [ ] Pitfall-specific tips (3+)
  - [ ] General best practices (3+)
  - [ ] Testing strategy detailed
  - [ ] Framework-specific guidance

- [ ] **Validation checklist included**
  - [ ] Manual testing steps
  - [ ] Browser compatibility check
  - [ ] Mobile testing (if applicable)
  - [ ] Performance validation (60fps)

## Debugging Protocol Validation

### Systematic Approach

- [ ] **Workflow followed in order**
  - [ ] Step 1: Debug info gathering → Complete
  - [ ] Step 2: Chrome DevTools analysis → Complete (or N/A)
  - [ ] Step 3: Symptom-to-Pitfall mapping → Complete
  - [ ] Step 4: Research gate (Archon + Deep-Research) → Complete
  - [ ] Step 5: Fix implementation → Complete
  - [ ] Step 6: Validation → Complete
  - [ ] Step 7: Prevention tips → Complete
  - [ ] Step 8: Report generation → Complete

- [ ] **No steps skipped or batched**
  - [ ] Each step completed before next
  - [ ] Research gate blocked progression
  - [ ] User checkpoint honored
  - [ ] Systematic diagnosis maintained

### Chrome DevTools Integration (if applicable)

- [ ] **Visual analysis performed**
  - [ ] Screenshot captured
  - [ ] Visual bugs documented
  - [ ] Before/after comparison

- [ ] **Console analysis performed**
  - [ ] Errors listed verbatim
  - [ ] GSAP warnings noted
  - [ ] JavaScript errors captured

- [ ] **Performance analysis performed** (if jank reported)
  - [ ] Forced reflows detected
  - [ ] Layout thrashing measured
  - [ ] Bottlenecks identified

- [ ] **OR: Chrome DevTools N/A justified**
  - [ ] No page_url provided
  - [ ] Code-only analysis documented
  - [ ] Limitation acknowledged

## Research Enforcement Test

**CRITICAL:** Can research be skipped?

- [ ] **NO** - Research gate blocks progression (PASS)
  - Workflow includes MANDATORY research-gate tag
  - Checkpoint type="approval-gate" blocking="true"
  - User must explicitly continue or skip
  - Agent cannot rationalize skipping
  - Systematic diagnosis requires research

- [ ] **YES** - Research is optional/skippable (FAIL - fix workflow)
  - No research gate present
  - No blocking checkpoint
  - Agent can proceed without research
  - THIS MUST NOT HAPPEN

## Pitfall Framework Coverage Test

**CRITICAL:** Was 10-point framework actually used?

- [ ] **YES** - Framework drove diagnosis (PASS)
  - All 10 pitfalls analyzed systematically
  - Symptom-to-pitfall mapping documented
  - Primary suspect from framework
  - Deep-Research section consulted
  - Not random guessing

- [ ] **NO** - Framework mentioned but not used (FAIL)
  - Jumped to conclusion without analysis
  - Did not analyze all 10 pitfalls
  - No symptom mapping
  - Generic debugging (not systematic)

## Success Criteria Summary

**Minimum Requirements (MUST HAVE):**
- ✅ All 10 pitfalls systematically analyzed
- ✅ Primary suspect identified with reasoning
- ✅ Archon pitfall-specific query executed
- ✅ Deep-Research section consulted
- ✅ Research checkpoint blocked until approved
- ✅ Fixed code includes research citations
- ✅ Prevention tips from Deep-Research

**Quality Indicators (SHOULD HAVE):**
- ✅ Chrome DevTools analysis (if URL provided)
- ✅ Total research sources ≥ 8
- ✅ 3 key changes documented with sources
- ✅ Framework-specific fix considerations
- ✅ Before/after comparison clear
- ✅ Validation testing checklist

**Excellence Indicators (NICE TO HAVE):**
- ✅ Performance data captured (if jank)
- ✅ Mobile-specific fix (if Pitfall 8.9)
- ✅ Secondary pitfalls documented
- ✅ Alternative fix approaches considered
- ✅ Learning resources recommended

## Debugging Quality Gates

### Gate 1: Symptom Analysis

- [ ] **Symptoms are specific and detailed**
  - Not vague "doesn't work"
  - Specific behaviors described
  - Console errors quoted verbatim
  - Visual issues precisely described

- [ ] **Cannot proceed without clear symptoms**
  - Agent must ask clarifying questions
  - Agent cannot guess at symptoms
  - User must provide specific details

### Gate 2: Pitfall Identification

- [ ] **Systematic analysis performed**
  - All 10 pitfalls considered
  - Evidence-based likelihood rating
  - Not random selection
  - Primary suspect justified

- [ ] **Cannot proceed with generic "unknown" diagnosis**
  - Must identify specific pitfall
  - Must provide reasoning
  - Must cite framework

### Gate 3: Research Execution

- [ ] **Archon + Deep-Research consulted**
  - Pitfall-specific Archon query
  - Deep-Research section read
  - Findings documented
  - Research checkpoint presented

- [ ] **Cannot proceed without research**
  - MANDATORY blocking gate
  - User must approve continuation
  - Agent cannot skip autonomously

### Gate 4: Fix Quality

- [ ] **Fix is research-backed**
  - References Archon patterns
  - Applies Deep-Research guidance
  - Not trial-and-error
  - Citations included

- [ ] **Cannot use generic fixes**
  - "Try this" without rationale = FAIL
  - Must explain WHY fix works
  - Must cite research sources

## Special Considerations

### High Severity Pitfalls (8.1, 8.2, 8.9)

If primary suspect is HIGH severity:

- [ ] **Extra validation required**
  - Memory leak testing (if 8.1)
  - Performance profiling (if 8.2)
  - Mobile device testing (if 8.9)

- [ ] **Impact assessment documented**
  - Production risk explained
  - User experience impact
  - Urgency level communicated

### Mobile-Specific Debugging (Pitfall 8.9)

If iOS Safari or mobile issues reported:

- [ ] **Mobile-specific research**
  - Archon query: "GSAP mobile iOS Safari issues"
  - iOS Safari quirks documented
  - Touch event considerations
  - Viewport/orientation handling

- [ ] **Mobile testing validation**
  - iOS Safari testing required
  - Android Chrome testing recommended
  - Touch interaction verified
  - Performance on mobile checked

### ScrollTrigger-Specific Debugging (Pitfall 8.4, 8.6)

If ScrollTrigger involved:

- [ ] **ScrollTrigger-specific research**
  - Source: 6a6860cfc96e173b (ScrollTrigger docs)
  - Nesting mistake checked (VERY COMMON!)
  - refresh() requirement analyzed
  - Timeline playhead conflict checked

- [ ] **ScrollTrigger validation**
  - Positioning verified
  - Start/end triggers tested
  - Refresh on layout change
  - No multiple triggers conflict

---

## Validation Summary

**Checklist Completion Date:** {{date}}
**Validated By:** [Agent/Human name]

**Research Enforcement:** [PASS / FAIL]
**Pitfall Framework Used:** [PASS / FAIL]
**Fix Quality:** [PASS / FAIL]
**Output Completeness:** [PASS / FAIL]

**Overall Result:** [PASS / FAIL with notes]

**Notes:**
[Any issues found, improvements needed, or exceptional quality observed]

---

**This checklist ensures systematic debugging using the 10-point pitfalls framework with mandatory research enforcement. Every diagnosis must be research-backed, not trial-and-error.**
