'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import Link from 'next/link'

const projects = [
  {
    title: 'Monarch Finance OS',
    category: 'Fintech Platform',
    description: 'Treasury and liquidity cockpit for multi-entity finance teams operating globally.',
    tags: ['Next.js', 'Edge Functions', 'Postgres'],
    year: '2024',
  },
  {
    title: 'Atlas Mobility',
    category: 'Mobility SuperApp',
    description: 'Multi-modal marketplace spanning ride-sharing, rentals, and logistics.',
    tags: ['React Native', 'GraphQL', 'AWS'],
    year: '2023',
  },
  {
    title: 'Fieldstone Labs',
    category: 'Healthcare Platform',
    description: 'HIPAA compliant virtual care stack connecting remote devices and clinicians.',
    tags: ['Remix', 'Prisma', 'Azure'],
    year: '2023',
  },
  {
    title: 'Northwind Retail',
    category: 'Commerce',
    description: 'Headless commerce infrastructure with experiential storefronts and POS.',
    tags: ['Shopify Plus', 'Next.js', 'Sanity'],
    year: '2022',
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
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10 text-sm">
            {['Fintech', 'Healthcare', 'Commerce', 'Mobility', 'Platforms'].map((filter) => (
              <span key={filter} className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 bg-slate-50">
                {filter}
              </span>
            ))}
          </div>
          <div className="grid gap-8">
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

