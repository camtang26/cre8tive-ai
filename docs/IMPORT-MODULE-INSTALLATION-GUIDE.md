# Import-Module Workflow - Manual Installation Guide

**Version:** 1.0.0
**Target:** BMAD v6.0.0-alpha.0 projects
**Module:** BMB (BMad Builder)
**Date:** 2025-10-12

---

## 📋 Overview

This guide provides complete instructions for manually installing the `import-module` workflow into a BMAD project. This is necessary for the first installation because import-module is a custom workflow that enables importing other BMAD modules.

**What You're Installing:**
- Workflow that installs BMAD modules from exported archives
- Companion to export-module workflow
- Enables complete module portability across BMAD projects

**Prerequisites:**
- Target project must have BMAD v6.0.0-alpha.0 installed
- Target project must have bmb module installed
- Source files available from originating project

---

## 🎯 Installation Steps

### STEP 1: Copy Workflow Files

Copy the complete workflow directory from source project to target project.

**Source Location:**
```
{source-project}/bmad/bmb/workflows/import-module/
```

**Target Location:**
```
{target-project}/bmad/bmb/workflows/import-module/
```

**Files to Copy (4 total):**
1. `workflow.yaml` (1.8 KB)
2. `instructions.md` (17 KB)
3. `checklist.md` (5.5 KB)
4. `README.md` (9.6 KB)

**Command:**
```bash
# From source project root
cp -r bmad/bmb/workflows/import-module \
      {target-project-path}/bmad/bmb/workflows/
```

**Verification:**
```bash
# In target project
ls -la bmad/bmb/workflows/import-module/
# Should show: workflow.yaml, instructions.md, checklist.md, README.md
```

---

### STEP 2: Copy Slash Command

Copy the slash command file to enable `/bmad:bmb:workflows:import-module` invocation.

**Source Location:**
```
{source-project}/.claude/commands/bmad/bmb/workflows/import-module.md
```

**Target Location:**
```
{target-project}/.claude/commands/bmad/bmb/workflows/import-module.md
```

**Command:**
```bash
# From source project root
cp .claude/commands/bmad/bmb/workflows/import-module.md \
   {target-project-path}/.claude/commands/bmad/bmb/workflows/
```

**Verification:**
```bash
# In target project
ls -la .claude/commands/bmad/bmb/workflows/import-module.md
# Should exist and be 660 bytes
```

---

### STEP 3: Register in Workflow Manifest

Add import-module entry to the workflow manifest CSV.

**File:** `{target-project}/bmad/_cfg/workflow-manifest.csv`

**Entry to Add:**
```csv
"import-module","Install a BMAD module from an exported archive into the current project. Validates compatibility, extracts files to bmad directory, registers in manifests, and runs module installer if present.","bmb","bmad/bmb/workflows/import-module/workflow.yaml"
```

**Insertion Point:**
Insert after the `export-module` entry (or at end of bmb section).

**Example Context:**
```csv
"export-module","Package a BMAD module into a portable, distributable archive ready for installation in other projects. Validates module structure, bundles all components, generates installation manifests, and creates shareable package.","bmb","bmad/bmb/workflows/export-module/workflow.yaml"
"import-module","Install a BMAD module from an exported archive into the current project. Validates compatibility, extracts files to bmad directory, registers in manifests, and runs module installer if present.","bmb","bmad/bmb/workflows/import-module/workflow.yaml"
```

**Instructions:**
1. Open `bmad/_cfg/workflow-manifest.csv` in target project
2. Find the line starting with `"export-module"`
3. Add new line immediately after it with import-module entry
4. Save file

**Verification:**
```bash
# In target project
grep "import-module" bmad/_cfg/workflow-manifest.csv
# Should return the import-module entry
```

---

### STEP 4: Register Files in Files Manifest

Calculate checksums and register all 4 workflow files in the files manifest.

**File:** `{target-project}/bmad/_cfg/files-manifest.csv`

**Step 4a: Calculate Checksums**

```bash
# In target project root
sha256sum bmad/bmb/workflows/import-module/*.yaml
sha256sum bmad/bmb/workflows/import-module/*.md
```

**Expected Checksums:**
- `workflow.yaml`: `295734f27b556c52f7c3ae18332d1cb7e044e24a1f57acbe3f7fb53a2e4af788`
- `instructions.md`: `ebb9a4ab93f6080874696e08f9b966b733fc93ee4ac17af8823914c93aafb6e4`
- `checklist.md`: `6467773bf185cba8ad9617836d3caf685d224a98ebd910100448b08fc4570e0c`
- `README.md`: `dd9f3063f08f5a7b89e4892143284ffd1ee5115d51d2ffe005ca4802ec03c80c`

**Step 4b: Add Entries to Files Manifest**

**Entries to Add (4 total):**
```csv
"md","checklist","bmb","bmad/bmb/workflows/import-module/checklist.md","6467773bf185cba8ad9617836d3caf685d224a98ebd910100448b08fc4570e0c"
"md","instructions","bmb","bmad/bmb/workflows/import-module/instructions.md","ebb9a4ab93f6080874696e08f9b966b733fc93ee4ac17af8823914c93aafb6e4"
"md","README","bmb","bmad/bmb/workflows/import-module/README.md","dd9f3063f08f5a7b89e4892143284ffd1ee5115d51d2ffe005ca4802ec03c80c"
```

**And in the yaml workflow section:**
```csv
"yaml","workflow","bmb","bmad/bmb/workflows/import-module/workflow.yaml","295734f27b556c52f7c3ae18332d1cb7e044e24a1f57acbe3f7fb53a2e4af788"
```

**Insertion Points:**
- Markdown files: Insert after export-module entries in the `"md"` section
- YAML file: Insert after export-module workflow.yaml in the `"yaml","workflow"` section

**Instructions:**
1. Open `bmad/_cfg/files-manifest.csv` in target project
2. Find section with `"md","README","bmb","bmad/bmb/workflows/export-module/README.md"`
3. Add the 3 markdown entries immediately after
4. Find section with `"yaml","workflow","bmb","bmad/bmb/workflows/export-module/workflow.yaml"`
5. Add the yaml workflow entry immediately after
6. Save file

**Verification:**
```bash
# In target project
grep "import-module" bmad/_cfg/files-manifest.csv | wc -l
# Should return: 4 (one for each file)
```

---

### STEP 5: Update BMad Builder Agent Menu (Source)

Add import-module menu item to the BMad Builder agent source file.

**File:** `{target-project}/bmad/bmb/agents/bmad-builder.md`

**Entry to Add:**
```xml
<item cmd="*import" workflow="{project-root}/bmad/bmb/workflows/import-module/workflow.yaml">Import a BMAD module from exported archive into this project</item>
```

**Insertion Point:**
Insert immediately after the `*export` menu item, before `*exit`.

**Example Context:**
```xml
<item cmd="*export" workflow="{project-root}/bmad/bmb/workflows/export-module/workflow.yaml">Export a BMAD module as portable archive for distribution</item>
<item cmd="*import" workflow="{project-root}/bmad/bmb/workflows/import-module/workflow.yaml">Import a BMAD module from exported archive into this project</item>
<item cmd="*exit">Exit with confirmation</item>
```

**Instructions:**
1. Open `bmad/bmb/agents/bmad-builder.md` in target project
2. Find the `<menu>` section
3. Locate the line with `cmd="*export"`
4. Add new line immediately after with import entry
5. Ensure proper XML formatting
6. Save file

**Verification:**
```bash
# In target project
grep '*import' bmad/bmb/agents/bmad-builder.md
# Should return the import menu item line
```

---

### STEP 6: Update BMad Builder Agent Menu (Compiled)

Add import-module menu item to the compiled BMad Builder agent file.

**File:** `{target-project}/.claude/commands/bmad/bmb/agents/bmad-builder.md`

**Entry to Add:**
```xml
<item cmd="*import" workflow="/absolute/path/to/target-project/bmad/bmb/workflows/import-module/workflow.yaml">Import a BMAD module from exported archive into this project</item>
```

**⚠️ CRITICAL:** Use absolute path with actual target project path!

**Example (replace with actual path):**
```xml
<item cmd="*export" workflow="/home/user/projects/my-project/bmad/bmb/workflows/export-module/workflow.yaml">Export a BMAD module as portable archive for distribution</item>
<item cmd="*import" workflow="/home/user/projects/my-project/bmad/bmb/workflows/import-module/workflow.yaml">Import a BMAD module from exported archive into this project</item>
<item cmd="*exit">Exit with confirmation</item>
```

**Instructions:**
1. Open `.claude/commands/bmad/bmb/agents/bmad-builder.md` in target project
2. Find the `<menu>` section
3. Locate the line with `cmd="*export"`
4. Add new line immediately after with import entry
5. **Replace path with actual absolute path to target project**
6. Ensure proper XML formatting
7. Save file

**Path Resolution:**
```bash
# Get absolute path in target project
pwd
# Use this output to construct the full path:
# {pwd_output}/bmad/bmb/workflows/import-module/workflow.yaml
```

**Verification:**
```bash
# In target project
grep '*import' .claude/commands/bmad/bmb/agents/bmad-builder.md
# Should return the import menu item with ABSOLUTE path
```

---

### STEP 7: Verification Testing

Verify the installation is complete and functional.

**Test 1: Files Present**
```bash
# All workflow files exist
ls bmad/bmb/workflows/import-module/workflow.yaml
ls bmad/bmb/workflows/import-module/instructions.md
ls bmad/bmb/workflows/import-module/checklist.md
ls bmad/bmb/workflows/import-module/README.md

# Slash command exists
ls .claude/commands/bmad/bmb/workflows/import-module.md
```

**Test 2: Manifests Updated**
```bash
# Workflow registered
grep "import-module" bmad/_cfg/workflow-manifest.csv

# Files registered (should return 4)
grep "import-module" bmad/_cfg/files-manifest.csv | wc -l

# Agent menus updated (should return 2)
grep "*import" bmad/bmb/agents/bmad-builder.md .claude/commands/bmad/bmb/agents/bmad-builder.md | wc -l
```

**Test 3: Workflow Accessibility**
```bash
# Test slash command (in Claude Code or IDE)
/bmad:bmb:workflows:import-module
# Should invoke the workflow

# Test via agent (in Claude Code or IDE)
/bmad:bmb:agents:bmad-builder
# Menu should show import option
```

**Test 4: Functionality Test**
```bash
# Try importing a test module (if available)
/bmad:bmb:workflows:import-module
# Follow prompts to test full workflow
```

---

## 📊 Installation Checklist

Use this checklist to track installation progress:

- [ ] **Step 1:** Workflow files copied to `bmad/bmb/workflows/import-module/`
  - [ ] workflow.yaml present
  - [ ] instructions.md present
  - [ ] checklist.md present
  - [ ] README.md present

- [ ] **Step 2:** Slash command copied to `.claude/commands/bmad/bmb/workflows/`
  - [ ] import-module.md present

- [ ] **Step 3:** Workflow manifest updated
  - [ ] Entry added to workflow-manifest.csv
  - [ ] Entry format correct (CSV with proper quotes)

- [ ] **Step 4:** Files manifest updated
  - [ ] Checksums calculated for all 4 files
  - [ ] 3 markdown entries added
  - [ ] 1 yaml workflow entry added
  - [ ] Total 4 entries present

- [ ] **Step 5:** Source agent menu updated
  - [ ] Entry added to bmad/bmb/agents/bmad-builder.md
  - [ ] XML format correct
  - [ ] Positioned after *export

- [ ] **Step 6:** Compiled agent menu updated
  - [ ] Entry added to .claude/commands/bmad/bmb/agents/bmad-builder.md
  - [ ] Absolute path used (not {project-root})
  - [ ] Path verified correct

- [ ] **Step 7:** Verification complete
  - [ ] All files accessible
  - [ ] Manifests contain entries
  - [ ] Workflow invokable via slash command
  - [ ] Agent menu shows import option

---

## 🚨 Common Issues & Troubleshooting

### Issue: Checksums Don't Match
**Symptom:** Calculated checksums differ from guide
**Cause:** File contents different (edited or corrupted)
**Solution:** Use actual calculated checksums (they're just for validation, not required to match)

### Issue: Workflow Not Accessible
**Symptom:** `/bmad:bmb:workflows:import-module` not found
**Cause:** Slash command file not in correct location or IDE not refreshed
**Solution:**
- Verify `.claude/commands/bmad/bmb/workflows/import-module.md` exists
- Restart IDE or reload Claude Code

### Issue: Agent Menu Doesn't Show Import
**Symptom:** BMad Builder menu missing import option
**Cause:** Agent files not updated or cached
**Solution:**
- Verify both agent files updated (source + compiled)
- Clear context and re-invoke agent
- Check XML formatting in menu section

### Issue: Absolute Path Incorrect
**Symptom:** Workflow fails to load from compiled agent
**Cause:** Path in compiled agent not matching actual project location
**Solution:**
- Run `pwd` in target project to get correct path
- Update `.claude/commands/bmad/bmb/agents/bmad-builder.md` with correct absolute path
- Path format: `/full/absolute/path/to/project/bmad/bmb/workflows/import-module/workflow.yaml`

### Issue: Manifest CSV Format Errors
**Symptom:** Manifests corrupted or not parsing
**Cause:** Incorrect CSV quoting or line breaks
**Solution:**
- Ensure all fields wrapped in double quotes
- No extra line breaks within entries
- Comma-separated values
- Each entry on single line

---

## 🎯 Post-Installation

### Next Steps After Installation

1. **Test the Workflow**
   - Try importing a test module archive
   - Verify full workflow executes correctly
   - Check module installs to correct location

2. **Use Import-Module**
   - Now ready to import any BMAD module archive
   - Can import from exports folder or custom paths
   - Full module portability enabled

3. **Share Installation Guide**
   - This same guide can be used for other projects
   - Import-module can now import future workflow updates
   - Bootstrap problem solved for all future modules

### Accessing Import-Module

**Method 1: Via BMad Builder Agent**
```bash
/bmad:bmb:agents:bmad-builder
# Select: import (or number corresponding to import)
```

**Method 2: Direct Slash Command**
```bash
/bmad:bmb:workflows:import-module
```

**Method 3: Workflow Command**
```bash
workflow import-module
```

---

## 📦 Files Reference

### Complete File List

| File | Location | Size | Purpose |
|------|----------|------|---------|
| workflow.yaml | bmad/bmb/workflows/import-module/ | 1.8 KB | Workflow configuration |
| instructions.md | bmad/bmb/workflows/import-module/ | 17 KB | Workflow execution steps |
| checklist.md | bmad/bmb/workflows/import-module/ | 5.5 KB | Quality validation checks |
| README.md | bmad/bmb/workflows/import-module/ | 9.6 KB | Documentation & usage |
| import-module.md | .claude/commands/bmad/bmb/workflows/ | 660 B | Slash command definition |

### Manifest Entries

**workflow-manifest.csv (1 entry):**
```csv
"import-module","Install a BMAD module from an exported archive into the current project. Validates compatibility, extracts files to bmad directory, registers in manifests, and runs module installer if present.","bmb","bmad/bmb/workflows/import-module/workflow.yaml"
```

**files-manifest.csv (4 entries):**
```csv
"md","checklist","bmb","bmad/bmb/workflows/import-module/checklist.md","6467773bf185cba8ad9617836d3caf685d224a98ebd910100448b08fc4570e0c"
"md","instructions","bmb","bmad/bmb/workflows/import-module/instructions.md","ebb9a4ab93f6080874696e08f9b966b733fc93ee4ac17af8823914c93aafb6e4"
"md","README","bmb","bmad/bmb/workflows/import-module/README.md","dd9f3063f08f5a7b89e4892143284ffd1ee5115d51d2ffe005ca4802ec03c80c"
"yaml","workflow","bmb","bmad/bmb/workflows/import-module/workflow.yaml","295734f27b556c52f7c3ae18332d1cb7e044e24a1f57acbe3f7fb53a2e4af788"
```

### Agent Menu Items

**Source (bmad/bmb/agents/bmad-builder.md):**
```xml
<item cmd="*import" workflow="{project-root}/bmad/bmb/workflows/import-module/workflow.yaml">Import a BMAD module from exported archive into this project</item>
```

**Compiled (.claude/commands/bmad/bmb/agents/bmad-builder.md):**
```xml
<item cmd="*import" workflow="/absolute/path/to/project/bmad/bmb/workflows/import-module/workflow.yaml">Import a BMAD module from exported archive into this project</item>
```

---

## 🎓 Understanding the Installation

### Why Manual Installation?

Import-module is a **custom workflow** created to enable module portability. It's not part of the standard BMAD v6 alpha distribution. This creates a bootstrap problem:

- Projects need import-module to import modules
- But import-module itself must be imported first
- Solution: Manual installation for the first time

### Future Installations

Once import-module is installed in a project:
- All future modules can be imported using the workflow
- Including updates to bmb module itself
- No more manual installations needed
- Full module portability achieved

### Module Portability System

Import-module is part of a complete system:
- **export-module**: Package modules for distribution
- **import-module**: Install modules from packages
- Together they enable seamless module sharing across BMAD projects

---

## ✅ Installation Complete

Once all steps are completed and verified:

✅ Import-module workflow fully installed
✅ Accessible via slash command
✅ Available in BMad Builder menu
✅ Ready to import BMAD modules
✅ Module portability enabled

**Your BMAD project now has complete module import capability!**

---

*Installation Guide v1.0.0 - For BMAD v6.0.0-alpha.0*
*Generated: 2025-10-12*
