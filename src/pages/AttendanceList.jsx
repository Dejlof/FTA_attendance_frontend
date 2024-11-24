import React, { useState } from "react";
import SearchHeader from "../components/SearchHeader";
import AttendancePeriod from "../components/AttendancePeriod";
import ListData from "../components/ListData";
import LoadingPage from "./LoadingPage";
const AttendanceList = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="basis-4/5 mx-6 py-10 relative">
      {isLoading && <LoadingPage />} 
      <SearchHeader setSearchQuery={setSearchQuery} />
      <AttendancePeriod setSearchQuery={setSearchQuery}/>
      {error && <p className="flex justify-center items-center text-black text-center lg:text-lg font-semibold pt-40"
         >{error}</p>} 
      <ListData setIsLoading={setIsLoading} setError={setError} searchQuery={searchQuery} />
    </div>
  );
};

export default AttendanceList;

