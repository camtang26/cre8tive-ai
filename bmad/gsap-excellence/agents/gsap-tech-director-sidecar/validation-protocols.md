# Tech Director Validation Protocols

## Production Validation Protocol

**Step 1: Performance Validation (BLOCKING)**
Reference: {module_root}/checklists/performance.md

1. ✅ GPU Rule (5.1): NO layout properties
2. ✅ 60fps @ 4x CPU throttle (5.5): MANDATORY
3. ✅ Main Thread <8ms (5.2): Frame budget check
4. ✅ Jank profiling (5.3): Chrome DevTools analysis

**Step 2: Accessibility Validation (BLOCKING)**
Reference: {module_root}/checklists/accessibility.md

1. ✅ prefers-reduced-motion (6.1): CRITICAL - cannot ship without
2. ✅ NO flashing >3/sec (6.2): WCAG 2.3.1 compliance
3. ✅ Focus management (6.2): Modal/interactive element focus
4. ✅ Color contrast (6.3): 4.5:1 minimum WCAG AA

**Step 3: Production Sign-Off**
- [ ] ALL CRITICAL checks: PASS (blocking)
- [ ] 80%+ HIGH checks: PASS (quality bar)
- [ ] Console errors: 0
- [ ] GSAP warnings: 0
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Mobile tested (iOS Safari, Android Chrome)

**FAIL Criteria:**
- 6.1 prefers-reduced-motion missing → BLOCK
- 5.5 NOT 60fps @ 4x CPU → BLOCK
- 5.1 Animating layout properties → BLOCK
- 6.2 Flashing >3/sec → BLOCK
- Console errors present → BLOCK

---

## Chrome DevTools MCP Integration

**Primary Tool:** Chrome DevTools MCP for validation

**Performance Profiling:**
```javascript
// Start profiling
mcp.performance_start_trace({ reload: true, autoStop: false });

// Trigger animation manually

// Stop profiling
mcp.performance_stop_trace();
```

**FPS Verification:**
- Enable FPS meter: Cmd/Ctrl+Shift+P → "Show FPS meter"
- CPU throttle: Performance → CPU: 4x slowdown
- Observe during animation: Should stay at 60fps

**Accessibility Testing:**
```javascript
// Navigate to page
mcp.navigate_page({ url: "..." });

// Check prefers-reduced-motion
mcp.evaluate_script({
  function: `() => window.matchMedia('(prefers-reduced-motion: reduce)').matches`
});

// Screenshot for visual validation
mcp.take_screenshot();
```

**Network Emulation:**
```javascript
// Test on slow connection
mcp.emulate_network({ throttlingOption: "Slow 3G" });
mcp.navigate_page({ url: "..." });
// Observe load behavior
```

---

## Usage Directive

**When Validating VFX Artist/Editor Code:**
1. Open {module_root}/checklists/performance.md
2. Run through CRITICAL checks (5.1 GPU Rule, 5.5 60fps @ 4x)
3. Open {module_root}/checklists/accessibility.md
4. Validate 6.1 prefers-reduced-motion (BLOCKING)
5. Profile with Chrome DevTools MCP if needed
6. Sign off ONLY if ALL CRITICAL checks PASS

**When Debugging Performance:**
- Start with 5.3 (DevTools profiling)
- Check 5.1 (GPU Rule) for jank
- Validate 5.2 (Main Thread) for heavy callbacks
- Profile memory (5.4) if SPA context

**When Debugging Accessibility:**
- Verify 6.1 FIRST (most common miss)
- Check 6.2 (focus, flashing, screen readers)
- Validate 6.3 (contrast) with WebAIM tool
- Test 6.4 (user controls) manually

---

## Quality Bar

**Production-Ready Requirements:**
- [ ] 60fps @ 4x CPU throttle: PASS (MANDATORY)
- [ ] prefers-reduced-motion: IMPLEMENTED (MANDATORY)
- [ ] GPU Rule: PASS (NO layout properties)
- [ ] Console errors: 0
- [ ] WCAG AA compliance: PASS (4.5:1 contrast, no flashing)
- [ ] Cross-browser tested: Chrome + Firefox + Safari
- [ ] Mobile tested: iOS Safari + Android Chrome

**If ANY MANDATORY check fails → Send back to Editor/VFX Artist**
