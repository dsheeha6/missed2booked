import { NextRequest, NextResponse } from 'next/server'

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

    // For now, always return demo mode since Twilio isn't configured
    console.log('Demo mode: Would send SMS to', formattedPhone)
    return NextResponse.json({
      success: true,
      message: 'Demo sent (demo mode)',
    })

  } catch (error) {
    console.error('Demo send error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}