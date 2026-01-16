import React from 'react'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

interface FooterLink {
  label: string
  href: string
}

const FOOTER_LINKS: FooterLink[] = [
  { label: 'Archive', href: '/blog/archive' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Separator className="w-full max-w-xs" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Pineapple Pizza. Built with love and caffeine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer