import React from "react";
import SearchHeader from "../components/SearchHeader";
import WelcomeMessage from "../components/WelcomeMessage";
import OverviewCard from "../components/OverviewCard";
import AttendanceChart from "../components/AttendanceChart";
import DashboardCalendar from "../components/Calendar";
import GenderCard from "../components/GenderCard";
import DelegatesCard from "../components/DelegatesCard";
import NoticeCard from "../components/NoticeCard";

const Overview = () => {
   return (
      <div className="basis-4/5 mr-8 py-10">
         <SearchHeader />
         <WelcomeMessage />
         <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <OverviewCard title={'Total Delegates'} number={156} />
            <OverviewCard title={'Delegates Present'} number={152} />
            <OverviewCard title={'Delegates Absent'} number={'04'} />
            <OverviewCard title={'Late Delegates'} number={'08'} />
         </div>
         <div className="flex flex-wrap gap-4 items-center justify-between mt-8">
            <AttendanceChart  />
            <DashboardCalendar  />
         </div>

         <div className=" flex flex-wrap gap-4 items-center justify-between mt-8 ">
            <div className="flex  gap-6 flex-[.66] ">
               <GenderCard />
              <DelegatesCard />
            </div>

            <div className="flex-[.3]  ">
                 <NoticeCard />
            </div>
         </div>
      </div>
   );
};

export default Overview;
