# claude-mode CLI - Technical Specification

**Author:** Cameron
**Date:** 2025-10-07
**Project Level:** Level 0 (Single atomic utility)
**Project Type:** CLI utility
**Development Context:** Greenfield (new utility)

---

## Source Tree Structure

```
claude-mode                          # Main executable (bash script)
├── Installation: /usr/local/bin/    # System-wide CLI access
└── Permissions: 755 (executable)

README.md                            # Installation and usage docs
├── Location: Project root
└── Sections: Installation, Usage, Troubleshooting

Source file locations (managed by CLI):
~/.claude/
├── CLAUDE.md → CLAUDE-bmad.md       # Symlink (active mode)
├── CLAUDE-bmad.md                   # BMAD multi-agent source
└── CLAUDE-nonbmad.md                # Single-Claude source

{project}/.claude/ (optional)
├── CLAUDE.md → CLAUDE-bmad.md       # Symlink (active mode)
├── CLAUDE-bmad.md                   # BMAD multi-agent source
└── CLAUDE-nonbmad.md                # Single-Claude source
```

**File Responsibilities:**
- `claude-mode`: Core CLI logic (symlink management, state detection, rollback)
- `README.md`: User-facing documentation
- `CLAUDE-bmad.md`: Source of truth for BMAD mode instructions
- `CLAUDE-nonbmad.md`: Source of truth for Single-Claude mode instructions
- `CLAUDE.md`: Symlink pointing to active mode (created/managed by CLI)

---

## Technical Approach

### Architecture: Symlink-Based Mode Switching

**Core Mechanism:**
1. Keep two source files: `CLAUDE-bmad.md` and `CLAUDE-nonbmad.md`
2. `CLAUDE.md` is always a symlink pointing to one of the sources
3. Mode switching = atomic symlink replacement

**Atomic Swap Algorithm:**
```
1. Detect current mode (readlink CLAUDE.md)
2. Backup current state (store symlink target)
3. Remove existing symlink (rm CLAUDE.md)
4. Create new symlink (ln -s <target> CLAUDE.md)
5. Verify new symlink (readlink CLAUDE.md)
6. On failure: Rollback to backup state
```

**State Detection:**
```bash
if readlink CLAUDE.md → CLAUDE-bmad.md
  then current_mode = "bmad"
elif readlink CLAUDE.md → CLAUDE-nonbmad.md
  then current_mode = "single"
else
  error: "Invalid state"
```

**Scope:**
- Global mode: `~/.claude/CLAUDE.md`
- Project mode: `{pwd}/CLAUDE.md` (if CLAUDE-bmad.md exists in current directory)
- Default: Global mode (always available)
- Project override: If project-level source files exist, operate on those instead

---

## Implementation Stack

**Language & Runtime:**
- Bash 4.0+ (standard on macOS/Linux, available on WSL2)
- No external dependencies (uses only built-in commands)

**Core Commands:**
- `readlink` - Symlink target detection
- `ln -s` - Symlink creation
- `rm` - Symlink removal
- `test -L` - Symlink validation
- `test -f` - File existence check
- `basename` - Path manipulation

**Platform Support:**
- Linux (Ubuntu 22.04+)
- macOS (10.15+)
- WSL2 (Windows Subsystem for Linux)

**Installation Method:**
- Manual: Copy `claude-mode` to `/usr/local/bin/`
- Permissions: `chmod +x /usr/local/bin/claude-mode`

---

## Technical Details

### CLI Interface

**Command Syntax:**
```bash
claude-mode <mode> [options]

Modes:
  bmad      Switch to BMAD multi-agent mode
  single    Switch to single-Claude mode
  status    Show current active mode
  init      Initialize source files (if missing)

Options:
  --global  Force global mode (~/.claude/)
  --project Force project mode (current directory)
  --help    Show usage information
```

**Usage Examples:**
```bash
claude-mode bmad           # Switch to BMAD mode (auto-detect scope)
claude-mode single         # Switch to single-Claude mode
claude-mode status         # Show "Current mode: bmad (global)"
claude-mode init           # Create CLAUDE-bmad.md + CLAUDE-nonbmad.md if missing
claude-mode bmad --project # Switch project-level only
```

### Core Functions

**1. detect_scope()**
```bash
# Determine if operating on global or project scope
if [[ -f "CLAUDE-bmad.md" && -f "CLAUDE-nonbmad.md" ]]; then
  scope="project"
  base_dir="."
else
  scope="global"
  base_dir="$HOME/.claude"
fi
```

**2. get_current_mode()**
```bash
# Return current mode or "none" if invalid
target=$(readlink "$base_dir/CLAUDE.md" 2>/dev/null)
case "$target" in
  CLAUDE-bmad.md) echo "bmad" ;;
  CLAUDE-nonbmad.md) echo "single" ;;
  *) echo "none" ;;
esac
```

**3. swap_mode(target_mode)**
```bash
# Atomic symlink swap with rollback
current=$(readlink "$base_dir/CLAUDE.md" 2>/dev/null)
rm "$base_dir/CLAUDE.md" || { echo "Failed to remove symlink"; exit 1; }
ln -s "CLAUDE-$target_mode.md" "$base_dir/CLAUDE.md" || {
  ln -s "$current" "$base_dir/CLAUDE.md"  # Rollback
  echo "Swap failed, rolled back to $current"
  exit 1
}
verify=$(readlink "$base_dir/CLAUDE.md")
[[ "$verify" == "CLAUDE-$target_mode.md" ]] || {
  ln -s "$current" "$base_dir/CLAUDE.md"  # Rollback
  echo "Verification failed, rolled back"
  exit 1
}
```

**4. validate_environment()**
```bash
# Pre-flight checks before any operation
[[ -d "$base_dir" ]] || { echo "Directory $base_dir not found"; exit 1; }
[[ -f "$base_dir/CLAUDE-bmad.md" ]] || { echo "CLAUDE-bmad.md missing"; exit 1; }
[[ -f "$base_dir/CLAUDE-nonbmad.md" ]] || { echo "CLAUDE-nonbmad.md missing"; exit 1; }
```

### Visual Feedback

**Status Output:**
```
Current mode: bmad (global)
  └─ ~/.claude/CLAUDE.md → CLAUDE-bmad.md
```

**Swap Success:**
```
✓ Switched to BMAD mode (global)
  ~/.claude/CLAUDE.md → CLAUDE-bmad.md
```

**Swap Failure:**
```
✗ Failed to switch modes
  Rolled back to: single
  Error: Symlink verification failed
```

---

## Development Setup

**Prerequisites:**
- Bash 4.0+ installed
- Write access to `/usr/local/bin/` (or use `~/bin/` alternative)
- `CLAUDE-bmad.md` and `CLAUDE-nonbmad.md` source files created

**Development Workflow:**
1. Create `claude-mode` script in project root
2. Test locally: `bash claude-mode <mode>`
3. Validate all error paths (missing files, permission errors, etc.)
4. Install globally: `sudo cp claude-mode /usr/local/bin/`
5. Set permissions: `sudo chmod +x /usr/local/bin/claude-mode`
6. Test installed version: `claude-mode status`

**Local Testing (No Installation):**
```bash
# Test from project directory
bash ./claude-mode status
bash ./claude-mode bmad --global
bash ./claude-mode single --global
```

---

## Implementation Guide

### Phase 1: Core Script (30 minutes)
1. Create `claude-mode` file with shebang: `#!/usr/bin/env bash`
2. Implement `validate_environment()` function
3. Implement `detect_scope()` function
4. Implement `get_current_mode()` function
5. Implement `swap_mode()` function with rollback
6. Add command-line argument parsing
7. Add help text and usage examples

### Phase 2: Error Handling (15 minutes)
1. Missing source files detection
2. Invalid symlink state handling
3. Permission error handling
4. Rollback verification
5. Clear error messages

### Phase 3: Visual Feedback (10 minutes)
1. Status command with ASCII tree
2. Success/failure indicators (✓/✗)
3. Scope indicator (global/project)
4. Color coding (optional, using ANSI codes)

### Phase 4: Documentation (15 minutes)
1. Create README.md with installation steps
2. Add usage examples
3. Add troubleshooting section
4. Document edge cases

### Acceptance Criteria:
- ✅ `claude-mode bmad` switches to BMAD mode
- ✅ `claude-mode single` switches to single-Claude mode
- ✅ `claude-mode status` shows current mode accurately
- ✅ Rollback works on any failure
- ✅ Works for both global and project scopes
- ✅ Clear error messages for all failure modes
- ✅ No intermediate invalid states

---

## Testing Approach

### Manual Test Cases

**Test 1: Fresh Environment**
```bash
# Setup
cd ~/.claude
rm CLAUDE.md  # Remove any existing symlink

# Execute
claude-mode init
claude-mode bmad

# Verify
readlink CLAUDE.md  # Should output: CLAUDE-bmad.md
claude-mode status  # Should show: Current mode: bmad (global)
```

**Test 2: Mode Switching**
```bash
# Setup: Start in BMAD mode
claude-mode bmad

# Execute
claude-mode single

# Verify
readlink CLAUDE.md  # Should output: CLAUDE-nonbmad.md
claude-mode status  # Should show: Current mode: single (global)
```

**Test 3: Idempotent Switching**
```bash
# Setup: Already in BMAD mode
claude-mode bmad

# Execute
claude-mode bmad  # Switch to already-active mode

# Verify
# Should succeed (no error)
claude-mode status  # Should show: Current mode: bmad (global)
```

**Test 4: Project-Level Override**
```bash
# Setup
cd ~/projects/test-project
cp ~/.claude/CLAUDE-bmad.md .
cp ~/.claude/CLAUDE-nonbmad.md .

# Execute
claude-mode bmad

# Verify
readlink CLAUDE.md  # Should output: CLAUDE-bmad.md
claude-mode status  # Should show: Current mode: bmad (project)
# Global should be unaffected
cd ~/.claude && readlink CLAUDE.md  # Should still be previous mode
```

**Test 5: Rollback on Failure**
```bash
# Setup: Simulate failure by making target read-only
chmod 000 ~/.claude/CLAUDE-bmad.md
claude-mode status  # Note current mode

# Execute
claude-mode bmad  # Should fail

# Verify
claude-mode status  # Should show original mode (rolled back)
chmod 644 ~/.claude/CLAUDE-bmad.md  # Restore permissions
```

**Test 6: Missing Source Files**
```bash
# Setup
cd ~/.claude
mv CLAUDE-bmad.md CLAUDE-bmad.md.backup

# Execute
claude-mode bmad

# Verify
# Should show error: "CLAUDE-bmad.md missing"
# Should NOT create invalid symlink

# Cleanup
mv CLAUDE-bmad.md.backup CLAUDE-bmad.md
```

### Validation Checklist
- [ ] Atomic swaps (no race conditions)
- [ ] Rollback restores previous state
- [ ] Status command accurate
- [ ] Global vs project scope detection works
- [ ] Error messages are clear
- [ ] Permissions preserved (644 for .md files, 755 for symlinks)
- [ ] Works on Linux, macOS, WSL2

---

## Deployment Strategy

### Installation Steps

**User Installation (Recommended):**
```bash
# 1. Download or clone repository
git clone <repo-url> /tmp/claude-mode-install
cd /tmp/claude-mode-install

# 2. Install globally
sudo cp claude-mode /usr/local/bin/
sudo chmod +x /usr/local/bin/claude-mode

# 3. Verify installation
claude-mode --help
claude-mode status

# 4. Initialize (if needed)
claude-mode init  # Creates source files if missing
```

**Alternative: User-Local Installation (No sudo):**
```bash
# 1. Create ~/bin if doesn't exist
mkdir -p ~/bin

# 2. Add to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH="$HOME/bin:$PATH"

# 3. Install
cp claude-mode ~/bin/
chmod +x ~/bin/claude-mode

# 4. Reload shell
source ~/.bashrc  # or source ~/.zshrc
```

### Distribution

**Repository Structure:**
```
claude-mode-cli/
├── claude-mode           # Executable script
├── README.md            # Installation and usage
├── CLAUDE-BMAD.md       # Sample BMAD mode file
├── CLAUDE-nonbmad.md    # Sample Single-Claude mode file
└── LICENSE              # MIT License
```

**Package Management (Future):**
- Homebrew formula (macOS)
- apt/deb package (Ubuntu/Debian)
- npm global install (cross-platform)

### Rollout Plan
1. Create GitHub repository
2. Test on all platforms (Linux, macOS, WSL2)
3. Create installation script for automated setup
4. Document in project README
5. Share with BMAD community

---

_This tech spec is for Level 0 projects (BMad Method v6). It provides the technical details needed for implementation. Level 3+ projects use the separate architecture workflow for comprehensive technical design._
