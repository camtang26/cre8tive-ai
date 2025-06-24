import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '../ContactForm'

// Mock fetch
global.fetch = vi.fn()

// Mock environment variables
vi.stubEnv('VITE_GETFORM_ENDPOINT', 'https://getform.io/f/test')
vi.stubEnv('VITE_GETFORM_TOKEN', 'test-token')

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset fetch mock
    ;(global.fetch as ReturnType<typeof vi.fn>).mockReset()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    
    // Try to submit empty form
    await user.click(submitButton)
    
    // Check for validation (button should be disabled or form should not submit)
    expect(global.fetch).not.toHaveBeenCalled()
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    })
    
    render(<ContactForm />)
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '0404713440')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Verify fetch was called
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('getform.io'),
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json'
          })
        })
      )
    })
  })

  it('handles submission errors gracefully', async () => {
    const user = userEvent.setup()
    ;(global.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error('Network error')
    )
    
    render(<ContactForm />)
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '0404713440')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Should show error message (implementation dependent)
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled()
    })
  })
})