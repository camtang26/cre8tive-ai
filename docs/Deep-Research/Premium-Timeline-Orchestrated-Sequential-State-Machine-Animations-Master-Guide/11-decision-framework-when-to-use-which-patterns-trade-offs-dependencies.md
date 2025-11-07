# 11. Decision Framework (When to Use Which Patterns, Trade-offs, Dependencies)

**Prerequisites:** Sections 5--10 (understanding of various animation
techniques and contexts).

Not every animation pattern suits every scenario. Expert teams use a
**decision framework** to choose the right approach based on context,
user needs, and constraints. Here we outline a step-by-step framework
and key decision points, highlighting trade-offs and dependencies:

**Step 1: Clarify the Goal of the Animation.** Ask: *What problem does
this solve or what benefit does it provide?* If the goal is **functional
(e.g., guide user attention, indicate state change)**, lean toward
simple, fast animations that emphasize clarity (e.g., highlight, fade,
resize). If the goal is **emotional (e.g., delight, brand
personality)**, you have more leeway to use expressive animations (e.g.,
playful bounces, unique easings) -- but still ensure they don't impede
function. If neither functional nor emotional justification exists,
*consider not animating at
all*[\[5\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=That%27s%20why%20all%20animation%20must,like%20it%20was%20always%20there).
This initial filter prevents gratuitous animations.

**Step 2: Identify the Interaction Pattern.** Different interaction
types call for different patterns: - **Static state change (no user
input ongoing)** -- e.g., showing a new view after clicking a button.
*Use:* state-driven or timeline animations. E.g., route transitions: use
a CSS/JS **view transition API** or orchestrate a timeline to animate
out old and in new content. If it's basically a UI mode switch, consider
the new **ViewTransition API** (if supported) for a quick win -- it
handles shared element transitions
automatically[\[121\]](https://developer.chrome.com/docs/web-platform/view-transitions#:~:text=The%20View%20Transition%20API%20gives,different%20views%20on%20your%20website).
If not available, decide if a simple fade (ease-out) is enough (fast and
safe), or if a more complex transition is worth it (e.g., element
sliding to new position via FSM and timeline). - **Continuous
interaction (drag, scroll)** -- here animation is coupled with input.
*Use:* direct manipulation patterns. E.g., dragging an item: no
timeline; instead use pointer events + `requestAnimationFrame` to move
element with pointer (for responsiveness). For scroll, use passive
Observers/triggers (Section 7) or CSS Scroll Timeline if
available[\[71\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%3E%20The%20CSS%20animation,as%20users%20navigate%20a%20webpage).
The decision often is *library vs custom*: For drag, you might use a
library (Framer Motion's drag API or React DnD) if it handles physics
and constraints -- good if you need inertia or snap (like game UI). For
scroll, if needs are simple (reveal things), don't over-engineer:
IntersectionObserver is enough. If you need fancy parallax tied to
scroll progress, and broad browser support, GSAP ScrollTrigger (a
well-tested lib) is a High confidence choice (mature, used by Stripe
etc.). If you want to minimize JS and can accept limited support, try
the new CSS scroll-driven animations (Medium confidence, emerging
tech)[\[122\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=Best%20Practices).
- **System-driven sequence (tours, onboarding)** -- these run on their
own timeline. *Use:* FSM to manage states (steps) + timeline to animate
each step. Or use a full storytelling library if heavy (like slideshow
libs). Decision points: If you need dynamic branching (user can skip
steps), definitely use an FSM/state chart -- easier to handle user
events. If linear sequence, a simple chained promise timeline might
suffice. Accessibility: ensure the framework you choose can be paused or
user-controlled if content is substantial (WCAG 2.2.2 requires an easy
way to pause animations that last
\>5s)[\[123\]](https://accessibilitycraft.com/104-wcag-pause-stop-hide-prefers-reduced-motion-fallout-nuka-cola-quantum/#:~:text=104%3A%20WCAG%20Pause%2C%20Stop%2C%20Hide,sufficient%20for%20meeting%20this%20guideline).
So for a tour, either make each step user-advanced (preferred, giving
control) or provide a \"pause tour\" button if it auto-plays. That
decision ensures compliance.

**Step 3: Consider Performance Constraints & Platform.** Identify if the
target is web, mobile (web), or perhaps desktop electron (like Figma).
On low-power devices, favor simpler CSS animations (HIGH confidence in
their efficiency) over heavy JS. E.g., an overlay opening: on desktop, a
blur+scale might be fine (modern CPUs/GPU can handle one big blur), but
on mobile that blur could jank. Decision: maybe avoid blur on mobile via
a media query (use a solid background instead). Another performance
decision: **how many elements animate at once?** If many (like hundreds
of particles), go canvas/WebGL route (HIGH confidence for many objects)
and not DOM elements (Low performance if too many). If just a few
elements, DOM/CSS is easier and performant enough. Also consider
development resources: if you have skilled WebGL devs (like Stripe did
for
globe[\[14\]](https://stripe.com/blog/globe#:~:text=If%20we%20had%20known%20precisely,3D%20graphics%20development%20substantially%20easier)),
go for the cutting edge when needed. Otherwise, stick to known patterns
(CSS, GSAP) to avoid getting stuck. It\'s a trade-off: advanced custom
tech can wow (High reward) but might cost more dev time and risk (Low
maintainability if only one dev knows it). So decide based on team skill
and project importance.

**Step 4: Choose Animation Technique & Tools.** Summarizing some
trade-offs: - **CSS Transitions vs JS-driven:** CSS transitions (and
animations) are declarative, letting the browser optimize (HIGH
confidence in smoothness if only transforms/opacity). Use them for
straightforward state changes triggered by class toggles. Downside: less
dynamic control (can't easily reverse mid-way or adjust on the fly).
JS-driven (like using WAAPI or GSAP) gives fine control, dynamic
timelines, and complex easing or physics (needed for interactive and
orchestrated sequences). But that adds runtime overhead and complexity
(though GSAP is highly optimized). **Decision rule:** If the animation
is a simple one-off effect on known properties (e.g., dropdown
open/close), CSS is sufficient and simpler. If animation involves
multiple phases, conditional logic, or needs to be canceled/changed
based on user input, use JS (with a library or custom). - **GSAP vs
Framer Motion vs Homegrown:** All are capable. GSAP (GreenSock) is an
imperative timeline powerhouse, great for marketing pages, not tied to
React (works anywhere). Framer Motion is React declarative, great for
component-level animations and orchestrating via variants, and has
gesture support. If you're already using React and want to animate
within it, Framer Motion is a strong choice (HIGH confidence in React
community). GSAP can do everything but introduces an imperative paradigm
(manageable though). Homegrown (using WAAPI or React Spring) gives you
full control but you reimplement wheels (unless you specifically need
spring physics, where React Spring shines). Consider team familiarity:
Many devs know GSAP well (since old Flash days), some prefer Framer for
React. Both are proven in production (Stripe uses GSAP on web, many
product UIs use Framer Motion). **When to use state-machine libs like
XState:** If you find your animation sequence has many conditional
branches or persistent states (like complex tour or interactive
component with many modes), then bringing XState (HIGH reliability for
complex logic) can save you bugs. But if it's straightforward
(open/close), XState is overkill -- simpler useReducer or state toggles
suffice. - **Springs vs Keyframes:** Spring physics (offered by Framer
Motion, React Spring) create natural feeling transitions that adapt if
interrupted. Use springs for **interactive, interruptible interactions**
-- e.g., dragging and releasing an element to snap into place (it will
bounce naturally). Also for overscroll or toggles that you want to feel
organic. Keyframe-based (CSS or GSAP timeline) are deterministic and
fine for preset sequences. Use keyframes for **scripted animations**
(marketing reveals, icon spins, etc.). If your UI needs to respond
mid-animation (like user can toggle quickly and you want animation to
reverse smoothly from current point), springs handle that seamlessly
(HIGH confidence). Keyframe transitions can do it but require manual
logic (as we did with the modal FSM Example 8.3 -- we essentially
mimicked spring behavior by allowing immediate direction change). - **3D
/ WebGL vs DOM:** If you need 3D (like Stripe globe), obviously use
WebGL (HIGH fidelity). But that requires expertise. If an effect can be
faked in 2D with transforms (like 3D-esque card flip using CSS 3D
transform), prefer that -- easier to implement and widely supported. Use
WebGL for heavy particle effects, complex shaders, or when DOM/CSS can't
achieve the look or performance. The trade-off: WebGL has a heavier
initial load (libraries, possible compatibility issues, more power
usage) -- only justify if visual payoff is significant.

**Step 5: Factor in Dependency Chains and Team Workflow.** Animations
often rely on assets or design input: - If using Lottie (animation from
After Effects), you depend on designers to provide JSON. Decision: use
Lottie for complex shape animations if designers are proficient in AE
(HIGH quality results). If no design asset and shape is simple (like a
checkmark drawing itself), it might be easier to code an SVG line
animation by hand. Also consider dependencies like frameworks: if your
app is already heavy, adding a big lib for one effect might not be worth
it (e.g., adding GSAP 100KB for one tiny animation -- maybe do it in CSS
or with smaller lib). Conversely, if you plan multiple rich animations,
that 100KB is justified. - Team skill dependency: If no one on team
knows CSS keyframe well but they know Framer Motion, then even if CSS
could do it, maybe choose Framer for productivity (and consistency).
*Consistency across team* is important: a decision framework should aim
for a limited set of approaches in a codebase (if half the animations
use Motion, and half use raw CSS, it can become inconsistent or one set
gets neglected). So also think **strategically**: pick a primary
animation strategy for product UI (e.g., "We will handle most component
animations with Framer Motion, and use CSS for trivial hovers"), and
ensure exceptions are rare.

**Step 6: Accessibility and User Preference Check (Go/No-go Gates):** At
each decision, include: *Does this pattern respect*
`prefers-reduced-motion` *and ARIA needs?* If a chosen approach makes it
hard to, say, pause or skip (e.g., pure CSS animations are harder to
dynamically turn off for reduced-motion except via media queries),
ensure you have a solution (like adding the media query as in our
examples). If not, maybe pick a more controllable approach (JS-driven
where you can disable easily). **Ensure the chosen implementation can
deliver fallback behavior**: - If an animation fails (e.g., a WebGL
context fails to load), do you have fallback content? If using CSS fancy
new features, is it okay if it doesn't work (maybe things just don't
animate, which is acceptable)? You might decide not to rely on an
animation if it's conveying critical info unless there's a no-animation
equivalent (like also an icon change or text change). - For any
*non-trivial animation (\>5s or repeating)*, plan a "Pause/Stop" control
as per
guidelines[\[123\]](https://accessibilitycraft.com/104-wcag-pause-stop-hide-prefers-reduced-motion-fallout-nuka-cola-quantum/#:~:text=104%3A%20WCAG%20Pause%2C%20Stop%2C%20Hide,sufficient%20for%20meeting%20this%20guideline).
If using a library, check if it can respond to `prefers-reduced-motion`
globally (Framer Motion can globally reduce motion; GSAP you can
conditionally disable certain animations).

**Step 7: Evaluate the Trade-offs (Table):** Here's a quick reference: -
**FSM vs Timeline:** FSM excels at handling many possible states and
transitions (HIGH complexity scenarios). Timeline excels at linear
choreography (HIGH control on time). They aren't mutually exclusive
(often combined). Use FSM when user can trigger things in unpredictable
order or when you need to ensure certain sequences only happen in
certain states. Use a simple timeline when the sequence is fixed and
user isn't interrupting (like an intro animation). - **Immediate vs
Staged Response:** E.g., clicking a button -- should you instantly
change state or play an animation first then change? If speed is
essential (like marking an email read), do the state change immediately
(optimistically), and use animation purely as cosmetic (like fade the
email out). If understanding is essential (like destructive action),
maybe stage it: play a quick confirm shake or "item flying to trash"
animation then finalize (giving user a moment to see it happen and maybe
undo). The decision here balances *speed vs clarity*. Linear tends to
immediate; Apple sometimes does slight delays for flourish. Consider how
critical the action is and user expectations (most enterprise apps favor
immediacy). - **User Control vs Automation:** Should an animation
auto-advance or require user action? E.g., carousels auto-sliding vs
manual. The trend for UX is give control (auto-slide often annoys and
accessibility hates it because it moves content automatically). So
default to manual progression unless there\'s a strong case (like a
background slideshow purely decorative). If auto, provide controls
(pause, next, etc.). Many product tours now are manual (press next)
rather than old-school auto-advancing -- that's a decision pivot
influenced by user preference.

**Step 8: Document the Decisions & Rationale.** A good framework has
traceability. For each major animation in the product, you might
document: *Chosen pattern & tool, reason, alternatives considered.* For
instance: "Modal open/close -- **Decision**: use CSS transition on
opacity/transform with class toggle via React state. **Reason**: simple
two-state animation, needs no interruption, CSS is lightweight and
sufficient. Alt considered: Framer Motion -- rejected because overhead
and not needed for this case. Ensured supports reduced-motion by
removing transition if requested." This helps future maintainers and AI
models to follow consistent patterns and not re-invent unless
requirements change. It's also useful for an AI being trained -- seeing
rationale reinforced across examples builds intuition.

**Common Scenario Decisions:**

-   **Small UI control (toggle, accordion):** Use CSS or minimal JS. FSM
    not needed (two states). Ensure ARIA (e.g., `aria-expanded` toggling
    alongside).

-   **Page transition:** If single-page app, consider the new
    ViewTransition API (HIGH reward, as it automatically animates
    elements between states, but support is emerging -- currently
    Chrome-only in 2025). If broad support needed, either do a simple
    fade or implement your own shared element transition via cloning
    elements (Low-level, high complexity, so often skipped). Tools like
    Framer's AnimatePresence can handle page fade or slide nicely (with
    variants).

-   **Complex component (e.g., multi-step form):** FSM recommended to
    manage steps, with animations on transitions. Use vertical motion or
    progress bar to show progression (like each step sliding left).
    Decision: slide vs fade vs instant? Slide implies spatial continuity
    (like a wizard horizontally). Fade is simpler but less informative
    of direction. If steps are linear and user can go back, a slide
    (with reverse on back) gives a clear sense of direction, albeit
    slightly slower. If performance on mobile is a concern, fade might
    be safer (no large movement). Weigh clarity vs performance: maybe
    slide with reduced distance (not offscreen, just a subtle slide) to
    minimize jank. Test on target devices.

-   **Notifications:** Pop in/out -- likely fade/slide from edge.
    Decision: if multiple can stack, stagger their entrance to avoid
    overlap cognitive load (Material does this). Use CSS for a simple
    one, or a small JS to stagger multiple.

**Confidence levels and Emerging Patterns:** - **HIGH confidence (widely
proven):** CSS transitions for transforms/opacity, GSAP timelines on
scroll, Framer Motion for React UI, IntersectionObserver for triggers,
FLIP technique for reorders, and respecting reduced-motion -- these have
been used by many (Linear, Stripe, etc.) and should be first choices. -
**MEDIUM confidence (emerging or niche):** CSS
`animation-timeline: scroll()`[\[71\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%3E%20The%20CSS%20animation,as%20users%20navigate%20a%20webpage)
and ViewTransition
API[\[121\]](https://developer.chrome.com/docs/web-platform/view-transitions#:~:text=The%20View%20Transition%20API%20gives,different%20views%20on%20your%20website)
-- game-changing but not fully adopted yet. If your user base is known
to use latest Chrome mostly (e.g., an internal tool), you might start
adopting these for cleaner code. But for a public site, have fallback
since not all browsers have them by 2025. XState usage in UI animations
is medium -- some swear by it for complex flows, but it adds complexity
if team not familiar. So use it when complexity truly justifies (like a
design tool's mode switching). - **LOW confidence (experimental or heavy
trade-off):** heavy use of video animations (MP4 sequences) unless
needed -- video can achieve complex effects but is not interactive,
large in size, and doesn't adapt (not responsive to theme, etc.). Only
consider if you need photorealistic or very intricate pre-rendered
motion (then optimize with short loops or user-triggered playback).
Another low-confidence pattern: scroll-jacking libraries that override
scroll behavior (users often dislike losing native scroll; use only in
very controlled storytelling experiences and still provide an escape or
alternate content).

Finally, **Step 9: Re-evaluate with user feedback.** Any framework must
be iterative. After implementing an animation with chosen pattern,
gather user or team feedback: Did it meet the goal (Step 1)? If users
find it confusing or it causes perf issues, you might pivot -- e.g.,
drop a fancy animation for a simpler one. Always loop back: the
framework informs initial decisions, but real data might adjust them.

This decision framework ensures animations are not picked arbitrarily
but through a lens of *purpose, context, and practicality*. It helps
maintain coherence: the product will have a consistent animation style
because decisions follow the same criteria each time, rather than each
dev doing something different. Consistency and appropriateness are what
make world-class products feel cohesive and intentional in their motion
design.
