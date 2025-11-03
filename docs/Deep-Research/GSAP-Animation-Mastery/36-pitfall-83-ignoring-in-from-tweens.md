### Pitfall 8.3: Ignoring `immediateRender` in from() Tweens

**Issue:** `.from()` tweens by default set starting values immediately on creation[\[5\]](https://gsap.com/resources/mistakes/#:~:text=Second%2C%20keep%20in%20mind%20that,figure%20out%20what%20will%20happen)[\[6\]](https://gsap.com/resources/mistakes/#:~:text=The%20box%20animates%20x%20from,Why%20is%20that). If not careful, this can conflict if elements already have been animated or have different current values.

**Example scenario:**

```
const tl = gsap.timeline();
tl.to(".box", { x: 100, duration: 1 })
  .from(".box", { x: 0, duration: 1 }); 
```

One might think this moves .box to 100 then back to 0. But what happens: - The `.from` with immediateRender true will execute right away when timeline is created (because timeline's playhead at 0 triggers it): It sets .box x to 0 immediately[\[5\]](https://gsap.com/resources/mistakes/#:~:text=Second%2C%20keep%20in%20mind%20that,figure%20out%20what%20will%20happen), overriding the effect of the first tween's start. - So the first tween ends up animating from 0 to 100 (since .box was set to 0), then the from anim goes from 0 to 0 (since it started at 0 at time of its play).

Net effect: .box jumps to 0 at start, then animates to 100 and jumps back to 0 at end -- likely not intended.

**Solution:** - Set `immediateRender:false` on the from, or use fromTo to be explicit.

**After (Correct):**

```
const tl = gsap.timeline();
tl.to(".box", { x: 100, duration: 1 })
  .from(".box", { x: 0, duration: 1, immediateRender: false });
```

Now the from tween will wait until its turn on the timeline to render the starting value[\[44\]](https://gsap.com/resources/st-mistakes/#:~:text=). The box will go to 100, then animate back to 0 properly. Alternatively:

```
tl.to(".box", { x: 100, duration: 1 })
  .to(".box", { x: 0, duration: 1 }); 
```

Since to tweens don't render until their turn, that also works.

**AI caution:** ImmediateRender trips up many. If AI uses multiple from tweens on same element, consider setting `immediateRender:false` on ones that start after time 0. GSAP docs highlight this pitfall[\[5\]](https://gsap.com/resources/mistakes/#:~:text=Second%2C%20keep%20in%20mind%20that,figure%20out%20what%20will%20happen)[\[6\]](https://gsap.com/resources/mistakes/#:~:text=The%20box%20animates%20x%20from,Why%20is%20that).
