# Performance Audit Report (Chrome DevTools MCP)

**Date:** November 19, 2025
**Page Audited:** `/studios` (Local Preview)
**Tool:** Chrome DevTools Protocol (via MCP)

## 📊 Executive Summary

The Studios page demonstrates excellent load performance in a controlled lab environment (LCP 704ms), significantly better than the previous headless Lighthouse run. However, **JavaScript execution and Layout Thrashing** remain the primary bottlenecks, with nearly 100ms lost to forced reflows during the initial render.

## 📉 Key Metrics (Lab Trace)

*   **Largest Contentful Paint (LCP):** `704ms` (Excellent)
    *   **Breakdown:**
        *   **TTFB:** 4ms (Instant)
        *   **Render Delay:** 700ms (99.4% of LCP)
    *   **Analysis:** The browser receives content immediately, but the LCP element (text) waits 700ms before becoming visible. This confirms that **client-side hydration or entry animations (GSAP)** are hiding the text initially.

*   **Forced Reflows (Layout Thrashing):** `99ms` (Warning)
    *   **Impact:** The main thread is blocked for ~100ms just recalculating layout, likely causing frame drops during the intro animation.
    *   **Primary Culprits:**
        1.  `index.BtydedJO.js` (86ms self-time) - Likely GSAP `ScrollTrigger` or `SplitText` calculations reading layout properties (`offsetWidth`/`offsetHeight`) immediately after writing styles.
        2.  `...C5aLPlYS.js` (197ms total duration) - A heavy component initialization (possibly `Spline` or `Three.js` chunk).
        3.  `ElevenLabs` Widget - Contributing minor thrashing on load.

*   **Image Delivery:** `22kB potential savings`
    *   Minor optimization opportunity, but not the main driver of performance issues.

## 🔍 Technical Insights

### 1. The "Invisible" Text Problem (LCP Render Delay)
The 700ms render delay perfectly matches the behavior of a "fouc-fix" or entrance animation.
*   **Current Behavior:** `opacity: 0` -> Wait for JS -> Animate to `opacity: 1`.
*   **Risk:** If JS fails or hangs, the user sees nothing.
*   **Recommendation:** Ensure the `headline-premium` class or similar has a CSS fallback that reveals text if JS doesn't run within 500ms, or use `font-display: swap` if it's font-related (though the trace says "element render delay", not "load delay").

### 2. Layout Thrashing (The Jitter)
The trace identified specific call stacks triggering reflows:
*   **Location:** `e.enable` and `e` functions in the compiled JS.
*   **Cause:** Reading layout metrics (height/width) inside a loop or immediately after a DOM mutation.
*   **Fix:** Batch DOM reads and writes. If using GSAP, ensure `ScrollTrigger.refresh()` isn't being called excessively or inside a loop during initialization.

## 🚀 Action Plan

1.  **Optimize GSAP Initialization:**
    *   Review `useHeroIntro.ts`. Ensure we aren't forcing a layout calc (like `SplitText` splitting) *before* the browser has had a chance to paint the initial frame.
    *   Use `requestAnimationFrame` to defer heavy initializations until after the first paint.

2.  **Component Lazy Loading:**
    *   The heavy 197ms component (`C5aLPlYS.js`) should be deferred. If it's the `Spline` scene or `ElevenLabs` widget, wrap it in `React.lazy` and only load it *after* the hero intro is complete.

3.  **Font/Text Visibility:**
    *   Verify `outfit-latin-900` font loading strategy. Ensure text is visible immediately (even if unstyled) or the "hidden" state is removed faster.

## Next Steps
*   Investigate `src/hooks/useHeroIntro.ts` for layout-thrashing patterns.
*   Profile the `C5aLPlYS.js` chunk to identify the heavy third-party library.
