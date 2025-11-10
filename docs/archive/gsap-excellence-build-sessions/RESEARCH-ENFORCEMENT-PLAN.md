# GSAP Excellence - Research Enforcement Implementation Plan

**Status:** DEFERRED - Implement after workflow architecture conversion
**Created:** 2025-11-05
**Priority:** HIGH (blocks module value proposition)
**Estimated Implementation Time:** 3-4 hours (after workflow conversion complete)

---

## 🎯 Executive Summary

**Problem Identified:**
Agents skip research despite extensive knowledge sources (Archon KB, Deep-Research docs, web search) because research is described as a VALUE/PRINCIPLE, not enforced as a PROCEDURAL MANDATE.

**Core Issue:**
Agents can rationalize away research ("this is simple", "I already know this") because instructions say "you SHOULD research" not "you CANNOT proceed until research complete."

**Solution:**
Two-layer enforcement:
1. **Workflow-level gates** - Explicit blocking checkpoints in workflow files
2. **Agent-level behavioral mandate** - Procedural research protocol in agent personas

**Why Deferred:**
Module currently uses inline actions (80% of commands) embedded in agent files. Converting to proper workflow structure FIRST means research gates go in the right place from the start.

---

## 📊 Problem Analysis

### Current State (Before Workflow Conversion)

**Research Resources Available:**
- ✅ Archon MCP: 89 sources, 2.2M+ words (gsap.com, Codrops, CodePen, etc.)
- ✅ Deep-Research docs: 43 sections, ~15,000 words of synthesized wisdom
- ✅ Web search: Latest 2025 patterns and examples
- ✅ Context7 MCP: Up-to-date API docs

**Research Usage Pattern (Current):**
- 🔴 Cinematographer workflow (creative-ideation): HAS research protocol, NOT ENFORCED
- 🔴 Inline actions (80% of commands): Have research instructions, NOT ENFORCED
- 🔴 Agent personas: Say "research from multiple sources" (principle, not mandate)

**Result:**
Agents acknowledge research requirement but skip execution unless user explicitly prompts: "Did you search Archon first?"

### Root Causes

**1. Values vs. Procedures**

❌ **Current Pattern (Doesn't Work):**
```xml
<principles>
  - Research from multiple sources - never rely on one
  - Prioritize 2024-2025 examples
  - Find premium patterns, not basic tutorials
</principles>
```

This is a **VALUE** - agents read it, agree with it, then rationalize skipping it.

✅ **Needed Pattern (Works):**
```xml
<research-gate enforcement="MANDATORY" blocking="true">
  <halt>STOP. You cannot proceed until research is complete.</halt>

  <phase n="1" required="true">
    Execute: rag_search_knowledge_base("...", match_count=5)
    Evidence: List 3-5 findings with citations
  </phase>

  <checkpoint>
    Present research summary
    WAIT for user "Continue [c]"
  </checkpoint>
</research-gate>
```

This is a **PROCEDURE** - step-by-step process that's harder to rationalize away.

**2. Inline Actions vs. Workflows**

Current architecture has research protocols embedded in agent files:
- Editor `*analyze` command: ~200 lines including research steps
- Cinematographer `*timing` command: ~150 lines including Archon queries
- Director `*review` command: ~180 lines including KB research

These load on EVERY agent activation, but aren't enforced as blocking gates.

**After workflow conversion:**
- Editor `*analyze` → `/workflows/analyze-animation/` with research gate at step 1
- Cinematographer `*timing` → `/workflows/analyze-timing/` with research gate at step 1
- Director `*review` → `/workflows/review-quality/` with research gate at step 1

Research gates become explicit, blocking checkpoints in workflow structure.

---

## 🏗️ Implementation Architecture

### Layer 1: Workflow-Level Research Gates

**Target Workflows** (After Conversion):

**Critical (MUST have research gates):**
1. `creative-ideation` - Generate premium concepts (ALREADY HAS GATE STRUCTURE, needs enforcement)
2. `animation-production` - Full production pipeline (multiple research checkpoints)
3. `implement-from-pattern` - Implement animations (research patterns before coding)
4. `debug-animation` - Fix issues (research known pitfalls first)
5. `refine-timing` - Polish timing (research easing/choreography patterns)
6. `analyze-animation` - Code analysis (research common pitfalls)
7. `review-quality` - Quality assessment (research premium benchmarks)
8. `analyze-timing` - Timing deep dive (research timing frameworks)
9. `analyze-motion` - Motion analysis (research visual translation patterns)

**Validation (No research needed):**
- `validate-60fps` - Automated performance testing
- `validate-modern` - GSAP 3.13+ compliance scan
- `memory-profiling` - Chrome DevTools automation
- `accessibility-audit` - WCAG checklist validation

**Setup/Utility (Minimal research):**
- `setup-gsap-project` - Uses boilerplate patterns
- `harvest-patterns` - Documents existing work

### Research Gate Template (Workflow Files)

Insert at beginning of Step 1 or Step 2 (after context gathering):

```xml
<step n="2" goal="Research Phase - Multi-Source Knowledge Gathering">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to planning/implementation until research complete</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on user's request:
    - Context: {{user_context}}
    - Component: {{component_type}}
    - Goals: {{animation_goals}}

    Execute the complete research protocol below BEFORE proceeding.</mandate>

  <!-- TIER 1A: Archon KB Search -->
  <phase n="1" title="Archon KB Systematic Query" required="true">
    <action>Execute at least 3 targeted searches:
      1. rag_search_knowledge_base("{{component_type}} GSAP patterns", match_count=5)
      2. rag_search_knowledge_base("{{animation_goal}} techniques", match_count=5)
      3. rag_search_code_examples("{{component_type}} implementation", match_count=5)
    </action>

    <evidence required="true">
      Present 8-15 key findings organized by source:
      - Pattern names/descriptions
      - Source citations (gsap.com, Codrops, CodePen, etc.)
      - Quality indicators (basic/professional/premium)
      - Relevance to current task
    </evidence>

    <validation>If results insufficient, refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Framework -->
  <phase n="2" title="Deep-Research Framework Application" required="true">
    <action>Consult relevant sections from Deep-Research knowledge base:
      Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/

      Required sections (task-dependent):
      - Section 1.1: Animator's Mindset (planning tasks)
      - Section 1.2: Visual Translation (implementation tasks)
      - Section 2.2: Timeline Techniques (choreography tasks)
      - Section 5.3: Debugging Jank (debugging tasks)
      - Section 8.1-8.10: Common Pitfalls (analysis tasks)
    </action>

    <evidence required="true">
      Document which sections informed approach:
      - Section numbers and titles
      - Key principles applied
      - Specific techniques referenced
    </evidence>
  </phase>

  <!-- TIER 2: Web Search (if gaps exist) -->
  <phase n="3" title="2025-Current Trends (Conditional)" required="conditional">
    <condition>If Archon/Deep-Research don't cover 2025-specific patterns</condition>

    <action>Search for recent premium examples:
      - WebSearch("{{component_type}} animation Awwwards 2025")
      - WebSearch("GSAP {{technique}} premium examples 2024")
      - Target: Linear, Stripe, Vercel, Apple (known premium implementations)
    </action>

    <evidence>
      Present 3-5 recent examples with URLs
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Findings Summary**

      **TIER 1A: Archon MCP Findings**
      [List 8-15 patterns with citations]

      **TIER 1B: Deep-Research Frameworks**
      [List sections consulted and key principles]

      **TIER 2: Web Search (if applicable)**
      [List recent premium examples]

      **SYNTHESIS:**
      [3-5 key insights that will inform implementation]

      **CITATIONS:**
      [All sources with IDs/URLs]
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to next step.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<action>Proceed to planning/implementation using research findings...</action>
<template-output>research_summary, archon_findings, deep_research_sections_applied</template-output>
</step>
```

### Layer 2: Agent-Level Behavioral Mandate

**Target Agents:** All 5 agents (Director, Cinematographer, VFX, Editor, Tech Director)

**Location:** Add to `<persona>` section, after `<principles>`

```xml
<persona>
  <role>...</role>
  <identity>...</identity>
  <communication_style>...</communication_style>

  <principles>
    - Existing principles...
  </principles>

  <!-- ========== NEW: RESEARCH BEHAVIORAL MANDATE ========== -->
  <research-protocol enforcement="MANDATORY">
    <trigger>When user requests: planning, implementation, debugging, analysis, timing refinement</trigger>

    <procedure cannot-skip="true">
      <step n="1">HALT execution</step>
      <step n="2">Identify research context from user request</step>
      <step n="3">Execute Archon KB queries (minimum 3 searches)</step>
      <step n="4">Read relevant Deep-Research sections</step>
      <step n="5">WebSearch for 2025 trends if Archon/Deep-Research have gaps</step>
      <step n="6">Present findings summary with citations</step>
      <step n="7">WAIT for user "Continue [c]"</step>
      <step n="8">THEN proceed to execution</step>
    </procedure>

    <rationalization-prevention>
      ❌ You CANNOT say: "this is simple, I'll skip research"
      ❌ You CANNOT say: "I already know this pattern"
      ❌ You CANNOT say: "let me implement first, research later"

      ✅ You MUST execute steps 1-8 BEFORE any planning/coding/debugging
      ✅ Only {user_name} can override with explicit "Skip [s]" command
      ✅ This is a PROCESS, not a suggestion
    </rationalization-prevention>

    <knowledge-sources>
      <tier-1-primary>
        - Archon MCP: 89 sources, rag_search_knowledge_base() and rag_search_code_examples()
        - Deep-Research: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/ (43 sections)
      </tier-1-primary>

      <tier-2-fallback>
        - WebSearch: Latest 2025 premium examples (Awwwards, agencies, Linear/Stripe/Vercel)
      </tier-2-fallback>

      <tier-3-verification>
        - Context7 MCP: API verification for GSAP 3.13+ features only
      </tier-3-verification>
    </knowledge-sources>
  </research-protocol>
  <!-- ========== END RESEARCH BEHAVIORAL MANDATE ========== -->
</persona>
```

---

## ⚙️ Configuration Changes

### config.yaml Updates

Add after `output_folder`:

```yaml
# Research Configuration (GSAP Excellence Module)
research_enforcement:
  mode: "mandatory"                    # "mandatory" | "recommended" | "optional"
  depth: "tier-1-2-3"                 # Full protocol: Archon + Deep-Research + WebSearch
  auto_validate: true                  # Require user approval after research

  sources:
    archon_kb: true                    # Primary: 89 sources, 2.2M+ words
    deep_research_docs: true           # Primary: 43 sections, synthesized wisdom
    web_search_fallback: true          # Fallback: 2025-current trends
    context7_verification: true        # Rare: API verification only

# Pattern Library Configuration
pattern_library:
  default_category: "premium-showcases"  # User's preferred starting point
  auto_harvest: true                     # Auto-save successful animations

# Performance Configuration
performance:
  target_fps: 60                       # Default FPS target
  validate_60fps_mandatory: true       # Require 60fps validation before delivery
  test_devices:
    - "desktop-high-end"
    - "desktop-mid-range-4x-throttle"  # Primary testing baseline
    - "mobile-ios"
    - "mobile-android"
```

---

## 🧪 Testing Protocol

### Phase 1: Workflow Research Gates (After Conversion)

**Test Scenario:**
1. Load Director agent
2. Execute `*plan` (creative-ideation workflow)
3. Observe: Does agent HALT at research gate?
4. Observe: Does agent execute Archon searches?
5. Observe: Does agent present findings summary?
6. Observe: Does agent WAIT for "Continue [c]"?

**Success Criteria:**
- ✅ Agent halts before research
- ✅ Agent executes at least 3 Archon searches
- ✅ Agent reads Deep-Research sections
- ✅ Agent presents structured summary with citations
- ✅ Agent waits for approval before proceeding
- ✅ User can see tool calls (rag_search_knowledge_base executions)

**Failure Modes to Watch:**
- ❌ Agent skips research gate
- ❌ Agent says "I should research" but doesn't execute tools
- ❌ Agent presents summary but doesn't wait for approval
- ❌ Agent rationalizes: "This is simple, skipping research"

### Phase 2: Agent Behavioral Mandate

**Test Scenario:**
1. Load Editor agent
2. Execute `*analyze` (now a workflow after conversion)
3. No explicit research gate in workflow
4. Observe: Does agent enforce research via behavioral mandate?

**Success Criteria:**
- ✅ Agent executes research protocol automatically
- ✅ Agent behavior applies to ALL workflows (even those without explicit gates)
- ✅ Agent cannot rationalize out of research

### Phase 3: Inline Commands (If Any Remain)

**Test Scenario:**
1. Load Director agent
2. Execute `*crew` (informational inline command)
3. Observe: Does agent skip research for non-research tasks?

**Success Criteria:**
- ✅ Agent correctly identifies this doesn't need research
- ✅ Research mandate applies only to: planning, implementation, debugging, analysis

---

## 📋 Implementation Checklist

### Pre-Implementation (After Workflow Conversion Complete)

- [ ] All inline actions converted to workflows (target: 20-25 new workflows)
- [ ] Workflow architecture validated and tested
- [ ] Token efficiency improvements confirmed

### Implementation Steps

**Step 1: Add Workflow Research Gates** (2-3 hours)
- [ ] creative-ideation workflow (enhance existing gate)
- [ ] animation-production workflow
- [ ] implement-from-pattern workflow
- [ ] debug-animation workflow
- [ ] refine-timing workflow
- [ ] analyze-animation workflow (new)
- [ ] review-quality workflow (new)
- [ ] analyze-timing workflow (new)
- [ ] analyze-motion workflow (new)

**Step 2: Add Agent Behavioral Mandates** (30 minutes)
- [ ] Director persona
- [ ] Cinematographer persona
- [ ] VFX Artist persona
- [ ] Editor persona
- [ ] Tech Director persona

**Step 3: Update Configuration** (15 minutes)
- [ ] config.yaml research settings
- [ ] config.yaml pattern library settings
- [ ] config.yaml performance settings

**Step 4: Testing** (1 hour)
- [ ] Test workflow research gates (Phase 1)
- [ ] Test agent behavioral mandate (Phase 2)
- [ ] Test inline commands remain flexible (Phase 3)
- [ ] Validate token efficiency

**Step 5: Documentation** (30 minutes)
- [ ] Update README.md with research protocol
- [ ] Update QUICKSTART.md with research examples
- [ ] Add "How Research Works" section to docs
- [ ] Update BUILD-SESSION-SUMMARY.md

---

## 🎯 Expected Outcomes

### Immediate Benefits

1. **Research Becomes Non-Negotiable**
   - Agents cannot skip research without explicit user override
   - Research happens BEFORE planning/implementation/debugging
   - User sees evidence of research (tool calls, citations)

2. **Module Value Proposition Realized**
   - "Research-backed decisions" becomes reality, not aspiration
   - Archon KB (89 sources) actually gets used
   - Deep-Research docs (43 sections) actually inform work
   - Premium patterns discovered, not generic solutions

3. **Quality Improvements**
   - Animations informed by premium examples (Awwwards, agencies)
   - Technical decisions backed by gsap.com official docs
   - Pitfalls avoided via Deep-Research common issues
   - 2025-current trends incorporated via WebSearch

### Long-Term Benefits

1. **Pattern Library Growth**
   - Research-backed patterns automatically harvested
   - Pattern quality improves (premium sources)
   - Reuse accelerates future work

2. **Workflow Efficiency**
   - Research done once, used many times
   - Citations preserved for future reference
   - User confidence in recommendations

3. **Anti-Mediocrity Mission Fulfilled**
   - Module actively fights AI's "safe defaults" tendency
   - Research forces consideration of premium approaches
   - Excellence becomes systematic, not accidental

---

## 📚 Reference Materials

### Key Documents
- `/bmad/gsap-excellence/agents/*.md` - Agent personas (add behavioral mandate)
- `/bmad/gsap-excellence/workflows/*/instructions.md` - Workflow files (add research gates)
- `/bmad/gsap-excellence/config.yaml` - Module configuration
- `/docs/Deep-Research/GSAP-Animation-Mastery/` - Research knowledge base (43 sections)
- `/docs/Deep-Research/GSAP_Animation_Mastery_Master_Reference.md` - Consolidated reference

### Research Gate Examples
- `/bmad/gsap-excellence/workflows/creative-ideation/instructions.md` (lines 25-199) - Has research protocol, needs enforcement gate

### Agent Behavioral Examples
- Review Cinematographer persona (lines 133-1788) for research integration pattern

---

## 🚨 Critical Success Factors

1. **Workflow Conversion Must Be Complete First**
   - Don't add research gates to inline actions
   - Wait for proper workflow structure
   - This document deferred specifically for this reason

2. **Test Iteratively**
   - Add gates to 2-3 workflows first
   - Validate enforcement works
   - Then roll out to remaining workflows

3. **User Experience**
   - Research should feel natural, not bureaucratic
   - Provide value (actual findings), not just process
   - Allow override for edge cases ("Skip [s]")

4. **Token Efficiency**
   - Research gates load ONLY when workflow executed
   - Not loaded on agent activation
   - This is why workflow conversion matters first

---

## 📅 Implementation Timeline (After Workflow Conversion)

**Week 1: Core Workflows** (2-3 hours)
- Add research gates to top 5 workflows
- Add behavioral mandate to all 5 agents
- Update config.yaml
- Basic testing

**Week 2: Remaining Workflows** (1-2 hours)
- Add research gates to remaining 4 workflows
- Extended testing
- Documentation updates

**Week 3: Validation** (1 hour)
- Real-world usage testing
- Gather user feedback
- Refine based on actual usage

**Total Implementation Time:** 4-6 hours (spread across testing period)

---

## 🎬 Final Notes

This research enforcement plan was deferred on 2025-11-05 during module improvement session with Cameron. The decision was made to fix the foundational workflow architecture FIRST (convert inline actions → workflows), THEN implement research enforcement in the proper structure.

**Why This Order Matters:**
- Workflow structure is foundational (affects 80% of commands)
- Research gates belong in workflows, not agent files
- Doing architecture first prevents rework
- Token efficiency gains compound

**Next Steps:**
1. ✅ Document research plan (THIS FILE)
2. 🔄 Convert inline actions to workflows (IN PROGRESS)
3. ⏳ Implement research enforcement (AFTER #2 COMPLETE)

This document captures the complete research enforcement strategy and can be executed when workflow conversion is complete.

**Document Status:** READY FOR IMPLEMENTATION (pending workflow conversion completion)
