// FeesManagementTabs.jsx
import React, { useState } from "react";

import Overview from "./Tabs/Overview";
import StudentFees from "./Tabs/StudentFees";
import Payments from "./Tabs/Payments";
import FeeStructure from "./Tabs/FeeStructure";
import Reports from "./Tabs/Reports";

const FeesManagementTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "studentFees":
        return <StudentFees />;
      case "payments":
        return <Payments />;
      case "feeStructure":
        return <FeeStructure />;
      case "reports":
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      {" "}
      <div className="bg-white border border-primary mt-4 p-2 w-full rounded-4xl">
        {/* Tabs Header */}
        <div className="flex   w-full gap-2">
          <button
            className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab-button ${
              activeTab === "studentFees" ? "active" : ""
            }`}
            onClick={() => setActiveTab("studentFees")}
          >
            Student Fees
          </button>
          <button
            className={`tab-button  ${
              activeTab === "payments" ? "active" : ""
            }`}
            onClick={() => setActiveTab("payments")}
          >
            Payments
          </button>
          <button
            className={`tab-button ${
              activeTab === "feeStructure" ? "active" : ""
            }`}
            onClick={() => setActiveTab("feeStructure")}
          >
            Fee Structure
          </button>
          <button
            className={`tab-button ${activeTab === "reports" ? "active" : ""}`}
            onClick={() => setActiveTab("reports")}
          >
            Reports
          </button>
        </div>

        {/* Tab Content */}
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </>
  );
};

export default FeesManagementTabs;
