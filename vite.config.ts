import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from "lovable-tagger";

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
        media-src 'self' blob: data: https://*.vimeo.com https://*.vimeocdn.com https://player.vimeo.com https://f.vimeocdn.com;
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.elevenlabs.io https://*.vimeo.com https://*.vimeocdn.com https://player.vimeo.com https://f.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co https://*.spline.design https://prod.spline.design;
        script-src-elem 'self' 'unsafe-inline' blob: https://*.elevenlabs.io https://elevenlabs.io https://*.vimeo.com https://player.vimeo.com https://f.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co https://*.spline.design https://prod.spline.design;
        frame-src 'self' https://*.elevenlabs.io https://*.vimeo.com https://player.vimeo.com https://convai.elevenlabs.io https://f.vimeocdn.com data: blob: https://*.spline.design https://prod.spline.design;
        frame-ancestors 'self' https://player.vimeo.com https://*.vimeo.com;
        connect-src 'self' https://*.elevenlabs.io wss://*.elevenlabs.io wss://api.us.elevenlabs.io https://*.vimeo.com https://*.vimeocdn.com https://www.google-analytics.com https://api.elevenlabs.io https://*.spline.design https://prod.spline.design;
        img-src 'self' data: blob: https: https://*.elevenlabs.io https://*.vimeocdn.com https://i.vimeocdn.com https://f.vimeocdn.com https://www.google-analytics.com https://storage.googleapis.com https://*.spline.design https://prod.spline.design;
        child-src 'self' https://*.elevenlabs.io https://*.vimeo.com blob: data:;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://f.vimeocdn.com https://unpkg.com https://*.spline.design https://prod.spline.design;
        font-src 'self' data: https: https://fonts.gstatic.com https://f.vimeocdn.com https://*.spline.design https://prod.spline.design;
        worker-src 'self' blob:;
      `.replace(/\s+/g, ' ').trim()
    }
  }
}));