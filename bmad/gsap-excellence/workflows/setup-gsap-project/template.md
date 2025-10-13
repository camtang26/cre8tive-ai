# GSAP Project Setup Guide: {{project_name}}

**Date:** {{date}}
**Setup by:** GSAP Excellence Engine (VFX Artist)
**For:** {{user_name}}

---

## Project Configuration

**Project Name:** {{project_name}}
**Project Type:** {{project_type}}
**Bundler:** {{bundler}}
**TypeScript:** {{typescript}}
**GSAP Version:** {{latest_gsap_version}}
**Plugins:** {{plugins_needed}}

---

## Installation

### Step 1: Install GSAP Core

```bash
{{gsap_install_command}}
```

### Step 2: Install Plugins

<check if="plugins_needed != 'none'">
```bash
{{plugin_install_commands}}
```

**Plugin Notes:**
{{plugin_notes}}
</check>

<check if="plugins_needed == 'none'">
No additional plugins required.
</check>

### Step 3: Install TypeScript Types

<check if="typescript == true">
```bash
{{typescript_types_install}}
```
</check>

<check if="typescript == false">
TypeScript not used - skipping type definitions.
</check>

### package.json Dependencies

```json
{
  "dependencies": {
    {{dependency_entries}}
  }
}
```

---

## Project Structure

### Recommended Folder Organization

```
{{project_structure}}
```

### File Purposes

{{folder_purposes}}

---

## Configuration Files

### 1. GSAP Configuration

**File:** `animations/utils/gsap-config.js`

```javascript
{{gsap_config_file}}
```

**What This Does:**
- Registers GSAP plugins globally
- Sets default easing and duration
- Configures performance settings
- Initializes accessibility support

---

### 2. Build Tool Configuration

<check if="bundler != 'none'">
**File:** `{{config_file_name}}`

```javascript
{{bundler_config}}
```

**Configuration Notes:**
{{bundler_config_notes}}
</check>

---

### 3. TypeScript Configuration

<check if="typescript == true">
**File:** `tsconfig.json` (updates)

```json
{{typescript_config}}
```

**TypeScript Notes:**
{{typescript_notes}}
</check>

---

## Import and Usage

### Framework Integration

<check if="project_type == 'vanilla'">
**Vanilla JavaScript:**

```javascript
{{vanilla_import_example}}
```

**Usage:**
{{vanilla_usage_notes}}
</check>

<check if="project_type == 'react'">
**React Integration:**

```jsx
{{react_import_example}}
```

**Usage Notes:**
{{react_usage_notes}}
</check>

<check if="project_type == 'vue'">
**Vue Integration:**

```vue
{{vue_import_example}}
```

**Usage Notes:**
{{vue_usage_notes}}
</check>

<check if="project_type == 'svelte'">
**Svelte Integration:**

```svelte
{{svelte_import_example}}
```

**Usage Notes:**
{{svelte_usage_notes}}
</check>

<check if="project_type == 'next'">
**Next.js Integration:**

```jsx
{{next_import_example}}
```

**Usage Notes:**
{{next_usage_notes}}
</check>

---

## Utilities

### Performance Monitoring

**File:** `animations/utils/performance.js`

```javascript
{{performance_monitoring_code}}
```

**Usage:**
```javascript
{{performance_usage_example}}
```

**Features:**
- FPS monitoring during animations
- Paint time tracking
- Memory usage warnings
- Console logging for debugging
- Performance reports

---

### Accessibility Support

**File:** `animations/utils/accessibility.js`

```javascript
{{accessibility_utility_code}}
```

**Usage:**
```javascript
{{accessibility_usage_example}}
```

**Features:**
- prefers-reduced-motion detection
- Automatic fallback animations
- Dynamic preference updates
- User preference respect

---

## Test Animation

### Basic Test

**File:** `animations/test.js`

```javascript
{{test_animation_code}}
```

**How to Run:**
```javascript
{{test_animation_usage}}
```

**Expected Result:**
{{expected_result}}

**Validation:**
- [ ] Animation runs smoothly
- [ ] No console errors
- [ ] FPS monitoring active
- [ ] Accessibility fallback works

---

## Setup Checklist

### Installation ✓

- [ ] GSAP core installed ({{latest_gsap_version}})
- [ ] Plugins installed: {{plugins_needed}}
- [ ] TypeScript types available (if applicable)
- [ ] No npm/yarn errors
- [ ] Dependencies in package.json

### Configuration ✓

- [ ] Folder structure created
- [ ] gsap-config.js setup
- [ ] Build tool configured
- [ ] TypeScript configured (if applicable)
- [ ] Import paths verified

### Utilities ✓

- [ ] Performance monitoring utility created
- [ ] Accessibility utility created
- [ ] Custom easing library setup
- [ ] Animation registry initialized

### Testing ✓

- [ ] Test animation runs successfully
- [ ] No console errors or warnings
- [ ] FPS monitoring reports data
- [ ] prefers-reduced-motion respected
- [ ] Build process successful

### Documentation ✓

- [ ] Setup guide saved for team
- [ ] Import patterns documented
- [ ] Performance baselines noted
- [ ] Accessibility guidelines documented

---

## Next Steps

### Immediate Actions

1. **Run Installation Commands**
   ```bash
   {{installation_summary}}
   ```

2. **Create Folder Structure**
   {{folder_creation_guide}}

3. **Add Configuration Files**
   {{config_file_checklist}}

4. **Test Installation**
   ```bash
   {{test_commands}}
   ```

### Ready to Animate

Your project is now GSAP-ready! Next steps:

1. **Create Animations**
   - Use `creative-ideation` workflow for concepts
   - Use `implement-from-pattern` for proven patterns
   - Use `research-gsap-pattern` for techniques

2. **Build Pattern Library**
   - Save successful animations as patterns
   - Document learnings
   - Grow reusable asset library

3. **Optimize Performance**
   - Monitor FPS using performance utilities
   - Profile with Chrome DevTools
   - Use `optimize-performance` workflow if needed

---

## Troubleshooting

### Common Setup Issues

**Issue: GSAP not found**
- Verify installation: `npm list gsap`
- Check import paths
- Rebuild node_modules if needed

**Issue: Plugins not working**
- Verify plugin registration in gsap-config.js
- Check plugin installation
- Some plugins require GreenSock Club membership

**Issue: TypeScript errors**
- Ensure @types/gsap installed
- Check tsconfig.json paths
- Update GSAP to latest for best type support

**Issue: Build errors**
- Check bundler configuration
- Verify import syntax for bundler
- Check for CommonJS vs ESM issues

### Getting Help

- GSAP Forums: https://greensock.com/forums/
- GSAP Docs: https://greensock.com/docs/
- Use `research-gsap-pattern` workflow for specific issues

---

## Best Practices

### Code Organization

✅ **Do:**
- Centralize animations in `animations/` folder
- Use animation registry for large projects
- Separate utilities from animations
- Document complex animations

❌ **Don't:**
- Scatter animation code throughout components
- Mix GSAP versions
- Forget cleanup on unmount
- Ignore accessibility

### Performance

✅ **Do:**
- Use GPU-accelerated properties (transform, opacity)
- Set will-change on animated elements
- Monitor FPS with performance utilities
- Profile with Chrome DevTools

❌ **Don't:**
- Animate layout properties (width, height, top, left)
- Create animations inside render loops
- Forget to kill animations
- Ignore performance warnings

### Accessibility

✅ **Do:**
- Always provide prefers-reduced-motion fallback
- Test with motion disabled
- Respect user preferences
- Document accessibility considerations

❌ **Don't:**
- Make animations required for functionality
- Ignore vestibular disorders
- Autoplay without user control
- Skip accessibility testing

---

## Resources

### Official GSAP

- **Documentation:** https://greensock.com/docs/
- **Getting Started:** https://greensock.com/get-started/
- **Forums:** https://greensock.com/forums/
- **CodePen:** https://codepen.io/GreenSock/

### Framework Integration

- **React:** https://greensock.com/react
- **Vue:** https://greensock.com/vue
- **Next.js:** https://greensock.com/react-advanced

### Premium Examples

- **Showcase:** https://greensock.com/showcase/
- **Awwwards:** https://www.awwwards.com/ (search "GSAP")
- **CodePen GSAP:** https://codepen.io/collection/ANaOod

---

## GSAP Excellence Engine Workflows

Now that your project is set up, use these workflows:

1. **creative-ideation** - Generate premium animation concepts
2. **research-gsap-pattern** - Deep dive into GSAP techniques
3. **implement-from-pattern** - Quick pattern implementation
4. **optimize-performance** - Performance profiling (Phase 2)
5. **debug-animation** - Fix animation issues (Phase 2)

---

🎬 **"Setup complete! Your project is ready for premium GSAP animations."** - The VFX Artist

_Generated by GSAP Excellence Engine_
_Module: gsap-excellence | Workflow: setup-gsap-project_
_Setup Date: {{date}}_
