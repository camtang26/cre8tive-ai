# 10. Case Studies (Linear, Stripe, Vercel, Figma -- Real Implementations)

**Prerequisites:** All prior sections (to analyze with a critical eye).

Let's dissect how our target companies apply the discussed principles in
real production. We'll look at each briefly:

## Linear

**Known For:** *Ultra-fast UI with subtle, effective animations.* Linear
(issue tracking software) has a reputation for **speed and polish**.
Their interface feels "alive" yet never slow.

-   **Navigation & Transitions:** Linear avoids big flashy transitions.
    Opening a modal or switching pages is almost instant, often just a
    subtle fade or none at all. This is intentional restraint for
    productivity. One can infer they use **optimistic state
    transitions** (likely showing updated UI instantly, with animations
    serving only to not shock the user). For example, when you archive
    an issue, it probably just fades out of the list (no dramatic
    collapse) -- quick feedback and
    gone[\[5\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=That%27s%20why%20all%20animation%20must,like%20it%20was%20always%20there).
    They likely use **CSS transitions for most basic animations** (to
    offload to GPU and keep JS free for logic) and ensure those
    transitions are under 150ms for snappiness.

-   **Microinteractions:** Linear's UI has nice microinteractions: e.g.,
    copy an issue link and a small tooltip might briefly appear
    ("Copied") and fade out. The appearance of that tooltip is finely
    tuned: maybe a slight slide up + fade, lasting just long enough to
    notice (\~1s). This aligns with **motion design principles** --
    provide feedback (tooltip) then remove it to reduce
    clutter[\[109\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=,moving%20between%20pages%20or%20states).
    The tooltip likely respects `prefers-reduced-motion` by not
    animating if user prefers none.

-   **Performance:** Linear targets 60fps on even modest hardware. They
    likely **limit parallel animations** strictly -- e.g., if a complex
    list reordering is happening, they might temporarily disable other
    animations to ensure it's smooth. They also implement **virtual
    scrolling** for lists (so only a subset of DOM elements animate at
    once). Achieving their famed speed probably involved profiling every
    animation to avoid long tasks. Perhaps they use a library like React
    Spring for dragging and list physics (springs can make reordering
    feel fluid).

-   **Case Study -- Linear Issue Movement:** Imagine dragging an issue
    card to a new status. In Linear, that drag is super smooth with
    preview of where it will land (a line indicating new position). When
    you drop it, the card likely animates into place (sliding from old
    to new position) -- an application of the FLIP
    (First-Last-Invert-Play) technique. That animation makes it clear
    where the card went (maintaining spatial continuity, a bit of filmic
    storytelling) and is done with transform to be jank-free. They
    likely wrapped that in an **XState or similar FSM** to handle drag
    states (dragging, dropping, etc.). The result: a satisfying,
    understandable motion.

-   **Polish Examples:** Linear's loading indicator is a thin bar at top
    (similar to YouTube's). It animates smoothly when loading and
    doesn't jank the layout (using transform scaleX like our Example
    8.4). They also hide it quickly on complete (maybe a slight delay to
    ensure it's seen if load was extremely fast, to avoid flash). This
    is a known trick -- if load finishes too fast, keep the bar for
    \~100ms so it doesn't
    flicker[\[91\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=TTI%20,Readiness).
    Linear's attention to such details contributes to perceived
    performance (making sure feedback is visible but not intrusive).

In summary, Linear exemplifies **restraint, speed, and subtlety**. They
use animations where needed (drag-and-drop, small feedback, smooth
transitions) but nothing feels superfluous. Their guiding rule seems to
be: animations should *never* get in the user's way, only enhance
clarity and delight in tiny doses.

## Stripe

**Known For:** *Cinematic marketing pages and highly polished product
UIs.* Stripe's public sites (stripe.com, stripe.dev) often push the
envelope with WebGL, three.js, and scroll-triggered
storytelling[\[110\]](https://stripe.com/blog/globe#:~:text=For%20the%20new%C2%A0stripe,operations%20and%20expansion%20every%20day)[\[111\]](https://stripe.com/blog/globe#:~:text=Ways%20to%20build%20the%20world).
Meanwhile, their internal dashboard UI uses refined microinteractions.

-   **Stripe Landing Pages:** These are like interactive movies. E.g.,
    **stripe.com/payments** historically had elaborate illustrations
    that animate as you scroll. Case: "Interactive globe" (Stripe's 2020
    homepage)[\[110\]](https://stripe.com/blog/globe#:~:text=For%20the%20new%C2%A0stripe,operations%20and%20expansion%20every%20day)
    -- a 3D WebGL globe that you could spin. Implementation: they
    custom-built it with
    Three.js[\[14\]](https://stripe.com/blog/globe#:~:text=If%20we%20had%20known%20precisely,3D%20graphics%20development%20substantially%20easier),
    solving challenges like performance (they had to simplify the 3D
    model and use shaders smartly). They orchestrated animations such as
    the globe initially easing into view and subtle country highlights
    animating. That project reads like a film VFX endeavor: they
    iterated the design visually first (Photoshop
    concept)[\[112\]](https://stripe.com/blog/globe#:~:text=None%20of%20us%20on%20the,precious%20about%20what%20was%20discarded),
    then implemented with heavy tech. They applied **physics** (the
    globe spins with inertia), and **interaction feedback** (dragging it
    feels smooth). They also used timeline orchestration for events like
    "on scroll to stats section, spin globe to a certain region, pop out
    markers." All that required robust coordination -- likely GSAP or
    imperative JS with callbacks.

-   **Stripe Connect
    Landing (2017)**[\[113\]](https://stripe.com/blog/connect-front-end-experience#:~:text=We%20recently%20released%20a%20new,and%20simple%20on%20the%20surface):
    featured background animations (rotating cubes in header). According
    to their blog:

-   They used **CSS 3D transforms** for cubes, animated via JS for
    random rotation
    speeds[\[114\]](https://stripe.com/blog/connect-front-end-experience#:~:text=The%20landing%20page%E2%80%99s%20header%20displays,dynamically%20illuminates%20the%20appropriate%20faces).
    They had one light source simulated (common trick: gradient on
    faces).

-   They orchestrated multiple timelines: each cube had its own spin
    animation (likely using `requestAnimationFrame` or CSS animation
    with different durations). To sync a "pulse" of all cubes, maybe
    they triggered a slight scale at times.

-   **Learning**: They had to ensure these animations didn't wreck
    performance, so cubes were simple DOM elements, not canvases, and
    maybe only a handful of them with efficient CSS.

-   **Stripe.dev (Developers site) 2025 case**: We saw in the Awwwards
    case study:

-   They embraced whimsical features (like the endless footer that draws
    "DEVELOPERS" on
    scroll[\[70\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=invert%20it%20by%20creating%20a,never%20reach%20the%20end%20of)).
    Implementation: they used a canvas or SVG in the footer that, on
    each scroll event, appends the word with a slight scaling to create
    that Shepard illusion. They interpolated scroll to avoid jitter
    (meaning they likely used `requestAnimationFrame` to update at most
    60fps even if scroll events fire
    faster)[\[70\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=invert%20it%20by%20creating%20a,never%20reach%20the%20end%20of).

-   They coordinated this with *audio* (Shepard tone) for those who had
    sound -- true cross-domain, combining auditory illusion with visual.

-   *Creative Process:* It was a collaborative sandbox -- "Go as wild as
    you
    want"[\[115\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=The%20design%20comps%20included%20the,never%20reach%20the%20end%20of).
    That shows Stripe's culture of mixing engineering and design
    creativity (our Section 3 notes echo here).

-   **Stripe Dashboard UI:** While less publicly documented, we can
    infer:

-   **Form interactions**: likely small transitions (focus states that
    smoothly highlight fields).

-   **Charts or graphs**: maybe animate on mount (bars rising). But they
    probably allow `prefers-reduced-motion` to skip those for
    accessibility.

-   **Loading states**: skeletons or subtle spinners integrated well.
    Possibly using **Lottie animations** (Stripe's design often includes
    nice animated icons -- they might use Lottie JSON animations for
    things like an animated illustration in empty states). Lottie
    ensures high-quality animation (from After Effects) at low size, and
    it's GPU rendered via canvas or SVG.

-   Job postings hint their design engineers focus on animations,
    performance, A/B testing
    polish[\[116\]](https://stripe.com/jobs/listing/design-engineer-expansion/6299301#:~:text=Design%20Engineer%2C%20Expansion%20,Stripe%27s%20expertise%20across%20public),
    meaning they measure if an animation improves user engagement or if
    it's too distracting (they are data-driven even on design details).

**Notably**, Stripe's ethos is **"incremental delight"** -- tiny details
that many might not notice consciously but add up to a superior feel
(like the subtle hover effects on their homepage links, or the way their
mobile navigation smoothly expands).

## Vercel

**Known For:** *Slick demos, Next.js Conf sites, and a modern SaaS
dashboard (vercel.com dashboard) with thoughtful animations.* Vercel
often showcases with their own site what their tech can do.

-   **Virtual Product
    Tour (2023)**[\[117\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=We%20designed%20our%20animations%20to,one%20of%20the%20product%20tour)[\[67\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear):
    We saw in Section 5 Vercel's blog:

-   They explicitly avoided over-the-top animations and kept focus on
    content[\[118\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=We%20designed%20our%20animations%20to,one%20of%20the%20product%20tour)
    -- choosing restraint consistent with design
    principles[\[20\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=within%20the%20product%20to%20form,support%20functionality%2C%20not%20hinder%20it).

-   They needed strict sequencing (tooltip moves, then content appears)
    and used events and `lodash.delay` to
    orchestrate[\[67\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear).
    This suggests a custom timeline logic in React. Possibly they could
    have used Framer Motion's orchestration API, but maybe they did
    manually for fine control.

-   They also mention "race conditions with repositionTooltip and dot's
    moving
    animation"[\[119\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=separate%20attention,interactions%20back%20to%20the%20tooltip)[\[120\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=those%20animations%20required%20a%20lot,the%20dot%E2%80%99s%20moving%20animation%20resolved)
    -- meaning at first the tooltip flickered because animations
    overlapped incorrectly. They solved by using `transitionend` event
    on the CSS transition of the dot's
    position[\[68\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear).
    That's a practical fix -- wait until dot finished moving (the CSS
    transition of `top` property ended) then set tooltip text. It's
    interesting because it shows even with planning, real implementation
    had concurrency issues -- and they fixed it with a robust event
    listener (i.e., FSM coordination approach).

-   This case underlines: Vercel's team treated that product tour like
    an app feature, making it accessible (ensuring focus ordering etc.),
    and optimized (lodash.delay is a minor detail, but likely used to
    schedule bits on the JS event loop more predictably).

-   **Next.js Conf Landing Pages:** Vercel (and previously ZEIT) made
    flashy conference microsites:

-   These often have **background animations tied to scroll or time**
    (like the Next.js conf 2021 site had an interactive 3D card, IIRC).
    They likely lean on **Three.js or GSAP** for those one-off sites.

-   They experiment with new tech: e.g., maybe using WebGL for particle
    effects or using new CSS like `backdrop-filter` for glass morphism
    animations (with caution to performance).

-   Their 2020 Next.js conf page had a floating Vercel logo that
    responded to mouse (that's done via listening to pointermove and
    applying transforms, possibly with a little inertia -- game-like).

-   **Vercel Dashboard:** It's a developer-focused product. We can
    imagine:

-   Deployments list might animate in new entries (a quick slide down).

-   When you trigger a deployment, perhaps a progress bar or an animated
    logo appears (just speculating -- e.g., an animating Vercel
    triangle).

-   They are big on **dark mode** -- animations must work on both
    light/dark. They might do a smooth cross-fade when toggling dark
    mode (some apps do instant switch, others fade colors to reduce
    starkness).

-   Since Vercel is about dev UX, they probably ensure animations don't
    interfere with copying logs or reading outputs -- i.e., minimal use
    in consoles.

In all, Vercel's approach is **pragmatic with moments of flourish**.
They show off on their public pages and ensure their core product is
highly usable (which means performance and not over-animating). The blog
posts we saw indicate a systematic approach: design intent first
("engaging but focus on product, not tour
itself"[\[118\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=We%20designed%20our%20animations%20to,one%20of%20the%20product%20tour)),
then solve technical pieces (timing synchronization, event ordering).

## Figma

**Known For:** *Design tool with complex UI that feels like a native
app, and playful touches in marketing (e.g., config.figma.com sites).*
Figma's web-based design tool is an engineering marvel -- it's heavy on
canvas rendering and likely uses a lot of React for panels. Figma's
animations are more about **transitions in the UI and real-time
feedback**.

-   **Figma Editor (app)**:

-   It uses **WebGL canvas** for the design surface, so moving objects
    in a design is handled by their canvas engine (at 60fps or more).
    But UI panels (layers list, inspectors) are DOM. These have subtle
    animations: expanding a section in the sidebar smoothly reveals
    options (likely height transition or a CSS grid auto-fit with
    transition).

-   Dragging layers in the list likely has a smooth placeholder like
    Linear's (with similar techniques).

-   They implement multi-user cursors -- that's animation too: seeing
    others' cursors move in real-time. They probably throttle position
    updates and use CSS transforms to animate cursor icons moving,
    rather than teleporting each update (so it looks fluid even if
    network updates are 10 per second, they interpolate).

-   **Popovers and menus**: likely animate open/close for polish. For
    instance, the color picker might fade in.

-   **Prototype presentation mode**: When you click "Present" in Figma,
    it transitions to a new tab with the prototype, often with a fancy
    transition (maybe the artboard zooms out/in). That's a direct
    adaptation of a *shared element transition* concept -- the artboard
    you were editing becomes the prototype view. Possibly they do a
    quick scale up or a flip. This is akin to InVision Studio or
    Principle, which have UI animations for going into preview mode.

-   Figma also introduced audio in files -- when someone is
    voice-chatting, colored rings pulse around their avatar. That pulse
    is an animation communicating sound level. They likely used an SVG
    or canvas circle whose radius or opacity oscillates with an easing
    (like a subtle sine wave), giving a sense of live audio. That's a
    neat cross-domain (music visualization) feature in UI.

-   **Figma Marketing & Community:**

-   They use **FigJam** branding with playful animations (e.g., waving
    hand illustration on FigJam homepage). Possibly Lottie or GIF for
    simplicity.

-   Config (their conference) sites often have fun cursor-follow effects
    or interactive elements drawn with their own tool. For instance, a
    past Config site had shapes drawn that animate like a design being
    created. They could have exported those as SVG animations or used
    CSS keyframes to animate strokes.

-   Figma's approach to animation in marketing is more whimsical than
    their product (which is more utilitarian). But even product has
    Easter eggs: try Konami code in Figma -- at one point it made
    rainbows puke from unicorn (a pure fun animation using canvas). This
    shows even serious products can include delight (just hidden for
    those who look).

**Accessibility in Figma's UI:** They have a lot of keyboard shortcuts
and likely a limited set of motion (because it's a professional tool).
They probably ensure *no vital info is conveyed by animation alone*
(WCAG rule). E.g., if a tutorial arrow jiggles to point somewhere,
there's likely text too. Or if something new is introduced, it might
highlight (with a border) in addition to maybe pulsing.

**Performance:** Figma is known to handle large files smoothly. They
probably avoid any layout-thrashing animations in heavy views.
Canvas-based animations (like moving objects) they optimize via graphics
programming. They likely cap any decorative animations when things get
busy (for instance, if many objects moving, they might temporarily
disable some subtle UI flourishes to keep core interactions smooth).

**Summary of Case Studies Insights:**

-   **Linear:** Masterclass in minimal, purposeful motion to amplify a
    lightning-fast UX. Emphasize performance, small microinteractions,
    game-like smooth drag/drop.
-   **Stripe:** Pushing creative boundaries on web, essentially bringing
    motion design and cinematography to web experiences. Also
    integrating engineering rigor to keep those elaborate animations
    smooth (lots of custom solutions, WebGL, etc.). In product UIs,
    still polished but toned down (since money is serious).
-   **Vercel:** Balanced approach -- showcasing capabilities (their own
    and the web's) with modern, bold animations (using React/GSAP
    combos), while keeping enterprise UI straightforward with subtle
    polish. Very open about avoiding gratuitous animations that don't
    serve the user.
-   **Figma:** Demonstrating that even heavy, complex web apps can feel
    native by using animations intelligently to convey state (small
    transitions, feedback loops) without hampering the user. And
    sprinkling delight where appropriate (as a design tool, they know
    the value of a good animation, but also the cost of a bad one).

Each of these companies validates our principles: **focus on user and
purpose**, **optimize relentlessly**, and **use animation as a tool for
storytelling and feedback, not decoration**. They also show that
technical excellence (like proper state management, GPU use, etc.) is
critical to deliver the intended design vision.

With case studies in mind, we can now form a **decision framework** for
when and how to apply certain patterns, and in the final sections,
discuss common pitfalls to avoid and strategic constraints to use when
planning animations at a high level.
