export default function CookiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy — Missed2Booked</h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>We use cookies and similar technologies to:</p>
            
            <h2>Essential (required)</h2>
            <p>authentication, security, load balancing.</p>
            
            <h2>Preferences</h2>
            <p>remember settings.</p>
            
            <h2>Analytics</h2>
            <p>understand site usage to improve experience.</p>
            
            <h2>Marketing (optional)</h2>
            <p>measure campaigns.</p>

            <p>You can manage preferences anytime via Cookie Settings.</p>
            <p>For EU/UK visitors we show a consent banner before setting non-essential cookies.</p>
            <p>See also our Privacy Policy for data uses and retention.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
