import type { Metadata } from 'next'
import { teamMembers, serviceAreas } from '@/lib/mockData'
import AboutHero from '@/components/about/AboutHero'
import FounderSection from '@/components/about/FounderSection'
import TeamSection from '@/components/about/TeamSection'
import TimelineSection from '@/components/about/TimelineSection'
import ServiceAreaSection from '@/components/about/ServiceAreaSection'

export const metadata: Metadata = {
  title: 'About Acme Sign & Graphics | 42 Years in Halifax NS',
  description:
    '42 years of signs, wraps, and graphics for Atlantic Canadian businesses. Family-owned, Dartmouth-based. The story behind Nova Scotia\'s most experienced sign company.',
}

const aboutStats = [
  { value: '42 YRS', label: 'In Business', sub: 'Since 1982' },
  { value: '1,000+', label: 'Projects Completed', sub: 'Atlantic Canada' },
  { value: '3', label: 'Provinces Served', sub: 'NS · NB · PEI' },
  { value: '48HR', label: 'Quote Turnaround', sub: 'Average' },
]

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <FounderSection />

      {/* ── Stats strip ─────────────────────────────────────────────────────── */}
      <section className="bg-steel-dark py-section relative overflow-hidden">
        <div className="accent-bar-full absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 texture-overlay pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x-0 lg:divide-x lg:divide-steel-light">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1 py-4">
                <p
                  className="font-display leading-none tracking-[0.02em] text-signal"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-chalk/80 mt-1">
                  {stat.label}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-iron-soft">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          <p className="font-serif italic text-center text-[18px] text-chalk/60 leading-relaxed mt-14 max-w-[60ch] mx-auto">
            &ldquo;Whether you need one sign or several thousands, we can advise you on the best
            materials and production methods to ensure results that will exceed your
            expectations.&rdquo;
          </p>
        </div>
      </section>

      <TeamSection members={teamMembers} />

      <TimelineSection />

      <ServiceAreaSection areas={serviceAreas} />
    </>
  )
}
