# GSAP Workflow Status - Multi-Mode Service

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {module_root}/workflows/workflow-status/workflow.yaml</critical>
<critical>This workflow operates in multiple modes: interactive (default), validate, data, init-check, update</critical>
<critical>Other workflows can call this as a service to avoid duplicating status logic</critical>

<workflow>

<step n="0" goal="Determine execution mode">
  <action>Check for {{mode}} parameter passed by calling workflow</action>
  <action>Default mode = "interactive" if not specified</action>

  <check if="mode == interactive">
    <action>Continue to Step 1 for normal status check flow</action>
  </check>

  <check if="mode == validate">
    <action>Jump to Step 10 for workflow validation service</action>
  </check>

  <check if="mode == data">
    <action>Jump to Step 20 for data extraction service</action>
  </check>

  <check if="mode == init-check">
    <action>Jump to Step 30 for simple init check</action>
  </check>

  <check if="mode == update">
    <action>Jump to Step 40 for status update service</action>
  </check>
</step>

<step n="1" goal="Check for status file">
  <action>Search {output_folder}/ for file: gsap-workflow-status.md</action>

  <check if="no status file found">
    <output>
🎬 **No GSAP workflow status found.**

You're starting fresh! The GSAP Excellence module has 29 workflows across 5 specialist agents.

**Quick Start:**

1. **View the master plan:**
   - Read: {module_root}/WORKFLOW-REBUILD-MASTER-PLAN.md
   - Or Quick Ref: {module_root}/WORKFLOW-REBUILD-QUICK-REF.md

2. **Current Progress (from master plan):**
   - ✅ 21/29 Complete (72%)
   - 📋 Category A: 1 workflow (version bump only)
   - 🔨 Category B: 2 workflows (need enhancement)
   - 🔥 Category C: 5 workflows (need full rebuild)

3. **Next suggested:** analyze-animation (Category A - quick version bump)

Would you like me to create a status file to track your progress? (yes/no)
    </output>

    <ask>Create status file?</ask>

    <check if="user says yes">
      <action>Create gsap-workflow-status.md using template</action>
      <action>Initialize with current master plan state (21/29 complete)</action>
      <action>Set NEXT_SUGGESTED to analyze-animation</action>
      <action>Save status file</action>
      <output>✅ Status file created! Run `workflow-status` again to see your progress.</output>
    </check>

    <check if="user says no">
      <output>No problem! You can create it anytime by running this workflow.</output>
    </check>

    <action>Exit workflow</action>
  </check>

  <check if="status file found">
    <action>Continue to step 2</action>
  </check>
</step>

<step n="2" goal="Read and parse status">
  <action>Read gsap-workflow-status.md</action>
  <action>Extract key-value pairs from status file:</action>

  Parse these fields:
  - CURRENT_WORKFLOW
  - CURRENT_AGENT
  - LAST_COMPLETED
  - WORKFLOWS_COMPLETE (format: X/29)
  - COMPLETED_LIST (comma-separated)
  - CATEGORY_A_COMPLETE (format: X/1)
  - CATEGORY_B_COMPLETE (format: X/2)
  - CATEGORY_C_COMPLETE (format: X/5)
  - NEXT_SUGGESTED
  - NEXT_CATEGORY
  - NEXT_AGENT
  - NEXT_COMPLEXITY
</step>

<step n="3" goal="Display current status and options">
  <action>Calculate completion percentage from WORKFLOWS_COMPLETE</action>
  <action>Parse category progress</action>

  <output>
## 🎬 GSAP Excellence - Workflow Status

**Progress:** {{WORKFLOWS_COMPLETE}} ({{percentage}}%)
```
[{{progress_bar}}] {{percentage}}%
```

**Last Completed:** {{LAST_COMPLETED}} ({{CURRENT_AGENT}})

**Category Breakdown:**
- ✅ Complete: {{completed_count}}/29 workflows
- 📋 Category A (Version Bump): {{CATEGORY_A_COMPLETE}}
- 🔨 Category B (Enhancement): {{CATEGORY_B_COMPLETE}}
- 🔥 Category C (Full Rebuild): {{CATEGORY_C_COMPLETE}}

## 🎯 Your Options

{{#if CURRENT_WORKFLOW != "none"}}
**1. Continue in progress:**
   - {{CURRENT_WORKFLOW}} ({{CURRENT_AGENT}} agent)
{{/if}}

**2. Next recommended:**
   - **{{NEXT_SUGGESTED}}** ({{NEXT_CATEGORY}})
   - Agent: {{NEXT_AGENT}}
   - Complexity: {{NEXT_COMPLEXITY}}

**3. View by category:**
   - Category A: Quick version bump workflows
   - Category B: Workflows needing enhancement
   - Category C: Workflows needing full rebuild

**4. View by agent:**
   - See what each specialist agent needs to complete

**5. View completed workflows**

**6. Exit**
  </output>
</step>

<step n="4" goal="Offer actions and handle selection">
  <ask>What would you like to do? (1-6)</ask>

  <action>Handle user selection:</action>

  <check if="user selects 1 (continue current)">
    <output>Resuming: {{CURRENT_WORKFLOW}} ({{CURRENT_AGENT}} agent)</output>
    <output>Load the {{CURRENT_AGENT}} agent and run the workflow.</output>
  </check>

  <check if="user selects 2 (next recommended)">
    <output>
Starting: **{{NEXT_SUGGESTED}}**

**Category:** {{NEXT_CATEGORY}}
**Agent:** {{NEXT_AGENT}}
**Complexity:** {{NEXT_COMPLEXITY}}

**Quick Reference:**
See {module_root}/WORKFLOW-REBUILD-QUICK-REF.md for copy-paste prompt.

Ready to proceed?
    </output>
    <ask>Start this workflow? (yes/no)</ask>
    <check if="yes">
      <action>Provide instructions for loading agent and starting workflow</action>
    </check>
  </check>

  <check if="user selects 3 (view by category)">
    <action>Read {module_root}/WORKFLOW-REBUILD-QUICK-REF.md</action>
    <action>Parse Category A, B, C sections</action>
    <action>Display workflows by category with completion status</action>
  </check>

  <check if="user selects 4 (view by agent)">
    <action>Read {module_root}/WORKFLOW-REBUILD-MASTER-PLAN.md</action>
    <action>Parse "By Agent" progress tracking section</action>
    <action>Display completion status per agent</action>
  </check>

  <check if="user selects 5 (view completed)">
    <action>Display COMPLETED_LIST from status file</action>
    <action>Group by agent if possible</action>
  </check>

  <check if="user selects 6 (exit)">
    <output>Good luck building premium GSAP workflows! 🎬</output>
    <action>Exit workflow</action>
  </check>
</step>

<!-- ============================================= -->
<!-- SERVICE MODES - Called by other workflows -->
<!-- ============================================= -->

<step n="10" goal="Validate mode - Check if calling workflow should proceed">
  <action>Read {output_folder}/gsap-workflow-status.md if exists</action>

  <check if="status file not found">
    <template-output>status_exists = false</template-output>
    <template-output>should_proceed = true</template-output>
    <template-output>warning = "No status file found. Running without progress tracking."</template-output>
    <template-output>suggestion = "Consider creating status file for progress tracking (optional)"</template-output>
    <action>Return to calling workflow</action>
  </check>

  <check if="status file found">
    <action>Parse status file fields</action>
    <action>Check if {{calling_workflow}} is in COMPLETED_LIST</action>

    <template-output>status_exists = true</template-output>
    <template-output>current_workflow = {{CURRENT_WORKFLOW}}</template-output>
    <template-output>next_suggested = {{NEXT_SUGGESTED}}</template-output>
    <template-output>workflows_complete = {{WORKFLOWS_COMPLETE}}</template-output>

    <check if="calling_workflow in COMPLETED_LIST">
      <template-output>should_proceed = false</template-output>
      <template-output>warning = "⚠️ This workflow is already complete!"</template-output>
      <template-output>suggestion = "Check status file. If you want to rebuild, remove from COMPLETED_LIST first."</template-output>
    </check>

    <check if="calling_workflow == CURRENT_WORKFLOW">
      <template-output>should_proceed = true</template-output>
      <template-output>warning = ""</template-output>
      <template-output>suggestion = "Resuming {{CURRENT_WORKFLOW}}"</template-output>
    </check>

    <check if="calling_workflow == NEXT_SUGGESTED">
      <template-output>should_proceed = true</template-output>
      <template-output>warning = ""</template-output>
      <template-output>suggestion = "Proceeding with recommended next workflow"</template-output>
    </check>

    <check if="calling_workflow != CURRENT_WORKFLOW AND calling_workflow != NEXT_SUGGESTED AND calling_workflow not in COMPLETED_LIST">
      <template-output>should_proceed = true</template-output>
      <template-output>warning = "ℹ️ Out of sequence: Expected {{NEXT_SUGGESTED}}, running {{calling_workflow}}"</template-output>
      <template-output>suggestion = "This is fine - just noting you're not following recommended order"</template-output>
    </check>

    <template-output>status_file_path = {{path to gsap-workflow-status.md}}</template-output>
  </check>

  <action>Return control to calling workflow with all template outputs</action>
</step>

<step n="20" goal="Data mode - Extract specific information">
  <action>Read {output_folder}/gsap-workflow-status.md if exists</action>

  <check if="status file not found">
    <template-output>status_exists = false</template-output>
    <template-output>error = "No status file to extract data from"</template-output>
    <action>Return to calling workflow</action>
  </check>

  <check if="status file found">
    <action>Parse status file completely</action>
    <template-output>status_exists = true</template-output>

    <check if="data_request == progress">
      <template-output>workflows_complete = {{WORKFLOWS_COMPLETE}}</template-output>
      <template-output>category_a_complete = {{CATEGORY_A_COMPLETE}}</template-output>
      <template-output>category_b_complete = {{CATEGORY_B_COMPLETE}}</template-output>
      <template-output>category_c_complete = {{CATEGORY_C_COMPLETE}}</template-output>
      <template-output>completed_list = {{COMPLETED_LIST}}</template-output>
    </check>

    <check if="data_request == next">
      <template-output>next_suggested = {{NEXT_SUGGESTED}}</template-output>
      <template-output>next_category = {{NEXT_CATEGORY}}</template-output>
      <template-output>next_agent = {{NEXT_AGENT}}</template-output>
      <template-output>next_complexity = {{NEXT_COMPLEXITY}}</template-output>
    </check>

    <check if="data_request == current">
      <template-output>current_workflow = {{CURRENT_WORKFLOW}}</template-output>
      <template-output>current_agent = {{CURRENT_AGENT}}</template-output>
      <template-output>last_completed = {{LAST_COMPLETED}}</template-output>
    </check>

    <check if="data_request == all">
      <action>Return all parsed fields as template outputs</action>
    </check>

    <template-output>status_file_path = {{path to gsap-workflow-status.md}}</template-output>
  </check>

  <action>Return control to calling workflow with requested data</action>
</step>

<step n="30" goal="Init-check mode - Simple existence check">
  <action>Check if {output_folder}/gsap-workflow-status.md exists</action>

  <check if="exists">
    <template-output>status_exists = true</template-output>
    <template-output>suggestion = "Status file found. Ready to proceed."</template-output>
  </check>

  <check if="not exists">
    <template-output>status_exists = false</template-output>
    <template-output>suggestion = "No status file. Run workflow-status to create one (optional for progress tracking)"</template-output>
  </check>

  <action>Return immediately to calling workflow</action>
</step>

<step n="40" goal="Update mode - Centralized status file updates">
  <action>Read {output_folder}/gsap-workflow-status.md</action>

  <check if="status file not found">
    <template-output>success = false</template-output>
    <template-output>error = "No status file found. Cannot update."</template-output>
    <action>Return to calling workflow</action>
  </check>

  <check if="status file found">
    <action>Parse all current values from status file</action>
    <action>Check {{action}} parameter to determine update type</action>

    <!-- ============================================= -->
    <!-- ACTION: complete_workflow -->
    <!-- ============================================= -->
    <check if="action == complete_workflow">
      <action>Get {{workflow_name}} parameter (required)</action>
      <action>Get {{agent_name}} parameter (optional - can infer)</action>

      <action>Mark workflow complete:</action>
      - Add {{workflow_name}} to COMPLETED_LIST (if not already there)
      - Increment WORKFLOWS_COMPLETE count (X/29 → X+1/29)
      - Update LAST_COMPLETED to {{workflow_name}}
      - Set CURRENT_WORKFLOW to "none" (unless user specifies next)

      <action>Update category counts:</action>
      - Check which category {{workflow_name}} belongs to (from quick-ref.md or master plan)
      - Increment appropriate category count (CATEGORY_A_COMPLETE, B, or C)

      <action>Determine next suggested workflow:</action>
      - Priority: Category A → Category B → Category C
      - Find first incomplete workflow in highest priority category
      - Update NEXT_SUGGESTED, NEXT_CATEGORY, NEXT_AGENT, NEXT_COMPLEXITY

      <action>Update LAST_UPDATED to {{date}}</action>
      <action>Save status file</action>

      <template-output>success = true</template-output>
      <template-output>next_suggested = {{determined next workflow}}</template-output>
      <template-output>next_agent = {{determined next agent}}</template-output>
      <template-output>workflows_complete = {{new count}}</template-output>
    </check>

    <!-- ============================================= -->
    <!-- ACTION: set_current_workflow (manual override) -->
    <!-- ============================================= -->
    <check if="action == set_current_workflow">
      <action>Get {{workflow_name}} parameter (required)</action>
      <action>Get {{agent_name}} parameter (optional)</action>

      <action>Update current workflow:</action>
      - CURRENT_WORKFLOW: {{workflow_name}}
      - CURRENT_AGENT: {{agent_name or infer from workflow}}

      <action>Update LAST_UPDATED to {{date}}</action>
      <action>Save status file</action>

      <template-output>success = true</template-output>
    </check>

    <!-- ============================================= -->
    <!-- Unknown action -->
    <!-- ============================================= -->
    <check if="action not recognized">
      <template-output>success = false</template-output>
      <template-output>error = "Unknown action: {{action}}. Valid actions: complete_workflow, set_current_workflow"</template-output>
    </check>

  </check>

  <action>Return control to calling workflow with template outputs</action>
</step>

</workflow>
