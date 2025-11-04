# Memory Profiling Workflow Instructions

<critical>Load: {project-root}/bmad/core/tasks/workflow.xml</critical>

<workflow>

<step n="1" goal="Setup & Context">
<ask response="page_url">What is the SPA page URL to profile?</ask>
<ask response="navigation_route">What route should be used for navigation testing? (e.g., /about, /products)</ask>
<ask response="navigation_cycles" default="5">How many navigation cycles? (default: 5)</ask>
<ask response="has_gsap_animations">Does this page have GSAP animations? (yes/no)</ask>

**Context:** This workflow performs systematic memory leak detection using Chrome DevTools heap snapshots. Focuses on detecting leaks from uncleaned GSAP animations, ScrollTriggers, event listeners, and detached DOM nodes common in SPAs.

**Testing Protocol:**
1. Baseline heap snapshot (clean state)
2. Stress test: Navigate away/back {{navigation_cycles}} times
3. Post-stress heap snapshot (detect leaks)
4. Compare snapshots: heap growth + detached DOM nodes
5. Pass/Fail based on objective thresholds

**Pass Criteria:**
- ✅ Heap growth <5MB after {{navigation_cycles}} cycles
- ✅ Detached DOM nodes <10
- ✅ Memory trend: stable or decreasing

**Reference:** Deep-Research 5.4 (Memory Management), Archon Chrome DevTools heap snapshot documentation

<template-output>page_url, navigation_route, navigation_cycles, has_gsap_animations</template-output>
</step>

<step n="2" goal="Enable Chrome DevTools Memory Panel">
**Chrome DevTools Memory Panel Setup:**

Guide user to prepare for heap snapshot capture:

**Manual Setup:**
```
1. Open Chrome DevTools (F12)
2. Navigate to "Memory" tab
3. Select "Heap snapshot" radio button
4. Panel ready for snapshot capture
```

<action>Use Chrome DevTools MCP: navigate_page to {{page_url}}</action>

**Verification:**
- Page loaded successfully
- Memory panel accessible
- Ready to capture baseline snapshot

<template-output>memory_panel_ready</template-output>
</step>

<step n="3" goal="Capture Baseline Heap Snapshot">
**Baseline Snapshot (Clean State):**

<action>Instruct user to take baseline heap snapshot in Chrome DevTools:</action>

**Manual Heap Snapshot:**
```
1. In Memory tab, click "Take snapshot" button
2. Wait for snapshot to process (may take 5-10 seconds)
3. Snapshot appears in left panel as "Snapshot 1"
4. Note baseline heap size (e.g., 25.4 MB)
```

**Alternative - Programmatic (if supported):**
<action>Use Chrome DevTools MCP: evaluate_script to trigger heap snapshot via Performance API</action>

**Record Baseline Metrics:**
- **Baseline Heap Size:** _____ MB
- **Baseline DOM Nodes:** _____
- **Baseline Listeners:** _____
- **Timestamp:** {{current_time}}

<template-output>baseline_heap_size, baseline_dom_nodes, baseline_listeners</template-output>
</step>

<step n="4" goal="Stress Test - Navigation Cycles">
**Memory Stress Test Protocol:**

Simulate typical SPA usage by navigating away and back multiple times. This exposes memory leaks from uncleaned animations.

<action>For each cycle (1 to {{navigation_cycles}}):</action>

**Cycle {{cycle_number}}:**
1. <action>Navigate away: Use Chrome DevTools MCP: navigate_page to {{page_url}}{{navigation_route}}</action>
2. <action>Wait for page load (2 seconds)</action>
3. <action>Let animations complete (if any)</action>
4. <action>Navigate back: Use Chrome DevTools MCP: navigate_page to {{page_url}}</action>
5. <action>Wait for page load (2 seconds)</action>
6. <action>Let animations complete</action>

**Progress:** Cycle {{cycle_number}} of {{navigation_cycles}} complete

<action>Repeat for all {{navigation_cycles}} cycles</action>

**Post-Stress State:**
- Returned to original page ({{page_url}})
- Completed {{navigation_cycles}} full navigation cycles
- Ready for post-stress snapshot

**Expected Behavior:**
- If cleanup is proper: Memory should stabilize or decrease
- If leaks exist: Memory grows with each cycle

<template-output>stress_test_complete, cycles_executed</template-output>
</step>

<step n="5" goal="Capture Post-Stress Heap Snapshot">
**Post-Stress Snapshot:**

<action>Instruct user to take post-stress heap snapshot:</action>

**Manual Heap Snapshot:**
```
1. In Memory tab, click "Take snapshot" button again
2. Wait for snapshot to process
3. Snapshot appears as "Snapshot 2" in left panel
4. Note post-stress heap size (e.g., 28.7 MB)
```

**Record Post-Stress Metrics:**
- **Post-Stress Heap Size:** _____ MB
- **Post-Stress DOM Nodes:** _____
- **Post-Stress Listeners:** _____
- **Timestamp:** {{current_time}}

**Calculate Growth:**
- **Heap Growth:** (Post-Stress - Baseline) = _____ MB
- **DOM Node Growth:** (Post-Stress - Baseline) = _____

<template-output>poststress_heap_size, heap_growth, dom_node_growth</template-output>
</step>

<step n="6" goal="Analyze Detached DOM Nodes">
**Detached DOM Node Detection:**

Detached DOM nodes are a primary indicator of memory leaks. These are nodes that JavaScript still references but are no longer in the DOM tree.

<action>Instruct user to search for detached nodes:</action>

**Manual Detection:**
```
1. Select "Snapshot 2" (post-stress) in left panel
2. In "Class filter" text box, type: Detached
3. Press Enter
4. DevTools shows all detached HTMLElement nodes
5. Count number of detached nodes
6. Inspect largest detached nodes (click to see retaining path)
```

**Detached Node Analysis:**
- **Detached DOM Nodes Found:** _____
- **Largest Detached Node Type:** _____ (e.g., HTMLDivElement)
- **Retaining Path:** What's keeping them in memory? (e.g., event listener, GSAP timeline)

**Common Leak Sources (if has_gsap_animations=yes):**
- ❌ ScrollTriggers not killed on navigation
- ❌ GSAP timelines not killed
- ❌ Event listeners not removed
- ❌ gsap.context() not reverted

**Pass Criteria:**
- ✅ <10 detached DOM nodes = PASS
- ❌ ≥10 detached DOM nodes = FAIL (memory leak detected)

**Reference:** Archon Chrome DevTools heap snapshot documentation

<template-output>detached_nodes_count, largest_detached_type, retaining_paths</template-output>
</step>

<step n="7" goal="Compare Snapshots & Detect Leaks">
**Snapshot Comparison Analysis:**

<action>Instruct user to compare snapshots:</action>

**Manual Comparison:**
```
1. Select "Snapshot 2" in left panel
2. In dropdown (top of panel), change from "Summary" to "Comparison"
3. Select "Snapshot 1" as comparison baseline
4. DevTools shows objects that increased in memory
5. Sort by "Size Delta" (largest growth first)
6. Inspect categories with significant growth
```

**Memory Growth Analysis:**

**Heap Size Growth:**
- Baseline: {{baseline_heap_size}} MB
- Post-Stress: {{poststress_heap_size}} MB
- **Growth:** {{heap_growth}} MB
- **Result:** {{#if heap_growth < 5}}✅ PASS (<5MB){{else}}❌ FAIL (≥5MB){{/if}}

**Detached Nodes:**
- **Count:** {{detached_nodes_count}}
- **Result:** {{#if detached_nodes_count < 10}}✅ PASS (<10){{else}}❌ FAIL (≥10){{/if}}

**Leak Diagnosis (if failing):**

<action>Query Archon MCP: rag_search_code_examples("GSAP memory leak cleanup React")</action>
<action>Query Archon MCP: rag_search_knowledge_base("ScrollTrigger kill cleanup SPA")</action>

**Suspected Leak Sources:**
{{#if heap_growth >= 5 or detached_nodes_count >= 10}}

**If has_gsap_animations=yes:**
- ❌ **Likely cause:** ScrollTriggers not killed on route change
- ❌ **Likely cause:** GSAP timelines not cleaned up
- ❌ **Likely cause:** gsap.context() not reverted in React cleanup

**If has_gsap_animations=no:**
- ❌ **Likely cause:** Event listeners not removed
- ❌ **Likely cause:** Third-party libraries leaking
- ❌ **Likely cause:** Closures retaining DOM references

{{/if}}

<template-output>leak_diagnosis, suspected_causes</template-output>
</step>

<step n="8" goal="Cleanup Recommendations">
**Provide Targeted Cleanup Strategies:**

{{#if heap_growth >= 5 or detached_nodes_count >= 10}}

### ❌ MEMORY LEAK DETECTED

**Critical Cleanup Required:**

{{#if has_gsap_animations = "yes"}}

**GSAP Cleanup Patterns:**

**❌ WRONG - No Cleanup (React Example):**
```javascript
function AnimatedPage() {
  useEffect(() => {
    gsap.from('.hero', { opacity: 0, y: -50 });

    ScrollTrigger.create({
      trigger: '.section',
      start: 'top top',
      pin: true
    });

    // NO CLEANUP! Memory leak on route change
  }, []);

  return <div>...</div>;
}
```

**✅ CORRECT - Full Cleanup with gsap.context():**
```javascript
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AnimatedPage() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero', { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: '.section',
        start: 'top top',
        pin: true
      });
    }, ref); // Scope to ref

    // CLEANUP on unmount (route change)
    return () => {
      ctx.revert(); // Kills animations + ScrollTriggers + removes styles
    };
  }, []);

  return <div ref={ref}>...</div>;
}
```

**✅ CORRECT - Kill ScrollTriggers on Route Change (Next.js):**
```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Kill ALL ScrollTriggers before route change
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Scroll to top
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return <>{children}</>;
}
```

**✅ CORRECT - quickTo to Prevent Tween Accumulation:**
```javascript
// ❌ WRONG - Creates new tween on every mousemove (thousands!)
window.addEventListener('mousemove', (e) => {
  gsap.to('.cursor', { x: e.clientX, y: e.clientY, duration: 0.3 });
});
// Memory leak: 1000s of tweens accumulate

// ✅ CORRECT - Reuse same tween with quickTo
const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.3 });
const yTo = gsap.quickTo('.cursor', 'y', { duration: 0.3 });

window.addEventListener('mousemove', (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});
// Memory: Constant (only 2 tweens exist)
```

**Reference:** Deep-Research Section 3.7 (Cleanup Patterns), Archon gsap.com/docs/v3/GSAP/gsap.context()

{{/if}}

{{#if has_gsap_animations = "no"}}

**General Cleanup Patterns:**

**✅ Remove Event Listeners:**
```javascript
useEffect(() => {
  const handleScroll = () => { /* ... */ };

  window.addEventListener('scroll', handleScroll);

  // CLEANUP
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
```

**✅ Clear Intervals/Timeouts:**
```javascript
useEffect(() => {
  const intervalId = setInterval(() => { /* ... */ }, 1000);

  // CLEANUP
  return () => {
    clearInterval(intervalId);
  };
}, []);
```

**✅ Abort Fetch Requests:**
```javascript
useEffect(() => {
  const controller = new AbortController();

  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data));

  // CLEANUP
  return () => {
    controller.abort();
  };
}, []);
```

{{/if}}

{{else}}

### ✅ NO MEMORY LEAKS DETECTED

**Memory Health:** HEALTHY
- Heap growth within acceptable limits (<5MB)
- Detached DOM nodes within limits (<10)
- Proper cleanup implemented

**Cleanup is working correctly!**

{{/if}}

<template-output>cleanup_strategies, code_examples</template-output>
</step>

<step n="9" goal="Generate Memory Profile Report">
**Compile Memory Health Report:**

<action>Calculate overall memory health status:</action>

**Health Logic:**
- If Heap Growth <5MB AND Detached Nodes <10 → **HEALTHY**
- If Heap Growth ≥5MB OR Detached Nodes ≥10 → **LEAKING**

**Report Structure:**

```markdown
# Memory Profile Report

**Date:** {{date}}
**Page URL:** {{page_url}}
**Navigation Route:** {{navigation_route}}
**Cycles Executed:** {{navigation_cycles}}
**GSAP Animations:** {{has_gsap_animations}}

---

## Memory Health Status: {{memory_health_status}}

{{#if_healthy}}
✅ **HEALTHY** - No memory leaks detected
{{/if_healthy}}

{{#if_leaking}}
❌ **LEAKING** - Memory leaks detected (must fix before production)
{{/if_leaking}}

---

## Test Results

### Baseline Snapshot (Clean State)
- **Heap Size:** {{baseline_heap_size}} MB
- **DOM Nodes:** {{baseline_dom_nodes}}
- **Event Listeners:** {{baseline_listeners}}

### Stress Test ({{navigation_cycles}} Navigation Cycles)
- Navigated away/back {{navigation_cycles}} times
- Each cycle: {{page_url}} → {{navigation_route}} → {{page_url}}
- Total test duration: ~{{test_duration}} seconds

### Post-Stress Snapshot
- **Heap Size:** {{poststress_heap_size}} MB
- **DOM Nodes:** {{poststress_dom_nodes}}
- **Event Listeners:** {{poststress_listeners}}

---

## Memory Growth Analysis

| Metric | Baseline | Post-Stress | Growth | Threshold | Status |
|--------|----------|-------------|--------|-----------|--------|
| **Heap Size** | {{baseline_heap_size}} MB | {{poststress_heap_size}} MB | **{{heap_growth}} MB** | <5MB | {{heap_status}} |
| **Detached Nodes** | 0 | {{detached_nodes_count}} | **{{detached_nodes_count}}** | <10 | {{detached_status}} |

**Heap Growth:** {{heap_growth}} MB / 5MB limit = {{heap_growth_percent}}%

---

## Detached DOM Node Analysis

**Detached Nodes Found:** {{detached_nodes_count}}

{{#if detached_nodes_count > 0}}

**Largest Detached Node:**
- Type: {{largest_detached_type}}
- Retaining Path: {{retaining_paths}}

**Suspected Leak Source:** {{suspected_causes}}

{{/if}}

---

## Cleanup Recommendations

{{cleanup_strategies}}

---

## Reference

- Deep-Research Section 5.4: Memory Management
- Deep-Research Section 3.7: Cleanup Patterns
- Archon Chrome DevTools: Heap Snapshots
- performance.md Checklist: Section 5.4

---
```

<action>Save report to: {{default_output_file}}</action>

<template-output>final_memory_report, memory_health_status</template-output>
</step>

<step n="10" goal="Present Report & Next Actions">
<action>Display memory profile report with clear health status</action>

**If HEALTHY:**
✅ **NO MEMORY LEAKS DETECTED**
- Heap growth <5MB after {{navigation_cycles}} cycles
- Detached DOM nodes <10
- Cleanup working properly

**Next Actions:**
1. Mark as memory-validated
2. Continue to other validations (60fps, accessibility)
3. Ready for production (no memory blockers)

**If LEAKING:**
❌ **MEMORY LEAK DETECTED**
- Heap growth ≥5MB (threshold: 5MB)
- OR Detached DOM nodes ≥10 (threshold: 10)
- Must fix before production deployment

**Next Actions:**
1. Apply cleanup recommendations from Step 8
2. Re-run memory-profiling workflow after fixes
3. Verify leak sources with DevTools retaining paths
4. Consult Editor agent for pitfall validation (Pitfall 8.1: Cleanup)
5. Reference performance.md checklist Section 5.4

**Documentation:**
- Save report to: {{default_output_file}}
- Reference performance.md for detailed cleanup guidance
- Review Deep-Research Section 3.7 (Cleanup Patterns)

<template-output>next_actions, final_status</template-output>
</step>

</workflow>

---

## Memory Profiling Protocol Summary

**Stress Test Protocol:**
1. Baseline heap snapshot (clean state)
2. Navigate away/back {{navigation_cycles}} times
3. Post-stress heap snapshot
4. Compare snapshots for leaks

**Pass/Fail Criteria:**
- **PASS:** Heap growth <5MB AND Detached nodes <10
- **FAIL:** Heap growth ≥5MB OR Detached nodes ≥10

**Common GSAP Leak Sources:**
- ScrollTriggers not killed on navigation
- GSAP timelines not cleaned up
- gsap.context() not reverted
- Tween accumulation (mousemove without quickTo)
- Event listeners not removed

**Cleanup Strategies:**
- Use gsap.context() with ctx.revert()
- Kill ScrollTriggers on route change
- Use useGSAP() hook (auto-cleanup)
- Use quickTo for frequent updates
- Remove all event listeners on unmount

**Reference Sources:**
- Deep-Research Section 5.4 (Memory Management)
- Deep-Research Section 3.7 (Cleanup Patterns)
- Archon Chrome DevTools heap snapshot docs
- performance.md checklist

**Quality Standard:** 9.8/10 (Systematic leak detection with objective thresholds)
