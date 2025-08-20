import React from 'react'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/blog/archive"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Archive
            </Link>
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
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