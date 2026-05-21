import { cn } from '@/lib/utils'
import Eyebrow from './Eyebrow'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <Eyebrow variant={light ? 'light' : 'signal'} showBar={align === 'left'}>
          {eyebrow}
        </Eyebrow>
      )}

      <h2
        className={cn(
          'font-display text-display-lg leading-[0.96] tracking-[0.02em] text-balance',
          light ? 'text-[#F0EDE6]' : 'text-steel'
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            'font-sans text-[17px] leading-[1.65] max-w-[52ch]',
            light ? 'text-[rgba(244,242,238,0.65)]' : 'text-iron-soft'
          )}
        >
          {subheading}
        </p>
      )}

      {align === 'left' && !eyebrow && (
        <span className="block w-12 h-[3px] bg-signal mt-1" />
      )}
    </div>
  )
}
