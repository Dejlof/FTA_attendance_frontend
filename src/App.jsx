import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceListPage from './pages/AttendanceListPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPassword from './pages/ForgotPassword';
import PasswordReset from './pages/PasswordReset';
import SetNewPassword from './pages/SetNewPassword';

function App() {

  return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<AttendanceListPage />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signin' element={<SignUpPage/>}/>
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
          <Route path='/passwordReset' element={<PasswordReset/>}/>
          <Route path='/setNewPassword' element={<SetNewPassword/>}/>
        </Routes>
      </Router>
      </>
  )
}

export default App
