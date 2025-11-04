# Layout & Content Specification - Studios + Conversational AI Pages

**Date:** 2025-11-04
**Created By:** Sally (UX Designer)
**Purpose:** Comprehensive layout and copy specification for Codex to implement Epics 2 & 3
**Locked Foundations:** Premium Glassmorphism + Film Noir (Studios) + Abyssal Emerald (Conversational AI)

---

## Document Purpose

This specification provides **deterministic constraints** for Codex to implement Studios and Conversational AI page overhauls. All copy uses the **Trinity Framework** (User-Outcome Focus + Word Precision + Emotional Resonance). All layouts follow **premium design principles** with strict element limits to prevent over-decoration.

**Key Constraint:** Codex tends to add excessive text and decorative elements. This spec enforces word count limits and maximum element counts per section.

---

## Premium Layout Principles (Guard Rails for Codex)

### 1. Whitespace Dominance
**Rule:** 40% content, 60% breathing room
- Generous section padding (py-24 desktop, py-16 mobile)
- Internal spacing between elements (gap-8 minimum)
- No cramped layouts or dense information architecture
- **Why:** Premium brands (Apple, Stripe, Linear) prioritize space over density

### 2. One Focus Per Section
**Rule:** Each section has ONE primary element (video OR copy OR metric)
- Hero → Video is primary, copy is secondary
- Copy sections → Text is primary, icons are tertiary
- Video sections → Video is primary, title is secondary
- **Violation example:** Hero with competing video + large metric display + testimonial quote

### 3. Asymmetry Over Symmetry
**Rule:** Avoid centered, balanced layouts (feels static)
- Offset grids (60/40 splits, not 50/50)
- Staggered elements (not perfectly aligned)
- Dynamic compositions (diagonal flows, Z-patterns)
- **Exception:** CTAs can be centered (conversion pattern)

### 4. Maximum 2-3 Visual Elements Per Section
**Rule:** Strict element counting to prevent decoration overload
- **Visual elements include:** Icons, graphics, metrics, badges, decorative shapes
- **Text is NOT counted:** Headlines, body copy, captions
- **Videos count as 1 element** (even if multiple videos in gallery)
- **Example:** Copy section can have: body text + 2 icons + 1 metric = 3 elements (MAXIMUM)

### 5. Copy Restraint (Word Count Limits)
**Rule:** Modern premium B2B favors extreme brevity
- **Headlines:** 3-7 words (max 10)
- **Subheads:** 15-25 words (max 30)
- **Body copy:** 60-100 words per section (max 120)
- **Why:** Anthropic, OpenAI average 60-80 words per section, not 150-200

### 6. Color Palette Discipline
**Rule:** Use locked palettes precisely (no additions)
- **Studios:** Film Noir Gradient (5 colors only)
- **Conversational AI:** Abyssal Emerald (5 colors only)
- **No random accent colors** (cyan glow effects, purple highlights unless palette-approved)

### 7. Animation Space Requirements
**Rule:** GSAP animations need room to breathe
- Minimum 200px vertical space between animated sections (prevents overlap)
- No pinned sections on mobile (< 768px)
- GPU-accelerated properties only (x, y, scale, opacity, rotation)

---

## Layout Pattern Library (5 Reusable Templates)

### Pattern 1: Hero Pattern (Video Background)

**Structure:**
```
┌──────────────────────────────────────┐
│  [Video Background - autoplay loop]  │
│  ┌────────────────────────────────┐  │
│  │ Overlay (gradient + vignette)  │  │
│  │                                │  │
│  │  H1: [5-7 words]               │  │
│  │  Subhead: [15-25 words]        │  │
│  │                                │  │
│  │  [Primary CTA] [Secondary CTA] │  │
│  │                                │  │
│  │  [Trust Badge/Metric]          │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

**Specifications:**
- **Video:** Vimeo autoplay loop, muted, playsInline
- **Overlay:** Multi-layer (black/40 + gradient mesh + vignette)
- **Copy positioning:** Left-aligned, offset (not centered)
- **Max elements:** 3 (copy block + 2 CTAs + 1 trust badge = 4 total, trust badge optional)
- **Mobile:** Static fallback image (bandwidth consideration)

**Copy Constraints:**
- H1: 5-7 words, outcome-driven (Trinity: User-Outcome Focus)
- Subhead: 15-25 words, outcome + proof + pain/aspiration (Trinity: all 3)
- CTA buttons: Action verbs ("Book Demo", "See Work", "Start Brief")

**Accessibility:**
- ARIA label for video background
- Focus-visible states on CTAs
- prefers-reduced-motion: disable parallax, fade-in only

---

### Pattern 2: Copy-Focused Pattern (Minimal Decoration)

**Structure:**
```
┌──────────────────────────────────────┐
│  H2: [Section Title - 3-5 words]     │
│                                      │
│  ┌─────────────────┐                │
│  │ Body Copy Block │  [Icon 1]      │
│  │ (60-100 words)  │                │
│  │                 │  [Icon 2]      │
│  └─────────────────┘                │
│                                      │
│  [Metric Display] (optional)        │
└──────────────────────────────────────┘
```

**Specifications:**
- **Primary focus:** Text readability
- **Max elements:** 2-3 (2 icons + 1 metric = 3 total)
- **Icons:** Functional only (no decoration) - 32x32px, subtle color
- **Metrics:** If used, prominent but not competing with text

**Copy Constraints:**
- H2: 3-5 words, outcome or capability
- Body: 60-100 words (max 120), broken into 2-3 short paragraphs
- **Trinity Check:** User-Outcome Focus (YOU achieve), Word Precision (specific), Emotional Resonance (pain/aspiration)

**Layout Variations:**
- **Variation A:** Text left, icons right (60/40 split)
- **Variation B:** Text center, icons below (stacked mobile)
- **Variation C:** Text with inline metric callout

---

### Pattern 3: Video Showcase Pattern (Single Video)

**Structure:**
```
┌──────────────────────────────────────┐
│  H2: [Section Title]                 │
│  Subhead: [15-20 words]              │
│                                      │
│  ┌────────────────────────────────┐ │
│  │                                │ │
│  │   [Premium Glassmorphism       │ │
│  │    Video Placeholder]          │ │
│  │                                │ │
│  │   [Play Button + Glow]         │ │
│  │                                │ │
│  └────────────────────────────────┘ │
│                                      │
│  Caption: [10-15 words] (optional)   │
└──────────────────────────────────────┘
```

**Specifications:**
- **Video placeholder:** Locked Premium Glassmorphism component
- **Hover:** Netflix-style scale 1.05, blue glow on play button
- **Max elements:** 2 (video + caption = 2 total)
- **Aspect ratio:** 16:9 standard, 1920x1080 thumbnail

**Copy Constraints:**
- H2: 3-5 words, descriptive
- Subhead: 15-20 words, outcome or context
- Caption: 10-15 words, optional metadata (duration, key insight)

**Accessibility:**
- ARIA label for video purpose
- Keyboard navigation (Enter/Space to play)
- Click-to-play (no autoplay)

---

### Pattern 4: Portfolio Pattern (Video Grid)

**Structure:**
```
┌──────────────────────────────────────┐
│  H2: [Section Title]                 │
│                                      │
│  ┌──────┐  ┌──────┐  ┌──────┐       │
│  │Video1│  │Video2│  │Video3│       │
│  │ [▶]  │  │ [▶]  │  │ [▶]  │       │
│  └──────┘  └──────┘  └──────┘       │
│                                      │
│  ┌──────┐  ┌──────┐  ┌──────┐       │
│  │Video4│  │Video5│  │Video6│       │
│  │ [▶]  │  │ [▶]  │  │ [▶]  │       │
│  └──────┘  └──────┘  └──────┘       │
└──────────────────────────────────────┘
```

**Specifications:**
- **Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Gap:** gap-8 (2rem) between cards
- **Hover:** Scale 1.05, glassmorphism glow
- **Max elements:** Grid counts as 1 element (not 6)

**Copy Constraints:**
- H2: 3-5 words, portfolio label ("Our Work", "Recent Projects")
- Optional subhead: 15-20 words, outcome or context
- **No per-video captions** (clutters grid)

**GSAP Animation:**
- ScrollTrigger.batch() for staggered reveal
- Stagger: 0.1s between cards, center-outward pattern
- Ease: back.out for subtle bounce

---

### Pattern 5: CTA Pattern (Conversion-Optimized)

**Structure:**
```
┌──────────────────────────────────────┐
│                                      │
│       H2: [Outcome Headline]         │
│       Subhead: [Proof + Value]       │
│                                      │
│       [Primary CTA Button]           │
│       [Secondary CTA Link]           │
│                                      │
│       [Trust Signal] (optional)      │
│                                      │
└──────────────────────────────────────┘
```

**Specifications:**
- **Centered layout** (exception to asymmetry rule)
- **Max elements:** 3 (2 CTAs + 1 trust signal = 3 total)
- **Button hierarchy:** Primary (filled), Secondary (outline or text link)
- **Background:** Subtle gradient or glassmorphism card

**Copy Constraints:**
- H2: 5-7 words, outcome reinforcement ("Ready to Deploy Platform-Native Video?")
- Subhead: 15-25 words, proof point + urgency ("60% first-draft approval with AI-powered Studio partners")
- Primary CTA: Action verb ("Book Studio Call", "Start Your Brief")
- Secondary CTA: Lower commitment ("View Portfolio", "See Case Studies")

**Conversion Best Practices:**
- **Color contrast:** Primary CTA uses palette accent (gold/emerald)
- **Size hierarchy:** Primary 25% larger than secondary
- **Trust signal:** "Trusted since 2023" or "60% approval rate"

---

## Studios Page - Section Specifications

### Studios Section 1: Hero (Video Background)

**Layout Pattern:** Hero Pattern (video bg)

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** Lead with "YOU deploy platform-native video"
- **Word Precision:** "Platform-native video" (specific), "days" (measurable)
- **Emotional Resonance:** Pain avoided ("no agency juggling"), aspiration ("platform-perfect campaigns")

**Headline (5-7 words):**
"Deploy Platform-Native Video in Days"

**Subhead (20-25 words):**
"AI-powered Studio partners turn your vision into platform-perfect campaigns for YouTube, TikTok, Instagram, LinkedIn, X, and Facebook—no agency juggling."

**Primary CTA:** "Book Studio Call"
**Secondary CTA:** "View Our Work"

**Trust Signal (Optional):**
"60% first-draft approval rate" OR "Trusted by [X] brands since 2023"

**Visual Elements:**
- Video background (Vimeo placeholder: autoplay loop, hero asset)
- 2 CTA buttons (primary gold, secondary outline)
- 1 trust badge/metric (glassmorphism card, small)
- **Total:** 3 elements ✅

**Mobile Strategy:**
- Video → Static fallback image (bandwidth)
- CTAs stack vertically
- Trust badge below CTAs

**Color Palette:** Film Noir Gradient
- Background: Deep midnight gradient (#05060D → #13263B)
- Headline: Champagne Mist (#F5E7C7)
- Body: 80% white (#C7D2E0)
- Primary CTA: Spotlight Gold (#E1B341)
- Secondary CTA: Ion Cyan outline (#31C4FF)

**Accessibility:**
- ARIA label: "Studios service hero section showcasing platform-native video production"
- Focus-visible: Blue ring on CTAs
- prefers-reduced-motion: Video replaced with static image, no parallax

---

### Studios Section 2: Hybrid Model (Copy-Focused)

**Layout Pattern:** Copy-Focused Pattern

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU get AI speed + human creativity"
- **Word Precision:** "Hybrid model" (specific), "AI-powered Studio partners" (exact positioning)
- **Emotional Resonance:** Pain avoided ("no learning curve"), aspiration ("best of both worlds")

**Headline (4-5 words):**
"AI-Powered Studio Partners"

**Body Copy (80-100 words):**
"You get the speed of AI and the creativity of experienced Studio partners. Our hybrid model combines cinematography-trained AI with human oversight to deliver platform-native video in days, not weeks.

This isn't a self-serve tool. You brief us, we handle production end-to-end, and you deploy platform-perfect campaigns across YouTube (16:9), TikTok (9:16), Instagram (1:1/4:5), LinkedIn, X, and Facebook.

Result: 60% first-draft approval rate—because hybrid beats pure AI every time."

**Word Count:** 88 words ✅ (within 60-100 target)

**Visual Elements:**
- 2 icons: AI symbol + human/studio symbol (32x32px, subtle)
- 1 metric callout: "60% approval" (glassmorphism badge, inline or offset)
- **Total:** 3 elements ✅

**Layout:**
- Text left (60%), icons right (40%)
- Metric callout positioned near "60% approval" text mention

**Color Palette:** Film Noir
- Headline: Champagne Mist
- Body: Sea Glass (#C7D2E0)
- Icons: Ion Cyan subtle glow
- Metric: Spotlight Gold accent

**Mobile Strategy:**
- Text full width
- Icons stack below text (horizontal row, centered)
- Metric remains inline or moves below icons

---

### Studios Section 3: Full Marketing Video (Video Showcase)

**Layout Pattern:** Video Showcase Pattern (single video)

**Copy Strategy:**
- Brief intro to video context
- Emphasize outcome or transformation shown in video

**Headline (3-4 words):**
"See Studios in Action"

**Subhead (18-20 words):**
"Watch how we transform brand briefs into platform-native video campaigns that drive results across every major platform."

**Visual Elements:**
- Premium Glassmorphism video placeholder (locked component)
- Play button with blue glow (Netflix-style hover)
- **Total:** 1 element ✅

**Video Specs:**
- Vimeo embed (placeholder ID to be provided)
- Aspect ratio: 16:9
- Thumbnail: High-quality frame from video
- Click-to-play (no autoplay)
- Duration displayed: "3:42" or similar

**Color Palette:** Film Noir
- Glassmorphism overlay: rgba(255, 255, 255, 0.08)
- Play button: Blue glow (#1E88F7)
- Headline: Champagne Mist
- Subhead: Sea Glass

**Accessibility:**
- ARIA label: "Studios marketing video showcasing platform-native video production process"
- Keyboard navigation: Enter/Space to play
- Captions: Enabled by default (Vimeo setting)

**Mobile Strategy:**
- Video placeholder scales to full width
- Play button remains centered
- Maintains 16:9 aspect ratio

---

### Studios Section 4: Process/Timeline (Copy-Focused)

**Layout Pattern:** Copy-Focused Pattern

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU go from brief to deployment in days"
- **Word Precision:** "Days" (accurate timeline), specific platform formats
- **Emotional Resonance:** Speed advantage ("days vs weeks"), outcome clarity

**Headline (4-5 words):**
"Brief to Video in Days"

**Body Copy (75-90 words):**
"Here's how it works: You submit a brief, we handle production end-to-end, and you deploy platform-native video in days.

No project management chaos. No briefing back-and-forth. No multi-agency juggling.

We deliver video optimized for YouTube (16:9), TikTok (9:16), Instagram (1:1, 4:5, 16:9), LinkedIn, X, and Facebook—platform-perfect from day one.

Timeline: Days for video delivery (not minutes). Quality: 60% first-draft approval rate."

**Word Count:** 76 words ✅

**Visual Elements:**
- Timeline graphic (simple horizontal line with 3-4 milestones)
- Platform icons: YouTube, TikTok, Instagram, Facebook, LinkedIn, X (see Platform Icon System below)
- **Total:** 2 elements ✅

**Layout:**
- Text left (55%)
- Timeline graphic right (45%), vertical orientation
- Platform icons below text (horizontal row, 6 icons)

**Color Palette:** Film Noir
- Headline: Champagne Mist
- Body: Sea Glass
- Timeline: Ion Cyan accents for milestones
- Platform icons: Official brand colors with glassmorphism backgrounds

**Mobile Strategy:**
- Text full width
- Timeline graphic below text (horizontal orientation on mobile)
- Platform icons: 2 rows of 3 icons (stacked)

---

### Studios Section 5: "Our Work" Portfolio (Portfolio Pattern)

**Layout Pattern:** Portfolio Pattern (video grid)

**Copy Strategy:**
- Minimal copy, let work speak for itself
- Brief outcome or context only

**Headline (2-3 words):**
"Our Work"

**Subhead (15-18 words - optional):**
"Platform-native campaigns we've produced for brands across YouTube, TikTok, Instagram, LinkedIn, X, and Facebook."

**Visual Elements:**
- 6-video grid (reuse homepage "Our Work" videos)
- Premium Glassmorphism placeholders
- **Total:** 1 element (grid counts as single element) ✅

**Grid Layout:**
- Desktop: 3 columns × 2 rows (gap-8)
- Tablet: 2 columns × 3 rows (gap-6)
- Mobile: 1 column × 6 rows (gap-4)

**Hover State:**
- Scale 1.05 (Netflix-style)
- Glassmorphism glow intensifies
- Play button subtle scale pulse

**Video IDs (from homepage):**
1. 1051824336
2. 1055446411
3. 1051820049
4. 1051819670
5. 1052203361
6. 1052204241

**Color Palette:** Film Noir
- Glassmorphism: rgba(255, 255, 255, 0.08) with backdrop-blur
- Play button: Blue glow (#1E88F7)
- Headline: Champagne Mist

**GSAP Animation:**
- ScrollTrigger.batch() for staggered reveal
- Stagger: 0.1s, center-outward pattern
- Ease: back.out(1.4)

**Accessibility:**
- ARIA label per video: "Portfolio video [N] - [brief description]"
- Keyboard navigation: Tab through grid, Enter/Space to play

---

### Studios Section 6: Testimonials (Copy-Focused)

**Layout Pattern:** Copy-Focused Pattern

**Copy Strategy:**
- Social proof (existing testimonial content)
- Restyle to match Film Noir palette
- Minimal decoration

**Headline (2-3 words):**
"Client Results"

**Visual Elements:**
- Testimonial quote cards (glassmorphism backgrounds)
- Client logo/name (if available)
- **Total:** 2 elements (testimonial cards + logos) ✅

**Layout:**
- 2-3 testimonials (horizontal row on desktop, stack on mobile)
- Each testimonial: glassmorphism card with quote + attribution

**Color Palette:** Film Noir
- Card background: rgba(10, 17, 32, 0.82) with backdrop-blur
- Quote text: Sea Glass (#C7D2E0)
- Attribution: Champagne Mist (#F5E7C7)
- Accent: Spotlight Gold quotation marks or border

**Content:**
- Use existing testimonial text from current Studios page
- No rewriting needed (preserves authenticity)

**Mobile Strategy:**
- Testimonials stack vertically (1 column)
- Full-width cards with padding

---

### Studios Section 7: Platform Demos (Portfolio Pattern + Platform Icons)

**Layout Pattern:** Portfolio Pattern variation (side-by-side comparison)

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU deploy video across every major platform"
- **Word Precision:** Platform-specific formats (16:9, 9:16, 1:1)
- **Emotional Resonance:** Confidence ("platform-perfect"), capability ("every format")

**Headline (3-5 words):**
"Platform-Native, Every Format"

**Subhead (20-25 words):**
"YouTube (16:9), TikTok (9:16), Instagram (1:1, 4:5, 16:9), LinkedIn, X, Facebook—we deliver video optimized for how your audience watches."

**Visual Elements:**
- 3 video placeholders (side-by-side): YouTube 16:9, Instagram 1:1, TikTok 9:16
- Platform icons with official brand styling (see Platform Icon System below)
- **Total:** 2 elements (video grid + platform icons) ✅

**Layout:**
- Desktop: 3 videos horizontal (equal width, gap-8)
- Tablet: 3 videos horizontal (slightly smaller)
- Mobile: 3 videos vertical stack (1 column)

**Platform Icon Treatment:**
- Each video placeholder labeled with platform icon
- Icons: 48x48px, glassmorphism background, subtle glow
- Positioned: Top-left corner of each video placeholder (overlay)

**Video Placeholder Specs:**
- Aspect ratios: 16:9 (YouTube), 1:1 (Instagram), 9:16 (TikTok)
- Thumbnails: Placeholder graphics showing format
- Text overlay: "YouTube 16:9", "Instagram 1:1", "TikTok 9:16"

**Color Palette:** Film Noir
- Headline: Champagne Mist
- Subhead: Sea Glass
- Platform icons: Official brand colors (YouTube red, TikTok black, IG gradient)
- Glassmorphism: rgba(255, 255, 255, 0.08)

**Accessibility:**
- ARIA label per placeholder: "[Platform] [aspect ratio] video format demonstration"
- Keyboard navigation: Tab through placeholders

---

### Studios Section 8: CTA (CTA Pattern)

**Layout Pattern:** CTA Pattern (conversion-optimized)

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU start deploying platform-native video"
- **Word Precision:** "60% approval" (proof), "days" (timeline)
- **Emotional Resonance:** Urgency ("ready to"), outcome clarity ("deploy video")

**Headline (6-8 words):**
"Ready to Deploy Platform-Native Video?"

**Subhead (22-25 words):**
"Book a Studio call to discuss your campaign. We'll deliver platform-perfect video in days with 60% first-draft approval—no agency juggling."

**Primary CTA:** "Book Studio Call"
**Secondary CTA:** "View Case Studies"

**Trust Signal (Optional):**
"Trusted since 2023" (small text below CTAs)

**Visual Elements:**
- 2 CTA buttons
- 1 trust signal text (optional)
- **Total:** 2-3 elements ✅

**Layout:**
- Centered layout (exception to asymmetry rule)
- Glassmorphism card background (subtle)
- Generous padding (py-24)

**Color Palette:** Film Noir
- Background: Subtle gradient (midnight to indigo)
- Headline: Champagne Mist
- Subhead: Sea Glass
- Primary CTA: Spotlight Gold background, dark text
- Secondary CTA: Ion Cyan outline

**Accessibility:**
- Focus-visible: Blue ring on CTAs
- ARIA label: "Studios service call-to-action section"

---

## Conversational AI Page - Section Specifications

### Conversational AI Section 1: Hero (Video Background)

**Layout Pattern:** Hero Pattern (video bg)

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU scale support without headcount"
- **Word Precision:** "Scale support" (specific outcome), "without headcount" (measurable)
- **Emotional Resonance:** Pain avoided ("no hiring bottleneck"), aspiration ("24/7 capability")

**Headline (5-7 words):**
"Scale Support Without Headcount"

**Subhead (20-25 words):**
"AI-powered conversational agents handle inquiry volume 24/7, trained on your brand voice—no hiring bottleneck, no quality compromise."

**Primary CTA:** "Book Demo"
**Secondary CTA:** "See Live Demo"

**Trust Signal (Optional):**
"Enterprise-grade security" OR "Trained since 2023"

**Visual Elements:**
- Video background (Vimeo placeholder: autoplay loop, hero asset)
- 2 CTA buttons (primary emerald, secondary outline)
- 1 trust badge/metric (glassmorphism card, small)
- **Total:** 3 elements ✅

**Mobile Strategy:**
- Video → Static fallback image (bandwidth)
- CTAs stack vertically
- Trust badge below CTAs

**Color Palette:** Abyssal Emerald
- Background: Abyssal gradient (#04121E → #074C4E)
- Headline: Ice Blue (#E4F8FF)
- Body: Sea Glass (#B8D9DE)
- Primary CTA: Emerald Neon (#16F0A1)
- Secondary CTA: Glacier Teal outline (#0BCBFF)

**Accessibility:**
- ARIA label: "Conversational AI service hero section showcasing support scaling capability"
- Focus-visible: Blue ring on CTAs
- prefers-reduced-motion: Video replaced with static image, no parallax

---

### Conversational AI Section 2: Use Cases (Copy-Focused)

**Layout Pattern:** Copy-Focused Pattern

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU deploy AI agents for [use case]"
- **Word Precision:** Specific use cases (support, sales, onboarding)
- **Emotional Resonance:** Capability ("handle complex queries"), trust ("brand-accurate")

**Headline (3-4 words):**
"Built for Your Use Case"

**Body Copy (85-100 words):**
"Deploy conversational AI agents across customer support, sales qualification, and user onboarding—trained on your brand voice and product knowledge.

Our agents handle complex, multi-turn conversations with context awareness. They don't just answer FAQs—they understand customer intent, provide personalized recommendations, and escalate to humans when needed.

Security: Enterprise-grade encryption, SOC 2 Type II compliance, GDPR-ready.
Accuracy: Trained on your documentation, refined through feedback loops.
Scale: 24/7 availability without headcount expansion."

**Word Count:** 87 words ✅

**Visual Elements:**
- 3 use case icons (support headset, sales chart, onboarding checklist) - 32x32px
- **Total:** 3 elements ✅

**Layout:**
- Text left (60%)
- Icons right (40%), vertically stacked with labels

**Color Palette:** Abyssal Emerald
- Headline: Ice Blue
- Body: Sea Glass
- Icons: Glacier Teal subtle glow
- Labels: Sea Glass

**Mobile Strategy:**
- Text full width
- Icons stack below text (horizontal row, 3 icons)

---

### Conversational AI Section 3: Full Marketing Video (Video Showcase)

**Layout Pattern:** Video Showcase Pattern (single video)

**Copy Strategy:**
- Brief intro to video context
- Emphasize AI capability or transformation

**Headline (3-4 words):**
"See AI in Action"

**Subhead (18-20 words):**
"Watch how our conversational AI agents handle real customer inquiries with brand-accurate responses and seamless human escalation."

**Visual Elements:**
- Premium Glassmorphism video placeholder (locked component)
- Play button with emerald glow (hover state)
- **Total:** 1 element ✅

**Video Specs:**
- Vimeo embed (placeholder ID to be provided)
- Aspect ratio: 16:9
- Thumbnail: High-quality frame from video
- Click-to-play (no autoplay)
- Duration displayed: "2:15" or similar

**Color Palette:** Abyssal Emerald
- Glassmorphism overlay: rgba(255, 255, 255, 0.08)
- Play button: Emerald Neon glow (#16F0A1)
- Headline: Ice Blue
- Subhead: Sea Glass

**Accessibility:**
- ARIA label: "Conversational AI marketing video showcasing agent capabilities"
- Keyboard navigation: Enter/Space to play
- Captions: Enabled by default (Vimeo setting)

**Mobile Strategy:**
- Video placeholder scales to full width
- Play button remains centered
- Maintains 16:9 aspect ratio

---

### Conversational AI Section 4: Scale Without Headcount (Copy-Focused)

**Layout Pattern:** Copy-Focused Pattern

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU scale support capacity without hiring"
- **Word Precision:** "24/7 availability" (specific), "no headcount expansion" (measurable)
- **Emotional Resonance:** Pain avoided ("hiring bottleneck"), aspiration ("infinite capacity")

**Headline (4-5 words):**
"Scale Capacity, Not Headcount"

**Body Copy (80-95 words):**
"Handle 10x inquiry volume without hiring. Our conversational AI agents provide 24/7 support at infinite capacity—trained on your brand voice, product knowledge, and escalation protocols.

You set the tone, we deploy the AI. Agents learn from every conversation, improving accuracy through feedback loops and human oversight.

Cost: Fraction of human support team scaling.
Quality: Brand-accurate responses, context-aware conversations.
Availability: 24/7 coverage across all time zones, no breaks."

**Word Count:** 81 words ✅

**Visual Elements:**
- Scaling metric graphic (10x capacity visualization)
- 24/7 availability badge (clock icon + "24/7" text)
- **Total:** 2 elements ✅

**Layout:**
- Text left (60%)
- Metric graphic right (40%), large and prominent
- 24/7 badge positioned near text mention

**Color Palette:** Abyssal Emerald
- Headline: Ice Blue
- Body: Sea Glass
- Metric: Emerald Neon accent
- Badge: Glacier Teal glow

**Mobile Strategy:**
- Text full width
- Metric graphic below text (centered)
- Badge remains inline or moves below graphic

---

### Conversational AI Section 5: Live Demo (~10min Video)

**Layout Pattern:** Video Showcase Pattern (long-form video)

**Copy Strategy:**
- Emphasize depth ("unedited", "real interactions")
- Set expectation for length (~10min)

**Headline (3-4 words):**
"Live Demo: Real Interactions"

**Subhead (18-22 words):**
"Watch our AI agent handle 10 minutes of unedited customer inquiries—demonstrating context awareness, brand accuracy, and seamless escalation."

**Visual Elements:**
- Premium Glassmorphism video placeholder (locked component)
- Chapter markers (if video has chapters) - displayed as progress bar segments
- **Total:** 1-2 elements ✅

**Video Specs:**
- Vimeo embed (placeholder ID to be provided)
- Aspect ratio: 16:9
- Thumbnail: High-quality frame (preferably showing conversation interface)
- Click-to-play (no autoplay)
- Duration: ~10 minutes (displayed prominently)
- Chapter markers: Support for Vimeo chapters (if implemented)

**Chapter Strategy (Optional):**
- If video has chapters: Display chapter titles on hover/scrub
- Example chapters: "1. Initial Inquiry", "2. Product Recommendation", "3. Complex Question", "4. Escalation to Human"

**Color Palette:** Abyssal Emerald
- Glassmorphism overlay: rgba(255, 255, 255, 0.08)
- Play button: Emerald Neon glow
- Chapter markers: Glacier Teal segments
- Headline: Ice Blue
- Subhead: Sea Glass

**Accessibility:**
- ARIA label: "Conversational AI live demo video - 10-minute unedited demonstration"
- Keyboard navigation: Enter/Space to play, Arrow keys to skip (if chapters)
- Captions: Enabled by default (Vimeo setting)

**Mobile Strategy:**
- Video placeholder scales to full width
- Chapter markers remain visible (responsive progress bar)
- Maintains 16:9 aspect ratio

---

### Conversational AI Section 6: Brand Consistency (Copy-Focused)

**Layout Pattern:** Copy-Focused Pattern

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOUR brand voice in every response"
- **Word Precision:** "Trained on your documentation" (specific process)
- **Emotional Resonance:** Trust ("brand-accurate"), confidence ("consistent voice")

**Headline (3-5 words):**
"Your Brand, Every Response"

**Body Copy (75-90 words):**
"Our AI agents are trained on your brand guidelines, product documentation, and tone-of-voice standards. Every response reflects your brand personality—whether professional, friendly, technical, or playful.

Training process: You provide documentation, we fine-tune the model, you review outputs, we refine through feedback loops.

Quality control: Human-in-the-loop oversight, confidence thresholds for escalation, continuous learning from approved responses.

Result: Brand consistency at scale—every customer interaction sounds like your team."

**Word Count:** 78 words ✅

**Visual Elements:**
- Brand voice spectrum graphic (professional ← → playful axis)
- Training process icon (document → AI → feedback loop)
- **Total:** 2 elements ✅

**Layout:**
- Text left (60%)
- Graphics right (40%), stacked vertically

**Color Palette:** Abyssal Emerald
- Headline: Ice Blue
- Body: Sea Glass
- Graphics: Glacier Teal accents
- Axis labels: Sea Glass

**Mobile Strategy:**
- Text full width
- Graphics stack below text (centered)

---

### Conversational AI Section 7: Enterprise Features (Copy-Focused)

**Layout Pattern:** Copy-Focused Pattern

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU deploy with enterprise-grade security"
- **Word Precision:** "SOC 2 Type II" (specific compliance), "GDPR-ready" (measurable standard)
- **Emotional Resonance:** Trust ("enterprise-grade"), confidence ("battle-tested")

**Headline (3-4 words):**
"Enterprise-Grade Security"

**Body Copy (80-95 words):**
"Deploy conversational AI with confidence: SOC 2 Type II compliant, GDPR-ready, HIPAA-compatible architecture. Your data never trains public models—everything stays in your secure environment.

Security features: End-to-end encryption, role-based access control, audit logs for every conversation, data residency options (US, EU, custom).

Integrations: Salesforce, HubSpot, Zendesk, Intercom, Slack, Microsoft Teams, custom APIs.

Support: Dedicated account manager, 99.9% uptime SLA, 24/7 technical support, quarterly business reviews."

**Word Count:** 82 words ✅

**Visual Elements:**
- Security badges: SOC 2, GDPR, HIPAA icons (32x32px, official logos)
- Integration logos: Salesforce, HubSpot, Zendesk, etc. (see Integration Icon System below)
- **Total:** 2 elements (security badges + integration logos) ✅

**Layout:**
- Text center (full width)
- Security badges below text (horizontal row, 3 badges)
- Integration logos below badges (horizontal row, 6-8 logos)

**Color Palette:** Abyssal Emerald
- Headline: Ice Blue
- Body: Sea Glass
- Badges: Official brand colors with glassmorphism backgrounds
- Integration logos: Grayscale with emerald glow on hover

**Mobile Strategy:**
- Text full width
- Badges: 3 badges horizontal (or 2 rows if needed)
- Integration logos: 2 rows of 4 logos (stacked)

---

### Conversational AI Section 8: CTA (CTA Pattern)

**Layout Pattern:** CTA Pattern (conversion-optimized)

**Copy Strategy (Trinity Framework):**
- **User-Outcome Focus:** "YOU start scaling support today"
- **Word Precision:** "24/7 capability" (specific), "enterprise-grade" (measurable)
- **Emotional Resonance:** Urgency ("ready to"), outcome clarity ("scale support")

**Headline (6-8 words):**
"Ready to Scale Support Without Headcount?"

**Subhead (22-25 words):**
"Book a demo to explore your use case. We'll deploy enterprise-grade conversational AI agents trained on your brand—24/7 availability without hiring."

**Primary CTA:** "Book Demo"
**Secondary CTA:** "See Pricing"

**Trust Signal (Optional):**
"SOC 2 Type II Compliant" OR "Trusted since 2023"

**Visual Elements:**
- 2 CTA buttons
- 1 trust signal text (optional)
- **Total:** 2-3 elements ✅

**Layout:**
- Centered layout (exception to asymmetry rule)
- Glassmorphism card background (subtle)
- Generous padding (py-24)

**Color Palette:** Abyssal Emerald
- Background: Subtle gradient (abyss to emerald tint)
- Headline: Ice Blue
- Subhead: Sea Glass
- Primary CTA: Emerald Neon background, dark text
- Secondary CTA: Glacier Teal outline

**Accessibility:**
- Focus-visible: Blue ring on CTAs
- ARIA label: "Conversational AI service call-to-action section"

---

## Platform Icon System (Official Brand Icons)

### Supported Platforms

**Studios Page Uses:**
- YouTube
- TikTok
- Instagram
- Facebook
- LinkedIn
- X (formerly Twitter)

**Conversational AI Page Uses:**
- Salesforce
- HubSpot
- Zendesk
- Intercom
- Slack
- Microsoft Teams

### Icon Specifications

**Size:**
- Base size: 48x48px (desktop)
- Tablet: 40x40px
- Mobile: 36x36px

**Style Treatment:**
- **Background:** Glassmorphism card (backdrop-blur: 8px, bg: rgba(255,255,255,0.05))
- **Border:** 1px solid rgba(255,255,255,0.1)
- **Padding:** 8px inside glassmorphism card (icon itself is 32x32px inside 48x48px card)
- **Border radius:** rounded-lg (8px)

**Hover State:**
- Scale: 1.05
- Glow: 0 0 16px [platform-brand-color] (e.g., YouTube red, TikTok black, IG gradient)
- Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

**Official Brand Colors:**

| Platform | Primary Color | Hex Code | Glow on Hover |
|----------|--------------|----------|---------------|
| YouTube | Red | #FF0000 | 0 0 16px rgba(255,0,0,0.6) |
| TikTok | Black/White | #000000 / #FFFFFF | 0 0 16px rgba(255,255,255,0.4) |
| Instagram | Gradient | #E1306C → #FD1D1D → #F77737 | 0 0 16px rgba(225,48,108,0.6) |
| Facebook | Blue | #1877F2 | 0 0 16px rgba(24,119,242,0.6) |
| LinkedIn | Blue | #0A66C2 | 0 0 16px rgba(10,102,194,0.6) |
| X (Twitter) | Black | #000000 | 0 0 16px rgba(255,255,255,0.4) |
| Salesforce | Blue | #00A1E0 | 0 0 16px rgba(0,161,224,0.6) |
| HubSpot | Orange | #FF7A59 | 0 0 16px rgba(255,122,89,0.6) |
| Zendesk | Green | #03363D | 0 0 16px rgba(3,54,61,0.6) |
| Intercom | Blue | #1F8DED | 0 0 16px rgba(31,141,237,0.6) |
| Slack | Purple/Multi | #4A154B | 0 0 16px rgba(74,21,75,0.6) |
| Microsoft Teams | Blue | #5059C9 | 0 0 16px rgba(80,89,201,0.6) |

**Logo Assets:**
- Use official SVG logos from each platform's brand guidelines
- **Source:** [Platform] Brand Resources page (e.g., brand.youtube.com, brand.twitter.com)
- **Fallback:** If SVG unavailable, use PNG @2x resolution (96x96px for 48x48px display)

**Accessibility:**
- ARIA label per icon: "[Platform name] logo"
- Alt text: "[Platform] logo"
- Focus-visible: Blue ring (2px solid #1E88F7)

### Layout Patterns

**Horizontal Row (Desktop):**
```
[YouTube] [TikTok] [Instagram] [Facebook] [LinkedIn] [X]
```
- Gap: gap-4 (1rem)
- Justify: justify-center or justify-start

**Grid (Mobile):**
```
[YouTube] [TikTok] [Instagram]
[Facebook] [LinkedIn] [X]
```
- Columns: 3
- Gap: gap-3 (0.75rem)
- Justify: items-center

**In Context (Section 4 - Process/Timeline):**
- Position: Below body copy
- Label: "Deploy across all platforms:" (optional, 10-12 words)
- Icons: Horizontal row with glassmorphism backgrounds

**In Context (Section 7 - Platform Demos):**
- Position: Top-left corner of each video placeholder (overlay)
- Size: 40x40px (slightly smaller for overlay context)
- Background: Glassmorphism with higher opacity (rgba(255,255,255,0.12)) for contrast

---

## Copy Strategy (Trinity Framework Applied)

### Trinity Framework Quick Reference

**All Cre8tive AI copy must pass THREE dimensions:**

1. **User-Outcome Focus:** YOU achieve (not WE provide), specific outcomes
2. **Word Precision:** Measurable (60% approval, 10 min, platform-native), not vague
3. **Emotional Resonance:** Pain avoided + aspiration achieved

**If any dimension fails → REWRITE**

### Studios Copy Checklist

**User-Outcome Focus:**
- [ ] Lead with "YOU deploy platform-native video"
- [ ] Outcome clear: video for YouTube, TikTok, Instagram, etc.
- [ ] Minimal WE/Our language (context only)

**Word Precision:**
- [ ] "Platform-native" (specific capability)
- [ ] "Days" for video (accurate timeline, not minutes)
- [ ] "60% first-draft approval" (proof point)
- [ ] Hybrid model explicit ("AI-powered Studio partners")

**Emotional Resonance:**
- [ ] Pain avoided: "No agency juggling"
- [ ] Aspiration: "Platform-perfect campaigns"
- [ ] Tone: Humble mastery (confident, not arrogant)

**Accuracy Guardrails:**
- [ ] Timeline: Days for video (NEVER minutes)
- [ ] Capability: Studios delivers final video
- [ ] 60% approval: Studios only (proof point)
- [ ] Platforms: YouTube, TikTok, Instagram, LinkedIn, X, Facebook

### Conversational AI Copy Checklist

**User-Outcome Focus:**
- [ ] Lead with "YOU scale support without headcount"
- [ ] Outcome clear: 24/7 capacity without hiring
- [ ] Minimal WE/Our language (context only)

**Word Precision:**
- [ ] "Scale support without headcount" (primary outcome)
- [ ] "24/7 availability" (specific capability)
- [ ] "Enterprise-grade security" (measurable standard)
- [ ] "SOC 2 Type II", "GDPR-ready" (compliance proof)

**Emotional Resonance:**
- [ ] Pain avoided: "No hiring bottleneck"
- [ ] Aspiration: "Infinite capacity", "Brand-accurate responses"
- [ ] Tone: Enterprise trust (confident, professional)

**Accuracy Guardrails:**
- [ ] Primary outcome: Scale support (not video/storyboard)
- [ ] NO video outcomes (service separation)
- [ ] Capability: Conversational AI agents (not production content)
- [ ] Security: Enterprise-grade compliance (SOC 2, GDPR)

### Word Count Enforcement

**Per Section Type:**

| Section Type | Headline | Subhead | Body Copy | Total |
|--------------|----------|---------|-----------|-------|
| Hero | 5-7 words | 20-25 words | N/A | 25-32 words |
| Copy-Focused | 3-5 words | Optional 15-20 | 60-100 words | 78-125 words |
| Video Showcase | 3-4 words | 18-20 words | Optional 10-15 caption | 31-39 words |
| CTA | 6-8 words | 22-25 words | N/A | 28-33 words |

**Codex Constraint:** If Codex writes >120 words for any body copy section → FLAG for editing

---

## Mobile Responsive Strategy

### Breakpoints

- **Desktop:** 1024px+ (full experience)
- **Tablet:** 768px - 1023px (slightly condensed)
- **Mobile:** 375px - 767px (single column)

### Pattern Adaptations

**Hero Pattern (Mobile):**
- Video background → Static fallback image (bandwidth)
- Headline: Same size (responsive typography: text-4xl → text-3xl)
- CTAs: Stack vertically (w-full)
- Trust badge: Below CTAs

**Copy-Focused Pattern (Mobile):**
- Text: Full width (no side-by-side)
- Icons: Below text (horizontal row or 2×2 grid)
- Metrics: Inline or below icons

**Video Showcase Pattern (Mobile):**
- Video placeholder: Full width
- Aspect ratio: Maintains 16:9
- Play button: Same size (centered)

**Portfolio Pattern (Mobile):**
- Grid: 1 column (video cards stack vertically)
- Gap: Reduced to gap-4
- Hover: Tap to play (no hover state)

**CTA Pattern (Mobile):**
- Layout: Same (centered works on mobile)
- Buttons: Full width (w-full)
- Secondary CTA: Below primary (not side-by-side)

### Mobile Video Strategy (Locked Decision)

**Hero Backgrounds:**
- Desktop: Autoplay loop (Vimeo)
- Mobile: Static fallback image (bandwidth consideration)
- **Why:** Hero bg is aesthetic, not critical content

**Marketing/Demo Videos:**
- Desktop: Click-to-play (full experience)
- Mobile: Show placeholder, click-to-play (important content)
- **Why:** Marketing videos are critical conversion content

**Portfolio/Gallery Videos:**
- Desktop: Grid layout, hover previews
- Mobile: Vertical stack, tap to play
- **Why:** Portfolio showcases work (must remain visible)

**GSAP Animations (Mobile):**
- ScrollTrigger pinning: DISABLED on mobile (< 768px)
- Parallax: DISABLED (prefers-reduced-motion defaults on)
- Reveals: Simple fade-in only (no slide, scale, or complex)

---

## GSAP Animation Space Requirements

### Minimum Spacing Between Animated Sections

**Rule:** 200px vertical space minimum to prevent animation overlap

**Why:**
- ScrollTrigger animations trigger based on viewport position
- If sections too close, animations overlap/conflict
- Parallax effects need "travel distance" to be visible

**Application:**
- Section padding: py-24 (6rem = 96px × 2 = 192px) MINIMUM
- Add extra margin if section has pinning: mb-32 (128px additional)

### GPU-Accelerated Properties Only

**Rule:** Animate ONLY these properties (60fps guaranteed)
- `x` (translateX)
- `y` (translateY)
- `scale` (transform: scale)
- `rotation` (transform: rotate)
- `opacity`

**NEVER animate:** width, height, top, left, margin, padding (causes reflow/repaint)

### GSAP Pattern Applications

**Pattern 1: Smooth Page Load Sequence (Hero)**
- Hero elements stagger in: headline → subhead → CTAs → trust badge
- Stagger: 0.1s between elements
- Duration: 0.6s per element
- Ease: power4.out

**Pattern 2: Content Reveal on Scroll (Copy Sections)**
- Trigger: Section enters viewport (start: "top 80%")
- Animation: opacity 0 → 1, y: 50 → 0
- Duration: 0.6s
- Ease: power2.out

**Pattern 3: Batch Reveal (Portfolio Grid)**
- `ScrollTrigger.batch()` for uniform grids
- Stagger: 0.1s, center-outward pattern
- Animation: opacity 0 → 1, scale 0.9 → 1
- Ease: back.out(1.4) (subtle bounce)

**Pattern 4: Video + Text Parallax (Hero)**
- Video background: Slower scroll speed (yPercent: -20)
- Text overlay: Normal scroll speed
- Creates depth effect
- **Mobile:** DISABLED (prefers-reduced-motion)

**Pattern 5: Lazy-Loaded Video**
- Intersection Observer: rootMargin "100px"
- Trigger: 100px before video enters viewport
- Animation: Fade-in 0.5s after load
- Prevents choppy load-in

### prefers-reduced-motion Support

**Rule:** Respect user preference for reduced motion

**Implementation:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable GSAP animations
  gsap.set(elements, { opacity: 1, y: 0 }); // Set final state immediately
} else {
  // Run GSAP animations
  gsap.from(elements, { opacity: 0, y: 50, duration: 0.6, stagger: 0.1 });
}
```

**What Gets Disabled:**
- ScrollTrigger reveals (elements visible immediately)
- Parallax effects (no motion)
- Stagger animations (all elements appear together)
- Hover scale effects (no scale change)

**What Remains:**
- Layout (same structure)
- Color (same palette)
- Functionality (videos still play, CTAs still work)

---

## Visual Element Constraints (Codex Guard Rails)

### Maximum Element Counts Per Section

**Rule:** Enforce strict element limits to prevent over-decoration

| Section Type | Max Elements | What Counts | Example |
|--------------|--------------|-------------|---------|
| Hero | 3 | Video + CTAs + trust badge | Video bg + 2 CTAs + 1 badge = 3 ✅ |
| Copy-Focused | 3 | Icons + graphics + metrics | 2 icons + 1 metric = 3 ✅ |
| Video Showcase | 2 | Video + caption/graphic | Video + caption = 2 ✅ |
| Portfolio Grid | 1 | Entire grid counts as 1 | 6-video grid = 1 element ✅ |
| CTA | 3 | CTAs + trust signal | 2 CTAs + 1 trust text = 3 ✅ |

**What DOES NOT Count:**
- Text (headlines, subheads, body copy)
- Backgrounds (gradients, colors)
- Spacing (padding, margins)

**Violation Examples:**
- ❌ Hero with video + 2 CTAs + trust badge + testimonial quote + metric card = 5 elements (TOO MANY)
- ❌ Copy section with 4 icons + 2 metrics + decorative graphic = 7 elements (TOO MANY)
- ✅ Copy section with 2 icons + 1 metric = 3 elements (CORRECT)

### Icon Usage Rules

**When to Use Icons:**
- ✅ Functional indicators (platform logos, feature symbols)
- ✅ Navigation affordances (play button, download icon)
- ✅ Use case identifiers (support headset, sales chart, onboarding checklist)

**When NOT to Use Icons:**
- ❌ Pure decoration (random geometric shapes, sparkles, stars)
- ❌ Redundant with text (icon says "fast" + text says "fast")
- ❌ Unclear meaning (abstract symbols without labels)

**Icon Specifications:**
- Size: 32x32px (functional icons), 48x48px (platform logos)
- Style: Outline or minimal (not filled/heavy)
- Color: Palette accent (subtle, not competing with text)

### Metric Display Rules

**When to Show Metrics:**
- ✅ Proof points (60% approval, 10x capacity, 24/7 availability)
- ✅ Outcome clarity (days for delivery, minutes for storyboard)
- ✅ Trust signals (since 2023, SOC 2 Type II)

**When NOT to Show Metrics:**
- ❌ Vanity metrics (social followers, generic "trusted by 1000+")
- ❌ Metric overload (more than 2 metrics per section)
- ❌ Unverifiable claims (without context)

**Metric Specifications:**
- Display: Large number + small label (e.g., "60%" large, "approval" small)
- Position: Inline with text OR offset right (not centered alone)
- Background: Glassmorphism card (subtle) OR no background

### Decorative Element Prohibition

**NEVER Add These (Codex Temptation List):**
- ❌ Random geometric shapes (circles, triangles, lines floating around)
- ❌ Particle effects (unless Canvas-based for specific hero animation)
- ❌ Unnecessary gradients (one per section maximum)
- ❌ Sparkle effects, glows, or halos (unless on interactive elements like buttons)
- ❌ Decorative illustrations (abstract art, 3D renders without purpose)

**Why:** Premium design = restraint. Anthropic, OpenAI, Linear, Stripe minimize decoration.

---

## Codex Implementation Checklist

### Before Starting Implementation

**Codex must confirm:**
- [ ] Read entire layout specification (this document)
- [ ] Understand Trinity Framework (User-Outcome Focus + Word Precision + Emotional Resonance)
- [ ] Understand locked foundations (Premium Glassmorphism + Film Noir + Abyssal Emerald)
- [ ] Understand maximum element constraints (3 per section)
- [ ] Understand word count limits (60-100 body, 5-7 headline, 15-25 subhead)

### Per Section Implementation

**Codex must validate:**
- [ ] Layout pattern correctly applied (Hero/Copy/Video/Portfolio/CTA)
- [ ] Copy word counts within limits (no text walls)
- [ ] Element count ≤ maximum (count visual elements, not text)
- [ ] Color palette accurate (Film Noir for Studios, Abyssal Emerald for AI)
- [ ] Platform icons official (YouTube red, TikTok black, IG gradient, etc.)
- [ ] Trinity Framework passes (User-Outcome + Word Precision + Emotional Resonance)
- [ ] Mobile responsive (static hero fallback, stacked layouts)
- [ ] GSAP animation space (200px minimum between sections)
- [ ] Accessibility (ARIA labels, focus states, prefers-reduced-motion)

### Quality Gates

**Before presenting to Cameron:**
- [ ] All 8 Studios sections implemented
- [ ] All 8 Conversational AI sections implemented
- [ ] Word counts verified (no section exceeds limits)
- [ ] Element counts verified (no section exceeds 3 elements)
- [ ] Platform icons styled correctly (glassmorphism backgrounds, official colors)
- [ ] Mobile tested (hero fallbacks, stacked layouts)
- [ ] Copy reviewed by Claude (Trinity Framework validation)

---

## Architecture Document Handoff

### What Codex Should Create Next

**File:** `/docs/architecture-epics-2-3.md`

**Contents:**
1. **Component Architecture**
   - Component hierarchy (Hero → VideoShowcase → CopySection → CTA)
   - Reusable components (VideoPlaceholder, PlatformIcon, GlassmorphismCard)
   - Props/interfaces per component

2. **GSAP Animation Library**
   - 5 animation patterns with code examples
   - ScrollTrigger configurations
   - prefers-reduced-motion handling

3. **Video Integration Strategy**
   - Vimeo embed patterns (autoplay loop, click-to-play, chapter markers)
   - Lazy-loading implementation (Intersection Observer)
   - Mobile fallback strategy (static images for hero)

4. **Responsive Strategy**
   - Breakpoint definitions (375px, 768px, 1024px)
   - Pattern adaptations per breakpoint
   - Mobile-specific optimizations

5. **Performance Budget**
   - Bundle size target (<900kb total)
   - Lighthouse targets (80+ performance, 90+ accessibility)
   - GPU-accelerated animation constraints

6. **State Management** (if needed)
   - Video playback state
   - Animation trigger state
   - Form state (if CTAs have forms)

**Codex Input:**
- Use this layout specification as reference
- Apply technical decisions to component design
- Define interfaces that enforce constraints (word count props, element count limits)

---

## Success Criteria

### Layout Specification Complete When:
- ✅ All 8 Studios sections specified with copy/layout/elements
- ✅ All 8 Conversational AI sections specified with copy/layout/elements
- ✅ Trinity Framework applied to all copy
- ✅ Platform Icon System defined with official brand colors
- ✅ Element constraints enforced (max 3 per section)
- ✅ Word count limits documented (60-100 body, 5-7 headline)
- ✅ Mobile strategy defined (hero fallbacks, stacked layouts)
- ✅ GSAP animation space requirements documented

### Codex Implementation Complete When:
- ✅ Architecture document created (component hierarchy, GSAP patterns)
- ✅ All sections match specification (no deviation)
- ✅ Copy passes Trinity Framework validation (Claude review)
- ✅ Element counts verified (≤3 per section)
- ✅ Word counts verified (within limits)
- ✅ Platform icons styled correctly (official colors, glassmorphism)
- ✅ Mobile tested (responsive, hero fallbacks)
- ✅ Accessibility tested (ARIA, focus, prefers-reduced-motion)

### Cameron Approval When:
- ✅ Visual quality matches premium standards (Anthropic, OpenAI, Linear)
- ✅ Copy resonates (Trinity Framework passes subjective test)
- ✅ No decoration overload (Codex restraint successful)
- ✅ Platform icons look professional (official brand treatment)
- ✅ Mobile experience smooth (no jank, fallbacks work)

---

## Document Status

**Version:** 1.0
**Date:** 2025-11-04
**Author:** Sally (UX Designer)
**Status:** COMPLETE - Ready for Codex Implementation

**Next Steps:**
1. ✅ Layout specification complete (this document)
2. ⏳ Codex creates architecture document
3. ⏳ Codex implements Studios page sections
4. ⏳ Claude reviews copy (Trinity Framework validation)
5. ⏳ Codex implements Conversational AI page sections
6. ⏳ Claude reviews copy (Trinity Framework validation)
7. ⏳ Cameron approval (visual + copy + mobile)
8. ⏳ Production deployment

---

**End of Layout Specification**

**Codex:** Use this document as your implementation bible. Every section, every word count, every element limit is intentional. Restraint = Premium. 🎨✨
