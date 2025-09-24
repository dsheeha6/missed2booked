import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone, name, company, message, source } = body

    // Basic validation
    if (!email && !phone) {
      return NextResponse.json(
        { success: false, message: 'Email or phone is required' },
        { status: 400 }
      )
    }

    // Prepare data for webhook
    const leadData = {
      email,
      phone: phone || '',
      name: name || '',
      company: company || '',
      message: message || '',
      source: source || 'contact',
      timestamp: new Date().toISOString(),
      url: request.headers.get('referer') || 'Unknown',
      userAgent: request.headers.get('user-agent') || 'Unknown'
    }

    // Send to Make.com webhook
    try {
      const webhookResponse = await fetch('https://hook.us2.make.com/s1jml5dm4u2lddydloagzbfs6fouyepw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      })

      if (!webhookResponse.ok) {
        console.error('Webhook failed:', webhookResponse.status, webhookResponse.statusText)
        console.log('Webhook URL may be inactive or disabled')
      } else {
        console.log('Lead sent to webhook successfully')
      }
    } catch (webhookError) {
      console.error('Webhook error:', webhookError)
      console.log('Continuing without webhook - lead still captured locally')
      // Don't fail the entire request if webhook fails
    }

    // Log for debugging
    console.log('Lead captured:', leadData)

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

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
