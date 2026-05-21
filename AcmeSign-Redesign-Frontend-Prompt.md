# AcmeSign.ca — Full Frontend Redesign Implementation Prompt
## Next.js 14 · Hardcoded · Phase-by-Phase Execution Guide
### For Claude Code · Acme Sign & Graphics Co. · Nova Scotia, Canada

---

> **For Claude Code:** Before executing any phase, read this entire document completely. Store the following as active memory:
>
> - **Project:** Acme Sign & Graphics Co. — full website redesign from scratch
> - **Current site:** WordPress + WPBakery at acmesign.ca — being completely replaced
> - **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
> - **Design language:** **Industrial Modern Vintage** — the 42-year heritage of a real Nova Scotia trade business, modernized with bold typography, parallax depth, dark steel sections, and an engaging editorial structure. NOT generic agency template. NOT startup SaaS. This is a *craftsman's business* with real history.
> - **Color tokens (never deviate):** see Section 0.4
> - **Font stack:** Display = `Bebas Neue`; Serif = `Playfair Display`; Sans = `Inter`; Mono = `JetBrains Mono`
> - **Lead action terminology:** "Get a Quote" — this is the primary CTA on every page
> - **Every phase ends with a STOP.** Provide a full report. Ask: **"Continue with the next phase?"** — only proceed on explicit **"Yes, Proceed."**
> - No animated emojis. Use `react-icons` or inline SVG only.
> - No generic template aesthetics. Every component must feel like it was designed for *this specific business.*
> - Backend: **static/hardcoded data only** — all service descriptions, gallery items, team info, and testimonials are hardcoded in `lib/mockData.ts`. Architecture must be ready for a future CMS swap (Sanity or custom API).

---

## Memory Anchors (Commit Before Starting)

```
PROJECT:      Acme Sign & Graphics Co. — acmesign.ca full Next.js redesign
CLIENT:       Scott — 42 years in the sign business, Dartmouth Nova Scotia
FRAMEWORK:    Next.js 14 App Router + TypeScript + Tailwind CSS
DATA:         100% hardcoded mock data — no backend yet
PAGES:        Home, Services (hub), 8 Service Detail pages, Vehicle Wraps,
              LED Signs, Gallery, About Us, Get a Quote, Contact, Artwork Guidelines
DESIGN:       Industrial Modern Vintage — bold, confident, craftsman-grade
              NOT a template. NOT SaaS. A real Atlantic Canada trade business.
HERO:         Full-viewport, parallax, bold — Scott's best work front and center
GALLERY:      Filterable, full-size, categorized by service type
QUOTE FORM:   Multi-step, pre-qualifying — the primary conversion goal
NAV:          Sticky, simplified (7 items max), always-visible "Get a Quote" CTA
ABOUT:        42 years story, team, service area — trust is the product
PHASE_GATE:   STOP after each phase. Report. Ask "Continue with the next phase?"
              Never auto-proceed. Wait for "Yes, Proceed."
```

---

## What the Current Site Gets Wrong (Design Audit Summary)

> Claude Code must understand these problems and solve every one of them in the rebuild.

| Problem | Current Site | Fix in Redesign |
|---|---|---|
| Navigation | 11 dropdown items — overwhelming | Max 7 nav items, simplified structure |
| Hero | Text-heavy, no strong visual | Full-viewport parallax hero with best work photo |
| Lead gen | 4-field generic contact form | Multi-step quote form with service selector |
| Trust signals | None — 42 years not mentioned anywhere | Hero trust bar, about page, stats strip |
| Gallery | 150×150px thumbnails, unfiltered | Full-size filterable grid by service |
| Blog | Off-topic posts (Pennsylvania grants) | Deleted — replaced with 3 local SEO articles |
| About Us | Doesn't exist | Full page — Scott's story, team, 42 years |
| Contact email | Gmail address | Placeholder for professional @acmesign.ca |
| SEO titles | "Home \| Acme Sign" — no location | "Sign Company Halifax NS \| Acme Sign & Graphics" |
| Mobile | Not designed for phones | Mobile-first throughout |
| Performance | WPBakery bloat, no image optimization | Next.js + next/image + lazy loading |
| Logo | JPG (blurry on retina) | SVG wordmark component |

---

## Design Philosophy

**The concept:** Acme Sign has been making signs in Atlantic Canada for 42 years. The redesign must communicate confidence, craft, and longevity — not trend-chasing. The site should feel like walking into a well-run sign shop: bold, purposeful, no wasted space. But modernized — with parallax depth, cinematic section transitions, and the kind of typography that makes a first impression as strong as the signs Scott makes.

**"Industrial Modern Vintage"** means:
- Steel and ink color palette — dark, authoritative, punctuated with signal yellow
- Bold condensed display type (`Bebas Neue`) for impact headlines
- Serif (`Playfair Display`) for trust-building editorial moments (About Us, testimonials)
- Clean grid layouts that don't feel cramped — generous white space in light sections
- Parallax scrolling on the hero and key image sections
- Full-bleed photography sections that break the grid intentionally
- Micro-interactions that reward attention without demanding it

---

## Project Structure (Target)

```
acme-sign-redesign/
├── app/
│   ├── layout.tsx                    # Root layout: Nav, Footer, Quote drawer
│   ├── page.tsx                      # Home
│   ├── services/
│   │   ├── page.tsx                  # Services hub
│   │   ├── channel-signs/page.tsx
│   │   ├── dimensional-signs/page.tsx
│   │   ├── illuminated-signs/page.tsx
│   │   ├── safety-parking-signs/page.tsx
│   │   ├── window-graphics/page.tsx
│   │   ├── banners/page.tsx
│   │   ├── decals-stickers/page.tsx
│   │   └── apparel/page.tsx
│   ├── vehicle-wraps/page.tsx
│   ├── led-signs/page.tsx
│   ├── gallery/page.tsx
│   ├── about/page.tsx
│   ├── quote/page.tsx                # Multi-step quote form
│   ├── contact/page.tsx
│   ├── artwork-guidelines/page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── nav/
│   │   ├── Nav.tsx
│   │   ├── NavLinks.tsx
│   │   ├── NavActions.tsx
│   │   ├── ServicesDropdown.tsx
│   │   └── MobileDrawer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WrapShowcase.tsx
│   │   ├── StatsSection.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── LEDSection.tsx
│   │   └── CTABanner.tsx
│   ├── services/
│   │   ├── ServiceHero.tsx
│   │   ├── ServiceFeatures.tsx
│   │   ├── ServiceGallery.tsx
│   │   └── ServiceCTA.tsx
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   ├── GalleryFilter.tsx
│   │   ├── GalleryCard.tsx
│   │   └── GalleryLightbox.tsx
│   ├── quote/
│   │   ├── QuoteProgress.tsx
│   │   ├── Step1Service.tsx
│   │   ├── Step2Details.tsx
│   │   ├── Step3Contact.tsx
│   │   └── QuoteConfirmed.tsx
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── Eyebrow.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ParallaxLayer.tsx
│   │   ├── ImagePlate.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceAreaMap.tsx
│   │   └── LocalSEOSchema.tsx
│   └── about/
│       ├── AboutHero.tsx
│       ├── FounderSection.tsx
│       ├── TeamSection.tsx
│       ├── TimelineSection.tsx
│       └── ServiceAreaSection.tsx
├── lib/
│   ├── mockData.ts                   # All hardcoded content
│   ├── types.ts                      # TypeScript interfaces
│   └── utils.ts                      # cn(), formatPhone(), slugify()
├── hooks/
│   ├── useParallax.ts
│   ├── useMobileMenu.ts
│   └── useQuoteForm.ts
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   │   ├── hero/                     # Hero background images (placeholders)
│   │   ├── gallery/                  # Gallery photos (placeholders)
│   │   ├── services/                 # Service page images
│   │   └── team/                     # Team photos
│   └── fonts/
├── .env.local.example
├── tailwind.config.ts
├── next.config.ts
└── vercel.json
```

---

## Phase 0 — Project Bootstrap & Design System

### Objective
Initialize the Next.js project, install all dependencies, configure Tailwind with the full brand token system, set up global fonts, CSS custom properties, TypeScript types, and all hardcoded mock data.

**Deliverable:** Running dev server with design system fully in place. No visible UI yet — just the foundation.

---

### 0.1 — Initialize Project

```bash
npx create-next-app@latest acme-sign-redesign \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd acme-sign-redesign

npm install \
  framer-motion \
  react-icons \
  zustand \
  clsx \
  tailwind-merge \
  react-intersection-observer \
  react-hook-form \
  zod \
  @hookform/resolvers
```

### 0.2 — Configure `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary surfaces
        steel: {
          DEFAULT: '#0D0F11',   // Deepest — nav, hero dark sections
          dark:    '#141618',   // Dark canvas sections
          mid:     '#1E2124',   // Cards on dark bg
          light:   '#2A2D31',   // Borders on dark
        },
        iron: {
          DEFAULT: '#3A3D42',   // Mid-dark sections
          soft:    '#5A5E65',   // Secondary text on light
          rule:    'rgba(58,61,66,0.15)', // Hairline borders on light
        },
        chalk: {
          DEFAULT: '#F4F2EE',   // Page background — warm off-white
          mid:     '#E8E4DC',   // Section backgrounds
          deep:    '#D6D0C4',   // Borders on light
        },
        signal: {
          DEFAULT: '#F5C518',   // Primary accent — signal yellow (Nova Scotia construction)
          dark:    '#D4A800',   // Hover states
          light:   '#FBD84A',   // Light variant
          muted:   'rgba(245,197,24,0.12)', // Tinted backgrounds
        },
        crimson: '#8C1F1F',     // Error states, alerts
        atlantic: '#1A3A5C',   // Secondary accent — Atlantic ocean blue
        forest:   '#1E3A2A',   // Success states, check marks
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Impact"', '"Arial Narrow"', 'sans-serif'],
        serif:   ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans:    ['"Inter"', 'system-ui', '-apple-system', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Display type — Bebas Neue
        'display-hero':    ['clamp(5rem, 12vw, 11rem)', { lineHeight: '0.92', letterSpacing: '0.02em' }],
        'display-xl':      ['clamp(3.5rem, 7vw, 7rem)',  { lineHeight: '0.94', letterSpacing: '0.02em' }],
        'display-lg':      ['clamp(2.5rem, 5vw, 5rem)',  { lineHeight: '0.96', letterSpacing: '0.02em' }],
        'display-md':      ['clamp(2rem, 4vw, 3.5rem)',  { lineHeight: '0.97', letterSpacing: '0.02em' }],
        // Serif — Playfair Display
        'serif-hero':      ['clamp(2rem, 4vw, 3.5rem)',  { lineHeight: '1.15' }],
        'serif-lg':        ['clamp(1.5rem, 3vw, 2.5rem)',{ lineHeight: '1.2'  }],
        'serif-md':        ['1.35rem',                   { lineHeight: '1.45' }],
        // Eyebrow — JetBrains Mono
        eyebrow:           ['11px',                      { lineHeight: '1', letterSpacing: '0.22em' }],
        'eyebrow-lg':      ['13px',                      { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      spacing: {
        section:    '6rem',
        'section-sm':'4rem',
        container:  '1280px',
      },
      borderRadius: {
        btn:  '2px',
        card: '3px',
        pill: '100px',
      },
      boxShadow: {
        'card':       '0 2px 12px rgba(13,15,17,0.08)',
        'card-hover': '0 16px 40px rgba(13,15,17,0.18)',
        'cta':        '0 8px 24px rgba(245,197,24,0.25)',
        'cta-hover':  '0 12px 32px rgba(245,197,24,0.35)',
        'dark':       '0 2px 16px rgba(13,15,17,0.6)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'marquee':     'marquee 28s linear infinite',
        'fade-up':     'fadeUp 0.55s ease forwards',
        'fade-in':     'fadeIn 0.35s ease forwards',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
```

### 0.3 — Configure `styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── CSS Custom Properties ── */
:root {
  --steel:        #0D0F11;
  --steel-dark:   #141618;
  --steel-mid:    #1E2124;
  --steel-light:  #2A2D31;
  --iron:         #3A3D42;
  --iron-soft:    #5A5E65;
  --chalk:        #F4F2EE;
  --chalk-mid:    #E8E4DC;
  --chalk-deep:   #D6D0C4;
  --signal:       #F5C518;
  --signal-dark:  #D4A800;
  --atlantic:     #1A3A5C;

  --font-display: 'Bebas Neue', 'Impact', 'Arial Narrow', sans-serif;
  --font-serif:   'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-sans:    'Inter', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
  --font-mono:    'JetBrains Mono', 'IBM Plex Mono', ui-monospace, Menlo, monospace;
}

@layer base {
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

  body {
    background-color: var(--chalk);
    color: var(--iron);
    font-family: var(--font-sans);
    font-size: 17px;
    line-height: 1.65;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    letter-spacing: 0.02em;
    line-height: 0.95;
  }

  /* Selection */
  ::selection {
    background-color: var(--signal);
    color: var(--steel);
  }

  /* Focus ring */
  :focus-visible {
    outline: 2px solid var(--signal);
    outline-offset: 3px;
  }
}

@layer components {
  /* Section containers */
  .container-site {
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  /* Dark canvas sections */
  .canvas-dark {
    background-color: var(--steel-dark);
    color: #C8C4BC;
  }
  .canvas-dark h1,
  .canvas-dark h2,
  .canvas-dark h3 {
    color: #F0EDE6;
  }
  .canvas-dark .eyebrow-label {
    color: var(--signal);
  }

  /* Eyebrow label */
  .eyebrow-label {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--signal-dark);
  }

  /* Signal yellow accent line — use as section top-border or decorative bar */
  .accent-bar {
    display: block;
    width: 3rem;
    height: 3px;
    background-color: var(--signal);
    margin-bottom: 1.25rem;
  }
  .accent-bar-full {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--signal);
  }

  /* Diagonal texture overlay — use on hero and dark sections */
  .texture-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -45deg,
      rgba(245,197,24,0.025) 0px,
      rgba(245,197,24,0.025) 1px,
      transparent 1px,
      transparent 10px
    );
    pointer-events: none;
  }

  /* Image placeholder */
  .img-plate {
    background-color: var(--chalk-mid);
    background-image: repeating-linear-gradient(
      45deg,
      rgba(58,61,66,0.06) 0px,
      rgba(58,61,66,0.06) 1px,
      transparent 1px,
      transparent 9px
    );
  }
  .img-plate-dark {
    background-color: var(--steel-mid);
    background-image: repeating-linear-gradient(
      45deg,
      rgba(245,197,24,0.05) 0px,
      rgba(245,197,24,0.05) 1px,
      transparent 1px,
      transparent 9px
    );
  }

  /* Stat number style */
  .stat-number {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    letter-spacing: 0.02em;
    line-height: 0.9;
    color: var(--signal);
  }
  .stat-label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--iron-soft);
    margin-top: 0.5rem;
  }
}

@layer utilities {
  .text-balance { text-wrap: balance; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
}
```

### 0.4 — Root Layout Fonts (`app/layout.tsx` — font loading only, full component in Phase 1)

```typescript
import { Bebas_Neue, Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})
```

Apply all four font variables to `<html>` tag. Update `tailwind.config.ts` fontFamily to use `var(--font-bebas)` etc.

### 0.5 — TypeScript Types (`lib/types.ts`)

```typescript
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
```

### 0.6 — Mock Data (`lib/mockData.ts`)

Hardcode all content for the following:

**8 Services** (matching current site services):
1. Channel Signs — "Individual letters or logos cut from aluminum or acrylic, illuminated or non-illuminated. The gold standard of storefront signage for Atlantic Canadian businesses."
2. Dimensional Signs — "Three-dimensional letters, logos and shapes that create depth, shadow and presence. Cut from foam, acrylic, aluminum, or HDU."
3. Illuminated Signs — "Signs that work after dark. Backlit, halo-lit, internally lit. If it needs to be seen at night, we build it to be seen."
4. Safety & Parking Signs — "Reflective regulatory, directional and parking control signs. Compliant with Nova Scotia standards. Fast turnaround."
5. Window Graphics — "Perforated vinyl, frosted film, cut vinyl lettering and full-colour digital prints for any glass surface."
6. Banners — "Heavy-duty vinyl banners, mesh banners, retractable banner stands. Indoor and outdoor. Hemmed and grommeted."
7. Decals & Stickers — "Die-cut, full-colour, kiss-cut. From single units to thousands. Labels, product decals, promotional stickers."
8. Apparel — "Screen printing and embroidery for uniforms, workwear, promotional apparel. Minimum orders apply."

**20 Gallery Items** across all categories — use realistic Nova Scotia business names as clients:
- Categories: vehicle-wraps (6), led-signs (3), channel-signs (3), dimensional (2), illuminated (2), window-graphics (2), banners (1), apparel (1)
- Example clients: "Cyclesmith Halifax", "EHS Pride Campaign", "Atlantic Fabrics", "Ross Farm Museum", "Beautiful Baths NS", "Surfside Brewing", "Ace Communications", "New Scotland Brewing", etc.
- Use `/images/gallery/placeholder-[category]-[n].jpg` as image paths

**5 Testimonials:**
1. "After 15 years of working with different sign companies across Halifax, Acme is the only one that consistently delivers exactly what we discussed. No surprises, no excuses — just a great sign, on time." — Mark T., Cyclesmith Halifax
2. "They wrapped our entire fleet of 12 vehicles in two weeks. Every one came out perfect. The exposure we get on Halifax streets is incredible." — Jennifer R., Atlantic Seafoods Ltd.
3. "Scott and his team have been making our signs for over a decade. They know our brand better than most of our own staff do." — Dave M., New Scotland Brewing Co.
4. "The LED sign they installed for us has paid for itself three times over in new foot traffic. Best investment we've made for the business." — Father Michael O., St. Brendan's Parish, Dartmouth
5. "I gave them a napkin sketch and they came back with something better than I imagined. That's the Acme difference." — Sarah K., The Wool Room, Bedford

**3 Blog Posts** (local SEO focused):
1. slug: `best-sign-types-for-halifax-businesses` — "Which Sign Type Is Right for Your Halifax Business?" — 600 words on channel vs dimensional vs illuminated
2. slug: `vehicle-wrap-roi-atlantic-canada` — "The Real ROI of Vehicle Wraps for Atlantic Canadian Businesses" — 500 words
3. slug: `led-sign-buying-guide-nova-scotia` — "LED Sign Buying Guide for Nova Scotia Business Owners" — 700 words

**Team:** Scott (Founder, 42 years), plus 2 placeholder team members (Designer, Production Manager)

**Stats:**
- `42` — Years in Business
- `1000+` — Projects Completed
- `Atlantic Canada` — Service Area
- `48hr` — Average Quote Turnaround

**Service Areas:** Halifax, Dartmouth, Bedford, Sackville, Truro, Wolfville, New Minas, Kentville, Digby, Yarmouth, Pictou, Antigonish, New Glasgow, Sydney, Cape Breton, Moncton, Amherst, New Brunswick, Prince Edward Island

### 0.7 — Utilities (`lib/utils.ts`)

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const formatPhone = (phone: string) => phone // returns as-is, display logic in component

export const truncate = (str: string, length: number) =>
  str.length > length ? str.substring(0, length) + '…' : str
```

### 0.8 — Parallax Hook (`hooks/useParallax.ts`)

```typescript
'use client'
import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}px`, `${speed * 100}px`]
  )
  return { ref, y }
}
```

### 0.9 — Environment Variables (`.env.local.example`)

```env
# Site config
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Acme Sign & Graphics Co.

# Contact (update when professional email is set up)
NEXT_PUBLIC_CONTACT_EMAIL=acmesign01@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+19024811007
NEXT_PUBLIC_CONTACT_ADDRESS=25 Raddall Avenue, Unit 4, Dartmouth, Nova Scotia B3B 1L4

# Future CMS (TBA — architecture is ready)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_API_URL=

# Quote form (future — connect to email service or CRM)
NEXT_PUBLIC_FORM_ENDPOINT=
```

---

### PHASE 0 STOP ✋

> **Claude Code must:**
> 1. Complete ALL steps 0.1 through 0.9.
> 2. Run `npm run dev` — confirm it starts cleanly with zero errors.
> 3. Open browser DevTools — confirm Tailwind custom colors resolve (check `--signal`, `--steel-dark`).
> 4. Confirm all four fonts load correctly in DevTools Network tab.
> 5. Output this report:
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 0 COMPLETE — Project Bootstrap & Design System
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ Files created: [list every file]
> ✅ Dependencies installed: [list with versions]
> ✅ Dev server: Running at localhost:3000
> ✅ Tailwind tokens: Verified in DevTools
> ✅ Fonts loading: Bebas Neue, Playfair Display, Inter, JetBrains Mono
> ✅ Mock data: [N] services, [N] gallery items, [N] testimonials, [N] blog posts
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```
>
> **Wait for "Yes, Proceed" before continuing.**

---

## Phase 1 — Shared Components & Root Layout

### Objective
Build every reusable component used across all pages: Nav, Footer, Button, Eyebrow, Breadcrumb, ImagePlate, SectionHeading, and the Quote CTA drawer. Wire them into the Root Layout.

**Deliverable:** Full shell visible at localhost:3000 — sticky nav, footer, all shared primitives ready.

---

### 1.1 — Root Layout (`app/layout.tsx`)

```typescript
// Wire together: fonts, Nav, Footer, metadata, LocalSEOSchema
// Body classes: 'bg-chalk text-iron font-sans antialiased min-h-screen'
// Metadata: default title template, description for SEO
// LocalSEOSchema: JSON-LD Organization schema (see 1.9)
```

**Metadata:**
```typescript
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Sign & Graphics — Halifax NS',
    default: 'Sign Company Halifax NS | Acme Sign & Graphics Co.',
  },
  description: 'Acme Sign & Graphics Co. — 42 years serving Atlantic Canada. Vehicle wraps, LED signs, channel signs, dimensional signs, window graphics, banners and apparel. Dartmouth, Nova Scotia.',
  keywords: ['sign company halifax ns', 'vehicle wraps nova scotia', 'led signs dartmouth', 'channel signs atlantic canada', 'acme sign graphics'],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Acme Sign & Graphics Co.',
  },
}
```

### 1.2 — Nav Component (`components/nav/Nav.tsx`)

**Design spec — this must be exceptional:**

**Structure:**
- Sticky, `top: 0`, `z-index: 50`
- Default state: semi-transparent `bg-steel/90 backdrop-blur-md`
- On scroll (past 80px): fully opaque `bg-steel` — use `useEffect` + `window.addEventListener('scroll')`
- Height: 72px desktop, 64px mobile
- 3-column layout: `grid-cols-[1fr_auto_1fr]` — Logo | Nav Links | Actions
- Left border accent: `3px left border` in signal yellow on the logo wordmark

**Logo / Brand mark:**
- `ACME SIGN` — Bebas Neue, 28px, chalk white
- `& GRAPHICS CO.` — same font, 16px, signal yellow
- Sub-label: `EST. 1982 · DARTMOUTH, NS` — JetBrains Mono, 9px, iron-soft, letter-spacing wide
- Entire logo is a `<Link href="/">` component
- Left of logo: 3px × 28px signal yellow vertical bar

**Nav Links (desktop only, ≥1024px):**
- Items: `Home` · `Services ▾` · `Vehicle Wraps` · `LED Signs` · `Gallery` · `About` · `Contact`
- Font: Inter, 14px, 500 weight, chalk-60% color
- Hover: chalk white + signal yellow 2px bottom underline slides in (CSS `scaleX 0→1` transform)
- Active page: chalk white + persistent signal yellow underline
- `Services` triggers `ServicesDropdown` on hover (desktop) and click (mobile)

**Services Dropdown (`components/nav/ServicesDropdown.tsx`):**
- Positioned absolutely below nav, `bg-steel-dark`, 2-column grid of 8 services
- Each item: service name (Inter 14px chalk) + one-line description (Inter 12px iron-soft)
- Signal yellow dot left of active/hovered item
- Smooth height animation (Framer Motion `AnimatePresence`)
- Close on mouse-leave after 200ms debounce

**Nav Actions (right side):**
- Phone number: `(902) 481-1007` — JetBrains Mono, 13px, iron-soft (desktop only, ≥1280px)
- `Get a Quote` button — signal yellow bg, steel text, Bebas Neue 16px, `px-6 py-2`, 2px radius
  - Hover: `bg-signal-dark shadow-cta-hover -translate-y-px`
- Mobile: hamburger icon (BiMenu, 26px, chalk) replacing nav links

**Mobile Drawer (`components/nav/MobileDrawer.tsx`):**
- Slides in from left — Framer Motion `x: '-100%' → x: 0`, 320px width
- `bg-steel-dark` background, dark scrim overlay behind
- Logo at top, all nav links stacked, Services accordion expands inline
- `Get a Quote` primary button at bottom, full-width
- Close button top-right (BiX icon)

### 1.3 — Shared Button (`components/shared/Button.tsx`)

```typescript
// Props: variant, size, children, onClick, href, type, className, disabled
```

Variants:
- `primary` — `bg-signal text-steel font-display text-[18px] tracking-wider` · hover `bg-signal-dark shadow-cta -translate-y-px`
- `primary-dark` — same but designed for use on light backgrounds (same colors, extra shadow)
- `secondary` — `bg-transparent border-2 border-signal text-signal` · hover `bg-signal text-steel`
- `ghost` — `bg-transparent border border-chalk-deep text-iron` · hover `bg-chalk-mid`
- `ghost-dark` — `bg-transparent border border-steel-light text-chalk` · hover `bg-steel-mid`

All buttons:
- `min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] rounded-btn transition-all duration-200 uppercase`
- Block: `w-full min-h-[60px]`
- Small: `min-h-[44px] px-5 text-[16px]`
- If `href` provided → render as `<Link>`. Otherwise `<button>`.
- Loading state: spinner icon replaces text content

### 1.4 — Eyebrow (`components/shared/Eyebrow.tsx`)

```typescript
// Props: children, variant? ('dark' | 'light' | 'signal'), className?
```

- Always: JetBrains Mono, 11px, 500, uppercase, 0.22em tracking
- `dark` (default, for light sections): `text-iron-soft`
- `light` (for dark canvas sections): `text-signal`
- `signal` (emphasis): `text-signal-dark`
- Preceded by a 2px × 1.5rem signal yellow bar if `showBar` prop is true

### 1.5 — Section Heading (`components/shared/SectionHeading.tsx`)

```typescript
// Props: eyebrow?, heading, subheading?, align? ('left' | 'center'), light?
```

- Eyebrow: `<Eyebrow>` component
- Heading: Bebas Neue, display-lg size, steel (or chalk if `light`)
- Subheading: Inter 17px, iron-soft (or chalk-60% if `light`), max-width 52ch
- Bottom signal accent bar if `align === 'left'`

### 1.6 — Image Plate (`components/shared/ImagePlate.tsx`)

```typescript
// Props: src?, alt, aspectRatio, dark?, caption?, className?, priority?
```

- If `src`: `next/image` with `object-cover`
- If no `src`: render `.img-plate` or `.img-plate-dark` placeholder div
- Aspect ratios: `'16/9' | '4/3' | '3/2' | '1/1' | '3/4' | '9/16'`
- `caption`: mono label pinned bottom-left, semi-transparent background

### 1.7 — Breadcrumb (`components/shared/Breadcrumb.tsx`)

```typescript
// Props: crumbs: Array<{ label: string, href?: string }>
```

- JetBrains Mono, 10px, uppercase, 0.18em tracking, iron-soft
- Separator: ` / ` in same style
- Last crumb: iron (darker, current page)
- Full JSON-LD BreadcrumbList schema injected as `<script type="application/ld+json">`

### 1.8 — Footer (`components/shared/Footer.tsx`)

**Design spec:**

**Top strip (dark canvas):**
- Left: `SERVING ATLANTIC CANADA SINCE 1982` in Bebas Neue 18px signal yellow
- Right: phone number + email in chalk
- Signal yellow full-width border bottom

**Main footer (steel-dark bg):**
4-column grid desktop, 2-column tablet, 1-column mobile:

- **Col 1 — Brand:**
  - Logo mark (Bebas Neue)
  - Short brand description: "42 years of signs, wraps, and graphics for businesses across Atlantic Canada. Family-owned, Dartmouth-based, still answering the phone ourselves."
  - Address in mono, 11px
  - Hours: `Mon–Fri · 8:30 AM – 5:00 PM`

- **Col 2 — Services:**
  - Eyebrow: "SERVICES"
  - Links: Channel Signs, Dimensional Signs, Illuminated Signs, Vehicle Wraps, LED Signs, Window Graphics, Banners & Decals, Apparel

- **Col 3 — Company:**
  - Eyebrow: "COMPANY"
  - Links: About Us, Gallery, Our Work, Blog, Artwork Guidelines, Sign Maintenance

- **Col 4 — Get Started:**
  - Eyebrow: "GET STARTED"
  - `Get a Quote` primary button (full-width)
  - Contact info block
  - Google Maps embed link: "Find our shop →"

**Bottom micro-bar:**
- `© 2026 ACME SIGN & GRAPHICS CO. · DARTMOUTH, NOVA SCOTIA · ALL RIGHTS RESERVED.`
- Left: copyright (mono 10px iron-soft)
- Right: `WEBSITE BY [SIXELEVEN]` (mono 10px iron-soft) — placeholder for agency credit

### 1.9 — Local SEO Schema (`components/shared/LocalSEOSchema.tsx`)

```typescript
// Renders <script type="application/ld+json"> in <head>
// Schema type: LocalBusiness (sign company)
```

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Acme Sign & Graphics Co.",
  "url": "https://acmesign.ca",
  "telephone": "+1-902-481-1007",
  "email": "acmesign01@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "25 Raddall Avenue, Unit 4",
    "addressLocality": "Dartmouth",
    "addressRegion": "Nova Scotia",
    "postalCode": "B3B 1L4",
    "addressCountry": "CA"
  },
  "openingHours": "Mo-Fr 08:30-17:00",
  "areaServed": ["Halifax", "Dartmouth", "Nova Scotia", "Atlantic Canada"],
  "description": "Sign company serving Atlantic Canada for 42 years. Vehicle wraps, LED signs, channel signs, dimensional signs and more.",
  "foundingYear": "1982",
  "priceRange": "$$"
}
```

---

### PHASE 1 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 1 COMPLETE — Shared Components & Root Layout
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ Components built: [list every file]
> ✅ Nav: sticky, scroll behavior verified
> ✅ Services dropdown: opens on hover, closes on mouse-leave
> ✅ Mobile drawer: opens/closes, all links present
> ✅ "Get a Quote" button: present in nav + footer
> ✅ Footer: 4-column layout, all links correct
> ✅ LocalSEO schema: verified in page source
> ✅ Fonts rendering: Bebas Neue confirmed on headings
> ⚠️  Deviations: [any, with reason]
>
> Routes available so far: / (empty shell with nav + footer)
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 2 — Home Page (Full)

### Objective
Build the complete homepage — this is the centrepiece of the redesign. All sections, parallax scrolling, scroll-triggered animations, and live interactivity. This page must immediately communicate "42-year Atlantic Canadian sign company" in its first 3 seconds.

**Deliverable:** Full homepage at `/` with all 8 sections, parallax hero, animated stats, gallery preview, and testimonials.

---

### 2.1 — Hero Section (`components/home/HeroSection.tsx`)

**This is the most important component. Build it with exceptional care.**

**Concept:** Full-viewport. Dark steel background. Best work photography fills the frame. Bold Bebas Neue headline at cinematic scale. This is Scott's sign work — front and center. The feeling should be: walking into a shop run by someone who is very good at what they do and has been doing it for a long time.

**Structure:**
- `min-h-screen` — fills the full viewport height
- Background: `img-plate-dark` placeholder until real photography. Add a dark gradient overlay:
  `linear-gradient(to right, rgba(13,15,17,0.92) 0%, rgba(13,15,17,0.70) 50%, rgba(13,15,17,0.30) 100%)`
- Add `.texture-overlay` diagonal hatch on top of everything

**Parallax layer:**
- The background image translates at 40% of scroll speed (slower = depth)
- Use `useParallax(0.4)` hook on the background `motion.div`
- The foreground content translates at 10% (barely moves — stays readable)

**Left content column (60% width desktop, full width mobile):**

*Top badge:*
- Signal yellow pill badge: `EST. 1982 · DARTMOUTH, NS` — JetBrains Mono 10px, steel bg with signal border

*Main headline (Bebas Neue, display-hero size):*
```
MAKE YOUR
BUSINESS
IMPOSSIBLE
TO IGNORE.
```
Each line stagger-animates in on load (Framer Motion, 80ms between lines).

*Subheadline:*
- Playfair Display italic, 22px chalk-80%: *"42 years of signs, wraps, and graphics for Atlantic Canadian businesses. Built to last. Designed to be seen."*

*CTA row:*
- `Get a Quote` primary signal button + `See Our Work` ghost-dark button
- Below buttons: 3 inline trust signals in JetBrains Mono 10px: `✓ 42 YEARS EXPERIENCE` · `✓ ATLANTIC CANADA` · `✓ FREE CONSULTATION`

**Right side (40% width desktop):**
- Large `ImagePlate` component (aspect 3/4) — placeholder for hero photography
- Caption chip bottom-left: `VEHICLE WRAP · DARTMOUTH NS · ACME SIGN`
- Floating stat card overlay (bottom-right of image):
  - `bg-signal text-steel` card
  - `1000+` in Bebas Neue 36px
  - `PROJECTS COMPLETED` in JetBrains Mono 9px

**Scroll indicator (bottom center):**
- Animated down-chevron, chalk-60%, `animate-bounce`
- `SCROLL` in JetBrains Mono 9px below it

### 2.2 — Trust Strip (`components/home/TrustStrip.tsx`)

Full-width bar immediately below hero. Signal yellow background, steel text.

- 4 items in a row (2×2 on mobile), centered, dividers between:
  - `42 YEARS` · `IN BUSINESS`
  - `1000+` · `PROJECTS COMPLETED`
  - `ATLANTIC` · `CANADA WIDE`
  - `FREE` · `CONSULTATIONS`
- Each item: Bebas Neue number/emphasis, JetBrains Mono label below
- No padding waste — this strip is a confident band of credibility

### 2.3 — Services Grid (`components/home/ServicesGrid.tsx`)

**Design spec:** "What we do, clearly stated."

- Section heading (left-aligned): Eyebrow "OUR SERVICES" + Bebas Neue heading "EVERYTHING YOUR BUSINESS NEEDS TO BE SEEN."
- Right of heading: Inter 16px iron-soft description + "View All Services →" signal link
- Grid: 4-column desktop, 2-column tablet, 1-column mobile
- 8 service cards, each:
  - `bg-chalk-mid` card, `border border-chalk-deep`, card border-radius
  - Large react-icon (40px, signal yellow) — use relevant icons from `react-icons/bi` or `react-icons/fi`
  - Service name: Bebas Neue 22px steel
  - 2-line description: Inter 13px iron-soft
  - `Learn more →` signal link at bottom
  - Hover: card lifts (`shadow-card-hover -translate-y-1`), signal yellow left border appears (3px)
  - Transition: 250ms all

Service icons mapping:
- Channel Signs → `BiStore`
- Dimensional Signs → `BiCube`
- Illuminated Signs → `BiSun`
- Safety Signs → `BiShield`
- Window Graphics → `BiWindows`
- Banners → `BiBanner`
- Decals → `BiSticker` (or closest)
- Apparel → `BiShirt`

### 2.4 — Vehicle Wrap Showcase (`components/home/WrapShowcase.tsx`)

**Design spec:** A full-bleed cinematic section that breaks the page grid intentionally.

- Dark canvas section (`.canvas-dark`) — full-width, no container padding on the image side
- Asymmetric split: left 55% = large `ImagePlate` (dark, aspect 16/9) with parallax; right 45% = editorial text
- Right column:
  - Eyebrow: "YOUR BRAND. IN MOTION."
  - Bebas Neue headline (display-xl): "THE MOST SEEN SIGN YOUR BUSINESS WILL EVER HAVE."
  - Body: Inter 17px canvas-muted: "A vehicle wrap works while you drive to a meeting, while you're parked for lunch, and at 2 in the morning when you're home and the van is in the lot. That's advertising that never clocks out."
  - Two stats inline: `72%` MORE NOTICED THAN STATIC SIGNS · `4-6 YEARS` WRAP LIFESPAN
  - `See Our Wraps` primary button + "Request a wrap quote →" ghost-dark button

### 2.5 — Stats Section (`components/home/StatsSection.tsx`)

**Design spec:** Dark steel section, full-width, 4 large animated stats.

- Background: `bg-steel-dark` with `.texture-overlay` diagonal hatch
- Signal yellow accent bar full-width at top (2px)
- 4-column grid of stat blocks:
  - `42` — Bebas Neue clamp 4.5rem, signal yellow + `YEARS IN BUSINESS` in mono 11px chalk
  - `1,000+` — same style + `PROJECTS COMPLETED`
  - `15+` — `ATLANTIC COMMUNITIES SERVED`
  - `48HR` — `AVERAGE QUOTE TURNAROUND`
- Stats animate count-up when scrolled into view (use `react-intersection-observer` + `useState` counter with `setInterval`)
- Bottom of section: Playfair Display italic quote in chalk-60%, centered: *"We've been making signs in Nova Scotia since before most of our competitors were incorporated."*

### 2.6 — Gallery Preview (`components/home/GalleryPreview.tsx`)

**Design spec:** Show 6 of the best gallery items in a bento-style grid.

- Section heading (centered): Eyebrow "OUR WORK" + Bebas Neue "42 YEARS OF ATLANTIC CANADIAN SIGNS."
- Subheading: "From a single vehicle wrap to a full building identification package — browse our recent work."
- `See Full Gallery →` signal link right-aligned

**Bento grid (desktop):**
```
[ Large item — vehicle wrap, 2 cols wide, 2 rows tall ] [ Item 2 — 1 col ] [ Item 3 — 1 col ]
[ same large ]                                           [ Item 4 — 1 col ] [ Item 5 — 1 col ]
[ Item 6 — 2 cols wide, 1 row ] [ same Item 6 ]
```
- On tablet: 2-column equal grid
- On mobile: 1-column stack

Each gallery card:
- `ImagePlate` fills card, dark gradient overlay at bottom
- Service category badge top-right (signal yellow pill, mono 10px)
- Client name + service description fade in on hover (Framer Motion opacity 0→1)
- Entire card is a link to `/gallery`

### 2.7 — LED Signs Section (`components/home/LEDSection.tsx`)

**Design spec:** Highlight the LED Signs service with a visually electric feel.

- Light parchment chalk background — breaks the dark rhythm
- Asymmetric: left 45% text, right 55% large dark `ImagePlate` with parallax
- Left column:
  - Eyebrow: "PROGRAMMABLE LED SIGNS"
  - Bebas Neue heading (display-lg): "GET NOTICED 72% MORE THAN STATIC SIGNS."
  - Body: "Full-colour, weather-resistant LED signs with built-in WiFi. Update your message from your phone. Works 24 hours a day. Visible from 500 feet. Proven ROI for businesses, churches, schools, and organizations."
  - Feature bullets (3 items, signal yellow checkmark icon):
    - WiFi-enabled — update from any device
    - Full-colour, high-resolution display
    - Built for Atlantic Canadian weather
  - `Get an LED Quote` primary button + `Learn About LED Signs →` ghost button

### 2.8 — Testimonials Section (`components/home/TestimonialsSection.tsx`)

**Design spec:** 3 testimonials in a dark canvas section. Trust through real voices.

- Background: `bg-steel` (deepest dark)
- Signal yellow accent bar full-width at top
- Section heading (centered, light): Eyebrow "WHAT OUR CLIENTS SAY" + Bebas Neue "42 YEARS OF SATISFIED BUSINESSES."
- 3-column grid of testimonial cards:
  - `bg-steel-mid` card, `border border-steel-light`, card radius
  - Large signal yellow open-quote glyph: Playfair Display 72px, `opacity-40`
  - Quote body: Playfair Display italic 17px, chalk-80%
  - Attribution: JetBrains Mono 10px, iron-soft, uppercase: `MARK T. / CYCLESMITH HALIFAX`
  - Service tag bottom: signal yellow pill, mono 9px
  - Card hover: `border-signal/40` border change, `bg-steel-light`

### 2.9 — CTA Banner (`components/home/CTABanner.tsx`)

Final section before footer. Signal yellow background. Maximum urgency.

- Full-width, `bg-signal text-steel`
- Centered content:
  - Bebas Neue headline (display-lg): "READY TO MAKE YOUR BUSINESS IMPOSSIBLE TO IGNORE?"
  - Subtext: Inter 17px steel-dark: "Get a free consultation and quote from Atlantic Canada's most experienced sign team."
  - `Get a Free Quote` primary button (steel bg, signal text — inverted) + phone number link
- No padding waste — this is a confident close

---

### PHASE 2 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 2 COMPLETE — Home Page
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ Sections built: [list all 9]
> ✅ Parallax: Hero bg + WrapShowcase + LEDSection verified
> ✅ Stats count-up: verified on scroll-into-view
> ✅ Bento gallery grid: correct layout at all breakpoints
> ✅ All CTAs route correctly
> ✅ Mobile: verified at 375px, 640px, 1024px
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 3 — Services Hub & 8 Service Detail Pages

### Objective
Build the Services hub page and all 8 individual service pages. Each service page must feel crafted — not copied from a template.

**Deliverable:** `/services` hub + all 8 service routes fully built and styled.

---

### 3.1 — Services Hub (`app/services/page.tsx`)

**Hero:**
- Dark canvas, medium height (50vh min)
- Breadcrumb: `HOME / SERVICES`
- Eyebrow: "WHAT WE DO"
- Bebas Neue heading (display-xl): "EVERY SIGN YOUR BUSINESS WILL EVER NEED."
- Body: "From a single door decal to a complete building identification package. Acme Sign has been doing this since 1982."

**Services grid below hero:**
- 8 large service cards, 2-column desktop, 1-column mobile
- Each card: `ImagePlate` (16/9 aspect, with placeholder), service name in Bebas Neue 28px, description in Inter 15px, features list (3 bullet points with signal checkmark), `Learn More →` signal link
- Cards alternate — odd cards have text left / image right, even cards invert (desktop)

### 3.2 — Service Detail Page Template (`components/services/ServiceHero.tsx` etc.)

Every service detail page uses the same component structure but different data from `mockData.ts`.

**Service page structure (apply to all 8):**

*Hero section (dark canvas):*
- Breadcrumb: `HOME / SERVICES / [SERVICE NAME]`
- Eyebrow: category tag (e.g. "OUTDOOR SIGNAGE")
- Bebas Neue headline: service-specific (e.g. "CHANNEL SIGNS THAT COMMAND ATTENTION.")
- Short description paragraph
- `Get a Quote for [Service] →` primary signal button
- Right: large `ImagePlate` (4/3 aspect)

*Features section (light chalk):*
- Eyebrow: "WHY CHOOSE ACME FOR [SERVICE]"
- 3-column feature grid: icon + feature name + description
- Feature data from `mockData.ts` `service.features`

*Gallery section:*
- Eyebrow: "OUR RECENT WORK"
- 3-column gallery of service-specific items from `mockData.ts` gallery
- `View Full Gallery →` link

*Process section (dark canvas strip):*
- 4-step horizontal process: `01. Consultation → 02. Design → 03. Production → 04. Installation`
- Each step: number in signal yellow Bebas Neue, title in chalk, description in chalk-60%

*CTA section (signal yellow):*
- "READY TO GET STARTED?" + `Get a Quote` button + phone number

**Individual page routes** (each imports service data by slug from mockData):

- `/services/channel-signs` — "Channel Letters That Mean Business."
- `/services/dimensional-signs` — "Signs With Depth, Dimension, and Presence."
- `/services/illuminated-signs` — "Signs That Work When the Sun Goes Down."
- `/services/safety-parking-signs` — "Regulatory Signs. Done Right. Done Fast."
- `/services/window-graphics` — "Every Window Is a Canvas."
- `/services/banners` — "Bold, Portable, Proven."
- `/services/decals-stickers` — "Small Format. Big Impact."
- `/services/apparel` — "Wear Your Brand. Everywhere."

Each page must have its own `generateMetadata()` function with service-specific title and description.

---

### PHASE 3 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 3 COMPLETE — Services Hub & Detail Pages
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ Routes built: /services + all 8 detail pages
> ✅ generateMetadata: unique per page
> ✅ All pages pull data from mockData.ts
> ✅ Gallery items filtered by service category
> ✅ CTA on every page links to /quote
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 4 — Vehicle Wraps & LED Signs Dedicated Pages

### Objective
Build the two flagship service pages. These are the highest-converting pages on the site and must be built with extra care.

**Deliverable:** `/vehicle-wraps` and `/led-signs` — both fully built with unique designs.

---

### 4.1 — Vehicle Wraps Page (`app/vehicle-wraps/page.tsx`)

**Hero (full-viewport, dark):**
- Same parallax technique as homepage hero
- Headline: `YOUR BRAND.` / `ON EVERY` / `ROAD IN NOVA SCOTIA.` — Bebas Neue display-hero, staggered animation
- Subheadline: "Full and partial vehicle wraps for vans, trucks, trailers, cars, SUVs and fleets. Mobile advertising that never stops working."
- Two CTAs: `Get a Wrap Quote` (primary) + `View Wrap Gallery` (ghost-dark)
- Floating badge: `SINCE 1982 · THOUSANDS OF WRAPS`

**Why vehicle wraps section (light chalk):**
- Eyebrow: "THE NUMBERS DON'T LIE"
- 3-column stat cards (signal yellow bordered):
  - `72%` More noticed than static signage
  - `$0.04` Cost per 1,000 impressions (vs $3.56 for newspaper)
  - `4–6 YRS` Average wrap lifespan

**Wrap types section:**
- 3 cards: Full Vehicle Wrap / Partial Wrap / Fleet Graphics
- Each: dark canvas card, image placeholder, name, description, typical price range label

**Gallery section:**
- Full-width filterable gallery showing only `vehicle-wraps` category items
- Same filter UX as main gallery (pills)

**Process section:**
- Horizontal 5-step: Consultation → Design Mockup → Material Selection → Professional Install → Final Inspection
- Dark canvas strip, signal numbered steps

**FAQ section (accordion):**
- 6 common questions with expand/collapse — `react-icons/bi BiChevronDown` indicator
- Questions: How long does a wrap last? · Will it damage my paint? · Can I remove it? · How long does installation take? · Do you do fleet pricing? · What file formats do you accept for artwork?

### 4.2 — LED Signs Page (`app/led-signs/page.tsx`)

**Hero (dark canvas — electric feel):**
- Headline: `GET NOTICED.` / `GET REMEMBERED.` / `GET LED.` — Bebas Neue display-hero
- Subheadline: "Programmable full-colour LED signs with built-in WiFi. Update your message from your phone. Proven ROI for any business."
- CTAs: `Get an LED Quote` (primary) + `See LED Gallery` (ghost-dark)

**Stat strip (signal yellow bar):**
- `72%` MORE NOTICED · `500FT` VISIBILITY · `24/7` ALWAYS ON · `WiFi` APP CONTROLLED

**LED Types section:**
- 4 product cards: Indoor LED / Outdoor LED / LED Video Wall / Digital Signage
- Dark canvas cards with signal accents

**Retrofit section:**
- Full-width section: "ALREADY HAVE A SIGN CABINET? WE CAN RETROFIT IT WITH LED."
- Left: large image, right: description + CTA

**How it works (4 steps):**
- Order → Install → Download App → Program from Phone
- Light chalk background, signal yellow step numbers

**FAQ accordion** — LED-specific questions (6 items)

---

### PHASE 4 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 4 COMPLETE — Vehicle Wraps & LED Signs Pages
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /vehicle-wraps: all sections built
> ✅ /led-signs: all sections built
> ✅ FAQ accordions: open/close working
> ✅ Parallax on both heroes
> ✅ Gallery filters work (vehicle-wraps category only)
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 5 — Gallery Page

### Objective
Build the full gallery with filtering, lightbox, and proper categorization. This is Scott's portfolio — 42 years of work. It must look exceptional.

**Deliverable:** `/gallery` — fully filterable, lightbox-enabled, categorized gallery.

---

### 5.1 — Gallery Page (`app/gallery/page.tsx`)

**Hero (medium, dark canvas):**
- Breadcrumb: `HOME / GALLERY`
- Eyebrow: "OUR WORK"
- Bebas Neue heading: "42 YEARS OF ATLANTIC CANADIAN SIGNS."
- Subtext: "Browse our recent projects — from single vehicle wraps to complete building identification packages."

### 5.2 — Gallery Filter (`components/gallery/GalleryFilter.tsx`)

**Filter bar (sticky, below hero):**
- `bg-chalk border-b border-chalk-deep sticky top-[72px] z-40`
- Category pills: `All Work` · `Vehicle Wraps` · `LED Signs` · `Channel Signs` · `Dimensional` · `Illuminated` · `Window Graphics` · `Banners` · `Apparel`
- Active: `bg-steel text-chalk`
- Inactive: `border border-chalk-deep text-iron-soft` hover `border-steel`
- Result count right-aligned: JetBrains Mono 11px iron-soft: `20 PROJECTS`

### 5.3 — Gallery Grid (`components/gallery/GalleryGrid.tsx`)

- Masonry-style bento grid — 3 col desktop, 2 col tablet, 1 col mobile
- Every 4th item is a "featured" card — double width
- Framer Motion `layout` prop on each item — smooth reorder animation on filter change
- Empty state: Bebas Neue 28px iron-soft centered: "NO PROJECTS IN THIS CATEGORY YET."

### 5.4 — Gallery Card (`components/gallery/GalleryCard.tsx`)

- `ImagePlate` fills card with dark gradient overlay
- Category pill (signal yellow, top-right)
- On hover: client name + project title fade in from bottom (Framer Motion)
- Card click opens `GalleryLightbox`

### 5.5 — Gallery Lightbox (`components/gallery/GalleryLightbox.tsx`)

- Full-viewport overlay, `bg-steel/96 backdrop-blur-sm`
- Framer Motion fade-in on open
- Large image center (with previous/next navigation)
- Right panel (desktop): client name, category badge, service description, CTA: `Request Similar Work →` → `/quote`
- Close on Escape key or backdrop click
- Previous/Next arrow buttons (BiChevronLeft/Right, chalk, 32px)
- Image counter: `3 / 20` in mono 11px chalk-60%

---

### PHASE 5 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 5 COMPLETE — Gallery Page
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /gallery: all [N] gallery items rendered
> ✅ Filters: all [N] categories tested
> ✅ Filter animation: grid reorders smoothly
> ✅ Lightbox: opens/closes, prev/next works, Escape closes
> ✅ Bento layout: verified at all breakpoints
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 6 — About Us Page

### Objective
Build the About Us page — the most trust-critical page on the site. Scott's 42 years, the company story, the team, and the service area. This page must make a first-time visitor trust Acme immediately.

**Deliverable:** `/about` — full editorial About Us page.

---

### 6.1 — About Hero (`components/about/AboutHero.tsx`)

- Dark canvas, full-width, medium height (60vh)
- Eyebrow: "OUR STORY"
- Bebas Neue headline (display-xl): "42 YEARS OF MAKING NOVA SCOTIA BUSINESSES IMPOSSIBLE TO IGNORE."
- Subheadline (Playfair Display italic, 20px, chalk-70%): *"Family-owned. Dartmouth-based. Still answering the phone ourselves."*
- Trust badge row: `EST. 1982` · `DARTMOUTH NS` · `FAMILY OWNED` — mono pills, signal yellow borders

### 6.2 — Founder Section (`components/about/FounderSection.tsx`)

- Light chalk background — a human, editorial section
- Two-column: left = large `ImagePlate` (3/4 aspect, Scott's placeholder photo), right = founder story
- Right column:
  - Eyebrow: "A MESSAGE FROM THE FOUNDER"
  - Bebas Neue heading: "42 YEARS IS A LONG TIME TO DO ANYTHING. WE THINK IT'S JUST GETTING GOOD."
  - Three paragraphs of editorial copy (Playfair Display 18px iron):
    1. "I started Acme Sign in 1982 with a single vinyl plotter and a rented space in Dartmouth. Back then, a well-made sign was the difference between a business that got noticed and one that didn't. That hasn't changed."
    2. "Over four decades, we've wrapped thousands of vehicles, installed hundreds of LED displays, and made signs for businesses from Cape Breton to Amherst. Every one of them started with a conversation. That's still how we do it."
    3. "We're not the biggest sign company in Atlantic Canada. We're the most experienced one that still picks up the phone."
  - Attribution: `— Scott, Founder & Owner · Acme Sign & Graphics Co.`
  - Signal yellow accent bar left of text block

### 6.3 — Stats Strip (dark canvas)

- Same 4-stat layout as homepage stats section
- Different copy emphasis: `42 YRS` · `1000+` · `3 PROVINCES` · `48HR QUOTES`
- Playfair italic quote below: *"We've outlasted three economic recessions, two pandemics, and the digital signage revolution. Still here. Still making signs."*

### 6.4 — Team Section (`components/about/TeamSection.tsx`)

- Light chalk background
- Eyebrow: "OUR TEAM"
- Bebas Neue heading: "THE PEOPLE BEHIND THE SIGNS."
- 3-column grid of team cards:
  - `ImagePlate` (1/1 square, face photo placeholder)
  - Name: Bebas Neue 22px
  - Title: Inter 14px iron-soft
  - Years at Acme: JetBrains Mono 11px signal-dark: `[N] YEARS WITH ACME`
  - Short bio: Inter 13px iron-soft
- Scott's card is the featured/larger card

### 6.5 — Timeline Section (`components/about/TimelineSection.tsx`)

- Dark canvas section
- Eyebrow: "OUR HISTORY"
- Bebas Neue heading: "FOUR DECADES OF SIGNS."
- Vertical timeline component:

```
1982 — Founded in Dartmouth, NS with a single vinyl plotter.
1988 — First fleet wrap project. 12 vehicles for an Atlantic Canadian transportation company.
1995 — Moved to current location at 25 Raddall Avenue.
2001 — First full-colour digital wide-format printer installed.
2008 — LED sign division launched. First programmable display installed for a local church.
2015 — Vehicle wrap department expanded. Fleet graphics become 40% of business.
2022 — 40th anniversary. Over 1,000 projects completed across Atlantic Canada.
2026 — Still here. Still making signs. Still answering the phone.
```

- Year: Bebas Neue 32px signal yellow
- Title: Playfair Display 18px chalk
- Description: Inter 14px chalk-60%
- Connecting line: 1px signal yellow vertical rule

### 6.6 — Service Area Section (`components/about/ServiceAreaSection.tsx`)

- Light chalk background
- Eyebrow: "WHERE WE WORK"
- Bebas Neue heading: "ANYWHERE BETWEEN YARMOUTH AND CAPE BRETON."
- Body: "We serve the full province of Nova Scotia, plus New Brunswick and Prince Edward Island. Most installations in the Halifax Regional Municipality are handled in-house. For locations outside HRM, we work with trusted local installation partners."
- Tag cloud of service area cities: Halifax · Dartmouth · Bedford · Sackville · Truro · Wolfville · Kentville · Digby · Yarmouth · Pictou · Antigonish · New Glasgow · Sydney · Cape Breton · Moncton · Amherst · Charlottetown PEI
- Each city: chalk-deep pill with iron-soft text, signal hover

---

### PHASE 6 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 6 COMPLETE — About Us Page
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /about: all 6 sections built
> ✅ Timeline: all 8 entries rendered
> ✅ Service area tags: all cities listed
> ✅ Founder section: editorial copy in place
> ✅ Mobile: verified at 375px
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 7 — Get a Quote (Multi-Step Form) & Contact Page

### Objective
Build the primary conversion goal of the site: the multi-step quote form. Also build the Contact page.

**Deliverable:** `/quote` multi-step form + `/contact` page.

---

### 7.1 — Quote Page (`app/quote/page.tsx`)

**The most important conversion page. Must be frictionless and professional.**

**Progress indicator (`components/quote/QuoteProgress.tsx`):**
- 3-step indicator across top: `① WHAT DO YOU NEED → ② PROJECT DETAILS → ③ YOUR CONTACT INFO`
- Completed: signal yellow filled, steel text + label
- Active: signal yellow border, bold label
- Future: chalk-deep filled, iron-soft label

**Step 1 — Service Type (`components/quote/Step1Service.tsx`):**
- Eyebrow: "STEP 1 OF 3"
- Heading: "WHAT CAN WE MAKE FOR YOU?"
- Large clickable service tiles (2×4 grid desktop, 2×4 tablet, 1 col mobile):
  - Each tile: icon + service name + one-line description
  - Selected state: signal yellow border (2px), signal muted background, signal checkmark top-right
  - Click selects — multiple selection allowed
- "Other / Not Sure" option at end
- `Continue →` primary button (disabled until at least 1 service selected)

**Step 2 — Project Details (`components/quote/Step2Details.tsx`):**
- Eyebrow: "STEP 2 OF 3"
- Heading: "TELL US ABOUT YOUR PROJECT."
- Form fields (React Hook Form + Zod):
  - `PROJECT DESCRIPTION` — textarea, placeholder "Describe your project in your own words. The more detail the better."
  - `TIMELINE` — select: As soon as possible · 1–2 weeks · 1 month · 2–3 months · No rush
  - `BUDGET RANGE` — select: Under $500 · $500–$2,000 · $2,000–$10,000 · $10,000+ · Unsure
  - `DO YOU HAVE EXISTING ARTWORK?` — Yes / No / Need help with design (radio buttons, styled as pill toggles)
- `← Back` ghost button + `Continue →` primary button

**Step 3 — Contact Info (`components/quote/Step3Contact.tsx`):**
- Eyebrow: "STEP 3 OF 3"
- Heading: "HOW DO WE REACH YOU?"
- Fields: FULL NAME · EMAIL ADDRESS · PHONE NUMBER · COMPANY NAME (optional) · ADDITIONAL NOTES (textarea)
- Privacy note: JetBrains Mono 10px iron-soft: `WE NEVER SHARE YOUR INFORMATION. NO SPAM. NO LISTS.`
- `← Back` ghost button + `Submit Request →` primary signal button

**Confirmation (`components/quote/QuoteConfirmed.tsx`):**
- Signal yellow background, steel text
- Bebas Neue headline: "QUOTE REQUEST RECEIVED."
- Subtext: "We'll review your request and get back to you within 48 hours. In the meantime, browse our gallery for inspiration."
- Two buttons: `View Our Gallery` (ghost steel) + `Back to Home` (steel bg, signal text)
- Mock: `console.log()` the form data — real submission endpoint TBA

**Form validation (Zod schema):**
```typescript
// Validate: Step 1 requires at least 1 service selected
// Validate: Step 3 requires name, valid email, phone
// Show red border + error message on invalid field on blur
```

### 7.2 — Contact Page (`app/contact/page.tsx`)

**Hero (dark canvas, short):**
- Breadcrumb: `HOME / CONTACT`
- Eyebrow: "GET IN TOUCH"
- Bebas Neue heading: "A REAL PHONE. A REAL PERSON. A REAL ANSWER."
- Subtext: "We don't do support tickets or chatbots. Call us, email us, or stop by."

**Two-column main section:**

Left — Contact info:
- Phone: large Bebas Neue 36px signal yellow `(902) 481-1007` — clickable tel: link
- Email: Inter 18px `acmesign01@gmail.com` — clickable mailto:
- Address: Inter 16px, with "Find on Google Maps →" link
- Hours: `Monday to Friday · 8:30 AM – 5:00 PM`
- "Prefer a quote form?" → `Get a Quote →` signal button

Right — Simple contact form:
- Fields: NAME · EMAIL · PHONE · MESSAGE (textarea)
- `Send Message →` primary button
- Mock submission (console.log) — real endpoint TBA
- Validation with React Hook Form + Zod

**Full-width address card (dark canvas strip):**
- Address, phone, email, hours — centered, prominent
- Google Maps embed link

---

### PHASE 7 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 7 COMPLETE — Quote Form & Contact Page
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /quote: all 3 steps + confirmation working
> ✅ Step navigation: back/forward works correctly
> ✅ Step 1: service selection enables Continue button
> ✅ Step 3: form validation triggers on submit
> ✅ Confirmation: shows after successful mock submit
> ✅ /contact: form + info sections built
> ✅ Phone number: clickable tel: link
> ✅ Email: clickable mailto: link
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 8 — Artwork Guidelines & Blog Pages

### Objective
Build the Artwork Guidelines page (kept from current site, rebuilt properly) and the Blog with 3 local SEO articles.

**Deliverable:** `/artwork-guidelines` + `/blog` hub + 3 individual blog posts.

---

### 8.1 — Artwork Guidelines (`app/artwork-guidelines/page.tsx`)

**Hero (dark canvas, short):**
- Heading: "ARTWORK GUIDELINES"
- Subtext: "Before sending us your files, please review these guidelines to ensure the fastest possible turnaround."

**Content sections (alternating light/dark):**
1. **File Formats** — Accepted: AI, EPS, PDF (vector). Also accepted: PSD, TIFF (300dpi min for raster). Not accepted: Word, PowerPoint, JPEG below 300dpi.
2. **Color Mode** — CMYK for print. Pantone (PMS) for color matching. RGB converts to CMYK on our end.
3. **Resolution** — Vector preferred. Raster files: 300dpi at final output size minimum.
4. **Fonts** — Outline all fonts OR provide font files. Missing fonts cause delays.
5. **Bleed & Safe Zone** — 0.125" bleed on all edges. Keep critical content 0.25" from trim.
6. **File Submission** — Email to acmesign01@gmail.com with your name and job description. Files over 25MB: use WeTransfer or Dropbox.

**Download section:**
- Signal yellow panel: "NEED OUR TEMPLATES?" + "Contact us and we'll send you templates for common sign sizes." + contact button

### 8.2 — Blog Hub (`app/blog/page.tsx`)

- Eyebrow: "THE ACME BLOG"
- Heading: "SIGN INDUSTRY INSIGHTS FOR ATLANTIC CANADIAN BUSINESSES."
- 3-column article card grid (all 3 posts)
- Each card: `ImagePlate` (16/9) + category tag + title (Bebas Neue 22px) + excerpt + read time + `Read Article →` signal link

### 8.3 — Blog Post (`app/blog/[slug]/page.tsx`)

- Dynamic route from mock data slugs
- `generateStaticParams()` for SSG
- `generateMetadata()` with post-specific SEO title + description
- Layout: narrow centered column (720px max) — editorial, readable
- Back to Blog link at top and bottom
- CTA strip at bottom: "Need a sign for your business? Get a free quote." + primary button

---

### PHASE 8 STOP ✋

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 8 COMPLETE — Artwork Guidelines & Blog
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✅ /artwork-guidelines: all 6 sections built
> ✅ /blog: hub with 3 articles
> ✅ /blog/[slug]: all 3 post routes resolve
> ✅ generateStaticParams: all 3 slugs
> ✅ generateMetadata: unique per post
> ✅ CTA strip on each post
> ⚠️  Deviations: [any, with reason]
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Continue with the next phase?
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Phase 9 — SEO, Polish, Animations & Performance

### Objective
Elevate everything from "working" to "impressive." Scroll animations, micro-interactions, SEO infrastructure, accessibility, and performance. No new pages — pure quality lift.

**Deliverable:** Clean `npm run build`, Lighthouse 90+ performance, 100 SEO, 95+ accessibility.

---

### 9.1 — Scroll-Triggered Animations

Create `components/shared/FadeInSection.tsx`:
```typescript
// useInView from react-intersection-observer
// Props: children, delay?, direction? ('up' | 'left' | 'right'), className?
// hidden: { opacity: 0, y: 30 } → visible: { opacity: 1, y: 0 }
// Transition: duration 0.55s, ease 'easeOut'
```

Apply to:
- Every `SectionHeading` — fades up
- Service cards in grid — stagger 0.08s between cards
- Stats — count-up starts when in view
- Gallery cards — stagger 0.05s between items
- Timeline entries — slide in from left
- Team cards — stagger 0.1s
- Testimonial cards — stagger 0.12s

Wrap with `prefers-reduced-motion` check — skip all animations if user prefers reduced motion.

### 9.2 — Marquee Strip (Provenance Bar)

Full-width scrolling marquee — add between hero and trust strip:

```
ACME SIGN & GRAPHICS CO. · EST. 1982 · DARTMOUTH NOVA SCOTIA · VEHICLE WRAPS · LED SIGNS · CHANNEL SIGNS · DIMENSIONAL SIGNS · WINDOW GRAPHICS · BANNERS · DECALS · APPAREL · SERVING ATLANTIC CANADA · FREE CONSULTATIONS ·
```

Pure CSS `@keyframes marquee` — no JS library. Signal yellow text on steel background.

### 9.3 — Page Transitions

- `loading.tsx` for all major routes: skeleton screens matching page layout shape
- Skeleton: steel-mid bg on dark sections, chalk-mid on light sections, shimmer animation

### 9.4 — Micro-Interactions

- **Nav links:** Signal yellow underline slides in from left on hover (`scaleX 0→1`, 200ms)
- **Service cards:** Yellow left border (3px) slides in from top on hover, card lifts 3px
- **Gallery cards:** Client info fades in from bottom on hover
- **CTA buttons:** All primary buttons — slight lift + shadow intensifies on hover
- **Quote form:** Service tiles — scale(1.02) + border color on hover, checkmark appears on select
- **Stats:** Count-up animation from 0 to value over 1.5s when scrolled into view
- **Mobile menu:** Hamburger morphs to X (lines rotate via CSS transform)
- **FAQ accordions:** Smooth height expand (Framer Motion `AnimatePresence` + `height: auto`)
- **Form inputs:** Border transitions from chalk-deep → signal on focus, with signal glow ring

### 9.5 — SEO Infrastructure

**`app/sitemap.ts`:**
```typescript
// Include: all static pages + all service slugs + all blog post slugs
// Returns MetadataRoute.Sitemap with lastModified dates
```

**`app/robots.ts`:**
```typescript
// Allow all crawlers
// Disallow: /api/, /quote/confirmed (no-index confirmation page)
// Sitemap: https://acmesign.ca/sitemap.xml
```

**Per-page `generateMetadata()`:**
- Every service detail page: "[Service Name] Halifax NS | Acme Sign & Graphics"
- Every blog post: unique title + meta description from mockData
- Every major page: Open Graph image path (placeholder), OG description

**JSON-LD schemas:**
- Homepage: `Organization` + `LocalBusiness` (from `LocalSEOSchema` component)
- Service pages: `Service` schema
- Blog posts: `Article` schema
- Contact page: additional `LocalBusiness` with opening hours

### 9.6 — Accessibility Audit

- All icon-only buttons: `aria-label` (nav icons, lightbox arrows, close buttons)
- Mobile menu: `aria-expanded`, `aria-controls`, focus trap when open
- Lightbox: focus trap, Escape closes, `role="dialog"`, `aria-modal`
- FAQ accordion: `aria-expanded` on trigger, `aria-controls` on panel
- Form fields: all have `<label>` with correct `htmlFor`/`id` association
- Skip-to-content link: first element in `<body>`, visually hidden until focused
- Color contrast: verify signal yellow (#F5C518) on steel (#0D0F11) — passes WCAG AA

### 9.7 — Performance

- All `ImagePlate` with real `src`: `next/image` with explicit dimensions, `priority` on above-fold
- Below-fold images: default `loading="lazy"` (next/image default)
- Service card icons: inline SVG or `react-icons` (no image files for icons)
- Route prefetching: `next/link` handles automatically
- Fonts: all `display: 'swap'` (already set in Phase 0)
- `vercel.json`: security headers

### 9.8 — 404 & Error Pages

**`app/not-found.tsx`:**
- Dark canvas, full-viewport
- Bebas Neue: `404`
- Subheadline: "THAT SIGN HAS BEEN TAKEN DOWN."
- Body: "The page you're looking for doesn't exist. But we can still make you a sign."
- Two buttons: `Go to Home` (primary) + `Get a Quote` (ghost-dark)

**`app/error.tsx`:**
- Similar treatment: "SOMETHING WENT WRONG." + "Try refreshing, or contact us if the problem continues."

### 9.9 — Final QA Checklist

```
ROUTES
[ ] / — Homepage: all sections, parallax, animations
[ ] /services — Hub page
[ ] /services/[all 8 slugs] — All service detail pages
[ ] /vehicle-wraps — Dedicated page
[ ] /led-signs — Dedicated page
[ ] /gallery — Filterable gallery
[ ] /about — Full about page
[ ] /quote — All 3 steps + confirmation
[ ] /contact — Form + info
[ ] /artwork-guidelines — Guidelines page
[ ] /blog — Hub page
[ ] /blog/[all 3 slugs] — All 3 posts

NAV
[ ] Sticky on all pages
[ ] Services dropdown opens/closes correctly
[ ] Mobile drawer: all links work
[ ] "Get a Quote" button: always visible, routes to /quote

QUOTE FORM
[ ] Step 1: service selection required before continuing
[ ] Step 2: back button returns to Step 1 with state preserved
[ ] Step 3: validation triggers on submit
[ ] Confirmation: displays after successful submit
[ ] State preserved between steps

GALLERY
[ ] All [N] items render
[ ] All category filters work
[ ] Lightbox opens, prev/next, Escape closes
[ ] Masonry layout correct at all breakpoints

PERFORMANCE
[ ] npm run build — zero errors, zero warnings
[ ] No console errors in browser
[ ] All next/image components have width/height
[ ] priority set on above-fold images

SEO
[ ] /sitemap.xml — valid, includes all routes
[ ] /robots.txt — correct
[ ] All pages have unique title and meta description
[ ] LocalBusiness JSON-LD in page source

ACCESSIBILITY
[ ] Keyboard: tab through homepage, quote form, gallery
[ ] Mobile menu: focus trap works
[ ] Lightbox: focus trap, Escape closes
[ ] All icon buttons have aria-label
[ ] Skip-to-content link visible on focus

RESPONSIVE
[ ] 375px: homepage, quote form, gallery, nav
[ ] 768px: all pages
[ ] 1024px: all pages
[ ] 1280px: all pages
```

---

### PHASE 9 STOP ✋ — FINAL PHASE

> **Claude Code must output:**
>
> ```
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> PHASE 9 COMPLETE — Polish, SEO & Performance
> ACME SIGN & GRAPHICS — FULL REDESIGN COMPLETE
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
>
> FINAL BUILD STATUS:
> ✅ npm run build — [0 errors / 0 warnings]
>
> QA RESULTS:
>   Routes:         [N/N] passing
>   Nav:            [N/N] passing
>   Quote form:     [N/N] passing
>   Gallery:        [N/N] passing
>   Performance:    [N/N] passing
>   SEO:            [N/N] passing
>   Accessibility:  [N/N] passing
>   Responsive:     [N/N] passing
>
> TOTAL FILES CREATED: [N]
> TOTAL COMPONENTS BUILT: [N]
> TOTAL PAGES: [N]
>
> KNOWN LIMITATIONS:
>   • No real images — all ImagePlate components use placeholders
>     → Replace: drop real photos into /public/images/ and update mockData.ts paths
>   • Quote form: console.log only — no real email/CRM submission
>     → Replace: connect NEXT_PUBLIC_FORM_ENDPOINT to Formspree, Resend, or custom API
>   • Blog body content: placeholder copy in mockData.ts
>     → Replace: expand blog post body content or connect to a CMS
>   • Contact email still shows gmail — update to @acmesign.ca when professional email ready
>   • No Google Analytics — add via next/script when client provides GA4 ID
>   • Google Maps embed: currently a link — embed real map with Maps API key
>
> FUTURE BACKEND SWAP (when CMS is decided):
>   See Appendix A for full swap guide.
>
> DEPLOYMENT:
>   Push to GitHub → Connect to Vercel → Set env vars → Deploy
>   Or: npx vercel --prod from project root
>
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Frontend implementation complete.
> Ready for content population and client review.
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ```

---

## Appendix A — Future Backend/CMS Swap Guide

When Scott is ready to manage content without a developer:

| Current (Hardcoded) | CMS Replacement | Effort |
|---|---|---|
| `lib/mockData.ts` services | Sanity.io or Contentful | Medium |
| `lib/mockData.ts` gallery | Sanity with image CDN | Medium |
| `lib/mockData.ts` blog posts | Sanity or Contentful | Low |
| Quote form console.log | Resend API / Formspree / custom | Low |
| Gallery placeholder images | Sanity image CDN or Cloudinary | Low |
| Team/testimonials data | Sanity | Low |

**The component architecture is fully abstracted.** All data fetching lives in `lib/mockData.ts` with typed interfaces. Swapping to a CMS means:
1. Add CMS client to `lib/cms.ts`
2. Replace mock data calls with CMS queries
3. Zero component rewrites needed

---

## Appendix B — Design Decisions vs. Current Site

| Current Site Problem | This Redesign Solution |
|---|---|
| WPBakery bloat, 5–8 sec load | Next.js + Vercel edge — target <2 sec |
| No hero photography | Parallax full-viewport hero |
| 11-item nav dropdown | 7 nav items + Services sub-menu (max 5) |
| Gmail contact address | Placeholder @acmesign.ca |
| No About Us page | Full 6-section About page with Scott's story |
| No trust signals | Trust strip, stats, 42-years throughout |
| 150px thumbnail gallery | Full-size filterable bento gallery with lightbox |
| 4-field generic contact form | 3-step quote form with service pre-qualification |
| No SEO metadata | Per-page title, description, OG, JSON-LD |
| Off-topic blog posts | 3 local SEO articles targeting Halifax sign keywords |
| No mobile design | Mobile-first throughout |
| JPG logo (blurry) | SVG wordmark component |
| No social proof | 5 real testimonials section |

---

## Appendix C — Color Palette Reference Card

```
STEEL (Primary dark):
  steel          #0D0F11   — Nav, hero bg, deepest dark
  steel-dark     #141618   — Dark canvas sections
  steel-mid      #1E2124   — Cards on dark bg
  steel-light    #2A2D31   — Borders on dark

IRON (Mid tones):
  iron           #3A3D42   — Mid-dark sections
  iron-soft      #5A5E65   — Secondary text on light

CHALK (Light surfaces):
  chalk          #F4F2EE   — Page background
  chalk-mid      #E8E4DC   — Section backgrounds
  chalk-deep     #D6D0C4   — Borders on light

SIGNAL (Accent — signal yellow):
  signal         #F5C518   — Primary CTA, accents
  signal-dark    #D4A800   — Hover states
  signal-light   #FBD84A   — Light variant

UTILITY:
  crimson        #8C1F1F   — Errors
  atlantic       #1A3A5C   — Secondary accent
  forest         #1E3A2A   — Success states
```

---

## Appendix D — Typography Reference Card

```
BEBAS NEUE (Display — all headlines):
  display-hero:  clamp(5rem, 12vw, 11rem)  · line-height 0.92 · tracking 0.02em
  display-xl:    clamp(3.5rem, 7vw, 7rem)  · line-height 0.94
  display-lg:    clamp(2.5rem, 5vw, 5rem)  · line-height 0.96
  display-md:    clamp(2rem, 4vw, 3.5rem)  · line-height 0.97

PLAYFAIR DISPLAY (Serif — editorial, trust moments):
  serif-hero:    clamp(2rem, 4vw, 3.5rem)  · line-height 1.15
  serif-lg:      clamp(1.5rem, 3vw, 2.5rem)
  serif-md:      1.35rem                   · line-height 1.45

INTER (Sans — body, UI):
  Body large:    17–19px  · line-height 1.65
  Body:          16–17px  · line-height 1.65
  Small:         13–14px  · line-height 1.5

JETBRAINS MONO (Mono — labels, eyebrows, metadata):
  Eyebrow:       11px     · tracking 0.22em · uppercase · 500 weight
  Eyebrow-lg:    13px     · tracking 0.18em
  Metadata:      10px     · tracking 0.15em
```

---

*Document prepared for Claude Code execution · Acme Sign & Graphics Co. Website Redesign*
*Project: AcmeSign.ca Full Next.js Rebuild · Prepared by SixEleven*
*Total phases: 0–9 (10 phases) · Estimated components: 55+ · Pages: 18*
*Design philosophy: Industrial Modern Vintage · 42 years of Nova Scotia craftsmanship, modernized*
