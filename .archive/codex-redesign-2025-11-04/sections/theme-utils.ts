export type SectionTheme = 'studios' | 'conversational'

interface ThemeTokens {
  heroBackground: string
  heroGlowPrimary: string
  heroGlowSecondary: string
  heroCard: string
  textHeadline: string
  textBody: string
  accentText: string
  accentBorder: string
  accentBg: string
  cardSurface: string
  cardBorder: string
  gridGlow: string
  buttonPrimary: string
  buttonPrimaryHover: string
  buttonSecondary: string
  buttonSecondaryHover: string
}

const themes: Record<SectionTheme, ThemeTokens> = {
  studios: {
    heroBackground: 'bg-gradient-to-br from-[#05060D] via-[#101731] to-[#1E293B]',
    heroGlowPrimary: 'bg-[radial-gradient(circle_at_20%_20%,rgba(49,196,255,0.3)_0%,rgba(5,6,13,0)_55%)]',
    heroGlowSecondary: 'bg-[radial-gradient(circle_at_80%_70%,rgba(225,179,65,0.35)_0%,rgba(5,6,13,0)_60%)]',
    heroCard: 'bg-white/6 backdrop-blur-xl border border-white/10 shadow-[0_35px_120px_-35px_rgba(49,196,255,0.35)]',
    textHeadline: 'text-studios-headline',
    textBody: 'text-studios-body',
    accentText: 'text-studios-accent',
    accentBorder: 'border-studios-accent/60',
    accentBg: 'bg-studios-accent/20',
    cardSurface: 'bg-gradient-to-br from-white/8 via-white/4 to-white/6 backdrop-blur-xl',
    cardBorder: 'border-white/12',
    gridGlow: 'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(49,196,255,0.25)_0%,rgba(5,6,13,0)_70%)] before:opacity-80 before:-z-10',
    buttonPrimary: 'bg-studios-primary text-black shadow-[0_20px_60px_-20px_rgba(225,179,65,0.6)]',
    buttonPrimaryHover: 'hover:bg-studios-accent hover:text-black',
    buttonSecondary: 'border border-white/40 text-white hover:border-white/60',
    buttonSecondaryHover: 'hover:bg-white/10',
  },
  conversational: {
    heroBackground: 'bg-gradient-to-br from-[#04121E] via-[#063447] to-[#0A524E]',
    heroGlowPrimary: 'bg-[radial-gradient(circle_at_20%_25%,rgba(22,240,161,0.28)_0%,rgba(4,18,30,0)_60%)]',
    heroGlowSecondary: 'bg-[radial-gradient(circle_at_85%_75%,rgba(11,203,255,0.35)_0%,rgba(4,18,30,0)_60%)]',
    heroCard: 'bg-white/5 backdrop-blur-xl border border-white/12 shadow-[0_35px_120px_-35px_rgba(11,203,255,0.4)]',
    textHeadline: 'text-conversational-headline',
    textBody: 'text-conversational-body',
    accentText: 'text-conversational-accent',
    accentBorder: 'border-conversational-accent/60',
    accentBg: 'bg-conversational-accent/15',
    cardSurface: 'bg-gradient-to-br from-white/8 via-white/4 to-white/6 backdrop-blur-xl',
    cardBorder: 'border-white/12',
    gridGlow: 'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(22,240,161,0.2)_0%,rgba(4,18,30,0)_70%)] before:opacity-80 before:-z-10',
    buttonPrimary: 'bg-conversational-primary text-black shadow-[0_20px_60px_-20px_rgba(22,240,161,0.6)]',
    buttonPrimaryHover: 'hover:bg-conversational-accent hover:text-black',
    buttonSecondary: 'border border-white/40 text-white hover:border-white/60',
    buttonSecondaryHover: 'hover:bg-white/10',
  },
}

export const getThemeTokens = (theme: SectionTheme) => themes[theme]
