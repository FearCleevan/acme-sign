import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="canvas-dark min-h-screen flex items-center justify-center pt-[72px]">
      <div className="container-site py-20 max-w-[640px] mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-12 h-[3px] bg-signal" aria-hidden="true" />

        <p className="font-display text-[clamp(6rem,20vw,14rem)] leading-none tracking-[0.02em] text-signal/20 select-none">
          404
        </p>

        <h1 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-[#F0EDE6] -mt-6">
          THAT SIGN HAS BEEN TAKEN DOWN.
        </h1>

        <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed max-w-[40ch]">
          The page you&apos;re looking for doesn&apos;t exist. But we can still make you a sign.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px"
          >
            Go to Home
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn border-2 border-chalk/40 text-chalk hover:border-signal hover:text-signal transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </main>
  )
}
