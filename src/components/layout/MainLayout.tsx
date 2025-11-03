import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { FloatingCallButton } from '../shared/FloatingCallButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    // Using semantic HTML5 elements for better accessibility and structure
    <div className="min-h-screen flex flex-col bg-black">
      <header role="banner">
        <Navigation />
      </header>

      <main role="main" className="flex-grow">
        {children}
      </main>

      <Footer />
      <FloatingCallButton />
      <elevenlabs-convai agent-id="agent_7901k75veexyeanar9ervcwsaz5m"></elevenlabs-convai>
    </div>
  );
};