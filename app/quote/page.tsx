import type { Metadata } from 'next'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Eyebrow from '@/components/shared/Eyebrow'
import QuoteForm from '@/components/quote/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Acme Sign & Graphics Co.',
  description:
    'Request a free sign quote from Atlantic Canada\'s most experienced sign company. Vehicle wraps, LED signs, channel signs, and more. Based in Dartmouth, NS.',
}

export default function QuotePage() {
  return (
    <>
      {/* Short header */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site max-w-[780px] py-12 lg:py-16">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Get a Quote' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4">
            <Eyebrow variant="light">FREE CONSULTATION</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              GET A FREE QUOTE.
            </h1>
            <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed max-w-[50ch]">
              Tell us what you need. We&apos;ll respond within 48 hours with a detailed quote and
              any questions we have.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-step form */}
      <QuoteForm />
    </>
  )
}
