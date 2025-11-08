import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { FloatingCallButton } from '../shared/FloatingCallButton';
import { useScrollSmoother } from '@/hooks/useScrollSmoother';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  // Initialize site-wide smooth scrolling (GSAP ScrollSmoother)
  // Reason: Provides premium 2s inertial scrolling, respects prefers-reduced-motion
  useScrollSmoother();

  return (
    // ScrollSmoother required structure: #smooth-wrapper > #smooth-content
    // Reason: GSAP ScrollSmoother.create() API requires these exact IDs
    // @see docs/GSAP-IMPLEMENTATION-PLAN.md - Phase 1.1
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {/* Using semantic HTML5 elements for better accessibility and structure */}
        <div className="min-h-screen flex flex-col bg-black">
          <header role="banner">
            <Navigation />
          </header>

          <main role="main" className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>
      </div>

      {/* Fixed-position widgets OUTSIDE #smooth-content to prevent transform stacking context issues */}
      {/* Reason: GSAP ScrollSmoother's transform on #smooth-content breaks position:fixed for descendants */}
      {/* Moving outside #smooth-content ensures widgets are truly fixed to viewport, not affected by scroll transform */}
      {/* FloatingCallButton only shown on mobile (hidden on md+) since it's in DesktopNavigation on desktop */}
      <div className="md:hidden">
        <FloatingCallButton />
      </div>
      <elevenlabs-convai agent-id="agent_7901k75veexyeanar9ervcwsaz5m"></elevenlabs-convai>
    </div>
  );
};