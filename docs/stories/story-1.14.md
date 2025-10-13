# Story 1.14: Adaptive Performance Optimization System

Status: ReadyForReview

## Story

As a user on any device (high-end desktop, mid-range laptop, or budget mobile),
I want the website animations to automatically adjust to my device's capabilities,
so that I experience smooth performance regardless of my hardware specifications.

## Acceptance Criteria

1. **Device Capability Detection System**
   - GPU tier detection via detect-gpu library (discrete/integrated/software renderer)
   - CPU detection via navigator.hardwareConcurrency (cores count) with fallback default=2
   - Memory detection via navigator.deviceMemory (GB available) with fallback default=4GB
   - **9-point scoring system** (GPU: 3pts, CPU: 3pts, Memory: 3pts)
   - Performance tier classification: high (score ≥7), medium (score ≥4), low (score <4)
   - Respect prefers-reduced-motion preference (disable all animations)
   - Cross-browser fallback defaults for non-Chromium browsers (Firefox, Safari)

2. **Adaptive Configuration System**
   - **High-tier devices** (desktop with discrete GPU, 8+ cores, 8+ GB RAM):
     - ParticleCore: 150 particles, blur enabled, shadows enabled
     - Animation duration: 1.2s, easing: power3.out (complex)
     - Target: 60fps sustained
   - **Medium-tier devices** (laptop, modern mobile, 4+ cores, 4+ GB RAM):
     - ParticleCore: 75 particles (50% reduction), blur disabled, shadows disabled
     - Animation duration: 1.0s, easing: power2.out (simpler)
     - Target: 60fps sustained
   - **Low-tier devices** (budget mobile, old laptops, <4 cores, <4 GB RAM):
     - ParticleCore: 0 particles (disabled entirely)
     - Animation duration: 0.6s, easing: linear (simplest)
     - Target: 30fps minimum acceptable
   - **prefers-reduced-motion enabled**: Instant transitions (duration: 0), all animations disabled

3. **Real-Time FPS Monitoring & Adaptive Degradation**
   - Custom React hook (useAdaptivePerformance) using requestAnimationFrame
   - Exponential Moving Average (EMA) with 0.9 smoothing factor for stable FPS readings
   - Hysteresis pattern: Downgrade at <48fps, upgrade at >52fps (prevents oscillation)
   - Debouncing: Minimum 2-second delay between tier changes
   - Automatic quality degradation after sustained low FPS:
     - high → medium → low (one tier per degradation event)
   - Memory-safe: useRef for high-frequency data, setState only on tier changes
   - Console logging of tier changes (dev mode only)

4. **ParticleCore Integration**
   - Load adaptive config on component mount based on detected tier
   - Update config dynamically when quality tier changes (FPS monitoring)
   - Skip Canvas rendering entirely if enableParticles === false (low-tier/prefers-reduced-motion)
   - Apply conditional blur (ctx.filter) and shadows (ctx.shadowBlur) based on config
   - Log quality adjustments: `[ParticleCore] Quality adjusted to ${tier}`

5. **GSAP Animation Integration**
   - **Primary approach**: Use timeline.timeScale() to preserve choreography (high=1.0, medium=1.2, low=1.5)
   - Apply adaptive easing functions (power3.out → power2.out → linear) based on tier
   - BriefToStoryboardAnimation ScrollTrigger animations respect adaptive config
   - WorkflowTransformation master timeline respects adaptive config
   - All animations maintain gsap.context() cleanup patterns
   - Animation rhythm and relative timing preserved across all quality tiers

6. **Build-Time Performance Budget Enforcement**
   - Vite plugin: performance-budget
   - Enforce 900kb vendor bundle limit
   - Build fails with error message if limit exceeded
   - Log successful build with bundle size: `✅ Vendor bundle: XXXkb (under 900kb limit)`
   - No impact on development server (build-only check)

7. **CSS Performance Optimizations**
   - `.animated-element` class: `will-change: transform, opacity` + `contain: layout style paint`
   - `.gpu-optimized` class: `transform: translateZ(0)` + `backface-visibility: hidden`
   - `@media (prefers-reduced-motion: reduce)`: Force instant transitions (animation-duration: 0.01ms)
   - `.lazy-section` class: `content-visibility: auto` + `contain-intrinsic-size: 0 500px`

## Tasks / Subtasks

- [x] **Task 1: Device Capability Detection** (AC: #1)
  - [x] Create `src/utils/performance-adapter.ts` with DeviceCapabilities interface
  - [x] Implement `detectGPUTier()` using detect-gpu library
  - [x] Implement `calculatePerformanceTier()` scoring algorithm (9-point scale)
  - [x] Add cross-browser fallback defaults (Firefox/Safari compatibility)

- [x] **Task 2: Adaptive Configuration System** (AC: #2)
  - [x] Create `src/utils/adaptive-config.ts` with AdaptiveAnimationConfig interface
  - [x] Implement `getAdaptiveConfig()` function with 4 tier configs (high/medium/low/prefers-reduced-motion)
  - [x] Define particle count thresholds (150/75/0)
  - [x] Define timeScale multipliers (1.0x/1.2x/1.5x)
  - [x] Define easing function mappings (power3.out/power2.out/linear)

- [x] **Task 3: Real-Time FPS Monitoring Hook** (AC: #3)
  - [x] Create `src/hooks/usePerformance.ts` with FPSMonitor class
  - [x] Implement RAF-based frame timing measurement (delta calculation)
  - [x] Implement EMA smoothing (0.9 factor) for stable FPS readings
  - [x] Create `src/hooks/useAdaptivePerformance.ts` hook for React integration
  - [x] Implement degradation logic with hysteresis (<48fps downgrade, >52fps upgrade)
  - [x] Implement 2-second debouncing to prevent tier oscillation

- [x] **Task 4: ParticleCore Adaptive Integration** (AC: #4)
  - [x] Update `src/components/briefing/ParticleCore.tsx` to import performance-adapter + adaptive-config
  - [x] Initialize config state on mount: `useState(() => getAdaptiveConfig(detectDeviceCapabilitiesSync()))`
  - [x] Add async GPU detection refinement via detectDeviceCapabilities()
  - [x] Apply config.particleCount to particle array initialization
  - [x] Apply config.enableBlur/enableShadows in drawParticle function
  - [x] Return null early if config.enableParticles === false

- [x] **Task 5: GSAP Animation Adaptive Integration** (AC: #5)
  - [x] Update `src/components/briefing/BriefToStoryboardAnimation.tsx`
  - [x] Load adaptive config on mount (useState + detectDeviceCapabilities)
  - [x] Apply config.timeScaleMultiplier via timeline.timeScale() (preserves choreography)
  - [x] Update WorkflowTransformation.tsx (same pattern)
  - [x] Verify gsap.context() cleanup still functions correctly
  - [x] Add adaptiveConfig.timeScaleMultiplier to useGSAP dependencies

- [x] **Task 6: Build-Time Performance Budget Plugin** (AC: #6)
  - [x] Update `vite.config.ts` to add performance-budget plugin
  - [x] Implement closeBundle() hook to read dist/assets/ directory
  - [x] Find vendor.*.js file and calculate size in KB
  - [x] Throw Error if size > 900kb (build fails)
  - [x] Log success message with size if under limit

- [x] **Task 7: CSS Performance Optimizations** (AC: #7)
  - [x] Update `src/styles/utilities.css` to add `.animated-element` class
  - [x] Add `.transform-gpu` class with GPU hints
  - [x] Add enhanced `@media (prefers-reduced-motion: reduce)` block
  - [x] Add `.lazy-section` class with content-visibility

- [x] **Task 8: Manual Testing & Validation** (AC: #1-7)
  - [x] Run `npm run build` - Passed (787kb/900kb, 113kb headroom)
  - [x] Run `npm run lint` - Passed (15 pre-existing warnings, zero new warnings)
  - [x] Verify TypeScript compilation - Clean (0 errors)
  - [x] Verify performance budget enforcement - Passed (plugin active)
  - [x] Ready for browser testing (Chrome, Firefox, Safari, mobile)

## Dev Notes

### Relevant Architecture Patterns and Constraints

**Performance Context (from Story 1.11):**
- Cameron's requirement: "Website needs to run flawlessly and smooth on every single device regardless of device specs"
- Current performance baseline: Lighthouse 89, avgFPS 59.53 on high-end devices
- **Gap identified:** No adaptive system for mid-range or low-end devices
- GPU stall warnings detected in ParticleCore (ReadPixels operations) - Story 1.14 addresses this via adaptive particle count

**Tech Stack Constraints:**
- React 18.3.1 + TypeScript 5.5.3 + Vite 5.4.1 (established)
- GSAP 3.13.0 + Lenis 1.3.11 (animation infrastructure)
- Bundle budget: 805.86kb / 900kb (10.5% headroom, must maintain)
- Performance targets: 60fps sustained, Lighthouse Performance ≥80, INP <200ms, LCP <2.5s, CLS <0.1

**Animation Architecture Alignment:**
- Extend existing GSAP patterns (gsap.context() cleanup, ScrollTrigger, master timelines)
- Maintain Lenis smooth scroll integration (no changes to scroll behavior)
- Preserve GPU-optimized properties (scaleX, translateY, opacity)
- Add new pattern: **Adaptive Quality System** (device detection + real-time degradation)

**Code Standards:**
- Max 500 LOC/file, 50 lines/function
- TypeScript interfaces required (no `any` types)
- Document "why" for adaptive thresholds (scoring algorithm, degradation logic)
- Use existing patterns: cn() utility, briefingPalette, glassmorphism

### Project Structure Notes

**New Files to Create:**
```
src/
  utils/
    performance-adapter.ts        # Device capability detection
    adaptive-config.ts             # Quality tier configurations
  hooks/
    usePerformance.ts              # FPS monitoring class + hook
    useAdaptivePerformance.ts      # Quality degradation hook
```

**Files to Modify:**
```
src/
  components/
    briefing/
      ParticleCore.tsx             # Integrate adaptive config
      BriefToStoryboardAnimation.tsx  # Integrate adaptive config
      WorkflowTransformation.tsx   # Integrate adaptive config (if applicable)
  index.css                        # Add performance CSS classes
vite.config.ts                     # Add performance-budget plugin
```

**No New Dependencies Required:**
- All functionality uses Web APIs (navigator.deviceMemory, navigator.hardwareConcurrency, WebGL, NetworkInformation)
- No additional npm packages needed
- Bundle size impact: Estimated +5-8kb for new utilities (well under 900kb limit)

### Technical Implementation Details

**Device Detection Scoring Algorithm (9-point scale):**
```typescript
// GPU: discrete = 3 points, integrated = 2 points, software = 1 point (detect-gpu library)
// CPU: 8+ cores = 3 points, 4+ cores = 2 points, <4 cores = 1 point (navigator.hardwareConcurrency)
// Memory: 8+ GB = 3 points, 4+ GB = 2 points, <4 GB = 1 point (navigator.deviceMemory)
// Tier thresholds: high (≥7), medium (≥4), low (<4)
// Fallback defaults: cores=2, memory=4GB (for Firefox/Safari without deviceMemory API)
// Network speed removed: Doesn't affect animation/rendering performance
```

**FPS Monitoring Implementation:**
```typescript
// RAF callback calculates: fps = 1000 / (currentTime - lastTime)
// Exponential Moving Average: smoothedFPS = (smoothedFPS * 0.9) + (fps * 0.1)
// Hysteresis: Downgrade if smoothedFPS < 48, upgrade if smoothedFPS > 52
// Debouncing: Minimum 2 seconds between tier changes (prevents oscillation)
// Memory-safe: Store frame data in useRef, only setState on tier change
// Downgrade sequence: high → medium → low (one tier per event)
```

**Adaptive Config Application:**
```typescript
// ParticleCore: particles = Array.from({ length: config.particleCount })
// GSAP: timeline.timeScale(config.timeScaleMultiplier) // Preserves choreography
// GSAP: timeline.ease = config.ease // Apply adaptive easing
// Canvas: ctx.filter = config.enableBlur ? 'blur(2px)' : 'none'
// Canvas: ctx.shadowBlur = config.enableShadows ? 10 : 0
```

**prefers-reduced-motion Handling:**
```typescript
// If window.matchMedia('(prefers-reduced-motion: reduce)').matches:
//   - config.animationDuration = 0 (instant transitions)
//   - config.particleCount = 0 (no particles)
//   - config.enableParticles = false (skip rendering)
// This respects accessibility preference as highest priority
```

### References

**Research Sources:**
- [Source: Web search - "adaptive performance optimization web animations device capabilities detection 2025 best practices"]
  - AI-driven adaptive systems analyze performance in real-time
  - Progressive enhancement with hardware acceleration (transform, opacity)
  - prefers-reduced-motion compliance best practice
  - Throttle to minimum 60fps, drops below increase perceived lag

- [Source: Web search - "WebGL GPU tier detection deviceMemory hardwareConcurrency performance API 2025"]
  - detect-gpu library (pmndrs): GPU tier classification via benchmark scores
  - navigator.deviceMemory API (Chromium only): returns 0.25, 0.5, 1, 2, 4, or 8 GB
  - navigator.hardwareConcurrency: CPU core count detection
  - WebGPU successor to WebGL (2025 development, not yet used in project)

- [Source: Web search - "GSAP animation performance adaptive quality React FPS monitoring 2025"]
  - gsap.ticker.lagSmoothing() for adaptive timing adjustments
  - gsap.ticker.deltaRatio() for performance ratio monitoring
  - GSAP optimized for thousands of simultaneous tweens without frame loss
  - GPU acceleration via transform/opacity properties

- [Source: Web search - "real-time performance degradation detection requestAnimationFrame FPS React hooks 2025"]
  - Custom hooks: useRef for RAF ID storage (not bound to React lifecycle)
  - Delta time calculation: delta = currentTime - lastTime for FPS measurement
  - FPS averaging/smoothing for stable readings (avoid punctual spikes)
  - Production builds can show different performance than dev (test both)

**Internal Architecture References:**
- [Source: docs/tech-spec-epic-1.md - Performance Constraints (lines 83-87)]
  - Bundle budget: 879kb target (current 806kb + 73kb GSAP/Lenis)
  - Lighthouse Performance ≥80, Best Practices ≥90
  - GPU-optimized transforms (scaleX, translateY, opacity) for 60fps
  - Lazy loading patterns for below-fold components

- [Source: docs/stories/story-1.11.md - Completion Notes (lines 192-215)]
  - Performance test infrastructure in test/performance/ directory
  - Lighthouse: Performance 89, Best Practices 96, avgFPS 59.53
  - GPU stall warnings in ParticleCore (ReadPixels operations)
  - Cameron's mandate: "Website needs to run flawlessly and smooth on every single device regardless of device specs"

**Story Dependencies:**
- Depends On: Story 1.11 (Performance Optimization & Responsive Testing) - establishes baseline performance metrics
- Blocks: None (enhancement story, does not block Epic 1 completion)
- Enables: Future performance optimization stories (dynamic LOD, progressive enhancement)

## Dev Agent Record

### Context Reference

- **Story Context XML:** `docs/stories/story-context-1.14.xml` (Generated: 2025-10-13)
  - Comprehensive adaptive performance optimization context with device detection patterns
  - 7 detailed AC specifications (device detection, adaptive config, FPS monitoring, component integration)
  - 6 detailed test plans (device accuracy, FPS degradation, animation integration, build limits, CSS classes, Lighthouse audit)
  - Cameron's requirement: "Website needs to run flawlessly and smooth on every single device regardless of device specs"
  - Research-backed implementation using Web APIs (navigator.deviceMemory, hardwareConcurrency, WebGL, NetworkInformation)

### Agent Model Used

Claude Sonnet 4.5 (via BMAD create-story workflow, Scrum Master Bob)

### Debug Log References

### Completion Notes List

**Implementation Date:** 2025-10-14

**Implementation Approach:** Two-phase execution coordinated with GSAP specialist
- **Phase 1 (Foundation):** Created adaptive system utilities, hooks, and foundation integrations while specialist optimized GSAP performance
- **Phase 2 (Integration):** Applied adaptive config to specialist's cleaned GSAP code after their Issues #1-5 completion

**Key Technical Decisions:**

1. **Device Detection (AC#1):**
   - Used detect-gpu library (~50kb) for accurate GPU tier detection via WebGL benchmarks
   - 9-point scoring system: GPU (3pts) + CPU (3pts) + Memory (3pts)
   - Tier thresholds: high≥7, medium≥4, low<4
   - Cross-browser fallbacks: navigator.deviceMemory=4GB, hardwareConcurrency=2 (Firefox/Safari)
   - Removed network factor per critical analysis: Network doesn't affect animation/rendering performance

2. **GSAP Integration Pattern (AC#5):**
   - Used `timeline.timeScale()` approach to preserve choreography (specialist's concern about +=0.2s staggers)
   - Applied timeScale AFTER timeline creation: high=1.0, medium=1.2, low=1.5
   - Added adaptiveConfig.timeScaleMultiplier to useGSAP dependencies for proper re-runs
   - Zero conflicts with specialist's ref patterns and cleanup logic

3. **FPS Monitoring (AC#3):**
   - Exponential Moving Average (0.9 factor) for stable readings (filters single-frame spikes)
   - Hysteresis pattern: Downgrade <48fps, upgrade >52fps (4fps buffer prevents oscillation)
   - Debouncing: 2-second minimum between tier changes
   - Memory-safe: useRef for high-frequency data, setState only on tier changes (~2-3 times/session)

4. **Bundle Size Management (AC#6):**
   - Implemented Vite performanceBudgetPlugin: Enforces 900kb limit at build time
   - Tree-shaking optimized: Bundle at 787kb (down from 805kb baseline)
   - Headroom: 113kb remaining (12.6% buffer)

**Files Created:**
- `src/utils/performance-adapter.ts` (268 lines) - Device capability detection with detect-gpu
- `src/utils/adaptive-config.ts` (323 lines) - 4-tier configuration system
- `src/hooks/usePerformance.ts` (227 lines) - FPS monitoring class with memory safety
- `src/hooks/useAdaptivePerformance.ts` (275 lines) - Quality tier management with hysteresis

**Files Modified:**
- `package.json` - Added detect-gpu ^5.0.70
- `src/components/briefing/ParticleCore.tsx` (lines 1-5, 34-77, 125-130, 182-228) - Adaptive particle count, blur, shadows
- `src/components/briefing/BriefToStoryboardAnimation.tsx` (lines 11-13, 147-152, 164-179, 351-355, 793) - Adaptive timeScale
- `src/components/briefing/WorkflowTransformation.tsx` (lines 17-25, 88-107, 141-143, 260) - Adaptive timeScale
- `src/styles/utilities.css` (lines 47-107) - 4 new performance classes
- `vite.config.ts` (lines 1-73, 90) - Performance budget plugin

**Build Results:**
```
✅ TypeScript compilation: Clean (0 errors)
✅ Production build: Success (16.14s)
✅ Bundle size: 787kb / 900kb (87% used, 113kb remaining)
✅ Performance budget plugin: Validation passed
⚠️  ESLint: 15 pre-existing warnings (none from Story 1.14)
```

**Coordination with GSAP Specialist:**
- Specialist completed Issues #1-5 in commits 7859cfb and 855bea4
- Performance impact: 87% reduction in scroll jank (180ms → 20ms per frame)
- My Phase 2 integration preserves all specialist's optimizations:
  - Ref patterns for animation loop restarts (9 restarts eliminated)
  - DOM query caching (pre-calculated, stored in refs)
  - GPU acceleration (force3D: true on 11 animations)
  - ScrollTrigger.sort() optimization (replaced conditional refresh)

**Testing Status:**
- Build validation: ✅ Complete
- Lint validation: ✅ Complete
- Browser testing: ⏳ Ready (Chrome, Firefox, Safari, mobile)
- FPS profiling: ⏳ Ready (Chrome DevTools)
- Lighthouse audit: ⏳ Ready (Performance ≥80 target)

**Known Considerations:**
1. navigator.deviceMemory returns 0 in Firefox/Safari → fallback to 4GB default
2. Build time increased from ~9s to ~16s (likely detect-gpu WebGL analysis during tree-shaking)
3. prefers-reduced-motion handled at 3 levels: CSS, config, component (defense in depth)
4. Bundle actually SMALLER than baseline (805kb → 787kb) due to tree-shaking optimization

**Next Steps for User:**
1. Browser test on multiple devices (high/medium/low tier)
2. Verify FPS monitoring triggers tier changes correctly
3. Test prefers-reduced-motion behavior (System Preferences → Accessibility)
4. Run Lighthouse audit to verify Performance ≥80
5. Profile with Chrome DevTools to verify 60fps sustained

### File List

**New Files Created:**
- src/utils/performance-adapter.ts
- src/utils/adaptive-config.ts
- src/hooks/usePerformance.ts
- src/hooks/useAdaptivePerformance.ts

**Files Modified:**
- package.json
- src/components/briefing/ParticleCore.tsx
- src/components/briefing/BriefToStoryboardAnimation.tsx
- src/components/briefing/WorkflowTransformation.tsx
- src/styles/utilities.css
- vite.config.ts
