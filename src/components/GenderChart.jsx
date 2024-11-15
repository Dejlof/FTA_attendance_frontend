import { Chart } from "chart.js/auto";
import React, { useEffect, useState } from "react";

const GenderChart = () => {
  const [populationData, setPopulationData] = useState([89, 123]);

  let chartInstance = null;

  useEffect(() => {
    const ctx = document.getElementById("genderChart");
    chartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["male", "female"],
        datasets: [
          {
            label: "population",
            data: populationData.map((data) => data),
            backgroundColor: ["#003B65", "#FFB200"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 1,
      },
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);
  return (
    <>
    
      <p className="font-mono inline-block mr-12 mt-2 bg-[#003B65] text-white p-1">Male:{populationData[0]}</p>
      <p className="font-mono inline-block mt-2 bg-[#FFB200] text-white p-1 ">Female:{populationData[1]}</p>
      <div>
        <canvas id="genderChart"></canvas>
      </div>
    </>
  );
};

export default GenderChart;
