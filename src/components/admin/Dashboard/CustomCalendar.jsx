import React, { useState, useEffect, useRef } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isSameDay,
} from "date-fns";
import leftArrow from "../../../assets/icons/lessthan.svg";
import rightArrow from "../../../assets/icons/greaterthan.svg";
import downArrow from "../../../assets/icons/downarrow.svg";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 16)); // May 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 4, 16));
  const [showYearSelector, setShowYearSelector] = useState(false);
  const yearSelectorRef = useRef(null);

  // Close year selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        yearSelectorRef.current &&
        !yearSelectorRef.current.contains(event.target)
      ) {
        setShowYearSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample events data - you can modify this as needed
  const events = {
    "2025-05-04": [{ type: "meeting", color: "#063F6C" }],
    "2025-05-07": [
      { type: "events", color: "#0A7EC2" },
      { type: "events", color: "#0A7EC2" },
    ],
    "2025-05-12": [
      { type: "events", color: "#0A7EC2" },
      { type: "events", color: "#0A7EC2" },
    ],
    "2025-05-16": [
      { type: "meeting", color: "#063F6C" },
      { type: "events", color: "#0A7EC2" },
      { type: "birthday", color: "#F59E0B" },
    ],
    "2025-05-20": [{ type: "events", color: "#0A7EC2" }],
    "2025-05-28": [
      { type: "meeting", color: "#063F6C" },
      { type: "events", color: "#0A7EC2" },
      { type: "birthday", color: "#F59E0B" },
    ],
  };

  const renderHeader = () => {
    const currentYear = format(currentDate, "yyyy");
    const years = Array.from({ length: 10 }, (_, i) => 2020 + i);

    return (
      <div className="flex justify-between items-center mb-4 font-primary">
        <button
          className="text-gray-600 hover:text-black p-1 rounded hover:bg-gray-100"
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        >
          <img src={leftArrow} alt="" />
        </button>
        <div className="relative" ref={yearSelectorRef}>
          <div
            className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => setShowYearSelector(!showYearSelector)}
          >
            <h2 className="text-sm font-bold text-gray-800">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <span className="text-xs">
              <img src={downArrow} alt="" />
            </span>
          </div>

          {/* Year Selector Dropdown */}
          {showYearSelector && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[120px] font-primary">
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 mb-2">
                  Select Year
                </div>
                <div className="max-h-40 overflow-y-auto custom-scrollbar">
                  {years.map((year) => (
                    <button
                      key={year}
                      className={`w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 transition-colors duration-200 ${
                        year.toString() === currentYear
                          ? "bg-blue-100 text-blue-600"
                          : "text-gray-700"
                      }`}
                      onClick={() => {
                        setCurrentDate(
                          new Date(year, currentDate.getMonth(), 1)
                        );
                        setShowYearSelector(false);
                      }}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          className="text-gray-600 hover:text-black p-1 rounded hover:bg-gray-100"
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
      <div className="grid grid-cols-7 mb-3">
        {days.map((day, index) => (
          <div
            key={day}
            className={`text-center text-xs font-medium ${
              day === "Sun" ? "text-red-500" : "text-gray-500"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Start from Monday
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const dateKey = format(cloneDay, "yyyy-MM-dd");
        const dayEvents = events[dateKey] || [];
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isSelected = isSameDay(day, selectedDate);
        const isToday = isSameDay(day, new Date());

        days.push(
          <div
            key={day.toString()}
            className="relative flex flex-col items-center cursor-pointer min-h-[50px]"
            onClick={() => setSelectedDate(cloneDay)}
          >
            {/* Date cell with background */}
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-colors duration-200
                ${!isCurrentMonth ? "text-gray-300" : "text-gray-700"}
                ${isSelected ? "bg-[#063F6C] text-white" : ""}
                ${isToday && !isSelected ? "bg-blue-100" : ""}
                hover:bg-gray-100
              `}
            >
              <span className={`${isSelected ? "text-white" : ""}`}>
                {format(day, "d")}
              </span>
            </div>

            {/* Event indicators - outside the background */}
            {dayEvents.length > 0 && (
              <div className="flex gap-1 mt-1 justify-center">
                {dayEvents.slice(0, 3).map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="w-1.5 h-1.5 rounded-xs"
                    style={{ backgroundColor: event.color }}
                  />
                ))}
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }

    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <div className="w-full bg-white rounded-lg ">
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-600 font-primary">
        <span className="flex items-center">
          <span className="w-1.5 xl:w-1.5 2xl:w-2 h-1.5 xl:h-1.5 2xl:h-2 bg-[#063F6C] rounded-xs 2xl:rounded-xs mr-2"></span>
          Meeting
        </span>
        <span className="flex items-center">
          <span className="w-1.5 xl:w-1.5 2xl:w-2 h-1.5 xl:h-1.5 2xl:h-2 bg-[#0A7EC2] rounded-xs 2xl:rounded-xs mr-2"></span>
          Events
        </span>
        <span className="flex items-center">
          <span className="w-1.5 xl:w-1.5 2xl:w-2 h-1.5 xl:h-1.5 2xl:h-2 bg-[#F59E0B] rounded-xs 2xl:rounded-xs mr-2"></span>
          Birthday
        </span>
      </div>
    </div>
  );
};

export default CustomCalendar;
