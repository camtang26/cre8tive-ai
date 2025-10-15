# Comprehensive Brownfield Reconnaissance - Validation Checklist

## Execution Completeness

### Pre-flight (Step 0)
- [ ] Project path validated and exists
- [ ] Project markers found (package.json, requirements.txt, etc.)
- [ ] MCP health check passed (Archon MCP available)
- [ ] Output directory structure created successfully
- [ ] All subdirectories exist (architecture, patterns, quality, user-experience, requirements)
- [ ] EXECUTION_LOG.md created

### Tech Stack Discovery (Step 1)
- [ ] Codebase-analyzer agent launched successfully
- [ ] SYSTEM_OVERVIEW.md generated
- [ ] COMPONENT_MAP.md generated
- [ ] TECH_STACK_GUIDE.md generated
- [ ] Tech stack variables extracted from output
- [ ] primary_backend_framework identified
- [ ] frontend_framework identified
- [ ] databases array populated (or empty if none)
- [ ] external_apis array populated
- [ ] detected_tech_stack array contains all technologies

### MCP Source Mapping (Step 2)
- [ ] rag_get_available_sources() called successfully
- [ ] Available sources count > 0
- [ ] archon_source_map populated with at least 1 mapping
- [ ] All detected technologies checked for source matches
- [ ] Context7 fallback attempted for unmapped technologies
- [ ] MCP coverage percentage calculated
- [ ] Coverage logged to EXECUTION_LOG.md

### Agent Prompt Generation (Step 3)
- [ ] Custom prompt generated for pattern-detector
- [ ] Custom prompt generated for api-documenter
- [ ] Custom prompt generated for dependency-mapper
- [ ] Custom prompt generated for requirements-analyst
- [ ] Custom prompt generated for technical-decisions-curator
- [ ] Custom prompt generated for user-journey-mapper
- [ ] Custom prompt generated for tech-debt-auditor
- [ ] Custom prompt generated for document-reviewer
- [ ] Custom prompt generated for technical-evaluator
- [ ] Custom prompt generated for test-coverage-analyzer
- [ ] All prompts include discovered tech stack
- [ ] All prompts include MCP validation instructions
- [ ] All prompts include specific MCP queries for detected technologies

### Parallel Agent Execution (Step 4)
- [ ] All 10 agents launched in parallel (single Task call with 10 agents)
- [ ] pattern-detector completed
- [ ] api-documenter completed
- [ ] dependency-mapper completed
- [ ] requirements-analyst completed
- [ ] technical-decisions-curator completed
- [ ] user-journey-mapper completed
- [ ] tech-debt-auditor completed
- [ ] document-reviewer completed
- [ ] technical-evaluator completed
- [ ] test-coverage-analyzer completed
- [ ] Failed agents count logged (if any)
- [ ] Completion statistics calculated
- [ ] Execution duration logged

### Metrics Calculation (Step 5)
- [ ] All expected output files verified to exist
- [ ] File inventory created (count and total size)
- [ ] Tech debt metrics extracted
- [ ] Pattern quality metrics extracted
- [ ] Test coverage metrics extracted (if available)
- [ ] Documentation quality metrics extracted
- [ ] Tech stack evaluation metrics extracted
- [ ] Overall health score calculated (0-100)
- [ ] Health classification determined (Excellent/Good/Fair/Poor/Critical)

### Master Index (Step 6)
- [ ] INDEX.md generated
- [ ] All output files linked in index
- [ ] Quick navigation section complete
- [ ] Analysis metrics table populated
- [ ] Top findings section populated (strengths, concerns, quick wins)
- [ ] Technology stack listed
- [ ] MCP validation coverage displayed
- [ ] Next steps section included

### Executive Summary (Step 7)
- [ ] EXECUTIVE_SUMMARY.md generated
- [ ] Overall assessment paragraph written
- [ ] Health score displayed
- [ ] Technology stack section complete
- [ ] Quality metrics table populated
- [ ] Top priorities ranked (Critical/High/Medium)
- [ ] Quick wins section with 3+ items
- [ ] Strengths section with evidence
- [ ] Key concerns sections (Debt, Testing, Documentation, Architecture)
- [ ] Strategic recommendations included
- [ ] Next steps organized by timeline (Immediate/Short/Medium/Long)
- [ ] Appendix with analysis coverage stats

### Final Delivery (Step 8)
- [ ] Validation checklist executed (this file)
- [ ] Final report generated and displayed
- [ ] Total files count accurate
- [ ] Output location confirmed
- [ ] Health score displayed in final report
- [ ] Top 3 recommendations shown
- [ ] Quick wins highlighted
- [ ] Tech stack summary included
- [ ] MCP validation coverage shown
- [ ] Next steps clearly stated
- [ ] EXECUTION_LOG.md finalized

---

## Output File Quality

### Architecture Documents
- [ ] **SYSTEM_OVERVIEW.md**
  - [ ] Executive summary present (2-3 paragraphs)
  - [ ] Technology stack completely documented
  - [ ] Architecture overview section complete
  - [ ] TECH STACK EXTRACTION section present with structured format
  - [ ] All detected technologies clearly listed
- [ ] **COMPONENT_MAP.md**
  - [ ] Directory structure documented
  - [ ] Component inventory tables complete
  - [ ] Component relationships described
  - [ ] Entry points identified
- [ ] **TECH_STACK_GUIDE.md**
  - [ ] Stack-specific patterns documented
  - [ ] Development workflow described
  - [ ] Setup instructions included
  - [ ] Running and building commands documented
- [ ] **DEPENDENCY_MAP.md**
  - [ ] External services mapped
  - [ ] Integration points documented
  - [ ] Dependency relationships clear
- [ ] **TECH_STACK_EVALUATION.md**
  - [ ] Stack assessment with ratings
  - [ ] Recommended upgrades listed
  - [ ] Modernity score calculated
- [ ] **TECHNICAL_DECISIONS.md**
  - [ ] Key decisions documented with WHY
  - [ ] Alternatives considered listed
  - [ ] Trade-offs explained
  - [ ] MCP validation of decisions included

### Pattern Documents
- [ ] **CODING_PATTERNS.md**
  - [ ] Executive summary present
  - [ ] Patterns organized by category (Error Handling, API, State, etc.)
  - [ ] Each pattern has: Location, Implementation, Official Docs Validation
  - [ ] MCP queries documented with results
  - [ ] Assessment markers used (✅/⚠️/❌/🔍)
  - [ ] Recommendations specific and actionable
  - [ ] Opportunities from latest docs identified
  - [ ] Summary statistics table complete
  - [ ] Priority recommendations ranked
  - [ ] Appendix with MCP queries list
- [ ] **API_CONVENTIONS.md**
  - [ ] API patterns documented
  - [ ] REST/GraphQL/WebSocket patterns covered (as applicable)
  - [ ] Response format conventions described

### Quality Documents
- [ ] **TECHNICAL_DEBT_AUDIT.md**
  - [ ] Debt items categorized by severity (High/Medium/Low)
  - [ ] Quick wins section present
  - [ ] Each debt item has: Description, Location, Risk, Effort
  - [ ] Tech debt score calculated
  - [ ] Refactoring priorities ranked
  - [ ] MCP validation of deprecated patterns
- [ ] **TESTING_STRATEGY.md**
  - [ ] Current test coverage assessed
  - [ ] Testing gaps identified
  - [ ] Recommended test strategies provided
  - [ ] Testing framework evaluation included
  - [ ] Test infrastructure recommendations
- [ ] **DOCUMENTATION_AUDIT.md**
  - [ ] Outdated documentation flagged with specifics
  - [ ] Redundant documentation identified
  - [ ] Missing documentation listed
  - [ ] Quality issues documented
  - [ ] Documentation quality score calculated
  - [ ] MCP validation of doc accuracy

### User Experience Documents
- [ ] **USER_JOURNEYS.md**
  - [ ] Key user journeys mapped
  - [ ] State transitions documented
  - [ ] Pain points identified
  - [ ] User flow diagrams or descriptions

### Requirements Documents
- [ ] **IMPLICIT_REQUIREMENTS.md**
  - [ ] Functional requirements extracted
  - [ ] Non-functional requirements identified
  - [ ] System constraints documented
  - [ ] Business rules captured
- [ ] **API_REFERENCE.md**
  - [ ] All APIs/endpoints documented
  - [ ] Request/response formats specified
  - [ ] Authentication documented
  - [ ] Integration points clear

### Master Documents
- [ ] **INDEX.md**
  - [ ] All files linked and accessible
  - [ ] Health score displayed
  - [ ] Metrics table complete
  - [ ] Top findings summarized
  - [ ] Next steps actionable
- [ ] **EXECUTIVE_SUMMARY.md**
  - [ ] Suitable for stakeholder presentation
  - [ ] All metrics present
  - [ ] Recommendations prioritized
  - [ ] Timeline-based next steps

---

## MCP Integration Quality

### MCP Execution
- [ ] rag_get_available_sources() called successfully
- [ ] At least 1 technology mapped to Archon RAG source
- [ ] rag_search_knowledge_base() queries executed during analysis
- [ ] rag_search_code_examples() queries executed where applicable
- [ ] Context7 used as fallback when appropriate
- [ ] All MCP queries logged in analysis outputs

### MCP Validation in Outputs
- [ ] Pattern documents cite MCP query results
- [ ] Official docs validation sections present
- [ ] Source IDs referenced in findings
- [ ] Comparison to official recommendations included
- [ ] Assessment markers (✅/⚠️/❌) based on MCP findings
- [ ] Opportunities from latest docs (2025 features) identified
- [ ] MCP query appendix in detailed documents

### Validation Coverage
- [ ] MCP coverage percentage ≥ 50% (at least half of technologies validated)
- [ ] All major technologies (backend, frontend, database) validated if sources available
- [ ] External APIs validated via Archon RAG (Twilio, Stripe, etc.)
- [ ] Coverage percentage displayed in INDEX and EXECUTIVE_SUMMARY

---

## Content Quality Standards

### All Documents
- [ ] No Lorem Ipsum or placeholder text
- [ ] No TODO items remaining
- [ ] Consistent formatting (headers, lists, tables)
- [ ] Proper markdown syntax
- [ ] Date stamps included where specified
- [ ] Tech stack variables replaced with actual values
- [ ] File paths and line numbers specific (not generic examples)

### Executive Content
- [ ] Executive summaries are 2-3 paragraphs (not longer)
- [ ] Findings are specific with evidence
- [ ] Recommendations are actionable
- [ ] Priorities ranked by impact and effort
- [ ] Metrics have actual numbers (not N/A or TBD)

### Technical Accuracy
- [ ] Code examples are actual code from codebase (not generic)
- [ ] File paths point to real files
- [ ] Technology versions identified when possible
- [ ] Patterns described match actual implementation
- [ ] MCP validation results accurately reflected

### Actionability
- [ ] Every recommendation has: What, Why, How
- [ ] Quick wins include effort estimates
- [ ] Priorities have clear ranking rationale
- [ ] Next steps are specific and time-bound
- [ ] Success criteria defined for improvements

---

## Final Validation

### Deliverables Checklist
- [ ] All 14 core output files generated
- [ ] INDEX.md provides complete navigation
- [ ] EXECUTIVE_SUMMARY.md is stakeholder-ready
- [ ] EXECUTION_LOG.md documents complete workflow
- [ ] Total file count matches expected (14+ files)
- [ ] Total output size is reasonable (< 50MB)

### Success Criteria
- [ ] Health score calculated and displayed
- [ ] At least 8/10 parallel agents completed successfully
- [ ] MCP validation coverage ≥ 30% of detected technologies
- [ ] All high-severity issues from agents are documented
- [ ] Quick wins identified (at least 3)
- [ ] Strategic recommendations provided (at least 3)
- [ ] Next steps organized by timeline
- [ ] Analysis duration logged (total time)

### User Experience
- [ ] Final report clearly displayed
- [ ] Output location easy to find
- [ ] Health score immediately visible
- [ ] Top recommendations actionable
- [ ] Quick wins highlighted
- [ ] Navigation path clear (start with EXECUTIVE_SUMMARY.md → INDEX.md → detailed docs)

---

## Issue Lists (If Any)

### CRITICAL Issues (Must Fix Before Delivery)
[List any critical issues found during validation]

### HIGH Issues (Should Fix)
[List high-priority issues]

### MEDIUM Issues (Nice to Fix)
[List medium-priority issues]

### LOW Issues (Minor)
[List low-priority issues]

---

## Validation Sign-off

**Workflow Execution**: ✅ Complete / ⚠️ Partial / ❌ Failed

**Output Quality**: ✅ Excellent / ⭐ Good / ⚠️ Acceptable / ❌ Poor

**MCP Validation**: ✅ Comprehensive / ⭐ Good / ⚠️ Limited / ❌ None

**Ready for Delivery**: ✅ Yes / ⚠️ With Caveats / ❌ No

**Caveats/Notes**:
[Any important notes about the analysis quality, limitations, or special considerations]

---

**Validation Completed**: {{validation_date}}
**Validator**: [Manual review or automated check]
