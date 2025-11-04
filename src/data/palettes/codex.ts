import type { PaletteOption } from '@/components/palette-prototypes/types'

export const codexStudiosPalettes: PaletteOption[] = [
  {
    id: 'codex-studios-a',
    name: 'Film Noir Gradient',
    origin: 'Codex',
    tagline: 'Gradient midnight film noir with gold + cyan glints',
    narrative:
      'Maintains the gold-forward Film Noir story while shifting to a deep midnight gradient that matches the current Cre8tive AI look.',
    hero: {
      background: 'linear-gradient(135deg, #05060D 0%, #0C1526 48%, #13263B 100%)',
      surface: 'linear-gradient(135deg, rgba(10,17,32,0.82) 0%, rgba(7,12,24,0.92) 100%)',
      headingColor: '#F5E7C7',
      bodyColor: '#C7D2E0',
      buttonBackground: '#E1B341',
      buttonText: '#0A121E',
      badgeBackground: '#1E88F7',
      badgeText: '#041428'
    },
    colors: [
      { name: 'Nightfall Obsidian', hex: '#05060D', role: 'Hero gradient anchor / nav' },
      { name: 'Indigo Shadow', hex: '#13263B', role: 'Secondary gradient stop / cards' },
      { name: 'Spotlight Gold', hex: '#E1B341', role: 'Primary CTA / metric accents' },
      { name: 'Champagne Mist', hex: '#F5E7C7', role: 'Headlines / large typography' },
      { name: 'Ion Cyan', hex: '#31C4FF', role: 'Interactive underline / hover glow' }
    ],
    bestFor: ['Hero marquee', 'Awards ribbon', 'CTA banner'],
    researchRefs: ['Luxury emerald & gold trend (Medium 2025)', 'Dark futuristic gradients (Awwwards 2025)']
  },
  {
    id: 'codex-studios-b',
    name: 'Abyssal Emerald',
    origin: 'Codex',
    tagline: 'Emerald neon over abyssal blue-black gradient',
    narrative:
      'Leverages emerald + charcoal cues with neon teal highlights to align with the futuristic gradient shell on the homepage.',
    hero: {
      background: 'linear-gradient(135deg, #04121E 0%, #06293B 45%, #074C4E 100%)',
      surface: 'linear-gradient(135deg, rgba(6,32,47,0.8) 0%, rgba(4,19,31,0.92) 100%)',
      headingColor: '#E4F8FF',
      bodyColor: '#B8D9DE',
      buttonBackground: '#16F0A1',
      buttonText: '#032219',
      badgeBackground: '#0BCBFF',
      badgeText: '#031118'
    },
    colors: [
      { name: 'Abyss Blue', hex: '#04121E', role: 'Hero gradient base' },
      { name: 'Emerald Neon', hex: '#16F0A1', role: 'Primary CTA / data glows' },
      { name: 'Glacier Teal', hex: '#0BCBFF', role: 'Hover / micro interaction' },
      { name: 'Sea Glass', hex: '#B8D9DE', role: 'Body copy / card text' },
      { name: 'Onyx Graphite', hex: '#0A141D', role: 'Footers / separators' }
    ],
    bestFor: ['Process timeline', 'Interactive reels', 'Pricing CTA']
  },
  {
    id: 'codex-studios-c',
    name: 'Horizon Magenta',
    origin: 'Codex',
    tagline: 'Aurora magenta over midnight teal',
    narrative:
      'Applies a subtle aurora gradient with magenta highlights and teal shadows, keeping the dark shell while injecting creative energy.',
    hero: {
      background: 'linear-gradient(135deg, #060B13 0%, #13203A 50%, #2C1E40 100%)',
      surface: 'linear-gradient(135deg, rgba(12,23,41,0.82), rgba(13,8,29,0.94))',
      headingColor: '#F5EBFF',
      bodyColor: '#CFCEF5',
      buttonBackground: '#F25CF2',
      buttonText: '#270227',
      badgeBackground: '#44E0FF',
      badgeText: '#02151F'
    },
    colors: [
      { name: 'Cosmic Navy', hex: '#060B13', role: 'Hero gradient start' },
      { name: 'Deep Amethyst', hex: '#2C1E40', role: 'Hero gradient end / overlays' },
      { name: 'Vivid Magenta', hex: '#F25CF2', role: 'CTA / signals' },
      { name: 'Ion Blue', hex: '#44E0FF', role: 'Secondary CTA / tag' },
      { name: 'Moonlit Lilac', hex: '#CFCEF5', role: 'Body text / caption' }
    ],
    bestFor: ['Motion showcase', 'Creative services section', 'Carousel overlays']
  },
  {
    id: 'codex-studios-d',
    name: 'Solar Flare Bronze',
    origin: 'Codex',
    tagline: 'Bronze + cyan glints on deep space gradient',
    narrative:
      'Combines warm metallic accents with cyan edge lighting, ideal for bridging cinematic storytelling with futuristic UI components.',
    hero: {
      background: 'linear-gradient(135deg, #050C14 0%, #112131 48%, #1F2638 100%)',
      surface: 'linear-gradient(135deg, rgba(12,24,36,0.82), rgba(7,14,22,0.94))',
      headingColor: '#F9F1E7',
      bodyColor: '#D0DEE9',
      buttonBackground: '#FFB547',
      buttonText: '#231207',
      badgeBackground: '#45D5F9',
      badgeText: '#061824'
    },
    colors: [
      { name: 'Stellar Navy', hex: '#050C14', role: 'Hero gradient base' },
      { name: 'Bronze Flare', hex: '#FFB547', role: 'Primary CTA / highlight' },
      { name: 'Frost Cyan', hex: '#45D5F9', role: 'Interactive accent / progress bar' },
      { name: 'Soft Linen', hex: '#F9F1E7', role: 'Headline typography' },
      { name: 'Shadow Steel', hex: '#1B2434', role: 'Panels / footers' }
    ],
    bestFor: ['Case study grid', 'Metric highlights', 'Secondary CTAs']
  }
]

export const codexConversationalPalettes: PaletteOption[] = [
  {
    id: 'codex-conv-a',
    name: 'Neural Gradient',
    origin: 'Codex',
    tagline: 'Deep-space navy with electric cyan pulse',
    narrative:
      'Adapts the classic enterprise blue scheme into a layered navy gradient with cyan and mint glows that match Cre8tive AI’s futuristic baseline.',
    hero: {
      background: 'linear-gradient(135deg, #02060F 0%, #061530 45%, #0D2747 100%)',
      surface: 'linear-gradient(135deg, rgba(6,21,48,0.78), rgba(3,9,22,0.92))',
      headingColor: '#F2F8FF',
      bodyColor: '#C7D9F1',
      buttonBackground: '#1F9CFF',
      buttonText: '#021025',
      badgeBackground: '#53FFD6',
      badgeText: '#021215'
    },
    colors: [
      { name: 'Neural Navy', hex: '#061530', role: 'Hero background / nav' },
      { name: 'Ion Cyan', hex: '#1F9CFF', role: 'Primary CTA / link' },
      { name: 'Signal Mint', hex: '#53FFD6', role: 'Status badge / hover glow' },
      { name: 'Data Slate', hex: '#0D2747', role: 'Cards / overlays' },
      { name: 'Cloud White', hex: '#F2F8FF', role: 'Headlines / body text' }
    ],
    bestFor: ['Hero headline', 'Feature tabs', 'Conversion CTAs']
  },
  {
    id: 'codex-conv-b',
    name: 'Quantum Alloy',
    origin: 'Codex',
    tagline: 'Slate hardware gradient with violet energy',
    narrative:
      'Partners slate hardware tones with a violet energy accent and mint hover states for AI platform credibility.',
    hero: {
      background: 'linear-gradient(135deg, #0B101B 0%, #151B2C 45%, #1F2744 100%)',
      surface: 'linear-gradient(135deg, rgba(18,24,38,0.82), rgba(9,13,22,0.94))',
      headingColor: '#E9EDFF',
      bodyColor: '#C5CBE0',
      buttonBackground: '#635BFF',
      buttonText: '#150F35',
      badgeBackground: '#64FFC2',
      badgeText: '#06251C'
    },
    colors: [
      { name: 'Graphite Slate', hex: '#151B2C', role: 'Background / shell' },
      { name: 'Violet Surge', hex: '#635BFF', role: 'CTA / emphasis' },
      { name: 'Mint Signal', hex: '#64FFC2', role: 'Success / highlight' },
      { name: 'Steel Blue', hex: '#1F2744', role: 'Cards / table rows' },
      { name: 'Frost White', hex: '#E9EDFF', role: 'Copy' }
    ],
    bestFor: ['Security/Compliance section', 'Pricing table', 'Integration list']
  },
  {
    id: 'codex-conv-c',
    name: 'Aurora Slate',
    origin: 'Codex',
    tagline: 'Aurora teal over abyssal slate',
    narrative:
      'Draws on horizon gradients with a teal-to-cyan sweep and lilac supportive tones, ideal for showcasing live demos.',
    hero: {
      background: 'linear-gradient(135deg, #04101D 0%, #0C2438 45%, #133552 100%)',
      surface: 'linear-gradient(135deg, rgba(7,24,40,0.8), rgba(5,15,28,0.94))',
      headingColor: '#E8F8FF',
      bodyColor: '#CBE7F4',
      buttonBackground: '#38E5FF',
      buttonText: '#03202A',
      badgeBackground: '#A88BFF',
      badgeText: '#140940'
    },
    colors: [
      { name: 'Aurora Navy', hex: '#0C2438', role: 'Hero background / nav' },
      { name: 'Teal Wave', hex: '#38E5FF', role: 'Primary CTA / accent' },
      { name: 'Lilac Orbit', hex: '#A88BFF', role: 'Secondary CTA / tags' },
      { name: 'Polar Mist', hex: '#E8F8FF', role: 'Headlines' },
      { name: 'Deep Current', hex: '#133552', role: 'Cards / rails' }
    ],
    bestFor: ['Live demo section', 'Roadmap timeline', 'Persona segmentation']
  },
  {
    id: 'codex-conv-d',
    name: 'Horizon Ember',
    origin: 'Codex',
    tagline: 'Warm horizon gradient with teal sparks',
    narrative:
      'Combines warm amber cues for approachability with teal sparks to maintain the futuristic edge of the platform.',
    hero: {
      background: 'linear-gradient(135deg, #060B14 0%, #141D2E 45%, #1C2A3C 100%)',
      surface: 'linear-gradient(135deg, rgba(15,25,40,0.82), rgba(9,16,26,0.94))',
      headingColor: '#FDF4E0',
      bodyColor: '#DCD6CA',
      buttonBackground: '#FFB45C',
      buttonText: '#2A1607',
      badgeBackground: '#45E3D0',
      badgeText: '#04221F'
    },
    colors: [
      { name: 'Horizon Navy', hex: '#141D2E', role: 'Background / hero' },
      { name: 'Amber Ember', hex: '#FFB45C', role: 'Primary CTA' },
      { name: 'Teal Spark', hex: '#45E3D0', role: 'Secondary CTA / hover' },
      { name: 'Dusk Slate', hex: '#1C2A3C', role: 'Panels / cards' },
      { name: 'Soft Sand', hex: '#FDF4E0', role: 'Headers / large copy' }
    ],
    bestFor: ['Customer stories', 'Contact CTA', 'Support highlight']
  }
]
