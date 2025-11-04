# Decision Tree Template

Use this template to create conditional KB loading guidance based on skill type, domain, or use case.

## Template Format

```markdown
## KB Loading Decision Tree

**If creating {{skill_type_1}} skill:**
- **Priority KB docs:** {{primary_kb_docs_with_sections}}
- **Optional KB docs:** {{supplementary_kb_docs}}
- **Skip:** {{irrelevant_kb_docs}}

**If creating {{skill_type_2}} skill:**
- **Priority KB docs:** {{primary_kb_docs_with_sections}}
- **Optional KB docs:** {{supplementary_kb_docs}}
- **Skip:** {{irrelevant_kb_docs}}

**If optimizing for {{specific_aspect}}:**
- **Load first:** {{foundational_kb_docs}}
- **Then:** {{advanced_kb_docs}}
- **When needed:** {{specialized_kb_docs}}
```

## Variable Definitions

- `{{skill_type_N}}` - Type or domain of skill being created
  - Examples: "visual design", "code-focused", "process documentation", "creative workflow"
  - Base on skill domain/type metadata from SKILL.md frontmatter

- `{{primary_kb_docs_with_sections}}` - Essential KB documents for this skill type
  - Format: `KB-doc-name.md#section` with brief description
  - Include section-level granularity (not just doc names)
  - Example: `description-psychology-part1.md#section-2 (Cialdini's principles)`

- `{{supplementary_kb_docs}}` - Optional KB documents that add value but aren't required
  - Format: Same as primary, but marked as "when X" or "if Y"
  - Example: `pattern-language-theory.md (when designing composable skills)`

- `{{irrelevant_kb_docs}}` - KB documents that don't apply to this skill type
  - Format: List doc names with brief reason
  - Example: `visual-patterns.md (not relevant for code-focused skills)`

- `{{specific_aspect}}` - Specific optimization goal or aspect being focused on
  - Examples: "token efficiency", "quality score", "example quality", "trigger optimization"

- `{{foundational_kb_docs}}` - Prerequisite KB documents to load first
  - Documents that provide foundational concepts needed before advanced topics

- `{{advanced_kb_docs}}` - Advanced KB documents to load after foundations

- `{{specialized_kb_docs}}` - Niche KB documents for edge cases

## Example 1: Skill Type-Based Decision Tree

```markdown
## KB Loading Decision Tree

**If creating visual design skill:**
- **Priority KB docs:**
  - `visual-design-research.md#color-systems` (Color theory and palettes)
  - `visual-design-research.md#typography` (Font systems and hierarchies)
  - `progressive-disclosure-architecture.md#visual-patterns` (Visual information architecture)
- **Optional KB docs:**
  - `example-construction-principles-part2.md` (when creating visual examples)
  - `quality-standards-universal-part1.md` (for validation framework)
- **Skip:**
  - `tool-mastery-documentation.md` (CLI-focused, not relevant for visual skills)

**If creating code-focused skill:**
- **Priority KB docs:**
  - `process-documentation-patterns-part1.md#code-examples` (Code documentation patterns)
  - `example-construction-principles-part1.md#worked-examples` (Learning science for code examples)
  - `tool-mastery-documentation.md` (CLI tool documentation patterns)
- **Optional KB docs:**
  - `pattern-language-theory.md` (when designing pattern-based skills)
  - `cross-domain-composition.md` (for multi-skill orchestration)
- **Skip:**
  - `visual-design-research.md` (not relevant for code-focused skills)

**If creating process documentation skill:**
- **Priority KB docs:**
  - `process-documentation-patterns-part1.md#linear-branching` (Process flow patterns)
  - `process-documentation-patterns-part2.md#decision-trees` (Decision tree structures)
  - `quality-standards-universal-part2.md#clarity` (Clarity and completeness metrics)
- **Optional KB docs:**
  - `personal-workflow-capture.md` (when documenting tacit knowledge)
  - `description-psychology-part1.md` (for trigger optimization)
- **Skip:**
  - None (process skills can benefit from most KB docs)
```

## Example 2: Optimization Goal-Based Decision Tree

```markdown
## KB Loading Decision Tree

**If optimizing for trigger effectiveness:**
- **Load first:**
  - `description-psychology-part1.md#cialdini-principles` (Foundational psychology)
  - `description-psychology-part2.md#cognitive-load` (Information chunking)
- **Then:**
  - `description-psychology-part3.md#semantic-priming` (Advanced techniques)
  - `quality-standards-universal-part1.md#triggers` (Validation metrics)
- **When needed:**
  - Real-world examples from `description-psychology-part1.md#examples` (120+ scored examples)

**If optimizing for token efficiency:**
- **Load first:**
  - `progressive-disclosure-architecture.md#layered-architecture` (Core patterns)
  - `progressive-disclosure-architecture.md#token-reduction` (98.7% reduction strategies)
- **Then:**
  - `cross-domain-composition.md#dependencies` (Avoiding tight coupling that bloats tokens)
- **When needed:**
  - Production case studies from `progressive-disclosure-architecture.md#production-examples`

**If optimizing for example quality:**
- **Load first:**
  - `example-construction-principles-part1.md#learning-science` (Foundational theory)
  - `example-construction-principles-part2.md#worked-examples` (Before/after patterns)
- **Then:**
  - `example-construction-principles-part3.md#advanced-scaffolding` (Progressive complexity)
  - `process-documentation-patterns-part1.md#code-examples` (Documentation examples)
- **When needed:**
  - Real-world tutorial analysis from `example-construction-principles-part2.md#tutorials`
```

## Example 3: Workflow Stage-Based Decision Tree

```markdown
## KB Loading Decision Tree

**During initial skill design (Steps 1-3):**
- **Load:**
  - `quality-standards-universal-part1.md#frameworks` (Quality dimensions)
  - `description-psychology-part1.md` (Trigger optimization)
  - `pattern-language-theory.md#generative-patterns` (Skill architecture)
- **Purpose:** Foundation setting, understanding quality bar

**During example creation (Step 5):**
- **Load:**
  - `example-construction-principles-part1.md` (All sections)
  - `example-construction-principles-part2.md` (Worked examples, tutorials)
- **Purpose:** Creating high-quality, pedagogically sound examples

**During quality validation (Step 7):**
- **Load:**
  - `quality-standards-universal-part1.md#scoring` (7-dimension framework)
  - `quality-standards-universal-part2.md#metrics` (Specific metrics)
  - Relevant domain-specific KB for validation criteria
- **Purpose:** Measuring and validating skill quality
```

## Best Practices

### DO:
- ✅ Base decision tree on actual skill metadata (domain/type from frontmatter)
- ✅ Include section-level granularity in all KB references
- ✅ Group by meaningful categories (skill type, optimization goal, workflow stage)
- ✅ Provide clear reasoning (why priority vs optional vs skip)
- ✅ Keep concise (aim for 2-4 decision branches max)
- ✅ Focus on WHEN to load WHICH KB docs

### DON'T:
- ❌ Create overly complex trees with 10+ branches
- ❌ Reference KB docs without section anchors
- ❌ List all KB docs in every branch (defeats purpose of conditional loading)
- ❌ Use vague categories ("Type A skill" without explanation)
- ❌ Forget to explain WHY certain KB docs are priority vs optional
- ❌ Create decision tree if all KB docs equally relevant (skip in that case)

## When to Create Decision Trees

**CREATE decision tree when:**
- Skill has clear domain/type that affects KB relevance (visual vs code vs process)
- KB collection is large (10+ documents) with varying relevance
- Different workflow stages need different KB subsets
- Skill is used for multiple optimization goals with different KB needs

**SKIP decision tree when:**
- All KB docs equally relevant to skill
- KB collection is small (< 5 documents)
- Skill is highly specialized with obvious KB mapping
- Inline references already provide sufficient conditional context

## Token Budget

Target: **150-250 tokens per decision tree**

- 2-4 decision branches: ~200 tokens total
- Each branch: ~50 tokens
- Formatting overhead: ~25 tokens

Keep decision trees concise - they're routing logic, not comprehensive guides.

## Placement in SKILL.md

Insert decision tree in one of these locations:

1. **After main workflow, before examples** - Best for workflow-stage-based trees
2. **Before "When to Use" section** - Best for skill-type-based trees
3. **In dedicated "Knowledge Base Navigation" section** - Best for complex trees
4. **After overview, before workflow** - Best for optimization-goal-based trees

Choose placement that makes most sense for the skill's structure and the tree's purpose.
