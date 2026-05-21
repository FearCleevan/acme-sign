import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlate from '@/components/shared/ImagePlate'
import Eyebrow from '@/components/shared/Eyebrow'
import { blogPosts } from '@/lib/mockData'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  }
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/\*\*([^*]+)\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-steel">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

function renderBody(body: string): React.ReactNode {
  const blocks = body.trim().split(/\n\n+/)

  return blocks.map((block, i) => {
    const headingMatch = block.match(/^\*\*([^*]+)\*\*$/)
    if (headingMatch) {
      return (
        <h2
          key={i}
          className="font-display text-[28px] lg:text-[34px] leading-[1.05] tracking-[0.02em] text-steel mt-10 mb-4"
        >
          {headingMatch[1].toUpperCase()}
        </h2>
      )
    }

    const lines = block.split('\n')
    const bulletLines = lines.filter((l) => l.startsWith('- '))
    const textLines = lines.filter((l) => !l.startsWith('- '))

    if (bulletLines.length > 0) {
      return (
        <div key={i} className="flex flex-col gap-3">
          {textLines.length > 0 && textLines.join(' ').trim() !== '' && (
            <p className="font-sans text-[17px] text-iron leading-[1.75]">
              {renderInline(textLines.join(' ').trim())}
            </p>
          )}
          <ul className="flex flex-col gap-2 pl-4">
            {bulletLines.map((line, j) => (
              <li
                key={j}
                className="flex items-start gap-3 font-sans text-[16px] text-iron leading-relaxed"
              >
                <span className="text-signal mt-1 shrink-0">—</span>
                {renderInline(line.slice(2))}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <p key={i} className="font-sans text-[17px] text-iron leading-[1.75]">
        {renderInline(block)}
      </p>
    )
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Acme Sign & Graphics Co.',
      url: 'https://acmesign.ca',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Acme Sign & Graphics Co.',
      url: 'https://acmesign.ca',
    },
    url: `https://acmesign.ca/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site max-w-[780px] py-12 lg:py-16">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-signal hover:text-signal-dark transition-colors mb-10"
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Eyebrow variant="light">{post.category}</Eyebrow>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-light/50">
                {post.readingMinutes} MIN READ
              </span>
            </div>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              {post.title.toUpperCase()}
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-light/50">
              {new Date(post.publishedAt).toLocaleDateString('en-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="container-site max-w-[780px] -mt-2 lg:-mt-4">
        <ImagePlate
          alt={post.title}
          aspectRatio="16/9"
          className="rounded-none"
        />
      </div>

      {/* Article body */}
      <section className="bg-chalk py-14 lg:py-20">
        <div className="container-site max-w-[720px]">
          <div className="flex flex-col gap-6">
            {renderBody(post.body)}
          </div>

          {/* Back to Blog (bottom) */}
          <div className="mt-14 pt-8 border-t border-chalk-deep">
            <Link
              href="/blog"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-dark hover:text-signal transition-colors"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="canvas-dark py-16">
        <div className="container-site max-w-[720px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="w-8 h-[2px] bg-signal" />
            <h2 className="font-display text-display-md leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
              NEED A SIGN FOR YOUR BUSINESS?
            </h2>
            <p className="font-sans text-[16px] text-[#C8C4BC] leading-relaxed max-w-[44ch]">
              Get a free quote — tell us what you need and we&apos;ll respond within 48 hours.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center min-h-[52px] px-8 font-display text-[18px] tracking-[0.05em] uppercase rounded-btn bg-signal text-steel hover:bg-signal-dark transition-all duration-200 hover:-translate-y-px shrink-0"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
