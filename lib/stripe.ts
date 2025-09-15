import Stripe from 'stripe'

export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
      typescript: true,
    })
  : null

export async function createCheckoutSession({
  priceId,
  successUrl,
  cancelUrl,
  customerEmail,
}: {
  priceId: string
  successUrl?: string
  cancelUrl?: string
  customerEmail?: string
}) {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl || `${baseUrl}/pricing?success=true`,
    cancel_url: cancelUrl || `${baseUrl}/pricing?canceled=true`,
    customer_email: customerEmail,
    allow_promotion_codes: true,
    billing_address_collection: 'required',
    subscription_data: {
      trial_period_days: 14, // 14-day free trial
    },
  })

  return session
}

export async function createCustomerPortalSession(customerId: string) {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${baseUrl}/pricing`,
  })

  return session
}
