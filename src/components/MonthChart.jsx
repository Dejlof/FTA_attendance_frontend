// import React, { useEffect, useState } from "react";
// import Chart from "chart.js/auto";
// import moment from "moment";

// const MonthChart = () => {
//    const [attendanceData, setAttendanceData] = useState([]);
//    const [year, setYear] = useState();
//    let chartInstance = null;

//    useEffect(() => {
//       const dummyData = generateDummyData();
//       setAttendanceData(dummyData);

//       const ctx = document.getElementById("monthAttendanceChart");
//       chartInstance = new Chart(ctx, {
//          type: "bar",
//          data: {
//             labels: moment.months(), // Get an array of month names
//             datasets: [
//                {
//                   label: "Early",
//                   data: dummyData.map((month) => month.early),
//                   backgroundColor: "#003B65",
//                   borderWidth: 1,
//                },
//                {
//                   label: "Late",
//                   data: dummyData.map((month) => month.late),
//                   backgroundColor: "#FFB200",
//                   borderWidth: 1,
//                },
//                {
//                   label: "Absent",
//                   data: dummyData.map((month) => month.absent),
//                   backgroundColor: "#FF0000",
//                   borderWidth: 1,
//                },
//             ],
//          },
//          options: {
//           plugins: {
//             legend: {
//                labels: {
//                   color: "black",
//                },
//                display: false,
//             },
//          },
//             scales: {
//                y: {
//                   beginAtZero: true,
//                   display:false,
//                },
//             },
//          },
//       });

//       // Cleanup function
//       return () => {
//          if (chartInstance) {
//             chartInstance.destroy();
//          }
//       };
//    }, []);

//    const generateDummyData = () => {
//       const currentDate = moment();
//       const currentYear = currentDate.format("YYYY");
//       setYear(currentYear);
//       const dummyData = [];
//       for (let i = 0; i < 12; i++) {
//          const early = Math.floor(Math.random() * 20); 
//          const late = Math.floor(Math.random() * 10); 
//          const absent = 5; 
//          dummyData.push({ early, late, absent });
//       }
//       return dummyData;
//    };

//    return (
//       <>
//          <p className="font-mono text-center my-2">{year}</p>

//          <div>
//             <canvas id="monthAttendanceChart" width="400" height="200"></canvas>
//          </div>
//       </>
//    );
// };

// export default MonthChart;
