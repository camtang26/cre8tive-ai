# 4. Visual Design Principles of Animation (Timing, Rhythm, Easing, Restraint, Typography)

**Prerequisites:** Sections 1--3 (purposeful animation, perception,
creative planning).

With ideas in mind, executing them at a world-class level requires
adhering to core **visual design principles for motion**. These
principles ensure animations are polished, professional, and in harmony
with the product's aesthetics. The key areas are **timing (duration),
rhythm & cadence, easing curves, aesthetic polish, and restraint** --
plus special consideration for animated text/typography.

-   **Timing & Duration:** In Section 2 we noted typical duration sweet
    spots (150--300ms for UI transitions). Here, we refine that: **match
    the timing to the context and element size.** Small UI changes (like
    a button hover) should be very fast (100--200ms) to feel snappy.
    Larger movements (opening a full modal) might extend to 300--400ms
    so the user can follow. Material Design suggests shorter durations
    for smaller surfaces and longer for larger surfaces, but even the
    longest should rarely exceed \~500ms for common
    interactions[\[43\]](https://parachutedesign.ca/blog/ux-animation/#:~:text=3%20UX%20Animation%20Best%20Practices,sweet%20spot%20landing%20between).
    Visual timing also involves delays and offsets: staggering elements
    by \~20--50ms intervals creates a pleasing cascade (more on rhythm
    next) and avoids jarring
    simultaneity[\[26\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Sequence%20%26%20stagger).
    **Rhythmic timing** (discussed below) can be used to create a sense
    of pace and flow through multiple animations -- akin to beats in
    music.

-   **Rhythm and Cadence:** Great animations often have an underlying
    **rhythm**. This doesn't mean everything happens on a metronome, but
    rather that the sequence of motions has a pattern that feels
    intentional. For example, an onboarding sequence might use a "1-2-3
    pause, 1-2-3 pause" rhythm for steps appearing, giving a sense of
    progress. In film terms, editing has a cadence that keeps viewer
    engagement; in UI, rhythm can keep interaction engaging but not
    overwhelming[\[44\]](https://www.backstage.com/magazine/article/film-rhythm-editing-guide-77147/#:~:text=Set%20the%20Pace%20With%20This,%E2%80%9CThere%20is%20a).
    **Avoid monotony** (e.g. every animation exactly 300ms, all starting
    together). Instead, introduce rhythmic variation: a quick element
    followed by a slightly slower one, etc., if it suits the content
    hierarchy. Stripe's landing pages often orchestrate content in
    rhythmic reveals as you scroll -- e.g. text fades in, then image
    slides, slight pause, next
    section[\[45\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%2A%20For%20scroll,change%20dynamically%20as%20users%20scroll)[\[46\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Table%20with%20rows%20loading%20in,at%20staggered%20timing).
    This keeps the viewer's interest like how a song with dynamic tempo
    changes is more engaging than a constant beat. However, be cautious:
    rhythm should not conflict with the user's own pace. Allow users to
    scroll or navigate at will; your animation rhythm should adapt or be
    subtle enough not to force them into a waiting pattern (unless it's
    an intentional tutorial where controlling pace is the goal).

-   **Easing (Timing Curves):** *Easing is queen* in premium animations.
    An otherwise simple movement can feel luxe with the right easing.
    **Never use purely linear easing for UI movement** unless you have a
    deliberate reason (e.g. a marquee crawl). Linear motion looks
    mechanical and
    jarring[\[47\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing).
    Instead, use ease-in-out variations or spring curves. Easing gives a
    sense of *weight* -- slow in, slow out implies acceleration and
    deceleration, which our brains interpret as an object with mass
    slowing due to
    friction[\[6\]](https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901#:~:text=Newtonian%20%E2%80%98physics%E2%80%99%20is%20experienced%20in,responding%20to%20force%20and%20friction)[\[48\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=Object%20behavior%20aligns%20with%20user,expectations%20when%20temporal%20events%20occur).
    Common easing choices:

-   **Ease-out (fast start, slow end)** for bringing in new elements
    (they decelerate into place, feeling natural).

-   **Ease-in (slow start, fast end)** for exiting elements (they
    accelerate off, feeling like they're propelled away).

-   **Ease-in-out** for movements in both directions or continuous
    transitions.

-   **Spring or custom bezier** for bouncy or more organic feel. Many
    top-tier UIs now use *spring physics-based easing*, which can
    produce subtle overshoots or rebounds that feel playful yet
    polished. For example, Apple's iOS spring animations or Figma's
    "Smart Animate (dissolve vs move)" with easing functions that
    emulate spring tension.

The **easing function should match the brand and context**: a financial
dashboard might use gentle, steady eases (conveying stability), while a
creative app might use snappier, bouncy eases (conveying fun).
Importantly, be consistent: if your interface has a standard easing
curve for UI controls, use it everywhere for similar
interactions[\[17\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Consistency).
This consistency builds subconscious trust; the user learns how things
move in your app. Also, avoid *overly exotic easing* that can feel
"off." For instance, an ease-out with too much overshoot can seem laggy
or goofy if used on a serious element. As a rule of thumb, **aim for
easing that the user doesn't consciously notice** -- they should just
feel that the motion was smooth and
"right"[\[18\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=As%20designers%20concerned%20with%20usability%2C,which%20example%20supports%20usability%20more).
If a user notices the easing, it might be too extreme.

-   **Polish and Small Details:** Premium animations sweat the small
    stuff. A few examples:

-   **Anchor/Origin:** Deciding the transform origin for a scale
    animation (e.g., does a modal scale from center or from the button
    that triggered it?). The origin can subtly guide the eye. Stripe
    often scales objects from a logical origin point, so it's like they
    *grow out of* where they came from, reinforcing causality.

-   **Layering & Shadows:** During motion, use shadows or blur
    thoughtfully. A floating element might get a slight drop shadow as
    it moves above other content, enhancing the perception of depth
    (Material Design heavily uses shadows to indicate elevation during
    motion)[\[49\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Motion%20can%20help%20by%20establishing,to%20create%20a%20graceful%20transition)[\[41\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Continuity).
    Conversely, reducing a shadow as something settles makes it feel
    like it's touching the surface.

-   **Overlap and Masking:** If multiple elements animate, consider
    whether they should overlap or mask each other. For example, when
    expanding content, maybe the expanding panel pushes other content
    (to emphasize physicality), or it fades over them (if it's more of a
    lightbox effect). IBM's motion guidelines discuss using *continuity
    and masks* -- e.g. content moving within a panel vs. pushing content
    out, to convey layers of
    hierarchy[\[50\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Pay%20attention%20to%20the%20spatial,respect%20their%20relative%20spatial%20locations)[\[51\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=When%20the%20new%20content%20panel,new%20layer%20is%20introduced%20above).

-   **Visual Continuity:** Whenever possible, use *shared element
    transitions* -- an element remains the same but moves or morphs.
    This leverages gestalt continuity: the user perceives it as one
    thing moving rather than two separate things. For instance, Figma
    when switching pages keeps the top navigation bar persistent to
    reduce reorienting; if animating such, ensure the element stays on
    screen and moves to its new position instead of disappearing and
    reappearing. New browser features like the View Transition API can
    even automate this (we'll mention in Section 11) -- but the design
    principle is to maintain continuity of key elements to avoid
    "teleporting" UI
    components[\[52\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Lesson%201%3A%20What%20should%20you,keep)[\[53\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=space,in%20relation%20to%20one%20another).
    A famous example: Android's material shared element transitions
    (like an image expanding from a thumbnail to full screen) --
    visually elegant and informative.

-   **Restraint (Less is More):** Visual design of motion is as much
    about what *not* to animate as what to animate. **Over-animation is
    a common pitfall** (addressed more in Section 12). World-class
    interfaces exercise restraint: they often feel calm, not frenetic.
    For example, Linear's design ethos is very minimalist -- they only
    animate what's needed (perhaps a subtle loading bar on top, or a
    quick highlight for changes) and nothing more. In a critique of an
    over-animated design, a designer admitted it was "movement for the
    sake of movement" which ended up irritating
    users[\[54\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Let%E2%80%99s%20digress%20a%20bit,movements%20can%20irritate%20the%20user).
    This underscores that *every animation should have a purpose from
    the user's perspective*. Restraint also means **timing-wise**: end
    animations as soon as they've achieved their goal. Don't let an
    animation linger or loop endlessly (unless it's a background
    decorative loop that's subtle). A crisp fade-out right when the user
    has grasped the feedback feels tight; dragging it out feels
    sluggish. As a guideline, err on the side of *shorter* and
    *simpler*. You can always add flourish, but it's much harder to take
    an overdone animation and dial it back once implemented (people grow
    attached to what's built). So, focus on core motions first (the
    simplest way to communicate the state change), then add one small
    detail of polish if needed -- not ten.

-   **Typography & Text Animations:** Animating text requires special
    care for readability and elegance:

-   **Avoid animating text letter-by-letter in ways that hinder
    legibility**. The popular "typewriter effect" can be engaging, but
    it must be done in an accessible way (more in Section 8 code). For
    large blocks of text, don't have them fly in from all sides; the
    user needs to read it. A gentle fade or translate-up of an entire
    paragraph is usually best. If using a **typewriter effect for
    headings**, consider revealing text quickly and use a cursor only if
    it fits the brand (e.g. developer-centric sites might use it).
    Ensure the full text is available to screen readers (via
    `aria-label` or not hiding the text
    entirely)[\[55\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=After%20reading%20some%20articles%2C%20I,label%60%20to%20the%20%60h1%60%20element).

-   **Typography polish:** If letters or words are animating (e.g. a
    word flips to another word), maintain consistent tracking (letter
    spacing) unless a stylistic choice. Sudden shifts in kerning or line
    breaks can look like glitches. CSS animations like
    `font-variation-settings` or weight can smoothly bold text, but use
    with care -- a sudden font weight change can cause layout shift
    (unless using variable fonts that avoid reflow).

-   **Scale and Emphasis:** If animating scale of text (say a headline
    shrinks to a corner), consider using a different styling after
    (maybe switch to a smaller font family optimized for small size).
    Figma's prototype "Smart Animate" is often used to smoothly change
    text size/position between frames -- it works, but designers ensure
    the final size is still readable. Also, watch out for **motion blur
    on small text**: moving text quickly can cause it to blur and become
    unreadable due to pixel aliasing. If you must move text fast,
    perhaps fade it out before it moves too far or use transform with
    preserve-3d to let GPU handle it more cleanly.

-   **Never impede reading**: A fundamental rule -- if you want the user
    to read something, don't animate it while they're reading. For
    instance, don't have a tooltip text typing out slowly if it contains
    instructions needed immediately. Either reveal the whole text or
    allow skipping.

-   **Visual Consistency:** Maintain a consistent style of animation
    that matches your brand's visual language. Stripe's brand is known
    for slick, technically sophisticated visuals -- accordingly, their
    animations often involve smoothly interpolated transformations (like
    sophisticated 3D or programmatic effects) with clean lines, not
    cartoonish squash-and-stretch. In contrast, a more playful brand
    might incorporate a bit of squash/stretch or more pronounced bounces
    (within reason). If your design system defines motion styles (IBM's
    Carbon or Google Material have "productive" vs "expressive" motion
    style definitions, for example), adhere to those for each
    context[\[56\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=In%20the%20example%20shown%20here%2C,to%20their%20difference%20in%20size).
    Also ensure transitions between related elements feel part of the
    same family -- e.g. if navigating between pages, all page
    transitions could use a uniform approach (slide from right, or
    crossfade + scale) so the user isn't disoriented by different
    animations each time.

In practice, visual design of animations is iterative: you implement an
animation, then **fine-tune** by eye. It's common to adjust easing
curves or durations by small increments (250ms felt too slow, try 200ms;
the easeOut expo felt too abrupt at end, try easeOut quad, etc.).
Designers and engineers often work together in real-time on this tuning.
The result of applying these principles is an interface that moves with
*confidence and clarity*. Users may not explicitly notice the amazing
animation work -- and that's a compliment. They just feel like the app
is smooth, understandable, and polished. As Disney animators (the
pioneers of animation principles) would say, the highest praise is that
the motion feels *natural*. In UX terms, *natural* means it aligns with
user expectations and fades into the background of the
experience[\[47\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing)[\[57\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20case%20I%20am%20presenting,unfinished%2C%20and%20jarring%2C%20and%20distracting).

Now that we've covered **what** good animations should look and feel
like, we move into the architecture: **how** to engineer these
animations under the hood (state machines, timelines, triggers) to
ensure robust and maintainable implementations.
