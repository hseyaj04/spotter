import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentContext from './context/StudentContext'
import LecturerContext from './context/LecturerContext'
import SessionContext from './context/SessionContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionContext>
    <StudentContext> 
      <LecturerContext>
        <App />
      </LecturerContext>
    </StudentContext>
    </SessionContext>
  </StrictMode>,
)
