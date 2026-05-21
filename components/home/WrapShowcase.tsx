'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'
import ImagePlate from '@/components/shared/ImagePlate'

export default function WrapShowcase() {
  const { ref, y } = useParallax(0.25)

  return (
    <section className="canvas-dark overflow-hidden">
      <div className="container-site py-section">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Left — image with parallax */}
          <div ref={ref} className="relative overflow-hidden rounded-card order-2 lg:order-1">
            <motion.div style={{ y }}>
              <ImagePlate
                alt="Vehicle wrap — Acme Sign & Graphics Co."
                aspectRatio="16/9"
                dark
                className="w-full"
              />
            </motion.div>
          </div>

          {/* Right — editorial text */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-signal">
                YOUR BRAND. IN MOTION.
              </span>
              <h2 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
                THE MOST SEEN SIGN YOUR BUSINESS WILL EVER HAVE.
              </h2>
            </div>

            <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed">
              A vehicle wrap works while you drive to a meeting, while you&apos;re parked for lunch,
              and at 2 in the morning when you&apos;re home and the van is in the lot.
              That&apos;s advertising that never clocks out.
            </p>

            {/* Inline stats */}
            <div className="flex flex-wrap gap-6 py-4 border-y border-steel-light">
              <div>
                <span className="font-display text-[32px] tracking-[0.02em] leading-none text-signal">72%</span>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-iron-soft mt-1">
                  More Noticed Than Static Signs
                </p>
              </div>
              <div>
                <span className="font-display text-[32px] tracking-[0.02em] leading-none text-signal">4–6 YRS</span>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-iron-soft mt-1">
                  Wrap Lifespan
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/vehicle-wraps"
                className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark hover:shadow-cta hover:-translate-y-px transition-all duration-200"
              >
                See Our Wraps
              </Link>
              <Link
                href="/quote?service=vehicle-wraps"
                className="inline-flex items-center justify-center min-h-[52px] px-6 font-sans text-[15px] font-medium text-chalk hover:text-chalk border border-steel-light hover:border-chalk/30 hover:bg-steel-mid rounded-btn transition-all duration-200"
              >
                Request a wrap quote →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
