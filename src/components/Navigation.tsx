import { MobileNavigation } from "./mobile/MobileNavigation";
import { DesktopNavigation } from "./desktop/DesktopNavigation";

export const Navigation = () => {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
};