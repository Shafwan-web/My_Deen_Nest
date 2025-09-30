import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FeesCollection = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Collected Fee",
        data: [50, 75, 100, 125, 150, 100, 75, 125, 150, 100, 75, 125],
        backgroundColor: "#063F6C",
        borderRadius: 2,
        borderSkipped: false,
      },
      {
        label: "Total Fee",
        data: [100, 125, 150, 175, 200, 150, 125, 175, 200, 150, 125, 175],
        backgroundColor: "#E5E7EB",
        borderRadius: 2,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 12,
            weight: "500",
          },
          color: "#374151",
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#063F6C",
        borderWidth: 1,
        cornerRadius: 6,
        displayColors: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: "500",
          },
          color: "#6B7280",
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 200,
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: "500",
          },
          color: "#6B7280",
          stepSize: 50,
          callback: function (value) {
            return value;
          },
        },
        border: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="w-full bg-white border border-[#F2F2F2] rounded-md shadow-sm font-primary">
      {/* Header */}
      <div className="flex justify-between items-center border-b p-3 border-[#F2F2F2]">
        <h2 className="text-sm font-semibold text-[#1E293B]">
          Fees Collection
        </h2>
        <select className="border border-[#F2F2F2] rounded px-2 py-1 text-xs">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Chart Container */}
      <div className="p-4">
        <div className="h-48 sm:h-56 lg:h-64 xl:h-72 2xl:h-80">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default FeesCollection;
