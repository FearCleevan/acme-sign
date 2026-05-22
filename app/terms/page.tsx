import type { Metadata } from 'next'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Eyebrow from '@/components/shared/Eyebrow'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Acme Sign & Graphics Co.',
  description:
    'Terms and Conditions of service for Acme Sign & Graphics Co. in Dartmouth, Nova Scotia.',
}

const LAST_UPDATED = 'May 23, 2026'

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-14 lg:py-20 max-w-[780px]">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4">
            <Eyebrow variant="light">LEGAL</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              TERMS &amp; CONDITIONS
            </h1>
            <p className="font-sans text-[15px] text-[#9A9490]">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-chalk py-16 lg:py-20">
        <div className="container-site max-w-[780px]">
          <div className="prose-legal">

            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the
              website <strong>acmesign.ca</strong> and any services provided by Acme
              Sign &amp; Graphics Co. (&ldquo;Acme Sign,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;), located at 25 Raddall Avenue,
              Unit 4, Dartmouth, Nova Scotia, B3B 1L4. By using our website or
              engaging our services, you agree to be bound by these Terms.
            </p>

            <h2>1. Services</h2>
            <p>
              Acme Sign &amp; Graphics Co. provides custom signage, vehicle wraps,
              LED displays, window graphics, banners, decals, and branded apparel to
              businesses and individuals primarily in Atlantic Canada. All services are
              custom-produced to order.
            </p>

            <h2>2. Quotes and Orders</h2>
            <ul>
              <li>
                All quotes are valid for <strong>30 days</strong> from the date of
                issue unless otherwise stated.
              </li>
              <li>
                A quote does not constitute a binding agreement. An order is confirmed
                only upon receipt of a signed approval or written purchase order and any
                required deposit.
              </li>
              <li>
                We reserve the right to decline any order at our discretion.
              </li>
              <li>
                Prices are in Canadian dollars (CAD) and subject to applicable taxes.
              </li>
            </ul>

            <h2>3. Payment</h2>
            <ul>
              <li>
                A deposit of <strong>50% of the quoted total</strong> is required before
                production begins on most orders. The balance is due upon completion and
                prior to delivery or installation, unless a credit account has been
                established in writing.
              </li>
              <li>
                Accepted payment methods include cash, cheque, e-transfer, and major
                credit cards. A credit card processing fee may apply.
              </li>
              <li>
                Overdue accounts are subject to interest at 2% per month (24% per annum)
                on the outstanding balance.
              </li>
            </ul>

            <h2>4. Artwork and Intellectual Property</h2>
            <ul>
              <li>
                You warrant that you own or have the legal right to use all logos,
                images, trademarks, and other content you provide to us for production.
              </li>
              <li>
                Acme Sign &amp; Graphics Co. is not liable for any intellectual property
                infringement arising from artwork, logos, or content supplied by the
                customer.
              </li>
              <li>
                Artwork and design files created by Acme Sign remain our property unless
                a separate written agreement for file transfer is made.
              </li>
              <li>
                We reserve the right to photograph completed work and use images in our
                portfolio, website, and marketing materials, unless the customer requests
                otherwise in writing.
              </li>
            </ul>

            <h2>5. Proofs and Approvals</h2>
            <p>
              A digital proof will be provided before production on most orders. You are
              responsible for reviewing proofs carefully for accuracy, including spelling,
              colours, dimensions, and layout. Once you approve a proof in writing, Acme
              Sign is not liable for errors that were present in the approved proof.
              Production will not begin until written approval is received.
            </p>

            <h2>6. Colour Accuracy</h2>
            <p>
              Colours displayed on screens may differ from printed or fabricated output
              due to variations in monitor calibration, material type, and production
              process. We make every effort to match specified colours (e.g., Pantone
              references), but exact colour matching cannot be guaranteed across all
              materials and processes.
            </p>

            <h2>7. Turnaround Times</h2>
            <p>
              Estimated production timelines are provided in good faith but are not
              guaranteed. Acme Sign is not liable for delays caused by third-party
              suppliers, shipping carriers, weather, or other factors outside our
              reasonable control. Rush orders may be available for an additional fee.
            </p>

            <h2>8. Cancellations</h2>
            <p>
              Cancellations made after production has begun will be subject to charges
              for work completed to date, including design, materials, and labour. Deposits
              are non-refundable once production has started.
            </p>

            <h2>9. Warranty and Liability</h2>
            <ul>
              <li>
                We warrant that products are free from defects in materials and
                workmanship for a period of <strong>one (1) year</strong> from the date
                of delivery under normal use conditions, unless otherwise specified.
              </li>
              <li>
                Warranty does not cover damage from improper installation (where not
                installed by Acme Sign), vandalism, accident, misuse, or exposure to
                conditions beyond the product&apos;s rated specifications.
              </li>
              <li>
                Our liability is limited to the value of the original order. We are not
                liable for indirect, incidental, or consequential damages of any kind.
              </li>
            </ul>

            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of
              the Province of Nova Scotia and the federal laws of Canada applicable
              therein. Any disputes shall be subject to the exclusive jurisdiction of
              the courts of Nova Scotia.
            </p>

            <h2>11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. The &ldquo;Last
              updated&rdquo; date at the top reflects the most recent revision. Continued
              use of our services after a revision constitutes acceptance of the updated
              Terms.
            </p>

            <h2>12. Contact Us</h2>
            <address>
              <strong>Acme Sign &amp; Graphics Co.</strong><br />
              25 Raddall Avenue, Unit 4<br />
              Dartmouth, Nova Scotia, B3B 1L4<br />
              Phone: <a href="tel:+19024811007">(902) 481-1007</a><br />
              Email: <a href="mailto:acmesign01@gmail.com">acmesign01@gmail.com</a>
            </address>

          </div>
        </div>
      </section>
    </>
  )
}
