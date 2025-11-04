### 3.4 Pattern: Staggered Grid Reveal with advanced staggering (Grid & "from" options)

**Use case:** Animate a grid of elements (like portfolio thumbnails or gallery images) such that they appear in an interesting pattern (e.g., from the center outwards, or from edges). We'll use the stagger object to achieve a "from center" reveal.

**Vanilla JS Example -- Grid Center-Out Stagger:**

```
<div class="photo-grid">
  <img src="p1.jpg" class="grid-item" />
  <img src="p2.jpg" class="grid-item" />
  <img src="p3.jpg" class="grid-item" />
  <img src="p4.jpg" class="grid-item" />
  <!-- assume a 2x2 grid for simplicity -->
</div>
<script>
  gsap.from(".grid-item", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.15,
      from: "center"
      // `grid: "auto"` is auto-detected since these are DOM in a grid (if needed explicitly: grid: [rows, cols])
    }
  });
</script>
```

**Explanation:** - We target all `.grid-item` images. The effect: they will pop in (scale from 0 to 1) with a slight overshoot (back.out easing). - The stagger config: `each:0.15` means each subsequent item starts 0.15s after the previous. `from:"center"` causes the stagger order to begin at the center of the set of elements and radiate outward[\[30\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=From%20my%20experience%2099,standard%20flow%20of%20written%20text)[\[9\]](https://tympanus.net/codrops/2025/09/03/7-must-know-gsap-animation-tips-for-creative-developers/#:~:text=gsap.to%28targets%2C%20,the%20start%20of%20each%20animation). For a 2x2 grid, "center" is between them, effectively the two at center will start first. If it were a larger grid, the element nearest center (or two if symmetric) go first, then ones further out. - The result is a pleasing symmetric reveal rather than top-left to bottom-right which `stagger: 0.15` default would do. This technique is common in galleries where items appear as if "bursting" from the center. - We used `back.out(1.7)` ease which gives a bit of bounce. The numeric parameter 1.7 controls overshoot -- we could adjust for more/less bounce. - If the grid is not perfectly symmetric, GSAP still computes an order (distance-based from center). - If we wanted from edges: `from: "edges"` isn't a preset, but we could do e.g. `from: "top"` or `"bottom"` or an index like 0, etc., depending on what effect. For a diagonal cascade, often one would just rely on document order if items are in row-major order.

**React Example -- Similar usage (most likely within an effect or context):** We can trigger this on page load or on scroll. Let's assume on page load (or when component mounts):

```
useEffect(() => {
  gsap.from(".grid-item", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    stagger: { each: 0.15, from: "center" }
  });
}, []);
```

Usually this does not need special context if .grid-item is unique to this component. But to be safe, better to scope:

```
useGSAP(() => {
  gsap.context(() => {
    gsap.from(".grid-item", { ...staggerOptions });
  }, gridRef);
}, []);
```

Where `gridRef` is ref on the container and `.grid-item` class is local to this component or uniquely identifiable.

**Alternate: Scroll-triggered grid reveal:** You might want the grid items to animate when scrolled into view. That would combine this with ScrollTrigger:

```
gsap.from(".grid-item", {
  scale: 0, opacity: 0,
  ease: "back.out(1.7)",
  stagger: { each: 0.15, from: "center" },
  scrollTrigger: {
    trigger: ".photo-grid",
    start: "top 75%"
  }
});
```

This way, the whole grid reveals once it enters viewport.

**Why this pattern matters:** It demonstrates non-trivial stagger usage. Many basic scripts just stagger linearly. Using `from: "center"` or other options gives a more "designed" feel. A user might not consciously notice, but it feels elegant. These little touches accumulate.

Also, performance note: animating scale and opacity of say 20 images at once is okay, but if hundreds, consider staggering more or using `ScrollTrigger.batch()` (batches allow processing many triggers efficiently). That's advanced, but mention that GSAP has `ScrollTrigger.batch(selector, vars)` which groups scroll reveals for performance.
