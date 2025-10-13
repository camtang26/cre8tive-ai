# cre8tive-website-1006 - Technical Specification
## Unified Voice Agent Widget

**Author:** Cameron
**Date:** 2025-10-10
**Project Level:** Level 0
**Project Type:** Single atomic change
**Development Context:** Greenfield component (refactoring existing widgets)

---

## Executive Summary

This specification defines a unified voice agent widget that combines two separate call-to-action elements (FloatingCallButton + ElevenLabs ConvAI widget) into a single, premium expandable component. The solution implements **Pattern A: Expandable Widget** (scored 54/60 by UX research), delivering a clean collapsed state that expands to reveal two clear communication options.

**Problem Statement:** Current implementation has two visually stacked widgets in the bottom-right corner, creating visual clutter and suboptimal mobile UX.

**Solution:** Single FAB (Floating Action Button) that expands upward to reveal two option cards: (1) Traditional phone call, (2) AI voice agent.

**Expected Outcome:** Reduced visual footprint, improved mobile UX, maintained accessibility, premium polished aesthetic.

---

## Source Tree Structure

### New Files Created

```
src/components/voice/
├── UnifiedVoiceWidget.tsx          # Main expandable widget component (250 LOC)
├── VoiceWidgetFAB.tsx              # Collapsed FAB button (80 LOC)
├── VoiceOptionCard.tsx             # Individual option card component (120 LOC)
├── useVoiceWidget.ts               # State management hook (150 LOC)
├── useElevenLabsControl.ts         # ElevenLabs visibility control hook (60 LOC)
└── voice-widget.types.ts           # TypeScript type definitions (50 LOC)

src/config/
└── voice-widget.config.ts          # Widget configuration constants (20 LOC)
```

**Total New Code:** ~730 LOC

### Modified Files

```
src/components/layout/MainLayout.tsx            # Replace FloatingCallButton + elevenlabs-convai
src/components/shared/FloatingCallButton.tsx    # DEPRECATED - archived, not deleted
src/pages/ConversationalAI.tsx                  # Keep page-specific elevenlabs-convai element
```

###File Modification Details

**MainLayout.tsx** (lines 1-27):
```diff
- import { FloatingCallButton } from '../shared/FloatingCallButton';
+ import { UnifiedVoiceWidget } from '../voice/UnifiedVoiceWidget';
+ import { VOICE_WIDGET_CONFIG } from '@/config/voice-widget.config';

  export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
      <div className="min-h-screen flex flex-col bg-black">
        ...
        <Footer />
-       <FloatingCallButton />
-       <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
+       <UnifiedVoiceWidget config={VOICE_WIDGET_CONFIG} />
      </div>
    );
  };
```

**FloatingCallButton.tsx:**
- Add deprecation comment at top of file
- Do NOT delete (maintain for rollback capability)
- Archive pattern: Comment explaining replacement with UnifiedVoiceWidget

**ConversationalAI.tsx:**
- NO CHANGES (keep page-specific `<elevenlabs-convai>` for agent demo)

---

## Technical Approach

### UI Pattern: Expandable Widget (Pattern A)

**Why This Pattern?**
- Research Score: 54/60 (highest-rated pattern)
- Minimal visual footprint when collapsed
- Progressive disclosure reduces cognitive load
- Excellent mobile UX with clear touch targets
- Aligns with modern communication widgets (Intercom, Drift, HubSpot)
- Full WCAG 2.2 AA compliance achievable

**User Interaction Flow:**

```
User Journey:
1. Page loads → Single FAB visible (collapsed state)
2. User clicks/taps FAB → Widget expands upward showing 2 option cards
3. User selects option:
   a) Phone Call → Initiates tel: link, widget collapses
   b) AI Agent → Hides unified widget, shows ElevenLabs widget
4. Auto-collapse after 5s of inactivity (if no selection made)
5. Click outside → Widget collapses
```

**State Machine:**

```
┌──────────┐     click/tap      ┌──────────┐
│collapsed │ ─────────────────> │expanded  │
└──────────┘                    └──────────┘
     ↑                               │
     │                               │ select option
     │                               ↓
     │                          ┌────────────────┐
     │                          │ active-phone   │
     │                          │ OR             │
     │                          │ active-agent   │
     │                          └────────────────┘
     │                               │
     │                               │ action complete
     └───────────────────────────────┘
```

### Component Architecture

**Component Hierarchy:**

```typescript
<UnifiedVoiceWidget config={config}>
  {/* Collapsed State - AnimatePresence for exit animation */}
  <AnimatePresence mode="wait">
    {state === 'collapsed' && (
      <VoiceWidgetFAB
        onClick={toggleExpanded}
        ariaExpanded={false}
      />
    )}
  </AnimatePresence>

  {/* Expanded State - AnimatePresence for enter/exit */}
  <AnimatePresence>
    {state === 'expanded' && (
      <motion.div
        layout
        className="glass-card-medium"
      >
        {/* Option Cards - Staggered Animation */}
        <VoiceOptionCard
          custom={0}
          type="phone"
          icon={<Phone />}
          label="Call Agent Mobile"
          description="+61 7 5625 8275"
          onClick={handlePhoneCall}
        />
        <VoiceOptionCard
          custom={1}
          type="agent"
          icon={<Bot />}
          label="Talk To Our AI Agent"
          description="24/7 voice assistance"
          onClick={handleAgentLaunch}
        />
      </motion.div>
    )}
  </AnimatePresence>

  {/* ElevenLabs Widget - Visibility Controlled */}
  <elevenlabs-convai
    agent-id={config.agentId}
    style={{ display: showElevenLabs ? 'block' : 'none' }}
  />
</UnifiedVoiceWidget>
```

**Data Flow:**

```
User Action → useVoiceWidget Hook → State Update → Component Re-render
                    ↓
            useElevenLabsControl Hook
                    ↓
        ElevenLabs Widget Visibility
```

### ElevenLabs Integration Strategy

**Challenge:**
ElevenLabs ConvAI widget has limited public JavaScript API for programmatic control.

**Research Findings:**
- Widget supports HTML attributes: `variant`, `placement`, `expandable`
- Limited programmatic methods exposed
- Custom element handles own UI when visible
- Best practice: Control visibility externally, let widget manage internal state

**Solution: CSS Visibility Control**

```typescript
// Keep <elevenlabs-convai> in DOM permanently
// Control visibility via CSS display property
<elevenlabs-convai
  agent-id={config.agentId}
  style={{
    display: showElevenLabs ? 'block' : 'none',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 50,
  }}
/>
```

**Why Not Remove From DOM?**
- Widget initialization is async (connection setup, websocket)
- Remounting causes 2-3 second delay
- Memory impact minimal (widget is lightweight)
- Performance: Toggle visibility > mount/unmount

**Widget Lifecycle:**
1. Component mount → ElevenLabs widget added to DOM (hidden)
2. User selects AI Agent → `display: block`
3. User dismisses widget → `display: none`
4. Widget maintains connection while hidden (instant resume)

---

## Implementation Stack

### Core Dependencies (Already Installed ✅)

| Dependency | Version | Purpose |
|------------|---------|---------|
| **React** | v18.3.1 | Component framework |
| **TypeScript** | v5.6.2 | Type safety |
| **Framer Motion** | v11.11.17 | Layout animations, spring physics |
| **Tailwind CSS** | v3.4.15 | Utility-first styling |
| **Vite** | v5.4.11 | Build tool & dev server |
| **Lucide React** | (installed) | Icons (Phone, Bot, X) |

**No New Dependencies Required** ✅

### Browser Support Matrix

| Browser | Version | Priority | Notes |
|---------|---------|----------|-------|
| Chrome | 120+ | Primary | 60% market share |
| Firefox | 120+ | Secondary | Full support |
| Safari | 17+ | Tertiary | iOS primary |
| Edge | 120+ | Tertiary | Chromium-based |
| iOS Safari | 17+ | Mobile Primary | iPhone/iPad |
| Chrome Android | 120+ | Mobile Primary | Android devices |
| Samsung Internet | Latest | Mobile Secondary | Samsung devices |

**Feature Requirements:**
- CSS `backdrop-filter` (glass morphism)
- ES2020+ JavaScript
- Web Components (elevenlabs-convai custom element)
- Framer Motion layout animations

---

## Technical Details

### Type Definitions (voice-widget.types.ts)

```typescript
/**
 * Voice widget state machine states
 */
export type VoiceWidgetState =
  | 'collapsed'    // Default: FAB visible, options hidden
  | 'expanded'     // FAB expanded, both option cards visible
  | 'active-phone' // Phone call initiated (tel: link)
  | 'active-agent'; // ElevenLabs widget active and visible

/**
 * Communication option types
 */
export type VoiceOptionType = 'phone' | 'agent';

/**
 * Single voice option configuration
 */
export interface VoiceOption {
  id: VoiceOptionType;
  icon: React.ReactNode;
  label: string;
  description: string;
  ariaLabel: string;
  primary?: boolean; // Visually emphasize this option
}

/**
 * Widget configuration
 */
export interface VoiceWidgetConfig {
  phoneNumber: string;          // tel: format (no spaces): '+61756258275'
  displayNumber: string;         // Formatted for display: '+61 7 5625 8275'
  agentId: string;               // ElevenLabs agent ID
  autoCollapseDelay?: number;    // Milliseconds before auto-collapse (default: 5000)
  position?: 'bottom-right' | 'bottom-left'; // Widget position (default: bottom-right)
}

/**
 * Main widget component props
 */
export interface VoiceWidgetProps {
  config: VoiceWidgetConfig;
  onStateChange?: (state: VoiceWidgetState) => void; // Optional analytics callback
  defaultState?: VoiceWidgetState; // Override initial state (default: collapsed)
  className?: string; // Additional Tailwind classes
}

/**
 * Option card component props
 */
export interface VoiceOptionCardProps {
  type: VoiceOptionType;
  icon: React.ReactNode;
  label: string;
  description: string;
  onClick: () => void;
  custom?: number; // For staggered animations
  ariaLabel?: string;
}

/**
 * FAB component props
 */
export interface VoiceWidgetFABProps {
  onClick: () => void;
  ariaExpanded: boolean;
  isPulsing?: boolean; // Enable pulse glow animation
}
```

### State Management Hook (useVoiceWidget.ts)

```typescript
import { useState, useCallback, useRef, useEffect } from 'react';
import type { VoiceWidgetConfig, VoiceWidgetState } from './voice-widget.types';

export const useVoiceWidget = (config: VoiceWidgetConfig) => {
  const [state, setState] = useState<VoiceWidgetState>('collapsed');
  const [showElevenLabs, setShowElevenLabs] = useState(false);
  const collapseTimerRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Schedule auto-collapse after inactivity delay
   */
  const scheduleCollapse = useCallback(() => {
    // Clear existing timer
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
    }

    // Only auto-collapse from expanded state
    if (state === 'expanded') {
      collapseTimerRef.current = setTimeout(() => {
        setState('collapsed');
      }, config.autoCollapseDelay || 5000);
    }
  }, [state, config.autoCollapseDelay]);

  /**
   * Handle click outside widget to collapse
   */
  const handleClickOutside = useCallback(() => {
    // Don't collapse if ElevenLabs widget is active
    if (state === 'expanded' && !showElevenLabs) {
      setState('collapsed');
    }
  }, [state, showElevenLabs]);

  /**
   * Handle phone call option selection
   */
  const handlePhoneCall = useCallback(() => {
    setState('active-phone');
    // Initiate phone call
    window.location.href = `tel:${config.phoneNumber}`;
    // Return to collapsed after tel: link handled
    setTimeout(() => setState('collapsed'), 300);
  }, [config.phoneNumber]);

  /**
   * Handle AI agent option selection
   */
  const handleAgentLaunch = useCallback(() => {
    setState('active-agent');
    setShowElevenLabs(true);
    // Note: User must dismiss ElevenLabs widget to return to collapsed state
  }, []);

  /**
   * Toggle between collapsed and expanded states
   */
  const toggleExpanded = useCallback(() => {
    if (state === 'collapsed') {
      setState('expanded');
      scheduleCollapse();
    } else if (state === 'expanded') {
      setState('collapsed');
    }
  }, [state, scheduleCollapse]);

  /**
   * Programmatic collapse (for external control)
   */
  const collapse = useCallback(() => {
    setState('collapsed');
    setShowElevenLabs(false);
  }, []);

  /**
   * Cleanup timer on unmount
   */
  useEffect(() => {
    return () => {
      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
      }
    };
  }, []);

  /**
   * Re-schedule collapse timer when state changes to expanded
   */
  useEffect(() => {
    if (state === 'expanded') {
      scheduleCollapse();
    }
  }, [state, scheduleCollapse]);

  return {
    state,
    showElevenLabs,
    toggleExpanded,
    handlePhoneCall,
    handleAgentLaunch,
    handleClickOutside,
    collapse,
  };
};
```

### Animation Configuration

```typescript
// animation.config.ts

/**
 * Framer Motion animation configuration
 * Using spring physics for natural, premium feel
 */
export const ANIMATION_CONFIG = {
  // Spring animation (default for layout changes)
  spring: {
    type: "spring" as const,
    stiffness: 300,  // Higher = snappier
    damping: 30,      // Higher = less bounce
  },

  // Stagger children animations
  stagger: {
    staggerChildren: 0.1,      // 100ms delay between children
    delayChildren: 0.05,        // 50ms initial delay
  },

  // Duration-based animations (fallback)
  duration: {
    enter: 0.3,  // 300ms enter
    exit: 0.2,   // 200ms exit
  },
} as const;

/**
 * FAB size constants (WCAG AAA: 44x44px minimum)
 */
export const FAB_SIZE = {
  mobile: 56,    // 56x56px (exceeds WCAG AAA)
  desktop: 64,   // 64x64px (larger for desktop hover precision)
} as const;

/**
 * Expanded container dimensions
 */
export const EXPANDED_SIZE = {
  mobile: {
    width: 280,
    minHeight: 200,
  },
  desktop: {
    width: 320,
    minHeight: 240,
  },
} as const;

/**
 * Z-index layer system
 */
export const Z_INDEX = {
  widget: 50,           // Widget base layer
  elevenLabs: 50,       // ElevenLabs widget (same level)
  backdrop: 40,         // Optional backdrop
} as const;
```

### Framer Motion Variants

```typescript
// animation.variants.ts

/**
 * FAB button layout animation
 * Expands from circular button to rectangular container
 */
export const fabVariants = {
  collapsed: {
    width: FAB_SIZE.mobile,
    height: FAB_SIZE.mobile,
    borderRadius: FAB_SIZE.mobile / 2, // Circular
    transition: ANIMATION_CONFIG.spring,
  },
  expanded: {
    width: EXPANDED_SIZE.mobile.width,
    height: "auto",
    borderRadius: 20, // Rounded rectangle
    transition: ANIMATION_CONFIG.spring,
  },
};

/**
 * Desktop-specific FAB animation
 */
export const fabVariantsDesktop = {
  collapsed: {
    width: FAB_SIZE.desktop,
    height: FAB_SIZE.desktop,
    borderRadius: FAB_SIZE.desktop / 2,
    transition: ANIMATION_CONFIG.spring,
  },
  expanded: {
    width: EXPANDED_SIZE.desktop.width,
    height: "auto",
    borderRadius: 20,
    transition: ANIMATION_CONFIG.spring,
  },
};

/**
 * Option card stagger animation
 * Cards fade in and slide up with stagger delay
 */
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,       // Start 20px below
    scale: 0.9,  // Slightly smaller
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.1,  // Stagger: 0ms, 100ms
      ...ANIMATION_CONFIG.spring,
    },
  }),
  exit: {
    opacity: 0,
    y: 10,       // Slide down slightly
    scale: 0.95,
    transition: {
      duration: ANIMATION_CONFIG.duration.exit,
    },
  },
};

/**
 * Glow pulse animation (collapsed FAB)
 * Continuous subtle pulse to draw attention
 */
export const glowPulseVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Icon rotation animation (FAB icon)
 * Subtle rotation on state change
 */
export const iconRotateVariants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 },
  transition: ANIMATION_CONFIG.spring,
};
```

### Styling Approach

**Design System Integration:**

The component maintains 100% consistency with the existing Cre8tive AI design system:

```typescript
// Glass Morphism Classes (from src/styles/base.css)
const styles = {
  // Collapsed FAB
  fab: "glass-card-heavy border border-cyan-400/20 hover:border-cyan-400/40",

  // Expanded container
  container: "glass-card-medium border border-cyan-400/30",

  // Option cards
  card: "glass-card-light hover:glass-card-medium border border-cyan-400/20",

  // Text gradients
  label: "gradient-text", // Blue→Cyan→Teal gradient

  // Shadow glows
  glow: "shadow-glow-cyan", // Cyan glow on hover
};
```

**Color Palette (from base.css):**
- **Primary Cyan:** `#06B6D4` (--secondary)
- **Primary Blue:** `#3B82F6` (--primary-bright)
- **Teal:** `#14B8A6` (--teal)
- **White:** `#FFFFFF` (text, icons)
- **Near Black:** `#050505` (--background)

**Responsive Layout:**

```css
/* Mobile (default) */
.voice-widget {
  @apply fixed bottom-20 right-8 z-50;
  width: 56px;
  height: 56px;
}

/* Desktop (md: 768px+) */
@media (min-width: 768px) {
  .voice-widget {
    @apply right-12;
    width: 64px;
    height: 64px;
  }
}

/* Expanded State (mobile) */
.voice-widget.expanded {
  width: 280px;
  height: auto;
}

/* Expanded State (desktop) */
@media (min-width: 768px) {
  .voice-widget.expanded {
    width: 320px;
  }
}
```

### Accessibility Implementation

**WCAG 2.2 Level AA Compliance:**

**1. Keyboard Navigation:**

```typescript
const handleKeyDown = (e: React.KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
    case ' ': // Space key
      e.preventDefault();
      toggleExpanded();
      break;

    case 'Escape':
      if (state === 'expanded') {
        setState('collapsed');
      }
      break;

    case 'ArrowDown':
      if (state === 'expanded') {
        e.preventDefault();
        // Focus next option card
        focusNextOption();
      }
      break;

    case 'ArrowUp':
      if (state === 'expanded') {
        e.preventDefault();
        // Focus previous option card
        focusPreviousOption();
      }
      break;

    case 'Tab':
      // Allow natural tab navigation
      // Don't trap focus unless modal-like behavior needed
      break;
  }
};
```

**2. ARIA Attributes:**

```jsx
<motion.button
  // Role
  role="button"

  // Labels
  aria-label="Voice communication options"
  aria-describedby="voice-widget-hint"

  // State
  aria-expanded={state === 'expanded'}
  aria-pressed={state !== 'collapsed'}

  // Relationships
  aria-controls="voice-options-menu"
  aria-haspopup="menu"

  // Event handlers
  onClick={toggleExpanded}
  onKeyDown={handleKeyDown}

  // Focus management
  tabIndex={0}
  autoFocus={false}
>
  {/* FAB content */}
</motion.button>

{/* Hidden hint for screen readers */}
<span id="voice-widget-hint" className="sr-only">
  Press Enter or Space to expand communication options
</span>

{/* Live region for state announcements */}
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {state === 'expanded' && 'Communication options expanded. Choose phone call or AI agent.'}
  {state === 'active-phone' && 'Initiating phone call'}
  {state === 'active-agent' && 'AI agent activated'}
</div>
```

**3. Focus Management:**

```typescript
const widgetRef = useRef<HTMLDivElement>(null);
const fabRef = useRef<HTMLButtonElement>(null);
const optionRefs = useRef<HTMLButtonElement[]>([]);

// Return focus to FAB when collapsing
useEffect(() => {
  if (state === 'collapsed' && fabRef.current) {
    fabRef.current.focus();
  }
}, [state]);

// Focus first option when expanding
useEffect(() => {
  if (state === 'expanded' && optionRefs.current[0]) {
    optionRefs.current[0].focus();
  }
}, [state]);
```

**4. Screen Reader Support:**

```jsx
{/* Option cards with descriptive labels */}
<button
  ref={(el) => (optionRefs.current[0] = el!)}
  aria-label="Call agent at +61 7 5625 8275"
  aria-describedby="phone-option-desc"
>
  <Phone aria-hidden="true" />
  <span className="gradient-text">Call Agent Mobile</span>
  <span id="phone-option-desc" className="text-sm text-white/70">
    +61 7 5625 8275
  </span>
</button>
```

**5. Touch Targets (WCAG 2.5.5/2.5.8):**

| Element | Mobile Size | Desktop Size | WCAG AAA |
|---------|-------------|--------------|----------|
| Collapsed FAB | 56x56px | 64x64px | ✅ Exceeds 44x44px |
| Option Cards | 280x80px | 320x80px | ✅ Exceeds 44x44px |
| Spacing | 8px gap | 8px gap | ✅ Prevents misclicks |

**6. Color Contrast (WCAG 1.4.3):**

| Element | Foreground | Background | Ratio | WCAG |
|---------|------------|------------|-------|------|
| White text | #FFFFFF | #050505 (bg) | 15:1 | ✅ AAA |
| Cyan border | #06B6D4 | #050505 (bg) | 7:1 | ✅ AAA |
| Icon | #FFFFFF | Glass card | 12:1 | ✅ AAA |
| Description text | #FFFFFF 70% | Glass card | 10:1 | ✅ AAA |

**7. Reduced Motion Support:**

```typescript
import { useReducedMotion } from 'framer-motion';

const VoiceWidget = () => {
  const prefersReducedMotion = useReducedMotion();

  const springConfig = prefersReducedMotion
    ? {
        type: "tween" as const,
        duration: 0.01, // Instant transition
      }
    : ANIMATION_CONFIG.spring;

  return (
    <motion.div
      variants={fabVariants}
      transition={springConfig}
    >
      {/* Widget content */}
    </motion.div>
  );
};
```

```css
/* CSS fallback for reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Development Setup

### Prerequisites

✅ **Already Met:**
- Node.js v18+ (current: v22+)
- npm v10+
- Git installed
- Code editor (VS Code recommended)
- Chrome DevTools for testing

✅ **Project Dependencies:**
All required dependencies already installed via `package.json`:
- React, TypeScript, Vite
- Framer Motion, Tailwind CSS
- Lucide React (icons)

### Local Development Steps

**1. Create Component Directory:**

```bash
mkdir -p src/components/voice
mkdir -p src/config
```

**2. Create Type Definitions (Foundation First):**

```bash
touch src/components/voice/voice-widget.types.ts
# Copy type definitions from Technical Details section above
```

**3. Create Configuration:**

```bash
touch src/config/voice-widget.config.ts
```

```typescript
// voice-widget.config.ts
import type { VoiceWidgetConfig } from '@/components/voice/voice-widget.types';

export const VOICE_WIDGET_CONFIG: VoiceWidgetConfig = {
  phoneNumber: '+61756258275',      // No spaces for tel: protocol
  displayNumber: '+61 7 5625 8275', // Formatted for display
  agentId: 'lQXvJFg8zSqlerOKPXm6',  // ElevenLabs agent ID
  autoCollapseDelay: 5000,           // 5 seconds
  position: 'bottom-right',
};
```

**4. Implement Hooks (Bottom-Up Approach):**

```bash
touch src/components/voice/useVoiceWidget.ts
touch src/components/voice/useElevenLabsControl.ts
touch src/components/voice/animation.config.ts
touch src/components/voice/animation.variants.ts
```

Copy implementations from Technical Details section.

**5. Build Components:**

```bash
# Start with smallest components
touch src/components/voice/VoiceOptionCard.tsx
touch src/components/voice/VoiceWidgetFAB.tsx

# Then main component
touch src/components/voice/UnifiedVoiceWidget.tsx
```

**6. Start Development Server:**

```bash
npm run dev
# Open http://localhost:8080
```

**7. Hot Reload Testing:**

- Edit components in `src/components/voice/`
- Browser auto-refreshes on save
- Test collapsed/expanded states
- Verify animations smooth

**8. TypeScript Validation:**

```bash
# Check types (runs automatically on build)
npm run build

# Expected: 0 errors
```

**9. Lint Check:**

```bash
npm run lint

# Fix auto-fixable issues
npm run lint --fix
```

### Development Workflow

**Daily Development Loop:**

```bash
# 1. Start dev server
npm run dev

# 2. Make changes to components
# 3. Test in browser (http://localhost:8080)
# 4. Check TypeScript errors in terminal
# 5. Fix issues, repeat

# 6. Before committing:
npm run build  # Verify production build
npm run lint   # Check code style
```

**Component Isolation Testing:**

```bash
# Create temporary test page
touch src/pages/VoiceWidgetTest.tsx
```

```typescript
// Isolated component testing
import { UnifiedVoiceWidget } from '@/components/voice/UnifiedVoiceWidget';
import { VOICE_WIDGET_CONFIG } from '@/config/voice-widget.config';

export default function VoiceWidgetTest() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full h-screen">
        <UnifiedVoiceWidget config={VOICE_WIDGET_CONFIG} />
      </div>
    </div>
  );
}
```

---

## Implementation Guide

### Phase 1: Foundation (Days 1-2)

**Day 1: Types, Config, Hooks**

**Morning (4 hours):**

1. ✅ Create directory structure
2. ✅ Implement `voice-widget.types.ts` (all TypeScript types)
3. ✅ Create `voice-widget.config.ts` (configuration constants)
4. ✅ Implement `animation.config.ts` (animation constants)
5. ✅ Implement `animation.variants.ts` (Framer Motion variants)

**Afternoon (4 hours):**

6. ✅ Implement `useVoiceWidget.ts` hook
   - State management
   - Auto-collapse timer
   - Event handlers
   - Cleanup logic

7. ✅ Implement `useElevenLabsControl.ts` hook
   - Visibility control
   - State synchronization

8. ✅ Write hook tests (optional but recommended)

**Day 2: Base Components**

**Morning (4 hours):**

9. ✅ Implement `VoiceOptionCard.tsx`
   - Phone icon + label + description
   - AI agent icon + label + description
   - Glass morphism styling
   - Hover states
   - ARIA attributes
   - Touch target sizing

**Afternoon (4 hours):**

10. ✅ Implement `VoiceWidgetFAB.tsx`
    - Collapsed button
    - Icon rendering
    - Pulse glow animation
    - Glass morphism heavy styling
    - Keyboard event handling

11. ✅ Test components in isolation

### Phase 2: Integration (Days 3-4)

**Day 3: Main Component**

**Morning (4 hours):**

12. ✅ Create `UnifiedVoiceWidget.tsx` component shell
13. ✅ Wire up `useVoiceWidget` hook
14. ✅ Implement collapsed/expanded state rendering
15. ✅ Add Framer Motion `AnimatePresence` wrappers

**Afternoon (4 hours):**

16. ✅ Implement option card rendering with stagger animation
17. ✅ Add ElevenLabs widget with visibility control
18. ✅ Implement click-outside handler
19. ✅ Add keyboard navigation logic
20. ✅ Test full component flow

**Day 4: Layout Integration**

**Morning (4 hours):**

21. ✅ Update `MainLayout.tsx`
    - Import `UnifiedVoiceWidget`
    - Remove `FloatingCallButton`
    - Remove standalone `<elevenlabs-convai>`
    - Pass configuration props

22. ✅ Archive `FloatingCallButton.tsx`
    - Add deprecation comment
    - Document replacement

23. ✅ Test on dev server (all pages)

**Afternoon (4 hours):**

24. ✅ Fix any integration issues
25. ✅ Test phone call functionality
26. ✅ Test AI agent launch
27. ✅ Test auto-collapse behavior
28. ✅ Test click-outside behavior

### Phase 3: Polish & Accessibility (Days 5-7)

**Day 5: Accessibility**

**Morning (4 hours):**

29. ✅ Implement full keyboard navigation
    - Tab, Enter, Space, Escape, Arrow keys
30. ✅ Add comprehensive ARIA attributes
31. ✅ Implement focus management
32. ✅ Add live regions for state announcements

**Afternoon (4 hours):**

33. ✅ Test with NVDA screen reader (Windows)
34. ✅ Test with VoiceOver screen reader (macOS/iOS)
35. ✅ Fix any accessibility issues found
36. ✅ Verify focus indicators visible

**Day 6: Animations & Micro-interactions**

**Morning (4 hours):**

37. ✅ Fine-tune spring animation parameters
38. ✅ Adjust stagger delays for optimal feel
39. ✅ Test animation performance (60fps target)
40. ✅ Implement reduced motion support

**Afternoon (4 hours):**

41. ✅ Add micro-interactions
    - Hover effects
    - Active states
    - Loading states (if needed)
42. ✅ Test on actual devices (not just DevTools)

**Day 7: Edge Cases & Testing**

**Morning (4 hours):**

43. ✅ Test mobile browsers (iOS Safari, Chrome Android)
44. ✅ Test desktop browsers (Chrome, Firefox, Safari, Edge)
45. ✅ Test safe area insets (notched phones)
46. ✅ Test high contrast mode

**Afternoon (4 hours):**

47. ✅ Performance profiling
    - Animation frame rate
    - Memory usage
    - Bundle size impact
48. ✅ Fix any performance issues
49. ✅ Final QA pass

### Phase 4: Production Readiness (Days 8-10)

**Day 8: Cross-Browser Testing**

50. ✅ Test on all target browsers (see Browser Support Matrix)
51. ✅ Fix browser-specific issues
52. ✅ Test at 200% text zoom
53. ✅ Test with DevTools throttling

**Day 9: Performance & Optimization**

54. ✅ Bundle size analysis
55. ✅ Animation performance profiling
56. ✅ Memory leak checks
57. ✅ Lazy load optimizations (if needed)

**Day 10: Documentation & Deployment**

58. ✅ Add JSDoc comments to public APIs
59. ✅ Update README (if applicable)
60. ✅ Create PR with screenshots
61. ✅ Deploy to staging
62. ✅ User acceptance testing

---

## Testing Approach

### Manual Testing Checklist

#### Functional Testing

**Collapsed State:**
- [ ] FAB button renders in bottom-right corner
- [ ] FAB is circular with correct size (56px mobile, 64px desktop)
- [ ] FAB has glass morphism effect
- [ ] FAB has cyan border and glow
- [ ] FAB has subtle pulse animation
- [ ] FAB has Phone icon centered

**Expanded State:**
- [ ] Click/tap FAB expands widget upward
- [ ] Expansion animation smooth (spring physics)
- [ ] Both option cards visible
- [ ] Option cards have glass morphism effect
- [ ] Cards stagger animate (100ms delay)
- [ ] Expanded container width correct (280px mobile, 320px desktop)

**Phone Call Option:**
- [ ] Phone icon visible
- [ ] Label: "Call Agent Mobile"
- [ ] Description: "+61 7 5625 8275"
- [ ] Click initiates `tel:` link
- [ ] Widget collapses after click
- [ ] Phone app opens (mobile) or confirmation dialog (desktop)

**AI Agent Option:**
- [ ] Bot icon visible
- [ ] Label: "Talk To Our AI Agent"
- [ ] Description: "24/7 voice assistance"
- [ ] Click shows ElevenLabs widget
- [ ] Unified widget hides when ElevenLabs active
- [ ] ElevenLabs widget functional

**Auto-Collapse:**
- [ ] Widget auto-collapses after 5 seconds (expanded, no interaction)
- [ ] Timer resets on any interaction
- [ ] Timer cancels on option selection
- [ ] Timer doesn't run when ElevenLabs active

**Click-Outside:**
- [ ] Click outside widget collapses it
- [ ] Click on widget itself doesn't collapse
- [ ] Click-outside doesn't fire when ElevenLabs active

**ElevenLabs Integration:**
- [ ] Widget hidden by default
- [ ] Widget shows on AI agent selection
- [ ] Widget maintains connection when hidden
- [ ] User can dismiss ElevenLabs widget
- [ ] Unified widget returns after dismissal

#### Keyboard Navigation

**Focus Management:**
- [ ] Tab key focuses FAB
- [ ] Focus indicator visible and clear
- [ ] Enter key expands widget
- [ ] Space key expands widget
- [ ] Arrow Down focuses first option
- [ ] Arrow Up focuses last option
- [ ] Tab cycles through options
- [ ] Escape key collapses widget
- [ ] Focus returns to FAB on collapse

**Screen Reader Announcements:**
- [ ] FAB announces "Voice communication options"
- [ ] Expanded state announces "Communication options expanded..."
- [ ] Phone option announces full label + description
- [ ] AI agent option announces full label + description
- [ ] State changes announced to live region

#### Visual Testing

**Glass Morphism:**
- [ ] Backdrop blur renders correctly
- [ ] Glass effect visible against various backgrounds
- [ ] Border opacity correct (20% collapsed, 30% expanded)
- [ ] Background opacity correct (8% collapsed, 5% expanded)

**Colors:**
- [ ] Cyan accent color consistent (#06B6D4)
- [ ] Text gradient renders (blue→cyan→teal)
- [ ] White text high contrast
- [ ] Hover glow effect visible

**Animations:**
- [ ] Smooth 60fps throughout
- [ ] No jank or stuttering
- [ ] Spring physics feel natural
- [ ] Stagger timing appropriate
- [ ] Pulse animation subtle and continuous

**Responsive Design:**
- [ ] Mobile layout correct (320px - 767px)
- [ ] Tablet layout correct (768px - 1023px)
- [ ] Desktop layout correct (1024px+)
- [ ] Safe area insets respected (notched phones)
- [ ] No horizontal overflow

#### Browser Testing Matrix

**Desktop Browsers:**
- [ ] Chrome 120+ (Windows, macOS, Linux)
- [ ] Firefox 120+ (Windows, macOS, Linux)
- [ ] Safari 17+ (macOS)
- [ ] Edge 120+ (Windows)

**Mobile Browsers:**
- [ ] iOS Safari 17+ (iPhone, iPad)
- [ ] Chrome Android 120+
- [ ] Samsung Internet (Android)

**Features to Test Per Browser:**
- [ ] Glass morphism (backdrop-filter)
- [ ] Animations (Framer Motion)
- [ ] ElevenLabs widget
- [ ] Touch interactions
- [ ] Keyboard navigation

#### Accessibility Compliance (WCAG 2.2 AA)

**1.4.3 Contrast (Minimum):**
- [ ] Text contrast ≥ 4.5:1
- [ ] Icon contrast ≥ 3:1
- [ ] Focus indicator contrast ≥ 3:1

**2.1.1 Keyboard:**
- [ ] All functionality keyboard accessible
- [ ] No keyboard traps

**2.4.7 Focus Visible:**
- [ ] Focus indicators visible
- [ ] Indicators meet contrast requirements

**2.5.5 Target Size (Enhanced - AAA):**
- [ ] Touch targets ≥ 44x44px
- [ ] Spacing between targets ≥ 8px

**3.2.4 Consistent Identification:**
- [ ] Icons used consistently
- [ ] Labels consistent

**4.1.2 Name, Role, Value:**
- [ ] All interactive elements have accessible names
- [ ] Roles appropriate
- [ ] States communicated

#### Performance Metrics

**Animation Performance:**
- [ ] 60fps during expand animation (Chrome DevTools FPS meter)
- [ ] 60fps during collapse animation
- [ ] 60fps during option card stagger
- [ ] No dropped frames on mobile devices

**Bundle Size:**
- [ ] Total new code < 10KB gzipped
- [ ] No duplicate dependencies
- [ ] Tree-shaking working

**Runtime Performance:**
- [ ] First paint impact < 50ms
- [ ] Memory usage stable (no leaks)
- [ ] CPU usage < 10% during animations
- [ ] No layout thrashing

**Load Performance:**
- [ ] Component code-split (lazy loaded if possible)
- [ ] ElevenLabs widget script async loaded
- [ ] No blocking resources

### Automated Testing (Optional Future Work)

**Unit Tests (Vitest + React Testing Library):**

```typescript
// useVoiceWidget.test.ts
describe('useVoiceWidget', () => {
  it('initializes in collapsed state', () => {
    const { result } = renderHook(() => useVoiceWidget(mockConfig));
    expect(result.current.state).toBe('collapsed');
  });

  it('expands on toggle', () => {
    const { result } = renderHook(() => useVoiceWidget(mockConfig));
    act(() => result.current.toggleExpanded());
    expect(result.current.state).toBe('expanded');
  });

  it('auto-collapses after delay', async () => {
    const { result } = renderHook(() => useVoiceWidget({
      ...mockConfig,
      autoCollapseDelay: 100,
    }));

    act(() => result.current.toggleExpanded());
    expect(result.current.state).toBe('expanded');

    await waitFor(() => {
      expect(result.current.state).toBe('collapsed');
    }, { timeout: 200 });
  });
});
```

**Component Tests:**

```typescript
// UnifiedVoiceWidget.test.tsx
describe('UnifiedVoiceWidget', () => {
  it('renders collapsed FAB', () => {
    render(<UnifiedVoiceWidget config={mockConfig} />);
    expect(screen.getByLabelText('Voice communication options')).toBeInTheDocument();
  });

  it('expands on click', async () => {
    render(<UnifiedVoiceWidget config={mockConfig} />);
    const fab = screen.getByLabelText('Voice communication options');

    await userEvent.click(fab);

    expect(screen.getByText('Call Agent Mobile')).toBeVisible();
    expect(screen.getByText('Talk To Our AI Agent')).toBeVisible();
  });

  it('handles phone call selection', async () => {
    const locationSpy = jest.spyOn(window, 'location', 'get');
    render(<UnifiedVoiceWidget config={mockConfig} />);

    // Expand
    await userEvent.click(screen.getByLabelText('Voice communication options'));

    // Select phone option
    await userEvent.click(screen.getByText('Call Agent Mobile'));

    expect(locationSpy).toHaveBeenCalledWith(expect.stringContaining('tel:+61756258275'));
  });
});
```

**E2E Tests (Playwright - Future):**

```typescript
// unified-voice-widget.spec.ts
test('complete user flow', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // FAB visible
  const fab = page.locator('[aria-label="Voice communication options"]');
  await expect(fab).toBeVisible();

  // Expand
  await fab.click();
  await expect(page.locator('text=Call Agent Mobile')).toBeVisible();
  await expect(page.locator('text=Talk To Our AI Agent')).toBeVisible();

  // Select AI agent
  await page.click('text=Talk To Our AI Agent');

  // ElevenLabs widget appears
  await expect(page.locator('elevenlabs-convai')).toBeVisible();
});

test('keyboard navigation', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Tab to FAB
  await page.keyboard.press('Tab'); // May need multiple tabs

  // Expand with Enter
  await page.keyboard.press('Enter');
  await expect(page.locator('text=Call Agent Mobile')).toBeVisible();

  // Navigate with arrows
  await page.keyboard.press('ArrowDown');
  // Verify focus moved

  // Collapse with Escape
  await page.keyboard.press('Escape');
  await expect(page.locator('text=Call Agent Mobile')).not.toBeVisible();
});
```

---

## Deployment Strategy

### Pre-Deployment Checklist

**Code Quality:**
- [ ] All TypeScript errors resolved
- [ ] ESLint passes (errors only, warnings OK)
- [ ] No console errors in production build
- [ ] Code reviewed by team (if applicable)

**Testing:**
- [ ] All manual tests passing (see checklist above)
- [ ] Tested on 3+ browsers (Chrome, Firefox, Safari)
- [ ] Tested on 2+ mobile devices (iOS, Android)
- [ ] Accessibility audit complete (WCAG 2.2 AA)

**Performance:**
- [ ] Bundle size < 10KB gzipped
- [ ] 60fps animations verified
- [ ] No memory leaks
- [ ] Production build tested locally

**Documentation:**
- [ ] JSDoc comments on public APIs
- [ ] README updated (if applicable)
- [ ] CHANGELOG updated
- [ ] PR description complete with screenshots

### Deployment Steps

**1. Create Feature Branch:**

```bash
git checkout main
git pull origin main
git checkout -b feature/unified-voice-widget
```

**2. Development Work:**

```bash
# Make changes
git add src/components/voice/
git add src/components/layout/MainLayout.tsx
git add src/config/voice-widget.config.ts

# Commit with conventional commit format
git commit -m "feat: unified voice agent widget

Implements expandable widget pattern combining phone call and AI agent options.

BREAKING CHANGE: Removes FloatingCallButton component (archived, not deleted)

Features:
- Single FAB expands to show two communication options
- Phone call option (tel: link)
- AI agent option (ElevenLabs ConvAI widget)
- Full keyboard navigation and ARIA support
- Glass morphism design system integration
- 60fps animations with Framer Motion
- Auto-collapse after 5s inactivity
- Click-outside to collapse

Accessibility:
- WCAG 2.2 Level AA compliant
- Screen reader tested (NVDA, VoiceOver)
- Touch targets exceed 44x44px (AAA standard)
- Reduced motion support

Performance:
- <10KB gzipped bundle size
- 60fps animations verified
- No memory leaks

Testing:
- Manual testing complete (Chrome, Firefox, Safari, iOS, Android)
- Accessibility audit passed
- Performance metrics met

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

**3. Push to Remote:**

```bash
git push -u origin feature/unified-voice-widget
```

**4. Create Pull Request:**

```bash
gh pr create --title "feat: Unified Voice Agent Widget" --body "$(cat <<'EOF'
## Summary

Combines FloatingCallButton and ElevenLabs ConvAI widget into a single, polished unified component.

**Problem:** Current implementation has two separate widgets stacked vertically, creating visual clutter and suboptimal mobile UX.

**Solution:** Single expandable FAB that reveals two clear communication options (phone call + AI agent).

**Pattern:** Expandable Widget (Pattern A) - highest-rated pattern (54/60) from UX research.

## Changes

### New Components
- `UnifiedVoiceWidget` - Main component (~730 LOC total)
- `VoiceWidgetFAB` - Collapsed FAB button
- `VoiceOptionCard` - Individual option cards
- `useVoiceWidget` - State management hook
- `useElevenLabsControl` - ElevenLabs visibility hook

### Modified Components
- `MainLayout.tsx` - Replaced FloatingCallButton + elevenlabs-convai
- `FloatingCallButton.tsx` - Archived with deprecation notice

### Configuration
- `voice-widget.config.ts` - Centralized widget configuration

## Features

✅ **UX Improvements:**
- Minimal visual footprint (single FAB when collapsed)
- Clear, large touch targets (56x56px mobile, 64x64px desktop)
- Progressive disclosure (options revealed on interaction)
- Auto-collapse after 5s inactivity
- Click-outside to collapse

✅ **Accessibility (WCAG 2.2 AA):**
- Full keyboard navigation (Tab, Enter, Space, Escape, Arrows)
- Comprehensive ARIA attributes
- Screen reader support (NVDA, JAWS, VoiceOver tested)
- Touch targets exceed AAA standard (44x44px)
- Reduced motion support
- 15:1 color contrast (AAA)

✅ **Performance:**
- 60fps animations (spring physics)
- <10KB gzipped bundle size
- No memory leaks
- Lazy ElevenLabs widget loading

✅ **Design:**
- Glass morphism maintained
- Cyan accent branding consistent
- Gradient text integration
- Smooth spring animations

## Testing

**Manual Testing:**
- ✅ Chrome 120+ (desktop)
- ✅ Firefox 120+ (desktop)
- ✅ Safari 17+ (desktop, iOS)
- ✅ Chrome Android 120+
- ✅ Edge 120+ (desktop)

**Accessibility Testing:**
- ✅ NVDA screen reader (Windows)
- ✅ VoiceOver (macOS, iOS)
- ✅ Keyboard navigation
- ✅ High contrast mode
- ✅ 200% text zoom

**Performance:**
- ✅ 60fps animations verified
- ✅ Bundle size < 10KB gzipped
- ✅ Memory usage stable
- ✅ First paint impact < 50ms

## Screenshots

### Collapsed State (Mobile)
[Screenshot: Single FAB with pulse glow, bottom-right corner]

### Expanded State (Mobile)
[Screenshot: Two option cards visible, glass morphism, cyan accents]

### Expanded State (Desktop)
[Screenshot: Desktop view with hover states]

### AI Agent Active
[Screenshot: ElevenLabs widget visible]

## Deployment Notes

**Rollback Plan:** `FloatingCallButton` archived (not deleted), can be restored quickly if needed.

**Breaking Changes:** None for end users. Internal component replacement only.

**Configuration:** Update `VOICE_WIDGET_CONFIG` in `voice-widget.config.ts` to change phone number or agent ID.

**Monitoring:** Track interaction analytics (expanded, phone selected, agent selected, abandoned).

## Related Issues

Closes #[issue-number]

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**5. Review & Testing:**

- Request code review from team
- Address review feedback
- Test on staging environment
- User acceptance testing

**6. Merge & Deploy:**

```bash
# After approval, merge PR
gh pr merge --squash

# Automatic deployment via Vercel/Netlify
# (triggered on main branch merge)
```

**7. Post-Deployment Verification:**

```bash
# Visit production site
open https://cre8tive.ai

# Test widget functionality
# - Click FAB
# - Test phone call option
# - Test AI agent option
# - Verify mobile view
# - Check console for errors
```

**8. Monitoring:**

```bash
# Monitor analytics (optional)
# - User interaction rate
# - Option selection distribution (phone vs agent)
# - Abandonment rate
# - Error rate
```

### Rollback Plan

**Scenario: Critical issue found in production**

**Immediate Rollback (Option 1 - Git Revert):**

```bash
# Find the merge commit
git log --oneline main

# Revert the merge
git revert -m 1 <merge-commit-hash>
git push origin main

# Automatic redeployment with reverted code
```

**Manual Rollback (Option 2 - Restore Old Components):**

```bash
# Create hotfix branch
git checkout -b hotfix/restore-old-widgets

# Restore MainLayout.tsx
git checkout <previous-commit-hash> src/components/layout/MainLayout.tsx

# Remove UnifiedVoiceWidget import
# Restore FloatingCallButton import
# Restore <elevenlabs-convai> element

# Commit and deploy
git commit -m "hotfix: restore original widget configuration"
git push origin hotfix/restore-old-widgets

# Create PR and fast-track merge
```

**Partial Rollback (Option 3 - Feature Flag):**

```typescript
// Add feature flag to disable new widget
const USE_UNIFIED_WIDGET = import.meta.env.VITE_USE_UNIFIED_WIDGET === 'true';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {USE_UNIFIED_WIDGET ? (
        <UnifiedVoiceWidget config={VOICE_WIDGET_CONFIG} />
      ) : (
        <>
          <FloatingCallButton />
          <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6" />
        </>
      )}
    </div>
  );
};
```

### Post-Deployment Monitoring

**Metrics to Track (Optional Analytics):**

```typescript
// Add to UnifiedVoiceWidget.tsx
const handleExpanded = () => {
  analytics.track('voice_widget_expanded', {
    timestamp: Date.now(),
    page: window.location.pathname,
  });
};

const handlePhoneSelected = () => {
  analytics.track('voice_widget_phone_selected', {
    timestamp: Date.now(),
    page: window.location.pathname,
  });
};

const handleAgentSelected = () => {
  analytics.track('voice_widget_agent_selected', {
    timestamp: Date.now(),
    page: window.location.pathname,
  });
};

const handleAbandoned = () => {
  // Fires on auto-collapse with no selection
  analytics.track('voice_widget_abandoned', {
    timestamp: Date.now(),
    page: window.location.pathname,
  });
};
```

**Success Metrics (First 7 Days):**

| Metric | Target | Actual |
|--------|--------|--------|
| Interaction Rate | >5% of visitors | TBD |
| Phone Selection | 40-60% | TBD |
| Agent Selection | 40-60% | TBD |
| Abandonment Rate | <20% | TBD |
| Error Rate | <0.1% | TBD |
| Page Load Impact | <50ms | TBD |

**Error Monitoring:**

```typescript
// Global error handler
window.addEventListener('error', (event) => {
  if (event.filename?.includes('voice-widget')) {
    // Log widget-related errors
    console.error('Voice Widget Error:', event.error);
    // Send to error tracking service (Sentry, etc.)
  }
});
```

---

## Appendix A: Design Rationale

### Why Pattern A (Expandable Widget)?

**Research conducted** by bmm-technical-evaluator agent evaluated 7 UI patterns:

| Pattern | Score | Key Strengths | Key Weaknesses |
|---------|-------|---------------|----------------|
| **A. Expandable Widget** | **54/60** | Minimal footprint, excellent mobile UX, modern | Requires extra tap |
| D. Side Drawer | 48/60 | Premium feel, scalable | Heavier implementation |
| C. Modal Selector | 40/60 | Ample space for content | Disruptive, modal fatigue |
| G. Split Button | 41/60 | Desktop-familiar | Poor mobile UX |
| B. Segmented Control | 39/60 | Zero-click discovery | Visual clutter |
| E. Stacked Cards | 36/60 | Simple | Current problem pattern |
| F. Radial Menu | 35/60 | Visually striking | Poor accessibility |

**Pattern A wins because:**
1. **Mobile-First:** Touch targets, thumb zone, familiar interaction
2. **Progressive Disclosure:** Reduces cognitive load, respects content hierarchy
3. **Industry Alignment:** Matches Intercom, Drift, HubSpot, ChatGPT patterns
4. **Accessibility:** Full WCAG 2.2 AA compliance achievable
5. **Future-Proof:** Easy to add 3rd option (SMS, email, etc.)
6. **Premium Feel:** Spring animations, glass morphism, polished

### Why Framer Motion?

**Already in stack** (v11.11.17), provides:
- Layout animations (automatic smooth transitions)
- Spring physics (natural, premium feel)
- `AnimatePresence` (enter/exit animations)
- `useReducedMotion` hook (accessibility)
- Excellent TypeScript support
- Small bundle size (~30KB gzipped)

**Alternative considered:** CSS animations
- ❌ More complex state management
- ❌ No spring physics
- ❌ Harder to orchestrate stagger animations
- ✅ Smaller bundle (but Framer Motion already installed)

**Decision:** Use Framer Motion (already available, superior DX)

### Why CSS Visibility for ElevenLabs Widget?

**Research findings:**
- ElevenLabs ConvAI widget has limited public JavaScript API
- No documented methods for `.show()`, `.hide()`, `.open()`, `.close()`
- Widget is a custom element (`<elevenlabs-convai>`) with internal state
- Widget handles own UI when visible

**Options evaluated:**

1. **CSS Visibility Control** ✅ **CHOSEN**
   - Keep widget in DOM, toggle `display: none/block`
   - Widget maintains connection when hidden
   - Instant resume when shown
   - Simple, reliable, no API dependency

2. **Mount/Unmount** ❌
   - Remove/add widget from DOM dynamically
   - Causes 2-3 second initialization delay on remount
   - WebSocket reconnection overhead
   - More complex state management

3. **JavaScript API Control** ❌
   - No public API documented
   - Could break with widget updates
   - Tight coupling to widget internals

**Decision:** CSS visibility control (simple, reliable, performant)

---

## Appendix B: Component API Reference

### UnifiedVoiceWidget

**Props:**

```typescript
interface VoiceWidgetProps {
  config: VoiceWidgetConfig;        // Required: Widget configuration
  onStateChange?: (state: VoiceWidgetState) => void; // Optional: State change callback
  defaultState?: VoiceWidgetState;  // Optional: Initial state (default: 'collapsed')
  className?: string;                // Optional: Additional Tailwind classes
}
```

**Usage:**

```tsx
import { UnifiedVoiceWidget } from '@/components/voice/UnifiedVoiceWidget';
import { VOICE_WIDGET_CONFIG } from '@/config/voice-widget.config';

function App() {
  const handleStateChange = (state: VoiceWidgetState) => {
    console.log('Widget state changed:', state);
    // Optional: Track analytics
  };

  return (
    <UnifiedVoiceWidget
      config={VOICE_WIDGET_CONFIG}
      onStateChange={handleStateChange}
    />
  );
}
```

### VoiceWidgetConfig

**Configuration Object:**

```typescript
interface VoiceWidgetConfig {
  phoneNumber: string;          // Required: tel: format (no spaces)
  displayNumber: string;         // Required: Formatted for display
  agentId: string;               // Required: ElevenLabs agent ID
  autoCollapseDelay?: number;    // Optional: Milliseconds (default: 5000)
  position?: 'bottom-right' | 'bottom-left'; // Optional: Position (default: bottom-right)
}
```

**Example:**

```typescript
export const VOICE_WIDGET_CONFIG: VoiceWidgetConfig = {
  phoneNumber: '+61756258275',
  displayNumber: '+61 7 5625 8275',
  agentId: 'lQXvJFg8zSqlerOKPXm6',
  autoCollapseDelay: 5000, // 5 seconds
  position: 'bottom-right',
};
```

### useVoiceWidget Hook

**Returns:**

```typescript
{
  state: VoiceWidgetState;              // Current state
  showElevenLabs: boolean;              // ElevenLabs widget visibility
  toggleExpanded: () => void;           // Toggle collapsed/expanded
  handlePhoneCall: () => void;          // Initiate phone call
  handleAgentLaunch: () => void;        // Show AI agent
  handleClickOutside: () => void;       // Collapse on outside click
  collapse: () => void;                 // Programmatic collapse
}
```

**Usage:**

```tsx
import { useVoiceWidget } from '@/components/voice/useVoiceWidget';

function CustomWidget() {
  const {
    state,
    showElevenLabs,
    toggleExpanded,
    handlePhoneCall,
    handleAgentLaunch,
  } = useVoiceWidget(config);

  return (
    <div>
      {state === 'collapsed' && (
        <button onClick={toggleExpanded}>Open</button>
      )}
      {state === 'expanded' && (
        <>
          <button onClick={handlePhoneCall}>Call</button>
          <button onClick={handleAgentLaunch}>AI Agent</button>
        </>
      )}
    </div>
  );
}
```

---

## Appendix C: Troubleshooting Guide

### Common Issues & Solutions

**Issue: Widget not appearing**

```typescript
// Check 1: Is widget imported in MainLayout?
import { UnifiedVoiceWidget } from '@/components/voice/UnifiedVoiceWidget';

// Check 2: Is config passed correctly?
<UnifiedVoiceWidget config={VOICE_WIDGET_CONFIG} />

// Check 3: Check z-index conflicts
// Widget uses z-50, ensure no higher z-index elements blocking it

// Check 4: Check for JavaScript errors in console
// Open DevTools → Console tab
```

**Issue: Animations not smooth**

```typescript
// Check 1: Verify 60fps in Chrome DevTools
// DevTools → Performance → Record → Click widget → Stop
// Look for dropped frames (red bars)

// Check 2: Disable other animations temporarily
// Check 3: Test on actual device (not just DevTools throttling)

// Check 4: Verify Framer Motion installed correctly
// npm list framer-motion
// Should show v11.11.17 or later
```

**Issue: Phone call not working**

```typescript
// Check 1: Verify tel: link format (no spaces)
phoneNumber: '+61756258275'  // ✅ Correct
phoneNumber: '+61 7 5625 8275'  // ❌ Wrong (has spaces)

// Check 2: Test on actual mobile device
// Desktop browsers show confirmation dialog
// Mobile devices should open phone app

// Check 3: Check browser console for errors
```

**Issue: ElevenLabs widget not showing**

```typescript
// Check 1: Verify agent ID correct
agentId: 'lQXvJFg8zSqlerOKPXm6'

// Check 2: Verify script loaded in index.html
<script src="https://elevenlabs.io/convai-widget/index.js" async defer></script>

// Check 3: Check Network tab for script load errors
// DevTools → Network → Filter: elevenlabs

// Check 4: Verify visibility control working
// Inspect element → Check inline style: display: block (when active)
```

**Issue: Keyboard navigation not working**

```typescript
// Check 1: Verify tabIndex set correctly
tabIndex={0}  // Focusable

// Check 2: Test focus visibility
// Tab to widget, verify focus indicator visible

// Check 3: Check event handler attached
onKeyDown={handleKeyDown}

// Check 4: Test in different browsers
// Some browsers have different keyboard nav behavior
```

**Issue: Click-outside not working**

```typescript
// Check 1: Verify click-outside handler attached
useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [handleClickOutside]);

// Check 2: Check if ElevenLabs widget is active
// Click-outside disabled when ElevenLabs active

// Check 3: Verify widget ref captured correctly
const widgetRef = useRef<HTMLDivElement>(null);
```

**Issue: Auto-collapse not working**

```typescript
// Check 1: Verify autoCollapseDelay set
autoCollapseDelay: 5000  // 5 seconds

// Check 2: Check timer cleanup
useEffect(() => {
  return () => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
    }
  };
}, []);

// Check 3: Verify timer resets on interaction
// Any interaction should restart the 5-second countdown
```

**Issue: Glass morphism not rendering**

```typescript
// Check 1: Verify backdrop-filter support
// Check: caniuse.com/css-backdrop-filter
// Safari requires -webkit-backdrop-filter

// Check 2: Check CSS classes applied
className="glass-card-medium backdrop-blur-20"

// Check 3: Verify against solid background
// Glass effect only visible against contrasting background

// Check 4: Check browser support
// Old browsers may not support backdrop-filter
```

---

_This tech spec is for Level 0 projects (BMad Method v6). It provides the technical details needed for implementation. Level 3+ projects use the separate architecture workflow for comprehensive technical design._
