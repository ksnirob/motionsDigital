'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import Link from 'next/link'

const heroStats = [
  { label: 'Launch velocity', value: '12 weeks avg' },
  { label: 'GMV influenced', value: '$180M+' },
  { label: 'Retention uplift', value: '28%' },
]

const proofPoints = [
  {
    title: 'Regulated fintech',
    detail: 'Multi-entity treasury tools with SOC2-compliant data rails and realtime controls.',
  },
  {
    title: 'Healthcare scale-ups',
    detail: 'Virtual care platforms connecting clinicians, devices, and payors with HIPAA guardrails.',
  },
  {
    title: 'Commerce ecosystems',
    detail: 'Headless storefronts and inventory brains synced across eCom, retail, and 3PL partners.',
  },
]

const filters = ['Fintech', 'Healthcare', 'Commerce', 'Mobility', 'Platforms']

const projects = [
  {
    title: 'MBOS',
    category: 'Business Management System',
    description: 'Comprehensive business operations platform streamlining workflows, inventory management, and customer relations for modern enterprises.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    year: '2024',
    image: '/mbos.png',
  },
  {
    title: 'Patriot',
    category: 'Enterprise Platform',
    description: 'Enterprise-grade platform delivering secure, scalable solutions for mission-critical business operations and data management.',
    tags: ['React', 'Node.js', 'AWS'],
    year: '2024',
    image: '/patriot.png',
  },
  {
    title: 'Sixpack',
    category: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced inventory tracking, order management, and seamless payment integrations.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    year: '2023',
    image: '/sixpack.png',
  },
  {
    title: 'Herts Plumb Fix',
    category: 'Service Platform',
    description: 'Professional plumbing service platform connecting customers with certified technicians, featuring real-time booking and service tracking.',
    tags: ['React', 'Firebase', 'Stripe'],
    year: '2023',
    image: '/hertsplumbfix.png',
  },
]

export default function WorksPage() {
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
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold leading-tight text-balance text-slate-900"
          >
            Launches crafted with calm collaboration and measurable lift.
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            We partner with founders and product leaders to transform noisy problem statements into elegant, resilient
            software—spanning finance, health, commerce, mobility, and deep tech.
          </p>
          {/* <div className="grid gap-4 md:grid-cols-3 pt-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50/60 px-6 py-5 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                <p className="text-2xl font-semibold text-slate-900 mt-2">{stat.value}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto rounded-[36px] border border-slate-200 bg-gradient-to-br from-white to-[#f5f6ff] p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Focus</p>
              <h2 className="text-3xl font-semibold text-slate-900 mt-3">Industries we transform most often.</h2>
              <p className="text-slate-600 mt-3">
                Filters don’t toggle work on the page—consider them a snapshot of the arenas we obsess over.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className="px-5 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:border-black/40 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="grid gap-6 md:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/80 p-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 p-14 card-shadow bg-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
            <div className="relative space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Next Project</p>
              <h2 className="text-4xl font-semibold text-slate-900 leading-tight">
                Let’s co-create the product your users will talk about.
              </h2>
              <p className="text-slate-600">
                From single feature partnerships to full platform rebuilds, we design engagements tailored to your team’s ambition and pace.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="large">Start a project</Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary" size="large">
                    Explore services <ArrowUpRight className="w-4 h-4" />
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

