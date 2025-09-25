# Development Setup

## Running the Development Environment

To run both the Next.js app and Netlify functions locally:

```bash
npm run dev:full
```

This will start:
- Next.js development server on `http://localhost:3000` (or 3001 if 3000 is busy)
- Netlify functions server on `http://localhost:9999`

## Individual Commands

If you prefer to run them separately:

```bash
# Terminal 1: Start Next.js app
npm run dev

# Terminal 2: Start Netlify functions
npm run dev:functions
```

## How It Works

The onboarding form now uses Netlify functions for form submission because:

1. The project is configured with `output: 'export'` for static site generation
2. Next.js API routes don't work with static export
3. Netlify functions work in both development and production

The form automatically detects the environment:
- **Development**: Uses `http://localhost:9999/.netlify/functions/onboarding`
- **Production**: Uses `/.netlify/functions/onboarding`

## Testing Form Submission

You can test the form submission by:
1. Opening `http://localhost:3000` (or 3001)
2. Filling out the onboarding form
3. Clicking "Complete Setup"

The form will validate required fields and submit to the Netlify function.
