# Migration Guide: v1 → v2
**GSAP Excellence Engine Migration**

---

## Overview

**v1:** Manual routing system with 5 agents
**v2:** Automated orchestration with 1 agent

**Migration Strategy:** Clean separation (not in-place upgrade)
- v1 preserved at `bmad/gsap-excellence/`
- v2 created at `bmad/gsap-excellence-v2/`
- Both versions can coexist

---

## What's Different

### Agent Architecture
```
v1: 5 Agents (Director, Cinematographer, VFX Artist, Editor, Tech Director)
v2: 1 Agent (GSAP Studio)

v1 Usage: Manual routing between agents
v2 Usage: Single agent, automated orchestration
```

### Workflow Execution
```
v1: User manually coordinates agent handoffs
v2: Task tool handles orchestration automatically

v1 Steps: 10-15 manual actions per animation
v2 Steps: 1 action (initial request)
```

### Pattern Library
```
v1: Patterns exist but undiscoverable
v2: Patterns searchable, browsable, recommendable

v1: Must know pattern filename
v2: Can search "parallax" and see matches
```

### Communication Style
```
v1: 40% personality, 60% substance
v2: 5% personality, 95% substance

v1: Long film director narratives
v2: Results-focused, concise
```

---

## Migration Steps

### Step 1: Verify v2 Installation

```bash
# Check v2 structure exists
ls -la bmad/gsap-excellence-v2/

# Should see:
# - agents/gsap-studio.md
# - workflows/produce-animation/
# - patterns/ (12 .pattern.yaml files)
# - config.yaml
# - README.md
```

### Step 2: Update MCP Server Configuration

v2 requires same MCPs as v1, but with better error handling:

**Required:**
- Archon MCP
- Context7 MCP
- Perplexity MCP

**Optional:**
- Chrome DevTools MCP

Check status:
```
/gsap-studio → *status
```

### Step 3: Test Pattern Library

```bash
# Verify patterns copied
ls bmad/gsap-excellence-v2/patterns/*.pattern.yaml | wc -l
# Should show: 12

# Test pattern search
/gsap-studio → *patterns → search "parallax"
```

### Step 4: Test Flagship Workflow

```
/gsap-studio → *produce

Test animation request:
"Simple hover lift animation for a card component"

Expected:
- Research completes automatically
- Implementation generated
- Validation performed
- Complete package delivered

Time: ~15-20 minutes
Your actions: 1 (initial request)
```

---

## Command Mapping

### v1 → v2 Equivalent Commands

| v1 Command | v2 Equivalent | Notes |
|------------|---------------|-------|
| `/gsap-director` → `*plan` | `/gsap-studio` → `*produce` | Complete pipeline |
| `/gsap-cinematographer` → `*research` | `/gsap-studio` → `*research` | Deep research |
| `/gsap-vfx` → `*implement` | `/gsap-studio` → `*implement` | Implementation |
| `/gsap-editor` → `*debug` | `/gsap-studio` → `*optimize` | Debugging/optimization |
| `/gsap-tech-director` → `*profile` | `/gsap-studio` → `*optimize` | Performance profiling |
| No equivalent in v1 | `/gsap-studio` → `*patterns` | Pattern library browsing |

### Workflow Comparison

**v1 Creative Ideation:**
```
/gsap-director → *ideate
[Manual coordination]
[User copies concepts]
[User switches to VFX Artist]
```

**v2 Complete Production:**
```
/gsap-studio → *produce
[Automated research]
[Automated implementation]
[Automated validation]
[Complete delivery]
```

---

## Breaking Changes

### Agent Invocation
```
v1: /gsap-director, /gsap-cinematographer, etc.
v2: /gsap-studio (single agent)

Action: Update your workflows to use /gsap-studio
```

### Workflow Paths
```
v1: bmad/gsap-excellence/workflows/
v2: bmad/gsap-excellence-v2/workflows/

Action: Update any scripts referencing workflow paths
```

### Pattern Library Location
```
v1: bmad/gsap-excellence/patterns/
v2: bmad/gsap-excellence-v2/patterns/

Action: Patterns copied to v2, no action needed
```

### Menu Commands
```
v1: Director had *guide, *plan, *crew, *review, etc.
v2: Studio has *research, *implement, *optimize, *produce, *patterns

Action: Use new command names
```

---

## Preserved Features

### Pattern Library Content
✅ All 12 patterns preserved exactly
✅ Same YAML format
✅ No code changes needed

### MCP Server Integration
✅ Same MCP servers required
✅ Same tool calls (just better handled)
✅ No MCP configuration changes needed

### Quality Standards
✅ Same 60fps target
✅ Same accessibility requirements
✅ Same browser support matrix

### Output Format
✅ Same markdown documentation
✅ Same code structure
✅ Same integration guides

---

## Testing Checklist

After migration, verify:

- [ ] `/gsap-studio` loads successfully
- [ ] Config file loads (check greeting uses "Cameron")
- [ ] *status command shows MCP server availability
- [ ] *patterns command shows 12 patterns
- [ ] *patterns search works (search "scroll")
- [ ] *research workflow executes
- [ ] *implement workflow executes
- [ ] *produce workflow orchestrates automatically
- [ ] Pattern library browseable
- [ ] Output files save correctly

---

## Rollback Plan

If v2 doesn't work as expected:

1. **v1 is still available:**
   ```bash
   # v1 location unchanged
   bmad/gsap-excellence/
   ```

2. **Switch back to v1:**
   ```
   /gsap-director  # Still works
   ```

3. **Report issues:**
   - What workflow failed?
   - Which MCP servers were available?
   - What error messages appeared?

4. **v2 can be safely removed:**
   ```bash
   # If needed
   rm -rf bmad/gsap-excellence-v2/
   ```

---

## Common Migration Issues

### Issue: "Config file not found"
**Cause:** Config path incorrect
**Solution:**
```bash
# Verify config exists
cat bmad/gsap-excellence-v2/config.yaml

# Check module_root in agent file matches
```

### Issue: "Pattern library empty"
**Cause:** Patterns not copied
**Solution:**
```bash
# Copy patterns from v1
cp bmad/gsap-excellence/patterns/*.pattern.yaml \
   bmad/gsap-excellence-v2/patterns/
```

### Issue: "MCP tools not working"
**Cause:** MCP servers not enabled
**Solution:**
- Check Claude Code settings
- Enable required MCPs
- Test with *status command

### Issue: "Task tool not orchestrating"
**Cause:** Workflow instructions not being executed properly
**Solution:**
- Verify workflow.xml loaded correctly
- Check Claude Code version supports Task tool
- Test with simpler workflow first (*research)

---

## Performance Comparison

### v1 Metrics (Measured)
- Time to complete animation: 45-90+ minutes
- Manual agent switches: 4-5
- User actions required: 10-15
- Context switching overhead: 10-15 minutes
- Success rate: ~20% work first time

### v2 Targets
- Time to complete animation: 30-60 minutes
- Manual agent switches: 0
- User actions required: 1-2
- Context switching overhead: 0
- Success rate: 60%+ work first time

### Expected Improvements
- **40-50% time savings** from elimination of manual overhead
- **3x improvement in first-time success** from better implementation
- **Zero context switching cost** from single-agent design
- **Better user experience** from results-focused communication

---

## Migration Timeline

**Recommended Approach:**

**Week 1:**
- Install v2 alongside v1
- Test basic functionality (*help, *patterns, *status)
- Try simple workflow (*research on known topic)

**Week 2:**
- Test flagship workflow (*produce with simple animation)
- Compare results to v1 experience
- Validate quality and performance

**Week 3:**
- Use v2 for real project animations
- Collect feedback and issues
- Refine workflows as needed

**Week 4+:**
- Primary usage shifts to v2
- v1 kept as reference
- Contribute successful patterns to v2 library

---

## Support During Migration

**Documentation:**
- v2 Architecture: `docs/gsap-excellence-v2-architecture.md`
- Critical Analysis: `docs/gsap-excellence-critical-analysis-2025-10-14.md`
- v2 README: `bmad/gsap-excellence-v2/README.md`

**Testing:**
- Start with *patterns (low risk)
- Move to *research (medium risk)
- Then *implement (higher risk)
- Finally *produce (complete test)

**Feedback:**
- Document what works well
- Note any issues or confusion
- Track time savings (or lack thereof)
- Compare quality of outputs

---

## Success Criteria

Migration is successful when:

- [ ] v2 agent loads and responds correctly
- [ ] Pattern library is discoverable and useful
- [ ] *produce workflow completes without manual intervention
- [ ] Time to result is faster than v1
- [ ] Code quality meets or exceeds v1 output
- [ ] User experience feels simpler, not more complex
- [ ] "This actually saves time" vs "adds complexity"

---

🎬 **Ready to migrate? Start with `/gsap-studio` → `*help`**

*That's a wrap on the migration guide!*
