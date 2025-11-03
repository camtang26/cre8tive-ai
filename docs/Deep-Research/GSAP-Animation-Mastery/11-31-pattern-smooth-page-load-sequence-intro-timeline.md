### 3.1 Pattern: Smooth Page Load Sequence (Intro Timeline)

**Use case:** Animate page elements (e.g., header, hero text, image) on page load in a orchestrated sequence. This creates a polished first impression rather than content just appearing.

**Vanilla JS Example -- Page Load Intro:**

```
<!-- HTML structure for context -->
<body>
  <header id="mainHeader">Welcome to Our Site</header>
  <p class="tagline">Experience the difference</p>
  <img id="heroImage" src="hero.jpg" alt="Hero Image" />
  ...
  <script>
    // GSAP timeline for intro animations
    window.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(Flip); // (if we needed, not in this example, but illustrate practice)
      const introTl = gsap.timeline();

      introTl.from("#mainHeader", { 
          y: -80, 
          opacity: 0, 
          duration: 0.8, 
          ease: "power2.out" 
        })
        .from(".tagline", { 
          opacity: 0, 
          y: 20, 
          duration: 0.6, 
          ease: "power2.out" 
        }, "-=0.4")  // start tagline 0.4s before header animation ends (overlap)
        .from("#heroImage", { 
          opacity: 0, 
          scale: 0.8, 
          duration: 1, 
          ease: "power2.out" 
        }, "<0.2");  // start heroImage 0.2s after tagline starts (slight overlap)

      // Optionally, you can add a call to complete or next animations:
      introTl.call(() => console.log("Intro animation complete"), null, "+=0.1");
    });
  </script>
</body>
```

**Explanation:** When DOMContentLoaded fires, we create a timeline: - Header fades in from above (y: -80) over 0.8s. - Tagline fades in from below (y: 20) starting 0.4s before header is done, giving a nice overlap[\[29\]](https://gsap.com/resources/mistakes/#:~:text=Second%2C%20keep%20in%20mind%20that,figure%20out%20what%20will%20happen). - Hero image fades in and scales up (from 0.8 to 1 scale) starting slightly after tagline starts. The overlapping (`"<0.2"`) means it doesn't wait fully -- this results in all three elements visible in close succession, creating a cohesive entrance. - We chose `power2.out` easing for a smooth deceleration on each. - This timeline is straightforward, but demonstrates replacing what some might do with CSS animations with a more controllable GSAP sequence. We could easily add more (e.g., `.staggerFrom` for multiple images if present, etc.). - Such an intro timeline could be conditionally skipped if users prefer reduced motion, but we handle that in Part 6. As is, this is a common pattern for page load.

**React (Next.js) Example -- Page Load Intro with Hooks:**\
Using the same effect in a React component (assuming it's a page or part of a page):

```
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(); // no specific plugin needed in this simple example

export default function HomeIntro() {
  const introRef = useRef();
  useGSAP(() => {
    const ctx = gsap.context((self) => {
      const header = self.selector("#mainHeader");
      const tagline = self.selector(".tagline");
      const image = self.selector("#heroImage");
      let tl = gsap.timeline();
      tl.from(header, { y: -80, opacity: 0, duration: 0.8, ease: "power2.out" })
        .from(tagline, { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(image, { opacity: 0, scale: 0.8, duration: 1, ease: "power2.out" }, "<0.2");
    }, introRef);
    return () => ctx.revert();
  }, []); // empty dependency – run once

  return (
    <div ref={introRef}>
      <h1 id="mainHeader">Welcome to Our Site</h1>
      <p className="tagline">Experience the difference</p>
      <img id="heroImage" src="hero.jpg" alt="Hero Image" />
    </div>
  );
}
```

**Explanation:** - We wrap the content in a `div ref={introRef}` and use `gsap.context` via the `useGSAP` hook. Within the context, `self.selector(...)` allows selecting elements within this component only, avoiding conflicts. - The GSAP timeline inside is identical in effect to the vanilla example. The output is the same smooth intro. - Using `useGSAP` ensures this runs at the appropriate time and cleans up on unmount (though an intro animation likely doesn't need cleanup, it's good practice). - In Next.js, this component being a client component ensures it only runs on client. Because we used useGSAP (which uses layoutEffect), the animation may even start slightly before paint, reducing FOUC if any initial styles are set. - This pattern can be reused for any component that needs an intro animation: just adjust selectors and animation parameters.

**Why this is world-class:** It's not just a fade-in -- it's a directed sequence. The overlaps give it rhythm (header starts, then tagline comes in shortly after, etc.). This feels more natural and engaging than everything appearing at once or one-after-one with equal delays. Such nuance is what Awwwards juries notice. *AI takeaway:* Always consider overlapping sequences to create flow.
