import { useSectionReveal } from '@/hooks/useSectionReveal';

const PAIN_POINTS = [
  {
    id: "traditional",
    label: "Traditional Agencies",
    summary: "8-week timelines, $50K minimums, stacked teams that bill for every revision, and your assets scattered across multiple vendors.",
  },
  {
    id: "ai-tools",
    label: "Pure AI Tools",
    summary: "Fast but fragile—artifacts, generic lighting, zero human direction, and your creative IP exposed on third-party platforms.",
  },
  {
    id: "in-house",
    label: "Building In-House",
    summary: "Full crew salaries, gear investments, perpetual upskilling just to keep pace, and internal infrastructure security burden as production scales.",
  },
] as const

export function StudiosChallengeSection() {
  // REFINED TIMING: Standard cinematic preset (1.0s, power3.out)
  // Research-backed: 50ms stagger shows 37% engagement boost (VAWebSEO 2025)
  // Cinematic upgrade: 0.8s → 1.0s for luxury brand weight
  useSectionReveal({
    selector: '[data-reveal-challenge]',
    stagger: 0.05,  // 50ms - research-backed sweet spot
    duration: 1.0,  // REFINED: Was 0.8s, now 1.0s for cinematic consistency
    distance: 60,   // Standard movement
    ease: "power3.out", // Standard smooth easing
    start: "top 80%",
    debug: false
  });
  return (
    <section
      id="studios-challenge"
      aria-labelledby="studios-challenge-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_10%_8%,rgba(49,196,255,0.22),transparent_62%),radial-gradient(circle_at_90%_12%,rgba(225,179,65,0.22),transparent_60%),linear-gradient(155deg,rgba(6,10,18,0.95) 0%,rgba(7,14,30,0.92) 55%,rgba(6,12,24,0.96) 100%)]"
    >
      <div className="container mx-auto flex flex-col gap-16 px-4 py-24 md:gap-20 md:px-6 lg:flex-row lg:items-start lg:gap-24 xl:px-0">
        <div className="max-w-2xl space-y-6 text-white lg:max-w-lg">
          <div data-reveal-challenge className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.38em] text-white/60">
            The Challenge Most Face
          </div>
          <h2
            data-reveal-challenge
            id="studios-challenge-title"
            className="text-4xl font-black tracking-tight text-studios-headline md:text-[3.4rem] md:leading-[1.05]"
          >
            Every Option Has Flaws
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-studios-body md:text-[1.3rem]">
            <p data-reveal-challenge>Traditional agencies demand eight weeks and $50K minimums. Pure AI tools deliver amateur work that screams "generated." Building in-house requires teams, equipment, and expertise most can't justify.</p>
            <p data-reveal-challenge>Meanwhile, clients need broadcast-quality video across six platforms. Yesterday. At budgets that actually make sense.</p>
            <p data-reveal-challenge>Few have mastered AI video production—it only emerged in 2023. Fewer still maintain broadcast quality standards. Cre8tive Studios is one of them.</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-10">
          <div className="grid gap-6 text-white lg:grid-cols-3">
            {PAIN_POINTS.map((item) => (
              <article
                data-reveal-challenge
                key={item.id}
                className="flex h-full flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.06] px-6 py-7 shadow-[0_35px_140px_-80px_rgba(6,10,20,0.95)] backdrop-blur-2xl transition-all duration-300 hover:border-white/18 hover:bg-white/[0.1]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/55">{item.label}</span>
                <p className="text-base text-white/80">{item.summary}</p>
              </article>
            ))}
          </div>

          <article data-reveal-challenge className="relative overflow-hidden rounded-[30px] border border-white/18 bg-gradient-to-br from-white/[0.18] via-white/[0.08] to-white/[0.04] px-8 py-10 shadow-[0_65px_200px_-90px_rgba(9,14,26,0.95)] backdrop-blur-3xl">
            <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.38)_0%,rgba(49,196,255,0)_70%)] blur-[110px]" aria-hidden />
            <div className="absolute -bottom-20 -left-14 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.34)_0%,rgba(225,179,65,0)_75%)] blur-[120px]" aria-hidden />

            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/10 px-4 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-studios-accent">
                Cre8tive Studios
              </span>
              <h3 className="text-3xl font-black leading-tight text-studios-headline md:text-[3.1rem]">
                Broadcast-quality AI production, on your clock.
              </h3>
              <p className="text-base text-studios-body md:text-lg">
                We pair human directors with AI mastery to deliver up to six platform-native formats from a single pipeline. No rework. No compromise.
              </p>
            </div>

            <ul className="mt-8 space-y-4 text-sm text-white/85 md:text-[1.05rem]">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-studios-accent to-studios-primary shadow-[0_0_18px_rgba(49,196,255,0.4)]" />
                Storyboard-to-finish workflows that stay on brand without a second pass.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-studios-accent to-studios-primary shadow-[0_0_18px_rgba(49,196,255,0.4)]" />
                Platform-specific outputs ready for YouTube, TikTok, Instagram, LinkedIn, X, and Facebook.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-studios-accent to-studios-primary shadow-[0_0_18px_rgba(49,196,255,0.4)]" />
                Since 2023 we've refined AI production for teams that can't compromise on broadcast quality.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-studios-accent to-studios-primary shadow-[0_0_18px_rgba(49,196,255,0.4)]" />
                Your creative work protected in our secure production environment—no exposure to external platforms.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
