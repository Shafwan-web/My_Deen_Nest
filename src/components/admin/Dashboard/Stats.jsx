import React from "react";
import totalstudent from "../../../assets/icons/totalstudent.svg";
import totalteacher from "../../../assets/icons/totalteacher.svg";
import totalstaff from "../../../assets/icons/totalstaff.svg";
import totalsubject from "../../../assets/icons/totalsubject.svg";

const Stats = () => {
  const statsData = [
    {
      count: 3654,
      label: "Total Student",
      icon: totalstudent,
    },
    {
      count: 3654,
      label: "Total Teacher",
      icon: totalteacher,
    },
    {
      count: 3654,
      label: "Total Staff",
      icon: totalstaff,
    },
    {
      count: 3654,
      label: "Total Subject",
      icon: totalsubject,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 font-primary">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-4 rounded shadow bg-[#FFFFFF]`}
        >
          <div>
            <h2 className="text-base lg:text-lg xl:text-xl font-bold">
              {stat.count}
            </h2>
            <p className="text-xs lg:text-sm text-gray-500">{stat.label}</p>
          </div>
          <img src={stat.icon} alt={stat.label} className="w-8 h-8 -mt-3" />
        </div>
      ))}
    </div>
  );
};

export default Stats;
