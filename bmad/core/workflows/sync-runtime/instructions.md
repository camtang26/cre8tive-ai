# Sync Runtime - Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/core/workflows/sync-runtime/workflow.yaml</critical>
<critical>Communicate in {communication_language} throughout the sync process</critical>

<workflow>

<step n="1" goal="Scan source files">
<action>Welcome {user_name} and explain the sync utility purpose</action>

**Welcome Message:**

```markdown
🔄 **Runtime Sync Utility**

This tool helps you synchronize BMAD agents and workflows from source (`bmad/`)
to runtime locations (`.claude/commands/`), with detection of user-level conflicts.

**What it does:**

1. Scans all agents and workflows in bmad/
2. Compares with project-level runtime (.claude/commands/)
3. Detects user-level conflicts (~/.claude/commands/)
4. Offers sync/cleanup options
```

<action>Scan bmad/ directory for all agents and workflows:</action>

**Scan Agents:**

```bash
find bmad/ -path "*/agents/*.md" -o -path "*/agents/*.agent.yaml"
```

**Scan Workflows:**

```bash
find bmad/ -path "*/workflows/*.md" -name "*.md" ! -path "*/workflows/*/instructions.md" ! -path "*/workflows/*/template.md" ! -path "*/workflows/*/checklist.md"
```

<action>Build inventory of files to check:</action>

For each file found:

- Record source path: `bmad/{module}/{type}/{filename}`
- Determine project runtime path: `.claude/commands/bmad/{module}/{type}/{filename}`
- Determine user runtime path: `~/.claude/commands/bmad/{module}/{type}/{filename}`

<action>Count total files discovered:</action>

- Agents: {{agent_count}}
- Workflows: {{workflow_count}}
- Total: {{total_files}}

<template-output>file_inventory</template-output>

</step>

<step n="2" goal="3-Way Comparison">
<action>For each file in inventory, perform 3-way comparison</action>

**Comparison Process:**

<action>Check file existence at all 3 locations:</action>

1. **Source** (`bmad/`): Should always exist (we found it in scan)
2. **Project Runtime** (`.claude/commands/`): May or may not exist
3. **User Runtime** (`~/.claude/commands/`): May or may not exist

<action>For files that exist, collect metadata:</action>

- **Size** (in bytes and human-readable)
- **Modified timestamp** (date and time)
- **SHA256 hash** (first 8 characters for display)

**Commands:**

```bash
# Size
ls -lh {file_path} | awk '{print $5}'

# Timestamp
stat -c '%y' {file_path} | cut -d' ' -f1,2 | cut -d'.' -f1

# SHA256 (first 8 chars)
sha256sum {file_path} | cut -c1-8
```

<action>Determine sync status for each file:</action>

**Status Categories:**

1. **✅ SYNCED**: Source matches project runtime, no user runtime
   - Condition: source_hash == project_hash AND user_exists == false

2. **⚠️ OUT_OF_SYNC**: Source doesn't match project runtime
   - Condition: source_hash != project_hash AND user_exists == false

3. **🔴 CONFLICT**: User runtime exists and overrides project
   - Condition: user_exists == true

4. **🔴 STALE_OVERRIDE**: User runtime exists but differs from source
   - Condition: user_exists == true AND user_hash != source_hash

5. **⚠️ MISSING**: Source exists but no runtime files at all
   - Condition: project_exists == false AND user_exists == false

<action>Build comparison table for all files</action>

<template-output>comparison_results</template-output>

</step>

<step n="3" goal="Present Findings">
<action>Display comprehensive comparison table to {user_name}</action>

**Table Format:**

```markdown
## 🔍 Sync Status Report

**Summary:**

- Total Files Checked: {{total_files}}
- ✅ Fully Synced: {{synced_count}}
- ⚠️ Out of Sync: {{out_of_sync_count}}
- 🔴 User-Level Conflicts: {{conflict_count}}
- ⚠️ Missing Runtime: {{missing_count}}

---

### Detailed Comparison

| File               | Module | Type     | Status         | Source        | Project       | User          |
| ------------------ | ------ | -------- | -------------- | ------------- | ------------- | ------------- |
| architect.md       | bmm    | agent    | 🔴 CONFLICT    | 6.6k (abc123) | 6.6k (abc123) | 5.7k (def456) |
| analyst.md         | bmm    | agent    | ✅ SYNCED      | 5.1k (xyz789) | 5.1k (xyz789) | -             |
| workflow-status.md | bmm    | workflow | ⚠️ OUT_OF_SYNC | 3.2k (aaa111) | 2.8k (bbb222) | -             |

---

### ⚠️ Priority Issues

**🔴 CRITICAL - User-Level Conflicts ({{conflict_count}}):**
These files in `~/.claude/commands/` will override your project-level files:

{{list_of_conflicts}}

**⚠️ IMPORTANT - Out of Sync ({{out_of_sync_count}}):**
Source and project runtime don't match:

{{list_of_out_of_sync}}

**⚠️ IMPORTANT - Missing Runtime ({{missing_count}}):**
No runtime files found for these sources:

{{list_of_missing}}
```

<action>Explain what the status means:</action>

```markdown
### 📖 What This Means

**Claude Code Load Priority:**

1. User-level (~/.claude/commands/) - HIGHEST PRIORITY
2. Project-level (.claude/commands/) - Used if no user-level file
3. Source (bmad/) - Not loaded directly by Claude Code

**If you have conflicts:**

- Claude Code is loading the user-level version
- Your project-level updates are being ignored
- You need to remove or update user-level files
```

</step>

<step n="4" goal="Sync Options">
<action>Present sync/cleanup options to {user_name}</action>

<ask>What would you like to do?

1. **Sync All to Project-Level** - Copy all out-of-sync sources to .claude/commands/
2. **Remove User-Level Conflicts** - Delete all files in ~/.claude/commands/bmad/
3. **Selective Sync** - Choose specific files to sync/remove
4. **View Detailed Diff** - See content differences for a specific file
5. **Generate Sync Script** - Create a bash script you can review and run
6. **Exit Without Changes** - Just view the report

Enter option number (1-6):
</ask>

<check>If option 1 (Sync All to Project-Level):</check>
<goto step="5a">Execute full sync</goto>

<check>If option 2 (Remove User-Level Conflicts):</check>
<goto step="5b">Execute user-level cleanup</goto>

<check>If option 3 (Selective Sync):</check>
<goto step="5c">Execute selective operations</goto>

<check>If option 4 (View Detailed Diff):</check>
<goto step="5d">Show file diff</goto>

<check>If option 5 (Generate Sync Script):</check>
<goto step="5e">Generate script</goto>

<check>If option 6 (Exit):</check>
<action>Thank {user_name} and exit workflow</action>

</step>

<step n="5a" goal="Execute Full Sync">
<action>Sync all out-of-sync and missing files from source to project runtime</action>

**Sync Process:**

<action>For each file with status OUT_OF_SYNC or MISSING:</action>

1. **Create directory structure:**

   ```bash
   mkdir -p .claude/commands/bmad/{module}/{type}
   ```

2. **Copy file:**

   ```bash
   cp bmad/{module}/{type}/{filename} \
      .claude/commands/bmad/{module}/{type}/{filename}
   ```

3. **Verify copy:**
   - Check file exists
   - Compare sizes
   - Confirm hash matches

<action>Track sync results:</action>

- Files synced: {{files_synced}}
- Bytes copied: {{bytes_copied}}
- Errors: {{error_count}}

<action>Display results:</action>

```markdown
✅ **Sync Complete**

**Summary:**

- {{files_synced}} files synced to .claude/commands/
- {{bytes_copied}} total data copied
- {{error_count}} errors encountered

⚠️ **User-Level Conflicts Still Exist:**

- {{conflict_count}} files in ~/.claude/commands/bmad/ will still override
- Run option 2 to remove these conflicts
- OR manually delete: `rm -rf ~/.claude/commands/bmad/`

🔄 **Next Step:**
Reload Claude Code window (Cmd/Ctrl+Shift+P → Developer: Reload Window)
```

<ask>Would you like to remove user-level conflicts now? (y/n)</ask>

<check>If yes:</check>
<goto step="5b">Execute user-level cleanup</goto>

<check>If no:</check>
<goto step="6">Wrap up</goto>

</step>

<step n="5b" goal="Execute User-Level Cleanup">
<action>Remove all BMAD files from ~/.claude/commands/bmad/</action>

⚠️ **WARNING:**

```markdown
This will delete ALL BMAD agents and workflows from your user-level .claude directory.

**Files to be deleted:**
{{list_all_user_level_files}}

**Impact:**

- These files will no longer be available globally across all projects
- Project-level files (.claude/commands/) will take effect
- You can always recreate user-level files if needed

This action cannot be undone.
```

<ask>Are you sure you want to proceed? Type 'DELETE' to confirm:</ask>

<check>If user types 'DELETE' (case-sensitive):</check>

<action>Delete user-level BMAD directory:</action>

```bash
rm -rf ~/.claude/commands/bmad/
```

<action>Verify deletion:</action>

```bash
[ ! -d ~/.claude/commands/bmad/ ] && echo "✅ Deleted successfully"
```

<action>Report results:</action>

```markdown
✅ **User-Level Cleanup Complete**

**Deleted:**

- {{files_deleted}} files removed from ~/.claude/commands/bmad/
- {{bytes_freed}} disk space freed

**Result:**

- No more user-level overrides
- Project-level files will now load
- Each project can have custom BMAD configurations

🔄 **Next Step:**
Reload Claude Code window to see changes take effect
```

<check>If user doesn't confirm:</check>
<action>Cancel operation and return to options menu</action>
<goto step="4">Return to sync options</goto>

</step>

<step n="5c" goal="Execute Selective Operations">
<action>Allow {user_name} to choose specific files to sync or remove</action>

<action>Display numbered list of all files with issues:</action>

```markdown
**Select Files to Sync/Remove:**

**Out of Sync (can sync):**

1. [ ] bmm/agents/architect.md - Source: 6.6k, Project: 5.7k
2. [ ] bmm/workflows/workflow-status.md - Source: 3.2k, Project: 2.8k

**User-Level Conflicts (can remove):** 3. [ ] bmm/agents/architect.md - User: 5.7k (STALE) 4. [ ] bmm/agents/analyst.md - User: 5.1k

**Missing Runtime (can sync):** 5. [ ] core/workflows/sync-runtime.md - No runtime file

Enter numbers separated by commas (e.g., 1,3,5) or 'all':
```

<ask>Which files? (numbers or 'all'):</ask>

<action>Parse selection and execute operations:</action>

For each selected file:

- If OUT_OF_SYNC or MISSING → sync to project runtime
- If user-level conflict → offer to remove user-level file

<action>Report selective sync results</action>

<ask>Would you like to:

- Select more files
- Return to main menu
- Exit

</ask>

</step>

<step n="5d" goal="Show File Diff">
<action>Display detailed content differences for a specific file</action>

<ask>Enter the filename to diff (e.g., architect.md):</ask>

<action>Locate the file in comparison results</action>

<action>Show detailed comparison:</action>

```markdown
## 📄 Detailed Comparison: {{filename}}

**File Locations:**

- Source: bmad/{module}/{type}/{filename}
- Project: .claude/commands/bmad/{module}/{type}/{filename}
- User: ~/.claude/commands/bmad/{module}/{type}/{filename}

**Metadata:**
| Location | Size | Modified | Hash | Status |
|----------|------|----------|------|--------|
| Source | {{source_size}} | {{source_date}} | {{source_hash}} | Current |
| Project | {{project_size}} | {{project_date}} | {{project_hash}} | {{project_status}} |
| User | {{user_size}} | {{user_date}} | {{user_hash}} | {{user_status}} |

**Content Differences:**
```

<action>Run diff between source and project:</action>

```bash
diff -u .claude/commands/bmad/{path} bmad/{path}
```

<action>Run diff between source and user (if exists):</action>

```bash
diff -u ~/.claude/commands/bmad/{path} bmad/{path}
```

<ask>Would you like to:

- Sync this file to project runtime
- Remove user-level version (if exists)
- View another file
- Return to main menu

</ask>

</step>

<step n="5e" goal="Generate Sync Script">
<action>Create a bash script that {user_name} can review and execute manually</action>

**Script Generation:**

<action>Create script file in {output_folder}:</action>

File: `{output_folder}/bmad-sync-script-{{date}}.sh`

```bash
#!/usr/bin/env bash
# BMAD Runtime Sync Script
# Generated: {{date}}
# User: {{user_name}}

set -e  # Exit on error

echo "🔄 BMAD Runtime Sync Script"
echo "Generated: {{date}}"
echo ""

# Create directory structure
echo "Creating .claude/commands/bmad/ structure..."
mkdir -p .claude/commands/bmad/core/{agents,workflows}
mkdir -p .claude/commands/bmad/bmm/{agents,workflows}
mkdir -p .claude/commands/bmad/bmb/{agents,workflows}
mkdir -p .claude/commands/bmad/cis/{agents,workflows}

# Sync out-of-sync files
echo ""
echo "Syncing {{out_of_sync_count}} out-of-sync files..."

{{for each out_of_sync file}}
echo "  - Syncing {{filename}}..."
cp bmad/{module}/{type}/{filename} \
   .claude/commands/bmad/{module}/{type}/{filename}
{{end for}}

# Report user-level conflicts
echo ""
echo "⚠️  WARNING: {{conflict_count}} user-level conflicts detected"
echo ""
echo "The following files in ~/.claude/commands/bmad/ will override project-level:"
{{for each conflict}}
echo "  - {{filename}}"
{{end for}}

echo ""
echo "To remove user-level conflicts, run:"
echo "  rm -rf ~/.claude/commands/bmad/"
echo ""

echo "✅ Sync complete!"
echo "🔄 Reload Claude Code window to see changes"
```

<action>Make script executable:</action>

```bash
chmod +x {output_folder}/bmad-sync-script-{{date}}.sh
```

<action>Display script location and usage:</action>

````markdown
✅ **Sync Script Generated**

**Location:** {output_folder}/bmad-sync-script-{{date}}.sh

**To review:**

```bash
cat {output_folder}/bmad-sync-script-{{date}}.sh
```
````

**To execute:**

```bash
bash {output_folder}/bmad-sync-script-{{date}}.sh
```

**What it does:**

- Creates .claude/commands/bmad/ directory structure
- Syncs {{out_of_sync_count}} out-of-sync files
- Reports {{conflict_count}} user-level conflicts
- Provides cleanup commands

⚠️ Review the script before running it!

````

<goto step="6">Wrap up</goto>

</step>

<step n="6" goal="Wrap Up and Next Steps">
<action>Provide final summary and recommendations to {user_name}</action>

**Final Summary:**

```markdown
## 🎯 Sync Session Complete

**Session Summary:**
- Files checked: {{total_files}}
- Files synced: {{files_synced}}
- User-level files removed: {{files_deleted}}
- Remaining conflicts: {{remaining_conflicts}}

**Current Status:**
- ✅ Synced: {{synced_count}}
- ⚠️ Out of Sync: {{remaining_out_of_sync}}
- 🔴 Conflicts: {{remaining_conflicts}}
- ⚠️ Missing: {{remaining_missing}}

---

### 📋 Recommended Next Steps

{{if remaining_conflicts > 0}}
**1. Resolve User-Level Conflicts**
- {{remaining_conflicts}} files in ~/.claude/commands/bmad/ still override project-level
- Recommendation: Run this workflow again and choose option 2 (Remove User-Level Conflicts)
- OR manually: `rm -rf ~/.claude/commands/bmad/`
{{endif}}

**2. Reload Claude Code**
- Press Cmd/Ctrl+Shift+P
- Type "Developer: Reload Window"
- This activates all synced files

**3. Verify Changes**
- Test agents/workflows to confirm they're using updated versions
- Run `/bmad:bmb:workflows:audit-workflow` to re-audit sync status

---

### 🛡️ Prevention Tips

Going forward, to avoid sync issues:

1. **Use BMad Builder workflows** - They auto-sync after edits (as of this update!)
2. **Avoid user-level BMAD files** - Keep BMAD in project-level only
3. **Run this sync utility** - Periodically check sync status
4. **Run audit-workflow** - It now detects 3-way conflicts automatically

---

Thank you for using BMAD Runtime Sync Utility!
````

<action>Log session results for audit trail</action>

<template-output>session_summary</template-output>

</step>

</workflow>
