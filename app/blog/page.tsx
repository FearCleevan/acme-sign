import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Eyebrow from '@/components/shared/Eyebrow'
import ImagePlate from '@/components/shared/ImagePlate'
import { sanityFetch } from '@/lib/sanityFetch'
import { allBlogPostsQuery } from '@/lib/queries'
import type { SanityBlogPost } from '@/lib/types'
import { urlFor } from '@/lib/sanityImage'

export const metadata: Metadata = {
  title: 'Blog | Acme Sign & Graphics Co.',
  description:
    'Sign industry insights, buying guides, and local expertise from Acme Sign & Graphics Co. — serving Halifax, Dartmouth, and Atlantic Canada since 1982.',
}

export default async function BlogPage() {
  const blogPosts = await sanityFetch<SanityBlogPost[]>(allBlogPostsQuery)
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark pt-[72px]">
        <div className="container-site py-14 lg:py-20">
          <Breadcrumb
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-4 max-w-[56ch]">
            <Eyebrow variant="light">THE ACME BLOG</Eyebrow>
            <h1 className="font-display text-display-xl leading-[0.94] tracking-[0.02em] text-[#F0EDE6]">
              SIGN INDUSTRY INSIGHTS FOR ATLANTIC CANADIAN BUSINESSES.
            </h1>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-chalk py-section">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col bg-white border border-chalk-deep">
                {/* Image */}
                <Link href={`/blog/${post.slug}`} className="block">
                  <ImagePlate
                    src={post.image ? urlFor(post.image).width(600).height(338).fit('crop').url() : undefined}
                    alt={post.image?.alt ?? post.title}
                    aspectRatio="16/9"
                    className="rounded-none"
                  />
                </Link>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal-dark bg-signal/10 px-2 py-1">
                      {post.category}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-iron-soft">
                      {post.readingMinutes} MIN READ
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-[22px] leading-[1.1] tracking-[0.02em] text-steel">
                    {post.title.toUpperCase()}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-sans text-[14px] text-iron leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Date + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-chalk-deep">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-iron-soft">
                      {new Date(post.publishedAt).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal-dark hover:text-signal transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="canvas-dark py-12">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-display-sm leading-[0.97] tracking-[0.02em] text-[#F0EDE6]">
              READY TO GET STARTED?
            </p>
            <p className="font-sans text-[15px] text-[#C8C4BC] mt-2">
              Talk to us about your signage project — free quotes, 48-hour turnaround.
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
