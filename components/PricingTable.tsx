'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PRICING_TIERS, FOUNDING_SPOTS_LEFT } from '@/constants/pricing'
import { formatPrice } from '@/lib/utils'

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getPrice = (tier: typeof PRICING_TIERS[keyof typeof PRICING_TIERS]) => {
    return isAnnual ? tier.annual.price : tier.monthly.price
  }

  const getPriceId = (tier: typeof PRICING_TIERS[keyof typeof PRICING_TIERS]) => {
    return isAnnual ? tier.annual.priceId : tier.monthly.priceId
  }

  const getMonthlySavings = (tier: typeof PRICING_TIERS[keyof typeof PRICING_TIERS]) => {
    return tier.monthly.price - tier.annual.price
  }

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`${
                  isAnnual ? 'translate-x-1' : 'translate-x-6'
                } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-300 transition-transform`}
              />
            </button>
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            {isAnnual && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Save 2 months
              </span>
            )}
          </div>

          {/* Founding spots counter */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4 mr-2" />
            Founding 10 get setup fee waived — {FOUNDING_SPOTS_LEFT} spots left
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.values(PRICING_TIERS).map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${
                tier.popular ? 'md:scale-105 md:-mt-4' : ''
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`glass-card p-8 h-full relative overflow-hidden group hover:scale-105 transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-blue-500/50 shadow-2xl' : ''
              }`}>
                {/* Background gradient for popular */}
                {tier.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20" />
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{tier.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold gradient-text">
                        {formatPrice(getPrice(tier))}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
                      {isAnnual ? 'Billed annually' : 'Billed monthly'}
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Save {formatPrice(getMonthlySavings(tier))}/month vs monthly billing
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                          {feature.includes('300 AI minutes/mo included') && (
                            <span 
                              className="text-xs opacity-70 ml-1 cursor-help" 
                              title="Counts active agent talk time. Keep agent concise to conserve minutes."
                            >
                              ⓘ
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                    {tier.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500 dark:text-gray-400 line-through">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : ''
                    }`}
                    variant={tier.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href={
                      tier.id === 'scale' && isAnnual 
                        ? 'https://buy.stripe.com/8x228s5LobQ27ch77L4ko05'
                        : tier.id === 'scale' && !isAnnual
                        ? 'https://buy.stripe.com/4gMeVeehU9HUbsxbo14ko04'
                        : tier.id === 'pro' && isAnnual
                        ? 'https://buy.stripe.com/6oUcN6c9Mg6i8gleAd4ko03'
                        : tier.id === 'pro' && !isAnnual
                        ? 'https://buy.stripe.com/3cIeVe1v8aLY9kp63H4ko02'
                        : tier.id === 'starter' && isAnnual
                        ? 'https://buy.stripe.com/fZu7sM2zc9HU0NTgIl4ko01'
                        : tier.id === 'starter' && !isAnnual
                        ? 'https://buy.stripe.com/28E28sc9Mg6i7ch77L4ko00'
                        : `/pricing?plan=${tier.id}&billing=${isAnnual ? 'annual' : 'monthly'}`
                    }>
                      {tier.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overage rates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Overage Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">SMS:</span> $0.02 each
              </div>
              <div>
                <span className="font-medium">Voice:</span> $0.05/min
              </div>
              <div>
                <span className="font-medium">AI:</span> $0.12/min
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              A2P 10DLC fees are separate and vary by carrier
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
