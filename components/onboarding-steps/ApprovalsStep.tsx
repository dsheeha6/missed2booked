'use client'

import { UseFormReturn } from 'react-hook-form'
import { getErrorMessage } from '@/lib/form-utils'

interface ApprovalsStepProps {
  form: UseFormReturn<any>
}

export function ApprovalsStep({ form }: ApprovalsStepProps) {
  const { register, formState: { errors } } = form

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">✅ Approvals & Legal</h3>
        <p className="text-gray-600">Final step - confirm compliance and accept terms.</p>
      </div>

      {/* Customer Consent */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-yellow-900 mb-4">Customer Consent Requirements</h4>
        <p className="text-sm text-yellow-800 mb-4">
          Before we can start sending automated messages, you must confirm that your customers 
          have properly consented to receive text messages from your business.
        </p>
        
        <div className="space-y-3">
          <div className="text-sm text-yellow-800">
            <strong>Valid consent methods include:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• Website opt-in forms with clear language</li>
              <li>• Verbal consent during phone calls</li>
              <li>• In-store sign-up sheets</li>
              <li>• Existing customer database with consent records</li>
            </ul>
          </div>
        </div>

        <label className="flex items-start space-x-3 mt-4 p-4 bg-white rounded-lg border border-yellow-300 cursor-pointer hover:bg-yellow-25">
          <input
            {...register('customerConsent')}
            type="checkbox"
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
          />
          <div>
            <div className="font-medium text-gray-900">
              I confirm my customers have consented/opted in to receive texts *
            </div>
            <div className="text-sm text-gray-600 mt-1">
              I have proper documentation of customer consent and understand my legal obligations 
              under TCPA and A2P 10DLC regulations.
            </div>
          </div>
        </label>
        {errors.customerConsent && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.customerConsent)}</p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Terms and Conditions</h4>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-700">
            <p className="mb-2">
              By using Missed2Booked's services, you agree to our Terms of Service and Privacy Policy. 
              Please review these documents carefully.
            </p>
            
            <div className="space-y-2">
              <a 
                href="/legal/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Read Terms of Service →
              </a>
              <br />
              <a 
                href="/legal/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Read Privacy Policy →
              </a>
            </div>
          </div>
        </div>

        <label className="flex items-start space-x-3 mt-4 p-4 bg-white rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-25">
          <input
            {...register('acceptTerms')}
            type="checkbox"
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
          />
          <div>
            <div className="font-medium text-gray-900">
              I accept Missed2Booked's Terms of Service & Privacy Policy *
            </div>
            <div className="text-sm text-gray-600 mt-1">
              I have read and agree to be bound by the terms and conditions.
            </div>
          </div>
        </label>
        {errors.acceptTerms && (
          <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.acceptTerms)}</p>
        )}
      </div>

      {/* What Happens Next */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-blue-900 mb-4">🚀 What Happens Next?</h4>
        <div className="text-sm text-blue-800 space-y-3">
          <p>
            Once you complete this form, the next step is your 30-minute onboarding call.
            If you haven't booked that yet, please do so using the button below:
          </p>
          <div className="text-center">
            <a
              href="https://calendly.com/daniel-sheehan03/missed2booked-onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              👉 Book Your Onboarding Call
            </a>
          </div>
          <p className="mt-4">
            During and after your onboarding call, we will:
          </p>
          <ul className="ml-4 space-y-1">
            <li>• Set up your phone number and connect it to our messaging system</li>
            <li>• Configure your automated missed-call text flows</li>
            <li>• Apply your business name and preferences to the messages</li>
            <li>• Handle carrier compliance (Toll-Free Verification or 10DLC, if needed)</li>
            <li>• Connect any requested integrations</li>
          </ul>
          <p className="mt-4 font-medium">
            We're excited to get you live and start turning missed calls into bookings! 🎉
          </p>
        </div>
      </div>

    </div>
  )
}
