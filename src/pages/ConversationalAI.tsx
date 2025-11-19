import { Navigation } from "@/components/Navigation"
import { PageLayout } from "@/components/layouts/PageLayout"
import { SentientHero } from "@/components/conversational/redesign/SentientHero"
import { Suspense, lazy } from "react"

// Lazy load below-the-fold components
const AudioIntelligenceStream = lazy(() => import("@/components/conversational/redesign/AudioIntelligenceStream").then(module => ({ default: module.AudioIntelligenceStream })))
const HolographicVideo = lazy(() => import("@/components/conversational/redesign/HolographicVideo").then(module => ({ default: module.HolographicVideo })))
const NeuralHive = lazy(() => import("@/components/conversational/redesign/NeuralHive").then(module => ({ default: module.NeuralHive })))
const TacticalDemo = lazy(() => import("@/components/conversational/redesign/TacticalDemo").then(module => ({ default: module.TacticalDemo })))
const ResonanceBrand = lazy(() => import("@/components/conversational/redesign/ResonanceBrand").then(module => ({ default: module.ResonanceBrand })))
const TheVault = lazy(() => import("@/components/conversational/redesign/TheVault").then(module => ({ default: module.TheVault })))
const SecureUplink = lazy(() => import("@/components/conversational/redesign/SecureUplink").then(module => ({ default: module.SecureUplink })))

const ConversationalAI = () => {
  return (
    <div className="relative min-h-screen">
      {/* Unified Page Background - Conversational AI Abyssal Emerald Theme */}
      {/* Matches Studios/Briefing Engine black-centric approach: 95%+ black, subtle emerald/teal hints */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(20, 241, 149, 0.08) 0%, transparent 40%),
            linear-gradient(to bottom, rgba(4,18,30,0.98) 0%, rgba(6,32,47,0.99) 100%)
          `,
        }}
      />

      <PageLayout variant="custom">
        <Navigation />
        <main className="pt-0"> {/* Removed top padding to let hero hit top */}
          {/* Section 1: Sentient Hero (Redesign) */}
          <SentientHero />

          <Suspense fallback={<div className="h-screen bg-black" />}>
            {/* Section 2: Audio Intelligence Stream (Redesign) */}
            <AudioIntelligenceStream />

            {/* Section 3: The Holographic Theater (Redesign) */}
            <HolographicVideo />

            {/* Section 4: The Neural Hive (Redesign) */}
            <NeuralHive />

            {/* Section 5: Tactical Ops Center (Redesign) */}
            <TacticalDemo />

            {/* Section 6: Resonance Alignment (Redesign) */}
            <ResonanceBrand />

            {/* Section 7: The Vault (Redesign) */}
            <TheVault />

            {/* Section 8: Secure Uplink (Redesign) */}
            <SecureUplink />
          </Suspense>
        </main>
      </PageLayout>
    </div>
  )
}

export default ConversationalAI
