import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import excellentIcon from "../../../assets/icons/excellent.svg";
import goodIcon from "../../../assets/icons/good.svg";
import averageIcon from "../../../assets/icons/average.svg";

const data = [
  { name: "Excellent", value: 45, color: "#3B82F6" }, // blue
  { name: "Good", value: 11, color: "#F59E0B" }, // orange
  { name: "Average", value: 2, color: "#EF4444" }, // red
];

// Custom tooltip with color background
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, color } = payload[0].payload;

    return (
      <div
        className="rounded px-2 py-1 text-xs shadow-md text-white font-semibold"
        style={{ backgroundColor: color }}
      >
        {name} : {value.toString().padStart(2, "0")}
      </div>
    );
  }
  return null;
};

const Performance = () => {
  return (
    <div className="w-full bg-white border border-[#F2F2F2] rounded-md shadow-sm flex flex-col transition-all duration-300 font-primary">
      {/* Header */}
      <div className="flex justify-between items-center p-2 sm:p-3 border-b border-[#F2F2F2]">
        <h2 className="text-sm sm:text-base font-semibold text-[#1E293B] truncate">
          Class wise Performance
        </h2>
        <select className="border border-gray-300 text-xs sm:text-sm rounded px-2 py-1">
          <option>Class</option>
          <option>Class 1</option>
          <option>Class 2</option>
        </select>
      </div>

      <div className="flex p-2 sm:p-3 font-primary gap-2 sm:gap-4 flex-1 min-h-0">
        {/* Left Stats */}
        <div className="flex flex-col gap-1 sm:gap-2 flex-1 min-w-0">
          {[
            { icon: excellentIcon, label: "Excellent", value: 45 },
            { icon: goodIcon, label: "Good", value: 11 },
            { icon: averageIcon, label: "Average", value: 2 },
          ].map((item, index) => (
            <div
              key={index}
              className="text-[10px] sm:text-xs flex border border-[#F2F2F2] px-2 py-2 sm:py-3 justify-between items-center"
            >
              <div className="flex gap-1 sm:gap-2 items-center min-w-0 flex-1">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0"
                />
                <p className="text-[#6B7280] truncate">{item.label}</p>
              </div>
              <p className="text-[#000000] font-semibold flex-shrink-0 ml-2">
                {item.value.toString().padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>

        {/* Right Chart */}
        <div className="flex justify-center items-center flex-1 min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Performance;
