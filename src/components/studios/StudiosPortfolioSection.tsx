import { useState } from "react"

import VideoModal from "@/components/core/VideoModal"
import VimeoPlayer from "@/components/core/VimeoPlayer"

type PortfolioItem = {
  id: string
  videoId: string
  srLabel: string
  backdrop: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "cre8tive-dhm",
    videoId: "1051824336",
    srLabel: "Play Cre8tive AI DHM video",
    backdrop:
      "linear-gradient(135deg, rgba(49,196,255,0.18) 0%, rgba(70,116,221,0.28) 18%, rgba(225,179,65,0.42) 100%), radial-gradient(circle at 22% 18%, rgba(142,220,255,0.65) 0%, rgba(142,220,255,0) 52%), radial-gradient(circle at 80% 82%, rgba(225,179,65,0.55) 0%, rgba(225,179,65,0) 65%)",
  },
  {
    id: "kotia-skincare",
    videoId: "1055446411",
    srLabel: "Play Kotia Skincare video",
    backdrop:
      "linear-gradient(160deg, rgba(8,22,60,0.9) 0%, rgba(24,43,92,0.8) 42%, rgba(221,172,72,0.45) 100%), radial-gradient(circle at 15% 30%, rgba(49,196,255,0.5) 0%, rgba(49,196,255,0) 55%), radial-gradient(circle at 76% 68%, rgba(225,179,65,0.6) 0%, rgba(225,179,65,0) 60%)",
  },
  {
    id: "automotive-demo",
    videoId: "1051820049",
    srLabel: "Play Cre8tive AI Automotive Demo video",
    backdrop:
      "linear-gradient(140deg, rgba(26,56,104,0.82) 0%, rgba(15,31,63,0.94) 52%, rgba(49,196,255,0.32) 100%), radial-gradient(circle at 18% 72%, rgba(225,179,65,0.65) 0%, rgba(225,179,65,0) 62%), radial-gradient(circle at 82% 24%, rgba(142,220,255,0.6) 0%, rgba(142,220,255,0) 60%)",
  },
  {
    id: "cre8tive-demo",
    videoId: "1051819670",
    srLabel: "Play Cre8tive AI Demo video",
    backdrop:
      "linear-gradient(150deg, rgba(13,28,50,0.92) 0%, rgba(8,15,28,0.88) 45%, rgba(49,196,255,0.35) 100%), radial-gradient(circle at 70% 28%, rgba(225,179,65,0.6) 0%, rgba(225,179,65,0) 65%), radial-gradient(circle at 24% 78%, rgba(142,220,255,0.55) 0%, rgba(142,220,255,0) 62%)",
  },
  {
    id: "marina-project",
    videoId: "1052203361",
    srLabel: "Play Cre8tive AI Marina Project video",
    backdrop:
      "linear-gradient(140deg, rgba(8,16,36,0.88) 0%, rgba(12,25,52,0.92) 56%, rgba(225,179,65,0.36) 100%), radial-gradient(circle at 80% 18%, rgba(49,196,255,0.55) 0%, rgba(49,196,255,0) 58%), radial-gradient(circle at 18% 82%, rgba(225,179,65,0.58) 0%, rgba(225,179,65,0) 64%)",
  },
  {
    id: "liminal",
    videoId: "1052204241",
    srLabel: "Play LIMINAL video",
    backdrop:
      "linear-gradient(135deg, rgba(49,196,255,0.32) 0%, rgba(16,38,78,0.86) 45%, rgba(9,14,28,0.94) 100%), radial-gradient(circle at 32% 30%, rgba(225,179,65,0.55) 0%, rgba(225,179,65,0) 60%), radial-gradient(circle at 70% 74%, rgba(142,220,255,0.6) 0%, rgba(142,220,255,0) 64%)",
  },
]

export function StudiosPortfolioSection() {
  return (
    <section
      id="studios-portfolio"
      aria-labelledby="studios-portfolio-title"
      data-motion-group="portfolio"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_12%_10%,rgba(49,196,255,0.18),transparent_58%),radial-gradient(circle_at_82%_8%,rgba(225,179,65,0.14),transparent_60%),linear-gradient(160deg,rgba(5,6,13,0.98) 0%,rgba(6,12,24,0.96) 38%,rgba(9,18,36,0.97) 100%)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-plus-lighter [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />
      <div className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 md:py-28 lg:px-10 xl:px-0">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-studios-headline">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            Our Work
          </div>
          <div className="space-y-5">
            <h2 id="studios-portfolio-title" className="text-balance text-4xl font-black tracking-tight md:text-5xl">
              Judge Yourself
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-studios-body">
              Your clients won’t compromise on quality. Neither do we. Every campaign ships with broadcast polish across six platforms from a single pipeline.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3" data-motion="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={item.id} item={item} order={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

type PortfolioCardProps = {
  item: PortfolioItem
  order: number
}

function PortfolioCard({ item, order }: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <article
        data-motion="portfolio-card"
        data-motion-order={order}
        className="group relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.02] p-[1.5px] transition-all duration-500 ease-out hover:border-white/[0.16] hover:bg-white/[0.04] hover:shadow-[0_70px_160px_-80px_rgba(9,18,36,0.85)]"
      >
        <button
          type="button"
          aria-label={item.srLabel}
          onClick={() => setIsModalOpen(true)}
          className="relative block w-full overflow-hidden rounded-[30px] transition-transform duration-500 ease-out focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studios-accent/70 group-hover:-translate-y-1"
          data-motion="portfolio-card-media"
          data-motion-order={order}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[30px]">
            <div
              className="absolute inset-0 rounded-[30px] opacity-80"
              style={{
                backgroundImage: item.backdrop,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-[1.5px] rounded-[28px] bg-white/4 backdrop-blur-[14px]" />
            <div className="absolute inset-[3px] rounded-[26px] overflow-hidden">
              <div className="relative h-full w-full">
                <VimeoPlayer
                  videoId={item.videoId}
                  autoplay={false}
                  loop={false}
                  muted={true}
                  controls={false}
                  isBackground={true}
                  className="rounded-[26px]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_18%_24%,rgba(49,196,255,0.38),rgba(49,196,255,0)_58%),radial-gradient(circle_at_74%_72%,rgba(225,179,65,0.35),rgba(225,179,65,0)_62%)] opacity-80 transition-opacity duration-700 ease-out group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-[26px] opacity-[0.16] mix-blend-screen [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.75\'/%3E%3C/svg%3E')]" />
                <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-b from-black/45 via-transparent to-black/60 opacity-75 transition-opacity duration-700 ease-out group-hover:opacity-55" />
                <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/12 transition duration-500 ease-out group-hover:ring-white/25" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_0_35px_rgba(49,196,255,0.25)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_55px_rgba(49,196,255,0.55)]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/35 via-white/10 to-transparent opacity-80" />
                    <svg className="relative ml-1 h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9.5 7.5v9l6.5-4.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </article>
      {isModalOpen ? <VideoModal videoId={item.videoId} onClose={() => setIsModalOpen(false)} /> : null}
    </>
  )
}
