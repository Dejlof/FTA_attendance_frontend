import React from "react"
import Sidebar from "./components/Sidebar"
import AttendanceList from "./components/AttendanceList"

function App() {

  return (
      <div className='bg-[#f5f5f5] min-h-screen flex flex-row' style={{ overflowX: 'auto' }}>
     <Sidebar/>
     <AttendanceList/>
      </div>
    
  )
}

export default App
