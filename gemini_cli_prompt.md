# Gemini CLI Performance Audit Prompt

**Role**: Senior Performance Engineer
**Objective**: Conduct a comprehensive performance audit of the `Studios` page running locally.

**Context**:
The user is running a React application on `http://localhost:8080`. The `Studios` page (`/studios`) is experiencing performance issues. We suspect the "Judge Yourself" portfolio section (which loads multiple Vimeo players) and other media-heavy sections are the cause.

**Instructions**:
1.  **Connect** to the running application at `http://localhost:8080/studios` using the `chrome-devtools` MCP.
2.  **Lighthouse Audit**: Run a mobile and desktop Lighthouse audit. Save the scores and key metrics (LCP, CLS, TBT).
3.  **Network Analysis**:
    *   Reload the page and monitor the Network tab.
    *   Identify the total number of requests and transfer size.
    *   Specifically check how many Vimeo player iframes/scripts are loaded.
    *   Check if these players are loading data even if they are not playing.
4.  **Performance Profile**:
    *   Start a performance recording.
    *   Scroll down the page from top to bottom over ~10 seconds.
    *   Stop recording.
    *   Identify any "Long Tasks" (red blocks) in the main thread. Look for function calls related to `Vimeo`, `ScrollTrigger`, or `GSAP`.
5.  **Component Behavior**:
    *   Inspect the "Judge Yourself" section (Portfolio grid).
    *   Verify if the videos in the grid are playing, looping, or static.
    *   If they are static, note that loading the full Vimeo player is likely unnecessary.

**Output**:
Create a markdown file named `performance_audit_report.md` in the root of the workspace with your findings, specifically focusing on:
*   Lighthouse Scores.
*   Main thread blocking culprits.
*   Network payload analysis (especially Vimeo).
*   Recommendations for optimization.
