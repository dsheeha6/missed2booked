'use client'

import { UseFormReturn } from 'react-hook-form'
import { useState } from 'react'
import { getErrorMessage } from '@/lib/form-utils'

interface IntegrationsStepProps {
  form: UseFormReturn<any>
}

export function IntegrationsStep({ form }: IntegrationsStepProps) {
  const { register, formState: { errors }, watch, setValue } = form
  const [analyticsEmails, setAnalyticsEmails] = useState([''])

  const addAnalyticsEmail = () => {
    setAnalyticsEmails([...analyticsEmails, ''])
  }

  const updateAnalyticsEmail = (index: number, value: string) => {
    const updated = [...analyticsEmails]
    updated[index] = value
    setAnalyticsEmails(updated)
    setValue('analyticsEmails', updated.filter(email => email.trim() !== ''))
  }

  const removeAnalyticsEmail = (index: number) => {
    if (analyticsEmails.length > 1) {
      const updated = analyticsEmails.filter((_, i) => i !== index)
      setAnalyticsEmails(updated)
      setValue('analyticsEmails', updated.filter(email => email.trim() !== ''))
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🔗 Integrations</h3>
        <p className="text-gray-600">Connect your existing tools and systems.</p>
      </div>

      {/* CRM Integration */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          CRM System (Optional)
        </label>
        <select
          {...register('crm')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">No CRM</option>
          <option value="hubspot">HubSpot</option>
          <option value="salesforce">Salesforce</option>
          <option value="gohighlevel">GoHighLevel</option>
          <option value="pipedrive">Pipedrive</option>
          <option value="zoho">Zoho CRM</option>
          <option value="other">Other</option>
        </select>
        <p className="mt-1 text-xs text-gray-500">
          We can sync customer data and conversation history with your CRM
        </p>
      </div>

      {/* Inbox Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Inbox for Transcripts/Alerts (Optional)
        </label>
        <input
          {...register('inboxEmail')}
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="alerts@smilebrightdental.com"
        />
        <p className="mt-1 text-xs text-gray-500">
          Email address to receive conversation transcripts and alerts
        </p>
        {errors.inboxEmail && (
          <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.inboxEmail)}</p>
        )}
      </div>

      {/* Slack Channel */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Slack Channel (Optional)
        </label>
        <input
          {...register('slackChannel')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="#customer-alerts"
        />
        <p className="mt-1 text-xs text-gray-500">
          Slack channel to receive real-time notifications
        </p>
      </div>

      {/* Calendar System */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Calendar System (Optional)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: 'Google', label: 'Google Calendar' },
            { value: 'Outlook', label: 'Outlook' },
            { value: 'Other', label: 'Other' },
            { value: 'None', label: 'None' }
          ].map((option) => (
            <label key={option.value} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                {...register('calendarSystem')}
                type="radio"
                value={option.value}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.calendarSystem && (
          <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.calendarSystem)}</p>
        )}
      </div>

      {/* Analytics Emails */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Analytics Email Addresses (Optional)
        </label>
        <p className="text-sm text-gray-500 mb-4">
          Who should receive weekly performance reports?
        </p>
        {analyticsEmails.map((email, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <input
              value={email}
              onChange={(e) => updateAnalyticsEmail(index, e.target.value)}
              type="email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`analytics-email-${index + 1}@smilebrightdental.com`}
            />
            {analyticsEmails.length > 1 && (
              <button
                type="button"
                onClick={() => removeAnalyticsEmail(index)}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addAnalyticsEmail}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          + Add another email
        </button>
        {errors.analyticsEmails && (
          <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.analyticsEmails)}</p>
        )}
      </div>

      {/* Integration Benefits */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-medium text-green-900 mb-2">Integration Benefits</h4>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• Automatic customer data sync</li>
          <li>• Real-time conversation monitoring</li>
          <li>• Centralized reporting and analytics</li>
          <li>• Seamless workflow integration</li>
        </ul>
      </div>
    </div>
  )
}
