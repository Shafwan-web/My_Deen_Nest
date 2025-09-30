import React from "react";
import profile from "../../../assets/icons/img.png";

const StudentInfo = () => {
  return (
    <div className="flex flex-col w-75 h-100 bg-white rounded-md font-primary">
      <div className="flex justify-between border-b border-gray-200 p-4">
        <div className="flex gap-2">
          <img src={profile} alt="" className="w-10 h-10 rounded-md" />
          <p className="font-bold">Shafwan Sheikh</p>
        </div>

        <div>
          <p className="text-[#16A34A] bg-[#E9FDF0] p-1 rounded-md text-xs">
            Active
          </p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <h2 className="font-bold  text-sm">Basic Information</h2>

        <ul className="space-y-2 text-xs">
          <li className="flex">
            <span className="w-32 font-medium">Roll No.:</span>
            <span>12345</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Gender:</span>
            <span>Male</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Date Of Birth:</span>
            <span>01/01/2000</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Blood Group:</span>
            <span>O+</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Religion:</span>
            <span>Muslim</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Caste:</span>
            <span>Ghachi</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Category:</span>
            <span>OBC</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Mother Tongue:</span>
            <span>Gujarati</span>
          </li>
          <li className="flex">
            <span className="w-32 font-medium">Language:</span>
            <span>Gujarati, Hindi, English</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentInfo;
