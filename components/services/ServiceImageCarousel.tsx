'use client'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface CarouselImage {
  url: string
  alt: string
}

interface ServiceImageCarouselProps {
  images: CarouselImage[]
}

export default function ServiceImageCarousel({ images }: ServiceImageCarouselProps) {
  const prefersReduced = useReducedMotion()

  if (!images.length) return null

  const doubled = [...images, ...images]

  return (
    <div className="relative overflow-hidden rounded-card h-[420px] lg:h-[600px]">
      <motion.div
        className="flex flex-col"
        animate={prefersReduced ? {} : { y: ['0%', '-50%'] }}
        transition={{
          duration: images.length * 3.5,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative w-full shrink-0 overflow-hidden"
            style={{ height: '300px', marginBottom: '8px' }}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={i < 2}
            />
          </div>
        ))}
      </motion.div>

      {/* Fade top */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #141618, transparent)' }}
      />
      {/* Fade bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #141618, transparent)' }}
      />
    </div>
  )
}
