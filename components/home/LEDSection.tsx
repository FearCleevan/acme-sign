'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiCheckCircle } from 'react-icons/bi'
import { useParallax } from '@/hooks/useParallax'
import ImagePlate from '@/components/shared/ImagePlate'

const features = [
  'WiFi-enabled — update from any device',
  'Full-colour, high-resolution display',
  'Built for Atlantic Canadian weather',
]

export default function LEDSection() {
  const { ref, y } = useParallax(0.25)

  return (
    <section className="bg-chalk overflow-hidden">
      <div className="container-site py-section">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-signal-dark">
                PROGRAMMABLE LED SIGNS
              </span>
              <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-steel">
                GET NOTICED 72% MORE THAN STATIC SIGNS.
              </h2>
            </div>

            <p className="font-sans text-[17px] text-iron-soft leading-relaxed">
              Full-colour, weather-resistant LED signs with built-in WiFi. Update your message from your phone.
              Works 24 hours a day. Visible from 500 feet. Proven ROI for businesses, churches, schools,
              and organizations.
            </p>

            <ul className="flex flex-col gap-3">
              {features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <BiCheckCircle size={20} className="text-signal flex-shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[15px] text-iron">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/quote?service=led-signs"
                className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark hover:shadow-cta hover:-translate-y-px transition-all duration-200"
              >
                Get an LED Quote
              </Link>
              <Link
                href="/led-signs"
                className="inline-flex items-center justify-center min-h-[52px] px-6 font-sans text-[15px] font-medium text-iron hover:text-steel border border-chalk-deep hover:border-steel-light hover:bg-chalk-mid rounded-btn transition-all duration-200"
              >
                Learn About LED Signs →
              </Link>
            </div>
          </div>

          {/* Right — image with parallax */}
          <div ref={ref} className="relative overflow-hidden rounded-card">
            <motion.div style={{ y }}>
              <ImagePlate
                alt="LED programmable sign — Acme Sign & Graphics"
                aspectRatio="16/9"
                dark
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
