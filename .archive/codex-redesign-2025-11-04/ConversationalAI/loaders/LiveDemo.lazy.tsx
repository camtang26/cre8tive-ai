import { lazy, Suspense } from 'react'
import { SectionSkeleton } from './SectionSkeleton'

const ConversationalLiveDemoSection = lazy(async () => {
  const module = await import('../components/ConversationalLiveDemoSection')
  return { default: module.ConversationalLiveDemoSection }
})

export const ConversationalLiveDemoLazy = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <ConversationalLiveDemoSection />
  </Suspense>
)
