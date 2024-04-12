import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import moment from "moment";

const WeekChart = () => {
   const [attendanceData, setAttendanceData] = useState([]);
   const [monthName, setMonthName] = useState();

   let chartInstance = null;

   useEffect(() => {
      const dummyData = generateDummyData();
      setAttendanceData(dummyData);

      const ctx = document.getElementById("weekAttendanceChart");
      chartInstance = new Chart(ctx, {
         type: "bar",
         data: {
            labels: Array.from(
               { length: dummyData.length },
               (_, i) => `Week ${i + 1}`
            ),
            datasets: [
               {
                  label: "Early",
                  data: dummyData.map((week) => week.early),
                  backgroundColor: "#003B65",
                  borderWidth: 1,
               },
               {
                  label: "Late",
                  data: dummyData.map((week) => week.late),
                  backgroundColor: "#FFB200",
                  borderWidth: 1,
               },
               {
                  label: "Absent",
                  data: dummyData.map((week) => week.absent),
                  backgroundColor: "#FF0000",
                  borderWidth: 1,
               },
            ],
         },
         options: {
            plugins: {
               legend: {
                  display: false,
               },
            },
            scales: {
               y: {
                  beginAtZero: true,
               },
            },
         },
      });

      // Cleanup function
      return () => {
         if (chartInstance) {
            chartInstance.destroy();
         }
      };
   }, []);

   const generateDummyData = () => {
      const currentDate = moment();
      const month = currentDate.format("MMMM");
      setMonthName(month);
      const weeksInMonth = Math.ceil(currentDate.daysInMonth() / 7);
      const dummyData = [];
      for (let i = 1; i <= weeksInMonth; i++) {
         const early = Math.floor(Math.random() * 20);
         const late = Math.floor(Math.random() * 10);
         const absent = 5;
         dummyData.push({ early, late, absent });
      }
      return dummyData;
   };

   return (
      <>
         <p className="font-mono text-center my-2">{monthName}</p>

         <div>
            <canvas id="weekAttendanceChart"></canvas>
         </div>
      </>
   );
};

export default WeekChart;
