import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { MobileTestimonialCarousel } from "./mobile/MobileTestimonialCarousel";
import { CinemaCard } from "./CinemaCard";

export interface Testimonial {
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    company: "Kotia",
    quote: "Cre8tive AI Studios helped us leverage AI video production to create high-quality content quickly. Their team's deep understanding of both technology and business needs is exceptional.",
    rating: 5
  },
  {
    company: "Marina Lab",
    quote: "A cost-effective solution for professional-grade video content. Their collaborative approach made the process seamless and stress-free.",
    rating: 5
  },
  {
    company: "Advisor Plus PTD",
    quote: "Transformed our content creation approach. Their expertise in AI video production is exceptional, and they educated us on future possibilities.",
    rating: 5
  }
];

export const Testimonials = () => {
  const brandColors = {
    orange: "#F97316",  // Studios Orange
    teal: "#14B8A6",    // Studios Teal
    coral: "#FB7185"    // Studios Coral
  };

  return (
    <section className="py-12 md:py-24 relative overflow-hidden" aria-label="Client testimonials">
      {/* Studios Color Accents - Orange/Teal Theme */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 70% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
          filter: 'blur(120px)',
          zIndex: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient text-center mb-8 md:mb-14 tracking-tighter leading-none relative z-20">
            What Our Clients Say
          </h2>
        </ScrollFade>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <MobileTestimonialCarousel 
            testimonials={testimonials}
            brandColors={brandColors}
          />
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {testimonials.map((testimonial, index) => {
            const color = Object.values(brandColors)[index % Object.values(brandColors).length];

            return (
              <ScrollFade key={testimonial.company} delay={index * 100}>
                <CinemaCard accentColor={color} className="transition-all duration-500 hover:-translate-y-2">
                  <div
                    className="p-8 space-y-6"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
                      '--card-color': color
                    } as React.CSSProperties}
                  >
                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-current"
                          style={{ color }}
                        />
                      ))}
                    </div>

                    <blockquote className="text-base md:text-lg leading-relaxed text-white/90">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="font-bold" style={{ color }}>
                        {testimonial.company}
                      </div>
                      <Quote
                        className="w-5 h-5 opacity-30"
                        style={{ color }}
                      />
                    </div>
                  </div>
                </CinemaCard>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};