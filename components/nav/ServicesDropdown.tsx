'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface NavService {
  id: string
  slug: string
  name: string
  shortDescription: string
}

interface ServicesDropdownProps {
  isOpen: boolean
  services: NavService[]
}

export default function ServicesDropdown({ isOpen, services }: ServicesDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[640px] bg-steel-dark border border-steel-light shadow-dark overflow-hidden z-50"
        >
          <div className="grid grid-cols-2 p-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-3 px-4 py-3 hover:bg-steel-mid transition-colors rounded-sm"
              >
                <span className="mt-[5px] w-[6px] h-[6px] rounded-full bg-signal opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                <div>
                  <p className="font-sans text-[14px] text-chalk leading-tight">
                    {service.name}
                  </p>
                  <p className="font-sans text-[12px] text-iron-soft mt-0.5 leading-snug line-clamp-1">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-steel-light px-6 py-3">
            <Link
              href="/services"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-dark hover:text-signal transition-colors"
            >
              View all services →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
