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
    if (!data.email || !data.businessName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Email and business name are required',
        }),
      }
    }

    // TODO: In production, save to database or CRM
    console.log('Onboarding data received:', {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send welcome email
    // TODO: Add to CRM
    // TODO: Schedule follow-up call

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
