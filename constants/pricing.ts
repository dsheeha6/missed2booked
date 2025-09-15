export const PRICING_TIERS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    monthly: {
      price: 129,
      priceId: process.env.STRIPE_PRICE_STARTER_MONTHLY || 'price_starter_monthly',
    },
    annual: {
      price: 107, // 129 * 10 / 12 (2 months free)
      priceId: process.env.STRIPE_PRICE_STARTER_ANNUAL || 'price_starter_annual',
    },
    description: 'Perfect for small businesses getting started',
    features: [
      'Instant text-back to missed calls',
      '1 automated follow-up message',
      'Basic analytics & reporting',
      '1 onboarding call included',
      '500 SMS messages/month',
      'Email support'
    ],
    limitations: [
      'No two-way texting',
      'No booking integration',
      'No voice callback'
    ],
    popular: false,
    cta: 'Start Today'
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    monthly: {
      price: 249,
      priceId: process.env.STRIPE_PRICE_PRO_MONTHLY || 'price_pro_monthly',
    },
    annual: {
      price: 208, // 249 * 10 / 12 (2 months free)
      priceId: process.env.STRIPE_PRICE_PRO_ANNUAL || 'price_pro_annual',
    },
    description: 'Most popular for growing businesses',
    features: [
      'Everything in Starter',
      'Two-way texting conversations',
      'Booking link integration',
      'Voice callback option',
      'Custom branding',
      '2 strategy calls/month',
      '2,000 SMS messages/month',
      '200 voice minutes/month',
      'Priority support'
    ],
    limitations: [],
    popular: true,
    cta: 'Start Today'
  },
  scale: {
    id: 'scale',
    name: 'Scale',
    monthly: {
      price: 699,
      priceId: process.env.STRIPE_PRICE_SCALE_MONTHLY || 'price_scale_monthly',
    },
    annual: {
      price: 583, // 699 * 10 / 12 (2 months free)
      priceId: process.env.STRIPE_PRICE_SCALE_ANNUAL || 'price_scale_annual',
    },
    description: 'AI agent + custom rules + ROI insights',
    features: [
      'Everything in Pro',
      'AI voice & text agent',
      '300 AI minutes/mo included',
      'Custom workflow automation',
      'Advanced analytics & monthly ROI insight email',
      'Priority support queue'
    ],
    limitations: [],
    popular: false,
    cta: 'Start Today'
  }
} as const;

export const OVERAGE_RATES = {
  sms: 0.02, // per SMS
  voice: 0.05, // per minute
  ai: 0.12 // per minute
} as const;

export const FOUNDING_SPOTS_LEFT = 7; // Configurable counter for urgency
