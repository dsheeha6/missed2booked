'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { PlanSelectionStep } from './onboarding-steps/PlanSelectionStep'
import { BusinessBasicsStep } from './onboarding-steps/BusinessBasicsStep'
import { PhoneSystemStep } from './onboarding-steps/PhoneSystemStep'
import { MessagingComplianceStep } from './onboarding-steps/MessagingComplianceStep'
import { MessagingRulesStep } from './onboarding-steps/MessagingRulesStep'
import { IntegrationsStep } from './onboarding-steps/IntegrationsStep'
import { BrandingStep } from './onboarding-steps/BrandingStep'
import { ApprovalsStep } from './onboarding-steps/ApprovalsStep'
import { OptionalStep } from './onboarding-steps/OptionalStep'

// Form validation schema
const onboardingSchema = z.object({
  // Plan Selection
  selectedPlan: z.enum(['starter', 'pro', 'scale'], {
    required_error: 'Please select a plan',
  }),

  // Business Basics
  businessLegalName: z.string().min(1, 'Business legal name is required'),
  businessBrandName: z.string().min(1, 'Brand name is required'),
  websiteUrl: z.string().url('Please enter a valid URL'),
  googleBusinessProfile: z.string().url('Please enter a valid URL'),
  businessAddress: z.string().min(1, 'Business address is required'),
  industry: z.string().min(1, 'Please select an industry'),
  primaryContactName: z.string().min(1, 'Primary contact name is required'),
  primaryContactRole: z.string().min(1, 'Primary contact role is required'),
  primaryContactEmail: z.string().email('Please enter a valid email'),
  primaryContactPhone: z.string().min(1, 'Primary contact phone is required'),

  // Phone System Details
  currentPhoneProvider: z.string().min(1, 'Please select a phone provider'),
  mainBusinessPhone: z.string().min(1, 'Main business phone is required'),
  phoneSetupOption: z.enum(['text-enable', 'new-number', 'temporary-port']),
  desiredAreaCode: z.string().optional(),
  callFlowNotes: z.string().optional(),

  // Messaging Compliance
  ein: z.string().regex(/^\d{9}$/, 'EIN must be 9 digits'),
  legalEntityType: z.enum(['LLC', 'Corp', 'Sole Prop', 'Partnership', 'Non-Profit']),
  businessWebsite: z.string().url('Please enter a valid website URL'),
  sampleMessages: z.array(z.string()).min(2, 'Please provide at least 2 sample messages'),
  optInMethod: z.enum(['website-form', 'phone', 'in-store', 'existing-customers']),
  privacyPolicyUrl: z.string().url('Please enter a valid privacy policy URL'),
  termsOfServiceUrl: z.string().url('Please enter a valid terms of service URL'),

  // Messaging Rules & Preferences
  enableTwoWayTexting: z.boolean(),
  enableVoiceCallback: z.boolean(),
  bookingLink: z.string().url('Please enter a valid booking link'),
  textHoursStart: z.string().min(1, 'Please select start time'),
  textHoursEnd: z.string().min(1, 'Please select end time'),
  afterHoursMessage: z.string().min(1, 'After hours message is required'),
  followUpCount: z.number().min(0).max(10),
  followUpTiming: z.string().min(1, 'Please select follow-up timing'),
  escalationTrigger: z.string().min(1, 'Please specify escalation trigger'),

  // Integrations
  crm: z.string().optional(),
  inboxEmail: z.string().email('Please enter a valid email'),
  slackChannel: z.string().optional(),
  calendarSystem: z.enum(['Google', 'Outlook', 'Other', 'None']),
  analyticsEmails: z.array(z.string().email()).min(1, 'Please enter at least one analytics email'),

  // Branding
  businessDisplayName: z.string().min(1, 'Business display name is required'),
  logoFile: z.any().optional(),
  brandVoice: z.array(z.string()).min(1, 'Please select at least one brand voice adjective'),

  // Approvals & Legal
  customerConsent: z.boolean().refine(val => val === true, 'You must confirm customer consent'),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),

  // Optional
  competitors: z.string().optional(),
  topGoals: z.array(z.string()).optional(),
  additionalNotes: z.string().optional(),
})

type OnboardingFormData = z.infer<typeof onboardingSchema>

const INDUSTRIES = [
  'Dental', 'HVAC', 'Salon', 'Restaurant', 'Retail', 'Healthcare', 
  'Legal', 'Real Estate', 'Fitness', 'Beauty', 'Automotive', 'Other'
]

const PHONE_PROVIDERS = [
  'RingCentral', 'Verizon', 'AT&T', 'T-Mobile', 'Sprint', 'Vonage', 
  '8x8', 'Nextiva', 'Grasshopper', 'Other'
]

const BRAND_VOICE_OPTIONS = [
  'Friendly', 'Professional', 'Witty', 'Casual', 'Formal', 'Warm', 
  'Energetic', 'Calm', 'Helpful', 'Direct'
]

const FOLLOW_UP_TIMING = [
  '5 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '4 hours', '1 day'
]

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 9

  const form = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      enableTwoWayTexting: true,
      enableVoiceCallback: true,
      followUpCount: 3,
      followUpTiming: '30 minutes',
      calendarSystem: 'Google',
      brandVoice: [],
      analyticsEmails: [],
      sampleMessages: ['', ''],
      customerConsent: false,
      acceptTerms: false,
    }
  })

  const onSubmit = async (data: OnboardingFormData) => {
    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        // Redirect to success page
        window.location.href = '/onboarding/success'
      } else {
        console.error('Form submission failed:', result.message)
        // Handle error - you might want to show a toast or error message
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error - you might want to show a toast or error message
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PlanSelectionStep form={form} />
      case 2:
        return <BusinessBasicsStep form={form} />
      case 3:
        return <PhoneSystemStep form={form} />
      case 4:
        return <MessagingComplianceStep form={form} />
      case 5:
        return <MessagingRulesStep form={form} />
      case 6:
        return <IntegrationsStep form={form} />
      case 7:
        return <BrandingStep form={form} />
      case 8:
        return <ApprovalsStep form={form} />
      case 9:
        return <OptionalStep form={form} />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Step {currentStep} of {totalSteps}
          </h2>
          <span className="text-sm text-gray-500">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Complete Setup
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
