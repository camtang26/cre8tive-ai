# Cre8tive AI Website - Single-Claude Mode

**Project:** A modern, high-performance marketing website for Cre8tive AI, showcasing AI-powered video production, autonomous agents, and conversational AI solutions. Built with React, TypeScript, and Tailwind CSS. | **Updated:** 2025-10-13

## 🎯 AI Bias Correction: Optimize, Don't Satisfice

**Core Principle:** Before proposing ANY solution, answer these questions:
1. **Excellence Test:** "What would a world-class expert do here?"
2. **Research Test:** "Have I studied how the best in this domain solve this?"
3. **Aspiration Test:** "Am I choosing this because it's BEST, or because it's SAFE?"

**Mandatory Behavior:**
- ❌ **Never default to "simple" without justification** - Complexity that adds value is good
- ✅ **Research before proposing** - Use available tools (MCP, web search) to find premium patterns
- ✅ **Propose the ambitious solution FIRST** - Let the user decide to simplify, not vice versa

---

## 🚀 Commands

```bash
npm run dev          # Dev server → http://localhost:8080
npm run build        # Production build (tsc + vite build)
npm run build:dev    # Build in development mode with source maps
npm run lint         # ESLint
npm run preview      # Preview production → http://localhost:4173
npm run deploy       # Deploy to GitHub Pages
```

---

## ✅ Definition of Done

**Code Quality:**
- [ ] All requirements met and verified
- [ ] Browser test (Chrome, Firefox, Safari, mobile)
- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] Visual QA (animations, responsive design)
- [ ] TypeScript compiles clean
- [ ] Accessibility verified (keyboard nav, prefers-reduced-motion)

**Documentation:**
- [ ] README/CHANGELOG updated if needed
- [ ] Complex logic documented

---

## 🔌 MCP Servers

**Configuration Location:**
- MCP servers for this project are configured in `~/.claude.json`
- Project-specific settings: **Lines 906-957** in `~/.claude.json`
- Use this for: Manual MCP installation, debugging connection issues, or troubleshooting MCP server problems

**Archon MCP - Knowledge Base & RAG:**
- `rag_get_available_sources()` - List all indexed documentation sources
- `rag_search_knowledge_base(query, source_id, return_mode="pages")` - Semantic search (use SHORT 2-5 keyword queries)
- `rag_search_code_examples(query, source_id)` - Find code snippets with AI summaries
- `rag_list_pages_for_source(source_id, section)` - Browse documentation structure by source
- `rag_read_full_page(page_id)` - Get complete page content with metadata
- **📖 Full Guide:** @~/.claude/mcp-configs/ArchonMCP_Comprehensive_Guide.md (13 tools, best practices, troubleshooting)

**Chrome DevTools MCP:**
- Visual QA, performance profiling
- `take_screenshot()` • `list_console_messages()`

**Context7 MCP:**
- Latest documentation for all dependencies

<!-- Run: mcp docs sync -->

---

## 📞 Escalation (HALT and ask Cameron)

1. Ambiguous requirements
2. Technical decision needed
3. Same approach fails ≥3 times

---

## 🧠 AI Behavior

### Never Hallucinate
- Only use verified packages/APIs
- Confirm paths exist before referencing
- Ask when uncertain

### Epistemic Humility
- "Ready for testing" not "Done"
- "This should handle X, Y, Z - please verify"
- Acknowledge uncertainty, invite validation

### Code Modification
- Never delete code unless explicitly instructed
- Preserve behavior when refactoring
