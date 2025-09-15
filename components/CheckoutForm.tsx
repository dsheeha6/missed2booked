'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { PRICING_TIERS } from '@/constants/pricing'
import { formatPrice } from '@/lib/utils'
import { Loader2, Check, ArrowLeft } from 'lucide-react'

interface CheckoutFormProps {
  onBack?: () => void
}

export function CheckoutForm({ onBack }: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  
  const planId = searchParams.get('plan') as keyof typeof PRICING_TIERS
  const billing = searchParams.get('billing') as 'monthly' | 'annual'
  
  const tier = PRICING_TIERS[planId]
  const isAnnual = billing === 'annual'
  
  const price = isAnnual ? tier?.annual.price : tier?.monthly.price
  const priceId = isAnnual ? tier?.annual.priceId : tier?.monthly.priceId
  
  const handleCheckout = async () => {
    if (!tier || !priceId) {
      setError('Invalid pricing configuration')
      return
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/pricing?success=true`,
          cancelUrl: `${window.location.origin}/pricing?canceled=true`,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create checkout session')
      }
      
      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setIsLoading(false)
    }
  }
  
  if (!tier || !priceId) {
    return (
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Plan Not Found</h2>
        <p className="text-gray-600 mb-6">The selected plan could not be found.</p>
        {onBack && (
          <Button onClick={onBack} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pricing
          </Button>
        )}
      </div>
    )
  }
  
  return (
    <div className="max-w-md mx-auto">
      <div className="glass-card p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">{tier.name} Plan</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{tier.description}</p>
          
          <div className="mb-6">
            <div className="text-4xl font-bold gradient-text mb-2">
              {formatPrice(price)}
              <span className="text-lg text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {isAnnual ? 'Billed annually' : 'Billed monthly'}
            </div>
            {isAnnual && (
              <div className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                Save {formatPrice(tier.monthly.price - tier.annual.price)}/month vs monthly billing
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-lg">What's included:</h3>
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}
        
        <div className="space-y-4">
          <Button
            onClick={handleCheckout}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              `Start Today - ${isAnnual ? 'Billed Annually' : 'Billed Monthly'}`
            )}
          </Button>
          
          {onBack && (
            <Button onClick={onBack} variant="outline" className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Pricing
            </Button>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Start with a 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
