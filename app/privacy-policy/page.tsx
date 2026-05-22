import type { Metadata } from 'next'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Eyebrow from '@/components/shared/Eyebrow'

export const metadata: Metadata = {
  title: 'Privacy Policy | Acme Sign & Graphics Co.',
  description:
    'Privacy Policy for Acme Sign & Graphics Co. Learn how we collect, use, and protect your personal information.',
}

const LAST_UPDATED = 'May 23, 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-14 lg:py-20 max-w-[780px]">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4">
            <Eyebrow variant="light">LEGAL</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              PRIVACY POLICY
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
              Acme Sign &amp; Graphics Co. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is a family-owned business located at 25 Raddall Avenue,
              Unit 4, Dartmouth, Nova Scotia, B3B 1L4. We are committed to protecting
              the personal information of our customers and website visitors in accordance
              with Canada&apos;s <em>Personal Information Protection and Electronic
              Documents Act</em> (PIPEDA) and applicable Nova Scotia provincial law.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information only when you voluntarily provide it to us.
              This includes:
            </p>
            <ul>
              <li>
                <strong>Contact and quote requests:</strong> Name, business name, phone
                number, email address, and project details submitted through our contact
                or quote forms.
              </li>
              <li>
                <strong>Communications:</strong> Any information you include in emails
                or phone calls to our office.
              </li>
              <li>
                <strong>Website usage data:</strong> Anonymous usage statistics collected
                through cookies or analytics tools (see Section 5).
              </li>
            </ul>
            <p>
              We do not collect payment card information directly. Any payment processing
              is handled by trusted third-party providers.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes for our services.</li>
              <li>Process and fulfil orders for signage, vehicle wraps, apparel, and other products.</li>
              <li>Communicate with you about project status, proofs, and delivery.</li>
              <li>Send service-related notifications (not marketing, unless you opt in).</li>
              <li>Improve our website and service offerings.</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information to any third party.
              We may share information only in the following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> Trusted vendors who assist us in
                operating our website or fulfilling orders (e.g., web hosting, email
                delivery). They are bound by confidentiality agreements and may not use
                your data for any other purpose.
              </li>
              <li>
                <strong>Legal requirements:</strong> Where required by law, court order,
                or government authority.
              </li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfil
              the purpose for which it was collected, or as required by law. Project
              records are typically retained for seven (7) years for accounting and
              warranty purposes.
            </p>

            <h2>5. Cookies and Analytics</h2>
            <p>
              Our website may use cookies or similar tracking technologies to understand
              how visitors use the site. This data is anonymous and aggregated. You can
              disable cookies in your browser settings; however, some features of the
              site may not function correctly as a result.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of
              personal information we hold about you. To make such a request, contact
              us at the details below. We will respond within 30 days.
            </p>

            <h2>7. Security</h2>
            <p>
              We take reasonable physical, electronic, and procedural safeguards to
              protect your personal information from unauthorized access, use, or
              disclosure. No method of transmission over the Internet is 100% secure;
              we cannot guarantee absolute security.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last
              updated&rdquo; date at the top of this page reflects the most recent
              revision. Continued use of our website after a revision constitutes
              acceptance of the updated policy.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or to exercise your rights, please
              contact us:
            </p>
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
