# Cinematic UI Sequences for Premium Product Demos

## Research Context

Building complex multi-phase auto-playing animation sequences (1000+ lines, 10+ phases like Skor animation). Prevents memory leaks, timing bugs, state management issues in cinematic product demos.

---

## 1. PATTERNS

### Pattern 1: Master Timeline with Phase Functions

```javascript
// Isolate each phase in a function
function emailEntryPhase() {
  const tl = gsap.timeline();

  tl.to(".email-input", { opacity: 1, duration: 0.5, ease: "sine.inOut" })
    .to(".cursor", { opacity: 0, repeat: 5, yoyo: true, duration: 0.5 })
    .to(".submit-btn", { scale: 1, duration: 0.3, ease: "back.out" });

  return tl; // Return for composition
}

// Master timeline composes all phases
const master = gsap.timeline({
  repeat: -1,
  repeatDelay: 2,
  repeatRefresh: true // CRITICAL: prevents state drift
});

master.add(emailEntryPhase())
      .add(verificationPhase(), "+=1") // 1s pause
      .add(codeEntryPhase(), "+=0.5");
```

**Why**: Modular, testable, easier debugging.

---

### Pattern 2: Infinite Loop with State Reset

```javascript
const tl = gsap.timeline({
  repeat: -1,
  repeatRefresh: true, // Recalc values
  onRepeat: () => {
    // Cleanup accumulated state
    document.querySelectorAll(".dynamic-element").forEach(el => el.remove());
  }
});

function loopResetPhase() {
  const tl = gsap.timeline();
  tl.set(".all-elements", {
    opacity: 0,
    x: 0,
    clearProps: "all" // Remove inline styles
  });
  return tl;
}
```

**Why**: Prevents memory accumulation in infinite repeats.

---

### Pattern 3: Phase Transition Overlap (Fade Out → Fade In)

```javascript
function transitionToNextPhase(currentCard, nextCard) {
  const tl = gsap.timeline();

  tl.to(currentCard, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "sine.in"
    })
    .to(nextCard, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "sine.out"
    }, "-=0.3"); // Overlap 60% for smooth blend

  return tl;
}
```

**Overlap sweet spot**: 30-60% of transition duration.

---

### Pattern 4: Typewriter Effect (Character-by-Character)

```javascript
function typewriterEffect(element, text, speed = 0.04) {
  const split = new SplitText(element, { type: "chars" });
  gsap.set(split.chars, { opacity: 0 });

  const tl = gsap.timeline();

  tl.to(split.chars, {
    opacity: 1,
    duration: 0.01,
    stagger: speed, // 40ms between chars
    ease: "none",
    onComplete: () => split.revert() // CRITICAL: Cleanup
  });

  return tl;
}

// Speeds: user=0.1s, AI=0.04s, fast=0.01s
```

---

### Pattern 5: Auto-Scroll Cinematics

```javascript
function autoScrollPhase() {
  const tl = gsap.timeline();

  tl.to(window, {
      duration: 1.5,
      scrollTo: { y: "#section", offsetY: 50 },
      ease: "sine.inOut" // Smooth deceleration
    })
    .to({}, { duration: 2 }); // Pause for reading

  return tl;
}
```

**Critical**: Remove CSS `scroll-behavior: smooth` (conflicts with ScrollToPlugin).

---

### Pattern 6: React Integration with Cleanup

```javascript
function SkorAnimation() {
  const container = useRef();
  const timelineRef = useRef();

  useGSAP(() => {
    const master = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    master.add(emailEntryPhase())
          .add(verificationPhase());

    timelineRef.current = master;
    // Auto-cleanup on unmount
  }, { scope: container });

  const { contextSafe } = useGSAP({ scope: container });

  const handlePause = contextSafe(() => {
    timelineRef.current?.pause();
  });

  return (
    <div ref={container}>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
```

---

## 2. GOTCHAS

### 1. Missing repeatRefresh in Infinite Loops

**Problem**: Dynamic values cached on first loop, don't update.

**Solution**: `repeatRefresh: true` on timeline.

**Severity**: CRITICAL for infinite loops.

---

### 2. React State Out of Sync with Timeline

**Problem**: State updates don't sync with GSAP progress.

**Solution**:
```javascript
const [currentPhase, setCurrentPhase] = useState("emailEntry");

master.add(emailEntryPhase())
      .call(() => setCurrentPhase("verification")) // Sync state
      .add(verificationPhase());
```

---

### 3. Memory Leaks from Detached DOM Nodes

**Problem**: Timelines hold DOM refs, prevent garbage collection.

**Solution**: useGSAP auto-cleanup (use it always in React).

**Debugging**: Chrome DevTools → Memory → Filter "Detached".

---

### 4. CSS scroll-behavior Conflicts

**Problem**: CSS smooth scroll conflicts with ScrollToPlugin.

**Solution**: Remove `scroll-behavior: smooth` from CSS.

---

### 5. SplitText Without Cleanup (Resize Issues)

**Problem**: SplitText spans break on resize.

**Solution**: Call `split.revert()` on resize.

```javascript
let split;
function setup() {
  if (split) split.revert();
  split = new SplitText(".text", { type: "chars" });
}

window.addEventListener("resize", setup);
```

---

## 3. ANTI-PATTERNS

### 1. Manual Delays Instead of Timeline Sequencing

**❌ WRONG**: Manual delays are fragile.

**✅ CORRECT**: Use timeline with position parameters.

---

### 2. Storing Timeline in React State

**❌ WRONG**: `useState(timeline)` prevents GC, triggers re-renders.

**✅ CORRECT**: `useRef` for timeline storage.

---

### 3. No Cleanup in Infinite Loops

**❌ WRONG**: Infinite loop without reset accumulates state.

**✅ CORRECT**: Add `repeatRefresh: true` + explicit reset phase.

---

## 4. ADVANCED TECHNIQUES

### Timeline Labels for Non-Linear Navigation

```javascript
const master = gsap.timeline({ paused: true });

master.add(emailEntryPhase())
      .addLabel("verification")
      .add(verificationPhase())
      .addLabel("analysis")
      .add(analysisPhase());

// Jump to phase
function skipToPhase(phaseName) {
  master.seek(phaseName);
  master.play();
}
```

**Use**: Debugging, user-driven navigation, scrubbing.

---

### Percentage-Based Position Parameters

```javascript
tl.to(".card1", { opacity: 0, duration: 2 })
  .to(".card2", { opacity: 1, duration: 1.5 }, "-=25%"); // Adaptive overlap
```

**Use**: Timing adapts automatically to duration changes.

---

## QUALITY CRITERIA (DoD)

- [ ] Master timeline uses phase functions (modular)
- [ ] repeatRefresh: true on infinite loops
- [ ] useGSAP() hook in React
- [ ] Phase transitions overlap 30-60%
- [ ] sine.inOut easing on fades
- [ ] ScrollToPlugin: CSS scroll-behavior removed
- [ ] SplitText: .revert() on resize
- [ ] Memory test: Heap snapshot after 10 loops (no detached nodes)
- [ ] FPS test: 60fps during transitions
- [ ] State sync: React matches timeline phase

---

**Research Sources**: GSAP docs, Timeline API, Position Parameters guide, React integration, ScrollToPlugin, SplitText, Community forums.
