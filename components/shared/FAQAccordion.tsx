'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  light?: boolean
}

export default function FAQAccordion({ items, light = false }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={`flex flex-col divide-y ${light ? 'divide-chalk-deep' : 'divide-steel-light'}`}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center justify-between py-5 text-left gap-4 transition-colors ${
              light
                ? 'text-steel hover:text-signal-dark'
                : 'text-[#F0EDE6] hover:text-signal'
            }`}
            aria-expanded={open === i}
          >
            <span className="font-sans text-[16px] font-medium leading-snug">{item.question}</span>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <BiChevronDown size={20} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p
                  className={`pb-5 font-sans text-[15px] leading-relaxed ${
                    light ? 'text-iron-soft' : 'text-[#9A9490]'
                  }`}
                >
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
