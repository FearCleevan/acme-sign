import type { Service, GalleryItem, Testimonial, TeamMember, BlogPost } from './types'

// ── Services ──────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'channel-signs',
    slug: 'channel-signs',
    name: 'Channel Signs',
    shortDescription:
      'Individual letters or logos cut from aluminum or acrylic, illuminated or non-illuminated.',
    fullDescription:
      'Individual letters or logos cut from aluminum or acrylic, illuminated or non-illuminated. The gold standard of storefront signage for Atlantic Canadian businesses. Channel letters create dimensional impact at any scale — from a single-unit retail shop to a multi-tenant commercial plaza.',
    features: [
      'Aluminum or acrylic face options',
      'Front-lit, back-lit (halo), or combination lighting',
      'Custom colour matching to your brand standards',
      'Engineered mounting systems for any substrate',
      'Weatherproof — built for Atlantic Canadian winters',
      'Available illuminated or non-illuminated',
    ],
    useCases: [
      'Retail storefronts',
      'Shopping centre tenants',
      'Restaurant and hospitality',
      'Office buildings',
      'Medical and professional offices',
    ],
    imageUrl: '/images/services/channel-signs.jpg',
    galleryImages: [
      '/images/gallery/channel-signs-1.jpg',
      '/images/gallery/channel-signs-2.jpg',
      '/images/gallery/channel-signs-3.jpg',
    ],
    callToAction: 'Get a Quote for Channel Signs',
    metaTitle: 'Channel Signs Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Professional channel sign fabrication and installation in Halifax, NS. Illuminated and non-illuminated aluminum and acrylic channel letters for businesses across Atlantic Canada.',
  },
  {
    id: 'dimensional-signs',
    slug: 'dimensional-signs',
    name: 'Dimensional Signs',
    shortDescription:
      'Three-dimensional letters, logos and shapes that create depth, shadow and presence.',
    fullDescription:
      'Three-dimensional letters, logos and shapes that create depth, shadow and presence. Cut from foam, acrylic, aluminum, or HDU. Dimensional signage commands attention through physical form — it interacts with light and casts shadows in ways flat signs never can.',
    features: [
      'Materials: foam, HDU, acrylic, aluminum, PVC',
      'Custom paint or vinyl finish',
      'Flush or standoff mounting',
      'Interior and exterior applications',
      'Any size, any shape',
      'Logo reproduction in three dimensions',
    ],
    useCases: [
      'Lobby and reception areas',
      'Building identification',
      'Award walls and donor recognition',
      'Retail feature walls',
      'Monument signs',
    ],
    imageUrl: '/images/services/dimensional-signs.jpg',
    galleryImages: [
      '/images/gallery/dimensional-1.jpg',
      '/images/gallery/dimensional-2.jpg',
    ],
    callToAction: 'Get a Quote for Dimensional Signs',
    metaTitle: 'Dimensional Signs Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Custom dimensional letters and 3D signs in Halifax, NS. Foam, HDU, acrylic and aluminum dimensional signage for businesses across Nova Scotia and Atlantic Canada.',
  },
  {
    id: 'illuminated-signs',
    slug: 'illuminated-signs',
    name: 'Illuminated Signs',
    shortDescription:
      'Signs that work after dark. Backlit, halo-lit, internally lit.',
    fullDescription:
      'Signs that work after dark. Backlit, halo-lit, internally lit. If it needs to be seen at night, we build it to be seen. Illuminated signage extends your business hours and dramatically increases visibility in low-light conditions.',
    features: [
      'LED illumination — energy efficient and long-lasting',
      'Backlit, front-lit, halo, and combination options',
      'Light box cabinets with interchangeable faces',
      'Neon-effect LED for boutique aesthetics',
      'Timer and dimmer controls available',
      'Emergency backup power options',
    ],
    useCases: [
      'Gas stations and convenience stores',
      'Restaurants and nightlife',
      'Hospitals and emergency services',
      'Hotels and hospitality',
      'Shopping centres',
    ],
    imageUrl: '/images/services/illuminated-signs.jpg',
    galleryImages: [
      '/images/gallery/illuminated-1.jpg',
      '/images/gallery/illuminated-2.jpg',
    ],
    callToAction: 'Get a Quote for Illuminated Signs',
    metaTitle: 'Illuminated Signs Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Backlit, halo-lit and LED illuminated signs in Halifax, NS. Signs built to be seen day and night across Atlantic Canada.',
  },
  {
    id: 'safety-parking-signs',
    slug: 'safety-parking-signs',
    name: 'Safety & Parking Signs',
    shortDescription:
      'Reflective regulatory, directional and parking control signs. Compliant with Nova Scotia standards.',
    fullDescription:
      'Reflective regulatory, directional and parking control signs. Compliant with Nova Scotia standards. Fast turnaround. Whether you need a single No Parking sign or a complete wayfinding system for a commercial property, we produce it right and produce it fast.',
    features: [
      'Nova Scotia and Transport Canada compliant',
      'High-intensity retroreflective sheeting',
      'Aluminum substrate — rust-proof',
      'Custom regulatory and proprietary signs',
      'Post and hardware supply available',
      'Same-week turnaround on standard sizes',
    ],
    useCases: [
      'Commercial parking lots',
      'Municipal facilities',
      'Construction sites',
      'School zones',
      'Private property access control',
    ],
    imageUrl: '/images/services/safety-parking-signs.jpg',
    galleryImages: [],
    callToAction: 'Get a Quote for Safety & Parking Signs',
    metaTitle: 'Safety & Parking Signs Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Reflective safety and parking signs in Halifax, NS. Nova Scotia–compliant regulatory and directional signs for businesses, municipalities, and private properties.',
  },
  {
    id: 'window-graphics',
    slug: 'window-graphics',
    name: 'Window Graphics',
    shortDescription:
      'Perforated vinyl, frosted film, cut vinyl lettering and full-colour digital prints for any glass surface.',
    fullDescription:
      'Perforated vinyl, frosted film, cut vinyl lettering and full-colour digital prints for any glass surface. Windows are prime advertising real estate — window graphics put your brand where every passerby can see it.',
    features: [
      'Perforated vinyl — full colour, one-way visibility',
      'Frosted and etched-glass film for privacy',
      'Cut vinyl lettering and logos',
      'Full-colour digital wide-format prints',
      'Interior and exterior application',
      'Removable and repositionable options',
    ],
    useCases: [
      'Retail storefronts',
      'Office privacy and branding',
      'Restaurant windows and menus',
      'Vehicle rear windows',
      'Real estate listings',
    ],
    imageUrl: '/images/services/window-graphics.jpg',
    galleryImages: [
      '/images/gallery/window-graphics-1.jpg',
      '/images/gallery/window-graphics-2.jpg',
    ],
    callToAction: 'Get a Quote for Window Graphics',
    metaTitle: 'Window Graphics Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Custom window graphics and vinyl lettering in Halifax, NS. Perforated vinyl, frosted film, and full-colour window graphics for businesses across Nova Scotia.',
  },
  {
    id: 'banners',
    slug: 'banners',
    name: 'Banners',
    shortDescription:
      'Heavy-duty vinyl banners, mesh banners, retractable banner stands. Indoor and outdoor.',
    fullDescription:
      'Heavy-duty vinyl banners, mesh banners, retractable banner stands. Indoor and outdoor. Hemmed and grommeted. From a grand opening banner to a trade show backdrop, banners are the fastest way to make a big statement on a reasonable budget.',
    features: [
      '13 oz and 18 oz vinyl substrate options',
      'Mesh banners for high-wind applications',
      'Retractable and telescoping banner stands',
      'Hemmed edges and rust-proof grommets',
      'Full-colour dye-sublimation printing',
      'Same-day and rush turnaround available',
    ],
    useCases: [
      'Grand openings and events',
      'Trade shows and exhibitions',
      'Outdoor advertising and promotions',
      'Real estate open houses',
      'Construction site hoardings',
    ],
    imageUrl: '/images/services/banners.jpg',
    galleryImages: ['/images/gallery/banners-1.jpg'],
    callToAction: 'Get a Quote for Banners',
    metaTitle: 'Vinyl Banners Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Custom vinyl banners and retractable banner stands in Halifax, NS. Indoor and outdoor banners for events, trade shows, and business promotions across Atlantic Canada.',
  },
  {
    id: 'decals-stickers',
    slug: 'decals-stickers',
    name: 'Decals & Stickers',
    shortDescription:
      'Die-cut, full-colour, kiss-cut. From single units to thousands.',
    fullDescription:
      'Die-cut, full-colour, kiss-cut. From single units to thousands. Labels, product decals, promotional stickers. Small format doesn\'t mean small impact — a well-made sticker on the right surface is still one of the most cost-effective forms of advertising in the world.',
    features: [
      'Die-cut to any shape',
      'Kiss-cut on backing sheets',
      'Waterproof and UV-resistant inks',
      'Indoor and outdoor durability',
      'White, clear, and specialty substrates',
      'Short runs to bulk quantities',
    ],
    useCases: [
      'Product labelling',
      'Promotional giveaways',
      'Vehicle identification',
      'Equipment labels',
      'Brand merchandise',
    ],
    imageUrl: '/images/services/decals-stickers.jpg',
    galleryImages: [],
    callToAction: 'Get a Quote for Decals & Stickers',
    metaTitle: 'Custom Decals & Stickers Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Die-cut and full-colour decals and stickers in Halifax, NS. From single units to bulk orders — product labels, promotional stickers, and custom decals across Nova Scotia.',
  },
  {
    id: 'apparel',
    slug: 'apparel',
    name: 'Apparel',
    shortDescription:
      'Screen printing and embroidery for uniforms, workwear, promotional apparel.',
    fullDescription:
      'Screen printing and embroidery for uniforms, workwear, promotional apparel. Minimum orders apply. Branded apparel puts your business on the street everywhere your team goes — it\'s a sign that moves.',
    features: [
      'Screen printing for bold, vibrant colours',
      'Embroidery for professional workwear',
      'Wide garment selection — shirts, hoodies, hats, jackets',
      'Pantone colour matching available',
      'Bulk pricing on larger orders',
      'Rush orders accommodated where possible',
    ],
    useCases: [
      'Staff uniforms and workwear',
      'Sports teams and associations',
      'Corporate promotional merchandise',
      'Event staff apparel',
      'School and organization gear',
    ],
    imageUrl: '/images/services/apparel.jpg',
    galleryImages: ['/images/gallery/apparel-1.jpg'],
    callToAction: 'Get a Quote for Apparel',
    metaTitle: 'Custom Apparel & Uniforms Halifax NS | Acme Sign & Graphics Co.',
    metaDescription:
      'Screen printing and embroidery for uniforms and workwear in Halifax, NS. Branded apparel for businesses, teams, and organizations across Atlantic Canada.',
  },
]

// ── Gallery Items ─────────────────────────────────────────────────────────────

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-01',
    title: 'Full Van Wrap — Cyclesmith Fleet',
    client: 'Cyclesmith Halifax',
    category: 'vehicle-wraps',
    description: 'Full wrap on a Sprinter delivery van. Bold brand colours, full print coverage.',
    imageUrl: '/images/gallery/placeholder-vehicle-wraps-1.jpg',
    tags: ['van wrap', 'fleet', 'full wrap'],
    featured: true,
  },
  {
    id: 'g-02',
    title: 'Service Van Wrap — Atlantic Fabrics',
    client: 'Atlantic Fabrics',
    category: 'vehicle-wraps',
    description: 'Partial wrap with cut vinyl lettering on a transit van.',
    imageUrl: '/images/gallery/placeholder-vehicle-wraps-2.jpg',
    tags: ['van wrap', 'partial wrap'],
    featured: false,
  },
  {
    id: 'g-03',
    title: 'SUV Wrap — Beautiful Baths NS',
    client: 'Beautiful Baths NS',
    category: 'vehicle-wraps',
    description: 'Full SUV wrap for a home renovation contractor.',
    imageUrl: '/images/gallery/placeholder-vehicle-wraps-3.jpg',
    tags: ['suv wrap', 'contractor'],
    featured: false,
  },
  {
    id: 'g-04',
    title: 'Pickup Truck Wrap — Ace Communications',
    client: 'Ace Communications',
    category: 'vehicle-wraps',
    description: 'Partial wrap and lettering on a work truck.',
    imageUrl: '/images/gallery/placeholder-vehicle-wraps-4.jpg',
    tags: ['truck wrap', 'lettering'],
    featured: false,
  },
  {
    id: 'g-05',
    title: 'Fleet Wrap — EHS Pride Campaign',
    client: 'EHS Pride Campaign',
    category: 'vehicle-wraps',
    description: 'Campaign graphics applied to 6 emergency vehicles.',
    imageUrl: '/images/gallery/placeholder-vehicle-wraps-5.jpg',
    tags: ['fleet', 'campaign graphics'],
    featured: true,
  },
  {
    id: 'g-06',
    title: 'Food Truck Wrap — Surfside Brewing',
    client: 'Surfside Brewing',
    category: 'vehicle-wraps',
    description: 'Full wrap on a food truck — bold brand imagery and menu display.',
    imageUrl: '/images/gallery/placeholder-vehicle-wraps-6.jpg',
    tags: ['food truck', 'full wrap'],
    featured: false,
  },
  {
    id: 'g-07',
    title: 'Programmable LED Cabinet Sign',
    client: 'New Scotland Brewing Co.',
    category: 'led-signs',
    description: 'Full-colour outdoor LED display with WiFi control for a craft brewery.',
    imageUrl: '/images/gallery/placeholder-led-signs-1.jpg',
    tags: ['outdoor led', 'programmable'],
    featured: true,
  },
  {
    id: 'g-08',
    title: 'Church LED Sign — St. Brendan\'s Parish',
    client: "St. Brendan's Parish, Dartmouth",
    category: 'led-signs',
    description: 'Monument-style LED sign for weekly service announcements.',
    imageUrl: '/images/gallery/placeholder-led-signs-2.jpg',
    tags: ['monument sign', 'led', 'church'],
    featured: false,
  },
  {
    id: 'g-09',
    title: 'Retail LED Cabinet',
    client: 'The Wool Room, Bedford',
    category: 'led-signs',
    description: 'Indoor LED panel for retail promotional display.',
    imageUrl: '/images/gallery/placeholder-led-signs-3.jpg',
    tags: ['indoor led', 'retail'],
    featured: false,
  },
  {
    id: 'g-10',
    title: 'Illuminated Channel Letters — Ross Farm Museum',
    client: 'Ross Farm Museum',
    category: 'channel-signs',
    description: 'Aluminum channel letters with LED illumination, heritage colour palette.',
    imageUrl: '/images/gallery/placeholder-channel-signs-1.jpg',
    tags: ['channel letters', 'illuminated'],
    featured: false,
  },
  {
    id: 'g-11',
    title: 'Storefront Channel Sign — Cyclesmith Halifax',
    client: 'Cyclesmith Halifax',
    category: 'channel-signs',
    description: 'Non-illuminated brushed aluminum channel letters above main entrance.',
    imageUrl: '/images/gallery/placeholder-channel-signs-2.jpg',
    tags: ['channel letters', 'storefront'],
    featured: true,
  },
  {
    id: 'g-12',
    title: 'Back-Lit Channel Letters — Surfside Brewing',
    client: 'Surfside Brewing',
    category: 'channel-signs',
    description: 'Halo-lit stainless channel letters creating a glow effect at night.',
    imageUrl: '/images/gallery/placeholder-channel-signs-3.jpg',
    tags: ['halo-lit', 'stainless', 'brewery'],
    featured: false,
  },
  {
    id: 'g-13',
    title: 'HDU Dimensional Logo — Atlantic Fabrics',
    client: 'Atlantic Fabrics',
    category: 'dimensional',
    description: 'Painted HDU carved dimensional logo for lobby wall.',
    imageUrl: '/images/gallery/placeholder-dimensional-1.jpg',
    tags: ['hdu', 'lobby', 'dimensional'],
    featured: false,
  },
  {
    id: 'g-14',
    title: '3D Foam Letters — Ace Communications',
    client: 'Ace Communications',
    category: 'dimensional',
    description: 'Foam letters with vinyl wrap finish for reception area.',
    imageUrl: '/images/gallery/placeholder-dimensional-2.jpg',
    tags: ['foam letters', 'reception'],
    featured: false,
  },
  {
    id: 'g-15',
    title: 'Backlit Cabinet Sign — New Scotland Brewing',
    client: 'New Scotland Brewing Co.',
    category: 'illuminated',
    description: 'Double-sided light cabinet with custom printed faces.',
    imageUrl: '/images/gallery/placeholder-illuminated-1.jpg',
    tags: ['lightbox', 'double-sided'],
    featured: false,
  },
  {
    id: 'g-16',
    title: 'Neon-Effect LED Sign — The Wool Room',
    client: 'The Wool Room, Bedford',
    category: 'illuminated',
    description: 'LED neon-flex sign for boutique retail window.',
    imageUrl: '/images/gallery/placeholder-illuminated-2.jpg',
    tags: ['neon-effect', 'led', 'boutique'],
    featured: false,
  },
  {
    id: 'g-17',
    title: 'Perforated Vinyl Window — Beautiful Baths NS',
    client: 'Beautiful Baths NS',
    category: 'window-graphics',
    description: 'Full storefront window coverage with one-way vision vinyl.',
    imageUrl: '/images/gallery/placeholder-window-graphics-1.jpg',
    tags: ['perforated vinyl', 'one-way vision'],
    featured: false,
  },
  {
    id: 'g-18',
    title: 'Frosted Film Partitions — Ace Communications',
    client: 'Ace Communications',
    category: 'window-graphics',
    description: 'Privacy frosted film with logo etching for office partitions.',
    imageUrl: '/images/gallery/placeholder-window-graphics-2.jpg',
    tags: ['frosted film', 'office', 'privacy'],
    featured: false,
  },
  {
    id: 'g-19',
    title: 'Event Banner — Ross Farm Museum',
    client: 'Ross Farm Museum',
    category: 'banners',
    description: 'Outdoor vinyl banner for annual heritage weekend festival.',
    imageUrl: '/images/gallery/placeholder-banners-1.jpg',
    tags: ['outdoor banner', 'event'],
    featured: false,
  },
  {
    id: 'g-20',
    title: 'Embroidered Staff Shirts — Surfside Brewing',
    client: 'Surfside Brewing',
    category: 'apparel',
    description: 'Custom embroidered polo shirts for front-of-house staff.',
    imageUrl: '/images/gallery/placeholder-apparel-1.jpg',
    tags: ['embroidery', 'staff uniform', 'polo'],
    featured: false,
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 't-01',
    quote:
      'Thanks for the great job! Really appreciate the extra effort you took to make sure everything was done right and helping with the small issues we had with the trailer. Highly recommend! See you on the next project.',
    author: 'Brent VanSlyke',
    company: 'Google Review',
    service: 'Vehicle Graphics',
  },
  {
    id: 't-02',
    quote:
      'I had an excellent experience working with Acme to have my husband’s company decal installed on his truck. Acme got back to my initial inquiry quickly and provided mock-ups of what the decal would look like on the truck.',
    author: 'Raina D.',
    company: 'Google Review',
    service: 'Truck Decals',
  },
  {
    id: 't-03',
    quote:
      'Tym is amazing. He goes above and beyond and is always quick to answer my emails. His work is amazing — he\'s very nice and is the reason that makes Acme Signs the best place to go for all your designs and logos.',
    author: 'Jeffrey Paul Daugherty',
    company: 'Google Review',
    service: 'Design & Graphics',
  },
  {
    id: 't-04',
    quote:
      'Great service. I stopped in on Monday to get a quote for work on my company truck. It was installed on Wednesday exactly as requested. I fully recommend them for all of your graphics requirements.',
    author: 'Shaun Tapper',
    company: 'Google Review',
    service: 'Truck Graphics',
  },
  {
    id: 't-05',
    quote:
      'Very friendly and fast service! Ordered two signs and they both turned out perfect.',
    author: 'Court Bernard',
    company: 'Google Review',
    service: 'Signs',
  },
  {
    id: 't-06',
    quote:
      'Love the work these guys did for my van. Thank you very much for a great experience.',
    author: 'Raphael Huwiler',
    company: 'Google Review',
    service: 'Van Wrap',
  },
  {
    id: 't-07',
    quote:
      'Tim is elite at his craft. Helpful team and fantastic service.',
    author: 'Ryan Blackburn',
    company: 'Google Review',
    service: 'Vehicle Graphics',
  },
  {
    id: 't-08',
    quote:
      'I needed vinyl for a small project and these guys were very helpful and accommodating. Reasonable prices and very friendly service. I would recommend them to anyone needing custom vinyl or decal work done.',
    author: 'Leah Hemeon',
    company: 'Google Review',
    service: 'Vinyl & Decals',
  },
  {
    id: 't-09',
    quote:
      'These guys do a fantastic job and are very helpful. My van looks awesome. Thanks Acme.',
    author: 'Neil Thibeault',
    company: 'Google Review',
    service: 'Van Wrap',
  },
  {
    id: 't-10',
    quote:
      'Talk about customer service — these guys are awesome. They were very helpful and I didn\'t break the bank. My decals look great.',
    author: 'Ezekiel Cuffy',
    company: 'Google Review',
    service: 'Decals',
  },
  {
    id: 't-11',
    quote:
      'Great guys to work with and they installed a great looking wrap.',
    author: 'CR Gutters',
    company: 'Google Review',
    service: 'Vehicle Wrap',
  },
  {
    id: 't-12',
    quote:
      'Excellent quality, reasonable prices and great staff.',
    author: 'Majed Mahbashi',
    company: 'Google Review',
    service: 'Signs & Graphics',
  },
]

// ── Team Members ──────────────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    id: 'team-01',
    name: 'Scott',
    title: 'Founder & Owner',
    bio: 'Started Acme Sign in 1982 with a single vinyl plotter. Four decades later, still the one answering the phone and signing off on every job that leaves the shop.',
    imageUrl: '/images/team/scott.jpg',
    yearsAtAcme: 42,
  },
  {
    id: 'team-02',
    name: 'Michelle',
    title: 'Lead Designer',
    bio: 'Over 15 years turning client ideas into production-ready artwork. Specializes in environmental graphics and large-format design.',
    imageUrl: '/images/team/michelle.jpg',
    yearsAtAcme: 15,
  },
  {
    id: 'team-03',
    name: 'Ryan',
    title: 'Production Manager',
    bio: 'Keeps every job on track from material order to final installation. If Ryan says it will be ready Wednesday, it will be ready Wednesday.',
    imageUrl: '/images/team/ryan.jpg',
    yearsAtAcme: 11,
  },
]

// ── Blog Posts ────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-01',
    slug: 'best-sign-types-for-halifax-businesses',
    title: 'Which Sign Type Is Right for Your Halifax Business?',
    excerpt:
      'Channel signs, dimensional signs, illuminated signs — every type serves a different purpose. Here\'s how to choose the right one for your business and budget.',
    body: `When you're opening a new business in Halifax or refreshing your existing signage, the number of options can feel overwhelming. Channel signs, dimensional signs, illuminated cabinets, LED displays — each serves a different purpose and works best in different situations.

**Channel Signs: The Professional Standard**

Channel letters are individually fabricated three-dimensional letters or shapes mounted directly to a building facade or raceway. They're the most professional-looking storefront option available and the most popular choice for retail businesses, restaurants, and professional offices.

If your business is in a shopping centre or strip mall, illuminated channel letters are usually the sign type specified in your lease. They can be front-lit, halo-lit (a glow behind the letters), or both. Aluminum construction means they're built to handle Nova Scotia winters without complaint.

**Dimensional Signs: When You Need Depth**

Dimensional signs — letters and logos cut from HDU foam, acrylic, or aluminum — create physical presence through shadow and depth. They're particularly effective indoors (lobby walls, reception areas, award displays) but work beautifully outdoors as well.

If your brand identity is built on precision and prestige, dimensional signs communicate that before anyone reads a word. Banks, law firms, medical practices, and architecture studios often choose dimensional over channel for exactly this reason.

**Illuminated Signs: Working After Dark**

If your business generates foot traffic or drive-by visibility in the evening hours, illuminated signage isn't optional — it's essential. A restaurant, bar, hotel, or gas station without illuminated signage is invisible after sunset.

Modern LED illumination has made illuminated signs dramatically more energy-efficient than older neon or fluorescent options. The operating cost is a fraction of what it used to be, and modern LEDs last 50,000+ hours without replacement.

**The Right Choice Depends On Your Business**

There's no single right answer. A craft brewery might choose illuminated channel letters for the exterior and a neon-effect LED sign for the window. A legal office might choose brushed aluminum dimensional letters for the lobby. A car dealership needs all of the above.

The best approach is a conversation. Tell us about your business, your location, and your brand standards, and we'll recommend the sign types that will work hardest for you.`,
    category: 'Sign Buying Guide',
    publishedAt: '2026-03-15',
    readingMinutes: 5,
    imageUrl: '/images/gallery/placeholder-channel-signs-1.jpg',
    metaTitle: 'Which Sign Type Is Right for Your Halifax Business? | Acme Sign',
    metaDescription:
      'Channel signs, dimensional signs, or illuminated signs — how do you choose? Acme Sign explains the differences and helps Halifax businesses pick the right sign for their needs.',
  },
  {
    id: 'blog-02',
    slug: 'vehicle-wrap-roi-atlantic-canada',
    title: 'The Real ROI of Vehicle Wraps for Atlantic Canadian Businesses',
    excerpt:
      'Vehicle wraps are one of the most cost-effective forms of advertising available to small businesses. Here\'s what the numbers actually look like in the Atlantic Canadian market.',
    body: `Vehicle wraps get talked about a lot as a marketing tool, but most business owners never actually crunch the numbers. Let's do that.

**The Cost per Impression Comparison**

A full vehicle wrap for a standard cargo van costs approximately $3,500–$5,500 installed, depending on design complexity and vehicle size. That wrap will last 4–6 years under normal Atlantic Canadian conditions.

Over five years, assuming 15,000 km driven per year in urban and suburban Halifax, a wrapped vehicle generates an estimated 6–10 million visual impressions. At a mid-range cost of $4,500, that works out to approximately $0.04–$0.07 per thousand impressions.

Compare that to:
- Newspaper: $3.56 per thousand impressions
- Radio: $7.75 per thousand impressions
- Direct mail: $14.00 per thousand impressions
- Online display ads: $3.00–$8.00 per thousand impressions

Vehicle wraps consistently outperform every traditional advertising medium on a cost-per-impression basis.

**Why It Works in Atlantic Canada**

Halifax and Dartmouth are compact, high-density markets. The same delivery van completing its regular routes will pass through downtown Halifax, the Burnside Industrial Park, and the Dartmouth Crossing retail area in a single day — hitting three completely different demographic markets with a single impression.

In smaller Nova Scotia communities — Truro, New Glasgow, Antigonish, Yarmouth — a wrapped vehicle stands out even more. There's less visual noise competing for attention.

**The Fleet Multiplier**

The economics improve dramatically with fleet vehicles. A company with 10 wrapped vehicles is generating 60–100 million impressions over five years. That's a significant portion of the entire province of Nova Scotia seeing your brand regularly.

**What Makes a Wrap Effective**

ROI from vehicle wraps depends heavily on design quality. A wrap needs to communicate your business name, what you do, and how to contact you — in approximately three seconds of viewing time at highway speed.

That means:
- High-contrast design that reads at distance
- Legible phone number and/or website
- Clear indication of the service you provide

We design every wrap with these principles in mind. If you're ready to put your brand on the road, get in touch for a free consultation.`,
    category: 'Vehicle Wraps',
    publishedAt: '2026-02-20',
    readingMinutes: 4,
    imageUrl: '/images/gallery/placeholder-vehicle-wraps-1.jpg',
    metaTitle: 'Vehicle Wrap ROI in Atlantic Canada | Acme Sign & Graphics',
    metaDescription:
      'What\'s the real return on investment for a vehicle wrap in Halifax and Atlantic Canada? Acme Sign breaks down the numbers — cost per impression, lifespan, and what makes wraps work.',
  },
  {
    id: 'blog-03',
    slug: 'led-sign-buying-guide-nova-scotia',
    title: 'LED Sign Buying Guide for Nova Scotia Business Owners',
    excerpt:
      'Thinking about an LED sign for your business? Here\'s everything you need to know about types, costs, installation, and what to look for when buying in Nova Scotia.',
    body: `LED signs are one of the best investments a business with significant street presence can make. But there are real differences in quality, and buying the wrong sign can mean years of disappointment. This guide will help you navigate the decision.

**Types of LED Signs**

**Monochrome LED:** Single-colour displays, typically amber or red. Used for simple text messages (gas station fuel prices, church schedules, restaurant daily specials). Lowest cost, most durable, easiest to read in direct sunlight.

**Full Colour LED:** High-resolution colour displays capable of showing photographs, animations, and video. Best for businesses that want visual impact and the ability to promote multiple products or services simultaneously. More expensive, but dramatically more versatile.

**LED Cabinet Retrofits:** If you already have a sign cabinet (a traditional backlit box sign), it can often be retrofitted with an LED display panel instead of a printed face. This is a cost-effective way to add programmability to an existing sign structure.

**Indoor LED Panels:** Smaller pitch (higher resolution) panels for interior retail display, restaurants, and lobbies. Different specifications than outdoor signs.

**What to Look for in Quality**

**Pixel pitch** is the distance between LED elements, measured in millimetres. Smaller pitch = higher resolution = better viewing at close distances. For roadside signs viewed from 50+ feet, a 16mm or 20mm pitch is typically sufficient. For indoor use or close viewing, 6mm–10mm pitch is preferred.

**Brightness (NITS):** Outdoor signs should produce 5,000 NITS minimum to be visible in direct Nova Scotia sunlight. Indoor signs are fine at 1,500–2,000 NITS.

**Warranty:** A quality LED sign should carry a 5-year parts and labour warranty. Be cautious of units offered with less — LED modules can fail, and replacement costs on unwarranted signs can be significant.

**WiFi vs. USB programming:** WiFi-enabled signs (controlled via app from your phone or computer) are dramatically easier to manage than USB-input units. Given that you'll be updating content regularly, WiFi control is worth the modest price premium.

**Atlantic Canadian Weather Considerations**

Nova Scotia's weather is hard on electronics. Salt air from the ocean, freeze-thaw cycles, and heavy precipitation all stress outdoor sign enclosures. Look for:
- IP65 or IP66 rated enclosures (dust-tight and water-resistant)
- Corrosion-resistant hardware
- Thermostatically controlled ventilation to prevent condensation

All LED signs we supply and install meet these standards for Atlantic Canadian conditions.

**What Does an LED Sign Cost?**

For planning purposes:
- Small monochrome outdoor sign (approx. 2' × 4'): $1,800–$3,500
- Medium full-colour outdoor sign (approx. 4' × 8'): $6,000–$12,000
- Large full-colour roadside display (approx. 6' × 12'): $15,000–$30,000+

These are supply and installation costs. Annual operating costs are minimal — a typical outdoor LED sign draws 200–400 watts, less than many household appliances.

**Is a Permit Required?**

In most Nova Scotia municipalities, yes — a sign permit is required for any permanent outdoor sign installation. We handle the permit application process for all installations we complete.

If you're considering an LED sign for your business, contact us for a no-obligation consultation. We'll assess your location, recommend the right sign type and size, and provide a detailed quote.`,
    category: 'LED Signs',
    publishedAt: '2026-01-10',
    readingMinutes: 6,
    imageUrl: '/images/gallery/placeholder-led-signs-1.jpg',
    metaTitle: 'LED Sign Buying Guide for Nova Scotia Business Owners | Acme Sign',
    metaDescription:
      'Everything Nova Scotia business owners need to know about buying an LED sign — types, costs, quality standards, and what to look for. Expert guidance from Acme Sign & Graphics.',
  },
]

// ── Stats ─────────────────────────────────────────────────────────────────────

export const stats = [
  { value: '42', label: 'Years in Business' },
  { value: '1,000+', label: 'Projects Completed' },
  { value: 'Atlantic Canada', label: 'Service Area' },
  { value: '48HR', label: 'Average Quote Turnaround' },
]

// ── Service Areas ─────────────────────────────────────────────────────────────

export const serviceAreas = [
  'Halifax',
  'Dartmouth',
  'Bedford',
  'Sackville',
  'Truro',
  'Wolfville',
  'New Minas',
  'Kentville',
  'Digby',
  'Yarmouth',
  'Pictou',
  'Antigonish',
  'New Glasgow',
  'Sydney',
  'Cape Breton',
  'Moncton',
  'Amherst',
  'New Brunswick',
  'Prince Edward Island',
]
