import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const GenderChart = ({ maleCount, femaleCount }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // cleanup previous chart
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Population",
            data: [maleCount, femaleCount],
            backgroundColor: ["#003B65", "#FFB200"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [maleCount, femaleCount]);

  return (
    <div className="mt-6">
      <div className="mb-4 space-x-4">
        <span className="font-mono bg-[#003B65] text-white p-1 rounded">Male: {maleCount}</span>
        <span className="font-mono bg-[#FFB200] text-white p-1 rounded">Female: {femaleCount}</span>
      </div>
      <canvas ref={chartRef} id="genderChart" width={100} height={100}></canvas>
    </div>
  );
};

export default GenderChart;