import Link from 'next/link'
import type { SanityService } from '@/lib/types'

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'We discuss your project, goals, and site requirements.' },
  { num: '02', title: 'Design', desc: 'Our team creates artwork and presents a detailed quote.' },
  { num: '03', title: 'Production', desc: 'Your sign is fabricated in our Dartmouth shop.' },
  { num: '04', title: 'Installation', desc: 'Professional installation with a full quality check.' },
]

interface ServiceCTAProps {
  service: SanityService
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <>
      {/* Process strip */}
      <section className="canvas-dark">
        <div className="container-site py-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-10 text-center">
            HOW IT WORKS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="font-display text-[48px] leading-none tracking-[0.02em] text-signal">
                  {step.num}
                </span>
                <h3 className="font-display text-[22px] tracking-[0.02em] leading-none text-[#F0EDE6]">
                  {step.title.toUpperCase()}
                </h3>
                <p className="font-sans text-[14px] text-[#9A9490] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-signal">
        <div className="container-site py-16 flex flex-col items-center text-center gap-5">
          <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
            READY TO GET STARTED?
          </h2>
          <p className="font-sans text-[17px] text-steel-dark max-w-[44ch]">
            Get a free quote from Atlantic Canada&apos;s most experienced sign team. We&apos;ll get back to you within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/quote?service=${service.slug}`}
              className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-steel text-signal hover:bg-steel-mid transition-all duration-200 hover:-translate-y-px"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+19024811007"
              className="font-mono text-[14px] tracking-[0.08em] text-steel hover:text-steel-dark transition-colors"
            >
              or call (902) 481-1007
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
