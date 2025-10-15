# Comprehensive Brownfield Reconnaissance - Workflow Instructions

<critical>The workflow execution engine is governed by: {project_root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project_root}/bmad/bmp/workflows/comprehensive-brownfield-reconnaissance/workflow.yaml</critical>
<critical>This workflow uses MCP tools (Archon, Context7) for validation - ensure they are available before proceeding</critical>

<workflow>

<step n="0" goal="Pre-flight checks and environment setup">

## Validate Environment

<action>Verify project path exists and is valid</action>
<action>Check for project markers (package.json, requirements.txt, Cargo.toml, go.mod, etc.)</action>
<action>Verify MCP servers are available:</action>
<action>- Call mcp__archon__health_check() to verify Archon MCP</action>
<action>- If Archon unavailable, warn user but continue (validation will be limited)</action>

## Create Output Directory Structure

<action>Create base analysis directory: {{analysis_output_folder}}</action>
<action>Create subdirectories:</action>
<action>- {{architecture_dir}}</action>
<action>- {{patterns_dir}}</action>
<action>- {{quality_dir}}</action>
<action>- {{user_experience_dir}}</action>
<action>- {{requirements_dir}}</action>

## Initialize Execution Log

<action>Create EXECUTION_LOG.md in {{analysis_output_folder}}</action>
<action>Log: Workflow started at {{timestamp}}</action>
<action>Log: Analysis ID: {{analysis_id}}</action>
<action>Log: Project path: {{project_path}}</action>
<action>Log: Output mode: {{output_preference}}</action>

<ask>Ready to begin comprehensive brownfield reconnaissance? (y/n)</ask>

</step>

<step n="1" goal="Tech Stack Discovery - CRITICAL PREREQUISITE">

<critical>This step MUST complete before parallel analysis - all subsequent agents depend on discovered tech stack</critical>

## Launch Codebase Analyzer (Sequential, not parallel)

<action>Use Task tool to launch codebase-analyzer agent with this prompt:</action>

```
You are analyzing a brownfield codebase to understand its structure, architecture, and technology stack.

PROJECT PATH: {{project_path}}

## Analysis Scope

Perform a comprehensive analysis to discover:

### 1. Technology Stack
Identify ALL technologies used:
- **Backend Framework(s)**: Node.js/Express/Fastify/NestJS, Python/Django/Flask/FastAPI, Ruby/Rails, Go, Java/Spring, etc.
- **Frontend Framework(s)**: React, Vue, Angular, Svelte, Next.js, Nuxt, etc.
- **Databases**: MongoDB, PostgreSQL, MySQL, Redis, Elasticsearch, etc.
- **External APIs/Services**: Twilio, Stripe, SendGrid, AWS services, etc.
- **Testing Frameworks**: Jest, Vitest, Pytest, RSpec, Go test, etc.
- **Build Tools**: Webpack, Vite, Turbopack, esbuild, Rollup, etc.
- **Package Managers**: npm, yarn, pnpm, pip, bundler, cargo, go mod, etc.

### 2. Project Structure
- Entry points (server.js, main.py, cmd/main.go, etc.)
- Directory organization (monorepo, microservices, monolith)
- Configuration files locations
- Environment variable usage

### 3. Architecture Patterns
- Design patterns identified (MVC, microservices, event-driven, etc.)
- API architecture (REST, GraphQL, gRPC, WebSocket)
- Authentication/authorization approach
- State management patterns

## Output Format

Generate THREE files:

### File 1: SYSTEM_OVERVIEW.md

```markdown
# System Overview

**Analysis Date**: {{date}}
**Project Path**: {{project_path}}

## Executive Summary
[2-3 paragraphs: what this system does, overall architecture, key characteristics]

## Technology Stack

### Backend
- **Primary Framework**: [Name and version if detected]
- **Runtime/Language**: [Node.js 18, Python 3.11, etc.]
- **Additional Libraries**: [List key dependencies]

### Frontend
- **Primary Framework**: [Name and version]
- **Build Tool**: [Webpack, Vite, etc.]
- **Key Libraries**: [State management, UI components, etc.]

### Data Layer
- **Primary Database**: [MongoDB, PostgreSQL, etc.]
- **Caching**: [Redis, etc.]
- **ORM/ODM**: [Mongoose, Prisma, SQLAlchemy, etc.]

### External Services/APIs
- [Service name]: [Purpose/use case]
- [Service name]: [Purpose/use case]

### DevOps & Infrastructure
- **Deployment Platform**: [Vercel, Render, AWS, etc.]
- **CI/CD**: [GitHub Actions, etc.]
- **Monitoring**: [Tools if detected]

### Testing & Quality
- **Test Framework**: [Jest, Vitest, etc.]
- **Test Types**: [Unit, integration, E2E - what exists]
- **Linting/Formatting**: [ESLint, Prettier, etc.]

## Architecture Overview

### System Architecture
[Describe overall architecture: monolith, microservices, etc.]

### Key Components
1. **[Component name]**: [Purpose and location]
2. **[Component name]**: [Purpose and location]

### Data Flow
[High-level description of how data flows through the system]

---

## TECH STACK EXTRACTION (CRITICAL - for subsequent steps)

**Detected Technologies** (structured format for workflow):

- PRIMARY_BACKEND_FRAMEWORK: [e.g., "Fastify" or "Express" or "Django"]
- FRONTEND_FRAMEWORK: [e.g., "Next.js" or "React" or "Vue"]
- DATABASES: [e.g., "MongoDB, Redis"]
- EXTERNAL_APIS: [e.g., "Twilio, ElevenLabs, Stripe"]
- TESTING_FRAMEWORKS: [e.g., "Jest, Vitest"]
- BUILD_TOOLS: [e.g., "Webpack, Vite"]

```

### File 2: COMPONENT_MAP.md

```markdown
# Component Map

## Directory Structure

[Tree view of key directories with descriptions]

## Component Inventory

### Backend Components
| Component | Location | Purpose | Dependencies |
|-----------|----------|---------|--------------|
| [Name] | [Path] | [Description] | [Key deps] |

### Frontend Components
| Component | Location | Purpose | Dependencies |
|-----------|----------|---------|--------------|
| [Name] | [Path] | [Description] | [Key deps] |

### Shared/Utility Components
| Component | Location | Purpose |
|-----------|----------|---------|
| [Name] | [Path] | [Description] |

## Component Relationships

[Diagram or description of how components interact]

## Entry Points

1. **Backend**: [File path and description]
2. **Frontend**: [File path and description]
3. **CLI/Scripts**: [If applicable]

```

### File 3: TECH_STACK_GUIDE.md

```markdown
# Technology Stack Guide

## Purpose
This document provides guidance for developers working with this codebase's specific technology stack.

## Stack-Specific Patterns

### [Primary Backend Framework]
- **Version**: [X.X.X]
- **Key Patterns**: [How it's used in this project]
- **Configuration**: [Where config lives]
- **Common Tasks**: [How to add routes, middleware, etc.]

### [Frontend Framework]
- **Version**: [X.X.X]
- **Key Patterns**: [Component structure, routing, etc.]
- **State Management**: [How state is managed]
- **Styling Approach**: [CSS-in-JS, Tailwind, etc.]

### [Database(s)]
- **Connection**: [How connections are managed]
- **Schemas/Models**: [Where defined]
- **Migrations**: [If applicable]
- **Query Patterns**: [How queries are structured]

## Development Workflow

### Setup
1. [Installation steps]
2. [Configuration steps]
3. [Database setup]

### Running Locally
- **Backend**: [Command and port]
- **Frontend**: [Command and port]
- **Tests**: [How to run]

### Building for Production
- [Build commands]
- [Environment variables needed]
```

Save outputs to:
- {{output_files.system_overview}}
- {{output_files.component_map}}
- {{output_files.tech_stack_guide}}
```

<action>Launch codebase-analyzer agent with above prompt</action>
<action>Wait for completion (this may take 3-5 minutes for large codebases)</action>

## Extract Tech Stack Variables

<action>Read {{output_files.system_overview}}</action>
<action>Parse the "TECH STACK EXTRACTION" section</action>
<action>Extract and store variables:</action>
<action>- {{primary_backend_framework}} = value from PRIMARY_BACKEND_FRAMEWORK</action>
<action>- {{frontend_framework}} = value from FRONTEND_FRAMEWORK</action>
<action>- {{databases}} = parse DATABASES into array</action>
<action>- {{external_apis}} = parse EXTERNAL_APIS into array</action>
<action>- {{testing_frameworks}} = parse TESTING_FRAMEWORKS into array</action>
<action>- {{build_tools}} = parse BUILD_TOOLS into array</action>
<action>- {{detected_tech_stack}} = combined array of all technologies</action>

<action>Log to EXECUTION_LOG.md:</action>
<action>- "Step 1 Complete: Tech stack discovered"</action>
<action>- "Primary backend: {{primary_backend_framework}}"</action>
<action>- "Frontend: {{frontend_framework}}"</action>
<action>- "Databases: {{databases}}"</action>
<action>- "External APIs: {{external_apis}}"</action>

<example>
Example extracted variables:
- primary_backend_framework: "Fastify"
- frontend_framework: "Next.js"
- databases: ["MongoDB", "Redis"]
- external_apis: ["Twilio", "ElevenLabs", "Supabase"]
- detected_tech_stack: ["Fastify", "Next.js", "MongoDB", "Redis", "Twilio", "ElevenLabs", "Supabase"]
</example>

<ask>Tech stack discovery complete. Review SYSTEM_OVERVIEW.md and continue? (y/n/edit)</ask>

</step>

<step n="2" goal="MCP Source Mapping - Prepare for Documentation Validation">

<critical>This step maps discovered technologies to Archon RAG documentation sources for targeted validation</critical>

## Get Available Documentation Sources

<action>Call mcp__archon__rag_get_available_sources()</action>
<action>Store result as {{available_sources}}</action>
<action>Log: "Found {{available_sources.count}} documentation sources in Archon RAG"</action>

## Map Technologies to Sources

<action>For each technology in {{detected_tech_stack}}:</action>

<action>1. Search available_sources for matching source:</action>
<action>   - Look for exact match (case-insensitive)</action>
<action>   - Look for partial match (e.g., "fastify" matches "fastify/fastify")</action>
<action>   - Look for vendor match (e.g., "Twilio" matches source with "twilio" in URL)</action>

<action>2. If match found:</action>
<action>   - Store in {{archon_source_map}}: {technology: source_id}</action>
<action>   - Log: "✅ Mapped {{technology}} → source_id: {{source_id}}"</action>

<action>3. If NO match found:</action>
<action>   - Log: "⚠️ No Archon RAG source for {{technology}} - will use generic searches"</action>
<action>   - Try Context7 MCP as fallback:</action>
<action>     a. Call resolve-library-id(libraryName="{{technology}}")</action>
<action>     b. If found, store in {{context7_library_map}}: {technology: library_id}</action>
<action>     c. Log: "✅ Fallback to Context7 for {{technology}}"</action>

<example>
Example archon_source_map after mapping:
{
  "Twilio": "src_abc123",
  "ElevenLabs": "src_def456",
  "Fastify": "src_ghi789",
  "Next.js": "src_jkl012"
}

Technologies without sources:
- "MongoDB" → No specific source, will use generic "MongoDB best practices" searches
- "Redis" → No specific source, will use generic searches
</example>

## Summary Report

<action>Count technologies with mapped sources: {{mapped_count}}</action>
<action>Count technologies without sources: {{unmapped_count}}</action>
<action>Log to EXECUTION_LOG.md:</action>
<action>- "Step 2 Complete: MCP source mapping"</action>
<action>- "Mapped sources: {{mapped_count}}/{{detected_tech_stack.length}}"</action>
<action>- "Validation coverage: {{percentage}}%"</action>

<ask>MCP source mapping complete. Proceed to parallel analysis? (y/n)</ask>

</step>

<step n="3" goal="Generate Tech-Specific Agent Prompts">

<critical>This step dynamically generates custom prompts for each agent based on discovered tech stack and available MCP sources</critical>

## Prompt Generation Strategy

For each of the 10 remaining agents, generate a custom prompt that includes:
1. **Core analysis task** (agent-specific)
2. **Discovered tech stack** (from Step 1)
3. **MCP validation protocol** (using sources from Step 2)
4. **Output format specification** (with MCP validation sections)
5. **Specific search queries** (tech-specific)

## Agent 1: Pattern Detector

<action>Generate prompt for pattern-detector agent:</action>

```
You are analyzing a brownfield codebase to identify coding patterns and conventions.

## DISCOVERED TECH STACK
{{detected_tech_stack}}

**Primary Backend**: {{primary_backend_framework}}
**Frontend**: {{frontend_framework}}
**Databases**: {{databases}}
**External APIs**: {{external_apis}}

## CRITICAL: MCP VALIDATION PROTOCOL

For EVERY pattern identified, validate against official documentation using MCP tools.

### Available Documentation Sources (Archon RAG)
{{archon_source_map}}

### Validation Process

#### Step 1: Identify Patterns (Use Read, Grep, Glob)

Search for patterns in these categories:

1. **Error Handling**
   - Try/catch patterns
   - Error type definitions
   - Error logging approaches
   - Error propagation strategies

2. **API Request/Response Handling**
   - Request validation patterns
   - Response formatting
   - Status code usage
   - Error response structure

3. **State Management** (if frontend exists)
   - Global state patterns
   - Component state patterns
   - State persistence approaches

4. **Data Validation**
   - Input validation libraries/patterns
   - Schema definitions
   - Validation error handling

5. **Authentication/Authorization**
   - Auth middleware patterns
   - Token handling (JWT, sessions, etc.)
   - Permission checking approaches

6. **Async Operations**
   - Promise patterns
   - Async/await usage
   - Error handling in async code
   - Concurrency patterns

7. **Database Interactions**
   - Query patterns
   - Connection management
   - Transaction handling (if applicable)
   - Error handling

8. **File Organization**
   - Module structure
   - Naming conventions
   - Import/export patterns

#### Step 2: Validate Against Official Docs (MCP)

For EACH technology-specific pattern found:

**If technology HAS Archon RAG source** (check {{archon_source_map}}):

```javascript
// Example for Fastify pattern
const source_id = archon_source_map["Fastify"]; // e.g., "src_ghi789"

mcp__archon__rag_search_knowledge_base({
  query: "Fastify error handling best practices",
  source_id: source_id,
  match_count: 5
});

mcp__archon__rag_search_code_examples({
  query: "Fastify async error handler",
  source_id: source_id,
  match_count: 3
});
```

**If technology has NO source** (not in {{archon_source_map}}):

```javascript
// Generic search without source_id filter
mcp__archon__rag_search_knowledge_base({
  query: "{{technology}} {{pattern}} best practices",
  match_count: 5
});
```

**Specific Search Examples Based on Detected Stack:**

{{#if primary_backend_framework === "Fastify"}}
- Search: "Fastify plugin architecture"
- Search: "Fastify hooks lifecycle"
- Search: "Fastify schema validation"
- Search: "Fastify error handling"
{{/if}}

{{#if primary_backend_framework === "Express"}}
- Search: "Express middleware patterns"
- Search: "Express error handling middleware"
- Search: "Express async route handlers"
{{/if}}

{{#if frontend_framework === "Next.js"}}
- Search: "Next.js app router patterns"
- Search: "Next.js server actions"
- Search: "Next.js data fetching"
{{/if}}

{{#if frontend_framework === "React"}}
- Search: "React hooks best practices"
- Search: "React state management patterns"
- Search: "React error boundaries"
{{/if}}

{{#for each database in databases}}
- Search: "{{database}} query patterns"
- Search: "{{database}} connection pooling"
- Search: "{{database}} error handling"
{{/for}}

{{#for each api in external_apis}}
- Search: "{{api}} integration best practices"
- Search: "{{api}} error handling"
- Search: "{{api}} rate limiting"
{{/for}}

#### Step 3: Compare & Assess

For each pattern, determine:
- ✅ **OPTIMAL**: Matches official recommendations perfectly
- ⚠️ **ACCEPTABLE**: Works but could be improved per docs
- ❌ **DEPRECATED**: Docs indicate better approach exists
- 🔍 **UNDOCUMENTED**: No official guidance found

#### Step 4: Identify Opportunities

Search for recent updates and new features:

```javascript
mcp__archon__rag_search_knowledge_base({
  query: "{{technology}} latest features 2025",
  source_id: archon_source_map["{{technology}}"],
  match_count: 3
});
```

## OUTPUT FORMAT

Generate file: {{output_files.coding_patterns}}

```markdown
# Coding Patterns Analysis

**Tech Stack Analyzed**: {{detected_tech_stack}}
**Analysis Date**: {{date}}
**MCP Validation**: {{mcp_validation_enabled}}

---

## Executive Summary

[2-3 paragraphs summarizing:
- Overall pattern quality
- Major findings (% optimal vs acceptable vs deprecated)
- Top 3 recommendations
- Notable opportunities from latest docs]

---

## Patterns by Category

### 1. Error Handling Patterns

#### Pattern: Custom Error Classes with Context
**Location**: `server/utils/errors.js:15-45`, used in 23 files
**Tech Stack**: {{primary_backend_framework}}

**Implementation**:
```javascript
class AppError extends Error {
  constructor(message, statusCode, context = {}) {
    super(message);
    this.statusCode = statusCode;
    this.context = context;
    this.isOperational = true;
  }
}
```

**Official Docs Validation**:
- **MCP Query**: `rag_search_knowledge_base(query="Fastify error handling custom errors", source_id="src_ghi789")`
- **Finding**: Fastify documentation recommends using custom error schemas with fastify-error plugin
- **Source**: Archon RAG - Fastify Official Docs (src_ghi789)
- **Doc Quote**: "Custom errors should integrate with Fastify's error serialization..."

**Comparison**:
Current implementation uses plain Error extension, but Fastify docs recommend fastify-error for better integration with error serialization and logging.

**Assessment**: ⚠️ ACCEPTABLE
- ✅ Pros: Clear context, operational flag useful
- ❌ Cons: Doesn't integrate with Fastify error serialization
- ❌ Cons: No automatic schema generation

**Recommendations**:
1. Migrate to fastify-error plugin for better integration
2. Add error schemas for automatic OpenAPI documentation
3. Consider adding error codes for i18n support

**Opportunities**:
MCP search for "Fastify latest features 2025" found:
- Fastify 5.0 introduces improved error handling with better TypeScript support
- New @fastify/errors package simplifies custom error creation

---

[Continue for ALL patterns in ALL categories]

---

## Summary Statistics

- **Total Patterns Identified**: [N]
- **✅ Optimal Patterns**: [N] ([%]%)
- **⚠️ Acceptable Patterns**: [N] ([%]%)
- **❌ Deprecated Patterns**: [N] ([%]%)
- **🔍 Undocumented Patterns**: [N] ([%]%)

## Priority Recommendations

### High Priority (Do First)
1. **[Pattern Name]**: [Why important, what to change]
2. **[Pattern Name]**: [Why important, what to change]

### Medium Priority (Plan For)
1. **[Pattern Name]**: [Improvement suggestion]
2. **[Pattern Name]**: [Improvement suggestion]

### Low Priority (Nice to Have)
1. **[Pattern Name]**: [Enhancement idea]

## Opportunities from Latest Docs

1. **[Technology] [New Feature]**: [How it could benefit this codebase]
2. **[Technology] [New Feature]**: [Potential use case]

---

## Appendix: MCP Queries Executed

[List all MCP queries for reproducibility]

1. `rag_search_knowledge_base(query="Fastify error handling best practices", source_id="src_ghi789", match_count=5)`
2. `rag_search_code_examples(query="Fastify async error handler", source_id="src_ghi789", match_count=3)`
...

---

**Analysis Quality**: ✅ MCP-validated against {{Object.keys(archon_source_map).length}} official documentation sources
```

Save to: {{output_files.coding_patterns}}
```

<action>Store generated prompt as {{pattern_detector_prompt}}</action>

## Agents 2-10: Generate Remaining Prompts

<action>Similarly generate custom prompts for remaining agents:</action>

### Agent 2: API Documenter
<action>Generate {{api_documenter_prompt}} with:</action>
<action>- Focus on REST/GraphQL/WebSocket endpoints found in {{detected_tech_stack}}</action>
<action>- MCP validation for API design patterns</action>
<action>- Tech-specific endpoint documentation standards</action>

### Agent 3: Dependency Mapper
<action>Generate {{dependency_mapper_prompt}} with:</action>
<action>- Map {{external_apis}} integration points</action>
<action>- Validate integration patterns via MCP</action>
<action>- Check for SDK version currency</action>

### Agent 4: Requirements Analyst
<action>Generate {{requirements_analyst_prompt}} with:</action>
<action>- Extract implicit requirements from {{detected_tech_stack}} usage</action>
<action>- Identify framework-specific constraints</action>
<action>- Document business rules embedded in code</action>

### Agent 5: Technical Decisions Curator
<action>Generate {{technical_decisions_curator_prompt}} with:</action>
<action>- Document WHY {{primary_backend_framework}} was chosen</action>
<action>- Validate architectural decisions via MCP research</action>
<action>- Identify trade-offs in tech stack choices</action>

### Agent 6: User Journey Mapper
<action>Generate {{user_journey_mapper_prompt}} with:</action>
<action>- Map user flows through {{frontend_framework}} components</action>
<action>- Identify state transitions</action>
<action>- Document navigation patterns</action>

### Agent 7: Tech Debt Auditor
<action>Generate {{tech_debt_auditor_prompt}} with:</action>
<action>- Identify deprecated patterns via MCP validation</action>
<action>- Flag outdated dependencies in {{detected_tech_stack}}</action>
<action>- Calculate tech debt score by category</action>

### Agent 8: Document Reviewer
<action>Generate {{document_reviewer_prompt}} with:</action>
<action>- Audit existing docs for tech stack accuracy</action>
<action>- Flag references to deprecated {{technology}} versions</action>
<action>- Validate code examples against current best practices</action>

### Agent 9: Technical Evaluator
<action>Generate {{technical_evaluator_prompt}} with:</action>
<action>- Evaluate {{detected_tech_stack}} choices via MCP research</action>
<action>- Compare against alternatives and modern best practices</action>
<action>- Recommend upgrades or migrations if beneficial</action>

### Agent 10: Test Coverage Analyzer
<action>Generate {{test_coverage_analyzer_prompt}} with:</action>
<action>- Analyze {{testing_frameworks}} usage and coverage</action>
<action>- Recommend test strategies per {{primary_backend_framework}}</action>
<action>- Validate testing patterns via MCP</action>

<action>Log to EXECUTION_LOG.md: "Step 3 Complete: Generated 10 tech-specific agent prompts"</action>

<ask>Custom agent prompts generated based on discovered tech stack. Ready to launch parallel reconnaissance? (y/n)</ask>

</step>

<step n="4" goal="Launch Parallel Reconnaissance - 10 Agents Simultaneously">

<critical>This step launches all 10 remaining agents IN PARALLEL for maximum efficiency</critical>

## Parallel Agent Execution

<action>Use Task tool to launch ALL 10 agents in a SINGLE message with multiple Task calls:</action>

<action>Task 1: pattern-detector</action>
<action>- Prompt: {{pattern_detector_prompt}}</action>
<action>- Output: {{output_files.coding_patterns}}</action>

<action>Task 2: api-documenter</action>
<action>- Prompt: {{api_documenter_prompt}}</action>
<action>- Outputs: {{output_files.api_reference}}, {{output_files.api_conventions}}</action>

<action>Task 3: dependency-mapper</action>
<action>- Prompt: {{dependency_mapper_prompt}}</action>
<action>- Output: {{output_files.dependency_map}}</action>

<action>Task 4: requirements-analyst</action>
<action>- Prompt: {{requirements_analyst_prompt}}</action>
<action>- Output: {{output_files.implicit_requirements}}</action>

<action>Task 5: technical-decisions-curator</action>
<action>- Prompt: {{technical_decisions_curator_prompt}}</action>
<action>- Output: {{output_files.technical_decisions}}</action>

<action>Task 6: user-journey-mapper</action>
<action>- Prompt: {{user_journey_mapper_prompt}}</action>
<action>- Output: {{output_files.user_journeys}}</action>

<action>Task 7: tech-debt-auditor</action>
<action>- Prompt: {{tech_debt_auditor_prompt}}</action>
<action>- Output: {{output_files.technical_debt_audit}}</action>

<action>Task 8: document-reviewer</action>
<action>- Prompt: {{document_reviewer_prompt}}</action>
<action>- Output: {{output_files.documentation_audit}}</action>

<action>Task 9: technical-evaluator</action>
<action>- Prompt: {{technical_evaluator_prompt}}</action>
<action>- Output: {{output_files.tech_stack_evaluation}}</action>

<action>Task 10: test-coverage-analyzer</action>
<action>- Prompt: {{test_coverage_analyzer_prompt}}</action>
<action>- Output: {{output_files.testing_strategy}}</action>

## Monitor Progress

<action>Log start time: {{step_4_start_time}}</action>
<action>Display progress indicator: "Launching 10 agents in parallel..."</action>
<action>Note: This may take 10-20 minutes depending on codebase size</action>

## Handle Agent Completion

<action>Wait for ALL agents to complete or timeout (30 minute max)</action>
<action>For each agent:</action>
<action>- If successful: Log "✅ {{agent_name}} completed"</action>
<action>- If failed: Log "❌ {{agent_name}} failed: {{error}}"</action>
<action>- If timeout: Log "⏱️ {{agent_name}} timed out"</action>

<action>Calculate completion statistics:</action>
<action>- {{successful_agents}} = count of successful agents</action>
<action>- {{failed_agents}} = count of failed agents</action>
<action>- {{elapsed_time}} = duration in minutes</action>

<action>Log to EXECUTION_LOG.md:</action>
<action>- "Step 4 Complete: Parallel reconnaissance finished"</action>
<action>- "Successful: {{successful_agents}}/10"</action>
<action>- "Failed: {{failed_agents}}/10"</action>
<action>- "Duration: {{elapsed_time}} minutes"</action>

<check if="failed_agents > 0">
  <ask>⚠️ {{failed_agents}} agent(s) failed. Continue with available results or retry failed agents? (continue/retry/abort)</ask>
</check>

<check if="failed_agents === 0">
  <ask>✅ All 10 agents completed successfully! Proceed to aggregation? (y/n)</ask>
</check>

</step>

<step n="5" goal="Verify Output Files and Calculate Metrics">

## Verify All Output Files Exist

<action>Check each expected output file exists:</action>
<action>- {{output_files.system_overview}} (from step 1)</action>
<action>- {{output_files.component_map}} (from step 1)</action>
<action>- {{output_files.tech_stack_guide}} (from step 1)</action>
<action>- {{output_files.coding_patterns}}</action>
<action>- {{output_files.api_reference}}</action>
<action>- {{output_files.api_conventions}}</action>
<action>- {{output_files.dependency_map}}</action>
<action>- {{output_files.implicit_requirements}}</action>
<action>- {{output_files.technical_decisions}}</action>
<action>- {{output_files.user_journeys}}</action>
<action>- {{output_files.technical_debt_audit}}</action>
<action>- {{output_files.documentation_audit}}</action>
<action>- {{output_files.tech_stack_evaluation}}</action>
<action>- {{output_files.testing_strategy}}</action>

<action>Create file inventory:</action>
<action>- Count: {{total_files_generated}}</action>
<action>- Total size: {{total_size_mb}} MB</action>

## Extract Key Metrics from Agent Outputs

<action>Read each agent output file and extract metrics:</action>

### From Tech Debt Auditor:
<action>Parse {{output_files.technical_debt_audit}} for:</action>
<action>- High priority issues count</action>
<action>- Medium priority issues count</action>
<action>- Low priority issues count</action>
<action>- Quick wins count</action>
<action>- Tech debt score (if calculated)</action>

### From Pattern Detector:
<action>Parse {{output_files.coding_patterns}} for:</action>
<action>- Optimal patterns count (✅)</action>
<action>- Acceptable patterns count (⚠️)</action>
<action>- Deprecated patterns count (❌)</action>
<action>- Pattern quality percentage = optimal / total</action>

### From Test Coverage Analyzer:
<action>Parse {{output_files.testing_strategy}} for:</action>
<action>- Test coverage percentage (if available)</action>
<action>- Test count</action>
<action>- Recommended test count</action>
<action>- Testing gaps identified</action>

### From Document Reviewer:
<action>Parse {{output_files.documentation_audit}} for:</action>
<action>- Outdated docs count</action>
<action>- Documentation quality score</action>
<action>- Missing documentation items</action>

### From Technical Evaluator:
<action>Parse {{output_files.tech_stack_evaluation}} for:</action>
<action>- Tech stack rating</action>
<action>- Recommended upgrades</action>
<action>- Modernization opportunities</action>

## Calculate Overall Health Score

<action>Calculate composite health score (0-100):</action>

```javascript
const healthScore = (
  (pattern_quality_percentage * 0.25) +
  (test_coverage_percentage * 0.20) +
  ((100 - tech_debt_severity_score) * 0.25) +
  (documentation_quality_score * 0.15) +
  (tech_stack_modernity_score * 0.15)
);
```

<action>Classify health score:</action>
<action>- 90-100: Excellent ✅</action>
<action>- 75-89: Good ⭐</action>
<action>- 60-74: Fair ⚠️</action>
<action>- 40-59: Poor ❌</action>
<action>- 0-39: Critical 🚨</action>

<action>Log to EXECUTION_LOG.md:</action>
<action>- "Step 5 Complete: Metrics calculated"</action>
<action>- "Overall Health Score: {{healthScore}}/100 ({{classification}})"</action>

</step>

<step n="6" goal="Generate Master Index">

## Create Comprehensive INDEX.md

<action>Generate {{output_files.master_index}} with complete navigation:</action>

```markdown
# Brownfield Analysis Index

**Analysis Date**: {{date}}
**Analysis ID**: {{analysis_id}}
**Project**: {{project_path}}

**Overall Health Score**: {{healthScore}}/100 ({{classification}})

---

## Quick Navigation

### 📊 Executive Summary
- [Executive Summary](./EXECUTIVE_SUMMARY.md) - High-level findings and recommendations

### 🏗️ Architecture
- [System Overview](./architecture/SYSTEM_OVERVIEW.md) - Technology stack and architecture
- [Component Map](./architecture/COMPONENT_MAP.md) - Component inventory and relationships
- [Tech Stack Guide](./architecture/TECH_STACK_GUIDE.md) - Developer guide for this stack
- [Dependency Map](./architecture/DEPENDENCY_MAP.md) - External integrations and dependencies
- [Tech Stack Evaluation](./architecture/TECH_STACK_EVALUATION.md) - Stack assessment and recommendations
- [Technical Decisions](./architecture/TECHNICAL_DECISIONS.md) - Architectural decisions and rationale

### 🎨 Patterns
- [Coding Patterns](./patterns/CODING_PATTERNS.md) - Code conventions and patterns analysis
- [API Conventions](./patterns/API_CONVENTIONS.md) - API design patterns

### ✅ Quality
- [Technical Debt Audit](./quality/TECHNICAL_DEBT_AUDIT.md) - Debt inventory and quick wins
- [Testing Strategy](./quality/TESTING_STRATEGY.md) - Test coverage and recommendations
- [Documentation Audit](./quality/DOCUMENTATION_AUDIT.md) - Documentation quality assessment

### 👥 User Experience
- [User Journeys](./user-experience/USER_JOURNEYS.md) - User flows and state transitions

### 📋 Requirements
- [Implicit Requirements](./requirements/IMPLICIT_REQUIREMENTS.md) - Extracted requirements and constraints
- [API Reference](./requirements/API_REFERENCE.md) - API documentation

---

## Analysis Metrics

### Overall Health: {{healthScore}}/100 ({{classification}})

| Category | Score | Status |
|----------|-------|--------|
| Pattern Quality | {{pattern_quality_percentage}}% | {{pattern_status}} |
| Test Coverage | {{test_coverage_percentage}}% | {{test_status}} |
| Tech Debt Level | {{tech_debt_score}}/100 | {{debt_status}} |
| Documentation Quality | {{documentation_quality_score}}% | {{doc_status}} |
| Tech Stack Modernity | {{tech_stack_modernity_score}}% | {{stack_status}} |

### Key Statistics

- **Total Files Analyzed**: {{files_analyzed_count}}
- **Lines of Code**: ~{{estimated_loc}}
- **Tech Stack**: {{detected_tech_stack.length}} technologies
- **Documentation Files**: {{doc_files_count}}
- **Test Files**: {{test_files_count}}
- **MCP Validations**: {{mcp_queries_executed}} queries

---

## Top Findings

### ✅ Strengths (Top 3)
1. {{strength_1}}
2. {{strength_2}}
3. {{strength_3}}

### ⚠️ Concerns (Top 3)
1. {{concern_1}}
2. {{concern_2}}
3. {{concern_3}}

### 🚀 Quick Wins (Immediate Action)
1. {{quick_win_1}}
2. {{quick_win_2}}
3. {{quick_win_3}}

---

## Technology Stack

{{detected_tech_stack}}

**MCP Validation Coverage**: {{Object.keys(archon_source_map).length}}/{{detected_tech_stack.length}} technologies validated against official docs

---

## Next Steps

1. **Review Executive Summary** - Start here for high-level overview
2. **Address Quick Wins** - Implement high-value, low-effort improvements
3. **Plan Strategic Improvements** - Schedule major refactoring or upgrades
4. **Create Specialized Agents** - Build platform-specific agents using this analysis

---

**Generated by**: Comprehensive Brownfield Reconnaissance Workflow
**BMAD Version**: 6.0.0-alpha.0
**MCP-Validated**: ✅ Patterns validated against official documentation
```

<action>Save to: {{output_files.master_index}}</action>

</step>

<step n="7" goal="Generate Executive Summary">

## Create EXECUTIVE_SUMMARY.md

<action>Aggregate findings from all agent outputs</action>
<action>Generate {{output_files.executive_summary}}:</action>

```markdown
# Executive Summary - Brownfield Analysis

**Analysis Date**: {{date}}
**Project**: {{project_path}}
**Analysis ID**: {{analysis_id}}

---

## Overall Assessment

**Health Score**: {{healthScore}}/100 ({{classification}})

[2-3 paragraph executive summary covering:
- What this codebase is and does
- Overall technical quality
- Major strengths
- Key concerns
- Strategic recommendations]

---

## Technology Stack

### Current Stack
{{detected_tech_stack}}

### Stack Assessment
- **Modernity**: {{tech_stack_modernity_score}}%
- **Validation Coverage**: {{mcp_coverage_percentage}}% ({{mapped_technologies_count}}/{{total_technologies_count}} technologies validated via MCP)
- **Recommended Upgrades**: {{upgrade_count}}

---

## Quality Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Pattern Quality | {{pattern_quality_percentage}}% | 80% | {{pattern_status_emoji}} |
| Test Coverage | {{test_coverage_percentage}}% | 70% | {{test_status_emoji}} |
| Documentation Quality | {{documentation_quality_score}}% | 75% | {{doc_status_emoji}} |
| Tech Debt Level | {{tech_debt_score}} | <40 | {{debt_status_emoji}} |

---

## Top Priorities (Ranked by Impact × Effort)

### 🔥 Critical (Do Immediately)
1. **[Priority 1]**: [Description, impact, effort]
2. **[Priority 2]**: [Description, impact, effort]
3. **[Priority 3]**: [Description, impact, effort]

### ⚡ High Priority (Plan This Quarter)
1. **[Priority 4]**: [Description]
2. **[Priority 5]**: [Description]
3. **[Priority 6]**: [Description]

### 📋 Medium Priority (Plan This Year)
1. **[Priority 7]**: [Description]
2. **[Priority 8]**: [Description]

---

## Quick Wins (High Value, Low Effort)

Recommended immediate actions with minimal effort:

1. **[Quick Win 1]**
   - **Impact**: [What improves]
   - **Effort**: [Time estimate]
   - **Steps**: [How to do it]

2. **[Quick Win 2]**
   - **Impact**: [What improves]
   - **Effort**: [Time estimate]
   - **Steps**: [How to do it]

3. **[Quick Win 3]**
   - **Impact**: [What improves]
   - **Effort**: [Time estimate]
   - **Steps**: [How to do it]

---

## Strengths

What this codebase does well:

1. **[Strength 1]**: [Evidence from analysis]
2. **[Strength 2]**: [Evidence from analysis]
3. **[Strength 3]**: [Evidence from analysis]

---

## Key Concerns

Areas requiring attention:

### Technical Debt
- **High Priority Items**: {{high_priority_debt_count}}
- **Total Debt Items**: {{total_debt_items}}
- **Top Concern**: [Biggest tech debt issue]

### Testing
- **Current Coverage**: {{test_coverage_percentage}}%
- **Missing Tests**: {{missing_test_areas}}
- **Top Concern**: [Biggest testing gap]

### Documentation
- **Outdated Docs**: {{outdated_docs_count}}
- **Missing Docs**: {{missing_docs_count}}
- **Top Concern**: [Biggest documentation issue]

### Architecture
- **Deprecated Patterns**: {{deprecated_patterns_count}}
- **Integration Risks**: {{integration_risks_count}}
- **Top Concern**: [Biggest architectural concern]

---

## Strategic Recommendations

### 1. Modernization Opportunities

[Based on MCP validation of latest features]

{{#for each opportunity in modernization_opportunities}}
- **{{opportunity.technology}} {{opportunity.feature}}**: {{opportunity.benefit}}
{{/for}}

### 2. Refactoring Priorities

[Based on pattern analysis and tech debt audit]

1. **[Refactoring Area 1]**: [Why important, expected impact]
2. **[Refactoring Area 2]**: [Why important, expected impact]
3. **[Refactoring Area 3]**: [Why important, expected impact]

### 3. Testing Strategy

[Based on test coverage analysis]

- **Immediate**: [What to test first]
- **Short-term**: [Testing infrastructure to add]
- **Long-term**: [Comprehensive testing strategy]

---

## Next Steps

### Immediate (This Week)
1. Review this analysis with team
2. Implement top 3 quick wins
3. Create action items for critical priorities

### Short-term (This Month)
1. Address high-priority technical debt
2. Improve test coverage for critical paths
3. Update outdated documentation

### Medium-term (This Quarter)
1. Plan strategic refactoring initiatives
2. Evaluate recommended tech stack upgrades
3. Establish quality metrics tracking

### Long-term (This Year)
1. Execute modernization roadmap
2. Achieve target quality metrics
3. Build specialized development workflows

---

## Appendix

### Analysis Coverage

- **Files Analyzed**: {{files_analyzed_count}}
- **Agents Executed**: {{successful_agents}}/11
- **MCP Queries**: {{mcp_queries_executed}}
- **Documentation Sources**: {{archon_sources_used}}
- **Analysis Duration**: {{total_analysis_duration}} minutes

### Agent Outputs

All detailed analysis documents available in:
- Architecture: `{{architecture_dir}}/`
- Patterns: `{{patterns_dir}}/`
- Quality: `{{quality_dir}}/`
- User Experience: `{{user_experience_dir}}/`
- Requirements: `{{requirements_dir}}/`

See [INDEX.md](./INDEX.md) for complete navigation.

---

**Analysis Methodology**: Multi-agent reconnaissance with MCP-powered validation against {{mcp_sources_count}} official documentation sources

**Validation Quality**: ✅ {{mcp_coverage_percentage}}% of detected technologies validated against authoritative documentation
```

<action>Save to: {{output_files.executive_summary}}</action>

<ask>Executive summary generated. Review and finalize? (y/n/edit)</ask>

</step>

<step n="8" goal="Final Validation and Delivery">

## Run Validation Checklist

<action if="validation_checklist_exists">Load and execute {{validation}}</action>
<action if="validation_checklist_exists">Verify all checklist items pass</action>

## Generate Final Report

<action>Create final delivery summary:</action>

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 COMPREHENSIVE BROWNFIELD RECONNAISSANCE COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ANALYSIS SUMMARY

Project: {{project_path}}
Analysis ID: {{analysis_id}}
Date: {{date}}
Duration: {{total_analysis_duration}} minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 HEALTH SCORE: {{healthScore}}/100 ({{classification}})

{{#if healthScore >= 90}}
✅ EXCELLENT - This codebase is in great shape!
{{else if healthScore >= 75}}
⭐ GOOD - Solid foundation with some improvements needed
{{else if healthScore >= 60}}
⚠️ FAIR - Notable issues but manageable
{{else if healthScore >= 40}}
❌ POOR - Significant technical debt requiring attention
{{else}}
🚨 CRITICAL - Major quality issues requiring immediate action
{{/if}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 OUTPUT FILES: {{total_files_generated}} documents generated

Location: {{analysis_output_folder}}

Architecture Documentation (6 files):
✅ SYSTEM_OVERVIEW.md
✅ COMPONENT_MAP.md
✅ TECH_STACK_GUIDE.md
✅ DEPENDENCY_MAP.md
✅ TECH_STACK_EVALUATION.md
✅ TECHNICAL_DECISIONS.md

Pattern Analysis (2 files):
✅ CODING_PATTERNS.md
✅ API_CONVENTIONS.md

Quality Assessment (3 files):
✅ TECHNICAL_DEBT_AUDIT.md
✅ TESTING_STRATEGY.md
✅ DOCUMENTATION_AUDIT.md

User Experience (1 file):
✅ USER_JOURNEYS.md

Requirements (2 files):
✅ IMPLICIT_REQUIREMENTS.md
✅ API_REFERENCE.md

Master Documents (2 files):
✅ INDEX.md
✅ EXECUTIVE_SUMMARY.md

Total Size: {{total_size_mb}} MB

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 TOP 3 RECOMMENDATIONS

1. {{top_recommendation_1}}
2. {{top_recommendation_2}}
3. {{top_recommendation_3}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 QUICK WINS (Do These First!)

1. {{quick_win_1}}
2. {{quick_win_2}}
3. {{quick_win_3}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 TECH STACK ANALYZED

{{detected_tech_stack}}

MCP Validation: {{mcp_coverage_percentage}}% validated against official docs
Documentation Sources Used: {{archon_sources_used}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 NEXT STEPS

1. START HERE: Read {{output_files.executive_summary}}
2. NAVIGATE: Use {{output_files.master_index}} to explore all findings
3. ACT: Implement quick wins for immediate impact
4. PLAN: Schedule strategic improvements identified in analysis
5. BUILD: Create specialized agents for this platform using insights

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🦸 Generated by: BMAD Comprehensive Brownfield Reconnaissance
Version: 1.0.0
MCP-Validated: ✅ Patterns validated against official documentation
Analysis Quality: {{#if mcp_coverage_percentage >= 80}}EXCELLENT{{else if mcp_coverage_percentage >= 60}}GOOD{{else}}PARTIAL{{/if}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

<action>Display final report to user</action>
<action>Log to EXECUTION_LOG.md: "Step 8 Complete: Analysis delivered"</action>
<action>Log to EXECUTION_LOG.md: "Workflow completed successfully at {{completion_timestamp}}"</action>

## Success!

<critical>Analysis complete! All {{total_files_generated}} documents saved to {{analysis_output_folder}}</critical>

</step>

</workflow>
