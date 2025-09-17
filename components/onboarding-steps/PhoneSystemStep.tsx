'use client'

import { UseFormReturn } from 'react-hook-form'

const PHONE_PROVIDERS = [
  'RingCentral', 'Verizon', 'AT&T', 'T-Mobile', 'Sprint', 'Vonage', 
  '8x8', 'Nextiva', 'Grasshopper', 'Other'
]

interface PhoneSystemStepProps {
  form: UseFormReturn<any>
}

export function PhoneSystemStep({ form }: PhoneSystemStepProps) {
  const { register, formState: { errors }, watch } = form
  const phoneSetupOption = watch('phoneSetupOption')

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">📞 Phone System Details</h3>
        <p className="text-gray-600">Help us understand your current phone setup and preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Phone Provider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Phone Provider *
          </label>
          <select
            {...register('currentPhoneProvider')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your provider</option>
            {PHONE_PROVIDERS.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
          {errors.currentPhoneProvider && (
            <p className="mt-1 text-sm text-red-600">{errors.currentPhoneProvider.message}</p>
          )}
        </div>

        {/* Main Business Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Main Business Phone Number (E.164 format) *
          </label>
          <input
            {...register('mainBusinessPhone')}
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+14045550123"
          />
          <p className="mt-1 text-xs text-gray-500">
            Format: +1 followed by 10-digit number
          </p>
          {errors.mainBusinessPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.mainBusinessPhone.message}</p>
          )}
        </div>
      </div>

      {/* Phone Setup Options */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          What would you like to do with your phone number? *
        </label>
        <div className="space-y-3">
          <label className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input
              {...register('phoneSetupOption')}
              type="radio"
              value="text-enable"
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <div>
              <div className="font-medium text-gray-900">Text-enable existing number</div>
              <div className="text-sm text-gray-500">
                Keep your current number and add SMS capabilities (if supported by your provider)
              </div>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input
              {...register('phoneSetupOption')}
              type="radio"
              value="new-number"
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <div>
              <div className="font-medium text-gray-900">Get a new local number</div>
              <div className="text-sm text-gray-500">
                Get a new number in your preferred area code
              </div>
              {phoneSetupOption === 'new-number' && (
                <div className="mt-2">
                  <input
                    {...register('desiredAreaCode')}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="404"
                  />
                  <p className="text-xs text-gray-500 mt-1">Area code (e.g., 404)</p>
                </div>
              )}
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input
              {...register('phoneSetupOption')}
              type="radio"
              value="temporary-port"
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <div>
              <div className="font-medium text-gray-900">Use temporary number now + port later</div>
              <div className="text-sm text-gray-500">
                Start with a temporary number and port your existing number later
              </div>
            </div>
          </label>
        </div>
        {errors.phoneSetupOption && (
          <p className="mt-2 text-sm text-red-600">{errors.phoneSetupOption.message}</p>
        )}
      </div>

      {/* Call Flow Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Call Flow Notes (Optional)
        </label>
        <textarea
          {...register('callFlowNotes')}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your current call flow, PBX/IVR setup, forwarding preferences, or any special requirements..."
        />
        <p className="mt-1 text-xs text-gray-500">
          Help us understand your current phone system setup
        </p>
      </div>
    </div>
  )
}
