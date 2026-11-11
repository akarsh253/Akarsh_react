import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
/*this app is nothing but a power given by react to me to render javascript elements in html.
and react only allows one tag to be returned that is why we div wrap multiple tags to show them on the page.*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)