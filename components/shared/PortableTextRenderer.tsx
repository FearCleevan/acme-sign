import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import type { PortableTextBlock } from '@/lib/types'
import { urlFor } from '@/lib/sanityImage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = { children?: React.ReactNode; value?: any }

const components = {
  block: {
    normal: ({ children }: AnyProps) => (
      <p className="font-sans text-[17px] text-iron leading-[1.75] mb-5">{children}</p>
    ),
    h2: ({ children }: AnyProps) => (
      <h2 className="font-display text-[28px] lg:text-[34px] leading-[1.05] tracking-[0.02em] text-steel mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: AnyProps) => (
      <h3 className="font-display text-[22px] tracking-[0.02em] text-steel mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: AnyProps) => (
      <blockquote className="border-l-4 border-signal pl-6 my-6 font-serif italic text-[18px] text-iron-soft">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: AnyProps) => (
      <ul className="flex flex-col gap-2 pl-4 mb-5">{children}</ul>
    ),
    number: ({ children }: AnyProps) => (
      <ol className="list-decimal list-outside pl-6 mb-5 flex flex-col gap-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: AnyProps) => (
      <li className="flex items-start gap-3 font-sans text-[16px] text-iron leading-relaxed">
        <span className="text-signal mt-1 shrink-0">—</span>
        {children}
      </li>
    ),
    number: ({ children }: AnyProps) => (
      <li className="font-sans text-[16px] text-iron leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: AnyProps) => (
      <strong className="font-semibold text-steel">{children}</strong>
    ),
    em: ({ children }: AnyProps) => <em>{children}</em>,
    link: ({ value, children }: AnyProps) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-signal-dark underline underline-offset-2 hover:text-signal transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: AnyProps) => (
      <div className="my-8 overflow-hidden rounded-card">
        <Image
          src={urlFor(value).width(800).fit('max').url()}
          alt={value.alt ?? ''}
          width={800}
          height={500}
          className="w-full object-cover"
        />
        {value.caption && (
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-iron-soft mt-2 text-center">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
}

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}
