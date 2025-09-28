import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { DemoSMS } from '@/components/DemoSMS'
import StatsSection from '@/components/StatsSection'
import { PricingTable } from '@/components/PricingTable'
import { FAQ } from '@/components/FAQ'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <DemoSMS />
      <StatsSection />
      <PricingTable />
      <FAQ />
      <CalendlyEmbed />
    </>
  )
}