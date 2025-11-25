// Helper function to get the correct base path for assets
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Get base URL from Vite (includes /Portfolio/ in production)
  const base = import.meta.env.BASE_URL
  // Combine base with path
  return `${base}${cleanPath}`
}

