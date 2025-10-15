# Research GSAP Pattern Workflow Instructions
# Deep dive research into specific GSAP technique

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/research-gsap-pattern/workflow.yaml</critical>

<workflow>

<step n="1" goal="Define Research Scope">
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
   - What is {{pattern_name}} technically?
   - How does GSAP enable this pattern?
   - What makes this pattern effective?

2. **Implementation Approaches**
   - Basic approach (simple complexity)
   - Intermediate approach (medium complexity)
   - Advanced approach (high complexity)
   - Which GSAP features/plugins for each?

3. **Common Variations**
   - What variations exist in the wild?
   - Different use cases requiring different approaches?
   - Trending vs. classic implementations?

4. **Technical Requirements**
   - GSAP version minimum
   - Required plugins
   - Browser compatibility
   - Performance considerations

<template-output>technical_overview, implementation_approaches, variations, requirements</template-output>
</step>

<step n="4" goal="Extract Code Examples">
<critical>Provide 3-5 annotated code examples from basic to advanced</critical>

<action>Extract and annotate code examples from research</action>

**For EACH code example, provide:**

1. **Example Title** - Descriptive name (e.g., "Basic Parallax Scroll")
2. **Complexity Level** - Simple / Medium / Advanced
3. **Description** - What this example demonstrates
4. **Code** - Clean, well-formatted code with inline comments
5. **Key Features** - GSAP features highlighted
6. **Performance Notes** - FPS expectations, optimization tips
7. **Browser Support** - Compatibility notes
8. **Source** - Citation from research (Archon, Context7, Perplexity)

**Example Structure:**
```javascript
// Example: {{example_title}} ({{complexity}})
// {{description}}
// Source: {{citation}}

gsap.to(element, {
  // Annotate each parameter
  duration: 1,
  x: 100,
  ease: "power2.out" // Explain easing choice
});
```

<action>Ensure examples cover range from simple to advanced</action>
<action>Annotate WHY certain choices are made (easing, duration, properties)</action>

<template-output>example_1, example_2, example_3, example_4, example_5</template-output>
</step>

<step n="5" goal="Document Best Practices">
<action>Compile best practices and gotchas from research</action>

**Best Practices for {{pattern_name}}:**

**Performance:**
- GPU acceleration strategies
- Will-change property usage
- Avoiding layout thrashing
- RequestAnimationFrame optimization
- 60fps achievement strategies

**Code Quality:**
- Clean code patterns
- Proper cleanup (kill animations on unmount)
- TypeScript typing if applicable
- Error handling

**Accessibility:**
- prefers-reduced-motion support
- Keyboard accessibility (if interactive)
- Focus management
- Screen reader considerations

**Common Pitfalls:**
- What mistakes do developers commonly make?
- Anti-patterns to avoid
- Edge cases to handle

**Browser Compatibility:**
- Cross-browser considerations
- Safari quirks
- Mobile-specific issues
- Fallbacks for unsupported features

<template-output>best_practices_performance, best_practices_code, best_practices_accessibility, common_pitfalls, browser_compatibility</template-output>
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

<template-output>premium_examples, inspiration_sources</template-output>
</step>

<step n="7" goal="Assess Pattern Library Fit">
<action>Evaluate if this pattern should be added to pattern library</action>

**Pattern Library Assessment:**

**Reusability Score:** [1-10]
- How often would this pattern be used?
- Is it broadly applicable or niche?

**Implementation Complexity:** [Simple/Medium/High]
- How difficult to implement?
- How much customization needed per use?

**Documentation Quality:** [1-10]
- Do we have enough information to create a reusable pattern?
- Are code examples production-ready?

**Recommendation:**
- [ ] Add to pattern library (high reusability + good docs)
- [ ] Document for reference (medium reusability)
- [ ] Keep as research only (low reusability or incomplete)

<action if="add_to_pattern_library">Note: Pattern will be added after successful implementation</action>

<template-output>pattern_assessment, library_recommendation</template-output>
</step>

<step n="8" goal="Present Research Report">
<action>Compile all findings into comprehensive research report</action>

**"Research complete. Here's everything you need to know about {{pattern_name}}."**

<action>Generate final research report using template.md</action>
<action>Save to output file: {{default_output_file}}</action>
<action>Present summary to user</action>

**Research Summary:**
- ✅ Sources consulted: Archon + Context7 + Perplexity
- ✅ Code examples: {{example_count}}
- ✅ Premium inspiration: {{premium_example_count}}
- ✅ Latest GSAP version compatibility: {{gsap_version}}
- ✅ Required plugins: {{required_plugins}}

<ask>Would you like me to:
1. Implement this pattern now (invoke implement-from-pattern workflow)
2. Generate variations or explore related patterns
3. Add successful implementation to pattern library later
4. Done - save report for reference</ask>

<template-output>final_research_report, next_action</template-output>
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
