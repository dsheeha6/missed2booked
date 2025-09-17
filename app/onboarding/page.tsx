import { OnboardingForm } from '@/components/OnboardingForm'

export const metadata = {
  title: 'Complete Your Setup',
  description: 'Complete your Missed2Booked setup to start converting missed calls into bookings.',
}

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Missed2Booked! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's get you set up in just a few minutes. We'll collect some information 
            to configure your automated messaging system perfectly for your business.
          </p>
        </div>
        
        <OnboardingForm />
      </div>
    </div>
  )
}
