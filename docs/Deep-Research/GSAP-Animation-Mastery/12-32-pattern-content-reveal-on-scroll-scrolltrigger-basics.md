### 3.2 Pattern: Content Reveal on Scroll (ScrollTrigger Basics)

**Use case:** Elements (text, images, sections) animate into view as the user scrolls down. This is a very common pattern (sometimes called scroll reveal). We'll implement a robust version using ScrollTrigger.

**Vanilla JS Example -- Scroll Reveal (staggered elements):**

```
<section class="feature-list">
  <h2>Features</h2>
  <div class="feature-item">Amazing Speed</div>
  <div class="feature-item">High Security</div>
  <div class="feature-item">24/7 Support</div>
</section>
<script>
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".feature-item", {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 0.6,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".feature-list",
      start: "top 80%",    // when top of section hits 80% down from top of viewport
      toggleActions: "play none none reverse", 
      // once section in view, play animations; on leaving, optionally reverse (here we chose to reverse on scroll up)
    }
  });
</script>
```

**Explanation:** - We target all `.feature-item` elements inside the section. Using `gsap.from` with those selector will animate all of them. - The ScrollTrigger is attached to the whole section (trigger: ".feature-list"). When the section enters the viewport (top of it reaches 80% height of window), the animation triggers. - The items will each fade up (y:50 -> 0) and appear (opacity 0->1) in a stagger of 0.3 seconds. So first item, then 0.3s later second, then third. This draws the eye down the list. - `toggleActions: "play none none reverse"` means: on enter, play; on leave (scrolling past), do nothing (we're not hiding them when passed, though we could if desired); on re-enter (scrolling back up), none; on leave back (scrolling above trigger), reverse (this last part causes the animation to reverse when the section scrolls out the top of viewport, giving a nice "reset" if user scrolls up again). - In practice, this means if the user scrolls back up above the section, the items will fade out and reset, ready to animate again on next scroll down. This is optional; one could use `"play none none none"` to animate only once and not revert. For interactive sites, reversing on scroll up can add a dynamic feel. - This basic pattern can be reused for many sections. If you have multiple similar sections, you might use a loop instead:

```
document.querySelectorAll('.reveal-section').forEach(section => {
  gsap.from(section.querySelectorAll('.reveal-item'), { ... scrollTrigger: { trigger: section, ... } });
});
```

This attaches one ScrollTrigger per section, which is more efficient than one big trigger for all if they are far apart. - We chose an ease `power1.out` to keep it subtle. For scroll reveals, subtle easing (or even none) often looks better than too much bounce, because the scroll itself is already an input.

**React Example -- Scroll Reveal using Context (multiple triggers):** Imagine we have multiple sections to reveal. We can set them up in one component or individually. Let's do in one:

```
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const compRef = useRef();
  useGSAP(() => {
    let ctx = gsap.context((self) => {
      // Select items within this component
      self.selector(".feature-item").forEach(item => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            markers: false // enable true for debugging positions
          }
        });
      });
    }, compRef);
    return () => ctx.revert();
  }, []); 

  return (
    <section ref={compRef} className="feature-list">
      <h2>Features</h2>
      <div className="feature-item">Amazing Speed</div>
      <div className="feature-item">High Security</div>
      <div className="feature-item">24/7 Support</div>
    </section>
  );
}
```

**Explanation:** - We iterate through each item and create a ScrollTrigger-driven tween for it. Here we use each item itself as the trigger (`trigger: item`). When each item scrolls into view (85% from top), it animates individually. This approach is good if the items are spaced out on the page, so they animate when each one appears. In our case they're all in one section and appear roughly together, so using the container as trigger is also fine. Either approach works; we show per-item triggers for demonstration. - We included `markers: false` (set true to debug) which is handy during development to see the trigger and end positions on screen. - The context ensures ScrollTriggers get killed on unmount if needed. - Note: If many items, the above could be heavy (many triggers). An alternative is one trigger on the container as earlier, to animate all items. That is more efficient but triggers all at once. It depends on desired effect. For simplicity, one container trigger is usually enough unless elements are very tall or separated.

**Advanced tweaks:** - If content might load asynchronously or images might affect layout, call `ScrollTrigger.refresh()` after content loads to recalc trigger positions. - If using a smooth scroll library or ScrollSmoother, ensure to set it up so ScrollTrigger knows about the custom scroller (`ScrollTrigger.scrollerProxy(...)` if not using ScrollSmoother's built-in support). - The above examples assume vertical scroll. For horizontal scroll sections, ScrollTrigger can handle that too (set `horizontal: true` or simply trigger an animation on x movement similarly).

**Edge cases & gotchas (for AI to note):** - Avoid creating ScrollTriggers inside other ScrollTrigger callbacks or repeatedly -- it can compound. Always create them in setup like shown, not on every scroll event. - If multiple ScrollTriggers are animating the same element's properties, you can get conflicts. In scroll reveal patterns, ensure each element is only controlled by one trigger at a time. The `.feature-item` example is fine since each tween is self-contained. If we had overlapping sections targeting same elements, we'd need `invalidateOnRefresh` or unique scopes. - We used `toggleActions` to reverse on going back up. Some prefer leaving the element visible after reveal (no reverse). Both are valid depending on UX desire. - Consider adding `once: true` if you want animation only the first time (ScrollTrigger has `once:true` to automatically disable after first play).

This scroll reveal pattern, when applied to various elements, gives that interactive feel as you scroll -- text slides in, images pop, etc., without having to use heavy libraries or hand-rolled logic. It's a staple of modern web design.
