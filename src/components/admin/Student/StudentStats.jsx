import React from "react";
import totalstudent from "../../../assets/icons/totalstudent.svg";

const StudentStats = () => {
  const studentStatsData = [
    {
      count: 230,
      label: "Active Students",
      icon: totalstudent,
      bg: "white",
    },
    {
      count: 15,
      label: "Inactive Students",
      icon: totalstudent,
      bg: "white",
    },
    {
      count: 120,
      label: "Boys",
      icon: totalstudent,
      bg: "white",
    },
    {
      count: 110,
      label: "Girls",
      icon: totalstudent,
      bg: "white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 font-primary">
      {studentStatsData.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-4 rounded shadow ${stat.bg}`}
        >
          <div>
            <h2 className="text-base lg:text-lg xl:text-xl font-bold">
              {stat.count}
            </h2>
            <p className="text-xs lg:text-sm text-gray-600">{stat.label}</p>
          </div>
          <img src={stat.icon} alt={stat.label} className="w-8 h-8 -mt-3" />
        </div>
      ))}
    </div>
  );
};

export default StudentStats;
