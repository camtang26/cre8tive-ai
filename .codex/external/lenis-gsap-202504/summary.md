# Lenis README (2024-12 snapshot)
- Official Lenis docs show recommended GSAP ScrollTrigger integration: hook `lenis.on('scroll', ScrollTrigger.update)`, drive `lenis.raf` via `gsap.ticker`, and disable lag smoothing. Mirrors existing ParticleCore Lenis setup.
- Notes need to disable autoRaf and clean up ticker on unmount; emphasizes letting GSAP manage Lenis frame timing, avoiding double raf loops.
- Provides examples for React/Vue integration and warns to keep GSAP plugin registered.
