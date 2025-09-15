'use client'

import { Button } from '@/components/ui/Button'
import SectionHeading from '@/components/SectionHeading'
import { Check, Globe, Shield, User, Phone, MessageSquare, Calendar, BarChart3, Zap } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: Phone,
      title: 'Instant text-back on missed/busy/no-answer calls',
      description: 'Never miss another opportunity with instant automated responses.'
    },
    {
      icon: MessageSquare,
      title: 'Two-way texting with quick replies and templates',
      description: 'Engage leads with professional, branded conversations.'
    },
    {
      icon: Phone,
      title: '"Call me now" bridge during business hours',
      description: 'Connect leads directly to you when you\'re available.'
    },
    {
      icon: Calendar,
      title: 'Booking link flow for after-hours and no-wait scheduling',
      description: 'Let leads book appointments 24/7 with your calendar.'
    },
    {
      icon: MessageSquare,
      title: 'Branded messages & links so it looks and feels like your company',
      description: 'Maintain your professional brand in every interaction.'
    },
    {
      icon: Zap,
      title: 'AI voice & text agent (Scale) to answer FAQs and book when you\'re unavailable',
      description: 'Never lose a lead, even when you\'re completely unavailable.'
    },
    {
      icon: BarChart3,
      title: 'Simple reporting that shows Missed → Replied → Booked → estimated revenue recovered',
      description: 'Track your success with clear, actionable metrics.'
    }
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Ring',
      description: 'A call is missed.'
    },
    {
      step: 2,
      title: 'Text',
      description: 'Missed2Booked texts back in seconds with your approved message.'
    },
    {
      step: 3,
      title: 'Booked',
      description: 'The lead taps Call now or Book a time—and you get the job.'
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="container-custom py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Missed2Booked</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We help businesses turn missed calls into booked jobs. When you can't pick up, we text the caller in seconds, offer "Call me now" or a booking link, and log the results so you can see the revenue you kept.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why we exist</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Most buyers contact two or three providers. The one that replies first usually wins. Missed2Booked makes sure you're that first helpful reply—every time.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24">
        <div className="container-custom">
          <SectionHeading
            title="What we do (today)"
            sub="Comprehensive solutions to turn every missed call into a booked job"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="container-custom">
          <SectionHeading
            title="How it works"
            sub="Ring → Text → Booked"
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built on Trusted Infrastructure */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Built on trusted infrastructure</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Missed2Booked runs on trusted telecom and automation infrastructure. We keep delivery reliable, secure, and compliant—without making you manage the tools behind the scenes.
            </p>
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Where we operate</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Global. We support customers worldwide. Messaging compliance and features vary by country; we'll guide you on best practices in your region.
            </p>
          </div>
        </div>
      </section>



      {/* Founder */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Founder</h2>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Danny — Atlanta, GA</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I started Missed2Booked to help teams capture the leads they already earned—without hiring more staff or learning new software. I personally handle setup, optimization, and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Getting started</h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a single line, prove the lift, then scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = '/demo'}
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white"
              >
                See the live demo
              </Button>
              <Button
                onClick={() => window.location.href = '/pricing'}
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white"
              >
                Compare plans
              </Button>
              <Button
                onClick={() => window.location.href = '/contact'}
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 border-white"
              >
                Book a 10-minute intro
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
