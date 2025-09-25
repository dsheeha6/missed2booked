import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Setup Complete!',
  description: 'Your Missed2Booked setup is complete and we\'re getting everything ready for you.',
}

export default function OnboardingSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎉 Setup Complete!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for completing your onboarding! We're now setting up your 
            automated messaging system and will have everything ready soon.
          </p>
        </div>


        {/* Next Steps */}
        <div className="text-center">
          <Link href="/">
            <Button className="inline-flex items-center gap-2">
              Return to Homepage
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

