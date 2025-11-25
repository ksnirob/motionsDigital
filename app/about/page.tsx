'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Compass, Layers, Clock } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import TeamMember from '@/components/TeamMember'

const values = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Precision',
    description: 'Rigorous systems thinking and attention to tiny details throughout discovery, design, and delivery.',
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: 'Taste',
    description: 'Expressive, brand-aware direction that makes products feel intentional and unmistakably yours.',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Care',
    description: 'Working as true partners—transparent, collaborative, and committed to shared outcomes.',
  },
]

const milestones = [
  { year: '2018', label: 'Studio founded', detail: 'Started as a remote collective building MVPs for emerging founders.' },
  { year: '2020', label: 'Scaled globally', detail: 'Expanded across 4 time zones, formalized discovery & ops practices.' },
  { year: '2022', label: 'Platform era', detail: 'Led multi-year digital transformation programs for enterprise teams.' },
  { year: '2024', label: 'Today', detail: 'Partner-led teams supporting ambitious companies at seed to Series D.' },
]

const leadership = [
  { name: 'Sarah Chen', role: 'Partner, Strategy', description: 'Shapes product vision and guides venture partnerships.' },
  { name: 'Marcus Rodriguez', role: 'Partner, Engineering', description: 'Leads platform architecture and technical direction.' },
  { name: 'Emma Thompson', role: 'Partner, Experience', description: 'Crafts visual languages and multisurface systems.' },
  { name: 'David Kim', role: 'Delivery Lead', description: 'Ensures steady velocity, comms, and stakeholder clarity.' },
]

export default function AboutPage() {
  return (
    <main className="pt-36 pb-24 space-y-24 bg-white">
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm uppercase tracking-[0.3em] text-slate-500"
          >
            Studio Manifesto
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold leading-tight text-balance text-slate-900"
          >
            A strategy-led web development agency for founders who want taste and technical confidence.
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We are a distributed team of strategists, designers, and engineers combining rigorous systems thinking with an
            editorial eye for detail. From marketing sites to enterprise-grade platforms, we architect web journeys end to
            end.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto rounded-3xl p-10 lg:p-14 border border-slate-200 bg-white shadow-[0_35px_110px_rgba(15,23,42,0.08)] space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Compass className="w-6 h-6" />, title: 'Hybrid Partner Model', text: 'We embed alongside internal leadership or act as your external product org.' },
              { icon: <Layers className="w-6 h-6" />, title: 'End-to-end Craft', text: 'Strategy, experience, and engineering under one roof for fluid delivery.' },
              { icon: <Clock className="w-6 h-6" />, title: 'Velocity with Care', text: 'Lean rituals, transparent reporting, and steady cadence keep teams aligned.' },
            ].map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#f97316]/10 flex items-center justify-center border border-slate-200 text-[#f97316]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Values"
            title="Principles that shape how we think, build, and collaborate."
            subtitle="Every partnership is grounded in clarity, curiosity, and a bias for useful outcomes."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl p-8 space-y-4 border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.06)]">
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Timeline"
            title="Built for long games, tuned for decisive launches."
            subtitle="We’ve grown through referrals by shipping meaningful work with teams we admire."
            align="left"
          />
          <div className="space-y-8 border-l border-slate-200 pl-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative pl-6">
                <span className="absolute -left-3 top-2 w-3 h-3 rounded-full bg-black" />
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{milestone.year}</p>
                <h3 className="text-xl text-slate-900 font-semibold mt-2">{milestone.label}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{milestone.detail}</p>
                {index !== milestones.length - 1 && <div className="absolute left-[-2px] top-8 bottom-0 border-l border-slate-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="People"
            title="A senior, embedded team with skin in the game."
            subtitle="Lean squads anchored by partners who sit inside every project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {leadership.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

