# Premium Example Discovery Workflow
# Visual Cinematography - CodePen/Awwwards Example Finding

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/find-examples/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Example Search Criteria">
<action>Introduce the example discovery workflow with curatorial expertise</action>

🎥 **Premium Example Discovery (KB + WebSearch Powered)**

I'll find premium GSAP examples from CodePen, Awwwards, and current implementations with quality analysis.

**Please specify search criteria:**

<ask response="motion_type">**Motion Type:**
What kind of animation examples are you looking for?
- Scroll-driven (ScrollTrigger, parallax, pin, scrub)
- Text animations (SplitText, character reveals, typing effects)
- SVG animations (morphing, path drawing, complex shapes)
- Page transitions (route changes, view switching, morphing layouts)
- Micro-interactions (buttons, forms, hover states)
- Timeline choreography (complex coordinated sequences)
- Physics-based (spring, bounce, draggable, inertia)
- 3D/depth effects (perspective, layering, depth scroll)
- Specific effect (describe what you want to see)</ask>

<ask response="quality_level">**Quality Level (optional):**
What quality level are you targeting?
- Any quality (cast wide net)
- Professional+ (well-executed, production-ready)
- Premium (exceptional execution, attention to detail)
- Award-winning only (Awwwards winners/nominees)
</ask>

<ask response="purpose">**Purpose (optional):**
What will you use these examples for?
- Learning/inspiration
- Client pitch/proposal
- Competitive analysis
- Code pattern study
- Design reference
- Team training</ask>

<ask response="constraints">**Constraints (optional):**
Any specific requirements?
- Framework (React, Vue, vanilla, etc.)
- Plugin usage (specific plugins you want to see)
- Complexity level (simple, moderate, expert)
- Browser support requirements</ask>

<action>Confirm understanding and preview the research approach</action>

*"Excellent. I'll search Archon's CodePen/Awwwards archives (672K+ words of examples) and current WebSearch for premium {{motion_type}} examples..."*

<template-output>motion_type, quality_level, purpose, constraints</template-output>
</step>

<step n="2" goal="Multi-Source Research - Example Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to Step 3 until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on example search request:
    - Motion Type: {{motion_type}}
    - Quality Level: {{quality_level}}
    - Purpose: {{purpose}}

    You MUST execute the complete research protocol below BEFORE proceeding to quality analysis.</mandate>

  <!-- TIER 1A: Archon MCP - CodePen/Awwwards Archive Search (PRIMARY) -->
  <phase n="1" title="Archon MCP Example Archive Search" required="true">
    <action>Search Archon's extensive example archives:

    **Search 1: CodePen GSAP Examples**
    rag_search_code_examples("{{motion_type}}", source_id="{archon_sources[0]}", match_count=10)
    → Returns: CodePen examples with code
    → Document: URLs, code snippets, patterns used

    **Search 2: Awwwards GSAP Sites**
    rag_search_knowledge_base("{{motion_type}} animation", source_id="{archon_sources[1]}", match_count=8)
    → Returns: Award-winning site examples
    → Document: URLs, agencies, award levels, patterns

    **Search 3: FreeFrontend Examples**
    rag_search_code_examples("{{motion_type}} GSAP", source_id="{archon_sources[2]}", match_count=8)
    → Returns: Real-world implementation examples
    → Document: Code patterns, approaches

    **Search 4: GSAP Official Demos**
    rag_search_code_examples("{{motion_type}}", source_id="{archon_sources[3]}", match_count=5)
    → Returns: Official GSAP demo examples
    → Document: Best practice implementations

    **Search 5: Codrops Tutorials**
    rag_search_code_examples("{{motion_type}} tutorial", source_id="{archon_sources[4]}", match_count=5)
    → Returns: Tutorial examples with explanations
    → Document: Step-by-step implementations

    **Combined Archive:** 672K (CodePen) + 919K (Awwwards) + 207K (FreeFrontend) + 229K (Demos) + 42K (Codrops) = 2M+ words
    </action>

    <evidence required="true">
      **ARCHON EXAMPLE ARCHIVE FINDINGS:**
      Present 20-30 examples discovered:

      **CodePen Examples:**
      - [URL]: [Pattern used] [Code snippet summary]
      - [URL]: [Pattern used] [Code snippet summary]
      - [Continue for all CodePen matches...]

      **Awwwards Sites:**
      - [URL]: [Site name] by [Agency] ([Award level])
      - [URL]: [Site name] by [Agency] ([Award level])
      - [Continue for all Awwwards matches...]

      **FreeFrontend Examples:**
      - [URL]: [Pattern description]
      - [URL]: [Pattern description]

      **GSAP Official Demos:**
      - [URL]: [Demo name and pattern]

      **Codrops Tutorials:**
      - [URL]: [Tutorial name and approach]

      **Initial Quality Assessment:**
      - How many are Award-winning level?
      - How many are Premium execution?
      - How many are Professional/Basic?
    </evidence>

    <validation>If results insufficient (<20 examples), refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: WebSearch - Current 2024-2025 Examples -->
  <phase n="2" title="WebSearch Current Examples (2024-2025)" required="true">
    <action>Search for current cutting-edge examples:

    **Search 1: Awwwards Current Winners**
    WebSearch("Awwwards GSAP {{motion_type}} 2024 2025")
    → Find: Recent award winners
    → Document: Current premium implementations

    **Search 2: CodePen Recent Popular**
    WebSearch("CodePen GSAP {{motion_type}} popular 2024")
    → Find: Trending CodePen examples
    → Document: Community favorites

    **Search 3: Agency Showcases**
    WebSearch("{{motion_type}} animation showcase 2024")
    → Find: Agency portfolio examples
    → Document: Premium executions

    Target: Find 10-15 current premium examples from these 3 search queries
    </action>

    <evidence required="true">
      **WEBSEARCH CURRENT EXAMPLES:**

      **Recent Awwwards Winners:**
      - [URL]: [Site/Agency] ([Award date])

      **Trending CodePens:**
      - [URL]: [Creator] ([Hearts/views])

      **Agency Showcases:**
      - [URL]: [Agency] ([Client])

      **Brand Implementations:**
      - [URL]: [Brand] ([Pattern])

      **Currency Check:**
      - Which examples are 2024-2025?
      - Which represent current best practices?
    </evidence>
  </phase>

  <!-- TIER 2: Deep-Research Quality Framework -->
  <phase n="3" title="Quality Assessment Framework (Section 1.4)" required="true">
    <action>Apply Decision Framework for quality assessment:

    **Framework: Section 1.4 - Decision Framework**
    Location: {deep_research_decision_framework}

    Apply quality assessment criteria:
    - **Technical Excellence:** Code quality, performance, best practices
    - **Visual Polish:** Attention to detail, smoothness, refinement
    - **Innovation:** Unique approach, creative problem-solving
    - **Practicality:** Production-ready, maintainable, accessible
    - **Impact:** Wow factor, emotional resonance

    **Quality Tiers:**
    - **Basic:** Functional but unremarkable
    - **Professional:** Well-executed, production-ready
    - **Premium:** Exceptional execution, polished
    - **Award-winning:** Industry-leading, innovative
    </action>

    <evidence required="true">
      **QUALITY ASSESSMENT FRAMEWORK APPLIED:**

      **Assessment Criteria (from Section 1.4):**
      - [Criteria from framework]

      **Quality Tier Definitions:**
      - **Award-winning:** [What qualifies]
      - **Premium:** [What qualifies]
      - **Professional:** [What qualifies]
      - **Basic:** [What qualifies]

      **Initial Tier Assignments:**
      - Award-winning: {{count}} examples
      - Premium: {{count}} examples
      - Professional: {{count}} examples
      - Basic: {{count}} examples
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Premium Example Findings**

      **TIER 1A: Archon Example Archives**
      [Present 20-30 examples from CodePen, Awwwards, FreeFrontend, Demos, Codrops]

      **TIER 1B: WebSearch Current Examples**
      [Present 10-15 current 2024-2025 examples]

      **TIER 2: Quality Assessment Framework**
      - **Award-winning:** [Count and list]
      - **Premium:** [Count and list]
      - **Professional:** [Count and list]
      - **Basic:** [Count and list]

      **SYNTHESIS - Example Curation:**
      - **Top 5 Award-Winning:** [Best of the best]
      - **Top 10 Premium:** [Exceptional execution]
      - **Top 10 Professional:** [Solid production examples]
      - **Code Study Picks:** [Best for learning from code]
      - **Visual Inspiration Picks:** [Best for visual reference]

      **CITATIONS:**
      [All Archon sources, WebSearch URLs, quality assessment notes]
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to example analysis.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

</step>

<step n="3" goal="Example Analysis - Pattern & Quality Deep-Dive">
<action>Analyze each curated example in detail</action>

### 3.1: Pattern Analysis

**For each example, document:**

- **Pattern Used:** What GSAP technique/pattern is demonstrated?
- **Plugins:** Which plugins are used (note FREE in 3.13+)
- **Complexity:** Simple, moderate, or expert-level?
- **Code Structure:** Timeline, tweens, ScrollTrigger, etc.
- **Key Techniques:** What makes the implementation work?

### 3.2: Quality Assessment

**Apply quality framework to each example:**

**Technical Excellence (1-5):**
- Code quality, performance, best practices
- Accessibility considerations
- Browser compatibility

**Visual Polish (1-5):**
- Smoothness, timing precision
- Attention to detail
- Refinement level

**Innovation (1-5):**
- Unique approach
- Creative problem-solving
- Novel technique

**Practicality (1-5):**
- Production-ready
- Maintainable code
- Reusable patterns

**Impact (1-5):**
- Wow factor
- Emotional resonance
- Memorability

**Total Score:** /25
**Quality Tier:** Award-winning (23-25) | Premium (20-22) | Professional (15-19) | Basic (10-14)

### 3.3: Implementation Notes

**For top examples, document:**

- **What to adapt:** Specific patterns worth studying
- **What to avoid:** Any anti-patterns or issues
- **Learning value:** What can be learned from this example
- **Code references:** Key code snippets to study

</step>

<step n="4" goal="Generate Premium Examples Report">
<action>Create comprehensive examples catalog using template.md structure</action>

**Report Should Include:**

1. **Executive Summary**
   - Total examples found
   - Quality distribution
   - Top 5 picks with rationale

2. **Award-Winning Examples**
   - Full analysis of each
   - Code patterns
   - Quality scores

3. **Premium Examples**
   - Detailed analysis
   - Pattern breakdowns

4. **Professional Examples**
   - Solid production references
   - Code study picks

5. **Pattern Library**
   - All patterns discovered
   - Organized by type

6. **Code Snippets**
   - Key techniques extracted
   - Ready to adapt

7. **Research Citations**
   - All URLs
   - Source attributions

**Save report to:** `{output_folder}/premium-examples-{timestamp}.md`

**Present final report with curatorial insight:**

*"That's a wrap on example discovery! You now have a curated collection of {{total_count}} premium GSAP examples, all with quality assessment and pattern analysis..."*

<action>Using the template.md structure as your guide, populate ALL template variables by interpreting the handlebars-style loops ({{#each_...}}) and generating complete content for each section:

- Executive Summary (total counts, quality distribution, top 5 picks)
- Award-Winning Examples (detailed analysis with scores, patterns, code)
- Premium Examples (analysis with patterns and code)
- Professional Examples (solid production references)
- Pattern Library (all unique patterns organized by type)
- Code Snippets (10-15 key techniques extracted and ready to adapt)
- Examples by Source (CodePen, Awwwards, FreeFrontend, Demos, Codrops, WebSearch)
- Examples by Complexity (Simple, Moderate, Expert)
- Examples by Use Case (Learning, Visual Inspiration, Client Pitches, Code Adaptation)
- Quality Assessment Framework (scoring criteria from Section 1.4)
- Research Citations (all Archon MCP sources and WebSearch URLs)
- Next Steps (recommended actions and study plan)
</action>

<action>Save the complete premium examples catalog to: {output_folder}/premium-examples-{timestamp}.md</action>
</step>

</workflow>

---

## Curatorial Philosophy

*"Quality over quantity. Every example is assessed against a framework, not gut feel. Award-winning examples earn that designation through measurable excellence."*

**Quality Framework:** Technical + Visual + Innovation + Practicality + Impact = Total Score

---

## Completion Checklist

Before marking workflow complete, verify:

- ✅ ALL Archon queries executed (5 sources: CodePen, Awwwards, FreeFrontend, Demos, Codrops)
- ✅ WebSearch queries executed (current 2024-2025 examples)
- ✅ Quality framework applied (Section 1.4)
- ✅ Each example scored (Technical + Visual + Innovation + Practicality + Impact)
- ✅ Quality tiers assigned (Award-winning/Premium/Professional/Basic)
- ✅ Pattern analysis complete for all examples
- ✅ Top 5 picks identified with rationale
- ✅ Code snippets extracted for key patterns
- ✅ Implementation notes documented
- ✅ All URLs cited with sources

**Workflow complete when ALL boxes checked.**
