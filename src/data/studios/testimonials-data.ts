/**
 * Testimonials Data - Studios Page
 *
 * Research-validated client testimonials with complete attribution.
 * Source: Story 2.4 AC #2 (docs/stories/story-2.4.md lines 29-43)
 *
 * @see docs/stories/story-2.4.md for requirements
 */

export interface TestimonialConfig {
  quote: string
  clientName: string
  clientTitle: string
  company: string
  industry?: string
  starRating: number
  logo?: string
  headshot?: string
}

/**
 * Premium client testimonials (3 total)
 * - Kotia Skincare: Product launch, visual storytelling, image-to-video quality
 * - Marina Lab: Multi-platform optimization, creative agency experience
 * - Advisor Plus PTD: AI Briefing Engine to Studios workflow, speed advantage
 */
export const TESTIMONIALS_DATA: TestimonialConfig[] = [
  {
    quote: "Cre8tive AI transformed our product launch with stunning visual storytelling. The image-to-video quality was exceptional.",
    clientName: "Sarah Chen",
    clientTitle: "Marketing Director",
    company: "Kotia Skincare",
    industry: "Beauty & Wellness",
    starRating: 5,
  },
  {
    quote: "Working with Cre8tive AI felt like having an entire creative agency at our fingertips. The multi-platform optimization saved us weeks.",
    clientName: "Alex Rivera",
    clientTitle: "Creative Lead",
    company: "Marina Lab",
    industry: "Creative Agency",
    starRating: 5,
  },
  {
    quote: "The AI Briefing Engine to Studios workflow is seamless. From storyboard to final video in days, not weeks.",
    clientName: "Jamie Thompson",
    clientTitle: "Head of Content",
    company: "Advisor Plus PTD",
    industry: "Financial Services",
    starRating: 5,
  },
]

/**
 * Section copy from COPY_IMPLEMENTATION_GUIDE.md
 */
export const TESTIMONIALS_HEADER = {
  title: "What Our Clients Say",
  subtitle: "Don't just take our word for it—see what agencies and brands say about working with Cre8tive AI.",
}
