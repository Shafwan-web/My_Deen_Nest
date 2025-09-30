import React from "react";

const BankDetails = () => {
  return (
    <div className="flex flex-col bg-white rouded-md font-primary ">
      <h2 className="flex text-base p-4 border-b border-gray-100 font-bold ">Bank details</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="">
          <h2 className="text-sm">Bank Name</h2>
          <p className="text-xs">Bank Of India</p>
        </div>
        <div>
          <h2 className="text-sm">Account Number</h2>
          <p className="text-xs">1234567890</p>
        </div>
        <div>
          <h2 className="text-sm">Branch</h2>
          <p className="text-xs">Bhavnagar</p>
        </div>
        <div>
          <h2 className="text-sm">IFSC Code</h2>
          <p className="text-xs">BKID0001234</p>         
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
