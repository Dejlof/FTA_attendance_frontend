import React from "react";
import SearchHeader from "../components/SearchHeader";
import AttendancePeriod from "../components/AttendancePeriod";
import ListData from "../components/ListData";
import Sidebar from "../components/Sidebar";

const AttendanceListPage = () => {
   return (
      <article className="bg-[#f5f5f5] min-h-screen flex flex-row"
      style={{ overflowX: "auto" }} >
         <Sidebar/>
         <div className="basis-4/5 mr-8 py-10">
            <SearchHeader />
            <AttendancePeriod />
            <ListData />
         </div>
      </article>
   );
};

export default AttendanceListPage;
