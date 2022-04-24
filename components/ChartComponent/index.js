import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import { defaults } from "chart.js";
import { Line } from "react-chartjs-2";

defaults.font.family = "Inter";

const ChartComponent = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [0, 5, 5, 0, 5, 200, 10],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 2,
        borderColor: "#A7AFFA",
        fill: "start",
        borderRadius: 20,
        backgroundColor: "rgba(167,175,250,.2)",
      },
      point: {
        radius: 4,
        hitRadius: 0,
        backgroundColor: "#A7AFFA",
      },
    },
    scales: {
      xAxis: {
        display: true,
      },
      yAxis: {
        display: true,
        min: 0,
        max: 200,
        stepSize: 20,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
