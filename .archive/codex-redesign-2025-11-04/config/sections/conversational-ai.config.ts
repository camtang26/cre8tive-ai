import type { SectionConfig } from './types'

export const conversationalSections: SectionConfig[] = [
  {
    id: 'conversational-hero',
    pattern: 'hero',
    palette: { theme: 'conversational', key: 'background' },
    layout: 'conversational-hero',
    copy: {
      headline: 'Scale Support Without Headcount',
      subhead:
        'AI-powered conversational agents handle inquiry volume 24/7, trained on your brand voice—no hiring bottleneck, no quality compromise.',
      primaryCTA: {
        label: 'Book Demo',
        href: '/contact',
        analyticsId: 'conversational.hero.primary',
      },
      secondaryCTA: {
        label: 'See Live Demo',
        href: '/conversational-ai/demo',
        analyticsId: 'conversational.hero.secondary',
      },
    },
    visuals: [
      {
        type: 'video',
        id: 'conversational-hero-loop',
        aspectRatio: '16:9',
        autoplay: true,
        loop: true,
        muted: true,
      },
      { type: 'badge', label: 'Trust Signal', value: 'Enterprise-grade security' },
    ],
    analytics: {
      sectionCategory: 'conversational.hero',
      exposures: ['conversational.hero.view'],
      ctas: {
        primary: 'conversational.hero.primary',
        secondary: 'conversational.hero.secondary',
      },
      mediaEvents: ['conversational.hero.video.play'],
    },
  },
  {
    id: 'conversational-use-cases',
    pattern: 'copy',
    palette: { theme: 'conversational', key: 'body' },
    layout: 'conversational-pillars',
    copy: {
      headline: 'Built for Your Use Case',
      body:
        'Deploy conversational AI agents across customer support, sales qualification, and user onboarding—trained on your brand voice and product knowledge.\n\nOur agents handle complex, multi-turn conversations with context awareness. They do not just answer FAQs—they understand customer intent, provide personalized recommendations, and escalate to humans when needed.\n\nSecurity: Enterprise-grade encryption, SOC 2 Type II compliance, GDPR-ready.\nAccuracy: Trained on your documentation, refined through feedback loops.\nScale: 24/7 availability without headcount expansion.',
    },
    visuals: [
      { type: 'icon-set', items: ['support-headset', 'sales-chart', 'onboarding-checklist'], description: 'Use case icons' },
    ],
    analytics: {
      sectionCategory: 'conversational.use-cases',
      exposures: ['conversational.use-cases.view'],
    },
  },
  {
    id: 'conversational-video-showcase',
    pattern: 'video-showcase',
    palette: { theme: 'conversational', key: 'backgroundAccent' },
    layout: 'conversational-hologram',
    copy: {
      headline: 'See AI in Action',
      subhead:
        'Watch how our conversational AI agents handle real customer inquiries with brand-accurate responses and seamless human escalation.',
    },
    visuals: [
      { type: 'video', id: 'conversational-showcase', aspectRatio: '16:9', duration: '2:15' },
    ],
    analytics: {
      sectionCategory: 'conversational.video-showcase',
      exposures: ['conversational.video-showcase.view'],
      mediaEvents: ['conversational.video-showcase.play', 'conversational.video-showcase.complete'],
    },
  },
  {
    id: 'conversational-scale',
    pattern: 'copy',
    palette: { theme: 'conversational', key: 'body' },
    layout: 'conversational-scale',
    copy: {
      headline: 'Scale Capacity, Not Headcount',
      body:
        'Handle 10x inquiry volume without hiring. Our conversational AI agents provide 24/7 support at infinite capacity—trained on your brand voice, product knowledge, and escalation protocols.\n\nYou set the tone, we deploy the AI. Agents learn from every conversation, improving accuracy through feedback loops and human oversight.\n\nCost: Fraction of human support team scaling.\nQuality: Brand-accurate responses, context-aware conversations.\nAvailability: 24/7 coverage across all time zones, no breaks.',
    },
    visuals: [
      { type: 'metric', label: 'Capacity Gain', value: 'Handle 10x inquiry volume' },
      { type: 'badge', label: 'Availability', value: '24/7 coverage' },
    ],
    analytics: {
      sectionCategory: 'conversational.scale',
      exposures: ['conversational.scale.view'],
    },
  },
  {
    id: 'conversational-live-demo',
    pattern: 'video-showcase',
    palette: { theme: 'conversational', key: 'backgroundAccent' },
    layout: 'conversational-terminal',
    copy: {
      headline: 'Live Demo: Real Interactions',
      subhead:
        'Watch our AI agent handle 10 minutes of unedited customer inquiries—demonstrating context awareness, brand accuracy, and seamless escalation.',
    },
    visuals: [
      { type: 'video', id: 'conversational-live-demo', aspectRatio: '16:9', duration: '10:00' },
    ],
    analytics: {
      sectionCategory: 'conversational.live-demo',
      exposures: ['conversational.live-demo.view'],
      mediaEvents: ['conversational.live-demo.play', 'conversational.live-demo.chapter'],
    },
  },
  {
    id: 'conversational-brand',
    pattern: 'copy',
    palette: { theme: 'conversational', key: 'body' },
    layout: 'conversational-spectrum',
    copy: {
      headline: 'Your Brand, Every Response',
      body:
        'Our AI agents are trained on your brand guidelines, product documentation, and tone-of-voice standards. Every response reflects your brand personality—whether professional, friendly, technical, or playful.\n\nTraining process: You provide documentation, we fine-tune the model, you review outputs, we refine through feedback loops.\n\nQuality control: Human-in-the-loop oversight, confidence thresholds for escalation, continuous learning from approved responses.\n\nResult: Brand consistency at scale—every customer interaction sounds like your team.',
    },
    visuals: [
      { type: 'image', src: '/media/conversational-brand-spectrum.png', alt: 'Brand voice spectrum graphic' },
      { type: 'icon-set', items: ['document-training', 'ai-model', 'feedback-loop'], description: 'Training process icons' },
    ],
    analytics: {
      sectionCategory: 'conversational.brand',
      exposures: ['conversational.brand.view'],
    },
  },
  {
    id: 'conversational-enterprise',
    pattern: 'copy',
    palette: { theme: 'conversational', key: 'backgroundAccent' },
    layout: 'conversational-shield',
    copy: {
      headline: 'Enterprise-Grade Security',
      body:
        'Deploy conversational AI with confidence: SOC 2 Type II compliant, GDPR-ready, HIPAA-compatible architecture. Your data never trains public models—everything stays in your secure environment.\n\nSecurity features: End-to-end encryption, role-based access control, audit logs for every conversation, data residency options (US, EU, custom).\n\nIntegrations: Salesforce, HubSpot, Zendesk, Intercom, Slack, Microsoft Teams, custom APIs.\n\nSupport: Dedicated account manager, 99.9% uptime SLA, 24/7 technical support, quarterly business reviews.',
    },
    visuals: [
      { type: 'icon-set', items: ['soc2', 'gdpr', 'hipaa'], description: 'Security certifications' },
      { type: 'icon-set', items: ['salesforce', 'hubspot', 'zendesk', 'intercom', 'slack', 'microsoft-teams'], description: 'Integration logos' },
    ],
    analytics: {
      sectionCategory: 'conversational.enterprise',
      exposures: ['conversational.enterprise.view'],
    },
  },
  {
    id: 'conversational-cta',
    pattern: 'cta',
    palette: { theme: 'conversational', key: 'backgroundAccent' },
    layout: 'conversational-cta',
    copy: {
      headline: 'Ready to Scale Support Without Headcount?',
      subhead:
        "Book a demo to explore your use case. We'll deploy enterprise-grade conversational AI agents trained on your brand—24/7 availability without hiring.",
      primaryCTA: {
        label: 'Book Demo',
        href: '/contact',
        analyticsId: 'conversational.cta.primary',
      },
      secondaryCTA: {
        label: 'See Pricing',
        href: '/pricing',
        analyticsId: 'conversational.cta.secondary',
      },
    },
    visuals: [
      { type: 'badge', label: 'Trust Signal', value: 'SOC 2 Type II Compliant' },
    ],
    analytics: {
      sectionCategory: 'conversational.cta',
      exposures: ['conversational.cta.view'],
      ctas: {
        primary: 'conversational.cta.primary',
        secondary: 'conversational.cta.secondary',
      },
    },
  },
]
