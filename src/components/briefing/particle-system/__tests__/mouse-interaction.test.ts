import { MouseInteraction } from '@/components/briefing/particle-system/MouseInteraction'

const createCanvasMock = () => {
  const listeners: Record<string, EventListenerOrEventListenerObject[]> = {}

  const canvas = document.createElement('canvas') as HTMLCanvasElement & {
    addEventListener: (type: string, listener: EventListenerOrEventListenerObject) => void
    removeEventListener: (type: string, listener: EventListenerOrEventListenerObject) => void
  }

  canvas.addEventListener = (type, listener) => {
    listeners[type] ||= []
    listeners[type].push(listener)
  }

  canvas.removeEventListener = (type, listener) => {
    if (!listeners[type]) return
    listeners[type] = listeners[type].filter((registered) => registered !== listener)
  }

  return { canvas, listeners }
}

describe('MouseInteraction lifecycle', () => {
  it('removes the same mouseleave handler during stop', () => {
    const { canvas, listeners } = createCanvasMock()
    const interaction = new MouseInteraction(canvas, {
      enabled: true,
      attractionRadius: 150,
      throttleMs: 16,
    })

    interaction.start()
    expect(listeners.mouseleave).toHaveLength(1)

    interaction.stop()
    expect(listeners.mouseleave).toHaveLength(0)
  })
})
