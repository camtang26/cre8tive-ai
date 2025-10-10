/**
 * Image-to-Video vs Text-to-Video Comparison Data
 *
 * Research-validated copy from COPY_IMPLEMENTATION_GUIDE.md lines 196-243
 * Used in ImageToVideoComparison component (Story 2.3, Epic 2)
 *
 * @see src/components/studios/ImageToVideoComparison.tsx
 * @see docs/COPY_IMPLEMENTATION_GUIDE.md#Image-to-Video Quality Section
 */

/**
 * Comparison configuration interface
 * Defines structure for Image-to-Video vs Text-to-Video comparison
 */
export interface ComparisonConfig {
  /** Image-to-Video production method (our approach) */
  imageToVideo: {
    title: string
    benefits: string[] // ✓ checkmark items
    supportingText: string
  }
  /** Text-to-Video quick generation tools (comparison) */
  textToVideo: {
    title: string
    limitations: string[] // • bullet items
    supportingText: string
  }
}

/**
 * Comparison data - Image-to-Video vs Text-to-Video
 *
 * Copy source: COPY_IMPLEMENTATION_GUIDE.md lines 209-243
 * All text is research-validated and industry-backed
 */
export const COMPARISON_DATA: ComparisonConfig = {
  // Left column: Image-to-Video (Our Approach)
  imageToVideo: {
    title: 'Image-to-Video Production Method',
    benefits: [
      'Maximum quality control — Start with precisely composed frames',
      'Professional cinematography — Control every aspect of composition',
      'Brand consistency — Maintain visual identity across scenes',
      'Production-grade output — Suitable for enterprise campaigns',
    ],
    supportingText:
      'Any serious AI video producer worth their weight uses image-to-video for client work—it\'s the professional standard.',
  },

  // Right column: Text-to-Video (Comparison)
  textToVideo: {
    title: 'Text-to-Video (Quick Generation Tools)',
    limitations: [
      'Fast generation, limited control',
      'Unpredictable visual outcomes',
      'Difficult to maintain brand consistency',
      'Better for prototyping than production',
    ],
    supportingText:
      'Great for quick concepts, but lacks the control needed for professional client deliverables.',
  },
}

/**
 * Section header and subheader for ImageToVideoComparison component
 * From COPY_IMPLEMENTATION_GUIDE.md lines 198-207
 */
export const COMPARISON_HEADER = {
  title: 'Image-to-Video: Quality Over Speed',
  subtitle:
    'Professional AI video creators choose image-to-video workflows for maximum quality and creative control.',
}
