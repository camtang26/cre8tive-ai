import type { SectionConfig } from './types'

export const studiosSections: SectionConfig[] = [
  {
    id: 'studios-hero',
    pattern: 'hero',
    palette: { theme: 'studios', key: 'background' },
    layout: 'studios-hero',
    copy: {
      headline: 'Deploy Platform-Native Video in Days',
      subhead:
        'AI-powered Studio partners turn your vision into platform-perfect campaigns for YouTube, TikTok, Instagram, LinkedIn, X, and Facebook—no agency juggling.',
      primaryCTA: {
        label: 'Book Studio Call',
        href: '/contact',
        analyticsId: 'studios.hero.primary',
      },
      secondaryCTA: {
        label: 'View Our Work',
        href: '/portfolio',
        analyticsId: 'studios.hero.secondary',
      },
    },
    visuals: [
      {
        type: 'video',
        id: 'studios-hero-loop',
        aspectRatio: '16:9',
        autoplay: true,
        loop: true,
        muted: true,
      },
      { type: 'metric', label: 'First-Draft Approval', value: '60% approval rate' },
    ],
    analytics: {
      sectionCategory: 'studios.hero',
      exposures: ['studios.hero.view'],
      ctas: {
        primary: 'studios.hero.primary',
        secondary: 'studios.hero.secondary',
      },
      mediaEvents: ['studios.hero.video.play'],
    },
  },
  {
    id: 'studios-hybrid-model',
    pattern: 'copy',
    palette: { theme: 'studios', key: 'body' },
    layout: 'studios-hybrid',
    copy: {
      headline: 'AI-Powered Studio Partners',
      body:
        "You get the speed of AI and the creativity of experienced Studio partners. Our hybrid model combines cinematography-trained AI with human oversight to deliver platform-native video in days, not weeks.\n\nThis isn't a self-serve tool. You brief us, we handle production end-to-end, and you deploy platform-perfect campaigns across YouTube (16:9), TikTok (9:16), Instagram (1:1/4:5), LinkedIn, X, and Facebook.\n\nResult: 60% first-draft approval rate—because hybrid beats pure AI every time.",
    },
    visuals: [
      { type: 'icon-set', items: ['ai-symbol', 'studio-partner'], description: 'Hybrid model icons' },
      { type: 'metric', label: 'Approval Rate', value: '60% first-draft approval' },
    ],
    analytics: {
      sectionCategory: 'studios.hybrid-model',
      exposures: ['studios.hybrid-model.view'],
    },
  },
  {
    id: 'studios-video-showcase',
    pattern: 'video-showcase',
    palette: { theme: 'studios', key: 'backgroundAccent' },
    layout: 'studios-spotlight',
    copy: {
      headline: 'See Studios in Action',
      subhead:
        'Watch how we transform brand briefs into platform-native video campaigns that drive results across every major platform.',
    },
    visuals: [
      { type: 'video', id: 'studios-showcase', aspectRatio: '16:9', duration: '3:42' },
    ],
    analytics: {
      sectionCategory: 'studios.video-showcase',
      exposures: ['studios.video-showcase.view'],
      mediaEvents: ['studios.video-showcase.play', 'studios.video-showcase.complete'],
    },
  },
  {
    id: 'studios-process',
    pattern: 'copy',
    palette: { theme: 'studios', key: 'body' },
    layout: 'studios-timeline',
    copy: {
      headline: 'Brief to Video in Days',
      body:
        "Here's how it works: You submit a brief, we handle production end-to-end, and you deploy platform-native video in days.\n\nNo project management chaos. No briefing back-and-forth. No multi-agency juggling.\n\nWe deliver video optimized for YouTube (16:9), TikTok (9:16), Instagram (1:1, 4:5, 16:9), LinkedIn, X, and Facebook—platform-perfect from day one.\n\nTimeline: Days for video delivery (not minutes). Quality: 60% first-draft approval rate.",
    },
    visuals: [
      { type: 'image', src: '/media/studios-timeline.png', alt: 'Production timeline milestones' },
      { type: 'icon-set', items: ['youtube', 'tiktok', 'instagram', 'facebook', 'linkedin', 'x'], description: 'Platform icons' },
    ],
    analytics: {
      sectionCategory: 'studios.process',
      exposures: ['studios.process.view'],
    },
  },
  {
    id: 'studios-portfolio',
    pattern: 'portfolio',
    palette: { theme: 'studios', key: 'backgroundAccent' },
    layout: 'studios-portfolio',
    copy: {
      headline: 'Our Work',
      subhead:
        "Platform-native campaigns we've produced for brands across YouTube, TikTok, Instagram, LinkedIn, X, and Facebook.",
    },
    visuals: [
      {
        type: 'video-grid',
        items: ['1051824336', '1055446411', '1051820049', '1051819670', '1052203361', '1052204241'],
        description: 'Studios portfolio reel grid',
      },
    ],
    analytics: {
      sectionCategory: 'studios.portfolio',
      exposures: ['studios.portfolio.view'],
      mediaEvents: ['studios.portfolio.video.play'],
    },
  },
  {
    id: 'studios-testimonials',
    pattern: 'copy',
    palette: { theme: 'studios', key: 'backgroundAccent' },
    layout: 'studios-testimonials',
    copy: {
      headline: 'Client Results',
    },
    visuals: [
      { type: 'image', src: '/media/studios-testimonials.png', alt: 'Client testimonial cards' },
      { type: 'icon-set', items: ['client-logo-a', 'client-logo-b', 'client-logo-c'], description: 'Client logos' },
    ],
    analytics: {
      sectionCategory: 'studios.testimonials',
      exposures: ['studios.testimonials.view'],
    },
  },
  {
    id: 'studios-platform-demos',
    pattern: 'portfolio',
    palette: { theme: 'studios', key: 'backgroundAccent' },
    layout: 'studios-platform',
    copy: {
      headline: 'Platform-Native, Every Format',
      subhead:
        'YouTube (16:9), TikTok (9:16), Instagram (1:1, 4:5, 16:9), LinkedIn, X, Facebook—we deliver video optimized for how your audience watches.',
    },
    visuals: [
      {
        type: 'video-grid',
        items: ['studios-youtube-16x9', 'studios-instagram-1x1', 'studios-tiktok-9x16'],
        description: 'Platform-specific aspect ratio demos',
      },
      { type: 'icon-set', items: ['youtube', 'instagram', 'tiktok', 'facebook', 'linkedin', 'x'], description: 'Platform icon set' },
    ],
    analytics: {
      sectionCategory: 'studios.platform-demos',
      exposures: ['studios.platform-demos.view'],
      mediaEvents: ['studios.platform-demos.video.play'],
    },
  },
  {
    id: 'studios-cta',
    pattern: 'cta',
    palette: { theme: 'studios', key: 'backgroundAccent' },
    layout: 'studios-cta',
    copy: {
      headline: 'Ready to Deploy Platform-Native Video?',
      subhead:
        "Book a Studio call to discuss your campaign. We'll deliver platform-perfect video in days with 60% first-draft approval—no agency juggling.",
      primaryCTA: {
        label: 'Book Studio Call',
        href: '/contact',
        analyticsId: 'studios.cta.primary',
      },
      secondaryCTA: {
        label: 'View Case Studies',
        href: '/portfolio',
        analyticsId: 'studios.cta.secondary',
      },
    },
    visuals: [
      { type: 'badge', label: 'Trust Signal', value: 'Trusted since 2023' },
    ],
    analytics: {
      sectionCategory: 'studios.cta',
      exposures: ['studios.cta.view'],
      ctas: {
        primary: 'studios.cta.primary',
        secondary: 'studios.cta.secondary',
      },
    },
  },
]
