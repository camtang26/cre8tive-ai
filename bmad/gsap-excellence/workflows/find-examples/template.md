# Premium GSAP Examples Catalog

**Generated:** {{date}}
**Motion Type:** {{motion_type}}
**Quality Filter:** {{quality_level}}
**Cinematographer Workflow:** find-examples
**Curated By:** The Cinematographer (GSAP Excellence Module)

---

## Executive Summary

**Total Examples Found:** {{total_count}}

**Quality Distribution:**
- **Award-winning:** {{award_winning_count}} examples (23-25 points)
- **Premium:** {{premium_count}} examples (20-22 points)
- **Professional:** {{professional_count}} examples (15-19 points)
- **Basic:** {{basic_count}} examples (10-14 points)

**Top 5 Picks:**
1. [{{pick_1_name}}]({{pick_1_url}}) - {{pick_1_score}}/25 - {{pick_1_rationale}}
2. [{{pick_2_name}}]({{pick_2_url}}) - {{pick_2_score}}/25 - {{pick_2_rationale}}
3. [{{pick_3_name}}]({{pick_3_url}}) - {{pick_3_score}}/25 - {{pick_3_rationale}}
4. [{{pick_4_name}}]({{pick_4_url}}) - {{pick_4_score}}/25 - {{pick_4_rationale}}
5. [{{pick_5_name}}]({{pick_5_url}}) - {{pick_5_score}}/25 - {{pick_5_rationale}}

**Sources:**
- Archon MCP: {{archon_example_count}} examples (CodePen, Awwwards, FreeFrontend, Demos, Codrops)
- WebSearch: {{websearch_example_count}} current examples (2024-2025)

---

## Award-Winning Examples (23-25 points)

{{#each_award_winning_example}}
### {{example_number}}. {{example_name}}

**URL:** [{{url}}]({{url}})
**Source:** {{codepen_awwwards_etc}}
**Creator/Agency:** {{creator_or_agency}}
**Award:** {{award_level_and_date}}
**Quality Score:** {{total_score}}/25

**Quality Breakdown:**
- Technical Excellence: {{technical_score}}/5
- Visual Polish: {{visual_score}}/5
- Innovation: {{innovation_score}}/5
- Practicality: {{practicality_score}}/5
- Impact: {{impact_score}}/5

**Pattern Used:**
{{pattern_description}}

**What Makes It Award-Winning:**
{{analysis_of_excellence}}

**Key Techniques:**
- {{technique_1}}
- {{technique_2}}
- {{technique_3}}

**GSAP Implementation:**
```javascript
{{code_snippet_key_techniques}}
```

**Plugins Used:**
{{plugin_list_with_free_notation}}

**Complexity:** {{simple_moderate_expert}}

**What to Adapt:**
{{adaptable_patterns}}

**Learning Value:**
{{what_can_be_learned}}

**Performance Notes:**
{{performance_considerations}}

**Accessibility:**
{{accessibility_implementation}}

---

{{/each_award_winning_example}}

---

## Premium Examples (20-22 points)

{{#each_premium_example}}
### {{example_number}}. {{example_name}}

**URL:** [{{url}}]({{url}})
**Source:** {{source}}
**Creator:** {{creator}}
**Quality Score:** {{total_score}}/25

**Quality Breakdown:**
- Technical: {{technical}}/5
- Visual: {{visual}}/5
- Innovation: {{innovation}}/5
- Practicality: {{practicality}}/5
- Impact: {{impact}}/5

**Pattern:**
{{pattern_description}}

**Why It's Premium:**
{{what_makes_it_premium}}

**Key Techniques:**
```javascript
{{code_snippet}}
```

**Plugins:** {{plugins}}

**What to Adapt:**
{{adaptable_patterns}}

---

{{/each_premium_example}}

---

## Professional Examples (15-19 points)

{{#each_professional_example}}
### {{example_number}}. {{example_name}}
- **URL:** [{{url}}]({{url}})
- **Source:** {{source}}
- **Score:** {{total_score}}/25
- **Pattern:** {{pattern_summary}}
- **Why It's Solid:** {{rationale}}
- **Best For:** {{use_case}}

{{/each_professional_example}}

---

## Pattern Library

### All Patterns Discovered

{{#each_unique_pattern}}
#### {{pattern_name}}

**Description:**
{{what_it_is}}

**Seen In:**
- [{{example_1_name}}]({{example_1_url}})
- [{{example_2_name}}]({{example_2_url}})
- [... {{count_total}} examples]

**Quality Range:**
- Highest: {{highest_score}}/25 ([{{example_name}}]({{url}}))
- Average: {{average_score}}/25

**Implementation Approach:**
```javascript
{{code_pattern_template}}
```

**Plugins Required:**
{{plugins_if_any}}

**Complexity:**
{{simple_moderate_expert}}

**Best Example:**
[{{best_example_name}}]({{best_example_url}}) - {{best_score}}/25

---

{{/each_unique_pattern}}

---

## Code Snippets Extracted

### Snippet 1: {{technique_name}}

**From:** [{{example_name}}]({{example_url}}) ({{quality_tier}})

**What It Does:**
{{description}}

**Code:**
```javascript
{{complete_code_snippet}}
```

**How to Adapt:**
{{adaptation_guidance}}

**Gotchas:**
- {{gotcha_1}}
- {{gotcha_2}}

---

### Snippet 2: {{technique_name}}
[... repeat for 10-15 key snippets ...]

---

## Examples by Source

### CodePen Examples
{{#each_codepen}}
- [{{title}}]({{url}}) by {{author}} - {{score}}/25 ({{tier}})
{{/each_codepen}}

### Awwwards Sites
{{#each_awwwards}}
- [{{site_name}}]({{url}}) by {{agency}} - {{award}} - {{score}}/25
{{/each_awwwards}}

### FreeFrontend Examples
{{#each_freefrontend}}
- [{{title}}]({{url}}) - {{score}}/25 ({{tier}})
{{/each_freefrontend}}

### GSAP Official Demos
{{#each_official_demo}}
- [{{demo_name}}]({{url}}) - {{score}}/25
{{/each_official_demo}}

### Codrops Tutorials
{{#each_codrops}}
- [{{tutorial_name}}]({{url}}) - {{score}}/25
{{/each_codrops}}

### WebSearch Discoveries (2024-2025)
{{#each_websearch}}
- [{{name}}]({{url}}) - {{score}}/25 ({{tier}})
{{/each_websearch}}

---

## Examples by Complexity

### Simple (Beginner-Friendly)
{{#each_simple_example}}
- [{{name}}]({{url}}) - {{score}}/25 - {{pattern}}
{{/each_simple_example}}

### Moderate (Intermediate)
{{#each_moderate_example}}
- [{{name}}]({{url}}) - {{score}}/25 - {{pattern}}
{{/each_moderate_example}}

### Expert (Advanced)
{{#each_expert_example}}
- [{{name}}]({{url}}) - {{score}}/25 - {{pattern}}
{{/each_expert_example}}

---

## Examples by Use Case

### Learning & Study
**Best for learning from code:**
{{#each_learning_pick}}
- [{{name}}]({{url}}) - {{why_good_for_learning}}
{{/each_learning_pick}}

### Visual Inspiration
**Best for visual reference:**
{{#each_visual_pick}}
- [{{name}}]({{url}}) - {{why_visually_inspiring}}
{{/each_visual_pick}}

### Client Pitches
**Best for showing clients:**
{{#each_pitch_pick}}
- [{{name}}]({{url}}) - {{why_good_for_pitch}}
{{/each_pitch_pick}}

### Code Adaptation
**Best for adapting code from:**
{{#each_adaptation_pick}}
- [{{name}}]({{url}}) - {{why_easy_to_adapt}}
{{/each_adaptation_pick}}

---

## Quality Assessment Framework

### Scoring Criteria (from Section 1.4)

**Technical Excellence (1-5):**
- 5: Flawless code, optimal performance, exemplary best practices
- 4: Well-written, performant, follows best practices
- 3: Solid code, acceptable performance, some best practices
- 2: Functional but issues, performance concerns, few best practices
- 1: Poor code quality, performance problems, ignores best practices

**Visual Polish (1-5):**
- 5: Museum-grade polish, perfect timing, exquisite detail
- 4: Highly polished, refined timing, strong attention to detail
- 3: Well-polished, good timing, decent attention to detail
- 2: Some polish, acceptable timing, minimal detail work
- 1: Rough execution, poor timing, lack of refinement

**Innovation (1-5):**
- 5: Groundbreaking, never seen before, industry-changing
- 4: Highly innovative, unique approach, noteworthy
- 3: Some innovation, creative problem-solving, interesting
- 2: Minimal innovation, standard approach with small twist
- 1: No innovation, standard implementation

**Practicality (1-5):**
- 5: Production-bulletproof, highly maintainable, perfectly accessible
- 4: Production-ready, maintainable, accessible
- 3: Usable in production, reasonably maintainable, basic accessibility
- 2: Questionable for production, hard to maintain, poor accessibility
- 1: Not production-ready, unmaintainable, no accessibility

**Impact (1-5):**
- 5: Unforgettable wow factor, profound emotional impact
- 4: Strong wow factor, clear emotional resonance
- 3: Good impact, some emotional connection
- 2: Minimal impact, little emotional effect
- 1: No impact, forgettable

**Total Score Ranges:**
- **23-25:** Award-winning - Industry-leading excellence
- **20-22:** Premium - Exceptional execution
- **15-19:** Professional - Solid production quality
- **10-14:** Basic - Functional but unremarkable
- **<10:** Below standard - Not recommended

---

## Research Citations

### Archon MCP Sources

**CodePen GSAP Examples (source: 020e9f31a8c5cdb7):**
- Query: `rag_search_code_examples("{{motion_type}}")`
- Results: {{codepen_count}} examples
- Archive Size: 672K words

**Awwwards GSAP Sites (source: d571ab8468f31305):**
- Query: `rag_search_knowledge_base("{{motion_type}} animation")`
- Results: {{awwwards_count}} examples
- Archive Size: 919K words

**FreeFrontend Examples (source: 90c2ef5e8fa816b7):**
- Query: `rag_search_code_examples("{{motion_type}} GSAP")`
- Results: {{freefrontend_count}} examples
- Archive Size: 207K words

**GSAP Official Demos (source: 076246bf07da0977):**
- Query: `rag_search_code_examples("{{motion_type}}")`
- Results: {{demos_count}} examples
- Archive Size: 229K words

**Codrops Tutorials (source: 1e5cc3bd5125be3c):**
- Query: `rag_search_code_examples("{{motion_type}} tutorial")`
- Results: {{codrops_count}} examples
- Archive Size: 42K words

### WebSearch Sources (Current 2024-2025)

**Awwwards Current Winners:**
- [{{url}}]({{url}}) - {{site_name}} ({{date}})
- [... all current examples ...]

**CodePen Recent Popular:**
- [{{url}}]({{url}}) - {{title}} ({{date}})

**Agency Showcases:**
- [{{url}}]({{url}}) - {{agency}} ({{date}})

### Deep-Research Framework

**Section 1.4 - Decision Framework:**
- Applied for quality assessment criteria
- Used to establish scoring methodology

---

## Next Steps

**Recommended Actions:**
1. {{recommended_action_1}}
2. {{recommended_action_2}}
3. {{recommended_action_3}}

**Study Plan:**
- Start with [{{simplest_example}}]({{url}}) for fundamentals
- Progress to [{{moderate_example}}]({{url}}) for intermediate patterns
- Study [{{expert_example}}]({{url}}) for advanced techniques

**Adaptation Workflow:**
1. Choose example from catalog
2. Study code implementation
3. Extract pattern to adapt
4. Prototype in isolation
5. Integrate into project

---

**Cinematographer's Note:**

*"Quality over quantity. Each example earned its quality tier through measurable criteria, not gut feel. Study the award-winning examples to understand what excellence looks like."*

**Curatorial Philosophy:** Every example is assessed against a framework - Technical + Visual + Innovation + Practicality + Impact.

---

*🎥 Generated using GSAP Excellence Module - Curated Example Discovery*
*"Excellence is measurable." - The Cinematographer*
