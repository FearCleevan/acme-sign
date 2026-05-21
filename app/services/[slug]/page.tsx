import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services } from '@/lib/mockData'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceGallery from '@/components/services/ServiceGallery'
import ServiceCTA from '@/components/services/ServiceCTA'

interface Props {
  params: Promise<{ slug: string }>
}

const categoryMap: Record<string, string> = {
  'channel-signs': 'OUTDOOR SIGNAGE',
  'dimensional-signs': '3D SIGNAGE',
  'illuminated-signs': 'ILLUMINATED SIGNAGE',
  'safety-parking-signs': 'REGULATORY SIGNAGE',
  'window-graphics': 'WINDOW SIGNAGE',
  banners: 'LARGE FORMAT PRINTING',
  'decals-stickers': 'SMALL FORMAT PRINTING',
  apparel: 'BRANDED APPAREL',
}

const headlineMap: Record<string, string> = {
  'channel-signs': 'CHANNEL SIGNS THAT COMMAND ATTENTION.',
  'dimensional-signs': 'SIGNS WITH DEPTH, DIMENSION, AND PRESENCE.',
  'illuminated-signs': 'SIGNS THAT WORK WHEN THE SUN GOES DOWN.',
  'safety-parking-signs': 'REGULATORY SIGNS. DONE RIGHT. DONE FAST.',
  'window-graphics': 'EVERY WINDOW IS A CANVAS.',
  banners: 'BOLD, PORTABLE, PROVEN.',
  'decals-stickers': 'SMALL FORMAT. BIG IMPACT.',
  apparel: 'WEAR YOUR BRAND. EVERYWHERE.',
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) notFound()

  const eyebrow = categoryMap[slug] ?? 'SIGN SERVICES'
  const headline = headlineMap[slug] ?? service.name.toUpperCase() + '.'

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.fullDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Acme Sign & Graphics Co.',
      url: 'https://acmesign.ca',
      telephone: '+1-902-481-1007',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '25 Raddall Avenue, Unit 4',
        addressLocality: 'Dartmouth',
        addressRegion: 'Nova Scotia',
        postalCode: 'B3B 1L4',
        addressCountry: 'CA',
      },
    },
    areaServed: 'Atlantic Canada',
    url: `https://acmesign.ca/services/${service.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceHero service={service} eyebrow={eyebrow} headline={headline} />
      <ServiceFeatures service={service} />
      <ServiceGallery serviceSlug={slug} serviceName={service.name} />
      <ServiceCTA service={service} />
    </>
  )
}
