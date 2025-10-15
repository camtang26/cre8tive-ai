# Content Intelligence Dual-Page Extraction - Workflow Instructions

<critical>The workflow execution engine is governed by: {project_root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/workflows/content-intelligence-dual-page/workflow.yaml</critical>

<workflow>

<step n="0" goal="Initialize workflow and verify inputs">
<action>Create output directories if they don't exist</action>
<action>Verify all 4 transcript part files exist and are readable</action>
<action>Display summary: Total transcript size, page targets, agent count</action>
<ask>Confirm ready to proceed with multi-agent analysis? [y/n]</ask>
</step>

<step n="1" goal="Phase 1 - Parallel Deep Analysis (5 Agents)">
<critical>This phase runs 5 specialized agents IN PARALLEL to analyze all transcript parts</critical>

<action>Display Phase 1 overview:
- 5 agents will analyze 4 transcript parts simultaneously
- Each agent extracts insights through their specialized lens
- All findings must be tagged: [Briefing Engine], [Studios], [Both], or [General]
- Include source quotes as evidence
</action>

<substep n="1a" title="Launch User Research Agent">
<action>Invoke Task agent with bmm-user-researcher</action>
<action>Agent mission: "Analyze all 4 transcript parts ({transcript_part_1} through {transcript_part_4}) and extract:
- User/customer personas and psychographics
- Pain points and friction areas
- Value propositions that resonate
- Objections and concerns
- Desires and aspirations

For EACH insight, tag with:
- [Briefing Engine] if it relates to the AI briefing/storyboard generation platform
- [Studios] if it relates to AI media production services
- [Both] if it applies to both pages
- [General] if it's platform-wide

Include source quotes from transcript as evidence.

Output to: {phase1_output}/01-user-research-insights.md"</action>
</substep>

<substep n="1b" title="Launch Market Research Agent">
<action>Invoke Task agent with bmm-market-researcher</action>
<action>Agent mission: "Analyze all 4 transcript parts ({transcript_part_1} through {transcript_part_4}) and extract:
- Competitive positioning insights
- Differentiation factors
- Market context and dynamics
- Client psychology and decision factors
- Proof points and credibility signals

For EACH insight, tag with: [Briefing Engine], [Studios], [Both], or [General]

Include source quotes from transcript as evidence.

Output to: {phase1_output}/02-market-competitive-insights.md"</action>
</substep>

<substep n="1c" title="Launch Trend Spotter Agent">
<action>Invoke Task agent with bmm-trend-spotter</action>
<action>Agent mission: "Analyze all 4 transcript parts ({transcript_part_1} through {transcript_part_4}) and extract:
- Emerging opportunities in AI media
- Industry signals and weak signals
- Innovation areas and future trends
- Technology evolution insights (e.g., pixel congruency theory)
- Market disruption indicators

For EACH insight, tag with: [Briefing Engine], [Studios], [Both], or [General]

Include source quotes from transcript as evidence.

Output to: {phase1_output}/03-trend-opportunity-insights.md"</action>
</substep>

<substep n="1d" title="Launch Technical Evaluator Agent">
<action>Invoke Task agent with bmm-technical-evaluator</action>
<action>Agent mission: "Analyze all 4 transcript parts ({transcript_part_1} through {transcript_part_4}) and extract:
- Technical capabilities demonstrated
- AI/media technology stack insights
- Process sophistication and workflow quality
- Creative production expertise
- Technical differentiation factors

For EACH insight, tag with: [Briefing Engine], [Studios], [Both], or [General]

Include source quotes from transcript as evidence.

Output to: {phase1_output}/04-technical-capability-insights.md"</action>
</substep>

<substep n="1e" title="Launch Data Analyst Agent">
<action>Invoke Task agent with bmm-data-analyst</action>
<action>Agent mission: "Analyze all 4 transcript parts ({transcript_part_1} through {transcript_part_4}) and extract:
- Quantitative insights (timelines, metrics, conversions)
- Performance indicators mentioned
- ROI signals and value metrics
- Data-driven decision insights
- Statistical observations

For EACH insight, tag with: [Briefing Engine], [Studios], [Both], or [General]

Include source quotes from transcript as evidence.

Output to: {phase1_output}/05-quantitative-insights.md"</action>
</substep>

<action>Wait for all 5 agents to complete Phase 1 analysis</action>
<action>Display Phase 1 completion summary: List all 5 output files generated</action>
<ask>Review Phase 1 extraction documents. Proceed to Phase 2 synthesis? [y/n]</ask>
</step>

<step n="2" goal="Phase 2 - Page-Specific Synthesis (2 Agents in Parallel)">
<critical>This phase synthesizes Phase 1 findings into content strategies for each page</critical>

<action>Display Phase 2 overview:
- 2 synthesis agents will work in parallel
- Each creates a comprehensive content strategy for their assigned page
- Strategies include: messaging, value props, proof points, objection handling
</action>

<substep n="2a" title="Launch Briefing Engine Synthesizer">
<action>Invoke Task agent with general-purpose agent configured as synthesizer</action>
<action>Agent mission: "Create a comprehensive content strategy for the AI Briefing Engine page.

INPUT SOURCES:
- Read ALL 5 Phase 1 extraction documents from {phase1_output}/
- Filter for insights tagged: [Briefing Engine] or [Both]

OUTPUT REQUIREMENTS:
Create {phase2_output}/briefing-engine-content-strategy.md with these sections:

## Executive Summary
Brief overview of key insights and recommended content approach

## Target Audience Insights
- Personas and psychographics
- Pain points specific to storyboard/brief generation
- Decision factors

## Value Propositions
- Primary value props (ranked by importance)
- Supporting evidence from transcript
- Differentiation factors

## Messaging Framework
- Hero messaging
- Supporting messages
- Proof points and credibility signals

## Objection Handling
- Common objections identified
- Recommended responses
- Trust-building elements

## Content Recommendations
- Page structure suggestions
- Key sections to include
- Interactive elements to consider
- Social proof opportunities

## Cross-Cutting Themes
- Insights from [Both] tag that apply here
- Platform-wide strengths to emphasize

All recommendations must be evidence-based with source quotes."</action>
</substep>

<substep n="2b" title="Launch Studios Synthesizer">
<action>Invoke Task agent with general-purpose agent configured as synthesizer</action>
<action>Agent mission: "Create a comprehensive content strategy for the Studios (AI Media Production) page.

INPUT SOURCES:
- Read ALL 5 Phase 1 extraction documents from {phase1_output}/
- Filter for insights tagged: [Studios] or [Both]

OUTPUT REQUIREMENTS:
Create {phase2_output}/studios-content-strategy.md with these sections:

## Executive Summary
Brief overview of key insights and recommended content approach

## Target Audience Insights
- Personas and psychographics
- Pain points specific to AI media production
- Decision factors

## Service Positioning
- Core service offerings highlighted in transcript
- Differentiation from traditional production
- Technical capabilities to showcase

## Expertise Proof Points
- Production sophistication demonstrated
- AI technology mastery
- Creative process insights
- Client psychology understanding

## Messaging Framework
- Hero messaging
- Supporting messages
- Proof points and credibility signals

## Portfolio & Case Study Strategy
- How Dubai Harbour/Nuns with Guns examples were positioned
- Service versatility demonstration
- Quality evolution story (old tech vs new)

## Objection Handling
- Common objections identified
- Recommended responses
- Trust-building elements

## Content Recommendations
- Page structure suggestions
- Key sections to include
- Interactive elements to consider
- Social proof opportunities

## Cross-Cutting Themes
- Insights from [Both] tag that apply here
- Platform-wide strengths to emphasize

All recommendations must be evidence-based with source quotes."</action>
</substep>

<action>Wait for both synthesis agents to complete Phase 2</action>
<action>Display Phase 2 completion summary: List both strategy documents generated</action>
<ask>Review Phase 2 content strategy documents. Proceed to Phase 3 validation? [y/n]</ask>
</step>

<step n="3" goal="Phase 3 - Quality Validation">
<critical>This phase validates all outputs for completeness and actionability</critical>

<action>Display Phase 3 overview:
- Document reviewer will validate all Phase 1 and Phase 2 outputs
- Check for coherence, completeness, evidence quality
- Provide actionability assessment
</action>

<action>Invoke Task agent with bmm-document-reviewer</action>
<action>Agent mission: "Validate the complete content intelligence analysis.

REVIEW SCOPE:
- All 5 Phase 1 extraction documents from {phase1_output}/
- Both Phase 2 strategy documents from {phase2_output}/

VALIDATION CRITERIA:
1. **Completeness**: Are all required sections present and substantive?
2. **Coherence**: Do insights connect logically? Any contradictions?
3. **Evidence Quality**: Are claims supported by transcript quotes?
4. **Actionability**: Can these strategies be implemented immediately?
5. **Coverage**: Are both pages adequately addressed?

OUTPUT REQUIREMENTS:
Create {phase3_output}/quality-review-recommendations.md with:

## Overall Assessment
- Quality score (1-10) for each document
- Confidence level in recommendations

## Strengths Identified
- What was done exceptionally well
- Strongest insights extracted

## Gaps or Weaknesses
- Missing information or analysis
- Unsupported claims
- Areas needing deeper exploration

## Prioritized Recommendations
1. Immediate actions (quick wins)
2. Short-term enhancements
3. Long-term research needs

## Next Steps
- Suggested follow-up analyses
- Additional data sources to consider
- Implementation priorities

Provide specific, actionable feedback."</action>

<action>Display Phase 3 completion: Validation report generated</action>
</step>

<step n="4" goal="Generate Executive Summary">
<action>Create {output_base}/README.md with:
- Workflow execution summary
- Total documents generated (list with descriptions)
- Key findings overview
- Navigation guide to all outputs
- Date and workflow version
</action>

<action>Display final deliverables:
```
📁 docs/insights/gemini-transcript-analysis/
├── README.md (Executive summary & navigation)
├── phase1-extractions/
│   ├── 01-user-research-insights.md
│   ├── 02-market-competitive-insights.md
│   ├── 03-trend-opportunity-insights.md
│   ├── 04-technical-capability-insights.md
│   └── 05-quantitative-insights.md
├── phase2-strategies/
│   ├── briefing-engine-content-strategy.md
│   └── studios-content-strategy.md
└── phase3-validation/
    └── quality-review-recommendations.md
```
Total: 9 structured, actionable documents
</action>
</step>

<step n="5" goal="Workflow Completion">
<action>Display completion message:
"✅ Content Intelligence Dual-Page Extraction Complete!

📊 **Results:**
- 5 specialized extractions completed
- 2 page-specific strategies created
- 1 quality validation report generated
- All outputs saved to: {output_base}/

🎯 **Next Steps:**
1. Review README.md for navigation
2. Start with phase2-strategies/ for actionable insights
3. Reference phase1-extractions/ for detailed evidence
4. Check phase3-validation/ for implementation priorities

💡 **Reusability:**
This workflow can be reused for ANY long-form content intelligence needs.
Simply update transcript_parts in workflow.yaml and run again."
</action>

<ask>Would you like to execute this workflow on another transcript? [y/n]</ask>
</step>

</workflow>
