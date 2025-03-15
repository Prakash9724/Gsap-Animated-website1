import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <App />
 
</React.StrictMode>,
)
