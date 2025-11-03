### Pitfall 8.7: Use of Deprecated or Old Syntax

**Issue:** AI might produce GSAP 2 syntax (TweenMax, etc.) because of training on older data.

**Examples of outdated vs current:** - Old: `TweenMax.to(...);` New: `gsap.to(...);` - Old: `new TimelineMax()` New: `gsap.timeline()` - Old eases like `Power2.easeOut` New: `"power2.out"` or `Power2.easeOut` (still works, but string is simpler). - Club plugins old import vs new: e.g. `ThrowPropsPlugin` is now part of InertiaPlugin, etc. - AI should avoid using Lite/Max classes entirely[\[46\]](https://gsap.com/resources/mistakes/#:~:text=Using%20old%2Fverbose%20syntax).

**Solution:** Always use GSAP 3 unified syntax. The checklist mentions using short string eases instead of EasePack names[\[47\]](https://gsap.com/resources/mistakes/#:~:text=match%20at%20L437%20Use%20the,string%20form%20for%20eases), etc.

**AI tell:** If answer uses TweenLite, that's wrong (unless specifically asked historically). Same for `CSSPlugin` references or including `gsap.registerPlugin(CSSPlugin)` -- not needed as it's built-in.
