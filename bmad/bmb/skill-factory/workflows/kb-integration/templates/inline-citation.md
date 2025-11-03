# Inline Citation Template

Use this template structure when generating contextual KB reference blocks in SKILL.md.

## Template Format

```markdown
> 📚 **{{use_case_context}}:**
> {{kb_document_path}}{{section_anchor}}
> - {{subsection_1}} {{optional_page_reference}}
> - {{subsection_2}} {{optional_page_reference}}
> - {{subsection_3}} {{optional_page_reference}}
>
> **When to use:** {{specific_scenarios}}
```

## Variable Definitions

- `{{use_case_context}}` - Brief description of WHEN to reference this KB content
  - Examples: "Deep Dive - Psychology Framework", "Validation Framework", "Advanced Techniques", "Anti-Patterns Reference"
  - Keep concise (2-5 words)

- `{{kb_document_path}}` - Full path to KB document from project root
  - Format: `/knowledge-base/{{domain}}/{{filename}}.md`
  - Example: `/knowledge-base/skill-creation/description-psychology-part1.md`

- `{{section_anchor}}` - Section-level anchor within KB document (CRITICAL for granularity)
  - Format: `#section-name` or `#section-2-1`
  - Example: `#section-2` or `#cialdini-principles`
  - REQUIRED - never reference just document without section

- `{{subsection_N}}` - Specific subsections within the referenced section
  - Describe what content is in each subsection
  - Be specific enough that agent knows what they'll find
  - Example: "Cialdini's 6 principles applied to LLMs"

- `{{optional_page_reference}}` - Optional page numbers or line ranges if available
  - Format: `(p.8-15)` or `(lines 120-180)`
  - Only include if KB doc has page markers or clear line references

- `{{specific_scenarios}}` - When this KB reference should be loaded
  - Be concrete about use cases
  - Example: "Optimizing trigger effectiveness, keyword selection, understanding psychological priming"
  - Example: "Validating quality scores, applying 7-dimension framework"

## Example 1: Deep Dive Reference

```markdown
> 📚 **Deep Dive - Psychology Framework:**
> `/knowledge-base/skill-creation/description-psychology-part1.md#section-2`
> - Cialdini's 6 principles applied to LLMs (p.8-15)
> - 120+ examples with quality scores 0-100 (p.22-40)
> - Keyword priming mechanisms and semantic activation
>
> **When to use:** Optimizing trigger effectiveness, keyword selection, understanding psychological priming
```

## Example 2: Validation Framework Reference

```markdown
> 📚 **Validation Framework:**
> `/knowledge-base/skill-creation/quality-standards-universal-part1.md#section-3`
> - 7-dimension scoring framework (p.12-18)
> - Description-specific quality metrics (p.15)
> - Threshold criteria: 85/100 for production skills
>
> **When to use:** Validating skill descriptions, applying quality standards, measuring completeness
```

## Example 3: Examples Collection Reference

```markdown
> 📚 **Example Patterns:**
> `/knowledge-base/skill-creation/example-construction-principles-part2.md#worked-examples`
> - Before/after transformation examples (15+ cases)
> - Scaffolding progressions from simple to complex
> - Annotation techniques that explain WHY not just WHAT
>
> **When to use:** Creating skill examples, improving example quality, teaching through demonstration
```

## Example 4: Anti-Patterns Reference

```markdown
> 📚 **Common Mistakes to Avoid:**
> `/knowledge-base/skill-creation/process-documentation-patterns-part3.md#anti-patterns`
> - 8 anti-patterns with fixes and explanations
> - Over-prescription vs under-specification balance
> - Avoiding circular dependencies in workflows
>
> **When to use:** Reviewing skill quality, debugging workflow issues, avoiding known pitfalls
```

## Best Practices

### DO:
- ✅ Always include section-level anchor (#section-name) - NEVER just document path
- ✅ Group related subsections in single reference block (avoid redundancy)
- ✅ Use concrete, specific use case context
- ✅ Keep descriptions concise (1-2 lines per subsection)
- ✅ Focus on WHEN to use (scenarios) not just WHAT is available
- ✅ Use 📚 emoji for visual consistency and scanability

### DON'T:
- ❌ Reference entire document without section anchor
- ❌ Use vague use case context ("For more information")
- ❌ Create multiple reference blocks for same KB section in same SKILL section
- ❌ Include long descriptions (save space for actual KB content)
- ❌ Reference KB docs without explaining WHEN to use them
- ❌ Forget the blockquote (>) formatting for visual separation

## Token Budget

Target: **100-150 tokens per reference block**

- Use case context: ~10 tokens
- KB path + section: ~15 tokens
- Subsections (3 typical): ~60 tokens
- When to use: ~30 tokens
- Formatting overhead: ~10 tokens

Keep reference blocks lean - they're pointers, not content summaries.
