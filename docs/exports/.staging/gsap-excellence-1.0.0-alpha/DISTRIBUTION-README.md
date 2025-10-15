# gsap-excellence Module - Distribution Package

**Version:** 1.0.0-alpha
**Export Date:** 2025-10-12
**Exported By:** Cameron

## Description

gsap-excellence module for premium GSAP work

Fight AI mediocrity with premium GSAP animations through specialized agents and multi-source research workflows. This module provides a Film/Animation Studio Crew themed set of agents that follow the "Optimize, Don't Satisfice" philosophy.

## Module Contents

- **Agents:** 5 agent files
  - gsap-director (Lead agent, orchestration, creative ideation)
  - gsap-cinematographer (Research specialist with MCP integration)
  - gsap-vfx (Implementation specialist)
  - gsap-editor (Debugging and refinement)
  - gsap-tech-director (Performance and testing)

- **Workflows:** 8 workflow folders
  - creative-ideation (Signature workflow)
  - implement-from-pattern (Quick implementation)
  - research-gsap-pattern (Deep research)
  - setup-gsap-project (Project initialization)
  - animation-production (Full pipeline)
  - debug-animation (Fix animations)
  - optimize-performance (Performance profiling)
  - refine-timing (Polish timing)

- **Additional:** Pattern library, data files, templates

## Requirements

### BMAD Core Version
- **Minimum:** 6.0.0-alpha.0 or higher
- **Tested:** 6.0.0-alpha.0

### Dependencies
- **BMAD Modules:** core

### External Tools (REQUIRED)
This module requires the following MCP servers to be configured:

1. **Archon MCP** (Required)
   - Purpose: GSAP documentation and code examples via RAG
   - Tools: rag_search_knowledge_base, rag_search_code_examples, rag_get_available_sources

2. **Context7 MCP** (Required)
   - Purpose: Latest GSAP API documentation
   - Tools: resolve-library-id, get-library-docs

3. **Perplexity MCP** (Required)
   - Purpose: Premium animation examples and trends
   - Tools: perplexity_ask, perplexity_reason, perplexity_research

4. **Chrome DevTools MCP** (Required)
   - Purpose: Visual validation and performance testing
   - Tools: take_screenshot, performance_start_trace, emulate_cpu, emulate_network

**Note:** The module will not function without these MCP servers properly configured.

## Installation Instructions

### Method 1: Manual Installation

1. Extract this archive to your project root:
   ```bash
   tar -xzf gsap-excellence-v1.0.0-alpha-2025-10-12.tar.gz
   ```

2. The module will be extracted to `bmad/gsap-excellence/`

3. Move to your project's bmad directory:
   ```bash
   # From extraction location
   mv bmad/gsap-excellence /path/to/your/project/bmad/
   ```

4. Run the BMAD installer to register the module:
   - Navigate to your project
   - Run BMAD installer
   - Select "Install Module" or "Scan for Modules"

### Method 2: Using Import Workflow (if available)

If your BMAD installation includes the BMad Builder (bmb) module:

```bash
# In BMAD-enabled project with bmb module
/bmad:bmb:agents:bmad-builder
# Select: *import
# Follow prompts and provide the archive path
```

### Method 3: Direct Extraction to Project

```bash
# Extract archive
tar -xzf gsap-excellence-v1.0.0-alpha-2025-10-12.tar.gz

# Move to project bmad directory
cp -r bmad/gsap-excellence /path/to/your/project/bmad/

# Update project manifest
# Add "gsap-excellence" to bmad/_cfg/manifest.yaml under modules list

# Re-run BMAD installer in your project
cd /path/to/your/project
[run BMAD installer]
```

## Post-Installation Configuration

After installation, you MUST configure the required MCP servers:

1. **Configure MCP Servers** in your Claude Code or IDE settings
2. **Verify MCP Tools Available** - Test that all 4 required MCP servers are accessible
3. **Review Module README** - See `bmad/gsap-excellence/README.md` for detailed usage
4. **Update config.yaml** - Customize user_name and output_folder if needed

## Verification

After installation, verify the module is available:

1. Check `bmad/_cfg/manifest.yaml` includes "gsap-excellence"
2. Agent commands should be available via slash commands
3. Workflows should be accessible through the BMAD workflow system
4. Verify all 4 MCP servers are responding to tool calls

Test command:
```bash
# In Claude Code with BMAD
/bmad:gsap-excellence:agents:gsap-director
```

## Module Structure

```
bmad/gsap-excellence/
├── agents/                     # 5 specialized agents
│   ├── gsap-director.agent.yaml
│   ├── gsap-cinematographer.agent.yaml
│   ├── gsap-vfx.agent.yaml
│   ├── gsap-editor.agent.yaml
│   └── gsap-tech-director.agent.yaml
├── workflows/                  # 8 workflow pipelines
│   ├── creative-ideation/
│   ├── implement-from-pattern/
│   ├── research-gsap-pattern/
│   ├── setup-gsap-project/
│   ├── animation-production/
│   ├── debug-animation/
│   ├── optimize-performance/
│   └── refine-timing/
├── patterns/                   # Animation pattern library
├── data/                      # Module data files
├── templates/                 # Code templates
├── tasks/                     # Reusable tasks
├── config.yaml               # Module configuration
├── README.md                 # Full documentation
└── BUILD-SESSION-SUMMARY.md  # Development history
```

## Documentation

See the module's README.md for:
- Detailed agent descriptions and personalities
- Workflow usage examples
- MCP integration guide
- Animation quality standards
- Performance benchmarks
- Troubleshooting guide

## Support

For issues or questions:
- Check module README.md for detailed documentation
- Review BMAD core documentation
- Verify all MCP servers are properly configured
- Contact: Cameron

## License

MIT

## Credits

**Author:** Cameron
**Module Philosophy:** Optimize, Don't Satisfice
**Theme:** Film/Animation Studio Crew
**Mission:** Fight AI mediocrity, achieve animation excellence

---

*Generated by BMAD Export Module Workflow v1.0*
*Package created: 2025-10-12*
