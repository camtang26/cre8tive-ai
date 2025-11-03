import { lazy, Suspense } from 'react'
import { SectionSkeleton } from './SectionSkeleton'

const StudiosTestimonialsSection = lazy(async () => {
  const module = await import('../components/StudiosTestimonialsSection')
  return { default: module.StudiosTestimonialsSection }
})

export const StudiosTestimonialsLazy = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <StudiosTestimonialsSection />
  </Suspense>
)
