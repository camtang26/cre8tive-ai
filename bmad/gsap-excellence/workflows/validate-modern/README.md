# Validate Modern Workflow

## Overview

Checks codebase for GSAP 3.13+ compliance, flags deprecated syntax, and suggests premium plugin upgrades that are now free. Ensures 2025 best practices.

## When to Use

✅ Upgrading from GSAP 2 or older 3.x
✅ Annual codebase modernization
✅ Before major releases
✅ After GSAP version updates

❌ New project (already modern)
❌ Just checking one animation (manual review)

## Usage

```bash
/bmad:gsap-excellence:agents:gsap-tech-director
*validate-modern
```

**You'll be asked:**
- Codebase path to scan
- Target GSAP version (default: 3.13.0+)

**Output:** Modernization report with upgrade recommendations

## What Gets Checked

### Deprecated Syntax
- TweenMax/TweenLite (use gsap)
- TimelineMax/TimelineLite (use gsap.timeline)
- Old plugin names
- Removed methods

### Premium Plugin Opportunities
- Manual smooth scroll → ScrollSmoother
- CSS transitions for SVG → MorphSVG
- Manual text splitting → SplitText

### 2025 Best Practices
- Using gsap.context() for cleanup
- React useGSAP() hook
- Next.js SSR-safe patterns
- prefers-reduced-motion

## GSAP 3.13+ Premium Plugins (FREE!)

All previously paid plugins now free:
- ScrollSmoother, MorphSVG, SplitText
- DrawSVG, MotionPath, GSDevTools

## Estimated Duration: 10-15 minutes

**Agent:** Tech Director (standards validator)

---

_Part of GSAP Excellence Engine_
