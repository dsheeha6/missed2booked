import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Missed2Booked - Never Lose a Missed Call',
    template: '%s | Missed2Booked'
  },
  description: 'We auto-text callers in seconds, book appointments, and (on Scale) an AI agent answers FAQs—so you keep more revenue without extra staff.',
  keywords: ['missed calls', 'SMS automation', 'appointment booking', 'AI agent', 'business communication'],
  authors: [{ name: 'Missed2Booked' }],
  creator: 'Missed2Booked',
  publisher: 'Missed2Booked',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'Missed2Booked - Never Lose a Missed Call',
    description: 'We auto-text callers in seconds, book appointments, and (on Scale) an AI agent answers FAQs—so you keep more revenue without extra staff.',
    siteName: 'Missed2Booked',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Missed2Booked - Never Lose a Missed Call',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Missed2Booked - Never Lose a Missed Call',
    description: 'We auto-text callers in seconds, book appointments, and (on Scale) an AI agent answers FAQs—so you keep more revenue without extra staff.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
          <StickyCTA />
          <Toaster position="top-right" richColors />
        </div>
      </body>
    </html>
  )
}
