# Visual Narrative Planning - Workflow Instructions
# Pixar Story Spine Framework + KB-Powered Research

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/plan-narrative/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Story Intent & Component Details">
<action>Introduce the narrative planning workflow with film director energy</action>

🎬 **Visual Narrative Planning (KB-Powered)**

Every great animation tells a story. Let's plan yours using proven storytelling frameworks and premium examples.

**Please provide complete details:**

<ask response="component_or_page">What component or page needs animation? (hero section / about page / product showcase / full site / specific component)</ask>
<ask response="story_to_tell">What story should it tell? (user journey / value proposition / feature reveal / brand narrative / transformation story / other)</ask>
<ask response="key_moments">What are the key moments you want to emphasize? (3-5 specific beats or transitions)</ask>
<ask response="desired_emotion">What should users FEEL during this animation? (inspired / confident / curious / delighted / empowered / other)</ask>
<ask response="interaction_type">Interaction type? (scroll-driven / auto-play on load / user-triggered / hybrid)</ask>

<action>Confirm understanding and preview the storytelling approach</action>

*"Excellent. I'll research narrative patterns from our knowledge base and map your story to the Pixar Story Spine framework. This will give you a clear animation storyboard..."*

<template-output>component_or_page, story_to_tell, key_moments, desired_emotion, interaction_type</template-output>
</step>

<step n="2" goal="Multi-Source Research - Narrative Pattern Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to planning until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on user's narrative planning request:
    - Story Type: {{story_to_tell}}
    - Interaction: {{interaction_type}}
    - Emotion: {{desired_emotion}}

    You MUST execute the complete research protocol below BEFORE proceeding to narrative planning.</mandate>

  <!-- TIER 1A: Archon MCP - Narrative Pattern Search -->
  <phase n="1" title="Archon MCP Narrative Pattern Discovery" required="true">
    <action>Execute systematic searches for narrative animation patterns:

    **Search 1: Scroll Choreography Storytelling**
    rag_search_knowledge_base("scroll choreography storytelling", match_count=8)

    **Search 2: Animation Narrative Structure**
    rag_search_knowledge_base("animation narrative structure", match_count=8)

    **Search 3: Story-Driven Scroll Examples**
    rag_search_code_examples("scroll narrative sequences", match_count=8)

    **Search 4: {{story_to_tell}} Patterns**
    rag_search_knowledge_base("{{story_to_tell}} animation patterns", match_count=6)

    **Search 5: {{interaction_type}} Narratives**
    rag_search_knowledge_base("{{interaction_type}} storytelling GSAP", match_count=5)
    </action>

    <evidence required="true">
      **ARCHON NARRATIVE PATTERNS:**
      Present 10-15 narrative animation patterns discovered:

      **Scroll Storytelling Patterns:**
      - [Pattern name]: [How it tells story] (Source: [citation])

      **{{story_to_tell}} Examples:**
      - [Pattern name]: [Narrative structure] (Source: [citation])

      **{{interaction_type}} Techniques:**
      - [Pattern name]: [How interaction drives narrative] (Source: [citation])

      **Relevance Assessment:**
      - Which patterns best match user's story intent?
      - How do premium examples structure narrative arcs?
      - Timing/pacing patterns identified?
    </evidence>

    <validation>If results insufficient (<10 patterns), refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks - Storytelling Structure -->
  <phase n="2" title="Deep-Research Storytelling Frameworks" required="true">
    <action>Apply Deep-Research narrative and choreography frameworks:

    **Framework 1: Pixar Story Spine (Section 4.1) - PRIMARY FRAMEWORK**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/04-41-pixar-story-spine-framework-for-gsap.md

    This is the COMPLETE Pixar Story Spine framework with GSAP implementation details.

    **7-Step Story Spine Structure:**
    1. Once upon a time... (establish context/status quo)
    2. Every day... (show the normal state)
    3. Until one day... (introduce change/feature/value prop)
    4. Because of that... (show consequences/benefits)
    5. Because of that... (cascading effects - repeat as needed)
    6. Until finally... (resolution/CTA/climax)
    7. And ever since then... (new normal/transformation)

    **GSAP Mapping from Section 4.1:**
    - Each story beat maps to scroll sections or timed sequences
    - Easing reflects emotional pacing (slow intro, fast climax, calm resolution)
    - ScrollTrigger scrub allows user-controlled narrative pacing
    - Premium plugins (MorphSVG, SplitText) reserved for climax moments

    **Framework 2: Storyboarding Principles (Section 1.3)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/03-13-storyboarding-complex-sequences.md

    General storyboarding principles for complex sequences:
    - **Temporal Landmarks** - Define start, middle, end
    - **Parallel vs Sequential Motion** - Which elements move together vs. in sequence
    - **Ease and Intensity Planning** - Emotional pacing through easing curves
    - **Visual Readability** - Each shot expresses one thought clearly

    **Framework 3: Timeline Choreography (Section 2.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

    GSAP Timeline implementation techniques:
    - **Relative Positioning** - Create rhythm with overlaps (`"-=0.4"`, `"<0.5"`)
    - **Labels** - Named narrative beats ("intro", "climax", "resolution")
    - **Nesting Timelines** - Modular narrative sections
    - **Control Methods** - Interactive narrative control (play, pause, scrub)

    **Framework 4: Alternative Narrative Structures (Section 4.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/04-42-alternative-narrative-structures.md

    If user's story doesn't fit Pixar Story Spine, consider alternatives:
    - Three-Act Structure (simpler, conversion-focused)
    - Five-Act Structure (more sophisticated, longer narratives)
    - In Medias Res (hook-first approach)
    - Circular Narrative (transformation/before-after)
    </action>

    <evidence required="true">
      **DEEP-RESEARCH FRAMEWORKS APPLIED:**

      **Pixar Story Spine Mapping (Section 4.1):**
      - Beat 1 (Once upon a time): [How to establish context for {{component_or_page}}]
      - Beat 2 (Every day): [Status quo visualization]
      - Beat 3 (Until one day): [Change/trigger event - PEAK MOMENT]
      - Beat 4 (Because of that): [Consequences shown through animation]
      - Beat 5 (Because of that): [Cascading effects if needed]
      - Beat 6 (Until finally): [Resolution/CTA]
      - Beat 7 (Ever since): [New normal - optional]

      **Storyboarding Principles (Section 1.3):**
      - Temporal landmarks for {{interaction_type}}
      - Parallel vs. sequential planning for {{key_moments}}
      - Easing plan for emotional arc (→ {{desired_emotion}})

      **Timeline Choreography (Section 2.2):**
      - Overlap patterns for narrative rhythm
      - Label structure for story beats
      - Modular timeline approach for complex sequences

      **Alternative Structures Considered (Section 4.2):**
      - [If applicable: Which alternative structure might work better and why]
    </evidence>
  </phase>

  <!-- TIER 2: WebSearch - 2024-2025 Narrative Trends -->
  <phase n="3" title="2025 Premium Narrative Examples (Conditional)" required="conditional">
    <condition>If Archon lacks 2025-specific {{story_to_tell}} narrative examples</condition>

    <action>Search for cutting-edge narrative animation examples:

    **Search 1: Awwwards Scroll Storytelling**
    WebSearch("scroll storytelling Awwwards 2025")

    **Search 2: Industry-Specific Narratives**
    WebSearch("animation narrative {{story_to_tell}} premium 2024")

    **Search 3: Brand Examples**
    WebSearch("Linear Stripe Apple scroll narrative animation")

    Target: Find 3-5 premium examples of narrative-driven animations
    </action>

    <evidence>
      **2024-2025 NARRATIVE EXAMPLES:**
      - [URL]: [How it structures narrative] ([Brand/Agency])
      - [URL]: [Narrative technique] ([Brand/Agency])
      - [URL]: [Story approach] ([Brand/Agency])

      **Narrative Trends Identified:**
      - [Current trend 1]
      - [Current trend 2]
      - [How user's story could leverage these trends]
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Narrative Pattern Findings**

      **TIER 1A: Archon Narrative Patterns**
      [Present 10-15 narrative patterns with examples]

      **TIER 1B: Deep-Research Frameworks**
      - **Pixar Story Spine (Section 4.1):** [7-beat structure mapped to user's story]
      - **Storyboarding (Section 1.3):** [Temporal landmarks, parallel/sequential planning]
      - **Timeline Choreography (Section 2.2):** [GSAP techniques identified]
      - **Alternative Structures (Section 4.2):** [If considered]

      **TIER 2: 2024-2025 Premium Narratives (if applicable)**
      [Present cutting-edge examples]

      **SYNTHESIS - Narrative Strategy:**
      - **Story Structure:** [Recommended Pixar Story Spine 7-beat breakdown]
      - **Choreography Approach:** [Parallel vs. sequential planning]
      - **Timing Strategy:** [Emotional pacing through easing]
      - **Premium Patterns to Adapt:** [Specific Archon/WebSearch patterns]

      **CITATIONS:**
      [All Archon sources, Deep-Research sections, WebSearch URLs]
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to narrative planning.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
archon_narrative_patterns,
pixar_story_spine_mapped,
storyboarding_principles,
timeline_choreography_techniques,
alternative_structures_considered,
websearch_2025_narratives,
narrative_strategy_synthesis,
research_citations
</template-output>
</step>

<step n="3" goal="Apply Pixar Story Spine - Map Narrative to Animation Sequence">
<action>Using research findings from Section 4.1, apply Pixar Story Spine framework to create detailed narrative structure</action>

**Narrative Planning Framework (7 Beats):**

**BEAT 1: Once Upon a Time... (Establish Context)**
<action>Plan opening beat for {{component_or_page}}:

Using Archon patterns and Deep-Research Section 4.1 (Pixar Story Spine):
- Initial state: What do users see first?
- Brand/context establishment: How do we set the stage?
- Timing: 0-0.8s typically for opening beat (auto-play) or first scroll section
- Animation techniques from research: [Apply specific pattern]
- Easing: Gentle/welcoming (power2.out suggested per Section 4.1)
- GSAP Example from Section 4.1: Simple fade-in, establish visual language
</action>

**BEAT 2: Every Day... (Status Quo)**
<action>Plan status quo visualization:

Per Section 4.1 guidance:
- What's the "normal" state before change?
- How long to hold this beat? (0.8-2s typical, or pinned scroll section)
- Visual representation of "before" state
- Muted animations to show limitation (Section 4.1 example: opacity 0.6, scale 0.95)
- Sets up contrast for "until one day" beat
</action>

**BEAT 3: Until One Day... (Introduce Change) 🎯 PEAK MOMENT**
<action>Plan the transformation/reveal moment:

Using {{story_to_tell}} patterns from research + Section 4.1 dramatic transition:
- The trigger event (scroll position? user action? auto-play timing?)
- Visual representation of change/feature/value
- Peak moment of animation (2-3s into sequence typically)
- MORE dramatic easing (back.out(1.7), elastic.out per Section 4.1)
- Elements from {{key_moments}} integrated here
- This is where wow factor lives - use premium plugins if beneficial
- Section 4.1 example: scale 1.1, back.out easing, explosive reveal
</action>

**BEAT 4: Because of That... (Consequences/Benefits)**
<action>Plan consequence visualization:

Per Section 4.1 "Cascading Consequences":
- Show the result of the change
- Benefits made visible through animation
- Staggered sequence showing multiple benefits (Section 4.1 example)
- Using timeline choreography from Section 2.2 (overlaps `-=0.6` for richness)
- Timing: 3-5s into overall sequence
- Each reveal slightly faster/bigger (building energy per Section 4.1)
</action>

**BEAT 5: Because of That... (Continued Consequences) - OPTIONAL**
<action>If user's {{story_to_tell}} needs additional cascading effects:

- Repeat Beat 4 pattern with additional benefits
- Maintain or increase energy
- Avoid repetition - vary animation techniques
</action>

**BEAT 6: Until Finally... (Resolution/CTA) 🎬 CLIMAX**
<action>Plan resolution and call-to-action:

Using Deep-Research Section 4.1 "Hero Moment":
- Final state reached - transformation complete
- Maximum visual impact (Section 4.1: full-screen, prominent placement)
- Slowest, most dramatic timing (save best for last)
- Premium effects showcase (MorphSVG, SplitText per Section 4.1)
- CTA emphasized (often with playful bounce: back.out(2))
- Emotional payoff: User should feel {{desired_emotion}}
- Timing: 5-7s total sequence (or scroll-driven endpoint)
- Section 4.1 example: background gradient transition + scale reveal + CTA bounce
</action>

**BEAT 7: And Ever Since Then... (New Normal) - OPTIONAL**
<action>If {{interaction_type}} benefits from resolution beat:

Per Section 4.1 "Settled State":
- Calm, settled animations (return to slow timing per Section 4.1)
- Confidence-building micro-interactions
- Subtle ambient motion (floating elements)
- Section 4.1 example: Gentle fade-in of testimonials, soft easing
</action>

<template-output>
beat1_once_upon_time,
beat2_every_day,
beat3_until_one_day,
beat4_because_of_that,
beat5_because_of_that_optional,
beat6_until_finally,
beat7_ever_since_optional,
complete_narrative_arc
</template-output>
</step>

<step n="4" goal="Generate Narrative Plan Document - Storyboard with Timeline Structure">
<action>Compile comprehensive narrative plan with visual storyboard, timeline structure, and technical specs</action>

**Narrative Plan Document Structure:**

1. **Narrative Overview**
   - Story summary using Pixar Story Spine (Section 4.1 framework)
   - Emotional arc: Start → Peak (Beat 3) → Climax (Beat 6) → Resolution
   - Total duration / scroll distance
   - {{desired_emotion}} achievement strategy

2. **Visual Storyboard (7 Beats - Pixar Story Spine)**
   - Each beat with visual description
   - Timing / scroll position markers
   - Key animation techniques (from Archon research)
   - Easing curves for emotional pacing (per Section 4.1 guidance)
   - Section 4.1 GSAP examples adapted to user's context

3. **Timeline Technical Specification**
   - GSAP timeline structure (labels for each beat)
   - Relative positioning plan (overlaps specified per Section 2.2)
   - Stagger patterns (if applicable per Section 4.1 "Cascading Consequences")
   - Premium plugin opportunities identified (Section 4.1: MorphSVG, SplitText for climax)

4. **Key Animation Moments (from {{key_moments}})**
   - Each moment mapped to narrative beat
   - Technical implementation approach
   - Archon pattern references + Section 4.1 examples

5. **Implementation Roadmap**
   - Step-by-step build sequence (Beats 1-2 → Beat 3 → Beats 4-6)
   - Testing checkpoints (per Section 4.1: timing, impact, flow, emotion, 60fps)
   - Accessibility considerations (prefers-reduced-motion fallback)

6. **Citations & Pattern References**
   - All Archon patterns used
   - All Deep-Research sections applied (especially 4.1, 1.3, 2.2, 4.2)
   - All WebSearch examples referenced

**Present final narrative plan with film director energy:**

*"That's a wrap on the narrative plan! You now have a complete storyboard using the Pixar Story Spine framework. Every beat tells your story with purpose..."*

<template-output>
narrative_overview,
visual_storyboard_7beats,
timeline_technical_spec,
key_moments_mapped,
implementation_roadmap,
final_citations
</template-output>
</step>

</workflow>
