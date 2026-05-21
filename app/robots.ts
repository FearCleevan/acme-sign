import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/quote/confirmed'],
      },
    ],
    sitemap: 'https://acmesign.ca/sitemap.xml',
  }
}
