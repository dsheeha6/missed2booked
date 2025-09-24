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
    const { email, phone, name, company, message, source } = JSON.parse(event.body)

    // Basic validation
    if (!email && !phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Email or phone is required',
        }),
      }
    }

    // Get IP address from request
    const ip = event.headers['client-ip'] || 
               event.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
               event.headers['x-real-ip'] ||
               event.headers['x-client-ip'] ||
               'Unknown'

    // Prepare data for webhook - matching spreadsheet format
    const leadData = {
      timestamp: new Date().toISOString(),
      name: name || '',
      email,
      phone: phone || '',
      company: company || '',
      message: message || '',
      source: source || 'contact',
      user_agent: event.headers['user-agent'] || 'Unknown',
      ip: ip
    }

    // Send to Make.com webhook
    try {
      const webhookResponse = await fetch('https://hook.us2.make.com/s1jml5dm4u2lddydloagzbfs6fouyepw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      })

      if (!webhookResponse.ok) {
        console.error('Webhook failed:', webhookResponse.status, webhookResponse.statusText)
        console.log('Webhook URL may be inactive or disabled')
      } else {
        console.log('Lead sent to webhook successfully')
      }
    } catch (webhookError) {
      console.error('Webhook error:', webhookError)
      console.log('Continuing without webhook - lead still captured locally')
      // Don't fail the entire request if webhook fails
    }

    // Log for debugging
    console.log('Lead captured:', leadData)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Lead captured successfully',
      }),
    }
  } catch (error) {
    console.error('Lead capture error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Failed to capture lead',
      }),
    }
  }
}
