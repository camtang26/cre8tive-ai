import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const CallToAction = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.05)_0%,transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
          Ready to Transform Your Customer Interactions?
        </h2>
        <Button 
          size="lg"
          className={cn(
            "text-lg px-8 py-6 h-auto",
            "bg-[#004d26] hover:bg-[#006633]",
            "text-white font-semibold",
            "shadow-[0_0_20px_rgba(0,255,128,0.3)]",
            "hover:shadow-[0_0_30px_rgba(0,255,128,0.5)]",
            "transition-all duration-300"
          )}
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};