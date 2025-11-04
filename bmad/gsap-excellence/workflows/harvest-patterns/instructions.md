# Harvest Patterns Workflow Instructions
# Extract successful animations as reusable patterns for pattern library

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/harvest-patterns/workflow.yaml</critical>

<workflow>

<!-- ============================================================ -->
<!-- STEP 1: DIRECTOR - PATTERN EXTRACTION ELIGIBILITY -->
<!-- ============================================================ -->

<step n="1" goal="Director: Review Animation for Pattern Extraction">
<action>Director reviews successful animation for pattern library eligibility</action>

**🎬 "Let's capture this successful animation as a reusable pattern..."**

<ask response="animation_source">Where is this animation from? (animation-production workflow output, existing project, manual submission)</ask>

<action>Director assesses pattern extraction eligibility</action>

**Pattern Extraction Eligibility Criteria:**
- [ ] Animation passed ALL quality gates (60fps, accessibility, pitfalls check)?
- [ ] Animation is production-ready (no TODOs, proper cleanup)?
- [ ] Animation is reusable (not overly project-specific)?
- [ ] Animation demonstrates a clear technique/pattern?
- [ ] Animation has research citations (Archon, Deep-Research, WebSearch)?

<check if="eligible">
**🎬 "Animation is pattern-worthy! Proceeding with extraction."**

<action>Director authorizes pattern extraction</action>
</check>

<check if="not_eligible">
**🎬 "This animation needs refinement before pattern extraction. Address these issues first:"**

<ask>What issues prevent pattern extraction?</ask>

<action>Return to source workflow for fixes</action>
</check>

<template-output>extraction_approval</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 2: CINEMATOGRAPHER - PATTERN CATEGORIZATION -->
<!-- ============================================================ -->

<step n="2" goal="Cinematographer: Categorize Pattern">
<action>Cinematographer analyzes animation and determines pattern category</action>

**🎥 "Analyzing animation technique to determine category..."**

**Existing Pattern Categories (50 patterns currently):**
- `scroll-effects/` - Parallax, reveals, ScrollTrigger choreography (8 patterns)
- `text-animations/` - SplitText reveals, typewriter effects (6 patterns)
- `premium-showcases/` - ScrollSmoother, MorphSVG combinations (9 patterns)
- `layout-transitions/` - FLIP, modal, accordion (4 patterns)
- `nextjs-patterns/` - SSR-safe, route transitions, useGSAP (5 patterns)
- `interactive/` - Drag, magnetic, cursor-follow (5 patterns)
- `loading-sequences/` - Grid intro, cart entrance, hero sequence (5 patterns)
- `react-patterns/` - contextSafe, cleanup patterns (1 pattern)
- `2025-features/` - Observer, containerAnimation (5 patterns)

<action>Determine category based on primary technique</action>

**Category Selection Criteria:**
- What is the PRIMARY technique? (scroll, text, transition, interaction)
- Does it use premium plugins? (ScrollSmoother, MorphSVG → `premium-showcases/`)
- Is it framework-specific? (React, Next.js → `react-patterns/` or `nextjs-patterns/`)
- Is it a 2025 GSAP feature? (Observer, containerAnimation → `2025-features/`)

<ask response="pattern_category">What category should this pattern be in?</ask>

<action>Cinematographer confirms category selection</action>

**🎥 "Category: {{pattern_category}}"**

<template-output>pattern_category</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 3: DIRECTOR - EXTRACT CORE TECHNIQUE -->
<!-- ============================================================ -->

<step n="3" goal="Director: Extract Core Technique (Remove Project-Specific Details)">
<action>Director extracts reusable core technique from project-specific implementation</action>

**🎬 "Extracting reusable pattern from project-specific code..."**

**Extraction Process:**

**1. Identify Core Technique:**
<ask response="core_technique">What is the reusable technique? (timeline choreography, scroll-linked animation, text reveal, etc.)</ask>

**2. Remove Project-Specific Details:**
<action>Strip out:</action>
- Specific class names (`.hero-section` → `.container`)
- Project-specific IDs
- Hardcoded values that should be configurable
- Business logic unrelated to animation
- API calls, data fetching

**3. Generalize Selectors:**
<action>Convert to generic patterns:</action>
- `.project-specific-class` → `.animated-element`
- `#unique-id` → `#target-element`
- Hardcoded durations → Configurable variables

**4. Preserve Core Logic:**
<action>Keep:</action>
- GSAP timeline structure
- Easing curves (these are design decisions!)
- Stagger patterns
- ScrollTrigger configuration
- Plugin usage
- Cleanup logic
- Accessibility fallback (prefers-reduced-motion)

**5. Extract Clean Code Example:**
<action>Generate clean, reusable code with:</action>
- Clear variable names
- Inline comments explaining WHY (not WHAT)
- Generic selectors
- Configurable parameters
- Complete example (imports, setup, cleanup)

<template-output>core_technique, clean_code_example</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 4: CINEMATOGRAPHER - DOCUMENT METADATA -->
<!-- ============================================================ -->

<step n="4" goal="Cinematographer: Document Pattern Metadata">
<action>Cinematographer compiles all required metadata for pattern YAML</action>

**🎥 "Documenting pattern metadata for library entry..."**

<critical>ALL patterns must include comprehensive metadata for quality and traceability</critical>

**Required Metadata (YAML Format):**

**1. Basic Information:**
```yaml
id: pattern-{{pattern_name}}-2025
name: "{{Pattern Display Name}}"
category: "{{pattern_category}}"
complexity: "simple" | "medium" | "medium-high" | "high"
gsap_version: "3.13.0+"  # ALWAYS 3.13+ (premium plugins FREE!)
plugins_required: ["ScrollTrigger", "SplitText", ...]
premium_plugins_free: true  # If using premium plugins
is_wow_factor: true | false
is_2025_standard: true
```

**2. Description & Inspiration:**
```yaml
description: "Clear, concise description of what this pattern does and when to use it"
inspiration_source: "{{Where this pattern comes from - agency, brand, technique}}"
source_url: "{{URL if applicable}}"
source_citation: "{{Specific reference}}"
```

**3. Research Citations (CRITICAL - Traceability):**
```yaml
research_sources:
  archon_mcp:
    - source_id: "b9f6b322298feb21"  # gsap.com
      technique: "{{What was learned from this source}}"
    - source_id: "1e5cc3bd5125be3c"  # Codrops
      technique: "{{Tutorial or example reference}}"
  deep_research:
    - section: "1.2"
      principle: "Visual Translation - {{brand}} → {{easing}}"
    - section: "5.1"
      principle: "GPU Rule - transform/opacity only"
    - section: "6.1"
      principle: "prefers-reduced-motion fallback"
  websearch:
    - source: "{{Agency/Brand Name}} {{Year}}"
      url: "{{URL}}"
```

**4. Performance & Accessibility:**
```yaml
performance_notes: "{{60fps metrics, GPU acceleration, optimization notes}}"
performance_metrics:
  average_fps: {{avg_fps}}
  fps_4x_throttle: {{fps_throttled}}
  paint_time_ms: {{paint_time}}
  js_execution_ms: {{js_exec_time}}

accessibility_notes: "{{prefers-reduced-motion fallback, keyboard nav, etc.}}"
accessibility_compliance:
  prefers_reduced_motion: true  # MANDATORY
  keyboard_accessible: true | false
  wcag_aa_compliant: true
```

**5. Code Examples:**
```yaml
code_example: |
  {{Vanilla JavaScript example with imports, setup, cleanup}}

html_structure: |
  {{Required HTML structure}}

react_usage: |
  {{React example with useGSAP hook}}

nextjs_usage: |
  {{Next.js 15 App Router example (if applicable)}}
```

**6. Additional Metadata:**
```yaml
created_date: "2025-11-03"
tags: ["{{tag1}}", "{{tag2}}", "{{tag3}}"]
framework: "vanilla" | "react" | "nextjs" | "vue"
use_cases:
  - "{{Use case 1}}"
  - "{{Use case 2}}"
  - "{{Use case 3}}"
why_premium: "{{Why this pattern is premium quality - reference to agencies/brands using it}}"
```

<action>Compile all metadata from animation-production workflow outputs</action>

<template-output>pattern_metadata_complete</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 5: DIRECTOR - CREATE PATTERN YAML FILE -->
<!-- ============================================================ -->

<step n="5" goal="Director: Create Pattern YAML File">
<action>Director generates complete pattern YAML file with all metadata</action>

**🎬 "Creating pattern YAML file for library..."**

**Pattern File Structure:**

**File Name:** `{{pattern_name}}.pattern.yaml`

**Full Example:**
```yaml
id: pattern-{{pattern_name}}-2025
name: "{{Pattern Display Name}}"
category: "{{category}}"
complexity: "{{complexity}}"
gsap_version: "3.13.0+"
plugins_required: {{plugins_list}}
premium_plugins_free: {{true_if_premium_plugins}}
is_wow_factor: {{true_or_false}}
is_2025_standard: true
description: "{{description}}"
inspiration_source: "{{source}}"
source_url: "{{url}}"
source_citation: "{{citation}}"

research_sources:
  archon_mcp: {{archon_citations}}
  deep_research: {{deep_research_sections}}
  websearch: {{websearch_citations}}

performance_notes: "{{performance_notes}}"
performance_metrics:
  average_fps: {{fps}}
  fps_4x_throttle: {{fps_throttled}}
  paint_time_ms: {{paint_time}}
  js_execution_ms: {{js_exec}}

accessibility_notes: "{{accessibility_notes}}"
accessibility_compliance:
  prefers_reduced_motion: true
  keyboard_accessible: {{true_or_false}}
  wcag_aa_compliant: true

code_example: |
  {{clean_code_example}}

html_structure: |
  {{html_structure}}

react_usage: |
  {{react_example}}

nextjs_usage: |
  {{nextjs_example}}

created_date: "{{date}}"
tags: {{tags_array}}
framework: "{{framework}}"
use_cases:
  - "{{use_case_1}}"
  - "{{use_case_2}}"
  - "{{use_case_3}}"
why_premium: "{{why_premium}}"
```

<action>Generate complete pattern YAML file</action>

<template-output>pattern_yaml_content</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 6: DIRECTOR - SAVE TO PATTERN LIBRARY -->
<!-- ============================================================ -->

<step n="6" goal="Director: Save Pattern to Library">
<action>Director saves pattern YAML file to appropriate category directory</action>

**🎬 "Saving pattern to library..."**

**File Path:** `{pattern_library}/{{category}}/{{pattern_name}}.pattern.yaml`

<action>Write pattern YAML file to pattern library</action>

**Pattern Library Update:**
- **Category:** {{category}}
- **File Name:** {{pattern_name}}.pattern.yaml
- **Pattern Count:** 50 → 51 (library growing!)

<action>Confirm file written successfully</action>

**🎬 "Pattern successfully added to library!"**

**Pattern Details:**
- **Name:** {{pattern_name}}
- **Category:** {{category}}
- **Complexity:** {{complexity}}
- **Premium Plugins:** {{premium_plugins_if_any}} (FREE in 3.13+!)
- **Location:** {pattern_library}/{{category}}/{{pattern_name}}.pattern.yaml

<template-output>pattern_file_path, pattern_library_count</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 7: DIRECTOR - CONFIRM & CELEBRATE -->
<!-- ============================================================ -->

<step n="7" goal="Director: Confirm Pattern Addition">
<action>Director confirms pattern is available for future use</action>

**🎬 "Pattern harvest complete! Here's what was added:"**

**New Pattern Summary:**
- **Name:** {{pattern_name}}
- **Category:** {{category}}
- **Complexity:** {{complexity}}
- **Premium Features:** {{premium_plugins_list}}
- **Performance:** {{fps}} fps average, {{fps_throttled}} fps @ 4x throttle
- **Accessibility:** ✅ prefers-reduced-motion fallback
- **Research Sources:**
  - Archon MCP: {{archon_source_count}} sources
  - Deep-Research: {{deep_research_section_count}} sections
  - WebSearch: {{websearch_source_count}} sources
- **Use Cases:**
  {{use_cases_list}}

**Pattern Library Status:**
- **Total Patterns:** {{new_pattern_count}}
- **Category:** {{category}} ({{category_count}} patterns)
- **Available For:** implement-from-pattern workflow

**Next Steps:**
1. Pattern is immediately available for quick implementation
2. Use implement-from-pattern workflow to apply this pattern
3. Pattern contributes to growing library (targeting 50+)

<ask>Pattern successfully harvested! Continue? [done]</ask>

<template-output>harvest_summary, pattern_library_status</template-output>
</step>

</workflow>

## Quality Standards

**Pattern Quality Requirements (Match Existing 50 Patterns):**

**Metadata Completeness:**
- ✅ ALL required fields populated (id, name, category, complexity, etc.)
- ✅ Research citations with source IDs (Archon) + section numbers (Deep-Research)
- ✅ Performance metrics from Tech Director validation
- ✅ Accessibility compliance documented

**Code Quality:**
- ✅ GSAP 3.13.0+ syntax
- ✅ Generic, reusable code (no project-specific details)
- ✅ Complete examples (imports, setup, cleanup)
- ✅ Inline comments explain WHY (not WHAT)
- ✅ prefers-reduced-motion fallback included

**Framework Support:**
- ✅ Vanilla JavaScript example (always)
- ✅ React example with useGSAP hook (recommended)
- ✅ Next.js 15 App Router example (if applicable)

**Documentation:**
- ✅ Clear description of what pattern does
- ✅ Inspiration source cited (agency, brand, technique)
- ✅ Use cases listed (when to use this pattern)
- ✅ Premium plugin cost transparency (was $X/year → FREE!)

## Success Metrics

**Pattern Harvest Success:**
- ✅ Pattern YAML file created with ALL required metadata
- ✅ Pattern categorized correctly
- ✅ Pattern quality matches existing 50 patterns
- ✅ Pattern library count incremented
- ✅ Pattern immediately available for reuse

**Integration:**
- **Fed By:** animation-production workflow (successful animations)
- **Feeds Into:** implement-from-pattern workflow (quick implementation)
- **Library Growth:** Organic pattern accumulation from successful projects
