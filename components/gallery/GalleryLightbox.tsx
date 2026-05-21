'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi'
import type { GalleryItem } from '@/lib/types'

const categoryLabels: Record<string, string> = {
  'vehicle-wraps': 'Vehicle Wraps',
  'led-signs': 'LED Signs',
  'channel-signs': 'Channel Signs',
  dimensional: 'Dimensional',
  illuminated: 'Illuminated',
  'window-graphics': 'Window Graphics',
  banners: 'Banners',
  apparel: 'Apparel',
}

interface GalleryLightboxProps {
  items: GalleryItem[]
  activeIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const item = items[activeIndex]

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-100 bg-steel/96 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery lightbox: ${item.title}`}
    >
      {/* Content panel */}
      <div
        className="relative w-full max-w-7xl bg-steel-dark rounded-card overflow-hidden flex flex-col lg:flex-row"
        style={{ maxHeight: '92vh', minHeight: '70vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-steel/80 border border-steel-light flex items-center justify-center text-chalk hover:text-signal hover:border-signal/40 transition-colors"
          aria-label="Close"
        >
          <BiX size={18} />
        </button>

        {/* Image area */}
        <div className="relative flex-1 min-h-[55vh] lg:min-h-0 bg-steel-mid img-plate-dark">
          {/* Item label centered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-chalk/20">
              {item.title}
            </span>
          </div>

          {/* Prev arrow */}
          <button
            onClick={onPrev}
            disabled={activeIndex === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-steel/80 border border-steel-light flex items-center justify-center text-chalk hover:text-signal hover:border-signal/40 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <BiChevronLeft size={24} />
          </button>

          {/* Next arrow */}
          <button
            onClick={onNext}
            disabled={activeIndex === items.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-steel/80 border border-steel-light flex items-center justify-center text-chalk hover:text-signal hover:border-signal/40 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <BiChevronRight size={24} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[11px] text-chalk/60 tracking-[0.1em] z-10 select-none">
            {activeIndex + 1} / {items.length}
          </p>
        </div>

        {/* Info panel */}
        <div className="lg:w-64 xl:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-steel-light flex flex-col gap-5 p-6 overflow-y-auto">
          {/* Category */}
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] bg-signal text-steel px-3 py-1.5 rounded-pill self-start">
            {categoryLabels[item.category] ?? item.category}
          </span>

          <div className="flex flex-col gap-1.5">
            <h2 className="font-display text-[20px] leading-none tracking-[0.02em] text-[#F0EDE6]">
              {item.title.toUpperCase()}
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-dark">
              {item.client}
            </p>
          </div>

          <p className="font-sans text-[14px] text-[#9A9490] leading-relaxed">
            {item.description}
          </p>

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] uppercase tracking-[0.12em] border border-steel-light text-iron-soft px-2 py-1 rounded-pill"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto pt-5 border-t border-steel-light">
            <Link
              href={`/quote?inspiration=${encodeURIComponent(item.category)}`}
              onClick={onClose}
              className="inline-flex items-center justify-center w-full min-h-[44px] px-6 font-display text-[16px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200"
            >
              Request Similar Work →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
