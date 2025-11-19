# Conversational AI GSAP Implementation Plan

This document outlines the plan to implement premium, high-performance GSAP animations for the `ConversationalAI` page components. The current Framer Motion implementation has been stripped to static initial states to allow for a clean GSAP integration.

## Goals
- **Cinematic Entrances:** Elements should reveal with staggering, physics-based timing.
- **Scroll-Linked Interactions:** Parallax effects and timeline scrubbing should feel direct and responsive.
- **"Sentient" Feel:** Continuous, organic motion (breathing, pulsing, scanning) even when the user is idle.
- **Performance:** Use `will-change`, `transform`, and `opacity` optimizations. Avoid layout thrashing.

## Architecture
We will use a custom hook `useConversationalGSAP` to encapsulate page-specific timeline logic, or component-level `useGSAP` hooks for isolated effects.

### 1. SentientHero
**Target:** `SentientHero.tsx`
- **Entrance:**
    - Staggered reveal of `tech-badge`, `hero-headline`, `hero-subhead`, `hero-cta`.
    - `hero-headline` splits or glitches in.
- **Interactive:**
    - **Mouse Parallax:** Use `gsap.quickTo` on the `neural-vertex-container` for buttery smooth tracking of `--mouse-x/y` CSS variables.
    - **Orbital Rings:** Rotate rings continuously, but vary speed based on mouse proximity (excite the system).
- **Audio Viz:**
    - Animate `freq-bar` heights randomly but rhythmically using `gsap.to(..., { stagger: ... })`.

### 2. AudioIntelligenceStream (The Feed)
**Target:** `AudioIntelligenceStream.tsx`
- **Scroll Trigger:**
    - Pin the section briefly? Or just standard scroll reveal.
    - Cards (`CallMonitorCard`) slide in from bottom with `stagger: 0.1`.
- **Live Elements:**
    - "Scanning Line" overlay should loop perfectly.
    - Waveform bars (`.flex-1.bg-emerald-500`) need a continuous `yoyo` tween for simulating voice activity.

### 3. HolographicVideo
**Target:** `HolographicVideo.tsx`
- **3D Scroll Effect:**
    - Use `ScrollTrigger` to modulate `rotateX` and `scale` of the video container.
    - Start flat (45deg) and stand up (0deg) as it enters viewport center.
    - Modulate `box-shadow` intensity to simulate "glowing" as it activates.

### 4. NeuralHive (Scale)
**Target:** `NeuralHive.tsx`
- **Entrance:**
    - `hive-copy` fades in from left.
    - `hive-visual` fades in from right.
- **Node Grid:**
    - **The "Pulse":** Select random subsets of `.node-module` and flash them brighter (`opacity: 0.8`, `background: rgba(...)`) to simulate data packet transfer. Use `gsap.utils.random` in a recurring loop.
    - **Gravity:** Optional - mouse movement near grid affects node scale/opacity slightly.

### 5. TacticalDemo (Live Ops)
**Target:** `TacticalDemo.tsx`
- **UI Reveal:**
    - Construct the UI borders (corner brackets) using `DrawSVG` (or simulated with scale/width tweens) to "draw" the interface onto the screen.
- **Mission Log:**
    - Staggered list entry for chapters.

### 6. ResonanceBrand
**Target:** `ResonanceBrand.tsx`
- **Waveform Synchronization:**
    - Animate the two circular waves.
    - Wave 1 (Brand): Stable, slow pulse.
    - Wave 2 (AI): Starts chaotic, then `gsap.to` into perfect sync with Wave 1 when the section is fully visible.

### 7. The Vault & Secure Uplink
**Target:** `TheVault.tsx`, `SecureUplink.tsx`
- **Vault Door:** Rotate the background rings slowly.
- **Cards:** Standard staggered reveal.

## Implementation Steps
1.  **Install/Verify:** Ensure `gsap` and `@gsap/react` are installed.
2.  **Hero First:** Implement `useGSAP` in `SentientHero` to prove the "mouse tracking" and "entrance" concepts.
3.  **Component by Component:** Move down the page, adding `useGSAP` blocks to each file.
4.  **Polish:** Tune easings (use `Expo.out` or custom varying curves for that "premium" feel).

## Key GSAP Plugins
- `ScrollTrigger`: Essential for all scroll-driven effects.
- `useGSAP`: React hook wrapper.
- `CustomEase`: (If available/needed) for specific motion curves.

Let's begin the implementation.
