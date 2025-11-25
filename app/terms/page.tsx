'use client'

import SectionTitle from '@/components/SectionTitle'

export default function TermsPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <SectionTitle
          eyebrow="Terms"
          title="Clear terms for transparent web development partnerships."
          subtitle="These highlights summarize our standard terms of service. Custom MSAs are available for enterprise teams."
          align="left"
        />

        <section className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Statements of work outline deliverables, milestones, and review cadences before any build begins. Retainer
            engagements renew monthly with a 30-day cancellation window. Fixed-scope projects include two rounds of design
            revisions and dedicated QA time.
          </p>
          <p>
            Intellectual property transfers to you after final payment. We reserve the right to showcase work in our web
            development portfolio unless an NDA prevents it. Invoices are issued net 15 and payable via ACH or bank transfer.
          </p>
          <p>
            Questions about terms? Email{' '}
            <a href="mailto:legal@motionsdigital.com" className="text-slate-900 underline">
              legal@motionsdigital.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}


