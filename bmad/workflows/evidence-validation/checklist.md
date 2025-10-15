# Evidence Validation Workflow - Quality Checklist

## Evidence Quality & Sourcing

- [ ] All factual claims have been searched across ALL 4 transcript parts (not just 1-2)
- [ ] Each [VALIDATED] claim includes at least one direct transcript quote
- [ ] Each [INFERRED] claim has clear logical connection documented to supporting evidence
- [ ] Each [STRATEGIC] claim is explicitly labeled as analyst recommendation (not user insight)
- [ ] [ASPIRATIONAL] claims removed from user insights sections or moved to product vision appendix
- [ ] No claims rated [VALIDATED] without supporting transcript quotes
- [ ] Multiple supporting quotes included when 3+ users mentioned same point
- [ ] Evidence search used semantic search (not just keyword matching)

## Citation Format & Completeness

- [ ] Every validated claim includes: Quote + Source + Confidence Rationale
- [ ] Quote text is complete with sufficient context (not snippet fragments)
- [ ] Source location includes: Part number + Section/timestamp when available
- [ ] Speaker identifier included when available (e.g., "Marketing Director", "User A")
- [ ] Confidence rationale explains why rating was assigned
- [ ] Citation format consistent across all 5 documents
- [ ] No uncited claims remain in revised documents
- [ ] Evidence legend added to top of each revised document

## Confidence Rating Accuracy

- [ ] [VALIDATED] used only for direct transcript quotes with clear evidence
- [ ] [INFERRED] used only when logical connection can be explained
- [ ] [STRATEGIC] used only for industry best practices not mentioned by users
- [ ] [ASPIRATIONAL] used only for product roadmap items without user validation
- [ ] No ambiguous confidence ratings (e.g., between VALIDATED and INFERRED)
- [ ] Confidence distribution documented: X% validated, Y% inferred, Z% strategic, W% aspirational
- [ ] Overall confidence skews toward [VALIDATED] (target: >50% of claims)

## Metrics Validation & Source Classification

- [ ] All 28 quantitative metrics from Document 05 classified with source codes
- [ ] [T] Transcript code used only when user directly stated number or estimate
- [ ] [PA] Product Analytics code used when metric requires internal data validation
- [ ] [PA-PENDING] metrics flagged with clear action items for product team
- [ ] [IND] Industry Benchmark code includes publication citation or search rationale
- [ ] [A-EST] Analyst Estimate code includes calculation methodology and assumptions
- [ ] [UNVERIFIABLE] metrics removed entirely from revised documents (not just flagged)
- [ ] Metrics validation report documents all 28 metrics with source investigation details
- [ ] No metrics remain in revised documents without source code tags

## Document Revision Quality

- [ ] Evidence legend added to header of all 5 revised documents (after title, before content)
- [ ] Legend explains all confidence levels: [VALIDATED], [INFERRED], [STRATEGIC], [ASPIRATIONAL]
- [ ] Legend explains all source codes: [T], [PA], [IND], [A-EST]
- [ ] Legend includes validation date and transcript source references
- [ ] All claims tagged with confidence level in section headers
- [ ] Inline citations added for all validated/inferred claims
- [ ] Unverifiable claims either removed or downgraded to [STRATEGIC] recommendations
- [ ] Downgraded claims include rationale explaining why not user-validated
- [ ] Metrics display source codes inline: "metric statement [T]" or "[PA-PENDING]"
- [ ] Document formatting preserved (headings, lists, structure intact)
- [ ] No "TODO" or placeholder text remains in revised documents

## Report Completeness

- [ ] Evidence quality report includes overall quality scores table (5 documents)
- [ ] Evidence quality report calculates confidence distribution (% validated, inferred, strategic, aspirational)
- [ ] Evidence quality report documents key findings: Strengths + Weaknesses
- [ ] Evidence quality report provides actionable recommendations (immediate, short-term, long-term)
- [ ] Evidence quality report shows quality score improvement (4.5/10 → 8.0+/10)
- [ ] Claims-to-evidence mapping table includes all 236 claims
- [ ] Claims mapping includes: Doc ID, Claim ID, Claim Summary, Evidence Type, Confidence, Source Location, Quote Snippet
- [ ] Metrics validation report includes summary statistics (total, verified, pending, removed)
- [ ] Metrics validation report lists all [PA-PENDING] metrics with validation recommendations
- [ ] Metrics validation report lists all removed metrics with investigation details

## Quality Score Achievement

- [ ] Overall evidence quality score achieves 8.0/10 or higher (baseline was 4.5/10)
- [ ] Document 01 (User Research) achieves 8.0+/10 quality score
- [ ] Document 02 (Market Competitive) achieves 8.0+/10 quality score
- [ ] Document 03 (Trends Opportunities) achieves 7.0+/10 quality score (acceptable lower due to strategic nature)
- [ ] Document 04 (Technical Capabilities) achieves 8.0+/10 quality score
- [ ] Document 05 (Quantitative Insights) achieves 6.5+/10 quality score (acceptable lower due to PA-PENDING metrics)
- [ ] Quality improvement documented: Baseline → Achieved (+X.X points, Y% increase)
- [ ] Critical gap addressed: 85% of claims now have transcript source attribution (up from ~15%)

## Output File Structure

- [ ] All revised documents saved to: {validated_folder}/
- [ ] All reports saved to: {validated_folder}/
- [ ] Validated folder contains exactly 8 files: 5 revised documents + 3 reports
- [ ] File naming convention followed: XX-document-name.md format preserved
- [ ] Classification JSON files saved during workflow (for traceability)
- [ ] Evidence mapping JSON files saved during workflow (for traceability)
- [ ] Metrics inventory JSON saved during workflow (for traceability)

## Workflow Execution Quality

- [ ] All 3 parallel classification agents completed successfully (Step 1)
- [ ] All 5 parallel evidence search agents completed successfully (Step 2)
- [ ] Specialized bmm-data-analyst agent completed metrics validation (Step 3)
- [ ] All 5 parallel document revision agents completed successfully (Step 4)
- [ ] Quality reports generated successfully (Step 5)
- [ ] User checkpoints presented at Steps 0, 1, 2, 3, 6 (5 total)
- [ ] User provided approval at each checkpoint (or workflow exited cleanly)
- [ ] No agent errors or failures during execution
- [ ] No missing or corrupted output files
- [ ] Workflow completed end-to-end without manual intervention

## Publication Readiness

- [ ] Revised documents suitable for marketing materials (professional quality)
- [ ] All claims can be defended with transcript evidence (legal risk mitigated)
- [ ] Metrics credibility established through source classification
- [ ] [PA-PENDING] metrics clearly flagged (not published as fact without validation)
- [ ] Strategic recommendations clearly distinguished from user-validated insights
- [ ] Document structure supports easy content extraction (headings, sections, citations)
- [ ] Evidence legends enable readers to assess claim confidence independently
- [ ] Overall quality enables publication without additional validation rounds

## Final Validation

- [ ] **Evidence Quality & Sourcing**
  - Issues: _[List any unresolved issues]_

- [ ] **Citation Format & Completeness**
  - Issues: _[List any unresolved issues]_

- [ ] **Confidence Rating Accuracy**
  - Issues: _[List any unresolved issues]_

- [ ] **Metrics Validation & Source Classification**
  - Issues: _[List any unresolved issues]_

- [ ] **Document Revision Quality**
  - Issues: _[List any unresolved issues]_

- [ ] **Report Completeness**
  - Issues: _[List any unresolved issues]_

- [ ] **Quality Score Achievement**
  - Issues: _[List any unresolved issues]_

- [ ] **Output File Structure**
  - Issues: _[List any unresolved issues]_

- [ ] **Workflow Execution Quality**
  - Issues: _[List any unresolved issues]_

- [ ] **Publication Readiness**
  - Issues: _[List any unresolved issues]_

---

## Quality Score Calculation Guide

**Evidence Quality Score Formula (per document):**
- [VALIDATED] claims: 10 points each
- [INFERRED] claims: 7 points each
- [STRATEGIC] claims: 4 points each
- [ASPIRATIONAL] claims: 0 points each (removed or flagged)

**Document Score:** (Sum of claim points) / (Total claims × 10) × 10

**Overall Score:** Average of all 5 document scores

**Target:** 8.0+/10 for publication readiness
**Baseline:** 4.5/10 (pre-validation)
**Minimum Improvement:** +3.5 points

---

## Validation Completion

**Validator Name:** ___________________________
**Validation Date:** ___________________________
**Overall Assessment:** ☐ **PASS** | ☐ **CONDITIONAL PASS** (issues listed above) | ☐ **FAIL** (requires rework)

**Signature:** ___________________________
