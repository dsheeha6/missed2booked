import { NextRequest, NextResponse } from 'next/server'
import { sendMakeWebhook } from '@/lib/twilio'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received body:', body)
    
    const to = body?.to

    if (!to) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      )
    }

    // Validate phone number format
    const cleaned = to.replace(/\D/g, '')
    if (cleaned.length < 10 || cleaned.length > 15) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Format phone number
    let formattedPhone = to
    if (cleaned.length === 10) {
      formattedPhone = `+1${cleaned}`
    } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
      formattedPhone = `+${cleaned}`
    } else if (cleaned.length > 11) {
      formattedPhone = `+${cleaned}`
    }

    // Use the Make webhook URL from env.example as fallback
    const webhookUrl = process.env.MAKE_WEBHOOK_URL || 'https://hook.us2.make.com/u19m7fkq499gyaqlip9ijbsw8rb841fv'
    
    // Check if we're in demo mode (only if DEMO_MODE is explicitly set to true)
    const isDemoMode = process.env.DEMO_MODE === 'true'
    
    if (isDemoMode) {
      console.log('Demo mode: Would send webhook to Make.com for phone:', formattedPhone)
      return NextResponse.json({
        success: true,
        message: 'Demo sent successfully (demo mode)',
      })
    }

    // Send webhook to Make.com
    const result = await sendMakeWebhook(formattedPhone, webhookUrl)
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message || 'Demo SMS sent successfully',
      })
    } else {
      return NextResponse.json(
        { success: false, message: result.message || 'Failed to send demo SMS' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Demo send error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}