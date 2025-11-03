### Pitfall 8.8: Uncontrolled Infinite Loops

**Issue:** Creating an endless repeating animation without providing a way to stop can trap focus or annoy users.

Example:

```
gsap.to(".spinner", { rotation: 360, repeat: -1, ease: "none", duration: 1 });
```

This spins forever. Not inherently bad (like a loading spinner). But if it's intense, consider pausing if off-screen or on user command (and if `prefers-reduced-motion`, definitely don't spin infinitely).

**Concern:** Not so much a bug, but an accessibility/perf risk. If lots of repeating tweens run in background, they use CPU. Ideally, kill or pause them when not visible.

**Solution:** If the animation is decorative, tie it to `ScrollTrigger` with `pause` on leave:

```
ScrollTrigger.create({ trigger: ".spinner", onEnter: () => tl.play(), onLeave: () => tl.pause() });
```

(where tl is the infinite tween timeline). Or check `document.visibilityState` to pause globalTimeline when tab not active (GSAP actually auto-pauses with rAF, but if using timeouts it wouldn't).

**AI pitfalls** often don't handle this, but it's a nuance perhaps beyond initial answer scope. Still, mentioning so the model is aware.
