import React, { useState } from "react";
import MonthChart from "./MonthChart";
import DayChart from "./DayChart";
import WeekChart from "./WeekChart";

const AttendanceChart = () => {
   const [currentTab, setCurrentTab] = useState("month");

   const onSetTab = (tab) => {
      setCurrentTab(tab);
   };

   return (
      <div className="p-6 bg-white rounded flex-[.7]">
         <div className="flex items-center justify-between">
            <h1>Total Attendance</h1>
            <nav className="list-none font-medium text-[#0000005E] flex gap-3 text-[12px] leading-4">
               <li
                  className={
                     currentTab === "month"
                        ? "cursor-pointer text-[#F0BD2D] relative"
                        : "cursor-pointer"
                  }
                  onClick={() => onSetTab("month")}
               >
                  Months
                  {currentTab === "month" && (
                     <span className="absolute bottom-0 left-[20%] h-[1.7px] bg-[#F0BD2D] w-7 top-4"></span>
                  )}
               </li>
               <li
                  className={
                     currentTab === "week"
                        ? "cursor-pointer text-[#F0BD2D] relative"
                        : "cursor-pointer"
                  }
                  onClick={() => onSetTab("week")}
               >
                  Weeks
                  {currentTab === "week" && (
                     <span className="absolute bottom-0 left-[20%] h-[1.7px] bg-[#F0BD2D] w-5 top-4"></span>
                  )}
               </li>
               <li
                  className={
                     currentTab === "day"
                        ? "cursor-pointer text-[#F0BD2D] relative"
                        : "cursor-pointer"
                  }
                  onClick={() => onSetTab("day")}
               >
                  Day
                  {currentTab === "day" && (
                     <span className="absolute bottom-0 left-[20%] h-[1.7px] bg-[#F0BD2D] w-4 top-4"></span>
                  )}
               </li>
            </nav>
         </div>
         <div className="charts">
            {currentTab === "month" && <MonthChart />}
            {currentTab === "day" && <DayChart />}
            {currentTab === "week" && <WeekChart />}
         </div>
      </div>
   );
};

export default AttendanceChart;
