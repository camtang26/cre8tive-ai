import {
  computeDeviceCapabilities,
  parseParticleScale,
  resolveDeviceType,
  resolveParticleCount,
} from '@/components/briefing/particle-system/device'

describe('particle device helpers', () => {
  it('resolves device type based on width', () => {
    expect(resolveDeviceType(375)).toBe('mobile')
    expect(resolveDeviceType(800)).toBe('tablet')
    expect(resolveDeviceType(1440)).toBe('desktop')
  })

  it('parses particle scale, clamping invalid values', () => {
    expect(parseParticleScale(undefined)).toBe(1)
    expect(parseParticleScale('0.5')).toBe(0.5)
    expect(parseParticleScale('-1')).toBe(1)
    expect(parseParticleScale('abc')).toBe(1)
    expect(parseParticleScale('2')).toBe(1)
  })

  it('computes particle counts for each device', () => {
    expect(resolveParticleCount('mobile')).toBe(1000)
    expect(resolveParticleCount('tablet')).toBe(2000)
    expect(resolveParticleCount('desktop')).toBe(5000)
  })

  it('applies scale when computing capabilities', () => {
    const scaled = computeDeviceCapabilities(1200, 0.4)
    expect(scaled.deviceType).toBe('desktop')
    expect(scaled.particleCount).toBe(2000)
  })
})
