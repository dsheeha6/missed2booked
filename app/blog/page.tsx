import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Missed2Booked',
  description: 'Insights on missed calls, lead response times, and automation for Atlanta small businesses.',
}

const blogPosts = [
  {
    slug: 'missed-calls-atlanta',
    title: 'How Many Calls Do Atlanta Small Businesses Miss? (And How to Fix It)',
    description: 'Estimates suggest many Atlanta small businesses miss ~50–60% of inbound calls. See the data, what it costs you, and 3 fixes to stop the bleed.',
    publishDate: '2025-01-27',
    readTime: '5 min read',
  },
  {
    slug: 'speed-to-lead-5-minutes',
    title: 'Speed-to-Lead: Why Replying in 5 Minutes Boosts Wins (Up to 21×)',
    description: 'Responding within 5 minutes dramatically improves contact & qualification. See MIT/HBR research and how Atlanta SMBs can automate it.',
    publishDate: '2025-01-27',
    readTime: '4 min read',
  },
  {
    slug: 'first-responder-advantage',
    title: 'The First-Responder Advantage: Do 78% Really Choose the First Vendor?',
    description: 'Many industry surveys cite "78% choose the first responder." We unpack the claim, link sources, and show how to operationalize "be first."',
    publishDate: '2025-01-27',
    readTime: '4 min read',
  },
  {
    slug: 'sms-open-rate-98',
    title: 'Do People Actually Read Texts? (Yes—SMS Open Rates Near 98%)',
    description: 'CTIA reports SMS open rates near 98%—far above email. Here\'s why texts cut through and how to use them responsibly.',
    publishDate: '2025-01-27',
    readTime: '3 min read',
  },
  {
    slug: 'automation-ai-small-business-atlanta',
    title: 'Automation & AI for Local Businesses: Benefits, Risks, and How to Start',
    description: 'What automation/AI realistically does for local businesses, with credible research and a 3-step starter plan for Atlanta teams.',
    publishDate: '2025-01-27',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 pt-20">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights on missed calls, lead response times, and automation for small businesses.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
