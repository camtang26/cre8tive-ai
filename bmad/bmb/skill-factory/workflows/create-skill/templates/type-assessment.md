# Skill Type Assessment Questions

Use these questions to determine if the skill is **Type 1 (Procedural/Discipline)** or **Type 2 (Domain Expertise)**.

## Question 1: Primary Purpose

**What is this skill primarily about?**

A) Enforcing a workflow, process, or discipline
   - Making sure Claude follows specific steps
   - Preventing shortcuts or violations
   - Maintaining quality standards through process
   → Suggests Type 1

B) Providing domain expertise and extensive reference material
   - Teaching Claude about a complex framework/domain
   - Providing API documentation and patterns
   - Enabling expert-level implementations
   → Suggests Type 2

## Question 2: Reference Material Needs

**Will users need extensive reference documentation (10k+ tokens)?**

- No, the skill is self-contained (< 500 lines total): → Type 1
- Yes, need API docs, patterns, troubleshooting guides: → Type 2

## Question 3: Expertise Level

**Are you an expert in this domain?**

- Yes, I can document patterns from my experience: → Likely Type 1
  - You know the workflow, just need to enforce it

- No, I'll need to research extensively: → Likely Type 2
  - Need to acquire external expertise

## Question 4: Claude's Current Capability

**Can Claude already do this, but needs discipline reminders?**

- Yes, Claude knows the approach but might skip steps: → Type 1
  - Example: TDD (Claude knows testing, might skip under pressure)

- No, Claude lacks knowledge in this specific area: → Type 2
  - Example: GSAP animations (complex domain with many gotchas)

## Determining Type

**If 3+ answers suggest Type 1:** → Type 1 (Procedural/Discipline)
**If 3+ answers suggest Type 2:** → Type 2 (Domain Expertise)
**If mixed:** Discuss with user, lean toward Type 2 if research needed

## Type Characteristics

### Type 1 (Procedural/Discipline)
- **Purpose:** Enforce workflows, prevent rationalization
- **Content:** Rules, steps, anti-patterns, rationalization tables
- **Testing:** Pressure scenarios (does Claude comply under stress?)
- **KB:** None (everything in SKILL.md <500 lines)
- **Examples:** TDD, verification-before-completion, git workflows

### Type 2 (Domain Expertise)
- **Purpose:** Provide specialized knowledge and reference
- **Content:** Workflow + KB references (API, patterns, troubleshooting)
- **Testing:** Real implementations (does Claude build it correctly?)
- **KB:** Yes (reference/*.md files, 20-40k tokens total)
- **Examples:** GSAP animations, advanced frameworks, complex domains

## Edge Cases

**Skill about teaching a simple API:**
- If API is simple (few methods): Type 1
- If API is complex (many methods, gotchas): Type 2

**Skill about a workflow using a tool:**
- If focus is workflow discipline: Type 1
- If focus is tool mastery: Type 2

**When in doubt:** Choose Type 2 if research will be needed.
