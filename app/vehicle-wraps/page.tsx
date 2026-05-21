import type { Metadata } from 'next'
import Link from 'next/link'
import { galleryItems } from '@/lib/mockData'
import VehicleWrapsHero from '@/components/vehicle-wraps/VehicleWrapsHero'
import FAQAccordion from '@/components/shared/FAQAccordion'
import type { FAQItem } from '@/components/shared/FAQAccordion'
import ImagePlate from '@/components/shared/ImagePlate'
import Eyebrow from '@/components/shared/Eyebrow'

export const metadata: Metadata = {
  title: 'Vehicle Wraps Halifax NS | Acme Sign & Graphics Co.',
  description:
    'Professional vehicle wraps for vans, trucks, SUVs and fleets across Nova Scotia. Full wraps, partial wraps, and fleet graphics from Acme Sign in Dartmouth.',
}

const wrapTypes = [
  {
    title: 'Full Vehicle Wrap',
    description:
      'Transform your vehicle into a rolling canvas with full coverage from bumper to bumper — vibrant graphics and customized designs that cover every inch. Maximum brand impact, plus protection for your original paint.',
    price: 'From $2,500',
  },
  {
    title: 'Partial Wrap',
    description:
      'Achieve a striking look with partial wraps that accentuate specific areas of your vehicle — typically the rear, sides, or doors. A cost-effective yet impactful solution for businesses that want visibility without full coverage.',
    price: 'From $800',
  },
  {
    title: 'Fleet Graphics',
    description:
      'Make a cohesive statement across your entire fleet with uniform graphics that enhance brand visibility and professionalism. Volume pricing available — we manage entire projects from design through installation.',
    price: 'Volume pricing',
  },
]

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'We discuss your brand, vehicle type, and coverage goals.' },
  { num: '02', title: 'Design Mockup', desc: 'Our team creates a to-scale digital mockup on your actual vehicle.' },
  { num: '03', title: 'Material Selection', desc: 'Choose from premium 3M or Avery Dennison vinyl options.' },
  { num: '04', title: 'Professional Install', desc: 'Your vehicle is wrapped in our climate-controlled Dartmouth facility.' },
  { num: '05', title: 'Final Inspection', desc: 'A full quality check — seams, corners, edges — before we hand back your keys.' },
]

const wrapFAQs: FAQItem[] = [
  {
    question: 'How long does a vehicle wrap last?',
    answer:
      'A professionally installed vehicle wrap typically lasts 4–6 years in Atlantic Canadian conditions. Fleet graphics with heavy daily use may see 3–5 years. We use premium 3M and Avery Dennison materials rated for exterior exposure.',
  },
  {
    question: 'Will the wrap damage my vehicle\'s paint?',
    answer:
      'When properly installed and removed, vehicle wraps actually protect your paint from stone chips and minor abrasion. We inspect every vehicle before installation — existing paint damage or previous bodywork can affect adhesion, and we\'ll flag any issues before we start.',
  },
  {
    question: 'Can the wrap be removed?',
    answer:
      'Yes — wraps are fully removable. A quality wrap comes off cleanly without damaging the original paint, provided the paint was in good condition when applied. Removal typically takes 2–4 hours depending on vehicle size.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'A full vehicle wrap typically takes 2–3 days: one day for surface preparation, one to two days for installation, and time for the vinyl to cure. Partial wraps and cut vinyl lettering can often be completed in a single day.',
  },
  {
    question: 'Do you offer fleet pricing?',
    answer:
      'Yes — we offer volume pricing for fleet orders of 3 or more vehicles. Fleet graphics are one of our specialties. Contact us for a fleet quote and we\'ll put together a package that fits your schedule and budget.',
  },
  {
    question: 'What file formats do you accept for artwork?',
    answer:
      'We prefer vector files: Adobe Illustrator (AI), EPS, or high-resolution PDF. Raster files (PSD, TIFF) are accepted at 300 dpi minimum at final output size. If you need help with design, our team can create artwork from your logo and brand guidelines. See our Artwork Guidelines page for full specs.',
  },
]

export default function VehicleWrapsPage() {
  const wrapGallery = galleryItems.filter((item) => item.category === 'vehicle-wraps')

  return (
    <>
      <VehicleWrapsHero />

      {/* ── Stats — The Numbers Don't Lie ───────────────────────────────────── */}
      <section className="bg-chalk py-16 lg:py-20">
        <div className="container-site">
          <div className="text-center mb-10">
            <Eyebrow variant="signal" className="justify-center mb-3">
              THE NUMBERS DON&apos;T LIE
            </Eyebrow>
            <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
              WHY VEHICLE WRAPS WORK.
            </h2>
            <p className="font-sans text-[16px] text-iron-soft mt-4 max-w-[52ch] mx-auto leading-relaxed">
              Whether you have a single vehicle or an entire fleet, we have the expertise and
              creativity to deliver wraps that make a lasting impression and serve as a powerful
              marketing tool for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                stat: '72%',
                label: 'More noticed than static signage',
                sub: 'ATA Research Study',
              },
              {
                stat: '$0.04',
                label: 'Cost per 1,000 impressions',
                sub: 'vs $3.56 for newspaper',
              },
              {
                stat: '4–6 YRS',
                label: 'Average wrap lifespan',
                sub: 'with proper care & quality vinyl',
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="border-2 border-signal rounded-card p-8 text-center flex flex-col items-center gap-2"
              >
                <p className="font-display leading-none tracking-[0.02em] text-signal"
                   style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)' }}>
                  {item.stat}
                </p>
                <p className="font-sans text-[15px] text-iron leading-snug">{item.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-iron-soft">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile Canvas callout ─────────────────────────────────────────── */}
      <section className="bg-steel-dark py-12 lg:py-16">
        <div className="container-site max-w-[860px]">
          <div className="border-l-4 border-signal pl-8 flex flex-col gap-3">
            <p className="font-serif italic text-[clamp(18px,2.5vw,26px)] text-[#F0EDE6] leading-relaxed">
              &ldquo;Your vehicle serves as a mobile canvas for your corporate identity. Strategically
              placed logos, taglines, and brand elements ensure that your company makes a statement
              without uttering a word — working for you around the clock without any additional effort.&rdquo;
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
              ACME SIGN & GRAPHICS CO. · EST. 1982
            </p>
          </div>
        </div>
      </section>

      {/* ── Wrap Types ────────────────────────────────────────────────────────── */}
      <section className="canvas-dark py-section">
        <div className="container-site">
          <div className="mb-10">
            <Eyebrow variant="light" className="mb-3">WHAT WE OFFER</Eyebrow>
            <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-[#F0EDE6]">
              WRAP TYPES & PRICING.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wrapTypes.map((type) => (
              <div
                key={type.title}
                className="bg-steel-mid rounded-card border border-steel-light flex flex-col gap-5 overflow-hidden"
              >
                <ImagePlate alt={type.title} aspectRatio="16/9" dark className="w-full" />
                <div className="flex flex-col gap-3 px-6 pb-6">
                  <h3 className="font-display text-[24px] leading-none tracking-[0.02em] text-[#F0EDE6]">
                    {type.title.toUpperCase()}
                  </h3>
                  <p className="font-sans text-[14px] text-[#9A9490] leading-relaxed flex-1">
                    {type.description}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal pt-1">
                    {type.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────────── */}
      <section className="bg-chalk-mid py-section">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="flex flex-col gap-2">
              <Eyebrow variant="signal" className="mb-1">OUR RECENT WORK</Eyebrow>
              <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
                VEHICLE WRAPS IN THE FIELD.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="font-sans text-[14px] font-medium text-signal-dark hover:text-signal transition-colors shrink-0"
            >
              View Full Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wrapGallery.map((item) => (
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

      {/* ── Process — 5 Steps ─────────────────────────────────────────────────── */}
      <section className="canvas-dark py-section">
        <div className="container-site">
          <div className="text-center mb-12">
            <Eyebrow variant="light" className="justify-center mb-3">HOW IT WORKS</Eyebrow>
            <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
              FROM IDEA TO THE ROAD.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col gap-3">
                <span className="font-display text-[48px] leading-none tracking-[0.02em] text-signal">
                  {step.num}
                </span>
                <h3 className="font-display text-[20px] tracking-[0.02em] leading-none text-[#F0EDE6]">
                  {step.title.toUpperCase()}
                </h3>
                <p className="font-sans text-[13px] text-[#9A9490] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-chalk py-section">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <Eyebrow variant="signal" className="mb-3">COMMON QUESTIONS</Eyebrow>
              <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
                WRAP FAQ.
              </h2>
              <p className="font-sans text-[15px] text-iron-soft leading-relaxed mt-4">
                Still have questions? Call us at{' '}
                <a
                  href="tel:+19024811007"
                  className="text-signal-dark hover:text-signal transition-colors"
                >
                  (902) 481-1007
                </a>{' '}
                — we&apos;re happy to talk through your project.
              </p>
            </div>
            <FAQAccordion items={wrapFAQs} light />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-signal py-16">
        <div className="container-site flex flex-col items-center text-center gap-5">
          <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
            READY TO PUT YOUR BRAND ON THE ROAD?
          </h2>
          <p className="font-sans text-[17px] text-steel-dark max-w-[44ch]">
            Get a free wrap quote from Atlantic Canada&apos;s most experienced vehicle wrap team.
            We&apos;ll get back to you within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote?service=vehicle-wraps"
              className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-steel text-signal hover:bg-steel-mid transition-all duration-200 hover:-translate-y-px"
            >
              Get a Wrap Quote
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
