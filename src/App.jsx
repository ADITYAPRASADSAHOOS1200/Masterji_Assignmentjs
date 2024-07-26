import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Otp from './component/OTP_Verification/Otp'
import Dnd from './component/DragAnddrop/Dnd'
import Pagination from './component/RowsPaginate/Pagination'


function App() {
 
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Otp/>} />
        <Route  path='/course-list' element={<Dnd/>}/>
        <Route path='/batches' element={<Pagination/>}/>
        <Route />

      </Routes>
    </BrowserRouter>
  )
}

export default App
