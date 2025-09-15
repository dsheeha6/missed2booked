export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy — Missed2Booked</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Effective date: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>What we collect</h2>
            
            <h3>Account data:</h3>
            <p>name, business info, email, payment details (via our processor).</p>
            
            <h3>Service data:</h3>
            <p>call metadata, phone numbers, message logs, booking details, AI agent transcripts/metrics.</p>
            
            <h3>Technical data:</h3>
            <p>IP, device/browser info, cookies for sign-in, preferences, analytics.</p>

            <h2>How we use data</h2>
            <ul>
              <li>Provide and improve the service (automation, reporting, troubleshooting).</li>
              <li>Comply with messaging laws (opt-out handling), carrier rules, and fraud prevention.</li>
              <li>Communicate with you about the service (billing, updates).</li>
              <li>With your permission, publish anonymized stats or testimonials.</li>
            </ul>

            <h2>Sharing</h2>
            <ul>
              <li>Sub-processors that help us deliver the service (telecom carriers/aggregators, hosting, analytics, payment processing, support).</li>
              <li>Legal compliance requests when required by law.</li>
            </ul>
            <p>We don't sell your customer lists.</p>

            <h2>International transfers</h2>
            <p>Data may be processed in the U.S. and other countries. We rely on appropriate safeguards (e.g., SCCs) where required.</p>

            <h2>Your choices</h2>
            <ul>
              <li>Access, update, or delete your account data.</li>
              <li>Manage messaging preferences; reply STOP to opt out of texts.</li>
              <li>Manage cookies via Cookie Settings.</li>
            </ul>

            <h2>Data retention</h2>
            <p>We keep logs and transcripts only as long as needed for the service, legal compliance, fraud prevention, and audits, then delete or anonymize.</p>

            <h2>Security</h2>
            <p>We use reasonable technical and organizational measures. No method of transmission is 100% secure.</p>

            <h2>Children</h2>
            <p>The service is not for children under 13 (or lower local age).</p>

            <h2>Changes</h2>
            <p>We'll post updates and revise the "Effective date." Material changes will be notified.</p>

            <h2>Contact</h2>
            <p>
              Privacy questions: hello@nomadicdesigns.us<br />
              DPO/EU representative (if applicable): hello@nomadicdesigns.us
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}