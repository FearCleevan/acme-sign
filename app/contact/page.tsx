import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Eyebrow from '@/components/shared/Eyebrow'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Acme Sign & Graphics Co.',
  description:
    'Call, email, or stop by. Acme Sign & Graphics Co. — 25 Raddall Avenue, Unit 4, Dartmouth, NS. Phone: (902) 481-1007.',
}

const contactSchema = {
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:00',
    },
  ],
  areaServed: ['Halifax', 'Dartmouth', 'Nova Scotia', 'Atlantic Canada'],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-14 lg:py-20">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4 max-w-[52ch]">
            <Eyebrow variant="light">GET IN TOUCH</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              A REAL PHONE. A REAL PERSON. A REAL ANSWER.
            </h1>
            <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed">
              We don&apos;t do support tickets or chatbots. Call us, email us, or stop by.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-chalk py-section">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — contact info */}
            <div className="flex flex-col gap-8">
              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft">
                  CALL US
                </span>
                <a
                  href="tel:+19024811007"
                  className="font-display leading-none tracking-[0.02em] text-signal hover:text-signal-dark transition-colors"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                >
                  (902) 481-1007
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft">
                  EMAIL
                </span>
                <a
                  href="mailto:acmesign01@gmail.com"
                  className="font-sans text-[18px] text-steel hover:text-signal-dark transition-colors"
                >
                  acmesign01@gmail.com
                </a>
              </div>

              {/* Fax */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft">
                  FAX
                </span>
                <p className="font-sans text-[16px] text-iron">
                  (902) 481-0511
                </p>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft">
                  OUR SHOP
                </span>
                <address className="not-italic font-sans text-[16px] text-iron leading-relaxed">
                  25 Raddall Avenue, Unit 4<br />
                  Dartmouth, Nova Scotia B3B 1L4
                </address>
                <a
                  href="https://maps.google.com/?q=25+Raddall+Avenue+Dartmouth+NS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-dark hover:text-signal transition-colors self-start"
                >
                  Find on Google Maps →
                </a>
              </div>

              {/* Hours */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft">
                  HOURS
                </span>
                <p className="font-sans text-[16px] text-iron">
                  Monday to Friday · 8:30 AM – 5:00 PM
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-iron-soft">
                  Closed weekends & Nova Scotia public holidays
                </p>
              </div>

              {/* Quote CTA */}
              <div className="pt-2 border-t border-chalk-deep">
                <p className="font-sans text-[14px] text-iron-soft mb-4">
                  Prefer to start with a quote form?
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px"
                >
                  Get a Free Quote →
                </Link>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <div className="flex flex-col gap-3 mb-8">
                <Eyebrow variant="signal">SEND A MESSAGE</Eyebrow>
                <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-steel">
                  WE&apos;LL GET BACK TO YOU IN 48 HOURS.
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Address card strip */}
      <section className="canvas-dark py-12">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center sm:text-left">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-1">Address</p>
              <p className="font-sans text-[15px] text-[#C8C4BC]">
                25 Raddall Avenue, Unit 4, Dartmouth, NS B3B 1L4
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-steel-light" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-1">Phone</p>
              <a href="tel:+19024811007" className="font-sans text-[15px] text-[#C8C4BC] hover:text-signal transition-colors">
                (902) 481-1007
              </a>
            </div>
            <div className="hidden sm:block w-px h-10 bg-steel-light" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-1">Email</p>
              <a href="mailto:acmesign01@gmail.com" className="font-sans text-[15px] text-[#C8C4BC] hover:text-signal transition-colors">
                acmesign01@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-px h-10 bg-steel-light" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-1">Hours</p>
              <p className="font-sans text-[15px] text-[#C8C4BC]">Mon–Fri · 8:30–5:00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
