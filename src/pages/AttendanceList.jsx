import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchHeader from "../components/SearchHeader";
import AttendancePeriod from "../components/AttendancePeriod";
import ListData from "../components/ListData";
import LoadingPage from "./LoadingPage";
import { downloadRecord_URL } from "../utils/AllURLs";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const AttendanceList = ({}) => {
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 7); 
    return d;
  });
  const [endDate, setEndDate] = useState(new Date());
  const [pageNumber, setPageNumber] = useState(1);
const [pageSize] = useState(10); 
const [totalCount, setTotalCount] = useState(0);

const totalPages = Math.ceil(totalCount / pageSize);
  const handleSubmit = async (format) => {
    try {
      setIsLoading(true);
  
      const payload = {
        startDate,
        endDate,
      };
  
      const sessionToken = sessionStorage.getItem("authToken"); 
  
      const downloadData = await axios.post(
        `${downloadRecord_URL}?format=${format}`,
        payload,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
          responseType: "blob", // file
        }
      );
  
      const contentDisposition = downloadData.headers["content-disposition"];
      const fileNameMatch = contentDisposition?.match(/filename="?([^"]+)"?/);
      const fileName = fileNameMatch ? fileNameMatch[1] : `attendance_report.${format}`;
  
      const blob = new Blob([downloadData.data], {
        type: format === "csv" ? "text/csv" : "application/pdf",
      });
  
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      toast.success(`Report downloaded as ${fileName}`);
    } catch (error) {
      console.error("Error downloading report:", error);
      toast.error("Failed to download report. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="basis-4/5 mx-6 py-10 relative min-h-screen ">
      {isLoading && <LoadingPage />} 
      <SearchHeader setSearchQuery={setSearchQuery} />
      <AttendancePeriod  
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleSubmit={handleSubmit}
        setSearchQuery={setSearchQuery}/>
      {error && <p className="flex justify-center items-center text-black text-center lg:text-lg font-semibold pt-40"
         >{error}</p>} 
      <ListData   
      startDate={startDate}
        endDate={endDate}
        setIsLoading={setIsLoading} 
        setError={setError} 
        searchQuery={searchQuery}
        pageNumber={pageNumber}
        pageSize={pageSize}
        totalCount={totalCount}
        setPageNumber={setPageNumber}
        setTotalCount={setTotalCount}
        />
        <div className="flex mt-4 space-x-2 absolute bottom-2 right-0">
  <button
    onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
    disabled={pageNumber === 1}
    className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-black hover:text-white hover:cursor-pointer"
  >
 <FaArrowLeft className="hidden lg:inline-block" />
  </button>
  <span className="text-sm mt-1">Page {pageNumber} / {totalPages}</span>
  <button
    onClick={() => {
      if (pageNumber < totalPages) {
        setPageNumber(prev => prev + 1);
      }
    }}
    disabled={pageNumber >= Math.ceil(totalCount / pageSize)}
    className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-black hover:text-white hover:cursor-pointer"
  >
    <FaArrowRight className="hidden lg:inline-block" />
  </button>
</div>
    </div>
  );
};

export default AttendanceList;

