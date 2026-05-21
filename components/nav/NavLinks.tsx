'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiChevronDown } from 'react-icons/bi'
import { cn } from '@/lib/utils'
import ServicesDropdown from './ServicesDropdown'

interface NavService {
  id: string
  slug: string
  name: string
  shortDescription: string
}

interface NavLinksProps {
  services: NavService[]
}

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Vehicle Wraps', href: '/vehicle-wraps' },
  { label: 'LED Signs', href: '/led-signs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function NavLinks({ services }: NavLinksProps) {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 200)
  }

  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + '/')

        if (link.hasDropdown) {
          return (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                className={cn(
                  'group relative flex items-center gap-1 px-3 py-2',
                  'font-sans text-[14px] font-medium transition-colors',
                  isActive ? 'text-chalk' : 'text-[rgba(244,242,238,0.65)] hover:text-chalk'
                )}
              >
                {link.label}
                <BiChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
                <span
                  className={cn(
                    'absolute bottom-0 left-3 right-3 h-[2px] bg-signal origin-left transition-transform duration-200',
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
              <ServicesDropdown isOpen={dropdownOpen} services={services} />
            </div>
          )
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'group relative px-3 py-2',
              'font-sans text-[14px] font-medium transition-colors',
              isActive ? 'text-chalk' : 'text-[rgba(244,242,238,0.65)] hover:text-chalk'
            )}
          >
            {link.label}
            <span
              className={cn(
                'absolute bottom-0 left-3 right-3 h-[2px] bg-signal origin-left transition-transform duration-200',
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              )}
            />
          </Link>
        )
      })}
    </nav>
  )
}
