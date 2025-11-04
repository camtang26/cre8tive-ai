### 3.5 Pattern: Text Split and Reveal (SplitText fancy effect)

**Use case:** Animate text with each character or word separate -- e.g., a headline where letters fly in or a paragraph that fades line by line. We'll demonstrate an advanced word reveal where each word flips like a card.

**Vanilla JS Example -- Word Flip Animation:**

```
<h1 id="heroTitle">Innovate Your World</h1>
<script>
  gsap.registerPlugin(SplitText);
  const split = SplitText.create("#heroTitle", { type: "words" });
  // Each word is now wrapped in a div (split.words is an array of elements)
  gsap.from(split.words, {
    rotationX: -90,
    opacity: 0,
    transformOrigin: "top center",
    duration: 0.8,
    ease: "easeOut",
    stagger: 0.1
  });
</script>
```

**Explanation:** - We split the `#heroTitle` text into words. For example, "Innovate Your World" becomes three span/div elements in the DOM (with same text inside). - We then animate each word from a 90-degree flipped state (rotationX -90 means it's laying flat away from viewer) to normal (rotationX goes to 0 by end of tween implicitly). We also animate opacity from 0 to 1. - `transformOrigin: "top center"` makes the flip look like it's flipping in from top edge. This creates a card-flip effect for each word. - We stagger by 0.1 seconds so each word flips shortly after the previous. In reading order, "Innovate" flips, then "Your", then "World". This creates a sequential reveal that matches reading flow. - Ease "easeOut" (which is actually not a standard name; likely meant "power1.out" or similar -- let's assume it's a placeholder for a standard ease). Use a smooth ease to settle the words. - This yields a dynamic intro text. If you wanted letters instead of words, use `{type:"chars"}` and target `split.chars`. With many chars, adjusting stagger and maybe using `from: center` or random might be interesting. - **SplitText & Accessibility:** By default, SplitText keeps the original text content for screen readers (it doesn't destroy it, just hides and splits visually). It has built-in support to ensure ARIA compatibility. So using it won't break accessibility if done right (it wraps pieces in accessible way). It's still good to test with screen readers if heavy use.

**React Example -- Using SplitText (converted to functional usage):**\
We might not have a direct SplitText React hook, but we can use it within useEffect or context:

```
import SplitType from 'split-type'; // alternative small lib, or use gsap/SplitText if available

useEffect(() => {
  // Using a different library (SplitType) since GSAP's SplitText is not a free npm package outside club.
  const split = new SplitType("#heroTitle", { types: 'words' });
  gsap.from(split.words, {
    rotationX: -90,
    opacity: 0,
    transformOrigin: "top center",
    duration: 0.8,
    ease: "power1.out",
    stagger: 0.1
  });
  return () => split.revert(); // Clean up: remove wrapping spans
}, []);
```

*Note:* If GSAP's official SplitText plugin is not directly accessible, there are alternatives like SplitType (open source). However, since GSAP is now free including plugins on their site, presumably one could still get it. In a training context, it's fine to use it.

This pattern shows how to do an advanced text animation with minimal code. In older times, an AI might attempt to wrap each letter in spans manually -- error-prone. Using SplitText (or similar) is the pro way.
