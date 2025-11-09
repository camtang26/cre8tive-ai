# Motion Analysis & Technical Translation Workflow
# Visual Cinematography - Section 1.2 Framework (5-Step Translation)

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/analyze-motion/workflow.yaml</critical>

<workflow>

<step n="1" goal="Visual Reference Gathering - Collect Inspiration">
<action>Introduce the motion analysis workflow with visual translation expertise</action>

🎥 **Motion Analysis & Technical Translation (KB-Powered)**

I'll translate visual inspiration into precise GSAP implementation specifications using the 5-step Visual Translation Framework from Deep-Research Section 1.2.

**Please provide complete details:**

<ask response="visual_reference">**Visual Reference:**
What visual inspiration do you have?
- URL to reference animation (live site, CodePen, video)
- Screenshot or screen recording (describe or upload)
- Description of motion you saw elsewhere
- Vague idea/feeling you want to achieve
- Multiple references (provide all URLs/descriptions)</ask>

<ask response="what_catches_eye">**What Catches Your Eye:**
What specifically about this motion do you like?
- The smoothness/fluidity
- The timing/speed
- The coordination between elements
- The way it reveals/transitions
- The physics/natural feel
- The dramatic entrance/exit
- Other (describe what makes it special)</ask>

<ask response="elements_needing_treatment">**Elements Needing This Treatment:**
What elements in your project need this motion?
- Hero section intro (describe elements)
- Product cards (number of items)
- Navigation menu animation
- Page transitions
- Scroll-driven effects
- Interactive components (buttons, forms, etc.)
- Other (describe context)</ask>

<ask response="technical_context">**Technical Context (optional):**
Any technical constraints or context?
- Framework (React, Vue, Next.js, vanilla)
- Existing animation library (if migrating)
- Performance constraints
- Browser support requirements</ask>

<action>Confirm understanding and preview the translation approach</action>

*"Excellent. I'll translate this visual inspiration using the 5-step framework from Section 1.2, backed by pattern matching across our knowledge base of 89 sources and 2.2M+ words of GSAP expertise..."*

<template-output>visual_reference, what_catches_eye, elements_needing_treatment, technical_context</template-output>
</step>

<step n="2" goal="Motion Deconstruction - 5-Step Framework Application">
<action>Apply Section 1.2 Visual Translation Framework (5 steps) with Deep-Research methodology</action>

## **5-Step Visual Translation Framework (Section 1.2)**

**Framework Source:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md

**Core Principle (Section 1.2):**
*"Always maintain a **visual + semantic mapping**. For every imagined motion, have a plan for its code implementation. This prevents the common AI pitfall of producing code that doesn't match the intended effect (e.g. animating the wrong property or poor timing)."*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

---

### Step 1: Gather Inspiration ✅ (COMPLETE from user input)
- ✅ Visual reference: {{visual_reference}}
- ✅ What catches eye: {{what_catches_eye}}
- ✅ Target elements: {{elements_needing_treatment}}

**Research Foundation:**
*"Gather Inspiration: Find references for the style of animation desired. This could be Awwwards winners, CodePen demos, or motion design in apps/games. Note what you like: the smoothness, the bouncy easing, the staggered sequence, etc."*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

---

### Step 2: Deconstruct the Effect

**Deep-Research Methodology (Section 1.2):**
*"Deconstruct the Effect: Break the reference down. For example, if inspired by a site with a floating card animation: What are the components? (e.g. card moves up, fades in, slight rotation). What is the timing and sequence? (card appears after background, etc.) Write these down in plain terms."*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

**Systematic Deconstruction Protocol:**

<action>Analyze the visual reference using frame-by-frame methodology:

---

#### **Question 1: What are the individual components?**

**Identification Strategy:**
1. Watch animation 3-5 times (or scrub through video frame-by-frame)
2. Pause at key moments (start state, transitions, end state)
3. List EVERY element that moves, changes, or transforms
4. Be specific - NOT "animation happens" but "Background circle scales from 0.8 to 1.0"
5. Count total elements: [X] distinct components

**Example Deconstruction:**
```
Component 1: Background circle
- Initial state: scale: 0.8, opacity: 0
- Final state: scale: 1.0, opacity: 1
- Visual behavior: Scales up smoothly while fading in

Component 2: Heading text (per character)
- Initial state: y: -20px, opacity: 0
- Final state: y: 0, opacity: 1
- Visual behavior: Each character rises and fades in sequentially

Component 3: Subtext paragraph
- Initial state: x: -50px, opacity: 0
- Final state: x: 0, opacity: 1
- Visual behavior: Slides in from left while fading

Component 4: CTA button
- Initial state: scale: 0, rotation: 45deg
- Final state: scale: 1, rotation: 0
- Visual behavior: Pops in with rotation unwind
```

**Your Deconstruction:**
{{deconstruction_components_list}}

---

#### **Question 2: What properties are changing?**

**Property Identification + Performance Optimization:**

**GPU-Accelerated Properties (PREFER - Section 5.1):**

Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/18-51-animate-efficient-properties-the-gpu-rule.md

**Critical Performance Principle:**
*"Animating these [layout properties] means on each frame the browser recalculates the layout of possibly many elements -- very slow. AVOID animating these if at all possible."*
(Source: 18-51-animate-efficient-properties-the-gpu-rule.md)

**Property Categories:**

✅ **GPU-Accelerated (USE THESE):**
- **transform properties:** x, y, scale, scaleX, scaleY, rotate, rotateX, rotateY, rotateZ, skewX, skewY
- **opacity:** 0 to 1 transitions
- **filters:** blur, brightness, contrast (use sparingly)

❌ **Layout-Triggering (AVOID THESE):**
- **position:** top, left, right, bottom → Use x, y instead
- **size:** width, height → Use scaleX, scaleY instead
- **spacing:** margin, padding → Use transforms or redesign

**Property Conversion Table:**
| Layout Property (SLOW) | GPU Alternative (FAST) | GSAP Syntax |
|------------------------|------------------------|-------------|
| top: 100px | y: 100 | gsap.to(el, {y: 100}) |
| left: 50px | x: 50 | gsap.to(el, {x: 50}) |
| width: 200px | scaleX: 2 | gsap.to(el, {scaleX: 2}) |
| height: 300px | scaleY: 1.5 | gsap.to(el, {scaleY: 1.5}) |

**will-change Guidance:**
*"Typically under 10 layers is fine; dozens might be an issue on mobile."*
(Source: 18-51-animate-efficient-properties-the-gpu-rule.md)

**For EACH property you identified, classify:**
- Property name: [x / y / scale / opacity / etc.]
- GPU-accelerated? [YES / NO]
- If NO: What's the GPU alternative? [conversion]
- Start value: [initial state]
- End value: [final state]

**Your Property Analysis:**
{{deconstruction_properties_detailed}}

**Property Summary:**
- GPU-accelerated properties: {{gpu_properties_count}} (target: 100%)
- Layout properties: {{layout_properties_count}} (target: 0)
- will-change candidates: {{will_change_properties}} (target: <10 elements)

---

#### **Question 3: What is the sequence?**

**Sequencing Analysis:**

Determine the choreography:
1. **Order of events:** Which element moves first, second, third, etc.?
2. **Timing relationships:** Do elements move together (parallel) or one after another (sequential)?
3. **Overlaps:** Does Element B start while Element A is still animating?
4. **Delays:** How much time between element starts?

**Sequence Documentation Format:**
```
Timeline Position Chart:
0.0s: Background circle starts (duration: 0.5s)
0.3s: Heading text starts (duration: 0.9s, stagger per char)
0.8s: Subtext starts (duration: 0.5s)
1.2s: CTA button starts (duration: 0.4s)
```

**Overlap Analysis:**
- Background & Heading overlap: 0.3s - 0.5s (0.2s overlap)
- Heading & Subtext overlap: 0.8s - 1.2s (0.4s overlap)
- Subtext & CTA overlap: 1.2s - 1.3s (0.1s overlap)

**Your Sequence Analysis:**
{{deconstruction_sequence_detailed}}

---

#### **Question 4: What is the timing/feel?**

**Timing & Easing Analysis (Section 2.1):**

Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md

**Easing Principle:**
*"Premium sites rarely stick to default; they tailor easing per animation. AI should emulate this: think about the personality of each motion and choose an ease accordingly, rather than always using default or none."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Duration Estimation:**
- Fast micro-interactions: 0.2s - 0.4s
- Standard UI transitions: 0.4s - 0.8s
- Scroll reveals: 0.6s - 1.2s
- Hero/cinematic sequences: 1.5s - 3.0s

**Easing Identification:**

Match visual feel to easing categories:

**Smooth & Subtle:**
- Easing: power1.out, power2.inOut, sine.inOut
- Feel: Gentle, barely noticeable, professional
- Use for: Subtle UI transitions, hover states

**Dramatic & Bold:**
- Easing: power4.out, expo.out, circ.inOut
- Feel: Fast start, dramatic slow-down, attention-grabbing
- Use for: Hero moments, important reveals

**Bouncy & Playful:**
- Easing: back.out(1.2-1.7), elastic.out(1, 0.3), bounce.out
- Feel: Overshoot then settle, springy, personality
- Use for: Gamified UI, playful brands, interactive feedback

**Quick & Snappy:**
- Easing: power2.out, expo.out (with short duration <0.3s)
- Feel: Instant feedback, responsive, no lag
- Use for: Button clicks, form interactions, toggles

**Slow & Cinematic:**
- Easing: power2.inOut, power3.out (with long duration >1.5s)
- Feel: Luxury, premium, storytelling pace
- Use for: Hero sequences, premium brands, narrative flow

**Speed Variation Analysis:**
- Fast start → Slow end: ease-out family (power1.out, power2.out)
- Slow start → Fast end: ease-in family (power1.in, power2.in)
- Slow both ends: ease-in-out family (power1.inOut)
- Constant speed: linear (rarely used)

**Your Timing Analysis:**
{{deconstruction_timing_feel}}

</action>

**Complete Deconstruction Output:**
- Components identified: {{deconstruction_components}}
- Properties analyzed: {{deconstruction_properties}}
- Sequence mapped: {{deconstruction_sequence}}
- Timing/feel assessed: {{deconstruction_timing}}

---

### Step 3: Choreograph on Paper

**Deep-Research Methodology (Section 1.2):**
*"Choreograph on Paper: Outline the sequence of events in order. This can be a simple list: e.g. '1) Background circle scales up, 2) Heading text letters fade and rise one by one, 3) Subtext slides in from left,' etc. Decide overlaps or delays between them. Essentially, create a text-based storyboard of actions and their timings."*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

**Timeline Coordination (Section 2.2):**

Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

**Relative Positioning Concepts:**
*"Relative Positioning and Labels: ...timelines allow precise control with positional parameters. For example: `.to('.circle', {x:100}, 0)` starts at 0 (absolute time), `.to('.square', {x:100}, '<')` starts at same time as previous tween, `.to('.triangle', {x:100}, '<0.5')` starts 0.5s after previous tween's start."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

<action>Create text-based storyboard with precise timing notation:

**Storyboard Format:**
```
1) Element Name: Action description (start-end timing, easing)
   Position Parameter: [absolute time / "<" / "-=X" / "+=X"]

Example:
1) Background circle: Scale from 0.8 to 1.0 while fading in (0-0.5s, power2.out)
   Position: 0 (absolute start)

2) Heading text (per character): Rise from y:-20 and fade in (0.3-1.2s, power3.out, stagger: 0.05s)
   Position: 0.3 (absolute - overlaps with background)

3) Subtext: Slide from x:-50 and fade in (0.8-1.3s, back.out(1.4))
   Position: "-=0.4" (starts 0.4s before previous ends)

4) CTA button: Scale from 0 with rotation unwind (1.2-1.6s, elastic.out)
   Position: "<0.1" (starts 0.1s after previous starts)
```

**Timeline Position Parameters Explained:**

| Parameter | Meaning | Use Case |
|-----------|---------|----------|
| `0` | Absolute time 0 seconds | First animation in timeline |
| `1.5` | Absolute time 1.5 seconds | Precise timing needed |
| `"<"` | Same time as previous start | Parallel animations |
| `"<0.5"` | 0.5s after previous start | Staggered overlaps |
| `"-=0.3"` | 0.3s before previous end | Smooth transitions |
| `"+=0.5"` | 0.5s after previous end | Intentional pause |
| `"myLabel"` | Named position in timeline | Complex orchestration |

**Create your storyboard:**
{{choreography_sequence_complete}}

**Timeline Visualization (text-based):**
```
Time:  0s    0.5s   1.0s   1.5s   2.0s
       |------|------|------|------|
Bg:    [=====]
Head:     [=========]
Sub:           [====]
CTA:              [===]

Overlaps:
- Bg + Head: 0.2s overlap (creates smooth flow)
- Head + Sub: 0.4s overlap (maintains momentum)
- Sub + CTA: 0.1s overlap (finale coordination)
```

**Your Timeline Map:**
{{choreography_timing_map}}

**Overlap Strategy:**
{{choreography_overlaps_analysis}}

</action>

**Choreography Output:**
- Sequence documented: {{choreography_sequence}}
- Overlaps identified: {{choreography_overlaps}}
- Timeline map created: {{choreography_timing_map}}

---

### Step 4: Choose the Technique

**Deep-Research Methodology (Section 1.2):**
*"Choose the Technique: For each action, decide the best technical approach: Will this be a GSAP tween or timeline sequence? (Likely yes for most complex cases.) Do we need a ScrollTrigger (for scroll-based control) or just play automatically? Is any CSS solution sufficient for a simple transition? Are special plugins needed?"*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

**Decision Framework (Section 1.2):**
*"Decision framework -- GSAP vs CSS vs other: As a rule of thumb, use CSS for **simple static transitions** (e.g. a quick hover fade) and GSAP for **sequenced, synchronized or complex** animations. GSAP shines when multiple elements or stages must be coordinated precisely."*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

<action>Make systematic technical decisions for implementation:

---

#### **Decision A: GSAP Tween or Timeline?**

**Timeline Mastery (Section 2.1):**
*"Always consider using a gsap.timeline for multi-step animations. It provides far more readability and control than scattered tweens with delays. The resulting code mirrors the storyboard sequence you planned."*
(Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Decision Criteria:**

| Scenario | Recommendation | Rationale |
|----------|---------------|-----------|
| Single element, one property | gsap.to() tween | Simple, no coordination needed |
| Single element, multiple properties | gsap.to() tween | Still single target, can batch properties |
| 2-3 elements, sequential | gsap.timeline() | Sequencing easier than manual delays |
| 3+ elements, coordinated | gsap.timeline() REQUIRED | Precise coordination critical |
| Complex choreography | Nested timelines | Modular, testable, maintainable |

**Nested Timeline Pattern:**
*"You can treat a timeline as a tween by adding it to another timeline... This modular approach means each sub-timeline can be developed and tested separately. Many top-tier sites do this -- e.g., a timeline for each section of a page, then a master timeline to coordinate section transitions."*
(Source: 06-22-mastering-gsap-timeline-techniques.md)

**Your Decision:**
- Structure chosen: {{gsap_structure_decision}}
- Rationale: {{gsap_structure_rationale}}
- Complexity level: [Simple tween / Basic timeline / Nested timelines]

---

#### **Decision B: ScrollTrigger needed?**

**Use Cases:**
- **YES - Scroll-based control:** Animation tied to scroll position (parallax, content reveals, scrub animations)
- **NO - Auto-play on load:** Animation plays once on page load or component mount
- **NO - User-triggered:** Animation triggered by click, hover, or other interaction

**ScrollTrigger Integration Pattern:**
```javascript
// If scroll-driven:
ScrollTrigger.create({
  trigger: ".section",
  start: "top 80%",  // When top of .section hits 80% down viewport
  end: "bottom 20%",
  scrub: true,       // Scrub: link animation to scroll position
  animation: tl      // Timeline to control
});
```

**Your Decision:**
- ScrollTrigger needed: {{scrolltrigger_needed}}
- Trigger element: {{scrolltrigger_trigger}}
- Scrub vs toggle: {{scrolltrigger_mode}}

---

#### **Decision C: Special plugins required?**

**Plugin Ecosystem (ALL FREE in GSAP 3.13+!):**

*"All plugins FREE as of 2024"*
(From Section 2.3 - Plugin Ecosystem)

**Available Plugins:**

1. **SplitText** (FREE) - Text splitting into chars/words/lines
   - Use when: Animating text letter-by-letter, word-by-word
   - Example: Heading text stagger reveal

2. **MorphSVG** (FREE) - SVG shape morphing
   - Use when: Transitioning between SVG shapes
   - Example: Icon transformations, logo animations

3. **Flip** (FREE) - State-based layout transitions
   - Use when: Elements change position/size smoothly
   - Example: Grid reordering, modal expansions

4. **Draggable** (FREE) - Drag and throw interactions
   - Use when: User can drag elements
   - Example: Carousel swiping, sortable lists

5. **MotionPathPlugin** (built-in) - Animate along SVG path
   - Use when: Elements follow curved paths
   - Example: Following curved trajectories

6. **CustomEase** (FREE) - Custom bezier easing curves
   - Use when: Standard eases insufficient for feel
   - Example: Matching specific brand motion feel

**Your Plugin Requirements:**
{{plugins_required_list}}

**Plugin Usage Notes:**
- All plugins: FREE in GSAP 3.13+ (no Club GreenSock required!)
- Import pattern: `import { SplitText } from "gsap/SplitText";`
- Register pattern: `gsap.registerPlugin(SplitText);`

---

#### **Decision D: CSS vs GSAP?**

**Decision Framework (Section 1.2):**

**Use CSS when:**
- ✅ Simple hover state (opacity change, color shift)
- ✅ Single property transition
- ✅ No coordination with other elements
- ✅ Standard easing sufficient (ease, ease-in-out)

**Use GSAP when:**
- ✅ Multiple elements must coordinate
- ✅ Sequenced animations (A then B then C)
- ✅ Complex easing (bounce, elastic, custom curves)
- ✅ Timeline control needed (pause, reverse, scrub)
- ✅ Dynamic values (calculate at runtime)
- ✅ ScrollTrigger integration
- ✅ Plugin features needed (SplitText, MorphSVG, etc.)

**Your Decision:**
- Chosen approach: {{gsap_vs_css_decision}}
- Rationale: {{gsap_vs_css_rationale}}

</action>

**Technical Decisions Summary:**
- GSAP structure: {{technique_gsap_structure}}
- ScrollTrigger: {{technique_scrolltrigger_needed}}
- Plugins required: {{technique_plugins_required}}
- GSAP vs CSS: {{technique_gsap_vs_css_decision}}

---

### Step 5: Prototype Approach

**Deep-Research Methodology (Section 1.2):**
*"Prototype in Isolation: Experts often create a small prototype of a complex animation (e.g. in CodePen) before integrating into the full site. This isolates challenges and allows quick iteration on easing, timing, etc."*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

<action>Define systematic prototyping strategy:

**5-Phase Prototyping Process:**

**Phase 1: Minimal HTML/CSS Structure**
- Create barebone HTML for elements
- Add minimal CSS (positioning, sizing, colors)
- No animation yet - just static layout
- Verify structure matches visual reference

**Phase 2: Implement Core Animation in Isolation**
- Focus on ONE element or ONE sequence
- Test GSAP code in isolation (CodePen/JSFiddle)
- Verify property changes work as expected
- Don't worry about perfect timing yet

**Phase 3: Timing & Easing Refinement**
- Adjust durations (test 0.5s, 0.8s, 1.0s variations)
- Try different easing curves (power2.out vs back.out vs elastic)
- Use `timeScale` to speed up/slow down for testing: `tl.timeScale(2)` = 2x speed
- Find the "sweet spot" that matches reference feel

**Phase 4: Coordination & Complexity**
- Add remaining elements to timeline
- Implement stagger patterns
- Fine-tune position parameters ("-=0.4", "<0.5")
- Test overlap timing for flow
- Verify choreography matches storyboard

**Phase 5: Integration into Full Site**
- Move from prototype to actual project
- Add framework integration (useGSAP, lifecycle hooks)
- Add ScrollTrigger (if needed)
- Test in actual context (different content lengths, screen sizes)
- Add cleanup/kill logic

**Iteration Strategy:**
- Use timeline labels for quick testing: `tl.play("myLabel")`
- Use timeline controls for debugging: `tl.pause()`, `tl.seek(1.5)`, `tl.reverse()`
- Use browser DevTools timeline for performance profiling
- Test on mobile devices (iOS Safari especially)

**Potential Challenges to Anticipate:**

1. **Performance Concerns:**
   - Many elements (>50): Consider canvas rendering
   - Complex SVG: Test on lower-end devices
   - Simultaneous animations: Check for frame drops
   - Solution: GPU-accelerated properties only, reduce complexity

2. **Timing Coordination Complexity:**
   - Too many overlaps: Hard to track timing
   - Delays calculated manually: Error-prone
   - Solution: Use timeline labels, relative positioning

3. **Browser Compatibility:**
   - iOS Safari: Scroll-based animations sometimes janky
   - Older browsers: Transform support issues
   - Solution: Test early, have fallbacks

4. **Framework Integration:**
   - React: useGSAP cleanup required
   - Next.js: SSR considerations (window undefined)
   - Vue: Lifecycle timing
   - Solution: Follow framework-specific patterns

**Your Prototyping Plan:**
{{prototype_approach_detailed}}

**Identified Challenges:**
{{potential_challenges_list}}

**Iteration Strategy:**
{{iteration_testing_strategy}}

</action>

**Prototyping Output:**
- Implementation strategy: {{prototype_approach}}
- Challenges identified: {{potential_challenges}}
- Iteration plan: {{iteration_strategy}}

<template-output>
deconstruction_complete,
choreography_storyboard,
technical_decisions,
prototype_plan
</template-output>
</step>

<step n="3" goal="Research Gate - Pattern Matching">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to Step 4 until research complete</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on deconstructed motion analysis:
    - Motion Type: {{motion_description}}
    - Properties: {{properties_identified}}
    - Technique: {{gsap_structure_decision}}

    You MUST execute the complete pattern matching protocol below BEFORE generating technical spec.</mandate>

  <!-- TIER 1A: Archon MCP - Similar Pattern Discovery -->
  <phase n="1" title="Archon MCP Pattern Matching" required="true">
    <action>Search for similar motion implementations across 89 knowledge sources:

    **Search 1: Motion Pattern Code Examples** (REQUIRED)
    rag_search_code_examples("{{motion_type}} pattern", match_count=8)

    Returns: Similar implementations with code

    **Document for EACH pattern (minimum 8 patterns):**
    1. **Pattern Name:** Descriptive name (e.g., "Staggered Card Reveal with Scale + Fade")
    2. **Implementation Approach:**
       - Timeline vs tweens structure
       - Properties animated (specific: x, y, scale, opacity, etc.)
       - Easing curves used (power2.out, back.out(1.7), etc.)
       - Timing values (duration, stagger, delays)
       - ScrollTrigger integration (if present)
    3. **Source:** Archon source ID + URL (if available)
    4. **Quality Level:** Basic / Professional / Premium / Award-winning
    5. **Code Snippet:** Key implementation pattern
    6. **Adaptation Notes:** How to modify for user's context

    **Search 2: Visual Effect Knowledge** (REQUIRED)
    rag_search_knowledge_base("visual effect {{specific_motion}}", match_count=6)

    Returns: Techniques and approaches for this motion type

    **Document:**
    - Technique name and description
    - When/how to use
    - Best practices specific to this motion
    - Common mistakes to avoid

    **Search 3: Property-Specific Patterns** (REQUIRED)
    rag_search_knowledge_base("{{primary_property}} animation patterns", source_id="b9f6b322298feb21", match_count=6)

    Returns: Documentation for specific properties (scale, opacity, rotation, etc.)

    **Document:**
    - Property optimization tips
    - GPU acceleration considerations
    - Common patterns for this property
    - Performance best practices

    **Search 4: Plugin-Specific Patterns** (CONDITIONAL - If plugin needed)
    IF {{plugin_needed}} = true:
      rag_search_code_examples("{{plugin_name}} examples", match_count=5)

      Returns: Plugin usage patterns

      **Document:**
      - Plugin setup/registration
      - Common usage patterns
      - Gotchas and pitfalls
      - Performance implications
      - Integration with timelines

    **Query ALL 5 Priority Sources:**

    Required queries against these sources:
    - ✅ b9f6b322298feb21 (gsap.com official docs) - Authoritative patterns
    - ✅ 1e5cc3bd5125be3c (Codrops tutorials) - Premium techniques
    - ✅ 90c2ef5e8fa816b7 (FreeFrontend examples) - Real-world patterns
    - ✅ 020e9f31a8c5cdb7 (CodePen collections) - Creative solutions
    - ✅ d571ab8468f31305 (Awwwards - if premium feel) - Award-winning execution
    </action>

    <evidence required="true">
      **🔍 ARCHON PATTERN MATCHES**

      Minimum 8-12 patterns documented. For EACH pattern provide:

      **Code Examples (8+ patterns minimum):**

      Pattern 1: [Pattern name]
      - **Approach:** [Timeline vs tweens, structure description]
      - **Properties:** [Exact properties: x, y, scale, opacity, etc.]
      - **Easing:** [Specific ease: power2.out, back.out(1.7), etc.]
      - **Timing:** [Duration: Xs, stagger: Xs, position parameter]
      - **Source:** [Archon ID] - [URL if available]
      - **Quality:** [Basic/Professional/Premium/Award-winning]
      - **Code Snippet:**
        ```javascript
        gsap.to(".element", {
          x: 100,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        });
        ```
      - **Adaptation:** [How to modify for user's context]

      [Repeat for patterns 2-8...]

      **Visual Effect Techniques (6+ techniques):**
      - [Technique 1]: [Description and when to use]
      - [Technique 2]: [Description and when to use]
      - [Continue...]

      **Property-Specific Patterns:**
      - **{{primary_property}}**: [Optimization tips, common patterns]
      - **Performance notes**: [GPU considerations]
      - **Best practices**: [Specific to this property]

      **Plugin Patterns (if applicable):**
      - **{{plugin_name}}**:
        - Setup: [Registration code]
        - Usage: [Common pattern]
        - Gotchas: [Pitfalls to avoid]

      **Best Match Analysis:**

      **Primary Pattern Recommendation:**
      - Pattern: [Name of best match]
      - Why it matches: [Similarity to user's reference]
      - Required adaptations: [Specific changes needed]
      - Confidence: [High/Medium] - Based on [X] matching characteristics

      **Alternative Patterns:**
      1. [Pattern name] - [When to use instead]
      2. [Pattern name] - [When to use instead]

      **Anti-Patterns (Patterns to AVOID):**
      - [Pattern]: [Why it's wrong for this use case]
      - [Pattern]: [Performance concerns]
    </evidence>

    <validation>
      **Quality Check:**
      - [ ] Minimum 8 code examples documented
      - [ ] Each example has complete details (not just name)
      - [ ] All 5 priority sources queried
      - [ ] Best match identified with rationale
      - [ ] Adaptation notes specific (not generic)
      - [ ] Anti-patterns flagged

      If ANY checkbox fails: Broaden search terms, query additional sources, try again
    </validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks -->
  <phase n="2" title="Deep-Research Framework Validation" required="true">
    <action>Validate approach against Deep-Research frameworks:

    **Framework 1: Section 1.2 - Visual Translation** ✅ (COMPLETED in Step 2)

    File: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md

    Validation checklist:
    - ✅ Step 1: Gathered inspiration (user input)
    - ✅ Step 2: Deconstructed effect (frame-by-frame analysis)
    - ✅ Step 3: Choreographed sequence (text-based storyboard)
    - ✅ Step 4: Chose technique (GSAP structure, plugins, CSS vs GSAP)
    - ✅ Step 5: Prototype plan (5-phase systematic approach)

    **Key Principle Applied:**
    *"Always maintain a visual + semantic mapping. For every imagined motion, have a plan for its code implementation."*

    ---

    **Framework 2: Section 2.1 - Core GSAP Concepts** (REQUIRED)

    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md

    **Validate implementation approach against GSAP fundamentals:**

    **2.1a: Tween vs Timeline Choice**

    Research principle:
    *"Always consider using a gsap.timeline for multi-step animations. It provides far more readability and control than scattered tweens with delays."*
    (Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

    Validation:
    - Decision made: {{gsap_structure_decision}}
    - Rationale: {{structure_rationale}}
    - Complexity level: [Simple / Coordinated / Complex]
    - Is timeline appropriate? [YES / NO - If NO, explain why tweens better]

    **2.1b: Stagger Strategy** (If multiple elements)

    Research principle:
    *"Mastery of staggers allows AI to create sophisticated group animations... staggerstagger adds visual interest and guide the eye, and they are often simpler than scheduling individual tweens for each element."*
    (Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

    Stagger object syntax reference:
    ```javascript
    stagger: {
      each: 0.2,           // Time between each element start
      from: "center",      // Origin: "start", "center", "end", "edges", "random"
      grid: "auto",        // For grid layouts
      ease: "power1.in"    // Easing for stagger distribution
    }
    ```

    Validation:
    - Stagger needed? {{stagger_needed}}
    - Stagger value: {{stagger_each}} seconds between elements
    - Stagger origin: {{stagger_from}} (start/center/end/edges/random)
    - Grid layout? {{grid_auto}} (yes/no)
    - Stagger ease: {{stagger_ease}}

    **2.1c: Easing Strategy**

    Research principle:
    *"Premium sites rarely stick to default; they tailor easing per animation. AI should emulate this: think about the personality of each motion and choose an ease accordingly."*
    (Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

    Easing selection rationale:
    - Primary ease chosen: {{primary_ease}}
    - Why this ease matches motion: {{ease_rationale}}
    - Feel achieved: {{feel_description}} (smooth/dramatic/bouncy/quick/cinematic)
    - Alternative eases considered: {{alternative_eases}}

    ---

    **Framework 3: Section 2.2 - Timeline Techniques** (If coordination needed)

    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

    **IF timeline choreography required:**

    **2.2a: Relative Positioning Strategy**

    Research principle:
    *"Relative scheduling (using '<' or '+=' notations) makes complex overlapping sequences easier to read and adjust. Instead of calculating actual times, you describe relationships."*
    (Source: 06-22-mastering-gsap-timeline-techniques.md)

    Position parameter usage:
    - Absolute times (0, 1.5): {{absolute_positions}}
    - Relative to previous start ("<", "<0.5"): {{relative_start_positions}}
    - Relative to previous end ("-=0.4", "+=0.5"): {{relative_end_positions}}
    - Labels used: {{label_names}} (for complex orchestration)

    **2.2b: Nesting Strategy** (If complex)

    Research principle:
    *"You can treat a timeline as a tween by adding it to another timeline... This modular approach means each sub-timeline can be developed and tested separately."*
    (Source: 06-22-mastering-gsap-timeline-techniques.md)

    Modular timeline structure:
    - Master timeline: {{master_timeline_name}}
    - Sub-timelines: {{sub_timeline_names}}
    - Benefits: [Modularity / Testability / Reusability]

    **2.2c: Control Methods**

    Control methods needed:
    - play() / pause(): {{play_pause_usage}}
    - reverse(): {{reverse_usage}} (for toggle animations)
    - progress() / seek(): {{scrub_usage}} (for ScrollTrigger)
    - timeScale(): {{timescale_usage}} (for testing/debugging)

    ---

    **Framework 4: Disney Animation Principles** (Applied to motion)

    Which of 12 principles apply to this specific motion:

    - **Timing (#8):** {{timing_principle_application}}
      Fast actions vs slow actions - how does timing support motion intent?

    - **Ease In/Out (#6):** {{ease_inout_principle}}
      Acceleration and deceleration - natural motion physics?

    - **Spacing:** {{spacing_principle}}
      Frame-by-frame distribution - creates perceived speed and weight?

    - **Secondary Action:** {{secondary_action_principle}}
      Supporting movements enhance primary action?

    - **Other principles:** {{other_principles_applied}}

    </action>

    <evidence required="true">
      **📚 DEEP-RESEARCH FRAMEWORK VALIDATION**

      **Section 1.2 Application (5-Step Framework):**
      - **Validation:** 5-step framework followed completely ✅
      - **Key insight:** *"Visual + semantic mapping maintained throughout"*

      **Section 2.1 Validation (Core GSAP Concepts):**

      **Tween/Timeline Choice:**
      - Decision: {{structure_chosen}}
      - Rationale: {{why_this_structure}}
      - Research backing: *"Timeline provides far more readability and control"*

      **Stagger Strategy:**
      - Pattern: {{stagger_pattern}}
      - Configuration: each={{stagger_each}}, from={{stagger_from}}
      - Why: {{stagger_rationale}}

      **Easing Strategy:**
      - Primary ease: {{ease_choice}}
      - Feel achieved: {{feel_description}}
      - Rationale: {{ease_rationale}}
      - Research backing: *"Tailor easing per animation, think about personality"*

      **Section 2.2 Validation (Timeline Techniques):** [If applicable]

      **Positioning Strategy:**
      - Approach: {{positioning_approach}}
      - Overlaps created: {{overlap_count}}
      - Labels used: {{labels}} (for orchestration)
      - Research backing: *"Relative scheduling makes complex sequences easier"*

      **Modular Structure:** [If complex]
      - Master timeline: {{master_tl}}
      - Sub-timelines: {{sub_tls}}
      - Benefit: {{modularity_benefit}}

      **Control Strategy:**
      - Methods used: {{control_methods}}
      - Use case: {{control_use_case}}

      **Disney Principles Applied:**
      - **Primary principles:** {{primary_principles}}
      - **Timing (#8):** {{timing_application}}
      - **Ease In/Out (#6):** {{ease_application}}
      - **Spacing:** {{spacing_application}}
      - **Impact:** {{principles_impact}}
    </evidence>

    <validation>
      **Completeness Check:**
      - [ ] Section 1.2 framework validated (5 steps complete)
      - [ ] Section 2.1 concepts applied (tween/timeline, stagger, easing)
      - [ ] Section 2.2 techniques applied (if coordination needed)
      - [ ] Disney principles identified and applied
      - [ ] ALL validation points have specific answers (not generic)
      - [ ] Research quotes extracted and cited

      If ANY checkbox fails: Re-read Deep-Research sections, extract missing insights
    </validation>
  </phase>

  <!-- TIER 2: WebSearch - 2025 Premium Similar Motions (CONDITIONAL) -->
  <phase n="3" title="2025 Premium Motion Examples (Conditional)" required="conditional">
    <condition>Execute ONLY IF Archon lacks 2025-specific examples of {{motion_type}}</condition>

    <action>Search for cutting-edge similar implementations:

    **Evaluate Archon Coverage First:**
    - Does Archon provide 2024-2025 examples? [YES / NO]
    - Are examples recent enough? [YES / NO]
    - Is premium quality represented? [YES / NO]
    - Decision: [SKIP WEBSEARCH / EXECUTE WEBSEARCH]

    **IF WebSearch needed:**

    **Search 1: Premium Motion Examples**
    WebSearch("GSAP {{motion_description}} premium 2025")

    Target: Find award-winning similar effects from 2024-2025

    **Document for each example:**
    - URL and site name
    - Motion analysis (what makes it premium)
    - Technical approach visible (timeline structure, easing hints)
    - Quality indicators (smoothness, polish, attention to detail)
    - Brand/Agency (who created it)

    **Search 2: Brand Animation Breakdown**
    WebSearch("{{similar_brand}} animation breakdown")

    Examples: "Stripe page transition breakdown", "Apple scroll animation analysis"

    **Document:**
    - Brand name and URL
    - Technical approach (how they achieved it)
    - Tools/libraries used (GSAP confirmed?)
    - Lessons learned (what we can apply)

    **Search 3: Awwwards Pattern Analysis**
    WebSearch("Awwwards {{motion_type}} 2024")

    Target: Award-winning patterns from Awwwards

    **Document:**
    - Award winner URL
    - Motion pattern analysis
    - Current industry standards identified
    - Trends observed (faster? slower? more dramatic?)

    **Target:** Find 3-5 premium examples of similar motion
    </action>

    <evidence>
      **🌐 2024-2025 PREMIUM MOTION EXAMPLES**

      [If WebSearch executed:]

      **Example 1: [Site name]**
      - **URL:** [Full URL]
      - **Motion Analysis:** [What makes it premium - specific characteristics]
      - **Technical Approach:** [How they achieved it - timeline/plugins/techniques]
      - **Quality Level:** [Professional / Premium / Award-winning]
      - **Brand/Agency:** [Who created it]
      - **Applicable Patterns:** [What we can learn and adapt]

      [Examples 2-5...]

      **Pattern Trends Observed:**
      - **2024-2025 Trend 1:** [Current trend in this motion type]
      - **Trend 2:** [Another trend]
      - **User Application:** [How user can leverage these trends]

      **OR:**

      [If WebSearch skipped:]
      - **Archon Coverage:** Sufficient 2024-2025 examples found in Archon MCP
      - **Example Count:** [X] recent examples (2024-2025)
      - **Quality Level:** [Professional/Premium/Award-winning]
      - **Justification:** WebSearch not needed - Archon provided complete coverage
    </evidence>

    <validation>
      **Decision Validation:**
      - [ ] Archon coverage evaluated honestly (not skipped to save time)
      - [ ] If WebSearch executed: 3-5 premium examples found
      - [ ] If WebSearch skipped: Valid justification provided
      - [ ] Pattern trends identified (not generic observations)
    </validation>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Pattern Matching Findings**

      ---

      ## TIER 1A: Archon Pattern Matches

      **Code Examples Found:** [X] patterns (minimum 8 required)

      **Primary Pattern Recommendation:**
      - **Pattern:** [Name of best match]
      - **Source:** [Archon ID] - [URL]
      - **Quality:** [Basic/Professional/Premium/Award-winning]
      - **Implementation:**
        ```javascript
        [Key code snippet]
        ```
      - **Why it matches:** [Specific similarities to user's reference]
      - **Adaptations needed:** [Specific changes for user's context]

      **Supporting Patterns (2-3 alternatives):**
      1. [Pattern name]: [When to use instead] (Source: [ID])
      2. [Pattern name]: [When to use instead] (Source: [ID])
      3. [Pattern name]: [When to use instead] (Source: [ID])

      **Property-Specific Insights:**
      - **{{primary_property}}**: [Optimization tips from research]
      - **GPU Acceleration**: [Performance recommendations]

      **Plugin Patterns:** [If applicable]
      - **{{plugin_name}}**: [Setup and usage patterns discovered]

      **Anti-Patterns Identified:**
      - [Pattern to avoid]: [Why it's wrong for this use case]

      ---

      ## TIER 1B: Deep-Research Validation

      **Section 1.2 (5-Step Framework):**
      ✅ Applied correctly - All 5 steps completed with Deep-Research methodology

      **Section 2.1 (Core GSAP):**
      - **Structure Choice:** {{structure}} - *"Timeline provides far more readability and control"*
      - **Stagger Strategy:** {{stagger_config}} - *"Adds visual interest and guides the eye"*
      - **Easing Strategy:** {{ease}} - *"Tailor easing per animation, think about personality"*

      **Section 2.2 (Timeline Techniques):** [If applicable]
      - **Positioning:** {{positioning_approach}} - *"Relative scheduling makes complex sequences easier"*
      - **Modular Structure:** {{modularity}} - *"Each sub-timeline developed and tested separately"*

      **Disney Principles:**
      - **Timing (#8):** {{timing_app}}
      - **Ease In/Out (#6):** {{ease_app}}
      - **Spacing:** {{spacing_app}}

      ---

      ## TIER 2: 2024-2025 Premium Examples

      [If applicable]

      **Premium Examples:** [X] award-winning/premium patterns found

      1. [Site name] - [URL] - [Quality level]
         - What makes it premium: [Analysis]
         - Technical approach: [How they did it]

      2. [Continue...]

      **Pattern Trends:** [Current trends identified]

      **OR:** Archon provided sufficient coverage - WebSearch not needed

      ---

      ## SYNTHESIS - Implementation Strategy

      **GSAP Structure Decision:**
      - **Choice:** {{gsap_structure}} (Timeline / Nested Timelines / Tweens)
      - **Rationale:** {{structure_rationale}}
      - **Research backing:** [Quote from Section 2.1/2.2]

      **Properties Being Animated:**
      - GPU-accelerated: {{gpu_properties}} (100% target)
      - Layout properties: {{layout_properties}} (0 target - converted to transforms)
      - will-change candidates: {{will_change_list}} (<10 elements)

      **Plugins Required:**
      - {{plugin_list}} (all FREE in GSAP 3.13+!)
      - Registration: `gsap.registerPlugin({{plugins}})`

      **Timing Strategy:**
      - Total duration: {{total_duration}}s
      - Sequence: {{sequence_summary}}
      - Overlaps: {{overlap_count}} coordinated overlaps
      - Stagger: {{stagger_config}} (if applicable)

      **Best Patterns to Adapt:**
      1. **Primary:** [Pattern name] from [Source] - [Why best match]
      2. **Alternative:** [Pattern name] from [Source] - [When to use]

      **Performance Optimizations Applied:**
      - Transform properties only (Section 5.1 GPU Rule)
      - will-change < 10 elements (Section 5.1 guidance)
      - Modular timeline structure (Section 2.2 best practice)

      ---

      ## CITATIONS

      **Deep-Research Sections:**
      - Section 1.2: Visual Inspiration Translation (5-step framework)
      - Section 2.1: Core GSAP Concepts (tween, timeline, stagger, ease)
      - Section 2.2: Timeline Techniques (positioning, nesting, control)

      **Archon MCP Sources:**
      - Total patterns: [X] code examples + [Y] knowledge articles
      - Priority sources queried:
        - ✅ b9f6b322298feb21 (gsap.com official)
        - ✅ 1e5cc3bd5125be3c (Codrops)
        - ✅ 90c2ef5e8fa816b7 (FreeFrontend)
        - ✅ 020e9f31a8c5cdb7 (CodePen)
        - ✅ d571ab8468f31305 (Awwwards) [if applicable]

      **WebSearch:** [X] premium examples [if executed] OR Not needed - Archon sufficient

      **Total Research Sources:** [X+Y+Z] sources consulted

      ---
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to technical spec generation.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
      Agent CANNOT rationalize that "research is obvious" or "I know the answer".
      Agent MUST present complete research findings and HALT.
    </user-override>

    <enforcement>
      **This checkpoint is BLOCKING.**

      If you are reading this, you MUST:
      1. Present complete research synthesis above
      2. Execute <halt> command
      3. WAIT for user input
      4. Do NOT proceed to Step 4 autonomously
      5. Do NOT rationalize skipping this checkpoint

      Proceeding without user "Continue [c]" = WORKFLOW VIOLATION
    </enforcement>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
archon_pattern_matches,
archon_code_examples,
deep_research_validation,
websearch_premium_examples,
implementation_synthesis,
research_citations
</template-output>
</step>

<step n="4" goal="Generate Technical Specification">
<action>Create comprehensive technical spec document using template.md structure with research-backed content</action>

## **Technical Specification Generation Protocol**

**Purpose:** Transform research findings into actionable GSAP implementation spec

**Output File:** `{output_folder}/motion-analysis-{timestamp}.md`

---

### **4.1: Motion Overview Section**

<action>Generate Motion Overview with research-backed analysis:

**4.1a: Visual Reference Summary**
- Describe what user provided (URL, screenshot, description)
- Identify motion category:
  - Micro-interaction (button, hover, click feedback)
  - Scroll reveal (content appearing on scroll)
  - Page load sequence (intro animations)
  - Timeline choreography (coordinated multi-element)
  - Physics-based motion (spring, bounce, inertia)
  - Other (describe)
- Note appeal characteristics from user input: {{what_catches_eye}}

**4.1b: Key Characteristics Identification**

Apply Disney Animation Principles to identify 3+ characteristics:

1. **Primary characteristic:** [Description]
   - Disney Principle: [Which principle #1-12]
   - Research insight: [Section 1.2/2.1 quote]

2. **Secondary characteristic:** [Description]
   - Disney Principle: [Which principle]
   - Impact on motion: [How it affects feel]

3. **Tertiary characteristic:** [Description]
   - Disney Principle: [Which principle]
   - Implementation note: [How to achieve in GSAP]

**4.1c: Elements to Animate**
- List exact elements: {{elements_needing_treatment}}
- Element count: [Single / Small array (2-5) / Large array (6+) / Grid]
- Relationships: [Independent / Coordinated / Sequenced / Staggered]
- Complexity assessment: [Simple / Moderate / Complex]

</action>

---

### **4.2: Technical Analysis Section**

<action>Document complete technical breakdown:

**4.2a: Properties Being Animated (Complete List)**

Create property table with GPU validation:

| Property | Start Value | End Value | GPU-Accelerated | Performance Notes |
|----------|-------------|-----------|-----------------|-------------------|
| x | 0 | 100px | ✅ YES | Transform property - optimal |
| opacity | 0 | 1 | ✅ YES | Composite layer - optimal |
| scale | 0.8 | 1.0 | ✅ YES | Transform property - optimal |
| ... | ... | ... | ... | ... |

**GPU Rule Compliance (Section 5.1):**
- GPU-accelerated properties: [X] / [Total] = [%] (target: 100%)
- Layout properties converted: [List conversions: top→y, width→scaleX]
- will-change usage: [X] elements (target: <10)

*"Animating layout properties means on each frame the browser recalculates the layout of possibly many elements -- very slow. AVOID."*
(Source: 18-51-animate-efficient-properties-the-gpu-rule.md)

**4.2b: GSAP Structure Decision**

- **Choice:** [Timeline / Nested Timelines / Individual Tweens]
- **Rationale:** {{structure_rationale}}
- **Research backing:**
  *"Always consider using a gsap.timeline for multi-step animations. It provides far more readability and control than scattered tweens with delays."*
  (Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**4.2c: Plugin Requirements**

List required plugins with FREE notation:

- **{{plugin_1}}**: {{plugin_purpose}} (FREE in GSAP 3.13+!)
- **{{plugin_2}}**: {{plugin_purpose}} (FREE in GSAP 3.13+!)
- Import: `import { {{plugins}} } from "gsap/all";`
- Register: `gsap.registerPlugin({{plugins}});`

**4.2d: Timing/Sequence Breakdown**

**Duration Analysis:**
- Total animation: {{total_duration}}s
- Per-element ranges: {{duration_ranges}}
- Stagger (if applicable): {{stagger_value}}s between elements

**Easing Strategy:**
- Primary ease: {{primary_ease}}
- Feel achieved: {{feel_description}}
- Research rationale:
  *"Premium sites rarely stick to default; they tailor easing per animation."*
  (Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Sequence Coordination:**
- Sequencing approach: [Sequential / Overlapped / Parallel]
- Position parameters used: [Absolute / Relative start / Relative end]
- Timeline labels: {{labels}} (if complex orchestration)

</action>

---

### **4.3: Implementation Pseudocode Section**

<action>Generate step-by-step code structure:

**4.3a: Setup & Configuration**

```javascript
// Imports and registration
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, ... } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, ...);
```

**4.3b: Timeline Structure** (If timeline chosen)

```javascript
// Timeline with defaults
const tl = gsap.timeline({
  defaults: {
    duration: {{default_duration}},
    ease: "{{default_ease}}"
  }
});

// Step 1: [Description]
tl.to(".element-1", {
  {{properties_1}},
  duration: {{duration_1}},
  ease: "{{ease_1}}"
}, 0); // Position: 0 (start)

// Step 2: [Description]
tl.to(".element-2", {
  {{properties_2}},
  duration: {{duration_2}},
  ease: "{{ease_2}}"
}, "<0.3"); // Position: 0.3s after previous starts

// Step 3: [Description with rationale]
tl.to(".element-3", {
  {{properties_3}},
  duration: {{duration_3}},
  ease: "{{ease_3}}"
}, "-=0.4"); // Position: 0.4s before previous ends (overlap)
```

**4.3c: Stagger Pattern** (If applicable)

```javascript
// Stagger for multiple elements
gsap.to(".elements", {
  {{properties}},
  stagger: {
    each: {{stagger_each}},
    from: "{{stagger_from}}", // start/center/end/edges/random
    grid: "{{grid}}",          // auto/[rows, cols]
    ease: "{{stagger_ease}}"
  }
});
```

**4.3d: ScrollTrigger Integration** (If scroll-driven)

```javascript
ScrollTrigger.create({
  trigger: "{{trigger_element}}",
  start: "{{start_position}}", // e.g., "top 80%"
  end: "{{end_position}}",     // e.g., "bottom 20%"
  scrub: {{scrub_value}},      // true / numeric value
  animation: tl
});
```

</action>

---

### **4.4: Complete GSAP Code Section**

<action>Generate copy-paste ready implementation:

**4.4a: Full Implementation**

Include:
- Complete imports and registration
- Framework integration (React useGSAP / Vue lifecycle / Vanilla)
- Main animation code with comments
- prefers-reduced-motion fallback
- Cleanup/kill logic

**4.4b: HTML Structure Expected**

```html
<!-- Minimal required HTML structure -->
<div class="container">
  <div class="element-1">...</div>
  <div class="element-2">...</div>
  <!-- ... -->
</div>
```

**4.4c: CSS Prerequisites**

```css
/* Required CSS for animation */
.element-1 {
  /* Initial positioning/sizing */
}

.element-2 {
  /* Initial state */
}

/* Performance optimization */
.will-animate {
  will-change: transform, opacity;
}
```

</action>

---

### **4.5: Pattern References Section**

<action>Document all research backing:

**4.5a: Archon MCP Patterns Adapted**

**Primary Pattern:**
- **Pattern:** {{primary_pattern_name}}
- **Source:** {{archon_source_id}} - {{pattern_url}}
- **Quality:** {{quality_level}}
- **Adaptation:** {{how_adapted_for_user}}
- **Code Reference:**
  ```javascript
  {{key_code_snippet}}
  ```

**Supporting Patterns (2-3):**
1. {{pattern_name}}: {{when_to_use}} (Source: {{source}})
2. {{pattern_name}}: {{when_to_use}} (Source: {{source}})

**4.5b: Deep-Research Frameworks Applied**

**Section 1.2 - Visual Translation:**
- **Insight:** *"{{key_quote}}"*
  (Source: 02-12-visual-inspiration-technical-translation-workflow.md)
- **Application:** {{how_5_step_framework_applied}}

**Section 2.1 - Core GSAP Concepts:**
- **Insight:** *"{{key_quote}}"*
  (Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)
- **Application:** {{how_concepts_applied}}

**Section 2.2 - Timeline Techniques** (if applicable):
- **Insight:** *"{{key_quote}}"*
  (Source: 06-22-mastering-gsap-timeline-techniques.md)
- **Application:** {{how_timeline_techniques_applied}}

**4.5c: Premium Examples Referenced** (if WebSearch executed)

**Example 1:** {{example_name}}
- **URL:** {{url}}
- **Pattern:** {{pattern_used}}
- **Quality:** {{quality_level}}
- **Takeaway:** {{what_we_learned}}

</action>

---

### **4.6: Implementation Guidance Section**

<action>Provide systematic implementation roadmap:

**4.6a: Prototyping Recommendations (5-Phase Process)**

*"Experts often create a small prototype... This isolates challenges and allows quick iteration."*
(Source: 02-12-visual-inspiration-technical-translation-workflow.md)

**Phase 1: Minimal Structure**
- Create barebone HTML/CSS
- No animation yet - verify static layout
- Check: Elements positioned correctly

**Phase 2: Core Animation**
- Implement ONE element in isolation
- Test GSAP code (CodePen/JSFiddle)
- Verify: Properties change as expected

**Phase 3: Timing Refinement**
- Adjust durations and easing
- Use timeScale for testing: `tl.timeScale(2)`
- Find "sweet spot" matching reference

**Phase 4: Coordination**
- Add remaining elements
- Implement staggers and overlaps
- Fine-tune position parameters

**Phase 5: Integration**
- Move to actual project
- Add framework hooks
- Add ScrollTrigger (if needed)
- Implement cleanup logic

**4.6b: Testing Strategy**

**Visual Testing:**
- Screen sizes: [Breakpoints to test]
- Content variations: [Different lengths]
- Browsers: Chrome, Firefox, Safari, iOS Safari

**Performance Testing:**
- Monitor FPS (should maintain 60fps)
- Chrome DevTools Performance tab
- CPU throttling test (4x slowdown)
- Mobile device testing

**Accessibility Testing:**
- prefers-reduced-motion: Enable in OS, verify fallback
- Keyboard navigation: Tab through elements
- Focus management: Verify autoAlpha impact

**4.6c: Performance Considerations**

**Optimizations Applied:**
- will-change: {{will_change_properties}}
- GPU Acceleration: 100% transform/opacity properties
- Property choices: {{optimization_notes}}

**Potential Issues:**
- {{issue_1}}: {{solution_1}}
- {{issue_2}}: {{solution_2}}

**4.6d: Accessibility**

**prefers-reduced-motion Implementation:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Instant state change
  gsap.set(".element", { {{final_state}} });
} else {
  // Full animation
  {{full_animation_code}}
}
```

</action>

---

### **4.7: Finalize and Present**

<action>Save complete specification to output file and present with cinematographer energy</action>

**Save to:** `{output_folder}/motion-analysis-{timestamp}.md`

**Present completion message:**

*"That's a wrap! 🎬"*

*"You now have a complete technical specification for implementing this motion. Every decision is backed by research:"*

- **Deep-Research:** {{section_count}} frameworks applied (Sections 1.2, 2.1, 2.2)
- **Archon MCP:** {{pattern_count}} patterns analyzed from 89 sources
- **Premium Examples:** {{example_count}} award-winning references (if applicable)
- **Total Sources:** {{total_source_count}} research sources consulted

*"This specification translates your visual inspiration into precision-engineered GSAP implementation using the 5-step Visual Translation Framework and proven patterns from 2.2M+ words of GSAP expertise."*

**Next Steps:**
1. Review the technical spec in the output file
2. Start prototyping in isolation (Phase 1-2)
3. Iterate on timing/easing (Phase 3)
4. Integrate into your project (Phase 4-5)

*"Every cut, every movement, every pause has purpose."* - The Cinematographer

<template-output>
motion_overview,
technical_analysis_complete,
implementation_pseudocode,
gsap_code_ready,
pattern_references,
implementation_guidance,
quality_assessment
</template-output>
</step>

</workflow>

---

## Visual Translation Philosophy

*"Great cinematography starts with vision, but execution requires precision. This workflow translates inspiration into implementation using proven frameworks and research-backed patterns."*

**Section 1.2 Framework:** Gather → Deconstruct → Choreograph → Choose → Prototype

**Research Foundation:**
- **Deep-Research:** 2.2M+ words, 43 sections, GSAP Animation Mastery
- **Archon MCP:** 89 knowledge sources, pattern matching
- **Disney Principles:** 12 animation principles applied

---

## Completion Checklist

Before marking workflow complete, verify:

- ✅ Visual reference analyzed (5-step framework applied completely)
- ✅ ALL research queries executed (Archon + Deep-Research + WebSearch if needed)
- ✅ Research findings documented with verbatim citations
- ✅ Technical decisions are research-backed (NOT guesses or inference)
- ✅ GSAP code is copy-paste ready and modular
- ✅ GPU Rule compliance (100% transform/opacity properties)
- ✅ Report follows template structure (all sections complete)
- ✅ Premium patterns cited with URLs and quality levels
- ✅ Prototype guidance included (5-phase systematic process)
- ✅ Performance optimization documented (Section 5.1 applied)
- ✅ Accessibility implemented (prefers-reduced-motion code)

**Workflow complete when ALL boxes checked.**

---

*🎥 Generated using GSAP Excellence Module - Section 1.2 Visual Translation Framework*

*"From inspiration to implementation, backed by 2.2M+ words of research."* - The Cinematographer
