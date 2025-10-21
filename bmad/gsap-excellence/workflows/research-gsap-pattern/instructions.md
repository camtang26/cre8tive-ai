# Research GSAP Pattern Workflow Instructions
# Deep dive research into specific GSAP technique

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/research-gsap-pattern/workflow.yaml</critical>

<workflow>

<step n="1" goal="Define Research Scope">
<action>Greet {user_name} in {communication_language}</action>
<action>All written outputs must use {communication_language}</action>
<action>Introduce the research workflow with cinematographer precision</action>

**"Let's dive deep into GSAP technique research. I'll find you the best patterns and examples."**

<ask response="pattern_name">What GSAP technique or pattern should I research? (e.g., 'parallax scrolling', 'text reveal animations', 'SVG morphing', 'timeline sequencing')</ask>
<ask response="use_case">What's your specific use case or context? (Optional - helps focus research)</ask>
<ask response="complexity_preference">Complexity preference? [simple/medium/advanced/all]</ask>

<action>Confirm understanding and formulate research queries</action>

**Research Focus:**
- Pattern: {{pattern_name}}
- Context: {{use_case}}
- Complexity: {{complexity_preference}}

<template-output>pattern_name, use_case, complexity_preference</template-output>
</step>

<step n="2" goal="Multi-Source Research Execution">
<critical>Execute research across ALL THREE MCP sources in parallel</critical>

<action>Cinematographer conducts comprehensive multi-source research</action>

**"Researching {{pattern_name}} across my sources. This will take a few minutes..."**

**Research Protocol (Execute in parallel where possible):**

**1. Archon MCP (GSAP Technical Documentation)**
<action>Use rag_search_knowledge_base:</action>
- Query: "{{pattern_name}} GSAP"
- Query: "{{pattern_name}} implementation patterns"
- Query: "{{pattern_name}} best practices"
<action>Use rag_search_code_examples:</action>
- Query: "{{pattern_name}} code examples"
- Query: "{{pattern_name}} {{use_case}}"
<action>Use rag_get_available_sources to verify GSAP docs coverage</action>

**2. Context7 (Latest GSAP APIs)**
<action>Use resolve-library-id to find GSAP library</action>
<action>Use get-library-docs to fetch latest API documentation:</action>
- Focus on: Features related to {{pattern_name}}
- Check: Plugin requirements (ScrollTrigger, MorphSVG, SplitText, etc.)
- Verify: API compatibility with current GSAP version
- Identify: New features in latest release relevant to pattern

**3. Perplexity Research (Premium Examples)**
<action>Use perplexity_research:</action>
- Query: "{{pattern_name}} GSAP premium examples 2024-2025"
- Query: "best {{pattern_name}} animations Awwwards FWA"
- Query: "{{pattern_name}} GSAP tutorial advanced"
<action>Use perplexity_ask for quick clarifications if needed</action>

<critical>Document ALL findings with full citations</critical>

<template-output>archon_findings, context7_api_info, perplexity_examples, all_citations</template-output>
</step>

<step n="3" goal="Synthesize Technical Approach">
<action>Analyze research findings and synthesize technical approach</action>

**Analysis Framework:**

1. **Core Technique Overview**
   <action>Document what {{pattern_name}} is technically</action>
   - Pattern description: {{pattern_description}}
   - How GSAP enables this: {{gsap_enablement}}
   - Why this pattern is effective: {{pattern_effectiveness}}

2. **Implementation Approaches** (3 levels)

   **Basic Approach (Simple Complexity):**
   - When to use: {{basic_when_to_use}}
   - Technical strategy: {{basic_technical_strategy}}
   - GSAP features: {{basic_gsap_features}}
   - Code example: {{basic_code_example}}
   - Performance: {{basic_performance}}

   **Intermediate Approach (Medium Complexity):**
   - When to use: {{intermediate_when_to_use}}
   - Technical strategy: {{intermediate_technical_strategy}}
   - GSAP features: {{intermediate_gsap_features}}
   - Code example: {{intermediate_code_example}}
   - Performance: {{intermediate_performance}}

   **Advanced Approach (High Complexity):**
   - When to use: {{advanced_when_to_use}}
   - Technical strategy: {{advanced_technical_strategy}}
   - GSAP features: {{advanced_gsap_features}}
   - Code example: {{advanced_code_example}}
   - Performance: {{advanced_performance}}

3. **Common Variations**
   <action>Document pattern variations found in research</action>
   - Variations in the wild: {{variations}}
   - Trending implementations: {{trending_implementations}}
   - Award-winning examples: {{awwwards_examples}}

4. **Technical Requirements**
   - GSAP version minimum: {{gsap_version_minimum}}
   - Required plugins: {{required_plugins}}
   - Complexity range: {{complexity_range}} (e.g., "Simple to Advanced")
   - Performance summary: {{performance_summary}}
   - Browser support summary: {{browser_support_summary}}
   - Bundle size impact: {{bundle_size_impact}}
   - Optional enhancements: {{optional_enhancements}}

<template-output>technical_overview, pattern_description, gsap_enablement, pattern_effectiveness, basic_when_to_use, basic_technical_strategy, basic_gsap_features, basic_code_example, basic_performance, intermediate_when_to_use, intermediate_technical_strategy, intermediate_gsap_features, intermediate_code_example, intermediate_performance, advanced_when_to_use, advanced_technical_strategy, advanced_gsap_features, advanced_code_example, advanced_performance, variations, trending_implementations, awwwards_examples, gsap_version_minimum, required_plugins, complexity_range, performance_summary, browser_support_summary, bundle_size_impact, optional_enhancements</template-output>
</step>

<step n="4" goal="Extract Code Examples">
<critical>Provide 3-5 annotated code examples from basic to advanced</critical>

<action>Extract and annotate code examples from research</action>

**For EACH code example, provide 8 attributes:**

1. **Example Title** - Descriptive name (e.g., "Basic Parallax Scroll")
2. **Complexity Level** - Simple / Medium / Advanced
3. **Description** - What this example demonstrates
4. **Code** - Clean, well-formatted code with inline comments
5. **Key Features** - GSAP features highlighted
6. **Performance Notes** - FPS expectations, optimization tips
7. **Browser Support** - Compatibility notes
8. **Source** - Citation from research (Archon, Context7, Perplexity)

<action>Ensure examples cover range from simple to advanced</action>
<action>Annotate WHY certain choices are made (easing, duration, properties)</action>

**Example 1 (typically Simple):**
- Title: {{example_1_title}}
- Complexity: {{example_1_complexity}}
- Source: {{example_1_source}}
- Description: {{example_1_description}}
- Code: {{example_1_code}}
- Key Features: {{example_1_key_features}}
- Performance: {{example_1_performance}}
- Browser Support: {{example_1_browser_support}}

**Example 2 (typically Simple-Medium):**
- Title: {{example_2_title}}
- Complexity: {{example_2_complexity}}
- Source: {{example_2_source}}
- Description: {{example_2_description}}
- Code: {{example_2_code}}
- Key Features: {{example_2_key_features}}
- Performance: {{example_2_performance}}
- Browser Support: {{example_2_browser_support}}

**Example 3 (typically Medium):**
- Title: {{example_3_title}}
- Complexity: {{example_3_complexity}}
- Source: {{example_3_source}}
- Description: {{example_3_description}}
- Code: {{example_3_code}}
- Key Features: {{example_3_key_features}}
- Performance: {{example_3_performance}}
- Browser Support: {{example_3_browser_support}}

<check if="complexity_preference includes 'advanced' or 'all'">
**Example 4 (Medium-High):**
- Title: {{example_4_title}}
- Complexity: {{example_4_complexity}}
- Source: {{example_4_source}}
- Description: {{example_4_description}}
- Code: {{example_4_code}}
- Key Features: {{example_4_key_features}}
- Performance: {{example_4_performance}}
- Browser Support: {{example_4_browser_support}}

**Example 5 (High):**
- Title: {{example_5_title}}
- Complexity: {{example_5_complexity}}
- Source: {{example_5_source}}
- Description: {{example_5_description}}
- Code: {{example_5_code}}
- Key Features: {{example_5_key_features}}
- Performance: {{example_5_performance}}
- Browser Support: {{example_5_browser_support}}
</check>

<action>Calculate example_count for summary (3-5 depending on complexity preference)</action>

<template-output>example_1_title, example_1_complexity, example_1_source, example_1_description, example_1_code, example_1_key_features, example_1_performance, example_1_browser_support, example_2_title, example_2_complexity, example_2_source, example_2_description, example_2_code, example_2_key_features, example_2_performance, example_2_browser_support, example_3_title, example_3_complexity, example_3_source, example_3_description, example_3_code, example_3_key_features, example_3_performance, example_3_browser_support, example_4_title, example_4_complexity, example_4_source, example_4_description, example_4_code, example_4_key_features, example_4_performance, example_4_browser_support, example_5_title, example_5_complexity, example_5_source, example_5_description, example_5_code, example_5_key_features, example_5_performance, example_5_browser_support, example_count</template-output>
</step>

<step n="5" goal="Document Best Practices">
<action>Compile best practices and gotchas from research</action>

**Best Practices for {{pattern_name}}:**

**Performance Optimization:**
- GPU acceleration strategies: {{best_practices_performance_gpu}}
- Avoiding layout thrashing: {{best_practices_performance_layout}}
- 60fps achievement: {{best_practices_performance_60fps}}
- Bundle size considerations: {{best_practices_performance_bundle}}

**Code Quality:**
- Clean code patterns: {{best_practices_code_patterns}}
- Proper cleanup (kill animations on unmount): {{best_practices_code_cleanup}}
- TypeScript typing: {{best_practices_code_typescript}}
- Error handling: {{best_practices_code_errors}}

**Accessibility:**
- prefers-reduced-motion support: {{best_practices_accessibility_reduced_motion}}
- Keyboard accessibility: {{best_practices_accessibility_keyboard}}
- Focus management: {{best_practices_accessibility_focus}}
- Screen reader support: {{best_practices_accessibility_screen_reader}}

**Common Pitfalls:**
- Anti-patterns to avoid: {{common_pitfalls}}
- Edge cases to handle: {{edge_cases}}

**Browser Compatibility:**
- Chrome/Edge: {{browser_compatibility_chrome}}
- Firefox: {{browser_compatibility_firefox}}
- Safari: {{browser_compatibility_safari}}
- Mobile browsers: {{browser_compatibility_mobile}}
- Known issues: {{browser_compatibility_issues}}
- Fallback strategies: {{browser_compatibility_fallbacks}}

<template-output>best_practices_performance_gpu, best_practices_performance_layout, best_practices_performance_60fps, best_practices_performance_bundle, best_practices_code_patterns, best_practices_code_cleanup, best_practices_code_typescript, best_practices_code_errors, best_practices_accessibility_reduced_motion, best_practices_accessibility_keyboard, best_practices_accessibility_focus, best_practices_accessibility_screen_reader, common_pitfalls, edge_cases, browser_compatibility_chrome, browser_compatibility_firefox, browser_compatibility_safari, browser_compatibility_mobile, browser_compatibility_issues, browser_compatibility_fallbacks</template-output>
</step>

<step n="6" goal="Identify Premium Inspiration">
<action>Curate premium examples and inspiration from research</action>

**Premium Examples (From Perplexity Research):**

For each premium example:
- **Site/Agency Name**
- **URL** (if available)
- **What makes it premium** - Why this stands out
- **Technical approach** - How they achieved it
- **Takeaways** - What to learn from this example

<action>Focus on 2024-2025 examples showing cutting-edge usage</action>
<action>Include Awwwards/FWA winners if found</action>
<action>Cite design studios known for GSAP excellence</action>
<action>Count total premium examples found</action>
<action>Compile list of premium example URLs for Additional Resources section</action>

<template-output>premium_examples, premium_example_count, premium_example_links, inspiration_sources</template-output>
</step>

<step n="7" goal="Assess Pattern Library Fit">
<action>Evaluate if this pattern should be added to pattern library</action>

**Pattern Library Assessment:**

**Reusability Score:** {{reusability_score}}/10
- How often would this pattern be used?
- Is it broadly applicable or niche?

**Implementation Complexity:** {{implementation_complexity}} [Simple/Medium/High]
- How difficult to implement?
- How much customization needed per use?

**Documentation Quality:** {{documentation_quality}}/10
- Do we have enough information to create a reusable pattern?
- Are code examples production-ready?

**Recommendation:** {{library_recommendation}}
- [ ] Add to pattern library (high reusability + good docs)
- [ ] Document for reference (medium reusability)
- [ ] Keep as research only (low reusability or incomplete)

**Rationale:** {{library_rationale}}

<action if="add_to_pattern_library">Note: Pattern will be added after successful implementation</action>

<template-output>reusability_score, implementation_complexity, documentation_quality, library_recommendation, library_rationale</template-output>
</step>

<step n="8" goal="Present Research Report">
<action>Compile all findings into comprehensive research report</action>

**"Research complete. Here's everything you need to know about {{pattern_name}}."**

<action>Get current date for documentation</action>
<action>Compile GSAP documentation links relevant to this pattern</action>
<action>Identify related patterns from pattern library</action>
<action>Define next steps for user</action>

<action>Generate final research report using template.md</action>
<action>Save to output file: {{default_output_file}}</action>
<action>Present summary to user</action>

**Research Summary:**
- ✅ Sources consulted: Archon + Context7 + Perplexity
- ✅ Code examples: {{example_count}}
- ✅ Premium inspiration: {{premium_example_count}}
- ✅ Latest GSAP version compatibility: {{gsap_version_minimum}}
- ✅ Required plugins: {{required_plugins}}

**Next Steps:**
{{next_steps}}

**Related Resources:**
- GSAP Docs: {{gsap_docs_links}}
- Premium Examples: {{premium_example_links}}
- Related Patterns: {{related_patterns}}

<ask>Would you like me to:
1. Implement this pattern now (invoke implement-from-pattern workflow)
2. Generate variations or explore related patterns
3. Add successful implementation to pattern library later
4. Done - save report for reference</ask>

<template-output>final_research_report, next_action, date, next_steps, gsap_docs_links, related_patterns</template-output>
</step>

</workflow>

## MCP Tool Usage Notes

**Parallel Execution:**
- Archon, Context7, and Perplexity searches run simultaneously
- Maximize research speed by parallel MCP calls
- Wait for all sources before synthesis

**Error Handling:**
- If MCP unavailable: Warn user, continue with available sources
- Single retry on timeout, then proceed
- Document which sources were successfully used
- Minimum 2/3 sources required for quality research

**Query Optimization:**
- Keep queries SHORT and FOCUSED (2-5 keywords)
- Use technical GSAP terminology
- Include year "2024-2025" for Perplexity to get recent examples
- Avoid long sentences or questions

## Quality Standards

**Research Depth:**
- All 3 MCP sources consulted
- Minimum 3 code examples (preferably 5)
- At least 2 premium inspiration sources
- Latest GSAP API compatibility confirmed

**Code Quality:**
- Examples are clean, well-annotated, production-ready
- Comments explain WHY, not just WHAT
- Performance considerations noted
- Accessibility notes included

**Citation Standards:**
- All sources cited with URLs where available
- Premium examples credited to agencies/sites
- GSAP documentation versions noted
- Research date documented

## Success Metrics

- ✅ 100% coverage of all 3 MCP sources
- ✅ 3-5 code examples from basic to advanced
- ✅ Performance best practices documented
- ✅ Premium inspiration sources cited
- ✅ Latest API compatibility verified
- ✅ User confident in implementing pattern

## Integration

**Feeds Into:**
- `implement-from-pattern` - Research becomes implementation blueprint
- `creative-ideation` - Enriches concept generation knowledge
- Pattern library - Successful implementations added as reusable patterns
- VFX Artist knowledge - Implementation reference

**Context Passed Forward:**
- Complete research report
- Annotated code examples
- Performance guidelines
- Premium inspiration sources
- Plugin requirements
- Browser compatibility notes
