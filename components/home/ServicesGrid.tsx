import Link from 'next/link'
import {
  BiStore,
  BiCube,
  BiSun,
  BiShield,
  BiWindow,
  BiFlag,
  BiTag,
} from 'react-icons/bi'
import { RiShirtLine } from 'react-icons/ri'
import { services } from '@/lib/mockData'
import SectionHeading from '@/components/shared/SectionHeading'

const iconMap: Record<string, React.ElementType> = {
  'channel-signs': BiStore,
  'dimensional-signs': BiCube,
  'illuminated-signs': BiSun,
  'safety-parking-signs': BiShield,
  'window-graphics': BiWindow,
  banners: BiFlag,
  'decals-stickers': BiTag,
  apparel: RiShirtLine,
}

export default function ServicesGrid() {
  return (
    <section className="bg-chalk py-section">
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="OUR SERVICES"
            heading="EVERYTHING YOUR BUSINESS NEEDS TO BE SEEN."
            className="lg:max-w-[42ch]"
          />
          <div className="flex flex-col gap-3 lg:text-right lg:pb-2">
            <p className="font-sans text-[16px] text-iron-soft max-w-[36ch]">
              From a single door decal to a complete building identification package — we&apos;ve been doing this since 1982.
            </p>
            <Link
              href="/services"
              className="font-sans text-[15px] font-medium text-signal-dark hover:text-signal transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.id] ?? BiStore
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative bg-chalk-mid border border-chalk-deep rounded-card p-6 flex flex-col gap-4 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-250 overflow-hidden"
              >
                {/* Signal left border on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-250" />

                <Icon size={40} className="text-signal flex-shrink-0" aria-hidden="true" />

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display text-[22px] tracking-[0.02em] leading-none text-steel">
                    {service.name}
                  </h3>
                  <p className="font-sans text-[13px] text-iron-soft leading-snug line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                <span className="font-sans text-[14px] font-medium text-signal-dark group-hover:text-signal transition-colors">
                  Learn more →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
