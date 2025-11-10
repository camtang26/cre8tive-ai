import { useId, type SVGProps } from "react"
import { useSectionReveal } from '@/hooks/useSectionReveal';
import { useDirectionalReveal } from '@/hooks/useDirectionalReveal';

const PLATFORM_GLYPHS = [
  {
    id: "youtube",
    name: "YouTube",
    gradient:
      "bg-[radial-gradient(circle_at_30%_28%,rgba(255,0,0,0.7),transparent_60%),radial-gradient(circle_at_78%_72%,rgba(225,179,65,0.45),transparent_58%)]",
    Icon: YouTubeIcon,
  },
  {
    id: "tiktok",
    name: "TikTok",
    gradient:
      "bg-[radial-gradient(circle_at_24%_24%,rgba(0,242,234,0.65),transparent_60%),radial-gradient(circle_at_76%_68%,rgba(254,44,85,0.55),transparent_58%)]",
    Icon: TikTokIcon,
  },
  {
    id: "instagram",
    name: "Instagram",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(255,220,128,0.7),transparent_62%),radial-gradient(circle_at_80%_70%,rgba(255,48,108,0.55),transparent_58%),radial-gradient(circle_at_40%_80%,rgba(88,81,219,0.55),transparent_58%)]",
    Icon: InstagramIcon,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    gradient:
      "bg-[radial-gradient(circle_at_22%_22%,rgba(40,103,178,0.75),transparent_60%),radial-gradient(circle_at_78%_74%,rgba(30,66,118,0.55),transparent_58%)]",
    Icon: LinkedInIcon,
  },
  {
    id: "x",
    name: "X",
    gradient:
      "bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_76%_68%,rgba(121,134,203,0.28),transparent_58%)]",
    Icon: XIcon,
  },
  {
    id: "facebook",
    name: "Facebook",
    gradient:
      "bg-[radial-gradient(circle_at_24%_24%,rgba(24,119,242,0.7),transparent_60%),radial-gradient(circle_at_78%_74%,rgba(0,53,128,0.6),transparent_58%)]",
    Icon: FacebookIcon,
  },
] as const

export function StudiosProductionStackSection() {
  // REFINED: Standard cinematic for text content (1.0s, power3.out)
  useSectionReveal({
    selector: '[data-reveal-stack]',
    stagger: 0.05,
    duration: 1.0,  // REFINED: Was 0.8s, now 1.0s
    distance: 60,
    ease: "power3.out",
    start: "top 80%"
  });

  // REFINED: HERO LUXURY for platform cards (1.6s, expo.out)
  // Even cards (YouTube, Instagram, X) slide from LEFT
  // Odd cards (TikTok, LinkedIn, Facebook) slide from RIGHT
  // Creates visual wave effect (Cinematographer research - Codrops Oct 2024)
  // Dramatic luxury timing: explosive start → hard brake → feather settle
  useDirectionalReveal({
    selector: '[data-reveal-platform]',
    stagger: 0.15,     // 150ms - wave effect timing
    duration: 1.6,     // REFINED: Was 1.2s, now 1.6s for maximum cinematic drama
    distance: 60,      // Horizontal movement
    initialScale: 0.95, // Subtle scale-up effect
    ease: "expo.out",  // REFINED: Was power4.out, now expo.out for luxury
    start: "top 75%"
  });

  return (
    <section
      id="studios-production-stack"
      aria-labelledby="studios-production-stack-title"
      data-motion-group="production-stack"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_16%_10%,rgba(49,196,255,0.2),transparent_62%),radial-gradient(circle_at_84%_18%,rgba(225,179,65,0.24),transparent_58%),linear-gradient(150deg,rgba(8,12,26,0.98) 0%,rgba(7,14,30,0.95) 55%,rgba(8,16,36,0.96) 100%)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.14] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 160 160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.85%22/%3E%3C/svg%3E')]" />
      <div className="pointer-events-none absolute inset-0 -z-30">
        <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.35)_0%,rgba(49,196,255,0)_70%)] blur-[100px]" />
        <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.32)_0%,rgba(225,179,65,0)_72%)] blur-[110px]" />
      </div>

      <div className="container relative mx-auto flex flex-col gap-16 px-4 md:px-6 lg:flex-row lg:items-start lg:gap-24 xl:px-0">
        <div className="max-w-3xl space-y-8 text-white" data-motion="production-stack.copy">
          <div data-reveal-stack className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/6 px-5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.36em] text-white/60">
            What You Actually Get
          </div>
          <div className="space-y-6">
            <h2
              data-reveal-stack
              id="studios-production-stack-title"
              className="text-4xl font-black tracking-tight text-studios-headline md:text-[3.3rem] md:leading-[1.08]"
            >
              Complete Production. Secure Infrastructure. One Partner.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-studios-body md:text-[1.25rem]">
              <p data-reveal-stack>
                You need more than video generation. You need storyboarding that works. Scripts that land. Sound design that feels professional. Editing that matches broadcast quality standards. Platform delivery for six formats.
              </p>
              <p data-reveal-stack>
                Most AI tools stop at generation—leaving you with raw footage and no path to polish. Most agencies charge separately for every layer.
              </p>
              <div data-reveal-stack className="space-y-6">
                <p>Our Studios handles the complete stack:</p>
                <div
                  className="flex flex-wrap gap-3 text-studios-headline"
                  aria-hidden="true"
                >
                  <span className="rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-lg font-semibold tracking-[0.3em] md:px-6 md:py-3 md:text-[1.1rem]">
                    Video.
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-lg font-semibold tracking-[0.3em] md:px-6 md:py-3 md:text-[1.1rem]">
                    Sound.
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-lg font-semibold tracking-[0.3em] md:px-6 md:py-3 md:text-[1.1rem]">
                    Dialogue.
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-lg font-semibold tracking-[0.3em] md:px-6 md:py-3 md:text-[1.1rem]">
                    Score.
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-lg font-semibold tracking-[0.3em] md:px-6 md:py-3 md:text-[1.1rem]">
                    Editing.
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-lg font-semibold tracking-[0.3em] md:px-6 md:py-3 md:text-[1.1rem]">
                    Upscaling.
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-lg font-semibold tracking-[0.3em] md:px-6 md:py-3 md:text-[1.1rem]">
                    Platform export.
                  </span>
                </div>
                <p className="sr-only">
                  Video. Sound. Dialogue. Score. Editing. Upscaling. Platform export.
                </p>
                <p className="mt-4">Everything required for broadcast-quality delivery.</p>
              </div>
              <p data-reveal-stack>
                Your creative assets never leave our secure production environment. While other solutions force you across fragmented platforms, everything happens on infrastructure we control—from storyboard to final delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[760px] mt-32 lg:mt-36" data-motion="production-stack.visual">
          <div
            className="relative grid grid-cols-3 gap-6 rounded-[26px] bg-white/[0.02] px-6 py-6 shadow-[0_70px_200px_-110px_rgba(8,12,26,0.9)] backdrop-blur-[18px]"
            data-motion="production-stack.platforms"
          >
            {PLATFORM_GLYPHS.map((platform, index) => (
              <div
                data-reveal-platform
                key={platform.id}
                className="group relative flex aspect-square w-full max-w-[160px] items-center justify-center rounded-[24px] border border-white/12 bg-white/[0.07] p-3 shadow-[0_36px_150px_-95px_rgba(9,18,36,0.9)] transition-transform duration-400 ease-out hover:-translate-y-1.5 hover:border-white/24 md:max-w-[180px] md:p-3.5"
                data-motion="production-stack.platform"
                data-motion-order={index + 1}
              >
                <span
                  className={`pointer-events-none absolute inset-0 rounded-[24px] opacity-95 transition-opacity duration-500 group-hover:opacity-100 ${platform.gradient}`}
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute inset-[2.2px] rounded-[21px] bg-black/32 backdrop-blur-xl before:absolute before:inset-0 before:rounded-[21px] before:bg-white/18"
                  aria-hidden
                />
                <span className="sr-only">{platform.name}</span>
                <platform.Icon className="relative h-[72%] w-[72%] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.24)] md:h-[75%] md:w-[75%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"
      />
      <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  )
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 291.379 291.379" aria-hidden="true" {...props}>
      <path
        fill="#FF004F"
        d="M191.102 105.182c18.814 13.442 41.862 21.351 66.755 21.351V78.656a63.81 63.81 0 0 1-14.019-1.466v37.686c-24.891 0-47.936-7.909-66.755-21.35v97.703c0 48.876-39.642 88.495-88.54 88.495-18.245 0-35.203-5.513-49.29-14.968 16.078 16.431 38.5 26.624 63.306 26.624 48.901 0 88.545-39.619 88.545-88.497v-97.701H191.102zm17.294-48.302c-9.615-10.499-15.928-24.067-17.294-39.067V11.655h-13.285c3.344 19.065 14.75 35.353 30.579 45.225zM70.181 227.25c-5.372-7.04-8.275-15.652-8.262-24.507 0-22.354 18.132-40.479 40.502-40.479a52.67 52.67 0 0 1 12.286 1.897v-48.947a154.61 154.61 0 0 0-14.013-.807v38.098a52.36 52.36 0 0 0-12.292-1.896c-22.37 0-40.501 18.123-40.501 40.48.002 17.902 9.065 31.588 22.282 38.255z"
      />
      <path
        fill="#010101"
        d="M177.083 93.525c18.819 13.441 41.864 21.35 66.755 21.35V77.189c-13.894-2.958-26.194-10.215-35.442-20.309-15.83-9.873-27.235-26.161-30.579-45.225h-34.896v191.226c-.079 22.293-18.18 40.344-40.502 40.344-13.154 0-24.84-6.267-32.241-15.975-13.216-6.667-22.279-20.354-22.279-36.16 0-22.355 18.131-40.48 40.501-40.48 4.286 0 8.417.667 12.292 1.896V114.9c-48.039.992-86.674 40.224-86.674 88.474 0 24.086 9.621 45.921 25.236 61.875 14.087 9.454 31.045 14.968 49.29 14.968 48.899 0 88.54-39.621 88.54-88.496V93.525z"
      />
      <path
        fill="#00F2EA"
        d="M243.838 77.189V66.999c-12.529.019-24.812-3.488-35.442-10.12a88.57 88.57 0 0 0 35.442 20.31zM177.817 11.655c-.319-1.822-.564-3.656-.734-5.497V0h-48.182v191.228c-.077 22.29-18.177 40.341-40.501 40.341-6.554 0-12.742-1.555-18.222-4.318 7.401 9.707 19.087 15.973 32.241 15.973 22.32 0 40.424-18.049 40.502-40.342V11.655h34.896zM100.694 114.408V103.56a155.5 155.5 0 0 0-12.149-.824C39.642 102.735 0 142.356 0 191.228c0 30.64 15.58 57.643 39.255 73.527-15.615-15.953-25.236-37.789-25.236-61.874.003-48.249 38.637-87.481 86.675-88.473z"
      />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  const gradientId = useId()
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id={gradientId} cx="30%" cy="0%" r="120%">
          <stop offset="0%" stopColor="#FFDF8B" />
          <stop offset="35%" stopColor="#FF6F61" />
          <stop offset="70%" stopColor="#C425E0" />
          <stop offset="100%" stopColor="#3A5AE5" />
        </radialGradient>
      </defs>
      <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="6" fill={`url(#${gradientId})`} />
      <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="5.6" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="#FFFFFF" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <rect x="6.3" y="9.1" width="2.4" height="8.9" fill="#FFFFFF" />
      <circle cx="7.5" cy="6.6" r="1.2" fill="#FFFFFF" />
      <path
        fill="#FFFFFF"
        d="M7.5 7.7c-.92 0-1.55-.63-1.55-1.48 0-.87.66-1.49 1.6-1.49.94 0 1.55.62 1.56 1.49 0 .85-.62 1.48-1.61 1.48ZM10.98 9.1h2.29v1.16h.03c.34-.63 1.18-1.34 2.56-1.34 2.44 0 3.1 1.58 3.1 3.86v5.22h-2.4v-4.86c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.86 1.26-1.86 2.56v4.95h-2.1V9.1Z"
      />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        fill="#FFFFFF"
        d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
      />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="5" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M13.5 21.6v-7.25h2.44l.38-3.02H13.5V9.4c0-.86.28-1.52 1.52-1.52h1.64V5.12c-.28-.04-1.27-.12-2.41-.12-2.38 0-4.01 1.45-4.01 4.12v2.25H7.7v3.02h2.54v7.21h3.26Z"
      />
    </svg>
  )
}
