# Harvest Patterns Workflow

## Overview

Extract successful animations as reusable patterns for the pattern library. Documents animation with metadata, complexity rating, and usage notes for future projects.

## When to Use

✅ Built something great that should be reused
✅ After animation-production success
✅ Discovered new technique worth sharing
✅ Want to contribute to pattern library

❌ Animation not production-tested (premature)
❌ Too project-specific (not generalizable)

## Usage

```bash
/bmad:gsap-excellence:agents:gsap-director
*harvest
```

**You'll be asked:**
- Animation code
- Context/use case
- Complexity level
- Framework used

**Output:** Pattern YAML file added to library

## Pattern Format

```yaml
id: pattern-{uuid}
name: "Descriptive Name"
category: "scroll-effects" | "text" | "interactive"
complexity: "simple" | "medium" | "high"
gsap_version: "3.13.0+"
plugins_required: ["ScrollTrigger"]
description: "What it does"
code_example: |
  gsap.to(...)
framework: "react" | "nextjs" | "vanilla"
tags: ["scroll", "parallax"]
```

## Pattern Categories

- Scroll Effects
- Text Animations
- Premium Showcases
- Layout Transitions
- Loading Sequences
- Interactive
- React/Next.js

## Estimated Duration: 5-10 minutes

**Agent:** Director (pattern curator)

---

_Part of GSAP Excellence Engine_
