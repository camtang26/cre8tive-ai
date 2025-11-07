# Timing & Easing Analysis Workflow
# Visual Cinematography - KB-Powered Motion Analysis

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/analyze-timing/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Animation Details">
<action>Communicate in {communication_language} throughout workflow execution</action>
<action>Introduce the timing analysis workflow with cinematography expertise</action>

🎥 **Timing & Easing Analysis (KB-Powered)**

Perfect timing is what separates good animations from great ones.

**Please provide complete details:**

<ask response="animation_type">**Animation Type:**
What kind of animation are you working with?
- Scroll reveal (elements appearing on scroll)
- Micro-interaction (button hover, click feedback, icon animation)
- Page load sequence (intro animations, content reveals)
- Timeline choreography (multiple coordinated animations)
- Physics-based motion (spring, bounce, inertia)
- Transition (page/route transitions)
- Other (please describe)</ask>

<ask response="current_timing">**Current Timing/Easing (if any):**
What timing values are you currently using?
- Duration: (e.g., 0.5s, 1.2s, or "none yet")
- Easing: (e.g., power2.out, linear, back.out(1.7), or "default")
- If starting fresh, just say "none" or "starting fresh"</ask>

<ask response="desired_feel">**Desired Feel:**
How should this animation feel?
- Smooth & subtle (gentle, barely noticeable)
- Dramatic & bold (hero moments, attention-grabbing)
- Bouncy & playful (personality, fun, gamified)
- Quick & snappy (responsive, instant feedback)
- Slow & cinematic (luxury, premium, storytelling)
- Other (describe the feeling you want)</ask>

<ask response="context">**Additional Context (optional):**
Any other details that might inform timing decisions?
- Brand personality (playful, professional, luxury, etc.)
- User expectations (what do they expect to see?)
- Technical constraints (performance, framework limitations)
- Reference examples (URLs or descriptions)</ask>

<action>Confirm understanding and preview the research approach</action>

*"Excellent. I'll analyze timing using our knowledge base of GSAP patterns, motion design frameworks, and premium examples. This will give you research-backed recommendations..."*

<template-output>
animation_type,
desired_feel,
current_timing,
date
</template-output>
</step>

<step n="2" goal="Multi-Source Research - Timing Pattern Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to Step 3 until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on user's timing analysis request:
    - Animation Type: {{animation_type}}
    - Desired Feel: {{desired_feel}}
    - Current Timing: {{current_timing}}

    You MUST execute the complete research protocol below BEFORE proceeding to motion analysis.</mandate>

  <!-- TIER 1A: Archon MCP - Easing & Timing Patterns (PRIMARY) -->
  <phase n="1" title="Archon MCP Timing Pattern Discovery" required="true">
    <action>Execute systematic searches for timing and easing patterns:

    **Query Archon's 89 sources systematically:**

    **Search 1: Easing Curves for Desired Feel**
    rag_search_knowledge_base("easing curves {{desired_feel}}", source_id="b9f6b322298feb21", match_count=8)
    → Returns: Easing function recommendations for desired feel
    → Document: Which easing functions match the feel (power1-4, expo, back, bounce, elastic)

    **Search 2: Timing Principles for Animation Type**
    rag_search_knowledge_base("timing principles {{animation_type}}", source_id="b9f6b322298feb21", match_count=6)
    → Returns: Duration recommendations and timing patterns for animation type
    → Document: Typical duration ranges, timing coordination patterns

    **Search 3: Bezier Curve Code Examples**
    rag_search_code_examples("bezier curves {{animation_type}}", match_count=6)
    → Returns: Custom easing code examples
    → Document: CustomEase examples, bezier curve values

    **Search 4: Motion Design Fundamentals**
    rag_search_knowledge_base("motion design fundamentals", source_id="b9f6b322298feb21", match_count=5)
    → Returns: Core motion principles
    → Document: Disney principles, motion theory applicable to this case

    **Priority Source Analysis:**
    Query these specific Archon sources:
    - **b9f6b322298feb21** (gsap.com official) - Authoritative easing documentation
    - **1e5cc3bd5125be3c** (Codrops) - Premium easing tutorials
    - **90c2ef5e8fa816b7** (FreeFrontend) - Real-world easing examples
    </action>

    <evidence required="true">
      **ARCHON TIMING PATTERNS:**
      Present 10-15 timing patterns discovered:

      **Easing Curve Patterns for {{desired_feel}}:**
      - [Easing name]: [Description of feel] (Source: [source_id/URL])
      - [Easing name]: [Description of feel] (Source: [source_id/URL])
      - [Continue for all discovered patterns...]

      **Duration Patterns for {{animation_type}}:**
      - [Duration range]: [When/why to use] (Source: [citation])
      - [Duration range]: [When/why to use] (Source: [citation])

      **Code Examples:**
      - [Pattern name]: [Code snippet summary] (Source: [URL])
      - [Pattern name]: [Code snippet summary] (Source: [URL])

      **Motion Design Fundamentals:**
      - [Principle name]: [How it applies to this case]

      **Relevance Assessment:**
      - Which easing curves best match {{desired_feel}}?
      - What duration ranges are appropriate for {{animation_type}}?
      - Are there custom bezier patterns worth considering?
    </evidence>

    <validation>If results insufficient (<10 patterns), refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks - Motion Principles -->
  <phase n="2" title="Deep-Research Motion Frameworks" required="true">
    <action>Apply Deep-Research motion design frameworks:

    **Framework 1: Visual Inspiration Translation (Section 1.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md

    If user provided visual reference, translate to timing specs:
    - What timing makes this feel "right"?
    - Break down: speed, acceleration, deceleration

    **Framework 2: Core GSAP Concepts (Section 2.1) - PRIMARY FOR TIMING**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md

    Core motion fundamentals:
    - **Tween Basics:** Duration, easing, property animation
    - **Easing Functions:** power1-4, expo, elastic, bounce, back, CustomEase
    - **Staggers:** For multiple elements, timing offset patterns
    - **Disney's 12 Principles:** Timing (principle #8), Ease In/Out (principle #6)

    **Framework 3: Timeline Techniques (Section 2.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

    If coordinated timing (multiple elements):
    - Timeline position parameters (overlaps, delays)
    - Relative positioning patterns (`"-=0.4"`, `"<0.5"`)
    - Modular timeline approach

    **Disney Animation Principles (referenced in docs):**
    - **Timing (Principle #8):** Fast actions vs slow actions
    - **Ease-in and Ease-out (Principle #6):** Acceleration/deceleration
    - **Spacing:** Frame-by-frame motion charts
    </action>

    <evidence required="true">
      **DEEP-RESEARCH FRAMEWORKS APPLIED:**

      **Visual Translation (Section 1.2):**
      - [If user provided reference]: Timing breakdown of visual inspiration
      - Frame-by-frame analysis of desired motion

      **Core GSAP Concepts (Section 2.1):**
      - **Easing Strategy:** [Which easing category matches {{desired_feel}}]
      - **Duration Strategy:** [Why this duration range for {{animation_type}}]
      - **Stagger Patterns:** [If multiple elements, offset timing]
      - **Disney Principles Applied:** [How timing/ease principles inform choices]

      **Timeline Techniques (Section 2.2):**
      - [If coordination needed]: Overlap patterns identified
      - Timeline position parameters recommended
      - Modular structure for complex sequences

      **Motion Theory Integration:**
      - [How motion design principles support recommendations]
    </evidence>
  </phase>

  <!-- TIER 2: WebSearch - 2024-2025 Premium Examples (CONDITIONAL) -->
  <phase n="3" title="2025 Premium Timing Examples (Conditional)" required="conditional">
    <condition>If Archon + Deep-Research don't provide sufficient {{animation_type}} timing examples</condition>

    <action>Search for cutting-edge timing patterns:

    **Search 1: Awwwards Premium Timing**
    WebSearch("GSAP easing {{animation_type}} Awwwards 2025")
    → Find award-winning examples of this animation type
    → Document: Which easing they use, why it feels premium

    **Search 2: Brand Timing Breakdown**
    WebSearch("{{premium_brand}} timing breakdown")
    → Examples: "Linear app button timing", "Stripe animation easing"
    → Document: How top brands achieve timing excellence

    **Search 3: Motion Design Timing Trends**
    WebSearch("motion design timing principles 2025")
    → Latest industry timing standards
    → Document: Current trends in timing (faster? slower? more dramatic?)

    Target: Find 3-5 premium examples of similar timing patterns
    </action>

    <evidence>
      **2024-2025 PREMIUM TIMING EXAMPLES:**
      - [URL]: [Timing analysis] ([Brand/Agency])
      - [URL]: [Easing curve used] ([Brand/Agency])
      - [URL]: [Duration strategy] ([Brand/Agency])

      **Timing Trends Identified:**
      - [Current trend 1]
      - [Current trend 2]
      - [How user's animation could leverage these trends]
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Timing Pattern Findings**

      **TIER 1A: Archon Timing Patterns**
      [Present 10-15 easing/timing patterns with examples]

      **TIER 1B: Deep-Research Frameworks**
      - **Section 1.2 (Visual Translation):** [If applicable]
      - **Section 2.1 (Core GSAP):** [Easing categories, duration guidelines, stagger patterns]
      - **Section 2.2 (Timeline Techniques):** [If coordination needed]
      - **Disney Principles:** [Timing & Ease-in/out applied]

      **TIER 2: 2024-2025 Premium Examples (if applicable)**
      [Present cutting-edge timing patterns]

      **SYNTHESIS - Timing Strategy:**
      - **Primary Easing Recommendation:** [Specific easing curve with rationale]
      - **Duration Range:** [Recommended timing with justification]
      - **Alternative Options:** [2-3 other valid approaches]
      - **Premium Patterns to Adapt:** [Specific Archon/WebSearch patterns]

      **CITATIONS:**
      [All Archon sources, Deep-Research sections, WebSearch URLs]
    </output>

    <halt>🚨 STOP. Present research findings in {communication_language}. Wait for {user_name} to respond "Continue [c]" before proceeding to motion analysis.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
archon_query_1_finding,
archon_query_1_sources,
archon_query_2_finding,
archon_query_2_sources,
archon_query_3_finding,
archon_query_3_sources,
archon_query_4_finding,
archon_query_4_sources,
section_1_2_insight,
section_2_1_insight,
section_2_2_insight,
disney_timing_principle_applied,
disney_ease_principle_applied,
websearch_queries_if_used,
websearch_key_findings,
most_important_research_finding,
number_of_sources,
framework_count
</template-output>
</step>

<step n="3" goal="Motion Analysis - Synthesize Research Findings">
<action>Now that research is complete, synthesize findings into actionable timing recommendations</action>

### 3.1: Analyze Easing Options

Based on research, evaluate easing curves for this animation:

**From Archon + Deep-Research, identify:**
- **Primary easing recommendation** - Most appropriate for {{desired_feel}}
- **Alternative options** - 2-3 other valid choices with trade-offs
- **Anti-patterns** - Easings to AVOID for this animation type

**Easing Categories (from Section 2.1 research):**
```
Smooth & Subtle: power1.out, power2.inOut, sine.inOut
Dramatic & Bold: power4.out, expo.out, circ.inOut
Bouncy & Playful: back.out(1.2-1.7), elastic.out(1, 0.3), bounce.out
Quick & Snappy: power2.out, expo.out (short duration)
Slow & Cinematic: power2.inOut, power3.out (long duration)
```

### 3.2: Duration Recommendations

Based on research and animation type:

**Animation Type Duration Guidelines (from Archon KB):**
```
Micro-interactions: 0.2s - 0.4s (instant feedback)
Button hovers: 0.15s - 0.3s (responsive, not laggy)
Scroll reveals: 0.6s - 1.2s (noticeable but not slow)
Page load sequences: 0.8s - 1.5s per element (orchestrated)
Hero animations: 1.5s - 3s (cinematic, storytelling)
Physics-based: Variable (depends on spring/bounce parameters)
```

**Adjust based on:**
- User expectations (faster for interactions, slower for storytelling)
- Brand personality (luxury = slower, tech = snappier)
- Context (mobile may need faster for perceived performance)

### 3.3: Timing Charts (Film Principle Application)

Apply film editing principles to timing:

**Walter Murch's "Rule of Six" (adapted for web):**
1. **Emotion** - Does timing convey right feeling?
2. **Story** - Does timing support narrative flow?
3. **Rhythm** - Does timing create visual rhythm?
4. **Eye Trace** - Does timing guide viewer's eye?
5. **2D Space** - Does timing respect screen layout?
6. **3D Space** - Does timing create depth illusion?

**Frame-by-Frame Breakdown Example:**
```
Example: 1.0s animation with power2.out easing
- Frame 0 (0%): Start - Element at initial state
- Frame 6 (25%): Fast initial movement (ease-out acceleration)
- Frame 12 (50%): Slowing down (halfway there, decelerating)
- Frame 18 (75%): Slow crawl to final position
- Frame 24 (100%): Settle - Element at final state
```

### 3.4: Custom Bezier Recommendations (If Needed)

If standard easings insufficient, recommend CustomEase:

**From Archon research, provide:**
- Bezier curve values (x1, y1, x2, y2)
- Visual representation (text-based curve chart)
- GSAP CustomEase.create() code
- When to use vs. standard easing

<template-output>
easing_name,
gsap_ease,
duration,
easing,
why_this_timing_works,
describe_how_this_looks_feels_in_motion,
alternative_1_name,
alternative_1_ease,
alternative_1_duration,
alternative_1_tradeoff,
alternative_1_scenarios,
alternative_2_name,
alternative_2_ease,
alternative_2_duration,
alternative_2_tradeoff,
alternative_2_scenarios,
initial_state,
quarter_way_point_describe_motion,
halfway_point_describe_motion,
three_quarter_point_describe_motion,
final_state,
describe_important_timing_beats,
how_timing_conveys_feeling,
visual_rhythm_created,
how_timing_guides_viewer_attention,
detailed_explanation_based_on_research,
how_speed_duration_supports_motion,
how_acceleration_deceleration_feels_natural,
why_this_curve_matches_desired_feel,
why_this_length_feels_right,
if_multiple_elements_how_timing_coordinates
</template-output>
</step>

<step n="4" goal="Generate Timing Analysis Report">
<action>Create comprehensive timing analysis document using template.md structure</action>

**Report Should Include:**

1. **Executive Summary**
   - Animation type and desired feel
   - Primary timing recommendation (1-sentence)
   - Key research insights

2. **Recommended Timing**
   - Easing curve with GSAP syntax
   - Duration recommendation
   - Code example (ready to copy-paste)

3. **Alternative Options**
   - 2-3 other valid approaches
   - Trade-offs for each
   - When to use alternatives

4. **Motion Analysis**
   - Why this timing works (research-backed rationale)
   - Film principles applied
   - Frame-by-frame breakdown (if complex)

5. **Premium Reference Examples**
   - URLs to similar timing patterns (from research)
   - Quality assessment (Basic/Professional/Premium)
   - What makes them feel premium

6. **Research Citations**
   - Archon sources consulted
   - Deep-Research sections applied
   - WebSearch findings (if used)

7. **Implementation Notes**
   - GSAP code snippet
   - Plugin requirements (if any - FREE in 3.13+!)
   - Performance considerations
   - Accessibility notes (prefers-reduced-motion)

**Save report to:** `{output_folder}/timing-analysis-{timestamp}.md`

**Present final report to {user_name} in {communication_language} with cinematographer energy:**

*"That's a wrap on timing analysis! You now have research-backed timing recommendations. Every choice is grounded in motion design principles and premium patterns..."*

<template-output>
primary_recommendation_one_sentence,
example_1_name,
example_1_url,
example_1_easing_and_duration,
example_1_quality_basic_professional_premium,
example_1_why_timing_feels_excellent,
example_1_what_we_can_learn,
example_2_name,
example_2_url,
example_2_easing_and_duration,
example_2_quality_basic_professional_premium,
example_2_why_timing_feels_excellent,
example_2_what_we_can_learn,
properties,
values,
properties_being_animated,
suggested_stagger_value,
plugin_list_if_any,
plugin_name,
why_needed,
suggest_css_properties_to_optimize,
transform_opacity_vs_layout_properties,
mobile_specific_timing_adjustments_if_needed,
basic_professional_premium_award_winning,
list_indicators_that_make_this_premium,
indicator_1,
indicator_2,
indicator_3,
high_medium,
recommended_action_1,
recommended_action_2,
recommended_action_3
</template-output>
</step>

</workflow>

---

## Film Principle Reminder

*"Every cut, every movement, every pause has purpose. Timing is not decoration - it's storytelling."*

---

## Completion Checklist

Before marking workflow complete, verify:

- ✅ ALL research queries executed (Archon + Deep-Research + WebSearch if needed)
- ✅ Research findings documented with citations
- ✅ Timing recommendations are research-backed (not guesses)
- ✅ Code examples are copy-paste ready
- ✅ Report follows template structure
- ✅ Premium examples cited with URLs
- ✅ Quality assessment included (Basic/Professional/Premium)
- ✅ Accessibility considerations documented

**Workflow complete when ALL boxes checked.**
