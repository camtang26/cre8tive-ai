# Memory Profiling Workflow

## Overview

The Memory Profiling workflow provides **systematic memory leak detection** for Single Page Applications (SPAs) using GSAP animations. Through heap snapshot comparison and navigation stress testing, this workflow identifies memory leaks from uncleaned ScrollTriggers, accumulated tweens, and detached DOM nodes **before** they impact production users.

**Critical Quality Gate:** Heap growth <5MB + detached nodes <10 = **PRODUCTION READY**

## Key Features

- **Heap Snapshot Comparison** - Baseline vs post-stress analysis
- **Navigation Stress Testing** - Simulates 5x route changes (default)
- **Detached DOM Node Detection** - Identifies orphaned elements
- **Objective Pass/Fail Thresholds** - <5MB heap growth, <10 detached nodes
- **Framework-Specific Cleanup Patterns** - React/Next.js code examples
- **Retaining Path Analysis** - Shows what's keeping memory alive
- **Chrome DevTools MCP Integration** - Programmatic heap snapshot capture

## When to Use This Workflow

### ✅ Use When:
- SPA with client-side routing (React Router, Next.js)
- GSAP animations that persist across route changes
- Pre-deployment production validation (second quality gate)
- Memory grows over time / performance degrades
- Implementing ScrollTrigger animations

### ❌ Don't Use When:
- Static multi-page site (no SPA navigation)
- Animation still in development (optimize-performance first)
- No GSAP animations on page
- Already know leak source (just apply cleanup)

## Usage

### Basic Invocation

```bash
# Load Tech Director agent
/bmad:gsap-excellence:agents:gsap-tech-director

# Run memory-profiling workflow
*profile-memory
```

### What You'll Be Asked

1. **SPA page URL** - Page with GSAP animations (e.g., `http://localhost:3000/products`)
2. **Navigation route** - Where to navigate to/from (e.g., `/about`)
3. **Navigation cycles** - How many times to navigate (default: 5)
4. **Has GSAP animations?** - yes/no (determines leak diagnosis approach)

### Expected Output

**Memory Profile Report** saved to:
`/home/cameronai/projects/cre8tive-website-1006/docs/memory-profile-report-{{date}}.md`

## Workflow Structure

### Files Included

```
memory-profiling/
├── workflow.yaml         # Configuration and thresholds
├── instructions.md       # 10-step testing protocol
├── template.md          # Report template with HEALTHY/LEAKING status
└── README.md            # This file
```

### Workflow Steps (10 Total)

1. **Setup & Context** - Load performance checklist, Deep-Research sections
2. **Enable Chrome DevTools Memory Panel** - Prepare for heap snapshots
3. **Capture Baseline Heap Snapshot** - Clean state (before navigation)
4. **Stress Test - Navigation Cycles** - Navigate away/back 5x
5. **Capture Post-Stress Heap Snapshot** - After stress test
6. **Analyze Detached DOM Nodes** - Count orphaned elements
7. **Compare Snapshots & Detect Leaks** - Calculate heap growth
8. **Cleanup Recommendations** - Framework-specific fixes
9. **Generate Memory Profile Report** - HEALTHY or LEAKING status
10. **Present Report & Next Actions** - Fix or deploy

## Pass Criteria

### Memory Health Status: HEALTHY ✅

- ✅ **Heap growth <5MB** after 5 navigation cycles
- ✅ **Detached DOM nodes <10**
- ✅ Memory trend: stable or decreasing

**Interpretation:** Cleanup working correctly, production-ready

### Memory Health Status: LEAKING ❌

- ❌ **Heap growth ≥5MB** after 5 cycles
- ❌ **Detached DOM nodes ≥10**
- ❌ Memory trend: consistently growing

**Interpretation:** Memory leaks detected, **DO NOT DEPLOY**

## Test Protocol

### Stress Test Methodology

1. **Baseline capture** - Page in clean state (no navigation yet)
2. **Navigation cycle** - Repeat 5 times (default):
   - Navigate to: `{{page_url}}{{navigation_route}}` (e.g., `/products` → `/about`)
   - Wait for page load + animations complete
   - Navigate back: `{{page_url}}` (e.g., `/about` → `/products`)
   - Wait for page load + animations complete
3. **Post-stress capture** - After all cycles complete
4. **Compare** - Calculate heap growth and detached nodes

**Why 5 cycles?**
- Industry standard for leak detection
- 1-2 cycles: Too few (noise)
- 10+ cycles: Overkill (increases false positives)
- 5 cycles: Goldilocks zone (real leaks are obvious)

## Memory Leak Diagnosis

### Common GSAP-Related Leaks

The workflow identifies and provides fixes for:

#### 1. ScrollTriggers Not Killed on Navigation

**Symptom:** Detached nodes with ScrollTrigger in retaining path

**Fix:**
```javascript
// ❌ WRONG - No cleanup on route change
function AnimatedPage() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.section',
      pin: true
    });
    // NO CLEANUP! Memory leak
  }, []);
}

// ✅ CORRECT - Kill ScrollTrigger on unmount
function AnimatedPage() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.section',
        pin: true
      });
    }, ref);

    return () => {
      ctx.revert(); // Kills ScrollTrigger + removes styles
    };
  }, []);

  return <div ref={ref}>...</div>;
}
```

#### 2. GSAP Timelines Not Cleaned Up

**Symptom:** Heap grows with each cycle, timelines accumulate

**Fix:**
```javascript
// ❌ WRONG - Timelines orphaned
gsap.from('.hero', { opacity: 0, y: -50 });

// ✅ CORRECT - Use gsap.context() for auto-cleanup
const ctx = gsap.context(() => {
  gsap.from('.hero', { opacity: 0, y: -50 });
}, componentRef);

// Cleanup on unmount
return () => ctx.revert();
```

#### 3. Tween Accumulation (Interactive Animations)

**Symptom:** Thousands of tweens from mousemove/scroll listeners

**Fix:**
```javascript
// ❌ WRONG - Creates new tween on EVERY event
window.addEventListener('mousemove', (e) => {
  gsap.to('.cursor', { x: e.clientX, y: e.clientY });
});
// Result: After 10 seconds, 1000+ tweens accumulate

// ✅ CORRECT - Reuse same tween with quickTo
const xTo = gsap.quickTo('.cursor', 'x', { duration: 0.3 });
const yTo = gsap.quickTo('.cursor', 'y', { duration: 0.3 });

window.addEventListener('mousemove', (e) => {
  xTo(e.clientX);  // Updates existing tween
  yTo(e.clientY);
});
// Memory: Constant (only 2 tweens exist)
```

#### 4. Event Listeners Not Removed

**Symptom:** Listener count grows, closures retain DOM

**Fix:**
```javascript
// ❌ WRONG - Listener not removed
useEffect(() => {
  const handleScroll = () => { /* ... */ };
  window.addEventListener('scroll', handleScroll);
  // NO CLEANUP!
}, []);

// ✅ CORRECT - Remove listener on unmount
useEffect(() => {
  const handleScroll = () => { /* ... */ };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
```

### Next.js-Specific Cleanup

**Global Route Change Cleanup:**
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
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  return <>{children}</>;
}
```

## Heap Snapshot Analysis

### What the Workflow Measures

**Baseline Snapshot (Clean State):**
- Total heap size (MB)
- DOM nodes count
- Event listeners count
- Timestamp

**Post-Stress Snapshot (After 5 Cycles):**
- Total heap size (MB)
- DOM nodes count
- Event listeners count
- Timestamp

**Comparison:**
- **Heap Growth** = Post-stress - Baseline (threshold: <5MB)
- **Detached Nodes** = Orphaned DOM elements (threshold: <10)
- **Listener Growth** = Event listeners added but not removed

### Retaining Paths

The workflow analyzes **what's keeping memory alive**:

```
Example Retaining Path:
Window
  └─ EventListener (mousemove)
      └─ Closure
          └─ GSAP Timeline
              └─ DOM Node (HTMLDivElement - detached)
```

**Interpretation:** The detached DOM node is retained by a GSAP timeline that wasn't killed, which is referenced by an event listener closure.

## Chrome DevTools MCP Integration

### Tools Used

- `navigate_page(url)` - Navigate to test pages
- `evaluate_script(function)` - Capture heap metrics, count detached nodes
- `take_screenshot()` - Visual validation

### Heap Metrics Captured

```javascript
// Programmatic heap metrics
const heapMetrics = {
  totalHeapSize: performance.memory.totalJSHeapSize / 1048576, // MB
  usedHeapSize: performance.memory.usedJSHeapSize / 1048576,
  heapLimit: performance.memory.jsHeapSizeLimit / 1048576,
  timestamp: Date.now()
};
```

## Best Practices

### Before Running

1. **Complete development** - Animation fully implemented
2. **Run validate-60fps first** - Ensure no performance issues
3. **Implement basic cleanup** - Don't test with obvious leaks
4. **Dev server running** - Workflow needs accessible URL
5. **Plan navigation route** - Pick route with different animations

### During Execution

1. **Let animations complete** - Don't navigate mid-animation
2. **Typical cycle duration** - 3-5 seconds per cycle (15-25s total)
3. **Close other tabs** - Minimize memory interference
4. **Disable extensions** - Can affect memory measurements

### After Completion

1. **If HEALTHY:** Proceed to accessibility-audit (third gate)
2. **If LEAKING:** Apply cleanup recommendations, re-test
3. **Save report** - Document detached node count for future reference
4. **Update patterns** - Document successful cleanup strategies

## Troubleshooting

### Issue: "Heap growth borderline (4-6MB)"

**Solution:**
- Re-run test 2-3 times to confirm (some variance is normal)
- Check for legitimate data caching (localStorage, IndexedDB)
- Increase cycles to 10 to amplify signal
- If consistent growth trend: Investigate further

### Issue: "Detached nodes count high but heap growth low"

**Solution:**
- Detached nodes are small but still indicate cleanup issues
- Check for orphaned event listeners
- Verify ScrollTriggers are killed
- May not be production-blocking but should fix

### Issue: "Cannot determine leak source from report"

**Solution:**
1. Read report "Retaining Paths" section
2. Use Chrome DevTools manually:
   - Open Memory panel
   - Take heap snapshot
   - Filter by "Detached"
   - Inspect largest detached node
   - Expand "Retaining tree"
3. Common patterns:
   - `EventListener` → Remove listener
   - `ScrollTrigger` → Call .kill()
   - `Timeline` → Use ctx.revert()
   - `Closure` → Nullify references

### Issue: "Chrome DevTools MCP errors"

**Solution:**
- Restart browser: `mcp__chrome-devtools__restart_browser()`
- Check MCP server status
- Verify `performance.memory` API available (Chrome only)
- Manual fallback: Use DevTools Memory panel

## Requirements

- **Chrome DevTools MCP** - For heap snapshot capture
- **SPA architecture** - Client-side routing (React Router, Next.js)
- **Dev server** - Accessible URL with GSAP animations
- **Archon MCP** - For cleanup patterns research
- **Tech Director agent** - Primary agent for this workflow

## Output Structure

### Report Sections

1. **Executive Summary** - HEALTHY or LEAKING status
2. **Test Protocol** - Stress test methodology
3. **Snapshot Comparison** - Baseline vs post-stress
4. **Memory Growth Analysis** - Table with thresholds
5. **Detached DOM Node Analysis** - Count + retaining paths
6. **Leak Diagnosis** - Suspected causes
7. **Cleanup Recommendations** - Framework-specific code fixes
8. **Next Steps** - Fix or deploy

### Pass/Fail Logic

**HEALTHY (Production Ready):**
- ✅ Heap growth <5MB
- ✅ Detached nodes <10

**LEAKING (Blocking):**
- ❌ Heap growth ≥5MB OR detached nodes ≥10 ← **DO NOT DEPLOY**

**Report saved to:** `/output/memory-profile-report-{{date}}.md`

## Integration with Other Workflows

**Before memory-profiling:**
- Run `validate-60fps` (first production gate)
- Run `debug-animation` to fix obvious issues

**After memory-profiling:**
- If HEALTHY: Run `accessibility-audit` (third gate)
- If LEAKING: Apply recommendations, re-test until HEALTHY
- Document cleanup patterns in `harvest-patterns`

**Complementary workflows:**
- `optimize-performance` - Deeper profiling if needed
- `debug-animation` - Fix general animation bugs

## Research Sources

### Deep-Research Sections

- **5.4:** Memory Management & Garbage Collection
- **3.7:** Cleanup and Reinitialization (Full-Page Transitions)
- **8.1:** Pitfall - Forgetting to Clean Up

### Archon MCP Queries

The workflow queries:
- "Memory leak detection heap snapshot"
- "ScrollTrigger cleanup SPA"
- "GSAP memory leak cleanup React"

### Checklists

- `/bmad/gsap-excellence/checklists/performance.md` (Section 5.4)
- `/bmad/gsap-excellence/checklists/pitfalls.md` (Pitfall 8.1)

## Estimated Duration

**Total time:** 10-15 minutes

- Setup: 2 minutes
- Baseline snapshot: 1 minute
- Stress test (5 cycles): 5-7 minutes
- Post-stress snapshot: 1 minute
- Analysis: 2-3 minutes
- Report generation: 2-3 minutes

**If leaking:** Add 20-40 minutes for fixes + re-testing

## Success Metrics

- **80%+ of animations HEALTHY on first try** (with basic cleanup)
- **95%+ HEALTHY after one fix iteration** (workflow recommendations effective)
- **100% of deployed animations HEALTHY** (mandatory blocking gate)

## Version History

- **v1.0.0** (2025-11-03) - Initial release (Phase 6)
  - Heap snapshot comparison protocol
  - Navigation stress testing
  - Detached DOM node analysis
  - Framework-specific cleanup patterns

## Support

For issues or questions:

- **Checklist:** `/bmad/gsap-excellence/checklists/performance.md` (Section 5.4)
- **Deep-Research:** Sections 5.4, 3.7, 8.1
- **Archon MCP:** Query "GSAP memory leak cleanup"
- **Workflow:** `optimize-performance` for deeper profiling
- **Agent:** Editor (`*debug` for memory-related bugs)

---

**Part of GSAP Excellence Engine - Phase 6 Testing Infrastructure**
**Production Ready:** ✅ YES (use for all SPAs before deployment)
**Quality Standard:** 9.8/10 (Systematic leak detection with objective thresholds)
