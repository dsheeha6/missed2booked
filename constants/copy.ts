export const COPY = {
  hero: {
    headline: "Never lose a missed call.",
    subheadline: "We auto-text callers in seconds, book appointments, and (on Scale) an AI agent answers FAQs—so you keep more revenue without extra staff.",
    primaryCta: "Start Today",
    secondaryCta: "See Live Demo",
    trustBadges: [
      "SMS compliant",
      "A2P 10DLC help",
      "Cancel anytime"
    ]
  },
  
  howItWorks: {
    title: "How It Works",
    subtitle: "Three simple steps to never miss another opportunity",
    steps: [
      {
        title: "Missed Call Detected",
        description: "Our system instantly detects when someone calls and you can't answer",
        timing: "< 10s detection",
        icon: "phone-missed"
      },
      {
        title: "Instant Text Response",
        description: "We automatically send a professional text asking if they want to call back or book a time",
        timing: "Immediate response",
        icon: "message-circle"
      },
      {
        title: "Booking & Follow-up",
        description: "They can book directly or request a callback, and you get notified immediately",
        timing: "1 saved lead = pays for itself",
        icon: "calendar-check"
      }
    ]
  },

  demo: {
    title: "Try It Live",
    subtitle: "Text this number to see exactly what your customers receive",
    inputPlaceholder: "Enter your phone number",
    buttonText: "Text Me the Demo",
    successMessage: "Demo sent! Check your phone.",
    errorMessage: "Failed to send demo. Please try again.",
    sampleMessage: "Hi there — it's {brandName}. This is what your customers receive when a call is missed.\n\nWant us to call now or book a time? {sampleBookingLink}\n\nReply STOP to opt out."
  },


  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Do I need to change my phone system?",
        answer: "No — you can keep your current phone setup. We'll provide a new number that forwards to your existing line and tracks missed or unanswered calls. In many cases, we can also text-enable or port your existing business number if you prefer. Only complex phone systems (like custom PBX or advanced call routing) may need a quick check before setup, but most businesses are ready to go without changes."
      },
      {
        question: "Is this SMS \"compliant\"?",
        answer: "We support compliance, but you're the sender of record. We'll help you set up best practices (opt-in/opt-out language, \"Reply STOP\", quiet hours) and assist with A2P 10DLC registration in the U.S. Carriers and laws can change; deliverability and approval decisions are ultimately made by carriers/registrars."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes. No long-term contracts. You can cancel in the Stripe customer portal (linked in your receipts / account page). Any overages already incurred are billed on your final invoice."
      },
      {
        question: "What if I exceed my monthly limits?",
        answer: "We'll email you when you're nearing limits. Overages: SMS $0.02/message, Voice $0.05/min (outbound), AI voice $0.12/min (agent talk time). Carrier pass-through fees (e.g., A2P) may apply separately and can change."
      },
      {
        question: "Will texts come from our business number?",
        answer: "Options: New branded number (fastest). Text-enable your existing number (where supported). Full porting to our carrier. We'll pick what fits your timeline and compliance needs."
      },
      {
        question: "What exactly does the AI agent handle?",
        answer: "Short, helpful conversations: hours, services, pricing ranges, service area, basic intake and booking. It escalates to your team for complex or sensitive topics. We don't position it for professional, medical, or legal advice."
      },
      {
        question: "Do you integrate with my CRM or calendars?",
        answer: "Calendars: we link to booking pages (Calendly/Cal.com/etc.). CRMs: we can push leads via webhook/Make/Zapier on Pro/Scale. Light custom rules (e.g., tag + create contact/deal) are included on Scale."
      },
      {
        question: "How do I get started?",
        answer: "Getting started is simple. First, choose the plan that fits your business. After you subscribe, we'll schedule a short setup call to gather the details we need (like your phone number, SMS templates, and automation preferences). From there, we'll handle the entire setup for you. Most accounts are fully automated and ready to use within 24–48 hours, depending on the plan."
      }
    ]
  },

  footer: {
    compliance: "Messaging rates may apply. Reply STOP to opt out. We'll assist with A2P 10DLC registration.",
    copyright: "© 2025 {brandName}. All rights reserved."
  }
} as const;
