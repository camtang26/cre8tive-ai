# Creative Ideation Workflow Instructions
# SIGNATURE WORKFLOW: Generate Premium Animation Concepts (Research-Backed)

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/creative-ideation/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Animation Requirements">
<action>Introduce the creative ideation workflow with film director energy</action>

🎬 **"Let's create something exceptional. We'll research premium patterns and generate concepts backed by 2.2M+ words of GSAP expertise."**

**This workflow uses:**
- ✅ Archon MCP (89 sources - premium GSAP patterns)
- ✅ Deep-Research (6 framework sections - synthesized expertise)
- ✅ WebSearch (2024-2025 cutting-edge trends)
- ✅ Context7 (Latest GSAP API verification)

**What makes this different from generic AI suggestions?**
*"Great animations are meaningful, not just decorative."* (Deep-Research Section 1.1)

Every concept will be backed by research, not guesswork.

---

**Tell me about your animation needs:**

<ask response="component_context">What component or page needs animation? (hero section, product showcase, about page, full site, specific component)</ask>

<ask response="brand_personality">What's your brand personality? (playful, professional, edgy, minimal, luxurious, technical, other)</ask>

<ask response="user_goals">What should this animation achieve? (engagement, delight, storytelling, wow factor, trust-building, conversion, other)</ask>

<ask response="constraints">Any constraints? (performance budget, timeline, accessibility needs, device targets, framework restrictions)</ask>

<ask response="anti_patterns">Any trends to avoid? Competitor patterns to differ from? Styles you dislike?</ask>

<action>Confirm understanding and preview the research-backed approach</action>

*"Perfect. I'll research premium patterns from Archon's 89 sources, apply 6 Deep-Research frameworks, and find 2024-2025 cutting-edge examples. This isn't generic AI advice - this is research-backed creative direction."*

<template-output>component_context, brand_personality, user_goals, constraints, anti_patterns</template-output>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->
<!-- STEP 2: DEEP-RESEARCH MANDATORY GATES (6 SECTIONS)                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->

<step n="2" goal="Deep-Research Foundation - Load Creative Frameworks (MANDATORY)">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to concept generation until ALL 6 Deep-Research sections are read and frameworks extracted</critical>

<!-- ========== RESEARCH GATE 1: ANIMATOR'S MINDSET (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <phase n="1" title="Section 1.1 - The Animator's Mindset vs Code Generator" required="true">
    <mandate>Read COMPLETE file - no skimming, no assumptions</mandate>

    <action>Read Deep-Research Section 1.1:</action>
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/01-11-the-animators-mindset-vs-code-generator.md

    <action>Extract and internalize core principles:</action>

    **1. Imagination First, Code Later**
    *"Great animations often start as imaginative ideas or sketches. Human animators gather visual inspiration (from award sites, art, film, real-world motion) and envision the end result before worrying about code."*
    (Source: 01-11-the-animators-mindset-vs-code-generator.md)

    **Application to concept generation:**
    - Picture the desired motion BEFORE suggesting GSAP techniques
    - Envision user impact and emotional response
    - Draw from visual inspiration, not code patterns

    **2. Choreography and Timing**
    *"Think in terms of choreography -- how elements move relative to each other in time. World-class animations often have multiple things happening in coordination (e.g. image fades out as text slides in)."*
    (Source: 01-11-the-animators-mindset-vs-code-generator.md)

    **Application to concept generation:**
    - Plan relationships between elements (which leads, which follows)
    - Consider rhythm (fast vs slow sections)
    - Design emotional beats (dramatic reveal vs playful jig)

    **3. Design Intent**
    *"Always ask why an animation exists. Is it to draw attention to a feature? To create delight? To tell a story? Every motion should serve a purpose. This 'intentional animation' mindset is what separates expert work from random effects."*
    (Source: 01-11-the-animators-mindset-vs-code-generator.md)

    **Critical Principle:**
    *"Great animations are meaningful, not just decorative."*
    (Source: 01-11-the-animators-mindset-vs-code-generator.md)

    **Application to concept generation:**
    - Every concept must articulate its PURPOSE (why it exists)
    - Link motion to user goals from Step 1: {{user_goals}}
    - Avoid suggesting random effects - all motion must be intentional

    **4. AI Model Mandate**
    *"Start every project by defining the animation's purpose and style BEFORE diving into coding. Resist the urge to immediately output GSAP snippets -- first, form a creative vision."*
    (Source: 01-11-the-animators-mindset-vs-code-generator.md)

    **Application to concept generation:**
    - Creative vision comes FIRST
    - Technical approach comes SECOND
    - Code snippets come LAST (or not at all in concept phase)
  </phase>

  <!-- ========== RESEARCH GATE 2: VISUAL TRANSLATION (MANDATORY) ========== -->
  <phase n="2" title="Section 1.2 - Visual Inspiration → Technical Translation Workflow" required="true">
    <mandate>Read COMPLETE file - extract 5-step framework and brand mapping principles</mandate>

    <action>Read Deep-Research Section 1.2:</action>
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md

    <action>Extract and apply 5-step translation framework:</action>

    **The 5-Step Framework:**
    1. **Gather Inspiration** - Find references (Awwwards, CodePen, agencies, apps)
    2. **Deconstruct the Effect** - Break down components, timing, sequence
    3. **Choreograph on Paper** - Outline sequence with overlaps/delays
    4. **Choose the Technique** - Decide GSAP features, plugins, approach
    5. **Prototype in Isolation** - Test complex animations before full integration

    **Decision Framework - GSAP vs CSS vs Other:**
    *"As a rule of thumb, use CSS for simple static transitions (e.g. a quick hover fade) and GSAP for sequenced, synchronized or complex animations. GSAP shines when multiple elements or stages must be coordinated precisely."*
    (Source: 02-12-visual-inspiration-technical-translation-workflow.md)

    *"AI should pick the right tool for each job rather than defaulting blindly to one approach."*
    (Source: 02-12-visual-inspiration-technical-translation-workflow.md)

    **Brand Personality → Motion Design Mapping:**

    Using user's brand: **{{brand_personality}}**

    Map to motion characteristics:
    - **Playful** → Bouncy easing (elastic, back), physics-based, overshooting motions
    - **Professional** → Smooth easing (power2, expo), controlled, refined curves
    - **Edgy** → Sharp easing (power4, circ), dramatic contrast, aggressive curves
    - **Minimal** → Subtle easing (sine, power1), gentle curves, intentional restraint
    - **Luxurious** → Slow easing (power2.inOut), elegant, sophisticated timing
    - **Technical** → Precision easing (linear, power1), data-driven, exact timing

    **Critical Principle:**
    *"Always maintain a visual + semantic mapping. For every imagined motion, have a plan for its code implementation. This prevents the common AI pitfall of producing code that doesn't match the intended effect (e.g. animating the wrong property or poor timing)."*
    (Source: 02-12-visual-inspiration-technical-translation-workflow.md)

    **Application to concept generation:**
    - Map {{brand_personality}} to specific easing curves
    - Document easing specifications for each concept
    - Ensure visual description matches technical approach
  </phase>

  <!-- ========== RESEARCH GATE 3: STORYBOARDING (MANDATORY) ========== -->
  <phase n="3" title="Section 1.3 - Storyboarding Complex Sequences" required="true">
    <mandate>Read COMPLETE file - extract timeline planning and choreography principles</mandate>

    <action>Read Deep-Research Section 1.3:</action>
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/03-13-storyboarding-complex-sequences.md

    <action>Extract and apply storyboarding principles:</action>

    **1. Define Sections or Scenes**
    *"Break the page into logical sections if applicable (hero, about section, gallery, etc.). Consider how the user navigates through them (scroll or click) and how animations transition between sections."*
    (Source: 03-13-storyboarding-complex-sequences.md)

    **Application:** For {{component_context}}, identify major sections and transition points

    **2. Use Temporal Landmarks**
    *"Identify start, middle, and end points of the overall sequence. Example: Start: page load -- initial state; Middle: user scrolls and triggers mid-animation; End: animation completes or loops."*
    (Source: 03-13-storyboarding-complex-sequences.md)

    **Application:** Define clear beginning, climax, and resolution for each concept

    **3. Parallel vs Sequential**
    *"World-class animations often layer motions (parallel) for richness, but maintain clarity by sequencing major changes. Example: While a section background color changes (a slow parallel fade), a series of content cards might animate one after another (sequentially)."*
    (Source: 03-13-storyboarding-complex-sequences.md)

    **Critical Warning:**
    *"AI models should avoid triggering everything at once with equal timing -- that often feels chaotic."*
    (Source: 03-13-storyboarding-complex-sequences.md)

    **Application to concept generation:**
    - Plan which motions happen simultaneously (parallel)
    - Plan which motions happen in sequence
    - Avoid "everything at once" chaos

    **4. Ease and Intensity Planning**
    *"Mark where to use different easing for effect. Perhaps the intro is gentle (easeOut), the mid-section is bouncy and playful, the ending snappy (easeIn). Considering easing early helps set the emotional tone."*
    (Source: 03-13-storyboarding-complex-sequences.md)

    **5. Creative Foresight Principle**
    *"By adopting these planning techniques, AI models can mimic the creative foresight of human animators. The output stops being a raw sequence of code and becomes an intentional, art-directed animation."*
    (Source: 03-13-storyboarding-complex-sequences.md)

    **Application:** Each concept must show intentional choreography planning, not random effects
  </phase>

  <!-- ========== RESEARCH GATE 4: PIXAR STORY SPINE (MANDATORY) ========== -->
  <phase n="4" title="Section 4.1 - Pixar Story Spine Framework for GSAP" required="true">
    <mandate>Read COMPLETE file - extract 7-beat narrative structure and scroll mapping</mandate>

    <action>Read Deep-Research Section 4.1:</action>
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/04-41-pixar-story-spine-framework-for-gsap.md

    <action>Extract and apply Pixar Story Spine framework:</action>

    **Framework Origin:**
    *"The Pixar Story Spine is a proven narrative structure used by Pixar, Disney, and Lucasfilm to train writers in crafting emotionally satisfying stories. Originally created by playwright Kenn Adams in the 1990s for improv theater, it became famous when former Pixar storyboard artist Emma Coats shared it as one of her '22 rules of storytelling' in 2012."*
    (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Why It Works for Web Animation:**
    *"The Story Spine provides a narrative scaffolding that transforms scroll-driven animations from arbitrary effects into intentional, story-driven experiences. When users scroll through a page, they're not just viewing content—they're experiencing a narrative arc with clear beginning, conflict, and resolution."*
    (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **The 7-Beat Structure:**

    1. **Once upon a time...** (Establish context)
       - Orient user, establish visual tone
       - Gentle fade-in, slow confident easing (power1.out)
       - Establish visual hierarchy with staggered reveals

    2. **Every day...** (Status quo)
       - Show problem space or current reality
       - Pin elements to create focus
       - Neutral/muted palette, moderate timing

    3. **Until one day...** (Inciting incident)
       - Introduce change, new possibility
       - Dramatic transition with energy shift
       - Faster easing (back.out, elastic.out)
       - Color/light transitions signal change

    4-5. **Because of that...** (Cascading consequences)
       - Chain reaction, benefits unfolding
       - Staggered sequences showing multiple benefits
       - Timeline choreography with overlaps
       - Building energy (each reveal slightly faster/bigger)

    6. **Until finally...** (Resolution/Climax)
       - Deliver the payoff, transformation complete
       - Hero moment with maximum visual impact
       - Slowest, most dramatic timing
       - Premium effects (MorphSVG, SplitText)
       - Clear CTA emerges

    7. **And ever since then...** (New normal - optional)
       - Show lasting transformation, future state
       - Calm, settled animations
       - Confidence-building micro-interactions

    **Psychological Basis:**
    *"Humans are wired for stories. The Story Spine mirrors the Hero's Journey structure found in mythology, film, and literature. When animations follow this arc, users unconsciously recognize the pattern and stay engaged."*
    (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **Scroll Mapping:**
    *"Scroll position naturally maps to narrative time. As users scroll down (forward in time), they progress through the story beats. ScrollTrigger's scrub feature lets users control pacing—fast scrollers skip ahead, slow scrollers savor details."*
    (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **The Memorable Quote:**
    *"Every scroll tells a story. Make it a good one."*
    (Source: 04-41-pixar-story-spine-framework-for-gsap.md)

    **AI Mandate:**
    When planning scroll narratives or hero animations:
    1. Start with Story Spine - map all 7 beats BEFORE coding
    2. One beat per section - each major scroll section = one Story Spine beat
    3. Timing reflects emotion - Slow = trust/drama, Fast = excitement
    4. Climax gets best animations - Save premium effects for Beat 6
    5. User control = better UX - Use scrub: true in ScrollTrigger

    **Application to concept generation:**
    - At least ONE concept should use Pixar Story Spine structure
    - Map user's {{component_context}} to 7-beat narrative
    - Document which beat each section represents
  </phase>

  <!-- ========== RESEARCH GATE 5: PLUGIN ECOSYSTEM (MANDATORY) ========== -->
  <phase n="5" title="Section 2.3 - The 2024 GSAP Plugin Ecosystem (All Free!)" required="true">
    <mandate>Read COMPLETE file - understand ALL premium plugins are FREE and should be used aggressively</mandate>

    <action>Read Deep-Research Section 2.3:</action>
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/07-23-the-2024-gsap-plugin-ecosystem-all-free.md

    <action>Extract and apply premium plugin knowledge:</action>

    **THE GAME-CHANGER:**
    *"A major development: as of late 2023/2024, GSAP and all its official plugins are free for everyone (no club membership needed)."*
    (Source: 07-23-the-2024-gsap-plugin-ecosystem-all-free.md)

    *"This is a windfall for AI coding models -- it means you can confidently use capabilities like ScrollTrigger and SplitText in your outputs without worrying about licensing."*
    (Source: 07-23-the-2024-gsap-plugin-ecosystem-all-free.md)

    **Premium Plugins to Leverage Aggressively:**

    **1. ScrollTrigger** (was paywalled, NOW FREE)
    - Scroll-driven timelines and pinning
    - Scrubbing (tie timeline progress to scroll position)
    - Parallax effects, immersive scroll storytelling
    - MatchMedia for responsive triggers
    - **Use for:** Any scroll-based narrative or reveal

    **2. ScrollSmoother** (was paywalled, NOW FREE)
    - Smooth scrolling effect (locomotive-style)
    - Buttery scroll feel seen on high-end sites
    - Auto-parallax with data-speed attributes
    - Syncs seamlessly with ScrollTrigger
    - **Use for:** Premium feel, smooth scroll experiences

    **3. Flip** (was paywalled, NOW FREE)
    - Layout reordering animations (FLIP technique)
    - Animate elements between DOM positions
    - Expanding thumbnails to full view
    - State transition animations
    - **Use for:** Any scenario animating between two layouts

    **4. SplitText** (was paywalled, NOW FREE)
    - Split text into lines, words, characters
    - Advanced typography animations
    - Letter-by-letter reveals, word staggering
    - Automatic masking (GSAP 3.13+)
    - **Use for:** Text reveals, sophisticated typography

    **5. MotionPath** (was paywalled, NOW FREE)
    - Animate along SVG paths
    - Curved motion (not just straight lines)
    - Auto-rotation along path
    - **Use for:** Non-linear movement, elegant curves

    **6. MorphSVG** (was paywalled, NOW FREE)
    - Morph one SVG shape into another
    - Icon transitions (play → pause)
    - Creative shape effects
    - **Use for:** Delightful micro-interactions, visual morphing

    **7. DrawSVG** (was paywalled, NOW FREE)
    - Animate SVG stroke drawing
    - Line reveals, signature effects
    - **Use for:** SVG line animations

    **AI Best Practice:**
    *"Always consider if a GSAP plugin can simplify the task: Need scroll interaction? Use ScrollTrigger (and ScrollSmoother if needed). Need to animate complicated state changes? Use Flip. Need to animate text or SVG creatively? Use SplitText, MorphSVG, etc."*
    (Source: 07-23-the-2024-gsap-plugin-ecosystem-all-free.md)

    **Application to concept generation:**
    - AGGRESSIVELY recommend premium plugins (ALL FREE!)
    - Don't shy away from ScrollSmoother, MorphSVG, SplitText
    - Highlight plugin combinations for maximum wow factor
    - Example: ScrollSmoother + SplitText = scroll-driven text parallax
  </phase>

  <!-- ========== RESEARCH GATE 6: AGENCY PATTERNS (MANDATORY) ========== -->
  <phase n="6" title="Section 7.5 - Notable Agencies & Patterns" required="true">
    <mandate>Read COMPLETE file - understand premium studio benchmarks and 2023-2025 trends</mandate>

    <action>Read Deep-Research Section 7.5:</action>
    Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/32-75-notable-agencies-patterns.md

    <action>Extract and apply premium agency patterns:</action>

    **Notable Agencies & Their Patterns:**

    **1. Active Theory** (WebGL + GSAP masters)
    - Pattern: Heavy use of GSAP for camera moves
    - Syncing DOM/UI with WebGL scenes
    - Immersive experiences pushing boundaries with 3D
    - **Signature:** GSAP behind timeline of events

    **2. Resn** (New Zealand - quirky interactive)
    - Pattern: Creative use of custom eases and staggers
    - Surprising motions (bouncing letters, liquid effects)
    - CustomWiggle, CustomBounce plugins
    - **Signature:** Playful, unexpected animations

    **3. ToyFight** (UK - precision and polish)
    - Pattern: Precise, minimalistic animations
    - Deep GSAP integration with content management
    - Eleventy + vanilla JS for transparency
    - **Signature:** Alignment with design, refined execution

    **4. MediaMonks / Build in Amsterdam** (Dutch agencies)
    - Pattern: Slick product showcase animations
    - Subtle parallax, smooth carousels
    - GSAP + three.js for 3D product models
    - ScrollTrigger for reveal sequences
    - **Signature:** Professional, polished product showcases

    **2023-2025 Trends:**

    *"Use of Scroll-driven animations has only increased -- thanks to ScrollTrigger making it easier. Many sites with high engagement use scroll narratives."*
    (Source: 32-75-notable-agencies-patterns.md)

    - **SVG and Canvas micro-animations** - Animated logos, cursor effects
    - **MatchMedia usage** - Tailored animations per breakpoint
    - **License change impact** - More widespread adoption of Flip and ScrollSmoother (since 2024 free)

    **The Common Thread:**
    *"Analyzing these cases and studios, we identify a common thread: systematic use of GSAP's tools (timeline, scroll, plugins) combined with creative storytelling."*
    (Source: 32-75-notable-agencies-patterns.md)

    **AI Mandate:**
    *"Approach each animation challenge by thinking 'How would Active Theory or Locomotive do this?' -- likely modular timelines, scroll linking, heavy optimization, and always thinking of the user's perspective (control, pacing)."*
    (Source: 32-75-notable-agencies-patterns.md)

    **Application to concept generation:**
    - Reference premium agencies as benchmarks
    - Use phrases like "Active Theory-style immersive experience"
    - Cite 2024-2025 trends in concept descriptions
    - Think: "What would [Agency X] do for {{component_context}}?"
  </phase>

  <!-- ========== MANDATORY CHECKPOINT - RESEARCH VALIDATION ========== -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 DEEP-RESEARCH FOUNDATION COMPLETE**

      **6 Framework Sections Read and Internalized:**

      ✅ **Section 1.1 - Animator's Mindset**
      - Principle: *"Great animations are meaningful, not just decorative"*
      - Application: Imagination first, choreography thinking, design intent

      ✅ **Section 1.2 - Visual Translation**
      - Framework: 5-step translation (Gather → Deconstruct → Choreograph → Choose → Prototype)
      - Application: {{brand_personality}} mapped to easing curves and motion style

      ✅ **Section 1.3 - Storyboarding**
      - Principle: Timeline planning, parallel vs sequential, temporal landmarks
      - Application: Avoid "everything at once" chaos, intentional choreography

      ✅ **Section 4.1 - Pixar Story Spine**
      - Framework: 7-beat narrative (Once upon a time... → Until finally...)
      - Application: At least one concept uses Story Spine structure

      ✅ **Section 2.3 - Plugin Ecosystem**
      - Critical Fact: *"All GSAP plugins are FREE as of 2024"*
      - Application: Aggressive use of ScrollSmoother, MorphSVG, SplitText, etc.

      ✅ **Section 7.5 - Agency Patterns**
      - Benchmarks: Active Theory, Resn, ToyFight, MediaMonks
      - Application: Think "How would [Agency X] approach {{component_context}}?"

      **Ready to generate research-backed concepts with:**
      - Intentional design (not random effects)
      - Brand-appropriate motion ({{brand_personality}} → easing)
      - Narrative structure (Pixar Story Spine)
      - Premium tools (FREE plugins)
      - Agency-level quality (benchmark thinking)
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to multi-source research.</halt>

    <mandate>Agent CANNOT skip this checkpoint. Deep-Research must be internalized before proceeding.</mandate>

    <user-override>
      Only {user_name} can skip Deep-Research with explicit "Skip [s]" command.
      Agent CANNOT autonomously skip research gates.
    </user-override>
  </checkpoint>
</research-gate>

<template-output>
deep_research_section_1_1_mindset,
deep_research_section_1_2_translation,
deep_research_section_1_3_storyboarding,
deep_research_section_4_1_pixar_spine,
deep_research_section_2_3_plugins,
deep_research_section_7_5_agencies,
brand_motion_mapping
</template-output>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->
<!-- STEP 3: MULTI-SOURCE RESEARCH (ARCHON + WEBSEARCH + CONTEXT7)                       -->
<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->

<step n="3" goal="Multi-Source Research - Premium Pattern Discovery">
<action>Execute systematic multi-source research using Tier 1/2/3 protocol</action>

**Research Hierarchy:**
- **Tier 1 Primary:** Archon MCP (5 priority sources) - ALWAYS query first
- **Tier 2 Gap Filling:** WebSearch (2024-2025 trends) - For cutting-edge examples
- **Tier 3 Minimal:** Context7 (API verification) - Only if needed for version-specific questions

---

**🔍 TIER 1A: ARCHON MCP - SYSTEMATIC PATTERN QUERIES**

<action>Query ALL 5 priority Archon sources systematically for {{component_context}} patterns:</action>

**Source 1: gsap.com Official Docs** (source_id: b9f6b322298feb21)
```
rag_search_knowledge_base("{{component_context}} animation patterns", source_id="b9f6b322298feb21", match_count=8)
rag_search_knowledge_base("{{brand_personality}} GSAP techniques", source_id="b9f6b322298feb21", match_count=8)
rag_search_code_examples("{{component_context}} GSAP implementation", source_id="b9f6b322298feb21", match_count=8)
```

**Source 2: Tympanus/Codrops Tutorials** (source_id: 1e5cc3bd5125be3c)
```
rag_search_knowledge_base("premium {{component_context}} animations", source_id="1e5cc3bd5125be3c", match_count=8)
rag_search_code_examples("Codrops {{component_context}} examples", source_id="1e5cc3bd5125be3c", match_count=8)
```

**Source 3: FreeFrontend Examples** (source_id: 90c2ef5e8fa816b7)
```
rag_search_code_examples("{{component_context}} showcase", source_id="90c2ef5e8fa816b7", match_count=6)
```

**Source 4: CodePen Collections** (source_id: 020e9f31a8c5cdb7)
```
rag_search_code_examples("GSAP {{component_context}} CodePen", source_id="020e9f31a8c5cdb7", match_count=6)
```

**Source 5: Lenis Smooth Scroll** (source_id: 77ae0ef68a867aa9)
```
rag_search_knowledge_base("smooth scroll {{component_context}}", source_id="77ae0ef68a867aa9", match_count=4)
```

**🎉 PREMIUM PLUGIN QUERIES** (ALL FREE in GSAP 3.13+)
<action>Actively search for premium plugin examples matching {{component_context}}:</action>

```
rag_search_code_examples("ScrollSmoother {{component_context}}", match_count=6)
rag_search_code_examples("MorphSVG icon transitions", match_count=6)
rag_search_code_examples("SplitText {{component_context}}", match_count=6)
rag_search_code_examples("DrawSVG line reveals", match_count=4)
rag_search_code_examples("MotionPath custom trajectories", match_count=4)
rag_search_code_examples("Flip layout transitions", match_count=4)
```

**Why Premium Plugins Matter:**
Per Section 2.3: *"This is a windfall for AI coding models"* - NO COST BARRIER = RECOMMEND LIBERALLY!

<action>Synthesize Archon findings by quality tier:</action>

**TIER 1 - Museum-Grade** (Awwwards, premium agencies):
- [List patterns with Archon source_id citations]

**TIER 2 - Professional** (Codrops, advanced tutorials):
- [List patterns with Archon source_id citations]

**TIER 3 - Solid/Basic** (CodePen, standard examples):
- [List patterns with Archon source_id citations]

---

**🔍 TIER 2: WEBSEARCH - 2024-2025 CUTTING-EDGE TRENDS**

<action>Search for premium examples NOT in Archon (recent 2024-2025 work):</action>

**Search 1: Awwwards Winners**
```
WebSearch("{{component_context}} animation Awwwards 2025")
```

**Search 2: Premium Brands**
```
WebSearch("GSAP {{component_context}} Linear Stripe Vercel Apple premium 2024")
```

**Search 3: Brand-Specific Trends**
```
WebSearch("{{brand_personality}} web animation agency examples 2024")
```

**Target Agencies** (per Section 7.5):
- Linear app (GSAP excellence)
- Stripe (scroll storytelling)
- Vercel (minimal sophistication)
- Apple (cinematic parallax)
- Active Theory (WebGL + GSAP)
- ToyFight (precision)

<action>Document 2024-2025 trends discovered:</action>
- [List cutting-edge patterns with WebSearch URL citations]

---

**🔍 TIER 3: CONTEXT7 - API VERIFICATION** (Minimal Use)

<action>ONLY query Context7 if:</action>
- Need to verify GSAP 3.13+ specific API syntax
- Uncertainty about new plugin features not in Archon
- Version-specific compatibility questions

```
resolve-library-id("gsap")
get-library-docs(context7CompatibleLibraryID="/greensock/gsap", topic="[specific_plugin]", tokens=3000)
```

**Note:** Archon already has gsap.com docs - Context7 is redundant UNLESS querying brand-new features.

---

**📊 RESEARCH SYNTHESIS**

<action>Synthesize findings across ALL sources:</action>

**1. Pattern Identification**
- What patterns appear across multiple sources?
- Which are battle-tested (Archon verified)?
- Which are cutting-edge (WebSearch 2025)?

**2. Quality Assessment**
- Premium vs basic examples
- Complexity levels (simple, medium, high)
- Performance implications (60fps achievable?)

**3. Brand Personality Fit**
- Which patterns align with {{brand_personality}}?
- Apply Section 1.2 easing curve mapping
- Would this feel authentic or forced?

**4. Premium Plugin Opportunities**
- Which plugins would elevate these patterns?
- Combination opportunities (e.g., ScrollSmoother + SplitText)
- Per Section 2.3: Recommend aggressively (ALL FREE!)

<template-output>
archon_findings_by_tier,
archon_premium_plugin_examples,
websearch_2025_trends,
context7_api_notes,
research_synthesis,
brand_fit_assessment
</template-output>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->
<!-- STEP 4: CONCEPT GENERATION (RESEARCH-BACKED)                                         -->
<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->

<step n="4" goal="Generate 3-5 Premium Concepts (Research-Backed)">
<critical>Generate DISTINCT concepts - not variations of the same idea</critical>

<action>Apply ALL Deep-Research frameworks to create premium concepts</action>

**Concept Generation Mandate:**

Per Section 1.1: *"Great animations are meaningful, not just decorative"*
- Every concept MUST articulate WHY it exists (purpose)
- Link to user goals: {{user_goals}}

Per Section 1.2: Brand personality mapping
- Apply {{brand_personality}} → easing curves
- Document specific easing specifications

Per Section 1.3: Choreography planning
- Avoid *"triggering everything at once"*
- Plan parallel vs sequential motion

Per Section 4.1: Pixar Story Spine
- At least ONE concept uses 7-beat narrative structure
- Map to scroll sections or timed sequence

Per Section 2.3: Premium plugins
- *"This is a windfall"* - use aggressively!
- Recommend plugin combinations

Per Section 7.5: Agency benchmarks
- Think: *"How would Active Theory do this?"*
- Reference premium agency patterns

---

**FOR EACH CONCEPT (3-5 total), PROVIDE:**

**1. Name** - Evocative, memorable title (e.g., "Cinematic Depth Parallax")

**2. Visual Description** - How it looks and feels (sensory language, cinematic references)

**3. Purpose** - WHY this exists (link to {{user_goals}})
   Per Section 1.1: *"Every motion should serve a purpose"*

**4. Technical Approach** - GSAP features/plugins required
   - Core GSAP (timeline, tweens, etc.)
   - Plugins needed (cite Section 2.3: ALL FREE!)
   - ScrollTrigger configuration
   - Easing specifications (cite Section 1.2 brand mapping)

**5. Wow Factor** - What makes this premium/unique/memorable
   - Specific technique creating impact
   - How it differs from generic approaches

**6. Choreography Plan** - Timeline structure (cite Section 1.3)
   - Parallel motions (what happens simultaneously)
   - Sequential motions (what happens in order)
   - Temporal landmarks (start, middle, end)

**7. Narrative Structure** (if applicable) - Pixar Story Spine mapping (cite Section 4.1)
   - Beat 1: Once upon a time... (establish)
   - Beat 3: Until one day... (change)
   - Beat 6: Until finally... (climax/CTA)

**8. Complexity Level** - Simple / Medium / Medium-High / High
   - Implementation effort estimate
   - Technical challenge assessment

**9. Performance Impact** - Expected FPS, bundle size, optimization notes
   - 60fps achievable? (yes/no)
   - GPU-accelerated properties used
   - Mobile considerations

**10. Research Citations** - ALL sources consulted
   - Archon MCP: [pattern_name] (source: [source_id])
   - Deep-Research: Section [X.X] ([principle_name])
   - WebSearch: [agency/brand] [year] ([URL])
   - Agency benchmark: [cite Section 7.5 agency]

**11. Best Suited For** - When this concept shines vs when to avoid

**12. Accessibility Notes** - prefers-reduced-motion fallback approach

---

**CONCEPT DIVERSITY REQUIREMENTS:**

<critical>Mix is MANDATORY - not negotiable</critical>

- ✅ Complexity levels: At least one Medium, one Medium-High or High
- ✅ Technical approaches: Different methods (timeline, ScrollTrigger, physics, morphing)
- ✅ Visual styles: Variety (subtle, dramatic, playful, cinematic)
- ✅ At least one cutting-edge concept (2024-2025 WebSearch trends)
- ✅ At least one Pixar Story Spine narrative concept (Section 4.1)
- ✅ Premium plugin usage: Each concept leverages at least one FREE premium plugin

**AMBITION LEVEL:**

Per Section 1.1: *"Imagination First, Code Later"*
- Concepts should be AMBITIOUS, not safe
- Push boundaries while remaining achievable
- Think: What would impress a premium agency?

<template-output>concept_1, concept_2, concept_3, concept_4, concept_5</template-output>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->
<!-- STEP 5: PRESENTATION & SELECTION                                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->

<step n="5" goal="Present Concepts in Decision-Friendly Format">
<action>Present with film director energy - emphasize research backing</action>

🎬 **"I've researched premium {{component_context}} animations across 89 sources and applied 6 Deep-Research frameworks. Here are [N] stunning, research-backed options:"**

**Research Foundation:**
- ✅ Archon MCP: [X] premium patterns discovered
- ✅ Deep-Research: 6 framework sections applied (1.1, 1.2, 1.3, 4.1, 2.3, 7.5)
- ✅ WebSearch: [Y] cutting-edge 2024-2025 examples
- ✅ Context7: API verification (if used)

---

[Present each concept with ALL 12 attributes clearly formatted]

---

**Concept Comparison Table:**

| Concept | Complexity | Performance | Wow Factor | Best For | Research Sources |
|---------|------------|-------------|------------|----------|------------------|
| [Name 1] | [Level] | [FPS estimate] | [Key technique] | [Use case] | [Citations] |
| [Name 2] | [Level] | [FPS estimate] | [Key technique] | [Use case] | [Citations] |
| [Name 3] | [Level] | [FPS estimate] | [Key technique] | [Use case] | [Citations] |

---

**Highlight Tradeoffs:**
- Performance vs complexity
- Wow factor vs implementation time
- Cutting-edge vs proven patterns (Archon verified)
- Bold vs subtle approaches
- Timeline vs budget constraints

**Deep-Research Framework Applications:**
- Section 1.1 (Mindset): [How applied to concepts]
- Section 1.2 (Translation): {{brand_personality}} → [easing curves used]
- Section 1.3 (Storyboarding): [Choreography patterns]
- Section 4.1 (Pixar Spine): [Which concept(s) use narrative]
- Section 2.3 (Plugins): [Premium plugins recommended]
- Section 7.5 (Agencies): [Agency benchmarks referenced]

<ask>Which direction excites you? Want me to explore other angles? Need variations?</ask>

<template-output>concept_presentation, comparison_table, research_summary</template-output>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->
<!-- STEP 6: SELECTION & HANDOFF                                                          -->
<!-- ═══════════════════════════════════════════════════════════════════════════════════ -->

<step n="6" goal="Capture Selection and Prepare Implementation Handoff">
<check if="user_selects_concept">
<action>Confirm selection and capture rationale</action>

**"Excellent choice! [concept_name] will create genuine wow factor backed by [research citations]."**

<ask response="selection_rationale">What resonated most with this concept? (visual appeal, technical feasibility, wow factor, agency benchmark, other)</ask>

<action>Extract implementation details from selected concept:</action>

**Timeline Structure:**
- Sequence planning from Section 1.3
- Parallel vs sequential motions
- Temporal landmarks (start, middle, end)
- Label-based organization

**ScrollTrigger Configuration** (if applicable):
- Trigger points
- Pin requirements
- Scrub settings
- Responsive considerations

**Easing Specifications:**
- From Section 1.2 {{brand_personality}} mapping
- Specific curve names (power2.out, elastic.out(1, 0.5), etc.)
- Timing variations per animation beat

**GSAP Features Required:**
- Core features (timeline, tweens, staggers)
- Custom easing functions
- MatchMedia for responsive

**Premium Plugins** (cite Section 2.3: ALL FREE):
- ScrollTrigger requirements
- ScrollSmoother (if smooth scroll needed)
- MorphSVG (if icon/shape transitions)
- SplitText (if text choreography)
- DrawSVG (if line reveals)
- MotionPath (if custom trajectories)
- Flip (if layout transitions)

**Performance Considerations:**
- Expected FPS: [target]
- GPU-accelerated properties (transform, opacity)
- Bundle size impact
- Device optimization strategy
- prefers-reduced-motion fallback

**Inspiration Sources:**
- Archon patterns: [source_ids with pattern names]
- Agency benchmarks: [cite Section 7.5 agencies]
- WebSearch examples: [URLs with descriptions]
- Deep-Research frameworks: [sections applied]

<template-output>
selection_rationale,
selected_concept_technical_details,
timeline_structure,
scrolltrigger_config,
easing_specifications,
required_gsap_features,
required_plugins,
performance_notes,
inspiration_sources
</template-output>

<action>Define next steps for user:</action>

**Option 1: Implement Now**
→ Invoke `animation-production` workflow with selected concept as creative vision
→ Full pipeline: Director → Cinematographer → VFX → Editor → Tech Director

**Option 2: Expand Narrative Planning**
→ Invoke `plan-narrative` workflow to apply Pixar Story Spine in detail
→ Create storyboard-style narrative plan with timeline specs

**Option 3: Check Pattern Library**
→ Invoke `implement-from-pattern` if concept matches existing proven pattern
→ Fast implementation from 60+ pattern library

**Option 4: Save for Later**
→ Document concept in output file for future implementation
→ Research citations preserved for reference

<ask response="next_step">Which path forward? (1: Implement now | 2: Expand narrative | 3: Pattern library | 4: Save for later)</ask>

<template-output>next_step_choice, handoff_context</template-output>
</check>

<check if="user_requests_variations">
<action>Generate 2-3 variations of selected concept</action>
<action>Adjust technical approach, complexity, or visual style while maintaining core idea</action>
<action>Present variations with comparison to original</action>
<template-output>concept_variations</template-output>
</check>

<check if="user_wants_different_concepts">
<ask response="direction_change">What aspects should I change? (style, complexity, technical approach, narrative structure, other)</ask>
<goto step="4">Regenerate concepts with new direction and research focus</goto>
</check>
</step>

</workflow>

## Quality Standards (Research-Backed)

**Concept Quality - MANDATORY:**
- Each concept AMBITIOUS, not safe (per Section 1.1)
- Clear wow factor articulated with specific techniques
- Backed by research citations (Archon source_id + Deep-Research section + WebSearch URL + Agency benchmark)
- Technically feasible with GSAP 3.13.0+
- Premium plugins leveraged aggressively (ALL FREE per Section 2.3)

**Research Quality - TIER 1/2/3 HIERARCHY:**
- **TIER 1 PRIMARY:** Archon MCP (5 sources) + Deep-Research (6 sections) ALWAYS consulted
- **TIER 2 GAP FILLING:** WebSearch for 2024-2025 trends not in Archon
- **TIER 3 MINIMAL:** Context7 only for API verification if needed

**Deep-Research Framework Application - MANDATORY:**
- Section 1.1: Animator's Mindset principles applied to all concepts
- Section 1.2: {{brand_personality}} mapped to easing curves
- Section 1.3: Choreography planning (parallel vs sequential)
- Section 4.1: At least ONE concept uses Pixar Story Spine
- Section 2.3: Premium plugins recommended (ALL FREE!)
- Section 7.5: Agency benchmarks referenced

**Citation Format - REQUIRED:**
```
Sources:
- Archon MCP: [pattern_name] (source: [source_id])
- Deep-Research: Section [X.X] ([principle_name with verbatim quote])
- WebSearch: [agency/brand] [year] ([URL])
- Agency Benchmark: [Agency name from Section 7.5]
```

**Presentation Quality:**
- Decision-friendly format (comparison table)
- Clear tradeoffs explained (performance vs wow, proven vs cutting-edge)
- Film director energy (professional yet engaging)
- Every concept includes easing specifications from Section 1.2

## Success Metrics

- ✅ 80%+ user selects a concept (not requests restart)
- ✅ Concepts feel PREMIUM, not generic (ambitious per Section 1.1)
- ✅ Research citations provided for ALL concepts
- ✅ Mix of complexity levels (diversity requirement met)
- ✅ Technical approaches are AMBITIOUS (not safe defaults)
- ✅ Premium plugins used aggressively (Section 2.3 applied)
- ✅ Brand personality mapped to motion (Section 1.2 applied)
- ✅ At least one Pixar Story Spine concept (Section 4.1 applied)
- ✅ Agency benchmarks referenced (Section 7.5 applied)

## Integration with Other Workflows

**Feeds Into:**
- `animation-production` - Full pipeline with selected concept as creative vision
- `implement-from-pattern` - If concept matches pattern library entry
- `plan-narrative` - Expand Pixar Story Spine planning for selected concept

**Context Passed Forward:**
- Selected concept (all 12 attributes)
- Research findings (Archon + Deep-Research + WebSearch + Context7)
- User constraints and brand personality
- Inspiration sources with citations
- Deep-Research framework applications
