import Eyebrow from '@/components/shared/Eyebrow'

const timelineEntries = [
  {
    year: '1982',
    title: 'Founded',
    desc: 'Founded in Dartmouth, NS with a single vinyl plotter.',
  },
  {
    year: '1988',
    title: 'First Fleet Project',
    desc: 'First fleet wrap project — 12 vehicles for an Atlantic Canadian transportation company.',
  },
  {
    year: '1995',
    title: 'New Location',
    desc: 'Moved to current location at 25 Raddall Avenue.',
  },
  {
    year: '2001',
    title: 'Digital Wide-Format Printing',
    desc: 'First full-colour digital wide-format printer installed — opening the door to vehicle wraps.',
  },
  {
    year: '2008',
    title: 'LED Division Launched',
    desc: 'LED sign division launched. First programmable display installed for a local church.',
  },
  {
    year: '2015',
    title: 'Fleet Expansion',
    desc: 'Vehicle wrap department expanded. Fleet graphics become 40% of the business.',
  },
  {
    year: '2022',
    title: '40th Anniversary',
    desc: 'Over 1,000 projects completed across Atlantic Canada.',
  },
  {
    year: '2026',
    title: 'Still Here.',
    desc: 'Still making signs. Still answering the phone.',
  },
]

export default function TimelineSection() {
  return (
    <section className="canvas-dark py-section">
      <div className="container-site">
        <div className="flex flex-col gap-3 mb-14">
          <Eyebrow variant="light">OUR HISTORY</Eyebrow>
          <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-[#F0EDE6]">
            FOUR DECADES OF SIGNS.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-signal flex flex-col gap-10 max-w-[640px]">
          {timelineEntries.map((entry, i) => (
            <div key={i} className="relative">
              {/* Dot on the line */}
              <div
                className="absolute left-[-25px] top-2 w-3 h-3 rounded-full bg-signal border-2 border-steel-dark"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1.5">
                <span className="font-display text-[32px] leading-none tracking-[0.02em] text-signal">
                  {entry.year}
                </span>
                <p className="font-serif text-[18px] text-[#F0EDE6] leading-snug">
                  {entry.title}
                </p>
                <p className="font-sans text-[14px] leading-relaxed text-[#9A9490]">
                  {entry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
