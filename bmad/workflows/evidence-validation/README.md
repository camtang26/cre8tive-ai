# Evidence Validation Workflow

**Version:** 1.0.0
**Author:** Cameron
**Type:** Action Workflow (Multi-Agent Parallel Processing)

---

## Purpose

Systematically validates claims in Phase 1 analysis documents against source transcripts, adds rigorous citations with confidence ratings, and produces publication-ready documents with 8.0+ quality scores.

**Solves:** Critical quality gap where 85% of claims lack transcript source attribution, blocking publication due to legal/credibility risk.

---

## Quality Improvement

| Metric | Baseline | Target | Achievement |
|--------|----------|--------|-------------|
| Evidence Quality Score | 4.5/10 | 8.0+/10 | ✅ 8.0/10 |
| Claims with Attribution | ~15% | 85%+ | ✅ 85%+ |
| Publication Readiness | ❌ Blocked | ✅ Ready | ✅ Ready |

---

## How It Works

### 6-Phase Validation Process

**Phase 0: Initialize** (1 min)
- Load 5 Phase 1 documents + 4 transcript parts
- Verify all inputs present
- Create output folder structure

**Phase 1: Claim Classification** (15-20 min, parallel)
- 3 agents classify all 236 claims by type
- Categories: Factual, Quantitative, Strategic, Aspirational
- Output: Structured claim inventory

**Phase 2: Evidence Search** (60-90 min, parallel)
- 5 agents search transcripts for supporting evidence
- Semantic search across all 4 transcript parts per claim
- Extract quotes, rate confidence: [VALIDATED], [INFERRED], [STRATEGIC], [ASPIRATIONAL]
- Output: Evidence mapping with 236 claim-evidence pairs

**Phase 3: Metrics Validation** (30-45 min, specialist)
- 1 bmm-data-analyst validates all 28 quantitative metrics
- Classify sources: [T] Transcript, [PA] Product Analytics, [IND] Industry Benchmark, [A-EST] Analyst Estimate
- Flag unverifiable metrics for removal
- Output: Metrics validation report

**Phase 4: Document Revision** (45-60 min, parallel)
- 5 agents revise documents with inline citations
- Add evidence legends, confidence tags, source codes
- Remove or downgrade unverifiable claims
- Output: 5 publication-ready documents

**Phase 5: Quality Reports** (15-20 min)
- Generate evidence quality report (scores, strengths, weaknesses)
- Generate claims-to-evidence mapping table (236 claims)
- Copy metrics validation report
- Output: 3 comprehensive quality reports

**Total Estimated Time:** 3-5 hours (for 236 insights across 5 documents)

---

## Usage

### Invocation

```bash
/bmad:custom:workflows:evidence-validation
```

### Prerequisites

**Required Inputs:**
1. Phase 1 extraction documents (5 files):
   - `docs/insights/{analysis-name}/phase1-extractions/01-user-research-insights.md`
   - `docs/insights/{analysis-name}/phase1-extractions/02-market-competitive-insights.md`
   - `docs/insights/{analysis-name}/phase1-extractions/03-trend-opportunity-insights.md`
   - `docs/insights/{analysis-name}/phase1-extractions/04-technical-capability-insights.md`
   - `docs/insights/{analysis-name}/phase1-extractions/05-quantitative-insights.md`

2. Source transcripts (4 files):
   - `docs/gemini-transcript-parts/part-1-concept-and-brief.md`
   - `docs/gemini-transcript-parts/part-2-production-execution.md`
   - `docs/gemini-transcript-parts/part-3-visual-strategy.md`
   - `docs/gemini-transcript-parts/part-4-deployment-marketing.md`

**Upstream Workflow:**
- Must run AFTER `content-intelligence-dual-page` workflow completes

### Runtime Parameters

The workflow will prompt for:
- **analysis_name**: Default `"gemini-transcript-analysis"` (override if different)

All other paths derived automatically from analysis_name.

### User Checkpoints

The workflow requires user approval at 5 checkpoints:
1. **Step 0:** Confirm ready to begin validation
2. **Step 1:** Confirm proceed to evidence search (after classification)
3. **Step 2:** Confirm proceed to metrics validation (after evidence search)
4. **Step 3:** Confirm proceed to document revision (after metrics validation)
5. **Step 6:** Optionally re-run Phase 2 synthesis with validated documents

---

## Outputs

### Validated Documents (5 files)
**Location:** `docs/insights/{analysis-name}/phase1-extractions-validated/`

1. `01-user-research-insights.md` - With inline citations, evidence legend
2. `02-market-competitive-insights.md` - With inline citations, evidence legend
3. `03-trend-opportunity-insights.md` - With inline citations, evidence legend
4. `04-technical-capability-insights.md` - With inline citations, evidence legend
5. `05-quantitative-insights.md` - With inline citations, evidence legend, metrics source codes

**Quality Standards:**
- All claims tagged with confidence levels
- Evidence legends at document headers
- Inline citations with transcript quotes + sources
- Unverifiable claims removed or downgraded
- Metrics classified with source codes: [T], [PA], [IND], [A-EST]

### Quality Reports (3 files)
**Location:** `docs/insights/{analysis-name}/phase1-extractions-validated/`

1. **evidence-quality-report.md**
   - Overall quality scores per document
   - Confidence distribution (% validated, inferred, strategic)
   - Strengths and weaknesses analysis
   - Actionable recommendations (immediate, short-term, long-term)

2. **claims-to-evidence-mapping.md**
   - Detailed table: 236 claims × evidence sources
   - Columns: Doc ID, Claim ID, Claim Summary, Evidence Type, Confidence, Source Location, Quote Snippet

3. **metrics-validation-report.md**
   - Source classification for all 28 metrics
   - [PA-PENDING] metrics flagged for product analytics validation
   - Removed metrics with investigation details
   - Recommendations for validation and instrumentation

---

## Agent Configuration

| Phase | Agent Type | Count | Execution Mode |
|-------|------------|-------|----------------|
| 1 - Classification | general-purpose | 3 | Parallel |
| 2 - Evidence Search | general-purpose | 5 | Parallel |
| 3 - Metrics Validation | bmm-data-analyst | 1 | Sequential |
| 4 - Document Revision | general-purpose | 5 | Parallel |
| 5 - Quality Reports | general-purpose | 1 | Sequential |

**Total Agents:** 15 agent invocations (11 parallel, 4 sequential)

---

## Confidence Levels

### [VALIDATED] - High Confidence
- Direct transcript quote supporting claim
- Multiple users mentioned similar point
- Clear, unambiguous evidence

### [INFERRED] - Medium Confidence
- Logical conclusion from multiple related statements
- Implied by user behavior/context but not explicitly stated
- Reasonable extrapolation from evidence

### [STRATEGIC] - Low Confidence
- Industry best practice / analyst expertise
- Not mentioned in transcript but relevant context
- Labeled as recommendation, not user insight

### [ASPIRATIONAL] - No Evidence
- Product roadmap item not yet built
- Feature user didn't ask for but team wants to build
- Removed from "user insights" or flagged as product vision

---

## Source Codes (for Metrics)

- **[T]** - Transcript: Direct user quote or estimate
- **[PA]** - Product Analytics: Internal data (requires human validation)
- **[IND]** - Industry Benchmark: External research/publication (requires citation)
- **[A-EST]** - Analyst Estimate: Calculated by team (requires methodology)

---

## Quality Targets

| Metric | Target | Critical Threshold |
|--------|--------|-------------------|
| Overall Evidence Quality | 8.0+/10 | Must achieve for publication |
| % Claims with [VALIDATED] confidence | 50%+ | Credibility benchmark |
| % Claims with transcript attribution | 85%+ | Legal/risk mitigation |
| Unverifiable metrics removed | 100% | No unsourced quantitative claims |

---

## Post-Workflow Actions

### Immediate (within 1 week)
- [ ] Review metrics flagged [PA-PENDING] with product analytics team
- [ ] Validate actual numbers from internal data
- [ ] Update revised documents with confirmed metrics

### Short-Term (1-2 weeks)
- [ ] Consider re-running Phase 2 synthesis with validated Phase 1 documents
- [ ] This produces higher-quality page-specific strategies
- [ ] Phase 2 output inherits improved evidence quality

### Long-Term (1-3 months)
- [ ] Conduct follow-up user interviews to validate strategic recommendations
- [ ] Instrument product to track metrics claimed but unverifiable
- [ ] Build evidence validation into future analysis workflows

---

## Troubleshooting

### "Cannot find Phase 1 documents"
- Verify `content-intelligence-dual-page` workflow completed successfully
- Check path: `docs/insights/{analysis-name}/phase1-extractions/`
- Ensure all 5 documents exist (01-05)

### "Evidence search returned no results"
- Verify transcript parts are complete and readable
- Check path: `docs/gemini-transcript-parts/part-*.md`
- Ensure transcripts contain actual conversation text (not just metadata)

### "Quality score below 8.0/10"
- Review evidence mapping - are confidence ratings accurate?
- Check if strategic insights dominate (should be <30%)
- Verify unverifiable claims were removed (not just flagged)
- Consider additional user interviews to validate inferred claims

### "Metrics validation removed too many metrics"
- This is CORRECT behavior for unverifiable metrics
- Do NOT guess metric sources - only use transcript evidence
- Flag [PA-PENDING] metrics for human validation with product team
- Replace removed metrics with user-reported ranges when available

---

## Integration with Content Intelligence Workflow

```
┌─────────────────────────────────────────────────┐
│  content-intelligence-dual-page                 │
│  (Extracts 236 insights from transcript)        │
└────────────┬────────────────────────────────────┘
             │
             ├─ Phase 1: Deep Analysis (5 docs) ────┐
             ├─ Phase 2: Page Synthesis (2 docs)    │
             └─ Phase 3: Quality Validation (1 doc) │
                                                     │
                                    Quality Gap: 4.5/10 (85% claims lack attribution)
                                                     │
┌─────────────────────────────────────────────────▼┐
│  evidence-validation ⚡ YOU ARE HERE             │
│  (Validates claims, adds citations)              │
└────────────┬────────────────────────────────────┘
             │
             ├─ 5 Validated Phase 1 docs (8.0+/10)
             └─ 3 Quality reports
                                                     │
┌─────────────────────────────────────────────────▼┐
│  OPTIONAL: Re-run Phase 2 synthesis              │
│  (Use validated Phase 1 as input)                │
│  → Produces higher-quality page strategies       │
└──────────────────────────────────────────────────┘
```

---

## Version History

**v1.0.0** (2025-10-09)
- Initial release
- 6-phase validation process
- Multi-agent parallel processing
- Confidence rating system (4 levels)
- Metrics source classification (4 codes + unverifiable)
- Publication-ready output (8.0+/10 quality)

---

## Support

**Issues/Questions:**
- Workflow not executing: Verify slash command registered (see Installation below)
- Evidence quality concerns: Review checklist.md validation criteria
- Custom analysis needs: Modify workflow.yaml inputs section

**Documentation:**
- Instructions: `instructions.md` (step-by-step execution guide)
- Checklist: `checklist.md` (quality validation criteria)
- Config: `workflow.yaml` (runtime configuration)

---

## Installation

This workflow is automatically available after BMAD installation at:
```
.claude/commands/bmad/custom/workflows/evidence-validation.md
```

**Slash Command:**
```
/bmad:custom:workflows:evidence-validation
```

**To verify installation:**
1. Start new Claude Code chat
2. Type `/bmad:custom`
3. Autocomplete should show `evidence-validation`

---

**Questions about this workflow?** Contact: Cameron
