import React from "react";
import Sidebar from "./components/Sidebar";
import AttendanceList from "./pages/AttendanceList";
import Overview from "./pages/Overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AttendanceListPage from "./pages/AttendanceListPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import SetNewPassword from "./pages/SetNewPassword";

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
               <Route path="login" element={<LoginPage />} />
               <Route path="signin" element={<SignUpPage />} />
               <Route path="forgotPassword" element={<ForgotPassword />} />
               <Route path="passwordReset" element={<PasswordReset />} />
               <Route path="setNewPassword" element={<SetNewPassword />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
