# 9. Cross-Domain Techniques (Film, Music, Game Design, Dance Principles Adapted to Web)

**Prerequisites:** Sections 1--4 (foundation and design principles),
plus an open mind to analogies.

The best animation designers often draw principles from other domains:
**film and video editing, music composition, game design, even
choreography/dance**. These fields have rich traditions of orchestrating
motion and engagement. Adapting their techniques can elevate web
animations from good to extraordinary. Let's explore key cross-domain
principles and how to apply them in web/product UI contexts.

-   **Film Editing -- Cuts and Transitions:** As mentioned in Section 1
    and in the Haley Park article, film has the concept of **"invisible
    cuts"** where viewers don't notice the edit because it's done on
    action or matched on
    emotion[\[99\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=satisfies%20all%20the%20following%20six,criteria)[\[100\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=So%20emotion%2C%20story%2C%20and%20rhythm,above%20animation%20examples%20meet%20them).
    In UI, this translates to **smooth state transitions**. For example,
    when the user navigates from a list view to a detail view, a "hard
    cut" (instant switch) might disorient. Instead, a shared element
    transition (the clicked item expands) is like a film dissolve or
    match cut -- it maintains continuity of visual elements so the
    user's brain follows the
    story[\[25\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=How%20are%20our%20brains%20capable,of%20visual%20input%20into%20cuts)[\[101\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Instagram%20iOS%20app%E2%80%99s%20%E2%80%9CSave%20to,Collection%E2%80%9D%20animation).
    Film editors also remove unnecessary travel time: they cut out
    boring parts of actions (you often don't see a character walking an
    entire hallway -- you cut to them arriving). Similarly in UI, don't
    animate every single pixel of movement if it's not necessary. The
    **lesson of Walter Murch's six editing criteria** (Emotion, Story,
    Rhythm, Eye-trace, Two-dimensional plane, Three-dimensional space)
    is
    instructive[\[99\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=satisfies%20all%20the%20following%20six,criteria).
    Do UI animations respect the user's emotion/state? (E.g., don't use
    a playful bounce when user is doing a serious data delete -- tone
    mismatch.) Do they advance the "story" of the interaction? (If an
    animation doesn't add new info or reinforce a relationship, maybe
    cut it.) Is the rhythm right for the context? (Fast cuts in a calm
    setting are jarring, like Duolingo's slow +1 animation in a
    fast-paced app felt
    off[\[102\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Rhythm%3A%20In%20the%20Duolingo%20example%2C,would%20feel%20out%20of%20place).)
    Eye-trace: ensure your animation guides the eye to where it needs to
    focus
    next[\[103\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=3,in%20relation%20to%20one%20another).
    E.g., highlight or motion should lead to the next actionable
    element. Film also embraces **montage** to compress time or **slow
    motion** to emphasize a moment. In UI, we can compress time by
    skipping intermediate states (like instant feedback instead of
    showing a lengthy progress if it's nearly instant anyway), or
    emphasize a critical response (maybe slow down a success checkmark
    animation slightly so it feels satisfying and noticeable, akin to a
    slow-motion triumph scene). And as noted, film shows you don't
    always need a literal travel -- jump cuts can work if context is
    clear[\[104\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=That%E2%80%99s%20probably%20why%20we%20never,from%20point%20A%20to%20B).
    Some modern UIs use **quick cuts**: for instance, a mobile tutorial
    might instantly jump through a sequence of states rather than
    panning between them, relying on the user's brain to connect the
    dots (especially if accompanied by explanatory text).

-   **Music and Rhythm -- Timing & Emotion:** Music composition teaches
    us about **tempo, rhythm, dynamics, and motifs**. A user flow can be
    seen like a piece of music: it has a beginning, a build, a climax,
    an end. Good UI animations follow similar arcs. For example, a
    checkout process could start calm (steady small micro-interactions),
    build up (progress bar fills, anticipation animations as payment
    processes), and culminate with a "success" animation flourish (the
    cymbal crash!). **Rhythmic patterns**: music often uses counts (4/4
    time, etc.) -- in UI, while not literal seconds, a pattern like
    "short-short-long" animations can create a pleasing rhythm. E.g.,
    two quick subtle animations and then one slightly longer highlight
    can feel intentional. Consider **beat and off-beat**: a perfectly
    uniform cadence might be boring (like monotone), but a syncopated
    one surprises delightfully. Perhaps when revealing list items on
    scroll, rather than each 100ms apart, do a little "stutter" rhythm
    -- first few close together, then a tiny pause, then the next -- to
    avoid robotic regularity. Another concept is **crescendo and
    decrescendo**: gradually intensifying or relaxing. In an interactive
    demo, you might start with very subtle animations and make them more
    intense as the user progresses to big features (crescendo), then a
    gentle ending (decrescendo) so the experience doesn't end abruptly.
    This keeps users engaged much like a song building up. **Melody and
    motif**: repeating a small animation motif can tie a design
    together. For instance, maybe your brand has a distinctive easing or
    animation (like Material Design's outgoing elements often shrink and
    fade -- that becomes a motif). Repeating that like a chorus creates
    familiarity. Music also teaches **rest is as important as notes** --
    the pauses make the music. Similarly, do not be afraid to have
    moments with *no animation*. Constant motion is fatiguing; just as
    constant sound is noise. Strategic stillness (like a beat of pause
    after an intense animation) gives users a moment to breathe and
    cognitively catch up. It's akin to white space in design or a rest
    in music.

-   **Game Design -- Interactive Feedback and State Machines:** Games
    are masters of real-time interaction feedback (because players
    demand responsiveness). Games use **finite state machines
    extensively for character
    animations**[\[62\]](https://docs.unity3d.com/6000.2/Documentation/Manual/AnimationStateMachines.html#:~:text=Animation%20State%20Machine%20,%C2%B7%20State%20Machine%20Transitions),
    which we've applied in Section 5/8. But beyond that, games emphasize
    **anticipation, action, result** loops (as described in "12
    principles of animation" by Disney, which game animators follow).
    Applying *anticipation* in UI: before a heavy action, give a slight
    anticipatory motion -- e.g., a delete button might do a tiny "nudge"
    when hovered, hinting "this is important" (like a character pulling
    back a fist before punching). **Game feel** concept: small
    animations (screen shake on an explosion, particle effects on a hit)
    make actions satisfying (this is referred to as "juiciness"). In UI,
    subtle analogs could be: a slight shake on an incorrect password
    field (common pattern imitating a head shake "no") -- that's
    essentially applying a game hit animation to an error state, giving
    feedback with personality. Or a gentle confetti burst when you
    complete a goal (some productivity apps do this, borrowed straight
    from casual games). Games also implement **timing windows** (e.g.
    combos if you hit actions with rhythm). For UIs, consider rewarding
    timely action: maybe a quicker-than-expected completion triggers a
    special animation (this is rare in apps, but could be playful easter
    egg). Another cross-over is **camera movement vs scroll**: in games,
    camera (view) moves to reveal new areas; in web, user scroll is like
    moving the camera on content. Game designers script camera motion
    carefully -- similarly, some sophisticated web experiences script
    scroll progression (e.g., snapping sections, parallax backgrounds
    moving slower to create depth -- parallax originates from 2D games
    background techniques). **NPC AI via State Machines**: Not directly
    animation, but the way games structure AI state can inspire complex
    UI flows (like multi-step tours, which we handled with FSM in
    Section 5 and example). Thinking in those terms, each UI "NPC" (like
    a tooltip or wizard) can be state-driven and predictable.

-   **Choreography and Dance:** Choreography is about coordinating
    multiple dancers (or body parts) in space and time. In UI terms, the
    "dancers" are your UI elements. A well-choreographed interface
    ensures elements move in relation to each other gracefully, not
    randomly. One principle: **leading and following** -- in a dance
    troupe, one dancer might lead a motion and others follow
    milliseconds after, creating a wave. In UI, if a dialog appears with
    several child elements, don't animate them all simultaneously;
    perhaps the container (the dialog) slides in (the lead), and its
    child buttons or fields fade in slightly after (the followers). This
    staging feels
    natural[\[26\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Sequence%20%26%20stagger).
    Another concept: **formations** -- dancers form shapes that are
    pleasing. UI analogy: the overall composition of moving elements
    should have balance. E.g., if something flies out to the right,
    perhaps another element slides slightly to the left to
    counterbalance, maintaining visual equilibrium (Material Design
    hints at this in choreography guidelines about outgoing/incoming
    elements
    coordinating)[\[24\]](https://m2.material.io/design/motion/choreography.html#:~:text=Don%27tDon%27t%20animate%20multiple%20elements%20simultaneously,for%20attention%20and%20divide%20focus).
    Also, **avoid collisions** -- dancers are trained not to bump;
    similarly, UI elements should not awkwardly overlap during motion
    unless intentional (use z-index thoughtfully and maybe shrink
    elements if they must pass over each other to avoid heavy
    occlusion). In dance, transitions between scenes often involve
    *everyone exiting one side while new enter from another* to direct
    audience focus. UI can do similar: e.g., old content animates out to
    the left while new comes from right, indicating replacement. This
    dual motion can be tricky but when done right, it's elegant
    (Material's shared element transitions often do outgoing and
    incoming element
    choreography)[\[105\]](https://m1.material.io/motion/choreography.html#:~:text=Multiple%20shared%20elements,Some%20elements%20may).
    **Flow and energy**: choreographers think about the energy level --
    high-energy jumps vs slow, fluid moves. Similarly, match the energy
    of animation to context: a fun empty state might have a playful
    bounce = high energy, whereas a form submission might just have a
    subtle spinner = controlled energy.

-   **Theater and Storytelling:** (Not explicitly asked, but related) --
    Think of telling a story through motion. Linear's brand videos or
    Stripe's product demos often essentially "storyboard" a tiny
    narrative: first show problem, then reveal solution, then climax
    with product hero shot. In UI animations, micro-stories exist: e.g.,
    clicking a button triggers an animation that morphs the button into
    a loader (story: user initiated action -\> system responding), then
    loader becomes a success checkmark (story: action completed
    successfully). That is a 3-act story in 2 seconds. By thinking of it
    narratively, you ensure clarity (the user can follow the
    cause/effect). Pixar's principle "animation is personality" can
    apply -- e.g., give your brand some character in how things move
    (maybe your app's animations are all very bouncy if your brand is
    jovial, or very sleek if brand is professional).

-   **Psychology & Magic (bonus):** Magicians use misdirection and
    reveals; UI animations can use similar ideas -- e.g., draw attention
    somewhere (misdirection) then change something elsewhere subtly if
    needed. But be careful: magic tricks in UI (like hiding a loading by
    distracting user) can be risky if overdone. Still, one example:
    skeleton screens misdirect user to focus on loading placeholders so
    they feel content is coming, reducing perception of wait (like a
    magician showing one hand moving while the other does the trick).
    Not cross-domain artistic, but interesting.

In practice, these cross-domain inspirations should be used *to enrich
your design thinking*. For example, when planning an animation sequence,
you might literally sketch it like a storyboard (film) with timestamps
(music timing) and note which element leads (choreography) and what
states are involved (game FSM). You might ask, "Does this transition
meet the Walter Murch criteria of a good cut?" If not (e.g., it violates
rhythm or doesn't advance story), refine
it[\[102\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Rhythm%3A%20In%20the%20Duolingo%20example%2C,would%20feel%20out%20of%20place).
Or, "Is there a beat of pause after this big animation to let users
digest?" (music rest). Or, "Are multiple elements stepping on each
other's toes?" (dance spacing). These analogies make you think in more
depth than simply "does it look cool." They force alignment with human
experience principles proven in other media.

**Case in point:** Instagram's save animation referenced by Haley Park
-- the old "flying bookmark" was long; the new one just uses a quick cut
(the item just appears in the collection with a
pop)[\[106\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Instagram%20iOS%20app%E2%80%99s%20%E2%80%9CSave%20to,Collection%E2%80%9D%20animation).
This directly mirrors film advice: don't show travel A to B, cut if
users will understand it
moved[\[104\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=That%E2%80%99s%20probably%20why%20we%20never,from%20point%20A%20to%20B).
They applied a film principle to UI and got a snappier, better-liked
result.

Another: Apple's iOS animations heavily use physics (game influence) and
choreography. When you open an app, the icon expands into the app window
-- that's a *shared element transition* (film continuity) combined with
a spring easing (physics) and a bit of staging (the icon is lead dancer,
then contents fade in). It's no coincidence Apple hires former Pixar
folks for interface animations -- they treat UI like tiny films with
characters and plot (the icon is a character moving to stage center,
etc.).

In summary, **cross-domain techniques broaden your toolkit**. They help
justify *why* certain patterns work: Disney's 12 principles (squash,
stretch, anticipation, follow-through, etc.) are as valid in UI as in
cartoons[\[107\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=Easing%20and%20Offset%20%26%20Delay,both%20relate%20to%20spatial%20continuity)[\[108\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing)
-- a dropdown might have a slight overshoot and bounce (stretch) to feel
springy, or a menu will slide in then slightly settle (follow-through).
These aren't just aesthetics; they improve *perceived realism and
feedback* (users see the overshoot and subconsciously register "object
has weight" which feels
satisfying[\[6\]](https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901#:~:text=Newtonian%20%E2%80%98physics%E2%80%99%20is%20experienced%20in,responding%20to%20force%20and%20friction)[\[7\]](https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901#:~:text=Animations%20make%20the%20interface%20feel,and%20interact%20with%20the%20elements)).

As we learn from film, music, games, and dance, we create web animations
that are not only technically excellent but *viscerally resonate* with
users. Next, we'll examine real-world case studies from Linear, Stripe,
Vercel, and Figma -- seeing how many of these principles manifest in
their products -- and reverse-engineer some of their approaches.
