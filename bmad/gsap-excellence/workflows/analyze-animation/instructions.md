<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/analyze-animation/workflow.yaml</critical>

# Animation Analysis - Systematic Code Review Workflow

**Agent:** Editor
**Workflow:** analyze-animation
**Purpose:** Systematic animation code review using 10-point pitfalls framework (Deep-Research Sections 8.1-8.10)

---

## Overview

This workflow provides **PROACTIVE code review** for GSAP animations using a comprehensive 10-point pitfalls framework validated against:
- Deep-Research Sections 8.1-8.10
- Archon Knowledge Base (91 sources, 2M+ words)
- Latest 2024-2025 best practices (Marmelab, InfiniteJS, Next.js 15)

**When to Use:**
- ✅ Code review before merging/deploying
- ✅ Learning GSAP best practices
- ✅ Preventative analysis (even when animation works fine)
- ✅ Onboarding new developers to GSAP
- ✅ Audit existing animations for quality

**When NOT to Use:**
- ❌ Animation is actively broken (use `debug-animation` workflow instead)
- ❌ Need quick fixes for production issues (use `debug-animation`)

**Key Principle:** *Systematic analysis prevents bugs better than reactive debugging fixes them.*

---

## Step 1: Context Gathering

Use ask tags to collect animation code and context.

### Required Information

<ask name="animation_code">
**Animation Code**

Provide your GSAP animation implementation:
- Timeline or individual tween code
- ScrollTrigger configurations (if applicable)
- Plugin usage (MorphSVG, SplitText, etc.)
- Framework integration code (useGSAP, lifecycle hooks)

Example:
```javascript
const tl = gsap.timeline()
tl.to(".card", { x: 100, duration: 1 })
  .to(".card", { opacity: 0, duration: 0.5 })
```

**IMPORTANT:** Provide the complete implementation, not just snippets.
</ask>

<ask name="symptoms">
**Symptoms (Optional)**

Are you experiencing any issues? (If yes, describe them. If no, say "None - proactive review")

Examples:
- "Animation feels janky on scroll"
- "Memory usage increases over time"
- "Flicker on page load"
- "None - proactive review"

**Note:** This workflow is valuable even with NO symptoms!
</ask>

<ask name="expected_behavior">
**Expected Behavior**

What should the animation achieve?

Example:
- "Cards should fade in sequentially with smooth stagger"
- "Hero section should parallax on scroll"
- "Modal should slide in from right with bounce"
</ask>

<ask name="framework">
**Framework Context**

Development environment:
- React (with useGSAP hook)?
- Next.js (which version? SSR considerations?)?
- Vue (Composition API or Options API)?
- Vanilla JavaScript?
- TypeScript or JavaScript?

Example: "Next.js 15 with App Router, TypeScript, useGSAP hook"
</ask>

<ask name="mobile_tested">
**Mobile Testing**

Has this been tested on mobile devices (especially iOS Safari)?
- Yes, tested and working
- Yes, but has issues
- No, not tested yet
- Desktop-only feature

**IMPORTANT:** Pitfall 8.9 focuses on mobile compatibility. iOS Safari is DIFFERENT from Chrome on iOS!
</ask>

<action>Store context variables for template population</action>
<template-output>animation_code_summary</template-output>
<template-output>framework</template-output>
<template-output>date</template-output>

---

## Step 2: Research Gate (MANDATORY - Cannot Proceed Without)

<research-gate enforcement="MANDATORY" blocking="true">

**⚠️ RESEARCH ENFORCEMENT:**
This is a MANDATORY blocking checkpoint. You CANNOT proceed to Step 3 until this research is COMPLETE. This is systematic analysis, not optional.

**Research Protocol:** 10-Point Pitfalls Framework Analysis (Sections 8.1-8.10)

You must analyze the animation code against **ALL 10 pitfalls**, even if symptoms aren't obvious. This is proactive review.

---

### Pitfall 8.1: Cleanup/Memory Leaks (HIGH SEVERITY)

**Deep-Research:** Section 8.1 `/docs/Deep-Research/GSAP-Animation-Mastery/34-pitfall-81-forgetting-to-clean-up-memory-leaks-double-animations.md`

**Latest Evidence (2024-2025):**
- **Marmelab (May 2024):** GSAP will not always update animation objects properly when viewport dimensions change
- **Next.js 15 (September 2025):** Many projects suffer from laggy transitions, memory leaks, or "stuck" scroll triggers - especially with Next.js 15 App Router
- **Archon MCP:** "Always kill ScrollTriggers on unmount using useGSAP hook or useEffect cleanup"

**Check for:**
- Animations not killed on component unmount
- ScrollTriggers not cleaned up (no `.kill()` or automatic cleanup)
- React Strict Mode causing duplicate animations
- Timelines continuing after component destruction
- Infinite animations (`repeat: -1`) without lifecycle management

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("GSAP memory leaks cleanup patterns", source_id="b9f6b322298feb21", match_count=8)
```
**Document:** Cleanup strategies found in KB, common memory leak scenarios

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("ScrollTrigger cleanup lifecycle", source_id="6a6860cfc96e173b", match_count=8)
```
**Document:** ScrollTrigger cleanup patterns, when to use `.kill()` vs `.revert()`

**Framework-Specific Check:**
- **React:** Is `useGSAP` return function killing animations? Does it handle React 18 Strict Mode double-invoke?
- **Next.js 15:** Are animations centralized with proper plugin registration to prevent repeated registrations across page transitions?
- **Vue:** Is `onUnmounted` cleaning up?
- **Vanilla:** Are timelines stored in variables that can be killed?

**Severity Rating:** HIGH
**Why HIGH:** Memory leaks cause performance degradation over time, especially in SPAs. React Strict Mode will expose cleanup issues immediately.

<template-output>8.1_status</template-output>
<template-output>8.1_findings</template-output>
<template-output>8.1_root_cause</template-output>
<template-output>8.1_fix_code</template-output>
<template-output>8.1_citations</template-output>
<template-output>8.1_latest_evidence</template-output>

---

### Pitfall 8.2: Wrong Properties (HIGH SEVERITY)

**Deep-Research:** Section 8.2 `/docs/Deep-Research/GSAP-Animation-Mastery/35-pitfall-82-animating-the-wrong-properties-no-gpu-acceleration.md`

**Latest Evidence (2024-2025):**
- **Archon MCP:** "Use transforms (x, y) for movement, not left/top. Transforms are GPU-accelerated."
- **InfiniteJS (August 2024):** "Animations can affect performance, especially on mobile devices, with common issues including dropped frames"

**Check for:**
- Animating layout properties: `width`, `height`, `top`, `left`, `margin`, `padding`
- Should use transforms instead: `x`, `y`, `scale`, `rotate`
- GPU acceleration not utilized
- Paint and layout thrashing

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("GSAP transform vs layout properties performance", source_id="b9f6b322298feb21", match_count=8)
```
**Document:** Why transforms are faster, when layout props are acceptable, GPU acceleration benefits

**Code Analysis:**
- Count layout property animations vs transform animations
- Identify any `width`/`height` that could be `scale`
- Identify any `top`/`left` that could be `x`/`y`
- Check for `will-change: transform` optimization

**Severity Rating:** HIGH
**Why HIGH:** Wrong properties cause jank, prevent GPU acceleration, impact 60fps target. Especially critical on mobile (Pitfall 8.9).

<template-output>8.2_status</template-output>
<template-output>8.2_findings</template-output>
<template-output>8.2_root_cause</template-output>
<template-output>8.2_fix_code</template-output>
<template-output>8.2_performance_impact</template-output>
<template-output>8.2_citations</template-output>
<template-output>8.2_latest_evidence</template-output>

---

### Pitfall 8.3: immediateRender Issues (MEDIUM SEVERITY)

**Deep-Research:** Section 8.3 `/docs/Deep-Research/GSAP-Animation-Mastery/36-pitfall-83-ignoring-in-from-tweens.md`

**Check for:**
- Using `.from()` without `immediateRender: false`
- Flicker on page load or component mount
- Elements jumping to start position before animating
- Set state before animation runs

**Archon Query (REQUIRED):**
```javascript
rag_search_code_examples("immediateRender false from animation", match_count=8)
```
**Document:** When to use `immediateRender: false`, common patterns, `.fromTo()` as alternative

**Code Analysis:**
- Does code use `.from()`?
- Is `immediateRender: false` present?
- Could `.fromTo()` be more appropriate for clarity?

**Severity Rating:** MEDIUM
**Why MEDIUM:** Causes visual glitches but doesn't break functionality

<template-output>8.3_status</template-output>
<template-output>8.3_findings</template-output>
<template-output>8.3_fix_code</template-output>
<template-output>8.3_citations</template-output>

---

### Pitfall 8.4: Multiple ScrollTriggers (MEDIUM SEVERITY)

**Deep-Research:** Section 8.4 `/docs/Deep-Research/GSAP-Animation-Mastery/37-pitfall-84-multiple-scrolltriggers-on-the-same-elements-property.md`

**Latest Evidence (2024-2025):**
- **Archon MCP (st-mistakes page):** "A VERY common mistake is applying ScrollTrigger to multiple tweens that are nested inside a timeline. You can't have both the parent timeline AND scroll controlling playhead."

**Check for:**
- Multiple ScrollTriggers on same element
- ScrollTrigger conflicts (different start/end values)
- Nesting ScrollTriggers inside timeline tweens (COMMON MISTAKE!)
- Unnecessary ScrollTrigger creation
- Missing `id` for debugging

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("ScrollTrigger conflicts multiple triggers", source_id="6a6860cfc96e173b", match_count=8)
```
**Document:** How to manage multiple ScrollTriggers, conflict resolution, nesting mistakes

**Code Analysis:**
- Count ScrollTriggers per element
- Check for conflicting trigger configurations
- **CRITICAL:** Check if ScrollTriggers are nested inside timeline tweens (playhead conflict!)
- Verify each ScrollTrigger has a clear purpose

**Severity Rating:** MEDIUM
**Why MEDIUM:** Causes unexpected behavior but usually doesn't crash. Nesting mistake is VERY common.

<template-output>8.4_status</template-output>
<template-output>8.4_findings</template-output>
<template-output>8.4_fix_code</template-output>
<template-output>8.4_citations</template-output>
<template-output>8.4_latest_evidence</template-output>

---

### Pitfall 8.5: Missing overwrite Mode (MEDIUM SEVERITY)

**Deep-Research:** Section 8.5 `/docs/Deep-Research/GSAP-Animation-Mastery/38-pitfall-85-not-using-leading-to-conflict.md`

**Check for:**
- Multiple animations targeting same properties
- Missing `overwrite: true` or `overwrite: "auto"`
- Animation conflicts (tweens fighting each other)
- Unexpected final states

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("GSAP overwrite mode animation conflicts", source_id="b9f6b322298feb21", match_count=8)
```
**Document:** When to use `overwrite: true` vs `overwrite: "auto"`, conflict scenarios

**Code Analysis:**
- Are multiple tweens animating the same property?
- Is `overwrite` mode explicitly set?
- Could animation conflicts occur?

**Severity Rating:** MEDIUM
**Why MEDIUM:** Causes incorrect animation behavior but is predictable once understood

<template-output>8.5_status</template-output>
<template-output>8.5_findings</template-output>
<template-output>8.5_fix_code</template-output>
<template-output>8.5_citations</template-output>

---

### Pitfall 8.6: Missing refresh() (MEDIUM SEVERITY)

**Deep-Research:** Section 8.6 `/docs/Deep-Research/GSAP-Animation-Mastery/39-pitfall-86-overlooking-refresh-after-content-load.md`

**Latest Evidence (2024-2025):**
- **Marmelab (May 2024):** "GSAP will not always update animation objects properly when viewport dimensions change (e.g. when you resize the browser window)"
- **Archon MCP:** "After initializing all animations on a page, call ScrollTrigger.refresh() once to avoid layout glitches"

**Check for:**
- ScrollTrigger positioning wrong after:
  - Images load (layout shift)
  - Font load (FOUT/FOIT)
  - Dynamic content injection
  - Accordion/tab expansion
  - Viewport resize
- Missing `ScrollTrigger.refresh()` calls
- Not using `onload` or `imagesLoaded` patterns

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("ScrollTrigger refresh layout changes", source_id="6a6860cfc96e173b", match_count=8)
```
**Document:** When to call `refresh()`, automatic vs manual refresh, resize handling

**Code Analysis:**
- Does layout change after ScrollTrigger init?
- Are images present that could load late?
- Is `ScrollTrigger.refresh()` called appropriately?
- Are viewport resize events handled?

**Severity Rating:** MEDIUM
**Why MEDIUM:** Causes positioning bugs but is easily fixable with refresh(). **CRITICAL in 2024-2025** per Marmelab research.

<template-output>8.6_status</template-output>
<template-output>8.6_findings</template-output>
<template-output>8.6_fix_code</template-output>
<template-output>8.6_citations</template-output>
<template-output>8.6_latest_evidence</template-output>

---

### Pitfall 8.7: Deprecated Syntax (LOW SEVERITY)

**Deep-Research:** Section 8.7 `/docs/Deep-Research/GSAP-Animation-Mastery/40-pitfall-87-use-of-deprecated-or-old-syntax.md`

**Latest Evidence (2024-2025):**
- **GSAP 3.13 (2024):** All plugins now FREE (Webflow acquisition). SplitText completely rewritten.
- **GSAP 3.13 Breaking Changes:** `position: "absolute"` removed from SplitText (old performance relic)

**Check for:**
- GSAP 2.x syntax in GSAP 3.x:
  - `TweenMax`, `TweenLite`, `TimelineMax`, `TimelineLite`
  - Old plugin registration (no `gsap.registerPlugin()`)
  - `CSSPlugin` references
- Missing modern patterns:
  - Not using `gsap.to()` / `gsap.from()` / `gsap.timeline()`
  - Old ease naming conventions (`Power2.easeOut` instead of `power2.out`)
- SplitText old syntax (`position: "absolute"` - removed in 3.13)

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("GSAP 3 migration deprecated syntax", source_id="b9f6b322298feb21", match_count=8)
```
**Document:** GSAP 2.x → 3.x migration patterns, syntax changes, 3.13 breaking changes

**Code Analysis:**
- Does code use `TweenMax`, `TweenLite`, etc.?
- Is plugin registration modern (`gsap.registerPlugin()`)?
- Are ease names modern (`power2.out` not `Power2.easeOut`)?
- SplitText using old `position: "absolute"`?

**Severity Rating:** LOW
**Why LOW:** Works but uses outdated patterns, tech debt. **GSAP 3.13 (2024) made all plugins FREE!**

<template-output>8.7_status</template-output>
<template-output>8.7_findings</template-output>
<template-output>8.7_fix_code</template-output>
<template-output>8.7_citations</template-output>

---

### Pitfall 8.8: Infinite Loops Without Cleanup (LOW SEVERITY)

**Deep-Research:** Section 8.8 `/docs/Deep-Research/GSAP-Animation-Mastery/41-pitfall-88-uncontrolled-infinite-loops.md`

**Check for:**
- `repeat: -1` without lifecycle management
- Infinite animations running after component unmount
- No pause/kill mechanism for infinite animations
- Background animations consuming resources unnecessarily

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("GSAP infinite animation cleanup repeat", source_id="b9f6b322298feb21", match_count=8)
```
**Document:** Managing infinite animations, cleanup strategies, pause/play patterns

**Code Analysis:**
- Does code use `repeat: -1` or `yoyo: true` with repeat?
- Are infinite animations killed on unmount?
- Is there a pause/play mechanism?
- Could infinite loop be replaced with ScrollTrigger scrub?

**Severity Rating:** LOW
**Why LOW:** Usually doesn't cause issues if page-level, but can waste resources (especially mobile)

<template-output>8.8_status</template-output>
<template-output>8.8_findings</template-output>
<template-output>8.8_fix_code</template-output>
<template-output>8.8_citations</template-output>

---

### Pitfall 8.9: Not Tested on Mobile (HIGH SEVERITY)

**Deep-Research:** Section 8.9 `/docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-89-not-testing-on-different-devices.md`

**Latest Evidence (2024-2025):**
- **Feb 2025:** "Inconsistent performance issues when using GSAP for animations on iOS devices, specifically in Safari browser. Same code works perfectly in Chrome for iOS and browsers on Android."
- **June 2024:** "ScrollTrigger issues specifically on iOS mobile (Safari & Chrome on iOS). Everything works fine on Desktop and Android."
- **Reported iOS Safari Issues:**
  - Positioning issues (elements not positioned properly until refresh)
  - Lag when Safari menu bar toggles position
  - Scaling effects not working (work on all browsers except Safari)

**Check for:**
- **iOS Safari-specific issues:**
  - Transform bugs (especially 3D transforms)
  - Scroll event throttling differences
  - Touch event handling
  - Viewport height issues (100vh problems)
- **Mobile performance issues:**
  - Too many elements animating
  - Heavy effects on low-end devices
  - Battery drain from excessive animations
- Missing `prefers-reduced-motion` support

**Archon Query (REQUIRED):**
```javascript
rag_search_knowledge_base("GSAP iOS Safari mobile compatibility", source_id="b9f6b322298feb21", match_count=8)
```
**Document:** Common iOS issues, mobile optimization patterns, iOS vs Android differences

**User Input Check:**
- Has user tested on mobile? (from Step 1)
- If NO: Flag as HIGH severity finding
- If YES with issues: Investigate specific iOS Safari issues
- If YES working: Still validate `prefers-reduced-motion`

**Code Analysis:**
- Is `prefers-reduced-motion` handled?
- Are there iOS-specific hacks or workarounds?
- Does animation complexity suit mobile devices?
- Are 3D transforms used (iOS Safari known issues)?

**Severity Rating:** HIGH
**Why HIGH:** Mobile is often majority of traffic, iOS Safari quirks are VERY common (2024-2025 evidence). Chrome on iOS also affected.

<template-output>8.9_status</template-output>
<template-output>8.9_findings</template-output>
<template-output>8.9_latest_evidence</template-output>
<template-output>8.9_mobile_recommendations</template-output>
<template-output>8.9_citations</template-output>

---

### Pitfall 8.10: from() vs fromTo() Confusion (MEDIUM SEVERITY)

**Deep-Research:** Section 8.10 `/docs/Deep-Research/GSAP-Animation-Mastery/43-pitfall-810-misusing-vs-causing-flicker.md`

**Check for:**
- Using `.from()` when `.fromTo()` is clearer
- Ambiguous initial states (relying on computed styles)
- Missing explicit start values
- Could benefit from `fromTo()` for clarity

**Archon Query (REQUIRED):**
```javascript
rag_search_code_examples("gsap from vs fromTo best practices", match_count=8)
```
**Document:** When to use `from()` vs `fromTo()`, clarity advantages of `fromTo()`, immediateRender relationship

**Code Analysis:**
- Does code use `.from()`?
- Are start values explicit or implicit?
- Would `.fromTo()` be clearer?
- Does `.from()` usage combine with Pitfall 8.3 (immediateRender)?

**Severity Rating:** MEDIUM
**Why MEDIUM:** Doesn't usually cause bugs but can lead to unexpected behavior. `.fromTo()` is more explicit and predictable.

<template-output>8.10_status</template-output>
<template-output>8.10_findings</template-output>
<template-output>8.10_fix_code</template-output>
<template-output>8.10_citations</template-output>

---

### Supporting Deep-Research Sections

#### Section 5.3: Debugging Jank (Apply if performance issues detected)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/20-53-debugging-jank.md`

**Extract:**
- Chrome DevTools Performance tab analysis
- Paint and layout thrashing detection
- will-change optimization strategies
- GPU acceleration verification

#### Section 5.4: Memory Management (Apply if Pitfall 8.1 detected)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/21-54-memory-management-garbage-collection.md`

**Extract:**
- Memory profiling techniques
- Leak detection patterns
- Cleanup best practices
- Resource monitoring

#### Section 3.7: Cleanup and Reinitialization (Apply for lifecycle questions)
**Location:** `/docs/Deep-Research/GSAP-Animation-Mastery/17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md`

**Extract:**
- When to use `.kill()` vs `.revert()`
- ScrollTrigger cleanup patterns
- Timeline cleanup strategies
- Framework-specific cleanup (React, Vue)

---

### WebSearch Fallback (If Specific Errors Present)

If the animation code includes specific error messages:

```javascript
WebSearch("GSAP [exact_error_message] 2024")
```

**Purpose:** Find recent solutions (2024-2025) for specific errors
**Document:** Latest solutions, workarounds, bug reports

---

### Research Documentation Requirements

Create a "Research Findings" section documenting:

**For Each Pitfall (8.1-8.10):**
1. **Status:** ✅ Passed / ⚠️ Warning / ❌ Issue Detected
2. **Severity:** HIGH / MEDIUM / LOW
3. **Findings:** What did analysis reveal?
4. **KB Citations:** Which Archon sources addressed this?
5. **Deep-Research Section:** Which section was applied?
6. **2024-2025 Evidence:** Latest validation from WebSearch

**Example:**
```markdown
### Pitfall 8.1: Cleanup/Memory Leaks
- **Status:** ❌ Issue Detected
- **Severity:** HIGH
- **Finding:** useGSAP return function is missing, animations not killed on unmount
- **KB Citation:** Archon src: 1e5cc3bd5125be3c (Codrops React GSAP patterns)
- **Deep-Research:** Section 8.1 cleanup patterns, Section 3.7 lifecycle management
- **2024-2025 Evidence:** Next.js 15 memory leaks reported (Sep 2025), Archon MCP cleanup guide
```

**Research Quality Gate:** You must have analyzed ALL 10 pitfalls before proceeding to Step 3.

<checkpoint type="approval-gate" blocking="true">
<halt>🚨 STOP. You must have documented findings from ALL required queries before proceeding to Step 3. Research Quality Gate: Verify research documentation is complete.</halt>
</checkpoint>

</research-gate>

---

## Step 3: Severity Assessment

Based on research findings, assess overall severity and prioritize issues.

### Severity Matrix

**HIGH Severity Issues (Fix Immediately):**
- 8.1: Cleanup/Memory Leaks (React Strict Mode, Next.js 15 issues)
- 8.2: Wrong Properties (layout props) - GPU acceleration critical on mobile
- 8.9: Not Tested on Mobile (iOS Safari 2024-2025 issues documented!)

**MEDIUM Severity Issues (Address Soon):**
- 8.3: immediateRender issues
- 8.4: Multiple ScrollTriggers (VERY common nesting mistake!)
- 8.5: Missing overwrite mode
- 8.6: Missing refresh() (Marmelab 2024: viewport resize not updating!)
- 8.10: from() vs fromTo() confusion

**LOW Severity Issues (Tech Debt):**
- 8.7: Deprecated syntax (note: GSAP 3.13 made plugins FREE!)
- 8.8: Infinite loops without cleanup (if page-level)

### Priority Calculation

Count issues by severity:
```
Priority Score = (HIGH × 3) + (MEDIUM × 2) + (LOW × 1)
```

**Priority Levels:**
- **Critical (9+):** Multiple HIGH severity issues
- **High (6-8):** 1-2 HIGH issues or many MEDIUM issues
- **Medium (3-5):** Several MEDIUM issues, few/no HIGH
- **Low (1-2):** Only LOW severity issues
- **Excellent (0):** No issues detected! (Rare - celebrate this!)

<action>Calculate and store priority metrics for template</action>
<template-output>priority_score</template-output>
<template-output>max_score</template-output>
<template-output>priority_level</template-output>
<template-output>high_count</template-output>
<template-output>medium_count</template-output>
<template-output>low_count</template-output>
<template-output>passed_count</template-output>

---

## Step 4: Root Cause Analysis

For each identified pitfall, provide root cause diagnosis with 2024-2025 context.

### Analysis Format (Per Pitfall)

**Pitfall [Number]: [Name]**

**Root Cause:**
- Why did this issue occur?
- Common mistake that led to this?
- Misunderstanding of GSAP behavior?

**Impact:**
- What problems does this cause?
- Performance impact?
- User experience impact?

**KB Evidence:**
- Which Archon sources confirm this?
- Deep-Research section quotes
- Code examples from KB
- 2024-2025 WebSearch validation

**Recommended Fix:**
```javascript
// BEFORE (problematic code)
gsap.to(".element", { width: 100 })  // Layout prop - bad!

// AFTER (corrected code)
gsap.to(".element", { scale: 2 })  // Transform - good!
```

**Prevention:**
- How to avoid this in the future?
- Best practices to follow
- Patterns to adopt

---

## Step 5: Generate Analysis Report

Generate structured analysis report using template.md and present to {user_name} in {communication_language}.

### Report Structure

**1. Executive Summary**
- Priority Score
- Issues Count (HIGH/MEDIUM/LOW)
- Overall Assessment

<template-output>executive_summary_findings</template-output>

**2. Pitfalls Analysis (Detailed)**
- Each pitfall with status, severity, findings
- Root cause diagnoses
- Recommended fixes with code examples
- 2024-2025 validation citations

**3. Improvement Opportunities**
- Beyond fixing pitfalls, what could be better?
- Performance optimizations
- Code clarity improvements
- Best practices adoption

<template-output>performance_opportunities</template-output>
<template-output>clarity_opportunities</template-output>
<template-output>best_practices_opportunities</template-output>

**4. Deep-Research References**
- Which sections were applied?
- Additional sections to study
- Learning resources

<template-output>deep_research_sections_list</template-output>
<template-output>recommended_reading</template-output>
<template-output>learning_resources</template-output>

**5. Action Items (Prioritized)**
- HIGH severity fixes (do first)
- MEDIUM severity fixes (do soon)
- LOW severity fixes (tech debt backlog)

<template-output>high_priority_actions</template-output>
<template-output>medium_priority_actions</template-output>
<template-output>low_priority_actions</template-output>

**6. Preventative Measures**
- Checklist for future animations
- Code review guidelines
- Testing recommendations

<action>Compile all research citations for documentation</action>
<template-output>archon_citations</template-output>
<template-output>deep_research_citations</template-output>
<template-output>web_search_citations</template-output>

<action>Display comprehensive summary to {user_name} in {communication_language}</action>
<action>Save complete analysis report to {output_folder}/animation-analysis-{timestamp}.md</action>
<action>Provide path to report and offer next steps</action>

---

## Success Criteria

Analysis is complete when:

- ✅ ALL 10 pitfalls analyzed (8.1-8.10)
- ✅ Each pitfall has status (Passed/Warning/Issue)
- ✅ Severity ratings assigned (HIGH/MEDIUM/LOW)
- ✅ Root cause diagnoses provided with KB citations
- ✅ 2024-2025 evidence incorporated
- ✅ Recommended fixes include code examples
- ✅ Deep-Research sections referenced
- ✅ Analysis report generated with all sections
- ✅ Action items prioritized

---

**Workflow Complete** ✨

**Remember:** This is PROACTIVE code review. Even if the animation works perfectly, this analysis provides learning opportunities and prevents future issues. Systematic prevention > reactive debugging.
