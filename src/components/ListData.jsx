import React, { useEffect, useState } from "react";
import axios from "axios";
import { AttenRecord_URL } from "../utils/AllURLs";
import { useNavigate } from "react-router-dom";

const ListData = ({ setIsLoading, setError, searchQuery,startDate, endDate, pageNumber, pageSize, setTotalCount}) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const sessionToken = sessionStorage.getItem("authToken");


 
 
 const navigate = useNavigate();




  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      setIsLoading(true); 
      try {
        const formattedStart = startDate.toISOString().split("T")[0]; // yyyy-MM-dd
        const formattedEnd = endDate.toISOString().split("T")[0];
        const response = await axios.get(`${AttenRecord_URL}?startDate=${formattedStart}&endDate=${formattedEnd}&pageNumber=${pageNumber}&pageSize=${pageSize}`, { 
          withCredentials: true, 
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });
        console.log(formattedStart,formattedEnd)
        setAttendanceData(response.data.items.$values || []);
        setTotalCount(response.data.totalCount);
        setError(null); 
      } catch (err) {
        const status = err.response?.status;
     if (status === 401) {
      navigate("/login"); // Unauthorized: token expired or not logged in
     } else if (status === 403) {
       setError("You do not have permission to view this data."); // Forbidden
     } else {
    setError("Error Fetching Attendance Data. Try Again");
      }
   console.error("Error fetching attendance records:", err);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchAttendanceRecords();
  }, [sessionToken, setIsLoading, setError, startDate, endDate, pageNumber, pageSize]);

  const renderStatus = (status) => {
    let statusText = "Unknown";
    let statusColor = "bg-gray-300";

    switch (status) {
      case 0:
        statusText = "Early";
        statusColor = "bg-green-500"; 
        break;
      case 1:
        statusText = "Late";
        statusColor = "bg-yellow-500"; 
        break;
      case 2:
        statusText = "Absent";
        statusColor = "bg-red-500"; 
        break;
      default:
        break;
    }
    return <span className={`text-white px-2 py-1 rounded-full ${statusColor}`}>{statusText}</span>;
  };

  const filteredData = attendanceData.filter((data) =>
    data.candidateName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredData.length > 0 ? (
        <table className="table-auto text-center bg-white w-full text-sm lg:text-sm mr-20">
          <thead className="p-3">
            <tr className="h-14 text-[#969595]">
              <th>Candidate Name</th>
              <th>Email</th>
              <th>Staff ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Department</th>
              <th>Check-In Time</th>
            </tr>
          </thead>
          <tbody className="p-3">
            {filteredData.map((data, index) => (
              <tr
                key={index}
                className="border-b-1 border-solid border-t-2 border-gray-200 h-14 p-3 font-semibold"
              >
                <td>{data.candidateName}</td>
                <td>{data.candidateEmail}</td>
                <td>{data.staffId}</td>
                <td>{new Date(data.date).toLocaleDateString(undefined, {
                   year: 'numeric',
                   month: 'short',
                  day: 'numeric',
                  })}</td>
                <td>{renderStatus(data.status)}</td>
                <td>{data.department}</td>
                <td>
                  {data.checkInTime
                    ? new Date(data.date).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                    : "N/A"}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
       
          <p className="text-black text-center lg:text-lg font-semibold h-52">No attendance records found.</p>
        

      )}
    </div>
  );
};

export default ListData;
