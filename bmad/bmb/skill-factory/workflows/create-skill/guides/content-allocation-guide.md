# Content Allocation Guide: SKILL.md vs reference/

## The Principle (From Anthropic)

> "Information should live in either SKILL.md or references files, not both. Prefer references files for detailed information **unless it's truly core to the skill**."

---

## What "Truly Core" Means

**In SKILL.md** (core workflows - 200-450 lines):
- Quick Start (essential setup + basic usage with code)
- Common operations (2-3 most frequent tasks with runnable examples)
- Workflow steps for complex implementations
- Quality criteria (how to validate)
- Anti-patterns from baseline failures
- Natural references to detailed docs

**In reference/** (detailed documentation - unlimited):
- Comprehensive pattern coverage (from research)
- Advanced features and expert techniques
- Detailed API/framework documentation
- Extensive examples and variations
- Performance optimization deep dives
- Edge cases and gotchas
- Anything pushing SKILL.md over 500 lines

---

## Decision Framework

**For each piece of content, ask:**

### Question 1: Common vs Advanced?

"Is this essential for MOST use cases of this skill?"
- **YES** → SKILL.md (Quick Start or Common Operations)
- **NO** → reference/ (Advanced Techniques)

### Question 2: Frequency?

"Is this an operation Claude will do repeatedly?"
- **YES** → SKILL.md with runnable example
- **NO** → reference/ with comprehensive coverage

### Question 3: Explanation Depth?

"Does this require extensive explanation or many variations?"
- **YES** → reference/ (comprehensive detail)
- **NO** → Can stay in SKILL.md (brief with example)

---

## Examples from Anthropic Skills

### PDF Skill (200 lines total)

**SKILL.md contains**:
- Quick Start (basic read/extract)
- Common operations:
  - Merge PDFs (complete code example)
  - Split PDF (complete code example)
  - Extract metadata (complete code example)
  - Rotate pages (complete code example)
- Form-filling guidance pointer
- Reference to advanced features

**reference.md contains** (17k):
- Advanced features
- JavaScript libraries
- Comprehensive examples
- Edge cases

**Pattern**: Core operations in SKILL.md, advanced/comprehensive in reference.md

---

### MCP Builder (328 lines total)

**SKILL.md contains**:
- Workflow phases overview
- Process guidance
- When to load which references
- High-level structure

**reference/ contains** (4 files, ~25-30k total):
- python_mcp_server.md: Python-specific comprehensive patterns
- node_mcp_server.md: TypeScript-specific comprehensive patterns
- mcp_best_practices.md: Universal MCP patterns
- evaluation.md: Testing and validation

**Pattern**: Navigation + process in SKILL.md, language-specific details in reference/

---

### Internal Comms (33 lines total)

**SKILL.md contains**:
- Routing logic ("load appropriate file from examples/")
- When to use skill
- Keywords

**examples/ contains**:
- Actual format templates and guidance for each comm type

**Pattern**: Router in SKILL.md, content in separate files

---

## The 80/20 Rule

**Think**: "SKILL.md handles 80% of use cases, reference/ enables the advanced 20%"

**SKILL.md**: Gets Claude started, handles common operations
**reference/**: Enables mastery for complex scenarios

---

## Common Content Allocation Patterns

### Quick Start
**Location**: SKILL.md (always)
**Why**: First thing Claude needs, core to skill

### Common Operations (Top 3-5)
**Location**: SKILL.md with code examples
**Why**: Repeated frequently, essential workflows

### Comprehensive Pattern Coverage
**Location**: reference/
**Why**: Too detailed for SKILL.md, needed for complex cases

### Advanced Techniques
**Location**: reference/
**Why**: Not needed for common use, specialized

### API Documentation
**Location**: reference/
**Why**: Comprehensive, detailed, not all needed at once

### Gotchas and Edge Cases
**Location**: reference/
**Why**: Numerous, detailed, context-specific

### Quality Criteria
**Location**: SKILL.md
**Why**: Needed to validate any implementation

### Anti-Patterns
**Location**: SKILL.md (from baseline)
**Why**: Prevent common failures, always relevant

### Examples
**Location**: Both
- SKILL.md: 2-3 common case examples
- reference/: Extensive example variations

---

## Validation: The Balance Test

**After allocating content, check**:

"Can Claude accomplish common tasks using only SKILL.md?"
- **YES** → Good balance (SKILL.md has substance)
- **NO** → SKILL.md too minimal (add Quick Start, Common Operations)

"Does reference/ have comprehensive coverage for advanced scenarios?"
- **YES** → Good balance (research was thorough)
- **NO** → reference/ too thin (research wasn't comprehensive)

"Is SKILL.md under 500 lines?"
- **YES** → Good balance
- **NO** → Move advanced content to reference/

**All three YES?** Content allocation is correct.

---

## Red Flags

**SKILL.md Issues:**
- ❌ No Quick Start section
- ❌ No code examples in SKILL.md (all in reference/)
- ❌ Only pointers, no substance
- ❌ Over 500 lines

**reference/ Issues:**
- ❌ Files are too brief (100-200 lines for complex domain)
- ❌ Missing comprehensive coverage
- ❌ Content should be in SKILL.md is in reference/ (Quick Start)

---

## Summary

**From Anthropic pattern**:
- SKILL.md has SUBSTANCE (Quick Start, common operations with code, workflows)
- reference/ has DEPTH (comprehensive patterns, advanced techniques, detailed examples)
- Reference Materials section uses NATURAL SENTENCES (not constrained pointers)
- Balance: 80% common tasks from SKILL.md, 20% advanced from reference/

**The goal**: Progressive disclosure that actually works - Claude gets started from SKILL.md, dives deep into reference/ as needed.
