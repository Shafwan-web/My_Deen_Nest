import React from "react";

const Transportation = () => {
  return (
    <div className="flex flex-col bg-white w-75 h-40 rounded-md font-primary">
      <div className="border-b border-[#E4E4E4] p-4">
        <h2 className="text-[#1E293B] font-bold text-base">Transportation</h2>
      </div>
      <div className="grid grid-cols-2 p-4 gap-2">
        <div>
          <h2 className="font-bold text-sm text-[#1E293B">Route</h2>
          <p className="text-xs">Waghawadi Road</p>
        </div>
        <div>
          <h2 className="font-bold text-sm text-[#1E293B]">Bus Number</h2>
          <p className="text-xs">1212121212121</p>
        </div>
        <div>
          <h2 className="font-bold text-sm ">Pickup Point</h2>
          <p className="text-xs">Meghani Circle</p>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
