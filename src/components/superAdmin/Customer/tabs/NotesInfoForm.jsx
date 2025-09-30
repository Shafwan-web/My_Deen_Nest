import React from "react";

const NotesInfoForm = () => {
  return (
    <div>
      <form className="grid grid-cols-1  gap-4">
        {/* Next Button */}
        <div className="w-full  flex flex-col justify-end mt-4">
          <div className="grid grid-cols-1   w-full ">
            <div className="field w-full p-2">
              <label htmlFor="" className="font-semibold text-base">
                Additional Notes
                <textarea
                  type="text"
                  placeholder="additional information about this customer"
                  className="border h-[150px] px-2 text-sm border-gray-300 w-full py-2 rounded-md"
                />
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
              Add Customer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NotesInfoForm;
