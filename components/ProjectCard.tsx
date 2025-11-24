'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  project: {
    title: string
    category: string
    description: string
    tags: string[]
    year: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer"
    >
      <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
        <div className="aspect-video relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent opacity-5" />
          <div className="absolute inset-0 backdrop-grid opacity-5" />
          <div className="absolute inset-0 flex items-center justify-center text-[140px] font-black text-slate-100 tracking-tight">
            {project.title.charAt(0)}
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-black/40 group-hover:scale-110">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>

        <div className="p-8 space-y-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600 bg-slate-50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

