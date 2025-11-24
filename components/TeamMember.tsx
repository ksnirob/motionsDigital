'use client'

import { motion } from 'framer-motion'

interface TeamMemberProps {
  name: string
  role: string
  description: string
}

export default function TeamMember({ name, role, description }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <div className="aspect-square rounded-3xl mb-6 overflow-hidden border border-slate-200 group-hover:border-black transition-all shadow-[0_25px_80px_rgba(15,23,42,0.08)] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent" />
        <div className="absolute inset-0 backdrop-grid opacity-10" />
        <div className="w-full h-full flex items-center justify-center text-7xl font-bold text-slate-200 group-hover:scale-110 transition-transform relative z-10">
          {name.charAt(0)}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-1">{name}</h3>
      <div className="text-slate-500 text-sm font-medium mb-3 tracking-wide">{role}</div>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

