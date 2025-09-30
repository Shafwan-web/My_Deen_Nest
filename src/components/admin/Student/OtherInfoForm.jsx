import React from "react";

const OtherInfoForm = ({ goPrevTab }) => {
  return (
    <form className="grid grid-cols-2 gap-4">
      {/* Blood Group */}
      <div>
        <label className="block text-sm font-medium">Blood Group</label>
        <input
          type="text"
          placeholder="Enter Blood Group"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Hobbies */}
      <div>
        <label className="block text-sm font-medium">Hobbies</label>
        <input
          type="text"
          placeholder="Enter Hobbies"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
 
      {/* Aadhar No */}
      <div className="col-span-2">
        <label className="block text-sm font-medium">Aadhar Number</label>
        <input
          type="text"
          placeholder="Enter Aadhar Number"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Additional Notes */}
      <div className="col-span-2">
        <label className="block text-sm font-medium">Additional Notes</label>
        <textarea
          placeholder="Enter Notes"
          className="border border-gray-300 p-2 rounded w-full"
        ></textarea>
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
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default OtherInfoForm;
