import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import moment from "moment";

const DayChart = () => {
   const [attendanceData, setAttendanceData] = useState([]);
   let chartInstance = null;

   useEffect(() => {
      // Generate dummy attendance data
      const dummyData = generateDummyData();
      setAttendanceData(dummyData);

      // Create the chart
      const ctx = document.getElementById("attendanceChart");
      chartInstance = new Chart(ctx, {
         type: "bar",
         data: {
            labels: dummyData.map((day) => day.date),
            datasets: [
               {
                  label: "Attendance",
                  data: dummyData.map((day) =>
                     day.status === "early" ? 1 : day.status === "late" ? 2 : 3
                  ),
                  backgroundColor: dummyData.map((day) =>
                     day.status === "early"
                        ? "blue"
                        : day.status === "late"
                        ? "yellow"
                        : "red"
                  ),
                  borderWidth: 1,
               },
            ],
         },
         options: {
            scales: {
               y: {
                  ticks: {
                     callback: (value) =>
                        value === 1 ? "Early" : value === 2 ? "Late" : "Absent",
                  },
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
      const daysInMonth = currentDate.daysInMonth();
      const dummyData = [];
      for (let i = 1; i <= daysInMonth; i++) {
         const status =
            Math.random() < 0.7
               ? "early"
               : Math.random() < 0.9
               ? "late"
               : "absent";
         dummyData.push({
            date: currentDate.date(i).format("YYYY-MM-DD"),
            status,
         });
      }
      return dummyData;
   };

   return (
      <div>
         <canvas id="attendanceChart" width="400" height="200"></canvas>
      </div>
   );
};

export default DayChart;
