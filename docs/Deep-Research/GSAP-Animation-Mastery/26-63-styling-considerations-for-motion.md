### 6.3 Styling Considerations for Motion

There are some CSS techniques to aid accessible motion: - Use `prefers-reduced-motion` in CSS to disable CSS-based animations or transitions. E.g.:

```
@media (prefers-reduced-motion: reduce) {
  .animated-bg { animation: none; }
  .slide-in { transition: none !important; }
}
```

This catches any CSS you might have (though our focus is GSAP, if any CSS animation slipped in, disable it). - Provide alternative styling if needed. Example: If an element normally only appears via animation with no outline or border (some fancy design), in reduced motion mode maybe ensure it's clearly visible without that motion. Possibly add a static indicator.
