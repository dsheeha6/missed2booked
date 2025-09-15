export default function MessagingPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">A2P Messaging & Acceptable Use Policy</h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>This policy applies to all messaging/calls sent via Missed2Booked.</p>

            <h2>Requirements</h2>
            <p>You must maintain consent and provide clear opt-out instructions (e.g., "Reply STOP to opt out").</p>

            <h2>Prohibited content</h2>
            <p>illegal, harmful, deceptive, hate/harassment, SHAFT (sex, hate, alcohol, firearms, tobacco) where prohibited, phishing, lead-gen without consent.</p>

            <h2>Registration requirements</h2>
            <p>You must complete required sender registrations (e.g., A2P 10DLC in the U.S.) and keep campaign use-case descriptions accurate.</p>

            <h2>Compliance measures</h2>
            <p>We may rate-limit, filter, or suspend traffic to protect deliverability and comply with carrier rules.</p>

            <h2>Violations</h2>
            <p>Violations may result in fees, blocking by carriers, or termination.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
