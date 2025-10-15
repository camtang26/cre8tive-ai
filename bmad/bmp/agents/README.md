# Atlas - Platform Reconnaissance Specialist 🗺️

**Version**: 1.0.0
**Module**: BMP (BMad Platform)
**Type**: Module Agent
**Status**: Production Ready

---

## Overview

Atlas is your intelligent guide to brownfield codebase reconnaissance. A veteran platform architect who's analyzed hundreds of projects, Atlas orchestrates 11 specialized AI agents to map every aspect of your codebase - from architecture patterns to technical debt, from test coverage to documentation quality.

**Key Capabilities:**
- 🔍 **Comprehensive Analysis**: Full brownfield reconnaissance (15-35 min)
- ⚡ **Focused Reconnaissance**: Targeted analysis (patterns, debt, security, testing)
- 📊 **Trend Tracking**: Compare analyses over time, track improvements
- 📋 **Action Planning**: Generate detailed remediation plans with ROI
- 🚀 **Modernization**: Multi-quarter roadmaps and migration feasibility
- 👥 **Team Intelligence**: Onboarding guides, knowledge gap analysis
- 💼 **Executive Communication**: Business-focused briefings and ROI calculations

---

## Quick Start

### Prerequisites

1. **BMAD Platform Module** installed
2. **11 Reconnaissance Agents** available in `.claude/agents/bmad-*/`:
   - codebase-analyzer
   - pattern-detector
   - api-documenter
   - dependency-mapper
   - requirements-analyst
   - technical-decisions-curator
   - user-journey-mapper
   - tech-debt-auditor
   - document-reviewer
   - technical-evaluator
   - test-coverage-analyzer

3. **MCP Servers** (recommended):
   - Archon MCP (for official documentation validation)
   - Context7 MCP (optional fallback)

### Installation

1. **Ensure agent file exists**:
   ```bash
   ls bmad/bmp/agents/atlas.agent.yaml
   ```

2. **Run BMAD installer** (if using BMAD Method project):
   - This compiles `atlas.agent.yaml` → `atlas.md`
   - Registers agent with system
   - Makes it available via slash commands

3. **Invoke Atlas**:
   ```
   /bmad:bmp:agents:atlas
   ```

---

## Usage Guide

### First Run: Comprehensive Analysis

When you first invoke Atlas, start with a comprehensive reconnaissance:

```
You: /bmad:bmp:agents:atlas
Atlas: [Shows menu with all commands]
You: *analyze
Atlas: [Runs comprehensive-brownfield-reconnaissance workflow]
        [15-35 minutes later...]
        [Generates 16+ documents with complete codebase analysis]
```

**Output Location**: `docs/brownfield-analysis-{date}/`

**What You Get:**
- Executive summary with health score
- Architecture documentation (6 files)
- Pattern analysis with MCP validation
- Technical debt audit with quick wins
- Testing strategy recommendations
- Documentation quality assessment
- User journey mapping
- And more...

### Exploring Findings

After analysis, explore findings interactively:

```
*status          # Quick overview of latest analysis
*health          # Health score and key metrics
*findings        # Navigate by category
*quick-wins      # High-value, low-effort improvements
```

### Focused Analysis

Don't need full reconnaissance? Run focused analyses:

```
*patterns-only    # Just pattern analysis (3-5 min)
*debt-only        # Just technical debt (5-8 min)
*security-audit   # Security & integrations (8-12 min)
*testing-audit    # Test strategy (5-8 min)
```

### Tracking Progress

Compare analyses over time:

```
*compare         # Compare current vs previous
*trends          # Analyze trends across multiple runs
                 # Predict when you'll reach health score targets
```

### Taking Action

Turn findings into action:

```
*plan            # Generate detailed action plan with sprints
*implement       # Interactive guide for specific quick win
*roi             # Calculate ROI of improvements
```

### Planning Modernization

Long-term strategy:

```
*modernize       # Multi-quarter modernization roadmap
*migrate         # Assess feasibility of tech migration
                 # (e.g., Express → Fastify)
```

### Team & Knowledge

Support team growth:

```
*onboard         # Generate role-specific onboarding guide
*knowledge-risk  # Identify bus factor risks
```

### Stakeholder Communication

Business-focused outputs:

```
*brief           # Executive briefing for leadership
*roi             # ROI calculations for budget requests
```

### Smart Recommendations

Let Atlas recommend what to run next:

```
*recommend       # Intelligent suggestions based on your context
                 # "Your health score is 58 - I recommend..."
```

---

## Advanced Features

### 20+ Specialized Prompts

Atlas includes sophisticated prompts for every use case:

**Analysis**: comprehensive, focused (patterns/debt/security/testing)
**Tracking**: compare, trends, velocity
**Planning**: action plans, quick win implementation
**Strategy**: modernization roadmaps, migration feasibility
**Team**: onboarding, knowledge gaps
**Business**: executive briefings, ROI calculations
**Meta**: intelligent recommendations

See `atlas.agent.yaml` for complete prompt catalog.

### MCP-Powered Validation

Atlas validates patterns against official documentation:
- Uses Archon RAG for authoritative sources (Twilio, ElevenLabs, Fastify, Next.js, etc.)
- Cites specific documentation references
- Identifies deprecated patterns
- Discovers latest features (2025 updates)

**Coverage**: Typically 60-100% of detected technologies validated

### Dynamic Tech Stack Adaptation

Works with ANY tech stack:
- Detects technologies automatically
- Generates tech-specific prompts
- Adapts MCP queries to your stack
- No hardcoded assumptions

**Supported**: Node.js, Python, Go, Ruby, Java, PHP, and more

### Evidence-Based Insights

Every finding backed by evidence:
- Specific file paths and line numbers
- Code examples
- MCP validation results
- Official documentation citations
- Business impact quantification

---

## Personality & Communication

**Role**: Platform Reconnaissance Specialist
**Communication Style**: Analytical Explorer

Atlas is systematic, thorough, and objective. Presents findings with:
- Clear hierarchies (summaries → details)
- Evidence citations (agent → MCP → official docs)
- Actionable recommendations
- Business impact statements

**Philosophy**:
- Assessment, not judgment
- Evidence, not assumptions
- Action, not abstraction
- Progress, not perfection

---

## Output Structure

All analyses save to: `docs/brownfield-analysis-{date}/`

```
brownfield-analysis-2025-10-10/
├── EXECUTIVE_SUMMARY.md      # Start here
├── INDEX.md                   # Navigate from here
├── architecture/              # 6 architecture docs
├── patterns/                  # Pattern analysis
├── quality/                   # Debt, testing, docs
├── user-experience/           # User journeys
└── requirements/              # Requirements & API
```

**Total Output**: 16+ comprehensive markdown documents

---

## 🏗️ Dual-File Architecture (BMAD v6-alpha Innovation)

**Innovation Status**: Experimental - May influence BMAD v6 standards

Atlas introduces a **dual-file agent pattern** that enhances BMAD agents with machine-readable specifications:

### File Structure

```
bmad/bmp/agents/
├── atlas.md (XML)              ← Agent runtime logic
│   ├── Activation protocol
│   ├── Menu handlers (workflow + prompt)
│   └── References atlas.agent.yaml
│
└── atlas.agent.yaml (YAML)     ← Machine-readable specification
    ├── Metadata (id, version, icon)
    ├── Persona (structured)
    ├── 15 prompt specifications
    └── Menu configuration
```

### How It Works

1. **atlas.md** loads when you invoke Atlas (BMAD-CORE™ standard)
2. When you select a **workflow-based** command → Executes workflow directly
3. When you select a **prompt-based** command → atlas.md loads atlas.agent.yaml and executes the prompt spec

### Menu Item Types

**Workflow-based** (traditional):
```xml
<item cmd="*analyze" workflow="{path}/workflow.yaml">
```
→ Executes workflow directly

**Prompt-based** (NEW):
```xml
<item cmd="*patterns-only" prompt="focused_patterns">
```
→ Loads `focused_patterns` from atlas.agent.yaml and executes based on spec

### Prompt Specification Example

```yaml
prompts:
  focused_patterns:
    name: "Pattern Analysis Only"
    agents: ["pattern-detector"]    # Launch this agent
    duration: "3-5 minutes"
    outputs:
      - "{output_folder}/focused-analysis-patterns-{date}/CODING_PATTERNS.md"
```

### Benefits

- **Machine Parsability**: YAML easily parsed by tools, IDEs, CI/CD
- **Separation**: Logic (XML) vs. Specification (YAML)
- **Reusability**: Prompts can be shared across agents
- **Tooling**: Enables IDE plugins, validators, documentation generators
- **Versioning**: Prompts versioned independently from logic

### Documentation

For complete dual-file architecture documentation, including:
- All 4 prompt types (agent-based, process-based, analysis-based, interactive)
- Creating new prompts
- Best practices
- Comparison with single-file pattern

**See**: Dual-File Architecture section at end of this README

---

## Configuration

Atlas reads configuration from: `bmad/bmp/config.yaml`

```yaml
user_name: Cameron
communication_language: English
output_folder: '{project-root}/docs'
```

Automatically adapts to your preferences.

---

## Performance

**Comprehensive Analysis**: 15-35 minutes (11 agents in parallel)
**Focused Analysis**: 3-12 minutes (1-3 agents)
**Comparison**: 1-2 minutes
**Action Planning**: 2-5 minutes

**Tip**: Run comprehensive analysis overnight or during lunch. Run focused analyses for quick insights.

---

## Future Features

Atlas has an ambitious roadmap! See `FUTURE_FEATURES.md` for details:

**Version 2.0** (2026):
- Automated reconnaissance scheduling
- CI/CD integration
- Multi-project portfolio analysis
- AI-powered remediation assistance

**Version 3.0** (2026):
- Live health monitoring dashboard
- Real-time IDE integration
- Predictive analytics
- Team productivity metrics

**Version 4.0** (2027+):
- Integration marketplace (Jira, Slack, GitHub, etc.)
- Custom analysis plugins
- Compliance & regulatory support

**Version 5.0+** (Future):
- Natural language queries
- Codebase chatbot
- Cross-language expansion
- Architecture evolution tracking

---

## Troubleshooting

### "Agent not found"

Ensure `atlas.agent.yaml` is compiled to `atlas.md`:
- Run BMAD installer
- Select "Compile Agents"
- Or manually compile if you have build tools

### "MCP server not available"

Atlas gracefully degrades without MCP:
- Analysis still runs
- Validation sections marked "N/A"
- Patterns identified but not validated against official docs

### "Analysis taking too long"

Normal for large codebases (100k+ LOC):
- Comprehensive: Up to 35 minutes
- Use focused analysis for faster results
- Run during low-activity periods

### "Missing analysis agents"

Verify all 11 agents are in `.claude/agents/bmad-*/`:
```bash
ls .claude/agents/bmad-*/
```

Should see all 11 required agents.

---

## Contributing

Ideas for Atlas? See `FUTURE_FEATURES.md` for roadmap and contribution guidelines.

- Feature requests: GitHub issues
- Discussions: Community forum
- Documentation: PRs welcome

---

## Support

**Documentation**: This README + `FUTURE_FEATURES.md`
**Workflow Docs**: `bmad/bmp/workflows/comprehensive-brownfield-reconnaissance/README.md`
**Module Docs**: `bmad/bmp/README.md`

**Community**:
- BMAD Discord
- GitHub Discussions
- Monthly office hours

---

## Credits

**Created**: 2025-10-10
**Module**: BMP (BMad Platform)
**Version**: 1.0.0
**Author**: BMad Platform Team
**License**: Same as BMAD project

Atlas stands on the shoulders of giants:
- 11 specialized reconnaissance agents
- BMAD workflow engine
- MCP ecosystem (Archon, Context7)
- Claude Code platform

---

**Atlas**: _Mapping the brownfield, charting the path forward._ 🗺️
