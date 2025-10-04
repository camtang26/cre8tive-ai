import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "@/components/shared/ScrollFade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type Testimonial } from "../Testimonials";
import { useGestures } from "@/hooks/useGestures";

interface MobileTestimonialCarouselProps {
  testimonials: Testimonial[];
  brandColors: Record<string, string>;
}

export const MobileTestimonialCarousel = ({ 
  testimonials,
  brandColors 
}: MobileTestimonialCarouselProps) => {
  return (
    <div className="space-y-6">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-sm mx-auto perspective-1000"
      >
        <CarouselContent className="-ml-2 md:hidden [transform-style:preserve-3d]">
          {testimonials.map((testimonial, index) => {
            const color = Object.values(brandColors)[index % Object.values(brandColors).length];
            
            return (
              <CarouselItem
                key={testimonial.company}
                className="pl-2 basis-full group"
              >
                <ScrollFade delay={index * 100}>
                  <div
                    className={cn(
                      "glass-morphism p-6 rounded-2xl space-y-4",
                      "transition-all duration-500 transform",
                      "relative"
                    )}
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
                      boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      '--card-color': color
                    } as React.CSSProperties}
                  >
                    {/* Star Rating */}
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current"
                          style={{ color }}
                        />
                      ))}
                    </div>

                    <blockquote className="text-sm md:text-base leading-relaxed text-white/90 text-center">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="text-sm font-bold" style={{ color }}>
                        {testimonial.company}
                      </div>
                      <Quote
                        className="w-4 h-4 opacity-30"
                        style={{ color }}
                      />
                    </div>
                  </div>
                </ScrollFade>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Swipe Indicator - Mobile Only */}
      <div className="flex items-center justify-center gap-4 md:hidden text-white/80">
        <ChevronLeft className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-medium">Swipe For More</span>
        <ChevronRight className="w-5 h-5 animate-pulse" />
      </div>
    </div>
  );
};