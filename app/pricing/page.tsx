'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Metadata } from 'next'
import MiniStats from '@/components/MiniStats'
import { PricingTable } from '@/components/PricingTable'
import { CheckoutForm } from '@/components/CheckoutForm'
import { FAQ } from '@/components/FAQ'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'

function PricingPageContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')
  const success = searchParams.get('success')
  const canceled = searchParams.get('canceled')
  
  const handleBackToPricing = () => {
    window.location.href = '/pricing'
  }
  
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="max-w-md mx-auto text-center">
          <div className="glass-card p-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-4">Welcome to Missed2Booked!</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your subscription is active and your 14-day free trial has started. 
              Check your email for next steps.
            </p>
            <button
              onClick={handleBackToPricing}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Pricing
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  if (canceled) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="max-w-md mx-auto text-center">
          <div className="glass-card p-8">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-4">Checkout Canceled</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              No worries! You can always come back and start your free trial when you're ready.
            </p>
            <button
              onClick={handleBackToPricing}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Pricing
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  if (plan) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-16">
        <CheckoutForm onBack={handleBackToPricing} />
      </div>
    )
  }
  
  return (
    <>
      <MiniStats />
      <PricingTable />
      <FAQ />
      <CalendlyEmbed />
    </>
  )
}

export default function PricingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <PricingPageContent />
    </Suspense>
  )
}
