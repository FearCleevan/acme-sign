'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'primary-dark' | 'secondary' | 'ghost' | 'ghost-dark'
type ButtonSize = 'default' | 'sm' | 'block'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  loading?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-signal text-steel hover:bg-signal-dark hover:shadow-cta hover:-translate-y-px',
  'primary-dark':
    'bg-signal text-steel hover:bg-signal-dark hover:shadow-[0_12px_32px_rgba(245,197,24,0.35)] hover:-translate-y-px',
  secondary:
    'bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-steel',
  ghost:
    'bg-transparent border border-chalk-deep text-iron hover:bg-chalk-mid',
  'ghost-dark':
    'bg-transparent border border-steel-light text-chalk hover:bg-steel-mid',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'min-h-[52px] px-8 text-[18px]',
  sm: 'min-h-[44px] px-5 text-[16px]',
  block: 'w-full min-h-[60px] px-8 text-[18px]',
}

export default function Button({
  variant = 'primary',
  size = 'default',
  children,
  onClick,
  href,
  type = 'button',
  className,
  disabled,
  loading,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2',
    'font-display tracking-[0.05em] uppercase rounded-btn',
    'transition-all duration-200 cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const content = loading ? (
    <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
  ) : (
    children
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={base}>
      {content}
    </button>
  )
}
