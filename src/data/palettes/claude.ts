import type { PaletteOption } from '@/components/palette-prototypes/types'

export const claudeStudiosPalettes: PaletteOption[] = [
  {
    id: 'claude-studios-a',
    name: 'Option A · Cinematic Film Noir',
    origin: 'Claude Code',
    tagline: 'Charcoal foundations with Oscar-night gold',
    narrative: 'Bring premiere-night energy to every scroll with charcoal depth, champagne highlights, and gold call-to-actions.',
    hero: {
      background: '#1A1A1A',
      surface: 'rgba(26,26,26,0.75)',
      headingColor: '#F4C542',
      bodyColor: '#C0C0C0',
      buttonBackground: '#D4AF37',
      buttonText: '#1A1A1A',
      badgeBackground: '#D4AF37',
      badgeText: '#1A1A1A'
    },
    colors: [
      { name: 'Charcoal', hex: '#1A1A1A', role: 'Hero backdrop / card base' },
      { name: 'Gold', hex: '#D4AF37', role: 'Primary CTA / keylines' },
      { name: 'Silver', hex: '#C0C0C0', role: 'Body text / dividers' },
      { name: 'Warm Gold', hex: '#F4C542', role: 'Hover / highlight' },
      { name: 'Dark Silver', hex: '#A8A8A8', role: 'Muted metadata' }
    ],
    bestFor: ['Premiere reels', 'Case study spotlights', 'Awards highlight blocks']
  },
  {
    id: 'claude-studios-b',
    name: 'Option B · Premium Purple/Magenta',
    origin: 'Claude Code',
    tagline: 'Vibrant creative energy with jewel tones',
    narrative: 'A saturated purple-to-magenta spectrum designed to position Studios as bold creative partners.',
    hero: {
      background: '#6B21A8',
      surface: 'rgba(107,33,168,0.35)',
      headingColor: '#E879F9',
      bodyColor: '#E2E8F0',
      buttonBackground: '#C026D3',
      buttonText: '#1F1033',
      badgeBackground: '#94A3B8',
      badgeText: '#1F2937'
    },
    colors: [
      { name: 'Deep Purple', hex: '#6B21A8', role: 'Hero gradient anchor' },
      { name: 'Magenta', hex: '#C026D3', role: 'CTA / primary gradient' },
      { name: 'Silver', hex: '#94A3B8', role: 'Footers / neutral text' },
      { name: 'Bright Fuchsia', hex: '#E879F9', role: 'Hover / illustrations' },
      { name: 'Slate Gray', hex: '#64748B', role: 'Body copy / supporting text' }
    ],
    bestFor: ['Concept art reels', 'Innovation narratives', 'Talent recruitment']
  },
  {
    id: 'claude-studios-c',
    name: 'Option C · Teal Evolution',
    origin: 'Claude Code',
    tagline: 'Modern teal evolution with growth emphasis',
    narrative: 'Maintains brand continuity while elevating the palette with richer teals, emerald gradients, and warm gold highlights.',
    hero: {
      background: '#0F766E',
      surface: 'rgba(15,118,110,0.4)',
      headingColor: '#F59E0B',
      bodyColor: '#E2F4F0',
      buttonBackground: '#10B981',
      buttonText: '#0b2721'
    },
    colors: [
      { name: 'Deep Teal', hex: '#0F766E', role: 'Hero background' },
      { name: 'Emerald', hex: '#10B981', role: 'CTA / gradients' },
      { name: 'Warm Gold', hex: '#F59E0B', role: 'Accent headings' },
      { name: 'Lighter Teal', hex: '#14B8A6', role: 'Hover states' },
      { name: 'Slate', hex: '#1E293B', role: 'Body text on light backgrounds' }
    ],
    bestFor: ['Growth stories', 'Process timelines', 'Platform demos']
  },
  {
    id: 'claude-studios-d',
    name: 'Option D · Red Carpet Glam',
    origin: 'Claude Code',
    tagline: 'Velvet burgundy and rose gold glamour',
    narrative: 'A romantic, hospitality-inspired palette with lush burgundy, rose gold metallics, and champagne typography.',
    hero: {
      background: '#7C2D12',
      surface: 'rgba(124,45,18,0.55)',
      headingColor: '#F3E5AB',
      bodyColor: '#FDECD6',
      buttonBackground: '#E88B89',
      buttonText: '#2D0D0B'
    },
    colors: [
      { name: 'Burgundy', hex: '#7C2D12', role: 'Hero / rich backgrounds' },
      { name: 'Rose Gold', hex: '#E88B89', role: 'CTA / keylines' },
      { name: 'Champagne', hex: '#F3E5AB', role: 'Headlines / large copy' },
      { name: 'Deep Red', hex: '#991B1B', role: 'Overlays / gradients' },
      { name: 'Warm Beige', hex: '#D4C5B0', role: 'Cards / secondary backgrounds' }
    ],
    bestFor: ['Event spotlights', 'Client testimonials', 'Hero storytelling']
  }
]

export const claudeConversationalPalettes: PaletteOption[] = [
  {
    id: 'claude-conv-a',
    name: 'Option A · Cool Intelligence',
    origin: 'Claude Code',
    tagline: 'Deep blue trust with cyan signals',
    narrative: 'Balances enterprise trust and approachable innovation through layered navies and bright cyan accents.',
    hero: {
      background: '#1E3A8A',
      surface: 'rgba(30,58,138,0.35)',
      headingColor: '#FFFFFF',
      bodyColor: '#E0F2FE',
      buttonBackground: '#06B6D4',
      buttonText: '#062633'
    },
    colors: [
      { name: 'Deep Blue', hex: '#1E3A8A', role: 'Hero background' },
      { name: 'Cyan', hex: '#06B6D4', role: 'Primary CTA / iconography' },
      { name: 'Ice', hex: '#E0F2FE', role: 'Panels / cards' },
      { name: 'Electric Blue', hex: '#3B82F6', role: 'Hover / progress' },
      { name: 'Slate', hex: '#475569', role: 'Body copy / borders' }
    ],
    bestFor: ['Hero hero', 'Feature highlights', 'Metrics callouts']
  },
  {
    id: 'claude-conv-b',
    name: 'Option B · Neural Network',
    origin: 'Claude Code',
    tagline: 'Futuristic purple-to-cyan gradient',
    narrative: 'High-energy neon gradients for demonstrating AI prowess and innovation velocity.',
    hero: {
      background: '#581C87',
      surface: 'rgba(88,28,135,0.4)',
      headingColor: '#22D3EE',
      bodyColor: '#E9D5FF',
      buttonBackground: '#3B82F6',
      buttonText: '#0B1120'
    },
    colors: [
      { name: 'Dark Purple', hex: '#581C87', role: 'Hero gradient anchor' },
      { name: 'Electric Blue', hex: '#3B82F6', role: 'CTA / navigation' },
      { name: 'Neon Cyan', hex: '#22D3EE', role: 'Hover / highlight' },
      { name: 'Violet', hex: '#8B5CF6', role: 'Secondary gradients' },
      { name: 'Deep Indigo', hex: '#312E81', role: 'Surface / footers' }
    ],
    bestFor: ['Innovation timeline', 'AI lab feature sections', 'Interactive demos']
  },
  {
    id: 'claude-conv-c',
    name: 'Option C · Enterprise Green',
    origin: 'Claude Code',
    tagline: 'Calming greens with enterprise credibility',
    narrative: 'Draws from financial-grade greens and charcoal neutrals to convey reliable scale.',
    hero: {
      background: '#064E3B',
      surface: 'rgba(6,78,59,0.5)',
      headingColor: '#6EE7B7',
      bodyColor: '#EAFBF4',
      buttonBackground: '#10B981',
      buttonText: '#083226'
    },
    colors: [
      { name: 'Forest Green', hex: '#064E3B', role: 'Hero / nav background' },
      { name: 'Mint', hex: '#6EE7B7', role: 'Headlines / icons' },
      { name: 'Slate', hex: '#64748B', role: 'Body copy' },
      { name: 'Emerald', hex: '#10B981', role: 'CTA / charts' },
      { name: 'Charcoal', hex: '#1F2937', role: 'Footers / modals' }
    ],
    bestFor: ['ROI summaries', 'Security copy', 'Implementation timelines']
  },
  {
    id: 'claude-conv-d',
    name: 'Option D · Warm Trust',
    origin: 'Claude Code',
    tagline: 'Navy foundations with amber warmth',
    narrative: 'Introduces human warmth into an enterprise palette via rich amber and cream pairings.',
    hero: {
      background: '#1E293B',
      surface: 'rgba(30,41,59,0.6)',
      headingColor: '#F59E0B',
      bodyColor: '#FEF3C7',
      buttonBackground: '#FBBF24',
      buttonText: '#1E293B'
    },
    colors: [
      { name: 'Navy', hex: '#1E293B', role: 'Hero background' },
      { name: 'Amber', hex: '#F59E0B', role: 'Primary CTA' },
      { name: 'Cream', hex: '#FEF3C7', role: 'Cards / highlights' },
      { name: 'Golden Yellow', hex: '#FBBF24', role: 'Hover / metrics' },
      { name: 'Slate Gray', hex: '#334155', role: 'Body text / icons' }
    ],
    bestFor: ['Customer stories', 'Testimonials', 'Culture sections']
  }
]

