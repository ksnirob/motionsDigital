'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'
import Button from './Button'

const serviceOptions = [
  'Web Development',
  'Web Design',
  'Mobile App Development',
  'Inventory Management Systems',
  'Logo Design',
  'Banner Design',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
    setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-3 text-slate-700">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-black focus:outline-none transition-all placeholder:text-slate-400 text-slate-900"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold mb-3 text-slate-700">
          Service needed *
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-black focus:outline-none transition-all text-slate-900"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-3 text-slate-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-black focus:outline-none transition-all placeholder:text-slate-400 text-slate-900"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-3 text-slate-700">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-black focus:outline-none transition-all placeholder:text-slate-400 text-slate-900"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-3 text-slate-700">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-black focus:outline-none transition-all resize-none placeholder:text-slate-400 text-slate-900"
          placeholder="Tell us about your project..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl text-green-800 text-sm">
          ✓ Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm">
          ✗ {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 w-5 h-5" />
      </Button>
    </form>
  )
}

