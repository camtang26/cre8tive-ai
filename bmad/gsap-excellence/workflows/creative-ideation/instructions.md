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

<step n="2" goal="Multi-Source Research">
<critical>This is where we leverage THREE MCP servers for comprehensive research</critical>

<action>Execute multi-source research using MCP integrations</action>

**Research Protocol (Execute in parallel where possible):**

**1. Perplexity Research (Premium Examples)**
<action>Use perplexity_research tool with these queries:</action>
- "award-winning {{component_context}} animations 2024-2025 Awwwards FWA"
- "cutting-edge GSAP animation techniques 2025"
- "premium web animation trends design studios"
- "interactive animation examples {{industry_if_known}}"

**2. Archon MCP (GSAP Technical Knowledge)**
<action>Use rag_search_knowledge_base and rag_search_code_examples:</action>
- Search for GSAP showcase examples related to {{component_context}}
- Find advanced GSAP technique documentation
- Discover plugin ecosystem capabilities (ScrollTrigger, MorphSVG, SplitText)
- Locate performance best practices

**3. Context7 (Latest GSAP APIs)**
<action>Use get-library-docs:</action>
- Fetch latest GSAP version capabilities
- Identify new plugins and features in current release
- Check API compatibility and requirements

<critical>Document ALL sources with citations (URLs, examples, agencies)</critical>

<template-output>perplexity_findings, archon_patterns, context7_api_info, research_citations</template-output>
</step>

<step n="3" goal="Trend Analysis & Synthesis">
<action>Analyze research findings to identify patterns</action>

**Analysis approach:**

1. **Identify cutting-edge vs overdone**
   - What's fresh and exciting in 2025?
   - What's become cliché or tired?
   - What fits the brand personality?

2. **Assess technical feasibility**
   - Can current GSAP version achieve this?
   - What plugins are required?
   - Performance implications for 60fps target?

3. **Map to brand personality**
   - Playful → physics, bouncy easing
   - Professional → smooth, controlled, precise
   - Edgy → unexpected, bold, dramatic
   - Minimal → subtle, elegant, refined

4. **Consider constraints**
   - Performance budget → simpler or optimized
   - Timeline → proven patterns vs experimental
   - Accessibility → reduced-motion alternatives

<action>Synthesize findings into concept themes</action>

<template-output>trend_analysis, technical_feasibility, brand_mapping</template-output>
</step>

<step n="4" goal="Concept Generation">
<critical>Generate 3-5 DISTINCT premium concepts</critical>

<action>Create concepts based on research synthesis</action>

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
<action>Present concepts in decision-friendly format with film director energy</action>

🎬 **"I've researched premium {{component_context}} animations. Here are [N] stunning options:"**

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

<action>Offer next steps:</action>
1. **Implement now** - Invoke animation-production workflow with selected concept
2. **Refine concept** - Adjust technical approach or visual details
3. **Save for later** - Document concept for future implementation

<check if="user_requests_variations">
<action>Generate 2-3 variations of selected concept</action>
<action>Adjust technical approach, complexity, or visual style</action>
<action>Present variations and get final selection</action>
</check>

<check if="user_wants_different_concepts">
<action>Ask what aspects to change (style, complexity, technical approach)</action>
<goto step="4">Regenerate concepts with new direction</goto>
</check>

<action>If user wants to implement: Guide them to run /gsap-vfx with the research context</action>
<action>Research findings should be shared with VFX Artist for implementation</action>

<template-output>final_selection, handoff_context</template-output>
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
- Backed by research citations
- Technically feasible with current GSAP

**Research Quality:**
- Multiple sources consulted (all 3 MCPs minimum)
- Prioritize 2024-2025 examples
- Beyond basic tutorials - find premium patterns
- Cite sources with URLs

**Presentation Quality:**
- Decision-friendly format
- Clear tradeoffs explained
- Professional yet engaging tone
- Film director energy throughout

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
