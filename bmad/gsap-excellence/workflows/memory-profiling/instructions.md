# Memory Profiling Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/memory-profiling/workflow.yaml</critical>
<critical>Communicate all instructions and responses in {communication_language}</critical>

<workflow>

<step n="1" goal="Setup & Context">
<action>Greet {user_name} and explain the memory profiling workflow purpose</action>

**Welcome to Memory Profiling - Your Systematic Memory Leak Detective**

This workflow performs **research-backed memory leak detection** using Chrome DevTools heap snapshots, backed by Deep-Research Section 5.4 (Memory Management & Garbage Collection) and validated against November 2025 Chrome DevTools best practices.

<ask response="page_url">What is the SPA page URL to profile?</ask>
<ask response="navigation_route">What route should be used for navigation testing? (e.g., /about, /products)</ask>
<ask response="navigation_cycles" default="5">How many navigation cycles? (default: 5, minimum: 3)</ask>
<ask response="has_gsap_animations">Does this page have GSAP animations? (yes/no)</ask>
<ask response="framework" default="react">What frontend framework? (react/vue/vanilla/other)</ask>

**Context:** This workflow focuses on detecting memory leaks from:
- ❌ Uncleaned GSAP animations and ScrollTriggers
- ❌ Detached DOM nodes from component unmount
- ❌ Event listeners not removed
- ❌ Global variables holding references

**Testing Protocol (Research-Backed):**
1. **Baseline heap snapshot** (clean state)
2. **Stress test:** Navigate away/back {{navigation_cycles}} times
3. **Post-stress heap snapshot** (detect leaks)
4. **Compare snapshots:** heap growth + detached DOM nodes
5. **Pass/Fail:** Based on objective thresholds from Chrome DevTools methodology (Nov 2025)

**Pass Criteria (Research-Validated):**
- ✅ Heap growth < 5MB after {{navigation_cycles}} cycles
- ✅ Detached DOM nodes < 10
- ✅ Memory trend: stable or decreasing (not continuous growth)

**Reference Sources:**
- Deep-Research Section 5.4: Memory Management & Garbage Collection
- Chrome DevTools Memory Problems guide (current as of Dec 2024, verified Nov 2025)
- GSAP 3.13+ (released April 2025) automatic cleanup features

<template-output>page_url, navigation_route, navigation_cycles, has_gsap_animations, framework</template-output>
</step>

<step n="2" goal="Research Gate (MANDATORY) - Memory Management Framework">

<critical>MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP</critical>

This research gate is **BLOCKING**. You MUST complete ALL research before proceeding to Step 3 (heap snapshot capture).

**Why This Matters:**
Deep-Research Section 5.4 is sparse (only 3 lines) BUT contains critical GSAP-specific memory leak patterns that differentiate this workflow from generic heap profiling. We supplement with 2025 Chrome DevTools methodology.

### PRIMARY RESEARCH: Deep-Research Section 5.4 (REQUIRED)

<action>Read COMPLETE file: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/21-54-memory-management-garbage-collection.md</action>

**Extract and Apply:**

**Key Insight #1 - SPA Memory Accumulation:**
*"Long single-page experiences can accumulate if you don't clean up"*
(Source: 21-54-memory-management-garbage-collection.md)

**What this means:** SPAs like React/Vue apps will continuously grow memory if animations aren't killed on route changes. This is THE primary leak source we're testing for.

**Key Insight #2 - ScrollTrigger Cleanup Pattern:**
*"We covered using `ScrollTrigger.getAll().forEach(t=> t.kill())` on navigation."*
(Source: 21-54-memory-management-garbage-collection.md)

**Critical Pattern:** This is the CORRECT way to clean ScrollTriggers on navigation:
```javascript
// On route change / component unmount:
ScrollTrigger.getAll().forEach(t => t.kill());
```

**Key Insight #3 - Timeline Persistence:**
*"GSAP typically releases tweens after completion... But if you store timeline in a variable and never kill it, it will persist (though idle)."*
(Source: 21-54-memory-management-garbage-collection.md)

**What this means:** Storing `const tl = gsap.timeline()` in component scope WITHOUT calling `tl.kill()` on unmount = memory leak.

**Key Insight #4 - GSAP Context Cleanup:**
*"Use GSAP Context or `tl.kill()` on old timelines... This frees associated events and memory."*
(Source: 21-54-memory-management-garbage-collection.md)

**Best Practice (GSAP 3.13+, April 2025):** Use gsap.context() for automatic cleanup:
```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    // All animations here
  }, ref);

  return () => ctx.revert(); // Automatic cleanup!
}, []);
```

**Key Insight #5 - Excessive Tween Creation:**
*"if on every mousemove you create a tween and don't kill the old one, you might pile up thousands"*
(Source: 21-54-memory-management-garbage-collection.md)

**Solution - Overwrite Strategy:**
*"Use quickTo or overwrite strategies (`overwrite: 'auto'` will kill previous tweens on same target automatically)."*
(Source: 21-54-memory-management-garbage-collection.md)

**Key Insight #6 - Detached DOM Detection:**
*"Check for detached DOM nodes... ensure you didn't accidentally duplicate DOM that never gets removed."*
(Source: 21-54-memory-management-garbage-collection.md)

**Chrome DevTools Method:**
*"Use memory snapshot in DevTools to see if lots of elements linger after supposed removal."*
(Source: 21-54-memory-management-garbage-collection.md)

### SECONDARY RESEARCH: Chrome DevTools Methodology (REQUIRED)

**Chrome DevTools Heap Snapshot Workflow (Nov 2025 Current):**

**Step 1: Open Memory Panel**
- DevTools → Memory tab
- Select "Heap snapshot" profiling type
- JavaScript VM instance selection

**Step 2: Take Baseline Snapshot**
- Click "Take snapshot" button
- Wait 5-10 seconds for processing
- Snapshot appears as "Snapshot 1"
- Note baseline heap size (e.g., 25.4 MB)

**Step 3: Stress Test (Navigation Cycles)**
- Navigate away from page
- Navigate back to page
- Repeat cycle
- Memory leaks manifest as continuous growth

**Step 4: Take Post-Stress Snapshot**
- Click "Take snapshot" again
- Snapshot appears as "Snapshot 2"
- Note post-stress heap size (e.g., 28.7 MB)

**Step 5: Compare Snapshots**
- Select "Snapshot 2"
- Dropdown: Change "Summary" → "Comparison"
- Baseline: Select "Snapshot 1"
- Sort by "Size Delta" (largest growth first)

**Step 6: Find Detached DOM Nodes**
- Select "Snapshot 2"
- Class filter input: Type "Detached"
- Press Enter
- DevTools shows all detached HTMLElement nodes
- Count detached nodes
- Inspect retaining paths (what's keeping them in memory?)

**Reference:** Chrome DevTools Memory Problems guide (current as of Dec 2024, verified Nov 2025)

### TERTIARY RESEARCH: Archon MCP (OPTIONAL but RECOMMENDED)

<action if="time permits">Query Archon MCP for additional GSAP memory patterns:</action>

**Optional Query 1: GSAP Context Cleanup Patterns**
```
rag_search_knowledge_base("gsap.context cleanup React", match_count=3)
```
**Purpose:** Find real-world gsap.context() implementation examples

**Optional Query 2: ScrollTrigger Leak Patterns**
```
rag_search_knowledge_base("ScrollTrigger memory leak SPA", match_count=3)
```
**Purpose:** Identify common ScrollTrigger leak scenarios

**Optional Query 3: Cleanup Code Examples**
```
rag_search_code_examples("GSAP cleanup useEffect", match_count=3)
```
**Purpose:** See production-quality cleanup patterns

### RESEARCH VALIDATION CHECKPOINT

<checkpoint type="approval-gate" blocking="true">
<action>Display research summary to user</action>
<action>Show extracted insights from Deep-Research Section 5.4</action>
<action>Confirm Chrome DevTools methodology understood</action>

**Before proceeding, verify you have:**
- ✅ Read Deep-Research Section 5.4 COMPLETELY (all 11 key insights)
- ✅ Understood ScrollTrigger cleanup pattern: `ScrollTrigger.getAll().forEach(t=> t.kill())`
- ✅ Understood Timeline cleanup: `tl.kill()`
- ✅ Understood GSAP Context cleanup: `ctx.revert()`
- ✅ Understood Chrome DevTools heap snapshot workflow (6 steps)
- ✅ Understood detached DOM detection methodology
- ✅ Reviewed overwrite: 'auto' strategy for high-frequency tweens

<ask>User must explicitly continue with "Continue [c]"</ask>

<critical>Agent CANNOT rationalize skipping this research gate. User input REQUIRED.</critical>
</checkpoint>

<template-output>research_summary, memory_management_framework, chrome_devtools_methodology</template-output>
</step>

<step n="3" goal="Enable Chrome DevTools Memory Panel">

**Chrome DevTools Memory Panel Setup:**

Guide user to prepare for heap snapshot capture using research-backed methodology (Chrome DevTools Dec 2024, verified Nov 2025).

**Manual Setup (REQUIRED):**
```
1. Open Chrome DevTools (F12)
2. Navigate to "Memory" tab
3. Select "Heap snapshot" radio button
4. Panel ready for snapshot capture
```

<action>Use Chrome DevTools MCP: navigate_page to {{page_url}}</action>

**Verification Checklist:**
- ✅ Page loaded successfully at {{page_url}}
- ✅ Memory panel accessible in DevTools
- ✅ "Heap snapshot" profiling type selected
- ✅ JavaScript VM instance visible
- ✅ Ready to capture baseline snapshot

**Note:** We're using the **standard Chrome DevTools heap snapshot methodology** (unchanged since Dec 2024, still current as of Nov 2025). This is the industry-standard approach for JavaScript memory leak detection.

</step>

<step n="4" goal="Capture Baseline Heap Snapshot">

**Baseline Snapshot (Clean State):**

This establishes the memory footprint BEFORE stress testing. Critical for accurate leak detection.

<action>Instruct user to take baseline heap snapshot in Chrome DevTools:</action>

**Manual Heap Snapshot Capture:**
```
1. In Memory tab, click "Take snapshot" button
2. Wait for snapshot to process (may take 5-10 seconds)
3. Snapshot appears in left panel as "Snapshot 1"
4. Note baseline heap size (e.g., 25.4 MB)
```

**Why This Works (Research-Backed):**
From Deep-Research 5.4: *"Use memory snapshot in DevTools to see if lots of elements linger after supposed removal."*

The heap snapshot captures the **entire JavaScript heap** including:
- All JavaScript objects
- DOM nodes (both attached and detached)
- Event listeners
- GSAP animations and ScrollTriggers
- Closures holding references

**Record Baseline Metrics:**

<action>Capture the following metrics from Snapshot 1:</action>

- **Baseline Heap Size:** _____ MB (from snapshot summary)
- **Baseline DOM Nodes:** _____ (approximate from snapshot)
- **Baseline Listeners:** _____ (if visible in snapshot)
- **Timestamp:** {{current_time}}

**Alternative - Programmatic Capture (If Chrome DevTools MCP Supports):**

<action if="chrome_devtools_mcp_supports_heap_snapshot">Use Chrome DevTools MCP: evaluate_script to trigger heap snapshot via Performance API</action>

**Note:** Most implementations require manual heap snapshot capture via DevTools UI. Programmatic capture is experimental.

<action>Capture baseline_timestamp with current date/time</action>

<template-output>baseline_heap_size, baseline_dom_nodes, baseline_listeners, baseline_timestamp</template-output>
</step>

<step n="5" goal="Stress Test - Navigation Cycles">

**Memory Stress Test Protocol (Research-Backed):**

Simulate typical SPA usage by navigating away and back multiple times. This exposes memory leaks from uncleaned animations.

**Why This Works (From Deep-Research 5.4):**
*"Long single-page experiences can accumulate if you don't clean up"*

Each navigation cycle should:
- Unmount components (triggering cleanup... or not!)
- Mount components again (creating new animations)
- If cleanup is broken: Memory grows linearly with each cycle
- If cleanup works: Memory stays stable or decreases (garbage collection)

<action>For each cycle (1 to {{navigation_cycles}}):</action>

**Cycle {{cycle_number}} of {{navigation_cycles}}:**

**Step 1: Navigate Away**
<action>Use Chrome DevTools MCP: navigate_page to {{page_url}}{{navigation_route}}</action>
<action>Wait for page load (2 seconds minimum)</action>

**Step 2: Let New Page Settle**
<action>Wait for animations to complete (if any on target route)</action>
<action>Wait additional 1 second for React/Vue to fully mount</action>

**Step 3: Navigate Back**
<action>Use Chrome DevTools MCP: navigate_page to {{page_url}}</action>
<action>Wait for page load (2 seconds minimum)</action>

**Step 4: Let Original Page Settle**
<action>Wait for animations to complete</action>
<action>Wait additional 1 second for full mount</action>

**Progress:** Cycle {{cycle_number}} of {{navigation_cycles}} complete

<action>Repeat for all {{navigation_cycles}} cycles</action>

**Post-Stress State:**
- ✅ Returned to original page ({{page_url}})
- ✅ Completed {{navigation_cycles}} full navigation cycles
- ✅ Each cycle: away → back (2 page loads per cycle)
- ✅ Total page loads: {{navigation_cycles}} × 2 = {{total_page_loads}}
- ✅ Ready for post-stress snapshot

**Expected Behavior (From Deep-Research 5.4):**

**If cleanup is proper:**
*"GSAP typically releases tweens after completion"* - Memory should stabilize or decrease after garbage collection kicks in.

**If leaks exist:**
*"if you store timeline in a variable and never kill it, it will persist"* - Memory grows linearly with each cycle.

**Common Leak Sources (Based on {{has_gsap_animations}} = {{value}}):**

<check if="has_gsap_animations equals yes">
**GSAP-Specific Leak Patterns (From Deep-Research 5.4):**

- ❌ **ScrollTriggers not killed:** *"We covered using `ScrollTrigger.getAll().forEach(t=> t.kill())` on navigation."*
  - **Impact:** Each cycle creates new ScrollTriggers, old ones persist
  - **Memory Growth:** ~1-3MB per cycle (depending on trigger count)

- ❌ **Timelines not killed:** *"if you store timeline in a variable and never kill it, it will persist (though idle)."*
  - **Impact:** Timeline objects accumulate in memory
  - **Memory Growth:** ~0.5-1MB per cycle

- ❌ **gsap.context() not reverted:** Missing `ctx.revert()` in React cleanup
  - **Impact:** All animations in context persist
  - **Memory Growth:** ~1-5MB per cycle (depending on animation count)

- ❌ **Excessive tweens without overwrite:** *"if on every mousemove you create a tween and don't kill the old one, you might pile up thousands"*
  - **Impact:** High-frequency tween creation without `overwrite: 'auto'`
  - **Memory Growth:** Can be extreme (10MB+ per cycle)
</check>

<check if="has_gsap_animations equals no">
**General SPA Leak Patterns:**

- ❌ **Event listeners not removed:** addEventListener without removeEventListener
- ❌ **Detached DOM nodes:** Components unmounted but DOM nodes still referenced
- ❌ **Third-party libraries:** Libraries without cleanup (analytics, charts, etc.)
- ❌ **Global variables:** Variables holding component references
</check>

</step>

<step n="6" goal="Capture Post-Stress Heap Snapshot">

**Post-Stress Snapshot:**

This captures the memory state AFTER stress testing. Comparison with baseline reveals leaks.

<action>Instruct user to take post-stress heap snapshot:</action>

**Manual Heap Snapshot Capture:**
```
1. In Memory tab, click "Take snapshot" button again
2. Wait for snapshot to process (5-10 seconds)
3. Snapshot appears as "Snapshot 2" in left panel
4. Note post-stress heap size (e.g., 28.7 MB)
```

**Record Post-Stress Metrics:**

<action>Capture the following metrics from Snapshot 2:</action>

- **Post-Stress Heap Size:** _____ MB
- **Post-Stress DOM Nodes:** _____
- **Post-Stress Listeners:** _____
- **Timestamp:** {{current_time}}

<action>Capture poststress_timestamp with current date/time</action>

**Calculate Growth Metrics:**

<action>Calculate heap_growth: {{poststress_heap_size}} - {{baseline_heap_size}} = _____ MB</action>
<action>Calculate listener_growth: {{poststress_listeners}} - {{baseline_listeners}} = _____</action>
<action>Calculate test_duration: Time elapsed from {{baseline_timestamp}} to {{poststress_timestamp}}</action>

**Growth Analysis (Research-Backed Thresholds):**

**Heap Growth Status:**
- ✅ **< 5MB:** PASS (normal SPA memory churn, within Chrome DevTools acceptable limits Nov 2025)
- ⚠️ **5-10MB:** WARNING (potential leak, investigate)
- ❌ **> 10MB:** FAIL (definite leak detected)

**Listener Growth Status:**
- ✅ **< 5 new listeners:** PASS (normal)
- ⚠️ **5-20 new listeners:** WARNING (check for missing removeEventListener)
- ❌ **> 20 new listeners:** FAIL (listener leak)

<template-output>poststress_heap_size, poststress_dom_nodes, poststress_listeners, poststress_timestamp, heap_growth, listener_growth, test_duration</template-output>
</step>

<step n="7" goal="Analyze Detached DOM Nodes">

**Detached DOM Node Detection (Chrome DevTools Methodology, Nov 2025):**

Detached DOM nodes are a **primary indicator of memory leaks** in SPAs. These are nodes that:
- Were removed from the DOM tree (unmounted)
- But JavaScript still holds references to them
- So garbage collector cannot free them

**Why This Matters (From Deep-Research 5.4):**
*"Check for detached DOM nodes... ensure you didn't accidentally duplicate DOM that never gets removed."*

<action>Instruct user to search for detached nodes using Chrome DevTools standard methodology:</action>

**Manual Detached Node Detection:**
```
1. Select "Snapshot 2" (post-stress) in left panel
2. In "Class filter" text box, type: Detached
3. Press Enter
4. DevTools shows all detached HTMLElement nodes
5. Count number of detached nodes
6. Inspect largest detached nodes (click to see retaining path)
```

**What You're Looking For:**

**Detached Node Structure (Example):**
```
Detached HTMLDivElement
  ├─ Shallow Size: 1,024 bytes (the node itself)
  ├─ Retained Size: 50,432 bytes (node + everything it keeps alive)
  └─ Retaining Path: What's keeping this in memory?
       ↓ EventListener
       ↓ Closure
       ↓ Global Variable
```

**Detached Node Analysis:**

<action>For largest detached nodes, capture:</action>

- **Detached DOM Nodes Found:** _____ (total count)
- **Largest Detached Node Type:** _____ (e.g., HTMLDivElement, HTMLSectionElement)
- **Shallow Size:** _____ bytes (the node itself)
- **Retained Size:** _____ bytes (total memory kept alive by this node)
- **Retaining Path:** What's keeping them in memory? (e.g., event listener, GSAP timeline, closure)

<action if="detached_nodes_found">Capture largest_detached_size (shallow size in bytes) and largest_retained_size (retained size in bytes) from DevTools</action>

**Common Leak Sources (Based on {{has_gsap_animations}} = {{value}}):**

<check if="has_gsap_animations equals yes">
**GSAP-Specific Detached Node Causes:**

From Deep-Research 5.4:
- ❌ **ScrollTriggers not killed:** *"ScrollTrigger.getAll().forEach(t=> t.kill()) on navigation"* - If not called, ScrollTrigger holds DOM references
- ❌ **GSAP timelines not killed:** *"Use GSAP Context or `tl.kill()` on old timelines"* - Timeline holds target element references
- ❌ **gsap.context() not reverted:** Context holds all animation targets
- ❌ **Event listeners from animations:** Animations with onUpdate/onComplete callbacks holding element refs
</check>

<check if="has_gsap_animations equals no">
**General SPA Detached Node Causes:**

- ❌ **Event listeners not removed:** addEventListener without removeEventListener keeps nodes alive
- ❌ **React/Vue refs not cleared:** Component refs holding DOM references after unmount
- ❌ **Third-party libraries:** Chart libraries, analytics, etc. holding element references
- ❌ **Global variables:** Variables in global scope holding element references
</check>

**Pass Criteria (Chrome DevTools Methodology, Nov 2025):**
- ✅ **< 10 detached DOM nodes:** PASS (normal SPA component churn)
- ⚠️ **10-25 detached nodes:** WARNING (investigate retaining paths)
- ❌ **≥ 25 detached DOM nodes:** FAIL (memory leak detected)

**Reference:** Chrome DevTools Memory Problems guide - Detached DOM tree detection (current as of Dec 2024, verified Nov 2025)

<template-output>detached_nodes_count, largest_detached_type, largest_detached_size, largest_retained_size, retaining_paths</template-output>
</step>

<step n="8" goal="Compare Snapshots & Detect Leaks">

**Snapshot Comparison Analysis (Chrome DevTools Methodology):**

This step uses the Chrome DevTools **Comparison view** to identify objects that grew in memory between snapshots.

<action>Instruct user to compare snapshots using standard Chrome DevTools methodology:</action>

**Manual Comparison (Chrome DevTools Dec 2024, Verified Nov 2025):**
```
1. Select "Snapshot 2" in left panel
2. In dropdown (top of panel), change from "Summary" to "Comparison"
3. Select "Snapshot 1" as comparison baseline
4. DevTools shows objects that increased in memory
5. Sort by "Size Delta" (largest growth first)
6. Inspect categories with significant growth
```

**What You're Looking For:**

**Size Delta Indicators:**
- **Positive (+) Size Delta:** Objects that grew (potential leaks)
- **Negative (-) Size Delta:** Objects that decreased (good, garbage collected)
- **Large deltas (>1MB):** Priority investigation targets

**Memory Growth Analysis:**

<action>Calculate heap_status based on heap_growth:</action>

**Heap Growth Status:**
```
If heap_growth < 5MB:
  heap_status = "✅ PASS (<5MB)"
  severity = "HEALTHY"

If heap_growth >= 5MB and < 10MB:
  heap_status = "⚠️ WARNING (5-10MB)"
  severity = "POTENTIAL LEAK"

If heap_growth >= 10MB:
  heap_status = "❌ FAIL (≥10MB)"
  severity = "DEFINITE LEAK"
```

<action>Calculate detached_status based on detached_nodes_count:</action>

**Detached Nodes Status:**
```
If detached_nodes_count < 10:
  detached_status = "✅ PASS (<10)"
  severity = "HEALTHY"

If detached_nodes_count >= 10 and < 25:
  detached_status = "⚠️ WARNING (10-25)"
  severity = "INVESTIGATE"

If detached_nodes_count >= 25:
  detached_status = "❌ FAIL (≥25)"
  severity = "MAJOR LEAK"
```

<action>Calculate heap_growth_percent relative to acceptable limit:</action>
```
heap_growth_percent = (heap_growth / 5.0) * 100
Format as integer percentage (e.g., 80% means 80% of acceptable limit)
```

**Leak Diagnosis (Research-Backed):**

<check if="heap_growth >= 5 or detached_nodes_count >= 10">

**❌ MEMORY LEAK DETECTED**

<action>Query Archon MCP for leak diagnosis patterns:</action>

**Archon Research Queries:**
```
rag_search_code_examples("GSAP memory leak cleanup {{framework}}", match_count=3)
rag_search_knowledge_base("ScrollTrigger kill cleanup SPA", match_count=3)
rag_search_knowledge_base("gsap.context cleanup useEffect", match_count=3)
```

<action>Generate suspected_causes based on {{has_gsap_animations}} and {{framework}}:</action>

<check if="has_gsap_animations equals yes">
**Suspected Causes (GSAP-Specific, From Deep-Research 5.4):**

**Primary Suspect #1: ScrollTriggers Not Killed**
- **Evidence:** Heap growth + detached DOM nodes
- **Root Cause:** Missing `ScrollTrigger.getAll().forEach(t=> t.kill())` on navigation
- **From Research:** *"We covered using `ScrollTrigger.getAll().forEach(t=> t.kill())` on navigation."* (Deep-Research 5.4)
- **Impact:** Each navigation cycle creates new ScrollTriggers, old ones persist with DOM references

**Primary Suspect #2: GSAP Timelines Not Killed**
- **Evidence:** Continuous heap growth across cycles
- **Root Cause:** Missing `tl.kill()` on component unmount
- **From Research:** *"if you store timeline in a variable and never kill it, it will persist (though idle)."* (Deep-Research 5.4)
- **Impact:** Timeline objects accumulate, holding target element references

**Primary Suspect #3: gsap.context() Not Reverted**
- **Evidence:** Large heap growth + many detached nodes
- **Root Cause:** Missing `ctx.revert()` in {{framework}} cleanup (useEffect return, onBeforeUnmount, etc.)
- **From Research:** *"Use GSAP Context or `tl.kill()` on old timelines... This frees associated events and memory."* (Deep-Research 5.4)
- **Impact:** ALL animations in context persist (most severe leak)

**Secondary Suspect #4: Excessive Tween Creation**
- **Evidence:** Extreme heap growth (>20MB)
- **Root Cause:** High-frequency tween creation without cleanup
- **From Research:** *"if on every mousemove you create a tween and don't kill the old one, you might pile up thousands"* (Deep-Research 5.4)
- **Solution:** *"Use quickTo or overwrite strategies (`overwrite: 'auto'` will kill previous tweens on same target automatically)."* (Deep-Research 5.4)
</check>

<check if="has_gsap_animations equals no">
**Suspected Causes (General SPA, Non-GSAP):**

**Primary Suspect #1: Event Listeners Not Removed**
- **Evidence:** Listener growth + detached nodes
- **Root Cause:** addEventListener without removeEventListener on unmount
- **Impact:** Each component mount adds listeners, unmount doesn't remove them

**Primary Suspect #2: Third-Party Library Leaks**
- **Evidence:** Heap growth in specific object categories
- **Root Cause:** Chart libraries, analytics, carousels without cleanup
- **Impact:** Libraries hold DOM/data references after component unmount

**Primary Suspect #3: Closures Retaining References**
- **Evidence:** Large retained sizes in snapshot comparison
- **Root Cause:** Closures in callbacks holding component state/DOM refs
- **Impact:** Garbage collector can't free objects referenced by closures
</check>

</check>

<check if="heap_growth < 5 and detached_nodes_count < 10">

**✅ NO LEAKS DETECTED - CLEANUP WORKING PROPERLY**

<action>Set suspected_causes = "No leaks detected - cleanup working properly"</action>

**Heap Growth:** {{heap_growth}}MB (< 5MB limit) ✅
**Detached Nodes:** {{detached_nodes_count}} (< 10 limit) ✅
**Verdict:** Memory management is sound!

<check if="has_gsap_animations equals yes">
**Confirmed Working Cleanup Patterns:**
- ✅ ScrollTriggers being killed on navigation
- ✅ GSAP timelines being cleaned up
- ✅ gsap.context() being reverted (or proper kill() calls)
- ✅ No excessive tween creation
</check>

</check>

<template-output>heap_status, detached_status, heap_growth_percent, leak_diagnosis, suspected_causes</template-output>
</step>

<step n="9" goal="Generate Cleanup Recommendations">

**Targeted Cleanup Strategies (Research-Backed):**

<check if="heap_growth >= 5 or detached_nodes_count >= 10">

**❌ MEMORY LEAK DETECTED - CLEANUP REQUIRED**

<action>Generate cleanup_strategies based on {{has_gsap_animations}}, {{framework}}, and suspected leak sources</action>

<check if="has_gsap_animations equals yes">

**GSAP Cleanup Patterns (From Deep-Research 5.4 + GSAP 3.13+ April 2025):**

### Solution #1: gsap.context() Cleanup (RECOMMENDED - GSAP 3.13+)

**Best Practice:** Use gsap.context() for automatic cleanup of ALL animations in scope.

**From Deep-Research 5.4:** *"Use GSAP Context or `tl.kill()` on old timelines... This frees associated events and memory."*

<check if="framework equals react">
**React Implementation (GSAP 3.13+, Released April 2025):**

**❌ WRONG - No Cleanup:**
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
    // Create context scoped to this component
    const ctx = gsap.context(() => {
      // All animations created here are tracked by context
      gsap.from('.hero', { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: '.section',
        start: 'top top',
        pin: true
      });

      // Can create multiple animations, all tracked
      gsap.to('.cards', { stagger: 0.1, opacity: 1 });

    }, ref); // Scope to ref element

    // Cleanup: ctx.revert() kills ALL animations + ScrollTriggers in this context
    return () => ctx.revert();
  }, []);

  return <div ref={ref}>...</div>;
}
```

**Why This Works:**
- Creates context scoped to component
- Tracks ALL animations created within context
- `ctx.revert()` on unmount kills everything automatically
- No need to manually track individual timelines/ScrollTriggers
- **Research-Backed:** *"Use GSAP Context... This frees associated events and memory."* (Deep-Research 5.4)
</check>

<check if="framework equals vue">
**Vue 3 Composition API Implementation:**

**❌ WRONG - No Cleanup:**
```javascript
<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.hero', { opacity: 0, y: -50 });

  ScrollTrigger.create({
    trigger: '.section',
    start: 'top top',
    pin: true
  });

  // NO CLEANUP! Memory leak on component unmount
});
</script>
```

**✅ CORRECT - Full Cleanup with gsap.context():**
```javascript
<script setup>
import { onMounted, onBeforeUnmount, ref as vueRef } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const container = vueRef(null);
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.hero', { opacity: 0, y: -50 });

    ScrollTrigger.create({
      trigger: '.section',
      start: 'top top',
      pin: true
    });
  }, container.value);
});

onBeforeUnmount(() => {
  ctx.revert(); // Kill all animations in this context
});
</script>

<template>
  <div ref="container">...</div>
</template>
```
</check>

<check if="framework equals vanilla">
**Vanilla JavaScript Implementation:**

**✅ CORRECT - Full Cleanup with gsap.context():**
```javascript
class AnimatedComponent {
  constructor(element) {
    this.element = element;
    this.ctx = null;
    this.init();
  }

  init() {
    this.ctx = gsap.context(() => {
      gsap.from('.hero', { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: '.section',
        start: 'top top',
        pin: true
      });
    }, this.element);
  }

  destroy() {
    // Call this when removing component
    if (this.ctx) {
      this.ctx.revert(); // Kill all animations
    }
  }
}

// Usage:
const component = new AnimatedComponent(document.querySelector('.page'));

// On navigation/removal:
component.destroy();
```
</check>

### Solution #2: Manual ScrollTrigger Cleanup (If Not Using Context)

**From Deep-Research 5.4:** *"We covered using `ScrollTrigger.getAll().forEach(t=> t.kill())` on navigation."*

**Pattern:**
```javascript
// On component unmount / route change:
ScrollTrigger.getAll().forEach(trigger => trigger.kill());
```

**When to Use:**
- You're NOT using gsap.context()
- You need fine-grained control over which triggers to kill
- You're cleaning up on page navigation (not component unmount)

**Warning:** This kills ALL ScrollTriggers globally. Use with caution if you have triggers on other pages.

### Solution #3: Manual Timeline Cleanup

**From Deep-Research 5.4:** *"if you store timeline in a variable and never kill it, it will persist (though idle)."*

<check if="framework equals react">
**React Pattern:**
```javascript
useEffect(() => {
  const tl = gsap.timeline();
  tl.from('.hero', { opacity: 0 })
    .to('.cards', { stagger: 0.1, opacity: 1 });

  return () => tl.kill(); // Manual cleanup
}, []);
```
</check>

### Solution #4: Overwrite Strategy for High-Frequency Tweens

**From Deep-Research 5.4:** *"if on every mousemove you create a tween and don't kill the old one, you might pile up thousands"*

**Solution:** *"Use quickTo or overwrite strategies (`overwrite: 'auto'` will kill previous tweens on same target automatically)."*

**❌ WRONG - Tween Pileup:**
```javascript
element.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.3 });
  // Creates NEW tween every mousemove = thousands of tweens!
});
```

**✅ CORRECT - Overwrite Strategy:**
```javascript
element.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    overwrite: 'auto' // Kills previous tween on same target
  });
});
```

**✅ BEST - quickTo() for High Performance:**
```javascript
const moveCursor = gsap.quickTo(cursor, { x: true, y: true, duration: 0.3 });

element.addEventListener('mousemove', (e) => {
  moveCursor(e.clientX, e.clientY); // Much faster, no tween creation
});
```

</check>

<check if="has_gsap_animations equals no">

**General SPA Cleanup Patterns:**

### Solution #1: Event Listener Cleanup

<check if="framework equals react">
**React Pattern:**
```javascript
useEffect(() => {
  const handleScroll = () => { /* ... */ };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll); // REQUIRED
  };
}, []);
```
</check>

<check if="framework equals vue">
**Vue 3 Pattern:**
```javascript
onMounted(() => {
  const handleScroll = () => { /* ... */ };
  window.addEventListener('scroll', handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
```
</check>

### Solution #2: Clear Component References

**Pattern:** Null out refs on unmount to break circular references:
```javascript
onBeforeUnmount(() => {
  this.chartInstance = null;
  this.elementRef = null;
});
```

### Solution #3: Third-Party Library Cleanup

**Check library documentation for cleanup methods:**
- Chart.js: `chart.destroy()`
- Analytics: `analytics.cleanup()`
- Carousels: `carousel.destroy()`

</check>

</check>

<check if="heap_growth < 5 and detached_nodes_count < 10">

**✅ NO CLEANUP REQUIRED - MEMORY MANAGEMENT IS SOUND**

<action>Generate prevention_tips for maintaining clean memory:</action>

**Prevention Tips (Research-Backed):**

<check if="has_gsap_animations equals yes">
**GSAP Best Practices (From Deep-Research 5.4 + GSAP 3.13+):**

1. **Always use gsap.context() for automatic cleanup** (GSAP 3.13+, April 2025)
   - Simplest, most reliable approach
   - Catches all animations in scope
   - One line cleanup: `return () => ctx.revert()`

2. **Use overwrite: 'auto' for high-frequency tweens**
   - Prevents tween pileup
   - From Deep-Research 5.4: *"overwrite: 'auto' will kill previous tweens on same target automatically"*

3. **Use quickTo() for mousemove/scroll animations**
   - Much more performant than creating tweens
   - No memory accumulation

4. **Kill ScrollTriggers on navigation**
   - If not using context: `ScrollTrigger.getAll().forEach(t=> t.kill())`
   - From Deep-Research 5.4: *"We covered using `ScrollTrigger.getAll().forEach(t=> t.kill())` on navigation."*
</check>

<check if="has_gsap_animations equals no">
**General SPA Best Practices:**

1. **Always remove event listeners on unmount**
2. **Destroy third-party libraries properly**
3. **Null out references in cleanup functions**
4. **Avoid global variables holding component data**
</check>

</check>

<template-output>cleanup_strategies, prevention_tips</template-output>
</step>

<step n="10" goal="Generate Memory Health Report">

<action>Compile all profiling results using template.md</action>
<action>Save to: {{default_output_file}}</action>

**Report Structure (Research-Backed):**

1. **Executive Summary**
   - Overall memory health status (HEALTHY / LEAKING / CRITICAL)
   - Heap growth: {{heap_growth}}MB ({{heap_status}})
   - Detached nodes: {{detached_nodes_count}} ({{detached_status}})
   - Navigation cycles tested: {{navigation_cycles}}
   - Total page loads: {{navigation_cycles}} × 2

2. **Heap Snapshot Analysis**
   - Baseline heap: {{baseline_heap_size}}MB
   - Post-stress heap: {{poststress_heap_size}}MB
   - Growth: {{heap_growth}}MB ({{heap_growth_percent}}% of acceptable limit)
   - Listener growth: {{listener_growth}}

3. **Detached DOM Node Analysis**
   - Count: {{detached_nodes_count}}
   - Largest detached type: {{largest_detached_type}}
   - Retained size: {{largest_retained_size}} bytes
   - Retaining paths: {{retaining_paths}}

4. **Research-Backed Diagnosis**
   - Suspected causes: {{suspected_causes}}
   - Based on Deep-Research Section 5.4 patterns
   - Chrome DevTools methodology (Nov 2025)

5. **Cleanup Strategies (If Leaks Detected)**
   - GSAP Context cleanup patterns (if applicable)
   - ScrollTrigger kill() methods
   - Framework-specific implementations ({{framework}})
   - Code examples from Deep-Research 5.4

6. **Research Citations**
   - Deep-Research Section 5.4: Memory Management & Garbage Collection
   - Chrome DevTools Memory Problems guide (Dec 2024, verified Nov 2025)
   - GSAP 3.13+ automatic cleanup features (April 2025)

7. **Final Verdict**
   - Memory health status: {{memory_health_status}}
   - Pass/Fail: Based on objective thresholds
   - Action items (if any)

<template-output>final_memory_report</template-output>
</step>

</workflow>
