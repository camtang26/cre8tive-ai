# Create Simple Skill - Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {workflows_path}/create-simple-skill/workflow.yaml</critical>
<critical>Study the Claude Skills documentation: {project-root}/docs/Claude-skills-DR.md</critical>
<critical>Communicate in {communication_language} throughout the skill creation process</critical>

<workflow>

<step n="0" goal="Load reference materials and understand skill anatomy">
<action>Load Claude Skills comprehensive research: Read({project-root}/docs/Claude-skills-DR.md)</action>
<action>Load description optimization guide: {description_optimization_guide}</action>
<action>Load token budgets guide: {token_budgets_guide}</action>
<action>Load best practices guide: {best_practices_guide}</action>

<note>Claude Skills DR (1676 lines) provides comprehensive deep dive with 10 major sections</note>
<note>Covers: architecture, discovery, patterns, examples, best practices, anti-patterns, platform differences</note>
<note>Skill Factory guides contain critical patterns for creating effective skills that Claude will actually discover and use</note>
<note>Pay special attention to: description optimization guide covers trigger keywords, token budgets guide covers efficiency, best practices covers overall quality</note>
</step>

<step n="1" goal="Discover the skill's domain and purpose through conversation">
<action>Engage {user_name} in natural discovery conversation about the skill they want to create</action>

<ask>What domain or workflow do you want to create a skill for?</ask>
<note>Examples: financial modeling, debugging process, brand guidelines, testing patterns, API usage, etc.</note>

<action>Guide the conversation to understand:</action>
<action>1. What specific problem does this skill solve?</action>
<action>2. What tasks will Claude perform when using this skill?</action>
<action>3. Who is the target user? (developers, analysts, designers, etc.)</action>
<action>4. What makes this knowledge special/non-obvious?</action>
<action>5. What are common mistakes people make in this domain?</action>

<action>Store domain understanding as {{skill_domain}}</action>

<template-output>domain_discovery</template-output>
</step>

<step n="2" goal="Research existing skills and domain best practices">
<critical>This step offers two approaches based on skill complexity - let user choose</critical>

<ask>Which research approach should we use?

**Option A: Manual Research** (Simple Skills)
- Best for: Familiar domain, narrow scope, quick turnaround
- Time: 30-60 minutes
- Output: 5-10 examples, basic best practices
- [Recommended if you know the domain well]

**Option B: Deep Subagent Research** (Complex Skills)
- Best for: Comprehensive KB needed, unfamiliar domain, multiple sub-topics
- Time: 1 hour setup + 30-45 min parallel execution + 1 hour integration
- Output: 10 research reports (~60,000 lines), permanent knowledge base
- [Recommended for new domains requiring deep expertise]

Choose: [A] Manual or [B] Deep Subagent</ask>

<!-- ============================================================================ -->
<!-- OPTION A: MANUAL RESEARCH (Current simple approach)                         -->
<!-- ============================================================================ -->

<check if="option A">
<action>Manual research approach selected - lightweight and fast</action>

<action if="{mcp_integration.use_archon_for_research}">Use Archon MCP to search knowledge base for related patterns</action>
<action if="{mcp_integration.use_context7_for_examples}">Use Context7 MCP to find relevant code examples and API docs</action>

<action>Search for existing skills in common locations:</action>
<action>- ~/.claude/skills/ (user's personal skills)</action>
<action>- .claude/skills/ (project skills)</action>
<action>- ~/.claude/plugins/marketplaces/ (installed skill plugins)</action>

<action>Analyze findings:</action>
<action>1. Does a similar skill already exist? (If yes, consider if new skill adds unique value)</action>
<action>2. What related skills should we reference? (Store as {{skill_references}})</action>
<action>3. What patterns/conventions should we follow?</action>
<action>4. What gaps exist that this skill can fill?</action>

<action>Conduct domain research:</action>
<action>- Web search for best practices</action>
<action>- Query Archon KB if domain has coverage</action>
<action>- Extract 5-10 key examples</action>
<action>- Document common anti-patterns</action>

<template-output>research_findings</template-output>
</check>

<!-- ============================================================================ -->
<!-- OPTION B: DEEP SUBAGENT RESEARCH (New comprehensive approach)               -->
<!-- ============================================================================ -->

<check if="option B">
<critical>Deep subagent research - spawns research agents in batches (5 max per batch to avoid API rate limits)</critical>

<!-- Sub-step 2B.1: Define Research Areas -->
<action>Step 2B.1: Define 5-10 Hyper-Specific Research Areas</action>

<note>Each research area becomes a separate subagent task executing in parallel</note>

<ask>Based on {{skill_domain}}, define 5-10 research areas.

For each research area, specify:

**Research Area**: [Topic name]

**Coverage Goals**:
- [What aspect 1 to cover]
- [What aspect 2 to cover]
- [What aspect 3 to cover]
- [Anti-patterns and common mistakes]

**Output**: [filename].md

---

**Example for universal skill creation methodology**:

**Research Area**: Universal Quality Standards

**Coverage Goals**:
- Quality dimensions that work across software, creative, and AI domains
- Objective vs subjective evaluation criteria
- Common quality frameworks and rubrics
- Anti-patterns and quality failures
- Cross-domain validation patterns

**Output**: quality-standards-universal.md

---

**Research Area**: Process Documentation Patterns

**Coverage Goals**:
- Step-by-step process documentation (numbered, flowchart, decision tree)
- Conditional logic documentation (if/then, state machines)
- Real-world examples from excellent documentation
- Anti-patterns in process docs (ambiguity, missing edge cases)

**Output**: process-documentation-patterns.md

---

**Guidelines**:
- Focus on WHAT to research (coverage goals), not HOW to research (tools/depth)
- Trust the bmm-knowledge-base-researcher agents to choose appropriate tools adaptively
- Agents will determine depth needed for comprehensive coverage
- Avoid prescribing specific tools, repo counts, or depth targets

Provide your 5-10 research areas:</ask>

<action>Store research task definitions as {{research_tasks}}</action>

<!-- Sub-step 2B.2: Spawn Batch 1 Research Subagents -->
<action>Step 2B.2: Spawn Batch 1 Research Subagents (Maximum 5)</action>

<critical>BATCH EXECUTION: Spawn maximum 5 subagents at a time to avoid API concurrency rate limits</critical>

<action>Calculate batch size:</action>
<action>- Total research tasks: {{research_tasks.length}}</action>
<action>- Batch 1: First 5 tasks (or fewer if total <5)</action>
<action>- Batch 2: Remaining tasks (spawned after Batch 1 checkpoint)</action>

<action>For EACH research task in {{research_tasks}}, prepare invocation prompt based on type:</action>

<!-- CODE-FOCUSED RESEARCH TEMPLATE -->
<template name="code_research">
Task (bmm-knowledge-base-researcher):
  Description: Research {{research_task.focus}}
  Prompt: |
    Research Area: {{research_task.focus}}

    Research Type: CODE-FOCUSED
    Domain Context: {{skill_domain}}

    Coverage Goals:
    - Real-world code patterns and implementations
    - Production-quality examples from maintained repositories
    - Pattern frequency analysis (consensus patterns)
    - Official documentation and canonical examples
    - Anti-patterns and common mistakes

    Use adaptive multi-source research strategy (reference-material-research skill):
    - Assess Archon KB coverage first (adapt prioritization)
    - GitHub clone strategy for real production code
    - Context7 for official framework/library documentation
    - Perplexity reasoning for theoretical understanding

    Determine appropriate depth for comprehensive coverage.
    Quality and coverage over quantity.

    Output: /knowledge-base/{{kb_domain_name}}/{{research_task.output_filename}}
</template>

<!-- VISUAL-FOCUSED RESEARCH TEMPLATE -->
<template name="visual_research">
Task (bmm-knowledge-base-researcher):
  Description: Research {{research_task.focus}}
  Prompt: |
    Research Area: {{research_task.focus}}

    Research Type: VISUAL-FOCUSED
    Domain Context: {{skill_domain}}

    Coverage Goals:
    - Visual design patterns and aesthetics
    - Real production site examples (curated, unique, diverse)
    - Color palettes, typography systems, spacing patterns
    - Gradient usage, animation patterns, micro-interactions
    - Component-level visual documentation
    - Anti-patterns and visual mistakes to avoid

    CRITICAL: Maximum 3 sites (enforce 3-site rule from visual-design-research skill)

    Use adaptive multi-source research strategy:
    - Chrome DevTools MCP for visual analysis (PRIMARY)
    - Multi-section screenshots (NOT fullPage)
    - All 6 analysis scripts (color, typography, spacing, gradients, animation, components)
    - Archon KB for design theory
    - Web research for exemplar discovery

    Determine appropriate depth for comprehensive coverage.
    Quality and uniqueness over quantity.

    Output: /knowledge-base/{{kb_domain_name}}/{{research_task.output_filename}}
</template>

<!-- THEORY-FOCUSED RESEARCH TEMPLATE -->
<template name="theory_research">
Task (bmm-knowledge-base-researcher):
  Description: Research {{research_task.focus}}
  Prompt: |
    Research Area: {{research_task.focus}}

    Research Type: THEORY-FOCUSED
    Domain Context: {{skill_domain}}

    Coverage Goals:
    - Theoretical foundations and principles
    - Why patterns work (not just what patterns exist)
    - Comparative analysis (approach A vs B, trade-offs)
    - Decision frameworks (when to use each approach)
    - Research-backed insights and expert analysis
    - Synthesis of multiple theoretical perspectives

    Use adaptive multi-source research strategy:
    - Perplexity reasoning mode (PRIMARY for theory)
    - Archon KB for existing theoretical foundations
    - Web research for authority sources and research papers
    - Synthesize insights into coherent framework

    Determine appropriate depth for comprehensive coverage.
    Explain principles and WHY, not just patterns and WHAT.

    Output: /knowledge-base/{{kb_domain_name}}/{{research_task.output_filename}}
</template>

<!-- DOCUMENTATION-FOCUSED RESEARCH TEMPLATE -->
<template name="docs_research">
Task (bmm-knowledge-base-researcher):
  Description: Research {{research_task.focus}}
  Prompt: |
    Research Area: {{research_task.focus}}

    Research Type: DOCUMENTATION-FOCUSED
    Domain Context: {{skill_domain}}

    Coverage Goals:
    - Official documentation and canonical patterns
    - Real-world usage patterns from production code
    - Version-specific features and migration guides
    - Best practices from authoritative sources
    - Common pitfalls and gotchas
    - Cross-reference official docs with actual usage

    Use adaptive multi-source research strategy:
    - Archon KB for existing documentation (adapt based on coverage)
    - Context7 for official library/framework documentation
    - GitHub clone for real production usage patterns
    - Cross-validation between official docs and reality

    Determine appropriate depth for comprehensive coverage.
    Balance canonical patterns with real-world usage.

    Output: /knowledge-base/{{kb_domain_name}}/{{research_task.output_filename}}
</template>

<action>Generate complete prompts for BATCH 1 (first 5 research tasks) using appropriate templates</action>

<critical>SPAWN BATCH 1 ONLY (Maximum 5 subagents)</critical>
<action>Use Task tool to spawn bmm-knowledge-base-researcher agents for Batch 1:</action>
<action>- Single message with multiple Task invocations (one per task in Batch 1)</action>
<action>- Batch 1 agents execute simultaneously (max 5 at once)</action>
<action>- Expected wall time: 30-45 minutes per batch</action>

<note>Display to user: "Batch 1 spawned ({batch_1_count} agents). Estimated completion: 30-45 minutes. Batch 2 will spawn after checkpoint review."</note>

<note>While Batch 1 executes, wait for completion before proceeding to Step 2B.3</note>

<!-- Sub-step 2B.3: Checkpoint Review and Spawn Batch 2 -->
<action>Step 2B.3: Monitor Batch 1 and Spawn Batch 2</action>

<action>Wait for Batch 1 completion (all agents in batch finish)</action>

<action>Monitor subagent execution (autonomous - no intervention needed)</action>

<note>Typical completion time:
- Quick research: 15-20 minutes
- Moderate research: 20-30 minutes
- Deep research: 30-45 minutes
Wall time = longest task in batch</note>

<checkpoint>OPTIONAL: Review Batch 1 Results Before Batch 2</checkpoint>

<ask if="user wants to review">Batch 1 complete! Quick review:
{Display brief summary of each Batch 1 agent: status, output size, topic}

Proceed with Batch 2? [y/n]
Or adjust approach? [describe changes]</ask>

<action if="remaining tasks exist">Generate prompts for BATCH 2 (remaining research tasks)</action>
<action if="remaining tasks exist">Spawn Batch 2 agents using same process as Batch 1</action>
<action if="remaining tasks exist">Display: "Batch 2 spawned ({batch_2_count} agents). Estimated completion: 30-45 minutes."</action>

<action if="remaining tasks exist">Wait for Batch 2 completion</action>

<note if="no remaining tasks">All research complete (fewer than 5 total tasks - no Batch 2 needed)</note>

<!-- Sub-step 2B.4: Aggregate Findings -->
<action>Step 2B.4: Aggregate Research Findings</action>

<action>Receive research reports from all subagents</action>

<note>Expected outputs:
- Code research: ~5,000-10,000 lines each (50-100+ examples)
- Visual research: ~15,000 lines (3 sites × ~5k lines each)
- Theory research: ~3,000-4,000 lines (synthesis + foundations)
- Docs research: ~5,000 lines (official + real-world)

Total: ~60,000 lines across 10 topics (~30,000-40,000 tokens compressed)</note>

<action>Validate research quality:</action>
<action>- Each report follows structured template</action>
<action>- Code examples syntactically valid</action>
<action>- Visual research limited to 3 sites (not more)</action>
<action>- Sources cited for all claims</action>
<action>- Confidence assessments provided</action>

<!-- Sub-step 2B.5: Store in Knowledge Base -->
<action>Step 2B.5: Store Research in Permanent Knowledge Base</action>

<ask>What domain name should we use for KB storage?
(e.g., "visual-design", "python-testing", "react-patterns")
Domain: _______</ask>

<action>Store domain name as {{kb_domain_name}}</action>

<action>Create knowledge base directory structure:</action>
<action>
mkdir -p /knowledge-base/{{kb_domain_name}}/screenshots
</action>

<action>Move all research documents to KB:</action>
<action>
# Move all .md research outputs
mv [research-output-1].md /knowledge-base/{{kb_domain_name}}/
mv [research-output-2].md /knowledge-base/{{kb_domain_name}}/
# ... (all research reports)

# Move screenshots (if visual research conducted)
mv /tmp/research/*.png /knowledge-base/{{kb_domain_name}}/screenshots/
</action>

<action>Verify KB storage:</action>
<action>
ls -lh /knowledge-base/{{kb_domain_name}}/
# Should show: All research .md files, screenshots/ directory
</action>

<note>This KB is permanent storage - future skills can reference these docs!</note>

<action>Store KB path as {{knowledge_base_path}} for later reference in skill</action>

<!-- Sub-step 2B.6: Create Skill References -->
<action>Step 2B.6: Prepare KB References for Skill</action>

<action>Generate "See Also" section content for later use:</action>
<example>
## See Also

For deep dives into specific topics:

- `/knowledge-base/{{kb_domain_name}}/[research-doc-1].md` - [X]+ examples
- `/knowledge-base/{{kb_domain_name}}/[research-doc-2].md` - [Y]+ patterns
- `/knowledge-base/{{kb_domain_name}}/[research-doc-3].md` - [Z] sites analyzed
... (all KB documents)
</example>

<action>Store KB references as {{skill_references}}</action>

<template-output>deep_research_complete</template-output>

<note>✅ Deep research complete! Comprehensive knowledge base built with 60,000+ lines of curated material.</note>

</check>

<!-- ============================================================================ -->
<!-- COMMON CONCLUSION (Both paths merge here)                                   -->
<!-- ============================================================================ -->

<action>Research phase complete - proceeding to description optimization</action>
<note>Findings stored in {{skill_references}} for use in Steps 3-8</note>

</step>

<step n="3" goal="Craft an optimized description with maximum trigger coverage">
<critical>The description is THE MOST IMPORTANT element - it determines if Claude will ever discover this skill</critical>

<action>Review description optimization patterns from {description_optimization_guide}</action>

<action>Create description following this proven formula:</action>
<example>
**Formula**: [ACTION VERB] [WHAT IT DOES] [KEY SPECIFICS]. Use when [TRIGGER SCENARIOS] or user mentions [KEYWORDS].

**Good Example**:
"Apply 4-phase debugging process (reproduce, isolate, diagnose, verify) systematically. Use when bugs are hard to track down, production issues occur, or user mentions debugging, troubleshooting, root causes."

**Bad Example**:
"Helps with debugging"
</example>

<action>Generate description that includes:</action>
<action>1. **Front-loaded action verbs** - Start with what the skill DOES (Apply, Enforce, Create, Guide, etc.)</action>
<action>2. **Specific capabilities** - List concrete abilities, not vague promises</action>
<action>3. **Trigger scenarios** - Explicit "Use when..." statements</action>
<action>4. **Domain keywords** - Terms users will naturally mention</action>
<action>5. **Synonyms** - Alternative phrasings for same concepts</action>

<action>Optimize for length:</action>
<action>- **Target**: {target_description_chars} characters (sweet spot for discovery)</action>
<action>- **Maximum**: {max_description_chars} characters (hard limit)</action>
<action>- **Minimum useful**: 50 characters</action>

<action>Generate {{skill_triggers}} list - all scenarios where this skill should activate</action>

<elicit-required>
<context>Skill domain: {{skill_domain}}</context>
<context>Target: Optimized description with maximum trigger coverage</context>
<options>
1. Suggest 3-5 trigger keywords from domain
2. Suggest 2-3 common problem scenarios
3. Suggest alternative phrasings/synonyms
4. Suggest related workflow verbs (debugging, testing, creating, etc.)
5. Generate complete description following formula
</options>
</elicit-required>

<action>Store final optimized description as {{skill_description}}</action>
<action>Calculate trigger coverage score (0-100) based on keyword richness → {{trigger_coverage_score}}</action>

<template-output>optimized_description</template-output>
</step>

<step n="4" goal="Design skill structure and determine skill name">
<action>Determine skill name following conventions:</action>
<action>- lowercase-with-hyphens (e.g., test-driven-development, brand-guidelines)</action>
<action>- Max 64 characters</action>
<action>- Descriptive but concise</action>
<action>- No special characters except hyphens</action>

<ask>What should we name this skill? (suggest based on domain if user unsure)</ask>
<action>Store as {{skill_name}}</action>

<action>Plan skill structure sections:</action>
<example>
## Recommended Structure for Simple Skills:
1. **Overview** - What this skill does (2-3 sentences)
2. **When to Use** - Specific scenarios (bulleted list)
3. **Workflow/Process** - Step-by-step instructions
4. **Examples** - Concrete code/usage examples (minimum {min_examples_count})
5. **Guidelines** - Best practices and anti-patterns
6. **See Also** - Related skills (if any exist)
</example>

<action>Determine output location:</action>
<ask>Where should I save this skill?
1. Project skills: {project_skills_path}
2. Personal Claude Code skills: {claude_code_skills_path}
3. Custom location: Specify path
[Default: 1]
</ask>
<action>Store chosen path as {{skill_output_path}}</action>

<template-output>skill_structure_plan</template-output>
</step>

<step n="5" goal="Generate concrete, runnable examples">
<critical>Skills without examples are rarely used effectively - examples are MANDATORY</critical>

<action>Create minimum {min_examples_count} concrete examples that demonstrate:</action>
<action>1. **Common use case** - Most frequent scenario</action>
<action>2. **Edge case** - Non-obvious situation</action>
<action>3. **Anti-pattern** - What NOT to do (with explanation why)</action>

<action if="{mcp_integration.use_context7_for_examples}">Query Context7 MCP for code examples in relevant frameworks</action>

<action>Ensure examples are:</action>
<action>- **Concrete** - Real code, not pseudocode</action>
<action>- **Runnable** - Could be copy-pasted and work</action>
<action>- **Annotated** - Comments explain WHY, not just WHAT</action>
<action>- **Diverse** - Cover different aspects of the skill</action>

<elicit-required>
<context>Skill domain: {{skill_domain}}</context>
<context>Need: Concrete, runnable examples</context>
<options>
1. Generate common use case example
2. Generate edge case example
3. Generate anti-pattern example (what NOT to do)
4. Generate before/after comparison
5. Generate integration example (using with other skills)
</options>
</elicit-required>

<action>Store examples as {{skill_examples}}</action>

<template-output>skill_examples</template-output>
</step>

<step n="6" goal="Write complete SKILL.md with all sections">
<action>Load skill template: {skill_template}</action>

<action>Generate complete SKILL.md with:</action>
<action>1. **YAML Frontmatter**</action>
<example>
---
name: {{skill_name}}
description: {{skill_description}}
version: {{skill_version}}
---
</example>

<action>2. **Skill Title and Overview**</action>
<action>3. **When to Use section** - Explicit trigger scenarios</action>
<action>4. **Workflow/Process section** - Step-by-step instructions</action>
<action>5. **Examples section** - All {{skill_examples}} integrated</action>
<action>6. **Guidelines section** - Best practices + anti-patterns</action>
<action>7. **See Also section** - References to {{skill_references}} (if any)</action>

<action>Optimize for token efficiency:</action>
<action>- Use clear, concise language</action>
<action>- Avoid redundancy</action>
<action>- Front-load most important information</action>
<action>- Target: <500 tokens for common skills, <2000 for complex</action>

<action>Calculate estimated token count → {{token_count_estimate}}</action>

<template-output>complete_skill_markdown</template-output>
</step>

<step n="7" goal="Quality validation and scoring">
<action>Load validation checklist: {validation_checklist}</action>

<action>Score the skill across 7 dimensions (0-100 each):</action>

<action>**1. Clarity** (Are instructions unambiguous?)</action>
<check if="vague language or unclear steps">Reduce score, provide specific improvements</check>

<action>**2. Examples** (Concrete, runnable code present?)</action>
<check if="fewer than {min_examples_count} examples">Reduce score, add more examples</check>

<action>**3. Triggers** (Description optimized for discovery?)</action>
<check if="trigger_coverage_score < 70">Reduce score, enhance description</check>

<action>**4. Token Efficiency** (Progressive disclosure, concise writing?)</action>
<check if="token_count_estimate > 500 for simple skill">Reduce score, recommend multi-file structure</check>

<action>**5. Testability** (Can effectiveness be validated?)</action>
<check if="no clear success criteria">Reduce score, add measurable outcomes</check>

<action>**6. Composability** (References other skills appropriately?)</action>
<check if="duplicates existing skill content">Reduce score, add references instead</check>

<action>**7. Completeness** (All required sections present?)</action>
<check if="missing critical sections">Reduce score, add missing content</check>

<action>Calculate overall quality score (average of 7 dimensions) → {{quality_score}}</action>

<check if="quality_score < {min_quality_score}">
<action>Report quality issues</action>
<action>Provide specific recommendations for improvement</action>
<ask>Should I iterate to improve quality? [y/n]</ask>
<check if="yes">
<goto step="6">Return to step 6 with improvement suggestions</goto>
</check>
</check>

<template-output>quality_report</template-output>
</step>

<step n="8" goal="Save skill to chosen location and provide next steps">
<action>Create output directory if it doesn't exist: {{skill_output_path}}/{{skill_name}}/</action>
<action>Save SKILL.md to: {{skill_output_path}}/{{skill_name}}/SKILL.md</action>

<action>Display completion summary:</action>
<example>
# ✅ Skill Created Successfully!

**Name**: {{skill_name}}
**Location**: {{skill_output_path}}/{{skill_name}}/SKILL.md
**Quality Score**: {{quality_score}}/100
**Estimated Tokens**: {{token_count_estimate}}

## Next Steps:
1. Test the skill with Claude to verify it triggers appropriately
2. Use the pressure-test-skill workflow to validate effectiveness
3. Consider creating additional documentation if token count is high
4. Share with team or submit to skill marketplace

## Testing the Skill:
Try asking Claude about scenarios that match these triggers:
{{skill_triggers}}

Claude should automatically load and use this skill.
</example>

<action>Offer additional workflows:</action>
<ask>Would you like to:
1. Pressure test this skill (recommended)
2. Create a multi-file version with extended docs
3. Package for distribution
4. Create another skill
5. Done
</ask>

<check if="option 1">
<invoke-workflow>{workflows_path}/pressure-test-skill/workflow.yaml</invoke-workflow>
</check>

<check if="option 2">
<invoke-workflow>{workflows_path}/create-multi-file-skill/workflow.yaml</invoke-workflow>
</check>

<check if="option 3">
<invoke-workflow>{workflows_path}/package-skill/workflow.yaml</invoke-workflow>
</check>

<check if="option 4">
<goto step="1">Start new skill creation</goto>
</check>
</step>

</workflow>

<llm final="true">
<mandate>Follow each step precisely - this workflow produces production-ready skills</mandate>
<mandate>The description (step 3) is CRITICAL - spend extra effort optimizing it</mandate>
<mandate>Examples (step 5) are MANDATORY - no skill without concrete, runnable examples</mandate>
<mandate>Quality score must be ≥{min_quality_score} before proceeding to save</mandate>
</llm>
