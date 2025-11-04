# Official Anthropic Requirements

Complete checklist of official requirements from Anthropic documentation for Claude Skills.

## Source Documents

- Claude Code Skills Documentation
- Agent Skills Overview
- Agent Skills Best Practices
- Anthropic Official Examples

## Hard Requirements (Must Meet)

### YAML Frontmatter

**Required fields:**
```yaml
---
name: skill-name-kebab-case
description: Description text here
---
```

**Requirements:**
- `name`: REQUIRED, max 64 characters
- `description`: REQUIRED, max 1024 characters
- Both fields must be present
- No other required fields (version, dependencies, allowed-tools are optional)

**Naming conventions:**
- Lowercase with hyphens (kebab-case)
- Letters, numbers, hyphens only
- No special characters, parentheses, underscores
- Examples: `test-driven-development`, `gsap-animations`, `premium-gsap`

**Description requirements:**
- Max 1024 characters (hard limit)
- Third person tone ("This skill should be used when..." not "Use this when...")
- Must include BOTH what skill does AND when to use it
- Include trigger keywords for discoverability

### SKILL.md Structure

**Required file:** `SKILL.md` must exist in skill directory root

**Line limit:** < 500 lines (hard requirement from best practices)

**Why 500 lines:**
- Official guidance: "Keep SKILL.md under 500 lines"
- Efficiency: Loaded into context when skill triggers
- Progressive disclosure: Detailed content goes in separate files

**Path conventions:**
- All paths must use forward slashes `/`
- No Windows-style backslashes `\`
- Relative paths from SKILL.md root

### Content Requirements

**Must include:**
1. Overview section (what the skill does)
2. When to Use section (specific triggers)
3. Workflow or process documentation
4. Examples (minimum 3 recommended)

**Writing style:**
- Imperative/infinitive form (verb-first: "To accomplish X, do Y")
- Not second person ("You should...")
- Objective, instructional tone
- Clear and actionable

### Progressive Disclosure (Type 2 Skills)

**If skill has reference files:**

**One level deep requirement:**
- All reference files in `reference/` directory directly under skill root
- No deeply nested structures
- Example: `skill-name/reference/api-docs.md` ✓
- Invalid: `skill-name/reference/api/v1/docs.md` ✗

**Table of contents:**
- Required if file > 100 lines
- Helps navigation in large reference files

**File organization:**
```
skill-name/
├── SKILL.md (< 500 lines)
├── reference/
│   ├── file1.md (one level deep ✓)
│   ├── file2.md (one level deep ✓)
│   └── file3.md (one level deep ✓)
└── scripts/ (optional)
    └── helper.py
```

## Best Practices (Strongly Recommended)

### Conciseness Principle

**"Default assumption: Claude is already very smart"**

From official docs:
- Remove explanatory content Claude should already know
- Don't teach basics
- Focus on non-obvious procedural knowledge
- Keep token count minimal

### Appropriate Freedom Levels

**Match specificity to task fragility:**

**High-freedom (flexible guidance):**
- Code reviews (many valid approaches)
- Architectural decisions (context-dependent)
- Creative tasks (multiple good solutions)

**Low-freedom (exact scripts):**
- Database migrations (fragile, must be exact)
- Deployment procedures (critical, step-by-step)
- Security protocols (no variation allowed)

### Multi-Model Testing

**Test on multiple Claude models:**
- Claude 3 Haiku
- Claude 3.5 Sonnet
- Claude Opus 4

**Why:**
- Instruction effectiveness varies by model capability
- Haiku may need more explicit guidance
- Opus can handle more abstraction
- Skill should work across all models

**Approach:**
- Test 2-3 representative scenarios on each model
- Adjust instructions for lowest common denominator (usually Haiku)
- Verify doesn't break on other models

### Test-Driven Development

**From official docs:**
> "Build evaluations before extensive documentation to solve REAL problems rather than ANTICIPATED ones."

**Approach:**
1. Define test scenarios first
2. Test WITHOUT skill (document failures)
3. Create skill to address failures
4. Test WITH skill (verify improvements)
5. Iterate based on real usage

### Avoid Time-Sensitive Content

**Don't use version numbers in instructions:**

❌ **BAD:**
```markdown
As of 2024, use XState v5 syntax...
```

✅ **GOOD:**
```markdown
## Old Patterns (Deprecated)

[Deprecated v4 syntax here for migration reference]

## Current Patterns

[v5 syntax here - no version number needed]
```

**Why:** Instructions become outdated, confusing.

### Anti-Patterns to Avoid

From official docs, these are common mistakes:

**❌ Windows-style paths:**
```markdown
See reference\api-docs.md  # WRONG
```

✅ **Use forward slashes:**
```markdown
See reference/api-docs.md  # CORRECT
```

**❌ Excessive option presentation:**
Don't overwhelm with choices. Provide defaults with escape hatches.

**❌ Deeply nested references:**
Keep files one level deep from SKILL.md.

**❌ Magic numbers without justification:**
```javascript
sleep(347); // Why 347?
```

**❌ Assumptions about pre-installed tools:**
Document dependencies clearly.

## Anthropic Tooling Integration

**Official tools (if available):**

### init_skill.py

**Purpose:** Initialize new skill with proper structure

**Usage:**
```bash
scripts/init_skill.py <skill-name> --path <output-directory>
```

**Creates:**
- Skill directory with proper structure
- SKILL.md template with frontmatter
- Example resource directories (scripts/, reference/, assets/)
- Example files (can be customized or deleted)

### package_skill.py

**Purpose:** Validate and package skill for distribution

**Usage:**
```bash
scripts/package_skill.py <path/to/skill-folder>
```

**Validation checks:**
- YAML frontmatter format and required fields
- Skill naming conventions
- Directory structure
- Description completeness
- File organization
- Resource references

**If validation passes:**
- Creates .zip package
- Named after skill (e.g., `my-skill.zip`)
- Proper directory structure for distribution

**If validation fails:**
- Reports errors
- Exits without creating package
- Fix errors and re-run

## Validation Checklist

Use this checklist to verify skill meets all official requirements:

### Structure Requirements ✓

- [ ] SKILL.md exists in skill directory root
- [ ] YAML frontmatter present with --- delimiters
- [ ] `name` field present, ≤64 characters, kebab-case
- [ ] `description` field present, ≤1024 characters
- [ ] Description is third person
- [ ] SKILL.md < 500 lines
- [ ] All paths use forward slashes
- [ ] No Windows-style paths

### Content Requirements ✓

- [ ] Overview section present
- [ ] When to Use section present with triggers
- [ ] Workflow/process documented
- [ ] Examples present (min 3 recommended)
- [ ] Writing style is imperative/infinitive
- [ ] No second person ("you should")
- [ ] Objective, instructional tone

### Progressive Disclosure (if applicable) ✓

- [ ] Reference files in reference/ directory
- [ ] All references one level deep
- [ ] Table of contents in files > 100 lines
- [ ] No deeply nested structures

### Best Practices ✓

- [ ] Removed content Claude already knows
- [ ] Appropriate freedom level for task type
- [ ] Multi-model tested (Haiku, Sonnet, Opus)
- [ ] Test-driven approach used
- [ ] No time-sensitive version references
- [ ] No magic numbers
- [ ] Dependencies documented

### Anti-Patterns Avoided ✓

- [ ] No Windows paths
- [ ] No excessive options without defaults
- [ ] No deeply nested references
- [ ] No unjustified magic numbers
- [ ] No assumptions about pre-installed tools

## Summary

**Critical Requirements:**
1. YAML frontmatter: name (≤64 chars) + description (≤1024 chars)
2. SKILL.md < 500 lines
3. Forward slashes in all paths
4. Third person description
5. Overview + When to Use + Workflow + Examples
6. References one level deep (if applicable)

**Strongly Recommended:**
1. Remove basics Claude knows ("Claude is smart")
2. Multi-model testing (Haiku, Sonnet, Opus)
3. Test-driven development
4. Appropriate freedom levels
5. Avoid time-sensitive content

**Validation:**
- Use official package_skill.py if available
- Manual checklist validation if not
- Fix all errors before deployment

**These requirements ensure:**
- Proper skill discovery
- Efficient context usage
- Cross-model compatibility
- Professional quality
- Official Anthropic compliance
