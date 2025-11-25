import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Handle GitHub Pages 404 redirect format
// The 404.html redirects to /Portfolio/?/path format, we need to convert it to /Portfolio/path
if (import.meta.env.PROD) {
  const search = window.location.search
  
  // Check if we have the /?/path format from 404 redirect
  if (search.startsWith('/?/')) {
    const redirectPath = search.slice(2) // Remove '/?'
    const cleanPath = redirectPath.replace(/~and~/g, '&')
    // Get base path (should be /Portfolio)
    const basePath = window.location.pathname.split('/').slice(0, 2).join('/') // Gets /Portfolio
    // Update the URL to /Portfolio/path
    const newPath = basePath + '/' + cleanPath.replace(/^\//, '') // Ensure no double slashes
    window.history.replaceState({}, '', newPath)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


