### 2.2 Mastering GSAP Timeline Techniques

Now, let's go deeper into timeline capabilities and patterns that expert developers use: - **Relative Positioning and Labels:** We saw basic chaining above, but timelines allow **precise control** with positional parameters. For example:

```
tl.to(".circle", { x:100 }, 0)                 // start at 0 (absolute time)
  .to(".square", { x:100 }, "<")              // "<" starts at same time as previous tween
  .to(".triangle", { x:100 }, "<0.5");        // starts 0.5s after previous tween's start
```

Here, `.circle` and `.square` move together, and `.triangle` starts 0.5s later (while the others may still be moving). This relative scheduling (using `"<"` or `"+=" notations) makes complex overlapping sequences easier to read and adjust. Instead of calculating actual times, you describe relationships. - Labels (named positions) can group multiple tweens start point. E.g., we could`.addLabel("moveShapes", 0)`and then schedule all shape animations at`"moveShapes"`. This helps orchestrate if many elements should sync up. - **Nesting Timelines:** You can treat a timeline as a tween by adding it to another timeline. For AI, this is a powerful way to break a large animation into components: `

```
const introTl = gsap.timeline();
// ... define intro sequence
const galleryTl = gsap.timeline();
// ... define gallery sequence

const master = gsap.timeline();
master.add(introTl)         // plays intro, then
      .add(galleryTl, "+=1"); // wait 1s after intro, then play gallery
```

This modular approach means each sub-timeline can be developed and tested separately. Many top-tier sites do this -- e.g., a timeline for each section of a page, then a master timeline to coordinate section transitions. - \*\*Control Methods:\*\* Timelines and tweens have control methods like.pause()`,`.resume()`,`.reverse()`,`.progress(value)`,`.timeScale(value)`etc. For instance: -`tl.pause()`will halt a timeline. Useful if you want to start it later or control via user input. -`tl.reverse()`plays it backward (great for hover-out animations or toggling animations in and out). If an AI model is asked to implement a toggle animation (like opening/closing a menu), creating one timeline and using`.play()`and`.reverse()`on it is often cleaner than creating separate tweens for open and close. - **`.timeScale()`** can dynamically speed up or slow down animations. E.g.,`tl.timeScale(2)`makes it go 2x faster. This can even be tweened (see Tip 6 in Part 3 for tweening timeScale) to create acceleration effects. -`.seek(timeOrLabel)`jumps to a specific point, and`.progress(0-1)\` sets the timeline position as a fraction. These are particularly useful when hooking into scroll or other external controls -- you essentially scrub the timeline based on some input.

* **Defaults and Repeat:** Timelines can have `defaults` (as we showed for duration, also can set ease default, etc. so you don't repeat yourself for every tween). They can also have `repeat` and `yoyo` properties. If you set `repeat: -1` on a timeline, it loops infinitely. `yoyo:true` will make it play forward then backward (like a ping-pong). For example, a background animation of floating bubbles can be a timeline that staggers bubble movements and loops with yoyo for a seamless back-and-forth drift.
* Note: When looping, consider using the `repeatRefresh:true` on tweens if you want them to pick new random values on each loop (GSAP 3.8+ feature). For example, a tween with `repeat:5` and `repeatRefresh:true` will recalc any function-based or random values each time, giving variety[\[11\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=TIP%206%3A%20Tween%20The%20TimeScale,of%20an%20Animation).

**Understanding and leveraging these timeline techniques** enables the creation of **complex animation choreography** that is time-accurate and maintainable. AI models should practice representing a multi-step animation as a timeline rather than a disjoint set of tweens -- this results in code that mirrors an animator's thought process (first this, then that, meanwhile this other thing, etc.).
