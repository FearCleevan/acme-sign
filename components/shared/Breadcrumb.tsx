import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbProps {
  crumbs: Crumb[]
  className?: string
}

export default function Breadcrumb({ crumbs, className }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `https://acmesign.ca${crumb.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn('flex items-center flex-wrap', className)}
      >
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center">
            {i > 0 && (
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-iron-soft mx-2">
                /
              </span>
            )}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-iron-soft hover:text-signal transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-iron">
                {crumb.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
