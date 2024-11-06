import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './form.jsx'
import Experience from './Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
    <Experience />
  </StrictMode>,
)
