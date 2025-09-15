import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Clock, MessageSquare, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SMS Open Rates ≈98%: Why Text-Back Works in Atlanta (CTIA Data)',
  description: 'CTIA reports SMS open rates near 98%—far above email. Here\'s why texts cut through and how to use them responsibly.',
  openGraph: {
    title: 'SMS Open Rates ≈98%: Why Text-Back Works in Atlanta (CTIA Data)',
    description: 'CTIA reports SMS open rates near 98%—far above email. Here\'s why texts cut through and how to use them responsibly.',
  },
}

export default function SMSOpenRatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article content */}
          <article className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 dark:border-slate-700/50">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Why text-back works: 98% open rates and near-instant reads
              </h1>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>3 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Published January 27, 2025</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The signal from CTIA (the U.S. wireless association)</h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                CTIA highlights that text messages have ~98% open rates, which explains why SMS is so effective for time-sensitive customer communications (
                <a 
                  href="https://www.ctia.org/messaging" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  CTIA Messaging page
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ; see also CTIA's filing to the FCC noting "SMS open rates are estimated to be 98 percent" on p.7, footnote 19: 
                <a 
                  href="https://api.ctia.org/wp-content/uploads/2022/11/221110-FINAL-CTIA-Robotext-Comments.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  PDF here
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ).
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg border border-green-200 dark:border-green-800 mb-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">98% Open Rate</h3>
                </div>
                <p className="text-green-800 dark:text-green-200 text-lg">
                  Far above email open rates, making SMS the most reliable channel for time-sensitive communications
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">Practical takeaways for Atlanta SMBs</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Time-sensitive moments</h3>
                  <p className="text-blue-800 dark:text-blue-200">Missed call, ETA, "We're on the way."</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">Booking links get tapped on mobile</h3>
                  <p className="text-purple-800 dark:text-purple-200">Reduce no-shows with reminders</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">Compliance first</h3>
                  <p className="text-orange-800 dark:text-orange-200">Include "Reply STOP to opt out"; register A2P 10DLC for solid deliverability</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What to track</h2>
              
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                <li>Click-through as an open proxy, reply rate, bookings, opt-outs</li>
                <li>Compare text-back vs. voicemail return rates</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Try text-back automation — see the 98% in action</h3>
                <p className="text-blue-100 mb-6">Experience how SMS cuts through the noise for your Atlanta customers</p>
                <Link
                  href="/demo"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Try Demo Now
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sources:</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <a 
                      href="https://www.ctia.org/messaging" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      CTIA Messaging
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://api.ctia.org/wp-content/uploads/2022/11/221110-FINAL-CTIA-Robotext-Comments.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      CTIA FCC filing (PDF)
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
