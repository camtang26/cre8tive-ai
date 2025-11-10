# Performance Optimization Workflow Instructions
# KB-Powered Optimization Using Deep-Research 5.1-5.6 Framework

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/optimize-performance/workflow.yaml</critical>

<workflow>

<step n="1" goal="Deep Context Gathering - Performance Profile">
<action>Communicate in {communication_language} throughout workflow execution</action>
<action>Introduce the performance optimization workflow with Tech Director expertise</action>

🔧 **Performance Optimization (KB-Powered with 6-Part Framework)**

*"Let me analyze your animation using the proven Deep-Research performance framework (Sections 5.1-5.6). This is the most research-intensive workflow in GSAP Excellence - we'll apply systematic optimization backed by 89 sources of GSAP expertise."*

**This is GSAP Excellence's most comprehensive optimization protocol.**

I'll identify bottlenecks using:
- **Deep-Research Sections 5.1-5.6:** Complete performance framework (GPU Rule, Main Thread, Jank Debugging, Memory, 60fps, WebGL/Canvas)
- **Archon MCP:** Performance patterns from 89 GSAP sources (2.2M+ words)
- **Chrome DevTools MCP:** Systematic profiling (FPS, paint time, forced reflows)
- **Accessibility Preservation:** Ensure optimizations don't break prefers-reduced-motion (Sections 6.1-6.2)

Every optimization will be research-backed with citations.

---

**Please provide complete performance context:**

<ask response="animation_code">**1. Animation Implementation Code**

Provide your COMPLETE GSAP animation code:
- Full timeline or tween implementation (not just snippets)
- ScrollTrigger configurations (if using scrub, pin, etc.)
- Plugin usage (ScrollSmoother, MotionPathPlugin, Flip, etc.)
- Framework integration (React useGSAP, Vue lifecycle, vanilla JS)
- Cleanup/kill logic (if any - CRITICAL for memory analysis)
- onUpdate callbacks (if used - potential bottleneck)

Example:
```javascript
// React component with heavy animation
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,  // Performance consideration!
        pin: true
      }
    });

    // Animating layout properties - RED FLAG!
    tl.to(".hero-title", {
      top: "-100px",        // ❌ Layout property
      width: "200px",       // ❌ Layout property
      opacity: 0
    })
    .to(".hero-bg", {
      filter: "blur(10px)"  // ⚠️ Expensive filter
    });

    // No cleanup - MEMORY LEAK!
  }, []);

  return <div className="hero">...</div>;
}
```

**IMPORTANT:** Include ALL context:
- Are you using onUpdate callbacks? (potential main thread blocker)
- Do you kill tweens/ScrollTriggers on unmount? (memory leak check)
- Are you animating layout properties (top, left, width, height)? (GPU Rule violation)
- How many elements animate simultaneously? (bottleneck analysis)</ask>

<ask response="current_fps">**2. Current Performance Measurements (if known)**

If you've already profiled this animation:
- **Average FPS:** (e.g., 45fps, 30fps, or "unknown")
- **Minimum FPS:** (lowest frame rate observed, e.g., 28fps)
- **Paint time:** (milliseconds per frame, e.g., 22ms - budget is 16ms)
- **JS execution time:** (e.g., 8ms - budget is <5ms)
- **Forced reflows:** (count, or "unknown")
- **Memory usage:** (increases over time? or stable)

If you haven't profiled:
**"Unknown - need profiling"**

This helps me compare before/after optimization and identify primary bottlenecks.</ask>

<ask response="target_devices">**3. Target Device Profile**

What devices must perform well?

**A) Desktop-Only**
  - Users primarily on desktop/laptop
  - 1920x1080+ displays, modern hardware (8+ cores, dedicated GPU)
  - FPS target: 60fps solid
  - CPU throttle test: 4x slowdown (simulate mid-range laptop)

**B) Mobile-First**
  - Users primarily on mobile devices
  - iOS Safari + Android Chrome priority
  - FPS target: 60fps on iPhone 12, 50fps on iPhone SE (low-end)
  - CPU throttle test: 6x slowdown (simulate budget phone)
  - **CRITICAL:** Mobile GPU is weaker - optimization is MANDATORY

**C) Both Desktop + Mobile (Universal)**
  - Must perform well on ALL devices
  - Desktop: 60fps | Mobile: 55-60fps
  - Need responsive animation considerations
  - CPU throttle: Test at 4x AND 6x

**D) Low-End Devices Critical**
  - Budget Android phones (<$300), iPhone SE/older models
  - FPS target: 50fps minimum (some drops acceptable)
  - CPU throttle: 6x-8x slowdown testing REQUIRED
  - Aggressive optimization: May need to simplify effects

Choose letter OR describe device priorities.</ask>

<ask response="performance_symptoms">**4. Performance Symptoms (Specific Jank Description)**

What performance issues are you experiencing?

**Common Symptoms (select all that apply):**

**JANK SYMPTOMS:**
- **Stuttering:** Animation plays unevenly, not smooth (visual judder)
- **Frame Drops:** Visible "skipping" or "jumping" during animation (frames missing)
- **Lag:** Delay between trigger and animation start (input lag)
- **Scrub Jank:** ScrollTrigger animations feel choppy during scroll
- **First-Frame Jank:** First animation frame is janky, then smooths out

**TIMING SYMPTOMS:**
- **Slow Animation:** Animation takes longer than specified duration
- **Inconsistent Speed:** Animation speeds up/slows down unpredictably

**DEVICE-SPECIFIC SYMPTOMS:**
- **Mobile-Only Issues:** Works perfectly on desktop, jank on mobile (GPU weakness)
- **Safari-Specific:** Works in Chrome, jank in Safari (browser rendering differences)
- **Throttled CPU Jank:** Smooth on high-end, jank on mid/low-end devices

**RESOURCE SYMPTOMS:**
- **CPU Spike:** Browser becomes unresponsive during animation (main thread blocked)
- **Memory Leak:** Page slows down over time with repeated animations (memory not freed)
- **Paint Flashing:** Visible repainting of large areas (expensive paint operations)

**Describe what you're seeing:**
- When does jank occur? (start, middle, end, throughout entire animation?)
- How severe? (slight judder vs completely broken)
- Can you reproduce it consistently? (always vs sometimes)
- Which specific elements/effects cause jank? (blur filter? large images? many elements?)

Example: *"Animating 50 cards simultaneously causes severe stuttering (drops to 20fps). When I scroll, the blur effect on the hero background makes scrolling choppy. On iPhone SE it's completely unusable - looks like a slideshow."*</ask>

<ask response="framework_context">**5. Framework & Environment Context**

What framework and environment are you using?

**Framework:**
- **React:** (version? using useGSAP hook from @gsap/react?)
  - Are you using useGSAP Context for cleanup?
  - Dependencies array set correctly to avoid re-creating tweens?
- **Next.js:** (App Router? Pages Router? SSR/SSG/CSR?)
  - SSR considerations: Does animation flash on hydration?
  - Static generation: Pre-rendering with GSAP?
- **Vue:** (version 2 or 3? Composition API? lifecycle hooks?)
  - Using onMounted/onUnmounted for cleanup?
- **Vanilla JS:** (no framework)
  - Manual cleanup required on page transitions

**Build Environment:**
- **Bundler:** Vite, Webpack, Turbopack, esbuild?
- **TypeScript or JavaScript?**
- **Production build or development mode?** (dev builds have extra overhead)

**SSR/SSG Considerations:**
- Server-side rendering? (Flash of unanimated content?)
- Static site generation? (GSAP needs browser APIs)
- Hydration timing? (Animation starts before hydration complete?)

**Performance Budget:**
- JavaScript bundle size constraints? (<100KB for GSAP + plugins?)
- Lazy loading GSAP plugins? (load ScrollTrigger only when needed?)

Example: *"Next.js 14 App Router with TypeScript, SSR enabled. Using useGSAP hook from @gsap/react 2.1.0. Production build with Turbopack. Currently loading all GSAP plugins upfront (~120KB bundle) - could lazy load."*</ask>

<ask response="bottleneck_hypothesis">**6. Your Bottleneck Hypothesis (optional but helpful)**

If you have a theory about what's causing the jank:
- "I think animating width/height is the problem"
- "Too many elements animating at once"
- "The blur filter is too expensive"
- "Memory leak from not killing ScrollTriggers"
- "Using onUpdate callback with heavy logic"

If unsure: **"No hypothesis - need systematic analysis"**

This helps me prioritize analysis, but I'll still run full 6-part framework regardless.</ask>

<action>Confirm understanding and preview the research-intensive approach</action>

**🔧 Context captured!**

*"Now I'll apply the complete Deep-Research performance framework (Sections 5.1-5.6) to systematically identify bottlenecks. This is a 6-part analysis backed by the most comprehensive GSAP performance research available."*

**Performance Budget Targets:**
- **60fps:** 16.67ms per frame budget
  - JS Execution: <5ms
  - Style/Layout: <4ms
  - Paint: <4ms
  - Composite: <2ms
- **CPU Throttled (4x):** 50-55fps minimum (mid-range devices)
- **CPU Throttled (6x):** 45-50fps minimum (low-end mobile)

<template-output>
animation_code,
current_fps,
target_devices,
performance_symptoms,
framework_context,
bottleneck_hypothesis,
date
</template-output>
</step>

<step n="2" goal="Chrome DevTools Systematic Performance Profiling">
<critical>Chrome DevTools profiling is MANDATORY if page_url provided - cannot optimize what you don't measure</critical>

🔧 **Systematic Profiling (Chrome DevTools MCP)**

*"Profiling animation to establish baseline metrics..."*

### 2.1: Visual State Capture

<action>Use Chrome DevTools MCP to capture visual state:

```
mcp__chrome-devtools__navigate_page({ url: "{{page_url}}" })
```

Wait for page load, then take screenshot:
```
mcp__chrome-devtools__take_screenshot()
```

Document: Visual state BEFORE triggering animation (baseline)
</action>

### 2.2: Console Analysis

<action>Check for GSAP warnings and performance errors:

```
mcp__chrome-devtools__list_console_messages()
```

Filter for:
- **GSAP warnings:** (invalid properties, deprecated syntax, overwrite conflicts)
- **Performance warnings:** (forced reflow, long task, layout thrashing)
- **JavaScript errors:** (execution failures that might cause jank)
- **Memory warnings:** (heap size growing)

Document ALL console messages with context.
</action>

### 2.3: Network Analysis

<action>Verify GSAP loading and analyze bundle size:

```
mcp__chrome-devtools__list_network_requests({ resourceTypes: ["script"] })
```

Check:
- **Is GSAP loaded?** (gsap.min.js or from CDN)
- **Which plugins are loaded?** (ScrollTrigger, Flip, MotionPath, etc.)
- **Total JavaScript payload size** (target: <100KB for GSAP)
- **Are plugins lazy-loaded?** (or all loaded upfront - optimization opportunity)
- **CDN vs bundled?** (CDN might be cached, bundled is reliable)

Document GSAP loading strategy and bundle size.
</action>

### 2.4: Performance Trace (Normal Conditions - Baseline)

<action>Start comprehensive performance profiling:

```
mcp__chrome-devtools__performance_start_trace()
```

Trigger the animation using {{animation_trigger}}:
- If page load: Reload page and let animation play
- If scroll: Scroll to trigger position
- If click: Execute click on selector
- If manual: Execute provided JavaScript

Wait for COMPLETE animation (typical: 2-5 seconds)

Stop profiling:
```
mcp__chrome-devtools__performance_stop_trace()
```

Analyze trace results and extract:
- **Average FPS:** (from trace - target: 60fps)
- **Minimum FPS:** (lowest frame rate during animation - target: ≥55fps)
- **Paint time:** (milliseconds per frame - target: <4ms, budget: 16ms)
- **JS Execution time:** (time spent in JavaScript - target: <5ms)
- **Style/Layout time:** (recalculation time - target: <4ms)
- **Frame drops:** (count of frames that missed 60fps budget)
- **Forced reflows:** (layout thrashing events - target: 0)
- **Long tasks:** (>50ms tasks that block main thread - target: 0)

**CRITICAL METRICS TO DOCUMENT:**
- Which frames dropped below 60fps?
- What was happening during slowest frames?
- Which functions/operations took longest?
- Were there forced synchronous layouts (reflows)?
</action>

### 2.5: CPU Throttling Test (Mid-Range Device Simulation)

<action>Test performance under CPU constraints:

Enable 4x CPU slowdown (simulates mid-range laptop/phone):
```
mcp__chrome-devtools__emulate_cpu({ throttlingOption: "4x slowdown" })
```

Re-run performance trace:
- Start trace
- Trigger animation
- Stop trace

Analyze throttled results:
- **Throttled Average FPS:** (target: ≥50fps for universal experience)
- **Throttled Minimum FPS:** (target: ≥45fps)
- **CPU impact multiplier:** (how much worse than normal? 2x slower = concerning)
- **Bottleneck amplification:** (does CPU throttling reveal specific bottleneck?)

<check if="target_devices includes low-end or mobile">
  **ADDITIONAL TEST: 6x CPU slowdown (low-end mobile)**
  ```
  mcp__chrome-devtools__emulate_cpu({ throttlingOption: "6x slowdown" })
  ```

  Re-run trace:
  - **6x Throttled Average FPS:** (target: ≥45fps for acceptable mobile)
  - **6x Throttled Minimum FPS:** (target: ≥40fps)

  If FPS drops below 40fps at 6x throttle → AGGRESSIVE optimization required
</check>

Disable throttling:
```
mcp__chrome-devtools__emulate_cpu({ throttlingOption: "No emulation" })
```
</action>

### 2.6: Runtime FPS Measurement (JavaScript-Based)

<action>Measure FPS in real-time using JavaScript for validation:

```
mcp__chrome-devtools__evaluate_script({
  function: `
    (() => {
      let frameCount = 0;
      let lastTime = performance.now();
      let fps = [];
      let startTime = performance.now();

      function measureFPS() {
        const now = performance.now();
        const delta = now - lastTime;
        const currentFPS = 1000 / delta;
        fps.push(currentFPS);
        frameCount++;
        lastTime = now;

        if (frameCount < 120) {  // Measure for 120 frames (~2 seconds)
          requestAnimationFrame(measureFPS);
        } else {
          const avgFPS = fps.reduce((a, b) => a + b) / fps.length;
          const minFPS = Math.min(...fps);
          const maxFPS = Math.max(...fps);
          const duration = now - startTime;

          console.log('=== FPS Measurement Results ===');
          console.log('Average FPS:', avgFPS.toFixed(2));
          console.log('Minimum FPS:', minFPS.toFixed(2));
          console.log('Maximum FPS:', maxFPS.toFixed(2));
          console.log('Frame drops below 55fps:', fps.filter(f => f < 55).length);
          console.log('Frame drops below 30fps:', fps.filter(f => f < 30).length);
          console.log('Total duration:', (duration / 1000).toFixed(2), 's');
        }
      }

      // Trigger animation, then measure
      requestAnimationFrame(measureFPS);

      return 'FPS measurement started (120 frames = ~2 seconds @ 60fps)';
    })()
  `
})
```

Document FPS measurement results from console output.
This provides a second validation of Chrome DevTools trace data.
</action>

### 2.7: Layers Panel Analysis (GPU Layer Check)

<action>Check how many GPU layers are created (will-change usage):

```
mcp__chrome-devtools__evaluate_script({
  function: `
    (() => {
      const allElements = document.querySelectorAll('*');
      const willChangeElements = [];
      const transformedElements = [];

      allElements.forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.willChange && style.willChange !== 'auto') {
          willChangeElements.push({
            selector: el.className || el.tagName,
            willChange: style.willChange
          });
        }
        if (style.transform && style.transform !== 'none') {
          transformedElements.push({
            selector: el.className || el.tagName,
            transform: style.transform
          });
        }
      });

      console.log('=== GPU Layer Analysis ===');
      console.log('Elements with will-change:', willChangeElements.length);
      console.log('Will-change elements:', willChangeElements);
      console.log('Transformed elements:', transformedElements.length);
      console.log('Memory estimate:', willChangeElements.length + transformedElements.length, 'layers');

      if (willChangeElements.length > 10) {
        console.warn('⚠️ WARNING: >10 will-change elements detected - may strain memory on mobile!');
      }

      return {
        willChange: willChangeElements.length,
        transformed: transformedElements.length,
        total: willChangeElements.length + transformedElements.length
      };
    })()
  `
})
```

**From Deep-Research Section 5.1:**
> "Typically under 10 layers is fine; dozens might be an issue on mobile."

Document layer count and identify overuse of will-change.
</action>

<action>Present comprehensive Chrome DevTools findings:</action>

**🔧 CHROME DEVTOOLS PROFILING COMPLETE**

**Visual State:**
- Screenshot captured: [Visual description of animation before optimization]

**Console Messages:**
- GSAP Warnings: [Count] ([List specific warnings - invalid properties, deprecated syntax])
- Performance Warnings: [Forced reflows, long tasks, layout thrashing]
- JavaScript Errors: [Count] ([List errors that might impact performance])
- Memory Warnings: [Heap growth noted if present]

**Network Analysis:**
- GSAP Loaded: [Yes/No] ([CDN: gsap.com/... OR Bundled])
- Plugins Loaded: [ScrollTrigger (XkB), Flip (XkB), etc.]
- Total GSAP Bundle Size: [X KB] ([GOOD <100KB / ACCEPTABLE 100-150KB / BLOATED >150KB])
- Lazy Loading: [Yes/No] ([Optimization opportunity if No])

**Performance Trace (Normal Conditions):**
- **Average FPS:** [X fps] ([EXCELLENT 60fps / GOOD 55-60fps / POOR <55fps])
- **Minimum FPS:** [X fps] ([CRITICAL if <30fps])
- **Paint Time:** [X ms] ([GOOD <4ms / ACCEPTABLE 4-10ms / POOR >10ms])
- **JS Execution:** [X ms] ([GOOD <5ms / ACCEPTABLE 5-8ms / POOR >8ms])
- **Frame Drops:** [Count] ([X% of total frames])
- **Forced Reflows:** [Count] ([CRITICAL if >0 - layout thrashing!])
- **Long Tasks:** [Count] ([>50ms tasks blocking main thread])

**CPU Throttled (4x Slowdown - Mid-Range Devices):**
- **Throttled Average FPS:** [X fps] ([PASS ≥50fps / FAIL <50fps])
- **Throttled Minimum FPS:** [X fps] ([PASS ≥45fps / FAIL <45fps])
- **Performance Degradation:** [X% slower than normal]

<check if="6x throttle tested">
**CPU Throttled (6x Slowdown - Low-End Mobile):**
- **6x Throttled Average FPS:** [X fps] ([PASS ≥45fps / ACCEPTABLE 40-45fps / FAIL <40fps])
- **6x Throttled Minimum FPS:** [X fps]
- **Mobile Usability:** [GOOD/ACCEPTABLE/POOR based on FPS]
</check>

**Runtime FPS Measurement (JavaScript):**
- JS-measured Average: [X fps] (validation of Chrome trace)
- JS-measured Minimum: [X fps]
- Frames below 55fps: [Count]
- Frames below 30fps: [Count] ([CRITICAL if >0])

**GPU Layers Analysis:**
- will-change elements: [Count] ([GOOD <10 / CAUTION 10-20 / EXCESSIVE >20])
- Transformed elements: [Count]
- Total estimated layers: [Count]
- Memory concern: [Yes if >20 layers / No if <10 layers]

**PRIMARY BOTTLENECKS IDENTIFIED (preliminary):**
1. [Bottleneck 1 based on data - e.g., "Forced reflows: 47 events - layout thrashing!"]
2. [Bottleneck 2 based on data - e.g., "Paint time: 22ms - expensive operations"]
3. [Bottleneck 3 based on data - e.g., "FPS drops to 20fps on 6x throttle - mobile unusable"]

---

<template-output>
visual_state_description,
console_gsap_warnings,
console_performance_warnings,
console_js_errors,
gsap_bundle_size,
plugins_loaded,
lazy_loading_status,
normal_avg_fps,
normal_min_fps,
paint_time,
js_execution_time,
frame_drops_count,
forced_reflows_count,
long_tasks_count,
throttled_4x_avg_fps,
throttled_4x_min_fps,
throttled_6x_avg_fps,
throttled_6x_min_fps,
runtime_avg_fps,
runtime_min_fps,
will_change_count,
gpu_layers_total,
preliminary_bottlenecks
</template-output>
</step>

<step n="3" goal="Multi-Source Research - 6-Part Performance Framework (MANDATORY)">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to Step 4 until ALL 6 Deep-Research sections consulted and Archon queries executed</critical>

🔧 **Applying 6-Part Performance Framework (Deep-Research 5.1-5.6)**

*"This is the most research-intensive workflow in GSAP Excellence. The complete Deep-Research framework is MANDATORY."*

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on {user_name}'s optimization request:
    - Performance Symptoms: {{performance_symptoms}}
    - Current FPS: {{normal_avg_fps}} (target: 60fps)
    - Forced Reflows: {{forced_reflows_count}} (target: 0)
    - Paint Time: {{paint_time}}ms (target: <4ms)
    - Bottlenecks: {{preliminary_bottlenecks}}

    You MUST execute the complete 6-part Deep-Research framework (Sections 5.1-5.6) + Archon queries BEFORE proceeding to optimization.</mandate>

  <!-- TIER 1: Deep-Research Framework 5.1-5.6 (ALL REQUIRED) -->
  <phase n="1" title="Deep-Research 6-Part Performance Framework" required="true">
    <action>Consult ALL 6 sections of GSAP Animation Mastery performance framework:

    **Section 5.1 - Animate Efficient Properties (The GPU Rule)**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/18-51-animate-efficient-properties-the-gpu-rule.md

    Extract and apply:
    - **GPU-accelerated properties:** transform (x, y, scale, rotate, skew), opacity, (filters with caution)
    - **Expensive layout triggers:** top, left, right, bottom, width, height, margin, padding
      - *"Animating these means on each frame the browser recalculates the layout of possibly many elements -- very slow. AVOID animating these if at all possible."*
    - **Paint-heavy properties:** color, box-shadow, gradient (moderate cost)
    - **Rule of thumb:** Stick to `transform` and `opacity` for core motion
    - **Alternatives:**
      - To animate height/width → use scaleY/scaleX instead
      - To animate position → use x/y instead of top/left
      - For parallax → use transforms on content, not scrollTop
    - **will-change usage:**
      - GOOD: Large background image that moves continuously
      - BAD: 100 items that fade once on load (overkill - memory waste)
      - *"Typically under 10 layers is fine; dozens might be an issue on mobile."*
    - **Chrome DevTools Layers panel:** Check layer count to avoid memory strain

    Apply to {{animation_code}}:
    - Audit ALL animated properties
    - Categorize: GPU-accelerated vs Layout-trigger vs Paint-heavy
    - Identify violations of GPU Rule
    - Calculate replacement strategy (e.g., left → x, width → scaleX)

    **Section 5.2 - Keep the Main Thread Free (Avoid Long Tasks)**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/19-52-keep-the-main-thread-free-avoid-long-tasks.md

    Extract and apply:
    - **Main thread budget:** Each frame <16ms total
    - **No heavy computations in onUpdate:** Kills performance if expensive logic runs every frame
    - **Avoid forced reflow pattern:** Don't read (offsetHeight) → write (setStyle) → read → write in loops
      - *"This causes forced reflow each time"*
    - **GSAP helps:** Batches style writes together automatically
    - **Web Workers:** For heavy computation (thousands of particle calculations)
    - **GSAP timeline for delays over setTimeout:** Pauses when tab inactive (saves battery)
    - **RAF-synchronized loops:** Use gsap.ticker or requestAnimationFrame (NEVER setInterval)

    Apply to {{animation_code}}:
    - Check for onUpdate callbacks with heavy logic
    - Identify potential forced reflow patterns
    - Verify no setTimeout usage for animation timing
    - Check if heavy calculations could move to Web Worker

    **Section 5.3 - Debugging Jank**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md

    Extract and apply:
    - **Chrome DevTools Performance profiling:**
      - Scripting high → too many JS operations (reduce simultaneous tweens)
      - Rendering/Painting high → large DOM repaints (reduce element sizes, simplify effects)
    - **GSAP DevTools:** Timeline visualization (if GSDevTools included)
    - **will-change pitfalls:**
      - If element constantly changes size → causes continuous reallocation
      - Remove after animation: `element.style.willChange = 'auto'` OR use GSAP Context revert
    - **Images and decoding:**
      - Large images cause jank during decode
      - Use `image.decode()` to preload before animation
      - Lazy load images BEFORE heavy animations start
    - **Third-party interference:** Other scripts hogging main thread (analytics, etc.)

    Apply to {{performance_symptoms}}:
    - Map symptoms to likely causes (jank → painting? stuttering → scripting?)
    - Identify if images/assets might be causing decode jank
    - Check if third-party scripts present (tag managers, analytics)

    **Section 5.4 - Memory Management & Garbage Collection**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/21-54-memory-management-garbage-collection.md

    Extract and apply:
    - **Cleanup on navigation:** `ScrollTrigger.getAll().forEach(t => t.kill())`
    - **Kill unused timelines:** `tl.kill()` when moving off section/destroying component
    - **Avoid tween accumulation:**
      - On every mousemove creating new tween WITHOUT killing old → piles up thousands
      - Use `quickTo` OR `overwrite: 'auto'` to kill previous tweens automatically
    - **GSAP Context:** Best practice for cleanup (auto-reverts on context.revert())
    - **Detached DOM nodes:** After Flip or similar, ensure no duplicated DOM lingering
    - **Memory snapshot in DevTools:** Check for detached nodes accumulating

    Apply to {{framework_context}}:
    - Check if React/Vue cleanup is implemented (useEffect return, onUnmounted)
    - Verify ScrollTrigger.kill() on component unmount
    - Check if GSAP Context is used (best practice)
    - Identify potential memory leak patterns in code

    **Section 5.5 - Optimize Animations for 60fps**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/22-55-optimize-animations-for-60fps.md

    Extract and apply:
    - **16ms frame budget breakdown:**
      - <8ms scripting + <4ms style/layout + <4ms paint = ~16ms total
    - **Reduce draw calls:** 100 DOM elements moving → expensive. 1 canvas with 100 particles → cheaper
    - **Layer trick:** Hide layers behind full-screen elements (display:none) to reduce paint
    - **autoAlpha property:**
      - *"Animates opacity and toggles visibility to hidden when opacity hits 0"*
      - Prevents browser from painting element at 0 opacity
      - Saves paint cost for fully invisible elements
    - **Throttle ScrollTrigger refresh:** Don't call refresh() too frequently
    - **Scrub performance:**
      - `scrub: true` updates every scroll tick (heavy)
      - `scrub: 0.1` eases updates (lighter)
      - OR fire discrete plays (no scrub) for lightest option
    - **CSS vs GSAP:** CSS animations skip JS cost BUT lack control. GSAP overhead is minimal.
      - *"Real cost is painting, not GSAP engine"*

    Apply to {{animation_code}}:
    - Check if animating many elements simultaneously (canvas alternative?)
    - Identify opacity animations that could use autoAlpha instead
    - If using ScrollTrigger scrub: evaluate `scrub: 0.1` vs `scrub: true`
    - Check for manual refresh() calls that might be too frequent

    **Section 5.6 - When to Use WebGL/Canvas**
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/23-56-when-to-use-webglcanvas.md

    Extract and apply:
    - **When to use WebGL:**
      - Thousands of objects moving (starfield with 5000 stars)
      - Complex shaders/effects
      - GSAP can tween Three.js mesh properties (mesh.rotation, uniforms)
    - **When to use Canvas:**
      - Particle systems (hundreds/thousands of particles)
      - Complex shapes
      - GSAP can tween canvas properties (alpha, position)
    - **When to stick with GSAP DOM:**
      - Tens or even a few hundred elements (DOM + GSAP is fine with proper techniques)
    - **Performance comparison:** DOM isn't feasible at 60fps for thousands of objects

    Apply to {{animation_code}}:
    - Count simultaneous animated elements
    - If >200 elements → consider canvas
    - If >1000 elements → MUST use canvas or WebGL
    - If particle effects → canvas is better approach

    Document which sections were consulted and key insights for THIS specific case.
    </action>

    <evidence required="true">
      **DEEP-RESEARCH 6-PART FRAMEWORK APPLIED:**

      **Section 5.1 (GPU Rule) - Property Audit:**
      - GPU-accelerated properties used: [List from {{animation_code}}]
      - Layout-trigger properties used: [List violations - top, left, width, height, etc.]
      - Paint-heavy properties used: [color, box-shadow, etc.]
      - **Violations Identified:** [Count of non-GPU properties]
      - **Replacement Strategy:**
        - [Property 1]: Change `left` → `x` (transform)
        - [Property 2]: Change `width` → `scaleX` (transform)
        - [etc.]
      - **will-change audit:** [Count of elements with will-change]
        - GOOD (<10) / EXCESSIVE (>10) / CRITICAL (>20)

      **Section 5.2 (Main Thread) - Execution Budget:**
      - onUpdate callbacks present: [Yes/No]
        - If Yes: [Describe logic - is it heavy?]
      - Potential forced reflows: [Yes/No - read/write pattern detected?]
      - setTimeout usage: [Yes/No - should use GSAP timeline?]
      - Heavy calculations: [Could move to Web Worker?]
      - **Main thread risk:** [LOW / MEDIUM / HIGH based on analysis]

      **Section 5.3 (Debugging Jank) - Symptom Mapping:**
      - {{performance_symptoms}} maps to: [Scripting / Painting / Both]
      - Image decode jank likely: [Yes/No]
      - Third-party interference suspected: [Yes/No - analytics, etc.]
      - will-change cleanup missing: [Yes/No]

      **Section 5.4 (Memory Management) - Cleanup Audit:**
      - Framework: {{framework_context}}
      - Cleanup implemented: [Yes/No - useEffect return, onUnmounted, etc.]
      - ScrollTrigger.kill() on unmount: [Yes/No]
      - GSAP Context used: [Yes/No - best practice]
      - **Memory leak risk:** [LOW / MEDIUM / HIGH]
      - Potential leak sources: [Unkilled ScrollTriggers, tween accumulation, etc.]

      **Section 5.5 (60fps Optimization) - Specific Techniques:**
      - Simultaneous element count: [Number animating at once]
      - Canvas opportunity: [Yes if >200 elements / No if <200]
      - autoAlpha usage: [Currently using opacity / Could use autoAlpha]
      - ScrollTrigger scrub value: [true / 0.1 / not using scrub]
      - Scrub optimization available: [Yes - change to 0.1 / No - already optimal]

      **Section 5.6 (WebGL/Canvas) - Rendering Strategy:**
      - Element count: [X elements]
      - Recommendation: [Stick with DOM / Consider Canvas / MUST use Canvas or WebGL]
      - Particle effects present: [Yes - canvas better / No - DOM fine]

      **Framework Insights Count:** 6 sections (complete framework applied)
    </evidence>
  </phase>

  <!-- TIER 2: Archon MCP Performance Research (ALL REQUIRED) -->
  <phase n="2" title="Archon MCP Performance Patterns" required="true">
    <action>Execute systematic Archon queries for GSAP performance optimization:

    **Query 1: 60fps Optimization Techniques (REQUIRED)**
    ```
    rag_search_knowledge_base("60fps optimization techniques GSAP performance", source_id="b9f6b322298feb21", match_count=8)
    ```
    → Purpose: Find proven optimization patterns from official GSAP sources
    → Document: Frame budget strategies, optimization checklists, performance best practices

    **Query 2: GPU Acceleration for Specific Symptoms (REQUIRED)**
    ```
    rag_search_knowledge_base("GPU acceleration {{performance_symptoms}} GSAP", source_id="b9f6b322298feb21", match_count=6)
    ```
    → Purpose: Targeted solutions for specific jank symptoms
    → Document: How GPU properties solve {{performance_symptoms}}

    **Query 3: Layout Thrashing Prevention (REQUIRED)**
    ```
    rag_search_knowledge_base("layout thrashing forced reflow prevention GSAP", source_id="b9f6b322298feb21", match_count=6)
    ```
    → Purpose: Avoid forced synchronous layout patterns
    → Document: Read/write batching, GSAP ticker optimization, common mistakes

    **Query 4: will-change Best Practices (REQUIRED)**
    ```
    rag_search_knowledge_base("will-change property optimization performance", source_id="b9f6b322298feb21", match_count=5)
    ```
    → Purpose: When/how to use will-change correctly (Deep-Research 5.1 supplement)
    → Document: Good use cases, bad use cases, memory implications

    **Query 5: Performance Optimization Code Examples (REQUIRED)**
    ```
    rag_search_code_examples("GSAP performance optimization patterns", match_count=5)
    ```
    → Purpose: Real-world optimized animation code patterns
    → Document: Before/after examples, transform usage, GPU-friendly implementations

    **Query 6: Memory Leak Prevention & Cleanup (REQUIRED)**
    ```
    rag_search_knowledge_base("GSAP memory leak prevention cleanup kill", source_id="b9f6b322298feb21", match_count=5)
    ```
    → Purpose: Comprehensive cleanup patterns (Deep-Research 5.4 supplement)
    → Document: ScrollTrigger.kill(), Context usage, React/Vue cleanup patterns

    **IMPORTANT:** Execute ALL 6 queries. Present findings organized by category.
    </action>

    <evidence required="true">
      **ARCHON MCP RESEARCH FINDINGS:**

      **60fps Optimization Techniques:**
      - [Pattern 1]: [Description] ([Source ID])
      - [Pattern 2]: [Description] ([Source ID])
      - [Pattern 3]: [Description] ([Source ID])
      - Frame budget guidance: [16.67ms breakdown from Archon]

      **GPU Acceleration for {{performance_symptoms}}:**
      - [Solution 1 from Archon]: [How it solves the symptom]
      - [Solution 2 from Archon]: [Specific property recommendations]
      - Transform usage examples: [Code snippets from KB]

      **Layout Thrashing Prevention:**
      - Forced reflow triggers: [offsetWidth, scrollTop, getBoundingClientRect patterns]
      - GSAP's batching: [How GSAP prevents thrashing automatically]
      - Manual batching: [Read → Write pattern from KB]

      **will-change Best Practices:**
      - When to use: [Continuous heavy animation (from KB)]
      - When NOT to use: [One-time fades, too many elements (from KB)]
      - Memory impact: [Layer creation cost from KB]

      **Optimization Code Examples:**
      - [Example 1 from KB]: [Before/after code showing transform vs layout properties]
      - [Example 2 from KB]: [autoAlpha usage pattern]
      - [Example 3 from KB]: [ScrollTrigger scrub optimization]

      **Memory Leak Prevention:**
      - [Pattern 1 from KB]: [ScrollTrigger cleanup]
      - [Pattern 2 from KB]: [GSAP Context usage]
      - [Pattern 3 from KB]: [React useGSAP cleanup pattern]

      **Total Archon Sources Consulted:** [Number] (source IDs listed)
    </evidence>
  </phase>

  <!-- TIER 3: Accessibility Preservation Check (REQUIRED) -->
  <phase n="3" title="Accessibility Preservation Validation" required="true">
    <action>Cross-reference optimization against accessibility requirements:

    **Why This Matters:**
    From Deep-Research Section 2.4:
    > "Respecting prefers-reduced-motion isn't just accessibility -- it's also a performance safeguard. Users on low-power devices or who don't want animations can indicate that, and you should respond by disabling or toning down intensive effects for them."

    **Check 1: prefers-reduced-motion Support**
    - Does {{animation_code}} respect prefers-reduced-motion?
    - Pattern to implement (if missing):
    ```javascript
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
      // Disable or simplify animation
      gsap.set(element, { x: finalPosition }); // Instant, no animation
    } else {
      // Full animation
      gsap.to(element, { x: finalPosition, duration: 1 });
    }
    ```

    **Check 2: Keyboard Navigation Preserved**
    - If optimizing with will-change or transforms, does focus outline still work?
    - Does optimization affect tab order?

    **Check 3: Focus Management**
    - If using autoAlpha (visibility:hidden at opacity:0), does it remove from tab order?
    - Is this intentional or should aria-hidden be used instead?

    **Optimization Impact Assessment:**
    - Will GPU property changes affect accessibility? (Usually No - visual only)
    - Will autoAlpha usage affect screen readers? (Yes - visibility:hidden removes from a11y tree)
    - Will will-change affect focus indicators? (Check in implementation)

    Document accessibility preservation strategy.
    </action>

    <evidence required="true">
      **ACCESSIBILITY PRESERVATION:**

      **prefers-reduced-motion:**
      - Currently implemented: [Yes/No]
      - If No: [Must add before optimization - performance + accessibility win]
      - Pattern to use: [matchMedia check with instant fallback]

      **Keyboard Navigation:**
      - Impact from optimization: [None / Requires testing]
      - Focus outline preserved: [Yes/No - verify with :focus-visible]

      **Focus Management:**
      - autoAlpha impact: [Using visibility:hidden - removes from tab order]
      - Intended behavior: [Yes - element should be unfocusable / No - use opacity only]

      **Optimization Safety:**
      - GPU properties: No accessibility impact (visual rendering only)
      - will-change: No accessibility impact (browser hint only)
      - autoAlpha: IMPACTS accessibility (visibility:hidden) - verify intended

      **Accessibility Compliance:** [MAINTAINED / REQUIRES ATTENTION]
    </evidence>
  </phase>

  <!-- TIER 4: WebSearch Fallback (Conditional) -->
  <phase n="4" title="2025 Performance Trends (Conditional)" required="conditional">
    <condition>Execute ONLY if Archon + Deep-Research don't fully cover {{performance_symptoms}} OR if bleeding-edge technique needed (2025-specific)</condition>

    <action>Search for latest performance optimization techniques:

    **Search 1: Chrome DevTools Animation Profiling 2025**
    ```
    WebSearch("Chrome DevTools GSAP animation profiling guide 2025")
    ```
    → Find latest DevTools features (Performance Insights panel, etc.)
    → Document: New profiling tools, updated workflows

    **Search 2: GSAP Performance Best Practices 2025**
    ```
    WebSearch("GSAP performance optimization best practices 2025")
    ```
    → Latest industry standards
    → Document: Any new recommendations since Deep-Research compiled?

    **Search 3: Web Vitals Animation Optimization**
    ```
    WebSearch("Web Vitals Interaction to Next Paint animation optimization 2025")
    ```
    → Core Web Vitals considerations for animations
    → Document: INP impact from GSAP animations

    Target: Find 1-2 cutting-edge insights not covered by Archon/Deep-Research
    </action>

    <evidence>
      **2025 PERFORMANCE TRENDS:** [If searches executed]
      - [Chrome DevTools update]: [New Performance Insights panel features]
      - [GSAP community insight]: [Recent best practice - post-Deep-Research]
      - [Web Vitals]: [INP optimization for GSAP interactions]

      **OR:** "Archon + Deep-Research 5.1-5.6 framework provided complete coverage. WebSearch not needed."
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - 6-Part Framework Applied**

      **DEEP-RESEARCH FRAMEWORK (Sections 5.1-5.6):**

      **5.1 GPU Rule - Property Analysis:**
      - GPU-Accelerated: [List properties]
      - Layout-Triggers: [List violations]
      - Replacement Strategy: [Conversions needed]
      - will-change Count: [X elements - GOOD/EXCESSIVE]

      **5.2 Main Thread - Execution Budget:**
      - onUpdate Risk: [Yes - heavy logic / No - clean]
      - Forced Reflow Risk: [Yes - pattern detected / No]
      - Main Thread Risk: [LOW / MEDIUM / HIGH]

      **5.3 Jank Debugging - Symptom Correlation:**
      - {{performance_symptoms}} → [Scripting / Painting / Layout]
      - Root Cause: [Identified from framework]

      **5.4 Memory Management - Leak Assessment:**
      - Cleanup Status: [Implemented / Missing]
      - Memory Leak Risk: [LOW / MEDIUM / HIGH]
      - Required Fixes: [List cleanup needs]

      **5.5 60fps Optimization - Specific Techniques:**
      - Canvas Opportunity: [Yes >200 elements / No]
      - autoAlpha Usage: [Should implement]
      - Scrub Optimization: [Available - change to 0.1]

      **5.6 WebGL/Canvas - Rendering Decision:**
      - Element Count: [X]
      - Strategy: [DOM / Canvas / WebGL]

      ---

      **ARCHON MCP PATTERNS (6 Queries):**
      - 60fps techniques: [Key patterns found]
      - GPU acceleration: [Solutions for {{performance_symptoms}}]
      - Layout thrashing: [Prevention strategies]
      - will-change: [Best practices extracted]
      - Code examples: [Before/after patterns]
      - Memory cleanup: [Comprehensive patterns]

      ---

      **ACCESSIBILITY PRESERVATION:**
      - prefers-reduced-motion: [Implemented / MUST ADD]
      - Keyboard nav: [Preserved / Verify]
      - Focus management: [Impacts from autoAlpha noted]

      ---

      **OPTIMIZATION STRATEGY SYNTHESIS:**

      **PRIMARY ISSUES (from Chrome DevTools + Research):**
      1. [Issue 1]: {{preliminary_bottlenecks[0]}}
         - Root Cause: [From Deep-Research framework]
         - Fix Strategy: [From Section X.X + Archon pattern]

      2. [Issue 2]: {{preliminary_bottlenecks[1]}}
         - Root Cause: [From Deep-Research framework]
         - Fix Strategy: [From Section X.X + Archon pattern]

      3. [Issue 3]: {{preliminary_bottlenecks[2]}}
         - Root Cause: [From Deep-Research framework]
         - Fix Strategy: [From Section X.X + Archon pattern]

      **EXPECTED IMPROVEMENTS:**
      - FPS: {{normal_avg_fps}} → 60fps sustained
      - Paint Time: {{paint_time}}ms → <4ms
      - Forced Reflows: {{forced_reflows_count}} → 0
      - GPU Properties: [X% currently] → 100%

      **CITATIONS:**
      - Deep-Research: Sections 2.4, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, Pitfall 8.2
      - Archon sources: [List IDs]
      - WebSearch: [URLs if used, or "Not needed"]
      - **Total research sources:** [Count]

    </output>

    <halt>🚨 STOP. Present complete research findings in {communication_language}.

*"I've applied the complete 6-part Deep-Research framework (Sections 5.1-5.6) + 6 Archon queries + Accessibility validation. Here are the systematic optimization strategies backed by {{total_research_sources}} sources..."*

Wait for {user_name} to respond **"Continue [c]"** before proceeding to optimization implementation.</halt>

    <user-override>
      Only {user_name} can skip research with explicit **"Skip research [s]"** command.
      You (the agent) CANNOT autonomously skip research - this is the MOST research-intensive workflow in GSAP Excellence.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
deep_research_gpu_rule_analysis,
deep_research_main_thread_risk,
deep_research_jank_symptom_mapping,
deep_research_memory_leak_assessment,
deep_research_60fps_techniques,
deep_research_rendering_strategy,
archon_60fps_patterns,
archon_gpu_solutions,
archon_layout_thrashing_prevention,
archon_will_change_practices,
archon_code_examples,
archon_memory_cleanup_patterns,
accessibility_prefers_reduced_motion,
accessibility_keyboard_nav,
accessibility_focus_management,
optimization_strategy_synthesis,
expected_fps_improvement,
total_research_sources
</template-output>
</step>

<step n="4" goal="Generate Optimized Implementation - Research-Backed">
<action>Create optimized animation code with research citations for each change</action>

🔧 **Optimization Implementation (Research-Backed)**

*"Refactoring animation using insights from 6-part framework..."*

### 4.1: Optimized Code

**Optimized Implementation:**
```javascript
{{optimized_animation_code}}
```

### 4.2: Key Optimizations Applied (Research-Backed)

**Optimization 1: GPU Property Conversion (Section 5.1 - GPU Rule)**

BEFORE (Layout Properties - Causes Reflow):
```javascript
// ❌ WRONG: Animating layout properties
gsap.to(".card", {
  top: "0px",      // Triggers layout recalculation
  width: "500px",  // Triggers layout + paint
  left: "100px"    // Triggers layout + paint
});
```

AFTER (Transform Properties - GPU Accelerated):
```javascript
// ✅ CORRECT: Using transforms
gsap.to(".card", {
  y: -100,         // transform: translateY() - GPU layer
  scaleX: 1.5,     // transform: scaleX() - GPU layer
  x: 100           // transform: translateX() - GPU layer
});
```

**Why This Works (Deep-Research Section 5.1):**
> "Animating layout properties means on each frame the browser recalculates the layout of possibly many elements -- very slow. AVOID animating these if at all possible."

**Impact:**
- Eliminates forced reflows: {{forced_reflows_count}} → 0
- Moves rendering to GPU (60fps capable)
- Paint time: {{paint_time}}ms → <4ms (target)

**Source:** Section 5.1 + Archon b9f6b322298feb21 + Pitfall 8.2

---

**Optimization 2: autoAlpha for Opacity Animations (Section 5.5)**

BEFORE (opacity only - Still paints at 0):
```javascript
// ⚠️ SUBOPTIMAL: Browser still paints element at opacity:0
gsap.to(".modal", { opacity: 0, duration: 0.5 });
// Element invisible but still in rendering tree (paint cost)
```

AFTER (autoAlpha - Removes from paint):
```javascript
// ✅ OPTIMIZED: visibility:hidden at opacity:0
gsap.to(".modal", { autoAlpha: 0, duration: 0.5 });
// Browser stops painting element (saves paint cost)
```

**Why This Works (Deep-Research Section 5.5):**
> "autoAlpha animates opacity and toggles visibility to hidden when opacity hits 0. Using it (instead of opacity alone) prevents the browser from painting the element at 0 opacity (since hidden means it's not in rendering tree). This can save a bit of paint cost for fully invisible elements."

**Impact:**
- Reduces paint operations for hidden elements
- Small but measurable performance gain

**Source:** Section 5.5

**Accessibility Note:** autoAlpha uses visibility:hidden which removes element from accessibility tree. This is CORRECT for modals/overlays that should be unfocusable when hidden.

---

**Optimization 3: ScrollTrigger Scrub Optimization (Section 5.5)**

BEFORE (scrub:true - Updates every scroll tick):
```javascript
// ⚠️ HEAVY: Updates on EVERY scroll event (60+ times per second)
scrollTrigger: {
  scrub: true  // Continuous updates - can cause jank
}
```

AFTER (scrub:0.1 - Eased updates):
```javascript
// ✅ LIGHTER: Eases updates with 0.1s delay
scrollTrigger: {
  scrub: 0.1  // Smooths out jank, reduces update frequency
}
```

**Why This Works (Deep-Research Section 5.5):**
> "Animations tied to scroll can either update continuously (scrub) or just trigger discrete plays. If you notice scrubbing causing slight jank and it's not crucial, you could instead design it to fire once (no scrub) which is lighter (doesn't update every scroll tick). Or set scrub: 0.1 instead of true to ease updates."

**Impact:**
- Reduces scroll-linked update frequency
- Smooths out jank on lower-end devices

**Source:** Section 5.5

---

**Optimization 4: will-change Layer Promotion (Section 5.1) - SPARINGLY**

BEFORE (No layer promotion):
```css
/* No GPU layer hint - browser might not optimize */
.hero-bg {
  /* No will-change */
}
```

AFTER (Strategic will-change for continuous animation):
```css
/* ✅ GOOD: Large background with continuous parallax */
.hero-bg {
  will-change: transform;
  /* Promotes to GPU layer BEFORE animation starts */
}
```

```javascript
// Clean up after animation completes (CRITICAL)
gsap.to(".hero-bg", {
  y: 200,
  duration: 10,
  onComplete: () => {
    document.querySelector(".hero-bg").style.willChange = 'auto';
    // Removes hint to free memory
  }
});
```

**Why This Works (Deep-Research Section 5.1):**
> "will-change: transform can be added to hint the browser to prep a layer. But as noted, don't overuse it: Good: a large background image that will move continuously -- use will-change so the browser moves it on GPU. Bad: adding will-change to 100 items that only fade once on load -- that's overkill, layers use memory and can reduce overall performance if too many."

**Critical Limits:**
> "Typically under 10 layers is fine; dozens might be an issue on mobile."

**Current Usage:** {{will_change_count}} elements
- GOOD if <10
- EXCESSIVE if >10 (REMOVE from one-time animations)

**Impact:**
- Prevents layout shift when animation starts
- Pre-optimizes GPU rendering

**Source:** Section 5.1 + Archon best practices

---

**Optimization 5: Memory Leak Prevention (Section 5.4)**

BEFORE (No cleanup - Memory leak):
```javascript
// ❌ MEMORY LEAK: ScrollTrigger never killed
function HeroAnimation() {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: { /* config */ }
    });
    // Component unmounts but ScrollTrigger persists!
  }, []);
}
```

AFTER (Proper cleanup with Context):
```javascript
// ✅ CORRECT: GSAP Context with automatic cleanup
function HeroAnimation() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { /* config */ }
      });
    });

    return () => ctx.revert(); // Kills all tweens + ScrollTriggers
  }, []);
}
```

**Why This Works (Deep-Research Section 5.4):**
> "Use GSAP Context or tl.kill() on old timelines when moving off a section or destroying a component. This frees associated events and memory."

> "We covered using ScrollTrigger.getAll().forEach(t=> t.kill()) on navigation. Also consider killing tweens that are no longer needed."

**Impact:**
- Prevents memory accumulation in single-page apps
- Fixes "ghost" animations on page transitions

**Source:** Section 5.4 + Archon memory cleanup patterns

---

**Optimization 6: Canvas for Many Elements (Section 5.6) - If Applicable**

<check if="element count >200">
BEFORE (200+ DOM elements animating - Unplayable):
```javascript
// ❌ UNFEASIBLE: 500 DOM elements moving
particles.forEach((particle, i) => {
  gsap.to(`.particle-${i}`, { x: 100, y: 100, rotation: 360 });
});
// Browser chokes trying to paint 500 elements per frame
```

AFTER (Canvas with GSAP tweening canvas properties):
```javascript
// ✅ FEASIBLE: Draw 500 particles on ONE canvas
const canvas = document.querySelector('#particles');
const ctx = canvas.getContext('2d');

// Particle data
const particles = Array.from({ length: 500 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  rotation: 0
}));

// GSAP tweens particle DATA (not DOM)
particles.forEach(p => {
  gsap.to(p, { x: 100, y: 100, rotation: 360, duration: 2 });
});

// Render loop (uses gsap.ticker)
gsap.ticker.add(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI / 180);
    ctx.fillRect(-5, -5, 10, 10);  // Draw particle
    ctx.restore();
  });
});
```

**Why This Works (Deep-Research Section 5.6):**
> "A starfield with 5000 stars moving -- doing that in DOM is not feasible at 60fps. Instead draw on canvas, and use GSAP to animate properties of the starfield (like overall rotation or camera position) rather than each star as a DOM."

**Impact:**
- Makes impossible animations possible
- 500 DOM elements @ 10fps → 500 canvas particles @ 60fps

**Source:** Section 5.6
</check>

### 4.3: Framework-Specific Integration

<check if="framework_context includes React">
**React Optimization (useGSAP hook + Context):**

```javascript
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function OptimizedComponent() {
  const container = useRef();

  useGSAP(
    () => {
      // All GSAP code inside context
      gsap.to(".element", {
        x: 100,           // ✅ Transform (not left)
        autoAlpha: 0,     // ✅ autoAlpha (not opacity)
        duration: 1
      });

      // ScrollTrigger automatically scoped to context
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section",
          scrub: 0.1      // ✅ Optimized scrub
        }
      });
    },
    { scope: container } // Scopes queries to container
    // Context auto-reverts on unmount (kills all tweens/triggers)
  );

  return <div ref={container}>...</div>;
}
```

**Cleanup Handled:** useGSAP automatically calls context.revert() on unmount
**Source:** Archon React patterns + Section 5.4
</check>

### 4.4: prefers-reduced-motion Implementation (Accessibility + Performance)

```javascript
// Check user preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Instant state changes (no animation) for:
  // - Users who requested reduced motion (accessibility)
  // - Low-power devices (performance optimization)
  gsap.set(".element", { x: 100, autoAlpha: 0 });
} else {
  // Full animation for users who want motion
  gsap.to(".element", {
    x: 100,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out"
  });
}
```

**Why This Matters (Deep-Research Section 2.4):**
> "Respecting prefers-reduced-motion isn't just accessibility -- it's also a performance safeguard. Users on low-power devices or who don't want animations can indicate that, and you should respond by disabling or toning down intensive effects for them."

**Impact:**
- Accessibility compliance (WCAG 2.1)
- Performance boost for low-end devices
- Battery saving on mobile

**Source:** Section 2.4 + Section 6.2 (Accessibility)

### 4.5: CSS Changes Required

```css
/* GPU layer promotion for continuous animations ONLY */
.hero-bg {
  will-change: transform;
  /* GOOD: Large background with continuous parallax */
}

/* Remove will-change for one-time animations */
.fade-in-once {
  /* will-change: transform; ❌ DON'T - one-time fade */
  /* Overuse wastes memory */
}

/* Total will-change usage: <10 elements (Deep-Research 5.1 guidance) */
```

**JavaScript cleanup after animation:**
```javascript
onComplete: () => {
  element.style.willChange = 'auto'; // Free memory
}
```

<template-output>
optimized_animation_code,
optimization_1_gpu_properties,
optimization_2_autoalpha,
optimization_3_scrub,
optimization_4_will_change,
optimization_5_memory_cleanup,
optimization_6_canvas,
framework_specific_integration,
prefers_reduced_motion_implementation,
css_changes_required
</template-output>
</step>

<step n="5" goal="Validation Testing - Verify 60fps Achievement">
<action>Test optimized implementation and validate improvements</action>

🔧 **Validation Testing (60fps Verification)**

*"Re-profiling optimized animation to confirm research-backed improvements..."*

### 5.1: Re-Profile with Chrome DevTools

<action>Apply optimized code to {{page_url}} and re-test:

1. Apply ALL optimizations from Step 4
2. Reload page (clear browser cache if needed)
3. Take new screenshot (visual comparison)
4. Run performance trace with optimized code
5. Run CPU throttle tests (4x and 6x if applicable)
6. Compare before/after metrics

Document ACTUAL measured improvements (not estimates).
</action>

### 5.2: 60fps Achievement Validation

**Performance Validation:**

- [ ] **Average FPS ≥ 60fps** (normal conditions)
  - Before: {{normal_avg_fps}}
  - After: {{optimized_avg_fps}}
  - Status: [PASS ≥60fps / FAIL <60fps]

- [ ] **Minimum FPS ≥ 55fps** (allow minor drops)
  - Before: {{normal_min_fps}}
  - After: {{optimized_min_fps}}
  - Status: [PASS ≥55fps / FAIL <55fps]

- [ ] **Paint Time <10ms** (well under 16.67ms budget, target <4ms)
  - Before: {{paint_time}}ms
  - After: {{optimized_paint_time}}ms
  - Improvement: [X% faster]
  - Status: [EXCELLENT <4ms / GOOD 4-10ms / ACCEPTABLE <16ms / FAIL >16ms]

- [ ] **Zero Forced Reflows** (no layout thrashing)
  - Before: {{forced_reflows_count}}
  - After: {{optimized_forced_reflows}}
  - Status: [PASS = 0 / FAIL >0]

- [ ] **CPU Throttled FPS ≥ 50fps** (4x slowdown - mid-range devices)
  - Before: {{throttled_4x_avg_fps}}
  - After: {{optimized_throttled_4x}}
  - Status: [PASS ≥50fps / FAIL <50fps]

<check if="target_devices includes low-end or mobile">
- [ ] **6x CPU Throttled FPS ≥ 45fps** (low-end mobile)
  - Before: {{throttled_6x_avg_fps}}
  - After: {{optimized_throttled_6x}}
  - Status: [PASS ≥45fps / ACCEPTABLE 40-45fps / FAIL <40fps]
</check>

- [ ] **GPU-Accelerated Properties Only** (100% compliance)
  - Before: [X% GPU-friendly]
  - After: [100% transform/opacity only]
  - Status: [PASS 100% / FAIL if layout properties remain]

- [ ] **will-change Count <10** (memory-safe)
  - Before: {{will_change_count}}
  - After: [Count]
  - Status: [GOOD <10 / CAUTION 10-20 / FAIL >20]

### 5.3: Before/After Comparison

| Metric | Before (Janky) | After (Optimized) | Improvement | Status |
|--------|---------------|------------------|-------------|--------|
| **FPS** | {{normal_avg_fps}} | {{optimized_avg_fps}} | +X fps (+Y%) | ✅/❌ |
| **Min FPS** | {{normal_min_fps}} | {{optimized_min_fps}} | +X fps | ✅/❌ |
| **Paint Time** | {{paint_time}}ms | {{optimized_paint_time}}ms | -X ms (-Y%) | ✅/❌ |
| **Forced Reflows** | {{forced_reflows_count}} | 0 | Eliminated | ✅ |
| **GPU Props** | [X%] | 100% | +Y% | ✅ |
| **4x Throttled** | {{throttled_4x_avg_fps}} | {{optimized_throttled_4x}} | +X fps | ✅/❌ |
| **6x Throttled** | {{throttled_6x_avg_fps}} | {{optimized_throttled_6x}} | +X fps | ✅/❌ |
| **will-change** | {{will_change_count}} | [Count] | -X elements | ✅/❌ |

### 5.4: Accessibility Validation

- [ ] **prefers-reduced-motion Implemented**
  - Test: Enable "Reduce Motion" in OS settings
  - Expected: Instant state change (no animation)
  - Status: [PASS / FAIL]

- [ ] **Keyboard Navigation Preserved**
  - Test: Tab through interactive elements
  - Expected: Focus outline visible, tab order correct
  - Status: [PASS / FAIL]

- [ ] **Focus Management with autoAlpha**
  - Test: Elements with autoAlpha:0 are unfocusable
  - Expected: Correct (modals/overlays should be unfocusable when hidden)
  - Status: [PASS / FAIL]

### 5.5: Browser Compatibility Testing

- [ ] Chrome/Edge (Chromium) - [TESTED / NOT TESTED]
- [ ] Firefox - [TESTED / NOT TESTED]
- [ ] Safari Desktop - [TESTED / NOT TESTED]
- [ ] iOS Safari - [TESTED / NOT TESTED] (CRITICAL for mobile)
- [ ] Android Chrome - [TESTED / NOT TESTED]

**Note:** Transform and opacity are universally supported. Optimizations are browser-agnostic.

### 5.6: Production Readiness Checklist

- [ ] **All optimizations applied** (GPU properties, autoAlpha, scrub, will-change, cleanup)
- [ ] **60fps achieved** (sustained, not just average)
- [ ] **Accessibility preserved** (prefers-reduced-motion, keyboard nav)
- [ ] **Memory cleanup implemented** (GSAP Context or manual kill)
- [ ] **Cross-browser tested** (especially Safari for mobile)
- [ ] **Performance budget met** (JS <5ms, Paint <4ms, Total <16ms)

**Overall Status:** [READY FOR PRODUCTION / NEEDS REFINEMENT / FAILED]

<template-output>
optimized_avg_fps,
optimized_min_fps,
optimized_paint_time,
optimized_forced_reflows,
optimized_throttled_4x,
optimized_throttled_6x,
optimized_will_change_count,
before_after_comparison,
accessibility_validation_results,
browser_compatibility_results,
production_readiness_status
</template-output>
</step>

<step n="7" goal="Generate Comprehensive Performance Report">
<action>Create detailed optimization report using template.md with all research citations</action>

🔧 **Generating Performance Report...**

*"Compiling optimization results with complete research citations from 6-part framework..."*

<action>Populate template.md with all captured variables:
- Chrome DevTools findings (before/after profiling data)
- Deep-Research framework analysis (Sections 5.1-5.6 insights)
- Archon MCP patterns (6 query results with source IDs)
- Accessibility preservation validation
- Optimized code with line-by-line explanations
- Before/after comparison table
- Validation test results
- Production readiness assessment
- Complete research citations (Deep-Research sections + Archon sources)
</action>

<action>Save comprehensive report to: {{default_output_file}}</action>

**Report saved to:** `{{output_folder}}/performance-report-{{timestamp}}.md`

---

🔧 **"60fps achieved using research-backed optimization from 6-part framework."**

**Optimization Results:**
- FPS: {{normal_avg_fps}} → {{optimized_avg_fps}} (+X% improvement)
- Paint Time: {{paint_time}}ms → {{optimized_paint_time}}ms (-Y% reduction)
- Forced Reflows: {{forced_reflows_count}} → 0 (eliminated)
- GPU Properties: 100% compliant (transform/opacity only)

**Research Applied:**
- Deep-Research Sections: 2.4, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, Pitfall 8.2
- Archon Sources: {{total_archon_sources}}
- Total Research Sources: {{total_research_sources}}

*All optimizations are backed by GSAP Excellence's most comprehensive performance framework. Test on target devices and monitor for regressions.*

**Next Steps:**
1. Deploy optimized code to staging
2. Test on actual mobile devices (iPhone SE, budget Android)
3. Monitor Web Vitals (especially Interaction to Next Paint)
4. Share learnings with team (prefers-reduced-motion pattern, GPU rule)

</step>

</workflow>
