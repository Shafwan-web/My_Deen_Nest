import React, { useState } from "react";

import TeacherDetailsTab from "./Tabs/TeacherDetailsTab";
import ProgressReports from "./Tabs/ProgressReports";
import Attendance from "./Tabs/Attendance";
import Events from "./Tabs/Events";
import Payroll from "./Tabs/Payroll";

const TeacherTabs = () => {
  const [activeTab, setActiveTab] = useState("details");

  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return <TeacherDetailsTab />;
      // case "progress":
      //   return <ProgressReports />;
      case "attendance":
        return <Attendance />;
      // case "events":
      //   return <Events />;
      case "payroll":
        return <Payroll />;
      default:
        return <TeacherDetailsTab />;
    }
  };

  return (
    <>
      <div className="bg-white border border-primary mt-4 p-2 w-full rounded-4xl">
        {/* Tabs Header */}
        <div className="flex w-full gap-2 flex-wrap">
          <button
            className={`tab-button ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Teacher Details
          </button>
          {/* <button
            className={`tab-button ${activeTab === "progress" ? "active" : ""}`}
            onClick={() => setActiveTab("progress")}
          >
            Progress Reports
          </button> */}
          <button
            className={`tab-button ${
              activeTab === "attendance" ? "active" : ""
            }`}
            onClick={() => setActiveTab("attendance")}
          >
            Attendance
          </button>
          {/* <button
            className={`tab-button ${activeTab === "events" ? "active" : ""}`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button> */}
          <button
            className={`tab-button ${activeTab === "payroll" ? "active" : ""}`}
            onClick={() => setActiveTab("payroll")}
          >
            Payroll
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </>
  );
};

export default TeacherTabs;
