# Director Agent - Workflow Conversion Specifications

**Agent File:** `/bmad/gsap-excellence/agents/gsap-director.md`
**Agent Size:** 1,107 lines
**Inline Actions to Convert:** 2 (Priority 1)
**Inline Actions to Keep:** 4 (informational)
**Expected Size Reduction:** ~104 lines (-9%)

---

## Conversion Summary

| Command | Current Lines | Convert To | Priority | Estimated Time |
|---------|---------------|------------|----------|----------------|
| `*review` | 47 lines (894-940) | `workflows/review-quality/` | P1 - HIGH | 30 min |
| `*vision-plan` | 57 lines (941-997) | `workflows/plan-narrative/` | P1 - HIGH | 35 min |
| **KEEP** `*crew` | 23 lines | Inline | N/A | N/A |
| **KEEP** `*patterns` | 17 lines | Inline | N/A | N/A |
| **KEEP** `*showreel` | 18 lines | Inline | N/A | N/A |
| **KEEP** `*mission` | 29 lines | Inline | N/A | N/A |

---

## WORKFLOW 1: `*review` → `review-quality/`

### Current State (Extraction)

**Location:** Lines 894-940 in `gsap-director.md`

**Complete Inline Action Content:**
```xml
<item cmd="*review" action="inline">Assess animation quality using KB-powered analysis

🎬 **Animation Quality Review (KB-Powered)**

I'll review your animation work against excellence standards backed by comprehensive research.

**Please provide:**
1. Description of what the animation should do
2. Current implementation (code or description)
3. Animation type (hero section, scroll narrative, micro-interaction, etc.)
4. Any specific concerns you have

**My Review Process:**

<!-- TIER 1: Query Archon MCP for Premium Patterns -->
<action>Search Archon for similar premium examples:
  - rag_search_knowledge_base("premium [animation_type] patterns")
  - rag_search_knowledge_base("wow-factor [animation_context]")
  - rag_search_code_examples("[animation_type] choreography")
  - Compare your work against best-in-class examples
</action>

<!-- TIER 1: Reference Deep-Research Frameworks -->
<action>Apply Deep-Research quality frameworks:
  - Section 1.1: Animator's Mindset → Does this think like storytelling?
  - Section 1.4: Decision Framework → Right animation for context?
  - Section 2.2: Timeline Techniques → Choreography quality assessment
</action>

<!-- TIER 2: WebSearch for 2025 Premium Comparisons -->
<action>If needed, research 2024-2025 premium trends:
  - WebSearch("[animation_type] Awwwards 2025")
  - WebSearch("premium [brand_type] animation examples")
  - Compare against cutting-edge implementations
</action>

**Excellence Assessment Criteria:**
- ✨ **Wow Factor:** Premium vs. generic? Memorable vs. forgettable?
- 🎯 **Ambition Level:** Pushing boundaries vs. safe defaults?
- 🎬 **Vision Match:** Implementation matches creative intent?
- 🤖 **AI Detection:** Would someone think this is AI-generated?
- 📚 **KB Benchmark:** How does it compare to Archon's premium examples?

**Output:** Detailed assessment with KB citations and specific improvement recommendations.

*"Let me analyze this against our knowledge base of premium patterns..."*
</item>
```

---

### Target Workflow Structure

**Workflow Name:** `review-quality`
**Directory:** `/bmad/gsap-excellence/workflows/review-quality/`

**Files to Create:**
1. `workflow.yaml` - Configuration
2. `instructions.md` - 4-step workflow process
3. `template.md` - Quality assessment report output

**Workflow Steps:**
1. **Context Gathering** - Collect animation details from user
2. **Multi-Source Research** - Archon + Deep-Research + WebSearch
3. **Quality Assessment** - Evaluate against excellence criteria
4. **Generate Report** - Detailed assessment with citations

---

### Complete workflow.yaml

**File:** `/bmad/gsap-excellence/workflows/review-quality/workflow.yaml`

```yaml
name: 'review-quality'
description: 'Assess animation quality using KB-powered analysis against excellence standards'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/review-quality'
instructions: '{installed_path}/instructions.md'
template: '{installed_path}/template.md'
default_output_file: '{output_folder}/animation-quality-review.md'

# Standard config block (REQUIRED - provides communication_language, user_name, date, output_folder)
config_source: '{project-root}/bmad/gsap-excellence/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from Director agent menu)
```

---

### Complete instructions.md

**File:** `/bmad/gsap-excellence/workflows/review-quality/instructions.md`

```markdown
# Animation Quality Review - Workflow Instructions
# KB-Powered Excellence Assessment with Multi-Source Research

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/review-quality/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Animation Details">
<action>Introduce the quality review workflow with film director energy</action>

🎬 **Animation Quality Review (KB-Powered)**

I'll review your animation work against excellence standards backed by comprehensive research.

**Please provide complete details:**

<ask response="animation_description">What should this animation do? (Be specific about behavior and intent)</ask>
<ask response="current_implementation">Current implementation - provide GSAP code OR detailed description</ask>
<ask response="animation_type">Animation type? (hero section / scroll narrative / micro-interaction / page transition / product showcase / other)</ask>
<ask response="specific_concerns">Any specific concerns or areas to focus on? (performance / timing / wow-factor / accessibility / other)</ask>

<action>Confirm understanding and preview the research-backed assessment process</action>

*"Excellent. I'll analyze this against our knowledge base of premium patterns, Deep-Research frameworks, and 2024-2025 cutting-edge examples. Let's begin the research..."*

<template-output>animation_description, current_implementation, animation_type, specific_concerns</template-output>
</step>

<step n="2" goal="Multi-Source Research Protocol - KB-Powered Pattern Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to assessment until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on user's animation review request:
    - Animation Type: {{animation_type}}
    - Specific Concerns: {{specific_concerns}}

    You MUST execute the complete 3-tier research protocol below BEFORE proceeding to quality assessment.</mandate>

  <!-- TIER 1A: Archon MCP - Premium Pattern Search -->
  <phase n="1" title="Archon MCP Premium Pattern Discovery" required="true">
    <action>Execute systematic searches for premium {{animation_type}} patterns:

    **Search 1: Premium Patterns**
    rag_search_knowledge_base("premium {{animation_type}} patterns", match_count=8)

    **Search 2: Wow-Factor Techniques**
    rag_search_knowledge_base("wow-factor {{animation_type}} techniques", match_count=6)

    **Search 3: Code Examples**
    rag_search_code_examples("{{animation_type}} choreography GSAP", match_count=8)

    **Search 4: Excellence Benchmarks**
    rag_search_knowledge_base("museum-grade {{animation_type}} implementation", match_count=5)

    **If specific concerns mentioned:**
    - If performance: rag_search_knowledge_base("{{animation_type}} 60fps optimization")
    - If timing: rag_search_knowledge_base("{{animation_type}} timing choreography easing")
    - If wow-factor: rag_search_knowledge_base("{{animation_type}} Awwwards premium")
    </action>

    <evidence required="true">
      **ARCHON FINDINGS:**
      Present 10-15 premium patterns discovered, organized by quality tier:

      **TIER 1 - Museum-Grade (Awwwards, premium agencies):**
      - [Pattern name]: [Brief description] (Source: [citation])

      **TIER 2 - Professional (Codrops, advanced tutorials):**
      - [Pattern name]: [Brief description] (Source: [citation])

      **TIER 3 - Solid/Basic (CodePen, standard examples):**
      - [Pattern name]: [Brief description] (Source: [citation])

      **Relevance Assessment:**
      - Which patterns most closely match user's {{animation_type}}?
      - Quality gap: Is user's implementation at Tier 1/2/3 level?
    </evidence>

    <validation>If results insufficient (<8 total findings), refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks - Excellence Standards -->
  <phase n="2" title="Deep-Research Framework Application" required="true">
    <action>Apply Deep-Research quality assessment frameworks:

    **Framework 1: Animator's Mindset (Section 1.1)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/01-11-the-animators-mindset-vs-code-generator.md

    Assessment Questions:
    - Does this animation think like storytelling, not code generation?
    - Is there clear design intent (purpose-driven motion)?
    - Does it choreograph elements in time (not random effects)?
    - Would a human animator be proud of this?

    **Framework 2: Decision Framework (Section 1.4)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/04-14-deciding-between-gsap-and-alternatives.md

    Assessment Questions:
    - Is GSAP the right tool for this animation type?
    - Are premium plugins being used where beneficial? (FREE in 3.13+!)
    - Is the technique appropriate for the context?

    **Framework 3: Timeline Techniques (Section 2.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

    Assessment Questions:
    - Does choreography use overlaps for rhythm (`"-=0.4"`, `"<0.5"`)?
    - Is timing intentional vs. mechanical?
    - Are labels and modular structure used for complex sequences?

    **Additional Frameworks (if concerns mentioned):**
    - Performance concerns → Section 5.5: Optimize for 60fps
    - Accessibility → Section 6.1: prefers-reduced-motion
    - Common issues → Section 8.1-8.10: Pitfalls checklist
    </action>

    <evidence required="true">
      **DEEP-RESEARCH ASSESSMENT:**

      **Section 1.1 - Animator's Mindset:**
      - Storytelling vs. code generation: [PASS/FAIL with explanation]
      - Design intent clarity: [Score 1-10 with reasoning]
      - Choreography quality: [Analysis]

      **Section 1.4 - Decision Framework:**
      - Tool appropriateness: [Analysis]
      - Premium plugin usage: [Opportunities identified]

      **Section 2.2 - Timeline Techniques:**
      - Rhythm and flow: [Assessment]
      - Choreography sophistication: [Analysis]

      **Red Flags Identified:**
      - [List any anti-patterns or common pitfalls detected]
    </evidence>
  </phase>

  <!-- TIER 2: WebSearch - 2024-2025 Premium Comparisons -->
  <phase n="3" title="2025 Premium Examples (Conditional)" required="conditional">
    <condition>If Archon lacks 2025-specific premium examples for {{animation_type}}</condition>

    <action>Search for cutting-edge 2024-2025 implementations:

    **Search 1: Awwwards Winners**
    WebSearch("{{animation_type}} animation Awwwards 2025")

    **Search 2: Premium Brands**
    WebSearch("premium {{animation_type}} Linear Stripe Vercel Apple")

    **Search 3: Industry-Specific**
    WebSearch("{{animation_type}} animation [user_industry] 2024 premium")

    Target: Find 3-5 recent examples that represent current state-of-the-art
    </action>

    <evidence>
      **2024-2025 PREMIUM EXAMPLES:**
      - [URL]: [Brief description of technique]
      - [URL]: [Brief description of technique]
      - [URL]: [Brief description of technique]

      **Trend Analysis:**
      - What's cutting-edge right now for {{animation_type}}?
      - How does user's implementation compare to 2025 standards?
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Quality Benchmark Findings**

      **TIER 1A: Archon MCP Premium Patterns**
      [Present 10-15 patterns organized by quality tier]

      **TIER 1B: Deep-Research Framework Assessment**
      [Present framework scores and red flags]

      **TIER 2: 2024-2025 Premium Examples (if applicable)**
      [Present cutting-edge examples]

      **SYNTHESIS - Quality Benchmarking:**
      - **Current Quality Tier:** [Tier 1/2/3 assessment]
      - **Gap Analysis:** [Distance from premium/excellence]
      - **Opportunity Areas:** [What could elevate this to next tier]

      **CITATIONS:**
      [All Archon sources with IDs, Deep-Research sections, WebSearch URLs]
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to quality assessment.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
archon_premium_patterns,
deep_research_assessment,
websearch_2025_examples,
quality_tier_current,
gap_analysis,
research_citations
</template-output>
</step>

<step n="3" goal="Excellence Assessment - Evaluate Against 5 Criteria">
<action>Using research findings, evaluate animation against Director's excellence criteria</action>

**Excellence Assessment Framework:**

**Criterion 1: ✨ Wow Factor**
<action>Evaluate: Premium vs. generic? Memorable vs. forgettable?

Using Archon premium patterns as benchmark:
- Does this match Tier 1 (museum-grade) patterns?
- Or closer to Tier 2 (professional) or Tier 3 (basic)?
- What specifically creates (or lacks) wow factor?
</action>

**Criterion 2: 🎯 Ambition Level**
<action>Evaluate: Pushing boundaries vs. safe defaults?

Using Deep-Research Section 1.1 (Animator's Mindset):
- Is this thinking like a storyteller or a code generator?
- Safe/obvious choices vs. creative risk-taking?
- Compare against 2025 premium examples (if available)
</action>

**Criterion 3: 🎬 Vision Match**
<action>Evaluate: Implementation matches creative intent?

Using user's {{animation_description}}:
- Does the code achieve stated goals?
- Technical execution quality?
- Any mismatch between intent and reality?
</action>

**Criterion 4: 🤖 AI Detection Test**
<action>Evaluate: Would someone think this is AI-generated?

Red flags for AI-generated mediocrity:
- Generic fade-in-up animations (no personality)
- Equal timing for everything (mechanical)
- No overlaps or rhythm (rigid sequential)
- Missing premium plugin opportunities
- Ignoring Deep-Research principles

Green flags for human-crafted excellence:
- Intentional choreography with overlaps
- Varied easing (personality)
- Premium plugin usage (MorphSVG, SplitText, etc.)
- Storytelling structure
- Deep-Research principles applied
</action>

**Criterion 5: 📚 KB Benchmark**
<action>Evaluate: How does it compare to Archon's premium examples?

Direct comparison:
- User's implementation vs. Tier 1 Archon patterns
- Specific strengths identified
- Specific weaknesses identified
- Distance to excellence (close? moderate gap? large gap?)
</action>

<template-output>
wow_factor_assessment,
ambition_level_assessment,
vision_match_assessment,
ai_detection_assessment,
kb_benchmark_assessment
</template-output>
</step>

<step n="4" goal="Generate Quality Review Report">
<action>Compile comprehensive quality assessment report with citations and specific recommendations</action>

**Report Structure:**

1. **Executive Summary**
   - Overall quality tier: [Tier 1/2/3]
   - Key strengths (3-5 bullet points)
   - Key opportunities (3-5 bullet points)

2. **Excellence Criteria Assessment**
   - Each of 5 criteria with score/analysis
   - KB citations for each assessment

3. **Specific Improvement Recommendations**
   - Prioritized list (HIGH/MEDIUM/LOW impact)
   - Link each recommendation to Archon pattern or Deep-Research section
   - Concrete, actionable steps

4. **Code Examples (if applicable)**
   - Show before/after for key improvements
   - Reference Archon patterns

5. **Citations & References**
   - All Archon sources used
   - All Deep-Research sections consulted
   - All WebSearch examples referenced

**Present final report with film director energy:**

*"That's a wrap on the quality review! Here's my assessment backed by our complete knowledge base..."*

<template-output>
executive_summary,
criteria_assessments,
improvement_recommendations,
code_examples,
final_citations
</template-output>
</step>

</workflow>
```

---

### Complete template.md

**File:** `/bmad/gsap-excellence/workflows/review-quality/template.md`

```markdown
# Animation Quality Review Report

**Generated:** {{date}}
**Animation Type:** {{animation_type}}
**Reviewed By:** The Director (GSAP Excellence Module)

---

## Executive Summary

**Overall Quality Tier:** {{quality_tier_current}}

**Key Strengths:**
{{executive_summary_strengths}}

**Key Opportunities:**
{{executive_summary_opportunities}}

---

## Animation Details

**Description:** {{animation_description}}

**Implementation:**
```javascript
{{current_implementation}}
```

**Specific Concerns:** {{specific_concerns}}

---

## Excellence Criteria Assessment

### ✨ Wow Factor
{{wow_factor_assessment}}

**Benchmark:** {{archon_premium_patterns_summary}}

---

### 🎯 Ambition Level
{{ambition_level_assessment}}

**Deep-Research Reference:** Section 1.1 - Animator's Mindset

---

### 🎬 Vision Match
{{vision_match_assessment}}

---

### 🤖 AI Detection Test
{{ai_detection_assessment}}

**Red Flags Identified:** {{ai_detection_red_flags}}
**Green Flags Identified:** {{ai_detection_green_flags}}

---

### 📚 KB Benchmark Comparison
{{kb_benchmark_assessment}}

**Archon Tier 1 Patterns Referenced:**
{{archon_tier1_patterns}}

---

## Research Findings

### Archon MCP Premium Patterns
{{archon_premium_patterns}}

### Deep-Research Framework Assessment
{{deep_research_assessment}}

### 2024-2025 Premium Examples
{{websearch_2025_examples}}

---

## Improvement Recommendations

### HIGH Priority (Significant Impact)
{{improvement_recommendations_high}}

### MEDIUM Priority (Moderate Impact)
{{improvement_recommendations_medium}}

### LOW Priority (Polish & Refinement)
{{improvement_recommendations_low}}

---

## Code Examples

{{code_examples}}

---

## Citations & References

### Archon MCP Sources
{{research_citations_archon}}

### Deep-Research Sections
{{research_citations_deep_research}}

### WebSearch Examples
{{research_citations_websearch}}

---

*🎬 Generated using GSAP Excellence Module - Research-Backed Quality Assessment*
*"That's cinema!" - The Director*
```

---

### Agent Menu Update

**File:** `/bmad/gsap-excellence/agents/gsap-director.md`

**BEFORE (Lines 894-940):**
```xml
<item cmd="*review" action="inline">Assess animation quality using KB-powered analysis

🎬 **Animation Quality Review (KB-Powered)**

[... 47 lines of inline content ...]

*"Let me analyze this against our knowledge base of premium patterns..."*
</item>
```

**AFTER (Replace with 3 lines):**
```xml
<item cmd="*review" workflow="{module_root}/workflows/review-quality/workflow.yaml">
  Assess animation quality using KB-powered analysis
</item>
```

**Line Savings:** 47 lines → 3 lines (**-44 lines per agent load**)

---

### Testing Protocol

**Test Scenario 1: Basic Functionality**
1. Load Director agent
2. Select `*review` command
3. **Expected:** `review-quality` workflow loads
4. **Verify:** Step 1 asks for animation details (4 questions)
5. Provide test inputs
6. **Expected:** Step 2 research gate activates
7. **Verify:** Agent executes Archon searches (watch for rag_search_knowledge_base calls)
8. **Verify:** Agent presents research summary
9. **Verify:** Agent HALTS and waits for "Continue [c]"
10. Type "Continue"
11. **Expected:** Step 3 (assessment) executes
12. **Expected:** Step 4 (report generation) executes
13. **Verify:** Output matches template.md structure

**Test Scenario 2: Research Enforcement**
1. Load Director → `*review`
2. At Step 2 research gate
3. **Verify:** Agent CANNOT skip to Step 3 without executing research
4. **Verify:** Agent executes at least 4 Archon searches
5. **Verify:** Agent references Deep-Research sections 1.1, 1.4, 2.2
6. **Verify:** Agent presents findings before continuing

**Test Scenario 3: Token Efficiency**
1. **Before conversion:** Load Director agent
   - Measure context size (includes all inline actions)
   - Expected: ~1,107 lines
2. **After conversion:** Load Director agent
   - Measure context size (inline action removed)
   - Expected: ~1,063 lines (-44 lines, -4%)
3. **Workflow execution:** Select `*review`
   - Additional context: ~200-250 lines (workflow only)
   - Total: ~1,313 lines
   - **But:** Inline actions from OTHER commands not loaded!
   - **Savings:** When user wants `*review`, they don't load `*vision-plan` inline content

**Success Criteria:**
- ✅ Workflow executes without errors
- ✅ Research gate enforces Archon searches
- ✅ Output matches template structure
- ✅ Agent file size reduced by 44 lines
- ✅ KB citations present in final report
- ✅ Functionality preserved (same behavior as inline)

---

## WORKFLOW 2: `*vision-plan` → `plan-narrative/`

### Current State (Extraction)

**Location:** Lines 941-997 in `gsap-director.md`

**Complete Inline Action Content:**
```xml
<item cmd="*vision-plan" action="inline">Create visual narrative plan using Pixar Story Spine framework

🎬 **Visual Narrative Planning (KB-Powered)**

I'll help you plan your animation's narrative structure using proven storytelling frameworks.

**Please provide:**
1. What component/page needs animation?
2. What story should it tell? (user journey, value proposition, feature reveal, etc.)
3. Key moments you want to emphasize
4. Desired user emotion/response

**My Planning Process:**

<!-- TIER 1: Query Archon for Narrative Examples -->
<action>Search Archon for scroll storytelling patterns:
  - rag_search_knowledge_base("scroll choreography storytelling")
  - rag_search_knowledge_base("animation narrative structure")
  - rag_search_code_examples("scroll narrative sequences")
  - Find premium examples of animation-driven storytelling
</action>

<!-- TIER 1: Apply Deep-Research Frameworks -->
<action>Apply Pixar Story Spine framework (Section 1.3):
  - Once upon a time... (establish context)
  - Every day... (show the status quo)
  - Until one day... (introduce the change/feature)
  - Because of that... (show consequences/benefits)
  - Until finally... (resolution/CTA)

  Translate this narrative structure into animation sequence planning.
</action>

<!-- TIER 1: Reference Timeline Choreography -->
<action>Apply Section 2.2 timeline techniques:
  - Break narrative into visual "acts"
  - Plan timing and pacing for each beat
  - Coordinate multiple elements for cohesive story
  - Design transitions between narrative moments
</action>

<!-- TIER 2: Research Premium Scroll Narratives -->
<action>If needed, find 2024-2025 premium examples:
  - WebSearch("scroll storytelling Awwwards 2025")
  - WebSearch("animation narrative [industry] premium")
  - Identify cutting-edge narrative techniques
</action>

**Output:** Storyboard-style narrative plan with:
- Narrative beats mapped to scroll position or user actions
- Timeline sequence structure
- Key animation moments
- Emotional arc planning
- Citations from KB examples

*"Every great animation tells a story. Let's plan yours..."*
</item>
```

---

### Target Workflow Structure

**Workflow Name:** `plan-narrative`
**Directory:** `/bmad/gsap-excellence/workflows/plan-narrative/`

**Files to Create:**
1. `workflow.yaml` - Configuration
2. `instructions.md` - 4-step workflow process
3. `template.md` - Narrative plan output document

**Workflow Steps:**
1. **Context Gathering** - Component details and story intent
2. **Multi-Source Research** - Narrative patterns from Archon + Deep-Research
3. **Apply Pixar Story Spine** - Map narrative to animation sequence
4. **Generate Narrative Plan** - Storyboard-style document with timeline structure

---

### Complete workflow.yaml

**File:** `/bmad/gsap-excellence/workflows/plan-narrative/workflow.yaml`

```yaml
name: 'plan-narrative'
description: 'Create visual narrative plan using Pixar Story Spine framework and KB-powered research'
installed_path: '{project-root}/bmad/gsap-excellence/workflows/plan-narrative'
instructions: '{installed_path}/instructions.md'
template: '{installed_path}/template.md'
default_output_file: '{output_folder}/animation-narrative-plan.md'

# Standard config block (REQUIRED - provides communication_language, user_name, date, output_folder)
config_source: '{project-root}/bmad/gsap-excellence/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

standalone: false  # Agent-context-dependent workflow (only callable from Director agent menu)
```

---

### Complete instructions.md

**File:** `/bmad/gsap-excellence/workflows/plan-narrative/instructions.md`

```markdown
# Visual Narrative Planning - Workflow Instructions
# Pixar Story Spine Framework + KB-Powered Research

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/plan-narrative/workflow.yaml</critical>

<workflow>

<step n="1" goal="Context Gathering - Story Intent & Component Details">
<action>Introduce the narrative planning workflow with film director energy</action>

🎬 **Visual Narrative Planning (KB-Powered)**

Every great animation tells a story. Let's plan yours using proven storytelling frameworks and premium examples.

**Please provide complete details:**

<ask response="component_or_page">What component or page needs animation? (hero section / about page / product showcase / full site / specific component)</ask>
<ask response="story_to_tell">What story should it tell? (user journey / value proposition / feature reveal / brand narrative / transformation story / other)</ask>
<ask response="key_moments">What are the key moments you want to emphasize? (3-5 specific beats or transitions)</ask>
<ask response="desired_emotion">What should users FEEL during this animation? (inspired / confident / curious / delighted / empowered / other)</ask>
<ask response="interaction_type">Interaction type? (scroll-driven / auto-play on load / user-triggered / hybrid)</ask>

<action>Confirm understanding and preview the storytelling approach</action>

*"Excellent. I'll research narrative patterns from our knowledge base and map your story to the Pixar Story Spine framework. This will give you a clear animation storyboard..."*

<template-output>component_or_page, story_to_tell, key_moments, desired_emotion, interaction_type</template-output>
</step>

<step n="2" goal="Multi-Source Research - Narrative Pattern Discovery">
<critical>RESEARCH ENFORCEMENT: You CANNOT proceed to planning until research complete and validated</critical>

<!-- ========== RESEARCH GATE (MANDATORY) ========== -->
<research-gate enforcement="MANDATORY" blocking="true">
  <mandate>Based on user's narrative planning request:
    - Story Type: {{story_to_tell}}
    - Interaction: {{interaction_type}}
    - Emotion: {{desired_emotion}}

    You MUST execute the complete research protocol below BEFORE proceeding to narrative planning.</mandate>

  <!-- TIER 1A: Archon MCP - Narrative Pattern Search -->
  <phase n="1" title="Archon MCP Narrative Pattern Discovery" required="true">
    <action>Execute systematic searches for narrative animation patterns:

    **Search 1: Scroll Choreography Storytelling**
    rag_search_knowledge_base("scroll choreography storytelling", match_count=8)

    **Search 2: Animation Narrative Structure**
    rag_search_knowledge_base("animation narrative structure", match_count=8)

    **Search 3: Story-Driven Scroll Examples**
    rag_search_code_examples("scroll narrative sequences", match_count=8)

    **Search 4: {{story_to_tell}} Patterns**
    rag_search_knowledge_base("{{story_to_tell}} animation patterns", match_count=6)

    **Search 5: {{interaction_type}} Narratives**
    rag_search_knowledge_base("{{interaction_type}} storytelling GSAP", match_count=5)
    </action>

    <evidence required="true">
      **ARCHON NARRATIVE PATTERNS:**
      Present 10-15 narrative animation patterns discovered:

      **Scroll Storytelling Patterns:**
      - [Pattern name]: [How it tells story] (Source: [citation])

      **{{story_to_tell}} Examples:**
      - [Pattern name]: [Narrative structure] (Source: [citation])

      **{{interaction_type}} Techniques:**
      - [Pattern name]: [How interaction drives narrative] (Source: [citation])

      **Relevance Assessment:**
      - Which patterns best match user's story intent?
      - How do premium examples structure narrative arcs?
      - Timing/pacing patterns identified?
    </evidence>

    <validation>If results insufficient (<10 patterns), refine queries and search again</validation>
  </phase>

  <!-- TIER 1B: Deep-Research Frameworks - Storytelling Structure -->
  <phase n="2" title="Deep-Research Storytelling Frameworks" required="true">
    <action>Apply Deep-Research narrative and choreography frameworks:

    **Framework 1: Storyboarding Complex Sequences (Section 1.3)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/03-13-storyboarding-complex-sequences.md

    Key Principles to Apply:
    - **Pixar Story Spine** - 5-act narrative structure
      - Once upon a time... (establish context/status quo)
      - Every day... (show the normal state)
      - Until one day... (introduce change/feature/value prop)
      - Because of that... (show consequences/benefits)
      - Until finally... (resolution/CTA/transformation)

    - **Temporal Landmarks** - Define start, middle, end
    - **Parallel vs Sequential Motion** - Which elements move together vs. in sequence
    - **Ease and Intensity Planning** - Emotional pacing through easing curves

    **Framework 2: Timeline Choreography (Section 2.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/06-22-mastering-gsap-timeline-techniques.md

    Choreography Techniques:
    - **Relative Positioning** - Create rhythm with overlaps (`"-=0.4"`, `"<0.5"`)
    - **Labels** - Named narrative beats ("intro", "climax", "resolution")
    - **Nesting Timelines** - Modular narrative sections
    - **Control Methods** - Interactive narrative control (play, pause, scrub)

    **Framework 3: Visual Translation (Section 1.2)**
    Location: {project-root}/docs/Deep-Research/GSAP-Animation-Mastery/02-12-visual-inspiration-technical-translation-workflow.md

    Translation Steps:
    - Map story beats to visual effects
    - Choreograph on paper before code
    - Choose appropriate GSAP techniques
    </action>

    <evidence required="true">
      **DEEP-RESEARCH FRAMEWORKS APPLIED:**

      **Pixar Story Spine Mapping:**
      - Once upon a time: [How to establish context for {{component_or_page}}]
      - Every day: [Status quo visualization]
      - Until one day: [Change/trigger event]
      - Because of that: [Consequences shown through animation]
      - Until finally: [Resolution beat]

      **Timeline Choreography Principles:**
      - Overlap patterns for rhythm
      - Label structure for narrative beats
      - Modular timeline approach

      **Visual Translation Strategy:**
      - Story beat → Animation technique mapping
      - Timing and easing for emotional arc
    </evidence>
  </phase>

  <!-- TIER 2: WebSearch - 2024-2025 Narrative Trends -->
  <phase n="3" title="2025 Premium Narrative Examples (Conditional)" required="conditional">
    <condition>If Archon lacks 2025-specific {{story_to_tell}} narrative examples</condition>

    <action>Search for cutting-edge narrative animation examples:

    **Search 1: Awwwards Scroll Storytelling**
    WebSearch("scroll storytelling Awwwards 2025")

    **Search 2: Industry-Specific Narratives**
    WebSearch("animation narrative {{story_to_tell}} premium 2024")

    **Search 3: Brand Examples**
    WebSearch("Linear Stripe Apple scroll narrative animation")

    Target: Find 3-5 premium examples of narrative-driven animations
    </action>

    <evidence>
      **2024-2025 NARRATIVE EXAMPLES:**
      - [URL]: [How it structures narrative] ([Brand/Agency])
      - [URL]: [Narrative technique] ([Brand/Agency])
      - [URL]: [Story approach] ([Brand/Agency])

      **Narrative Trends Identified:**
      - [Current trend 1]
      - [Current trend 2]
      - [How user's story could leverage these trends]
    </evidence>
  </phase>

  <!-- MANDATORY CHECKPOINT -->
  <checkpoint type="approval-gate" blocking="true">
    <output format="structured">
      **🔍 RESEARCH COMPLETE - Narrative Pattern Findings**

      **TIER 1A: Archon Narrative Patterns**
      [Present 10-15 narrative patterns with examples]

      **TIER 1B: Deep-Research Frameworks**
      - Pixar Story Spine: [5-act structure mapped]
      - Timeline Choreography: [Techniques identified]
      - Visual Translation: [Story → Animation mapping]

      **TIER 2: 2024-2025 Premium Narratives (if applicable)**
      [Present cutting-edge examples]

      **SYNTHESIS - Narrative Strategy:**
      - **Story Structure:** [Recommended 5-act breakdown]
      - **Choreography Approach:** [Parallel vs. sequential planning]
      - **Timing Strategy:** [Emotional pacing through easing]
      - **Premium Patterns to Adapt:** [Specific Archon/WebSearch patterns]

      **CITATIONS:**
      [All Archon sources, Deep-Research sections, WebSearch URLs]
    </output>

    <halt>🚨 STOP. Wait for {user_name} to respond "Continue [c]" before proceeding to narrative planning.</halt>

    <user-override>
      Only {user_name} can skip research with explicit "Skip research [s]" command.
      Agent CANNOT autonomously skip research.
    </user-override>
  </checkpoint>
</research-gate>
<!-- ========== END RESEARCH GATE ========== -->

<template-output>
archon_narrative_patterns,
pixar_story_spine_mapped,
timeline_choreography_techniques,
visual_translation_strategy,
websearch_2025_narratives,
narrative_strategy_synthesis,
research_citations
</template-output>
</step>

<step n="3" goal="Apply Pixar Story Spine - Map Narrative to Animation Sequence">
<action>Using research findings, apply Pixar Story Spine framework to create detailed narrative structure</action>

**Narrative Planning Framework:**

**ACT 1: Once Upon a Time... (Establish Context)**
<action>Plan opening beat for {{component_or_page}}:

Using Archon patterns and Deep-Research Section 3.1 (Page Load Sequence):
- Initial state: What do users see first?
- Brand/context establishment: How do we set the stage?
- Timing: 0-0.8s typically for opening beat
- Animation techniques from research: [Apply specific pattern]
- Easing: Gentle/welcoming (power2.out suggested)
</action>

**ACT 2: Every Day... (Status Quo)**
<action>Plan status quo visualization:

- What's the "normal" state before change?
- How long to hold this beat? (0.8-2s typical)
- Visual representation of "before"
- Sets up contrast for "until one day" beat
</action>

**ACT 3: Until One Day... (Introduce Change)**
<action>Plan the transformation/reveal moment:

Using {{story_to_tell}} patterns from research:
- The trigger event (scroll position? user action? auto-play timing?)
- Visual representation of change/feature/value
- Peak moment of animation (2-3s into sequence typically)
- More dramatic easing (back.out, elastic suggested for emphasis)
- Elements from {{key_moments}} integrated here
</action>

**ACT 4: Because of That... (Consequences/Benefits)**
<action>Plan consequence visualization:

- Show the result of the change
- Benefits made visible through animation
- Multiple elements can be choreographed in parallel here
- Using timeline choreography from Section 2.2 (overlaps for richness)
- Timing: 3-5s into overall sequence
</action>

**ACT 5: Until Finally... (Resolution/CTA)**
<action>Plan resolution and call-to-action:

Using Deep-Research Section 3.1 patterns:
- Final state reached
- CTA emphasized (often with playful bounce: back.out(1.7))
- Emotional payoff: User should feel {{desired_emotion}}
- Timing: 5-7s total sequence (or scroll-driven endpoint)
</action>

<template-output>
act1_once_upon_time,
act2_every_day,
act3_until_one_day,
act4_because_of_that,
act5_until_finally,
complete_narrative_arc
</template-output>
</step>

<step n="4" goal="Generate Narrative Plan Document - Storyboard with Timeline Structure">
<action>Compile comprehensive narrative plan with visual storyboard, timeline structure, and technical specs</action>

**Narrative Plan Document Structure:**

1. **Narrative Overview**
   - Story summary using Pixar Story Spine
   - Emotional arc: Start → Peak → Resolution
   - Total duration / scroll distance
   - {{desired_emotion}} achievement strategy

2. **Visual Storyboard (5 Acts)**
   - Each act with visual description
   - Timing / scroll position markers
   - Key animation techniques (from research)
   - Easing curves for emotional pacing

3. **Timeline Technical Specification**
   - GSAP timeline structure (labels, nesting)
   - Relative positioning plan (overlaps specified)
   - Stagger patterns (if applicable)
   - Premium plugin opportunities identified

4. **Key Animation Moments (from {{key_moments}})**
   - Each moment mapped to narrative beat
   - Technical implementation approach
   - Archon pattern references

5. **Implementation Roadmap**
   - Step-by-step build sequence
   - Testing checkpoints
   - Accessibility considerations (prefers-reduced-motion fallback)

6. **Citations & Pattern References**
   - All Archon patterns used
   - All Deep-Research sections applied
   - All WebSearch examples referenced

**Present final narrative plan with film director energy:**

*"That's a wrap on the narrative plan! You now have a complete storyboard ready for implementation. Every beat tells your story..."*

<template-output>
narrative_overview,
visual_storyboard_5acts,
timeline_technical_spec,
key_moments_mapped,
implementation_roadmap,
final_citations
</template-output>
</step>

</workflow>
```

---

### Complete template.md

**File:** `/bmad/gsap-excellence/workflows/plan-narrative/template.md`

```markdown
# Animation Narrative Plan

**Generated:** {{date}}
**Component:** {{component_or_page}}
**Story Type:** {{story_to_tell}}
**Planned By:** The Director (GSAP Excellence Module)

---

## Narrative Overview

**Story Summary (Pixar Story Spine):**
{{complete_narrative_arc}}

**Emotional Arc:**
- **Start:** {{act1_once_upon_time_emotion}}
- **Peak:** {{act3_until_one_day_emotion}}
- **Resolution:** {{act5_until_finally_emotion}}
- **Target Emotion:** {{desired_emotion}}

**Duration/Scroll Distance:**
- {{interaction_type}}
- Total: {{total_duration_or_scroll}}

---

## Visual Storyboard (5 Acts)

### ACT 1: Once Upon a Time... (Establish Context)
{{act1_once_upon_time}}

**Timing:** {{act1_timing}}
**Animation Techniques:** {{act1_techniques}}
**Easing:** {{act1_easing}}
**Archon Pattern Reference:** {{act1_pattern_reference}}

---

### ACT 2: Every Day... (Status Quo)
{{act2_every_day}}

**Timing:** {{act2_timing}}
**Animation Techniques:** {{act2_techniques}}
**Easing:** {{act2_easing}}

---

### ACT 3: Until One Day... (Introduce Change) 🎯 PEAK MOMENT
{{act3_until_one_day}}

**Timing:** {{act3_timing}}
**Animation Techniques:** {{act3_techniques}}
**Easing:** {{act3_easing}}
**Archon Pattern Reference:** {{act3_pattern_reference}}

**Key Moments Emphasized:**
{{key_moments_integrated}}

---

### ACT 4: Because of That... (Consequences/Benefits)
{{act4_because_of_that}}

**Timing:** {{act4_timing}}
**Animation Techniques:** {{act4_techniques}}
**Choreography:** {{act4_choreography}} (parallel elements, overlaps)

---

### ACT 5: Until Finally... (Resolution/CTA)
{{act5_until_finally}}

**Timing:** {{act5_timing}}
**Animation Techniques:** {{act5_techniques}}
**Easing:** {{act5_easing}}
**CTA Strategy:** {{act5_cta_strategy}}

---

## Timeline Technical Specification

### GSAP Timeline Structure
```javascript
const narrativeTl = gsap.timeline({
  defaults: { ease: "power2.out", duration: 1 }
});

// ACT 1: Once Upon a Time
narrativeTl.addLabel("act1-context");
{{timeline_act1_code}}

// ACT 2: Every Day (Status Quo)
narrativeTl.addLabel("act2-status-quo", "+=0.5");
{{timeline_act2_code}}

// ACT 3: Until One Day (Change/Peak)
narrativeTl.addLabel("act3-change", "-=0.3"); // Overlap for flow!
{{timeline_act3_code}}

// ACT 4: Because of That (Consequences)
narrativeTl.addLabel("act4-consequences", "<0.4");
{{timeline_act4_code}}

// ACT 5: Until Finally (Resolution)
narrativeTl.addLabel("act5-resolution", "+=0.2");
{{timeline_act5_code}}
```

### Relative Positioning Plan
{{timeline_technical_spec_positioning}}

### Stagger Patterns
{{timeline_technical_spec_staggers}}

### Premium Plugin Opportunities
{{timeline_premium_plugins}}

---

## Key Animation Moments

{{key_moments_mapped}}

---

## Implementation Roadmap

### Phase 1: Foundation (Acts 1-2)
{{implementation_roadmap_phase1}}

### Phase 2: Peak Moment (Act 3)
{{implementation_roadmap_phase2}}

### Phase 3: Resolution (Acts 4-5)
{{implementation_roadmap_phase3}}

### Phase 4: Polish & Accessibility
{{implementation_roadmap_phase4}}

**Testing Checkpoints:**
- [ ] Act 1-2 timing feels natural
- [ ] Act 3 peak moment has impact
- [ ] Acts 4-5 flow smoothly
- [ ] Overall emotional arc achieves {{desired_emotion}}
- [ ] 60fps on mid-range devices
- [ ] prefers-reduced-motion fallback implemented

---

## Research Foundations

### Archon Narrative Patterns
{{archon_narrative_patterns}}

### Deep-Research Frameworks Applied
- **Section 1.3:** Storyboarding Complex Sequences (Pixar Story Spine)
- **Section 2.2:** Timeline Choreography (overlaps, labels, nesting)
- **Section 1.2:** Visual Translation (story → animation mapping)

**Specific Applications:**
{{deep_research_applications}}

### 2024-2025 Premium Examples
{{websearch_2025_narratives}}

---

## Citations & References

### Archon MCP Sources
{{research_citations_archon}}

### Deep-Research Sections
{{research_citations_deep_research}}

### WebSearch Examples
{{research_citations_websearch}}

---

*🎬 Generated using GSAP Excellence Module - Narrative-Driven Animation Planning*
*"Every great animation tells a story." - The Director*
```

---

### Agent Menu Update

**File:** `/bmad/gsap-excellence/agents/gsap-director.md`

**BEFORE (Lines 941-997):**
```xml
<item cmd="*vision-plan" action="inline">Create visual narrative plan using Pixar Story Spine framework

🎬 **Visual Narrative Planning (KB-Powered)**

[... 57 lines of inline content ...]

*"Every great animation tells a story. Let's plan yours..."*
</item>
```

**AFTER (Replace with 3 lines):**
```xml
<item cmd="*vision-plan" workflow="{module_root}/workflows/plan-narrative/workflow.yaml">
  Create visual narrative plan using Pixar Story Spine framework
</item>
```

**Line Savings:** 57 lines → 3 lines (**-54 lines per agent load**)

---

### Testing Protocol

**Test Scenario 1: Basic Functionality**
1. Load Director agent
2. Select `*vision-plan` command
3. **Expected:** `plan-narrative` workflow loads
4. **Verify:** Step 1 asks for narrative details (5 questions)
5. Provide test inputs (e.g., hero section, value proposition story)
6. **Expected:** Step 2 research gate activates
7. **Verify:** Agent executes Archon narrative searches
8. **Verify:** Agent references Deep-Research Section 1.3 (Pixar Story Spine)
9. **Verify:** Agent presents research summary with 5-act structure
10. **Verify:** Agent HALTS and waits for "Continue [c]"
11. Type "Continue"
12. **Expected:** Step 3 (Pixar Story Spine application) executes
13. **Verify:** Agent creates 5-act narrative breakdown
14. **Expected:** Step 4 (narrative plan generation) executes
15. **Verify:** Output includes storyboard, timeline spec, citations

**Test Scenario 2: Pixar Story Spine Framework**
1. Load Director → `*vision-plan`
2. Provide input: "hero section, value proposition story"
3. At Step 3, verify agent creates:
   - Act 1: Once upon a time (context)
   - Act 2: Every day (status quo)
   - Act 3: Until one day (change/feature)
   - Act 4: Because of that (benefits)
   - Act 5: Until finally (CTA/resolution)
4. **Verify:** Each act has timing, techniques, easing specified
5. **Verify:** Acts flow together (overlaps planned)

**Test Scenario 3: Research Integration**
1. Load Director → `*vision-plan`
2. At Step 2 research phase
3. **Verify:** Agent searches Archon for:
   - "scroll choreography storytelling"
   - "animation narrative structure"
   - "scroll narrative sequences"
   - User's specific story type
4. **Verify:** Agent reads Deep-Research Section 1.3 (Storyboarding)
5. **Verify:** Agent reads Deep-Research Section 2.2 (Timeline Techniques)
6. **Verify:** Agent applies Pixar Story Spine framework explicitly
7. **Verify:** Final plan includes KB citations

**Success Criteria:**
- ✅ Workflow executes without errors
- ✅ Research gate enforces Archon searches + Deep-Research reading
- ✅ Pixar Story Spine framework applied (5 acts)
- ✅ Output includes storyboard + timeline spec + citations
- ✅ Agent file size reduced by 54 lines
- ✅ Functionality preserved (same behavior as inline)

---

## Summary - Director Conversions

### Total Impact

**Inline Actions Converted:** 2
**Inline Actions Kept:** 4
**Total Line Reduction:** 101 lines → 6 lines (**-95 lines, -8.5%**)

**Token Efficiency:**
- **Before:** Every Director load = 1,107 lines (includes all inline actions)
- **After:** Every Director load = ~1,012 lines (inline actions removed)
- **Per Command:** Only load workflow needed (~200-250 lines)
- **Savings:** ~850-900 lines per command execution

### Workflows Created

1. **`workflows/review-quality/`**
   - Purpose: KB-powered animation quality assessment
   - Research: Archon + Deep-Research + WebSearch
   - Output: Detailed quality report with citations
   - Estimated conversion time: 30 minutes

2. **`workflows/plan-narrative/`**
   - Purpose: Pixar Story Spine narrative planning
   - Research: Archon narrative patterns + Deep-Research storytelling frameworks
   - Output: Storyboard-style narrative plan with timeline spec
   - Estimated conversion time: 35 minutes

**Total Conversion Time:** ~65 minutes (1 hour)

### Next Steps

After completing Director conversions:
1. Test both workflows thoroughly
2. Measure token savings
3. Proceed to Cinematographer conversions (4 workflows)
4. Then VFX, Editor, Tech Director

---

**Document Status:** COMPLETE - Ready for implementation
**Created:** 2025-11-05
**Agent:** Director
**Conversions:** 2 workflows fully specified
