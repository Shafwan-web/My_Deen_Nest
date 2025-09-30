import React from "react";
import profile from "../../../assets/icons/profile.svg";

const StudentNameCard = ({ name, grNo }) => {
  return (
    <div className="flex items-center gap-3 bg-primary p-4 rounded-lg font-primary">
      <img src={profile} alt="" className="h-12 w-12 rounded-full" />
      <div>
        <h2 className="font-semibold text-white">Shafwan</h2>
        <p className="text-white text-sm">GR. No: 123</p>
      </div>
    </div>
  );
};

export default StudentNameCard;
