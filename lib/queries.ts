// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────

export const allServicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    "id": slug.current,
    name,
    "slug": slug.current,
    shortDescription,
    fullDescription,
    features,
    useCases,
    image { asset, alt, hotspot },
    galleryImages[] { asset, alt, hotspot },
    callToAction,
    metaTitle,
    metaDescription
  }
`

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    "id": slug.current,
    name,
    "slug": slug.current,
    shortDescription,
    fullDescription,
    features,
    useCases,
    image { asset, alt, hotspot },
    galleryImages[] { asset, alt, hotspot },
    callToAction,
    metaTitle,
    metaDescription
  }
`

export const allServiceSlugsQuery = `
  *[_type == "service"] { "slug": slug.current }
`

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────

export const allGalleryItemsQuery = `
  *[_type == "galleryItem"] | order(order asc) {
    _id,
    "id": _id,
    title,
    client,
    category,
    description,
    image { asset, alt, hotspot },
    tags,
    featured
  }
`

export const galleryItemsByCategoryQuery = `
  *[_type == "galleryItem" && category == $category] | order(order asc) {
    _id,
    "id": _id,
    title,
    client,
    category,
    description,
    image { asset, alt, hotspot },
    tags,
    featured
  }
`

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────

export const allTestimonialsQuery = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    "id": _id,
    quote,
    author,
    company,
    service
  }
`

export const featuredTestimonialsQuery = `
  *[_type == "testimonial" && featured == true] | order(order asc) [0...3] {
    _id,
    "id": _id,
    quote,
    author,
    company,
    service
  }
`

// ─────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────

export const allTeamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    "id": _id,
    name,
    title,
    bio,
    image { asset, alt, hotspot },
    yearsAtAcme
  }
`

// ─────────────────────────────────────────────
// BLOG
// ─────────────────────────────────────────────

export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    category,
    publishedAt,
    readingMinutes,
    image { asset, alt, hotspot },
    metaTitle,
    metaDescription
  }
`

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    category,
    publishedAt,
    readingMinutes,
    image { asset, alt, hotspot },
    metaTitle,
    metaDescription
  }
`

export const allBlogSlugQuery = `
  *[_type == "blogPost"] { "slug": slug.current }
`

// ─────────────────────────────────────────────
// SITE SETTINGS
// ─────────────────────────────────────────────

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    companyName,
    phone,
    email,
    fax,
    address,
    hours,
    googleMapsUrl,
    metaDescription
  }
`
