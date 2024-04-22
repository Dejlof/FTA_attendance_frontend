import React from 'react';
import Sidebar from "../components/Sidebar";
import AttendanceList from "../components/AttendanceList";

const AttendanceListPage = () => {

  return (
    <>
        <div className='bg-[#f5f5f5] min-h-screen flex flex-row' style={{ overflowX: 'auto' }}>
        <Sidebar/>
        <AttendanceList/>
      </div>
    </>
  )
}

export default AttendanceListPage