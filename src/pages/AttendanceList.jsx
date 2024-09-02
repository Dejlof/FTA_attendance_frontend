import React from "react";
import SearchHeader from "../components/SearchHeader";
import AttendancePeriod from "../components/AttendancePeriod";
import ListData from "../components/ListData";

const AttendanceList = () => {
   return (
      <div className="basis-4/5 mr-8 py-10">
         <SearchHeader />
         <AttendancePeriod />
         <ListData />
      </div>
   );
};

export default AttendanceList;
