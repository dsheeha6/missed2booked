'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'
import { getBrandName } from '@/lib/utils'
import { COPY } from '@/constants/copy'

export function Footer() {
  const brandName = getBrandName()

  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Demo', href: '/demo' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'A2P Messaging & Acceptable Use', href: '/legal/messaging-policy' },
    ],
  }


  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">{brandName}</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Never lose a missed call. Auto-text callers, book appointments, and let AI handle FAQs.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@nomadicdesigns.us"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dannysheehan-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/DannySh50977695"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {COPY.footer.copyright.replace('{brandName}', brandName)}
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right max-w-md">
              {COPY.footer.compliance}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
