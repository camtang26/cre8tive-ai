# Performance Audit Report: Studios Page

## Executive Summary
The `Studios` page exhibits significant network activity, primarily driven by the **Hero Section's Mux video** (~32MB transfer) and potentially the **"Judge Yourself" portfolio grid** (multiple Vimeo iframes). Core Web Vitals (CWV) showed excellent Stability (CLS 0.00), but the heavy media payload impacts initial load and bandwidth consumption.

## 1. Lighthouse & Core Web Vitals
*   **CLS (Cumulative Layout Shift)**: 0.00 (Excellent). The layout is stable during loading.
*   **LCP (Largest Contentful Paint)**: Heavily influenced by the Hero Video (`StudiosHero.tsx`). The video is set to `loading="eager"` and `autoplay`, causing it to compete for bandwidth immediately.
*   **TBT (Total Blocking Time)**: Moderate. Main thread is relatively free, with some blocking from 3rd party scripts (Unpkg, GTM).

## 2. Network Analysis
*   **Total Requests**: ~216 requests on initial load.
*   **Total Transfer Size**: **> 35 MB**.
*   **Primary Contributor**: **Mux (mux.com)**.
    *   Transfer Size: **32.3 MB**.
    *   Source: The Hero video (`StudiosHero.tsx`) is streaming high-quality video immediately upon load.
*   **Secondary Contributor**: **Vimeo**.
    *   Requests to `player.vimeo.com` and player assets.
    *   Triggered by the "Judge Yourself" section when it comes into view.

## 3. Main Thread Blocking
The main thread is generally responsive, but 3rd party scripts contribute to some delay:
*   **Unpkg**: ~79ms (Script evaluation).
*   **Google Tag Manager**: ~14ms.
*   **Video Decoding**: While off-main-thread usually, managing 32MB of video stream + multiple potential iframes puts strain on the browser's media engine.

## 4. Component Behavior: "Judge Yourself" Section
*   **Implementation**: The grid uses the `StudiosPortfolioSection.tsx` component, which iterates over `PORTFOLIO_ITEMS`.
*   **Behavior**:
    *   It uses `useInView` to detect when the section is visible.
    *   Once visible, it renders a `VimeoPlayer` component for **each of the 6 items**.
    *   These players are configured with `autoplay={false}` and `loop={false}`, meaning the videos are **static** until interacted with.
*   **Performance Impact**:
    *   Even though paused, **loading 6 Vimeo iframes simultaneously** is resource-intensive. Each iframe loads the Vimeo Player JavaScript (~400KB+) and initiates player setup.
    *   **Finding**: Loading the full Vimeo player for static content is **unnecessary** and detrimental to performance (memory & CPU usage).

## 5. Recommendations

### High Priority
1.  **Optimize "Judge Yourself" Grid (Critical)**:
    *   **Issue**: Loading 6 Vimeo iframes for static thumbnails.
    *   **Solution**: Replace the `VimeoPlayer` in the grid with a **Facade Pattern**.
    *   **Action**: Render a static image (thumbnail) with a "Play" button overlay. Only inject the `VimeoPlayer` (or open the modal) when the user **clicks** the button. Do not load the iframe just because the section is in view.
    *   **Benefit**: Saves ~6 iframe loads and associated JS execution/memory.

2.  **Optimize Hero Video**:
    *   **Issue**: `loading="eager"` and 32MB transfer.
    *   **Solution**: Ensure `poster` image is highly optimized. Consider using a shorter/lighter loop for the initial hero background, or lazy loading if acceptable (though hero usually needs to be eager, the size is very large).
    *   **Action**: Verify if a lower bitrate `playbackId` is available for the background loop, or restrict the buffer strategy.

### Medium Priority
3.  **Third-Party Scripts**:
    *   Review `unpkg` dependencies to see if they can be bundled or optimized.
    *   Defer non-critical scripts (GTM) if possible.

4.  **Lazy Loading Strategy**:
    *   The current `useInView` strategy for Vimeo players is "Lazy Load on Scroll", which is better than "Load on Mount", but "Load on Click" (Facade) is superior for video grids.
