import type { Metadata } from 'next'
import { galleryItems } from '@/lib/mockData'
import Eyebrow from '@/components/shared/Eyebrow'
import Breadcrumb from '@/components/shared/Breadcrumb'
import GalleryInteractive from '@/components/gallery/GalleryInteractive'

export const metadata: Metadata = {
  title: 'Sign Gallery Halifax NS | Acme Sign & Graphics Co.',
  description:
    'Browse 42 years of Acme Sign work — vehicle wraps, LED signs, channel signs, dimensional signs, window graphics, banners, and apparel across Atlantic Canada.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-14 lg:py-20">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4 max-w-[52ch]">
            <Eyebrow variant="light">OUR WORK</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              42 YEARS OF ATLANTIC CANADIAN SIGNS.
            </h1>
            <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed">
              Browse our recent projects — from single vehicle wraps to complete building
              identification packages.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive gallery — filter + grid + lightbox */}
      <GalleryInteractive items={galleryItems} />
    </>
  )
}
