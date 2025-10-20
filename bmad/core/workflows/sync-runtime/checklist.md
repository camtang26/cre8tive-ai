# Sync Runtime - Validation Checklist

## Workflow Execution Validation

### Pre-Execution Checks

- [ ] workflow.yaml loaded and processed
- [ ] User confirmed they want to run sync utility
- [ ] Current working directory is a BMAD-enabled project
- [ ] bmad/ directory exists in project root

### Step 1: Scan Source Files

- [ ] Successfully scanned bmad/ directory for agents
- [ ] Successfully scanned bmad/ directory for workflows
- [ ] File inventory built with source paths
- [ ] Total file count reported to user
- [ ] No scan errors encountered

### Step 2: 3-Way Comparison

- [ ] All 3 locations checked for each file (source, project, user)
- [ ] File metadata collected (size, timestamp, hash)
- [ ] Sync status determined for each file
- [ ] Comparison table built successfully
- [ ] Hash calculations completed without errors

### Step 3: Present Findings

- [ ] Comprehensive comparison table displayed
- [ ] Summary statistics shown (synced, out-of-sync, conflicts, missing)
- [ ] Priority issues highlighted
- [ ] User-level conflicts clearly identified
- [ ] Load priority explanation provided

### Step 4: Sync Options

- [ ] All 6 options presented to user
- [ ] User selection captured correctly
- [ ] Invalid selections handled gracefully
- [ ] Appropriate step executed based on selection

### Step 5a: Execute Full Sync (if selected)

- [ ] Directory structure created for all modules
- [ ] Files copied from source to project runtime
- [ ] Copy operations verified (size, hash)
- [ ] Sync results reported with counts
- [ ] User-level conflicts still reported
- [ ] User prompted about conflict cleanup

### Step 5b: Execute User-Level Cleanup (if selected)

- [ ] Warning message displayed with file list
- [ ] User confirmation required ('DELETE')
- [ ] Deletion only executes with exact confirmation
- [ ] User-level directory removed successfully
- [ ] Deletion verified
- [ ] Results reported with freed space

### Step 5c: Execute Selective Operations (if selected)

- [ ] Numbered list of files presented
- [ ] User selection parsed correctly
- [ ] Selected files processed appropriately
- [ ] Sync/remove operations executed
- [ ] Results reported for each file
- [ ] User offered additional actions

### Step 5d: Show File Diff (if selected)

- [ ] Filename captured from user
- [ ] File located in comparison results
- [ ] Metadata table displayed
- [ ] diff command executed successfully
- [ ] Content differences shown clearly
- [ ] User offered action options

### Step 5e: Generate Sync Script (if selected)

- [ ] Script file created in output folder
- [ ] Script contains all necessary commands
- [ ] Script made executable (chmod +x)
- [ ] Script path provided to user
- [ ] Usage instructions displayed
- [ ] Script includes conflict warnings

### Step 6: Wrap Up

- [ ] Final summary displayed
- [ ] Session statistics reported
- [ ] Remaining issues highlighted
- [ ] Next steps recommended
- [ ] Prevention tips provided
- [ ] Session results logged

## Post-Execution Validation

### File System State

- [ ] No orphaned files created
- [ ] Directory permissions preserved
- [ ] No corrupted files (hash mismatches)
- [ ] Backup files cleaned up (if created)

### User Communication

- [ ] All output in correct {communication_language}
- [ ] {user_name} addressed appropriately
- [ ] Clear success/error messages
- [ ] Actionable recommendations provided

### Error Handling

- [ ] File permission errors caught and reported
- [ ] Missing directory errors handled
- [ ] Hash calculation errors managed
- [ ] User cancellations handled gracefully
- [ ] No uncaught exceptions

## Success Criteria

**Minimum Requirements:**

- ✅ Scan completed successfully
- ✅ 3-way comparison accurate
- ✅ Findings presented clearly
- ✅ At least one sync option executed OR user chose to exit
- ✅ Results reported to user

**Excellent Execution:**

- ✅ All minimum requirements met
- ✅ Zero errors during execution
- ✅ User-level conflicts resolved (if option 2 selected)
- ✅ All out-of-sync files synced (if option 1 selected)
- ✅ User received clear next steps

**Outstanding Execution:**

- ✅ All excellent execution criteria met
- ✅ User performed full sync AND conflict cleanup
- ✅ Verification command provided
- ✅ Prevention tips acknowledged by user
- ✅ Project ready for immediate use

---

## Notes

- This workflow is READ-HEAVY and WRITE-CONDITIONAL
- Always verify before destructive operations (user-level delete)
- Hash calculations may take time for large files
- User confirmation required for any file deletion
- Script generation is non-destructive alternative to direct execution
