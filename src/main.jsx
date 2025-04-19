import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/homepage/Homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage/>
  </StrictMode>,
)