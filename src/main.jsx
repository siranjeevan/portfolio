import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './Components/HomeScreen/HomeScreen.jsx'
// import HeaderScreen from './Components/Header/main/HeaderScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
