import Link from 'next/link'
import { galleryItems } from '@/lib/mockData'
import ImagePlate from '@/components/shared/ImagePlate'

export default function GalleryPreview() {
  const featured = galleryItems.slice(0, 6)

  const categoryLabel = (cat: string) =>
    cat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <section className="bg-chalk-mid py-section">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-4">
          <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-signal-dark">
            OUR WORK
          </span>
          <h2 className="font-display text-display-lg leading-[0.96] tracking-[0.02em] text-steel">
            42 YEARS OF ATLANTIC CANADIAN SIGNS.
          </h2>
          <p className="font-sans text-[17px] text-iron-soft max-w-[52ch]">
            From a single vehicle wrap to a full building identification package — browse our recent work.
          </p>
        </div>
        <div className="flex justify-end mb-8">
          <Link
            href="/gallery"
            className="font-sans text-[15px] font-medium text-signal-dark hover:text-signal transition-colors"
          >
            See Full Gallery →
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4">
          {/* Item 1 — large, spans 2 cols + 2 rows */}
          <Link
            href="/gallery"
            className="group relative overflow-hidden rounded-card lg:col-span-2 lg:row-span-2"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]">
              <ImagePlate
                alt={featured[0]?.title ?? 'Gallery item'}
                aspectRatio="3/2"
                dark
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel/80 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-[0.14em] bg-signal text-steel px-2 py-1 rounded-pill">
                {categoryLabel(featured[0]?.category ?? '')}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="font-sans text-[13px] font-semibold text-chalk">{featured[0]?.client}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-chalk/70 mt-1">{featured[0]?.title}</p>
              </div>
            </div>
          </Link>

          {/* Items 2–5 — each 1 col, 1 row */}
          {featured.slice(1, 5).map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative overflow-hidden rounded-card"
            >
              <div className="relative">
                <ImagePlate
                  alt={item.title}
                  aspectRatio="4/3"
                  dark
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel/70 via-transparent to-transparent" />
                <div className="absolute top-2 right-2 font-mono text-[8px] uppercase tracking-[0.12em] bg-signal text-steel px-2 py-0.5 rounded-pill">
                  {categoryLabel(item.category)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="font-sans text-[12px] font-semibold text-chalk leading-tight">{item.client}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* Item 6 — full width bottom row */}
          {featured[5] && (
            <Link
              href="/gallery"
              className="group relative overflow-hidden rounded-card lg:col-span-4"
            >
              <div className="relative">
                <div className="relative max-h-[220px] overflow-hidden">
                  <ImagePlate
                    alt={featured[5].title}
                    aspectRatio="16/9"
                    dark
                    className="w-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-steel/70 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-[0.14em] bg-signal text-steel px-2 py-1 rounded-pill">
                  {categoryLabel(featured[5].category)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-chalk">{featured[5].client}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-chalk/70 mt-1">{featured[5].title}</p>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
