# KB Integration - Validation Checklist

Use this checklist to validate successful KB integration into SKILL.md files.

## Input Validation

- [ ] SKILL.md file exists and is readable at provided path
- [ ] Knowledge-base directory exists and contains at least 1 .md file
- [ ] SKILL.md frontmatter contains valid name and description fields
- [ ] All KB documents in directory are valid markdown files
- [ ] Skill domain/type metadata extracted (if present in frontmatter)

## Structure Analysis Quality

- [ ] All major sections (##) extracted from SKILL.md with correct hierarchy
- [ ] All subsections (###) identified and mapped to parent sections
- [ ] At least 3 key concepts identified per major section
- [ ] Section content analyzed (not just headers)
- [ ] Current KB references identified (if any exist in original file)
- [ ] Structure map shows clear section → concepts relationship

## KB Document Analysis Completeness

- [ ] All KB documents in directory were read and analyzed
- [ ] Section structure extracted for each KB document (## and ### headers)
- [ ] Topic index created mapping topics → KB documents
- [ ] Specific subsections identified within each KB doc (section-level granularity)
- [ ] Multi-part documents identified and grouped (part1, part2, part3)
- [ ] KB document relationships documented (prerequisites, related topics)
- [ ] Total KB document count matches actual files in directory

## Relevance Mapping Accuracy

- [ ] Each SKILL.md section has relevance analysis performed
- [ ] Relevance scores assigned (High 95-100%, Medium 75-94%, Low 50-74%)
- [ ] At least 1 KB document mapped to each major SKILL section (if appropriate)
- [ ] Mappings include specific subsections, not just document names
- [ ] Relationship types identified (deep-dive, examples, validation, theory, anti-patterns)
- [ ] User reviewed and approved all mappings
- [ ] Low-relevance mappings justified or excluded
- [ ] No duplicate mappings (same KB section referenced multiple times unnecessarily)

## Reference Block Quality

- [ ] Each reference block follows template structure (📚 emoji, use case, path, subsections)
- [ ] All reference blocks include contextual use case ("When to use: ...")
- [ ] 100% of references include section-level granularity (#section-name)
- [ ] KB document paths are correct and properly formatted
- [ ] Reference blocks use blockquote (>) for visual separation
- [ ] Descriptions are concise (1-2 lines maximum)
- [ ] Multiple related subsections grouped in single reference (avoid bloat)
- [ ] No generic references ("See all KB docs for more info")

## SKILL.md Modification Success

- [ ] Original SKILL.md backed up before modifications
- [ ] Backup file path documented and accessible
- [ ] Inline reference blocks injected in correct sections
- [ ] All existing content preserved (no content deleted or replaced)
- [ ] Markdown formatting valid (no broken headers, blockquotes, or lists)
- [ ] Proper spacing maintained (reference blocks don't disrupt flow)
- [ ] Generic KB reference list updated or removed (not duplicating inline references)
- [ ] Decision tree inserted (if created) in logical location
- [ ] All KB document paths in references are valid (no 404s)
- [ ] Updated SKILL.md file is readable and renders correctly

## Integration Report Completeness

- [ ] Integration summary section complete with before/after metrics
- [ ] Coverage analysis shows which KB docs were referenced (with counts)
- [ ] Unused KB documents identified and listed
- [ ] Reference density calculated per SKILL section
- [ ] Section-level granularity percentage calculated (target: 100%)
- [ ] Recommendations provided for unused KB docs
- [ ] Under-referenced sections identified (if any)
- [ ] KB gaps documented (topics in SKILL without KB coverage)
- [ ] Token impact estimate included (SKILL.md before/after size)
- [ ] Estimated on-demand loading cost calculated
- [ ] Report saved to {integration_report_file} path

## Token Efficiency Validation

- [ ] Token overhead added to SKILL.md is < 15% of original size
- [ ] Average reference block size is < 150 tokens
- [ ] No redundant references (same KB content referenced multiple times)
- [ ] Section-level granularity prevents loading entire multi-part KB docs
- [ ] Decision tree (if present) is concise (< 200 tokens)

## Progressive Disclosure Verification

- [ ] References are contextual (appear where concepts are discussed, not just at end)
- [ ] Agents can identify WHICH KB doc to load for WHICH task
- [ ] Section-level granularity allows jumping to exact content needed
- [ ] Conditional loading guidance provided (if skill has multiple use cases)
- [ ] No requirement to load all KB docs upfront (selective on-demand loading)

## Final Validation

### Critical Issues (Must fix before completion)

_List any critical issues found:_

-
-
-

### Warnings (Should address but not blocking)

_List any warnings or improvement areas:_

-
-
-

### Integration Quality Score

Calculate overall quality:

- Input Validation: ___/5 checks passed
- Structure Analysis: ___/6 checks passed
- KB Analysis: ___/7 checks passed
- Relevance Mapping: ___/8 checks passed
- Reference Block Quality: ___/8 checks passed
- SKILL.md Modifications: ___/10 checks passed
- Integration Report: ___/11 checks passed
- Token Efficiency: ___/5 checks passed
- Progressive Disclosure: ___/5 checks passed

**Total: ___/65 checks passed (___ %)**

**Target: 90% or higher (59/65 checks) for production-ready integration**

### Sign-off

- [ ] All critical issues resolved
- [ ] Integration quality score ≥ 90%
- [ ] SKILL.md renders correctly in preview
- [ ] Integration report reviewed and approved
- [ ] Backup file preserved for rollback if needed

**Integration validated by:** _______________
**Date:** _______________
**Notes:** _______________
