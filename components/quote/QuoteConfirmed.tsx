import Link from 'next/link'

export default function QuoteConfirmed() {
  return (
    <section className="bg-signal min-h-[70vh] flex items-center">
      <div className="container-site py-20 max-w-[620px] mx-auto flex flex-col items-center text-center gap-6">
        {/* Signal accent */}
        <div className="w-12 h-[3px] bg-steel mb-2" aria-hidden="true" />

        <h1 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-steel">
          QUOTE REQUEST RECEIVED.
        </h1>

        <p className="font-sans text-[17px] text-steel-dark leading-relaxed max-w-[44ch]">
          We&apos;ll review your request and get back to you within 48 hours. In the meantime,
          browse our gallery for inspiration.
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel/60">
          A confirmation has been noted on our end.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn border-2 border-steel text-steel hover:bg-steel hover:text-signal transition-all duration-200"
          >
            View Our Gallery
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-steel text-signal hover:bg-steel-mid transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
