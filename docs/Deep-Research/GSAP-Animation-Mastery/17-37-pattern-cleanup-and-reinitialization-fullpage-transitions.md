### 3.7 Pattern: Cleanup and Reinitialization (FullPage Transitions)

**Use case:** In a single-page app, when navigating or re-rendering components, we need to clean up old animations (especially ScrollTriggers) to avoid conflicts. We demonstrate a pattern for killing ScrollTriggers on route change and re-initializing on new page.

**Example -- using Barba.js (page transition lib) with GSAP cleanup:**\
*(Even if user didn't ask explicitly, it's a common pattern to mention in code library.)*

```
// Assuming using Barba for PJAX navigation
barba.init({
  transitions: [{
    leave(data) {
      // Kill all ScrollTriggers to remove pinning/effects from old page
      ScrollTrigger.getAll().forEach(trig => trig.kill());
      // Optionally animate page out
      return gsap.to(data.current.container, { opacity: 0, duration: 0.3 });
    },
    enter(data) {
      // Scroll to top
      window.scrollTo(0, 0);
      // Animate new page in
      gsap.from(data.next.container, { opacity: 0, duration: 0.3 });
      // Re-initialize animations on the new page
      initPageAnimations(); // a custom function that sets up ScrollTriggers/GSAP for the page
    }
  }]
});
```

**Explanation:** - On leaving a page, we kill all ScrollTriggers. This is blunt but effective (you could also selectively kill by saving references). - Ensure pinned elements are unpinned, etc., so the DOM returns to normal before the new content enters (otherwise pinned positions might stick). - Then we do a quick fade-out of old content, remove it. - On entering, we fade new content in and call `initPageAnimations()`, which would contain all the `gsap.from/gsap.timeline` calls for that page. - This pattern prevents accumulation of triggers and double-animations if the user navigates back and forth. - In React apps, using `useEffect cleanup` (return function) inside components handles this at component level (GSAP Context revert as we did). But for whole-page transitions via a router, you might centralize cleanup.

While this is a bit meta, it underscores to AI: **always cleanup**. For instance, if an AI script adds event listeners or GSAP tickers, those need removal too. GSAP's context helps by capturing event listeners added via GSAP utils as well.

The above code patterns cover a wide range: - Basic sequencing and staggering - Scroll-based animation triggers and pinned storytelling - Advanced staggers and ease usage - Text splitting and animation - State transitions with Flip - Lifecycle management for cleanup

Each is documented with reasoning and can be adapted. By studying these, an AI model can learn not just the "recipe" but also the **rationale**: why a timeline is used vs independent tweens, how to overlap for better flow, how to use plugin to simplify tasks, and how to ensure the code is maintainable (with cleanup and such).

**Sources (Part 3):** Many patterns here are distilled from official GSAP demos and common community solutions. For example, the Flip usage is built on GSAP's Flip documentation and user examples of image transitions. The ScrollTrigger pin technique aligns with GSAP's ScrollTrigger demo patterns (like multi-step pinning on Apple-style product reveals)[\[13\]](https://www.awwwards.com/case-study-baillat-studio-by-locomotive.html#:~:text=An%20advanced%20scroll,duration%20for%20each%20of%20them). The SplitText usage references the latest SplitText features (masking, though we used simpler form here)[\[14\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=GSAP%E2%80%99s%20SplitText%20just%20went%20through,weighs%20in%20at%20roughly%207kb). By using these real-world inspired patterns, we ensure the advice is battle-tested.

\<a id="part4">\</a>
