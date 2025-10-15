# Setup GSAP Project Workflow Instructions
# Initialize GSAP with best practices

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/setup-gsap-project/workflow.yaml</critical>

<workflow>

<step n="1" goal="Gather Project Requirements">
<action>VFX Artist (or Tech Director) introduces setup workflow</action>

**"Let's get GSAP set up correctly from the start. Tell me about your project."**

<ask response="project_name">Project name?</ask>
<ask response="project_type">Project type? [vanilla/react/vue/svelte/next/vite/other]</ask>
<ask response="bundler">Bundler/build tool? [webpack/vite/rollup/parcel/esbuild/none]</ask>
<ask response="typescript">Using TypeScript? [y/n]</ask>
<ask response="plugins_needed">Which GSAP plugins do you need? (comma-separated or 'none')
   Options: ScrollTrigger, Draggable, SplitText, MorphSVG, MotionPathPlugin, ScrollSmoother</ask>

<action>Confirm understanding before proceeding</action>

**Project Configuration:**
- Name: {{project_name}}
- Type: {{project_type}}
- Bundler: {{bundler}}
- TypeScript: {{typescript}}
- Plugins: {{plugins_needed}}

<template-output>project_name, project_type, bundler, typescript, plugins_needed</template-output>
</step>

<step n="2" goal="Fetch Latest GSAP Documentation">
<critical>Use Context7 to get the most up-to-date GSAP installation instructions</critical>

<action>Use Context7 MCP to fetch latest GSAP documentation</action>

**"Fetching latest GSAP setup documentation..."**

<action>Use resolve-library-id to find GSAP library</action>
<action>Use get-library-docs to fetch installation and setup docs</action>

**Documentation Retrieved:**
- GSAP Version: {{latest_gsap_version}}
- Installation methods: {{installation_methods}}
- Plugin availability: {{plugin_availability}}
- Framework integrations: {{framework_integrations}}

<action>Extract relevant setup information for {{project_type}} and {{bundler}}</action>

<template-output>latest_gsap_version, installation_instructions, plugin_setup, framework_integration</template-output>
</step>

<step n="3" goal="Generate Installation Commands">
<action>Create project-specific installation commands</action>

**Installation Commands for {{project_type}} with {{bundler}}:**

**1. Install GSAP Core**
```bash
{{gsap_install_command}}
```

<check if="plugins_needed != 'none'">
**2. Install GSAP Plugins**
```bash
{{plugin_install_commands}}
```

<action>Note: Some plugins require GreenSock Club membership (ScrollSmoother, MorphSVG, SplitText)</action>
</check>

<check if="typescript == true">
**3. Install TypeScript Types**
```bash
{{typescript_types_install}}
```
</check>

**Package.json Dependencies:**
```json
{
  "dependencies": {
    {{dependency_entries}}
  }
}
```

<template-output>installation_commands, dependency_entries</template-output>
</step>

<step n="4" goal="Create Project Structure">
<action>Generate recommended folder structure for GSAP animations</action>

**"Setting up optimal folder structure for animations..."**

**Recommended Structure:**

```
{{project_name}}/
├── src/
│   ├── animations/          # Animation modules
│   │   ├── index.js        # Animation registry
│   │   ├── hero.js         # Hero animations
│   │   ├── scroll.js       # Scroll animations
│   │   └── utils/          # Animation utilities
│   │       ├── gsap-config.js  # GSAP configuration
│   │       ├── easing.js       # Custom easing functions
│   │       └── performance.js  # Performance helpers
│   ├── components/          # Your components
│   └── {{entry_file}}       # Main entry
├── {{config_file}}          # Build config
└── package.json
```

**File Purposes:**
- `animations/` - Centralized animation modules
- `animations/utils/gsap-config.js` - Global GSAP setup
- `animations/utils/easing.js` - Custom easing library
- `animations/utils/performance.js` - Performance monitoring

<template-output>project_structure, folder_purposes</template-output>
</step>

<step n="5" goal="Generate Configuration Files">
<action>Create configuration files based on project setup</action>

**Configuration Files:**

**1. GSAP Configuration (animations/utils/gsap-config.js)**
```javascript
{{gsap_config_file}}
```

<check if="typescript == true">
**2. TypeScript Configuration (tsconfig.json updates)**
```json
{{typescript_config}}
```
</check>

<check if="bundler == 'webpack'">
**3. Webpack Configuration**
```javascript
{{webpack_config}}
```
</check>

<check if="bundler == 'vite'">
**3. Vite Configuration**
```javascript
{{vite_config}}
```
</check>

<check if="bundler == 'rollup'">
**3. Rollup Configuration**
```javascript
{{rollup_config}}
```
</check>

<template-output>gsap_config_file, bundler_config, typescript_config</template-output>
</step>

<step n="6" goal="Create Import Examples">
<action>Generate framework-specific import and usage examples</action>

**Import and Usage Examples:**

<check if="project_type == 'vanilla'">
**Vanilla JavaScript:**
```javascript
{{vanilla_import_example}}
```
</check>

<check if="project_type == 'react'">
**React Integration:**
```jsx
{{react_import_example}}
```
</check>

<check if="project_type == 'vue'">
**Vue Integration:**
```vue
{{vue_import_example}}
```
</check>

<check if="project_type == 'svelte'">
**Svelte Integration:**
```svelte
{{svelte_import_example}}
```
</check>

<check if="project_type == 'next'">
**Next.js Integration:**
```jsx
{{next_import_example}}
```
</check>

<template-output>import_examples, usage_examples</template-output>
</step>

<step n="7" goal="Create Example Animation">
<action>Generate a simple test animation to verify setup</action>

**"Let's create a test animation to verify everything works..."**

**Example Animation (animations/test.js):**
```javascript
{{test_animation_code}}
```

**How to Use:**
```javascript
{{test_animation_usage}}
```

**Expected Result:**
{{expected_result}}

<template-output>test_animation_code, test_animation_usage, expected_result</template-output>
</step>

<step n="8" goal="Setup Performance Monitoring">
<action>Create performance monitoring utilities</action>

**Performance Monitoring (animations/utils/performance.js):**
```javascript
{{performance_monitoring_code}}
```

**Usage:**
```javascript
{{performance_usage_example}}
```

**What It Monitors:**
- FPS during animations
- Paint times
- JavaScript execution time
- Memory usage warnings
- Console logging for debugging

<template-output>performance_monitoring_code, performance_usage</template-output>
</step>

<step n="9" goal="Setup Accessibility">
<action>Create prefers-reduced-motion utility</action>

**Accessibility Utility (animations/utils/accessibility.js):**
```javascript
{{accessibility_utility_code}}
```

**Usage:**
```javascript
{{accessibility_usage_example}}
```

**Features:**
- Detects prefers-reduced-motion
- Provides fallback animations
- Respects user preferences
- Updates on preference change

<template-output>accessibility_utility_code, accessibility_usage</template-output>
</step>

<step n="10" goal="Create Setup Checklist">
<action>Generate validation checklist using checklist.md</action>

**"Almost done! Here's your setup checklist..."**

<action>Load and present checklist from {validation}</action>

**Setup Validation Checklist:**

**Installation:**
- [ ] GSAP core installed ({{latest_gsap_version}})
- [ ] Required plugins installed: {{plugins_needed}}
- [ ] TypeScript types available (if applicable)
- [ ] No installation errors in console

**Configuration:**
- [ ] Folder structure created
- [ ] gsap-config.js setup complete
- [ ] Build tool configured correctly
- [ ] Import paths working

**Testing:**
- [ ] Test animation runs successfully
- [ ] No console errors
- [ ] FPS monitoring works
- [ ] prefers-reduced-motion respected

**Documentation:**
- [ ] Setup guide saved for team
- [ ] Import patterns documented
- [ ] Performance baselines noted

<template-output>setup_checklist</template-output>
</step>

<step n="11" goal="Present Complete Setup Guide">
<action>Compile all setup information into final document</action>

**"Setup complete! Here's your comprehensive GSAP setup guide."**

<action>Generate final setup guide using template.md</action>
<action>Save to output file: {{default_output_file}}</action>

**Setup Summary:**
- ✅ GSAP Version: {{latest_gsap_version}}
- ✅ Plugins: {{plugins_needed}}
- ✅ Framework: {{project_type}}
- ✅ Bundler: {{bundler}}
- ✅ TypeScript: {{typescript}}
- ✅ Folder Structure: Created
- ✅ Test Animation: Ready
- ✅ Performance Monitoring: Configured
- ✅ Accessibility: Enabled

<ask>Next steps:
1. Run installation commands
2. Create folder structure
3. Add configuration files
4. Run test animation
5. Start building animations!

Ready to proceed? [y/n]</ask>

<template-output>final_setup_guide, next_action</template-output>
</step>

<step n="12" goal="Optional: Quick Setup Execution" optional="true">
<ask>Would you like me to create the files and folder structure for you now? [y/n]</ask>

<check if="user_approves">
<action>Create folder structure at project root</action>
<action>Write gsap-config.js file</action>
<action>Write performance.js utility</action>
<action>Write accessibility.js utility</action>
<action>Write test animation</action>
<action>Update package.json with dependencies</action>

**"Files created! Run the installation commands to complete setup."**
</check>

<template-output>files_created</template-output>
</step>

</workflow>

## MCP Tool Usage

**Context7:**
- Fetch latest GSAP version and documentation
- Get plugin availability information
- Verify framework integration methods
- Single call at beginning of workflow

**Error Handling:**
- If Context7 unavailable: Use known GSAP version (3.12+)
- Warn user to verify latest version manually
- Proceed with standard setup instructions

## Quality Standards

**Installation:**
- Always use latest stable GSAP version
- Include proper plugin installation
- TypeScript types when applicable
- No deprecated packages

**Configuration:**
- Production-ready from start
- Performance optimized
- Accessibility built-in
- Framework best practices followed

**Code Quality:**
- Well-commented examples
- Proper cleanup patterns
- Performance monitoring included
- Error handling present

## Success Metrics

- ✅ GSAP installs without errors
- ✅ Test animation runs successfully
- ✅ Build tool integration works
- ✅ TypeScript types available (if used)
- ✅ Performance monitoring functional
- ✅ Accessibility utilities working
- ✅ User confident in setup

## Integration

**Feeds Into:**
- All other workflows (project now GSAP-ready)
- creative-ideation (ready to create animations)
- implement-from-pattern (ready to implement)
- research-gsap-pattern (environment configured)

**Context Passed Forward:**
- GSAP version installed
- Available plugins
- Framework configuration
- Project structure
- Performance baselines
