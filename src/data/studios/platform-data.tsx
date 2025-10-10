/**
 * Platform Configuration Data for Studios Multi-Platform Section
 *
 * Copy source: COPY_IMPLEMENTATION_GUIDE.md lines 110-192
 * Epic 2, Story 2.2 - Research-validated platform-specific messaging
 */

import React from 'react';

export interface PlatformConfig {
  name: 'YouTube' | 'TikTok' | 'Instagram' | 'LinkedIn' | 'X' | 'Facebook';
  format: string;
  features: [string, string, string]; // Exactly 3 features per platform
  icon: React.ReactNode; // SVG icon (inline JSX)
}

/**
 * Platform Icons - Inline SVG with fill="currentColor" for Tailwind styling
 * Generic iconography to avoid platform trademark issues
 */
const PlatformIcons = {
  YouTube: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" fillOpacity="0.3"/>
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M19 10V8C17.35 8 15.9 7.28 15 6.11C14.1 4.94 14 3.51 14 3H12V15.5C12 17.43 10.43 19 8.5 19C6.57 19 5 17.43 5 15.5C5 13.57 6.57 12 8.5 12C8.67 12 8.84 12.01 9 12.04V10C6.24 10 4 12.24 4 15C4 17.76 6.24 20 9 20C11.76 20 14 17.76 14 15V8.74C15.25 9.54 16.75 10 18.5 10H19Z" fill="currentColor"/>
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M7 10V17M7 7V7.01M11 17V12.5C11 11.12 12.12 10 13.5 10C14.88 10 16 11.12 16 12.5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M14 8H12.5C11.67 8 11 8.67 11 9.5V11H14V13H11V20H9V13H7V11H9V9.5C9 7.57 10.57 6 12.5 6H14V8Z" fill="currentColor"/>
    </svg>
  )
};

export const SECTION_COPY = {
  header: "Native for Every Major Platform",
  subheader: "Your 16:9 YouTube video doesn't work on TikTok. Your audience knows it.\n\nWe create bespoke videos optimized for each platform's unique requirements—not lazy automated crops.",
  closingCopy: "Platform-specific optimization dramatically improves performance vs. repurposed content. We build natively for each channel from the ground up.\n\nIndustry research shows native-first content outperforms crops by significant margins across all engagement metrics."
} as const;

/**
 * Platform Data - 6 Major Platforms
 * Copy matches COPY_IMPLEMENTATION_GUIDE.md word-for-word
 */
export const PLATFORM_DATA: PlatformConfig[] = [
  {
    name: 'YouTube',
    format: '16:9 Widescreen',
    features: [
      'Cinematic composition for desktop & TV',
      'Professional pacing for longer attention spans',
      'Optimized thumbnails & chapter markers'
    ],
    icon: PlatformIcons.YouTube
  },
  {
    name: 'TikTok',
    format: '9:16 Vertical',
    features: [
      'Vertical-first framing & movement',
      'Hook-driven opening (3-second rule)',
      'Mobile-optimized text & graphics'
    ],
    icon: PlatformIcons.TikTok
  },
  {
    name: 'Instagram',
    format: '1:1 Square & 4:5 Portrait',
    features: [
      'Feed-optimized square compositions',
      'Reels-ready vertical formats',
      'Platform-specific engagement patterns'
    ],
    icon: PlatformIcons.Instagram
  },
  {
    name: 'LinkedIn',
    format: '1:1 Square & 16:9',
    features: [
      'Professional tone & B2B messaging',
      'Desktop feed optimization',
      'Thought leadership positioning'
    ],
    icon: PlatformIcons.LinkedIn
  },
  {
    name: 'X',
    format: '16:9 & 1:1',
    features: [
      'Fast-paced, attention-grabbing edits',
      'Timeline autoplay optimization',
      'Conversation-driving content'
    ],
    icon: PlatformIcons.X
  },
  {
    name: 'Facebook',
    format: '1:1 Square & 16:9',
    features: [
      'Feed & Stories optimization',
      'Multi-demographic targeting',
      'Silent autoplay with captions'
    ],
    icon: PlatformIcons.Facebook
  }
];
