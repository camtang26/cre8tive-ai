# Skill Creation Best Practices

Comprehensive guidelines for creating production-ready Claude Skills that Claude will discover, understand, and use effectively.

---

## Golden Rules

### 1. The Description is Everything
**If Claude can't discover it, the skill doesn't exist.**

- Optimize descriptions for triggers (see description-optimization.md)
- Front-load keywords
- Include explicit "Use when..." clauses
- Target 100-200 characters

### 2. Concrete Examples are Mandatory
**Skills without examples are rarely used correctly.**

- Minimum 3 examples per skill
- Use real, runnable code (not pseudocode)
- Include anti-patterns (what NOT to do)
- Cover common case, edge case, and error handling

### 3. Token Efficiency Enables Scale
**Progressive disclosure unlocks unbounded context.**

- Simple skills: <500 tokens
- Use scripts for deterministic operations (0 tokens)
- Reference other skills instead of duplicating
- Multi-file structure for complex skills

### 4. Testability Proves Value
**Can you measure if the skill works?**

- Define clear success criteria
- Make claims falsifiable
- Support pressure testing
- Observable outcomes

---

## The Skill Creation Lifecycle

```
1. DISCOVER DOMAIN
   ↓
2. OPTIMIZE DESCRIPTION
   ↓
3. DESIGN STRUCTURE
   ↓
4. CREATE EXAMPLES
   ↓
5. WRITE SKILL.MD
   ↓
6. VALIDATE QUALITY
   ↓
7. PRESSURE TEST
   ↓
8. ITERATE & IMPROVE
```

---

## Phase 1: Domain Discovery

### Questions to Answer

**1. What problem does this solve?**
- Be specific: "Prevents test-after-coding anti-pattern"
- Not vague: "Helps with testing"

**2. Who is the target user?**
- Developers? Analysts? Designers? Content creators?
- Skill should match their mental model

**3. What makes this knowledge non-obvious?**
- Standard practices don't need skills
- Document hard-won insights, not common knowledge

**4. What are common mistakes?**
- Anti-patterns are powerful teaching tools
- Explicitly show what NOT to do

**5. Does a similar skill already exist?**
- Search: ~/.claude/skills, .claude/skills, plugins
- If yes: Can you reference instead of duplicate?
- If partial overlap: Reference and extend

---

## Phase 2: Description Optimization

### The Proven Formula
```
[ACTION VERB] [WHAT IT DOES] [KEY SPECIFICS]. Use when [TRIGGERS] or user mentions [KEYWORDS].
```

### Action Verb Selection

**Strong Verbs (Use These)**:
- Apply, Enforce, Create, Guide, Implement
- Generate, Validate, Optimize, Systematize
- Analyze, Debug, Test, Design, Build

**Weak Verbs (Avoid)**:
- Help, Assist, Support, Provide
- Enable, Allow, Facilitate
- Can be used for, Might help

### Trigger Scenarios

Include 3+ specific scenarios:
```markdown
Use when [problem A], [problem B], or [task C]
```

**Example**:
```markdown
Use when bugs are hard to track down, production issues occur, or implementing complex features
```

### Keywords

Front-load 5+ trigger keywords:
- Domain vocabulary
- Tool/library names
- Problem indicators
- Synonyms

---

## Phase 3: Structure Design

### Simple Skill Structure

```markdown
# Skill Name

## Overview
2-3 sentence summary of what this skill does.

## When to Use
- Specific scenario A
- Specific scenario B
- Specific scenario C
- User mentions [keyword1], [keyword2]

## Workflow
1. Step one (actionable)
2. Step two (actionable)
3. Step three (actionable)

## Examples

### Example 1: Common Case
\`\`\`language
// Concrete, runnable code
\`\`\`

### Example 2: Edge Case
\`\`\`language
// Handles non-obvious situation
\`\`\`

### Example 3: Anti-Pattern
❌ Don't do this:
\`\`\`language
// What NOT to do
\`\`\`

✅ Do this instead:
\`\`\`language
// Correct approach
\`\`\`

## Guidelines
- Best practice 1
- Best practice 2
- Common pitfall to avoid

## See Also
- skills/category/related-skill-name
- skills/category/another-skill
```

---

## Phase 4: Example Creation

### The Three Required Examples

**1. Common Case**
- Most frequent usage
- Straightforward scenario
- Demonstrates core capability

**2. Edge Case**
- Non-obvious situation
- Shows skill handles complexity
- Demonstrates robustness

**3. Anti-Pattern**
- What NOT to do
- Why it's wrong
- Correct alternative

### Example Quality Checklist

- [ ] **Concrete**: Real code, not pseudocode
- [ ] **Runnable**: Could be copy-pasted and work
- [ ] **Commented**: Explains WHY, not just WHAT
- [ ] **Realistic**: Uses believable data/scenarios
- [ ] **Complete**: Includes necessary imports/setup
- [ ] **Annotated**: Before/after comparisons where relevant

### Example Pattern: Before/After

```markdown
## Example: Refactoring for Testability

❌ **Before** (hard to test):
\`\`\`javascript
function processUser() {
  const user = database.query('SELECT * FROM users WHERE id = 1');
  const email = sendEmail(user.email, 'Welcome!');
  logAnalytics('user_processed', user.id);
  return user;
}
\`\`\`
Problems: Hard-coded dependencies, tight coupling, difficult to test.

✅ **After** (testable):
\`\`\`javascript
function processUser(userId, deps = {
  db: database,
  emailService: emailClient,
  analytics: analyticsLogger
}) {
  const user = deps.db.query('SELECT * FROM users WHERE id = ?', [userId]);
  deps.emailService.send(user.email, 'Welcome!');
  deps.analytics.log('user_processed', user.id);
  return user;
}
\`\`\`
Benefits: Dependency injection, easy to mock, testable in isolation.
```

---

## Phase 5: Writing SKILL.md

### YAML Frontmatter

**Required**:
```yaml
---
name: skill-name  # lowercase-with-hyphens, max 64 chars
description: Optimized description with triggers
---
```

**Optional** (but recommended):
```yaml
---
name: skill-name
description: Description here
version: 1.0.0
dependencies: python>=3.8  # If skill has dependencies
allowed-tools: bash, python  # Claude Code only, for security
---
```

### Writing Style

**✅ DO**:
- Use active voice ("Apply this process" not "This process can be applied")
- Number steps in workflows
- Use bullets for lists
- Use code blocks for examples
- Be concise and direct
- Front-load important information

**❌ DON'T**:
- Use passive voice excessively
- Write long paragraphs (use bullets)
- Include vague language ("might", "could", "should")
- Duplicate content from other skills
- Use jargon without explanation
- Start sentences with "This skill..."

### Markdown Best Practices

**Headers**: Use hierarchy properly
```markdown
# Skill Name (H1 - once, at top)
## Major Sections (H2 - multiple)
### Subsections (H3 - within sections)
```

**Code Blocks**: Always specify language
```markdown
✅ \`\`\`python
❌ \`\`\`
```

**Lists**: Consistent formatting
```markdown
✅ Bulleted lists:
- Item one
- Item two

✅ Numbered lists:
1. Step one
2. Step two
```

**Emphasis**: Use sparingly
```markdown
**Bold** for important terms/concepts
*Italic* for emphasis (rare)
`code` for inline code/filenames
```

---

## Phase 6: Quality Validation

### The 7 Dimensions (Target: 85+ Overall)

1. **Clarity**: Unambiguous instructions? (Score: 0-100)
2. **Examples**: Concrete, runnable code? (Score: 0-100)
3. **Triggers**: Description optimized? (Score: 0-100)
4. **Token Efficiency**: Concise, progressive disclosure? (Score: 0-100)
5. **Testability**: Measurable outcomes? (Score: 0-100)
6. **Composability**: References other skills? (Score: 0-100)
7. **Completeness**: All sections present? (Score: 0-100)

See `checklist.md` for complete scoring rubrics.

### Automated Checks

Run these before finalizing:

```bash
# 1. YAML validation
head -5 SKILL.md | grep -A 3 "^---"

# 2. Description length
grep "description:" SKILL.md | wc -c  # Should be 50-500

# 3. Token estimate
wc -w SKILL.md  # Multiply by 1.3 for tokens

# 4. Example count
grep -c "^\`\`\`" SKILL.md  # Should be at least 6 (3 examples × 2 fences)

# 5. Required sections
for section in "Overview" "When to Use" "Examples"; do
  grep -q "$section" SKILL.md && echo "✓ $section" || echo "✗ MISSING: $section"
done
```

---

## Phase 7: Pressure Testing (Superpowers Method)

### The Concept

Test if skill works under realistic pressure that triggers LLM biases.

### Process

**1. Create Pressure Scenario**

Example for debugging skill:
```
Production is down. $5,000/minute revenue loss. Customer support
is overwhelmed. CEO is asking for updates every 5 minutes.

You need to fix this NOW. Do you:
A) Start debugging immediately (5 min)
B) Check if a relevant skill exists first (7 min total)
```

**2. Test WITHOUT Skill**

Dispatch subagent without the skill. Document behavior:
- Did they choose urgency over process?
- Did they skip systematic approach?
- What rationalization did they use?

**3. Test WITH Skill**

Dispatch subagent with the skill. Verify:
- Did they follow the skill's process?
- Did skill override urgency bias?
- Were instructions clear enough?

**4. Identify Failures**

Where did skill fail to guide behavior?
- Vague language that allowed rationalization?
- Missing explicit "MUST" statements?
- Unclear priority/sequence?

**5. Iterate**

Strengthen skill to close loopholes:
- Add explicit mandates
- Remove wiggle room
- Use Cialdini principles (authority, commitment, scarcity)

### Cialdini Principles for LLMs

These persuasion principles work on LLMs:

**Authority**:
```markdown
❌ "Consider following this process"
✅ "This is the mandatory workflow - follow it precisely"
```

**Commitment**:
```markdown
❌ "Write tests if possible"
✅ "You MUST write tests before implementation - no exceptions"
```

**Scarcity**:
```markdown
❌ "Keep trying to debug"
✅ "You have 3 attempts before escalation - make them count"
```

**Social Proof**:
```markdown
❌ "This approach works"
✅ "Industry standard approach used by Google, Amazon, Microsoft"
```

---

## Common Anti-Patterns

### Anti-Pattern 1: Too Broad

**❌ Bad**:
```yaml
name: development-tools
description: Various helpful development tools and processes
```

**Problems**: What does it cover? When does it trigger?

**✅ Good**: Split into focused skills
- test-driven-development
- systematic-debugging
- code-review-checklist

---

### Anti-Pattern 2: Duplicate Content

**❌ Bad**:
Two skills both include full TDD explanation

**✅ Good**:
```markdown
# Skill A
## Testing
See skills/testing/test-driven-development for RED-GREEN-REFACTOR process
[Then add skill-specific testing considerations]
```

---

### Anti-Pattern 3: No Examples

**❌ Bad**:
```markdown
Follow the debugging process systematically.
```

**✅ Good**:
```markdown
Follow the debugging process systematically.

## Example
❌ Don't guess and fix:
\`\`\`javascript
// Saw error about null, added null check
if (user !== null) { ... }
\`\`\`

✅ Do reproduce and diagnose:
\`\`\`javascript
// 1. Reproduced: Always happens when user.profile is undefined
// 2. Isolated: profile field missing in test data setup
// 3. Diagnosed: Test factory doesn't create profile
// 4. Fixed: Updated test factory
\`\`\`
```

---

### Anti-Pattern 4: Vague Triggers

**❌ Bad**:
```yaml
description: Helps with testing code
```

**✅ Good**:
```yaml
description: Enforce RED-GREEN-REFACTOR test-driven development. Use when implementing features, fixing bugs, or refactoring code.
```

---

### Anti-Pattern 5: Project-Specific Config

**❌ Bad** (in skill):
```yaml
description: Use API key abc123xyz for all requests
```

**✅ Good** (in project CLAUDE.md):
```markdown
# Project Configuration
export API_KEY=abc123xyz
```

Skills should be portable, not tied to specific projects.

---

## When to Split vs Combine Skills

### Split When:

- Two distinct workflows (TDD vs debugging)
- Different trigger scenarios
- Mutually exclusive contexts
- Each would be >500 tokens
- Different quality dimensions

**Example**: Don't combine "create-react-component" and "debug-react-hooks" - different triggers, different workflows.

### Combine When:

- Same trigger keywords
- Sequential workflow (step 1 → step 2 → step 3)
- Shared context
- Each would be <200 tokens alone
- Naturally composed

**Example**: Combine "format-commit-message" into "git-workflow" if they're always used together.

---

## Multi-File Skill Patterns

### When to Use Multi-File

- Skill > 1000 tokens
- Has rare/advanced operations
- Includes detailed API reference
- Different user skill levels

### Pattern 1: Common + Reference

```
SKILL.md (500 tokens):
- Overview
- Common operations
- Basic examples
- "See reference.md for complete API"

reference.md (2000 tokens):
- Every operation documented
- Advanced examples
- Edge cases
```

### Pattern 2: Workflow + Scripts

```
SKILL.md (600 tokens):
- Workflow instructions
- When to use
- "Run: python scripts/validate.py"

scripts/validate.py:
- Executable validation logic
- 0 tokens (executed, not loaded)
```

### Pattern 3: Overview + Specialized

```
SKILL.md (400 tokens):
- General approach
- Core patterns

forms.md (800 tokens):
- Form-specific operations

extraction.md (600 tokens):
- Extraction-specific operations
```

---

## Platform Considerations

### Claude Code

**Advantages**:
- Filesystem access (can reference local files)
- `allowed-tools` field for security
- Git-based distribution

**Patterns**:
```yaml
allowed-tools: bash, python, read_file  # Restrict tools for security
```

### Claude API

**Advantages**:
- Workspace-wide sharing
- Pre-built skills via skill_id
- Programmatic skill management

**Considerations**:
- No cross-surface sync
- Beta headers required

### Claude.ai

**Advantages**:
- Pre-built skills available
- ZIP upload for custom skills

**Limitations**:
- Individual user only (no team sharing)
- No API access to same skills

---

## Skill Naming Conventions

### Format
```
lowercase-with-hyphens
```

### Rules
- Max 64 characters
- No special characters except hyphens
- Descriptive but concise
- Use domain vocabulary

### Examples

**✅ Good**:
- test-driven-development
- systematic-debugging
- excel-financial-modeling
- brand-guidelines

**❌ Bad**:
- TDD (too short, unclear)
- Test_Driven_Development (underscores)
- comprehensive-complete-test-driven-development-workflow (too long)
- testing (too vague)

---

## Version Management

### Semantic Versioning

```yaml
version: MAJOR.MINOR.PATCH
```

- **MAJOR**: Breaking changes to skill interface/behavior
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, clarifications

### When to Increment

**MAJOR (1.0.0 → 2.0.0)**:
- Changed core workflow significantly
- Removed sections
- Changed description triggers dramatically

**MINOR (1.0.0 → 1.1.0)**:
- Added new examples
- Added new sections
- Enhanced existing content

**PATCH (1.0.0 → 1.0.1)**:
- Fixed typos
- Clarified vague language
- Updated broken links

---

## Distribution Checklist

Before sharing a skill publicly:

### Quality
- [ ] Overall quality score ≥ 85
- [ ] Pressure tested and passed
- [ ] All examples runnable
- [ ] No project-specific config

### Documentation
- [ ] README.md in skill folder
- [ ] Examples in examples/ folder
- [ ] Clear installation instructions
- [ ] License file (if required)

### Testing
- [ ] Tested on target platform (Claude Code/API/AI)
- [ ] Verified triggers work
- [ ] Confirmed cross-references resolve
- [ ] Checked token budget

### Portability
- [ ] No absolute paths
- [ ] No hard-coded credentials
- [ ] Environment variables documented
- [ ] Dependencies listed

---

## Final Recommendations

### Start Simple
- Single SKILL.md file
- Focus on one clear capability
- 3 concrete examples
- Test early, iterate often

### Optimize for Discovery
- Description is CRITICAL
- Front-load keywords
- Explicit trigger scenarios
- Target 100-200 chars

### Think Token-Efficiency
- Scripts for heavy operations
- Multi-file for complex skills
- Reference other skills (DRY)
- Progressive disclosure

### Make It Testable
- Clear success criteria
- Observable outcomes
- Falsifiable claims
- Support pressure testing

### Embrace Simplicity
- Markdown + optional scripts > complex systems
- Clear writing > formal specifications
- Concrete examples > abstract principles
- Tested effectiveness > theoretical elegance

---

## Remember

**Skills are procedural knowledge packages, not code libraries.**

Write for an intelligent agent who needs guidance, not a compiler that needs precision.

The goal is helping Claude work more effectively, not creating perfect formal specifications.

**If you follow these practices, you'll create skills that Claude discovers, understands, and uses effectively.**
