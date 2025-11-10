# Timeline Creation Workflow - Quality Checklist
# Research Enforcement & Production-Ready Code Validation

## Context Gathering Validation (MANDATORY)

### Input Completeness Check

- [ ] **ALL 5 required inputs captured**
  - [ ] elements_to_animate (specific selectors, types, quantity)
  - [ ] animation_sequence (sequential/overlapping/simultaneous/custom)
  - [ ] timing_specifications (durations, delays, staggers)
  - [ ] animation_effects (fade/slide/scale/rotate/morph/custom)
  - [ ] framework_context (React/Next.js/Vue/Vanilla + TypeScript/JavaScript)

- [ ] **Elements list includes critical details**
  - [ ] Specific CSS selectors provided (.class, #id, element type)
  - [ ] Element quantity noted (e.g., "5 cards", "12 list items")
  - [ ] Element relationships understood (parent/child, siblings, independent)
  - [ ] Animation targets are specific (not vague "some divs")

- [ ] **Animation sequence is clearly defined**
  - [ ] Order is explicit (element A, then B, then C)
  - [ ] Timing relationships specified (overlap amounts, delays)
  - [ ] Not ambiguous "make it look good" - SPECIFIC requirements
  - [ ] User expectations documented

- [ ] **Timing specifications are concrete**
  - [ ] Specific durations provided (not "fast" or "slow")
  - [ ] Delays/overlaps quantified (0.2s, 0.5s, etc.)
  - [ ] Stagger amounts specified if applicable
  - [ ] Total timeline duration estimated or specified

- [ ] **Framework context complete**
  - [ ] Framework identified (React 18+, Next.js 14/15, Vue 3, Vanilla)
  - [ ] Language specified (TypeScript vs JavaScript)
  - [ ] SSR considerations noted (Next.js App Router, Pages Router, or client-only)
  - [ ] Component lifecycle requirements understood

---

## Research Validation (MANDATORY - CANNOT BE SKIPPED)

### TIER 1: Deep-Research Framework (ALL REQUIRED)

#### Section 2.2: Mastering Timeline Techniques (PRIMARY)

- [ ] **File read: 06-22-mastering-gsap-timeline-techniques.md**
  - [ ] Complete file read (not skimmed)
  - [ ] Position parameters understood (`"<"`, `"-=0.5"`, `"+=1"`, `0`)
  - [ ] Label usage pattern documented
  - [ ] Nested timeline pattern understood
  - [ ] Control methods noted (play, pause, reverse, timeScale)
  - [ ] Defaults and repeat options understood
  - [ ] repeatRefresh pattern noted (GSAP 3.8+)

- [ ] **Verbatim quotes extracted (minimum 3)**
  - [ ] Quote 1: *"Timelines allow **precise control** with positional parameters..."* (Source: 06-22)
  - [ ] Quote 2: *"This modular approach means each sub-timeline can be developed and tested separately..."* (Source: 06-22)
  - [ ] Quote 3: *"Understanding and leveraging these timeline techniques enables the creation of **complex animation choreography**..."* (Source: 06-22)

- [ ] **Framework applications documented**
  - [ ] Which position parameters fit this use case?
  - [ ] Should labels be used for synchronization?
  - [ ] Is nesting needed for complex coordination?
  - [ ] Which control methods are needed?

#### Section 2.3 (corrected to 2.1): Core GSAP Concepts

- [ ] **File read: 05-21-core-gsap-concepts-tween-timeline-stagger-ease.md**
  - [ ] Tween methods understood (to/from/fromTo)
  - [ ] Timeline fundamentals reviewed
  - [ ] Stagger options documented (each, amount, from, grid, ease)
  - [ ] Easing selection guide understood
  - [ ] Jack Doyle's modularization advice noted

- [ ] **Verbatim quotes extracted (minimum 3)**
  - [ ] Quote 1: *"A **tween** is a single transition..."* (Source: 05-21)
  - [ ] Quote 2: *"Staggering is animating multiple targets with a slight offset..."* (Source: 05-21)
  - [ ] Quote 3: *"Easing is the secret sauce that makes animations feel natural..."* (Source: 05-21)

- [ ] **Framework applications documented**
  - [ ] Which tween method fits each element (to/from/fromTo)?
  - [ ] What stagger configuration creates desired rhythm?
  - [ ] Should stagger radiate from center/edges/sequential?
  - [ ] Which easing conveys right personality?

#### Section 3.1: Page Load Sequence (if applicable)

- [ ] **Applicability assessed**
  - [ ] Is this a page load/intro animation? [Yes/No]
  - [ ] If No: Skip this section
  - [ ] If Yes: Complete all checks below

- [ ] **File read: 11-31-pattern-smooth-page-load-sequence-intro-timeline.md** (if applicable)
  - [ ] Page load timing strategies understood
  - [ ] Overlapping sequence pattern noted
  - [ ] DOMContentLoaded timing (Vanilla) understood
  - [ ] useGSAP hook pattern (React) understood
  - [ ] Awwwards-level nuance noted (overlaps create rhythm)

- [ ] **Verbatim quotes extracted (if applicable, minimum 2)**
  - [ ] Quote 1: *"This creates a polished first impression..."* (Source: 11-31)
  - [ ] Quote 2: *"The overlaps give it rhythm..."* (Source: 11-31)

#### Section 3.7: Cleanup and Reinitialization

- [ ] **File read: 17-37-pattern-cleanup-and-reinitialization-fullpage-transitions.md**
  - [ ] Timeline cleanup strategies understood (kill vs revert)
  - [ ] Memory management patterns noted
  - [ ] Reinitialization patterns documented
  - [ ] Lifecycle integration understood

- [ ] **Cleanup strategy for this timeline documented**
  - [ ] When should timeline be killed? (component unmount, route change, etc.)
  - [ ] GSAP Context usage planned (React/Vue)?
  - [ ] Manual cleanup pattern planned (Vanilla)?

#### Section 2.5: Framework Integration (if applicable)

- [ ] **Applicability assessed**
  - [ ] Is framework React or Next.js? [Yes/No]
  - [ ] Is framework Vue? [Yes/No]
  - [ ] If both No: Skip this section
  - [ ] If Yes to either: Complete checks below

- [ ] **File read: 09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md** (if applicable)
  - [ ] useGSAP() hook pattern understood (React)
  - [ ] Ref-based element selection pattern noted
  - [ ] Context-safe selectors documented
  - [ ] Cleanup on component unmount pattern understood
  - [ ] Server Component considerations noted (Next.js 15)
  - [ ] onMounted/onUnmounted pattern understood (Vue)

- [ ] **Verbatim quotes extracted (if applicable, minimum 2)**
  - [ ] Framework-specific quotes from Section 2.5

**Framework Insights Count:** 3-5 sections (2.2 + 2.1 always, 3.1/3.7/2.5 conditional)

---

### TIER 2: Archon MCP Timeline Research (ALL REQUIRED)

#### Query 1: Timeline Choreography Patterns (REQUIRED)

- [ ] **Query executed:**
  ```javascript
  rag_search_code_examples("timeline choreography {effect_type}", source_id="b9f6b322298feb21", match_count=8)
  ```
- [ ] **Effect type specified** (e.g., "fade sequence", "stagger cards", "page load", "scroll reveal")
- [ ] **Patterns documented** (which timeline structures work best?)
- [ ] **Source IDs recorded** (for citation)

#### Query 2: Complex Sequence Patterns (REQUIRED)

- [ ] **Query executed:**
  ```javascript
  rag_search_code_examples("complex animation sequences", match_count=8)
  ```
- [ ] **Multi-element coordination patterns documented**
- [ ] **Premium site examples noted**
- [ ] **Position parameter strategies extracted**

#### Query 3: Timeline Coordination Best Practices (REQUIRED)

- [ ] **Query executed:**
  ```javascript
  rag_search_knowledge_base("timeline coordination best practices", source_id="b9f6b322298feb21", match_count=8)
  ```
- [ ] **Position parameter strategies documented** (`"<"`, `"+=0.5"`, labels)
- [ ] **Label usage patterns noted**
- [ ] **Relative positioning techniques extracted**

#### Query 4: Stagger Techniques (if applicable)

- [ ] **Applicability assessed** (Are multiple identical elements being animated?)
- [ ] **If Yes:**
  - [ ] Query executed: `rag_search_code_examples("stagger {element_type}", match_count=6)`
  - [ ] Element type specified (cards, list items, characters, grid)
  - [ ] Stagger amounts documented
  - [ ] Easing patterns noted
  - [ ] Advanced stagger options extracted (from, grid, amount)

#### Query 5: Framework Integration Patterns (if applicable)

- [ ] **If React or Next.js:**
  - [ ] Query executed: `rag_search_code_examples("useGSAP timeline {framework}", match_count=6)`
  - [ ] useGSAP() hook patterns documented
  - [ ] Ref-based selection patterns noted
  - [ ] Context-safe selector examples extracted
  - [ ] Cleanup patterns documented

#### Query 6: Premium Plugin Usage (if applicable)

- [ ] **Applicability assessed** (Does animation require MorphSVG, DrawSVG, SplitText, etc.?)
- [ ] **If Yes:**
  - [ ] Query executed for specific plugin
  - [ ] Plugin timeline integration patterns documented
  - [ ] GSAP 3.13+ FREE status emphasized
  - [ ] Reference: https://gsap.com/blog/gsap-3-13-0-release

**Archon Queries Executed:** 3-6 (queries 1-3 always, 4-6 conditional)

---

### TIER 3: WebSearch (Conditional - Only if Needed)

- [ ] **WebSearch necessity evaluated**
  - [ ] Archon + Deep-Research coverage assessed
  - [ ] Gaps identified? [Yes/No]
  - [ ] If Yes: 2025-specific patterns needed

- [ ] **If WebSearch executed:**
  - [ ] Latest framework versions searched (React 19, Next.js 15, Vue 3.5, etc.)
  - [ ] GSAP 2025 timeline patterns searched
  - [ ] New insights documented (not covered by Deep-Research)

- [ ] **OR: WebSearch skipped with justification**
  - [ ] "Deep-Research Sections 2.2 + 2.1 + Archon queries provided complete coverage. WebSearch not needed."

---

### Research Checkpoint Gate (MANDATORY BLOCKING)

- [ ] **Research checkpoint presented to user**
  - [ ] Deep-Research framework analysis structured
  - [ ] Archon patterns presented with source IDs
  - [ ] Timeline architecture decision proposed
  - [ ] Framework integration strategy clear
  - [ ] Expected implementation outlined
  - [ ] Total research sources counted (Deep-Research sections + Archon queries)
  - [ ] User responded **"Continue [c]"** to proceed

- [ ] **Research CANNOT be skipped autonomously**
  - [ ] Agent did NOT rationalize skipping research
  - [ ] Agent did NOT jump to implementation without research
  - [ ] Systematic pattern research followed
  - [ ] User explicitly approved proceeding

---

## Pattern Selection Quality

### Timeline Architecture Decision

- [ ] **Architecture choice justified with research**
  - [ ] Simple Timeline (sequential) - if chosen, research supports this
  - [ ] Overlapping Timeline (relative position) - if chosen, research demonstrates pattern
  - [ ] Labeled Timeline (reusable jump points) - if chosen, synchronization needs documented
  - [ ] Nested Timeline (complex coordination) - if chosen, modularity benefits explained

- [ ] **Position parameter strategy documented**
  - [ ] Absolute time (`0`, `1.5`) usage justified
  - [ ] Relative timing (`"<"`, `"-=0.5"`) usage explained
  - [ ] Label references (`"intro"`, `"midpoint+=0.5"`) planned
  - [ ] All parameters research-backed (Section 2.2 cited)

- [ ] **Stagger configuration (if applicable)**
  - [ ] Simple stagger (number) or object syntax chosen
  - [ ] `from` parameter specified (start/center/end/edges/random)
  - [ ] `grid` parameter used if grid layout
  - [ ] Easing for stagger distribution selected
  - [ ] Research-backed (Section 2.1 + Archon examples cited)

---

## Implementation Code Quality

### Code Completeness

- [ ] **Production-ready timeline code generated**
  - [ ] No placeholders or {{missing_variables}}
  - [ ] Valid GSAP syntax
  - [ ] Imports included (gsap, plugins, hooks if framework)
  - [ ] Plugin registration present (if premium plugins used)
  - [ ] Complete code (not snippets)

- [ ] **Framework integration correct**
  - [ ] React: useGSAP hook with Context, refs, cleanup
  - [ ] Next.js: 'use client' directive if App Router
  - [ ] Vue: onMounted/onUnmounted lifecycle
  - [ ] Vanilla: DOMContentLoaded or manual trigger

- [ ] **Lifecycle/cleanup implemented**
  - [ ] GSAP Context used (React/Vue) OR
  - [ ] Manual timeline.kill() on cleanup
  - [ ] ScrollTrigger.kill() if ScrollTrigger used
  - [ ] Event listener cleanup if applicable
  - [ ] No memory leaks

### Timeline Code Quality

- [ ] **Timeline structure follows research patterns**
  - [ ] Archon pattern cited in comments
  - [ ] Deep-Research section referenced in comments
  - [ ] Position parameters match strategy from research

- [ ] **Tweens are research-backed**
  - [ ] GPU-friendly properties preferred (x/y/scale/opacity vs top/left/width)
  - [ ] Tween method choice justified (to/from/fromTo)
  - [ ] Durations match specifications
  - [ ] Easing selection research-backed (Section 2.1 guide)

- [ ] **Stagger implementation (if applicable)**
  - [ ] Matches stagger config from Pattern Selection
  - [ ] Object syntax used if complex stagger needed
  - [ ] from/grid/ease parameters applied correctly
  - [ ] Archon example cited in comments

- [ ] **Control methods used appropriately**
  - [ ] .play() / .pause() if user-controlled
  - [ ] .reverse() if toggle animation
  - [ ] .timeScale() if speed control needed
  - [ ] .progress() if scroll-scrubbing
  - [ ] Research-backed (Section 2.2 cited)

### Code Comments and Citations

- [ ] **Inline comments reference research**
  - [ ] Archon source IDs cited (e.g., "// Pattern from b9f6b322298feb21")
  - [ ] Deep-Research sections cited (e.g., "// Section 2.2: Nested timeline pattern")
  - [ ] Why this approach was chosen explained
  - [ ] NOT just describing what code does - explains WHY based on research

- [ ] **Example comment quality:**
  ```javascript
  // Pattern from Archon: Codrops timeline tutorial (src: 1e5cc3bd5125be3c)
  // Using relative positioning from Section 2.2 (timeline techniques)
  // Overlap creates natural rhythm per Section 3.1 (page load sequence)
  ```

- [ ] **Comment density appropriate** (1 comment per 5-10 lines of timeline code)

---

## Framework Integration Quality

### React/Next.js Integration (if applicable)

- [ ] **useGSAP hook pattern correct**
  - [ ] useRef for container created
  - [ ] useGSAP hook invoked with correct params
  - [ ] gsap.context() used with scope parameter
  - [ ] self.selector() for context-safe selection
  - [ ] Cleanup function returns () => ctx.revert()
  - [ ] Empty dependency array (or correct dependencies)

- [ ] **Next.js 15 considerations (if applicable)**
  - [ ] 'use client' directive if App Router
  - [ ] SSR safety handled (no window/document access in server components)
  - [ ] Proper component export

- [ ] **TypeScript types (if applicable)**
  - [ ] useRef<HTMLDivElement>(null) typed correctly
  - [ ] No any types
  - [ ] GSAP types imported if needed

### Vue Integration (if applicable)

- [ ] **Composition API pattern correct**
  - [ ] ref() for container created
  - [ ] onMounted() lifecycle hook used
  - [ ] Timeline created in onMounted
  - [ ] onUnmounted() cleanup implemented
  - [ ] timeline.kill() in onUnmounted

### Vanilla JavaScript Integration (if applicable)

- [ ] **DOMContentLoaded pattern used** (if page load)
- [ ] **Proper event listeners** (if triggered by user interaction)
- [ ] **Cleanup logic** (if SPA or dynamic content)

---

## Testing Checklist Provided

### Functional Tests

- [ ] **Testing checklist includes functional tests**
  - [ ] Timeline plays on intended trigger
  - [ ] All elements animate in correct sequence
  - [ ] Timing matches specifications (durations, delays)
  - [ ] Effects achieve desired visual result
  - [ ] Callbacks fire at correct moments (if any)

### Performance Tests

- [ ] **Testing checklist includes performance tests**
  - [ ] No jank during animation (60fps maintained)
  - [ ] No console errors or warnings
  - [ ] Timeline cleanup works (no memory leaks)
  - [ ] Smooth on target devices (desktop, mobile)

### Framework Tests (if applicable)

- [ ] **Testing checklist includes framework tests**
  - [ ] Component mounts without errors
  - [ ] Timeline initializes correctly in framework lifecycle
  - [ ] Cleanup occurs on unmount (no lingering tweens)
  - [ ] Re-renders don't create duplicate timelines
  - [ ] SSR compatibility (Next.js only)

### Cross-Browser Tests

- [ ] **Testing checklist includes cross-browser tests**
  - [ ] Chrome/Edge (Chromium)
  - [ ] Firefox
  - [ ] Safari (WebKit differences noted)
  - [ ] Mobile browsers

---

## Research Citations Quality

### Research Findings Section

- [ ] **Research Findings section created**
  - [ ] Timeline Patterns Found subsection
  - [ ] Deep-Research Framework Applications subsection
  - [ ] Framework Integration Strategy subsection (if applicable)
  - [ ] Premium Plugin Usage subsection (if applicable)

- [ ] **Archon citations formatted correctly**
  ```markdown
  **Archon Knowledge Base:**
  - [Pattern Name] from [Source] (src: [source_id])
  - [Technique] from [Source] (src: [source_id])
  ```

- [ ] **Deep-Research citations formatted correctly**
  ```markdown
  **Deep-Research Frameworks:**
  - Section 2.2: [Technique used] (position parameters)
  - Section 2.1: [Stagger configuration] (stagger object syntax)
  - Section 3.7: [Cleanup strategy] (timeline.kill pattern)
  ```

- [ ] **Minimum citations met**
  - [ ] At least 3 Archon sources cited
  - [ ] At least 3 Deep-Research sections cited
  - [ ] Total research sources ≥ 6

---

## Output Delivery Quality

### Final Deliverables Completeness

- [ ] **1. Production-Ready Code**
  - [ ] Complete timeline implementation
  - [ ] Framework-integrated (if applicable)
  - [ ] Comments and citations included
  - [ ] No TODOs or placeholders

- [ ] **2. Research Citations Section**
  - [ ] Archon sources listed with IDs
  - [ ] Deep-Research sections listed
  - [ ] Framework integration sources (if applicable)

- [ ] **3. Testing Checklist**
  - [ ] Functional tests listed
  - [ ] Performance tests listed
  - [ ] Framework tests listed (if applicable)
  - [ ] Cross-browser tests listed

- [ ] **4. Implementation Notes**
  - [ ] Framework-specific considerations documented
  - [ ] Premium plugin requirements noted (if applicable)
  - [ ] Browser compatibility notes included
  - [ ] Performance considerations documented

---

## Success Criteria Validation

### All Success Criteria Met

- [ ] **✅ All research queries executed and documented**
  - [ ] Deep-Research sections 2.2 + 2.1 (+ 3.1/3.7/2.5 if applicable) read
  - [ ] Archon queries 1-3 executed (+ 4-6 if applicable)
  - [ ] Research findings documented

- [ ] **✅ Pattern selection justified with KB citations**
  - [ ] Timeline architecture choice has research backing
  - [ ] Position parameter strategy references Section 2.2
  - [ ] Stagger config references Section 2.1 (if applicable)
  - [ ] Easing selection references Section 2.1

- [ ] **✅ Production-ready code generated**
  - [ ] Complete, executable timeline code
  - [ ] Framework integration correct
  - [ ] Lifecycle/cleanup implemented
  - [ ] No placeholders

- [ ] **✅ Framework integration correct (if applicable)**
  - [ ] useGSAP pattern (React) or onMounted/onUnmounted (Vue) correct
  - [ ] Next.js 15 considerations handled
  - [ ] SSR safety ensured

- [ ] **✅ Comments reference KB sources and Deep-Research sections**
  - [ ] Inline comments cite Archon source IDs
  - [ ] Inline comments cite Deep-Research sections
  - [ ] Why this approach was chosen is explained

- [ ] **✅ Testing checklist provided**
  - [ ] Functional, performance, framework, cross-browser tests listed

- [ ] **✅ Research citations section included**
  - [ ] Archon sources listed
  - [ ] Deep-Research sections listed
  - [ ] Total sources ≥ 6

- [ ] **✅ No guesswork - every technique backed by KB research**
  - [ ] No generic timeline code
  - [ ] Every position parameter choice has research justification
  - [ ] Every easing choice has research backing
  - [ ] Stagger config (if any) has research basis

---

## Quality Metrics Validation

### Line Count Metrics

- [ ] **Workflow file sizes measured**
  - [ ] workflow.yaml: _____ lines (target: 150-200+)
  - [ ] instructions.md: _____ lines (target: 1,000-1,700+)
  - [ ] checklist.md: _____ lines (target: 400-700+)
  - [ ] TOTAL: _____ lines (target: 2,000-3,000+)

- [ ] **Growth percentages calculated**
  - [ ] workflow.yaml growth: ___% (from baseline)
  - [ ] instructions.md growth: ___% (from baseline)
  - [ ] checklist.md: NEW file
  - [ ] Total growth: ___% (from baseline)

- [ ] **Verbatim quote density**
  - [ ] Verbatim quotes in instructions.md: _____ (target: 10-30+)
  - [ ] Quotes per 100 lines: _____ (target: 1-3)

- [ ] **Code example count**
  - [ ] Code examples in instructions.md: _____ (target: 5-15+)
  - [ ] Before/after examples: _____ (target: 2-5+)

- [ ] **Research citation count**
  - [ ] Archon sources cited: _____ (target: 3-10+)
  - [ ] Deep-Research sections cited: _____ (target: 3-5)
  - [ ] Total research sources: _____ (target: 6-15+)

### Premium vs Pathetic Classification

- [ ] **Premium Criteria (ALL must be true):**
  - [ ] Total lines 2,000-3,000+
  - [ ] 10+ verbatim quotes from Deep-Research
  - [ ] GSAP-specific expertise (not generic)
  - [ ] Source citations in parentheses after every quote
  - [ ] 5+ before/after code examples
  - [ ] Specific metrics and frameworks from research
  - [ ] MANDATORY research gates (blocking="true")
  - [ ] Research gates CANNOT be skipped
  - [ ] Approval-gate checkpoints require user input
  - [ ] All file paths point to actual Deep-Research files
  - [ ] Created ONE AT A TIME (not batched)
  - [ ] Backed by conversion spec reading
  - [ ] ALL Deep-Research sections read in full
  - [ ] Built from actual research extraction (not inference)

**Verdict:** [PREMIUM / PATHETIC]

---

## BMAD v6 Compliance

### workflow.yaml Compliance

- [ ] **All required sections present**
  - [ ] name, description, author
  - [ ] config_source, user_name, communication_language
  - [ ] required_mcp (archon, context7, perplexity)
  - [ ] deep_research_sections (list all section numbers)
  - [ ] archon_sources (priority source IDs)
  - [ ] deep_research_base path
  - [ ] installed_path, instructions, validation
  - [ ] default_output_file (or null for code generation)
  - [ ] standalone: false (agent-context-dependent)
  - [ ] metadata section
  - [ ] inputs section (detailed)
  - [ ] outputs section (detailed)
  - [ ] success_criteria list

- [ ] **Paths resolve correctly**
  - [ ] {project-root} resolves
  - [ ] {module_root} resolves
  - [ ] {config_source} resolves
  - [ ] All file references exist

### instructions.md Compliance

- [ ] **Header mandates present**
  - [ ] `<critical>` tags reference workflow.xml and workflow.yaml
  - [ ] Workflow execution engine reference
  - [ ] Config file load mandate

- [ ] **Step structure correct**
  - [ ] Steps numbered sequentially
  - [ ] Each step has `goal` attribute
  - [ ] XML tags properly closed
  - [ ] `<action>`, `<ask>`, `<check if="">` tags used correctly

- [ ] **Research gates are MANDATORY and BLOCKING**
  - [ ] `<critical>` tag declares research MANDATORY
  - [ ] Research phases documented
  - [ ] `<ask>` checkpoint requires user "COMPLETE" response
  - [ ] `<check if="response != 'COMPLETE'">` blocks progression
  - [ ] `<goto step="2">` returns to research if incomplete

### checklist.md Compliance

- [ ] **Research Enforcement Test section present** (CRITICAL)
  - [ ] "Can research be skipped?" question
  - [ ] NO = PASS criteria (MANDATORY research-gate, blocking, user input required)
  - [ ] YES = FAIL criteria (research optional/skippable)

- [ ] **All validation sections present**
  - [ ] Context Gathering Validation
  - [ ] Research Validation (TIER 1, 2, 3)
  - [ ] Pattern Selection Quality
  - [ ] Implementation Code Quality
  - [ ] Research Citations Quality
  - [ ] Success Criteria Validation
  - [ ] Quality Metrics Validation
  - [ ] BMAD v6 Compliance

### Web Bundle Configuration

- [ ] **web_bundle section present**
  - [ ] name, description, path
  - [ ] web_bundle_files list complete
  - [ ] All 3 files listed (workflow.yaml, instructions.md, checklist.md)

---

## Functionality Tests

### Workflow Execution Test

- [ ] **Workflow can be invoked**
  - [ ] From VFX agent menu (standalone: false)
  - [ ] Loads without errors
  - [ ] Variables resolve correctly

- [ ] **Step 1 (Context Gathering) executes**
  - [ ] All 5 `<ask>` prompts display
  - [ ] User input captured correctly
  - [ ] Variables stored

- [ ] **Step 2 (Research Gate) blocks correctly**
  - [ ] MANDATORY checkpoint message displays
  - [ ] Research protocol shows all queries/sections
  - [ ] User MUST respond "COMPLETE" to proceed
  - [ ] Typing "INCOMPLETE" returns to Step 2
  - [ ] Agent CANNOT skip autonomously

- [ ] **Steps 3-7 execute sequentially**
  - [ ] Pattern selection displays
  - [ ] Framework integration applies (if applicable)
  - [ ] Timeline code generates
  - [ ] Testing checklist provides
  - [ ] Output delivery completes

### Output File Generation Test (if applicable)

- [ ] **If default_output_file is not null:**
  - [ ] Output file created at specified path
  - [ ] All {{placeholders}} replaced with values
  - [ ] Markdown formatting correct
  - [ ] File is complete (no truncation)

---

## Final Verification

### Checklist Completion

- [ ] **ALL checkboxes in this checklist reviewed**
- [ ] **Any FAIL verdicts documented and fixed**
- [ ] **Quality metrics recorded**
- [ ] **PREMIUM classification achieved** (not PATHETIC)

### Workflow Classification

**Final Classification:** [PREMIUM / PATHETIC]

**If PATHETIC:** Document what failed and fix before marking complete.

**If PREMIUM:** Proceed to update master plan progress tracker.

---

**Workflow Checklist Complete** ✨
