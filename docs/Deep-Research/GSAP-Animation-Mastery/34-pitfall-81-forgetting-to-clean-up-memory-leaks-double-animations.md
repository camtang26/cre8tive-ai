### Pitfall 8.1: Forgetting to Clean Up (Memory Leaks & Double Animations)

**The Issue:** AI generates animations in React's useEffect but forgets cleanup. Or creates ScrollTriggers on every render. This leads to duplicate animations (especially in React Strict Mode where effect runs twice) or memory leaks when components unmount.

**Before (Wrong - no cleanup, causing duplicates):**

```
function Component() {
  useEffect(() => {
    gsap.to(".box", { x: 100 });
  }, []); 
  return <div className="box">Hi</div>;
}
```

In React 18 dev, this runs twice (Strict Mode). Two tweens will be created moving the same element, likely causing a jump or conflict[\[27\]](https://gsap.com/resources/frameworks/#:~:text=Proper%20animation%20cleanup%20is%20important,you%20don%27t%20revert%20things%20properly).

**After (Correct - using context or cleanup):**

```
function Component() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box", { x: 100 });
    });
    return () => ctx.revert();
  }, []);
  return <div className="box">Hi</div>;
}
```

Now: - We use useLayoutEffect (ensures it runs once in Strict Mode's double-invoke pattern because GSAP context's revert will cleanup before second call). - `ctx.revert()` on cleanup will kill the tween if it's still running and remove GSAP's inline styles (reverting .box to pre-animation state)[\[26\]](https://gsap.com/resources/React/#:~:text=%60useGSAP%28%29%60%20is%20a%20drop,and%20Context%20makes%20it%20simple). - No duplicates, no leaks. If the component unmounts mid-tween, it stops gracefully.

**AI reminder:** Always include cleanup in frameworks. For ScrollTrigger specifically, if not using context:

```
useEffect(() => {
  const trigger = ScrollTrigger.create({...});
  return () => { trigger.kill(); };
}, []);
```

Better, use context or matchMedia which auto-cleans up triggers in its scope.
