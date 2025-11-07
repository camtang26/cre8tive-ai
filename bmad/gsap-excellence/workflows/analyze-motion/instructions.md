# Motion Analysis & Technical Translation Workflow
# Visual Cinematography - Section 1.2 Framework (5-Step Translation)

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/analyze-motion/workflow.yaml</critical>

<workflow>

<step n="1" goal="Visual Reference Gathering - Collect Inspiration">
<action>Introduce the motion analysis workflow with visual translation expertise</action>

🎥 **Motion Analysis & Technical Translation (KB-Powered)**

I'll translate visual inspiration into precise GSAP implementation specifications.

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

*"Excellent. I'll translate this visual inspiration using the 5-step framework from Section 1.2, backed by pattern matching across our knowledge base..."*

<template-output>visual_reference, what_catches_eye, elements_needing_treatment, technical_context</template-output>
</step>

<step n="2" goal="Motion Deconstruction - 5-Step Framework Application">
<action>Apply Section 1.2 Visual Translation Framework (5 steps)</action>

## **5-Step Visual Translation Framework (Section 1.2)**

### Step 1: Gather Inspiration (COMPLETE from user input)
- ✅ Visual reference: {{visual_reference}}
- ✅ What catches eye: {{what_catches_eye}}
- ✅ Target elements: {{elements_needing_treatment}}

### Step 2: Deconstruct the Effect

**Break down the reference animation:**

<action>Analyze the visual reference frame-by-frame:

**Question 1:** What are the individual components?
- List every visual element involved
- Example: "Background scales up, heading text letters fade and rise, subtext slides in from left"

**Question 2:** What properties are changing?
- Identify all animating properties
- Common: x, y, scale, opacity, rotation, skew, color, clipPath, etc.

**Question 3:** What is the sequence?
- Determine order of events
- Identify overlaps vs sequential timing
- Note delays between elements

**Question 4:** What is the timing/feel?
- Estimate durations
- Identify easing characteristics (smooth, bouncy, elastic, sharp)
- Analyze speed variations (fast start → slow end, vice versa)
</action>

**Deconstruction Output:**
{{deconstruction_components}}
{{deconstruction_properties}}
{{deconstruction_sequence}}
{{deconstruction_timing}}

### Step 3: Choreograph on Paper

**Create text-based storyboard:**

<action>Outline sequence of events in order:

Example format:
```
1) Background circle scales up (0-0.5s, power2.out)
2) Heading text letters fade and rise one by one (0.3-1.2s, power3.out, stagger 0.05s)
3) Subtext slides in from left (0.8-1.3s, back.out(1.4))
4) CTA button bounces in (1.2-1.6s, elastic.out)
```

Decide overlaps or delays:
- Which animations start together?
- Which wait for others to finish?
- What creates the "flow" feeling?
</action>

**Choreography Output:**
{{choreography_sequence}}
{{choreography_overlaps}}
{{choreography_timing_map}}

### Step 4: Choose the Technique

**Determine best technical approach:**

<action>For each identified animation, decide:

**Option A: GSAP Tween or Timeline?**
- Single element, simple: gsap.to()
- Multiple elements, coordinated: gsap.timeline()
- Complex sequence: Nested timelines

**Option B: ScrollTrigger needed?**
- Scroll-based control: Yes
- Auto-play on load: No
- User-triggered: No (but can use click handlers)

**Option C: Special plugins required?**
- Text splitting (letters/words/chars): SplitText (FREE in 3.13+)
- SVG morphing: MorphSVG (FREE in 3.13+)
- State transitions: Flip (FREE in 3.13+)
- Dragging/throwing: Draggable (FREE in 3.13+)
- Path animation: MotionPathPlugin (built-in)

**Option D: CSS vs GSAP?**
- Simple static transition: CSS might suffice
- Sequenced/synchronized/complex: GSAP
- Precise timing control needed: GSAP
- Dynamic values/logic: GSAP
</action>

**Technical Decision:**
{{technique_gsap_structure}}
{{technique_scrolltrigger_needed}}
{{technique_plugins_required}}
{{technique_gsap_vs_css_decision}}

### Step 5: Prototype Approach

**Implementation strategy:**

<action>Recommend prototyping approach:

- Create minimal HTML/CSS structure
- Implement core animation in isolation
- Test timing/easing independently
- Add coordination/complexity
- Integrate into full site

**Identify potential challenges:**
- Performance concerns (many elements, complex SVG)
- Timing coordination complexity
- Browser compatibility
- Framework integration
</action>

**Prototyping Plan:**
{{prototype_approach}}
{{potential_challenges}}
{{iteration_strategy}}

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
    <action>Search for similar motion implementations:

    **Search 1: Motion Pattern Code Examples**
    rag_search_code_examples("{{motion_type}} pattern", match_count=8)
    → Returns: Similar implementations with code
    → Document: How others achieved this effect

    **Search 2: Visual Effect Knowledge**
    rag_search_knowledge_base("visual effect {{specific_motion}}", match_count=6)
    → Returns: Techniques and approaches
    → Document: Best practices for this motion type

    **Search 3: Property-Specific Patterns**
    rag_search_knowledge_base("{{primary_property}} animation patterns", source_id="b9f6b322298feb21", match_count=6)
    → Returns: Documentation for specific properties (scale, opacity, etc.)
    → Document: How to optimize these properties

    **Search 4: Plugin-Specific Patterns (if applicable)**
    {{#if_plugin_needed}}
    rag_search_code_examples("{{plugin_name}} examples", match_count=5)
    → Returns: Plugin usage patterns
    → Document: Implementation examples
    {{/if_plugin_needed}}

    **Query all 5 priority sources:**
    - b9f6b322298feb21 (gsap.com official)
    - 1e5cc3bd5125be3c (Codrops)
    - 90c2ef5e8fa816b7 (FreeFrontend)
    - 020e9f31a8c5cdb7 (CodePen)
    - d571ab8468f31305 (Awwwards - if premium feel)
    </action>

    <evidence required="true">
      **ARCHON PATTERN MATCHES:**
      Present 8-12 similar patterns discovered:

      **Code Examples:**
      - [Pattern name]: [Implementation approach] (Source: [URL])
      - [Pattern name]: [Implementation approach] (Source: [URL])
      - [Continue for all matches...]

      **Visual Effect Techniques:**
      - [Technique name]: [When/how to use]
      - [Technique name]: [When/how to use]

      **Property-Specific Patterns:**
      - [Property]: [Optimization tips, common patterns]

      **Plugin Patterns (if applicable):**
      - [Plugin]: [Usage examples, gotchas]

      **Best Match Analysis:**
      - Which pattern most closely matches user's visual reference?
      - What adaptations needed for user's context?
      - Any patterns to avoid (anti-patterns)?
    </evidence>

    <validation>If results insufficient (<8 patterns), broaden search terms and try again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks -->
  <phase n="2" title="Deep-Research Framework Validation" required="true">
    <action>Validate approach against Deep-Research frameworks:

    **Framework 1: Section 1.2 - Visual Translation (COMPLETED in Step 2)**
    - ✅ Gathered inspiration
    - ✅ Deconstructed effect
    - ✅ Choreographed sequence
    - ✅ Chose technique
    - ✅ Prototype plan

    **Framework 2: Section 2.1 - Core GSAP Concepts**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md

    Validate implementation approach:
    - **Tween vs Timeline:** Correct choice for complexity?
    - **Staggers:** If multiple elements, optimal stagger value?
    - **Easing:** Appropriate ease for motion type?

    **Framework 3: Section 2.2 - Timeline Techniques (if coordination)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

    If timeline choreography:
    - **Relative Positioning:** Use of `"-=0.4"`, `"<0.5"`, labels?
    - **Nesting:** Should sub-animations be modular timelines?
    - **Control Methods:** play(), pause(), reverse() usage?
    </action>

    <evidence required="true">
      **DEEP-RESEARCH FRAMEWORK VALIDATION:**

      **Section 1.2 Application:**
      - [Validation that 5-step framework followed correctly]

      **Section 2.1 Validation:**
      - **Tween/Timeline Choice:** [Rationale for structure chosen]
      - **Stagger Strategy:** [If applicable, stagger pattern]
      - **Easing Strategy:** [Why chosen easing matches motion]

      **Section 2.2 Validation (if applicable):**
      - **Positioning Strategy:** [Timeline coordination approach]
      - **Modular Structure:** [Sub-timeline breakdown if complex]
      - **Control Strategy:** [User interaction patterns]

      **Disney Principles Applied:**
      - [Which of 12 principles apply to this motion]
    </evidence>
  </phase>

  <!-- TIER 2: WebSearch - 2025 Premium Similar Motions (CONDITIONAL) -->
  <phase n="3" title="2025 Premium Motion Examples (Conditional)" required="conditional">
    <condition>If Archon lacks 2025-specific examples of {{motion_type}}</condition>

    <action>Search for cutting-edge similar implementations:

    **Search 1: Premium Motion Examples**
    WebSearch("GSAP {{motion_description}} premium 2025")
    → Find award-winning similar effects
    → Document: How premium sites implement this

    **Search 2: Brand Animation Breakdown**
    WebSearch("{{similar_brand}} animation breakdown")
    → Examples: "Stripe page transition breakdown", "Apple scroll animation"
    → Document: Technical approaches from top brands

    **Search 3: Awwwards Pattern Analysis**
    WebSearch("Awwwards {{motion_type}} 2024")
    → Find award-winning patterns
    → Document: Current industry standards

    Target: Find 3-5 premium examples of similar motion
    </action>

    <evidence>
      **2024-2025 PREMIUM MOTION EXAMPLES:**
      - [URL]: [Motion analysis] ([Brand/Agency])
      - [URL]: [Technical approach] ([Brand/Agency])
      - [URL]: [What makes it premium] ([Brand/Agency])

      **Pattern Trends:**
      - [Current trend in this motion type]
      - [How user can leverage trends]
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Pattern Matching Findings**

      **TIER 1A: Archon Pattern Matches**
      [Present 8-12 similar patterns with code examples]

      **TIER 1B: Deep-Research Validation**
      - **Section 1.2 (5-Step Framework):** [Applied correctly]
      - **Section 2.1 (Core GSAP):** [Structure validated]
      - **Section 2.2 (Timeline Techniques):** [If applicable]

      **TIER 2: 2024-2025 Premium Examples (if applicable)**
      [Present cutting-edge similar motions]

      **SYNTHESIS - Implementation Strategy:**
      - **GSAP Structure:** [Timeline vs tweens with rationale]
      - **Properties:** [All animating properties identified]
      - **Plugins Required:** [List with FREE notation]
      - **Timing Strategy:** [Sequence, overlaps, durations]
      - **Best Patterns to Adapt:** [Specific Archon patterns]

      **CITATIONS:**
      [All Archon sources, Deep-Research sections, WebSearch URLs]
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to technical spec generation.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
    </user-override>
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
<action>Create comprehensive technical spec document using template.md structure</action>

**Technical Spec Should Include:**

1. **Motion Overview**
   - Visual reference summary
   - Key characteristics identified
   - Elements to animate

2. **Technical Analysis**
   - Properties being animated (complete list)
   - GSAP structure (timeline vs tweens)
   - Plugin requirements (with FREE notation)
   - Timing/sequence breakdown

3. **Implementation Pseudocode**
   - Step-by-step code structure
   - Timeline choreography (if applicable)
   - Stagger patterns (if applicable)

4. **Complete GSAP Code**
   - Copy-paste ready implementation
   - Commented for clarity
   - Modular structure (if complex)

5. **Pattern References**
   - Archon patterns adapted
   - Deep-Research frameworks applied
   - Premium examples cited

6. **Implementation Guidance**
   - Prototyping recommendations
   - Testing strategy
   - Performance considerations
   - Accessibility notes

**Save spec to:** `{output_folder}/motion-analysis-{timestamp}.md`

**Present final spec with cinematographer energy:**

*"That's a wrap! You now have a complete technical specification for implementing this motion. Every decision is backed by research and proven patterns..."*

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

---

## Completion Checklist

Before marking workflow complete, verify:

- ✅ Visual reference analyzed (5-step framework applied)
- ✅ ALL research queries executed (pattern matching complete)
- ✅ Research findings documented with citations
- ✅ Technical decisions are research-backed (not guesses)
- ✅ Code examples are copy-paste ready and modular
- ✅ Report follows template structure
- ✅ Premium patterns cited with URLs
- ✅ Prototype guidance included
- ✅ Performance and accessibility documented

**Workflow complete when ALL boxes checked.**
