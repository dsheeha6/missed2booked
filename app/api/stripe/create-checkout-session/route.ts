import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'
import { PRICING_TIERS } from '@/constants/pricing'

export async function POST(request: NextRequest) {
  try {
    const { priceId, successUrl, cancelUrl, customerEmail } = await request.json()

    // Validate priceId
    const validPriceIds = Object.values(PRICING_TIERS).flatMap(tier => [
      tier.monthly.priceId,
      tier.annual.priceId
    ])
    if (!priceId || !validPriceIds.includes(priceId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid price ID' },
        { status: 400 }
      )
    }

    // Create checkout session
    const session = await createCheckoutSession({
      priceId,
      successUrl,
      cancelUrl,
      customerEmail,
    })

    return NextResponse.json({
      success: true,
      url: session.url,
    })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
