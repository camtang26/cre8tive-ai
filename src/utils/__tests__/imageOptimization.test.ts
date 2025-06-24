import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getImageProps, generateBlurDataUrl } from '../imageOptimization'

describe('imageOptimization utilities', () => {
  describe('getImageProps', () => {
    it('returns basic props for external URLs', () => {
      const props = getImageProps(
        'https://example.com/image.jpg',
        'Test image',
        800,
        600
      )
      
      expect(props).toEqual({
        src: 'https://example.com/image.jpg',
        alt: 'Test image',
        width: 800,
        height: 600,
        loading: 'lazy',
        decoding: 'async'
      })
    })

    it('returns basic props with eager loading when priority is true', () => {
      const props = getImageProps(
        'https://example.com/image.jpg',
        'Test image',
        800,
        600,
        true
      )
      
      expect(props.loading).toBe('eager')
    })

    it('adds srcSet for local images', () => {
      const props = getImageProps(
        '/images/hero.jpg',
        'Hero image',
        1920,
        1080
      )
      
      expect(props).toHaveProperty('srcSet')
      expect(props.srcSet).toBe(
        '/images/hero.jpg?w=1920&q=75 1x, /images/hero.jpg?w=3840&q=75 2x'
      )
    })

    it('correctly handles different image dimensions', () => {
      const props = getImageProps(
        '/images/small.jpg',
        'Small image',
        400,
        300
      )
      
      expect(props.srcSet).toBe(
        '/images/small.jpg?w=400&q=75 1x, /images/small.jpg?w=800&q=75 2x'
      )
    })
  })

  describe('generateBlurDataUrl', () => {
    beforeEach(() => {
      global.fetch = vi.fn()
    })

    it('calls fetch with correct URL', async () => {
      const mockArrayBuffer = new ArrayBuffer(8)
      ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
        arrayBuffer: async () => mockArrayBuffer
      })
      
      await generateBlurDataUrl('https://example.com/image.jpg')
      
      expect(global.fetch).toHaveBeenCalledWith('https://example.com/image.jpg')
    })

    it('returns undefined on fetch error', async () => {
      ;(global.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
        new Error('Network error')
      )
      
      const result = await generateBlurDataUrl('https://example.com/image.jpg')
      
      expect(result).toBeUndefined()
    })
  })
})