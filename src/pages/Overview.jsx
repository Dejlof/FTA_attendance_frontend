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
import LoadingPage from "./LoadingPage";
import { candidates, AttenRecord_URL } from "../utils/AllURLs";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [loadingCandidates, setLoadingCandidates] = useState(false);
  const [loadingAttendance, setLoadingAttendance] = useState(false);
  const [candidatesData, setCandidatesData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [femaleCount, setFemaleCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [delegatesEarly, setDelegatesEarly] = useState(0);
  const [delegatesLate, setDelegatesLate] = useState(0);
  const [delegatesPresent, setDelegatesPresent] = useState(0);
  const [delegatesAbsent, setDelegatesAbsent] = useState(0);

  const navigate = useNavigate();
  const sessionToken = sessionStorage.getItem("authToken");

  const startDate = new Date();
  const endDate = new Date();
  const totalCandidates = candidatesData.length;

  // Redirect handler for auth errors
  const handleAuthError = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  // Fetch Candidates
  useEffect(() => {
    const fetchCandidates = async () => {
      setLoadingCandidates(true);
      try {
        const response = await axios.get(candidates, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${sessionToken}` },
        });
        const data = response.data.$values || [];
        setCandidatesData(data);

        const female = data.filter(c => c.gender?.toLowerCase() === "female").length;
        const male = data.filter(c => c.gender?.toLowerCase() === "male").length;

        setFemaleCount(female);
        setMaleCount(male);
      } catch (err) {
        const status = err.response?.status;
        if (status === 401 || status === 403) handleAuthError();
        console.error("Error fetching candidates:", err);
      } finally {
        setLoadingCandidates(false);
      }
    };

    fetchCandidates();
  }, [sessionToken]);

  
  useEffect(() => {
    if (candidatesData.length === 0) return; 

    const fetchAttendance = async () => {
      setLoadingAttendance(true);
      try {
        const formattedStart = startDate.toISOString().split("T")[0];
        const formattedEnd = endDate.toISOString().split("T")[0];
        const response = await axios.get(
          `${AttenRecord_URL}?startDate=${formattedStart}&endDate=${formattedEnd}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${sessionToken}` },
          }
        );

        const data = response.data.items?.$values || [];
        setAttendanceData(data);

        const early = data.filter(a => a.status === 0).length;
        const late = data.filter(a => a.status === 1).length;
        const present = early + late;
        const absent = totalCandidates - present;

        setDelegatesEarly(early);
        setDelegatesLate(late);
        setDelegatesPresent(present);
        setDelegatesAbsent(absent);
      } catch (err) {
        const status = err.response?.status;
        if (status === 401 || status === 403) handleAuthError();
        console.error("Error fetching attendance:", err);
      } finally {
        setLoadingAttendance(false);
      }
    };

    fetchAttendance();
  }, [sessionToken, candidatesData]);

  const isLoading = loadingCandidates || loadingAttendance;

  return (
    <div className="flex-1 py-10 px-6">
      {isLoading && <LoadingPage />}
      <SearchHeader />
      <WelcomeMessage setIsLoading={setLoadingCandidates} />
      <div className="cards grid w-fit sm:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <OverviewCard title="Total Delegates" number={totalCandidates} />
        <OverviewCard title="Delegates Early" number={delegatesEarly} />
        <OverviewCard title="Delegates Absent" number={delegatesAbsent} />
        <OverviewCard title="Late Delegates" number={delegatesLate} />
       
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
        <AttendanceChart />
        <DashboardCalendar />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
        <div className="flex flex-col sm:flex-row gap-6 flex-[.66]">
          <GenderCard maleCount={maleCount} femaleCount={femaleCount} />
          <DelegatesCard />
        </div>
        <div className="flex-[.3]">
          <NoticeCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
