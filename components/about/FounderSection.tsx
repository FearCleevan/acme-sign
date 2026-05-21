import ImagePlate from '@/components/shared/ImagePlate'
import Eyebrow from '@/components/shared/Eyebrow'

const paragraphs = [
  'I started Acme Sign in 1982 with a single vinyl plotter and a rented space in Dartmouth. Back then, a well-made sign was the difference between a business that got noticed and one that didn\'t. That hasn\'t changed.',
  'Over four decades, we\'ve wrapped thousands of vehicles, installed hundreds of LED displays, and made signs for businesses from Cape Breton to Amherst. Every one of them started with a conversation. That\'s still how we do it.',
  'We\'re not the biggest sign company in Atlantic Canada. We\'re the most experienced one that still picks up the phone.',
]

export default function FounderSection() {
  return (
    <section className="bg-chalk py-section">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div>
            <ImagePlate
              alt="Scott — Founder of Acme Sign & Graphics Co."
              aspectRatio="3/4"
              caption="SCOTT · FOUNDER & OWNER · ACME SIGN"
              className="w-full max-w-[420px] mx-auto lg:mx-0"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <Eyebrow variant="signal" showBar>A MESSAGE FROM THE FOUNDER</Eyebrow>

            <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
              42 YEARS IS A LONG TIME TO DO ANYTHING. WE THINK IT&apos;S JUST GETTING GOOD.
            </h2>

            {/* Signal accent bar + paragraphs */}
            <div className="border-l-[3px] border-signal pl-7 flex flex-col gap-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="font-serif text-[18px] text-iron leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-iron-soft">
              — Scott, Founder &amp; Owner · Acme Sign &amp; Graphics Co.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
