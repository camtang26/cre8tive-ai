import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Hero from '../Hero'

// Mock IntersectionObserver for Hero component animations
const mockIntersectionObserver = vi.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
})
window.IntersectionObserver = mockIntersectionObserver

describe('Hero Component', () => {
  const renderHero = () => {
    return render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    )
  }

  it('renders without crashing', () => {
    const { container } = renderHero()
    expect(container).toBeTruthy()
  })

  it('displays the main heading', () => {
    renderHero()
    const heading = screen.getByText(/Ideas Into/i)
    expect(heading).toBeInTheDocument()
  })

  it('displays the Interactive Realities text', () => {
    renderHero()
    const interactiveText = screen.getByText(/Interactive Realities/i)
    expect(interactiveText).toBeInTheDocument()
  })

  it('renders the CTA button with correct text', () => {
    renderHero()
    const ctaButton = screen.getByText(/Start Your Project/i)
    expect(ctaButton).toBeInTheDocument()
  })

  it('CTA button links to contact page', () => {
    renderHero()
    const ctaLink = screen.getByRole('link', { name: /Start Your Project/i })
    expect(ctaLink).toHaveAttribute('href', '/contact')
  })
})