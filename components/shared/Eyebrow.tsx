import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  variant?: 'dark' | 'light' | 'signal'
  showBar?: boolean
  className?: string
}

export default function Eyebrow({
  children,
  variant = 'dark',
  showBar = false,
  className,
}: EyebrowProps) {
  const variantClasses = {
    dark: 'text-iron-soft',
    light: 'text-signal',
    signal: 'text-signal-dark',
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {showBar && (
        <span className="block w-6 h-[2px] bg-signal shrink-0" />
      )}
      <span
        className={cn(
          'font-mono text-[11px] font-medium tracking-[0.22em] uppercase',
          variantClasses[variant]
        )}
      >
        {children}
      </span>
    </div>
  )
}
