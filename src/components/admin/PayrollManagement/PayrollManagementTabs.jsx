// PayrollManagementTabs.jsx
import React, { useState } from "react";

import OverviewAnalytics from "./Tabs/OverviewAnalytics";
import StaffTeacherManagement from "./Tabs/StaffTeacherManagement";
import PayrollProcessing from "./Tabs/PayrollProcessing";
import PaymentHistory from "./Tabs/PaymentHistory";

const PayrollManagementTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewAnalytics />;
      case "staff":
        return <StaffTeacherManagement />;
      case "processing":
        return <PayrollProcessing />;
      case "history":
        return <PaymentHistory />;
      default:
        return <OverviewAnalytics />;
    }
  };

  return (
    <>
      <div className="bg-white border border-primary mt-4 p-2 w-full rounded-4xl">
        {/* Tabs Header */}
        <div className="flex w-full gap-2">
          <button
            className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview & Analytics
          </button>
          <button
            className={`tab-button ${activeTab === "staff" ? "active" : ""}`}
            onClick={() => setActiveTab("staff")}
          >
            Staff & Teacher Management
          </button>
          <button
            className={`tab-button ${
              activeTab === "processing" ? "active" : ""
            }`}
            onClick={() => setActiveTab("processing")}
          >
            Payroll Processing
          </button>
          <button
            className={`tab-button ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            Payment History
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </>
  );
};

export default PayrollManagementTabs;
