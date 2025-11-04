# KB Integration Workflow

Transform generic KB reference lists into intelligent, contextual citations with progressive disclosure architecture.

## Purpose

Analyzes SKILL.md and knowledge-base documents to inject contextual inline references with section-level granularity and conditional loading guidance. Enables true progressive disclosure where agents load only relevant KB content on-demand instead of all 450k+ tokens upfront.

## Problem Solved

**Before KB Integration:**
- SKILL.md has generic list of KB docs at end
- No contextual guidance (agent doesn't know WHICH KB doc for WHICH task)
- Agent either loads nothing or loads everything (inefficient)
- No section-level granularity (loads entire multi-part KB docs)

**After KB Integration:**
- Contextual inline references throughout SKILL.md
- Section-level granularity (points to specific subsections)
- Decision trees for conditional loading (if visual skill → load these KBs)
- Agent loads only relevant KB content (~22k tokens vs 450k)

## How to Invoke

### From BMad Builder Agent

```
/bmad:bmb:agents:bmad-builder
[Select workflow creation menu]
```

### Direct Workflow Execution

```
Run workflow: bmad/bmb/skill-factory/workflows/kb-integration/workflow.yaml
```

## Expected Inputs

**Required:**
1. **SKILL.md file path** - Path to the skill file that needs KB integration
2. **Knowledge-base directory path** - Path to directory containing KB research documents

**Optional:**
- Skill domain/type metadata (extracted from SKILL.md frontmatter if present)

## Generated Outputs

**Modified Files:**
1. **SKILL.md** (updated in-place)
   - Contextual inline references injected throughout
   - Generic KB list updated or removed
   - Optional decision tree added
   - Original file backed up before modifications

**New Files:**
2. **Integration Report** (`{output_folder}/kb-integration-report-{date}.md`)
   - Coverage analysis (which KB docs referenced, how many times)
   - Unused KB documents identified
   - Section-level granularity achievement metrics
   - Token impact estimate (before/after)
   - Recommendations for improvement

## Workflow Steps

1. **Validate Inputs** - Verify SKILL.md exists, KB directory has docs, extract metadata
2. **Analyze SKILL.md Structure** - Extract sections, identify key concepts per section
3. **Analyze KB Documents** - Build topic index with section-level granularity
4. **Create Relevance Mapping** - Semantic analysis + user review of recommendations
5. **Generate Reference Blocks** - Formatted citations with contextual use cases
6. **Create Decision Trees** (optional) - Conditional loading guidance by skill type
7. **Update SKILL.md** - Inject inline references, backup original file
8. **Generate Integration Report** - Coverage analysis, token impact, recommendations

## Instruction Style

**Intent-Based** - Guides with goals and principles, LLM adapts conversations naturally.

Best for flexible semantic analysis and complex relevance determination where user context matters.

## Special Requirements

**None** - This workflow is self-contained and doesn't require external dependencies beyond standard BMAD tools (Read, Edit, Write).

## Validation Checklist

Use `checklist.md` to validate integration quality:
- **Target:** 90% or higher (59/65 checks passed)
- **Key Metrics:**
  - 100% section-level granularity (all references include #section-name)
  - Token overhead < 15% of original SKILL.md size
  - At least 1 KB reference per major SKILL section

## Template Files

**Reference Templates:**
- `templates/inline-citation.md` - Format for contextual KB reference blocks (100-150 tokens each)
- `templates/decision-tree.md` - Format for conditional loading guidance (150-250 tokens)

These templates guide LLM during workflow execution to generate consistently formatted citations.

## Example Use Case

**Scenario:** skill-factory-methodology skill has 450k tokens of KB research but only 3,719-token SKILL.md with generic KB list.

**Problem:** Agent doesn't know which KB docs to load for which tasks.

**Solution:** Run KB Integration workflow.

**Result:**
- 15 contextual inline references added across 8 major sections
- Each reference points to specific KB subsections (e.g., `description-psychology-part1.md#section-2`)
- Decision tree added: "If optimizing triggers → load psychology KB, If creating examples → load example-construction KB"
- Agent now loads ~22k tokens on-demand (95% reduction from loading all 450k)

## Token Impact

**SKILL.md Overhead:** +400-600 tokens (inline references are concise pointers)

**KB Loading Efficiency:**
- Before: Load all KB docs (450k tokens) or load nothing
- After: Load relevant sections on-demand (~15-25k tokens typical)
- **Savings: 94-96% token reduction** while maintaining comprehensive knowledge access

## Integration with Skill Factory

This workflow complements the Deep Subagent Research System:
1. **create-simple-skill workflow** (Option B) spawns research agents → 450k tokens of KB
2. **create-simple-skill workflow** generates SKILL.md → 3-4k tokens
3. **kb-integration workflow** (this workflow) → Connects SKILL.md to KB with progressive disclosure

**Future Enhancement:** Add as automatic Step 6.5 in create-simple-skill workflow after SKILL.md generation.

## Maintenance

**Re-run this workflow when:**
- New KB documents added to knowledge-base directory
- SKILL.md structure significantly changed (new sections added)
- Integration quality drops (unused KB docs, missing references)
- Token efficiency degrades (references becoming too verbose)

**Workflow is idempotent:** Can be re-run on same SKILL.md multiple times safely (creates new backup each time).

## Next Steps After Integration

1. **Test trigger scenarios** - Start fresh Claude Code session, verify skill activates
2. **Monitor KB loading** - Watch which KB docs actually get loaded during real usage
3. **Validate token efficiency** - Measure actual token cost vs estimated
4. **Iterate if needed** - Re-run workflow with refined mappings

## Version

- **Version:** 1.0.0
- **Author:** Cameron
- **Created:** 2025-10-20
- **Last Updated:** 2025-10-20

## Related Workflows

- `create-simple-skill` - Generates skills with optional deep KB research (creates the KB this workflow integrates)
- `create-workflow` - Used to create this KB Integration workflow

## Support

For issues or questions about this workflow:
1. Review integration report for specific recommendations
2. Check checklist.md validation results
3. Consult template files for reference formatting examples
4. Re-run workflow with refined user feedback during Step 4 relevance mapping
