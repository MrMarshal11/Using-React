import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Person from './Greeting'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)