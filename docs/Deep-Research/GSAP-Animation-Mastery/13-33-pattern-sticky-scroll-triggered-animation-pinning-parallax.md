### 3.3 Pattern: Sticky Scroll-triggered Animation (Pinning & Parallax)

**Use case:** Create a "storytelling" section where content pins and animates while the user scrolls through it. For example, pinning a section with an image and revealing text overlays step by step (common in product reveals, case studies). We'll demonstrate a pattern with pinning and parallax.

**Vanilla JS Example -- Pinning a Section with Step-by-Step Animations:**

```
<section class="phone-demo" id="demoSection">
  <div class="phone-frame">
    <img src="phone.png" alt="Phone" />
    <div class="screen-content screen1">Hello</div>
    <div class="screen-content screen2">World</div>
  </div>
  <div class="text-overlay" id="stepText">Feature 1</div>
</section>
<script>
  gsap.registerPlugin(ScrollTrigger);

  // Timeline that controls the internal animation of the pinned section
  let demoTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#demoSection",
      start: "top top",   // when section hits top of viewport
      end: "+=200% ",     // scroll distance for the whole animation (2x viewport height)
      pin: true,          // pin the section during the animation
      scrub: 1,           // smooth scrubbing, 1 second delay
      anticipatePin: 1    // avoids jump at pin end 
    }
  });

  // Inside the timeline: define the animation steps as scroll progresses
  demoTl
    .from(".phone-frame img", { y: '10%', scale: 0.9, opacity: 0, duration: 0.5 }) 
    .from(".screen1", { opacity: 0, y: 50 }, "<0.1") 
    .to("#stepText", { text: "Feature 2", duration: 0.2, ease: "none" }, "+=0.5") 
    .to(".screen1", { opacity: 0 }, "<") 
    .from(".screen2", { opacity: 0, y: 50 }, "<") 
    .to("#stepText", { text: "And that's not all!", duration: 0.2, ease: "none" }, "+=0.5");
    // ... you can continue with more steps or end the timeline here

</script>
```

**Explanation:** - We create a ScrollTrigger on `#demoSection` that: - Pins the section once it reaches top of viewport. - The animation lasts for 200% of viewport height of scroll (meaning the user scrolls two screen-heights to get through the animation). - `scrub: 1` ties the timeline progress to scroll position, with a 1-second lag to smooth it. This creates an interactive feel -- as the user scrolls, the animation plays forward/backward. - `anticipatePin: 1` helps alleviate a sudden jump that can happen when pinning ends (it essentially tells ScrollTrigger to start pinning a bit early to account for pin insert). - The timeline steps: 1. The phone image (inside .phone-frame) fades in and slides up slightly (`y:'10%'` means 10% of its height upward) with a slight scale from 0.9 to 1. This gives a nice subtle zoom-in effect as it appears. 2. `.screen1` content fades up (`from` opacity 0, y:50). It's positioned over the phone image (implying maybe the phone screen content). We used `"<0.1"` to overlap it just 0.1s after the phone image, so they nearly coincide. 3. After some scroll (we inserted `"+=0.5"` delay which in a scrubbed timeline means it will hold for 0.5 of timeline time, not wall-clock, giving user a moment to see Feature 1 text), we change the overlay text to "Feature 2". We use a GSAP **TextPlugin** trick: we didn't register TextPlugin above, but if we had, we could do `{text: "Feature 2"}` to animate the inner text content. Assuming TextPlugin is available, we did that. If not, one could simply fade out/in text. We set ease:"none" so it just swaps (TextPlugin typically does a typewriter effect, but with a short duration it will just replace). 4. We fade out `.screen1` at the same time we fade in `.screen2` (notice `.to(".screen1", {opacity:0}, "<")` and \`.from(".screen2", {opacity:0, y:50}, "<") start together). This simulates the phone screen content switching to a second screen as we move to feature 2. 5. We then update the text to "And that's not all!" as a final message.

* This timeline is scrubbed, so the user controls it. If they scroll back up, everything reverses: the text changes back, screen1 reappears, etc., automatically, because scrub ties the playhead to scroll.

* **Parallax effect:** We did a small parallax on the phone image by moving it `y:'10%'` in from state. If we wanted continuous parallax, we could use ScrollTrigger's `scrub` on a tween without pinning or within pinned context to move an element at a different speed. E.g., a background image moving slower than foreground while pinned -- by using `%` or viewport height in y values.

* This pattern (pinning a section and animating its internals on scroll) is very common for product reveals or step-by-step explanations. GSAP makes it straightforward. Compare to doing this with pure CSS: nearly impossible or extremely hacky.

* **Tip:** use `markers:true` during dev to see where start and end are. In our case, end is 200% scroll beyond start; adjust as needed so that the content has finished animating by then.

**React Example -- Pinning with ScrollTrigger (very similar to vanilla):** We can actually reuse almost the same code inside a useGSAP, with context:

```
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function PhoneDemo() {
  const ref = useRef();
  useGSAP(() => {
    gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });
      tl.from(".phone-frame img", { y: '10%', scale: 0.9, opacity: 0, duration: 0.5 })
        .from(".screen1", { opacity: 0, y: 50 }, "<0.1")
        .to("#stepText", { text: "Feature 2", duration: 0.2, ease: "none" }, "+=0.5")
        .to(".screen1", { opacity: 0 }, "<")
        .from(".screen2", { opacity: 0, y: 50 }, "<")
        .to("#stepText", { text: "And that's not all!", duration: 0.2, ease: "none" }, "+=0.5");
    }, ref);
  }, []);
  return (
    <section ref={ref} id="demoSection" className="phone-demo">
      <div className="phone-frame">
        <img src="phone.png" alt="Phone" />
        <div className="screen-content screen1">Hello</div>
        <div className="screen-content screen2">World</div>
      </div>
      <div className="text-overlay" id="stepText">Feature 1</div>
    </section>
  );
}
```

**Explanation:** Nearly identical, just making sure to target elements correctly within the component (we rely on unique IDs and classes here which is fine). The animations will clean up on unmount etc. (Pinning adds inline styles to the container for position fixed etc., which `ctx.revert()` will remove if needed).

**Potential AI pitfalls solved here:** - Without GSAP, an AI might try to do this via onscroll events and manual calculations, which is far more error-prone. Using ScrollTrigger greatly reduces complexity and ensures smoothness. - We demonstrated multiple timeline segments and text changes -- showcasing that AI can manipulate content (with TextPlugin) as part of an animation. - Also, we used **label positions** (`"<"` and `"+=0.5"`) heavily to synchronize and delay parts of timeline, which is something an AI might not do by default but should learn for complex sequences.

This pattern can be adapted: e.g., if you have 5 steps, you'd extend the timeline accordingly (and probably increase scroll `end` distance to accommodate). Always test that the scroll distance matches the content of timeline (if timeline finishes early, users will scroll with nothing happening; if too short, animation may end before user finishes scrolling that section -- adjust end accordingly).
