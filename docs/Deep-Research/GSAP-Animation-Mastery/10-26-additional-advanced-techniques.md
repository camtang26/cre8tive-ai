### 2.6 Additional Advanced Techniques

Finally, a few advanced GSAP features and patterns to be aware of: - **GSAP MatchMedia for Responsive Animations:** We touched on it -- `gsap.matchMedia()` allows you to define different animation setups for different media queries in one code block. This prevents scattering responsiveness logic. E.g.:

```
let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {
  // desktop large animations
  ScrollTrigger.create({...});
  return () => { ScrollTrigger.getAll().forEach(st => st.kill()); }
});
mm.add("(max-width: 799px)", () => {
  // mobile simpler animations
  return () => {...cleanup...}
});
```

It automatically handles applying the correct ones on resize. Also note above how each media's function returns a cleanup that kills its triggers. This ensures that when media condition changes, old triggers are removed. **AI**: If building a component that needs different animation for mobile vs desktop, use matchMedia blocks rather than if/else in resize events. - **Custom Event Callbacks:** ScrollTrigger and Timeline have callback options like `onEnter, onLeave, onComplete, onRepeat` etc. Use these for things like syncing audio, playing a video at a certain point, or firing analytics when an animation finishes. For example, `onComplete` of a timeline could trigger a state change or load next content. *However*, avoid heavy logic in these -- they should ideally call out to other code or set flags, not do big DOM work. - **Combining with Three.js or Canvas:** GSAP can animate anything numeric. This means if you have a Three.js scene, you can tween object positions, camera positions, even material properties with GSAP. E.g., `gsap.to(camera.position, { z: 10, duration:2 })` to zoom camera. You can use ScrollTrigger to scrub through a 3D animation sequence by tweening a Three.js object over scroll. Many award sites do exactly that (scroll to move through a 3D scene). For canvas, you might tween some variables that your `requestAnimationFrame` draw loop uses (like coordinates or an angle). GSAP's fast and doesn't conflict with other rAF loops if coordinated properly. So, AI should not shy away from animating beyond the DOM -- GSAP's flexibility covers SVG, Canvas, WebGL. - **Sequencing with Sound or Video:** If needed, GSAP timelines can be synced with audio or video. One approach: use the `ScrollTrigger` with `scrub` to tie video currentTime to scroll (there's an example on GreenSock site). Or use GSAP's `timeline.timeScale()` or `timeline.seek()` to control timeline based on audio progress. While not trivial, know that top sites sometimes include multimedia -- an AI aware of GSAP can at least not conflict (e.g., pausing animations when video is playing if needed). - **Timeline Labels & Dynamic Control:** Labels can also help AI models dynamically control animations. For instance, you could jump a timeline to a label on some event: `tl.tweenTo("section2Intro")` -- this animates the timeline to that label smoothly. This is useful for interactive scrubbers or nav that jumps to certain part of an animation.

By now, we have a deep technical toolkit: - We know how to craft tweens and timelines. - We have a roster of plugins to achieve scroll effects, text effects, physics, etc. - We understand performance implications and how to animate without lag. - We know how to integrate GSAP in frameworks robustly.

**Sources (Part 2):** Official GSAP documentation and forum tips were referenced for best practices. Notably, GSAP's license change (Webflow support) which makes all these plugins free[\[4\]](https://gsap.com/pricing/#:~:text=You%20heard%20us%20right,users%2C%20thanks%20to%20Webflow%E2%80%99s%20support), the recommendation to animate transforms for performance[\[19\]](https://gsap.com/community/forums/topic/23062-questions-about-performance-best-practices/#:~:text=Performance%20problems%20are%20almost%20always,much%20faster%20than%20animating%20left%2Ftop), and new React integration patterns using `useGSAP()` and context[\[26\]](https://gsap.com/resources/React/#:~:text=%60useGSAP%28%29%60%20is%20a%20drop,and%20Context%20makes%20it%20simple)[\[27\]](https://gsap.com/resources/frameworks/#:~:text=Proper%20animation%20cleanup%20is%20important,you%20don%27t%20revert%20things%20properly). We also saw how GSAP's own advice on common mistakes (like avoiding CSS transitions on GSAP-animated elements[\[28\]](https://gsap.com/resources/mistakes/#:~:text=Using%20CSS%20transitions%20and%20GSAP,on%20the%20same%20properties) and cleaning up in SPAs) informed our guidelines. Armed with this technical mastery, we can now move to Part 3 to see concrete code patterns that put this knowledge into practice.

\<a id="part3">\</a>
