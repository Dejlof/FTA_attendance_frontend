import React from "react";
import Sidebar from "./components/Sidebar";
import AttendanceList from "./pages/AttendanceList";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";

function App() {
   return (
      <div
         className="bg-[#f5f5f5] min-h-screen flex flex-row"
         style={{ overflowX: "auto" }}
      >
         <Sidebar />
         <Routes>
            <Route path="" element={<Overview />} />
            <Route path="delegates" element={<AttendanceList />} />
         </Routes>
      </div>
   );
}

export default App;
