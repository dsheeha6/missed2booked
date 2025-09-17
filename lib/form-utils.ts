export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error
  if (error && typeof error === 'object' && 'message' in error) return error.message
  return 'This field is required'
}
