# Chrome DevTools MCP - Complete Reference Guide

**Version:** 0.8.1 (Official Release)
**Last Updated:** 2025-10-14
**Status:** ✅ Fully Functional (1920x1080, Remote Viewing Enabled)

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Configuration](#configuration)
4. [Available Tools](#available-tools)
5. [Usage Guide](#usage-guide)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)
8. [Examples](#examples)
9. [Technical Details](#technical-details)

---

## Overview

### What is Chrome DevTools MCP?

Chrome DevTools MCP is a Model Context Protocol server that allows Claude to control and inspect a Chrome browser programmatically. It provides tools for:

- **Navigation:** Load URLs, navigate history
- **Inspection:** Take screenshots, snapshots, read console
- **Interaction:** Click, fill forms, drag elements
- **Scripting:** Execute JavaScript in page context
- **Monitoring:** Track network requests, console messages

### Setup Features

This installation provides:

1. **Viewport Resolution:** Official 1920x1080 support (included in v0.6.1+)
2. **Remote Viewing Capability:** Custom CDP proxy for real-time browser observation from Windows
3. **Latest Features:** v0.8.1 includes network inspection, custom Chrome args, and enhanced performance tools

**Installation Path:** `~/.npm-global/bin/chrome-devtools-mcp` (official npm package: chrome-devtools-mcp@0.8.1)

---

## Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                     Windows (Host OS)                        │
│                                                              │
│  ┌──────────────┐         ┌──────────────────────┐         │
│  │   Chrome     │ ◄─────► │  chrome://inspect    │         │
│  │  (Windows)   │         │  localhost:9223      │         │
│  └──────────────┘         └──────────┬───────────┘         │
│                                      │                       │
│                                      │ Port 9223             │
└──────────────────────────────────────┼───────────────────────┘
                                       │
                        netsh portproxy (Windows)
                                       │
┌──────────────────────────────────────┼───────────────────────┐
│                      WSL2 (Ubuntu)   │                       │
│                                      ▼                       │
│  ┌────────────────────────────────────────────────┐         │
│  │  CDP Proxy Service (systemd)                   │         │
│  │  - Listen: 0.0.0.0:9223                        │         │
│  │  - Forward: localhost:9222                     │         │
│  │  - Handles: HTTP + WebSocket                   │         │
│  │  - Auto-starts on boot                         │         │
│  └─────────────────┬──────────────────────────────┘         │
│                    │                                         │
│                    ▼                                         │
│  ┌────────────────────────────────────────────────┐         │
│  │  Chrome Browser (Headless)                     │         │
│  │  - Remote Debugging: localhost:9222            │         │
│  │  - Viewport: 1920x1080                         │         │
│  │  - Controlled by: chrome-devtools-mcp          │         │
│  └────────────────┬───────────────────────────────┘         │
│                   │                                          │
│                   ▼                                          │
│  ┌────────────────────────────────────────────────┐         │
│  │  Chrome DevTools MCP Server                    │         │
│  │  - Command: chrome-devtools-mcp                │         │
│  │  - Protocol: Model Context Protocol            │         │
│  │  - Used by: Claude Code instances              │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### How It Works

1. **Claude Code** communicates with **Chrome DevTools MCP** via stdio
2. **MCP** launches and controls **Chrome Browser** via Puppeteer (CDP)
3. **Chrome** runs headless with remote debugging on port 9222
4. **CDP Proxy** (port 9223) forwards HTTP/WebSocket to Chrome (port 9222)
5. **Windows Port Forwarding** makes WSL port 9223 accessible from Windows
6. **User** watches live via chrome://inspect in Windows Chrome

---

## Configuration

### MCP Configuration (~/.claude.json)

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "chrome-devtools-mcp",
      "args": [
        "--viewport=1920x1080",
        "--headless=true"
      ]
    }
  }
}
```

**Configuration Applied to Projects:**
- `/home/cameronai/projects/cre8tive-website`
- `/home/cameronai/projects/chrome-devtools`

### Available Arguments

| Argument | Default | Description |
|----------|---------|-------------|
| `--viewport=WIDTHxHEIGHT` | `1920x1080` | Browser viewport size (max 3840x2160 in headless) |
| `--headless=BOOL` | `false` | Run browser headless |
| `--channel=CHANNEL` | `stable` | Chrome channel (stable, beta, dev, canary) |
| `--isolated` | `false` | Use temporary profile |
| `--user-data-dir=PATH` | Auto | Custom profile directory |
| `--chromeArg=ARG` | None | Additional Chrome args (v0.8.0+, repeatable) |
| `--proxyServer=URL` | None | Proxy server configuration |
| `--acceptInsecureCerts` | `false` | Ignore cert errors (use with caution) |

**Note:** Always use `--headless=true` in WSL2 (no display server).

### CDP Proxy Service

**Service File:** `~/.config/systemd/user/cdp-proxy.service`

```ini
[Unit]
Description=Chrome DevTools Protocol Proxy for MCP
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/python3 /home/cameronai/.local/bin/cdp-proxy
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
```

**Service Management:**
```bash
# Status
systemctl --user status cdp-proxy

# Start
systemctl --user start cdp-proxy

# Stop
systemctl --user stop cdp-proxy

# Restart
systemctl --user restart cdp-proxy

# Enable auto-start
systemctl --user enable cdp-proxy

# View logs
journalctl --user -u cdp-proxy -f
```

---

## Available Tools

### Navigation Tools

#### `navigate_page`
Navigate to a URL.

**Parameters:**
- `url` (string, required): URL to navigate to
- `timeout` (number, optional): Max wait time in ms (default: 30000)

**Example:**
```typescript
await mcp.navigate_page({
  url: "https://example.com",
  timeout: 10000
});
```

#### `navigate_page_history`
Navigate browser history.

**Parameters:**
- `navigate` (enum, required): `"back"` or `"forward"`
- `timeout` (number, optional): Max wait time in ms

**Example:**
```typescript
await mcp.navigate_page_history({ navigate: "back" });
```

#### `list_pages`
List all open browser pages.

**Returns:** Array of page titles and URLs

**Example:**
```typescript
const pages = await mcp.list_pages();
// Returns: { pages: [{ title, url, selected }] }
```

#### `select_page`
Switch to a different page/tab.

**Parameters:**
- `pageIdx` (number, required): Page index from list_pages

#### `new_page`
Open a new page/tab.

**Parameters:**
- `url` (string, required): URL to open
- `timeout` (number, optional)

#### `close_page`
Close a page/tab.

**Parameters:**
- `pageIdx` (number, required): Page index to close

**Note:** Cannot close the last page.

---

### Inspection Tools

#### `take_screenshot`
Capture screenshot of current viewport.

**Parameters:**
- `uid` (string, optional): Element UID to screenshot (from snapshot)
- `fullPage` (boolean, optional): Capture full page scrolling (incompatible with uid)
- `format` (enum, optional): `"png"`, `"jpeg"`, `"webp"` (default: "png")
- `quality` (number, optional): 0-100, for jpeg/webp only
- `filePath` (string, optional): Save to file instead of returning

**⚠️ CRITICAL: Do NOT use `fullPage: true` for page reviews!**

**Why fullPage is wrong for page reviews:**
- Creates extremely tall images (1920 x 5000+ pixels)
- Images appear narrow and hard to read
- Not how humans review pages
- Poor aspect ratio for viewing

**✅ CORRECT approach for reviewing web pages:**

```typescript
// Step 1: Start at top
await mcp.navigate_page({ url: "https://example.com" });

// Step 2: Take viewport screenshot (top section)
await mcp.take_screenshot();

// Step 3: Scroll down to next section
await mcp.evaluate_script({
  function: `() => window.scrollBy(0, window.innerHeight * 0.8)`
});

// Step 4: Take another viewport screenshot
await mcp.take_screenshot();

// Step 5: Repeat until bottom of page
// Each screenshot will be normal aspect ratio (1920 x ~1000)
```

**When to use fullPage:**
- ✅ Visual regression testing (comparing before/after)
- ✅ Archiving entire page as single image
- ❌ NEVER for reviewing/inspecting page content

**Standard usage:**
```typescript
// Viewport screenshot (RECOMMENDED for page reviews)
await mcp.take_screenshot();

// Save to file
await mcp.take_screenshot({
  filePath: "/tmp/screenshot.png",
  format: "png"
});

// Element-specific screenshot
const snapshot = await mcp.take_snapshot();
await mcp.take_screenshot({ uid: "1_5" });
```

**Returns:** Image data (unless filePath specified)

#### `take_snapshot`
Get accessibility tree snapshot with UIDs for interaction.

**Returns:** Hierarchical text representation with unique IDs

**Example:**
```typescript
const snapshot = await mcp.take_snapshot();
// Returns:
// uid=1_0 RootWebArea "Example Domain"
//   uid=1_1 heading "Example Domain" level="1"
//   uid=1_2 link "More information..."
```

**Important:** UIDs change on every snapshot. Always take fresh snapshot before clicking/filling.

---

### Interaction Tools

#### `click`
Click an element.

**Parameters:**
- `uid` (string, required): Element UID from snapshot
- `dblClick` (boolean, optional): Double click (default: false)

**Example:**
```typescript
// Get fresh snapshot
const snapshot = await mcp.take_snapshot();
// Find link with uid=1_2
await mcp.click({ uid: "1_2" });
```

#### `fill`
Fill input or select element.

**Parameters:**
- `uid` (string, required): Element UID
- `value` (string, required): Value to fill

**Example:**
```typescript
await mcp.fill({
  uid: "2_5",
  value: "search query"
});
```

#### `fill_form`
Fill multiple form fields at once.

**Parameters:**
- `elements` (array, required): Array of `{uid, value}` objects

**Example:**
```typescript
await mcp.fill_form({
  elements: [
    { uid: "1_3", value: "john@example.com" },
    { uid: "1_4", value: "password123" }
  ]
});
```

#### `hover`
Hover over an element.

**Parameters:**
- `uid` (string, required): Element UID

#### `drag`
Drag and drop element.

**Parameters:**
- `from_uid` (string, required): Element to drag
- `to_uid` (string, required): Drop target

#### `upload_file`
Upload file through file input.

**Parameters:**
- `uid` (string, required): File input element UID
- `filePath` (string, required): Local file path

---

### Scripting Tools

#### `evaluate_script`
Execute JavaScript in page context.

**Parameters:**
- `function` (string, required): JavaScript function to execute
- `args` (array, optional): Array of `{uid}` objects to pass as arguments

**Returns:** JSON-serializable return value

**Example:**
```typescript
// No arguments
const result = await mcp.evaluate_script({
  function: `() => {
    return {
      title: document.title,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  }`
});

// With element argument
const snapshot = await mcp.take_snapshot();
const text = await mcp.evaluate_script({
  function: `(el) => el.innerText`,
  args: [{ uid: "1_2" }]
});
```

**Important:** Function must be JSON-serializable. No DOM elements, functions, or circular references in return value.

---

### Monitoring Tools

#### `list_network_requests`
Get all network requests.

**Parameters:**
- `pageIdx` (number, optional): Page number (0-based)
- `pageSize` (number, optional): Max requests to return
- `resourceTypes` (array, optional): Filter by type (document, stylesheet, image, script, xhr, fetch, etc.)

**Example:**
```typescript
// All requests
await mcp.list_network_requests();

// Only XHR/Fetch
await mcp.list_network_requests({
  resourceTypes: ["xhr", "fetch"]
});

// Paginated
await mcp.list_network_requests({
  pageIdx: 0,
  pageSize: 20
});
```

#### `get_network_request`
Get specific request by URL.

**Parameters:**
- `url` (string, required): Request URL

#### `list_console_messages`
Get all console messages.

**Returns:** Array of console logs, warnings, errors

**Example:**
```typescript
const messages = await mcp.list_console_messages();
// Returns: [{ type, text, timestamp }]
```

---

### Dialog Handling

#### `handle_dialog`
Handle browser dialogs (alert, confirm, prompt).

**Parameters:**
- `action` (enum, required): `"accept"` or `"dismiss"`
- `promptText` (string, optional): Text for prompt dialog

**Example:**
```typescript
// Accept confirm dialog
await mcp.handle_dialog({ action: "accept" });

// Prompt with input
await mcp.handle_dialog({
  action: "accept",
  promptText: "User input"
});
```

---

### Performance Tools

#### `performance_start_trace`
Start performance recording.

**Parameters:**
- `reload` (boolean, required): Reload page when starting
- `autoStop` (boolean, required): Auto-stop when page loads

#### `performance_stop_trace`
Stop performance recording and get results.

**Returns:** Performance insights, Core Web Vitals

#### `performance_analyze_insight`
Get detailed analysis of specific insight.

**Parameters:**
- `insightName` (string, required): Name of insight to analyze

---

### Window Management

#### `resize_page`
Resize browser window.

**Parameters:**
- `width` (number, required): Window width
- `height` (number, required): Window height

**Example:**
```typescript
await mcp.resize_page({
  width: 1920,
  height: 1080
});
```

---

### Network Emulation

#### `emulate_network`
Emulate network conditions.

**Parameters:**
- `throttlingOption` (enum, required): `"No emulation"`, `"Slow 3G"`, `"Fast 3G"`, `"Slow 4G"`, `"Fast 4G"`

#### `emulate_cpu`
Emulate CPU throttling.

**Parameters:**
- `throttlingRate` (number, required): 1-20x slowdown (1 = disabled)

---

## Usage Guide

### Basic Workflow

```typescript
// 1. Navigate
await mcp.navigate_page({ url: "https://example.com" });

// 2. Take snapshot to get element UIDs
const snapshot = await mcp.take_snapshot();
// uid=1_0 RootWebArea "Example Domain"
//   uid=1_1 heading "Example Domain"
//   uid=1_2 link "More information..."

// 3. Interact with elements
await mcp.click({ uid: "1_2" });

// 4. Take screenshot
await mcp.take_screenshot();

// 5. Check console
const messages = await mcp.list_console_messages();

// 6. Monitor network
const requests = await mcp.list_network_requests();
```

### Important Patterns

#### Always Take Fresh Snapshots

UIDs change after:
- Navigation
- DOM mutations
- JavaScript execution
- User interactions

**Wrong:**
```typescript
const snapshot = await mcp.take_snapshot();
await mcp.click({ uid: "1_2" });
// Page changed!
await mcp.click({ uid: "1_3" }); // ❌ UID invalid
```

**Correct:**
```typescript
const snapshot1 = await mcp.take_snapshot();
await mcp.click({ uid: "1_2" });
// Take fresh snapshot
const snapshot2 = await mcp.take_snapshot();
await mcp.click({ uid: "2_5" }); // ✅ Fresh UID
```

#### Handle Dialogs Immediately

Dialogs block page interaction:

```typescript
await mcp.click({ uid: "submit_button" });
// Dialog appears!
await mcp.handle_dialog({ action: "accept" });
// Now can continue
```

#### Verify Viewport Dimensions

```typescript
const result = await mcp.evaluate_script({
  function: `() => ({
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    screen: {
      width: window.screen.width,
      height: window.screen.height
    }
  })`
});
// Expected: screen: { width: 1920, height: 1080 }
```

---

## Best Practices

### Performance

1. **Use headless mode** (`--headless=true`)
   - Faster rendering
   - Lower memory usage
   - Required in WSL2 (no display)

2. **Reuse browser instance**
   - MCP manages single browser across all operations
   - Don't restart unnecessarily

3. **Batch operations**
   - Take one snapshot, interact with multiple elements
   - Use `fill_form` instead of multiple `fill` calls

### Reliability

1. **Always check page load**
   ```typescript
   await mcp.navigate_page({
     url: "https://example.com",
     timeout: 10000
   });
   // Wait for snapshot to ensure page loaded
   await mcp.take_snapshot();
   ```

2. **Handle network errors gracefully**
   - Set reasonable timeouts
   - Check console for errors
   - Verify navigation succeeded

3. **Wait for dynamic content**
   ```typescript
   await mcp.navigate_page({ url: "https://spa-app.com" });
   // Wait for content
   await mcp.wait_for({
     text: "Expected content",
     timeout: 5000
   });
   ```

### Debugging

1. **Take screenshots at key points**
   ```typescript
   await mcp.navigate_page({ url: "https://example.com" });
   await mcp.take_screenshot(); // Verify page loaded

   await mcp.click({ uid: "1_2" });
   await mcp.take_screenshot(); // Verify click worked
   ```

2. **Check console for errors**
   ```typescript
   const messages = await mcp.list_console_messages();
   const errors = messages.filter(m => m.type === 'error');
   ```

3. **Monitor network requests**
   ```typescript
   const requests = await mcp.list_network_requests({
     resourceTypes: ["xhr", "fetch"]
   });
   // Check for failed requests
   ```

### Page Review Screenshots

**⚠️ CRITICAL: Never use `fullPage: true` for reviewing web pages!**

**Why fullPage creates problems:**
- Produces extremely tall images (1920 x 5000+ pixels)
- Images appear narrow and difficult to read
- Poor aspect ratio (not how humans view pages)
- Not suitable for visual review or inspection

**✅ CORRECT Pattern - Scroll and Screenshot:**

```typescript
// Step 1: Navigate to page
await mcp.navigate_page({ url: "https://example.com" });

// Step 2: Take viewport screenshot (top section)
await mcp.take_screenshot(); // 1920 x ~1000 - normal aspect ratio

// Step 3: Scroll down to next section
await mcp.evaluate_script({
  function: `() => window.scrollBy(0, window.innerHeight * 0.8)`
});

// Step 4: Take another viewport screenshot (middle section)
await mcp.take_screenshot();

// Step 5: Scroll down again
await mcp.evaluate_script({
  function: `() => window.scrollBy(0, window.innerHeight * 0.8)`
});

// Step 6: Take screenshot (bottom section)
await mcp.take_screenshot();

// Continue until bottom of page
```

**This approach:**
- ✅ Creates normal aspect ratio screenshots (1920 x ~1000)
- ✅ Mimics how humans review pages (scroll and look)
- ✅ Easy to view and analyze each section
- ✅ Works consistently with 1920x1080 viewport

**When to use fullPage:**
- ✅ Visual regression testing (comparing before/after)
- ✅ Archiving entire page as single image
- ✅ Creating page thumbnails
- ❌ NEVER for reviewing or inspecting page content

---

## Troubleshooting

### MCP Not Starting

**Symptom:** MCP fails to launch or connect

**Diagnosis:**
```bash
# Check if Chrome is running
ps aux | grep chrome | grep remote-debugging

# Check MCP command exists
which chrome-devtools-mcp

# Test manual launch
chrome-devtools-mcp --viewport=1920x1080 --headless=true
```

**Common Causes:**
- Chrome not installed: `sudo apt install google-chrome-stable`
- npm link broken: Re-run `npm link` in `/home/cameronai/projects/chrome-devtools/chrome-devtools-mcp-fixed`
- Port 9222 in use: Kill existing Chrome processes

### Viewport Still Wrong

**Symptom:** Screenshots show 800x600 resolution

**Diagnosis:**
```typescript
const result = await mcp.evaluate_script({
  function: `() => ({
    screen: {
      width: window.screen.width,
      height: window.screen.height
    }
  })`
});
```

**Fix:**
- Ensure using custom build: `which chrome-devtools-mcp` should point to `~/.npm-global/bin/chrome-devtools-mcp`
- Verify source code has viewport fix: Check `/home/cameronai/projects/chrome-devtools/chrome-devtools-mcp-fixed/src/browser.ts:103-112`
- Rebuild if needed: `cd /home/cameronai/projects/chrome-devtools/chrome-devtools-mcp-fixed && npm run build`

### Can't See Browser Activity

**Symptom:** chrome://inspect doesn't show pages

**Diagnosis:**
```bash
# Check CDP proxy is running
systemctl --user status cdp-proxy

# Check port is listening
ss -tlnp | grep 9223

# Test JSON endpoint
curl http://localhost:9223/json
```

**Fix:**
1. Restart CDP proxy: `systemctl --user restart cdp-proxy`
2. Check Windows port forwarding: `netsh interface portproxy show all` (in Windows PowerShell)
3. Verify WSL IP hasn't changed: `hostname -I`
4. Wait 10-20 seconds after opening chrome://inspect (auto-discovery delay)
5. **Don't refresh chrome://inspect** - just wait!

### WebSocket Connection Failed

**Symptom:** DevTools shows "Debugging connection was closed"

**Cause:** WebSocket connection dropped through port proxy

**Fix:**
1. Click "Reconnect DevTools" button
2. If persists, restart CDP proxy
3. Check proxy logs: `journalctl --user -u cdp-proxy -f`

### Page Load Timeout

**Symptom:** `navigate_page` times out

**Fix:**
1. Increase timeout: `navigate_page({ url: "...", timeout: 60000 })`
2. Check network connection
3. Try simpler page first to verify MCP works
4. Check console for errors

### Element Not Found

**Symptom:** Click/fill fails with "element not found"

**Cause:** Stale UID (page changed since snapshot)

**Fix:**
```typescript
// Always take fresh snapshot before interaction
const snapshot = await mcp.take_snapshot();
await mcp.click({ uid: "..." });
```

---

## Examples

### Example 1: Form Automation

```typescript
// Navigate to login page
await mcp.navigate_page({ url: "https://example.com/login" });

// Get element UIDs
const snapshot = await mcp.take_snapshot();
// uid=1_5 textbox "Email"
// uid=1_6 textbox "Password" type="password"
// uid=1_7 button "Login"

// Fill form
await mcp.fill_form({
  elements: [
    { uid: "1_5", value: "user@example.com" },
    { uid: "1_6", value: "password123" }
  ]
});

// Submit
await mcp.click({ uid: "1_7" });

// Verify success
const newSnapshot = await mcp.take_snapshot();
// Check for success message or dashboard elements
```

### Example 2: Web Scraping

```typescript
// Navigate
await mcp.navigate_page({ url: "https://news.ycombinator.com" });

// Extract data with JavaScript
const articles = await mcp.evaluate_script({
  function: `() => {
    const items = Array.from(document.querySelectorAll('.athing'));
    return items.slice(0, 10).map(item => ({
      title: item.querySelector('.titleline a').textContent,
      url: item.querySelector('.titleline a').href,
      score: item.nextElementSibling?.querySelector('.score')?.textContent || 'N/A'
    }));
  }`
});

console.log(articles);
```

### Example 3: Visual Testing

```typescript
// Navigate
await mcp.navigate_page({ url: "https://example.com" });

// Take baseline screenshot
await mcp.take_screenshot({
  filePath: "/tmp/baseline.png",
  fullPage: true
});

// Make changes
await mcp.evaluate_script({
  function: `() => {
    document.body.style.background = 'blue';
  }`
});

// Take comparison screenshot
await mcp.take_screenshot({
  filePath: "/tmp/changed.png",
  fullPage: true
});

// Compare images externally
```

### Example 4: Performance Testing

```typescript
// Start trace with reload
await mcp.performance_start_trace({
  reload: true,
  autoStop: true
});

// Navigate
await mcp.navigate_page({ url: "https://example.com" });

// Stop and get results
const results = await mcp.performance_stop_trace();

// Analyze specific insight
const lcpDetails = await mcp.performance_analyze_insight({
  insightName: "LCPBreakdown"
});
```

### Example 5: Network Monitoring

```typescript
// Navigate
await mcp.navigate_page({ url: "https://api-example.com/dashboard" });

// Get all XHR requests
const apiCalls = await mcp.list_network_requests({
  resourceTypes: ["xhr", "fetch"]
});

// Check for specific API call
const userDataRequest = await mcp.get_network_request({
  url: "https://api-example.com/api/user"
});

console.log("API Response:", userDataRequest);
```

### Example 6: Multi-Page Navigation

```typescript
// Open multiple pages
await mcp.new_page({ url: "https://example.com" });
await mcp.new_page({ url: "https://google.com" });

// List all pages
const pages = await mcp.list_pages();
// 0: Example Domain
// 1: Google [selected]

// Switch to first page
await mcp.select_page({ pageIdx: 0 });

// Take action
await mcp.take_screenshot();

// Close page
await mcp.close_page({ pageIdx: 1 });
```

---

## Technical Details

### Viewport Fix Implementation

**Location:** `/home/cameronai/projects/chrome-devtools/chrome-devtools-mcp-fixed/src/browser.ts:103-112`

```typescript
// FIX 1: Viewport Resolution - Set screen size before browser launch
if (options.viewport) {
  args.push(`--window-size=${options.viewport.width},${options.viewport.height}`);

  // On Linux, explicitly override ozone screen size to match viewport
  // This fixes the issue where Puppeteer hardcodes --ozone-override-screen-size=800,600
  if (process.platform === 'linux') {
    args.push(`--ozone-override-screen-size=${options.viewport.width},${options.viewport.height}`);
  }
}
```

**Why This Was Needed:**
- Puppeteer hardcodes `--ozone-override-screen-size=800,600` on Linux
- This overrides the viewport setting
- Fix: Explicitly set ozone screen size to match viewport
- Result: `window.screen.width/height` now reports 1920x1080

### Remote Debugging Setup

**Location:** `/home/cameronai/projects/chrome-devtools/chrome-devtools-mcp-fixed/src/browser.ts:114-133`

```typescript
// FIX 2: Browser Visibility - Always enable remote debugging for visibility
// Enable remote debugging on all interfaces (accessible from Windows)
args.push('--remote-debugging-port=9222');
args.push('--remote-debugging-address=0.0.0.0');

console.error('🌐 Chrome DevTools UI available at: http://localhost:9222');
console.error('   Open this URL in your Windows browser to watch live automation!');
```

**Why Port 9222:**
- Chrome DevTools Protocol standard port
- Puppeteer connects via this port
- CDP proxy forwards 9223 → 9222 for external access

### CDP Proxy Architecture

**Location:** `~/.local/bin/cdp-proxy`

**Purpose:** Forward both HTTP and WebSocket connections from Windows to WSL Chrome

**Key Features:**
- Listens on `0.0.0.0:9223` (all interfaces)
- Forwards to `localhost:9222` (Chrome)
- Handles HTTP requests (JSON endpoints)
- Handles WebSocket upgrades (DevTools connection)
- Bidirectional streaming (select-based multiplexing)

**Why Not socat/websockify:**
- socat: Doesn't handle WebSocket upgrades
- websockify: Blocks HTTP requests (405 errors)
- Custom proxy: Handles both protocols transparently

### Browser Launch Sequence

1. MCP receives stdio connection from Claude
2. MCP launches Chrome with Puppeteer:
   - Headless mode: `--headless=new`
   - Remote debugging: `--remote-debugging-port=9222`
   - Viewport: `--window-size=1920,1080`
   - Ozone fix: `--ozone-override-screen-size=1920,1080`
3. Puppeteer connects via CDP (pipe mode for stdio)
4. CDP proxy accepts connections on port 9223
5. Windows port forwarding makes 9223 accessible
6. User accesses chrome://inspect → localhost:9223

### Memory and Resource Usage

**Typical Chrome Memory:** 200-400MB
**CDP Proxy Memory:** ~4MB
**Total Overhead:** ~250-450MB

**Process Count:**
- Chrome main process
- Chrome renderer processes (1 per page)
- CDP proxy (1 process, multi-threaded)

---

## Quick Reference Card

### Most Common Operations

```typescript
// Navigate
await mcp.navigate_page({ url: "https://example.com" });

// Get page structure
const snapshot = await mcp.take_snapshot();

// Click element
await mcp.click({ uid: "1_2" });

// Fill form
await mcp.fill({ uid: "1_5", value: "input text" });

// Execute JavaScript
const result = await mcp.evaluate_script({
  function: `() => document.title`
});

// Screenshot
await mcp.take_screenshot();

// Console messages
const messages = await mcp.list_console_messages();

// Network requests
const requests = await mcp.list_network_requests();
```

### Common Gotchas

❌ **Don't:** Reuse UIDs after page changes
✅ **Do:** Take fresh snapshot after navigation/interaction

❌ **Don't:** Return non-JSON from evaluate_script
✅ **Do:** Return plain objects, arrays, primitives only

❌ **Don't:** Assume page loaded immediately after navigate
✅ **Do:** Wait or take snapshot to verify

❌ **Don't:** Refresh chrome://inspect repeatedly
✅ **Do:** Wait 10-20 seconds for auto-discovery

❌ **Don't:** Use `--headless=false` in WSL2
✅ **Do:** Always use `--headless=true` + chrome://inspect

---

## Support & Maintenance

### Service Management

```bash
# Status check
systemctl --user status cdp-proxy

# Restart
systemctl --user restart cdp-proxy

# Logs
journalctl --user -u cdp-proxy -f

# Disable auto-start
systemctl --user disable cdp-proxy

# Re-enable auto-start
systemctl --user enable cdp-proxy
```

### Rebuilding from Source

```bash
cd /home/cameronai/projects/chrome-devtools/chrome-devtools-mcp-fixed

# Install dependencies
npm install

# Build
npm run build

# Re-link globally
npm link

# Verify
which chrome-devtools-mcp
# Should show: /home/cameronai/.npm-global/bin/chrome-devtools-mcp
```

### Updating Configuration

If you need to change viewport or other settings:

1. Edit `~/.claude.json`
2. Modify `mcpServers.chrome-devtools.args`
3. Restart Claude Code session
4. MCP will launch with new settings

### Backing Up Configuration

```bash
# Backup .claude.json
cp ~/.claude.json ~/.claude.json.backup-$(date +%Y%m%d)

# Backup CDP proxy
cp ~/.local/bin/cdp-proxy ~/.local/bin/cdp-proxy.backup

# Backup service file
cp ~/.config/systemd/user/cdp-proxy.service \
   ~/.config/systemd/user/cdp-proxy.service.backup
```

---

## Version History

### v0.8.1 (2025-10-13) - Current
- Add option value to snapshot
- Improved navigate_page_history error messages
- Return default dialog value correctly
- Updated Puppeteer to 24.24.1

### v0.8.0 (2025-10-10)
- **NEW:** Support for custom Chrome args via `--chromeArg` flag
- Enables runtime customization without rebuilding

### v0.7.0 (2025-10-10)
- **NEW:** Offline network emulation
- **NEW:** Request/response body inspection
- Performance trace summary improvements

### v0.6.1 (2025-10-07)
- ✅ **OFFICIAL VIEWPORT FIX** - Changed default screen size in headless to 1920x1080
- Guards for performance_stop_trace when tracing inactive
- Tolerates empty browser URLs in CLI

### v0.6.0-custom (2025-10-04) - Previous Custom Build
- Manual viewport resolution fix (now official in v0.6.1+)
- Added remote debugging capability (CDP proxy - still custom)
- Created CDP proxy service
- Documented complete setup

---

## Additional Resources

**Source Code:** `/home/cameronai/projects/chrome-devtools/chrome-devtools-mcp-fixed`
**Documentation:** `/home/cameronai/projects/chrome-devtools/`
**Service Config:** `~/.config/systemd/user/cdp-proxy.service`
**Proxy Script:** `~/.local/bin/cdp-proxy`

**Official Chrome DevTools Protocol Docs:** https://chromedevtools.github.io/devtools-protocol/

---

**Last Updated:** 2025-10-14
**Maintained By:** Cameron (via Claude Code)
**Status:** ✅ Production Ready - Official v0.8.1
