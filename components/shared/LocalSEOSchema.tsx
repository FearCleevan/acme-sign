export default function LocalSEOSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Acme Sign & Graphics Co.',
    url: 'https://acmesign.ca',
    telephone: '+1-902-481-1007',
    email: 'acmesign01@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '25 Raddall Avenue, Unit 4',
      addressLocality: 'Dartmouth',
      addressRegion: 'Nova Scotia',
      postalCode: 'B3B 1L4',
      addressCountry: 'CA',
    },
    openingHours: 'Mo-Fr 08:30-17:00',
    areaServed: ['Halifax', 'Dartmouth', 'Nova Scotia', 'Atlantic Canada'],
    description:
      'Sign company serving Atlantic Canada for 42 years. Vehicle wraps, LED signs, channel signs, dimensional signs and more.',
    foundingYear: '1982',
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
