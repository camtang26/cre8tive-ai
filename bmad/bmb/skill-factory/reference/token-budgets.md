# Token Budgets and Progressive Disclosure

Token efficiency is critical for Claude Skills. The progressive disclosure architecture enables unbounded context by loading information only when needed.

---

## The Three-Phase Lifecycle

Skills go through three phases, each with different token costs:

```
┌─────────────────────────────────────────────────────────────┐
│ PHASE 1: DISCOVERY (Always Loaded)                          │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Metadata: name + description                            │ │
│ │ Token Cost: 10-50 tokens per skill                      │ │
│ │ Purpose: Claude knows what skills exist                 │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                               │
│ PHASE 2: ACTIVATION (Loaded When Triggered)                  │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Full SKILL.md loaded via bash cat command               │ │
│ │ Token Cost: 200-2000+ tokens                            │ │
│ │ Purpose: Procedural knowledge and instructions          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                               │
│ PHASE 3: RESOURCE LOADING (As-Needed)                        │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Additional .md files, scripts executed                  │ │
│ │ Token Cost: Variable for markdown, 0 for scripts        │ │
│ │ Purpose: Extended documentation and operations          │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Discovery (Metadata)

**Always loaded in system prompt for every conversation.**

### Token Budget: 10-50 tokens per skill

#### What's Included:
- `name` field (lowercase-with-hyphens)
- `description` field (max 1024 chars)

#### Optimization Strategies:

**Keep name concise**:
- ✅ `test-driven-development` (3 tokens)
- ❌ `comprehensive-test-driven-development-workflow-system` (8 tokens)

**Optimize description**:
- Target: 50-200 characters (10-40 tokens)
- Maximum: 1024 characters (~200 tokens)
- Front-load keywords

**Example**:
```yaml
# 📊 Token Analysis
name: systematic-debugging  # ~3 tokens
description: Apply 4-phase debugging framework (reproduce, isolate, diagnose, verify). Use when bugs are hard to track or user mentions debugging, troubleshooting. # ~35 tokens

# Total Discovery Cost: ~38 tokens
```

**Why this matters**: If you have 100 skills at 38 tokens each = 3,800 tokens always loaded. Keep this lean!

---

## Phase 2: Activation (SKILL.md)

**Loaded on-demand when skill triggers.**

### Token Budget Guidelines

| Skill Complexity | Target Tokens | Max Acceptable | When to Use |
|-----------------|---------------|----------------|-------------|
| **Simple** | 200-500 | 1,000 | Single-file procedural knowledge |
| **Common** | 500-1,000 | 1,500 | Multi-section workflows |
| **Complex** | 1,000-2,000 | 2,500 | Comprehensive frameworks |
| **Advanced** | 2,000+ | 5,000 | Multi-file architecture required |

### Optimization Strategies

#### 1. Concise Writing

**❌ Verbose (250 tokens)**:
```markdown
When you are working on debugging a problem, it is very important
that you follow a systematic approach. First, you should try to
reproduce the problem consistently. This means that you need to
figure out the exact steps that cause the bug to happen. Once
you have reproduction steps, you should then work on isolating
the problem to find out which component is actually causing it...
```

**✅ Concise (80 tokens)**:
```markdown
Follow 4-phase debugging:
1. **Reproduce**: Create minimal failing case
2. **Isolate**: Narrow to smallest component
3. **Diagnose**: Identify root cause
4. **Verify**: Confirm fix resolves issue
```

**Savings**: 170 tokens (68% reduction)

---

#### 2. Progressive Disclosure

Instead of putting everything in SKILL.md, split into layers:

**Level 0** (metadata - always loaded):
```yaml
name: excel-financial-modeling
description: Create Excel models with standard conventions. # 40 tokens
```

**Level 1** (SKILL.md - loaded when triggered):
```markdown
# Excel Financial Modeling (500 tokens)

## Overview
Create financial models following industry conventions.

## Color Conventions
- Blue: Inputs
- Black: Formulas
- Green: Cross-sheet links

## Common Operations
[Basic examples]

## For complete formula library, see reference.md
```

**Level 2** (reference.md - loaded if needed):
```markdown
# Formula Reference (2000 tokens)

## Revenue Forecasting
[Detailed formulas with examples]

## Valuation Models
[DCF, multiples, etc.]

## Sensitivity Analysis
[Data tables, scenario manager]
```

**Result**: Most users only load 500 tokens, not 2,500.

---

#### 3. Reference Other Skills (DRY)

**❌ Duplicate Content (400 tokens in each skill)**:
```markdown
# Skill A
## Testing Approach
Follow RED-GREEN-REFACTOR:
1. Write failing test
2. Implement minimal code
3. Refactor for quality
[Full TDD explanation]

# Skill B
## Testing Approach
Follow RED-GREEN-REFACTOR:
1. Write failing test
2. Implement minimal code
3. Refactor for quality
[Same explanation duplicated]
```

**✅ Reference (50 tokens total)**:
```markdown
# Skill A
## Testing Approach
See skills/testing/test-driven-development for RED-GREEN-REFACTOR

# Skill B
## Testing Approach
See skills/testing/test-driven-development for RED-GREEN-REFACTOR
```

**Savings**: 350 tokens per duplicate avoided

---

## Phase 3: Resource Loading

**Loaded selectively based on skill logic.**

### Scripts: Zero Token Cost

**This is the killer feature**: Executable scripts cost ZERO tokens because they're executed, not loaded into context.

**Example - PDF Table Extraction**:

**❌ Generate Python code (200 tokens loaded into context)**:
```markdown
To extract tables, use:
\`\`\`python
import pdfplumber
with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        tables = page.extract_tables()
        # ... more code
\`\`\`
```

**✅ Execute script (0 tokens)**:
```markdown
Extract tables using:
\`\`\`bash
python scripts/extract_tables.py input.pdf output.csv
\`\`\`

scripts/extract_tables.py:
# Full implementation (not loaded, just executed)
```

**Savings**: 200 tokens

---

### Multi-File Documentation

For complex skills, split documentation into levels:

```
skill-name/
├── SKILL.md (500 tokens - common operations)
├── reference.md (2000 tokens - complete API)
├── advanced.md (1500 tokens - edge cases)
└── scripts/
    └── helper.py (0 tokens - executed)
```

**Load pattern**:
- Everyone gets SKILL.md (500 tokens)
- If needed: "See reference.md for complete API" (+2000 tokens)
- If rare case: "See advanced.md for edge cases" (+1500 tokens)

**Result**: Average user pays 500 tokens, power user pays 4000 tokens, but only when needed.

---

## Token Estimation Formula

```python
def estimate_skill_tokens(skill_path):
    """Rough token estimation (assumes ~1.3 tokens per word)"""

    # Count words in SKILL.md
    with open(f"{skill_path}/SKILL.md") as f:
        content = f.read()

    # Remove YAML frontmatter
    if content.startswith("---"):
        content = content.split("---", 2)[2]

    # Count words
    words = len(content.split())

    # Estimate tokens (rough: 1.3 tokens per word)
    tokens = words * 1.3

    # Add metadata cost
    metadata_tokens = 40  # Typical for name + description

    return {
        "metadata": metadata_tokens,
        "skill_md": int(tokens),
        "total_activation": int(metadata_tokens + tokens)
    }
```

---

## Budgeting by Skill Type

### Simple Skill (Brand Guidelines)

```yaml
name: brand-guidelines  # 3 tokens
description: Apply Acme Corp brand colors, fonts...  # 30 tokens

# SKILL.md sections:
- Overview: 50 tokens
- Color Palette: 100 tokens
- Typography: 75 tokens
- Logo Usage: 75 tokens
- Examples: 100 tokens
# Total: 400 tokens

# Total Cost:
# - Discovery: 33 tokens (always)
# - Activation: 433 tokens (when triggered)
```

**Verdict**: ✅ Well within budget for simple skill

---

### Complex Skill (Webapp Testing)

```yaml
name: webapp-testing  # 3 tokens
description: Test web apps using Playwright...  # 40 tokens

# SKILL.md sections:
- Overview: 100 tokens
- Prerequisites: 75 tokens
- Server Management: 150 tokens
- Test Structure: 200 tokens
- Key Patterns: 200 tokens
- Debugging: 100 tokens
# Subtotal: 825 tokens

# scripts/with_server.py: 0 tokens (executed)
# examples/auth-test.spec.ts: 0 tokens (reference file)

# Total Cost:
# - Discovery: 43 tokens (always)
# - Activation: 868 tokens (when triggered)
# - Scripts: 0 tokens (executed)
```

**Verdict**: ✅ Excellent - scripts keep it under 1000 tokens

---

### Should-Be-Multi-File Skill (Poor Design)

```yaml
name: comprehensive-development-guide  # 4 tokens
description: Complete guide to software development...  # 50 tokens

# SKILL.md sections (everything in one file):
- Overview: 200 tokens
- TDD Process: 500 tokens
- Debugging Framework: 600 tokens
- Code Review Checklist: 400 tokens
- Git Workflow: 300 tokens
- CI/CD Setup: 400 tokens
- Architecture Patterns: 800 tokens
- Testing Strategies: 600 tokens
- Documentation Standards: 400 tokens
# Total: 4,200 tokens

# Total Cost:
# - Discovery: 54 tokens (always)
# - Activation: 4,254 tokens (MASSIVE)
```

**Verdict**: ❌ TOO LARGE - should be 7 separate skills or 1 multi-file skill

---

## Multi-File Architecture Patterns

### Pattern 1: Common + Reference

**When**: Skill has both frequent and rare operations

```
financial-modeling/
├── SKILL.md (500 tokens)
│   - Common operations
│   - Basic formulas
│   - "See reference.md for complete formula library"
│
└── reference.md (2500 tokens)
    - Every formula documented
    - Edge cases
    - Advanced techniques
```

**Token flow**:
- Casual user: 500 tokens
- Power user: 3000 tokens (500 + 2500)

---

### Pattern 2: Common + Specialized

**When**: Skill has domain-specific variants

```
document-generation/
├── SKILL.md (400 tokens)
│   - General document generation
│   - Common patterns
│
├── forms.md (800 tokens)
│   - Form-specific operations
│
└── extraction.md (600 tokens)
    - Data extraction specifics
```

**Token flow**:
- Forms user: 1200 tokens (400 + 800)
- Extraction user: 1000 tokens (400 + 600)
- Both: 1800 tokens

---

### Pattern 3: Overview + Detail Layers

**When**: Progressive complexity

```
algorithmic-art/
├── SKILL.md (600 tokens)
│   - Philosophy-driven process
│   - Basic patterns
│
├── templates/ (reference files, 0 tokens)
│   - viewer.html
│   - generator_template.js
│
└── examples/ (reference files, 0 tokens)
    - flow-field.html
    - particle-system.html
```

**Token flow**:
- Philosophy: 600 tokens
- Templates/examples: 0 tokens (referenced, not loaded)

---

## Optimization Checklist

Before finalizing a skill, check:

### Metadata Phase
- [ ] Description 50-200 characters (10-40 tokens ideal)
- [ ] Name concise (2-4 tokens)
- [ ] Total discovery cost <50 tokens

### Activation Phase
- [ ] Simple skills: <500 tokens
- [ ] Common skills: 500-1000 tokens
- [ ] Complex skills: 1000-2000 tokens
- [ ] If >2000 tokens: Split into multi-file

### Content Optimization
- [ ] Removed redundant language
- [ ] Used lists/bullets instead of paragraphs
- [ ] Referenced other skills instead of duplicating
- [ ] Moved examples to code blocks (more efficient)
- [ ] Used tables for structured data

### Script Usage
- [ ] Deterministic operations moved to scripts
- [ ] Scripts in scripts/ folder
- [ ] Scripts documented but not inlined

### Progressive Disclosure
- [ ] Common operations in SKILL.md
- [ ] Detailed docs in reference.md (if >1000 tokens)
- [ ] Specialized docs in separate files
- [ ] Clear navigation between levels

---

## Token Efficiency Anti-Patterns

### Anti-Pattern 1: Overly Verbose

```markdown
❌ (150 tokens)
When you are implementing a new feature, it is extremely important
that you write tests first before writing any implementation code.
This practice is known as test-driven development, and it helps
ensure that your code actually does what it's supposed to do...
```

**Fix**: Be concise (30 tokens)
```markdown
✅
Write tests BEFORE implementation code (test-driven development).
This ensures code meets requirements and enables confident refactoring.
```

---

### Anti-Pattern 2: Duplicate Content

```markdown
❌ Both skills include full TDD explanation (400 tokens × 2 = 800)

# Skill A
## Testing
[Full TDD process explained]

# Skill B
## Testing
[Same TDD process duplicated]
```

**Fix**: Reference once (50 tokens total)
```markdown
✅
# Skill A
## Testing
See skills/testing/test-driven-development

# Skill B
## Testing
See skills/testing/test-driven-development
```

---

### Anti-Pattern 3: Inline Scripts

```markdown
❌ (500 tokens)
\`\`\`python
# Full PDF extraction script inlined
import pdfplumber
def extract_tables(pdf_path, output_path):
    # ... 50 lines of code ...
\`\`\`
```

**Fix**: Execute script (0 tokens)
```markdown
✅
Extract tables: `python scripts/extract_tables.py input.pdf output.csv`
```

---

### Anti-Pattern 4: Everything in One File

```markdown
❌ Single 4000-token SKILL.md
```

**Fix**: Multi-file structure
```
✅
SKILL.md (500 tokens - common operations)
reference.md (2000 tokens - complete docs)
advanced.md (1500 tokens - edge cases)
```

---

## Budget Calculator

Use this to estimate if your skill is appropriately sized:

```python
# Skill Token Budget Calculator

def calculate_skill_budget(skill):
    budget = {
        "discovery": {
            "name": len(skill['name'].split('-')) * 1.5,  # ~1.5 tokens per word
            "description": len(skill['description'].split()) * 1.3,  # ~1.3 tokens per word
        },
        "activation": {
            "skill_md": len(skill['skill_md'].split()) * 1.3,
        },
        "resources": {
            "reference_md": len(skill.get('reference_md', '').split()) * 1.3,
            "scripts": 0,  # Scripts are executed, not loaded
        }
    }

    budget["totals"] = {
        "discovery_cost": sum(budget["discovery"].values()),
        "activation_cost": sum(budget["activation"].values()) + budget["totals"]["discovery_cost"],
        "full_load_cost": sum([
            budget["totals"]["activation_cost"],
            budget["resources"]["reference_md"]
        ])
    }

    return budget
```

---

## Final Recommendations

1. **Target 500 tokens for simple skills** - Sweet spot for single-file
2. **Multi-file above 1000 tokens** - Progressive disclosure critical
3. **Use scripts aggressively** - 0 token cost for deterministic operations
4. **Reference, don't duplicate** - DRY principle saves massive tokens
5. **Front-load critical info** - First 200 tokens most important
6. **Optimize discovery phase** - Keep metadata <50 tokens per skill
7. **Test token usage** - Use `wc -w` × 1.3 formula to estimate

**Remember**: Token efficiency enables unbounded context. A well-designed skill system with 100 skills costs ~5000 tokens at discovery, but each skill only adds 500-1000 tokens when activated. This is the magic of progressive disclosure.
