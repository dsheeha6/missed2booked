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

      {/* Compliance Notice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-green-900 mb-4">What Happens Next?</h4>
        <div className="text-sm text-green-800 space-y-2">
          <p>Once you complete this form, we will:</p>
          <ul className="ml-4 space-y-1">
            <li>• Register your brand with carriers for A2P 10DLC compliance</li>
            <li>• Set up your Twilio sub-account and phone number</li>
            <li>• Configure your automated messaging flows</li>
            <li>• Apply your branding and preferences</li>
            <li>• Send you setup confirmation and next steps</li>
          </ul>
          <p className="mt-3 font-medium">
            This process typically takes 1-2 business days to complete.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center text-sm text-gray-600">
        <p>
          Questions about compliance or setup? Contact us at{' '}
          <a href="mailto:support@missed2booked.com" className="text-blue-600 hover:text-blue-700">
            support@missed2booked.com
          </a>
        </p>
      </div>
    </div>
  )
}
