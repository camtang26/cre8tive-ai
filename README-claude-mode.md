# claude-mode CLI

Command-line utility for switching between CLAUDE.md workflow modes in Claude Code.

## Overview

`claude-mode` manages which workflow instructions Claude Code loads by creating symlinks to either:
- **BMAD mode** (`CLAUDE-bmad.md`) - Multi-agent workflow with specialized agents
- **Single-Claude mode** (`CLAUDE-nonbmad.md`) - Traditional single-agent workflow

## Features

✅ **Atomic swapping** - No intermediate invalid states
✅ **Automatic rollback** - Restores previous state on any failure
✅ **Scope detection** - Works globally (~/.claude/) or per-project
✅ **State awareness** - Always know which mode is active
✅ **Zero dependencies** - Pure bash, works everywhere

## Installation

### Prerequisites

- Bash 4.0+ (standard on Linux/macOS/WSL2)
- Source files created:
  - `~/.claude/CLAUDE-bmad.md` (BMAD mode instructions)
  - `~/.claude/CLAUDE-nonbmad.md` (Single-Claude mode instructions)

### Global Installation

```bash
# Copy to system bin
sudo cp claude-mode /usr/local/bin/
sudo chmod +x /usr/local/bin/claude-mode

# Verify installation
claude-mode --help
```

### User-Local Installation (No sudo)

```bash
# Create ~/bin if needed
mkdir -p ~/bin

# Add to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH="$HOME/bin:$PATH"

# Install
cp claude-mode ~/bin/
chmod +x ~/bin/claude-mode

# Reload shell
source ~/.bashrc  # or source ~/.zshrc
```

## Usage

### Basic Commands

```bash
# Switch to BMAD multi-agent mode
claude-mode bmad

# Switch to Single-Claude mode
claude-mode single

# Check current mode
claude-mode status

# Initialize source files (checks if they exist)
claude-mode init
```

### Scope Options

```bash
# Force global scope (~/.claude/)
claude-mode bmad --global

# Force project scope (current directory)
claude-mode bmad --project

# Auto-detect (default)
# Uses project if CLAUDE-bmad.md exists in current directory
# Otherwise uses global (~/.claude/)
claude-mode bmad
```

### Example Workflow

```bash
# Check current mode
$ claude-mode status
Current mode: Single-Claude (global)
  └─ ~/.claude/CLAUDE.md → CLAUDE-nonbmad.md

# Switch to BMAD mode for complex feature work
$ claude-mode bmad
✓ Switched to BMAD mode (global)
  ~/.claude/CLAUDE.md → CLAUDE-bmad.md

# Start new Claude Code session - BMAD instructions now active!

# Switch back to Single-Claude for quick fixes
$ claude-mode single
✓ Switched to Single-Claude mode (global)
  ~/.claude/CLAUDE.md → CLAUDE-nonbmad.md
```

## How It Works

### Symlink Management

The tool manages `CLAUDE.md` as a symlink pointing to one of the source files:

```
~/.claude/
├── CLAUDE.md → CLAUDE-bmad.md       # Symlink (active mode)
├── CLAUDE-bmad.md                   # BMAD source
└── CLAUDE-nonbmad.md                # Single-Claude source
```

### Atomic Swap Algorithm

1. Detect current mode (read symlink target)
2. Backup current state
3. Remove existing symlink
4. Create new symlink to target mode
5. Verify new symlink is correct
6. **On failure:** Rollback to backup state

### Scope Detection

- **Project scope:** If `CLAUDE-bmad.md` exists in current directory
- **Global scope:** `~/.claude/` (default)

Project scope allows per-project mode overrides without affecting global setting.

## Troubleshooting

### Error: "CLAUDE-bmad.md missing"

**Problem:** Source files don't exist in the detected scope.

**Solution:**
```bash
# For global scope
cd ~/.claude
# Copy your CLAUDE-BMAD.md to CLAUDE-bmad.md
# Copy your CLAUDE.md (original) to CLAUDE-nonbmad.md

# For project scope
cd /path/to/project
# Copy project-specific CLAUDE-BMAD.md to CLAUDE-bmad.md
# Copy project-specific CLAUDE.md to CLAUDE-nonbmad.md
```

### Error: "Directory ~/.claude not found"

**Problem:** Claude Code configuration directory doesn't exist.

**Solution:**
```bash
mkdir -p ~/.claude
# Then create source files (see above)
```

### Symlink shows "unknown"

**Problem:** `CLAUDE.md` exists but isn't a valid symlink.

**Solution:**
```bash
cd ~/.claude
rm CLAUDE.md  # Remove invalid file
claude-mode bmad  # Create fresh symlink
```

### Permission denied

**Problem:** No write access to target directory.

**Solution:**
```bash
# For global scope
chmod u+w ~/.claude

# For /usr/local/bin installation
sudo cp claude-mode /usr/local/bin/
```

### Mode switch doesn't take effect

**Problem:** Claude Code caches instructions at session start.

**Solution:**
1. Switch mode: `claude-mode bmad`
2. **Start a NEW Claude Code session** (close and reopen)
3. Verify: New session will load the active mode's instructions

## Development

### Testing Locally

```bash
# Test without installing
bash ./claude-mode status
bash ./claude-mode bmad --global
bash ./claude-mode single --global
```

### Manual Test Cases

See [tech-spec.md](docs/tech-spec.md) for complete test suite.

**Quick smoke test:**
```bash
# Setup
cd ~/.claude
claude-mode status  # Note current mode

# Test swap
claude-mode bmad
readlink CLAUDE.md  # Should show: CLAUDE-bmad.md

# Test reverse
claude-mode single
readlink CLAUDE.md  # Should show: CLAUDE-nonbmad.md

# Verify rollback
chmod 000 CLAUDE-bmad.md  # Make unreadable
claude-mode bmad  # Should fail and rollback
claude-mode status  # Should show original mode
chmod 644 CLAUDE-bmad.md  # Restore permissions
```

## File Structure

```
claude-mode                # Executable bash script
README-claude-mode.md      # This file
docs/
├── tech-spec.md           # Technical specification
└── project-workflow-analysis.md  # Project assessment
```

## License

MIT License - See LICENSE file

## Version

**1.0.0** (2025-10-07)

## Author

Cameron - Built using BMAD Method v6.0.0-alpha.0

---

**Note:** Remember to start a NEW Claude Code session after switching modes for changes to take effect!
