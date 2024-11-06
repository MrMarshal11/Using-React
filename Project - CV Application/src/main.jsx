import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './form.jsx'
import EduExperience from './EduExperience.jsx'
import WorkExperience from './WorkExperience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
    <EduExperience />
    <WorkExperience />
  </StrictMode>,
)
