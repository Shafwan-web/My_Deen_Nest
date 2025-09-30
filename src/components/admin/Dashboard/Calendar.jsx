import React from "react";
import { Plus } from "lucide-react";
import CustomCalendar from "./CustomCalendar";

const Calendar = () => {
  // Sample upcoming events data - added more events to demonstrate scrolling
  const upcomingEvents = [
    {
      id: 1,
      title: "Parents, Teacher Meet",
      date: "15 July 2025",
      time: "09:30 AM - 10:30 AM",
      color: "#063F6C",
      icon: "👑",
    },
    {
      id: 2,
      title: "Parents, Teacher Meet",
      date: "15 July 2025",
      time: "09:30 AM - 10:30 AM",
      color: "#F59E0B",
      icon: "🎂",
    },
    {
      id: 3,
      title: "Parents, Teacher Meet",
      date: "15 July 2025",
      time: "09:30 AM - 10:30 AM",
      color: "#063F6C",
      icon: "📅",
    },
    {
      id: 4,
      title: "Parents, Teacher Meet",
      date: "15 July 2025",
      time: "09:30 AM - 10:30 AM",
      color: "#F59E0B",
      icon: "👑",
    },
    {
      id: 5,
      title: "Parents, Teacher Meet",
      date: "15 July 2025",
      time: "09:30 AM - 10:30 AM",
      color: "#063F6C",
      icon: "🎂",
    },
    {
      id: 6,
      title: "Parents, Teacher Meet",
      date: "15 July 2025",
      time: "09:30 AM - 10:30 AM",
      color: "#F59E0B",
      icon: "📅",
    },
    {
      id: 7,
      title: "Staff Meeting",
      date: "16 July 2025",
      time: "02:00 PM - 03:00 PM",
      color: "#063F6C",
      icon: "👥",
    },
    {
      id: 8,
      title: "Student Assembly",
      date: "17 July 2025",
      time: "08:00 AM - 09:00 AM",
      color: "#F59E0B",
      icon: "🎓",
    },
    {
      id: 9,
      title: "Exam Preparation",
      date: "18 July 2025",
      time: "10:00 AM - 11:00 AM",
      color: "#063F6C",
      icon: "📚",
    },
    {
      id: 10,
      title: "Sports Day",
      date: "19 July 2025",
      time: "03:00 PM - 05:00 PM",
      color: "#F59E0B",
      icon: "⚽",
    },
  ];

  return (
    <div className="w-full h-[892px] bg-white border border-[#F2F2F2] rounded-md shadow-sm flex flex-col transition-all duration-300 font-primary">
      {/* Header */}
      <div className="flex justify-between items-center border-b p-3 border-[#F2F2F2] flex-shrink-0">
        <h2 className="text-base font-semibold text-[#1E293B]">Calendar</h2>
        <button className="w-7 h-7 flex items-center justify-center rounded bg-[#063F6C] text-white hover:bg-[#052a4f] transition-colors duration-200">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Calendar - Fixed height */}
      <div className="px-3 py-4 flex-shrink-0">
        <CustomCalendar />
      </div>

      {/* Upcoming Events Header */}
      <div className="px-3 flex-shrink-0">
        <h3 className="text-sm font-semibold text-[#1E293B] mb-3">
          Upcoming Events
        </h3>
      </div>

      {/* Upcoming Events List - Scrollable with fixed height */}
      <div className="flex-1 px-3 pb-3 overflow-hidden">
        <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex flex-col gap-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors duration-200 bg-white border border-gray-100"
              >
                {/* Colored vertical bar */}
                <div
                  className="w-1 h-12 rounded-full flex-shrink-0"
                  style={{ backgroundColor: event.color }}
                />

                {/* Event icon */}
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">{event.icon}</span>
                </div>

                {/* Event details */}
                <div className="flex flex-col min-w-0">
                  <p className="font-medium text-gray-800 text-sm truncate">
                    {event.title}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-1">{event.date}</p>
                  <p className="text-[#6B7280] text-xs mt-1">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
