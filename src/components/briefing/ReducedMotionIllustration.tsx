import { memo } from "react";

type ReducedMotionIllustrationVariant =
  | "hero"
  | "synthesis"
  | "styles"
  | "storyboard"
  | "handoff";

interface ReducedMotionIllustrationProps {
  variant: ReducedMotionIllustrationVariant;
  className?: string;
}

const gradients = {
  hero: ["#4F46E5", "#6366F1", "#22D3EE"],
  synthesis: ["#22D3EE", "#06B6D4", "#6366F1"],
  styles: ["#C026D3", "#EC4899", "#6366F1"],
  storyboard: ["#22C55E", "#0EA5E9", "#6366F1"],
  handoff: ["#EA580C", "#F97316", "#F472B6"]
} as const;

const viewBoxes: Record<ReducedMotionIllustrationVariant, string> = {
  hero: "0 0 360 220",
  synthesis: "0 0 360 220",
  styles: "0 0 360 220",
  storyboard: "0 0 360 220",
  handoff: "0 0 360 220"
};

const pathOpacity = {
  hero: 0.65,
  synthesis: 0.55,
  styles: 0.6,
  storyboard: 0.55,
  handoff: 0.6
} as const;

const HeroGlyph = () => (
  <>
    <rect x="24" y="24" width="312" height="172" rx="28" fill="url(#hero-bg)" opacity="0.95" />
    <rect x="48" y="52" width="120" height="20" rx="10" fill="white" opacity="0.18" />
    <rect x="48" y="84" width="184" height="16" rx="8" fill="white" opacity="0.25" />
    <rect x="48" y="110" width="156" height="16" rx="8" fill="white" opacity="0.18" />
    <rect x="48" y="144" width="96" height="32" rx="16" fill="white" opacity="0.35" />
    <rect x="168" y="144" width="84" height="32" rx="16" fill="white" opacity="0.2" />
    <rect x="266" y="52" width="44" height="44" rx="12" fill="white" opacity="0.12" />
    <circle cx="288" cy="74" r="10" fill="white" opacity="0.45" />
  </>
);

const SynthesisGlyph = () => (
  <>
    <circle cx="180" cy="104" r="68" fill="url(#synthesis-bg)" opacity={0.9} />
    <circle cx="180" cy="104" r="42" stroke="white" strokeWidth="1.5" opacity="0.4" fill="none" />
    <circle cx="180" cy="104" r="58" stroke="white" strokeWidth="1.2" opacity="0.2" fill="none" />
    <g opacity="0.75">
      <circle cx="120" cy="72" r="20" fill="white" opacity="0.18" />
      <circle cx="108" cy="132" r="16" fill="white" opacity="0.14" />
      <circle cx="240" cy="64" r="18" fill="white" opacity="0.18" />
      <circle cx="246" cy="140" r="16" fill="white" opacity="0.18" />
      <circle cx="180" cy="180" r="22" fill="white" opacity="0.15" />
    </g>
    <g stroke="white" strokeOpacity="0.2" strokeWidth="1.2">
      <line x1="120" y1="72" x2="180" y2="104" />
      <line x1="240" y1="64" x2="180" y2="104" />
      <line x1="246" y1="140" x2="180" y2="104" />
      <line x1="108" y1="132" x2="180" y2="104" />
      <line x1="180" y1="180" x2="180" y2="104" />
    </g>
    <circle cx="180" cy="104" r="18" fill="white" opacity="0.45" />
  </>
);

const StylesGlyph = () => (
  <>
    <rect x="32" y="36" width="296" height="148" rx="24" fill="url(#styles-bg)" opacity="0.95" />
    <g transform="translate(52 56)" opacity="0.95">
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 82}
            y={row * 48}
            width="64"
            height="36"
            rx="12"
            fill="white"
            opacity={0.28 + row * 0.08}
          />
        ))
      )}
    </g>
    <rect x="52" y="156" width="160" height="16" rx="8" fill="white" opacity="0.24" />
  </>
);

const StoryboardGlyph = () => (
  <>
    <rect x="28" y="32" width="304" height="156" rx="20" fill="url(#storyboard-bg)" opacity="0.96" />
    <g transform="translate(52 52)" opacity="0.95">
      {[0, 1].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 88}
            y={row * 56}
            width="72"
            height="44"
            rx="12"
            fill="white"
            opacity={0.26 + row * 0.08}
          />
        ))
      )}
    </g>
    <g transform="translate(52 156)" opacity="0.45" stroke="white" strokeWidth="2">
      <line x1="0" y1="0" x2="248" y2="0" />
    </g>
    <rect x="52" y="164" width="184" height="14" rx="7" fill="white" opacity="0.24" />
  </>
);

const HandoffGlyph = () => (
  <>
    <rect x="36" y="36" width="288" height="148" rx="28" fill="url(#handoff-bg)" opacity="0.96" />
    <rect x="64" y="64" width="160" height="20" rx="10" fill="white" opacity="0.25" />
    <rect x="64" y="94" width="208" height="16" rx="8" fill="white" opacity="0.2" />
    <rect x="64" y="120" width="132" height="16" rx="8" fill="white" opacity="0.2" />
    <rect x="64" y="150" width="96" height="32" rx="16" fill="white" opacity="0.35" />
    <rect x="208" y="150" width="72" height="32" rx="16" fill="white" opacity="0.2" />
    <g opacity="0.45">
      <circle cx="270" cy="84" r="16" fill="white" opacity="0.3" />
      <circle cx="298" cy="116" r="10" fill="white" opacity="0.45" />
    </g>
  </>
);

const glyphs: Record<ReducedMotionIllustrationVariant, JSX.Element> = {
  hero: <HeroGlyph />,
  synthesis: <SynthesisGlyph />,
  styles: <StylesGlyph />,
  storyboard: <StoryboardGlyph />,
  handoff: <HandoffGlyph />
};

const gradientIds: Record<ReducedMotionIllustrationVariant, string> = {
  hero: "hero-bg",
  synthesis: "synthesis-bg",
  styles: "styles-bg",
  storyboard: "storyboard-bg",
  handoff: "handoff-bg"
};

function getGradientStops(variant: ReducedMotionIllustrationVariant) {
  const [from, mid, to] = gradients[variant];
  return (
    <>
      <stop offset="0%" stopColor={from} stopOpacity={0.9} />
      <stop offset="52%" stopColor={mid} stopOpacity={0.82} />
      <stop offset="100%" stopColor={to} stopOpacity={0.86} />
    </>
  );
}

const ReducedMotionIllustrationComponent = ({ variant, className }: ReducedMotionIllustrationProps) => {
  const viewBox = viewBoxes[variant];
  const gradientId = gradientIds[variant];
  const glyph = glyphs[variant];

  return (
    <svg
      role="img"
      aria-hidden
      className={className}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          {getGradientStops(variant)}
        </linearGradient>
        <radialGradient id={`${gradientId}-glow`} cx="0.5" cy="0.55" r="0.75">
          <stop offset="0%" stopColor={gradients[variant][0]} stopOpacity={pathOpacity[variant]} />
          <stop offset="35%" stopColor={gradients[variant][1]} stopOpacity={pathOpacity[variant] * 0.7} />
          <stop offset="100%" stopColor={gradients[variant][2]} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="360" height="220" rx="36" fill={`url(#${gradientId}-glow)`} opacity="0.65" />
      {glyph}
    </svg>
  );
};

export const ReducedMotionIllustration = memo(ReducedMotionIllustrationComponent);
