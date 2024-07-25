import React from "react";
import Sidebar from "./components/Sidebar";
import AttendanceList from "./pages/AttendanceList";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
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
      <div
         className="bg-[#f5f5f5] min-h-screen flex flex-row"
         style={{ overflowX: "auto" }}
      >
         <Sidebar />
         <div className="flex-1 mx-4">
            <Routes>
               <Route path="" element={<Overview />} />
               <Route path="delegates" element={<AttendanceList />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
