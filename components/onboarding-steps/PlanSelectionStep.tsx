'use client'

import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { getErrorMessage } from '@/lib/form-utils'

const onboardingSchema = z.object({
  selectedPlan: z.enum(['starter', 'pro', 'scale'], {
    required_error: 'Please select a plan',
  }),
})

type OnboardingFormData = z.infer<typeof onboardingSchema>

interface PlanSelectionStepProps {
  form: UseFormReturn<any>
}

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    features: [
      'Instant text-back to missed calls',
      '1 automated follow-up message',
      'Basic analytics & reporting',
      '1 onboarding call included',
      '500 SMS messages/month',
      'Email support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Most popular for growing businesses',
    features: [
      'Everything in Starter',
      'Two-way texting conversations',
      'Booking link integration',
      'Voice callback option',
      'Custom branding',
      '2 strategy calls/month',
      '2,000 SMS messages/month',
      '200 voice minutes/month',
      'Priority support'
    ]
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'AI agent + custom rules + ROI insights',
    features: [
      'Everything in Pro',
      'AI voice & text agent',
      '300 AI minutes/mo included',
      'Custom workflow automation',
      'Advanced analytics & monthly ROI insight email',
      'Priority support queue'
    ]
  }
]

export function PlanSelectionStep({ form }: PlanSelectionStepProps) {
  const { register, watch, formState: { errors } } = form
  const selectedPlan = watch('selectedPlan')

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">📋 Plan Selection</h3>
        <p className="text-gray-600">Which plan did you choose? This helps us customize your setup.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${
              selectedPlan === plan.id
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            
            <label className="block cursor-pointer">
              <input
                {...register('selectedPlan')}
                type="radio"
                value={plan.id}
                className="sr-only"
              />
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <ul className="text-left space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </label>
          </div>
        ))}
      </div>

      {errors.selectedPlan && (
        <p className="text-center text-sm text-red-600">{getErrorMessage(errors.selectedPlan)}</p>
      )}
    </div>
  )
}
