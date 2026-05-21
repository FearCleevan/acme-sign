export interface Service {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  features: string[]
  useCases: string[]
  imageUrl: string
  galleryImages: string[]
  callToAction: string
  metaTitle: string
  metaDescription: string
}

export interface GalleryItem {
  id: string
  title: string
  client: string
  category: GalleryCategory
  description: string
  imageUrl: string
  tags: string[]
  featured: boolean
}

export type GalleryCategory =
  | 'vehicle-wraps'
  | 'led-signs'
  | 'channel-signs'
  | 'dimensional'
  | 'illuminated'
  | 'window-graphics'
  | 'banners'
  | 'apparel'

export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  service: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  imageUrl: string
  yearsAtAcme: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  category: string
  publishedAt: string
  readingMinutes: number
  imageUrl: string
  metaTitle: string
  metaDescription: string
}

// ── Sanity Image Types ────────────────────────────────────────────────────────

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface PortableTextBlock {
  _type: string
  _key: string
  style?: string
  children?: Array<{
    _type: string
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    href?: string
  }>
}

// ── Sanity-flavored content types ─────────────────────────────────────────────

export interface SanityService extends Omit<Service, 'imageUrl' | 'galleryImages'> {
  image?: SanityImage
  galleryImages?: SanityImage[]
}

export interface SanityGalleryItem extends Omit<GalleryItem, 'imageUrl'> {
  image?: SanityImage
}

export interface SanityTeamMember extends Omit<TeamMember, 'imageUrl'> {
  image?: SanityImage
}

export interface SanityBlogPost extends Omit<BlogPost, 'imageUrl' | 'body'> {
  image?: SanityImage
  body: PortableTextBlock[]
}

export interface SiteSettings {
  companyName: string
  phone: string
  email: string
  fax: string
  address: {
    street: string
    city: string
    province: string
    postalCode: string
  }
  hours: string
  googleMapsUrl?: string
  metaDescription?: string
}

// ── Quote Form ────────────────────────────────────────────────────────────────

export interface QuoteFormData {
  serviceType: string
  projectDescription: string
  timeline: string
  budget: string
  hasArtwork: boolean
  name: string
  email: string
  phone: string
  company: string
  message: string
}
