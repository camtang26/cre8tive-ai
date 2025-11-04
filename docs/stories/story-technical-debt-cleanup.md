# Story: Technical Debt Cleanup - Remove 1,500+ LOC Unused Code

Status: Draft

## Story

As a **developer maintaining the cre8tive-website-1006 codebase**,
I want **to remove 1,500+ lines of unused code including archive components, duplicate VimeoPlayer, and disabled Agents page components**,
so that **the codebase is cleaner, easier to navigate, and has reduced bundle size with zero functional impact**.

## Acceptance Criteria

**AC1: All Unused Files Deleted**
- ✅ `src/components/briefing/archive/` directory deleted (1,405 LOC)
- ✅ `src/components/agents/` directory deleted (~400 LOC)
- ✅ `src/components/video/VimeoPlayer.tsx` deleted (duplicate)
- ✅ Empty directories removed (`archive/`, `video/`, `agents/`)

**AC2: Build Validation Passes**
- ✅ `npm run build` completes with 0 TypeScript errors
- ✅ No "cannot find module" errors
- ✅ Build output shows "✓ built in XXXms"

**AC3: Linting Passes**
- ✅ `npm run lint` returns 0 errors (warnings acceptable)
- ✅ No import-related errors for deleted files

**AC4: Development Server Runs Cleanly**
- ✅ `npm run dev` starts successfully on localhost:8080
- ✅ No console errors during startup
- ✅ No module resolution failures

**AC5: Browser Runtime Verification**
- ✅ Home page loads without errors
- ✅ Briefing Engine page loads with working animations
- ✅ Studios page loads with working video components
- ✅ Conversational AI page loads without errors
- ✅ Agents page returns 404 (expected, route disabled)
- ✅ No console errors in DevTools on any page

**AC6: Git Commit Created**
- ✅ All deletions staged with `git add -A`
- ✅ Commit message follows convention: "chore: remove technical debt..."
- ✅ Commit includes all deleted files in git log --stat

**AC7: Zero Functional Impact**
- ✅ No user-facing features broken
- ✅ No runtime errors introduced
- ✅ 1,500+ LOC removed with zero functionality lost

## Tasks / Subtasks

### Phase 1: Pre-Deletion Verification (AC: #1, #7)
- [ ] Create feature branch: `git checkout -b cleanup/technical-debt`
- [ ] Verify Agents route commented in App.tsx: `rg "AgentsPage" src/App.tsx`
- [ ] Search for archive imports: `rg "from.*archive" src/`
- [ ] Search for video/VimeoPlayer imports: `rg "from.*video/VimeoPlayer" src/`
- [ ] Search for agents imports: `rg "from.*agents" src/`
- [ ] Confirm all searches return 0 matches

### Phase 2: Safe Deletion (AC: #1)
- [ ] Delete archive directory: `rm -rf src/components/briefing/archive/`
- [ ] Delete duplicate VimeoPlayer: `rm src/components/video/VimeoPlayer.tsx` (if exists)
- [ ] Delete agents directory: `rm -rf src/components/agents/`
- [ ] Delete AgentsPage: `rm src/pages/AgentsPage.tsx` (if exists)
- [ ] Remove empty video/ directory: `rmdir src/components/video/` (if empty)
- [ ] Verify deletions with ls commands

### Phase 3: Build Validation (AC: #2, #3, #4)
- [ ] Run TypeScript build: `npm run build` → Must pass with 0 errors
- [ ] Run ESLint: `npm run lint` → Must pass (errors=0, warnings OK)
- [ ] Start dev server: `npm run dev` → Must start cleanly on localhost:8080
- [ ] Stop dev server (Ctrl+C)

### Phase 4: Browser Testing (AC: #5)
- [ ] Test home page: http://localhost:8080 → Loads without errors
- [ ] Test Briefing Engine: /briefing-engine → Animations work correctly
- [ ] Test Studios page: /studios → Video components work
- [ ] Test Conversational AI: /conversational-ai → Loads without errors
- [ ] Verify Agents returns 404: /agents → Expected behavior
- [ ] Check DevTools console on all pages → No errors

### Phase 5: Git Commit (AC: #6)
- [ ] Review changes: `git status` → Verify all deletions listed
- [ ] Stage all deletions: `git add -A`
- [ ] Create commit with descriptive message (see tech spec for template)
- [ ] Verify commit: `git log -1 --stat` → Shows all deleted files

### Phase 6: Final Validation (AC: #7)
- [ ] Confirm 1,500+ LOC removed (git log --stat)
- [ ] Confirm zero TypeScript errors
- [ ] Confirm zero functional changes
- [ ] Mark story as DONE

## Dev Notes

### Technical Summary

This is a **pure code deletion task** with zero functional changes. The goal is to remove 1,500+ lines of unused/dead code to improve codebase maintainability.

**What's Being Deleted:**
1. **Archive components** (1,405 LOC) - Legacy versions of BriefToStoryboardAnimation and VisualStylesGallery that were replaced
2. **Duplicate VimeoPlayer** (~130 LOC) - Redundant implementation in video/ directory (canonical version in core/ is kept)
3. **Agents page components** (~400 LOC) - Disabled feature including AgentsHero, NetworkVisualization, network/ stubs, and AiMarketingSolutions

**Why Safe:**
- All deleted code verified as unused (confirmed in exhaustive documentation scan Nov 3, 2025)
- Agents route already commented out in App.tsx
- No imports found referencing deleted paths
- Easy rollback via git revert if issues discovered

**Implementation Strategy:**
Three-phase approach: (1) Verification via ripgrep searches, (2) Safe deletion with rm commands, (3) Build/runtime validation

**Risk Level:** VERY LOW - Pure deletion, no code changes, thoroughly validated

### Project Structure Notes

- **Files to modify:** NONE (only deletions)
- **Files to delete:**
  - `src/components/briefing/archive/BriefToStoryboardAnimation.tsx`
  - `src/components/briefing/archive/VisualStylesGallery.tsx`
  - `src/components/video/VimeoPlayer.tsx` (if exists)
  - `src/components/agents/` (entire directory)
  - `src/pages/AgentsPage.tsx` (if exists)
- **Expected test locations:** N/A (manual browser testing only, no automated tests exist)
- **Estimated effort:** 1 story point (2-4 hours total: 20 min deletion + validation, remainder for testing/review)

### References

- **Tech Spec:** See `docs/tech-spec-technical-debt-cleanup.md` for detailed implementation guide
- **Architecture:** No architecture changes - this is cleanup only
- **Documentation Scan:** See `docs/component-catalog-exhaustive.md` and `docs/documentation-freshness-report.md` (Technical Debt Identified section)
- **Canonical VimeoPlayer:** Keep `src/components/core/VimeoPlayer.tsx` (131 LOC, used throughout site)

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

<!-- Will be populated during dev-story execution -->

### Debug Log References

<!-- Will be populated during dev-story execution -->

### Completion Notes List

<!-- Will be populated during dev-story execution -->

### File List

<!-- Will be populated during dev-story execution -->
