import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Clock, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'First Responder Wins? The 78% Claim — What Atlanta SMBs Should Know',
  description: 'Many industry surveys cite "78% choose the first responder." We unpack the claim, link sources, and show how to operationalize "be first."',
  openGraph: {
    title: 'First Responder Wins? The 78% Claim — What Atlanta SMBs Should Know',
    description: 'Many industry surveys cite "78% choose the first responder." We unpack the claim, link sources, and show how to operationalize "be first."',
  },
}

export default function FirstResponderAdvantagePage() {
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
                Do buyers pick the first responder? Here's what the data (and your ops) say.
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The claim (and how to use it)</h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Industry surveys frequently report that ~78% of customers buy from the first company to respond. This stat is commonly attributed to a LeadConnect survey and is referenced across sales-ops resources (
                <a 
                  href="https://www.vendasta.com/blog/lead-response-time/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  Vendasta
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                , 
                <a 
                  href="https://www.leandata.com/blog/the-modern-rules-of-lead-response-time/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  LeanData
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                , 
                <a 
                  href="https://www.leadfuze.com/the-sales-process/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  LeadFuze
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ). Treat it as directional rather than definitive research—but it aligns with the stronger MIT/HBR speed-to-lead evidence above.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-8">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-2" />
                  <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100">The 78% Claim</h3>
                </div>
                <p className="text-yellow-800 dark:text-yellow-200">
                  While not definitive research, this statistic is widely cited and aligns with stronger MIT/HBR evidence on response times.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">Why it tracks with reality</h2>
              
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                <li>Buyers compare 2–3 local options (think Atlanta HVAC).</li>
                <li>The first helpful reply sets expectations and earns trust.</li>
                <li>By the second reply, the buyer may already be scheduling.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Put it into practice</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">1. Be first automatically (instant SMS)</h3>
                  <p className="text-green-800 dark:text-green-200">Automate your first response to every missed call</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">2. Offer Call now (if open) or Book a time (after hours)</h3>
                  <p className="text-blue-800 dark:text-blue-200">Give immediate options for engagement</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">3. Keep replies short, branded, and human</h3>
                  <p className="text-purple-800 dark:text-purple-200">Maintain authenticity while being fast</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Reinforcing data</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  5-minute replies massively boost contact/qualify odds (MIT) and most firms are still slow (HBR), so "be first" is a practical advantage (
                  <a 
                    href="https://cdn2.hubspot.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                  >
                    MIT PDF
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  ; 
                  <a 
                    href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                  >
                    HBR
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  ).
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Be first automatically — try our demo</h3>
                <p className="text-blue-100 mb-6">See how instant response works for your Atlanta business</p>
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
                      href="https://www.vendasta.com/blog/lead-response-time/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      Vendasta on LeadConnect's 78% claim
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.leandata.com/blog/the-modern-rules-of-lead-response-time/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      LeanData citing 78%
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.leadfuze.com/the-sales-process/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      LeadFuze citing 78%
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://cdn2.hubspot.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      MIT/InsideSales PDF
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
                      HBR
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
