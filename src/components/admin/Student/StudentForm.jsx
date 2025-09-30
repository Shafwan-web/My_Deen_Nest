import React, { useState } from "react";
import uploadimg from "../../../assets/icons/uploadimg.svg";
import ParentsInfoForm from "./ParentsInfoForm";
import AcademicInfoForm from "./AcademicInfoForm";
import OtherInfoForm from "./OtherInfoForm";
import { useFormConfig } from "../../../context/FormConfigContext";

const StudentForm = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("basic");
  const [photo, setPhoto] = useState(null);
  const { fields } = useFormConfig();

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "parents", label: "Parents Info" },
    { id: "academic", label: "Academic Info" },
    { id: "other", label: "Other Info" },
  ];

  // Go next tab
  const goNextTab = () => {
    if (activeTab === "basic") setActiveTab("parents");
    else if (activeTab === "parents") setActiveTab("academic");
    else if (activeTab === "academic") setActiveTab("other");
  };

  // Go previous tab
  const goPrevTab = () => {
    if (activeTab === "parents") setActiveTab("basic");
    else if (activeTab === "academic") setActiveTab("parents");
    else if (activeTab === "other") setActiveTab("academic");
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const handleRemovePhoto = () => setPhoto(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
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
          {activeTab === "basic" && (
            <form className="grid grid-cols-2 gap-4">
              {/* Student Photo */}
              {fields.find((f) => f.label === "Student Photo" && f.visible) && (
                <div className="col-span-2 flex items-center gap-3">
                  <div className="border border-gray-300 p-2 rounded w-16 h-16 flex items-center justify-center overflow-hidden">
                    {photo ? (
                      <img
                        src={photo}
                        alt="Uploaded"
                        className="h-full w-full object-cover rounded"
                      />
                    ) : (
                      <img src={uploadimg} alt="Upload" className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        id="fileInput"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="fileInput"
                        className="px-4 py-2 bg-gray-200 rounded-md text-sm cursor-pointer"
                      >
                        Upload
                      </label>
                      {photo && (
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="px-4 py-2 bg-[#093A5B] text-white rounded-md text-sm cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      Upload up to 4MB (JPG, JPEG, PNG, PDF)
                    </p>
                  </div>
                </div>
              )}

              {/* Dynamically render other fields */}
              {fields
                .filter((f) => f.visible && f.label !== "Student Photo")
                .map((field) => (
                  <div
                    key={field.id}
                    className={field.type === "radio" ? "col-span-2" : ""}
                  >
                    <label className="block text-sm font-medium">
                      {field.label}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>

                    {field.type === "text" && (
                      <input
                        type="text"
                        placeholder={`Enter ${field.label}`}
                        className="border border-gray-300 p-2 rounded w-full text-xs"
                      />
                    )}

                    {field.type === "date" && (
                      <input
                        type="date"
                        className="border border-gray-300 p-2 rounded w-full text-xs"
                      />
                    )}

                    {field.type === "radio" && (
                      <div className="flex items-center gap-4 mt-1">
                        <label className="flex items-center gap-1 text-xs">
                          <input type="radio" name={field.label} /> Option 1
                        </label>
                        <label className="flex items-center gap-1 text-xs">
                          <input type="radio" name={field.label} /> Option 2
                        </label>
                      </div>
                    )}
                  </div>
                ))}

              {/* Next Button */}
              <div className="col-span-2 flex justify-end mt-4">
                <button
                  type="button"
                  onClick={goNextTab}
                  className="px-6 py-2 bg-primary text-white rounded cursor-pointer"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {activeTab === "parents" && (
            <ParentsInfoForm goNextTab={goNextTab} goPrevTab={goPrevTab} />
          )}
          {activeTab === "academic" && (
            <AcademicInfoForm goNextTab={goNextTab} goPrevTab={goPrevTab} />
          )}
          {activeTab === "other" && <OtherInfoForm goPrevTab={goPrevTab} />}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
