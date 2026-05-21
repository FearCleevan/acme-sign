import Eyebrow from '@/components/shared/Eyebrow'

interface ServiceAreaSectionProps {
  areas: string[]
}

export default function ServiceAreaSection({ areas }: ServiceAreaSectionProps) {
  return (
    <section className="bg-chalk py-section">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">

          {/* Text column */}
          <div className="flex flex-col gap-5 max-w-[520px]">
            <Eyebrow variant="signal">WHERE WE WORK</Eyebrow>
            <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-steel">
              ANYWHERE BETWEEN YARMOUTH AND CAPE BRETON.
            </h2>
            <p className="font-sans text-[17px] text-iron-soft leading-relaxed">
              We serve the full province of Nova Scotia, plus New Brunswick and Prince Edward Island.
              Most installations in the Halifax Regional Municipality are handled in-house. For
              locations outside HRM, we work with trusted local installation partners.
            </p>
          </div>

          {/* Tag cloud */}
          <div className="flex flex-wrap gap-2 lg:max-w-[400px]">
            {areas.map((city) => (
              <span
                key={city}
                className="font-mono text-[10px] uppercase tracking-[0.16em] bg-chalk-mid border border-chalk-deep text-iron-soft px-3 py-2 rounded-pill hover:border-signal hover:text-signal-dark transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
