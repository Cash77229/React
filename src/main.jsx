//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HeroContextProvider } from './components/hero/HeroContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <HeroContextProvider>
    <App />
  </HeroContextProvider>   
  </BrowserRouter>
)
