import type { Metadata } from 'next'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Eyebrow from '@/components/shared/Eyebrow'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Acme Sign & Graphics Co.',
  description:
    'Accessibility Statement for acmesign.ca — our commitment to an inclusive web experience for all visitors.',
}

const LAST_UPDATED = 'May 23, 2026'

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-14 lg:py-20 max-w-[780px]">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Accessibility' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4">
            <Eyebrow variant="light">LEGAL</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              ACCESSIBILITY STATEMENT
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
              Acme Sign &amp; Graphics Co. is committed to ensuring our website,
              <strong> acmesign.ca</strong>, is accessible to all visitors, including
              people with disabilities. We continually work to improve the accessibility
              of our site and aim to meet or exceed the requirements of the{' '}
              <em>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</em>.
            </p>

            <h2>Our Commitment</h2>
            <p>
              We believe that the web should be open and usable by everyone. As a
              family-owned Atlantic Canadian business, we take our responsibility to
              the community seriously. We are actively working to meet the following
              standards:
            </p>
            <ul>
              <li>Sufficient colour contrast between text and backgrounds.</li>
              <li>All images include descriptive alternative text.</li>
              <li>Interactive elements (links, buttons, forms) are keyboard-navigable.</li>
              <li>Focus indicators are visible for keyboard users.</li>
              <li>Form fields are labelled clearly and associated with their inputs.</li>
              <li>
                Animations respect the user&apos;s system-level &ldquo;Reduce
                Motion&rdquo; preference.
              </li>
              <li>Semantic HTML is used throughout the site for screen reader compatibility.</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>
              While we strive to meet WCAG 2.1 AA standards across all pages, some areas
              of the site are still being improved. Known limitations include:
            </p>
            <ul>
              <li>
                Some older gallery images may have incomplete or auto-generated
                alternative text. We are working to review and update these.
              </li>
              <li>
                Third-party embedded content (such as Google Maps) may not fully meet
                our accessibility standards. This is outside our direct control.
              </li>
            </ul>

            <h2>Alternative Access</h2>
            <p>
              If any part of this website presents a barrier to you, we are happy to
              assist you directly. You can reach us by phone or email and we will make
              every effort to provide the information or service you need in an
              accessible format.
            </p>
            <address>
              Phone: <a href="tel:+19024811007">(902) 481-1007</a><br />
              Email: <a href="mailto:acmesign01@gmail.com">acmesign01@gmail.com</a><br />
              Hours: Monday – Friday, 8:30 AM – 5:00 PM (Atlantic Time)
            </address>

            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of acmesign.ca. If you
              encounter any barriers, experience difficulty accessing any content, or
              have suggestions for improvement, please contact us using the details above.
              We aim to respond to accessibility feedback within <strong>5 business
              days</strong>.
            </p>

            <h2>Continuous Improvement</h2>
            <p>
              Accessibility is an ongoing process. We review and test this site regularly
              and update our practices as standards evolve. This statement will be updated
              to reflect material changes to our accessibility posture.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}
