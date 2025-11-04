# KB Integration - Knowledge Base Integration Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/bmb/skill-factory/workflows/kb-integration/workflow.yaml</critical>
<critical>Communicate in {communication_language} throughout the workflow execution</critical>

<workflow>

<step n="1" goal="Validate inputs and gather context">
<action>Ask user for the path to the SKILL.md file that needs KB integration</action>
<action>Ask user for the path to the knowledge-base directory containing research documents</action>

<action>Verify that SKILL.md file exists and is readable</action>
<action>Verify that knowledge-base directory exists and contains .md files</action>

<action>Read the SKILL.md file to extract metadata from frontmatter:</action>
<action>- Skill name</action>
<action>- Skill description</action>
<action>- Any domain/type indicators (e.g., visual, code, theory)</action>

<action>Count the number of KB documents in the knowledge-base directory</action>

<action>Present validation summary to user:</action>
<action>- SKILL.md path and size</action>
<action>- Knowledge-base path and document count</action>
<action>- Skill metadata extracted</action>

<ask>Does this look correct? [c to continue / path to retry with different paths]</ask>

<note>Store validated paths and metadata for use in subsequent steps</note>
</step>

<step n="2" goal="Analyze SKILL.md structure and identify key concepts">
<action>Parse the SKILL.md file to extract complete structure:</action>
<action>- All section headers (## and ###) with their hierarchical relationships</action>
<action>- Section content (the actual text in each section)</action>
<action>- Current KB references (if any exist)</action>

<action>For each major section in SKILL.md, identify and extract:</action>
<action>- Key concepts mentioned (e.g., "description optimization", "quality validation", "progressive disclosure")</action>
<action>- Topics covered (e.g., "Cialdini's principles", "cognitive load theory", "example construction")</action>
<action>- Frameworks or methodologies referenced (e.g., "RED-GREEN-REFACTOR", "7-dimension scoring")</action>
<action>- Technical terms or domain-specific vocabulary</action>

<action>Create a structure map showing:</action>
<action>- Section hierarchy (which sections are nested under which)</action>
<action>- Concepts per section (what each section discusses)</action>
<action>- Current reference density (which sections already have KB references vs which don't)</action>

<action>Present the structure analysis to user with a summary:</action>
<action>- Total sections found</action>
<action>- Sections with existing KB references</action>
<action>- Sections that could benefit from KB integration</action>
<action>- Key concepts identified across all sections</action>

<ask>Continue to KB document analysis? [c]</ask>

<note>This structure map will be used in Step 4 to match SKILL sections with relevant KB documents</note>
</step>

<step n="3" goal="Process KB documents incrementally in batches of 3 maximum">

<action>Calculate batch processing plan:</action>
<action>- Count total KB documents in knowledge-base directory</action>
<action>- Batch size: 3 documents maximum per iteration</action>
<action>- Calculate total iterations needed (round up: total_docs / 3)</action>

<action>Create persistent manifest file for external working memory:</action>
<action>- Filename: {output_folder}/kb-integration-manifest-{date}.md</action>
<action>- Purpose: Stores all reference blocks permanently, survives context compression</action>
<action>- Benefits: No memory limits, auditable, recoverable if interrupted</action>

<action>Initialize manifest file with header structure:</action>

<critical>Write to {output_folder}/kb-integration-manifest-{date}.md:</critical>

<example>
# KB Integration Manifest

**Workflow**: KB Integration for {skill_name}
**Date**: {date}
**SKILL File**: {skill_md_path}
**KB Directory**: {kb_directory_path}
**Total KB Docs**: {total_count}
**Total Batches**: {batch_count}

---

## Progress Tracker
- Batches Completed: 0 of {batch_count}
- Reference Blocks Generated: 0
- SKILL Sections Enhanced: 0
- KB Docs Processed: 0 of {total_count}

---

## Batch Results
(Reference blocks will be appended as batches complete)

</example>

<note>Manifest file serves as persistent external memory - reference blocks written here after each batch, then read in Step 5</note>

<action>Present batch plan to user:</action>
<action>- Total KB documents: [count]</action>
<action>- Batch size: 3 docs maximum</action>
<action>- Total batches: [count]</action>
<action>- Estimated time per batch: 5-7 minutes</action>

<critical>INCREMENTAL PROCESSING: Process KB docs in small batches, generate references immediately while content is fresh, then let natural context compression happen safely</critical>

<ask>Begin batch processing? [c]</ask>

<!-- BEGIN INCREMENTAL LOOP -->
<step n="3-batch" goal="Process next batch of KB documents" repeat="until-all-kb-docs-processed">

<action>═══════════════════════════════════════</action>
<action>BATCH [current_batch] of [total_batches]</action>
<action>═══════════════════════════════════════</action>

<!-- Sub-step A: Read 3 KB Documents -->
<step n="3a" goal="Read next 3 unprocessed KB documents">

<action>Select next 3 KB documents from knowledge-base directory that haven't been processed yet</action>

<action>For EACH of these 3 documents:</action>

<action>Check document size first (count total lines)</action>

<check if="document <= 2000 lines">
  <action>Read entire document in single call (no offset/limit needed)</action>
</check>

<check if="document > 2000 lines">
  <critical>USE SEGMENTED READING STRATEGY - Never truncate large files!</critical>

  <action>Read document in 2000-line segments:</action>

  <action>Segment 1: Read lines 1-2000 (offset=0, limit=2000)</action>
  <action>- Extract section headers (## and ###) found in this segment</action>
  <action>- Extract topics and concepts from this segment</action>
  <action>- Note: "Processing segment 1 of [estimated_total]"</action>

  <action>Segment 2: Read lines 2001-4000 (offset=2000, limit=2000)</action>
  <action>- Extract additional section headers</action>
  <action>- Extract additional topics and concepts</action>
  <action>- Accumulate into growing picture of document</action>

  <action>Continue reading segments until entire document processed:</action>
  <action>- Segment N: Read remaining lines (offset=N*2000, limit=2000)</action>
  <action>- Track progress: "Segment N of [total]"</action>
  <action>- Build complete section hierarchy across all segments</action>

  <action>Synthesize complete document structure after all segments read:</action>
  <action>- Merge all section headers into unified hierarchy</action>
  <action>- Combine topics from all segments</action>
  <action>- Ensure no content missed (verify total lines processed)</action>

  <note>Segmented reading ensures complete coverage - Read tool has 2000 line default limit, we work around it</note>
</check>

<action>Extract from complete document (whether single-read or segmented):</action>
<action>- Document filename and full path</action>
<action>- Complete section structure (## and ### headers with full hierarchy)</action>
<action>- Main topics covered per section</action>
<action>- Key frameworks, patterns, methodologies documented</action>
<action>- Example types and anti-patterns present</action>
<action>- Document size (total line count, estimated token count)</action>
<action>- If segmented: Note number of segments processed (e.g., "3000 lines read in 2 segments")</action>

<action>Build mini topic index for THIS BATCH ONLY (3 docs):</action>
<action>- Topics → Which of these 3 docs covers them</action>
<action>- Concepts → Specific sections within these 3 docs (#section-name anchors)</action>
<action>- Multi-part relationships (if doc is part1/part2/part3)</action>

<action>Present batch analysis summary:</action>
<action>- Batch [current_batch] of [total_batches]</action>
<action>- Documents in this batch:</action>
<action>  1. [doc1_name] - [topics covered]</action>
<action>  2. [doc2_name] - [topics covered]</action>
<action>  3. [doc3_name] - [topics covered]</action>
<action>- Total sections extracted: [count]</action>
<action>- Key topics in this batch: [topic list]</action>

<note>These 3 KB docs are now fresh in context - we'll map and generate references before context compression happens</note>
</step>

<!-- Sub-step B: Map Relevance for THIS BATCH -->
<step n="3b" goal="Map these 3 KB docs to relevant SKILL sections">

<action>For these 3 KB documents ONLY, perform semantic analysis against SKILL.md structure (from Step 2):</action>

<action>For each SKILL.md section:</action>
<action>- Review the key concepts identified in that section (from Step 2)</action>
<action>- Check if ANY of the 3 current KB docs cover those concepts</action>
<action>- If match found:</action>
<action>  - Identify specific subsections within the KB doc to reference</action>
<action>  - Determine relationship type (deep-dive, examples, validation, theory, anti-patterns)</action>
<action>  - Score relevance (High 95-100%, Medium 75-94%, Low 50-74%)</action>

<action>Generate mapping recommendations for THIS BATCH:</action>

<action>Present mappings grouped by SKILL section:</action>
<action>For each SKILL section that maps to any of these 3 docs:</action>
<action>- SKILL section name and line range</action>
<action>- Key concepts in that section</action>
<action>- Mapping details:</action>
<action>  - KB doc: [doc_name]</action>
<action>  - Relevance score: [score]%</action>
<action>  - Specific sections to reference: [#section-name, #section-name]</action>
<action>  - Relationship type: [deep-dive/examples/validation/theory/anti-patterns]</action>
<action>  - Use case context: "When [doing X], reference [this KB section] for [benefit]"</action>

<ask>Review mappings for Batch [current_batch]:</ask>
<ask>Options:</ask>
<ask>- Approve all mappings [c]</ask>
<ask>- Refine specific mapping [r] + SKILL section name + changes</ask>
<ask>- Skip a mapping [s] + SKILL section name</ask>
<ask>- Add mapping you noticed I missed [a] + details</ask>

<action>Apply user feedback to adjust mappings</action>
<action>Store finalized mappings for reference generation</action>

<note>Mappings finalized for this batch - ready to generate reference blocks</note>
</step>

<!-- Sub-step C: Generate Reference Blocks IMMEDIATELY -->
<step n="3c" goal="Generate reference blocks for this batch while KB content is fresh">

<critical>Generate reference blocks NOW - these 3 KB docs are still fresh in context with full detail available</critical>

<action>Load reference block template from: templates/inline-citation.md</action>

<action>For each approved mapping from Step 3b:</action>
<action>Generate formatted reference block following template structure:</action>

<action>Reference block components:</action>
<action>- Use case context heading (📚 **[Context]:**)</action>
<action>- KB document path with section anchor (required!)</action>
<action>  Format: `/knowledge-base/[domain]/[doc-name].md#[section-anchor]`</action>
<action>- List of specific subsections to reference (2-4 items)</action>
<action>  Include what reader will find in each subsection</action>
<action>- "When to use:" guidance with specific scenarios</action>

<action>Apply formatting best practices:</action>
<action>- Blockquote (>) for visual separation</action>
<action>- 📚 emoji for scanability</action>
<action>- Bold use case heading</action>
<action>- Concise descriptions (1-2 lines per subsection)</action>
<action>- Group related subsections together</action>

<action>Present generated reference blocks for Batch [current_batch]:</action>

<action>Show each reference block with context:</action>
<action>- Target SKILL section: [section name]</action>
<action>- Source KB doc: [doc name]</action>
<action>- Generated reference block:</action>
<example>
[Show complete formatted block]
</example>
<action>- Before/after preview of SKILL section with this reference injected</action>

<ask>Approve reference blocks for Batch [current_batch]?</ask>
<ask>Options:</ask>
<ask>- Approve all blocks [c]</ask>
<ask>- Edit specific block [e] + block number + changes</ask>
<ask>- Regenerate block [r] + block number + guidance</ask>

<action>Apply user feedback to finalize reference blocks</action>

<note>Reference blocks generated with full KB detail - ready to store permanently</note>
</step>

<!-- Sub-step D: Store Blocks Permanently -->
<step n="3d" goal="Write approved reference blocks to manifest file">

<critical>PERSISTENT STORAGE: Write reference blocks to manifest file IMMEDIATELY - survives context compression</critical>

<action>Append batch results to manifest file: {output_folder}/kb-integration-manifest-{date}.md</action>

<action>Write batch header section:</action>

<example>

---

## Batch {batch_number} - Reference Blocks

**Date/Time**: {timestamp}
**Documents Processed:**
1. {doc1_name} ({line_count} lines{segments_note})
2. {doc2_name} ({line_count} lines{segments_note})
3. {doc3_name} ({line_count} lines{segments_note})

**Reference Blocks Generated:** {count}

---
</example>

<action>For EACH reference block generated in this batch:</action>

<action>Write complete block entry to manifest file:</action>

<example>
### Block #{total_block_number}: {target_section_name}

**Metadata:**
- Target Section: "{section_name}" (SKILL.md lines {start}-{end})
- Source KB Doc: {kb_doc_name}
- KB Section Referenced: #{section_anchor}
- Relevance Score: {score}%
- Relationship Type: {type}

**Reference Block Content:**
```markdown
> 📚 **{Use Case Context}:**
> `/knowledge-base/{domain}/{filename}.md#{section-anchor}`
> - {subsection_1}
> - {subsection_2}
> - {subsection_3}
>
> **When to use:** {scenarios}
```

**Integration Details:**
- Current section length: {char_count} chars
- With reference added: {new_char_count} chars
- Estimated token overhead: ~{token_estimate} tokens

---
</example>

<action>Update manifest progress tracker section (replace existing):</action>

<example>
## Progress Tracker
- Batches Completed: {current_batch} of {total_batches}
- Reference Blocks Generated: {total_count}
- SKILL Sections Enhanced: {unique_sections_count}
- KB Docs Processed: {docs_processed} of {total_docs}
- Manifest File Size: ~{file_size}KB
</example>

<action>Mark these 3 KB docs as processed (don't re-read in future batches)</action>

<action>Present batch completion summary to user:</action>
<action>Batch {current_batch} Complete:</action>
<action>- Documents processed: {doc1, doc2, doc3}</action>
<action>- Reference blocks generated: {count}</action>
<action>- Reference blocks written to manifest file</action>
<action>- SKILL sections enhanced: {list}</action>
<action>- Progress: {X}% complete ({processed}/{total} docs)</action>
<action>- Manifest file: {output_folder}/kb-integration-manifest-{date}.md</action>

<note>IMPORTANT: Reference blocks are now stored in external manifest file (not conversation memory). The KB content from these 3 docs can safely be compressed by natural summarization - we no longer need the full doc content in context. Manifest file survives compression.</note>

<check if="more KB documents remaining">
  <action>Continue to next batch</action>
  <ask>Continue to Batch [next_batch]? [c]</ask>
</check>

<check if="all KB documents processed">
  <action>All batches complete - exit incremental loop</action>
  <action>Present final processing summary:</action>
  <action>- Total KB documents processed: [count]</action>
  <action>- Total batches: [count]</action>
  <action>- Total reference blocks generated: [count]</action>
  <action>- Total SKILL sections enhanced: [count]</action>
  <action>- Storage collection contains all approved reference blocks</action>
  <ask>Proceed to decision tree creation (optional)? [c]</ask>
</check>

</step>
<!-- END INCREMENTAL LOOP -->

</step>

<step n="4" goal="Create decision trees for conditional KB loading" optional="true">
<action>Determine if conditional loading guidance is needed based on skill domain/type</action>

<action>Analyze skill metadata and stored reference blocks to identify conditional patterns:</action>
<action>- Review which KB docs were mapped to which SKILL sections (from Step 3 storage)</action>
<action>- Identify domain-specific patterns (visual skills → visual KB, code skills → code KB)</action>
<action>- Are there KB docs specific to certain skill types (e.g., visual skills need visual-patterns KB)?</action>
<action>- Are there prerequisite vs optional KB documents?</action>
<action>- Are there KB docs that should be loaded in specific order?</action>

<check if="conditional patterns identified">
<action>Generate decision tree guidance using this structure:</action>

<example>
## KB Loading Decision Tree

**If creating [skill type]:**
- Priority KB docs: [list with specific sections]
- Optional KB docs: [list with when to use them]
- Skip: [KB docs not relevant to this skill type]

**If optimizing for [specific aspect]:**
- Load first: [foundational KB docs]
- Then: [advanced KB docs]
</example>

<action>Insert decision tree into appropriate section of SKILL.md (typically after main workflow, before KB references section)</action>

<ask>Review generated decision tree. Approve? [c to continue / e to edit]</ask>
</check>

<check if="no conditional patterns identified">
<action>Skip decision tree creation - all KB docs are equally relevant to this skill</action>
</check>

<note>Decision trees are optional but valuable for complex skills with large, diverse KB collections</note>
</step>

<step n="5" goal="Update SKILL.md with contextual KB integration">
<action>Create a backup of the original SKILL.md file before modifications</action>

<action>Retrieve all reference blocks from manifest file:</action>

<critical>Read complete manifest file: {output_folder}/kb-integration-manifest-{date}.md</critical>

<action>Parse manifest file to extract all reference blocks:</action>
<action>- Read all batch sections (Batch 1, Batch 2, ..., Batch N)</action>
<action>- For each block entry, extract:</action>
<action>  - Block number</action>
<action>  - Target section name and line range</action>
<action>  - Source KB document</action>
<action>  - KB section anchor</action>
<action>  - Relevance score</action>
<action>  - Complete reference block markdown content</action>

<action>Organize extracted blocks:</action>
<action>- Group blocks by target SKILL section</action>
<action>- Sort blocks within each section by relevance score (highest first)</action>
<action>- Identify sections with multiple blocks (consolidate if needed)</action>

<note>Manifest file is single source of truth - all reference blocks from all 8 batches are here</note>

<action>Apply KB integration changes to SKILL.md:</action>

<action>1. Inject inline reference blocks:</action>
<action>- For each SKILL.md section that has stored reference blocks</action>
<action>- Insert the formatted reference block(s) after the section's main content</action>
<action>- If multiple blocks for same section, insert all with proper spacing</action>
<action>- Preserve all existing content (add references, don't replace)</action>
<action>- Maintain proper markdown formatting and spacing</action>

<action>2. Update or remove generic KB reference list:</action>
<action>- If SKILL.md has a "Knowledge Base References" section with generic list</action>
<action>- Replace with brief index: "KB references are integrated throughout this skill contextually. For quick reference:"</action>
<action>- Keep a condensed list of all KB docs (1 line per doc) for discovery</action>
<action>- Or remove entirely if inline references provide sufficient navigation</action>

<action>3. Insert decision tree (if created in Step 4):</action>
<action>- Place in logical location (typically before or after main workflow)</action>
<action>- Ensure proper heading hierarchy</action>

<action>4. Verify markdown integrity:</action>
<action>- Check that all headings are properly formatted</action>
<action>- Verify blockquotes render correctly</action>
<action>- Ensure no broken links or malformed paths</action>

<action>Write the updated SKILL.md back to the original file path</action>

<action>Present change summary to user:</action>
<action>- Number of inline references added</action>
<action>- Sections modified</action>
<action>- Original file backed up to: [backup path]</action>
<action>- Changes applied successfully</action>

<ask>Review the updated SKILL.md file. Satisfactory? [c to continue / r to revert to backup]</ask>

<note>Backup is critical - if integration doesn't look right, user can easily revert</note>
</step>

<step n="6" goal="Generate integration report and finalize">
<action>Compile comprehensive integration report with the following sections:</action>

<action>1. Integration Summary:</action>
<action>- SKILL.md path and size (before/after)</action>
<action>- Total KB documents analyzed</action>
<action>- Total inline references added</action>
<action>- Sections enhanced with KB integration</action>
<action>- Manifest file location: {output_folder}/kb-integration-manifest-{date}.md</action>
<action>- Manifest file size: {size}KB ({line_count} lines)</action>

<action>2. Incremental Processing Metrics:</action>
<action>- Total batches processed: [count]</action>
<action>- Average KB docs per batch: [typically 3]</action>
<action>- Average reference blocks generated per batch: [count]</action>
<action>- Batches requiring user refinement: [count]</action>
<action>- Total processing time: [minutes]</action>
<action>- Average time per batch: [minutes]</action>

<action>3. Coverage Analysis:</action>
<action>- Which KB documents were referenced (and how many times each)</action>
<action>- Which KB documents were NOT referenced (unused research)</action>
<action>- Reference density per SKILL section (which sections got most references)</action>
<action>- Coverage balance: Did early-batch docs get equal coverage to late-batch docs?</action>

<action>4. Section-Level Granularity Achievement:</action>
<action>- Percentage of references that include specific subsections (not just doc names)</action>
<action>- Most granular references (best examples of section-level citations)</action>

<action>5. Recommendations:</action>
<action>- Unused KB docs: Should they be integrated or are they truly not relevant?</action>
<action>- Under-referenced sections: SKILL sections that might benefit from more KB integration</action>
<action>- KB gaps: Topics mentioned in SKILL.md that don't have KB coverage (future research areas)</action>

<action>6. Token Impact Estimate:</action>
<action>- Original SKILL.md token count</action>
<action>- Updated SKILL.md token count (with inline references)</action>
<action>- Token overhead added (should be minimal - references are concise)</action>
<action>- Estimated token cost when agent loads relevant KB on-demand</action>
<action>- Context window efficiency: Did incremental processing keep context usage below 80%?</action>

<action>Write integration report to: {integration_report_file}</action>

<action>Present final summary to {user_name} in {communication_language}:</action>

<action>Show report highlights:</action>
<action>- ✅ Integration complete</action>
<action>- ✅ [X] inline references added across [Y] sections</action>
<action>- ✅ [Z] KB documents integrated with section-level granularity</action>
<action>- ⚠️ [N] KB documents unused (see report for details)</action>
<action>- 📊 Token overhead: +[X] tokens to SKILL.md</action>
<action>- 📄 Full report: {integration_report_file}</action>

<action>Provide next steps guidance:</action>
<action>- Test the skill in a fresh Claude Code session</action>
<action>- Verify KB references load on-demand as expected</action>
<action>- Monitor which KB docs actually get loaded during real usage</action>
<action>- Iterate on integration if needed (workflow can be re-run)</action>

<critical>Integration complete! The SKILL.md now has intelligent, contextual KB integration with progressive disclosure architecture.</critical>
</step>

</workflow>
