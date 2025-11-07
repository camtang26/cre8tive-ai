        **5.1: GPU Rule (CRITICAL - BLOCKING)**
        **Mandate:** ONLY animate GPU-accelerated properties

        ✅ ALLOWED:
        - `transform` (x, y, scale, rotate, skew)
        - `opacity`
        - `filter` (simple only: blur, brightness)

        ❌ FORBIDDEN:
        - `top`, `left`, `right`, `bottom` (layout triggers)
        - `width`, `height` (reflow)
        - `margin`, `padding` (layout)

        **Validation:**
        - [ ] NO layout properties animated?
        - [ ] Using `x`/`y` instead of `top`/`left`?
        - [ ] Using `scaleY` instead of `height` where possible?

        **❌ WRONG - Height Animation (Causes Reflow):**
        ```javascript
        // Animates height - browser must recalculate layout each frame
        gsap.to(".accordion", { height: 200, duration: 1 });
        // Problem: Triggers reflow → all children recalculated → sibling elements repositioned
        // Cost: ~10-20ms per frame (kills 60fps)
        ```

        **✅ CORRECT - Use scaleY with Transform Origin:**
        ```javascript
        // GPU-accelerated transform - no layout recalculation
        gsap.to(".accordion", {
          scaleY: 1,  // Expand from 0 to 1
          transformOrigin: "top center",  // Scale from top (not center)
          duration: 1
        });
        // CSS setup: Start with scaleY: 0 and fixed max-height
        // .accordion { max-height: 200px; transform: scaleY(0); }
        // Cost: <1ms per frame (maintains 60fps)
        ```

        **Alternative - Clip-path for Precise Height Control:**
        ```javascript
        // When you need exact pixel height (not scale)
        gsap.to(".accordion", {
          clipPath: "inset(0% 0% 0% 0%)",  // Reveal full height
          duration: 1
        });
        // CSS setup: Start hidden with clip-path
        // .accordion { clip-path: inset(0% 0% 100% 0%); }
        // Note: GPU-accelerated but check browser support
        ```

        **Why scaleY Works:**
        - Browser promotes element to compositing layer
        - GPU handles transformation (offloaded from main thread)
        - No layout recalculation → siblings unaffected
        - Children scale proportionally (usually acceptable for reveals)

        **When to Use Each:**
        - **scaleY:** Content can scale (text, images) - PREFERRED
        - **clip-path:** Need exact pixel dimensions, prevent scaling artifacts
        - **NEVER height:** Unless content is truly dynamic AND no animation performance matters

        **will-change Optimization (Advanced):**

        **What will-change Does:**
        - Tells browser: "This property will animate soon, create GPU layer now"
        - Browser promotes element to compositing layer (GPU-accelerated)
        - Tradeoff: Uses GPU memory, increases layer count

        **✅ WHEN to Use will-change:**
        ```javascript
        // Large background images that move continuously
        .hero-background {
          will-change: transform;  // Promotes to GPU layer
        }

        // Complex scroll-driven parallax
        gsap.to('.parallax-layer', {
          scrollTrigger: { scrub: true },
          y: 200,
          willChange: 'transform'  // GSAP can set it for you
        });
        ```

        **❌ WHEN NOT to Use will-change:**
        ```javascript
        // Don't set on 100+ elements (explodes layer count → worse performance)
        document.querySelectorAll('.card').forEach(el => {
          el.style.willChange = 'transform';  // BAD if 100+ cards!
        });

        // Don't leave it set permanently (wastes GPU memory)
        .button {
          will-change: transform;  // Persists forever → memory leak
        }
        ```

        **✅ BEST PRACTICE - Add/Remove Dynamically:**
        ```javascript
        // Add will-change RIGHT BEFORE animation
        gsap.set('.element', { willChange: 'transform' });

        gsap.to('.element', {
          x: 200,
          duration: 1,
          onComplete: () => {
            // Remove will-change AFTER animation
            gsap.set('.element', { willChange: 'auto' });
          }
        });
        ```

        **✅ ALTERNATIVE - Use GSAP Context Cleanup:**
        ```javascript
        // GSAP context automatically cleans up will-change
        const ctx = gsap.context(() => {
          gsap.to('.element', {
            x: 200,
            willChange: 'transform'  // GSAP handles cleanup
          });
        });

        // On route change/unmount
        ctx.revert();  // Removes will-change automatically
        ```

        **Layer Count Check:**
        ```
        1. Chrome DevTools → More tools → Layers panel
        2. Count composited layers: Should be <10 total
        3. If >20 layers: will-change overused → Remove from some elements
        4. Each layer uses GPU memory (~1-5MB depending on size)
        ```

        **When will-change HELPS:**
        - Continuous movement (infinite scroll, parallax backgrounds)
        - Large elements (fullscreen hero images)
        - Complex transforms (3D rotations, large scale changes)

        **When will-change HURTS:**
        - 100+ elements (explodes layer count)
        - Static elements (wastes GPU memory)
        - Left on permanently (memory leak)

        **Reference:** Deep-Research 5.1, performance.md checklist, Archon GSAP performance docs

        ---

        **5.2: Main Thread Free (HIGH Priority)**
        **Principle:** Keep JS execution <8ms per frame

        **Checks:**
        - [ ] onUpdate callbacks: NO heavy DOM traversal?
        - [ ] onUpdate callbacks: NO expensive math?
        - [ ] Complex calculations precomputed BEFORE animation?
        - [ ] Using GSAP timeline delays (NOT setTimeout)?
        - [ ] Using `gsap.delayedCall()` for delays (NOT setTimeout)?

        **Frame Budget:** <16ms total (Scripting <8ms + Layout <4ms + Paint <4ms)

        **❌ WRONG - Forced Reflow (Read-Write-Read Pattern):**
        ```javascript
        // Forces browser to recalculate layout EACH iteration
        elements.forEach(el => {
          const height = el.offsetHeight;  // READ - forces layout calculation
          el.style.width = height + 'px';   // WRITE - invalidates layout
          // Next iteration: READ again - forces ANOTHER layout calculation!
        });
        // Problem: Layout thrashing - 100 elements = 100 forced reflows
        // Cost: ~50-100ms total (multiple dropped frames)
        ```

        **✅ CORRECT - Batched Read-Then-Write:**
        ```javascript
        // Batch ALL reads first
        const heights = elements.map(el => el.offsetHeight); // ALL READS (1 layout calc)

        // Then batch ALL writes
        heights.forEach((h, i) => {
          elements[i].style.width = h + 'px';  // ALL WRITES (invalidates once)
        });
        // Browser optimizes: Single layout calculation → All style writes batched
        // Cost: ~5-10ms total (maintains 60fps)
        ```

        **Alternative - Let GSAP Handle Batching:**
        ```javascript
        // GSAP automatically batches style writes per frame
        elements.forEach((el, i) => {
          gsap.to(el, {
            width: el.offsetHeight,  // GSAP reads once, applies efficiently
            duration: 0.5
          });
        });
        // GSAP uses requestAnimationFrame to batch writes optimally
        ```

        **RAF vs setTimeout for Animation Loops:**

        **❌ WRONG - setTimeout (Not Synced with Display):**
        ```javascript
        function animate() {
          updatePosition();  // May run mid-frame
          setTimeout(animate, 16);  // ~60fps but not vsync-locked
        }
        // Problem: Timing drift, runs even when tab inactive (battery drain)
        ```

        **✅ CORRECT - RequestAnimationFrame (Synced):**
        ```javascript
        function animate() {
          updatePosition();  // Runs right before browser paint
          requestAnimationFrame(animate);  // Perfectly synced with display refresh
        }
        // Benefits: Auto-pauses when tab inactive, synced with vsync (smooth)
        ```

        **✅ BEST - Use GSAP Ticker (Easiest):**
        ```javascript
        gsap.ticker.add(() => {
          updatePosition();  // GSAP handles RAF, pausing, throttling
        });
        // GSAP ticker: Built on RAF, auto-manages frame timing
        ```

        **Why This Matters:**
        - **Read-write-read:** Forces synchronous layout (SLOW)
        - **Read-then-write:** Single async layout (FAST)
        - **RAF:** Runs before paint (smooth), auto-pauses (efficient)
        - **setTimeout:** May run mid-frame (jank), never pauses (battery drain)

        **Reference:** Deep-Research 5.2, performance.md checklist

        ---

        **5.3: Debugging Jank (HIGH Priority)**
        **Tool:** Chrome DevTools Performance tab

        **Profiling Protocol:**
        1. Open DevTools → Performance → Record
        2. Trigger animation
        3. Stop recording
        4. Analyze:
           - Scripting spikes >8ms? → Too many simultaneous tweens
           - Rendering spikes >4ms? → Large element repaints
           - Long tasks (red flags)? → >50ms blocks

        **Diagnosis:**
        - High Scripting → Reduce simultaneous tweens, simplify callbacks
        - High Rendering → Check for large elements with blur/filters
        - High Paint → Too many layers (check will-change usage)

        ---

        **5.4: Memory Management (MEDIUM Priority)**
        **Principle:** Clean up animations in SPAs to prevent leaks

        **Checks:**
        - [ ] `timeline.kill()` on navigation?
        - [ ] `ScrollTrigger.getAll().forEach(t => t.kill())` on unmount?
        - [ ] Using `gsap.context()` with `.revert()` cleanup?
        - [ ] NOT creating new tweens on `mousemove` without overwrite?

        **Detailed Memory Profiling Protocol (SPAs):**

        **When to Profile Memory:**
        - Single-page apps (React, Vue, Next.js with client routing)
        - Heavy ScrollTrigger usage
        - Frequent page transitions
        - Long user sessions (>5 minutes active)

        **Step 1: Baseline Heap Snapshot**
        ```
        1. Open Chrome DevTools → Memory tab
        2. Select "Heap snapshot"
        3. Click "Take snapshot" → Save as "Baseline"
        4. Note baseline size (e.g., 25MB)
        ```

        **Step 2: Stress Test (Navigate 5x)**
        ```
        1. Navigate to page with GSAP animations
        2. Let animations complete
        3. Navigate away (to different route)
        4. Navigate back
        5. Repeat steps 2-4 five (5) times total
        6. Return to original page
        ```

        **Step 3: Post-Stress Heap Snapshot**
        ```
        1. Memory tab → "Take snapshot" → Save as "After 5x nav"
        2. Compare to baseline:
           - Heap size growth: <5MB acceptable
           - Detached DOM nodes: <10 acceptable
           - Listener count: Should be same as baseline
        ```

        **Step 4: Analyze Detached DOM Nodes**
        ```
        1. In "After 5x nav" snapshot
        2. Search for "Detached" in filter
        3. Expand detached nodes tree
        4. Look for:
           - Elements with GSAP data (data-gsap-*)
           - Elements with ScrollTrigger pins
           - Old route components not cleaned up
        5. ❌ FAIL: >10 detached nodes → Memory leak present
        ```

        **Step 5: Identify Leak Source**
        ```
        1. Take 3rd snapshot after forcing GC (click trash icon 🗑️)
        2. Memory tab → Click "Comparison" dropdown
        3. Compare "After 5x nav" to "Baseline"
        4. Sort by "Size Delta" (largest growth first)
        5. Expand objects to find:
           - Orphaned GSAP tweens (Timeline, Tween objects)
           - Unreleased ScrollTriggers
           - Event listeners not removed
        ```

        **Step 6: Verify Cleanup Code**
        ```
        If memory leak found, check:
        - [ ] timeline.kill() called on route change?
        - [ ] ScrollTrigger.getAll().forEach(t => t.kill())?
        - [ ] gsap.context().revert() used?
        - [ ] Event listeners removed (removeEventListener)?
        - [ ] Refs cleared in React cleanup (useEffect return)?
        ```

        **Acceptable Results:**
        - ✅ PASS: <5MB heap growth after 5 navigations
        - ✅ PASS: <10 detached DOM nodes
        - ✅ PASS: Listener count same as baseline
        - ❌ FAIL: >10MB growth → Investigate with Step 5
        - ❌ FAIL: >20 detached nodes → Cleanup code missing

        **Reference:** Deep-Research 5.4, performance.md checklist

        **❌ WRONG - Cursor Follow (Tween Accumulation):**
        ```javascript
        // Creates NEW tween on EVERY mousemove (60 events/sec = 60 tweens/sec!)
        window.addEventListener('mousemove', (e) => {
          gsap.to('.cursor', {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3
          });
        });
        // Problem: 1000s of tweens created → memory leak → GC pressure
        // Memory: Grows 10-50MB after minutes of use (browser tab slows down)
        ```

        **✅ CORRECT - Use quickTo (Reuses Same Tween):**
        ```javascript
        // Creates TWO tweens ONCE, reuses them forever
        const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.3, ease: 'power3' });
        const yTo = gsap.quickTo('.cursor', 'y', { duration: 0.3, ease: 'power3' });

        window.addEventListener('mousemove', (e) => {
          xTo(e.clientX);  // Updates existing tween target
          yTo(e.clientY);  // Updates existing tween target
        });
        // Memory: Constant ~1KB (2 tweens only)
        // Performance: ~60fps smooth, zero GC pressure
        ```

        **✅ ALTERNATIVE - Use overwrite: 'auto':**
        ```javascript
        // Kills previous conflicting tween automatically
        window.addEventListener('mousemove', (e) => {
          gsap.to('.cursor', {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            overwrite: 'auto'  // Kills old x/y tweens before creating new ones
          });
        });
        // Memory: Stays low (old tweens killed)
        // Note: quickTo is FASTER (reuses vs recreates), prefer quickTo
        ```

        **When to Use Each:**
        - **quickTo:** High-frequency updates (mousemove, scroll) - PREFERRED
        - **overwrite: 'auto':** Interactive animations (hover, click)
        - **NEVER without cleanup:** Creates thousands of orphaned tweens

        **Why quickTo Wins:**
        - **Memory:** 2 tweens total (vs 1000s)
        - **Performance:** Reuses internal tween object (faster)
        - **GC:** Zero garbage collection pressure
        - **Smoothness:** Perfectly interpolates between rapidly changing targets

        **Reference:** Deep-Research 5.4, performance.md checklist, Archon gsap.com/docs/v3/GSAP/gsap.quickTo()

        ---

        **5.5: 60fps Optimization (CRITICAL - MANDATORY)**
        **Benchmark:** 60fps sustained @ 4x CPU throttle

        **Detailed 60fps Testing Protocol:**

        **Step 1: Enable FPS Meter**
        ```
        1. Open Chrome DevTools (F12)
        2. Press Cmd/Ctrl + Shift + P (Command Palette)
        3. Type "Show frames per second"
        4. Select "Show frames per second (FPS) meter"
        5. FPS counter appears in top-left corner
        ```

        **Step 2: Baseline Test (No Throttling)**
        ```
        1. Refresh page
        2. Trigger animation
        3. Observe FPS meter: Should show 60fps (green)
        4. Watch for drops: Any red spikes? (frame drops)
        5. ✅ PASS: Solid 60fps, no red spikes
        6. ❌ FAIL: Drops below 60fps → Optimize before proceeding
        ```

        **Step 3: Mid-Range Device Test (4x CPU Throttle) - MANDATORY**
        ```
        1. DevTools → Performance tab
        2. Click gear icon (⚙️) → CPU: "4x slowdown"
        3. Refresh page
        4. Trigger animation
        5. Observe FPS meter: Must maintain 60fps
        6. ✅ PASS: 60fps sustained throughout (REQUIRED FOR PRODUCTION)
        7. ❌ FAIL: Drops below 60fps → BLOCKING ISSUE
        ```

        **Step 4: Low-End Device Test (6x CPU Throttle) - Optional**
        ```
        1. CPU: "6x slowdown"
        2. Trigger animation
        3. Target: 30fps minimum acceptable
        4. ✅ PASS: ≥30fps (low-end devices can run it)
        5. ⚠️ WARN: <30fps (consider simplification for low-end)
        ```

        **Step 5: Performance Profile Analysis**
        ```
        1. DevTools → Performance tab
        2. Click Record (●)
        3. Trigger animation
        4. Wait for animation to complete
        5. Click Stop (■)
        6. Analyze flamegraph:
           - Scripting: <8ms per frame? ✅
           - Rendering: <4ms per frame? ✅
           - Painting: <4ms per frame? ✅
           - Long tasks (red): Should be 0
        7. If ANY frame >16ms → Identify bottleneck
        ```

        **Step 6: Network Throttling Test (If Content Loads)**
        ```
        1. DevTools → Network tab
        2. Throttling: "Slow 3G"
        3. Refresh page
        4. Verify: Content loads before animation?
        5. Verify: Animation doesn't start until critical content ready?
        6. Use ScrollTrigger.refresh() after images load
        ```

        **Common Failure Modes:**
        - **FPS drops to 30fps:** Too many simultaneous tweens → Reduce/stagger
        - **Red spikes every few frames:** Garbage collection → Check memory leaks
        - **Scripting >8ms:** Heavy onUpdate callbacks → Precompute or simplify
        - **Rendering >4ms:** Large blur/filters → Reduce complexity or GPU layers
        - **Paint >4ms:** Too many layers → Limit will-change usage

        **MANDATORY:** Cannot ship without 60fps @ 4x throttle ✅

        **Reference:** Deep-Research 5.5, performance.md checklist

        **Layer Management (Advanced):**

        **Understanding Compositing Layers:**
        - Browser creates GPU layers for elements with certain CSS properties
        - Each layer uses GPU memory (~1-5MB depending on size)
        - Too many layers = worse performance (memory + composition overhead)
        - Goal: <10 layers total for smooth 60fps

        **What Creates Layers:**
        - `will-change: transform` or `will-change: opacity`
        - `transform: translateZ(0)` or `transform: translate3d(0,0,0)` (hack)
        - Elements with `position: fixed` or `position: sticky` (sometimes)
        - Elements being animated with GSAP (temporary layer)
        - Video, canvas, iframe elements (always)

        **Check Layer Count:**
        ```
        Chrome DevTools → More tools → Layers panel
        1. View layer tree
        2. Count composited layers (should be <10)
        3. Click layers to see WHY they're composited
        4. Look for "Compositing reasons" property
        ```

        **❌ TOO MANY LAYERS (Performance Killer):**
        ```javascript
        // Creating 100 layers (BAD!)
        document.querySelectorAll('.card').forEach(card => {
          gsap.to(card, {
            scrollTrigger: { scrub: true },
            y: 50,
            willChange: 'transform'  // 100 permanent layers = slow!
          });
        });
        // Problem: GPU memory exhausted, composition overhead every frame
        ```

        **✅ CORRECT - Limited Layers:**
        ```javascript
        // Only 1 layer (container)
        gsap.to('.cards-container', {
          scrollTrigger: { scrub: true },
          y: 50
        });
        // All cards move together as ONE layer (children transform with parent)
        ```

        **Hiding Background Layers (Performance Win):**
        ```javascript
        // When fullscreen overlay opens
        const openOverlay = () => {
          gsap.to('.overlay', { opacity: 1, duration: 0.3 });

          // Hide background content (stops GPU rendering it)
          document.querySelector('.page-content').style.display = 'none';
          // OR use visibility: hidden (also stops rendering)
          // document.querySelector('.page-content').style.visibility = 'hidden';
        };
        ```

        **autoAlpha Optimization:**
        ```javascript
        // ✅ CORRECT - autoAlpha sets visibility: hidden at opacity: 0
        gsap.to('.element', { autoAlpha: 0 });
        // Browser stops rendering element entirely (performance win!)

        // ❌ LESS EFFICIENT - opacity: 0 still renders (invisible but calculated)
        gsap.to('.element', { opacity: 0 });
        // Element still takes GPU memory/rendering time
        ```

        **Layer Optimization Strategies:**
        1. **Group animations:** Animate container, not 100 children
        2. **Remove will-change:** After animation completes
        3. **Use autoAlpha:** Instead of opacity for hidden elements
        4. **Hide backgrounds:** When fullscreen overlays open
        5. **Monitor layer count:** Keep <10 for 60fps

        **Reference:** Deep-Research 5.5, Chrome DevTools Layers documentation

        **Optimization Techniques:**
        - Reduce simultaneous tweens (<100 visible elements)
        - Use `autoAlpha` instead of `opacity` (hides at 0)
        - For >50 particles: Use canvas instead of DOM
        - Hide background layers behind full-screen overlays (display: none)

        **MANDATORY:** Cannot ship without 60fps @ 4x throttle

        ---

        **5.6: WebGL/Canvas Escalation (LOW Priority)**
        **When to Escalate:**
        - >1000 moving objects (starfield, particles)
        - Shader effects (distortions, custom filters)
        - Large video manipulation
        - 3D scenes (use Three.js)

        **Stick with DOM if:** <100 elements, typical UI, ScrollTrigger-driven
      </performance_standards_5_1_to_5_6>
