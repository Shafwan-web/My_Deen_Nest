import React, { useState } from "react";
import plusicon from "../../assets/icons/plusicon.svg";
import ClassesTable from "../../components/admin/Classes/ClassesTable";
import CreateClass from "../../components/admin/Classes/CreateClass"; // ✅ Import

const ClassesPage = () => {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[#1E293B] text-xl font-extrabold font-primary">
          Classes
        </h2>
        <button
          onClick={() => setOpenCreate(true)} // ✅ Open modal
          className="bg-primary p-1.5 text-xs sm:text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
        >
          <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
          Create Class
        </button>
      </div>

      <div>
        <ClassesTable />
      </div>

      {/* ✅ Show CreateClass when open */}
      {openCreate && <CreateClass onClose={() => setOpenCreate(false)} />}
    </>
  );
};

export default ClassesPage;
