<!-- Powered by BMAD-CORE™ -->

# Comprehensive Brownfield Reconnaissance

Execute the comprehensive brownfield reconnaissance workflow using the workflow XML execution engine.

## Workflow Invocation

This slash command directly invokes the workflow execution engine to run the comprehensive brownfield reconnaissance analysis.

**Workflow Path**: `{project-root}/bmad/bmp/workflows/comprehensive-brownfield-reconnaissance/workflow.yaml`

**Duration**: 15-35 minutes (11 agents in parallel)

**Output**: Complete analysis with 16+ documents in `docs/brownfield-analysis-{date}/`

---

```xml
<workflow-invocation>
  <step n="1">Load {project-root}/bmad/core/tasks/workflow.xml</step>
  <step n="2">Execute workflow.xml with config: {project-root}/bmad/bmp/workflows/comprehensive-brownfield-reconnaissance/workflow.yaml</step>
  <step n="3">Follow all workflow.xml instructions precisely</step>
  <step n="4">Generate complete analysis output as specified in workflow</step>
</workflow-invocation>
```

**Usage**: `/bmad:bmp:workflows:comprehensive-brownfield-reconnaissance`

**Recommended**: Use Atlas agent instead for menu-driven experience with 20+ specialized prompts.
