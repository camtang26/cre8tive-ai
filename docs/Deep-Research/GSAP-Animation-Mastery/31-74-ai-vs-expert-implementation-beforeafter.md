### 7.4 AI vs Expert Implementation (Before/After)

Let's compare a hypothetical scenario to illustrate AI improvement: - **Typical AI initial attempt:** When asked to animate a gallery on scroll, an AI might list out 10 `gsap.to` calls with incremental delays, maybe not using ScrollTrigger properly, or forgetting to kill triggers. The result might work basically, but be rigid or have bugs (like animations triggering too early or not resetting). - **Expert approach:** Encapsulate it in a ScrollTrigger, use `.from` with staggers for brevity, ensure `once:true` if only animate once, or `toggleActions` if needed. Possibly use `.batch()` for performance if many items. And definitely include `ScrollTrigger.refresh()` after images load to correct trigger points. - **Before code (AI naive):**

```
gsap.to(".item1", {opacity:1, y:0, delay:0.1});
gsap.to(".item2", {opacity:1, y:0, delay:0.3});
// ... etc for item3,... item6
```

(No ScrollTrigger, so these run on load, maybe intended to be on scroll but AI forgot.) - **After code (Expert):**

```
gsap.from(".gallery-item", {
  opacity: 0, y: 100, stagger: 0.2,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
```

This is shorter, scroll-activated, and reversible on scroll-up if wanted. It uses best practices (from vs to for easier reading, and attaches to scroll). - Also Expert would ensure `.gallery-item` in CSS has opacity:0 initial if wanting to avoid flashes (or use once).

**Outcome:** The expert version is robust and easier to maintain, whereas the AI naive one might have issues (like firing too early or not at all on scroll, or playing only once without reset).
