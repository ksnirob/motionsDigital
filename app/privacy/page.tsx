'use client'

import SectionTitle from '@/components/SectionTitle'

export default function PrivacyPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <SectionTitle
          eyebrow="Privacy"
          title="We protect every project brief, asset, and user insight."
          subtitle="Motions Digital operates as a web development agency handling sensitive data across regulated industries, so privacy is built into our process."
          align="left"
        />

        <section className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            We only collect the information required to scope and deliver web development services. Any files or analytics
            data you share stay within secure project workspaces with role-based access control. We never sell or rent data.
          </p>
          <p>
            Third-party processors such as hosting providers, analytics suites, or communication tools are vetted for SOC 2
            or ISO 27001 compliance. Data is retained for active engagements and archived within 60 days of project close
            unless otherwise required by contract.
          </p>
          <p>
            For privacy questions or data requests, email{' '}
            <a href="mailto:privacy@motionsdigital.com" className="text-slate-900 underline">
              privacy@motionsdigital.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}


