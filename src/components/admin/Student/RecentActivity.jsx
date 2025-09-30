import React from "react";

const activities = [
  {
    id: 1,
    title: "Attended Quran Class",
    time: "Today, 9:00 AM",
    icon: "https://img.icons8.com/color/48/book.png",
    bg: "bg-[#E9FDF0]",
  },
  {
    id: 2,
    title: "Submitted Homework",
    time: "Yesterday, 5:30 PM",
    icon: "https://img.icons8.com/color/48/homework.png",
    bg: "bg-[#E6F3FF]",
  },
  {
    id: 3,
    title: "Participated in Sports",
    time: "15 Sep, 4:00 PM",
    icon: "https://img.icons8.com/color/48/football2.png",
    bg: "bg-[#FFEFF0]",
  },
  {
    id: 4,
    title: "Library Visit",
    time: "14 Sep, 11:00 AM",
    icon: "https://img.icons8.com/color/48/library.png",
    bg: "bg-[#FFF9E6]",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white  rounded-md p-5 w-full h-full flex flex-col">
      {/* Header */}
      <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3  pb-2">
        Recent Activities
      </h2>

      {/* Activity List */}
      <div className="flex-1  grid grid-rows-4 gap-2 ">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`${activity.bg} flex items-center gap-3 p-2.5`}
          >
            <div className="flex-shrink-0">
              <img src={activity.icon} alt="icon" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-gray-800 text-sm leading-tight">
                {activity.title}
              </h3>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
