import type { Metadata } from 'next'
import Link from 'next/link'
import { BiCheckCircle } from 'react-icons/bi'
import { sanityFetch } from '@/lib/sanityFetch'
import { allServicesQuery } from '@/lib/queries'
import type { SanityService } from '@/lib/types'
import { urlFor } from '@/lib/sanityImage'
import Breadcrumb from '@/components/shared/Breadcrumb'
import ImagePlate from '@/components/shared/ImagePlate'

export const metadata: Metadata = {
  title: 'Sign Services Halifax NS | Acme Sign & Graphics Co.',
  description:
    'Channel signs, dimensional signs, illuminated signs, vehicle wraps, window graphics, banners, decals and apparel — every sign your Atlantic Canadian business will ever need.',
}

export default async function ServicesPage() {
  const services = await sanityFetch<SanityService[]>(allServicesQuery)
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-16 lg:py-24">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-5 max-w-[52ch]">
            <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-signal">
              WHAT WE DO
            </span>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              EVERY SIGN YOUR BUSINESS WILL EVER NEED.
            </h1>
            <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed">
              Whether you&apos;re a small local business or a large corporation, our design team
              will collaborate with you to understand your brand identity, target audience, and
              specific requirements — then build something that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating service cards */}
      <section className="bg-chalk py-section">
        <div className="container-site flex flex-col gap-0 divide-y divide-chalk-deep">
          {services.map((service, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 py-16 ${
                  isEven ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:[direction:ltr] ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <ImagePlate
                    src={service.image ? urlFor(service.image).width(800).height(450).fit('crop').url() : undefined}
                    alt={service.image?.alt ?? service.name}
                    aspectRatio="16/9"
                    className="w-full"
                  />
                </div>

                {/* Text */}
                <div className={`lg:[direction:ltr] flex flex-col justify-center gap-6 pt-8 lg:pt-0 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <h2 className="font-display text-[28px] leading-none tracking-[0.02em] text-steel">
                    {service.name.toUpperCase()}
                  </h2>
                  <p className="font-sans text-[15px] text-iron-soft leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {service.features.slice(0, 3).map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-3">
                        <BiCheckCircle size={16} className="text-signal shrink-0" aria-hidden="true" />
                        <span className="font-sans text-[14px] text-iron">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-sans text-[15px] font-medium text-signal-dark hover:text-signal transition-colors self-start"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Full product catalog strip */}
      <section className="bg-steel-dark py-12">
        <div className="container-site">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-6">
            FULL PRODUCT CATALOG
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Banners', 'Vehicle Wraps', 'Safety & Parking Signs', 'Planter Box Signs',
              'Storefront Signs', 'Window Graphics', 'Sandwich Boards', 'Vehicle Graphics',
              'LED Displays', 'Message Boards', 'Decals & Stickers', 'Pop-Up Displays',
              'Vinyl Installation', 'Illuminated Signs', 'Dimensional Signs',
              'Apparel', 'Screen Printing', 'Embroidery', 'Graphic Design', 'Sign Service',
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[10px] uppercase tracking-[0.14em] border border-steel-light text-iron-soft px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-signal">
        <div className="container-site py-16 flex flex-col items-center text-center gap-5">
          <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
            NOT SURE WHAT YOU NEED?
          </h2>
          <p className="font-sans text-[17px] text-steel-dark max-w-[50ch]">
            From illuminated channel letters to captivating digital displays, we have the
            expertise to bring your ideas to life. Tell us what you need — we&apos;ll handle the rest.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-steel text-signal hover:bg-steel-mid transition-all duration-200"
          >
            Start with a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
