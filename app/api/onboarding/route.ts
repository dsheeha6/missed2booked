import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema for the onboarding data
const onboardingSchema = z.object({
  // Business Basics
  businessLegalName: z.string().min(1),
  businessBrandName: z.string().min(1),
  websiteUrl: z.string().url(),
  googleBusinessProfile: z.string().url(),
  businessAddress: z.string().min(1),
  industry: z.string().min(1),
  primaryContactName: z.string().min(1),
  primaryContactRole: z.string().min(1),
  primaryContactEmail: z.string().email(),
  primaryContactPhone: z.string().min(1),

  // Phone System Details
  currentPhoneProvider: z.string().min(1),
  mainBusinessPhone: z.string().min(1),
  phoneSetupOption: z.enum(['text-enable', 'new-number', 'temporary-port']),
  desiredAreaCode: z.string().optional(),
  callFlowNotes: z.string().optional(),

  // Messaging Compliance
  ein: z.string().regex(/^\d{9}$/),
  legalEntityType: z.enum(['LLC', 'Corp', 'Sole Prop', 'Partnership', 'Non-Profit']),
  businessWebsite: z.string().url(),
  sampleMessages: z.array(z.string()).min(2),
  optInMethod: z.enum(['website-form', 'phone', 'in-store', 'existing-customers']),
  privacyPolicyUrl: z.string().url(),
  termsOfServiceUrl: z.string().url(),

  // Messaging Rules & Preferences
  enableTwoWayTexting: z.boolean(),
  enableVoiceCallback: z.boolean(),
  bookingLink: z.string().url(),
  textHoursStart: z.string().min(1),
  textHoursEnd: z.string().min(1),
  afterHoursMessage: z.string().min(1),
  followUpCount: z.number().min(0).max(10),
  followUpTiming: z.string().min(1),
  escalationTrigger: z.string().min(1),

  // Integrations
  crm: z.string().optional(),
  inboxEmail: z.string().email(),
  slackChannel: z.string().optional(),
  calendarSystem: z.enum(['Google', 'Outlook', 'Other', 'None']),
  analyticsEmails: z.array(z.string().email()).min(1),

  // Branding
  businessDisplayName: z.string().min(1),
  logoFile: z.any().optional(),
  brandVoice: z.array(z.string()).min(1),

  // Approvals & Legal
  customerConsent: z.boolean().refine(val => val === true),
  acceptTerms: z.boolean().refine(val => val === true),

  // Optional
  competitors: z.string().optional(),
  topGoals: z.array(z.string()).optional(),
  additionalNotes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the incoming data
    const validatedData = onboardingSchema.parse(body)
    
    // TODO: Save to database
    // TODO: Send confirmation email
    // TODO: Trigger setup process
    // TODO: Register A2P 10DLC brand
    // TODO: Create Twilio sub-account
    
    console.log('Onboarding data received:', validatedData)
    
    // For now, just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Onboarding data received successfully',
        onboardingId: `onb_${Date.now()}` // Temporary ID
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Onboarding submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error',
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}
