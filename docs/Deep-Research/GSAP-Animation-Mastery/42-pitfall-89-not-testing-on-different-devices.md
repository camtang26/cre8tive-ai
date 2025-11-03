### Pitfall 8.9: Not Testing on Different Devices

**Issue:** The animation might be fine on desktop but terrible on mobile -- maybe AI coded large pinned sections that don't fit on mobile, etc., and didn't set markers.

**Solution:** Use `ScrollTrigger.matchMedia` to adjust or even disable some triggers on smaller screens. E.g., if an animation is too heavy for mobile, AI should at least mention turning it off or simplifying it.

**AI error example:** A complex multi-pin horizontal scroll on mobile where scroll is already constrained -- user stuck. Always think responsive.
