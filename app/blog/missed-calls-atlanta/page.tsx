import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Phone, DollarSign, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Missed Calls in Atlanta SMBs: Data, Costs & Fixes (2025)',
  description: 'Estimates suggest many Atlanta small businesses miss ~50–60% of inbound calls. See the data, what it costs you, and 3 fixes to stop the bleed.',
  openGraph: {
    title: 'Missed Calls in Atlanta SMBs: Data, Costs & Fixes (2025)',
    description: 'Estimates suggest many Atlanta small businesses miss ~50–60% of inbound calls. See the data, what it costs you, and 3 fixes to stop the bleed.',
  },
}

export default function MissedCallsAtlantaPage() {
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
                How many inbound calls do Atlanta small businesses miss?
              </h1>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Published January 27, 2025</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The quick take</h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Multiple industry analyses estimate that a large share of SMB calls go unanswered—often reported around ~62%. One widely cited study of 85 small businesses found 62% of calls went unanswered (
                <a 
                  href="https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  411 Locals
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ). A round-up referencing the same finding appears here from 
                <a 
                  href="https://www.numa.com/blog/22-business-phone-statistics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center ml-1"
                >
                  Numa
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                . Treat it as an estimate, but the direction is clear: missed calls cost real money in Atlanta home services, dental, med-spa, and contractor verticals.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">Why SMBs miss calls</h2>
              
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                <li>Micro teams (owner-operator, 1–3 staff), lunchtime rush, job-site noise</li>
                <li>After-hours & weekends</li>
                <li>Parallel tasks (in-person customers, on the road)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What it costs you</h2>
              
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                <li>New-lead loss (caller dials competitors in Decatur, Sandy Springs, Marietta)</li>
                <li>Lifetime value loss (repeat revenue + referrals)</li>
                <li>Ad-waste (paid click → phone call → no answer)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3 fixes that work in Atlanta</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">1. Instant text-back on missed calls</h3>
                  <p className="text-blue-800 dark:text-blue-200">"Sorry we missed you—want us to call now or book a time?"</p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">2. Call-me-now bridge (during open hours)</h3>
                  <p className="text-green-800 dark:text-green-200">Connect both parties in seconds.</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">3. After-hours auto-booking</h3>
                  <p className="text-purple-800 dark:text-purple-200">Send a branded link; fill the morning schedule.</p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Bonus: voicemail isn't a plan</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                  Research suggests many callers won't leave voicemail (e.g., UK/US small-biz report: 69% don't leave messages) — pushing you to text and booking links instead (
                  <a 
                    href="https://www.moneypenny.com/us/resources/news/small-business-call-report/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-700 dark:text-yellow-300 hover:underline inline-flex items-center"
                  >
                    Moneypenny report
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  ).
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">See it live — text yourself the demo</h3>
                <p className="text-blue-100 mb-6">Experience how instant text-back works for your business</p>
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
                      href="https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      411 Locals: SMBs Don't Answer 62% of Phone Calls
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.numa.com/blog/22-business-phone-statistics" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      Numa roundup citing 411 Locals
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.moneypenny.com/us/resources/news/small-business-call-report/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      Moneypenny Small Business Call Report
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
