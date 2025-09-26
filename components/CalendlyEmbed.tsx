'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'

declare global {
  interface Window {
    Calendly: any
  }
}

export function CalendlyEmbed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
    const calcomUrl = process.env.NEXT_PUBLIC_CALCOM_URL

    if (calendlyUrl && typeof window !== 'undefined') {
      // Load Calendly script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)

      return () => {
        // Cleanup
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [])

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  const calcomUrl = process.env.NEXT_PUBLIC_CALCOM_URL

  if (!calendlyUrl && !calcomUrl) {
    return null
  }

  return (
    <section id="book-call" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-purple-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a 10-minute intro call
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get personalized setup guidance and see how Missed2Booked can work for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {calendlyUrl ? (
            <div className="glass-card p-8">
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          ) : calcomUrl ? (
            <div className="glass-card p-8">
              <iframe
                src={calcomUrl}
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a call"
                className="rounded-lg"
              />
            </div>
          ) : null}

          {/* Fallback if no scheduling is configured */}
          {!calendlyUrl && !calcomUrl && (
            <div className="glass-card p-8 text-center">
              <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Schedule a Call</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Contact us to schedule a personalized demo and setup call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@missed2booked.com"
                  className="btn-primary inline-flex items-center justify-center px-8 py-3"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Email Us
                </a>
                <a
                  href="tel:+1-555-0123"
                  className="btn-secondary inline-flex items-center justify-center px-8 py-3"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
