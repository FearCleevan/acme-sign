'use client'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface StatItem {
  raw: string
  numericPart: number | null
  prefix: string
  suffix: string
  label: string
}

const statsData: StatItem[] = [
  { raw: '42', numericPart: 42, prefix: '', suffix: '', label: 'Years in Business' },
  { raw: '1,000+', numericPart: 1000, prefix: '', suffix: '+', label: 'Projects Completed' },
  { raw: '15+', numericPart: 15, prefix: '', suffix: '+', label: 'Atlantic Communities Served' },
  { raw: '48HR', numericPart: 48, prefix: '', suffix: 'HR', label: 'Average Quote Turnaround' },
]

function useCountUp(target: number | null, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current || target === null) return
    started.current = true
    const steps = 40
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [inView, target, duration])

  return target === null ? null : count
}

function StatBlock({ stat }: { stat: StatItem }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useCountUp(stat.numericPart, inView)

  const displayValue =
    stat.numericPart !== null && count !== null
      ? `${stat.prefix}${count.toLocaleString()}${stat.suffix}`
      : stat.raw

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2 py-8 px-4">
      <span className="stat-number">{displayValue}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="relative bg-steel-dark texture-overlay overflow-hidden">
      <div className="accent-bar-full" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-steel-light">
          {statsData.map((stat, i) => (
            <StatBlock key={i} stat={stat} />
          ))}
        </div>

        <div className="text-center pb-14 pt-4">
          <p className="font-serif italic text-[17px] text-[rgba(244,242,238,0.6)] max-w-[52ch] mx-auto leading-relaxed">
            &ldquo;We&apos;ve been making signs in Nova Scotia since before most of our competitors were incorporated.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
