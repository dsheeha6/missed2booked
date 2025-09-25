const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/s1jml5dm4u2lddydloagzbfs6fouyepw'

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body)

    // Basic validation
    if (!data.primaryContactEmail || !data.businessLegalName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Email and business legal name are required',
        }),
      }
    }

    // Map form data to webhook structure
    const webhookData = {
      'Timestamp': new Date().toISOString(),
      'Form Status': 'Completed',
      'Plan': data.selectedPlan || '',
      'Legal Name': data.businessLegalName || '',
      'DBA': data.businessBrandName || '',
      'Website': data.websiteUrl || '',
      'GBP Link': data.googleBusinessProfile || '',
      'Address': data.businessAddress || '',
      'Industry': data.industry || '',
      'Contact Name': data.primaryContactName || '',
      'Contact Role': data.primaryContactRole || '',
      'Contact Email': data.primaryContactEmail || '',
      'Contact Phone': data.primaryContactPhone || '',
      'Phone Provider': data.currentPhoneProvider || '',
      'Main Business Number': data.mainBusinessPhone || '',
      'Phone Setup Option': data.phoneSetupOption || '',
      'Desired Area Code': data.desiredAreaCode || '',
      'Call Flow Notes': data.callFlowNotes || '',
      'EIN': data.ein || '',
      'Entity Type': data.legalEntityType || '',
      'Compliance Website': data.businessWebsite || '',
      'Sample Msg 1': data.sampleMessages?.[0] || '',
      'Sample Msg 2': data.sampleMessages?.[1] || '',
      'Sample Msg 3': data.sampleMessages?.[2] || '',
      'Opt-in Method': data.optInMethod || '',
      'Privacy Policy URL': data.privacyPolicyUrl || '',
      'Terms of Service URL': data.termsOfServiceUrl || '',
      'CRM': data.crm || '',
      'Inbox Email': data.inboxEmail || '',
      'Slack Channel': data.slackChannel || '',
      'Calendar System': data.calendarSystem || '',
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
    try {
      const webhookResponse = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (!webhookResponse.ok) {
        console.error('Make.com webhook failed:', webhookResponse.status, webhookResponse.statusText)
        throw new Error(`Make.com webhook failed with status: ${webhookResponse.status}`)
      }

      console.log('Onboarding data sent to Make.com webhook successfully')
    } catch (webhookError) {
      console.error('Make.com webhook error:', webhookError)
      // Continue processing even if Make.com webhook fails
    }

    // Log for debugging
    console.log('Onboarding data received:', {
      ...data,
      timestamp: new Date().toISOString(),
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Onboarding data submitted successfully',
      }),
    }
  } catch (error) {
    console.error('Onboarding error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Failed to submit onboarding data',
      }),
    }
  }
}
