import { getBrandName, generateSampleBookingLink } from './utils'

// Telnyx SMS configuration
const TELNYX_API_KEY = process.env.TELNYX_API_KEY
const TELNYX_MESSAGING_PROFILE_ID = process.env.TELNYX_MESSAGING_PROFILE_ID
const TELNYX_FROM_NUMBER = process.env.TELNYX_FROM_NUMBER

if (!TELNYX_API_KEY) {
  console.warn('Telnyx API key not found. SMS demo will not work.')
}

export async function sendDemoSMS(to: string): Promise<{ success: boolean; message?: string }> {
  if (!TELNYX_API_KEY) {
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

    const from = TELNYX_MESSAGING_PROFILE_ID || TELNYX_FROM_NUMBER

    if (!from) {
      return {
        success: false,
        message: 'SMS sender not configured'
      }
    }

    const response = await fetch('https://api.telnyx.com/v2/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TELNYX_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: to,
        from: from,
        text: message,
        messaging_profile_id: TELNYX_MESSAGING_PROFILE_ID,
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

export async function sendMakeWebhook(to: string, webhookUrl?: string): Promise<{ success: boolean; message?: string }> {
  const url = webhookUrl || process.env.MAKE_WEBHOOK_URL || 'https://hook.us2.make.com/u19m7fkq499gyaqlip9ijbsw8rb841fv'
  
  try {
    const brandName = getBrandName()
    const sampleBookingLink = generateSampleBookingLink()
    
    const message = `Hi, this is ${brandName}—thanks for trying the demo. Want to learn more? Book a quick call: ${sampleBookingLink}

Reply STOP to opt out.`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: to,
      }),
    })

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`)
    }

    console.log('Make webhook sent successfully to:', to)
    
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
