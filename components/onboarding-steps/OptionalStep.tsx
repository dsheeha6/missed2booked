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


    </div>
  )
}

