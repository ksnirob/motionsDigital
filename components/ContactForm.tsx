'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
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

