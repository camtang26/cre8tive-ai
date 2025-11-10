<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/optimize-animation/workflow.yaml</critical>

# optimize-animation - Animation FEEL Optimization Workflow

**Agent:** Editor (The Editor)
**Workflow:** optimize-animation
**Version:** 2.0.0-premium
**Purpose:** Refine animation FEEL through systematic easing selection, timing polish, and motion quality enhancement

<action>Communicate all responses in {communication_language} throughout this workflow</action>

---

## Critical Distinction

**⚠️ UNDERSTAND BEFORE PROCEEDING:**

This workflow optimizes animation **FEEL** (easing, timing, motion quality) - NOT technical performance.

| Aspect | **optimize-animation** (THIS workflow) | **optimize-performance** (Tech Director) |
|--------|---------------------------------------|----------------------------------------|
| **Agent** | Editor | Tech Director |
| **Focus** | ARTISTIC refinement | TECHNICAL optimization |
| **Optimizes** | Easing curves, timing, motion feel | 60fps, GPU acceleration, memory |
| **Use When** | Animation runs smoothly but FEELS wrong | Animation is janky, drops frames, leaks memory |
| **Sections** | Deep-Research 2.1-2.2 (Easing, Timing) | Deep-Research 5.1-5.6 (Performance) |
| **Output** | Polish recommendations, ease/timing adjustments | Performance fixes, GPU optimization |

**If your animation is janky or slow:** Use `optimize-performance` workflow instead!

**If your animation feels awkward or wrong:** This workflow is correct! Continue below.

---

## Overview

This workflow systematically refines animation FEEL using the **Easing Personality Framework** and **Timing Refinement Patterns** from Deep-Research Sections 2.1-2.2. Unlike technical performance optimization, this is about making animations **emotionally resonant** and **brand-appropriate**.

**Key Optimization Areas:**
1. **Easing Refinement** - Match motion personality to brand/context
2. **Timing Polish** - Duration, delays, overlap strategy
3. **Stagger Optimization** - Sequential reveal patterns
4. **Motion Quality** - Natural movement, overshoot, bounce appropriateness

---

## Step 1: Gather Animation Context

<ask name="animation_code">
**Animation Code**

Provide your GSAP animation implementation:
- Timeline or individual tweens
- Current easing values (if any)
- Current durations and delays
- Stagger configurations (if applicable)

Example:
```javascript
const tl = gsap.timeline();
tl.to(".card", { x: 100, duration: 1, ease: "power1.out" })
  .to(".card", { opacity: 0, duration: 0.5 });
```

**Provide complete code** - not snippets!
</ask>

<ask name="current_feel">
**Current Animation Feel**

How does the animation currently FEEL? What's wrong with it?

Examples:
- "Too fast - feels rushed and jarring"
- "Too slow - feels sluggish and boring"
- "Wrong personality - should feel playful but feels mechanical"
- "Stagger timing off - elements appear too quickly"
- "Lacks impact - doesn't feel premium"
- "Overshoot is excessive - feels cartoonish when should be elegant"

**Be specific about the FEELING, not technical performance!**
</ask>

<ask name="desired_feel">
**Desired Animation Feel**

What should the animation FEEL like?

Use personality descriptors:
- **Dramatic**: Impactful, premium, bold (fast-to-slow entrances)
- **Gentle**: Elegant, refined, understated (smooth transitions)
- **Playful**: Energetic, whimsical, lighthearted (bounce/elastic)
- **Precise**: Mechanical, controlled (linear/none)
- **Custom**: Specific brand motion, physics simulation

Example: "Should feel dramatic and premium - like a high-end product reveal"
</ask>

<ask name="brand_context">
**Brand/Project Context**

What's the brand personality or project context?

Examples:
- "Luxury e-commerce site - needs premium, refined feel"
- "Kids' educational app - should be playful and fun"
- "Corporate dashboard - clean, precise, professional"
- "Creative portfolio - bold, dramatic, memorable"

**Motion should match brand!**
</ask>

<ask name="animation_type">
**Animation Type**

What type of animation is this?

- Entrance/exit animation (elements appearing/disappearing)
- Transition (page/section changes)
- Interaction (hover, click, drag)
- Scroll-driven (parallax, reveal)
- Background/ambient (continuous loop)
- Attention-grabbing (call-to-action, notification)

**Type affects easing/timing choices!**
</ask>

<template-output>animation_code_provided, current_feel_documented, desired_feel_identified, brand_context_established, animation_type_classified</template-output>

---

## Step 2: Research Gate (MANDATORY - Cannot Proceed Without)

<research-gate enforcement="MANDATORY" blocking="true">

**⚠️ RESEARCH ENFORCEMENT:**
This is a MANDATORY blocking checkpoint. You CANNOT proceed to Step 3 until this research is COMPLETE.

**Research Protocol:** Animation FEEL Optimization Framework

### Phase 1: Deep-Research Section 2.1 - Easing Fundamentals (REQUIRED)

**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md`

<action>
Read COMPLETE Section 2.1 focusing on:
- Easing Functions section
- Easing personality (dramatic, gentle, playful)
- CustomEase for world-class polish
- Power eases (power1-power4) intensity differences
- Elastic, bounce, back eases for specific effects
- Default ease in GSAP 3.x (power1.out)
</action>

**Extract and Document:**

**Key Quote (Easing Philosophy):**
> *"Use easing deliberately to convey weight and style... premium sites rarely stick to default; they tailor easing per animation."*
> (Source: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md)

**Easing Personality Framework:**

**1. Dramatic (Impactful, Bold):**
- **Eases**: `power4.out`, `expo.out`
- **Use Case**: *"Use `power4.out` or `expo.out` for a dramatic, fast-to-slow entrance."*
- **Feel**: Fast-to-slow, impactful, premium
- **When**: Product reveals, hero sections, big entrances

**2. Gentle (Elegant, Refined):**
- **Eases**: `power2.inOut`, `power1.out` (default)
- **Use Case**: *"Use `power2.inOut` for gentle, smooth transitions."*
- **Feel**: Smooth, understated, professional
- **When**: Subtle UI changes, page transitions, background animations

**3. Playful (Energetic, Fun):**
- **Eases**: `bounce.out`, `elastic.out`
- **Use Case**: *"Use `bounce.out` or `elastic.out` for playful, bouncy elements (e.g. cartoonish UI)."*
- **Feel**: Whimsical, energetic, lighthearted
- **When**: Kids' apps, fun interactions, attention-grabbing elements

**4. Precise (Mechanical, Controlled):**
- **Eases**: `linear`, `none`
- **Use Case**: *"Use linear (no ease) rarely -- mostly for continuous linear movement or precise scrubbing animations."*
- **Feel**: Mechanical, exact, controlled
- **When**: Scrubbing, continuous movement, data visualizations

**5. Custom (World-Class Polish):**
- **Tool**: CustomEase, Ease Visualizer
- **Use Case**: *"For world-class polish, customizing easing is common... use a CustomEase curve to match a very specific motion feel (like mimicking physics)."*
- **Feel**: Branded motion, physics simulation, unique personality
- **When**: Premium sites, specific brand motion language

**Stagger Easing:**
> *"Stagger object also supports `amount` (total duration of stagger), and even `repeat` or `yoyo` for looping staggers."*

Staggers have their OWN easing via `stagger: { ease: "power1.in" }` to control the CURVE of the stagger distribution!

---

### Phase 2: Deep-Research Section 2.2 - Timeline Choreography (REQUIRED)

**Location:** `{project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md`

<action>
Read COMPLETE Section 2.2 focusing on:
- Relative positioning ("<", "+=", labels)
- Timeline control methods (reverse(), timeScale(), progress())
- Nesting timelines for modularity
- Repeat/yoyo with repeatRefresh
- Defaults for duration/ease
</action>

**Extract and Document:**

**Key Quote (Timeline Philosophy):**
> *"Understanding and leveraging these timeline techniques enables the creation of complex animation choreography that is time-accurate and maintainable."*
> (Source: 06-22-mastering-gsap-timeline-techniques.md)

**Timing Refinement Patterns:**

**1. Relative Positioning:**
- `"<"` - Starts at SAME time as previous tween
- `"<0.5"` - Starts 0.5s after previous tween's START
- `"+=1"` - Starts 1s after previous tween ENDS
- `"-=0.5"` - Starts 0.5s BEFORE previous tween ends (overlap!)

> *"This relative scheduling (using `"<"` or `"+="` notations) makes complex overlapping sequences easier to read and adjust."*

**2. Timeline Control:**
- `.reverse()` - Play backward (great for toggle animations)
- `.timeScale(value)` - Speed up/slow down (can be tweened!)
- `.progress(0-1)` - Scrub to specific point
- `.seek(timeOrLabel)` - Jump to time or label

> *"For instance, `.timeScale()` can dynamically speed up or slow down animations... This can even be tweened to create acceleration effects."*

**3. Nesting Timelines:**
> *"You can treat a timeline as a tween by adding it to another timeline... This modular approach means each sub-timeline can be developed and tested separately."*

Allows breaking complex animations into components!

**4. Repeat/Yoyo with Variety:**
> *"When looping, consider using the `repeatRefresh:true` on tweens if you want them to pick new random values on each loop."*

For background animations with variety!

---

### Phase 3: Archon MCP Queries (REQUIRED)

**Query 1: Easing Selection Patterns**
```javascript
rag_search_knowledge_base("GSAP easing curves CustomEase selection", source_id="b9f6b322298feb21", match_count=8)
```

**Document:**
- CustomEase usage patterns
- Ease Visualizer tool recommendations
- Real-world easing choices from premium sites

**Query 2: Timing Polish Examples**
```javascript
rag_search_code_examples("GSAP timeline timing overlap stagger", match_count=8)
```

**Document:**
- Timeline choreography patterns
- Overlap strategies
- Stagger configurations (from, amount, each)

**Query 3: Animation Feel Optimization**
```javascript
rag_search_knowledge_base("animation personality motion feel refinement", match_count=8)
```

**Document:**
- How to match animation feel to brand
- Motion personality guidelines
- Timing/ease combinations for specific feels

---

### Phase 4: Analyze User's Animation Against Framework

<action>
Apply Easing Personality Framework to user's code:
- What ease is currently used?
- What personality does it convey?
- Does it match desired feel?
- Is it default (power1.out) when custom would be better?
</action>

<action>
Apply Timing Refinement Patterns to user's code:
- Duration too fast/slow for desired feel?
- Sequencing appropriate (sequential vs overlapping)?
- Stagger intervals match pacing?
- Gaps/pauses intentional or awkward?
</action>

<action>
Compare current vs desired:
- Current feel: {{current_feel}}
- Desired feel: {{desired_feel}}
- Gap analysis: What needs to change?
</action>

---

<checkpoint type="approval-gate" blocking="true">
🚨 **STOP. Verify Research Complete:**
- [ ] Deep-Research Section 2.1 read (Easing Personality Framework documented)
- [ ] Deep-Research Section 2.2 read (Timing Refinement Patterns documented)
- [ ] 3 Archon queries executed (results documented)
- [ ] User's animation analyzed against frameworks
- [ ] Gap between current and desired feel identified

**User must explicitly continue with "Continue [c]"**

<mandate>Agent cannot rationalize skipping - user input required</mandate>
</checkpoint>

</research-gate>

---

## Step 3: Easing Refinement Analysis

Based on research findings, analyze current easing choices:

### Current Easing Audit

<action>
For EACH animation in user's code:
1. Identify current ease (or "default" if none specified)
2. Classify personality (dramatic/gentle/playful/precise/none)
3. Rate appropriateness for desired feel (1-5 stars)
4. Flag mismatches
</action>

**Example Analysis:**
```
Animation 1: .to(".card", { x: 100, duration: 1, ease: "power1.out" })
- Current ease: power1.out (GSAP default)
- Personality: Gentle (slight ease-out)
- Desired: Dramatic (user wants "premium, impactful")
- Rating: ⭐⭐ (2/5) - Too subtle for desired feel
- Recommendation: Change to power4.out or expo.out
```

<template-output>easing_audit_complete, mismatches_identified, recommendations_drafted</template-output>

### Easing Personality Recommendations

<action>
For each mismatch, provide specific ease recommendations:
- Match desired personality from framework
- Provide 2-3 ease options (primary + alternatives)
- Explain WHY each ease fits
- Include before/after code examples
</action>

**Recommendation Format:**

**Animation [N]: [Element] ([Current Feel] → [Desired Feel])**

**Problem:**
- Current: `ease: "{{current_ease}}"` ({{current_personality}})
- Feels: {{current_feel_description}}
- Desired: {{desired_personality}}

**Solution Options:**

**Option 1 (Recommended): {{recommended_ease}}**
- Personality: {{personality_match}}
- Feel: {{expected_feel}}
- Why: {{reasoning}}
- Code:
```javascript
// BEFORE
gsap.to(".element", { x: 100, ease: "{{current_ease}}" });

// AFTER
gsap.to(".element", { x: 100, ease: "{{recommended_ease}}" });
```

**Option 2 (Alternative): {{alternative_ease}}**
- Softer/stronger variation
- Use if Option 1 feels too intense/subtle

**Option 3 (CustomEase - Premium):**
- Use Ease Visualizer: https://gsap.com/ease-visualizer
- Draw custom curve matching exact feel
- Code:
```javascript
CustomEase.create("brandEase", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,0.985 0.37,1.007 0.497,1.01 0.574,1.01 0.651,1.01 1,1 1,1");
gsap.to(".element", { x: 100, ease: "brandEase" });
```

<template-output>easing_recommendations_provided, before_after_examples, custom_ease_guidance</template-output>

---

## Step 4: Timing Polish Analysis

Based on Deep-Research Section 2.2, analyze timing choices:

### Duration Analysis

<action>
For EACH animation:
1. Current duration value
2. Calculate "feel speed" (distance/duration ratio)
3. Compare to desired pacing
4. Flag too-fast or too-slow animations
</action>

**Duration Guidelines (from research):**

**Fast (0.3-0.6s):**
- Use: Micro-interactions, tooltips, quick state changes
- Feel: Snappy, responsive, efficient
- Risk: Too fast feels jarring

**Medium (0.8-1.2s):**
- Use: Standard transitions, entrances, most UI
- Feel: Comfortable, natural, balanced
- Default: GSAP default is 0.5s (usually too fast!)

**Slow (1.5-3s):**
- Use: Hero sections, dramatic reveals, scroll effects
- Feel: Cinematic, luxurious, impactful
- Risk: Too slow feels sluggish

**Very Slow (3s+):**
- Use: Background/ambient, continuous loops
- Feel: Subtle, atmospheric, barely noticeable
- Risk: Feels broken if not intentional

**Recommendations:**

For each duration mismatch:
```
Animation [N]: [Element]
- Current: {{current_duration}}s
- Feels: {{current_speed_feel}} ({{too_fast_or_slow}})
- Desired pacing: {{desired_speed}}
- Recommended: {{new_duration}}s
- Reasoning: {{why}}
```

### Sequencing Analysis

<action>
Analyze timeline sequencing:
1. Identify current pattern (sequential/simultaneous/overlapping/gapped)
2. Evaluate appropriateness for animation type
3. Recommend improvements using relative positioning
</action>

**Sequencing Patterns (from Deep-Research 2.2):**

**Sequential (Default):**
```javascript
tl.to(".a", { x: 100 })
  .to(".b", { x: 100 });  // Starts after .a finishes
```
- Use: Step-by-step reveals, guided narratives
- Feel: Methodical, clear, easy to follow

**Simultaneous:**
```javascript
tl.to(".a", { x: 100 })
  .to(".b", { x: 100 }, "<");  // "<" = start at same time as previous
```
- Use: Coordinated group movements
- Feel: Unified, synchronized, impactful

**Overlapping:**
```javascript
tl.to(".a", { x: 100, duration: 1 })
  .to(".b", { x: 100, duration: 1 }, "-=0.5");  // Start 0.5s before .a ends
```
- Use: Smooth transitions, cascading effects
- Feel: Fluid, elegant, continuous

**Gapped:**
```javascript
tl.to(".a", { x: 100 })
  .to(".b", { x: 100 }, "+=1");  // Wait 1s after .a finishes
```
- Use: Breathing room, emphasis, pacing control
- Feel: Deliberate, spacious, thoughtful

**Recommendations:**

For each sequencing improvement:
```
Sequence [N]: [Elements]
- Current pattern: {{current_pattern}}
- Issue: {{whats_wrong}}
- Recommended: {{new_pattern}}
- Code change:
  // BEFORE
  {{before_code}}

  // AFTER
  {{after_code}}
- Why: {{reasoning}}
```

### Stagger Optimization

<action>
If animation uses staggers, analyze:
1. Current stagger interval (`each` value)
2. Stagger origin (`from` value: start/center/end/edges)
3. Total stagger duration (`amount` vs `each`)
4. Stagger easing
</action>

**Stagger Best Practices:**

**Interval (`each`) Guidelines:**
- **0.05-0.1s**: Fast cascade (many elements, quick reveal)
- **0.15-0.3s**: Standard cascade (most use cases)
- **0.4-0.6s**: Slow cascade (dramatic, few elements)
- **0.8s+**: Very deliberate (special emphasis)

**Origin (`from`) Options:**
- `"start"` (default): First to last (natural reading order)
- `"center"`: Middle outward (symmetric, balanced)
- `"end"`: Last to first (reverse, unexpected)
- `"edges"`: Outer inward (convergent, gathering)
- `"random"`: Chaotic, organic (use sparingly)

**Advanced Stagger Pattern:**
```javascript
gsap.from(".grid-item", {
  y: 50,
  opacity: 0,
  stagger: {
    each: 0.2,           // 0.2s between elements
    from: "center",      // Start from center, radiate out
    grid: "auto",        // Auto-detect grid layout
    ease: "power1.in"    // Ease the STAGGER itself (accelerate)
  }
});
```

**Stagger Easing:**
> *"Stagger object also supports... ease for the stagger distribution"*

This controls the CURVE of how stagger delays are distributed, NOT the animation ease!

**Recommendations:**

For each stagger improvement:
```
Stagger [N]: [Elements]
- Current: {{current_stagger_config}}
- Issues:
  - Interval: {{interval_feedback}}
  - Origin: {{origin_feedback}}
  - Easing: {{stagger_ease_feedback}}
- Recommended:
  {{new_stagger_config}}
- Why: {{reasoning}}
```

<template-output>timing_analysis_complete, duration_recommendations, sequencing_improvements, stagger_optimizations</template-output>

---

## Step 5: Motion Quality Assessment

<action>
Evaluate overall motion quality beyond easing/timing:
1. Natural movement feel (physics-based vs mechanical)
2. Overshoot/snap appropriateness (back.out usage)
3. Bounce/elastic appropriateness (playful vs professional context)
4. Brand personality match
</action>

### Natural Movement Analysis

**Physics-Based Motion:**
- Uses eases like `power2.out`, `power3.out`, `expo.out`
- Mimics real-world deceleration
- Feels natural, comfortable, familiar

**Mechanical Motion:**
- Uses `linear` or very subtle eases
- Precise, exact, controlled
- Feels digital, intentional, designed

**Overshoot/Snap Motion:**
- Uses `back.out`, `back.inOut`
- Overshoots target then settles
- Feels dynamic, energetic, premium (when used correctly)

**Springy Motion:**
- Uses `elastic.out`, `bounce.out`
- Bounces/oscillates before settling
- Feels playful, fun, lighthearted (context-dependent!)

**Assessment:**

```
Current motion character: {{motion_type}}
Brand context: {{brand_personality}}
Match: {{yes_or_no}}
- If mismatch: Recommend {{alternative_motion_type}}
- Reasoning: {{why}}
```

### Overshoot Appropriateness

**When to Use `back.out` (overshoot):**
- ✅ Premium product reveals (adds drama)
- ✅ Attention-grabbing CTAs (creates interest)
- ✅ Confident brand personality (shows boldness)
- ✅ Modal/dialog entrances (emphasizes appearance)

**When NOT to Use:**
- ❌ Subtle UI transitions (overshoot feels aggressive)
- ❌ Corporate/professional contexts (too casual)
- ❌ Frequent interactions (becomes annoying)
- ❌ Accessibility-focused designs (motion sensitivity)

**Intensity Control:**
```javascript
// Subtle overshoot (1.2)
ease: "back.out(1.2)"  // Barely noticeable

// Standard overshoot (1.7 - default)
ease: "back.out"       // Noticeable but tasteful

// Dramatic overshoot (3.0)
ease: "back.out(3)"    // Very pronounced, use sparingly
```

### Bounce/Elastic Appropriateness

**When to Use `bounce.out` / `elastic.out`:**
- ✅ Kids' content (playful, fun)
- ✅ Gamified interfaces (energetic, rewarding)
- ✅ Notification/success states (celebratory)
- ✅ Deliberately whimsical brands

**When NOT to Use:**
- ❌ Luxury/premium brands (feels cheap)
- ❌ Professional dashboards (unprofessional)
- ❌ Serious content (tonal mismatch)
- ❌ Default for all animations (overuse kills impact)

**Rule of Thumb:**
> *"Use `bounce.out` or `elastic.out` for playful, bouncy elements (e.g. cartoonish UI)."*
> (Source: Deep-Research 2.1)

If brand ISN'T intentionally playful → DON'T use bounce/elastic!

<template-output>motion_quality_assessed, natural_movement_evaluated, overshoot_bounce_appropriateness, brand_alignment_verified</template-output>

---

## Step 6: Generate Optimization Report

<action>
Use template.md to generate structured optimization report with:
1. Executive Summary (current vs desired feel, priority improvements)
2. Easing Refinement Section (all ease recommendations with before/after)
3. Timing Polish Section (duration, sequencing, stagger improvements)
4. Motion Quality Section (natural movement, overshoot/bounce assessment)
5. Implementation Priority (HIGH/MEDIUM/LOW based on impact)
6. Deep-Research Citations (verbatim quotes from Sections 2.1-2.2)
7. Archon Knowledge Base findings
</action>

**Report Requirements:**
- Minimum 10 specific recommendations (ease, timing, or motion changes)
- Each recommendation includes before/after code
- Priority ratings (HIGH = major feel improvement, MEDIUM = noticeable, LOW = subtle)
- Estimated impact on animation feel
- Research citations for each recommendation

<template-output>optimization_report_generated, recommendations_prioritized, research_citations_included</template-output>

---

## Step 7: Output Delivery

### Final Deliverables

**1. Animation Polish Report** (using template.md)
- Structured markdown with all sections
- Before/after code examples
- Research citations from Deep-Research 2.1-2.2
- Archon MCP findings
- Implementation priority

**2. Quick Wins Summary**
```markdown
## Quick Wins (Implement First)

**HIGH PRIORITY:**
1. {{high_priority_change_1}}
2. {{high_priority_change_2}}
3. {{high_priority_change_3}}

**MEDIUM PRIORITY:**
1. {{medium_priority_change_1}}
2. {{medium_priority_change_2}}

**LOW PRIORITY (Polish):**
1. {{low_priority_change_1}}
```

**3. Ease Visualizer Links**

If CustomEase recommended, provide:
- Link to Ease Visualizer: https://gsap.com/ease-visualizer
- Guidance on drawing custom curve
- Example CustomEase.create() code

---

## Success Criteria

Optimization is complete when:

- ✅ ALL easing choices analyzed against Easing Personality Framework
- ✅ Timing patterns evaluated (duration, sequencing, staggers)
- ✅ Motion quality assessed (natural movement, overshoot, bounce appropriateness)
- ✅ Brand personality alignment verified
- ✅ Minimum 10 specific recommendations provided
- ✅ Before/after code examples for each change
- ✅ Priority ratings assigned (HIGH/MEDIUM/LOW)
- ✅ Deep-Research citations included (Sections 2.1-2.2)
- ✅ Archon MCP findings documented
- ✅ Optimization report generated

---

**Workflow Complete** ✨

**Remember:** This optimizes animation **FEEL**, not technical performance. If animation is janky or slow, use `optimize-performance` workflow instead!

**Next Steps:**
1. Review HIGH priority recommendations
2. Implement ease/timing changes
3. Test animation feel
4. Iterate if needed (re-run workflow with new code)
