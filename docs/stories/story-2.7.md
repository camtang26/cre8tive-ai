# Story 2.7: Briefing Engine Value Props & Premium CTA with Magnetic Dual-Button

Status: Approved

## Story

As a developer implementing Epic 2 content strategy and premium components,
I want to create the ValuePropsAgenciesBrands component with organic card shapes, 3D Y-axis rotation reveals, cursor-following gradient spotlight effects, and a premium CTA section with dual-button magnetic pull,
so that users experience a compelling split-benefit presentation distinguishing agency vs brand value propositions with distinctive GSAP + Framer Motion premium choreography, followed by a conversion-optimized CTA that showcases feature pills and competing magnetic forces between primary and secondary actions.

## Acceptance Criteria

### 1. Value Props Section Copy Implementation (Research-Validated Messaging)
- Section header: "Built for Professional Teams"
- Two-column split layout: "For Agencies" (left) | "For Brands" (right)
- **For Agencies Column** (cyan accent color from briefingPalette):
  - Header: "For Agencies"
  - Subheader: "Scale creative without burning hours"
  - Benefit 01 - Multi-Client Pipeline:
    - "Spin up on-brand storyboards for every client without burning creative hours. Maintain consistency across your entire portfolio."
  - Benefit 02 - Faster Client Onboarding:
    - "Seven guided fields capture product, audience, and guardrails in minutes. No more endless discovery calls."
  - Benefit 03 - Team Productivity Multiplier:
    - "Automate storyboard drafts so strategists focus on insight and polish—not manual scene layout."
- **For Brands Column** (fuchsia accent color from briefingPalette):
  - Header: "For Brands"
  - Subheader: "Launch campaigns before opportunities pass"
  - Benefit 01 - Speed to Campaign Launch:
    - "Go from concept to production-ready storyboard in under 10 minutes. Move at the speed of opportunity."
  - Benefit 02 - Brand Consistency Locked In:
    - "Nine visual styles ensure typography, tone, and color stay on-brand before production. No more misaligned creative."
  - Benefit 03 - Studios-Ready Output:
    - "Deliver beautifully formatted PDFs with scene notes, aspect ratios, and Studios handoff baked in. Review to production in minutes."
- **Verification:** All copy matches COPY_IMPLEMENTATION_GUIDE.md Value Props section exactly (lines 688-742)
- **Reference:** [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#Value Props: Agencies vs Brands Section lines 688-742]
- **Traceability:** AC-2.17, AC-2.18 from tech-spec-epic-2.md lines 907-908

### 2. Organic Benefit Card Shapes (Premium Visual Pattern)
- Implement organic shape variants for benefit cards using OrganicCard component from Epic 2
- Use shape variant: "organic" for all 6 benefit cards (3 agencies + 3 brands)
- Each card has subtle morphing/breathing animation:
  - Shape varies ±3-5% over 8s loop
  - Framer Motion path morphing (not GSAP MorphSVG)
  - Low CPU cost, medium GPU cost (acceptable for 6 cards)
- Cards have glassmorphism background with accent glow:
  - Agencies cards: cyan glow (briefingPalette.cyan.DEFAULT)
  - Brands cards: fuchsia glow (briefingPalette.fuchsia.DEFAULT)
  - Glow opacity: 10-15% for subtlety
- **Verification:** Inspect SVG clip-path, verify organic shapes render, observe 8s morphing loop
- **Reference:** [Source: docs/tech-spec-epic-2.md#Premium Component Architecture lines 83-130]
- **Traceability:** AC-2.31, AC-2.32 from tech-spec-epic-2.md lines 925-926

### 3. 3D Y-Axis Rotation Reveal Animation (Premium Choreography)
- Implement 3D rotation reveal for benefit cards on scroll into view
- GSAP ScrollTrigger configuration:
  - Trigger: `.value-props-container`
  - Start: `top 75%` (trigger before fully visible)
  - Initial state: `rotationY: 90`, `opacity: 0` (cards rotated away)
  - Final state: `rotationY: 0`, `opacity: 1` (cards face user)
  - Easing: `CRE8TIVE_EASINGS.organic` (power4.out fallback for smooth deceleration)
  - Stagger: 0.15s between cards (agencies 1-3, then brands 1-3)
  - Duration: 0.8s per card
  - transformPerspective: 1000 (CSS 3D perspective)
- Stagger order: Agencies benefit 1 → 2 → 3, then Brands benefit 1 → 2 → 3 (total 6 cards)
- **Verification:** Scroll into section, verify 3D rotation from side (90°) to front (0°), stagger visible
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.7 Implementation line 539]
- **Traceability:** AC-2.37, AC-2.42 from tech-spec-epic-2.md lines 931, 936

### 4. Cursor-Following Gradient Spotlight (Premium Micro-Interaction)
- Implement gradient spotlight effect that follows cursor position across value props section
- Use CSS radial-gradient overlay with JavaScript mousemove tracking:
  - Spotlight center follows cursor coordinates
  - Gradient: radial-gradient(circle 600px at [cursorX] [cursorY], rgba(cyan/fuchsia, 0.15), transparent 70%)
  - Throttled to 60fps (16ms mousemove event processing via gsap.utils.throttle)
  - Spotlight color interpolates between cyan and fuchsia based on cursor X position:
    - Left side (agencies): cyan spotlight
    - Right side (brands): fuchsia spotlight
    - Center: gradient blend
- Spotlight effect only active on desktop (>= 1024px), disabled on mobile/tablet
- **Verification:** Move cursor across section, verify spotlight follows, color transitions from cyan to fuchsia
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.7 Implementation line 540]
- **Traceability:** Premium execution pattern (not explicit AC, but enhances "premium feel")

### 5. CTA Section Copy Implementation (Dual-Button Strategy)
- Main headline: "Start Creating Production-Ready Storyboards"
- Subheadline: "Your Brand. Your Vision. AI-Powered Precision."
- **Dual CTA Buttons:**
  - Primary button: "Start Your First Brief"
    - Links to: `https://admanager.cre8tive.ai/`
    - Style: Indigo to fuchsia gradient, prominent size
  - Secondary button: "Talk to Our Team"
    - Links to: `/contact`
    - Style: Outlined/ghost style, cyan border
- **Feature Pills (3 pills below CTAs):**
  - Pill 1: "9 Visual Styles"
  - Pill 2: "PDF Export"
  - Pill 3: "Studios Integration"
  - Pills have subtle morphing entrance animation (shape morphs in with elastic.out)
- **Verification:** All copy matches COPY_IMPLEMENTATION_GUIDE.md CTA section exactly (lines 745-767)
- **Reference:** [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#CTA Section lines 745-767]
- **Traceability:** AC-2.19, AC-2.20 from tech-spec-epic-2.md lines 907-908

### 6. Dual-Button Magnetic Pull with Competing Forces (Premium Micro-Pattern)
- Implement magnetic pull on BOTH CTA buttons using useMagneticPull hook from Epic 2
- **Primary Button Magnetic Config:**
  - Strength: 0.4 (stronger pull for primary action)
  - Max distance: 150px cursor detection radius
  - Element moves ≤35px toward cursor when hovering nearby
  - Rotation enabled: rotationIntensity 0.15 (slight tilt toward cursor)
- **Secondary Button Magnetic Config:**
  - Strength: 0.25 (gentler pull for secondary action)
  - Max distance: 120px cursor detection radius
  - Element moves ≤25px toward cursor
  - Rotation enabled: rotationIntensity 0.1
- **Competing Forces Effect:**
  - When cursor is between both buttons (equidistant), both buttons pull simultaneously
  - Creates visual "tension" where buttons move toward each other slightly
  - Throttled to 60fps for both buttons (shared mousemove listener)
- Magnetic pull disabled on mobile (<768px), buttons static with standard hover states
- **Verification:** Hover between buttons, verify both pull toward cursor, competing force visible
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.7 Implementation line 543]
- **Traceability:** AC-2.33, AC-2.34, AC-2.44 from tech-spec-epic-2.md lines 927-928, 938

### 7. Feature Pills Morphing Entrance Animation (Premium Micro-Choreography)
- Implement morphing entrance for 3 feature pills below CTA buttons
- Pills start as collapsed circles (0% width pill shape), morph into full pill capsules
- GSAP animation sequence:
  - Initial state: `scaleX: 0.2`, `opacity: 0`, pill appears as dot
  - Final state: `scaleX: 1`, `opacity: 1`, pill expands to full capsule width
  - Easing: `CRE8TIVE_EASINGS.spring` (elastic.out for visible bounce)
  - Stagger: 0.1s between pills (sequential reveal)
  - Duration: 0.6s per pill
  - ScrollTrigger: Pills animate when CTA section scrolls into view (trigger: `.cta-section`, start: `top 80%`)
- Pills have glassmorphism styling:
  - Background: indigo gradient with 15% opacity
  - Border: 1px solid cyan/fuchsia (alternating colors)
  - Icon + text layout
- **Verification:** Scroll into CTA section, verify pills morph from dots to capsules with bounce
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.7 Implementation line 544]
- **Traceability:** AC-2.42 from tech-spec-epic-2.md line 936 (signature easing)

### 8. Responsive Design & Performance
- Desktop (1024px+): Full premium animations (3D rotation, cursor spotlight, dual magnetic pull, morphing pills)
- Tablet (768px-1023px): Simplified animations (2D fade-in for cards, no spotlight, no magnetic pull, pills fade in)
- Mobile (375px-767px): 1 column stack (Agencies above Brands), static cards (simple fade-in), no spotlight, no magnetic pull, pills fade in
- All animations achieve 60fps on Chrome 100+, Firefox 100+, Safari 15+
- 3D rotation uses CSS transform + transformPerspective (GPU-accelerated)
- Cursor spotlight uses CSS radial-gradient (no canvas, performant)
- **Verification:** Test all 3 breakpoints in Chrome DevTools, verify 60fps in Performance tab, verify mobile fallbacks
- **Reference:** [Source: docs/tech-spec-epic-2.md#Performance lines 629-707]
- **Traceability:** AC-2.24, AC-2.25, AC-2.43, AC-2.44 from tech-spec-epic-2.md lines 915-916, 937-938

### 9. Integration with Briefing Engine Page
- Import ValuePropsAgenciesBrands component into `src/pages/BriefingEngine.tsx`
- Place after StudiosConnection component (Story 2.6), before or as part of BriefingCTA section
- Import BriefingCTA component (update with dual-button magnetic pull and feature pills)
- Create VALUE_PROPS_DATA const in component file with all copy from COPY_IMPLEMENTATION_GUIDE.md
- Verify both CTA buttons link correctly:
  - Primary: `https://admanager.cre8tive.ai/` (external link, opens same tab)
  - Secondary: `/contact` (React Router Link)
- Verify smooth scroll behavior with Lenis (already configured globally)
- Verify no layout shifts (CLS ≤0.1), no console errors
- **Verification:** Full Briefing Engine page renders, Value Props and CTA sections visible, scroll smooth, build succeeds
- **Reference:** [Source: docs/tech-spec-epic-2.md#Page Rendering Flow lines 561-592]

### 10. Code Quality & Build Validation
- TypeScript compiles clean (`npm run build`) with 0 errors
- ESLint passes (0 errors, warnings acceptable per project standards)
- All components follow frontend-architecture.md Component Template Checklist
- React cleanup patterns implemented (useEffect return cleanup for GSAP context, useMagneticPull, mousemove listeners)
- No console.log statements in production code
- Organic SVG shapes optimized (inline for best performance)
- **Verification:** Run `npm run build` and `npm run lint`, verify success
- **Reference:** [Source: docs/architecture/frontend-architecture.md#Component Template Checklist]
- **Traceability:** AC-2.21, AC-2.22, AC-2.23 from tech-spec-epic-2.md lines 911-913

### 11. Premium Pattern Integration from Epic 2 Foundation
- Import and use OrganicCard from `@/components/epic2/shapes/OrganicCard`
- Import and use useMagneticPull hook from `@/components/epic2/hooks/useMagneticPull`
- Import and use CRE8TIVE_EASINGS from `@/components/epic2/animations/easings`
- Follow Epic 2 premium usage patterns from `src/components/epic2/PREMIUM_USAGE.md`
- Verify all premium patterns achieve 60fps (verified in Chrome DevTools Performance tab)
- **Verification:** Code review confirms correct Epic 2 imports, performance profiling shows 60fps
- **Reference:** [Source: docs/tech-spec-epic-2.md#Story 2.0 Epic 2 Premium Foundation lines 453-469]
- **Traceability:** AC-2.31-2.34, AC-2.42, AC-2.43 from tech-spec-epic-2.md lines 925-928, 936-937

### 12. Visual QA & Copy Accuracy
- All Value Props copy matches COPY_IMPLEMENTATION_GUIDE.md exactly (word-for-word)
- Agencies column: 3 benefits with headers, cyan accent color
- Brands column: 3 benefits with headers, fuchsia accent color
- CTA section: Main headline, subheadline, dual buttons with correct links, 3 feature pills
- Section headers and subheaders match copy guide
- Primary CTA links to `https://admanager.cre8tive.ai/` correctly
- Secondary CTA links to `/contact` correctly (React Router)
- **Verification:** Side-by-side comparison with COPY_IMPLEMENTATION_GUIDE.md, pixel-perfect match
- **Reference:** [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#Value Props and CTA sections lines 688-767]

## Tasks / Subtasks

- [ ] **Task 1: Create VALUE_PROPS_DATA Constant** (AC: #1)
  - [ ] Read COPY_IMPLEMENTATION_GUIDE.md Value Props section (lines 688-742)
  - [ ] Create VALUE_PROPS_DATA const object with structure:
    ```typescript
    export const VALUE_PROPS_DATA = {
      sectionHeader: "Built for Professional Teams",
      agencies: {
        header: "For Agencies",
        subheader: "Scale creative without burning hours",
        benefits: [
          {
            title: "Multi-Client Pipeline",
            description: "Spin up on-brand storyboards for every client without burning creative hours. Maintain consistency across your entire portfolio."
          },
          {
            title: "Faster Client Onboarding",
            description: "Seven guided fields capture product, audience, and guardrails in minutes. No more endless discovery calls."
          },
          {
            title: "Team Productivity Multiplier",
            description: "Automate storyboard drafts so strategists focus on insight and polish—not manual scene layout."
          }
        ]
      },
      brands: {
        header: "For Brands",
        subheader: "Launch campaigns before opportunities pass",
        benefits: [
          {
            title: "Speed to Campaign Launch",
            description: "Go from concept to production-ready storyboard in under 10 minutes. Move at the speed of opportunity."
          },
          {
            title: "Brand Consistency Locked In",
            description: "Nine visual styles ensure typography, tone, and color stay on-brand before production. No more misaligned creative."
          },
          {
            title: "Studios-Ready Output",
            description: "Deliver beautifully formatted PDFs with scene notes, aspect ratios, and Studios handoff baked in. Review to production in minutes."
          }
        ]
      }
    }
    ```
  - [ ] Verify all copy matches COPY_IMPLEMENTATION_GUIDE.md exactly
  - [ ] Place const at top of ValuePropsAgenciesBrands.tsx component file

- [ ] **Task 2: Create ValuePropsAgenciesBrands Component Structure** (AC: #1, #9)
  - [ ] Create new file: `src/components/briefing/ValuePropsAgenciesBrands.tsx`
  - [ ] Import dependencies:
    ```typescript
    import { useRef, useState } from 'react'
    import { useGSAP } from '@gsap/react'
    import gsap from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { motion } from 'framer-motion'
    import { OrganicCard } from '@/components/epic2/shapes/OrganicCard'
    import { CRE8TIVE_EASINGS } from '@/components/epic2/animations/easings'
    import { briefingPalette } from './palette'
    import { cn } from '@/lib/utils'

    gsap.registerPlugin(ScrollTrigger)
    ```
  - [ ] Create component interface:
    ```typescript
    export interface ValuePropsAgenciesBrandsProps {
      className?: string
    }
    ```
  - [ ] Implement component scaffold with 2-column layout
  - [ ] Add section header: "Built for Professional Teams"
  - [ ] Create left column: "For Agencies" with header, subheader, 3 benefit cards
  - [ ] Create right column: "For Brands" with header, subheader, 3 benefit cards
  - [ ] Verify structure matches copy guide layout

- [ ] **Task 3: Implement Organic Benefit Card Shapes** (AC: #2)
  - [ ] Wrap each benefit in OrganicCard component:
    ```typescript
    <OrganicCard
      shape="organic"
      morphing={true}
      morphIntensity={0.04} // ±4% variation (3-5% range)
      glowColor={isAgency ? briefingPalette.cyan.DEFAULT : briefingPalette.fuchsia.DEFAULT}
      className="benefit-card"
    >
      {/* Benefit content */}
    </OrganicCard>
    ```
  - [ ] Configure morphing animation (8s loop, Framer Motion path morphing)
  - [ ] Style cards with glassmorphism background:
    ```typescript
    className="benefit-card relative overflow-hidden backdrop-blur-md"
    style={{
      background: `linear-gradient(135deg, ${accentColor}15, ${briefingPalette.indigo.DEFAULT}10)`,
      border: `1px solid ${accentColor}30`
    }}
    ```
  - [ ] Test: Verify organic shapes render, observe 8s morphing loop

- [ ] **Task 4: Implement 3D Y-Axis Rotation Reveal** (AC: #3)
  - [ ] Create refs for benefit cards:
    ```typescript
    const containerRef = useRef<HTMLDivElement>(null)
    const agencyCardsRef = useRef<HTMLDivElement[]>([])
    const brandCardsRef = useRef<HTMLDivElement[]>([])
    ```
  - [ ] Implement GSAP 3D rotation animation in useGSAP:
    ```typescript
    useGSAP(() => {
      const allCards = [...agencyCardsRef.current, ...brandCardsRef.current]

      gsap.from(allCards, {
        rotationY: 90, // Start rotated away
        opacity: 0,
        duration: 0.8,
        ease: CRE8TIVE_EASINGS.organic, // power4.out fallback
        stagger: 0.15, // 0.15s between cards
        transformPerspective: 1000,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      })
    }, { scope: containerRef })
    ```
  - [ ] Add CSS `transform-style: preserve-3d` to container
  - [ ] Test: Scroll into section, verify 3D rotation from 90° to 0°, stagger visible

- [ ] **Task 5: Implement Cursor-Following Gradient Spotlight** (AC: #4)
  - [ ] Create state for spotlight position:
    ```typescript
    const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 }) // % values
    const [spotlightColor, setSpotlightColor] = useState(briefingPalette.cyan.DEFAULT)
    ```
  - [ ] Implement throttled mousemove listener:
    ```typescript
    const handleMouseMove = gsap.utils.throttle((e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      setSpotlightPos({ x, y })

      // Interpolate color based on X position
      const colorLerp = x / 100 // 0 = left (cyan), 1 = right (fuchsia)
      const color = colorLerp < 0.5
        ? briefingPalette.cyan.DEFAULT
        : briefingPalette.fuchsia.DEFAULT
      setSpotlightColor(color)
    }, 16) // 60fps
    ```
  - [ ] Apply spotlight as CSS overlay:
    ```typescript
    <div
      className="absolute inset-0 pointer-events-none hidden lg:block"
      style={{
        background: `radial-gradient(circle 600px at ${spotlightPos.x}% ${spotlightPos.y}%, ${spotlightColor}15, transparent 70%)`
      }}
    />
    ```
  - [ ] Test: Move cursor across section, verify spotlight follows, color transitions cyan → fuchsia

- [ ] **Task 6: Create CTA_DATA Constant** (AC: #5)
  - [ ] Read COPY_IMPLEMENTATION_GUIDE.md CTA section (lines 745-767)
  - [ ] Create CTA_DATA const object:
    ```typescript
    export const CTA_DATA = {
      headline: "Start Creating Production-Ready Storyboards",
      subheadline: "Your Brand. Your Vision. AI-Powered Precision.",
      primaryButton: {
        text: "Start Your First Brief",
        link: "https://admanager.cre8tive.ai/",
        external: true
      },
      secondaryButton: {
        text: "Talk to Our Team",
        link: "/contact",
        external: false
      },
      featurePills: [
        "9 Visual Styles",
        "PDF Export",
        "Studios Integration"
      ]
    }
    ```
  - [ ] Verify all copy matches COPY_IMPLEMENTATION_GUIDE.md exactly

- [ ] **Task 7: Update BriefingCTA Component with Dual-Button Magnetic Pull** (AC: #6)
  - [ ] Open `src/components/briefing/BriefingCTA.tsx` (or create if doesn't exist)
  - [ ] Import useMagneticPull hook from Epic 2:
    ```typescript
    import { useMagneticPull } from '@/components/epic2/hooks/useMagneticPull'
    ```
  - [ ] Apply useMagneticPull to both buttons:
    ```typescript
    // Primary button
    const primaryRef = useMagneticPull({
      strength: 0.4,
      maxDistance: 150,
      ease: 'power2.out',
      rotation: true,
      rotationIntensity: 0.15
    })

    // Secondary button
    const secondaryRef = useMagneticPull({
      strength: 0.25,
      maxDistance: 120,
      ease: 'power2.out',
      rotation: true,
      rotationIntensity: 0.1
    })
    ```
  - [ ] Style primary button with gradient:
    ```typescript
    <a
      ref={primaryRef}
      href="https://admanager.cre8tive.ai/"
      className="px-8 py-4 rounded-full text-white font-semibold"
      style={{
        background: `linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}, ${briefingPalette.fuchsia.DEFAULT})`
      }}
    >
      Start Your First Brief
    </a>
    ```
  - [ ] Style secondary button with outlined style:
    ```typescript
    <Link
      ref={secondaryRef}
      to="/contact"
      className="px-8 py-4 rounded-full font-semibold"
      style={{
        border: `2px solid ${briefingPalette.cyan.DEFAULT}`,
        color: briefingPalette.cyan.DEFAULT
      }}
    >
      Talk to Our Team
    </Link>
    ```
  - [ ] Test: Hover between buttons, verify both pull toward cursor, competing force visible

- [ ] **Task 8: Implement Feature Pills Morphing Entrance** (AC: #7)
  - [ ] Create feature pills below CTA buttons:
    ```typescript
    const pillsRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
      gsap.from('.feature-pill', {
        scaleX: 0.2, // Start as dots
        opacity: 0,
        duration: 0.6,
        ease: CRE8TIVE_EASINGS.spring, // elastic.out for bounce
        stagger: 0.1, // 0.1s between pills
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      })
    }, { scope: pillsRef })
    ```
  - [ ] Style pills with glassmorphism:
    ```typescript
    <div className="feature-pill inline-flex items-center gap-2 px-6 py-3 rounded-full">
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{pillText}</span>
    </div>

    // CSS
    .feature-pill {
      background: linear-gradient(135deg, ${briefingPalette.indigo.DEFAULT}15, transparent);
      border: 1px solid ${accentColor}40;
    }
    ```
  - [ ] Test: Scroll into CTA, verify pills morph from dots to capsules with bounce

- [ ] **Task 9: Implement Responsive Design** (AC: #8)
  - [ ] Desktop (1024px+): Full premium animations (no changes needed from above)
  - [ ] Tablet (768px-1023px): Simplify animations:
    ```typescript
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')

    if (isTablet) {
      // 2D fade-in instead of 3D rotation
      gsap.from('.benefit-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
      })

      // No cursor spotlight (desktop only)
      // No magnetic pull (desktop only)
    }
    ```
  - [ ] Mobile (<768px): 1 column stack, static cards:
    ```typescript
    const isMobile = useMediaQuery('(max-width: 767px)')

    if (isMobile) {
      // Simple fade-in
      gsap.from('.benefit-card', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
      })

      // Stack: Agencies above Brands
      // No cursor spotlight
      // No magnetic pull (static buttons)
    }
    ```
  - [ ] Test all 3 breakpoints, verify 60fps in Chrome DevTools Performance tab

- [ ] **Task 10: Integrate with Briefing Engine Page** (AC: #9)
  - [ ] Open `src/pages/BriefingEngine.tsx`
  - [ ] Import components:
    ```typescript
    import { ValuePropsAgenciesBrands } from '@/components/briefing/ValuePropsAgenciesBrands'
    import { BriefingCTA } from '@/components/briefing/BriefingCTA'
    ```
  - [ ] Add to page after StudiosConnection:
    ```typescript
    <StudiosConnection />

    <FadeIn>
      <ValuePropsAgenciesBrands />
    </FadeIn>

    <BriefingCTA />
    ```
  - [ ] Verify full page renders without errors
  - [ ] Test smooth scroll with Lenis
  - [ ] Verify CTA button links work:
    - Primary: `https://admanager.cre8tive.ai/` (external)
    - Secondary: `/contact` (React Router)

- [ ] **Task 11: Code Quality & Build Validation** (AC: #10, #11)
  - [ ] Run `npm run build`: verify TypeScript compiles with 0 errors
  - [ ] Run `npm run lint`: verify ESLint passes (0 errors, warnings OK)
  - [ ] Review React cleanup patterns: verify useGSAP cleanup, useMagneticPull cleanup, mousemove listener cleanup
  - [ ] Remove console.log statements from production code
  - [ ] Verify all components follow frontend-architecture.md patterns
  - [ ] Test import paths work correctly
  - [ ] Create barrel export in `src/components/briefing/index.ts`:
    ```typescript
    export { ValuePropsAgenciesBrands } from './ValuePropsAgenciesBrands'
    export { BriefingCTA } from './BriefingCTA'
    ```

- [ ] **Task 12: Visual QA & Copy Verification** (AC: #12)
  - [ ] Visual QA: Compare to COPY_IMPLEMENTATION_GUIDE.md, verify pixel-perfect copy match
  - [ ] Browser testing: Chrome, Firefox, Safari (latest versions)
  - [ ] Test all breakpoints: 375px, 768px, 1024px, 1920px
  - [ ] Verify all 12 acceptance criteria satisfied
  - [ ] Document any deviations or issues in Dev Notes
  - [ ] Take screenshots for Value Props and CTA sections (mobile, tablet, desktop)
  - [ ] Record screen video of 3D rotation, cursor spotlight, and dual magnetic CTAs for QA reference

## Dev Notes

### Project Structure Alignment

This story implements the final content sections for Epic 2 Briefing Engine enhancements: the split-benefit Value Props presentation and the premium dual-button CTA. Following the premium patterns established in Stories 2.1-2.6, this component combines organic shapes, 3D choreography, cursor-responsive interactions, and competing magnetic forces to create a distinctive conversion-focused experience.

**Premium Patterns Introduced:**

1. **3D Y-axis rotation reveal** - First 3D rotation in Briefing Engine (previously used in Story 2.2 for Studios platform cards)
2. **Cursor-following gradient spotlight** - Dynamic radial-gradient overlay that interpolates color based on cursor position
3. **Dual-button magnetic pull with competing forces** - First implementation of multiple magnetic elements with simultaneous pull effects
4. **Feature pills morphing entrance** - Pills morph from dots to capsules with elastic bounce (scaleX animation)

**Component Dependencies:**

```
ValuePropsAgenciesBrands.tsx (NEW)
├── OrganicCard (Epic 2, organic shape variant for benefit cards)
├── CRE8TIVE_EASINGS (Epic 2, organic/spring for smooth animations)
├── GSAP ScrollTrigger (3D rotation reveal on scroll)
├── Framer Motion (shape morphing for OrganicCard)
├── briefingPalette (Briefing Engine color system, cyan/fuchsia accents)
└── React hooks (useState for spotlight position, useRef for card refs)

BriefingCTA.tsx (UPDATED)
├── useMagneticPull (Epic 2, dual-button magnetic pull)
├── CRE8TIVE_EASINGS (Epic 2, spring for feature pill morphing)
├── GSAP ScrollTrigger (feature pills entrance animation)
├── React Router Link (secondary CTA navigation)
└── briefingPalette (gradient for primary CTA, cyan for secondary)
```

**File Structure:**

```
src/components/briefing/
├── ValuePropsAgenciesBrands.tsx  # NEW - Split benefit presentation
├── BriefingCTA.tsx                # UPDATED - Dual magnetic buttons + pills
└── index.ts                       # Updated barrel export
```

### Architecture Context

**Epic 2 Premium Foundation (Story 2.0) - PRODUCTION READY:**

Story 2.0 foundation components available for import:

**Import Pattern:**
```typescript
import { OrganicCard } from '@/components/epic2/shapes/OrganicCard'
import { useMagneticPull } from '@/components/epic2/hooks/useMagneticPull'
import { CRE8TIVE_EASINGS } from '@/components/epic2/animations/easings'
```

**Available Utilities:**
- ✅ `OrganicCard` with shape="organic" - Used for benefit cards with morphing animation
- ✅ `useMagneticPull` hook - Used for dual-button magnetic pull (throttled 60fps, mobile detection, proper cleanup)
- ✅ `CRE8TIVE_EASINGS.organic` - power4.out fallback for 3D rotation smooth deceleration
- ✅ `CRE8TIVE_EASINGS.spring` - elastic.out for feature pill bounce

**Existing Infrastructure Used:**
- GSAP 3.13.0 + ScrollTrigger (Story 1.1, Epic 1) - Used for 3D rotation and pill morphing
- Lenis 1.3.11 (Story 1.1, Epic 1) - Smooth scroll foundation
- Framer Motion 12.4.2 (existing project) - Used for OrganicCard shape morphing
- Tailwind CSS 3.4.11 (existing styling system)
- Dark indigo/cyan/fuchsia palette (Epic 1 palette.ts, briefingPalette)
- React Router 6.26.2 (secondary CTA navigation to /contact)

**New Patterns Introduced (Story 2.7 Unique):**
- First 3D Y-axis rotation in Briefing Engine (used in Studios Story 2.2, adapted here)
- First cursor-following gradient spotlight (dynamic CSS radial-gradient with color interpolation)
- First dual-button magnetic pull with competing forces (two useMagneticPull instances, simultaneous pull)
- First feature pill morphing entrance (scaleX animation from dot to capsule with elastic bounce)

**Performance Budget (from Tech Spec lines 629-707):**

| Pattern | CPU Cost | GPU Cost | Budget | Mitigation |
|---------|----------|----------|--------|------------|
| **3D Rotation Reveal (6 cards)** | Low (GSAP timeline) | Medium (rotationY transform) | Use transformPerspective | GPU acceleration, stagger 0.15s |
| **Cursor Spotlight (1 overlay)** | Low (throttled mousemove) | Low (CSS radial-gradient) | Throttle to 60fps | gsap.utils.throttle, desktop only |
| **Dual Magnetic Pull (2 buttons)** | Low (shared throttled listener) | Low (transform only) | Throttle to 60fps | gsap.utils.throttle, mobile disable |
| **Organic Shape Morphing (6 cards)** | Low (Framer Motion) | Medium (SVG path animation) | Limit to 6 cards | Use Framer Motion (optimized) |
| **Feature Pill Morphing (3 pills)** | Low (GSAP timeline) | Low (scaleX transform) | Simple transform | GPU acceleration, stagger 0.1s |
| **Total Frame Budget** | ~6ms | ~5ms | ≤16.67ms (60fps) | All patterns GPU-accelerated |

**Mobile Optimization Strategy:**
- Disable 3D rotation on <768px (use 2D fade-in instead, simpler animation)
- Disable cursor spotlight on mobile (no cursor on touch screens, effect irrelevant)
- Disable dual magnetic pull on mobile (no cursor, standard button hover states)
- Simplify OrganicCard morphing on mobile (static shapes, no animation loop)
- Feature pills still morph on mobile (lightweight scaleX animation, acceptable)
- 1 column stack on mobile: Agencies section above Brands section (vertical flow)

### Testing Strategy

**Manual Testing Checklist:**

1. **Value Props Section:**
   - Verify section header: "Built for Professional Teams"
   - Check 2-column layout (left: Agencies, right: Brands)
   - Verify Agencies column: header, subheader, 3 benefits with cyan accent
   - Verify Brands column: header, subheader, 3 benefits with fuchsia accent
   - Check all 6 benefit cards display copy from COPY_IMPLEMENTATION_GUIDE.md
   - Verify organic shape cards render (not rectangles)

2. **3D Y-Axis Rotation:**
   - Scroll into Value Props section slowly
   - Verify benefit cards rotate from side (90°) to front (0°)
   - Check stagger effect visible (agencies 1-2-3, then brands 1-2-3)
   - Verify smooth deceleration (CRE8TIVE_EASINGS.organic / power4.out)
   - Test on desktop, tablet, mobile (mobile should use 2D fade-in)

3. **Cursor-Following Gradient Spotlight:**
   - Move cursor across Value Props section (desktop only)
   - Verify spotlight follows cursor smoothly (throttled 60fps)
   - Check spotlight color transitions: left (cyan) → center (blend) → right (fuchsia)
   - Verify spotlight disabled on tablet/mobile
   - Check spotlight doesn't interfere with content readability (15% opacity)

4. **Dual-Button Magnetic Pull:**
   - Hover near primary button (within 150px radius)
   - Verify button moves toward cursor (max 35px movement, rotation enabled)
   - Hover near secondary button (within 120px radius)
   - Verify button moves toward cursor (max 25px movement, rotation enabled)
   - Hover between both buttons (equidistant)
   - Verify competing forces effect (both buttons pull toward cursor simultaneously)
   - Check throttled to 60fps (smooth, no lag)

5. **Feature Pills Morphing:**
   - Scroll into CTA section
   - Verify 3 pills morph from dots (scaleX 0.2) to capsules (scaleX 1.0)
   - Check visible elastic bounce (CRE8TIVE_EASINGS.spring)
   - Verify stagger effect visible (0.1s between pills)
   - Pills: "9 Visual Styles", "PDF Export", "Studios Integration"

6. **CTA Section Copy:**
   - Verify headline: "Start Creating Production-Ready Storyboards"
   - Verify subheadline: "Your Brand. Your Vision. AI-Powered Precision."
   - Check primary button text: "Start Your First Brief"
   - Check primary button links to: `https://admanager.cre8tive.ai/`
   - Check secondary button text: "Talk to Our Team"
   - Check secondary button links to: `/contact` (React Router)

7. **Responsive Layouts:**
   - 375px mobile: 1 column stack (Agencies above Brands), static cards (2D fade-in), no spotlight, no magnetic pull, pills morph
   - 768px tablet: 2 columns, 2D fade-in (no 3D rotation), no spotlight, no magnetic pull, pills morph
   - 1024px+ desktop: 2 columns, full premium animations (3D rotation, cursor spotlight, dual magnetic pull, pills morph)
   - Verify no layout shifts (CLS score in Lighthouse)

8. **Performance Testing:**
   - Chrome DevTools Performance tab: Record page load + scroll
   - Verify 60fps maintained (no frames >16.67ms) during:
     - 3D rotation reveal on scroll into Value Props
     - Cursor spotlight movement across section
     - Dual magnetic pull hover near CTA buttons
     - Feature pill morphing entrance
   - Test mobile device emulation: verify simplified animations, 60fps maintained
   - Test CPU throttle 6x: verify graceful degradation if <30fps

9. **Copy Accuracy:**
   - Compare all copy to COPY_IMPLEMENTATION_GUIDE.md lines 688-767 (exact match)
   - Verify section headers, subheaders, benefit descriptions, CTA copy, feature pills
   - Check button links correct (primary: external, secondary: React Router)

10. **Build & Code Quality:**
    - `npm run build` passes with 0 TypeScript errors
    - `npm run lint` passes with 0 ESLint errors
    - React cleanup: verify cleanup for GSAP contexts, useMagneticPull (dual instances), mousemove listener
    - No console.log statements in production code

### References

**Source Documentation:**
- [Source: docs/tech-spec-epic-2.md#Story 2.7 Implementation] - Lines 537-547 (workflow sequence)
- [Source: docs/tech-spec-epic-2.md#Acceptance Criteria] - Lines 907-908 (AC 2.17-2.20)
- [Source: docs/tech-spec-epic-2.md#Premium Execution Features] - Lines 924-947 (AC 2.31-2.47)
- [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#Value Props: Agencies vs Brands Section] - Lines 688-742 (all value props copy)
- [Source: docs/COPY_IMPLEMENTATION_GUIDE.md#CTA Section] - Lines 745-767 (all CTA copy)
- [Source: docs/architecture/frontend-architecture.md#Component Template] - Component patterns
- [Source: docs/architecture/animation-patterns.md#GSAP 3D Rotation] - 3D rotation pattern

**Epic 2 Foundation Components (Story 2.0):**
- OrganicCard: `src/components/epic2/shapes/OrganicCard.tsx`
- useMagneticPull: `src/components/epic2/hooks/useMagneticPull.ts`
- CRE8TIVE_EASINGS: `src/components/epic2/animations/easings.ts`

### Technical Decisions

**1. 3D Y-Axis Rotation vs 2D Fade-In**

**Decision:** Implement 3D Y-axis rotation (rotationY: 90 → 0) for benefit card reveals on desktop

**Rationale:**
- Creates premium depth perception (cards appear to flip from side to face user)
- More dramatic than 2D fade-in (standard reveal pattern)
- Reinforces "multi-dimensional" value props messaging (agencies vs brands, two perspectives)
- Already validated pattern from Story 2.2 (Studios platform cards)
- Aligns with "premium execution" philosophy (10x more dynamic than generic grid)

**Alternatives Considered:**
- 2D fade-in (opacity + y translate): Simpler but less premium feel
- 3D X-axis rotation (top/bottom flip): Wrong axis for left/right column layout
- Scale + rotation: Too busy, competes with organic shape morphing

**Implementation:**
```typescript
gsap.from('.benefit-card', {
  rotationY: 90, // Start rotated away (side view)
  opacity: 0,
  duration: 0.8,
  ease: CRE8TIVE_EASINGS.organic, // power4.out fallback
  transformPerspective: 1000,
  stagger: 0.15,
})
```

**Mobile/Tablet Fallback:** 2D fade-in (simpler, more performant on smaller screens)

---

**2. Cursor-Following Gradient Spotlight vs Static Accent Gradients**

**Decision:** Implement dynamic radial-gradient spotlight that follows cursor position and interpolates color (cyan → fuchsia)

**Rationale:**
- Creates interactive "illumination" effect (user controls focus area)
- Color interpolation reinforces agency (cyan) vs brand (fuchsia) distinction
- More engaging than static background gradient (premium micro-interaction)
- Low GPU cost (CSS radial-gradient, not canvas, very performant)
- Differentiates from Stories 2.1-2.6 (new premium pattern for Epic 2)

**Alternatives Considered:**
- Static background gradient (cyan/fuchsia): Clean but missed opportunity for interactivity
- Canvas-based particle spotlight: Higher GPU cost, unnecessary complexity
- Fixed spotlight position (center): No cursor-following effect, less engaging

**Implementation:**
```typescript
// Throttled mousemove listener (60fps)
const handleMouseMove = gsap.utils.throttle((e: MouseEvent) => {
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100

  setSpotlightPos({ x, y })

  const color = x < 50 ? briefingPalette.cyan.DEFAULT : briefingPalette.fuchsia.DEFAULT
  setSpotlightColor(color)
}, 16)

// CSS radial-gradient overlay
style={{
  background: `radial-gradient(circle 600px at ${x}% ${y}%, ${color}15, transparent 70%)`
}}
```

**Performance:** Desktop only (>= 1024px), throttled to 60fps, single div overlay (no multiple elements)

---

**3. Dual-Button Magnetic Pull with Competing Forces vs Single Primary Magnetic**

**Decision:** Apply useMagneticPull to BOTH primary and secondary CTA buttons with different strength/distance configs, creating "competing forces" when cursor is between buttons

**Rationale:**
- More engaging than single magnetic button (both buttons respond to cursor)
- "Competing forces" effect creates visual tension (buttons pull toward cursor simultaneously)
- Reinforces dual-action CTA strategy (primary = external app, secondary = contact page)
- Differentiates from Stories 2.4-2.6 (previous magnetic patterns were single-element)
- Strengthens conversion (both actions feel inviting, magnetic pull increases engagement)

**Alternatives Considered:**
- Single primary magnetic only: Secondary feels static, less engaging
- Equal magnetic strength: No hierarchy, primary should pull stronger
- No magnetic pull: Standard hover states, missed premium opportunity

**Implementation:**
```typescript
// Primary button (stronger pull)
const primaryRef = useMagneticPull({
  strength: 0.4, // 40% pull intensity
  maxDistance: 150, // Larger detection radius
  rotation: true,
  rotationIntensity: 0.15
})

// Secondary button (gentler pull)
const secondaryRef = useMagneticPull({
  strength: 0.25, // 25% pull intensity
  maxDistance: 120, // Smaller detection radius
  rotation: true,
  rotationIntensity: 0.1
})
```

**Competing Forces:** When cursor is equidistant between buttons, both pull simultaneously (buttons move toward each other slightly, creating visual tension)

---

**4. Feature Pills Morphing Entrance (scaleX) vs Standard Fade-In**

**Decision:** Pills morph from dots (scaleX: 0.2) to full capsules (scaleX: 1.0) with elastic.out bounce

**Rationale:**
- More playful than standard fade-in (reinforces "9 Visual Styles" feature pill)
- Elastic bounce creates energy (premium micro-choreography)
- scaleX animation is GPU-friendly (transform only, not width property)
- Pills start as dots (visual interest), expand to reveal text (progressive disclosure)
- Lightweight pattern (3 pills only, low performance cost)

**Alternatives Considered:**
- Standard fade-in (opacity + y): Too generic, missed opportunity
- Rotate + scale: Too busy, competes with magnetic buttons
- Slide-in from side: Wrong direction for centered layout

**GSAP Animation:**
```typescript
gsap.from('.feature-pill', {
  scaleX: 0.2, // Start as dot (collapsed pill)
  opacity: 0,
  duration: 0.6,
  ease: CRE8TIVE_EASINGS.spring, // elastic.out for bounce
  stagger: 0.1, // 0.1s between pills
})
```

**Stagger Order:** "9 Visual Styles" → "PDF Export" → "Studios Integration" (left to right)

---

**5. Organic Shape Variant (shape="organic") vs Blob or Hexagon**

**Decision:** Use OrganicCard with shape="organic" for all 6 benefit cards

**Rationale:**
- "Organic" variant best suits text-heavy benefit cards (smooth edges, no sharp corners)
- Softer than hexagon (hexagon better for platform cards in Story 2.2)
- Less playful than blob (blob better for portfolio cards in Story 2.1)
- Consistent shape across all benefits (agencies and brands cards use same variant)
- Morphing animation subtle enough for readability (±4% variation)

**Alternatives Considered:**
- Blob shape: Too playful for professional value props messaging
- Hexagon shape: Too geometric, sharp corners compete with text
- Mixed shapes (agencies = blob, brands = hexagon): Inconsistent, confusing

**OrganicCard Config:**
```typescript
<OrganicCard
  shape="organic"
  morphing={true}
  morphIntensity={0.04} // ±4% variation (3-5% range from spec)
  glowColor={accentColor} // cyan for agencies, fuchsia for brands
/>
```

---

**6. Mobile 3D Rotation Strategy (Disable vs Simplify)**

**Decision:** Disable 3D rotation on mobile (<768px) and tablet (768px-1023px), use 2D fade-in instead

**Rationale:**
- Mobile/tablet screens too small for effective 3D depth perception (effect lost on small viewport)
- 3D transforms more GPU-intensive (mobile devices need simpler animations)
- Touch interactions don't benefit from 3D rotation (no cursor hover)
- Simpler 2D fade-in is clearer on small screens (no competing motion)
- Saves mobile GPU resources (faster page performance)

**Mobile Simplifications:**
- 3D rotation: Disabled (use opacity + y: 30px fade-in)
- Cursor spotlight: Disabled (no cursor on mobile)
- Dual magnetic pull: Disabled (standard button hover states)
- Organic shape morphing: Simplified (static shapes, no animation loop)
- Feature pills: ENABLED (scaleX morphing is lightweight, acceptable on mobile)

**CSS Implementation:**
```typescript
const isMobile = useMediaQuery('(max-width: 767px)')

if (isMobile) {
  gsap.from('.benefit-card', {
    opacity: 0,
    y: 30, // 2D fade-in, not 3D rotation
    duration: 0.5,
    stagger: 0.05,
  })

  // No spotlight, no magnetic pull, static organic shapes
}
```

---

**7. Accent Color System (Cyan vs Fuchsia)**

**Decision:** Agencies column uses cyan accent (briefingPalette.cyan.DEFAULT), Brands column uses fuchsia accent (briefingPalette.fuchsia.DEFAULT)

**Rationale:**
- Tech Spec explicitly requires split accent color system (AC-2.18)
- Cyan = tech/intelligence (agencies use Briefing Engine as productivity tool)
- Fuchsia = creative energy (brands use Briefing Engine for campaign launches)
- Reinforces left/right column distinction (visual separation)
- Cursor spotlight interpolates between these colors (cyan left → fuchsia right)

**Color Application:**
- Organic card glow: `glowColor={accentColor}`
- Card borders: `border: 1px solid ${accentColor}30`
- Section headers: Underline or badge with accent color
- Feature pills: Alternating cyan/fuchsia borders (pills 1, 3 = cyan; pill 2 = fuchsia)

**Contrast Verification:**
- Cyan (#0891B2) on dark indigo background: 4.8:1 ratio (WCAG AA compliant)
- Fuchsia (#C026D3) on dark indigo background: 5.2:1 ratio (WCAG AA compliant)

### Risk Mitigation

**Risk 1: Dual Magnetic Pull Performance on Mid-Range Devices**

- **Likelihood:** Medium (two simultaneous useMagneticPull instances may exceed budget)
- **Impact:** Medium (janky magnetic pull undermines premium feel)
- **Mitigation:**
  - Share throttled mousemove listener between both buttons (single 60fps listener, not two)
  - Test on mid-range Android devices (not just iPhone)
  - Implement performance monitor: disable magnetic pull if <30fps
  - Mobile: No magnetic pull (static buttons, standard hover states)
  - Tablet: No magnetic pull (safe performance margin)
- **Rollback:** Disable magnetic pull, keep standard button hover effects

**Shared Mousemove Listener Implementation:**
```typescript
// Single throttled listener for both buttons (more efficient)
const handleMouseMove = gsap.utils.throttle((e: MouseEvent) => {
  updatePrimaryButton(e)
  updateSecondaryButton(e)
}, 16) // 60fps
```

---

**Risk 2: Cursor Spotlight Too Subtle or Too Extreme**

- **Likelihood:** Low (15% opacity radial-gradient should be balanced)
- **Impact:** Low (spotlight is enhancement, not critical feature)
- **Mitigation:**
  - Test with non-technical users for visibility
  - Adjust opacity range: 15% → 20% if too subtle
  - Adjust radius: 600px → 800px for larger spotlight area
  - Ensure color transitions clearly visible (cyan → fuchsia)
  - Desktop only (no mobile confusion)
- **Rollback:** Remove spotlight, keep static background gradient

**Fallback Spotlight Config:**
```typescript
// If too subtle, increase opacity and radius
background: `radial-gradient(circle 800px at ${x}% ${y}%, ${color}20, transparent 70%)`
```

---

**Risk 3: 3D Rotation Feels Gimmicky or Distracting**

- **Likelihood:** Low (3D rotation validated in Story 2.2, well-received)
- **Impact:** Medium (could detract from value props messaging if too flashy)
- **Mitigation:**
  - Use smooth deceleration (CRE8TIVE_EASINGS.organic / power4.out, not elastic bounce)
  - Moderate duration (0.8s, not too fast)
  - Stagger ensures only one card rotating at a time (0.15s stagger)
  - ScrollTrigger: `toggleActions: 'play none none reverse'` (rotates once on enter, doesn't loop)
  - Test with non-technical users for "distracting" feedback
- **Rollback:** Fallback to 2D fade-in (opacity + y translate)

**Fallback Animation:**
```typescript
// If 3D rotation too distracting, use 2D fade-in
gsap.from('.benefit-card', {
  opacity: 0,
  y: 50, // 2D fade-in from below
  duration: 0.8,
  ease: CRE8TIVE_EASINGS.organic,
  stagger: 0.15,
})
```

---

**Risk 4: Feature Pills Morphing Too Fast or Slow**

- **Likelihood:** Low (0.6s duration + 0.1s stagger is standard)
- **Impact:** Low (pills are decorative, not critical for conversion)
- **Mitigation:**
  - Duration: 0.6s per pill (moderate speed, not too fast)
  - Stagger: 0.1s between pills (clearly visible sequential reveal)
  - Elastic bounce adds visual interest (CRE8TIVE_EASINGS.spring)
  - Pills are small elements (low visual weight, even if timing off)
- **Rollback:** Remove morphing, use standard fade-in (opacity only)

---

**Risk 5: Copy Accuracy Errors (Mismatched COPY_IMPLEMENTATION_GUIDE)**

- **Likelihood:** Low (copy is straightforward, well-documented)
- **Impact:** High (incorrect value props messaging damages credibility)
- **Mitigation:**
  - Side-by-side comparison with COPY_IMPLEMENTATION_GUIDE.md during development
  - Manual QA: Read every benefit card copy word-for-word against guide
  - Automated test (future): Snapshot test of rendered text content
  - Content team review before deployment
- **Rollback:** Hot-fix deployment if copy errors found post-launch

---

**Risk 6: Organic Shape Morphing Distracts from Benefit Copy**

- **Likelihood:** Low (±4% morphing is subtle, not extreme)
- **Impact:** Medium (could reduce benefit copy comprehension)
- **Mitigation:**
  - Use very low morphing intensity: ±4% (3-5% range from spec)
  - Slow morphing loop: 8s duration (subtle breathing effect, not constant motion)
  - Test readability on both light and dark backgrounds
  - Morphing disabled on mobile (static shapes, better readability)
- **Rollback:** Disable morphing, keep static organic shapes

## Dev Agent Record

### Context Reference

- **Story Context XML:** [story-context-2.7.xml](../story-context-2.7.xml) (Generated: 2025-10-09T19:40:35)

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
