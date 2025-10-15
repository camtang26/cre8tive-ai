import { useState } from "react"
import { VideoBackground } from "../hero/VideoBackground"
import { HeroContentBold } from "../hero/HeroContentBold"

export const DesktopHero = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleMute = () => setIsMuted(!isMuted)
  const togglePlay = () => setIsPlaying(!isPlaying)

  return (
    <section
      className="relative w-full min-h-screen pt-20 pb-12 flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Video Background */}
      <VideoBackground
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={toggleMute}
        onTogglePlay={togglePlay}
        priority={true}
      />

      {/* Dark Overlay for Better Text Contrast */}
      <div
        className="absolute inset-0 bg-black/40 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Enhanced Animated Gradient Mesh - Modern Depth */}
      <div
        className="absolute inset-0 gradient-mesh-animated opacity-30 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Cinematic Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(5,5,10,0.6) 100%)"
        }}
        aria-hidden="true"
      />

      <HeroContentBold />
    </section>
  )
}
