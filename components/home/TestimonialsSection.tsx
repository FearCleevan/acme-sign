'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Testimonial } from '@/lib/types'
import Eyebrow from '@/components/shared/Eyebrow'

/* ── Card themes — cycles through Acme brand palette ─────────── */
const CARD_THEMES = [
  { bg: '#0D0F11', border: '#F5C518', textColor: '#F4F2EE', mutedColor: 'rgba(244,242,238,0.5)' },
  { bg: '#1A3A5C', border: '#F5C518', textColor: '#F0EDE6', mutedColor: 'rgba(240,237,230,0.5)' },
  { bg: '#141618', border: '#D4A800', textColor: '#F4F2EE', mutedColor: 'rgba(244,242,238,0.5)' },
  { bg: '#1E3A2A', border: '#F5C518', textColor: '#F0EDE6', mutedColor: 'rgba(240,237,230,0.5)' },
  { bg: '#1E2124', border: '#FBD84A', textColor: '#F4F2EE', mutedColor: 'rgba(244,242,238,0.5)' },
]

/* ── Responsive card dimensions ──────────────────────────────── */
interface Dims { cw: number; ch: number; spacing: number }

function calcDims(vw: number): Dims {
  if (vw < 480) return { cw: 200, ch: 300, spacing: 160 }
  if (vw < 768) return { cw: 250, ch: 370, spacing: 200 }
  return               { cw: 300, ch: 420, spacing: 240 }
}

/* ── Spring configs ───────────────────────────────────────────── */
const spring     = { type: 'spring' as const, stiffness: 280, damping: 28 }
const flipSpring = { type: 'spring' as const, stiffness: 180, damping: 22 }
const dotSpring  = { type: 'spring' as const, stiffness: 400, damping: 30 }
const instant    = { duration: 0 }

const DRAG_THRESH = 60
const TILTS       = [-2, 1.5, -1, 2.5, -1.5]

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const carouselData = testimonials.slice(0, 5).map((t, i) => ({
    ...t,
    ...CARD_THEMES[i % CARD_THEMES.length],
  }))

  const [active,  setActive]  = useState(2)
  const [flipped, setFlipped] = useState<Record<number, boolean>>({})
  const [dims,    setDims]    = useState<Dims>({ cw: 300, ch: 420, spacing: 240 })
  const [mounted, setMounted] = useState(false)
  const prefersReduced        = useReducedMotion()

  const pointerStartX = useRef<number | null>(null)
  const didNavigate   = useRef(false)

  /* ── Responsive watcher ── */
  useEffect(() => {
    setMounted(true)
    function update() { setDims(calcDims(window.innerWidth)) }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const { cw, ch, spacing } = dims

  /* ── Navigation ── */
  function goTo(i: number) {
    setActive(i)
    setFlipped({})
  }

  /* ── Card click ── */
  function handleCardClick(i: number) {
    if (didNavigate.current) { didNavigate.current = false; return }
    if (i === active) setFlipped(prev => ({ ...prev, [i]: !prev[i] }))
    else goTo(i)
  }

  /* ── Swipe / drag ── */
  function handlePointerDown(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerStartX.current = e.clientX
    didNavigate.current   = false
  }

  function handlePointerUp(e: React.PointerEvent<HTMLElement>) {
    if (pointerStartX.current === null) return
    const delta = e.clientX - pointerStartX.current
    pointerStartX.current = null
    if (Math.abs(delta) < DRAG_THRESH) return
    didNavigate.current = true
    if (delta < 0) goTo(Math.min(active + 1, carouselData.length - 1))
    else           goTo(Math.max(active - 1, 0))
  }

  function handlePointerCancel() {
    pointerStartX.current = null
    didNavigate.current   = false
  }

  /* ── Keyboard ── */
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowRight') goTo(Math.min(active + 1, carouselData.length - 1))
    if (e.key === 'ArrowLeft')  goTo(Math.max(active - 1, 0))
  }

  return (
    <section
      className="bg-steel overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      aria-label="Customer testimonials"
    >
      <div className="accent-bar-full" />

      {/* Heading */}
      <div className="container-site pt-section pb-12 text-center">
        <Eyebrow variant="light" className="justify-center mb-4">
          WHAT OUR CLIENTS SAY
        </Eyebrow>
        <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-[#F0EDE6]">
          42 YEARS OF SATISFIED BUSINESSES.
        </h2>
        <p className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.18em] text-iron-soft mt-5">
          Click center card to read the quote &nbsp;·&nbsp; click others to navigate &nbsp;·&nbsp; drag or use arrows
        </p>
        <p className="sm:hidden font-mono text-[10px] uppercase tracking-[0.18em] text-iron-soft mt-5">
          Tap center card to read &nbsp;·&nbsp; tap others to navigate &nbsp;·&nbsp; swipe to browse
        </p>
      </div>

      {/* Card deck — client-only to avoid Framer Motion hydration mismatch */}
      {!mounted && (
        <div style={{ height: dims.ch + 48 }} aria-hidden="true" />
      )}
      {mounted && <div
        className="relative"
        style={{ height: ch + 48 }}
        aria-live="polite"
      >
        {carouselData.map((t, i) => {
          const dist    = i - active
          const absDist = Math.abs(dist)
          const isActive = dist === 0
          const isFlip   = !!flipped[i]

          return (
            <div
              key={t.id}
              className="absolute"
              style={{
                left:          '50%',
                top:           24,
                perspective:   900,
                zIndex:        20 - absDist,
                pointerEvents: 'none',
              }}
            >
              {/* Position + scale + brightness */}
              <motion.div
                animate={{
                  x:      dist * spacing - cw / 2,
                  scale:  isActive ? 1.12 : Math.max(0.86, 1 - absDist * 0.05),
                  filter: `brightness(${isActive ? 1 : Math.max(0.42, 0.65 - absDist * 0.1)})`,
                }}
                transition={prefersReduced ? instant : spring}
                style={{
                  transformStyle: 'preserve-3d',
                  pointerEvents:  'none',
                  willChange:     'transform, filter',
                }}
              >
                {/* Tilt + flip */}
                <motion.div
                  onClick={() => handleCardClick(i)}
                  animate={{
                    rotateZ: prefersReduced ? 0 : TILTS[i % TILTS.length],
                    rotateY: isFlip ? 180 : 0,
                  }}
                  transition={prefersReduced ? instant : flipSpring}
                  className="antialiased transform-gpu"
                  style={{
                    width:          cw,
                    height:         ch,
                    transformStyle: 'preserve-3d',
                    cursor:         'pointer',
                    position:       'relative',
                    userSelect:     'none',
                    touchAction:    'none',
                    pointerEvents:  'auto',
                    willChange:     'transform',
                  }}
                  role="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-pressed={isFlip}
                  aria-label={
                    isActive
                      ? `${t.author} — ${isFlip ? 'tap to close' : 'tap to read quote'}`
                      : `Navigate to ${t.author}`
                  }
                  onKeyDown={e => {
                    if (isActive && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault()
                      handleCardClick(i)
                    }
                  }}
                >

                  {/* ── FRONT ── */}
                  <div
                    className="absolute inset-0 overflow-hidden border-[3px] img-plate-dark"
                    style={{
                      borderRadius:             28,
                      backfaceVisibility:       'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderColor:              t.border,
                      transform:                'translateZ(0px)',
                    }}
                  >
                    {/* Diagonal texture overlay */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(45deg,rgba(245,197,24,0.05) 0,rgba(245,197,24,0.05) 1px,transparent 1px,transparent 8px)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Gradient for text legibility */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(13,15,17,0.95) 0%, rgba(13,15,17,0.4) 50%, rgba(13,15,17,0.5) 100%)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Card number */}
                    <p
                      className="absolute top-4 left-5 font-display leading-none z-20"
                      style={{ fontSize: cw < 240 ? 22 : 28, color: 'rgba(245,197,24,0.5)' }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Flip hint — active card only */}
                    {isActive && (
                      <p
                        className="absolute top-5 right-5 font-mono text-[9px] uppercase tracking-[0.18em] z-20"
                        style={{ color: 'rgba(244,242,238,0.45)' }}
                        aria-hidden="true"
                      >
                        {cw < 240 ? 'tap' : 'flip →'}
                      </p>
                    )}

                    {/* Author block */}
                    <div className="absolute bottom-5 left-5 right-4 z-20">
                      <h3
                        className="font-display leading-none text-[#F0EDE6] tracking-[0.02em]"
                        style={{ fontSize: cw < 240 ? 18 : cw < 270 ? 20 : 24 }}
                      >
                        {t.author.toUpperCase()}
                      </h3>
                      <p
                        className="font-mono text-[9px] uppercase tracking-[0.18em] mt-1.5"
                        style={{ color: t.border }}
                      >
                        {t.service}
                      </p>
                    </div>
                  </div>

                  {/* ── BACK ── */}
                  <div
                    className="absolute inset-0 overflow-hidden border-[3px] flex flex-col items-center justify-center"
                    style={{
                      borderRadius:             28,
                      padding:                  cw < 240 ? '28px 20px' : '32px 28px',
                      backfaceVisibility:       'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform:                'rotateY(180deg) translateZ(0px)',
                      backgroundColor:          t.bg,
                      borderColor:              t.border,
                    }}
                  >
                    {/* Signal accent bar */}
                    <span
                      className="block w-8 h-[2px] mb-5 shrink-0"
                      style={{ backgroundColor: t.border }}
                      aria-hidden="true"
                    />

                    <blockquote
                      className="font-serif italic leading-relaxed text-center"
                      style={{ color: t.textColor, fontSize: cw < 240 ? 13 : 15 }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="mt-5 flex flex-col items-center gap-1">
                      <p
                        className="font-mono text-[9px] uppercase tracking-[0.18em]"
                        style={{ color: t.mutedColor }}
                      >
                        — {t.author}
                      </p>
                      {t.company !== 'Google Review' && (
                        <p
                          className="font-mono text-[8px] uppercase tracking-[0.15em]"
                          style={{ color: t.mutedColor }}
                        >
                          {t.company}
                        </p>
                      )}
                      {/* Google star rating */}
                      <p
                        className="font-mono text-[9px] tracking-[0.08em] mt-1"
                        style={{ color: t.border }}
                        aria-label="5 star Google review"
                      >
                        ★★★★★
                      </p>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            </div>
          )
        })}
      </div>}

      {/* Controls */}
      <div
        className="flex justify-center items-center gap-4 mt-4 pb-section"
        onPointerDown={e => e.stopPropagation()}
      >
        <button
          onClick={() => goTo(Math.max(active - 1, 0))}
          disabled={active === 0}
          className="w-10 h-10 rounded-full border border-steel-light flex items-center justify-center text-iron-soft hover:border-signal/50 hover:text-signal transition-colors disabled:opacity-25 font-mono text-[14px] shrink-0"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {carouselData.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              animate={{
                width:           i === active ? 22 : 8,
                backgroundColor: i === active ? '#F5C518' : 'rgba(245,197,24,0.28)',
              }}
              transition={dotSpring}
              className="h-2 rounded-pill shrink-0"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(Math.min(active + 1, carouselData.length - 1))}
          disabled={active === carouselData.length - 1}
          className="w-10 h-10 rounded-full border border-steel-light flex items-center justify-center text-iron-soft hover:border-signal/50 hover:text-signal transition-colors disabled:opacity-25 font-mono text-[14px] shrink-0"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>
  )
}
