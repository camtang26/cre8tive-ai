import { forwardRef } from 'react'
import { VideoShowcasePattern } from '@/components/sections/VideoShowcasePattern'
import { getConversationalSection } from './section-utils'
import { useSectionExposure } from '@/hooks/useSectionExposure'
import { mergeRefs } from '@/lib/mergeRefs'

const section = getConversationalSection('conversational-live-demo')

export const ConversationalLiveDemoSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)
  // forwardRef for GSAP team
  return <VideoShowcasePattern section={section} sectionRef={mergeRefs(exposureRef, ref)} />
})

ConversationalLiveDemoSection.displayName = 'ConversationalLiveDemoSection'
