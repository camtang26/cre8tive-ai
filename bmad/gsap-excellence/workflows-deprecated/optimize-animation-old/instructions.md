<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/optimize-animation/workflow.yaml</critical>

# optimize-animation - Performance Optimization Workflow

**Agent:** Tech Director
**Workflow:** optimize-animation
**Purpose:** Optimize GSAP animations using Deep-Research 5.1-5.6 frameworks and 2024-2025 techniques

---

## Overview

This workflow optimizes GSAP animations for 60fps performance using systematic optimization frameworks from Deep-Research Sections 5.1-5.6, Archon KB patterns, and latest 2024-2025 GPU acceleration techniques.

**Key Optimizations:**
1. **Property Selection:** Use transforms (x, y, scale) instead of layout properties (left, top, width)
2. **GPU Acceleration:** force3D, will-change, hardware acceleration
3. **Timeline Batching:** Reduce reflows by grouping animations
4. **Memory Management:** Eliminate leaks, cleanup properly
5. **Main Thread Efficiency:** Reduce JS execution time
6. **Jank Elimination:** Smooth 60fps

---

## Step 1: Gather Optimization Context

<ask name="animation_code">
**Animation Code**

Provide the GSAP animation code to optimize:
- Full implementation (timeline or individual tweens)
- Current performance metrics (if known)
</ask>

<ask name="performance_issues">
**Performance Issues**

What performance problems are you experiencing?
- Janky/choppy animation
- FPS drops below 60fps
- High CPU usage
- Memory leaks
- Slow on mobile

Example: "Animation drops to 40fps on mid-range devices (4x CPU throttle)"
</ask>

---

## Step 2: Research Gate (MANDATORY)

<research-gate enforcement="MANDATORY" blocking="true">

### Deep-Research Frameworks (REQUIRED - Sections 5.1-5.6)

#### Section 5.1: GPU-Efficient Properties
**Extract:** Transforms vs layout properties, GPU acceleration techniques

#### Section 5.2: Keep Main Thread Free
**Extract:** Reduce JS execution, offload to GPU

#### Section 5.3: Debugging Jank
**Extract:** Chrome DevTools profiling, jank identification

#### Section 5.4: Memory Management
**Extract:** Memory leak detection, cleanup strategies

#### Section 5.5: 60fps Optimization
**Extract:** Frame budget, paint time targets, throttling tests

#### Section 5.6: Testing & Validation
**Extract:** Performance testing methodologies

### Latest 2024-2025 Optimization Techniques (WebSearch Evidence)

**1. GPU Acceleration (2025 Best Practices):**
- Use x, y, scale, rotation (GPU-accelerated, no layout recalculation)
- Avoid left, top, width, height (triggers layout recalculation on main thread)
- force3D: "auto" (default) - applies translate3d() during animation, switches to 2D at end
- force3D: true - maintains 3D throughout (conserves GPU memory differently)
- will-change: transform - browser optimization hint

**2. Transform vs Layout Performance (AugustInfotech 2024):**
- left/top: Triggers CSS layout recalculation (main thread, expensive)
- x/y: Uses GPU, no layout recalculation
- width/height: Recalculates layout (main thread)
- scaleX/scaleY: Uses GPU, no layout recalculation
- **Result:** GSAP animates up to 20x faster than jQuery

**3. Hardware Acceleration (2024-2025):**
- transform and opacity offload rendering to GPU
- Improved performance, reduced CPU usage
- requestAnimationFrame default (syncs with refresh rate)
- Animation packing groups duplicate animations to minimize reflows

### Archon MCP Queries (REQUIRED)

#### Query 1: GPU Acceleration Patterns
```javascript
rag_search_knowledge_base("GSAP GPU acceleration force3D transform", source_id="b9f6b322298feb21", match_count=10)
```

#### Query 2: Performance Optimization Code Examples
```javascript
rag_search_code_examples("GSAP performance optimization transform", match_count=8)
```

#### Query 3: Memory Leak Prevention
```javascript
rag_search_knowledge_base("GSAP memory leak prevention cleanup", source_id="b9f6b322298feb21", match_count=8)
```

<checkpoint type="approval-gate" blocking="true">
<halt>🚨 STOP. Verify Deep-Research 5.1-5.6 reviewed, 2024-2025 techniques understood, Archon queries executed.</halt>
</checkpoint>

</research-gate>

---

## Step 3: Property Analysis

**Analyze current animation code for property usage:**

### Layout Properties (BAD - Triggers Reflow):
- left, top, right, bottom
- width, height
- margin, padding

**Count:** {{layout_properties_count}}

### Transform Properties (GOOD - GPU Accelerated):
- x, y, xPercent, yPercent
- scale, scaleX, scaleY
- rotation, rotationX, rotationY
- opacity

**Count:** {{transform_properties_count}}

**Optimization Opportunities:**
{{property_optimization_list}}

---

## Step 4: Generate Optimization Plan

Use template.md to generate structured optimization plan with before/after code examples.

**Plan Sections:**
1. Property replacements (left → x, width → scale)
2. GPU acceleration enhancements (force3D, will-change)
3. Timeline batching opportunities
4. Memory cleanup improvements
5. Main thread efficiency gains

---

## Success Criteria

- ✅ All layout properties replaced with transforms
- ✅ GPU acceleration maximized
- ✅ Timeline batching implemented
- ✅ Memory leaks eliminated
- ✅ 60fps target achieved
- ✅ Optimization plan generated with code examples

---

**Workflow Complete** ✨
