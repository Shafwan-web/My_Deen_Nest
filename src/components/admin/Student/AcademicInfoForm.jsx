import React from "react";

const AcademicInfoForm = ({ goNextTab, goPrevTab }) => {
  return (
    <form className="grid grid-cols-2 gap-4">
      {/* Section */}
      <div>
        <label className="block text-sm font-medium">Section</label>
        <select
          className="border border-gray-300 p-2 rounded w-full text-xs"
          defaultValue=""
        >
          <option value="" disabled>
            Select Section
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>

      {/* Class */}
      <div>
        <label className="block text-sm font-medium">Class</label>
        <select
          className="border border-gray-300 p-2 rounded w-full text-xs"
          defaultValue=""
        >
          <option value="" disabled>
            Select Class
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Previous Madrasa Details */}
      <h2 className="col-span-2 mt-4">Previous Madrasa Details</h2>

      <div>
        <label className="block text-sm font-medium">Madrasa Name</label>
        <input
          type="text"
          placeholder="Enter Madrasa Name"
          className="border border-gray-300 p-2 rounded w-full text-xs"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Address</label>
        <input
          type="text"
          placeholder="Enter Address"
          className="border border-gray-300 p-2 rounded w-full text-xs"
        />
      </div>

      {/* Buttons */}
      <div className="col-span-2 flex justify-end gap-4 mt-4">
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

export default AcademicInfoForm;
