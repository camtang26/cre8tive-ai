# Skill Factory Workflows

## Available Workflows

### create-skill ⭐ Universal Skill Creation Workflow

**Path**: `bmad/bmb/skill-factory/workflows/create-skill/workflow.yaml`

Create production-ready Claude Skills with test-driven development methodology.

**Features:**
- **Type Classification**: Interactive assessment determines Type 1 (discipline/workflow) or Type 2 (domain expertise)
- **Deep Requirements Gathering (Step 0.5)**: Iterative questioning to understand your preferences, quality criteria, and context
- **Test-Driven Development**: Define test scenarios first, build skill to pass them
- **Automated Research (Type 2)**: Subagents conduct focused research and distill findings (Option A architecture)
- **Multi-Model Testing**: Optional compatibility testing across Haiku, Sonnet, Opus
- **Official Anthropic Compliance**: <500 lines, progressive disclosure, CSO-optimized descriptions

**Workflow:**
1. Type classification (Type 1 or Type 2)
2. Deep requirements gathering (iterative Q&A)
3. Test scenario definition (3-5 scenarios)
4. Baseline testing (without skill)
5. Research & distillation (Type 2 only - agents return refined output)
6. Description optimization
7. SKILL.md creation with examples
8. KB reference files (Type 2 only)
9. Testing with skill
10. Iterative refinement
11. Multi-model testing (optional)
12. Quality validation
13. Packaging & deployment

**Command**: Run via BMad Builder menu: `*create-skill`

**Output:**
- Type 1: SKILL.md + tests + validation report
- Type 2: SKILL.md + reference/*.md + tests + validation report

---

## Configuration

**Multi-Model Testing** (optional):
```yaml
# Set to false for fast iteration (Sonnet only)
multi_model_testing_required: false
models_to_test: ["sonnet"]

# Set to true for final validation before publishing
multi_model_testing_required: true
models_to_test: ["haiku", "sonnet", "opus"]
```

**Limits** (Anthropic requirements):
```yaml
skill_md_line_limit: 500
kb_reference_section_token_limit: 150
kb_reference_pointer_word_limit: 20
test_scenario_count_min: 3
test_scenario_count_max: 5
```

---

## Execution

When running the workflow:
1. LOAD `{project-root}/bmad/core/tasks/workflow.xml`
2. Pass the workflow path as 'workflow-config' parameter
3. Follow workflow.xml instructions EXACTLY
4. Save outputs after EACH step

---

## Quality Standards

All skills created by this workflow meet:
- **Anthropic Official Requirements**: <500 lines, third person, CSO-optimized
- **Progressive Disclosure**: Type 2 skills use reference/*.md for detailed content
- **Test-Driven**: All test scenarios must pass before deployment
- **Multi-Domain Support**: Tech, AI media production, GenAI research, and more
- **Token Efficiency**: Research distilled during synthesis (Option A architecture)
- **User-Aligned**: Step 0.5 ensures skill matches your specific preferences

---

## Version

**Skill Factory v2.0**
- Step 0.5: Deep Requirements Gathering (NEW)
- Option A: Research agents distill during synthesis (NEW)
- Variable cleanup: 0% bloat (NEW)
- Diverse domain support: Tech, AI Media, GenAI (NEW)
