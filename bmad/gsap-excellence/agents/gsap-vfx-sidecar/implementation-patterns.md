# VFX Artist Implementation Knowledge Base

**Role:** Implementation specialist who WRITES the actual code
**Focus:** HOW to implement patterns discovered by Cinematographer
**Sections:** 2.5 (React/Next.js), 2.2/2.3 (Timeline/Tweens), 3.1-3.3 (Patterns), 3.7 (Cleanup)

---

## 1. REACT/NEXT.JS FRAMEWORK INTEGRATION (Section 2.5 - CRITICAL)

### 1.1: useGSAP() Hook Pattern (GSAP 3.13+ Official Hook)

**✅ CORRECT - Modern useGSAP Hook (Recommended):**
```javascript
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MyComponent() {
  const containerRef = useRef();

  useGSAP(() => {
    // All animations here auto-cleanup on unmount
    gsap.from('.box', { y: 50, opacity: 0, duration: 1 });

    ScrollTrigger.create({
      trigger: '.box',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    });
  }, { scope: containerRef }); // Scope to this component

  return (
    <div ref={containerRef}>
      <div className="box">Content</div>
    </div>
  );
}
```

**Why This Works:**
- `useGSAP` behaves like `useLayoutEffect` (runs before paint, prevents FOUC)
- Auto-cleanup on unmount (no manual ctx.revert() needed)
- Scoped selectors (animations only affect this component)
- Handles React 18 Strict Mode double-invocation automatically
- Reference: Archon gsap.com/resources/react-basics

**❌ WRONG - No Cleanup (Memory Leak):**
```javascript
function MyComponent() {
  useEffect(() => {
    gsap.from('.box', { y: 50, opacity: 0, duration: 1 });
    // NO CLEANUP! Animation persists after unmount
  }, []);
  // Problem: Memory leak, double animations on remount
}
```

### 1.2: gsap.context() Pattern (Alternative Approach)

**✅ CORRECT - Manual Context with Cleanup:**
```javascript
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MyComponent() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animations scoped to ref.current
      gsap.from('.box', { y: 50, opacity: 0, duration: 1 });
    }, ref); // Scope context to this ref

    return () => ctx.revert(); // CRITICAL: Cleanup on unmount
  }, []);

  return (
    <div ref={ref}>
      <div className="box">Content</div>
    </div>
  );
}
```

**Why Manual Context Still Matters:**
- Useful for complex animations requiring precise control
- Can add animations dynamically: `ctx.add(() => {...})`
- Can return custom cleanup function
- Reference: Archon gsap.com/docs/v3/GSAP/gsap.context()

### 1.3: React 18 Strict Mode Handling (CRITICAL)

**Problem:** React 18 Strict Mode calls useEffect twice in development, causing:
- Double animations (elements animate twice)
- ScrollTrigger conflicts (multiple triggers on same element)
- Memory leaks from uncleaned animations

**✅ SOLUTION - Context Revert Handles This:**
```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.hero', { opacity: 0, y: -50 });
  }, ref);

  // First render: Animation created
  // Strict Mode cleanup: ctx.revert() kills animation
  // Second render: Fresh animation created
  return () => ctx.revert(); // Prevents double animations
}, []);
```

**Reference:** Archon gsap.com/blog/3-11 (Context introduced for this exact issue)

### 1.4: Next.js SSR Considerations (Server Component Safety)

**❌ WRONG - Runs on Server (SSR Error):**
```javascript
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger); // ERROR: document is not defined

function Page() {
  gsap.to('.box', { x: 100 }); // ERROR: window is not defined
}
```

**✅ CORRECT - Client-Only Execution:**
```javascript
'use client'; // Mark as Client Component (Next.js 13+)

import { useEffect } from 'react';
import gsap from 'gsap';

function Page() {
  useEffect(() => {
    // Only runs on client (browser)
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.box', { x: 100 });
    }
  }, []);
}
```

**Next.js Best Practices:**
- Always mark GSAP components as `'use client'`
- useEffect ensures client-side execution
- Dynamic imports for code-splitting: `import('gsap').then(...)`
- Reference: Deep-Research Section 2.5

### 1.5: contextSafe Pattern (Event Handlers)

**✅ CORRECT - Safe Event Handlers:**
```javascript
function MyComponent() {
  const ref = useRef();
  const { contextSafe } = useGSAP({ scope: ref });

  // contextSafe wraps event handler to ensure cleanup
  const handleClick = contextSafe(() => {
    gsap.to('.box', { rotation: 360, duration: 1 });
  });

  return (
    <div ref={ref}>
      <button onClick={handleClick}>Spin</button>
      <div className="box">Box</div>
    </div>
  );
}
```

**Why contextSafe:**
- Animations created in event handlers are tracked by context
- Auto-cleanup when component unmounts
- Prevents animations running after component is gone
- Reference: Archon gsap.com/resources/react-advanced

### 1.6: useLayoutEffect vs useEffect Timing

**useLayoutEffect (useGSAP default):**
- Runs synchronously BEFORE browser paint
- Prevents FOUC (Flash of Unstyled Content)
- Use for animations that set initial state

**✅ CORRECT - Prevent FOUC:**
```javascript
useGSAP(() => {
  // Sets initial state BEFORE user sees page
  gsap.set('.hero', { opacity: 0, y: -50 });
  gsap.to('.hero', { opacity: 1, y: 0, duration: 1 });
}, { scope: ref });
// Runs BEFORE paint, no flicker
```

**useEffect:**
- Runs asynchronously AFTER browser paint
- May cause brief flicker
- Use for non-visual setup (event listeners, etc.)

## 2. TIMELINE & TWEEN IMPLEMENTATION (Sections 2.2-2.3)

### 2.1: Timeline Building Patterns

**✅ CORRECT - Overlapping Timeline (Rhythm & Flow):**
```javascript
const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });

tl.from('.header', { y: -80, opacity: 0 })
  .from('.tagline', { opacity: 0, y: 20 }, '-=0.4')  // Overlap 0.4s
  .from('.hero-image', { opacity: 0, scale: 0.8 }, '<0.2'); // 0.2s after tagline starts

// Result: Smooth cascade, not rigid sequence
```

**Why Overlaps Matter:**
- Creates rhythm (not robotic one-after-one)
- Directs eye flow (header → tagline → image)
- Feels more natural and premium
- Reference: Deep-Research Section 3.1

**❌ WRONG - Sequential Without Rhythm:**
```javascript
gsap.from('.header', { y: -80, opacity: 0, duration: 1 });
gsap.from('.tagline', { opacity: 0, y: 20, duration: 1, delay: 1 });
gsap.from('.hero-image', { opacity: 0, scale: 0.8, duration: 1, delay: 2 });
// Problem: Rigid, robotic, no flow
```

### 2.2: Labeled Scene Structure (Advanced Choreography)

**✅ CORRECT - Timeline with Scene Labels:**
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#product-section',
    start: 'top top',
    end: '+=200%',
    scrub: 1,
    pin: true
  }
});

tl.addLabel('intro')
  .from('.phone', { y: '10%', scale: 0.9, opacity: 0, duration: 0.5 })
  .from('.screen-1', { opacity: 0, y: 50 }, '<0.1')

  .addLabel('feature2', '+=0.5')
  .to('.screen-1', { opacity: 0 })
  .from('.screen-2', { opacity: 0, y: 50 }, '<')

  .addLabel('feature3')
  .to('.screen-2', { opacity: 0 })
  .from('.screen-3', { opacity: 0, y: 50 }, '<');

// Can jump to scenes: tl.seek('feature2')
```

**Why Labels:**
- Modular scene organization
- Easy navigation: `tl.seek('sceneName')`
- Clearer intent in complex sequences
- Reference: Deep-Research Section 2.2

### 2.3: Timeline Control Methods (Interactive Animations)

**✅ CORRECT - User-Controlled Timeline:**
```javascript
const tl = gsap.timeline({ paused: true }); // Start paused

tl.to('.box', { x: 200, duration: 1 })
  .to('.circle', { scale: 2 }, '<')
  .to('.square', { rotation: 360 });

// User controls
playBtn.addEventListener('click', () => tl.play());
pauseBtn.addEventListener('click', () => tl.pause());
reverseBtn.addEventListener('click', () => tl.reverse());

// Scrub control (slider)
slider.addEventListener('input', (e) => {
  tl.progress(e.target.value / 100); // 0-100 slider → 0-1 progress
});

// Speed control
speedBtn.addEventListener('click', () => {
  const current = tl.timeScale();
  tl.timeScale(current === 1 ? 2 : 1); // Toggle 1x/2x
});
```

**Use Cases:**
- Interactive demos
- Video-style playback controls
- Scrubber interfaces
- Reference: Deep-Research Section 2.2

### 2.4: .to() vs .from() vs .fromTo() (When to Use Each)

**✅ .to() - Animate TO a value (Most Common):**
```javascript
gsap.to('.box', { x: 100, opacity: 0.5, duration: 1 });
// Animates from CURRENT state to x:100, opacity:0.5
// Use when: You want element to animate from where it is now
```

**✅ .from() - Animate FROM a value:**
```javascript
gsap.from('.box', { opacity: 0, y: 50, duration: 1 });
// Animates from opacity:0, y:50 TO current state
// Use when: Intro animations (fade in, slide in)
```

**⚠️ .from() Gotcha - immediateRender:**
```javascript
// ❌ WRONG - Flickers on page load
gsap.from('.hero', { opacity: 0, delay: 1 });
// Problem: Sets opacity:0 IMMEDIATELY, THEN waits 1s, THEN animates
// Result: Element visible → disappears → reappears (flicker)

// ✅ CORRECT - Use .fromTo() for delayed from animations
gsap.fromTo('.hero',
  { opacity: 0 }, // FROM state
  { opacity: 1, delay: 1, duration: 1 } // TO state
);
// Sets opacity:0 at delay start, no flicker
```

**Reference:** Archon gsap.com/resources/mistakes (Common .from() pitfall)

### 2.5: Nesting Timelines (Modular Approach)

**✅ CORRECT - Nested Timelines:**
```javascript
// Sub-timeline for intro
const introTl = gsap.timeline();
introTl.from('.logo', { scale: 0, duration: 0.5 })
       .from('.nav', { opacity: 0, stagger: 0.1 });

// Sub-timeline for hero
const heroTl = gsap.timeline();
heroTl.from('.hero-title', { y: -50, opacity: 0 })
      .from('.hero-subtitle', { y: 50, opacity: 0 }, '<0.2');

// Master timeline
const master = gsap.timeline();
master.add(introTl)
      .add(heroTl, '+=0.3'); // Hero starts 0.3s after intro ends
```

**Why Nest:**
- Modular (develop/test sub-timelines separately)
- Reusable (same intro on multiple pages)
- Clearer structure for complex sequences
- Reference: Deep-Research Section 2.2

## 3. PATTERN IMPLEMENTATION (Sections 3.1-3.3)

### 3.1: Page Load Sequence Implementation

**✅ CORRECT - Overlapping Page Load:**
```javascript
// React Component
function HomePage() {
  const ref = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.from('.header', { y: -80, opacity: 0, duration: 0.8 })
      .from('.tagline', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from('.hero-image', { opacity: 0, scale: 0.8, duration: 1 }, '<0.2')
      .from('.cta-button', { scale: 0, duration: 0.5 }, '-=0.3');

    // Sequence: header → tagline (0.4s overlap) → image (0.2s after tagline)
    // → button (0.3s overlap with image)
    // Total: ~1.5 seconds (not 3 seconds sequential)
  }, { scope: ref });

  return (
    <div ref={ref}>
      <h1 className="header">Welcome</h1>
      <p className="tagline">Experience the difference</p>
      <img className="hero-image" src="hero.jpg" />
      <button className="cta-button">Get Started</button>
    </div>
  );
}
```

**Timing Targets:**
- Total intro: 1.5-2.5 seconds (not longer)
- Overlap: 20-40% of duration (creates rhythm)
- Reference: Deep-Research Section 3.1

### 3.2: ScrollTrigger Reveal Implementation

**✅ CORRECT - Batch Reveal (Performance Optimized):**
```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Batch multiple elements into single trigger (efficient!)
ScrollTrigger.batch('.reveal-item', {
  onEnter: (elements) => {
    gsap.from(elements, {
      opacity: 0,
      y: 60,
      stagger: { each: 0.15, from: 'random' }, // Random order (organic)
      duration: 0.8,
      ease: 'power3.out',
      overwrite: true
    });
  },
  start: 'top 85%',
  end: 'top 15%',
  once: true // Only animate once (remove after)
});

// Why batch(): Groups nearby elements → 1 trigger instead of 100
// Performance: Handles 1000+ elements efficiently
```

**❌ WRONG - Individual Triggers (Slow):**
```javascript
document.querySelectorAll('.reveal-item').forEach(item => {
  gsap.from(item, {
    opacity: 0,
    y: 60,
    scrollTrigger: { trigger: item, start: 'top 85%' }
  });
});
// Problem: 100 elements = 100 ScrollTriggers (slow!)
```

**Reference:** Archon gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch()

### 3.3: Pinning Implementation (Scroll-Tied Storytelling)

**✅ CORRECT - Pinned Section with Scrub:**
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#product-section',
    start: 'top top',       // Pin when section hits top of viewport
    end: '+=200%',          // Scroll distance (2x viewport height)
    pin: true,              // Pin section during animation
    scrub: 1,               // Tie animation to scroll (1s lag for smoothness)
    anticipatePin: 1        // Prevent jump when pin starts
  }
});

tl.from('.product-image', { y: '10%', scale: 0.9, opacity: 0, duration: 0.5 })
  .from('.feature-1', { opacity: 0, y: 50 }, '<0.1')
  .to('.feature-1', { opacity: 0, duration: 0.2 }, '+=0.5')
  .from('.feature-2', { opacity: 0, y: 50 }, '<')
  .to('.feature-2', { opacity: 0, duration: 0.2 }, '+=0.5')
  .from('.feature-3', { opacity: 0, y: 50 }, '<');

// User scrolls → timeline progress advances
// User scrolls back → timeline reverses automatically
```

**scrub Values:**
- `scrub: true` - Direct tie (choppy on slow devices)
- `scrub: 0.5` - 0.5s lag (smooth on most devices)
- `scrub: 1` - 1s lag (very smooth, recommended)
- Reference: Deep-Research Section 3.3

### 3.4: Common ScrollTrigger Mistakes

**❌ MISTAKE 1 - Creating Triggers on Every Scroll:**
```javascript
// WRONG - Creates thousands of triggers!
window.addEventListener('scroll', () => {
  gsap.to('.box', {
    scrollTrigger: { trigger: '.box', start: 'top 80%' },
    x: 100
  });
});
// Problem: New trigger created every scroll event
```

**✅ CORRECT - Create Triggers ONCE:**
```javascript
// Create trigger once on mount
useGSAP(() => {
  gsap.to('.box', {
    scrollTrigger: { trigger: '.box', start: 'top 80%' },
    x: 100
  });
}, []);
```

**❌ MISTAKE 2 - Forgetting ScrollTrigger.refresh():**
```javascript
// WRONG - Positions calculated before images load
useGSAP(() => {
  gsap.to('.box', { scrollTrigger: { trigger: '.box' } });
}, []);
// Problem: If images load after triggers created, positions wrong
```

**✅ CORRECT - Refresh After Content Loads:**
```javascript
useGSAP(() => {
  gsap.to('.box', { scrollTrigger: { trigger: '.box' } });

  // Refresh after images load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}, []);
```

## 4. CLEANUP PATTERNS (Section 3.7 - CRITICAL)

### 4.1: React Component Cleanup

**✅ CORRECT - Full Cleanup:**
```javascript
function AnimatedComponent() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to('.box', { rotation: 360, duration: 2 });

      ScrollTrigger.create({
        trigger: '.section',
        start: 'top top',
        pin: true
      });
    }, ref);

    // Cleanup on unmount
    return () => {
      ctx.revert(); // Reverts all GSAP changes + kills ScrollTriggers
    };
  }, []);

  return <div ref={ref}>...</div>;
}
```

**What ctx.revert() Does:**
- Kills all animations created in context
- Kills all ScrollTriggers
- Removes inline styles GSAP added
- Removes event listeners GSAP added
- Reference: Archon gsap.com/blog/3-11

### 4.2: SPA Navigation Cleanup (Route Changes)

**✅ CORRECT - Next.js Route Change Cleanup:**
```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Kill ALL ScrollTriggers from previous page
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Scroll to top
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return <>{children}</>;
}
```

**Why Kill Triggers on Route Change:**
- Prevents pinned elements from sticking on new page
- Clears old ScrollTrigger calculations
- Avoids conflicts between pages
- Reference: Deep-Research Section 3.7

### 4.3: Memory Leak Prevention Checklist

**✅ Always Cleanup:**
- [ ] Kill timelines on unmount: `tl.kill()` or `ctx.revert()`
- [ ] Kill ScrollTriggers: `ScrollTrigger.getAll().forEach(st => st.kill())`
- [ ] Remove event listeners: `element.removeEventListener(...)` or use `ctx.revert()`
- [ ] Clear intervals/timeouts: `clearInterval(id)`, `clearTimeout(id)`
- [ ] Kill gsap.ticker callbacks: `gsap.ticker.remove(callback)`

**❌ Common Leak - Ticker Not Removed:**
```javascript
// WRONG - Ticker runs forever
useEffect(() => {
  const update = () => { /* ... */ };
  gsap.ticker.add(update);
  // NO CLEANUP!
}, []);
```

**✅ CORRECT - Remove Ticker:**
```javascript
useEffect(() => {
  const update = () => { /* ... */ };
  gsap.ticker.add(update);

  return () => gsap.ticker.remove(update); // Cleanup
}, []);
```

## 5. IMPLEMENTATION WORKFLOW

### 5.1: VFX Artist Implementation Checklist

**Before Coding:**
1. [ ] Receive spec from Director (desired effect, timing, interactions)
2. [ ] Review patterns from Cinematographer research
3. [ ] Identify framework (React, Next.js, Vanilla)
4. [ ] Check browser support requirements
5. [ ] Verify GSAP 3.13.0+ (premium plugins FREE!)

**While Coding:**
1. [ ] Use useGSAP() hook (React) or gsap.context() for scoping
2. [ ] GPU-accelerate: Only animate transform, opacity
3. [ ] Avoid layout properties: width, height, top, left
4. [ ] Add cleanup: ctx.revert() in useEffect return
5. [ ] Test with React Strict Mode (expect double-invocation)
6. [ ] Add markers for debugging: `markers: true` (remove in production)

**After Coding:**
1. [ ] Test in target browsers (Chrome, Firefox, Safari)
2. [ ] Verify 60fps with CPU throttle 4x (Chrome DevTools)
3. [ ] Check memory leaks: Navigate away/back 5x, no growth
4. [ ] Test prefers-reduced-motion (disable if motion-preference: reduce)
5. [ ] Remove debug markers
6. [ ] Document complex patterns for Editor review

### 5.2: Handoff to Other Agents

**To Editor (Debugging):**
- Provide animation code with issue description
- Include browser/device where issue occurs
- Note expected vs actual behavior

**To Tech Director (Performance Check):**
- Mark animation as "Ready for performance review"
- Include target devices/browsers
- Note any performance concerns observed

**From Cinematographer (Pattern Research):**
- Receive researched pattern with references
- Adapt pattern to project framework (React/Next.js)
- Implement with cleanup and optimization

## 6. COMMON IMPLEMENTATION PITFALLS (Solved)

**Pitfall 1: React Double-Animation (Strict Mode)**
- **Symptom:** Elements animate twice in dev
- **Fix:** Use ctx.revert() in useEffect cleanup
- **Reference:** Archon gsap.com/blog/3-11

**Pitfall 2: Next.js SSR "document is not defined"**
- **Symptom:** Error during build/SSR
- **Fix:** Mark component `'use client'`, use useEffect
- **Reference:** Deep-Research Section 2.5

**Pitfall 3: ScrollTrigger Positions Wrong**
- **Symptom:** Animations trigger at wrong scroll points
- **Fix:** Call `ScrollTrigger.refresh()` after images load
- **Reference:** Deep-Research Section 3.2

**Pitfall 4: .from() Flicker with Delay**
- **Symptom:** Element visible → disappears → reappears
- **Fix:** Use .fromTo() instead of .from() with delay
- **Reference:** Archon gsap.com/resources/mistakes

**Pitfall 5: Memory Leak on Route Change**
- **Symptom:** App slows down after multiple navigations
- **Fix:** Kill ScrollTriggers on route change
- **Reference:** Deep-Research Section 3.7

## 7. USAGE DIRECTIVE

**When Implementing Animations:**
1. **Framework First:** Identify React/Next.js/Vanilla → use correct pattern
2. **Cleanup Always:** useGSAP() or ctx.revert() MANDATORY
3. **Test Strict Mode:** Expect double-invocation, verify no issues
4. **GPU Properties:** Only animate transform, opacity (not width/height)
5. **Timeline Over Tweens:** Use timeline for multi-step animations
6. **Overlap for Rhythm:** Use "-=0.4", "<0.2" for flow
7. **Batch ScrollTriggers:** Use ScrollTrigger.batch() for lists
8. **Refresh After Load:** Call ScrollTrigger.refresh() after async content
9. **Kill on Navigate:** ScrollTrigger.getAll().forEach(st => st.kill())
10. **Document Complexity:** Add comments for Editor/Tech Director review

**Quality Bar:**
- Code is production-ready on first implementation
- No memory leaks (verified with 5x navigation test)
- 60fps on mid-range devices (4x CPU throttle)
- React Strict Mode compatible
- Next.js SSR safe
- All animations have cleanup

**Collaboration:**
- Receive specs from Director (creative vision)
- Use patterns from Cinematographer (research)
- Validate with Editor (pitfall checking)
- Pass to Tech Director (performance/accessibility)

**Reference Sources:**
- Section 2.5: React/Next.js integration (Deep-Research)
- Sections 2.2-2.3: Timeline/Tween implementation (Deep-Research)
- Sections 3.1-3.3: Pattern implementation (Deep-Research)
- Section 3.7: Cleanup patterns (Deep-Research)
- Archon MCP: gsap.com/resources/react-basics, gsap.com/docs/v3/GSAP/gsap.context()
- Archon MCP: gsap.com/blog/3-11, gsap.com/resources/frameworks

**Implementation Philosophy:**
- Write code that works the first time
- Cleanup is non-negotiable
- Performance is built-in, not an afterthought
- Framework integration is done properly
- Patterns are implementation-ready, not theoretical

**VFX Artist Role Summary:**
I implement animations that Director envisions, Cinematographer researches, Editor validates, and Tech Director performance-checks. I write production-ready code with proper framework integration, cleanup, and optimization from the start.
