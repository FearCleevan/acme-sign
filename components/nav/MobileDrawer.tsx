'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BiX, BiChevronDown } from 'react-icons/bi'
interface NavService {
  id: string
  slug: string
  name: string
  shortDescription: string
}

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  services: NavService[]
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Vehicle Wraps', href: '/vehicle-wraps' },
  { label: 'LED Signs', href: '/led-signs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function MobileDrawer({ isOpen, onClose, services }: MobileDrawerProps) {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-steel/70 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 left-0 bottom-0 w-[320px] bg-steel-dark z-50 flex flex-col overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-steel-light">
              <Link href="/" onClick={onClose}>
                <div className="flex items-center gap-2">
                  <span className="block w-[3px] h-6 bg-signal" />
                  <div>
                    <div className="font-display text-[22px] tracking-[0.04em] text-chalk leading-none">
                      ACME SIGN
                    </div>
                    <div className="font-display text-[13px] tracking-[0.04em] text-signal leading-none">
                      & GRAPHICS CO.
                    </div>
                  </div>
                </div>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 text-chalk hover:text-signal transition-colors"
              >
                <BiX size={26} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="px-4 py-3 font-sans text-[15px] font-medium text-[#C8C4BC] hover:text-chalk hover:bg-steel-mid rounded-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  className="w-full flex items-center justify-between px-4 py-3 font-sans text-[15px] font-medium text-[#C8C4BC] hover:text-chalk hover:bg-steel-mid rounded-sm transition-colors"
                >
                  <span>Services</span>
                  <BiChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 flex flex-col gap-1 pb-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            onClick={onClose}
                            className="px-4 py-2 font-sans text-[14px] text-iron-soft hover:text-chalk hover:bg-steel-mid rounded-sm transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={onClose}
                          className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-dark hover:text-signal transition-colors"
                        >
                          All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 py-6 border-t border-steel-light">
              <Link
                href="/quote"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center min-h-[56px] font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
