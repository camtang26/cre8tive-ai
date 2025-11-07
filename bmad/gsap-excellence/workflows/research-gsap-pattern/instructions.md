# Research GSAP Pattern Workflow Instructions
# Deep dive research into specific GSAP technique

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/research-gsap-pattern/workflow.yaml</critical>

<workflow>

<step n="1" goal="Define Research Scope">
<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Cinematographer greets {user_name} and introduces the research workflow with precision</action>

**"{user_name}, let's dive deep into GSAP technique research. I'll find you the best patterns and examples."**

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

<step n="2" goal="Systematic Multi-Source Research (TIER 1/2/3 PROTOCOL)">
<critical>KNOWLEDGE SOURCE HIERARCHY: Tier 1 (Archon + Deep-Research) → Tier 2 (WebSearch) → Tier 3 (Context7)</critical>

<action>Cinematographer conducts systematic 89-source research</action>

**"Researching {{pattern_name}} across ALL 5 priority Archon sources + Deep-Research frameworks..."**

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 1A: ARCHON MCP 89-SOURCE SYSTEMATIC PROTOCOL                       -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 1A: Archon MCP Systematic Querying (5 Priority Sources)**

<action>Query ALL 5 Archon sources with pattern-specific searches:</action>

**Source 1: gsap.com Official Docs (2.2M+ words) - PRIMARY**
```
rag_search_knowledge_base("{{pattern_name}} GSAP", source_id="b9f6b322298feb21", match_count=10)
rag_search_knowledge_base("{{pattern_name}} best practices", source_id="b9f6b322298feb21", match_count=8)
rag_search_code_examples("{{pattern_name}} implementation", source_id="b9f6b322298feb21", match_count=10)
rag_search_code_examples("{{pattern_name}} {{use_case}}", source_id="b9f6b322298feb21", match_count=8)
```

**Source 2: Tympanus/Codrops Tutorials - PREMIUM QUALITY**
```
rag_search_knowledge_base("{{pattern_name}} tutorial", source_id="1e5cc3bd5125be3c", match_count=8)
rag_search_code_examples("{{pattern_name}} Codrops", source_id="1e5cc3bd5125be3c", match_count=8)
```

**Source 3: FreeFrontend Examples**
```
rag_search_code_examples("{{pattern_name}} examples", source_id="90c2ef5e8fa816b7", match_count=6)
```

**Source 4: CodePen Collections**
```
rag_search_code_examples("{{pattern_name}} CodePen", source_id="020e9f31a8c5cdb7", match_count=6)
```

**Source 5: Lenis Integration (if scroll-related)**
```
rag_search_knowledge_base("{{pattern_name}} smooth scroll", source_id="77ae0ef68a867aa9", match_count=4)
```

<critical>🎉 PREMIUM PLUGIN DEEP DIVE (ALL FREE in 3.13+!)</critical>
<action>Actively search premium plugin patterns across sources:</action>
```
rag_search_code_examples("ScrollSmoother {{pattern_name}}", match_count=8)
rag_search_code_examples("MorphSVG {{pattern_name}}", match_count=8)
rag_search_code_examples("SplitText {{pattern_name}}", match_count=8)
rag_search_code_examples("DrawSVG {{pattern_name}}", match_count=6)
rag_search_code_examples("MotionPath {{pattern_name}}", match_count=6)
```

**Why Premium Plugin Priority:**
- ScrollSmoother (was $99/year) → NOW FREE!
- MorphSVG (was $99/year) → NOW FREE!
- SplitText (was $99/year) → NOW FREE!
- **Default to BEST solutions** - no cost barrier!

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 1B: DEEP-RESEARCH FRAMEWORK                                        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 1B: Deep-Research Framework for Pattern Analysis**

<action>Reference relevant Deep-Research sections based on pattern type:</action>

**For ALL Patterns - Core Principles:**
- **Section 2.2:** Mastering Timeline Techniques → Choreography and coordination
- **Section 2.3:** Understanding Tweens and Staggers → Motion fundamentals

**For Scroll Patterns:**
- **Section 3.2:** Content Reveal on Scroll → ScrollTrigger reveal patterns
- **Section 3.3:** Sticky Scroll-triggered Animation → Pin and scrub techniques

**For Text Patterns:**
- **Section 3.5:** Text Split and Reveal → SplitText techniques (now FREE!)

**For Layout Patterns:**
- **Section 3.6:** Flip State Transitions → FLIP technique (now FREE!)

**For Performance-Critical Patterns:**
- **Section 5.1:** GPU Rule → Efficient properties only (transform, opacity)
- **Section 5.2:** Keep Main Thread Free → <16ms per frame
- **Section 5.5:** Optimize for 60fps → Sustained performance targets

**For Accessibility:**
- **Section 6.1:** prefers-reduced-motion → MANDATORY fallback
- **Section 6.2:** Other Considerations → Keyboard, focus, screen readers

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 2: WEBSEARCH (2024-2025 Trends)                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 2: WebSearch for Recent Premium Examples**

<action>Use WebSearch for cutting-edge 2024-2025 implementations:</action>
```
WebSearch("{{pattern_name}} GSAP Awwwards 2025")
WebSearch("{{pattern_name}} premium animation examples 2024")
WebSearch("Linear Stripe Vercel {{pattern_name}} breakdown")
WebSearch("{{pattern_name}} GSAP tutorial 2025")
```

<action>Target premium agencies and brands:</action>
- Awwwards Site of the Day winners
- Linear app (GSAP excellence)
- Stripe (scroll storytelling)
- Codrops latest (2024-2025 tutorials)

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- TIER 3: CONTEXT7 (Minimal - API Verification)                           -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**TIER 3: Context7 (ONLY if API verification needed)**

<action>Use Context7 ONLY for version-specific API questions:</action>
```
resolve-library-id("gsap")
get-library-docs(context7CompatibleLibraryID="/greensock/gsap", topic="{{pattern_name}}", tokens=3000)
```

**Use sparingly:**
- Archon already has gsap.com docs!
- Only for brand-new GSAP 3.13+ features not in Archon
- Verify plugin API syntax if uncertain

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SYNTHESIS & CITATION                                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Research Synthesis & Documentation**

<action>Document findings by source with citations:</action>

**Citation Format (MANDATORY):**
```
Pattern: {{pattern_name}}
Sources:
- Archon: gsap.com (source: b9f6b322298feb21) - [specific_technique]
- Archon: Codrops (source: 1e5cc3bd5125be3c) - [tutorial_name]
- Deep-Research: Section [X.X] - [principle_applied]
- WebSearch: [agency/brand] [year] - [url]
```

<critical>Document ALL findings with full citations including source IDs</critical>

<template-output>
archon_findings_by_source,
deep_research_sections_relevant,
websearch_premium_examples,
all_citations_with_source_ids
</template-output>
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
// GSAP 3.13.0+ (premium plugins FREE!)
// Source: {{citation}}

gsap.to(element, {
  // Annotate each parameter
  duration: 1,
  x: 100,
  ease: "power2.out" // Explain easing choice
});
```

<critical>Prioritize Premium Plugin Examples (FREE in 3.13+)</critical>
When extracting code examples, PREFER examples using:
- ScrollSmoother (smooth scrolling - was $99/year, now FREE!)
- MorphSVG (icon morphing - was premium, now FREE!)
- SplitText (text reveals - was premium, now FREE!)
- DrawSVG (SVG animations - was premium, now FREE!)
- MotionPath (path animations - was premium, now FREE!)

**Why:** Show users the BEST techniques without cost concerns!

<action>Ensure examples cover range from simple to advanced</action>
<action>Annotate WHY certain choices are made (easing, duration, properties)</action>

<template-output>example_1, example_2, example_3, example_4, example_5</template-output>
</step>

<step n="5" goal="Document Best Practices (Deep-Research Guided)">
<action>Compile best practices using Deep-Research sections 5.1-5.6, 6.1-6.4, 8.1-8.10</action>

**Best Practices for {{pattern_name}}:**

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- PERFORMANCE (Deep-Research Sections 5.1-5.6)                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Performance (60fps Mandatory - Section 5.5):**

**Section 5.1: GPU Rule - Efficient Properties ONLY**
- ✅ **ALWAYS animate:** `transform` (x, y, scale, rotate), `opacity`
- ❌ **NEVER animate:** `top/left`, `width/height`, `margin/padding` (layout thrashing!)
- GPU-accelerated properties: transform, opacity, filter (cautiously)

**Section 5.2: Keep Main Thread Free**
- Target: <16ms per frame (60fps budget)
- Offload heavy JS to Web Workers if needed
- Use RequestAnimationFrame for calculations
- Minimize JavaScript during animations

**Section 5.3: Debugging Jank (Chrome DevTools)**
- Use Performance tab to profile
- Identify long tasks (>50ms)
- Spot layout thrashing in Timeline
- Test with 4x CPU throttle

**Section 5.4: Memory Management**
- Kill timelines/tweens on cleanup: `timeline.kill()`
- Use `ScrollTrigger.getAll().forEach(st => st.kill())`
- Monitor memory usage in DevTools
- Avoid orphaned animations

**Section 5.5: Optimize for 60fps**
- Sustained 60fps on mid-range devices (CRITICAL)
- Fallback: 30fps minimum on low-end
- Use `will-change` sparingly (adds layers!)
- Simplify if dropping frames

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- ACCESSIBILITY (Deep-Research Sections 6.1-6.4)                          -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Accessibility (MANDATORY - Section 6.1):**

**Section 6.1: prefers-reduced-motion (CRITICAL)**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Instant transitions or subtle fades ONLY
  gsap.set(element, { opacity: 1, y: 0 }); // No animation
} else {
  // Full animation
  gsap.to(element, { opacity: 1, y: 0, duration: 1 });
}
```

**Section 6.2: Other Accessibility Considerations**
- No seizure-inducing flashing (>3 flashes/sec)
- Keyboard navigation works during animations
- Focus states remain visible
- Screen readers announce state changes
- Animations don't block user interaction

**Section 6.3: Accessible Styling**
- Maintain color contrast during transitions
- Don't animate critical UI during loading
- Ensure text remains readable
- Animations enhance, don't block UX

**Section 6.4: User Control**
- Provide pause/play for long animations (>5s)
- Allow users to skip intro animations
- Respect OS-level motion preferences
- Document keyboard controls

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- COMMON PITFALLS (Deep-Research Sections 8.1-8.10)                       -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Common Pitfalls (Check ALL 10 - Sections 8.1-8.10):**

**8.1: Forgetting Cleanup (HIGH severity)**
- ❌ Memory leaks from orphaned animations
- ✅ Kill timelines on unmount: `useGSAP(() => { ... }, { scope: ref })`

**8.2: Animating Wrong Properties (HIGH severity)**
- ❌ Animating `top/left`, `width/height` causes jank
- ✅ Animate `x/y`, `scale` for GPU acceleration

**8.3: Ignoring immediateRender (MEDIUM severity)**
- ❌ `from()` sets properties immediately (flicker!)
- ✅ Set `immediateRender: false` or use `fromTo()`

**8.4: Multiple ScrollTriggers on Same Element (MEDIUM severity)**
- ❌ ScrollTrigger conflicts
- ✅ One ScrollTrigger per element (usually)

**8.5: Not Using overwrite Mode (MEDIUM severity)**
- ❌ Animations conflict
- ✅ Use `overwrite: "auto"` or `overwrite: true`

**8.6: Missing refresh() After Content Load (MEDIUM severity)**
- ❌ ScrollTrigger positions wrong
- ✅ Call `ScrollTrigger.refresh()` after images/fonts load

**8.7: Deprecated Syntax (LOW severity)**
- ❌ Using GSAP 2.x syntax
- ✅ Update to GSAP 3.13+ syntax

**8.8: Uncontrolled Infinite Loops (LOW severity)**
- ❌ Infinite `repeat: -1` without cleanup
- ✅ Kill loops on unmount

**8.9: Not Testing on Different Devices (HIGH severity)**
- ❌ Works on desktop, fails on mobile
- ✅ Test on iOS Safari, Android Chrome

**8.10: Misusing from() vs fromTo() (MEDIUM severity)**
- ❌ `from()` causes flicker
- ✅ Use `fromTo()` for explicit control

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CODE QUALITY & BROWSER COMPATIBILITY                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

**Code Quality:**
- Clean, well-annotated patterns
- Proper cleanup (kill animations on unmount)
- TypeScript typed if applicable
- Error handling for edge cases

**Browser Compatibility:**
- Chrome, Firefox, Safari (latest 2 versions)
- Safari quirks (will-change, transform-origin)
- iOS mobile animation issues
- Fallbacks for unsupported features

<template-output>
performance_best_practices_5_1_to_5_6,
accessibility_requirements_6_1_to_6_4,
common_pitfalls_8_1_to_8_10,
code_quality_standards,
browser_compatibility_notes
</template-output>
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

**Research Hierarchy (TIER 1/2/3 MANDATORY):**
- **TIER 1 PRIMARY:** Archon MCP (ALL 5 sources) + Deep-Research frameworks ALWAYS queried first
  - Source 1: gsap.com (b9f6b322298feb21) - PRIMARY
  - Source 2: Codrops (1e5cc3bd5125be3c) - Premium quality
  - Source 3: FreeFrontend (90c2ef5e8fa816b7)
  - Source 4: CodePen (020e9f31a8c5cdb7)
  - Source 5: Lenis (77ae0ef68a867aa9)
- **TIER 2 GAP FILLING:** WebSearch for 2024-2025 trends not in Archon
- **TIER 3 MINIMAL:** Context7 only for API verification if needed

**Research Depth:**
- Minimum 3 code examples (preferably 5+)
- At least 2 premium inspiration sources (2024-2025)
- Latest GSAP 3.13.0+ compatibility confirmed
- Deep-Research sections applied (5.1-5.6, 6.1-6.4, 8.1-8.10)

**Code Quality:**
- Examples are clean, well-annotated, production-ready
- Comments explain WHY, not just WHAT
- Performance considerations noted (60fps mandatory)
- Accessibility fallbacks included (prefers-reduced-motion CRITICAL)
- All 10 pitfalls checked (sections 8.1-8.10)

**Citation Standards (MANDATORY FORMAT):**
```
Sources:
- Archon: [pattern] (source: [source_id]) - [technique]
- Deep-Research: Section [X.X] - [principle]
- WebSearch: [agency/brand] [year] - [url]
```
- All sources cited with source IDs
- Premium examples credited to agencies/sites
- GSAP 3.13.0+ version noted
- Research date documented

**Deep-Research Framework Application:**
- Performance: Sections 5.1-5.6 applied
- Accessibility: Sections 6.1-6.4 applied
- Pitfalls: ALL 10 sections (8.1-8.10) checked
- Pattern-specific: Sections 2.2, 2.3, 3.X as relevant

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
