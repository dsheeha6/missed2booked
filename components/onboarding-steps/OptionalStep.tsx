'use client'

import { UseFormReturn } from 'react-hook-form'
import { useState } from 'react'

const GOAL_OPTIONS = [
  'More bookings', 'Faster response time', 'Fewer missed calls', 
  'Better customer experience', 'Reduce staff workload', 'Increase revenue',
  'Improve follow-up process', 'Better lead qualification'
]

interface OptionalStepProps {
  form: UseFormReturn<any>
}

export function OptionalStep({ form }: OptionalStepProps) {
  const { register, formState: { errors }, watch, setValue } = form
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  const handleGoalChange = (goal: string) => {
    const updated = selectedGoals.includes(goal)
      ? selectedGoals.filter(g => g !== goal)
      : [...selectedGoals, goal]
    setSelectedGoals(updated)
    setValue('topGoals', updated)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🛠️ Optional (but useful)</h3>
        <p className="text-gray-600">
          Help us understand your business better to provide more personalized service.
        </p>
      </div>

      {/* Competitors */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Competitors you want to differentiate from
        </label>
        <textarea
          {...register('competitors')}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="List your main competitors and what makes you different..."
        />
        <p className="mt-1 text-xs text-gray-500">
          This helps us craft messages that highlight your unique value proposition
        </p>
      </div>

      {/* Top Goals */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Top 3 Goals (Optional)
        </label>
        <p className="text-sm text-gray-500 mb-4">
          What are your main objectives with this system?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GOAL_OPTIONS.map((goal) => (
            <label
              key={goal}
              className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedGoals.includes(goal)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedGoals.includes(goal)}
                onChange={() => handleGoalChange(goal)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
              />
              <span className="text-sm font-medium">{goal}</span>
            </label>
          ))}
        </div>
        {selectedGoals.length > 3 && (
          <p className="mt-2 text-sm text-amber-600">
            Please select up to 3 goals for best results
          </p>
        )}
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Anything else we should know?
        </label>
        <textarea
          {...register('additionalNotes')}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any special requirements, preferences, or information that would help us serve you better..."
        />
        <p className="mt-1 text-xs text-gray-500">
          This information helps us customize your setup and provide better ongoing support
        </p>
      </div>

      {/* Success Preview */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">🎉 You're Almost Done!</h4>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            Once you complete this form, we'll have everything we need to:
          </p>
          <ul className="ml-4 space-y-1">
            <li>• Set up your automated messaging system</li>
            <li>• Configure your phone number and call flows</li>
            <li>• Register your brand for compliance</li>
            <li>• Apply your branding and preferences</li>
            <li>• Connect your integrations</li>
            <li>• Start converting missed calls into bookings!</li>
          </ul>
          <p className="mt-3 font-medium text-green-800">
            We'll send you a confirmation email with next steps within 24 hours.
          </p>
        </div>
      </div>

      {/* Support Information */}
      <div className="text-center">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
          <p className="text-sm text-gray-600 mb-3">
            Our team is here to help you get the most out of your setup.
          </p>
          <div className="space-y-1 text-sm text-gray-600">
            <p>📧 Email: <a href="mailto:support@missed2booked.com" className="text-blue-600 hover:text-blue-700">support@missed2booked.com</a></p>
            <p>📞 Phone: <a href="tel:+14045550123" className="text-blue-600 hover:text-blue-700">(404) 555-0123</a></p>
            <p>💬 Live Chat: Available on our website</p>
          </div>
        </div>
      </div>
    </div>
  )
}

