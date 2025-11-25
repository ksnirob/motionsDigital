'use client'

import SectionTitle from '@/components/SectionTitle'

export default function CookiesPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <SectionTitle
          eyebrow="Cookies"
          title="Responsible analytics for smarter web development decisions."
          subtitle="Cookies help us understand which services resonate and how prospects interact with our site."
          align="left"
        />

        <section className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            We use essential cookies to keep the site secure and functional, plus optional analytics cookies (Google
            Analytics and PostHog) to see how visitors explore our web development case studies. Advertising cookies are not
            used.
          </p>
          <p>
            You can opt out of analytics cookies at any time using your browser settings or by emailing{' '}
            <a href="mailto:privacy@motionsdigital.com" className="text-slate-900 underline">
              privacy@motionsdigital.com
            </a>
            . Cookies are retained for a maximum of 12 months before being automatically deleted.
          </p>
        </section>
      </div>
    </main>
  )
}


