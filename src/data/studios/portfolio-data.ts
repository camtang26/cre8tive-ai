/**
 * Portfolio Data for Studios Page
 *
 * Each portfolio item follows the "challenge → solution → deliverables" format
 * from COPY_IMPLEMENTATION_GUIDE.md (lines 66-104)
 */

export interface PortfolioItem {
  clientName: string;
  industry: string;
  challenge: string;
  fullStackProduction: string[];
  delivered: string;
  specs: {
    formats: string;
    resolution: string;
    duration: string;
  };
  videoUrl?: string;
  thumbnailUrl?: string;
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    clientName: "TechFlow Solutions",
    industry: "B2B SaaS",
    challenge: "Multi-platform product launch campaign needed for Q4 with tight two-week deadline and limited in-house video resources.",
    fullStackProduction: [
      "Creative brief & scene planning with brand alignment",
      "Image-to-video production for quality & control",
      "Professional sound design & original music scoring",
      "Native optimization for YouTube, LinkedIn, and X",
      "4K upscaling & color grading"
    ],
    delivered: "Complete campaign package ready for launch across all major B2B social platforms with consistent brand messaging.",
    specs: {
      formats: "3 formats",
      resolution: "4K",
      duration: "45s"
    }
  },
  {
    clientName: "Retail Innovation Co",
    industry: "E-commerce & Retail",
    challenge: "Holiday campaign requiring 6 platform-specific videos with different aspect ratios and messaging angles for diverse audience segments.",
    fullStackProduction: [
      "Multi-platform content strategy & storyboarding",
      "Image-to-video workflows for maximum creative control",
      "Custom sound design tailored to each platform's audience",
      "Native optimization for TikTok, Instagram, Facebook, YouTube, LinkedIn, X",
      "Professional color grading & motion graphics integration"
    ],
    delivered: "Full-stack holiday campaign with platform-optimized videos driving 3x engagement vs previous generic content.",
    specs: {
      formats: "6 formats",
      resolution: "4K",
      duration: "30-60s"
    }
  },
  {
    clientName: "HealthTech Innovations",
    industry: "Healthcare Technology",
    challenge: "Complex product explainer needed for medical professionals with strict compliance requirements and multi-channel distribution.",
    fullStackProduction: [
      "Compliance-reviewed script & technical scene planning",
      "Image-to-video production with precise medical visualization control",
      "Professional narration & sound design for credibility",
      "Format optimization for LinkedIn, YouTube, and sales enablement",
      "4K delivery with subtitle integration for accessibility"
    ],
    delivered: "Enterprise-grade explainer video suite meeting all healthcare compliance standards and approved for sales team deployment.",
    specs: {
      formats: "3 formats",
      resolution: "4K",
      duration: "90s"
    }
  },
  {
    clientName: "Global Finance Group",
    industry: "Financial Services",
    challenge: "Brand awareness campaign targeting C-suite executives across multiple regions with localized messaging and premium production values.",
    fullStackProduction: [
      "Executive-level creative direction & strategic messaging",
      "High-quality image-to-video workflows for brand prestige",
      "Original cinematic score & professional mixing",
      "Multi-language subtitle integration & region-specific optimization",
      "Premium 4K upscaling & color science for broadcast quality"
    ],
    delivered: "Premium video series positioning brand as industry thought leader with distribution across LinkedIn, YouTube, and executive events.",
    specs: {
      formats: "4 formats",
      resolution: "4K",
      duration: "60s"
    }
  },
  {
    clientName: "Lifestyle Brand Co",
    industry: "Consumer Goods",
    challenge: "Social-first campaign launch requiring vertical-first content optimized for mobile engagement across Gen Z and Millennial audiences.",
    fullStackProduction: [
      "Mobile-first content strategy & vertical scene composition",
      "Image-to-video production optimized for scroll-stopping moments",
      "Trend-aligned music selection & audio mixing",
      "Native TikTok, Instagram Reels, and YouTube Shorts optimization",
      "Fast-turnaround editing with brand consistency maintained"
    ],
    delivered: "Viral-ready social campaign with platform-native content driving 5x higher engagement than previous repurposed assets.",
    specs: {
      formats: "5 formats",
      resolution: "4K",
      duration: "15-30s"
    }
  }
];
