import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import moment from "moment";

const DayChart = () => {
   const [attendanceData, setAttendanceData] = useState([]);
   const [monthName, setMonthName] = useState();
   let chartInstance = null;

   useEffect(() => {
      const dummyData = generateDummyData();
      setAttendanceData(dummyData);

      const ctx = document.getElementById("attendanceChart");
      chartInstance = new Chart(ctx, {
         type: "bar",
         data: {
            labels: dummyData.map((day) => day.date),
            datasets: [
               {
                  label: "",
                  data: dummyData.map(() => 1),
                  backgroundColor: dummyData.map((day) =>
                     day.status === "early"
                        ? "#003B65"
                        : day.status === "late"
                        ? "#FFB200"
                        : "#FF0000"
                  ),
                  borderWidth: 1,
               },
            ],
         },
         options: {
            plugins: {
               legend: {
                  labels: {
                     color: "black",
                  },
                  display: false,
               },
            },
            scales: {
               y: {
                  ticks: {
                     display: false,
                  },
               },
            },
         },
      });

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
            date: currentDate.date(i).format("DD"),
            status,
         });
      }
      return dummyData;
   };

   return (
      <>
         <p className="font-mono text-center my-2">{monthName}</p>
         <div>
            <canvas id="attendanceChart"></canvas>
         </div>
      </>
   );
};

export default DayChart;
