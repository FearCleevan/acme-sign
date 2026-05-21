'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryItem, GalleryCategory } from '@/lib/types'
import ImagePlate from '@/components/shared/ImagePlate'
import GalleryLightbox from './GalleryLightbox'

type FilterCategory = GalleryCategory | 'all'

const categories: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'vehicle-wraps', label: 'Vehicle Wraps' },
  { value: 'led-signs', label: 'LED Signs' },
  { value: 'channel-signs', label: 'Channel Signs' },
  { value: 'dimensional', label: 'Dimensional' },
  { value: 'illuminated', label: 'Illuminated' },
  { value: 'window-graphics', label: 'Window Graphics' },
  { value: 'banners', label: 'Banners' },
  { value: 'apparel', label: 'Apparel' },
]

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

interface GalleryInteractiveProps {
  items: GalleryItem[]
}

export default function GalleryInteractive({ items }: GalleryInteractiveProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory)

  function openLightbox(index: number) {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  function closeLightbox() {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  function prevItem() {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
  }

  function nextItem() {
    setLightboxIndex((prev) =>
      prev !== null && prev < filtered.length - 1 ? prev + 1 : prev
    )
  }

  return (
    <>
      {/* ── Sticky filter bar ─────────────────────────────────────────────── */}
      <div className="sticky top-[72px] z-40 bg-chalk border-b border-chalk-deep">
        <div className="container-site py-3">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveCategory(cat.value)
                    setLightboxIndex(null)
                  }}
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-pill border transition-all duration-150 shrink-0 ${
                    activeCategory === cat.value
                      ? 'bg-steel text-chalk border-steel'
                      : 'bg-transparent text-iron-soft border-chalk-deep hover:border-steel hover:text-iron'
                  }`}
                  aria-pressed={activeCategory === cat.value}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-iron-soft ml-auto shrink-0 pl-4 whitespace-nowrap">
              {filtered.length} {filtered.length === 1 ? 'PROJECT' : 'PROJECTS'}
            </p>
          </div>
        </div>
      </div>

      {/* ── Gallery grid ──────────────────────────────────────────────────── */}
      <section className="bg-chalk py-10 min-h-[50vh]">
        <div className="container-site">
          {filtered.length === 0 ? (
            <div className="flex items-center justify-center py-32">
              <p className="font-display text-[28px] tracking-[0.02em] text-iron-soft text-center">
                NO PROJECTS IN THIS CATEGORY YET.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout" initial={false}>
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    className={item.featured ? 'sm:col-span-2' : ''}
                  >
                    <button
                      onClick={() => openLightbox(i)}
                      className="relative w-full overflow-hidden rounded-card group block text-left"
                      aria-label={`Open ${item.title}`}
                    >
                      <ImagePlate
                        alt={item.title}
                        aspectRatio={item.featured ? '16/9' : '4/3'}
                        dark
                        className="w-full"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-steel/80 via-transparent to-transparent" />

                      {/* Category badge */}
                      <span className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-[0.14em] bg-signal text-steel px-2 py-1 rounded-pill">
                        {categoryLabels[item.category] ?? item.category}
                      </span>

                      {/* Hover reveal */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                        <p className="font-sans text-[13px] font-semibold text-chalk">
                          {item.client}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-chalk/60 mt-0.5">
                          {item.title}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            items={filtered}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </>
  )
}
