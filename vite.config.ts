import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import fs from 'fs';
import { componentTagger } from "lovable-tagger";
import type { Plugin } from 'vite';

/**
 * Performance Budget Plugin - Story 1.14 (AC#6)
 *
 * Enforces 900kb vendor bundle limit at build time.
 * Prevents bundle bloat from accumulating unnoticed.
 *
 * Implementation:
 * - Runs in closeBundle() hook (after Vite build completes)
 * - Reads dist/assets/ directory to find vendor.*.js file
 * - Calculates size in KB (stat.size / 1024)
 * - Throws error if size > 900kb (fails build)
 * - Logs success message if under limit
 *
 * Why 900kb:
 * - Current bundle: 805.86kb (baseline)
 * - detect-gpu: ~50kb (Story 1.14)
 * - Utilities: ~5-8kb (Story 1.14)
 * - Projected: ~860kb (40kb headroom)
 * - Limit: 900kb (safety margin for future dependencies)
 *
 * Reason: Research shows >1MB vendor bundles cause significant
 * parse/compile time on low-end devices (3-5 second delay).
 */
function performanceBudgetPlugin(): Plugin {
  return {
    name: 'performance-budget',
    closeBundle() {
      const distPath = path.resolve(__dirname, 'dist/assets');

      // Check if dist directory exists (may not exist in dev mode)
      if (!fs.existsSync(distPath)) {
        console.warn('[PerformanceBudget] dist/assets directory not found (skipping check)');
        return;
      }

      const files = fs.readdirSync(distPath);
      const vendorFile = files.find(f => f.startsWith('vendor.') && f.endsWith('.js'));

      if (!vendorFile) {
        console.warn('[PerformanceBudget] No vendor bundle found (skipping check)');
        return;
      }

      const vendorPath = path.join(distPath, vendorFile);
      const stats = fs.statSync(vendorPath);
      const sizeKB = Math.round(stats.size / 1024);
      const limitKB = 900;

      if (sizeKB > limitKB) {
        const overage = sizeKB - limitKB;
        throw new Error(
          `❌ BUNDLE SIZE EXCEEDED\n` +
          `   Vendor bundle: ${sizeKB}kb (exceeds ${limitKB}kb limit by ${overage}kb)\n` +
          `   File: ${vendorFile}\n` +
          `   Action: Review dependencies and remove unused imports\n`
        );
      }

      const remaining = limitKB - sizeKB;
      const percentUsed = Math.round((sizeKB / limitKB) * 100);
      console.log(
        `✅ [PerformanceBudget] Vendor bundle: ${sizeKB}kb / ${limitKB}kb (${percentUsed}% used, ${remaining}kb remaining)`
      );
    }
  };
}

// Determine the base URL based on the environment
const getBaseUrl = () => {
  // Now that we're using a custom domain, we always want the root path
  return '/';
};

export default defineConfig(({ mode }) => ({
  base: getBaseUrl(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode !== 'development' && performanceBudgetPlugin(), // Story 1.14: Enforce 900kb bundle limit
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
    preprocessorOptions: {
      css: {
        compress: {
          animations: false // Preserve keyframe names
        }
      }
    }
  },
  build: {
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000,
    sourcemap: mode === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            '@tanstack/react-query',
            'framer-motion',
            'three',
            '@vimeo/player'
          ],
          'ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-slot',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast'
          ]
        },
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          const ext = name.split('.').pop() || '';
          let extType = ext;
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            extType = 'img';
          }
          // Keep the original filename for easier debugging
          const fileName = name.replace(`.${ext}`, '');
          return `assets/${extType}/${fileName}-[hash][extname]`;
        }
      }
    },
    target: 'es2015',
    modulePreload: {
      polyfill: true
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
    headers: {
      'Cache-Control': 'no-store',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'ALLOW-FROM https://player.vimeo.com',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': `
        media-src 'self' data: blob: https://*.vimeo.com https://*.vimeocdn.com https://player.vimeo.com https://f.vimeocdn.com;
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.elevenlabs.io https://*.vimeo.com https://*.vimeocdn.com https://player.vimeo.com https://f.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://*.google.com https://*.spline.design https://prod.spline.design https://va.vercel-scripts.com;
        script-src-elem 'self' 'unsafe-inline' blob: https://*.elevenlabs.io https://elevenlabs.io https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.googleadservices.com https://*.google.com https://*.spline.design https://prod.spline.design https://va.vercel-scripts.com https://unpkg.com;
        frame-src 'self' https://*.elevenlabs.io https://*.vimeo.com https://player.vimeo.com https://convai.elevenlabs.io https://f.vimeocdn.com data: blob: https://*.spline.design https://prod.spline.design;
        frame-ancestors 'self' https://player.vimeo.com https://*.vimeo.com;
        connect-src 'self' https://getform.io https://*.elevenlabs.io wss://*.elevenlabs.io wss://api.us.elevenlabs.io https://*.vimeo.com https://*.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://*.google.com https://api.elevenlabs.io https://*.spline.design https://prod.spline.design https://spline.design https://unpkg.com;
        img-src 'self' data: blob: https: https://*.elevenlabs.io https://*.vimeocdn.com https://i.vimeocdn.com https://f.vimeocdn.com https://www.google-analytics.com https://www.googleadservices.com https://*.google.com https://storage.googleapis.com https://*.spline.design https://prod.spline.design;
        child-src 'self' https://*.elevenlabs.io https://*.vimeo.com blob: data:;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://f.vimeocdn.com https://unpkg.com https://*.spline.design https://prod.spline.design;
        font-src 'self' data: https: https://fonts.gstatic.com https://f.vimeocdn.com https://*.spline.design https://prod.spline.design;
        worker-src 'self' blob:;
      `.replace(/\s+/g, ' ').trim()
    }
  }
}));
