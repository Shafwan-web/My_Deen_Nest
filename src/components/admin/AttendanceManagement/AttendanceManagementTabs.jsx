// AttendanceManagementTabs.jsx
import React, { useState } from "react";

import Analytics from "./Tabs/Analytics";
import StudentAttendance from "./Tabs/StudentAttendance";
import MaulanaAttendance from "./Tabs/MaulanaAttendance";
import StaffAttendance from "./Tabs/StaffAttendance";

const AttendanceManagementTabs = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  const renderTabContent = () => {
    switch (activeTab) {
      case "analytics":
        return <Analytics />;
      case "student":
        return <StudentAttendance />;
      case "maulana":
        return <MaulanaAttendance />;
      case "staff":
        return <StaffAttendance />;
      default:
        return <Analytics />;
    }
  };

  return (
    <>
      <div className="bg-white border border-primary mt-4 p-2 w-full rounded-4xl">
        {/* Tabs Header */}
        <div className="flex w-full gap-2">
          <button
            className={`tab-button ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </button>
          <button
            className={`tab-button ${activeTab === "student" ? "active" : ""}`}
            onClick={() => setActiveTab("student")}
          >
            Student Attendance
          </button>
          <button
            className={`tab-button ${activeTab === "maulana" ? "active" : ""}`}
            onClick={() => setActiveTab("maulana")}
          >
            Maulana Attendance
          </button>
          <button
            className={`tab-button ${activeTab === "staff" ? "active" : ""}`}
            onClick={() => setActiveTab("staff")}
          >
            Staff Attendance
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </>
  );
};

export default AttendanceManagementTabs;
