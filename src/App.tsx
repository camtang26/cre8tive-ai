import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MainLayout } from "./components/layout/MainLayout";
import { CookieConsent } from "./components/analytics/CookieConsent";
import { ScrollToTop } from "./components/core/ScrollToTop";
import { useEffect, useState } from 'react';
import { scrollAnimator } from './utils/scrollAnimations';
import Index from "./pages/Index";
import Studios from "./pages/Studios";
import BriefingEngine from "./pages/BriefingEngine";
// import Agents from "./pages/Agents"; // Temporarily disabled - service under development
import ConversationalAI from "./pages/ConversationalAI";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AnalyticsPage from "./pages/Analytics";
import { SEO } from './components/core/SEO';
import { VideoTest } from './components/test/VideoTest';

const queryClient = new QueryClient();

const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    scrollAnimator.init();
    setIsClient(true);

    // Handle GitHub Pages redirect
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('p');
    if (redirectPath) {
      // Remove the 'p' parameter and redirect to the actual path
      params.delete('p');
      const newUrl = '/' + redirectPath + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }
  }, []);

  // Get the base URL from Vite's environment
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <QueryClientProvider client={queryClient}>
      <SEO />
      <TooltipProvider>
        <Helmet>
          {/* Security Headers */}
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.elevenlabs.io https://player.vimeo.com https://f.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://*.google.com https://*.spline.design https://prod.spline.design https://spline.design https://va.vercel-scripts.com; script-src-elem 'self' 'unsafe-inline' blob: https://*.elevenlabs.io https://elevenlabs.io https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.googleadservices.com https://*.google.com https://*.spline.design https://prod.spline.design https://va.vercel-scripts.com https://unpkg.com; frame-src 'self' https://*.elevenlabs.io https://player.vimeo.com https://*.vimeo.com https://f.vimeocdn.com https://convai.elevenlabs.io https://www.googletagmanager.com https://*.google.com; connect-src 'self' https://getform.io https://*.elevenlabs.io wss://*.elevenlabs.io wss://api.us.elevenlabs.io https://*.vimeo.com https://f.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://www.google.com https://*.google.com https://*.doubleclick.net https://api.elevenlabs.io https://*.spline.design https://prod.spline.design https://spline.design https://unpkg.com; img-src 'self' data: blob: https://*.elevenlabs.io https://i.vimeocdn.com https://www.google-analytics.com https://www.googleadservices.com https://*.google.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.googletagmanager.com https://fonts.gstatic.com https://storage.googleapis.com https://*.spline.design https://prod.spline.design; media-src 'self' data: blob:; child-src 'self' https://*.elevenlabs.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://*.google.com https://*.spline.design https://prod.spline.design; font-src 'self' data: https://fonts.gstatic.com https://*.spline.design https://prod.spline.design;" />
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        </Helmet>

        <BrowserRouter basename={baseUrl}>
          <ScrollToTop />
          <MainLayout>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/studios" element={<Studios />} />
              {/* AI Briefing Engine */}
              <Route path="/briefing-engine" element={<BriefingEngine />} />
              {/* Redirect old /studios-engine route for SEO */}
              <Route path="/studios-engine" element={<Navigate to="/briefing-engine" replace />} />
              {/* Legacy /manager route - redirects to Briefing Engine */}
              <Route path="/manager" element={<BriefingEngine />} />
              {/* AI Agents page temporarily disabled - service under development */}
              {/* <Route path="/agents" element={<Agents />} /> */}
              <Route path="/conversational" element={<ConversationalAI />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/test/video" element={<VideoTest />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </MainLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
