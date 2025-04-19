import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import StudentSignup from './pages/StudentSignup'
import Home from './pages/home'
import Attendance from './pages/Attendance'
import ScannerPage from './pages/ScannerPage'
import Final from './pages/Final'
import LecturerLogin from './pages/LecturerLogin'
import LecturerHome from './pages/LecturerHome'
function App() {

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<StudentSignup />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/attendance' element={<Attendance />}/>
          <Route path='/camera' element={<ScannerPage />}/>
          <Route path='/final' element={<Final/>}/>
          <Route path='/lecturerlogin' element={<LecturerLogin/>}/>
          <Route path='/lecturerhome' element={<LecturerHome/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App