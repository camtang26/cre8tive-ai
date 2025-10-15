# Chrome DevTools MCP - Codex CLI Agent Guide

## 🚨 CRITICAL: DO NOT Manually Manage the MCP Server

Codex CLI automatically manages the chrome-devtools-mcp server. **NEVER**:
- ❌ Start the server manually: `chrome-devtools-mcp &`
- ❌ Check for processes: `pgrep -f chrome-devtools-mcp`
- ❌ Kill processes (except for specific error recovery below)
- ❌ Try to "ensure server is running" or "prepare environment"

**Why:** The server is managed via stdio by Codex. Manual management causes conflicts.

---

## ✅ How to Use Chrome DevTools MCP

### Basic Pattern

```typescript
// 1. Just call tools directly - server auto-starts on first call
await chrome-devtools.navigate_page({ url: "http://localhost:8080" });

// 2. Take screenshots
await chrome-devtools.take_screenshot();

// 3. Get page structure for interaction
const snapshot = await chrome-devtools.take_snapshot();

// That's it! No manual setup needed.
```

### Common Operations

**Navigation:**
```typescript
await chrome-devtools.navigate_page({ url: "..." });
```

**Screenshot (viewport only - NOT fullPage):**
```typescript
await chrome-devtools.take_screenshot();
```

**Get element UIDs for clicking:**
```typescript
const snapshot = await chrome-devtools.take_snapshot();
// Returns: uid=1_0 RootWebArea, uid=1_1 button "Submit", etc.
```

**Check console errors:**
```typescript
const messages = await chrome-devtools.list_console_messages();
```

**Monitor network:**
```typescript
const requests = await chrome-devtools.list_network_requests({
  resourceTypes: ["xhr", "fetch"]
});
```

**Inspect request/response:**
```typescript
const req = await chrome-devtools.get_network_request({
  url: "https://api.example.com/data"
});
// Shows: headers, response body, status
```

---

## 🔧 Error Recovery

### "Browser already running" Error

**Symptoms:**
```
The browser is already running for /home/cameronai/.cache/chrome-devtools-mcp/chrome-profile
Use --isolated to run multiple browser instances
```

**Fix:**
1. Run: `pkill -f "node.*chrome-devtools-mcp"`
2. Retry your tool call (server auto-restarts)

**Important:** Kill the **node process**, not Chrome itself.

---

## 📸 Screenshot Best Practices

### ⚠️ NEVER use `fullPage: true` for Page Reviews

**Why it's wrong:**
- Creates extremely tall images (1920 x 5000+ pixels)
- Poor aspect ratio, hard to review
- Not how humans view pages

### ✅ Correct Pattern: Scroll and Screenshot

```typescript
// Step 1: Navigate
await chrome-devtools.navigate_page({ url: "http://localhost:8080/page" });

// Step 2: Screenshot top section (1920x~1000 - normal aspect ratio)
await chrome-devtools.take_screenshot();

// Step 3: Scroll down 80% of viewport height
await chrome-devtools.evaluate_script({
  function: `() => window.scrollBy(0, window.innerHeight * 0.8)`
});

// Step 4: Screenshot middle section
await chrome-devtools.take_screenshot();

// Step 5: Scroll down again
await chrome-devtools.evaluate_script({
  function: `() => window.scrollBy(0, window.innerHeight * 0.8)`
});

// Step 6: Screenshot bottom section
await chrome-devtools.take_screenshot();

// Repeat steps 5-6 until you reach the bottom
```

**Result:** Normal-aspect-ratio images that are easy to review.

**When to use fullPage (rare):**
- ✅ Visual regression testing (before/after comparison)
- ✅ Archiving entire page as single image
- ❌ NEVER for reviewing or inspecting page content

---

## 📊 Viewport & Resolution

**Default viewport:** 1920x1080 (configured in Codex config.toml)

**To verify:**
```typescript
const dims = await chrome-devtools.evaluate_script({
  function: `() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    screen: { width: window.screen.width, height: window.screen.height }
  })`
});
// Expected: viewport { width: 1920, height: 1080 }
```

---

## 🎯 Page Review Workflow

For systematic page review across device widths:

```typescript
// 1. Navigate to page
await chrome-devtools.navigate_page({ url: "http://localhost:8080/page" });

// 2. Take top section screenshot
await chrome-devtools.take_screenshot();

// 3. Scroll and screenshot incrementally
for (let i = 0; i < 3; i++) {
  await chrome-devtools.evaluate_script({
    function: `() => window.scrollBy(0, window.innerHeight * 0.8)`
  });
  await chrome-devtools.take_screenshot();
}

// 4. Resize for next width (if needed)
await chrome-devtools.resize_page({ width: 1440, height: 900 });

// 5. Repeat for each width
```

---

## 🚫 Common Mistakes to Avoid

1. **"Let me start the MCP server first..."**
   - ❌ WRONG: Just call the tool - server auto-starts

2. **"Let me check if the server is running..."**
   - ❌ WRONG: Don't check - just use the tool

3. **"Taking full page screenshot for review..."**
   - ❌ WRONG: Use scroll-and-screenshot pattern instead

4. **"Killing Chrome process: `pkill chrome`..."**
   - ❌ WRONG: Only kill node process if you see profile lock error

5. **"Let me run `chrome-devtools-mcp &` to prepare..."**
   - ❌ WRONG: Codex manages the server - don't start manually

---

## 📚 Advanced Features (v0.8.1)

**Network Emulation:**
```typescript
// Test offline behavior
await chrome-devtools.emulate_network({ throttlingOption: "Offline" });

// Test slow connection
await chrome-devtools.emulate_network({ throttlingOption: "Slow 3G" });

// Reset
await chrome-devtools.emulate_network({ throttlingOption: "No emulation" });
```

**Dialog Handling:**
```typescript
await chrome-devtools.handle_dialog({ action: "accept" });
await chrome-devtools.handle_dialog({ action: "dismiss" });
```

**Enhanced Snapshots:** (v0.8.1 includes selected option values)
```typescript
const snapshot = await chrome-devtools.take_snapshot();
// Shows: uid=1_5 combobox "Country"
//          option "USA" [selected]
//          option "Canada"
```

---

## ⚡ Quick Reference

| Task | Command |
|------|---------|
| Navigate | `chrome-devtools.navigate_page({ url: "..." })` |
| Screenshot | `chrome-devtools.take_screenshot()` |
| Get elements | `chrome-devtools.take_snapshot()` |
| Click element | `chrome-devtools.click({ uid: "1_2" })` |
| Scroll down | `chrome-devtools.evaluate_script({ function: "() => window.scrollBy(0, window.innerHeight * 0.8)" })` |
| Console errors | `chrome-devtools.list_console_messages()` |
| Network requests | `chrome-devtools.list_network_requests()` |
| Request details | `chrome-devtools.get_network_request({ url: "..." })` |

---

## 🔍 Troubleshooting

**Tool call fails with no output:**
- Server is starting (first call takes ~2 seconds)
- Just retry the call once

**"Browser already running" error:**
- run: `pkill -f "node.*chrome-devtools-mcp"`
- Then retry your tool call

**Screenshots appear at wrong resolution:**
- Verify with evaluate_script (see Viewport section)
- Should be 1920x1080

---

**Version:** Chrome DevTools MCP v0.8.1
**Last Updated:** 2025-10-15
**For:** Codex CLI (GPT-5-Codex) agents
