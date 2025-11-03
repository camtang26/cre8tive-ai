# Quality Validation Report Template

This template generates the comprehensive quality validation report after skill creation is complete.

## Report Structure

```markdown
# Quality Validation Report

**Skill Name:** {{skill_name}}
**Skill Type:** {{skill_type}}
**Generated:** {{date}}
**Validated By:** {{user_name}}

---

## Executive Summary

✅ **SKILL READY FOR DEPLOYMENT**

All quality gates passed. Skill meets official Anthropic requirements and passed comprehensive testing across multiple Claude models.

---

## Skill Classification

**Type:** {{skill_type}}
- Type 1: Procedural/Discipline skill
- Type 2: Domain expertise skill with KB references

**Rationale:** {{classification_rationale}}

**Approach Used:**
- Research conducted: {{research_enabled}}
- KB files created: {{kb_file_count}} (Type 2 only)
- Test scenarios: {{test_scenario_count}}

---

## Official Anthropic Requirements

### Structure Requirements

✅ **YAML Frontmatter:** Valid and complete
  - Name: `{{skill_name}}` ({{name_length}}/64 characters)
  - Description: {{description_length}}/1024 characters, third person ✓

✅ **SKILL.md Line Count:** {{skill_md_line_count}}/500 lines
  - Hard limit: < 500 lines ✓
  - Actual: {{skill_md_line_count}} lines

✅ **Path Conventions:**
  - All paths use forward slashes ✓
  - No Windows-style paths ✓
  - Relative paths from SKILL.md root ✓

### Content Requirements

✅ **Overview Section:** Clear and concise
  - Purpose explained ✓
  - When to use vs alternatives ✓

✅ **When to Use Section:** Specific triggers present
  - Trigger scenarios documented ✓
  - Keywords included ✓
  - When NOT to use documented ✓

✅ **Workflow/Process:** Documented with steps
  - Clear numbered steps ✓
  - Action-oriented ✓

✅ **Examples:** Concrete and complete
  - Minimum 3 examples required ✓
  - Actual: {{example_count}} examples
  - Common case ✓
  - Edge case ✓
  - Anti-pattern ✓

### Progressive Disclosure (Type 2 Only)

{{if skill_type == "type2"}}
✅ **References One Level Deep:** All references in reference/ directory
  - Directory structure correct ✓
  - All files one level from SKILL.md ✓

✅ **KB Reference Pointers:** Token limits met
  - Individual pointers: ≤20 words each ✓
  - Total Reference Materials section: {{reference_section_tokens}}/150 tokens ✓

✅ **KB Total Size:** {{total_kb_tokens}}k/40k tokens
  - Reference file count: {{kb_file_count}}
  - Average per file: {{avg_kb_per_file}}k tokens
  - All within limits ✓
{{endif}}

---

## Testing Results

### Test Scenarios

**Total Scenarios:** {{test_scenario_count}} ({{test_scenario_count_min}}-{{test_scenario_count_max}} required)

{{for each test_scenario}}
#### Scenario {{scenario_number}}: {{scenario_name}}

**Type:** {{scenario_type}} (Pressure/Implementation)

**Baseline Result (WITHOUT skill):**
- Status: {{baseline_status}} (Pass/Fail/Partial)
- Key findings: {{baseline_findings}}

**Skill-Enabled Result (WITH skill):**
- Status: {{skill_enabled_status}} (Pass/Fail)
- Improvements: {{improvements_vs_baseline}}
- User validation: {{user_validation_status}}

**Outcome:** ✅ PASS / ❌ FAIL
{{endfor}}

**Overall Test Success Rate:** {{test_success_rate}}% (100% required)

### Iteration Summary

**Total Iterations:** {{current_iteration}}

{{for each iteration}}
**Iteration {{iteration_number}}:**
- Gaps identified: {{gaps}}
- Changes made: {{changes}}
- Research conducted: {{research_conducted}} (Type 2)
{{endfor}}

### Multi-Model Testing

**Models Tested:** Haiku, Sonnet, Opus (official requirement)

✅ **Claude 3 Haiku:**
  - Test scenarios run: 2 (representative sample)
  - Result: {{haiku_result}} (Pass/Fail)
  - Notes: {{haiku_notes}}

✅ **Claude 3.5 Sonnet:**
  - Test scenarios run: All {{test_scenario_count}}
  - Result: {{sonnet_result}} (Pass/Fail)
  - Notes: Validated throughout workflow

✅ **Claude Opus 4:**
  - Test scenarios run: 2 (representative sample)
  - Result: {{opus_result}} (Pass/Fail)
  - Notes: {{opus_notes}}

**Cross-Model Compatibility:** ✅ Passes on all models

**Adjustments Made:** {{multi_model_adjustments}}

---

## Description Quality (CSO - Claude Search Optimization)

**Formula Applied:** [ACTION] [WHAT] [SPECIFICS]. Use when [TRIGGERS] or user mentions [KEYWORDS].

**Generated Description:**
```
{{skill_description}}
```

**Quality Criteria:**

✅ **Action Verb:** Front-loaded ✓
✅ **What it does:** Clear and specific ✓
✅ **When to use:** Explicit triggers ✓
✅ **Keywords:** Relevant and discoverable ✓
✅ **Third person:** Proper tone ✓
✅ **Length:** {{description_length}}/1024 characters ✓

**Keyword Coverage:**
- Domain terms: {{domain_keywords}}
- Trigger phrases: {{trigger_phrases}}
- Tool/framework names: {{tool_names}}

---

## Knowledge Base Analysis (Type 2 Only)

{{if skill_type == "type2"}}

### Research Conducted

**Research Areas:** {{research_area_count}}

{{for each research_area}}
**Area {{area_number}}: {{area_name}}**
- Rationale: {{area_rationale}}
- Sources researched: {{sources}}
- Raw research tokens: {{raw_tokens}}k
- Distilled tokens: {{distilled_tokens}}k
- Compression ratio: {{compression_ratio}}%
{{endfor}}

**Total Research:**
- Raw input: {{total_raw_research_tokens}}k tokens
- Distilled output: {{total_distilled_tokens}}k tokens
- Overall compression: {{overall_compression}}%

### KB File Structure

**Reference Files Created:** {{kb_file_count}}

{{for each kb_file}}
**{{kb_filename}}** ({{kb_file_tokens}}k tokens)
- Content: {{kb_file_description}}
- Sections: {{kb_file_section_count}}
- Table of contents: {{has_toc}} (required if >100 lines)
{{endfor}}

### Distillation Quality

**Distillation Approach:**
- Patterns extracted: {{patterns_count}}
- Gotchas documented: {{gotchas_count}}
- Anti-patterns identified: {{anti_patterns_count}}
- Advanced techniques: {{advanced_techniques_count}}
- Examples included: {{kb_examples_count}}

**Content Removed:**
- Basics Claude already knows ✓
- Redundant information ✓
- Tutorial prose ✓
- Comprehensive parameter lists ✓

{{endif}}

---

## Type-Specific Validation

{{if skill_type == "type1"}}
### Type 1 (Procedural/Discipline) Checks

✅ **Rationalization Table:** Present and comprehensive
  - Entries: {{rationalization_count}}
  - From baseline testing: ✓
  - Counter-arguments included: ✓

✅ **Red Flags List:** Clear warning signs
  - Warning signs documented: {{red_flag_count}}
  - From baseline testing: ✓
  - Corrective action specified: ✓

✅ **Pressure Testing:** Comprehensive
  - Combined pressures tested: ✓
  - Time pressure: ✓
  - Cost pressure: ✓
  - Authority pressure: ✓
  - Compliance verified: ✓

{{endif}}

{{if skill_type == "type2"}}
### Type 2 (Domain Expertise) Checks

✅ **Premium vs Basic Guidance:** Clear distinction
  - When to use domain tool: ✓
  - When alternatives suffice: ✓

✅ **Quality Criteria:** Subjective validation enabled
  - Look/feel criteria: ✓
  - Performance criteria: ✓
  - User can assess: ✓

✅ **Anti-Patterns:** From baseline failures
  - Count: {{anti_pattern_count}}
  - Based on actual failures: ✓
  - Solutions provided: ✓

✅ **Implementation Testing:** Real-world scenarios
  - Complex use cases: ✓
  - Objective validation: ✓
  - Subjective validation: ✓
  - Chrome DevTools used: ✓

{{endif}}

---

## Files Created

**Skill Location:** {{save_location}}/{{skill_name}}/

```
{{skill_name}}/
├── SKILL.md ({{skill_md_line_count}} lines)
{{if skill_type == "type2"}}
├── reference/
{{for each kb_file}}
│   ├── {{kb_filename}} ({{kb_file_tokens}}k tokens)
{{endfor}}
{{endif}}
├── tests/
│   └── test-scenarios.md
└── quality-validation-report.md (this file)
```

**Total Package Size:**
- SKILL.md: {{skill_md_tokens}}k tokens
{{if skill_type == "type2"}}
- KB references: {{total_kb_tokens}}k tokens
{{endif}}
- Documentation: {{documentation_tokens}}k tokens
- **Grand Total: {{grand_total_tokens}}k tokens**

---

## Compliance Checklist

### Official Requirements ✅

- [ ] ✅ YAML frontmatter valid
- [ ] ✅ Name ≤64 characters
- [ ] ✅ Description ≤1024 characters, third person
- [ ] ✅ SKILL.md <500 lines
- [ ] ✅ Forward slashes in paths
- [ ] ✅ Examples present (min 3)
- [ ] ✅ Clear workflow/process
- [ ] ✅ When to use section

{{if skill_type == "type2"}}
### Progressive Disclosure (Type 2) ✅

- [ ] ✅ References one level deep
- [ ] ✅ KB pointers ≤150 tokens total
- [ ] ✅ Each pointer ≤20 words
- [ ] ✅ Total KB ≤40k tokens
- [ ] ✅ No summaries in pointers
{{endif}}

### Testing ✅

- [ ] ✅ {{test_scenario_count}} scenarios defined
- [ ] ✅ Baseline testing complete
- [ ] ✅ All scenarios pass with skill
- [ ] ✅ Multi-model tested (Haiku, Sonnet, Opus)
- [ ] ✅ User approval granted

---

## Recommendations

### Immediate Next Steps

1. ✅ **Skill is ready for use** - Can be used in production immediately
2. 🧪 **Real-world testing** - Use in actual projects, gather feedback
3. 🔄 **Iterate based on usage** - Skills improve through real usage

{{if save_location == "project"}}
4. 📝 **Commit to git** - Share with team
   ```bash
   git add .claude/skills/{{skill_name}}
   git commit -m "Add {{skill_name}} skill"
   git push
   ```
{{endif}}

### Future Improvements

{{if improvement_suggestions}}
- {{improvement_suggestion_1}}
- {{improvement_suggestion_2}}
{{endif}}

### Maintenance

- Review skill after 10-20 uses in real scenarios
- Update based on new failure patterns discovered
- Add examples for common edge cases encountered
- Expand KB if new knowledge areas identified (Type 2)

---

## Sign-Off

**Created By:** {{user_name}}
**Validated:** {{date}}
**Status:** ✅ APPROVED FOR DEPLOYMENT

**Next Review Date:** {{next_review_date}} (30 days from creation)

---

*This skill was created using the Universal Skill Creation Workflow (create-skill v2.0.0) with test-driven development methodology and official Anthropic compliance validation.*
```

## Using This Template

1. Replace all {{variables}} with actual values from workflow execution
2. Include/exclude Type 2 sections based on skill_type
3. Iterate through lists (test scenarios, KB files, etc.) as needed
4. Generate final report in step 13 of workflow
5. Save to skill directory as quality-validation-report.md
