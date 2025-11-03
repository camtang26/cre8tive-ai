# Accessibility Audit Workflow

## Overview

WCAG compliance validation for GSAP animations. Tests prefers-reduced-motion implementation, keyboard navigation, focus states, and screen reader compatibility.

## When to Use

✅ Third production gate (after 60fps + memory)
✅ Before deployment
✅ WCAG 2.1 compliance required
✅ Accessibility-first projects

❌ Early development (wait until complete)
❌ Not user-facing (internal tools)

## Usage

```bash
/bmad:gsap-excellence:agents:gsap-tech-director
*audit-accessibility
```

**You'll be asked:**
- Dev server URL
- Animation triggers
- Accessibility requirements level (A, AA, AAA)

**Output:** Accessibility compliance report with fixes

## What Gets Tested

### prefers-reduced-motion
- ✅ Respects user setting
- ✅ Provides no-animation fallback
- ✅ Graceful degradation
- ❌ No fallback (FAIL)

### Keyboard Navigation
- ✅ All interactive elements keyboard-accessible
- ✅ Focus states visible
- ✅ Logical tab order
- ❌ Keyboard trap (FAIL)

### Focus Management
- ✅ Focus preserved during animations
- ✅ Focus indicators clear
- ✅ No focus on decorative elements

### Screen Reader
- ✅ Animations don't break SR flow
- ✅ Decorative animations hidden (aria-hidden)
- ✅ Important transitions announced

## WCAG 2.1 Compliance Levels

- **Level A** - Minimum (required)
- **Level AA** - Standard (recommended)
- **Level AAA** - Enhanced (ideal)

## Common Fixes

### prefers-reduced-motion Implementation

```javascript
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

gsap.to('.element', {
  x: 100,
  duration: mediaQuery.matches ? 0 : 1 // Instant if reduced
});
```

### Focus Trap Prevention

```javascript
// Ensure focus can escape animated containers
element.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close/exit animation
  }
});
```

## Estimated Duration: 10-15 minutes

**Agent:** Tech Director (accessibility specialist)

**Pass Criteria:**
- ✅ prefers-reduced-motion implemented
- ✅ Keyboard navigation works
- ✅ Focus states visible
- ✅ Screen reader compatible

---

_Part of GSAP Excellence Engine - Third Production Gate_
