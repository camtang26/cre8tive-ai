# Creative Ideation Workflow Instructions
# SIGNATURE WORKFLOW: Generate premium animation concepts

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/creative-ideation/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering">
<action>Introduce the creative ideation workflow with film director energy</action>

**"Let's create something exceptional. Tell me about your animation needs."**

<ask response="component_context">What component or page needs animation?</ask>
<ask response="brand_personality">What's your brand personality? (playful, professional, edgy, minimal, etc.)</ask>
<ask response="user_goals">What should this animation achieve? (engagement, delight, storytelling, wow factor)</ask>
<ask response="constraints">Any constraints? (performance budget, timeline, accessibility needs)</ask>
<ask response="anti_patterns">Any trends to avoid? Competitor patterns to differ from?</ask>

<action>Confirm understanding with user before proceeding to research</action>

<template-output>component_context, brand_personality, user_goals, constraints, anti_patterns</template-output>
</step>

<step n="2" goal="Multi-Source Research - Cinematographer (TIER 1/2/3 PROTOCOL)">
<critical>KNOWLEDGE SOURCE HIERARCHY: Tier 1 (Archon + Deep-Research) → Tier 2 (WebSearch) → Tier 3 (Context7)</critical>

<action>Invoke Cinematographer agent for systematic multi-source research</action>

**Research Protocol (Cinematographer's 89-Source Systematic Querying):**

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 1: ARCHON MCP RAG DATABASE (Primary - Cameron's Curated Knowledge) -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 1A: Archon MCP Systematic Queries**

<action>Query ALL 5 priority Archon sources systematically:</action>

**Source 1: gsap.com Official Docs (2.2M+ words)**
```
rag_search_knowledge_base("[component_context] animation patterns", source_id="b9f6b322298feb21", match_count=8)
rag_search_knowledge_base("[brand_personality] GSAP techniques", source_id="b9f6b322298feb21", match_count=8)
rag_search_code_examples("[component_context] GSAP implementation", source_id="b9f6b322298feb21", match_count=8)
```

**Source 2: Tympanus/Codrops Tutorials (Premium Quality)**
```
rag_search_knowledge_base("premium [component_context] animations", source_id="1e5cc3bd5125be3c", match_count=8)
rag_search_code_examples("Codrops [animation_type] examples", source_id="1e5cc3bd5125be3c", match_count=8)
```

**Source 3: FreeFrontend Examples**
```
rag_search_code_examples("[component_context] showcase", source_id="90c2ef5e8fa816b7", match_count=6)
```

**Source 4: CodePen Collections**
```
rag_search_code_examples("GSAP [animation_type] CodePen", source_id="020e9f31a8c5cdb7", match_count=6)
```

**Source 5: Lenis Integration Patterns**
```
rag_search_knowledge_base("smooth scroll [component_context]", source_id="77ae0ef68a867aa9", match_count=4)
```

<critical>🎉 PREMIUM PLUGIN QUERIES (ALL FREE in 3.13+!)</critical>
<action>Actively search for premium plugin examples:</action>
```
rag_search_code_examples("ScrollSmoother [component_context]", match_count=6)
rag_search_code_examples("MorphSVG icon transitions", match_count=6)
rag_search_code_examples("SplitText [text_animation_type]", match_count=6)
rag_search_code_examples("DrawSVG line reveals", match_count=4)
rag_search_code_examples("MotionPath custom trajectories", match_count=4)
```

**Why Premium Plugins Matter:**
- ScrollSmoother (was $99/year) → NOW FREE!
- MorphSVG (was $99/year) → NOW FREE!
- SplitText (was $99/year) → NOW FREE!
- NO COST BARRIER = RECOMMEND LIBERALLY!

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 1B: DEEP-RESEARCH FRAMEWORK (Cameron's Synthesized Wisdom)        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 1B: Deep-Research Framework Application**

<action>Apply Cameron's Deep-Research frameworks to guide creative thinking:</action>

**Section 1.1: Animator's Mindset**
- Think like storyteller, not coder
- Design narrative beats, not just "effects"
- Ask: "What story does this animation tell?"
- Every animation should have clear objective

**Section 1.2: Visual Inspiration → Technical Translation**
- Translate design vision into GSAP implementations
- Map brand personality to motion design systems:
  - Playful → Bouncy easing (elastic, back), physics-based
  - Professional → Smooth easing (power2, expo), controlled
  - Edgy → Sharp easing (power4), dramatic contrast
  - Minimal → Subtle easing (sine, power1), refined
- Document easing curve specifications for implementation

**Section 1.3: Storyboarding Complex Sequences**
- Apply Pixar Story Spine to animation narrative:
  - Once upon a time... (establish context)
  - Every day... (show status quo)
  - Until one day... (introduce change/feature)
  - Because of that... (show consequences/benefits)
  - Until finally... (resolution/CTA)
- Break animation into "sequence" and "shot" levels
- Choreograph timing for narrative beats

**Section 2.2: Mastering Timeline Techniques**
- Coordinate multiple elements for cohesive story
- Plan stagger patterns (sequential, random, grid-based)
- Design label-based timeline structure for maintainability

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 2: WEBSEARCH (For 2024-2025 Trends & Gaps)                        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 2: WebSearch for 2025-Specific Trends**

<action>Use WebSearch for recent premium examples not in Archon:</action>
```
WebSearch("[component_context] animation Awwwards 2025")
WebSearch("GSAP [animation_type] premium trends 2025")
WebSearch("Linear Stripe Vercel [component_context] animation breakdown")
WebSearch("[brand_personality] web animation agency examples 2024")
```

<action>Target cutting-edge agencies and brands:</action>
- Linear app (GSAP excellence)
- Stripe (scroll storytelling)
- Vercel (minimal sophistication)
- Apple (cinematic parallax)
- Codrops latest tutorials (2024-2025)

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 3: CONTEXT7 (Minimal - API Verification Only)                     -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 3: Context7 (Minimal Use - API Verification)**

<action>ONLY if needed for version-specific API questions:</action>
```
resolve-library-id("gsap")
get-library-docs(context7CompatibleLibraryID="/greensock/gsap", topic="[specific_plugin]", tokens=3000)
```

**Use Context7 sparingly:**
- Archon already has gsap.com docs (redundant!)
- Only for brand-new 3.13+ features not yet in Archon
- Verify specific plugin API syntax if uncertain

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SYNTHESIS & CITATION                                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Synthesis & Documentation**

<action>Synthesize findings across ALL sources:</action>

1. **Pattern Identification**
   - What patterns appear across multiple sources?
   - Which are battle-tested (Archon verified)?
   - Which are cutting-edge (WebSearch 2025)?

2. **Quality Assessment**
   - Premium vs. basic examples
   - Complexity levels (simple, medium, high)
   - Performance implications (60fps achievable?)

3. **Citation Format** (CRITICAL - Must Document Sources)
   ```
   Pattern: "Cinematic Parallax Depth"
   Sources:
   - Archon MCP: gsap.com ScrollTrigger docs (source: b9f6b322298feb21)
   - Archon MCP: Codrops "Multi-Layer Parallax" tutorial (source: 1e5cc3bd5125be3c)
   - WebSearch: Apple iPhone 15 product page (2024)
   - Deep-Research: Section 1.2 (Visual Translation), Section 2.2 (Timeline Choreography)
   ```

4. **Deep-Research Framework Applied**
   - Document which sections informed creative direction
   - Reference specific principles used (Pixar Story Spine, easing curves, etc.)

<template-output>
archon_findings_by_source,
deep_research_frameworks_applied,
websearch_premium_trends,
research_citations,
brand_personality_motion_mapping
</template-output>
</step>

<step n="3" goal="Trend Analysis & Synthesis (Deep-Research Guided)">
<action>Director + Cinematographer synthesize research using Deep-Research frameworks</action>

**1. Pattern Recognition & Trend Analysis**

<action>Identify cutting-edge vs overdone (Deep-Research 1.4: Decision Framework):</action>
- **Fresh & Exciting (2025):**
  - What emerged from WebSearch 2025 trends?
  - What premium agencies are doing (Linear, Stripe, Vercel)?
  - What's in Archon's latest Codrops tutorials?
- **Cliché & Tired:**
  - Overdone parallax without purpose?
  - Generic fade-in-up animations?
  - Cookie-cutter scroll reveals?
- **Brand Personality Fit:**
  - Does this align with user's brand personality from Step 1?
  - Would this feel authentic or forced?

**2. Technical Feasibility Assessment**

<action>Assess implementation viability:</action>
- GSAP 3.13.0+ can achieve this? (verify with Archon findings)
- Which plugins required? (prioritize premium - they're FREE!)
- Performance implications:
  - 60fps achievable? (Deep-Research 5.5: Optimize for 60fps)
  - GPU-accelerated properties? (Deep-Research 5.1: GPU Rule)
  - Bundle size impact?

**3. Brand Personality → Motion Design Mapping**

<action>Apply Deep-Research Section 1.2 (Visual Inspiration Translation):</action>

**Easing Curve Specifications:**
- **Playful** → Bouncy, organic motion
  - Easing: `elastic.out(1, 0.5)`, `back.out(1.7)`, physics-based
  - Plugins: MorphSVG transformations, physics-driven animations
  - Examples: Icons that bounce, elements that overshoot

- **Professional** → Smooth, controlled precision
  - Easing: `power2.inOut`, `expo.out`, refined curves
  - Plugins: ScrollSmoother for buttery scrolling, controlled timelines
  - Examples: Apple-style polish, enterprise-grade sophistication

- **Edgy** → Sharp, dramatic contrast
  - Easing: `power4.inOut`, `circ.inOut`, aggressive curves
  - Plugins: MotionPath for dynamic trajectories, dramatic morphing
  - Examples: Unexpected movements, bold visual statements

- **Minimal** → Subtle, refined elegance
  - Easing: `sine.inOut`, `power1.out`, gentle curves
  - Plugins: DrawSVG for line reveals, SplitText for sophisticated text
  - Examples: Quiet sophistication, intentional restraint

<critical>🎉 PREMIUM PLUGIN MAPPING (ALL FREE in 3.13+!):</critical>
```
Need smooth scrolling? → ScrollSmoother (was $99/year → FREE!)
Icon state transitions? → MorphSVG (was $99/year → FREE!)
Text choreography? → SplitText (was $99/year → FREE!)
SVG line animations? → DrawSVG (was $99/year → FREE!)
Custom motion paths? → MotionPath (was $99/year → FREE!)

COMBINE multiple premium plugins for maximum wow factor!
Example: ScrollSmoother + SplitText = Scroll-driven text parallax
```

**4. Narrative Structure Planning**

<action>Apply Deep-Research Section 1.3 (Storyboarding) to animation concepts:</action>

**Pixar Story Spine Framework:**
- **Once upon a time...** (What's the initial state?)
- **Every day...** (What's normal/expected?)
- **Until one day...** (What changes? User scrolls? Hovers? Clicks?)
- **Because of that...** (What animates? What reveals?)
- **Until finally...** (What's the resolution/CTA?)

**Timeline Structure Planning (Deep-Research 2.2):**
- Break into sequences and shots
- Plan stagger patterns (sequential? random? grid-based?)
- Design label-based timeline for maintainability
- Coordinate multiple elements for cohesive story

**5. Constraint Integration**

<action>Apply practical constraints to concept generation:</action>
- **Performance budget** → Simpler or GPU-optimized (Section 5.1-5.5)
- **Timeline pressure** → Proven patterns (Archon verified) vs experimental
- **Accessibility** → Reduced-motion alternatives (Section 6.1 MANDATORY)
- **Device support** → Mobile-first or desktop-enhanced?

**6. Concept Theme Synthesis**

<action>Synthesize all findings into 3-5 distinct concept themes:</action>

For each theme, document:
- **Pattern sources** (Archon source_id, WebSearch URLs)
- **Deep-Research sections** applied (1.1, 1.2, 1.3, 2.2, etc.)
- **Easing specifications** (exact curve names from brand mapping)
- **Premium plugins** leveraged (FREE in 3.13+!)
- **Narrative structure** (Pixar Story Spine beats)
- **Technical approach** (timeline, ScrollTrigger, physics, etc.)

<template-output>
trend_analysis,
technical_feasibility,
brand_motion_mapping_with_easing,
narrative_structure_outline,
deep_research_frameworks_applied
</template-output>
</step>

<step n="4" goal="Concept Generation">
<critical>Generate 3-5 DISTINCT premium concepts</critical>

<action>Director creates concepts based on research synthesis</action>

**For EACH concept, provide:**

1. **Name** - Evocative, memorable title (e.g., "Cinematic Depth Parallax")
2. **Visual Description** - How it looks and feels (sensory language, cinematic references)
3. **Technical Approach** - GSAP features/plugins required, implementation strategy
4. **Wow Factor** - What makes this premium/unique/memorable
5. **User Experience** - How users perceive and interact with it
6. **Complexity Level** - Simple / Medium / High (implementation effort)
7. **Performance Impact** - Expected FPS, bundle size considerations
8. **Inspiration Sources** - Real-world examples with citations from research
9. **Best Suited For** - When this concept shines vs when to avoid it
10. **Accessibility Notes** - How to maintain usability (prefers-reduced-motion support)

**Concept Diversity Guidelines:**
- Mix complexity levels (at least one Medium, one Medium-High or High)
- Different technical approaches (timeline, ScrollTrigger, physics, morphing, etc.)
- Variety in visual styles (subtle, dramatic, playful, cinematic)
- At least one concept should be cutting-edge (2024-2025 trends)

<example>
**Concept 1: "Cinematic Depth Parallax"**
- Multi-layer parallax with dramatic depth of field effect
- Background elements move at different speeds creating 3D illusion
- Text reveals with custom bezier easing that feels organic
- GSAP: ScrollTrigger + timeline coordination + custom easing
- Wow Factor: Feels like a movie title sequence
- Inspiration: Apple product launches 2024, Awwwards winners
- Complexity: Medium-High
- Performance: 60fps achievable with GPU acceleration
- Accessibility: Reduced motion shows static layout with fade-ins
</example>

<template-output>concept_1, concept_2, concept_3, concept_4, concept_5</template-output>
</step>

<step n="5" goal="Presentation">
<action>Present concepts in decision-friendly format</action>

**Director presents with film director energy:**

🎬 **"I've researched premium [component_context] animations. Here are [N] stunning options:"**

[Present each concept with all 10 attributes clearly formatted]

**Highlight tradeoffs:**
- Performance vs complexity
- Wow factor vs implementation time
- Cutting-edge vs proven patterns
- Bold vs subtle approaches

<ask>Which direction excites you? Want me to explore other angles?</ask>

<action>Capture user's selection or request for variations</action>

<template-output>concept_presentation, user_selection</template-output>
</step>

<step n="6" goal="Selection & Handoff">
<check if="user_selects_concept">
<action>Confirm selection and prepare for implementation</action>

**"Excellent choice! [concept_name] will create genuine wow factor."**

<action>Capture selection rationale - why user chose this concept:</action>
- What resonated most (visual appeal, technical feasibility, wow factor)
- How it aligns with their brand personality and goals
- Any specific aspects they're excited about

<template-output>selection_rationale</template-output>

<action>Define next steps for user:</action>
1. **Implement now** - Invoke animation-production workflow with selected concept
2. **Refine concept** - Adjust technical approach or visual details
3. **Save for later** - Document concept for future implementation

<template-output>next_step_1, next_step_2, next_step_3</template-output>

<action>Extract technical implementation details from selected concept:</action>
- Timeline structure and sequence planning
- ScrollTrigger configuration requirements
- Easing curve specifications
- Stagger patterns and choreography
- Label-based timeline organization

<template-output>selected_concept_technical_details</template-output>

<action>List required GSAP features from selected concept:</action>
- Core GSAP features (gsap.to, gsap.from, timeline, etc.)
- ScrollTrigger requirements
- Observer/Flip requirements (if applicable)
- Custom easing functions needed

<template-output>required_gsap_features</template-output>

<action>List required plugins (emphasize ALL are FREE in 3.13+!):</action>
- ScrollSmoother (if smooth scrolling needed)
- MorphSVG (if icon/shape transitions)
- SplitText (if text choreography)
- DrawSVG (if line reveals)
- MotionPath (if custom trajectories)
- Note: All premium plugins now FREE in GSAP 3.13+!

<template-output>required_plugins</template-output>

<action>Document performance considerations:</action>
- Expected FPS (should be 60fps)
- GPU-accelerated properties used
- Bundle size impact of plugins
- Optimization strategies for target devices
- Reduced-motion fallback approach

<template-output>performance_notes</template-output>

<action>Compile inspiration sources from research:</action>
- Archon MCP sources (with source_ids)
- WebSearch premium examples (URLs)
- Deep-Research framework sections applied
- Agency examples referenced
- CodePen/Codrops links

<template-output>inspiration_sources</template-output>

<check if="user_requests_variations">
<action>Generate 2-3 variations of selected concept</action>
<action>Adjust technical approach, complexity, or visual style</action>
<action>Present variations and get final selection</action>
</check>

<check if="user_wants_different_concepts">
<action>Ask what aspects to change (style, complexity, technical approach)</action>
<goto step="4">Regenerate concepts with new direction</goto>
</check>

<action>If implementing: Pass FULL research context to VFX Artist</action>
<action>Cinematographer's findings become implementation blueprint</action>

<template-output>final_selection, handoff_context</template-output>
</check>
</step>

</workflow>

## MCP Tool Usage Notes

**Parallel Execution:**
- Perplexity, Archon, and Context7 searches can run simultaneously
- Maximize research speed by parallel MCP calls

**Error Handling:**
- If MCP unavailable: Warn user, continue with available sources
- Single retry on timeout, then graceful degradation
- Document which sources were used in final output

**Query Optimization:**
- Keep queries SHORT (2-5 keywords)
- Focus on technical terms and specific features
- Avoid long sentences

## Quality Standards

**Concept Quality:**
- Each concept must be AMBITIOUS, not safe
- Clear wow factor articulated
- Backed by research citations (Archon source_id + WebSearch URLs + Deep-Research sections)
- Technically feasible with GSAP 3.13.0+
- Premium plugins leveraged (they're FREE!)

**Research Quality (TIER 1/2/3 HIERARCHY MANDATORY):**
- **TIER 1 PRIMARY:** Archon MCP (5 sources) + Deep-Research frameworks ALWAYS queried first
- **TIER 2 GAP FILLING:** WebSearch for 2024-2025 trends not in Archon
- **TIER 3 MINIMAL:** Context7 only for API verification if needed
- Prioritize battle-tested patterns (Archon verified) over experimental
- Beyond basic tutorials - find premium agency patterns
- **Citation Format Required:**
  ```
  Sources:
  - Archon: [pattern_name] (source: [source_id])
  - Deep-Research: Section [X.X] ([principle_name])
  - WebSearch: [agency/brand] [year]
  ```

**Deep-Research Framework Application:**
- Section 1.1: Animator's Mindset (storytelling approach)
- Section 1.2: Visual Translation (brand → motion design mapping)
- Section 1.3: Storyboarding (Pixar Story Spine narrative structure)
- Section 2.2: Timeline Techniques (choreography planning)
- Document which sections guided each concept

**Presentation Quality:**
- Decision-friendly format
- Clear tradeoffs explained (performance vs wow factor, proven vs cutting-edge)
- Professional yet engaging tone (film director energy)
- Every concept includes easing specifications from brand mapping

## Success Metrics

- ✅ 80%+ user selects a concept (not requests restart)
- ✅ Concepts feel premium, not generic
- ✅ Research citations provided
- ✅ Mix of complexity levels
- ✅ Technical approaches are ambitious

## Integration

**Feeds Into:**
- `animation-production` - Full pipeline with selected concept as vision
- `implement-from-pattern` - If concept matches existing pattern
- Pattern library - Successful implementations added as patterns

**Context Passed Forward:**
- Selected concept (all 10 attributes)
- Research findings (Perplexity + Archon + Context7)
- User constraints and brand personality
- Inspiration sources for reference
