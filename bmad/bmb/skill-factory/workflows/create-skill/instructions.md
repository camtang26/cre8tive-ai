# Universal Skill Creation Workflow - Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/bmb/skill-factory/workflows/create-skill/workflow.yaml</critical>
<critical>Communicate in {communication_language} throughout the workflow</critical>

<workflow>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 0: INITIALIZATION & TYPE DETECTION
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="0" goal="Skill purpose and type classification">
<action>Greet {user_name} and explain the workflow purpose</action>

<action>Ask user: Starting from scratch or cloning existing skill?
- Fresh start: Proceed with new skill creation
- Clone existing: Get path to existing skill, will adapt it
</action>

<check if="user_wants_to_clone">
  <action>Get path to existing skill to clone</action>
  <action>Store in {{clone_source}} variable</action>
  <action>Load existing SKILL.md to understand structure</action>
</check>

<action>Ask user for initial skill information:
- Skill name (kebab-case, e.g., "premium-gsap-animations")
- Brief description of skill purpose
- Store as {{skill_name}} and {{skill_description}}
</action>

<action>Load type assessment questions from: {templates.type_assessment}</action>

<action>Present interactive assessment to determine skill type:

**Question 1:** Is this skill primarily about:
a) Enforcing a workflow/process/discipline
b) Providing domain expertise and extensive reference material

**Question 2:** Will users need extensive reference documentation (10k+ tokens)?
- Yes: Likely Type 2
- No: Likely Type 1

**Question 3:** Are you an expert in this domain?
- Yes, I can document patterns from experience: Likely Type 1
- No, I'll need to research extensively: Likely Type 2

**Question 4:** Can Claude already do this but needs discipline reminders?
- Yes, just needs to remember/follow rules: Type 1
- No, Claude lacks knowledge in this area: Type 2
</action>

<action>Based on answers, determine skill type:
- Type 1 (Procedural/Discipline): Enforce workflows, prevent rationalization, maintain discipline
- Type 2 (Domain Expertise): Provide specialized knowledge with KB references
</action>

<action>Show classification result and rationale to user</action>
<ask>Do you agree with this classification? [yes/no/discuss]</ask>

<check if="user_disagrees">
  <action>Discuss classification with user</action>
  <action>User makes final decision on skill type</action>
</check>

<action>Set {{skill_type}} variable to "type1" or "type2"</action>
<action>Set configuration based on type:
- If Type 1: {{research_enabled}} = false, no KB needed
- If Type 2: {{research_enabled}} = true, KB references required
</action>

<action>Show workflow summary for chosen type:

**Type 1 Workflow:**
1. Define pressure test scenarios ({{test_scenario_count_min}}-{{test_scenario_count_max}})
2. Baseline testing without skill
3. Create SKILL.md with workflow + rationalization table
4. Test with skill present
5. Iterate until all tests pass
6. Multi-model testing
7. Package and deploy

**Type 2 Workflow:**
1. Define implementation test scenarios ({{test_scenario_count_min}}-{{test_scenario_count_max}})
2. Baseline testing without skill
3. Identify research areas from failures
4. Automated research + distillation
5. Create SKILL.md + KB references
6. Test with skill present
7. Iterate (research gaps, update, re-test)
8. Multi-model testing
9. Package and deploy
</action>

<template-output>type_classification_decision</template-output>

<action>Update workflow phase: {{workflow_phase}} = "requirements_gathering"</action>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 0.5: DEEP REQUIREMENTS GATHERING
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="0.5" goal="Deep requirements gathering through iterative questioning">

<action>Explain to {user_name}:
"Before we define test scenarios, I need to deeply understand your specific requirements, preferences, and context for this skill. I'll ask you a series of questions using multiple choice options - you can select from the options or provide your own answer. We'll continue until we're both confident I understand what you want."
</action>

<action>Analyze skill context to prepare first question set:
- Domain: Extract from {{skill_name}} and {{skill_description}}
- Skill type: {{skill_type}} (Type 1 or Type 2)
- Context clues: What kind of skill is this? (discipline/workflow, domain expertise, content/brand, technical implementation, etc.)
</action>

<action>Generate first question set:
- Based on domain analysis, identify 3-4 most important areas to understand
- Create questions that will reveal:
  * User's quality criteria (what makes this "good"?)
  * Preferences and style
  * Context and constraints
  * Anti-patterns and failure modes
  * Success indicators
- Frame questions with example options to help user recognize what they want
- Examples should be IN the questions (don't ask user to provide examples)
</action>

<loop name="iterative_questioning" until="mutual_satisfaction">

  <action>Present question set using AskUserQuestion tool:
  - 1-4 questions per iteration
  - Each question has 2-4 multiple choice options
  - Options include concrete examples when helpful ("Is it like X?" "More like Y?")
  - User always has "Other" option to provide custom answer
  - Use multiSelect if choices aren't mutually exclusive
  </action>

  <example>
  Question 1: "What context will this skill be used in?"
  - Professional/enterprise work environments
  - Personal projects and learning
  - Team collaboration scenarios
  - [User can select one or write custom answer]

  Question 2: "When you imagine a 'premium' implementation in this domain, what does it feel like?"
  - Smooth and polished, feels effortless
  - Fast and snappy, responsive to interaction
  - Carefully crafted, attention to detail
  - [User describes their own criteria]

  (These are illustrative - actual questions adapt to the specific skill domain)
  </example>

  <action>After receiving user responses:
  - Store all answers with full context
  - Analyze responses for:
    * Patterns in preferences
    * Areas that need deeper exploration
    * Contradictions or ambiguities to clarify
    * Gaps in understanding
  - Determine if follow-up questions needed for any area
  </action>

  <action>Synthesize current understanding and show to user:

  "Based on your answers, here's what I understand so far:

  **Core Context:**
  [Summary of domain, use cases, constraints]

  **Your Preferences:**
  [Style, approach, tone preferences identified]

  **Quality Criteria:**
  [What 'good' looks like based on responses]

  **Anti-Patterns:**
  [What to avoid based on responses]

  **Key Insights:**
  [Patterns or themes emerging from answers]
  "
  </action>

  <ask>Is this understanding accurate and complete?
  Options:
  - Yes, this captures it well → Proceed to satisfaction check
  - Mostly, but let me clarify [specific area] → Identify which parts to refine
  - No, you're missing the point → Ask user to explain the gap
  </ask>

  <check if="user_says_accurate_or_mostly">
    <ask>Do you feel I have enough context to create an excellent skill that matches your vision, or should I dig deeper?
    Options:
    - I'm satisfied with this depth → Exit loop, create requirements doc
    - Dig deeper into [specific area] → Generate targeted questions for that area
    - Ask a few more general questions → Generate next broad question set
    </ask>
  </check>

  <check if="user_wants_more_questions">
    <action>Generate next question set:
    - If targeting specific area: Deep dive questions on that topic
    - If general: Explore adjacent areas not yet covered
    - Continue adaptive questioning based on conversation flow
    </action>
    <action>Continue loop</action>
  </check>

  <check if="user_satisfied">
    <action>Exit loop</action>
  </check>

</loop>

<action>Generate comprehensive Requirements Context Document using template: {templates.requirements_template}</action>

<action>Structure document with following sections:

# Requirements Context Document
**Skill**: {{skill_name}}
**Type**: {{skill_type}}
**Date**: {{date}}
**Workflow**: Skill Factory v2.0

---

## Questions & Responses

[Record all questions asked and user responses for each question set]

### Question Set 1
**Q1**: [Question text]
**Response**: [User's answer]

[Continue for all questions...]

---

## Requirements Summary

### Domain Context
[What this skill is for, context from answers]
[Specific use cases mentioned]
[Environmental or situational constraints]

### User Preferences
**Style & Approach:**
[List preferences from answers]

**Tone & Communication:**
[How user prefers skill to guide/instruct]

**Technical Preferences:** (if applicable)
[Tools, frameworks, approaches user prefers]

### Quality Criteria

#### Objective Criteria (Measurable)
[Quantifiable success indicators from answers]

#### Subjective Criteria (Qualitative)
[Feel, style, quality aspects from answers]

### Anti-Patterns (What to Avoid)
[Failure modes, bad examples, things user dislikes]

### Success Indicators
[How to know if implementation is successful]

### Constraints & Context
[Performance, compatibility, style, environmental constraints]

### Domain-Specific Insights
[Unique context that emerged from questioning]
[Patterns, themes, unique aspects]

---

## Claude's Analysis

### Key Takeaways
[Most critical aspects that must be reflected in the skill]

### Themes & Patterns
[Recurring themes across user's responses]
[What matters most to the user]

### Implications for Skill Design
**For Test Scenarios:** [How requirements inform scenarios]
**For Research Areas (Type 2):** [How requirements guide research]
**For SKILL.md Content:** [How requirements shape skill structure]
**For Quality Validation:** [How to validate against user criteria]

---

## Document Metadata
- **Created**: {{date}}
- **Question Sets**: [Number]
- **Total Questions**: [Count]
- **User Satisfaction**: Approved
- **Next Workflow Phase**: testing_setup

</action>

<action>Show Requirements Context Document to {user_name}</action>

<ask>Review this requirements summary. Does it capture everything we discussed? [Approve/Refine]</ask>

<check if="user_wants_refinement">
  <action>Discuss what needs adjustment</action>
  <action>Update document</action>
  <action>Show revised version</action>
</check>

<action>Store Requirements Context Document in {{requirements_context}} variable</action>

<action>Save document to file for durability:
- Path: {{output_folder}}/skill-factory/{{skill_name}}/requirements-context.md
- Store path in {{requirements_document_path}}
- Document survives compacting and can be referenced throughout workflow
</action>

<action>Explain how requirements will be used:
"This context will guide:
- **Step 1**: Test scenarios reflecting YOUR quality criteria
- **Step 2**: Baseline validation against YOUR standards
- **Step 3-5** (Type 2): Research focused on YOUR specific needs
- **Step 6**: Description using YOUR domain language
- **Step 7**: SKILL.md with examples matching YOUR preferences
- **Step 13**: Validation against YOUR success indicators
"
</action>

<template-output>requirements_context_document</template-output>

<action>Update workflow phase: {{workflow_phase}} = "testing_setup"</action>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 1: TEST SCENARIO DEFINITION (RED Phase Start)
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="1" goal="Define test scenarios for validation">
<action>Explain test-driven approach: "We'll define test scenarios FIRST based on your requirements, then build the skill to pass them"</action>

<action>Reference requirements context from Step 0.5:
- Review {{requirements_context}} for quality criteria
- Test scenarios should validate user's specific preferences
- Use user's language and domain terminology from requirements
- Incorporate user's stated anti-patterns and success indicators
</action>

<check if="skill_type == 'type1'">
  <action>Load pressure scenario template: {templates.pressure_scenario}</action>

  <action>Explain Type 1 pressure testing:
  - Create scenarios that test rule compliance under stress
  - Combine multiple pressures: time + sunk cost + authority + exhaustion
  - Document how Claude rationalizes violations
  - Example: "Production is down ($5k/min loss), skip tests to fix faster?"
  </action>

  <action>Guide user to define {{test_scenario_count_min}}-{{test_scenario_count_max}} pressure scenarios aligned with requirements context:
  - Use pressures relevant to user's context from {{requirements_context}}
  - Incorporate anti-patterns identified in requirements
  - Reflect quality criteria and success indicators from requirements
  For each scenario:
  - Context/situation (what's happening?)
  - Pressures applied (time, cost, authority, exhaustion)
  - Violation temptation (what rule might be skipped?)
  - Expected behavior WITH skill (what should Claude do?)
  </action>

  <action>Store scenarios in {{test_scenarios}} list</action>

  <example>
  Scenario 1: "Urgent Production Bug"
  - Context: Production API failing, users can't login, $5k/min revenue loss
  - Pressures: Time (fix in 10 min), Cost ($5k/min), Authority (CEO demanding immediate fix)
  - Violation: Skip writing tests, deploy untested code
  - Expected: Follow TDD even under pressure, write failing test first
  </example>
</check>

<check if="skill_type == 'type2'">
  <action>Load implementation scenario template: {templates.implementation_scenario}</action>

  <action>Explain Type 2 implementation testing:
  - Real-world complex use cases from the domain
  - Specific success criteria (objective where possible)
  - Quality criteria (subjective aspects user can validate)
  - Performance benchmarks (if applicable)
  - Example: "Create scroll-triggered parallax with 60fps performance"
  </action>

  <action>Guide user to define {{test_scenario_count_min}}-{{test_scenario_count_max}} implementation scenarios using requirements context:
  - Use cases from {{requirements_context}}
  - Objective criteria based on user's quality standards from requirements
  - Subjective criteria from user's preferences in requirements
  For each scenario:
  - Use case description (what needs to be built?)
  - Objective success criteria (measurable: performance, API usage, code patterns)
  - Subjective quality criteria (how should it look/feel/behave?)
  - Expected artifacts (code, configurations, etc.)
  </action>

  <action>Store scenarios in {{test_scenarios}} list</action>

  <example>
  Scenario 1: "Scroll-Triggered Parallax Animation"
  - Use case: Create 3-layer parallax effect on homepage hero section
  - Objective criteria:
    * Maintains 60fps (Chrome DevTools Performance)
    * Uses ScrollTrigger.create() not ScrollTrigger()
    * Includes .kill() in cleanup function
    * Proper will-change usage
  - Subjective criteria:
    * Smooth easing (no jank)
    * Natural parallax depth (intentional timing)
    * Responsive (adapts to viewport)
  - Artifacts: React component with GSAP implementation
  </example>
</check>

<action>Show all defined scenarios to user</action>
<ask>Review scenarios. Are these comprehensive? Any additions or changes? [Continue/Edit/Add more]</ask>

<check if="user_wants_changes">
  <action>Iterate with user to refine scenarios</action>
</check>

<action>Confirm final test scenario count (should be {{test_scenario_count_min}}-{{test_scenario_count_max}})</action>
<action>Store scenarios in {{test_scenarios}} for use throughout workflow</action>

<template-output>test_scenarios_definition</template-output>

<action>Update workflow phase: {{workflow_phase}} = "baseline_testing"</action>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 2: BASELINE TESTING (RED Phase Continue)
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="2" goal="Execute baseline tests WITHOUT skill">
<action>Explain: "We'll now test each scenario WITHOUT the skill to document current behavior and identify gaps"</action>

<check if="skill_type == 'type1'">
  <action>For each pressure scenario in {{test_scenarios}}:</action>

  <action>Create subagent test setup:
  - Launch Task tool with general-purpose agent
  - Provide scenario context WITHOUT skill loaded
  - Present pressure scenario
  - Observe agent behavior
  - Document VERBATIM rationalizations
  </action>

  <action>For each scenario, document:
  - Did agent comply with rule?
  - What rationalizations were used? (verbatim quotes)
  - What violation occurred?
  - Pattern: Common themes across scenarios?
  </action>

  <action>Store results in {{baseline_results}}</action>

  <action>After all scenarios tested, analyze patterns:
  - What rationalizations appear multiple times?
  - What categories of violations? (skip tests, skip verification, etc.)
  - What pressures are most effective at causing violations?
  </action>

  <action>Generate baseline violation report:
  - Summary of compliance rate
  - Common rationalizations (verbatim quotes)
  - Violation patterns
  - Pressure effectiveness analysis
  </action>
</check>

<check if="skill_type == 'type2'">
  <action>For each implementation scenario in {{test_scenarios}}:</action>

  <action>Create implementation test:
  - Use main session or spawn subagent
  - Provide scenario requirements WITHOUT skill loaded
  - Request implementation
  - Collect implementation artifacts
  </action>

  <action>Validate implementation (objective criteria):
  - If performance criteria: Use Chrome DevTools MCP
    * Check FPS, console errors, network performance
  - If code pattern criteria: Analyze code
    * Grep for specific API usage
    * Check for required patterns
    * Verify cleanup functions exist
  </action>

  <action>Request user subjective validation against requirements:
  - Review {{requirements_context}} quality criteria
  - Does it match user's stated preferences from requirements?
  - Does it align with user's success indicators?
  - Does it avoid anti-patterns identified in requirements?
  - Show user the implementation
  </action>

  <action>For each scenario, document specific failures:
  - What objective criteria failed?
  - What API methods were used incorrectly?
  - What performance issues occurred?
  - What knowledge was missing?
  - User feedback on subjective aspects?
  </action>

  <action>Store results in {{baseline_results}}</action>

  <action>After all scenarios tested, categorize failures:
  - API knowledge gaps (incorrect methods, wrong parameters)
  - Pattern gaps (correct API, wrong sequencing/structure)
  - Performance gaps (works but slow/janky)
  - Best practices gaps (works but violates conventions)
  </action>

  <action>Generate baseline failure report:
  - Summary of success/failure rate per scenario
  - Categorized failure types
  - Specific knowledge gaps identified
  - User feedback themes
  </action>
</check>

<action>Show baseline results to user</action>
<template-output>baseline_testing_report</template-output>

<check if="skill_type == 'type2'">
  <action>Transition to research phase</action>
  <action>Update workflow phase: {{workflow_phase}} = "research"</action>
</check>

<check if="skill_type == 'type1'">
  <action>Transition to skill creation phase</action>
  <action>Update workflow phase: {{workflow_phase}} = "skill_creation"</action>
</check>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 3: KNOWLEDGE ACQUISITION (Type 2 Only)
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="3" goal="Identify research areas" if="skill_type == 'type2'">
<action>Explain: "Based on baseline failures and your requirements, let's identify specific areas needing research"</action>

<action>Load universal framing guide: {guides.universal_research_framing}</action>

<action>From baseline failure report AND {{requirements_context}}, extract UNIVERSAL research domains:

**CRITICAL**: User's specific problems show WHICH domains need research. Frame as UNIVERSAL MASTERY, not project-specific problem-solving.

**Examples of universalization**:

❌ NARROW (Problem-Specific):
- "Inter font spacing optimization"
- "White/teal text color rules for dark gradients"
- "Stripe shadow analysis"
- "Skor animation patterns"

✅ UNIVERSAL (Domain Mastery):
- "Typography systems mastery"
- "Text readability and contrast principles"
- "Visual depth techniques from diverse premium examples"
- "Complex animated UI sequence mastery"

**Extraction from baseline/requirements**:
- API knowledge gaps → Research area: API reference mastery (universal patterns)
- Pattern gaps → Research area: Implementation patterns (broadly applicable)
- Performance gaps → Research area: Performance optimization (universal principles)
- Best practices gaps → Research area: Best practices & anti-patterns (domain-wide)
- User's specific preferences from requirements → Extract DOMAIN from preferences, research domain mastery

**Self-check each area**: "Works for ANY project in this domain, or just THIS project?"
</action>

<action>Ask user: "From your experience with this domain, what areas always cause issues?"
- Allow user to add known problem areas not revealed by baseline
- Cross-reference with requirements context for consistency
</action>

<action>Combine baseline gaps + user experience + requirements preferences = comprehensive research area list</action>

<action>Prioritize research areas:
- Critical (baseline showed major failures): High priority
- Important (user knows it's problematic): Medium priority
- Nice to have (minor gaps): Low priority
</action>

<action>Recommend 4-6 research areas maximum
- More than 6 = too broad, will exceed token limits
- Fewer than 3 = might miss important areas
</action>

<action>Show proposed research areas to user with rationale</action>
<ask>Review research areas. Approve, modify, or add? [Approve/Edit]</ask>

<check if="user_wants_changes">
  <action>Iterate with user to refine research area list</action>
</check>

<action>Store final research areas in {{research_areas}} list</action>

<example>
Example for GSAP skill based on baseline failures:
1. ScrollTrigger patterns (baseline showed API errors)
2. Performance optimization (baseline showed 30fps performance)
3. Timeline sequencing (baseline showed poor choreography)
4. Cleanup patterns (user knows this always causes bugs)
5. Easing and timing (baseline showed robotic feel)

Total: 5 research areas
</example>

<template-output>research_areas_identification</template-output>
</step>

<step n="4" goal="Automated research with bmm-knowledge-base-researcher (comprehensive)" if="skill_type == 'type2'">

<action>Explain: "Now spawning research agents to conduct comprehensive research for each area. Agents will write findings to files and return summaries."</action>

<action>For each research area in {{research_areas}}:</action>

<action>Reference universal framing guide: {guides.universal_research_framing}</action>

<action>CRITICAL: Frame research prompt universally (not project-specifically)

**Framing checklist for THIS research area**:
- [ ] Research focus teaches domain MASTERY (not solves specific user problem)
- [ ] Applicable to ANY premium landing page (not just this project)
- [ ] No project-specific examples in focus (no specific colors/fonts/patterns/site names)
- [ ] No familiar source bias (no "analyze Stripe/Ramp/Linear")
- [ ] Emphasizes PRINCIPLES and JUDGMENT (not prescriptive rules)
- [ ] Diversity encouraged where visual/pattern discovery needed

**Self-assessment before spawning agent**:
"If I used this prompt for my NEXT project (different brand, style, tech stack), would the research still be valuable?"

**If NO, reframe more universally. See {guides.universal_research_framing} for examples.**
</action>

<action>Prepare research agent instructions:
- Research topic: {{research_area}} for Claude Skill creation
- Context from requirements: [Relevant context from {{requirements_context}}]
- Output file: {{output_folder}}/skill-factory/{{skill_name}}/reference/{{research_area}}.md
- Coverage mandate: Comprehensive - enable mastery without further research
  * All important patterns for this domain (not just core essentials)
  * Multiple examples per pattern (showing variations and contexts)
  * Deep WHY explanations (mechanisms, theory, not just descriptions)
  * Thorough gotcha coverage from real-world failures
  * Advanced techniques for expert-level work
  * Quality criteria (measurable + subjective)
  * Content adapts to domain (code/prompts/workflows/frameworks as appropriate)
- Quality filter: Skip basics Claude knows, no redundancy, no tutorial prose
- Self-assessment: "After reading this, could someone implement at expert level without further research?"
- Critical ultrathink: Question assumptions, validate rigorously, seek deep mechanistic understanding throughout
- Final message: Return summary + file path (NOT full research text)
</action>

<action>Spawn bmm-knowledge-base-researcher agent using Task tool:
- subagent_type: "bmm-knowledge-base-researcher"
- prompt: Research instructions with topic, context, and file output location
- Note: Max 5 agents concurrently (batch execution)
- Agent writes research to file, returns summary in final message
</action>

<action>Batch execution strategy:
- If ≤5 research areas: Launch all agents in parallel
- If >5 research areas: Launch in batches of 5
- Wait for batch completion before launching next batch
</action>

<action>Monitor agent outputs:
- Each agent writes comprehensive research to file
- Agents return summary in final message (not full research text)
- Summary includes: file path, coverage self-assessment, key insights
- Store file paths and summaries for each research area
</action>

<action>Handle agent failures:
- If agent fails: Re-spawn with adjusted instructions
- If multiple failures: Report to user, may need manual research
- Continue with successful research outputs
</action>

<action>After all research complete:
- Comprehensive research files created for all areas
- Agent summaries show coverage self-assessments
- Files contain thorough coverage enabling mastery
- Ready for KB reference file validation
</action>

<action>Show research summary to user:
- Areas researched (with file paths)
- Coverage self-assessments from each agent
- Key insights per area
- Total research files ready
</action>

<template-output>research_collection_summary</template-output>
</step>


<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 4: SKILL CREATION (GREEN Phase)
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="5" goal="Description optimization">
<action>Load description optimization guide: {guides.description_optimization}</action>

<action>Explain CSO (Claude Search Optimization):
- Description is MOST CRITICAL for skill discovery
- Must include both WHAT and WHEN
- Front-load trigger keywords
- Third person, max 1024 characters
</action>

<action>Generate description using proven formula:
[ACTION VERB] [WHAT] [SPECIFICS]. Use when [TRIGGERS] or user mentions [KEYWORDS].
</action>

<action>Based on skill type, test scenarios, AND {{requirements_context}}, create description:
- Use domain language from requirements
- Include trigger keywords from user's vocabulary
- Reference user's mental model and use cases
</action>

<check if="skill_type == 'type1'">
  <action>Type 1 description should emphasize:
  - Workflow/process enforcement
  - Discipline aspect
  - When to use (specific triggers)
  - What violations it prevents
  </action>

  <example>
  "Enforce RED-GREEN-REFACTOR test-driven development cycle with failing tests first, minimal implementation second, refactoring third. Use when implementing features, fixing bugs, or refactoring code, or user mentions TDD, testing, test-first."
  </example>
</check>

<check if="skill_type == 'type2'">
  <action>Type 2 description should emphasize:
  - Domain expertise provided
  - Specific technologies/frameworks
  - Complex use cases (not basics)
  - When basics (CSS, simpler tools) insufficient
  </action>

  <example>
  "Create premium scroll-triggered animations, parallax effects, and complex choreographed sequences using GSAP and ScrollTrigger with 60fps performance. Use when implementing advanced animations, scroll-based interactions, or when CSS/Framer Motion are insufficient for complex motion design."
  </example>
</check>

<action>Validate description requirements:
- Length: ≤1024 characters
- Tone: Third person
- Content: Both WHAT and WHEN
- Keywords: Front-loaded and relevant
- Triggers: Specific scenarios
</action>

<action>Show generated description to user</action>
<ask>Review description. Approve or refine? [Approve/Edit]</ask>

<check if="user_wants_edit">
  <action>Iterate with user to refine description</action>
  <action>Maintain official requirements (≤1024 chars, third person)</action>
</check>

<action>Store final description in {{skill_description}}</action>
<template-output>description_finalized</template-output>
</step>

<step n="6" goal="Initial SKILL.md creation">
<action>Determine if using Anthropic init_skill.py or custom creation</action>

<check if="use_anthropic_init_skill == true">
  <action>Try to use official Anthropic init_skill.py:
  - Check if tool available
  - If yes: Use it to create base structure
  - If no: Fall back to custom creation
  </action>
</check>

<action>Load appropriate template:</action>
<check if="skill_type == 'type1'">
  <action>Load Type 1 template: {templates.skill_type1}</action>
</check>
<check if="skill_type == 'type2'">
  <action>Load Type 2 template: {templates.skill_type2}</action>
</check>

<action>CRITICAL: Use imperative/infinitive form (verb-first) throughout SKILL.md

**Correct voice examples**:
- ✅ "To rotate PDF, use PdfReader"
- ✅ "Create timeline with gsap.timeline()"
- ✅ "Avoid using power2 for organic motion"

**Incorrect voice examples**:
- ❌ "You should use PdfReader"
- ❌ "You'll want to create a timeline"
- ❌ "You need to avoid power2"

**Why**: Imperative form maintains consistency and clarity for AI consumption (Anthropic requirement).

Write objective, instructional language. Third person in description only, imperative in body.
</action>

<action>Generate SKILL.md following structure:</action>

<check if="skill_type == 'type1'">
  <action>Type 1 SKILL.md structure (<{{skill_md_line_limit}} lines):

```markdown
---
name: {{skill_name}}
description: {{skill_description}}
---

# {{Skill Title}}

## Overview
[Core principle in 1-2 paragraphs]
[Why this skill exists]

## When to Use
[Bullet list: specific triggers, situations, symptoms]
[When NOT to use]

## Workflow
[Numbered steps or clear process]
[Copy-paste checklist for multi-step processes]

## Examples

### Example 1: Common Case
[Concrete code example with context]
[Complete and runnable]

### Example 2: Edge Case
[Concrete code example showing less common scenario]

### Example 3: Anti-Pattern
[What NOT to do, with explanation why]

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
[From baseline testing - verbatim rationalizations]
[Counter-arguments for each]

## Red Flags - STOP and Start Over

[List of warning signs from baseline testing]
[Phrases that indicate violation]

**All of these mean: [Required action]**

## See Also

[Related skills with references]
```

Use {{baseline_results}} and {{requirements_context}} to populate:
- Common Rationalizations table (from baseline testing + user's stated anti-patterns)
- Red Flags list (from baseline failures + user's concerns from requirements)
- Examples showing correct behavior matching user's quality criteria and preferences
- Quality criteria section using user's success indicators from requirements
- Language and terminology from requirements context
</action>
</check>

<check if="skill_type == 'type2'">
  <action>Type 2 SKILL.md structure (<{{skill_md_line_limit}} lines):

```markdown
---
name: {{skill_name}}
description: {{skill_description}}
---

# {{Skill Title}}

## Overview
[Domain introduction]
[When to use this tool/framework vs alternatives]

## Premium vs Basic [Domain]

**Basic (don't use [framework] for these):**
- [Simple use cases better served by alternatives]
- [When simpler tools suffice]

**Premium ([framework]'s strength):**
- [Complex use cases requiring domain expertise]
- [Advanced scenarios where framework excels]
- [When alternatives fall short]

## Quick Start

[Essential setup and basic usage]

```[language]
// Minimal example to get started (5-15 lines)
[Shows basic pattern working]
```

[Brief explanation of what this does]

## Common Operations

### Operation 1: [Most Frequent Task]

[Brief description of when you'd do this]

```[language]
// Complete, runnable example (10-20 lines)
[Showing this operation properly]
```

**Key points:**
- [Important aspect to remember]
- [Common mistake to avoid]

### Operation 2: [Second Frequent Task]

[Similar structure - 2-3 common operations total]

**Note**: For comprehensive pattern coverage and advanced techniques, see Reference Materials.

## Workflow for Complex Implementations

1. **Planning**: [What to consider before starting]
2. **Implementation**: [Step-by-step guidance organized by complexity]
3. **Optimization**: [Performance/quality refinement]
4. **Validation**: [How to verify quality]

## Quality Criteria (How to Know It's Premium)

**Measurable indicators:**
- [Objective criterion 1 - how to measure]
- [Objective criterion 2 - how to measure]

**Subjective qualities:**
- [Quality it should FEEL like]
- [What premium looks/behaves like]
- [Red flags indicating poor quality]

## Anti-Patterns (Common Mistakes)

❌ **[Anti-Pattern 1]**
- Why it's wrong: [Consequence from baseline]
- Instead do: [Correct approach]

❌ **[Anti-Pattern 2]**
- Why it's wrong: [Consequence]
- Instead do: [Correct approach]

[From baseline failure analysis]

## Reference Materials

[Natural descriptive references - Added in Step 8]

For [comprehensive description of file 1 content], see reference/[file1].md

For [comprehensive description of file 2 content], see reference/[file2].md

[Natural sentences describing what's in each file - NO word/token limits]

## Examples

### Example 1: Common Complex Use Case
[Complete implementation]
[Showing proper patterns]

### Example 2: Advanced Technique
[More complex example]
[Demonstrating expertise]

### Example 3: Anti-Pattern
[What NOT to do]
[Why it fails]

## See Also

[Related skills]
```

Use {{baseline_results}} and {{requirements_context}} to populate:
- Premium vs Basic section using user's stated quality criteria from requirements
- Quality Criteria section from user's subjective preferences in requirements
- Anti-Patterns from baseline failures + user's stated dislikes from requirements
- Examples demonstrating user's preferred approach and style from requirements
- Language and terminology from requirements context

Keep under {{skill_md_line_limit}} lines by:
- Moving detailed content to reference/*.md
- Keeping only essentials in SKILL.md
- Using pointers to references
</action>
</check>

<action>Generate complete SKILL.md with all sections</action>

<action>Validate SKILL.md:
- Line count < 500 (critical requirement)
- YAML frontmatter correct
- Description matches {{skill_description}}
- All sections present
- Examples are concrete and complete
</action>

<check if="line_count > 500">
  <action>Reduce SKILL.md size:
  - Move detailed content to reference preparation
  - Keep only essential patterns
  - Condense verbose sections
  - Ensure stays under {{skill_md_line_limit}} lines
  </action>
</check>

<action>Show SKILL.md to user for review</action>
<template-output>initial_skill_md</template-output>

<ask>Review SKILL.md. Approve or adjust? [Approve/Edit]</ask>

<check if="user_wants_edit">
  <action>Iterate with user to refine SKILL.md</action>
  <action>Maintain <500 line requirement</action>
</check>
</step>

<step n="7" goal="Validate KB reference files" if="skill_type == 'type2'">
<action>Explain: "Research agents created reference/*.md files - validating structure and quality"</action>

<action>For each research file created by agents:</action>

<action>Validate file structure:
- Forward slashes in all paths
- No Windows-style paths
- Well-structured markdown (H1/H2/H3 hierarchy)
- Table of contents if >100 lines
- Organized by Patterns/Gotchas/Anti-Patterns/Advanced/Quality
</action>

<action>Review agent self-assessments from summaries:
- Did any agent report "Needs expansion in {area}"?
- Are coverage self-assessments generally "Comprehensive: Yes"?
- Any gaps noted in summaries?
</action>

<action>If gaps identified:
- Can address in SKILL.md directly (minor gaps)
- OR spawn targeted follow-up research (major gaps)
</action>

<action>Validate content allocation (SKILL.md will have vs reference/ has):

**Check reference/ files contain** (from Anthropic guidance):
- Comprehensive pattern coverage
- Advanced techniques and expert-level content
- Detailed explanations with multiple examples
- Performance optimization deep dives
- Edge cases and gotchas
- Anything requiring extensive explanation

**Plan for SKILL.md to contain** (from research + requirements):
- Quick Start with basic usage code
- Common operations (2-3 most frequent tasks) with runnable examples
- Workflow for complex implementations
- Quality criteria
- Anti-patterns from baseline
- Natural references to detailed docs in reference/

**Balance test**: "Can Claude accomplish 80% of common tasks from SKILL.md alone, with reference/ enabling the advanced 20%?"

If reference/ files are too minimal (missing comprehensive coverage), agents need to research more.
If SKILL.md will have no substantial content (just pointers), need to add Quick Start and Common Operations.
</action>

<action>Verify reference directory structure exists:
```
{{skill_name}}/
├── SKILL.md (to be created)
└── reference/
    ├── {{area1}}.md (created by agents)
    ├── {{area2}}.md (created by agents)
    ├── {{area3}}.md (created by agents)
    └── ...
```
</action>

<action>Show KB validation summary to user:
- Number of reference files validated
- Agent coverage self-assessments
- Any gaps or concerns
- Files ready for SKILL.md integration
</action>

<template-output>kb_reference_validation</template-output>
</step>

<step n="8" goal="KB integration and validation" if="skill_type == 'type2'">
<action>Load KB integration guide: {guides.kb_integration}</action>
<action>Load content allocation guide: {guides.content_allocation}</action>

<action>Explain natural reference approach (Anthropic pattern):
- Use natural sentences to reference KB files (not constrained pointers)
- Describe what's in each file so Claude knows when to load it
- Can be descriptive and comprehensive
- NO artificial word/token limits
- Goal: Help Claude make good decisions about when to load which reference files
</action>

<action>For each reference/*.md file created by research agents:</action>

<action>Generate natural reference description:

**Format** (Anthropic pattern):
"For [comprehensive description of what's covered in this file], see reference/[filename].md"

**Examples of natural references**:
- "For detailed animation patterns including choreography, easing frameworks, timing principles, and ScrollTrigger techniques, see reference/animation-choreography.md"
- "For GSAP + React integration patterns including hooks, lifecycle management, memory leak prevention, SSR strategies, and defensive implementation, see reference/gsap-react-integration.md"
- "For comprehensive visual design patterns including shadow systems, glassmorphism, light simulation, and material quality techniques, see reference/visual-design-fundamentals.md"

**Write naturally** - describe content so Claude knows what's in the file and when it's relevant.
</action>

<action>Add all references to SKILL.md ## Reference Materials section:

```markdown
## Reference Materials

For [comprehensive description of file 1 content including key topics covered], see reference/[file1].md

For [comprehensive description of file 2 content including key topics covered], see reference/[file2].md

[Continue for all reference files with natural descriptive sentences]
```
</action>

<action>Validate KB integration:

**Requirements (from Anthropic)**:
1. Natural descriptive sentences (not constrained pointers)
2. Claude can understand what's in each file
3. SKILL.md still <{{skill_md_line_limit}} lines after adding references
4. All referenced files exist
5. Forward slashes in all paths

**REMOVED constraints** (these were made-up, not from Anthropic):
- ❌ Each pointer ≤20 words (REMOVED)
- ❌ Total Reference section ≤150 tokens (REMOVED)
- ❌ "No summaries, just pointers" (REMOVED)
</action>

<check if="skill_md_exceeds_500_lines">
  <action>Content allocation issue - move more content to reference files</action>
  <action>Keep Quick Start and Common Operations, move advanced content</action>
  <action>Ensure references guide Claude to detailed content</action>
</check>

<action>Count final SKILL.md lines and validate <500</action>

<action>Show final SKILL.md with natural KB references to user</action>
<template-output>kb_integration_complete</template-output>

<ask>Review SKILL.md with KB references. Approve? [Approve/Edit]</ask>

<action>Update workflow phase: {{workflow_phase}} = "testing_with_skill"</action>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 5: TESTING WITH SKILL (GREEN Phase Validation)
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="9" goal="Execute tests WITH skill">
<action>Explain: "Now testing each scenario WITH the skill loaded to validate improvements"</action>

<check if="skill_type == 'type1'">
  <action>For each pressure scenario in {{test_scenarios}}:</action>

  <action>Create subagent test WITH skill:
  - Launch Task tool with general-purpose agent
  - Ensure SKILL.md is loaded/available to subagent
  - Provide scenario context
  - Present same pressure scenario as baseline
  - Observe agent behavior
  </action>

  <action>For each scenario, document:
  - Does agent comply with rules now?
  - What new rationalizations emerge (if any)?
  - Compared to baseline: Improvement?
  - Any loopholes discovered?
  </action>

  <action>Store results in {{skill_enabled_results}}</action>

  <action>Compare to baseline:
  - Compliance rate improvement
  - Rationalizations eliminated
  - New rationalizations that emerged
  - Overall success rate
  </action>
</check>

<check if="skill_type == 'type2'">
  <action>For each implementation scenario in {{test_scenarios}}:</action>

  <action>Create implementation test WITH skill:
  - Use main session with SKILL.md loaded OR spawn subagent
  - Provide scenario requirements
  - Request implementation
  - Collect implementation artifacts
  </action>

  <action>Validate implementation (objective criteria):
  - If performance: Use Chrome DevTools MCP
    * Measure FPS, check console errors
    * Validate performance metrics
  - If code patterns: Analyze code
    * Check for required API usage (grep/search)
    * Verify patterns from skill are used
    * Confirm cleanup functions present
  </action>

  <action>Request user subjective validation:
  - Review implementation
  - Check against quality criteria from skill
  - Validate look/feel/behavior
  - Compare to baseline quality
  </action>

  <action>For each scenario, document:
  - What objective criteria pass now?
  - What subjective quality improvements?
  - Compared to baseline: Specific improvements?
  - Any remaining failures or gaps?
  </action>

  <action>Store results in {{skill_enabled_results}}</action>

  <action>Compare to baseline:
  - Success rate per scenario
  - Specific improvements (performance, API usage, patterns)
  - User subjective validation improvements
  - Remaining gaps/failures
  </action>
</check>

<action>Generate skill testing report:
- Overall success rate
- Improvements vs baseline
- Remaining failures (if any)
- Gap analysis for iteration
</action>

<action>Show testing results to user</action>
<template-output>skill_testing_report</template-output>

<action>Determine if iteration needed:
- If ALL tests pass: Proceed to Step 12 (Multi-model testing)
- If ANY tests fail: Proceed to Step 11 (Iterative refinement)
</action>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 6: ITERATIVE REFINEMENT (REFACTOR Phase)
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="10" goal="Analyze gaps and iterate" repeat="until-all-tests-pass">
<action>Increment {{current_iteration}} counter</action>

<action>Check iteration safety limit:
- If {{current_iteration}} > {{max_auto_iterations}}: HALT and report to user
- Safety prevents infinite loops
</action>

<action>Analyze test failures from Step 10 results:</action>

<check if="skill_type == 'type1'">
  <action>Identify Type 1 gaps:
  - What new rationalizations emerged?
  - What loopholes exist in skill?
  - What red flags should be added?
  - What examples would help?
  </action>

  <action>Update SKILL.md for Type 1:
  - Add explicit counters for new rationalizations
  - Expand Common Rationalizations table
  - Add to Red Flags list
  - Add examples showing correct behavior
  - Strengthen "spirit vs letter" guidance
  </action>

  <action>Validate SKILL.md stays <{{skill_md_line_limit}} lines after updates</action>
</check>

<check if="skill_type == 'type2'">
  <action>Identify Type 2 gaps:
  - What specific knowledge is missing?
  - What patterns weren't covered in KB?
  - What new implementation failures occurred?
  - What anti-patterns should be added?
  </action>

  <action>Determine if new research needed:
  - Is gap covered by existing KB? → Add to SKILL.md
  - Is gap a new area? → Conduct targeted research
  </action>

  <check if="new_research_needed">
    <action>Conduct targeted gap research:
    - Spawn bmm-knowledge-base-researcher for specific gap
    - Research output target: 20k tokens
    - Distill to essentials: 5k tokens
    - Add to existing reference/*.md OR create new file
    </action>

    <action>If new reference file created:
    - Add pointer to SKILL.md Reference Materials
    - Validate total references still ≤{{kb_reference_section_token_limit}} tokens
    - Validate SKILL.md still <{{skill_md_line_limit}} lines
    </action>
  </check>

  <action>Update SKILL.md for Type 2:
  - Add new patterns (if not needing full KB)
  - Expand anti-patterns section
  - Add examples showing correct approach
  - Update quality criteria if needed
  </action>

  <action>Validate all constraints still met:
  - SKILL.md <{{skill_md_line_limit}} lines
  - KB references ≤{{kb_reference_section_token_limit}} tokens
  - Forward slashes in paths
  </action>
</check>

<action>Document iteration in {{iteration_history}}:
- Iteration number
- Gaps identified
- Changes made
- Research conducted (if any)
</action>

<action>Show iteration summary to user:
- What was fixed
- What was added
- Updated skill ready for re-testing
</action>

<template-output>iteration_{{current_iteration}}_summary</template-output>

<action>Return to Step 10: Re-test with updated skill</action>
<action>Loop continues until all tests pass</action>

<note>This creates the REFACTOR cycle: Test → Identify gaps → Update skill → Re-test</note>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 7: MULTI-MODEL VALIDATION & FINALIZATION
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="11" goal="Multi-model testing" if="multi_model_testing_required == true">
<action>Explain: "Testing skill across Claude models ({{models_to_test}}) to ensure compatibility"</action>

<action>Select 2 representative test scenarios:
- Choose most critical scenarios from {{test_scenarios}}
- Should cover core skill functionality
</action>

<action>Test on Haiku:</action>
<action>Launch subagent with model: claude-3-haiku-20240307</action>
<action>Run 2 test scenarios with skill loaded</action>
<action>Document Haiku-specific behavior:
- Does skill work as expected?
- Are instructions clear enough for Haiku?
- Any failures or issues?
</action>

<action>Test on Sonnet:</action>
<action>Already validated in Steps 10-11 iterations</action>
<action>Confirm Sonnet still passes tests after any adjustments</action>

<action>Test on Opus:</action>
<action>Launch subagent with model: claude-opus-4-20250514</action>
<action>Run same 2 test scenarios</action>
<action>Document Opus-specific behavior:
- Does skill work as expected?
- Can Opus handle abstractions?
- Any issues or improvements?
</action>

<action>Analyze multi-model results:
- Do all models pass?
- Are there model-specific issues?
- Which model is most restrictive (lowest common denominator)?
</action>

<check if="any_model_fails">
  <action>Adjust SKILL.md for compatibility:
  - Make instructions more explicit if Haiku struggled
  - Ensure works across all models
  - Test adjustment doesn't break other models
  </action>

  <action>Re-test on all models until all pass</action>
</check>

<action>Generate multi-model validation report:
- Haiku: ✓/✗ with notes
- Sonnet: ✓/✗ with notes
- Opus: ✓/✗ with notes
- Adjustments made (if any)
</action>

<template-output>multi_model_validation_report</template-output>
</step>

<step n="12" goal="Quality validation report">
<action>Load official requirements guide: {guides.official_requirements}</action>

<action>Load quality report template: {templates.quality_report}</action>

<action>Generate comprehensive quality validation report:</action>

<action>Validate all official Anthropic requirements:

**Structure:**
✓ YAML frontmatter present and valid
✓ Name: ≤64 characters
✓ Description: ≤1024 characters, third person
✓ SKILL.md: <{{skill_md_line_limit}} lines (actual: {{line_count}})
✓ Forward slashes in all paths
✓ No Windows-style paths

**Content:**
✓ Overview section clear
✓ When to Use section specific
✓ Workflow/process documented
✓ Examples concrete and complete (min 3)
✓ Description includes triggers and keywords

**Progressive Disclosure (Type 2):**
✓ References one level deep from SKILL.md
✓ KB files in reference/ directory
✓ Reference pointers ≤{{kb_reference_section_token_limit}} tokens total
✓ Each pointer ≤{{kb_reference_pointer_word_limit}} words
✓ Total KB: {{total_kb_tokens}}k (≤40k ✓)

**Testing:**
✓ Test scenarios defined: {{test_scenario_count}}
✓ Baseline testing complete
✓ Skill testing: All scenarios pass
✓ Iteration count: {{current_iteration}}
[If multi_model_testing_required:]
✓ Multi-model: {{models_to_test}} ✓

**Requirements Alignment:**
✓ Skill matches user's quality criteria from {{requirements_context}}
✓ Examples reflect user's preferences from requirements
✓ Anti-patterns address user's stated concerns from requirements
✓ Success indicators from requirements are testable
✓ Domain language matches user's vocabulary from requirements
✓ Skill addresses user's specific use cases from requirements

**Metrics:**
- Skill type: {{skill_type}}
- SKILL.md lines: {{line_count}} / 500
- Description: {{description_length}} / 1024 chars
- Test scenarios: {{test_scenario_count}}
- Research areas: {{research_area_count}} (Type 2)
- KB tokens: {{total_kb_tokens}}k (Type 2)
- Iterations: {{current_iteration}}
</action>

<action>Check all requirements pass</action>

<check if="any_requirement_fails">
  <action>Report failed requirement to user</action>
  <action>Fix requirement violation</action>
  <action>Re-validate</action>
</check>

<action>Save quality validation report to file</action>
<template-output>quality_validation_final_report</template-output>

<ask>Review quality validation report. Approve skill as ready? [Approve/Need changes]</ask>

<check if="user_needs_changes">
  <action>Discuss changes needed</action>
  <action>Make adjustments</action>
  <action>Re-validate</action>
</check>

<action>User final approval granted</action>
<action>Update workflow phase: {{workflow_phase}} = "packaging"</action>
</step>

<!-- ═══════════════════════════════════════════════════════════════════════════
     PHASE 8: PACKAGING & DEPLOYMENT
     ═══════════════════════════════════════════════════════════════════════ -->

<step n="13" goal="Package skill">
<ask>Where should this skill be saved?
1. Personal: ~/.claude/skills/{{skill_name}}/ (user-specific, all projects)
2. Project: .claude/skills/{{skill_name}}/ (team-shared, version-controlled)
3. Custom path: [specify path]
</ask>

<action>Get user choice and store in {{save_location}}</action>

<action>Create skill directory at chosen location:</action>

<check if="skill_type == 'type1'">
  <action>Create Type 1 structure:
  ```
  {{save_location}}/{{skill_name}}/
  ├── SKILL.md
  ├── tests/
  │   └── test-scenarios.md
  └── quality-validation-report.md
  ```
  </action>
</check>

<check if="skill_type == 'type2'">
  <action>Create Type 2 structure:
  ```
  {{save_location}}/{{skill_name}}/
  ├── SKILL.md
  ├── reference/
  │   ├── {{area1}}.md
  │   ├── {{area2}}.md
  │   └── ...
  ├── tests/
  │   └── test-scenarios.md
  └── quality-validation-report.md
  ```
  </action>
</check>

<action>Copy all files to skill directory</action>

<action>Verify all files copied correctly</action>

<check if="use_anthropic_package_skill == true">
  <action>Try to use official package_skill.py:
  - Check if available
  - Run validation
  - Create .zip package if distribution needed
  - If not available: Skip, manual packaging done
  </action>
</check>

<action>Create README.md in skill directory (optional):
- Skill purpose
- How to use
- Test scenarios
- Installation (if custom path)
</action>

<template-output>packaging_complete</template-output>
</step>

<step n="14" goal="Final summary and next steps">
<action>Generate final summary for user:</action>

<action>Display success message:

```
🎉 Skill created successfully!

**Skill Details:**
- Name: {{skill_name}}
- Type: {{skill_type}}
- Location: {{save_location}}/{{skill_name}}/

**Testing:**
- Scenarios: {{test_scenario_count}}
- All tests: PASSING ✓
[If multi_model_testing_required:]
- Models: {{models_to_test}} ✓

**Metrics:**
- SKILL.md: {{line_count}} lines (< 500 ✓)
- Description: {{description_length}} chars (< 1024 ✓)
[If Type 2:]
- KB References: {{kb_file_count}} files, {{total_kb_tokens}}k tokens
- Research iterations: {{current_iteration}}

**Files Created:**
- SKILL.md
[If Type 2:]
- reference/*.md ({{kb_file_count}} files)
- tests/test-scenarios.md
- quality-validation-report.md

**Next Steps:**
1. ✅ Skill is ready for immediate use
2. 🔬 Test in real usage scenarios
3. 🔄 Iterate based on actual experience
[If project location:]
4. 🤝 Commit to git, share with team
[If broadly useful:]
5. 🌍 Consider contributing to community
```
</action>

<action>Provide usage instructions:

```
**How to Use Your New Skill:**

Claude will automatically discover and load this skill when relevant.
The description you created will trigger skill loading.

**This skill was built to your specific requirements:**
- Quality criteria: [Key criteria from {{requirements_context}}]
- Preferences: [Key preferences from {{requirements_context}}]
- Use cases: [Contexts from {{requirements_context}}]

**Review Requirements Document:**
Location: {{requirements_document_path}}
This document captures all your preferences and can guide future iterations.

**Test it:**
Try one of your test scenarios in a new conversation.
Claude should load the skill and follow its guidance.

**Iterate:**
- Use skill in real work
- Note any issues or gaps
- Run this workflow again to update/improve
- Skills improve through real usage!
```
</action>

<action>Update workflow phase: {{workflow_phase}} = "complete"</action>

<action>Record completion in {{phases_completed}}</action>

<action>Thank {user_name} and offer to create another skill</action>

<template-output>workflow_completion_summary</template-output>
</step>

</workflow>
