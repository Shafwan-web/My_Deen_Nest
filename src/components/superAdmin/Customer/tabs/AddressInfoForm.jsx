import React from "react";

const AddressInfoForm = () => {
  return (
    <div>
      <form className="grid grid-cols-1  gap-4">
        {/* Next Button */}
        <div className="w-full  flex flex-col justify-end mt-4">
          <div className="grid grid-cols-2  w-full ">
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                Address Line 1
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
              </label>
            </div>
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                Address Line 2 (Optional)
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2  w-full ">
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                Landmark
                <input
                  type="text"
                  placeholder="Enter Landmark"
                  className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
              </label>
            </div>
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                Area
                <input
                  type="text"
                  placeholder="Enter Area"
                  className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2  w-full">
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                Zipcode
                <input
                  type="text"
                  placeholder="Enter Zipcode"
                  className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
              </label>
            </div>
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                City
                <input
                  type="text"
                  placeholder="Enter City"
                  className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2  w-full">
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                State
                <input
                  type="text"
                  placeholder="Enter State"
                  className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
              </label>
            </div>
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                Country
          <select name="country" id="" className="border px-2 text-sm border-gray-300 w-full py-2 rounded-md">
            <option value="gujarat">gujarat</option>
            <option value="gujarat">gujarat</option>
            <option value="gujarat">gujarat</option>
            <option value="gujarat">gujarat</option>
          </select>
              </label>
            </div>
          </div>
        </div>
        <div className="flex w-full  justify-between p-2">
          <div className="flex"></div>
          <div className="flex gap-2">
            <button className="px-3 bg-[#DFE5EF] text-black rounded-sm py-1 ">
              previous
            </button>
            <button className="px-3 bg-primary text-white rounded-sm py-1 ">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressInfoForm;
