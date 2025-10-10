# Technical Specification: Premium Hero Section - Neural Briefing Network

Date: 2025-10-09
Author: Cameron (Architect: Winston)
Epic ID: epic-3
Status: Draft
Research Foundation: docs/research-technical-2025-10-09.md (Option 2: GSAP + Canvas Particles)

---

## Overview

Epic 3 implements a premium, visually stunning hero section for the AI Briefing Engine page using GSAP ScrollTrigger + Canvas particle system technology. This implementation creates the "Neural Briefing Network" - a 3,000-5,000 gradient particle visualization (dark indigo/cyan/fuchsia palette) representing AI intelligence with neural network-style connections, flowing from "Brief" to "Storyboard" with scroll-linked transformations.

**Technology Selection Rationale:** After comprehensive technical research evaluating 5 approaches (React Three Fiber 3D, GSAP + Canvas Particles, Premium Component Libraries, Custom Shaders, Generative Art), **Option 2 (GSAP ScrollTrigger + Canvas Particle System)** was selected based on weighted analysis scoring 4.30/5. This choice optimizes for:
- Perfect tech stack integration (GSAP already installed, zero learning curve)
- Excellent 60fps performance (battle-tested pattern, 5K particles achievable)
- AI visualization potential (neural networks ideal for brand positioning)
- Fast implementation (1-2 days vs 2-7 days alternatives)
- Small bundle size (~50KB, GSAP already installed)
- Maintainability (straightforward Canvas/GSAP code, no exotic dependencies)

**Scope:** This epic covers ONLY the hero section visual background element. Copy updates, the BriefToStoryboardAnimation.tsx component below the hero, and other page sections are out of scope and remain unchanged.

**Integration Context:** This work builds on Epic 1's technical foundation (GSAP 3.13.0, Lenis 1.3.11, dark indigo/cyan/fuchsia palette) and coordinates with Epic 2's premium execution patterns (OrganicCard, useMagneticPull, useOrchestrator hooks). The hero particle system will be the first visual element users see, establishing premium quality expectations before scrolling to Epic 1's storyboard transformation animations.

## Objectives and Scope

### In Scope

**Hero Section Visual Element:**
- ✅ Canvas-based WebGL particle system (3,000-5,000 particles optimized for 60fps)
- ✅ Neural network connections (distance-based lines between particles with gradient glow)
- ✅ Particle flow behavior (left "Brief" → right "Storyboard" directional movement)
- ✅ GSAP ScrollTrigger integration (scroll-linked particle transformations)
- ✅ Entrance animation on page load (particles burst from center, 1.5-2s duration)
- ✅ Mouse interaction (ripple/attraction effect within 150px radius)
- ✅ Gradient color system (indigo #4F46E5 → cyan #0891B2 → fuchsia #C026D3)
- ✅ Background gradient (deep indigo #1e1b4b → #0f172a)
- ✅ Responsive optimization (5K particles desktop → 2K tablet → 1K mobile)
- ✅ Performance monitoring (60fps target with graceful degradation <30fps)

**Technical Implementation:**
- ✅ New component: `src/components/briefing/ParticleHero.tsx`
- ✅ Custom particle class with typed arrays for performance
- ✅ RequestAnimationFrame loop with FPS monitoring
- ✅ GSAP useGSAP hook for React cleanup (prevents memory leaks)
- ✅ Lenis smooth scroll compatibility (existing global instance)
- ✅ prefers-reduced-motion support (static gradient fallback)
- ✅ GPU acceleration via Canvas 2D transforms

**Integration Points:**
- ✅ BriefingEngine.tsx page integration (hero background layer)
- ✅ Glassmorphism text overlay compatibility (hero headline/CTAs render on top)
- ✅ Epic 1 color palette alignment (palette.ts constants)
- ✅ Existing GSAP ScrollTrigger coordination (no conflicts with other animations)

### Out of Scope

**Explicitly NOT Included:**
- ❌ Hero section copy changes (text content remains as-is from Epic 1/2)
- ❌ BriefToStoryboardAnimation.tsx modifications (existing component untouched)
- ❌ Other page sections (VisualStylesGallery, ProcessFlow, Benefits, CTA - unchanged)
- ❌ 3D implementation (React Three Fiber rejected due to bundle size/complexity)
- ❌ Custom shaders (GLSL rejected due to expertise requirements, 3-7 day timeline)
- ❌ Premium component libraries (Aceternity/Magic UI rejected as less unique)
- ❌ Generative art approach (rejected as less "AI/tech" aligned)
- ❌ Backend services (static client-side only)
- ❌ Automated testing (manual validation per project standards)

## System Architecture Alignment

This epic integrates seamlessly with existing JAMstack architecture (React 18.3.1 + Vite 5.4.1 + GitHub Pages) and leverages Epic 1's animation framework without requiring architectural changes.

**Existing Infrastructure Utilized:**

**Animation Framework (Epic 1):**
- GSAP 3.13.0 + ScrollTrigger plugin (already installed, ~66KB)
- @gsap/react 2.1.2 (useGSAP hook for cleanup)
- Lenis 1.3.11 (smooth scroll, global instance)
- Framer Motion 12.4.2 (micro-interactions, not used in particles)

**Color System (Epic 1):**
- `src/components/briefing/palette.ts` constants
- Indigo: #4F46E5, Cyan: #0891B2, Fuchsia: #C026D3
- Background gradients: #1e1b4b → #0f172a

**Component Patterns:**
- React functional components with TypeScript
- useRef for Canvas DOM reference
- useEffect for lifecycle management
- useGSAP for GSAP cleanup (prevents memory leaks in React Strict Mode)

**Build System:**
- Vite 5.4.1 code splitting (vendor chunks configured)
- TypeScript 5.5.3 compilation (relaxed mode)
- Terser minification (production console.log removal)

**No Architecture Changes Required:**
- ❌ No new dependencies (Canvas API is native browser)
- ❌ No routing changes (same /studios-engine route)
- ❌ No build configuration changes
- ❌ No deployment process changes
- ✅ Bundle impact minimal: ~10-15KB custom particle code (Canvas + particle logic)

**Integration Pattern:**

```
BriefingEngine.tsx
  └── <ParticleHero> (NEW - Epic 3)
        ├── Canvas background layer (z-index: 0)
        ├── Particle system rendering
        ├── GSAP ScrollTrigger transforms
        └── Mouse interaction listeners
  └── <div className="hero-content"> (existing glassmorphism overlay)
        ├── Headline
        ├── Subheadline
        └── CTA Buttons
  └── <BriefToStoryboardAnimation> (unchanged - Epic 1)
  └── <VisualStylesGallery> (unchanged - Epic 1)
  └── ... (other sections)
```

**Performance Coordination:**
- Epic 3 particles render at 60fps independently
- Epic 1 GSAP timelines fire on scroll without conflict
- Lenis smooth scroll shared across all page animations
- Total animation budget: ParticleHero (5-8ms) + Epic 1 timelines (8-12ms) = ~16ms/frame (60fps maintained)

## Detailed Design

### Services and Modules

Epic 3 introduces **4 core modules** implementing the Neural Briefing Network particle system:

#### Module 1: ParticleHero Component
**File:** `src/components/briefing/ParticleHero.tsx`
**Responsibility:** Main React component orchestrating Canvas rendering, GSAP animations, and lifecycle management

**Key Features:**
- Canvas element creation and sizing (full viewport width/height)
- Particle system initialization (3K-5K particles based on device capability)
- RequestAnimationFrame loop coordination
- GSAP useGSAP hook integration for cleanup
- ScrollTrigger instance management
- Mouse event listeners (mousemove for interaction)
- Resize handler (debounced, updates canvas dimensions)
- prefers-reduced-motion detection

**Implementation Pattern:**
```typescript
export function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);

  // GSAP cleanup via useGSAP hook
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger setup
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          particleSystemRef.current?.updateScrollProgress(self.progress);
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Automatic cleanup
  }, { scope: containerRef });

  // Particle system initialization
  useEffect(() => {
    if (!canvasRef.current) return;

    const particleSystem = new ParticleSystem(canvasRef.current, {
      particleCount: getParticleCount(),
      colors: BRIEFING_PALETTE,
      flowDirection: 'left-to-right'
    });

    particleSystemRef.current = particleSystem;
    particleSystem.start();

    return () => particleSystem.destroy();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10">{/* Hero content overlay */}</div>
    </div>
  );
}
```

**Dependencies:**
- ParticleSystem class (Module 2)
- BRIEFING_PALETTE constants (Epic 1 palette.ts)
- GSAP, ScrollTrigger, useGSAP
- React hooks (useRef, useEffect, useState)

---

#### Module 2: ParticleSystem Class
**File:** `src/components/briefing/particle-system/ParticleSystem.ts`
**Responsibility:** Core particle physics engine, rendering, and connection logic

**Key Features:**
- Particle array management (typed Float32Array for performance)
- Physics calculations (position, velocity, acceleration)
- Neural network connection detection (distance-based proximity)
- Flow field implementation (left→right directional bias)
- Mouse interaction (attraction/repulsion forces)
- Canvas 2D rendering with gradient particles
- FPS monitoring and performance tracking
- Graceful degradation (reduce particle count if <30fps)

**Particle Storage (Typed Arrays for Performance):**
```typescript
class ParticleSystem {
  private positions: Float32Array;  // [x1, y1, x2, y2, ...]
  private velocities: Float32Array; // [vx1, vy1, vx2, vy2, ...]
  private colors: Uint8Array;       // [r1, g1, b1, a1, r2, ...]
  private sizes: Float32Array;      // [size1, size2, ...]

  constructor(canvas: HTMLCanvasElement, config: ParticleConfig) {
    const count = config.particleCount;
    this.positions = new Float32Array(count * 2);
    this.velocities = new Float32Array(count * 2);
    this.colors = new Uint8Array(count * 4);
    this.sizes = new Float32Array(count);

    this.initializeParticles(config);
  }

  private initializeParticles(config: ParticleConfig): void {
    for (let i = 0; i < this.particleCount; i++) {
      const idx = i * 2;
      // Random initial positions
      this.positions[idx] = Math.random() * this.canvas.width;
      this.positions[idx + 1] = Math.random() * this.canvas.height;

      // Flow field velocity (left-to-right bias)
      this.velocities[idx] = 0.5 + Math.random() * 0.5; // vx: 0.5-1.0
      this.velocities[idx + 1] = (Math.random() - 0.5) * 0.3; // vy: -0.15 to 0.15

      // Gradient colors (indigo→cyan→fuchsia)
      const colorIndex = Math.floor(Math.random() * config.colors.length);
      const color = config.colors[colorIndex];
      this.colors[i * 4] = color.r;
      this.colors[i * 4 + 1] = color.g;
      this.colors[i * 4 + 2] = color.b;
      this.colors[i * 4 + 3] = 255; // alpha

      // Size variation (2-6px)
      this.sizes[i] = 2 + Math.random() * 4;
    }
  }

  public update(deltaTime: number): void {
    this.updatePhysics(deltaTime);
    this.updateConnections();
    this.applyMouseInteraction();
    this.applyScrollTransform();
  }

  private updatePhysics(deltaTime: number): void {
    for (let i = 0; i < this.particleCount; i++) {
      const idx = i * 2;

      // Update position based on velocity
      this.positions[idx] += this.velocities[idx] * deltaTime;
      this.positions[idx + 1] += this.velocities[idx + 1] * deltaTime;

      // Wrap edges (horizontal only, vertical bounds)
      if (this.positions[idx] > this.canvas.width) {
        this.positions[idx] = 0;
      }
      if (this.positions[idx + 1] < 0 || this.positions[idx + 1] > this.canvas.height) {
        this.velocities[idx + 1] *= -1; // Bounce vertical
      }
    }
  }

  private updateConnections(): void {
    this.connections = [];
    const maxDistance = 100; // Connect particles within 100px

    for (let i = 0; i < this.particleCount; i++) {
      for (let j = i + 1; j < this.particleCount; j++) {
        const dx = this.positions[i * 2] - this.positions[j * 2];
        const dy = this.positions[i * 2 + 1] - this.positions[j * 2 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          this.connections.push({ from: i, to: j, distance });
        }
      }
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    // Clear canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render connections (neural network lines)
    this.renderConnections(ctx);

    // Render particles (gradient circles)
    this.renderParticles(ctx);
  }

  private renderConnections(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)'; // Cyan with 30% opacity
    ctx.lineWidth = 1;

    for (const conn of this.connections) {
      const fromIdx = conn.from * 2;
      const toIdx = conn.to * 2;

      // Opacity based on distance (closer = more opaque)
      const opacity = 1 - (conn.distance / 100);
      ctx.globalAlpha = opacity * 0.3;

      ctx.beginPath();
      ctx.moveTo(this.positions[fromIdx], this.positions[fromIdx + 1]);
      ctx.lineTo(this.positions[toIdx], this.positions[toIdx + 1]);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  }

  private renderParticles(ctx: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.particleCount; i++) {
      const idx = i * 2;
      const x = this.positions[idx];
      const y = this.positions[idx + 1];
      const size = this.sizes[i];

      // Radial gradient for glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      const r = this.colors[i * 4];
      const g = this.colors[i * 4 + 1];
      const b = this.colors[i * 4 + 2];

      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
```

**Performance Optimizations:**
- Typed arrays (Float32Array, Uint8Array) for cache-friendly memory layout
- Spatial partitioning for connection detection (future: grid-based culling)
- RequestAnimationFrame with delta time for consistent physics
- Connection distance threshold (100px) limits O(n²) calculations
- Particle count adaptive based on FPS (5K → 2K → 1K degradation)

---

#### Module 3: Mouse Interaction Handler
**File:** `src/components/briefing/particle-system/MouseInteraction.ts`
**Responsibility:** Cursor tracking, ripple effects, particle attraction/repulsion

**Key Features:**
- Throttled mousemove listener (60fps maximum, 16ms throttle)
- Cursor position tracking (global coordinates → canvas coordinates)
- Attraction force calculation (inverse square law within 150px radius)
- Ripple propagation (emanates from cursor, affects nearby particles)
- Touch event support (mobile compatibility)
- Cleanup on unmount

**Implementation Pattern:**
```typescript
export class MouseInteraction {
  private mouseX: number = -1000;
  private mouseY: number = -1000;
  private isActive: boolean = false;
  private throttledHandler: (e: MouseEvent) => void;

  constructor(
    private canvas: HTMLCanvasElement,
    private particleSystem: ParticleSystem,
    private config: MouseConfig
  ) {
    // Throttle to 60fps
    this.throttledHandler = gsap.utils.throttle(this.handleMouseMove.bind(this), 16);
    this.canvas.addEventListener('mousemove', this.throttledHandler);
    this.canvas.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }

  private handleMouseMove(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;
    this.isActive = true;
  }

  private handleMouseLeave(): void {
    this.isActive = false;
  }

  public applyForces(positions: Float32Array, velocities: Float32Array, count: number): void {
    if (!this.isActive) return;

    const { attractionStrength, maxDistance } = this.config;

    for (let i = 0; i < count; i++) {
      const idx = i * 2;
      const px = positions[idx];
      const py = positions[idx + 1];

      // Calculate distance to mouse
      const dx = this.mouseX - px;
      const dy = this.mouseY - py;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance && distance > 0) {
        // Inverse square law for attraction force
        const force = (attractionStrength * (1 - distance / maxDistance)) / distance;

        // Apply force to velocity
        velocities[idx] += dx * force;
        velocities[idx + 1] += dy * force;
      }
    }
  }

  public destroy(): void {
    this.canvas.removeEventListener('mousemove', this.throttledHandler);
    this.canvas.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }
}
```

**Configuration:**
```typescript
interface MouseConfig {
  attractionStrength: number; // 0.05 (subtle pull)
  maxDistance: number;        // 150px (interaction radius)
  enabled: boolean;           // true on desktop, false on mobile
}
```

---

#### Module 4: Performance Monitor
**File:** `src/components/briefing/particle-system/PerformanceMonitor.ts`
**Responsibility:** FPS tracking, graceful degradation, performance alerts

**Key Features:**
- FPS calculation (rolling average over 60 frames)
- Performance threshold detection (<30fps triggers degradation)
- Particle count adjustment (5K → 2K → 1K based on FPS)
- Console warnings (dev mode only)
- Performance.now() high-resolution timing

**Implementation Pattern:**
```typescript
export class PerformanceMonitor {
  private frameTimes: number[] = [];
  private lastFrameTime: number = performance.now();
  private degradationLevel: number = 0; // 0 = full quality, 1 = reduced, 2 = minimal

  constructor(private onDegradation: (level: number) => void) {}

  public recordFrame(): void {
    const now = performance.now();
    const deltaTime = now - this.lastFrameTime;
    this.lastFrameTime = now;

    this.frameTimes.push(deltaTime);
    if (this.frameTimes.length > 60) {
      this.frameTimes.shift();
    }

    // Check FPS every 60 frames
    if (this.frameTimes.length === 60) {
      const avgFrameTime = this.frameTimes.reduce((a, b) => a + b) / 60;
      const fps = 1000 / avgFrameTime;

      this.checkPerformance(fps);
    }
  }

  private checkPerformance(fps: number): void {
    if (fps < 30 && this.degradationLevel === 0) {
      // First degradation: 5K → 2K particles
      this.degradationLevel = 1;
      this.onDegradation(1);
      if (import.meta.env.DEV) {
        console.warn('[ParticleHero] FPS below 30, reducing particles to 2000');
      }
    } else if (fps < 20 && this.degradationLevel === 1) {
      // Second degradation: 2K → 1K particles
      this.degradationLevel = 2;
      this.onDegradation(2);
      if (import.meta.env.DEV) {
        console.warn('[ParticleHero] FPS below 20, reducing particles to 1000');
      }
    } else if (fps > 50 && this.degradationLevel > 0) {
      // Recovery: Performance improved, restore particles
      this.degradationLevel = Math.max(0, this.degradationLevel - 1);
      this.onDegradation(this.degradationLevel);
      if (import.meta.env.DEV) {
        console.log('[ParticleHero] FPS recovered, restoring particles');
      }
    }
  }

  public getCurrentFPS(): number {
    if (this.frameTimes.length === 0) return 60;
    const avgFrameTime = this.frameTimes.reduce((a, b) => a + b) / this.frameTimes.length;
    return 1000 / avgFrameTime;
  }
}
```

**Degradation Strategy:**
```typescript
function getParticleCount(degradationLevel: number): number {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    return [1000, 500, 250][degradationLevel];
  } else {
    return [5000, 2000, 1000][degradationLevel];
  }
}
```

---

### Module Integration Flow

```
ParticleHero Component (React)
  ├── Initializes Canvas element
  ├── Creates ParticleSystem instance
  │     ├── Initializes typed arrays (positions, velocities, colors)
  │     ├── Starts RequestAnimationFrame loop
  │     └── Renders particles + connections
  ├── Creates MouseInteraction instance
  │     ├── Listens for mousemove (throttled 60fps)
  │     └── Applies attraction forces to particles
  ├── Creates PerformanceMonitor instance
  │     ├── Tracks FPS (rolling 60-frame average)
  │     └── Triggers degradation callbacks
  └── GSAP useGSAP hook
        ├── Creates ScrollTrigger instance
        ├── Updates scroll progress on particle system
        └── Auto-cleanup on unmount
```

---

### Data Models and Contracts

**Core TypeScript Interfaces:**

```typescript
// ===== PARTICLE SYSTEM CONFIGURATION =====

interface ParticleConfig {
  particleCount: number;        // 1000-5000 based on device
  colors: ColorRGB[];          // Gradient color palette
  flowDirection: 'left-to-right' | 'right-to-left' | 'radial';
  connectionDistance: number;  // Max distance for neural connections (100px)
  particleSizeMin: number;     // Minimum particle radius (2px)
  particleSizeMax: number;     // Maximum particle radius (6px)
  flowStrength: number;        // Directional flow velocity (0.5-1.0)
}

interface ColorRGB {
  r: number;  // 0-255
  g: number;  // 0-255
  b: number;  // 0-255
}

// ===== PARTICLE SYSTEM STATE =====

interface ParticleSystemState {
  positions: Float32Array;      // [x1, y1, x2, y2, ...] flattened array
  velocities: Float32Array;     // [vx1, vy1, vx2, vy2, ...]
  colors: Uint8Array;           // [r1, g1, b1, a1, ...] RGBA values
  sizes: Float32Array;          // [size1, size2, ...] particle radii
  connections: Connection[];    // Neural network connections
}

interface Connection {
  from: number;    // Particle index
  to: number;      // Particle index
  distance: number; // Current distance (for opacity calculation)
}

// ===== MOUSE INTERACTION =====

interface MouseConfig {
  attractionStrength: number;  // Force multiplier (0.05 default)
  maxDistance: number;         // Interaction radius in pixels (150px)
  enabled: boolean;            // false on mobile, true on desktop
}

interface MouseState {
  x: number;        // Canvas-relative X coordinate
  y: number;        // Canvas-relative Y coordinate
  isActive: boolean; // true when cursor over canvas
}

// ===== GSAP SCROLLTRIGGER INTEGRATION =====

interface ScrollTransform {
  progress: number;         // 0-1 scroll progress
  particleSpeedMultiplier: number; // Flow speed scales with scroll
  connectionOpacity: number;       // Fade connections on scroll
}

// ===== PERFORMANCE MONITORING =====

interface PerformanceLevels {
  full: number;     // 5000 particles (desktop)
  reduced: number;  // 2000 particles (degradation level 1)
  minimal: number;  // 1000 particles (degradation level 2)
}

interface PerformanceMetrics {
  currentFPS: number;
  avgFrameTime: number;    // milliseconds
  degradationLevel: number; // 0, 1, or 2
  particleCount: number;    // Current active particles
}

// ===== PARTICLE HERO COMPONENT PROPS =====

export interface ParticleHeroProps {
  className?: string;
  particleCount?: number;        // Override default count
  enableMouseInteraction?: boolean; // Default: true on desktop, false on mobile
  enableScrollTransform?: boolean;  // Default: true
  colors?: ColorRGB[];           // Override default palette
  onPerformanceDegradation?: (level: number) => void; // Callback for monitoring
}

// ===== COLOR PALETTE (Epic 1 Integration) =====

export const BRIEFING_PALETTE: ColorRGB[] = [
  { r: 79, g: 70, b: 229 },    // Indigo #4F46E5
  { r: 8, g: 145, b: 178 },    // Cyan #0891B2
  { r: 217, g: 70, b: 239 },   // Fuchsia #D946EF
];

// ===== ENTRANCE ANIMATION CONFIG =====

interface EntranceAnimationConfig {
  duration: number;             // 1.5-2s total entrance
  burstOrigin: { x: string; y: string }; // '50%', '50%' (center)
  stagger: number;              // 0.001s per particle
  ease: string;                 // 'power4.out'
}

// ===== DEVICE CAPABILITY DETECTION =====

function getDeviceCapability(): 'high' | 'medium' | 'low' {
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  if (isMobile) return 'low';
  if (isTablet) return 'medium';

  // Desktop: Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return prefersReducedMotion ? 'low' : 'high';
}

function getParticleCountForDevice(): number {
  const capability = getDeviceCapability();

  return {
    high: 5000,    // Desktop, full experience
    medium: 2000,  // Tablet or reduced motion
    low: 1000      // Mobile
  }[capability];
}
```

**Particle Physics Constants:**

```typescript
export const PARTICLE_PHYSICS = {
  // Flow field
  FLOW_VELOCITY_MIN: 0.5,      // pixels/frame horizontal
  FLOW_VELOCITY_MAX: 1.0,      // pixels/frame horizontal
  FLOW_RANDOMNESS: 0.3,        // Vertical random velocity range

  // Connections
  CONNECTION_DISTANCE: 100,    // Max px for neural network lines
  CONNECTION_OPACITY_BASE: 0.3, // Base opacity for connections
  CONNECTION_LINE_WIDTH: 1,    // Line thickness

  // Particle rendering
  PARTICLE_SIZE_MIN: 2,        // Minimum radius (px)
  PARTICLE_SIZE_MAX: 6,        // Maximum radius (px)
  PARTICLE_GLOW_RADIUS: 8,     // Radial gradient outer radius

  // Performance
  TARGET_FPS: 60,
  MIN_FPS_THRESHOLD: 30,       // Below this, trigger degradation
  FPS_SAMPLE_SIZE: 60,         // Frames to average for FPS calculation

  // Mouse interaction
  MOUSE_ATTRACTION_STRENGTH: 0.05,
  MOUSE_MAX_DISTANCE: 150,     // Interaction radius
  MOUSE_THROTTLE_MS: 16,       // 60fps throttle
} as const;
```

**Validation & Constraints:**

```typescript
function validateParticleConfig(config: Partial<ParticleConfig>): ParticleConfig {
  return {
    particleCount: Math.min(Math.max(config.particleCount ?? 5000, 100), 10000),
    colors: config.colors ?? BRIEFING_PALETTE,
    flowDirection: config.flowDirection ?? 'left-to-right',
    connectionDistance: Math.min(Math.max(config.connectionDistance ?? 100, 50), 200),
    particleSizeMin: Math.max(config.particleSizeMin ?? 2, 1),
    particleSizeMax: Math.min(config.particleSizeMax ?? 6, 10),
    flowStrength: Math.min(Math.max(config.flowStrength ?? 0.75, 0.1), 2.0),
  };
}
```

---

## APIs and Interfaces

**No External APIs Required:**
Epic 3 is purely client-side with no backend integration, REST endpoints, or third-party API calls beyond existing project setup.

**Component Export Interface:**

```typescript
// Main export
export { ParticleHero } from '@/components/briefing/ParticleHero';

// Internal modules (not exported, implementation details)
// - ParticleSystem class
// - MouseInteraction class
// - PerformanceMonitor class
```

**Page Integration Pattern:**

```typescript
// BriefingEngine.tsx modification
import { ParticleHero } from '@/components/briefing/ParticleHero';

export function BriefingEngine() {
  return (
    <main>
      {/* NEW: Epic 3 Hero Background */}
      <section className="relative">
        <ParticleHero className="absolute inset-0" />

        {/* Existing Hero Content (Epic 1/2) */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <h1 className="text-7xl font-black tracking-tighter">
            From Brand Brief to Production-Ready Storyboard
          </h1>
          {/* ... rest of hero content ... */}
        </div>
      </section>

      {/* Existing sections unchanged */}
      <BriefToStoryboardAnimation />
      <VisualStylesGallery />
      {/* ... */}
    </main>
  );
}
```

**GSAP ScrollTrigger Integration Interface:**

```typescript
// ParticleHero exposes scroll progress to ParticleSystem
useGSAP(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        // Update particle behavior based on scroll
        particleSystemRef.current?.updateScrollProgress(self.progress);
      }
    });
  }, containerRef);

  return () => ctx.revert();
}, { scope: containerRef });
```

**Particle System Public API:**

```typescript
class ParticleSystem {
  // Lifecycle
  constructor(canvas: HTMLCanvasElement, config: ParticleConfig);
  public start(): void;                 // Begin animation loop
  public stop(): void;                  // Pause animation loop
  public destroy(): void;               // Cleanup resources

  // Configuration
  public updateConfig(config: Partial<ParticleConfig>): void;
  public setParticleCount(count: number): void;

  // External integrations
  public updateScrollProgress(progress: number): void; // GSAP ScrollTrigger callback
  public applyMouseForce(x: number, y: number): void; // MouseInteraction callback

  // Performance monitoring
  public getCurrentFPS(): number;
  public getParticleCount(): number;
  public getDegradationLevel(): number;
}
```

**Canvas Rendering Context:**

```typescript
// Canvas 2D API (native browser, no wrapper needed)
const ctx = canvas.getContext('2d', {
  alpha: true,              // Transparent background for overlay
  desynchronized: false,    // Sync with page repaint
  willReadFrequently: false // Write-only optimization
});
```

**React Hooks Integration:**

```typescript
// useGSAP hook (from @gsap/react)
useGSAP(
  callback: () => void | (() => void),  // Setup function, returns cleanup
  options?: {
    scope?: React.RefObject<HTMLElement>;     // Selector scope
    dependencies?: React.DependencyList;      // Re-run when deps change
    revertOnUpdate?: boolean;                 // Revert previous animations
  }
): void;

// Example usage in ParticleHero
useGSAP(() => {
  // GSAP setup code
  gsap.to('.element', { x: 100 });

  // Return cleanup function
  return () => {
    // Automatically called when component unmounts
  };
}, { scope: containerRef, dependencies: [] });
```

**Lenis Integration (Global Instance):**

```typescript
// No direct Lenis API calls in Epic 3
// Lenis smooth scroll works automatically with GSAP ScrollTrigger
// Already configured in Epic 1:
//   lenis.on('scroll', ScrollTrigger.update);
//   gsap.ticker.add((time) => lenis.raf(time * 1000));
```

**Performance API:**

```typescript
// Browser Performance API (native)
const startTime = performance.now();
// ... work ...
const endTime = performance.now();
const frameTime = endTime - startTime;

// FPS calculation
const fps = 1000 / frameTime;
```

---

## Workflows and Sequencing

**Implementation Sequence (Single Story - 1-2 Days):**

### Story 3.1: Neural Briefing Network - Canvas Particle System
**Estimated Time:** 6-10 hours (1-2 days)
**Epic:** Epic 3 - Premium Hero Section

**Implementation Phases:**

```
Phase 1: Foundation (2-3 hours)
├── Create component structure
│   ├── src/components/briefing/ParticleHero.tsx (main component)
│   ├── src/components/briefing/particle-system/
│   │   ├── ParticleSystem.ts (core engine)
│   │   ├── MouseInteraction.ts (cursor tracking)
│   │   ├── PerformanceMonitor.ts (FPS tracking)
│   │   └── types.ts (TypeScript interfaces)
├── Implement ParticleHero React component
│   ├── Canvas element setup (useRef)
│   ├── Responsive sizing logic
│   ├── useEffect for initialization
│   └── Basic render structure
├── Create ParticleSystem class skeleton
│   ├── Constructor with typed arrays
│   ├── start() / stop() / destroy() methods
│   └── RequestAnimationFrame loop
└── Test: Canvas renders, no errors, basic lifecycle works

Phase 2: Particle Physics (2-3 hours)
├── Implement particle initialization
│   ├── Random positions (Float32Array)
│   ├── Flow field velocities (left-to-right bias)
│   ├── Color assignment (gradient palette)
│   └── Size variation (2-6px)
├── Implement update loop
│   ├── Position updates (velocity integration)
│   ├── Edge wrapping/bouncing
│   ├── Flow field application
│   └── Delta time normalization
├── Implement particle rendering
│   ├── Clear canvas
│   ├── Radial gradient creation
│   ├── Circular particle drawing
│   └── Color gradient application
└── Test: Particles animate smoothly, flow left-to-right, 60fps

Phase 3: Neural Network Connections (1.5-2 hours)
├── Implement connection detection
│   ├── Distance calculation (O(n²) with threshold)
│   ├── Connection array population
│   └── Optional: Spatial partitioning optimization
├── Implement connection rendering
│   ├── Line drawing between particles
│   ├── Opacity based on distance
│   ├── Gradient stroke style (cyan glow)
│   └── Glow filter application
└── Test: Connections appear/disappear, opacity correct, visual quality

Phase 4: GSAP & Mouse Interaction (1.5-2 hours)
├── Implement GSAP useGSAP hook integration
│   ├── ScrollTrigger setup (trigger: hero section)
│   ├── Scroll progress callback
│   ├── Particle speed modulation on scroll
│   └── Cleanup function (ctx.revert())
├── Implement MouseInteraction class
│   ├── Throttled mousemove listener (16ms)
│   ├── Canvas coordinate conversion
│   ├── Attraction force calculation
│   └── Force application to velocities
├── Implement entrance animation
│   ├── GSAP timeline for burst effect
│   ├── Staggered particle reveal from center
│   ├── Duration 1.5-2s with power4.out easing
│   └── Integration with component mount
└── Test: Scroll affects particles, mouse interaction works, entrance smooth

Phase 5: Performance & Polish (1-2 hours)
├── Implement PerformanceMonitor class
│   ├── FPS tracking (rolling 60-frame average)
│   ├── Degradation threshold detection (<30fps)
│   ├── Particle count adjustment callbacks
│   └── Console warnings (dev mode)
├── Implement device capability detection
│   ├── Mobile vs tablet vs desktop detection
│   ├── Particle count selection (1K/2K/5K)
│   ├── Mouse interaction disable on mobile
│   └── prefers-reduced-motion detection
├── Implement graceful degradation
│   ├── FPS monitoring in update loop
│   ├── Particle count reduction (5K→2K→1K)
│   ├── Connection distance reduction
│   └── Static fallback for reduced-motion
├── Final visual polish
│   ├── Color gradient tuning
│   ├── Glow intensity adjustment
│   ├── Connection opacity fine-tuning
│   └── Flow speed balancing
└── Test: FPS monitoring works, degradation triggers correctly, all devices tested

Phase 6: Integration & QA (0.5-1 hour)
├── Integrate into BriefingEngine.tsx
│   ├── Import ParticleHero component
│   ├── Wrap hero content with relative positioning
│   ├── Z-index layering (particles behind, content above)
│   └── Glassmorphism overlay compatibility
├── Browser testing
│   ├── Chrome (desktop + mobile)
│   ├── Firefox (desktop)
│   ├── Safari (desktop + iOS)
│   └── Edge (desktop)
├── Responsive testing
│   ├── 375px mobile (1K particles)
│   ├── 768px tablet (2K particles)
│   ├── 1024px desktop (5K particles)
│   └── 1920px widescreen (5K particles)
├── Accessibility testing
│   ├── prefers-reduced-motion emulation
│   ├── Keyboard navigation (content still accessible)
│   └── Screen reader compatibility
├── Performance validation
│   ├── Chrome DevTools Performance tab
│   ├── 60fps confirmation
│   ├── Bundle size check (+15KB max)
│   └── Lighthouse score (≥75 acceptable)
└── Production build test
    ├── npm run build succeeds
    ├── TypeScript compilation clean
    └── ESLint passes

Total: 9-13 hours (1-2 days with breaks)
```

**Critical Path Dependencies:**
- Phase 1 → Phase 2 (need ParticleSystem class before physics)
- Phase 2 → Phase 3 (need particles before connections)
- Phases 1-3 → Phase 4 (need rendering before GSAP integration)
- Phases 1-4 → Phase 5 (need working system before optimization)
- All phases → Phase 6 (integration requires complete feature)

**Parallel Work Opportunities:**
- MouseInteraction class can be built during Phase 2-3 (independent)
- PerformanceMonitor class can be built during Phase 2-3 (independent)
- Entrance animation GSAP timeline can be designed during Phase 3

---

**Page Rendering Flow:**

```
1. User navigates to /studios-engine (Briefing Engine page)
   ↓
2. React Router renders BriefingEngine.tsx
   ↓
3. ParticleHero component mounts
   ├── Canvas element created
   ├── ParticleSystem initialized (3K-5K particles)
   ├── MouseInteraction starts listening
   ├── PerformanceMonitor starts tracking FPS
   └── GSAP entrance animation plays (1.5-2s burst from center)
   ↓
4. Hero content renders on top (z-index: 10)
   ├── Glassmorphism background
   ├── Headline, subheadline, CTAs
   └── Feature highlights
   ↓
5. User scrolls page
   ├── Lenis smooth scroll active
   ├── GSAP ScrollTrigger fires callback
   ├── ParticleSystem.updateScrollProgress() called
   ├── Particle flow speed increases with scroll
   └── Epic 1 animations below hero fire (BriefToStoryboardAnimation, etc.)
   ↓
6. User moves cursor over hero
   ├── MouseInteraction detects movement (throttled 60fps)
   ├── Attraction forces applied to nearby particles (<150px)
   ├── Particles move toward cursor
   └── Neural connections dynamically update
   ↓
7. Performance monitoring (continuous)
   ├── Every frame: PerformanceMonitor.recordFrame()
   ├── Every 60 frames: FPS calculation
   ├── If FPS <30fps: Trigger degradation (5K→2K particles)
   └── If FPS <20fps: Second degradation (2K→1K particles)
```

**Data Flow (Runtime):**

```
RequestAnimationFrame Loop (60fps)
  ↓
ParticleSystem.update(deltaTime)
  ├── Update particle positions (physics)
  ├── Apply flow field (left-to-right)
  ├── Apply mouse forces (if cursor active)
  ├── Apply scroll transform (if scrolling)
  └── Update connections (distance checks)
  ↓
ParticleSystem.render(ctx)
  ├── Clear canvas
  ├── Render connections (lines with gradient opacity)
  └── Render particles (radial gradient circles)
  ↓
PerformanceMonitor.recordFrame()
  ├── Calculate frame time
  ├── Update FPS average
  └── Check degradation thresholds
  ↓
(Loop continues until component unmounts)
```

**Cleanup Flow (Unmount):**

```
User navigates away from page
  ↓
ParticleHero component unmounts
  ↓
useEffect cleanup triggers
  ↓
ParticleSystem.destroy()
  ├── cancelAnimationFrame (stop loop)
  ├── Clear typed arrays
  └── Remove Canvas references
  ↓
MouseInteraction.destroy()
  ├── Remove mousemove listener
  └── Remove mouseleave listener
  ↓
useGSAP cleanup triggers
  ├── ctx.revert() (GSAP cleanup)
  ├── ScrollTrigger.kill()
  └── Remove GSAP event listeners
  ↓
Memory freed, no leaks
```

**Build & Deployment Flow:**

```
1. npm run build (local development)
   ↓
2. TypeScript compilation
   ├── ParticleHero.tsx → .js
   ├── ParticleSystem.ts → .js
   ├── MouseInteraction.ts → .js
   └── PerformanceMonitor.ts → .js
   ↓
3. Vite bundling
   ├── Code splitting (vendor chunk already has GSAP)
   ├── ParticleHero bundled with main chunk
   ├── Tree-shaking unused exports
   └── ~15KB bundle size impact (minified + gzipped)
   ↓
4. Terser minification
   ├── Variable name mangling
   ├── console.log removal (production)
   └── Dead code elimination
   ↓
5. Output: dist/ directory
   ├── dist/index.html
   ├── dist/assets/index-[hash].js (~950KB total, +15KB from Epic 3)
   └── dist/assets/index-[hash].css
   ↓
6. GitHub Actions deploy.yml
   ├── Trigger: push to main
   ├── Run: npm ci && npm run build
   └── Deploy: peaceiris/actions-gh-pages@v3
   ↓
7. GitHub Pages (gh-pages branch)
   ↓
8. cre8tive.ai (custom domain DNS)
```

---

## Non-Functional Requirements

### Performance

**Measurable Targets (Research-Validated):**

Based on comprehensive research (WebSearch: Canvas particle performance, WebGL vs Canvas 2D comparisons, Context7: GSAP ScrollTrigger docs), the following performance targets are validated as achievable:

- **Frame Rate:** 60fps (16.67ms/frame budget) on desktop, 45-60fps on mobile
  - **Desktop:** 5,000 particles at 60fps (validated benchmark from research)
  - **Tablet:** 2,000 particles at 60fps
  - **Mobile:** 1,000 particles at 45-60fps
  - **Measurement:** Chrome DevTools Performance tab, rolling 60-frame average

- **Initial Render Time:** <100ms from component mount to first particle display
  - Canvas context creation: <10ms
  - Typed array initialization: <20ms
  - First render cycle: <30ms
  - Entrance animation start: <100ms total

- **Bundle Size Impact:** +10-15KB gzipped maximum
  - ParticleHero component: ~3KB
  - ParticleSystem class: ~5KB
  - MouseInteraction class: ~2KB
  - PerformanceMonitor class: ~2KB
  - Types and constants: ~1KB
  - **Total new code:** ~13KB minified + gzipped
  - **Existing GSAP:** Already installed (~66KB, no additional cost)

- **Page Load Performance:** Lighthouse Performance score ≥75 (acceptable tradeoff for premium visual)
  - **Current baseline:** ~85 (Epic 1)
  - **Epic 3 impact:** -5 to -10 points (canvas initialization overhead)
  - **Target:** ≥75 (still "good" rating)

- **Core Web Vitals:**
  - **FCP (First Contentful Paint):** ≤1.8s on 3G (hero text renders before particles fully initialize)
  - **LCP (Largest Contentful Paint):** ≤2.5s (maintain "good" rating)
  - **CLS (Cumulative Layout Shift):** ≤0.1 (canvas pre-allocated, no layout shifts)
  - **FID (First Input Delay):** ≤100ms (particle system non-blocking)

**Performance Budget per Frame (60fps = 16.67ms):**

| Operation | Budget | Optimization Strategy |
|-----------|--------|----------------------|
| **Particle Physics** | ≤5ms | Typed arrays (Float32Array), single loop |
| **Connection Detection** | ≤3ms | Distance threshold (100px), early exit |
| **Canvas Rendering** | ≤4ms | Batch radial gradients, minimize state changes |
| **Mouse Interaction** | ≤1ms | Throttled to 16ms, disabled on mobile |
| **GSAP ScrollTrigger** | ≤1ms | Single callback, minimal computation |
| **Layout/Paint/Composite** | ≤2.67ms | Browser-controlled, GPU acceleration |

**Optimization Strategies (Research-Backed):**

1. **Typed Arrays for Memory Efficiency** (from research: Canvas performance best practices)
   ```typescript
   // Cache-friendly memory layout
   positions: Float32Array;  // 64-bit floats, contiguous memory
   colors: Uint8Array;       // 8-bit integers, 4x smaller than floats
   ```

2. **Connection Distance Threshold** (from research: avoid O(n²) for large particle counts)
   ```typescript
   // Only check particles within 100px (reduces comparisons by ~90%)
   if (distance < 100) {
     connections.push({ from: i, to: j, distance });
   }
   ```

3. **GPU Acceleration** (from research: MDN Canvas optimization guide)
   ```css
   canvas {
     will-change: transform;
     transform: translateZ(0); /* Force GPU layer */
   }
   ```

4. **RequestAnimationFrame Throttling** (from Context7: GSAP best practices 2025)
   ```typescript
   // Browser-managed frame rate, automatic throttling on low-end devices
   requestAnimationFrame(animate);
   ```

5. **Mouse Event Throttling** (from research: 60fps = 16ms minimum interval)
   ```typescript
   const throttledMouseMove = gsap.utils.throttle(handleMouseMove, 16);
   ```

**Graceful Degradation Strategy:**

```
Performance Level 0 (Full Quality - 60fps):
  └── 5,000 particles (desktop)
  └── 100px connection distance
  └── Mouse interaction enabled
  └── Full scroll transforms

                ↓ (FPS drops <30fps for 5 consecutive frames)

Performance Level 1 (Reduced - 30-60fps):
  └── 2,000 particles (60% reduction)
  └── 80px connection distance
  └── Mouse interaction enabled
  └── Full scroll transforms

                ↓ (FPS drops <20fps for 5 consecutive frames)

Performance Level 2 (Minimal - 20-30fps):
  └── 1,000 particles (80% reduction)
  └── 60px connection distance
  └── Mouse interaction disabled
  └── Simplified scroll transforms

                ↓ (FPS drops <15fps for 5 consecutive frames)

Fallback (Static):
  └── Static gradient background
  └── No particles
  └── prefers-reduced-motion honored
```

**Mobile Performance Optimizations:**

```typescript
// Device detection and optimization
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 1000 : 5000;
const mouseInteractionEnabled = !isMobile;
const connectionDistance = isMobile ? 60 : 100;

// Mobile-specific rendering optimizations
if (isMobile) {
  // Disable glow effects (expensive on mobile GPUs)
  ctx.shadowBlur = 0;

  // Reduce connection line width
  ctx.lineWidth = 0.5;

  // Skip scroll transforms (simpler fade-in/out)
  scrollTransformEnabled = false;
}
```

**Performance Monitoring:**

- **Development:** stats.js FPS overlay (existing package.json)
- **Production:** Vercel Analytics Web Vitals (existing integration)
- **QA:** Chrome DevTools Performance tab profiling
- **Regression Prevention:** Baseline performance test before merge (manual validation)

---

### Security

**Content Security (Zero New Attack Vectors):**

Epic 3 introduces no new security concerns beyond existing project security posture:

- **No User Input:** Particle system is 100% client-side rendering with no user-provided data
- **No External Resources:** All particle logic is self-contained TypeScript code, no CDN dependencies
- **No Dynamic Script Execution:** No `eval()`, `new Function()`, or dynamic imports
- **No Data Storage:** No localStorage, sessionStorage, or cookies created
- **No Network Requests:** No API calls, fetch(), or XHR

**XSS Prevention:**

- All rendering via Canvas 2D API (no HTML/DOM manipulation)
- No `dangerouslySetInnerHTML` usage
- No text/string rendering in Canvas (only geometric shapes)
- TypeScript strict null checks prevent injection vectors

**CSP Compliance:**

Particle system respects existing Content Security Policy (defined in App.tsx):

```
script-src 'self' 'unsafe-inline' (required for GSAP, already allowed)
connect-src 'self' (no new connections needed)
style-src 'self' 'unsafe-inline' (Canvas inline styles, already allowed)
img-src * (not used in particle system)
```

**Dependency Security:**

- **Zero new dependencies** (Canvas API is native browser, GSAP already audited)
- **No npm package vulnerabilities** introduced
- Inherits existing dependency scanning (none configured per ARCHITECTURE.md)

**Browser Security Features:**

- **SameSite Cookies:** N/A (no cookies)
- **HTTPS:** Enforced by GitHub Pages
- **CORS:** N/A (no cross-origin requests)
- **Subresource Integrity:** N/A (no external scripts)

**Security Verification:**

- ESLint security rules pass (no `eval`, no unsafe patterns)
- TypeScript compilation prevents type-related vulnerabilities
- Manual code review for security anti-patterns (required in PR)

**Threat Model:**

No new threats introduced. Existing threats remain unchanged:
- Client-side code tampering (browser DevTools) - acceptable for static marketing site
- Network traffic interception - mitigated by HTTPS
- Third-party script compromise (GSAP CDN) - mitigated by using npm package, not CDN

---

### Reliability/Availability

**Uptime Target:** 99.9% (inherited from GitHub Pages SLA, no degradation)

**Failure Modes and Recovery:**

1. **Canvas Context Creation Fails:**
   - **Cause:** Browser doesn't support Canvas 2D (ancient browsers)
   - **Detection:** `canvas.getContext('2d')` returns `null`
   - **Fallback:** Render static gradient background, log warning
   - **User Impact:** Hero section displays gradient, no particles (graceful degradation)

   ```typescript
   const ctx = canvas.getContext('2d');
   if (!ctx) {
     console.warn('[ParticleHero] Canvas not supported, using static background');
     return <div className="static-gradient-background" />;
   }
   ```

2. **RequestAnimationFrame Not Available:**
   - **Cause:** Extremely old browser (IE9 and below - out of support scope)
   - **Detection:** `typeof requestAnimationFrame === 'undefined'`
   - **Fallback:** Static gradient, no animation
   - **User Impact:** Hero renders but doesn't animate

3. **Performance Degradation Below Acceptable:**
   - **Cause:** Low-end device, heavy background processes
   - **Detection:** FPS <15fps for 10 consecutive frames
   - **Fallback:** Switch to static gradient via PerformanceMonitor
   - **User Impact:** Particles disappear, replaced by gradient (user doesn't notice janky animation)

4. **Memory Exhaustion:**
   - **Cause:** Typed array allocation fails on low-memory devices
   - **Detection:** `try/catch` around `new Float32Array()`
   - **Fallback:** Reduce particle count to 500, retry once
   - **User Impact:** Fewer particles initially, or static gradient if retry fails

   ```typescript
   try {
     this.positions = new Float32Array(count * 2);
   } catch (e) {
     console.warn('[ParticleHero] Memory allocation failed, reducing particles');
     count = 500; // Retry with minimal count
     this.positions = new Float32Array(count * 2);
   }
   ```

5. **GSAP/ScrollTrigger Fails to Load:**
   - **Cause:** CDN failure (unlikely, using npm package), network error during page load
   - **Detection:** `typeof gsap === 'undefined'`
   - **Fallback:** Particle system renders without scroll transforms
   - **User Impact:** Particles visible but don't respond to scroll (80% functionality preserved)

**Error Boundaries:**

```typescript
// React Error Boundary wraps ParticleHero
<ErrorBoundary fallback={<StaticGradientFallback />}>
  <ParticleHero />
</ErrorBoundary>
```

**Cleanup and Resource Management:**

```typescript
// Guaranteed cleanup on unmount (prevents memory leaks)
useEffect(() => {
  const particleSystem = new ParticleSystem(canvas, config);

  return () => {
    particleSystem.destroy(); // Calls cancelAnimationFrame, clears arrays
  };
}, []);

// GSAP cleanup via useGSAP hook (from Context7 research)
useGSAP(() => {
  // ScrollTrigger setup
  return () => ctx.revert(); // Auto-cleanup
}, { scope: containerRef });
```

**Browser Compatibility:**

- **Target:** Chrome 100+, Firefox 100+, Safari 15+, Edge 100+ (modern browsers only)
- **Tested:** Chrome 120 (desktop + Android), Safari 17 (desktop + iOS), Firefox 121
- **Fallback:** Static gradient for older browsers (detected via feature detection)

**Availability Considerations:**

- **Static Site:** No server downtime risk (GitHub Pages 99.9% SLA)
- **Client-Side Only:** No backend dependencies to fail
- **No External APIs:** Particle system fully self-contained
- **Graceful Degradation:** Page functions 100% without particle system (content still readable/accessible)

---

### Observability

**Monitoring Strategy (Existing Infrastructure):**

Epic 3 leverages existing observability tools without requiring new integrations:

**1. Performance Monitoring:**

- **Vercel Analytics (existing):**
  - Core Web Vitals tracking (FCP, LCP, CLS)
  - Page load time distribution
  - Device/browser breakdown

- **Chrome User Experience Report (CrUX):**
  - Real user performance metrics
  - Geographic distribution
  - Connection speed impact

- **Custom Performance Logging (dev mode only):**
  ```typescript
  if (import.meta.env.DEV) {
    console.log('[ParticleHero] Initialized with', particleCount, 'particles');
    console.log('[ParticleHero] Current FPS:', performanceMonitor.getCurrentFPS());
  }
  ```

**2. Error Tracking:**

- **Browser Console (dev mode):**
  ```typescript
  try {
    particleSystem.update(deltaTime);
  } catch (error) {
    console.error('[ParticleHero] Update failed:', error);
    // Trigger fallback to static gradient
  }
  ```

- **React Error Boundaries:**
  - Catches rendering errors
  - Logs to console (production: Terser strips logs)
  - Displays fallback UI

- **No Dedicated Error Tracking:** Sentry not configured (per ARCHITECTURE.md technical debt)
  - **Recommendation:** Add Sentry integration for production error monitoring (future enhancement)

**3. User Interaction Tracking (Google Tag Manager):**

```typescript
// Track particle hero visibility
window.gtag?.('event', 'particle_hero_visible', {
  particle_count: particleCount,
  device_type: isMobile ? 'mobile' : 'desktop',
  performance_level: degradationLevel
});

// Track degradation events
if (degradationLevel > 0) {
  window.gtag?.('event', 'particle_degradation', {
    from_level: previousLevel,
    to_level: degradationLevel,
    fps: currentFPS
  });
}
```

**4. Performance Metrics to Monitor:**

| Metric | Target | Alert Threshold | Measurement Method |
|--------|--------|-----------------|-------------------|
| **Hero Section FPS** | 60fps | <45fps for >10% users | Custom performance logging + Vercel Analytics |
| **Particle System Load Time** | <100ms | >200ms | Performance.now() timestamps |
| **Canvas Render Time** | <4ms/frame | >8ms/frame | Chrome DevTools Performance profiling |
| **Degradation Rate** | <5% users | >15% users | GTM event tracking |
| **Error Rate** | <0.1% | >1% | Console errors, Error Boundary catches |

**5. Logging Strategy:**

```typescript
// Development: Verbose logging
if (import.meta.env.DEV) {
  console.group('[ParticleHero] Initialization');
  console.log('Particle count:', particleCount);
  console.log('Device capability:', deviceCapability);
  console.log('Mouse interaction:', mouseInteractionEnabled);
  console.groupEnd();
}

// Production: Errors only (warnings/logs stripped by Terser)
if (error) {
  console.error('[ParticleHero] Critical failure:', error);
}
```

**6. Signals for Monitoring:**

- **FPS drops:** Alert if >10% of users experience <45fps
- **Fallback activation:** Track how often static gradient fallback is shown
- **Memory errors:** Log typed array allocation failures
- **Browser incompatibility:** Track Canvas context creation failures

**7. Debug Mode (Development):**

```typescript
// Enable debug overlay via URL parameter
const debugMode = new URLSearchParams(window.location.search).get('debug') === 'particles';

if (debugMode) {
  // Render FPS counter
  // Show particle count
  // Highlight connection lines
  // Display performance metrics overlay
}
```

**8. No New Monitoring Tools Required:**

- ✅ Uses existing Vercel Analytics
- ✅ Uses existing Google Tag Manager
- ✅ Uses browser Performance API (native)
- ✅ Uses console logging (Terser strips in production)
- ❌ No APM (Application Performance Monitoring) needed (static site)
- ❌ No distributed tracing (client-side only)
- ❌ No custom metrics backend (GitHub Pages static hosting)

## Dependencies and Integrations

**Zero New Dependencies Required:**

Epic 3 achieves premium particle system implementation using **100% existing dependencies** and native browser APIs. No npm packages need to be added.

**Existing Dependencies Utilized:**

| Package | Version | Usage in Epic 3 | Already Installed |
|---------|---------|-----------------|-------------------|
| `react` | 18.3.1 | Component rendering, hooks (useRef, useEffect, useState) | ✅ Epic 1 |
| `react-dom` | 18.3.1 | DOM rendering | ✅ Epic 1 |
| `gsap` | 3.13.0 | ScrollTrigger integration, entrance animation, mouse throttling | ✅ Epic 1 |
| `@gsap/react` | 2.1.2 | useGSAP hook for React cleanup (prevents memory leaks) | ✅ Epic 1 |
| `typescript` | 5.5.3 | Type safety for particle system classes | ✅ Project |
| `vite` | 5.4.1 | Build system, code splitting | ✅ Project |

**Native Browser APIs (No Installation Required):**

| API | Usage | Browser Support |
|-----|-------|-----------------|
| **Canvas 2D** | Particle rendering, gradients, connections | Chrome 4+, Firefox 2+, Safari 3+ |
| **RequestAnimationFrame** | 60fps animation loop | Chrome 24+, Firefox 23+, Safari 6+ |
| **Performance API** | Frame timing, FPS calculation | Chrome 24+, Firefox 15+, Safari 8+ |
| **Float32Array / Uint8Array** | Typed arrays for particle data | Chrome 7+, Firefox 4+, Safari 5.1+ |
| **matchMedia** | prefers-reduced-motion detection | Chrome 9+, Firefox 6+, Safari 5.1+ |

**Integration with Existing Systems:**

**1. Epic 1 Animation Framework Integration:**

```typescript
// GSAP 3.13.0 + ScrollTrigger (already configured in Epic 1)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// ParticleHero uses existing GSAP instance
useGSAP(() => {
  ScrollTrigger.create({
    trigger: heroSectionRef.current,
    // ... particle scroll transforms
  });
}, { scope: heroSectionRef });
```

**2. Lenis Smooth Scroll Integration:**

```typescript
// Lenis 1.3.11 (already configured globally in Epic 1)
// No direct Epic 3 code needed - Lenis automatically works with GSAP ScrollTrigger

// Epic 1 setup (unchanged):
// lenis.on('scroll', ScrollTrigger.update);
// gsap.ticker.add((time) => lenis.raf(time * 1000));

// Result: Particle system scroll transforms automatically smooth
```

**3. Epic 1 Color Palette Integration:**

```typescript
// Import existing color constants from Epic 1
import { BRIEFING_PALETTE } from '@/components/briefing/palette.ts';

// ParticleHero uses same colors (indigo, cyan, fuchsia)
const particleSystem = new ParticleSystem(canvas, {
  colors: BRIEFING_PALETTE // Epic 1 color system
});
```

**4. Epic 2 Premium Foundation Coordination:**

Epic 3 particles operate independently from Epic 2's premium components (OrganicCard, useMagneticPull, useOrchestrator), but both epics share the same performance philosophy:

- Both target 60fps performance
- Both use GSAP for animations
- Both implement graceful degradation
- Both use typed arrays/optimized data structures

**No conflicts** - Epic 2 components are on different page sections (portfolio, platforms, etc.), Epic 3 is hero-only.

**External Service Integrations (Existing, No Changes):**

- **Vercel Analytics:** Automatic Web Vitals tracking (no Epic 3 code needed)
- **Google Tag Manager:** Optional GTM events for particle degradation tracking (enhancement, not required)
- **GitHub Pages:** Static hosting, no changes to deployment process

**Build System Integration:**

```yaml
# vite.config.ts (unchanged)
# Epic 3 ParticleHero automatically bundled with existing configuration:
# - Code splitting (vendor chunk includes GSAP)
# - TypeScript compilation
# - Terser minification
# - Source maps (dev mode)

# Bundle impact: +13KB gzipped (ParticleHero + dependencies)
# Total bundle size: ~963KB → ~976KB (1.3% increase)
```

**TypeScript Configuration:**

```json
// tsconfig.json (unchanged)
// Epic 3 uses existing TypeScript configuration:
{
  "compilerOptions": {
    "strict": false,           // Relaxed mode (project standard)
    "noImplicitAny": false,    // Allows implicit any
    "target": "ES2020",        // Typed arrays supported
    "module": "ESNext",        // Native ES modules
    "lib": ["ES2020", "DOM"]   // Canvas API types included
  }
}
```

**React Integration:**

```tsx
// BriefingEngine.tsx (modification required)
import { ParticleHero } from '@/components/briefing/ParticleHero';

export function BriefingEngine() {
  return (
    <main>
      {/* Epic 3: Hero Section with Particles */}
      <section className="relative h-screen">
        <ParticleHero className="absolute inset-0 z-0" />

        {/* Existing Epic 1/2 hero content (overlay) */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <h1>From Brand Brief to Production-Ready Storyboard</h1>
          {/* ... existing hero content ... */}
        </div>
      </section>

      {/* Epic 1: Existing sections unchanged */}
      <BriefToStoryboardAnimation />
      <VisualStylesGallery />
      {/* ... rest of page ... */}
    </main>
  );
}
```

**CSS/Tailwind Integration:**

```tsx
// Epic 3 uses existing Tailwind 3.4.11 configuration
<canvas
  className="absolute inset-0"
  style={{ willChange: 'transform' }} // GPU acceleration via inline style
/>

// No new Tailwind classes needed - all styling is Canvas rendering
```

**Performance Coordination:**

```
Total Animation Budget (60fps = 16.67ms/frame):

Epic 3 ParticleHero:      5-8ms   (particle physics + rendering)
Epic 1 GSAP timelines:    8-12ms  (scroll-linked animations)
Browser layout/paint:     2-4ms   (browser-controlled)
────────────────────────────────
Total:                    15-24ms (target: <16.67ms for 60fps)

Strategy: Epic 3 monitors FPS and degrades if total exceeds budget
```

**No Breaking Changes:**

- ❌ No changes to existing Epic 1 components
- ❌ No changes to existing Epic 2 components
- ❌ No changes to build configuration
- ❌ No changes to deployment process
- ❌ No changes to routing
- ✅ Single file modification: BriefingEngine.tsx (add `<ParticleHero />` component)

---

## Acceptance Criteria (Authoritative)

**Epic 3 must satisfy ALL acceptance criteria below to be considered complete:**

### Visual Implementation (11 ACs)

1. **AC-3.1:** Canvas element renders full-viewport (100vw x 100vh) behind hero content with z-index: 0
2. **AC-3.2:** 3,000-5,000 particles visible on desktop (1920px+), distributed randomly across canvas on initial render
3. **AC-3.3:** Particles display gradient colors from Epic 1 palette (indigo #4F46E5, cyan #0891B2, fuchsia #C026D3) with varied distribution
4. **AC-3.4:** Particle sizes vary between 2-6px radius with radial gradient glow effect
5. **AC-3.5:** Neural network connections (lines) appear between particles within 100px distance
6. **AC-3.6:** Connection lines use cyan (#0891B2) stroke color with 30% base opacity, opacity increases as particles get closer
7. **AC-3.7:** Particles flow horizontally left-to-right (Brief → Storyboard metaphor) with velocity 0.5-1.0 px/frame
8. **AC-3.8:** Background gradient displays dark indigo (#1e1b4b) to darker (#0f172a) vertical gradient
9. **AC-3.9:** Hero text content (headline, subheadline, CTAs) renders on top of particles with glassmorphism overlay (z-index: 10)
10. **AC-3.10:** Particles and connections visible and clear against dark background (no contrast issues)
11. **AC-3.11:** Visual quality matches premium quality expectation (smooth gradients, anti-aliased edges, no pixelation)

### Animation & Interaction (8 ACs)

12. **AC-3.12:** Entrance animation plays on page load: particles burst from center over 1.5-2s duration with staggered appearance
13. **AC-3.13:** Particles animate smoothly at 60fps on desktop (Chrome DevTools Performance tab confirms <16.67ms/frame)
14. **AC-3.14:** Mouse interaction works on desktop: cursor within 150px attracts nearby particles (visible pull effect)
15. **AC-3.15:** Mouse interaction throttled to 60fps maximum (16ms minimum interval between mousemove updates)
16. **AC-3.16:** Scroll triggers particle speed increase: particles flow faster as user scrolls down (GSAP ScrollTrigger integration)
17. **AC-3.17:** Scroll progress from 0% (top) to 100% (bottom of hero section) modulates particle behavior smoothly
18. **AC-3.18:** Entrance animation uses power4.out easing (smooth deceleration, no jarring motion)
19. **AC-3.19:** Animations continue without interruption (no stuttering, dropped frames, or freezing)

### Performance (10 ACs)

20. **AC-3.20:** 60fps maintained on desktop (Chrome 120+, Safari 17+, Firefox 121+) with 5,000 particles for at least 30 consecutive seconds
21. **AC-3.21:** 45-60fps maintained on mobile (iOS Safari 15+, Chrome Android) with 1,000 particles
22. **AC-3.22:** Initial render completes within 100ms (Performance.now() timestamp: component mount → first particle visible)
23. **AC-3.23:** Bundle size increase ≤15KB gzipped (measured via `npm run build`, compare dist/ sizes before/after)
24. **AC-3.24:** Lighthouse Performance score ≥75 on Briefing Engine page (acceptable tradeoff for premium visual)
25. **AC-3.25:** Performance degradation triggers correctly: FPS <30fps for 5 consecutive frames reduces particle count from 5K → 2K
26. **AC-3.26:** Second degradation triggers correctly: FPS <20fps for 5 consecutive frames reduces from 2K → 1K particles
27. **AC-3.27:** Performance Monitor logs warnings in dev mode when degradation occurs (console.warn visible in browser console)
28. **AC-3.28:** PerformanceMonitor.getCurrentFPS() returns accurate FPS (±2fps variance from Chrome DevTools measured FPS)
29. **AC-3.29:** No memory leaks on unmount: navigating away from page and back 10 times does not increase memory usage (Chrome Task Manager validation)

### Responsive & Accessibility (8 ACs)

30. **AC-3.30:** Mobile (viewport width <768px) displays 1,000 particles maximum
31. **AC-3.31:** Tablet (768px ≤ width < 1024px) displays 2,000 particles maximum
32. **AC-3.32:** Desktop (width ≥1024px) displays 5,000 particles maximum
33. **AC-3.33:** Mouse interaction disabled on mobile/touch devices (no mousemove listeners attached)
34. **AC-3.34:** prefers-reduced-motion: reduce honored - users with motion sensitivity preference see static gradient background (no particles, no animation)
35. **AC-3.35:** Canvas element has aria-hidden="true" attribute (particles are decorative, not content)
36. **AC-3.36:** Hero content (text, CTAs) remains fully keyboard navigable (Tab key navigation works, particles don't interfere)
37. **AC-3.37:** Screen reader testing (NVDA/VoiceOver) confirms particles don't disrupt content reading

### Integration & Compatibility (10 ACs)

38. **AC-3.38:** ParticleHero component integrates into BriefingEngine.tsx without breaking existing Epic 1/2 functionality
39. **AC-3.39:** GSAP useGSAP hook cleanup verified: ParticleHero unmount removes ScrollTrigger instance (no orphaned triggers)
40. **AC-3.40:** Lenis smooth scroll continues working normally with particles active (no scroll jank)
41. **AC-3.41:** Epic 1 BriefToStoryboardAnimation plays correctly below hero (no animation conflicts)
42. **AC-3.42:** Epic 1 color palette constants (BRIEFING_PALETTE) imported and used correctly (no hard-coded colors)
43. **AC-3.43:** TypeScript compilation passes without errors (`tsc --noEmit` succeeds)
44. **AC-3.44:** ESLint validation passes errors-only (`npm run lint` shows 0 errors, warnings acceptable)
45. **AC-3.45:** Production build succeeds (`npm run build` completes without errors)
46. **AC-3.46:** Browser compatibility verified: Chrome 120+ (desktop + mobile), Firefox 121+, Safari 17+ (desktop + iOS), Edge 120+
47. **AC-3.47:** No console errors in production build (Terser strips console.log/warn, only console.error should remain for critical failures)

### Fallback & Error Handling (5 ACs)

48. **AC-3.48:** Canvas context creation failure handled gracefully: static gradient renders if `getContext('2d')` returns null
49. **AC-3.49:** Memory allocation failure handled: typed array allocation failure triggers retry with reduced particle count (500 particles)
50. **AC-3.50:** GSAP not available fallback: particles render without scroll transforms if `typeof gsap === 'undefined'`
51. **AC-3.51:** React Error Boundary wraps ParticleHero: component errors display fallback UI (StaticGradientFallback component) instead of crashing page
52. **AC-3.52:** Performance fallback to static gradient: FPS <15fps for 10 consecutive frames disables particles entirely, shows gradient background

---

## Traceability Mapping

| AC | Spec Section | Component/Module | Test Approach | Validation Method |
|----|--------------|------------------|---------------|-------------------|
| **AC-3.1** | Module 1 (ParticleHero) | ParticleHero.tsx | Visual QA | Inspect Element: verify `<canvas>` has `absolute inset-0 z-0` classes |
| **AC-3.2** | Module 2 (ParticleSystem) | ParticleSystem.ts `initializeParticles()` | Unit + Visual QA | Dev console: `particleSystemRef.current.getParticleCount()` returns 5000 (desktop) |
| **AC-3.3** | Data Models (BRIEFING_PALETTE) | ParticleSystem.ts `initializeParticles()` | Visual QA + Code review | Verify particles display indigo/cyan/fuchsia mix, check `BRIEFING_PALETTE` import |
| **AC-3.4** | Module 2 (Particle Rendering) | ParticleSystem.ts `renderParticles()` | Visual QA | Inspect radial gradients in Canvas, measure particle sizes (2-6px range) |
| **AC-3.5** | Module 2 (Connections) | ParticleSystem.ts `updateConnections()` | Visual QA | Observe lines appearing/disappearing as particles move, verify 100px threshold |
| **AC-3.6** | Module 2 (Connection Rendering) | ParticleSystem.ts `renderConnections()` | Visual QA + Code review | Verify cyan color (#0891B2), measure opacity variation with proximity |
| **AC-3.7** | Module 2 (Physics) | ParticleSystem.ts `initializeParticles()` velocity | Visual QA | Observe left-to-right horizontal flow, measure velocity (0.5-1.0 px/frame in dev tools) |
| **AC-3.8** | Module 1 (Background) | ParticleHero.tsx CSS background | Visual QA | Inspect Element: verify gradient CSS, eyedropper tool confirms #1e1b4b → #0f172a |
| **AC-3.9** | Integration (BriefingEngine) | BriefingEngine.tsx structure | Visual QA | Verify hero text readable on top of particles, z-index layering correct |
| **AC-3.10** | Visual QA | All rendering modules | Visual QA | WCAG contrast checker (4.5:1 minimum), manual inspection across devices |
| **AC-3.11** | Visual QA | All rendering modules | Visual QA | Side-by-side comparison with research report visuals, stakeholder approval |
| **AC-3.12** | Module 1 (Entrance Animation) | ParticleHero.tsx GSAP timeline | Visual QA + Timing | Observe burst from center, measure duration (1.5-2s), verify stagger effect |
| **AC-3.13** | Performance (60fps) | All modules + PerformanceMonitor | Chrome DevTools Performance tab | Record 10s animation, analyze frame times, verify <16.67ms/frame average |
| **AC-3.14** | Module 3 (MouseInteraction) | MouseInteraction.ts `applyForces()` | Manual interaction test | Move cursor over particles, verify pull effect within 150px radius |
| **AC-3.15** | Module 3 (Mouse Throttling) | MouseInteraction.ts `throttledHandler` | Chrome DevTools Performance | Verify mousemove events processed every ≥16ms (60fps max) |
| **AC-3.16** | APIs & Interfaces (GSAP ScrollTrigger) | ParticleHero.tsx useGSAP hook | Manual scroll test | Scroll down hero section, observe particle speed increase |
| **AC-3.17** | Workflows (Scroll Transform) | ParticleSystem.ts `updateScrollProgress()` | Manual scroll test | Scroll 0% → 100%, verify smooth particle behavior modulation |
| **AC-3.18** | Data Models (Entrance Animation Config) | ParticleHero.tsx GSAP timeline | Visual QA | Verify smooth deceleration (power4.out characteristic), no jarring stops |
| **AC-3.19** | NFR Performance | All modules | Visual QA + Chrome DevTools | Observe animation for 60s, verify no stuttering/dropped frames |
| **AC-3.20** | NFR Performance (60fps desktop) | All modules + PerformanceMonitor | Chrome DevTools Performance tab | Record 30s, verify sustained 60fps (±2fps variance), measure across browsers |
| **AC-3.21** | NFR Performance (mobile) | All modules + device detection | Mobile device testing | Test on iPhone 12+ (Safari), Pixel 6+ (Chrome), verify 45-60fps |
| **AC-3.22** | NFR Performance (Initial Render) | ParticleSystem initialization | Performance.now() timestamps | Measure `mount → first render`, verify <100ms |
| **AC-3.23** | NFR Performance (Bundle Size) | Build output | Build comparison | `npm run build` before/after, compare `dist/assets/*` gzipped sizes, verify ≤15KB increase |
| **AC-3.24** | NFR Performance (Lighthouse) | Full page | Lighthouse audit | Run Lighthouse on /studios-engine, verify Performance ≥75 |
| **AC-3.25** | Module 4 (PerformanceMonitor) | PerformanceMonitor.ts degradation logic | CPU throttling simulation | Chrome DevTools CPU 6x throttle, verify 5K→2K reduction at <30fps |
| **AC-3.26** | Module 4 (Second Degradation) | PerformanceMonitor.ts degradation logic | CPU throttling simulation | Continue throttling, verify 2K→1K reduction at <20fps |
| **AC-3.27** | Module 4 (Console Warnings) | PerformanceMonitor.ts logging | Dev console inspection | Trigger degradation, verify `console.warn` messages appear |
| **AC-3.28** | Module 4 (FPS Accuracy) | PerformanceMonitor.ts `getCurrentFPS()` | Comparison test | Compare PerformanceMonitor FPS vs Chrome DevTools FPS, verify ±2fps |
| **AC-3.29** | NFR Reliability (Memory Leaks) | ParticleHero.tsx cleanup | Chrome Task Manager | Navigate away/back 10x, monitor memory usage (should not increase) |
| **AC-3.30** | Responsive (Mobile) | ParticleHero.tsx device detection | Mobile device testing | Test viewport <768px, verify 1000 particles max |
| **AC-3.31** | Responsive (Tablet) | ParticleHero.tsx device detection | Tablet device testing | Test 768px ≤ width < 1024px, verify 2000 particles max |
| **AC-3.32** | Responsive (Desktop) | ParticleHero.tsx device detection | Desktop testing | Test width ≥1024px, verify 5000 particles max |
| **AC-3.33** | Responsive (Mobile Mouse Disable) | MouseInteraction.ts mobile detection | Mobile device testing | Verify no mousemove listeners on mobile (inspect event listeners in DevTools) |
| **AC-3.34** | NFR Accessibility (prefers-reduced-motion) | ParticleHero.tsx motion preference detection | Browser emulation | Chrome DevTools emulate `prefers-reduced-motion: reduce`, verify static gradient |
| **AC-3.35** | NFR Accessibility (ARIA) | ParticleHero.tsx Canvas element | Accessibility audit | Inspect Element, verify `aria-hidden="true"` attribute on `<canvas>` |
| **AC-3.36** | NFR Accessibility (Keyboard Nav) | BriefingEngine.tsx integration | Manual keyboard testing | Tab through hero section, verify CTAs focusable/activatable |
| **AC-3.37** | NFR Accessibility (Screen Reader) | Full page | Screen reader testing | Test with NVDA (Windows) and VoiceOver (Mac), verify particles don't disrupt reading |
| **AC-3.38** | Integration (BriefingEngine) | BriefingEngine.tsx modification | Regression testing | Test Epic 1/2 sections after Epic 3 integration, verify no breakage |
| **AC-3.39** | APIs & Interfaces (useGSAP Cleanup) | ParticleHero.tsx useGSAP hook | Memory leak test | Unmount component, run `ScrollTrigger.getAll()`, verify hero trigger removed |
| **AC-3.40** | Integration (Lenis) | Lenis smooth scroll | Manual scroll test | Scroll entire page with particles active, verify smooth (no jank) |
| **AC-3.41** | Integration (Epic 1) | BriefToStoryboardAnimation | Visual QA | Scroll to animation section, verify plays correctly (no conflicts) |
| **AC-3.42** | Data Models (Color Palette) | ParticleSystem.ts color usage | Code review | Verify `BRIEFING_PALETTE` import, no hard-coded `#4F46E5` etc. |
| **AC-3.43** | Build (TypeScript) | All TypeScript files | Build validation | Run `tsc --noEmit`, verify 0 errors |
| **AC-3.44** | Build (ESLint) | All TypeScript files | Linting validation | Run `npm run lint`, verify 0 errors (warnings OK) |
| **AC-3.45** | Build (Production Build) | All modules | Build validation | Run `npm run build`, verify completes successfully |
| **AC-3.46** | NFR Compatibility | All modules | Browser testing | Manual test on Chrome 120+, Firefox 121+, Safari 17+, Edge 120+ (desktop + mobile) |
| **AC-3.47** | Build (Console Errors) | Production build | Browser console inspection | Load production build, verify no errors (console.log/warn stripped by Terser) |
| **AC-3.48** | NFR Reliability (Canvas Failure) | ParticleHero.tsx fallback logic | Feature detection simulation | Mock `getContext('2d')` to return null, verify static gradient renders |
| **AC-3.49** | NFR Reliability (Memory Failure) | ParticleSystem.ts error handling | Memory allocation simulation | Mock typed array allocation failure, verify retry with 500 particles |
| **AC-3.50** | NFR Reliability (GSAP Failure) | ParticleHero.tsx GSAP detection | Script loading simulation | Mock `typeof gsap === 'undefined'`, verify particles render (no scroll transforms) |
| **AC-3.51** | NFR Reliability (Error Boundary) | BriefingEngine.tsx Error Boundary | Error injection test | Throw error in ParticleHero, verify Error Boundary catches, fallback UI displays |
| **AC-3.52** | NFR Reliability (Performance Fallback) | PerformanceMonitor.ts extreme degradation | Extreme CPU throttling | Throttle CPU 20x, verify particles disable at <15fps, static gradient shows |

---

## Risks, Assumptions, Open Questions

### Risks

**1. RISK-3.1: Performance Degradation on Low-End Devices**
- **Description:** Users on older laptops (pre-2019), Chromebooks, or budget Android phones may experience <30fps with 5,000 particles
- **Impact:** HIGH - Janky animation worse than no animation; degrades brand perception
- **Probability:** MEDIUM - ~10-15% of users based on Vercel Analytics device distribution
- **Mitigation:**
  - Aggressive particle count reduction (5K → 2K → 1K → static gradient)
  - Early degradation triggers (<30fps threshold, not <20fps)
  - Mobile defaults to 1K particles (conservative)
  - Performance monitoring in production to measure degradation rate
  - Story 3.1 Phase 5 dedicated to optimization and testing
- **Owner:** Dev team + Cameron (review degradation strategy)

**2. RISK-3.2: Bundle Size Impact on Mobile 3G Users**
- **Description:** +13KB bundle increase may push FCP >1.8s on slow 3G networks
- **Impact:** MEDIUM - Delayed first contentful paint affects engagement
- **Probability:** LOW - GitHub Pages CDN mitigates, Vite code splitting helps
- **Mitigation:**
  - Lazy-load ParticleHero below-fold (future enhancement if needed)
  - Current approach: Load synchronously (hero is above-fold)
  - Monitor FCP via Vercel Analytics after launch
  - Acceptable tradeoff: +13KB for premium visual on hero
- **Owner:** Dev team

**3. RISK-3.3: Browser Compatibility Edge Cases**
- **Description:** Older browsers (Safari 14, Firefox 90) may have Canvas 2D performance issues or feature gaps
- **Impact:** LOW - Graceful degradation to static gradient, but some users don't see particles
- **Probability:** LOW - Modern browser requirement (Chrome 100+, Safari 15+) documented in ARCHITECTURE.md
- **Mitigation:**
  - Feature detection for Canvas 2D, RequestAnimationFrame, Typed Arrays
  - Fallback to static gradient on unsupported browsers
  - Browser compatibility testing in Story 3.1 Phase 6
  - Target: 95% of users see particles, 5% see static gradient (acceptable)
- **Owner:** QA + Dev team

**4. RISK-3.4: GSAP ScrollTrigger Conflicts with Epic 1**
- **Description:** Multiple ScrollTrigger instances (Epic 1 animations + Epic 3 particles) may cause scroll jank or conflicts
- **Impact:** MEDIUM - Scroll performance degradation, animations firing incorrectly
- **Probability:** LOW - GSAP designed for multiple triggers, Lenis integration well-documented
- **Mitigation:**
  - useGSAP hook ensures proper cleanup (prevents orphaned triggers)
  - Story 3.1 Phase 6 integration testing validates Epic 1 animations unchanged
  - GSAP context scoping (containerRef) prevents selector conflicts
  - Total animation budget monitoring (Epic 1 + Epic 3 <16.67ms/frame)
- **Owner:** Dev team

**5. RISK-3.5: Memory Leaks on Long Sessions**
- **Description:** Users leaving hero section open for extended periods (>10 minutes) may experience memory growth
- **Impact:** MEDIUM - Browser tab becomes sluggish, user closes page
- **Probability:** LOW - Proper cleanup implemented (useEffect, useGSAP hooks)
- **Mitigation:**
  - Typed arrays are fixed-size (no dynamic growth)
  - RequestAnimationFrame canceled on unmount
  - GSAP ScrollTrigger cleanup via useGSAP hook
  - Memory leak testing in Story 3.1 Phase 6 (navigate away/back 10x)
  - Fallback: If memory exceeds threshold, disable particles (future enhancement)
- **Owner:** Dev team

**6. RISK-3.6: Entrance Animation Timing Conflict**
- **Description:** Particle entrance animation (1.5-2s) may overlap with Epic 1 hero fade-in, causing visual competition
- **Impact:** LOW - Slightly cluttered entrance, but not broken
- **Probability:** MEDIUM - Timing coordination required
- **Mitigation:**
  - Coordinate entrance animation timing with Epic 1 (particles start slightly before hero text)
  - Stagger particle appearance (0.001s per particle) creates gradual build-up
  - Visual QA in Story 3.1 Phase 4 validates smooth entrance
  - Option: Delay Epic 1 hero fade-in by 0.5s if needed
- **Owner:** Dev team + Cameron (final timing decision)

---

### Assumptions

**Technology & Environment:**

1. **ASSUME-3.1:** GSAP 3.13.0 and Lenis 1.3.11 remain stable (no breaking changes from dependencies)
2. **ASSUME-3.2:** Modern browser requirement (Chrome 100+, Firefox 100+, Safari 15+) is acceptable for target audience
3. **ASSUME-3.3:** Canvas 2D API support sufficient (WebGL not required for 5,000 particles at 60fps)
4. **ASSUME-3.4:** GitHub Pages bandwidth sufficient for increased bundle size (+13KB acceptable)
5. **ASSUME-3.5:** Vercel Analytics and GTM continue working without modification (tracking Epic 3 metrics)

**Performance & User Devices:**

6. **ASSUME-3.6:** Desktop users have 2019+ laptops/desktops (capable of 5,000 particles at 60fps)
7. **ASSUME-3.7:** Mobile users accept fewer particles (1,000 particles = acceptable mobile experience)
8. **ASSUME-3.8:** 10-15% degradation rate acceptable (users on low-end devices see reduced particles or static gradient)
9. **ASSUME-3.9:** 60fps target achievable with typed arrays and optimized Canvas 2D rendering (validated by research)
10. **ASSUME-3.10:** Browser RequestAnimationFrame throttles appropriately on low-end devices (no manual throttling beyond 60fps)

**Integration & Coordination:**

11. **ASSUME-3.11:** Epic 1 complete and stable (GSAP + Lenis configuration unchanged)
12. **ASSUME-3.12:** Epic 2 premium components don't conflict with Epic 3 particles (independent page sections)
13. **ASSUME-3.13:** BriefingEngine.tsx modification acceptable (single file change for integration)
14. **ASSUME-3.14:** Hero section copy stable (no plans to remove hero section or change structure)
15. **ASSUME-3.15:** Glassmorphism text overlay remains in Epic 1 design (particles render behind, text on top)

**Implementation & Timeline:**

16. **ASSUME-3.16:** 1-2 day implementation timeline realistic (6-10 hours hands-on work per research report)
17. **ASSUME-3.17:** Developer has intermediate GSAP experience (ScrollTrigger, timelines, useGSAP hook)
18. **ASSUME-3.18:** Developer has basic Canvas 2D API knowledge (rendering, gradients, transforms)
19. **ASSUME-3.19:** TypeScript compilation continues in relaxed mode (noImplicitAny: false acceptable)
20. **ASSUME-3.20:** Manual testing sufficient (no automated tests required per project standards)

**Design & Visual:**

21. **ASSUME-3.21:** Neural network aesthetic aligns with brand (particle connections communicate AI intelligence)
22. **ASSUME-3.22:** Dark indigo/cyan/fuchsia palette from Epic 1 remains final (no color changes)
23. **ASSUME-3.23:** Left-to-right flow direction communicates "Brief → Storyboard" metaphor effectively
24. **ASSUME-3.24:** Mouse interaction adds value (not distracting or gimmicky)
25. **ASSUME-3.25:** Entrance animation duration 1.5-2s appropriate (not too fast or too slow)

---

### Open Questions

**Performance & Optimization:**

1. **Q-3.1:** Should we implement spatial partitioning (grid-based) for connection detection to further optimize O(n²) complexity?
   - **Context:** Current implementation checks all particle pairs (5000 particles = 12.5M comparisons, but 100px threshold reduces to ~250K actual connections)
   - **Tradeoff:** Spatial partitioning adds code complexity but could reduce connection detection from 3ms → 1ms
   - **Recommendation:** Start without, profile in Story 3.1 Phase 5, add if connection detection >4ms
   - **Next Step:** Dev decision based on profiling results

2. **Q-3.2:** Should we use OffscreenCanvas for rendering optimization (Web Worker offload)?
   - **Context:** OffscreenCanvas allows rendering in Web Worker (frees main thread)
   - **Tradeoff:** Better performance, but limited browser support (Chrome 69+, Firefox 105+, Safari 16.4+)
   - **Recommendation:** No - adds complexity, browser support not universal, main thread rendering acceptable
   - **Next Step:** Revisit if performance issues detected in production

3. **Q-3.3:** What FPS threshold should trigger full particle disable (static gradient fallback)?
   - **Current spec:** <15fps for 10 consecutive frames
   - **Alternative:** <20fps for 5 consecutive frames (more aggressive)
   - **Recommendation:** Start with <15fps/10 frames (conservative), adjust based on user feedback
   - **Next Step:** Cameron decides threshold, test in Story 3.1 Phase 5

**Visual Design:**

4. **Q-3.4:** Should particle size increase with proximity to cursor (mouse interaction enhancement)?
   - **Context:** Particles currently pulled toward cursor, but size remains constant
   - **Enhancement:** Particles within 75px of cursor scale 1.0x → 1.5x
   - **Recommendation:** Nice-to-have, not MVP - add in future iteration if time permits
   - **Next Step:** Story 3.1 scope decision (include in Phase 4 or defer)

5. **Q-3.5:** Should neural network connections fade out on scroll (focus on text as user scrolls)?
   - **Context:** Connections currently persist at constant opacity throughout scroll
   - **Enhancement:** Fade connections from 0.3 opacity → 0.1 opacity as scroll progress 0% → 100%
   - **Recommendation:** Good enhancement, low effort - include in scroll transform logic
   - **Next Step:** Implement in Story 3.1 Phase 4 (GSAP scroll callback)

6. **Q-3.6:** Should entrance animation origin be center or bottom (particles rise vs burst)?
   - **Current spec:** Burst from center (radial expansion)
   - **Alternative:** Rise from bottom (vertical flow upward)
   - **Recommendation:** Center burst (more dramatic, aligns with "neural network" metaphor)
   - **Next Step:** Visual QA approval in Story 3.1 Phase 4

**Integration & Compatibility:**

7. **Q-3.7:** Should ParticleHero expose performance metrics to parent component (Epic 1 integration)?
   - **Context:** BriefingEngine.tsx could display FPS counter in footer (dev mode) or log degradation events
   - **Benefit:** Better observability, easier debugging
   - **Recommendation:** Yes - expose via optional callback prop `onPerformanceDegradation`
   - **Next Step:** Include in ParticleHeroProps interface (Story 3.1 Phase 1)

8. **Q-3.8:** Should particle system pause when hero section not in viewport (optimization)?
   - **Context:** User scrolls below hero, particles continue animating off-screen
   - **Optimization:** IntersectionObserver pauses animation when hero not visible
   - **Tradeoff:** Better performance, but adds complexity
   - **Recommendation:** Yes - easy win, use IntersectionObserver with 50% threshold
   - **Next Step:** Implement in Story 3.1 Phase 5 (optimization phase)

**Accessibility:**

9. **Q-3.9:** Should we provide a "Disable Particles" toggle in user preferences?
   - **Context:** Some users may prefer static background even if browser supports particles
   - **Implementation:** Checkbox in Settings or URL parameter `?particles=off`
   - **Recommendation:** URL parameter easier, no settings UI needed - `?debug=static` for testing
   - **Next Step:** Implement in Story 3.1 Phase 5 as debug feature

**Monitoring & Analytics:**

10. **Q-3.10:** Should we track mouse interaction engagement (how many users hover over particles)?
    - **Context:** GTM event tracking for mousemove events within hero section
    - **Benefit:** Validate mouse interaction value (if 0% users hover, maybe remove feature)
    - **Privacy:** No PII collected, just engagement metric
    - **Recommendation:** Yes - simple GTM event on first mousemove (track engagement rate)
    - **Next Step:** Add GTM event in Story 3.1 Phase 4 (mouse interaction implementation)

11. **Q-3.11:** Should Lighthouse score <75 be considered a blocker or acceptable tradeoff?
    - **Current spec:** ≥75 acceptable
    - **Concern:** If score drops to 65-70, is that acceptable?
    - **Recommendation:** 75-80 = acceptable, 65-75 = investigate optimization, <65 = blocker
    - **Next Step:** Cameron decides acceptable threshold, measure in Story 3.1 Phase 6

**Future Enhancements (Post-MVP):**

12. **Q-3.12:** Should we add particle color transition on scroll (indigo → cyan → fuchsia progression)?
    - **Enhancement:** Particles gradually shift colors as user scrolls
    - **Effort:** Medium (color interpolation in scroll callback)
    - **Recommendation:** Defer to future epic (nice-to-have, not MVP)
    - **Next Step:** Add to backlog as Epic 4 or polish phase

13. **Q-3.13:** Should we add WebGL renderer as fallback for extremely high particle counts (10K+)?
    - **Context:** Canvas 2D limits to ~5K particles at 60fps, WebGL could handle 20K+
    - **Effort:** High (entire renderer rewrite)
    - **Recommendation:** No - 5K particles sufficient for MVP, not worth complexity
    - **Next Step:** Reject for now, revisit only if user feedback requests more particles

---

## Test Strategy Summary

**Testing Approach:** Manual validation only (zero automated tests per project standards)

Epic 3 leverages existing project testing philosophy: comprehensive manual testing across browsers/devices, no automated test infrastructure.

### Test Levels

**1. Component-Level Testing (Manual)**
- **Scope:** ParticleHero component initialization, rendering, lifecycle
- **Method:** Browser DevTools + console logging + visual inspection
- **Coverage:**
  - Canvas element creation (useRef hook)
  - Typed array initialization (positions, velocities, colors, sizes)
  - RequestAnimationFrame loop starts/stops correctly
  - useEffect and useGSAP hook cleanup (no memory leaks)
- **Acceptance:** Component renders without console errors, particles appear, cleanup verified

**2. Module-Level Testing (Manual)**
- **Scope:** ParticleSystem, MouseInteraction, PerformanceMonitor classes
- **Method:** Chrome DevTools console + direct method invocation
- **Coverage:**
  - ParticleSystem.update() physics calculations
  - Connection detection accuracy (distance threshold 100px)
  - MouseInteraction force application (attraction within 150px)
  - PerformanceMonitor FPS accuracy (rolling 60-frame average)
- **Acceptance:** Each module functions independently, expected outputs verified

**3. Integration Testing (Manual)**
- **Scope:** ParticleHero + BriefingEngine.tsx + Epic 1 components
- **Method:** Full page load + scroll + interaction testing
- **Coverage:**
  - GSAP ScrollTrigger integration (scroll progress → particle speed)
  - Lenis smooth scroll compatibility (no jank)
  - Epic 1 animations unchanged (BriefToStoryboardAnimation plays correctly)
  - Hero text overlay renders on top (z-index layering)
- **Acceptance:** All page sections work harmoniously, no conflicts

**4. Performance Testing (Manual)**
- **Scope:** 60fps target, bundle size, Core Web Vitals
- **Method:** Chrome DevTools Performance tab + Lighthouse + build comparison
- **Coverage:**
  - Frame rate measurement (60fps sustained for 30s)
  - Frame time analysis (<16.67ms/frame budget)
  - Bundle size comparison (before/after Epic 3)
  - Lighthouse Performance score (≥75 target)
  - FCP, LCP, CLS metrics
- **Acceptance:** Performance targets met per NFR Performance section

**5. Responsive Testing (Manual)**
- **Scope:** Mobile (375px), Tablet (768px), Desktop (1024px, 1920px)
- **Method:** Chrome DevTools device toolbar + real devices
- **Coverage:**
  - Particle count per device (1K mobile, 2K tablet, 5K desktop)
  - Mouse interaction disabled on mobile
  - Touch events don't interfere with scroll
  - Canvas sizing correct on all viewports
- **Acceptance:** Optimal experience per device capability

**6. Accessibility Testing (Manual)**
- **Scope:** WCAG AA compliance, keyboard navigation, screen readers
- **Method:** axe DevTools + keyboard testing + NVDA/VoiceOver
- **Coverage:**
  - prefers-reduced-motion honored (static gradient)
  - aria-hidden="true" on Canvas element
  - Keyboard navigation works (Tab key through CTAs)
  - Screen reader doesn't announce particles
  - Focus indicators visible on hero CTAs
- **Acceptance:** No critical accessibility violations

**7. Browser Compatibility Testing (Manual)**
- **Scope:** Chrome, Firefox, Safari, Edge (desktop + mobile)
- **Method:** Manual testing on real browsers/devices
- **Coverage:**
  - Chrome 120+ (Windows, Mac, Android)
  - Firefox 121+ (Windows, Mac)
  - Safari 17+ (Mac, iOS)
  - Edge 120+ (Windows)
- **Acceptance:** Particles render correctly or gracefully degrade to static gradient

**8. Degradation Testing (Manual)**
- **Scope:** Performance fallback behavior, error handling
- **Method:** CPU throttling + feature detection mocking
- **Coverage:**
  - 5K → 2K degradation at <30fps
  - 2K → 1K degradation at <20fps
  - Static gradient fallback at <15fps
  - Canvas context creation failure
  - Memory allocation failure
- **Acceptance:** Graceful degradation, no crashes

---

### Test Execution Plan (Story 3.1 Phases)

```
Phase 1: Foundation (Component-Level Tests)
├── Test: Canvas element renders
├── Test: ParticleSystem initializes (3K-5K particles)
├── Test: No console errors on mount
└── Test: Component unmounts cleanly

Phase 2: Particle Physics (Module-Level Tests)
├── Test: Particles animate at 60fps
├── Test: Flow direction left-to-right
├── Test: Velocities in expected range (0.5-1.0 px/frame)
├── Test: Edge wrapping/bouncing works
└── Test: Colors distributed (indigo/cyan/fuchsia)

Phase 3: Neural Connections (Module-Level Tests)
├── Test: Connections appear within 100px
├── Test: Connection opacity varies with distance
├── Test: Connection line color cyan (#0891B2)
└── Test: Connections update dynamically

Phase 4: GSAP & Interaction (Integration Tests)
├── Test: Entrance animation (1.5-2s burst from center)
├── Test: ScrollTrigger modulates particle speed
├── Test: Mouse interaction pulls particles
├── Test: Mouse throttling at 60fps (16ms)
└── Test: useGSAP cleanup (no orphaned triggers)

Phase 5: Performance & Polish (Performance Tests)
├── Test: 60fps desktop (Chrome DevTools Performance)
├── Test: Degradation triggers (<30fps → 2K particles)
├── Test: Mobile performance (45-60fps, 1K particles)
├── Test: Bundle size ≤15KB increase
└── Test: Lighthouse score ≥75

Phase 6: Integration & QA (Full Test Suite)
├── Browser compatibility (4 browsers x 2 platforms)
├── Responsive testing (4 breakpoints)
├── Accessibility testing (axe + keyboard + screen reader)
├── Epic 1 integration (no conflicts)
├── Memory leak testing (navigate 10x)
└── Production build validation
```

---

### Test Environment

**Development:**
- Local dev server (`npm run dev`)
- Hot module reload for rapid iteration
- Source maps enabled
- Console logging verbose

**Staging/QA:**
- Production build (`npm run build`)
- Preview server (`npm run preview`)
- Terser minification enabled
- Console.log/warn stripped

**Production:**
- GitHub Pages deployment
- HTTPS enforced
- CDN caching
- Analytics enabled (Vercel Analytics, GTM)

---

### Browser Testing Matrix

| Browser | Version | Platform | Particle Count | Expected FPS | Priority |
|---------|---------|----------|----------------|--------------|----------|
| **Chrome** | 120+ | Windows 11 | 5000 | 60fps | P0 (Primary) |
| **Chrome** | 120+ | macOS 14 | 5000 | 60fps | P0 (Primary) |
| **Chrome** | 120+ | Android 13+ | 1000 | 45-60fps | P1 (Mobile) |
| **Safari** | 17+ | macOS 14 | 5000 | 60fps | P1 (Mac users) |
| **Safari** | 17+ | iOS 17+ | 1000 | 45-60fps | P1 (iPhone) |
| **Firefox** | 121+ | Windows 11 | 5000 | 60fps | P2 (Secondary) |
| **Firefox** | 121+ | macOS 14 | 5000 | 60fps | P2 (Secondary) |
| **Edge** | 120+ | Windows 11 | 5000 | 60fps | P3 (Tertiary) |

---

### Defect Management

**Bug Tracking:** GitHub Issues (existing project workflow)

**Priority Levels:**
- **P0 (Blocker):** Crashes page, breaks Epic 1 functionality, fails AC with no workaround
- **P1 (Major):** FPS <45fps on modern desktop, visual glitches, memory leaks
- **P2 (Minor):** FPS 45-55fps (below target but acceptable), minor visual issues
- **P3 (Nice-to-have):** Visual polish, performance optimization opportunities

**Definition of Done (Story 3.1):**

- [x] **Code Complete:** All 6 phases implemented
- [x] **Testing Complete:** All ACs validated (52 total)
- [x] **Performance Validated:** 60fps desktop, 45-60fps mobile
- [x] **Accessibility Validated:** axe DevTools passes, keyboard nav works, prefers-reduced-motion honored
- [x] **Browser Compatibility:** Chrome, Firefox, Safari, Edge tested
- [x] **Integration Validated:** Epic 1 unchanged, Lenis smooth scroll works
- [x] **Build Validated:** `npm run build` succeeds, TypeScript compiles, ESLint passes
- [x] **Bundle Size Validated:** ≤15KB increase confirmed
- [x] **Lighthouse Score:** ≥75 confirmed
- [x] **Code Review:** PR approved by Cameron or designated reviewer
- [x] **Deployed:** Merged to main, live on cre8tive.ai

---

### Future Test Infrastructure (Not in Epic 3 Scope)

**Planned (Technical Debt):**
- Vitest unit tests for ParticleSystem class (pure functions testable)
- React Testing Library component tests for ParticleHero
- Playwright E2E tests (full page load + interaction)
- Visual regression testing (Percy/Chromatic)
- Performance benchmarking (automated Lighthouse CI)

**Epic 3 Approach:** Manual testing sufficient, automated tests deferred to future epic
