import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function formatPhoneNumber(phone: string) {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Check if it's a valid US number (10 digits) or international (11+ digits)
  if (cleaned.length === 10) {
    return `+1${cleaned}`
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`
  } else if (cleaned.length > 11) {
    return `+${cleaned}`
  }
  
  return phone
}

export function validatePhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 15
}

export function generateSampleBookingLink(): string {
  return 'https://calendly.com/daniel-sheehan03/missed2booked-com'
}

export function getBrandName(): string {
  return process.env.NEXT_PUBLIC_BRAND_NAME || 'Missed2Booked'
}

export function isDemoMode(): boolean {
  return process.env.DEMO_MODE === 'true'
}
