const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
  const sig = event.headers['stripe-signature']
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

  try {
    const stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endpointSecret)

    // Handle the event
    switch (stripeEvent.type) {
      case 'checkout.session.completed':
        const session = stripeEvent.data.object
        console.log('Checkout session completed:', session.id)
        
        // TODO: Update user subscription status in database
        // TODO: Send welcome email
        // TODO: Create user account
        break

      case 'customer.subscription.created':
        const subscription = stripeEvent.data.object
        console.log('Subscription created:', subscription.id)
        
        // TODO: Activate user account
        // TODO: Send activation email
        break

      case 'customer.subscription.updated':
        const updatedSubscription = stripeEvent.data.object
        console.log('Subscription updated:', updatedSubscription.id)
        
        // TODO: Update subscription status in database
        break

      case 'customer.subscription.deleted':
        const deletedSubscription = stripeEvent.data.object
        console.log('Subscription cancelled:', deletedSubscription.id)
        
        // TODO: Deactivate user account
        // TODO: Send cancellation email
        break

      case 'invoice.payment_succeeded':
        const invoice = stripeEvent.data.object
        console.log('Payment succeeded:', invoice.id)
        
        // TODO: Update payment status
        // TODO: Send receipt email
        break

      case 'invoice.payment_failed':
        const failedInvoice = stripeEvent.data.object
        console.log('Payment failed:', failedInvoice.id)
        
        // TODO: Handle failed payment
        // TODO: Send payment failure notification
        break

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message)
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Webhook signature verification failed' }),
    }
  }
}
