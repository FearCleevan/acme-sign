import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlate from '@/components/shared/ImagePlate'
import Eyebrow from '@/components/shared/Eyebrow'
import PortableTextRenderer from '@/components/shared/PortableTextRenderer'
import { sanityFetch } from '@/lib/sanityFetch'
import { blogPostBySlugQuery, allBlogSlugQuery } from '@/lib/queries'
import type { SanityBlogPost } from '@/lib/types'
import { urlFor } from '@/lib/sanityImage'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(allBlogSlugQuery)
  return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await sanityFetch<SanityBlogPost | null>(blogPostBySlugQuery, { slug })
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await sanityFetch<SanityBlogPost | null>(blogPostBySlugQuery, { slug })

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
          src={post.image ? urlFor(post.image).width(780).height(439).fit('crop').url() : undefined}
          alt={post.image?.alt ?? post.title}
          aspectRatio="16/9"
          className="rounded-none"
        />
      </div>

      {/* Article body */}
      <section className="bg-chalk py-14 lg:py-20">
        <div className="container-site max-w-[720px]">
          <PortableTextRenderer value={post.body} />

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
