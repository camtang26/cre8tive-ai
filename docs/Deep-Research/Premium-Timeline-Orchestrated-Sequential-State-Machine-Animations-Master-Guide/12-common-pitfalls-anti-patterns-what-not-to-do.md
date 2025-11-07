# 12. Common Pitfalls & Anti-Patterns (What NOT to Do)

**Prerequisites:** Sections 1--11 (so you can recognize why these are
bad ideas).

Even talented teams can fall into animation traps that hurt UX or
performance. Let's highlight **common pitfalls and anti-patterns** so
you (or an AI model) know to avoid them:

-   **Over-Animation / Animation Overload:** *Pitfall:* Animating too
    many things on a page at once, or animating every possible property,
    which distracts and overwhelms
    users[\[24\]](https://m2.material.io/design/motion/choreography.html#:~:text=Don%27tDon%27t%20animate%20multiple%20elements%20simultaneously,for%20attention%20and%20divide%20focus).
    Examples: a website where background, buttons, and text are all
    moving simultaneously (user's eyes don't know where to focus).
    Another: excessive use of parallax on multiple layers causing
    seasickness. **Avoid by:** practicing restraint (Section 4) --
    animate the primary element of focus, keep others
    static[\[54\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Let%E2%80%99s%20digress%20a%20bit,movements%20can%20irritate%20the%20user).
    Use choreography: sequence or stagger so user can
    follow[\[26\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Sequence%20%26%20stagger).
    As a rule, at any given time, the user's attention should be guided
    to at most one animated focal point. If you have a bunch of icons
    all bouncing continuously, that's likely overkill. Linear's design
    lead has said "If everything moves, nothing is special"
    (paraphrasing) -- meaning save animations for where it counts.

-   **Animations that Impede Performance:** *Pitfall:* Using animations
    that cause jank or slow down the interface, negating any benefit.
    Common culprits: animating layout properties (top/left/width) on
    large elements or lists (forces reflow every
    frame)[\[75\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Avoid%20Frequent%20Layout%20Changes);
    heavy drop shadows or blurs on large areas during transitions
    (forces repaint of big area every frame); running too many
    JavaScript-based animations in parallel, saturating the main thread.
    **Avoid by:** using transform/opacity instead of layout
    changes[\[76\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Opt%20for%20Transformations%20Over%20Position,Changes);
    using will-change for expensive elements but sparingly; leveraging
    GPU-friendly CSS and throttling JS as discussed in Section 6. Test
    on low-end devices -- if it stutters, simplify the animation
    (shorter duration, simpler easing, fewer moving parts).

-   **Unskippable / Long Intro Animations:** *Pitfall:* Forcing users to
    sit through a long splash animation or logo reveal before they can
    use the app. It might look cool the first time, but quickly becomes
    an annoyance (and an accessibility barrier). E.g., a dashboard that
    plays a 5-second fancy animation on every load -- users will hate
    the delay, and if they can't skip, it's an anti-pattern. **Avoid
    by:** keeping intro animations either very short (\<1-2s) or
    optional. If you have a product tour or splash, always provide a
    "Skip" button from the start. Many sites learned this: early
    parallax sites would hijack scroll and make you watch a sequence --
    now, good ones allow normal scroll or at least a "scroll to skip
    animation" prompt. Also, do not animate on every single page load
    redundantly (e.g., only maybe first visit or when content is loading
    in background).

-   **Looping Animations that Steal Focus:** *Pitfall:* Animated GIFs or
    elements that continuously loop (especially at high frequency) can
    be incredibly distracting (imagine trying to read text next to a
    looping spinner). Also, flashing loops can trigger vestibular
    disorders or just annoy. **Avoid by:** if an animation is purely
    decorative and loops, ensure it's subtle (low contrast, slow) or off
    to the side. Better, stop it after a few iterations. For something
    like a loading spinner, which does loop by nature, don't also
    animate other things around it. Keep the rest of UI calm so user
    focuses on the spinner. For decorative loops (like ambient
    background animations), consider `prefers-reduced-motion` to turn
    them off for those who prefer no
    motion[\[85\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=Ultimate%20Guide%20to%20Web%20Animation,or%20reducing%20the%20intensity).
    Also ensure any loop meets the flash threshold (\<= 3 flashes/sec if
    significant area changes, to avoid seizure risk).

-   **Linear Easing & Abrupt Motion:** *Pitfall:* Using linear easing
    for UI transitions by default. This often looks robotic and
    jarring[\[47\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing).
    E.g., a panel that moves linearly just doesn't feel polished.
    Another example is *no easing at all* (snapping instantly) for
    content changes that needed a transitional hint -- causing
    "teleportation" feel. **Avoid by:** using easing curves
    (ease-out/in) so motions have smooth
    acceleration[\[47\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing).
    Also avoid completely abrupt changes in complex UIs -- e.g., if a
    lot of content changes, give at least a small fade or slide to help
    the eye. One anti-pattern is animating position without easing but
    then overshooting -- it feels weird. Always test an easing with a
    quick prototype; if it feels off, it likely is. (One notable
    opinion: in general, *never use linear easing for movement*, only
    perhaps for things like color fade if trying to be consistent --
    even then, eased color change can be nicer.)

-   **Non-Standard/Weird Easing or Timing:** *Pitfall:* Using extremely
    bouncy or elastic easings in a serious app context -- it undermines
    the tone. Or using mismatched durations -- e.g., hover animation is
    slower than click response, causing a laggy feel. **Avoid by:**
    matching easing style to context (Section 4). For instance, a
    finance app likely should avoid goofy spring bounces -- a subtle
    ease-out is more appropriate. Also standardize durations for similar
    actions: if opening any modal in your app takes \~300ms, don't make
    one modal 600ms fade just for variety -- users perceive it as lag.
    Consistency is key; an anti-pattern is inconsistency (one part of
    app animates quickly, another similar thing animates slowly -- it
    feels like a bug). Design systems often codify this: e.g., "All
    entrances use ease-out 250ms; all exits use ease-in 200ms." Stick to
    that to avoid the pitfall of arbitrary timings.

-   **Ignoring User Preferences / Accessibility:** *Pitfall:* Not
    honoring `prefers-reduced-motion` -- making animations that could
    cause discomfort with no opt-out. Or focusing something on screen
    via motion and not providing a non-motion alternative cue (like
    focus ring or content change). Also, animations that trap keyboard
    focus inadvertently (like a shaking modal might steal focus if
    implemented poorly). **Avoid by:** always checking and implementing
    reduced-motion options (we've hammered this -- it\'s an anti-pattern
    not to). Additionally, ensure any important animated event is also
    signaled via ARIA or text. E.g., if an error shakes a field, also
    change the border color or add an error message for clarity.
    Anti-pattern would be shake only with no message -- SR users or
    motion-disabled users get no feedback. Another one: using motion as
    the only indicator of something (like a subtle loading bar moves but
    there's no "Loading\..." text -- some might miss it if it's subtle).
    Always pair motion with at least one other indicator (text, icon
    change). And remember, not all users perceive animation the same:
    what's clear to you might confuse someone with cognitive disability
    -- too much simultaneous movement can overload them. So adhere to
    the **"Pause, Stop, Hide"** guideline for content that
    moves[\[123\]](https://accessibilitycraft.com/104-wcag-pause-stop-hide-prefers-reduced-motion-fallout-nuka-cola-quantum/#:~:text=104%3A%20WCAG%20Pause%2C%20Stop%2C%20Hide,sufficient%20for%20meeting%20this%20guideline).

-   **Scroll-Jacking & Loss of Control:** *Pitfall:* Overriding natural
    scroll to dictate an experience (common in early 2010s). E.g., user
    tries to scroll normally but your site intercepts and scrolls to the
    next panel forcefully or scroll progress is tied to a slow animation
    sequence. Users often hate this because it breaks expected behavior
    (especially on touch devices where it can feel stuttery or wrong).
    **Avoid by:** if you do need to control scroll (like a slideshow on
    scroll), implement it extremely well -- ensure it responds to scroll
    direction immediately (no delays), and give an alternate path (maybe
    allow a "Skip animation" or provide regular navigation links). A
    safe practice is **never completely lock out user control** -- e.g.,
    some scroll-jack sites used to disable scrollbar or keyboard. That's
    an anti-pattern now. Instead, maybe snap after user scrolls a
    certain amount (so user feels in control, then you do a tiny
    auto-adjust to land on exactly the right spot). Also consider
    reduced-motion: maybe you turn off fancy scroll effects if user
    prefers reduce -- just allow normal scroll.

-   **Lack of Continuity / Context Loss:** *Pitfall:* Animations that
    don't preserve context, leaving users confused about where something
    came from or went. E.g., a list item is deleted and instantly
    disappears with no trace -- user might think "where did it go?" Or
    navigating to a detail view and nothing connects the two views
    visually, user might feel disoriented. This is a conceptual
    anti-pattern: *teleportation*. **Avoid by:** using transitions that
    maintain continuity of objects or at least hint at
    it[\[25\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=How%20are%20our%20brains%20capable,of%20visual%20input%20into%20cuts).
    For deletion, consider leaving a temporary blank space or fade it
    out (so the user sees it go away) or animate it sliding into a
    "trash" icon region. For navigation, use shared element transitions
    (the clicked item maybe expands or cross-fades) or at least provide
    breadcrumbs so user knows context. A classic mistake is modals that
    pop up with no overlay or connection, feeling like a new window --
    always dim background to focus context, etc. Essentially, don\'t
    make animations that *break the mental model* of spatial or temporal
    continuity. Another continuity anti-pattern: animating something in
    a way that it ends up in an illogical place (like an element moving
    unrelatedly). Each motion should align with a narrative (Section 9
    references how brain can handle a cut if context known, but will be
    confused if motion is arbitrary).

-   **Animation for Animation's Sake:** This is broad but worth stating:
    *Pitfall:* adding an effect just because it looks cool, without
    thinking of UX impact. This often results in the above issues
    (distraction, delay). E.g., adding a spinning logo in a corner just
    because you can -- serves no purpose and could be distracting. Or
    using a fancy 3D flip card for simple content when a fade would do
    -- perhaps introducing bugs or mobile issues. **Avoid by:**
    revisiting Section 1 -- always have a purpose (guide, feedback,
    mood) for each animation. When reviewing your design, be ready to
    cut animations that don't meet a specific need. As the saying goes,
    *"Perfection is achieved not when there is nothing more to add, but
    nothing left to take away."* Many top-tier apps have fairly minimal
    animation -- just enough to feel slick. Overdoing it feels amateur
    (like a newbie video editor using 10 different cheesy transitions
    vs. a pro using simple cuts).

-   **Not Testing Edge Cases:** *Pitfall:* Animations might look fine in
    the ideal scenario but break in edge cases: e.g., content that's
    very long might cause an animation to behave oddly (like a sliding
    panel janks if content height changes mid-transition), or multiple
    rapid clicks cause overlapping animations if not handled (like
    double-click open causing a modal to animate open twice). **Avoid
    by:** testing interactions in quick succession, on different content
    lengths, in different browsers. Use those FSM patterns to guard
    against illegal states (our modal FSM prevents double open bug).
    Also, consider reduced CPU situations: test with CPU throttling
    (DevTools can simulate) to see if your animation still behaves (some
    CSS transitions might get skipped frames but still end, whereas a JS
    animation might pile up events -- ensure you handle
    `requestAnimationFrame` properly). A robust implementation accounts
    for interruptions (like user navigating away mid-animation -- ensure
    cleanup, otherwise you get stray animations running). Not cleaning
    up is a common bug (e.g., an observer or interval still trying to
    animate on a now-hidden element -- wasted cycles or errors). Our
    examples always clear timers/observers. Make that a habit.

By avoiding these anti-patterns, you ensure animations *enhance* rather
than detract. Many pitfalls basically come down to **"animation is
serving itself, not the user"**, whereas good animation serves the
user's needs or enjoyment. Keep user empathy: if you imagine using the
interface daily, would this animation still be welcome or would it get
on your nerves? That question often ferrets out the unnecessary stuff.
Also, listen to user feedback: if multiple users say "that transition is
slow" or "that wobble feels unprofessional," take it seriously.
Dismissing such feedback ("but it's cool!") is a pitfall in itself.

In conclusion, **do less but do it better**. It's better to have a few
subtle, high-quality animations than a bucket of low-quality ones. This
aligns with the practices of our case study companies who are quite
restrained. Now, finally, we will discuss strategic constraints and
alternative mental models to approach animation, which ties into
avoiding these pitfalls proactively.
