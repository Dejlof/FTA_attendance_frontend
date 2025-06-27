import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LoadingPage from "./pages/LoadingPage";
const AttendanceList = lazy(() => import(`./pages/AttendanceList`));
const Overview = lazy(() => import(`./pages/Overview`));
const LoginPage = lazy(() => import(`./pages/LoginPage`));
const SignUpPage = lazy(() => import(`./pages/SignUpPage`));
const ForgotPassword = lazy(() => import(`./pages/ForgotPassword`));
const SetNewPassword = lazy(() => import(`./pages/SetNewPassword`));
const PasswordReset = lazy(() => import(`./pages/PasswordReset`));
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div
      className="bg-[#f5f5f5] min-h-screen flex flex-row"
      style={{ overflowX: "auto" }}
    >
      <Sidebar />
      <div className="flex-1">
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/delegates" element={<AttendanceList />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SignUpPage />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/setNewPassword" element={<SetNewPassword />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
