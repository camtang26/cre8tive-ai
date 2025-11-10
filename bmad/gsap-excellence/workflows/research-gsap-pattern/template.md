# GSAP Pattern Research Report: {{pattern_name}}

**Generated:** {{date}}
**Cinematographer Research Protocol - Multi-Source Integration**
**Pattern:** {{pattern_name}}
**Context:** {{use_case}}
**Complexity:** {{complexity_preference}}

---

## Executive Summary

**Research Scope:**
This report presents comprehensive research on **{{pattern_name}}** using the Cinematographer's systematic multi-source protocol. All research is backed by the 2.2M+ word Deep-Research knowledge base and validated against premium examples from 2024-2025.

**Sources Consulted:**
- ✅ **Archon MCP:** 5 priority sources (gsap.com, Codrops, FreeFrontend, CodePen, Lenis)
- ✅ **Deep-Research:** 20 universal sections (Performance 5.1-5.6, Accessibility 6.1-6.4, Pitfalls 8.1-8.10)
- ✅ **WebSearch:** 2024-2025 premium examples and trends
- ✅ **Context7:** {{context7_usage}}

**Key Findings:**
1. **{{key_finding_1}}**
2. **{{key_finding_2}}**
3. **{{key_finding_3}}**

**GSAP Compatibility:**
- **Minimum Version:** GSAP 3.13.0+
- **Required Plugins:** {{required_plugins}}
- **Premium Plugins Available (FREE):** {{premium_plugins_used}}

**Recommended Approach:**
{{recommended_approach_summary}}

---

## 1. Pattern Overview

### What is {{pattern_name}}?

{{pattern_technical_description}}

### Why Use This Pattern?

**Use Cases:**
- {{use_case_1}}
- {{use_case_2}}
- {{use_case_3}}

**Advantages:**
- {{advantage_1}}
- {{advantage_2}}
- {{advantage_3}}

**When NOT to Use:**
- {{limitation_1}}
- {{limitation_2}}

---

## 2. Deep-Research Framework Analysis

This section applies the 20 universal Deep-Research principles to {{pattern_name}}.

### Performance Analysis (Sections 5.1-5.6)

#### Section 5.1: GPU Rule - Property Selection

**Deep-Research Principle:**
*Only animate `transform` (x, y, scale, rotate) and `opacity` for GPU acceleration.*
(Source: 18-51-animate-efficient-properties-the-gpu-rule.md)

**Application to {{pattern_name}}:**
{{gpu_rule_application}}

#### Section 5.2: Main Thread - Frame Budget

**Deep-Research Principle:**
*Keep JavaScript execution under 16ms per frame @ 60fps.*
(Source: 19-52-keep-the-main-thread-free-avoid-long-tasks.md)

**Application:**
{{main_thread_application}}

#### Section 5.3: Jank Debugging

**Deep-Research Principle:**
*Use Chrome DevTools Performance tab to identify layout thrashing and long tasks.*
(Source: 20-53-debugging-jank.md)

**Profiling Checklist:**
{{jank_debugging_checklist}}

#### Section 5.4: Memory Management

**Deep-Research Principle:**
*Always kill() animations on component unmount to prevent memory leaks.*
(Source: 21-54-memory-management-garbage-collection.md)

**Cleanup Protocol:**
```javascript
{{cleanup_protocol}}
```

#### Section 5.5: 60fps Optimization

**Deep-Research Principle:**
*Target sustained 60fps on desktop, 30fps minimum on mobile with 4x CPU throttle testing.*
(Source: 22-55-optimize-animations-for-60fps.md)

**Performance Targets:**
{{fps_targets}}

#### Section 5.6: WebGL/Canvas Alternatives

**Deep-Research Principle:**
*Consider WebGL/Canvas for 100+ simultaneous elements or particle systems.*
(Source: 23-56-when-to-use-webglcanvas.md)

**Assessment:**
{{webgl_canvas_assessment}}

---

### Accessibility Analysis (Sections 6.1-6.4)

#### Section 6.1: prefers-reduced-motion (MANDATORY)

**Deep-Research Principle:**
*WCAG 2.1 Guideline 2.3.3 requires respecting prefers-reduced-motion media query.*
(Source: 24-61-respecting-prefers-reduced-motion.md)

**Reduced Motion Fallback:**
```javascript
{{reduced_motion_fallback}}
```

#### Section 6.2-6.4: Other Accessibility

**Principles Applied:**
- No flashing >3 times per second
- Maintain keyboard navigation
- WCAG AA contrast (4.5:1 text, 3:1 UI)
- Pause/skip controls for animations >5 seconds

**Accessibility Checklist:**
{{accessibility_checklist}}

---

### Common Pitfalls Analysis (Sections 8.1-8.10)

#### All 10 Pitfalls Checked:

1. **Cleanup (8.1):** {{pitfall_8_1_status}} - {{pitfall_8_1_mitigation}}
2. **GPU Properties (8.2):** {{pitfall_8_2_status}} - {{pitfall_8_2_mitigation}}
3. **immediateRender (8.3):** {{pitfall_8_3_status}} - {{pitfall_8_3_mitigation}}
4. **Multiple ScrollTriggers (8.4):** {{pitfall_8_4_status}} - {{pitfall_8_4_mitigation}}
5. **overwrite Mode (8.5):** {{pitfall_8_5_status}} - {{pitfall_8_5_mitigation}}
6. **refresh() (8.6):** {{pitfall_8_6_status}} - {{pitfall_8_6_mitigation}}
7. **Deprecated Syntax (8.7):** {{pitfall_8_7_status}} - {{pitfall_8_7_mitigation}}
8. **Uncontrolled Loops (8.8):** {{pitfall_8_8_status}} - {{pitfall_8_8_mitigation}}
9. **Device Testing (8.9):** {{pitfall_8_9_status}} - {{pitfall_8_9_mitigation}}
10. **from() Flicker (8.10):** {{pitfall_8_10_status}} - {{pitfall_8_10_mitigation}}

---

## 3. Archon MCP Research Findings

### Source 1: gsap.com Official Docs (b9f6b322298feb21)

**Key Findings:**
{{archon_gsap_com_findings}}

**Best Patterns:**
{{archon_gsap_com_patterns}}

---

### Source 2: Tympanus/Codrops (1e5cc3bd5125be3c)

**Key Findings:**
{{archon_codrops_findings}}

**Premium Tutorials:**
{{archon_codrops_tutorials}}

---

### Source 3: FreeFrontend (90c2ef5e8fa816b7)

**Key Findings:**
{{archon_freefrontend_findings}}

---

### Source 4: CodePen (020e9f31a8c5cdb7)

**Top CodePens (by hearts/views):**
{{archon_codepen_top}}

---

### Source 5: Lenis Integration (77ae0ef68a867aa9)

**Integration Patterns:**
{{archon_lenis_patterns}}

---

### Premium Plugin Research (FREE in GSAP 3.13+)

**ScrollSmoother:** {{scrollsmoother_findings}}
**MorphSVG:** {{morphsvg_findings}}
**SplitText:** {{splittext_findings}}
**DrawSVG:** {{drawsvg_findings}}
**MotionPath:** {{motionpath_findings}}

---

## 4. WebSearch Premium Examples (2024-2025)

### Example 1: {{premium_example_1_name}}

**URL:** {{premium_example_1_url}}
**Award:** {{premium_example_1_award}}
**Year:** {{premium_example_1_year}}

**What Makes It Premium:**
{{premium_example_1_qualities}}

**GSAP Techniques:**
{{premium_example_1_techniques}}

**Takeaways:**
{{premium_example_1_takeaways}}

---

### Example 2: {{premium_example_2_name}}

**URL:** {{premium_example_2_url}}
**Award:** {{premium_example_2_award}}
**Year:** {{premium_example_2_year}}

**What Makes It Premium:**
{{premium_example_2_qualities}}

**GSAP Techniques:**
{{premium_example_2_techniques}}

**Takeaways:**
{{premium_example_2_takeaways}}

---

### Example 3: {{premium_example_3_name}}

**URL:** {{premium_example_3_url}}
**Award:** {{premium_example_3_award}}

**What Makes It Premium:**
{{premium_example_3_qualities}}

**Takeaways:**
{{premium_example_3_takeaways}}

---

### Example 4: {{premium_example_4_name}}

**URL:** {{premium_example_4_url}}
**Award:** {{premium_example_4_award}}

**Takeaways:**
{{premium_example_4_takeaways}}

---

## 5. Implementation Approaches

### Simple Implementation (Complexity: Basic)

**When to Use:**
{{simple_when_to_use}}

**GSAP Features:**
{{simple_gsap_features}}

**Code Example:**
```javascript
{{simple_code_example}}
```

**Performance:** {{simple_fps}}
**Browser Support:** {{simple_browser_support}}

---

### Intermediate Implementation (Complexity: Medium)

**When to Use:**
{{intermediate_when_to_use}}

**GSAP Features:**
{{intermediate_gsap_features}}

**Code Example:**
```javascript
{{intermediate_code_example}}
```

**Performance:** {{intermediate_fps}}

---

### Advanced Implementation (Complexity: Advanced)

**When to Use:**
{{advanced_when_to_use}}

**GSAP Features:**
{{advanced_gsap_features}}

**Code Example:**
```javascript
{{advanced_code_example}}
```

**Performance:** {{advanced_fps}}

---

## 6. Code Examples (Production-Ready)

### Example 1: {{code_example_1_title}}

**Complexity:** {{code_example_1_complexity}}
**Source:** {{code_example_1_source}}

**Description:**
{{code_example_1_description}}

**Code:**
```javascript
{{code_example_1_code}}
```

**Performance:** {{code_example_1_performance}}
**Accessibility:** {{code_example_1_accessibility}}

---

### Example 2: {{code_example_2_title}}

**Complexity:** {{code_example_2_complexity}}
**Source:** {{code_example_2_source}}

**Code:**
```javascript
{{code_example_2_code}}
```

**Performance:** {{code_example_2_performance}}

---

### Example 3: {{code_example_3_title}}

**Complexity:** {{code_example_3_complexity}}
**Source:** {{code_example_3_source}}

**Code:**
```javascript
{{code_example_3_code}}
```

**Performance:** {{code_example_3_performance}}

---

### Example 4: {{code_example_4_title}}

**Complexity:** {{code_example_4_complexity}}
**Code:**
```javascript
{{code_example_4_code}}
```

---

### Example 5: {{code_example_5_title}}

**Complexity:** {{code_example_5_complexity}}
**Code:**
```javascript
{{code_example_5_code}}
```

---

## 7. Best Practices (Research-Backed)

### Performance Best Practices

**From Deep-Research Sections 5.1-5.6:**

1. **✅ GPU-Accelerated Properties Only (Section 5.1)**
   {{performance_bp_1}}

2. **✅ 16ms Frame Budget (Section 5.2)**
   {{performance_bp_2}}

3. **✅ Chrome DevTools Profiling (Section 5.3)**
   {{performance_bp_3}}

4. **✅ Memory Cleanup (Section 5.4)**
   {{performance_bp_4}}

5. **✅ 60fps Sustained Target (Section 5.5)**
   {{performance_bp_5}}

6. **✅ WebGL/Canvas Assessment (Section 5.6)**
   {{performance_bp_6}}

---

### Accessibility Requirements

**From Deep-Research Sections 6.1-6.4:**

1. **✅ prefers-reduced-motion (MANDATORY - Section 6.1)**
   {{accessibility_req_1}}

2. **✅ No Flashing >3Hz (Section 6.2)**
   {{accessibility_req_2}}

3. **✅ Keyboard Navigation (Section 6.2)**
   {{accessibility_req_3}}

4. **✅ WCAG AA Contrast (Section 6.3)**
   {{accessibility_req_4}}

5. **✅ User Control (Section 6.4)**
   {{accessibility_req_5}}

---

### Common Pitfalls to Avoid

**From Deep-Research Sections 8.1-8.10:**

1. **❌ Forgetting cleanup (8.1):** {{pitfall_avoidance_1}}
2. **❌ Animating layout properties (8.2):** {{pitfall_avoidance_2}}
3. **❌ from() flicker (8.3/8.10):** {{pitfall_avoidance_3}}
4. **❌ Multiple ScrollTriggers (8.4):** {{pitfall_avoidance_4}}
5. **❌ No overwrite mode (8.5):** {{pitfall_avoidance_5}}
6. **❌ Missing refresh() (8.6):** {{pitfall_avoidance_6}}
7. **❌ Deprecated syntax (8.7):** {{pitfall_avoidance_7}}
8. **❌ Uncontrolled loops (8.8):** {{pitfall_avoidance_8}}
9. **❌ Not testing mobile (8.9):** {{pitfall_avoidance_9}}
10. **❌ Other pitfalls:** {{pitfall_avoidance_10}}

---

## 8. Browser Compatibility

### Desktop Browsers

**Chrome/Edge:** {{chrome_compat}}
**Firefox:** {{firefox_compat}}
**Safari:** {{safari_compat}}

### Mobile Browsers

**iOS Safari (PRIMARY):** {{ios_safari_compat}}
**Android Chrome:** {{android_chrome_compat}}

### Known Issues

{{browser_issues}}

---

## 9. Technical Requirements

**GSAP Version:** 3.13.0+ (latest 3.x recommended)
**Required Plugins:** {{required_plugins_list}}
**Premium Plugins (FREE):** {{premium_plugins_list}}
**Dependencies:** {{other_dependencies}}

---

## 10. Next Steps

### Implementation Checklist

- [ ] Install GSAP 3.13.0+ and required plugins
- [ ] Choose complexity (Simple / Intermediate / Advanced)
- [ ] Implement code from examples
- [ ] Add prefers-reduced-motion fallback (MANDATORY)
- [ ] Profile with Chrome DevTools (60fps target)
- [ ] Test on iOS Safari + Android Chrome
- [ ] Verify keyboard navigation
- [ ] Check WCAG AA contrast
- [ ] Add cleanup protocols
- [ ] Test 4x CPU throttle (low-end devices)

---

### Further Resources

**Official Documentation:**
{{official_docs}}

**Archon Sources:**
{{archon_resources}}

**Premium Examples:**
{{premium_resources}}

---

## Appendix: Research Sources

**Deep-Research (20 sections):**
- Performance: 5.1-5.6 (files 18-51 through 23-56)
- Accessibility: 6.1-6.4 (files 24-61 through 27-64)
- Pitfalls: 8.1-8.10 (files 34-81 through 43-810)

**Archon MCP (5 sources):**
- gsap.com (b9f6b322298feb21)
- Codrops (1e5cc3bd5125be3c)
- FreeFrontend (90c2ef5e8fa816b7)
- CodePen (020e9f31a8c5cdb7)
- Lenis (77ae0ef68a867aa9)

**WebSearch:** {{websearch_sources_list}}
**Context7:** {{context7_sources_list}}

---

**END OF REPORT**

**Research Protocol:** Cinematographer Multi-Source Integration
**Quality Level:** PREMIUM (Research-Backed)
**Generated:** {{timestamp}}

🎬 **"That's comprehensive research on {{pattern_name}}. Ready to bring it to life?"** - The Cinematographer

_Generated by GSAP Excellence Engine | Module: gsap-excellence | Workflow: research-gsap-pattern_
