import React from "react";
import CustomerForm from "./tabs/CustomerForm";
import AddressInfoForm from "./tabs/AddressInfoForm";
import SubscriptionInfoForm from "./tabs/SubscriptionInfoForm";
import NotesInfoForm from "./tabs/NotesInfoForm";

const CustomerTabs = () => {
  const [activeTab, setActiveTab] = useState("customerinfo");

  const renderTabContent = () => {
    switch (activeTab) {
      case "customerinfo":
        return <CustomerForm />;
      case "address":
        return <AddressInfoForm />;
      case "subscription":
        return <SubscriptionInfoForm />;
      case "notes":
        return <NotesInfoForm />;
      default:
        return <StudentList />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-4 p-2 ">
      {/* Tabs Header */}
      <div className="flex border-b border-[#F2F2F2]  text-[#999999] font-bold font-primary text-base">
        <button
          onClick={() => setActiveTab("customerinfo")}
          className={`p-2  ${
            activeTab === "customerinfo"
              ? "text-primary border-b-2  border-[#126F77] font-bold"
              : ""
          }`}
        >
          Student List
        </button>
        <button
          onClick={() => setActiveTab("address")}
          className={`px-4 py-2 ${
            activeTab === "address"
              ? "text-primary border-b-2 border-[#126F77] font-bold"
              : ""
          }`}
        >
          Subject
        </button>
        <button
          onClick={() => setActiveTab("subscription")}
          className={`px-4 py-2 ${
            activeTab === "subscription"
              ? "text-primary border-b-2 border-[#126F77] font-bold"
              : ""
          }`}
        >
          Attendance
        </button>
        <button
          onClick={() => setActiveTab("notes")}
          className={`px-4 py-2 ${
            activeTab === "notes"
              ? "text-primary border-b-2 border-[#126F77] font-bold"
              : ""
          }`}
        >
          Time Table
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-2">{renderTabContent()}</div>
    </div>
  );
};

export default CustomerTabs;
