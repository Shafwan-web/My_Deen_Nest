import React from "react";
import event from "../../../../assets/icons/events-img.svg";
import event2 from "../../../../assets/icons/events-img2.svg"; // <-- Added second icon

const Events = () => {
  const eventData = [
    {
      id: 1,
      title: "Islamic Quiz Competition",
      dis: "Annual Quran and Islamic knowledge competition",
      date: "20/10/2025",
      status: "Not Attended",
    },
    {
      id: 2,
      title: "Ramadan Charity Drive",
      dis: "Fundraising for underprivileged families",
      date: "05/04/2025",
      status: "Attended",
    },
    {
      id: 3,
      title: "Eid Celebration Event",
      dis: "Community gathering for Eid festivities",
      date: "12/06/2025",
      status: "Attended",
    },
    {
      id: 4,
      title: "Hifz Competition",
      dis: "Memorization contest for Quran students",
      date: "15/08/2025",
      status: "Not Attended",
    },
    {
      id: 5,
      title: "Islamic Art Workshop",
      dis: "Calligraphy and Islamic art session",
      date: "22/09/2025",
      status: "Attended",
    },
  ];

  return (
    <div className="bg-white">
      <div className="pt-4 px-6 w-full flex justify-between bg-white border-b border-gray-300 font-primary">
        {/* Title */}
        <div className="text-base md:text-lg flex w-full justify-between mb-5 items-center font-bold text-gray-800">
          Payment History
          <div className="space-x-2">
            <button className="bg-[#E9EDF4] rounded text-xs text-[#6B7280] px-2.5 py-1.5" >Export</button>
            <select
              name="time"
              className="p-1 border border-gray-300 rounded-sm text-xs text-[#1E293B]"
            >
              <option value="1">This Month</option>
              <option value="2">1 Month</option>
              <option value="3">3 Month</option>
              <option value="4">90 Days</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 py-4">
        {eventData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between w-full px-3 gap-3 bg-[#F9FAFC] rounded-md"
          >
            <div className="flex justify-center items-center gap-3 py-2">
              {/* Dynamic image based on status */}
              <img
                src={item.status === "Attended" ? event2 : event}
                className="w-9 h-9"
                alt=""
              />
              <div className="flex flex-col">
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-[#6B7280]">{item.dis}</p>
                <p className="text-xs text-[#6B7280]">{item.date}</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p
                className={`rounded-full justify-center items-center text-xs px-3 py-1 ${
                  item.status === "Attended"
                    ? "bg-[#E9FDF0] text-[#16A34A]"
                    : "bg-[#FFEFF0] text-[#DC2626]"
                }`}
              >
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
