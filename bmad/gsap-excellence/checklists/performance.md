# GSAP Performance Checklist

**Source:** Deep-Research GSAP-Animation-Mastery Sections 5.1-5.6
**Purpose:** Systematic performance validation with objective benchmarks
**Usage:** Reference during optimization, Tech Director validation, production sign-off

---

## 🎯 Performance Targets (MANDATORY)

**Frame Rate Standards:**
- ✅ **60fps sustained** @ 1x CPU throttle (normal devices)
- ✅ **60fps sustained** @ 4x CPU throttle (mid-range devices) - **MANDATORY**
- ✅ **30fps minimum** @ 6x CPU throttle (low-end devices)

**Timing Benchmarks:**
- ✅ **<16ms per frame total** (60fps target)
  - **<8ms scripting** (JS execution)
  - **<4ms style/layout** (CSS recalculation)
  - **<4ms paint** (pixel rendering)
- ✅ **<5ms JS execution per frame** (GSAP + callbacks)
- ✅ **0 console errors**
- ✅ **0 GSAP warnings**

---

## 5.1: Animate Efficient Properties (GPU Rule) - CRITICAL

**Principle:** Stick to GPU-accelerated properties. Avoid layout-triggering properties.

### ✅ GPU-Accelerated (ALWAYS USE)

**Transform Properties:**
- [ ] `x`, `y` (translate)
- [ ] `scale` (uniform or `scaleX`, `scaleY`)
- [ ] `rotation` (or `rotateX`, `rotateY`, `rotateZ`)
- [ ] `skewX`, `skewY`

**Other GPU Properties:**
- [ ] `opacity`
- [ ] `filter` (simple filters only: `blur`, `brightness` - test performance!)

### ❌ Layout-Triggering (NEVER ANIMATE)

**Position Properties (Cause Reflow):**
- [ ] NOT using `top`, `left`, `right`, `bottom`
- [ ] NOT using `width`, `height`
- [ ] NOT using `margin`, `padding`

**Paint-Heavy Properties (Use Sparingly):**
- [ ] Minimizing `color` animations
- [ ] Minimizing `box-shadow` animations
- [ ] Minimizing `gradient` animations
- [ ] Limiting to few elements if used

### 🔧 Optimization Techniques

**will-change Optimization:**
- [ ] **Large background images:** Using `will-change: transform` (continuous movement)?
- [ ] **NOT overusing:** Avoiding `will-change` on 100+ elements?
- [ ] **Removing after animation:** Unsetting `will-change` after completion?
- [ ] **Layer count check:** <10 layers total (check Chrome DevTools Layers panel)?

**Alternatives to Layout Properties:**
```javascript
// ❌ WRONG - Animates height (reflows content)
gsap.to(".panel", { height: 200, duration: 1 });

// ✅ CORRECT - Use scaleY instead
gsap.to(".panel", {
  scaleY: 1,
  transformOrigin: "top center",
  duration: 1
});

// ❌ WRONG - Animates position (reflows layout)
gsap.to(".box", { top: "100px", left: "50px" });

// ✅ CORRECT - Use transforms
gsap.to(".box", { x: 50, y: 100 }); // Element must be positioned (relative/absolute)
```

**Reference:** Deep-Research 5.1

---

## 5.2: Keep Main Thread Free (Avoid Long Tasks) - HIGH Priority

**Principle:** Minimize work per frame. Avoid heavy computations in animation callbacks.

### JavaScript Execution Checklist

- [ ] **onUpdate callbacks:** NOT doing heavy DOM traversal in `onUpdate`?
- [ ] **onUpdate callbacks:** NOT doing expensive math in `onUpdate`?
- [ ] **Precomputed values:** Complex calculations done BEFORE animation starts?
- [ ] **Physics plugins:** Using GSAP's InertiaPlugin instead of custom physics in onUpdate?

### Event Loop Management

- [ ] **Timeline delays:** Using GSAP timeline delays (NOT `setTimeout`)?
- [ ] **delayedCall:** Using `gsap.delayedCall()` instead of `setTimeout` for animations?
- [ ] **RAF-synced loops:** Using `gsap.ticker` or `requestAnimationFrame` (NOT `setInterval`)?
- [ ] **Background tabs:** Animations pause when tab inactive (GSAP auto-pauses with RAF)?

### Reflow Batching (Advanced)

- [ ] **Read-then-write pattern:** Batching DOM reads together, then writes together?
- [ ] **GSAP rendering:** Letting GSAP handle style writes (not manual DOM manipulation during tweens)?
- [ ] **Forced reflows:** NOT triggering forced reflow with read-write-read pattern?

**Example - Avoid forced reflows:**
```javascript
// ❌ WRONG - Forced reflow each iteration
elements.forEach(el => {
  const height = el.offsetHeight; // READ
  el.style.width = height + 'px';  // WRITE - forces reflow!
});

// ✅ CORRECT - Batch reads, then writes
const heights = elements.map(el => el.offsetHeight); // ALL READS
heights.forEach((h, i) => {
  elements[i].style.width = h + 'px'; // ALL WRITES
});
```

**Reference:** Deep-Research 5.2

---

## 5.3: Debugging Jank - HIGH Priority

**Principle:** Use Chrome DevTools to identify and fix performance bottlenecks.

### Performance Profiling Checklist

**Chrome DevTools Performance Tab:**
- [ ] **Performance profile recorded:** Open DevTools → Performance → Record?
- [ ] **Scripting spikes identified:** Scripting >8ms per frame?
- [ ] **Rendering spikes identified:** Rendering/Painting >4ms per frame?
- [ ] **Long tasks flagged:** Any tasks >50ms (red triangles)?

**Diagnosis - High Scripting Time:**
- [ ] **Too many simultaneous tweens:** Animating hundreds of visible elements?
- [ ] **Heavy onUpdate callbacks:** Complex logic in tween callbacks?
- [ ] **Third-party interference:** Other scripts hogging main thread?

**Diagnosis - High Rendering/Painting Time:**
- [ ] **Large element repaints:** Fullscreen elements with complex effects?
- [ ] **Filter/blur heavy:** Animating blur on large elements?
- [ ] **Too many layers:** >10 composited layers?

### Image Optimization

- [ ] **Image decoding:** Using `image.decode()` to preload decode before animating?
- [ ] **Lazy loading:** Images loaded before heavy animations start?
- [ ] **Image size check:** Large images (>1MB) optimized/compressed?

### will-change Pitfalls

- [ ] **Persistent will-change:** NOT leaving `will-change` set permanently?
- [ ] **Remove after completion:** Using `onComplete: () => element.style.willChange = 'auto'`?
- [ ] **Context revert:** Using `gsap.context().revert()` to clean up will-change?

**Reference:** Deep-Research 5.3

---

## 5.4: Memory Management & Garbage Collection - MEDIUM Priority

**Principle:** Clean up animations to prevent memory leaks in long-running single-page apps.

### Cleanup Checklist

- [ ] **Kill old timelines:** Using `timeline.kill()` when navigating away?
- [ ] **Kill ScrollTriggers:** Using `ScrollTrigger.getAll().forEach(t => t.kill())` on navigation?
- [ ] **Context cleanup:** Using `gsap.context()` with `.revert()` for automatic cleanup?
- [ ] **No tween accumulation:** NOT creating new tweens on `mousemove` without killing old ones?

### Overwrite Strategy

- [ ] **overwrite: auto:** Using `overwrite: 'auto'` to automatically kill competing tweens?
- [ ] **quickTo method:** Using `gsap.quickTo()` for frequently updated animations (e.g., cursor follow)?

### Memory Leak Detection

- [ ] **DevTools Memory snapshot:** Taking memory snapshots to check for detached DOM?
- [ ] **Flip cleanup:** Ensuring Flip animations don't duplicate DOM that never gets removed?
- [ ] **Element removal:** Removing offscreen/completed elements (or reusing them)?

**Example - Prevent tween accumulation:**
```javascript
// ❌ WRONG - Creates new tween on every mousemove (thousands of tweens!)
window.addEventListener('mousemove', (e) => {
  gsap.to('.cursor', { x: e.clientX, y: e.clientY, duration: 0.3 });
});

// ✅ CORRECT - Use quickTo (reuses same tween)
const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.3 });
const yTo = gsap.quickTo('.cursor', 'y', { duration: 0.3 });
window.addEventListener('mousemove', (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

// ✅ ALTERNATIVE - Use overwrite: auto
window.addEventListener('mousemove', (e) => {
  gsap.to('.cursor', { x: e.clientX, y: e.clientY, duration: 0.3, overwrite: 'auto' });
});
```

**Reference:** Deep-Research 5.4

---

## 5.5: Optimize for 60fps - CRITICAL (MANDATORY)

**Principle:** Target ~16ms per frame budget. Use specific optimization techniques.

### Frame Budget Breakdown

**Target:** ~16ms per frame (60fps)
- **Scripting:** <8ms
- **Style/Layout:** <4ms
- **Paint:** <4ms

### Optimization Techniques Checklist

**Reduce Draw Calls:**
- [ ] **Canvas for particles:** Using canvas for >50 small moving elements (confetti, particles)?
- [ ] **DOM limit:** Keeping simultaneous DOM animations <100 visible elements?
- [ ] **Stagger for large sets:** Using stagger to animate large sets over time (not all at once)?

**Layer Management:**
- [ ] **Hide background layers:** Setting `display: none` on content behind full-screen overlays?
- [ ] **autoAlpha usage:** Using `autoAlpha` instead of `opacity` (auto-hides at opacity: 0)?

**ScrollTrigger Optimization:**
- [ ] **Refresh throttling:** NOT calling `ScrollTrigger.refresh()` too frequently?
- [ ] **Scrub smoothing:** Using `scrub: 0.1` instead of `scrub: true` if slight delay acceptable?
- [ ] **Discrete triggers:** Using `toggleActions` instead of `scrub` for lighter animations?

**Benchmarking:**
- [ ] **60fps @ 1x CPU:** Sustained 60fps on normal devices?
- [ ] **60fps @ 4x CPU:** Sustained 60fps on mid-range devices (MANDATORY)?
- [ ] **30fps @ 6x CPU:** Minimum 30fps on low-end devices?

**GSAP vs CSS Performance:**
- [ ] **Simple spinners:** Leaving simple infinite CSS animations as CSS (not GSAP)?
- [ ] **Complex sequences:** Using GSAP for complex sequences (better control)?
- [ ] **No mixing:** NOT using CSS transitions + GSAP on same properties?

**Reference:** Deep-Research 5.5

---

## 5.6: When to Use WebGL/Canvas - LOW Priority

**Principle:** Move to WebGL/Canvas for extreme visual complexity. DOM is fine for typical UI.

### When to Escalate to WebGL/Canvas

**Use Canvas/WebGL if:**
- [ ] **>1000 moving objects:** Starfield, particle systems, complex visualizations?
- [ ] **Shader effects:** Complex filters, distortions, custom visual effects?
- [ ] **Large video manipulation:** Video effects, filters, transformations?
- [ ] **3D transformations:** True 3D scenes (use Three.js)?

**Stick with DOM + GSAP if:**
- [ ] **<100 elements:** Typical UI animations (buttons, cards, text)?
- [ ] **ScrollTrigger-driven:** Scroll-based reveals, pins, parallax?
- [ ] **Simple interactions:** Hover effects, click animations, page transitions?

### GSAP Integration with Canvas/WebGL

**Example - Animate Canvas properties:**
```javascript
// ✅ CORRECT - Tween canvas-based starfield rotation
const starfield = { rotation: 0 };
gsap.to(starfield, {
  rotation: 360,
  duration: 20,
  repeat: -1,
  onUpdate: () => {
    // Redraw canvas with new rotation
    drawStarfield(starfield.rotation);
  }
});
```

**Example - Animate Three.js objects:**
```javascript
// ✅ CORRECT - Tween Three.js mesh
gsap.to(mesh.rotation, { y: Math.PI * 2, duration: 2 });
gsap.to(mesh.position, { x: 10, duration: 1 });
```

**Reference:** Deep-Research 5.6

---

## 📊 Performance Validation Protocol

**Before Production Sign-Off (Tech Director):**

### 1. Chrome DevTools Profiling
```bash
# Record performance profile:
1. Open DevTools → Performance tab
2. Click Record → Trigger animation → Stop
3. Analyze:
   - Scripting: <8ms per frame ✅
   - Rendering: <4ms per frame ✅
   - Painting: <4ms per frame ✅
   - Long tasks: 0 red flags ✅
```

### 2. CPU Throttling Tests
- [ ] **Test @ 1x CPU:** 60fps sustained (normal devices)
- [ ] **Test @ 4x CPU:** 60fps sustained (mid-range) - **MANDATORY**
- [ ] **Test @ 6x CPU:** 30fps minimum (low-end acceptable)

### 3. Frame Rate Measurement
```javascript
// Use Chrome DevTools FPS meter:
1. Ctrl/Cmd + Shift + P
2. Type "Show frames per second (FPS) meter"
3. Trigger animation
4. Observe FPS counter (should stay at 60fps)
```

### 4. Memory Profiling (SPA only)
- [ ] **Heap snapshot before navigation**
- [ ] **Navigate away and back 5 times**
- [ ] **Heap snapshot after navigation**
- [ ] **Detached DOM nodes:** <10 detached elements
- [ ] **Memory growth:** <5MB increase after 5 navigations

---

## 🎯 Quick Reference: Performance Priority

**CRITICAL (Blocking):**
1. ✅ 5.1: GPU Rule (transform/opacity only)
2. ✅ 5.5: 60fps @ 4x CPU throttle (MANDATORY)

**HIGH Priority:**
3. ✅ 5.2: Main Thread Free (<8ms scripting)
4. ✅ 5.3: Debugging Jank (DevTools profiling)

**MEDIUM Priority:**
5. ✅ 5.4: Memory Management (cleanup)

**LOW Priority (Escalation):**
6. ✅ 5.6: WebGL/Canvas (if >1000 objects)

---

## 🔧 Usage in Workflows

**Tech Director:** Validate performance before production (Step 9-10 of animation-production)
**VFX Artist:** Apply 5.1 GPU Rule during implementation
**Editor:** Use 5.3 Debugging Jank during refinement

**Last Updated:** 2025-11-03
**Module:** GSAP Excellence Engine
**Quality Standard:** 9.8/10 (Industry-leading)
