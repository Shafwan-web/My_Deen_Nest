// StudentTabs.jsx
import React, { useState } from "react";

import StudentDetail from "./Tabs/StudentDetail";
import ProgressReport from "./Tabs/ProgressReport";
import Attendance from "./Tabs/Attendance";
import Events from "./Tabs/Events";
import Fees from "./Tabs/Fees";

const StudentTabs = () => {
  const [activeTab, setActiveTab] = useState("detail");

  const renderTabContent = () => {
    switch (activeTab) {
      case "detail":
        return <StudentDetail />;
      case "progress":
        return <ProgressReport />;
      case "attendance":
        return <Attendance />;
      case "events":
        return <Events />;
      case "fees":
        return <Fees />;
      default:
        return <StudentDetail />;
    }
  };

  return (
    <>
      <div className="bg-white font-primary custom-scrollbar text-xs sm:text-base border border-primary mt-4 p-0.3 sm:p-2 w-full rounded-4xl whitespace-nowrap">
        {/* Tabs Header */}
        <div className="flex w-full gap-0.5 sm:gap-2">
          <button
            className={`tab-button ${
              activeTab === "detail" ? "active" : ""
            } m-0 p-0`}
            onClick={() => setActiveTab("detail")}
          >
            Student Details
          </button>
          <button
            className={`tab-button ${activeTab === "progress" ? "active" : ""}`}
            onClick={() => setActiveTab("progress")}
          >
            Progress Report
          </button>
          <button
            className={`tab-button ${
              activeTab === "attendance" ? "active" : ""
            }`}
            onClick={() => setActiveTab("attendance")}
          >
            Attendance
          </button>
          <button
            className={`tab-button ${activeTab === "events" ? "active" : ""}`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button>
          <button
            className={`tab-button ${activeTab === "fees" ? "active" : ""}`}
            onClick={() => setActiveTab("fees")}
          >
            Fees
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </>
  );
};

export default StudentTabs;
