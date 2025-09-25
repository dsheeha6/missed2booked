/**
 * Google Apps Script for Onboarding Data Collection
 * 
 * This script receives POST requests from the onboarding form and saves
 * the data to a Google Sheets spreadsheet.
 * 
 * Setup Instructions:
 * 1. Create a new Google Apps Script project
 * 2. Replace the default code with this template
 * 3. Create a Google Sheets document and link it to this script
 * 4. Deploy the script as a web app with "Anyone" access
 * 5. Update the webhook URL in your application
 */

// Global variables
const SHEET_NAME = 'Onboarding Data'; // Change this to match your sheet name
const AUTH_TOKEN = 'PorscheGT3!!!'; // Should match the token in your app

/**
 * Handles POST requests from the onboarding form
 */
function doPost(e) {
  try {
    // Validate authentication
    const authHeader = e.parameter.token || '';
    if (authHeader !== AUTH_TOKEN) {
      return createResponse({success: false, error: 'Unauthorized'}, 401);
    }
    
    // Parse the incoming data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return createResponse({success: false, error: 'Invalid JSON data'}, 400);
    }
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      addHeaders(sheet);
    }
    
    // Prepare row data
    const rowData = [
      data['Timestamp'] || new Date().toISOString(),
      data['Form Status'] || '',
      data['Plan'] || '',
      data['Legal Name'] || '',
      data['DBA'] || '',
      data['Website'] || '',
      data['GBP Link'] || '',
      data['Address'] || '',
      data['Industry'] || '',
      data['Contact Name'] || '',
      data['Contact Role'] || '',
      data['Contact Email'] || '',
      data['Contact Phone'] || '',
      data['Phone Provider'] || '',
      data['Main Business Number'] || '',
      data['Phone Setup Option'] || '',
      data['Desired Area Code'] || '',
      data['Call Flow Notes'] || '',
      data['EIN'] || '',
      data['Entity Type'] || '',
      data['Compliance Website'] || '',
      data['Sample Msg 1'] || '',
      data['Sample Msg 2'] || '',
      data['Sample Msg 3'] || '',
      data['Opt-in Method'] || '',
      data['Privacy Policy URL'] || '',
      data['Terms of Service URL'] || '',
      data['CRM'] || '',
      data['Inbox Email'] || '',
      data['Slack Channel'] || '',
      data['Calendar System'] || '',
      data['Analytics Email 1'] || '',
      data['Analytics Email 2'] || '',
      data['Analytics Email 3'] || '',
      data['Consent Confirmed'] || '',
      data['T&C Accepted'] || '',
      data['Competitors'] || '',
      data['Goal 1'] || '',
      data['Goal 2'] || '',
      data['Goal 3'] || '',
      data['Additional Notes'] || '',
      data['Additional Data'] || '',
      data['Onboarding Booked'] || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Log the successful operation
    console.log('Successfully saved onboarding data for:', data['Legal Name']);
    
    // Return success response
    return createResponse({
      success: true, 
      message: 'Data saved successfully',
      rowNumber: sheet.getLastRow()
    });
    
  } catch (error) {
    // Log the error
    console.error('Error processing onboarding data:', error);
    
    // Return error response
    return createResponse({
      success: false, 
      error: error.toString()
    }, 500);
  }
}

/**
 * Handles GET requests (for testing)
 */
function doGet(e) {
  return createResponse({
    message: 'Onboarding webhook is active',
    timestamp: new Date().toISOString(),
    method: 'GET'
  });
}

/**
 * Creates a proper HTTP response
 */
function createResponse(data, statusCode = 200) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Adds headers to the sheet if it's new
 */
function addHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Form Status',
    'Plan',
    'Legal Name',
    'DBA',
    'Website',
    'GBP Link',
    'Address',
    'Industry',
    'Contact Name',
    'Contact Role',
    'Contact Email',
    'Contact Phone',
    'Phone Provider',
    'Main Business Number',
    'Phone Setup Option',
    'Desired Area Code',
    'Call Flow Notes',
    'EIN',
    'Entity Type',
    'Compliance Website',
    'Sample Msg 1',
    'Sample Msg 2',
    'Sample Msg 3',
    'Opt-in Method',
    'Privacy Policy URL',
    'Terms of Service URL',
    'CRM',
    'Inbox Email',
    'Slack Channel',
    'Calendar System',
    'Analytics Email 1',
    'Analytics Email 2',
    'Analytics Email 3',
    'Consent Confirmed',
    'T&C Accepted',
    'Competitors',
    'Goal 1',
    'Goal 2',
    'Goal 3',
    'Additional Notes',
    'Additional Data',
    'Onboarding Booked'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f0f0f0');
}

/**
 * Test function to verify the setup
 */
function testSetup() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    console.log('Spreadsheet ID:', spreadsheet.getId());
    console.log('Spreadsheet Name:', spreadsheet.getName());
    
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getActiveSheet();
    console.log('Sheet Name:', sheet.getName());
    console.log('Sheet URL:', sheet.getUrl());
    
    return 'Setup test completed successfully';
  } catch (error) {
    console.error('Setup test failed:', error);
    return 'Setup test failed: ' + error.toString();
  }
}
