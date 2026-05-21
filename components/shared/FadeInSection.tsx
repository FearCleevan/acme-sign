'use client'

import { useInView } from 'react-intersection-observer'
import { motion, useReducedMotion } from 'framer-motion'

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

export default function FadeInSection({
  children,
  delay = 0,
  direction = 'up',
  className,
}: FadeInSectionProps) {
  const prefersReduced = useReducedMotion()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  })

  const hidden = prefersReduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === 'up' ? 30 : 0,
        x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
      }

  const visible = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
