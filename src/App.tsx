import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Analytics } from '@vercel/analytics/react';
import { MainLayout } from "./components/layout/MainLayout";
import { CookieConsent } from "./components/analytics/CookieConsent";
import { ScrollToTop } from "./components/core/ScrollToTop";
import { useEffect } from 'react';
import { scrollAnimator } from './utils/scrollAnimations';
import Index from "./pages/Index";
import Studios from "./pages/Studios";
import AdManager from "./pages/AdManager";
import Agents from "./pages/Agents";
import ConversationalAI from "./pages/ConversationalAI";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    scrollAnimator.init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          {/* Security Headers */}
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.elevenlabs.io https://player.vimeo.com https://f.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; script-src-elem 'self' 'unsafe-inline' blob: https://*.elevenlabs.io https://elevenlabs.io https://cdn.gpteng.co https://www.googletagmanager.com; frame-src 'self' https://*.elevenlabs.io https://player.vimeo.com https://*.vimeocdn.com https://convai.elevenlabs.io; connect-src 'self' https://*.elevenlabs.io wss://*.elevenlabs.io wss://api.us.elevenlabs.io https://*.vimeo.com https://f.vimeocdn.com https://www.google-analytics.com https://api.elevenlabs.io; img-src 'self' data: https: https://*.elevenlabs.io https://i.vimeocdn.com https://www.google-analytics.com https://storage.googleapis.com; child-src 'self' https://*.elevenlabs.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https: https://fonts.gstatic.com;" />
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          
          {/* Google Tag Manager */}
          <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `}
          </script>
        </Helmet>

        <BrowserRouter>
          <ScrollToTop />
          <MainLayout>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/studios" element={<Studios />} />
              <Route path="/ad-manager" element={<AdManager />} />
              <Route path="/manager" element={<AdManager />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/conversational" element={<ConversationalAI />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
            <Analytics />
          </MainLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;