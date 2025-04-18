import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import StudentSignup from './pages/StudentSignup'
import Home from './pages/home'
import Attendance from './pages/Attendance'

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

        </Routes>
      </Router>
    </>
  )
}

export default App