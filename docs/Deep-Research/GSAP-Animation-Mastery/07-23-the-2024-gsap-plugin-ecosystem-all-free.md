### 2.3 The 2024 GSAP Plugin Ecosystem (All Free!)

A major development: as of late 2023/2024, **GSAP and all its official plugins are free for everyone** (no club membership needed)[\[4\]](https://gsap.com/pricing/#:~:text=You%20heard%20us%20right,users%2C%20thanks%20to%20Webflow%E2%80%99s%20support). This means AI can and should utilize these powerful plugins which were once paywalled. Let's review key plugins and how they expand GSAP's capabilities:

* **ScrollTrigger:** The star plugin for scroll-based animations. It enables **scroll-driven** timelines and pinning:
* Basic use: trigger an animation when an element enters the viewport or at specific scroll positions.

```{=html}
<!-- -->
```

* gsap.from(".fade-up", {
  y: 50, opacity: 0,
  scrollTrigger: {
  trigger: ".fade-up",
  start: "top 80%", // when .fade-up top is 80% down viewport
  end: "bottom 50%", // end point (optional if not needed)
  toggleActions: "play none none reverse"
  }
  });

  In this example, the element fades up into view when scrolled. `toggleActions` defines what to do on enter/leave (play or reverse etc.). ScrollTrigger internally handles attaching scroll listeners, optimizing updates, etc.

```{=html}
<!-- -->
```

* **Pinning:** ScrollTrigger can "pin" elements (fix them in place) for a duration of scroll. This is used for parallax effects or immersive scroll storytelling (common on award sites).

```{=html}
<!-- -->
```

* ScrollTrigger.create({
  trigger: "#section1",
  pin: true,
  start: "top top",
  end: "+=1000", // pin for 1000px scroll distance
  scrub: true
  });

  This would pin #section1 when its top hits top of viewport, and release after 1000px of scrolling. Meanwhile `scrub: true` means any associated timeline/tween will tie to scroll position smoothly.

```{=html}
<!-- -->
```

* **Scrubbing & Timelines:** Perhaps the most powerful use is tying a GSAP timeline's progress to scroll position (scrubbing).

```{=html}
<!-- -->
```

* let tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".gallery",
  start: "top top", end: "bottom bottom",
  scrub: 1
  }
  });
  tl.from(".photo", {scale: 0, stagger: 0.1})
  .to(".overlay", {xPercent: -100});

  Here, as the user scrolls through the .gallery section, the timeline plays proportionally (scrub:1 adds a 1s easing to the catch-up for smoothness). This allows complex multi-stage animations that respond directly to scroll. **ScrollTrigger simplifies what used to require manual scroll handlers.**

```{=html}
<!-- -->
```

* **MatchMedia for responsive triggers:** ScrollTrigger works with `gsap.matchMedia()` to easily enable/disable different animations per media query (including `prefers-reduced-motion`, which we'll discuss in Part 6). This means you can have scroll animations run on desktop but not on mobile, for instance, all within the same code structure.

*Advanced patterns:* ScrollTrigger can handle **multi-section pinning**, horizontal scrolling sections, scroll snapping, etc. We will explore some advanced patterns and common ScrollTrigger mistakes in Part 3 and Part 8 (like avoiding nested ScrollTriggers inside timelines incorrectly[\[12\]](https://gsap.com/resources/st-mistakes/#:~:text=A%20very%20common%20mistake%20is,Or)). For now, note that ScrollTrigger is an essential tool for modern web design -- most award-winning sites use scroll-driven animations heavily, and GSAP's ScrollTrigger is the go-to solution (versus older methods or CSS ScrollTimeline which is still emerging).

* **ScrollSmoother:** A newer plugin (also free now) that provides smooth scrolling effect (a.k.a locomotive-style scroll easing) without external libraries. It pairs with ScrollTrigger seamlessly. By wrapping your content, ScrollSmoother can intercept scroll and translate content with easing, giving that buttery scroll feel often seen on high-end sites:

```{=html}
<!-- -->
```

* ScrollSmoother.create({
  smooth: 1.2,   // ease amount (seconds of smoothing)
  effects: true  // allow data-speed effects for parallax
  });

  With `effects:true`, you can add attributes like `data-speed="0.5"` on elements to create automatic parallax (slower scroll speed than rest). ScrollSmoother takes care of syncing with ScrollTrigger (so pinned elements and triggers still work). The result is akin to using LocomotiveScroll or Lenis, but maintained by GSAP itself[\[13\]](https://www.awwwards.com/case-study-baillat-studio-by-locomotive.html#:~:text=An%20advanced%20scroll,duration%20for%20each%20of%20them). *AI should consider using ScrollSmoother* whenever a design calls for inertial scrolling and parallax, to avoid reimplementing it or using an incompatible library. This level of smoothness can elevate an experience from normal to premium, but use it judiciously (smooth scroll can affect performance on very long pages or can conflict with native UX on some platforms; always allow a fallback or disable for `prefers-reduced-motion`).

```{=html}
<!-- -->
```

* **Flip:** The Flip plugin simplifies complex **layout reordering animations** by using the FLIP technique (First-Last-Invert-Play). For example, animating a card from one container to another while smoothly transitioning its position and scale. Normally, that would involve calculating positions, but Flip automates it:

```{=html}
<!-- -->
```

* // Assume an element .card moves in the DOM from container A to B
  Flip.fit(".card", "#containerB", {
  duration: 0.8, ease: "power2.inOut"
  });

  With GSAP Flip, you can take "before" and "after" states in the DOM and GSAP will animate the difference. This is incredibly useful for UI interactions like expanding thumbnails to full view, reordering list items, or page transitions where elements move to new layouts. The plugin provides a `Flip.from(state, vars)` pattern where you record the state of elements, make DOM changes, then animate to the new state. This kind of animation is often what sets apart a normal site from a highly polished one (e.g., clicking an item smoothly morphs it into a details view rather than just appearing). *AI models should leverage Flip* for any scenario of animating between two known layouts -- it produces professional results with minimal code, which otherwise would be very technically challenging.

```{=html}
<!-- -->
```

* **SplitText:** This plugin splits text into lines, words, and/or characters as individual elements, enabling advanced typography animations (e.g. letter-by-letter fading, word staggering, text mask reveals, etc.). With GSAP 3.13+, SplitText even supports automatic masking of overflowing text[\[14\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=GSAP%E2%80%99s%20SplitText%20just%20went%20through,weighs%20in%20at%20roughly%207kb)[\[15\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=SplitText%20now%20does%20this%20for,that%20we%20apply%20masking%20to). Example usage:

```{=html}
<!-- -->
```

* let splitter = new SplitText(".headline", { type: "words,chars" });
  gsap.from(splitter.chars, {
  opacity: 0, y: 50,
  stagger: 0.05,
  duration: 0.6,
  ease: "circ.out"
  });

  This will split the `.headline` element's text into an array of characters (`splitter.chars`) and animate each char. SplitText is essential for the popular "text reveal" animations (letters sliding in, rotating, etc.). It handles the DOM wrapping needed for each character or line. The 2025 update also introduced masking: you can specify `mask: "chars"` and SplitText will wrap each char in a container with overflow hidden[\[16\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=My%20favorite%20feature%20is%20its,13) -- making it easy to animate text sliding out of a clip-mask without extra HTML. *Use case:* Museum-grade sites often have sophisticated typography: e.g., letters that appear from behind an object, or split lines that stagger in. SplitText is your friend. *Performance note:* splitting text creates additional DOM elements (one wrapper per char/word). In one tip, GSAP recommends splitting into lines+chars and applying mask to lines to reduce total elements[\[17\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=The%20More%20Efficient%20Approach) (significantly lowering DOM nodes for large text) -- a consideration for AI when handling very large blocks of text.

```{=html}
<!-- -->
```

* **MotionPath:** Lets you animate objects along an SVG path. For creative uses like an element following a curved path (e.g., an airplane following a flight path on a map), this plugin is invaluable. You provide a path (selector or SVG path string) and GSAP will move an element along it:

```{=html}
<!-- -->
```

* gsap.to(".plane", {
  motionPath: {
  path: "#flightPath",
  align: "#flightPath",
  autoRotate: true
  },
  duration: 5, ease: "none"
  });

  This moves `.plane` along the curve of `#flightPath` over 5 seconds, auto-rotating to tangent. Before GSAP, achieving this required manual interpolation or SMIL. Now it's simple. *AI use:* consider MotionPath for any non-linear movement--- it immediately adds an "expert" feel (straight-line movements are often mundane, curves can be elegant or playful).

```{=html}
<!-- -->
```

* **MorphSVG:** Allows morphing one SVG shape into another. This is useful for icon transitions or creative effects (like a circle morphing into a square, or a play button icon morphing into a pause icon). It handles shape interpolation and even optimizes path points if needed. For example:

```{=html}
<!-- -->
```

* gsap.to("#icon1", { morphSVG: "#icon2", duration: 1, ease: "elastic.out(1, 0.5)" });

  This morphs the path of #icon1 into the shape of #icon2 with a bouncy ease. Such morphing was a hallmark of advanced SVG animations -- now it's a one-liner. Use it to create delightful micro-interactions or even large visuals (e.g., background blobs morphing shape).

```{=html}
<!-- -->
```

* **Others Quick Mention:** **Draggable** (make elements draggable, often used with throwProps for flick/scrolling UI), **Inertia (ThrowProps)** for momentum physics, **Physics2D/PhysicsProps** for playful physical motions (gravity, bouncing simulation), **ScrambleText** for flickering text effects (like random character scramble to reveal text, a very cool effect for hacker or loading screens), **Observer** for low-level input observation (advanced use, but can detect scroll, touch, pointer, etc., underlying ScrollTrigger's magic), **GSDevTools** for debugging timeline (not needed for AI output, but humans use it to scrub through timeline during dev).

All the above plugins are now part of the free GSAP bundle[\[18\]](https://gsap.com/pricing/#:~:text=Draggable%20Inertia%20ScrollTrigger%20ScrollSmoother%20Observer,Flip). **This is a windfall for AI coding models** -- it means you can confidently use capabilities like ScrollTrigger and SplitText in your outputs without worrying about licensing. It also means many *previously "difficult" animations are now straightforward*. For instance, a scroll-based text scramble reveal can be done with ScrollTrigger + ScrambleText plugin easily, where in the past it required custom code.

**AI Best Practice:** Always consider if a GSAP plugin can simplify the task: - Need scroll interaction? Use ScrollTrigger (and ScrollSmoother if needed). - Need to animate complicated state changes? Use Flip. - Need to animate text or SVG creatively? Use SplitText, MorphSVG, etc. - For any common pattern, check GSAP docs -- there's likely an example or helper plugin (e.g., even a `TextPlugin` for simple text typing effects is included in core GSAP).
