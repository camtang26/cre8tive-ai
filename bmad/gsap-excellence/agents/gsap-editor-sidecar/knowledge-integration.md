# Knowledge Base Integration Guide

This file defines how the Editor agent integrates with knowledge bases (Archon MCP, Context7, Web Search) to provide expert-level GSAP debugging and refinement guidance.

---

## Domain Coverage

**Primary Expertise:**
- ALL 10 common GSAP pitfalls (8.1-8.10)
- Debugging patterns and diagnostic protocols
- Timing/easing refinement techniques
- Memory leak detection and cleanup strategies
- Performance optimization for 60fps animations

---

## Archon MCP Queries

### Debugging Patterns
- `rag_search_knowledge_base("GSAP debugging techniques")`
- `rag_search_knowledge_base("animation jank troubleshooting")`
- `rag_search_knowledge_base("GSAP common pitfalls")`
- `rag_search_knowledge_base("memory leaks GSAP cleanup")`
- `rag_search_knowledge_base("ScrollTrigger conflicts")`

### Timing & Easing Refinement
- `rag_search_knowledge_base("easing curve selection")`
- `rag_search_knowledge_base("timing refinement techniques")`
- `rag_search_knowledge_base("animation smoothness optimization")`

### Specific Issue Queries
- `rag_search_knowledge_base("fromTo immediateRender flicker")`
- `rag_search_knowledge_base("ScrollTrigger refresh issues")`
- `rag_search_knowledge_base("layout thrashing animations")`
- `rag_search_knowledge_base("overwrite mode conflicts")`

---

## Deep Research Pitfalls Checklist

### Pitfall 8.1 - Forgetting Cleanup (Memory Leaks)
**Severity:** HIGH
**Symptoms:**
- Animations continue after component unmount
- Memory usage grows over time
- Multiple instances of same animation

**Solution:**
- Kill timelines/tweens on unmount
- Use `gsap.context()` with cleanup in React
- `ScrollTrigger.getAll().forEach(st => st.kill())`

### Pitfall 8.2 - Animating Wrong Properties (No GPU Acceleration)
**Severity:** HIGH
**Symptoms:**
- Jank, dropped frames
- Animation feels sluggish
- Performance issues on mobile

**Solution:**
- Animate transform (x, y, scale, rotate) NOT top/left
- Animate opacity NOT visibility
- Avoid width, height, margin, padding

### Pitfall 8.3 - Ignoring immediateRender
**Severity:** MEDIUM
**Symptoms:**
- Elements jump/flicker before animation
- from() animations apply styles immediately
- Unwanted initial state changes

**Solution:**
- Set `immediateRender: false` for from() if needed
- Understand from() sets properties immediately
- Use fromTo() for explicit control

### Pitfall 8.4 - Multiple ScrollTriggers on Same Element
**Severity:** MEDIUM
**Symptoms:**
- ScrollTrigger conflicts
- Unpredictable animation behavior
- Animations fighting each other

**Solution:**
- One ScrollTrigger per element (usually)
- Use id to identify and kill old triggers
- Coordinate multiple animations in one timeline

### Pitfall 8.5 - Not Using overwrite Mode
**Severity:** MEDIUM
**Symptoms:**
- Animations conflict with each other
- Properties being animated simultaneously
- Unexpected animation results

**Solution:**
- Use `overwrite: "auto"` or `overwrite: true`
- Understand when animations need coordination
- Explicit overwrite for conflicting animations

### Pitfall 8.6 - Overlooking refresh() After Content Load
**Severity:** MEDIUM
**Symptoms:**
- ScrollTrigger positions wrong
- Animations trigger at wrong scroll points
- After images/content loads

**Solution:**
- `ScrollTrigger.refresh()` after content loads
- Use `invalidateOnRefresh: true`
- Account for dynamic content height changes

### Pitfall 8.7 - Using Deprecated Syntax
**Severity:** LOW
**Symptoms:**
- Console warnings
- Code may break in future versions
- Using GSAP 2.x syntax in 3.x

**Solution:**
- Use GSAP 3.x syntax (gsap.to not TweenMax.to)
- Check migration guide for v3
- Stay current with GSAP 3.13.0+

### Pitfall 8.8 - Uncontrolled Infinite Loops
**Severity:** LOW
**Symptoms:**
- Animation never stops
- Performance degradation over time
- `repeat: -1` without kill logic

**Solution:**
- Always have kill logic for infinite animations
- Clean up on component unmount
- Use `paused: true` for controlled loops

### Pitfall 8.9 - Not Testing Different Devices
**Severity:** HIGH
**Symptoms:**
- Works on desktop, fails on mobile
- iOS Safari specific issues
- Performance varies dramatically

**Solution:**
- Test on real devices
- Use CPU throttling in DevTools
- Account for mobile viewport/address bar
- Use `normalizeScroll()` for iOS

### Pitfall 8.10 - Misusing from() vs fromTo()
**Severity:** MEDIUM
**Symptoms:**
- Unexpected starting values
- Elements not where expected initially
- from() applies values immediately

**Solution:**
- from() animates FROM value TO current state
- fromTo() gives explicit start AND end
- Use fromTo() when you need both control

---

## Deep Research Sections Reference

- **Section 8.1-8.10:** ALL Common Pitfalls (CRITICAL - memorize these!)
- **Section 5.3:** Debugging Jank → Performance debugging
- **Section 5.4:** Memory Management → Cleanup patterns
- **Section 3.7:** Cleanup and Reinitialization → Lifecycle management
- **Section 2.2:** Mastering Timeline Techniques → Timing refinement

---

## Web Search Fallback

When Archon/Context7 don't have the answer, use web search:

- `WebSearch("GSAP [exact_error_message]")`
- `WebSearch("ScrollTrigger [specific_issue] solution")`
- `WebSearch("GSAP debugging [symptom] 2025")`

---

## Diagnostic Protocol

When diagnosing animation issues, follow this systematic approach:

1. **Symptom Identification** - What's the observable problem?
2. **Pitfall Cross-Reference** - Match against 8.1-8.10 checklist
3. **Archon Query** - Search for specific debugging patterns
4. **Deep-Research Lookup** - Reference relevant sections
5. **Propose Fix** - Cite pitfall number and solution
6. **Verify** - Check if fix resolves root cause

---

## Systematic Review Protocol

### Step 1: HIGH Severity Check (Production Blockers) - MUST PASS

Verify:
- [ ] **8.1 Cleanup:** ALL tweens/timelines/triggers killed on unmount?
- [ ] **8.2 GPU Rule:** ONLY animating transform/opacity (NO top/left/width/height)?
- [ ] **8.9 Device Testing:** Tested on actual iOS + Android? Mobile performance acceptable?

**If ANY fail → BLOCK VFX Artist code, send back for fixes**

### Step 2: MEDIUM Severity Check (Quality Gates) - 80%+ Required

- [ ] **8.3:** `.from()` tweens using `immediateRender: false` after timeline position 0?
- [ ] **8.4:** Only ONE ScrollTrigger per element property?
- [ ] **8.5:** Using `overwrite: 'auto'` on interactive animations?
- [ ] **8.6:** `ScrollTrigger.refresh()` after images/content load?
- [ ] **8.10:** Using `.fromTo()` for toggle states (not repeated `.from()`)?

**If <80% pass → Request fixes for most critical issues**

### Step 3: LOW Severity Check (Code Quality) - 50%+ Acceptable

- [ ] **8.7:** Using GSAP 3.x syntax (NOT TweenMax/TimelineMax)?
- [ ] **8.8:** Infinite loops respect prefers-reduced-motion?

### Step 4: Performance/Memory Validation

- [ ] **Section 5.3:** If jank suspected, profile with Chrome DevTools Performance
- [ ] **Section 5.4:** If SPA, verify memory doesn't grow on navigation
- [ ] **Section 3.7:** If SPA, verify cleanup pattern implemented

### Step 5: Final Validation

- [ ] NO console errors during animation
- [ ] NO GSAP warnings in console
- [ ] Smooth playback (subjective Editor assessment - does it FEEL smooth?)

---

## Production Sign-Off Requirements

### BLOCKING (Must Pass):
- [ ] ALL HIGH severity pitfalls (8.1, 8.2, 8.9): PASS
- [ ] NO console errors during animation execution
- [ ] NO GSAP warnings in console

### QUALITY (Should Pass):
- [ ] 80%+ MEDIUM severity pitfalls (8.3, 8.4, 8.5, 8.6, 8.10): PASS
- [ ] Smooth visual playback (subjective assessment)
- [ ] Timing feels intentional (not random/mechanical)

### NICE-TO-HAVE (Acceptable if Pass):
- [ ] 50%+ LOW severity pitfalls (8.7, 8.8): PASS
- [ ] Modern GSAP 3.x syntax used
- [ ] Code follows common patterns

**If ANY BLOCKING criteria fail:**
→ Send back to VFX Artist with specific issues and code examples

**If QUALITY criteria <80%:**
→ Request fixes for most impactful issues before Tech Director review

**If ALL thresholds met:**
→ Approve and pass to Tech Director for final production validation

---

## Usage Directive

### When Reviewing VFX Artist Code:

1. **Open checklist:** `{module_root}/checklists/pitfalls.md`
2. **Run systematic review:** HIGH → MEDIUM → LOW severity checks
3. **Block if HIGH severity fails:** Send back to VFX Artist with specific issues
4. **Request fixes if MEDIUM <80%:** List priority issues to address
5. **Accept if thresholds met:** Pass to Tech Director for final validation

### When Debugging Animation Issues:

1. **Match symptoms:** Use pitfalls.md "Symptoms" sections to diagnose
2. **Systematic elimination:** Check HIGH severity first (most common issues)
3. **Profile if needed:** Section 5.3 (Chrome DevTools Performance) for jank
4. **Memory check if SPA:** Section 5.4 (heap snapshots) for leaks
5. **Reference Deep-Research:** Sections 8.1-8.10 for detailed solutions

### When Providing Feedback to VFX Artist:

- ✅ **Be specific:** "Pitfall 8.2: Animating `top` property on line 45 - use `y` instead"
- ✅ **Cite severity:** "HIGH severity issue (blocks production)"
- ✅ **Provide code example:** Show WRONG vs CORRECT implementation
- ✅ **Explain impact:** "This causes jank on mobile devices (drops to 20fps)"
- ❌ **Don't just say "fix this":** Give actionable feedback with examples

### Priority During Review:
1. HIGH severity (8.1, 8.2, 8.9) - Catch FIRST, non-negotiable
2. Common bugs (8.5 overwrite, 8.6 refresh) - Catch if present
3. Code quality (8.7 syntax) - Mention but don't block
