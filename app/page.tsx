import HeroSection from '@/components/home/HeroSection'
import MarqueeStrip from '@/components/home/MarqueeStrip'
import TrustStrip from '@/components/home/TrustStrip'
import ServicesGrid from '@/components/home/ServicesGrid'
import WrapShowcase from '@/components/home/WrapShowcase'
import StatsSection from '@/components/home/StatsSection'
import GalleryPreview from '@/components/home/GalleryPreview'
import LEDSection from '@/components/home/LEDSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTABanner from '@/components/home/CTABanner'
import FadeInSection from '@/components/shared/FadeInSection'
import { sanityFetch } from '@/lib/sanityFetch'
import { allGalleryItemsQuery, allTestimonialsQuery } from '@/lib/queries'
import type { SanityGalleryItem, Testimonial } from '@/lib/types'

export default async function Home() {
  const [galleryItems, testimonials] = await Promise.all([
    sanityFetch<SanityGalleryItem[]>(allGalleryItemsQuery),
    sanityFetch<Testimonial[]>(allTestimonialsQuery),
  ])

  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <TrustStrip />
      <FadeInSection>
        <ServicesGrid />
      </FadeInSection>
      <FadeInSection>
        <WrapShowcase />
      </FadeInSection>
      <FadeInSection>
        <StatsSection />
      </FadeInSection>
      <FadeInSection>
        <GalleryPreview items={galleryItems} />
      </FadeInSection>
      <FadeInSection>
        <LEDSection />
      </FadeInSection>
      <FadeInSection>
        <TestimonialsSection testimonials={testimonials} />
      </FadeInSection>
      <CTABanner />
    </>
  )
}
