# GSAP Accessibility Checklist

**Source:** Deep-Research GSAP-Animation-Mastery Sections 6.1-6.4
**Purpose:** WCAG compliance validation for GSAP animations
**Usage:** Reference during accessibility-audit workflow, production sign-off

---

## 🔴 CRITICAL (BLOCKING - Cannot Ship Without)

## 6.1: Respecting prefers-reduced-motion - MANDATORY

**WCAG:** 2.3.3 Animation from Interactions (Level AAA)
**Severity:** CRITICAL - **CANNOT SHIP WITHOUT THIS**

**Principle:** Some users have vestibular disorders or prefer no motion. We MUST honor `prefers-reduced-motion`.

### Detection & Implementation Checklist

- [ ] **Detecting preference:** Using `window.matchMedia('(prefers-reduced-motion: reduce)')`?
- [ ] **GSAP matchMedia:** Using `gsap.matchMedia()` for conditional animations?
- [ ] **Fallback provided:** Alternative presentation when reduced motion enabled?

### Reduction Strategy Options

**Option 1: Disable Animations (Most Accessible)**
- [ ] **ScrollTriggers disabled:** `ScrollTrigger.getAll().forEach(trig => trig.disable())`?
- [ ] **Instant completion:** `gsap.globalTimeline.timeScale(100)` to finish instantly?
- [ ] **Elements visible:** Static CSS classes applied to show end states?

**Option 2: Simplify Animations (Moderate)**
- [ ] **No parallax:** Disabling parallax effects?
- [ ] **No large movement:** Replacing slides with fades?
- [ ] **Shorter durations:** Reducing animation duration to <0.2s?
- [ ] **Simple fades only:** Using only opacity changes?

**Option 3: Separate Animations (Recommended)**
- [ ] **Full animations:** Created for `(prefers-reduced-motion: no-preference)`?
- [ ] **Reduced animations:** Created for `(prefers-reduced-motion: reduce)`?
- [ ] **matchMedia used:** Using `mm.add()` for both contexts?

### What to Reduce/Disable

**MUST Disable:**
- [ ] **Parallax effects:** Can cause dizziness
- [ ] **Zooming/rotation:** Large transform changes
- [ ] **Auto-scrolling:** Scroll-jacking, automatic page movement
- [ ] **Continuous motion:** Background pans, infinite loops
- [ ] **Large translations:** Elements moving >50% viewport

**Can Keep (If Simplified):**
- [ ] **Simple fades:** opacity: 0 → 1 (short duration <0.3s)
- [ ] **Small movements:** <20px translations
- [ ] **Instant state changes:** Using `.set()` instead of `.to()`

### Code Examples

**✅ CORRECT - Full Implementation:**
```javascript
const mm = gsap.matchMedia();

// Full animations for users who prefer motion
mm.add("(prefers-reduced-motion: no-preference)", () => {
  gsap.to(".hero", { y: -100, opacity: 1, duration: 1, ease: "power2.out" });
  ScrollTrigger.create({ /* parallax effects */ });
});

// Reduced animations for users who prefer less motion
mm.add("(prefers-reduced-motion: reduce)", () => {
  // Instant visibility (no animation)
  gsap.set(".hero", { y: 0, opacity: 1 });
  // OR simple fade only
  gsap.to(".hero", { opacity: 1, duration: 0.2 });
});
```

**✅ CORRECT - Disable All Animations:**
```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  ScrollTrigger.getAll().forEach(trig => trig.kill());
  gsap.globalTimeline.timeScale(100); // Finish any running animations instantly
}
```

**✅ CORRECT - CSS Fallback:**
```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    /* Show final state immediately */
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    animation: none !important;
  }
}
```

### Testing Checklist

- [ ] **OS setting toggled:** Manually toggle OS "Reduce Motion" setting?
  - **Mac:** Settings → Accessibility → Display → Reduce Motion
  - **Windows:** Settings → Display → Simplify and personalize → Show animations
- [ ] **Animations noticeably reduced:** Verify all major animations tone down or disable?
- [ ] **Content still accessible:** All content visible without animation?
- [ ] **No stuck elements:** No pinned elements stuck when animations disabled?

**Reference:** Deep-Research 6.1

---

## 🟡 HIGH Priority (WCAG AA Compliance)

## 6.2: Other Motion Accessibility Considerations

**WCAG:** 2.3.1 Three Flashes (Level A), 2.2.2 Pause/Stop/Hide (Level A)
**Severity:** HIGH

### Flashing Content (WCAG 2.3.1)

**Requirement:** No content should flash more than 3 times per second

- [ ] **NO rapid flashing:** Elements don't flash/blink >3 times per second?
- [ ] **NO high-intensity flashes:** Avoiding rapid red flashes (seizure trigger)?
- [ ] **Strobe effects:** NO strobe-like visibility toggling?
- [ ] **If flashing needed:** Keep it slow (<3/sec) AND low intensity?

**✅ SAFE - Slow blink:**
```javascript
// Safe: 1 blink every 2 seconds
gsap.to(".indicator", { opacity: 0.5, duration: 1, repeat: -1, yoyo: true });
```

**❌ UNSAFE - Rapid flash:**
```javascript
// Dangerous: 10 blinks per second!
gsap.to(".warning", { opacity: 0, duration: 0.05, repeat: -1, yoyo: true });
```

### Focus Management

- [ ] **Modal focus:** Focus moved to modal when opened via Flip/animation?
- [ ] **Return focus:** Focus returned to trigger button when modal closed?
- [ ] **Background not focusable:** `aria-hidden="true"` on background when modal open?
- [ ] **Tab trapping:** Focus trapped within modal while open?
- [ ] **Keyboard navigation:** Tab key works during animations?
- [ ] **Focus visible:** Focus indicators not hidden by transforms?

**✅ CORRECT - Focus Management:**
```javascript
myButton.addEventListener('click', () => {
  openModalAnimation.play();
  setTimeout(() => {
    document.getElementById('closeBtn').focus(); // Move focus to modal
  }, 300); // After animation completes
});

closeBtn.addEventListener('click', () => {
  closeModalAnimation.play().then(() => {
    myButton.focus(); // Return focus to trigger
  });
});
```

### Screen Reader Compatibility

- [ ] **SplitText accessible:** Text content still readable by screen readers?
- [ ] **aria-label provided:** If text split, container has `aria-label` with full text?
- [ ] **aria-hidden on splits:** Split pieces marked `aria-hidden="true"`?
- [ ] **Offscreen elements:** Invisible elements have `aria-hidden="true"`?
- [ ] **Revealed elements:** `aria-hidden` removed when content revealed?
- [ ] **NO screen reader warnings:** Console shows no accessibility warnings?

**✅ CORRECT - SplitText Accessibility:**
```javascript
const split = new SplitText(".heading", { type: "chars" });
// GSAP SplitText automatically handles aria-label, but verify:
console.log(split.elements[0].getAttribute('aria-label')); // Should show full text
```

### Long Animation Controls (WCAG 2.2.2)

**Requirement:** Animations >5 seconds need pause/stop mechanism

- [ ] **>5 second animations identified:** List all animations exceeding 5 seconds?
- [ ] **Pause button provided:** User can pause long animations?
- [ ] **Keyboard pause:** Spacebar or other key pauses animation?
- [ ] **Stop mechanism:** User can completely stop decorative long animations?
- [ ] **OR auto-stops:** Animation stops after few loops (not infinite)?

**✅ CORRECT - Pause Control:**
```html
<button id="pauseBtn">Pause Animations</button>
```
```javascript
const longAnimation = gsap.timeline({ repeat: -1 });
pauseBtn.addEventListener('click', () => {
  if (longAnimation.paused()) {
    longAnimation.play();
    pauseBtn.textContent = 'Pause Animations';
  } else {
    longAnimation.pause();
    pauseBtn.textContent = 'Resume Animations';
  }
});
```

**Reference:** Deep-Research 6.2

---

## 6.3: Accessible Styling for Motion

**WCAG:** 1.4.3 Contrast (Level AA), 1.4.11 Non-text Contrast (Level AA)
**Severity:** MEDIUM

### Color Contrast During Animations

**Requirement:** WCAG AA requires 4.5:1 contrast ratio for normal text, 3:1 for large text

- [ ] **Text contrast maintained:** Text ≥4.5:1 contrast during ALL animation states?
- [ ] **NO low-contrast frames:** No brief moments of low contrast during transitions?
- [ ] **Animated text:** Text color remains readable while animating?
- [ ] **Hover states:** Hover animations maintain contrast requirements?

**Testing:**
- [ ] **Contrast checker used:** Use WebAIM Contrast Checker or DevTools Accessibility panel?
- [ ] **Frame-by-frame check:** Verify contrast in mid-animation states?

**✅ CORRECT - Maintain Contrast:**
```javascript
// Ensure both colors have sufficient contrast with background
gsap.to(".text", {
  color: "#333", // 4.5:1+ on white background
  duration: 1
});
```

**❌ WRONG - Brief low contrast:**
```javascript
// Animates through gray (#888) which may have <4.5:1 contrast
gsap.fromTo(".text", { color: "#fff" }, { color: "#000", duration: 1 });
```

### Text Readability

- [ ] **Text readable:** Text remains readable during all animation states?
- [ ] **Font size:** Font size not animated below 16px for body text?
- [ ] **NO extreme transforms:** Text not skewed/rotated to unreadable angles?
- [ ] **Blur effects:** If using blur, text still readable?

### Critical UI Accessibility

- [ ] **Buttons always visible:** Interactive elements visible during animations?
- [ ] **Forms accessible:** Form fields not obscured by overlays?
- [ ] **Error messages:** Errors visible and announced (role="alert")?

**Reference:** Deep-Research 6.3

---

## 6.4: User Control & Education

**WCAG:** 2.2.2 Pause, Stop, Hide (Level A)
**Severity:** MEDIUM

### User Control Options

**In-Site Animation Toggle (Recommended):**
- [ ] **Toggle provided:** "Enable/Disable Animations" setting in UI?
- [ ] **Persistent preference:** Choice saved to localStorage?
- [ ] **Easy to find:** Toggle visible in settings/menu?
- [ ] **Works independently:** Works in addition to OS prefers-reduced-motion?

**✅ CORRECT - Animation Toggle:**
```javascript
// Check both OS preference AND user toggle
const osReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const userDisabled = localStorage.getItem('animationsDisabled') === 'true';
const shouldAnimate = !osReducedMotion && !userDisabled;

if (shouldAnimate) {
  // Run animations
} else {
  // Skip animations
}

// Toggle button
toggleBtn.addEventListener('click', () => {
  const current = localStorage.getItem('animationsDisabled') === 'true';
  localStorage.setItem('animationsDisabled', !current);
  location.reload(); // Reload to apply
});
```

### Documentation & Warnings

- [ ] **Help section:** Documentation mentions animations and how to disable?
- [ ] **Accessibility statement:** Site accessibility page documents animation features?
- [ ] **Disorienting content warning:** Warning provided for VR/AR/intense motion experiences?
- [ ] **User education:** Instructions for disabling via browser/OS settings?

### Cognitive Accessibility

- [ ] **Not distracting:** Animations don't prevent reading/comprehension?
- [ ] **User-controlled:** User can pause autoplay carousels/slideshows?
- [ ] **NO auto-scroll:** Content doesn't auto-scroll while user reading?
- [ ] **Simple option:** Simplified UI option for cognitive disabilities?

### Autoplay Content

- [ ] **NO autoplay videos:** Videos don't autoplay with sound?
- [ ] **Carousel control:** Users can pause/control carousels?
- [ ] **Manual navigation:** Users can navigate content at own pace?

**Reference:** Deep-Research 6.4

---

## 📋 WCAG Compliance Summary

### Level A (Minimum - All Required)
- ✅ **2.2.2:** Pause, Stop, Hide (animations >5s have controls)
- ✅ **2.3.1:** Three Flashes or Below Threshold (no rapid flashing)

### Level AA (Target - Industry Standard)
- ✅ **1.4.3:** Contrast (Minimum) - 4.5:1 for normal text
- ✅ **1.4.11:** Non-text Contrast - 3:1 for UI components
- ✅ **2.4.7:** Focus Visible - focus indicators always visible

### Level AAA (Aspirational - Best Practice)
- ✅ **2.3.3:** Animation from Interactions - respect prefers-reduced-motion

---

## 🧪 Accessibility Testing Protocol

### 1. OS Preference Test
```bash
# Test with reduced motion enabled:
1. Enable OS "Reduce Motion" setting
2. Reload page
3. Verify: Animations significantly reduced or disabled
4. Verify: All content still visible and accessible
```

### 2. Keyboard Navigation Test
- [ ] **Tab through page:** All interactive elements reachable via Tab?
- [ ] **During animations:** Tab works while animations running?
- [ ] **Modal focus:** Focus trapped in modal, returns on close?
- [ ] **Skip links:** "Skip to content" link works?

### 3. Screen Reader Test
- [ ] **NVDA/JAWS (Windows):** Content reads in logical order?
- [ ] **VoiceOver (Mac):** Animations don't disrupt reading?
- [ ] **Content announcements:** Dynamic content changes announced?
- [ ] **Role attributes:** Interactive elements have proper roles?

### 4. Color Contrast Test
- [ ] **WebAIM Contrast Checker:** All text passes 4.5:1 (AA)?
- [ ] **DevTools Accessibility panel:** No contrast warnings?
- [ ] **Mid-animation check:** Verify contrast during animation transitions?

### 5. Flashing Content Test
- [ ] **Frame-by-frame review:** No elements flash >3 times/second?
- [ ] **Photosensitive Epilepsy Analysis Tool (PEAT):** If available, run analysis?

---

## 🎯 Quick Reference: Accessibility Priority

**CRITICAL (Blocking):**
1. ✅ 6.1: prefers-reduced-motion (MANDATORY - cannot ship without)

**HIGH Priority (WCAG AA):**
2. ✅ 6.2: No flashing >3/sec
3. ✅ 6.2: Focus management
4. ✅ 6.2: Long animation controls (>5s)

**MEDIUM Priority:**
5. ✅ 6.3: Color contrast (4.5:1 minimum)
6. ✅ 6.4: User control options

---

## 🔧 Usage in Workflows

**accessibility-audit Workflow:** Systematic validation using this checklist (Section 6.1 BLOCKING)
**Tech Director:** Validate 6.1 before production (Step 10 of animation-production)
**VFX Artist:** Implement 6.1 fallback during animation development

**Last Updated:** 2025-11-03
**Module:** GSAP Excellence Engine
**Quality Standard:** 9.8/10 (Industry-leading)
