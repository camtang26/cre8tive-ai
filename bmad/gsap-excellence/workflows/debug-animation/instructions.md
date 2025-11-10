# Debug Animation Workflow Instructions
# Systematic debugging using 10-point pitfalls framework and root cause tracing

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/debug-animation/workflow.yaml</critical>

<workflow>

<step n="1" goal="Gather Debug Information & Symptoms">
<action>Communicate in {communication_language} throughout workflow execution</action>
<action>Introduce the systematic debugging workflow with film editor precision</action>

✂️ **Systematic Debugging (10-Point Pitfalls Framework)**

*"Let me diagnose this issue methodically. I'll use the 10-point pitfalls framework to trace the root cause, then fix it with research-backed solutions."*

This isn't guesswork debugging - I'll systematically analyze your animation against the 10 most common GSAP pitfalls:
- **Deep-Research Sections 8.1-8.10:** Comprehensive pitfalls framework
- **Archon MCP:** 89 sources of GSAP debugging patterns
- **Chrome DevTools:** Visual + console analysis
- **Root Cause Tracing:** Symptoms → Pitfall → Fix → Prevention

**Every diagnosis will be research-backed, not random trial-and-error.**

---

**Please provide complete debug information:**

<ask response="animation_code">**1. Animation Code (Complete Implementation)**

Provide your FULL GSAP animation code:
- Complete timeline or tween implementation (not just snippets!)
- ScrollTrigger configurations (if applicable)
- Plugin usage (MorphSVG, SplitText, etc.)
- Framework integration code (useGSAP, lifecycle hooks, cleanup)
- Component context (where/how animation is triggered)

Example (React with useGSAP):
```javascript
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Card() {
  useGSAP(() => {
    gsap.to(".card", {
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%"
      }
    });
  }, []);

  return <div className="card">...</div>;
}
```

**CRITICAL:** Include surrounding context - I need to see lifecycle, cleanup, and trigger logic!</ask>

<ask response="issues_description">**2. Symptom Description (What's Broken?)**

Describe EXACTLY what's happening (be specific!):

**Common Symptoms:**
- **Jank:** Animation stutters, drops frames, not smooth
- **Flicker:** Element flashes or jumps before animating
- **Console Errors:** GSAP warnings, JavaScript errors in DevTools
- **Visual Bugs:** Wrong position, z-index issues, clipping problems
- **Timing Issues:** Too fast, too slow, wrong easing, feels robotic
- **Not Triggering:** Animation doesn't start when expected
- **Memory Leaks:** Page slows down over time, RAM increases
- **Mobile Issues:** Works on desktop, breaks on iOS Safari
- **ScrollTrigger Problems:** Positioning wrong, triggers at wrong scroll position
- **Conflict Bugs:** Multiple animations fighting, unexpected final states

**Example:** "Animation stutters on scroll. Elements jump around instead of smooth movement. Chrome DevTools shows forced reflow warnings."</ask>

<ask response="expected_behavior">**3. Expected Behavior (What SHOULD Happen?)**

Describe the correct animation behavior:

**Example:** "Cards should smoothly fade in and slide up sequentially (stagger 0.1s) when scrolling into viewport. Should feel smooth at 60fps with gentle power2.out easing."</ask>

<ask response="framework_context">**4. Framework & Environment**

Development environment details:

- **Framework:** React / Next.js / Vue / Vanilla JS?
- **Framework Version:** (e.g., React 19, Next.js 15 App Router, Vue 3 Composition API)
- **GSAP Version:** (check package.json - 3.12? 3.13? older?)
- **TypeScript or JavaScript?**
- **Build Tool:** Vite / Webpack / Next.js / etc.
- **SSR/SSG Considerations?** (Next.js server components, Nuxt, etc.)

**Example:** "Next.js 15 App Router, TypeScript, GSAP 3.13.0, using useGSAP hook"</ask>

<ask response="mobile_tested">**5. Mobile Testing Status**

Has this been tested on mobile devices?

- **Yes:** Tested on iOS Safari / Android Chrome (works? breaks?)
- **No:** Only tested on desktop
- **Unknown:** Not sure

**Why this matters:** Pitfall 8.9 (Mobile Testing) is HIGH severity - iOS Safari has unique GSAP issues!</ask>

<ask response="page_url">**6. Dev Server URL (Optional - for Chrome DevTools)**

Provide local dev server URL if available:

**Examples:**
- `http://localhost:3000/test-page`
- `http://localhost:5173`
- Or press Enter to skip

**If provided:** I'll use Chrome DevTools MCP to:
- Take screenshot of current visual state
- Check console for errors/warnings
- Analyze performance (forced reflows, jank)
- Inspect runtime animation state</ask>

<action>Confirm understanding and preview the systematic debugging approach</action>

**✂️ Debug info captured!**

*"Now I'll systematically diagnose the root cause. I'll analyze symptoms against the 10-point pitfalls framework, research debugging patterns in Archon's knowledge base, and identify the exact pitfall causing this issue."*

<template-output>
animation_code,
issues_description,
expected_behavior,
framework_context,
mobile_tested,
page_url,
date
</template-output>
</step>

<step n="2" goal="Visual & Console Analysis (Chrome DevTools)">
<action>If page_url provided, use Chrome DevTools MCP for systematic analysis</action>

✂️ **Chrome DevTools Analysis**

<check if="page_url_provided">
  **Analyzing live page...**

  **Visual Analysis:**
  ```javascript
  mcp__chrome-devtools__take_screenshot()
  ```
  → Capture current visual state
  → Document: Visual bugs, positioning issues, z-index problems

  **Console Analysis:**
  ```javascript
  mcp__chrome-devtools__list_console_messages()
  ```
  → Check for GSAP warnings
  → Check for JavaScript errors
  → Document: All error messages with exact text

  **Network Analysis:**
  ```javascript
  mcp__chrome-devtools__list_network_requests({ resourceTypes: ["script"] })
  ```
  → Verify GSAP CDN loaded correctly
  → Check for 404s or load failures
  → Document: GSAP version from network

  **Performance Check (if jank reported):**
  ```javascript
  mcp__chrome-devtools__evaluate_script({
    function: `() => ({
      fps: performance.getEntriesByType('measure'),
      layout: performance.getEntriesByType('layout-shift')
    })`
  })
  ```
  → Detect forced reflows
  → Measure layout thrashing
  → Document: Performance bottlenecks
</check>

<check if="page_url_not_provided">
  **Skipping Chrome DevTools analysis** (no URL provided)

  Will rely on:
  - Code analysis against pitfalls framework
  - Symptom-to-pitfall mapping
  - Archon research for debugging patterns
</check>

<action>Compile findings from Chrome DevTools (or note "N/A - no URL")</action>

<template-output>
console_errors,
visual_analysis,
network_issues,
performance_data,
chrome_devtools_findings
</template-output>
</step>

<step n="3" goal="Symptom-to-Pitfall Mapping (10-Point Framework)">
<action>Map reported symptoms to likely pitfalls from Deep-Research Sections 8.1-8.10</action>

✂️ **Pitfall Diagnosis (Symptom Analysis)**

*"Based on your symptoms, let me identify which of the 10 common pitfalls is the likely culprit..."*

### 10-Point Pitfalls Framework (Deep-Research 8.1-8.10)

**Analyze symptoms against each pitfall:**

**Pitfall 8.1: Cleanup/Memory Leaks (HIGH SEVERITY)**
- **Symptoms:** Page slows over time, RAM increases, animations persist after unmount
- **Check:** Does {{issues_description}} mention memory, slowdown, or persistence?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.2: Wrong Properties (HIGH SEVERITY)**
- **Symptoms:** Jank, stuttering, forced reflows, layout thrashing warnings
- **Check:** Is {{issues_description}} about performance/jank? Are layout properties animated (width, height, top, left)?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.3: immediateRender Issues (MEDIUM SEVERITY)**
- **Symptoms:** Flicker on page load, element jumps before animating, set state visible before animation
- **Check:** Does {{issues_description}} mention flicker or jumping? Does code use `.from()`?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.4: Multiple ScrollTriggers (MEDIUM SEVERITY)**
- **Symptoms:** ScrollTrigger behaves unexpectedly, wrong trigger points, conflicts
- **Check:** Does {{issues_description}} mention ScrollTrigger? Are multiple ScrollTriggers on same element?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.5: Missing overwrite Mode (MEDIUM SEVERITY)**
- **Symptoms:** Animation conflicts, unexpected final states, tweens fighting each other
- **Check:** Are multiple animations on same properties? Missing `overwrite` mode?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.6: Missing refresh() (MEDIUM SEVERITY)**
- **Symptoms:** ScrollTrigger positioning wrong after images load, layout shift bugs
- **Check:** Does positioning break after content loads? Missing `ScrollTrigger.refresh()`?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.7: Deprecated Syntax (LOW SEVERITY)**
- **Symptoms:** Console warnings about deprecated GSAP 2.x syntax
- **Check:** Does code use TweenMax, TweenLite, TimelineMax? (Should be gsap.to/timeline)
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.8: Infinite Loops Without Cleanup (LOW SEVERITY)**
- **Symptoms:** `repeat: -1` animations not cleaned up, memory grows
- **Check:** Are there infinite loops without proper lifecycle management?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.9: Not Tested on Mobile (HIGH SEVERITY)**
- **Symptoms:** Works on desktop, breaks on iOS Safari, touch events missing
- **Check:** Did {{mobile_tested}} = "No"? Does {{issues_description}} mention mobile?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

**Pitfall 8.10: from() vs fromTo() Confusion (MEDIUM SEVERITY)**
- **Symptoms:** Unclear start/end states, animations behave unexpectedly
- **Check:** Using `.from()` when `.fromTo()` would be clearer? Implicit start states?
- **Status:** [LIKELY / POSSIBLE / UNLIKELY]

<action>Rank pitfalls by likelihood (1-3 most likely culprits)</action>

**Primary Suspect:** [Pitfall X.X] - [Reasoning]
**Secondary Suspects:** [Pitfall Y.Y], [Pitfall Z.Z] - [Reasoning]

<template-output>
pitfall_mapping,
primary_suspect_pitfall,
secondary_suspects,
symptom_analysis
</template-output>
</step>

<step n="4" goal="Research Gate - Archon Debugging Patterns">
<critical>RESEARCH ENFORCEMENT: You MUST research debugging patterns for the identified pitfall(s) before proceeding to fix</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on symptom analysis:
    - Primary Suspect: {{primary_suspect_pitfall}}
    - Symptoms: {{issues_description}}

    You MUST research debugging patterns for this pitfall category BEFORE implementing fix.</mandate>

  <!-- Research Phase: Archon Debugging Patterns -->
  <phase n="1" title="Archon MCP Debugging Research" required="true">
    <action>Query Archon's 89 GSAP sources for debugging patterns specific to identified pitfall:

    **Query 1: Debugging Patterns for Primary Suspect**
    Based on {{primary_suspect_pitfall}}:

    IF Pitfall 8.1 (Cleanup):
      ```
      rag_search_knowledge_base("GSAP cleanup memory leak kill", source_id="b9f6b322298feb21", match_count=8)
      ```

    IF Pitfall 8.2 (Wrong Properties):
      ```
      rag_search_knowledge_base("GSAP performance layout thrashing transform", source_id="b9f6b322298feb21", match_count=8)
      ```

    IF Pitfall 8.3 (immediateRender):
      ```
      rag_search_code_examples("immediateRender false from animation", match_count=8)
      ```

    IF Pitfall 8.4 (Multiple ScrollTriggers):
      ```
      rag_search_knowledge_base("ScrollTrigger conflicts multiple triggers", source_id="6a6860cfc96e173b", match_count=8)
      ```

    IF Pitfall 8.5 (Missing overwrite):
      ```
      rag_search_knowledge_base("GSAP overwrite mode animation conflicts", source_id="b9f6b322298feb21", match_count=8)
      ```

    IF Pitfall 8.6 (Missing refresh):
      ```
      rag_search_knowledge_base("ScrollTrigger refresh layout changes", source_id="6a6860cfc96e173b", match_count=8)
      ```

    IF Pitfall 8.7 (Deprecated):
      ```
      rag_search_knowledge_base("GSAP 3 migration TweenMax deprecated", source_id="b9f6b322298feb21", match_count=6)
      ```

    IF Pitfall 8.8 (Infinite loops):
      ```
      rag_search_knowledge_base("GSAP repeat infinite cleanup", match_count=6)
      ```

    IF Pitfall 8.9 (Mobile):
      ```
      rag_search_knowledge_base("GSAP mobile iOS Safari issues", match_count=8)
      ```

    IF Pitfall 8.10 (from vs fromTo):
      ```
      rag_search_code_examples("GSAP fromTo animation patterns", match_count=6)
      ```

    **Query 2: General Debugging Techniques**
    ```
    rag_search_knowledge_base("GSAP debugging techniques troubleshooting", source_id="b9f6b322298feb21", match_count=6)
    ```

    **IMPORTANT:** Execute queries specific to primary suspect pitfall. Document findings with source IDs.
    </action>

    <evidence required="true">
      **ARCHON DEBUGGING RESEARCH:**

      **Primary Pitfall ({{primary_suspect_pitfall}}):**
      - Debugging patterns found: [Pattern 1], [Pattern 2], [Pattern 3]
      - Common fixes: [Fix strategy from Archon]
      - Code examples: [Archon code snippets]
      - Source: [Archon source IDs]

      **General GSAP Debugging Techniques:**
      - [Technique 1 from Archon]
      - [Technique 2 from Archon]
      - [Diagnostic tools/methods]

      **Total Sources Consulted:** [Number] (Archon source IDs listed)
    </evidence>
  </phase>

  <!-- Research Phase: Deep-Research Pitfall Section -->
  <phase n="2" title="Deep-Research Pitfall Framework" required="true">
    <action>Consult specific Deep-Research markdown file for identified pitfall:

    **Conditional Pitfall File Reading (based on primary_suspect_pitfall):**

    IF Pitfall 8.1 (Cleanup/Memory Leaks):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/34-pitfall-81-forgetting-to-clean-up-memory-leaks-double-animations.md

    IF Pitfall 8.2 (Wrong Properties):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/35-pitfall-82-animating-the-wrong-properties-no-gpu-acceleration.md

    IF Pitfall 8.3 (immediateRender):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/36-pitfall-83-ignoring-in-from-tweens.md

    IF Pitfall 8.4 (Multiple ScrollTriggers):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/37-pitfall-84-multiple-scrolltriggers-on-the-same-elements-property.md

    IF Pitfall 8.5 (Missing overwrite):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/38-pitfall-85-not-using-leading-to-conflict.md

    IF Pitfall 8.6 (Missing refresh()):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/39-pitfall-86-overlooking-refresh-after-content-load.md

    IF Pitfall 8.7 (Deprecated Syntax):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/40-pitfall-87-use-of-deprecated-or-old-syntax.md

    IF Pitfall 8.8 (Infinite Loops):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/41-pitfall-88-uncontrolled-infinite-loops.md

    IF Pitfall 8.9 (Mobile Issues):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/42-pitfall-89-not-testing-on-different-devices.md

    IF Pitfall 8.10 (from() vs fromTo()):
      Read: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/43-pitfall-810-misusing-vs-causing-flicker.md

    **Extract from the pitfall-specific Deep-Research file:**
    - What is this pitfall? (Description and common symptoms)
    - How to detect it? (Diagnostic techniques and warning signs)
    - How to fix it? (Research-backed solution strategies)
    - How to prevent it in future? (Best practices and code patterns)

    **Extract:**
    - Root cause explanation (technical details)
    - Fix strategies (step-by-step remediation)
    - Prevention best practices (coding patterns to avoid pitfall)
    - Common variations of this pitfall
    - Framework-specific considerations (React/Next.js/Vue patterns)
    </action>

    <evidence required="true">
      **DEEP-RESEARCH PITFALL ANALYSIS:**

      **Section {{primary_suspect_pitfall}}:**
      - **Description:** [What this pitfall is]
      - **Detection:** [How to identify it]
      - **Fix Strategy:** [Research-backed solution]
      - **Prevention:** [Best practices to avoid]

      **Applied to This Case:**
      - Why this pitfall matches symptoms
      - Specific fix for {{framework_context}} environment
      - {{framework_context}}-specific considerations
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 DIAGNOSIS COMPLETE - Root Cause Identified**

      **PRIMARY DIAGNOSIS:**
      - **Pitfall:** {{primary_suspect_pitfall}} ([Severity from framework])
      - **Root Cause:** [Explanation from Deep-Research]
      - **Why This Matches:** [Symptom-to-pitfall analysis]

      ---

      **ARCHON DEBUGGING PATTERNS:**

      **Common Fixes for {{primary_suspect_pitfall}}:**
      1. [Fix pattern 1 from Archon]
      2. [Fix pattern 2 from Archon]
      3. [Fix pattern 3 from Archon]

      **Code Examples:**
      ```javascript
      // [Archon example showing fix]
      ```

      **Source Citations:** [Archon source IDs]

      ---

      **DEEP-RESEARCH FRAMEWORK:**

      **Section {{primary_suspect_pitfall}} Guidance:**
      - [Detection method]
      - [Fix strategy]
      - [Prevention tips]

      ---

      **FIX STRATEGY:**

      **I recommend:**
      1. [Specific fix step 1 based on research]
      2. [Specific fix step 2 based on research]
      3. [Specific fix step 3 based on research]

      **Research-Backed Rationale:** [Why this fix from Archon + Deep-Research]

      **Alternative Approaches:** [If multiple valid solutions exist]

    </output>

    <halt>🚨 STOP. Present diagnosis and fix strategy in {communication_language}.

*"I've identified the root cause as {{primary_suspect_pitfall}}. Here's my research-backed fix strategy..."*

Wait for {user_name} to respond **"Continue [c]"** before implementing fix.</halt>

    <user-override>
      Only {user_name} can skip research with explicit **"Skip [s]"** command.
      You CANNOT autonomously skip research - systematic diagnosis requires it.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
pitfall_identified,
archon_debugging_patterns,
deep_research_fix_strategy,
fix_rationale,
total_research_sources
</template-output>
</step>

<step n="5" goal="Implement Fix (Research-Backed)">
<action>Implement the fix based on research findings from Archon + Deep-Research</action>

✂️ **Implementing Fix (Research-Backed)**

*"Applying the fix based on {{total_research_sources}} debugging sources..."*

### 5.1: Code Analysis (Before Fix)

**Problematic Code:**
```javascript
{{animation_code}}
```

**Root Cause Analysis:**
- **Pitfall:** {{pitfall_identified}}
- **Problem:** [Specific issue in the code]
- **Why It Fails:** [Technical explanation from research]
- **Impact:** [How this causes {{issues_description}}]

### 5.2: Apply Fix

**Fix Strategy (from Archon + Deep-Research):**

<action>Generate fixed code following research patterns</action>

**Fixed Implementation:**
```javascript
{{fixed_animation_code}}
```

**Key Changes:**
1. **Change 1:** [Description]
   - **Why:** [Research-backed rationale]
   - **Source:** [Archon/Deep-Research citation]

2. **Change 2:** [Description]
   - **Why:** [Research-backed rationale]
   - **Source:** [Archon/Deep-Research citation]

3. **Change 3:** [Description]
   - **Why:** [Research-backed rationale]
   - **Source:** [Archon/Deep-Research citation]

### 5.3: Framework-Specific Considerations

**For {{framework_context}}:**
- [Framework-specific fix details]
- [Lifecycle/cleanup considerations]
- [SSR/SSG considerations if applicable]

<template-output>
fixed_animation_code,
fix_change_1,
fix_change_2,
fix_change_3,
framework_specific_notes
</template-output>
</step>

<step n="6" goal="Validation & Testing">
<action>Validate the fix works and resolves symptoms</action>

✂️ **Validation**

### 6.1: Expected Improvements

**Before (Broken):**
- {{issues_description}}

**After (Fixed):**
- [Describe expected correct behavior]
- [How symptoms should be resolved]

### 6.2: Testing Checklist

<check if="page_url_provided">
  **Chrome DevTools Validation:**

  ```javascript
  // Take screenshot after fix
  mcp__chrome-devtools__take_screenshot()

  // Check console is clean
  mcp__chrome-devtools__list_console_messages()

  // Verify no console errors
  ```

  **Results:** [Screenshot comparison, console status]
</check>

**Manual Testing Required:**
- [ ] Animation runs smoothly (60fps)
- [ ] Symptoms resolved ({{issues_description}} no longer occurs)
- [ ] Console errors cleared (if applicable)
- [ ] Visual appearance matches {{expected_behavior}}
- [ ] Works across browsers (Chrome, Firefox, Safari)
- [ ] Works on mobile (if Pitfall 8.9 was involved)
- [ ] No memory leaks (if Pitfall 8.1 was involved)

### 6.3: Performance Check

**Target:** 60fps (16.67ms per frame)

**Validation:**
- Animating transforms (not layout properties)? ✓
- GPU acceleration enabled? ✓
- No forced reflows? ✓
- Cleanup implemented? ✓

<template-output>
validation_results,
testing_checklist_status,
performance_validation
</template-output>
</step>

<step n="7" goal="Prevention Tips (Research-Backed)">
<action>Generate prevention tips based on identified pitfall and research</action>

✂️ **Prevention Tips (Future-Proofing)**

*"Here's how to avoid {{pitfall_identified}} in future animations..."*

### 7.1: Pitfall-Specific Prevention

**For {{pitfall_identified}}:**

<action>Extract prevention tips from Deep-Research section</action>

1. [Prevention tip 1 from Deep-Research]
2. [Prevention tip 2 from Deep-Research]
3. [Prevention tip 3 from Deep-Research]

### 7.2: General GSAP Best Practices

**Always:**
- ✅ [Best practice 1 from Archon research]
- ✅ [Best practice 2 from Archon research]
- ✅ [Best practice 3 from Archon research]

**Never:**
- ❌ [Anti-pattern 1 related to this pitfall]
- ❌ [Anti-pattern 2 related to this pitfall]

### 7.3: Testing Strategy

**To catch this early:**
- [Testing method 1]
- [Testing method 2]
- [Chrome DevTools checks to use]

<template-output>
prevention_tips,
best_practices,
testing_strategy
</template-output>
</step>

<step n="8" goal="Generate Debug Report">
<action>Create comprehensive debug report using template.md</action>

✂️ **Generating Debug Report...**

*"Compiling your systematic debugging report with research citations..."*

<action>Populate template.md with all captured variables:
- Symptom analysis and pitfall diagnosis
- Archon debugging patterns (with source IDs)
- Deep-Research framework application
- Before/after code comparison
- Fix explanation with research citations
- Validation results
- Prevention tips and best practices
</action>

<action>Save document to: {{default_output_file}}</action>

**Report saved to:** `{{output_folder}}/debug-report-{{timestamp}}.md`

---

✂️ **"Debugged systematically. Root cause identified and fixed with research-backed solution."**

*Test the fix and let me know if the symptoms persist. All recommendations are backed by {{total_research_sources}} debugging sources.*

</step>

</workflow>
