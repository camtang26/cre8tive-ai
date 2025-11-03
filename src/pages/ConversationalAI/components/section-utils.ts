import { conversationalSections } from '@/config/sections/conversational-ai.config'
import type { SectionConfig } from '@/config/sections/types'

export const getConversationalSection = (id: SectionConfig['id']) => {
  const section = conversationalSections.find((entry) => entry.id === id)
  if (!section) {
    throw new Error(`Conversational AI section with id "${id}" not found in configuration`)
  }
  return section
}
