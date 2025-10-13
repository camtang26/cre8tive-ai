# Cre8tive AI Website - BMAD Mode

**Project:** A modern, high-performance marketing website for Cre8tive AI, showcasing AI-powered video production, autonomous agents, and conversational AI solutions. Built with React, TypeScript, and Tailwind CSS. | **BMAD:** v6.0.0-alpha.0 | **Updated:** 2025-10-13

## 🔍 Tooling (Universal)

**Claude Code Built-in Tools Status** (as of 2025-10-13):
- ❌ **Grep tool**: DENIED (50% failure rate per GH#5256) → Use `rg` via Bash
- ✅ **Glob tool**: ENABLED (tested safe, GH#8973 not reproducible in v2.0.14)
- ✅ **Read/Edit/Write**: Reliable, use as normal

**Core Search Tools** (optimized versions in ~/.local/bin):

```bash
# Content Search (ripgrep 14.1.0 with ~/.ripgreprc auto-config)
rg "pattern"                    # Smart case, auto-excludes node_modules/dist
rg -t typescript "interface"    # Language-specific search
rg -i "TODO|FIXME"             # Case-insensitive, multiple patterns
rg --files-with-matches "bug"   # Just filenames (token efficient)
rg -A 3 -B 3 "error"           # Context lines (3 before/after)

# File Discovery (fd 10.2.0, respects .gitignore + .claudeignore)
fd "\.ts$"                      # Find TypeScript files
fd -t f -e md docs/            # Type filter + extension in specific dir
fd -H "config"                 # Include hidden files
fd --max-depth 2 "package"     # Limit search depth

# JSON Processing
jq '.key' file.json            # Parse/transform
jq -r '.items[] | .name'       # Raw output, array iteration

# Git Diff (delta 0.18.2 for beautiful diffs)
git diff | delta               # Syntax-highlighted diff
git log -p | delta             # Commit history with diffs

# Benchmarking (hyperfine 1.19.0)
hyperfine --warmup 3 'command' # Performance testing
```

**Config Files** (auto-active):
- `~/.ripgreprc`: 25 optimizations (smart case, exclusions, colors)
- `.claudeignore`: Context filtering (50+ patterns)

**Why These Tools**:
- rg 14.1.0: 20-30% faster than 13.0.0, SIMD optimized, 100% reliable vs Grep's 50%
- fd 10.2.0: Better glob handling vs 8.3.1, respects .gitignore

**Privileges**: `sudo` available (NOPASSWD for `cameronai`). Use responsibly, preview changes.

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
npm run build        # Production build (tsc + vite build)
npm run build:dev    # Build in development mode with source maps
npm run lint         # ESLint (errors MUST pass, warnings OK)
npm run preview      # Preview production → http://localhost:4173
npm run deploy       # Deploy to GitHub Pages (CI/CD preferred)
```

---

## ✅ Definition of Done

**Code Quality:**
- [ ] All Acceptance Criteria satisfied
- [ ] Browser test (Chrome, Firefox, Safari, mobile)
- [ ] `npm run build` passes
- [ ] `npm run lint` passes (errors only, warnings OK)
- [ ] Visual QA (design, animations, responsive)
- [ ] TypeScript compiles clean (no type errors)
- [ ] GSAP/Lenis animations tested (smooth 60fps, no jank)

**Documentation:**
- [ ] Code comments explain "why" where needed
- [ ] Complex logic documented

**Testing:** Zero automated tests exist (manual testing only until infrastructure added)

---

## 🔌 MCP Servers

**Archon MCP (MANDATORY before GSAP/Lenis/Tailwind decisions):**
- Research GSAP best practices, Lenis integration patterns, accessibility standards
- `rag_search_knowledge_base(query="...", match_count=5)`

**Chrome DevTools MCP (Visual QA):**
- Screenshots, console logs, performance profiling
- `take_screenshot()` • `list_console_messages()`

**Context7 MCP:**
- Latest docs for React, GSAP, TypeScript, Vite

<!-- Run: mcp docs sync -->

---

## 📞 Escalation (HALT and ask Cameron)

1. Story Context XML missing
2. Ambiguous/contradictory Acceptance Criteria
3. Architectural decision needed (e.g., state management, routing patterns)
4. Security/performance risk
5. Same approach fails ≥3 times

---

## 🧠 AI Behavior (Universal)

### Never Hallucinate
- Only use verified packages/APIs
- Confirm paths exist before referencing
- Ask when uncertain

### Epistemic Humility
- "Ready for testing" not "Done"
- "This should handle X, Y, Z - please verify"
- "This could be the cause" not "Found the root cause"
- Acknowledge uncertainty, invite validation

### Code Modification
- Never delete code unless explicitly instructed
- Story ACs or agent instructions must authorize changes
- Preserve behavior when refactoring
