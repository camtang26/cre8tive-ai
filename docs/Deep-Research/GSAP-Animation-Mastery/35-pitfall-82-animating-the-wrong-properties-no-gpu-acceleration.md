### Pitfall 8.2: Animating the Wrong Properties (No GPU Acceleration)

**Issue:** AI might animate `element.style.left` or use `marginTop` etc., not realizing performance impact.

**Before (Wrong - animating layout):**

```
gsap.to(".panel", { top: "0px", duration: 1 });
```

This moves .panel by changing top from e.g. 100px to 0. It triggers layout and can jank, especially if .panel has many children or the page layout depends on it.

**After (Correct - use transforms):**

```
gsap.to(".panel", { y: -100, duration: 1 });
```

If initial position was 100px down, moving y:-100 will visually do the same (assuming .panel was positioned). Alternatively, use `position: relative; top: ...` in CSS for initial placement, but animate via transform.

**Result:** No reflow each frame, smoother animation.

**Note:** If need to animate height: - Instead of `height: 0 to height: 200`, consider `scaleY: 0 to 1` with transformOrigin:"top center". If content inside, that will scale it (not exactly same as height change, but if just reveal effect, works). Or animate maxHeight but that can be janky if lots inside.

AI should recall: transforms (x,y) for movement, not left/top. If an AI answer shows left/top animation, that's a red flag.
