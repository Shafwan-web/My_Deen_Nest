import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const Attendance = () => {
  const [activeTab, setActiveTab] = useState("Student");

  const data = [
    { name: "Present", value: 470, color: "#063F6C" },
    { name: "Absent", value: 30, color: "#0A7EC2" },
  ];

  const tabs = ["Student", "Teacher", "Staff"];

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value, color } = payload[0].payload;
      return (
        <div
          className="px-3  rounded-md shadow-md"
          style={{ backgroundColor: color }}
        >
          <p className="font-semibold text-white">
            {name}: {value}
          </p>
        </div>
      );
    } 
    return null;
  };

  return (
    <div className="w-full bg-white rounded-md shadow-sm flex flex-col transition-all duration-300 overflow-hidden font-primary">
      {/* Header */}
      <div className="flex justify-between items-center border-b p-2 sm:p-3 border-[#F2F2F2]">
        <h2 className="text-sm sm:text-base font-semibold truncate">
          Attendance
        </h2>
        <select className="border border-[#F2F2F2] rounded px-2 py-1 text-xs sm:text-sm">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="flex px-4 gap-6 mt-3 border-b border-[#F2F2F2] py-2 font-primary">
        <button className="text-[#ADB5BD] font-semibold hover:underline hover:underline-offset-12 hover:decoration-3 decoration-[#063F6C]">
          Present
        </button>
        <button className="text-[#ADB5BD] font-semibold hover:underline hover:underline-offset-12 hover:decoration-3 decoration-[#063F6C]">
          Absent
        </button>
        <button className="text-[#ADB5BD] font-semibold hover:underline hover:underline-offset-12 hover:decoration-3 decoration-[#063F6C]">
          Late
        </button>
      </div>

      {/* Stats row */}
      <div className="flex justify-around flex-wrap text-center mb-2 sm:mb-4 font-primary px-2 mt-2">
        {[
          { label: "Present", value: 28 },
          { label: "Absent", value: 28 },
          { label: "Late", value: 28 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#F8FAFC] px-3 sm:px-4 py-1 sm:py-2 rounded-sm flex-1 mx-1 min-w-0"
          >
            <p className="text-sm sm:text-base font-bold truncate">
              {item.value}
            </p>
            <p className="text-[10px] sm:text-xs text-[#6B7280] truncate">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Donut Chart */}
      <div className="flex-1 flex flex-col items-center justify-center relative h-[180px] sm:h-[200px] px-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />}  position={{ x: 150, y: 100 }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-center">
          <p className="text-xl sm:text-2xl font-bold">500</p>
          <p className="text-gray-500 text-xs sm:text-sm truncate">
            Total Student
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className=" text-right px-2 sm:px-3 pb-2">
        <button className="p-1 sm:p-2 text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All
        </button>
      </div>
    </div>
  );
};

export default Attendance;
