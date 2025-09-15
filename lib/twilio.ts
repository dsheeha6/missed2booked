import twilio from 'twilio'
import { getBrandName, generateSampleBookingLink } from './utils'

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
  console.warn('Twilio credentials not found. SMS demo will not work.')
}

const client = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN 
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null

export async function sendDemoSMS(to: string): Promise<{ success: boolean; message?: string }> {
  if (!client) {
    return {
      success: false,
      message: 'SMS service not configured'
    }
  }

  try {
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

export async function sendMakeWebhook(to: string): Promise<{ success: boolean; message?: string }> {
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
