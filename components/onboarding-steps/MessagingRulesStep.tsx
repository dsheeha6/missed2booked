'use client'

import { UseFormReturn } from 'react-hook-form'

const FOLLOW_UP_TIMING = [
  '5 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '4 hours', '1 day'
]

interface MessagingRulesStepProps {
  form: UseFormReturn<any>
}

export function MessagingRulesStep({ form }: MessagingRulesStepProps) {
  const { register, formState: { errors } } = form

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🔄 Messaging Rules & Preferences</h3>
        <p className="text-gray-600">Configure how your automated messaging system should behave.</p>
      </div>

      {/* Enable Features */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Enable Features</h4>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input
              {...register('enableTwoWayTexting')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
            />
            <div>
              <div className="font-medium text-gray-900">Enable two-way texting</div>
              <div className="text-sm text-gray-500">
                Allow customers to respond to your automated messages
              </div>
            </div>
          </label>

          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input
              {...register('enableVoiceCallback')}
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
            />
            <div>
              <div className="font-medium text-gray-900">Enable voice callback option</div>
              <div className="text-sm text-gray-500">
                Give customers the option to request a phone call
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Booking Integration */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Booking Link *
        </label>
        <input
          {...register('bookingLink')}
          type="url"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://calendly.com/your-business"
        />
        <p className="mt-1 text-xs text-gray-500">
          Calendly, Acuity, Squarespace scheduling, or other booking platform
        </p>
        {errors.bookingLink && (
          <p className="mt-1 text-sm text-red-600">{errors.bookingLink.message}</p>
        )}
      </div>

      {/* Texting Hours */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Texting Hours</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Time *
            </label>
            <input
              {...register('textHoursStart')}
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.textHoursStart && (
              <p className="mt-1 text-sm text-red-600">{errors.textHoursStart.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Time *
            </label>
            <input
              {...register('textHoursEnd')}
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.textHoursEnd && (
              <p className="mt-1 text-sm text-red-600">{errors.textHoursEnd.message}</p>
            )}
          </div>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Messages will only be sent during these hours (local time)
        </p>
      </div>

      {/* After Hours Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          After-Hours Auto-Reply *
        </label>
        <textarea
          {...register('afterHoursMessage')}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Thanks for reaching out! We're currently closed but will respond during business hours (9am-5pm). For urgent matters, please call us at (404) 555-0123."
        />
        {errors.afterHoursMessage && (
          <p className="mt-1 text-sm text-red-600">{errors.afterHoursMessage.message}</p>
        )}
      </div>

      {/* Follow-up Settings */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow-up Settings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Follow-ups
            </label>
            <input
              {...register('followUpCount', { valueAsNumber: true })}
              type="number"
              min="0"
              max="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.followUpCount && (
              <p className="mt-1 text-sm text-red-600">{errors.followUpCount.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Between Follow-ups *
            </label>
            <select
              {...register('followUpTiming')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {FOLLOW_UP_TIMING.map((timing) => (
                <option key={timing} value={timing}>
                  {timing}
                </option>
              ))}
            </select>
            {errors.followUpTiming && (
              <p className="mt-1 text-sm text-red-600">{errors.followUpTiming.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Escalation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Escalation Trigger *
        </label>
        <textarea
          {...register('escalationTrigger')}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="When should a human be notified? (e.g., after 3 failed attempts, when customer says 'speak to manager', specific keywords, etc.)"
        />
        {errors.escalationTrigger && (
          <p className="mt-1 text-sm text-red-600">{errors.escalationTrigger.message}</p>
        )}
      </div>
    </div>
  )
}
