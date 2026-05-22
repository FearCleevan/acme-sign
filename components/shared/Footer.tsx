import Link from "next/link";

const serviceLinks = [
  { label: "Channel Signs", href: "/services/channel-signs" },
  { label: "Dimensional Signs", href: "/services/dimensional-signs" },
  { label: "Illuminated Signs", href: "/services/illuminated-signs" },
  { label: "Vehicle Wraps", href: "/vehicle-wraps" },
  { label: "LED Signs", href: "/led-signs" },
  { label: "Window Graphics", href: "/services/window-graphics" },
  { label: "Banners & Decals", href: "/services/banners" },
  { label: "Apparel", href: "/services/apparel" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Artwork Guidelines", href: "/artwork-guidelines" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      {/* Top strip */}
      <div className="bg-steel border-b-2 border-signal">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-display text-[18px] tracking-[0.05em] text-signal">
            SERVING ATLANTIC CANADA SINCE 1982
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+19024811007"
              className="font-mono text-[13px] tracking-[0.08em] text-chalk hover:text-signal transition-colors"
            >
              (902) 481-1007
            </a>
            <a
              href="mailto:acmesign01@gmail.com"
              className="font-mono text-[13px] tracking-[0.08em] text-chalk hover:text-signal transition-colors"
            >
              acmesign01@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-steel-dark">
        <div className="container-site py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 — Brand */}
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="block w-[3px] h-7 bg-signal shrink-0" />
                  <div>
                    <div className="font-display text-[26px] tracking-[0.04em] text-chalk leading-none">
                      ACME SIGN
                    </div>
                    <div className="font-display text-[15px] tracking-[0.04em] text-signal leading-none">
                      & GRAPHICS CO.
                    </div>
                  </div>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-iron-soft mt-2">
                  EST. 1982 · DARTMOUTH, NS
                </p>
              </div>

              <p className="font-sans text-[14px] leading-relaxed text-[#9A9490]">
                Specializing in highly effective signs, programmable LED displays,
                vehicle wraps, custom apparel, and branding assets for businesses
                of any size across Atlantic Canada. Family-owned. Still answering
                the phone ourselves.
              </p>

              <div className="flex flex-col gap-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft">
                  25 Raddall Avenue, Unit 4
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft">
                  Dartmouth, Nova Scotia B3B 1L4
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft mt-1">
                  Mon–Fri · 8:30 AM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Col 2 — Services */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-dark font-medium">
                Services
              </p>
              <ul className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[14px] text-[#9A9490] hover:text-chalk transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Company */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-dark font-medium">
                Company
              </p>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[14px] text-[#9A9490] hover:text-chalk transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Get Started */}
            <div className="flex flex-col gap-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-dark font-medium">
                Get Started
              </p>

              <Link
                href="/quote"
                className="w-full inline-flex items-center justify-center min-h-[52px] px-6 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-colors"
              >
                Get a Quote
              </Link>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:+19024811007"
                  className="font-mono text-[13px] tracking-[0.08em] text-chalk hover:text-signal transition-colors"
                >
                  (902) 481-1007
                </a>
                <a
                  href="mailto:acmesign01@gmail.com"
                  className="font-sans text-[13px] text-[#9A9490] hover:text-chalk transition-colors"
                >
                  acmesign01@gmail.com
                </a>
                <p className="font-mono text-[11px] tracking-[0.08em] text-iron-soft">
                  Fax: (902) 481-0511
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/Acme+Sign+%26+Graphics+Co/@44.7047758,-63.5906098,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5a26dbf6e1ce91:0x9caccc40ecab06d0!8m2!3d44.7047758!4d-63.5906098!16s%2Fg%2F1tfv4qgy?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-dark hover:text-signal transition-colors"
              >
                Find our shop →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom micro-bar */}
        <div className="border-t border-steel-light">
          <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft">
              © 2026 Acme Sign & Graphics Co. · Dartmouth, Nova Scotia · All
              Rights Reserved.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft hover:text-signal transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-steel-light select-none">·</span>
              <Link
                href="/terms"
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft hover:text-signal transition-colors"
              >
                Terms
              </Link>
              <span className="text-steel-light select-none">·</span>
              <Link
                href="/accessibility"
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft hover:text-signal transition-colors"
              >
                Accessibility
              </Link>
            </div>

            {/* Professional Credit */}
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-iron-soft">
              Built by{" "}
              <a
                href="https://www.sixelevenbpo.com/"
                className="hover:text-signal transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                SixEleven
              </a>{" "}
              · Developed by{" "}
              <a
                href="https://lazandev.vercel.app/"
                className="underline underline-offset-4 decoration-iron-soft hover:text-signal hover:decoration-signal transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peter Paul A. Lazan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
