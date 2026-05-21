'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="canvas-dark min-h-screen flex items-center justify-center pt-[72px]">
      <div className="container-site py-20 max-w-[640px] mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-12 h-[3px] bg-signal" aria-hidden="true" />

        <h1 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-[#F0EDE6]">
          SOMETHING WENT WRONG.
        </h1>

        <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed max-w-[42ch]">
          Try refreshing the page, or contact us if the problem continues.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px"
          >
            Try Again
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn border-2 border-chalk/40 text-chalk hover:border-signal hover:text-signal transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
