import Eyebrow from '@/components/shared/Eyebrow'
import Breadcrumb from '@/components/shared/Breadcrumb'

export default function AboutHero() {
  return (
    <section className="canvas-dark pt-[72px] min-h-[60vh] flex items-center relative overflow-hidden">
      {/* Diagonal texture */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container-site py-16 lg:py-24">
        <Breadcrumb
          crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
          className="mb-8"
        />

        <div className="flex flex-col gap-6 max-w-[680px]">
          <Eyebrow variant="light">OUR STORY</Eyebrow>

          <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
            42 YEARS OF MAKING NOVA SCOTIA BUSINESSES IMPOSSIBLE TO IGNORE.
          </h1>

          <p className="font-serif italic text-[20px] leading-relaxed text-[#C8C4BC]">
            Family-owned. Dartmouth-based. Still answering the phone ourselves.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {['EST. 1982', 'DARTMOUTH NS', 'FAMILY OWNED'].map((badge) => (
              <span
                key={badge}
                className="font-mono text-[10px] uppercase tracking-[0.2em] border border-signal text-signal px-3 py-1.5 rounded-pill"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
