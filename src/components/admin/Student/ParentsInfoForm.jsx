import React, { useState } from "react";
import { Info } from "lucide-react";

const ParentsInfoForm = ({ goNextTab, goPrevTab }) => {
  const [parentType, setParentType] = useState("New");
  const [guardianType, setGuardianType] = useState("Parents");

  return (
    <form className="flex flex-col gap-4 ">
      {/* Parent Record */}
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-4">
          <label className="text-sm text-[#333333] font-bold">
            Select Parent Record
          </label>
          <span className="flex items-center gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="parentRecord"
                value="New"
                checked={parentType === "New"}
                onChange={() => setParentType("New")}
                className="accent-black"
              />
              New
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="parentRecord"
                value="Existing"
                checked={parentType === "Existing"}
                onChange={() => setParentType("Existing")}
                className="accent-black"
              />
              Existing
            </label>
          </span>
        </div>

        {/* Info Icon */}
        <div className="relative group">
          <Info className="w-4 h-4 text-gray-500 cursor-pointer" />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 w-64 bg-primary text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            If parent already exists, enter Parent ID, Email, or Name to auto-fill their details.
          </span>
        </div>
      </div>

      {/* Existing Parent */}
      {parentType === "Existing" && (
        <div>
          <label className="block text-sm font-medium">
            Enter Parent ID, Email or Name
          </label>
          <input
            type="text"
            placeholder="Enter Parent ID / Email / Name"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
      )}

      {/* New Parent */}
      {parentType === "New" && (
        <>
          <div>
            <label className="block text-sm font-medium">
              Father’s Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Father's Name"
              className="border border-gray-300 p-2 rounded w-full text-xs"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Parent’s Email</label>
              <input
                type="email"
                placeholder="Enter Parent’s Email"
                className="border border-gray-300 p-2 rounded w-full text-xs"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium">
                Father’s Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Father's Phone"
                className="border border-gray-300 p-2 rounded w-full text-xs"
                required
              />
            </div>
          </div>
        </>
      )}

      {/* Guardian Selection */}
      <div className="flex items-center gap-4 mt-1">
        <label className="text-sm text-[#333333] font-bold flex items-center gap-4">
          If Guardian Is
          <span className="flex items-center gap-2">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="GuardianRecord"
                value="Parents"
                checked={guardianType === "Parents"}
                onChange={() => setGuardianType("Parents")}
                className="accent-black"
              />
              Parents
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="GuardianRecord"
                value="Guardian"
                checked={guardianType === "Guardian"}
                onChange={() => setGuardianType("Guardian")}
                className="accent-black"
              />
              Guardian
            </label>
          </span>
        </label>
      </div>

      {guardianType === "Guardian" && (
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium">
              Guardian Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Guardian Name"
              className="border border-gray-300 p-2 rounded w-full text-xs"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium">
              Guardian Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Guardian Phone"
              className="border border-gray-300 p-2 rounded w-full text-xs"
              required
            />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={goPrevTab}
          className="px-6 py-2 bg-gray-300 text-black rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={goNextTab}
          className="px-6 py-2 bg-primary text-white rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ParentsInfoForm;
