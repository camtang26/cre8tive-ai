import React from "react"
import { Helmet } from "react-helmet"
import StudioHero_PremiumGoldenGobo from "./prototypes/studios-hero/StudioHero_PremiumGoldenGobo"

const StudiosHeroPremium: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05060D]">
      <Helmet>
        <title>Studios — Premium Hero (Codex)</title>
      </Helmet>
      <StudioHero_PremiumGoldenGobo />
    </div>
  )
}

export default StudiosHeroPremium

