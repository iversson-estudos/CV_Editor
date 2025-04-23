/*CSS IMPORTS*/
import './assets/css/reset.css';   // Reset first
import './assets/css/global.css'; // Then globals

/*OTHER IMPORTS*/ 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/homepage/Homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage/>
  </StrictMode>
)