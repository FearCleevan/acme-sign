import Image from 'next/image'
import { cn } from '@/lib/utils'

type AspectRatio = '16/9' | '4/3' | '3/2' | '1/1' | '3/4' | '9/16'

interface ImagePlateProps {
  src?: string
  alt: string
  aspectRatio?: AspectRatio
  dark?: boolean
  caption?: string
  className?: string
  priority?: boolean
}

const aspectClasses: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
  '9/16': 'aspect-[9/16]',
}

export default function ImagePlate({
  src,
  alt,
  aspectRatio = '16/9',
  dark = false,
  caption,
  className,
  priority = false,
}: ImagePlateProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-card',
        aspectClasses[aspectRatio],
        !src && (dark ? 'img-plate-dark' : 'img-plate'),
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-30">
            {alt}
          </span>
        </div>
      )}

      {caption && (
        <div className="absolute bottom-3 left-3 z-10">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-chalk bg-steel/70 backdrop-blur-sm px-2 py-1">
            {caption}
          </span>
        </div>
      )}
    </div>
  )
}
