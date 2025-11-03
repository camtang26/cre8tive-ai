# Memory Profile Report

**Generated:** {{date}}
**Workflow:** memory-profiling v1.0.0
**Page URL:** {{page_url}}
**Navigation Route:** {{navigation_route}}
**Cycles Executed:** {{navigation_cycles}}
**GSAP Animations:** {{has_gsap_animations}}

---

## Executive Summary

**Memory Health Status:** {{memory_health_status}}

{{#if_healthy}}
✅ **HEALTHY** - No memory leaks detected. Cleanup working properly.
{{/if_healthy}}

{{#if_leaking}}
❌ **LEAKING** - Memory leaks detected. Must fix before production deployment.
{{/if_leaking}}

---

## Test Protocol

**Stress Test Methodology:**
1. Captured baseline heap snapshot (clean state)
2. Navigated away/back {{navigation_cycles}} times
3. Each cycle: `{{page_url}}` → `{{page_url}}{{navigation_route}}` → `{{page_url}}`
4. Captured post-stress heap snapshot
5. Compared snapshots for memory growth

**Total Test Duration:** ~{{test_duration}} seconds

---

## Snapshot Comparison

### Baseline Snapshot (Clean State)

**Heap Metrics:**
- **Total Heap Size:** {{baseline_heap_size}} MB
- **DOM Nodes:** {{baseline_dom_nodes}}
- **Event Listeners:** {{baseline_listeners}}
- **Timestamp:** {{baseline_timestamp}}

### Post-Stress Snapshot (After {{navigation_cycles}} Cycles)

**Heap Metrics:**
- **Total Heap Size:** {{poststress_heap_size}} MB
- **DOM Nodes:** {{poststress_dom_nodes}}
- **Event Listeners:** {{poststress_listeners}}
- **Timestamp:** {{poststress_timestamp}}

---

## Memory Growth Analysis

| Metric | Baseline | Post-Stress | Growth | Threshold | Status |
|--------|----------|-------------|--------|-----------|--------|
| **Heap Size** | {{baseline_heap_size}} MB | {{poststress_heap_size}} MB | **{{heap_growth}} MB** | <5MB | {{heap_status}} |
| **Detached DOM Nodes** | 0 | {{detached_nodes_count}} | **{{detached_nodes_count}}** | <10 | {{detached_status}} |
| **Event Listeners** | {{baseline_listeners}} | {{poststress_listeners}} | {{listener_growth}} | - | - |

**Heap Growth Percentage:** {{heap_growth}} MB / 5MB limit = **{{heap_growth_percent}}%**

**Pass Criteria:**
- ✅ Heap growth <5MB after {{navigation_cycles}} navigation cycles
- ✅ Detached DOM nodes <10

---

## Detached DOM Node Analysis

**Total Detached Nodes Found:** {{detached_nodes_count}}

{{#if detached_nodes_count > 0}}

### Detached Node Details

**Largest Detached Node:**
- **Type:** {{largest_detached_type}} (e.g., HTMLDivElement)
- **Shallow Size:** {{largest_detached_size}} bytes
- **Retained Size:** {{largest_retained_size}} bytes

**Retaining Path (What's Keeping It in Memory):**
```
{{retaining_paths}}
```

**Example Retaining Path Analysis:**
```
Window
  └─ EventListener (mousemove)
      └─ Closure
          └─ GSAP Timeline
              └─ DOM Node (HTMLDivElement)
```

**Interpretation:** The detached DOM node is still referenced by a GSAP timeline that wasn't killed, which is referenced by an event listener closure.

**Suspected Leak Source:** {{suspected_causes}}

{{else}}

✅ **No detached DOM nodes found** - Cleanup is working correctly!

{{/if}}

---

## Leak Diagnosis

{{#if_leaking}}

### ❌ Memory Leak Detected

**Analysis:**
{{leak_diagnosis}}

**Suspected Root Causes:**

{{#if has_gsap_animations = "yes"}}

#### GSAP-Related Leaks (Most Likely)

**1. ScrollTriggers Not Killed on Navigation**
- **Symptom:** Detached nodes with ScrollTrigger in retaining path
- **Fix:** Kill all ScrollTriggers on route change

**2. GSAP Timelines Not Cleaned Up**
- **Symptom:** Heap grows with each cycle, timelines accumulate
- **Fix:** Use gsap.context() with ctx.revert() cleanup

**3. Tween Accumulation (Interactive Animations)**
- **Symptom:** Thousands of tweens from mousemove/scroll listeners
- **Fix:** Use gsap.quickTo() to reuse same tween

**4. Event Listeners Not Removed**
- **Symptom:** Listener count grows, closures retain DOM
- **Fix:** Remove listeners on unmount or use ctx.revert()

{{/if}}

{{#if has_gsap_animations = "no"}}

#### General JavaScript Leaks

**1. Event Listeners Not Removed**
- **Fix:** Use addEventListener with cleanup in useEffect return

**2. Intervals/Timeouts Not Cleared**
- **Fix:** Clear all timers on unmount

**3. Third-Party Library Leaks**
- **Fix:** Call cleanup methods, check library documentation

**4. Closure Retaining DOM References**
- **Fix:** Nullify references on cleanup

{{/if}}

---

## Cleanup Recommendations

### Critical Fixes Required

{{cleanup_strategies}}

### Code Examples

{{#if has_gsap_animations = "yes"}}

#### Fix 1: Use gsap.context() for Automatic Cleanup

**❌ WRONG - No Cleanup (Memory Leak):**
```javascript
function AnimatedPage() {
  useEffect(() => {
    gsap.from('.hero', { opacity: 0, y: -50 });

    ScrollTrigger.create({
      trigger: '.section',
      pin: true
    });

    // NO CLEANUP! Leak on route change
  }, []);

  return <div className="page">...</div>;
}

// Result after 5 navigations: 5 orphaned timelines, 5 ScrollTriggers, heap grows 5MB+
```

**✅ CORRECT - Full Cleanup with ctx.revert():**
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
        pin: true
      });
    }, ref); // Scope to this component

    // CLEANUP on unmount (route change)
    return () => {
      ctx.revert(); // Kills timelines, ScrollTriggers, removes styles
    };
  }, []);

  return <div ref={ref} className="page">...</div>;
}

// Result after 5 navigations: 0 orphaned timelines, 0 leaks, heap stable
```

#### Fix 2: Kill ScrollTriggers on Route Change (Next.js)

**✅ Global Route Change Cleanup:**
```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Kill ALL ScrollTriggers from previous page
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

#### Fix 3: Use quickTo to Prevent Tween Accumulation

**❌ WRONG - Creates Thousands of Tweens:**
```javascript
window.addEventListener('mousemove', (e) => {
  gsap.to('.cursor', { x: e.clientX, y: e.clientY, duration: 0.3 });
});

// Problem: Creates new tween on EVERY mousemove event
// Result: After 10 seconds of mouse movement, 1000+ tweens accumulate → heap grows
```

**✅ CORRECT - Reuse Same Tween with quickTo:**
```javascript
const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.3 });
const yTo = gsap.quickTo('.cursor', 'y', { duration: 0.3 });

window.addEventListener('mousemove', (e) => {
  xTo(e.clientX);  // Updates existing tween target
  yTo(e.clientY);  // Updates existing tween target
});

// Memory: Constant (only 2 tweens exist)
// Heap: Stable regardless of mouse movement duration
```

{{/if}}

---

## Next Steps

{{#if_healthy}}

### ✅ PASSED - No Memory Leaks

**Memory Health:** HEALTHY
- Heap growth: {{heap_growth}} MB (<5MB threshold)
- Detached nodes: {{detached_nodes_count}} (<10 threshold)
- Cleanup working correctly

**Actions:**
1. ✅ Mark as memory-validated
2. ✅ Continue to other validations (60fps, accessibility)
3. ✅ Ready for production (no memory blockers)

**Quality Gate:** ✅ CLEARED

{{/if_healthy}}

{{#if_leaking}}

### ❌ FAILED - Memory Leaks Detected

**Memory Health:** LEAKING
- Heap growth: {{heap_growth}} MB (threshold: 5MB)
- Detached nodes: {{detached_nodes_count}} (threshold: 10)

**Actions:**
1. 🔴 Apply cleanup recommendations above
2. 🔴 Re-run memory-profiling workflow after fixes
3. 🔴 Inspect retaining paths in DevTools to verify leak source
4. 🔴 Consult Editor agent for Pitfall 8.1 (Cleanup/Memory Leaks)
5. 🔴 Reference performance.md checklist Section 5.4

**Quality Gate:** 🔴 BLOCKED

**Do NOT deploy to production until leaks are fixed.**

{{/if_leaking}}

{{else}}

✅ **No memory leaks detected!**

Memory growth and detached nodes within acceptable limits. Cleanup is working properly.

{{/if}}

---

## Reference Documentation

**Deep-Research Sections:**
- 5.4: Memory Management & Garbage Collection
- 3.7: Cleanup and Reinitialization (Full-Page Transitions)
- 8.1: Pitfall - Forgetting to Clean Up (Editor checklist)

**Checklists:**
- `/bmad/gsap-excellence/checklists/performance.md` (Section 5.4)
- `/bmad/gsap-excellence/checklists/pitfalls.md` (Pitfall 8.1)

**Archon MCP Research:**
- Chrome DevTools: Heap Snapshots
- Query: "GSAP memory leak cleanup React"
- Query: "ScrollTrigger kill cleanup SPA"

**GSAP Official Documentation:**
- gsap.com/docs/v3/GSAP/gsap.context()
- gsap.com/resources/react-basics
- gsap.com/resources/frameworks

**Workflows:**
- `validate-60fps`: 60fps performance validation
- `accessibility-audit`: WCAG compliance validation
- `optimize-performance`: Deeper performance profiling

---

## Heap Snapshot Protocol (Manual Reference)

**For Future Testing:**

1. **Baseline Snapshot:**
   - Open DevTools → Memory tab
   - Select "Heap snapshot"
   - Click "Take snapshot"
   - Note heap size

2. **Stress Test:**
   - Navigate away/back {{navigation_cycles}} times
   - Let animations complete each cycle

3. **Post-Stress Snapshot:**
   - Take second snapshot
   - Calculate growth: (Post - Baseline)

4. **Analyze Detached Nodes:**
   - Select post-stress snapshot
   - Filter by "Detached"
   - Count detached DOM nodes
   - Inspect retaining paths

5. **Compare Snapshots:**
   - Change view to "Comparison"
   - Select baseline as comparison
   - Sort by "Size Delta"
   - Identify memory growth categories

**Threshold Reminders:**
- Heap growth: <5MB = PASS
- Detached nodes: <10 = PASS

---

**Module:** GSAP Excellence Engine - Phase 6
**Quality Standard:** 9.8/10 (Systematic memory leak detection)
**Testing Protocol:** Heap snapshot comparison with objective thresholds

---

**Generated by memory-profiling workflow**
**Report saved to:** {{default_output_file}}
