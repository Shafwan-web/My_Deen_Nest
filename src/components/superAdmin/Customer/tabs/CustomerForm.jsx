import React, { useState } from "react";
import AddressInfoForm from "./AddressInfoForm";
import SubscriptionInfoForm from "./SubscriptionInfoForm";
import NotesInfoForm from "./NotesInfoForm";

const CustomerForm = ({ isOpen, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState("customerinfo");
  const [photo, setPhoto] = useState(null);

  const tabs = [
    { id: "customerinfo", label: "Customer Info" },
    { id: "address", label: "Address" },
    { id: "subscription", label: "Subscription Plan " },
    { id: "notes", label: "Notes " },
  ];

  // Go next tab
  const goNextTab = () => {
    if (activeTab === "customerinfo") setActiveTab("address");
    else if (activeTab === "address") setActiveTab("subscription");
    else if (activeTab === "subscription") setActiveTab("notes");
  };

  // Go previous tab
  const goPrevTab = () => {
    if (activeTab === "address") setActiveTab("customerinfo");
    else if (activeTab === "subscription") setActiveTab("address");
    else if (activeTab === "notes") setActiveTab("subscription");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-[700px] max-h-[90vh] overflow-y-auto rounded-md shadow-lg z-10 font-primary">
        {/* Header */}
        <div className="relative">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-base text-[#1E293B] font-bold">Student Form</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
          </div>
          <hr className="border-gray-300 border-t" />
        </div>

        {/* Tabs */}
        <div className="flex justify-between text-base gap-2 p-3 mb-4 border border-gray-200 rounded-full m-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "text-[#999999] hover:bg-[#126F77] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-6 pb-6">
          {activeTab === "customerinfo" && (
            <form className="grid grid-cols-1  gap-4">
              {/* Next Button */}
              <div className="w-full  flex flex-col justify-end mt-4">
                <div className="grid grid-cols-2  w-full ">
                  <div className="field w-full p-2">
                    <label htmlFor="" className="font-semibold text-base">
                      Madrasa Name
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                      />
                    </label>
                  </div>
                  <div className="field w-full p-2">
                    <label htmlFor="" className="font-semibold text-base">
                      Admin Name
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-2  w-full ">
                  <div className="field w-full p-2">
                    <label htmlFor="" className="font-semibold text-base">
                      Email
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                      />
                    </label>
                  </div>
                  <div className="field w-full p-2">
                    <label htmlFor="" className="font-semibold text-base">
                      Contact Number
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex w-full  justify-end p-2">
                <button className="px-3 bg-primary text-white rounded-sm py-1 ">
                  Next
                </button>
              </div>
            </form>
          )}

          {activeTab === "address" && (
            <AddressInfoForm goNextTab={goNextTab} goPrevTab={goPrevTab} />
          )}
          {activeTab === "subscription" && (
            <SubscriptionInfoForm goNextTab={goNextTab} goPrevTab={goPrevTab} />
          )}
          {activeTab === "notes" && <NotesInfoForm goPrevTab={goPrevTab} />}
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
