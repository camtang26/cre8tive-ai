### 2.5 Integration Patterns: GSAP + React / Next.js / Other Frameworks

GSAP can be integrated anywhere, but special care is needed in modern frameworks (React, Vue, Angular, etc.) to ensure animations play well with the component lifecycle and SSR (server-side rendering). We highlight React/Next.js since it's common:

* **Basic React Hooks Pattern:** In React functional components, the typical pattern is:

```{=html}
<!-- -->
```

* import { useEffect, useRef } from 'react';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  ```
  function MyComponent() {
    const ref = useRef();
    useEffect(() => {
      let ctx = gsap.context(() => {
        // Animation code here, limited to this component’s DOM
        gsap.from(ref.current, { y: 50, opacity: 0, duration: 1 });
        ScrollTrigger.create({ trigger: ref.current, ... });
      }, ref);
      return () => ctx.revert();  // cleanup on unmount
    }, []);
    return <div ref={ref}>Hello</div>;
  }
  ```

  Key points:

```{=html}
<!-- -->
```

* We use a `ref` to target the DOM node. Directly selecting via class is possible but using `ref` ensures we target this component's element specifically (important if multiple instances).

* We call our GSAP code inside `useEffect(...)` with an empty dependency array (`[]`) so it runs once on mount (not on every render).

* We use `gsap.context()` which is a powerful utility introduced in GSAP 3.11 for React integration. By wrapping animations in `gsap.context(() => {...}, ref)`, GSAP will **scope selectors and create a context** tied to that component. It also records all animations/triggers created. On cleanup (`ctx.revert()`), it will automatically kill any ScrollTriggers, revert any inline styles added, and cleanup animations[\[26\]](https://gsap.com/resources/React/#:~:text=%60useGSAP%28%29%60%20is%20a%20drop,and%20Context%20makes%20it%20simple). This prevents the dreaded issue of React strict mode running effects twice and causing double animations -- context revert handles it gracefully. **AI models should utilize gsap.context or the new GSAP React hook (below)** to ensure no memory leaks or duplicate effects in React 18+.

* The cleanup function in the effect calls `ctx.revert()`. This is crucial. It ensures if the component unmounts, the animations stop and any changes are undone (so if component remounts later, it starts fresh). Many AI examples historically omitted proper cleanup, leading to bugs in real apps (e.g., animations running after component is gone). We must emphasize cleanup in our content.

* **Next.js (SSR) Considerations:** Next.js does server-side rendering of React, where `window` and `document` don't exist. GSAP tries to access them when initializing plugins or starting animations. To avoid errors like "ReferenceError: document is not defined," you must ensure GSAP code only runs on the client:

* The above approach (using useEffect) already ensures code runs on client side (after mount). Additionally, if you do any `gsap.registerPlugin()` calls, do them in a check or on client. E.g., you can `if (typeof window !== "undefined") { gsap.registerPlugin(...); }` around plugin registration if doing it at module top. Or simply do registration inside the same useEffect.

* Next.js also now has an App Directory with use client vs server components -- ensure your component using GSAP is marked as a client component (e.g., by putting `"use client";` at top if using Next 13+). AI should mention this context if asked, but in general we focus on concept: **only run GSAP in browser environment**.

* Dynamic imports: Another tactic, you can dynamically import GSAP or certain plugins so that they load only on client. For example:

```{=html}
<!-- -->
```

* useEffect(() => {
  let ctx;
  import('gsap').then(({ default: gsap }) => {
  import('gsap/ScrollTrigger').then(() => {
  gsap.registerPlugin(ScrollTrigger);
  ctx = gsap.context(...);
  // ... rest
  });
  });
  return () => ctx && ctx.revert();
  }, \[]);

  This is sometimes used to avoid GSAP even being part of the initial SSR bundle. But it adds complexity. The simpler approach is to ensure code is in useEffect and not referencing GSAP globally during SSR. In our training doc, we just note the SSR issue and that wrapping in conditional or useEffect solves it. **AI-specific note:** Many AI models might inadvertently output GSAP code at top-level (which could run during SSR) -- our training here should correct that behavior: always put GSAP init inside `if (window)` or `useEffect` in SSR contexts.

```{=html}
<!-- -->
```

* With Next.js 13+ and React 18, remember that in development, React renders components twice (strict mode), which will call useEffect cleanup in between. Using `gsap.context()` or the official hook is the fix to prevent double execution issues. If an AI didn't know this, it might produce animations that flicker or run twice in dev.

* **The** `useGSAP()` **Hook (GSAP React Plugin):** GSAP 3.13 introduced an official React hook to streamline this. It essentially wraps the context pattern. Usage:

```{=html}
<!-- -->
```

* import { useGSAP } from "@gsap/react";
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  ```
  function Component() {
    const ref = useRef();
    useGSAP(() => {
      gsap.from(ref.current, { opacity: 0, y: 50 });
      // any ScrollTriggers or animations here auto-clean
    }, []); // dependencies if needed
    return <div ref={ref}>Content</div>;
  }
  ```

  `useGSAP` behaves like `useLayoutEffect` by default (which runs earlier than regular useEffect, preventing Flash of Unstyled Content (FOUC) if we set initial styles)[\[27\]](https://gsap.com/resources/frameworks/#:~:text=Proper%20animation%20cleanup%20is%20important,you%20don%27t%20revert%20things%20properly). It automatically calls context.revert on cleanup[\[26\]](https://gsap.com/resources/React/#:~:text=%60useGSAP%28%29%60%20is%20a%20drop,and%20Context%20makes%20it%20simple). It's a drop-in replacement for useEffect in GSAP scenarios. For AI, it's enough to know that such a hook exists to simplify patterns. In code examples, we can either use `gsap.context` or `useGSAP` -- both achieve similar cleanliness. The key is: **handle cleanup and strict mode re-invocation**.

```{=html}
<!-- -->
```

* **Vue / Others:** In Vue 3, a Composition API approach is similar:

```{=html}
<!-- -->
```

* import { onMounted, onUnmounted } from 'vue';
  onMounted(() => { ...animations... });
  onUnmounted(() => { ...kill animations... });

  Vue doesn't double-call onMounted in dev, so it's simpler. Still, `gsap.context` can be used in Vue by providing an element (like `const ctx = gsap.context(()=>{...}, appElement)` and `ctx.revert()` on unmount). Angular and others have their own lifecycles (ngAfterViewInit for start, ngOnDestroy for cleanup).

For brevity, our focus is React/Next as they have more pitfalls with strict mode. *AI-specific pitfall:* Not handling React's double effect -- our guidelines above address it.

* **Integrating with Framework State:** Sometimes animations depend on state changes (e.g., a React state variable triggers an animation). Instead of using useEffect dependencies which risk re-running animations mid-flight, it can be better to use GSAP's control methods:

* Example: A menu open boolean triggers an animation: one approach is to watch that state and then `tl.play()` or `tl.reverse()` accordingly, rather than reinitializing the whole timeline.

* Another approach: Use Flip plugin for state changes in frameworks (like moving elements from one list to another based on state -- Flip can compare DOM before/after).

* **Next.js Page Transitions:** Many high-end sites use smooth transitions between pages (e.g. fade out current, then fade in next). Next.js doesn't have built-in transitions, but one can implement with routes events or using transition libraries. If doing manually, remember to cleanup triggers from previous page. One can use a global GSAP context or `ScrollTrigger.getAll().forEach(t=>t.kill())` on route change. There's also an upcoming official integration with Next/React where GSAP can persist context across route changes if needed, but that's advanced. The main idea: kill animations on navigation if they should not persist.

In summary, *GSAP can play nicely with modern frameworks*, but AI must manage lifecycles: - Always initialize in mounted hooks, not before. - Always cleanup on unmount. - Consider using GSAP's built-in helpers (context or useGSAP hook) to simplify this. - Be mindful of strict mode causing double init -- useGSAP/context solves that by cleaning before second run[\[27\]](https://gsap.com/resources/frameworks/#:~:text=Proper%20animation%20cleanup%20is%20important,you%20don%27t%20revert%20things%20properly). - Ensure SSR doesn't execute GSAP code by containing it to client (the useEffect pattern).

By mastering integration patterns, AI can confidently insert GSAP animations into any stack without causing memory leaks or weird behavior. This is crucial for "production-quality" code -- a demo might work once, but production apps mount/unmount components frequently, and mismanaged animations can lead to crashes or stale listeners.
