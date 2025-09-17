'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show CTA when user has scrolled 50% of the page
      const shouldShow = scrollTop > (documentHeight - windowHeight) * 0.5
      setIsVisible(shouldShow && !isDismissed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 dark:bg-slate-900/95 dark:border-gray-700 shadow-lg">
      <div className="max-w-4xl mx-auto">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0 pr-2">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">
                Ready to never miss another call?
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                Get started today to stop losing leads!
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button size="sm" asChild className="w-full">
              <Link href="/pricing">
                Start Today
              </Link>
            </Button>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link href="/demo">
                  <Phone className="h-4 w-4 mr-1" />
                  Demo
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link href="/contact">
                  <Calendar className="h-4 w-4 mr-1" />
                  Book Call
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Ready to never miss another call?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get started today to stop losing leads!
            </p>
          </div>
          
          <div className="flex items-center space-x-3 ml-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/demo">
                <Phone className="h-4 w-4 mr-2" />
                Demo
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/pricing">
                Start Today
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact">
                <Calendar className="h-4 w-4 mr-2" />
                Book Call
              </Link>
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
