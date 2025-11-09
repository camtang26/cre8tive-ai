# Implement From Pattern Workflow Instructions
# Systematic pattern adaptation with research-backed framework integration and cleanup protocols
# Multi-agent coordination: Director → Cinematographer (Pattern Analysis) → VFX Artist (Implementation) → Tech Director (Validation)

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/implement-from-pattern/workflow.yaml</critical>
<critical>This is a RESEARCH-BACKED workflow - MANDATORY research gates CANNOT be skipped</critical>

<workflow>

## Workflow Overview

**Purpose:** Adapt proven GSAP patterns from the 60+ pattern library to your specific target context with systematic framework integration (React/Next.js/Vue/Vanilla) and proper cleanup/lifecycle management.

**Research Foundation:**
- Deep-Research Section 2.5: Framework Integration Patterns (React/Next.js/Other Frameworks)
- Deep-Research Section 3.7: Cleanup and Reinitialization (FullPage Transitions)
- Archon MCP: Pattern discovery and adaptation research (89 knowledge base sources)

**Multi-Agent Team:**
- **Director** (Orchestrator): Gathers requirements, coordinates team, presents implementation
- **Cinematographer** (Pattern Analyst): Loads pattern, analyzes features, plans adaptation
- **VFX Artist** (Implementation Specialist): Adapts code to framework, applies research protocols
- **Tech Director** (Validator - Phase 2 Optional): Quick validation via Chrome DevTools

**Estimated Duration:** 10-20 minutes

---

<step n="1" goal="Director: Understand Implementation Request">
<action>Director introduces workflow and gathers detailed requirements</action>

**Director speaks:**

**"I'll help you adapt a proven GSAP pattern to your project. Let's gather the requirements systematically."**

**Pattern Source:**

<ask response="pattern_source">Where is the pattern coming from?

1. **library** - Pattern already in our 60+ pattern library
2. **research** - From a research report (research-gsap-pattern workflow output)
3. **url** - From a URL/CodePen/example you found
4. **describe** - Describe what you want, I'll research it first

Enter: library | research | url | describe</ask>

<check if="pattern_source == 'library'">
<ask response="pattern_identifier">Pattern name from library?

Examples:
- parallax-scroll-basic
- text-reveal-stagger
- hero-intro-sequence
- react-scroll-trigger-pinning

Enter pattern name:</ask>

<action>Note: Will load from {pattern_library}/{{pattern_identifier}}.pattern.yaml</action>
</check>

<check if="pattern_source == 'research'">
<ask response="pattern_identifier">Path to research report?

Example: docs/research-reports/hero-animation-2025-11-09.md

Enter path:</ask>

<action>Verify research report exists and contains pattern implementation</action>
</check>

<check if="pattern_source == 'url'">
<ask response="pattern_identifier">URL to pattern/example?

Enter URL:</ask>

<action>Note: Cinematographer will research this URL via Archon MCP</action>
</check>

<check if="pattern_source == 'describe'">
<ask response="pattern_identifier">Describe the pattern you want to implement:

Example: "Scroll-triggered card reveals with stagger effect"

Describe pattern:</ask>

<action>Note: Will invoke research-gsap-pattern workflow first to research this</action>
</check>

**Target Context:**

<ask response="target_context">Where are you implementing this?

Provide:
- Component/file path
- Element selectors
- Any relevant context

Example: "src/components/Hero.tsx - .hero-title, .hero-image, .cta-button"

Enter target context:</ask>

**Framework:**

<ask response="framework">What framework are you using?

1. vanilla (Pure JavaScript)
2. react (React functional components)
3. nextjs (Next.js with SSR considerations)
4. vue (Vue 3 Composition API)
5. svelte (Svelte framework)

Enter framework [vanilla]:</ask>

<action>Default to "vanilla" if no input provided</action>

**Customizations:**

<ask response="customizations">Any customizations from the base pattern?

Examples:
- Slower timing (1.5s instead of 0.8s)
- Different easing (elastic instead of power2.out)
- Custom colors or values
- Different stagger amount

Enter customizations (or press Enter to skip):</ask>

**Confirmation:**

<action>Display requirements summary for user confirmation</action>

**Implementation Plan:**
- **Pattern:** {{pattern_identifier}}
- **Source:** {{pattern_source}}
- **Target:** {{target_context}}
- **Framework:** {{framework}}
- **Customizations:** {{customizations}}

<ask>Confirm this plan and proceed? [y/n]</ask>

<check if="user confirms">
  <template-output>pattern_source, pattern_identifier, target_context, framework, customizations</template-output>
</check>

<check if="user rejects">
  <action>Return to requirement gathering</action>
</check>
</step>

---

<step n="2" goal="Cinematographer: MANDATORY Pattern Analysis Gate">
<critical>This is a MANDATORY research gate - pattern analysis CANNOT be skipped</critical>

<research-gate enforcement="MANDATORY" blocking="true">
<phase n="1" title="Pattern Loading and Analysis" required="true">

<action>Cinematographer analyzes pattern based on source</action>

**Cinematographer speaks:**

**"Loading pattern details and analyzing technical specifications..."**

<check if="pattern_source == 'library'">
<action>Read pattern file: {pattern_library}/{{pattern_identifier}}.pattern.yaml</action>

**Extract from pattern file:**
- Pattern metadata (name, category, complexity, GSAP version)
- Base code example (vanilla implementation)
- Required plugins (ScrollTrigger, SplitText, etc.)
- Framework variations (if available)
- Performance notes (GPU optimization, will-change usage)
- Accessibility notes (prefers-reduced-motion handling)

<action>Display pattern summary</action>

**Pattern Summary:**
```yaml
Name: {{pattern_name}}
Category: {{pattern_category}}
Complexity: {{pattern_complexity}}
GSAP Version Required: {{gsap_version_required}}
Plugins Required: {{plugins_required}}
```

<action>Show base code example</action>

**Base Pattern Code:**
```javascript
{{base_pattern_code}}
```
</check>

<check if="pattern_source == 'research'">
<action>Read research report: {{pattern_identifier}}</action>

**Extract from research report:**
- Implementation approaches documented
- Code examples (prefer medium complexity if multiple exist)
- Best practices from research
- GSAP features and plugins used
- Performance considerations noted
- Accessibility recommendations

<action>Display research summary</action>

**Research Report Summary:**
- **Sources Consulted:** {{research_sources_count}}
- **Implementation Approaches:** {{approaches_count}}
- **Recommended Approach:** {{recommended_approach}}
- **GSAP Features:** {{gsap_features}}
- **Plugins Required:** {{plugins_required}}
</check>

<check if="pattern_source == 'url'">
<action>Use Archon MCP to analyze URL and find similar patterns</action>

**Archon MCP Pattern Discovery:**

<action>Search Archon knowledge base for similar patterns:
  - Query: "GSAP pattern similar to {{pattern_identifier}}"
  - Sources: b9f6b322298feb21 (gsap.com), 1e5cc3bd5125be3c (Codrops)
  - Return: Code examples, implementation notes
</action>

<action>Use Perplexity MCP (if available) to analyze the provided URL</action>

<action>Synthesize pattern from URL + Archon findings</action>

**Pattern Analysis:**
- **URL Pattern Features:** {{url_pattern_features}}
- **Similar Archon Patterns:** {{archon_similar_patterns}}
- **Synthesized GSAP Features:** {{gsap_features}}
- **Estimated Complexity:** {{complexity_estimate}}
- **Plugins Needed:** {{plugins_required}}
</check>

<check if="pattern_source == 'describe'">
<action>Check if research-gsap-pattern workflow output exists</action>

<check if="research_not_yet_done">
**"I need to research this pattern first. Invoking research-gsap-pattern workflow..."**

<invoke-workflow path="{module_root}/workflows/research-gsap-pattern/workflow.yaml">
  <input name="research_query">{{pattern_identifier}}</input>
  <input name="research_depth">medium</input>
  <input name="sources">archon + context7 + web</input>
</invoke-workflow>

<action>Wait for research completion</action>
<action>Load research findings from output</action>
</check>

**Research-Backed Pattern Analysis:**
- **Research Report:** {{research_report_path}}
- **Patterns Discovered:** {{patterns_discovered}}
- **Recommended Implementation:** {{recommended_impl}}
- **GSAP Features:** {{gsap_features}}
- **Plugins Required:** {{plugins_required}}
</check>

</phase>

<phase n="2" title="Pattern Feature Analysis" required="true">

<action>Cinematographer performs detailed feature analysis</action>

**"Analyzing pattern technical requirements..."**

**1. Core GSAP Features:**
- **Tween Methods:** {{tween_methods}} (gsap.to, gsap.from, gsap.fromTo, gsap.set)
- **Timeline Usage:** {{timeline_usage}} (Yes/No - sequencing needed?)
- **Easing Functions:** {{easing_functions}} (power2.out, elastic, custom)
- **Stagger:** {{stagger_usage}} (Yes/No - multiple elements?)

**2. Plugin Requirements:**
<action>List all GSAP plugins required for this pattern</action>

- ScrollTrigger: {{scrolltrigger_needed}} (scroll-based animation?)
- SplitText: {{splittext_needed}} (text animation?)
- MorphSVG: {{morphsvg_needed}} (SVG morphing?)
- DrawSVG: {{drawsvg_needed}} (SVG path drawing?)
- Flip: {{flip_needed}} (state transitions?)
- Draggable: {{draggable_needed}} (drag interactions?)
- MotionPath: {{motionpath_needed}} (path-based motion?)

**3. Complexity Assessment:**
- **Complexity Level:** {{complexity_level}} (Low/Medium/High)
- **Estimated Implementation Time:** {{estimated_time}}
- **Framework Integration Challenges:** {{framework_challenges}}

**4. Adaptation Requirements:**
<action>Identify what needs to change for target context</action>

- **Element Selectors:** {{current_selectors}} → {{target_selectors}}
- **Timing Adjustments:** {{timing_changes}}
- **Customizations Needed:** {{customizations}}
- **Framework-Specific Considerations:** {{framework_notes}}

</phase>

<checkpoint type="approval-gate" blocking="true">
<action>Display complete pattern analysis summary</action>

**Pattern Analysis Complete:**

```markdown
## {{pattern_name}}

**GSAP Features:** {{gsap_features}}
**Plugins Required:** {{plugins_required}}
**Complexity:** {{complexity_level}}
**Framework:** {{framework}}

**Adaptation Plan:**
1. {{adaptation_step_1}}
2. {{adaptation_step_2}}
3. {{adaptation_step_3}}
```

<ask>**Cinematographer:** "Pattern analysis complete. Continue to framework integration? [c] to continue"</ask>

<mandate>Agent CANNOT proceed until user explicitly continues with "c" or "continue"</mandate>
<mandate>This gate ensures pattern is understood before adaptation begins</mandate>
</checkpoint>

</research-gate>

<template-output>pattern_details, gsap_features, required_plugins, pattern_complexity, adaptation_strategy, base_pattern_code</template-output>
</step>

---

<step n="3" goal="Cinematographer: MANDATORY Framework Integration Research Gate">
<critical>This is a MANDATORY research gate - Deep-Research Section 2.5 MUST be consulted</critical>

<research-gate enforcement="MANDATORY" blocking="true">
<phase n="1" title="Deep-Research Section 2.5 - Framework Integration Patterns" required="true">

<action>Cinematographer consults Deep-Research for framework-specific integration protocols</action>

**Cinematographer speaks:**

**"Consulting Deep-Research Section 2.5 for {{framework}} integration best practices..."**

Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md

<check if="framework == 'react' OR framework == 'nextjs'">

**Extract and apply React/Next.js integration protocols from Section 2.5:**

**1. React Hooks Pattern (gsap.context):**

*"We use `gsap.context()` which is a powerful utility introduced in GSAP 3.11 for React integration. By wrapping animations in `gsap.context(() => {...}, ref)`, GSAP will scope selectors and create a context tied to that component. It also records all animations/triggers created. On cleanup (`ctx.revert()`), it will automatically kill any ScrollTriggers, revert any inline styles added, and cleanup animations."*
(Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

**Protocol:**
```javascript
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Component() {
  const ref = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animation code here, limited to this component's DOM
      gsap.from(ref.current, { y: 50, opacity: 0, duration: 1 });
      ScrollTrigger.create({ trigger: ref.current, ... });
    }, ref);
    return () => ctx.revert();  // cleanup on unmount
  }, []);
  return <div ref={ref}>Content</div>;
}
```

**2. Cleanup Requirement:**

*"The cleanup function in the effect calls `ctx.revert()`. This is crucial. It ensures if the component unmounts, the animations stop and any changes are undone (so if component remounts later, it starts fresh). Many AI examples historically omitted proper cleanup, leading to bugs in real apps (e.g., animations running after component is gone). We must emphasize cleanup in our content."*
(Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

**3. useGSAP() Hook (GSAP 3.13+ Official Hook):**

*"`useGSAP` behaves like `useLayoutEffect` by default (which runs earlier than regular useEffect, preventing Flash of Unstyled Content (FOUC) if we set initial styles). It automatically calls context.revert on cleanup."*
(Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

**Recommended Protocol:**
```javascript
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Component() {
  const ref = useRef();
  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, y: 50 });
    // any ScrollTriggers or animations here auto-clean
  }, []); // dependencies if needed
  return <div ref={ref}>Content</div>;
}
```

<check if="framework == 'nextjs'">

**4. Next.js SSR Considerations:**

*"Next.js does server-side rendering of React, where `window` and `document` don't exist. GSAP tries to access them when initializing plugins or starting animations. To avoid errors like 'ReferenceError: document is not defined,' you must ensure GSAP code only runs on the client."*
(Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

**SSR Protocol:**
- Mark component as client-side: `"use client";` directive (Next.js 13+)
- Plugin registration inside useEffect (client-side only)
- Conditional imports: `if (typeof window !== "undefined") { ... }`

**5. Strict Mode Double-Invocation:**

*"With Next.js 13+ and React 18, remember that in development, React renders components twice (strict mode), which will call useEffect cleanup in between. Using `gsap.context()` or the official hook is the fix to prevent double execution issues."*
(Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

**Solution:** useGSAP() or gsap.context() handles this automatically via ctx.revert()

</check>

</check>

<check if="framework == 'vue'">

**Extract and apply Vue 3 integration protocols from Section 2.5:**

**Vue 3 Composition API Pattern:**

*"In Vue 3, a Composition API approach is similar:*
```javascript
import { onMounted, onUnmounted } from 'vue';
onMounted(() => { ...animations... });
onUnmounted(() => { ...kill animations... });
```
*Vue doesn't double-call onMounted in dev, so it's simpler. Still, `gsap.context` can be used in Vue by providing an element."*
(Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

**Protocol:**
```javascript
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

export default {
  setup() {
    const container = ref(null);
    let ctx;

    onMounted(() => {
      ctx = gsap.context(() => {
        gsap.from('.element', { y: 50, opacity: 0, duration: 1 });
      }, container.value);
    });

    onUnmounted(() => {
      ctx && ctx.revert();  // cleanup
    });

    return { container };
  }
}
```

</check>

<check if="framework == 'vanilla'">

**Vanilla JavaScript Integration:**

For vanilla JavaScript, no framework lifecycle management needed. However:
- Still use cleanup on route changes (SPA)
- Kill ScrollTriggers on page navigation
- Ensure animations don't persist when they shouldn't

**Pattern (if SPA with routing):**
```javascript
// On route change/cleanup:
ScrollTrigger.getAll().forEach(t => t.kill());
gsap.globalTimeline.clear();
```

</check>

**Framework Integration Strategy:**

<action>Based on {{framework}}, determine integration approach</action>

**For {{framework}}:**
- **Lifecycle Hook:** {{lifecycle_hook}} (useEffect, onMounted, etc.)
- **Ref Pattern:** {{ref_pattern}} (useRef, ref(), direct selector)
- **Cleanup Method:** {{cleanup_method}} (ctx.revert(), manual kill)
- **SSR Handling:** {{ssr_handling}} (if applicable)
- **Strict Mode:** {{strict_mode_handling}} (if applicable)

</phase>

<checkpoint type="approval-gate" blocking="true">
<action>Display framework integration strategy summary</action>

**Framework Integration Research Complete:**

```markdown
## {{framework}} Integration Protocol (Deep-Research Section 2.5)

**Lifecycle Hook:** {{lifecycle_hook}}
**Cleanup Method:** {{cleanup_method}}
**Key Insights:**
- {{insight_1}}
- {{insight_2}}
- {{insight_3}}

**Code Pattern:**
{{framework_integration_pattern}}
```

<ask>**Cinematographer:** "Framework integration protocol established. Continue to cleanup research? [c] to continue"</ask>

<mandate>Agent CANNOT proceed until user explicitly continues</mandate>
<mandate>This gate ensures framework integration is research-backed before implementation</mandate>
</checkpoint>

</research-gate>

<template-output>framework_integration_protocol, lifecycle_hook, cleanup_method, ssr_handling, strict_mode_handling</template-output>
</step>

---

<step n="4" goal="Cinematographer: MANDATORY Cleanup/Lifecycle Research Gate">
<critical>This is a MANDATORY research gate - Deep-Research Section 3.7 MUST be consulted</critical>

<research-gate enforcement="MANDATORY" blocking="true">
<phase n="1" title="Deep-Research Section 3.7 - Cleanup and Reinitialization" required="true">

<action>Cinematographer consults Deep-Research for cleanup/lifecycle protocols</action>

**Cinematographer speaks:**

**"Consulting Deep-Research Section 3.7 for cleanup and lifecycle best practices..."**

Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md

**Extract and apply cleanup protocols from Section 3.7:**

**1. ScrollTrigger Cleanup:**

*"On leaving a page, we kill all ScrollTriggers. This is blunt but effective (you could also selectively kill by saving references). Ensure pinned elements are unpinned, etc., so the DOM returns to normal before the new content enters (otherwise pinned positions might stick)."*
(Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)

**Protocol:**
```javascript
// Kill all ScrollTriggers to remove pinning/effects
ScrollTrigger.getAll().forEach(trig => trig.kill());
```

**2. Context Revert Pattern:**

*"In React apps, using `useEffect cleanup` (return function) inside components handles this at component level (GSAP Context revert as we did). But for whole-page transitions via a router, you might centralize cleanup."*
(Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)

**Protocol for Component Cleanup:**
```javascript
useEffect(() => {
  let ctx = gsap.context(() => {
    // Animations here
  }, ref);
  return () => ctx.revert();  // Automatic cleanup:
  // - Kills all tweens/timelines
  // - Reverts inline styles
  // - Kills ScrollTriggers
  // - Removes event listeners added via GSAP utils
}, []);
```

**3. Reinitial initialization Pattern:**

For components that mount/unmount frequently:
- Cleanup must be thorough (ctx.revert())
- Re-initialization starts fresh (no stale state)
- Scroll position reset if needed (window.scrollTo(0,0))

**Cleanup Checklist (from Section 3.7):**
- ✓ Kill all ScrollTriggers created by this component
- ✓ Kill all tweens/timelines
- ✓ Revert inline styles (prevents style pollution)
- ✓ Remove event listeners
- ✓ Unpin any pinned elements
- ✓ Clear any stored references

</phase>

<phase n="2" title="Adaptation-Specific Cleanup Plan" required="true">

<action>Build cleanup strategy for this specific adaptation</action>

**Cleanup Strategy for {{pattern_name}} in {{framework}}:**

**1. Animations to Clean Up:**
<action>List all animations from pattern that need cleanup</action>
- {{animation_1}} → {{cleanup_method_1}}
- {{animation_2}} → {{cleanup_method_2}}
- {{animation_3}} → {{cleanup_method_3}}

**2. ScrollTriggers to Kill:**
<check if="pattern uses ScrollTrigger">
- ScrollTrigger instances: {{scrolltrigger_count}}
- Pinned elements: {{pinned_elements}}
- Cleanup method: {{scrolltrigger_cleanup_method}}
</check>

**3. Event Listeners to Remove:**
<check if="pattern uses event listeners">
- {{event_listener_1}} → Remove on cleanup
- {{event_listener_2}} → Remove on cleanup
</check>

**4. Framework-Specific Cleanup:**
<check if="framework == 'react' OR framework == 'nextjs'">
**React Cleanup:**
```javascript
return () => {
  ctx.revert();  // Handles all GSAP cleanup automatically
};
```
</check>

<check if="framework == 'vue'">
**Vue Cleanup:**
```javascript
onUnmounted(() => {
  ctx && ctx.revert();
});
```
</check>

<check if="framework == 'vanilla'">
**Vanilla Cleanup:**
```javascript
// Store cleanup function
function cleanupAnimation() {
  ScrollTrigger.getAll().forEach(t => t.kill());
  gsap.globalTimeline.clear();
}

// Call on route change or when needed
cleanupAnimation();
```
</check>

</phase>

<checkpoint type="approval-gate" blocking="true">
<action>Display complete cleanup strategy</action>

**Cleanup/Lifecycle Protocol Complete:**

```markdown
## Cleanup Strategy (Deep-Research Section 3.7)

**Framework:** {{framework}}
**Cleanup Method:** {{cleanup_method}}

**What Gets Cleaned:**
1. {{cleanup_item_1}}
2. {{cleanup_item_2}}
3. {{cleanup_item_3}}

**Implementation:**
{{cleanup_code_pattern}}
```

<ask>**Cinematographer:** "Cleanup protocol established. Hand off to VFX Artist for implementation? [c] to continue"</ask>

<mandate>Agent CANNOT proceed until user explicitly continues</mandate>
<mandate>This gate ensures cleanup is planned before implementation begins</mandate>
</checkpoint>

</research-gate>

<template-output>cleanup_strategy, cleanup_code_pattern, animations_to_cleanup, scrolltriggers_to_kill</template-output>
</step>

---

<step n="5" goal="VFX Artist: Adapt Pattern to Target Context">
<action>VFX Artist takes over implementation using research-backed protocols</action>

**VFX Artist speaks:**

**"Alright, let me adapt this pattern to your {{framework}} project with proper framework integration and cleanup..."**

**Implementation Strategy:**

**Phase 1: Setup and Imports**

<action>Generate framework-specific imports and setup code</action>

<check if="framework == 'react' OR framework == 'nextjs'">
```javascript
// {{framework}} Imports
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
{{#each required_plugins}}
import { {{this}} } from 'gsap/{{this}}';
{{/each}}

// Register plugins
{{#each required_plugins}}
gsap.registerPlugin({{this}});
{{/each}}

// Component setup
function {{component_name}}() {
  const containerRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animation code here (Phase 2)
    }, containerRef);

    return () => ctx.revert();  // Cleanup (Deep-Research Section 3.7)
  }, []);

  return (
    <div ref={containerRef}>
      {/* Target elements */}
    </div>
  );
}
```
</check>

<check if="framework == 'vue'">
```javascript
// Vue 3 Composition API Imports
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
{{#each required_plugins}}
import { {{this}} } from 'gsap/{{this}}';
{{/each}}

// Register plugins
{{#each required_plugins}}
gsap.registerPlugin({{this}});
{{/each}}

export default {
  setup() {
    const container = ref(null);
    let ctx;

    onMounted(() => {
      ctx = gsap.context(() => {
        // Animation code here (Phase 2)
      }, container.value);
    });

    onUnmounted(() => {
      ctx && ctx.revert();  // Cleanup (Deep-Research Section 3.7)
    });

    return { container };
  }
}
```
</check>

<check if="framework == 'vanilla'">
```javascript
// Vanilla JavaScript Setup
import gsap from 'gsap';
{{#each required_plugins}}
import { {{this}} } from 'gsap/{{this}}';
{{/each}}

// Register plugins
{{#each required_plugins}}
gsap.registerPlugin({{this}});
{{/each}}

// Animation initialization
function initAnimation() {
  // Animation code here (Phase 2)
}

// Cleanup function (call on route change if SPA)
function cleanupAnimation() {
  ScrollTrigger.getAll().forEach(t => t.kill());
  gsap.globalTimeline.clear();
}

// Initialize
initAnimation();
```
</check>

**Phase 2: Adapt Base Pattern Code**

<action>Adapt base pattern code to target context with customizations</action>

**Base Pattern (Original):**
```javascript
{{base_pattern_code}}
```

**Adapted Pattern ({{framework}} + Target Context):**

<action>Apply adaptations:</action>
1. Update selectors: {{original_selectors}} → {{target_selectors}}
2. Apply customizations: {{customizations}}
3. Framework-specific adjustments: {{framework_adjustments}}
4. Add cleanup hooks: Deep-Research Section 3.7 protocols

```javascript
{{adapted_pattern_code}}
```

**Phase 3: GPU Optimization**

<action>Ensure GPU-accelerated properties (transform/opacity only)</action>

<action>Audit adapted code for layout-triggering properties:</action>

**GPU-Friendly Properties Used:**
- ✓ x, y, rotation, scale (transform properties)
- ✓ opacity
- ✓ z (for 3D transforms if needed)

**Avoided Layout-Triggering Properties:**
- ✗ top, left, right, bottom (replaced with x, y)
- ✗ width, height (replaced with scale if needed)
- ✗ margin, padding (avoided or set initially only)

<check if="using will-change">
**will-change Usage:**
- Elements: {{will_change_elements}}
- Properties: {{will_change_properties}}
- Note: Remove after animation completes (avoids memory overhead)
</check>

**Phase 4: Accessibility Fallback**

<action>Add prefers-reduced-motion fallback (MANDATORY)</action>

```javascript
// prefers-reduced-motion support (MANDATORY for production)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Set final state immediately (no animation)
  gsap.set({{target_elements}}, {
    {{final_state_properties}}
  });
} else {
  // Full animation
  {{animation_code}}
}
```

**Phase 5: Complete Implementation Code**

<action>Generate final production-ready code with all protocols applied</action>

**Complete Implementation:**

```{{framework}}
{{complete_implementation_code}}
```

**Key Features:**
- ✓ Framework integration (Deep-Research Section 2.5)
- ✓ Proper cleanup (Deep-Research Section 3.7)
- ✓ GPU-accelerated properties
- ✓ prefers-reduced-motion fallback
- ✓ Inline comments explaining key decisions
- ✓ Production-ready quality

<template-output>setup_code, adapted_pattern_code, cleanup_code, accessibility_code, complete_implementation_code</template-output>
</step>

---

<step n="6" goal="VFX Artist: Integration Guide">
<action>VFX Artist creates integration guide for target codebase</action>

**VFX Artist speaks:**

**"Here's how to integrate this into your project..."**

**Integration Steps:**

**Step 1: Install Dependencies**

<action>Generate installation commands based on framework and plugins</action>

```bash
# Install GSAP + required plugins
{{installation_commands}}
```

<check if="framework == 'react' OR framework == 'nextjs'">
```bash
npm install gsap {{#each required_plugins}}gsap-{{this}} {{/each}}
# or
yarn add gsap {{#each required_plugins}}gsap-{{this}} {{/each}}
```
</check>

**Step 2: Import in Your File**

<action>Provide import examples for target framework</action>

```{{framework}}
{{import_example}}
```

**Step 3: Add to Component/Page**

<action>Provide component integration example</action>

<check if="framework == 'react' OR framework == 'nextjs'">
```jsx
// Example integration in {{target_context}}

import {{component_name}} from './{{component_file}}';

function {{parent_component}}() {
  return (
    <div>
      {/* Other content */}
      <{{component_name}} />
      {/* Other content */}
    </div>
  );
}
```
</check>

<check if="framework == 'vanilla'">
```javascript
// Example integration in {{target_context}}

import { initAnimation, cleanupAnimation } from './animation.js';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initAnimation();
});

// Cleanup on route change (if SPA)
router.on('beforeNavigate', () => {
  cleanupAnimation();
});
```
</check>

**Step 4: Configure Target Elements**

**HTML Structure Required:**

```html
{{target_html_structure}}
```

**CSS Requirements (if any):**

```css
{{required_css}}
```

**Step 5: Testing Checklist**

**Before Shipping, Test:**

- [ ] Animation runs smoothly (target: 60fps)
- [ ] No console errors or warnings
- [ ] GSAP plugins load correctly (check Network tab)
- [ ] Works on window resize/orientation change
- [ ] Mobile performance acceptable
- [ ] prefers-reduced-motion fallback works (test with OS setting)
- [ ] Cleanup prevents memory leaks (test mount/unmount cycles)
- [ ] Framework lifecycle hooks respected (no double animations)
- [ ] Browser compatibility (Chrome, Firefox, Safari minimum)
- [ ] Keyboard accessibility (if interactive elements)

<template-output>installation_commands, import_example, integration_guide, target_html_structure, testing_checklist</template-output>
</step>

---

<step n="7" goal="Tech Director: Quick Validation (Optional - Phase 2)" optional="true">
<check if="tech_director_available AND chrome_devtools_available">
<action>Tech Director performs quick validation using Chrome DevTools MCP</action>

**Tech Director speaks:**

**"Let me run some quick checks via Chrome DevTools..."**

**Validation Protocol:**

**1. Visual Validation**

<action>Use Chrome DevTools MCP: take_screenshot</action>
<action>Capture animation state before/during/after</action>

**Screenshots Captured:**
- Before animation: {{screenshot_before}}
- Mid-animation: {{screenshot_mid}}
- After animation: {{screenshot_after}}

**Visual Assessment:**
- ✓ Elements positioned correctly
- ✓ Animation visually matches expected behavior
- ✓ No visual glitches or artifacts

**2. Console Check**

<action>Use Chrome DevTools MCP: list_console_messages</action>

**Console Status:**
- Errors: {{console_errors_count}}
- Warnings: {{console_warnings_count}}
- GSAP-specific issues: {{gsap_console_issues}}

<check if="console_errors_count > 0">
**⚠️ Console Errors Detected:**
{{console_errors_list}}

**Recommended Action:** Debug errors before shipping
</check>

**3. Quick Performance Check**

<action>Use Chrome DevTools MCP: evaluate_script to get FPS estimate</action>

**Estimated Performance:**
- FPS: {{estimated_fps}} (target: 60fps)
- Frame drops: {{frame_drops}} (target: 0)
- Paint time estimate: {{paint_time}}ms (target: <10ms)

<check if="estimated_fps < 55">
**⚠️ Performance Issue Detected:**
FPS below 55fps. Recommend running optimize-performance workflow.
</check>

**4. Cleanup Verification**

<action>Verify cleanup implementation</action>

**Cleanup Checklist:**
- ✓ ctx.revert() or equivalent present
- ✓ ScrollTrigger.kill() called on unmount
- ✓ Event listeners removed
- ✓ Framework lifecycle cleanup implemented

**Validation Summary:**

```markdown
## Tech Director Validation

**Visual:** {{visual_validation_status}}
**Console:** {{console_status}}
**Performance:** {{performance_rating}} ({{estimated_fps}}fps)
**Cleanup:** {{cleanup_verification_status}}

**Overall Rating:** {{overall_rating}}
```

<template-output>validation_results, console_status, estimated_fps, performance_rating, cleanup_verification_status</template-output>
</check>

<check if="NOT tech_director_available">
<action>Skip validation - Tech Director not yet available in Phase 1</action>
<action>Provide manual validation checklist instead</action>

**Manual Validation Recommended:**

Use the testing checklist from Step 6 to manually validate:
- Visual correctness
- Console errors
- Performance (Chrome DevTools Performance tab)
- Cleanup (test component mount/unmount)

Tech Director automated validation will be available in Phase 2.
</check>
</step>

---

<step n="8" goal="Director: Present Complete Implementation">
<action>Director presents final implementation with research citations</action>

**Director speaks:**

**"Implementation complete! Here's your production-ready code with full research backing."**

<action>Generate final implementation document using template.md</action>
<action>Save to output file: {{default_output_file}}</action>

**Implementation Summary:**

```markdown
## {{pattern_name}} - Adapted for {{framework}}

**Pattern Source:** {{pattern_source}}
**Target Context:** {{target_context}}
**Framework:** {{framework}}
**GSAP Version:** {{gsap_version}}
**Plugins Required:** {{required_plugins}}

**Research Foundation:**
✓ Deep-Research Section 2.5 (Framework Integration)
✓ Deep-Research Section 3.7 (Cleanup/Lifecycle)
✓ Archon MCP Sources: {{archon_sources_consulted}}

**Quality Gates Passed:**
✓ Pattern analysis complete
✓ Framework integration research-backed
✓ Cleanup protocol research-backed
✓ GPU optimization applied
✓ Accessibility fallback included
✓ Production-ready code quality
```

**Next Steps:**

<ask>What would you like to do next?

1. **Test** - Copy code and test in your project
2. **Optimize** - Run optimize-performance workflow (if performance issues)
3. **Debug** - Run debug-animation workflow (if bugs arise)
4. **Library** - Add successful implementation to pattern library
5. **Done** - Implementation complete

Enter choice [1-5]:</ask>

<template-output>final_implementation, implementation_summary, next_action</template-output>
</step>

---

<step n="9" goal="Optional: Add to Pattern Library" optional="true">
<ask>Was this implementation successful? Add to pattern library for future reuse? [y/n]</ask>

<check if="user_approves">
<action>Director facilitates pattern library addition</action>

**Director speaks:**

**"Great! Let me save this to the pattern library for quick reuse..."**

**Pattern Library Entry:**

<action>Generate pattern.yaml file</action>

```yaml
id: pattern-{{uuid}}
name: "{{pattern_name}}"
category: "{{pattern_category}}"
complexity: "{{complexity}}"
framework: "{{framework}}"
gsap_version: "{{gsap_version}}"
plugins_required:
{{#each required_plugins}}
  - {{this}}
{{/each}}

description: |
  {{pattern_description}}

code_example: |
  {{complete_implementation_code}}

framework_variations:
  {{framework}}:
    code: |
      {{framework_specific_code}}
    notes: "{{framework_notes}}"

performance_notes: |
  - GPU-accelerated properties (transform/opacity)
  - Estimated FPS: {{estimated_fps}}
  - {{performance_notes}}

accessibility_notes: |
  - prefers-reduced-motion fallback included
  - {{accessibility_notes}}

created_date: "{{date}}"
success_count: 1
tags:
  - {{tag_1}}
  - {{tag_2}}
  - {{tag_3}}

research_backing:
  - "Deep-Research Section 2.5 (Framework Integration)"
  - "Deep-Research Section 3.7 (Cleanup/Lifecycle)"
  - "Archon MCP: {{archon_sources}}"
```

<action>Save to: {pattern_library}/{{pattern_name}}.pattern.yaml</action>
<action>Update pattern library index</action>

**"Pattern added to library! Available for quick implementation next time."**

<template-output>pattern_library_entry, pattern_library_path</template-output>
</check>

<check if="user_declines">
<action>Skip pattern library addition</action>

**"No problem. Pattern not added to library."**
</check>
</step>

</workflow>

---

## Multi-Agent Coordination Notes

**Agent Handoffs:**

1. **Director → Cinematographer (Step 1 → Step 2):**
   - Passes: pattern_source, pattern_identifier, target_context, framework, customizations
   - Receives: pattern_details, adaptation_strategy, framework_integration_protocol, cleanup_strategy

2. **Cinematographer → VFX Artist (Step 4 → Step 5):**
   - Passes: All research findings, protocols, cleanup strategy
   - Receives: Complete implementation code, integration guide

3. **VFX Artist → Tech Director (Step 6 → Step 7 - Optional):**
   - Passes: Implementation code, target context
   - Receives: Validation results, optimization suggestions

4. **Tech Director → Director (Step 7 → Step 8):**
   - Passes: Validation results
   - Receives: Final presentation to user

**Context Preservation:**

All agents have access to:
- pattern_source, pattern_identifier
- target_context, framework, customizations
- Research findings from Deep-Research Sections 2.5 + 3.7
- Pattern details, GSAP features, required plugins
- Framework integration protocols
- Cleanup strategies
- Performance considerations
- Accessibility requirements

**Research Enforcement:**

The three MANDATORY research gates ensure:
1. **Pattern is understood** before adaptation (Step 2 - Pattern Analysis)
2. **Framework integration is research-backed** (Step 3 - Section 2.5)
3. **Cleanup is research-backed** (Step 4 - Section 3.7)

These gates CANNOT be skipped - user must explicitly continue at each checkpoint.

---

## Quality Standards

**Code Quality:**
- Production-ready with inline comments
- Proper cleanup to prevent memory leaks (Deep-Research Section 3.7)
- Framework integration follows best practices (Deep-Research Section 2.5)
- TypeScript types if applicable
- No TODO comments or placeholders

**Performance:**
- GPU acceleration (transform/opacity only)
- will-change properties used correctly
- No layout thrashing
- 60fps target on mid-range devices

**Accessibility:**
- prefers-reduced-motion fallback REQUIRED
- Keyboard accessibility if interactive
- Focus management if applicable
- ARIA attributes if needed

**Research Backing:**
- All framework integration backed by Deep-Research Section 2.5
- All cleanup backed by Deep-Research Section 3.7
- Pattern selection backed by library or Archon MCP research
- Citations document sources consulted

---

## Success Metrics

- ✅ Pattern successfully adapted to target context
- ✅ Framework integration research-backed (Section 2.5)
- ✅ Cleanup research-backed (Section 3.7)
- ✅ Code compiles/runs without errors
- ✅ Cleanup prevents memory leaks
- ✅ Accessibility fallback works
- ✅ GPU optimization applied
- ✅ User satisfied with implementation
- ✅ Estimated 70%+ success rate on first try (improved from 60% MVP goal)
