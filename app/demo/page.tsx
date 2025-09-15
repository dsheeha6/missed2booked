import { Metadata } from 'next'
import { DemoSMS } from '@/components/DemoSMS'
import { HowItWorks } from '@/components/HowItWorks'

export const metadata: Metadata = {
  title: 'Live Demo',
  description: 'Try Missed2Booked live. Text this number to see exactly what your customers receive when a call is missed.',
  openGraph: {
    title: 'Live Demo | Missed2Booked',
    description: 'Try Missed2Booked live. Text this number to see exactly what your customers receive when a call is missed.',
  },
}

export default function DemoPage() {
  return (
    <>
      <DemoSMS />
      <HowItWorks />
    </>
  )
}
