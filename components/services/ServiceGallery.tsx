import Link from 'next/link'
import { sanityFetch } from '@/lib/sanityFetch'
import { galleryItemsByCategoryQuery } from '@/lib/queries'
import type { SanityGalleryItem, GalleryCategory } from '@/lib/types'
import { urlFor } from '@/lib/sanityImage'
import ImagePlate from '@/components/shared/ImagePlate'

const slugToCategoryMap: Record<string, GalleryCategory | null> = {
  'channel-signs': 'channel-signs',
  'dimensional-signs': 'dimensional',
  'illuminated-signs': 'illuminated',
  'safety-parking-signs': null,
  'window-graphics': 'window-graphics',
  banners: 'banners',
  'decals-stickers': null,
  apparel: 'apparel',
}

interface ServiceGalleryProps {
  serviceSlug: string
  serviceName: string
}

export default async function ServiceGallery({ serviceSlug, serviceName }: ServiceGalleryProps) {
  const category = slugToCategoryMap[serviceSlug]
  const items: SanityGalleryItem[] = category
    ? (await sanityFetch<SanityGalleryItem[]>(galleryItemsByCategoryQuery, { category })).slice(0, 3)
    : []

  if (items.length === 0) return null

  return (
    <section className="bg-chalk-mid py-section">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-signal-dark">
              OUR RECENT WORK
            </span>
            <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
              {serviceName.toUpperCase()} IN THE FIELD.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-sans text-[14px] font-medium text-signal-dark hover:text-signal transition-colors"
          >
            View Full Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative overflow-hidden rounded-card"
            >
              <div className="relative">
                <ImagePlate
                  src={item.image ? urlFor(item.image).width(600).height(450).fit('crop').url() : undefined}
                  alt={item.image?.alt ?? item.title}
                  aspectRatio="4/3"
                  dark
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="font-sans text-[13px] font-semibold text-chalk">{item.client}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-chalk/60 mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
