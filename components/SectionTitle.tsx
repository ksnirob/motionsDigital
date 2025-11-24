'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
      className={`flex flex-col gap-4 mb-16 ${alignment}`}
    >
      {eyebrow && <span className="text-xs uppercase tracking-[0.4em] text-slate-400">{eyebrow}</span>}
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-slate-900 max-w-3xl">
        {title}
      </h2>
      {subtitle && <p className="text-base md:text-lg text-slate-600 max-w-2xl">{subtitle}</p>}
    </motion.div>
  )
}

