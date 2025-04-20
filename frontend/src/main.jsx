import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentContext from './context/StudentContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentContext>  
      <App />
    </StudentContext>
  </StrictMode>,
)
