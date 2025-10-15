# Chrome Forced Reflow Insight (2025-10-08)
- Chrome Performance Insights warns that synchronous layout reads during animation trigger forced reflow, especially when calling `getBoundingClientRect()` or accessing layout properties in tight loops.
- Recommended mitigations: cache measurements, batch DOM reads before writes, rely on ResizeObserver/devicePixelContentBoxSize for canvas sizing, and avoid interleaving layout reads/writes in requestAnimationFrame. Emphasizes dramatic main-thread blocking (hundreds of milliseconds) similar to ParticleCore issue.
- Validation guidance: record performance trace, inspect Layout Shift tracks, and ensure Fix verifies elimination of forced reflow events.
