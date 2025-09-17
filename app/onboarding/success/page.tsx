import { CheckCircle, Mail, Phone, Clock, ArrowRight } from 'lucide-react'
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

        {/* What's Happening Now */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What's Happening Now
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">A2P 10DLC Registration</h3>
                <p className="text-sm text-gray-600">
                  Registering your brand with carriers for compliance (1-2 business days)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Twilio Setup</h3>
                <p className="text-sm text-gray-600">
                  Creating your sub-account and configuring your phone number
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Message Configuration</h3>
                <p className="text-sm text-gray-600">
                  Setting up your automated messages and call flows
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Integration Setup</h3>
                <p className="text-sm text-gray-600">
                  Connecting your CRM, calendar, and other integrations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Timeline
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Immediate</p>
                <p className="text-sm text-gray-600">Confirmation email sent</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Within 24 hours</p>
                <p className="text-sm text-gray-600">Setup details and next steps</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">1-2 business days</p>
                <p className="text-sm text-gray-600">System fully configured and ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Need Help?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Get help via email
              </p>
              <a 
                href="mailto:support@missed2booked.com"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                support@missed2booked.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Call us directly
              </p>
              <a 
                href="tel:+14045550123"
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                (404) 555-0123
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-3">
                Chat with us online
              </p>
              <Link 
                href="/contact"
                className="text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                Start Chat
              </Link>
            </div>
          </div>
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

