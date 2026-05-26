'use client'
import type { Testimonial } from '@/lib/types'
import Eyebrow from '@/components/shared/Eyebrow'

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0l2.47 4.93L16 5.73l-4 3.85.95 5.42L8 12.47 3.05 15l.95-5.42-4-3.85 5.53-.8z" />
    </svg>
  )
}

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) return null

  // 4 copies ensures seamless coverage regardless of how many testimonials exist
  const repeated = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ]

  return (
    <section className="relative bg-steel overflow-hidden py-16 sm:py-24">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-signal z-10" />
      <div className="absolute inset-0 texture-overlay pointer-events-none" aria-hidden="true" />

      <div className="relative z-10">
        {/* Heading */}
        <div className="container-site text-center mb-14">
          <Eyebrow variant="light" className="justify-center mb-4 [&>span]:text-[14px]">
            WHAT OUR CLIENTS SAY
          </Eyebrow>
          <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-[#F0EDE6]">
            42 YEARS OF SATISFIED BUSINESSES.
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-iron-soft mt-5">
            Hover to pause
          </p>
        </div>

        {/* Marquee track */}
        <div className="container-site mx-auto">
          <div
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            }}
          >
            <div
              className="flex"
              style={{ animation: 'marquee 55s linear infinite' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running' }}
              aria-label="Customer testimonials"
            >
              {repeated.map((t, i) => (
                <article
                  key={`${t.id}-${i}`}
                  className="shrink-0 w-80 rounded-xl p-6 border border-white/10 mx-3 bg-white/5 backdrop-blur-md flex flex-col gap-2"
                  aria-hidden={i >= testimonials.length || undefined}
                >
                  {/* Opening quote mark */}
                  <span
                    className="block text-center font-serif text-[48px] leading-none text-[#F0EDE6]/20 -mb-1"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <blockquote className="font-serif italic leading-relaxed text-[#C8C4BC] text-[13px] text-center flex-1">
                    {t.quote}
                  </blockquote>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 text-signal mt-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon key={idx} />
                    ))}
                  </div>

                  {/* Author */}
                  <footer className="text-center mt-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-chalk leading-none">
                      {t.author}
                    </p>
                    {t.company && (
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-signal-dark mt-1">
                        {t.company}
                      </p>
                    )}
                    {t.service && (
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-iron-soft mt-0.5">
                        {t.service}
                      </p>
                    )}
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
