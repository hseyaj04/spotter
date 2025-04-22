import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentContext from './context/StudentContext'
import LecturerContext from './context/LecturerContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentContext> 
      <LecturerContext>
        <App />
      </LecturerContext>
    </StudentContext>
  </StrictMode>,
)
