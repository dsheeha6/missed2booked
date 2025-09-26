// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimit = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3

function checkRateLimit(identifier) {
  const now = Date.now()
  const userLimit = rateLimit.get(identifier)

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  userLimit.count++
  return true
}

function validatePhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 15
}

function formatPhoneNumber(phone) {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '')
  
  // For US numbers, ensure format is +1xxxxxxxxxx (exactly 11 characters total)
  if (cleaned.length === 10) {
    return `+1${cleaned}`
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`
  } else if (cleaned.length > 11) {
    return `+${cleaned}`
  }
  
  // If invalid length, return original (will be caught by validation)
  return phone
}

function getBrandName() {
  return process.env.NEXT_PUBLIC_BRAND_NAME || 'Missed2Booked'
}

function generateSampleBookingLink() {
  return 'https://calendly.com/daniel-sheehan03/missed2booked-com'
}

function isDemoMode() {
  return process.env.DEMO_MODE === 'true'
}

async function sendDemoSMS(to) {
  if (!process.env.TELNYX_API_KEY) {
    return {
      success: false,
      message: 'SMS service not configured'
    }
  }

  try {
    const brandName = getBrandName()
    const sampleBookingLink = generateSampleBookingLink()
    
    const message = `Hi, this is ${brandName}—thanks for trying the demo. Want to learn more? Book a quick call: ${sampleBookingLink}
Reply STOP to opt out.`

    const from = process.env.TELNYX_MESSAGING_PROFILE_ID || process.env.TELNYX_FROM_NUMBER

    if (!from) {
      return {
        success: false,
        message: 'SMS sender not configured'
      }
    }

    const response = await fetch('https://api.telnyx.com/v2/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.TELNYX_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: to,
        from: from,
        text: message,
        messaging_profile_id: process.env.TELNYX_MESSAGING_PROFILE_ID,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Telnyx API error: ${response.status} - ${JSON.stringify(errorData)}`)
    }

    const result = await response.json()
    console.log('SMS sent successfully:', result.data.id)
    
    return {
      success: true,
      message: 'Demo SMS sent successfully'
    }
  } catch (error) {
    console.error('Failed to send SMS:', error)
    return {
      success: false,
      message: 'Failed to send SMS. Please try again.'
    }
  }
}

async function sendMakeWebhook(to) {
  const webhookUrl = process.env.MAKE_WEBHOOK_URL || 'https://hook.us2.make.com/u19m7fkq499gyaqlip9ijbsw8rb841fv'
  
  if (!webhookUrl) {
    return {
      success: false,
      message: 'Webhook URL not configured'
    }
  }

  try {
    const brandName = getBrandName()
    const sampleBookingLink = generateSampleBookingLink()
    
    const message = `Hi, this is ${brandName}—thanks for trying the demo. Want to learn more? Book a quick call: ${sampleBookingLink}
Reply STOP to opt out.`

    const payload = {
      phone: to, // Format: +1xxxxxxxxxx (no dashes, spaces, or other characters)
    }
    
    console.log('Sending webhook to:', webhookUrl)
    console.log('Webhook payload:', JSON.stringify(payload))

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`)
    }

    console.log('Make webhook sent successfully')
    
    return {
      success: true,
      message: 'Demo SMS sent successfully'
    }
  } catch (error) {
    console.error('Failed to send webhook:', error)
    return {
      success: false,
      message: 'Failed to send SMS. Please try again.'
    }
  }
}

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
    const { to } = JSON.parse(event.body)

    if (!to) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Phone number is required',
        }),
      }
    }

    // Validate phone number
    if (!validatePhoneNumber(to)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Invalid phone number format',
        }),
      }
    }

    const formattedPhone = formatPhoneNumber(to)
    
    // Get client IP for rate limiting
    const forwarded = event.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(',')[0] : event.requestContext?.identity?.sourceIp || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(`${ip}-${formattedPhone}`)) {
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Rate limit exceeded. Please try again later.',
        }),
      }
    }

    // Demo mode - just log the request
    if (isDemoMode()) {
      console.log('Demo mode: Would send SMS to', formattedPhone)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Demo sent successfully (demo mode)',
        }),
      }
    }

    // Send webhook to Make.com for production demo
    console.log('Sending demo webhook for phone:', formattedPhone)
    const result = await sendMakeWebhook(formattedPhone)
    
    if (result.success) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: result.message || 'Demo sent successfully',
        }),
      }
    } else {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: result.message || 'Failed to send demo',
        }),
      }
    }
  } catch (error) {
    console.error('Demo send error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Internal server error',
      }),
    }
  }
}
