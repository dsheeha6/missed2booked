# Missed2Booked - Marketing Site

A fast, conversion-optimized marketing site for missed-call automation with Stripe subscriptions, SMS demo, and Calendly scheduling.

## Features

- 🚀 **Next.js 14** with App Router and TypeScript
- 💳 **Stripe Integration** for subscriptions and payments
- 📱 **SMS Demo** with Twilio/Make integration
- 📅 **Calendly/Cal.com** scheduling widgets
- 🎨 **AI Aesthetic** with glass cards, gradients, and animations
- 📱 **Mobile-First** responsive design
- ♿ **Accessible** with proper ARIA labels and keyboard navigation
- 🔍 **SEO Optimized** with metadata, sitemap, and OpenGraph
- ⚡ **Performance** optimized for Lighthouse 95+

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Brand Configuration
   NEXT_PUBLIC_BRAND_NAME=Missed2Booked
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # Stripe Configuration
   STRIPE_SECRET_KEY=sk_test_***
   STRIPE_WEBHOOK_SECRET=whsec_***

   # Monthly Price IDs
   STRIPE_PRICE_STARTER_MONTHLY=price_***
   STRIPE_PRICE_PRO_MONTHLY=price_***
   STRIPE_PRICE_SCALE_MONTHLY=price_***

   # Annual Price IDs (2 months free)
   STRIPE_PRICE_STARTER_ANNUAL=price_***
   STRIPE_PRICE_PRO_ANNUAL=price_***
   STRIPE_PRICE_SCALE_ANNUAL=price_***

   # Demo SMS Configuration
   DEMO_SEND_MODE=twilio
   TWILIO_ACCOUNT_SID=AC***
   TWILIO_AUTH_TOKEN=***
   TWILIO_MESSAGING_SERVICE_SID=MG***
   TWILIO_DEMO_FROM=+1XXXXXXXXXX
   MAKE_WEBHOOK_URL=https://hook.make.com/xxxx

   # Scheduling Configuration
   CALENDLY_URL=https://calendly.com/yourlink/intro
   CALCOM_URL=

   # Demo Mode (for development)
   DEMO_MODE=true
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Stripe Setup

1. Create a Stripe account and get your API keys
2. Create three products with both monthly and annual recurring pricing:
   - **Starter**: $129/month or $1,290/year (2 months free)
   - **Pro**: $249/month or $2,490/year (2 months free)  
   - **Scale**: $699/month or $6,990/year (2 months free)
3. Copy the price IDs to your `.env.local` (both monthly and annual)
4. Set up webhook endpoint: `https://yourdomain.com/api/stripe/webhook`

### Pricing Toggle Features
- **Default**: Annual billing (2 months free)
- **Annual view**: Shows effective $/mo with "Billed annually" indicator
- **Monthly view**: Shows full $/mo with "Billed monthly" indicator
- **Savings badge**: Displays monthly savings when annual is selected
- **Stripe integration**: Uses different price IDs for monthly vs annual billing
5. Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`

## SMS Demo Setup

### Option 1: Twilio (Recommended)
1. Create a Twilio account
2. Get your Account SID and Auth Token
3. Set up a Messaging Service or get a phone number
4. Update your `.env.local` with Twilio credentials

### Option 2: Make (Zapier alternative)
1. Create a Make.com account
2. Set up a webhook scenario
3. Update `MAKE_WEBHOOK_URL` in your `.env.local`

## Scheduling Setup

### Option 1: Calendly
1. Create a Calendly account
2. Set up your booking page
3. Copy the URL to `CALENDLY_URL` in your `.env.local`

### Option 2: Cal.com
1. Create a Cal.com account
2. Set up your booking page
3. Copy the embed URL to `CALCOM_URL` in your `.env.local`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app is built with standard Next.js and can be deployed to any platform that supports Node.js.

## Customization

### Branding
- Update `NEXT_PUBLIC_BRAND_NAME` in your environment
- Modify colors in `tailwind.config.js`
- Update copy in `constants/copy.ts`

### Pricing
- Update pricing tiers in `constants/pricing.ts`
- Create corresponding Stripe products
- Update price IDs in environment variables

### Content
- All copy is centralized in `constants/copy.ts`
- Images can be added to `public/` directory
- Update metadata in `app/layout.tsx`

## Performance

The site is optimized for performance:
- Server-side rendering with React Server Components
- Optimized images with `next/image`
- Minimal client-side JavaScript
- Preloaded fonts
- Efficient CSS with Tailwind
- Lighthouse score: 95+

## SEO

- Comprehensive metadata for all pages
- OpenGraph and Twitter Card support
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Fast loading times

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - see LICENSE file for details.

## Support

For support, email hello@missed2booked.com or book a call through the website.
