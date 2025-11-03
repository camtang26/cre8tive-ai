### 3.6 Pattern: Using Flip for State Transitions (e.g., image grid to lightbox)

**Use case:** Click a thumbnail in a grid to enlarge it to a full-page view (lightbox) with smooth transition. The Flip plugin can handle the transition of size/position.

**Vanilla JS Example -- Image Lightbox with Flip:**\
HTML:

```
<div class="gallery">
  <img src="thumb1.jpg" class="thumb" />
  <!-- more thumbs -->
</div>
<div class="lightbox" id="lightbox" style="display:none;">
  <img id="lightboxImage" src="" />
  <button id="closeBtn">Close</button>
</div>
```

JS:

```
gsap.registerPlugin(Flip);
document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const state = Flip.getState(thumb);
    // move thumb image to lightbox
    const lightboxImg = document.getElementById('lightboxImage');
    lightboxImg.src = thumb.src;
    document.getElementById('lightbox').style.display = 'block';
    // match positions
    Flip.fit(lightboxImg, thumb);
    // Now animate from thumb state to lightbox state
    Flip.from(state, {
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => { /* optionally do something */ }
    });
  });
});
document.getElementById('closeBtn').addEventListener('click', () => {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  // Prepare flip back to original thumb
  const thumb = document.querySelector(`.thumb[src="${img.src}"]`);
  const state = Flip.getState(img);
  // Hide lightbox content (for visual, after capture state so Flip knows current)
  lightbox.style.display = 'none';
  // Put image back into thumb (not moving DOM here, could also do Flip.fit then Flip.from)
  Flip.from(state, {
    targets: thumb,
    duration: 0.8,
    ease: 'power2.inOut'
  });
});
```

**Explanation:** - On click of a thumbnail: - We capture its current state with `Flip.getState(thumb)`. This records its position, size, etc. - We then set the lightbox image to have same src and make the lightbox visible. - We call `Flip.fit(lightboxImg, thumb)` to position the lightbox image exactly over where the thumb was, same size. This is an immediate style change that makes the lightbox image a duplicate of the thumb's appearance in the new context. - Then `Flip.from(state, {...})` animates from that captured state to the current final state (which is the lightbox image's full size, since by default in CSS it might be styled to expand). In effect, the image smoothly enlarges from thumb size to lightbox size, moving to center. - We choose `power2.inOut` easing for a smooth slowdown at end. - On close: - We find the corresponding thumb for the current lightbox image (by matching src). - Capture state of the large image. - Hide the lightbox (`display:none`) so the underlying thumb is visible again. We do it after capturing state so that Flip knows the lightbox image's starting state. - Then `Flip.from(state, { targets: thumb, ... })` meaning we animate from the current state back to the thumb's state. The `targets: thumb` tells Flip that the element in the state to animate to is the thumb (since the element we captured, `img`, is effectively the same image content). - This brings the image back into the thumb and then we could remove/hide the lightbox fully. - This may seem a bit to grok, but essentially Flip is doing heavy lifting of transitioning DOM positions. There's no manual calculation of scales or transforms. - Important: In the flip-out, we used `targets: thumb` because we didn't actually move the DOM node of the image back into the thumb container (we hid it). Flip allows animating a different target into the state. Alternatively, we could append the lightboxImage node back into thumb container then Flip.from without specifying target, and it would detect that move. Different approaches, same result. - The final user experience: click thumbnail -> it fluidly grows to become a big image (as if it's the same element) -- a highly polished effect. Then closing shrinks it back.

**AI significance:** Without Flip, the AI would have to manually animate width, height, x, y from thumb to center, dealing with different aspect ratios, scroll position, etc. Flip handles it robustly including things like if the page scrolls in between, etc.

This pattern can be expanded to any UI state change: moving cards between columns, expanding a preview to detail view, reordering lists, etc. Flip ensures continuity of motion which is a hallmark of professional interaction design.
