# Content Intelligence Dual-Page Extraction Workflow

**Version:** 1.0.0
**Author:** BMad Master
**Type:** Action Workflow (Multi-Agent Orchestration)

## Overview

A premium, reusable workflow that extracts actionable content insights from long-form transcripts for multiple pages using specialized AI agents working in parallel. Originally created to analyze a 6,163-line Gemini transcript for dual-page content strategy (AI Briefing Engine + Studios pages).

## What It Does

This workflow orchestrates **8 specialized agents** across **3 phases** to:

1. **Deep Extract** - 5 agents analyze transcript parts through specialized lenses
2. **Synthesize** - 2 agents create page-specific content strategies
3. **Validate** - 1 agent ensures quality and actionability

**Output:** 9 structured, evidence-based documents ready for immediate implementation.

## When to Use This

- **Long-form content analysis** (transcripts, interviews, conversations)
- **Multi-page content strategy development** (extracting insights for 2+ pages)
- **Evidence-based content planning** (need source quotes and proof points)
- **Competitive intelligence** (analyzing market insights from conversations)
- **User research synthesis** (extracting personas, pain points, value props)

## How to Use

### 1. Prepare Your Transcript

Split your long-form content into **4 thematic parts** (recommended):
- Part 1: Concept/Introduction
- Part 2: Main Content/Process
- Part 3: Technical Details/Examples
- Part 4: Conclusion/Applications

Save as markdown files in a dedicated folder (e.g., `docs/transcript-parts/`).

### 2. Configure the Workflow

Edit `workflow.yaml` to set:

```yaml
# Update transcript part paths
transcript_parts:
  part_1: '{project-root}/docs/your-transcript-parts/part-1.md'
  part_2: '{project-root}/docs/your-transcript-parts/part-2.md'
  part_3: '{project-root}/docs/your-transcript-parts/part-3.md'
  part_4: '{project-root}/docs/your-transcript-parts/part-4.md'

# Update page targets (your specific pages)
page_targets:
  - name: 'page-one'
    label: 'Page One Name'
    tags: ['Page One', 'Both']
  - name: 'page-two'
    label: 'Page Two Name'
    tags: ['Page Two', 'Both']

# Update output location (optional)
output_base: '{output_folder}/insights/your-analysis-name'
```

### 3. Run the Workflow

From BMad Master or any agent:

```
workflow content-intelligence-dual-page
```

Or directly reference the workflow path:

```
Execute workflow: bmad/workflows/content-intelligence-dual-page/workflow.yaml
```

### 4. Review Outputs

Navigate to your output folder (default: `docs/insights/[analysis-name]/`):

```
📁 output_folder/
├── README.md (Start here - executive summary & navigation)
├── phase1-extractions/ (5 detailed analysis documents)
├── phase2-strategies/ (2 page-specific content strategies)
└── phase3-validation/ (Quality review & recommendations)
```

## Output Documents

### Phase 1: Extractions (5 documents)
1. **User Research Insights** - Personas, pain points, value props
2. **Market & Competitive Insights** - Positioning, differentiation
3. **Trend & Opportunity Insights** - Emerging opportunities, signals
4. **Technical Capability Insights** - Stack, process, sophistication
5. **Quantitative Insights** - Metrics, timelines, ROI signals

### Phase 2: Strategies (2 documents)
6. **Page One Content Strategy** - Complete content plan with messaging
7. **Page Two Content Strategy** - Complete content plan with messaging

### Phase 3: Validation (1 document)
8. **Quality Review & Recommendations** - Validation, gaps, next steps

### Bonus Document
9. **README.md** - Executive summary and navigation guide

## Key Features

### Evidence-Based Analysis
Every insight includes source quotes from the transcript for verification.

### Page-Specific Tagging
All Phase 1 insights are tagged:
- `[Page One]` - Specific to first page
- `[Page Two]` - Specific to second page
- `[Both]` - Applies to both pages
- `[General]` - Platform-wide insights

### Parallel Processing
Agents run simultaneously for fast execution (~15-20 minutes total).

### Quality Validation
Built-in review phase ensures completeness and actionability.

### Fully Reusable
Works for any long-form content intelligence needs - just update `workflow.yaml`.

## Customization Options

### Change Number of Pages
Edit `page_targets` in `workflow.yaml` - supports 2+ pages.

### Add/Remove Agents
Modify the `agents` section in `workflow.yaml` to add specialized analysis.

### Adjust Agent Focus
Edit agent missions in `instructions.md` to refine extraction criteria.

### Change Output Structure
Modify `phase1_output`, `phase2_output`, `phase3_output` paths in `workflow.yaml`.

## Tips for Best Results

### Transcript Preparation
- **Split thematically** (not just by line count) for better context preservation
- **Label parts clearly** so agents understand the content flow
- **Keep markdown formatting** for readability

### Agent Instructions
- **Be specific** about what to extract in each phase
- **Provide examples** of desired output format
- **Set expectations** for evidence requirements

### Review Process
- **Start with Phase 2** strategies (most actionable)
- **Reference Phase 1** for detailed evidence
- **Use Phase 3** to prioritize implementation

## Troubleshooting

### Agents produce incomplete output
- Check that all transcript parts are readable
- Verify file paths in `workflow.yaml` are correct
- Ensure agents have clear extraction criteria

### Missing page tags
- Review agent missions in `instructions.md`
- Ensure tagging instructions are explicit
- Check that page names match `page_targets` in `workflow.yaml`

### Output files not generated
- Verify output directories exist or can be created
- Check file permissions
- Review error messages from workflow execution

## Example Use Cases

### Marketing Content Strategy
Split customer interview transcripts to generate content for multiple landing pages.

### Product Documentation
Analyze engineering discussions to create docs for different user personas.

### Competitive Analysis
Process competitor content to extract insights for multiple product pages.

### User Research Synthesis
Convert user interviews into actionable content strategies per feature.

## Workflow Metadata

- **Execution Time:** ~15-20 minutes (with parallel processing)
- **Agent Count:** 8 (5 extractors + 2 synthesizers + 1 validator)
- **Output Files:** 9 structured markdown documents
- **Reusability:** High - works for any long-form content
- **Maintenance:** Low - stable agent configuration

## Credits

Created by **BMad Master** as a premium reusable workflow for the BMAD Method v6.0.0-alpha.0.

Originally designed for Cre8tive AI's dual-page content intelligence extraction from a 6,163-line Gemini production transcript.

---

**Questions or Issues?**
Review `instructions.md` for detailed agent orchestration logic.
Check `checklist.md` for quality validation criteria.
