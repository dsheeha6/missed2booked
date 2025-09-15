import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Missed2Booked — Turn Missed Calls Into Booked Jobs',
  description: 'Missed2Booked helps businesses reply in seconds when calls are missed, book appointments automatically, and track recovered revenue. Built on trusted telecom & automation infrastructure. Global service.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
