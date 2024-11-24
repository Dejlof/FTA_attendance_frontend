import React, { useEffect, useState } from "react";
import axios from "axios";

const ListData = ({ setIsLoading, setError, searchQuery }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const sessionToken = sessionStorage.getItem("authToken");
  const AttendRecord_URL = "https://attendanceappadminportal.onrender.com/api/AttendanceRecord";

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      setIsLoading(true); 
      try {
        const response = await axios.get(AttendRecord_URL, {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });
        setAttendanceData(response.data.$values || []);
        setError(null); 
      } catch (err) {
        setError('Error Fetching Attendace Data. Try Again');
        console.error("Error fetching attendance records:", err);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchAttendanceRecords();
  }, [sessionToken, setIsLoading, setError]);

  const renderStatus = (status) => {
    let statusText = "Unknown";
    let statusColor = "bg-gray-300";

    switch (status) {
      case 0:
        statusText = "Early";
        statusColor = "bg-green-500"; 
        break;
      case 1:
        statusText = "Absent";
        statusColor = "bg-red-500"; 
        break;
      case 2:
        statusText = "Late";
        statusColor = "bg-yellow-500"; 
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
              <th>Location</th>
              <th>Check-In Time</th>
              <th>Check-Out Time</th>
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
                <td>{data.candidateStaffId}</td>
                <td>{new Date(data.date).toLocaleString()}</td>
                <td>{renderStatus(data.status)}</td>
                <td>{data.location}</td>
                <td>
                  {data.checkInTime
                    ? new Date(data.checkInTime).toLocaleString()
                    : "N/A"}
                </td>
                <td>
                  {data.checkOutTime
                    ? new Date(data.checkOutTime).toLocaleString()
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
