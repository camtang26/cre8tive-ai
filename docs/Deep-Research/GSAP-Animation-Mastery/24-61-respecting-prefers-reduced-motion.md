### 6.1 Respecting **Prefers-Reduced-Motion**

Some users have a setting in their OS or browser indicating they prefer reduced (or no) motion due to vestibular disorders or personal preference. We **must** honor this: - **Detecting the preference:** In CSS, `@media (prefers-reduced-motion: reduce)` can apply different styles. In JS, use `window.matchMedia('(prefers-reduced-motion: reduce)')`. GSAP provides a handy integration via `gsap.matchMedia()` to create conditional animations[\[23\]](https://gsap.com/resources/a11y/#:~:text=Did%20you%20know%20that%20some,for%20people%20with%20motion%20sensitivities)[\[24\]](https://gsap.com/resources/a11y/#:~:text=We%20can%20listen%20to%20this,matchMedia). - **How to reduce motion:** There's a spectrum: - *Minimal*: You might still animate but less intensely (e.g., no parallax, no big moves, only fades). - *Disable largely*: Skip non-essential animations entirely -- e.g., if you have decorative background animations, turn them off. - *Alternate presentation*: Perhaps provide instant changes or subtle cross-fades instead of slides. - **Implementing**: For example:

```
gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
  ScrollTrigger.getAll().forEach(trig => trig.disable()); // or kill if we want to remove entirely
  gsap.globalTimeline.timeScale(100); // speed through any remaining animations (effectively instant finish)
});
```

This extreme example basically stops animations. Alternatively, one could create entirely separate animations:

```
mm.add("(prefers-reduced-motion: no-preference)", () => { 
  // full animations
});
mm.add("(prefers-reduced-motion: reduce)", () => { 
  // simpler animations or just set end states
  document.querySelectorAll('.anim-element').forEach(el => el.classList.add('appear')); 
});
```

Where `.appear` class in CSS might just instantly show elements that would have been animated. - **What to reduce**: Focus on things that cause large movement or continuous motion: - Parallax effects: These can cause dizziness. Instead, perhaps just keep elements static. - Zooming or rotation: If something zooms a lot, maybe just fade it. - Autoscrolling or scroll-jacking: If your animation auto-scrolls or rapidly changes content, definitely disable that under reduce motion. - Repetitive animations (like a background that constantly pans). Either stop them or allow user to pause. - **Testing**: Manually toggle your OS setting (on Mac: Settings > Accessibility > Display > Reduce Motion; on Windows: Settings > Display > Simplify and personalize > Show animations). Then use your site. All major animations should noticeably tone down. If not, revisit and adjust logic. - GSAP's solution via `matchMedia` is nice because you can ensure ScrollTriggers and such don't even initialize in reduce mode (preventing side effects like pinned elements stuck). The snippet from GSAP docs essentially suggests using matchMedia for it[\[24\]](https://gsap.com/resources/a11y/#:~:text=We%20can%20listen%20to%20this,matchMedia), which we have integrated above.
