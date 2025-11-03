# GSAP Excellence Engine - Quick Start Guide

**Get from concept to production-ready GSAP animation in 30-60 minutes.**

---

## 🎯 Choose Your Starting Point

### I Know Exactly What I Want
→ **Skip to**: [Pattern Library](#pattern-discovery) → [Implementation](#implement-from-pattern)

### I Have a Vague Idea
→ **Start with**: [Creative Ideation](#creative-ideation-workflow) (generate 3-5 concepts)

### I Need to Fix Something
→ **Jump to**: [Debugging & Optimization](#debugging--optimization)

### I Want to Validate Production Readiness
→ **Use**: [Validation Workflows](#validation-workflows) (60fps + memory)

---

## 🎬 Agent Selection Guide

Think of our agents as a **film studio crew** - each specialized for specific tasks.

### The Director (`gsap-director`)
**When to use:** You need creative direction, orchestration, or don't know where to start

**Commands:**
- `*plan` - Generate premium animation concepts
- `*coordinate` - Orchestrate multi-agent workflows
- `*review` - Evaluate animation quality

**Best for:**
- "I want a wow-factor hero section but don't know what animation to use"
- Creative exploration and concept generation
- High-level animation planning

---

### The Cinematographer (`gsap-cinematographer`)
**When to use:** You need research, trends, or motion design inspiration

**Commands:**
- `*research` - Deep dive into GSAP patterns
- `*trends` - Latest 2025 animation trends
- `*analyze` - Break down reference animations

**Best for:**
- "Show me premium scroll animation patterns from Awwwards"
- Research-backed implementation strategies
- Understanding motion design principles

---

### The VFX Artist (`gsap-vfx`)
**When to use:** You're ready to implement (you know what you want)

**Commands:**
- `*implement` - Build animations from scratch
- `*adapt` - Modify pattern library examples
- `*integrate` - Add to React/Next.js projects

**Best for:**
- "Implement a ScrollTrigger pin+scrub animation"
- Converting designs to code
- Framework integration (React, Next.js)

---

### The Editor (`gsap-editor`)
**When to use:** Something's wrong - bugs, jank, timing issues

**Commands:**
- `*debug` - Diagnose animation problems
- `*refine` - Polish timing and easing
- `*fix` - Resolve common pitfalls

**Best for:**
- "My animation is janky on mobile"
- Memory leaks, performance issues
- Timing and coordination problems

---

### The Tech Director (`gsap-tech-director`)
**When to use:** Validate production readiness (60fps, memory, accessibility)

**Commands:**
- `*validate` - Run 60fps performance tests
- `*profile` - Memory leak detection
- `*audit` - Accessibility compliance

**Best for:**
- "Is this production-ready?"
- Performance validation (60fps @ 4x CPU)
- Memory leak detection before deployment

---

## 🌳 Workflow Decision Tree

```
                            START HERE
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │  Do you know what animation  │
                  │  you want?                   │
                  └──────────────────────────────┘
                         │              │
                       YES             NO
                         │              │
                         ▼              ▼
              ┌─────────────────┐  ┌──────────────────┐
              │ Pattern Library │  │ Creative Ideation│
              │ (50 patterns)   │  │ Workflow         │
              └─────────────────┘  └──────────────────┘
                         │              │
                         └──────┬───────┘
                                ▼
                  ┌──────────────────────────────┐
                  │ Need research on specific    │
                  │ GSAP technique?              │
                  └──────────────────────────────┘
                         │              │
                       YES             NO
                         │              │
                         ▼              ▼
              ┌─────────────────┐  ┌──────────────────┐
              │ Research Pattern│  │ Animation        │
              │ Workflow        │  │ Production       │
              └─────────────────┘  │ (Full Pipeline)  │
                                   └──────────────────┘
                                            │
                                            ▼
                  ┌──────────────────────────────┐
                  │ Animation complete but has   │
                  │ issues?                      │
                  └──────────────────────────────┘
                         │              │
                       YES             NO
                         │              │
                         ▼              ▼
              ┌─────────────────┐  ┌──────────────────┐
              │ Debug/Optimize  │  │ Validation       │
              │ Workflows       │  │ Workflows        │
              └─────────────────┘  └──────────────────┘
                                            │
                                            ▼
                  ┌──────────────────────────────┐
                  │ Production Ready!            │
                  │ Ship It! 🚀                  │
                  └──────────────────────────────┘
```

---

## 📋 Workflow Reference

### Creative Ideation Workflow
**Use when:** "I want something cool but don't know what"

**What it does:**
- Generates 3-5 premium animation concepts
- Research-backed (Archon MCP + Deep-Research)
- Includes technical feasibility assessment
- Provides implementation roadmap

**Typical output:**
- Concept 1: ScrollSmoother parallax hero (complexity: medium)
- Concept 2: SplitText character reveal on scroll (complexity: simple)
- Concept 3: MorphSVG icon state transitions (complexity: high)

**Time:** 15-20 minutes

**Agent:** Director + Cinematographer

---

### Research GSAP Pattern Workflow
**Use when:** "How do I implement [specific GSAP technique]?"

**What it does:**
- Deep research into specific GSAP patterns
- Queries 89 Archon MCP sources
- Extracts code examples and best practices
- Validates against 2025 standards

**Example queries:**
- "How to implement ScrollTrigger pin+scrub?"
- "Best practices for SplitText animations"
- "React 19 + GSAP integration patterns"

**Time:** 10-15 minutes

**Agent:** Cinematographer

---

### Implement from Pattern Workflow
**Use when:** You found a pattern in the library and want to use it

**What it does:**
- Adapts pattern to your project structure
- Framework integration (React/Next.js)
- Customizes to your design system
- Adds proper cleanup/lifecycle management

**Time:** 10-20 minutes

**Agent:** VFX Artist

---

### Animation Production Workflow ⭐ FLAGSHIP
**Use when:** Full end-to-end animation development

**What it does:**
- Complete pipeline: concept → implementation → validation
- All 5 agents collaborate
- 3 quality gates (Editor pitfalls check, Tech Director performance, accessibility)
- Research-backed at every step

**Time:** 45-75 minutes

**Agents:** All 5 (Director orchestrates)

---

### Debug Animation Workflow
**Use when:** Animation has bugs, jank, or doesn't work as expected

**What it does:**
- Systematic debugging protocol
- Checks against 10 common pitfalls
- Chrome DevTools profiling
- Provides specific fixes with code examples

**Common issues fixed:**
- Memory leaks (ScrollTriggers not killed)
- Jank (animating wrong properties)
- Timing issues (immediateRender, conflicts)

**Time:** 15-30 minutes

**Agent:** Editor

---

### Optimize Performance Workflow
**Use when:** Animation works but performance is poor

**What it does:**
- Identifies bottlenecks (scripting, rendering, painting)
- GPU acceleration recommendations
- Frame budget analysis (<16ms per frame)
- Code refactoring for 60fps

**Time:** 20-30 minutes

**Agent:** Tech Director

---

### Refine Timing Workflow
**Use when:** Animation works but feels off (timing, easing, coordination)

**What it does:**
- Easing curve refinement
- Timeline choreography polish
- Stagger timing optimization
- Natural motion principles application

**Time:** 15-25 minutes

**Agent:** Editor

---

### Validate 60fps Workflow ✅ PRODUCTION GATE
**Use when:** Testing production readiness (60fps requirement)

**What it does:**
- 3-tier CPU throttle testing (1x, 4x, 6x)
- **60fps @ 4x CPU = MANDATORY** (blocking)
- Frame budget analysis
- Optimization recommendations if failed

**Pass criteria:**
- ✅ 60fps @ 1x CPU (normal devices)
- ✅ **60fps @ 4x CPU (mid-range) - MUST PASS**
- ✅ 30fps minimum @ 6x CPU (low-end acceptable)

**Time:** 10-15 minutes

**Agent:** Tech Director

---

### Memory Profiling Workflow ✅ PRODUCTION GATE
**Use when:** Testing for memory leaks before deployment

**What it does:**
- Heap snapshot comparison (baseline vs stress)
- Navigation cycle stress test (5x default)
- Detached DOM node detection
- Cleanup strategy recommendations

**Pass criteria:**
- ✅ Heap growth <5MB after 5 cycles
- ✅ Detached DOM nodes <10

**Time:** 10-15 minutes

**Agent:** Tech Director

---

### Harvest Patterns Workflow
**Use when:** You built something great and want to reuse it

**What it does:**
- Extracts animation as reusable pattern
- Adds to pattern library
- Creates YAML with metadata
- Documents for future use

**Time:** 5-10 minutes

**Agent:** Director

---

### Validate Modern Workflow
**Use when:** Checking codebase for GSAP 3.13+ compliance

**What it does:**
- Flags deprecated syntax
- Suggests premium plugin upgrades (now free!)
- Checks for 2025 best practices
- Modernization recommendations

**Time:** 10-15 minutes

**Agent:** Tech Director

---

### Accessibility Audit Workflow
**Use when:** WCAG compliance validation

**What it does:**
- Tests prefers-reduced-motion implementation
- Keyboard navigation validation
- Focus state checks
- Screen reader compatibility

**Pass criteria:**
- ✅ prefers-reduced-motion respected
- ✅ Keyboard navigation works
- ✅ Focus states visible

**Time:** 10-15 minutes

**Agent:** Tech Director

---

## 📚 Pattern Discovery

### By Category

**Scroll Effects** (8 patterns)
```bash
fd "scroll" bmad/gsap-excellence/patterns/
```
- Pin+scrub animations
- Parallax effects
- Velocity-based scrolling
- Video scrubbing on scroll

**Premium Plugins** (9 patterns) - FREE in 3.13!
```bash
grep -l "premium_plugin: true" bmad/gsap-excellence/patterns/*.yaml
```
- ScrollSmoother smooth scrolling
- MorphSVG icon transitions
- SplitText character reveals
- DrawSVG line animations
- MotionPath path-following

**Text Animations** (6 patterns)
```bash
fd "text" bmad/gsap-excellence/patterns/
```
- SplitText word-by-word reveals
- Character cascade effects
- Elastic line animations
- Typewriter effects

**Loading Sequences** (5 patterns)
```bash
fd "loading" bmad/gsap-excellence/patterns/
```
- Grid intros
- Cart drawer entrance
- Hero reveal sequences
- Staggered content loading

**React/Next.js Patterns** (6 patterns)
```bash
grep -l "nextjs\|react" bmad/gsap-excellence/patterns/**/*.yaml
```
- useGSAP() hook patterns
- SSR-safe initialization
- Route change animations
- App Router compatibility

**Interactive** (5 patterns)
```bash
fd "interactive" bmad/gsap-excellence/patterns/
```
- Drag interactions
- Magnetic hover effects
- Cursor-follow animations
- Click-triggered sequences

---

### By Complexity

**Simple** (15 patterns) - Good for learning
- Basic tweens
- Simple scroll reveals
- Fade in/out effects
- Basic timelines

**Medium** (25 patterns) - Production-ready
- ScrollTrigger animations
- Text reveals
- Premium plugin basics
- Framework integration

**High** (10 patterns) - Advanced showcases
- Complex ScrollSmoother setups
- Multi-timeline choreography
- Advanced MorphSVG
- WebGL integration

---

### By Framework

**Vanilla JS** (20 patterns)
```bash
grep -l "framework: vanilla" bmad/gsap-excellence/patterns/**/*.yaml
```

**React** (15 patterns)
```bash
grep -l "framework: react" bmad/gsap-excellence/patterns/**/*.yaml
```

**Next.js** (10 patterns)
```bash
grep -l "framework: nextjs" bmad/gsap-excellence/patterns/**/*.yaml
```

**Vue** (5 patterns)
```bash
grep -l "framework: vue" bmad/gsap-excellence/patterns/**/*.yaml
```

---

## 🚀 Quick Start Recipes

### Recipe 1: "I Need a Hero Animation, Fast"

```
1. Load Director agent: /bmad:gsap-excellence:agents:gsap-director
2. Run: *plan
3. Answer: "Hero section animation, modern tech startup, bold and dynamic"
4. Review 3-5 concepts
5. Choose concept
6. Director coordinates VFX Artist for implementation
7. 20-30 minutes total
```

---

### Recipe 2: "Scroll Animation for Product Showcase"

```
1. Browse pattern library:
   bmad/gsap-excellence/patterns/scroll-effects/
2. Find: pin-scrub-product-showcase.pattern.yaml
3. Load VFX Artist: /bmad:gsap-excellence:agents:gsap-vfx
4. Run: *adapt
5. Provide pattern ID and your HTML structure
6. VFX Artist implements with framework integration
7. 15-20 minutes total
```

---

### Recipe 3: "Text Reveal on Scroll (Premium)"

```
1. Pattern: splittext-scroll-reveal.pattern.yaml
   (Uses SplitText - FREE in 3.13!)
2. Load VFX Artist
3. Run: *implement
4. Customize timing, easing, reveal direction
5. Add to your project
6. 10-15 minutes total
```

---

### Recipe 4: "Full Production Pipeline"

```
1. Load Director agent
2. Run animation-production workflow
3. Director orchestrates:
   - Cinematographer: Research
   - VFX Artist: Implementation
   - Editor: Quality check (pitfalls)
   - Tech Director: Performance + accessibility validation
4. 3 quality gates before completion
5. Production-ready output
6. 45-75 minutes total
```

---

### Recipe 5: "Production Validation (Pre-Deploy)"

```
1. Load Tech Director: /bmad:gsap-excellence:agents:gsap-tech-director
2. Run validate-60fps workflow:
   - Provide dev server URL
   - 60fps @ 4x CPU MUST PASS (blocking)
   - Get pass/fail report
3. Run memory-profiling workflow:
   - Provide SPA page + navigation route
   - Heap growth <5MB = PASS
   - Get cleanup recommendations if leaking
4. Fix any issues
5. Re-test
6. Ship when both PASS ✅
7. 20-30 minutes total (if passing)
```

---

## 🔍 Debugging Workflows

### "My Animation is Janky"

**Symptoms:**
- Stuttering, frame drops
- Choppy movement
- Poor performance on mobile

**Solution:**
```
1. Load Editor agent
2. Run: *debug
3. Describe jank symptoms
4. Editor checks:
   - Animating layout properties? (Use transforms instead)
   - Heavy onUpdate callbacks?
   - Too many simultaneous tweens?
5. Follow optimization recommendations
6. Re-test with validate-60fps workflow
```

---

### "Memory Leak / Performance Degrades Over Time"

**Symptoms:**
- Page gets slower after navigation
- Memory grows with each route change
- Animations lag after a while

**Solution:**
```
1. Load Tech Director agent
2. Run memory-profiling workflow
3. Navigate away/back 5 times
4. Get heap snapshot analysis
5. Check for:
   - ScrollTriggers not killed (most common!)
   - Tweens accumulating (use quickTo)
   - Event listeners not removed
6. Apply cleanup recommendations
7. Re-test until heap growth <5MB
```

---

### "Animation Flickers on Start"

**Symptoms:**
- Flash of unstyled content
- Element jumps before animating
- Visible starting state

**Solution:**
```
1. Load Editor agent
2. Run: *fix
3. Issue: "Animation flickers on start"
4. Editor checks Pitfall 8.3: immediateRender
5. Solution: Use fromTo() instead of from()
   OR: Set immediateRender: false explicitly
6. Code example provided
7. Fixed in 5 minutes
```

---

### "ScrollTrigger Conflicts / Not Working"

**Symptoms:**
- Multiple animations fighting
- Scroll position wrong
- Animations trigger at wrong times

**Solution:**
```
1. Load Editor agent
2. Run: *debug
3. Issue: "ScrollTrigger conflicts"
4. Editor checks Pitfall 8.4 + 8.6
5. Solutions:
   - One ScrollTrigger per element
   - Use markers: true for debugging
   - Call ScrollTrigger.refresh() after DOM changes
6. Code fixes provided
```

---

## 💡 Pro Tips

### 1. Always Start with Research (Tier 1)

**Before implementing**, query Archon MCP:
```
Cinematographer: *research "ScrollTrigger pin scrub"
```

This finds:
- Official GSAP examples
- Codrops tutorials
- CodePen demos
- Production implementations

**Result:** Higher first-time success rate (60%+ vs 30% without research)

---

### 2. Use Premium Plugins (They're FREE!)

GSAP 3.13+ made ALL premium plugins free. Don't default to "basic" solutions:

**Instead of:**
- Manual smooth scrolling → Use ScrollSmoother
- CSS transitions for SVG → Use MorphSVG
- Manual text splitting → Use SplitText

**These were $99/year each, now FREE!**

---

### 3. Framework Integration is Built-In

All patterns and workflows support:
- React (useGSAP() hook)
- Next.js (SSR-safe, App Router)
- Vue (composition API)

**Don't reinvent:** Use provided cleanup patterns.

---

### 4. Validate Early, Validate Often

Run validation workflows **during development**, not just before deploy:

```
After each major animation:
1. validate-60fps (5 minutes)
2. memory-profiling (5 minutes)

If PASS → Continue
If FAIL → Fix immediately (easier now than later)
```

---

### 5. Leverage the Pattern Library

**50 production-ready patterns** covering:
- All major GSAP techniques
- Premium plugin showcases
- Framework integration
- 2025 best practices

**Before writing custom code**, search patterns:
```bash
# Find scroll animations
fd "scroll" bmad/gsap-excellence/patterns/

# Find React patterns
grep -l "react" bmad/gsap-excellence/patterns/**/*.yaml

# Find premium plugin examples
grep -l "premium_plugin: true" bmad/gsap-excellence/patterns/**/*.yaml
```

---

## 📖 Further Reading

**Checklists:**
- `/bmad/gsap-excellence/checklists/pitfalls.md` - 10 common pitfalls + solutions
- `/bmad/gsap-excellence/checklists/performance.md` - 60fps optimization checklist
- `/bmad/gsap-excellence/checklists/accessibility.md` - WCAG compliance

**Deep-Research Sections:**
- `/docs/Deep-Research/GSAP-Animation-Mastery/` - 43 comprehensive sections

**Pattern Library:**
- `/bmad/gsap-excellence/patterns/` - 50 production-ready patterns

**Workflow Documentation:**
- Each workflow has `README.md` with detailed usage instructions

---

## 🆘 Common Questions

### "Which workflow should I use?"

**Use the decision tree above**, or:
- **Unknown what I want** → creative-ideation
- **Know what I want** → implement-from-pattern
- **Need research** → research-gsap-pattern
- **Full pipeline** → animation-production
- **Has bugs** → debug-animation
- **Validate production** → validate-60fps + memory-profiling

---

### "How do I know if my animation is production-ready?"

Run **both validation workflows**:

1. **validate-60fps** - MUST achieve 60fps @ 4x CPU (blocking)
2. **memory-profiling** - MUST have <5MB heap growth + <10 detached nodes

**Both PASS** = Production ready ✅

---

### "Can I use premium plugins?"

**YES!** All premium plugins are FREE in GSAP 3.13+:
- ScrollSmoother
- MorphSVG
- SplitText
- DrawSVG
- MotionPath
- GSDevTools

**This module actively recommends these!**

---

### "How do I contribute a pattern?"

Run **harvest-patterns workflow**:
```
1. Load Director agent
2. Run harvest-patterns workflow
3. Provide your animation code
4. Director extracts as reusable pattern
5. Added to pattern library
6. Available for future projects
```

---

### "What if I'm stuck?"

**Escalation protocol:**
1. Check relevant checklist (pitfalls, performance, accessibility)
2. Load Editor agent: `*debug`
3. Describe specific issue
4. Editor provides research-backed solutions
5. If still stuck: Consult Deep-Research sections
6. Last resort: Create GitHub issue

---

## 🎬 Ready to Start?

Choose your path:

**→ [Creative Ideation](#creative-ideation-workflow)** - Generate concepts
**→ [Pattern Library](#pattern-discovery)** - Browse 50 patterns
**→ [Validation](#validation-workflows)** - Test production readiness

**→ Load an Agent** and get started!

---

_GSAP Excellence Engine - 2025 Edition_
_Module Status: 85-95% Complete (Production-Ready)_
_50 Patterns | 13 Workflows | 5 Specialized Agents | 3 Reference Checklists_
