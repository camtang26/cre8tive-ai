# 13. Strategic Constraints & Alternative Models (Elimination Patterns, Alternative Mental Models)

**Prerequisites:** Sections 1--12 (to appreciate why we might *not*
animate and how to think differently).

Sometimes the best animation decision is to **not animate at all**.
Strategic constraints---intentionally limiting or eliminating certain
animations---can lead to a better product. Also, thinking in alternative
models (beyond the usual timeline mindset) can yield innovative
solutions. Let's explore these:

-   **The Power of No Animation (Elimination):** World-class designers
    know when to leave things static. **Restraint** is itself a
    strategy[\[20\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=within%20the%20product%20to%20form,support%20functionality%2C%20not%20hinder%20it)[\[54\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Let%E2%80%99s%20digress%20a%20bit,movements%20can%20irritate%20the%20user).
    By eliminating unnecessary motion, you allow the important
    animations to shine and reduce cognitive load. For instance,
    Material Design's guidelines on choreography say not everything
    should move; only key shared elements during
    transitions[\[24\]](https://m2.material.io/design/motion/choreography.html#:~:text=Don%27tDon%27t%20animate%20multiple%20elements%20simultaneously,for%20attention%20and%20divide%20focus).
    Strategic constraint could mean: decide that in your app, primary
    navigation changes will not have fancy transitions (instant content
    swaps) to prioritize speed, whereas inner content might have subtle
    transitions. By making a rule "no animation here," you simplify user
    experience and development. Linear seemingly had this approach: no
    loading spinners for most actions because they're near-instant; if
    something takes time, they show a tiny linear progress at top (quick
    and unobtrusive). They *eliminated modal spinners or blocking
    animations*, because a constraint of their UX is speed. So applying
    a constraint like "any loading must be indicated without blocking
    user input" forces creative solutions like optimistic UI or
    background loading with subtle feedback.

-   **Performance Budget as Constraint:** Set a performance constraint
    like *"animations must not drop below 60fps, ever"* or *"no
    animation can run longer than 400ms"*. This forces elimination of
    overly complex effects. It might rule out, say, animating huge
    images or running simultaneous blurs -- you'd find simpler
    alternatives. It also encourages using *alternatives to animation*
    when under heavy load. E.g., if the app is doing a lot of
    computation (like Figma crunching vector ops), maybe disable
    non-essential animations during that time. Some games reduce
    animation detail when GPU is taxed; similarly an app could cut
    embellishments if the frame rate dips (though web doesn't easily
    allow runtime adapt based on FPS, but you can design
    conservatively).

-   **Design Language Constraints:** Some companies adopt a deliberate
    *motion style* as a constraint. E.g., IBM's Carbon design says
    "productivity motions" should be quick and
    subtle[\[56\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=In%20the%20example%20shown%20here%2C,to%20their%20difference%20in%20size).
    This philosophy acts as a constraint -- designers won't propose
    crazy bouncing if the principle is set that enterprise actions
    animate with gravity and stability. Adopting such guiding
    constraints (like "Our brand's motion is elegant and barely
    noticeable") can actually streamline decisions and maintain
    coherence. Figma's brand might say "fast and practical -- animations
    should never hinder workflow" -- that prevents adding, say, a 1s
    color wipe between modes.

-   **Alternative Mental Model -- Declarative State Transitions:**
    Instead of thinking "I need to animate X to Y", think "I have state
    A and state B, how does the UI represent transitioning between
    them?" This mental model shift leads you to use state-driven
    approaches (FSM, React state) instead of imperative instructions.
    It's akin to React's declarative UI -- you declare end states and
    let the system animate the difference. The new **View Transition
    API** is built on this idea: you don't code the animation path, you
    just declare old DOM vs new DOM and the browser figures out a
    transition[\[124\]](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API#:~:text=The%20View%20Transition%20API%20provides,transitions%20between%20different%20website%20views)[\[121\]](https://developer.chrome.com/docs/web-platform/view-transitions#:~:text=The%20View%20Transition%20API%20gives,different%20views%20on%20your%20website).
    This can simplify your thinking and avoid procedural mistakes. If
    more of these APIs emerge, leveraging them means less custom code
    (and fewer bugs). So, an alternative approach: design your UI
    transitions in terms of shared elements and states, and use tools
    that handle the tweening. Already, libraries like Framer Motion
    encourage thinking in **variants** (states) and it handles
    transitions. This yields more consistent animations for free (and
    easier respect for user settings globally). The mental shift is
    **"describe what, not how."** It prevents over-engineering bespoke
    timelines that might conflict.

-   **Physics/Motion as Emergent Behavior:** Traditional timeline
    animation is very manual (you set keyframes etc.). An alternative
    model: use physics-based interactions where animation emerges from
    simulated forces. For example, rather than scripting a drag-snap
    bounce, attach a spring to the dragged object and just set its
    target -- the bounce happens
    naturally[\[125\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=,components%20that%20minimize%20DOM%20manipulation).
    This can lead to more realistic motion without carefully timing
    easing. It's how iOS animations often work (UIKit uses springs by
    default now). The constraint here is you trust the physics model and
    tweak parameters, rather than hand-crafting each motion curve. It
    might eliminate a lot of guesswork. The trade-off: less fine-grain
    control over exact timing, but gain consistency (everything uses
    same physics rules, making the app feel cohesive and "alive"). Tools
    like React Spring or Apple's CASpringAnimation let you specify
    tension, friction and the motion just plays out -- possibly even
    adapting to different devices (because the simulation runs at
    whatever frame rate and handles dropped frames more gracefully than
    fixed keyframes). Considering *user input* as force is another alt
    model: e.g., scrolling momentum -- letting the user's scroll inertia
    naturally animate rather than imposing your timeline. So in a
    storytelling scroll site, instead of explicitly animating on scroll
    events (which can fight user), some new sites just set up a
    physics-based scroll (maybe heavy sections that scroll slower
    naturally -- though careful, that edges into scroll-jacking).

-   **Animation as Hint, Not Necessarily Movement:** Consider that *not
    all feedback needs a literal animation*. Alternative feedback
    mechanisms: sound (a subtle click sound on action), haptic
    (vibration on mobile), or change of element style (color change,
    shadow). Sometimes developers reach for animation when a simpler
    static cue would do. E.g., to indicate a new notification, one might
    animate it sliding in. Alternatively, you could just highlight it
    with a yellow background that fades after a few seconds (which is
    actually an animation, but minimal -- just a color fade). Or no fade
    at all, just a badge increment. The mental model is **"animation is
    one tool in the UX toolkit among many."** So strategically constrain
    yourself: "Will a static design change achieve the same goal?" If
    yes, maybe do that. Example anti-pattern we noted: shaking an input
    on error. An alternative: just show an error message and red outline
    -- no motion needed, clear and possibly better (the shake might not
    be noticed or might annoy, while a red outline stays visible). In
    many cases, **clarity \> cleverness**. So elimination pattern: if an
    animation doesn't significantly improve clarity or delight, don't
    use it.

-   **Embracing Simplicity and Defaults:** Using platform conventions is
    a strategic choice. For instance, on iOS, users can disable motion
    (reduce motion setting) and the OS uses cross-fade transitions
    instead of zooms. Following platform guidelines (like Material's
    durations or Apple HIG) ensures you don't overshoot. It's an
    alternative to custom design: *sometimes the default is default for
    a reason.* E.g., default focus indicator (the blue outline) might be
    better than a custom smooth focus animation because it's more
    recognizable and instant. Many designers hide outline for
    aesthetics, then try to animate focus some fancy way (often an
    anti-pattern). The strategic constraint of "keep browser focus
    outline for accessibility" is actually wise. Similar for page
    navigation -- using the browser's default of no transition is often
    fine and expected. We saw some sites hack page transitions to fade
    to white then new content -- neat, but if it's slow, user would
    prefer just instant load with skeleton.

-   **Timeboxing and Resource Constraints:** In project management, you
    might impose "We only have X days for polishing animations." This is
    a practical constraint that forces focusing on the most important
    animations. You eliminate the rest or put them post-MVP.
    Interestingly, some beloved app animations arose from constraints:
    maybe no time to do a complex transition, so a designer did a simple
    fade that turned out elegant. Constraint can drive elegance. Also,
    performance budgets (like limiting bundle size) may cause you to not
    include a heavy animation library -- which might be a blessing in
    disguise, keeping the app lean and fast. Then you either find a
    lighter solution or skip some fancy effect. E.g., not using Lottie
    because of size might lead you to use an SVG icon with a small
    simple animation -- maybe less flashy but sufficient.

-   **Skeuomorphism vs Flat Design -- An Animation Lens:** A mental
    model from design history: skeuomorphic interfaces (rich textures,
    real-world metaphors) often had more literal animations (page flip
    effects), whereas flat design ushered more minimal animations (fade,
    slide). Think strategically what style your product follows. If it's
    more "flat/minimal", then an overly elaborate animation can feel out
    of place (an alternative mental model is applying *editorial design*
    approach -- content changes like turning pages vs literally
    animating pages curling). This is more of a style constraint -- not
    exactly elimination but guiding the *type* of animation. E.g., a
    highly skeuomorphic design (like iOS circa 2010 with the bookshelf)
    might have justified a fancy bookshelf animation; a flat modern
    design would likely just dissolve content. Pick the mental model
    consistent with your UI style.

-   **Game Inspiration -- Is it a Game or a Tool?:** If your product is
    a serious tool, maybe treat it as such: straightforward feedback, no
    gamification (thus constraint: "No confetti or playful bounce, to
    maintain professional tone"). Conversely, if you want to gamify, you
    adopt game mental model wholeheartedly -- adding points, fun
    animations, etc. But mixing them inappropriately is a mistake. Many
    enterprise apps avoid "cute" animations as they can undermine
    credibility, which is a strategic choice. On the other hand,
    habit-forming consumer apps might strategically include playful
    motion to reward usage. Choose and stick to a model.

**Applying Alternative Thinking to Case Studies:** - Linear's
alternative model was basically *"make UI as fast as a CLI"* -- not
explicitly but you can sense they constrained anything that adds
latency. So animations in Linear feel more like instantaneous feedback
than cartoonish visuals. That constraint (speed above all) shaped their
minimal animation approach. - Stripe's approach on marketing was *"treat
web as interactive storytelling"* (film mental model) and on product as
*"reduce friction in payments"*. So on dashboard, maybe they use almost
no extraneous animations (frictionless). - Figma's alternative model:
*"design tool should be invisible"* -- their UI tries not to call
attention to itself (hence minimal UI chrome). They likely extended that
to motion: they don't want you thinking about an animation, you think
about your design work. That constraint means only functional animations
(like snap lines, smart animate in prototypes which is user content, not
the app UI itself) are emphasized.

In conclusion, **strategic constraints** (whether performance, style, or
time) and *asking "Do we even need this?"* leads to simpler, more
elegant user experiences. **Alternative mental models** (like thinking
in terms of states, physics, or borrowing discipline from other fields)
can free you from defaulting to the same old solutions and possibly find
a better one.

Ultimately, world-class animation is as much about **what you choose not
to do** as what you do -- eliminating the unnecessary, restraining the
excessive, and exploring different perspectives so that what remains is
purposeful, refined, and delightful in just the right measure.

Each section of this guide has built upon the previous, from
foundational principles to detailed implementation and strategic
oversight. Following this layered approach, an AI coding model (or any
developer) can internalize not just the *how* of animations but the
critical *why*, ensuring any generated or implemented animation aligns
with the best practices of the industry's top players.

**AI models should remember:** *World-class animation is 90% planning
and understanding, 10% coding.* By applying the mindset, patterns, and
precautions outlined above, the model can produce animations that are
not only technically correct but truly enhance user experiences, just as
Linear, Stripe, Vercel, and Figma have demonstrated in their products.

[\[7\]](https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901#:~:text=Animations%20make%20the%20interface%20feel,and%20interact%20with%20the%20elements)[\[4\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Animation%20Value%20vs%20Cost)[\[67\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear)[\[99\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=satisfies%20all%20the%20following%20six,criteria)[\[47\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing)

[\[1\]](https://uxdesign.cc/mass-and-motion-in-user-experience-7d5d9ab5590b?gi=227a6318bc75#:~:text=Within%20today%E2%80%99s%20digital%20environments%2C%20movement,is%20as%20expected%20as%20gravity)
[\[8\]](https://uxdesign.cc/mass-and-motion-in-user-experience-7d5d9ab5590b?gi=227a6318bc75#:~:text=There%20is%20nothing%20forcing%20a,This)
[\[9\]](https://uxdesign.cc/mass-and-motion-in-user-experience-7d5d9ab5590b?gi=227a6318bc75#:~:text=a%20constructed%20physics%20that%20abandons,be%20no%20system%20at%20all)
Mass and Motion in User Experience \| by Nathan Hunt \| UX Collective

<https://uxdesign.cc/mass-and-motion-in-user-experience-7d5d9ab5590b?gi=227a6318bc75>

[\[2\]](https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901#:~:text=Animations%20make%20the%20interface%20feel,and%20interact%20with%20the%20elements)
[\[6\]](https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901#:~:text=Newtonian%20%E2%80%98physics%E2%80%99%20is%20experienced%20in,responding%20to%20force%20and%20friction)
[\[7\]](https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901#:~:text=Animations%20make%20the%20interface%20feel,and%20interact%20with%20the%20elements)
Newtonian interfaces. If UI graphics are to be animated... \| by Taner
Olcay \| UX Collective

<https://uxdesign.cc/newtonian-interfaces-f30b4b42ef89?gi=b30fd9472901>

[\[3\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Animation%20in%20digital%20design%20isn%27t,has%20an%20unseen%20cost%3A%20performance)
[\[4\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Animation%20Value%20vs%20Cost)
[\[5\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=That%27s%20why%20all%20animation%20must,like%20it%20was%20always%20there)
[\[19\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Used%20in%20service%20of%20user,perplexes%2C%20and%20strains%20system%20performance)
[\[23\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Employ%20Short%20and%20Natural%20Animation,Durations)
[\[74\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Leverage%20Hardware%20Acceleration)
[\[75\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Avoid%20Frequent%20Layout%20Changes)
[\[76\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Opt%20for%20Transformations%20Over%20Position,Changes)
[\[93\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Test%20on%20Real%20Devices)
[\[98\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Respect%20User%20Preferences)
[\[109\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=,moving%20between%20pages%20or%20states)
UI Animation Performance: Mastering the Experience \| Gapsy

<https://gapsystudio.com/blog/ui-animation-and-performance/>

[\[10\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=Image%3A%20luation%20of%20how%20FPS,works)
[\[21\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=is%20seamless%2C%20and%20UI%20elements,respond%20naturally)
[\[81\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=health%2C%20and%20gives%20you%20clear,suggestions%20on%20what%20to%20improve)
[\[82\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=For%20testing%20animations%20directly%2C%20we,for%20animation%20checks%20and%20optimization)
[\[88\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=FPS%20Frames%20per%20second%20,animations%20feel%20fast%20and%20professional)
[\[89\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=CLS%20,Stability)
[\[90\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=FID%20,Responsiveness)
[\[91\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=TTI%20,Readiness)
[\[92\]](https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth#:~:text=pages%20look%20finished%20on%20the,are%20still%20getting%20into%20place)
How to Use UI Animations Without Slowing Down Your Website

<https://www.motiontheagency.com/blog/how-to-make-ui-animations-run-smooth>

[\[11\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=,UI%20components%20that%20minimize%20DOM)
[\[22\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=,useCallback)
[\[29\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=,to%20a%20cohesive%20user%20experience)
[\[78\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=To%20further%20enhance%20the%20user,and%20maintaining%20that%20crucial%20responsiveness)
[\[79\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=To%20further%20enhance%20the%20user,and%20maintaining%20that%20crucial%20responsiveness)
[\[86\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=The%20team%20at%20Frame,bottlenecks%20and%20address%20them%20directly)
[\[87\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=to%20analyze%20and%20improve%20the,bottlenecks%20and%20address%20them%20directly)
[\[125\]](https://vercel.com/blog/frameio-never-drop-the-illusion#:~:text=,components%20that%20minimize%20DOM%20manipulation)
How Frame.io builds fluid UI for a seamless user experience - Vercel

<https://vercel.com/blog/frameio-never-drop-the-illusion>

[\[12\]](http://www.zigpoll.com/content/how-can-the-frontend-developer-optimize-the-ui-animations-to-maintain-smooth-performance-without-compromising-visual-quality-on-both-desktop-and-mobile-game-interfaces#:~:text=Zigpoll%20www,Use%20easing%20functions)
UI animations are essential in game interfaces, significantly \... -
Zigpoll

<http://www.zigpoll.com/content/how-can-the-frontend-developer-optimize-the-ui-animations-to-maintain-smooth-performance-without-compromising-visual-quality-on-both-desktop-and-mobile-game-interfaces>

[\[13\]](https://stripe.com/blog/globe#:~:text=We%20designed%20our%C2%A0first%20version%C2%A0of%20the,way%20you%20wish%20you%20could)
[\[14\]](https://stripe.com/blog/globe#:~:text=If%20we%20had%20known%20precisely,3D%20graphics%20development%20substantially%20easier)
[\[40\]](https://stripe.com/blog/globe#:~:text=For%20the%20new%C2%A0stripe,operations%20and%20expansion%20every%20day)
[\[77\]](https://stripe.com/blog/globe#:~:text=As%20visual%20designers%20and%20software,motion%20requires%C2%A050%2B%20lines%20of%20code)
[\[110\]](https://stripe.com/blog/globe#:~:text=For%20the%20new%C2%A0stripe,operations%20and%20expansion%20every%20day)
[\[111\]](https://stripe.com/blog/globe#:~:text=Ways%20to%20build%20the%20world)
[\[112\]](https://stripe.com/blog/globe#:~:text=None%20of%20us%20on%20the,precious%20about%20what%20was%20discarded)
To design and develop an interactive globe

<https://stripe.com/blog/globe>

[\[15\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=Expectation)
[\[16\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=Narrative)
[\[18\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=As%20designers%20concerned%20with%20usability%2C,which%20example%20supports%20usability%20more)
[\[28\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=top%20has%20eased%20motion%20and,difference%20is%20in%20their%20easing)
[\[47\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing)
[\[48\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=Object%20behavior%20aligns%20with%20user,expectations%20when%20temporal%20events%20occur)
[\[57\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20case%20I%20am%20presenting,unfinished%2C%20and%20jarring%2C%20and%20distracting)
[\[107\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=Easing%20and%20Offset%20%26%20Delay,both%20relate%20to%20spatial%20continuity)
[\[108\]](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc#:~:text=The%20example%20on%20the%20left,difference%20is%20in%20their%20easing)
Creating Usability with Motion: The UX in Motion Manifesto \| by Issara
Willenskomer \| UX in Motion \| Medium

<https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc>

[\[17\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Consistency)
[\[26\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Sequence%20%26%20stagger)
[\[41\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Continuity)
[\[46\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Table%20with%20rows%20loading%20in,at%20staggered%20timing)
[\[49\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Motion%20can%20help%20by%20establishing,to%20create%20a%20graceful%20transition)
[\[50\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=Pay%20attention%20to%20the%20spatial,respect%20their%20relative%20spatial%20locations)
[\[51\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=When%20the%20new%20content%20panel,new%20layer%20is%20introduced%20above)
[\[56\]](https://design-language-website.netlify.app/design/language/motion-ui/choreography/#:~:text=In%20the%20example%20shown%20here%2C,to%20their%20difference%20in%20size)
IBM Design Language -- Motion UI

<https://design-language-website.netlify.app/design/language/motion-ui/choreography/>

[\[20\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=within%20the%20product%20to%20form,support%20functionality%2C%20not%20hinder%20it)
[\[30\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Concepts%20and%20references)
[\[37\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Essentially%2C%20there%20are%20two%20modes,which%20the%20main%20ones%20are)
[\[38\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=I%20created%20timelines%20for%20each,corresponds%20to%20its%20own%20timeline)
[\[54\]](https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f#:~:text=Let%E2%80%99s%20digress%20a%20bit,movements%20can%20irritate%20the%20user)
Figma + Rive: sharing my workflow for UI animations \| by Andrei Rybin
\| UX Collective

<https://uxdesign.cc/how-i-create-animation-for-interfaces-7183b3b6482f?gi=cad00555f76f>

[\[24\]](https://m2.material.io/design/motion/choreography.html#:~:text=Don%27tDon%27t%20animate%20multiple%20elements%20simultaneously,for%20attention%20and%20divide%20focus)
Choreography - Material Design 2

<https://m2.material.io/design/motion/choreography.html>

[\[25\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=How%20are%20our%20brains%20capable,of%20visual%20input%20into%20cuts)
[\[27\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Story%3A%20The%20common%20sentiment%20in,add%20anything%20to%20the%20story)
[\[52\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Lesson%201%3A%20What%20should%20you,keep)
[\[53\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=space,in%20relation%20to%20one%20another)
[\[99\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=satisfies%20all%20the%20following%20six,criteria)
[\[100\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=So%20emotion%2C%20story%2C%20and%20rhythm,above%20animation%20examples%20meet%20them)
[\[101\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Instagram%20iOS%20app%E2%80%99s%20%E2%80%9CSave%20to,Collection%E2%80%9D%20animation)
[\[102\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Rhythm%3A%20In%20the%20Duolingo%20example%2C,would%20feel%20out%20of%20place)
[\[103\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=3,in%20relation%20to%20one%20another)
[\[104\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=That%E2%80%99s%20probably%20why%20we%20never,from%20point%20A%20to%20B)
[\[106\]](https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f#:~:text=Instagram%20iOS%20app%E2%80%99s%20%E2%80%9CSave%20to,Collection%E2%80%9D%20animation)
Lessons on UI animation from film editing \| by Haley Park \| Bootcamp
\| Medium

<https://medium.com/design-bootcamp/lessons-on-ui-animation-from-film-editing-f7ff6eed5c7f>

[\[31\]](https://linear.app/now/how-we-redesigned-the-linear-ui#:~:text=to%20assess%20their%20functionality)
[\[39\]](https://linear.app/now/how-we-redesigned-the-linear-ui#:~:text=Image%3A%20Inverted%20L%20navigation%20highlighted)
How we redesigned the Linear UI (part Ⅱ) - Linear

<https://linear.app/now/how-we-redesigned-the-linear-ui>

[\[32\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=The%20design%20comps%20included%20the,never%20reach%20the%20end%20of)
[\[33\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=The%20result%20is%20a%20canvas,long%20enough%20to%20see%20it)
[\[34\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=Collaborative%20creative%20process)
[\[35\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=what%20our%20teammates%20care%20about,into%20the%20design%2C%20on%20repeat)
[\[36\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=Image%3A%20Art%20direction%20Art%20direction)
[\[42\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=rare%20book%20library%20en,do%20because%20it%20was%20fun)
[\[70\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=invert%20it%20by%20creating%20a,never%20reach%20the%20end%20of)
[\[115\]](https://www.awwwards.com/case-study-stripe-dot-dev.html#:~:text=The%20design%20comps%20included%20the,never%20reach%20the%20end%20of)
Case Study: Stripe Dot Dev

<https://www.awwwards.com/case-study-stripe-dot-dev.html>

[\[43\]](https://parachutedesign.ca/blog/ux-animation/#:~:text=3%20UX%20Animation%20Best%20Practices,sweet%20spot%20landing%20between)
3 UX Animation Best Practices for Apps & Websites

<https://parachutedesign.ca/blog/ux-animation/>

[\[44\]](https://www.backstage.com/magazine/article/film-rhythm-editing-guide-77147/#:~:text=Set%20the%20Pace%20With%20This,%E2%80%9CThere%20is%20a)
Set the Pace With This Guide to Film Rhythm Editing - Backstage

<https://www.backstage.com/magazine/article/film-rhythm-editing-guide-77147/>

[\[45\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%2A%20For%20scroll,change%20dynamically%20as%20users%20scroll)
[\[71\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=%3E%20The%20CSS%20animation,as%20users%20navigate%20a%20webpage)
[\[73\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=This%20feature%20connects%20animations%20to,effects%2C%20complex%20transitions%2C%20and%20storytelling)
[\[122\]](https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m#:~:text=Best%20Practices)
CSS 2024 Breakthrough: Redefining Animations with animation-timeline:
view() - DEV Community

<https://dev.to/hoainhoblogdev/css-2024-breakthrough-redefining-animations-with-animation-timeline-view-1o3m>

[\[55\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=After%20reading%20some%20articles%2C%20I,label%60%20to%20the%20%60h1%60%20element)
[\[96\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=return%20%28%20%3C%3E%20%3Ch1%20aria,hidden%3D%22true%22%3EPause%20the%20animation%3C%2Fbutton%3E%20%3C%2F%3E)
[\[97\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=element%22%3B%20second%2C%20by%20using%20%60aria,be%20used%20when%20only%20necessary)
Accessible Typewriter Animations: Using aria-label for Better Screen
Reader Experience

<https://www.cyishere.dev/blog/a11y-of-typewriter-animation>

[\[58\]](https://xstatebyexample.com/tip/control-a-css-animation-with-xstate/#:~:text=Control%20a%20CSS%20animation%20with,how%20XState%20can%20help)
Control a CSS animation with XState

<https://xstatebyexample.com/tip/control-a-css-animation-with-xstate/>

[\[59\]](https://css-tricks.com/coordinating-svelte-animations-with-xstate/#:~:text=Coordinating%20Svelte%20Animations%20With%20XState,unique%20in%20the%20JavaScript%20ecosystem)
Coordinating Svelte Animations With XState - CSS-Tricks

<https://css-tricks.com/coordinating-svelte-animations-with-xstate/>

[\[60\]](https://rive.app/docs/editor/state-machine/state-machine#:~:text=Inputs%20%20and%20%2018,looks%20like%20when%20it%E2%80%99s%20been)
[\[61\]](https://rive.app/docs/editor/state-machine/state-machine#:~:text=Inputs%20are%20a%20legacy%20tool,inputs%20at%20runtime%20and%20define)
[\[72\]](https://rive.app/docs/editor/state-machine/state-machine#:~:text=is%20in%20the%20Idle%20state,Image%3A%20Image)
State Machine Overview - Rive

<https://rive.app/docs/editor/state-machine/state-machine>

[\[62\]](https://docs.unity3d.com/6000.2/Documentation/Manual/AnimationStateMachines.html#:~:text=Animation%20State%20Machine%20,%C2%B7%20State%20Machine%20Transitions)
Animation State Machine - Unity - Manual

<https://docs.unity3d.com/6000.2/Documentation/Manual/AnimationStateMachines.html>

[\[63\]](https://motion.dev/#:~:text=Motion%20%E2%80%94%20JavaScript%20%26%20React,Orchestrate%20React%20animations%20with%20variants)
[\[64\]](https://motion.dev/#:~:text=Timeline%20sequences,Orchestrate%20React%20animations%20with%20variants)
Motion --- JavaScript & React animation library

<https://motion.dev/>

[\[65\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=need%20to%20handle%20navigation%2C%20animations%2C,and%20changing%20content%2C%20including)
[\[66\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear)
[\[67\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear)
[\[68\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=Ideally%2C%20we%20wanted%20only%20the,the%20tooltip%20description%20would%20appear)
[\[69\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=description%20would%20appear)
[\[117\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=We%20designed%20our%20animations%20to,one%20of%20the%20product%20tour)
[\[118\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=We%20designed%20our%20animations%20to,one%20of%20the%20product%20tour)
[\[119\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=separate%20attention,interactions%20back%20to%20the%20tooltip)
[\[120\]](https://vercel.com/blog/designing-the-vercel-virtual-product-tour#:~:text=those%20animations%20required%20a%20lot,the%20dot%E2%80%99s%20moving%20animation%20resolved)
How to build an engaging virtual product tour - Vercel

<https://vercel.com/blog/designing-the-vercel-virtual-product-tour>

[\[80\]](https://www.gosquared.com/blog/optimising-60fps-everywhere-in-javascript#:~:text=Optimising%20for%2060fps%20everywhere%20,milliseconds%20to%20accomplish%20all%20these)
Optimising for 60fps everywhere - GoSquared

<https://www.gosquared.com/blog/optimising-60fps-everywhere-in-javascript>

[\[83\]](https://cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=Accessible%20Typewriter%20Animations%3A%20Using%20aria,This%20is%20called)
Accessible Typewriter Animations: Using aria-label for Better Screen
\...

<https://cyishere.dev/blog/a11y-of-typewriter-animation>

[\[84\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=)
[\[85\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=Ultimate%20Guide%20to%20Web%20Animation,or%20reducing%20the%20intensity)
Ultimate Guide to Web Animation Techniques in 2024

<https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/>

[\[94\]](https://stripe.com/payments/checkout#:~:text=Stripe%20Checkout%20,of%20Stripe%20engineers%20and)
Stripe Checkout \| Checkout Pages for Your Website

<https://stripe.com/payments/checkout>

[\[95\]](https://www.sitepoint.com/css-typewriter-effect/#:~:text=How%20to%20Create%20a%20CSS,function)
How to Create a CSS Typewriter Effect for Your Website - SitePoint

<https://www.sitepoint.com/css-typewriter-effect/>

[\[105\]](https://m1.material.io/motion/choreography.html#:~:text=Multiple%20shared%20elements,Some%20elements%20may)
Choreography - Motion - Material Design

<https://m1.material.io/motion/choreography.html>

[\[113\]](https://stripe.com/blog/connect-front-end-experience#:~:text=We%20recently%20released%20a%20new,and%20simple%20on%20the%20surface)
[\[114\]](https://stripe.com/blog/connect-front-end-experience#:~:text=The%20landing%20page%E2%80%99s%20header%20displays,dynamically%20illuminates%20the%20appropriate%20faces)
Connect: behind the front-end experience

<https://stripe.com/blog/connect-front-end-experience>

[\[116\]](https://stripe.com/jobs/listing/design-engineer-expansion/6299301#:~:text=Design%20Engineer%2C%20Expansion%20,Stripe%27s%20expertise%20across%20public)
Design Engineer, Expansion - Stripe

<https://stripe.com/jobs/listing/design-engineer-expansion/6299301>

[\[121\]](https://developer.chrome.com/docs/web-platform/view-transitions#:~:text=The%20View%20Transition%20API%20gives,different%20views%20on%20your%20website)
Smooth transitions with the View Transition API

<https://developer.chrome.com/docs/web-platform/view-transitions>

[\[123\]](https://accessibilitycraft.com/104-wcag-pause-stop-hide-prefers-reduced-motion-fallout-nuka-cola-quantum/#:~:text=104%3A%20WCAG%20Pause%2C%20Stop%2C%20Hide,sufficient%20for%20meeting%20this%20guideline)
104: WCAG Pause, Stop, Hide & Prefers Reduced Motion, Fallout \...

<https://accessibilitycraft.com/104-wcag-pause-stop-hide-prefers-reduced-motion-fallout-nuka-cola-quantum/>

[\[124\]](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API#:~:text=The%20View%20Transition%20API%20provides,transitions%20between%20different%20website%20views)
View Transition API - MDN Web Docs

<https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API>
