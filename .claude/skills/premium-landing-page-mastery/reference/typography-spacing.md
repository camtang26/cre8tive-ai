# Premium Typography & Spacing Systems

## Research Context

Typography and spacing mastery that creates "uncramped" premium feel. Current typography feels "cramped" - font sizes too small, spacing insufficient, hierarchy unclear.

---

## PATTERNS: Premium Typography Scales

### 1. Fluid Typography with CSS clamp()

**Formula**:
```css
font-size: clamp([min]rem, [preferred]vw + [base]rem, [max]rem);

/* Example: 16px→20px across 400px→1200px viewports */
font-size: clamp(1rem, 0.875rem + 0.5vw, 1.25rem);
```

**Critical**: Use rem for min/max bounds (zoom accessibility). Pure vw breaks zoom.

---

### 2. Modular Scale Ratio Selection

**Scale ratios by context**:
- **Major Third (1.25)**: Conservative B2B, moderate contrast
- **Perfect Fourth (1.333)**: Balanced, professional
- **Perfect Fifth (1.5)**: Marketing pages, strong emphasis
- **Golden Ratio (1.618)**: Creative/editorial

**Decision**: B2B landing pages use Perfect Fourth (1.333).

---

### 3. Negative Letter Spacing for Large Headings

**Rules by size**:
```css
/* Large headings (48px+): Negative (tight) */
.large-heading {
  font-size: 48px;
  letter-spacing: -0.02em;  /* -2% premium feel */
}

/* Body text: Normal (never negative) */
.body { letter-spacing: normal; }
```

**Real-world**: Linear uses -2.2% on 64px headlines.

---

## PATTERNS: Systematic Spacing

### 4px Base Spacing Grid

**Common spacing scale**:
```css
:root {
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
}
```

**Why 4px over 8px**: More flexibility without precision overload (8px too coarse for mobile/dense UIs).

---

### Vertical Rhythm

**Core principle**: Tie all spacing to base line-height.

```css
:root {
  --rhythm: 27.2px;  /* 17px × 1.6 line-height */
}

h1 { margin-bottom: calc(var(--rhythm) * 0.5); }
p  { margin-bottom: var(--rhythm); }
section { padding-block: calc(var(--rhythm) * 3); }
```

---

## GOT CHAS

### 1. Pure Black Text on White (Eye Strain)

**Problem**: #000000 on #FFFFFF causes eye strain.

**Solution**: Use dark grey (#333, #0A2540).

---

### 2. Negative Tracking on Body Text

**Problem**: Negative letter-spacing destroys readability on small text.

**Solution**: Use negative tracking ONLY for text ≥32px.

---

## ANTI-PATTERNS

### 1. Using 8px Spacing Grid in 2024

**Why it fails**: Too coarse, can't achieve 12px, 20px spacing.

**Fix**: Use 4px base for 2× more precision.

---

### 2. All-Caps Without Letter Spacing

**❌ WRONG**:
```css
.badge {
  text-transform: uppercase;
  font-size: 12px;
}
```

**✅ CORRECT**:
```css
.badge {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.05em;  /* +5% spacing */
}
```

---

## QUALITY CRITERIA

**Measurable**:
- Contrast: ≥7:1 for AAA
- Font sizes: Never <16px for body
- Line height: ≥1.5 for WCAG
- Line length: 50-75 characters (max-width: 65ch)
- Spacing: All values on 4px grid

**Visual/Subjective**:
- Generous padding (32px+ cards, 60px+ sections)
- Hierarchy clarity (identify H1, H2, body at glance)
- "Uncramped" feel
- Professional restraint (1-2 fonts, 2-3 weights)

---

**Research Sources**: Smashing Magazine, CSS-Tricks, LearnUI.design, Inter docs, Baymard Institute, WCAG 2.1.
