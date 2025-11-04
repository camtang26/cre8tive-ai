# Implementation Scenario Template (Type 2 Skills)

Use this template to create implementation test scenarios for Type 2 (Domain Expertise) skills.

## Scenario Structure

Each implementation scenario should represent a real-world complex use case from the domain with both objective and subjective success criteria.

### Template

```markdown
## Scenario [N]: [Scenario Name]

### Use Case Description
[What needs to be built?]
[Real-world context where this would be used]
[Why this use case matters]

### Requirements
**Functional:**
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

**Technical:**
- [Technology constraints]
- [Performance requirements]
- [Compatibility requirements]

### Objective Success Criteria

**Performance Metrics:**
- [Metric 1]: [Target value] (measured via [tool])
- [Metric 2]: [Target value] (measured via [tool])

**Code Pattern Requirements:**
- [Pattern 1 must be present] (verified via code analysis)
- [API usage requirement] (specific methods/approaches)
- [Structure requirement] (e.g., cleanup functions, error handling)

**Automated Validation:**
- [What Chrome DevTools MCP should check]
- [What code analysis should verify]
- [What can be objectively measured]

### Subjective Quality Criteria

**How it should LOOK:**
- [Visual quality aspect 1]
- [Visual quality aspect 2]

**How it should FEEL:**
- [Interaction quality 1]
- [Behavior quality 1]
- [User experience quality 1]

**How it should PERFORM:**
- [Subjective performance feel]
- [Responsiveness]
- [Smoothness]

### Expected Artifacts
- [Code files to be created]
- [Configuration files]
- [Any supporting materials]

### Baseline Expectation WITHOUT Skill
[What failures/issues do you anticipate?]
[What knowledge gaps might emerge?]
[What will likely be done incorrectly?]
```

## Example Scenarios

### Example 1: GSAP Scroll-Triggered Parallax

```markdown
## Scenario 1: Scroll-Triggered Parallax Animation

### Use Case Description
Create a multi-layer parallax effect on the homepage hero section. Three layers (background, midground, foreground) move at different speeds as user scrolls. This is a common premium web design pattern seen on high-end marketing sites.

### Requirements
**Functional:**
- Three distinct layers with different scroll speeds
- Background moves slowest (0.3x scroll speed)
- Midground moves medium (0.6x scroll speed)
- Foreground moves normal (1.0x scroll speed)
- Smooth continuous motion (no jank)
- Starts at top of viewport
- Ends when section scrolls out of view

**Technical:**
- React component implementation
- GSAP with ScrollTrigger
- Must maintain 60fps during scroll
- Proper cleanup on component unmount
- Responsive (works on mobile, tablet, desktop)
- Respects prefers-reduced-motion

### Objective Success Criteria

**Performance Metrics:**
- FPS: ≥60fps during active scrolling (Chrome DevTools Performance)
- No console errors or warnings
- Memory stable (no leaks on mount/unmount cycles)

**Code Pattern Requirements:**
- Uses `ScrollTrigger.create()` not `ScrollTrigger()` shorthand
- Includes `.kill()` in cleanup function/useEffect return
- Uses `will-change: transform` on animated elements
- Uses transforms (translateY) not top/position changes
- Scrub value present for scroll-linked animation

**Automated Validation:**
- Chrome DevTools: Record performance, verify FPS ≥60
- Code analysis: `grep -r "ScrollTrigger.create"` returns matches
- Code analysis: `grep -r ".kill()"` in cleanup
- Code analysis: Check `will-change: transform` in styles

### Subjective Quality Criteria

**How it should LOOK:**
- Natural depth perception (background moves noticeably slower)
- Smooth motion (no visible stuttering or jumping)
- Layers remain properly aligned (no gaps or overlaps)

**How it should FEEL:**
- Smooth and intentional (not random or chaotic)
- Natural easing (not linear/robotic)
- Responsive to scroll (immediate, not delayed)
- Polished (premium feel, not amateur)

**How it should PERFORM:**
- Feels smooth during scroll (user can't tell it's 60fps, just feels good)
- No lag or delay
- Responsive on all viewport sizes

### Expected Artifacts
- `ParallaxHero.tsx` - React component
- `ParallaxHero.module.css` - Styles with will-change
- Usage example in parent component

### Baseline Expectation WITHOUT Skill
**Anticipated failures:**
- Might use wrong ScrollTrigger syntax
- Likely missing .kill() cleanup (memory leaks)
- Probably animating position/top instead of transform (poor performance)
- May not include will-change (performance issues)
- Easing might be linear (feels robotic)
- May not respect prefers-reduced-motion

**Knowledge gaps:**
- Proper ScrollTrigger API usage
- Performance optimization patterns
- Cleanup requirements
```

### Example 2: Advanced State Machine Implementation

```markdown
## Scenario 2: Multi-Step Form with XState

### Use Case Description
Create a complex multi-step registration form with validation, async API calls, and error handling using XState for state management. Form has 4 steps with conditional branching based on user type.

### Requirements
**Functional:**
- 4 steps: Account Type → Personal Info → Business Info (if business) → Review
- Client-side validation each step
- Async email validation via API
- Can go back to previous steps
- Maintains form data throughout
- Error states for API failures

**Technical:**
- React with XState v5
- Type-safe state machine definition
- Proper TypeScript types
- Error boundary for failures
- Loading states during async operations

### Objective Success Criteria

**Performance Metrics:**
- State transitions < 50ms
- API calls properly debounced (500ms)
- No unnecessary re-renders

**Code Pattern Requirements:**
- XState machine uses `setup()` with proper types
- States defined with entry/exit actions
- Guards used for conditional transitions
- Actors for async operations
- Context properly typed

**Automated Validation:**
- TypeScript compiles without `any` types
- Machine visualizer generates valid graph
- All states reachable in machine
- No infinite loops possible

### Subjective Quality Criteria

**How it should LOOK:**
- Clear visual feedback for each state
- Loading indicators during async
- Error messages clear and helpful
- Progress indicator shows current step

**How it should FEEL:**
- Immediate feedback (no lag)
- Smooth transitions between steps
- Natural flow (user knows what to do next)
- Forgiving (can go back, data preserved)

**How it should PERFORM:**
- Instant state updates (feels snappy)
- API calls don't block UI
- Handles errors gracefully

### Expected Artifacts
- `registrationMachine.ts` - XState machine definition
- `RegistrationForm.tsx` - React component using machine
- `types.ts` - TypeScript types
- `validators.ts` - Validation functions

### Baseline Expectation WITHOUT Skill
**Anticipated failures:**
- Might use XState v4 patterns (outdated)
- Probably missing proper TypeScript types
- Likely incorrect actor setup for async
- May not handle all edge cases (back navigation, errors)
- Guards might be implemented incorrectly

**Knowledge gaps:**
- XState v5 setup() API
- Proper actor patterns
- Type-safe machine definition
- Error state handling
```

## Creating Effective Implementation Scenarios

### 1. Real-World Complexity
Don't create toy examples - use scenarios that:
- Represent actual use cases
- Have meaningful complexity
- Include edge cases
- Require domain expertise

### 2. Balance Objective and Subjective
**Objective criteria** (can measure):
- Performance metrics
- Code patterns
- API usage
- Structure

**Subjective criteria** (user validates):
- Look and feel
- Quality perception
- User experience

### 3. Specific Success Criteria
Avoid vague criteria like "works well" - instead:
- "Maintains ≥60fps" (specific)
- "Uses ScrollTrigger.create()" (specific)
- "Feels smooth and intentional" (specific subjective)

### 4. Realistic Baseline Expectations
Based on your experience, predict:
- What will go wrong
- What knowledge is missing
- What patterns will be used incorrectly

### 5. Validation Tools
Specify HOW to validate:
- Chrome DevTools MCP (performance, console)
- Code analysis (grep, AST)
- User testing (subjective)

## Implementation Scenario Checklist

When creating scenarios, ensure:
- [ ] Represents real-world complex use case
- [ ] Has clear functional and technical requirements
- [ ] Includes objective success criteria (measurable)
- [ ] Includes subjective quality criteria (user can assess)
- [ ] Specifies validation methods (how to check)
- [ ] Lists expected artifacts (what should be created)
- [ ] Predicts baseline failures (knowledge gaps)
- [ ] Complexity appropriate for domain expertise level

## Testing the Scenarios

After creating scenarios:
1. Run WITHOUT skill - document specific failures
2. Categorize failures (API, patterns, performance, etc.)
3. These categories become research areas
4. Create skill + KB to address failures
5. Run WITH skill - verify improvements
6. Iterate until scenario passes
7. User validates subjective criteria

Good scenarios reveal exactly what knowledge needs to be in the KB!
