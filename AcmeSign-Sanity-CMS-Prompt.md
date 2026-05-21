# AcmeSign.ca — Sanity CMS Integration Prompt
## Next.js 16 · Sanity v3 · Phase-by-Phase Execution Guide
### For Claude Code · Acme Sign & Graphics Co. · Nova Scotia, Canada

---

> **For Claude Code:** Before executing any phase, read this entire document completely. Store the following as active memory:
>
> - **Project:** Acme Sign & Graphics Co. — wiring Sanity CMS into the existing Next.js 16 frontend
> - **Existing frontend:** Fully built at `acme-sign-redesign/` — App Router, TypeScript, Tailwind v4
> - **Current data layer:** 100% hardcoded in `lib/mockData.ts` — this file gets REPLACED phase by phase
> - **Sanity project name:** AcmeSign (already created in the Sanity dashboard)
> - **Target:** Every content type editable by Scott from Sanity Studio — no developer needed for content changes
> - **Every phase ends with a STOP.** Provide a full report. Ask: **"Continue with the next phase?"** — only proceed on explicit **"Yes, Proceed."**
> - Do NOT rewrite components. Only change the data-fetching layer.
> - Do NOT use the Logo component (LogoFull / LogoMark). Always use plain text markup.
> - Keep all existing Tailwind classes, layout, and design exactly as-is.

---

## Memory Anchors (Commit Before Starting)

```
PROJECT:      Acme Sign & Graphics Co. — Sanity CMS integration
FRAMEWORK:    Next.js 16 App Router + TypeScript + Tailwind v4
SANITY:       Studio v3 · GROQ queries · next-sanity · @sanity/image-url
DATA TYPES:   service (8), galleryItem (20), testimonial (12), teamMember (3),
              blogPost (3), siteSettings (1)
STRATEGY:     Replace lib/mockData.ts imports one content type at a time
              Components stay untouched — only data sources change
IMAGES:       All ImagePlate components get real src= from Sanity CDN
PHASE_GATE:   STOP after each phase. Report. Ask "Continue with the next phase?"
              Never auto-proceed. Wait for "Yes, Proceed."
```

---

## Architecture Overview

```
acme-sign-redesign/
├── sanity/                        ← NEW: Sanity Studio (embedded)
│   ├── schemas/
│   │   ├── index.ts               ← schema registry
│   │   ├── service.ts
│   │   ├── galleryItem.ts
│   │   ├── testimonial.ts
│   │   ├── teamMember.ts
│   │   ├── blogPost.ts
│   │   └── siteSettings.ts
│   └── sanity.config.ts           ← Studio configuration
├── lib/
│   ├── mockData.ts                ← progressively emptied, kept for fallback
│   ├── sanity.ts                  ← NEW: Sanity client
│   ├── sanityImage.ts             ← NEW: image URL builder
│   ├── queries.ts                 ← NEW: all GROQ queries
│   └── types.ts                  ← extended with Sanity image types
├── app/
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx           ← NEW: embedded Studio route
└── .env.local                     ← add SANITY_* vars
```

**The swap strategy — never break the running site:**
1. Install Sanity packages
2. Create schemas in Studio
3. Enter content in Studio (migrate from mockData.ts)
4. Switch one data fetch at a time: component reads from Sanity instead of mockData
5. Verify each swap before moving to the next
6. When all types are live — delete mockData.ts

---

## Phase 1 — Install & Configure Sanity

### Objective
Install all Sanity packages, configure the client, set up environment variables, and embed Sanity Studio as a route in the Next.js app. Verify Studio loads at `/studio`.

**Deliverable:** Studio accessible at `localhost:3000/studio`. No content yet — just the shell.

---

### 1.1 — Get Your Project Credentials

Before writing any code, you need two values from the Sanity dashboard:

1. Go to **sanity.io/manage** → select the **AcmeSign** project
2. Copy the **Project ID** (looks like `abc12345`)
3. The **Dataset** is `production` (default)
4. Go to **API** tab → **Tokens** → **Add API token**
   - Name: `Next.js Read Token`
   - Permission: **Viewer** (read-only)
   - Copy the token — you will only see it once

You now have:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `SANITY_API_TOKEN` = the viewer token you just created

### 1.2 — Install Packages

```bash
cd acme-sign-redesign

npm install next-sanity @sanity/image-url
npm install --save-dev @sanity/types
```

`next-sanity` bundles the Sanity client, live preview helpers, and the Studio embed component for Next.js App Router.

### 1.3 — Environment Variables (`.env.local`)

Add to the existing `.env.local` file (create if it doesn't exist):

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_read_token_here
```

> **Note:** `NEXT_PUBLIC_` prefix means the value is exposed to the browser. The project ID and dataset are safe to expose. The API token is NOT prefixed — it stays server-side only.

### 1.4 — Sanity Client (`lib/sanity.ts`)

```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})
```

**What each option does:**
- `useCdn: true` in production — uses Sanity's global CDN for fast reads
- `useCdn: false` in development — always gets fresh data
- `token` — needed to read draft documents (optional for now, required for live preview later)

### 1.5 — Image URL Builder (`lib/sanityImage.ts`)

```typescript
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
```

**Usage example** (you will use this in Phase 4 when wiring images):
```typescript
// Returns: https://cdn.sanity.io/images/.../photo.jpg?w=800&h=600&fit=crop
urlFor(item.image).width(800).height(600).fit('crop').url()
```

### 1.6 — Extend TypeScript Types (`lib/types.ts`)

Add Sanity image type to the existing types file. Do NOT remove existing types — append only:

```typescript
// Add at the top of lib/types.ts
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

// Add Sanity-flavored versions of existing types
export interface SanityService extends Omit<Service, 'imageUrl' | 'galleryImages'> {
  image: SanityImage
  galleryImages: SanityImage[]
}

export interface SanityGalleryItem extends Omit<GalleryItem, 'imageUrl'> {
  image: SanityImage
}

export interface SanityBlogPost extends Omit<BlogPost, 'imageUrl' | 'body'> {
  image: SanityImage
  body: PortableTextBlock[]
}

// Portable Text block type (for blog body)
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
```

### 1.7 — Create Sanity Config (`sanity/sanity.config.ts`)

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'acme-sign',
  title: 'Acme Sign & Graphics Co.',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool(),
    visionTool(), // GROQ query playground — useful during development
  ],

  schema: {
    types: schemaTypes,
  },
})
```

### 1.8 — Schema Index (`sanity/schemas/index.ts`)

```typescript
// Import all schemas here — add as you create them in later phases
export { default as service } from './service'
export { default as galleryItem } from './galleryItem'
export { default as testimonial } from './testimonial'
export { default as teamMember } from './teamMember'
export { default as blogPost } from './blogPost'
export { default as siteSettings } from './siteSettings'

import service from './service'
import galleryItem from './galleryItem'
import testimonial from './testimonial'
import teamMember from './teamMember'
import blogPost from './blogPost'
import siteSettings from './siteSettings'

export const schemaTypes = [
  service,
  galleryItem,
  testimonial,
  teamMember,
  blogPost,
  siteSettings,
]
```

### 1.9 — Embedded Studio Route

Create the directory and file:
`app/studio/[[...tool]]/page.tsx`

```typescript
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

Also add to `app/studio/[[...tool]]/layout.tsx`:

```typescript
export const metadata = {
  title: 'Acme Sign — Sanity Studio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
```

### 1.10 — Add Studio to next.config

Open `next.config.ts` and ensure the Sanity Studio route is excluded from security headers (if any) and that image domains include Sanity's CDN:

```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}
```

### 1.11 — Verify Studio Loads

```bash
npm run dev
```

Navigate to `http://localhost:3000/studio`

You should see the Sanity Studio UI — empty because no schemas are defined yet. This confirms the embed is working.

---

### PHASE 1 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 1 COMPLETE — Sanity Install & Configuration
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ Packages installed: next-sanity, @sanity/image-url, @sanity/types
> ✅ .env.local: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN set
> ✅ lib/sanity.ts: client created
> ✅ lib/sanityImage.ts: urlFor() builder ready
> ✅ lib/types.ts: Sanity image types appended
> ✅ sanity/sanity.config.ts: Studio config created
> ✅ sanity/schemas/index.ts: schema registry created
> ✅ app/studio/[[...tool]]/page.tsx: Studio route created
> ✅ next.config.ts: cdn.sanity.io added to image remotePatterns
> ✅ Studio: loading at localhost:3000/studio
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```
>
> **Wait for "Yes, Proceed" before continuing.**

---

## Phase 2 — Define All Schemas

### Objective
Create all 6 Sanity schemas matching the exact shape of `lib/mockData.ts`. After this phase, the Studio will have all document types and fields ready for content entry.

**Deliverable:** All 6 schemas defined. Studio shows all document types in the sidebar.

---

### 2.1 — Service Schema (`sanity/schemas/service.ts`)

This matches the `Service` interface in `lib/types.ts` exactly.

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (slug key)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'One to two sentences — used in service cards and listings.',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      description: 'Full paragraph — used on the service detail page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points shown on the service detail page.',
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO.',
        }),
      ],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'callToAction',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Get a Quote',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO: Meta Title',
      type: 'string',
      description: 'Recommended: 50–60 characters.',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO: Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 120–160 characters.',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = appears first. Use 1–8.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
})
```

### 2.2 — Gallery Item Schema (`sanity/schemas/galleryItem.ts`)

```typescript
import { defineType, defineField } from 'sanity'

const categoryOptions = [
  { title: 'Vehicle Wraps', value: 'vehicle-wraps' },
  { title: 'LED Signs', value: 'led-signs' },
  { title: 'Channel Signs', value: 'channel-signs' },
  { title: 'Dimensional', value: 'dimensional' },
  { title: 'Illuminated', value: 'illuminated' },
  { title: 'Window Graphics', value: 'window-graphics' },
  { title: 'Banners', value: 'banners' },
  { title: 'Apparel', value: 'apparel' },
]

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: categoryOptions,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Project Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Featured items are highlighted in the gallery grid.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = appears first.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'image',
    },
  },
})
```

### 2.3 — Testimonial Schema (`sanity/schemas/testimonial.ts`)

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company or Source',
      type: 'string',
      description: 'e.g. "Google Review" or "Cyclesmith Halifax"',
    }),
    defineField({
      name: 'service',
      title: 'Service Type',
      type: 'string',
      description: 'Which service does this testimonial relate to?',
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Only 3 testimonials are shown on the homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
    },
  },
})
```

### 2.4 — Team Member Schema (`sanity/schemas/teamMember.ts`)

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'yearsAtAcme',
      title: 'Years at Acme',
      type: 'number',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '1 = appears first (Scott should be 1).',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
  },
})
```

### 2.5 — Blog Post Schema (`sanity/schemas/blogPost.ts`)

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in blog card and search results.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sign Buying Guide', value: 'Sign Buying Guide' },
          { title: 'Vehicle Wraps', value: 'Vehicle Wraps' },
          { title: 'LED Signs', value: 'LED Signs' },
          { title: 'Industry News', value: 'Industry News' },
          { title: 'Tips & Advice', value: 'Tips & Advice' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingMinutes',
      title: 'Reading Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO: Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO: Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'image',
    },
  },
})
```

### 2.6 — Site Settings Schema (`sanity/schemas/siteSettings.ts`)

This is a singleton document — one set of global settings, not a list.

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document of this type should exist
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Acme Sign & Graphics Co.',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '(902) 481-1007',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'acmesign01@gmail.com',
    }),
    defineField({
      name: 'fax',
      title: 'Fax Number',
      type: 'string',
      initialValue: '(902) 481-0511',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({ name: 'street', title: 'Street', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'province', title: 'Province', type: 'string' }),
        defineField({ name: 'postalCode', title: 'Postal Code', type: 'string' }),
      ],
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'string',
      initialValue: 'Monday to Friday · 8:30 AM – 5:00 PM',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Site-wide Meta Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'companyName' },
  },
})
```

### 2.7 — Verify All Schemas in Studio

```bash
npm run dev
```

Go to `localhost:3000/studio`. The left sidebar should now show:
- **Service** (with 0 documents)
- **Gallery Item** (with 0 documents)
- **Testimonial** (with 0 documents)
- **Team Member** (with 0 documents)
- **Blog Post** (with 0 documents)
- **Site Settings** (with 0 documents)

---

### PHASE 2 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 2 COMPLETE — Sanity Schemas Defined
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ sanity/schemas/service.ts — [N] fields
> ✅ sanity/schemas/galleryItem.ts — [N] fields
> ✅ sanity/schemas/testimonial.ts — [N] fields
> ✅ sanity/schemas/teamMember.ts — [N] fields
> ✅ sanity/schemas/blogPost.ts — [N] fields (with Portable Text body)
> ✅ sanity/schemas/siteSettings.ts — [N] fields
> ✅ Studio sidebar: all 6 document types visible
> ✅ No TypeScript errors
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 3 — Enter Content in Sanity Studio

### Objective
Migrate all content from `lib/mockData.ts` into Sanity Studio manually. This is a content entry phase — no code changes.

**Deliverable:** All content live in Sanity with images uploaded. `lib/mockData.ts` still in use — this phase is content-only.

---

### 3.1 — Site Settings (enter first)

Go to **Site Settings** in the Studio → **Create new** → enter:

| Field | Value |
|-------|-------|
| Company Name | Acme Sign & Graphics Co. |
| Phone | (902) 481-1007 |
| Email | acmesign01@gmail.com |
| Fax | (902) 481-0511 |
| Address › Street | 25 Raddall Avenue, Unit 4 |
| Address › City | Dartmouth |
| Address › Province | Nova Scotia |
| Address › Postal Code | B3B 1L4 |
| Hours | Monday to Friday · 8:30 AM – 5:00 PM |

→ Click **Publish**

### 3.2 — Enter All 8 Services

For each service, enter the data from `lib/mockData.ts`. Copy each field exactly. Set the **Display Order** field to match the position (1–8).

Services to enter (in order):
1. Channel Signs (order: 1)
2. Dimensional Signs (order: 2)
3. Illuminated Signs (order: 3)
4. Safety & Parking Signs (order: 4)
5. Window Graphics (order: 5)
6. Banners (order: 6)
7. Decals & Stickers (order: 7)
8. Apparel (order: 8)

**For images:** Upload placeholder images now if you have them. If not, leave the image field empty — the `ImagePlate` component handles missing images gracefully with a placeholder.

→ Publish each service after entry.

### 3.3 — Enter All 20 Gallery Items

Enter each gallery item from `lib/mockData.ts`. Set the **Order** field (1–20) and mark the featured items.

Featured items (from mockData): g-01, g-05, g-07, g-11

**For photos:** Upload the actual project photos now. These are the most important images on the site — don't leave them as placeholders if you have the real photos.

→ Publish each item after entry.

### 3.4 — Enter All 12 Testimonials

Enter all 12 testimonials from `lib/mockData.ts`. For the 3 to show on the homepage, check **Show on Homepage** on:
1. Brent VanSlyke
2. Jeffrey Paul Daugherty
3. Shaun Tapper

→ Publish each testimonial after entry.

### 3.5 — Enter 3 Team Members

| Name | Title | Years | Order |
|------|-------|-------|-------|
| Scott | Founder & Owner | 42 | 1 |
| Michelle | Lead Designer | 15 | 2 |
| Ryan | Production Manager | 11 | 3 |

Upload team photos if available. → Publish each.

### 3.6 — Enter 3 Blog Posts

The blog post body in Studio uses a **rich text editor (Portable Text)**, not raw markdown. Copy the content from `lib/mockData.ts` and format it in the editor:

- Lines starting with `**Heading**` → select text → apply **Heading 2** style
- Body paragraphs → leave as **Normal**
- Bullet lists → select text → click the list icon in the toolbar

→ Publish each post.

### 3.7 — Verify Content Count in Studio

Studio sidebar should show:
- Service: 8 documents
- Gallery Item: 20 documents
- Testimonial: 12 documents
- Team Member: 3 documents
- Blog Post: 3 documents
- Site Settings: 1 document

---

### PHASE 3 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 3 COMPLETE — Content Migration
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ Site Settings: 1 document published
> ✅ Services: 8 documents published
> ✅ Gallery Items: 20 documents published
> ✅ Testimonials: 12 documents published
> ✅ Team Members: 3 documents published
> ✅ Blog Posts: 3 documents published
> ✅ Total: 47 documents in Sanity
> ⚠️  Images uploaded: [list which content types have photos]
> ⚠️  Placeholder images still needed for: [list if any]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 4 — GROQ Queries & Data Fetching Layer

### Objective
Write all GROQ queries and a typed fetch helper. No pages change yet — this builds the data access layer that all pages will use in Phase 5.

**Deliverable:** `lib/queries.ts` — all queries written and tested using the Vision tool in Studio.

---

### 4.1 — What is GROQ?

GROQ is Sanity's query language. It reads like a mix of SQL and JSON. Examples:

```groq
// Get all services, ordered by display order
*[_type == "service"] | order(order asc)

// Get one service by slug
*[_type == "service" && slug.current == $slug][0]

// Get only specific fields (projection)
*[_type == "galleryItem"] { title, client, category, image }

// Filter by field value
*[_type == "testimonial" && featured == true]
```

### 4.2 — Test Queries in Studio

Before writing code, test every query in the **Vision** plugin:
1. Go to `localhost:3000/studio`
2. Click **Vision** in the top navigation
3. Type a GROQ query in the left panel → click **Fetch**
4. Results appear on the right — verify the shape matches what you expect

### 4.3 — All GROQ Queries (`lib/queries.ts`)

```typescript
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
    slug,
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
```

### 4.4 — Typed Fetch Helper (`lib/sanityFetch.ts`)

```typescript
import { client } from './sanity'

export async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {}
): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      // Revalidate every 60 seconds in production
      // In development, always fetches fresh
      revalidate: process.env.NODE_ENV === 'production' ? 60 : 0,
    },
  })
}
```

**Why `revalidate: 60`?**
Next.js caches fetch results. Without revalidation, a content change in Studio wouldn't appear on the site until the next full deployment. With `revalidate: 60`, the site checks for new content every 60 seconds automatically — no redeployment needed after content updates.

### 4.5 — Test All Queries

In the Studio Vision tool, run each query from 4.3 and confirm:
- `allServicesQuery` → returns 8 service documents
- `serviceBySlugQuery` (with `$slug = "channel-signs"`) → returns 1 document
- `allGalleryItemsQuery` → returns 20 items
- `featuredTestimonialsQuery` → returns exactly 3 items
- `allBlogPostsQuery` → returns 3 posts
- `blogPostBySlugQuery` (with `$slug = "best-sign-types-for-halifax-businesses"`) → returns 1 post

---

### PHASE 4 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 4 COMPLETE — GROQ Queries & Fetch Layer
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ lib/queries.ts: all [N] queries written
> ✅ lib/sanityFetch.ts: typed fetch helper with revalidation
> ✅ Vision tests:
>    allServicesQuery → 8 results ✓
>    serviceBySlugQuery → 1 result ✓
>    allGalleryItemsQuery → 20 results ✓
>    featuredTestimonialsQuery → 3 results ✓
>    allBlogPostsQuery → 3 results ✓
>    blogPostBySlugQuery → 1 result ✓
> ✅ No TypeScript errors
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 5 — Wire Services to Sanity

### Objective
Replace `services` from `lib/mockData.ts` with live Sanity data across all service pages. Wire real images through `@sanity/image-url`.

**Deliverable:** `/services`, `/services/[slug]`, all 8 detail pages — pulling live data from Sanity. Images from Sanity CDN.

---

### 5.1 — Update `app/services/page.tsx`

Replace the import:
```typescript
// REMOVE:
import { services } from '@/lib/mockData'

// ADD:
import { sanityFetch } from '@/lib/sanityFetch'
import { allServicesQuery } from '@/lib/queries'
import type { SanityService } from '@/lib/types'
```

Make the page async and fetch from Sanity:
```typescript
export default async function ServicesPage() {
  const services = await sanityFetch<SanityService[]>(allServicesQuery)
  // rest of component stays exactly the same
}
```

### 5.2 — Update `app/services/[slug]/page.tsx`

```typescript
import { sanityFetch } from '@/lib/sanityFetch'
import { serviceBySlugQuery, allServiceSlugsQuery } from '@/lib/queries'
import type { SanityService } from '@/lib/types'

// Update generateStaticParams
export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(allServiceSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

// Update generateMetadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await sanityFetch<SanityService>(serviceBySlugQuery, { slug })
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

// Update page component
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await sanityFetch<SanityService>(serviceBySlugQuery, { slug })
  if (!service) notFound()
  // rest of component stays exactly the same
}
```

### 5.3 — Wire Service Images

Wherever `ImagePlate` receives `src={service.imageUrl}`, update to use `urlFor()`:

```typescript
import { urlFor } from '@/lib/sanityImage'

// Before:
<ImagePlate src={service.imageUrl} alt={service.name} aspectRatio="16/9" />

// After:
<ImagePlate
  src={service.image ? urlFor(service.image).width(800).height(450).fit('crop').url() : undefined}
  alt={service.image?.alt ?? service.name}
  aspectRatio="16/9"
/>
```

**The `ImagePlate` component already handles missing `src`** — it falls back to the placeholder pattern. So this is safe even if some services don't have photos yet.

### 5.4 — Verify

- Visit `localhost:3000/services` — all 8 services render
- Visit `localhost:3000/services/channel-signs` — data from Sanity
- Edit the Channel Signs description in Studio → wait 60s (or restart dev server) → verify change appears
- `npm run build` — 0 errors

---

### PHASE 5 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 5 COMPLETE — Services Wired to Sanity
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /services: pulling from Sanity (8 services)
> ✅ /services/[slug]: all 8 detail pages resolve from Sanity
> ✅ generateStaticParams: all 8 slugs from Sanity
> ✅ generateMetadata: per-page SEO from Sanity
> ✅ Service images: urlFor() wired on image fields
> ✅ npm run build: 0 errors
> ✅ Content edit test: change in Studio visible on site
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 6 — Wire Gallery to Sanity

### Objective
Replace the `galleryItems` mock with live Sanity data on the gallery page and all gallery preview sections.

**Deliverable:** `/gallery` — all 20 items from Sanity with real photos. Vehicle wraps and LED Signs pages also wired.

---

### 6.1 — Update `app/gallery/page.tsx`

```typescript
// REMOVE:
import { galleryItems } from '@/lib/mockData'

// ADD:
import { sanityFetch } from '@/lib/sanityFetch'
import { allGalleryItemsQuery } from '@/lib/queries'
import type { SanityGalleryItem } from '@/lib/types'

// Make async, fetch from Sanity
const galleryItems = await sanityFetch<SanityGalleryItem[]>(allGalleryItemsQuery)
```

### 6.2 — Update GalleryInteractive Component

`GalleryInteractive` receives `items` as a prop — it stays as-is. Only the data source in `page.tsx` changes.

### 6.3 — Wire Gallery Images

In `GalleryCard` or wherever gallery images are rendered:

```typescript
import { urlFor } from '@/lib/sanityImage'

// Image source for each gallery item:
src={item.image ? urlFor(item.image).width(600).height(450).fit('crop').url() : undefined}
alt={item.image?.alt ?? item.title}
```

### 6.4 — Update Lightbox Image

In `GalleryLightbox.tsx`, the image area is currently a placeholder. Wire the real photo:

```typescript
// In the image area div, add a real next/image:
{item.image && (
  <Image
    src={urlFor(item.image).width(1200).height(800).fit('max').url()}
    alt={item.image.alt ?? item.title}
    fill
    className="object-contain"
    sizes="(max-width: 1024px) 100vw, 65vw"
  />
)}
```

### 6.5 — Update Vehicle Wraps Gallery Section

In `app/vehicle-wraps/page.tsx`:

```typescript
// REMOVE:
import { galleryItems } from '@/lib/mockData'
const wrapGallery = galleryItems.filter((item) => item.category === 'vehicle-wraps')

// ADD:
import { sanityFetch } from '@/lib/sanityFetch'
import { galleryItemsByCategoryQuery } from '@/lib/queries'

const wrapGallery = await sanityFetch<SanityGalleryItem[]>(
  galleryItemsByCategoryQuery,
  { category: 'vehicle-wraps' }
)
```

### 6.6 — Update LED Signs Gallery Section

Same pattern as 6.5 with `{ category: 'led-signs' }`.

### 6.7 — Update Home Gallery Preview

In `components/home/GalleryPreview.tsx` or `app/page.tsx` (wherever gallery preview items are fetched):

```typescript
const featuredItems = await sanityFetch<SanityGalleryItem[]>(allGalleryItemsQuery)
// Slice to first 6 for the preview grid
const previewItems = featuredItems.slice(0, 6)
```

### 6.8 — Verify

- Gallery page shows all 20 items with real photos
- Filter by "Vehicle Wraps" — only vehicle wrap items show
- Lightbox opens with real photo
- `npm run build` — 0 errors

---

### PHASE 6 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 6 COMPLETE — Gallery Wired to Sanity
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /gallery: 20 items from Sanity
> ✅ Gallery filter: category filtering works
> ✅ Lightbox: real photos loading from Sanity CDN
> ✅ /vehicle-wraps gallery: filtered by category
> ✅ /led-signs gallery: filtered by category
> ✅ Home gallery preview: 6 items from Sanity
> ✅ urlFor() wired on all image fields
> ✅ npm run build: 0 errors
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 7 — Wire Blog to Sanity (with Portable Text)

### Objective
Replace hardcoded blog posts with Sanity data. Replace the custom `renderBody()` markdown parser with Sanity's `@portabletext/react` renderer.

**Deliverable:** `/blog` + `/blog/[slug]` — all 3 posts from Sanity with rich text body rendering.

---

### 7.1 — Install Portable Text Renderer

```bash
npm install @portabletext/react
```

### 7.2 — Create Portable Text Component (`components/shared/PortableTextRenderer.tsx`)

```typescript
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@/lib/types'
import { urlFor } from '@/lib/sanityImage'
import Image from 'next/image'

const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="font-sans text-[17px] text-iron leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-display text-[32px] tracking-[0.02em] text-steel leading-none mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-display text-[24px] tracking-[0.02em] text-steel leading-none mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-signal pl-6 my-6 font-serif italic text-[18px] text-iron-soft">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside pl-6 mb-5 flex flex-col gap-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside pl-6 mb-5 flex flex-col gap-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="font-sans text-[16px] text-iron leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-steel">{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-signal-dark underline underline-offset-2 hover:text-signal transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-8 overflow-hidden rounded-card">
        <Image
          src={urlFor(value).width(800).fit('max').url()}
          alt={value.alt ?? ''}
          width={800}
          height={500}
          className="w-full object-cover"
        />
        {value.caption && (
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-iron-soft mt-2 text-center">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
}

interface PortableTextRendererProps {
  value: PortableTextBlock[]
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  return <PortableText value={value} components={components} />
}
```

### 7.3 — Update `app/blog/page.tsx`

```typescript
// REMOVE:
import { blogPosts } from '@/lib/mockData'

// ADD:
import { sanityFetch } from '@/lib/sanityFetch'
import { allBlogPostsQuery } from '@/lib/queries'
import type { SanityBlogPost } from '@/lib/types'

// Make async:
const blogPosts = await sanityFetch<SanityBlogPost[]>(allBlogPostsQuery)
```

Wire cover images:
```typescript
src={post.image ? urlFor(post.image).width(600).height(338).fit('crop').url() : undefined}
```

### 7.4 — Update `app/blog/[slug]/page.tsx`

```typescript
// REMOVE:
import { blogPosts } from '@/lib/mockData'
// Remove custom renderBody() and renderInline() functions entirely

// ADD:
import { sanityFetch } from '@/lib/sanityFetch'
import { blogPostBySlugQuery, allBlogSlugQuery } from '@/lib/queries'
import PortableTextRenderer from '@/components/shared/PortableTextRenderer'
import type { SanityBlogPost } from '@/lib/types'

// Update generateStaticParams:
export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(allBlogSlugQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

// Update generateMetadata:
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await sanityFetch<SanityBlogPost>(blogPostBySlugQuery, { slug })
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  }
}

// Update page — replace the renderBody() call with PortableTextRenderer:
// BEFORE:
// <div>{renderBody(post.body)}</div>

// AFTER:
// <PortableTextRenderer value={post.body} />
```

### 7.5 — Verify

- `/blog` shows 3 posts with cover images
- `/blog/best-sign-types-for-halifax-businesses` — body renders with proper headings and paragraphs
- Edit a post in Studio → change appears after revalidation
- `npm run build` — 0 errors

---

### PHASE 7 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 7 COMPLETE — Blog Wired to Sanity
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /blog: 3 posts from Sanity
> ✅ /blog/[slug]: all 3 post routes from Sanity
> ✅ Portable Text: body renders headings, paragraphs, lists, bold
> ✅ Cover images: urlFor() wired
> ✅ renderBody() custom parser: removed
> ✅ generateStaticParams: slugs from Sanity
> ✅ npm run build: 0 errors
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 8 — Wire Testimonials, Team & Homepage

### Objective
Wire the remaining data types — testimonials, team members — and update the homepage to pull live data for its dynamic sections.

**Deliverable:** All dynamic sections on every page pulling from Sanity. `lib/mockData.ts` can be deleted.

---

### 8.1 — Wire Testimonials

In `components/home/TestimonialsSection.tsx` (or wherever testimonials are fetched):

```typescript
import { sanityFetch } from '@/lib/sanityFetch'
import { featuredTestimonialsQuery } from '@/lib/queries'
import type { Testimonial } from '@/lib/types'

// This is a server component — make it async:
const testimonials = await sanityFetch<Testimonial[]>(featuredTestimonialsQuery)
```

If `TestimonialsSection` is a client component, move the fetch to the parent server page (`app/page.tsx`) and pass testimonials as a prop.

### 8.2 — Wire Team Members

In `app/about/page.tsx` (wherever team data is used):

```typescript
import { sanityFetch } from '@/lib/sanityFetch'
import { allTeamMembersQuery } from '@/lib/queries'

const teamMembers = await sanityFetch<TeamMember[]>(allTeamMembersQuery)
```

Wire team member photos:
```typescript
src={member.image ? urlFor(member.image).width(400).height(400).fit('crop').url() : undefined}
```

### 8.3 — Wire Homepage Dynamic Sections

`app/page.tsx` — make it async and fetch all data needed by homepage sections:

```typescript
export default async function HomePage() {
  const [galleryItems, testimonials] = await Promise.all([
    sanityFetch<SanityGalleryItem[]>(allGalleryItemsQuery),
    sanityFetch<Testimonial[]>(featuredTestimonialsQuery),
  ])

  const previewItems = galleryItems.slice(0, 6)

  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <TrustStrip />
      <ServicesGrid />
      <WrapShowcase />
      <StatsSection />
      <GalleryPreview items={previewItems} />
      <LEDSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTABanner />
    </>
  )
}
```

Update `GalleryPreview` and `TestimonialsSection` to accept data as props instead of importing from mockData.

### 8.4 — Delete `lib/mockData.ts`

Once all pages have been verified pulling from Sanity, delete the mock data file:

```bash
# Verify nothing imports mockData anymore:
grep -r "from '@/lib/mockData'" .
grep -r "from '../lib/mockData'" .
grep -r "from '../../lib/mockData'" .

# If grep returns nothing — safe to delete
rm lib/mockData.ts
```

### 8.5 — Final Build Verification

```bash
npm run build
```

Expected output: 0 errors, all 26+ routes generate successfully.

---

### PHASE 8 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 8 COMPLETE — All Data Wired to Sanity
> ACME SIGN CMS INTEGRATION COMPLETE
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
>
> SANITY DOCUMENTS LIVE:
>   Services:       8
>   Gallery Items:  20
>   Testimonials:   12
>   Team Members:   3
>   Blog Posts:     3
>   Site Settings:  1
>   TOTAL:          47
>
> PAGES WIRED TO SANITY:
>   ✅ / (homepage) — gallery preview + testimonials
>   ✅ /services — all 8 services
>   ✅ /services/[slug] — all 8 detail pages
>   ✅ /vehicle-wraps — gallery section
>   ✅ /led-signs — gallery section
>   ✅ /gallery — all 20 items + filter
>   ✅ /about — team members
>   ✅ /blog — 3 posts
>   ✅ /blog/[slug] — 3 post routes
>
> HARDCODED DATA REMOVED:
>   ✅ lib/mockData.ts — deleted
>   ✅ No remaining mockData imports
>
> BUILD:
>   ✅ npm run build — 0 errors
>   ✅ All routes generate successfully
>
> STUDIO:
>   ✅ localhost:3000/studio — accessible
>   ✅ Scott can now edit all content without a developer
>
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> CMS integration complete.
> Ready for deployment.
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 9 — Deployment & Vercel Environment Setup

### Objective
Deploy the site with Sanity to Vercel. Configure environment variables in Vercel. Verify Studio is accessible in production and content updates appear on the live site.

**Deliverable:** Live site at production URL with Sanity CMS fully operational.

---

### 9.1 — Add Sanity CORS Origin for Production

1. Go to **sanity.io/manage** → AcmeSign project → **API** tab → **CORS Origins**
2. Click **Add CORS origin**
3. Add your production URL: `https://acmesign.ca` (or Vercel preview URL)
4. Check **Allow credentials**
5. Click **Save**

Also add `http://localhost:3000` if not already there (for local development).

**Why this matters:** Sanity blocks API requests from unauthorized origins. Without adding your domain, the Studio embedded at `/studio` won't authenticate properly in production.

### 9.2 — Add Environment Variables to Vercel

In the Vercel dashboard → your project → **Settings** → **Environment Variables**, add:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | your project ID | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` | Production, Preview, Development |
| `SANITY_API_TOKEN` | your read token | Production, Preview |

> **Important:** `SANITY_API_TOKEN` is server-side only — do NOT prefix with `NEXT_PUBLIC_`.

### 9.3 — Create a Sanity Deploy Token (for Studio in Production)

The embedded Studio at `/studio` needs write access to create/edit documents. The read token you created in Phase 1 is not enough.

1. Sanity dashboard → AcmeSign → **API** → **Tokens** → **Add API token**
2. Name: `Studio Editor Token`
3. Permission: **Editor**
4. Copy the token

Add to Vercel environment variables:
| Key | Value |
|-----|-------|
| `SANITY_STUDIO_TOKEN` | the editor token |

Then update `sanity/sanity.config.ts` to use it:
```typescript
// The Studio embed handles auth through sanity.io login
// No token needed in sanity.config.ts — Sanity manages Studio auth separately
```

> **Note:** The embedded Studio authenticates Studio users through sanity.io accounts, not via the API token. The API token is only for the Next.js data fetching. Studio auth is separate.

### 9.4 — Deploy to Vercel

```bash
# Push all changes to GitHub
git add .
git commit -m "Add Sanity CMS integration"
git push origin main
```

Vercel auto-deploys on push if connected to GitHub. If not connected:
```bash
npx vercel --prod
```

### 9.5 — Add Sanity Webhook for Instant Revalidation (Optional but Recommended)

Currently the site revalidates content every 60 seconds. With a webhook, content changes in Studio appear on the live site immediately.

**In Next.js — create the webhook handler:**

`app/api/revalidate/route.ts`:
```typescript
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  // Revalidate all pages that use Sanity data
  revalidatePath('/', 'layout')

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
```

Add to `.env.local` and Vercel:
```env
SANITY_REVALIDATE_SECRET=a_long_random_string_you_choose
```

**In Sanity dashboard:**
1. Sanity dashboard → AcmeSign → **API** → **Webhooks** → **Add Webhook**
2. Name: `Vercel Revalidate`
3. URL: `https://acmesign.ca/api/revalidate?secret=your_secret_here`
4. Trigger on: **Create**, **Update**, **Delete**
5. Dataset: `production`
6. Click **Save**

Now every time Scott publishes a change in Studio, the live site updates instantly.

### 9.6 — Verify Production

1. Visit `https://acmesign.ca` — site loads with Sanity content
2. Visit `https://acmesign.ca/studio` — Studio loads (requires sanity.io login)
3. Edit a gallery item description in Studio → click Publish → verify change appears on live site within 60 seconds (or instantly if webhook is configured)

---

### PHASE 9 STOP ✋ — FINAL PHASE

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 9 COMPLETE — Deployment
> ACME SIGN CMS INTEGRATION — FULLY DEPLOYED
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
>
> DEPLOYMENT STATUS:
>   ✅ Vercel: deployed to [URL]
>   ✅ Environment variables: set in Vercel
>   ✅ CORS: production URL added to Sanity
>   ✅ Studio: accessible at [URL]/studio
>   ✅ Content edit test: change appears on live site
>   ✅ Webhook: [configured / not configured]
>
> WHAT SCOTT CAN NOW DO WITHOUT A DEVELOPER:
>   ✅ Add/edit/delete gallery projects
>   ✅ Add new blog posts
>   ✅ Update service descriptions
>   ✅ Add new testimonials
>   ✅ Update team members
>   ✅ Change contact info / hours
>   ✅ Upload photos directly to any content type
>
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Sanity CMS integration complete.
> Acme Sign & Graphics Co. website is fully operational.
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Appendix A — Scott's Content Editor Guide

### How to Log Into Studio

1. Go to `https://acmesign.ca/studio`
2. Click **Log in** — use your sanity.io account (the one you created during setup)
3. You are now in the Sanity Studio

### How to Add a Gallery Photo

1. Click **Gallery Item** in the left sidebar
2. Click the **pencil icon** to edit an existing item, OR click **+ New** to create one
3. Fill in: Title, Client, Category, Description
4. Click the image field → **Upload** — drag in your photo
5. Add alt text (short description of the photo — important for Google)
6. Click **Publish** (green button, top right)
7. The photo appears on the website within 60 seconds

### How to Write a Blog Post

1. Click **Blog Post** in the left sidebar
2. Click **+ New**
3. Fill in the title — the slug generates automatically
4. Write the excerpt (2–3 sentences for the blog listing)
5. Write the body in the rich text editor:
   - Highlight text → click **H2** for a section heading
   - Click the list icon for bullet points
   - Bold text with the **B** button
6. Upload a cover image
7. Set the Published Date
8. Click **Publish**

### How to Update Your Hours or Contact Info

1. Click **Site Settings** in the left sidebar
2. Edit the fields directly
3. Click **Publish**
4. Changes appear on the website within 60 seconds

---

## Appendix B — Troubleshooting

| Problem | Cause | Fix |
|---------|-------|-----|
| Studio shows blank page | CORS not configured | Add localhost/production URL to Sanity CORS origins |
| Images not loading | `cdn.sanity.io` not in next.config | Add to `remotePatterns` in `next.config.ts` |
| Content not updating | Revalidation not working | Restart dev server in development; wait 60s in production |
| TypeScript error on `urlFor()` | Missing `@sanity/image-url` types | Run `npm install @sanity/image-url` |
| "Cannot read property of null" on image | Image field empty in Sanity | Always guard: `image ? urlFor(image)... : undefined` |
| Studio auth loop | Sanity session expired | Clear browser cookies for sanity.io, log in again |
| Build fails with "fetch failed" | Missing env vars in Vercel | Check all 4 SANITY vars are set in Vercel dashboard |

---

## Appendix C — Content Type Reference

| Type | Count | Editable by Scott | Has Images |
|------|-------|-------------------|------------|
| Service | 8 | ✅ | ✅ Main + gallery |
| Gallery Item | 20+ | ✅ | ✅ One photo per item |
| Testimonial | 12 | ✅ | ❌ Text only |
| Team Member | 3 | ✅ | ✅ Headshot |
| Blog Post | 3+ | ✅ | ✅ Cover + inline |
| Site Settings | 1 | ✅ | ❌ Text only |

---

*Document prepared for Claude Code execution · Acme Sign & Graphics Co. Sanity CMS Integration*
*Stack: Next.js 16 App Router + Sanity Studio v3 + next-sanity + @portabletext/react*
*Total phases: 1–9 · Data types: 6 · Documents to migrate: 47*
*Strategy: Replace lib/mockData.ts incrementally — never break the running site*
