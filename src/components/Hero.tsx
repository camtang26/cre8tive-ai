import { useIsMobile } from "@/hooks/use-mobile";
import { MobileHero } from "./mobile/MobileHero";
import { DesktopHero } from "./desktop/DesktopHero";

export const Hero = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHero /> : <DesktopHero />;
};