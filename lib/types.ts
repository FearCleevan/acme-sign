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
