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
import LecturerAttendance from './pages/LecturerAttendance'
import StudentProtectedWrapper from './wrappers/StudentProtectedWrapper'

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
          <Route 
          path='/login' 
          element={<LoginPage />}/>
          <Route path='/signup' element={<StudentSignup />} />
          <Route path='/home' element={
            <StudentProtectedWrapper>
              <Home />
            </StudentProtectedWrapper>
            }/>
          <Route path='/attendance' element={
            <StudentProtectedWrapper>
              <Attendance />
            </StudentProtectedWrapper>
          }/>
          <Route path='/camera' element={
            <StudentProtectedWrapper>
              <ScannerPage />
            </StudentProtectedWrapper>
          }/>
          <Route path='/final' element={
            <StudentProtectedWrapper>
              <Final />
            </StudentProtectedWrapper>
          }/>
          <Route path='/lecturerlogin' element={<LecturerLogin/>}/>
          <Route path='/lecturerhome' element={<LecturerHome/>}/>
          <Route path='/lecturerattendance' element={<LecturerAttendance/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App