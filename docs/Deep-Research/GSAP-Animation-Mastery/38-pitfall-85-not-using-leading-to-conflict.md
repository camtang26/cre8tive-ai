### Pitfall 8.5: Not Using `overwrite` Leading to Conflict

**Issue:** If AI triggers a new tween on an element while an old one still runs, you might get fighting (e.g., user clicks a button to animate element left, then clicks another to animate it right while first is mid-flight). GSAP by default doesn't automatically cancel running tweens on an element (except with certain cases). This can cause weird intermediate states or jerkiness.

**Example:**

```
gsap.to(box, { x:100, duration:2 }); 
// before 2s done:
gsap.to(box, { x:0, duration:2 });
```

Now two tweens on x. The second doesn't automatically kill first. The box will start going back, but the first is still trying to go to 100, so outcome is unpredictable motion (whichever was called last will win each tick, causing jump or a stall at some value).

**Solution:** Use `overwrite: 'auto'` on tweens that might overlap.

```
gsap.to(box, { x:100, duration:2, overwrite: 'auto' });
gsap.to(box, { x:0, duration:2, overwrite: 'auto' });
```

Now second call will kill the first tween on that box automatically[\[45\]](https://gsap.com/community/forums/topic/23062-questions-about-performance-best-practices/#:~:text=Performance%20problems%20are%20almost%20always,much%20faster%20than%20animating%20left%2Ftop). This ensures smooth transition -- basically we tell GSAP to drop any competing tweens on same target.

**AI gotcha:** Many AI answers forget overwrite, resulting in glitchy animations if triggered repeatedly. Better to include it when multiple triggers or interactions can happen.
