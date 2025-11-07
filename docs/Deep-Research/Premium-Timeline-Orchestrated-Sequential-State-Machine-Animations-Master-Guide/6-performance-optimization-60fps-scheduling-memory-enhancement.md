# 6. Performance & Optimization (60fps, Scheduling, Memory, Enhancement)

**Prerequisites:** Sections 1, 2, 5 (performance importance, perception
thresholds, architecture basics).

No matter how beautiful an animation is, if it stutters or janks, the
premium feel is lost. Performance is paramount: *60fps or bust*. In this
section, we cover how top companies optimize animations for speed and
efficiency, handle device constraints, and ensure animations don't
degrade the user experience (or accessibility). Key themes: **efficient
rendering (GPU vs CPU), proper scheduling (RAF vs setTimeout),
minimizing layout thrash, memory management, progressive enhancement,
and respecting user preferences**.

-   **Understanding the Rendering Pipeline:** Modern browsers break down
    rendering into steps -- style calculation, layout (reflow), paint,
    and composite. Animations that trigger heavy steps (layout and
    paint) each frame are likely to jank. Premium UIs stick to
    **compositor-only properties** for animations whenever possible.
    These are transforms (translate, scale, rotate), opacity, and
    sometimes filters -- properties the browser can animate on the GPU
    without recalculating
    layout[\[12\]](http://www.zigpoll.com/content/how-can-the-frontend-developer-optimize-the-ui-animations-to-maintain-smooth-performance-without-compromising-visual-quality-on-both-desktop-and-mobile-game-interfaces#:~:text=Zigpoll%20www,Use%20easing%20functions)[\[74\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Leverage%20Hardware%20Acceleration).
    For example, moving an element with `transform: translateX` is much
    faster than changing its `left` property (which triggers layout for
    that and possibly other elements). Likewise, fading via opacity
    doesn't repaint the whole page, it just updates that element's
    composited layer. *Rule:* **Use transform and opacity for motion;
    avoid animating layout-affecting properties** (width, height, top,
    left, margin,
    etc.)[\[75\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Avoid%20Frequent%20Layout%20Changes)[\[76\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Opt%20for%20Transformations%20Over%20Position,Changes).
    If you need to change size, consider transforming scale (if visual
    quality permits) or using the FLIP technique (Compute the final
    layout, then animate via transforms from the old position to new).
    By reducing work each frame, you increase likelihood of hitting 16ms
    frame budget.

-   **Use of GPU and Hardware Acceleration:** As Gapsy Studio notes,
    modern devices have GPUs for smooth images -- leverage
    them[\[74\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Leverage%20Hardware%20Acceleration).
    On the web, this often means ensuring an element is on its own layer
    (e.g. by using `will-change: transform` or starting with a transform
    so the browser promotes it to a GPU layer) so that its movement
    doesn't require re-painting the background. However, overusing
    `will-change` can allocate too many GPU resources, so apply it
    selectively (e.g. when an animation is about to start). For complex
    animations, sometimes canvases or WebGL are used to fully utilize
    GPU power -- Stripe's globe is an example where WebGL (GPU) was
    needed for
    performance[\[77\]](https://stripe.com/blog/globe#:~:text=As%20visual%20designers%20and%20software,motion%20requires%C2%A050%2B%20lines%20of%20code)[\[14\]](https://stripe.com/blog/globe#:~:text=If%20we%20had%20known%20precisely,3D%20graphics%20development%20substantially%20easier).
    But for typical UI elements, sticking to CSS transforms gets you GPU
    benefits without custom rendering code. **Tip:** in devtools, check
    the "Layers" or use "Paint Flashing" to see if your animation is
    causing repaints. The best scenario is you see the element on a
    separate layer and only that layer is updated.

-   **Scheduling with requestAnimationFrame (RAF):** JavaScript-driven
    animations should use `requestAnimationFrame` for timing.
    `requestAnimationFrame` syncs updates to the browser's refresh
    cycle. If you use `setTimeout` or intervals, you risk updates
    happening mid-frame or getting out of sync, causing stutters
    (especially under load). RAF calls you *just before* the next paint
    -- perfect for applying DOM changes for that
    frame[\[12\]](http://www.zigpoll.com/content/how-can-the-frontend-developer-optimize-the-ui-animations-to-maintain-smooth-performance-without-compromising-visual-quality-on-both-desktop-and-mobile-game-interfaces#:~:text=Zigpoll%20www,Use%20easing%20functions).
    For example, if implementing a custom scroll handler or physics
    animation, use `requestAnimationFrame(loop)` pattern. Also, avoid
    long JS blocks -- if you have to do a heavier calc, consider
    splitting it across frames (cooperative scheduling) or using Web
    Workers to offload computations so the main thread can focus on
    animation. Vercel's Frame.io case prioritizes offloading tasks from
    the main thread to avoid jank on
    animations[\[78\]\[79\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=To%20further%20enhance%20the%20user,and%20maintaining%20that%20crucial%20responsiveness).

-   **Throttle and Debounce:** Not all events need to trigger an
    animation logic every single time. For instance, scroll events can
    fire rapidly; you might use a RAF loop to throttle updates. A common
    pattern:

```{=html}
<!-- -->
```
-   let ticking = false;
        window.addEventListener('scroll', () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              ticking = false;
              handleScrollAnimations(); 
            });
            ticking = true;
          }
        }, { passive: true });

    This ensures `handleScrollAnimations()` runs at most 60fps, not
    200fps on a fast
    scroll[\[80\]](https://www.gosquared.com/blog/optimising-60fps-everywhere-in-javascript#:~:text=Optimising%20for%2060fps%20everywhere%20,milliseconds%20to%20accomplish%20all%20these).
    Always add `{ passive: true }` to scroll/touch listeners to hint to
    browser that you won't call `preventDefault` -- it can improve
    performance by letting scrolling happen smoothly.

```{=html}
<!-- -->
```
-   **Frame Budget Monitoring:** Some teams integrate performance
    monitoring for animations. For example, Rive and Lottie tools
    provide FPS counters in
    previews[\[81\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=health%2C%20and%20gives%20you%20clear,suggestions%20on%20what%20to%20improve)[\[82\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=For%20testing%20animations%20directly%2C%20we,for%20animation%20checks%20and%20optimization).
    At runtime, you can use the DevTools Performance timeline to see
    frame times. If you consistently see frames \>16ms, profile where
    the time is spent. Maybe the easing function math is heavy
    (unlikely) or more commonly, too many DOM elements animating or
    large images. A pro trick: **simplify visuals while animating**.
    E.g., if animating a blur or complex filter, consider turning it off
    during motion and reapply after, because CSS filters can be
    expensive to animate on large areas. Another trick: use
    `document.visibilityState` -- pause animations in inactive tabs to
    save CPU (browsers often throttle these anyway, but if you run
    custom loops, check visibility and `cancelAnimationFrame` if
    hidden).

-   **Memory and Garbage:** Animations can create a lot of objects
    (especially JS-based ones). Frequent creation/destruction (like
    creating thousands of DOM nodes in a particle animation) can trigger
    garbage collection, causing jank. Minimize unnecessary DOM during
    animations. Reuse elements or use canvas for many objects. Also
    clean up listeners or intervals on component unmount to avoid leaks
    (in React, use `useEffect` cleanup to cancel timeouts/RAF, in GSAP,
    kill the timeline). Memory leaks can degrade performance over time
    (as the JS heap grows, GC pauses can increase). So a
    "production-ready" animation code includes cleanup -- e.g., remove
    the IntersectionObserver once the reveal animation is done for an
    element, free up that
    memory[\[83\]](https://cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=Accessible%20Typewriter%20Animations%3A%20Using%20aria,This%20is%20called).

-   **Progressive Enhancement & Fallbacks:** Not all users have powerful
    devices or even support for certain features. A premium approach is
    to implement animations in a progressively enhanced way:

-   Check for browser capabilities: e.g., if using the new
    `CSS.animationTimeline` or `view-transition`, have a fallback for
    browsers that lack it (perhaps include a polyfill or just no
    animation fallback).

-   Ensure the UI is functional without animation. For example, if
    content loads in via animation, the content should still appear even
    if animations are disabled or not supported. This usually means
    avoid logic like "on animationend, display content"; instead, have
    content in DOM and animation just changes opacity from 0 to 1. If
    animation doesn't run, content is still there (maybe instantly
    visible or via `noscript` tag content).

-   Provide sensible fallbacks: e.g., if WebGL fails (Stripe's globe),
    maybe show a static image of the globe rather than nothing.

-   Use **prefers-reduced-motion**: It's both an accessibility and
    performance concern (on low-end devices, reducing motion might
    improve overall perf). If `prefers-reduced-motion: reduce` is set,
    your CSS and scripts should either greatly simplify or disable
    non-essential
    animations[\[84\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=)[\[85\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=Ultimate%20Guide%20to%20Web%20Animation,or%20reducing%20the%20intensity).
    For instance, heavy parallax effects should be turned off (just show
    static image), smooth scrolling might be disabled, etc. Many
    frameworks include this -- e.g., Framer Motion has a flag to disable
    all animations if reduce-motion is on. At minimum, add
    `@media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }`
    or specific rules to kill long
    animations[\[84\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=).
    This ensures users prone to motion sickness or who just prefer no
    fancy stuff get a simpler, instant UI.

-   **WCAG compliance:** Beyond reduced motion, consider flashing or
    blinking content -- avoid high-frequency flashes (over 3 per second)
    to prevent seizure triggers (WCAG 2.3.1). Most UI animations won't
    hit that unless you do a crazy blink effect, but be mindful.

-   **Performance Budgeting:** Some teams adopt budgets: e.g., no
    animation should take more than X ms of main thread, or only Y% CPU
    usage for animations. Frame.io's team literally analyzes screen
    recordings frame-by-frame to catch tiny frame
    drops[\[86\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=The%20team%20at%20Frame,bottlenecks%20and%20address%20them%20directly)[\[87\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=to%20analyze%20and%20improve%20the,bottlenecks%20and%20address%20them%20directly).
    That's an extreme, but it shows the level of commitment to fluid UI.
    Setting performance goals (like "animations on low-end Android must
    still achieve \~30fps minimum and not trigger forced layout more
    than N times") helps drive implementation decisions (maybe you
    simplify some animations on mobile). Tools like Lighthouse (in
    Chrome) will flag "large layout shifts" or long tasks -- keep an eye
    on those. Animations can affect **Core Web Vitals**: e.g., poorly
    synchronized animations during page load can cause Cumulative Layout
    Shift
    (CLS)[\[88\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=FPS%20Frames%20per%20second%20,animations%20feel%20fast%20and%20professional)[\[89\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=CLS%20,Stability).
    Make sure if elements animate in, they don't shove content
    unpredictably (use reserved space or animate within container
    bounds). First Input Delay (FID) also relevant -- don't block input
    with long JS animations
    loading[\[90\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=FID%20,Responsiveness).
    Also **Time to Interactive (TTI)** -- ensure your intro animations
    don't prevent the user from interacting (some sites wrongly disable
    pointer events during a fancy intro, causing
    frustration)[\[91\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=TTI%20,Readiness)[\[92\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=pages%20look%20finished%20on%20the,are%20still%20getting%20into%20place).
    Ideally, animations run without stopping the user from doing stuff
    unless there's a modal context.

-   **Optimization Techniques:** A few concrete techniques:

-   **Virtualize or cull offscreen animated elements:** If you have a
    long list with animated items, consider only animating those in view
    (use IntersectionObserver to start/stop animations when item
    enters/leaves viewport).

-   **Cache calculations:** If an animation needs some expensive calc
    (path, layout), do it once. E.g., for a drag animation, compute the
    path bezier beforehand, then just progress along it.

-   **Use CSS transitions/animations when possible:** Letting the
    browser handle the interpolation in C++ can be more efficient than
    running JS each frame -- e.g., toggling a class with
    `transition: transform 0.3s` is often smoother than manual RAF
    updating style (unless you need dynamic control).

-   **Avoid unnecessary opacity layers:** While we push GPU layers, note
    that each new layer is memory. Don't blindly add `will-change` to
    hundreds of elements. Use it on key elements, and remove (set to
    auto) when done if possible. Chrome's devtools "Layers" tab can show
    how many layers you have -- a very high number can hurt performance
    due to composite overhead.

-   **Test on real devices:** Emulators only go so far. A Linear
    engineer likely tests animations on a typical user machine (perhaps
    even low-tier) to ensure they hold up. As Gapsy said, what runs well
    on a MacBook Pro might lag on a mid-range
    phone[\[93\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Test%20on%20Real%20Devices).
    So gather a "profile" on various devices. You might adjust things
    like disable shadows on mobile (shadows can cost on low GPU) or use
    simpler animations if device detection indicates low performance.
    *Progressive enhancement* extends to performance adaptation.

-   **Accessibility and Performance Synergy:** Often, making something
    accessible (e.g. reduced motion, focusable) also improves
    performance (less motion, less scripting). Stripe Checkout's team
    noted they obsess over performance even on
    micro-animations[\[94\]](https://stripe.com/payments/checkout#:~:text=Stripe%20Checkout%20,of%20Stripe%20engineers%20and).
    Good performance is part of accessibility (people with cognitive
    disabilities or just anyone -- no one likes laggy UI). So treat
    60fps as not just a tech goal but a user experience necessity -- an
    app that janks violates the user\'s mental model of immediate
    feedback and can cause stress (imagine a payment confirmation
    animation stuttering -- user might worry something's wrong).

To wrap up: **profile, optimize, and test**. Premium experiences feel
effortless because teams put massive effort into optimization behind the
scenes. As an AI model or developer, internalize these patterns:
transform/opacity
good[\[75\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Avoid%20Frequent%20Layout%20Changes),
layout thrash bad, use the right API (RAF) at the right time, measure
and respect real-world constraints. With that, we can now look at
concrete technical patterns and code for implementing many of these
concepts (bringing together the architecture and performance into
practice).
