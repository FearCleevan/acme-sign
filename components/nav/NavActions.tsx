import Link from 'next/link'

export default function NavActions() {
  return (
    <div className="flex items-center justify-end gap-4">
      {/* Phone — xl+ only */}
      <a
        href="tel:+19024811007"
        className="hidden xl:block font-mono text-[13px] tracking-[0.08em] text-iron-soft hover:text-chalk transition-colors"
      >
        (902) 481-1007
      </a>

      {/* Quote CTA */}
      <Link
        href="/quote"
        className="inline-flex items-center justify-center min-h-[40px] px-6 font-display text-[16px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark hover:shadow-cta hover:-translate-y-px transition-all duration-200"
      >
        Get a Quote
      </Link>
    </div>
  )
}
