'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Button from '@/components/Button'

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'hello@motionsdigital.com', href: 'mailto:hello@motionsdigital.com' },
  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+88 01830681074', href: 'tel:+8801830681074' },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Studio',
    value: '9 No, Bijoypath, Dhaka, Bangladesh',
  },
]

export default function ContactPage() {
  return (
    <main className="pt-36 pb-24 space-y-20 px-6 bg-white">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.5em] text-slate-400"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900"
        >
          Let’s build your next web experience together.
        </motion.h1>
        <p className="text-slate-600 text-lg">
          Share a few details about your web development roadmap, and we’ll reply with a tailored build plan within seven
          days.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div className="space-y-10 rounded-3xl p-10 border border-slate-200 bg-white shadow-[0_35px_110px_rgba(15,23,42,0.08)]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Studio</p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Distributed web developers anchored in San Francisco & London, working across time zones.
            </h2>
            <p className="text-slate-600">
              We take on a limited number of websites and product builds per quarter to stay deeply involved. Weekly
              touchpoints, open channels, and thoughtful documentation keep you close without the noise.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-black/5 border border-slate-200 flex items-center justify-center text-black">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-lg text-slate-900 hover:text-black transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-slate-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Availability</p>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <div className="flex justify-between"><span>Monday — Friday</span><span>09:00 — 18:00 PT</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>10:00 — 14:00 PT</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>By arrangement</span></div>
            </div>
          </div>

          {/* <div className="flex flex-wrap gap-4">
            <Button variant="secondary" className="px-6">
              Download credentials <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div> */}
        </div>

        <div className="rounded-3xl p-8 border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

