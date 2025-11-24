'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
    >
      <div className="space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-[#f97316] text-white flex items-center justify-center text-xl shadow-lg shadow-orange-500/40">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-black/50 to-transparent" />
          Capabilities
        </div>
      </div>
    </motion.div>
  )
}

