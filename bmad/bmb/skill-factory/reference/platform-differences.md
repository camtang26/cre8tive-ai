# Claude Skills Platform Differences

Claude Skills are available on three surfaces: Claude.ai, Claude API, and Claude Code. Each has different capabilities, limitations, and distribution models.

---

## Quick Comparison

| Feature | Claude.ai | Claude API | Claude Code |
|---------|-----------|------------|-------------|
| **Pre-built Skills** | ✅ Yes (PDF, DOCX, XLSX, PPTX) | ✅ Yes (via skill_id) | ❌ No |
| **Custom Skills** | ✅ ZIP upload | ✅ API endpoints | ✅ Filesystem |
| **Sharing** | ❌ Individual only | ✅ Workspace-wide | ✅ Git/plugins |
| **Distribution** | Manual ZIP upload | Programmatic API | Git clone/pull |
| **Filesystem Access** | ❌ Limited | ❌ Limited | ✅ Full |
| **Code Execution** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Tool Restrictions** | ❌ No | ❌ No | ✅ Yes (allowed-tools) |
| **Max Skills/Request** | Unknown | 8 skills | Unlimited |
| **Beta Required** | No | Yes | No |

---

## Claude.ai

### Overview
Web interface at claude.ai with built-in skills support.

### Availability
- Pro, Max, Team, and Enterprise plans
- Settings → Features → Skills

### Pre-Built Skills

**Document Skills** (available now):
- **PDF**: Extract text/tables, create PDFs, merge/split, fill forms
- **DOCX**: Create/edit Word documents, tracked changes, comments
- **XLSX**: Excel with formulas, formatting, data analysis
- **PPTX**: PowerPoint presentations with layouts, charts

**Creative Skills** (from Anthropic examples):
- Algorithmic art (p5.js)
- Webapp testing (Playwright)
- Brand guidelines
- Internal communications templates
- Canvas design

### Custom Skills

**Upload Process**:
1. Create skill folder with SKILL.md
2. ZIP the skill folder
3. Settings → Features → Skills → Upload ZIP
4. Skill appears in your personal skills list

**Limitations**:
- Individual user only (can't share with team)
- No API access to your custom skills
- Manual ZIP creation for updates
- No version control integration

**Best For**:
- Personal productivity skills
- Experimentation/testing
- Quick skill prototyping

---

## Claude API

### Overview
Programmatic access via Anthropic API with skills support.

### Beta Headers Required

```python
import anthropic

client = anthropic.Anthropic(
    api_key="your-api-key"
)

# Required beta headers
betas = [
    "code-execution-2025-08-25",
    "skills-2025-10-02",
    "files-api-2025-04-14"
]
```

### Pre-Built Skills

**Access via skill_id**:
```python
container = {
    "skills": [
        {"type": "anthropic", "skill_id": "pptx", "version": "latest"},
        {"type": "anthropic", "skill_id": "xlsx", "version": "latest"}
    ]
}

response = client.messages.create(
    model="claude-sonnet-4-5",
    betas=betas,
    container=container,
    messages=[...]
)
```

**Available skill_ids**:
- `pdf` - PDF manipulation
- `docx` - Word documents
- `xlsx` - Excel spreadsheets
- `pptx` - PowerPoint presentations

### Custom Skills

**Create via API**:
```python
# Upload custom skill
skill = client.skills.create(
    name="my-custom-skill",
    description="Description with triggers",
    files=[
        {"type": "skill", "source": {"type": "file_upload", "file": skill_file}}
    ]
)

# Use in request
container = {
    "skills": [
        {"type": "custom", "skill_id": skill.id}
    ]
}
```

**List skills**:
```python
skills = client.skills.list()
```

**Delete skill**:
```python
client.skills.delete(skill_id="skill_abc123")
```

### Limitations
- Max 8 skills per request
- Workspace-wide (not per-user)
- No sync with Claude.ai skills
- Beta headers required

**Best For**:
- Production applications
- Team-wide skills
- Programmatic skill management
- Automated workflows

---

## Claude Code

### Overview
CLI tool for developers with filesystem-based skills.

### Skill Locations

**Personal skills** (user-wide):
```
~/.claude/skills/
├── skill-name/
│   └── SKILL.md
└── another-skill/
    └── SKILL.md
```

**Project skills** (project-specific):
```
project-root/.claude/skills/
├── project-specific-skill/
│   └── SKILL.md
└── team-skill/
    └── SKILL.md
```

**Plugin skills** (from marketplace):
```
~/.claude/plugins/marketplaces/plugin-name/
└── skills/
    └── skill-name/
        └── SKILL.md
```

### No Pre-Built Skills

Claude Code does NOT have access to the pre-built document skills (PDF, DOCX, etc.). These are only available on Claude.ai and API.

**Workaround**: Create custom skills that wrap Python libraries:
```yaml
# Example: custom-pdf skill for Claude Code
name: custom-pdf
description: Extract text from PDFs using PyPDF2

# SKILL.md includes:
# - Installation: pip install pypdf2
# - Usage via bash: python scripts/extract_pdf.py
```

### Advanced Features

**Tool Restrictions** (security):
```yaml
---
name: read-only-analysis
description: Analyze code without modifications
allowed-tools: read_file, list_files, grep  # Only these tools
---
```

When this skill is active, Claude CANNOT use other tools (write_file, bash, etc.).

**Use cases**:
- Security audits (read-only access)
- Code review (no modifications)
- Analysis tasks (data read only)

### Distribution

**Git-based** (recommended):
```bash
# Share skills via Git
cd ~/.claude/skills
git init
git remote add origin https://github.com/org/our-skills
git push

# Team members clone
git clone https://github.com/org/our-skills ~/.claude/skills/our-skills
```

**Plugin system**:
```bash
# Install plugin with skills
claude plugin install superpowers
# Installs to ~/.claude/plugins/marketplaces/superpowers-marketplace/
```

**Manual copy**:
```bash
# Copy skill folder
cp -r my-skill ~/.claude/skills/
```

### Limitations
- No pre-built document skills
- Manual distribution (Git/copy)
- No API access

**Best For**:
- Development workflows
- Team skills (via Git)
- Advanced tool control
- Filesystem integration

---

## Platform-Specific Considerations

### When Building for Claude.ai

**✅ Do**:
- Include all dependencies in ZIP
- Test with web interface limitations
- Assume no filesystem access
- Use pre-built skills when possible

**❌ Don't**:
- Reference absolute file paths
- Assume Git availability
- Use allowed-tools field (not supported)

**Example**:
```yaml
# Good for Claude.ai
name: brand-guidelines
description: Apply brand colors and fonts to documents
# Uses pre-built PPTX/DOCX skills, no filesystem deps
```

---

### When Building for Claude API

**✅ Do**:
- Use skill_id for pre-built skills
- Manage skills programmatically
- Test with 8-skill limit
- Include beta headers

**❌ Don't**:
- Assume skills sync with Claude.ai
- Forget workspace implications
- Skip version management

**Example**:
```python
# Good for API
container = {
    "skills": [
        {"type": "anthropic", "skill_id": "xlsx", "version": "latest"},
        {"type": "custom", "skill_id": custom_skill.id}
    ]
}
```

---

### When Building for Claude Code

**✅ Do**:
- Use filesystem paths
- Leverage allowed-tools for security
- Distribute via Git
- Include installation scripts

**❌ Don't**:
- Assume pre-built skills available
- Use hardcoded absolute paths
- Forget cross-platform compatibility (paths)

**Example**:
```yaml
# Good for Claude Code
name: project-test-runner
description: Run tests for this project
allowed-tools: bash, read_file  # Security restriction

# SKILL.md references:
# - Project paths: {project-root}/tests/
# - Scripts: scripts/run_tests.sh
```

---

## Cross-Platform Skills

### Making Skills Work Everywhere

**Strategy**: Subset approach

**Core skill** (works everywhere):
```yaml
name: tdd-process
description: Enforce RED-GREEN-REFACTOR test-driven development
# Pure procedural knowledge, no platform dependencies
```

**Platform-specific extensions**:
- Claude.ai: Use DOCX skill for test documentation
- API: Programmatically run tests
- Claude Code: Use allowed-tools for test execution

### Portable Patterns

**✅ Portable**:
- Procedural knowledge
- Workflow descriptions
- Best practices
- Domain expertise
- Conceptual frameworks

**❌ Not Portable**:
- Filesystem paths (unless using {project-root})
- Pre-built skill dependencies
- Tool restrictions (allowed-tools)
- API-specific features

**Example - Portable Skill**:
```markdown
# Systematic Debugging

Procedural knowledge that works everywhere:
1. Reproduce bug
2. Isolate component
3. Diagnose root cause
4. Verify fix

No platform-specific dependencies.
```

---

## Skill Sync (or Lack Thereof)

### Important Limitation

**Skills uploaded to one surface DO NOT appear on others.**

- Claude.ai ZIP upload → NOT available in API or Claude Code
- API custom skill → NOT available in Claude.ai or Claude Code
- Claude Code filesystem skill → NOT available in Claude.ai or API

### Workarounds

**For Teams**:
1. **Git repository** (Claude Code):
   ```bash
   git clone org/team-skills ~/.claude/skills/team-skills
   ```

2. **API management** (API):
   ```python
   # Automated skill deployment via API
   deploy_skill_to_workspace(skill_definition)
   ```

3. **Manual distribution** (Claude.ai):
   - Share ZIP files
   - Team members upload individually

**Best approach**: Choose ONE primary surface for skill distribution.

---

## Feature Support Matrix

| Feature | Claude.ai | API | Claude Code |
|---------|-----------|-----|-------------|
| **YAML frontmatter** | ✅ | ✅ | ✅ |
| **SKILL.md markdown** | ✅ | ✅ | ✅ |
| **Multi-file skills** | ✅ | ✅ | ✅ |
| **Scripts (Python/Node)** | ✅ | ✅ | ✅ |
| **Pre-built skills** | ✅ | ✅ | ❌ |
| **allowed-tools** | ❌ | ❌ | ✅ |
| **Filesystem paths** | ⚠️ Limited | ⚠️ Limited | ✅ Full |
| **Code execution** | ✅ | ✅ | ✅ |
| **Version field** | ✅ | ✅ | ✅ |
| **Dependencies field** | ⚠️ Document only | ⚠️ Document only | ⚠️ Document only |

---

## Recommendations by Use Case

### Personal Productivity
→ **Claude.ai**
- Easy ZIP upload
- Pre-built skills available
- Quick iteration

### Team Collaboration
→ **Claude Code + Git**
- Version control
- Easy distribution
- Filesystem integration

### Production Applications
→ **Claude API**
- Programmatic control
- Workspace-wide skills
- Scalable management

### Experimentation
→ **Claude Code**
- Fast iteration (edit files directly)
- Full control
- No upload/download cycle

### Document Processing
→ **Claude.ai or API**
- Pre-built skills (PDF, DOCX, XLSX, PPTX)
- Production-ready
- No library dependencies

---

## Migration Guide

### From Claude.ai → Claude Code

1. Download your skills (if possible) or recreate
2. Create skill folders in `~/.claude/skills/`
3. Test filesystem paths
4. Remove dependencies on pre-built skills (PDF, DOCX, etc.)

### From Claude Code → Claude.ai

1. ZIP each skill folder
2. Upload via Settings → Features → Skills
3. Test without filesystem access
4. Leverage pre-built skills where possible

### From Either → Claude API

1. Convert to API format
2. Upload via `client.skills.create()`
3. Test with beta headers
4. Manage programmatically

---

## Final Recommendations

### Choose Your Primary Platform

**If your team uses**:
- **Claude.ai only**: Build for Claude.ai, use pre-built skills
- **Mixed (AI + Code)**: Build for Claude Code, manual distribution to AI
- **API applications**: Build for API, programmatic management
- **Development teams**: Build for Claude Code, Git distribution

### Build Portable First

Start with platform-agnostic skills:
- Procedural knowledge
- Workflow guidance
- Best practices

Then add platform-specific enhancements:
- Claude.ai: Leverage pre-built skills
- API: Programmatic features
- Claude Code: Tool restrictions, filesystem paths

### Test on Target Platform

Always test on the platform where skills will be used:
- Claude.ai: Test via web interface
- API: Test with beta headers
- Claude Code: Test via CLI

**Remember**: Cross-platform compatibility is challenging. Pick one primary platform and optimize for it.
