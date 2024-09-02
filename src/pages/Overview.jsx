import React, { useEffect, useState } from "react";
import SearchHeader from "../components/SearchHeader";
import WelcomeMessage from "../components/WelcomeMessage";
import OverviewCard from "../components/OverviewCard";
import AttendanceChart from "../components/AttendanceChart";
import DashboardCalendar from "../components/Calendar";
import GenderCard from "../components/GenderCard";
import DelegatesCard from "../components/DelegatesCard";
import NoticeCard from "../components/NoticeCard";
import axios from "axios";
import { BASE_URL } from "../utils/api";

const Overview = () => {
   const [delegatesData, setDelegatesData] = useState([]);
   const [attendanceData, setAttendanceData] = useState([]);
   let delegatesPresent = 0,
      delegatesAbsent = 0,
      delegatesLate = 0;
   console.log(BASE_URL);
   useEffect(() => {
      const source = axios.CancelToken.source();
      axios
         .get(`${BASE_URL}DelegatesData`, {
            cancelToken: source.token,
         })
         .then((response) => {
            setDelegatesData(response.data);
         })
         .catch((error) => {
            if (axios.isCancel(error)) {
               console.log("request cancelled", error.message);
            } else {
               console.error("error fetching data", error);
            }
         });
      axios
         .get(`${BASE_URL}AttendanceData`, {
            cancelToken: source.token,
         })
         .then((response) => {
            setAttendanceData(response.data);
         })
         .catch((error) => {
            if (axios.isCancel(error)) {
               console.log("request cancelled", error.message);
            } else {
               console.error("error fetching data", error);
            }
         });

      return () => {
         source.cancel("component unmounted, request cancelled");
      };
   }, []);

   if (attendanceData) {
      attendanceData.forEach((data) => {
         if (data.IsLate == true) {
            delegatesLate++;
         } else if (data.IsPresent == true) {
            delegatesPresent++;
         } else if (data.IsPresent == false) {
            delegatesAbsent++;
         }
      });
   }

   return (
      <div className="flex-1 py-10">
         <SearchHeader />
         <WelcomeMessage />
         <div className="cards grid w-fit sm:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <OverviewCard
               title={"Total Delegates"}
               number={delegatesData.length}
            />
            <OverviewCard
               title={"Delegates Present"}
               number={delegatesPresent}
            />
            <OverviewCard title={"Delegates Absent"} number={delegatesAbsent} />
            <OverviewCard title={"Late Delegates"} number={delegatesLate} />
         </div>
         <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
            <AttendanceChart />
            <DashboardCalendar />
         </div>

         <div className=" flex flex-col sm:flex-row gap-4 justify-between mt-8 ">
            <div className="flex flex-col sm:flex-row  gap-6 flex-[.66] ">
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
