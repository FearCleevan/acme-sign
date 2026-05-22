import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Eyebrow from '@/components/shared/Eyebrow'

export const metadata: Metadata = {
  title: 'Artwork Guidelines | Acme Sign & Graphics Co.',
  description:
    'File format requirements, colour mode, resolution, bleed, and submission guidelines for sending artwork to Acme Sign & Graphics Co. in Dartmouth, NS.',
}

export default function ArtworkGuidelinesPage() {
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-14 lg:py-20 max-w-[780px]">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Artwork Guidelines' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4">
            <Eyebrow variant="light">PRINT-READY ARTWORK</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              ARTWORK GUIDELINES
            </h1>
            <p className="font-sans text-[17px] text-[#C8C4BC] leading-relaxed max-w-[52ch]">
              Before sending us your files, please review these guidelines to ensure the fastest
              possible turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Section 01 — File Formats (light) */}
      <section className="bg-chalk py-16 lg:py-20">
        <div className="container-site max-w-[780px]">
          <div className="flex gap-6 lg:gap-10">
            <span className="font-display text-[64px] leading-none tracking-[0.02em] text-chalk-deep shrink-0 select-none">
              01
            </span>
            <div className="flex flex-col gap-5 pt-2">
              <h2 className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-steel">
                FILE FORMATS
              </h2>
              <p className="font-sans text-[16px] text-iron leading-relaxed">
                Vector files scale to any size without quality loss and are always preferred for
                sign production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-dark mb-3">
                    PREFERRED (VECTOR)
                  </p>
                  <ul className="flex flex-col gap-2">
                    {['AI — Adobe Illustrator', 'EPS — Encapsulated PostScript', 'PDF — Vector with fonts outlined'].map((f) => (
                      <li key={f} className="flex items-start gap-2 font-sans text-[14px] text-iron">
                        <span className="text-signal mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-iron-soft mb-3">
                    ALSO ACCEPTED (RASTER)
                  </p>
                  <ul className="flex flex-col gap-2">
                    {['PSD — 300 dpi minimum', 'TIFF — 300 dpi minimum'].map((f) => (
                      <li key={f} className="flex items-start gap-2 font-sans text-[14px] text-iron">
                        <span className="text-iron-soft mt-0.5 shrink-0">~</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-crimson mb-3">
                    NOT ACCEPTED
                  </p>
                  <ul className="flex flex-col gap-2">
                    {['Microsoft Word / PowerPoint', 'JPEG below 300 dpi', 'Screenshots & web images'].map((f) => (
                      <li key={f} className="flex items-start gap-2 font-sans text-[14px] text-iron">
                        <span className="text-crimson mt-0.5 shrink-0">✕</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 — Color Mode (dark) */}
      <section className="canvas-dark py-16 lg:py-20">
        <div className="container-site max-w-[780px]">
          <div className="flex gap-6 lg:gap-10">
            <span className="font-display text-[64px] leading-none tracking-[0.02em] text-steel-light/30 shrink-0 select-none">
              02
            </span>
            <div className="flex flex-col gap-5 pt-2">
              <h2 className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
                COLOUR MODE
              </h2>
              <p className="font-sans text-[16px] text-[#C8C4BC] leading-relaxed">
                Sign printing is a CMYK process. Files built in RGB will be converted on our end —
                colours may shift, particularly vibrant blues, greens, and oranges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="border border-steel-light/20 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-2">CMYK</p>
                  <p className="font-sans text-[14px] text-[#C8C4BC] leading-relaxed">
                    Use for all print files. Ensures the colour you see is the colour we print.
                    Recommended for any artwork going directly to production.
                  </p>
                </div>
                <div className="border border-steel-light/20 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-2">PANTONE (PMS)</p>
                  <p className="font-sans text-[14px] text-[#C8C4BC] leading-relaxed">
                    Required for brand-critical colour matching. Specify PMS codes in your file or
                    note them in your order. We match to Pantone Formula Guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — Resolution (light) */}
      <section className="bg-chalk py-16 lg:py-20">
        <div className="container-site max-w-[780px]">
          <div className="flex gap-6 lg:gap-10">
            <span className="font-display text-[64px] leading-none tracking-[0.02em] text-chalk-deep shrink-0 select-none">
              03
            </span>
            <div className="flex flex-col gap-5 pt-2">
              <h2 className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-steel">
                RESOLUTION
              </h2>
              <p className="font-sans text-[16px] text-iron leading-relaxed">
                Vector files are resolution-independent and always preferred. For raster files,
                resolution must be measured at the final output size — not the file&apos;s native size.
              </p>
              <div className="border-l-[3px] border-signal pl-6 flex flex-col gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-iron-soft mb-1">MINIMUM FOR RASTER FILES</p>
                  <p className="font-display text-[28px] tracking-[0.02em] text-steel">300 DPI</p>
                  <p className="font-sans text-[13px] text-iron-soft">at final printed output size</p>
                </div>
                <p className="font-sans text-[14px] text-iron leading-relaxed">
                  A file that is 72 dpi at 1&quot; cannot be stretched to 12&quot; — it will print at approximately
                  6 dpi and appear blurry. When in doubt, send us the highest-resolution version you have
                  and we&apos;ll advise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 — Fonts (dark) */}
      <section className="canvas-dark py-16 lg:py-20">
        <div className="container-site max-w-[780px]">
          <div className="flex gap-6 lg:gap-10">
            <span className="font-display text-[64px] leading-none tracking-[0.02em] text-steel-light/30 shrink-0 select-none">
              04
            </span>
            <div className="flex flex-col gap-5 pt-2">
              <h2 className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
                FONTS
              </h2>
              <p className="font-sans text-[16px] text-[#C8C4BC] leading-relaxed">
                Missing fonts are one of the most common causes of production delays. Please do one
                of the following before sending your file.
              </p>
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-start gap-4">
                  <span className="font-display text-[20px] tracking-[0.02em] text-signal shrink-0 mt-0.5">A</span>
                  <div>
                    <p className="font-sans text-[15px] font-semibold text-[#F0EDE6] mb-1">Outline All Fonts</p>
                    <p className="font-sans text-[14px] text-[#C8C4BC] leading-relaxed">
                      In Illustrator: Select All → Type → Create Outlines. In InDesign: Export PDF with
                      fonts embedded. This converts text to vector shapes — no font file required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[20px] tracking-[0.02em] text-signal shrink-0 mt-0.5">B</span>
                  <div>
                    <p className="font-sans text-[15px] font-semibold text-[#F0EDE6] mb-1">Include Font Files</p>
                    <p className="font-sans text-[14px] text-[#C8C4BC] leading-relaxed">
                      Package your font files alongside the artwork file. Include both Regular and Bold
                      weights if your design uses both. OTF and TTF formats are accepted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 — Bleed & Safe Zone (light) */}
      <section className="bg-chalk py-16 lg:py-20">
        <div className="container-site max-w-[780px]">
          <div className="flex gap-6 lg:gap-10">
            <span className="font-display text-[64px] leading-none tracking-[0.02em] text-chalk-deep shrink-0 select-none">
              05
            </span>
            <div className="flex flex-col gap-5 pt-2">
              <h2 className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-steel">
                BLEED & SAFE ZONE
              </h2>
              <p className="font-sans text-[16px] text-iron leading-relaxed">
                Bleed prevents white edges on cut materials. Safe zone ensures text and logos
                aren&apos;t trimmed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-steel/5 border border-chalk-deep p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-dark mb-2">BLEED</p>
                  <p className="font-display text-[36px] tracking-[0.02em] text-steel leading-none mb-2">0.125&quot;</p>
                  <p className="font-sans text-[13px] text-iron-soft leading-relaxed">
                    Extend all background colours and images 0.125&quot; beyond the trim line on all edges.
                  </p>
                </div>
                <div className="bg-steel/5 border border-chalk-deep p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-dark mb-2">SAFE ZONE</p>
                  <p className="font-display text-[36px] tracking-[0.02em] text-steel leading-none mb-2">0.25&quot;</p>
                  <p className="font-sans text-[13px] text-iron-soft leading-relaxed">
                    Keep all critical content (text, logos, important graphics) at least 0.25&quot; from
                    the trim edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 — File Submission (dark) */}
      <section className="canvas-dark py-16 lg:py-20">
        <div className="container-site max-w-[780px]">
          <div className="flex gap-6 lg:gap-10">
            <span className="font-display text-[64px] leading-none tracking-[0.02em] text-steel-light/30 shrink-0 select-none">
              06
            </span>
            <div className="flex flex-col gap-5 pt-2">
              <h2 className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
                FILE SUBMISSION
              </h2>
              <p className="font-sans text-[16px] text-[#C8C4BC] leading-relaxed">
                Send your files along with your name, company name, and a brief description of the
                job so we can match the artwork to your order.
              </p>
              <div className="flex flex-col gap-4 pt-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal mb-1">EMAIL (UNDER 25MB)</p>
                  <a
                    href="mailto:acmesign01@gmail.com"
                    className="font-sans text-[17px] text-[#C8C4BC] hover:text-signal transition-colors"
                  >
                    acmesign01@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal mb-1">LARGE FILES (OVER 25MB)</p>
                  <p className="font-sans text-[15px] text-[#C8C4BC] leading-relaxed">
                    Use WeTransfer or Dropbox to share the link. Include your name and job description
                    in the message field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download / Template section */}
      <section className="bg-signal py-14">
        <div className="container-site max-w-[780px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel/70">
                FREE RESOURCE
              </p>
              <h2 className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-steel">
                NEED OUR TEMPLATES?
              </h2>
              <p className="font-sans text-[16px] text-steel-dark leading-relaxed max-w-[44ch]">
                Contact us and we&apos;ll send you templates for common sign sizes — pre-set with
                correct bleed, safe zone, and colour mode.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn border-2 border-steel text-steel hover:bg-steel hover:text-signal transition-all duration-200 shrink-0"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
