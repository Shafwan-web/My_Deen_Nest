import React from "react";
import totalstudent from "../../../assets/icons/totalstudent.svg"; // replace with correct attendance icons later

const AttendanceStats = () => {
  const attendanceStatsData = [
    {
      title: "Total Students",
      value: "450",
      extra: "Across all classes",
      icon: totalstudent,
      bg: "white",
    },
    {
      title: "Present Today",
      value: "410",
      extra: "90% attendance",
      icon: totalstudent,
      bg: "white",
    },
    {
      title: "Absent Today",
      value: "40",
      extra: "Includes 5 on leave",
      icon: totalstudent,
      bg: "white",
    },
    {
      title: "Average This Month",
      value: "88%",
      extra: "Attendance rate",
      icon: totalstudent,
      bg: "white",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 font-primary">
      {attendanceStatsData.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-4 rounded shadow ${stat.bg}`}
        >
          <div>
            {/* Title */}
            <p className="text-xs lg:text-sm text-gray-600">{stat.title}</p>
            {/* Value */}
            <h2 className="text-base lg:text-lg xl:text-xl font-bold">
              {stat.value}
            </h2>
            {/* Extra info */}
            <p className="text-[11px] lg:text-xs text-gray-500">{stat.extra}</p>
          </div>
          <img src={stat.icon} alt={stat.title} className="w-8 h-8 -mt-3" />
        </div>
      ))}
    </div>
  );
};

export default AttendanceStats;
