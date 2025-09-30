import React from "react";
import nf1 from "../../../assets/icons/nf1.svg";
import nf2 from "../../../assets/icons/nf2.svg";
import nf3 from "../../../assets/icons/nf3.svg";
import nf4 from "../../../assets/icons/nf4.svg";
import nf5 from "../../../assets/icons/nf5.svg";

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "New Syllabus Instructions",
      date: "Added On: 21 Apr 2025",
      days: "20 Days",
      image: nf1,
    },
    {
      id: 2,
      title: "World Environment Day program...!!",
      date: "Added On: 21 Apr 2025",
      days: "15 Days",
      image: nf2,
    },
    {
      id: 3,
      title: "Exam preparation Notification!",
      date: "Added On: 21 Apr 2025",
      days: "12 Days",
      image: nf3,
    },
    {
      id: 4,
      title: "Online Classes Preparation",
      date: "Added On: 21 Apr 2025",
      days: "02 Days",
      image: nf4,
    },
    {
      id: 5,
      title: "Exam Time Table Release",
      date: "Added On: 21 Apr 2025",
      days: "06 Days",
      image: nf5,
    },
  ];

  return (
    <div className="w-full h-[388px] bg-white border border-[#F2F2F2] rounded-md shadow-sm flex flex-col font-primary">
      {/* Header */}
      <div className="flex justify-between items-center border-b p-3 border-[#F2F2F2] flex-shrink-0">
        <h2 className="text-base font-semibold text-[#1E293B]">Notice Board</h2>
        <button className="text-xs text-[#1E293B] hover:text-blue-800 font-medium">
          View All
        </button>
      </div>

      {/* Notices List */}
      <div className="p-3 flex-1 overflow-y-auto">
        <div className="relative h-full">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-6 w-0.5 bg-gray-200"></div>

          <div className="space-y-4">
            {notices.map((notice) => (
              <div key={notice.id} className="relative flex items-start gap-3">
                {/* Image */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm z-10 relative overflow-hidden bg-white">
                  <img
                    src={notice.image}
                    alt="notice"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium text-gray-800 mb-1 truncate">
                        {notice.title}
                      </h3>
                      <p className="text-sm text-gray-500">{notice.date}</p>
                    </div>

                    {/* Days badge */}
                    <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0">
                      {notice.days}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
