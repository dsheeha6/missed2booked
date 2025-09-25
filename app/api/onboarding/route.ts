import { NextRequest, NextResponse } from 'next/server'

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/s1jml5dm4u2lddydloagzbfs6fouyepw'

// Note: This API route is for development only. 
// In production, the Netlify function handles the webhook integration.

export async function POST(request: NextRequest) {
  try {
    console.log('=== Onboarding API Route Called ===')
    const data = await request.json()
    console.log('Received data:', JSON.stringify(data, null, 2))

    // Map form data to webhook structure
    const webhookData = {
      'Timestamp': new Date().toISOString(),
      'Form Status': 'Completed',
      'Plan': data.selectedPlan,
      'Legal Name': data.businessLegalName,
      'DBA': data.businessBrandName,
      'Website': data.websiteUrl,
      'GBP Link': data.googleBusinessProfile,
      'Address': data.businessAddress,
      'Industry': data.industry,
      'Contact Name': data.primaryContactName,
      'Contact Role': data.primaryContactRole,
      'Contact Email': data.primaryContactEmail,
      'Contact Phone': data.primaryContactPhone,
      'Phone Provider': data.currentPhoneProvider,
      'Main Business Number': data.mainBusinessPhone,
      'Phone Setup Option': data.phoneSetupOption,
      'Desired Area Code': data.desiredAreaCode || '',
      'Call Flow Notes': data.callFlowNotes || '',
      'EIN': data.ein,
      'Entity Type': data.legalEntityType,
      'Compliance Website': data.businessWebsite,
      'Sample Msg 1': data.sampleMessages?.[0] || '',
      'Sample Msg 2': data.sampleMessages?.[1] || '',
      'Sample Msg 3': data.sampleMessages?.[2] || '',
      'Opt-in Method': data.optInMethod,
      'Privacy Policy URL': data.privacyPolicyUrl,
      'Terms of Service URL': data.termsOfServiceUrl,
      'CRM': data.crm || '',
      'Inbox Email': data.inboxEmail,
      'Slack Channel': data.slackChannel || '',
      'Calendar System': data.calendarSystem,
      'Analytics Email 1': data.analyticsEmails?.[0] || '',
      'Analytics Email 2': data.analyticsEmails?.[1] || '',
      'Analytics Email 3': data.analyticsEmails?.[2] || '',
      'Consent Confirmed': data.customerConsent ? 'Yes' : 'No',
      'T&C Accepted': data.acceptTerms ? 'Yes' : 'No',
      'Competitors': data.competitors || '',
      'Goal 1': data.topGoals?.[0] || '',
      'Goal 2': data.topGoals?.[1] || '',
      'Goal 3': data.topGoals?.[2] || '',
      'Additional Notes': data.additionalNotes || '',
      'Additional Data': JSON.stringify(data),
      'Onboarding Booked': 'Yes'
    }

    // Send data to Make.com webhook
    console.log('Sending data to Make.com webhook:', MAKE_WEBHOOK_URL)
    console.log('Webhook data:', JSON.stringify(webhookData, null, 2))
    
    const webhookResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })

    console.log('Webhook response status:', webhookResponse.status)
    console.log('Webhook response headers:', Object.fromEntries(webhookResponse.headers.entries()))

    if (!webhookResponse.ok) {
      const responseText = await webhookResponse.text()
      console.error('Make.com webhook failed:', webhookResponse.status, webhookResponse.statusText, responseText)
      throw new Error(`Make.com webhook failed with status: ${webhookResponse.status}`)
    }

    console.log('Webhook response successful')

    return NextResponse.json({
      success: true,
      message: 'Onboarding data submitted successfully',
    })

  } catch (error) {
    console.error('Onboarding API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit onboarding data',
        error: errorMessage
      },
      { status: 500 }
    )
  }
}
