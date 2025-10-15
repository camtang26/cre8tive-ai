# API Contracts & Integration Points

**Project:** cre8tive-website-1006
**Generated:** 2025-10-16
**Scan Level:** Deep

---

## Overview

This document catalogs all external API integrations and service contracts used by the application.

**Integration Architecture:** Frontend-only SPA with external service integrations

**Key Integrations:**
- Form submission services
- Analytics & tracking
- Video delivery
- 3D asset loading
- Conversational AI

---

## External API Integrations

### 1. GetForm API (Contact Forms)

**Service:** Form submission endpoint
**URL:** `https://getform.io`
**Purpose:** Contact form submissions without backend
**Authentication:** Form ID in URL

**Integration Points:**
- `src/components/contact/ContactForm.tsx`

**Request Format:**
```typescript
POST https://getform.io/f/{FORM_ID}
Content-Type: application/json

{
  name: string,
  email: string,
  message: string,
  // Additional form fields
}
```

**Response:**
- **200 OK:** Submission successful
- **400 Bad Request:** Validation error
- **429 Too Many Requests:** Rate limit exceeded

**Error Handling:**
- Toast notification on success
- Error message display on failure
- Client-side validation before submission

---

### 2. Vercel Analytics

**Service:** Web analytics and performance monitoring
**Package:** `@vercel/analytics@1.4.1`
**Purpose:** User behavior tracking, performance metrics

**Integration Points:**
- `src/App.tsx` - `<Analytics />` component
- Automatic page view tracking
- Web Vitals collection (CLS, FID, LCP, FCP, TTFB)

**Data Collected:**
- Page views
- User interactions
- Core Web Vitals
- Geographic data (anonymized)

**Configuration:**
```typescript
import { Analytics } from '@vercel/analytics/react';

// No configuration needed - auto-detects deployment
<Analytics />
```

**Privacy:**
- GDPR compliant
- Cookie consent integration via `CookieConsent` component
- No PII collected

---

### 3. Google Tag Manager / Google Analytics

**Service:** Marketing analytics and tag management
**GTM ID:** `GTM-XXXXXXX` (placeholder in code)
**Purpose:** Marketing attribution, conversion tracking

**Integration Points:**
- `src/App.tsx` - GTM script in Helmet
- `src/components/analytics/CookieConsent.tsx`

**Implementation:**
```typescript
// GTM Container loaded via script tag
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
```

**Data Layer Events:**
- Page views
- Button clicks
- Form submissions
- Video plays
- Custom events via `useAnalytics` hook

**Privacy:**
- Cookie consent required (EU/GDPR)
- Opt-out mechanism provided
- Data retention policies enforced

---

### 4. Vimeo Player API

**Service:** Video hosting and playback
**Package:** `@vimeo/player@2.20.1`
**Purpose:** Embedded video playback with controls

**Integration Points:**
- Video background components
- Gallery video players
- Service demonstration videos

**API Methods Used:**
```typescript
import Player from '@vimeo/player';

const player = new Player(iframe, {
  id: videoId,
  background: true,  // For hero backgrounds
  muted: true,
  loop: true,
  autopause: false
});

// Event listeners
player.on('play', handlePlay);
player.on('pause', handlePause);
player.on('ended', handleEnded);
```

**Content Security Policy:**
```
frame-src https://*.vimeo.com https://player.vimeo.com
media-src https://*.vimeocdn.com https://f.vimeocdn.com
img-src https://i.vimeocdn.com
connect-src https://*.vimeo.com
```

**Features:**
- Adaptive bitrate streaming
- Resume playback
- Fullscreen support
- Responsive embed

---

### 5. HLS.js (HTTP Live Streaming)

**Package:** `hls.js@1.5.20`
**Purpose:** Adaptive video streaming fallback
**Use Case:** Safari/iOS native HLS, other browsers via hls.js

**Integration:**
```typescript
import Hls from 'hls.js';

if (Hls.isSupported()) {
  const hls = new Hls({
    enableWorker: true,
    lowLatencyMode: false,
    backBufferLength: 90
  });
  hls.loadSource(videoUrl);
  hls.attachMedia(videoElement);
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  // Native HLS support (Safari)
  video.src = videoUrl;
}
```

---

### 6. Spline 3D API

**Service:** Interactive 3D scenes
**Packages:**
- `@splinetool/react-spline@4.0.0`
- `@splinetool/runtime@1.9.65`

**Purpose:** 3D visualizations and interactive experiences

**Integration:**
```typescript
import Spline from '@splinetool/react-spline';

<Spline
  scene="https://prod.spline.design/{SCENE_ID}"
  onLoad={handleLoad}
/>
```

**Content Security Policy:**
```
script-src https://*.spline.design https://prod.spline.design
connect-src https://*.spline.design https://prod.spline.design
img-src https://*.spline.design
font-src https://*.spline.design
style-src https://*.spline.design
```

**Performance:**
- Lazy loading
- GPU utilization
- Progressive enhancement (fallback for low-end devices)

---

### 7. ElevenLabs API (Conversational AI)

**Service:** Voice AI and conversational interfaces
**URL:** `https://api.elevenlabs.io`
**WebSocket:** `wss://api.us.elevenlabs.io`

**Purpose:** Conversational AI voice interactions

**Content Security Policy:**
```
connect-src https://*.elevenlabs.io wss://*.elevenlabs.io
script-src https://*.elevenlabs.io
frame-src https://*.elevenlabs.io https://convai.elevenlabs.io
img-src https://*.elevenlabs.io
child-src https://*.elevenlabs.io
```

**Integration Points:**
- `src/pages/ConversationalAI.tsx`
- Voice synthesis
- Conversational interface

**Features:**
- Real-time voice synthesis
- Conversational context
- WebSocket for low latency

---

## Client-Side Data Storage

### LocalStorage
**Used For:**
- User preferences (theme, reduced motion)
- Cookie consent state
- Performance settings
- Analytics opt-out flag

**Keys:**
```typescript
{
  'theme': 'dark' | 'light' | 'system',
  'reduced-motion': boolean,
  'cookie-consent': boolean,
  'analytics-enabled': boolean,
  'performance-tier': 'low' | 'medium' | 'high'
}
```

### SessionStorage
**Used For:**
- Temporary video state
- Animation playback tracking
- Current route history

---

## Security & Privacy

### Content Security Policy (CSP)

Full CSP configuration in `vite.config.ts` and `App.tsx`:

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' [trusted-domains];
connect-src 'self' [api-domains];
frame-src 'self' [embed-domains];
media-src 'self' blob: data: [cdn-domains];
img-src 'self' data: blob: https:;
```

### CORS Configuration
- **GetForm:** CORS enabled (public forms)
- **Vimeo:** CORS enabled for iframes
- **Analytics:** First-party cookies preferred

### Rate Limiting
- **GetForm:** Built-in rate limiting per email
- **Client-side:** Debounced form submissions
- **API calls:** Request queuing for external services

### Error Handling Strategy

```typescript
try {
  const response = await fetch(apiUrl, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return await response.json();
} catch (error) {
  // Log to monitoring service
  console.error('API Error:', error);
  // Show user-friendly message
  toast.error('Unable to connect. Please try again.');
  // Fallback behavior
  return fallbackData;
}
```

---

## Integration Testing

### Manual Test Cases

1. **Contact Form:**
   - Fill form → Submit → Verify GetForm receives data
   - Test validation errors
   - Test rate limiting

2. **Analytics:**
   - Page view tracking
   - Event tracking (button clicks)
   - Cookie consent flow

3. **Video Playback:**
   - Vimeo embed loads
   - HLS fallback works
   - Fullscreen functionality

4. **3D Scenes:**
   - Spline scenes load
   - Interactions work
   - Fallback for unsupported devices

### Monitoring

**Recommended:**
- Sentry for error tracking
- LogRocket for session replay
- Datadog for performance monitoring

---

## API Migration Notes

**Future Considerations:**

1. **Backend API:** Consider migrating form handling to custom backend
2. **Authentication:** Add user authentication if needed
3. **Database:** Add persistent storage for user-generated content
4. **GraphQL:** Consider GraphQL for data fetching efficiency
5. **WebSockets:** Real-time features beyond ElevenLabs

---

_This document describes the external API integrations for the frontend SPA. No backend API exists currently. All server interactions are with third-party services._
