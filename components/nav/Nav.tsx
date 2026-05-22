'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import { cn } from '@/lib/utils'
import NavLinks from './NavLinks'
import NavActions from './NavActions'
import MobileDrawer from './MobileDrawer'

interface NavService {
  id: string
  slug: string
  name: string
  shortDescription: string
}

interface NavProps {
  services: NavService[]
}

export default function Nav({ services }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-steel shadow-dark'
            : 'bg-[rgba(13,15,17,0.90)] backdrop-blur-md'
        )}
      >
        <div className="container-site h-[72px] flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">

          {/* Left — Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-0" aria-label="Acme Sign & Graphics Co. — Home">
            <span className="block w-[3px] h-7 bg-signal shrink-0" />
            <div className="min-w-0">
              <div className="font-display text-[26px] tracking-[0.04em] text-chalk leading-none">
                ACME SIGN
              </div>
              <div className="font-display text-[14px] tracking-[0.04em] text-signal leading-none">
                & GRAPHICS COMPANY
              </div>
              <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-iron-soft mt-0.5">
                EST. 1982 · DARTMOUTH, NS
              </div>
            </div>
          </Link>

          {/* Center — Nav Links */}
          <NavLinks services={services} />

          {/* Right — Actions */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden lg:block">
              <NavActions />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              className="lg:hidden p-2 text-chalk hover:text-signal transition-colors"
            >
              <BiMenu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} services={services} />
    </>
  )
}
