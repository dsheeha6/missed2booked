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
    const { name, email, phone, position, experience, message, source } = JSON.parse(event.body)

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Name, email, and message are required',
        }),
      }
    }

    // TODO: In production, save to database or CRM
    console.log('Career application received:', {
      name,
      email,
      phone,
      position,
      experience,
      message,
      source,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send notification email to hiring team
    // TODO: Send confirmation email to applicant
    // TODO: Add to applicant tracking system

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Application submitted successfully',
      }),
    }
  } catch (error) {
    console.error('Career application error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Failed to submit application',
      }),
    }
  }
}
