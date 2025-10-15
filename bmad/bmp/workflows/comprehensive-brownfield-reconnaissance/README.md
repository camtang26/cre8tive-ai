# Comprehensive Brownfield Reconnaissance Workflow

**Version**: 1.0.0
**Module**: BMP (BMad Platform)
**Type**: Action Workflow (Multi-Agent)
**MCP-Powered**: ✅ Validated against official documentation

---

## Purpose

This workflow performs comprehensive analysis of ANY brownfield codebase using 11 specialized AI agents with MCP-powered validation against official documentation. It discovers the tech stack, analyzes patterns, identifies technical debt, audits documentation, and provides actionable recommendations.

---

## What It Does

### Phase 1: Discovery (Sequential)
1. **Tech Stack Detection**: Identifies all technologies, frameworks, databases, and external APIs
2. **MCP Source Mapping**: Maps detected technologies to official documentation sources in Archon RAG

### Phase 2: Parallel Analysis (10 Agents Simultaneously)
3. **Pattern Analysis**: Validates coding patterns against official best practices
4. **API Documentation**: Documents all endpoints and integration points
5. **Dependency Mapping**: Maps external service integrations
6. **Requirements Extraction**: Identifies implicit requirements and constraints
7. **Decision Documentation**: Captures architectural decisions and trade-offs
8. **User Journey Mapping**: Maps user flows and state transitions
9. **Tech Debt Audit**: Identifies technical debt with severity levels and quick wins
10. **Documentation Review**: Audits existing docs for accuracy and completeness
11. **Tech Stack Evaluation**: Assesses current stack and recommends upgrades
12. **Test Coverage Analysis**: Analyzes testing strategy and coverage gaps

### Phase 3: Aggregation
13. **Master Index**: Creates comprehensive navigation of all findings
14. **Executive Summary**: Aggregates insights with health score and priorities

---

## Output

Generates **14+ comprehensive markdown documents** organized in:

```
docs/brownfield-analysis-{date}/
├── architecture/          (6 documents)
├── patterns/             (2 documents)
├── quality/              (3 documents)
├── user-experience/      (1 document)
├── requirements/         (2 documents)
├── INDEX.md             (master navigation)
└── EXECUTIVE_SUMMARY.md (high-level findings)
```

---

## Key Features

### 🎯 Generic & Adaptable
- Works with ANY tech stack (Node.js, Python, Go, Ruby, etc.)
- Dynamically generates tech-specific prompts
- No hardcoded assumptions about technologies

### ✅ MCP-Powered Validation
- Validates patterns against official documentation (Twilio, ElevenLabs, Fastify, etc.)
- Uses Archon RAG for authoritative sources
- Cites documentation sources in findings
- Identifies deprecated patterns and latest features

### ⚡ Parallel Execution
- Runs 10 agents simultaneously for speed
- Typical execution: 15-25 minutes for large codebases
- Scalable analysis without sequential bottlenecks

### 📊 Actionable Insights
- Health score (0-100) with classification
- Quick wins (high-value, low-effort improvements)
- Prioritized recommendations (Critical/High/Medium)
- Evidence-based findings with file paths and line numbers

---

## Prerequisites

### Required MCP Servers
- **Archon MCP**: For official documentation validation
  - Functions: `rag_get_available_sources`, `rag_search_knowledge_base`, `rag_search_code_examples`
- **Task Tool**: For parallel agent execution

### Required Agents
All 11 specialized agents must be available:
- `codebase-analyzer`
- `pattern-detector`
- `api-documenter`
- `dependency-mapper`
- `requirements-analyst`
- `technical-decisions-curator`
- `user-journey-mapper`
- `tech-debt-auditor`
- `document-reviewer`
- `technical-evaluator`
- `test-coverage-analyzer`

These agents should be in `.claude/agents/bmad-*/` directories.

---

## How to Invoke

### Option 1: Via BMAD Agent

If you have a BMAD module agent set up:

```
/bmad:bmp:agents:reconnaissance
```

Then select the workflow from the agent menu.

### Option 2: Direct Workflow Execution

```
workflow comprehensive-brownfield-reconnaissance
```

### Option 3: Via Workflow Command

```
execute-workflow path=/bmad/bmp/workflows/comprehensive-brownfield-reconnaissance/workflow.yaml
```

---

## User Inputs

When the workflow starts, you'll be prompted for:

1. **Project Path** (optional)
   - Default: Current directory
   - Can specify any brownfield project path

2. **Output Preference** (optional)
   - `comprehensive` (default): All 11 agents
   - `focused`: Core 7 agents only (faster, less comprehensive)

3. **Include Data Analyst** (optional)
   - Default: `true` (includes if databases detected)
   - Set to `false` to skip even if databases found

---

## Execution Flow

### Step 0: Pre-flight Checks (1-2 min)
- Validates project structure
- Checks MCP availability
- Creates output directories

### Step 1: Tech Stack Discovery (3-5 min)
- Runs codebase-analyzer sequentially
- Identifies all technologies
- Extracts stack variables

### Step 2: MCP Source Mapping (1-2 min)
- Gets available Archon RAG sources
- Maps technologies to documentation sources
- Calculates validation coverage

### Step 3: Generate Agent Prompts (1 min)
- Creates custom prompts for each agent
- Includes tech-specific MCP queries
- Embeds discovered stack context

### Step 4: Parallel Reconnaissance (10-20 min)
- Launches 10 agents simultaneously
- Each agent analyzes and validates
- Produces markdown documentation

### Step 5: Calculate Metrics (2-3 min)
- Extracts metrics from all outputs
- Calculates health score
- Aggregates findings

### Step 6: Generate Master Index (1 min)
- Creates comprehensive INDEX.md
- Links all outputs
- Provides navigation

### Step 7: Generate Executive Summary (2-3 min)
- Aggregates all insights
- Ranks priorities
- Identifies quick wins

### Step 8: Final Delivery (1 min)
- Validates outputs
- Displays final report
- Logs completion

**Total Duration**: ~15-35 minutes (depends on codebase size)

---

## Output Interpretation

### Start Here
1. **Read `EXECUTIVE_SUMMARY.md` first** - High-level overview, health score, top priorities
2. **Use `INDEX.md` for navigation** - Complete table of contents with links
3. **Dive into specifics** - Explore detailed analysis documents

### Health Score Guide
- **90-100 (Excellent)**: Great shape, minor improvements only
- **75-89 (Good)**: Solid foundation, some improvements needed
- **60-74 (Fair)**: Notable issues but manageable
- **40-59 (Poor)**: Significant technical debt
- **0-39 (Critical)**: Major quality issues requiring immediate action

### Finding Markers
- ✅ **OPTIMAL**: Matches official best practices perfectly
- ⚠️ **ACCEPTABLE**: Works but could be improved
- ❌ **DEPRECATED**: Better approach exists per official docs
- 🔍 **UNDOCUMENTED**: No official guidance found

---

## Use Cases

### 1. Brownfield Project Onboarding
Run this when joining a new project to:
- Understand tech stack and architecture
- Identify patterns and conventions
- Discover technical debt hotspots
- Learn codebase structure quickly

### 2. Technical Audit
Use before major refactoring or upgrades:
- Baseline current state
- Identify refactoring priorities
- Validate migration decisions
- Plan modernization roadmap

### 3. Quality Assessment
Regular health checks:
- Track quality metrics over time
- Measure improvement initiatives
- Identify regression areas
- Maintain documentation

### 4. Pre-Acquisition Due Diligence
Evaluate codebases for acquisition:
- Assess technical health objectively
- Quantify technical debt
- Identify hidden risks
- Estimate modernization costs

### 5. Knowledge Transfer
Document existing codebases:
- Create comprehensive documentation
- Capture architectural decisions
- Preserve institutional knowledge
- Onboard new developers faster

---

## Customization

### Modify Agent Selection
Edit `workflow.yaml` to add/remove agents:

```yaml
agents:
  analysis:
    - name: "your-custom-agent"
      description: "Custom analysis"
      outputs: ["custom_output"]
      required: false
```

### Adjust MCP Queries
Edit `instructions.md` Step 3 to customize MCP search queries for specific technologies or patterns.

### Change Output Format
Edit agent prompts in `instructions.md` to modify output structure, add new sections, or change formatting.

### Add New Metrics
Edit Step 5 in `instructions.md` to extract additional metrics from agent outputs.

---

## Troubleshooting

### "MCP server not available"
- Verify Archon MCP is installed and running
- Check MCP server configuration
- Workflow will continue with limited validation if MCP unavailable

### "Agent not found: X"
- Ensure all 11 agents are in `.claude/agents/bmad-*/` directories
- Run BMAD installer to compile agents
- Check agent file names match exactly

### "No tech stack detected"
- Verify project path is correct
- Check if project has standard markers (package.json, etc.)
- Review codebase-analyzer output for detection issues

### "Health score seems inaccurate"
- Review metric calculations in Step 5
- Check if agents returned complete data
- Verify pattern assessment markers (✅/⚠️/❌) in outputs

### "Analysis taking too long"
- Normal for large codebases (20-30 min)
- Check if agents are stuck (review logs)
- Consider using "focused" mode for faster results

---

## Advanced Usage

### Running on Multiple Projects
Create a batch script:

```bash
for project in /path/to/projects/*; do
  cd "$project"
  workflow comprehensive-brownfield-reconnaissance
done
```

### Comparing Project Health
Run on multiple versions to track improvement:

```bash
# Before refactoring
workflow comprehensive-brownfield-reconnaissance

# After refactoring
workflow comprehensive-brownfield-reconnaissance

# Compare health scores in EXECUTIVE_SUMMARY.md files
```

### Integration with CI/CD
Add to pipeline for continuous quality monitoring:

```yaml
# .github/workflows/quality-audit.yml
- name: Run Brownfield Analysis
  run: workflow comprehensive-brownfield-reconnaissance
- name: Check Health Score
  run: |
    score=$(grep "Health Score:" docs/brownfield-analysis-*/EXECUTIVE_SUMMARY.md)
    # Fail if score < 60
```

---

## Maintenance

### Updating Agent Prompts
When technologies update their best practices:

1. Edit `instructions.md` Step 3
2. Update MCP query strings for new features
3. Add new pattern searches if needed
4. Test on sample project

### Adding New Technologies
To support new frameworks:

1. Ensure Archon RAG has documentation sources
2. Add tech-specific queries to agent prompts
3. Update pattern categories if needed
4. Test tech stack detection accuracy

### Improving Health Score Calculation
Adjust weights in Step 5 of `instructions.md`:

```javascript
const healthScore = (
  (pattern_quality * 0.25) +        // Adjust these weights
  (test_coverage * 0.20) +
  ((100 - tech_debt) * 0.25) +
  (doc_quality * 0.15) +
  (stack_modernity * 0.15)
);
```

---

## FAQ

**Q: How long does it take?**
A: 15-35 minutes depending on codebase size. Parallel execution makes it much faster than sequential analysis.

**Q: Does it modify my code?**
A: No. This is read-only analysis. No files are modified.

**Q: What if my tech stack isn't in Archon RAG?**
A: Workflow continues with generic best practices searches. MCP validation coverage will be lower but analysis still runs.

**Q: Can I run this on non-JavaScript projects?**
A: Yes! Works with Python, Go, Ruby, Java, PHP, etc. Dynamically adapts to detected stack.

**Q: How accurate is the health score?**
A: Based on objective metrics from code analysis + MCP validation. Best used for relative comparisons (before/after) rather than absolute judgment.

**Q: Can I skip certain agents?**
A: Yes, edit `workflow.yaml` agents section and set `required: false` for any agent.

**Q: How do I re-run just one agent?**
A: Use Task tool directly: `Task(agent="pattern-detector", prompt="...")`

---

## Version History

### 1.0.0 (2025-10-10)
- Initial release
- 11-agent comprehensive analysis
- MCP-powered validation
- Dynamic tech stack adaptation
- Parallel execution support
- Generic brownfield project support

---

## Contributing

To improve this workflow:

1. Test on diverse codebases (different languages, frameworks)
2. Suggest new agents or analysis categories
3. Improve MCP query accuracy
4. Add support for new technologies
5. Refine health score calculation

Submit improvements via pull request or issue.

---

## Support

**Issues**: Report at project repository
**Questions**: Consult BMAD documentation
**Customization**: Edit workflow files directly (workflow.yaml, instructions.md)

---

**Built with**: BMAD v6.0.0-alpha.0
**License**: Same as BMAD project
**Maintainer**: BMad Platform Team
