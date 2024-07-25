import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Otp from './component/OTP_Verification/Otp'


function App() {
 
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Otp/>} />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
