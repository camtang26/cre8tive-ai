import { Hero } from "@/components/hero/Hero";
import { DesktopServices } from "@/components/Services/desktop/DesktopServices";
import { Testimonials } from "@/components/studios/Testimonials";

const services = [
  // ... keep your existing service array
];

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <DesktopServices services={services} />
      <Testimonials />
    </main>
  );
}; 