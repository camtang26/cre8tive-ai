# Animation Production Workflow Instructions
# Complete production pipeline using all 5 studio crew agents

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/animation-production/workflow.yaml</critical>
<critical>This is the FLAGSHIP workflow demonstrating full GSAP Excellence Engine capabilities</critical>

<workflow>

<!-- ============================================================ -->
<!-- PHASE 1: DIRECTOR - VISION PLANNING & CREATIVE DIRECTION -->
<!-- ============================================================ -->

<step n="1" goal="Director: Intake & Vision Planning">
<action>Greet {user_name} in {communication_language}</action>
<action>All written outputs must use {communication_language}</action>
<action>Director introduces the production workflow with film energy</action>

**🎬 "Welcome to the GSAP Excellence Engine production pipeline. Let's create something exceptional."**

<ask response="animation_request">What animation do you need? (component, page, element to animate)</ask>
<ask response="brand_personality">Brand personality? (playful, professional, edgy, minimal, etc.)</ask>
<ask response="animation_goals">Goals for this animation? (engagement, delight, storytelling, wow factor)</ask>
<ask response="constraints">Any constraints? (performance, timeline, accessibility)</ask>
<ask response="target_framework">Framework? [vanilla/react/vue/svelte]</ask>
<ask response="page_url">Dev server URL for testing? (optional but recommended)</ask>

<action>Director confirms understanding and sets creative vision</action>

**Creative Brief:**
- Animation: {{animation_request}}
- Brand: {{brand_personality}}
- Goals: {{animation_goals}}
- Constraints: {{constraints}}
- Framework: {{target_framework}}

<ask>Ready to proceed with production? [y/n]</ask>

<template-output>animation_request, brand_personality, animation_goals, constraints, target_framework, page_url</template-output>
</step>

<step n="2" goal="Director: Define Creative Vision">
<action>Director defines the creative vision and animation narrative</action>

**Director's Vision:**
- What story does this animation tell?
- What emotion should it evoke?
- What's the "wow factor" that makes this premium?
- How does it fit the brand personality?
- What success looks like (visual outcome)

<action>Generate vision document with:</action>
- Animation narrative
- Key visual moments
- Expected user experience
- Premium quality standards
- Wow factor goals

<template-output>creative_vision, animation_narrative, wow_factor_goals</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 2: CINEMATOGRAPHER - MULTI-SOURCE RESEARCH -->
<!-- ============================================================ -->

<step n="3" goal="Cinematographer: Multi-Source Research">
<critical>This step leverages ALL THREE research MCPs for comprehensive research</critical>

<action>Cinematographer conducts multi-source research based on Director's vision</action>

**🎥 "Researching premium patterns across all sources..."**

**Research Protocol (Execute in parallel where possible):**

**1. Perplexity Research (Premium Examples):**
<action>Use perplexity_research tool:</action>
- Query: "{{animation_request}} GSAP premium examples 2024-2025 Awwwards"
- Query: "{{brand_personality}} animation trends design studios"
- Query: "best {{animation_request}} animations technical approach"

**2. Archon MCP (GSAP Technical Patterns):**
<action>Use rag_search_knowledge_base and rag_search_code_examples:</action>
- Search GSAP docs for {{animation_request}} techniques
- Find code examples and implementation patterns
- Discover relevant plugins (ScrollTrigger, SplitText, etc.)
- Locate performance best practices

**3. Context7 (Latest GSAP APIs):**
<action>Use get-library-docs:</action>
- Fetch latest GSAP version capabilities
- Check API compatibility
- Identify new features relevant to this animation
- Document version: {{gsap_version}}

<critical>Document ALL sources with full citations</critical>

<action>Synthesize research into summary:</action>
- Key findings from all 3 sources
- Technical approach consensus
- Plugin recommendations
- Performance considerations
- Inspiration sources

<template-output>perplexity_findings, archon_patterns, context7_api_info, research_citations, recommended_approach, gsap_version, research_summary</template-output>
</step>

<step n="4" goal="Cinematographer: Technical Approach Recommendation">
<action>Cinematographer synthesizes research into recommended technical approach</action>

**Research Synthesis:**
- GSAP features to use (core, plugins)
- Easing curves recommended
- Timeline structure suggested
- Performance considerations
- Inspiration sources cited

**Recommended Approach:**
{{technical_approach_recommendation}}

<action>Hand off research findings to VFX Artist</action>

<template-output>technical_approach, required_plugins, performance_notes, inspiration_sources</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 3: VFX ARTIST - IMPLEMENTATION -->
<!-- ============================================================ -->

<step n="5" goal="VFX Artist: Implementation Planning">
<action>VFX Artist receives research and plans implementation</action>

**✨ "Alright, based on the research, here's how we'll build this..."**

**Implementation Plan:**

1. **Setup Phase:**
   - GSAP version: {{gsap_version}}
   - Plugins needed: {{required_plugins}}
   - Framework integration: {{target_framework}}

2. **Animation Structure:**
   - Timeline vs. individual tweens
   - Element selection strategy
   - Animation choreography

3. **Technical Approach:**
   - GPU acceleration strategy
   - Transform properties used
   - Easing curves selected

4. **Performance Strategy:**
   - will-change properties
   - Animation complexity management
   - 60fps target considerations

<template-output>implementation_plan</template-output>
</step>

<step n="6" goal="VFX Artist: Build Animation">
<critical>Generate production-ready implementation code</critical>

<action>VFX Artist implements animation based on research and plan</action>

**Code Generation:**

**1. Imports and Setup:**
```javascript
{{import_statements}}
{{gsap_setup_code}}
```

**2. Animation Implementation:**
```javascript
// Based on research from: {{inspiration_sources}}
// Technical approach: {{technical_approach}}
// GSAP Version: {{gsap_version}}

{{animation_implementation_code}}
```

**3. Framework Integration:**
```{{target_framework}}
{{framework_integration_code}}
```

**4. Cleanup Function:**
```javascript
{{cleanup_code}}
```

**5. Accessibility Fallback:**
```javascript
// prefers-reduced-motion support
{{accessibility_code}}
```

**6. Installation Commands:**
```bash
{{installation_commands}}
```

**7. Usage Example:**
```{{target_framework}}
{{usage_example}}
```

<action>Add comprehensive inline comments explaining decisions</action>
<action>Ensure code is production-ready (no TODOs, no placeholders)</action>

<template-output>import_statements, gsap_setup_code, animation_implementation_code, framework_integration_code, cleanup_code, accessibility_code, integration_guide, installation_commands, usage_example, animation_name, gsap_version, research_sources_summary</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 4: EDITOR - POLISH & REFINEMENT -->
<!-- ============================================================ -->

<step n="7" goal="Editor: Review Implementation">
<action>Editor receives implementation for polish pass</action>

**✂️ "Let me review the implementation for smoothness and polish..."**

**Editor's Review Checklist:**
- [ ] Timing feels natural (not too fast/slow)
- [ ] Easing curves appropriate
- [ ] Transitions smooth between states
- [ ] No awkward pauses or rushes
- [ ] Code is clean and simple
- [ ] Cleanup properly implemented

<action>Analyze implementation code for issues:</action>
- Timing problems
- Easing curve selection
- Code complexity/cruft
- Missing cleanup
- Performance anti-patterns

<template-output>editor_review, identified_issues</template-output>
</step>

<step n="8" goal="Editor: Polish & Refine">
<check if="issues_found">
<action>Editor refines implementation:</action>

**Refinements Applied:**
- Timing adjustments
- Easing curve improvements
- Code simplification
- Cleanup enhancements
- Flow improvements

<action>Generate polished version of code</action>
<action>Document specific changes made</action>
<action>Describe the result/improvement achieved</action>

<template-output>polished_code, refinement_notes, polish_changes, polish_result</template-output>
</check>

<check if="no_issues">
<action>Editor confirms implementation is already polished</action>

**✂️ "Implementation is clean. No polish needed - buttery smooth!"**

<action>Set polish_result to confirmation message</action>

<template-output>polish_approval, polish_result</template-output>
</check>
</step>

<!-- ============================================================ -->
<!-- PHASE 5: TECH DIRECTOR - VALIDATION & OPTIMIZATION -->
<!-- ============================================================ -->

<step n="9" goal="Tech Director: Performance Profiling">
<check if="page_url_provided">
<critical>Tech Director uses Chrome DevTools MCP for comprehensive validation</critical>

<action>Tech Director profiles animation performance</action>

**🔧 "Running performance validation..."**

**Performance Testing:**

1. **FPS Profiling (Normal):**
<action>Use Chrome DevTools MCP: performance_start_trace</action>
<action>Trigger animation on {{page_url}}</action>
<action>Use Chrome DevTools MCP: performance_stop_trace</action>

Metrics captured:
- Average FPS: {{average_fps_normal}}
- Minimum FPS: {{minimum_fps_normal}}
- Paint time: {{paint_time_normal}}
- JS execution time: {{js_execution_normal}}

2. **FPS Profiling (CPU Throttled):**
<action>Use Chrome DevTools MCP: emulate_cpu with 4x slowdown</action>
<action>Re-run profiling</action>

Metrics captured:
- Average FPS (throttled): {{average_fps_throttled}}
- Minimum FPS (throttled): {{minimum_fps_throttled}}

Target: 60fps on mid-range devices

3. **Console Check:**
<action>Use Chrome DevTools MCP: list_console_messages</action>
<action>Count errors and warnings separately</action>

Requirement: ZERO errors, ZERO GSAP warnings
- Error count: {{error_count}}
- Warning count: {{warning_count}}

4. **Visual Validation:**
<action>Use Chrome DevTools MCP: take_screenshot</action>
<action>Document visual observations</action>

Capture: Before, during, after animation
Notes: {{visual_validation_notes}}

<template-output>average_fps_normal, minimum_fps_normal, paint_time_normal, js_execution_normal, average_fps_throttled, minimum_fps_throttled, console_status, error_count, warning_count, visual_validation_notes</template-output>
</check>

<check if="no_page_url">
<action>Tech Director performs code review only (cannot test without URL)</action>

**🔧 "No URL provided - performing code review instead of live testing"**

Code Review:
- GPU acceleration check
- Performance best practices
- Cleanup implementation
- Accessibility compliance

<template-output>code_review_results</template-output>
</check>
</step>

<step n="10" goal="Tech Director: Quality Gate Assessment">
<action>Tech Director assesses against production-ready criteria</action>

**Production Readiness Checklist:**

**Performance: {{performance_gate_status}}**
- [ ] 60fps achieved (normal conditions)
- [ ] 60fps achieved (4x CPU throttle)
- [ ] Paint time <16ms per frame
- [ ] JS execution optimized

**Console: {{console_gate_status}}**
- [ ] Zero JavaScript errors
- [ ] Zero GSAP warnings
- [ ] Clean console output

**Code Quality: {{code_quality_gate_status}}**
- [ ] Production-ready implementation
- [ ] Cleanup function present
- [ ] Comments explain decisions
- [ ] No TODOs or placeholders

**Accessibility: {{accessibility_gate_status}}**
- [ ] prefers-reduced-motion fallback
- [ ] Keyboard accessible (if interactive)
- [ ] Focus management proper

<action>Determine individual gate statuses (PASS/FAIL)</action>
<action>Aggregate into overall production verdict</action>

**VERDICT:**
<check if="all_gates_pass">
**🟢 GREEN LIGHT FOR PRODUCTION**

All quality gates passed. Animation is ship-ready.
</check>

<check if="issues_present">
**🔴 NOT SHIP-READY**

Blockers: {{production_blockers}}

Recommendations: {{optimization_recommendations}}
</check>

<template-output>performance_gate_status, console_gate_status, code_quality_gate_status, accessibility_gate_status, production_verdict, production_blockers, optimization_recommendations</template-output>
</step>

<!-- ============================================================ -->
<!-- PHASE 6: DIRECTOR - FINAL DELIVERY -->
<!-- ============================================================ -->

<step n="11" goal="Director: Package Final Delivery">
<action>Director compiles complete production package</action>

**🎬 "Compiling final production package..."**

**Production Package Contents:**

1. **Creative Vision Document** (Director)
   - Animation narrative
   - Wow factor goals
   - Success criteria

2. **Research Report** (Cinematographer)
   - Multi-source research findings
   - Technical recommendations
   - Inspiration sources

3. **Implementation Code** (VFX Artist + Editor)
   - Production-ready GSAP code
   - Framework integration
   - Cleanup & accessibility

4. **Polish Notes** (Editor)
   - Refinements applied
   - Timing adjustments
   - Code improvements

5. **Validation Report** (Tech Director)
   - Performance metrics
   - Quality gate results
   - Production verdict

6. **Integration Guide**
   - Installation instructions
   - Usage examples
   - Testing checklist

<action>Generate animation_name from animation_request (e.g., "Hero Section Reveal" → "hero-section-reveal")</action>
<action>Get current date for documentation</action>
<action>Compile resource links:</action>
- GSAP documentation relevant to this animation
- Research sources from Cinematographer findings
- Related patterns from pattern library

<action>Generate complete production report using template.md</action>
<action>Save to: {{default_output_file}}</action>

<template-output>final_production_package, animation_name, date, gsap_docs_links, research_source_links, related_patterns</template-output>
</step>

<step n="12" goal="Director: Present to User">
<action>Director presents final delivery to user</action>

**🎬 "Production complete. Here's your premium GSAP animation."**

**Delivery Summary:**
- ✅ Creative vision achieved
- ✅ Research-backed implementation
- ✅ Production-ready code
- ✅ Polished and refined
- ✅ Performance validated
- ✅ Quality gates: {{quality_gate_status}}

**Performance:**
- Average FPS: {{average_fps}}
- Console: {{console_status}}
- Production Ready: {{production_verdict}}

**Documentation:**
- Complete production report: {{default_output_file}}
- Implementation code ready to use
- Integration guide included

<ask>Next steps:
1. Copy code and integrate into project
2. Request variations or adjustments
3. Add successful animation to pattern library
4. Done - animation is complete</ask>

<template-output>delivery_summary, next_action</template-output>
</step>

<step n="13" goal="Optional: Add to Pattern Library" optional="true">
<check if="production_ready AND user_approves">
<ask>Animation successful? Add to pattern library for future reuse? [y/n]</ask>

<check if="yes">
<action>Director adds animation to pattern library</action>
<action>Generate unique pattern_id (e.g., pattern-hero-reveal-2025-uuid)</action>
<action>Determine pattern_file_path in pattern library</action>

**Pattern Library Entry:**
```yaml
id: {{pattern_id}}
name: "{{animation_name}}"
category: "{{pattern_category}}"
complexity: "{{complexity}}"
gsap_version: "{{gsap_version}}"
plugins_required: {{required_plugins}}
description: "{{description}}"
code_example: |
  {{implementation_code}}
created_date: "{{date}}"
success_count: 1
tags: {{pattern_tags}}
framework: "{{target_framework}}"
performance_notes: "{{performance_metrics}}"
research_sources: {{research_citations}}
```

<action>Save to: {{pattern_file_path}}</action>

**🎬 "Pattern added to library! Available for quick implementation next time."**
</check>
</check>

<template-output>pattern_library_entry, pattern_id, pattern_file_path</template-output>
</step>

</workflow>

## Multi-Agent Coordination Notes

**Agent Handoffs:**
1. **Director → Cinematographer:** Passes creative vision, animation requirements
2. **Cinematographer → VFX Artist:** Passes research findings, technical recommendations
3. **VFX Artist → Editor:** Passes implementation code for polish
4. **Editor → Tech Director:** Passes polished code for validation
5. **Tech Director → Director:** Passes validation results and production verdict
6. **Director → User:** Delivers complete production package

**Context Preservation:**
All agents maintain access to:
- Original animation request
- Creative vision
- Brand personality
- Constraints
- Research findings

## MCP Tool Orchestration

**Research Phase (Cinematographer):**
- Perplexity MCP: Premium examples and trends
- Archon MCP: GSAP technical patterns
- Context7 MCP: Latest API documentation

**Validation Phase (Tech Director):**
- Chrome DevTools MCP: Performance profiling, console check, visual validation

## Quality Standards

**Code Quality:**
- Production-ready (no TODOs, placeholders)
- Fully commented with decision rationale
- Cleanup implemented
- Framework integration correct
- TypeScript types if applicable

**Performance:**
- 60fps sustained on target devices
- 60fps on 4x CPU throttle (mid-range)
- Paint time <16ms per frame
- GPU acceleration used

**Accessibility:**
- prefers-reduced-motion REQUIRED
- Keyboard accessible if interactive
- Focus management if applicable
- No seizure-inducing effects

## Success Metrics

This flagship workflow targets:
- ✅ 60%+ first-time implementation success (vs 20% baseline)
- ✅ 70% reduction in debugging iterations
- ✅ 90%+ animations achieve 60fps
- ✅ 80%+ user satisfaction (premium quality rating)
- ✅ 45-90 minute total production time

## Integration

**Feeds Into:**
- Pattern library (successful animations)

**Fed By:**
- creative-ideation (can start from concept)
- Pattern library (can reference existing patterns)

**Produces:**
- Complete production-ready animation
- Full documentation package
- Pattern library entry (if successful)
