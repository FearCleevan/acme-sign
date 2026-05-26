'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'
import { useParallax } from '@/hooks/useParallax'
import ImagePlate from '@/components/shared/ImagePlate'

const headlineLines = ['MAKE YOUR', 'BUSINESS', 'IMPOSSIBLE', 'TO IGNORE.']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.0, 0.0, 0.2, 1] as const } },
}

export default function HeroSection() {
  const { ref: bgRef, y: bgY } = useParallax(0.4)
  const { ref: fgRef, y: fgY } = useParallax(0.1)

  return (
    <section
      ref={bgRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-steel"
    >
      {/* Background layer with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 img-plate-dark"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            'linear-gradient(to right, rgba(13,15,17,0.92) 0%, rgba(13,15,17,0.70) 50%, rgba(13,15,17,0.30) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Diagonal texture */}
      <div className="absolute inset-0 z-2 texture-overlay" aria-hidden="true" />

      {/* Foreground content */}
      <motion.div
        ref={fgRef}
        style={{ y: fgY }}
        className="relative z-10 container-site w-full pt-18"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-12 lg:gap-16 items-center py-20 lg:py-28">

          {/* Left content column */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <div className="flex">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] bg-steel border border-signal text-signal px-3 py-1.5 rounded-pill">
                EST. 1982 · DARTMOUTH, NS
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display leading-[0.92] tracking-[0.02em] text-chalk"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
            >
              {headlineLines.map((line, i) => (
                <motion.span key={i} variants={lineVariants} className="block">
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.55 }}
              className="flex flex-col gap-2"
            >
              <p className="font-serif italic text-[clamp(16px,2vw,22px)] text-signal/80 leading-none tracking-wide">
                Let us help you make a great first impression.
              </p>
              <p className="font-sans text-[clamp(14px,1.5vw,17px)] text-[rgba(244,242,238,0.7)] max-w-[48ch] leading-relaxed">
                42 years serving Atlantic Canadian businesses of any size — from a single door decal
                to a complete fleet wrap program. Built to last. Designed to be seen.
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center min-h-[54px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark hover:shadow-cta hover:-translate-y-px transition-all duration-200"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center min-h-[54px] px-6 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-transparent border border-steel-light text-chalk hover:bg-steel-mid transition-all duration-200"
                >
                  See Our Work
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4">
                {['42 YEARS EXPERIENCE', 'ATLANTIC CANADA', 'FREE CONSULTATION'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(244,242,238,0.5)]"
                  >
                    ✓ {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.65 }}
            className="relative hidden lg:block"
          >
            <ImagePlate
              alt="Acme Sign & Graphics — vehicle wrap Dartmouth NS"
              aspectRatio="3/4"
              dark
              caption="VEHICLE WRAP · DARTMOUTH NS · ACME SIGN"
              className="w-full"
            />

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 bg-signal text-steel px-5 py-4 shadow-cta rounded-card">
              <span className="font-display text-[36px] leading-none tracking-[0.02em]">1000+</span>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] mt-1 opacity-70">
                PROJECTS COMPLETED
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <BiChevronDown
          size={24}
          className="text-[rgba(244,242,238,0.5)] animate-bounce"
          aria-hidden="true"
        />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[rgba(244,242,238,0.4)]">
          SCROLL
        </span>
      </div>
    </section>
  )
}
