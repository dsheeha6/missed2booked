'use client'

import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { getErrorMessage } from '@/lib/form-utils'

const INDUSTRIES = [
  'Dental', 'HVAC', 'Salon', 'Restaurant', 'Retail', 'Healthcare', 
  'Legal', 'Real Estate', 'Fitness', 'Beauty', 'Automotive', 'Other'
]

const onboardingSchema = z.object({
  businessLegalName: z.string(),
  businessBrandName: z.string(),
  websiteUrl: z.string(),
  googleBusinessProfile: z.string(),
  businessAddress: z.string(),
  industry: z.string(),
  primaryContactName: z.string(),
  primaryContactRole: z.string(),
  primaryContactEmail: z.string(),
  primaryContactPhone: z.string(),
})

type OnboardingFormData = z.infer<typeof onboardingSchema>

interface BusinessBasicsStepProps {
  form: UseFormReturn<any>
}

export function BusinessBasicsStep({ form }: BusinessBasicsStepProps) {
  const { register, formState: { errors } } = form

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🔑 Business Basics</h3>
        <p className="text-gray-600">Tell us about your business so we can set everything up correctly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Legal Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Legal Name (as on EIN) *
          </label>
          <input
            {...register('businessLegalName')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ABC Dental LLC"
          />
          {errors.businessLegalName && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.businessLegalName)}</p>
          )}
        </div>

        {/* DBA / Public Brand Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            DBA / Public Brand Name *
          </label>
          <input
            {...register('businessBrandName')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Smile Bright Dental"
          />
          {errors.businessBrandName && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.businessBrandName)}</p>
          )}
        </div>

        {/* Website URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website URL *
          </label>
          <input
            {...register('websiteUrl')}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://smilebrightdental.com"
          />
          {errors.websiteUrl && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.websiteUrl)}</p>
          )}
        </div>

        {/* Google Business Profile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Google Business Profile Link
          </label>
          <input
            {...register('googleBusinessProfile')}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://g.page/smilebrightdental"
          />
          {errors.googleBusinessProfile && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.googleBusinessProfile)}</p>
          )}
        </div>

        {/* Business Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Address (no PO boxes) *
          </label>
          <textarea
            {...register('businessAddress')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123 Main Street, Suite 100, Atlanta, GA 30309"
          />
          {errors.businessAddress && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.businessAddress)}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry / Category *
          </label>
          <select
            {...register('industry')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an industry</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.industry)}</p>
          )}
        </div>
      </div>

      {/* Primary Contact Section */}
      <div className="border-t pt-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Primary Contact</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              {...register('primaryContactName')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Smith"
            />
            {errors.primaryContactName && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.primaryContactName)}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role / Title *
            </label>
            <input
              {...register('primaryContactRole')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Office Manager"
            />
            {errors.primaryContactRole && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.primaryContactRole)}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              {...register('primaryContactEmail')}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@smilebrightdental.com"
            />
            {errors.primaryContactEmail && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.primaryContactEmail)}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone *
            </label>
            <input
              {...register('primaryContactPhone')}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(404) 555-0123"
            />
            {errors.primaryContactPhone && (
              <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.primaryContactPhone)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
