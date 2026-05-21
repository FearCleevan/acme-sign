import HeroSection from '@/components/home/HeroSection'
import TrustStrip from '@/components/home/TrustStrip'
import ServicesGrid from '@/components/home/ServicesGrid'
import WrapShowcase from '@/components/home/WrapShowcase'
import StatsSection from '@/components/home/StatsSection'
import GalleryPreview from '@/components/home/GalleryPreview'
import LEDSection from '@/components/home/LEDSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTABanner from '@/components/home/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <WrapShowcase />
      <StatsSection />
      <GalleryPreview />
      <LEDSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
