import { lazy, Suspense } from 'react'
import { SectionSkeleton } from './SectionSkeleton'

const StudiosPortfolioSection = lazy(async () => {
  const module = await import('../components/StudiosPortfolioSection')
  return { default: module.StudiosPortfolioSection }
})

export const StudiosPortfolioLazy = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <StudiosPortfolioSection />
  </Suspense>
)
