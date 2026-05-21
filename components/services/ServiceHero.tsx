import Link from 'next/link'
import type { Service } from '@/lib/types'
import Breadcrumb from '@/components/shared/Breadcrumb'
import ImagePlate from '@/components/shared/ImagePlate'

interface ServiceHeroProps {
  service: Service
  eyebrow: string
  headline: string
}

export default function ServiceHero({ service, eyebrow, headline }: ServiceHeroProps) {
  return (
    <section className="canvas-dark pt-[72px]">
      <div className="container-site py-14 lg:py-20">
        <Breadcrumb
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name },
          ]}
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-signal">
              {eyebrow}
            </span>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              {headline}
            </h1>
            <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed max-w-[52ch]">
              {service.fullDescription}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={`/quote?service=${service.slug}`}
                className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark hover:shadow-cta hover:-translate-y-px transition-all duration-200"
              >
                {service.callToAction} →
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <ImagePlate
            alt={`${service.name} — Acme Sign & Graphics`}
            aspectRatio="4/3"
            dark
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
