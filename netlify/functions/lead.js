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
    const { email, phone, name, company, source } = JSON.parse(event.body)

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

    // TODO: In production, save to database or CRM
    console.log('Lead captured:', {
      email,
      phone,
      name,
      company,
      source,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send welcome email or SMS
    // TODO: Add to email marketing list
    // TODO: Notify sales team

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
