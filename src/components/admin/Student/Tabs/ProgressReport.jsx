import React from "react";
import StudentSubPerformance from "../StudentSubPerformance";
import { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

const ProgressReport = () => {
  const studentsData = [
    {
      progress: 80,
      subject: "Quraan Memorization",
      maulana: "ahmad xyz",
      id: Date.now() + 1,
    },
    {
      progress: 8,
      subject: "Arabic Grammer",
      maulana: "ahmad xyz",
      id: Date.now() + 2,
    },
    {
      progress: 80,
      subject: "Islamic Studies",
      maulana: "ahmad xyz",
      id: Date.now() + 3,
    },
    {
      progress: 80,
      subject: "Tajweed",
      maulana: "ahmad xyz",
      id: Date.now() + 4,
    },
  ];

  // ====== Chart.js Line (monthly) - inline in your component ======
  const chartRef = useRef(null); // canvas DOM ref
  const chartInstanceRef = useRef(null); // keep Chart instance

  // Replace these with your real monthly calculations (12 values)
  const monthlyValues = [
    120, 150, 170, 140, 190, 220, 210, 230, 200, 185, 195, 240,
  ];

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // create gradient (optional, looks nicer)
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(14,165,164,0.9)"); // primary
    gradient.addColorStop(0.6, "rgba(14,165,164,0.25)");
    gradient.addColorStop(1, "rgba(14,165,164,0.05)");

    // Destroy previous instance if it exists (hot-reload safety)
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
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
            label: "Monthly total",
            data: monthlyValues,
            fill: true,
            backgroundColor: gradient,
            borderColor: "rgba(14,165,164,1)",
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "white",
            pointBorderColor: "rgba(14,165,164,1)",
            tension: 0.35, // smooth curvature
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // gives you control with container height
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            display: true,
            labels: { boxWidth: 12, padding: 16 },
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${ctx.formattedValue}`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { maxRotation: 0, padding: 8 },
          },
          y: {
            beginAtZero: true,
            grid: { color: "rgba(0,0,0,0.06)" },
            ticks: { padding: 8 },
          },
        },
        animation: {
          duration: 800,
          easing: "easeOutQuart",
        },
      },
    });

    // cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [monthlyValues]); // re-run when your monthly data changes
  // =================================================================

  const [progress, setProgress] = useState(0);
  const percentage = 70; // 🔹 set your value here

  const size = 200; // circle size
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // animate up to target
    const timer = setTimeout(() => setProgress(percentage), 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <div className="grid grid-cols-[100%] lg:grid-cols-[30%_70%] gap-4  p-4 ">
        <div className="overall-performance flex flex-col items-center bg-white rounded-md ">
          <div className=" pt-4 px-6 w-full   font-primary">
            {/* Title */}
            <h2 className="text-base md:text-lg font-bold text-gray-800 ">
              Overall Performance
            </h2>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 20 }}
          >
            <svg width={size} height={size}>
              {/* Background ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Progress ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#126F77"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.9s ease" }}
              />
              {/* Text in the center */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="18"
                fontWeight="600"
                fill="#0ea5a4"
              >
                {progress}%
              </text>
            </svg>
          </div>
            <p>Academic Progress</p>
          <div className="flex flex-row lg:flex-col w-full  justify-center items-center p-2">
            <div className="flex w-full  justify-between ">
              <p className="w-full  px-2 font-bold">Class Rank:</p>
              <p className="w-full  text-right px-2 font-semibold">3rd</p>
            </div>
            <div className="flex w-full justify-between ">
              <p className="w-full  px-2 font-bold">Grade Average:</p>
              <p className="w-full  text-right px-2 font-semibold">B+</p>
            </div>
          </div>
        </div>
        <div className="progress-report bg-white  rounded-md ">
          <div className="w-full   rounded-md">
            <div className=" pt-4 px-6 w-full   font-primary">
              {/* Title */}
              <h2 className="text-base md:text-lg font-bold text-gray-800 ">
                Subject Performance
              </h2>
            </div>

            <div className="grid grid-cols-1  bg-white gap-4  p-4">
              {studentsData.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between ">
                    <h3 className="font-bold text-sm">{item.subject}</h3>
                    <h3 className="font-semibold text-red-700">A+</h3>
                  </div>

                  {/* Inline progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                    <div
                      className="bg-primary h-3 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>

                  <p className="text-sm  font-semibold mt-1">{item.maulana}</p>
                  <p className="text-right font-semibold text-xs ">
                    {item.progress}% Progress
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  bg-white">
        <div className=" pt-4 px-6 w-full  bg-white font-primary">
          {/* Title */}
          <h2 className="text-base md:text-lg font-bold text-gray-800 ">
            Subject Performance
          </h2>
        </div>
        <div
          style={{
            width: "100%",
            height: 320 /* adjust height as needed */,
          }}
        >
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default ProgressReport;
