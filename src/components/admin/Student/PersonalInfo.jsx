import React from "react";

const PersonalInfo = () => {
  return (
    <div className="bg-white rounded-md p-6 w-full font-primary">
      {/* Title */}
      <h2 className="text-base md:text-lg font-bold text-gray-800 mb-4">
        Personal Information
      </h2>

      {/* Info Fields */}
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Roll No:</span>
          <span>12345</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Gender:</span>
          <span>Male</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date of Birth:</span>
          <span>12 Aug, 2010</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Class:</span>
          <span>8th</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Section:</span>
          <span>A</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
