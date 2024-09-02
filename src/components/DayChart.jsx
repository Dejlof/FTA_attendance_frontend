import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { BASE_URL } from "../utils/api";

const DayChart = () => {
   const [attendanceData, setAttendanceData] = useState(null);
   const [day, setDay] = useState("");

   useEffect(() => {
      axios
         .get(`${BASE_URL}AttendanceData`)
         .then((response) => {
            const fetchedData = response.data;

            const firstDate = new Date(fetchedData[0].CreatedAt);
            setDay(firstDate.toLocaleDateString('en-US', { weekday: 'long' }));
            const month = firstDate.getMonth();
            const year = firstDate.getFullYear();

            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const labels = Array.from({ length: daysInMonth }, (_, i) => i + 1);
            const early = Array(daysInMonth).fill(0);
            const late = Array(daysInMonth).fill(0);
            const absent = Array(daysInMonth).fill(0);

            fetchedData.forEach((item) => {
               const day = new Date(item.CreatedAt).getDate() - 1;
               if (item.IsPresent) {
                  if (item.IsLate) {
                     late[day]++;
                  } else {
                     early[day]++;
                  }
               } else {
                  absent[day]++;
               }
            });

            setAttendanceData({
               labels: labels,
               datasets: [
                  {
                     label: "Early",
                     data: early,
                     backgroundColor: "#003B65",
                  },
                  {
                     label: "Late",
                     data: late,
                     backgroundColor: "#FFB200",
                  },
                  {
                     label: "Absent",
                     data: absent,
                     backgroundColor: "#FF0000",
                  },
               ],
            });
         })
         .catch((error) => {
            console.error("Error fetching data: ", error);
         });
   }, []);

   const options = {
      responsive: true,
      scales: {
         x: {
            stacked: true,
         },
         y: {
            stacked: true,
         },
      },
      plugins: {
         legend: {
            labels: {
               color: "black",
            },
            display: false,
         },
      },
   };

   return (
      <div>
         <p className="font-mono text-center my-2">{day}</p>
         {attendanceData && <Bar data={attendanceData} options={options} />}
      </div>
   );
};

export default DayChart;
