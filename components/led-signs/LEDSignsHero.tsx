'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

const headlineLines = ['GET NOTICED.', 'GET REMEMBERED.', 'GET LED.']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
}

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.0, 0.0, 0.2, 1] as const },
  },
}

export default function LEDSignsHero() {
  const { ref: bgRef, y: bgY } = useParallax(0.35)
  const { ref: fgRef, y: fgY } = useParallax(0.1)

  return (
    <section
      ref={bgRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-steel-dark"
    >
      {/* Parallax background with subtle electric tint */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 img-plate-dark"
        aria-hidden="true"
      />

      {/* Signal yellow radial glow — electric feel */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(245,197,24,0.08) 0%, transparent 70%), linear-gradient(to right, rgba(13,15,17,0.96) 0%, rgba(20,22,24,0.80) 50%, rgba(20,22,24,0.50) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Diagonal texture */}
      <div className="absolute inset-0 z-[2] texture-overlay" aria-hidden="true" />

      {/* Foreground content */}
      <motion.div
        ref={fgRef}
        style={{ y: fgY }}
        className="relative z-10 container-site w-full pt-[72px]"
      >
        <div className="flex flex-col gap-7 py-20 lg:py-28 max-w-[860px]">

          {/* Badge */}
          <div className="flex">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] bg-steel-dark border border-signal/60 text-signal px-3 py-1.5 rounded-pill">
              WiFi CONTROLLED · ALWAYS ON · PROVEN ROI
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display leading-[0.92] tracking-[0.02em] text-chalk"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
          >
            {headlineLines.map((line, i) => (
              <motion.span key={i} variants={lineVariants} className="block">
                {i === 2 ? (
                  <span className="text-signal">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="font-sans text-[17px] leading-relaxed text-[#C8C4BC] max-w-[52ch]"
          >
            Programmable full-colour LED signs with built-in WiFi. Update your message from your
            phone. Proven ROI for any business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/quote?service=led-signs"
              className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px"
            >
              Get an LED Quote
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn border border-steel-light text-chalk hover:border-signal/50 hover:text-signal transition-all duration-200"
            >
              See LED Gallery
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
