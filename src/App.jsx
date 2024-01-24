import { useState } from 'react'
import './App.css'
import RecoveryEmail from './Components/RecoveryEmail'
import { Route, Routes } from 'react-router-dom'
import OtpValidation from './Components/OtpValidation'
import ResetWindow from './Components/ResetWindow'
import SuccessScreen from './Components/SuccessScreen'

function App() {

  return (
    <Routes>
      <Route path='/' element={<RecoveryEmail></RecoveryEmail>}></Route>
      <Route path='/otpvalidation' element={<OtpValidation></OtpValidation>}></Route>
      <Route path='/resetscreen' element={<ResetWindow></ResetWindow>}></Route>
      <Route path='/success' element={<SuccessScreen></SuccessScreen>}></Route>
    </Routes>
  )
}

export default App
