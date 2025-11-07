# 3. Creative Mindset & Planning Methodology (Brainstorming World-Class Animations)

**Prerequisites:** Sections 1 and 2 (principles of purposeful,
perceptible motion).

Creating world-class animations requires a **creative mindset** that
blends imagination with first-principles discipline. Premium teams don't
stumble upon great interactions by accident -- they use deliberate
methodologies to brainstorm and refine ideas. Here we cover how to think
like a *creative technologist*, planning spectacular yet purpose-driven
animations.

-   **Start with Storyboards & Narrative:** Just as filmmakers
    storyboard scenes, interaction designers sketch out the key states
    of an animation sequence. **Storyboarding UI animations** means
    visualizing the interface at significant moments (before, during,
    after an interaction) and the transitions between
    them[\[30\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Concepts%20and%20references).
    For example, if you're designing a multi-step product tour (like
    Vercel's), draw each step and how the tooltip moves or changes. This
    helps ensure the animation supports a narrative: what does the user
    need to understand at each moment? Many creative teams treat UI
    changes as mini "story beats" -- ensuring the animation highlights
    the right element (the protagonist) at the right time. Brainstorm by
    drawing or prototyping multiple variations. In Linear's redesign,
    designers created *hundreds of screens and linked them as
    prototypes* to explore flows before
    implementation[\[31\]](https://linear.app/now/how-we-redesigned-the-linear-ui#:~:text=to%20assess%20their%20functionality).
    This exploratory mindset allows wild ideas that can later be culled
    or refined.

-   **Cross-Domain Inspiration:** Top designers actively seek
    inspiration beyond the web/UI world. It's common to **draw from
    film, games, art, and even dance** (more in Section 9). For
    instance, a team might watch sci-fi movie interfaces for ideas on
    futuristic transitions, or study game UX for snappy feedback loops.
    As one designer put it, "I look for references -- not necessarily
    animations, sometimes layouts or pictures -- latch onto details and
    develop my own idea based on their
    story"[\[30\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Concepts%20and%20references).
    Using services like Are.na or Pinterest to collect motion
    inspiration is a common
    practice[\[30\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Concepts%20and%20references).
    This ensures your brainstorming isn't limited to what you've
    personally seen in apps. Perhaps a musical rhythm inspires a timing
    pattern (e.g. a progressive onboarding that feels like a waltz: step
    1, 2, 3... pause... repeat). Or a piece of *motion graphic art*
    inspires an unexpected way to reveal content. The key is **exposure
    to lots of ideas**, then filtering them through the lens of your
    product's goals.

-   **Collaborative "Yes, and..." Ideation:** Premium animation is often
    born from tight designer--developer collaboration. Adopting a
    **"yes, and..." mindset** (borrowed from improv theater) during
    brainstorming helps. Designers might propose an outrageous concept
    ("what if the footer is endless and plays a visual illusion?") and
    instead of dismissing it, engineers iterate on how it might
    technically work (e.g. Stripe's endless footer that draws
    "DEVELOPERS" on
    scroll[\[32\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=The%20design%20comps%20included%20the,never%20reach%20the%20end%20of)[\[33\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=The%20result%20is%20a%20canvas,long%20enough%20to%20see%20it)
    came from this kind of playful collaboration). Stripe's Stripe.dev
    team described how once the initial concept was approved, designers
    and engineers created "opportunities for each other" -- designers
    channeled engineers' obsessions into user improvements, and
    engineers used code to generate variety beyond static
    design[\[34\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=Collaborative%20creative%20process)[\[35\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=what%20our%20teammates%20care%20about,into%20the%20design%2C%20on%20repeat).
    This back-and-forth often yields ideas neither party would have come
    up with alone (the designer brings aesthetic vision, the engineer
    suggests dynamic or interactive twists). In practice, this might
    mean a developer builds a quick prototype of an animation idea and
    the designer then fine-tunes the feel.

-   **Ideate First, Then Edit:** During brainstorming, it's crucial to
    let ideas flow without immediately nixing them for feasibility.
    *Everything is a creative opportunity* -- perhaps an unconventional
    transition could become a signature delight in the
    product[\[36\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=Image%3A%20Art%20direction%20Art%20direction).
    Generate a range of ideas from mild to wild. Linear's team, for
    example, might brainstorm a crazy particle explosion on task
    completion -- not to actually implement literally, but to see if
    there's a kernel of value (feedback/delight) that can be achieved in
    a subtler way. After ideation, apply constraints and first
    principles as a filter: which ideas serve a user purpose and fit
    technical limits? This is akin to a divergent phase (lots of ideas)
    followed by a convergent phase (selecting the best). **During
    selection, refer back to the narrative and principles**: does this
    animation help usability (e.g. guide user or provide feedback)? Does
    it align with brand personality? Is it going to perform at 60fps?
    This is when you might say "that 3D flip idea is cool but too slow
    for daily use -- what if we only use it in a tutorial context where
    the user expects to wait a second between steps?"

-   **Plan with States and Transitions (State Diagrams):** A more
    technical planning tool is to draw state machine diagrams for
    interactive components. Identify key states (e.g. closed, opening,
    open, closing for a modal) and events (user clicks open, or presses
    escape to close). Then *plan the animation for each transition*.
    This ensures coverage of all cases. Many bugs or awkward motions
    happen when designers forget an intermediate state (like what if the
    user triggers open again while it's closing -- does it reverse
    smoothly or snap?). By mapping it out, you can decide, for example,
    to disable input during certain transitions or to animate
    interruption gracefully. When planning something like a complex tour
    or sequence, **timeline diagrams** can help -- essentially mapping
    animation progress vs. time or vs. scroll position. For scroll-based
    choreography, you might create a storyboard where each panel
    corresponds to a scroll checkpoint (e.g. at 25% scroll, element A
    fades in; at 50%, element B slides up, etc.). This becomes a
    blueprint to implement either via code or tools.

-   **Brainstorm with the Medium (Prototypes):** Often, seeing is
    understanding. Premium teams build quick prototypes in tools like
    Principle, After Effects, or web CodePens to test an animation
    idea's feel. Figma's built-in smart animate can prototype simple
    state transitions. Tools like **Rive** allow designing interactive
    state machine animations
    visually[\[37\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Essentially%2C%20there%20are%20two%20modes,which%20the%20main%20ones%20are)[\[38\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=I%20created%20timelines%20for%20each,corresponds%20to%20its%20own%20timeline).
    For example, a designer might use Rive to create a button with hover
    and press states to fine-tune the bounce effect. These prototypes
    are invaluable when communicating to developers or getting
    stakeholder buy-in. They answer "would this actually look good?"
    early on. The key is **iterating rapidly** -- treat prototypes as
    disposable experiments. Linear's team explicitly avoided big
    "workshops" and instead one designer would prototype an idea one
    day, test it, and the next day try an
    alternative[\[39\]](https://linear.app/now/how-we-redesigned-the-linear-ui#:~:text=Image%3A%20Inverted%20L%20navigation%20highlighted).
    This rapid cycle finds what works and what doesn't.

-   **Focus on Emotions & Habits:** A creative mindset also considers
    the *emotional impact* and habit formation. Ask "How do we want
    users to feel?" A celebratory animation might aim for delight (e.g.
    confetti on achieving something), whereas a utility animation (like
    a drag-and-drop placeholder expansion) should instill confidence and
    clarity. Also, consider long-term use: animations can train user
    habits. If every time I drag an issue in Linear a subtle shadow
    indicates where it will drop, I learn to rely on that feedback -- it
    becomes a habit that improves my efficiency. When brainstorming,
    think about first-time wow vs. everyday usefulness. Stripe's
    marketing pages often include one big wow (like a 3D
    globe[\[40\]](https://stripe.com/blog/globe#:~:text=For%20the%20new%C2%A0stripe,operations%20and%20expansion%20every%20day)
    or interactive demo) that captures the imagination, whereas the
    Stripe dashboard UI uses very minimal motion (because the wow would
    wear off and users value speed for daily tasks).

-   **Document and Communicate:** Creative planning isn't just internal
    -- it's communicated to the team and even to AI models (in our
    context). World-class teams often produce **motion guidelines** or
    design system documentation for motion. This might include
    recommended easing curves, standard durations for certain types of
    UI elements, and dos and don'ts. For example, Google's Material
    Design provides guidelines like "fast in, out, standard easing" for
    certain interactions. Internally, companies like Microsoft and IBM
    have motion design languages that designers refer
    to[\[17\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Consistency)[\[41\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Continuity).
    As you brainstorm, tie ideas back to any established guidelines or,
    if none exist, consider if your project is defining its own language
    that should be codified. This ensures consistency across the product
    and helps developers implement correctly. A simple spreadsheet of
    "Component X -- animation when appearing, duration, easing,
    reference example" can serve as a spec after the brainstorming
    phase.

In essence, the creative mindset for premium animations is **open and
explorative, yet grounded in user needs and first principles**. It's a
dance between imaginative art direction and rigorous UX discipline.
Brainstorm broadly -- think like a filmmaker, game designer, and
engineer all at once -- then refine pragmatically. Remember, as one
Stripe designer quipped, *"the work we had to do (requirements) and the
work we 'had to' do because it was fun"* often
intermingle[\[42\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=rare%20book%20library%20en,do%20because%20it%20was%20fun).
The best teams inject playful creativity *as long as it ultimately
serves the user*. With a solid plan in hand, the next step is to apply
visual design principles to ensure those ideas are polished and visually
consistent -- that's up next.
