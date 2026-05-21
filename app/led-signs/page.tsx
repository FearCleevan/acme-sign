import type { Metadata } from 'next'
import Link from 'next/link'
import { galleryItems } from '@/lib/mockData'
import LEDSignsHero from '@/components/led-signs/LEDSignsHero'
import FAQAccordion from '@/components/shared/FAQAccordion'
import type { FAQItem } from '@/components/shared/FAQAccordion'
import ImagePlate from '@/components/shared/ImagePlate'
import Eyebrow from '@/components/shared/Eyebrow'

export const metadata: Metadata = {
  title: 'LED Signs Halifax NS | Acme Sign & Graphics Co.',
  description:
    'Programmable full-colour LED signs for businesses across Nova Scotia. Indoor, outdoor, and video wall LED displays. WiFi-controlled. Installed by Acme Sign, Dartmouth.',
}

const ledTypes = [
  {
    title: 'Indoor LED',
    description:
      'Digital menu boards, retail promotional displays, lobby signage. High-resolution panels with vibrant colours visible in any lighting condition.',
    icon: '◉',
  },
  {
    title: 'Outdoor LED',
    description:
      'Weatherproof programmable message centres for storefronts, plazas, and roadsides. Built for Atlantic Canadian winters — visibility up to 500 feet.',
    icon: '◈',
  },
  {
    title: 'LED Video Wall',
    description:
      'Full-colour, high-resolution modular video displays. Perfect for events, showrooms, and large-format advertising. Configurable to virtually any size.',
    icon: '▣',
  },
  {
    title: 'Digital Signage',
    description:
      'Turnkey digital display solutions with content management software. Schedule messages, promotions, and announcements from any device.',
    icon: '◧',
  },
]

const howItWorks = [
  {
    num: '01',
    title: 'Order',
    desc: 'We configure your LED display to your exact specifications — size, resolution, and mounting requirements.',
  },
  {
    num: '02',
    title: 'Install',
    desc: 'Our team handles professional installation including electrical connections, mounting, and weatherproofing.',
  },
  {
    num: '03',
    title: 'Download App',
    desc: 'We set up your WiFi-enabled sign and walk you through the companion app on your phone or tablet.',
  },
  {
    num: '04',
    title: 'Program from Phone',
    desc: 'Update your message, schedule promotions, and change content from anywhere — no technical knowledge required.',
  },
]

const ledFAQs: FAQItem[] = [
  {
    question: 'How much does an LED sign cost?',
    answer:
      'LED sign pricing varies based on size, resolution, and whether indoor or outdoor installation is required. Indoor displays typically start around $1,500. Outdoor programmable message centres start around $4,000 installed. Contact us for a site-specific quote — we\'ll assess your location and recommend the right size and resolution.',
  },
  {
    question: 'How do I update the message on my LED sign?',
    answer:
      'Most of our LED signs are WiFi-enabled with a companion app. Once set up, you can update content, schedule messages, and manage your sign from your smartphone or any web browser. We provide full training on setup and operation as part of every installation.',
  },
  {
    question: 'How bright are outdoor LED signs?',
    answer:
      'Our outdoor LED displays have automatic brightness adjustment based on ambient light conditions. In full sunlight, they operate at full brightness (typically 5,000–8,000 nits) to remain clearly visible. At night, they dim automatically to an appropriate level. Visibility range is typically 300–500 feet for standard message centres.',
  },
  {
    question: 'What happens if pixels or LEDs fail?',
    answer:
      'Quality LED panels are modular — individual modules or cabinets can be replaced if they fail without replacing the entire sign. We stock common replacement components and offer service contracts for ongoing maintenance. Most panels have an expected lifespan of 50,000–100,000 hours.',
  },
  {
    question: 'Do you handle the full installation?',
    answer:
      'Yes — we manage the complete installation including electrical connections, mounting hardware, and any required permits for Nova Scotia locations. We coordinate with your electrician if additional power supply work is needed, and we handle all final testing and setup before handoff.',
  },
  {
    question: 'What warranty comes with the sign?',
    answer:
      'The LED panels we supply carry manufacturer warranties of 2–5 years depending on the product line. Our installation workmanship is warranted for 1 year. Extended service agreements are available. We stand behind every sign we install — if something goes wrong in the first year, we\'ll come back and fix it.',
  },
]

export default function LEDSignsPage() {
  const ledGallery = galleryItems.filter((item) => item.category === 'led-signs')

  return (
    <>
      <LEDSignsHero />

      {/* ── Stat Strip ───────────────────────────────────────────────────────── */}
      <section className="bg-signal py-5">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-steel/20">
            {[
              { stat: '72%', label: 'MORE NOTICED' },
              { stat: '500FT', label: 'VISIBILITY' },
              { stat: '24/7', label: 'ALWAYS ON' },
              { stat: 'WiFi', label: 'APP CONTROLLED' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center py-4 px-4 text-center gap-0.5">
                <p className="font-display text-[2rem] leading-none tracking-[0.02em] text-steel">
                  {item.stat}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-steel/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LED Types ─────────────────────────────────────────────────────────── */}
      <section className="canvas-dark py-section">
        <div className="container-site">
          <div className="mb-10">
            <Eyebrow variant="light" className="mb-3">WHAT WE OFFER</Eyebrow>
            <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-[#F0EDE6]">
              LED SIGN SOLUTIONS.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ledTypes.map((type) => (
              <div
                key={type.title}
                className="bg-steel-mid rounded-card border border-steel-light flex flex-col gap-4 p-6 hover:border-signal/40 transition-colors"
              >
                <span
                  className="font-display text-[32px] leading-none text-signal"
                  aria-hidden="true"
                >
                  {type.icon}
                </span>
                <h3 className="font-display text-[22px] leading-none tracking-[0.02em] text-[#F0EDE6]">
                  {type.title.toUpperCase()}
                </h3>
                <p className="font-sans text-[13px] text-[#9A9490] leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────────── */}
      {ledGallery.length > 0 && (
        <section className="bg-chalk-mid py-section">
          <div className="container-site">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div className="flex flex-col gap-2">
                <Eyebrow variant="signal" className="mb-1">OUR RECENT WORK</Eyebrow>
                <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
                  LED SIGNS IN THE FIELD.
                </h2>
              </div>
              <Link
                href="/gallery"
                className="font-sans text-[14px] font-medium text-signal-dark hover:text-signal transition-colors shrink-0"
              >
                View Full Gallery →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ledGallery.map((item) => (
                <div key={item.id} className="relative overflow-hidden rounded-card group">
                  <ImagePlate alt={item.title} aspectRatio="4/3" dark className="w-full" />
                  <div className="absolute inset-0 bg-linear-to-t from-steel/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                    <p className="font-sans text-[13px] font-semibold text-chalk">{item.client}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-chalk/60 mt-0.5">
                      {item.title}
                    </p>
                  </div>
                  {item.featured && (
                    <span className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-[0.14em] bg-signal text-steel px-2 py-1 rounded-pill">
                      Featured
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Retrofit Section ──────────────────────────────────────────────────── */}
      <section className="bg-steel py-section">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ImagePlate alt="LED cabinet retrofit" aspectRatio="4/3" dark className="w-full rounded-card" />
            </div>
            <div className="flex flex-col gap-6">
              <Eyebrow variant="light" className="mb-1">ALREADY HAVE A SIGN CABINET?</Eyebrow>
              <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
                WE CAN RETROFIT IT WITH LED.
              </h2>
              <p className="font-sans text-[17px] text-[#9A9490] leading-relaxed">
                Don&apos;t replace your existing sign cabinet — upgrade it. We retrofit fluorescent
                and neon cabinets with energy-efficient LED modules. You get a brighter, more
                reliable display at a fraction of the cost of a full replacement.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Up to 60% energy savings over fluorescent',
                  'Brighter, more uniform illumination',
                  'Longer service life — 50,000+ hours',
                  'Most retrofits completed in a single day',
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-[15px] text-[#C8C4BC]">
                    <span className="text-signal shrink-0">→</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/quote?service=led-signs&type=retrofit"
                className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px self-start"
              >
                Get a Retrofit Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works — 4 Steps ────────────────────────────────────────────── */}
      <section className="bg-chalk py-section">
        <div className="container-site">
          <div className="text-center mb-12">
            <Eyebrow variant="signal" className="justify-center mb-3">HOW IT WORKS</Eyebrow>
            <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
              FROM ORDER TO ON-AIR.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.num} className="flex flex-col gap-3">
                <span className="font-display text-[52px] leading-none tracking-[0.02em] text-signal">
                  {step.num}
                </span>
                <h3 className="font-display text-[22px] tracking-[0.02em] leading-none text-steel">
                  {step.title.toUpperCase()}
                </h3>
                <p className="font-sans text-[14px] text-iron-soft leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="canvas-dark py-section">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <Eyebrow variant="light" className="mb-3">COMMON QUESTIONS</Eyebrow>
              <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
                LED SIGN FAQ.
              </h2>
              <p className="font-sans text-[15px] text-[#9A9490] leading-relaxed mt-4">
                Have a question that&apos;s not here? Call us at{' '}
                <a
                  href="tel:+19024811007"
                  className="text-signal hover:text-signal-light transition-colors"
                >
                  (902) 481-1007
                </a>{' '}
                — Scott or one of our team will help.
              </p>
            </div>
            <FAQAccordion items={ledFAQs} />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-signal py-16">
        <div className="container-site flex flex-col items-center text-center gap-5">
          <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
            READY TO GET NOTICED 24/7?
          </h2>
          <p className="font-sans text-[17px] text-steel-dark max-w-[44ch]">
            Get a free LED sign quote from Atlantic Canada&apos;s most experienced sign team.
            We&apos;ll get back to you within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote?service=led-signs"
              className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-steel text-signal hover:bg-steel-mid transition-all duration-200 hover:-translate-y-px"
            >
              Get an LED Quote
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
    </>
  )
}
