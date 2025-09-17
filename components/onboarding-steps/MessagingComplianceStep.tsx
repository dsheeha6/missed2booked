'use client'

import { UseFormReturn } from 'react-hook-form'
import { useState } from 'react'

interface MessagingComplianceStepProps {
  form: UseFormReturn<any>
}

export function MessagingComplianceStep({ form }: MessagingComplianceStepProps) {
  const { register, formState: { errors }, watch, setValue } = form
  const [sampleMessages, setSampleMessages] = useState(['', ''])

  const addSampleMessage = () => {
    setSampleMessages([...sampleMessages, ''])
  }

  const updateSampleMessage = (index: number, value: string) => {
    const updated = [...sampleMessages]
    updated[index] = value
    setSampleMessages(updated)
    setValue('sampleMessages', updated.filter(msg => msg.trim() !== ''))
  }

  const removeSampleMessage = (index: number) => {
    if (sampleMessages.length > 2) {
      const updated = sampleMessages.filter((_, i) => i !== index)
      setSampleMessages(updated)
      setValue('sampleMessages', updated.filter(msg => msg.trim() !== ''))
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">📝 Messaging Compliance (A2P 10DLC)</h3>
        <p className="text-gray-600">
          Required for U.S. businesses. This information is needed to register your brand with carriers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* EIN */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            EIN (9 digits) *
          </label>
          <input
            {...register('ein')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123456789"
            maxLength={9}
          />
          {errors.ein && (
            <p className="mt-1 text-sm text-red-600">{errors.ein.message}</p>
          )}
        </div>

        {/* Legal Entity Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Legal Entity Type *
          </label>
          <select
            {...register('legalEntityType')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select entity type</option>
            <option value="LLC">LLC</option>
            <option value="Corp">Corporation</option>
            <option value="Sole Prop">Sole Proprietorship</option>
            <option value="Partnership">Partnership</option>
            <option value="Non-Profit">Non-Profit</option>
          </select>
          {errors.legalEntityType && (
            <p className="mt-1 text-sm text-red-600">{errors.legalEntityType.message}</p>
          )}
        </div>

        {/* Business Website */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Website (must be public) *
          </label>
          <input
            {...register('businessWebsite')}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://smilebrightdental.com"
          />
          {errors.businessWebsite && (
            <p className="mt-1 text-sm text-red-600">{errors.businessWebsite.message}</p>
          )}
        </div>
      </div>

      {/* Sample Messages */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sample Outbound Messages (2-3 short texts) *
        </label>
        <p className="text-sm text-gray-500 mb-4">
          Provide examples of messages you'd actually send to customers
        </p>
        {sampleMessages.map((message, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <input
              value={message}
              onChange={(e) => updateSampleMessage(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Sample message ${index + 1}...`}
            />
            {sampleMessages.length > 2 && (
              <button
                type="button"
                onClick={() => removeSampleMessage(index)}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addSampleMessage}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          + Add another message
        </button>
        {errors.sampleMessages && (
          <p className="mt-1 text-sm text-red-600">{errors.sampleMessages.message}</p>
        )}
      </div>

      {/* Opt-in Method */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Opt-in Method *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: 'website-form', label: 'Website Form' },
            { value: 'phone', label: 'Phone' },
            { value: 'in-store', label: 'In-Store' },
            { value: 'existing-customers', label: 'Existing Customers' }
          ].map((option) => (
            <label key={option.value} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                {...register('optInMethod')}
                type="radio"
                value={option.value}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.optInMethod && (
          <p className="mt-1 text-sm text-red-600">{errors.optInMethod.message}</p>
        )}
      </div>

      {/* Compliance Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Compliance Notice</h4>
        <p className="text-sm text-blue-800">
          STOP/HELP keywords will be automatically inserted into your messages for compliance. 
          You must have a clear opt-in process and maintain records of customer consent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Privacy Policy URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Privacy Policy URL *
          </label>
          <input
            {...register('privacyPolicyUrl')}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://smilebrightdental.com/privacy"
          />
          {errors.privacyPolicyUrl && (
            <p className="mt-1 text-sm text-red-600">{errors.privacyPolicyUrl.message}</p>
          )}
        </div>

        {/* Terms of Service URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Terms of Service URL *
          </label>
          <input
            {...register('termsOfServiceUrl')}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://smilebrightdental.com/terms"
          />
          {errors.termsOfServiceUrl && (
            <p className="mt-1 text-sm text-red-600">{errors.termsOfServiceUrl.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}
