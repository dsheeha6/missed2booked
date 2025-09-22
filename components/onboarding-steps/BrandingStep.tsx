'use client'

import { UseFormReturn } from 'react-hook-form'
import { useState } from 'react'
import Image from 'next/image'
import { getErrorMessage } from '@/lib/form-utils'

const BRAND_VOICE_OPTIONS = [
  'Friendly', 'Professional', 'Witty', 'Casual', 'Formal', 'Warm', 
  'Energetic', 'Calm', 'Helpful', 'Direct'
]

interface BrandingStepProps {
  form: UseFormReturn<any>
}

export function BrandingStep({ form }: BrandingStepProps) {
  const { register, formState: { errors }, watch, setValue } = form
  const [selectedBrandVoice, setSelectedBrandVoice] = useState<string[]>([])
  const [logoPreview, setLogoPreview] = useState<string | null>(null)


  const handleBrandVoiceChange = (voice: string) => {
    const updated = selectedBrandVoice.includes(voice)
      ? selectedBrandVoice.filter(v => v !== voice)
      : [...selectedBrandVoice, voice]
    setSelectedBrandVoice(updated)
    setValue('brandVoice', updated)
  }

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      setValue('logoFile', file)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🎨 Branding</h3>
        <p className="text-gray-600">Customize how your business appears in messages.</p>
      </div>

      {/* Business Display Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Display Name (for outbound texts) *
        </label>
        <input
          {...register('businessDisplayName')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Smile Bright Dental"
        />
        <p className="mt-1 text-xs text-gray-500">
          This is how your business name will appear in text messages
        </p>
        {errors.businessDisplayName && (
          <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.businessDisplayName)}</p>
        )}
      </div>

      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Logo Upload (Optional)
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
          <div className="space-y-1 text-center">
            {logoPreview ? (
              <div className="space-y-2">
                <Image
                  src={logoPreview}
                  alt="Logo preview"
                  width={80}
                  height={80}
                  className="mx-auto h-20 w-20 object-contain"
                />
                <p className="text-sm text-gray-600">Logo uploaded successfully</p>
                <button
                  type="button"
                  onClick={() => {
                    setLogoPreview(null)
                    setValue('logoFile', undefined)
                  }}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Remove logo
                </button>
              </div>
            ) : (
              <div>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="logo-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="logo-upload"
                      name="logo-upload"
                      type="file"
                      className="sr-only"
                      accept="image/png,image/svg+xml,image/jpeg"
                      onChange={handleLogoUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, SVG, JPG up to 10MB</p>
              </div>
            )}
          </div>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          PNG or SVG preferred. Will be used in email signatures and reports.
        </p>
      </div>

      {/* Brand Voice */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brand Voice Adjectives *
        </label>
        <p className="text-sm text-gray-500 mb-4">
          Select 2-3 adjectives that best describe your brand's communication style
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {BRAND_VOICE_OPTIONS.map((voice) => (
            <label
              key={voice}
              className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedBrandVoice.includes(voice)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedBrandVoice.includes(voice)}
                onChange={() => handleBrandVoiceChange(voice)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
              />
              <span className="text-sm font-medium">{voice}</span>
            </label>
          ))}
        </div>
        {errors.brandVoice && (
          <p className="mt-1 text-sm text-red-600">{getErrorMessage(errors.brandVoice)}</p>
        )}
      </div>

      {/* Brand Voice Preview */}
      {selectedBrandVoice.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Brand Voice Preview</h4>
          <p className="text-sm text-gray-600 mb-2">
            Your messages will sound: <span className="font-medium">{selectedBrandVoice.join(', ')}</span>
          </p>
          <div className="text-sm text-gray-500 italic">
            Example: "Hi there! Thanks for calling Smile Bright Dental. We're excited to help you with your dental needs. How can we assist you today?"
          </div>
        </div>
      )}

      {/* Branding Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Branding Guidelines</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Keep display name under 20 characters for best compatibility</li>
          <li>• Logo will be resized to 200x200px maximum</li>
          <li>• Brand voice affects all automated messages</li>
          <li>• You can update these settings anytime after setup</li>
        </ul>
      </div>
    </div>
  )
}
