import { NextRequest, NextResponse } from 'next/server'
import { sendDemoSMS, sendMakeWebhook } from '@/lib/twilio'
import { validatePhoneNumber, formatPhoneNumber, isDemoMode } from '@/lib/utils'

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3

function checkRateLimit(identifier: string): boolean {
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

export async function POST(request: NextRequest) {
  try {
    const { to } = await request.json()

    if (!to) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      )
    }

    // Validate phone number
    if (!validatePhoneNumber(to)) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    const formattedPhone = formatPhoneNumber(to)
    
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(`${ip}-${formattedPhone}`)) {
      return NextResponse.json(
        { success: false, message: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    // Demo mode - just log the request
    if (isDemoMode()) {
      console.log('Demo mode: Would send SMS to', formattedPhone)
      return NextResponse.json({
        success: true,
        message: 'Demo sent (demo mode)',
      })
    }

    // Send SMS based on configured mode - default to make webhook
    const sendMode = process.env.DEMO_SEND_MODE || 'make'
    
    let result
    if (sendMode === 'make') {
      result = await sendMakeWebhook(formattedPhone)
    } else {
      result = await sendDemoSMS(formattedPhone)
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
      })
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
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
