'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ChevronLeft, ChevronRight, AlertCircle, X } from 'lucide-react'
import { PlanSelectionStep } from './onboarding-steps/PlanSelectionStep'
import { BusinessBasicsStep } from './onboarding-steps/BusinessBasicsStep'
import { PhoneSystemStep } from './onboarding-steps/PhoneSystemStep'
import { MessagingComplianceStep } from './onboarding-steps/MessagingComplianceStep'
import { IntegrationsStep } from './onboarding-steps/IntegrationsStep'
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
  googleBusinessProfile: z.string().optional(),
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

  // Messaging Compliance (optional)
  ein: z.string().optional(),
  legalEntityType: z.enum(['LLC', 'Corp', 'Sole Prop', 'Partnership', 'Non-Profit']).optional(),
  businessWebsite: z.string().optional(),
  sampleMessages: z.array(z.string()).optional(),
  optInMethod: z.enum(['website-form', 'phone', 'in-store', 'existing-customers']).optional(),
  privacyPolicyUrl: z.string().optional(),
  termsOfServiceUrl: z.string().optional(),

  // Integrations
  crm: z.string().optional(),
  inboxEmail: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  slackChannel: z.string().optional(),
  calendarSystem: z.enum(['Google', 'Outlook', 'Other', 'None']).optional(),
  analyticsEmails: z.array(z.string().email()).optional(),

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
  const [showValidationErrors, setShowValidationErrors] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const totalSteps = 7

  const form = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      selectedPlan: undefined, // Explicitly set to undefined to ensure validation works
      calendarSystem: 'Google',
      analyticsEmails: [],
      sampleMessages: ['', ''],
      customerConsent: false,
      acceptTerms: false,
      inboxEmail: '',
    }
  })

  // Function to get user-friendly field names
  const getFieldDisplayName = (fieldName: string): string => {
    const fieldNames: Record<string, string> = {
      selectedPlan: 'Plan Selection',
      businessLegalName: 'Business Legal Name',
      businessBrandName: 'Brand Name',
      websiteUrl: 'Website URL',
      googleBusinessProfile: 'Google Business Profile',
      businessAddress: 'Business Address',
      industry: 'Industry',
      primaryContactName: 'Primary Contact Name',
      primaryContactRole: 'Primary Contact Role',
      primaryContactEmail: 'Primary Contact Email',
      primaryContactPhone: 'Primary Contact Phone',
      currentPhoneProvider: 'Phone Provider',
      mainBusinessPhone: 'Main Business Phone',
      phoneSetupOption: 'Phone Setup Option',
      ein: 'EIN (Tax ID)',
      legalEntityType: 'Legal Entity Type',
      businessWebsite: 'Business Website',
      sampleMessages: 'Sample Messages',
      optInMethod: 'Opt-in Method',
      privacyPolicyUrl: 'Privacy Policy URL',
      termsOfServiceUrl: 'Terms of Service URL',
      inboxEmail: 'Inbox Email',
      calendarSystem: 'Calendar System',
      analyticsEmails: 'Analytics Emails',
      customerConsent: 'Customer Consent Confirmation',
      acceptTerms: 'Terms and Conditions Acceptance'
    }
    return fieldNames[fieldName] || fieldName
  }

  // Function to identify missing required fields
  const getMissingRequiredFields = (data: Partial<OnboardingFormData>): string[] => {
    const missingFields: string[] = []
    
    // Required fields from the schema (excluding step 4 - Messaging Compliance and step 5 - Integrations)
    const requiredFields = [
      'selectedPlan', 'businessLegalName', 'businessBrandName', 'websiteUrl', 
      'businessAddress', 'industry', 'primaryContactName',
      'primaryContactRole', 'primaryContactEmail', 'primaryContactPhone',
      'currentPhoneProvider', 'mainBusinessPhone', 'phoneSetupOption',
      'customerConsent', 'acceptTerms'
    ]

    requiredFields.forEach(field => {
      const value = data[field as keyof OnboardingFormData]
      
      if (field === 'sampleMessages') {
        if (!value || !Array.isArray(value) || value.length < 2 || value.some(msg => !msg.trim())) {
          missingFields.push(field)
        }
      } else if (field === 'analyticsEmails') {
        if (!value || !Array.isArray(value) || value.length < 1) {
          missingFields.push(field)
        }
      } else if (field === 'customerConsent' || field === 'acceptTerms') {
        if (!value) {
          missingFields.push(field)
        }
      } else if (!value || (typeof value === 'string' && !value.trim())) {
        missingFields.push(field)
      }
    })

    return missingFields
  }

  // Function to get the step number for a field
  const getStepForField = (fieldName: string): number => {
    const fieldToStepMap: Record<string, number> = {
      selectedPlan: 1,
      businessLegalName: 2,
      businessBrandName: 2,
      websiteUrl: 2,
      googleBusinessProfile: 2,
      businessAddress: 2,
      industry: 2,
      primaryContactName: 2,
      primaryContactRole: 2,
      primaryContactEmail: 2,
      primaryContactPhone: 2,
      currentPhoneProvider: 3,
      mainBusinessPhone: 3,
      phoneSetupOption: 3,
      ein: 4,
      legalEntityType: 4,
      businessWebsite: 4,
      sampleMessages: 4,
      optInMethod: 4,
      privacyPolicyUrl: 4,
      termsOfServiceUrl: 4,
      inboxEmail: 5,
      calendarSystem: 5,
      analyticsEmails: 5,
      customerConsent: 6,
      acceptTerms: 6
    }
    return fieldToStepMap[fieldName] || 1
  }

  // Function to navigate to the first step with missing fields
  const goToFirstMissingField = (missingFields: string[]) => {
    if (missingFields.length === 0) return
    
    const firstMissingField = missingFields[0]
    const targetStep = getStepForField(firstMissingField)
    setCurrentStep(targetStep)
  }

  const onSubmit = async (data: OnboardingFormData) => {
    // Check for missing required fields
    const missingFields = getMissingRequiredFields(data)
    
    if (missingFields.length > 0) {
      const missingFieldNames = missingFields.map(field => getFieldDisplayName(field))
      setValidationErrors(missingFieldNames)
      setShowValidationErrors(true)
      
      // Navigate to the first step with missing fields
      goToFirstMissingField(missingFields)
      
      // Scroll to top to show the error message
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Hide validation errors if all fields are filled
    setShowValidationErrors(false)
    setValidationErrors([])
    setSubmitError(null)
    setIsSubmitting(true)

    try {
      // Use Netlify function endpoint - local development server or production
      const endpoint = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:9999/.netlify/functions/onboarding'
        : '/.netlify/functions/onboarding'
      
      const response = await fetch(endpoint, {
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
        setSubmitError(result.message || 'Form submission failed. Please try again.')
        console.error('Form submission failed:', result.message)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.'
      setSubmitError(errorMessage)
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    console.log('Next step clicked, current step:', currentStep, 'total steps:', totalSteps)
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      // Clear validation errors when user navigates
      setShowValidationErrors(false)
      console.log('Moved to step:', currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      // Clear validation errors when user navigates
      setShowValidationErrors(false)
    }
  }

  // Function to clear validation errors when user starts filling fields
  const clearValidationErrors = () => {
    setShowValidationErrors(false)
    setValidationErrors([])
    setSubmitError(null)
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
        return <IntegrationsStep form={form} />
      case 6:
        return <ApprovalsStep form={form} />
      case 7:
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

      {/* Validation Errors */}
      {showValidationErrors && validationErrors.length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-red-800 mb-2">
                Please complete the following required fields:
              </h3>
              <ul className="text-sm text-red-700 space-y-1 mb-3">
                {validationErrors.map((field, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                    {field}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const currentData = form.getValues()
                    const missingFields = getMissingRequiredFields(currentData)
                    goToFirstMissingField(missingFields)
                  }}
                  className="text-xs bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-md transition-colors"
                >
                  Go to First Missing Field
                </button>
                <button
                  type="button"
                  onClick={clearValidationErrors}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
            <button
              onClick={clearValidationErrors}
              className="ml-3 text-red-400 hover:text-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Submit Error */}
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-red-800 mb-2">
                Submission Failed
              </h3>
              <p className="text-sm text-red-700 mb-3">{submitError}</p>
              <button
                type="button"
                onClick={() => setSubmitError(null)}
                className="text-xs bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-md transition-colors"
              >
                Dismiss
              </button>
            </div>
            <button
              onClick={() => setSubmitError(null)}
              className="ml-3 text-red-400 hover:text-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isSubmitting && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
            <p className="text-sm font-medium text-blue-800">
              Submitting your information...
            </p>
          </div>
        </div>
      )}

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
              onClick={() => {
                console.log('Next button clicked, current form values:', form.getValues())
                console.log('Current step:', currentStep)
                nextStep()
              }}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2"
              onClick={(e) => {
                // Prevent default form submission to handle validation manually
                e.preventDefault()
                
                // Get current form values
                const currentData = form.getValues()
                
                // Check for missing required fields
                const missingFields = getMissingRequiredFields(currentData)
                
                if (missingFields.length > 0) {
                  const missingFieldNames = missingFields.map(field => getFieldDisplayName(field))
                  setValidationErrors(missingFieldNames)
                  setShowValidationErrors(true)
                  
                  // Navigate to the first step with missing fields
                  goToFirstMissingField(missingFields)
                  
                  // Scroll to top to show the error message
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  return
                }
                
                // If validation passes, submit the form
                onSubmit(currentData)
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Complete Setup
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
