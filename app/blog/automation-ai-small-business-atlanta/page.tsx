import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Clock, Bot, TrendingUp, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automation & AI for Atlanta SMBs: Benefits and How to Start (2025)',
  description: 'What automation/AI realistically does for local businesses, with credible research and a 3-step starter plan for Atlanta teams.',
  openGraph: {
    title: 'Automation & AI for Atlanta SMBs: Benefits and How to Start (2025)',
    description: 'What automation/AI realistically does for local businesses, with credible research and a 3-step starter plan for Atlanta teams.',
  },
}

export default function AutomationAIPage() {
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
                Automation & AI for Atlanta businesses: practical wins and a safe starting plan
              </h1>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Published January 27, 2025</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The upside (what credible research says)</h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Foundational work by McKinsey Global Institute estimates that ~45% of activities people are paid to do can be automated with demonstrated tech, and ~60% of occupations have 30%+ of tasks that could be automated (
                <a 
                  href="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/digital%20disruption/harnessing%20automation%20for%20a%20future%20that%20works/mgi-a-future-that-works_in-brief.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  MGI brief
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ; 
                <a 
                  href="https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/where%20machines%20could%20replace%20humans%20and%20where%20they%20cant/where-machines-could-replace-humans-and-where-they-cant-yet.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  2016/2017 detail
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ).
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                <div className="flex items-center mb-4">
                  <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Automation Potential</h3>
                </div>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>45%</strong> of activities can be automated with current tech
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Generative AI could add ~0.5–3.4 percentage points to annual productivity growth when combined with other automation tech and process change (
                <a 
                  href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  MGI 2023
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ; 
                <a 
                  href="https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20economic%20potential%20of%20generative%20ai%20the%20next%20productivity%20frontier/the-economic-potential-of-generative-ai-the-next-productivity-frontier.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  PDF here
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ).
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                U.S. small-business adoption is rising: the U.S. Chamber of Commerce (2024) reports ~40% of SMBs using AI (and 98% using AI-enabled tools broadly) (
                <a 
                  href="https://www.uschamber.com/assets/documents/Impact-of-Technology-on-Small-Business-Report-2024.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  report PDF
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                ).
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Reality check</h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Tech isn't magic—benefits come when you update workflows and skills (the productivity "J-curve"). Start small, measure, iterate. (See MGI's framing on adoption and skills in their 2024 future-of-work updates.)
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">Where Atlanta SMBs win first</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Speed-to-lead</h3>
                  <p className="text-green-800 dark:text-green-200">Instant text-back; call-me-now bridge</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Scheduling automation</h3>
                  <p className="text-blue-800 dark:text-blue-200">Branded booking link; reminders</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">FAQ deflection</h3>
                  <p className="text-purple-800 dark:text-purple-200">AI text/voice agent for hours, pricing ranges, service areas</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">After-hours coverage</h3>
                  <p className="text-orange-800 dark:text-orange-200">AI + auto-booking</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3-step implementation plan</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Pick one high-leak moment (missed calls)</h3>
                  <p className="text-gray-700 dark:text-gray-300">Define success: reply &lt;10s, +X bookings/mo.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Ship a basic workflow (text-back + link)</h3>
                  <p className="text-gray-700 dark:text-gray-300">Add call bridge in hours, auto-booking after hours.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Review monthly</h3>
                  <p className="text-gray-700 dark:text-gray-300">Time-to-reply, reply→booking, revenue recovered. Expand only what works.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Guardrails</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">A2P 10DLC registration; opt-outs everywhere (STOP).</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">Human handoff for edge cases; keep AI short and helpful.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">Document what the AI can/can't say; review early calls/texts.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Start with missed calls — try our automation</h3>
                <p className="text-blue-100 mb-6">See how AI and automation work for your Atlanta business</p>
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
                      href="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/digital%20disruption/harnessing%20automation%20for%20a%20future%20that%20works/mgi-a-future-that-works_in-brief.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      McKinsey (automation potential, 45% / 60% of occupations 30%+)
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/where%20machines%20could%20replace%20humans%20and%20where%20they%20cant/where-machines-could-replace-humans-and-where-they-cant-yet.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      McKinsey detailed automation study
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      McKinsey (generative AI productivity)
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20economic%20potential%20of%20generative%20ai%20the%20next%20productivity%20frontier/the-economic-potential-of-generative-ai-the-next-productivity-frontier.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      McKinsey generative AI PDF
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.uschamber.com/assets/documents/Impact-of-Technology-on-Small-Business-Report-2024.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      U.S. Chamber (SMB tech & AI 2024)
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
