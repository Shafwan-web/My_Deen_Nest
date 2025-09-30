import React from "react";
import attendance from "../../../assets/icons/attendance.svg";
import calendar from "../../../assets/icons/calendar.svg";
import examresult from "../../../assets/icons/examresult.svg";
import fees from "../../../assets/icons/fees.svg";
import reports from "../../../assets/icons/reports.svg";
import homework from "../../../assets/icons/homework.svg";

const QuickLinks = () => {
  const linksData = [
    { label: "Calendar", icon: calendar, bgColor: "bg-green-100" },
    { label: "Exam Result", icon: examresult, bgColor: "bg-blue-100" },
    { label: "Attendance", icon: attendance, bgColor: "bg-yellow-100" },
    { label: "Fees", icon: fees, bgColor: "bg-gray-100" },
    { label: "Home Works", icon: homework, bgColor: "bg-red-100" },
    { label: "Reports", icon: reports, bgColor: "bg-pink-100" },
  ];

  return (
    <div className="w-full bg-white rounded shadow transition-all duration-300">
      <div className="p-2 sm:p-4 border-b border-[#F2F2F2]">
        <h2 className="text-sm sm:text-base font-bold font-primary">
          Quick Links
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 p-2 sm:p-3">
        {linksData.map((link, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-1 sm:p-2 rounded ${link.bgColor} transition-all duration-300 hover:scale-105`}
          >
            <img
              src={link.icon}
              alt={link.label}
              className="mb-1 sm:mb-2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
            />
            <p className="text-[10px] sm:text-xs font-semibold font-primary text-center truncate w-full">
              {link.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
