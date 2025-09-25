#!/usr/bin/env node

/**
 * Simple Google Apps Script Integration Test
 * 
 * This script tests the Google Apps Script integration with minimal data
 * to verify the doPost function is working correctly.
 */

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypSnWKoG_0GKl5M8IOW5rBznIJJgy-goXfZTaNZQC-6CcMJywEtTAZxdgO0-tx7SkM/exec'
const AUTH_TOKEN = 'PorscheGT3!!!'

async function testGoogleAppsScript() {
  console.log('🧪 Testing Google Apps Script Integration')
  console.log('=' .repeat(50))
  
  // Simple test data
  const testData = {
    'Timestamp': new Date().toISOString(),
    'Form Status': 'Test',
    'Plan': 'starter',
    'Legal Name': 'Test Integration LLC',
    'DBA': 'Test Company',
    'Website': 'https://test.com',
    'GBP Link': 'https://maps.google.com/business/test',
    'Address': '123 Test St, Test City, TC 12345',
    'Industry': 'Other',
    'Contact Name': 'Test User',
    'Contact Role': 'Owner',
    'Contact Email': 'test@test.com',
    'Contact Phone': '+1-555-123-4567',
    'Phone Provider': 'Other',
    'Main Business Number': '+1-555-987-6543',
    'Phone Setup Option': 'new-number',
    'Desired Area Code': '',
    'Call Flow Notes': '',
    'EIN': '123456789',
    'Entity Type': 'LLC',
    'Compliance Website': 'https://test.com',
    'Sample Msg 1': 'Hello from Test Company!',
    'Sample Msg 2': 'Thank you for your inquiry.',
    'Sample Msg 3': '',
    'Opt-in Method': 'website-form',
    'Privacy Policy URL': 'https://test.com/privacy',
    'Terms of Service URL': 'https://test.com/terms',
    'CRM': '',
    'Inbox Email': 'info@test.com',
    'Slack Channel': '',
    'Calendar System': 'Google',
    'Analytics Email 1': 'analytics@test.com',
    'Analytics Email 2': '',
    'Analytics Email 3': '',
    'Consent Confirmed': 'Yes',
    'T&C Accepted': 'Yes',
    'Competitors': '',
    'Goal 1': 'Test integration',
    'Goal 2': '',
    'Goal 3': '',
    'Additional Notes': 'This is a simple integration test',
    'Additional Data': '{"test": true}',
    'Onboarding Booked': 'Test'
  }

  try {
    console.log('📤 Sending test data to Google Apps Script...')
    
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?token=${AUTH_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })

    console.log(`📥 Response Status: ${response.status} ${response.statusText}`)
    
    const responseText = await response.text()
    console.log('📥 Response Body:', responseText)
    
    if (response.ok) {
      // Try to parse JSON response
      try {
        const jsonResponse = JSON.parse(responseText)
        if (jsonResponse.success) {
          console.log('✅ SUCCESS: Data saved to Google Sheets!')
          console.log('📊 Row number:', jsonResponse.rowNumber)
          console.log('💡 Check your Google Sheets for the new entry')
        } else {
          console.log('❌ FAILED: Google Apps Script returned an error')
          console.log('Error:', jsonResponse.error)
        }
      } catch (parseError) {
        // If it's not JSON, check if it's an HTML error page
        if (responseText.includes('Script function not found')) {
          console.log('❌ CRITICAL: doPost function not found in Google Apps Script')
          console.log('💡 You need to add the doPost function to your Google Apps Script')
          console.log('📝 Use the template in: google-apps-script-template.js')
        } else {
          console.log('⚠️  Unexpected response format:', responseText.substring(0, 200) + '...')
        }
      }
    } else {
      console.log('❌ FAILED: HTTP error occurred')
    }

  } catch (error) {
    console.log('❌ ERROR:', error.message)
    if (error.code === 'ENOTFOUND') {
      console.log('💡 TIP: Check your internet connection')
    } else if (error.code === 'ECONNREFUSED') {
      console.log('💡 TIP: Check if the Google Apps Script URL is correct')
    }
  }
}

// Run the test
testGoogleAppsScript().catch(console.error)
