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
  
  // Check if it's a valid US number (10 digits) or international (11+ digits)
  if (cleaned.length === 10) {
    return `+1${cleaned}`
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`
  } else if (cleaned.length > 11) {
    return `+${cleaned}`
  }
  
  return phone
}

function getBrandName() {
  return process.env.NEXT_PUBLIC_BRAND_NAME || 'Missed2Booked'
}

function generateSampleBookingLink() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://missed2booked.com'
  return `${baseUrl}/book?demo=true`
}

function isDemoMode() {
  return process.env.DEMO_MODE === 'true'
}

async function sendDemoSMS(to) {
  const twilio = require('twilio')
  
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return {
      success: false,
      message: 'SMS service not configured'
    }
  }

  try {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    const brandName = getBrandName()
    const sampleBookingLink = generateSampleBookingLink()
    
    const message = `Hi there — it's ${brandName}. This is what your customers receive when a call is missed.

Want us to call now or book a time? ${sampleBookingLink}

Reply STOP to opt out.`

    const from = process.env.TWILIO_MESSAGING_SERVICE_SID 
      ? process.env.TWILIO_MESSAGING_SERVICE_SID
      : process.env.TWILIO_DEMO_FROM

    if (!from) {
      return {
        success: false,
        message: 'SMS sender not configured'
      }
    }

    const result = await client.messages.create({
      body: message,
      from: from,
      to: to,
    })

    console.log('SMS sent successfully:', result.sid)
    
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
  const webhookUrl = process.env.MAKE_WEBHOOK_URL
  
  if (!webhookUrl) {
    return {
      success: false,
      message: 'Webhook URL not configured'
    }
  }

  try {
    const brandName = getBrandName()
    const sampleBookingLink = generateSampleBookingLink()
    
    const message = `Hi there — it's ${brandName}. This is what your customers receive when a call is missed.

Want us to call now or book a time? ${sampleBookingLink}

Reply STOP to opt out.`

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        message,
        brand: brandName,
        bookingLink: sampleBookingLink,
      }),
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
          message: 'Demo sent (demo mode)',
        }),
      }
    }

    // Send SMS based on configured mode
    const sendMode = process.env.DEMO_SEND_MODE || 'twilio'
    
    let result
    if (sendMode === 'make') {
      result = await sendMakeWebhook(formattedPhone)
    } else {
      result = await sendDemoSMS(formattedPhone)
    }

    if (result.success) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: result.message,
        }),
      }
    } else {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: result.message,
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
