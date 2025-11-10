# Animation Narrative Plan
# Pixar Story Spine 7-Beat Framework

**Generated:** {{date}}
**Component:** {{component_or_page}}
**Story Type:** {{story_to_tell}}
**Interaction:** {{interaction_type}}
**Target Emotion:** {{desired_emotion}}
**Planned By:** The Director (GSAP Excellence Module)

---

## Executive Summary

### Narrative Overview

{{narrative_overview_complete}}

### Emotional Arc

**Start (Beat 1):** {{beat1_emotion}}
**Peak (Beat 3):** {{beat3_emotion}} ← Inciting incident
**Climax (Beat 6):** {{beat6_emotion}} ← Maximum impact
**Resolution (Beat 7):** {{beat7_emotion}}

**Target Emotion Achievement:** {{desired_emotion}}

### Duration & Interaction

**Total Duration:** {{total_duration}}
**Interaction Type:** {{interaction_type}}
**Scroll Distance (if applicable):** {{scroll_distance}}
**Auto-play Timing (if applicable):** {{autoplay_timing}}

### Research Foundation

**Deep-Research Sections Consulted:**
- Section 4.1: Pixar Story Spine Framework (7-beat structure - PRIMARY)
- Section 2.2: Timeline Choreography (overlaps, labels, nesting)
- Section 1.3: Storyboarding (temporal landmarks, parallel vs sequential)
- Section 4.2: Alternative Narrative Structures (evaluated)
- Section 1.2: Visual Translation Workflow (5-step process)

**Archon MCP Patterns:** {{archon_pattern_count}} narrative patterns discovered
**WebSearch Examples:** {{websearch_example_count}} premium 2024-2025 examples
**Total Research Backing:** 29k Deep-Research + Archon KB findings

---

## Visual Storyboard (7 Beats)

### Beat 1: Once Upon a Time... (Establish Context)

**Visual Description:**
{{beat1_once_upon_time}}

**Timing:** 0-0.8s (auto-play) or first scroll section
**Animation Purpose:** Orient the user, establish visual tone

**GSAP Implementation:**
```javascript
// Gentle fade-in, slow confident easing
gsap.from(".hero-content", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power1.out"
});
```

**Easing:** `power1.out` (gentle, welcoming)
**Key Elements:** {{beat1_elements}}
**Visual Tone:** {{beat1_visual_tone}}

**Archon Pattern Reference:** {{beat1_pattern_reference}}

**Quote from Section 4.1:**
*"Establish the world and context"*

---

### Beat 2: Every Day... (Status Quo)

**Visual Description:**
{{beat2_every_day}}

**Timing:** 0.8-2s hold state or pinned scroll section
**Animation Purpose:** Show the problem space or current reality

**GSAP Implementation:**
```javascript
// Muted animations to show limitation
ScrollTrigger.create({
  trigger: ".status-quo",
  start: "top center",
  onEnter: () => {
    gsap.to(".old-way", {
      opacity: 0.6, // Muted
      scale: 0.95,
      duration: 0.8
    });
  }
});
```

**Easing:** Moderate (not rushed, not dramatic)
**Visual Style:** Neutral/muted color palette, smaller scale
**Contrast Setup:** {{beat2_contrast_setup}}

**Quote from Section 4.1:**
*"Show the status quo, the normal state"*

---

### Beat 3: Until One Day... (Inciting Incident) 🎯 PEAK MOMENT

**Visual Description:**
{{beat3_until_one_day_PEAK}}

**Timing:** 2-3s into sequence (peak moment of animation)
**Animation Purpose:** Introduce the change, the new possibility

**GSAP Implementation:**
```javascript
// Dramatic reveal with energy shift
gsap.to(".new-solution", {
  scale: 1.1,
  opacity: 1,
  duration: 1,
  ease: "back.out(1.7)", // Bouncy, exciting
  onComplete: () => {
    // Cascade begins...
  }
});
```

**Easing:** `back.out(1.7)` or `elastic.out` (bouncy, exciting)
**Energy Shift:** {{beat3_energy_shift}}
**Trigger Event:** {{beat3_trigger_event}}
**Key Moments Integrated:** {{key_moments_integrated_beat3}}

**Premium Effects Considered:** {{beat3_premium_effects}}

**Archon Pattern Reference:** {{beat3_pattern_reference}}

**Quote from Section 4.1:**
*"This is where excitement builds"*

---

### Beat 4: Because of That... (Consequences/Benefits)

**Visual Description:**
{{beat4_because_of_that}}

**Timing:** 3-5s into overall sequence
**Animation Purpose:** Show the chain reaction, the benefits unfolding

**GSAP Implementation:**
```javascript
// Staggered sequence with overlaps for richness
const benefitsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".benefits-section",
    start: "top center",
    end: "bottom center",
    scrub: 1 // User controls pace
  }
});

benefitsTl
  .from(".benefit-1", { x: -100, opacity: 0, duration: 1 })
  .from(".benefit-2", { x: -100, opacity: 0, duration: 1 }, "-=0.6") // Overlap
  .from(".benefit-3", { x: -100, opacity: 0, duration: 1 }, "-=0.6")
  .from(".benefit-4", { x: -100, opacity: 0, duration: 1 }, "-=0.6");
```

**Overlap Pattern:** `-=0.6` for richness (Section 2.2 technique)
**Building Energy:** Each reveal slightly faster/bigger
**Benefits Visualized:** {{beat4_benefits_list}}
**User Control:** {{beat4_user_control}}

**Quote from Section 4.1:**
*"User scrolls at their own pace, controlling the narrative"*

---

### Beat 5: Because of That... (Continued Consequences) - OPTIONAL

**Visual Description:**
{{beat5_because_of_that_optional}}

**Included:** {{beat5_included}}
**Additional Benefits:** {{beat5_additional_benefits}}
**Technique Variation:** {{beat5_technique_variation}}

**Note:** Optional beat - only included if narrative complexity requires cascading effects beyond Beat 4.

---

### Beat 6: Until Finally... (Resolution/CTA) 🎬 CLIMAX

**Visual Description:**
{{beat6_until_finally_CLIMAX}}

**Timing:** 5-7s total sequence (or scroll-driven endpoint)
**Animation Purpose:** Deliver the payoff, the transformation complete

**GSAP Implementation:**
```javascript
// Hero moment with maximum visual impact
const tl = gsap.timeline();

tl.to(".background", {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  duration: 1.5,
  ease: "power2.inOut"
})
.from(".final-message", {
  scale: 0,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(2)", // Big reveal
  stagger: 0.1
}, "-=0.8")
.to(".cta-button", {
  y: 0,
  opacity: 1,
  duration: 0.8,
  ease: "power2.out"
});
```

**Easing:** `back.out(2)` (most dramatic - big reveal)
**Visual Impact:** Full-screen or prominent placement
**Premium Effects Used:** {{beat6_premium_effects_used}}
**CTA Strategy:** {{beat6_cta_strategy}}
**Emotional Payoff:** User feels {{desired_emotion}} at peak intensity

**Archon Pattern Reference:** {{beat6_pattern_reference}}

**Quote from Section 4.1:**
*"This is the 'wow' moment"*

---

### Beat 7: And Ever Since Then... (New Normal) - OPTIONAL

**Visual Description:**
{{beat7_ever_since_optional}}

**Included:** {{beat7_included}}
**Timing:** Return to slow, settled animations
**New Normal State:** {{beat7_new_normal}}
**Confidence Builders:** {{beat7_confidence_builders}}
**Subtle Motion:** {{beat7_subtle_motion}}

**Easing:** `power1.out` (calm, settled - same as Beat 1)

**Quote from Section 4.1:**
*"Users feel the resolution is complete and actionable"*

**Note:** Optional beat - includes "ever after" closure if narrative benefits from it.

---

## Timeline Technical Specification

### GSAP Timeline Structure

```javascript
const narrativeTl = gsap.timeline({
  defaults: { ease: "power2.out", duration: 1 }
});

// BEAT 1: Once Upon a Time (Establish Context)
narrativeTl.addLabel("beat1-context");
{{timeline_beat1_code}}

// BEAT 2: Every Day (Status Quo)
narrativeTl.addLabel("beat2-status-quo", "+=0.5");
{{timeline_beat2_code}}

// BEAT 3: Until One Day (Inciting Incident - PEAK)
narrativeTl.addLabel("beat3-change", "-=0.3"); // Overlap for flow
{{timeline_beat3_code}}

// BEAT 4: Because of That (Consequences)
narrativeTl.addLabel("beat4-consequences", "<0.4");
{{timeline_beat4_code}}

// BEAT 5: Because of That (Continued - Optional)
{{timeline_beat5_code}}

// BEAT 6: Until Finally (Resolution/Climax)
narrativeTl.addLabel("beat6-climax", "+=0.2");
{{timeline_beat6_code}}

// BEAT 7: Ever Since Then (New Normal - Optional)
{{timeline_beat7_code}}
```

### Label Strategy (Section 2.2)

**Labels for Narrative Beats:**
- `"beat1-context"` - Opening establishment
- `"beat2-status-quo"` - Problem/limitation shown
- `"beat3-change"` - Inciting incident (PEAK)
- `"beat4-consequences"` - Benefits unfold
- `"beat6-climax"` - Resolution/CTA (CLIMAX)

**Benefits of Labels:**
- Easy navigation: Jump to specific narrative beats
- Modular editing: Update beats independently
- Clear structure: Code mirrors storyboard

### Relative Positioning Plan

{{timeline_technical_spec_positioning}}

**Overlap Patterns (Section 2.2):**
- `-=0.6` for cascading consequences (Beat 4)
- `-=0.3` for beat transitions (flow)
- `"<0.4"` for starting 0.4s after previous tween's start
- `"<0.5"` for mid-beat overlaps

**Quote from Section 2.2:**
*"Instead of calculating actual times, you describe relationships"*

### Stagger Patterns

{{timeline_technical_spec_staggers}}

**From Section 4.1 "Cascading Consequences":**
- Benefits reveal: `stagger: 0.1` or custom function
- Building energy: Each reveal slightly faster/bigger
- User-controlled pacing: `scrub: 1` in ScrollTrigger

### Premium Plugin Opportunities

{{timeline_premium_plugins}}

**Beat 6 Climax (save best for last):**
- MorphSVG: Logo transformations, icon reveals
- SplitText: Headline character-by-character reveals
- Flip: State changes (grid to detail, card flips)
- DrawSVG: Signature effects, path animations

**Quote from Section 4.1:**
*"Often includes MorphSVG, SplitText, or premium effects"*

### Control Methods (Section 2.2)

**For {{interaction_type}} implementation:**

```javascript
// Scroll-driven: Use scrub for user control
scrollTrigger: {
  trigger: ".narrative-section",
  start: "top top",
  end: "bottom bottom",
  scrub: 1, // User controls pacing
  pin: true
}

// Auto-play: Use control methods
narrativeTl.play();
narrativeTl.pause();
narrativeTl.reverse(); // For toggle animations
narrativeTl.timeScale(2); // Speed up/slow down
narrativeTl.progress(0.5); // Jump to midpoint
```

---

## Key Animation Moments

### Mapped to Narrative Beats

{{key_moments_mapped_to_beats}}

**From User Input ({{key_moments}}):**

**Moment 1:** [Description]
- Mapped to Beat: [1-7]
- GSAP Method: [gsap.to/from/timeline]
- Easing: [Specific curve]
- Timing: [Duration/scroll position]
- Archon Pattern: [Reference]

**Moment 2:** [Description]
- Mapped to Beat: [1-7]
- GSAP Method: [gsap.to/from/timeline]
- Easing: [Specific curve]
- Timing: [Duration/scroll position]
- Section 4.1 Example: [Code reference]

**Moment 3:** [Description]
- Mapped to Beat: [1-7]
- GSAP Method: [gsap.to/from/timeline]
- Easing: [Specific curve]
- Timing: [Duration/scroll position]

**Moment 4:** [Description (if applicable)]
- Mapped to Beat: [1-7]
- GSAP Method: [gsap.to/from/timeline]
- Easing: [Specific curve]
- Timing: [Duration/scroll position]

**Moment 5:** [Description (if applicable)]
- Mapped to Beat: [1-7]
- GSAP Method: [gsap.to/from/timeline]
- Easing: [Specific curve]
- Timing: [Duration/scroll position]

### Integration with Emotional Arc

{{key_moments_emotional_integration}}

---

## Implementation Roadmap

### Phase 1: Foundation (Beats 1-2)

**Build:** Opening context + status quo

**Tasks:**
{{implementation_roadmap_phase1}}

**Testing Checkpoints:**
- [ ] Does Beat 1 intro establish the right visual tone?
- [ ] Does Beat 2 status quo create contrast for Beat 3?
- [ ] Is timing appropriate (0-2s total)?
- [ ] Do animations feel gentle and welcoming (Beat 1)?
- [ ] Does muted style effectively show limitation (Beat 2)?

**Completion Criteria:** User lands and understands context before change.

---

### Phase 2: Peak Moment (Beat 3)

**Build:** Inciting incident / dramatic reveal

**Tasks:**
{{implementation_roadmap_phase2}}

**Testing Checkpoints:**
- [ ] Is the energy shift dramatic enough?
- [ ] Does it create excitement (not confusion)?
- [ ] Is timing at peak moment (2-3s into sequence)?
- [ ] Does easing feel bouncy/exciting (`back.out(1.7)`)?
- [ ] Are {{key_moments}} elements integrated?

**Completion Criteria:** User feels "something changed" with energy.

---

### Phase 3: Cascading Consequences (Beats 4-5)

**Build:** Benefits unfold / chain reaction

**Tasks:**
{{implementation_roadmap_phase3}}

**Testing Checkpoints:**
- [ ] Do timeline overlaps (`-=0.6`) create richness?
- [ ] Does energy build toward climax (not plateau)?
- [ ] Is scroll scrubbing enabled for user control (if {{interaction_type}} = scroll-driven)?
- [ ] Are stagger patterns smooth (not mechanical)?
- [ ] Does timing feel like 3-5s into overall sequence?

**Completion Criteria:** User sees benefits multiply, momentum building.

---

### Phase 4: Climax & Resolution (Beat 6)

**Build:** Hero moment / maximum impact

**Tasks:**
{{implementation_roadmap_phase4}}

**Testing Checkpoints:**
- [ ] Is this the WOW moment (maximum impact)?
- [ ] Does it deliver emotional payoff ({{desired_emotion}})?
- [ ] Is easing most dramatic (`back.out(2)`)?
- [ ] Are premium effects used (MorphSVG, SplitText)?
- [ ] Is CTA clear and compelling?
- [ ] Is timing slowest/most dramatic (5-7s total)?

**Completion Criteria:** User feels peak emotion and clear next step.

---

### Phase 5: New Normal (Beat 7 - Optional)

**Build:** Settled state / closure

**Tasks:**
{{implementation_roadmap_phase5}}

**Testing Checkpoints:**
- [ ] Does it provide closure?
- [ ] Are confidence builders present?
- [ ] Is timing calm/settled (return to slow)?
- [ ] Do micro-interactions feel polished?

**Completion Criteria:** User feels transformation is complete and actionable.

---

### Phase 6: Polish & Accessibility

**Build:** Cross-browser testing, accessibility, performance

**Tasks:**
{{implementation_roadmap_phase6}}

**Testing Checkpoints (Section 4.1 "Common Mistakes"):**
- [ ] **No random effects** - All animations serve narrative purpose
- [ ] **Varied pacing** - Not uniform timing (each beat has distinct feel)
- [ ] **User control** - ScrollTrigger scrub enabled (if scroll-driven)
- [ ] **Clear climax** - Beat 6 payoff is satisfying
- [ ] **Emotional arc** - Achieves {{desired_emotion}}
- [ ] **60fps performance** - Especially Beat 6 premium effects
- [ ] **prefers-reduced-motion** - Fallback implemented
- [ ] **Cross-browser** - Tested in Chrome, Firefox, Safari
- [ ] **Mobile tested** - Works on touch devices
- [ ] **Research citations** - All quotes properly credited

**Completion Criteria:** Production-ready narrative animation.

---

## Research Foundations

### Archon MCP Narrative Patterns

{{archon_narrative_patterns}}

**Total Patterns Discovered:** [Count]
**Source Citations:** [All Archon source IDs/URLs]

**Key Patterns Applied:**
1. [Pattern name]: [How it influenced narrative design]
2. [Pattern name]: [How it influenced beat structure]
3. [Pattern name]: [How it influenced timing/easing]

---

### Deep-Research Frameworks Applied

#### Section 4.1: Pixar Story Spine Framework

{{pixar_story_spine_7beat_complete}}

**7-Beat Structure Application:**
- Beat 1: [Summary of how applied]
- Beat 2: [Summary of how applied]
- Beat 3: [Summary of how applied]
- Beat 4-5: [Summary of how applied]
- Beat 6: [Summary of how applied]
- Beat 7: [Summary of how applied]

**Key Insights from Section 4.1:**
- *"Humans are wired for stories. The Story Spine mirrors the Hero's Journey structure."*
- *"Scroll position naturally maps to narrative time."*
- *"Save MorphSVG, SplitText, premium effects for Beat 6."*

---

#### Section 2.2: Timeline Choreography

{{timeline_choreography_patterns}}

**Techniques Applied:**
- Relative positioning: `"-=0.6"`, `"<0.4"`, `"<0.5"`
- Labels: `addLabel("beat3-change")`, `addLabel("climax")`
- Nesting: Modular timelines for each beat
- Control: `.reverse()`, `.timeScale()`, `.progress()` for {{interaction_type}}

**Key Insights from Section 2.2:**
- *"Instead of calculating actual times, you describe relationships."*
- *"This modular approach means each sub-timeline can be developed and tested separately."*

---

#### Section 1.3: Storyboarding Principles

{{storyboarding_principles_applied}}

**Principles Applied:**
- Temporal landmarks: Start (Beat 1), Middle (Beat 3), End (Beat 6)
- Parallel vs sequential: [How {{key_moments}} were choreographed]
- Ease and intensity: Gentle intro → bouncy mid → dramatic climax
- Visual readability: Each beat expresses one narrative thought

**Key Insights from Section 1.3:**
- *"World-class animations often layer motions (parallel) for richness, but maintain clarity by sequencing major changes."*
- *"Avoid triggering everything at once with equal timing - that feels chaotic."*

---

#### Section 4.2: Alternative Narrative Structures

{{alternative_structures_evaluated}}

**Structures Considered:**
- Pixar Story Spine 7-beat (SELECTED)
- Three-Act Structure (evaluated)
- Five-Act Structure (evaluated)
- Others: In Medias Res, Circular Narrative

**Selection Rationale:** [Why Pixar 7-beat fits {{story_to_tell}} best]

**Key Insights from Section 4.2:**
- *"Start with Pixar Story Spine - It's the most versatile."*
- *"Match structure to content length - Don't over-complicate short pages."*

---

#### Section 1.2: Visual Translation Workflow

{{visual_translation_workflow}}

**5-Step Process Applied:**
1. **Gather Inspiration**: [Archon patterns + WebSearch examples]
2. **Deconstruct Effect**: [Breakdown of narrative structure]
3. **Choreograph on Paper**: [Text-based storyboard created]
4. **Choose Technique**: [GSAP vs CSS decisions]
5. **Prototype Plan**: [Which beats to test in isolation]

**Key Insights from Section 1.2:**
- *"Use CSS for simple static transitions and GSAP for sequenced, synchronized or complex animations."*

---

### 2024-2025 Premium Narrative Examples

{{websearch_2025_narratives}}

**Examples Referenced:**
1. [URL]: [How it influenced design]
2. [URL]: [Narrative technique observed]
3. [URL]: [Timing/pacing pattern]

**2024-2025 Trends Identified:**
- [Trend 1]
- [Trend 2]
- [How trends influenced {{story_to_tell}} approach]

---

## Strategic Synthesis

{{narrative_strategy_synthesis}}

**Story Structure Decision:** Pixar Story Spine 7-beat

**Choreography Approach:**
- Parallel motions: [Which elements move together]
- Sequential motions: [Which elements move in sequence]
- Rationale: [Why this mix for {{key_moments}}]

**Timing Strategy:**
- Beat 1: Slow (0-0.8s, power1.out) - Build trust
- Beat 2: Moderate (0.8-2s, muted) - Show limitation
- Beat 3: Fast/dramatic (2-3s, back.out(1.7)) - Create excitement
- Beat 4-5: Building (3-5s, overlaps) - Momentum toward climax
- Beat 6: Slowest/most dramatic (5-7s, back.out(2)) - Deliver wow
- Beat 7: Calm (return slow, power1.out) - Provide closure

**Emotional Arc to {{desired_emotion}}:**
[How 7-beat structure delivers target emotion]

**Technical Implementation:**
- {{interaction_type}} approach
- [Scroll-driven with scrub | Auto-play timeline | User-triggered | Hybrid]
- [Specific GSAP configuration]

---

## Citations & References

### Archon MCP Sources

{{research_citations_archon}}

**Total Archon Patterns:** [Count]
**Priority Sources:**
- b9f6b322298feb21 (gsap.com official docs)
- 6a6860cfc96e173b (ScrollTrigger performance)
- 1e5cc3bd5125be3c (Codrops tutorials)
- f8a3c9e5b1d74a29 (CSS-Tricks GSAP guides)

---

### Deep-Research Sections

{{research_citations_deep_research}}

**Sections Consulted (29k total):**
- **Section 4.1**: Pixar Story Spine Framework for GSAP (9.7k) - PRIMARY
- **Section 2.2**: Mastering GSAP Timeline Techniques (4.2k)
- **Section 1.3**: Storyboarding Complex Sequences (3.2k)
- **Section 4.2**: Alternative Narrative Structures (8.8k)
- **Section 1.2**: Visual Inspiration → Technical Translation Workflow (3.2k)

**File Paths:**
- `04-41-pixar-story-spine-framework-for-gsap.md`
- `06-22-mastering-gsap-timeline-techniques.md`
- `03-13-storyboarding-complex-sequences.md`
- `04-42-alternative-narrative-structures.md`
- `02-12-visual-inspiration-technical-translation-workflow.md`

---

### WebSearch Examples (if used)

{{research_citations_websearch}}

---

*🎬 Generated using GSAP Excellence Module - Pixar Story Spine 7-Beat Narrative Planning*

**Framework:** Pixar Story Spine (Deep-Research Section 4.1)
**Research Backing:** 29k Deep-Research + Archon KB + WebSearch 2024-2025 examples
**Created with:** Research-backed excellence, not generic AI templates

---

**Quote from Section 4.1:**
*"Every scroll tells a story. Make it a good one."*
