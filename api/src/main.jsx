import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produkty from './Produkty'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produkty />
  </StrictMode>,
)
