# 7. Technical Implementation Patterns (Sequential Animations, Scroll Triggers, Typewriter Effects)

**Prerequisites:** Sections 5 and 6 (architecture patterns, performance
best practices).

Having covered design and architecture, let's get into **specific
implementation patterns** for common animation scenarios in premium UIs:
orchestrating sequential animations, scroll-triggered choreography,
typewriter text effects, and state-driven conditional animations. We'll
illustrate how these are implemented in a robust, accessible way,
referencing best-in-class techniques.

-   **Sequential Choreography (Chained Animations):** Often we want a
    series of animations to play in order -- for example, a multi-step
    onboarding or a complex UI reaction where multiple elements animate
    one after another. As discussed, a **timeline** tool (like GSAP) can
    handle this elegantly. Without an external library, one pattern is
    to use **Promise chaining with** `Animation.finish` **events**:

```{=html}
<!-- -->
```
    // Example: reveal sections one by one
    async function playSequence() {
      await section1.animate({ opacity: [0,1], transform: ['translateY(20px)', 'translateY(0)']},
                             { duration: 300, easing: 'ease-out' }).finished;
      await section2.animate({ opacity: [0,1], transform: ['translateY(20px)', 'translateY(0)']},
                             { duration: 300, easing: 'ease-out' }).finished;
      await section3.animate({ opacity: [0,1], transform: ['translateY(20px)', 'translateY(0)']},
                             { duration: 300, easing: 'ease-out' }).finished;
    }
    playSequence();

This uses the Web Animations API (WAAPI) -- which returns a `finished`
promise when the animation completes. By `await`ing each, we ensure
sequence. This is production-friendly as it avoids timeouts and is easy
to modify order/duration. It's also interruptible (if needed, you could
`playSequence.abort()` by keeping references). If using React, you might
integrate this in a `useEffect` that triggers when a certain state
becomes active (ensuring that DOM refs for sections exist). GSAP or
Framer Motion's `AnimatePresence` can achieve similar sequencing with
less code, but understanding this vanilla pattern is useful. *Always
ensure elements have their final state in CSS as well*, so if someone
skips (or `prefers-reduced-motion`), they still appear.

**Staggering**: A variant of sequential is staggering (overlap
sequences). CSS can do this with transition delays on child elements, or
JavaScript with short setTimeout offsets in a loop. E.g.:

    container.querySelectorAll('.item').forEach((el, i) => {
      el.style.transitionDelay = `${i * 50}ms`;
      el.classList.add('enter'); // CSS for .item.enter { opacity:1; transform: none; transition: transform .3s ease, opacity .3s ease; }
    });

This will cause items to animate one by one 50ms apart. Libraries
provide utilities (GSAP's stagger, Framer Motion's staggerChildren
prop). The principle: slight delays reduce cognitive load and create a
pleasing
cascade[\[26\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Sequence%20%26%20stagger).

-   **Scroll-Triggered Animations:** A hallmark of many premium sites
    (Stripe, Vercel marketing pages) is scroll-driven effects --
    sections that animate as you scroll into them, or continuous
    parallax. There are two approaches:
-   **Discrete triggers** -- animate when element enters viewport.
-   **Continuous scroll link** -- animation progress tied to scroll
    position.

*Discrete Trigger Example:* Use **IntersectionObserver** to detect when
an element (say `.feature-panel`) intersects. This avoids heavy scroll
event loops and is performant and easy.

    const observer = new IntersectionObserver(entries => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.1 });
    document.querySelectorAll('.feature-panel').forEach(panel => {
      // initial state set via CSS (e.g. opacity:0, transform: translateY(50px))
      observer.observe(panel);
    });

Each panel, when \~10% visible, gets the `in-view` class which triggers
a CSS transition (to opacity:1, translateY(0) perhaps). We unobserve to
fire only once (so it doesn't re-trigger on scroll up/down). This
pattern is used widely -- it's straightforward and respects performance
(observers are efficient). Ensure to add a `prefers-reduced-motion`
media query so if motion is reduced, perhaps you *don't* translateY
initially at all (so content is visible even without
animation)[\[84\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=).

*Continuous Scroll Example:* Suppose a progress bar that fills as you
scroll or a graphic that moves. With modern CSS, **ScrollTimeline** can
do this in some
browsers[\[71\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%3E%20The%20CSS%20animation,as%20users%20navigate%20a%20webpage).
For broad support, you can do:

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      progressBar.style.transform = `scaleX(${progress})`;
    }, { passive: true });

This will update the bar width continuously. We throttle with passive
event (and possibly RAF throttle as earlier). This simple approach is
fine if it's a minor calc. For more complex synced animations (multiple
elements responding to scroll), libraries like ScrollMagic (older) or
GSAP's ScrollTrigger simplify by abstracting the calc and allowing
pinning etc. But one must be cautious: heavy scroll-linked DOM changes
can degrade scroll smoothness. The future is CSS
`animation-timeline: scroll()` which will do this off main
thread[\[71\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%3E%20The%20CSS%20animation,as%20users%20navigate%20a%20webpage),
but as of 2025 it's emerging tech (Chrome has it behind flags perhaps).

Vercel's and Stripe's approach for storytelling often is to treat scroll
as triggers for specific points ("at section X, trigger animation Y").
This is largely discrete triggers repeated. For instance, Stripe.dev's
infinite footer draws text on every scroll event with interpolation for
smoothness[\[70\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=invert%20it%20by%20creating%20a,never%20reach%20the%20end%20of)
-- they likely used a canvas or efficient text rendering to avoid
reflow, and only redraw the new bits (thus not bogging down).

-   **Typewriter Text Effect (with Accessibility):** The "typewriter"
    effect (text appearing one character at a time) is popular in hero
    sections (e.g., "We build \_ software", cycling words). A naive
    implementation would update innerHTML one char at a time with
    `setInterval`. But that often breaks screen readers (which might
    read partial words or nothing if the element is being updated
    constantly). A **production-ready, accessible approach**:

-   Always provide the full text for assistive tech. Either by keeping
    the full text in the DOM but hidden, or via `aria-label`. A known
    solution is: have an element for the animated text and a separate
    element that is visually hidden containing the full
    text[\[55\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=After%20reading%20some%20articles%2C%20I,label%60%20to%20the%20%60h1%60%20element).
    Or simpler, use `aria-label` on the container to the full static
    sentence[\[55\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=After%20reading%20some%20articles%2C%20I,label%60%20to%20the%20%60h1%60%20element).

-   Use JavaScript to progressively reveal letters *visually*, but don't
    rely on that for the content presence. One method: put each letter
    in a `<span>` with a class that transitions opacity. But simpler:
    CSS trick:

```{=html}
<!-- -->
```
-   .typewriter-text {
          /* assume the text is in the element fully */
          color: transparent;
          position: relative;
        }
        .typewriter-text::after {
          content: attr(data-text); /* a duplicate of the text via data attr */
          color: #fff;
          /* Use monospace font or ensure same spacing if using content like this */
          /* mask to show one char at a time: */
          width: 0;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #fff;
          animation: typing 4s steps(var(--chars)) 1s forwards;
        }
        @keyframes typing {
          to { width: 100%; }
        }

    This CSS approach (using `steps()` timing function) can create a
    typing effect with pure CSS if the text is in a data attribute and
    `--chars` is the number of
    characters[\[95\]](https://www.sitepoint.com/css-typewriter-effect/#:~:text=How%20to%20Create%20a%20CSS,function).
    However, pure CSS solutions often aren't easily dynamic or
    accessible. A JS approach:

        const txt = "Hello world";
        const container = document.getElementById('type');
        container.setAttribute('aria-label', txt);
        container.textContent = ""; // we'll fill this
        let i = 0;
        function typeNext() {
          // If user prefers no motion, just write full text and stop
          if (prefersReducedMotion) {
            container.textContent = txt;
            return;
          }
          container.textContent = txt.slice(0, i);
          if (i < txt.length) {
            i++;
            setTimeout(typeNext, 100); // 100ms per char, or vary for effect
          }
        }
        typeNext();

    This way, screen reader will read the aria-label "Hello world" as
    one chunk, regardless of the visual typing
    effect[\[96\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=return%20%28%20%3C%3E%20%3Ch1%20aria,hidden%3D%22true%22%3EPause%20the%20animation%3C%2Fbutton%3E%20%3C%2F%3E).
    We also check `prefersReducedMotion` -- if true, we skip animation
    and instantly show full text (so users who don't want motion aren't
    forced to watch letters
    appear)[\[55\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=After%20reading%20some%20articles%2C%20I,label%60%20to%20the%20%60h1%60%20element)[\[97\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=element%22%3B%20second%2C%20by%20using%20%60aria,be%20used%20when%20only%20necessary).

    Additionally, consider adding a blinking cursor for style (`::after`
    content "\|" toggling opacity). If you do, hide it from assistive
    tech (e.g., `aria-hidden="true"` on that pseudo-element using
    `aria-hidden` on wrapper for the cursor span). The blog example we
    saw ultimately solved a tricky case of constantly changing text by
    using `aria-label` on the heading with all
    variants[\[55\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=After%20reading%20some%20articles%2C%20I,label%60%20to%20the%20%60h1%60%20element)
    -- that's robust.

    **Error handling**: If using JS typing, ensure to clearTimeout if
    the component unmounts (to avoid memory leaks or attempts to modify
    a null element). Also guard double triggers (don't start two
    intervals).

```{=html}
<!-- -->
```
-   **State-Driven Rendering & Animation:** This refers to using
    framework state to trigger animations. For example, in React:

```{=html}
<!-- -->
```
-   const [open, setOpen] = useState(false);
        return (
          <div className={`modal ${open ? 'modal-open' : ''}`}>
            ...modal content...
          </div>
          <button onClick={()=> setOpen(true)}>Open</button>
        );

    CSS:

        .modal { opacity: 0; transform: translateY(-20px); transition: opacity .3s, transform .3s; }
        .modal.modal-open { opacity: 1; transform: translateY(0); }

    Here React state ensures the class toggles. This simple pattern is
    effective for many UI bits. However, when the element is
    conditionally rendered (unmounted when closed), you need an extra
    mechanism (like React Transition Group or Framer Motion's
    `<AnimatePresence>` to handle exit animation). Many frameworks now
    have built-in solutions (Vue has \<transition\>, Svelte has
    transition functions). The pattern is: **tie animations to state
    changes**. This overlaps with FSM concept. A practical tip:
    sometimes you want to trigger an animation on a state change that
    isn't just mount/unmount. For example, highlight an item when it's
    updated. You can use a key on the element or a useEffect:

        useEffect(() => {
          if (updated) {
            itemRef.current.classList.add('flash');
            setTimeout(() => itemRef.current.classList.remove('flash'), 500);
          }
        }, [updated]);

    But better, use CSS animations via adding class and listening for
    animationend to remove the class. This way, if the event happens
    again mid-animation, you can restart it by resetting the class
    (force reflow technique or using different animation name
    alternating).

Another advanced pattern: **spring physics via libraries** (like React
Spring or Popmotion). Those abstract the animation into state
transitions as well. E.g. setting a spring value, and the library
animates to it. That's more about the algorithm than architecture, but
noteworthy: Linear's slick feel often comes from using springy,
physics-based motion (for instance, menu opening might use a
critically-damped spring for natural feeling). Those libraries ensure
continuous, interruptible animation -- if state changes again, the
spring simply retargets.

-   **Error Handling & Edge Cases in Patterns:**

-   For scroll triggers, ensure to unobserve and handle the case of
    quick scroll past (maybe trigger immediately if the user scrolls
    fast and misses threshold).

-   For sequential, ensure to catch errors (promise chain will stop if
    an element is missing etc., so maybe wrap in try/catch).

-   Typewriter: handle if user navigates away mid-typing (clearTimeout).

-   Always test with `prefers-reduced-motion: reduce` by emulating it to
    see if animations truly stop or simplify as expected.

-   If an animation is crucial (e.g. swipe to delete -- ensure there's a
    non-animation fallback for input, like a Delete button for keyboard
    users or in case the swipe animation fails).

-   **Real Production Examples:**

-   **Linear's list reorder** (though we don't have their code, likely
    uses a FLIP approach: on drag end, they animate the moved item to
    its new position using transforms rather than reflowing instantly,
    to achieve a smooth reordering).

-   **Stripe's mobile menu**: Perhaps uses state toggle with CSS
    transitions as above, but with additional subtle animations inside
    (each link fading in with stagger).

-   **Vercel's product tour**: used state machine for slide index and
    manually orchestrated timeline with `transitionEnd` and
    delays[\[67\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear)
    -- we described that approach which is basically a custom sequence.

-   **Figma's overlay animations**: Possibly uses React Spring for
    smooth opening of panels (the spring ensures if you quick-toggle a
    panel it doesn't glitch but smoothly reverses).

-   **Typewriter on CodeSandbox homepage**: They had a typewriter effect
    of changing words, implemented by cycling through an array of words
    with a custom hook, ensuring full words are announced to SRs
    (similar solution: `aria-label` and `aria-live` polite for updates).

By mastering these technical patterns -- sequential animation control,
scroll-based activation, accessible text effects, and state-synced
animations -- you equip yourself to implement practically any animation
you can dream up in a maintainable way. These patterns are proven in
production at scale: they balance elegance and robustness. Next, we'll
draw inspiration from outside web (film, games, music, etc.) to further
refine our approach, then proceed to real case studies and advanced
decision-making frameworks.
