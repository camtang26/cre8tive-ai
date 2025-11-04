### Pitfall 8.4: Multiple ScrollTriggers on the Same Element's Property

**Issue:** Overlapping ScrollTriggers controlling same element leads to unexpected behavior (like jumping)[\[35\]](https://gsap.com/resources/st-mistakes/#:~:text=gsap.to%28%27h1%27%2C%20,center%20center%27%2C%20scrub%3A%20true)[\[36\]](https://gsap.com/resources/st-mistakes/#:~:text=Did%20you%20catch%20the%20mistake%3F,when%20the%20ScrollTrigger%20is%20created). Example, AI might do:

```
gsap.to(".title", { 
  opacity: 1, scrollTrigger: { trigger:".section1", start:"top 80%", scrub:true } 
});
gsap.to(".title", { 
  opacity: 0, scrollTrigger: { trigger:".section2", start:"top 80%", scrub:true } 
});
```

They intended title to fade out in section2. But initially, as soon as section2 trigger isn't reached, the second tween's start values (opacity?) might conflict (especially if scrub controlling it). Specifically, with scrub, when second ScrollTrigger not active, it might hold title at opacity:0 (since starting point cached as described)[\[36\]](https://gsap.com/resources/st-mistakes/#:~:text=Did%20you%20catch%20the%20mistake%3F,when%20the%20ScrollTrigger%20is%20created).

**Better approach:** Use a single ScrollTrigger with a timeline or toggle: - Put both animations in one timeline controlled by scroll (with appropriate positions). - Or use toggleActions (e.g., first trigger does onLeave set opacity0). - Or at least, set immediateRender false on second so it doesn't jump.

**After (Option 1 - timeline):**

```
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper", start: "top 80%", end: "bottom 80%", scrub: true
  }
});
tl.to(".title", { opacity: 1, duration: 1 })
  .to(".title", { opacity: 0, duration: 1 }, "+=0.5");
```

Now one ScrollTrigger handles the fade in then fade out as user scrolls through wrapper. No conflicting triggers.

**Option 2:** If sections far apart: maybe easier to just ensure section1's trigger toggles class on .title to visible, section2's trigger toggles class to hide, avoiding two GSAPs fighting.

**AI**: should remember GSAP's note: "avoid applying ScrollTrigger to multiple tweens nested in a timeline"[\[12\]](https://gsap.com/resources/st-mistakes/#:~:text=A%20very%20common%20mistake%20is,Or) and also avoid two triggers on same element property. Instead, combine or manage carefully with immediateRender or .fromTo. This nuance is advanced; ideally, structure animations to not need that scenario.
