'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'
import Button from './Button'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/works' },
  { label: 'Contact', href: '/contact' },
]

const capabilities = ['Product Strategy', 'Web & App Development', 'Experience Design', 'Brand Systems']

export default function Footer() {
  return (
    <footer className="relative mt-40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-[420px] h-[420px] bg-[rgba(109,96,255,0.2)] top-0 left-1/4 opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="glass-panel rounded-[32px] px-8 py-12 md:p-16 gradient-border bg-white/80">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Motions Digital</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-balance text-slate-900">
                Crafting expressive software for ambitious founders and brands.
              </h2>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                {capabilities.map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 bg-white/70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/contact">
                  <Button size="large">Book a Discovery Call</Button>
                </Link>
                <Link href="/works" className="text-slate-600 hover:text-slate-900 text-sm inline-flex items-center gap-2 font-medium">
                  See latest work <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm text-slate-600">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">Navigate</p>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block hover:text-slate-900 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">Social</p>
                <div className="space-y-3">
                  {[Twitter, Github, Linkedin].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </span>
                      Follow us
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span>© {new Date().getFullYear()} Motions Digital. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

