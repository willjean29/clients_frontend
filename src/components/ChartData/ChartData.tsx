import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import "./ChartData.css";

interface YearsChartProps {
  id: string;
  labels: string[];
  data: number[];
  type: "horizontal" | "vertical";
}

const YearsChart: React.FC<YearsChartProps> = ({
  id,
  labels,
  data,
  type = "vertical",
}) => {
  useEffect(() => {
    const ctx = document.getElementById(id);
    Chart.register(...registerables);

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Edades de Clientes",
            data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: type === "vertical" ? "x" : "y",
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);
  return (
    <div className="chart">
      <div className="chart-content">
        <canvas id={id} width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default YearsChart;
