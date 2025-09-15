export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service — Missed2Booked</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Effective date: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              Legal owner: Missed2Booked, ("Missed2Booked," "we," "us"). Contact: hello@nomadicdesigns.us.
            </p>

            <h2>1. Service Description</h2>
            <p>
              Missed2Booked helps businesses turn missed phone calls into booked jobs by sending automated text messages and optional voice callbacks, providing booking links, and (on the Scale plan) operating an AI voice/text agent to answer basic FAQs and book appointments. We are a software service built on trusted telecom and automation infrastructure.
            </p>

            <h2>2. Accounts & Eligibility</h2>
            <p>
              You must be 18+ and authorized to bind your business. You're responsible for your credentials and for all activity in your account.
            </p>

            <h2>3. Plans, Fees & Billing</h2>
            <p>Subscription fees: As shown on the Pricing page at checkout. Subscriptions auto-renew until canceled.</p>
            
            <h3>Included usage buckets (per plan):</h3>
            <ul>
              <li>Starter: 500 SMS/mo included.</li>
              <li>Pro: 2,000 SMS/mo + 200 outbound voice minutes/mo included.</li>
              <li>Scale: 2,000 SMS/mo + 200 outbound voice minutes/mo + 300 AI voice minutes/mo included.</li>
            </ul>

            <h3>Overages (billed monthly in arrears):</h3>
            <ul>
              <li>SMS: $0.02 per message (per 160-char segment where applicable).</li>
              <li>Voice minutes: $0.05 per outbound minute (billed in 60-sec increments).</li>
              <li>AI voice minutes: $0.12 per minute of agent talk time (rounded to provider increments).</li>
            </ul>

            <h3>Pass-through telecom/compliance fees (U.S. examples):</h3>
            <ul>
              <li>Local phone number: typically ~$1/month per number.</li>
              <li>A2P 10DLC registration: one-time brand fee (currently ~$46) + one-time campaign fee (currently ~$15) + ~$10/month per campaign.</li>
              <li>Carrier surcharges on SMS: may apply per message and vary by carrier/region.</li>
            </ul>
            <p>All pass-through fees may change at any time by carriers/partners; we will pass them through at cost and list them on your invoice.</p>

            <h3>Taxes & payment processing:</h3>
            <p>Applicable taxes and payment processor fees are your responsibility and shown at checkout or on invoices.</p>

            <h3>Trials & promotions:</h3>
            <p>If offered, trial terms are shown at sign-up. After a trial, the paid plan begins automatically unless canceled before the trial ends.</p>

            <h3>Refunds:</h3>
            <p>Subscriptions are prepaid and non-refundable, except where required by law. Overages already incurred are due.</p>

            <h3>Late/failed payments:</h3>
            <p>We may suspend service for non-payment. You remain responsible for fees and usage to date.</p>

            <h2>4. Acceptable Use & Messaging Compliance</h2>
            <p>You must:</p>
            <ul>
              <li>Obtain and maintain valid consent to message contacts; honor opt-outs (e.g., "STOP").</li>
              <li>Comply with applicable laws (e.g., TCPA, CAN-SPAM, CTIA guidelines, GDPR/UK-GDPR where applicable).</li>
              <li>Register and maintain required sender registrations (e.g., A2P 10DLC in the U.S.).</li>
            </ul>
            <p>You may not use the service for unlawful, harmful, or deceptive messages, spam, or high-risk verticals prohibited by carriers.</p>

            <h2>5. Service Scope & Limitations</h2>
            <ul>
              <li>We do not promise a specific SLA or dedicated account manager.</li>
              <li>AI agents answer within a defined knowledge base and should not be used for professional, medical, or legal advice.</li>
              <li>Deliverability, carrier filtering, and call completion depend on third-party networks outside our control.</li>
              <li>We may reasonably limit throughput or protect the platform from abuse.</li>
            </ul>

            <h2>6. Data Ownership & License</h2>
            <p>You own your customer data. You grant us a limited license to process it to provide the service, improve detection of spam/abuse, and meet legal obligations. See the Privacy Policy for details.</p>

            <h2>7. Confidentiality & Security</h2>
            <p>We implement reasonable technical and organizational measures. You are responsible for secure use of your account and for any integrations you connect.</p>

            <h2>8. Sub-Processors</h2>
            <p>We use reputable sub-processors (e.g., telecom, hosting, analytics). A current list is available on request and may change over time.</p>

            <h2>9. Changes to the Service or Fees</h2>
            <p>We may update features or fees. Material changes to base subscription prices will be notified with reasonable advance notice. Pass-through carrier/compliance fees may change at any time.</p>

            <h2>10. Term, Suspension & Termination</h2>
            <p>You may cancel at any time effective at the end of the current billing period. We may suspend or terminate for material breach, abuse, or non-payment. Upon termination, we may delete data after a reasonable retention period unless legally required to keep it.</p>

            <h2>11. Disclaimers & Liability</h2>
            <p>The service is provided "as is." To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness, and non-infringement. Our aggregate liability is limited to the fees paid to us in the three (3) months before the claim. We are not liable for indirect or consequential damages.</p>

            <h2>12. Governing Law; Disputes</h2>
            <p>These terms are governed by the laws of the State of Georgia, United States, and any disputes will be resolved in the courts of Atlanta, Georgia. The parties agree to attempt informal resolution before filing any claim.</p>
          </div>
        </div>
      </div>
    </div>
  )
}