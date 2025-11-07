# Animation Quality Review - Workflow Instructions
# KB-Powered Excellence Assessment with Multi-Source Research

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/review-quality/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Animation Details">
<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Director introduces the quality review workflow with film director energy</action>

🎬 **Animation Quality Review (KB-Powered)**

I'll review your animation work against excellence standards backed by comprehensive research.

**Please provide complete details:**

<ask response="animation_description">What should this animation do? (Be specific about behavior and intent)</ask>
<ask response="current_implementation">Current implementation - provide GSAP code OR detailed description</ask>
<ask response="animation_type">Animation type? (hero section / scroll narrative / micro-interaction / page transition / product showcase / other)</ask>
<ask response="specific_concerns">Any specific concerns or areas to focus on? (performance / timing / wow-factor / accessibility / other)</ask>

<action>Confirm understanding and preview the research-backed assessment process</action>

*"Excellent. I'll analyze this against our knowledge base of premium patterns, Deep-Research frameworks, and 2024-2025 cutting-edge examples. Let's begin the research..."*

<template-output>animation_description, current_implementation, animation_type, specific_concerns</template-output>
</step>

<step n="2" goal="Multi-Source Research Protocol - KB-Powered Pattern Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to assessment until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<action>🚨 MANDATORY RESEARCH PROTOCOL - You MUST complete ALL 3 tiers below before proceeding</action>
<action>This step is BLOCKING - you cannot skip to quality assessment without completing research and receiving approval</action>

<action>Based on user's animation review request:
  - Animation Type: {{animation_type}}
  - Specific Concerns: {{specific_concerns}}

  You MUST execute the complete 3-tier research protocol below BEFORE proceeding to quality assessment.</action>

  <!-- TIER 1A: Archon MCP - Premium Pattern Search -->
  <phase n="1" title="Archon MCP Premium Pattern Discovery" required="true">
    <action>Execute systematic searches for premium {{animation_type}} patterns:

    **Search 1: Premium Patterns**
    rag_search_knowledge_base("premium {{animation_type}} patterns", match_count=8)

    **Search 2: Wow-Factor Techniques**
    rag_search_knowledge_base("wow-factor {{animation_type}} techniques", match_count=6)

    **Search 3: Code Examples**
    rag_search_code_examples("{{animation_type}} choreography GSAP", match_count=8)

    **Search 4: Excellence Benchmarks**
    rag_search_knowledge_base("museum-grade {{animation_type}} implementation", match_count=5)

    **If specific concerns mentioned:**
    - If performance: rag_search_knowledge_base("{{animation_type}} 60fps optimization")
    - If timing: rag_search_knowledge_base("{{animation_type}} timing choreography easing")
    - If wow-factor: rag_search_knowledge_base("{{animation_type}} Awwwards premium")
    </action>

    <evidence required="true">
      **ARCHON FINDINGS:**
      Present 10-15 premium patterns discovered, organized by quality tier:

      **TIER 1 - Museum-Grade (Awwwards, premium agencies):**
      - [Pattern name]: [Brief description] (Source: [citation])

      **TIER 2 - Professional (Codrops, advanced tutorials):**
      - [Pattern name]: [Brief description] (Source: [citation])

      **TIER 3 - Solid/Basic (CodePen, standard examples):**
      - [Pattern name]: [Brief description] (Source: [citation])

      **Relevance Assessment:**
      - Which patterns most closely match user's {{animation_type}}?
      - Quality gap: Is user's implementation at Tier 1/2/3 level?
    </evidence>

    <validation>If results insufficient (<8 total findings), refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks - Excellence Standards -->
  <phase n="2" title="Deep-Research Framework Application" required="true">
    <action>Apply Deep-Research quality assessment frameworks:

    **Framework 1: Animator's Mindset (Section 1.1)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/01-11-the-animators-mindset-vs-code-generator.md

    Assessment Questions:
    - Does this animation think like storytelling, not code generation?
    - Is there clear design intent (purpose-driven motion)?
    - Does it choreograph elements in time (not random effects)?
    - Would a human animator be proud of this?

    **Framework 2: Decision Framework (Section 1.4)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/04-14-deciding-between-gsap-and-alternatives.md

    Assessment Questions:
    - Is GSAP the right tool for this animation type?
    - Are premium plugins being used where beneficial? (FREE in 3.13+!)
    - Is the technique appropriate for the context?

    **Framework 3: Timeline Techniques (Section 2.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

    Assessment Questions:
    - Does choreography use overlaps for rhythm (`"-=0.4"`, `"<0.5"`)?
    - Is timing intentional vs. mechanical?
    - Are labels and modular structure used for complex sequences?

    **Additional Frameworks (if concerns mentioned):**
    - Performance concerns → Section 5.5: Optimize for 60fps
    - Accessibility → Section 6.1: prefers-reduced-motion
    - Common issues → Section 8.1-8.10: Pitfalls checklist
    </action>

    <evidence required="true">
      **DEEP-RESEARCH ASSESSMENT:**

      **Section 1.1 - Animator's Mindset:**
      - Storytelling vs. code generation: [PASS/FAIL with explanation]
      - Design intent clarity: [Score 1-10 with reasoning]
      - Choreography quality: [Analysis]

      **Section 1.4 - Decision Framework:**
      - Tool appropriateness: [Analysis]
      - Premium plugin usage: [Opportunities identified]

      **Section 2.2 - Timeline Techniques:**
      - Rhythm and flow: [Assessment]
      - Choreography sophistication: [Analysis]

      **Red Flags Identified:**
      - [List any anti-patterns or common pitfalls detected]
    </evidence>
  </phase>

  <!-- TIER 2: WebSearch - 2024-2025 Premium Comparisons -->
  <phase n="3" title="2025 Premium Examples (Conditional)" required="conditional">
    <condition>If Archon lacks 2025-specific premium examples for {{animation_type}}</condition>

    <action>Search for cutting-edge 2024-2025 implementations:

    **Search 1: Awwwards Winners**
    WebSearch("{{animation_type}} animation Awwwards 2025")

    **Search 2: Premium Brands**
    WebSearch("premium {{animation_type}} Linear Stripe Vercel Apple")

    **Search 3: Industry-Specific**
    WebSearch("{{animation_type}} animation [user_industry] 2024 premium")

    Target: Find 3-5 recent examples that represent current state-of-the-art
    </action>

    <evidence>
      **2024-2025 PREMIUM EXAMPLES:**
      - [URL]: [Brief description of technique]
      - [URL]: [Brief description of technique]
      - [URL]: [Brief description of technique]

      **Trend Analysis:**
      - What's cutting-edge right now for {{animation_type}}?
      - How does user's implementation compare to 2025 standards?
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <action>Present research findings in structured format:</action>
  <action>
      **🔍 RESEARCH COMPLETE - Quality Benchmark Findings**

      **TIER 1A: Archon MCP Premium Patterns**
      [Present 10-15 patterns organized by quality tier]

      **TIER 1B: Deep-Research Framework Assessment**
      [Present framework scores and red flags]

      **TIER 2: 2024-2025 Premium Examples (if applicable)**
      [Present cutting-edge examples]

      **SYNTHESIS - Quality Benchmarking:**
      - **Current Quality Tier:** [Tier 1/2/3 assessment]
      - **Gap Analysis:** [Distance from premium/excellence]
      - **Opportunity Areas:** [What could elevate this to next tier]

      **CITATIONS:**
      [All Archon sources with IDs, Deep-Research sections, WebSearch URLs]
  </action>

<ask response="research_approval">
🚨 RESEARCH CHECKPOINT

{user_name}, review the research findings above. They should be:
- ✅ Comprehensive (Archon patterns + Deep-Research + WebSearch validation)
- ✅ Quality-focused (10-15 premium patterns benchmarked)
- ✅ Relevant (addresses {{animation_type}} and {{specific_concerns}})
- ✅ Structured (3-tier findings + quality assessment)

Type 'continue' to proceed to quality assessment, 'redo' to research again, or 'skip' to bypass research:
</ask>

<check if="research_approval == 'redo'">
  <action>User requested re-research - returning to research protocol</action>
  <goto step="2">Returning to research phase...</goto>
</check>

<check if="research_approval == 'skip'">
  <action>⚠️ User override: Skipping research (not recommended - quality assessment may be incomplete)</action>
</check>

<check if="research_approval == 'continue'">
  <action>✅ Research approved. Proceeding to quality assessment...</action>
</check>

<!-- ========== END RESEARCH GATE ========== -->

<template-output>
archon_premium_patterns,
deep_research_assessment,
websearch_2025_examples,
quality_tier_current,
gap_analysis,
research_citations
</template-output>
</step>

<step n="3" goal="Excellence Assessment - Evaluate Against 5 Criteria">
<action>Using research findings, evaluate animation against Director's excellence criteria</action>

**Excellence Assessment Framework:**

**Criterion 1: ✨ Wow Factor**
<action>Evaluate: Premium vs. generic? Memorable vs. forgettable?

Using Archon premium patterns as benchmark:
- Does this match Tier 1 (museum-grade) patterns?
- Or closer to Tier 2 (professional) or Tier 3 (basic)?
- What specifically creates (or lacks) wow factor?
</action>

**Criterion 2: 🎯 Ambition Level**
<action>Evaluate: Pushing boundaries vs. safe defaults?

Using Deep-Research Section 1.1 (Animator's Mindset):
- Is this thinking like a storyteller or a code generator?
- Safe/obvious choices vs. creative risk-taking?
- Compare against 2025 premium examples (if available)
</action>

**Criterion 3: 🎬 Vision Match**
<action>Evaluate: Implementation matches creative intent?

Using user's {{animation_description}}:
- Does the code achieve stated goals?
- Technical execution quality?
- Any mismatch between intent and reality?
</action>

**Criterion 4: 🤖 AI Detection Test**
<action>Evaluate: Would someone think this is AI-generated?

Red flags for AI-generated mediocrity:
- Generic fade-in-up animations (no personality)
- Equal timing for everything (mechanical)
- No overlaps or rhythm (rigid sequential)
- Missing premium plugin opportunities
- Ignoring Deep-Research principles

Green flags for human-crafted excellence:
- Intentional choreography with overlaps
- Varied easing (personality)
- Premium plugin usage (MorphSVG, SplitText, etc.)
- Storytelling structure
- Deep-Research principles applied
</action>

**Criterion 5: 📚 KB Benchmark**
<action>Evaluate: How does it compare to Archon's premium examples?

Direct comparison:
- User's implementation vs. Tier 1 Archon patterns
- Specific strengths identified
- Specific weaknesses identified
- Distance to excellence (close? moderate gap? large gap?)
</action>

<template-output>
wow_factor_assessment,
ambition_level_assessment,
vision_match_assessment,
ai_detection_assessment,
kb_benchmark_assessment
</template-output>
</step>

<step n="4" goal="Generate Quality Review Report">
<action>Compile comprehensive quality assessment report with citations and specific recommendations</action>

**Report Structure:**

1. **Executive Summary**
   - Overall quality tier: [Tier 1/2/3]
   - Key strengths (3-5 bullet points)
   - Key opportunities (3-5 bullet points)

2. **Excellence Criteria Assessment**
   - Each of 5 criteria with score/analysis
   - KB citations for each assessment

3. **Specific Improvement Recommendations**
   - Prioritized list (HIGH/MEDIUM/LOW impact)
   - Link each recommendation to Archon pattern or Deep-Research section
   - Concrete, actionable steps

4. **Code Examples (if applicable)**
   - Show before/after for key improvements
   - Reference Archon patterns

5. **Citations & References**
   - All Archon sources used
   - All Deep-Research sections consulted
   - All WebSearch examples referenced

**Present final report with film director energy:**

*"That's a wrap on the quality review! Here's my assessment backed by our complete knowledge base..."*

<template-output>
executive_summary,
criteria_assessments,
improvement_recommendations,
code_examples,
final_citations
</template-output>
</step>

</workflow>
