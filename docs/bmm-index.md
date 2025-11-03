# Project Documentation Index
**Project:** cre8tive-website-1006
**Type:** React 18 + Vite 5 + TypeScript SPA (AI-Powered Marketing Website)
**Generated:** November 3, 2025
**Scan Level:** Exhaustive with Critical Ultrathink
**Total Files Analyzed:** 215 source files, 60+ documentation files

---

## 🚀 Quick Start - First Time Here?

**For AI Agents:** Start with [Current Architecture](#current-architecture) → [Component Catalog](#component-catalog) → [Development Guide](#development-guide)

**For Humans:** Start with [Development Guide](#development-guide) → [What's Built](#whats-built-vs-whats-planned) → [Quick Reference](#quick-reference)

**For Feature Development:** Check [Tech Specs](#technical-specifications) → [Story Files](#story-files) → [Component Catalog](#component-catalog)

---

## 📊 Project Status

### Implementation Status

✅ **IMPLEMENTED (Epic 1 - Briefing Engine):**
- Flagship Briefing Engine page with GSAP master timelines
- 27 components (~6,596 LOC)
- 15+ stories complete
- Adaptive performance system (Story 1.14)
- Reduced motion accessibility (WCAG 2.1 AA)

⏳ **PLANNED (Future Epics):**
- Epic 4: 3D Interactive Solution Theater
- Epic 5: Responsive Design Optimization
- Unified Voice Widget

📚 **REFERENCE MATERIALS:**
- 24 GSAP Animation Mastery documents (evergreen educational content)
- 10 external research folders (market research, competitor analysis)

---

## Quick Reference

| Attribute | Value |
|-----------|-------|
| **Repository Type** | Monolith (Single Codebase) |
| **Primary Language** | TypeScript |
| **Framework** | React 18.3.1 |
| **Build Tool** | Vite 5.4.1 |
| **Styling** | Tailwind CSS 3.4.11 |
| **UI Library** | Radix UI + shadcn/ui |
| **Animation** | GSAP 3.13.0, Framer Motion 12.23.24, Lenis 1.3.11 |
| **Routing** | React Router DOM 6.26.2 |
| **State Management** | TanStack Query 5.56.2 (server state), local useState |
| **Video** | @vimeo/player 2.20.1 |
| **3D Graphics** | Three.js 0.152.2 (1 component only) |
| **Entry Point** | `src/main.tsx` |
| **Total Components** | 178 (briefing: 27, other: 151) |
| **Total LOC** | ~20,000+ |
| **Documentation Root** | `docs/bmm-index.md` (this file) |

---

## 🎯 What's Built vs. What's Planned

### Currently Implemented (30% of Docs)

#### Epic 1: AI Briefing Engine ✅
**Status:** 90%+ IMPLEMENTED (October 2025)
**Tech Spec:** [docs/tech-spec-epic-1.md](./tech-spec-epic-1.md)
**Evidence:** Complete implementation at `/briefing-engine` route

**Key Components:**
- WorkflowTransformation (60x FASTER comparison)
- BriefToStoryboardAnimation (1,226 LOC flagship component)
- BriefingTimeline (5-stage orchestrator)
- ParticleCore (GPU-accelerated particle system)
- 5 Section Components (Hero, Neural, Style, Storyboard, Handoff)

**Features:**
- GSAP master timeline choreography
- Lenis smooth scroll integration
- Adaptive performance (Story 1.14)
- Reduced motion accessibility (22 of 27 components)
- Desktop-responsive timing system

---

### Future Plans (65% of Docs)

#### Epic 4: 3D Interactive Solution Theater ❌
**Status:** NOT IMPLEMENTED
**Tech Spec:** [docs/tech-spec-epic-4.md](./tech-spec-epic-4.md) (Draft, Oct 9, 2025)

**Planned Features:**
- 3D perspective card layout
- Mouse-tracking tilt effects
- Apple-style depth shadows
- Diagonal stagger arrangement

**Why It Exists:** Comprehensive planning for homepage Solutions section redesign

---

#### Epic 5: Responsive Design Optimization ⚠️
**Status:** PARTIALLY PLANNED
**Tech Spec:** [docs/tech-spec-epic-5.md](./tech-spec-epic-5.md) (Draft, Oct 16, 2025)

**Planned Features:**
- Fluid typography with clamp()
- Ultra breakpoint (1600px for Windows scaling)
- 6 comprehensive breakpoints
- 11-story implementation roadmap (72 hours estimated)

**Why It Exists:** Research-backed spec for addressing high DPI display issues

---

#### Unified Voice Widget ❌
**Status:** NOT IMPLEMENTED
**Tech Spec:** [docs/tech-spec-unified-voice-widget.md](./tech-spec-unified-voice-widget.md) (Level 0, Oct 10, 2025)

**Planned Features:**
- Combine FloatingCallButton + ElevenLabs widget
- Unified UX for voice interactions

---

### Reference Materials (24 Docs)

#### Deep-Research: GSAP Animation Mastery
**Location:** [docs/Deep-Research/GSAP-Animation-Mastery/](./Deep-Research/GSAP-Animation-Mastery/)
**Status:** EVERGREEN REFERENCE

**Purpose:** Educational content about GSAP techniques (NOT implementation plans)

**Contents:**
- 01-11: Animator's mindset vs code generator
- 05-21: Core GSAP concepts (tween, timeline, stagger, ease)
- 07-23: 2024 GSAP plugin ecosystem
- 12-32: Pattern: Content reveal on scroll (ScrollTrigger basics)
- Premium guides: Timeline orchestration, state machine animations

**Recommendation:** Keep as-is - valuable reference for current and future GSAP work

---

## 📁 Generated Documentation (November 3, 2025)

### Exhaustive Analysis Documents

#### 1. Documentation Freshness Report ⭐
**File:** [docs/documentation-freshness-report.md](./documentation-freshness-report.md)
**Purpose:** Cross-reference of all tech specs vs actual codebase implementation
**Key Findings:**
- Epic 1: 90%+ implemented ✅
- Epic 4, 5, Voice Widget: Planning docs only ❌
- Deep-Research: Evergreen reference 📚
- 0 outdated/misleading docs found

**Use When:** Determining which docs reflect current vs future state

---

#### 2. Source Tree Analysis ⭐
**File:** [docs/source-tree-analysis-exhaustive.md](./source-tree-analysis-exhaustive.md)
**Purpose:** Complete annotated directory structure with purpose for every folder/file
**Contents:**
- 215 source files cataloged
- 24 component directories explained
- 17 hooks documented
- 7 utility modules explained
- Architecture patterns identified

**Use When:** Understanding project structure, finding components

---

#### 3. Component Catalog ⭐
**File:** [docs/component-catalog-exhaustive.md](./component-catalog-exhaustive.md)
**Purpose:** Comprehensive inventory of all 178 components with implementation details
**Contents:**
- Briefing Engine components (27) - complete analysis
- UI library components (58) - shadcn/ui
- Service & marketing components
- GSAP usage patterns
- LOC ranges, animation frameworks used
- Technical debt identified

**Use When:** Finding components, understanding GSAP patterns, adding new features

---

#### 4. Current Architecture ⭐
**File:** [docs/CURRENT-ARCHITECTURE.md](./CURRENT-ARCHITECTURE.md)
**Purpose:** Complete architectural documentation (replaces outdated docs)
**Contents:**
- Technology stack (complete dependency list)
- Architecture patterns (JAMstack, component organization)
- Performance architecture (Story 1.14 adaptive system)
- Build architecture (Vite config, bundle splitting)
- Security (CSP, XSS prevention)
- Key architectural decisions

**Use When:** Making architectural decisions, understanding systems, onboarding

---

#### 5. Development Guide ⭐
**File:** [docs/DEVELOPMENT-GUIDE.md](./DEVELOPMENT-GUIDE.md)
**Purpose:** Practical guide for AI-assisted development and human onboarding
**Contents:**
- Quick start guide
- Commands reference
- Development workflow
- Common tasks (add page, component, hook)
- GSAP animation patterns
- Debugging guide
- Performance optimization
- Deployment

**Use When:** Starting development, adding features, troubleshooting

---

## 📖 Existing Documentation

### Primary Documentation Source

#### .codex/ - Codex CLI Documentation ⭐
**Purpose:** SINGLE SOURCE OF TRUTH for project context

**Key Files:**
| File | Size | Purpose |
|------|------|---------|
| [.codex/_MEMO.md](../.codex/_MEMO.md) | 59kb | **Main knowledge base** - All project context, decisions, patterns |
| [.codex/PLAN.md](../.codex/PLAN.md) | 21kb | Current project planning and roadmap |
| [.codex/REPORT.md](../.codex/REPORT.md) | 7.9kb | Status reports and progress tracking |
| [.codex/CODEX-CHROME-DEVTOOLS-CHECKLIST.md](../.codex/CODEX-CHROME-DEVTOOLS-CHECKLIST.md) | 7.0kb | Manual testing checklist |

**External Research (10 folders):**
- `lenis-gsap-202504/` - Animation framework research
- `forced-reflow-20251008/` - Performance optimization research
- `resizeobserver-202408/` - Technical implementation research
- Market research: Gartner, TrustRadius, Yext, Guardian, Hackstone
- Competitor analysis: 351studio-ai-video-page

---

### Root Level Documentation

| Document | Purpose | Status |
|----------|---------|--------|
| [README.md](../README.md) | Main project overview | Current |
| [ARCHITECTURE.md](../ARCHITECTURE.md) | Architecture overview | ⚠️ Replaced by docs/CURRENT-ARCHITECTURE.md |
| [CONTRIBUTING.md](../CONTRIBUTING.md) | Contribution guidelines | Current |
| [SPEC.md](../SPEC.md) | Project specifications | Current |
| [AGENTS.md](../AGENTS.md) | AI agents documentation | Current |
| [CLAUDE.md](../CLAUDE.md) | Claude AI configuration (BMAD mode) | Current |
| [TASK.md](../TASK.md) | Current tasks | Current |

---

### Technical Specifications

#### Current & Accurate ✅

**Epic 1 - Briefing Engine:**
- [docs/tech-spec-epic-1.md](./tech-spec-epic-1.md) - **IMPLEMENTED** (Oct 9, 2025)
- [docs/stories/story-1.*.md](./stories/) - 15+ story files (IMPLEMENTED)

#### Future Planning ⏳

**Epic 4 - 3D Solution Theater:**
- [docs/tech-spec-epic-4.md](./tech-spec-epic-4.md) - Draft (Oct 9, 2025)

**Epic 5 - Responsive Design:**
- [docs/tech-spec-epic-5.md](./tech-spec-epic-5.md) - Draft (Oct 16, 2025)
- [docs/tech-spec-epic-5-high-dpi-summary.md](./tech-spec-epic-5-high-dpi-summary.md)
- [docs/tech-spec-epic-5-research-validation.md](./tech-spec-epic-5-research-validation.md)

**Voice Widget:**
- [docs/tech-spec-unified-voice-widget.md](./tech-spec-unified-voice-widget.md) - Level 0 (Oct 10, 2025)

**Other:**
- [docs/tech-spec.md](./tech-spec.md) - claude-mode CLI utility (different project)
- [docs/tech-spec-epic-1.9.md](./tech-spec-epic-1.9.md)

---

### Story Files

**Epic 1 Stories (15+ files):**
Located in: `docs/stories/`

All stories dated: October 17, 2025
Status: IMPLEMENTED ✅

Story contexts include XML files with full traceability

---

### Architecture Documentation

**Current (Nov 3, 2025):**
- [docs/CURRENT-ARCHITECTURE.md](./CURRENT-ARCHITECTURE.md) ⭐ **PRIMARY REFERENCE**
- [docs/gsap-excellence-v2-architecture.md](./gsap-excellence-v2-architecture.md) - GSAP Excellence Engine v2 design

**Legacy:**
- [ARCHITECTURE.md](../ARCHITECTURE.md) - Root level (outdated, replaced by docs/CURRENT-ARCHITECTURE.md)

---

### Product & Planning

**Product Requirements:**
- [docs/prd.md](./prd.md) - Product requirements document

**Copy & Content:**
- [docs/COPY_IMPLEMENTATION_GUIDE.md](./COPY_IMPLEMENTATION_GUIDE.md) - Nov 3 update
- [docs/BriefingEngine-Copy-Redesign.md](./BriefingEngine-Copy-Redesign.md)
- [docs/BRIEFING-ENGINE-COPY-IMPLEMENTATION-PLAN.md](./BRIEFING-ENGINE-COPY-IMPLEMENTATION-PLAN.md)

**Historical:**
- [docs/PLAN-Old.md](./PLAN-Old.md)

---

### GSAP & Performance Documentation

**GSAP Research:**
- [docs/gsap-research-card-reveal-scrolltrigger-2025-10-18.md](./gsap-research-card-reveal-scrolltrigger-2025-10-18.md) - Oct 18
- [docs/gsap-research-responsive-scroll-storytelling-2025-10-14.md](./gsap-research-responsive-scroll-storytelling-2025-10-14.md)
- [docs/gsap-research-segmented-scroll-storytelling-2025-10-14.md](./gsap-research-segmented-scroll-storytelling-2025-10-14.md)

**Performance Reports:**
- [docs/gsap-performance-final-results-2025-10-16.md](./gsap-performance-final-results-2025-10-16.md)
- [docs/gsap-performance-report-2025-10-14.md](./gsap-performance-report-2025-10-14.md)
- [docs/gsap-performance-report-2025-10-15.md](./gsap-performance-report-2025-10-15.md)
- [docs/gsap-performance-report-2025-10-16.md](./gsap-performance-report-2025-10-16.md)

**Debug & Audit Reports:**
- [docs/gsap-debug-report-2025-10-15.md](./gsap-debug-report-2025-10-15.md)
- [docs/gsap-debug-report-2025-10-16.md](./gsap-debug-report-2025-10-16.md)
- [docs/audit-report-gsap-excellence-2025-10-18.md](./audit-report-gsap-excellence-2025-10-18.md) - Oct 18
- [docs/gsap-briefing-audit-2025-10-14.md](./gsap-briefing-audit-2025-10-14.md)

**Architecture & Planning:**
- [docs/gsap-excellence-refactor-session-handoff.md](./gsap-excellence-refactor-session-handoff.md) - Oct 18
- [docs/module-brief-gsap-2025-10-11.md](./module-brief-gsap-2025-10-11.md)
- [docs/performance-test-architecture-brief.md](./performance-test-architecture-brief.md)

---

### Skill & Agent Documentation

**Copy Excellence Skill:**
- [docs/cre8tive-copy-excellence-skill-handoff.md](./cre8tive-copy-excellence-skill-handoff.md) - Oct 22
- [docs/cre8tive-copy-excellence-skill-handoff-v1.0.0.md](./cre8tive-copy-excellence-skill-handoff-v1.0.0.md) - Oct 21
- [docs/cre8tive-copy-excellence-test-scenarios.md](./cre8tive-copy-excellence-test-scenarios.md) - Oct 21

**Skill Factory Audits:**
- [docs/audit-report-create-skill-2025-10-21.md](./audit-report-create-skill-2025-10-21.md) - Oct 21
- [docs/audit-report-create-simple-skill-2025-10-21.md](./audit-report-create-simple-skill-2025-10-21.md)
- [docs/audit-report-kb-integration-2025-10-21.md](./audit-report-kb-integration-2025-10-21.md)
- [docs/audit-summary-skill-factory-2025-10-21.md](./audit-summary-skill-factory-2025-10-21.md)
- [docs/green-phase-test-results-2025-10-21.md](./green-phase-test-results-2025-10-21.md) - Oct 21

---

### Sprint & Project Management

- [docs/ALIGNMENT-SPRINT-COMPLETION.md](./ALIGNMENT-SPRINT-COMPLETION.md)
- [docs/STORY-ALIGNMENT-REPORT.md](./STORY-ALIGNMENT-REPORT.md)
- [docs/STORY-VALIDATION-REPORT.md](./STORY-VALIDATION-REPORT.md)
- [docs/project-workflow-status-2025-10-16.md](./project-workflow-status-2025-10-16.md)

---

## 🔍 How to Find Things

### "I need to understand the tech stack"
→ [Current Architecture](#current-architecture) → Technology Stack section

### "I need to add a new component"
→ [Development Guide](./DEVELOPMENT-GUIDE.md) → Common Tasks → Adding a New Component

### "I need to understand GSAP patterns"
→ [Component Catalog](./component-catalog-exhaustive.md) → Briefing Engine Components
→ [Deep-Research/GSAP-Animation-Mastery/](./Deep-Research/GSAP-Animation-Mastery/)

### "I need to know what's implemented vs planned"
→ [Documentation Freshness Report](./documentation-freshness-report.md)
→ [What's Built vs. What's Planned](#whats-built-vs-whats-planned)

### "I need to find a specific component"
→ [Source Tree Analysis](./source-tree-analysis-exhaustive.md)
→ [Component Catalog](./component-catalog-exhaustive.md)

### "I need to understand the adaptive performance system"
→ [Current Architecture](./CURRENT-ARCHITECTURE.md) → Performance Architecture section
→ [Component Catalog](./component-catalog-exhaustive.md) → Search for "Story 1.14"

### "I need to deploy to production"
→ [Development Guide](./DEVELOPMENT-GUIDE.md) → Deployment section

---

## 🎯 Development Workflow Entry Points

### Starting a New Feature
1. Check [Documentation Freshness Report](./documentation-freshness-report.md) - Is there a spec?
2. Read relevant [Tech Spec](#technical-specifications)
3. Review [Component Catalog](./component-catalog-exhaustive.md) - Any reusable components?
4. Follow [Development Guide](./DEVELOPMENT-GUIDE.md) → Development Workflow

### Debugging an Issue
1. [Development Guide](./DEVELOPMENT-GUIDE.md) → Debugging section
2. Check [Component Catalog](./component-catalog-exhaustive.md) - Known patterns?
3. Review [Current Architecture](./CURRENT-ARCHITECTURE.md) - System understanding

### Understanding Architecture
1. [Current Architecture](./CURRENT-ARCHITECTURE.md) - Start here
2. [Source Tree Analysis](./source-tree-analysis-exhaustive.md) - Directory structure
3. [Component Catalog](./component-catalog-exhaustive.md) - Component details

---

## 📝 Documentation Best Practices

### For AI Agents

**Always Start With:**
1. This index (bmm-index.md)
2. Documentation Freshness Report (distinguish current vs future)
3. Current Architecture (understand systems)
4. Component Catalog (find existing patterns)

**When Adding Features:**
- Check Component Catalog for reusable patterns
- Follow Development Guide conventions
- Update relevant documentation when done

**When Debugging:**
- Check Component Catalog for known issues/patterns
- Review Current Architecture for system understanding
- Follow Development Guide debugging steps

### For Humans

**First Time Setup:**
1. Read [Development Guide](./DEVELOPMENT-GUIDE.md) → Quick Start
2. Review [Current Architecture](./CURRENT-ARCHITECTURE.md) → Quick Reference
3. Explore [Component Catalog](./component-catalog-exhaustive.md)

**Daily Development:**
- Use [Development Guide](./DEVELOPMENT-GUIDE.md) for common tasks
- Reference [Component Catalog](./component-catalog-exhaustive.md) for existing patterns
- Check [Documentation Freshness Report](./documentation-freshness-report.md) when referencing tech specs

---

## 🚨 Important Notes

### Documentation Accuracy

**CURRENT & ACCURATE (As of Nov 3, 2025):**
- All "Generated Documentation" listed above
- Epic 1 tech spec + stories
- .codex/ knowledge base

**PLANNING DOCS (Future, Not Implemented):**
- Epic 4, 5, Voice Widget tech specs
- Mark these clearly when referencing

**EVERGREEN REFERENCE:**
- Deep-Research GSAP mastery docs
- These are educational, not implementation plans

### Master Branch is Production

**IMPORTANT:** For this git repo, the `master` branch is production, NOT `main`.

```bash
# Deploy to production
git push origin master
```

### Performance Budget Enforcement

**Vendor bundle limit:** 900kb (enforced by custom Vite plugin)
- Baseline: 805kb
- Current projected: ~860kb
- Headroom: 40kb

Exceeding this limit will cause build to fail.

---

## 📊 Statistics Summary

**Project Size:**
- Total files: 215 source files
- Total LOC: ~20,000+
- Components: 178
- Hooks: 17
- Utils: 7
- Pages: 13 (9 active, 4 disabled/legacy)

**Documentation:**
- Existing docs: 60+
- Current & accurate: ~30%
- Planning docs: ~65%
- Reference materials: 24

**Implementation Status:**
- Epic 1: 90%+ implemented ✅
- Epic 4, 5, Voice Widget: Planned only ⏳
- Deep-Research: Reference 📚

---

## 🔗 Key Links

### Essential Documentation
- [This Index (bmm-index.md)](./bmm-index.md) - **YOU ARE HERE**
- [Current Architecture](./CURRENT-ARCHITECTURE.md) - Architecture documentation
- [Development Guide](./DEVELOPMENT-GUIDE.md) - Practical development guide
- [Component Catalog](./component-catalog-exhaustive.md) - All 178 components
- [Documentation Freshness Report](./documentation-freshness-report.md) - What's current vs planned
- [Source Tree Analysis](./source-tree-analysis-exhaustive.md) - Directory structure

### Primary Knowledge Base
- [.codex/_MEMO.md](../.codex/_MEMO.md) - Main knowledge base (59kb)

### Tech Specs (Current)
- [tech-spec-epic-1.md](./tech-spec-epic-1.md) - Briefing Engine (IMPLEMENTED)

### Reference Materials
- [Deep-Research/GSAP-Animation-Mastery/](./Deep-Research/GSAP-Animation-Mastery/) - 24 GSAP guides

---

**Index Generated:** November 3, 2025
**Analysis Type:** Exhaustive Scan with Critical Ultrathink (5 Parallel Explore Agents)
**Total Analysis Time:** ~45 minutes
**Files Analyzed:** 215 source files, 60+ documentation files
**Primary Contact:** bmm-index.md (this file) - Start here for all AI-assisted development