import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Clock, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Speed to Lead: 5-Minute Rule (21×) — Atlanta Guide (2025)',
  description: 'Responding within 5 minutes dramatically improves contact & qualification. See MIT/HBR research and how Atlanta SMBs can automate it.',
  openGraph: {
    title: 'Speed to Lead: 5-Minute Rule (21×) — Atlanta Guide (2025)',
    description: 'Responding within 5 minutes dramatically improves contact & qualification. See MIT/HBR research and how Atlanta SMBs can automate it.',
  },
}

export default function SpeedToLeadPage() {
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
                The 5-minute rule: reply fast, win more
              </h1>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>4 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Published January 27, 2025</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The research</h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                The classic Lead Response Management study (MIT/InsideSales) found the odds of contacting a lead in 5 minutes vs. 30 minutes drop ~100×, and qualification odds can be ~21× higher inside the first 5 minutes (
                <a 
                  href="https://cdn2.hubspot.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  MIT/InsideSales PDF
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ).
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Key Finding</h3>
                </div>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>21× higher qualification odds</strong> when responding within 5 minutes vs. 30+ minutes
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <a 
                  href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  Harvard Business Review
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                {' '}audited 2,241 U.S. firms and found the average response time among responders was ~42 hours, with 23% never responding.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">What this means for Atlanta businesses</h2>
              
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                <li>If a homeowner in Brookhaven calls three roofers, the first useful follow-up often wins the conversation.</li>
                <li>A 5-minute window is too tight for humans alone—use automation to reply instantly, then offer Call me now or Book a time.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Playbook</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">1. Missed call → SMS in seconds</h3>
                  <p className="text-green-800 dark:text-green-200">Automate instant text-back with branded messaging</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">2. Smart handoff</h3>
                  <p className="text-purple-800 dark:text-purple-200">Live call bridge in hours; booking link after hours</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">3. Measure</h3>
                  <p className="text-orange-800 dark:text-orange-200">Time-to-first-reply (p50/p90), contact rate, bookings</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Try instant text-back — see our live demo</h3>
                <p className="text-blue-100 mb-6">Experience how 5-minute response times work for your business</p>
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
                      href="https://cdn2.hubspot.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      MIT/InsideSales Lead Response Management
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      HBR: The Short Life of Online Sales Leads
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
