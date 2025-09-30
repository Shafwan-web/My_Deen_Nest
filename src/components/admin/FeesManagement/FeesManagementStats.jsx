import React from "react";
import totalstudent from "../../../assets/icons/totalstudent.svg"; // replace with correct fee icons later

const   FeesManagementStats = () => {
  const feesStatsData = [
    {
      title: "Total Collection",
      value: "₹ 2,40,000",
      extra: "Till Date",
      icon: totalstudent,
      bg: "white",
    },
    {
      title: "Pending Amount",
      value: "₹ 35,000",
      extra: "From 18 students",
      icon: totalstudent,
      bg: "white",
    },
    {
      title: "Collection Rate",
      value: "87%",
      extra: "Compared to last month",
      icon: totalstudent,
      bg: "white",
    },
    {
      title: "This Month",
      value: "₹ 50,000",
      extra: "So far",
      icon: totalstudent,
      bg: "white",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 font-primary">
      {feesStatsData.map((stat, index) => (
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

export default FeesManagementStats;
