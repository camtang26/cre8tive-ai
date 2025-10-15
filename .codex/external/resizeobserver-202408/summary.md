# MDN ResizeObserverEntry.devicePixelContentBoxSize
- Describes using `devicePixelContentBoxSize` to obtain device-pixel dimensions from ResizeObserver without triggering layout; ideal for HiDPI canvas resizing.
- Highlights availability in Chrome 84+, Safari 16.4+, and caution about fallback to `contentRect` when unsupported.
- Suggests using values to adjust `canvas.width`/`height` for crisp rendering while keeping CSS size separate—aligns with ParticleCore's need to avoid repeated getBoundingClientRect calls.
