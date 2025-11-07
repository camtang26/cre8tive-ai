        **6.1: prefers-reduced-motion (CRITICAL - BLOCKING)**
        **WCAG:** 2.3.3 Animation from Interactions (Level AAA)
        **Severity:** CANNOT SHIP WITHOUT THIS

        **Validation:**
        - [ ] Detecting preference: `window.matchMedia('(prefers-reduced-motion: reduce)')`?
        - [ ] Using `gsap.matchMedia()` for conditional animations?
        - [ ] Fallback provided when reduced motion enabled?

        **Implementation Options (Choose ONE):**

        **Option 1: Disable Animations Completely (Most Accessible)**
        ```javascript
        // Check preference on page load
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          // Disable ALL ScrollTriggers
          ScrollTrigger.getAll().forEach(trigger => trigger.disable());

          // Fast-forward all animations instantly
          gsap.globalTimeline.timeScale(100);  // Complete all running animations immediately

          // Show all elements in final state (CSS fallback)
          document.body.classList.add('reduced-motion');
        }
        ```
        ```css
        /* CSS fallback - show everything instantly */
        body.reduced-motion * {
          animation: none !important;
          transition: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        ```
        **When to use:** Maximum accessibility, users with severe motion sensitivity

        **Option 2: Simplify Animations (Moderate)**
        ```javascript
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          // Full animations - parallax, large movements, rotations
          gsap.to(".hero", {
            y: -100,
            rotation: 5,
            scale: 1.2,
            duration: 1,
            ease: "power2.out"
          });

          ScrollTrigger.create({
            trigger: ".section",
            start: "top center",
            scrub: 1,  // Parallax effect
            pin: true
          });
        });

        mm.add("(prefers-reduced-motion: reduce)", () => {
          // Simplified - ONLY simple fades, NO movement, NO parallax
          gsap.to(".hero", {
            opacity: 1,  // Just fade in
            duration: 0.2,  // Very short duration
            ease: "none"  // No easing (linear)
          });

          // NO ScrollTrigger scrub/pin - just instant reveal
          ScrollTrigger.create({
            trigger: ".section",
            start: "top bottom",
            once: true,
            onEnter: () => gsap.set(".section", { opacity: 1 })
          });
        });
        ```
        **When to use:** Balance between motion and accessibility, users prefer less motion but some animation OK

        **Option 3: Separate Animations (Recommended)**
        ```javascript
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          // Full animations
          gsap.to(".hero", { y: -100, opacity: 1, duration: 1, ease: "power2.out" });
        });

        mm.add("(prefers-reduced-motion: reduce)", () => {
          // Instant reveal (no animation)
          gsap.set(".hero", { y: 0, opacity: 1 });
        });
        ```
        **When to use:** Most projects, clear separation of full vs reduced motion

        **Testing:**
        1. Enable OS "Reduce Motion" setting
        2. Reload page
        3. Verify: Animations significantly reduced or disabled
        4. Verify: All content still accessible

        **BLOCKING:** If prefers-reduced-motion not respected → FAIL production

        ---

        **6.2: Other Accessibility (HIGH Priority)**
        **WCAG:** 2.3.1 Three Flashes (Level A), 2.2.2 Pause/Stop (Level A)

        **Flashing Content:**
        - [ ] NO flashing >3 times per second?
        - [ ] NO high-intensity red flashes?

        **Focus Management:**
        - [ ] Modal animations move focus to modal?
        - [ ] Focus returned to trigger on close?
        - [ ] Background `aria-hidden="true"` when modal open?
        - [ ] Tab navigation works during animations?

        **Screen Readers:**
        - [ ] SplitText: Container has `aria-label` with full text?
        - [ ] Invisible elements: `aria-hidden="true"` when opacity: 0?
        - [ ] Revealed content: `aria-hidden` removed when shown?

        **Long Animations (>5 seconds):**
        - [ ] Pause button provided for decorative long animations?
        - [ ] Keyboard pause (spacebar)?

        **Detailed Keyboard Navigation Test Protocol:**

        **Step 1: Tab Through Page**
        ```
        1. Reload page
        2. Press Tab key repeatedly
        3. Verify: Focus moves through all interactive elements?
        4. Verify: Focus indicator VISIBLE at all times?
        5. Verify: Animations don't block Tab focus?
        6. ✅ PASS: All elements reachable, focus always visible
        7. ❌ FAIL: Elements unreachable or focus hidden → Fix z-index/focus styles
        ```

        **Step 2: Test During Animations**
        ```
        1. Trigger animation (e.g., modal opening)
        2. Press Tab WHILE animation running
        3. Verify: Tab still works during animation?
        4. Verify: Focus doesn't jump unexpectedly?
        5. Verify: No trapped focus (can Tab out)?
        6. ✅ PASS: Keyboard navigation unaffected by animations
        ```

        **Step 3: Modal/Overlay Focus Management**
        ```
        1. Open modal with animation
        2. Verify: Focus moves INTO modal automatically?
        3. Press Tab: Verify focus stays within modal (trapped)?
        4. Press Escape: Modal closes?
        5. Verify: Focus returns to trigger button?
        6. ✅ PASS: Focus managed properly (in → trapped → out)
        7. ❌ FAIL: Focus lost or not trapped → Add focus management code
        ```

        **Focus Management Code Example:**
        ```javascript
        // ✅ CORRECT - Modal focus management
        const openModal = () => {
          gsap.to('.modal', {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            onComplete: () => {
              // Move focus INTO modal after animation
              document.querySelector('.modal-close-btn').focus();
            }
          });

          // Add background trap
          document.querySelector('.page-content').setAttribute('aria-hidden', 'true');
        };

        const closeModal = () => {
          gsap.to('.modal', {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            onComplete: () => {
              // Return focus to trigger button
              document.querySelector('.open-modal-btn').focus();
              document.querySelector('.page-content').removeAttribute('aria-hidden');
            }
          });
        };
        ```

        **Detailed Screen Reader Test Protocol:**

        **Step 1: Enable Screen Reader**
        ```
        - Windows: NVDA (free) or JAWS
        - Mac: VoiceOver (Cmd + F5)
        - ChromeVox (Chrome extension)
        ```

        **Step 2: Page Content Readability**
        ```
        1. Activate screen reader
        2. Navigate page with Arrow keys (or H key for headings)
        3. Verify: ALL text content read aloud?
        4. Verify: SplitText animations don't break reading?
        5. Verify: Hidden elements (opacity: 0) NOT announced?
        6. ✅ PASS: All visible content readable, hidden content ignored
        ```

        **Step 3: SplitText Accessibility Check**
        ```
        1. Find text animated with SplitText
        2. Check DOM: Container has aria-label with full text?
        3. Check DOM: Split pieces have aria-hidden="true"?
        4. Screen reader test: Does it read FULL text (not split pieces)?
        5. ✅ PASS: Full text announced, split pieces ignored
        6. ❌ FAIL: Reads split pieces ("H" "e" "l" "l" "o") → Add aria-label
        ```

        **SplitText Accessibility Code:**
        ```javascript
        // ✅ CORRECT - Screen reader friendly SplitText
        const heading = document.querySelector('.animated-heading');
        const originalText = heading.textContent;  // Save original

        const split = new SplitText(heading, { type: 'chars' });

        // Add aria-label with full text
        heading.setAttribute('aria-label', originalText);

        // Hide individual chars from screen readers
        split.chars.forEach(char => {
          char.setAttribute('aria-hidden', 'true');
        });

        // Animate
        gsap.from(split.chars, { opacity: 0, stagger: 0.05 });
        ```

        **Step 4: State Change Announcements**
        ```
        1. Trigger interactive animation (e.g., accordion expand)
        2. Verify: State change announced to screen reader?
        3. Check: Using role="alert" or aria-live="polite" for updates?
        4. ✅ PASS: State changes announced clearly
        5. ❌ FAIL: Silent state changes → Add ARIA announcements
        ```

        **Reference:** Deep-Research 6.2, accessibility.md checklist

        ---

        **6.3: Color Contrast (MEDIUM Priority)**
        **WCAG:** 1.4.3 Contrast (Level AA) - 4.5:1 minimum

        **Validation:**
        - [ ] Text contrast ≥4.5:1 during ALL animation states?
        - [ ] NO low-contrast frames during transitions?
        - [ ] Use WebAIM Contrast Checker or DevTools Accessibility panel

        **Detailed Color Contrast Test Protocol:**

        **Step 1: Use DevTools Accessibility Panel**
        ```
        1. Open Chrome DevTools → Elements tab
        2. Select text element
        3. Click "Accessibility" sub-tab (right panel)
        4. Look for "Contrast" section
        5. Check ratio: Must be ≥4.5:1 for normal text (≥3:1 for large text)
        6. ✅ PASS: Green checkmark shown
        7. ❌ FAIL: Orange warning → Fix color combination
        ```

        **Step 2: Test Mid-Animation States**
        ```
        1. Trigger color/opacity animation
        2. PAUSE animation mid-transition (DevTools → Performance → Screenshot)
        3. Select text element in mid-animation
        4. Check Accessibility panel contrast ratio
        5. Verify: ≥4.5:1 throughout animation?
        6. ✅ PASS: Contrast maintained at all keyframes
        7. ❌ FAIL: Brief low-contrast frames → Redesign color transition
        ```

        **Step 3: Use WebAIM Contrast Checker (Manual)**
        ```
        1. Go to: https://webaim.org/resources/contrastchecker/
        2. Input foreground color (text color)
        3. Input background color
        4. Review results:
           - Normal text: Needs 4.5:1 (WCAG AA)
           - Large text (18pt+): Needs 3:1 (WCAG AA)
        5. Adjust colors if needed
        ```

        **Step 4: Test Hover/Interactive States**
        ```
        1. Hover over interactive element
        2. Verify: Contrast maintained during hover animation?
        3. Check focus indicators: Visible with ≥3:1 contrast?
        4. ✅ PASS: All interactive states pass contrast
        5. ❌ FAIL: Focus indicator too faint → Increase contrast
        ```

        **Common Contrast Failures in Animations:**
        - **Fading text over changing background:** Mid-fade hits gray-on-gray
        - **Color transitions:** Animating from dark blue to light blue passes through low-contrast mid-tones
        - **Opacity animations:** Text fading from 1 to 0.3 briefly hits 0.6 opacity (too faint)

        **Solutions:**
        - **Use instant color changes:** Animate position/scale, NOT color
        - **Test keyframes:** Check contrast at 0%, 25%, 50%, 75%, 100%
        - **Avoid mid-fade interactions:** Don't allow clicks during opacity transitions

        **Tools:**
        - Chrome DevTools Accessibility panel (built-in)
        - WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)
        - Colour Contrast Analyser (desktop app, free)
        - axe DevTools (Chrome extension)

        **Reference:** Deep-Research 6.3, accessibility.md checklist

        ---

        **6.4: User Control (MEDIUM Priority)**
        **WCAG:** 2.2.2 Pause, Stop, Hide (Level A)

        **In-Site Toggle:**
        - [ ] "Enable/Disable Animations" setting in UI?
        - [ ] Choice saved to localStorage?
        - [ ] Works independently of OS setting?

        **Implementation:**
        ```javascript
        const osReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const userDisabled = localStorage.getItem('animationsDisabled') === 'true';
        const shouldAnimate = !osReduced && !userDisabled;
        ```

        **Documentation:**
        - [ ] Help section mentions animations and how to disable?
        - [ ] Accessibility statement documents animation features?
      </accessibility_standards_6_1_to_6_4>
