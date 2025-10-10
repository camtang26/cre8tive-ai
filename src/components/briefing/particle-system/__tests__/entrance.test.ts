import {
  easeOutPower4,
  resolveStaggeredProgress,
} from '@/components/briefing/particle-system/entrance'

describe('entrance easing helpers', () => {
  it('eases with power4 curve', () => {
    expect(easeOutPower4(0)).toBe(0)
    expect(easeOutPower4(1)).toBe(1)
    const mid = easeOutPower4(0.5)
    expect(mid).toBeGreaterThan(0.5)
    expect(mid).toBeLessThan(1)
  })

  it('resolves staggered progress within bounds', () => {
    expect(resolveStaggeredProgress(0, 0.5, 0.6)).toBe(0)
    expect(resolveStaggeredProgress(0.6, 0.5, 0.6)).toBeGreaterThan(0)
    expect(resolveStaggeredProgress(1, 0.5, 0.6)).toBe(1)
  })

  it('clamps negative and overflow values', () => {
    expect(resolveStaggeredProgress(-0.2, 0.9, 0.8)).toBe(0)
    expect(resolveStaggeredProgress(1.2, 0.2, 0.3)).toBe(1)
  })
})
