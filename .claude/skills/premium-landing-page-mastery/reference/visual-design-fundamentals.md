# Premium Visual Design Fundamentals for Landing Pages

## Research Context

Visual design techniques that create "museum-grade" premium quality. Current implementations are "average" - need mastery in depth, materials, polish, and visual sophistication.

---

## PATTERNS: Multi-Layered Shadow Systems

### Pattern 1: Five-Layer Shadow Stack (Premium Buttons/Cards)

**Structure**:
```css
.premium-button {
  box-shadow:
    rgba(0, 0, 0, 0.00) 0px 8px 2px 0px,   /* Layer 5: Ambient (furthest) */
    rgba(0, 0, 0, 0.01) 0px 5px 2px 0px,   /* Layer 4: Soft ambient */
    rgba(0, 0, 0, 0.04) 0px 3px 2px 0px,   /* Layer 3: Mid-range */
    rgba(0, 0, 0, 0.07) 0px 1px 1px 0px,   /* Layer 2: Key shadow */
    rgba(0, 0, 0, 0.08) 0px 0px 1px 0px;   /* Layer 1: Border definition */
}
```

**Why it works**: Mimics real-world light physics - objects cast multiple shadows from ambient + direct light sources.

**Sources**: Linear.app production code, Material Design elevation spec

---

### Pattern 2: Ambient + Key Shadow Combination

```css
.premium-card {
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,  /* Ambient: large blur, low opacity */
    rgba(0, 0, 0, 0.30) 0px 30px 60px -30px;      /* Key: directional, darker */
}
```

**Why it works**: Ambient (large blur) = general distance, Key (smaller blur) = light direction.

**Sources**: Ramp.com, Stripe.com, Smashing Magazine

---

## PATTERNS: Glassmorphism Done Right

### Pattern 3: Backdrop Blur with Gradient Border

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px) saturate(120%);
  border-radius: 16px;
}

.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(134deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

**Why it works**: mask-composite creates border-only gradient, saturate(120%) prevents washed-out appearance.

---

## GOTCHAS

### 1. Pure Black Backgrounds

**Problem**: #000000 backgrounds cause eye strain and halation effect.

**Solution**: Always use dark grey (#12-#20 range).

```css
/* CORRECT */
.dark-bg-good {
  background: #121212;  /* Material Design recommendation */
}
```

**Severity**: CRITICAL - impacts readability and eye strain.

---

### 2. WCAG 4.5:1 Inadequate for Dark Mode

**Problem**: WCAG minimum contrast illegible on dark backgrounds.

**Solution**: Aim for 7:1+ contrast on dark backgrounds.

```css
.dark-text-good {
  background: #1a1a1a;
  color: #e0e0e0;  /* ~10:1 ratio */
}
```

---

## ANTI-PATTERNS

### 1. Overusing Backdrop-Filter

**❌ WRONG**: 5+ blur elements = janky scrolling

**✅ CORRECT**: Limit to 1-3 blur elements per viewport

---

### 2. Single-Layer Harsh Shadows

**❌ WRONG**:
```css
.card-harsh {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
}
```

**✅ CORRECT**:
```css
.card-soft {
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.04) 0px 4px 8px 0px,
    rgba(0, 0, 0, 0.06) 0px 12px 24px 0px;
}
```

---

## QUALITY CRITERIA

**Visual Characteristics**:
- Shadow Softness: 3+ layers, max opacity 0.15
- Color Contrast (Dark): Text ≥7:1, background #12-#20
- Glassmorphism Restraint: 1-3 elements, blur 10-16px
- Gradient Smoothness: Noise texture overlay

**Red Flags**:
- Pure black backgrounds
- Grey text on colored backgrounds
- Single harsh shadows
- 5+ backdrop-filter elements

---

**Research Sources**: Linear.app, Stripe.com, Ramp.com, Smashing Magazine, CSS-Tricks, NN/G, Material Design specs.
