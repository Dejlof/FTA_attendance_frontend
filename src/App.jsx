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
            <Route path="/" element={<Overview />} />
            <Route path="/delegates" element={<AttendanceList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SignUpPage />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/setNewPassword" element={<SetNewPassword />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
