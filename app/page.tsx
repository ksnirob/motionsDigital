'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowUpRight,
  Brain,
  Boxes,
  CheckCircle2,
  Globe2,
  Layers,
  MapPin,
  MonitorSmartphone,
  ServerCog,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'

const clientLogos = [
  { name: 'Floorington', src: '/logo/Floorington.avif' },
  { name: 'Herts Plumb Fix', src: '/logo/HertsPlumbFix-logo.png' },
  { name: 'Sixpack Fitness', src: '/logo/sixpack-fitness.png' },
  { name: 'TH Consulting', src: '/logo/TH-Consulting.png' },
]

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Product Engineering',
    description: 'Full-stack web & mobile builds, API design, and integrations delivered by senior engineers.',
  },
  {
    icon: Layers,
    title: 'Experience Design',
    description: 'System thinking for UI, content, and motion that keeps your brand distinct across surfaces.',
  },
  {
    icon: Boxes,
    title: 'Inventory Management Systems',
    description: 'Custom inventory, warehouse, and order visibility tooling tied into ERPs and retail stacks.',
  },
  {
    icon: Brain,
    title: 'Product Strategy',
    description: 'Discovery, roadmaps, and value mapping to de-risk launches before code is written.',
  },
]

const approach = [
  {
    title: '01 · Insight first',
    detail: 'Stakeholder interviews and data dives uncover the real constraint before we commit resources.',
  },
  {
    title: '02 · Design in public',
    detail: 'Interactive prototypes, transparent documentation, and async reviews keep decisions traceable.',
  },
  {
    title: '03 · Ship and learn',
    detail: 'Continuous delivery pipelines, instrumentation, and A/B testing bring evidence to every iteration.',
  },
]

const outcomes = [
  'Compliant architectures for finance, health, and climate teams',
  'Launch velocity up to 4x faster than hiring and onboarding in-house',
  'Dedicated product trio embedded with your business stakeholders',
]

const regions = [
  { name: 'United States', city: 'New York', clients: 24, position: { x: 29.4, y: 27.4 } },
  { name: 'United Kingdom', city: 'London', clients: 15, position: { x: 50, y: 21.4 } },
  // { name: 'United Arab Emirates', city: 'Dubai', clients: 9, position: { x: 65.4, y: 36 } },
  { name: 'Singapore', city: 'Singapore', clients: 11, position: { x: 78.8, y: 49.3 } },
  // { name: 'Australia', city: 'Sydney', clients: 7, position: { x: 92, y: 68.9 } },
]

const stats = [
  { label: 'Products shipped', value: '64' },
  { label: 'Countries', value: '22' },
  { label: 'Avg. partnership', value: '18 mo' },
]

export default function Home() {
  const [hoverRegion, setHoverRegion] = useState<(typeof regions)[number] | null>(null)

  return (
    <main className="relative overflow-hidden bg-white">
      <section className="px-6 pt-40 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Web development agency</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-slate-900">
                Web platforms for ambitious launches.
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Motions Digital is the web development agency founders call when they need high-converting marketing sites,
                resilient web apps, and mobile-ready digital experiences. We blend strategy, design, and senior engineering
                into one accountable build partner.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="large">Start a project</Button>
              </Link>
              <Link href="/works">
                <Button variant="secondary" size="large">
                  View work
                </Button>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-black">
                Meet the studio <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[32px] border border-slate-200 p-10 bg-white shadow-[0_40px_140px_rgba(15,23,42,0.08)] space-y-8"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Live sprint</p>
              <h3 className="text-2xl font-semibold text-slate-900">Operations Control Center</h3>
              <p className="text-sm text-slate-500">Web app · Data visualisation · Multi-region deployment</p>
            </div>

            <div className="space-y-4">
              {['Research to blueprint', 'Interface system', 'Edge deployment'].map((item, idx) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-400 w-10">0{idx + 1}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">{item}</p>
                    <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${70 + idx * 10}%`,
                          background: 'linear-gradient(90deg, #0f172a, #f97316)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-1">Stack</p>
                <p>Next.js · Node · Supabase</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-1">Team</p>
                <p>Strategy · Design · Eng</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-900/10 p-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Capacity</p>
                <p className="text-base font-semibold text-slate-900">2 new partners this quarter</p>
              </div>
              <Sparkles className="w-6 h-6 text-[#f97316]" />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex-shrink-0">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400 mb-2">Trusted by</p>
            <h3 className="text-2xl font-semibold text-slate-900">Partners & Clients</h3>
          </div>
          <div className="flex flex-wrap items-center gap-8 justify-center">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="relative h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">What we do</p>
              <h2 className="text-4xl font-semibold text-slate-900 mt-4">Web development services, end to end.</h2>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Every engagement is led by a partner-level trio so you get conversion strategy, expressive UI design, and
                full-stack development without juggling separate vendors.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              Browse all services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="p-8 rounded-[28px] border border-slate-200 bg-white hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-[#f97316] text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-slate-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Approach</p>
            <h2 className="text-4xl font-semibold text-slate-900">A calm, transparent way to ship web products.</h2>
            <p className="text-slate-600">
              We operate like an embedded product team—clear rituals, asynchronous collaboration, and measurable outcomes every
              week across marketing sites, SaaS platforms, and eCommerce builds.
            </p>
            <ul className="space-y-3 text-slate-600">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {approach.map((step) => (
              <div key={step.title} className="rounded-[28px] border border-slate-200 p-6 bg-white">
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                <p className="mt-2 text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-[#f5f6ff]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Presence</p>
              <h2 className="text-4xl font-semibold text-slate-900 mt-4">Global delivery map.</h2>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Distributed pods collaborate with local partners in key markets. Every dot represents active retainers for web
                development, design systems, and product launches.
              </p>
            </div>
            <div className="flex gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f97316]" />
                <span>Active hub</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-black" />
                <span>Hover detail</span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Active pods</p>
                <p className="text-3xl font-semibold text-slate-900 mt-2">4 continents · 20+ markets</p>
              </div>
              <div className="space-y-4">
                {regions.map((region) => (
                  <div
                    key={region.name}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 hover:border-black/20 transition-colors"
                    onMouseEnter={() => setHoverRegion(region)}
                    onMouseLeave={() => setHoverRegion(null)}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#f97316]" />
                      <div>
                        <p className="text-slate-900 font-semibold">{region.city}</p>
                        <p className="text-sm text-slate-500">{region.name}</p>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500">{region.clients} clients</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] bg-white shadow-[0_45px_140px_rgba(15,23,42,0.08)] p-8 flex items-center">
              <div className="relative aspect-[95/62] w-full rounded-[28px] overflow-hidden p-[10px] flex items-center justify-center">
                <img
                  src="/world-map.svg"
                  alt="World map"
                  className="w-full h-full object-contain object-center"
                  draggable={false}
                />
                {regions.map((region) => (
                  <button
                    key={region.name}
                    type="button"
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
                      hoverRegion?.name === region.name ? 'w-4 h-4 bg-black' : 'w-3 h-3 bg-[#f97316]'
                    }`}
                    style={{ left: `${region.position.x}%`, top: `${region.position.y}%` }}
                    onMouseEnter={() => setHoverRegion(region)}
                    onMouseLeave={() => setHoverRegion(null)}
                    onFocus={() => setHoverRegion(region)}
                    onBlur={() => setHoverRegion(null)}
                  />
                ))}
                {hoverRegion && (
                  <div
                    className="absolute px-4 py-2 rounded-2xl bg-[#0f172a] text-white text-xs shadow-xl pointer-events-none whitespace-nowrap"
                    style={{
                      left: `min(calc(${hoverRegion.position.x}% + 10px), calc(100% - 140px))`,
                      top: `calc(${hoverRegion.position.y}% - 6px)`,
                    }}
                  >
                    <p className="font-semibold">{hoverRegion.name}</p>
                    <p className="text-white/70">{hoverRegion.clients} retained clients</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center space-y-6 rounded-[40px] border border-slate-200 p-16 bg-white card-shadow">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Next chapter</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
            Let’s craft software that feels inevitable to your customers.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your roadmap, the KPIs that matter, and the experience you want customers to feel—we’ll assemble a
            web development squad that ships with clarity and care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="large">Book a working session</Button>
            </Link>
            <Link href="/works">
              <Button variant="secondary" size="large">
                See case studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

