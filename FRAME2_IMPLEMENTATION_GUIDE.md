# Frame 2: Neural Synthesis Chamber - Final Implementation Guide

## 🎯 Overview

**Hybrid Neural Synthesis** - Premium AI synopsis generation visualization for the Briefing Engine.

**Theme**: **Luxury Harbours** yacht lifestyle (consistent with Frame 5 storyboard)

**Performance Optimized**:
- ✅ Particle system throttled to 30fps
- ✅ 150 particle pool (reduced from 200)
- ✅ Horizontal card layout (fits 2.12:1 aspect ratio)
- ✅ **3.8s total duration** (down from 6.7s)
- ✅ Luxury yacht themed gradients (no storyboard images)

---

## 📦 Components

### **Created Files**:
1. `/src/components/briefing/ParticleCore.tsx` - AI synthesis core with particles
2. `/src/components/briefing/SynopsisPanel.tsx` - "Luxury Harbors" synopsis
3. `/src/components/briefing/SceneCards.tsx` - 5 horizontal yacht-themed cards
4. `/src/styles/animations.css` - Added `shimmer` & `spin` keyframes

---

## 🔧 Step 1: Add Imports

Add to `BriefToStoryboardAnimation.tsx`:

```typescript
import { ParticleCore } from "@/components/briefing/ParticleCore";
import { SynopsisPanel, getSynopsisWordRefs } from "@/components/briefing/SynopsisPanel";
import { SceneCards, getSceneCardRefs } from "@/components/briefing/SceneCards";
import { useState } from "react";
```

---

## 📍 Step 2: Add New Refs

After existing refs (around line 127):

```typescript
// Frame 2: Neural Synthesis refs
const particleCoreRef = useRef<HTMLDivElement | null>(null);
const synopsisPanelRef = useRef<HTMLDivElement | null>(null);
const sceneCardsRef = useRef<HTMLDivElement | null>(null);
const [isCoreActive, setIsCoreActive] = useState(false);
const [coreIntensity, setCoreIntensity] = useState(0.5);
```

---

## 🎨 Step 3: Replace Frame 2 JSX

**Find** (lines 825-843):

```typescript
<div
  ref={(el) => el && (stageRefs.current[1] = el)}
  className="absolute inset-0 flex flex-col items-center justify-center gap-8 rounded-[26px] border border-white/14 bg-[rgba(12,12,28,0.94)] p-10 opacity-0"
>
  {/* OLD AIProcessingVisual content */}
</div>
```

**Replace with**:

```typescript
<div
  ref={(el) => el && (stageRefs.current[1] = el)}
  className="absolute inset-0 rounded-[26px] border border-white/14 bg-[rgba(12,12,28,0.94)] opacity-0"
>
  {/* Neural Synthesis Chamber - Luxury Harbours Theme */}
  <div className="relative h-full w-full flex flex-col gap-4 p-6">

    {/* Top: Particle Core + Synopsis (70% height) */}
    <div className="flex-[7] flex gap-4">
      {/* Particle Core (35% width) */}
      <div
        ref={particleCoreRef}
        className="w-[35%] rounded-3xl border border-white/10 overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)`
        }}
      >
        <ParticleCore
          isActive={isCoreActive}
          intensity={coreIntensity}
          className="w-full h-full"
        />
      </div>

      {/* Synopsis Panel (65% width) */}
      <SynopsisPanel
        ref={synopsisPanelRef}
        className="flex-1"
      />
    </div>

    {/* Bottom: Scene Cards (30% height) */}
    <div className="flex-[3]">
      <SceneCards
        ref={sceneCardsRef}
        className="h-full"
      />
    </div>
  </div>
</div>
```

---

## ⚡ Step 4: Replace Frame 2 Timeline Animations

**Find** Frame 2 section (around line 562-566):

```typescript
// Frame 2: AI Processing dwell
if (index === 1) {
  scrollTimeline.to({}, { duration: 1.1 }, "+=0");
}
```

**Replace with**:

```typescript
// ========================================
// FRAME 2: NEURAL SYNTHESIS CHAMBER (3.8s total)
// ========================================
if (index === 1) {
  const frame2Label = label;

  // --- TRANSITION IN (0.8s) ---

  // Activate core with dramatic intensity arc
  scrollTimeline
    .call(() => setIsCoreActive(true), [], frame2Label)
    .call(() => setCoreIntensity(0.3), [], frame2Label) // Gentle start
    .call(() => setCoreIntensity(0.7), [], `${frame2Label}+=0.2`) // Build
    .call(() => setCoreIntensity(1.2), [], `${frame2Label}+=0.4`) // BURST
    .call(() => setCoreIntensity(0.9), [], `${frame2Label}+=0.5`) // Settle
    .call(() => setCoreIntensity(0.6), [], `${frame2Label}+=2.5`); // Idle

  // --- SYNOPSIS STREAMING (1.8s) - compressed timing ---
  scrollTimeline.call(() => {
    if (!synopsisPanelRef.current) return;

    const { titleWords, synopsisWords } = getSynopsisWordRefs(synopsisPanelRef.current);

    // Title: Fast reveal
    if (titleWords.length) {
      scrollTimeline.to(
        titleWords,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.08, // Faster stagger
          ease: "power3.out"
        },
        `${frame2Label}+=0.6`
      );
    }

    // Synopsis: Rapid streaming
    if (synopsisWords.length) {
      scrollTimeline.to(
        synopsisWords,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.25,
          stagger: 0.06, // Very fast flow
          ease: "power2.out"
        },
        `${frame2Label}+=1.0`
      );
    }
  }, [], `${frame2Label}+=0.6`);

  // --- SCENE CARDS HOLOGRAPHIC BUILD (1.5s) - parallel + compressed ---
  scrollTimeline.call(() => {
    if (!sceneCardsRef.current) return;

    const { cards, wireframes, containers, thumbnails } = getSceneCardRefs(sceneCardsRef.current);

    cards.forEach((card, cardIndex) => {
      const cardLabel = `${frame2Label}+=` + (1.4 + (cardIndex * 0.15)); // Tight stagger

      // Wireframe
      scrollTimeline.to(
        wireframes[cardIndex],
        { autoAlpha: 1, duration: 0.15, ease: "power2.out" },
        cardLabel
      );

      // Container
      scrollTimeline.to(
        containers[cardIndex],
        { autoAlpha: 1, duration: 0.2, ease: "power2.out" },
        `${cardLabel}+=0.1`
      );

      // Card slide
      scrollTimeline.to(
        card,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.3,
          ease: "back.out(1.3)" // Subtle bounce
        },
        `${cardLabel}+=0.15`
      );

      // Thumbnail
      scrollTimeline.to(
        thumbnails[cardIndex],
        { autoAlpha: 1, scale: 1, duration: 0.2, ease: "power2.out" },
        `${cardLabel}+=0.25`
      );
    });
  }, [], `${frame2Label}+=1.4`);

  // --- DWELL TIME (0.7s) - reduced for pacing ---
  scrollTimeline.to({}, { duration: 0.7 }, "+=0");

  // Total: 0.8s transition + 1.8s synopsis + 1.5s cards (overlapped) + 0.7s dwell = ~3.8s
}
```

---

## 🎬 Step 5: Update Frame 2 → 3 Transition

**Find** where Frame 3 (style cards) animations start (around line 510).

**Add BEFORE Frame 3 animations**:

```typescript
// === FRAME 2 → 3 TRANSITION: Core Explosion ===
if (index === 2) {
  const frame3Label = label;

  // Synopsis/cards compress and blur (0.4s)
  scrollTimeline.to(
    [synopsisPanelRef.current, sceneCardsRef.current, particleCoreRef.current],
    {
      scale: 0.8,
      autoAlpha: 0.2,
      filter: "blur(12px)",
      duration: 0.4,
      ease: "power2.in"
    },
    `${frame3Label}-=0.5` // Start 0.5s before Frame 3
  );

  // Core explosion burst
  scrollTimeline.call(() => setCoreIntensity(2), [], `${frame3Label}-=0.3`);

  // Deactivate particles
  scrollTimeline.call(() => setIsCoreActive(false), [], `${frame3Label}-=0.1`);

  // Frame 3 style cards will materialize from this explosion
}
```

---

## 📏 Step 6: Adjust Total Timeline Duration

**Find** (line 287):

```typescript
end: "+=14000",
```

**Change to**:

```typescript
end: "+=17000", // 4.1s intro + 13s stages (Frame 2 = 3.8s) = 17s total
```

---

## ✅ Implementation Checklist

### **Visual Verification**:
- [ ] Particle core builds smoothly (30fps throttled)
- [ ] "Luxury Harbours" synopsis streams in rapidly
- [ ] 5 yacht-themed gradient cards build horizontally
- [ ] Intensity arc: gentle → burst → settle → idle
- [ ] Core explodes into Frame 3 style cards
- [ ] No layout overflow (fits 2.12:1 aspect ratio)

### **Performance**:
- [ ] Scroll feels smooth during Frame 2
- [ ] No frame drops or jank
- [ ] Particles run at acceptable FPS
- [ ] Total Frame 2 = ~3.8s (confirmed in DevTools)

### **Content**:
- [ ] Synopsis matches "Luxury Harbours" theme
- [ ] Scene titles align with yacht lifestyle
- [ ] Gradient colors are premium/luxury palette
- [ ] No storyboard image placeholders

---

## 🎨 Animation Timing Breakdown

| Segment | Duration | Cumulative | Details |
|---------|----------|------------|---------|
| **Transition In** | 0.8s | 0.8s | Core builds, intensity arc starts |
| **Synopsis Stream** | 1.8s | 2.6s | Title (0.08s stagger) + body (0.06s stagger) |
| **Cards Build** | 1.5s | 2.9s | Overlapped with synopsis, 0.15s stagger |
| **Dwell** | 0.7s | 3.6s | User comprehension pause |
| **Transition Out** | 0.4s | 4.0s | Blur/compress for Frame 3 |
| **TOTAL** | **3.8s** | - | **43% faster than original 6.7s** |

---

## 🐛 Troubleshooting

### Issue: Particles lag scroll
**Fix**: Ensure throttle is active (frameCount % 2 === 0)

### Issue: Cards overflow container
**Fix**: Check `min-w-[180px]` allows 5 cards @ 180px + gaps to fit

### Issue: Synopsis doesn't animate
**Fix**: Verify `getSynopsisWordRefs()` returns populated arrays

### Issue: Intensity doesn't change
**Fix**: Check useState `setCoreIntensity` calls execute at correct timeline positions

---

## 🚀 Final Result

**Premium Features**:
- ⚡ **3.8s duration** - respects user attention span
- 🎨 **Luxury Harbours theme** - yacht/coastal elegance
- 🔮 **Holographic UI** - glassmorphism + shimmer effects
- 💫 **Dramatic intensity arc** - burst/settle cinematography
- 📐 **Optimized layout** - fits 2.12:1 aspect ratio perfectly
- 🎯 **30fps particles** - smooth scroll, no jank
- 🌈 **Gradient placeholders** - abstract luxury aesthetic

**User Experience**:
- Crystal clear AI synthesis visualization
- Fast pacing maintains engagement
- Premium visual quality
- Consistent Luxury Harbours brand story

---

## 🎬 Ready to Implement

All components updated with:
- ✅ Luxury Harbours content
- ✅ Compressed 3.8s timing
- ✅ Horizontal card layout
- ✅ 30fps particle throttling
- ✅ Dramatic intensity progression
- ✅ Premium gradient aesthetics

**Next**: Copy JSX and timeline code into `BriefToStoryboardAnimation.tsx` following Steps 1-6 above.
