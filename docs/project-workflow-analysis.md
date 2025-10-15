# Project Workflow Analysis

**Date:** 2025-10-07
**Project:** claude-mode CLI utility
**Analyst:** Cameron

## Assessment Results

### Project Classification

- **Project Type:** CLI utility (library/package)
- **Project Level:** Level 0 (Single atomic change - focused utility)
- **Instruction Set:** tech-spec only

### Scope Summary

- **Brief Description:** CLI tool for atomic swapping between CLAUDE.md workflow modes (BMAD multi-agent vs Single-Claude) using symlink management
- **Estimated Stories:** 1 (single deliverable)
- **Estimated Epics:** 0 (no epic structure needed)
- **Timeline:** 1-2 hours implementation + testing

### Context

- **Greenfield/Brownfield:** Greenfield (new utility)
- **Existing Documentation:** CLAUDE-BMAD.md and CLAUDE-nonbmad.md source files created
- **Team Size:** Solo (Cameron)
- **Deployment Intent:** Local CLI utility for personal workflow optimization

## Recommended Workflow Path

### Primary Outputs

1. **tech-spec.md** - Technical specification for implementation
2. **claude-mode** - Executable CLI script (bash/node)
3. **README.md** - Installation and usage documentation

### Workflow Sequence

1. ✅ Project assessment (COMPLETE)
2. ⏭️ Generate tech-spec.md
3. ⏭️ Implement CLI tool
4. ⏭️ Manual validation (test mode swapping)
5. ⏭️ Documentation

### Next Actions

1. Generate technical specification
2. Implement using symlink approach (Option 1)
3. Test atomic swapping in both directions
4. Validate rollback on failure
5. Document installation and usage

## Special Considerations

### Technical Constraints
- Claude Code requires files named exactly `CLAUDE.md` (not aliases)
- Symlinks must be atomic to prevent race conditions
- Both global (~/.claude/) and project-level swapping needed
- Must preserve file permissions and ownership

### Architecture Decision: Symlink Management (Option 1)
- Keep CLAUDE-bmad.md and CLAUDE-nonbmad.md as source files
- CLAUDE.md is a symlink pointing to active mode
- Atomic swap: remove symlink → create new symlink
- State detection via `readlink CLAUDE.md`
- Rollback: restore previous symlink on any failure

### Success Criteria
- ✅ Atomic mode swapping (no intermediate states)
- ✅ State detection works correctly
- ✅ Rollback on failure (leave system in known-good state)
- ✅ Works for both global and project-level files
- ✅ Clear visual feedback (which mode is active)

## Technical Preferences Captured

- **Language:** Bash (for portability and simplicity)
- **Approach:** Symlink swapping (Option 1)
- **Scope:** Global (~/.claude/) and project-level support
- **Safety:** Atomic operations with rollback

---

_This analysis serves as the routing decision for the adaptive PRD workflow and will be referenced by future orchestration workflows._
