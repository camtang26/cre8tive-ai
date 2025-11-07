# 5. Animation Architecture Patterns (FSMs, State Machines, Timeline Orchestration)

**Prerequisites:** Sections 1--4 (conceptual foundations, design
principles).

Implementing complex animations in production requires more than ad-hoc
code. Premium companies use robust **animation architecture patterns**
to manage complexity. Two key patterns are **finite state machines
(FSMs) for state-driven animations** and **timeline orchestration for
sequential or coordinated animations**. These ensure animations run in
the right order, respond to user input correctly, and are easier to
maintain.

-   **Finite State Machines for UI:** A **finite state machine** is a
    mathematical model where a component can be in one of a fixed set of
    states, and transitions (usually triggered by events) move it
    between states. In UI terms, think of states like "idle", "hovered",
    "pressed", "disabled" for a button, or "collapsed vs expanded" for a
    panel. Using an FSM architecture means you explicitly model these
    states and how you can get from one to another. This is incredibly
    useful for animation because you can attach animations to state
    transitions. For example, *entering the "hovered" state plays a
    fade-in highlight animation; exiting it plays a fade-out*. Tools
    like **XState** (a JS/TS state machine library) are used by some
    teams to coordinate animations -- it ensures, for instance, that if
    an animation is mid-run and the user triggers a new state, the
    correct transition animation (perhaps interrupt or reverse) happens
    reliably[\[58\]](https://xstatebyexample.com/tip/control-a-css-animation-with-xstate/#:~:text=Control%20a%20CSS%20animation%20with,how%20XState%20can%20help)[\[59\]](https://css-tricks.com/coordinating-svelte-animations-with-xstate/#:~:text=Coordinating%20Svelte%20Animations%20With%20XState,unique%20in%20the%20JavaScript%20ecosystem).
    Designers using Rive create state machine diagrams visually: e.g. an
    idle timeline, a hover timeline, and transitions triggered by a
    boolean "isHovered"
    input[\[60\]](https://rive.app/docs/editor/state-machine/state-machine#:~:text=Inputs%20%20and%20%2018,looks%20like%20when%20it%E2%80%99s%20been)[\[61\]](https://rive.app/docs/editor/state-machine/state-machine#:~:text=Inputs%20are%20a%20legacy%20tool,inputs%20at%20runtime%20and%20define).
    This decouples the *design* of animation states from the runtime
    logic. In production React apps, it's common to implement a simpler
    FSM manually using component state or context: e.g. a "mode"
    variable that can be \"closed\", \"opening\", \"open\", \"closing\"
    for a modal. The component renders based on state (open vs closed
    classes), and event handlers dispatch state changes (click backdrop
    -\> go to "closing" state, which triggers an animation, and an
    onAnimationEnd or timeout then sets state to "closed"). The benefit
    of an FSM approach is **predictability** -- each state combination
    can be handled, avoiding inconsistent intermediate visuals. It
    matches how game UIs are built (game engines have used state
    machines for character animations for
    decades[\[62\]](https://docs.unity3d.com/6000.2/Documentation/Manual/AnimationStateMachines.html#:~:text=Animation%20State%20Machine%20,%C2%B7%20State%20Machine%20Transitions)).
    When complexity grows (like multiple sub-states), a hierarchy of
    state machines or statecharts can be used (XState supports this).
    The bottom line: for **interactive, multi-step animations**
    (tooltips, multi-step modals, toggles with intermediate states),
    modeling it as a state machine yields cleaner logic and fewer
    edge-case bugs than stringing together arbitrary timeouts.

-   **Timeline Orchestration:** Some animations are essentially
    **timelines** -- sequences of steps that play in order. For example,
    a onboarding intro might first fade in text, then slide in an image,
    then pulse a CTA button. You can think of this as a timeline of
    animations. Tools like **GSAP (GreenSock)** excel at timeline
    orchestration: you create a timeline, add animations with specific
    start times or relative offsets, and it runs as a coordinated
    sequence. React libraries like Framer Motion allow sequencing via
    variants and the `transition.sequence` or `staggerChildren`
    props[\[63\]](https://motion.dev/#:~:text=Motion%20%E2%80%94%20JavaScript%20%26%20React,Orchestrate%20React%20animations%20with%20variants)[\[64\]](https://motion.dev/#:~:text=Timeline%20sequences,Orchestrate%20React%20animations%20with%20variants).
    Internally, these are orchestrating a timeline. Premium marketing
    pages often use GSAP timelines because they want fine control --
    e.g. when the user scrolls to a section, play a timeline of a series
    of animations illustrating a concept. The **advantage of a
    timeline** is that you can adjust the whole sequence's timing
    easily, and ensure things happen exactly when you want relative to
    each other. For instance, *overlap* animations for a more fluid
    feel: start fading in element B just *before* element A's movement
    finishes, to avoid a dead gap. GSAP allows overlaps by setting
    negative delays between tweens. In a hand-rolled approach, you might
    end up with nested setTimeouts -- which quickly becomes hard to
    manage or tweak. A timeline abstraction is much cleaner. Even
    without GSAP, one can create a simple timeline orchestration with
    Promises or `async/await`: e.g.
    `await animateStep1(); await animateStep2();` -- each function
    returns a promise when its CSS transition or WAAPI (Web Animations
    API) animation completes. That way each step runs after the previous
    finished. For React, an imperative ref to a DOM node's `.animate()`
    or using the TransitionGroup to sequence mounting can serve.

-   **Combining State Machines and Timelines:** Often, it's not
    either/or but both. Think of a state machine as handling *which*
    animation sequence to run, and timeline as *how* to run a particular
    sequence. For example, Vercel's product tour had a state (`index` of
    current slide) and depending on the state change, they ran a
    timeline of tooltip movement and content
    fade[\[65\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=need%20to%20handle%20navigation%2C%20animations%2C,and%20changing%20content%2C%20including)[\[66\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear).
    They ensured via code that when transitioning from state N to N+1,
    the dot moves then the tooltip appears in strict
    order[\[67\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear).
    They even used a `transitionEnd` event to know when the dot movement
    finished before starting the next
    part[\[68\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear)
    -- effectively manually orchestrating a timeline across components.
    They mention using `lodash.delay()` to sequence animations with
    precise
    gaps[\[69\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=description%20would%20appear).
    This is timeline orchestration in practice: a small scheduler
    ensuring one animation happens after another. A robust way to do
    this is to have a central *animation controller*. Some apps use a
    dedicated **Animation Manager** that triggers animations based on
    events or states. For example, an `AnimationManager` could subscribe
    to state changes (from an FSM or Redux store) and then play
    appropriate timelines. This decouples animation timing from business
    logic.

-   **Event-Driven Animations:** Both patterns benefit from an
    event-driven approach. In an FSM, an event (like "hover" or
    "nextSlide") triggers a state transition which triggers animation.
    In a timeline, an event (like "scroll reached 50%" or "section
    entered viewport") triggers the timeline start. Using events (or
    observables) makes the system reactive -- easier to test and reason
    about than hard-coded delays. For scroll-based animations, the event
    might be an IntersectionObserver firing (we'll see technical
    patterns in Section 7/8). Stripe's endless footer animation runs "on
    every scroll event (interpolated for smoothness)" -- essentially
    binding animation updates to the scroll position
    event[\[70\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=invert%20it%20by%20creating%20a,never%20reach%20the%20end%20of).
    That's a continuous timeline tied to scroll (and now CSS
    `animation-timeline: view()` can even do this
    declaratively[\[71\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%3E%20The%20CSS%20animation,as%20users%20navigate%20a%20webpage)).
    The concept: treat dynamic inputs (user events, scroll, time) as
    driving animation state, rather than just playing animations
    blindly. This is key to building *responsive* animations that can
    pause, reverse, or adapt when the user intervenes.

-   **Layers and Parallel State Machines:** Complex UIs might have
    multiple animations running in parallel for different components.
    Rive introduces the idea of **state machine layers** where each
    layer controls a subset of an animation, and layers run
    concurrently[\[72\]](https://rive.app/docs/editor/state-machine/state-machine#:~:text=is%20in%20the%20Idle%20state,Image%3A%20Image).
    In code architecture, you might similarly have nested state machines
    or multiple state slices. For example, think of a dashboard: a
    notification panel might have its own open/close animation
    independent of a sidebar's show/hide. Each can be a state machine,
    and an overarching page state might compose them. By **separating
    concerns** (each component manages its own animation states), you
    avoid one gigantic monolithic state handling everything. Instead,
    orchestrate at a higher level if needed (e.g. open sidebar then open
    panel after a delay -- that can be done by listening to the
    sidebar's completion event and then triggering the panel's state).

-   **Error Handling & Edge Cases:** Good architecture accounts for edge
    cases: What if an animation is interrupted? What if two events
    happen "simultaneously"? State machines shine here by disallowing
    impossible transitions -- e.g. if a modal is already in "opening"
    state and you get another open event, you might ignore it or queue
    it. Timeline orchestration also must handle if the user navigates
    away mid-sequence. One approach is to keep a reference to animations
    so they can be cancelled or so that new events can check if an
    animation is in progress and decide to interrupt or not. For
    instance, if a user triggers closing an alert while its entrance
    animation is still playing, you might either jump to end state or
    play the exit from the current point. High-end implementations use
    logic to handle these gracefully (perhaps using the Web Animations
    API which can `finish()` or `cancel()` animations programmatically).

-   **Example -- Button FSM:** Consider a custom animated button. We
    define states: `idle`, `hovered`, `active` (pressed), `disabled`. In
    code (TypeScript for clarity):

```{=html}
<!-- -->
```
    type ButtonState = 'idle' | 'hovered' | 'active' | 'disabled';
    let state: ButtonState = 'idle';

    const transitions = {
      idle:    { mouseenter: 'hovered', click: 'active' },
      hovered:{ mouseleave: 'idle', mousedown: 'active', click: 'active' },
      active: { mouseup: 'idle' },  // click end returns to idle (or hovered depending on pointer)
      disabled: {} // no transitions
    };

    function send(event: string) {
      const next = transitions[state][event];
      if (!next) return;
      // perform transition actions
      if (state === 'idle' && next === 'hovered') highlightAnimation.play();
      if (state === 'hovered' && next === 'idle') highlightAnimation.reverse();
      if (next === 'active') pressAnimation.play(); 
      // ... etc
      state = next;
    }

Here, `send('mouseenter')` in idle triggers the hover highlight
animation. `send('mousedown')` triggers press animation. Using a table
like this prevents illegal combos (e.g. if disabled, events do nothing).
This is a simple FSM pattern. In real usage, you might integrate with
React state or use XState for a more formal approach. The animations
(`highlightAnimation`, `pressAnimation`) could be CSS classes toggled or
JS Animation objects. The FSM ensures they orchestrate properly (e.g.,
you won't play hover animation when disabled). This approach is
**production-proven**: e.g., Microsoft's Fluent UI uses state-like props
to manage toggle/hover animations on components, and game UIs like
Unity's use Animator state machines
similarly[\[62\]](https://docs.unity3d.com/6000.2/Documentation/Manual/AnimationStateMachines.html#:~:text=Animation%20State%20Machine%20,%C2%B7%20State%20Machine%20Transitions).

-   **Example -- Timeline Orchestration:** Suppose we have a sequence
    when a modal opens: backdrop fades in, modal scales and slides from
    top, then a success icon bounces. A GSAP-like pseudo-code:

```{=html}
<!-- -->
```
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.set(modal, { opacity: 0, y: -50, scale: 0.8 })
      .to(backdrop, { opacity: 1, duration: 0.2 })       // fade in backdrop
      .to(modal, { opacity: 1, y: 0, scale: 1, duration: 0.3 }, "<0.1") 
      // "<0.1" means start 0.1s before previous finishes, overlapping slightly
      .from(icon, { y: -20, opacity: 0, duration: 0.2 }, "+=0.1")
      .to(icon, { y: 0, ease: "bounce.out", duration: 0.4 });

This timeline orchestrates multiple elements with overlaps for
smoothness. If implemented via CSS, you might use delays: backdrop 0s,
modal 0.1s delay, icon 0.4s delay etc., but that's harder to tweak
precisely. With a timeline object, designers can easily adjust order or
easing. If the user closes the modal mid-way, you'd likely kill the
timeline or play a quick reverse/close timeline. GSAP offers controls
(tl.pause(), tl.reverse()) to help with that. Without GSAP, you can
manage a similar structure by using promise chaining:

    backdrop.animate([{opacity:0},{opacity:1}], { duration:200 }).finished
      .then(() => modal.animate([...], {duration:300}).finished)
      .then(() => icon.animate([...], {duration:200}).finished)
      .then(() => icon.animate([...], {duration:400, easing:'cubic-bezier(...)?'}));

This is more verbose, but conceptually the same *sequential
orchestration*.

-   **Scroll-Based State vs Timeline:** A quick note: modern web
    animations often depend on scroll position (e.g. parallax or
    reveals). There are two approaches -- **state-based** (section
    enters viewport triggers a one-time animation, essentially an event
    -\> FSM transition from "off" to "on") or **timeline-based**
    (continuous animation tied to scroll progress). For the former,
    IntersectionObserver is your friend (we'll show code in Section 8),
    which basically flips state when visible. For the latter, libraries
    like GSAP ScrollTrigger or the new CSS `scroll-timeline` let scroll
    position drive an animation
    progress[\[71\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%3E%20The%20CSS%20animation,as%20users%20navigate%20a%20webpage)[\[73\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=This%20feature%20connects%20animations%20to,effects%2C%20complex%20transitions%2C%20and%20storytelling).
    Under the hood, that's treating scroll as a timeline scrubber. From
    an architecture viewpoint, identify which pattern suits each
    interaction. If it's a one-shot animation (user scrolls and you run
    it once), treat it like a state change (not-scrolled-into-view -\>
    in-view state). If it's continuous (like an illustration that
    animates as you scroll, say a progress bar filling along with
    scroll), you need a timeline tied to scroll events.

By using state machines for **discrete interaction-driven animations**
and timeline orchestration for **sequential/coordinated animations**,
you create a scalable architecture that can handle the complexity of a
rich UI. When Linear or Figma implement their polished UIs, you can be
sure under the hood they have structured logic -- whether explicitly or
by following these patterns in code. This prevents spaghetti code like
"setTimeout this, onEnd that" scattered around, replacing it with a
declarative map of states and a centralized sequence control.

Next, we'll delve deeper into performance considerations (ensuring all
these animations remain smooth at 60fps) and how to optimize and profile
them in a real-world setting.
