'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Palette, PenTool, Image, Boxes, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'

const serviceMenu = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Web Development',
    copy: 'Full-stack engineering for marketing sites, SaaS dashboards, and membership platforms.',
    bullets: ['Custom Next.js builds', 'API & CMS integrations', 'Accessibility + performance audits'],
    tech: ['Next.js', 'React', 'Node.js', 'WordPress', 'Shopify'],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Web Design',
    copy: 'Conversion-driven UX/UI design systems with motion and storytelling baked in.',
    bullets: ['High-fidelity prototypes', 'Design system documentation', 'Landing page experimentation'],
    tech: ['Figma', 'Framer', 'Spline'],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile App Development',
    copy: 'Cross-platform mobile apps that mirror your web product and feel native everywhere.',
    bullets: ['React Native & Swift', 'Offline-first experiences', 'App Store launch support'],
    tech: ['React Native', 'SwiftUI', 'Kotlin', 'Expo'],
  },
  {
    icon: <Boxes className="w-6 h-6" />,
    title: 'Inventory Management Systems',
    copy: 'Operational control towers for tracking stock, orders, and fulfillment in real time.',
    bullets: ['Warehouse dashboards', 'ERP integrations', 'Automated replenishment alerts'],
    tech: ['Next.js', 'NestJS', 'Postgres', 'Stripe', 'Supabase'],
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Logo Design',
    copy: 'Identity systems that translate seamlessly from favicon to billboard.',
    bullets: ['Brand marks & lockups', 'Usage guidelines', 'Launch collateral'],
    tech: ['Illustrator', 'Cinema4D', 'After Effects'],
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: 'Banner Design',
    copy: 'Campaign-ready banners for paid media, product announcements, and newsletters.',
    bullets: ['Ad set variations', 'Responsive specs', 'Motion-ready files'],
    tech: ['Figma', 'Photoshop', 'After Effects'],
  },
]

const process = [
  { step: '01', title: 'Discover', detail: 'Interviews, audit, and market mapping to uncover sharp problem statements.' },
  { step: '02', title: 'Design', detail: 'Narratives, prototypes, and systems built collaboratively with your stakeholders.' },
  { step: '03', title: 'Engineer', detail: 'Modular architecture, clean code, and automated QA for resilient releases.' },
  { step: '04', title: 'Evolve', detail: 'Post-launch optimization, embedded support, and growth experimentation.' },
]

export default function ServicesPage() {
  return (
    <main className="pt-36 pb-24 space-y-24 bg-white">
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.5em] text-slate-400"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold leading-tight text-balance text-slate-900"
          >
            A web development agency uniting strategy, design, and engineering.
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Choose a single track or assemble a dedicated pod. Every engagement is anchored by partners guiding you from
            concept through launch-ready web experiences.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {serviceMenu.map((service) => (
            <div key={service.title} className="rounded-3xl p-8 space-y-6 border border-slate-200 bg-white shadow-[0_35px_120px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.copy}</p>
                </div>
              </div>
              <div className="space-y-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Toolkit</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {service.tech.map((tool) => (
                    <span key={tool} className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Process"
            title="We build in tight loops—research upfront, fast dev sprints, calm launches."
            subtitle="Each phase has clear outcomes, rituals, and owners so you always know where we are and what’s next."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((phase, idx) => (
              <div key={phase.step} className="rounded-3xl p-6 space-y-3 bg-white border border-slate-200 shadow-[0_25px_80px_rgba(15,23,42,0.06)]">
                <span className="text-sm uppercase tracking-[0.4em] text-slate-400">{phase.step}</span>
                <h3 className="text-2xl font-semibold text-slate-900">{phase.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{phase.detail}</p>
                {idx < process.length - 1 && <span className="block h-px bg-gradient-to-r from-black/40 to-transparent" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 p-14 card-shadow bg-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
            <div className="relative space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Engage</p>
              <h2 className="text-4xl font-semibold text-slate-900">
                Build your next release with a team obsessed over outcomes, not outputs.
              </h2>
              <p className="text-slate-600">
                Tell us about your roadmap and we’ll share a tailored team plan within a week.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="large">Start a conversation</Button>
                </Link>
                <Link href="/works">
                  <Button variant="secondary" size="large">
                    View case studies <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

