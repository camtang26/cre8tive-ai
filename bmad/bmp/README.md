# BMP - BMad Platform Module

The BMP (BMad Platform Module) provides specialized workflows for brownfield codebase analysis, platform development, and technical assessment. Designed for understanding existing systems and building platform-specific development tools.

## Module Structure

### 📋 `/workflows`

Specialized workflows for brownfield analysis and platform development:

#### Brownfield Analysis Workflows

- `comprehensive-brownfield-reconnaissance` - **Multi-agent codebase analysis** with MCP-powered validation
  - Discovers tech stack using 11 specialized agents
  - Validates patterns against official documentation (Archon RAG)
  - Generates health score and actionable recommendations
  - Works with ANY tech stack (Node.js, Python, Go, Ruby, Java, etc.)

## Key Features

### Comprehensive Brownfield Reconnaissance

**Purpose**: Deep analysis of existing codebases for onboarding, audits, or modernization planning

**What it does**:
- ✅ **Tech Stack Discovery**: Identifies all technologies, frameworks, databases, APIs
- ✅ **Pattern Analysis**: Validates coding patterns against official best practices (MCP-powered)
- ✅ **Technical Debt Audit**: Identifies debt with severity levels and quick wins
- ✅ **Documentation Review**: Audits existing docs for accuracy and completeness
- ✅ **Health Score**: Calculates composite quality score (0-100)
- ✅ **Actionable Recommendations**: Prioritized improvements with effort estimates

**Outputs**: 14+ comprehensive markdown documents covering architecture, patterns, quality, UX, and requirements

**MCP Integration**: Validates patterns against official docs from Twilio, ElevenLabs, Fastify, Next.js, etc.

## Quick Start

```bash
# Run comprehensive brownfield analysis
/bmad:bmp:workflows:comprehensive-brownfield-reconnaissance

# Or direct invocation
workflow comprehensive-brownfield-reconnaissance
```

## Use Cases

### 1. Brownfield Project Onboarding
**When**: Joining a new project or team
**Output**: Complete understanding of tech stack, patterns, and technical debt
**Duration**: 15-35 minutes

### 2. Technical Audit
**When**: Before major refactoring or tech stack upgrades
**Output**: Baseline metrics, refactoring priorities, modernization roadmap
**Duration**: 15-35 minutes

### 3. Acquisition Due Diligence
**When**: Evaluating codebase for acquisition
**Output**: Health score, technical debt assessment, risk analysis
**Duration**: 15-35 minutes

### 4. Quality Assessment
**When**: Periodic health checks or tracking improvements
**Output**: Metrics dashboard, trend analysis, quality gates
**Duration**: 15-35 minutes

### 5. Knowledge Transfer
**When**: Documenting existing systems or onboarding new developers
**Output**: Comprehensive documentation suite, architectural decisions, patterns guide
**Duration**: 15-35 minutes

## Output Structure

```
docs/brownfield-analysis-{date}/
├── architecture/
│   ├── SYSTEM_OVERVIEW.md          # Tech stack & architecture
│   ├── COMPONENT_MAP.md            # Component inventory
│   ├── TECH_STACK_GUIDE.md         # Developer guide
│   ├── DEPENDENCY_MAP.md           # External integrations
│   ├── TECH_STACK_EVALUATION.md    # Stack assessment
│   └── TECHNICAL_DECISIONS.md      # Architectural decisions
├── patterns/
│   ├── CODING_PATTERNS.md          # MCP-validated patterns
│   └── API_CONVENTIONS.md          # API design patterns
├── quality/
│   ├── TECHNICAL_DEBT_AUDIT.md     # Debt inventory + quick wins
│   ├── TESTING_STRATEGY.md         # Test coverage analysis
│   └── DOCUMENTATION_AUDIT.md      # Documentation quality
├── user-experience/
│   └── USER_JOURNEYS.md            # User flows & state transitions
├── requirements/
│   ├── IMPLICIT_REQUIREMENTS.md    # Extracted requirements
│   └── API_REFERENCE.md            # API documentation
├── INDEX.md                        # Master navigation
└── EXECUTIVE_SUMMARY.md            # High-level findings
```

## MCP-Powered Validation

### Archon RAG Integration

Validates patterns against **official documentation sources**:
- **Twilio** - Media Streams, WebSocket patterns, telephony best practices
- **ElevenLabs** - Conversational AI, audio streaming, WebSocket protocols
- **Fastify** - Plugin architecture, hooks, error handling
- **Next.js** - App Router, Server Actions, data fetching
- **MongoDB** - Query patterns, indexing, connection pooling
- And many more...

### Validation Process

1. **Tech Stack Discovery**: Identify all technologies in codebase
2. **Source Mapping**: Map technologies to Archon RAG documentation sources
3. **Pattern Validation**: Search official docs for best practices
4. **Assessment**: Compare implementation vs official recommendations
5. **Classification**: ✅ Optimal / ⚠️ Acceptable / ❌ Deprecated / 🔍 Undocumented

### Coverage

Typical validation coverage: **60-100%** of detected technologies validated against authoritative sources

## Health Score

Composite score (0-100) based on:
- **Pattern Quality** (25%): How well patterns match official best practices
- **Test Coverage** (20%): Testing completeness and strategy
- **Tech Debt** (25%): Technical debt severity and volume
- **Documentation Quality** (15%): Documentation accuracy and completeness
- **Stack Modernity** (15%): Technology choices and currency

**Classifications**:
- 90-100: Excellent ✅
- 75-89: Good ⭐
- 60-74: Fair ⚠️
- 40-59: Poor ❌
- 0-39: Critical 🚨

## Technology Support

Works with **ANY tech stack**:

**Backend**: Node.js, Python, Go, Ruby, Java, PHP, Rust, Elixir, etc.
**Frontend**: React, Vue, Angular, Svelte, Next.js, Nuxt, etc.
**Databases**: MongoDB, PostgreSQL, MySQL, Redis, Elasticsearch, etc.
**Frameworks**: Express, Fastify, Django, Flask, Rails, Spring, Laravel, etc.

Dynamically adapts prompts and validation based on discovered stack!

## Prerequisites

### Required MCP Servers
- **Archon MCP**: For official documentation validation
- **Context7 MCP**: Optional fallback for library docs

### Required Agents (11 total)
All agents must be available in `.claude/agents/bmad-*/`:
1. codebase-analyzer
2. pattern-detector
3. api-documenter
4. dependency-mapper
5. requirements-analyst
6. technical-decisions-curator
7. user-journey-mapper
8. tech-debt-auditor
9. document-reviewer
10. technical-evaluator
11. test-coverage-analyzer

## Best Practices

1. **Run Before Major Changes**: Baseline current state before refactoring
2. **Regular Health Checks**: Track quality metrics over time
3. **Use for Onboarding**: New team members get complete context
4. **Share Results**: Executive summaries are stakeholder-ready
5. **Act on Quick Wins**: Implement high-value, low-effort improvements immediately

## Integration with BMM

BMP complements BMM by:
- Providing deep brownfield analysis before planning (Level 0-4 projects)
- Generating technical insights for architecture workflows
- Documenting existing patterns to inform new development
- Creating baseline for quality tracking

## Roadmap

### Planned Workflows
- `specialized-agent-builder` - Build platform-specific agents from reconnaissance insights
- `modernization-planner` - Generate modernization roadmap from tech debt audit
- `test-suite-generator` - Create test suites from coverage analysis
- `documentation-generator` - Auto-generate docs from codebase analysis

### Planned Features
- Trend analysis across multiple reconnaissance runs
- Automated PR comments with reconnaissance insights
- CI/CD integration for continuous quality monitoring
- Custom agent prompt templates per tech stack

## Related Documentation

- [BMM Module](../bmm/README.md) - Core method implementation for greenfield projects
- [BMB Module](../bmb/README.md) - Builder tools for custom workflows and agents
- [Comprehensive Brownfield Reconnaissance](./workflows/comprehensive-brownfield-reconnaissance/README.md) - Detailed workflow documentation

---

**Version**: 1.0.0
**Status**: Production Ready
**BMAD Version**: 6.0.0-alpha.0

BMP empowers you to understand ANY brownfield codebase deeply and systematically, enabling confident technical decisions and efficient onboarding.
