import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceListPage from './pages/AttendanceListPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<AttendanceListPage />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='signin' element={<SignUpPage/>}/>
        </Routes>
      </Router>
      </>
  )
}

export default App
