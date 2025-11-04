# GSAP + React Integration Mastery

## Research Context

Prevents "long tedious debugging investigations" by teaching defensive implementation patterns upfront. Covers memory leaks, hydration mismatches, timing bugs, and complex state management.

---

## 1. useGSAP Hook Patterns (Defensive Implementation)

### Pattern: Automatic Cleanup Architecture

```javascript
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP); // MUST register before use

const Component = () => {
  const container = useRef();

  // ✅ CORRECT: Automatic cleanup on unmount
  useGSAP(() => {
    gsap.to(".box", { x: 100 });
    // No manual cleanup needed - useGSAP handles ctx.revert()
  }, { scope: container });

  return <div ref={container}><div className="box" /></div>;
};
```

**Why it prevents bugs**: Automatic cleanup, scoped selectors prevent cross-component conflicts.

---

### Pattern: Dependency Management (Prevent Double Animations)

```javascript
// ✅ Run once on mount
useGSAP(() => {
  gsap.from(".hero", { opacity: 0, duration: 1 });
}, []); // Empty array

// ✅ Respond to state changes
useGSAP(() => {
  gsap.to(".menu", { x: isOpen ? 0 : -300 });
}, { dependencies: [isOpen], scope: container });

// ⚠️ DANGER: Runs every render
useGSAP(() => {
  gsap.to(".box", { rotation: 360 });
}, null); // Null = no memoization
```

---

### Pattern: Scope for Multi-Element Selection

```javascript
const container = useRef();

useGSAP(() => {
  gsap.from(".box", { opacity: 0, stagger: 0.1 });
}, { scope: container }); // Selectors scoped to container

return (
  <div ref={container}>
    <div className="box" />
    <div className="box" />
  </div>
);
```

**Why**: Reduces ref management, prevents selector collisions.

---

### Pattern: contextSafe for Event Handlers

```javascript
useGSAP((context, contextSafe) => {
  const onClick = contextSafe(() => {
    gsap.to(element, { rotation: 180 }); // Tracked & cleaned up
  });

  element.addEventListener("click", onClick);

  return () => element.removeEventListener("click", onClick);
}, { scope: container });
```

**Critical**: Use contextSafe for animations in event handlers (prevents memory leaks).

---

## 2. Timeline Lifecycle Management

### Pattern: useRef for Timeline Storage (NOT useState)

```javascript
// ✅ DEFENSIVE: Ref persists across renders
const tl = useRef();

useGSAP(() => {
  tl.current = gsap.timeline({ paused: true })
    .to(".box", { x: 100 })
    .to(".box", { rotation: 360 });
}, { scope: container });

// Access in event handlers
const playTimeline = () => tl.current.play();
```

**Why refs**: Timeline persists without triggering re-renders.

---

## 3. ScrollTrigger in React

### Pattern: ScrollTrigger Creation in useGSAP

```javascript
useGSAP(() => {
  gsap.to(".box", {
    x: 500,
    scrollTrigger: {
      trigger: ".box",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
    }
  });
  // ✅ Auto-cleanup: ScrollTrigger killed on unmount
}, { scope: container });
```

---

### Pattern: invalidateOnRefresh for Responsive Animations

```javascript
gsap.to(".box", {
  x: () => window.innerWidth - 100, // Function-based value
  scrollTrigger: {
    invalidateOnRefresh: true, // ✅ Recalc on resize
  }
});
```

**Without invalidateOnRefresh**: Values cached, broken on resize.

---

## 4. SSR/Hydration Strategies (Next.js 15)

### Pattern: 'use client' Boundary

```javascript
// components/Hero.tsx
"use client"; // ✅ Required for GSAP

import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {
    gsap.from(".hero-title", { opacity: 0, y: 50 });
  }, []);

  return <h1 className="hero-title">Welcome</h1>;
}
```

---

### Pattern: Suppress Hydration Warnings

```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
```

**Why**: ScrollTrigger adds inline styles to body, causing hydration mismatch.

---

### Pattern: Centralized GSAP Initialization

```javascript
// lib/gsap.ts
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let initialized = false;

export const initGSAP = () => {
  if (typeof window !== "undefined" && !initialized) {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    initialized = true;
  }
};
```

---

## 5. Common GSAP + React Bugs

### Bug: Double Animations on Mount

**Cause**: React Strict Mode calls useEffect twice.

**Solution**: useGSAP handles automatically.

---

### Bug: Timeline Fires Twice on State Change

**Cause**: Object dependencies trigger on every render.

```javascript
// ❌ BAD: Object dependency
const config = { duration: 1 };
useGSAP(() => {
  gsap.to(".box", config);
}, [config]); // Object reference changes

// ✅ GOOD: Primitive dependencies
const duration = 1;
useGSAP(() => {
  gsap.to(".box", { duration });
}, [duration]);
```

---

### Bug: Ref Timing (Accessing Before Mount)

```javascript
// ✅ GOOD: Selector text with scope
const container = useRef();

useGSAP(() => {
  gsap.to(".box", { x: 100 }); // Selector finds element
}, { scope: container });
```

---

### Bug: Memory Leak from Event Listeners

```javascript
useGSAP((context, contextSafe) => {
  const handleClick = contextSafe(() => {
    gsap.to(".box", { rotation: 360 });
  });

  button.addEventListener("click", handleClick);

  // ✅ CRITICAL: Remove listener
  return () => {
    button.removeEventListener("click", handleClick);
  };
}, []);
```

---

## 6. Performance Optimization

### Pattern: Transform-Only Animations

```javascript
// ✅ GOOD: GPU-accelerated (60fps)
gsap.to(".box", {
  x: 100,
  rotation: 360,
  scale: 1.5,
  opacity: 0.5,
});

// ❌ BAD: CPU-bound (30fps)
gsap.to(".box", {
  width: 200,  // Triggers layout
  height: 200,
});
```

---

### Pattern: force3D for Hardware Acceleration

```javascript
gsap.to(".box", {
  x: 500,
  rotation: 360,
  force3D: true, // ✅ Forces GPU layer
});
```

---

## QUALITY CRITERIA (DoD Checklist)

- [ ] No layout thrashing (transform/opacity only)
- [ ] 60fps in Chrome DevTools
- [ ] No hydration warnings
- [ ] useGSAP instead of useEffect
- [ ] Refs for timeline storage (not state)
- [ ] contextSafe for event handler animations
- [ ] scope used for multi-element selection
- [ ] Dependencies array only includes primitives
- [ ] 'use client' on GSAP components
- [ ] ScrollTrigger cleanup on unmount
- [ ] Memory stable after 10 loop iterations

---

**Research Sources**: GSAP docs, React integration guide, Next.js SSR patterns, Stack Overflow, GSAP forums.
