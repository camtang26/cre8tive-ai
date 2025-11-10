# ScrollTrigger Animation Creation - Systematic Protocol

<critical>The workflow execution engine is governed by: {project_root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: workflow.yaml</critical>

## Workflow Overview

This workflow creates production-quality ScrollTrigger animations using research-backed patterns from GSAP Deep-Research knowledge base. You will:

1. **Gather context** about the scroll effect requirements
2. **Load MANDATORY Deep-Research frameworks** (Sections 3.2, 3.3, 2.5, 3.7)
3. **Select scroll pattern** based on effect type (reveal, pin, parallax, scrub, horizontal)
4. **Configure ScrollTrigger** using research-backed trigger points and settings
5. **Generate implementation** with proper framework integration and cleanup
6. **Validate scroll behavior** with testing checklist

**Prerequisites:**
- GSAP 3.12+ installed (`gsap` + `gsap/ScrollTrigger`)
- User has scroll animation requirement (elements to reveal, sections to pin, parallax effects, etc.)
- Framework context known (React/Next.js/Vue/Vanilla)
- Dev server URL available for testing

**Success Criteria:**
- ScrollTrigger activates at correct scroll positions
- 60fps smooth scrolling (no jank)
- Proper cleanup (no lingering ScrollTriggers)
- Research-backed configuration (not trial-and-error)
- Mobile-responsive trigger points

## Prerequisites

<workflow>

<step n="0" goal="Initialize ScrollTrigger workflow context">
  <action>Confirm prerequisites:
  - GSAP 3.12+ installed (check package.json or CDN)
  - ScrollTrigger plugin available
  - User has scroll animation requirements
  - Framework context known
  - Dev server URL for testing available

  If any prerequisite missing, halt and guide user to resolve.</action>
</step>

<!-- ========================================
     STEP 1: GATHER SCROLL ANIMATION CONTEXT
     ======================================== -->

<step n="1" goal="Understand scroll animation requirements">
  <action>Engage in collaborative discovery to understand their scroll animation vision:

  Ask targeted questions to explore:

  **Effect Type:**
  - Do you want elements to reveal as you scroll to them? (reveal)
  - Need a section to pin while content animates inside? (pin/scrub)
  - Want background to move slower than foreground? (parallax)
  - Horizontal scroll transformation? (horizontal)
  - Animation tied directly to scroll position? (scrub)

  **Elements & Selectors:**
  - Which elements need scroll animations?
  - How are they selected? (class, ref, id)
  - Are there multiple instances? (e.g., multiple .reveal-section)

  **Trigger Points:**
  - When should animations activate? (e.g., "when section is 80% down viewport")
  - Should animations reverse when scrolling up? (toggleActions)
  - Play once or every time user scrolls through? (once: true/false)

  **Visual Effects:**
  - What should happen visually? (fade in, slide up, scale, rotate, etc.)
  - Staggered or simultaneous? (if multiple elements)
  - Smooth scrub or instant trigger?

  **Framework Context:**
  - React/Next.js? (need useGSAP, SSR considerations)
  - Vue? (onMounted/onUnmounted)
  - Vanilla JS? (direct DOM)

  Adapt depth based on user's clarity - if uncertain, help them visualize options.</action>

  <ask>Summarize your understanding of requirements and confirm with user</ask>

  <action>Store gathered context:
  - effect_type: (reveal|pin|parallax|scrub|horizontal)
  - elements: [selectors and descriptions]
  - trigger_points: [start/end positions]
  - animation_details: [visual effects per element]
  - framework: (react|nextjs|vue|vanilla)
  - scrub_config: {scrub setting, pin, markers}
  </action>
</step>

<!-- ========================================
     MANDATORY DEEP-RESEARCH GATES
     ALL 4 SECTIONS MUST BE LOADED
     ======================================== -->

<research-gate enforcement="MANDATORY" blocking="true">
  <critical>
  You MUST load ALL 4 Deep-Research sections before proceeding to implementation.
  These sections contain the GSAP ScrollTrigger expertise that prevents generic implementations.

  Research gates CANNOT be skipped. User must explicitly continue with "Continue [c]" after each phase.
  </critical>

  <!-- RESEARCH PHASE 1: Scroll-Based Reveals (Section 3.2) -->
  <phase n="1" title="Deep-Research Section 3.2 - Scroll-Based Reveals" required="true">
    <action>Read COMPLETE Deep-Research file:

    Read: {deep_research_base}/12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md

    Extract and internalize:

    **Trigger Point Strategy:**
    - *"when top of section hits 80% down from top of viewport"* - standard reveal timing
      (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)
    - `start: "top 80%"` - when element top reaches 80% viewport height
    - `start: "top 85%"` - slightly later trigger for individual items

    **toggleActions Pattern:**
    - *"toggleActions: 'play none none reverse'"* - play on enter, reverse on leave back
      (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)
    - Breakdown: `"onEnter onLeave onEnterBack onLeaveBack"`
    - `"play none none reverse"` = animate in, stay visible when passed, reverse when scrolling up past
    - `"play none none none"` = play once, never reverse (persistent reveal)

    **Stagger for Multiple Elements:**
    ```javascript
    gsap.from(".feature-item", {
      opacity: 0,
      y: 50,
      stagger: 0.3,  // 0.3 seconds between each item
      duration: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".feature-list",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
    ```
    (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)

    **React Context Pattern:**
    ```javascript
    let ctx = gsap.context((self) => {
      self.selector(".feature-item").forEach(item => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            markers: false  // true for debugging
          }
        });
      });
    }, compRef);
    return () => ctx.revert();
    ```
    (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)

    **Single-Play Option:**
    - *"once: true to automatically disable after first play"*
      (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)
    - Add `once: true` to scrollTrigger config for one-time reveals

    **Advanced Tweaks:**
    - *"If content might load asynchronously, call ScrollTrigger.refresh() after content loads to recalc trigger positions"*
      (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)
    - For smooth scroll libraries: `ScrollTrigger.scrollerProxy(...)`

    **Edge Cases & Gotchas:**
    - *"Avoid creating ScrollTriggers inside other ScrollTrigger callbacks - it can compound"*
      (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)
    - One trigger per element, no overlapping
    - *"If multiple ScrollTriggers animate same element properties, you can get conflicts"*
      (Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md)
    </action>

    <checkpoint type="approval-gate" blocking="true">
      <action>Display summary of Section 3.2 insights:

      **Loaded Framework: Scroll-Based Reveals (Section 3.2)**
      - Trigger points: `start: "top 80%"` for container, `"top 85%"` for items
      - toggleActions: `"play none none reverse"` for reversible reveals
      - Stagger pattern: `stagger: 0.3` for sequential reveals
      - Single-play: `once: true` to disable after first trigger
      - React integration: `gsap.context()` with `ctx.revert()` cleanup
      - Gotcha: No ScrollTriggers inside callbacks, avoid overlapping triggers
      </action>

      <ask>Continue to next research phase [c] or review Section 3.2 again [r]?</ask>

      <mandate>User MUST explicitly type "c" or "Continue" to proceed. Agent cannot rationalize skipping this gate.</mandate>
    </checkpoint>
  </phase>

  <!-- RESEARCH PHASE 2: Pinning & Parallax (Section 3.3) -->
  <phase n="2" title="Deep-Research Section 3.3 - Pinning & Parallax" required="true">
    <action>Read COMPLETE Deep-Research file:

    Read: {deep_research_base}/13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md

    Extract and internalize:

    **Pinning Pattern:**
    - *"Pin the section during the animation"* with `pin: true`
      (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)
    - *"scrub: 1 - smooth scrubbing, 1 second delay"* for interactive scroll-tied animation
      (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)
    - *"anticipatePin: 1 - avoids jump at pin end"*
      (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)

    **Scroll Distance Configuration:**
    ```javascript
    scrollTrigger: {
      trigger: "#demoSection",
      start: "top top",      // when section hits top of viewport
      end: "+=200%",         // 2x viewport height scroll distance
      pin: true,             // pin section during animation
      scrub: 1,              // 1 second smooth delay
      anticipatePin: 1       // prevent jump at pin end
    }
    ```
    (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)

    **Timeline with Pinning:**
    - *"The user controls it. If they scroll back up, everything reverses automatically"*
      (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)
    - Create timeline attached to ScrollTrigger
    - All timeline steps scrubbed based on scroll position
    - Reversible by default with scrub

    **Step-by-Step Animation:**
    ```javascript
    let demoTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#demoSection",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1
      }
    });

    demoTl
      .from(".phone-frame img", { y: '10%', scale: 0.9, opacity: 0, duration: 0.5 })
      .from(".screen1", { opacity: 0, y: 50 }, "<0.1")
      .to("#stepText", { text: "Feature 2", duration: 0.2 }, "+=0.5")
      .to(".screen1", { opacity: 0 }, "<")
      .from(".screen2", { opacity: 0, y: 50 }, "<");
    ```
    (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)

    **Parallax Effect:**
    - *"Parallax effect: small parallax on phone image by moving it y:'10%'"*
      (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)
    - Use `%` units for viewport-relative movement
    - Slower movement = background, faster = foreground

    **Duration Matching:**
    - *"Adjust end accordingly so content has finished animating by then"*
      (Source: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md)
    - If timeline finishes early → users scroll with nothing happening
    - If end too short → animation may end before user finishes scrolling
    - Test with `markers: true` during dev

    **React Integration:**
    - Same pattern as vanilla, wrap in `gsap.context()` or `useGSAP`
    - Pinning adds inline styles (position: fixed, etc.)
    - `ctx.revert()` will remove pin styles on unmount
    </action>

    <checkpoint type="approval-gate" blocking="true">
      <action>Display summary of Section 3.3 insights:

      **Loaded Framework: Pinning & Parallax (Section 3.3)**
      - Pin configuration: `pin: true` with `scrub: 1` for smooth scroll-tied animation
      - Scroll distance: `end: "+=200%"` for 2x viewport scroll
      - anticipatePin: `anticipatePin: 1` prevents jump at pin end
      - Timeline scrubbing: All steps tied to scroll position, auto-reversible
      - Parallax: Use `y: '10%'` for viewport-relative movement
      - Duration matching: Adjust `end` to match timeline content
      - Testing: `markers: true` to visualize trigger/end positions
      </action>

      <ask>Continue to next research phase [c] or review Section 3.3 again [r]?</ask>

      <mandate>User MUST explicitly type "c" or "Continue" to proceed. Agent cannot rationalize skipping this gate.</mandate>
    </checkpoint>
  </phase>

  <!-- RESEARCH PHASE 3: React/Next.js Integration (Section 2.5) -->
  <phase n="3" title="Deep-Research Section 2.5 - React/Next.js Integration" required="true">
    <action>Read COMPLETE Deep-Research file:

    Read: {deep_research_base}/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md

    Extract and internalize:

    **React Context Pattern (MANDATORY for React):**
    - *"Using gsap.context() ensures cleanup on unmount"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)
    - Prevents memory leaks from lingering ScrollTriggers
    - Handles React 18 strict mode double-render

    ```javascript
    useEffect(() => {
      let ctx = gsap.context(() => {
        // Animation code here, scoped to this component
        gsap.from(ref.current, { y: 50, opacity: 0 });
        ScrollTrigger.create({ trigger: ref.current, ... });
      }, ref);
      return () => ctx.revert();  // CRITICAL: cleanup on unmount
    }, []);
    ```
    (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

    **useGSAP Hook (Modern Pattern):**
    - *"useGSAP behaves like useLayoutEffect by default, preventing Flash of Unstyled Content (FOUC)"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)
    - *"Automatically calls context.revert on cleanup"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

    ```javascript
    import { useGSAP } from "@gsap/react";
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    function Component() {
      const ref = useRef();
      useGSAP(() => {
        gsap.from(ref.current, { opacity: 0, y: 50 });
        // ScrollTriggers auto-clean
      }, []); // dependencies if needed
      return <div ref={ref}>Content</div>;
    }
    ```
    (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

    **Next.js SSR Safety:**
    - *"Next.js does server-side rendering where window/document don't exist"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)
    - *"Only run GSAP in browser environment"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

    **SSR Safety Patterns:**
    1. useEffect (runs only on client)
    2. `if (typeof window !== "undefined")` check
    3. `"use client"` directive (Next.js 13+ App Directory)
    4. Dynamic import: `import('gsap').then(...)`

    **Strict Mode Handling:**
    - *"React 18 renders components twice (strict mode) which calls useEffect cleanup in between"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)
    - *"Using gsap.context() or useGSAP hook fixes double execution issues"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)

    **Cleanup Mandate:**
    - *"Always cleanup on unmount - many AI examples historically omitted proper cleanup, leading to bugs"*
      (Source: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md)
    - Return cleanup function: `return () => ctx.revert();`
    - Kills animations, removes ScrollTriggers, reverts inline styles
    </action>

    <checkpoint type="approval-gate" blocking="true">
      <action>Display summary of Section 2.5 insights:

      **Loaded Framework: React/Next.js Integration (Section 2.5)**
      - React cleanup: `gsap.context()` with `ctx.revert()` MANDATORY
      - useGSAP hook: Modern pattern, auto-cleanup, useLayoutEffect timing
      - SSR safety: useEffect, `"use client"`, or `if (typeof window !== "undefined")`
      - Strict mode: context/useGSAP handles double-render automatically
      - Cleanup mandate: ALWAYS return cleanup function to prevent memory leaks
      - Next.js 13+: Use `"use client"` directive for GSAP components
      </action>

      <ask>Continue to next research phase [c] or review Section 2.5 again [r]?</ask>

      <mandate>User MUST explicitly type "c" or "Continue" to proceed. Agent cannot rationalize skipping this gate.</mandate>
    </checkpoint>
  </phase>

  <!-- RESEARCH PHASE 4: Cleanup & Reinitialization (Section 3.7) -->
  <phase n="4" title="Deep-Research Section 3.7 - Cleanup & Reinitialization" required="true">
    <action>Read COMPLETE Deep-Research file:

    Read: {deep_research_base}/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md

    Extract and internalize:

    **Kill All ScrollTriggers Pattern:**
    - *"Kill all ScrollTriggers to remove pinning/effects from old page"*
      (Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)

    ```javascript
    // On page leave/unmount:
    ScrollTrigger.getAll().forEach(trig => trig.kill());
    ```
    (Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)

    **Why This Matters:**
    - *"Ensure pinned elements are unpinned before new content enters"*
      (Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)
    - Prevents accumulation of triggers on navigation
    - Avoids double-animations if user navigates back/forth

    **Page Transition Pattern:**
    ```javascript
    // On route change:
    leave(data) {
      ScrollTrigger.getAll().forEach(trig => trig.kill());
      return gsap.to(data.current.container, { opacity: 0 });
    },
    enter(data) {
      window.scrollTo(0, 0);  // Reset scroll position
      gsap.from(data.next.container, { opacity: 0 });
      initPageAnimations();  // Re-initialize ScrollTriggers
    }
    ```
    (Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)

    **React Component Cleanup:**
    - *"In React apps, useEffect cleanup handles this at component level"*
      (Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)
    - `ctx.revert()` automatically kills ScrollTriggers
    - No manual `ScrollTrigger.getAll()` needed in components

    **Whole-Page Cleanup:**
    - For whole-page transitions via router: centralize cleanup
    - React Router: cleanup in route change listener
    - Next.js: cleanup in `beforePopState` or route events

    **GSAP Context Cleanup Benefits:**
    - *"GSAP Context captures event listeners added via GSAP utils as well"*
      (Source: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md)
    - Removes event listeners, ScrollTriggers, inline styles
    - One call: `ctx.revert()` handles everything
    </action>

    <checkpoint type="approval-gate" blocking="true">
      <action>Display summary of Section 3.7 insights:

      **Loaded Framework: Cleanup & Reinitialization (Section 3.7)**
      - Kill all triggers: `ScrollTrigger.getAll().forEach(trig => trig.kill())`
      - Unpin elements: Cleanup prevents stuck pinned positions
      - Scroll reset: `window.scrollTo(0, 0)` on page transitions
      - React cleanup: `ctx.revert()` auto-kills ScrollTriggers
      - Context benefits: Removes listeners, triggers, inline styles
      - Prevention: Avoids trigger accumulation and double-animations
      </action>

      <ask>All 4 Deep-Research sections loaded. Continue to implementation [c]?</ask>

      <mandate>User MUST explicitly type "c" or "Continue" to proceed. Agent cannot rationalize skipping this gate.</mandate>
    </checkpoint>
  </phase>
</research-gate>

<!-- ========================================
     STEP 2: SELECT SCROLL PATTERN
     ======================================== -->

<step n="2" goal="Select scroll pattern based on effect type">
  <action>Based on gathered context and loaded research, select appropriate ScrollTrigger pattern:

  **Pattern Selection Decision Tree:**

  **IF effect_type === 'reveal':**
  - Use: Scroll-Based Reveals (Section 3.2)
  - Config: `scrollTrigger: { trigger, start: "top 80%", toggleActions: "play none none reverse" }`
  - Best for: Elements appearing as you scroll to them
  - Consider: `stagger` if multiple elements, `once: true` if single-play

  **IF effect_type === 'pin' OR 'scrub':**
  - Use: Pinning & Parallax (Section 3.3)
  - Config: `scrollTrigger: { trigger, pin: true, scrub: 1, start: "top top", end: "+=200%" }`
  - Best for: Storytelling sections, step-by-step reveals
  - Consider: Timeline for multi-step animations, `anticipatePin: 1`

  **IF effect_type === 'parallax':**
  - Use: Hybrid of Sections 3.2 + 3.3
  - Config: Multiple ScrollTriggers with different `scrub` speeds
  - Background: `scrub: 2` (slower), Foreground: `scrub: 0.5` (faster)
  - Use `%` units for viewport-relative movement: `y: '10%'`

  **IF effect_type === 'horizontal':**
  - Use: Pinning pattern with `x` transforms
  - Config: Pin container, scrub horizontal timeline
  - End distance: Based on total width of horizontal content

  **IF framework === 'react' OR 'nextjs':**
  - MUST use: `gsap.context()` with `ctx.revert()` cleanup (Section 2.5)
  - OR: `useGSAP()` hook for modern pattern
  - SSR check: `"use client"` directive or `typeof window !== "undefined"`

  **IF framework === 'vanilla':**
  - Standard ScrollTrigger.create() or timeline pattern
  - Manual cleanup if using SPA router (Section 3.7)
  </action>

  <action>Document pattern selection rationale:

  Selected Pattern: [pattern name]
  Research Basis: [Section X.Y framework]
  Key Config: [scrollTrigger settings]
  Why This Pattern: [reasoning based on effect_type and research]
  </action>

  <ask>Confirm pattern selection with user</ask>
</step>

<!-- ========================================
     STEP 3: CONFIGURE SCROLLTRIGGER
     ======================================== -->

<step n="3" goal="Configure ScrollTrigger with research-backed settings">
  <action>Build ScrollTrigger configuration using Deep-Research frameworks:

  **Trigger Point Configuration:**

  Based on Section 3.2 research:
  - Container trigger: `start: "top 80%"` (when container enters 80% down viewport)
  - Individual items: `start: "top 85%"` (slightly later for stagger effect)
  - Pin trigger: `start: "top top"` (pin when section reaches top)

  **toggleActions Configuration:**

  Options from Section 3.2:
  - `"play none none reverse"` - Reversible reveal (animates in, reverses on scroll up past)
  - `"play none none none"` - Play once, stay visible (no reverse)
  - `"play pause resume reset"` - Full control over all scroll directions

  Format: `"onEnter onLeave onEnterBack onLeaveBack"`

  **Scrub Configuration (if applicable):**

  From Section 3.3:
  - `scrub: true` - Instant tie to scroll (no lag)
  - `scrub: 1` - 1 second smooth delay (recommended for polish)
  - `scrub: 2` - 2 second delay (for parallax background layers)

  **Pin Configuration (if applicable):**

  From Section 3.3:
  - `pin: true` - Pin element during animation
  - `anticipatePin: 1` - Prevent jump at pin end (MANDATORY with pin)
  - `end: "+=200%"` - Scroll distance (adjust based on timeline duration)

  **Markers (Development):**

  - `markers: true` - Show trigger/end positions (ENABLE during dev)
  - `markers: false` - Hide markers (DISABLE for production)

  **Additional Options:**

  - `once: true` - Trigger only first time (from Section 3.2)
  - `invalidateOnRefresh: true` - Recalculate on window resize
  - `onEnter: () => {}` - Callback when entering trigger zone
  </action>

  <action>Generate ScrollTrigger config object:

  ```javascript
  const scrollTriggerConfig = {
    trigger: [element or selector],
    start: [start position],
    end: [end position - if using pin/scrub],
    toggleActions: [four-part string],
    scrub: [true|number - if scrubbing],
    pin: [true|false - if pinning],
    anticipatePin: [1 if using pin],
    markers: [true for dev, false for prod],
    once: [true|false],
    // ... other options
  };
  ```
  </action>

  <action>Validate configuration against research:

  **Validation Checklist:**
  - [ ] Trigger point appropriate for effect type (Section 3.2 guidance)
  - [ ] toggleActions matches desired behavior (reversible vs single-play)
  - [ ] If using pin: anticipatePin included (Section 3.3 mandate)
  - [ ] If using scrub: appropriate delay value (1 second recommended)
  - [ ] End distance matches timeline duration (if pin+timeline)
  - [ ] Markers enabled for testing (will disable for production)
  </action>

  <ask>Review and confirm ScrollTrigger configuration</ask>
</step>

<!-- ========================================
     STEP 4: GENERATE IMPLEMENTATION CODE
     ======================================== -->

<step n="4" goal="Generate production-ready ScrollTrigger implementation">
  <action>Generate implementation code based on framework and pattern:

  **IF framework === 'vanilla':**

  Generate vanilla JavaScript implementation using Section 3.2 or 3.3 pattern.

  **IF framework === 'react':**

  Generate React implementation using Section 2.5 patterns:

  Option A: gsap.context() pattern
  ```javascript
  import { useEffect, useRef } from 'react';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  function Component() {
    const ref = useRef();

    useEffect(() => {
      let ctx = gsap.context(() => {
        // [ScrollTrigger animation code here]
      }, ref);

      return () => ctx.revert();  // CRITICAL: cleanup
    }, []);

    return <div ref={ref}>[content]</div>;
  }
  ```

  Option B: useGSAP hook (modern)
  ```javascript
  import { useRef } from 'react';
  import { useGSAP } from '@gsap/react';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  function Component() {
    const ref = useRef();

    useGSAP(() => {
      // [ScrollTrigger animation code here]
      // Auto-cleanup on unmount
    }, []); // dependencies if needed

    return <div ref={ref}>[content]</div>;
  }
  ```

  **IF framework === 'nextjs':**

  Add SSR safety:
  ```javascript
  "use client";  // Next.js 13+ App Directory

  import { useEffect, useRef } from 'react';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  function Component() {
    const ref = useRef();

    useEffect(() => {
      let ctx = gsap.context(() => {
        // [ScrollTrigger animation code here]
      }, ref);

      return () => ctx.revert();
    }, []);

    return <div ref={ref}>[content]</div>;
  }
  ```
  </action>

  <action>Populate animation code based on effect type:

  **FOR 'reveal' effect (Section 3.2):**

  ```javascript
  gsap.from(ref.current.querySelectorAll('.reveal-item'), {
    opacity: 0,
    y: 50,
    stagger: 0.3,  // if multiple elements
    duration: 0.6,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ref.current,
      start: "top 80%",
      toggleActions: "play none none reverse",
      markers: true  // ENABLE for testing
    }
  });
  ```

  **FOR 'pin' effect (Section 3.3):**

  ```javascript
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      markers: true
    }
  });

  tl.from(".element-1", { opacity: 0, y: 50, duration: 0.5 })
    .from(".element-2", { opacity: 0, y: 50 }, "<0.2")
    .to(".element-1", { opacity: 0 }, "+=0.5")
    .from(".element-3", { opacity: 0, scale: 0.8 }, "<");
  ```

  **FOR 'parallax' effect (Hybrid 3.2 + 3.3):**

  ```javascript
  // Background layer (slower)
  gsap.to(".bg-layer", {
    y: "30%",  // viewport-relative
    ease: "none",
    scrollTrigger: {
      trigger: ref.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 2  // slower movement
    }
  });

  // Foreground layer (faster)
  gsap.to(".fg-layer", {
    y: "10%",
    ease: "none",
    scrollTrigger: {
      trigger: ref.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5  // faster movement
    }
  });
  ```
  </action>

  <action>Add research citations to code comments:

  ```javascript
  // Scroll-Based Reveal Pattern (Section 3.2)
  // "when top of section hits 80% down from top of viewport"
  // Source: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md

  gsap.from(elements, {
    opacity: 0,
    y: 50,
    stagger: 0.3,  // Section 3.2: sequential reveal timing
    scrollTrigger: {
      trigger: container,
      start: "top 80%",  // Section 3.2: standard reveal position
      toggleActions: "play none none reverse",  // Section 3.2: reversible reveal
      markers: true
    }
  });
  ```
  </action>

  <action>Generate complete implementation file with:
  - Imports
  - Plugin registration
  - Component/function structure
  - ScrollTrigger animation code
  - Cleanup (if React/framework)
  - Research citations in comments
  </action>

  <ask>Review generated implementation code and confirm</ask>
</step>

<!-- ========================================
     STEP 5: ADD TESTING GUIDANCE
     ======================================== -->

<step n="5" goal="Provide ScrollTrigger testing checklist">
  <action>Generate testing checklist based on Deep-Research validation:

  **Testing Checklist for ScrollTrigger Animations:**

  **1. Trigger Position Validation (Section 3.2)**
  - [ ] Enable `markers: true` temporarily
  - [ ] Scroll slowly and verify trigger activates at expected position
  - [ ] Check that `start` position aligns with visual intent
  - [ ] If using `end`, verify animation completes before end marker

  **2. toggleActions Behavior (Section 3.2)**
  - [ ] Scroll down past trigger - animation should play
  - [ ] Scroll up past trigger (onLeaveBack) - verify reverse/reset behavior
  - [ ] If `once: true`, verify trigger disables after first play

  **3. Pin Behavior (if using pin - Section 3.3)**
  - [ ] Section pins when `start` position reached
  - [ ] Content animates correctly while pinned
  - [ ] Section unpins at `end` position without jump (anticipatePin working)
  - [ ] No layout shift when pin/unpin occurs

  **4. Scrub Smoothness (if using scrub - Section 3.3)**
  - [ ] Animation progress tied to scroll position
  - [ ] Smooth lag with `scrub: 1` (no jankiness)
  - [ ] Reversible when scrolling backward

  **5. Performance (60fps)**
  - [ ] Smooth scrolling at 60fps (no frame drops)
  - [ ] Test on mid-range device (CPU throttle 4x in Chrome DevTools)
  - [ ] No layout thrashing during scroll

  **6. Cleanup Validation (Section 2.5, 3.7)**
  - [ ] React: Component unmount → ctx.revert() called
  - [ ] Verify ScrollTriggers killed: `console.log(ScrollTrigger.getAll())`
  - [ ] No lingering event listeners
  - [ ] No pinned elements stuck after unmount

  **7. Mobile Responsiveness**
  - [ ] Test on mobile viewport (different trigger points may be needed)
  - [ ] Verify touch scrolling works smoothly
  - [ ] Check that animations don't block scroll on mobile

  **8. Async Content (if applicable - Section 3.2)**
  - [ ] If images/content load async: `ScrollTrigger.refresh()` called after load
  - [ ] Trigger positions correct after layout shifts

  **9. SSR (Next.js only - Section 2.5)**
  - [ ] No SSR errors ("document is not defined")
  - [ ] Animations only execute on client
  - [ ] `"use client"` directive present (Next.js 13+)

  **10. Production Cleanup**
  - [ ] `markers: false` in production build
  - [ ] All console.logs removed
  - [ ] Build passes without errors
  </action>

  <action>Provide manual testing steps:

  **Manual Testing Protocol:**

  1. **Enable Markers:**
     - Set `markers: true` in all ScrollTrigger configs
     - Look for green "start" and red "end" markers

  2. **Slow Scroll Test:**
     - Scroll very slowly through trigger zone
     - Verify animation activates at green marker
     - If pinning: verify pin starts at green, ends at red

  3. **Reverse Scroll Test:**
     - Scroll down past animation
     - Scroll back up
     - Verify toggleActions behavior (reverse/reset)

  4. **Fast Scroll Test:**
     - Scroll quickly through page
     - Verify all animations still trigger
     - No missed triggers due to scroll speed

  5. **Resize Test:**
     - Resize browser window
     - Scroll again
     - Verify trigger positions recalculated correctly

  6. **Navigation Test (React/SPA):**
     - Navigate away from page
     - Navigate back
     - Verify animations reinitialize correctly
     - No double-triggers

  7. **Mobile Device Test:**
     - Test on actual mobile device (or DevTools mobile emulation)
     - Verify touch scroll works
     - Check animation timing feels right on small screen
  </action>

  <ask>Review testing checklist and confirm understanding</ask>
</step>

<!-- ========================================
     STEP 6: FINALIZE AND DELIVER
     ======================================== -->

<step n="6" goal="Deliver ScrollTrigger implementation with documentation">
  <action>Prepare final deliverable package:

  **1. Implementation Code:**
  - Complete implementation file (framework-specific)
  - All imports, plugin registration
  - ScrollTrigger animation code
  - Cleanup (if React/framework)

  **2. Research Citations:**
  - List Deep-Research sections consulted
  - Specific patterns used from each section
  - Archon sources referenced (if any)

  **3. Configuration Summary:**
  - Scroll effect type
  - Trigger points chosen
  - toggleActions rationale
  - Scrub/pin settings (if applicable)

  **4. Testing Checklist:**
  - Complete testing protocol
  - Manual testing steps
  - Expected behavior descriptions

  **5. Next Steps:**
  - Disable markers for production
  - Run full testing protocol
  - Verify cleanup on unmount
  - Consider performance profiling (if complex)
  </action>

  <action>Display final summary:

  **ScrollTrigger Implementation Complete**

  **Effect Type:** [reveal|pin|parallax|scrub|horizontal]
  **Framework:** [react|nextjs|vue|vanilla]

  **Research Applied:**
  - Section 3.2: Scroll-Based Reveals → [specific patterns used]
  - Section 3.3: Pinning & Parallax → [specific patterns used]
  - Section 2.5: React Integration → [cleanup patterns used]
  - Section 3.7: Cleanup → [lifecycle management used]

  **Key Configuration:**
  - Trigger: [element/selector]
  - Start: [position]
  - toggleActions: [four-part string]
  - [Additional config...]

  **Testing Protocol:**
  - Enable markers temporarily
  - Test scroll behavior (forward/backward)
  - Verify cleanup on unmount
  - [Framework-specific tests...]

  **Production Checklist:**
  - [ ] Set `markers: false`
  - [ ] Remove debug console.logs
  - [ ] Test on mobile device
  - [ ] Verify 60fps performance
  - [ ] Validate cleanup (no memory leaks)
  </action>

  <action>Offer follow-up support:

  **Follow-up Options:**
  - Need to add more scroll effects? (can extend this implementation)
  - Performance issues? (use optimize-performance workflow)
  - Timing adjustments? (use refine-timing workflow)
  - Want to harvest this as a pattern? (use harvest-patterns workflow)
  </action>

  <ask>Confirm delivery complete. Any questions or refinements needed?</ask>
</step>

</workflow>

## Additional Notes

**Common ScrollTrigger Gotchas (from Deep-Research):**

1. **Creating triggers in callbacks** - Section 3.2 warns against this (compounds triggers)
2. **Missing anticipatePin** - Section 3.3 shows this causes jumps at pin end
3. **Forgetting cleanup** - Section 2.5 emphasizes React cleanup is MANDATORY
4. **SSR errors** - Section 2.5 shows how to avoid Next.js SSR issues
5. **Wrong end distance** - Section 3.3 explains matching end to timeline duration

**When to Use Other Workflows:**

- **Performance issues during scroll?** → Use `optimize-performance` workflow
- **Timing feels off?** → Use `refine-timing` workflow
- **Want to save this pattern?** → Use `harvest-patterns` workflow
- **Need more complex timeline?** → Use `create-timeline` workflow
- **Production deployment?** → Use `validate-complete` workflow

**Research Sources:**

- Deep-Research Section 3.2: 12-32-pattern-content-reveal-on-scroll-scrolltrigger-basics.md
- Deep-Research Section 3.3: 13-33-pattern-sticky-scroll-triggered-animation-pinning-parallax.md
- Deep-Research Section 2.5: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md
- Deep-Research Section 3.7: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md

**Archon MCP Sources:**

- b9f6b322298feb21: gsap.com official docs (442K words)
- 6a6860cfc96e173b: ScrollTrigger docs (526K words)
- 1e5cc3bd5125be3c: Codrops ScrollTrigger tutorials (42K words)
- 90c2ef5e8fa816b7: FreeFrontend scroll examples (207K words)
