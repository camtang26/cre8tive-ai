# Validate Modern Workflow Instructions
# Ensure GSAP 3.13+ compliance using research-backed validation frameworks

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded: {project-root}/bmad/gsap-excellence/workflows/validate-modern/workflow.yaml</critical>
<critical>This is a READ-ONLY validation workflow - NO CODE CHANGES made automatically</critical>
<critical>MANDATORY RESEARCH GATES - Cannot skip Deep-Research framework loading</critical>

<workflow>

<!-- ============================================================ -->
<!-- STEP 1: MANDATORY RESEARCH GATE - LOAD GSAP MODERNIZATION FRAMEWORKS -->
<!-- ============================================================ -->

<step n="1" goal="MANDATORY Research Gate - Load GSAP 3.13+ Modernization Frameworks">

<critical>🚨 MANDATORY RESEARCH CHECKPOINT - CANNOT SKIP 🚨</critical>

<action>Communicate in {communication_language} throughout this workflow for all agent dialogue and generated content</action>

**This research gate is BLOCKING.** You MUST complete ALL Deep-Research section reads before proceeding to Step 2.

**Why This Matters:**
The pathetic validate-modern workflow had ZERO research backing - just generic grep searches. This premium rebuild is backed by 2.2M+ words of GSAP expertise. **You cannot skip this.**

---

### Phase 1.1: Load Core GSAP 3.x Modernization Framework

**Deep-Research Section 2.1 - Core GSAP Concepts (REQUIRED)**

<action>Read COMPLETE file:
  {deep_research_base}/05-21-core-gsap-concepts-tween-timeline-stagger-ease.md
</action>

**Extract and internalize:**

**Modern GSAP 3.x Syntax (replaces GSAP 2.x):**
- *"GSAP uses gsap.to(), gsap.from(), or gsap.fromTo() methods to produce tweens"* (Source: Section 2.1)
- Modern API: `gsap.to(".box", { x: 100, opacity: 0.5, duration: 1 })`
- Deprecated GSAP 2.x: `TweenMax.to()`, `TweenLite.to()`, `TimelineMax`, `TimelineLite`

**Timeline Modernization:**
- *"A timeline (gsap.timeline()) is essentially a container for multiple tweens, allowing sequencing and synchronization"* (Source: Section 2.1)
- Modern: `const tl = gsap.timeline(); tl.from().to().addLabel()`
- Deprecated: `new TimelineMax()`, `new TimelineLite()`

**Why .to() vs .from() vs .fromTo():**
- *".to() animates from the current value to the specified end value. .from() animates from the specified value to the current value"* (Source: Section 2.1)
- *"Be mindful of their behavior (see common mistakes in Part 8 about .from() caching and immediateRender)"* (Source: Section 2.1)

**Stagger Patterns (Advanced):**
- *"Staggering is animating multiple targets with a slight offset in start times"* (Source: Section 2.1)
- Object syntax: `stagger: { each: 0.2, from: "center", grid: "auto", ease: "power1.in" }`
- *"from:'center' makes the stagger originate from the center of the element array (so elements in the middle start first, radiating outward)"* (Source: Section 2.1)

**Validation Framework Extracted:**
✅ Scan for `TweenMax`, `TweenLite`, `TimelineMax`, `TimelineLite` (ALL deprecated)
✅ Validate modern `gsap.to/from/fromTo` usage
✅ Check for `gsap.timeline()` instead of `new TimelineMax/TimelineLite`

---

### Phase 1.2: Load Plugin Ecosystem Framework (FREE in 3.13+!)

**Deep-Research Section 2.3 - The 2024 GSAP Plugin Ecosystem (REQUIRED)**

<action>Read COMPLETE file:
  {deep_research_base}/07-23-the-2024-gsap-plugin-ecosystem-all-free.md
</action>

**Extract and internalize:**

**🎉 GAME-CHANGER: ALL Premium Plugins Now FREE**
- *"A major development: as of late 2023/2024, GSAP and all its official plugins are free for everyone (no club membership needed)"* (Source: Section 2.3)
- *"This is a windfall for AI coding models -- it means you can confidently use capabilities like ScrollTrigger and SplitText in your outputs without worrying about licensing"* (Source: Section 2.3)
- **Previously $99/year PER PLUGIN** - now FREE (Webflow sponsorship)

**Premium Plugins Validation Framework:**

**1. ScrollTrigger (scroll-based animations):**
- Basic pattern: `scrollTrigger: { trigger: ".element", start: "top 80%", toggleActions: "play none none reverse" }`
- *"ScrollTrigger internally handles attaching scroll listeners, optimizing updates, etc."* (Source: Section 2.3)
- Pinning: `ScrollTrigger.create({ trigger: "#section1", pin: true, start: "top top", end: "+=1000", scrub: true })`
- *"Scrubbing & Timelines: Perhaps the most powerful use is tying a GSAP timeline's progress to scroll position"* (Source: Section 2.3)

**2. ScrollSmoother (smooth scrolling - was $99/year!):**
- *"A newer plugin (also free now) that provides smooth scrolling effect (a.k.a locomotive-style scroll easing) without external libraries"* (Source: Section 2.3)
- Pattern: `ScrollSmoother.create({ smooth: 1.2, effects: true })`
- *"With effects:true, you can add attributes like data-speed='0.5' on elements to create automatic parallax"* (Source: Section 2.3)

**3. SplitText (text reveals - was premium!):**
- *"This plugin splits text into lines, words, and/or characters as individual elements, enabling advanced typography animations"* (Source: Section 2.3)
- Pattern: `let splitter = new SplitText(".headline", { type: "words,chars" })`
- *"With GSAP 3.13+, SplitText even supports automatic masking of overflowing text"* (Source: Section 2.3)

**4. MorphSVG (shape morphing - was premium!):**
- *"Allows morphing one SVG shape into another. This is useful for icon transitions or creative effects"* (Source: Section 2.3)
- Pattern: `gsap.to("#icon1", { morphSVG: "#icon2", duration: 1, ease: "elastic.out(1, 0.5)" })`

**5. DrawSVG (line drawing - was premium!):**
- Use for SVG line animations
- Pattern: `gsap.from("path", { drawSVG: 0 })`

**6. MotionPath (path following - was premium!):**
- *"Lets you animate objects along an SVG path. For creative uses like an element following a curved path"* (Source: Section 2.3)
- Pattern: `gsap.to(".plane", { motionPath: { path: "#flightPath", align: "#flightPath", autoRotate: true } })`

**Opportunity Detection Framework:**
✅ Search for custom smooth scroll implementations → Recommend ScrollSmoother (FREE!)
✅ Search for text splitting/animation → Recommend SplitText (FREE!)
✅ Search for SVG morphing → Recommend MorphSVG (FREE!)
✅ Search for stroke-dashoffset → Recommend DrawSVG (FREE!)
✅ Search for path following → Recommend MotionPath (FREE!)

---

### Phase 1.3: Load React/Framework Integration Patterns

**Deep-Research Section 2.5 - Integration Patterns (REQUIRED)**

<action>Read COMPLETE file:
  {deep_research_base}/09-25-integration-patterns-gsap-react-nextjs-other-frameworks.md
</action>

**Extract and internalize:**

**React Integration Pattern (CRITICAL for validation):**
- *"We use gsap.context() which is a powerful utility introduced in GSAP 3.11 for React integration"* (Source: Section 2.5)
- *"By wrapping animations in gsap.context(() => {...}, ref), GSAP will scope selectors and create a context tied to that component"* (Source: Section 2.5)
- *"On cleanup (ctx.revert()), it will automatically kill any ScrollTriggers, revert any inline styles added, and cleanup animations"* (Source: Section 2.5)

**Cleanup Pattern (prevents memory leaks):**
```javascript
useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.from(ref.current, { y: 50, opacity: 0, duration: 1 });
  }, ref);
  return () => ctx.revert();  // MANDATORY cleanup
}, []);
```

**Plugin Registration Requirement (tree shaking):**
- *"Modern build tools often use a process called tree shaking to remove unused code"* (Source: Section 2.5)
- *"To prevent this, you must explicitly register the plugin(s) using gsap.registerPlugin"* (Source: Section 2.5)
- Pattern: `gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVG);`

**SSR (Server-Side Rendering) Safety:**
- *"Next.js does server-side rendering of React, where window and document don't exist"* (Source: Section 2.5)
- *"To avoid errors like 'ReferenceError: document is not defined,' you must ensure GSAP code only runs on the client"* (Source: Section 2.5)
- Solution: Wrap in `useEffect()` or `if (typeof window !== "undefined")`

**useGSAP() Hook (GSAP 3.13+ official React hook):**
- *"GSAP 3.13 introduced an official React hook to streamline this. It essentially wraps the context pattern"* (Source: Section 2.5)
- *"useGSAP behaves like useLayoutEffect by default (which runs earlier than regular useEffect, preventing Flash of Unstyled Content)"* (Source: Section 2.5)
- Pattern: `useGSAP(() => { gsap.from(ref.current, { opacity: 0, y: 50 }); }, []);`

**Validation Framework Extracted:**
✅ Check for `gsap.registerPlugin()` calls (REQUIRED for production builds)
✅ Validate React cleanup patterns (`ctx.revert()` or `useGSAP`)
✅ Check SSR safety (no GSAP code at module top-level in Next.js)
✅ Identify missing plugin registrations (tree shaking risk)

---

### Checkpoint: Research Gate Approval (MANDATORY)

<critical>Before proceeding to Step 2, you MUST confirm research has been loaded:</critical>

**Research Loaded Confirmation:**
- ✅ Section 2.1: Modern GSAP 3.x syntax framework (gsap.to/from/fromTo, timeline())
- ✅ Section 2.3: Plugin ecosystem (ALL FREE in 3.13+, premium plugin opportunities)
- ✅ Section 2.5: React/framework integration patterns (registerPlugin, cleanup, SSR)

<ask>🔬 Research gate loaded. Type "Continue" to proceed with codebase scan: [Continue]</ask>

<critical>User MUST type "Continue" - agent cannot rationalize skipping this checkpoint</critical>

**If research NOT loaded:** HALT workflow. Re-read Deep-Research sections above.

<template-output>research_loaded_confirmation, deep_research_sections_loaded, validation_frameworks_extracted</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 2: SCAN INITIALIZATION & VERSION CHECK -->
<!-- ============================================================ -->

<step n="2" goal="Tech Director: Initialize Scan & Validate GSAP Version">
<action>Tech Director greets {user_name} and prepares compliance scan using research-backed frameworks</action>

**🔧 "{user_name}, initiating research-backed GSAP 3.13+ compliance scan..."**

<ask response="codebase_root">Codebase root directory to scan? [default: current project root]</ask>

**Scan Configuration:**
- **Root Directory:** {{codebase_root}}
- **File Extensions:** .js, .jsx, .ts, .tsx
- **Excluded Directories:** node_modules, dist, build, .next, out
- **Validation Framework:** Deep-Research Sections 2.1, 2.3, 2.5

**Research-Backed Validation Standards:**
- ✅ GSAP ≥3.13.0: All premium plugins FREE, modern API
- ⚠️ GSAP 3.0-3.12: Upgrade recommended (missing FREE premium plugins)
- 🔴 GSAP <3.0: Critical upgrade required (breaking changes)

---

### 2.1: Check GSAP Version (package.json)

**🔧 "Checking GSAP version in package.json..."**

<action>Read package.json file(s):</action>
- Check `{codebase_root}/package.json`
- Check workspaces if monorepo: `apps/*/package.json`, `packages/*/package.json`

**Search for:**
```json
{
  "dependencies": {
    "gsap": "^X.X.X"
  }
}
```

**Version Validation (Research-Backed):**

<check if="version >= 3.13.0">
**✅ GSAP VERSION COMPLIANT (3.13.0+)**

- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** ✅ PASS
- **Premium Plugins:** ALL FREE (ScrollSmoother, MorphSVG, SplitText, DrawSVG, MotionPath)
- **Value:** Previously $99/year per plugin - now FREE! (Webflow sponsorship)
- **Research Source:** Deep-Research Section 2.3 - *"As of late 2023/2024, GSAP and all its official plugins are free for everyone"*

**Unlock these FREE premium features:**
- ScrollSmoother (smooth scrolling)
- SplitText (text reveals)
- MorphSVG (shape morphing)
- DrawSVG (SVG line drawing)
- MotionPath (path following)
- Flip (layout transitions)
- And more...
</check>

<check if="version < 3.13.0 AND version >= 3.0.0">
**⚠️ GSAP VERSION OUTDATED (3.x but pre-3.13)**

- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** ⚠️ UPGRADE NEEDED
- **Missing:** FREE premium plugins (they became FREE in 3.13+!)
- **Value Lost:** $495/year+ in FREE plugin value
- **Recommendation:** Upgrade to 3.13.0+ to unlock FREE premium plugins

**What You're Missing:**
- ScrollSmoother ($99/year → FREE)
- SplitText ($99/year → FREE)
- MorphSVG ($99/year → FREE)
- DrawSVG ($99/year → FREE)
- MotionPath ($99/year → FREE)

**Upgrade Command:**
```bash
npm install gsap@latest
# or
yarn upgrade gsap@latest
```

**Research Source:** Deep-Research Section 2.3 - Plugin ecosystem changes
</check>

<check if="version < 3.0.0">
**🔴 GSAP VERSION CRITICAL - GSAP 2.x DETECTED**

- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** 🔴 MAJOR UPGRADE REQUIRED
- **Impact:** Using deprecated GSAP 2.x API (TweenMax, TweenLite, TimelineMax)
- **Severity:** HIGH - Breaking changes required

**Major Breaking Changes (GSAP 2.x → 3.x):**
Per Deep-Research Section 2.1:
- `TweenMax/TweenLite` → `gsap.to/from/fromTo`
- `TimelineMax/TimelineLite` → `gsap.timeline()`
- Different plugin registration pattern
- Different ScrollTrigger API
- CSSPlugin automatic (no manual load)

**Migration Guide:** https://gsap.com/docs/v3/GSAP3/Migrating/

**Upgrade Command:**
```bash
npm install gsap@latest
# or
yarn upgrade gsap@latest
```

**Research Source:** Deep-Research Section 2.1 - Modern GSAP 3.x syntax
</check>

<template-output>gsap_version, version_compliance_status, version_pass_fail, version_details, upgrade_priority, premium_plugins_available</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 3: SCAN FOR DEPRECATED SYNTAX (GSAP 2.x) -->
<!-- ============================================================ -->

<step n="3" goal="Tech Director: Scan for Deprecated GSAP 2.x Syntax">
<action>Tech Director scans codebase for deprecated GSAP 2.x syntax using Deep-Research Section 2.1 framework</action>

**🔧 "Scanning for deprecated GSAP 2.x syntax (research-backed patterns)..."**

<critical>Use rg (ripgrep) via Bash tool to search codebase - NOT Grep tool</critical>

**Deprecated Patterns to Search (from Deep-Research Section 2.1):**

### 3.1: Scan for TweenMax (deprecated)

<action>Search for TweenMax usage using ripgrep:</action>
```bash
rg "TweenMax" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**Expected:** 0 instances

**Modern Replacement (Section 2.1):**
- `TweenMax.to()` → `gsap.to()`
- `TweenMax.from()` → `gsap.from()`
- `TweenMax.fromTo()` → `gsap.fromTo()`

### 3.2: Scan for TweenLite (deprecated)

<action>Search for TweenLite usage:</action>
```bash
rg "TweenLite" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**Expected:** 0 instances

**Modern Replacement:** Same as TweenMax → `gsap.to/from/fromTo`

### 3.3: Scan for TimelineMax/TimelineLite (deprecated)

<action>Search for deprecated timeline classes:</action>
```bash
rg "TimelineMax|TimelineLite" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**Expected:** 0 instances

**Modern Replacement (Section 2.1):**
- *"A timeline (gsap.timeline()) is essentially a container for multiple tweens"*
- `new TimelineMax()` → `gsap.timeline()`
- `new TimelineLite()` → `gsap.timeline()`

### 3.4: Scan for Old Import Syntax (GSAP 2.x)

<action>Search for old import patterns:</action>
```bash
rg "import.*TweenMax|import.*TweenLite|import.*TimelineMax|from ['\"]gsap/TweenMax|from ['\"]gsap/TweenLite" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**Expected:** 0 instances

**Modern Import Pattern:**
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
```

### 3.5: Scan for CSSPlugin (removed in GSAP 3.x)

<action>Search for CSSPlugin references:</action>
```bash
rg "CSSPlugin" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**Expected:** 0 instances

**Why Removed:** *"CSSPlugin automatic in 3.x"* (no manual import needed)

---

**Deprecated Syntax Report:**

<check if="deprecated_instances_found">
**🔴 DEPRECATED SYNTAX DETECTED**

**Total Instances:** {{deprecated_count}}

**Breakdown:**
- TweenMax: {{tweenmax_count}} instances
- TweenLite: {{tweenlite_count}} instances
- TimelineMax/TimelineLite: {{timeline_count}} instances
- Old imports: {{old_import_count}} instances
- CSSPlugin: {{cssplugin_count}} instances

**File Locations (with line numbers):**
{{deprecated_instances_list}}

**SEVERITY:** HIGH (blocks GSAP 3.13+ compliance)

**Migration Framework (Deep-Research Section 2.1):**
1. Replace `TweenMax/TweenLite.to()` with `gsap.to()`
2. Replace `new TimelineMax/TimelineLite()` with `gsap.timeline()`
3. Update imports to `import gsap from 'gsap'`
4. Remove CSSPlugin imports (automatic in 3.x)

**Migration Guide:** https://gsap.com/docs/v3/GSAP3/Migrating/
</check>

<check if="no_deprecated_instances">
**✅ NO DEPRECATED SYNTAX DETECTED**

- **TweenMax:** 0 instances ✅
- **TweenLite:** 0 instances ✅
- **TimelineMax/TimelineLite:** 0 instances ✅
- **Old imports:** 0 instances ✅
- **CSSPlugin:** 0 instances ✅

**Status:** ✅ PASS - Modern GSAP 3.x syntax compliance

**Research Validation:** Codebase follows Deep-Research Section 2.1 modern patterns
</check>

<template-output>deprecated_syntax_status, deprecated_count, tweenmax_count, tweenlite_count, timeline_count, old_import_count, cssplugin_count, deprecated_instances_list, migration_framework_applied</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 4: VALIDATE PLUGIN REGISTRATION (Tree Shaking Risk) -->
<!-- ============================================================ -->

<step n="4" goal="Tech Director: Validate Plugin Registration">
<action>Tech Director validates plugin registration using Deep-Research Section 2.5 framework</action>

**🔧 "Validating GSAP plugin registration (tree shaking protection)..."**

**Research Context (Section 2.5):**
- *"Modern build tools often use a process called tree shaking to remove unused code"*
- *"To prevent this, you must explicitly register the plugin(s) using gsap.registerPlugin"*

<action>Search for plugin imports and registration:</action>

### 4.1: Find Plugin Imports

```bash
rg "from ['\"]gsap/(ScrollTrigger|SplitText|MorphSVG|DrawSVG|MotionPath|ScrollSmoother|Flip)" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**Common Pattern (Correct):**
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);  // REQUIRED!
```

### 4.2: Find Plugin Registrations

```bash
rg "gsap\.registerPlugin|registerPlugin" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**Expected:** All imported plugins must appear in `registerPlugin()` calls

### 4.3: Cross-Reference

<action>Compare imported plugins vs registered plugins</action>

**Imported Plugins:** {{imported_plugins_list}}
**Registered Plugins:** {{registered_plugins_list}}
**Unregistered Plugins:** {{unregistered_plugins_list}}

---

**Plugin Registration Report:**

<check if="missing_registration">
**⚠️ PLUGINS IMPORTED BUT NOT REGISTERED**

{{unregistered_plugins_list}}

**SEVERITY:** MEDIUM (plugins won't work in production build)

**Impact (Deep-Research Section 2.5):**
- Build tools (Webpack, Vite, Rollup) will tree-shake unregistered plugins
- Plugins will appear to work in development
- **Production builds will fail** (plugins removed)

**Fix Pattern:**
```javascript
// Add this near your GSAP imports:
gsap.registerPlugin({{unregistered_plugins}});
```

**Research Source:** Section 2.5 - *"you must explicitly register the plugin(s) using gsap.registerPlugin"*
</check>

<check if="all_registered">
**✅ ALL IMPORTED PLUGINS PROPERLY REGISTERED**

{{registered_plugins_list}}

**Status:** ✅ PASS - Tree shaking protection in place

**Research Validation:** Follows Deep-Research Section 2.5 best practices
</check>

<template-output>imported_plugins_list, registered_plugins_list, unregistered_plugins_list, unregistered_plugins_count, plugin_registration_status, tree_shaking_protection_status</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 5: IDENTIFY PREMIUM PLUGIN OPPORTUNITIES (ALL FREE!) -->
<!-- ============================================================ -->

<step n="5" goal="Tech Director: Identify Premium Plugin Opportunities">
<action>Tech Director analyzes code for premium plugin upgrade opportunities using Deep-Research Section 2.3 framework</action>

**🔧 "Analyzing code for premium plugin opportunities (ALL FREE in 3.13+!)..."**

<critical>🎉 ALL premium plugins are FREE in GSAP 3.13+ - recommend liberally!</critical>

**Research Context (Section 2.3):**
- *"A major development: as of late 2023/2024, GSAP and all its official plugins are free for everyone"*
- *"This is a windfall... you can confidently use capabilities like ScrollTrigger and SplitText... without worrying about licensing"*
- **Previously: $99/year PER PLUGIN**
- **Now: 100% FREE (Webflow sponsorship)**

---

### 5.1: ScrollSmoother Opportunities

**Pattern Search:**
```bash
rg -i "smooth.*scroll|locomotive.*scroll|lenis" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**If custom smooth scroll found:**
- **Opportunity:** Replace with ScrollSmoother (was $99/year, now FREE!)
- **Research Quote:** *"A newer plugin (also free now) that provides smooth scrolling effect (a.k.a locomotive-style scroll easing) without external libraries"* (Section 2.3)
- **Pattern:** `ScrollSmoother.create({ smooth: 1.2, effects: true })`
- **Value:** Eliminate external dependency (Locomotive/Lenis) + get GSAP integration

### 5.2: SplitText Opportunities

**Pattern Search:**
```bash
rg -i "split.*text|text.*split|char.*animate|letter.*animate" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**If text splitting found:**
- **Opportunity:** Use SplitText (was premium, now FREE!)
- **Research Quote:** *"This plugin splits text into lines, words, and/or characters... enabling advanced typography animations"* (Section 2.3)
- **Pattern:** `new SplitText(".headline", { type: "words,chars" })`
- **Value:** Professional text reveals without custom DOM manipulation

### 5.3: MorphSVG Opportunities

**Pattern Search:**
```bash
rg -i "svg.*morph|path.*animate|shape.*transition" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**If SVG morphing found:**
- **Opportunity:** Use MorphSVG (was premium, now FREE!)
- **Research Quote:** *"Allows morphing one SVG shape into another... for icon transitions or creative effects"* (Section 2.3)
- **Pattern:** `gsap.to("#icon1", { morphSVG: "#icon2" })`
- **Value:** Smooth SVG shape morphing (previously required expensive library)

### 5.4: DrawSVG Opportunities

**Pattern Search:**
```bash
rg -i "stroke.*dashoffset|svg.*draw|line.*animate" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**If SVG line drawing found:**
- **Opportunity:** Use DrawSVG (was premium, now FREE!)
- **Value:** Elegant SVG line animations with one-liner API

### 5.5: MotionPath Opportunities

**Pattern Search:**
```bash
rg -i "follow.*path|motion.*path|path.*animate" {codebase_root} -g "*.js" -g "*.jsx" -g "*.ts" -g "*.tsx" --line-number
```

**If path following found:**
- **Opportunity:** Use MotionPath (was premium, now FREE!)
- **Research Quote:** *"Lets you animate objects along an SVG path... like an element following a curved path"* (Section 2.3)
- **Pattern:** `gsap.to(".plane", { motionPath: { path: "#flightPath", autoRotate: true } })`
- **Value:** Professional path animations without math

---

**Premium Plugin Opportunities Report:**

**ScrollSmoother:** {{scrollsmoother_opportunities_count}} opportunities
**MorphSVG:** {{morphsvg_opportunities_count}} opportunities
**SplitText:** {{splittext_opportunities_count}} opportunities
**DrawSVG:** {{drawsvg_opportunities_count}} opportunities
**MotionPath:** {{motionpath_opportunities_count}} opportunities

**Total Opportunities:** {{total_premium_opportunities}}

<check if="premium_opportunities_found">
**🎉 PREMIUM PLUGIN UPGRADE OPPORTUNITIES DETECTED**

**These plugins are NOW FREE in GSAP 3.13+!**

{{premium_opportunities_list}}

**Value Proposition (Research-Backed):**
- **Previous Cost:** $99/year PER PLUGIN
- **Current Cost:** $0 (100% FREE)
- **Total Savings:** ${{total_premium_value_if_paid}}/year

**Recommendation:** Upgrade implementations to use premium plugins (zero cost!)

**Research Source:** Deep-Research Section 2.3 - *"As of late 2023/2024, GSAP and all its official plugins are free for everyone"*
</check>

<check if="no_premium_opportunities">
**✅ NO PREMIUM PLUGIN OPPORTUNITIES DETECTED**

No obvious use cases found for premium plugins based on current code patterns.

**Note:** Premium plugins are available if needed in future:
- ScrollSmoother, SplitText, MorphSVG, DrawSVG, MotionPath - ALL FREE!
</check>

<template-output>premium_opportunities_count, scrollsmoother_opportunities, morphsvg_opportunities, splittext_opportunities, drawsvg_opportunities, motionpath_opportunities, total_premium_value_if_paid, premium_opportunities_list</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 6: GENERATE RESEARCH-BACKED COMPLIANCE REPORT -->
<!-- ============================================================ -->

<step n="6" goal="Tech Director: Generate Comprehensive Compliance Report">
<action>Tech Director compiles research-backed compliance report with Deep-Research citations</action>

**🔧 "Generating comprehensive GSAP 3.13+ compliance report with research citations..."**

**GSAP 3.13+ COMPLIANCE REPORT**

**1. VERSION COMPLIANCE (Section 2.3 Framework):**
- **Installed Version:** {{gsap_version}}
- **Required Version:** ≥3.13.0
- **Status:** {{version_compliance_status}}
- **Premium Plugins Accessible:** {{premium_plugins_available}}
- **Research Citation:** *"GSAP and all its official plugins are free for everyone"* (Section 2.3)

**2. DEPRECATED SYNTAX (Section 2.1 Framework):**
- **Total Instances:** {{deprecated_count}}
- **Status:** {{deprecated_syntax_status}}
- **Severity:** {{deprecated_severity}}
- **Migration Framework:** Deep-Research Section 2.1 (TweenMax → gsap.to, TimelineMax → gsap.timeline)
- **Locations:** {{deprecated_instances_list}}

**3. PLUGIN REGISTRATION (Section 2.5 Framework):**
- **Imported Plugins:** {{imported_plugins_count}}
- **Registered Plugins:** {{registered_plugins_count}}
- **Unregistered Plugins:** {{unregistered_plugins_count}}
- **Status:** {{plugin_registration_status}}
- **Tree Shaking Protection:** {{tree_shaking_protection_status}}
- **Research Citation:** *"Modern build tools use tree shaking... you must explicitly register plugins"* (Section 2.5)

**4. PREMIUM PLUGIN OPPORTUNITIES (Section 2.3 Framework):**
- **Total Opportunities:** {{premium_opportunities_count}}
- **Potential Value:** ${{total_premium_value_if_paid}}/year (all FREE!)
- **Details:** {{premium_opportunities_list}}
- **Research Citation:** *"This is a windfall... you can confidently use capabilities without worrying about licensing"* (Section 2.3)

**5. OVERALL COMPLIANCE:**

<check if="fully_compliant">
**✅ GSAP 3.13+ FULLY COMPLIANT**

- ✅ Version: 3.13.0+ (all premium plugins FREE)
- ✅ No deprecated syntax (modern gsap.to/timeline API)
- ✅ Plugins properly registered (tree shaking protected)
- ✅ Ready for GSAP Excellence Engine workflows

**Status:** PASS

**Research Validation:** Follows Deep-Research Sections 2.1, 2.3, 2.5 best practices
</check>

<check if="has_issues">
**🔴 COMPLIANCE ISSUES DETECTED**

**Blockers (HIGH Priority - Must Fix):**
{{high_priority_issues}}

**Warnings (MEDIUM Priority - Should Fix):**
{{medium_priority_issues}}

**Recommendations (LOW Priority - Consider):**
{{low_priority_issues}}

**Status:** FAIL

**Research-Backed Remediation:** See upgrade recommendations in Step 7
</check>

<action>Save compliance report to file with Deep-Research citations</action>

**Report saved to:** {{default_output_file}}

<template-output>overall_compliance_status, compliance_summary_table, high_priority_issues, medium_priority_issues, low_priority_issues, deep_research_citations_included</template-output>
</step>

<!-- ============================================================ -->
<!-- STEP 7: PROVIDE RESEARCH-BACKED UPGRADE RECOMMENDATIONS -->
<!-- ============================================================ -->

<step n="7" goal="Tech Director: Provide Research-Backed Upgrade Recommendations">
<action>Tech Director provides prioritized upgrade recommendations using Deep-Research frameworks</action>

**🔧 "Generating research-backed upgrade recommendations..."**

**UPGRADE RECOMMENDATIONS (Research-Backed, Prioritized)**

---

**🔴 HIGH PRIORITY (Blockers - Must Fix)**

<check if="version < 3.13.0">
**1. Upgrade GSAP to 3.13.0+ (Section 2.3)**
   - **Current:** {{gsap_version}}
   - **Target:** ≥3.13.0
   - **Command:** `npm install gsap@latest`
   - **Value:** Unlock $495+/year in FREE premium plugins!
   - **Research Quote:** *"GSAP and all its official plugins are free for everyone (no club membership needed)"* (Section 2.3)
   - **Impact:** Access ScrollSmoother, SplitText, MorphSVG, DrawSVG, MotionPath (all FREE!)
</check>

<check if="deprecated_count > 0">
**2. Migrate Deprecated Syntax (Section 2.1)**
   - **Total Instances:** {{deprecated_count}}
   - **Files Affected:** {{deprecated_files_count}}
   - **Migration Framework:** Deep-Research Section 2.1
     - TweenMax/TweenLite → gsap.to/from/fromTo
     - TimelineMax/TimelineLite → gsap.timeline()
     - Remove CSSPlugin imports (automatic)
   - **Migration Guide:** https://gsap.com/docs/v3/GSAP3/Migrating/
   - **Impact:** Required for GSAP 3.x compatibility
</check>

---

**⚠️ MEDIUM PRIORITY (Warnings - Should Fix)**

<check if="unregistered_plugins_count > 0">
**3. Register Imported Plugins (Section 2.5)**
   - **Unregistered Plugins:** {{unregistered_plugins_list}}
   - **Fix:** Add `gsap.registerPlugin({{unregistered_plugins}})`
   - **Research Quote:** *"Modern build tools use tree shaking... you must explicitly register plugins"* (Section 2.5)
   - **Impact:** Plugins will be removed in production builds (tree shaking)
   - **Severity:** MEDIUM (dev works, production fails)
</check>

---

**💡 LOW PRIORITY (Recommendations - Consider)**

<check if="premium_opportunities_count > 0">
**4. Consider Premium Plugin Upgrades (Section 2.3 - ALL FREE!)**

**Available Opportunities:**
- **ScrollSmoother:** {{scrollsmoother_opportunities_count}} opportunities (was $99/year → FREE!)
  - Replace Locomotive/Lenis with GSAP-native smooth scroll
- **SplitText:** {{splittext_opportunities_count}} opportunities (was premium → FREE!)
  - Professional text reveals without custom DOM manipulation
- **MorphSVG:** {{morphsvg_opportunities_count}} opportunities (was premium → FREE!)
  - Smooth SVG shape morphing with one-liner API
- **DrawSVG:** {{drawsvg_opportunities_count}} opportunities (was premium → FREE!)
  - Elegant SVG line drawing animations
- **MotionPath:** {{motionpath_opportunities_count}} opportunities (was premium → FREE!)
  - Professional path-following animations

**Total Potential Value:** ${{total_premium_value_if_paid}}/year (100% FREE!)

**Research Quote:** *"This is a windfall... you can confidently use capabilities without worrying about licensing"* (Section 2.3)

**Impact:** Better animations with premium features (zero cost!)
</check>

---

**Next Steps (Research-Backed):**

1. **Address HIGH priority items first** (version upgrade, deprecated syntax)
   - Framework: Deep-Research Sections 2.1, 2.3
2. **Fix MEDIUM priority warnings** (plugin registration)
   - Framework: Deep-Research Section 2.5
3. **Consider LOW priority recommendations** (premium plugin upgrades)
   - Framework: Deep-Research Section 2.3 (opportunity detection)
4. **Re-run validate-modern workflow** to confirm compliance

<ask>Compliance scan complete. Review research-backed report? [done]</ask>

<template-output>high_priority_recommendations, medium_priority_recommendations, low_priority_recommendations, next_steps, deep_research_frameworks_applied</template-output>
</step>

</workflow>

## Research Citations

**Deep-Research Sections Used:**
- Section 2.1: Core GSAP Concepts (modern syntax, timelines, deprecation patterns)
- Section 2.3: The 2024 GSAP Plugin Ecosystem (FREE premium plugins, opportunity detection)
- Section 2.5: Integration Patterns (React cleanup, registerPlugin requirement, SSR safety)

**Total Research Backing:** 2.2M+ words from GSAP Excellence Deep-Research knowledge base

## Validation Standards (Research-Backed)

**Version Compliance (Section 2.3):**
- ✅ GSAP ≥3.13.0 (all premium plugins FREE)
- ⚠️ GSAP 3.0-3.12 (upgrade recommended)
- 🔴 GSAP <3.0 (major upgrade required)

**Syntax Compliance (Section 2.1):**
- ✅ GSAP 3.x (gsap.to, gsap.timeline)
- 🔴 GSAP 2.x (TweenMax, TimelineMax)

**Plugin Compliance (Section 2.5):**
- ✅ All plugins registered with gsap.registerPlugin()
- ⚠️ Some plugins unregistered (tree shaking risk)

## Success Metrics

**Validation Success:**
- ✅ Complete codebase scan performed
- ✅ GSAP version identified and validated
- ✅ All deprecated syntax found (file:line locations)
- ✅ Plugin registration validated (tree shaking protection)
- ✅ Premium plugin opportunities identified
- ✅ Research-backed compliance report generated
- ✅ Prioritized upgrade recommendations with Deep-Research citations

**Note:** This workflow is READ-ONLY - NO CODE CHANGES made automatically
