### 2.1 Core GSAP Concepts: Tween, Timeline, Stagger, Ease

At its heart, GSAP revolves around **tweens** and **timelines**. Understanding these thoroughly is crucial:

* **Tween Basics:** A **tween** is a single transition of one or more properties of a target over time (GSAP's `gsap.to()`, `gsap.from()`, or `gsap.fromTo()` methods produce tweens). For example:

```{=html}
<!-- -->
```

* gsap.to(".box", { x: 100, opacity: 0.5, duration: 1, ease: "power2.out" });

  This moves the element with class "box" to `x:100` (100px to the right) and changes opacity to 0.5 over 1 second with an easing. Key points:

```{=html}
<!-- -->
```

* GSAP uses a **ticker** (built on `requestAnimationFrame`) to update values every frame; by default it attempts 60fps.

* You can tween any numeric property (including CSS transforms, canvas object properties, SVG attributes, etc.). GSAP handles unit conversion (e.g., `"100%"` or relative `"+=50"` values).

* `.to()` **vs** `.from()` **vs** `.fromTo()`**:** `.to()` animates from the current value to the specified end value. `.from()` animates from the specified value *to* the current value (useful for "animate in" effects from off-screen or 0 opacity). `.fromTo()` explicitly sets both start and end. Generally, `.to()` and `.from()` are more dynamic and preferred, but be mindful of their behavior (see common mistakes in Part 8 about `.from()` caching and `immediateRender`)[\[5\]](https://gsap.com/resources/mistakes/#:~:text=Second%2C%20keep%20in%20mind%20that,figure%20out%20what%20will%20happen)[\[6\]](https://gsap.com/resources/mistakes/#:~:text=The%20box%20animates%20x%20from,Why%20is%20that).

* **Timeline Mastery:** A **timeline** (`gsap.timeline()`) is essentially a container for multiple tweens, allowing sequencing and synchronization. Instead of relying on arbitrary delays or `setTimeout`, timelines provide a precise way to orchestrate animations:

```{=html}
<!-- -->
```

* const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.from(".header", { y: -50, opacity: 0 })     // step 1: intro header
  .to(".header", { y: 0, opacity: 1 })         // continues automatically after previous
  .addLabel("headerShown")
  .from(".nav-item", { opacity: 0, stagger: 0.2 }, "headerShown+=0.5");

  In this example, we create a timeline with default 1s duration for tweens. We chain multiple tweens:

```{=html}
<!-- -->
```

* The header slides in from above while fading (y: -50 -> 0, opacity 0 -> 1).
* We use `.addLabel("headerShown")` as a marker (at end of header animation).
* Then we animate `.nav-item` elements from opacity 0 with a stagger, starting 0.5s after the "headerShown" label. The stagger will cause nav items to fade in one after another, 0.2s apart.

**Why Timelines Matter:** They solve complex sequencing elegantly: - No need to calculate delays manually; order in code defines sequence unless overridden by labels or position parameters. - They can **overlap** tweens easily. E.g., by using position parameter like `"-=0.5"` you can start a tween 0.5s before the previous one ends, creating an overlap. - Timelines can be nested (a powerful pattern: build small timelines for sub-components and add them into a master timeline). Jack Doyle (GSAP's creator) advises modularizing complex animations by returning timelines from functions, then composing them[\[7\]](https://gsap.com/community/forums/topic/15771-animation-strategies/#:~:text=One%20of%20the%20key%20things,your%20complex%20animations%20much%20easier) -- this makes tweaking easier. - Control: a timeline can be paused, reversed, or seeked as a whole, enabling advanced interactions (like scrubbing with scroll or syncing to audio).

*AI Tip:* Always consider using a `gsap.timeline` for multi-step animations. It provides far more **readability and control** than scattered tweens with delays. The resulting code mirrors the storyboard sequence you planned.

* **Staggers:** Staggering is animating multiple targets with a slight offset in start times. GSAP's `stagger` option (when multiple elements are targeted) makes this trivial:

```{=html}
<!-- -->
```

* gsap.from(".list-item", { y: 20, opacity: 0, stagger: 0.1 });

  This will animate all `.list-item` elements, each starting 0.1s after the previous, creating a cascading effect. For more complex staggers, GSAP supports an **object syntax**:
  gsap.from(".grid-item", {
  y: 50, opacity: 0,
  stagger: { each: 0.2, from: "center", grid: "auto", ease: "power1.in" }
  });

  Here, `each:0.2` means each element starts 0.2s apart, `from:"center"` makes the stagger originate from the center of the element array (so elements in the middle start first, radiating outward)[\[8\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=Tip%202%3A%20Setting%20the%20Stagger,Direction)[\[9\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=gsap.to%28targets%2C%20,the%20start%20of%20each%20animation), and `grid:"auto"` tells GSAP to figure out a grid if elements are in a grid layout. This can create a wave-like reveal where center items animate first. Stagger object also supports `amount` (total duration of stagger), and even `repeat` or `yoyo` for looping staggers.

Mastery of staggers allows AI to create sophisticated group animations (like a gallery of thumbnails popping in with delay or a set of text lines revealing with varied timing). *AI models should remember:* staggers add visual interest and guide the eye, and they are often simpler than scheduling individual tweens for each element.

* **Easing Functions:** Easing is the secret sauce that makes animations feel natural (or appropriately dramatic). GSAP includes a wide range of easing options:
* Simple names like `"power1.in", "power1.out", "power1.inOut"` (a gradual ease). Higher power (e.g. power4) means more intense acceleration/deceleration.
* Elastic and bounce eases (`"bounce.out"`, `"elastic.inOut"`) create springy effects.
* Back eases (`"back(1.7).out"`) overshoot a bit then settle.
* RoughEase and CustomEase: GSAP can even create custom easing curves or randomized eases. **For world-class polish, customizing easing is common.** For instance, an expert might use a CustomEase curve to match a very specific motion feel (like mimicking physics). GSAP's CustomEase allows defining a bezier curve for motion.
* In code, ease can usually be set by string name as shown. For complex cases, use the EasePack or configure with objects (but as of GSAP3, string is simplest since all eases are included).

*Practical tip:* Use easing deliberately to convey weight and style: - Use `power4.out` or `expo.out` for a dramatic, fast-to-slow entrance. - Use `power2.inOut` for gentle, smooth transitions. - Use `bounce.out` or `elastic.out` for playful, bouncy elements (e.g. cartoonish UI). - Use linear (no ease) rarely -- mostly for continuous linear movement or precise scrubbing animations.

GSAP's default ease in 3.x is `"power1.out"` (slight ease-out). But premium sites rarely stick to default; they tailor easing per animation. *AI should emulate this:* think about the personality of each motion and choose an ease accordingly, rather than always using default or none.

**Using GSAP's Cheat Sheet:** To master these, AI can refer to the GSAP Cheat Sheet (an official quick reference) for syntax reminders[\[10\]](https://gsap.com/resources/React/#:~:text=,Common%20GSAP%20mistakes). But beyond syntax, the goal is to use these primitives creatively -- e.g., combining stagger with an interesting ease and timeline sequencing to produce a unique effect.
