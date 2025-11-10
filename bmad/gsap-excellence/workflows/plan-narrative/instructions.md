# Visual Narrative Planning - Workflow Instructions
# Pixar Story Spine 7-Beat Framework + KB-Powered Research

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

*"Excellent. I'll research narrative patterns from our knowledge base and map your story to the Pixar Story Spine 7-beat framework. This will give you a clear animation storyboard backed by 29k of Deep-Research expertise..."*

<template-output>component_or_page, story_to_tell, key_moments, desired_emotion, interaction_type</template-output>
</step>

<step n="2" goal="Multi-Source Research - Narrative Pattern Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to planning until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on user's narrative planning request:
    - Component: {{component_or_page}}
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
      **ARCHON NARRATIVE PATTERNS (MINIMUM 10-15 patterns):**

      Present 10-15 narrative animation patterns discovered, organized by category:

      **Scroll Storytelling Patterns:**
      - [Pattern name]: [How it tells story] (Source: [Archon source ID or URL])
      - [Pattern name]: [Narrative technique] (Source: [citation])
      - [Pattern name]: [Timing/pacing approach] (Source: [citation])

      **{{story_to_tell}} Examples:**
      - [Pattern name]: [Narrative structure used] (Source: [citation])
      - [Pattern name]: [Story beat mapping] (Source: [citation])

      **{{interaction_type}} Techniques:**
      - [Pattern name]: [How interaction drives narrative] (Source: [citation])
      - [Pattern name]: [User control method] (Source: [citation])

      **Relevance Assessment:**
      - Which 3-5 patterns best match user's story intent?
      - How do premium examples structure emotional arcs?
      - Timing/pacing patterns identified (slow intro, fast climax, etc.)?
      - Any scroll scrubbing patterns for user-controlled narratives?
    </evidence>

    <validation>If results insufficient (<10 patterns), refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks - Storytelling Structure -->
  <phase n="2" title="Deep-Research Storytelling Frameworks" required="true">
    <action>Apply Deep-Research narrative and choreography frameworks:

    **Framework 1: Pixar Story Spine 7-Beat Structure (Section 4.1) - PRIMARY FRAMEWORK**

    Read: {deep_research_base}/04-41-pixar-story-spine-framework-for-gsap.md

    This is the COMPLETE Pixar Story Spine framework with GSAP implementation details.

    Extract and apply the 7-beat narrative structure:

    **Beat 1: "Once upon a time..."** (Establish Context)
    - Animation Purpose: *"Orient the user, establish visual tone"*
    - GSAP Implementation: Hero section, gentle fade-in, slow confident easing (power1.out)
    - Timing: 0-0.8s (auto-play) or first scroll section
    - Code Pattern: `gsap.from(".hero-content", { opacity: 0, y: 30, duration: 1.2, ease: "power1.out" })`
    - Quote: *"Establish the world and context"* (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Beat 2: "Every day..."** (Status Quo)
    - Animation Purpose: *"Show the problem space or current reality"*
    - GSAP Implementation: Neutral/muted palette, moderate timing (not rushed)
    - Timing: 0.8-2s hold state
    - Example: `opacity: 0.6, scale: 0.95, duration: 0.8` (muted to show limitation)
    - Quote: *"Show the status quo, the normal state"* (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Beat 3: "Until one day..."** (Inciting Incident) 🎯 PEAK MOMENT
    - Animation Purpose: *"Introduce the change, the new possibility"*
    - GSAP Implementation: **Dramatic transition** with energy shift
    - Easing: `back.out(1.7)` or `elastic.out` (bouncy, exciting)
    - Timing: 2-3s into sequence (peak moment of animation)
    - Example: `scale: 1.1, duration: 1, ease: "back.out(1.7)"`
    - Quote: *"This is where excitement builds"* (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Beat 4-5: "Because of that..." (x2)** (Cascading Consequences)
    - Animation Purpose: *"Show the chain reaction, the benefits unfolding"*
    - GSAP Implementation: **Staggered sequences**, timeline overlaps
    - Building energy: Each reveal slightly faster/bigger
    - Overlap pattern: `-=0.6` for richness
    - Timing: 3-5s into overall sequence
    - Quote: *"User scrolls at their own pace, controlling the narrative"* (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Beat 6: "Until finally..."** (Resolution/Climax) 🎬
    - Animation Purpose: *"Deliver the payoff, the transformation complete"*
    - GSAP Implementation: **Hero moment** with maximum visual impact
    - Full-screen or prominent placement, slowest most dramatic timing
    - Often includes MorphSVG, SplitText, or premium effects
    - Easing: `back.out(2)` (big reveal)
    - Timing: 5-7s total sequence (or scroll-driven endpoint)
    - Quote: *"This is the 'wow' moment"* (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Beat 7: "And ever since then..."** (New Normal) - OPTIONAL
    - Animation Purpose: *"Show the lasting transformation, the future state"*
    - GSAP Implementation: Calm, settled animations (return to slow timing)
    - Confidence-building micro-interactions, subtle ambient motion
    - Easing: `power1.out` (calm, settled)
    - Quote: *"Users feel the resolution is complete and actionable"* (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Framework 2: Timeline Choreography (Section 2.2)**

    Read: {deep_research_base}/06-22-mastering-gsap-timeline-techniques.md

    GSAP Timeline implementation techniques for narrative flow:

    - **Relative Positioning**: Create rhythm with overlaps (`"-=0.4"`, `"<0.5"`)
      - Quote: *"Instead of calculating actual times, you describe relationships"* (Source: 06-22-mastering-gsap-timeline-techniques.md)
      - Example: `.to(".triangle", { x:100 }, "<0.5")` starts 0.5s after previous tween's start

    - **Labels**: Named narrative beats ("intro", "climax", "resolution")
      - Quote: *"Labels (named positions) can group multiple tweens start point"* (Source: 06-22-mastering-gsap-timeline-techniques.md)
      - Pattern: `tl.addLabel("act1-context")` then schedule tweens at `"act1-context"`

    - **Nesting Timelines**: Modular narrative sections
      - Quote: *"This modular approach means each sub-timeline can be developed and tested separately"* (Source: 06-22-mastering-gsap-timeline-techniques.md)
      - Pattern: `master.add(introTl).add(galleryTl, "+=1")`

    - **Control Methods**: Interactive narrative control (play, pause, scrub, reverse)
      - `.reverse()` for toggle animations (opening/closing menus)
      - `.timeScale()` can dynamically speed up or slow down
      - `.progress(0-1)` sets timeline position for scroll scrubbing

    **Framework 3: Storyboarding Principles (Section 1.3)**

    Read: {deep_research_base}/03-13-storyboarding-complex-sequences.md

    General storyboarding principles for complex sequences:

    - **Temporal Landmarks** - Define start, middle, end
      - Quote: *"By pinning down these landmarks, you can ensure the animation has a clear beginning and resolution"* (Source: 03-13-storyboarding-complex-sequences.md)

    - **Parallel vs Sequential Motion** - Which elements move together vs. in sequence
      - Quote: *"World-class animations often layer motions (parallel) for richness, but maintain clarity by sequencing major changes"* (Source: 03-13-storyboarding-complex-sequences.md)

    - **Ease and Intensity Planning** - Emotional pacing through easing curves
      - Quote: *"Perhaps the intro is gentle (easeOut), the mid-section is bouncy and playful, the ending snappy (easeIn)"* (Source: 03-13-storyboarding-complex-sequences.md)

    - **Visual Readability** - Each shot expresses one thought clearly
      - Avoid triggering everything at once with equal timing (feels chaotic)

    **Framework 4: Alternative Narrative Structures (Section 4.2)**

    Read: {deep_research_base}/04-42-alternative-narrative-structures.md

    If user's story doesn't fit Pixar Story Spine 7-beat, consider alternatives:

    - **Three-Act Structure** (simpler, conversion-focused)
      - Act I: Setup (25%), Act II: Confrontation (50%), Act III: Resolution (25%)
      - Best for: Product landing pages, case studies, brand storytelling
      - Quote: *"It's cleaner and more decisive than the Story Spine, making it ideal for product demos and conversion-focused pages"* (Source: 04-42-alternative-narrative-structures.md)

    - **Five-Act Structure** (Freytag's Pyramid - more sophisticated)
      - Exposition → Rising Action → Climax → Falling Action → Denouement
      - Best for: Full websites, interactive documentaries, brand manifestos
      - 6-8 scroll sections typical

    - **In Medias Res** (hook-first approach)
      - Start with bang, then reveal backstory
      - Best for: SaaS with "wow" moments, mobile apps, short attention spans

    - **Circular Narrative** (transformation/before-after)
      - Return to beginning but transformed perspective
      - Best for: Before/after transformations, brand repositioning

    **Framework 5: Visual Translation Workflow (Section 1.2)**

    Read: {deep_research_base}/02-12-visual-inspiration-technical-translation-workflow.md

    5-step process for translating narrative intent to GSAP implementation:

    1. **Gather Inspiration**: Find references (Awwwards, CodePen, motion design)
    2. **Deconstruct the Effect**: Break reference down into components
    3. **Choreograph on Paper**: Outline sequence of events in order
    4. **Choose the Technique**: Decide GSAP vs CSS vs other
       - Quote: *"Use CSS for simple static transitions and GSAP for sequenced, synchronized or complex animations"* (Source: 02-12-visual-inspiration-technical-translation-workflow.md)
    5. **Prototype in Isolation**: Create small prototype before full integration

    </action>

    <evidence required="true">
      **DEEP-RESEARCH FRAMEWORKS APPLIED:**

      **Pixar Story Spine 7-Beat Mapping (Section 4.1):**
      - Beat 1 (Once upon a time): [How to establish context for {{component_or_page}}]
        - Timing: 0-0.8s, Easing: power1.out
        - Example: [Specific GSAP pattern from Section 4.1]

      - Beat 2 (Every day): [Status quo visualization for {{story_to_tell}}]
        - Timing: 0.8-2s hold, Muted: opacity 0.6, scale 0.95
        - Shows limitation/problem before change

      - Beat 3 (Until one day): [Change/trigger event - PEAK MOMENT]
        - Timing: 2-3s into sequence, Easing: back.out(1.7) or elastic.out
        - Where excitement builds, dramatic reveal
        - Integrates elements from {{key_moments}}

      - Beat 4 (Because of that): [Consequences shown through animation]
        - Timing: 3-5s, Overlaps: `-=0.6` for richness
        - Staggered sequence showing benefits

      - Beat 5 (Because of that - repeat): [Cascading effects if needed]
        - Building energy, each reveal slightly faster/bigger
        - Optional: Can repeat this beat for complex narratives

      - Beat 6 (Until finally): [Resolution/CTA - CLIMAX 🎬]
        - Timing: 5-7s total (or scroll-driven endpoint)
        - Easing: back.out(2), Slowest/most dramatic
        - Premium effects: MorphSVG, SplitText reserved for this beat
        - Clear call-to-action emerges
        - Emotional payoff: User feels {{desired_emotion}}

      - Beat 7 (Ever since): [New normal - optional]
        - Calm/settled, Return to slow timing
        - Confidence-building micro-interactions

      **Timeline Choreography (Section 2.2):**
      - Overlap patterns for narrative rhythm: `-=0.4`, `"<0.5"`, `"<0.6"`
      - Label structure for story beats: `addLabel("beat3-change")`, `addLabel("climax")`
      - Modular timeline approach: Nested timelines for each beat/act
      - User control: `.reverse()` for toggles, `.progress()` for scroll scrubbing

      **Storyboarding Principles (Section 1.3):**
      - Temporal landmarks for {{interaction_type}}: [Start/middle/end points]
      - Parallel vs. sequential planning for {{key_moments}}: [Which together, which sequence]
      - Easing plan for emotional arc → {{desired_emotion}}: [Gentle intro, bouncy mid, dramatic climax]

      **Alternative Structures Considered (Section 4.2):**
      - [If Pixar 7-beat doesn't fit: Which alternative structure might work better and why]
      - [Recommendation: Stick with Pixar or switch to Three-Act/Five-Act/etc.]

      **Visual Translation Strategy (Section 1.2):**
      - GSAP vs CSS decision: [Which effects need GSAP, which can be CSS]
      - Choreograph on paper: [Text-based storyboard of action sequence]
      - Prototype plan: [Which animation to test in isolation first]
    </evidence>

    <validation>
      Verify ALL Deep-Research sections were READ (not just referenced):
      - Section 4.1 loaded? Check for 7-beat structure with timing/easing details
      - Section 2.2 loaded? Check for overlap patterns and label examples
      - Section 1.3 loaded? Check for parallel vs sequential guidance
      - Section 4.2 loaded? Check for alternative structure options
      - Section 1.2 loaded? Check for 5-step translation workflow

      If any section not properly extracted, read the file and try again.
    </validation>
  </phase>

  <!-- TIER 2: WebSearch - 2024-2025 Narrative Trends (CONDITIONAL) -->
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
      **2024-2025 PREMIUM EXAMPLES:**
      - [URL]: [How it structures narrative] ([Brand/Agency])
      - [URL]: [Narrative technique] ([Brand/Agency])
      - [URL]: [Story approach] ([Brand/Agency])

      **Narrative Trends Identified:**
      - [Current trend 1: e.g., Scroll-controlled cinematic sequences]
      - [Current trend 2: e.g., Micro-interactions between major beats]
      - [How user's story could leverage these trends]
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Narrative Pattern Findings**

      **TIER 1A: Archon Narrative Patterns**
      [Present 10-15 narrative patterns with examples and source citations]

      **TIER 1B: Deep-Research Frameworks**

      **Section 4.1 - Pixar Story Spine 7-Beat:**
      [Present complete 7-beat structure with timing, easing, GSAP patterns]
      - Beat 1: [Details] (0-0.8s, power1.out)
      - Beat 2: [Details] (0.8-2s, muted)
      - Beat 3: [Details] (2-3s, back.out(1.7)) ← PEAK
      - Beat 4-5: [Details] (3-5s, overlaps `-=0.6`)
      - Beat 6: [Details] (5-7s, back.out(2)) ← CLIMAX
      - Beat 7: [Details] (optional, calm)

      **Section 2.2 - Timeline Choreography:**
      [Present overlap patterns, labels, nesting, control methods]

      **Section 1.3 - Storyboarding:**
      [Present temporal landmarks, parallel/sequential planning, ease intensity]

      **Section 4.2 - Alternative Structures:**
      [If considered: Which structure recommended and why]

      **Section 1.2 - Visual Translation:**
      [Present 5-step workflow applied to user's narrative]

      **TIER 2: 2024-2025 Premium Narratives (if applicable)**
      [Present cutting-edge examples]

      **SYNTHESIS - Narrative Strategy:**
      - **Story Structure:** Pixar Story Spine 7-beat breakdown for {{component_or_page}}
      - **Choreography Approach:** Parallel vs. sequential for {{key_moments}}
      - **Timing Strategy:** Emotional pacing (slow → fast → dramatic → calm) to achieve {{desired_emotion}}
      - **Premium Patterns to Adapt:** [Specific Archon/WebSearch patterns to use]
      - **Technical Approach:** {{interaction_type}} implementation (scroll-driven scrub, auto-play timeline, etc.)

      **CITATIONS:**
      - Archon MCP: [All source IDs/URLs]
      - Deep-Research: Sections 4.1, 2.2, 1.3, 4.2, 1.2 (29k total)
      - WebSearch: [All URLs if used]
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
pixar_story_spine_7beat_complete,
timeline_choreography_patterns,
storyboarding_principles_applied,
alternative_structures_evaluated,
visual_translation_workflow,
websearch_2025_narratives,
narrative_strategy_synthesis,
research_citations_complete
</template-output>
</step>

<step n="3" goal="Apply Pixar Story Spine 7-Beat - Map Narrative to Animation Sequence">
<action>Using research findings from Section 4.1, apply Pixar Story Spine framework to create detailed narrative structure</action>

**Narrative Planning Framework (7 Beats):**

**BEAT 1: Once Upon a Time... (Establish Context)**

<action>Plan opening beat for {{component_or_page}} using Section 4.1 guidance:

**From Deep-Research Section 4.1:**
- Animation Purpose: *"Orient the user, establish visual tone"*
- Initial state: What do users see first?
- Brand/context establishment: How do we set the stage?
- Timing: 0-0.8s typically for opening beat (auto-play) or first scroll section

**GSAP Implementation (per Section 4.1):**
- Gentle fade-in of key elements
- Slow, confident easing: `power1.out`
- Establish visual hierarchy with staggered reveals
- Code pattern: `gsap.from(".hero-content", { opacity: 0, y: 30, duration: 1.2, ease: "power1.out" })`

**For {{component_or_page}}:**
- What elements appear first? [List specific elements]
- Visual tone to establish? [Match {{desired_emotion}} or set up contrast]
- Animation techniques from Archon research: [Apply specific pattern]
- Easing rationale: Gentle/welcoming to build trust

**Quote from Section 4.1:**
*"Establish the world and context"* → This beat orients the user before any action begins.
</action>

**BEAT 2: Every Day... (Status Quo)**

<action>Plan status quo visualization using Section 4.1 guidance:

**From Deep-Research Section 4.1:**
- Animation Purpose: *"Show the problem space or current reality"*
- How long to hold this beat? (0.8-2s typical, or pinned scroll section)
- Visual representation of "before" state
- Muted animations to show limitation: `opacity: 0.6, scale: 0.95`

**GSAP Implementation (per Section 4.1):**
- Scroll to problem statement section or hold state
- Use neutral/muted color palette
- Moderate timing (not rushed, not dramatic)
- Example: `ScrollTrigger.create()` with `onEnter: () => gsap.to(".old-way", { opacity: 0.6, scale: 0.95 })`

**For {{story_to_tell}}:**
- What's the "normal" state before change? [Describe limitation/problem]
- How does this set up contrast for Beat 3? [What will change dramatically]
- Visual representation: [Muted colors, smaller scale, lower opacity]
- Duration: [0.8-2s hold, or scroll section pinned]

**Quote from Section 4.1:**
*"Show the status quo, the normal state"* → Sets up the "until one day" transformation.
</action>

**BEAT 3: Until One Day... (Introduce Change) 🎯 PEAK MOMENT**

<action>Plan the transformation/reveal moment using Section 4.1 dramatic transition guidance:

**From Deep-Research Section 4.1:**
- Animation Purpose: *"Introduce the change, the new possibility"*
- **Dramatic transition** with energy shift
- Peak moment of animation (2-3s into sequence typically)
- MORE dramatic easing: `back.out(1.7)`, `elastic.out`
- This is where wow factor lives - use premium plugins if beneficial

**GSAP Implementation (per Section 4.1):**
- Faster easing for excitement: `back.out(1.7)` or `elastic.out` (bouncy)
- Visual energy shift: Scale increase (`scale: 1.1`), color transitions
- Use of Flip plugin for state changes (optional)
- Code pattern: `gsap.to(".new-solution", { scale: 1.1, opacity: 1, duration: 1, ease: "back.out(1.7)" })`

**Using {{story_to_tell}} patterns from research + {{key_moments}}:**
- The trigger event: [Scroll position? User action? Auto-play timing?]
- Visual representation of change/feature/value: [What transforms?]
- Peak moment timing: [2-3s into overall sequence]
- Elements from {{key_moments}} integrated here: [Which key moments map to this beat?]
- Premium effects to consider: [MorphSVG? SplitText? Flip? Save best for Beat 6]

**Quote from Section 4.1:**
*"This is where excitement builds"* → The inciting incident that changes everything.

**Example from Section 4.1:**
```javascript
// Inciting incident - dramatic reveal
gsap.to(".new-solution", {
  scale: 1.1,
  opacity: 1,
  duration: 1,
  ease: "back.out(1.7)", // Bouncy, exciting
  onComplete: () => {
    // Cascade begins...
  }
});
```
</action>

**BEAT 4: Because of That... (Consequences/Benefits)**

<action>Plan consequence visualization using Section 4.1 "Cascading Consequences" guidance:

**From Deep-Research Section 4.1:**
- Animation Purpose: *"Show the chain reaction, the benefits unfolding"*
- **Staggered sequences** showing multiple benefits
- Timeline choreography with overlaps (from Section 2.2)
- Building energy: Each reveal slightly faster/bigger
- Timing: 3-5s into overall sequence

**GSAP Implementation (per Section 4.1 + Section 2.2):**
- Stagger patterns showing multiple benefits: `stagger: 0.1` or custom
- Using timeline overlaps `-=0.6` for richness (Section 2.2 technique)
- ScrollTrigger scrub for user-controlled pacing: `scrub: 1`
- Code pattern:
  ```javascript
  const benefitsTl = gsap.timeline({
    scrollTrigger: { trigger: ".benefits", scrub: 1 }
  });
  benefitsTl
    .from(".benefit-1", { x: -100, opacity: 0, duration: 1 })
    .from(".benefit-2", { x: -100, opacity: 0, duration: 1 }, "-=0.6") // Overlap!
    .from(".benefit-3", { x: -100, opacity: 0, duration: 1 }, "-=0.6");
  ```

**For {{story_to_tell}}:**
- Show the result of the change: [What benefits become visible?]
- Benefits made visible through animation: [List 3-5 benefit reveals]
- Stagger/overlap strategy: [Sequential? Parallel? Combination?]
- Each reveal energy: [Slightly faster/bigger to build momentum]
- User control: [Scroll scrubbing enabled? Auto-play? Hybrid?]

**Quote from Section 4.1:**
*"User scrolls at their own pace, controlling the narrative"* → ScrollTrigger scrub empowers users.
</action>

**BEAT 5: Because of That... (Continued Consequences) - OPTIONAL**

<action>If {{story_to_tell}} needs additional cascading effects, repeat Beat 4 pattern:

**From Deep-Research Section 4.1:**
- Repeat cascading structure if narrative complexity requires
- Maintain or increase energy (don't lose momentum)
- Avoid repetition - vary animation techniques

**Implementation guidance:**
- Additional benefits: [If user has 5+ {{key_moments}}, spread across Beat 4-5]
- Technique variation: [Change stagger direction, use different easing, etc.]
- Building to climax: [Each beat should increase energy toward Beat 6]

**Optional - Only if needed for complex narratives.**
</action>

**BEAT 6: Until Finally... (Resolution/CTA) 🎬 CLIMAX**

<action>Plan resolution and call-to-action using Section 4.1 "Hero Moment" guidance:

**From Deep-Research Section 4.1:**
- Animation Purpose: *"Deliver the payoff, the transformation complete"*
- **Hero moment** with maximum visual impact
- Full-screen or prominent placement
- Slowest, most dramatic timing (save best for last)
- Often includes MorphSVG, SplitText, or premium effects
- Clear call-to-action emerges

**GSAP Implementation (per Section 4.1):**
- Most dramatic easing: `back.out(2)` (big reveal)
- Timing: 5-7s total sequence (or scroll-driven endpoint)
- Premium plugin showcase: MorphSVG, SplitText for text reveals
- Background transitions, scale reveals, CTA bounce
- Code pattern (from Section 4.1):
  ```javascript
  const tl = gsap.timeline();
  tl.to(".background", {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    duration: 1.5,
    ease: "power2.inOut"
  })
  .from(".final-message", {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(2)", // Big reveal
    stagger: 0.1
  }, "-=0.8")
  .to(".cta-button", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
  });
  ```

**For {{component_or_page}} + {{desired_emotion}}:**
- Final state reached: [What is the resolution? Transformation complete?]
- Maximum visual impact: [Full-screen takeover? Prominent CTA? Hero visual?]
- Slowest/most dramatic timing: [5-7s total or scroll position]
- Premium effects: [MorphSVG for logo? SplitText for headline? Flip for state change?]
- CTA emphasized: [Playful bounce with back.out(2)?]
- Emotional payoff: User should feel {{desired_emotion}} at peak intensity here
- Example: [Specific implementation for user's narrative]

**Quote from Section 4.1:**
*"This is the 'wow' moment"* → Deliver maximum impact, don't hold back.
</action>

**BEAT 7: And Ever Since Then... (New Normal) - OPTIONAL**

<action>If {{interaction_type}} benefits from resolution beat, plan settled state:

**From Deep-Research Section 4.1:**
- Animation Purpose: *"Show the lasting transformation, the future state"*
- Calm, settled animations (return to slow timing)
- Footer or "next steps" section
- Confidence-building micro-interactions
- Subtle ambient motion (e.g., floating elements)

**GSAP Implementation (per Section 4.1):**
- Easing: `power1.out` (calm, settled - same as Beat 1)
- Gentle timing: `duration: 1`
- Code pattern: `gsap.to(".testimonials", { opacity: 1, y: 0, duration: 1, ease: "power1.out" })`

**For {{story_to_tell}}:**
- New normal state: [Testimonials? Success metrics? Next page navigation?]
- Confidence-building: [What reinforces the transformation?]
- Subtle motion: [Floating elements? Gentle hover states?]

**Quote from Section 4.1:**
*"Users feel the resolution is complete and actionable"* → Provide clear next steps.

**Optional - Include if narrative benefits from "ever after" closure.**
</action>

<template-output>
beat1_once_upon_time,
beat2_every_day,
beat3_until_one_day_PEAK,
beat4_because_of_that,
beat5_because_of_that_optional,
beat6_until_finally_CLIMAX,
beat7_ever_since_optional,
complete_7beat_narrative_arc
</template-output>
</step>

<step n="4" goal="Generate Narrative Plan Document - Storyboard with Timeline Structure">
<action>Compile comprehensive narrative plan with visual storyboard, timeline structure, and technical specs using all research findings</action>

**Narrative Plan Document Structure:**

1. **Narrative Overview**
   - Story summary using Pixar Story Spine 7-beat framework (Section 4.1)
   - Emotional arc: Start (Beat 1) → Peak (Beat 3) → Climax (Beat 6) → Resolution (Beat 7)
   - Total duration: [5-7s auto-play] OR [scroll distance in vh/px]
   - {{desired_emotion}} achievement strategy: [How narrative arc delivers this emotion]
   - Interaction approach: {{interaction_type}} with [specific implementation]

2. **Visual Storyboard (7 Beats - Pixar Story Spine)**
   Each beat includes:
   - Visual description (what user sees)
   - Timing / scroll position markers (from Section 4.1 timing ranges)
   - Key animation techniques (from Archon research patterns)
   - Easing curves for emotional pacing (power1.out, back.out(1.7), back.out(2))
   - GSAP code examples adapted from Section 4.1 to user's context
   - Quote from Section 4.1 for each beat's narrative purpose

3. **Timeline Technical Specification**
   - GSAP timeline structure with labels for each beat (Section 2.2 technique)
   - Relative positioning plan: Overlaps specified (`"-=0.6"`, `"<0.4"`, `"<0.5"`)
   - Stagger patterns (if applicable): Section 4.1 "Cascading Consequences" approach
   - Premium plugin opportunities: MorphSVG, SplitText for climax (Beat 6)
   - Control methods: `.reverse()`, `.timeScale()`, `.progress()` for {{interaction_type}}
   - Complete code structure with labels, nesting (from Section 2.2)

4. **Key Animation Moments (from {{key_moments}})**
   - Each moment mapped to specific narrative beat (1-7)
   - Technical implementation approach (GSAP method, easing, timing)
   - Archon pattern references + Section 4.1 code examples
   - Integration with overall emotional arc

5. **Implementation Roadmap**
   - **Phase 1**: Build Beats 1-2 (establish context + status quo)
     - Test: Does intro establish tone? Does status quo create contrast?

   - **Phase 2**: Build Beat 3 (peak moment/inciting incident)
     - Test: Is the energy shift dramatic enough? Does it create excitement?

   - **Phase 3**: Build Beats 4-5 (cascading consequences)
     - Test: Do overlaps create richness? Does energy build toward climax?

   - **Phase 4**: Build Beat 6 (climax/resolution)
     - Test: Is this the wow moment? Does it deliver emotional payoff?

   - **Phase 5**: Build Beat 7 (optional new normal)
     - Test: Does it provide closure and clear next steps?

   - **Phase 6**: Polish & Accessibility
     - Test timing, impact, flow, emotion achievement
     - Implement prefers-reduced-motion fallback
     - Verify 60fps performance (especially Beat 6 premium effects)

   **Testing Checkpoints (from Section 4.1 "Common Mistakes"):**
   - [ ] No random effects (all animations serve narrative purpose)
   - [ ] Varied pacing (not uniform timing - each beat has distinct feel)
   - [ ] User control enabled (ScrollTrigger scrub if scroll-driven)
   - [ ] Clear climax delivered (Beat 6 payoff is satisfying)
   - [ ] Emotional arc achieves {{desired_emotion}}
   - [ ] All quotes from research properly cited

6. **Citations & Pattern References**
   - All Archon MCP patterns used (with source IDs/URLs)
   - All Deep-Research sections applied:
     - Section 4.1: Pixar Story Spine Framework (PRIMARY - 7-beat structure)
     - Section 2.2: Timeline Choreography (overlaps, labels, nesting)
     - Section 1.3: Storyboarding (temporal landmarks, parallel vs sequential)
     - Section 4.2: Alternative Structures (if evaluated)
     - Section 1.2: Visual Translation (5-step workflow)
   - All WebSearch 2025 examples referenced (if used)
   - Total research backing: 29k Deep-Research + Archon KB findings

**Present final narrative plan with film director energy:**

*"That's a wrap on the narrative plan! You now have a complete storyboard using the Pixar Story Spine 7-beat framework backed by 29k of GSAP expertise. Every beat tells your story with purpose, every timing choice reflects emotion, every animation serves the narrative arc. This isn't just animation—it's storytelling."*

**Quote from Section 4.1:**
*"Every scroll tells a story. Make it a good one."*

<template-output>
narrative_overview_complete,
visual_storyboard_7beats_detailed,
timeline_technical_spec_with_labels,
key_moments_mapped_to_beats,
implementation_roadmap_6phases,
final_citations_complete
</template-output>
</step>

</workflow>
