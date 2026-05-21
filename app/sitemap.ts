import type { MetadataRoute } from 'next'
import { services } from '@/lib/mockData'
import { blogPosts } from '@/lib/mockData'

const BASE_URL = 'https://acmesign.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/vehicle-wraps`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/led-signs`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/gallery`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/about`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/contact`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${BASE_URL}/quote`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.9 },
    { url: `${BASE_URL}/artwork-guidelines`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE_URL}/blog`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
