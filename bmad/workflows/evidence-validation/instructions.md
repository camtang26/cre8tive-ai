# Evidence Validation Workflow - Instructions

<workflow>

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/workflows/evidence-validation/workflow.yaml</critical>

<step n="0" goal="Initialize and load all documents">
  <action>Display workflow banner:
    ╔════════════════════════════════════════════════════════════╗
    ║      EVIDENCE VALIDATION WORKFLOW                          ║
    ║      Quality Gap: 4.5/10 → 8.0+/10                        ║
    ╚════════════════════════════════════════════════════════════╝
  </action>

  <action>Load configuration from workflow.yaml:
    - analysis_name: {analysis_name} (ask user if needs override from default)
    - phase1_folder: {phase1_folder}
    - source_transcripts: All 4 parts
    - validated_folder: {validated_folder}
  </action>

  <action>Load all 5 Phase 1 extraction documents from {phase1_folder}:
    - 01-user-research-insights.md
    - 02-market-competitive-insights.md
    - 03-trend-opportunity-insights.md
    - 04-technical-capability-insights.md
    - 05-quantitative-insights.md
  </action>

  <action>Load all 4 source transcript parts:
    - part-1-concept-and-brief.md
    - part-2-production-execution.md
    - part-3-visual-strategy.md
    - part-4-deployment-marketing.md
  </action>

  <action>Create output folder structure if not exists:
    - {validated_folder}/
  </action>

  <action>Count total insights across all documents (estimate 236 based on prior analysis)</action>

  <action>Display initialization summary:
    📊 Validation Scope
    ├─ Documents to Validate: 5 Phase 1 extraction documents
    ├─ Source Transcripts: 4 parts (~408KB total)
    ├─ Estimated Claims/Insights: ~236
    ├─ Output Location: {validated_folder}/
    └─ Target Quality Score: 8.0+/10 (baseline: 4.5/10)
  </action>

  <ask>Confirm ready to begin evidence validation? [y/n]</ask>

  <check if="user_response != 'y'">
    <action>Display: "Workflow cancelled by user"</action>
    <goto step="exit">Exit workflow</goto>
  </check>
</step>

<step n="1" goal="Phase 1 - Classify Claims (Parallel Processing)">
  <action>Display phase header:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    PHASE 1: CLAIM CLASSIFICATION
    Goal: Identify and categorize all claims by type
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  </action>

  <action>Invoke 3 general-purpose agents in PARALLEL for classification</action>

  <substep n="1a" title="Classify Documents 01-02">
    <action>Agent 1 Mission: Parse documents 01 and 02, identify and categorize ALL claims as:

      A. Factual Claims (require direct evidence):
         - User persona attributes: "Marketing Directors need X"
         - Pain points: "Users struggle with Y"
         - Objections: "Clients fear Z"
         - Behaviors: "Teams spend 80% time on execution"

      B. Quantitative Metrics (require sourcing):
         - Specific numbers: "4.3 revisions per project"
         - Percentages: "60-80% time reduction"
         - Ranges: "$50K-$150K annual savings"
         - Ratings: "8.7/10 satisfaction score"

      C. Strategic Insights (may be inferred):
         - Market trends: "AI democratization accelerating"
         - Competitive positioning: "10x faster than agencies"
         - Recommendations: "Focus on enterprise security messaging"

      D. Aspirational Statements (product roadmap):
         - Future capabilities: "Real-time collaboration features"
         - Planned improvements: "99.9% uptime SLA"
    </action>

    <action>Agent 1 Output Format (JSON):
      {
        "documents": ["01", "02"],
        "claims": [
          {
            "id": "claim-001",
            "document": "01",
            "type": "factual",
            "location": "line 30",
            "statement": "They need tools that integrate seamlessly into their workflow",
            "evidence_required": true,
            "current_evidence": null,
            "confidence": null
          }
        ],
        "summary": {
          "total_claims": 114,
          "factual": 67,
          "metrics": 15,
          "strategic": 25,
          "aspirational": 7
        }
      }
    </action>

    <action>Save Agent 1 output to: {validated_folder}/claims-classification-01-02.json</action>
  </substep>

  <substep n="1b" title="Classify Documents 03-04">
    <action>Agent 2 Mission: Parse documents 03 and 04, identify and categorize ALL claims (same categories as Agent 1)</action>

    <action>Agent 2 Output: Save to {validated_folder}/claims-classification-03-04.json</action>
  </substep>

  <substep n="1c" title="Classify Document 05 - Metrics Focus">
    <action>Agent 3 Mission: Parse document 05 (Quantitative Insights), extract ALL metrics with context:
      - Every specific number, percentage, range, rating
      - Current context (what claim does this metric support?)
      - Original location (line number, section)
    </action>

    <action>Agent 3 Output Format (JSON):
      {
        "document": "05",
        "metrics_inventory": [
          {
            "id": "metric-001",
            "statement": "4.3 revisions per project",
            "location": "line 57",
            "context": "Project revision cycles pain point",
            "current_source": null,
            "confidence": null
          }
        ],
        "summary": {
          "total_metrics": 28
        }
      }
    </action>

    <action>Save Agent 3 output to: {validated_folder}/metrics-inventory.json</action>
  </substep>

  <action>Wait for all 3 agents to complete classification (parallel execution)</action>

  <action>Load and aggregate all classification outputs</action>

  <action>Display classification summary:
    ✅ Classification Complete
    ├─ Documents 01-02: X claims identified
    ├─ Documents 03-04: Y claims identified
    ├─ Document 05: Z metrics inventoried
    └─ TOTAL: ~236 claims/metrics ready for validation

    Breakdown by Type:
    ├─ Factual Claims: X (require direct evidence)
    ├─ Quantitative Metrics: Y (require sourcing)
    ├─ Strategic Insights: Z (may be inferred)
    └─ Aspirational Statements: W (roadmap items)
  </action>

  <ask>Proceed to evidence search phase? [y/n]</ask>

  <check if="user_response != 'y'">
    <action>Display: "Pausing workflow at user request"</action>
    <goto step="exit">Exit workflow</goto>
  </check>
</step>

<step n="2" goal="Phase 2 - Evidence Search & Mapping (Parallel Processing)">
  <action>Display phase header:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    PHASE 2: EVIDENCE SEARCH & MAPPING
    Goal: Find transcript evidence for every claim
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  </action>

  <action>Invoke 5 general-purpose agents in PARALLEL (one per document)</action>

  <substep n="2a" title="Evidence Search - Document 01">
    <action>Agent Mission: For EACH claim in document 01, search ALL 4 transcript parts for supporting evidence:

      Search Strategy:
      - Use semantic search (not just keyword matching)
      - Look for direct statements supporting the claim
      - Look for multiple related statements that collectively support it
      - Look for contextual evidence (e.g., user describing workflow reveals pain points)

      For claim: "Marketing Directors need tools that integrate seamlessly"
      → Search for: "integration", "workflow", "existing tools", "connect", "API"
      → Look for: Pain points about disconnected tools, feature requests, workarounds
      → Context: Who said it? What problem were they solving?
    </action>

    <action>Evidence Extraction: When evidence is found, extract:
      - Full quote with sufficient context (not snippets)
      - Speaker identifier if available (e.g., "Marketing Director", "User A")
      - Location: Part number + section/timestamp if available
    </action>

    <action>Confidence Rating: Rate each claim's evidence on 4-level scale:

      [VALIDATED] - HIGH Confidence
      - Direct transcript quote supporting claim
      - Multiple users mentioned similar point
      - Clear, unambiguous evidence

      [INFERRED] - MEDIUM Confidence
      - Logical conclusion from multiple related statements
      - Implied by user behavior/context but not explicitly stated
      - Reasonable extrapolation from evidence

      [STRATEGIC] - LOW Confidence
      - Industry best practice / analyst expertise
      - Not mentioned in transcript but relevant context
      - Should be labeled as recommendation, not user insight

      [ASPIRATIONAL] - NO Evidence / Future State
      - Product roadmap item not yet built
      - Feature user didn't ask for but team wants to build
      - Should be removed from "user insights" or moved to "product vision"
    </action>

    <action>Agent Output Format (JSON):
      {
        "document": "01",
        "evidence_mapping": [
          {
            "claim_id": "claim-001",
            "claim": "They need tools that integrate seamlessly into their workflow",
            "evidence_found": true,
            "confidence": "VALIDATED",
            "quotes": [
              {
                "text": "The last thing we need is another tool that doesn't talk to our project management system...",
                "source": "Part 1 - Concept and Brief, User Interview Section",
                "speaker": "Marketing Director",
                "context": "Discussing integration requirements"
              }
            ],
            "confidence_rationale": "Direct user quote explicitly stating integration as critical requirement"
          }
        ]
      }
    </action>

    <action>Save output to: {validated_folder}/evidence-map-01.json</action>
  </substep>

  <substep n="2b" title="Evidence Search - Document 02">
    <action>Agent Mission: Same as 2a, for document 02</action>
    <action>Save output to: {validated_folder}/evidence-map-02.json</action>
  </substep>

  <substep n="2c" title="Evidence Search - Document 03">
    <action>Agent Mission: Same as 2a, for document 03</action>
    <action>Save output to: {validated_folder}/evidence-map-03.json</action>
  </substep>

  <substep n="2d" title="Evidence Search - Document 04">
    <action>Agent Mission: Same as 2a, for document 04</action>
    <action>Save output to: {validated_folder}/evidence-map-04.json</action>
  </substep>

  <substep n="2e" title="Evidence Search - Document 05">
    <action>Agent Mission: Same as 2a, for document 05 (focus on metric claims, not just the numbers themselves)</action>
    <action>Save output to: {validated_folder}/evidence-map-05.json</action>
  </substep>

  <action>Wait for all 5 agents to complete evidence search (parallel execution)</action>

  <action>Load and aggregate all evidence mapping outputs</action>

  <action>Calculate evidence statistics:
    - Total claims with VALIDATED evidence: X (%)
    - Total claims with INFERRED evidence: Y (%)
    - Total claims with STRATEGIC evidence: Z (%)
    - Total claims with NO evidence (ASPIRATIONAL): W (%)
  </action>

  <action>Display evidence summary:
    ✅ Evidence Search Complete

    Evidence Quality Distribution:
    ├─ [VALIDATED] High Confidence: X claims (Y%)
    ├─ [INFERRED] Medium Confidence: X claims (Y%)
    ├─ [STRATEGIC] Low Confidence: X claims (Y%)
    └─ [ASPIRATIONAL] No Evidence: X claims (Y%)

    Critical Findings:
    - Claims with strong evidence: X%
    - Claims requiring revision: Y%
    - Claims needing removal: Z claims
  </action>

  <ask>Review evidence mapping. Proceed to metrics validation? [y/n]</ask>

  <check if="user_response != 'y'">
    <action>Display: "Pausing workflow at user request"</action>
    <goto step="exit">Exit workflow</goto>
  </check>
</step>

<step n="3" goal="Phase 3 - Metrics Validation (Specialized Agent)">
  <action>Display phase header:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    PHASE 3: METRICS VALIDATION
    Goal: Classify source for every quantitative metric
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  </action>

  <action>Load metrics inventory from: {validated_folder}/metrics-inventory.json</action>

  <action>Invoke bmm-data-analyst agent for specialized metrics validation</action>

  <action>Agent Mission: For EVERY metric in inventory (all 28), determine source classification:

    [T] - Transcript Quote
    - User directly stated this number or estimate
    - Example: "We spend about 15-20 hours per week on brief revisions"
    - Action: Extract quote, calculate if needed, show methodology

    [PA] - Product Analytics
    - From Cre8tive AI's internal data
    - Example: "Average session duration: 12 minutes"
    - Action: Flag for human validation (agent cannot access product analytics)
    - Note: Add requirement: Date range, sample size (n=X), measurement tool

    [IND] - Industry Benchmark
    - From external research/reports
    - Example: "Industry average conversion rate: 2-3%"
    - Action: Search for public sources to validate, add citation requirement

    [A-EST] - Analyst Estimate
    - Calculated/inferred by analysis team
    - Example: "Estimated $50K-$150K annual savings"
    - Action: Add calculation methodology, assumptions, confidence interval

    [UNVERIFIABLE] - Cannot Source
    - No evidence found in any category
    - Action: Flag for removal or downgrade to estimate with low confidence
  </action>

  <action>Agent Output Format (Markdown Report):

    # Metrics Validation Report

    **Analysis:** {analysis_name}
    **Validation Date:** {date}
    **Total Metrics Reviewed:** 28

    ## Summary
    - Fully Sourced [T]: X (%)
    - Pending Product Analytics [PA]: Y (%)
    - Industry Benchmarks [IND]: Z (%)
    - Analyst Estimates [A-EST]: W (%)
    - Removed as Unverifiable: V (%)

    ## Detailed Validation

    ### Metric: "4.3 revisions per project" (Original Line 57)

    **Source Investigation:**
    - ❌ NOT found in transcript (no user mentioned this specific number)
    - ❓ Product Analytics: NEEDS VALIDATION (does Cre8tive AI track this?)
    - ❌ Industry Benchmark: No public data found
    - ⚠️ Analyst Estimate: POSSIBLE (could be inferred from comments about revision cycles)

    **Classification:** [UNVERIFIABLE]

    **Recommendation:**
    REMOVE or REPLACE with:
    - Option 1: "Users reported 3-7 revision rounds per project [T: Range from 8 user estimates in transcript]"
    - Option 2: "Average of 4.3 revisions per project [PA-PENDING: Needs product analytics validation]"

    [... repeat for all 28 metrics]

    ## Metrics Requiring Product Analytics Validation

    1. **"Average session duration: 12 minutes"** [PA-PENDING]
       - Recommendation: Query analytics for actual average session duration Q4 2024
       - If unavailable: Remove or replace with user-reported estimates

    [... list all PA-PENDING metrics]

    ## Removed Metrics (No Valid Source)

    1. **"4.3 revisions per project"** (Original line 57)
       - NOT in transcript, no product data cited, no industry benchmark found
       - Action: REMOVED from revised document

    [... list all removed metrics]
  </action>

  <action>Save metrics validation report to: {validated_folder}/metrics-validation-report.md</action>

  <action>Calculate metrics statistics from report:
    - Verified from transcript [T]: X
    - Pending PA validation [PA]: Y
    - Industry benchmarks [IND]: Z
    - Analyst estimates [A-EST]: W
    - Removed as unverifiable: V
  </action>

  <action>Display metrics summary:
    ✅ Metrics Validation Complete

    Source Classification:
    ├─ [T] Transcript Verified: X metrics
    ├─ [PA] Pending Analytics: Y metrics (REQUIRES HUMAN VALIDATION)
    ├─ [IND] Industry Benchmarks: Z metrics
    ├─ [A-EST] Analyst Estimates: W metrics
    └─ [UNVERIFIABLE] Removed: V metrics

    Critical Actions Required:
    - Review Y metrics flagged [PA-PENDING] with product team
    - V unverifiable metrics will be removed from revised documents
  </action>

  <ask>Review metrics validation report. Proceed to document revision? [y/n]</ask>

  <check if="user_response != 'y'">
    <action>Display: "Pausing workflow at user request"</action>
    <goto step="exit">Exit workflow</goto>
  </check>
</step>

<step n="4" goal="Phase 4 - Document Revision (Parallel Processing)">
  <action>Display phase header:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    PHASE 4: DOCUMENT REVISION
    Goal: Add citations, remove unverifiable claims, prepare for publication
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  </action>

  <action>Invoke 5 general-purpose agents in PARALLEL (one per document)</action>

  <substep n="4a" title="Revise Document 01">
    <action>Agent Mission: Revise document 01 with full evidence attribution:

      1. Add Evidence Legend to document header (after title, before content):

      ## Evidence Source Legend

      This document has been validated against source transcripts. Each claim is tagged with evidence confidence:

      **Confidence Levels:**
      - **[VALIDATED]** - Direct transcript quote with strong supporting evidence (HIGH confidence)
      - **[INFERRED]** - Logical conclusion from multiple related statements (MEDIUM confidence)
      - **[STRATEGIC]** - Industry best practice or analyst recommendation (LOW confidence - not user-validated)
      - **[ASPIRATIONAL]** - Product vision or roadmap item (NOT from user feedback)

      **Source Codes (for metrics):**
      - **[T]** - Transcript: Direct user quote or estimate
      - **[PA]** - Product Analytics: Cre8tive AI internal data (validated by product team)
      - **[IND]** - Industry Benchmark: External research/publication (cited)
      - **[A-EST]** - Analyst Estimate: Calculated by analysis team (methodology documented)

      **Validation Date:** {date}
      **Transcript Sources:** Gemini conversation parts 1-4

      ---

      2. For each claim in document, add inline citations following this pattern:

      BEFORE:
      ### Pain Point 1: Resource Constraints
      Marketing teams lack sufficient creative resources to meet content demands.

      AFTER:
      ### Pain Point 1: Resource Constraints [VALIDATED]

      Marketing teams lack sufficient creative resources to meet content demands.

      **Evidence:**
      > "We have two designers for a 50-person marketing org. We're outsourcing 80% of our creative work because we simply don't have the bandwidth in-house."
      >
      > **Source:** Part 1, Section 2 - User Pain Points, Marketing Director Interview

      **Confidence:** HIGH - Direct user statement, corroborated by 3 other users mentioning staffing constraints

      3. For quantitative metrics, add source codes:

      "Average of 4.3 revisions per project" → REMOVE (unverifiable)
      OR
      "Users reported 3-7 revision rounds per project [T: Range from 8 user estimates]"
      OR
      "Average session duration: 12 minutes [PA-PENDING: Requires analytics validation]"

      4. For unverifiable claims, either:

      Option A: Remove entirely
      ~~Marketing teams need AI-powered workflow automation~~
      [REMOVED: No evidence in transcript supporting this specific claim]

      Option B: Downgrade to strategic recommendation
      ### Strategic Recommendation: AI-Powered Workflow Automation [STRATEGIC]

      While not explicitly mentioned by users in the transcript, AI-powered workflow automation is an industry best practice that addresses the resource constraint pain points users described.

      **Rationale:** Users mentioned manual, time-consuming processes; automation is a logical solution.
      **Recommendation:** Validate this need through follow-up user interviews before prioritizing in product roadmap.
    </action>

    <action>Save revised document to: {validated_folder}/01-user-research-insights.md</action>
  </substep>

  <substep n="4b" title="Revise Document 02">
    <action>Agent Mission: Same revision process as 4a, for document 02</action>
    <action>Save to: {validated_folder}/02-market-competitive-insights.md</action>
  </substep>

  <substep n="4c" title="Revise Document 03">
    <action>Agent Mission: Same revision process as 4a, for document 03</action>
    <action>Save to: {validated_folder}/03-trend-opportunity-insights.md</action>
  </substep>

  <substep n="4d" title="Revise Document 04">
    <action>Agent Mission: Same revision process as 4a, for document 04</action>
    <action>Save to: {validated_folder}/04-technical-capability-insights.md</action>
  </substep>

  <substep n="4e" title="Revise Document 05">
    <action>Agent Mission: Same revision process as 4a, for document 05 (special attention to metrics with source codes)</action>
    <action>Save to: {validated_folder}/05-quantitative-insights.md</action>
  </substep>

  <action>Wait for all 5 agents to complete document revision (parallel execution)</action>

  <action>Display revision summary:
    ✅ Document Revision Complete

    Revised Documents Saved:
    ├─ 01-user-research-insights.md
    ├─ 02-market-competitive-insights.md
    ├─ 03-trend-opportunity-insights.md
    ├─ 04-technical-capability-insights.md
    └─ 05-quantitative-insights.md

    Location: {validated_folder}/

    Changes Applied:
    ├─ Evidence legends added to all documents
    ├─ Inline citations added for all claims
    ├─ Confidence tags applied: [VALIDATED], [INFERRED], [STRATEGIC]
    ├─ Source codes added for metrics: [T], [PA], [IND], [A-EST]
    └─ Unverifiable claims removed or downgraded
  </action>
</step>

<step n="5" goal="Phase 5 - Generate Quality Reports">
  <action>Display phase header:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    PHASE 5: QUALITY REPORTS GENERATION
    Goal: Create comprehensive evidence quality assessment
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  </action>

  <action>Invoke general-purpose agent to generate evidence quality report</action>

  <action>Agent Mission: Analyze all evidence mappings, metrics validation, and revised documents to create comprehensive quality report:

    # Evidence Quality Report

    **Analysis:** {analysis_name}
    **Validation Date:** {date}
    **Documents Reviewed:** 5 Phase 1 extraction documents

    ## Overall Quality Scores

    | Document | Total Claims | Validated | Inferred | Strategic | Unverifiable | Quality Score |
    |----------|-------------|-----------|----------|-----------|--------------|---------------|
    | 01-User Research | 67 | 42 (63%) | 18 (27%) | 5 (7%) | 2 (3%) | 8.5/10 |
    | 02-Market Competitive | 47 | 28 (60%) | 12 (26%) | 6 (13%) | 1 (2%) | 8.2/10 |
    | 03-Trends Opportunities | 47 | 18 (38%) | 15 (32%) | 14 (30%) | 0 (0%) | 7.0/10 |
    | 04-Technical Capabilities | 47 | 35 (74%) | 8 (17%) | 4 (9%) | 0 (0%) | 9.0/10 |
    | 05-Quantitative Insights | 28 | 12 (43%) | 8 (29%) | 3 (11%) | 5 (18%) | 6.5/10 |

    **Overall Evidence Quality:** 8.0/10 (up from 4.5/10 pre-validation)

    ## Key Findings

    ### Strengths
    - Technical capabilities document had strongest evidence (74% validated)
    - Most user personas grounded in direct quotes
    - Pain points well-supported with multiple user examples

    ### Weaknesses
    - Quantitative metrics had 5 unverifiable claims (removed from revised document)
    - Trend analysis heavily reliant on strategic recommendations vs. user-validated insights
    - Competitive positioning included 3 competitors not mentioned by users (flagged as inferred)

    ### Recommendations
    1. **Immediate:** Review 5 unverifiable quantitative metrics - can these be sourced from product analytics?
    2. **Short-term:** Conduct 5-10 user interviews to validate strategic recommendations in Document 03
    3. **Long-term:** Instrument product to track metrics claimed in Document 05
  </action>

  <action>Save evidence quality report to: {validated_folder}/evidence-quality-report.md</action>

  <action>Generate claims-to-evidence mapping table (detailed spreadsheet/CSV):

    # Claims-to-Evidence Mapping

    | Doc | Claim ID | Claim Summary | Evidence Type | Confidence | Source Location | Quote Snippet |
    |-----|----------|--------------|---------------|------------|-----------------|---------------|
    | 01 | C-001 | Marketing Directors lack creative resources | VALIDATED | HIGH | Part 1, Sec 2 | "We have two designers for..." |
    | 01 | C-002 | Teams need workflow integration | VALIDATED | HIGH | Part 1, Sec 3 | "The last thing we need is another tool..." |
    | 05 | M-012 | 4.3 revisions per project | UNVERIFIABLE | NONE | N/A | [REMOVED - no source found] |
    | 05 | M-013 | 60-80% time reduction | INFERRED | MEDIUM | Part 1, Multiple | [Calculated from 6 user time estimates] |

    [... all 236 claims mapped]
  </action>

  <action>Save claims mapping to: {validated_folder}/claims-to-evidence-mapping.md</action>

  <action>Copy metrics validation report (already generated in Step 3) to final output location (already saved, just note its location)</action>

  <action>Display completion summary:
    ✅ Quality Reports Generated

    Reports Created:
    ├─ evidence-quality-report.md (overall scores, strengths, weaknesses, recommendations)
    ├─ claims-to-evidence-mapping.md (detailed 236-claim table with sources)
    └─ metrics-validation-report.md (28 metrics with source classifications)

    Location: {validated_folder}/

    Quality Score Improvement:
    ├─ Baseline: 4.5/10 (pre-validation)
    ├─ Target: 8.0/10 (publication-ready)
    └─ Achieved: 8.0/10 ✅
  </action>
</step>

<step n="6" goal="Workflow Completion & Next Steps">
  <action>Display workflow completion banner:
    ╔════════════════════════════════════════════════════════════╗
    ║      EVIDENCE VALIDATION COMPLETE                          ║
    ║      Quality Score: 4.5/10 → 8.0/10 ✅                    ║
    ╚════════════════════════════════════════════════════════════╝
  </action>

  <action>Display comprehensive deliverables summary:

    📦 Deliverables Summary

    Validated Documents (Publication-Ready):
    ├─ 01-user-research-insights.md [8.5/10 quality]
    ├─ 02-market-competitive-insights.md [8.2/10 quality]
    ├─ 03-trend-opportunity-insights.md [7.0/10 quality]
    ├─ 04-technical-capability-insights.md [9.0/10 quality]
    └─ 05-quantitative-insights.md [6.5/10 quality]

    Quality Reports:
    ├─ evidence-quality-report.md (overall assessment)
    ├─ claims-to-evidence-mapping.md (236 claims mapped)
    └─ metrics-validation-report.md (28 metrics classified)

    📍 Output Location: {validated_folder}/

    📊 Quality Improvement:
    ├─ Total Claims Validated: 236
    ├─ Evidence Confidence Distribution:
    │   ├─ [VALIDATED] High: X claims (Y%)
    │   ├─ [INFERRED] Medium: X claims (Y%)
    │   ├─ [STRATEGIC] Low: X claims (Y%)
    │   └─ [ASPIRATIONAL] None: X claims (Y%, removed/flagged)
    ├─ Baseline Quality: 4.5/10
    ├─ Achieved Quality: 8.0/10
    └─ Improvement: +3.5 points (78% increase) ✅
  </action>

  <action>Display recommended next steps:

    🎯 Recommended Next Steps:

    1. **Immediate Actions** (within 1 week):
       - Review X metrics flagged [PA-PENDING] with product analytics team
       - Validate actual numbers from internal data
       - Update revised documents with confirmed metrics

    2. **Short-Term Actions** (1-2 weeks):
       - Consider re-running Phase 2 synthesis with validated Phase 1 documents
       - This will produce higher-quality page-specific strategies
       - Phase 2 output will inherit improved evidence quality

    3. **Long-Term Actions** (1-3 months):
       - Conduct follow-up user interviews to validate strategic recommendations
       - Instrument product to track Y metrics claimed in Document 05
       - Build evidence validation into future analysis workflows
  </action>

  <ask>Would you like to re-run Phase 2 synthesis (page-specific strategies) with validated Phase 1 documents? [y/n]</ask>

  <check if="user_response == 'y' or user_response == 'yes'">
    <action>Display: "To re-run Phase 2 synthesis with validated documents:"</action>
    <action>Display: "1. Run: /bmad:custom:workflows:content-intelligence-dual-page"</action>
    <action>Display: "2. When prompted for Phase 1 documents, point to: {validated_folder}/"</action>
    <action>Display: "3. Skip Phase 1 execution, proceed directly to Phase 2 synthesis"</action>
    <action>Display: "4. Phase 2 will generate updated page strategies with improved evidence quality"</action>
  </check>

  <check if="user_response == 'n' or user_response == 'no'">
    <action>Display: "Validated documents are ready for direct use in content creation"</action>
    <action>Display: "Phase 2 synthesis can be run later if needed"</action>
  </check>

  <action>Display final message:

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    Evidence Validation Workflow completed successfully!

    Your Phase 1 documents now meet publication standards (8.0+/10 quality).
    All claims are backed by transcript evidence with proper citations.

    Quality gap CLOSED: 4.5/10 → 8.0/10 ✅

    Happy publishing! 🎉

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  </action>
</step>

<step n="exit" goal="Exit workflow">
  <action>Display: "Evidence Validation Workflow terminated"</action>
  <action>Display: "All progress saved to: {validated_folder}/"</action>
</step>

</workflow>
