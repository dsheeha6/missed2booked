'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { COPY } from '@/constants/copy'
import { validatePhoneNumber, formatPhoneNumber } from '@/lib/utils'
import { toast } from 'sonner'

export function DemoSMS() {
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!phone.trim()) {
      toast.error('Please enter a phone number')
      return
    }

    if (!validatePhoneNumber(phone)) {
      toast.error('Please enter a valid phone number')
      return
    }

    setIsLoading(true)
    
    try {
      const formattedPhone = formatPhoneNumber(phone)
      // Use Next.js API route for both development and production
      const apiUrl = '/api/demo/send/'
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to: formattedPhone }),
      })
      

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        toast.success(COPY.demo.successMessage)
        setPhone('')
      } else {
        toast.error(data.message || COPY.demo.errorMessage)
      }
    } catch (error) {
      console.error('Demo send error:', error)
      toast.error(COPY.demo.errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-purple-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {COPY.demo.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {COPY.demo.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Demo form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={COPY.demo.inputPlaceholder}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || !phone.trim()}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {COPY.demo.buttonText}
                    </>
                  )}
                </Button>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      Demo sent! Check your phone.
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Sample message preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">What you'll receive:</h3>
              </div>
              
              {/* Phone mockup */}
              <div className="bg-gray-900 rounded-3xl p-6 mx-auto max-w-sm">
                <div className="bg-gray-800 rounded-2xl p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Missed2Booked</div>
                      <div className="text-gray-400 text-xs">now</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-600 rounded-2xl rounded-tl-md p-3 mb-2">
                    <p className="text-white text-sm leading-relaxed">
                      Hi there — it's Missed2Booked. This is what your customers receive when a call is missed.
                      <br /><br />
                      Want us to call now or book a time? <a href="https://calendly.com/daniel-sheehan03/missed2booked-com" className="text-blue-200 underline">Book Call</a>
                      <br /><br />
                      Reply STOP to opt out.
                    </p>
                  </div>
                  
                  <div className="text-gray-400 text-xs text-center">
                    Tap to reply
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p>This is exactly what your customers will see when they miss a call to your business.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
