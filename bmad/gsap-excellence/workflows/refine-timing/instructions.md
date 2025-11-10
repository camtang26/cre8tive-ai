# Timing Refinement Workflow Instructions
# Polish animation timing and easing curves - KB-powered with research enforcement

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/refine-timing/workflow.yaml</critical>

<workflow>

<step n="1" goal="Deep Context Gathering - Animation Details">
<action>Communicate in {communication_language} throughout workflow execution</action>
<action>Introduce the timing refinement workflow with film editor perfectionist energy</action>

✂️ **Timing Refinement (KB-Powered)**

*"Let me polish your animation to frame-perfect smoothness. We'll use research-backed motion principles to achieve buttery timing."*

Perfect timing is what separates good animations from great ones. I'll analyze your animation using:
- **Archon MCP:** GSAP easing patterns from 89 official sources
- **Deep-Research:** Motion fundamentals (Sections 2.1, 2.2, 8.3)
- **Motion Analysis:** Frame-by-frame breakdown and easing theory

This isn't generic advice - every recommendation will be backed by research.

---

**Please provide complete animation details:**

<ask response="animation_code">**1. Animation Code**

Provide your GSAP animation implementation:
- Complete timeline or tween code (not just snippets)
- ScrollTrigger configurations (if applicable)
- Plugin usage (if any)
- Framework integration (React useGSAP, Vue lifecycle, etc.)

Example:
```javascript
const tl = gsap.timeline();
tl.to(".card", { x: 100, duration: 1, ease: "power2.out" })
  .to(".card", { opacity: 0, duration: 0.5 });
```

**IMPORTANT:** Include surrounding context (component lifecycle, triggers, etc.)</ask>

<ask response="animation_type">**2. Animation Type Classification**

What kind of animation is this?

**A) Micro-Interactions** (instant feedback)
  - Button hover/click states
  - Form input focus/validation
  - Icon state changes
  - Toggle switches

**B) Scroll Effects** (viewport-triggered)
  - Reveal on scroll (fade/slide in)
  - Parallax layers
  - Pinned sections with scrub
  - Scroll-linked progress

**C) Page Load Sequences** (orchestrated intro)
  - Hero section intro
  - Staggered grid reveals
  - Navigation slide-in
  - Logo + text sequences

**D) Timeline Choreography** (coordinated multi-step)
  - Modal open/close sequences
  - Tab/accordion transitions
  - Multi-stage state changes
  - Narrative scroll stories

**E) Physics-Based Motion** (natural movement)
  - Spring animations (bounce, overshoot)
  - Inertia/momentum effects
  - Draggable with snap
  - Magnetic cursor follow

**F) Hero Animations** (cinematic storytelling)
  - Product showcases
  - 3D rotation/zoom sequences
  - Video scrubbing
  - Immersive landing experiences

Choose the letter OR describe if it doesn't fit these categories.</ask>

<ask response="current_timing">**3. Current Timing Implementation (if any)**

What timing values are you currently using?

- **Duration:** (e.g., 0.5s, 1.2s, 800ms, or "default/not set")
- **Easing:** (e.g., power2.out, linear, back.out(1.7), or "default/not set")
- **Stagger:** (if multiple elements - e.g., 0.1s between items, or "N/A")
- **Delay:** (any start delay? e.g., 0.2s, or "none")

If starting fresh, just say **"none - starting from scratch"**</ask>

<ask response="desired_feel">**4. Desired Emotional Feel**

How should this animation feel? (Choose one or describe)

**A) Smooth & Subtle**
  - Gentle, barely noticeable
  - Professional, not distracting
  - Supports content without stealing focus
  - *Example brands: Stripe, Linear, Notion*

**B) Dramatic & Bold**
  - Attention-grabbing, memorable
  - Hero moments that wow
  - Makes a statement
  - *Example brands: Apple product pages, Nike, Tesla*

**C) Bouncy & Playful**
  - Fun, personality-driven
  - Slight overshoot for charm
  - Gamified, delightful
  - *Example brands: Duolingo, Slack, Figma*

**D) Quick & Snappy**
  - Responsive, instant feedback
  - No lag, feels fast
  - Tech-forward, efficient
  - *Example brands: Vercel, Railway, GitHub*

**E) Slow & Cinematic**
  - Luxury, premium storytelling
  - Deliberate, patient reveals
  - Immersive, meditative
  - *Example brands: Rolex, BMW, high-end fashion*

**F) Natural & Organic**
  - Mimics real-world physics
  - Spring/elastic motion
  - Feels alive, not robotic
  - *Example brands: iOS animations, Material Design*

Choose the letter OR describe the feeling you want.</ask>

<ask response="brand_context">**5. Brand & Context (optional but recommended)**

Additional context that might inform timing decisions:

- **Brand personality:** (playful, professional, luxury, tech-forward, etc.)
- **Target audience:** (who will experience this? designers? general users? gamers?)
- **Performance constraints:** (mobile-first? low-end devices? accessibility?)
- **Reference examples:** (URLs or descriptions of animations you admire)
- **Framework specifics:** (Next.js SSR considerations? React 19? Vue 3?)

This helps me give context-aware recommendations. If none, just say **"none"**</ask>

<action>Confirm understanding and preview the research approach</action>

**✂️ Context captured!**

*"Now I'll research timing patterns for {{animation_type}} animations that feel {{desired_feel}}. I'll consult Archon's GSAP knowledge base, apply motion design frameworks, and synthesize research-backed recommendations."*

<template-output>
animation_code,
animation_type,
current_timing,
desired_feel,
brand_context,
date
</template-output>
</step>

<step n="2" goal="Multi-Source Research - Timing Pattern Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to Step 3 until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on {user_name}'s timing refinement request:
    - Animation Type: {{animation_type}}
    - Desired Feel: {{desired_feel}}
    - Current Timing: {{current_timing}}

    You MUST execute the complete research protocol below BEFORE proceeding to timing analysis.</mandate>

  <!-- TIER 1A: Archon MCP - Easing & Timing Patterns (PRIMARY) -->
  <phase n="1" title="Archon MCP Systematic Timing Research" required="true">
    <action>Execute targeted searches for timing and easing patterns:

    **Query Archon's 89 GSAP sources systematically:**

    **Search 1: Easing Curves for Desired Feel**
    ```
    rag_search_knowledge_base("easing curves {{desired_feel}}", source_id="b9f6b322298feb21", match_count=8)
    ```
    → Returns: Easing function recommendations that match the emotional quality
    → Document:
      - Which easing functions create {{desired_feel}} (power1-4, expo, back, bounce, elastic, circ, sine)
      - Visual descriptions ("decelerates smoothly like a car braking")
      - Code examples with specific parameters

    **Search 2: Timing Principles for Animation Type**
    ```
    rag_search_knowledge_base("timing duration {{animation_type}}", source_id="b9f6b322298feb21", match_count=6)
    ```
    → Returns: Duration recommendations and timing coordination patterns
    → Document:
      - Typical duration ranges for {{animation_type}}
      - Timing coordination (stagger, overlap, sequential)
      - Performance considerations (faster for interactions, slower for storytelling)

    **Search 3: Custom Easing Code Examples**
    ```
    rag_search_code_examples("custom easing {{animation_type}}", match_count=6)
    ```
    → Returns: CustomEase.create() examples, bezier curve values
    → Document:
      - Bezier curve code snippets
      - When to use custom easing vs built-in
      - How to visualize easing curves

    **Search 4: Motion Design Fundamentals**
    ```
    rag_search_knowledge_base("motion design principles timing", source_id="b9f6b322298feb21", match_count=5)
    ```
    → Returns: Core motion theory (Disney principles, film editing rhythms)
    → Document:
      - Timing & Spacing principle (Disney's 12 principles)
      - Ease-in/Ease-out theory
      - Anticipation and follow-through in timing

    **IMPORTANT:** Execute ALL 4 searches. Present findings organized by category (Easing Options, Duration Guidelines, Custom Curves, Motion Theory).
    </action>

    <evidence required="true">
      **ARCHON RESEARCH FINDINGS:**

      **Easing Options for "{{desired_feel}}" Feel:**
      - [Easing 1]: [Description] ([Source])
      - [Easing 2]: [Description] ([Source])
      - [Easing 3]: [Description] ([Source])
      - [Visual motion description for each]

      **Duration Guidelines for "{{animation_type}}" Animations:**
      - Recommended range: [X-Y seconds] ([Rationale from source])
      - Faster option: [X seconds] ([When to use])
      - Slower option: [Y seconds] ([When to use])
      - Source citations: [Archon source IDs]

      **Custom Easing Examples:**
      - [Code snippet 1 with bezier values]
      - [Code snippet 2 with CustomEase]
      - [When custom easing adds value vs built-in]

      **Motion Design Principles Applied:**
      - [Disney/film principle 1]: [How it applies to this timing]
      - [Disney/film principle 2]: [How it applies to this timing]

      **Total Sources Consulted:** [Number] (Archon source IDs listed)
    </evidence>
  </phase>

  <!-- TIER 1B: Deep-Research Framework Integration -->
  <phase n="2" title="Deep-Research Framework Application" required="true">
    <action>Consult GSAP Animation Mastery Deep-Research sections:

    **Section 2.1 - Core GSAP Concepts (Tween, Timeline, Stagger, Ease)**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md
    Focus: Easing fundamentals, easing curve types (power, expo, back, bounce, elastic, circ, sine), duration principles

    Apply to this case:
    - Which easing curve type fits {{desired_feel}}? (power2-4 for smooth, expo for dramatic, back for bouncy, etc.)
    - What does Section 2.1 say about .to() vs .from() vs .fromTo() for {{animation_type}}?
    - Easing theory: How easing curves create different motion qualities
    - Are there anti-patterns to avoid?

    **Section 2.2 - Mastering Timeline Techniques (Timing Coordination)**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md
    Focus: Timeline sequencing, stagger strategies, overlap techniques, position parameters

    If {{animation_type}} involves multiple elements or coordinated sequences:
    - Timeline sequencing patterns (absolute position, relative position "<", labeled positions)
    - Stagger strategies (stagger: { amount, each, from: "center"/"edges"/"random" })
    - Overlap techniques ("<", "<0.5", "+=0.2" for seamless choreography)
    - Nested timeline patterns for complex sequences

    **Section 8.3 - immediateRender Pitfall (from() tweens)**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/36-pitfall-83-ignoring-in-from-tweens.md
    Focus: Flicker prevention, immediateRender behavior, when to override defaults

    Check: Does current code use .from() tweens?
    - Potential flicker issue with default immediateRender:true on .from() tweens
    - When to explicitly use immediateRender:false (prevent flash of initial state)
    - Alternative: fromTo() for explicit start/end control (no guessing)
    - Common mistake: .from() inside ScrollTrigger without immediateRender:false

    Document which sections were consulted and key insights extracted.
    </action>

    <evidence required="true">
      **DEEP-RESEARCH FRAMEWORKS APPLIED:**

      **Section 2.1 (Core GSAP Easing):**
      - Easing category for {{desired_feel}}: [Category name]
      - Specific recommendations: [Extracted guidance]
      - Duration guidance: [From framework]

      **Section 2.2 (Timeline Techniques):** [If applicable]
      - Timing coordination pattern: [Stagger/sequence/overlap strategy]
      - Code pattern to use: [Example from framework]

      **Section 8.3 (Timing Pitfalls):** [If applicable]
      - immediateRender consideration: [Analysis]
      - Flicker risk: [Yes/No and mitigation]

      **Framework Insights Count:** [Number of sections consulted]
    </evidence>
  </phase>

  <!-- TIER 2: WebSearch (conditional - only if Archon/Deep-Research have gaps) -->
  <phase n="3" title="2025 Premium Examples (Conditional)" required="conditional">
    <condition>Execute ONLY if Archon + Deep-Research don't fully cover {{animation_type}} + {{desired_feel}} combination</condition>

    <action>Search for cutting-edge premium examples:

    **Search 1: Awwwards Premium Timing**
    ```
    WebSearch("{{animation_type}} animation timing Awwwards 2025")
    ```
    → Find award-winning examples of this specific animation type
    → Document: Timing values they use, why it feels premium

    **Search 2: Brand Timing Breakdown**
    If {{brand_context}} mentioned specific brands:
    ```
    WebSearch("{{brand_name}} animation timing analysis")
    ```
    → Examples: "Linear app timing", "Stripe button animations"
    → Document: How top brands achieve timing excellence

    **Search 3: Motion Design Trends 2025**
    ```
    WebSearch("motion design timing trends 2025")
    ```
    → Latest industry timing standards
    → Document: Are animations getting faster? Slower? More dramatic?

    Target: Find 2-3 premium examples with specific timing values
    </action>

    <evidence>
      **2024-2025 PREMIUM TIMING EXAMPLES:** [If searches executed]
      - [URL/Brand]: [Timing analysis] ([Specific values: duration, easing])
      - [URL/Brand]: [Why it works] ([Design rationale])
      - [Trend identified]: [How {{animation_type}} timing is evolving]

      **OR:** "Archon + Deep-Research provided sufficient coverage. WebSearch not needed."
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Timing Pattern Findings**

      **TIER 1A: Archon MCP Easing & Timing Research**

      **Recommended Easing Curves (for "{{desired_feel}}" feel):**
      1. **PRIMARY:** [Easing function] - [Visual description] ([Why it's best])
         - Code: `ease: "{{primary_easing}}"`
         - Source: [Archon source ID]

      2. **ALTERNATIVE 1:** [Easing function] - [Trade-off explanation]
         - Code: `ease: "{{alt_easing_1}}"`

      3. **ALTERNATIVE 2:** [Easing function] - [Trade-off explanation]
         - Code: `ease: "{{alt_easing_2}}"`

      **Duration Recommendations (for "{{animation_type}}" animations):**
      - **Recommended Range:** [X-Y seconds] ([Rationale])
      - **Specific Recommendation:** [X seconds] ([Why this value])
      - **Faster Option:** [If user needs quicker] ([Trade-off])
      - **Slower Option:** [If user needs more drama] ([Trade-off])
      - **Source:** [Archon findings]

      **Motion Design Principles Applied:**
      - [Disney/film principle]: [How it applies]
      - [Timing theory]: [Practical application]

      ---

      **TIER 1B: Deep-Research Framework Insights**

      - **Section 2.1:** [Easing category guidance]
      - **Section 2.2:** [Timeline coordination if applicable]
      - **Section 8.3:** [Timing pitfall check - immediateRender]

      ---

      **TIER 2: 2024-2025 Trends** [If applicable]
      [Premium examples or "Not needed - Archon sufficient"]

      ---

      **SYNTHESIS - Timing Strategy:**

      **PRIMARY RECOMMENDATION:**
      - Duration: `{{recommended_duration}}s`
      - Easing: `ease: "{{recommended_easing}}"`
      - Rationale: [Why this combination achieves {{desired_feel}}]

      **FRAME-BY-FRAME PREVIEW:**
      *"With {{recommended_easing}}, your animation will [visual description of motion]:"*
      - 0-25%: [Initial movement description]
      - 25-50%: [Mid-animation description]
      - 50-75%: [Deceleration description]
      - 75-100%: [Final settle description]

      **CITATIONS:**
      - Archon sources: [List source IDs]
      - Deep-Research sections: [2.1, 2.2, 8.3]
      - WebSearch: [URLs if used, or "Not needed"]
      - Total research sources: [Count]

    </output>

    <halt>🚨 STOP. Present research findings in {communication_language}.

*"I've analyzed timing patterns from {{number_of_sources}} sources. Here are my research-backed recommendations..."*

Wait for {user_name} to respond **"Continue [c]"** before proceeding to refinement implementation.</halt>

    <user-override>
      Only {user_name} can skip research with explicit **"Skip research [s]"** command.
      You (the agent) CANNOT autonomously skip research - this is a PROCESS, not a suggestion.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
primary_easing_recommendation,
primary_easing_code,
alternative_easing_1,
alternative_easing_2,
recommended_duration,
duration_rationale,
frame_by_frame_description,
archon_sources_consulted,
deep_research_sections_applied,
websearch_findings,
total_research_sources,
motion_principle_applied
</template-output>
</step>

<step n="3" goal="Timing Analysis - Apply Research to Current Code">
<action>Now that research is complete, analyze the current animation against findings</action>

✂️ **Timing Analysis (Research-Backed)**

*"Let me analyze your current timing against the research findings..."*

### 3.1: Current Timing Audit

**Your Current Implementation:**
```javascript
{{animation_code}}
```

**Current Timing Values:**
- Duration: {{current_timing.duration}} (or default 0.5s if not specified)
- Easing: {{current_timing.easing}} (or default power1.out if not specified)
- Stagger: {{current_timing.stagger}} (if applicable)

**Comparison to Research Recommendations:**

| Aspect | Current | Recommended | Analysis |
|--------|---------|-------------|----------|
| Duration | {{current_timing.duration}} | {{recommended_duration}}s | [Too fast/slow/good] |
| Easing | {{current_timing.easing}} | {{primary_easing_recommendation}} | [Analysis] |
| Feel | [Analyze current feel] | {{desired_feel}} | [Gap analysis] |

### 3.2: Specific Issues Identified

<action>Based on research, identify specific timing problems:</action>

**Issue 1: Duration Mismatch** [If applicable]
- Current: {{current_timing.duration}}s feels [too fast/slow] for {{animation_type}}
- Research recommends: {{recommended_duration}}s for this animation type
- Impact: [Explain how wrong duration affects user experience]
- Fix: Adjust to {{recommended_duration}}s

**Issue 2: Easing Curve Inappropriate** [If applicable]
- Current: {{current_timing.easing}} creates [linear/robotic/wrong] motion
- Research recommends: {{primary_easing_recommendation}} for {{desired_feel}}
- Impact: [Explain how wrong easing affects feel]
- Fix: Change to `ease: "{{primary_easing_code}}"`

**Issue 3: Missing Timing Nuance** [If applicable]
- Current: No stagger/overlap (all animations happen simultaneously)
- Research suggests: [Stagger strategy from Section 2.2]
- Impact: [Explain how coordination affects quality]
- Fix: [Specific timeline adjustment]

**Issue 4: Timing Pitfall Check (Section 8.3)** [If applicable]
- Current: Uses from() which may cause flicker
- Pitfall: immediateRender defaults to true
- Fix: Add `immediateRender: false` or use fromTo()

### 3.3: Motion Theory Application

<action>Apply film editing and motion design principles:</action>

**Walt Disney's "Timing & Spacing" Principle:**
*"The number of frames between two positions determines the speed of the action."*

For {{animation_type}} with {{desired_feel}} feel:
- Frames should be: [closely spaced/widely spaced] ([Rationale])
- Acceleration curve: [Ease-in/out analysis]
- Visual rhythm: [How timing creates rhythm]

**Walter Murch's Editing Rhythm (adapted to web):**
- Does {{recommended_duration}}s feel natural for this action?
- Does easing curve guide the eye smoothly?
- Does timing respect user expectations?

<template-output>
current_timing_audit,
issue_1_duration,
issue_2_easing,
issue_3_coordination,
issue_4_pitfall,
motion_theory_analysis,
specific_problems_count
</template-output>
</step>

<step n="4" goal="Generate Refined Implementation">
<action>Create the refined animation code with research-backed timing</action>

✂️ **Refinement Generated (Research-Backed)**

*"Here's your animation with frame-perfect timing..."*

### 4.1: Refined Code

**Refined Implementation:**
```javascript
{{refined_animation_code}}
```

**Key Changes Made:**
1. **Duration:** {{current_timing.duration}} → {{recommended_duration}}s
   - Rationale: [Explain why this duration from research]
   - Feel: [Describe how it will feel different]

2. **Easing:** {{current_timing.easing}} → {{primary_easing_recommendation}}
   - Rationale: [Explain why this easing from research]
   - Motion: [Describe motion quality - "decelerates smoothly", "bounces playfully", etc.]

3. **Additional Refinements:** [If any]
   - [Stagger adjustments]
   - [Timeline coordination]
   - [immediateRender fixes]
   - [Performance optimizations]

### 4.2: Visual Motion Description

**How This Will Feel:**

*With `{{recommended_duration}}s` and `ease: "{{primary_easing_code}}"`, your animation will move like this:*

**Frame-by-Frame Breakdown:**
- **0-25% (first quarter):** {{frame_description_0_25}}
- **25-50% (second quarter):** {{frame_description_25_50}}
- **50-75% (third quarter):** {{frame_description_50_75}}
- **75-100% (final quarter):** {{frame_description_75_100}}

**Overall Feel:** {{overall_motion_description}}

Example: *"Starts with quick burst of energy, then smoothly decelerates like a luxury car coming to rest. The {{primary_easing_recommendation}} curve creates a premium, polished feel that matches {{brand_context}} brand personality."*

### 4.3: Alternative Options (with Trade-offs)

If the primary recommendation doesn't feel right, here are research-backed alternatives:

**Option 2: {{alternative_easing_1}}**
- Duration: {{alt_duration_1}}s
- Trade-off: [More/less dramatic, faster/slower, etc.]
- When to use: [Scenario where this is better]
- Code: `{ duration: {{alt_duration_1}}, ease: "{{alternative_easing_1}}" }`

**Option 3: {{alternative_easing_2}}**
- Duration: {{alt_duration_2}}s
- Trade-off: [Different feel explanation]
- When to use: [Scenario where this is better]
- Code: `{ duration: {{alt_duration_2}}, ease: "{{alternative_easing_2}}" }`

### 4.4: Testing Recommendations

**Before/After Comparison:**
1. Test current timing: [How it feels now]
2. Apply refinement: [How it should feel after]
3. Compare side-by-side: [Validation method]

**Device Testing:**
- Desktop: Should feel [description]
- Mobile: May need slight adjustment ([Reason])
- Reduced motion: [Accessibility consideration]

**Performance Check:**
- 60fps achieved? [Based on duration and properties]
- Jank risk: [Low/Medium/High] ([Rationale])

<template-output>
refined_animation_code,
duration_change_rationale,
easing_change_rationale,
additional_refinements,
frame_by_frame_breakdown,
overall_motion_feel,
alternative_option_1,
alternative_option_2,
testing_checklist
</template-output>
</step>

<step n="5" goal="Generate Final Report with Research Citations">
<action>Create comprehensive timing refinement report using template.md</action>

✂️ **Generating Report...**

*"Compiling your timing refinement report with all research citations..."*

<action>Populate template.md with all captured variables:
- Research findings (Archon sources, Deep-Research sections)
- Before/after code comparison
- Motion analysis and frame breakdowns
- Alternative options with trade-offs
- Testing recommendations
- Full citation list
</action>

<action>Save document to: {{default_output_file}}</action>

**Report saved to:** `{{output_folder}}/timing-refinement-{{timestamp}}.md`

---

✂️ **"Frame-perfect timing achieved. Your animation is ready for production."**

*Test the refinement and let me know if you need any adjustments. All recommendations are backed by {{total_research_sources}} research sources.*

</step>

</workflow>
