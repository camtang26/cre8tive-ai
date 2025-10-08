# Cre8tive AI Website - BMAD Mode

**Project:** B2B Marketing Site (React/TS/Vite) | **BMAD:** v6.0.0-alpha.0 | **Updated:** 2025-10-07

---

## 🎯 AI Bias Correction: Optimize, Don't Satisfice

**Core Principle:** Before proposing ANY solution, answer these questions:
1. **Excellence Test:** "What would a world-class expert do here?"
2. **Research Test:** "Have I studied how the best in this domain solve this?"
3. **Aspiration Test:** "Am I choosing this because it's BEST, or because it's SAFE?"

**Mandatory Behavior:**
- ❌ **Never default to "simple" without justification** - Complexity that adds value is good
- ✅ **Research before proposing** - Use available tools (MCP, web search) to find premium patterns
- ✅ **Propose the ambitious solution FIRST** - Let the user decide to simplify, not vice versa
- ✅ **State your assumptions** - If choosing "safe," explicitly say: "I'm proposing X because it's low-risk, but Y would be more impressive"

**Red Flag Phrases (HALT if you catch yourself saying):**
- "For simplicity..." → Ask: "Is simple better, or just easier for me?"
- "This should work..." → Ask: "But is it excellent?"
- "A basic approach would be..." → Ask: "Why not start with the best approach?"

**Philosophy:** Users hire you for expertise, not mediocrity. Your job is to elevate their work, not just complete it.

---

## 🚀 Commands

```bash
npm run dev          # Dev server → http://localhost:8080
npm run build        # Production build (tsc + vite)
npm run lint         # ESLint (errors MUST pass, warnings OK)
npm run preview      # Preview production → http://localhost:4173
```

---

## 🏗️ Tech Stack

**Core:** React 18.3.1 • TypeScript 5.5.3 • Vite 5.4.1 • Tailwind 3.4.11

**Animation:** GSAP 3.x + ScrollTrigger • Lenis (smooth scroll) • Framer Motion 12.4.2

**State/Forms:** React Query 5.56.2 • React Hook Form 7.53.0 • Zod 3.23.8

**Routing:** React Router 6.26.2

**Integrations:** Vercel Analytics • GTM • getform.io • Cal.com • Vimeo

---

## 📂 BMAD Documentation Structure

**Sharded Architecture (Dev Agent Auto-Loads):**
```
docs/
├── PRD.md or SPEC.md           # Overview/TOC (light)
├── prd/*.md                    # Detailed PRD sections (sharded)
├── ARCHITECTURE.md             # Architecture overview/TOC (light)
├── architecture/*.md           # Detailed architecture sections (sharded)
├── stories/story-X.Y.md        # Story files (AUTHORITATIVE)
├── tech-specs/tech-spec-epic-N.md  # Epic tech specs (JIT)
└── qa/*.md                     # QA reports
```

**Story Context XML:**
- Referenced in story file → "Dev Agent Record" → "Context Reference"
- Contains dynamic expertise injection for each story
- Trust Story Context over model priors

---

## ✅ Definition of Done

**Code Quality:**
- [ ] All Acceptance Criteria satisfied
- [ ] Browser test (Chrome, Firefox, Safari, mobile)
- [ ] `npm run build` passes
- [ ] `npm run lint` passes (errors only)
- [ ] Visual QA (design, animations, responsive)
- [ ] Accessibility (keyboard, focus, contrast, prefers-reduced-motion)
- [ ] TypeScript compiles clean

**Story Updates:**
- [ ] Story status updated (Draft → Approved → InProgress → ReadyForReview → Done)
- [ ] Tasks checked off in story file
- [ ] README/CHANGELOG updated if behavior changed

**Testing:** Zero tests exist (manual only until infrastructure added)

---

## 🎨 Project Standards

**TypeScript:** Relaxed mode (noImplicitAny: false) - fix errors, allow implicit any where practical

**Styling:** Tailwind only • Shadcn/UI components • Glassmorphism patterns

**Components:** <500 LOC/file • Lazy load heavy components • Proper TypeScript types

**Animations:**
- GSAP: Timeline-based, scroll-triggered
- Lenis: Smooth scroll wrapper
- Framer Motion: Component transitions, micro-interactions
- **REQUIRED:** `prefers-reduced-motion` fallbacks

**SEO:** react-helmet meta tags • sitemap.xml • canonical URLs • structured data

**Security:** Zod validation • DOMPurify sanitization • CSP headers • HTTPS only

**Accessibility:** WCAG AA minimum • Semantic HTML • ARIA labels • Keyboard nav • Focus indicators

---

## 🔌 MCP Servers

**Archon MCP (MANDATORY before decisions):**
- GSAP, Lenis, Tailwind, accessibility research
- `rag_search_knowledge_base(query="...", match_count=5)`

**Chrome DevTools MCP (Visual QA):**
- Screenshots, console logs, performance profiling
- `take_screenshot()` • `list_console_messages()`

**Context7 MCP:**
- Latest docs for React, TypeScript, GSAP, Tailwind, Framer Motion

---

## 📋 BMAD Config

```yaml
Location: bmad/core/config.yaml
user_name: Cameron
communication_language: English
output_folder: '{project-root}/docs'
```

**Agent Slash Commands:**
- `/bmad:core:agents:bmad-master` - Master orchestrator
- `/bmad:bmm:agents:pm` - Product Manager
- `/bmad:bmm:agents:architect` - Solution Architect
- `/bmad:bmm:agents:sm` - Scrum Master (story creation)
- `/bmad:bmm:agents:dev` - Developer (implementation)

---

## 🎯 Current Focus (2025-10-07)

**Active:** AI Briefing Engine v2 (dark indigo/cyan/fuchsia)
- Hero, Visual Styles Gallery (8 styles), Process Flow, Transformation, Benefits, CTA
- GSAP ScrollTrigger + Lenis + Framer Motion
- 60fps target, WCAG AA, high CTA conversion

**Project Scale:** Level 2-3 (10-20 stories, 2-3 epics)

---

## 🚫 Technical Debt (Document in Stories)

1. Zero automated tests (manual only)
2. No test framework (Vitest + RTL planned)
3. TypeScript relaxed mode
4. No E2E tests (Playwright planned)
5. Limited error boundaries

---

## 🔄 Git Workflow

**Branches:** `main` (prod) • `feat/story-X.Y-desc` • `design/feature-name-date`

**Commits:** Conventional format (`feat:` `fix:` `refactor:` `docs:`)

```bash
git add . && git commit -m "feat: description" && git push origin feat/story-X.Y
```

---

## 📞 Escalation (HALT and ask Cameron)

1. Story Context XML missing
2. Ambiguous/contradictory Acceptance Criteria
3. Architectural decision needed
4. Security/performance risk
5. Same approach fails ≥3 times

---

## 💡 Story Implementation Best Practices

**✅ Do:**
- Trust Story Context XML over model priors
- Map every code change to specific Acceptance Criteria
- Update story status after each workflow step
- Run retrospectives after epics
- Use MCP servers for latest best practices

**❌ Don't:**
- Start implementation before story status = "Approved"
- Skip Story Context generation
- Batch story creation (JIT: one at a time)
- Update story file without checking all ACs satisfied
- Invent solutions when Story Context lacks detail

---

**Lead:** Cameron | **Language:** English | **Output:** `{project-root}/docs`
