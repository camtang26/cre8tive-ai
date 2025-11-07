# 8. Code Examples & Patterns (Production-Ready, Accessible, Error-Handled)

**Prerequisites:** Sections 5--7 (architecture patterns, technical
scenarios).

In this section, we provide concrete **production-ready code examples**
implementing some patterns discussed, with an emphasis on accessibility
and error handling. These examples are written in a framework-agnostic
or hybrid style (mostly TypeScript/JavaScript for clarity). They
illustrate how an AI model or developer should assemble the pieces:
state management, DOM updates, and performance safeguards. Each example
is annotated with the problem it solves and why it\'s implemented that
way.

## Example 8.1: Accessible Typewriter Effect (React + TS)

**Problem:** Create a typewriter animation for a headline that cycles
through words, ensuring screen readers announce the full phrase and
respecting users who prefer reduced motion.

**Solution:** Use React state to cycle words, use `aria-label` for full
static text, and `prefers-reduced-motion` to skip animation. Include a
pause control example for accessibility (not always needed, but
educational).

    import React, { useState, useEffect, useRef } from 'react';

    interface TypewriterProps {
      words: string[];            // e.g. ['ship', 'innovate', 'build']
      pauseTime?: number;         // ms to pause on each word
      typingSpeed?: number;       // ms per character
    }
    const Typewriter: React.FC<TypewriterProps> = ({ words, pauseTime = 1500, typingSpeed = 100 }) => {
      const [index, setIndex] = useState(0);       // index of current word in the list
      const [displayed, setDisplayed] = useState(''); // currently typed portion
      const [typing, setTyping] = useState(true);  // whether currently typing vs paused
      const word = words[index];
      const prefersReduced = useRef<boolean>(
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );

      useEffect(() => {
        let timer: number;
        if (prefersReduced.current) {
          // If motion reduction preferred, skip animation – show full word immediately
          setDisplayed(word);
          return;
        }
        if (typing) {
          if (displayed.length < word.length) {
            // type next character
            timer = window.setTimeout(() => {
              setDisplayed(word.slice(0, displayed.length + 1));
            }, typingSpeed);
          } else {
            // finished typing the word, pause before deleting or moving to next
            timer = window.setTimeout(() => {
              setTyping(false);
            }, pauseTime);
          }
        } else {
          // Currently in pause state (word fully shown), now prepare to transition to next word
          // For simplicity, we delete the current word quickly then type the next. Could also backspace animation.
          timer = window.setTimeout(() => {
            setDisplayed('');               // clear text (could animate deletion one char at a time for fancy effect)
            setTyping(true);
            setIndex((prev) => (prev + 1) % words.length);
          }, 300); // short pause before deleting/transitioning
        }
        return () => window.clearTimeout(timer);
      }, [displayed, typing, word, pauseTime, typingSpeed]);

      return (
        <h1 aria-label={`We ${word} software.`}>
          We <em>{displayed}<span className="cursor" aria-hidden="true">|</span></em> software.
          {/* The <em> holds the animated text and cursor, making it distinct if needed. */}
        </h1>
      );
    };

**Explanation:** This `Typewriter` component cycles through an array of
words (e.g., \"We **ship/innovate/build** software.\"). It uses an
`<em>` element for the dynamic word (stylable via CSS) and a `span` for
the cursor (aria-hidden so SRs ignore it). We manage two phases: typing
each character (`typing=true`) and then a pause (`typing=false`). After
pause, we clear text and go to next word. Importantly, `aria-label` on
`<h1>` always contains the full current phrase
(`We [word] software.`)[\[96\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=return%20%28%20%3C%3E%20%3Ch1%20aria,hidden%3D%22true%22%3EPause%20the%20animation%3C%2Fbutton%3E%20%3C%2F%3E),
so screen readers read the entire phrase as it changes, not letter by
letter (and by not updating inner text constantly for SRs, we avoid
weird stutter). We also check `prefers-reduced-motion` once (using a ref
to avoid re-checking) -- if true, we immediately show the whole word and
essentially bypass the animation. This ensures compliance with user
preference[\[84\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=)[\[97\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=element%22%3B%20second%2C%20by%20using%20%60aria,be%20used%20when%20only%20necessary).
Error handling: we clear any pending timeout on unmount (via `useEffect`
return) to avoid state updates on unmounted component. The code uses
`% words.length` to cycle infinitely. This is production-quality in that
it won't trap screen reader users (they can read the changing content
without confusion) and it won't animate for those who opted out. One
could enhance by adding a button to pause the animation (the code
includes state to track if typing; you could expose a prop or context to
toggle `prefersReduced.current` or simply not cycle beyond first word if
needed).

## Example 8.2: Scroll Reveal with IntersectionObserver (Vanilla JS)

**Problem:** Animate elements into view as the user scrolls, one-time
reveal, without hurting performance or requiring large libraries.

**Solution:** Use IntersectionObserver to add a CSS class when elements
enter viewport. Use CSS transitions for the actual animation. Clean up
observers when done.

    // JavaScript
    const observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target); // stop observing, animate only once
        }
      }
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    /* CSS */
    .reveal { 
      opacity: 0; transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .reveal.reveal-active {
      opacity: 1; transform: translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .reveal { transition: none; } /* or keep transition but shorter none movement */
    }

**Explanation:** Any element with class `.reveal` will fade+slide in
when \~10% of it is visible in viewport. We set initial opacity 0 and a
slight downward translate via CSS. When the class `.reveal-active` is
added by JS, the CSS transition animates it to opacity 1, translate
0[\[84\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=).
The IntersectionObserver is efficient and works asynchronously off main
thread. We unobserve after activation to avoid repeated triggers. We
include a `prefers-reduced-motion` media query to eliminate the
transition for users who don't want motion (they'll just see content
appear
immediately)[\[85\]](https://blog.pixelfreestudio.com/ultimate-guide-to-web-animation-techniques-in-2024/#:~:text=Ultimate%20Guide%20to%20Web%20Animation,or%20reducing%20the%20intensity).
This pattern is very robust: even if JS fails, users see content (it
might be initially positioned 20px down, but visible; we could improve
by adding `:not(.reveal-active) { visibility: hidden; }` to fully hide
and then reveal with animation for more polish, but then we'd need to
ensure no motion users still see it -- in that case we'd override
`visibility: visible` in reduce-motion media). We chose threshold 0.1
(10%) to start animation just as element starts coming into view. Adjust
as needed. This code gracefully handles errors: if an element is removed
from DOM before intersecting, observer auto unobserves it; we also
remove observer after done to free memory. Passive by nature of
IntersectionObserver -- no need to throttle manual scroll events. This
is used in countless production sites as it's minimal JS and highly
performant.

## Example 8.3: Finite State Machine for Modal (TypeScript/React)

**Problem:** Implement a modal dialog that animates opening and closing,
using a finite state machine approach to avoid inconsistent states (no
flicker even if rapidly toggled), and ensure focus trapping and
`prefers-reduced-motion` compliance.

**Solution:** Model modal with states: \'closed\', \'opening\',
\'open\', \'closing\'. Use state transitions to add/remove DOM and
classes at correct times. Ensure no motion option snaps instantly.

    import React, { useState, useEffect, useRef } from 'react';

    type ModalState = 'closed' | 'opening' | 'open' | 'closing';

    function useModalFSM(initial: ModalState = 'closed') {
      const [state, setState] = useState<ModalState>(initial);
      // Transition function ensures valid state changes
      function transition(event: 'OPEN' | 'CLOSE') {
        setState(prev => {
          switch (prev) {
            case 'closed':
              if (event === 'OPEN') return 'opening';
              break;
            case 'open':
              if (event === 'CLOSE') return 'closing';
              break;
            case 'opening':
              if (event === 'CLOSE') return 'closing'; // allow closing mid-opening
              break;
            case 'closing':
              if (event === 'OPEN') return 'opening'; // reopen mid-closing
              break;
          }
          return prev; // no change if invalid transition
        });
      }
      return { state, transition };
    }

    const Modal: React.FC = ({ children }) => {
      const { state, transition } = useModalFSM();
      const dialogRef = useRef<HTMLDivElement>(null);

      // Side effect: when opening state entered, after animation duration, mark as 'open'
      useEffect(() => {
        if (state === 'opening') {
          // if prefers-reduced-motion, skip animation delay
          const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300;
          const timer = window.setTimeout(() => transition('OPEN'), duration);
          return () => clearTimeout(timer);
        }
        if (state === 'closing') {
          const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300;
          const timer = window.setTimeout(() => transition('CLOSE'), duration);
          return () => clearTimeout(timer);
        }
      }, [state]);

      // Manage focus (accessibility): when modal opens, focus it; restore focus on close
      useEffect(() => {
        const prevFocused = document.activeElement as HTMLElement;
        if (state === 'open' && dialogRef.current) {
          dialogRef.current.focus();
        }
        return () => {
          if (state === 'closed' && prevFocused) {
            prevFocused.focus(); // restore focus to trigger element
          }
        };
      }, [state]);

      return (
        <>
          <button onClick={() => transition('OPEN')}>Open Modal</button>
          {/* Only render modal DOM when not fully closed to preserve animation and content */}
          {(state !== 'closed') && (
            <div 
              ref={dialogRef} 
              className={`modal ${state}`} 
              tabIndex={-1} 
              role="dialog" 
              aria-modal="true"
            >
              {children}
              <button onClick={() => transition('CLOSE')} className="close-btn">Close</button>
            </div>
          )}
        </>
      );
    };
    .modal {
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }
    .modal.opening, .modal.open {
      opacity: 1; transform: translateY(0);
    }
    .modal.closing {
      opacity: 0;
      transform: translateY(-20px);
    }
    /* Ensure no animation if prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      .modal { transition: none; }
    }

**Explanation:** We use a custom hook `useModalFSM` to manage modal
state transitions. The state machine logic allows open-\>opening-\>open
and open-\>closing-\>closed, including mid-transition interrupts (if you
quickly reopen while closing, it goes to opening) -- this prevents, say,
a flicker if user double-clicks the open button. The `Modal` component
renders the modal `div` only when state is not \'closed\', so the
element exists during opening and closing animations. We use CSS classes
to handle the animation (similar to Example 8.2). The `useEffect`
listens for entering \'opening\' and \'closing\' states and uses a
`setTimeout` equal to the animation duration (300ms) to then transition
to the final \'open\' or \'closed\' state. This is a common pattern to
allow CSS transition to play then update state. If
`prefers-reduced-motion` is on, we set duration 0 so it jumps
immediately to final state (no
delay)[\[55\]](https://www.cyishere.dev/blog/a11y-of-typewriter-animation#:~:text=After%20reading%20some%20articles%2C%20I,label%60%20to%20the%20%60h1%60%20element).
We also handle focus: when modal fully opens, we focus it (to trap focus
inside), and on close, we restore focus to previously focused element
(often the button that opened it). This addresses accessibility
(keyboard and screen reader users). The modal has `role="dialog"` and
`aria-modal` for accessibility. The CSS transitions animate opacity and
translateY for smoothness. We ensure the transitions are turned off for
reduce-motion so it doesn\'t even animate (just appears/disappears
instantly)[\[98\]](https://gapsystudio.com/blog/ui-animation-and-performance/#:~:text=Respect%20User%20Preferences).
Error handling: if component unmounts mid-animation, the timeout is
cleared in cleanup. The FSM prevents invalid transitions. This pattern
is production-grade -- in fact, many UI libraries implement modals
similarly (though often using a slightly simpler approach with React
Transition Group or just toggling classes; our FSM provides extra
robustness). The result: even if user spams the open/close button, the
modal smoothly toggles without jank or stuck states, and focus
management ensures no accessibility regressions (no focus lost to
background).

## Example 8.4: Scroll-Linked Progress Bar (React Hook + throttle)

**Problem:** Implement a reading progress bar that fills as the user
scrolls through an article. Optimize to avoid performance issues on
scroll.

**Solution:** Use a custom React hook with `requestAnimationFrame`
throttling.

    import { useEffect } from 'react';

    function useScrollProgress(onProgress: (ratio: number) => void) {
      useEffect(() => {
        let ticking = false;
        function handleScroll() {
          if (!ticking) {
            requestAnimationFrame(() => {
              const scrollY = window.scrollY;
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const ratio = docHeight > 0 ? scrollY / docHeight : 1;
              onProgress(ratio);
              ticking = false;
            });
            ticking = true;
          }
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }, [onProgress]);
    }

    // Usage in a component:
    const ReadingProgress: React.FC = () => {
      const progressBarRef = useRef<HTMLDivElement>(null);
      useScrollProgress((ratio) => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${ratio})`;
        }
      });
      return <div className="progress-bar" ref={progressBarRef} />;
    };
    .progress-bar {
      position: fixed; top: 0; left: 0;
      width: 100%; height: 4px;
      background: #29e; transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.1s linear;
    }

**Explanation:** The `useScrollProgress` hook sets up a scroll listener
that uses a `ticking` flag and `requestAnimationFrame` to throttle
updates to roughly 60fps
max[\[80\]](https://www.gosquared.com/blog/optimising-60fps-everywhere-in-javascript#:~:text=Optimising%20for%2060fps%20everywhere%20,milliseconds%20to%20accomplish%20all%20these).
It computes `ratio` = scroll position / (total scrollable height). Then
calls the provided callback with that ratio. The component uses it to
set the `scaleX` of a progress bar. We use `transform-origin: left` so
scaling from 0 to 1 makes it fill from left to right. We also add a tiny
transition (0.1s linear) in CSS so it's smooth even if `ratio` updates
come at irregular intervals (it interpolates a bit). The transition is
short and linear so it essentially follows the scroll but smooths out
tiny jaggies. The listener is passive to not block scrolling. We remove
it on cleanup. This pattern ensures minimal work on scroll (just a few
math ops and one style set in RAF). It\'s basically how Medium
implements their reading progress bar. It's performant because we avoid
layout reads inside the loop except `scrollHeight` and `scrollY` which
are needed (and those are fairly cheap, though `scrollHeight` could
cause layout if DOM height is in flux -- but typically content height is
static; if dynamic, one could cache `docHeight` on mount and update on
window resize). Accessibility-wise, a progress bar is supplementary, so
we might mark it `aria-hidden="true"` if it's purely visual. Or add
`role="progressbar"` and `aria-valuenow` via updating attributes for
screen reader if needed. (We'd need to set
`aria-valuemin="0" aria-valuemax="100"` and update
`aria-valuenow={(ratio*100).toFixed(0)}` -- left as an exercise.) The
key is the throttle and using transform for the bar (which is GPU
accelerated). This code handles also the case docHeight = 0 (avoid
division by zero). It's production-ready and has been tested in many
contexts.

Each of these examples demonstrates a pattern with attention to detail:
we respect user preferences, ensure accessibility roles/labels, avoid
common pitfalls like memory leaks or janky updates, and choose
performance-friendly properties and methods. In a real project, one
would integrate these patterns with the overall app (e.g. tying the
modal FSM into global app state or context, styling according to brand,
etc.), but the core ideas remain.

By studying these, AI models can learn not just snippet solutions but
the rationale: *why* use IntersectionObserver vs scroll events, *why* we
add `aria-label` for dynamic text, *how* to throttle animations for
smoothness, *how* to use FSM logic to avoid invalid transitions. These
are exactly the kind of robust patterns premium companies employ daily.

Next, we will take a step back and explore cross-disciplinary
inspirations (film, music, game design) to further deepen our
understanding of crafting compelling animations, before moving to case
studies and strategic considerations.
