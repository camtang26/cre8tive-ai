# Debug Animation Workflow

## Overview

Systematic debugging protocol that checks against 10 common GSAP pitfalls, provides Chrome DevTools profiling, and delivers specific fixes with code examples.

## When to Use

✅ Animation has bugs, jank, or doesn't work
✅ Memory leaks or performance degradation
✅ Timing issues, conflicts, flickers
✅ Mysterious behavior

❌ Animation works but slow (optimize-performance)
❌ Just needs polish (refine-timing)

## Usage

```bash
/bmad:gsap-excellence:agents:gsap-editor
*debug
```

**You'll be asked:**
- What's wrong (symptom description)
- When it happens
- Browser/device info

**Output:** Diagnosis with specific fixes and code examples

## 10 Common Pitfalls Checked

1. **Memory Leaks** - ScrollTriggers not killed
2. **Wrong Properties** - Animating layout instead of transforms
3. **immediateRender** - Flickers on start
4. **Multiple ScrollTriggers** - Conflicts on same element
5. **overwrite** - Animations fighting
6. **refresh** - Not called after DOM changes
7. **Deprecated Syntax** - Old GSAP 2 code
8. **Infinite Loops** - Uncontrolled animations
9. **Device Testing** - Not tested on target devices
10. **from() vs fromTo()** - Using wrong method

## Diagnostic Process

1. Symptom analysis
2. Pitfall checklist validation
3. Chrome DevTools profiling (if needed)
4. Root cause identification
5. Specific fix with code examples
6. Verification

## Estimated Duration: 15-30 minutes

**Agent:** Editor (debugging specialist)

---

_Part of GSAP Excellence Engine_
