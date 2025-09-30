import React from "react";
import icon from "../../../assets/icons/icon.svg";

const StudentDocument = () => {
  return (
    <div className="bg-white font-primary">
      <h2 className="text-base font-bold border-b border-gray-100 p-4">Documents</h2>
      <div className="flex gap-2 p-4">
        <img src={icon} alt="" className="w-4.5 h-4.5" />
        <div>
          <h2 className="text-sm font-bold">Courtney Henry</h2>
          <p className="text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            hic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDocument;
