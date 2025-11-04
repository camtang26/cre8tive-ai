# Optimize Performance Workflow

## Overview

Identifies performance bottlenecks (scripting, rendering, painting) and provides specific optimization strategies to achieve 60fps on mid-range devices.

## When to Use

✅ Animation works but slow/janky
✅ Failed validate-60fps workflow
✅ Need deeper profiling than validation
✅ Targeting low-end devices

❌ Animation doesn't work (debug-animation first)
❌ Just checking if it's fast (validate-60fps instead)

## Usage

```bash
/bmad:gsap-excellence:agents:gsap-tech-director
*optimize
```

**You'll be asked:**
- Dev server URL
- Animation description
- Target device profile

**Output:** Bottleneck analysis with optimization recommendations

## What Gets Optimized

### Scripting (Target: <8ms/frame)
- Heavy onUpdate callbacks
- DOM queries in loops
- Expensive calculations

### Rendering (Target: <4ms/frame)
- Layout-triggering properties
- Forced reflows
- Style recalculations

### Painting (Target: <4ms/frame)
- Large paint areas
- Missing GPU acceleration
- Overdraw issues

## Optimization Strategies

- **Use transforms** instead of layout properties
- **Precompute** expensive calculations
- **GPU acceleration** (will-change, transform3d)
- **Stagger** to spread load
- **quickTo** for frequent updates
- **Debounce/throttle** event handlers

## Estimated Duration: 20-30 minutes

**Agent:** Tech Director (performance specialist)

---

_Part of GSAP Excellence Engine_
