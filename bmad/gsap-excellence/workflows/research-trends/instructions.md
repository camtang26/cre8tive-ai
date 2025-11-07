# GSAP Animation Trends Research Workflow
# Visual Cinematography - 2024-2025 Trend Discovery

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/research-trends/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Trend Research Focus">
<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Cinematographer greets {user_name} and introduces the trends research workflow with industry awareness</action>

🎥 **GSAP Animation Trends Research (2024-2025)**

**"{user_name}, I'll research the latest premium animation trends from Awwwards, industry leaders, and cutting-edge implementations."**

**Please specify research focus:**

<ask response="trend_focus">**Trend Focus (optional):**
What aspect of animation trends are you most interested in?
- All trends (comprehensive overview)
- Scroll-driven animations (ScrollTrigger patterns)
- Text animations (SplitText, character reveals)
- 3D scroll effects (depth, parallax, perspective)
- Micro-interactions (button hovers, form feedback)
- Page transitions (route changes, view switching)
- Physics-based motion (spring, bounce, inertia)
- SVG animations (morphing, path drawing)
- Specific industry (e-commerce, SaaS, portfolio, agency, etc.)
- Other (describe focus)</ask>

<ask response="context">**Context (optional):**
Any specific context for this research?
- Upcoming project type
- Client industry
- Competitive analysis needs
- Learning/skill development
- Staying current with industry</ask>

<action>Confirm understanding and preview the research approach</action>

*"Excellent. I'll research current 2024-2025 animation trends using WebSearch as the primary source (for cutting-edge patterns) and Archon KB for established pattern context..."*

<template-output>trend_focus, context</template-output>
</step>

<step n="2" goal="Multi-Source Research - Trend Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to Step 3 until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<action>🚨 MANDATORY RESEARCH PROTOCOL - You MUST complete ALL phases below before proceeding</action>
<action>This step is BLOCKING - you cannot skip to trend analysis without completing research and receiving approval</action>

<action>Based on trend research request:
  - Trend Focus: {{trend_focus}}
  - Context: {{context}}

  You MUST execute the complete research protocol below BEFORE proceeding to trend analysis.

  **NOTE:** This workflow uses **WebSearch as PRIMARY** (trends are current, not in historical docs).</action>

  <!-- TIER 1: WebSearch - 2024-2025 Cutting-Edge Trends (PRIMARY) -->
  <phase n="1" title="WebSearch 2024-2025 Trend Discovery (PRIMARY)" required="true">
    <action>Execute comprehensive WebSearch for current animation trends:

    **Search 1: GSAP Animation Trends 2025**
    WebSearch("GSAP animation trends 2025")
    → Find: Latest GSAP animation patterns
    → Document: What's trending in GSAP community

    **Search 2: Awwwards GSAP Winners 2024-2025**
    WebSearch("Awwwards GSAP animation winners 2024 2025")
    → Find: Award-winning GSAP implementations
    → Document: Premium patterns from top agencies

    **Search 3: Scroll Animation Trends 2025**
    WebSearch("scroll animation trends 2025 ScrollTrigger")
    → Find: Latest scroll-driven patterns
    → Document: 3D scroll, parallax, pin innovations

    **Search 4: Premium Animation Patterns 2024**
    WebSearch("premium web animation patterns 2024 GSAP")
    → Find: Current industry standards
    → Document: What top brands are doing

    **Search 5: GSAP Plugin Trends 2025 (if applicable)**
    {{#if_plugin_focus}}
    WebSearch("{{plugin_name}} animation trends 2025")
    → Find: Plugin-specific innovations
    → Document: New use cases, creative applications
    {{/if_plugin_focus}}

    **Search 6: Industry-Specific Trends (if applicable)**
    {{#if_industry_context}}
    WebSearch("{{industry}} animation trends 2024 GSAP")
    → Find: Industry-specific animation patterns
    → Document: How {{industry}} sites use GSAP
    {{/if_industry_context}}

    **Search 7: Design Systems & Animation**
    WebSearch("design system animation GSAP 2024")
    → Find: How modern design systems handle animation
    → Document: Systematic animation approaches

    **Search 8: Performance & Accessibility Trends**
    WebSearch("web animation performance accessibility 2025")
    → Find: Current best practices
    → Document: How premium sites balance motion & accessibility
    </action>

    <evidence required="true">
      **WEBSEARCH TREND FINDINGS (2024-2025):**
      Present comprehensive trend analysis across all searches:

      **Trending Animation Patterns:**
      - [Trend 1]: [Description, examples, adoption level]
      - [Trend 2]: [Description, examples, adoption level]
      - [Trend 3]: [Description, examples, adoption level]
      - [Continue for all discovered trends...]

      **Award-Winning Patterns (Awwwards):**
      - [URL]: [Pattern used] ([Agency/Brand])
      - [URL]: [Innovation identified] ([Agency/Brand])
      - [URL]: [Trend exemplified] ([Agency/Brand])

      **Scroll Animation Innovations:**
      - [Innovation 1]: [How it's used, who's using it]
      - [Innovation 2]: [Technical approach, examples]

      **Industry Standards Evolution:**
      - [What changed from 2023 → 2024]
      - [What's emerging for 2025]
      - [What's declining/outdated]

      **Plugin Trend Analysis (if applicable):**
      - [Plugin innovations identified]
      - [New creative applications]

      **Performance/Accessibility Trends:**
      - [Current best practices]
      - [How top sites balance motion & accessibility]

      **Synthesis:**
      - What are the TOP 5 trends for 2024-2025?
      - What's truly innovative vs. rehashed?
      - What's practical vs. experimental?
    </evidence>

    <validation>If results insufficient (<15 trend patterns), refine queries and search again</validation>
  </phase>

  <!-- TIER 2: Archon MCP - Established Pattern Context (SECONDARY) -->
  <phase n="2" title="Archon MCP Established Pattern Context (SECONDARY)" required="true">
    <action>Query Archon for established pattern context (to compare vs new trends):

    **Search 1: Established GSAP Patterns**
    rag_search_knowledge_base("GSAP animation patterns", source_id="b9f6b322298feb21", match_count=5)
    → Returns: Core established patterns
    → Document: What's been standard practice

    **Search 2: Awwwards Historical Patterns**
    rag_search_knowledge_base("premium animation patterns", source_id="d571ab8468f31305", match_count=5)
    → Returns: Historical premium patterns
    → Document: What's been award-winning in past

    **Search 3: Code Pattern Evolution**
    rag_search_code_examples("ScrollTrigger patterns", match_count=5)
    → Returns: Established code patterns
    → Document: How patterns have evolved

    **Purpose:** Use Archon to provide context for identifying what's *truly new* vs. rehashed patterns
    </action>

    <evidence required="true">
      **ARCHON ESTABLISHED PATTERNS:**

      **Core Established Patterns:**
      - [Pattern name]: [Been standard since when]
      - [Pattern name]: [Been standard since when]

      **Historical Award-Winning Patterns:**
      - [Pattern]: [When it was innovative, current status]

      **Pattern Evolution:**
      - [Pattern]: [How it's evolved over time]

      **New vs. Established Analysis:**
      - Which 2024-2025 trends are truly innovative?
      - Which are refinements of established patterns?
      - Which are rehashed/rebranded older patterns?
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <action>Present research findings in structured format:</action>
  <action>
      **🔍 RESEARCH COMPLETE - 2024-2025 Trend Findings**

      **TIER 1: WebSearch Trend Discovery (PRIMARY)**
      [Present 15-20 trend patterns with examples and URLs]

      **Top 5 Trends for 2024-2025:**
      1. [Trend name]: [Description, adoption, examples]
      2. [Trend name]: [Description, adoption, examples]
      3. [Trend name]: [Description, adoption, examples]
      4. [Trend name]: [Description, adoption, examples]
      5. [Trend name]: [Description, adoption, examples]

      **TIER 2: Archon Established Pattern Context (SECONDARY)**
      - **Truly Innovative:** [Which trends are genuinely new]
      - **Refined Patterns:** [Which are evolutions of established patterns]
      - **Rehashed:** [Which are rebranded older patterns]

      **SYNTHESIS - Trend Assessment:**
      - **What's Hot:** [Most adopted/trending patterns]
      - **What's Emerging:** [Early-stage innovations to watch]
      - **What's Declining:** [Patterns falling out of favor]
      - **What's Practical:** [Trends ready for production use]
      - **What's Experimental:** [Cutting-edge but risky]

      **CITATIONS:**
      [All WebSearch URLs, Archon sources]
  </action>

<ask response="research_approval">
🚨 RESEARCH CHECKPOINT

{user_name}, review the research findings above. They should be:
- ✅ Comprehensive (5-7 WebSearch queries + Archon validation)
- ✅ Current (2024-2025 sources)
- ✅ Relevant (addresses {{trend_focus}} in {{context}})
- ✅ Structured (Top 5 trends + synthesis)

Type 'continue' to proceed to trend analysis, 'redo' to research again, or 'skip' to bypass research:
</ask>

<check if="research_approval == 'redo'">
  <action>User requested re-research - returning to research protocol</action>
  <goto step="2">Returning to research phase...</goto>
</check>

<check if="research_approval == 'skip'">
  <action>⚠️ User override: Skipping research (not recommended - trend analysis may be incomplete)</action>
</check>

<check if="research_approval == 'continue'">
  <action>✅ Research approved. Proceeding to trend analysis...</action>
</check>

<!-- ========== END RESEARCH GATE ========== -->

<template-output>
websearch_trends_discovered,
websearch_awwwards_winners,
websearch_scroll_innovations,
websearch_industry_standards,
archon_established_patterns,
archon_pattern_evolution,
new_vs_established_analysis,
trend_synthesis,
research_citations
</template-output>
</step>

<step n="3" goal="Trend Analysis & Categorization">
<action>Analyze and categorize discovered trends</action>

### 3.1: Categorize Trends by Type

**From research, categorize all trends:**

**Category A: Scroll-Driven Innovations**
{{scroll_driven_trends}}

**Category B: Text & Typography Animations**
{{text_typography_trends}}

**Category C: 3D & Depth Effects**
{{3d_depth_trends}}

**Category D: Micro-Interactions & Feedback**
{{micro_interaction_trends}}

**Category E: Transitions & State Changes**
{{transition_trends}}

**Category F: Physics & Natural Motion**
{{physics_motion_trends}}

**Category G: SVG & Morphing**
{{svg_morphing_trends}}

**Category H: Performance & Accessibility**
{{performance_accessibility_trends}}

### 3.2: Assess Adoption Level

**For each trend, assess:**

- **Widespread:** Seen across many sites, becoming standard
- **Growing:** Early adopters, gaining traction
- **Emerging:** Experimental, few examples but promising
- **Niche:** Limited to specific use cases/industries
- **Declining:** Was trendy, now fading

### 3.3: Evaluate Practicality

**For each trend, assess:**

- **Production-Ready:** Proven, well-supported, safe to use
- **Experimental:** Cutting-edge, may have issues
- **Browser Support:** Works everywhere vs. requires modern browsers
- **Performance:** Lightweight vs. heavy
- **Complexity:** Easy to implement vs. requires expertise

### 3.4: Identify Innovation Level

**From Archon comparison:**

- **Truly Innovative:** New concept, never seen before
- **Refined Evolution:** Improvement on established pattern
- **Rehashed:** Rebranded older pattern
- **Standard Practice:** No longer a "trend", now baseline

<template-output>
categorized_trends,
adoption_assessment,
practicality_evaluation,
innovation_analysis
</template-output>
</step>

<step n="4" goal="Generate Trends Report">
<action>Create comprehensive trends report using template.md structure</action>

**Report Should Include:**

1. **Executive Summary**
   - Top 5 trends for 2024-2025
   - Key takeaways
   - Recommended actions

2. **Trend Categories**
   - All trends organized by category
   - Examples for each
   - Adoption level, practicality, innovation

3. **Award-Winning Examples**
   - Awwwards winners analyzed
   - What makes them award-worthy
   - Patterns to adapt

4. **Industry Analysis**
   - How different industries use GSAP
   - Industry-specific trends

5. **Technical Deep-Dives**
   - Code examples for key trends
   - Implementation guidance
   - Plugin usage patterns

6. **Recommendations**
   - What to adopt now
   - What to watch
   - What to avoid

7. **Research Citations**
   - All WebSearch URLs
   - Archon sources
   - Date-stamped for currency

**Save report to:** `{output_folder}/animation-trends-{timestamp}.md`

**Present final report with industry insight:**

*"That's a wrap on trends research! You now have a comprehensive view of 2024-2025 animation trends, backed by WebSearch discovery and Archon pattern context..."*

<template-output>
executive_summary,
trend_categories_complete,
award_winning_examples,
industry_analysis,
technical_deep_dives,
recommendations,
research_citations_dated
</template-output>
</step>

</workflow>

---

## Research Strategy Philosophy

*"Trends live at the bleeding edge. WebSearch captures what's happening NOW. Archon provides the context to understand what's truly innovative vs. rehashed."*

**Research Structure:** WebSearch PRIMARY (current trends) → Archon SECONDARY (historical context)

---

## Completion Checklist

Before marking workflow complete, verify:

- ✅ ALL WebSearch queries executed (8+ searches for comprehensive coverage)
- ✅ Archon queries executed (for established pattern context)
- ✅ Trends categorized by type
- ✅ Adoption levels assessed (widespread → emerging → declining)
- ✅ Practicality evaluated (production-ready vs. experimental)
- ✅ Innovation level identified (truly new vs. refined vs. rehashed)
- ✅ Top 5 trends clearly identified
- ✅ Award-winning examples analyzed
- ✅ Code examples provided for key trends
- ✅ Recommendations actionable
- ✅ All URLs date-stamped (for currency tracking)

**Workflow complete when ALL boxes checked.**
