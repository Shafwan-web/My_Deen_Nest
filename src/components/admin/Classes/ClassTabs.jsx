// ClassTabs.jsx
import React, { useState } from "react";

import TimeTable from "./tabs/TimeTable";
import StudentList from "./Tabs/StudentList";
import Subject from "./Tabs/Subject";
import Attendance from "./Tabs/Attendance";

const ClassTabs = () => {
  const [activeTab, setActiveTab] = useState("student");

  const renderTabContent = () => {
    switch (activeTab) {
      case "student":
        return <StudentList />;
      case "subject":
        return <Subject />;
      case "attendance":
        return <Attendance />;
      case "timetable":
        return <TimeTable />;
      default:
        return <StudentList />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-4 p-2 ">
      {/* Tabs Header */}
      <div className="flex border-b border-[#F2F2F2]  text-[#999999] font-bold font-primary whitespace-nowrap text-xs  sm:text-base">
        <button
          onClick={() => setActiveTab("student")}
          className={`p-2  ${activeTab === "student" ? "text-primary border-b-2  border-[#126F77] font-bold" : ""}`}
        >
          Student List
        </button>
        <button
          onClick={() => setActiveTab("subject")}
          className={`px-3 py-2 ${activeTab === "subject" ? "text-primary border-b-2 border-[#126F77] font-bold" : ""}`}
        >
          Subject
        </button>
        <button
          onClick={() => setActiveTab("attendance")}
          className={`px-3 py-2 ${activeTab === "attendance" ? "text-primary border-b-2 border-[#126F77] font-bold" : ""}`}
        >
          Attendance
        </button>
        <button
          onClick={() => setActiveTab("timetable")}
          className={`px-3 py-2 ${activeTab === "timetable" ? "text-primary border-b-2 border-[#126F77] font-bold" : ""}`}
        >
          Time Table
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-2">{renderTabContent()}</div>
    </div>
  );
};

export default ClassTabs;
