# Performance Audit Report (Gemini)

**Date:** November 19, 2025
**Page Audited:** `/studios`
**Tool:** Lighthouse (Headless)

## 📊 Executive Summary

The Studios page has a strong foundation in SEO and Accessibility but suffers from significant performance bottlenecks, primarily driven by large content paints (LCP) and main-thread blocking (TBT).

| Category | Score | Grade |
| :--- | :--- | :--- |
| 🔴 **Performance** | **40** | Poor |
| 🟢 **Accessibility** | **87** | Good |
| 🟠 **Best Practices** | **75** | Average |
| 🟢 **SEO** | **100** | Perfect |

## 📉 Key Metrics

*   **Largest Contentful Paint (LCP):** `10.6s` (Target: < 2.5s) - **CRITICAL**
    *   The page takes over 10 seconds to render its largest visible element. This is likely the hero video or a large background image.
*   **First Contentful Paint (FCP):** `4.7s` (Target: < 1.8s)
    *   Users stare at a blank screen for nearly 5 seconds.
*   **Total Blocking Time (TBT):** `1,080ms` (Target: < 200ms)
    *   The main thread is heavily blocked by JavaScript execution, preventing interaction.
*   **Cumulative Layout Shift (CLS):** `0.019` (Good)
    *   Visual stability is excellent.

## 💡 Top Opportunities

1.  **Serve Images in Next-Gen Formats (~1.95s savings)**
    *   Large PNG/JPG assets should be converted to WebP or AVIF.
    *   Ensure `MuxPlayer` poster images use optimized formats.

2.  **Reduce Unused JavaScript (~1.03s savings)**
    *   There is significant dead code being downloaded.
    *   **Action:** Verify `React.lazy` implementation for below-the-fold sections (already in progress, but maybe chunks are still too large or not effectively split).
    *   **Action:** Audit `package.json` for heavy unused libraries (e.g., `Three.js`, `Spline` if not active on this page).

3.  **Reduce Unused CSS (~0.38s savings)**
    *   Tailwind usually handles this well, but check for large global CSS files or unpurged styles.

## 🔍 Recommendations

1.  **Hero Optimization (LCP Fix):**
    *   Ensure the Hero Video poster image is highly optimized (WebP, < 50kb).
    *   Preload the Hero image/poster in `<head>` if possible, or ensure it's not lazy-loaded (native `loading="eager"`).
    *   If using a video, ensure the placeholder is solid and instant.

2.  **Bundle Optimization (TBT Fix):**
    *   The build output showed a `vendor` chunk of **340kb** and a large chunk over **1000kb**.
    *   Break down the vendor chunk.
    *   Ensure `Three.js` / `Spline` are NOT loaded in the main bundle if they are only used in specific sub-components.

3.  **Server Response:**
    *   FCP is high (4.7s). Ensure the static host (GitHub Pages / Preview server) is serving compressed (Gzip/Brotli) assets. The preview server log showed `gzip` ratios, so compression is likely active, implying the raw size or network latency is the issue.

## Next Steps
1.  Implement image format conversion for all static assets.
2.  Deep dive into the 1MB+ chunk identified during build to split it further.
3.  Re-run audit after optimizations.
