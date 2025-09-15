import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, phone, name, company, source } = await request.json()

    // Basic validation
    if (!email && !phone) {
      return NextResponse.json(
        { success: false, message: 'Email or phone is required' },
        { status: 400 }
      )
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

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to capture lead' },
      { status: 500 }
    )
  }
}
