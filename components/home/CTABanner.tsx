import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-signal">
      <div className="container-site py-20 flex flex-col items-center text-center gap-6">
        <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-steel max-w-[18ch] text-balance">
          READY TO MAKE YOUR BUSINESS IMPOSSIBLE TO IGNORE?
        </h2>
        <p className="font-sans text-[17px] text-steel-dark max-w-[48ch]">
          We provide the signs and services your organization needs to thrive through effective
          communication. Free consultation — results that exceed your expectations.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-steel text-signal hover:bg-steel-mid transition-all duration-200 hover:-translate-y-px"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+19024811007"
            className="font-mono text-[14px] tracking-[0.08em] text-steel hover:text-steel-dark transition-colors"
          >
            or call (902) 481-1007
          </a>
        </div>
      </div>
    </section>
  )
}
