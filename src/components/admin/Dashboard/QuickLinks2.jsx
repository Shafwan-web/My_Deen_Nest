import React from "react";
import { ChevronRight } from "lucide-react";
import attendance2 from "../../../assets/icons/attendance2.svg";
import event from "../../../assets/icons/event.svg";
import membership from "../../../assets/icons/membership.svg";
import finance from "../../../assets/icons/finance.svg";

const QuickLinks2 = () => {
  const quickLinks = [
    {
      id: 1,
      title: "View Attendance",
      cardBg: "bg-[#FFF9E6]",
      icon: attendance2,
    },
    {
      id: 2,
      title: "New Events",
      cardBg: "bg-[#E9FDF0]",
      icon: event,
    },
    {
      id: 3,
      title: "Membership Plans",
      cardBg: "bg-[#FFEFF0]",
      icon: membership,
    },
    {
      id: 4,
      title: "Finance & Accounts",
      cardBg: "bg-[#E6F3FF]",
      icon: finance,
    },
  ];

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 font-primary ">
        {quickLinks.map((link) => (
          <div
            key={link.id}
            className={`${link.cardBg} rounded-lg p-2 2xl:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border-3 border-white `}
          >
            <div className="flex items-center justify-between  ">
              <div className="flex items-center gap-3">
                {/* Image */}
                <div className="w-8 xl:w-10 h-8 xl:h-10  rounded-sm flex items-center justify-center  overflow-hidden">
                  <img
                    src={link.icon}
                    alt={link.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm xl:text-base font-medium text-gray-800 truncate">
                    {link.title}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-600 group-hover:text-gray-800 bg-white rounded-xl transition-colors duration-200 flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks2;
