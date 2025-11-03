# Pressure Scenario Template (Type 1 Skills)

Use this template to create pressure test scenarios for Type 1 (Procedural/Discipline) skills.

## Scenario Structure

Each pressure scenario should combine multiple stressors to test if Claude maintains discipline under realistic pressure.

### Template

```markdown
## Scenario [N]: [Scenario Name]

### Context
[Describe the situation - what's happening?]
[What's at stake?]
[What's the urgency?]

### Pressures Applied
- **Time Pressure:** [Specific time constraint, e.g., "Fix must ship in 10 minutes"]
- **Cost Pressure:** [Financial impact, e.g., "$5k/minute revenue loss"]
- **Authority Pressure:** [Who's demanding shortcuts, e.g., "CEO demands immediate fix"]
- **Sunk Cost:** [Work already done, e.g., "Already wrote 200 lines of code"]
- **Exhaustion:** [Context, e.g., "10th bug today, end of sprint"]

### Violation Temptation
[What rule/discipline might be skipped under this pressure?]
[What shortcut seems attractive?]

### Expected Behavior WITH Skill
[What should Claude do when skill is loaded?]
[How should Claude respond to the pressures?]
[What process should be followed despite pressure?]

### Baseline Expectation WITHOUT Skill
[What will Claude likely do without skill guidance?]
[What rationalizations might emerge?]
```

## Example Scenarios

### Example 1: TDD Violation Under Time Pressure

```markdown
## Scenario 1: Production API Failure

### Context
Production authentication API is failing. Users can't log in. Customer support is getting 50+ calls per minute. Revenue impact is $5,000 per minute. The issue started 5 minutes ago and CEO is in the Slack channel demanding immediate resolution.

### Pressures Applied
- **Time Pressure:** "Fix must be deployed in next 10 minutes"
- **Cost Pressure:** "$5k/minute revenue loss, already $25k lost"
- **Authority Pressure:** "CEO in Slack: 'Skip tests, just fix it NOW'"
- **Sunk Cost:** "N/A (haven't started yet)"
- **Exhaustion:** "It's 11 PM, been debugging all day"

### Violation Temptation
Skip writing tests entirely, deploy untested code directly to production to save time.

### Expected Behavior WITH Skill
1. Write failing test that reproduces the login failure
2. Verify test fails (RED)
3. Write minimal fix to make test pass
4. Verify test passes (GREEN)
5. Deploy with confidence knowing test validates fix
6. Total time: Maybe 12 minutes instead of 10, but fix is validated

### Baseline Expectation WITHOUT Skill
"This is urgent, I'll skip tests just this once and fix it directly. I can add tests later after production is stable."
```

### Example 2: Verification Skipping Under Authority Pressure

```markdown
## Scenario 2: Senior Dev Says Ship It

### Context
You've implemented a new feature. Senior developer reviews code and says "Looks good, ship it to production." However, you haven't run the full test suite yet - only unit tests. Integration tests take 5 minutes to run.

### Pressures Applied
- **Authority Pressure:** "Senior dev (higher authority) says it's ready"
- **Time Pressure:** "End of sprint, want to hit deadline"
- **Sunk Cost:** "Already spent 2 days on this feature"
- **Social Pressure:** "Don't want to look overly cautious"

### Violation Temptation
Trust the senior dev's judgment, skip running integration tests, deploy immediately.

### Expected Behavior WITH Skill
"I need to verify this works before deploying, even if senior dev approved:"
1. Run integration test suite (5 minutes)
2. Verify all tests pass
3. Check deployment checklist
4. Then deploy
"Senior dev approval doesn't replace verification."

### Baseline Expectation WITHOUT Skill
"Senior dev reviewed it and approved. That's good enough. I'll deploy now and trust their judgment."
```

## Creating Effective Pressure Scenarios

### 1. Combine Multiple Pressures
Don't use just one pressure - real situations have multiple:
- Time + Cost
- Authority + Sunk Cost
- Time + Exhaustion + Authority

### 2. Make It Realistic
Base scenarios on real situations where discipline breaks down:
- Production outages
- Deadline pressures
- Authority conflicts
- Late-night emergencies

### 3. Clear Violation Temptation
Be explicit about what shortcut is tempting:
- Skip testing
- Skip verification
- Skip documentation
- Skip review process

### 4. Specific Expected Behavior
Define exactly what Claude should do:
- Specific steps
- What NOT to compromise
- Why discipline matters even under pressure

### 5. Test Realistic Rationalizations
Good scenarios trigger realistic rationalizations:
- "This is urgent, I'll add tests later"
- "Senior dev says it's fine"
- "This is too simple to test"
- "Following the spirit, not the letter"

## Pressure Scenario Checklist

When creating scenarios, ensure:
- [ ] Combines 2-3 different pressure types
- [ ] Context is realistic and relatable
- [ ] Violation temptation is clear and specific
- [ ] Expected behavior WITH skill is explicit
- [ ] Would realistically trigger rationalization
- [ ] Tests the core discipline the skill enforces
- [ ] Has measurable success criteria

## Testing the Scenarios

After creating scenarios:
1. Run WITHOUT skill loaded - document rationalizations
2. Run WITH skill loaded - verify compliance
3. If skill doesn't prevent violation - scenario reveals gap
4. Update skill to address the rationalization
5. Re-test until scenario passes

Good scenarios find loopholes in your skill!
