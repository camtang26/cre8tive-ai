# Research GSAP Pattern Workflow Instructions
# Deep dive research into specific GSAP technique - CINEMATOGRAPHER PRIMARY WORKFLOW

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/research-gsap-pattern/workflow.yaml</critical>

<workflow>

<step n="1" goal="Define Research Scope and Load Deep-Research Knowledge Base">
<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

<action>Cinematographer greets {user_name} and introduces the research workflow with precision</action>

**"{user_name}, I'm The Cinematographer - your multi-source research specialist. I'll find you the BEST GSAP patterns backed by 2.2M+ words of research."**

<ask response="pattern_name">What GSAP technique or pattern should I research?

**Examples:**
- Scroll animations: "parallax scrolling", "scroll-triggered reveals", "sticky scroll sections"
- Text animations: "text split reveal", "text scramble effect", "typewriter animation"
- SVG animations: "SVG morph", "DrawSVG path animation", "SVG icon animation"
- Timeline choreography: "staggered grid reveal", "sequential timeline", "complex sequence"
- Micro-interactions: "button hover", "card flip", "smooth state transitions"
- 3D/WebGL: "3D card flip", "GSAP + Three.js integration", "WebGL scroll sync"
- Other: Describe your specific pattern

(Be specific - this helps me find the most relevant research)
</ask>

<ask response="use_case">What's your specific use case or context? (Optional - helps focus research)

**Examples:**
- "Hero section animation for SaaS landing page"
- "Product showcase for e-commerce site"
- "Portfolio project transitions"
- "Marketing campaign microsite"
- "General learning and experimentation"
</ask>

<ask response="complexity_preference">Complexity preference?

[1] Simple - Basic implementations, easy to understand
[2] Medium - Intermediate techniques, some advanced features
[3] Advanced - Complex implementations, premium techniques
[4] All - Full range from basic to advanced (RECOMMENDED)

Default: All
</ask>

<action>Confirm understanding and formulate research strategy</action>

**Research Focus Confirmed:**
- **Pattern:** {{pattern_name}}
- **Context:** {{use_case}}
- **Complexity:** {{complexity_preference}}

**Research Protocol:** Multi-source systematic approach
- **Tier 1 PRIMARY:** Archon MCP (5 priority sources) + Deep-Research (20 universal sections)
- **Tier 2 GAP FILLING:** WebSearch (2024-2025 trends, premium examples)
- **Tier 3 MINIMAL:** Context7 (only for API verification if needed)

<template-output>pattern_name, use_case, complexity_preference</template-output>
</step>

<step n="2" goal="MANDATORY Deep-Research Knowledge Load - BLOCKING GATE">
<critical>RESEARCH ENFORCEMENT: This gate is MANDATORY and BLOCKING. You CANNOT skip to Step 3 until ALL Deep-Research sections are loaded and applied.</critical>

**⚠️ DEEP-RESEARCH VALIDATION GATE (MANDATORY)**

This is NOT optional research. This is MANDATORY expertise loading from the 2.2M+ word Deep-Research knowledge base.

**You MUST load ALL 20 universal sections that apply to EVERY GSAP pattern:**
- Performance sections (5.1-5.6): GPU rules, 60fps targets, jank debugging
- Accessibility sections (6.1-6.4): prefers-reduced-motion (MANDATORY), keyboard nav, focus management
- Common Pitfalls (8.1-8.10): ALL 10 pitfalls that apply to ANY GSAP animation

<research-gate enforcement="MANDATORY" blocking="true">

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!-- PERFORMANCE SECTIONS (5.1-5.6) - GPU ACCELERATION & 60FPS           -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<phase n="1" title="Deep-Research Section 5.1 - GPU Rule (CRITICAL)" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/18-51-animate-efficient-properties-the-gpu-rule.md

**Extract and apply GPU acceleration principles:**

**Core Principle - The GPU Rule:**
Only animate properties that can be GPU-accelerated. Layout-triggering properties cause massive performance degradation.

**GPU-Accelerated Properties (ALWAYS USE THESE):**
- `transform`: x, y, scale, rotate, skewX, skewY, rotateX, rotateY, rotateZ, scaleX, scaleY, z, perspective
- `opacity`
- `filter` (use cautiously - can be expensive)

**Layout-Triggering Properties (NEVER ANIMATE THESE):**
- Position: `top`, `left`, `right`, `bottom`
- Dimensions: `width`, `height`
- Spacing: `margin`, `padding`
- Typography: `font-size`, `line-height`

**Why This Matters:**
Animating layout properties forces the browser to recalculate layout on every frame, potentially affecting many elements. This is VERY slow and causes jank.

**Key Insight - will-change Property:**
Use `will-change: transform, opacity` to hint the browser to create a layer, but use sparingly. Too many layers (>10 on mobile) can cause performance degradation.

**Pattern-Specific Application:**
For {{pattern_name}}, ensure all animations use `transform` (x, y, scale, rotate) and `opacity` only. If the pattern requires layout changes, use `transform: scale()` instead of `width/height`.

</phase>

<phase n="2" title="Deep-Research Section 5.2 - Main Thread" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/19-52-keep-the-main-thread-free-avoid-long-tasks.md

**Extract and apply main thread optimization:**

**Core Principle - 16ms Frame Budget:**
At 60fps, each frame has a 16ms budget. Keep JavaScript execution under this budget to avoid dropped frames.

**Main Thread Optimization Strategies:**
1. **Minimize JavaScript during animations** - Heavy calculations should happen BEFORE or AFTER animations, not during
2. **Use RequestAnimationFrame** for custom calculations that sync with animations
3. **Offload heavy work to Web Workers** if needed
4. **Batch DOM reads** before writes (avoid layout thrashing)

**Pattern-Specific Application:**
For {{pattern_name}}, profile JavaScript execution during animation. Ensure no JavaScript tasks exceed 16ms. If complex calculations are needed (e.g., dynamic positioning), cache values before animating.

</phase>

<phase n="3" title="Deep-Research Section 5.3 - Debugging Jank" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md

**Extract and apply jank debugging protocol:**

**Chrome DevTools Performance Tab Protocol:**
1. **Start recording** → Trigger animation → Stop recording
2. **Look for:**
   - Red triangles (forced reflows / layout thrashing)
   - Long tasks (>50ms yellow blocks)
   - Frame drops (gaps in frame timing)
3. **Identify bottlenecks:**
   - Purple bars = Rendering (paint, composite)
   - Yellow bars = JavaScript execution
   - Long purple bars after style changes = Layout thrashing

**Common Jank Causes:**
- Animating layout properties (top, left, width, height)
- Reading layout properties (offsetWidth, getBoundingClientRect) during animation
- Forced synchronous layouts (read → write → read pattern)

**Pattern-Specific Application:**
For {{pattern_name}}, use Chrome DevTools to profile a test implementation. Identify any forced reflows or long tasks. Document performance characteristics for users implementing this pattern.

</phase>

<phase n="4" title="Deep-Research Section 5.4 - Memory Management" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/21-54-memory-management-garbage-collection.md

**Extract and apply memory management protocols:**

**Core Principle - Always Clean Up:**
GSAP animations must be explicitly killed when no longer needed, especially in SPAs with component lifecycles.

**Cleanup Protocols:**
```javascript
// Kill individual tweens/timelines
timeline.kill();
tween.kill();

// Kill all ScrollTriggers
ScrollTrigger.getAll().forEach(st => st.kill());

// React cleanup example
useEffect(() => {
  const tl = gsap.timeline();
  // ... animation setup

  return () => tl.kill(); // Cleanup on unmount
}, []);
```

**Memory Leak Detection:**
Use Chrome DevTools → Memory tab → Heap snapshots to detect orphaned animations after component unmount.

**Pattern-Specific Application:**
For {{pattern_name}}, document proper cleanup patterns. If using ScrollTrigger, ensure all triggers are killed. If in React/Vue/framework context, provide lifecycle cleanup examples.

</phase>

<phase n="5" title="Deep-Research Section 5.5 - 60fps Optimization" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md

**Extract and apply 60fps optimization strategies:**

**Core Target - Sustained 60fps:**
- **Desktop:** 60fps minimum (55fps+ acceptable)
- **Mobile/Mid-range:** 60fps target, 30fps minimum acceptable
- **Low-end devices:** Test with 4x CPU throttle in Chrome DevTools

**Optimization Checklist:**
1. ✅ Animate only `transform` and `opacity`
2. ✅ Use `will-change` sparingly (<10 layers)
3. ✅ Simplify animations if dropping frames
4. ✅ Profile with CPU throttle (4x slowdown)
5. ✅ Monitor paint time (<10ms per frame ideal)

**Performance Budget:**
- Frame budget: 16ms @ 60fps
- JavaScript: <8ms per frame
- Paint: <10ms per frame
- Composite: <2ms per frame

**Pattern-Specific Application:**
For {{pattern_name}}, establish performance targets. Document expected FPS on desktop vs mobile. If pattern is performance-intensive, provide optimization guidance (e.g., reduce stagger count, simplify easing).

</phase>

<phase n="6" title="Deep-Research Section 5.6 - WebGL/Canvas Alternatives" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/23-56-when-to-use-webglcanvas.md

**Extract and apply WebGL/Canvas decision framework:**

**When to Consider WebGL/Canvas:**
- Animating 100+ elements simultaneously
- Particle systems or complex visual effects
- 3D transformations and perspectives
- Custom rendering requirements

**GSAP + WebGL/Canvas Integration:**
GSAP can animate WebGL/Canvas properties. Use GSAP for timing/easing, render in WebGL/Canvas for performance.

**Pattern-Specific Application:**
For {{pattern_name}}, assess if WebGL/Canvas would be beneficial. If animating many elements (>100), recommend canvas-based approach. Otherwise, DOM-based GSAP is simpler and more maintainable.

</phase>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!-- ACCESSIBILITY SECTIONS (6.1-6.4) - MANDATORY WCAG COMPLIANCE        -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<phase n="7" title="Deep-Research Section 6.1 - prefers-reduced-motion (MANDATORY)" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/24-61-respecting-prefers-reduced-motion.md

**Extract and apply prefers-reduced-motion protocol:**

**CRITICAL ACCESSIBILITY REQUIREMENT:**
WCAG 2.1 Guideline 2.3.3 requires respecting `prefers-reduced-motion`. This is NOT optional.

**Implementation Pattern (MANDATORY for ALL GSAP animations):**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Option 1: Instant state changes (NO animation)
  gsap.set(element, { opacity: 1, y: 0 });

  // Option 2: Very subtle, slow fades only
  gsap.to(element, { opacity: 1, duration: 0.3, ease: 'none' });
} else {
  // Full animation for users who can handle motion
  gsap.to(element, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
}
```

**What Reduced Motion Means:**
- NO parallax effects
- NO scale/rotation transforms
- NO rapid movements
- Subtle fades OK (slow, <500ms)
- Instant state changes preferred

**Pattern-Specific Application:**
For {{pattern_name}}, provide a complete `prefers-reduced-motion` fallback. Document what the reduced motion version does (instant vs subtle fade).

</phase>

<phase n="8" title="Deep-Research Section 6.2 - Other Accessibility Considerations" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/25-62-other-motion-accessibility-considerations.md

**Extract and apply additional accessibility requirements:**

**Seizure Prevention (WCAG 2.3.1):**
- NO flashing more than 3 times per second
- NO rapid color changes
- NO strobe-like effects

**Keyboard Navigation:**
- Animations must NOT block keyboard interaction
- Focus states must remain visible during animations
- Tab order must remain logical

**Screen Reader Support:**
- Use ARIA live regions for state changes
- Announce significant visual changes
- Don't rely solely on animation to convey information

**User Interaction:**
- Animations must NOT block user input
- Clickable elements must be clickable during animation
- Forms must be usable immediately

**Pattern-Specific Application:**
For {{pattern_name}}, ensure keyboard navigation works during animation. If the pattern includes interactive elements, verify they remain interactive. Add ARIA announcements if animation conveys important state changes.

</phase>

<phase n="9" title="Deep-Research Section 6.3 - Styling Considerations" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/26-63-styling-considerations-for-motion.md

**Extract and apply styling best practices:**

**Color Contrast During Animation:**
- Maintain WCAG AA contrast ratios (4.5:1 text, 3:1 UI)
- Don't fade text below readable contrast
- Ensure brand colors remain accessible

**Text Readability:**
- Don't animate text while user is reading
- Avoid animating critical UI during loading
- Keep text stationary during interaction

**Pattern-Specific Application:**
For {{pattern_name}}, verify color contrast is maintained throughout animation. If animating text, ensure it's readable at all animation stages.

</phase>

<phase n="10" title="Deep-Research Section 6.4 - User Control" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/27-64-educate-users-and-offer-control.md

**Extract and apply user control requirements:**

**For Long Animations (>5 seconds):**
- Provide pause/play controls
- Provide skip button
- Respect browser play/pause commands

**For Intro Animations:**
- Allow users to skip
- Don't block page functionality
- Provide "Skip intro" button

**OS-Level Preferences:**
- Always respect `prefers-reduced-motion`
- Honor browser animation settings
- Provide settings UI for user control

**Pattern-Specific Application:**
For {{pattern_name}}, if the animation is long (>5s) or blocking, provide user controls. Document how users can pause/skip the animation.

</phase>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!-- COMMON PITFALLS (8.1-8.10) - ALL 10 PITFALLS THAT APPLY TO ANY PATTERN -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<phase n="11" title="Deep-Research Section 8.1 - Pitfall: Forgetting Cleanup" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/34-pitfall-81-forgetting-to-clean-up-memory-leaks-double-animations.md

**Extract and apply cleanup protocols:**

**The Problem:**
Forgetting to kill GSAP animations leads to:
- Memory leaks (animations run in background)
- Double animations (new animation + old orphaned animation)
- Performance degradation over time

**The Solution - Always Kill on Unmount:**
```javascript
// React example
useEffect(() => {
  const tl = gsap.timeline();
  tl.to(element, { ... });

  return () => {
    tl.kill(); // CRITICAL: Kill on unmount
  };
}, []);

// Vue example
onUnmounted(() => {
  timeline.kill();
  ScrollTrigger.getAll().forEach(st => st.kill());
});
```

**Pattern-Specific Check:**
For {{pattern_name}}, verify cleanup is documented. If using ScrollTrigger, ensure `ScrollTrigger.kill()` is called. If in SPA context, provide framework-specific cleanup examples.

</phase>

<phase n="12" title="Deep-Research Section 8.2 - Pitfall: Animating Wrong Properties" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/35-pitfall-82-animating-the-wrong-properties-no-gpu-acceleration.md

**Extract and apply GPU property enforcement:**

**The Problem:**
Animating `top`, `left`, `width`, `height` triggers layout recalculation on every frame, causing severe jank.

**The Solution - Use Transform Instead:**
```javascript
// ❌ BAD - Triggers layout
gsap.to(element, { top: 100, left: 200, width: 300 });

// ✅ GOOD - GPU accelerated
gsap.to(element, { y: 100, x: 200, scale: 1.5 });
```

**Common Mistakes:**
- Using `left/top` instead of `x/y`
- Using `width/height` instead of `scale`
- Animating `margin` or `padding`

**Pattern-Specific Check:**
For {{pattern_name}}, audit all animated properties. Replace any layout-triggering properties with `transform` equivalents. Document the GPU-friendly approach prominently.

</phase>

<phase n="13" title="Deep-Research Section 8.3 - Pitfall: immediateRender" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/36-pitfall-83-ignoring-in-from-tweens.md

**Extract and apply immediateRender handling:**

**The Problem:**
`from()` tweens apply styles immediately (before animation starts), causing flicker.

**The Solution:**
```javascript
// ❌ BAD - Flickers because styles apply immediately
gsap.from(element, { opacity: 0, y: 50 });

// ✅ GOOD - Set immediateRender: false OR use fromTo()
gsap.from(element, { opacity: 0, y: 50, immediateRender: false });

// ✅ BETTER - Explicit control with fromTo()
gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
```

**Pattern-Specific Check:**
For {{pattern_name}}, if using `from()` tweens, set `immediateRender: false` or use `fromTo()`. Document the flicker issue and correct approach.

</phase>

<phase n="14" title="Deep-Research Section 8.4 - Pitfall: Multiple ScrollTriggers" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/37-pitfall-84-multiple-scrolltriggers-on-the-same-elements-property.md

**Extract and apply ScrollTrigger best practices:**

**The Problem:**
Multiple ScrollTriggers on the same element animating the same property causes conflicts.

**The Solution:**
One ScrollTrigger per element (usually). If multiple triggers are needed, animate different properties or use timeline sequencing.

**Pattern-Specific Check:**
For {{pattern_name}}, if using ScrollTrigger, ensure only ONE trigger per element. If pattern requires multiple scroll-driven animations, use a single ScrollTrigger with a timeline.

</phase>

<phase n="15" title="Deep-Research Section 8.5 - Pitfall: Not Using overwrite" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/38-pitfall-85-not-using-leading-to-conflict.md

**Extract and apply overwrite mode:**

**The Problem:**
Multiple animations on the same property conflict without `overwrite` mode.

**The Solution:**
```javascript
// Use overwrite: "auto" to intelligently overwrite conflicting properties
gsap.to(element, { x: 100, overwrite: "auto" });

// Or overwrite: true to kill ALL animations on that element
gsap.to(element, { x: 100, overwrite: true });
```

**Pattern-Specific Check:**
For {{pattern_name}}, if the pattern involves multiple animations triggered by user interaction, use `overwrite: "auto"` to prevent conflicts.

</phase>

<phase n="16" title="Deep-Research Section 8.6 - Pitfall: Missing refresh()" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/39-pitfall-86-overlooking-refresh-after-content-load.md

**Extract and apply ScrollTrigger refresh protocol:**

**The Problem:**
ScrollTrigger caches positions on page load. If images/fonts load later, positions are wrong.

**The Solution:**
```javascript
// After images load
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});

// Or use ScrollTrigger's built-in handling
ScrollTrigger.create({
  trigger: element,
  // ... config
  refreshPriority: 1 // Refresh after other triggers
});
```

**Pattern-Specific Check:**
For {{pattern_name}}, if using ScrollTrigger and page has images/fonts, document the need for `ScrollTrigger.refresh()` after content loads.

</phase>

<phase n="17" title="Deep-Research Section 8.7 - Pitfall: Deprecated Syntax" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/40-pitfall-87-use-of-deprecated-or-old-syntax.md

**Extract and apply GSAP 3.x syntax:**

**The Problem:**
Using GSAP 2.x syntax (TweenMax, TimelineMax, etc.) in GSAP 3.x projects.

**The Solution - Use GSAP 3.x Syntax:**
```javascript
// ❌ BAD - GSAP 2.x (deprecated)
TweenMax.to(element, 1, { x: 100 });
TimelineMax.to(element, 1, { opacity: 1 });

// ✅ GOOD - GSAP 3.x
gsap.to(element, { x: 100, duration: 1 });
gsap.timeline().to(element, { opacity: 1, duration: 1 });
```

**Pattern-Specific Check:**
For {{pattern_name}}, ensure ALL code examples use GSAP 3.13+ syntax. Verify `gsap.to()` instead of `TweenMax.to()`, `duration` as property instead of parameter.

</phase>

<phase n="18" title="Deep-Research Section 8.8 - Pitfall: Uncontrolled Loops" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/41-pitfall-88-uncontrolled-infinite-loops.md

**Extract and apply loop cleanup:**

**The Problem:**
Infinite loops (`repeat: -1`) without cleanup run forever, even after component unmount.

**The Solution:**
```javascript
// Always kill infinite loops on cleanup
const tl = gsap.timeline({ repeat: -1 });

// Cleanup
return () => tl.kill();
```

**Pattern-Specific Check:**
For {{pattern_name}}, if pattern uses `repeat: -1`, prominently document cleanup requirements. Provide framework-specific unmount examples.

</phase>

<phase n="19" title="Deep-Research Section 8.9 - Pitfall: Not Testing Devices" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-89-not-testing-on-different-devices.md

**Extract and apply device testing protocol:**

**The Problem:**
Animation works on desktop but fails on mobile (iOS Safari quirks, performance issues).

**The Solution - Test On:**
- **iOS Safari** (primary mobile browser)
- **Android Chrome** (second most common)
- **Desktop Chrome, Firefox, Safari**
- **Use CPU throttle** (4x slowdown) to simulate mid-range devices

**Pattern-Specific Check:**
For {{pattern_name}}, document device compatibility. If performance-intensive, warn about mobile performance and provide optimization tips.

</phase>

<phase n="20" title="Deep-Research Section 8.10 - Pitfall: from() vs fromTo()" required="true">

**Read COMPLETE file:**
Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/43-pitfall-810-misusing-vs-causing-flicker.md

**Extract and apply from() vs fromTo() guidance:**

**The Problem:**
`from()` causes flicker because it applies starting values immediately, even if animation is delayed or paused.

**The Solution - Prefer fromTo() for Explicit Control:**
```javascript
// ❌ FLICKERS - from() applies styles immediately
gsap.from(element, { opacity: 0, delay: 1 });

// ✅ NO FLICKER - fromTo() gives explicit control
gsap.fromTo(element,
  { opacity: 0 },  // FROM
  { opacity: 1, delay: 1 }  // TO
);
```

**Pattern-Specific Check:**
For {{pattern_name}}, prefer `fromTo()` over `from()` in all code examples. If using `from()`, set `immediateRender: false`.

</phase>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!-- RESEARCH VALIDATION CHECKPOINT (BLOCKING)                           -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<checkpoint type="approval-gate" blocking="true">
<action>Display Deep-Research loading summary:</action>

**✅ DEEP-RESEARCH KNOWLEDGE BASE LOADED (20 SECTIONS)**

**Performance Expertise (5.1-5.6):**
- GPU Rule: Only animate transform/opacity
- Main Thread: <16ms frame budget
- Jank Debugging: Chrome DevTools profiling
- Memory Management: Always kill() animations
- 60fps Target: Sustained performance
- WebGL/Canvas: Alternative approaches

**Accessibility Expertise (6.1-6.4):**
- prefers-reduced-motion: MANDATORY fallback
- Keyboard/Screen readers: Maintain usability
- Styling: Maintain contrast during animation
- User Control: Pause/skip for long animations

**Common Pitfalls (8.1-8.10):**
- ✅ Cleanup protocols loaded
- ✅ GPU property enforcement loaded
- ✅ immediateRender handling loaded
- ✅ ScrollTrigger best practices loaded
- ✅ overwrite mode guidance loaded
- ✅ refresh() protocol loaded
- ✅ GSAP 3.x syntax enforcement loaded
- ✅ Loop cleanup protocols loaded
- ✅ Device testing requirements loaded
- ✅ from() vs fromTo() guidance loaded

<ask>Continue with multi-source research? [c]

**YOU CANNOT SKIP THIS GATE. Type 'c' to continue.**
</ask>

<mandate>Agent cannot rationalize skipping - user must explicitly continue</mandate>
</checkpoint>

</research-gate>

</step>

<step n="3" goal="Tier 1A: Archon MCP Systematic Research (5 Priority Sources)">
<critical>KNOWLEDGE SOURCE HIERARCHY: Tier 1 (Archon + Deep-Research) → Tier 2 (WebSearch) → Tier 3 (Context7)</critical>

<action>Cinematographer conducts systematic 5-source Archon research</action>

**"Researching {{pattern_name}} across ALL 5 priority Archon sources..."**

<action>Query ALL 5 Archon sources with pattern-specific searches (execute ALL queries in parallel for speed):</action>

**Source 1: gsap.com Official Docs (PRIMARY - b9f6b322298feb21):**
```
rag_search_knowledge_base("{{pattern_name}} GSAP", source_id="b9f6b322298feb21", match_count=10)
rag_search_knowledge_base("{{pattern_name}} best practices", source_id="b9f6b322298feb21", match_count=8)
rag_search_code_examples("{{pattern_name}} implementation", source_id="b9f6b322298feb21", match_count=10)
rag_search_code_examples("{{pattern_name}} {{use_case}}", source_id="b9f6b322298feb21", match_count=8)
```

**Source 2: Tympanus/Codrops Tutorials (PREMIUM - 1e5cc3bd5125be3c):**
```
rag_search_knowledge_base("{{pattern_name}} tutorial", source_id="1e5cc3bd5125be3c", match_count=8)
rag_search_code_examples("{{pattern_name}} Codrops", source_id="1e5cc3bd5125be3c", match_count=8)
```

**Source 3: FreeFrontend Examples (90c2ef5e8fa816b7):**
```
rag_search_code_examples("{{pattern_name}} examples", source_id="90c2ef5e8fa816b7", match_count=6)
```

**Source 4: CodePen Collections (020e9f31a8c5cdb7):**
```
rag_search_code_examples("{{pattern_name}} CodePen", source_id="020e9f31a8c5cdb7", match_count=6)
```

**Source 5: Lenis Integration (77ae0ef68a867aa9) - IF scroll-related:**
```
<action if="pattern involves scrolling">
rag_search_knowledge_base("{{pattern_name}} smooth scroll", source_id="77ae0ef68a867aa9", match_count=4)
</action>
```

<action>Actively search premium plugin patterns (ALL FREE in GSAP 3.13+!):</action>
```
rag_search_code_examples("ScrollSmoother {{pattern_name}}", match_count=8)
rag_search_code_examples("MorphSVG {{pattern_name}}", match_count=8)
rag_search_code_examples("SplitText {{pattern_name}}", match_count=8)
rag_search_code_examples("DrawSVG {{pattern_name}}", match_count=6)
rag_search_code_examples("MotionPath {{pattern_name}}", match_count=6)
```

<action>Document findings by source with citations:</action>

**Citation Format (MANDATORY):**
```
Pattern: {{pattern_name}}
Archon Sources:
- gsap.com (b9f6b322298feb21): [specific_technique_found]
- Codrops (1e5cc3bd5125be3c): [tutorial_name_found]
- FreeFrontend (90c2ef5e8fa816b7): [example_url]
- CodePen (020e9f31a8c5cdb7): [codepen_url_with_hearts]
- Lenis (77ae0ef68a867aa9): [integration_pattern] (if applicable)
```

<template-output>archon_findings_by_source, archon_code_examples, archon_premium_plugin_patterns, archon_citations</template-output>
</step>

<step n="4" goal="Tier 2: WebSearch for 2024-2025 Premium Examples">
<action>Use WebSearch for cutting-edge implementations and premium inspiration</action>

**"Searching 2024-2025 premium examples for {{pattern_name}}..."**

<action>Execute WebSearch queries for recent premium examples:</action>
```
WebSearch("{{pattern_name}} GSAP Awwwards 2025")
WebSearch("{{pattern_name}} premium animation 2024")
WebSearch("Linear Stripe Vercel {{pattern_name}}")
WebSearch("{{pattern_name}} GSAP tutorial 2025")
```

<action>Target premium agencies and brands:</action>
- Awwwards Site of the Day winners (2024-2025)
- Linear app (GSAP excellence reference)
- Stripe (scroll storytelling patterns)
- Codrops latest tutorials (2024-2025)
- Agency showcases (Lusion, Active Theory, etc.)

<action>Document premium examples found:</action>

**For EACH premium example:**
- Site/Agency name
- URL (if available)
- Award (Awwwards SOTD, FWA, etc.)
- What makes it premium (quality markers)
- GSAP techniques used (observed)
- Takeaways for {{pattern_name}}

<template-output>websearch_premium_examples, websearch_urls, websearch_quality_analysis</template-output>
</step>

<step n="5" goal="Tier 3: Context7 (ONLY if API Verification Needed)">
<action>Use Context7 ONLY if version-specific API questions arise</action>

**"Context7 available for API verification if needed..."**

<check if="API syntax uncertain OR new GSAP 3.13+ feature">
<action>Use Context7 for API verification:</action>
```
resolve-library-id("gsap")
get-library-docs(context7CompatibleLibraryID="/greensock/gsap", topic="{{pattern_name}}", tokens=3000)
```
</check>

<check if="else">
<action>Skip Context7 - Archon already has gsap.com docs</action>
**Context7 not needed - Archon provided sufficient documentation.**
</check>

<template-output>context7_api_verification (if used)</template-output>
</step>

<step n="6" goal="Synthesize Technical Approach (Research-Backed)">
<action>Analyze all research findings and synthesize technical approach</action>

**Analysis Framework:**

**1. Core Technique Overview**
- What is {{pattern_name}} technically?
- How does GSAP enable this pattern?
- What makes this pattern effective?
- (Base on Archon findings + Deep-Research principles)

**2. Implementation Approaches**
- **Simple:** Basic approach (complexity: simple)
  - GSAP features: [list from Archon]
  - Use case: [when to use simple version]
- **Intermediate:** Enhanced approach (complexity: medium)
  - GSAP features: [list from Archon, may include premium plugins]
  - Use case: [when to use intermediate version]
- **Advanced:** Premium approach (complexity: advanced)
  - GSAP features: [full premium plugin usage if applicable]
  - Use case: [when to use advanced version]

**3. Technical Requirements**
- GSAP version minimum (3.13.0+)
- Required plugins (identify from Archon research)
- Browser compatibility (from Deep-Research + testing)
- Performance considerations (from Deep-Research 5.1-5.6)

<template-output>technical_overview, implementation_simple, implementation_intermediate, implementation_advanced, technical_requirements</template-output>
</step>

<step n="7" goal="Extract Code Examples (3-5 Annotated Examples)">
<critical>Provide 3-5 annotated code examples from basic to advanced</critical>

<action>Extract and annotate code examples from Archon research + WebSearch findings</action>

**For EACH code example (minimum 3, maximum 5):**

1. **Example Title** - e.g., "Basic {{pattern_name}}"
2. **Complexity Level** - Simple / Medium / Advanced
3. **Description** - What this demonstrates
4. **Code** - Clean, annotated implementation
5. **GSAP Features** - Which features/plugins used
6. **Performance Notes** - Expected FPS, optimization tips (from Deep-Research 5.5)
7. **Accessibility** - prefers-reduced-motion fallback (from Deep-Research 6.1)
8. **Source** - Archon source ID or WebSearch URL

**Example Structure Template:**
```javascript
// Example: [Example Title] ([Complexity])
// [Description of what this demonstrates]
// GSAP 3.13.0+ | Plugins: [list if any]
// Source: [Archon source ID OR WebSearch URL]

// Performance: [Expected FPS and notes from Deep-Research 5.1-5.6]
// Accessibility: prefers-reduced-motion fallback below

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Instant state change or subtle fade (Deep-Research 6.1)
  gsap.set(element, { /* final state */ });
} else {
  // Full animation
  gsap.to(element, {
    // GPU-accelerated properties only (Deep-Research 5.1)
    x: 100,
    y: 50,
    opacity: 1,
    duration: 1,
    ease: "power2.out", // [Explain easing choice]

    // Cleanup on complete if needed (Deep-Research 8.1)
    onComplete: () => { /* cleanup if needed */ }
  });
}
```

<action>Prioritize Premium Plugin Examples (FREE in 3.13+):</action>
When code examples use ScrollSmoother, MorphSVG, SplitText, DrawSVG, or MotionPath, highlight that these are NOW FREE (were $99/year each).

<action>Ensure examples span simple → advanced range</action>
<action>Annotate WHY choices made (easing, duration, properties)</action>

<template-output>code_example_1, code_example_2, code_example_3, code_example_4, code_example_5</template-output>
</step>

<step n="8" goal="Document Best Practices (Deep-Research Backed)">
<action>Compile best practices using Deep-Research sections 5.1-5.6, 6.1-6.4, 8.1-8.10</action>

**Best Practices for {{pattern_name}} (Research-Backed):**

**Performance (Deep-Research 5.1-5.6):**
- ✅ Animate ONLY `transform` (x, y, scale, rotate) and `opacity` (Section 5.1)
- ✅ Target sustained 60fps on desktop, 30fps minimum on mobile (Section 5.5)
- ✅ Keep JavaScript execution <16ms per frame (Section 5.2)
- ✅ Profile with Chrome DevTools Performance tab (Section 5.3)
- ✅ Always kill() animations on component unmount (Section 5.4)
- ✅ Test with 4x CPU throttle for mid-range devices (Section 5.5)

**Accessibility (Deep-Research 6.1-6.4):**
- ✅ MANDATORY: Implement prefers-reduced-motion fallback (Section 6.1)
- ✅ No flashing >3 times per second (Section 6.2)
- ✅ Maintain keyboard navigation during animation (Section 6.2)
- ✅ Keep color contrast WCAG AA compliant (Section 6.3)
- ✅ Provide pause/skip for animations >5 seconds (Section 6.4)

**Common Pitfalls to Avoid (Deep-Research 8.1-8.10):**
- ❌ Forgetting cleanup → Memory leaks (Section 8.1)
- ❌ Animating top/left/width/height → Jank (Section 8.2)
- ❌ Using from() without immediateRender: false → Flicker (Section 8.3, 8.10)
- ❌ Multiple ScrollTriggers on same element → Conflicts (Section 8.4)
- ❌ No overwrite mode → Animation conflicts (Section 8.5)
- ❌ Missing ScrollTrigger.refresh() → Wrong positions (Section 8.6)
- ❌ Using GSAP 2.x syntax → Deprecated (Section 8.7)
- ❌ Uncontrolled infinite loops → Orphaned animations (Section 8.8)
- ❌ Not testing on iOS Safari → Mobile failures (Section 8.9)

**Code Quality:**
- Use GSAP 3.13+ syntax (Section 8.7)
- Annotate code with performance notes
- Include cleanup protocols (Section 8.1)
- Provide framework-specific examples (React, Vue, etc.)

**Browser Compatibility:**
- Chrome, Firefox, Safari (latest 2 versions)
- iOS Safari (primary mobile concern - Section 8.9)
- Android Chrome (secondary mobile)
- Note any browser-specific quirks found in research

<template-output>performance_best_practices, accessibility_requirements, pitfalls_to_avoid, code_quality_standards, browser_compatibility</template-output>
</step>

<step n="9" goal="Curate Premium Inspiration">
<action>Present premium examples from WebSearch research</action>

**Premium Examples (2024-2025):**

<action>For EACH premium example found (2-4 examples minimum):</action>

**Example: [Site/Agency Name]**
- **URL:** [url if available]
- **Award:** Awwwards SOTD / FWA / Agency Showcase / etc.
- **Year:** 2024 or 2025 (prioritize recent)
- **What Makes It Premium:**
  - [Quality marker 1]
  - [Quality marker 2]
  - [Quality marker 3]
- **GSAP Techniques Observed:**
  - [Technique 1 - e.g., "Timeline choreography with stagger"]
  - [Technique 2 - e.g., "ScrollTrigger scrub for smooth scroll sync"]
  - [Premium plugins if observed - e.g., "SplitText for text reveal"]
- **Takeaways for {{pattern_name}}:**
  - [Applicable lesson 1]
  - [Applicable lesson 2]

<template-output>premium_example_1, premium_example_2, premium_example_3, premium_example_4, premium_inspiration_takeaways</template-output>
</step>

<step n="10" goal="Generate Comprehensive Research Report">
<action>Compile all findings into comprehensive research report using template.md</action>

**"Research complete. Generating comprehensive report..."**

<action>Use template.md structure to generate final research report</action>
<action>Populate ALL template sections with research findings</action>
<action>Save report to: {{default_output_file}}</action>

**Research Report Summary:**

**Sources Consulted:**
- ✅ Archon MCP: 5 priority sources (gsap.com, Codrops, FreeFrontend, CodePen, Lenis)
- ✅ Deep-Research: 20 universal sections (Performance 5.1-5.6, Accessibility 6.1-6.4, Pitfalls 8.1-8.10)
- ✅ WebSearch: 2024-2025 premium examples and trends
- ✅ Context7: [API verification if used, or "Not needed - Archon sufficient"]

**Deliverables:**
- ✅ Technical overview and implementation approaches (3 complexity levels)
- ✅ Code examples: {{code_example_count}} (annotated with performance + accessibility)
- ✅ Best practices: Performance (6 points), Accessibility (5 points), Pitfalls (10 points)
- ✅ Premium inspiration: {{premium_example_count}} award-winning examples
- ✅ Research citations: All sources documented with IDs/URLs

**GSAP Compatibility:**
- GSAP version: {{gsap_version_minimum}} (3.13.0+)
- Required plugins: {{required_plugins}}
- Premium plugins available: ALL FREE in 3.13+ (ScrollSmoother, MorphSVG, SplitText, DrawSVG, MotionPath)

<action>Present summary to user</action>

**"✅ Research complete for {{pattern_name}}!"**

**Report saved to:** `{{default_output_file}}`

**Next Steps:**
1. **Implement Now** → Use `*implement` workflow (VFX Artist) to build from this research
2. **Generate Variations** → Explore related patterns or alternative approaches
3. **Add to Pattern Library** → After successful implementation, harvest as reusable pattern
4. **Done** → Use report as reference for manual implementation

<ask>Would you like to:
[1] Implement this pattern now (invoke implement-from-pattern workflow)
[2] Explore related patterns
[3] Done - I'll implement manually using the report

Your choice?
</ask>

<template-output>final_research_report, research_summary, next_action_choice</template-output>
</step>

<step n="11" goal="Next Action (Optional Workflow Invocation)" optional="true">
<check if="next_action_choice === '1' OR next_action_choice === 'implement'">
<action>Invoke implement-from-pattern workflow with research context</action>
<invoke-workflow path="{module_root}/workflows/implement-from-pattern/workflow.yaml">
  <input name="pattern_name">{{pattern_name}}</input>
  <input name="research_report_path">{{default_output_file}}</input>
</invoke-workflow>
</check>

<check if="next_action_choice === '2' OR next_action_choice === 'explore'">
<action>Ask user what related patterns to explore</action>
<ask>What related patterns should I research?</ask>
<action>Start new research workflow with related pattern</action>
</check>

<check if="else">
<action>Workflow complete - user will implement manually</action>
**Research complete. Happy animating, {{user_name}}!**
</check>
</step>

</workflow>

## Quality Standards

**Research Hierarchy (TIER 1/2/3 MANDATORY):**
- **TIER 1 PRIMARY:** Archon MCP (ALL 5 sources) + Deep-Research (20 universal sections) ALWAYS queried first
- **TIER 2 GAP FILLING:** WebSearch for 2024-2025 trends not in Archon
- **TIER 3 MINIMAL:** Context7 only for API verification if needed

**Deep-Research Enforcement:**
- ALL 20 universal sections MUST be loaded (Performance 5.1-5.6, Accessibility 6.1-6.4, Pitfalls 8.1-8.10)
- Research gate is MANDATORY and BLOCKING - cannot be skipped
- Verbatim application of Deep-Research principles to pattern research
- All 10 pitfalls MUST be checked and documented

**Research Depth:**
- Minimum 3 code examples (prefer 5)
- Minimum 2 premium examples (2024-2025)
- Latest GSAP 3.13+ compatibility confirmed
- prefers-reduced-motion MANDATORY in all code examples
- All sources cited with source IDs or URLs

**Code Quality:**
- Examples are production-ready and annotated
- Comments explain WHY, not just WHAT
- Performance considerations noted (60fps mandatory)
- Accessibility fallbacks included (prefers-reduced-motion CRITICAL)
- All 10 pitfalls checked in code examples

**Citation Standards (MANDATORY):**
```
Sources:
- Archon: [pattern] (source: [source_id]) - [technique]
- Deep-Research: Section [X.X] - [principle applied]
- WebSearch: [agency/brand] [year] - [url]
```

## Success Metrics

- ✅ 100% coverage of Tier 1 sources (Archon 5 sources + Deep-Research 20 sections)
- ✅ 3-5 code examples from basic to advanced
- ✅ 10+ Deep-Research principles applied to pattern
- ✅ 2-4 premium examples cited (2024-2025 preferred)
- ✅ prefers-reduced-motion documented (MANDATORY)
- ✅ All 10 pitfalls checked
- ✅ Latest API compatibility verified
- ✅ User confident in implementing pattern

## Integration

**Feeds Into:**
- `implement-from-pattern` (VFX Artist) - Research becomes implementation blueprint
- `creative-ideation` (Director) - Enriches concept generation knowledge
- Pattern library - Successful implementations added as reusable patterns

**Context Passed Forward:**
- Complete research report (comprehensive documentation)
- Annotated code examples (3-5 production-ready examples)
- Performance guidelines (60fps targets, optimization tips)
- Accessibility requirements (prefers-reduced-motion MANDATORY)
- Premium inspiration sources (award-winning references)
- Browser compatibility notes (iOS Safari quirks, etc.)
