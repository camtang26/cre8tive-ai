import { lazy, Suspense } from 'react'
import { SectionSkeleton } from './SectionSkeleton'

const ConversationalEnterpriseSection = lazy(async () => {
  const module = await import('../components/ConversationalEnterpriseSection')
  return { default: module.ConversationalEnterpriseSection }
})

export const ConversationalEnterpriseLazy = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <ConversationalEnterpriseSection />
  </Suspense>
)
