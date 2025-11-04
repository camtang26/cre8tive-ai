import { studiosSections } from '@/config/sections/studios.config'
import type { SectionConfig } from '@/config/sections/types'

export const getStudiosSection = (id: SectionConfig['id']) => {
  const section = studiosSections.find((entry) => entry.id === id)
  if (!section) {
    throw new Error(`Studios section with id "${id}" not found in configuration`)
  }
  return section
}
