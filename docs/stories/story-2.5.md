# Story 2.5: Briefing Engine Hero & Process Updates - Premium Timeline & Pill Animations

Status: Approved

## Story

As a developer implementing Epic 2 content strategy and premium components,
I want to update the Briefing Engine hero with signature easing on title reveals and enhance the BriefingProcessFlow component with timeline connector draw-on animation and feature pill morphing entrances,
so that users experience polished premium animations that reinforce the platform's professional quality through distinctive GSAP choreography featuring elastic easing on timeline connectors and morphing pill reveals that elevate beyond generic process flows.

## Acceptance Criteria

### 1. Briefing Engine Hero Copy Update (Research-Validated Messaging)
- Update BriefingHero headline to "From Brand Brief to Production-Ready Storyboard"
- Update subheadline: "AI-powered briefing platform that transforms your vision into professional storyboards—built by the team behind enterprise-grade AI video production."
- Update supporting copy: "The same quality standards that power our Studios productions, now available as a self-service platform. From campaign brief to complete storyboard with scene notes, visual direction, and multi-platform specifications."
- Update hero CTA buttons: Primary "Start Your First Brief" (→ https://admanager.cre8tive.ai/), Secondary "Talk to Our Team" (→ /contact)
- Add 4 feature highlights:
  - "✓ 7 guided brand inputs"
  - "✓ 9 professional visual styles"
  - "✓ AI-generated storyboards"
  - "✓ Studios integration ready"
- **Verification:** All copy matches COPY_IMPLEMENTATION_GUIDE.md Briefing Engine Hero Section exactly (lines 376-408)
- **Reference:** [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#Briefing Engine Hero Section lines 376-408]
- **Traceability:** AC-2.10, AC-2.11 from tech-spec-epic-2.md lines 878-880

### 2. Hero Title Signature Easing Animation
- Implement GSAP animation on hero title with CRE8TIVE_EASINGS.organic (power4.out fallback)
- Animation properties:
  - Initial state: `opacity: 0`, `y: 60` (fade-in from below)
  - Final state: `opacity: 1`, `y: 0`
  - Duration: 1.2s with organic easing (smoother than standard ease-out)
  - No ScrollTrigger (plays on page load)
- Title split into words for staggered reveal (0.1s stagger between words)
- **Verification:** Observe title reveal on page load, verify organic easing curve (smooth deceleration), word stagger visible
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.5 Implementation line 520]
- **Traceability:** AC-2.42 from tech-spec-epic-2.md line 917 (signature easings)

### 3. BriefingProcessFlow 5-Step Content Update
- Update all 5 process steps with copy from COPY_IMPLEMENTATION_GUIDE.md lines 433-622:
  - **Step 01:** "Capture Your Brand DNA" - Timeline: ≈90 seconds, Deliverables: 4 items, Insight included
  - **Step 02:** "AI Synopsis & Scene Map" - Timeline: Story structuring, Deliverables: 3 items, Insight included
  - **Step 03:** "Choose Your Visual Style" - Timeline: Creative selection, Deliverables: 3 items, Insight included
  - **Step 04:** "AI Generates Your Storyboard" - Timeline: Realtime build, Deliverables: 3 items, Insight included
  - **Step 05:** "Review & Handoff to Studios" - Timeline: Approval + export, Deliverables: 3 items, Insight included
- Each step includes: Title, Summary, Description, Timeline, Deliverables (bulleted list), Outputs (2 metrics), Insight (user feedback quote)
- Add "Connected Pipeline" badge with copy: "Connected Pipeline - Brief → Narrative → Style → Boards"
- **Verification:** All step copy matches COPY_IMPLEMENTATION_GUIDE.md exactly (word-for-word), all 5 steps render correctly
- **Reference:** [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#The Briefing Runway Section lines 411-622]
- **Traceability:** AC-2.12, AC-2.13 from tech-spec-epic-2.md lines 881-882

### 4. Timeline Connector Draw-On Animation (Premium Pattern)
- Create vertical timeline connector line between process steps
- Implement SVG `stroke-dasharray` + `stroke-dashoffset` draw-on animation
- Animation properties:
  - Initial state: `stroke-dashoffset: 100%` (line not visible)
  - Final state: `stroke-dashoffset: 0%` (line fully drawn)
  - Duration: 2s with GSAP ease "power2.inOut"
  - ScrollTrigger: Progressive draw as user scrolls through process flow
  - Scrub: true (scroll-linked, smooth reveal)
- Connector styling: 2px width, gradient stroke (indigo → cyan), subtle glow filter
- **Verification:** Scroll through process flow, verify timeline draws progressively from top to bottom, smooth scrub animation
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.5 Implementation lines 521-522]
- **Traceability:** Custom premium pattern for Story 2.5

### 5. Feature Pill Morphing Entrances (Premium Micro-Pattern)
- Create feature pill components for hero and each process step (small badges with text)
- Implement Framer Motion morphing entrance animation:
  - Initial state: `scale: 0.8`, `opacity: 0`, `borderRadius: "50%"` (circular shape)
  - Final state: `scale: 1`, `opacity: 1`, `borderRadius: "12px"` (pill shape)
  - Duration: 0.6s with spring physics (Framer Motion default spring)
  - Stagger: 0.08s between pills (sequential morphing reveals)
- Pill styling: glassmorphism background, gradient border (cyan/fuchsia), small text
- Trigger: On scroll into viewport (IntersectionObserver or Framer Motion viewport detection)
- **Verification:** Scroll into hero/process steps, verify pills morph from circle → pill shape, stagger visible, spring bounce effect
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.5 Implementation line 522]
- **Traceability:** AC-2.42 from tech-spec-epic-2.md line 917 (signature easings, spring included)

### 6. Elastic Easing on Step Reveal Animations
- Implement elastic easing (CRE8TIVE_EASINGS.spring / elastic.out fallback) on step card reveals
- Each step card animates into view with visible bounce effect:
  - Initial state: `opacity: 0`, `y: 40`, `scale: 0.95`
  - Final state: `opacity: 1`, `y: 0`, `scale: 1`
  - Easing: `elastic.out(1, 0.5)` for visible bounce (or CRE8TIVE_EASINGS.spring from Epic 2)
  - Stagger: 0.15s between step cards
  - ScrollTrigger: Each step animates on scroll into viewport
- **Verification:** Scroll through process flow, verify each step has visible bounce/spring effect on reveal, elastic easing characteristic
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.5 Implementation line 523]
- **Traceability:** AC-2.42 from tech-spec-epic-2.md line 917 (signature easings)

### 7. Responsive Design & Performance
- Mobile (375px): 1 column stack, static pills (no morphing), timeline connector simplified (no draw-on), step reveals use simple fade-in
- Tablet (768px): 1 column, pill morphing enabled, timeline draw-on enabled, elastic step reveals
- Desktop (1024px+): Full premium animations (title stagger, pill morphing, timeline draw-on, elastic step reveals)
- All animations achieve 60fps on Chrome 100+, Firefox 100+, Safari 15+
- Timeline connector uses CSS/SVG (not canvas) for better mobile performance
- **Verification:** Test all 3 breakpoints in Chrome DevTools, verify 60fps in Performance tab, verify mobile fallbacks
- **Reference:** [Source: docs/tech-spec-epic-2.md#Performance lines 614-686]
- **Traceability:** AC-2.24, AC-2.25, AC-2.43 from tech-spec-epic-2.md lines 896-898, 918

### 8. Integration with Briefing Engine Page
- Import updated BriefingHero into `src/pages/BriefingEngine.tsx`
- Import updated BriefingProcessFlow component
- Place ProcessFlow after hero, before StudiosConnection section (Story 2.6)
- Verify smooth scroll behavior with Lenis (already configured globally)
- Verify no layout shifts (CLS ≤0.1), no console errors
- **Verification:** Full Briefing Engine page renders, hero + process flow sections visible, scroll smooth, build succeeds
- **Reference:** [Source: docs/tech-spec-epic-2.md#Page Rendering Flow lines 561-592]

### 9. Code Quality & Build Validation
- TypeScript compiles clean (`npm run build`) with 0 errors
- ESLint passes (0 errors, warnings acceptable per project standards)
- All components follow frontend-architecture.md Component Template Checklist
- React cleanup patterns implemented (useEffect return cleanup for GSAP context, Framer Motion)
- No console.log statements in production code
- SVG timeline connector optimized (inline for best performance)
- **Verification:** Run `npm run build` and `npm run lint`, verify success
- **Reference:** [Source: docs/architecture/frontend-architecture.md#Component Template Checklist]
- **Traceability:** AC-2.21, AC-2.22, AC-2.23 from tech-spec-epic-2.md lines 891-893

### 10. Visual QA & Copy Accuracy
- All hero copy matches COPY_IMPLEMENTATION_GUIDE.md exactly (word-for-word)
- All 5 process step copy matches copy guide (titles, summaries, descriptions, deliverables, outputs, insights)
- Feature highlights display correctly (7 inputs, 9 styles, AI storyboards, Studios integration)
- CTAs link correctly (Primary → https://admanager.cre8tive.ai/, Secondary → /contact)
- Connected Pipeline badge displays with correct copy
- **Verification:** Side-by-side comparison with COPY_IMPLEMENTATION_GUIDE.md, pixel-perfect match
- **Reference:** [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#Briefing Engine Page lines 373-622]

## Tasks / Subtasks

- [ ] **Task 1: Update Briefing Engine Hero Component** (AC: #1, #2)
  - [ ] Read existing BriefingHero.tsx component (likely in `src/components/briefing/` or `src/pages/BriefingEngine.tsx`)
  - [ ] Update headline, subheadline, supporting copy to match COPY_IMPLEMENTATION_GUIDE.md lines 376-395
  - [ ] Update hero CTA buttons (Primary → admanager.cre8tive.ai, Secondary → /contact)
  - [ ] Add 4 feature highlights with checkmarks (7 inputs, 9 styles, AI storyboards, Studios integration)
  - [ ] Implement title signature easing animation:
    ```typescript
    import { CRE8TIVE_EASINGS } from '@/components/epic2/animations/easings'

    gsap.from('.hero-title-word', {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: CRE8TIVE_EASINGS.organic, // power4.out fallback
      stagger: 0.1,
    })
    ```
  - [ ] Split title into words for staggered reveal animation
  - [ ] Test: Verify title reveals on page load, organic easing visible, word stagger smooth

- [ ] **Task 2: Update Process Flow Step Content** (AC: #3)
  - [ ] Read existing BriefingProcessFlow.tsx component
  - [ ] Update Step 01 copy: Title, Summary, Description, Timeline, Deliverables (4 items), Outputs (2 metrics), Insight
  - [ ] Update Step 02 copy: Narrative engine, scene breakdown
  - [ ] Update Step 03 copy: Visual style selection, 9 styles
  - [ ] Update Step 04 copy: AI storyboard generation, director notes
  - [ ] Update Step 05 copy: Review, PDF export, Studios handoff
  - [ ] Add "Connected Pipeline" badge with copy from lines 425-431
  - [ ] Verify all copy matches COPY_IMPLEMENTATION_GUIDE.md exactly (lines 433-622)

- [ ] **Task 3: Create Timeline Connector Component** (AC: #4)
  - [ ] Create `TimelineConnector.tsx` component with SVG vertical line
  - [ ] SVG structure:
    ```typescript
    <svg className="timeline-connector">
      <line x1="50%" y1="0" x2="50%" y2="100%"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="100%"
            strokeDashoffset="100%" // Initial state
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="indigo" />
          <stop offset="100%" stopColor="cyan" />
        </linearGradient>
      </defs>
    </svg>
    ```
  - [ ] Implement GSAP ScrollTrigger draw-on animation:
    ```typescript
    gsap.to('.timeline-connector line', {
      strokeDashoffset: '0%',
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.process-flow-container',
        start: 'top center',
        end: 'bottom center',
        scrub: true, // Scroll-linked
      }
    })
    ```
  - [ ] Add subtle glow filter to connector SVG
  - [ ] Test: Scroll through process flow, verify progressive draw-on animation

- [ ] **Task 4: Create Feature Pill Components** (AC: #5)
  - [ ] Create `FeaturePill.tsx` component with Framer Motion
  - [ ] Implement morphing entrance animation:
    ```typescript
    import { motion } from 'framer-motion'

    <motion.div
      className="feature-pill"
      initial={{
        scale: 0.8,
        opacity: 0,
        borderRadius: '50%' // Circle
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
        borderRadius: '12px' // Pill
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        type: 'spring',
        delay: index * 0.08 // Stagger
      }}
    >
      {text}
    </motion.div>
    ```
  - [ ] Pill styling: glassmorphism background, gradient border (cyan/fuchsia accent)
  - [ ] Use in hero (4 feature pills) and process steps (deliverables/outputs as pills)
  - [ ] Test: Verify circle → pill morphing, stagger visible, spring bounce

- [ ] **Task 5: Implement Elastic Step Reveal Animations** (AC: #6)
  - [ ] Import CRE8TIVE_EASINGS from Epic 2 foundation
  - [ ] Apply elastic easing to step card reveals:
    ```typescript
    gsap.from('.process-step-card', {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      ease: CRE8TIVE_EASINGS.spring, // elastic.out(1, 0.5) fallback
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.process-step-card',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    })
    ```
  - [ ] Each step gets individual ScrollTrigger (triggers as it enters viewport)
  - [ ] Test: Scroll through process, verify visible bounce/elastic effect on each step

- [ ] **Task 6: Responsive & Performance Optimization** (AC: #7)
  - [ ] Test mobile (375px): 1 column, static pills (no morphing), no timeline draw-on, simple fade-in step reveals
  - [ ] Test tablet (768px): 1 column, pill morphing enabled, timeline draw-on enabled, elastic step reveals
  - [ ] Test desktop (1024px+): Full premium animations (title stagger, pill morphing, timeline draw-on, elastic steps)
  - [ ] Verify 60fps in Chrome DevTools Performance tab (all breakpoints)
  - [ ] Add prefers-reduced-motion support: static pills, instant timeline, no elastic bounce
  - [ ] Optimize SVG timeline connector: inline for best performance

- [ ] **Task 7: Integrate with Briefing Engine Page** (AC: #8)
  - [ ] Open `src/pages/BriefingEngine.tsx`
  - [ ] Import updated BriefingHero component (or update inline if hero is part of page)
  - [ ] Import updated BriefingProcessFlow component
  - [ ] Verify component placement: Hero → ProcessFlow → StudiosConnection (Story 2.6)
  - [ ] Test full page: smooth scroll, no layout shifts, no console errors
  - [ ] Verify Lenis smooth scroll works throughout page
  - [ ] Verify all animations trigger correctly during scroll

- [ ] **Task 8: Code Quality & Build Validation** (AC: #9)
  - [ ] Run `npm run build`: verify TypeScript compiles with 0 errors
  - [ ] Run `npm run lint`: verify ESLint passes (0 errors, warnings OK)
  - [ ] Review React cleanup patterns: useEffect cleanup for GSAP context, Framer Motion cleanup
  - [ ] Remove console.log statements from production code
  - [ ] Verify all components follow frontend-architecture.md patterns
  - [ ] Test import paths work correctly

- [ ] **Task 9: Visual QA & Copy Verification** (AC: #10)
  - [ ] Visual QA: Compare to COPY_IMPLEMENTATION_GUIDE.md, verify pixel-perfect copy match
  - [ ] Browser testing: Chrome, Firefox, Safari (latest versions)
  - [ ] Test all breakpoints: 375px, 768px, 1024px, 1920px
  - [ ] Verify all 10 acceptance criteria satisfied
  - [ ] Document any deviations or issues in Dev Notes
  - [ ] Take screenshots for hero + process flow (mobile, tablet, desktop)
  - [ ] Record screen video of timeline draw-on and pill morphing animations for QA reference

## Dev Notes

### Project Structure Alignment

This story implements the fifth major section updates for Epic 2, focusing on Briefing Engine page enhancements. Following Studios page premium patterns (Stories 2.1-2.4), this brings signature animation choreography to the Briefing Engine experience.

**Premium Patterns Introduced:**

1. **Timeline connector draw-on** - First SVG stroke-dashoffset animation in Epic 2 (progressive reveal)
2. **Feature pill morphing** - First Framer Motion shape morphing (circle → pill transition)
3. **Elastic step reveals** - First use of elastic easing on content cards (visible bounce)
4. **Title word stagger** - Signature organic easing applied to hero title

**Component Dependencies:**

```
BriefingHero.tsx (UPDATED)
├── CRE8TIVE_EASINGS (Epic 2, organic for title reveal)
├── GSAP (title word stagger animation)
└── FeaturePill (NEW, Framer Motion morphing)

BriefingProcessFlow.tsx (UPDATED)
├── TimelineConnector (NEW, SVG draw-on animation)
├── FeaturePill (NEW, Framer Motion morphing)
├── CRE8TIVE_EASINGS (Epic 2, elastic/spring for step reveals)
└── GSAP ScrollTrigger (step reveals, timeline scrub)
```

**File Structure:**

```
src/components/briefing/
├── BriefingHero.tsx              # UPDATED - Hero copy + title stagger animation
├── BriefingProcessFlow.tsx       # UPDATED - 5-step copy + timeline + elastic reveals
├── TimelineConnector.tsx         # NEW - SVG draw-on vertical connector
├── FeaturePill.tsx               # NEW - Morphing pill badges
└── index.ts                      # Updated barrel export

src/pages/
└── BriefingEngine.tsx            # Page integration (hero + process flow)
```

### Architecture Context

**Epic 2 Premium Foundation (Story 2.0) - PRODUCTION READY:**

Story 2.0 foundation components available for import:

**Import Pattern:**
```typescript
import { CRE8TIVE_EASINGS } from '@/components/epic2/animations/easings'
```

**Available Easings:**
- ✅ `CRE8TIVE_EASINGS.organic` - Smooth deceleration (power4.out fallback) - Used for hero title
- ✅ `CRE8TIVE_EASINGS.spring` - Energetic bounce (elastic.out fallback) - Used for step reveals

**Existing Infrastructure Used:**
- GSAP 3.13.0 + ScrollTrigger (Story 1.1, Epic 1) - Used for title stagger, step reveals, timeline scrub
- Lenis 1.3.11 (Story 1.1, Epic 1) - Smooth scroll foundation
- Framer Motion 12.4.2 (existing project) - Used for pill morphing animation
- Tailwind CSS 3.4.11 (existing styling system)
- Dark indigo/cyan/fuchsia palette (Epic 1 palette.ts)

**New Patterns Introduced (Story 2.5 Unique):**
- First SVG stroke-dashoffset draw-on animation in Epic 2 (timeline connector)
- First Framer Motion shape morphing (borderRadius + scale transition)
- First word-by-word title stagger (vs. line-by-line in other stories)
- First elastic.out easing on content cards (vs. organic/power4 in other stories)

**Performance Budget (from Tech Spec lines 614-687):**

| Pattern | CPU Cost | GPU Cost | Budget | Mitigation |
|---------|----------|----------|--------|------------|
| **Title Word Stagger (6-8 words)** | Low (simple stagger) | Low (opacity + y transform) | Use will-change | GPU acceleration hints |
| **Feature Pill Morphing (4-6 pills)** | Low (Framer Motion) | Low (borderRadius + scale) | Stagger 0.08s | Sequential, not simultaneous |
| **Timeline Draw-On (SVG)** | Very Low (CSS/SVG) | Low (stroke transform) | Scrub linked to scroll | Browser-optimized SVG rendering |
| **Elastic Step Reveals (5 steps)** | Low (GSAP timeline) | Low (opacity + y + scale) | Stagger 0.15s | Use will-change, simple transforms |
| **Total Frame Budget** | ~4ms | ~3ms | ≤16.67ms (60fps) | All patterns GPU-accelerated |

**Mobile Optimization Strategy:**
- Disable pill morphing on <768px (instant reveals, no circle → pill transition)
- Disable timeline draw-on on mobile (static connector line or removed entirely)
- Simplify step reveals to fade-in only (no elastic bounce on mobile)
- Title stagger reduced to 0.05s on mobile (faster reveal)

### Testing Strategy

**Manual Testing Checklist:**

1. **Hero Section:**
   - Verify headline, subheadline, supporting copy match COPY_IMPLEMENTATION_GUIDE.md
   - Check title word stagger reveal on page load (6-8 words, 0.1s stagger)
   - Verify organic easing curve (smooth deceleration, not linear)
   - Check 4 feature pill morphing animations (circle → pill, 0.08s stagger)
   - Verify dual CTAs link correctly (Primary → admanager.cre8tive.ai, Secondary → /contact)

2. **Process Flow Section:**
   - Verify all 5 step copy matches COPY_IMPLEMENTATION_GUIDE.md exactly
   - Check Connected Pipeline badge displays with correct copy
   - Verify timeline connector draws progressively on scroll (stroke-dashoffset 100% → 0%)
   - Check timeline gradient (indigo → cyan) and subtle glow filter
   - Verify step card elastic reveals (visible bounce effect, elastic.out easing)

3. **Feature Pill Morphing:**
   - Pills start as circles (borderRadius: 50%, scale: 0.8)
   - Pills morph to pill shape (borderRadius: 12px, scale: 1)
   - Stagger visible (0.08s between pills, sequential reveals)
   - Spring physics create slight overshoot/bounce
   - Glassmorphism background + gradient border (cyan/fuchsia)

4. **Timeline Connector:**
   - Vertical SVG line between process steps
   - Stroke gradient (indigo → cyan)
   - Progressive draw-on as user scrolls (scrub: true)
   - Smooth animation (power2.inOut easing)
   - Subtle glow filter on connector

5. **Elastic Step Reveals:**
   - Each step animates on scroll into viewport
   - Visible bounce effect (elastic.out characteristic overshoot)
   - Initial state: opacity 0, y: 40, scale: 0.95
   - Final state: opacity 1, y: 0, scale: 1
   - Stagger 0.15s between steps

6. **Responsive Layouts:**
   - 375px mobile: 1 column, static pills, no timeline, simple fade-in steps
   - 768px tablet: 1 column, pill morphing enabled, timeline draw-on enabled, elastic reveals
   - 1024px+ desktop: Full premium animations (all features enabled)
   - Verify no layout shifts (CLS score in Lighthouse)

7. **Performance Testing:**
   - Chrome DevTools Performance tab: Record page load + scroll
   - Verify 60fps maintained (no frames >16.67ms) during:
     - Title word stagger
     - Feature pill morphing
     - Timeline draw-on scrub
     - Elastic step reveals
   - Test mobile device emulation: verify simplified animations, 60fps maintained
   - Test CPU throttle 6x: verify graceful degradation if <30fps

8. **Copy Accuracy:**
   - Compare hero copy to COPY_IMPLEMENTATION_GUIDE.md lines 376-408 (exact match)
   - Compare process step copy to lines 433-622 (exact match for all 5 steps)
   - Verify Connected Pipeline badge copy (lines 425-431)
   - Check feature highlights (7 inputs, 9 styles, AI storyboards, Studios integration)

9. **Build & Code Quality:**
   - `npm run build` passes with 0 TypeScript errors
   - `npm run lint` passes with 0 ESLint errors
   - React cleanup: verify cleanup for GSAP contexts and Framer Motion
   - No console.log statements in production code

### References

**Source Documentation:**
- [Source: docs/tech-spec-epic-2.md#Story 2.5 Implementation] - Lines 519-527 (workflow sequence)
- [Source: docs/tech-spec-epic-2.md#Acceptance Criteria] - Lines 878-882, 891-893, 896-898, 917-918 (AC 2.10-2.13, 2.21-2.25, 2.42-2.43)
- [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#Briefing Engine Hero] - Lines 376-408 (hero copy)
- [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#The Briefing Runway] - Lines 411-622 (process step copy)
- [Source: docs/architecture/frontend-architecture.md#Component Template] - Lines 60-131 (component pattern)
- [Source: docs/architecture/animation-patterns.md#GSAP ScrollTrigger] - Lines 93-310 (animation patterns)

**Epic 2 Foundation Components (Story 2.0):**
- CRE8TIVE_EASINGS: `src/components/epic2/animations/easings.ts`
- Signature easing curves for premium feel

### Technical Decisions

**1. SVG Timeline Connector vs Canvas**

**Decision:** Use SVG with stroke-dashoffset for timeline connector draw-on animation

**Rationale:**
- SVG stroke-dasharray/stroke-dashoffset is native browser feature (better performance than canvas)
- Easier to style with CSS (gradient stroke, glow filter)
- Accessible (SVG semantic structure)
- Works better with ScrollTrigger scrub (smooth scroll-linked animation)
- Lower CPU overhead than canvas drawing loop

**Alternatives Considered:**
- Canvas: More complex, manual drawing loop, harder to style
- CSS border-animation: Limited styling options, can't do gradient stroke

**Implementation:**
```typescript
<svg className="timeline-connector">
  <line
    stroke="url(#gradient)"
    strokeDasharray="100%"
    strokeDashoffset="100%" // GSAP animates this to 0%
  />
</svg>
```

---

**2. Framer Motion for Pill Morphing vs GSAP**

**Decision:** Use Framer Motion for feature pill morphing animation (circle → pill)

**Rationale:**
- Framer Motion already in project dependencies (no new package)
- Simpler API for shape morphing (borderRadius transition built-in)
- Better React integration (declarative, component-based)
- Spring physics built-in (no need for custom easing)
- Viewport detection easier than ScrollTrigger for simple triggers

**Alternatives Considered:**
- GSAP: More verbose for borderRadius morphing, already using for other patterns
- CSS @keyframes: Less control over spring physics, no stagger

**Implementation:**
```typescript
<motion.div
  initial={{ borderRadius: '50%', scale: 0.8 }}
  whileInView={{ borderRadius: '12px', scale: 1 }}
  transition={{ type: 'spring', delay: index * 0.08 }}
/>
```

---

**3. Word-by-Word Title Stagger vs Line-by-Line**

**Decision:** Stagger hero title word-by-word (6-8 words) with organic easing

**Rationale:**
- More granular control (word-level vs line-level)
- Creates smoother reveal flow for short title
- Aligns with premium micro-choreography patterns
- Title is 2 lines, staggering by line would be too abrupt

**Alternatives Considered:**
- Line-by-line stagger: Too chunky for 2-line title
- Character-by-character: Too granular, feels gimmicky

**Split Method:**
```typescript
// Split title into words
const words = title.split(' ')
words.map((word, i) => (
  <span key={i} className="hero-title-word">{word}</span>
))

// GSAP stagger
gsap.from('.hero-title-word', { stagger: 0.1, ... })
```

---

**4. Elastic Easing Intensity (elastic.out parameters)**

**Decision:** Use `elastic.out(1, 0.5)` for step card reveals (moderate bounce)

**Rationale:**
- Parameters: `elastic.out(amplitude, period)`
  - amplitude: 1 = moderate bounce (not too extreme)
  - period: 0.5 = moderate frequency (not too springy)
- Visible bounce without being distracting
- Aligns with CRE8TIVE_EASINGS.spring signature curve
- Tech spec specifies "visible bounce effect"

**Alternatives Considered:**
- elastic.out(1.2, 0.3): Too bouncy, feels unstable
- elastic.out(0.8, 0.7): Too subtle, barely visible
- back.out: Overshoot without bounce (different feel)

**GSAP Config:**
```typescript
gsap.from('.step-card', {
  ease: 'elastic.out(1, 0.5)', // Or CRE8TIVE_EASINGS.spring
  scale: 0.95, // Slight scale adds to bounce effect
})
```

---

**5. Mobile Timeline Connector Strategy**

**Decision:** Remove timeline connector entirely on mobile (<768px)

**Rationale:**
- Timeline connector is decorative, not functional
- Small mobile screens make vertical connector less effective
- Saves mobile GPU resources (simpler page structure)
- Process steps stack vertically, connector adds visual clutter

**Mobile Alternative:**
- No connector, steps clearly numbered (Step 01, 02, 03, etc.)
- Subtle divider lines between steps (simple border-top)

**CSS Implementation:**
```css
.timeline-connector {
  display: block; /* Desktop */
}

@media (max-width: 767px) {
  .timeline-connector {
    display: none; /* Mobile */
  }
}
```

### Risk Mitigation

**Risk 1: Timeline Connector Scrub Performance on Mobile**

- **Likelihood:** Medium (SVG stroke manipulation can be GPU-intensive on low-end mobile)
- **Impact:** Medium (janky scrub animation undermines premium feel)
- **Mitigation:**
  - Remove timeline connector on mobile (<768px) entirely
  - Use simple CSS transform (not stroke-dashoffset) if connector required on mobile
  - Test on mid-range Android devices (not just iPhone)
  - Performance monitor triggers fallback if <30fps
- **Rollback:** Static timeline connector (no animation) or remove connector

---

**Risk 2: Feature Pill Morphing Too Subtle**

- **Likelihood:** Low (borderRadius 50% → 12px is visually distinct)
- **Impact:** Low (users still see pills, just less dramatic)
- **Mitigation:**
  - Combine borderRadius morphing with scale (0.8 → 1) for more dramatic effect
  - Add spring physics overshoot (Framer Motion default spring)
  - Test with non-technical users for "morph" visibility
  - Ensure stagger (0.08s) makes sequential reveals clear
- **Rollback:** Instant pill reveals (no morphing), or exaggerate initial borderRadius to 100% (full circle)

---

**Risk 3: Elastic Easing on Step Reveals Too Distracting**

- **Likelihood:** Medium (elastic easing is energetic, can feel chaotic if overdone)
- **Impact:** Medium (distracts from reading step content)
- **Mitigation:**
  - Use moderate elastic parameters: elastic.out(1, 0.5) (not extreme)
  - Stagger step reveals (0.15s) so only one bounces at a time
  - Test with stakeholders for "distraction" feel
  - Ensure bounce is visible but quick (<0.8s total duration)
- **Rollback:** Fallback to power2.out easing (smooth deceleration, no bounce)

**Fallback Implementation:**
```typescript
// If elastic too distracting, use organic instead
gsap.from('.step-card', {
  ease: CRE8TIVE_EASINGS.organic, // power4.out fallback
  // Remove scale transform if bounce distracting
})
```

---

**Risk 4: Word-by-Word Stagger Reading Flow Interruption**

- **Likelihood:** Low (0.1s stagger is fast enough to feel cohesive)
- **Impact:** Low (users wait ~0.8s total for full title reveal)
- **Mitigation:**
  - Keep stagger short (0.1s between words)
  - Use organic easing for smooth flow (not choppy linear)
  - Test with non-technical users for reading comprehension
  - Total reveal time <1s for full title
- **Rollback:** Reduce stagger to 0.05s, or stagger by line instead of word

## Dev Agent Record

### Context Reference

- **Story Context XML:** `/home/cameronai/projects/cre8tive-website-1006/docs/story-context-2.2.5.xml` (Generated: 2025-10-09)
  - Contains: Documentation artifacts (6 docs), Code artifacts (6 files), Dependencies (10 runtime + 3 dev), Constraints (9 rules), Interfaces (6 APIs), Test standards + 10 test ideas
  - Dynamic expertise injection: Epic 2 CRE8TIVE_EASINGS patterns, GSAP ScrollTrigger scrub animation, Framer Motion shape morphing, SVG stroke-dashoffset technique, briefingPalette integration, 60fps performance constraints, 10 AC traceability

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
